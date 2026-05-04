/**
 * Open Graph SVG for /compare/<aSlug>-vs-<bSlug>.
 *
 * Renders a 1200×630 share card with the two player names, the head-to-head
 * tally, and a surface-tinted split bar. SVG is the lightest, prettiest
 * server-rendered option; most modern social platforms (Twitter, Mastodon,
 * iMessage) accept it. For platforms that strictly require PNG, swap in
 * `satori` + `resvg` later — the layout here will translate cleanly.
 */
import type { APIRoute } from 'astro';
import { getPlayerBySlug } from '../../../lib/libPlayers';
import { getHeadToHead } from '../../../lib/libDb';

export const prerender = false;

const W = 1200;
const H = 630;

const escapeXml = (s: string): string =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
   .replace(/"/g, '&quot;').replace(/'/g, '&apos;');

export const GET: APIRoute = async ({ params }) => {
  const { matchup } = params;
  if (!matchup) return new Response('Missing matchup', { status: 400 });
  const idx = matchup.lastIndexOf('-vs-');
  if (idx < 1) return new Response('Bad matchup', { status: 400 });
  const aSlug = matchup.slice(0, idx);
  const bSlug = matchup.slice(idx + 4);

  const playerA = getPlayerBySlug(aSlug);
  const playerB = getPlayerBySlug(bSlug);
  if (!playerA || !playerB) return new Response('Unknown player', { status: 404 });

  let h2h: Awaited<ReturnType<typeof getHeadToHead>> = null;
  try {
    h2h = await getHeadToHead(playerA.slug, playerB.slug);
  } catch (e) {
    const code = (e as { code?: string } | null)?.code;
    if (code !== 'ECONNREFUSED') console.error('[og] H2H query failed:', e);
  }
  const aWins = h2h?.aWins ?? 0;
  const bWins = h2h?.bWins ?? 0;
  const totalMeetings = aWins + bWins;
  const aPct = totalMeetings > 0 ? aWins / totalMeetings : 0.5;

  // Per-surface counts for the bar set. Filter to surfaces with meetings.
  type Sk = 'hard' | 'clay' | 'grass' | 'carpet';
  const surfaces: Array<{ key: Sk; label: string; color: string; a: number; b: number }> = [
    { key: 'hard',   label: 'Hard',   color: '#2f6bb3', a: h2h?.bySurface.hard.a   ?? 0, b: h2h?.bySurface.hard.b   ?? 0 },
    { key: 'clay',   label: 'Clay',   color: '#c95f2c', a: h2h?.bySurface.clay.a   ?? 0, b: h2h?.bySurface.clay.b   ?? 0 },
    { key: 'grass',  label: 'Grass',  color: '#4d7c3a', a: h2h?.bySurface.grass.a  ?? 0, b: h2h?.bySurface.grass.b  ?? 0 },
    { key: 'carpet', label: 'Carpet', color: '#6b6b6b', a: h2h?.bySurface.carpet.a ?? 0, b: h2h?.bySurface.carpet.b ?? 0 },
  ].filter((s) => s.a + s.b > 0) as Array<{ key: Sk; label: string; color: string; a: number; b: number }>;

  const aName = escapeXml(playerA.fullName);
  const bName = escapeXml(playerB.fullName);

  // Build the surface bars. Each bar is 880px wide; A's share fills the left.
  const barWidth = 880;
  const barHeight = 14;
  const labelGap = 110;
  const barRowGap = 38;
  const barsStartY = 460;
  const barsX = (W - barWidth - labelGap) / 2 + labelGap;

  const surfaceRows = surfaces.map((s, i) => {
    const sub = s.a + s.b;
    const aShare = sub > 0 ? s.a / sub : 0.5;
    const aPx = barWidth * aShare;
    const y = barsStartY + i * barRowGap;
    return `
      <g>
        <text x="${barsX - 16}" y="${y + barHeight - 1}" font-family="EB Garamond, Georgia, serif" font-size="20" fill="#6b655d" letter-spacing="0.16em" text-anchor="end">${s.label.toUpperCase()}</text>
        <rect x="${barsX}" y="${y}" width="${barWidth}" height="${barHeight}" fill="${s.color}33" rx="2" ry="2" />
        <rect x="${barsX}" y="${y}" width="${aPx}" height="${barHeight}" fill="${s.color}" rx="2" ry="2" />
        <text x="${barsX + barWidth + 14}" y="${y + barHeight}" font-family="EB Garamond, Georgia, serif" font-size="22" fill="#1a1a1a" font-feature-settings="'tnum' 1, 'lnum' 1">${s.a}–${s.b}</text>
      </g>`;
  }).join('');

  const indicatorY = 200;
  const indicatorBarWidth = 480;
  const indicatorAFill = indicatorBarWidth * aPct;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#faf6ee" />
        <stop offset="100%" stop-color="#f0e9da" />
      </linearGradient>
    </defs>
    <rect width="${W}" height="${H}" fill="url(#bg)" />

    <!-- top rule -->
    <rect x="60" y="60" width="${W - 120}" height="2" fill="#b06835" />

    <!-- brand mark -->
    <text x="60" y="48" font-family="EB Garamond, Georgia, serif" font-size="22" fill="#b06835" font-weight="500" letter-spacing="0.16em">FIRST STRINGS</text>
    <text x="${W - 60}" y="48" font-family="-apple-system, Helvetica Neue, sans-serif" font-size="16" fill="#6b655d" text-anchor="end" letter-spacing="0.14em">HEAD TO HEAD</text>

    <!-- player A name -->
    <text x="80" y="180" font-family="EB Garamond, Georgia, serif" font-size="56" font-weight="500" fill="#1a1a1a">${aName}</text>

    <!-- big H2H score -->
    <g text-anchor="middle">
      <text x="${W / 2}" y="370" font-family="EB Garamond, Georgia, serif" font-size="190" font-weight="500" fill="#1a1a1a" font-feature-settings="'tnum' 1, 'lnum' 1">${aWins} <tspan font-size="120" fill="#908a80">—</tspan> ${bWins}</text>
    </g>

    <!-- player B name (right-aligned) -->
    <text x="${W - 80}" y="180" font-family="EB Garamond, Georgia, serif" font-size="56" font-weight="500" fill="#1a1a1a" text-anchor="end">${bName}</text>

    <!-- master indicator bar -->
    <rect x="${(W - indicatorBarWidth) / 2}" y="${indicatorY}" width="${indicatorBarWidth}" height="6" fill="#d8d2c5" rx="3" />
    <rect x="${(W - indicatorBarWidth) / 2}" y="${indicatorY}" width="${indicatorAFill}" height="6" fill="#b06835" rx="3" />

    <!-- meetings count caption -->
    <text x="${W / 2}" y="420" font-family="-apple-system, Helvetica Neue, sans-serif" font-size="20" fill="#6b655d" text-anchor="middle" letter-spacing="0.14em">${totalMeetings} CAREER MEETING${totalMeetings === 1 ? '' : 'S'}</text>

    <!-- surface bars -->
    ${surfaceRows}

    <!-- footer -->
    <text x="60" y="${H - 30}" font-family="-apple-system, Helvetica Neue, sans-serif" font-size="16" fill="#908a80" letter-spacing="0.08em">firststrings.tennis · ${escapeXml(`/compare/${playerA.slug}-vs-${playerB.slug}`)}</text>
  </svg>`;

  return new Response(svg, {
    status: 200,
    headers: {
      'content-type': 'image/svg+xml; charset=utf-8',
      'cache-control': 'public, max-age=3600, s-maxage=86400',
    },
  });
};
