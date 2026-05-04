/**
 * Filesystem-cached AI insight cards. Cards are produced by
 * src/scripts/refresh-ai-cards.ts and stored at data/ai-cards/<slug>.json.
 *
 * The page imports `loadAiCard(slug)` at SSR time. Missing card → null,
 * the section silently omits.
 */
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

export interface AiCard {
  slug: string;
  paragraph: string;
  generatedAtIso: string;
  modelId: string;
}

const CARDS_DIR = join(process.cwd(), 'data', 'ai-cards');

export function loadAiCard(slug: string): AiCard | null {
  const path = join(CARDS_DIR, `${slug}.json`);
  if (!existsSync(path)) return null;
  try {
    const raw = readFileSync(path, 'utf-8');
    const obj = JSON.parse(raw) as AiCard;
    if (!obj.paragraph || !obj.slug) return null;
    return obj;
  } catch {
    return null;
  }
}

/**
 * Compare-page AI cards live at data/ai-cards/compare/<a>-vs-<b>.json,
 * keyed by the alphabetically-sorted slug pair so /compare/x-vs-y and
 * /compare/y-vs-x resolve to the same file.
 */
export function compareCardKey(slugA: string, slugB: string): string {
  return [slugA, slugB].sort().join('-vs-');
}

export function loadCompareAiCard(slugA: string, slugB: string): AiCard | null {
  const key = compareCardKey(slugA, slugB);
  const path = join(CARDS_DIR, 'compare', `${key}.json`);
  if (!existsSync(path)) return null;
  try {
    const raw = readFileSync(path, 'utf-8');
    const obj = JSON.parse(raw) as AiCard;
    if (!obj.paragraph || !obj.slug) return null;
    return obj;
  } catch {
    return null;
  }
}
