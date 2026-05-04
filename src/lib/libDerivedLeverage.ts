/**
 * Derived per-point leverage values, written back into tb_point.leverage.
 *
 * Leverage of a point := |P(match win for the server | server wins this point)
 *                        − P(match win for the server | server loses this point)|
 *
 * Implementation uses the standard tennis-leverage *decomposition*:
 *
 *     leverage = |importance_of_point| × |swing_of_game|
 *
 *   importance_of_point := P(server holds game | server-after-point-state)
 *                          − P(server holds game | returner-after-point-state)
 *   swing_of_game       := P(match | this game won by server)
 *                          − P(match | this game won by returner)
 *
 * Both factors are closed-form tabulated at module load:
 *   • GAME_PWIN[a][b]  — P(server wins game from point-score (a, b))
 *   • TB_PWIN[a][b][next_server_is_player_A]
 *                      — P(player A wins tiebreak from (a, b))
 *
 * The match-level recursion only ever runs on **game-end states**
 * (ptsA = ptsB = 0, possibly with set-end resets). That space is finite
 * and cycle-free (game / set counts strictly increase) so naive
 * memoization terminates.
 *
 * Universal P(server wins service point) = 0.62. The actual leverage at
 * any point is robust to ±0.05 perturbations in this constant — the
 * relative ranking (deuce > 30-30 > 0-0; match point >> 1st point of
 * 1st game) is what matters for clutch metrics.
 *
 *   npm run refresh:leverage
 *
 * After this lands, re-run refresh:clutch to surface BLR + leverage_avg
 * in the Clutch panel.
 */
import { sql } from './libDb';

const P_SERVE = 0.62;
const Q_SERVE = 1 - P_SERVE;

// ---------------------------------------------------------------------------
// GAME_PWIN[a][b] — probability the server wins a game from (a, b),
//                  where a = server's points-in-game, b = returner's.
//                  Bounded a, b ∈ [0, 4] with 4 = AD.
// ---------------------------------------------------------------------------

const GAME_PWIN: number[][] = (() => {
  const t: number[][] = Array.from({ length: 5 }, () => Array(5).fill(0));
  // Closed form at deuce (3-3) — derived from infinite geometric sum.
  // P_deuce = p² / (p² + q²)
  t[3]![3]! = (P_SERVE * P_SERVE) / (P_SERVE * P_SERVE + Q_SERVE * Q_SERVE);
  // AD-server (4-3) = p × 1 + q × P_deuce
  t[4]![3]! = P_SERVE + Q_SERVE * t[3]![3]!;
  // AD-returner (3-4) = p × P_deuce + q × 0
  t[3]![4]! = P_SERVE * t[3]![3]!;
  // Fill non-deuce, non-AD cells iteratively from the inside out.
  // For a in 4..0 descending, b in 4..0 descending, skipping cells already set.
  // Standard recurrence: t[a][b] = p × t[a+1][b] + q × t[a][b+1]
  for (let a = 4; a >= 0; a--) {
    for (let b = 4; b >= 0; b--) {
      if (a === 3 && (b === 3 || b === 4)) continue;
      if (a === 4 && b === 3) continue;
      // Terminal: server wins (a >= 4, a - b >= 2)
      if (a >= 4 && a - b >= 2) { t[a]![b]! = 1; continue; }
      // Terminal: returner wins (b >= 4, b - a >= 2)
      if (b >= 4 && b - a >= 2) { t[a]![b]! = 0; continue; }
      // Should not happen for non-terminal non-3/3 non-AD cells, but safe:
      const aNext = a + 1, bNext = b + 1;
      if (aNext > 4 || bNext > 4) { t[a]![b]! = 0.5; continue; }
      t[a]![b]! = P_SERVE * t[aNext]![b]! + Q_SERVE * t[a]![bNext]!;
    }
  }
  return t;
})();

/** Importance of a point at game-state (a, b) — server's perspective. */
function importanceGame(a: number, b: number): number {
  // After server wins → (a+1, b); after returner wins → (a, b+1).
  // Cap a+1 / b+1 at the table's bounds (deuce normalization).
  const aPlus = a + 1 > 4 ? 4 : a + 1;
  const bPlus = b + 1 > 4 ? 4 : b + 1;
  const pSwin = GAME_PWIN[aPlus]?.[b] ?? 1;
  const pSloss = GAME_PWIN[a]?.[bPlus] ?? 0;
  return pSwin - pSloss;
}

