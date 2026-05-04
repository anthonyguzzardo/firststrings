// @region client
import postgres from 'postgres';

// Resolve the connection URL from whichever env layer is populated:
//   • Astro dev/build → Vite injects .env vars into `import.meta.env` (server side)
//   • tsx scripts     → Node's --env-file=.env populates `process.env`
const importMetaEnv =
  typeof import.meta !== 'undefined' && (import.meta as { env?: Record<string, string | undefined> }).env
    ? (import.meta as { env: Record<string, string | undefined> }).env
    : undefined;

const url = importMetaEnv?.['FIRSTSTRINGS_PG_URL'] ?? process.env['FIRSTSTRINGS_PG_URL'];
if (!url) {
  throw new Error(
    'FIRSTSTRINGS_PG_URL is not set. Copy .env.example to .env and start Postgres with `docker compose up -d`.',
  );
}

export const sql = postgres(url, {
  connection: { search_path: 'first_strings, public' },
  prepare: false,
  transform: { undefined: null },
  // IF NOT EXISTS migration steps emit chatty NOTICE rows that are harmless
  // but pollute orchestrator output. Swallow them.
  onnotice: () => undefined,
});

export type Sql = typeof sql;
// @endregion client

// @region health
export async function pingDb(): Promise<{ ok: boolean; serverTime: Date | null; error?: string }> {
  try {
    const rows = await sql<{ now: Date }[]>`SELECT NOW() AS now`;
    return { ok: true, serverTime: rows[0]?.now ?? null };
  } catch (e) {
    return { ok: false, serverTime: null, error: e instanceof Error ? e.message : String(e) };
  }
}
// @endregion health

// @region elo
export interface EloPoint {
  as_of_dt: Date | string;
  elo_overall: number;
  elo_hard: number | null;
  elo_clay: number | null;
  elo_grass: number | null;
  elo_carpet: number | null;
  match_count_to_date: number | null;
}

/**
 * Time-ordered Elo trajectory for a curated player by slug. Returns one
 * row per match-day. Empty when the player has no matches in the SQL
 * layer (e.g. brand-new players Sackmann hasn't included yet).
 */
export async function getPlayerEloTrajectory(slug: string): Promise<EloPoint[]> {
  return await sql<EloPoint[]>`
    SELECT
      e.as_of_dt,
      e.elo_overall,
      e.elo_hard,
      e.elo_clay,
      e.elo_grass,
      e.elo_carpet,
      e.match_count_to_date
    FROM th_player_elo e
    JOIN td_player p ON p.player_id = e.player_id
    WHERE p.slug = ${slug}
    ORDER BY e.as_of_dt ASC
  `;
}

export interface EloPeaks {
  peak_overall: number | null;
  peak_overall_dt: Date | string | null;
  peak_hard: number | null;
  peak_hard_dt: Date | string | null;
  peak_clay: number | null;
  peak_clay_dt: Date | string | null;
  peak_grass: number | null;
  peak_grass_dt: Date | string | null;
}

export interface SparklinePoint {
  year: number;
  value: number;
}

/**
 * Year-bucketed peak overall Elo per player, batched. Returns a Map keyed by
 * slug. The `value` field carries the year's peak Elo (higher = better) — the
 * sparkline component renders this with `inverted=false`.
 */
export async function getEloAnnualPeaksBySlug(slugs: string[]): Promise<Map<string, SparklinePoint[]>> {
  if (slugs.length === 0) return new Map();
  const rows = await sql<Array<{ slug: string; year: number; value: number }>>`
    SELECT
      p.slug,
      EXTRACT(YEAR FROM e.as_of_dt)::int AS year,
      MAX(e.elo_overall)::int            AS value
    FROM th_player_elo e
    JOIN td_player p ON p.player_id = e.player_id
    WHERE p.slug = ANY(${slugs as unknown as string[]})
    GROUP BY p.slug, year
    ORDER BY p.slug, year
  `;
  const out = new Map<string, SparklinePoint[]>();
  for (const r of rows) {
    const arr = out.get(r.slug) ?? [];
    arr.push({ year: r.year, value: r.value });
    out.set(r.slug, arr);
  }
  return out;
}

