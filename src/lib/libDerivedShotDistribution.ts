/**
 * Derived per-(player, surface, shot_type) shot distribution. Powers the
 * style embeddings (`py/embed_players.py`) and any future shot-type
 * fingerprint UI.
 *
 * Aggregates over `tb_shot`, joined to `tb_match` for surface bucketing
 * and walkover/retirement filtering. Source filter = SACKMANN_MCP (3).
 */
import { sql } from './libDb';

export async function refreshShotDistribution(): Promise<void> {
  console.log('[shot-dist] truncating tb_player_shot_distribution...');
  await sql`TRUNCATE TABLE tb_player_shot_distribution RESTART IDENTITY`;

  console.log('[shot-dist] computing overall slice (surface_id IS NULL)...');
  const overall = await sql<Array<{ shot_dist_id: string }>>`
    INSERT INTO tb_player_shot_distribution
      (player_id, surface_id, shot_type_id,
       shot_count, winners, forced_errors_drawn, unforced_errors,
       computed_through_dt, created_by, modified_by)
    SELECT
      s.hitter_id,
      NULL::int,
      s.shot_type_id,
      COUNT(*)::int                                               AS shot_count,
      COUNT(*) FILTER (WHERE s.outcome_id = 2)::int               AS winners,
      COUNT(*) FILTER (WHERE s.outcome_id = 3)::int               AS forced_errors_drawn,
      COUNT(*) FILTER (WHERE s.outcome_id = 4)::int               AS unforced_errors,
      CURRENT_DATE, 'refresh-shot-distribution', 'refresh-shot-distribution'
    FROM tb_shot s
    JOIN tb_match m ON m.match_id = (SELECT match_id FROM tb_point pp WHERE pp.point_id = s.point_id)
    WHERE m.external_source_id = 3
      AND NOT m.is_walkover AND NOT m.is_retirement
    GROUP BY s.hitter_id, s.shot_type_id
    HAVING COUNT(*) > 0
    RETURNING shot_dist_id
  `;
  console.log(`[shot-dist] overall slice: ${overall.length.toLocaleString()} rows`);

  console.log('[shot-dist] computing per-surface slices...');
  const surface = await sql<Array<{ shot_dist_id: string }>>`
    INSERT INTO tb_player_shot_distribution
      (player_id, surface_id, shot_type_id,
       shot_count, winners, forced_errors_drawn, unforced_errors,
       computed_through_dt, created_by, modified_by)
    SELECT
      s.hitter_id,
      CASE
        WHEN m.surface_id IN (1, 5, 7) THEN 1
        WHEN m.surface_id IN (2, 6)    THEN 2
        WHEN m.surface_id = 3          THEN 3
        WHEN m.surface_id = 4          THEN 4
      END AS surface_id,
      s.shot_type_id,
      COUNT(*)::int,
      COUNT(*) FILTER (WHERE s.outcome_id = 2)::int,
      COUNT(*) FILTER (WHERE s.outcome_id = 3)::int,
      COUNT(*) FILTER (WHERE s.outcome_id = 4)::int,
      CURRENT_DATE, 'refresh-shot-distribution', 'refresh-shot-distribution'
    FROM tb_shot s
    JOIN tb_point pp ON pp.point_id = s.point_id
    JOIN tb_match m  ON m.match_id  = pp.match_id
    WHERE m.external_source_id = 3
      AND NOT m.is_walkover AND NOT m.is_retirement
      AND m.surface_id IN (1, 2, 3, 4, 5, 6, 7)
    GROUP BY s.hitter_id, surface_id, s.shot_type_id
    HAVING COUNT(*) > 0
    RETURNING shot_dist_id
  `;
  console.log(`[shot-dist] surface slices: ${surface.length.toLocaleString()} rows`);

  // Sanity: Federer's overall shot mix.
  const fed = await sql<Array<{ label: string; shot_count: number; winners: number; ues: number }>>`
    SELECT te.label,
           sd.shot_count, sd.winners,
           sd.unforced_errors AS ues
    FROM tb_player_shot_distribution sd
    JOIN td_player p ON p.player_id = sd.player_id
    JOIN te_shot_type te ON te.shot_type_id = sd.shot_type_id
    WHERE p.slug = 'roger-federer' AND sd.surface_id IS NULL
    ORDER BY sd.shot_count DESC LIMIT 8
  `;
  console.log('[shot-dist] sanity (Federer overall):');
  for (const r of fed) {
    const winRate = r.shot_count > 0 ? ((r.winners / r.shot_count) * 100).toFixed(1) : '—';
    console.log(`         ${r.label.padEnd(20)} ${r.shot_count.toLocaleString().padStart(6)} shots · ${winRate.padStart(5)}% winners · ${r.ues.toLocaleString().padStart(5)} UE`);
  }
}
