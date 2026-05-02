/**
 * Derived Elo trajectories for every player.
 *
 * Walks every Sackmann-sourced match in chronological order and maintains
 * an Elo state per player (overall + per surface). Snapshots are written
 * to th_player_elo with one row per (player_id, match-date), upserted via
 * ON CONFLICT to make reruns idempotent.
 *
 * Tennis Elo notes:
 *   - K-factor is bumped early in a player's career to converge faster.
 *   - Surface Elos start equal to overall and only update on that surface.
 *   - Walkovers and retirements still count (consistent with most public Elo
 *     systems including Sackmann's tennis_misc reference impl).
 */
import { sql } from './libDb';

interface EloState {
  overall: number;
  hard: number;
  clay: number;
  grass: number;
  carpet: number;
  match_count: number;
}

const DEFAULT_ELO = 1500;
const K_NEW = 64;          // first 5 matches
const K_DEVELOPING = 40;   // 5–30 matches
const K_NORMAL = 32;       // 30+ matches

function freshState(): EloState {
  return {
    overall: DEFAULT_ELO,
    hard: DEFAULT_ELO,
    clay: DEFAULT_ELO,
    grass: DEFAULT_ELO,
    carpet: DEFAULT_ELO,
    match_count: 0,
  };
}

function kFactor(matchCount: number): number {
  if (matchCount < 5) return K_NEW;
  if (matchCount < 30) return K_DEVELOPING;
  return K_NORMAL;
}

function expected(ratingA: number, ratingB: number): number {
  return 1 / (1 + Math.pow(10, (ratingB - ratingA) / 400));
}

function surfaceKey(surfaceId: number | null): keyof Pick<EloState, 'hard' | 'clay' | 'grass' | 'carpet'> | null {
  switch (surfaceId) {
    case 1: case 5: case 7: return 'hard';   // hard / indoor-hard / acrylic
    case 2: case 6: return 'clay';
    case 3: return 'grass';
    case 4: return 'carpet';
    default: return null;
  }
}

interface MatchRow {
  match_id: bigint;
  p1_id: bigint;
  p2_id: bigint;
  winner_id: bigint;
  surface_id: number | null;
  dttm_match_utc: Date | null;
}

interface EloEvent {
  player_id: bigint;
  as_of_dt: string;          // ISO YYYY-MM-DD
  elo_overall: number;
  elo_hard: number;
  elo_clay: number;
  elo_grass: number;
  elo_carpet: number;
  match_count_to_date: number;
}

export async function refreshElo(): Promise<void> {
  console.log('[Elo] streaming matches in chronological order...');

  // Use a cursor — pulling 350k rows in one batch is fine memory-wise (~70MB)
  // but a cursor makes the query plan simpler and lets us start computing.
  const matches = await sql<MatchRow[]>`
    SELECT match_id, p1_id, p2_id, winner_id, surface_id, dttm_match_utc
    FROM tb_match
    WHERE external_source_id IN (1, 2)   -- Sackmann ATP/WTA only; MCP overlaps these
      AND winner_id IS NOT NULL
      AND dttm_match_utc IS NOT NULL
    ORDER BY dttm_match_utc, match_id
  `;
  console.log(`[Elo] loaded ${matches.length.toLocaleString()} matches`);

  const stateByPlayer = new Map<string, EloState>();
  const events: EloEvent[] = [];

  for (const m of matches) {
    const winnerId = m.winner_id;
    const loserId = m.p1_id === winnerId ? m.p2_id : m.p1_id;
    const winnerKey = winnerId.toString();
    const loserKey = loserId.toString();

    const wState = stateByPlayer.get(winnerKey) ?? freshState();
    const lState = stateByPlayer.get(loserKey) ?? freshState();

    // Overall update
    const eW = expected(wState.overall, lState.overall);
    const kW = kFactor(wState.match_count);
    const kL = kFactor(lState.match_count);
    wState.overall += kW * (1 - eW);
    lState.overall += kL * (0 - (1 - eW));

    // Surface update
    const sk = surfaceKey(m.surface_id);
    if (sk) {
      const eWS = expected(wState[sk], lState[sk]);
      wState[sk] += kW * (1 - eWS);
      lState[sk] += kL * (0 - (1 - eWS));
    }

    wState.match_count++;
    lState.match_count++;
    stateByPlayer.set(winnerKey, wState);
    stateByPlayer.set(loserKey, lState);

    const dt = (m.dttm_match_utc instanceof Date ? m.dttm_match_utc : new Date(m.dttm_match_utc!))
      .toISOString().slice(0, 10);
    events.push({
      player_id: winnerId,
      as_of_dt: dt,
      elo_overall: wState.overall,
      elo_hard: wState.hard,
      elo_clay: wState.clay,
      elo_grass: wState.grass,
      elo_carpet: wState.carpet,
      match_count_to_date: wState.match_count,
    });
    events.push({
      player_id: loserId,
      as_of_dt: dt,
      elo_overall: lState.overall,
      elo_hard: lState.hard,
      elo_clay: lState.clay,
      elo_grass: lState.grass,
      elo_carpet: lState.carpet,
      match_count_to_date: lState.match_count,
    });
  }
  console.log(`[Elo] computed ${events.length.toLocaleString()} player-match events across ${stateByPlayer.size.toLocaleString()} players`);

  // Dedupe by (player_id, as_of_dt) — last write wins, since events are in
  // chronological order.
  const dedup = new Map<string, EloEvent>();
  for (const e of events) {
    dedup.set(`${e.player_id}:${e.as_of_dt}`, e);
  }
  const finalEvents = Array.from(dedup.values());
  console.log(`[Elo] ${finalEvents.length.toLocaleString()} deduped (player_id, day) snapshots ready for upsert`);

  // Bulk upsert into th_player_elo
  let upserted = 0;
  const BATCH = 2000;
  for (let i = 0; i < finalEvents.length; i += BATCH) {
    const batch = finalEvents.slice(i, i + BATCH).map((e) => ({
      player_id: e.player_id,
      as_of_dt: e.as_of_dt,
      elo_overall: e.elo_overall,
      elo_hard: e.elo_hard,
      elo_clay: e.elo_clay,
      elo_grass: e.elo_grass,
      elo_carpet: e.elo_carpet,
      match_count_to_date: e.match_count_to_date,
      created_by: 'refresh-elo',
      modified_by: 'refresh-elo',
    }));
    const result = await sql<{ elo_id: bigint }[]>`
      INSERT INTO th_player_elo ${sql(batch as unknown as Record<string, unknown>[],
        'player_id', 'as_of_dt', 'elo_overall', 'elo_hard', 'elo_clay',
        'elo_grass', 'elo_carpet', 'match_count_to_date',
        'created_by', 'modified_by')}
      ON CONFLICT (player_id, as_of_dt) DO UPDATE SET
        elo_overall          = EXCLUDED.elo_overall,
        elo_hard             = EXCLUDED.elo_hard,
        elo_clay             = EXCLUDED.elo_clay,
        elo_grass            = EXCLUDED.elo_grass,
        elo_carpet           = EXCLUDED.elo_carpet,
        match_count_to_date  = EXCLUDED.match_count_to_date,
        modified_by          = EXCLUDED.modified_by,
        dttm_modified_utc    = NOW()
      RETURNING elo_id
    `;
    upserted += result.length;
    if ((i / BATCH) % 50 === 0) {
      process.stdout.write(`  ${upserted.toLocaleString()}/${finalEvents.length.toLocaleString()}\r`);
    }
  }
  console.log(`\n[Elo] ✓ ${upserted.toLocaleString()} th_player_elo rows upserted`);
}