/**
 * Year-bucketed best (minimum) ATP/WTA rank per player, batched. Returns the
 * year's career-best rank — the sparkline renders this with `inverted=true`
 * so rank 1 sits at the top. Source: th_player_ranking from Sackmann's
 * weekly-rankings dataset.
 *
 * Use this in preference to the Elo proxy whenever it returns a non-empty
 * trajectory; fall back to Elo for players without ranking history.
 */
export async function getRankingAnnualBestBySlug(slugs: string[]): Promise<Map<string, SparklinePoint[]>> {
  if (slugs.length === 0) return new Map();
  const rows = await sql<Array<{ slug: string; year: number; value: number }>>`
    SELECT
      p.slug,
      EXTRACT(YEAR FROM r.week_dt)::int AS year,
      MIN(r.rank)::int                  AS value
    FROM th_player_ranking r
    JOIN td_player p ON p.player_id = r.player_id
    WHERE p.slug = ANY(${slugs as unknown as string[]})
    GROUP BY p.slug, year
    ORDER BY p.slug, year
  `;
  const out = new Map<string, SparklinePoint[]>();
  for (const r of rows) {
    const arr = out.get(r.slug) ?? [];
    arr.push({ year: r.year, value: r.value });
    out.set(r.slug, arr);
  }
  return out;
}

/** Legacy alias retained while the call sites migrate. */
export type EloAnnualPoint = SparklinePoint;

/** Career peak Elo per track for a curated player, with the date each peak was hit. */
export async function getPlayerEloPeaks(slug: string): Promise<EloPeaks | null> {
  const rows = await sql<EloPeaks[]>`
    WITH e AS (
      SELECT e.* FROM th_player_elo e
      JOIN td_player p ON p.player_id = e.player_id
      WHERE p.slug = ${slug}
    )
    SELECT
      (SELECT max(elo_overall)::int FROM e)               AS peak_overall,
      (SELECT as_of_dt FROM e ORDER BY elo_overall DESC NULLS LAST LIMIT 1) AS peak_overall_dt,
      (SELECT max(elo_hard)::int FROM e)                  AS peak_hard,
      (SELECT as_of_dt FROM e ORDER BY elo_hard DESC NULLS LAST LIMIT 1)    AS peak_hard_dt,
      (SELECT max(elo_clay)::int FROM e)                  AS peak_clay,
      (SELECT as_of_dt FROM e ORDER BY elo_clay DESC NULLS LAST LIMIT 1)    AS peak_clay_dt,
      (SELECT max(elo_grass)::int FROM e)                 AS peak_grass,
      (SELECT as_of_dt FROM e ORDER BY elo_grass DESC NULLS LAST LIMIT 1)   AS peak_grass_dt
  `;
  return rows[0] ?? null;
}
// @endregion elo

// Future regions (add as helpers materialize):
// @region players
// @endregion players

// @region aggregates
export interface PlayerSurfaceStats {
  matchesWon: number;
  matchesLost: number;
  setsWon: number;
  setsLost: number;
  gamesWon: number;
  gamesLost: number;
}

export interface PlayerCareerStats {
  overall: PlayerSurfaceStats;
  hard:   PlayerSurfaceStats | null;
  clay:   PlayerSurfaceStats | null;
  grass:  PlayerSurfaceStats | null;
  carpet: PlayerSurfaceStats | null;
}

/**
 * All cached career-stats slices for a curated player. Pulls overall + per
 * canonical surface (1=Hard incl. indoor/acrylic, 2=Clay incl. indoor-clay,
 * 3=Grass, 4=Carpet) from tb_player_career_stats. Returns null only when
 * the player has never appeared in tb_match (e.g. brand new pros Sackmann
 * hasn't ingested yet).
 */
