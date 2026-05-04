/**
 * Backfill tb_point.leverage from scratch.
 *
 *   npm run refresh:leverage
 *
 * Walks every MCP-charted point in match order, computes Sackmann-style
 * |Δ P(match-win)| with a universal P(serve) = 0.62, writes back to
 * tb_point.leverage. Re-run refresh:clutch afterward to surface BLR and
 * leverage_avg in the Clutch panel.
 */
import { sql } from '../lib/libDb';
import { refreshLeverage } from '../lib/libDerivedLeverage';

async function main(): Promise<void> {
  await refreshLeverage();
  await sql.end();
}

main().catch(async (e) => {
  console.error('FAILED:', e);
  await sql.end({ timeout: 5 }).catch(() => undefined);
  process.exit(1);
});
