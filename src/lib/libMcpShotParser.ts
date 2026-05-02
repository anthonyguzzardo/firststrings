/**
 * Match Charting Project (MCP) shot-string parser.
 *
 * Parses Jeff Sackmann's MCP encoding into normalized point + shot payloads.
 * Pure (no DB). Tolerant: unknown characters are logged into `unknownChars`
 * instead of throwing; the raw input string is preserved on every payload so
 * downstream code can re-parse if/when the grammar gets refined.
 *
 * Authoritative reference: tennisabstract.com/blog/2015/09/23/the-match-charting-project-quick-start-guide
 *
 * --------------------------------------------------------------------------
 * Grammar (best-effort summary)
 * --------------------------------------------------------------------------
 *   string := serve [serve_modifier]* (shot)* (ending)?
 *   serve  := /[456]/   ; 4=wide  5=body  6=down-the-T
 *   serve_modifier := '+' (serve-and-volley) | 'c' (let cord) | 'e' (net let)
 *   shot   := /[fbrsvzolhijkmtupy]/ /[123]/? /[789]/? /[+\-=]/?
 *             ; stroke type, optional direction (1=opp-FH corner, 2=middle,
 *             ; 3=opp-BH corner), optional return depth (7=shallow, 8=mid,
 *             ; 9=deep) — typically only present on the return (shot 2),
 *             ; optional court position (+ approach, - at net, = baseline)
 *   ending := error_type? outcome
 *   outcome    := /[*@#]/ ; * winner, @ unforced error, # forced error
 *   error_type := /[nwdx]/ ; n net, w wide, d long/deep, x wide+long
 *
 * Standalone error type after serve dir (e.g. "4n", "4w", "4d") means the
 * serve was a fault; the rally never started.
 *
 * Shots alternate between players, starting with the server. So:
 *   shot 1 = serve         (server)
 *   shot 2 = return        (returner)
 *   shot 3 = server's 2nd shot
 *   ...etc.
 */

// ----------------------------------------------------------------------------
// alphabets
// ----------------------------------------------------------------------------
const SERVE_DIR = new Set(['4', '5', '6']);
const STROKES = new Set(['f', 'b', 'r', 's', 'v', 'z', 'o', 'l', 'h', 'i', 'j', 'k', 'm', 't', 'u', 'p', 'y']);
const GROUNDSTROKE_DIR = new Set(['1', '2', '3']);
const RETURN_DEPTH = new Set(['7', '8', '9']);
const COURT_POS = new Set(['+', '-', '=']);
const OUTCOME = new Set(['*', '@', '#']);
const ERROR_TYPE = new Set(['n', 'w', 'd', 'x']);
const SERVE_MOD = new Set(['+', 'c', 'e']);  // + = serve-and-volley, c/e = let

// ----------------------------------------------------------------------------
// te_id mappings (mirror dbFirstStrings_Tables.sql enum seeds)
// ----------------------------------------------------------------------------
const STROKE_TO_SHOT_TYPE_ID: Record<string, number> = {
  f: 2,  // FOREHAND
  b: 3,  // BACKHAND
  r: 4,  // FH_SLICE
  s: 5,  // BH_SLICE
  v: 6,  // FH_VOLLEY
  z: 7,  // BH_VOLLEY
  o: 8,  // OVERHEAD_SMASH
  l: 9,  // LOB
  h: 10, // FH_HALF_VOLLEY
  i: 11, // BH_HALF_VOLLEY
  j: 12, // FH_SWING_VOLLEY
  k: 13, // BH_SWING_VOLLEY
  t: 19, // DROP_SHOT (generic)
  u: 15, // FH_DROP
  p: 16, // BH_DROP
  y: 17, // FH_HIGH
  m: 18, // BH_SMASH
};

const SERVE_DIR_TO_ID: Record<string, number> = { '4': 1, '5': 2, '6': 3 };
const GROUNDSTROKE_DIR_TO_ID: Record<string, number> = { '1': 1, '2': 2, '3': 3 };
const RETURN_DEPTH_TO_ID: Record<string, number> = { '7': 1, '8': 2, '9': 3 };
const COURT_POS_TO_ID: Record<string, number> = { '+': 4, '-': 5, '=': 1 };
const ERROR_TYPE_TO_ID: Record<string, number> = { n: 1, w: 2, d: 3, x: 4 };

