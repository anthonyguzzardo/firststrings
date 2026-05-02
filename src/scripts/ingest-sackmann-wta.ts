/**
 * Ingest Jeff Sackmann's tennis_wta dataset:
 *   players → td_player + tm_player_external_id (SACKMANN_WTA, WIKIDATA when known)
 *   tour-level singles matches by year → td_tournament + tb_match
 *
 * Idempotent. First run clones the repo to tmp/data/sackmann/wta/.
 *
 *   npm run ingest:wta
 */
import { sql } from '../lib/libDb';
import { ingestSackmann } from '../lib/libSackmannIngest';

const NOW_YEAR = new Date().getUTCFullYear();

async function main() {
  await ingestSackmann({
    tourId: 2,
    sourceId: 2,
    repoUrl: 'https://github.com/JeffSackmann/tennis_wta.git',
    localPath: 'tmp/data/sackmann/wta',
    playersFilename: 'wta_players.csv',
    matchesFilenameForYear: (y) => `wta_matches_${y}.csv`,
    yearStart: 1968,
    yearEnd: NOW_YEAR,
  });
  await sql.end();
}

main().catch(async (e) => {
  console.error('FAILED:', e);
  await sql.end({ timeout: 5 }).catch(() => undefined);
  process.exit(1);
});
