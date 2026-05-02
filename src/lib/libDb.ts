// @region client
import postgres from 'postgres';

const url = process.env['FIRSTSTRINGS_PG_URL'];
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