// outcome ids from te_outcome
export const OUTCOME_IN_PLAY = 1;
export const OUTCOME_WINNER = 2;
export const OUTCOME_FORCED_ERROR = 3;
export const OUTCOME_UNFORCED_ERROR = 4;
export const OUTCOME_ACE = 5;
export const OUTCOME_SERVE_WINNER = 6;
export const OUTCOME_DOUBLE_FAULT = 7;

// shot type ids referenced directly
export const SHOT_TYPE_SERVE = 1;
export const SHOT_TYPE_UNKNOWN = 99;

// ----------------------------------------------------------------------------
// public types
// ----------------------------------------------------------------------------
export interface ParsedShot {
  shot_no: number;
  stroke_char: string | null;          // raw stroke letter (or null for serve)
  shot_type_id: number;                // te_shot_type.shot_type_id
  serve_direction_id: number | null;   // only set on shot 1 (serve)
  groundstroke_direction_id: number | null;
  return_depth_id: number | null;      // typically only on shot 2 (return)
  court_position_id: number | null;
  outcome_id: number | null;           // null while in-play; set on the ending shot
  error_type_id: number | null;
  is_approach: boolean;
  is_at_net: boolean;
  raw: string;                         // raw segment of the original string
}

export interface ParsedPoint {
  raw_input: string;                   // exact original string ('1st' or 2nd field combined)
  shots: ParsedShot[];
  rally_length: number;                // count of strokes including serve, excluding errors
  /** outcome of the entire point, derived from the ending shot. */
  point_outcome_id: number | null;
  /** which shot ended the point (1-indexed); null if string ended unresolved. */
  ending_shot_no: number | null;
  is_ace: boolean;
  is_serve_winner: boolean;
  is_double_fault: boolean;
  is_serve_and_volley: boolean;
  is_first_serve_in: boolean;
  is_let: boolean;
  unknown_chars: string[];
}

// ----------------------------------------------------------------------------
// public entry: parse a single point's "1st" + optional "2nd" into shots
// ----------------------------------------------------------------------------
/**
 * Parse a complete point.
 *
 * `firstServe` = the value of the '1st' column (always present in MCP).
 * `secondServe` = the value of the '2nd' column when the first serve faulted.
 *
 * Returns one ParsedPoint that represents the entire point. If `firstServe`
 * was a fault, the rally tokens come from `secondServe`. If both faulted,
 * `is_double_fault` is set and `point_outcome_id = OUTCOME_DOUBLE_FAULT`.
 */
export function parseMcpPoint(firstServe: string, secondServe?: string): ParsedPoint {
  const first = (firstServe ?? '').trim();
  const second = (secondServe ?? '').trim();

  const firstParse = parseSingleString(first);

  // First serve was good if it didn't end as a standalone serve-fault.
  const firstWasFault = isStandaloneServeFault(firstParse);

  if (!firstWasFault) {
    return {
      ...firstParse,
      raw_input: first,
      is_first_serve_in: !firstWasFault,
    };
  }

  // First serve faulted — try the second.
  if (!second) {
    // 1st was a fault but no 2nd column — incomplete data, don't infer DF.
    // Outcome stays unknown; caller can log this for data-quality monitoring.
    return {
      ...firstParse,
      raw_input: first,
      point_outcome_id: null,
      is_double_fault: false,
      is_first_serve_in: false,
    };
  }

  const secondParse = parseSingleString(second);
  const secondFault = isStandaloneServeFault(secondParse);

  if (secondFault) {
    return {
      ...secondParse,
      raw_input: `${first}|${second}`,
      point_outcome_id: OUTCOME_DOUBLE_FAULT,
      is_double_fault: true,
      is_first_serve_in: false,
    };
  }

  return {
    ...secondParse,
    raw_input: `${first}|${second}`,
    is_first_serve_in: false,
  };
}