export async function getCareerStatsBySlug(slug: string): Promise<PlayerCareerStats | null> {
  const rows = await sql<Array<{
    surface_id: number | null;
    matches_won: number; matches_lost: number;
    sets_won: number; sets_lost: number;
    games_won: number; games_lost: number;
  }>>`
    SELECT
      cs.surface_id, cs.matches_won, cs.matches_lost,
      cs.sets_won, cs.sets_lost, cs.games_won, cs.games_lost
    FROM tb_player_career_stats cs
    JOIN td_player p ON p.player_id = cs.player_id
    WHERE p.slug = ${slug} AND cs.level_id IS NULL
  `;
  if (rows.length === 0) return null;
  const blank: PlayerSurfaceStats = {
    matchesWon: 0, matchesLost: 0, setsWon: 0, setsLost: 0, gamesWon: 0, gamesLost: 0,
  };
  const out: PlayerCareerStats = { overall: blank, hard: null, clay: null, grass: null, carpet: null };
  for (const r of rows) {
    const stats: PlayerSurfaceStats = {
      matchesWon: r.matches_won, matchesLost: r.matches_lost,
      setsWon: r.sets_won, setsLost: r.sets_lost,
      gamesWon: r.games_won, gamesLost: r.games_lost,
    };
    if      (r.surface_id === null) out.overall = stats;
    else if (r.surface_id === 1)    out.hard    = stats;
    else if (r.surface_id === 2)    out.clay    = stats;
    else if (r.surface_id === 3)    out.grass   = stats;
    else if (r.surface_id === 4)    out.carpet  = stats;
  }
  return out;
}

export interface PlayerClutchSlice {
  matchesSampleSize: number;
  pointsSampleSize:  number;
  bpSavePct:    number | null;
  bpConvertPct: number | null;
  tiebreakSpw:  number | null;
  tiebreakRpw:  number | null;
  leverageAvg:  number | null;
  blr:          number | null;
  drPlus:       number | null;
}

export interface PlayerClutchMetrics {
  overall: PlayerClutchSlice;
  hard:   PlayerClutchSlice | null;
  clay:   PlayerClutchSlice | null;
  grass:  PlayerClutchSlice | null;
  carpet: PlayerClutchSlice | null;
}

/**
 * All cached clutch slices for a curated player. Pulls overall +
 * per-canonical-surface from tb_player_clutch_metrics. Returns null when
 * the player has no MCP-charted matches (most curated legends do; brand
 * new pros and very-old champions may not). Pages should not render the
 * Clutch section in that case.
 */
export async function getPlayerClutchMetrics(slug: string): Promise<PlayerClutchMetrics | null> {
  const rows = await sql<Array<{
    surface_id: number | null;
    matches_sample_size: number;
    points_sample_size: number;
    bp_save_pct: number | null;
    bp_convert_pct: number | null;
    tiebreak_spw: number | null;
    tiebreak_rpw: number | null;
    leverage_avg: number | null;
    blr: number | null;
    dr_plus: number | null;
  }>>`
    SELECT
      cm.surface_id, cm.matches_sample_size, cm.points_sample_size,
      cm.bp_save_pct, cm.bp_convert_pct,
      cm.tiebreak_spw, cm.tiebreak_rpw,
      cm.leverage_avg, cm.blr, cm.dr_plus
    FROM tb_player_clutch_metrics cm
    JOIN td_player p ON p.player_id = cm.player_id
    WHERE p.slug = ${slug}
  `;
  if (rows.length === 0) return null;

  const toSlice = (r: typeof rows[number]): PlayerClutchSlice => ({
    matchesSampleSize: r.matches_sample_size,
    pointsSampleSize:  r.points_sample_size,
    bpSavePct:    r.bp_save_pct,
    bpConvertPct: r.bp_convert_pct,
    tiebreakSpw:  r.tiebreak_spw,
    tiebreakRpw:  r.tiebreak_rpw,
    leverageAvg:  r.leverage_avg,
    blr:          r.blr,
    drPlus:       r.dr_plus,
  });

  const out: PlayerClutchMetrics = {
    overall: { matchesSampleSize: 0, pointsSampleSize: 0, bpSavePct: null, bpConvertPct: null,
               tiebreakSpw: null, tiebreakRpw: null, leverageAvg: null, blr: null, drPlus: null },
    hard: null, clay: null, grass: null, carpet: null,
  };
  for (const r of rows) {
    const slice = toSlice(r);
    if      (r.surface_id === null) out.overall = slice;
    else if (r.surface_id === 1)    out.hard    = slice;
    else if (r.surface_id === 2)    out.clay    = slice;
    else if (r.surface_id === 3)    out.grass   = slice;
    else if (r.surface_id === 4)    out.carpet  = slice;
  }
  // Floor at 5 charted matches: clutch metrics need a sample to mean anything,
  // and a 1-match panel is mostly empty cells (no break points faced, no
  // tiebreaks played, etc.). Players below the floor get null and the page
  // omits the section. Tune CLUTCH_MIN_MATCHES if the rule needs to change.
  if (out.overall.matchesSampleSize < CLUTCH_MIN_MATCHES) return null;
  return out;
}

