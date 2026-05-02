/**
 * Ingest the Match Charting Project (MCP) data into tb_match + tb_point
 * (and optionally tb_shot — pass --shots to enable, default is point-level only).
 *
 *   npm run ingest:mcp           # tb_match + tb_point
 *   npm run ingest:mcp -- --shots  # also tb_shot (much slower, ~10M rows)
 */
import { sql } from '../lib/libDb';
import { ensureRepo } from '../lib/libIngestUtils';
import { ingestMcp } from '../lib/libMcpIngest';

async function main() {
  const ingestShots = process.argv.includes('--shots');

  await ensureRepo({
    url: 'https://github.com/JeffSackmann/tennis_MatchChartingProject.git',
    localPath: 'tmp/data/sackmann/mcp',
    skipPullIfExists: true,
  });

  await ingestMcp({
    localPath: 'tmp/data/sackmann/mcp',
    ingestShots,
  });

  await sql.end();
}

main().catch(async (e) => {
  console.error('FAILED:', e);
  await sql.end({ timeout: 5 }).catch(() => undefined);
  process.exit(1);
});
