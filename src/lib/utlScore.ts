/**
 * Tiny parser for Sackmann-style score strings: "6-4 7-6(5) 6-3" → set list.
 *
 * Sackmann's encoding:
 *   - sets separated by single spaces
 *   - each set is `<a>-<b>` integer-integer
 *   - tiebreak detail in parens immediately after, e.g. `7-6(5)` (loser won 5 pts)
 *   - terminator codes appended: ` RET` (retirement), ` W/O` (walkover),
 *     ` DEF` (default), ` ABN` (abandoned)
 */

export interface ParsedSet {
  /** Games won by the score's left-side player (= match's "p1" in tb_match). */
  a: number;
  /** Games won by the right-side player. */
  b: number;
  /** Tiebreak loser's points (e.g. 5 for 7-6(5)) — absent when no tiebreak. */
  tb: number | null;
}

export interface ParsedScore {
  sets: ParsedSet[];
  /** "RET", "W/O", "DEF", "ABN" — null when the match completed normally. */
  terminator: 'RET' | 'W/O' | 'DEF' | 'ABN' | null;
  /** Raw string we parsed, for fallback display. */
  raw: string;
}

const TERMINATORS = ['RET', 'W/O', 'DEF', 'ABN'] as const;

export function parseScore(raw: string | null | undefined): ParsedScore | null {
  if (!raw) return null;
  let s = raw.trim();
  if (!s) return null;

  let terminator: ParsedScore['terminator'] = null;
  for (const t of TERMINATORS) {
    if (s.endsWith(' ' + t) || s === t) {
      terminator = t;
      s = s.slice(0, s.length - t.length).trim();
      break;
    }
  }

  // Split on whitespace; tolerate stray spaces inside parens like "7-6 (5)"
  // by gluing a paren-leading token onto its predecessor.
  const tokens = s.split(/\s+/).filter(Boolean);
  const merged: string[] = [];
  for (const t of tokens) {
    if (t.startsWith('(') && merged.length > 0) {
      merged[merged.length - 1] = merged[merged.length - 1] + t;
    } else {
      merged.push(t);
    }
  }

  const sets: ParsedSet[] = [];
  for (const tok of merged) {
    const m = /^(\d{1,2})-(\d{1,2})(?:\((\d+)\))?$/.exec(tok);
    if (!m) {
      // Token didn't parse — bail and let caller show raw string.
      return null;
    }
    sets.push({
      a: parseInt(m[1]!, 10),
      b: parseInt(m[2]!, 10),
      tb: m[3] ? parseInt(m[3], 10) : null,
    });
  }
  if (sets.length === 0) return null;
  return { sets, terminator, raw };
}

/**
 * Re-emit a parsed score in its canonical form, useful for matching across
 * sources that differ only in whitespace ("7-6(5)" vs "7-6 (5)").
 */
export function canonicalScore(parsed: ParsedScore): string {
  const setStr = parsed.sets.map((s) => `${s.a}-${s.b}${s.tb !== null ? `(${s.tb})` : ''}`).join(' ');
  return parsed.terminator ? `${setStr} ${parsed.terminator}` : setStr;
}
