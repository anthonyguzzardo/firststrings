/**
 * Recompute Elo trajectories from scratch and upsert into th_player_elo.
 *
 *   npm run refresh:elo
 */
import { sql } from '../lib/libDb';
import { refreshElo } from '../lib/libDerivedElo';

async function main() {
  await refreshElo();
  await sql.end();
}

main().catch(async (e) => {
  console.error('FAILED:', e);
  await sql.end({ timeout: 5 }).catch(() => undefined);
  process.exit(1);
});