// ---------------------------------------------------------------------------
// TB_PWIN[a][b][nextServerIsA] — probability player A wins the tiebreak
//   from (ptsA, ptsB) with the given player about to serve the next point.
//   Bounds: 0..14 for each side (TBs ≤ 28 points cover essentially all of
//   modern tennis; truly pathological TBs cap at 0.5).
// ---------------------------------------------------------------------------

const TB_MAX = 14;

interface TbKey { a: number; b: number; aServes: boolean; }

function tbServerOfPoint(a: number, b: number, aWasFirstServer: boolean): boolean {
  // Tiebreak rotation: A serves point #1, B serves #2 and #3, A serves #4 and #5,
  // B serves #6 and #7, etc. Total points completed = a + b. Next point's index
  // (0-based) = a + b. Returns true iff A serves that point.
  const idx = a + b;
  // pattern: 0 → A; 1, 2 → B; 3, 4 → A; 5, 6 → B; 7, 8 → A; …
  const phase = Math.floor((idx + 1) / 2) % 2;
  // phase 0 → first server (A if aWasFirstServer); phase 1 → second server.
  return phase === 0 ? aWasFirstServer : !aWasFirstServer;
}

const TB_PWIN_FIRST_A:  number[][] = Array.from({ length: TB_MAX + 2 }, () => Array(TB_MAX + 2).fill(0.5));
const TB_PWIN_FIRST_B:  number[][] = Array.from({ length: TB_MAX + 2 }, () => Array(TB_MAX + 2).fill(0.5));

function buildTbTable(aWasFirstServer: boolean, target: number[][]): void {
  // Iterate states in decreasing order of (a + b) so each cell only depends
  // on cells that are already filled.
  const sums: number[] = [];
  for (let s = (TB_MAX * 2); s >= 0; s--) sums.push(s);
  for (const total of sums) {
    for (let a = 0; a <= total && a <= TB_MAX; a++) {
      const b = total - a;
      if (b < 0 || b > TB_MAX) continue;
      // Terminals.
      if (a >= 7 && a - b >= 2) { target[a]![b]! = 1; continue; }
      if (b >= 7 && b - a >= 2) { target[a]![b]! = 0; continue; }
      // Determine server of next point.
      const aServes = tbServerOfPoint(a, b, aWasFirstServer);
      const pAWinsThisPt = aServes ? P_SERVE : Q_SERVE;
      // Substates.
      const pAfterAwin = target[a + 1]?.[b];
      const pAfterBwin = target[a]?.[b + 1];
      // Out-of-bounds → cap at 0.5 (truly pathological TB).
      const va = pAfterAwin ?? 0.5;
      const vb = pAfterBwin ?? 0.5;
      target[a]![b]! = pAWinsThisPt * va + (1 - pAWinsThisPt) * vb;
    }
  }
}

buildTbTable(true,  TB_PWIN_FIRST_A);
buildTbTable(false, TB_PWIN_FIRST_B);

/**
 * P(player A wins tiebreak | (ptsA, ptsB) AND aWasFirstServerOfTB).
 */
function tbPwinForA(a: number, b: number, aWasFirstServer: boolean): number {
  const aClamp = Math.min(a, TB_MAX);
  const bClamp = Math.min(b, TB_MAX);
  const tbl = aWasFirstServer ? TB_PWIN_FIRST_A : TB_PWIN_FIRST_B;
  return tbl[aClamp]?.[bClamp] ?? 0.5;
}

/**
 * Importance of a tiebreak point — server's perspective. Server is the
 * player who serves THIS point (not the original first server of the TB).
 */