const CLUTCH_MIN_MATCHES = 5;

export interface ServeZoneCell {
  side: 'deuce' | 'ad';
  direction: 'wide' | 'body' | 't';
  serves: number;
  aces: number;
  serviceWinners: number;
  ptsWon: number;
  acePct: number | null;
  pctOfSide: number | null;
}

export interface ServeZones {
  totalServes: number;
  cells: ServeZoneCell[];
}

const DIR_NAME: Record<number, ServeZoneCell['direction']> = { 1: 'wide', 2: 'body', 3: 't' };

/**
 * Server placement zones for a curated player. Returns the overall slice
 * (surface_id IS NULL) — the per-surface rows are also stored but the
 * v1 cmpServeRose only renders overall. Returns null when the player has
 * no MCP-charted serves on record.
 */
export async function getPlayerServeZones(slug: string): Promise<ServeZones | null> {
  const rows = await sql<Array<{
    side_court: 'deuce' | 'ad';
    serve_direction_id: number;
    serves_in: number;
    aces: number;
    service_winners: number;
    pts_won: number;
  }>>`
    SELECT sz.side_court, sz.serve_direction_id, sz.serves_in, sz.aces,
           sz.service_winners, sz.pts_won
    FROM tb_player_serve_zones sz
    JOIN td_player p ON p.player_id = sz.player_id
    WHERE p.slug = ${slug} AND sz.surface_id IS NULL
  `;
  if (rows.length === 0) return null;

  const totalsBySide: Record<'deuce' | 'ad', number> = { deuce: 0, ad: 0 };
  for (const r of rows) totalsBySide[r.side_court] += r.serves_in;
  const totalServes = totalsBySide.deuce + totalsBySide.ad;
  if (totalServes < SERVE_ROSE_MIN_SERVES) return null;

  const cells: ServeZoneCell[] = rows
    .filter((r) => DIR_NAME[r.serve_direction_id])
    .map((r) => {
      const dir = DIR_NAME[r.serve_direction_id]!;
      const sideTotal = totalsBySide[r.side_court];
      return {
        side: r.side_court,
        direction: dir,
        serves: r.serves_in,
        aces: r.aces,
        serviceWinners: r.service_winners,
        ptsWon: r.pts_won,
        acePct: r.serves_in > 0 ? r.aces / r.serves_in : null,
        pctOfSide: sideTotal > 0 ? r.serves_in / sideTotal : null,
      };
    });
  return { totalServes, cells };
}

const SERVE_ROSE_MIN_SERVES = 200;

export interface ShotDirectionCell {
  direction: 'opp_fh' | 'middle' | 'opp_bh';
  count:     number;
  winners:   number;
  winnerRate: number | null;
  share:     number | null;
}

export interface ShotDirectionMap {
  forehand: ShotDirectionCell[];
  backhand: ShotDirectionCell[];
  totalGroundstrokes: number;
}

