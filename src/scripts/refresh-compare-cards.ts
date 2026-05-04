/**
 * Generate an AI editorial paragraph per head-to-head matchup. Output goes
 * to data/ai-cards/compare/<a-vs-b>.json (slugs alphabetically sorted, so
 * /compare/x-vs-y and /compare/y-vs-x resolve to the same file).
 *
 *   npm run refresh:compare-cards                  # all curated rivalries
 *   npm run refresh:compare-cards roger-federer rafael-nadal  # one pair
 *
 * By default the script walks every curated player's `rivalries` array and
 * generates a card per (player, rival) ordered pair, deduping via the
 * sorted-slug key. Pass two slugs as args for a one-off.
 *
 * Requires ANTHROPIC_API_KEY in .env.
 */
import { writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import Anthropic from '@anthropic-ai/sdk';
import { sql } from '../lib/libDb';
import { getAllPlayers, getPlayerBySlug } from '../lib/libPlayers';
import {
  getHeadToHead,
  getMatchHistoryBetween,
  getMeetingsByYear,
} from '../lib/libDb';
import { compareCardKey, type AiCard } from '../lib/libAiCards';

const OUT_DIR = join(process.cwd(), 'data', 'ai-cards', 'compare');
const MODEL = 'claude-haiku-4-5-20251001';

async function buildContext(slugA: string, slugB: string): Promise<string | null> {
  const a = getPlayerBySlug(slugA);
  const b = getPlayerBySlug(slugB);
  if (!a || !b) return null;
  const [h2h, recent, yearly] = await Promise.all([
    getHeadToHead(slugA, slugB),
    getMatchHistoryBetween(slugA, slugB, 6),
    getMeetingsByYear(slugA, slugB),
  ]);
  if (!h2h) return null;

  const recentLines = recent.map((m) => {
    const winner = m.winnerSlug === slugA ? a.fullName : (m.winnerSlug === slugB ? b.fullName : '?');
    return `  ${m.year} ${m.tournament ?? ''} ${m.round ?? ''} ${m.surface ?? ''} ${m.score ?? ''} (winner ${winner})`.trim();
  }).join('\n');

  const span = yearly.length > 0
    ? `${yearly[0]!.year}–${yearly[yearly.length - 1]!.year}`
    : 'n/a';

  return `
RIVALRY: ${a.fullName} vs ${b.fullName}
TOTAL: ${h2h.aWins} (${a.fullName})—${h2h.bWins} (${b.fullName})
SURFACES (A−B):
  Hard:   ${h2h.bySurface.hard.a}−${h2h.bySurface.hard.b}
  Clay:   ${h2h.bySurface.clay.a}−${h2h.bySurface.clay.b}
  Grass:  ${h2h.bySurface.grass.a}−${h2h.bySurface.grass.b}
  Carpet: ${h2h.bySurface.carpet.a}−${h2h.bySurface.carpet.b}
SPAN OF MEETINGS: ${span} · ${yearly.length} years
LAST MEETING: ${h2h.lastMeeting?.year ?? 'n/a'} · ${h2h.lastMeeting?.tournament ?? ''} · ${h2h.lastMeeting?.round ?? ''} · ${h2h.lastMeeting?.score ?? ''} (won by ${h2h.lastMeeting?.winnerSlug ?? '?'})
RECENT MEETINGS:
${recentLines || '  n/a'}
PLAYER A STYLE: ${a.styleOfPlay.join(', ')} · ${a.handedness} · ${a.backhandStyle}
PLAYER B STYLE: ${b.styleOfPlay.join(', ')} · ${b.handedness} · ${b.backhandStyle}
  `.trim();
}

const PROMPT = (context: string) => `
You are writing an editorial paragraph for First Strings, a depth-over-speed
tennis fandom site. The voice is restrained, observant, slightly literary —
not breathless. Avoid clichés ("for the ages", "epic battles") and refuse
"the GOAT debate" framing.

Write ONE paragraph (~80–110 words) about this rivalry. Pick a single specific
angle the data suggests: a surface asymmetry, a turning point year, a
generational positioning, a stylistic clash that explains the score. Use at
most one or two precise numbers. End with a sentence that opens toward the
matchup's larger meaning rather than declaring a winner.

Hard rules:
- No starting with a player's first name alone.
- No exclamation marks.
- No second person ("you").
- Plain prose only — no markdown, no headers, no bullets.

CONTEXT:
${context}

Output the paragraph and nothing else.
`.trim();

interface CompareCard extends AiCard { partner: string }

async function generate(client: Anthropic, slugA: string, slugB: string): Promise<CompareCard | null> {
  const context = await buildContext(slugA, slugB);
  if (!context) return null;
  const resp = await client.messages.create({
    model: MODEL,
    max_tokens: 400,
    messages: [{ role: 'user', content: PROMPT(context) }],
  });
  const textBlock = resp.content.find((b) => b.type === 'text');
  if (!textBlock || textBlock.type !== 'text') return null;
  const [first, second] = [slugA, slugB].sort();
  return {
    slug: first!,
    partner: second!,
    paragraph: textBlock.text.trim(),
    generatedAtIso: new Date().toISOString(),
    modelId: MODEL,
  };
}

function pairsForCuratedRoster(): Array<[string, string]> {
  const all = getAllPlayers();
  const seen = new Set<string>();
  const pairs: Array<[string, string]> = [];
  for (const p of all) {
    for (const rival of p.rivalries ?? []) {
      const partner = getPlayerBySlug(rival);
      if (!partner) continue;
      const key = compareCardKey(p.slug, rival);
      if (seen.has(key)) continue;
      seen.add(key);
      pairs.push([p.slug, rival]);
    }
  }
  return pairs;
}

async function main(): Promise<void> {
  if (!process.env['ANTHROPIC_API_KEY'] || process.env['ANTHROPIC_API_KEY'].startsWith('sk-ant-...')) {
    console.error('[compare-cards] ANTHROPIC_API_KEY missing — set it in .env to enable card generation.');
    process.exit(1);
  }
  const client = new Anthropic({ apiKey: process.env['ANTHROPIC_API_KEY'] });
  if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });

  const args = process.argv.slice(2);
  let pairs: Array<[string, string]>;
  if (args.length === 2) {
    pairs = [[args[0]!, args[1]!]];
  } else if (args.length === 0) {
    pairs = pairsForCuratedRoster();
  } else {
    console.error('Usage: npm run refresh:compare-cards [<slugA> <slugB>]');
    process.exit(1);
  }
  console.log(`[compare-cards] generating ${pairs.length} card${pairs.length === 1 ? '' : 's'}...`);

  let ok = 0;
  for (const [a, b] of pairs) {
    const key = compareCardKey(a, b);
    try {
      const card = await generate(client, a, b);
      if (!card) { console.warn(`[compare-cards] skip ${key} — no h2h data`); continue; }
      const path = join(OUT_DIR, `${key}.json`);
      writeFileSync(path, JSON.stringify(card, null, 2));
      ok++;
      console.log(`[compare-cards] ✓ ${key} (${card.paragraph.length} chars)`);
    } catch (e) {
      console.error(`[compare-cards] ✗ ${key}:`, (e as Error).message);
    }
  }
  console.log(`[compare-cards] done — ${ok}/${pairs.length} written`);
}

main()
  .then(async () => { await sql.end(); })
  .catch(async (e) => {
    console.error('FAILED:', e);
    await sql.end({ timeout: 5 }).catch(() => undefined);
    process.exit(1);
  });
