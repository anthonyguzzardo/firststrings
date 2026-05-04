/**
 * Build per-player style embeddings into tb_player_style_embedding.
 *
 * v1 uses a deterministic, feature-driven encoder rather than a learned
 * model. The 384-dim vector concatenates:
 *   • shot mix:        19 shot types × 4 metrics = 76 dims
 *   • clutch:          8 dims (BP save / convert, TB SPW/RPW, BLR, DR+, lev_avg, samp)
 *   • serve placement: 6 dims (deuce W/B/T + ad W/B/T frequency shares)
 *   • surface bias:    8 dims (W% + match-share on hard/clay/grass/carpet)
 *   • biographic:      4 dims (handedness, backhand style, era, status)
 * Total dense:         102 dims, then padded to 384 with zeros so cosine
 * similarity ignores the pad (we use vector_cosine_ops).
 *
 * Embedding version `feat-v1-2026-05` — bump the literal when the encoder
 * changes so callers can detect version drift.
 *
 * Only embeds CURATED players (`is_curated = TRUE`) — the kNN UI is for
 * the hand-tended roster. The Sackmann long tail can opt in later by
 * dropping that filter.
 */
import { sql } from './libDb';

const EMBED_VERSION = 'feat-v1-2026-05';
const EMBED_DIMS    = 384;

// te_shot_type rows — keep in stable order so dim positions are reproducible.
const SHOT_TYPE_IDS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19] as const;

interface CuratedPlayer {
  player_id: bigint;
  slug: string;
  handedness_id: number | null;
  backhand_style_id: number | null;
  status_id: number | null;
  born_iso: string | null;
}

interface CareerStatsRow {
  player_id: bigint;
  surface_id: number | null;
  matches_won: number;
  matches_lost: number;
}

interface ClutchRow {
  player_id: bigint;
  matches_sample_size: number;
  bp_save_pct: number | null;
  bp_convert_pct: number | null;
  tiebreak_spw: number | null;
  tiebreak_rpw: number | null;
  blr: number | null;
  dr_plus: number | null;
  leverage_avg: number | null;
}

interface ShotRow {
  player_id: bigint;
  shot_type_id: number;
  shot_count: number;
  winners: number;
  forced_errors_drawn: number;
  unforced_errors: number;
}

interface ServeZoneRow {
  player_id: bigint;
  side_court: 'deuce' | 'ad';
  serve_direction_id: number;
  serves_in: number;
}

function safe(x: number | null | undefined, fallback = 0): number {
  return x === null || x === undefined || !Number.isFinite(x) ? fallback : x;
}

function l2Normalize(v: number[]): number[] {
  let s = 0;
  for (const x of v) s += x * x;
  const norm = Math.sqrt(s);
  if (norm === 0) return v;
  return v.map((x) => x / norm);
}

interface FeatureBlob {
  shot_mix: Record<string, { count: number; win_rate: number; ue_rate: number; fe_rate: number }>;
  clutch: ClutchRow | null;
  serve: Record<string, number>;
  surfaces: Record<string, { win_pct: number; share: number }>;
  bio: { handedness_id: number | null; backhand_style_id: number | null; status_id: number | null; born_iso: string | null };
}

