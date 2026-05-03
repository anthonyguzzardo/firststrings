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
// @endregion aggregates

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
// @endregion embeddings
