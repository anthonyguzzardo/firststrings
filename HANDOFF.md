# First Strings — Agent Handoff

A note from the previous agent to the next. Read CLAUDE.md first for the philosophy and conventions, then this for current state and what's next.

## Update 2026-05-03 — V1 design polish + Tier 2/3 SQL-backed components

Big session. The site went from "Elo chart on one page" to a coherent V1 design system with three SQL-backed visualizations and a real ranking layer. **Postgres is now load-bearing for the player profile** — when Docker is down, the chart, sparkline, H2H module, and live career stats all silently omit (clean fallback), but you'll see the curated content only.

### What landed (in passes; see git log for the diff)

**Design system foundation**
- `styBase.css` rewritten: brand-book slam tokens (`#b06835`/`#046a38`/`#005eb8`/`#3d5265`), full surface palette (`--surface-clay/grass/hard/indoor`), typography scale (`--fs-mega/h1/h2/h3/body/small/eye`), motion tokens (`--ease`, `--t-fast`…`--t-hero`), accent palette (`--ball`, `--live`, `--court-line-mute`), layout containers (`--reading-max`, `--hero-max`). Legacy `--clay`/`--grass` aliased to slam tokens for backward compat.
- `.tabular` utility, `text-wrap: balance` on headings, `pretty` on body, `:focus-visible` slam-rg ring, reduced-motion safety net + per-component `(prefers-reduced-motion: no-preference)` gates.
- `.fs-section__title` now carries a terracotta bottom rule. New `.fs-section__head` for the DESIGN.md vertical eyebrow + serif H2 + slam-color rule cadence.
- `.fs-eyebrow--block` utility — replaced the recurring inline `style="margin-bottom: 0.6rem"` pattern across components.

**New components**
- `cmpUtilityBar.astro` — Wimbledon-style 36px `--slam-rg-deep` strip above the nav; ATP/WTA functional, Compare/Venues marked `is-soon` with disabled-link styling. Live intentionally omitted (no live feed yet; a fake pulse would be engagement bait).
- `cmpCourtLine.astro` — single-stroke SVG divider, 5 tones, scroll-driven `animation-timeline: view()` draw-in gated on `prefers-reduced-motion` + `@supports`. Slotted between hero and bio in terracotta.
- `cmpHeadToHead.astro` — DESIGN.md two-portrait one-number module with surface-tinted gradient bars (`linear-gradient` keyed off `--a-pct`). Refactored to drop its outer section so the page can stack top-3 modules under one shared "Head to Head" header.
- `cmpRankingSparkline.astro` — generic `{year, value}` sparkline with `inverted` prop. Used in two contexts: 700×68 axis-mode trajectory preview on the player profile, 120×28 compact on every roster card.

**View transitions** — `<ClientRouter />` + `transition:name="photo-{slug}|name-{slug}|slams-{slug}"` on cards → matching elements on hero. Card photos morph to profile heros, names lift up.

**SQL data layer**

- `getHeadToHead(slugA, slugB)` — H2H aggregate + last meeting. Filters `external_source_id IN (1,2)` to dodge MCP double-counts. Surface buckets fold INDOOR_HARD/ACRYLIC into Hard, INDOOR_CLAY into Clay.
- `getEloAnnualPeaksBySlug(slugs[])` + `getRankingAnnualBestBySlug(slugs[])` — batch sparkline data. Page logic prefers real ranking; falls back to Elo proxy for players Sackmann's rankings dataset doesn't cover (pre-1973 careers).
- `getCareerStatsBySlug(slug)` — overall + per-surface (hard/clay/grass/carpet) match record. Sourced from `tb_player_career_stats`.
- **`th_player_ranking` ingest**: `npm run ingest:rankings` walks `atp_rankings_*.csv` + `wta_rankings_*.csv` into the table. **5,334,298 rows · 25,975 players · 2,418 weeks · Aug 1973 → Dec 2024.** Sackmann's `*_current.csv` was last updated late 2024 — re-pull the repo to pick up 2025+ ranking weeks.
- **`tb_player_career_stats` refresh**: `npm run refresh:career-stats` truncate-and-rebuilds from `tb_match` (sources 1,2 only). Writes overall + 4 surface slices per player. **Federer overall 1265-280 (matches HANDOFF sanity check exactly).** 15,202 overall + 27,693 surface rows.

### UI integration — what each component now shows on Federer's profile