const DIR_TO_KEY: Record<number, ShotDirectionCell['direction']> = {
  1: 'opp_fh',
  2: 'middle',
  3: 'opp_bh',
};

/**
 * Where the player's groundstrokes land — split FH vs BH, three zones
 * (opp FH corner / middle / opp BH corner). Returns null when the player
 * has fewer than SHOT_MAP_MIN_SHOTS charted groundstrokes.
 *
 * Direction is opponent-perspective and parser-flipped for left-handed
 * opponents — so "opp FH corner" reads consistently regardless of the
 * receiver's handedness.
 */
export async function getShotDirectionMap(slug: string): Promise<ShotDirectionMap | null> {
  const rows = await sql<Array<{
    shot_type_id: number;
    groundstroke_direction_id: number;
    n: number;
    winners: number;
  }>>`
    SELECT s.shot_type_id, s.groundstroke_direction_id,
           COUNT(*)::int AS n,
           COUNT(*) FILTER (WHERE s.outcome_id = 2)::int AS winners
    FROM tb_shot s
    JOIN td_player p ON p.player_id = s.hitter_id
    WHERE p.slug = ${slug}
      AND s.shot_type_id IN (2, 3)
      AND s.groundstroke_direction_id IS NOT NULL
      AND s.groundstroke_direction_id IN (1, 2, 3)
    GROUP BY s.shot_type_id, s.groundstroke_direction_id
  `;
  if (rows.length === 0) return null;

  const fhRows = rows.filter((r) => r.shot_type_id === 2);
  const bhRows = rows.filter((r) => r.shot_type_id === 3);
  const fhTotal = fhRows.reduce((s, r) => s + r.n, 0);
  const bhTotal = bhRows.reduce((s, r) => s + r.n, 0);
  const total   = fhTotal + bhTotal;
  if (total < SHOT_MAP_MIN_SHOTS) return null;

  const expand = (subset: typeof rows, totalForSide: number): ShotDirectionCell[] => {
    const dirs: Array<ShotDirectionCell['direction']> = ['opp_fh', 'middle', 'opp_bh'];
    return dirs.map((dir) => {
      const dirId = dir === 'opp_fh' ? 1 : dir === 'middle' ? 2 : 3;
      const r = subset.find((x) => x.groundstroke_direction_id === dirId);
      const count = r?.n ?? 0;
      const winners = r?.winners ?? 0;
      return {
        direction: dir,
        count,
        winners,
        winnerRate: count > 0 ? winners / count : null,
        share:      totalForSide > 0 ? count / totalForSide : null,
      };
    });
  };

  return {
    forehand: expand(fhRows, fhTotal),
    backhand: expand(bhRows, bhTotal),
    totalGroundstrokes: total,
  };
}

const SHOT_MAP_MIN_SHOTS = 1000;
// @endregion aggregates

// @region venues
export interface VenueRow {
  venue_id:   bigint;
  name:       string;
  city:       string | null;
  country:    string | null;
  countryIso: string | null;
  capacity:   number | null;
  yearBuilt:  number | null;
  lat:        number | null;
  lon:        number | null;
  notes:      string | null;
}

export async function getAllVenues(opts?: { minCapacity?: number; limit?: number }): Promise<VenueRow[]> {
  const minCap = opts?.minCapacity ?? 0;
  const limit  = opts?.limit ?? 200;
  return await sql<VenueRow[]>`
    SELECT v.venue_id,
           v.name,
           v.city,
           c.name      AS country,
           c.code_iso2 AS "countryIso",
           v.capacity,
           v.year_built AS "yearBuilt",
           v.lat,
           v.lon,
           v.notes
    FROM td_venue v
    LEFT JOIN td_country c ON c.country_id = v.country_id
    WHERE v.capacity IS NULL OR v.capacity >= ${minCap}
    ORDER BY (v.notes IS NOT NULL) DESC,
             v.capacity DESC NULLS LAST,
             v.name ASC
    LIMIT ${limit}
  `;
}
// @endregion venues

