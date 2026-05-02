/**
 * Match Charting Project (MCP) ingest engine.
 *
 * Loads charting-{m,w}-matches.csv → tb_match (source = SACKMANN_MCP)
 * Loads charting-{m,w}-points-*.csv → tb_point + tb_shot via libMcpShotParser
 *
 * Idempotent. Re-runs upsert by external_match_id.
 *
 * NOTE: This pass focuses on tb_match + tb_point (with parsed point-level
 * flags). Shots populate `tb_shot` too, but that table is huge — see the
 * batch-size + skip flag near the bottom for tuning. Shot-level data is
 * required for shot-direction and serve-placement analyses; point-level
 * already powers ace rate, rally tempo, clutch metrics, and outcomes.
 */
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { parse as parseCsv } from 'csv-parse/sync';
import { sql } from './libDb';
import { chunk, slugify, parseYyyymmdd, roundCodeToRoundId, surfaceTextToSurfaceId } from './libIngestUtils';
import { parseMcpPoint, type ParsedShot } from './libMcpShotParser';

const SOURCE_SACKMANN_MCP = 3;
const TOUR_ATP = 1;
const TOUR_WTA = 2;
const HAND_R = 1;
const HAND_L = 2;
const STATUS_RETIRED = 2;
const LEVEL_UNKNOWN = 99;

interface McpMatchRow {
  match_id: string;
  'Player 1': string;
  'Player 2': string;
  'Pl 1 hand': string;
  'Pl 2 hand': string;
  Date: string;
  Tournament: string;
  Round: string;
  Time: string;
  Court: string;
  Surface: string;
  Umpire: string;
  'Best of': string;
  'Final TB?': string;
  'Charted by': string;
}

interface McpPointRow {
  match_id: string;
  Pt: string;
  Set1: string;
  Set2: string;
  Gm1: string;
  Gm2: string;
  Pts: string;
  'Gm#': string;
  TbSet: string;
  Svr: string;
  '1st': string;
  '2nd': string;
  Notes: string;
  PtWinner: string;
}

export interface McpIngestOpts {
  /** Path to the cloned MCP repo. */
  localPath: string;
  /** If true, also bulk-insert tb_shot rows. Default false (point-level only). */
  ingestShots?: boolean;
}

export async function ingestMcp(opts: McpIngestOpts): Promise<void> {
  console.log('[MCP] starting ingest');

  // Pass 1 — matches (men + women)
  const mcpMatchIdToSqlMatchId = new Map<string, { sqlId: bigint; p1Id: bigint; p2Id: bigint }>();
  await ingestMatchesForGender({ ...opts, gender: 'm', tourId: TOUR_ATP, mcpMatchIdToSqlMatchId });
  await ingestMatchesForGender({ ...opts, gender: 'w', tourId: TOUR_WTA, mcpMatchIdToSqlMatchId });

  // Pass 2 — points (and optionally shots)
  await ingestPointsForGender({ ...opts, gender: 'm', mcpMatchIdToSqlMatchId });
  await ingestPointsForGender({ ...opts, gender: 'w', mcpMatchIdToSqlMatchId });

  console.log('[MCP] done.');
}

