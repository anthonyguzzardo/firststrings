/**
 * Derived per-zone serve statistics, written into tb_player_serve_zones.
 *
 * One row per (player, surface, side_court, serve_direction). The schema
 * also has serve_no for 1st-vs-2nd-serve splits, but the MCP shot parser
 * collapses those into the in-play serve (a missed first serve is not
 * recorded with placement data) — so v1 stores serve_no = 1 for every
 * row representing "the in-play serve, whichever it was."
 *
 * Surface bucketing matches the rest of the lib (1/5/7 → 1, 2/6 → 2,
 * 3 → 3, 4 → 4). Walkovers / retirements excluded. Source: MCP only
 * (external_source_id = 3).
 *
 * Stats:
 *   serves_in        — count of in-play serves (≈ pts where the rally got
 *                      to at least the return, OR ace, OR service winner)
 *   serves_attempted — same as serves_in for now (no fault placements)
 *   aces             — point_outcome_id = 5
 *   service_winners  — point_outcome_id = 6
 *   pts_won          — points where server_id = point_winner_id
 *
 * The faults column stays 0 because the underlying point row doesn't
 * carry the placement of a missed first serve. If we later add per-shot
 * fault placements, swap this to count per (side, direction).
 *
 *   npm run refresh:serve-zones
 */
import { sql } from './libDb';

export async function refreshServeZones(): Promise<void> {
  console.log('[serve-zones] truncating tb_player_serve_zones...');
  await sql`TRUNCATE TABLE tb_player_serve_zones RESTART IDENTITY`;

  console.log('[serve-zones] computing overall slice (surface_id IS NULL)...');
  const overallInserted = await sql<Array<{ serve_zone_id: string }>>`
    INSERT INTO tb_player_serve_zones
      (player_id, surface_id, serve_no, side_court, serve_direction_id,
       serves_attempted, serves_in, faults, aces, service_winners, pts_won,
       computed_through_dt, created_by, modified_by)
    SELECT
      pp.server_id                       AS player_id,
      NULL::int                          AS surface_id,
      1::smallint                        AS serve_no,
      CASE WHEN pp.is_deuce_court THEN 'deuce' ELSE 'ad' END AS side_court,
      pp.serve_direction_id              AS serve_direction_id,
      COUNT(*)::int                      AS serves_attempted,
      COUNT(*)::int                      AS serves_in,
      0::int                             AS faults,
      COUNT(*) FILTER (WHERE pp.point_outcome_id = 5)::int AS aces,
      COUNT(*) FILTER (WHERE pp.point_outcome_id = 6)::int AS service_winners,
      COUNT(*) FILTER (WHERE pp.point_winner_id = pp.server_id)::int AS pts_won,
      CURRENT_DATE, 'refresh-serve-zones', 'refresh-serve-zones'
    FROM tb_point pp
    JOIN tb_match m ON m.match_id = pp.match_id
    WHERE m.external_source_id = 3
      AND NOT m.is_walkover AND NOT m.is_retirement
      AND pp.serve_direction_id IS NOT NULL
      AND pp.is_deuce_court IS NOT NULL
    GROUP BY pp.server_id, side_court, pp.serve_direction_id
    HAVING COUNT(*) > 0
    RETURNING serve_zone_id
  `;
  console.log(`[serve-zones] overall slice: ${overallInserted.length.toLocaleString()} rows`);

  console.log('[serve-zones] computing per-surface slices...');
  const surfaceInserted = await sql<Array<{ serve_zone_id: string }>>`
    INSERT INTO tb_player_serve_zones
      (player_id, surface_id, serve_no, side_court, serve_direction_id,
       serves_attempted, serves_in, faults, aces, service_winners, pts_won,
       computed_through_dt, created_by, modified_by)
    SELECT
      pp.server_id,
      CASE
        WHEN m.surface_id IN (1, 5, 7) THEN 1
        WHEN m.surface_id IN (2, 6)    THEN 2
        WHEN m.surface_id = 3          THEN 3
        WHEN m.surface_id = 4          THEN 4
      END AS surface_id,
      1::smallint,
      CASE WHEN pp.is_deuce_court THEN 'deuce' ELSE 'ad' END,
      pp.serve_direction_id,
      COUNT(*)::int, COUNT(*)::int, 0::int,
      COUNT(*) FILTER (WHERE pp.point_outcome_id = 5)::int,
      COUNT(*) FILTER (WHERE pp.point_outcome_id = 6)::int,
      COUNT(*) FILTER (WHERE pp.point_winner_id = pp.server_id)::int,
      CURRENT_DATE, 'refresh-serve-zones', 'refresh-serve-zones'
    FROM tb_point pp
    JOIN tb_match m ON m.match_id = pp.match_id
    WHERE m.external_source_id = 3
      AND NOT m.is_walkover AND NOT m.is_retirement
      AND pp.serve_direction_id IS NOT NULL
      AND pp.is_deuce_court IS NOT NULL
      AND m.surface_id IN (1, 2, 3, 4, 5, 6, 7)
    GROUP BY pp.server_id, surface_id, pp.is_deuce_court, pp.serve_direction_id
    HAVING COUNT(*) > 0
    RETURNING serve_zone_id
  `;
  console.log(`[serve-zones] surface slices: ${surfaceInserted.length.toLocaleString()} rows`);

  // Sanity: Federer's overall serve placement distribution.
  const fed = await sql<Array<{
    side_court: string;
    serve_direction_id: number;
    serves: number;
    aces: number;
    pts_won: number;
  }>>`
    SELECT sz.side_court, sz.serve_direction_id,
           sz.serves_in AS serves, sz.aces, sz.pts_won
    FROM tb_player_serve_zones sz
    JOIN td_player p ON p.player_id = sz.player_id
    WHERE p.slug = 'roger-federer' AND sz.surface_id IS NULL
    ORDER BY sz.side_court, sz.serve_direction_id
  `;
  if (fed.length > 0) {
    const dirLabel: Record<number, string> = { 1: 'Wide', 2: 'Body', 3: 'T' };
    console.log('[serve-zones] sanity (Federer overall):');
    for (const r of fed) {
      const acePct = r.serves > 0 ? ((r.aces / r.serves) * 100).toFixed(1) : '—';
      const winPct = r.serves > 0 ? ((r.pts_won / r.serves) * 100).toFixed(1) : '—';
      console.log(`         ${r.side_court.padEnd(5)} ${(dirLabel[r.serve_direction_id] ?? '?').padEnd(4)}: ${r.serves.toString().padStart(6)} serves · ${acePct.padStart(5)}% aces · ${winPct.padStart(5)}% pts won`);
    }
  }
}
