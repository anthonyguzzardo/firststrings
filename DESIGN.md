# First Strings — Design Manual

A design language to honor the game.

> **Soul.** First Strings is a reverent tennis publication that happens to be a data app. Roland-Garros and Wimbledon are the editorial axis we sit on; the Australian Open and US Open are reference points for specific patterns (live tickers, AI insight cards, court-paint motifs). The site reads like a magazine, animates like a documentary, and aggregates data like a record book. **Depth over speed. The design is the philosophy.**

This document is a manual, not a survey. It picks. The deep research that backs every choice lives in `tmp/design-research/{roland-garros,wimbledon,australian-open,us-open,broader-tennis,motion-and-gpu}.md` — read those when you want the receipts.

---

## Table of Contents

1. [The Brief](#the-brief)
2. [Palette](#palette)
3. [Typography](#typography)
4. [Spacing, Grid, Rhythm](#spacing-grid-rhythm)
5. [Surface Motifs](#surface-motifs)
6. [Motion](#motion)
7. [GPU & Shader Policy](#gpu--shader-policy)
8. [Components](#components)
9. [Data Visualization](#data-visualization)
10. [AI Features](#ai-features)
11. [Pages](#pages)
12. [Buttons & Controls](#buttons--controls)
13. [Quick Search](#quick-search)
14. [Accessibility & Performance](#accessibility--performance)
15. [Roadmap](#roadmap)
16. [Anti-patterns](#anti-patterns)

---

## The Brief

The four Slams give us four lessons. Take one from each.

| Slam | Lesson | What we steal |
|---|---|---|
| **Roland-Garros** | Editorial discipline. Restraint reads as expensive. | Eyebrow + display-serif + thin coloured rule rhythm. Sponsor-as-feature-attribution. Big condensed numerals as stat heroes. No pills. No neon. |
| **Wimbledon** | Tradition wears tech well. | Thin coloured utility bar at the top. Tabular-figure scores in `Gotham`-style sans. AI features dressed in editorial type, never as dashboards. Two-portrait, one-number H2H. |
| **Australian Open** | A persistent pulse keeps the site alive. | Live-score dock that survives navigation. Court-paint as design language. Italic display **used sparingly** (we already lean serif). Generative accent system. |
| **US Open** | Inline beats destination. | Tabular numerals + score-update flash. Tug-of-war probability meter. Dark-when-watching, cream-when-reading. AI cards never live on a separate page. |

Then the data sites give us the spine: **Tennis Abstract** for "% (rank)" footer convention and Match-Charting density; **Ultimate Tennis Statistics** for the 12-block player profile and the tunable GOAT calculator; **Hawk-Eye / SwingVision** for the bounce-density court SVG.

What we explicitly do **not** want:
- Pink/magenta WTA flavor (WTA's own 2025 rebrand dropped it).
- DIN Condensed (over-claimed by ATP).
- Awwwards motion theatrics (no Lenis, no scroll-jacking, no Three.js heroes).
- Pills as a default control shape.

---

## Palette

### Anchors

The site lives on **warm cream by day, warm dark by night**. These already exist in `styBase.css` — keep them, formalize them.

```css
:root {
  /* Surface — light */
  --bg:           #faf6ee; /* warm white, the page */
  --bg-elevated:  #f0e9da; /* card surface */
  --bg-deep:      #ece4d2; /* deep card / signature callout */
  --paper:        #f5f1e8; /* parchment — for editorial sections */

  /* Ink — light */
  --ink:        #1a1a1a; /* body text — never pure black */
  --ink-muted:  #6b655d; /* metadata, captions */
  --ink-soft:   #908a80; /* hints, dividers' text */
  --rule:       #d8d2c5; /* hairline rules */
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg:           #14110c;
    --bg-elevated:  #1d1a14;
    --bg-deep:      #25211a;
    --paper:        #1a1812;

    --ink:       #f4eee0;
    --ink-muted: #a39e92;
    --ink-soft:  #6b655d;
    --rule:      #2e2920;
  }
}
```

### Slam tokens — the spine

Each Slam gets two values: a **literal hex** and a **role**. They thread through trophy cards, surface chips, ledger splits, draws, every place a Slam needs to be named.

```css
:root {
  /* From the brand books, not eyeballed. */
  --slam-rg:        #b06835; /* Roland-Garros terracotta — primary */
  --slam-rg-deep:   #06492d; /* RG racquet-green — secondary */
  --slam-wim:       #046a38; /* Wimbledon green — Pantone 349 C */
  --slam-wim-purple:#582c83; /* Wimbledon purple — Pantone 268 C, heritage accent */
  --slam-ao:        #005eb8; /* AO Process Blue */
  --slam-ao-light:  #1e8fd5; /* AO True Blue */
  --slam-uso:       #3d5265; /* US Open Court Blue — Pantone 2965 U */
  --slam-uso-green: #6c935c; /* US Open Highland — out-of-bounds */
}

@media (prefers-color-scheme: dark) {
  :root {
    --slam-rg:        #d97a55;
    --slam-rg-deep:   #4d8f6d;
    --slam-wim:       #3a9e6c;
    --slam-wim-purple:#9a6cc4;
    --slam-ao:        #3aa3e0;
    --slam-ao-light:  #4ea8d8;
    --slam-uso:       #6a85a6;
    --slam-uso-green: #8fb578;
  }
}
```

> **Note on the existing `--slam-rg #b85a3a` etc.** Update to the trademark values above. The older approximations were close but the brand-book values read as "official tennis." This is one of the cheapest "feels right" upgrades available.

### Surface tokens — the second spine

Surface-tint everything. Splits, chips, table rows, bar charts, datelines on a match recap. This single rule unlocks the most semantic-density-per-pixel of any tennis pattern.

```css
:root {
  --surface-clay:   #c95f2c; /* terre battue */
  --surface-grass:  #4d7c3a; /* All-England green-gradient mid */
  --surface-hard:   #2f6bb3; /* Laykold/DecoTurf hard */
  --surface-indoor: #6b6b6b; /* carpet / indoor — quiet grey */
}
```

Always pair surface tokens with a 1px hairline of `--rule` underneath them so they read as labels, not buttons.

### Utility / accent

```css
:root {
  --ball:    #d7e84b; /* Wilson optic yellow — used as a single dot, never a fill */
  --gold:    #b8893a; /* trophy moments — slam-tally pill, Olympics, ledger hero */
  --live:    #e3422b; /* the only red on the site — LIVE pulse, server indicator */
  --line:    #ffffff; /* court-line white — used at low opacity over surface tints */
  --court-line-mute: rgba(255,255,255,0.55);
}
```

The whole accent palette is four colors. **If a fifth wants to enter, push back.**

### Headline-on-photo treatment

When a hero photo carries a name on top of it (player profile, match recap), bake a bottom-edge gradient *into the image overlay* rather than into the headline. Lifted from Roland-Garros.

```css
.hero-photo {
  position: relative;
}
.hero-photo::after {
  content: '';
  position: absolute; inset: auto 0 0 0;
  height: 60%;
  background: linear-gradient(180deg, transparent, rgba(0,0,0,0.65));
  pointer-events: none;
}
```

---

## Typography

### Stack

We've already picked **EB Garamond** for display and a system sans for body. Keep that. The work is to layer in tabular numerals, refine the tracking, and hold the line on italics.

```css
:root {
  /* Display — refined editorial serif. Already in use. */
  --serif: 'EB Garamond', 'Iowan Old Style', Georgia, 'Times New Roman', serif;

  /* Body — workmanlike system sans. */
  --sans:  -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Inter, Arial, sans-serif;

  /* Numerals — for scores, stats, ranks, dates. */
  --mono:  'JetBrains Mono', 'IBM Plex Mono', 'SFMono-Regular', Menlo, Consolas, monospace;
}

/* Apply universally to anything numeric */
.tabular {
  font-feature-settings: 'tnum' 1, 'lnum' 1;
  font-variant-numeric: tabular-nums lining-nums;
}
```

> **Future upgrade if budget allows:** licence **Tiempos Headline** (display) + **Söhne** (body) for that Roland-Garros / Pentagram-Tennis-Magazine warmth. Only do it once the rest of the site is solid; the EB Garamond pair is already 90% of the way there.

### Scale

```css
:root {
  --fs-mega:  clamp(3rem,    7vw,  6rem);    /* hero player name, match-page set scores */
  --fs-h1:    clamp(2.5rem,  5vw,  4.25rem); /* page H1 */
  --fs-h2:    clamp(1.75rem, 3vw,  2.25rem); /* section H2 */
  --fs-h3:    1.35rem;
  --fs-body:  1rem;          /* 17px base — already set */
  --fs-small: 0.875rem;      /* metadata, byline */
  --fs-eye:   0.72rem;       /* eyebrow, all-caps tracked */
}
```

### The cadence

Every section follows the **eyebrow → display-serif → thin rule** rhythm. This is the single most copyable move from Roland-Garros and is already half-implemented.

```css
.fs-section__head {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding-bottom: 1.25rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid var(--slam-rg); /* the terracotta rule */
}
.fs-section__head .fs-eyebrow {
  font: 600 var(--fs-eye)/1 var(--sans);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-muted);
}
.fs-section__head h2 {
  font-family: var(--serif);
  font-size: var(--fs-h2);
  letter-spacing: -0.01em;
  line-height: 1.05;
  text-wrap: balance;
}
```

The section rule is **never a heavy bar** and **never the page background's grey**. It is always one of the slam tokens or `--ink`. The colour names the section's domain.

### Discipline rules

- `text-wrap: balance` on every `h1, h2, .player-name, blockquote`.
- `text-wrap: pretty` on long body copy. Kills widows for free.
- Numerals get `.tabular` if they sit in a column or update live.
- Italics are reserved for **quoted speech, foreign proper nouns, and bio prose**. Not for emphasis. Not for buttons. Not for metadata. (This is where we diverge from AO's italic-everywhere — we already lean serif, italic-everywhere on serif reads as "wedding invitation".)
- Drop caps appear once per long-form bio, in `--slam-rg` (the existing `.fs-bio::first-letter` is correct — keep it).
- Pull quotes hang the opening curly quote in the margin in slam-color, like a magazine.

---

## Spacing, Grid, Rhythm

### Vertical rhythm

```css
:root {
  --rhythm:        1.5rem;
  --section-gap:   clamp(64px, 8vw, 128px); /* Wimbledon's discipline */
  --content-max:   1100px;                  /* keep current — narrow reads serious */
  --reading-max:   720px;                   /* article body */
  --hero-max:      1320px;                  /* roster / tournament heroes */
}

.fs-section { padding-block: clamp(48px, 5vw, 80px); }
```

### Container ladder

| Container | Width | Use |
|---|---|---|
| `--reading-max` | 720px | Bio prose, articles, quotes block, drop-cap intros |
| `--content-max` | 1100px | Default page well — profiles, comparisons, most content |
| `--hero-max` | 1320px | Roster heroes, tournament pages, full draws |
| Full-bleed | 100vw | Hero photos, shaders, video, the live ticker |

Cards never span more than `--content-max`. Whitespace breathing room is the default — when in doubt, add gap.

### Grid

Existing 12-column with `auto-fit / minmax()` for stat tiles is right. Two upgrades:

1. **Bento heroes** for the roster and tournament landing pages. Asymmetric: one large 60%-block + 2–3 smaller cards. Pulled from AO; matches our editorial-feature/news mental model.
2. **Container queries** on `cmpPlayerCard` so it adapts when reused on the homepage roster vs a tournament draw vs a sidebar.

```css
.fs-card { container-type: inline-size; container-name: player; }

@container player (max-width: 280px) {
  .fs-card__meta { display: none; }
  .fs-card__name { font-size: 1.2rem; }
}
```

---

## Surface Motifs

The visual story of First Strings is **the four surfaces** plus **the court geometry**. The page borrows from those, restrained.

### The court as design language

Every section header gets a thin rule. Make some of those rules **literal court lines**. SVG, single-stroke, white at low opacity, sitting between hero and stat block.

```html
<svg viewBox="0 0 1100 4" class="fs-courtline" aria-hidden="true">
  <line x1="0" y1="2" x2="1100" y2="2" stroke="currentColor" stroke-width="1" />
</svg>
```

```css
.fs-courtline {
  display: block; width: 100%; height: 4px;
  color: var(--court-line-mute);
}
```

Use it sparingly — it's an exclamation, not a divider.

### Clay grit (no shader needed)

CSS `feTurbulence` for terracotta surfaces — costs nothing, fixes the "flat orange" look on Roland-Garros sections.

```html
<svg width="0" height="0" style="position:absolute" aria-hidden="true">
  <filter id="clay-grain">
    <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="3" />
    <feColorMatrix values="0 0 0 0 0.55  0 0 0 0 0.32  0 0 0 0 0.20  0 0 0 0.55 0" />
  </filter>
</svg>
```

Apply via `filter: url(#clay-grain)` on a pseudo-element with `mix-blend-mode: multiply` over `--slam-rg`. Save the shader budget for the home/tournament hero only.

### Grass shimmer

Don't tile a grass texture — that's the Awwwards-1999 trap. Instead: a 1px white hairline across green sections doubling as the chalked baseline. Plus `mix-blend-mode: overlay` over `--slam-wim` if you need the section to "breathe".

### Hard-court paint stripe

The signature AO move that translates: a hard transition between two blues at a single horizontal line, mimicking inbounds vs out.

```css
.surface-stripe-hard {
  height: 14rem;
  background: linear-gradient(
    180deg,
    var(--slam-ao-light) 0%,
    var(--slam-ao-light) 38%,
    #ffffff             38.2%,
    #ffffff             39%,
    var(--slam-ao)      39.2%,
    var(--slam-ao)      100%
  );
}
```

Use for a single hero band on US Open / AO content. Don't reuse — its impact is in scarcity.

### Ball as accent

The optic yellow `--ball` is **never a fill, always a dot**. Live indicator. Server marker before a player name. Tournament-day ticker pulse. Trophy-moment underline. Stat-update flash. If you find yourself filling a 200px area with `--ball`, you've gone wrong.

---

## Motion

### Principles

1. **Slow over fast.** Hover transitions baseline at `220ms`. Scroll reveals at `500–700ms`. View transitions at `500–800ms`. Bouncy springs are for arcade games.
2. **Ease-out over ease-in-out.** `cubic-bezier(0.2, 0, 0, 1)` is our house easing. Things settle in; they don't oscillate.
3. **Compositor-only.** Animate `transform` and `opacity`. Use `interpolate-size: allow-keywords` for height-auto animations. Never animate `margin`, `padding`, `top/left`, or `box-shadow blur`.
4. **`prefers-reduced-motion: no-preference` is a gate, not an afterthought.** Default to no motion; layer motion behind the media query. This embodies the depth-over-speed philosophy at the CSS level.
5. **One signature gesture per page.** Pick the moment. Either the shader hero, or the bracket-draw line animation, or the court-line stroke-in, or the view-transition shared photo. Not all four.

### Tokens

```css
:root {
  --ease:      cubic-bezier(0.2, 0, 0, 1);     /* default ease-out */
  --ease-soft: cubic-bezier(0.4, 0, 0.2, 1);   /* Material standard, gentler */
  --ease-court:cubic-bezier(0.65, 0, 0.35, 1); /* line-draw cadence */

  --t-fast:   180ms;
  --t-base:   220ms;
  --t-mid:    320ms;
  --t-card:   400ms;
  --t-reveal: 700ms;
  --t-hero:   900ms;
}
```

### View transitions — the killer feature

Astro 5 has first-class view transitions. The single highest-leverage premium gesture on the site: when a user clicks a player card, the **photo morphs in place** to the hero on the player page. The name interpolates from card-size to hero-size. The trophy count counts up.

```astro
---
// cmpPlayerCard.astro
const { player } = Astro.props;
---
<a href={`/players/${player.slug}`} class="fs-card">
  <img
    src={player.photo}
    transition:name={`photo-${player.slug}`}
    class="fs-card__photo"
  />
  <h3 transition:name={`name-${player.slug}`}>{player.name}</h3>
  <span transition:name={`slams-${player.slug}`}>{player.slamCount}</span>
</a>
```

```astro
---
// pages/players/[slug].astro
---
<img src={player.photo} transition:name={`photo-${player.slug}`} class="fs-hero__photo" />
<h1 transition:name={`name-${player.slug}`}>{player.name}</h1>
```

```css
::view-transition-old(root),
::view-transition-new(root) {
  animation-duration: var(--t-reveal);
  animation-timing-function: var(--ease);
}
```

This costs nothing and feels like a film cut. Implement it on day one.

### Scroll-driven animations

`animation-timeline: view()` for section reveals and court-line draw-ins. No JavaScript. Compositor only.

```css
@keyframes draw-line { to { stroke-dashoffset: 0; } }

.fs-courtline-anim path {
  stroke-dasharray: 100;
  stroke-dashoffset: 100;
  pathLength: 100;
  animation: draw-line linear both var(--ease-court);
  animation-timeline: view();
  animation-range: entry 20% cover 60%;
}

@media (prefers-reduced-motion: reduce) {
  .fs-courtline-anim path { stroke-dashoffset: 0; animation: none; }
}
```

---

## GPU & Shader Policy

We have a budget of **one full-screen shader per page**. Use it where it earns its keep:

- **Roster home hero** — `MeshGradient` from Paper Shaders, slam-color stops at slow speed. The "wow" on first visit.
- **Tournament page hero** — same shader, swatch swapped to the tournament's slam color.
- **Anywhere else** — CSS gradient or `feTurbulence`. Period.

### Library decision

| Need | Tool | Why |
|---|---|---|
| Mesh / grain / paper / dot-orbit gradient hero | **`@paper-design/shaders`** (vanilla, not the React variant) | Zero deps. 30+ pre-built. Works in Astro without an island. |
| Hand-tuned full-screen shader (clay-grit, ball-spin trail) | **`ogl`** | ~16kb, full GLSL access, no scene graph overhead. |
| 3D content (court model, racquet morph reel) | **don't ship one in V1** | Three.js is 150kb+; revisit only if a court model is a tentpole feature. |
| MorphSVG (racquet pose interpolation) | **GSAP MorphSVG** (only library justification for GSAP) | Free under Webflow's licence. Used nowhere else. |
| Smooth scroll | **don't ship Lenis** | Native scroll + scroll-driven CSS animations beat it in 2026. |

### Hero shader recipe

```astro
---
// src/components/cmpHeroShader.astro
---
<canvas id="hero-shader" aria-hidden="true"></canvas>

<script>
  if (
    window.matchMedia('(prefers-reduced-motion: no-preference)').matches &&
    !window.matchMedia('(prefers-reduced-data: reduce)').matches &&
    (navigator.hardwareConcurrency ?? 4) >= 4
  ) {
    const { meshGradient } = await import('@paper-design/shaders');
    const canvas = document.getElementById('hero-shader');
    meshGradient(canvas, {
      colors: ['#b06835', '#faf6ee', '#046a38', '#005eb8'], // RG, paper, Wim, AO
      speed: 0.12,        // slow = reverent
      distortion: 0.55,
      swirl: 0.18,
    });
  }
</script>

<style>
  #hero-shader {
    position: absolute; inset: 0;
    width: 100%; height: 100%;
    pointer-events: none; z-index: -1;
    filter: saturate(0.85);
  }
</style>
```

**Always** ship a CSS-gradient fallback in the hero's static styles for the gate to fall through to.

---

## Components

The `cmp*` library already covers most of the spine. Below is the target shape — what to build, what to refine, what to add.

### Existing (refine, don't rewrite)

| Component | What's good | What to add |
|---|---|---|
| `cmpPlayerCard` | Editorial layout, slam-count emphasis | Container queries, view-transition names, surface-tinted tour stripe |
| `cmpStatTile` | Big numerals, eyebrow labels | Tabular numerals, "% (rank)" caption row |
| `cmpSlamCard` | Color-coded by tournament | Slight border-radius bump (4 → 6px), tabular score |
| `cmpTrophyCase` | Tier-grouped chips | Olympics-gold and Year-end-Finals get the gold accent stripe |
| `cmpCareerLedger` | Surface splits exist | Add ranking sparkline over the prize-money hero, miles-traveled gets a tiny mapped dot |
| `cmpEquipmentBag` | Specs grid is right | Wilson/Babolat/HEAD chip system; tension highlighted in mono yellow |
| `cmpQuotes` | Pull-quote with terracotta bar | Hang the opening curly quote in the margin (RG move) |
| `cmpProjection` | Confidence + range | Tag with sparkline of past projection vs actual |

### New components to build

#### `cmpUtilityBar.astro` — the Wimbledon strip

A 36px-tall slam-colored strip above the main nav with utility links: Tour filter, Compare, Live, About. All-caps tracked sans, white text. Single most identity-defining move in the site.

```astro
<div class="fs-utility">
  <div class="fs-container fs-utility__inner">
    <a href="/?tour=ATP">ATP</a>
    <a href="/?tour=WTA">WTA</a>
    <a href="/compare">Compare</a>
    <a href="/venues">Venues</a>
    <a href="/live" class="fs-utility__live"><span class="fs-pulse"></span> Live</a>
  </div>
</div>
```

```css
.fs-utility {
  background: var(--slam-rg-deep);   /* the deep racquet-green from RG */
  color: #fff;
  height: 36px;
  font: 600 0.72rem/36px var(--sans);
  letter-spacing: 0.14em;
  text-transform: uppercase;
}
.fs-utility a + a { margin-left: 1.5rem; }
.fs-utility__live { color: var(--ball); }
.fs-pulse {
  display: inline-block; width: 6px; height: 6px;
  background: var(--live); border-radius: 50%;
  animation: pulse 1.4s ease-in-out infinite;
}
@keyframes pulse {
  0%,100% { opacity: 1; transform: scale(1); }
  50%     { opacity: 0.4; transform: scale(0.8); }
}
```

#### `cmpLiveDock.astro` — the AO/USO ticker

A persistent bottom-of-viewport horizontal strip during tournament fortnights. Live matches scroll horizontally, each card showing two players, set scores in tabular numerals, tiebreak superscript, pulsing red dot. Glass background.

Renders **only when** `live=true` data exists. Off-tournament, the dock collapses entirely. This is the heart-of-the-game pattern from US Open.

```css
.fs-dock {
  position: fixed; left: 0; right: 0; bottom: 0;
  padding: 0.5rem 1rem;
  background: rgba(20, 17, 12, 0.85);
  backdrop-filter: blur(12px) saturate(1.4);
  border-top: 1px solid var(--rule);
  display: flex; gap: 0.75rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  z-index: 90;
}
.fs-dock__match { scroll-snap-align: start; min-width: 240px; }
```

#### `cmpHeadToHead.astro` — two-portrait, one-number

Wimbledon-style symmetry plus a US-Open-style tug-of-war meter. Two photos cropped tight to face level, names ALL-CAPS in the serif's display weight, one tabular number in the centre showing the lifetime H2H record. Below that, a horizontal split bar showing surface breakdown.

```
┌──────────────┬──────────────┐
│  FEDERER     │      NADAL   │   ← serif display, name caps
│   [photo]    │    [photo]   │
│              │              │
│        16  —  24            │   ← tabular hero
│   ─────────────────────     │   ← thin slam rule
│   ▓▓▓▓░░ 6—14   ▓▓░░░ 2—3 │   ← clay split
│   ▓▓▓░░░ 4—2    ▓▓░░░ 1—1 │   ← grass split
│   ▓▓▓▓▓░ 6—8    ▓░░░░ ...  │   ← hard split
└──────────────────────────────┘
```

Use this on the player profile **and** as the hero of `/compare/<a>-vs-<b>` pages.

#### `cmpRankingSparkline.astro`

A single SVG path of the player's career ATP/WTA ranking, year-by-year. Inverted Y axis (rank 1 is up). Slam-win markers as small dots in slam color. Year-end #1 weeks as a gold band. Renders inside the player profile, sized at `200x60` px.

This is the single component that will most often be reused on cards across the site (compact mode = 80x24, ledger mode = 800x180 with full axis labels).

#### `cmpDrawCanvas.astro`

A bracket draw renderer using **Bracketry** under the hood, restyled with our tokens. Connecting lines animate via `stroke-dashoffset` sequenced by round, triggered with `animation-timeline: view()`. Used on `/tournaments/<slug>` pages and as a context strip on the player profile during a tournament fortnight.

#### `cmpAiInsightCard.astro` — the editorial AI

Wimbledon and the US Open both teach the same lesson: AI features are content panels, not dashboards. When we surface a Claude-generated key-to-the-match or H2H summary, it lives in a card with:

- Eyebrow: `INSIGHT · GENERATED` (small caps, slam-tinted)
- Display headline: 1 sentence in EB Garamond
- Body: 1–2 short paragraphs in body sans
- Metric chip: one numeric anchor (e.g. "BH down-the-line +12% vs tour avg")
- A small `✦` glyph (not a robot) telling the reader this was AI-generated

No chat-bubble UI. No "Powered by" banner — attribution lives as a small footer caption. This is the Wimbledon "tradition wears tech well" rule applied.

#### `cmpCompareDrawer.astro` — vs-mode tray

A bottom-anchored drawer with two slots ("drop a player here, then another"). Slim pill when empty, expands to a full sheet when both slots full. Uses native `<dialog>` and `interpolate-size: allow-keywords`. The "compare two players" promise from CLAUDE.md gets a permanent home in the chrome.

#### `cmpQuickSearch.astro` — `Cmd+K` / `/`

Native `<dialog>` with Fuse.js (~7kb) doing fuzzy match across players, tournaments, venues, articles. Editorial framing: "Quick Search," not "Command Palette." Bind `Cmd/Ctrl+K` and `/`.

#### `cmpCourtSvg.astro` — the geometric primitive

A reusable top-down court SVG component, configurable: editorial (white-on-cream, 1px), slam (court-tinted, surface-colored), faded (12% opacity behind text). Three variants of one component. Used as section dividers, behind hero text, behind stat blocks, and as the canvas for shot-map data viz.

Build once. Reuse everywhere.

---

## Data Visualization

Stack: **D3 v7** for axes/scales, **Observable Plot** for charts, **deck.gl** for high-cardinality shot scatters (deferred), **MapLibre GL JS** for venues.

### Principles

1. **Surface-tint everything.** Clay = `--surface-clay`, grass = `--surface-grass`, hard = `--surface-hard`. Bar charts, scatter dots, heatmap ramps — all surface-colored when the data has a surface dimension.
2. **Tabular numerals on every axis label.** `.tabular` class.
3. **Tour-average context on every player number.** Tennis Abstract's footer convention: `83% (rank #4, top 3%)`. The context line is what makes a number authoritative.
4. **No Tableau chrome.** Charts inherit our editorial type and palette. Axis labels are body-sans, ticks are mid-grey, gridlines are dashed at 8% opacity. No chart titles inside the SVG — the section header IS the title.
5. **Reduced-motion respects.** Scroll-triggered chart entrance (line draw, bar grow) is gated; charts always render in their final state immediately if motion is disabled.

### The chart library

| Pattern | Tool | Notes |
|---|---|---|
| Surface-split horizontal bars | Observable Plot `barX` | One bar per surface, colored by token |
| Win % donut with tour-average tick | D3 arc + a tour-mean line | Avoid the gauge cliché; thin arc, big number |
| Career ranking sparkline | Inline SVG `path` | Reusable component (`cmpRankingSparkline`) |
| Year-by-year stat small multiples | Observable Plot grid of mini lines | One stat per cell (aces, 1st-serve %, RP%, BP-saved%) |
| Head-to-head split bar | CSS-only flexbox bars | No chart lib for a 2-bar viz |
| Tournament progression "ladder" | Custom SVG | Year × round-reached grid, cells colored by exit |
| Career-highlight timeline | Custom SVG ribbon | Slam wins as trophy glyphs, injuries as pauses |
| Bounce-density court | D3 hexbin on a `cmpCourtSvg` | Surface-colored backdrop, warm-cool ramp |
| Serve placement grid | Plain HTML `grid` | 2x3 deuce/ad × wide/body/T, %-graded |
| Shot rose (radial) | D3 polar histogram | Direction frequency, surface-tinted |
| Shot-trajectory overlay | Custom SVG bezier | Per-shot arc with arrowhead |
| High-cardinality bounce scatter | deck.gl ScatterplotLayer | Defer until `infotennis` Court Vision data lands |

### Color ramps for heatmaps

Don't use D3's default `interpolateViridis`. Build surface-aware ramps:

```js
// libDesignTokens.ts
export const ramps = {
  clay:   ['#f5e8da', '#e3a479', '#c95f2c', '#7a2f0f'],
  grass:  ['#e8efe1', '#9bbc7e', '#4d7c3a', '#1f3f1c'],
  hard:   ['#dbe8f3', '#7da5d0', '#2f6bb3', '#15314f'],
  ball:   ['#faf6ee', '#e6e87a', '#d7e84b', '#8fa320'], // optic-yellow ramp for "speed/RPM"
};
```

### MapLibre venue page

`/venues` is the home for the "honor the coolest venues" promise from CLAUDE.md.

- **Base layer:** a custom MapTiler / Maptiler-style tile set in muted cream/charcoal — no Mapbox-default grey.
- **Markers:** small SVG glyphs of the trophy (Slam venues = gold), a court icon (regular venues), a microphone (announcer-honored venues — for the "honor announcers" idea).
- **Hover:** the venue label slides in from the marker, slam-colored if the venue hosts a Slam.
- **Click:** routes to `/venues/<slug>` with a view-transition on the marker glyph → hero.

The map is the **editorial atlas**, not Google Maps.

### deck.gl — when shot data lands

The `glad94/infotennis` scraper feeds Court Vision data into Postgres. When we have shot-level coordinates:

- **Bounce density (per match)** as a `HexagonLayer` over `cmpCourtSvg`.
- **Trajectory paths (per rally)** as `PathLayer` with surface-colored gradient strokes.
- **Shot-class scatter** as `ScatterplotLayer` with shot-type encoded in glyph (slice = curve, flat = circle, kick = triangle).

Until then: don't import deck.gl. Keep the bundle lean.

---

## AI Features

Three first-party AI surfaces are implied by the project — generated narratives, the Ask the Oracle widget, and player-style embeddings (the "find similar players" feature via pgvector).

### Design rules

1. **Inline beats destination.** AI sits inside the player profile, not on `/ai`. Steal from US Open.
2. **Editorial voice, not chat-bubble voice.** AI-generated copy uses the same EB Garamond + body sans as a human article. No emojis. Wimbledon's Match Chat is the model.
3. **Single sparkle glyph.** A small `✦` (or a custom 12px SVG) marks AI-generated content. No robot icons. No "AI" badges.
4. **Streaming is part of the design.** When Claude streams a response, render it as live editorial type with a typewriter cursor. Pause on punctuation. Don't dump the full response in one block.
5. **Cite the data.** AI cards always end with a footer: `Drawn from 2,847 shots across 17 matches.` The number is the authority.

### Surfaces

| Feature | Where it lives | Component |
|---|---|---|
| Match Recap (post-match generative summary) | Player profile, between hero and stats | `cmpAiInsightCard` |
| Keys to the Match (pre-match, during fortnight) | Live dock expansion + match page | `cmpAiInsightCard` |
| Style-similar players | Player profile, after rivalries | New: `cmpStyleNeighbours` (pgvector cosine sim) |
| Ask the Oracle (free-form Q&A) | Bottom-right pill that opens `<dialog>` | New: `cmpOracle` |

### Style-similar players

The pgvector embedding gives us a "if you like this player, here are 5 stylistically similar." Render as a horizontal strip of `cmpPlayerCard`s with the cosine-similarity score in the corner. Surface the embedding's *reasons* as eyebrow tags ("HEAVY TOPSPIN", "FLAT 1HBH", "BASELINE GRINDER") — these come from the sentence-transformers source text, not invented.

---

## Pages

The full site shape, in order of priority.

### `/` — Roster

Currently solid. Three upgrades:

1. Add the Wimbledon utility bar above the main nav.
2. Add a Paper Shaders mesh-gradient hero behind the title eyebrow + tagline.
3. Adopt view-transition shared photos on player cards → profile pages.
4. Add `content-visibility: auto` to `.fs-card` for the eventual 500-player roster.

### `/players/[slug]` — Player Profile

The 12-block UTS template adapted to our editorial language. Order:

1. **Hero** — full-bleed action photo; oversized serif name; flag, hand, backhand, height inline.
2. **Drop-cap bio** — already exists, keep.
3. **Career stats grid** — already exists, refine numerals to tabular.
4. **Ranking sparkline + miles ledger** — new component, replaces the current ledger hero (or rides on top of it).
5. **Surface splits** — already exists in `cmpCareerLedger`, surface-tinted bars stay.
6. **Trophy Case** — already exists, slam-color tweaks per palette section.
7. **Equipment Bag** — already exists.
8. **Shot Palette + Style** — already exists. Add shot-rose viz when shot data lands.
9. **Notable Matches** — new section (deferred per HANDOFF.md "fine-grain detail on matches"). `cmpMatchCard` renders score + 2-sentence narrative.
10. **Head-to-Head** — new component (`cmpHeadToHead`), shows top 3 rivalries with the two-portrait one-number module.
11. **Where This Is Going (projection)** — already exists.
12. **AI Insight: Match Recap / Keys to the Match** — new card, drives down conversion to "Watch live" if a match is upcoming.
13. **In Their Own Words (quotes)** — already exists.
14. **Style Neighbours** — new pgvector component.
15. **Rivalries (linked)** — already exists.

### `/compare/<a>-vs-<b>` — Versus

The `cmpHeadToHead` module **as the page's hero**, not buried mid-page. Below: surface-by-surface bars, year-by-year mini bars, set-score history, and a Claude-generated 200-word summary in `cmpAiInsightCard`. Designed for shareability — make sure the OG image renders the H2H module via Astro server-rendered SVG.

### `/tournaments/<slug>` — Tournament

Bento hero (AO pattern). Top-of-page draw via `cmpDrawCanvas`. Live ticker pinned. AI-generated "Keys to the Final" if it's a final-day. Surface motif drives the page-level color (`/tournaments/roland-garros` is terracotta-tinted, `/tournaments/wimbledon` is grass-green).

### `/venues` — Venues atlas

MapLibre, custom muted-cream tiles, slam-gold trophy markers for Slam venues, plain court markers elsewhere. Click → `/venues/<slug>`.

### `/venues/<slug>` — Venue profile

Hero photo of the venue. History card. Surface (clay/grass/hard). List of legendary matches played there. Capacity, year built, architect. Tag the venue's "famous calls" — this is where the **honor announcers** idea lives, with linked audio clips.

### `/announcers/<slug>` — Announcer profile

(Deferred to V2.) Same template as player profile, replacing photo with an audio waveform. "Famous calls" as a list of embedded audio players. AI-generated style summary ("Ted Robinson is known for poetic urgency at break point").

### `/about`

Editorial. Drop cap. Pull quote. Statement of intent. Photographs of the four trophies set on dark velvet. The depth-over-speed credo, signed.

---

## Buttons & Controls

### Hierarchy

Three button styles. Hold the line.

| Style | Use | Look |
|---|---|---|
| **Primary** | One per page max — "Watch live", "Compare", "Buy tickets" if/when commerce | Solid `--ink` fill, `--bg` text, 4-6px radius, no pill |
| **Secondary** | Section CTAs — "View all matches", "See full bracket" | Ghost: 1px `--rule` border, `--ink` text, transparent |
| **Tertiary** | Inline links — "Read more →" | Animated underline left-to-right |

```css
.fs-btn {
  display: inline-flex; align-items: center; gap: 0.5rem;
  padding: 0.875rem 1.5rem;
  font: 600 0.875rem/1 var(--sans);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  border: 0; border-radius: 4px;
  background: var(--ink); color: var(--bg);
  transition: background var(--t-base) var(--ease),
              transform var(--t-base) var(--ease),
              box-shadow var(--t-base) var(--ease);
  transform: translateZ(0); /* GPU-promote, only on actively-animated buttons */
}
.fs-btn:hover {
  background: var(--slam-rg);
  transform: translateZ(0) translateY(-2px);
  box-shadow: 0 8px 24px rgba(60, 40, 20, 0.18);
}

.fs-btn--ghost { background: transparent; color: var(--ink); border: 1px solid var(--rule); }
.fs-btn--ghost:hover { background: var(--bg-elevated); border-color: var(--slam-rg); color: var(--slam-rg); }
```

### Magnetic premium button

Reserve for **three places site-wide**: the hero CTA on `/`, the "Compare these players" trigger on player profiles, and the "Watch live" pill on the live dock. Subtle damping (~18% of cursor distance), 250ms ease, disabled on touch devices.

```ts
import { animate } from 'motion';

document.querySelectorAll<HTMLElement>('.fs-btn--magnetic').forEach((btn) => {
  if (!matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  btn.addEventListener('pointermove', (e) => {
    const r = btn.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) * 0.18;
    const y = (e.clientY - (r.top + r.height / 2)) * 0.18;
    animate(btn, { x, y }, { duration: 0.25, easing: [0.2, 0, 0, 1] });
  });
  btn.addEventListener('pointerleave', () => {
    animate(btn, { x: 0, y: 0 }, { duration: 0.4, easing: 'spring' });
  });
});
```

### Filter chips — refinement of `.fs-filter-btn`

The existing tour-filter buttons are correct. Add:
- Surface chip variant (clay/grass/hard) using `--surface-*` tokens
- Decade chip variant ("1970s", "1980s", "Open Era") using `--ink-muted`
- Pressed state with slam-tinted ring

### Segmented control — for stat year filters

Use the new CSS Anchor Positioning to slide the selector. Feature-detect; degrade to `:checked + label` styling.

---

## Quick Search

`Cmd+K` (or `/`) opens a `<dialog>` with Fuse.js powering fuzzy search across:

- Players (name, country, hand, backhand, era)
- Tournaments
- Venues
- Articles (when content lands)

Editorial framing: **"Quick Search"**, not "Command Palette." A small terracotta `↩` icon next to the keyboard hint.

```html
<dialog id="quick-search" class="fs-quicksearch">
  <input type="search" placeholder="Search players, tournaments, venues…" autofocus />
  <ul class="fs-quicksearch__results"></ul>
  <div class="fs-quicksearch__hint">
    <kbd>↑↓</kbd> navigate · <kbd>↵</kbd> open · <kbd>esc</kbd> close
  </div>
</dialog>
```

---

## Accessibility & Performance

These aren't appendices — they're load-bearing. Skipping them violates the depth-over-speed promise.

### Reduced motion

Default to no motion; layer motion behind a query.

```css
.fs-card { transition: none; }
.fs-card:hover { background: var(--bg-elevated); /* no transition */ }

@media (prefers-reduced-motion: no-preference) {
  .fs-card { transition: background var(--t-base) var(--ease); }
}
```

The `* { animation-duration: 0.01ms !important }` blanket nuke is the safety net, not the strategy. Build motion as opt-in from line one.

### Focus

Keyboard focus uses a `--slam-rg` ring, never the browser default.

```css
:focus-visible {
  outline: 2px solid var(--slam-rg);
  outline-offset: 2px;
  border-radius: 2px;
}
```

### Color contrast

Every `--ink` / `--ink-muted` / `--ink-soft` pair against `--bg` / `--bg-elevated` / `--bg-deep` must clear WCAG AA at body size. The current cream palette does; check after any palette tweak.

### Performance budget

| Metric | Budget |
|---|---|
| Total JS on the homepage | < 50 KB (Astro static + Fuse.js + Motion One mini, no shader on first paint) |
| Total CSS | < 30 KB (one bundle, slam-colored utilities tree-shake) |
| Image budget per player profile | < 600 KB (one hero + 5 thumbs, AVIF/WebP) |
| Largest Contentful Paint | < 1.5s on 4G |
| `content-visibility: auto` | required on roster cards once roster > 50 |

### Fonts

EB Garamond is loaded from Google Fonts with `display=swap`. Switch to self-hosted woff2 with a `font-display: optional` policy when the site stabilizes — eliminates the third-party CDN as a render-blocking dependency.

---

## Roadmap

A ranked list of design changes, each rated **easy / medium / hard** by implementation cost.

### V1 — ship in the next sprint

| # | Change | Effort | Why |
|---|---|---|---|
| 1 | Update slam-color tokens to brand-book values (`#b06835`, `#046a38`, `#005eb8`, `#3d5265`) | Easy | One-line palette upgrade, instant "feels official" lift |
| 2 | Add the slam-color utility bar (`cmpUtilityBar`) | Easy | The Wimbledon move; defines the brand at first paint |
| 3 | Add `transition:name` shared elements on player cards → profile pages | Easy | Single biggest premium-feel multiplier — Astro 5 native |
| 4 | `text-wrap: balance` on every heading; `pretty` on body copy | Easy | Free editorial-typography upgrade |
| 5 | `.tabular` utility class + apply to every score, rank, year, prize-money number | Easy | The Wimbledon scoreboard discipline |
| 6 | `prefers-reduced-motion: no-preference` gates on every animation | Easy | Philosophy at the CSS level |
| 7 | Eyebrow + serif H2 + slam-color rule cadence on every section header | Easy | The Roland-Garros rhythm; mostly already there |
| 8 | `content-visibility: auto` on `.fs-card` | Easy | Future-proof for big roster |
| 9 | `cmpHeadToHead` (two-portrait one-number) | Medium | The compare-them-together promise gets a hero |
| 10 | `cmpRankingSparkline` | Medium | The single most reusable data-viz primitive |
| 11 | Court-line SVG + `animation-timeline: view()` draw-in | Medium | Signature gesture |
| 12 | Update `cmpQuotes` to hang the curly quote in the margin | Easy | Magazine cadence |

### V2 — once V1 is stable

| # | Change | Effort | Why |
|---|---|---|---|
| 13 | Paper Shaders mesh-gradient hero on `/` | Medium | The "wow" first-visit moment |
| 14 | `cmpLiveDock` for tournament fortnights | Medium | The tournament heartbeat — gated on live data |
| 15 | `cmpAiInsightCard` powering Match Recap and Keys to the Match | Medium | AI dressed in editorial chrome, US Open lesson |
| 16 | `cmpDrawCanvas` (Bracketry under our skin) | Hard | Tournament pages without it feel incomplete |
| 17 | macOS-style bottom dock for primary nav (`:has()` magnification) | Medium | Identity, no JS |
| 18 | `cmpCompareDrawer` — vs-mode tray with `interpolate-size` | Medium | Compare flow always one click away |
| 19 | `cmpQuickSearch` with `<dialog>` + Fuse.js | Medium | Power-user feature |
| 20 | Magnetic premium buttons (3 spots site-wide) | Easy | Tactile feedback |

### V3 — once data flows from `infotennis`

| # | Change | Effort | Why |
|---|---|---|---|
| 21 | Bounce-density court SVG via D3 hexbin | Hard | The "where balls land in court" promise |
| 22 | Shot rose, serve placement grid, shot-trajectory overlay | Hard | The deep tennis-data UX |
| 23 | `cmpStyleNeighbours` from pgvector | Medium | "If you like X, you'll like Y" |
| 24 | deck.gl shot scatter for the highest-cardinality views | Hard | Only when the data justifies the bundle |
| 25 | `/venues` MapLibre atlas with custom muted-cream tiles | Hard | The "honor the coolest venues" promise |

### V4 — the long horizon

- `/announcers/<slug>` — honor the calls
- Match-by-match `cmpMatchCard` with bezier shot trajectories
- AI Oracle (`Cmd+K` → Q&A mode) that can answer free-form questions across the corpus
- A dark-mode "Night Session" theme switch that swaps cream for `--bg` deep + amplifies `--ball` accents (US Open vibe)

---

## Anti-patterns

Things we explicitly do not do, with reasons.

| Don't | Because |
|---|---|
| **No Three.js** | 150kb+ for a content site. Paper Shaders + OGL cover any 2D shader need at <20kb. Revisit only if a 3D court model becomes a tentpole feature. |
| **No Lenis smooth-scroll** | Native scroll + scroll-driven CSS animations beat it in 2026 and remain accessible. Lenis was a 2022–2024 holdover. |
| **No GSAP as default** | Motion One is leaner, MIT-licensed, modern. GSAP is justified only for MorphSVG (racquet pose) and SplitText. |
| **No custom cursor** | Magnetic buttons are tasteful; magnetic cursors are 2017-portfolio-site signaling. |
| **No more than one full-screen shader per page** | Pick the moment. |
| **No pink/magenta as a primary brand color** | WTA's own 2025 rebrand dropped it. Heritage-purple is the move. |
| **No DIN Condensed** | Over-claimed by ATP. We use EB Garamond display + tabular numerals; we don't need a third sans. |
| **No emojis in editorial copy** | Tone violation. Emojis say "Twitter feed"; we say "club library." |
| **No "Powered by AI" banners** | A small `✦` and a citation line beat any badge. |
| **No drop shadows on chrome** | Hairline rules carry the structure. Shadows are reserved for hover lifts on cards/buttons. |
| **No fully-rounded pills as default control shape** | 4–6px radius reads "printed annual"; 999px reads "consumer app." We are an annual. |
| **No engagement-bait micro-interactions** | Confetti on a slam-tally update? No. The number speaks. |
| **No `* { transition: all }`** | Targets every property; tanks performance. Specify the properties. |
| **No animating `box-shadow blur` or `width/height` for layout** | Layout/paint thrash. Use transform/opacity, or `interpolate-size: allow-keywords` for height-auto. |
| **No "Site of the Day" Awwwards motion theatrics** | Won't ship a horizontal-scroll storytelling page. The site is read top-to-bottom, like a magazine. |

---

## Source Research

The full research that backs every choice in this document:

- `tmp/design-research/roland-garros.md` — the editorial discipline foundation
- `tmp/design-research/wimbledon.md` — heritage palette, tradition-meets-tech, slow motion
- `tmp/design-research/australian-open.md` — bento heroes, live dock, court paint
- `tmp/design-research/us-open.md` — dark mode, AI inline, ticker-as-architecture
- `tmp/design-research/broader-tennis.md` — ATP/WTA, Tennis Channel, Tennis Abstract, UTS, shot-map techniques, surface tokens
- `tmp/design-research/motion-and-gpu.md` — Motion One, Paper Shaders, view transitions, scroll-driven CSS

External references that were load-bearing in the synthesis:

- [AO Brand Playbook — Colour & Typography](https://aobrandplaybook.com.au/colour)
- [Wimbledon trademarked colours (Pantone 349 C / 268 C)](https://ipwatchdog.com/2022/07/10/wimbledon-tennis-trademarked-signature-colors/)
- [Roland-Garros bespoke type by Christophe Badani](https://christophebadani.myportfolio.com/roland-garros-bespoke-fonts)
- [USTA × IBM iX: AI features for the US Open](https://www.ibm.com/case-studies/blog/usta-watsonx)
- [WTA's 2025 rebrand by Nomad — purple + green](https://the-brandidentity.com/project/rallying-the-world-how-nomads-engaging-rebrand-for-the-wta-keeps-eyes-glued-to-the-court)
- [Tennis Abstract — Match Charting Project](https://www.tennisabstract.com/charting/)
- [Ultimate Tennis Statistics — 12-block player profile structure](https://www.ultimatetennisstatistics.com/about)
- [Pentagram on Tennis Magazine (Omnes typeface)](https://www.pentagram.com/work/tennis/story)
- [Paper Shaders showcase](https://shaders.paper.design/)
- [Astro View Transitions docs](https://docs.astro.build/en/guides/view-transitions/)
- [Josh Comeau on Scroll-Driven Animations](https://www.joshwcomeau.com/animation/scroll-driven-animations/)
- [GameSetMap — tennis-as-cartography](http://gamesetmap.com/)

---

## A closing note

The four Slams have spent decades figuring out how a tennis website should feel. Roland-Garros says **a magazine that happens to be a tournament**. Wimbledon says **a club that happens to have a website**. The Australian Open says **a stadium that happens to be live**. The US Open says **a city that never sleeps and never stops playing**.

First Strings is none of those venues. It's the **library** between them. So we take Roland-Garros's editorial restraint as the spine, Wimbledon's reverence as the ceiling, the Australian Open's pulse for tournament fortnights, and the US Open's inline-AI discipline as the data layer. The rest — the surface-tinted bars, the sparkline ranking, the tug-of-war H2H, the venue atlas — is ours.

**The design is the philosophy.** Every choice in this document earns a place by serving depth, not speed. When in doubt, write less, animate less, decorate less. The game is enough.
