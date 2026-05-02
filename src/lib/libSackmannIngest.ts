/**
 * Generic Jeff Sackmann ingest engine. Handles both ATP and WTA: clones
 * the repo, parses atp_players.csv / wta_players.csv into td_player +
 * tm_player_external_id, then walks the per-year match CSVs into
 * td_tournament + tb_match.
 *
 * Idempotent. Bulk inserts; ON CONFLICT DO NOTHING / DO UPDATE handles reruns.
 */
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { parse as parseCsv } from 'csv-parse/sync';
import { sql } from './libDb';
import {
  slugify,
  chunk,
  parseYyyymmdd,
  parseYearFromYyyymmdd,
  ensureRepo,
  handCodeToHandednessId,
  surfaceTextToSurfaceId,
  tourneyLevelCodeToLevelId,
  roundCodeToRoundId,
} from './libIngestUtils';

// ---------------------------------------------------------------------------
// types
// ---------------------------------------------------------------------------
export interface SackmannIngestOpts {
  /** te_tour.tour_id — 1 ATP, 2 WTA. */
  tourId: number;
  /** te_external_source.source_id — 1 SACKMANN_ATP, 2 SACKMANN_WTA. */
  sourceId: number;
  /** Repo HTTPS URL. */
  repoUrl: string;
  /** Local path where the repo is checked out. */
  localPath: string;
  /** Players CSV filename inside the repo. */
  playersFilename: string;
  /** Match CSV filename builder, e.g. (y) => `atp_matches_${y}.csv`. */
  matchesFilenameForYear: (year: number) => string;
  /** Inclusive lower bound for match-file year scan. */
  yearStart: number;
  /** Inclusive upper bound for match-file year scan. */
  yearEnd: number;
  /** Skip git pull if the repo already exists. Defaults true (faster reruns). */
  skipPullIfExists?: boolean;
}

interface PlayerCsvRow {
  player_id: string;
  name_first: string;
  name_last: string;
  hand: string;
  dob: string;
  ioc: string;
  height: string;
  wikidata_id?: string;
}

interface MatchCsvRow {
  tourney_id: string;
  tourney_name: string;
  surface: string;
  draw_size: string;
  tourney_level: string;
  tourney_date: string;
  match_num: string;
  winner_id: string;
  winner_name: string;
  loser_id: string;
  loser_name: string;
  score: string;
  best_of: string;
  round: string;
  minutes: string;
}

// ---------------------------------------------------------------------------
// public entry
// ---------------------------------------------------------------------------
export async function ingestSackmann(opts: SackmannIngestOpts): Promise<void> {
  const tag = opts.tourId === 1 ? 'ATP' : opts.tourId === 2 ? 'WTA' : `tour${opts.tourId}`;

  console.log(`[${tag}] Sackmann ingest starting...`);
  await ensureRepo({
    url: opts.repoUrl,
    localPath: opts.localPath,
    skipPullIfExists: opts.skipPullIfExists ?? true,
  });

  // Phase 1 — players
  const sackmannIdToPlayerId = await ingestPlayers(opts, tag);

  // Phase 2 — tournaments + matches (interleaved year by year)
  const tournamentNameToId = await loadTournamentMap(opts.tourId);
  let totalMatchesInserted = 0;
  let totalMatchesSkipped = 0;
  for (let year = opts.yearStart; year <= opts.yearEnd; year++) {
    const filename = opts.matchesFilenameForYear(year);
    const path = join(opts.localPath, filename);
    if (!existsSync(path)) continue;
    const { inserted, skipped } = await ingestMatchYear({
      year,
      path,
      tag,
      tourId: opts.tourId,
      sourceId: opts.sourceId,
      sackmannIdToPlayerId,
      tournamentNameToId,
    });
    totalMatchesInserted += inserted;
    totalMatchesSkipped += skipped;
  }

  console.log(`\n[${tag}] ✓ Done — ${totalMatchesInserted} match rows upserted, ${totalMatchesSkipped} skipped.`);
}