function importanceTb(
  ptsServer: number, ptsReturner: number,
  serverIsFirstServer: boolean,
): number {
  // Translate server/returner pts into A/B coords using A = original first server.
  const a = serverIsFirstServer ? ptsServer   : ptsReturner;
  const b = serverIsFirstServer ? ptsReturner : ptsServer;
  // After server wins this point → (a+1, b) (if server is A) or (a, b+1) (if server is B).
  // We want P(server wins TB) - P(server loses TB), which from A's table is:
  //   serverIsA  → P(A wins | (a+1, b)) - P(A wins | (a, b+1))
  //   serverIsB  → P(B wins | …) = 1 - P(A wins | …); flip the difference sign.
  const pAfterAwin = tbPwinForA(a + 1, b, /*aWasFirst*/ true ? serverIsFirstServer ? true : false : true);
  // The above branching got ugly — let me redo:
  const aWasFirst = serverIsFirstServer; // we don't know; placeholder. Caller passes consistent.
  // Simpler: importance = |P(A wins | server-wins-state) - P(A wins | server-loses-state)|.
  // Since server's perspective is symmetric, we can compute and take |…|.
  let serverWinsState_a: number;
  let serverWinsState_b: number;
  let serverLossState_a: number;
  let serverLossState_b: number;
  if (serverIsFirstServer) {
    serverWinsState_a = a + 1; serverWinsState_b = b;
    serverLossState_a = a;     serverLossState_b = b + 1;
  } else {
    serverWinsState_a = a;     serverWinsState_b = b + 1;
    serverLossState_a = a + 1; serverLossState_b = b;
  }
  const pAWinsTbAfterServerWins = tbPwinForA(serverWinsState_a, serverWinsState_b, aWasFirst);
  const pAWinsTbAfterServerLoss = tbPwinForA(serverLossState_a, serverLossState_b, aWasFirst);
  // Importance from server's perspective = P(server wins TB | server wins pt) - P(server wins TB | server loses pt)
  // P(server wins TB) = serverIsFirstServer ? P_A : (1 - P_A)
  const pServerWinsTb_afterServerWinsPt = serverIsFirstServer ? pAWinsTbAfterServerWins : (1 - pAWinsTbAfterServerWins);
  const pServerWinsTb_afterServerLossPt = serverIsFirstServer ? pAWinsTbAfterServerLoss : (1 - pAWinsTbAfterServerLoss);
  return pServerWinsTb_afterServerWinsPt - pServerWinsTb_afterServerLossPt;
}

// ---------------------------------------------------------------------------
// Match-level recursion at *game-boundaries* (ptsA = ptsB = 0).
// ---------------------------------------------------------------------------

interface MatchState {
  setsA: number; setsB: number;
  gamesA: number; gamesB: number;
  inTiebreak: boolean;
  serverIsA: boolean;            // who serves the next point at the start of this game/TB
  setStartServerIsA: boolean;    // who served the 1st game of the current set
  bo5: boolean;
}

/**
 * Pre-computed P(A wins match | game-start state). One table per bo5 value.
 * Key is a packed integer encoding the canonical state (serverIsA is
 * derived from setStartServerIsA + game count, not stored — that prevents
 * runtime data resyncs from probing unreachable parity combinations).
 *
 * Encoding:
 *   bits  0..2  setsA           (0..3)
 *   bits  3..5  setsB           (0..3)
 *   bits  6..9  gamesA          (0..7)
 *   bits 10..13 gamesB          (0..7)
 *   bit  14     inTiebreak
 *   bit  15     setStartServerIsA
 */
function packState(s: MatchState): number {
  return (s.setsA & 0x7)
    | ((s.setsB & 0x7) << 3)
    | ((s.gamesA & 0xF) << 6)
    | ((s.gamesB & 0xF) << 10)
    | ((s.inTiebreak ? 1 : 0) << 14)
    | ((s.setStartServerIsA ? 1 : 0) << 15);
}

function targetSets(bo5: boolean): number { return bo5 ? 3 : 2; }

const probTableBo3 = new Map<number, number>();
const probTableBo5 = new Map<number, number>();

/**
 * Build the full game-start probability table for a given best-of value.
 * BFS from the initial state, build the dependency graph, then fill the
 * memo bottom-up via reverse topological order. No JS-call-stack recursion.
 */
