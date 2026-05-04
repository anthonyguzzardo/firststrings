/**
 * Reconstruct tb_match.score for MCP-charted matches whose score is NULL.
 *
 *   npm run refresh:mcp-score
 *
 * Idempotent — only fills in NULL scores. After this lands, re-run
 * `npm run refresh:match-canonical` so the score-matching passes can fire.
 */
import { sql } from '../lib/libDb';
import { refreshMcpScore } from '../lib/libDerivedMcpScore';

async function main(): Promise<void> {
  await refreshMcpScore();
  await sql.end();
}

main().catch(async (e) => {
  console.error('FAILED:', e);
  await sql.end({ timeout: 5 }).catch(() => undefined);
  process.exit(1);
});
