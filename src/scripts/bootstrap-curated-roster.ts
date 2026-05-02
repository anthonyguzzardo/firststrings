/**
 * One-shot bootstrap: takes the curated TS player roster from
 * libPlayersData.ts and ensures each player has a corresponding td_player
 * row (with is_curated = TRUE) plus a tm_player_external_id row mapping
 * the SQL identity to the canonical TS slug under source MANUAL.
 *
 * Idempotent: re-runs upsert by slug; already-mapped entries become no-ops.
 *
 *   npm run bootstrap
 */
import { sql } from '../lib/libDb';
import { players } from '../lib/libPlayersData';

const TOUR_ID: Record<string, number> = { ATP: 1, WTA: 2 };
const HAND_ID: Record<string, number> = { right: 1, left: 2 };
const BACKHAND_ID: Record<string, number> = { 'one-handed': 1, 'two-handed': 2 };
const STATUS_ID: Record<string, number> = { active: 1, retired: 2 };
const SOURCE_MANUAL = 10;

async function main() {
  console.log(`Bootstrapping ${players.length} curated players → SQL...`);

  let inserted = 0;
  let updated = 0;
  let mapped = 0;

  for (const p of players) {
    const tourId = TOUR_ID[p.tour];
    const handId = HAND_ID[p.handedness] ?? 99;
    const backhandId = BACKHAND_ID[p.backhandStyle] ?? 99;
    const statusId = STATUS_ID[p.status] ?? 1;

    if (!tourId) {
      console.warn(`  ! ${p.slug}: unknown tour "${p.tour}", skipping`);
      continue;
    }

    const result = await sql<{ player_id: bigint; was_insert: boolean }[]>`
      INSERT INTO td_player (
        slug, full_name, short_name, tour_id, born_iso,
        birthplace, height_cm,
        handedness_id, backhand_style_id, status_id,
        turned_pro_year, retired_year,
        bio, data_confidence, is_curated,
        created_by, modified_by
      ) VALUES (
        ${p.slug}, ${p.fullName}, ${p.shortName}, ${tourId}, ${p.bornIso}::date,
        ${p.birthplace}, ${p.heightCm},
        ${handId}, ${backhandId}, ${statusId},
        ${p.career.turnedPro ?? null}, ${p.career.retiredYear ?? null},
        ${p.bio}, ${p.dataConfidence ?? 'verified'}, TRUE,
        'bootstrap-curated-roster', 'bootstrap-curated-roster'
      )
      ON CONFLICT (slug) DO UPDATE SET
        full_name         = EXCLUDED.full_name,
        short_name        = EXCLUDED.short_name,
        height_cm         = EXCLUDED.height_cm,
        handedness_id     = EXCLUDED.handedness_id,
        backhand_style_id = EXCLUDED.backhand_style_id,
        status_id         = EXCLUDED.status_id,
        retired_year      = EXCLUDED.retired_year,
        birthplace        = EXCLUDED.birthplace,
        bio               = EXCLUDED.bio,
        data_confidence   = EXCLUDED.data_confidence,
        is_curated        = TRUE,
        modified_by       = 'bootstrap-curated-roster',
        dttm_modified_utc = NOW()
      RETURNING player_id, (xmax = 0) AS was_insert
    `;

    const row = result[0];
    if (!row) {
      console.warn(`  ! ${p.slug}: upsert returned no row`);
      continue;
    }
    const { player_id, was_insert } = row;
    if (was_insert) inserted++;
    else updated++;

    const xref = await sql`
      INSERT INTO tm_player_external_id (player_id, source_id, external_id, created_by, modified_by)
      VALUES (${player_id}, ${SOURCE_MANUAL}, ${p.slug}, 'bootstrap-curated-roster', 'bootstrap-curated-roster')
      ON CONFLICT (player_id, source_id) DO NOTHING
      RETURNING external_id_pk
    `;
    if (xref.length > 0) mapped++;
  }

  console.log(`\n✓ Players: ${inserted} inserted, ${updated} updated`);
  console.log(`✓ Mappings: ${mapped} new tm_player_external_id rows`);

  await sql.end();
}

main().catch((e) => {
  console.error('FAILED:', e);
  process.exit(1);
});
