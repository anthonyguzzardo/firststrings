/**
 * Build / refresh tb_player_style_embedding for curated players.
 *
 *   npm run refresh:style-embedding
 *
 * Run AFTER refresh:career-stats, refresh:clutch, refresh:shot-distribution,
 * and refresh:serve-zones — those feed the feature blob this encoder
 * collapses into a 384-dim vector.
 */
import { sql } from '../lib/libDb';
import { refreshStyleEmbedding } from '../lib/libDerivedStyleEmbedding';

async function main(): Promise<void> {
  await refreshStyleEmbedding();
  await sql.end();
}

main().catch(async (e) => {
  console.error('FAILED:', e);
  await sql.end({ timeout: 5 }).catch(() => undefined);
  process.exit(1);
});