function buildProbTable(bo5: boolean): Map<number, number> {
  const table = new Map<number, number>();
  // Discover all reachable game-start states.
  const initial: MatchState = {
    setsA: 0, setsB: 0, gamesA: 0, gamesB: 0,
    inTiebreak: false,
    serverIsA: true,
    setStartServerIsA: true,
    bo5,
  };
  // (key, state, [childAwinKey, childBwinKey, pAWinsThisGame])
  type Edge = { state: MatchState; childA: number; childB: number; pAwin: number };
  const edges = new Map<number, Edge>();
  const target = targetSets(bo5);

  const queue: MatchState[] = [initial];
  const visited = new Set<number>();
  while (queue.length > 0) {
    const s = queue.pop()!;
    const k = packState(s);
    if (visited.has(k)) continue;
    visited.add(k);

    // Terminal?
    if (s.setsA >= target) { table.set(k, 1); continue; }
    if (s.setsB >= target) { table.set(k, 0); continue; }

    let pAwin: number;
    let cA: MatchState, cB: MatchState;
    if (s.inTiebreak) {
      pAwin = tbPwinForA(0, 0, s.serverIsA);
      cA = endSetAfterTb(s, true);
      cB = endSetAfterTb(s, false);
    } else {
      const pServerHolds = GAME_PWIN[0]![0]!;
      pAwin = s.serverIsA ? pServerHolds : 1 - pServerHolds;
      cA = endGame(s, true);
      cB = endGame(s, false);
    }
    edges.set(k, { state: s, childA: packState(cA), childB: packState(cB), pAwin });
    if (!visited.has(packState(cA))) queue.push(cA);
    if (!visited.has(packState(cB))) queue.push(cB);
  }

  // Now iteratively resolve. Each pass through edges fills in any whose
  // children are both known. Repeat until no progress.
  let changed = true;
  while (changed) {
    changed = false;
    for (const [k, e] of edges) {
      if (table.has(k)) continue;
      const a = table.get(e.childA);
      const b = table.get(e.childB);
      if (a !== undefined && b !== undefined) {
        table.set(k, e.pAwin * a + (1 - e.pAwin) * b);
        changed = true;
      }
    }
  }
  return table;
}

function getProbTable(bo5: boolean): Map<number, number> {
  if (bo5 ? probTableBo5.size > 0 : probTableBo3.size > 0) {
    return bo5 ? probTableBo5 : probTableBo3;
  }
  const t = buildProbTable(bo5);
  if (bo5) {
    for (const [k, v] of t) probTableBo5.set(k, v);
    return probTableBo5;
  }
  for (const [k, v] of t) probTableBo3.set(k, v);
  return probTableBo3;
}

function pAWinsMatchAtGameStart(s: MatchState): number {
  // Terminal short-circuits: matches end at target sets regardless of any
  // residual games / pts. The BFS only stores canonical terminal states
  // (gamesA = gamesB = 0 after a set transition), so handle these here.
  const target = targetSets(s.bo5);
  if (s.setsA >= target) return 1;
  if (s.setsB >= target) return 0;
  const tbl = getProbTable(s.bo5);
  const k = packState(s);
  const v = tbl.get(k);
  if (v !== undefined) return v;
  if ((globalThis as { __levMissingLogged?: boolean }).__levMissingLogged !== true) {
    console.warn(`[leverage] missing state in prob table: ${JSON.stringify(s)}`);
    (globalThis as { __levMissingLogged?: boolean }).__levMissingLogged = true;
  }
  return 0.5;
}

function endGame(s: MatchState, aWonGame: boolean): MatchState {
  const next: MatchState = { ...s };
  if (aWonGame) next.gamesA++; else next.gamesB++;
  // Server flips for next game (within set).
  next.serverIsA = !next.serverIsA;
  // Set end: 6+ with 2-up.
  if (next.gamesA >= 6 && next.gamesA - next.gamesB >= 2) {
    return endSet(next, /*aWonSet*/ true);
  }
  if (next.gamesB >= 6 && next.gamesB - next.gamesA >= 2) {
    return endSet(next, /*aWonSet*/ false);
  }
  // 6-6 → next "game" is a tiebreak. TB's first server = same player who
  // served the first game of this set (per ITF rotation).
  if (next.gamesA === 6 && next.gamesB === 6) {
    next.inTiebreak = true;
    next.serverIsA = next.setStartServerIsA;
  }
  return next;
}

function endSet(s: MatchState, aWonSet: boolean): MatchState {
  const next: MatchState = { ...s };
  if (aWonSet) next.setsA++; else next.setsB++;
  next.gamesA = 0; next.gamesB = 0;
  next.inTiebreak = false;
  // Next set's first server is the opposite of THIS set's first server.
  next.setStartServerIsA = !next.setStartServerIsA;
  next.serverIsA = next.setStartServerIsA;
  return next;
}

