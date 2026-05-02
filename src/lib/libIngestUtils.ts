// @region exports
import { execFile as execFileCb } from 'node:child_process';
import { promisify } from 'node:util';
import { existsSync, mkdirSync } from 'node:fs';
import { dirname } from 'node:path';

const execFile = promisify(execFileCb);

/**
 * Turn a name like "Björn Borg" into "bjorn-borg".
 * Strips accents, lowercases, replaces non-alnum runs with single hyphens.
 */
export function slugify(input: string): string {
  return input
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** Split an array into chunks of the given size. */
export function chunk<T>(arr: readonly T[], size: number): T[][] {
  if (size <= 0) throw new Error('chunk size must be > 0');
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

/**
 * Parse a YYYYMMDD string (Sackmann format) into an ISO date string,
 * or null if the input is empty / malformed / has month=00 (DOB unknown).
 */
export function parseYyyymmdd(s: string | undefined | null): string | null {
  if (!s) return null;
  const trimmed = s.trim();
  if (!/^\d{8}$/.test(trimmed)) return null;
  const y = trimmed.slice(0, 4);
  const m = trimmed.slice(4, 6);
  const d = trimmed.slice(6, 8);
  if (m === '00' || d === '00' || y === '0000') return null;
  return `${y}-${m}-${d}`;
}

/** Parse "YYYYMMDD" into an integer year, or null. */
export function parseYearFromYyyymmdd(s: string | undefined | null): number | null {
  if (!s || !/^\d{8}/.test(s)) return null;
  const y = parseInt(s.slice(0, 4), 10);
  return Number.isFinite(y) ? y : null;
}

/**
 * Ensure a Sackmann (or any) git repo is cloned locally.
 * - If localPath exists, runs `git pull --ff-only` (or skips if `skipPullIfExists`).
 * - Otherwise, clones with --depth=1 (full history isn't needed for ingest).
 */
export async function ensureRepo(opts: {
  url: string;
  localPath: string;
  skipPullIfExists?: boolean;
}): Promise<void> {
  const { url, localPath, skipPullIfExists = false } = opts;
  mkdirSync(dirname(localPath), { recursive: true });

  if (existsSync(localPath)) {
    if (skipPullIfExists) {
      console.log(`[git] reuse: ${localPath}`);
      return;
    }
    console.log(`[git] pull: ${localPath}`);
    try {
      await execFile('git', ['-C', localPath, 'pull', '--ff-only'], { maxBuffer: 50 * 1024 * 1024 });
    } catch (e) {
      console.warn(`[git] pull failed for ${localPath}, continuing with existing checkout: ${(e as Error).message}`);
    }
    return;
  }

  console.log(`[git] clone: ${url} → ${localPath}`);
  await execFile('git', ['clone', '--depth=1', url, localPath], { maxBuffer: 50 * 1024 * 1024 });
}

/**
 * Map Sackmann's "hand" code to te_handedness.handedness_id.
 * R=Right, L=Left, U=Unknown, A=Ambidextrous, blank/missing → unknown.
 */
export function handCodeToHandednessId(code: string | undefined | null): number {
  switch ((code ?? '').trim().toUpperCase()) {
    case 'R': return 1;
    case 'L': return 2;
    case 'A': return 3;
    default:  return 99;
  }
}

/**
 * Map Sackmann's "surface" string to te_surface.surface_id.
 * Sackmann uses Hard / Clay / Grass / Carpet (case varies).
 */
export function surfaceTextToSurfaceId(s: string | undefined | null): number | null {
  if (!s) return null;
  switch (s.trim().toLowerCase()) {
    case 'hard':   return 1;
    case 'clay':   return 2;
    case 'grass':  return 3;
    case 'carpet': return 4;
    case '':       return null;
    default:       return 99;
  }
}

/**
 * Map Sackmann's tourney_level to te_tournament_level.level_id.
 *
 * ATP encoding (per Sackmann readme):
 *   G=Grand Slam, M=Masters 1000, A=ATP 500/250 (mixed), F=Tour Finals,
 *   D=Davis Cup, C=Challenger, S=ITF, O=Olympics
 * WTA encoding:
 *   G, P=Premier/Premier Mandatory (older), PM=Premier Mandatory, T1, T2,
 *   I=International, D=Fed Cup, F=Tour Finals, etc.
 *
 * We collapse the messy ones to nearest level_id; downstream a smarter pass
 * can refine using draw_size + level signals.
 */
export function tourneyLevelCodeToLevelId(code: string | undefined | null, tourId: number): number | null {
  const c = (code ?? '').trim().toUpperCase();
  if (!c) return null;
  if (c === 'G')  return 1;
  if (c === 'F' && tourId === 1) return 2;  // ATP Finals
  if (c === 'F' && tourId === 2) return 3;  // WTA Finals
  if (c === 'O')  return 4;                 // Olympics
  if (c === 'M')  return 5;                 // Masters 1000
  if (c === 'PM' && tourId === 2) return 6; // WTA 1000 (Premier Mandatory)
  if (c === 'P'  && tourId === 2) return 6; // older Premier ≈ 1000
  if (c === 'A'  && tourId === 1) return 7; // ATP 500/250 lumped → use ATP 500 default
  if (c === 'D')  return 12;                // Davis / BJK Cup
  if (c === 'C')  return 14;                // Challenger
  if (c === 'S')  return 15;                // ITF / Satellite
  if (c === 'I'  && tourId === 2) return 8; // WTA International ≈ 500
  if (c === 'T1' && tourId === 2) return 6;
  if (c === 'T2' && tourId === 2) return 8;
  return null;
}

/** Round-code from Sackmann to te_match_round.round_id. */
export function roundCodeToRoundId(code: string | undefined | null): number {
  const c = (code ?? '').trim().toUpperCase();
  if (c === 'Q1')   return 1;
  if (c === 'Q2')   return 2;
  if (c === 'Q3')   return 3;
  if (c === 'R128') return 4;
  if (c === 'R64')  return 5;
  if (c === 'R32')  return 6;
  if (c === 'R16')  return 7;
  if (c === 'QF')   return 8;
  if (c === 'SF')   return 9;
  if (c === 'BR')   return 10;
  if (c === 'F')    return 11;
  if (c === 'RR')   return 12;
  return 99;
}
// @endregion exports