// ---------------------------------------------------------------------------
// players
// ---------------------------------------------------------------------------
async function ingestPlayers(
  opts: SackmannIngestOpts,
  tag: string,
): Promise<Map<string, bigint>> {
  const path = join(opts.localPath, opts.playersFilename);
  const csv = readFileSync(path, 'utf8');
  const rawRows = parseCsv(csv, {
    columns: true,
    skip_empty_lines: true,
    relax_quotes: true,
    relax_column_count: true,
  }) as PlayerCsvRow[];

  console.log(`[${tag}] read ${rawRows.length.toLocaleString()} players from ${opts.playersFilename}`);

  // Normalize + compute slugs with collision disambiguation.
  type PreparedRow = {
    sackmann_id: string;
    slug: string;
    full_name: string;
    short_name: string;
    born_iso: string | null;
    height_cm: number | null;
    handedness_id: number;
    wikidata_id: string | null;
    ioc: string | null;
  };

  const slugCount = new Map<string, number>();
  const tentative: Array<Omit<PreparedRow, 'slug'> & { baseSlug: string }> = [];
  for (const r of rawRows) {
    const sackmannId = (r.player_id ?? '').trim();
    if (!sackmannId) continue;
    const first = (r.name_first ?? '').trim();
    const last = (r.name_last ?? '').trim();
    const fullName = [first, last].filter(Boolean).join(' ').trim();
    if (!fullName) continue;
    const baseSlug = slugify(fullName);
    if (!baseSlug) continue;
    slugCount.set(baseSlug, (slugCount.get(baseSlug) ?? 0) + 1);

    const heightStr = (r.height ?? '').trim();
    const heightCm = heightStr && /^\d+$/.test(heightStr) ? parseInt(heightStr, 10) : null;

    const wikidataId = (r.wikidata_id ?? '').trim() || null;
    const ioc = (r.ioc ?? '').trim().toUpperCase() || null;

    tentative.push({
      sackmann_id: sackmannId,
      baseSlug,
      full_name: fullName,
      short_name: last || first,
      born_iso: parseYyyymmdd(r.dob),
      height_cm: heightCm,
      handedness_id: handCodeToHandednessId(r.hand),
      wikidata_id: wikidataId,
      ioc,
    });
  }

  const prepared: PreparedRow[] = tentative.map((t) => ({
    sackmann_id: t.sackmann_id,
    slug: (slugCount.get(t.baseSlug) ?? 0) > 1 ? `${t.baseSlug}-${opts.tourId === 1 ? 'atp' : 'wta'}-${t.sackmann_id}` : t.baseSlug,
    full_name: t.full_name,
    short_name: t.short_name,
    born_iso: t.born_iso,
    height_cm: t.height_cm,
    handedness_id: t.handedness_id,
    wikidata_id: t.wikidata_id,
    ioc: t.ioc,
  }));

  // Find which Sackmann ids are already mapped.
  const alreadyMapped = await sql<{ external_id: string; player_id: bigint }[]>`
    SELECT external_id, player_id
    FROM tm_player_external_id
    WHERE source_id = ${opts.sourceId}
  `;
  const existingByExternalId = new Map<string, bigint>();
  for (const r of alreadyMapped) existingByExternalId.set(r.external_id, r.player_id);

  // Bulk-insert td_player rows for the slugs that don't exist yet.
  // ON CONFLICT (slug) DO NOTHING means a curated/existing slug just stays.
  const playerInsertRows = prepared.map((p) => ({
    slug: p.slug,
    full_name: p.full_name,
    short_name: p.short_name,
    tour_id: opts.tourId,
    born_iso: p.born_iso,
    height_cm: p.height_cm,
    handedness_id: p.handedness_id,
    backhand_style_id: 99,
    status_id: 1,
    is_curated: false,
    created_by: `ingest-sackmann-${tag.toLowerCase()}`,
    modified_by: `ingest-sackmann-${tag.toLowerCase()}`,
  }));

  let newPlayersInserted = 0;
  for (const batch of chunk(playerInsertRows, 1000)) {
    const inserted = await sql<{ slug: string }[]>`
      INSERT INTO td_player ${sql(batch as unknown as Record<string, unknown>[],
        'slug', 'full_name', 'short_name', 'tour_id', 'born_iso',
        'height_cm', 'handedness_id', 'backhand_style_id', 'status_id',
        'is_curated', 'created_by', 'modified_by')}
      ON CONFLICT (slug) DO NOTHING
      RETURNING slug
    `;
    newPlayersInserted += inserted.length;
  }
  console.log(`[${tag}] ✓ ${newPlayersInserted.toLocaleString()} new td_player rows inserted (rest already existed)`);

  // Resolve slug → player_id for ALL prepared players (so we can map sackmann_id → player_id).
  const allSlugs = Array.from(new Set(prepared.map((p) => p.slug)));
  const slugToPlayerId = new Map<string, bigint>();
  for (const slugBatch of chunk(allSlugs, 5000)) {
    const rows = await sql<{ slug: string; player_id: bigint }[]>`
      SELECT slug, player_id FROM td_player WHERE slug = ANY(${slugBatch})
    `;
    for (const r of rows) slugToPlayerId.set(r.slug, r.player_id);
  }

  // Build the sackmann_id → player_id result map, mixing already-mapped + newly-resolved.
  const sackmannIdToPlayerId = new Map<string, bigint>();
  for (const [sid, pid] of existingByExternalId) sackmannIdToPlayerId.set(sid, pid);
  for (const p of prepared) {
    if (sackmannIdToPlayerId.has(p.sackmann_id)) continue;
    const pid = slugToPlayerId.get(p.slug);
    if (pid !== undefined) sackmannIdToPlayerId.set(p.sackmann_id, pid);
  }

  // Bulk-insert the missing tm_player_external_id rows for SACKMANN.
  // Dedupe defensively on both unique constraints: (player_id, source_id)
  // AND (source_id, external_id). First occurrence wins.
  const newSackmannMappings = dedupeMappings(
    prepared
      .filter((p) => !existingByExternalId.has(p.sackmann_id))
      .map((p) => {
        const pid = sackmannIdToPlayerId.get(p.sackmann_id);
        if (pid === undefined) return null;
        return {
          player_id: pid,
          source_id: opts.sourceId,
          external_id: p.sackmann_id,
          notes: null,
          created_by: `ingest-sackmann-${tag.toLowerCase()}`,
          modified_by: `ingest-sackmann-${tag.toLowerCase()}`,
        };
      })
      .filter((r): r is NonNullable<typeof r> => r !== null),
  );

  let xrefSackmannInserted = 0;
  for (const batch of chunk(newSackmannMappings, 1000)) {
    const inserted = await sql<{ external_id_pk: bigint }[]>`
      INSERT INTO tm_player_external_id ${sql(batch as unknown as Record<string, unknown>[],
        'player_id', 'source_id', 'external_id', 'notes', 'created_by', 'modified_by')}
      ON CONFLICT (player_id, source_id) DO NOTHING
      RETURNING external_id_pk
    `;
    xrefSackmannInserted += inserted.length;
  }
  console.log(`[${tag}] ✓ ${xrefSackmannInserted.toLocaleString()} Sackmann tm_player_external_id mappings created`);

  // Bonus: also map wikidata_id where present.
  // Dedupe defensively — Sackmann data occasionally reuses a Q-number
  // across player rows; first occurrence wins.
  const SOURCE_WIKIDATA = 6;
  const wikidataMappings = dedupeMappings(
    prepared
      .filter((p) => p.wikidata_id !== null)
      .map((p) => {
        const pid = sackmannIdToPlayerId.get(p.sackmann_id);
        if (pid === undefined) return null;
        return {
          player_id: pid,
          source_id: SOURCE_WIKIDATA,
          external_id: p.wikidata_id!,
          notes: `from ${tag} sackmann player file`,
          created_by: `ingest-sackmann-${tag.toLowerCase()}`,
          modified_by: `ingest-sackmann-${tag.toLowerCase()}`,
        };
      })
      .filter((r): r is NonNullable<typeof r> => r !== null),
  );

  let xrefWikidataInserted = 0;
  for (const batch of chunk(wikidataMappings, 1000)) {
    const inserted = await sql<{ external_id_pk: bigint }[]>`
      INSERT INTO tm_player_external_id ${sql(batch as unknown as Record<string, unknown>[],
        'player_id', 'source_id', 'external_id', 'notes', 'created_by', 'modified_by')}
      ON CONFLICT (player_id, source_id) DO NOTHING
      RETURNING external_id_pk
    `;
    xrefWikidataInserted += inserted.length;
  }
  console.log(`[${tag}] ✓ ${xrefWikidataInserted.toLocaleString()} Wikidata tm_player_external_id mappings created`);

  return sackmannIdToPlayerId;
}