function buildVector(
  player: CuratedPlayer,
  career: Map<number | 'overall', CareerStatsRow>,
  clutch: ClutchRow | null,
  shots: Map<number, ShotRow>,
  serve: ServeZoneRow[],
): { vec: number[]; blob: FeatureBlob } {
  const vec: number[] = [];
  const blob: FeatureBlob = {
    shot_mix: {},
    clutch,
    serve: {},
    surfaces: {},
    bio: {
      handedness_id: player.handedness_id,
      backhand_style_id: player.backhand_style_id,
      status_id: player.status_id,
      born_iso: player.born_iso,
    },
  };

  // Total shots across all types — used to normalize counts into shares.
  let totalShots = 0;
  for (const r of shots.values()) totalShots += r.shot_count;
  const denom = totalShots > 0 ? totalShots : 1;

  // 19 shot types × 4 metrics = 76 dims
  for (const stid of SHOT_TYPE_IDS) {
    const r = shots.get(stid);
    const count = r?.shot_count ?? 0;
    const winners = r?.winners ?? 0;
    const ues = r?.unforced_errors ?? 0;
    const fes = r?.forced_errors_drawn ?? 0;
    const share = count / denom;
    const winRate = count > 0 ? winners / count : 0;
    const ueRate  = count > 0 ? ues / count : 0;
    const feRate  = count > 0 ? fes / count : 0;
    vec.push(share, winRate, ueRate, feRate);
    blob.shot_mix[`shot_${stid}`] = { count, win_rate: winRate, ue_rate: ueRate, fe_rate: feRate };
  }

  // 8 clutch dims
  vec.push(
    safe(clutch?.bp_save_pct),
    safe(clutch?.bp_convert_pct),
    safe(clutch?.tiebreak_spw),
    safe(clutch?.tiebreak_rpw),
    safe(clutch?.blr, 0.5) - 0.5,    // center BLR around 0
    safe(clutch?.dr_plus, 1) - 1,     // center DR+ around 0
    safe(clutch?.leverage_avg) * 10,  // amplify (typical scale ~0.02)
    Math.log10(Math.max(1, safe(clutch?.matches_sample_size))) / 3,  // scale 0..1ish
  );

  // 6 serve placement dims (deuce W/B/T + ad W/B/T as share-of-side)
  const serveTotals = { deuce: 0, ad: 0 } as Record<'deuce' | 'ad', number>;
  for (const r of serve) serveTotals[r.side_court] += r.serves_in;
  const dirOrder = [1, 2, 3] as const;  // wide / body / T
  for (const side of ['deuce', 'ad'] as const) {
    for (const dir of dirOrder) {
      const row = serve.find((r) => r.side_court === side && r.serve_direction_id === dir);
      const count = row?.serves_in ?? 0;
      const share = serveTotals[side] > 0 ? count / serveTotals[side] : 0;
      vec.push(share);
      blob.serve[`${side}_${dir}`] = share;
    }
  }

  // 8 surface dims: 4 surfaces × (win_pct, share-of-matches)
  const overall = career.get('overall');
  const overallTotal = (overall?.matches_won ?? 0) + (overall?.matches_lost ?? 0);
  for (const sid of [1, 2, 3, 4] as const) {
    const r = career.get(sid);
    const total = (r?.matches_won ?? 0) + (r?.matches_lost ?? 0);
    const winPct = total > 0 ? (r!.matches_won / total) : 0;
    const share  = overallTotal > 0 ? total / overallTotal : 0;
    vec.push(winPct, share);
    blob.surfaces[`surface_${sid}`] = { win_pct: winPct, share };
  }

  // 4 bio dims (one-hot-ish flags)
  vec.push(
    player.handedness_id === 2 ? 1 : 0,                // left-handed
    player.backhand_style_id === 1 ? 1 : 0,            // one-handed BH
    player.status_id === 1 ? 1 : 0,                    // active
    player.born_iso ? Math.max(0, Math.min(1, (new Date(player.born_iso).getFullYear() - 1940) / 100)) : 0.5,
  );

  // Pad to 384 with zeros, then normalize. Cosine similarity ignores the
  // zero-tail since dim contributes 0 to both vectors' dot product.
  while (vec.length < EMBED_DIMS) vec.push(0);
  if (vec.length > EMBED_DIMS) vec.length = EMBED_DIMS;
  return { vec: l2Normalize(vec), blob };
}

