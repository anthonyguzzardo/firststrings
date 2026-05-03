/**
 * Ingest Sackmann ATP + WTA weekly rankings into th_player_ranking.
 *
 *   atp_rankings_{decade}.csv → tour_id=1, source_id=1 (SACKMANN_ATP)
 *   wta_rankings_{decade}.csv → tour_id=2, source_id=2 (SACKMANN_WTA)
 *
 * Maps Sackmann player IDs → td_player.player_id via tm_player_external_id
 * (which the match-ingest scripts already populate). Players unknown to that
 * bridge — i.e. they show up in rankings but never played a tour-level
 * singles match Sackmann tracks — get dropped (counted, reported).
 *
 * Idempotent. ON CONFLICT (player_id, tour_id, week_dt) DO NOTHING.
 *
 *   npm run ingest:rankings
 */
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { parse as parseCsv } from 'csv-parse/sync';
import { sql } from '../lib/libDb';
import { chunk, parseYyyymmdd } from '../lib/libIngestUtils';

interface RankingCsvRow {
  ranking_date: string;
  rank: string;
  player: string;
  points?: string;
}

interface TourCfg {
  tag: string;
  tourId: number;
  sourceId: number;
  localPath: string;
  pattern: RegExp;
}

const TOURS: TourCfg[] = [
  { tag: 'ATP', tourId: 1, sourceId: 1, localPath: 'tmp/data/sackmann/atp', pattern: /^atp_rankings_.+\.csv$/ },
  { tag: 'WTA', tourId: 2, sourceId: 2, localPath: 'tmp/data/sackmann/wta', pattern: /^wta_rankings_.+\.csv$/ },
];

async function ingestTour(cfg: TourCfg): Promise<void> {
  if (!existsSync(cfg.localPath)) {
    console.warn(`[${cfg.tag}] missing ${cfg.localPath} — run npm run ingest:${cfg.tag.toLowerCase()} first`);
    return;
  }

  console.log(`[${cfg.tag}] loading external-id map...`);
  const xref = await sql<Array<{ external_id: string; player_id: string }>>`
    SELECT external_id, player_id::text FROM tm_player_external_id WHERE source_id = ${cfg.sourceId}
  `;
  const playerMap = new Map<string, string>();
  for (const r of xref) playerMap.set(r.external_id, r.player_id);
  console.log(`[${cfg.tag}] ${playerMap.size.toLocaleString()} player mappings loaded`);

  const files = readdirSync(cfg.localPath).filter((f) => cfg.pattern.test(f)).sort();
  if (files.length === 0) {
    console.warn(`[${cfg.tag}] no ranking files match ${cfg.pattern}`);
    return;
  }
  console.log(`[${cfg.tag}] ${files.length} ranking file(s)`);

  let totalInserted = 0;
  let totalSkipped = 0;
  let totalUnknown = 0;

  for (const f of files) {
    const csvPath = join(cfg.localPath, f);
    const raw = readFileSync(csvPath, 'utf-8');
    const rows = parseCsv(raw, { columns: true, skip_empty_lines: true }) as RankingCsvRow[];

    const valid: Array<{
      player_id: string; tour_id: number; week_dt: string;
      rank: number; points: number | null; source_id: number;
      created_by: string; modified_by: string;
    }> = [];

    for (const r of rows) {
      const player_id = playerMap.get(r.player);
      if (!player_id) { totalUnknown++; continue; }
      const week_dt = parseYyyymmdd(r.ranking_date);
      if (!week_dt) { totalSkipped++; continue; }
      const rank = parseInt(r.rank, 10);
      if (!Number.isFinite(rank)) { totalSkipped++; continue; }
      const points = r.points && r.points !== '' ? parseInt(r.points, 10) : null;
      valid.push({
        player_id, tour_id: cfg.tourId, week_dt,
        rank, points: Number.isFinite(points as number) ? points : null,
        source_id: cfg.sourceId,
        created_by: 'ingest-rankings', modified_by: 'ingest-rankings',
      });
    }

    let fileInserted = 0;
    for (const batch of chunk(valid, 5000)) {
      const inserted = await sql<Array<{ ranking_id: string }>>`
        INSERT INTO th_player_ranking ${sql(batch as unknown as Record<string, unknown>[],
          'player_id', 'tour_id', 'week_dt', 'rank', 'points', 'source_id', 'created_by', 'modified_by')}
        ON CONFLICT (player_id, tour_id, week_dt) DO NOTHING
        RETURNING ranking_id
      `;
      fileInserted += inserted.length;
    }
    totalInserted += fileInserted;
    console.log(`[${cfg.tag}] ${f}: ${fileInserted.toLocaleString()} new rows (${valid.length.toLocaleString()} valid)`);
  }

  console.log(`[${cfg.tag}] DONE — ${totalInserted.toLocaleString()} rows ingested, ${totalUnknown.toLocaleString()} unknown-player rows dropped, ${totalSkipped.toLocaleString()} malformed.`);
}

async function main() {
  for (const cfg of TOURS) {
    await ingestTour(cfg);
  }
  await sql.end();
}

main().catch(async (e) => {
  console.error('FAILED:', e);
  await sql.end({ timeout: 5 }).catch(() => undefined);
  process.exit(1);
});
