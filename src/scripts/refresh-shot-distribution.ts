/**
 * Truncate-and-rebuild tb_player_shot_distribution from tb_shot.
 *
 *   npm run refresh:shot-distribution
 */
import { sql } from '../lib/libDb';
import { refreshShotDistribution } from '../lib/libDerivedShotDistribution';

async function main(): Promise<void> {
  await refreshShotDistribution();
  await sql.end();
}

main().catch(async (e) => {
  console.error('FAILED:', e);
  await sql.end({ timeout: 5 }).catch(() => undefined);
  process.exit(1);
});