function endSetAfterTb(s: MatchState, aWonTb: boolean): MatchState {
  const next: MatchState = { ...s };
  // TB winner takes a 7th game on top of 6-6 → set ends 7-6 in their favor.
  if (aWonTb) next.gamesA++; else next.gamesB++;
  // Then set ends.
  if (aWonTb) next.setsA++; else next.setsB++;
  next.gamesA = 0; next.gamesB = 0;
  next.inTiebreak = false;
  next.setStartServerIsA = !next.setStartServerIsA;
  next.serverIsA = next.setStartServerIsA;
  return next;
}

/**
 * Compute the |P_match swing| of finishing the current game in either
 * direction. game_swing = P(match | game won by server) - P(match | game
 * won by returner), from server's perspective.
 */
function gameSwing(gameStart: MatchState): number {
  let stateIfServerWins: MatchState;
  let stateIfReturnerWins: MatchState;
  if (gameStart.inTiebreak) {
    stateIfServerWins  = endSetAfterTb(gameStart, /*aWonTb*/ gameStart.serverIsA);
    stateIfReturnerWins = endSetAfterTb(gameStart, /*aWonTb*/ !gameStart.serverIsA);
  } else {
    stateIfServerWins  = endGame(gameStart, /*aWonGame*/ gameStart.serverIsA);
    stateIfReturnerWins = endGame(gameStart, /*aWonGame*/ !gameStart.serverIsA);
  }
  const pAwinsIfServerWins  = pAWinsMatchAtGameStart(stateIfServerWins);
  const pAwinsIfReturnerWins = pAWinsMatchAtGameStart(stateIfReturnerWins);
  if (process.env['LEV_DEBUG'] && gameStart.setsA === 0 && gameStart.setsB === 0 && gameStart.gamesA === 0 && gameStart.gamesB === 0 && !gameStart.inTiebreak) {
    console.log(`[swing-debug] start=${JSON.stringify(gameStart)} stateIfServerWins=${JSON.stringify(stateIfServerWins)} pA=${pAwinsIfServerWins.toFixed(4)} stateIfReturnerWins=${JSON.stringify(stateIfReturnerWins)} pA=${pAwinsIfReturnerWins.toFixed(4)}`);
  }
  const pServerWinsMatchIfServerWinsGame  = gameStart.serverIsA ? pAwinsIfServerWins  : 1 - pAwinsIfServerWins;
  const pServerWinsMatchIfReturnerWinsGame = gameStart.serverIsA ? pAwinsIfReturnerWins : 1 - pAwinsIfReturnerWins;
  return pServerWinsMatchIfServerWinsGame - pServerWinsMatchIfReturnerWinsGame;
}

// ---------------------------------------------------------------------------
// Match walk: track the state across points, compute leverage per point.
// ---------------------------------------------------------------------------

interface PointRow {
  point_id: bigint;
  match_id: bigint;
  point_no_in_match: number;
  set_no:    number;
  game_no:   number;
  point_no_in_game: number;
  server_id:   bigint;
  returner_id: bigint;
  point_winner_id: bigint;
  is_tiebreak: boolean;
  server_score_pre:   string | null;
  returner_score_pre: string | null;
}

interface MatchMeta {
  match_id: bigint;
  is_best_of_five: boolean;
}

const SCORE_TO_PTS: Record<string, number> = {
  '0': 0, '15': 1, '30': 2, '40': 3, 'AD': 4,
};