// @region matches
export interface HeadToHeadSurfaceCount {
  a: number;
  b: number;
}

export interface HeadToHeadMeeting {
  year: number;
  round: string | null;
  score: string | null;
  surface: string | null;
  tournament: string | null;
  winnerSlug: string | null;
  /** True when the underlying match row has no dttm_match_utc and ordering fell back to the year. */
  isApproxDate: boolean;
}

export interface HeadToHead {
  aSlug: string;
  bSlug: string;
  aWins: number;
  bWins: number;
  bySurface: {
    hard: HeadToHeadSurfaceCount;
    clay: HeadToHeadSurfaceCount;
    grass: HeadToHeadSurfaceCount;
    carpet: HeadToHeadSurfaceCount;
  };
  lastMeeting: HeadToHeadMeeting | null;
}

/**
 * Career head-to-head between two curated players. Counts every tour-level
 * match in SACKMANN_ATP / SACKMANN_WTA (sources 1, 2) — MCP-charted matches
 * (source 3) are filtered out so we don't double-count rows that exist in
 * both datasets. Returns null when either slug is unknown to the SQL layer
 * or the players have never met.
 */
export async function getHeadToHead(aSlug: string, bSlug: string): Promise<HeadToHead | null> {
  const aggRows = await sql<Array<{
    a_id: string | null;
    b_id: string | null;
    a_wins: number;
    b_wins: number;
    hard_a: number; hard_b: number;
    clay_a: number; clay_b: number;
    grass_a: number; grass_b: number;
    carpet_a: number; carpet_b: number;
  }>>`
    WITH ids AS (
      SELECT
        (SELECT player_id FROM td_player WHERE slug = ${aSlug})::text AS a_id,
        (SELECT player_id FROM td_player WHERE slug = ${bSlug})::text AS b_id
    ),
    matches AS (
      SELECT
        m.winner_id::text AS winner_id,
        CASE
          WHEN m.surface_id IN (1, 5, 7) THEN 'HARD'
          WHEN m.surface_id IN (2, 6)    THEN 'CLAY'
          WHEN m.surface_id = 3          THEN 'GRASS'
          WHEN m.surface_id = 4          THEN 'CARPET'
          ELSE 'OTHER'
        END AS bucket
      FROM tb_match m, ids
      WHERE m.external_source_id IN (1, 2)
        AND m.winner_id IS NOT NULL
        AND ((m.p1_id::text = ids.a_id AND m.p2_id::text = ids.b_id)
          OR (m.p1_id::text = ids.b_id AND m.p2_id::text = ids.a_id))
    )
    SELECT
      (SELECT a_id FROM ids) AS a_id,
      (SELECT b_id FROM ids) AS b_id,
      COUNT(*) FILTER (WHERE m.winner_id = (SELECT a_id FROM ids))::int AS a_wins,
      COUNT(*) FILTER (WHERE m.winner_id = (SELECT b_id FROM ids))::int AS b_wins,
      COUNT(*) FILTER (WHERE m.bucket = 'HARD'   AND m.winner_id = (SELECT a_id FROM ids))::int AS hard_a,
      COUNT(*) FILTER (WHERE m.bucket = 'HARD'   AND m.winner_id = (SELECT b_id FROM ids))::int AS hard_b,
      COUNT(*) FILTER (WHERE m.bucket = 'CLAY'   AND m.winner_id = (SELECT a_id FROM ids))::int AS clay_a,
      COUNT(*) FILTER (WHERE m.bucket = 'CLAY'   AND m.winner_id = (SELECT b_id FROM ids))::int AS clay_b,
      COUNT(*) FILTER (WHERE m.bucket = 'GRASS'  AND m.winner_id = (SELECT a_id FROM ids))::int AS grass_a,
      COUNT(*) FILTER (WHERE m.bucket = 'GRASS'  AND m.winner_id = (SELECT b_id FROM ids))::int AS grass_b,
      COUNT(*) FILTER (WHERE m.bucket = 'CARPET' AND m.winner_id = (SELECT a_id FROM ids))::int AS carpet_a,
      COUNT(*) FILTER (WHERE m.bucket = 'CARPET' AND m.winner_id = (SELECT b_id FROM ids))::int AS carpet_b
    FROM matches m
  `;
  const agg = aggRows[0];
  if (!agg || agg.a_id === null || agg.b_id === null) return null;
  if (agg.a_wins + agg.b_wins === 0) return null;

  const lastRows = await sql<Array<{
    year: number;
    round_label: string | null;
    score: string | null;
    surface_label: string | null;
    tournament_name: string | null;
    winner_slug: string | null;
    has_dttm: boolean;
  }>>`
    SELECT
      m.tournament_edition_year::int    AS year,
      r.label                           AS round_label,
      m.score                           AS score,
      s.label                           AS surface_label,
      t.name                            AS tournament_name,
      pw.slug                           AS winner_slug,
      m.dttm_match_utc IS NOT NULL      AS has_dttm
    FROM tb_match m
    LEFT JOIN te_match_round r  ON r.round_id    = m.round_id
    LEFT JOIN te_surface     s  ON s.surface_id  = m.surface_id
    LEFT JOIN td_tournament  t  ON t.tournament_id = m.tournament_id
    LEFT JOIN td_player      pw ON pw.player_id  = m.winner_id
    WHERE m.external_source_id IN (1, 2)
      AND m.winner_id IS NOT NULL
      AND ((m.p1_id::text = ${agg.a_id} AND m.p2_id::text = ${agg.b_id})
        OR (m.p1_id::text = ${agg.b_id} AND m.p2_id::text = ${agg.a_id}))
    ORDER BY COALESCE(m.dttm_match_utc, make_date(m.tournament_edition_year::int, 12, 31)::timestamptz) DESC,
             m.match_id DESC
    LIMIT 1
  `;
  const last = lastRows[0] ?? null;

  return {
    aSlug,
    bSlug,
    aWins: agg.a_wins,
    bWins: agg.b_wins,
    bySurface: {
      hard:   { a: agg.hard_a,   b: agg.hard_b },
      clay:   { a: agg.clay_a,   b: agg.clay_b },
      grass:  { a: agg.grass_a,  b: agg.grass_b },
      carpet: { a: agg.carpet_a, b: agg.carpet_b },
    },
    lastMeeting: last ? {
      year: last.year,
      round: last.round_label,
      score: last.score,
      surface: last.surface_label,
      tournament: last.tournament_name,
      winnerSlug: last.winner_slug,
      isApproxDate: !last.has_dttm,
    } : null,
  };
}
export interface MatchBetween {
  year: number;
  tournament: string | null;
  round: string | null;
  surface: string | null;
  score: string | null;
  winnerSlug: string | null;
  hasDate: boolean;
}