// ---------------------------------------------------------------------------
// matches
// ---------------------------------------------------------------------------
async function ingestMatchesForGender(args: {
  localPath: string;
  gender: 'm' | 'w';
  tourId: number;
  mcpMatchIdToSqlMatchId: Map<string, { sqlId: bigint; p1Id: bigint; p2Id: bigint }>;
}): Promise<void> {
  const path = join(args.localPath, `charting-${args.gender}-matches.csv`);
  const csv = readFileSync(path, 'utf8');
  const rows = parseCsv(csv, {
    columns: true,
    skip_empty_lines: true,
    relax_quotes: true,
    relax_column_count: true,
  }) as McpMatchRow[];

  console.log(`[MCP/${args.gender}] read ${rows.length.toLocaleString()} matches`);

  // Phase A — ensure all unique (slug, hand) combos exist as td_player.
  // Build name → slug → player_id map, lazy-creating non-curated players.
  const nameToSlug = new Map<string, string>();
  const slugToHand = new Map<string, number>();
  for (const m of rows) {
    addPlayer(nameToSlug, slugToHand, m['Player 1'], m['Pl 1 hand']);
    addPlayer(nameToSlug, slugToHand, m['Player 2'], m['Pl 2 hand']);
  }

  const allSlugs = Array.from(slugToHand.keys());
  const slugToPlayerId = new Map<string, bigint>();
  for (const slugBatch of chunk(allSlugs, 5000)) {
    const found = await sql<{ slug: string; player_id: bigint }[]>`
      SELECT slug, player_id FROM td_player WHERE slug = ANY(${slugBatch})
    `;
    for (const r of found) slugToPlayerId.set(r.slug, r.player_id);
  }

  const missingSlugs = allSlugs.filter((s) => !slugToPlayerId.has(s));
  if (missingSlugs.length > 0) {
    const newPlayerRows = missingSlugs.map((slug) => {
      const fullName = nameFromSlugBack(nameToSlug, slug);
      return {
        slug,
        full_name: fullName,
        short_name: lastNameOf(fullName),
        tour_id: args.tourId,
        handedness_id: slugToHand.get(slug) ?? 99,
        backhand_style_id: 99,
        status_id: STATUS_RETIRED,    // placeholder; refresh later
        is_curated: false,
        created_by: 'ingest-sackmann-mcp',
        modified_by: 'ingest-sackmann-mcp',
      };
    });
    for (const batch of chunk(newPlayerRows, 1000)) {
      const inserted = await sql<{ slug: string; player_id: bigint }[]>`
        INSERT INTO td_player ${sql(batch as unknown as Record<string, unknown>[],
          'slug', 'full_name', 'short_name', 'tour_id', 'handedness_id',
          'backhand_style_id', 'status_id', 'is_curated', 'created_by', 'modified_by')}
        ON CONFLICT (slug) DO NOTHING
        RETURNING slug, player_id
      `;
      for (const r of inserted) slugToPlayerId.set(r.slug, r.player_id);
    }
    // Backfill any slugs that hit ON CONFLICT (already existed).
    const stillMissing = missingSlugs.filter((s) => !slugToPlayerId.has(s));
    for (const slugBatch of chunk(stillMissing, 5000)) {
      const found = await sql<{ slug: string; player_id: bigint }[]>`
        SELECT slug, player_id FROM td_player WHERE slug = ANY(${slugBatch})
      `;
      for (const r of found) slugToPlayerId.set(r.slug, r.player_id);
    }
    console.log(`[MCP/${args.gender}] +${missingSlugs.length.toLocaleString()} non-curated td_player rows`);
  }

  // Phase B — ensure tournaments
  const uniqueTournNames = Array.from(new Set(rows.map((r) => (r.Tournament ?? '').trim()).filter(Boolean)));
  const tournNameToId = new Map<string, bigint>();
  for (const nameBatch of chunk(uniqueTournNames, 1000)) {
    const found = await sql<{ name: string; tournament_id: bigint }[]>`
      SELECT name, tournament_id FROM td_tournament
      WHERE tour_id = ${args.tourId} AND name = ANY(${nameBatch})
    `;
    for (const r of found) tournNameToId.set(r.name, r.tournament_id);
  }
  const missingTournNames = uniqueTournNames.filter((n) => !tournNameToId.has(n));
  if (missingTournNames.length > 0) {
    const newTourns = missingTournNames.map((name) => ({
      name,
      tour_id: args.tourId,
      level_id: LEVEL_UNKNOWN,
      created_by: 'ingest-sackmann-mcp',
      modified_by: 'ingest-sackmann-mcp',
    }));
    for (const batch of chunk(newTourns, 1000)) {
      const inserted = await sql<{ name: string; tournament_id: bigint }[]>`
        INSERT INTO td_tournament ${sql(batch as unknown as Record<string, unknown>[],
          'name', 'tour_id', 'level_id', 'created_by', 'modified_by')}
        ON CONFLICT (name, tour_id) DO NOTHING
        RETURNING name, tournament_id
      `;
      for (const r of inserted) tournNameToId.set(r.name, r.tournament_id);
    }
    const stillMissing = missingTournNames.filter((n) => !tournNameToId.has(n));
    for (const nameBatch of chunk(stillMissing, 5000)) {
      const found = await sql<{ name: string; tournament_id: bigint }[]>`
        SELECT name, tournament_id FROM td_tournament
        WHERE tour_id = ${args.tourId} AND name = ANY(${nameBatch})
      `;
      for (const r of found) tournNameToId.set(r.name, r.tournament_id);
    }
    console.log(`[MCP/${args.gender}] +${missingTournNames.length.toLocaleString()} td_tournament rows`);
  }

  // Phase C — insert tb_match rows
  const matchInsertRows = rows
    .map((m) => {
      const p1Slug = slugify(m['Player 1']);
      const p2Slug = slugify(m['Player 2']);
      const p1Id = slugToPlayerId.get(p1Slug);
      const p2Id = slugToPlayerId.get(p2Slug);
      const tournId = tournNameToId.get((m.Tournament ?? '').trim());
      if (!p1Id || !p2Id || !tournId) return null;
      const dateIso = parseYyyymmdd(m.Date) ?? null;
      const year = dateIso ? parseInt(dateIso.slice(0, 4), 10) : null;
      if (!year) return null;
      const surfId = surfaceTextToSurfaceId(m.Surface);
      const bestOfFive = (m['Best of'] ?? '').trim() === '5';
      return {
        external_match_id: m.match_id,
        external_source_id: SOURCE_SACKMANN_MCP,
        tournament_id: tournId,
        tournament_edition_year: year,
        round_id: roundCodeToRoundId(m.Round),
        p1_id: p1Id,
        p2_id: p2Id,
        winner_id: null as bigint | null,    // determined later from final point
        score: null as string | null,
        surface_id: surfId,
        dttm_match_utc: dateIso,
        is_walkover: false,
        is_retirement: false,
        is_best_of_five: bestOfFive,
        has_pbp: true,
        has_mcp_chart: true,
        has_court_vision: false,
        created_by: 'ingest-sackmann-mcp',
        modified_by: 'ingest-sackmann-mcp',
      };
    })
    .filter((r): r is NonNullable<typeof r> => r !== null);

  let inserted = 0;
  for (const batch of chunk(matchInsertRows, 500)) {
    const result = await sql<{ external_match_id: string; match_id: bigint; p1_id: bigint; p2_id: bigint }[]>`
      INSERT INTO tb_match ${sql(batch as unknown as Record<string, unknown>[],
        'external_match_id', 'external_source_id', 'tournament_id', 'tournament_edition_year',
        'round_id', 'p1_id', 'p2_id', 'score', 'surface_id', 'dttm_match_utc',
        'is_walkover', 'is_retirement', 'is_best_of_five', 'has_pbp', 'has_mcp_chart',
        'has_court_vision', 'created_by', 'modified_by')}
      ON CONFLICT (external_source_id, external_match_id) DO UPDATE SET
        has_mcp_chart     = TRUE,
        modified_by       = EXCLUDED.modified_by,
        dttm_modified_utc = NOW()
      RETURNING external_match_id, match_id, p1_id, p2_id
    `;
    for (const r of result) {
      args.mcpMatchIdToSqlMatchId.set(r.external_match_id, { sqlId: r.match_id, p1Id: r.p1_id, p2Id: r.p2_id });
      inserted++;
    }
  }
  console.log(`[MCP/${args.gender}] ✓ ${inserted.toLocaleString()} tb_match rows upserted`);
}