/**
 * Deduplicate player-external-id mappings on both unique-constraint keys:
 * (player_id, source_id) AND (source_id, external_id). First entry wins.
 */
function dedupeMappings<T extends { player_id: bigint; source_id: number; external_id: string }>(
  rows: T[],
): T[] {
  const byPlayerSource = new Set<string>();
  const bySourceExternal = new Set<string>();
  const out: T[] = [];
  for (const r of rows) {
    const k1 = `${r.player_id}:${r.source_id}`;
    const k2 = `${r.source_id}:${r.external_id}`;
    if (byPlayerSource.has(k1) || bySourceExternal.has(k2)) continue;
    byPlayerSource.add(k1);
    bySourceExternal.add(k2);
    out.push(r);
  }
  return out;
}

// ---------------------------------------------------------------------------
// tournaments
// ---------------------------------------------------------------------------
async function loadTournamentMap(tourId: number): Promise<Map<string, bigint>> {
  const rows = await sql<{ name: string; tournament_id: bigint }[]>`
    SELECT name, tournament_id FROM td_tournament WHERE tour_id = ${tourId}
  `;
  const m = new Map<string, bigint>();
  for (const r of rows) m.set(r.name, r.tournament_id);
  return m;
}

async function ensureTournament(args: {
  name: string;
  tourId: number;
  levelId: number | null;
  surfaceId: number | null;
  firstYear: number | null;
  tag: string;
  cache: Map<string, bigint>;
}): Promise<bigint> {
  const cached = args.cache.get(args.name);
  if (cached !== undefined) return cached;

  const inserted = await sql<{ tournament_id: bigint }[]>`
    INSERT INTO td_tournament (name, tour_id, level_id, default_surface_id, first_year, created_by, modified_by)
    VALUES (
      ${args.name}, ${args.tourId}, ${args.levelId ?? 99}, ${args.surfaceId},
      ${args.firstYear},
      ${`ingest-sackmann-${args.tag.toLowerCase()}`},
      ${`ingest-sackmann-${args.tag.toLowerCase()}`}
    )
    ON CONFLICT (name, tour_id) DO UPDATE SET dttm_modified_utc = NOW()
    RETURNING tournament_id
  `;
  const id = inserted[0]!.tournament_id;
  args.cache.set(args.name, id);
  return id;
}