| Component | Source | Federer values |
|---|---|---|
| Court line | client SVG | terracotta hairline, draws in on scroll |
| Trajectory preview spark (axis mode) | `getRankingAnnualBestBySlug` → Elo fallback | "no. 1 in 2004", inverted Y axis (#1 at top) |
| Career stats grid | curated TS | unchanged |
| Career arc (full Elo chart) | `getPlayerEloTrajectory` | Overall 2420, Hard 2338, Clay 2163, Grass 2068 — methodology footer is now a 3-row dl fact-box (SOURCE / SAMPLE / METHOD) |
| Trophy case | curated TS | unchanged |
| Career Ledger | curated **+ SQL override** | Match record now reads from `tb_player_career_stats` (1,265–280 · 81.9%); surface splits all from SQL with surface-tinted top borders |
| Equipment Bag, Quotes, Projection | curated TS | unchanged |
| Pull-quote curly | new CSS | hangs in the gutter at -0.15rem in `--slam-rg`, EB Garamond 4.5rem |
| Style/Surfaces | curated TS | extracted to `.fs-style-grid` class; surface tags now use `--surface-*` tokens not `--slam-*` |
| **Head to Head** (top 3 rivals) | `getHeadToHead` × 3 in parallel | Federer–Nadal 17–24 (Hard 12–9, Clay 2–14, Grass 3–1), Federer–Djokovic 23–28 |
| Rivalries chip list | curated TS | only renders when no H2H records exist (fallback) |

Roster page: 22 cards now carry a 120×28 sparkline (one batch SQL fetch feeds them all). Jódar omits cleanly — too new for ranking data.

### What's next, sorted by visible payoff

1. **Tier 3 #14 cont. — `tb_player_clutch_metrics` refresh.** Needs `tb_point` data (we have 1.75M MCP-charted points). Powers BLR / break-point save % / tiebreak record on the profile. Clutch tab on the profile would be a meaningful new section.
2. **Tier 4 #15 — `tb_shot` ingest from MCP.** `npm run ingest:mcp -- --shots`. ~10M rows, several minutes. Required before serve-placement roses (`cmpServeRose`), court heatmaps, shot-direction visualizations.
3. **Sackmann `git pull` for 2025+ ranking weeks.** Today the rankings dataset stops at Dec 2024. The current top players (Sinner, Alcaraz, etc.) have arc trajectories that flatline at end of 2024 instead of continuing through 2026.
4. **Player card visual hierarchy refresh.** With the sparkline now carrying real ranking signal (rather than decoration), the card layout could promote it — current rank inline, sparkline larger.
5. **`tb_player_serve_zones` refresh.** Less visible than clutch; defer until shot-level data lands.
6. **MCP/Sackmann match dedupe** (still open from prior handoff).
7. **`/compare/<a>-vs-<b>` page** using `cmpHeadToHead` as the hero (DESIGN.md spec).

### Things to not do

- **Don't add new ingest scripts without a UI need.** The current data layer powers the profile thoroughly; queue for visible features, not data hoarding.
- **Don't reinvent the design language.** The DESIGN.md token system is now load-bearing; new components must read from `--slam-*` / `--surface-*` / `--fs-*` / `--ease` / `--t-*`. Inline styles are an anti-pattern — use existing classes or add new `.fs-*` rules.
- **Don't modify `.fs-section__title` without considering the terracotta rule.** It's the page-wide editorial cadence now; every section reads on it.
- **Don't try to render the H2H module without a section wrapper.** The component is now content-only; the page owns the section/title.

### Local dev reminder

```sh
docker compose up -d         # Postgres + pgvector on 5433
npm run dev                  # Astro on 4321
```

If the dev log is full of `[cmpEloCareerArc] DB unreachable (ECONNREFUSED)`, OrbStack's daemon isn't ready — `open -a OrbStack` and wait ~10s.

---

## Update 2026-05-02 (evening) — First viz shipped, design is now the bottleneck

The data layer is solid (sees previous update for the receipts). The first SQL-backed visualization landed: a server-rendered Elo career-arc chart on the curated player profile page, fed live from `th_player_elo`. **Federer's chart shows peaks at 2420 overall, 2338 hard, 2163 clay, 2068 grass — all sanity-passing.**

That ships the *pattern*. Now there's a much bigger map of what to build, and a single source of truth for it: **`DESIGN.md` at the repo root** is a 1,054-line design manual covering palette, typography, motion, GPU policy, components, page architecture, and a numbered V1→V4 roadmap. The receipts behind every choice live in `tmp/design-research/{roland-garros,wimbledon,australian-open,us-open,broader-tennis,motion-and-gpu}.md`.

**Read DESIGN.md before doing any visual work.** Don't reinvent a palette, a motion token, or a component pattern that's already specified.

### What's been built this session (visual)

- **`cmpEloCareerArc.astro`** — server-rendered SVG line chart (overall + hard/clay/grass). Peak markers, year ticks, Elo gridlines, scoped legend, methodology footnote. Uses design tokens (`--ink`, `--clay`, `--grass`) plus one ad-hoc slate blue (`#3a6da9`) for hard-court — that should graduate to a `--surface-hard` token per DESIGN.md §Palette.
- **`getPlayerEloTrajectory()` + `getPlayerEloPeaks()`** added to `libDb.ts` (under new `@region elo`). The pattern for any future SQL-backed component: dedicated query function in `libDb.ts`, called from the component frontmatter, render server-side.
- **Slot in `[slug].astro`** between Career stats and Trophy Case. The chart only renders when `th_player_elo` has rows — players too new for Sackmann's data (e.g. Jódar) get a clean omit, no broken UI.
- **Env loading discipline** documented in GOTCHAS.md. Astro/Vite uses `import.meta.env`; tsx scripts use `process.env` via `--env-file`. `libDb.ts` reads from both. Replicate this pattern in any new lib that's used by both contexts.

### What's next (the actual priorities now)

The **data layer is over-built relative to what's visible.** Don't queue more ingest work unless a specific visual feature needs it. Follow DESIGN.md's V1 roadmap; here's the practical ordering, sorted by data-dependency:

#### Tier 1 — pure CSS / Astro upgrades (no new data needed)

These ship visible polish across the entire site in a single sprint. From DESIGN.md §Roadmap V1:

1. **Update slam-color tokens** to brand-book values (`#b06835` RG, `#046a38` Wim, `#005eb8` AO, `#3d5265` USO). One-line palette upgrade. Mostly unifies things; my Federer chart's `--clay` will shift slightly.
2. **`cmpUtilityBar.astro`** — Wimbledon-style 36px slam-colored strip above the main nav. Identity-defining at first paint.
3. **View transitions** on player cards → profile pages (Astro 5 native `transition:name`). The single biggest premium-feel multiplier.
4. **`text-wrap: balance`** on every heading; **`pretty`** on body copy. Free editorial-typography upgrade.
5. **`.tabular`** utility class + apply to every score, rank, year, prize-money number. The Wimbledon scoreboard discipline.
6. **`prefers-reduced-motion: no-preference`** gates on every animation. Philosophy at the CSS level.
7. **Eyebrow + serif H2 + slam-color rule cadence** on every section header. Mostly already there; needs unification.
8. **`content-visibility: auto`** on `.fs-card`. Future-proof for big roster.
9. **Court-line SVG + `animation-timeline: view()`** draw-in. Signature gesture.

#### Tier 2 — SQL-backed components using data we already have

10. **`cmpHeadToHead.astro`** — two-portrait, one-number module. Needs a new `getHeadToHead(slug, opponentSlug)` query in `libDb.ts` that aggregates over `tb_match`. We have all 353k matches loaded; building H2H is a single SQL with WHERE on (p1_id, p2_id) IN both orderings.
11. **`cmpRankingSparkline.astro`** — career ranking line. We don't have official rankings ingested yet, but **Elo can stand in as a proxy** (`th_player_elo.elo_overall`) for v1. Swap in real ATP/WTA rankings once ingested.
12. **Refine `cmpEloCareerArc`** — adopt the new `--surface-*` tokens from DESIGN.md, add the methodology footer styling per DESIGN.md "headline + chart + footnote" pattern, consider a moving-average smoothing option.

#### Tier 3 — needs new data, but the data is one cheap script away

13. **Sackmann rankings ingest** → `th_player_ranking`. Same engine pattern as ATP/WTA matches. Powers `cmpRankingSparkline` properly. Cheap.
14. **Refresh aggregates** — populate `tb_player_career_stats`, `tb_player_serve_zones`, `tb_player_clutch_metrics`. Each is a focused `lib*` + `refresh-*.ts` pair. Unlocks: surface splits, ace-rate panels, clutch comparisons.

#### Tier 4 — needs more data work that's worth doing

15. **`tb_shot` ingest from MCP** — `npm run ingest:mcp -- --shots` (flag exists, run hasn't). Expected ~10M rows, several minutes. Required before serve-placement roses (`cmpServeRose`), court heatmaps (`cmpShotHeatmap`), shot-direction visualizations.
16. **MCP/Sackmann match dedupe.** Currently MCP-charted matches exist twice in `tb_match` (sources 1/2 and source 3). Heuristic merge at ingest time (date + slug pair + tournament name fuzzy match) is the right path.

#### Tier 5 — DESIGN.md V2/V3 territory (defer until V1 is stable)

- `cmpLiveDock` (live tournament heartbeat) — needs a live feed
- `cmpAiInsightCard` (Claude-generated match recaps) — needs Claude integration
- `cmpDrawCanvas` (Bracketry-based tournament draws) — needs draw data
- Paper Shaders mesh-gradient hero on `/`
- `cmpQuickSearch` (`Cmd+K` / `/`) with Fuse.js
- Magnetic premium buttons (3 spots site-wide)
- `cmpStyleNeighbours` (pgvector kNN) — needs the embedding pipeline (`py/embed_players.py`)
- `/venues` MapLibre atlas — needs venue ingest from Wikidata
- `/announcers/<slug>` — needs ICDb ingest

### Things to not do

- **Don't add more data without a visual feature asking for it.** The 365k matches and 1.75M points and 371k Elo snapshots are way ahead of what's surfaced.
- **Don't reinvent the palette.** DESIGN.md §Palette is canonical. Slam tokens are scheduled to update from current approximations to brand-book hex.
- **Don't ship GSAP, Three.js, Lenis, custom cursors, or pink/magenta as primary** — DESIGN.md §Anti-patterns enumerates the no's with reasons.
- **Don't write a parallel design doc.** Add to DESIGN.md or to a research file in `tmp/design-research/`.

### The 30-second mental model for the next session

> The site is the philosophy: depth over speed, editorial restraint, surface-tinted everything, EB Garamond display + tabular numerals. Read DESIGN.md. The data layer is solid (Sackmann + MCP + Elo). The Federer Elo chart proved the SSR-SVG pattern. Now ship the V1 design roadmap component-by-component. Most of V1 needs zero new data — just CSS, Astro, and view transitions.

---

## Update 2026-05-02 (later same day) — SQL/Sackmann/MCP layer is now live

The "match-level data" thread (previously sketched as a TS-types + research-JSON expansion — see "Then: 'fine-grain detail on matches'" further down) **was rerouted into a Postgres-backed analytics layer** after a research pass surfaced Jeff Sackmann's open datasets, the Match Charting Project (10.4M shot-level rows), Wikidata SPARQL for pre-Open-era and venues, ICDb for commentators, and `glad94/infotennis` for Court Vision. The TS-curated roster stays as-is for editorial content; the SQL layer takes everything data-dense.

### What's been built this session

- **Stack locked in:** Astro + TS strict + Node 20 + Postgres 17 + pgvector + postgres.js + zod + D3/Plot/MapLibre + a tiny Python footprint (sentence-transformers + forked infotennis). No Rust. See updated CLAUDE.md.
- **Local Postgres:** `docker-compose.yml` runs `pgvector/pgvector:pg17` on host port **5433** (5432 is in use by a system Postgres — see GOTCHAS.md). Volume `first_strings_pgdata` persists across recreates.
- **Schema:** `db/sql/dbFirstStrings_Init.sql` (extension + schema + search_path) and `db/sql/dbFirstStrings_Tables.sql` (35 tables, all with header comments per conventions). Loaded automatically by Docker initdb on first start.
  - 17 enum tables (te_*) — fully seeded, including MCP shot-token mappings
  - 5 dictionary tables (td_country, td_player, td_tournament, td_venue, td_commentator)
  - 3 raw fact tables (tb_match, tb_point, tb_shot)
  - 2 matrix tables (tm_player_external_id bridges curated TS slugs to the SQL identity; tm_match_commentator)
  - 2 history tables (th_player_ranking, th_player_elo)
  - 6 cached aggregate tables (career stats, serve zones, shot distribution, clutch metrics, style embedding [vector(384)], h2h)
  - HNSW index on the embedding column for "plays like" kNN queries
- **`src/lib/libDb.ts`** scaffolded — `postgres.js` client wired to `FIRSTSTRINGS_PG_URL` with `search_path = first_strings, public`. `pingDb()` exported. `@region` markers reserved for upcoming domain helpers.
- **GOTCHAS.md** created — documents the 5433 port choice and the curated-TS-vs-SQL co-equal philosophy.
- **`.env.example`** committed; `.env` gitignored as before.

### What's next (priority order)

Priorities 1-5 below have **landed** in this same session. See the "Landed this session" subsection that follows.

1. ~~**Bootstrap td_player from the curated TS roster.**~~ Done (23 curated players, all with MANUAL xref).
2. ~~**First ingest script: Sackmann ATP.**~~ Done (65,941 players, 194,996 matches, 4,188 tournaments).
3. ~~**WTA mirror.**~~ Done (69,758 players, 158,076 matches, 5,843 tournaments).
4. ~~**`libMcpShotParser.ts`** + MCP point ingest~~ — Done. 11k charted matches, 1.75M points, point-level flags loaded (rally length, ace, double fault, point outcome, serve direction). **Shot-level (`tb_shot`) deferred — see "Open follow-ups" below.**
5. ~~**Elo trajectory** (`libDerivedElo.ts` + `refresh-elo.ts`)~~ — Done. 371k daily Elo snapshots across 15k players. Sanity check passed (Navratilova/Graf/Evert atop all-time, Nadal/Borg on clay, Connors/McEnroe/Borg/Federer on grass).
6. **First viz:** career-arc chart on the curated player profile page using D3 + Observable Plot, fed from `th_player_elo`. Slots into the existing profile page next to the equipment/trophy sections.
7. **Sackmann rankings ingest** — `atp_rankings_*.csv` and `wta_rankings_*.csv` → `th_player_ranking`. Straightforward; same engine pattern as players/matches. Powers the rankings layer of career-arc charts (separate track from Elo).
8. **Refresh aggregates** — populate `tb_player_career_stats`, `tb_player_serve_zones`, `tb_player_clutch_metrics` from raw matches + points. Each is a dedicated `lib*` + `refresh-*.ts` pair.

Open follow-ups (not next-up but should be remembered):
- **`tb_shot` ingest from MCP** — pass `--shots` to `npm run ingest:mcp` (the flag exists; the work hasn't been run). Expected ~10M rows, several minutes. Required before serve-placement roses, court heatmaps, shot-direction visualizations.
- **MCP/Sackmann match dedupe.** Right now an MCP-charted match exists in `tb_match` twice — once with `external_source_id = SACKMANN_ATP` (1) and once with `SACKMANN_MCP` (3). Queries that count matches double-count. Two paths: (a) heuristic merge at ingest time (date + slug pair + tournament name fuzzy match), or (b) a `tb_match_canonical` view/table. (a) is simpler and recommended.
- **Live-match feed** — still adds infra cost the project hasn't justified yet.
- **Infotennis scraper** (Antwerp 2021+ Court Vision) — Python sliver, high value, but the historical core comes first.
- **Style embedding pipeline** (`py/embed_players.py`) — needs aggregates to feed it; queue for after step 8.

### Landed this session

| Surface                           | Count    | Notes                                                                            |
| --------------------------------- | -------- | -------------------------------------------------------------------------------- |
| `td_player` (curated)             | 23       | All with `is_curated = TRUE` and a MANUAL `tm_player_external_id` row.           |
| `td_player` (ATP from Sackmann)   | 65,941   | Slug-collisions disambiguated with `-atp-<sackmann_id>` suffix.                  |
| `td_player` (WTA from Sackmann)   | 69,758   | Same pattern with `-wta-<sackmann_id>` suffix.                                   |
| `td_tournament` (ATP)             | 4,188    | One row per series (Wimbledon, Madrid Open, etc.) — `tournament_edition_year` lives on `tb_match`. |
| `td_tournament` (WTA)             | 5,843    | Same.                                                                            |
| `tb_match` (ATP)                  | 194,996  | Tour-level singles 1968-2024.                                                    |
| `tb_match` (WTA)                  | 158,076  | Tour-level singles 1968-2024. ~16 within-file dupes silently dropped.            |
| `tm_player_external_id` (SACKMANN_ATP) | 65,941 | One per ATP player.                                                              |
| `tm_player_external_id` (SACKMANN_WTA) | ~70k   | One per WTA player.                                                              |
| `tm_player_external_id` (WIKIDATA)| ~7.5k    | Free bonus from `wikidata_id` column in Sackmann player files.                   |
| Curated players linked to Sackmann | 23 / 23 | All 23 hand-tended profiles now have full match history queryable in SQL.        |
| `tb_match` (MCP-charted)          | 10,999   | Source `SACKMANN_MCP`; `has_mcp_chart = TRUE`. 7,193 men's + 3,806 women's. **Currently duplicates the matching ATP/WTA rows** — see open follow-up. |
| `tb_point` (from MCP)             | 1,751,575 | All charted points 1968-present, parsed via `libMcpShotParser`. Carries rally_length, point_outcome_id, serve_direction_id, is_break_point, is_tiebreak. |
| Aces (`point_outcome_id = 5`)     | 117,201   | Across all charted matches.                                                      |
| Double faults                     | 64,048    | Same.                                                                            |
| `th_player_elo` rows              | 371,112   | One per (player, day) covering 706k player-match Elo updates across 15,202 players. Overall + hard / clay / grass / carpet tracks. |

Spot-checks all green:
- Federer career: **1265-280, 83 distinct events, 1998-2021** — matches public records to within ~1% (Sackmann includes some Davis Cup / qualifying).
- Federer MCP ace rate: **9.6%** across 689 charted matches and 58k service points — matches his real career ace rate (~9-10%).
- Peak Elo all-time: Navratilova 2719, Graf 2659, Evert 2624 — exactly the consensus all-time triumvirate.
- Peak clay Elo (men): Borg 2390, Nadal 2386, Lendl 2290, Vilas 2267, Djokovic 2250 — tracks the canonical clay-court ladder.
- Peak grass Elo (men): Connors 2131, McEnroe 2106, Borg 2085, Federer 2068, Djokovic 2066 — Federer 4th on grass is a plausible artifact of opponent-strength weighting on the older champions; not a bug.

### How to reproduce

```sh
docker compose up -d            # Postgres + pgvector on host port 5433
npm run db:psql                 # interactive psql into the container
npm run bootstrap               # 23 curated players → SQL
npm run ingest:atp              # ATP players + matches (clones to tmp/data/sackmann/atp first run)
npm run ingest:wta              # WTA players + matches (clones to tmp/data/sackmann/wta first run)
npm run ingest:mcp              # MCP charted matches + points (clones to tmp/data/sackmann/mcp first run)
npm run ingest:mcp -- --shots   # adds tb_shot rows (~10M, slower); deferred from this session
npm run refresh:elo             # recompute th_player_elo from scratch
npm run db:reset                # nuke the volume and start clean if you need to
```

Every ingest + refresh is fully idempotent.

End-to-end timing on this machine (cold cache, after the initial git clones):
- bootstrap: instant
- ATP ingest: ~10 s (including pull check)
- WTA ingest: ~10 s
- MCP point ingest: ~30 s
- Elo refresh: ~5 s

### Architectural notes worth knowing

- **The shared engine** lives in `src/lib/libSackmannIngest.ts`; the per-tour scripts are 25-line wrappers. To add a third Sackmann-style dataset (Challenger? ITF? doubles?) just call `ingestSackmann({...})` with a different `tourId` / `sourceId` / file pattern.
- **`libIngestUtils.ts`** holds the slugify, csv-date parser, `ensureRepo` helper, and the IOC/handedness/surface/level/round code → te_id mappings. Anything that's tomorrow's "ingest needs to know how to map X" goes here, not in the engine.
- **Slug collision handling.** ATP "John Smith" and WTA "John Smith" each get their own slug regardless because curated players already own the clean slug; Sackmann players that collide append a tour-suffixed sackmann_id. Curated profiles are protected — the engine's INSERT … ON CONFLICT (slug) DO NOTHING leaves the curated row alone, then `tm_player_external_id` adds the Sackmann pointer.
- **Dedupe on both unique constraints.** `tm_player_external_id` has UNIQUE (player_id, source_id) AND UNIQUE (source_id, external_id). Sackmann data occasionally reuses a Wikidata Q-number across player rows, so the engine pre-dedupes on both keys (helper `dedupeMappings` in libSackmannIngest.ts). Same for matches: a few WTA year files have within-file duplicate (tourney_id, match_num) pairs — engine de-dupes per-batch.
- **No `is_best_of_five` on WTA matches.** Detection is heuristic (`best_of='5'` from Sackmann); WTA never plays best-of-5, so all WTA rows get `FALSE`.
- **MCP shot-string parser is best-effort.** `libMcpShotParser.ts` handles the cases enumerated in `tennisabstract.com/blog/2015/09/23/the-match-charting-project-quick-start-guide/`. Real MCP strings include some characters/orderings the public docs don't cover (e.g. `!`, certain modifier combinations); the parser logs these into `unknown_chars` and otherwise carries on. Roughly 3.4% of charted points have `rally_length IS NULL` because the parser couldn't extract any shots — not a fatal data loss; the point still exists, it just lacks rally detail. Re-parsing later will recover those once the grammar is refined.
- **Elo K-factor schedule** — 64 for the first 5 matches, 40 for matches 5-30, then 32 onwards. Walkovers and retirements are counted (consistent with Sackmann's `tennis_misc` reference).

### Sources to keep handy

- `JeffSackmann/tennis_atp`, `tennis_wta`, `tennis_MatchChartingProject`, `tennis_slam_pointbypoint`, `tennis_pointbypoint`
- `Tennismylife/TML-Database` (Connors-era backfill)
- `glad94/infotennis` (Court Vision scraper, fork target)
- Wikidata SPARQL endpoint at `query.wikidata.org/sparql`
- Internet Commentator Database `tennis.icdb.tv`
- Tennis Abstract Point-by-Point Stats Glossary (BLR, DR+, EI, leverage definitions)

### What carried over from the prior delegation

- **Thread 1 (schedule weekly stats refresh as a remote agent)** is still open and orthogonal to this work — see "Next task: weekly refresh" below for the runbook. That refresh operates on the curated TS roster, not the SQL layer.
- **Thread 2 (match-level data via TS types + research JSON)** is **superseded** by the SQL ingest pipeline above. Don't extend `Match` / `HeadToHead` TS types — read from `tb_match` and `tb_h2h` instead.

---

## For the next agent (delegated 2026-05-02 — original)

> Note: thread 2 below has been superseded by the Update section above. Thread 1 is still active.

User is delegating these two threads:

1. **Schedule the weekly refresh as a recurring remote agent.** Use the `/schedule` skill. Recommended cadence: Mondays around 09:00 ET (after both ATP and WTA Monday ranking updates have published). The agent should execute the "Next task: weekly refresh" runbook below verbatim and open a PR only if anything changed. First fire should land Monday 2026-05-04 — Madrid 2026 men's final is Sun 5/4 (Sinner vs Zverev), so that run will likely add one title for Sinner. Confirm with the user before creating the routine; the schedule skill notes user-triggered + billed.
2. **(Superseded — see Update above.) Start the match-level data work** described under "Then: 'fine-grain detail on matches'" below. This is the user's stated next priority once the refresh is on autopilot. Begin with `Match` + `HeadToHead` type design (permissive, per the project pattern) and spawn rivalry-focused research sub-agents.

## Where things stand (as of 2026-05-02)

**Roster:** 23 players — full data integrated for all of them.

**Last weekly refresh (2026-05-02):** All 10 active players verified via WebSearch. No stat or title changes — Madrid 2026 finals fall on May 3 (WTA: Andreeva–Kostyuk, neither in roster) and May 4 (ATP: Sinner–Zverev). Next Monday's run will pick up Madrid for Sinner if he wins. `--force` flag added to `integrate-titles.mjs` for in-place title replacement; round-trip is lossless and the full pipeline is a no-op against current state.

**What's wired into each player profile** (`src/pages/players/[slug].astro`):
1. Hero (placeholder photo, name, tour/era, born/from/height/plays/backhand/status)
2. Drop-cap bio
3. Career stats grid (Slams, weeks #1, YE #1, career-high, turned pro, status)
4. Trophy Case (`cmpTrophyCase`) — Slam cards color-coded by tournament; tier-grouped chips for Olympics gold / Year-end Finals / 1000s / 500s / 250s
5. Career Ledger (`cmpCareerLedger`) — prize money hero, W-L + win%, surface splits, **estimated miles traveled** with methodology footnote
6. Equipment Bag (`cmpEquipmentBag`) — racquet (weight/head size/string pattern), strings (mains/crosses/tensions), shoes, apparel sponsor, other-sponsors chip list, accessories sub-list
7. Shot Palette + Style/Surfaces (existing)
8. Signature match callout (existing)
9. Where This Is Going (`cmpProjection`) — slam ceiling range + years remaining + confidence (active players only, 10 of them)
10. In Their Own Words (`cmpQuotes`) — pull-quote callouts with attribution + year
11. Rivalries (linked when the rival is in the roster)

**Data file:** `src/lib/libPlayersData.ts` (~13,400 lines, all 23 players). Types in `src/lib/libPlayers.ts` are intentionally permissive (index signatures, union types, most fields optional) because agent-sourced data is messy — see memory `feedback_permissive_types_for_agent_data.md` for the full reasoning.

**Source-of-truth research files** in `tmp/research/`:
- `<slug>.json` — title list per player
- `<slug>.equipment.json` — equipment + ledger payload per player
- `<slug>.bonus.json` — accessories + quotes + projection per player
- `city-coords.json` — city → [lat, lon] dictionary + player home bases (for miles calc)

These are the canonical inputs. The TS data file is generated FROM these. Re-running the integration scripts always wins over manual edits.

## Tooling left in `tmp/`

All scripts are idempotent — safe to re-run. They skip players that already have the relevant section integrated.

| Script | Purpose |
|---|---|
| `tmp/extract-titles-to-json.mjs` | Reads `libPlayersData.ts`, writes each player's `titles: [...]` array out to `tmp/research/<slug>.json`. Bootstraps JSON files for any player whose titles were inlined manually (e.g. Federer originally). |
| `tmp/integrate-titles.mjs` | Reads `tmp/research/<slug>.json`, inserts `titles: [...]` into the matching player block. Skips players that already have titles. Pass `--force` (all slugs) or `--force=<slug,slug,...>` to replace existing `titles: [...]` blocks in place. |
| `tmp/integrate-equipment.mjs` | Reads `tmp/research/<slug>.equipment.json`, inserts `equipment: {...}` and `ledger: {...}`. Skips if equipment present. |
| `tmp/integrate-bonus.mjs` | Reads `tmp/research/<slug>.bonus.json`, inserts `accessories`, `quotes`, `projection`. Each section inserted independently if missing. |
| `tmp/compute-miles.mjs` | Reads `tmp/research/city-coords.json` + each player's titles JSON, computes round-trip haversine miles from home base × titles, writes `estimatedMilesTraveled` + `milesTraveledNote` into the ledger. |

**Type check after any data update:**
```sh
npx tsc --noEmit --target es2022 --module esnext --moduleResolution bundler \
  --skipLibCheck --strict src/lib/libPlayers.ts src/lib/libPlayersData.ts
```

## Key project memory

In `~/.claude/projects/-Users-anthonyguzzardo-Developer-Personal-GitHub-FirstStrings/memory/`:

- `feedback_npm_run_dev_root.md` — User runs `npm run dev` from repo root. Don't move package.json.
- `feedback_player_stats_verify.md` — Never write active-player Slam counts / rankings / weeks-#1 from training-cutoff memory. Always WebSearch (ATP/WTA/Wikipedia) or ask. The first seed pass had Sinner at 2 Slams (actually 4) and Alcaraz at 4 (actually 7) — user noticed immediately.
- `feedback_permissive_types_for_agent_data.md` — Use index signatures + optional fields when the data is sub-agent-sourced.
- `project_first_strings_vision.md` — Depth over speed. Lean into nuance.

## Next task: weekly refresh

Routine that runs every Monday morning to keep active-player data current as the season progresses. Tooling is in place — the runbook below is what the scheduled agent should execute end-to-end. Steps:

1. **For each active player** (Sinner, Alcaraz, Djokovic, Sabalenka, Rybakina, Gauff, Świątek, Fonseca, Fils, Jódar):
   a. Fetch current career stats from Wikipedia + ATP/WTA tour pages: Slam count, weeks at #1 (career total), year-end #1 finishes, career-high ranking, career prize money. Compare to what's in `libPlayersData.ts`. If anything differs, update.
   b. Fetch current title list (Wikipedia "career statistics" page is canonical). Overwrite `tmp/research/<slug>.json` with a fresh JSON array. `integrate-titles.mjs --force=<slug,slug,...>` will replace existing `titles: [...]` blocks in place — preserves field order, no diff if titles are unchanged.

2. **Re-run the integration pipeline:**
   ```sh
   node tmp/extract-titles-to-json.mjs                                  # snapshot current state to JSON
   node tmp/integrate-titles.mjs --force=jannik-sinner,carlos-alcaraz,novak-djokovic,aryna-sabalenka,elena-rybakina,coco-gauff,iga-swiatek,joao-fonseca,arthur-fils,rafael-jodar
   node tmp/integrate-equipment.mjs                                      # no-op unless new equipment files dropped
   node tmp/integrate-bonus.mjs                                          # no-op unless new bonus files dropped
   node tmp/compute-miles.mjs                                            # recompute miles with any new titles
   ```

3. **Type-check.** If new TS errors appear (agents add fields the schema doesn't know about), loosen the relevant types in `src/lib/libPlayers.ts` — match the existing pattern (`[extra: string]: unknown` index signatures + optional fields). Don't reject the agent data, accept it.

4. **Open a PR** titled `Weekly stats refresh — YYYY-MM-DD` with a summary:
   - Which players had stat changes (before/after)
   - Which players gained new titles (year + tournament)
   - Any unusual data discrepancies the agent encountered

If absolutely nothing changed, skip the PR.

## Then: "fine-grain detail on matches"

User's stated next priority — and one of the two threads the next agent is taking on (see top of file). Directions to consider:

- **Match-by-match data per player**: head-to-head records (e.g. Federer vs. Nadal 16–24, with year-by-year breakdown), hard/clay/grass split per opponent, surface specifics
- **Famous matches deep dive**: a `Match` type with first-class entries for Wimbledon 2008 F (Federer–Nadal), AO 2012 F (Djokovic–Nadal), AO 2017 F (Federer–Nadal), AO 2026 F (Alcaraz–Djokovic), etc. — each with set scores, key turning points, narrative bio
- **Per-tournament W-L** for each player (e.g. Federer at Wimbledon 105–14)
- **Wave 4 stats** (deferred from earlier): altitude performance (Madrid title rate vs other Masters), heat performance, 5-set / 3-set records, tiebreak record. These need match-level data, not titles-level.
- **Live match feed**: ATP/WTA have live scoring APIs. Could add a "now playing" section.

If the next agent picks this up, recommended approach:
- Define `Match` and `HeadToHead` types (permissive, with index signatures)
- Spawn one focused research agent per high-value rivalry (Federer-Nadal, Federer-Djokovic, Nadal-Djokovic, Sinner-Alcaraz) and per legendary match
- New section on the profile page: "Notable Matches" (cards) + "Head to Head" (mini-table)
- Defer the live feed unless the user explicitly asks — adds infra complexity (cron, caching, rate limits)

## Useful patterns to keep using

- **File-write agent dispatch**: when spawning a research sub-agent, instruct it to write its output to `tmp/research/<slug>.<kind>.json` and reply with only a brief summary. This keeps the conversation context lean even when researching 23 players in parallel.
- **Idempotent integration scripts**: every script that mutates `libPlayersData.ts` must be safe to re-run. Use the "skip if section already present" pattern.
- **Permissive types**: when integrating any new agent-sourced data dimension, write the type as required-fields-only (just enough for the UI), then `[extra: string]: unknown` for everything else. Use `string | { ... }` unions for things like sponsors. Allow `null` where agents return null.
- **Component naming**: file `cmpFoo.astro`, but the import alias must be PascalCase (`CmpFoo`) because Astro treats lowercase template tags as native HTML elements. There's a working pattern in every page already.

## Current data caveats / known soft spots

- **Approximate stats** flagged via `dataConfidence: 'approximate'` were all flipped to `'verified'` after the first round of WebSearch verification. Active players will drift; the weekly refresh exists to catch this.
- **Miles traveled** is titles-only (uncovered cities are skipped, ~5–10% of titles for some players). The `milesTraveledNote` on each ledger explains the methodology to the reader.
- **Rafael Jódar** is the thinnest profile (1 ATP title as of May 2026, born Sep 2006). Quotes array is empty — the agent honestly couldn't find verifiable English-language quotes.
- **Rod Laver's titles** are intentionally underspecified — his pre-Open Era / pro tour 1963–67 stats are disputed across sources (200 / 184 / ~150). What's there represents ~91 well-documented titles.
- **Wave 4 (performance ratings)** wasn't done. Needs match-level data we don't have yet.

## Dev workflow

```sh
npm run dev    # from repo root, port 4321
```

User always runs from root — don't suggest `cd` into a subdirectory. If you ever need to expose a workspace split, proxy `npm run dev` from the root `package.json` to the right workspace.