/**
 * Most-recent N tour-level meetings between two players, newest first.
 * Same source filter as `getHeadToHead` (sources 1, 2 only) so counts agree.
 */
export async function getMatchHistoryBetween(aSlug: string, bSlug: string, limit = 12): Promise<MatchBetween[]> {
  return await sql<Array<MatchBetween>>`
    SELECT
      m.tournament_edition_year::int    AS year,
      t.name                            AS tournament,
      r.label                           AS round,
      s.label                           AS surface,
      m.score                           AS score,
      pw.slug                           AS "winnerSlug",
      m.dttm_match_utc IS NOT NULL      AS "hasDate"
    FROM tb_match m
    LEFT JOIN te_match_round r  ON r.round_id    = m.round_id
    LEFT JOIN te_surface     s  ON s.surface_id  = m.surface_id
    LEFT JOIN td_tournament  t  ON t.tournament_id = m.tournament_id
    LEFT JOIN td_player      pw ON pw.player_id  = m.winner_id
    WHERE m.external_source_id IN (1, 2)
      AND m.winner_id IS NOT NULL
      AND ((m.p1_id = (SELECT player_id FROM td_player WHERE slug = ${aSlug})
            AND m.p2_id = (SELECT player_id FROM td_player WHERE slug = ${bSlug}))
        OR (m.p1_id = (SELECT player_id FROM td_player WHERE slug = ${bSlug})
            AND m.p2_id = (SELECT player_id FROM td_player WHERE slug = ${aSlug})))
    ORDER BY COALESCE(m.dttm_match_utc, make_date(m.tournament_edition_year::int, 12, 31)::timestamptz) DESC,
             m.match_id DESC
    LIMIT ${limit}
  `;
}
export interface YearlyMeetings {
  year: number;
  aWins: number;
  bWins: number;
}

