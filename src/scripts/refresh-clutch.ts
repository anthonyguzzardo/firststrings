/**
 * Truncate-and-rebuild tb_player_clutch_metrics from tb_point.
 *
 *   npm run refresh:clutch
 *
 * Rebuilds five slices per player who appears in MCP-charted matches:
 *   • overall          (surface_id NULL)
 *   • per surface     (1=Hard incl. indoor/acrylic, 2=Clay incl. indoor-clay,
 *                      3=Grass, 4=Carpet)
 *
 * Filters external_source_id = 3 (SACKMANN_MCP) — tb_point is MCP-only —
 * and excludes walkovers and retirements.
 */
import { sql } from '../lib/libDb';
import { refreshClutch } from '../lib/libDerivedClutch';

async function main(): Promise<void> {
  await refreshClutch();
  await sql.end();
}

main().catch(async (e) => {
  console.error('FAILED:', e);
  await sql.end({ timeout: 5 }).catch(() => undefined);
  process.exit(1);
});
