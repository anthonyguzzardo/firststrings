/**
 * Derived clutch / leverage metrics per (player, surface).
 *
 * Pure-SQL aggregation over tb_point (joined to tb_match for surface and
 * walkover/retirement filters). Truncate-and-rebuild into
 * tb_player_clutch_metrics — one overall slice (surface_id IS NULL) plus
 * up to four per-surface slices (1=Hard incl. indoor/acrylic, 2=Clay incl.
 * indoor-clay, 3=Grass, 4=Carpet) per player.
 *
 * Source filter: external_source_id = 3 (SACKMANN_MCP) — tb_point only
 * exists for MCP-charted matches. Walkovers and retirements are excluded
 * from both numerator and denominator (they distort leverage averages and
 * tiebreak rates).
 *
 * Stats computed:
 *   matches_sample_size — distinct charted matches the player appeared in
 *   bp_save_pct         — server: pts won where is_break_point AND server = player
 *                         / pts where is_break_point AND server = player
 *   bp_convert_pct      — returner: pts won where is_break_point AND returner = player
 *                         / pts where is_break_point AND returner = player
 *   tiebreak_spw        — pts won as server in tiebreaks / pts as server in tiebreaks
 *   tiebreak_rpw        — pts won as returner in tiebreaks / pts as returner in tiebreaks
 *   leverage_avg        — mean Sackmann leverage across all points the player was in
 *   blr                 — Balanced Leverage Ratio: sum(leverage on points won)
 *                         / sum(leverage on all points the player was in). Sackmann's
 *                         signature stat — values >0.5 mean the player wins their
 *                         high-leverage points more often than their low-leverage ones.
 *   dr_plus             — Dominance Ratio +: (return win rate) / (1 - serve win rate),
 *                         capped at 3.0. Captures "how decisively does this player
 *                         tip the serve/return balance against opponents."
 *
 * Skipped (need additional context the parser can't always supply):
 *   excitement_index, comeback_factor, match_ep, deuce_ace_pct, ad_ace_pct.
 *
 * Idempotent: rerun anytime to incorporate new tb_point ingest. Safe under
 * concurrent reads — the truncate runs in a single statement, the inserts
 * follow.
 */
import { sql } from './libDb';