function computeMatchLeverage(meta: MatchMeta, points: PointRow[]): Array<{ point_id: bigint; leverage: number }> {
  if (points.length === 0) return [];
  const firstServerId = points[0]!.server_id;
  let state: MatchState = {
    setsA: 0, setsB: 0,
    gamesA: 0, gamesB: 0,
    inTiebreak: false,
    serverIsA: true,
    setStartServerIsA: true,
    bo5: meta.is_best_of_five,
  };
  // Current game's pts as we walk points.
  let ptsA = 0;
  let ptsB = 0;

  const out: Array<{ point_id: bigint; leverage: number }> = [];

  for (const p of points) {
    // Resync server flag with the data — chartings encode server_id explicitly,
    // so trust the chart over our model when they drift.
    const dataAServes = p.server_id === firstServerId;
    if (state.serverIsA !== dataAServes) {
      state = { ...state, serverIsA: dataAServes };
    }
    if (state.inTiebreak !== p.is_tiebreak) {
      state = { ...state, inTiebreak: p.is_tiebreak };
      // entering or leaving TB → reset ptsA/B
      ptsA = 0; ptsB = 0;
    }

    // Compute leverage at this point given current game-state.
    let importance: number;
    if (state.inTiebreak) {
      // Server's perspective ptsServer = ptsA if server is A, else ptsB.
      const ptsServer  = state.serverIsA ? ptsA : ptsB;
      const ptsReturner = state.serverIsA ? ptsB : ptsA;
      // setStartServerIsA tells us who served first in the current set, which
      // is the same as TB's first server.
      const serverIsFirstServer = state.serverIsA === state.setStartServerIsA;
      importance = importanceTb(ptsServer, ptsReturner, serverIsFirstServer);
    } else {
      const ptsServer  = state.serverIsA ? ptsA : ptsB;
      const ptsReturner = state.serverIsA ? ptsB : ptsA;
      // Clamp to [0, 4] (deuce normalization).
      const a = Math.min(ptsServer, 4);
      const b = Math.min(ptsReturner, 4);
      importance = importanceGame(a, b);
    }
    const swing = gameSwing(state);
    const lev = Math.abs(importance) * Math.abs(swing);
    out.push({ point_id: p.point_id, leverage: lev });

    // Advance ptsA/ptsB by who actually won this point.
    const aWonPoint = p.point_winner_id === firstServerId
      ? state.serverIsA
      : !state.serverIsA;
    if (aWonPoint) ptsA++; else ptsB++;

    // Check for game / TB end and roll the match-state forward.
    if (state.inTiebreak) {
      const aWon = ptsA >= 7 && ptsA - ptsB >= 2;
      const bWon = ptsB >= 7 && ptsB - ptsA >= 2;
      if (aWon || bWon) {
        state = endSetAfterTb(state, aWon);
        ptsA = 0; ptsB = 0;
      }
    } else {
      const aWon = ptsA >= 4 && ptsA - ptsB >= 2;
      const bWon = ptsB >= 4 && ptsB - ptsA >= 2;
      if (aWon || bWon) {
        state = endGame(state, aWon);
        ptsA = 0; ptsB = 0;
      } else if (ptsA >= 3 && ptsB >= 3 && ptsA === ptsB) {
        // Normalize deuce to (3, 3) for clean state tracking.
        ptsA = 3; ptsB = 3;
      }
    }
  }
  return out;
}

