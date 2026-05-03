/**
 * Truncate-and-rebuild tb_player_career_stats from tb_match.
 *
 * Writes 5 slices per player who has matches:
 *   • overall          (surface_id NULL, level_id NULL)
 *   • per surface     (surface_id 1/2/3/4 — hard/clay/grass/carpet, level_id NULL)
 *
 * Indoor/acrylic surfaces are bucketed into hard (1) and indoor-clay into clay (2)
 * so the page-level UI can render four canonical surface splits.
 *
 * Filters external_source_id IN (1, 2) to avoid double-counting MCP-charted
 * matches (source 3) that already exist as ATP/WTA rows.
 *
 *   npm run refresh:career-stats
 *
 * Note: the serve / break-point / tiebreak counts on this table need point-level
 * data (tb_point), which is partial today. They stay at 0 and the next refresh
 * pass (refresh-clutch) will fill them in once the point ingest covers more.
 */
import { sql } from '../lib/libDb';

async function main(): Promise<void> {
  console.log('[career-stats] truncating tb_player_career_stats...');
  await sql`TRUNCATE TABLE tb_player_career_stats RESTART IDENTITY`;

  console.log('[career-stats] computing overall slice...');
  const overallInserted = await sql<Array<{ career_stats_id: string }>>`
    WITH p1 AS (
      SELECT
        m.p1_id AS player_id,
        CASE WHEN m.winner_id = m.p1_id THEN 1 ELSE 0 END AS won,
        CASE WHEN m.winner_id = m.p2_id THEN 1 ELSE 0 END AS lost,
        COALESCE(m.sets_won_p1, 0)  AS sw,
        COALESCE(m.sets_won_p2, 0)  AS sl,
        COALESCE(m.games_won_p1, 0) AS gw,
        COALESCE(m.games_won_p2, 0) AS gl
      FROM tb_match m
      WHERE m.external_source_id IN (1, 2) AND m.winner_id IS NOT NULL
    ),
    p2 AS (
      SELECT
        m.p2_id,
        CASE WHEN m.winner_id = m.p2_id THEN 1 ELSE 0 END,
        CASE WHEN m.winner_id = m.p1_id THEN 1 ELSE 0 END,
        COALESCE(m.sets_won_p2, 0),
        COALESCE(m.sets_won_p1, 0),
        COALESCE(m.games_won_p2, 0),
        COALESCE(m.games_won_p1, 0)
      FROM tb_match m
      WHERE m.external_source_id IN (1, 2) AND m.winner_id IS NOT NULL
    ),
    all_rows AS (SELECT * FROM p1 UNION ALL SELECT * FROM p2)
    INSERT INTO tb_player_career_stats
      (player_id, surface_id, level_id,
       matches_won, matches_lost,
       sets_won, sets_lost, games_won, games_lost,
       computed_through_dt, created_by, modified_by)
    SELECT
      player_id,
      NULL::int, NULL::int,
      SUM(won)::int, SUM(lost)::int,
      SUM(sw)::int,  SUM(sl)::int,
      SUM(gw)::int,  SUM(gl)::int,
      CURRENT_DATE, 'refresh-career-stats', 'refresh-career-stats'
    FROM all_rows
    GROUP BY player_id
    HAVING SUM(won) + SUM(lost) > 0
    RETURNING career_stats_id
  `;
  console.log(`[career-stats] overall slice: ${overallInserted.length.toLocaleString()} rows`);

  console.log('[career-stats] computing per-surface slices...');
  const surfaceInserted = await sql<Array<{ career_stats_id: string }>>`
    WITH p1 AS (
      SELECT
        m.p1_id AS player_id,
        CASE
          WHEN m.surface_id IN (1, 5, 7) THEN 1
          WHEN m.surface_id IN (2, 6)    THEN 2
          WHEN m.surface_id = 3          THEN 3
          WHEN m.surface_id = 4          THEN 4
          ELSE NULL
        END AS bucket,
        CASE WHEN m.winner_id = m.p1_id THEN 1 ELSE 0 END AS won,
        CASE WHEN m.winner_id = m.p2_id THEN 1 ELSE 0 END AS lost,
        COALESCE(m.sets_won_p1, 0)  AS sw,
        COALESCE(m.sets_won_p2, 0)  AS sl,
        COALESCE(m.games_won_p1, 0) AS gw,
        COALESCE(m.games_won_p2, 0) AS gl
      FROM tb_match m
      WHERE m.external_source_id IN (1, 2) AND m.winner_id IS NOT NULL
    ),
    p2 AS (
      SELECT
        m.p2_id,
        CASE
          WHEN m.surface_id IN (1, 5, 7) THEN 1
          WHEN m.surface_id IN (2, 6)    THEN 2
          WHEN m.surface_id = 3          THEN 3
          WHEN m.surface_id = 4          THEN 4
          ELSE NULL
        END,
        CASE WHEN m.winner_id = m.p2_id THEN 1 ELSE 0 END,
        CASE WHEN m.winner_id = m.p1_id THEN 1 ELSE 0 END,
        COALESCE(m.sets_won_p2, 0),
        COALESCE(m.sets_won_p1, 0),
        COALESCE(m.games_won_p2, 0),
        COALESCE(m.games_won_p1, 0)
      FROM tb_match m
      WHERE m.external_source_id IN (1, 2) AND m.winner_id IS NOT NULL
    ),
    all_rows AS (SELECT * FROM p1 UNION ALL SELECT * FROM p2)
    INSERT INTO tb_player_career_stats
      (player_id, surface_id, level_id,
       matches_won, matches_lost,
       sets_won, sets_lost, games_won, games_lost,
       computed_through_dt, created_by, modified_by)
    SELECT
      player_id,
      bucket, NULL::int,
      SUM(won)::int, SUM(lost)::int,
      SUM(sw)::int,  SUM(sl)::int,
      SUM(gw)::int,  SUM(gl)::int,
      CURRENT_DATE, 'refresh-career-stats', 'refresh-career-stats'
    FROM all_rows
    WHERE bucket IS NOT NULL
    GROUP BY player_id, bucket
    HAVING SUM(won) + SUM(lost) > 0
    RETURNING career_stats_id
  `;
  console.log(`[career-stats] surface slices: ${surfaceInserted.length.toLocaleString()} rows`);

  // sanity check on Federer's totals — should be ~1265-280 per HANDOFF
  const fed = await sql<Array<{ matches_won: number; matches_lost: number }>>`
    SELECT cs.matches_won, cs.matches_lost
    FROM tb_player_career_stats cs
    JOIN td_player p ON p.player_id = cs.player_id
    WHERE p.slug = 'roger-federer' AND cs.surface_id IS NULL AND cs.level_id IS NULL
  `;
  if (fed[0]) {
    console.log(`[career-stats] sanity: Federer overall ${fed[0].matches_won}-${fed[0].matches_lost}`);
  }
}

main()
  .then(async () => { await sql.end(); })
  .catch(async (e) => {
    console.error('FAILED:', e);
    await sql.end({ timeout: 5 }).catch(() => undefined);
    process.exit(1);
  });