// ---------------------------------------------------------------------------
// points
// ---------------------------------------------------------------------------
async function ingestPointsForGender(args: {
  localPath: string;
  gender: 'm' | 'w';
  ingestShots?: boolean;
  mcpMatchIdToSqlMatchId: Map<string, { sqlId: bigint; p1Id: bigint; p2Id: bigint }>;
}): Promise<void> {
  const periods = ['to-2009', '2010s', '2020s'] as const;
  for (const period of periods) {
    const path = join(args.localPath, `charting-${args.gender}-points-${period}.csv`);
    if (!existsSync(path)) continue;

    const csv = readFileSync(path, 'utf8');
    const rows = parseCsv(csv, {
      columns: true,
      skip_empty_lines: true,
      relax_quotes: true,
      relax_column_count: true,
    }) as McpPointRow[];

    console.log(`[MCP/${args.gender}/${period}] read ${rows.length.toLocaleString()} points`);

    // Process per-match so tb_point dedupe (match_id, point_no_in_match) survives reruns.
    const byMatch = new Map<string, McpPointRow[]>();
    for (const r of rows) {
      const arr = byMatch.get(r.match_id);
      if (arr) arr.push(r);
      else byMatch.set(r.match_id, [r]);
    }

    let pointsInserted = 0;
    let shotsInserted = 0;
    let matchesProcessed = 0;
    let matchesSkipped = 0;

    // Buffer point rows across multiple matches to batch-insert. Track which
    // match each row came from so we can attach shots after RETURNING.
    type BufferedPoint = {
      mcpMatchId: string;
      mcpPointNo: number;
      payload: Record<string, unknown>;
      shots: ParsedShot[];
    };
    let buffer: BufferedPoint[] = [];
    const POINT_FLUSH = 2000;

    async function flushBuffer() {
      if (buffer.length === 0) return;
      // Deduplicate within buffer on (match_id, point_no_in_match)
      const seen = new Set<string>();
      const dedupBuffer = buffer.filter((b) => {
        const k = `${b.payload['match_id']}:${b.payload['point_no_in_match']}`;
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      });
      const payloads = dedupBuffer.map((b) => b.payload);
      const result = await sql<{ point_id: bigint; match_id: bigint; point_no_in_match: number }[]>`
        INSERT INTO tb_point ${sql(payloads,
          'match_id', 'set_no', 'game_no', 'point_no_in_match', 'point_no_in_game',
          'server_id', 'returner_id', 'server_score_pre', 'returner_score_pre',
          'point_winner_id', 'rally_length', 'is_break_point', 'is_set_point',
          'is_match_point', 'is_tiebreak', 'is_deuce_court', 'serve_direction_id',
          'point_outcome_id', 'ended_on_serve', 'external_source_id',
          'created_by', 'modified_by')}
        ON CONFLICT (match_id, point_no_in_match) DO UPDATE SET
          rally_length        = EXCLUDED.rally_length,
          point_outcome_id    = EXCLUDED.point_outcome_id,
          serve_direction_id  = EXCLUDED.serve_direction_id,
          is_break_point      = EXCLUDED.is_break_point,
          is_tiebreak         = EXCLUDED.is_tiebreak,
          modified_by         = EXCLUDED.modified_by,
          dttm_modified_utc   = NOW()
        RETURNING point_id, match_id, point_no_in_match
      `;
      pointsInserted += result.length;

      if (args.ingestShots) {
        const matchPointKey = (mid: bigint, pno: number) => `${mid}:${pno}`;
        const matchPointToPointId = new Map<string, bigint>();
        for (const r of result) matchPointToPointId.set(matchPointKey(r.match_id, r.point_no_in_match), r.point_id);

        const shotPayloads: Record<string, unknown>[] = [];
        for (const b of dedupBuffer) {
          const matchId = b.payload['match_id'] as bigint;
          const pno = b.payload['point_no_in_match'] as number;
          const pointId = matchPointToPointId.get(matchPointKey(matchId, pno));
          if (pointId === undefined) continue;
          const hitterIds: [bigint, bigint] = b.payload['_hitterIds'] as [bigint, bigint];
          for (const shot of b.shots) {
            // hitter alternates: shot 1 = server (idx 0), shot 2 = returner (idx 1), …
            const hitterId = shot.shot_no % 2 === 1 ? hitterIds[0] : hitterIds[1];
            shotPayloads.push({
              point_id: pointId,
              shot_no: shot.shot_no,
              hitter_id: hitterId,
              shot_type_id: shot.shot_type_id,
              serve_direction_id: shot.serve_direction_id,
              groundstroke_direction_id: shot.groundstroke_direction_id,
              return_depth_id: shot.return_depth_id,
              court_position_id: shot.court_position_id,
              outcome_id: shot.outcome_id,
              error_type_id: shot.error_type_id,
              is_approach: shot.is_approach,
              is_at_net: shot.is_at_net,
              mcp_token: shot.raw,
              external_source_id: SOURCE_SACKMANN_MCP,
              created_by: 'ingest-sackmann-mcp',
              modified_by: 'ingest-sackmann-mcp',
            });
          }
        }
        for (const sBatch of chunk(shotPayloads, 4000)) {
          const ins = await sql<{ shot_id: bigint }[]>`
            INSERT INTO tb_shot ${sql(sBatch,
              'point_id', 'shot_no', 'hitter_id', 'shot_type_id',
              'serve_direction_id', 'groundstroke_direction_id', 'return_depth_id',
              'court_position_id', 'outcome_id', 'error_type_id',
              'is_approach', 'is_at_net', 'mcp_token',
              'external_source_id', 'created_by', 'modified_by')}
            ON CONFLICT (point_id, shot_no) DO NOTHING
            RETURNING shot_id
          `;
          shotsInserted += ins.length;
        }
      }

      buffer = [];
    }

    for (const [mcpMatchId, ptRows] of byMatch) {
      const meta = args.mcpMatchIdToSqlMatchId.get(mcpMatchId);
      if (!meta) {
        matchesSkipped++;
        continue;
      }
      matchesProcessed++;
      const { sqlId, p1Id, p2Id } = meta;
      // Sort by Pt to ensure stable ordering
      ptRows.sort((a, b) => parseInt(a.Pt, 10) - parseInt(b.Pt, 10));

      for (const r of ptRows) {
        const ptNo = parseInt(r.Pt, 10);
        if (!Number.isFinite(ptNo)) continue;
        const svr = r.Svr === '1' ? 1 : r.Svr === '2' ? 2 : null;
        const ptWinner = r.PtWinner === '1' ? 1 : r.PtWinner === '2' ? 2 : null;
        if (!svr || !ptWinner) continue;
        const serverId = svr === 1 ? p1Id : p2Id;
        const returnerId = svr === 1 ? p2Id : p1Id;
        const winnerId = ptWinner === 1 ? p1Id : p2Id;

        const parsed = parseMcpPoint(r['1st'] ?? '', r['2nd'] ?? '');
        const setNo = (parseInt(r.Set1, 10) || 0) + (parseInt(r.Set2, 10) || 0) + 1;
        const gmInSetNo = (parseInt(r.Gm1, 10) || 0) + (parseInt(r.Gm2, 10) || 0) + 1;
        const isTiebreak = (r.TbSet ?? '').toLowerCase() === 'true' && gmInSetNo >= 13;

        // Score parsing: Pts is e.g. "30-15", "AD-40"
        const ptsParts = (r.Pts ?? '').split('-');
        const serverScorePre = ptsParts[0]?.trim() || null;
        const returnerScorePre = ptsParts[1]?.trim() || null;

        // is_break_point: server is one point from losing the game.
        // Quick heuristic: server score < returner score AND returner score in {40, AD}
        const sCnt = scoreToInt(serverScorePre);
        const rCnt = scoreToInt(returnerScorePre);
        const isBreakPoint = rCnt === 4 && sCnt < rCnt;
        const isDeuceCourt = ((sCnt + rCnt) % 2) === 0;

        const endedOnServe = parsed.shots.length === 1
          || (parsed.shots.length === 2 && (parsed.is_serve_winner || parsed.is_double_fault));

        const buffered: BufferedPoint = {
          mcpMatchId,
          mcpPointNo: ptNo,
          shots: parsed.shots,
          payload: {
            match_id: sqlId,
            set_no: setNo,
            game_no: gmInSetNo,
            point_no_in_match: ptNo,
            point_no_in_game: 1,
            server_id: serverId,
            returner_id: returnerId,
            server_score_pre: serverScorePre,
            returner_score_pre: returnerScorePre,
            point_winner_id: winnerId,
            rally_length: parsed.rally_length || null,
            is_break_point: isBreakPoint,
            is_set_point: false,
            is_match_point: false,
            is_tiebreak: isTiebreak,
            is_deuce_court: isDeuceCourt,
            serve_direction_id: parsed.shots[0]?.serve_direction_id ?? null,
            point_outcome_id: parsed.point_outcome_id,
            ended_on_serve: endedOnServe,
            external_source_id: SOURCE_SACKMANN_MCP,
            created_by: 'ingest-sackmann-mcp',
            modified_by: 'ingest-sackmann-mcp',
            _hitterIds: [serverId, returnerId] as [bigint, bigint],
          },
        };
        buffer.push(buffered);
        if (buffer.length >= POINT_FLUSH) await flushBuffer();
      }
    }
    await flushBuffer();

    console.log(
      `[MCP/${args.gender}/${period}] ✓ ${pointsInserted.toLocaleString()} points` +
      (args.ingestShots ? ` · ${shotsInserted.toLocaleString()} shots` : '') +
      ` (${matchesProcessed} matches; ${matchesSkipped} skipped — match metadata not loaded)`,
    );
  }
}