// ----------------------------------------------------------------------------
// internals
// ----------------------------------------------------------------------------
function parseSingleString(s: string): ParsedPoint {
  const shots: ParsedShot[] = [];
  const unknown: string[] = [];

  if (!s) {
    return emptyPoint(s, unknown);
  }

  // Track parser state.
  let i = 0;
  const N = s.length;
  let isServeAndVolley = false;
  let isLet = false;

  // Phase 1: serve
  if (i < N && SERVE_DIR.has(s[i]!)) {
    const ch = s[i]!;
    const serveShot: ParsedShot = {
      shot_no: 1,
      stroke_char: null,
      shot_type_id: SHOT_TYPE_SERVE,
      serve_direction_id: SERVE_DIR_TO_ID[ch] ?? null,
      groundstroke_direction_id: null,
      return_depth_id: null,
      court_position_id: null,
      outcome_id: null,
      error_type_id: null,
      is_approach: false,
      is_at_net: false,
      raw: ch,
    };
    shots.push(serveShot);
    i++;

    // Parse serve modifiers (the chars `+`, `c`, `e` immediately after the dir).
    while (i < N && SERVE_MOD.has(s[i]!)) {
      const m = s[i]!;
      serveShot.raw += m;
      if (m === '+') isServeAndVolley = true;
      else if (m === 'c' || m === 'e') isLet = true;
      i++;
    }
  } else {
    // No serve direction — string is malformed or empty.
    return emptyPoint(s, unknown);
  }

  // Phase 2: optional standalone serve fault marker (e.g. "4n", "4w", "4d", "4x")
  // — only valid if no further strokes follow. Detection: char is in ERROR_TYPE
  // and i == N-1 (or only ending follows).
  if (i < N && i === N - 1 && ERROR_TYPE.has(s[i]!)) {
    const errCh = s[i]!;
    const serveShot = shots[0]!;
    serveShot.error_type_id = ERROR_TYPE_TO_ID[errCh] ?? null;
    serveShot.outcome_id = OUTCOME_UNFORCED_ERROR;  // serve fault
    serveShot.raw += errCh;
    return finalize(s, shots, unknown, isServeAndVolley, isLet);
  }

  // Phase 2b: ace marker right after serve (`*`)
  if (i < N && s[i] === '*') {
    const serveShot = shots[0]!;
    serveShot.outcome_id = OUTCOME_WINNER;  // marked WINNER for the serve shot
    serveShot.raw += '*';
    i++;
    // Anything after is unexpected; consume into unknown
    while (i < N) { unknown.push(s[i]!); i++; }
    return { ...finalize(s, shots, unknown, isServeAndVolley, isLet), is_ace: true };
  }

  // Phase 3: rally
  let nextShotNo = 2;
  while (i < N) {
    const ch = s[i]!;

    // Outcome marker without preceding error type
    if (OUTCOME.has(ch)) {
      const lastShot = shots[shots.length - 1];
      if (lastShot) {
        if (ch === '*') lastShot.outcome_id = OUTCOME_WINNER;
        else if (ch === '@') lastShot.outcome_id = OUTCOME_UNFORCED_ERROR;
        else if (ch === '#') lastShot.outcome_id = OUTCOME_FORCED_ERROR;
        lastShot.raw += ch;
      }
      i++;
      continue;
    }

    // Error type modifier — annotate last shot, expect outcome to follow
    if (ERROR_TYPE.has(ch)) {
      const lastShot = shots[shots.length - 1];
      if (lastShot) {
        lastShot.error_type_id = ERROR_TYPE_TO_ID[ch] ?? null;
        lastShot.raw += ch;
      }
      i++;
      continue;
    }

    // Court position modifier — applies to last shot
    if (COURT_POS.has(ch)) {
      const lastShot = shots[shots.length - 1];
      if (lastShot) {
        lastShot.court_position_id = COURT_POS_TO_ID[ch] ?? null;
        if (ch === '+') lastShot.is_approach = true;
        if (ch === '-') lastShot.is_at_net = true;
        lastShot.raw += ch;
      }
      i++;
      continue;
    }

    // Stand-alone direction or depth digits — annotate last shot
    if (GROUNDSTROKE_DIR.has(ch)) {
      const lastShot = shots[shots.length - 1];
      if (lastShot && lastShot.groundstroke_direction_id === null) {
        lastShot.groundstroke_direction_id = GROUNDSTROKE_DIR_TO_ID[ch] ?? null;
        lastShot.raw += ch;
        i++;
        continue;
      }
      // already had a direction — treat as part of the next shot's prefix; advance.
      unknown.push(ch);
      i++;
      continue;
    }
    if (RETURN_DEPTH.has(ch)) {
      const lastShot = shots[shots.length - 1];
      if (lastShot && lastShot.return_depth_id === null && lastShot.shot_no === 2) {
        lastShot.return_depth_id = RETURN_DEPTH_TO_ID[ch] ?? null;
        lastShot.raw += ch;
        i++;
        continue;
      }
      unknown.push(ch);
      i++;
      continue;
    }

    // Stroke — start a new shot
    if (STROKES.has(ch)) {
      const newShot: ParsedShot = {
        shot_no: nextShotNo++,
        stroke_char: ch,
        shot_type_id: STROKE_TO_SHOT_TYPE_ID[ch] ?? SHOT_TYPE_UNKNOWN,
        serve_direction_id: null,
        groundstroke_direction_id: null,
        return_depth_id: null,
        court_position_id: null,
        outcome_id: null,
        error_type_id: null,
        is_approach: false,
        is_at_net: false,
        raw: ch,
      };
      shots.push(newShot);
      i++;
      continue;
    }

    // Special characters we ignore: ! (typically a tweener / un-returnable marker),
    // ? (uncertainty), space, etc. Capture but advance.
    unknown.push(ch);
    i++;
  }

  return finalize(s, shots, unknown, isServeAndVolley, isLet);
}