/**
 * Year-bucketed meeting tally between two players. Returns one row per
 * calendar year either side won at least one meeting. Same source filter
 * as `getHeadToHead` (1, 2 only) so the totals match.
 */
export async function getMeetingsByYear(aSlug: string, bSlug: string): Promise<YearlyMeetings[]> {
  return await sql<YearlyMeetings[]>`
    WITH ids AS (
      SELECT
        (SELECT player_id FROM td_player WHERE slug = ${aSlug}) AS a_id,
        (SELECT player_id FROM td_player WHERE slug = ${bSlug}) AS b_id
    )
    SELECT
      m.tournament_edition_year::int AS year,
      COUNT(*) FILTER (WHERE m.winner_id = (SELECT a_id FROM ids))::int AS "aWins",
      COUNT(*) FILTER (WHERE m.winner_id = (SELECT b_id FROM ids))::int AS "bWins"
    FROM tb_match m, ids
    WHERE m.external_source_id IN (1, 2)
      AND m.winner_id IS NOT NULL
      AND ((m.p1_id = ids.a_id AND m.p2_id = ids.b_id)
        OR (m.p1_id = ids.b_id AND m.p2_id = ids.a_id))
    GROUP BY year
    HAVING COUNT(*) > 0
    ORDER BY year ASC
  `;
}
// @endregion matches
// @region points
// @endregion points
// @region shots
// @endregion shots
// @region rankings
// @endregion rankings
// @region aggregates
// @endregion aggregates
// @region embeddings
export interface StyleNeighbour {
  slug: string;
  fullName: string;
  similarity: number;  // 0..1, cosine
}

/**
 * Top-k nearest curated players to `slug` in the style-embedding space.
 * Uses pgvector's `<=>` (cosine distance) operator with the HNSW index
 * on tb_player_style_embedding. Returns null when the player has no
 * embedding row yet.
 */
export async function getStyleNeighbours(slug: string, k: number = 5): Promise<StyleNeighbour[] | null> {
  const exists = await sql<Array<{ ok: boolean }>>`
    SELECT TRUE AS ok FROM tb_player_style_embedding e
    JOIN td_player p ON p.player_id = e.player_id
    WHERE p.slug = ${slug} LIMIT 1
  `;
  if (exists.length === 0) return null;
  const rows = await sql<Array<{ slug: string; full_name: string; sim: number }>>`
    WITH q AS (
      SELECT e.embedding, e.embedding_version
      FROM tb_player_style_embedding e
      JOIN td_player p ON p.player_id = e.player_id
      WHERE p.slug = ${slug}
      ORDER BY e.dttm_modified_utc DESC
      LIMIT 1
    )
    SELECT p.slug, p.full_name,
           (1 - (e.embedding <=> (SELECT embedding FROM q)))::real AS sim
    FROM tb_player_style_embedding e
    JOIN td_player p ON p.player_id = e.player_id
    WHERE e.embedding_version = (SELECT embedding_version FROM q)
      AND p.slug != ${slug}
    ORDER BY e.embedding <=> (SELECT embedding FROM q) ASC
    LIMIT ${k}
  `;
  return rows.map((r) => ({ slug: r.slug, fullName: r.full_name, similarity: r.sim }));
}
// @endregion embeddings