// ---------------------------------------------------------------------------
// helpers
// ---------------------------------------------------------------------------
function addPlayer(
  nameToSlug: Map<string, string>,
  slugToHand: Map<string, number>,
  rawName: string,
  handCode: string,
): void {
  const trimmed = (rawName ?? '').trim();
  if (!trimmed) return;
  const slug = slugify(trimmed);
  if (!slug) return;
  nameToSlug.set(trimmed, slug);
  if (!slugToHand.has(slug)) {
    const hand = handCode === 'R' ? HAND_R : handCode === 'L' ? HAND_L : 99;
    slugToHand.set(slug, hand);
  }
}

function nameFromSlugBack(nameToSlug: Map<string, string>, slug: string): string {
  for (const [name, s] of nameToSlug) if (s === slug) return name;
  return slug;
}

function lastNameOf(fullName: string): string {
  const parts = fullName.trim().split(/\s+/);
  return parts[parts.length - 1] ?? fullName;
}

function scoreToInt(s: string | null): number {
  if (!s) return 0;
  if (s === 'AD') return 4;
  if (s === '0') return 0;
  if (s === '15') return 1;
  if (s === '30') return 2;
  if (s === '40') return 3;
  // tiebreak numerals: just return the int
  const n = parseInt(s, 10);
  return Number.isFinite(n) ? n : 0;
}
