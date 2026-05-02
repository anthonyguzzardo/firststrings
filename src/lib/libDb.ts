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
// @region matches
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