export async function refreshClutch(): Promise<void> {
  console.log('[clutch] truncating tb_player_clutch_metrics...');
  await sql`TRUNCATE TABLE tb_player_clutch_metrics RESTART IDENTITY`;

  console.log('[clutch] computing overall slice...');
  const overallInserted = await sql<Array<{ clutch_id: string }>>`
    WITH eligible_points AS (
      SELECT
        pp.match_id,
        pp.server_id,
        pp.returner_id,
        pp.point_winner_id,
        pp.is_break_point,
        pp.is_tiebreak,
        pp.leverage
      FROM tb_point pp
      JOIN tb_match m ON m.match_id = pp.match_id
      WHERE m.external_source_id = 3
        AND NOT m.is_walkover
        AND NOT m.is_retirement
    ),
    player_points AS (
      SELECT
        server_id        AS player_id,
        match_id, point_winner_id, server_id, returner_id,
        is_break_point, is_tiebreak, leverage,
        'SERVER'::text   AS role
      FROM eligible_points
      UNION ALL
      SELECT
        returner_id      AS player_id,
        match_id, point_winner_id, server_id, returner_id,
        is_break_point, is_tiebreak, leverage,
        'RETURNER'::text AS role
      FROM eligible_points
    ),
    agg AS (
      SELECT
        player_id,
        COUNT(DISTINCT match_id)::int                                                          AS matches_sample_size,
        COUNT(*)::int                                                                          AS points_sample_size,
        COUNT(*) FILTER (WHERE role = 'SERVER'   AND is_break_point)                           AS bp_faced,
        COUNT(*) FILTER (WHERE role = 'SERVER'   AND is_break_point AND point_winner_id = player_id) AS bp_saved,
        COUNT(*) FILTER (WHERE role = 'RETURNER' AND is_break_point)                           AS bp_chances,
        COUNT(*) FILTER (WHERE role = 'RETURNER' AND is_break_point AND point_winner_id = player_id) AS bp_converted,
        COUNT(*) FILTER (WHERE role = 'SERVER'   AND is_tiebreak)                              AS tb_serve_total,
        COUNT(*) FILTER (WHERE role = 'SERVER'   AND is_tiebreak AND point_winner_id = player_id)    AS tb_serve_won,
        COUNT(*) FILTER (WHERE role = 'RETURNER' AND is_tiebreak)                              AS tb_return_total,
        COUNT(*) FILTER (WHERE role = 'RETURNER' AND is_tiebreak AND point_winner_id = player_id)    AS tb_return_won,
        AVG(leverage) FILTER (WHERE leverage IS NOT NULL)                                      AS leverage_avg,
        SUM(CASE WHEN point_winner_id = player_id THEN leverage ELSE 0 END)                    AS leverage_won,
        SUM(leverage)                                                                          AS leverage_total,
        COUNT(*) FILTER (WHERE role = 'SERVER')                                                AS server_pts_total,
        COUNT(*) FILTER (WHERE role = 'SERVER'   AND point_winner_id = player_id)              AS server_pts_won,
        COUNT(*) FILTER (WHERE role = 'RETURNER')                                              AS returner_pts_total,
        COUNT(*) FILTER (WHERE role = 'RETURNER' AND point_winner_id = player_id)              AS returner_pts_won
      FROM player_points
      GROUP BY player_id
      HAVING COUNT(DISTINCT match_id) > 0
    )
    INSERT INTO tb_player_clutch_metrics
      (player_id, surface_id,
       matches_sample_size, points_sample_size,
       leverage_avg, blr, dr_plus,
       tiebreak_spw, tiebreak_rpw,
       bp_save_pct, bp_convert_pct,
       computed_through_dt, created_by, modified_by)
    SELECT
      player_id, NULL::int,
      matches_sample_size, points_sample_size,
      leverage_avg::real,
      CASE WHEN leverage_total > 0 THEN (leverage_won / leverage_total)::real END                 AS blr,
      CASE
        WHEN server_pts_total > 0 AND returner_pts_total > 0
         AND (server_pts_total - server_pts_won) > 0
        THEN LEAST(
          (returner_pts_won::real / NULLIF(returner_pts_total, 0))
          / NULLIF(1.0 - (server_pts_won::real / NULLIF(server_pts_total, 0)), 0),
          3.0
        )
      END::real                                                                                   AS dr_plus,
      CASE WHEN tb_serve_total  > 0 THEN (tb_serve_won::real  / tb_serve_total)  END::real        AS tiebreak_spw,
      CASE WHEN tb_return_total > 0 THEN (tb_return_won::real / tb_return_total) END::real        AS tiebreak_rpw,
      CASE WHEN bp_faced        > 0 THEN (bp_saved::real      / bp_faced)        END::real        AS bp_save_pct,
      CASE WHEN bp_chances      > 0 THEN (bp_converted::real  / bp_chances)      END::real        AS bp_convert_pct,
      CURRENT_DATE, 'refresh-clutch', 'refresh-clutch'
    FROM agg
    RETURNING clutch_id
  `;
  console.log(`[clutch] overall slice: ${overallInserted.length.toLocaleString()} rows`);

  console.log('[clutch] computing per-surface slices...');
  const surfaceInserted = await sql<Array<{ clutch_id: string }>>`
    WITH eligible_points AS (
      SELECT
        pp.match_id,
        pp.server_id,
        pp.returner_id,
        pp.point_winner_id,
        pp.is_break_point,
        pp.is_tiebreak,
        pp.leverage,
        CASE
          WHEN m.surface_id IN (1, 5, 7) THEN 1
          WHEN m.surface_id IN (2, 6)    THEN 2
          WHEN m.surface_id = 3          THEN 3
          WHEN m.surface_id = 4          THEN 4
          ELSE NULL
        END AS bucket
      FROM tb_point pp
      JOIN tb_match m ON m.match_id = pp.match_id
      WHERE m.external_source_id = 3
        AND NOT m.is_walkover
        AND NOT m.is_retirement
    ),
    player_points AS (
      SELECT
        server_id        AS player_id, bucket,
        match_id, point_winner_id, server_id, returner_id,
        is_break_point, is_tiebreak, leverage,
        'SERVER'::text   AS role
      FROM eligible_points WHERE bucket IS NOT NULL
      UNION ALL
      SELECT
        returner_id      AS player_id, bucket,
        match_id, point_winner_id, server_id, returner_id,
        is_break_point, is_tiebreak, leverage,
        'RETURNER'::text AS role
      FROM eligible_points WHERE bucket IS NOT NULL
    ),
    agg AS (
      SELECT
        player_id, bucket,
        COUNT(DISTINCT match_id)::int                                                          AS matches_sample_size,
        COUNT(*)::int                                                                          AS points_sample_size,
        COUNT(*) FILTER (WHERE role = 'SERVER'   AND is_break_point)                           AS bp_faced,
        COUNT(*) FILTER (WHERE role = 'SERVER'   AND is_break_point AND point_winner_id = player_id) AS bp_saved,
        COUNT(*) FILTER (WHERE role = 'RETURNER' AND is_break_point)                           AS bp_chances,
        COUNT(*) FILTER (WHERE role = 'RETURNER' AND is_break_point AND point_winner_id = player_id) AS bp_converted,
        COUNT(*) FILTER (WHERE role = 'SERVER'   AND is_tiebreak)                              AS tb_serve_total,
        COUNT(*) FILTER (WHERE role = 'SERVER'   AND is_tiebreak AND point_winner_id = player_id)    AS tb_serve_won,
        COUNT(*) FILTER (WHERE role = 'RETURNER' AND is_tiebreak)                              AS tb_return_total,
        COUNT(*) FILTER (WHERE role = 'RETURNER' AND is_tiebreak AND point_winner_id = player_id)    AS tb_return_won,
        AVG(leverage) FILTER (WHERE leverage IS NOT NULL)                                      AS leverage_avg,
        SUM(CASE WHEN point_winner_id = player_id THEN leverage ELSE 0 END)                    AS leverage_won,
        SUM(leverage)                                                                          AS leverage_total,
        COUNT(*) FILTER (WHERE role = 'SERVER')                                                AS server_pts_total,
        COUNT(*) FILTER (WHERE role = 'SERVER'   AND point_winner_id = player_id)              AS server_pts_won,
        COUNT(*) FILTER (WHERE role = 'RETURNER')                                              AS returner_pts_total,
        COUNT(*) FILTER (WHERE role = 'RETURNER' AND point_winner_id = player_id)              AS returner_pts_won
      FROM player_points
      GROUP BY player_id, bucket
      HAVING COUNT(DISTINCT match_id) > 0
    )
    INSERT INTO tb_player_clutch_metrics
      (player_id, surface_id,
       matches_sample_size, points_sample_size,
       leverage_avg, blr, dr_plus,
       tiebreak_spw, tiebreak_rpw,
       bp_save_pct, bp_convert_pct,
       computed_through_dt, created_by, modified_by)
    SELECT
      player_id, bucket,
      matches_sample_size, points_sample_size,
      leverage_avg::real,
      CASE WHEN leverage_total > 0 THEN (leverage_won / leverage_total)::real END                 AS blr,
      CASE
        WHEN server_pts_total > 0 AND returner_pts_total > 0
         AND (server_pts_total - server_pts_won) > 0
        THEN LEAST(
          (returner_pts_won::real / NULLIF(returner_pts_total, 0))
          / NULLIF(1.0 - (server_pts_won::real / NULLIF(server_pts_total, 0)), 0),
          3.0
        )
      END::real                                                                                   AS dr_plus,
      CASE WHEN tb_serve_total  > 0 THEN (tb_serve_won::real  / tb_serve_total)  END::real        AS tiebreak_spw,
      CASE WHEN tb_return_total > 0 THEN (tb_return_won::real / tb_return_total) END::real        AS tiebreak_rpw,
      CASE WHEN bp_faced        > 0 THEN (bp_saved::real      / bp_faced)        END::real        AS bp_save_pct,
      CASE WHEN bp_chances      > 0 THEN (bp_converted::real  / bp_chances)      END::real        AS bp_convert_pct,
      CURRENT_DATE, 'refresh-clutch', 'refresh-clutch'
    FROM agg
    RETURNING clutch_id
  `;
  console.log(`[clutch] surface slices: ${surfaceInserted.length.toLocaleString()} rows`);

  // Sanity check: Federer career bp save % is well-known ~67%.
  const fed = await sql<Array<{
    matches_sample_size: number;
    bp_save_pct: number | null;
    bp_convert_pct: number | null;
    blr: number | null;
    dr_plus: number | null;
    tiebreak_spw: number | null;
    tiebreak_rpw: number | null;
    leverage_avg: number | null;
  }>>`
    SELECT cm.matches_sample_size, cm.bp_save_pct, cm.bp_convert_pct,
           cm.blr, cm.dr_plus, cm.tiebreak_spw, cm.tiebreak_rpw, cm.leverage_avg
    FROM tb_player_clutch_metrics cm
    JOIN td_player p ON p.player_id = cm.player_id
    WHERE p.slug = 'roger-federer' AND cm.surface_id IS NULL
  `;
  if (fed[0]) {
    const f = fed[0];
    const pct = (n: number | null): string => (n === null ? 'n/a' : `${(n * 100).toFixed(1)}%`);
    const dec = (n: number | null, p = 3): string => (n === null ? 'n/a' : n.toFixed(p));
    console.log('[clutch] sanity (Federer overall):');
    console.log(`         matches:  ${f.matches_sample_size.toLocaleString()}`);
    console.log(`         BP save:  ${pct(f.bp_save_pct)}    (target ~67%)`);
    console.log(`         BP cvt:   ${pct(f.bp_convert_pct)}`);
    console.log(`         TB SPW:   ${pct(f.tiebreak_spw)}`);
    console.log(`         TB RPW:   ${pct(f.tiebreak_rpw)}`);
    console.log(`         BLR:      ${dec(f.blr)}`);
    console.log(`         DR+:      ${dec(f.dr_plus)}`);
    console.log(`         lev avg:  ${dec(f.leverage_avg, 4)}`);
  } else {
    console.warn('[clutch] sanity: no Federer row — point ingest may be empty');
  }
}