export async function refreshStyleEmbedding(): Promise<void> {
  console.log('[style-embed] loading curated players...');
  const players = await sql<CuratedPlayer[]>`
    SELECT player_id, slug, handedness_id, backhand_style_id, status_id, born_iso::text
    FROM td_player WHERE is_curated = TRUE
  `;
  if (players.length === 0) {
    console.log('[style-embed] no curated players — nothing to embed');
    return;
  }
  const playerIds = players.map((p) => Number(p.player_id));

  console.log('[style-embed] loading aggregates...');
  const [careerRows, clutchRows, shotRows, serveRows] = await Promise.all([
    sql<CareerStatsRow[]>`
      SELECT player_id, surface_id, matches_won, matches_lost
      FROM tb_player_career_stats
      WHERE player_id = ANY(${playerIds}::bigint[]) AND level_id IS NULL
    `,
    sql<ClutchRow[]>`
      SELECT player_id, matches_sample_size, bp_save_pct, bp_convert_pct,
             tiebreak_spw, tiebreak_rpw, blr, dr_plus, leverage_avg
      FROM tb_player_clutch_metrics
      WHERE player_id = ANY(${playerIds}::bigint[]) AND surface_id IS NULL
    `,
    sql<ShotRow[]>`
      SELECT player_id, shot_type_id, shot_count, winners, forced_errors_drawn, unforced_errors
      FROM tb_player_shot_distribution
      WHERE player_id = ANY(${playerIds}::bigint[]) AND surface_id IS NULL
    `,
    sql<ServeZoneRow[]>`
      SELECT player_id, side_court, serve_direction_id, serves_in
      FROM tb_player_serve_zones
      WHERE player_id = ANY(${playerIds}::bigint[]) AND surface_id IS NULL
    `,
  ]);

  // Index aggregates by player_id.
  const careerByPlayer = new Map<string, Map<number | 'overall', CareerStatsRow>>();
  for (const r of careerRows) {
    const k = r.player_id.toString();
    let m = careerByPlayer.get(k);
    if (!m) { m = new Map(); careerByPlayer.set(k, m); }
    m.set(r.surface_id ?? 'overall', r);
  }
  const clutchByPlayer = new Map<string, ClutchRow>();
  for (const r of clutchRows) clutchByPlayer.set(r.player_id.toString(), r);
  const shotByPlayer = new Map<string, Map<number, ShotRow>>();
  for (const r of shotRows) {
    const k = r.player_id.toString();
    let m = shotByPlayer.get(k);
    if (!m) { m = new Map(); shotByPlayer.set(k, m); }
    m.set(r.shot_type_id, r);
  }
  const serveByPlayer = new Map<string, ServeZoneRow[]>();
  for (const r of serveRows) {
    const k = r.player_id.toString();
    const arr = serveByPlayer.get(k) ?? [];
    arr.push(r);
    serveByPlayer.set(k, arr);
  }

  console.log('[style-embed] building vectors...');
  let upserted = 0;
  let skipped = 0;
  for (const p of players) {
    const k = p.player_id.toString();
    const career = careerByPlayer.get(k) ?? new Map();
    const clutch = clutchByPlayer.get(k) ?? null;
    const shots  = shotByPlayer.get(k)  ?? new Map();
    const serve  = serveByPlayer.get(k) ?? [];
    if (shots.size === 0 && !clutch && career.size === 0) {
      skipped++;
      continue;
    }
    const { vec, blob } = buildVector(p, career, clutch, shots, serve);
    // Format vector literal for pgvector: "[0.1,0.2,0.3,...]"
    const vecLit = `[${vec.map((x) => Number.isFinite(x) ? x.toFixed(8) : '0').join(',')}]`;
    await sql`
      INSERT INTO tb_player_style_embedding
        (player_id, embedding_version, embedding, feature_blob,
         computed_through_dt, created_by, modified_by)
      VALUES (${p.player_id}, ${EMBED_VERSION}, ${vecLit}::vector, ${JSON.stringify(blob)}::jsonb,
              CURRENT_DATE, 'refresh-style-embedding', 'refresh-style-embedding')
      ON CONFLICT (player_id, embedding_version) DO UPDATE
        SET embedding = EXCLUDED.embedding,
            feature_blob = EXCLUDED.feature_blob,
            computed_through_dt = EXCLUDED.computed_through_dt,
            modified_by = EXCLUDED.modified_by,
            dttm_modified_utc = NOW()
    `;
    upserted++;
  }
  console.log(`[style-embed] ✓ ${upserted} embeddings upserted (${skipped} skipped — no aggregates)`);

  // Sanity: who's nearest to Federer?
  const neighbours = await sql<Array<{ slug: string; full_name: string; sim: number }>>`
    WITH q AS (
      SELECT embedding FROM tb_player_style_embedding e
      JOIN td_player p ON p.player_id = e.player_id
      WHERE p.slug = 'roger-federer' AND e.embedding_version = ${EMBED_VERSION}
    )
    SELECT p.slug, p.full_name,
           1 - (e.embedding <=> (SELECT embedding FROM q))::real AS sim
    FROM tb_player_style_embedding e
    JOIN td_player p ON p.player_id = e.player_id
    WHERE e.embedding_version = ${EMBED_VERSION} AND p.slug != 'roger-federer'
    ORDER BY e.embedding <=> (SELECT embedding FROM q) ASC
    LIMIT 6
  `;
  if (neighbours.length > 0) {
    console.log('[style-embed] sanity (nearest to Federer):');
    for (const n of neighbours) {
      console.log(`         ${n.full_name.padEnd(20)} sim=${(n.sim * 100).toFixed(1)}%`);
    }
  }
}
