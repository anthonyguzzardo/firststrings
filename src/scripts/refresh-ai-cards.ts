/**
 * Generate an editorial AI insight paragraph per curated player and write
 * the result to data/ai-cards/<slug>.json. The page reads from disk at
 * render time — no API calls in the hot path.
 *
 *   npm run refresh:ai-cards            # all curated players
 *   npm run refresh:ai-cards roger-federer iga-swiatek
 *
 * Idempotent only in the "regenerate everything" sense — every run hits
 * the API. Cache is stored on the filesystem (cheap, version-controllable).
 *
 * Requires ANTHROPIC_API_KEY in .env.
 */
import { writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import Anthropic from '@anthropic-ai/sdk';
import { sql } from '../lib/libDb';
import { getAllPlayers, getPlayerBySlug } from '../lib/libPlayers';
import {
  getCareerStatsBySlug,
  getMatchHistoryBetween,
  getPlayerClutchMetrics,
} from '../lib/libDb';

const OUT_DIR = join(process.cwd(), 'data', 'ai-cards');
const MODEL = 'claude-haiku-4-5-20251001';

interface AiCard {
  slug: string;
  paragraph: string;
  generatedAtIso: string;
  modelId: string;
}

async function buildContext(slug: string): Promise<string | null> {
  const player = getPlayerBySlug(slug);
  if (!player) return null;
  const stats = await getCareerStatsBySlug(slug).catch(() => null);
  const clutch = await getPlayerClutchMetrics(slug).catch(() => null);

  // Find the most-charted rival from the curated roster for a recent-meetings
  // tidbit. Optional — if no rivalry returns matches we just omit it.
  const rivals = player.rivalries ?? [];
  let rivalrySnippet = '';
  if (rivals.length > 0) {
    const rival = rivals[0]!;
    const recents = await getMatchHistoryBetween(slug, rival, 3).catch(() => [] as Awaited<ReturnType<typeof getMatchHistoryBetween>>);
    if (recents.length > 0) {
      rivalrySnippet = `Recent meetings vs ${rival}: ` + recents.map((m) =>
        `${m.year} ${m.tournament ?? ''} ${m.round ?? ''} ${m.surface ?? ''} ${m.score ?? ''} (won by ${m.winnerSlug ?? '?'})`.trim()
      ).join(' · ');
    }
  }

  return `
PLAYER: ${player.fullName} (${player.tour}, ${player.status}, born ${player.bornIso})
BIRTHPLACE: ${player.birthplace}
PLAYS: ${player.handedness}-handed, ${player.backhandStyle} backhand
STYLE: ${player.styleOfPlay.join(', ')}
SLAMS: ${player.career.grandSlams}
CAREER-HIGH RANK: #${player.career.careerHighRanking}
WEEKS AT #1: ${player.career.weeksAtNumberOne}
${stats?.overall ? `MATCH RECORD: ${stats.overall.matchesWon}-${stats.overall.matchesLost}` : ''}
${stats?.hard   ? `HARD: ${stats.hard.matchesWon}-${stats.hard.matchesLost}`     : ''}
${stats?.clay   ? `CLAY: ${stats.clay.matchesWon}-${stats.clay.matchesLost}`     : ''}
${stats?.grass  ? `GRASS: ${stats.grass.matchesWon}-${stats.grass.matchesLost}` : ''}
${clutch ? `CLUTCH (overall, ${clutch.overall.matchesSampleSize} MCP-charted matches):` : ''}
${clutch ? `  BP saved: ${clutch.overall.bpSavePct ? (clutch.overall.bpSavePct * 100).toFixed(1) + '%' : 'n/a'}` : ''}
${clutch ? `  BP converted: ${clutch.overall.bpConvertPct ? (clutch.overall.bpConvertPct * 100).toFixed(1) + '%' : 'n/a'}` : ''}
${clutch ? `  BLR: ${clutch.overall.blr?.toFixed(3) ?? 'n/a'} (above 0.500 = wins their bigger moments)` : ''}
${clutch ? `  DR+: ${clutch.overall.drPlus?.toFixed(2) ?? 'n/a'}` : ''}
${rivalrySnippet}
SIGNATURE MATCH: ${player.signatureMatch ?? 'n/a'}
QUOTES: ${(player.quotes ?? []).slice(0, 2).map((q) => `"${q.text}"`).join(' / ') || 'n/a'}
  `.trim();
}

const PROMPT = (context: string) => `
You are writing an editorial paragraph for First Strings, a depth-over-speed
tennis fandom site. The voice is restrained, observant, slightly literary —
not breathless. Avoid clichés ("a master of his craft"), avoid stat-dumping
("won 20 Slams!"), and avoid the empty editorial gesture ("the GOAT debate
rages on").

Write ONE paragraph (~80–110 words) that reads like the lede of a magazine
profile. Pick a single specific angle the data suggests and lean into it —
maybe a clutch tendency, a surface affinity, a generational position, an
under-appreciated rivalry pattern. Use at most one or two precise numbers
in service of the angle, never as a list. End with a sentence that opens
toward the rest of the profile rather than closing the case.

Hard rules:
- No starting with the player's first name alone.
- No "X is one of the greatest…"
- No second person ("you").
- No exclamation marks.
- Plain prose only. No markdown, no headers, no list bullets.

CONTEXT:
${context}

Output the paragraph and nothing else.
`.trim();

async function generateForSlug(client: Anthropic, slug: string): Promise<AiCard | null> {
  const context = await buildContext(slug);
  if (!context) {
    console.warn(`[ai-cards] unknown slug: ${slug}`);
    return null;
  }
  console.log(`[ai-cards] generating ${slug}...`);
  const resp = await client.messages.create({
    model: MODEL,
    max_tokens: 400,
    messages: [{ role: 'user', content: PROMPT(context) }],
  });
  // First text block.
  const textBlock = resp.content.find((b) => b.type === 'text');
  if (!textBlock || textBlock.type !== 'text') {
    console.warn(`[ai-cards] no text block for ${slug}`);
    return null;
  }
  const paragraph = textBlock.text.trim();
  return {
    slug,
    paragraph,
    generatedAtIso: new Date().toISOString(),
    modelId: MODEL,
  };
}

async function main(): Promise<void> {
  if (!process.env['ANTHROPIC_API_KEY'] || process.env['ANTHROPIC_API_KEY'].startsWith('sk-ant-...')) {
    console.error('[ai-cards] ANTHROPIC_API_KEY missing — set it in .env to enable card generation.');
    process.exit(1);
  }
  const client = new Anthropic({ apiKey: process.env['ANTHROPIC_API_KEY'] });

  if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });

  const argSlugs = process.argv.slice(2);
  const slugs = argSlugs.length > 0
    ? argSlugs
    : getAllPlayers().map((p) => p.slug);
  console.log(`[ai-cards] generating ${slugs.length} card${slugs.length === 1 ? '' : 's'}...`);

  let ok = 0;
  for (const slug of slugs) {
    try {
      const card = await generateForSlug(client, slug);
      if (!card) continue;
      const path = join(OUT_DIR, `${slug}.json`);
      writeFileSync(path, JSON.stringify(card, null, 2));
      ok++;
      console.log(`[ai-cards] ✓ ${slug} (${card.paragraph.length} chars)`);
    } catch (e) {
      console.error(`[ai-cards] ✗ ${slug}:`, (e as Error).message);
    }
  }
  console.log(`[ai-cards] done — ${ok}/${slugs.length} written`);
}

main()
  .then(async () => { await sql.end(); })
  .catch(async (e) => {
    console.error('FAILED:', e);
    await sql.end({ timeout: 5 }).catch(() => undefined);
    process.exit(1);
  });
