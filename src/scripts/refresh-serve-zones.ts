/**
 * Truncate-and-rebuild tb_player_serve_zones from tb_point.
 *
 *   npm run refresh:serve-zones
 *
 * Rebuilds one row per (player, surface, side_court, serve_direction).
 * surface_id NULL = overall.
 */
import { sql } from '../lib/libDb';
import { refreshServeZones } from '../lib/libDerivedServeZones';

async function main(): Promise<void> {
  await refreshServeZones();
  await sql.end();
}

main().catch(async (e) => {
  console.error('FAILED:', e);
  await sql.end({ timeout: 5 }).catch(() => undefined);
  process.exit(1);
});