// ---------------------------------------------------------------------------
// matches
// ---------------------------------------------------------------------------
async function ingestMatchYear(args: {
  year: number;
  path: string;
  tag: string;
  tourId: number;
  sourceId: number;
  sackmannIdToPlayerId: Map<string, bigint>;
  tournamentNameToId: Map<string, bigint>;
}): Promise<{ inserted: number; skipped: number }> {
  const csv = readFileSync(args.path, 'utf8');
  const rawRows = parseCsv(csv, {
    columns: true,
    skip_empty_lines: true,
    relax_quotes: true,
    relax_column_count: true,
  }) as MatchCsvRow[];

  const out: Record<string, unknown>[] = [];
  let skipped = 0;

  for (const r of rawRows) {
    const winnerSackmann = (r.winner_id ?? '').trim();
    const loserSackmann = (r.loser_id ?? '').trim();
    if (!winnerSackmann || !loserSackmann || winnerSackmann === '0' || loserSackmann === '0') {
      skipped++;
      continue;
    }
    const p1Id = args.sackmannIdToPlayerId.get(winnerSackmann);
    const p2Id = args.sackmannIdToPlayerId.get(loserSackmann);
    if (p1Id === undefined || p2Id === undefined) {
      skipped++;
      continue;
    }

    const tourneyName = (r.tourney_name ?? '').trim();
    if (!tourneyName) {
      skipped++;
      continue;
    }
    const surfaceId = surfaceTextToSurfaceId(r.surface);
    const levelId = tourneyLevelCodeToLevelId(r.tourney_level, args.tourId);
    const firstYear = parseYearFromYyyymmdd(r.tourney_date) ?? args.year;

    const tournamentId = await ensureTournament({
      name: tourneyName,
      tourId: args.tourId,
      levelId,
      surfaceId,
      firstYear,
      tag: args.tag,
      cache: args.tournamentNameToId,
    });

    const score = (r.score ?? '').trim();
    const isWalkover = /W\/?O/i.test(score);
    const isRetirement = /RET|DEF|RETD/i.test(score);

    const externalMatchId = `${(r.tourney_id ?? '').trim()}_${(r.match_num ?? '').trim()}_${args.year}`;

    const minutes = (r.minutes ?? '').trim();
    const durationMin = minutes && /^\d+$/.test(minutes) ? parseInt(minutes, 10) : null;
    const bestOf = (r.best_of ?? '').trim();

    out.push({
      tournament_id: tournamentId,
      tournament_edition_year: args.year,
      round_id: roundCodeToRoundId(r.round),
      p1_id: p1Id,
      p2_id: p2Id,
      winner_id: p1Id,
      score: score || null,
      surface_id: surfaceId,
      dttm_match_utc: parseYyyymmdd(r.tourney_date) ?? null,
      duration_minutes: durationMin,
      is_walkover: isWalkover,
      is_retirement: isRetirement,
      is_best_of_five: bestOf === '5',
      has_pbp: false,
      has_mcp_chart: false,
      has_court_vision: false,
      external_source_id: args.sourceId,
      external_match_id: externalMatchId,
      created_by: `ingest-sackmann-${args.tag.toLowerCase()}`,
      modified_by: `ingest-sackmann-${args.tag.toLowerCase()}`,
    });
  }

  // Dedupe within the year by (external_source_id, external_match_id).
  // PostgreSQL's ON CONFLICT DO UPDATE can't touch the same row twice in
  // one statement, and a few Sackmann files have duplicated rows.
  const seenKey = new Set<string>();
  const deduped: typeof out = [];
  let withinFileDupes = 0;
  for (const row of out) {
    const k = `${row['external_source_id']}:${row['external_match_id']}`;
    if (seenKey.has(k)) { withinFileDupes++; continue; }
    seenKey.add(k);
    deduped.push(row);
  }

  let inserted = 0;
  for (const batch of chunk(deduped, 500)) {
    const result = await sql<{ match_id: bigint }[]>`
      INSERT INTO tb_match ${sql(batch,
        'tournament_id', 'tournament_edition_year', 'round_id',
        'p1_id', 'p2_id', 'winner_id', 'score', 'surface_id',
        'dttm_match_utc', 'duration_minutes', 'is_walkover', 'is_retirement',
        'is_best_of_five', 'has_pbp', 'has_mcp_chart', 'has_court_vision',
        'external_source_id', 'external_match_id',
        'created_by', 'modified_by')}
      ON CONFLICT (external_source_id, external_match_id) DO UPDATE SET
        score             = EXCLUDED.score,
        winner_id         = EXCLUDED.winner_id,
        duration_minutes  = EXCLUDED.duration_minutes,
        surface_id        = EXCLUDED.surface_id,
        round_id          = EXCLUDED.round_id,
        is_walkover       = EXCLUDED.is_walkover,
        is_retirement     = EXCLUDED.is_retirement,
        modified_by       = EXCLUDED.modified_by,
        dttm_modified_utc = NOW()
      RETURNING match_id
    `;
    inserted += result.length;
  }

  const dupeNote = withinFileDupes > 0 ? ` [${withinFileDupes} dupes]` : '';
  process.stdout.write(`[${args.tag}] ${args.year}: ${inserted} matches (${skipped} skipped${dupeNote}) | `);
  return { inserted, skipped };
}