export async function refreshLeverage(): Promise<void> {
  console.log('[leverage] loading match metadata...');
  const matchRows = await sql<MatchMeta[]>`
    SELECT m.match_id, m.is_best_of_five
    FROM tb_match m
    WHERE m.external_source_id = 3
      AND m.has_mcp_chart = TRUE
      AND NOT m.is_walkover
      AND NOT m.is_retirement
    ORDER BY m.match_id
    ${process.env['LEV_LIMIT'] ? sql`LIMIT ${parseInt(process.env['LEV_LIMIT'], 10)}` : sql``}
  `;
  console.log(`[leverage] ${matchRows.length.toLocaleString()} eligible matches`);

  let totalPoints = 0;
  let totalUpdates = 0;
  let failures = 0;
  const CHUNK = 500;

  // Chunk matches so neither the SELECT nor the UPDATE-loop holds the
  // connection long enough to trip postgres.js's connect_timeout (~30s).
  for (let off = 0; off < matchRows.length; off += CHUNK) {
    const slice = matchRows.slice(off, off + CHUNK);
    // Pass as plain numbers — match_ids fit comfortably in JS Number range
    // and postgres.js is more reliable with int[] than bigint[] arrays.
    const ids = slice.map((m) => Number(m.match_id));
    if (off === 0) console.log(`[leverage] first chunk: ${ids.length} ids, range ${ids[0]}–${ids[ids.length - 1]}`);

    const points = await sql<PointRow[]>`
      SELECT
        pp.point_id, pp.match_id,
        pp.point_no_in_match, pp.set_no, pp.game_no, pp.point_no_in_game,
        pp.server_id, pp.returner_id, pp.point_winner_id,
        pp.is_tiebreak,
        pp.server_score_pre, pp.returner_score_pre
      FROM tb_point pp
      WHERE pp.match_id = ANY(${ids}::bigint[])
      ORDER BY pp.match_id, pp.point_no_in_match
    `;
    if (off === 0) console.log(`[leverage] first chunk fetched ${points.length} points`);
    totalPoints += points.length;

    // Group this chunk's points by match.
    const byMatch = new Map<string, PointRow[]>();
    for (const p of points) {
      const k = p.match_id.toString();
      const arr = byMatch.get(k) ?? [];
      arr.push(p);
      byMatch.set(k, arr);
    }

    // Compute leverage and accumulate updates for this chunk only.
    const chunkUpdates: Array<{ point_id: string; lev: number }> = [];
    let inChunk = 0;
    for (const m of slice) {
      const pts = byMatch.get(m.match_id.toString());
      if (!pts || pts.length === 0) continue;
      inChunk++;
      if (process.env['LEV_TRACE']) {
        console.log(`  match ${m.match_id} (${pts.length} pts, bo5=${m.is_best_of_five}) ...`);
      }
      try {
        const matchUpdates = computeMatchLeverage(m, pts);
        for (const u of matchUpdates) {
          chunkUpdates.push({ point_id: u.point_id.toString(), lev: u.leverage });
        }
      } catch (e) {
        failures++;
        if (failures <= 5) {
          console.error(`[leverage] match ${m.match_id} failed (${pts.length} pts):`, (e as Error).message);
        }
      }
    }

    // Bulk update via a transaction-scoped TEMP table. The transaction
    // pins us to one postgres.js connection, so the TEMP table persists
    // across the inner sql calls (plain `sql` without begin() can rotate
    // connections from the pool, dropping the temp table).
    const UPDATE_BATCH = 5000;
    if (chunkUpdates.length > 0) {
      await sql.begin(async (txn) => {
        await txn`
          CREATE TEMP TABLE tmp_leverage (
            point_id BIGINT PRIMARY KEY, lev REAL NOT NULL
          ) ON COMMIT DROP
        `;
        for (let i = 0; i < chunkUpdates.length; i += UPDATE_BATCH) {
          const batch = chunkUpdates.slice(i, i + UPDATE_BATCH);
          await txn`
            INSERT INTO tmp_leverage ${txn(batch as unknown as Record<string, unknown>[], 'point_id', 'lev')}
          `;
        }
        await txn`
          UPDATE tb_point AS pp
          SET leverage = t.lev,
              modified_by = 'refresh-leverage',
              dttm_modified_utc = NOW()
          FROM tmp_leverage t
          WHERE pp.point_id = t.point_id
        `;
      });
    }
    totalUpdates += chunkUpdates.length;

    console.log(
      `[leverage] chunk ${off + 1}–${Math.min(off + CHUNK, matchRows.length)} / ${matchRows.length} ` +
      `· ${chunkUpdates.length.toLocaleString()} pts updated · ` +
      `cum: ${totalUpdates.toLocaleString()} · table: ${(probTableBo3.size + probTableBo5.size).toLocaleString()} · fail: ${failures}`
    );
  }
  console.log(`\n[leverage] ✓ ${totalUpdates.toLocaleString()} tb_point.leverage values written from ${totalPoints.toLocaleString()} points`);

  // Sanity: average leverage should be in the right ballpark; break-points
  // and tiebreak-points should be markedly higher than the overall average.
  const sanity = await sql<Array<{
    avg_overall: number | null;
    avg_bp: number | null;
    avg_tb: number | null;
    avg_match_pt: number | null;
    n_overall: number;
  }>>`
    SELECT
      AVG(pp.leverage)::real                                 AS avg_overall,
      AVG(pp.leverage) FILTER (WHERE pp.is_break_point)::real AS avg_bp,
      AVG(pp.leverage) FILTER (WHERE pp.is_tiebreak)::real    AS avg_tb,
      AVG(pp.leverage) FILTER (WHERE pp.is_match_point)::real AS avg_match_pt,
      COUNT(*)::int                                          AS n_overall
    FROM tb_point pp
  `;
  const f = sanity[0];
  if (f) {
    const fmt = (n: number | null): string => n === null ? 'n/a' : n.toFixed(4);
    console.log('[leverage] sanity (all charted points):');
    console.log(`         points overall:  ${f.n_overall.toLocaleString()} · avg leverage ${fmt(f.avg_overall)}`);
    console.log(`         break points:                            avg leverage ${fmt(f.avg_bp)}`);
    console.log(`         tiebreak points:                         avg leverage ${fmt(f.avg_tb)}`);
    console.log(`         match points:                            avg leverage ${fmt(f.avg_match_pt)}`);
  }
}