function finalize(
  raw: string,
  shots: ParsedShot[],
  unknown: string[],
  isServeAndVolley: boolean,
  isLet: boolean,
): ParsedPoint {
  let endingShotNo: number | null = null;
  let pointOutcomeId: number | null = null;
  for (const shot of shots) {
    if (shot.outcome_id !== null && shot.outcome_id !== OUTCOME_IN_PLAY) {
      endingShotNo = shot.shot_no;
      pointOutcomeId = shot.outcome_id;
    }
  }

  const rallyLength = shots.length;

  // Refine: if shot 1 (serve) is a winner and rally length 1 → ace
  let isAce = false;
  let isServeWinner = false;
  if (shots.length === 1 && shots[0]?.shot_type_id === SHOT_TYPE_SERVE && shots[0]?.outcome_id === OUTCOME_WINNER) {
    isAce = true;
  }
  // If rally length 2 (serve + return) and the return was a forced error, it's a serve winner.
  if (
    shots.length === 2 &&
    shots[0]?.shot_type_id === SHOT_TYPE_SERVE &&
    shots[1]?.outcome_id === OUTCOME_FORCED_ERROR
  ) {
    isServeWinner = true;
  }
  if (isAce) pointOutcomeId = OUTCOME_ACE;
  else if (isServeWinner) pointOutcomeId = OUTCOME_SERVE_WINNER;

  return {
    raw_input: raw,
    shots,
    rally_length: rallyLength,
    point_outcome_id: pointOutcomeId,
    ending_shot_no: endingShotNo,
    is_ace: isAce,
    is_serve_winner: isServeWinner,
    is_double_fault: false,
    is_serve_and_volley: isServeAndVolley,
    is_first_serve_in: true,
    is_let: isLet,
    unknown_chars: unknown,
  };
}

function emptyPoint(s: string, unknown: string[]): ParsedPoint {
  return {
    raw_input: s,
    shots: [],
    rally_length: 0,
    point_outcome_id: null,
    ending_shot_no: null,
    is_ace: false,
    is_serve_winner: false,
    is_double_fault: false,
    is_serve_and_volley: false,
    is_first_serve_in: false,
    is_let: false,
    unknown_chars: unknown,
  };
}

function isStandaloneServeFault(p: ParsedPoint): boolean {
  // The shot list is exactly [serve] AND that shot has an error_type set
  // AND no later shots existed AND outcome was set as unforced (we mark serve faults that way).
  if (p.shots.length !== 1) return false;
  const s = p.shots[0]!;
  return s.shot_type_id === SHOT_TYPE_SERVE && s.error_type_id !== null;
}
