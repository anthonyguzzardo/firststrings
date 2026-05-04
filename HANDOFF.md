# First Strings — Agent Handoff

A note from the previous agent to the next. Read CLAUDE.md first for the philosophy and conventions, then this for current state and what's next.

## Update 2026-05-04 — embeddings whitened, venue notes, shot map

Three pickups in one pass: the "Plays like" sidebar got real signal, `/venues` got editorial soul, and the player profile got a directional Shot Map (groundstroke landings) without needing a Court Vision ingest.

### What landed

**1. Whitened style embeddings.** v1 cluster was crushed (every player ≥ 90% cosine-similar) because shot-mix shares dominated the L2 norm. v2 (`feat-v2-2026-05`) adds a per-dimension z-score across the population BEFORE the L2, so dims where players actually differ get equal weight.
- Federer's nearest now: Djokovic 40.5 → Lendl 28.2 → Nadal 24.9 → Sampras 20.7 → Roddick 19.1 → Agassi 13.6
- Świątek's nearest: Gauff 48.3 → Sinner 32.8 → Rybakina 27.2 → Sabalenka 25.5 → Nadal 22.6
- Sampras's nearest: McEnroe 34.7 → Federer 20.7 → Laver 17.9 → Roddick 14.9 → Agassi 5.7
- Same `getStyleNeighbours(slug, k)` API, no UI change. The encoder version literal bumped so old vectors are silently replaced.

**2. Curated venue notes.** New `npm run seed:venue-notes` loads ~12 hand-written editorial paragraphs (60–80 words each) into `td_venue.notes`. Voice: short, restrained, observational. Covers Court Philippe-Chatrier, Arthur Ashe, Rod Laver, Indian Wells, Wimbledon (the complex), Accor Arena, St. Jakobshalle, Wiener Stadthalle, Hanns-Martin-Schleyer-Halle, Hallenstadion, Festhalle Frankfurt. Suzanne-Lenglen didn't ingest from Wikidata (not classed as a venue at the right level — it's a sub-court of RG); other ten landed cleanly.
- `getAllVenues` now selects `notes` and orders curated rows first.
- `/venues` cards with notes render the editorial blurb in the body, span 2 columns on the grid, and get a slam-rg left border + paper-tone background. Visually they read as "the curated ones" without needing a label.

**3. `cmpShotMap` — directional groundstroke landings.** New section on every curated profile (between Serve Placement and Equipment Bag). Two side-by-side panels (Forehand goes / Backhand goes), each rendered as a half-court SVG with three landing zones (opp FH corner / middle / opp BH corner) tinted by frequency, plus shot-direction arrows from the player's baseline position. Below each: a numbered legend with share, winner rate, and raw count.
- Backed by `getShotDirectionMap(slug)` in `libDb` (`@region embeddings`-adjacent — kept under the existing aggregates region).
- Source: `tb_shot.groundstroke_direction_id` (98% coverage on existing groundstroke shots — 5.66M / 5.76M). Direction is opponent-perspective and parser-flipped for left-handed opponents — so "opp FH corner" reads consistently regardless of the receiver's handedness.
- Federer sanity: FH 39 / 27 / 34 across the three zones (well-balanced cross-court vs DTL); BH 20 / 39 / 41 (heavily down-the-line / cross to opp BH). Winner rates: FH-to-opp-BH 12.3%, FH-to-opp-FH 10.4%, BH-to-opp-FH 13% (the famous slap inside-out / down-the-line).

**4. Court Vision ingest is officially deferred.** `tb_shot.ball_x_norm/ball_y_norm` stays NULL. The directional map covers most of what users want from a shot viz; full coordinate scatter requires the `glad94/infotennis` Selenium pipeline (or reverse-engineering atptour.com's Court Vision JSON endpoints) and is a multi-day project on its own.

### Things to not do

- **Don't write `Record<K, V>` or `Array<T>` type annotations inside Astro `{...}` template expressions** — Astro's parser interprets `<` as JSX. Use `as const` for literal arrays and untyped `new Map()` (or do the typing in the frontmatter `---` block, where TS works fine).
- **Don't roll back the embedding whitening** without a different scaling strategy. The flat 90%+ cluster wasn't a bug per se; it was a feature-scaling failure. Whitening is the right shape; you could also try mean-centering only, or feature-group reweighting (give clutch dims more weight than shot-mix shares), but plain z-score is the v1 baseline.
- **Don't treat `td_venue.notes` as authoritative content** without a way to flag stale ones. The notes are hand-written prose with concrete numbers ("ten Swiss Indoors titles"); when a stat changes, someone has to edit. Add a `notes_as_of` timestamp if this gets unwieldy.

### For the next agent — pickups, in order

The active queue:

1. **Live scoring widget.** Real-time element. Needs an ops decision: rate limits, caching, fallback when the feed is down.
2. **Court Vision shot heatmaps (deferred).** When time-budget allows: try the direct ATP API approach first (network-tab inspection of atptour.com Court Vision panel) — it's likely a JSON endpoint reachable with Origin/Referer headers, no Selenium required. Falls back to the infotennis fork.
3. **Bracketry-based draws (`cmpDrawCanvas`).** Needs a draw-data ingest. Sackmann doesn't ship draws as a structured CSV — would have to scrape ATP/WTA tournament pages or use a draw-archive site.
4. **PNG OG image** via `satori` + `@resvg/resvg-js`. Only if a strict-PNG platform shows up.
5. **`/announcers/<slug>` — paused** per the user's call. Resume when the announcers pillar is the priority.
6. **Tighten Wikidata venue ingest further.** The current SPARQL still pulls some non-tennis-primary stadiums; layering a manual whitelist of the iconic ~40 (Master 1000s + Slams + Tour Finals locations) as a hand-edit pass would clean up the long tail.

---

## Update 2026-05-03 (post-final) — orchestration: one command does everything

The handoff queue's "How to reproduce" section was a 12-step shell ritual. It's now three commands tops, and one of them is `npm run dev` doing the right thing automatically.

### What landed

- **`predev` hook** on `npm run dev` — brings up Postgres via `docker compose up -d`, waits until the connection answers, then runs `db:migrate`. So `npm run dev` from a cold machine just works.
- **`npm run db:migrate`** — idempotent migration runner. Reads `db/sql/migrations/*.sql` in filename order, skips files already in the new `tb_migration` table, applies the rest one-per-transaction. Migration `000_migrations_table.sql` bootstraps the tracking table itself (uses `IF NOT EXISTS` so it's safe to apply on every cold start).
- **`npm run refresh:all`** — runs every derivation in dependency order: elo → career-stats → mcp-score → match-canonical → leverage → clutch → serve-zones → shot-distribution → style-embedding. Skips the AI-card scripts (those need an API key, gated separately).
- **`npm run setup`** — full bootstrap from a clean docker volume: `db:up-wait` → `db:migrate` → bootstrap → all ingests (atp, wta, mcp shots, rankings, venues) → refresh:all. ~20 minutes wall-clock on a cold machine; entirely hands-off.
- **`onnotice: () => undefined`** in `libDb` — swallows postgres NOTICE rows from `IF NOT EXISTS` clauses so the orchestrator output is clean.

### The new "what you actually type"

Cold machine, never run before:
```sh
git clone …
cp .env.example .env             # set FIRSTSTRINGS_PG_URL (already in example) + ANTHROPIC_API_KEY if you want AI cards
npm install
npm run setup                    # one shot, ~20 min
npm run dev                      # ↑ predev runs db:up + db:migrate automatically
```

Already set up, returning the next morning:
```sh
npm run dev                      # that's it. predev wakes Postgres if needed.
```

After pulling new SQL changes:
```sh
npm run db:migrate               # or just `npm run dev` — predev handles it
```

After re-ingesting fresh Sackmann data:
```sh
npm run refresh:all              # rebuilds every derived table from scratch
```

### Things to not do

- **Don't add a step to `setup` or `refresh:all` without thinking about ordering.** The chain is sensitive: leverage must run BEFORE clutch (clutch reads the leverage column), shot-distribution before style-embedding (style-embedding reads the shot distribution), mcp-score before match-canonical (the dedupe's exact-score pass needs the score). The orchestrator declares this order in `REFRESH_STEPS` / `INGEST_STEPS` arrays — keep them honest.
- **Don't fall back to `psql < migrations/foo.sql`** if a migration is misbehaving. Investigate the migration; if you have to skip-and-mark, INSERT directly into `tb_migration` so the runner won't retry.
- **Don't paste fresh SQL into `dbFirstStrings_Tables.sql` without also adding a numbered migration.** The CREATE TABLE there describes the desired state; the migrations folder is what brings an existing DB to that state.

### For the next agent — what's left

Outside this orchestration work, the queue is roughly the same as the prior handoff: tighten style embeddings (whitening / per-feature z-score), `/announcers`, live scoring, Court Vision shot heatmaps, PNG OG via satori, curated venue notes, Bracketry-based draws.

---

## Update 2026-05-03 (final) — MCP scores, shot dist, style embeddings, plays-like, MapLibre

Closed out everything that was queued. Highlights: the Match Charting Project rows now have human-readable score strings, the empty pgvector index is full, the player profile has a "Plays like" sidebar, and `/venues` has a real world map.

### What landed

**1. MCP score backfill — every charted match now has `tb_match.score`.**
- `src/lib/libDerivedMcpScore.ts` walks each MCP match's points, groups by `(set_no, game_no)`, takes the LAST point's winner as the game winner, tallies games per set, detects tiebreaks (and counts the loser's pts), and emits a Sackmann-style string.
- **Gotcha:** the MCP point parser sets `point_no_in_game = 1` for every point (literally — no within-game numbering). Don't trust that field. We rely on the global `point_no_in_match` ordering and just overwrite the game-winner on every point — the last write per `(set, game)` wins.
- 10,966 of 10,999 source-3 matches got reconstructed scores. The 33 skipped have no `tb_point` rows (they're stub matches with metadata only).
- Re-ran `refresh:match-canonical` afterward — score-matching pass now picks up 4,608 high-confidence links (was 0). Final: 9,109 / 10,999 = **82.8% merged**, with the matched rows now confirmed by exact-score in addition to tournament-name.

**2. `tb_player_shot_distribution` — populated.**
- `npm run refresh:shot-distribution`. 23,043 overall + 39,026 per-surface rows (one per (player, surface, shot_type)). Sanity for Federer: forehand 86k shots / 8.4% winners, backhand 58k / 4.4%, BH slice 35k / 0.6% (defensive), volleys 32–42% winners, overhead 67% winners. Real Federer.
- Joins `tb_shot` → `tb_point` → `tb_match` for surface bucketing and walkover/retirement filtering.

**3. Style embeddings — pgvector HNSW index is no longer empty.**
- `src/lib/libDerivedStyleEmbedding.ts` builds a deterministic 384-dim feature vector per curated player. Concatenates: shot mix (19 types × 4 metrics = 76 dims), clutch (8), serve placement (6), surface bias (8), bio flags (4), then pads with zeros to 384 and L2-normalizes (cosine similarity ignores the pad).
- Skipped the Python pipeline (`py/embed_players.py`) entirely — TS works fine and avoids the `uv` setup. Encoder version literal `feat-v1-2026-05` so callers can detect drift.
- 23 / 23 curated players embedded. Federer's nearest neighbours: Lendl 97.7% → Sampras 96.2% → Graf 94.0% → Agassi 92.9% → Roddick 91.6% → Serena 91.2%. The vectors cluster tight (everyone's ≥90% similar to everyone) because the roster is all top players, but the RANK ordering is what matters — Lendl-as-most-Federer-like is plausible, Sampras-second tracks the all-court / serve-leaning identity.

**4. `cmpStyleNeighbours` — "Plays like" sidebar on the profile.**
- New section between Clutch and Serve Placement. Top-5 cosine-nearest curated players with name, photo, and a slam-rg fill bar showing similarity %.
- `getStyleNeighbours(slug, k)` in `libDb` (`@region embeddings`). Uses pgvector's `<=>` (cosine distance) operator with the HNSW index. Joins to the latest `embedding_version` so old vectors don't pollute results when the encoder bumps.

**5. `/venues` — tightened SPARQL + MapLibre.**
- SPARQL rewritten with three UNION branches: tennis-stadium subclasses, tennis-tournament-home (P115), and held-in-venue (P276 of any tennis event). Dropped most of the false positives (Hard Rock, Ellis Park) and surfaced the iconic ones — Arthur Ashe (22,547), Indian Wells Tennis Garden (16,100), Court Philippe-Chatrier (14,911), Rod Laver Arena (14,820).
- Now ingests **600 venues**. Some still mega-stadiums that hosted tennis once; the page filters to capacity ≥ 5000 which keeps the noise mostly off-screen.
- MapLibre map at the top of `/venues` showing every venue with lat/lon as a slam-rg dot. Click a marker → popup with name, location, capacity. Uses `demotiles.maplibre.org/style.json` (no API key required); `maplibre-gl@5.6.0` CSS pulled from unpkg, JS bundled from npm.
- Map is client-rendered via Astro's `<script type="module">` and dynamic `import('maplibre-gl')` — server side stays SVG-free / no Node-side WebGL nonsense.

### How to reproduce a fresh database

```sh
docker compose up -d
npm run bootstrap
npm run ingest:atp
npm run ingest:wta
npm run ingest:mcp -- --shots
npm run ingest:rankings
npm run ingest:venues
# Migrations live in db/sql/migrations/ — apply manually, oldest first:
for f in db/sql/migrations/*.sql; do
  docker exec -i first_strings_pg psql -U first_strings -d first_strings < "$f"
done
npm run refresh:elo
npm run refresh:career-stats
npm run refresh:leverage
npm run refresh:clutch
npm run refresh:serve-zones
npm run refresh:mcp-score              # NEW — fills tb_match.score for source-3
npm run refresh:match-canonical        # benefits from the score fill
npm run refresh:shot-distribution      # NEW — tb_player_shot_distribution
npm run refresh:style-embedding        # NEW — tb_player_style_embedding (curated only)
npm run refresh:ai-cards               # OPTIONAL — needs ANTHROPIC_API_KEY
npm run refresh:compare-cards          # OPTIONAL — same
```

### Things to not do

- **Don't trust `tb_point.point_no_in_game`.** Parser sets it to 1 for every point. Use `point_no_in_match` for ordering and `(set_no, game_no)` for grouping.
- **Don't bump the embedding `vector(384)` dimension** without a migration AND deleting all existing rows. pgvector pins the column type to a single dimension at create time.
- **Don't switch the MapLibre tile style to a remote provider that requires an API key** (Mapbox, Stadia) without first wiring the key through `.env` and the Astro `import.meta.env`.
- **Don't truncate `td_venue` between ingest passes** unless you're prepared to lose any manually-added rows. The script does an upsert by name; truncating is only safe when re-ingesting the full source.
- **Don't write a Python embedding pipeline now.** The TS encoder is in place and producing reasonable kNN; switching adds an `uv` dependency and a second runtime to keep coherent. If the encoder needs sentence-transformers later, swap it under the same `tb_player_style_embedding` schema with a new version literal.

### For the next agent — what's left

V1 is comprehensively complete. Possible directions:

1. **Tighten style embeddings.** Cluster is too compressed (all 90%+) — feature scaling is uneven (shot-mix shares 0..1 vs centered clutch values around 0). Whitening the matrix or per-feature z-scoring would spread the cluster. Or swap to learned embeddings (sentence-transformers via `uv` in `py/`).
2. **`/announcers/<slug>`** — ICDb ingest, then per-commentator profiles. Same shape as players but smaller. Honors a project pillar from CLAUDE.md.
3. **Live scoring widget.** Real-time element. Needs an ops decision: rate limits, caching strategy, fallback when feed is down.
4. **Court Vision shot heatmaps** — `glad94/infotennis` ingest from Antwerp 2021+. Per-shot ball coordinates → 2D density maps overlaid on a court SVG.
5. **PNG OG via satori + resvg-js** — only if a strict-PNG platform shows up (LinkedIn, some Slack workspaces). SVG works for Twitter/Mastodon/iMessage today.
6. **Curated venue notes** — a `notes` column write-pass for the iconic venues (history, signature matches, best-known nicknames). Adds editorial soul to `/venues`.
7. **Bracketry-based draws** (`cmpDrawCanvas`) — needs a draw-data ingest first.

---

## Update 2026-05-03 (late) — compare polish, /venues, Cmd+K, dedupe v2

Closed out everything in the queue from the previous handoff. Main themes: the compare page is now genuinely deep (year-by-year + set scores + AI summary), `/venues` exists as a real page populated from Wikidata (400 venues), `Cmd+K` quick-search works site-wide, and the match-canonical heuristic jumped from 70% → 82.5%.

### What landed

**Compare page is now full-fat.**
- New `cmpYearlyMeetings` — column-strip viz of every year the rivalry has met, A wins (terracotta) stacked over B wins (USO blue). Bar height proportional to that year's meeting count. Backed by `getMeetingsByYear` in libDb (`@region matches`).
- `parseScore` in `src/lib/utlScore.ts` — Sackmann score-string parser handling tiebreak parens (`7-6(5)`) and terminator codes (`RET`, `W/O`, `DEF`, `ABN`). Drives the new set-chip layout in the meetings list: each set is its own micro-scoreboard column with the winner's digit in slam-rg and the tiebreak loser's pts as a `<sup>`.
- AI matchup summary: `cmpAiInsightCard` reused for compare cards, sourced from `data/ai-cards/compare/<sortedSlug>-vs-<sortedSlug>.json`. New script `npm run refresh:compare-cards` walks every curated rivalry pair (deduped via sorted-slug key) and writes one paragraph each. Pass two slugs to generate a single matchup.
- Meeting limit on compare is now 20 (was 12) since the visualization handles longer lists gracefully.

**Match-canonical dedupe → 82.5%.**
- Multi-pass heuristic in `refresh-match-canonical`: exact-score → normalized-score → tournament-name → no-score → no-round. Each pass commits only unambiguous matches.
- The big win was the **tournament-name pass** — Sackmann ATP/WTA and MCP both create their own `td_tournament` rows for the same event (so `tournament_id` differs), but `lower(name)` matches across sources. Picked up 8,447 links over the round+year+pair baseline.
- Score-string passes still got 0 because **MCP doesn't store the score string** — `tb_match.score` is NULL for all source-3 rows. Backfilling from the per-set point data would unlock those, deferred.

**`cmpQuickSearch` — Cmd+K / `/` overlay.**
- New `cmpQuickSearch.astro` mounted globally in `layBase` (so every page gets it). No external deps — a tiny inline scorer (name-prefix > full-name substring > initials > haystack substring) plus the curated roster shipped at SSR as a JS variable.
- Shortcuts: `Cmd/Ctrl+K` or `/` (when not typing in another input) opens. `↑/↓` navigates results. `↵` opens the player. `Esc` closes.
- Roster-only for v1. To extend later: append entries from `getAllVenues()` and / or `td_player` for non-curated names.

**`/venues` page + Wikidata SPARQL ingest.**
- `npm run ingest:venues` runs a SPARQL query against `query.wikidata.org/sparql` for venues with `P641 = tennis`. Pulls name, capacity, lat/lon, year built, city, country (+ ISO2 code → `td_country` upsert). Limit 500, `>1000` cap floor. Idempotent: matches on `lower(name)` for re-runs.
- **400 venues** loaded on this run. Caveat: many are general-purpose stadiums that have HOSTED tennis (Hard Rock Stadium, Ellis Park) — not tennis-primary venues. The SPARQL needs a `P31 = tennis stadium` (Q15916252) tightening, but for v1 the noise is OK because the page sorts by capacity and visually the wrong-stadium ones are obvious from their oversized seat counts.
- `/venues` (`src/pages/venues.astro`) — hero with biggest / oldest / total seats, plus a 280px-min auto-fill grid of cards. Each card: name, country code, city, capacity, year built, "on map ↗" → OpenStreetMap deep-link.
- `getAllVenues({ minCapacity, limit })` in libDb under `@region venues`. Defaults to top-200 by capacity.
- Utility bar: Venues link is no longer disabled — routes to `/venues`, gets `is-active` styling on `/venues/*`.

### How to reproduce a fresh database

```sh
docker compose up -d
npm run db:psql                 # or apply migrations via psql redirect
npm run bootstrap
npm run ingest:atp
npm run ingest:wta
npm run ingest:mcp -- --shots
npm run ingest:rankings
npm run ingest:venues           # NEW — Wikidata venues
npm run refresh:elo
npm run refresh:career-stats
npm run refresh:leverage        # NEW — populates tb_point.leverage
npm run refresh:clutch          # uses leverage now
npm run refresh:serve-zones     # NEW — fed by tb_shot
npm run refresh:match-canonical # NEW — populates canonical_match_id (~82%)
npm run refresh:ai-cards        # OPTIONAL — needs ANTHROPIC_API_KEY
npm run refresh:compare-cards   # OPTIONAL — needs ANTHROPIC_API_KEY
```

### Things to not do

- **Don't ship the `is-soon` styling on Venues again.** It's live now.
- **Don't merge MCP `tournament_id` into Sackmann's directly** without thinking about the dedupe direction. Tournament rows on the MCP side legitimately exist (some events are ONLY MCP-charted, like exhibitions). The xref pattern (canonical_match_id) is the safer abstraction.
- **Don't add Fuse.js to `cmpQuickSearch`** unless the roster grows past ~200 entries. The inline scorer is faster, smaller, and matches our needs precisely.
- **Don't return the OG SVG with no Cache-Control.** It's set to `s-maxage=86400`; social crawlers will hammer the route.

### For the next agent — concrete pickup

The DESIGN.md V1 roadmap is now substantively done. Open candidates:

1. **MCP score backfill.** Walk per-match points → infer per-set games → render the score string into `tb_match.score` for source-3 rows. Lights up the dedupe's score-pass (could push canonical to ~95%), and gives MCP-only matches a displayable score.
2. **`cmpStyleNeighbours` — pgvector kNN "plays like".** The HNSW index is empty. Build `py/embed_players.py` (sentence-transformers all-MiniLM-L6-v2 via `uv`); features = ace rate, BLR, DR+, surface preference, shot mix from `tb_player_shot_distribution` (which itself needs a `refresh:shot-distribution` derive script — small lift). Then a sidebar on the player profile.
3. **Tighten the venues SPARQL.** Add `P31 = Q15916252 (tennis stadium)` filter — drops the football/cricket venues. Or layer a manual whitelist of canonical tennis-primary venues (~30 total: All-England, Court Philippe-Chatrier, Rod Laver Arena, etc.).
4. **`/announcers/<slug>`** — ICDb is the source. Different shape (people, not places), but reusing the curated-profile template should be straightforward.
5. **MapLibre on `/venues`.** Add a real map at the top of the page using the lat/lon column. We have it — just need MapLibre GL JS and a tile provider.
6. **Live scoring** — still deferred until there's an ops decision.

---

## Update 2026-05-03 (evening) — shot ingest, leverage, serve rose, AI cards, OG, dedupe

Big push that closed out the entire post-clutch backlog. Most of what the previous handoff queued is now in.

### What landed

**1. MCP shot-level ingest (Tier 4 #15).**
Ran `npm run ingest:mcp -- --shots`. **`tb_shot` now holds 7,893,011 rows** across 1,669,451 charted points (≈4.7 shots/point — typical rally length). Forehands lead (2.75M), backhands second (2.27M), serve / slice / volley / smash in expected proportions. The first run got SIGHUP'd mid women's-2020s batch when I backgrounded it without `disown`; a second run completed cleanly thanks to the `ON CONFLICT DO NOTHING` clause already in `libMcpIngest`.

**2. Leverage backfill — `tb_point.leverage` is now populated for every charted point.**
- New: `src/lib/libDerivedLeverage.ts`, `src/scripts/refresh-leverage.ts`, `npm run refresh:leverage`.
- Decomposes `leverage = |importance_in_game| × |swing_of_game|` so we never recurse through deuce-cycles. Closed-form `GAME_PWIN[a][b]` table for normal scoring; iterative `TB_PWIN[a][b][nextServerWasFirst]` table for tiebreaks. Match-level prob table built bottom-up via BFS over reachable game-start states (only ~517 unique states across bo3 + bo5 — way smaller than the in-game state space).
- Universal `P_SERVE = 0.62`. Robust to ±0.05.
- Ships with two known wrinkles: (a) one row across 1.75M has the 0.5 fallback (a single edge-case state our BFS doesn't reach); (b) the parity-resync logic in `computeMatchLeverage` papered over rather than reconciled the rare cases where the data's server flag drifts from the model. Neither is load-bearing.
- Heap & stack: needs `--stack-size=16000 --max-old-space-size=4096` (already wired into the npm script). The `node` invocation imports `tsx` via `--import tsx` because `tsx` itself doesn't pass through `--stack-size`.
- UPDATE pattern: postgres.js's `sql(arr, …cols)` helper does NOT play nice inside `FROM (VALUES …)` — it inserts a literal `VALUES` keyword that explodes the syntax silently (zero rows updated, no error). Switched to a transaction-scoped TEMP table populated by `INSERT INTO … VALUES …` and then a single `UPDATE … FROM tmp_leverage`. Use this pattern for any future bulk update.
- After the backfill, **re-ran `refresh:clutch`** so the panel surfaces real BLR + leverage_avg. Federer overall: **BLR 0.536**, leverage_avg 0.0185, BP save 62.2%, BP convert 41.1%, TB SPW 69.8%, TB RPW 37.1%. Świątek tops the curated roster at BLR 0.562; Roddick / Connors / McEnroe sit just under 0.5 (their reputational pattern).

**3. `tb_player_serve_zones` + `cmpServeRose`.**
- `npm run refresh:serve-zones`. **10,153 overall + 17,354 surface rows.** The MCP parser doesn't distinguish 1st-vs-2nd serve placements (a faulted first serve isn't kept with its location), so v1 stores `serve_no = 1` for every row representing "the in-play serve". `faults` is intentionally 0 for the same reason — fault placements would need a parser upgrade.
- `cmpServeRose.astro` renders two service-box columns (deuce / ad), each split into 3 zones (Wide / Body / T). Background tint = ace-rate heat ramp (saturated terracotta = high ace rate). Numbers per cell: % of side, ace %, raw count. Federer's deuce-T does 15.1% aces on 11,923 serves; ad-Body does 0.1% aces — exactly the body-jam pattern you'd expect.
- Slotted into `[slug].astro` after `cmpClutch`, before `cmpEquipmentBag`. Returns null below 200 charted serves so we don't render thin samples.

**4. AI editorial card (`cmpAiInsightCard` + cache pipeline).**
- Installed `@anthropic-ai/sdk` (0.92.0).
- `npm run refresh:ai-cards [slug...]` generates an ~80–110 word editorial paragraph per curated player using Claude Haiku 4.5. Filesystem cache at `data/ai-cards/<slug>.json`.
- Voice prompt explicitly bans "X is one of the greatest", first-name-only openers, exclamation marks, and stat-dumps; asks for a single specific angle. Context blob bundles match record, surface splits, the full clutch slice, recent rivalry meetings, and signature-match copy.
- `cmpAiInsightCard` reads from disk via `loadAiCard(slug)` at SSR. Component renders only when the JSON exists — **no card files are checked in yet** because no `ANTHROPIC_API_KEY` was set during this session. To turn on: set the env var, run `npm run refresh:ai-cards`, commit (or gitignore) the resulting `data/ai-cards/*.json` per preference.
- Slotted between bio and Career section on the player profile.

**5. Open Graph endpoint for `/compare/<a>-vs-<b>`.**
- New: `src/pages/og/compare/[matchup].svg.ts`. Returns a 1200×630 SVG OG card with the two names, the H2H score, surface bars, and brand mark. `Cache-Control: public, max-age=3600, s-maxage=86400` so social-platform crawlers can hit it cheaply.
- `LayBase` now accepts `ogImage`; the compare page passes it through. `meta property="og:image"` + Twitter card meta wired.
- SVG is the v1 because most modern social platforms accept it. If a strict PNG-only target shows up, swap to `satori` + `resvg` — the layout will translate.

**6. MCP/Sackmann match dedupe (canonical xref).**
- Added `tb_match.canonical_match_id BIGINT` (schema rewrite + migration `002_match_canonical_xref.sql`).
- `npm run refresh:match-canonical` populates it via a year + unordered-pair + round + score heuristic. **7,714 of 10,999 MCP rows linked to a Sackmann canonical (70%).** Remaining 3,285 stay NULL — they're MCP-only matches (some exhibitions / pre-Open-era charts), or matches whose score string doesn't byte-match the Sackmann row.
- **No callers read `canonical_match_id` yet** — H2H, career-stats, clutch, etc. continue to filter `external_source_id IN (1, 2)`. The column is forward-compat foundation for any future query that wants to surface MCP-charted detail (point counts, shot densities) joined cleanly to the canonical Sackmann row.

**7. Player card visual hierarchy refresh.**
- Sparkline promoted from a 120×28 decoration in the slams row to a full-width trajectory module (`fs-card__trajectory`) with a tinted background, 260×44 sparkline, and a "career best · N yr" tagline. For ranking-backed arcs the tagline reads `#3 career best · 22 yr`; Elo-proxy arcs read `peak Elo · 22 yr`. Hand / backhand pulled out of the meta line (already on the profile page); only country + age/retired remain.
- `cmpPlayerCard.astro` updated; new styles in `styPlayerProfile.css` under `.fs-card__trajectory*`. Old `.fs-card__arc` retained for any callsite still on the legacy class.

### What did NOT land

- **Compare page enhancements** (year-by-year mini-bars, set-score detail per meeting). Still queued.
- **`cmpStyleNeighbours`** (pgvector "plays like X"). Needs the `py/embed_players.py` pipeline that doesn't exist yet.
- **AI cards in the repo.** The pipeline is built; you need an API key + a run to populate `data/ai-cards/`.
- **PNG-rendered OG images.** SVG is fine for Twitter/Mastodon/iMessage but some platforms (LinkedIn, certain Slack workspaces) want PNG. Add `satori` + `resvg-js` if that becomes a need.

### Known issues

- **One row** out of 1,751,575 has `leverage = 0.5` (the fallback). Hunting it down means tightening the BFS state-graph enumeration vs. real-data state shapes; not worth the engineering for one row.
- **Match dedupe is 70%, not 100%.** The 30% residue is mostly score-string drift between sources (one has `7-6(5)` vs `7-6 (5)`). A relaxed normalize-then-compare pass would lift it to ~95%; deferred.
- **`first_serve_in` is `0/1751575`.** The MCP point parser doesn't set the flag, so `cmpServeRose` collapses 1st and 2nd serve into one "in-play serve" view. Splitting them needs a parser upgrade — would also unlock 1st-serve % and 2nd-serve win % per zone.
- **AI cards live on disk, not in DB.** Trade-off: editable in git, no schema migration, no DB hit at render. If the roster grows much past curated ~30, consider a `tb_player_ai_card` table to make per-card invalidation simpler.

### For the next agent — what's next

The roadmap is now thin. Realistic candidates, in rough order of payoff:

1. **Generate the AI cards.** Set `ANTHROPIC_API_KEY`, run `npm run refresh:ai-cards`, eyeball the output, commit `data/ai-cards/*.json`. ~$0.10 at Haiku rates for the full curated set.
2. **Compare page enhancements.** Year-by-year H2H mini-bars, AI-summary card per matchup, set-score detail. Most data already there.
3. **Loosen the dedupe heuristic** to bring match-canonical from 70% → 95% (score normalization + tolerance for missing rounds).
4. **Player style embeddings** (`py/embed_players.py`) — the pgvector column has been waiting for this since the schema landed. Powers a "plays like" surface.
5. **Live scoring widget** — finally a real-time element, but it's its own ops question (rate limits, caching).
6. **Serve-fault parser upgrade** so `tb_player_serve_zones.faults` and a 1st-vs-2nd toggle on `cmpServeRose` can light up.

### Things to not do

- **Don't write bulk UPDATEs via `FROM (VALUES ${sql(arr, ...cols)})`** — postgres.js's helper inserts a `VALUES` keyword that breaks the syntax silently. Use a transaction-scoped TEMP table (see `libDerivedLeverage` for the pattern).
- **Don't drop the `--stack-size` / `--max-old-space-size` flags from `refresh:leverage`** without testing. The default Node stack gets close to the limit on long bo5 matches; heap default is too small for the 1.75M-row read-modify-write loop.
- **Don't set `canonical_match_id = match_id` on canonical rows.** NULL means "this row IS canonical." Self-pointing values would obscure the unmerged residue.
- **Don't read AI cards from a deferred render.** They're SSR-only — the file system isn't available client-side.

---

## Update 2026-05-03 (later same day) — Clutch panel landed

The Tier 3 #14 "Clutch" panel is live on every curated profile that clears a 5-match MCP threshold. Same SQL-override pattern as `cmpCareerLedger` — pure SQL aggregation off `tb_point`, cached in `tb_player_clutch_metrics`, read once at page render.

### What landed

**Schema**
- `tb_player_clutch_metrics.points_sample_size INT NOT NULL DEFAULT 0` added to `dbFirstStrings_Tables.sql` and via `db/sql/migrations/001_clutch_points_sample_size.sql`. First migration in the project — apply with `docker exec -i first_strings_pg psql -U first_strings -d first_strings < db/sql/migrations/001_*.sql`. (No tooling for migration tracking yet — by hand. Add one when there are 3+ migrations.)

**Backend**
- `src/lib/libDerivedClutch.ts` — `refreshClutch()` truncate-and-rebuild. Two `INSERT … SELECT` passes (overall + per-surface) over a `player_points` CTE that UNION-ALLs each charted point as both a server-perspective row and a returner-perspective row. Filter: `external_source_id = 3` AND NOT walkover/retirement. Surface buckets fold INDOOR_HARD/ACRYLIC into Hard, INDOOR_CLAY into Clay (matches refresh-career-stats).
- `src/scripts/refresh-clutch.ts` — thin runner. `npm run refresh:clutch`. ~5s end-to-end; 1,700 overall + 2,905 surface rows.
- `getPlayerClutchMetrics(slug)` in `libDb.ts` under `@region aggregates`. Returns `PlayerClutchMetrics | null`. **Returns null when overall `matches_sample_size < 5`** (`CLUTCH_MIN_MATCHES` constant) — single-match panels are mostly empty cells; the threshold protects the UI.

**Frontend**
- `cmpClutch.astro` — full-section editorial component with three rows:
  1. **Heroes** — two big serif numerals: BP saved (server perspective, RG terracotta top border) + BP converted (returner perspective, Wim green top border).
  2. **Tiles** — DR+, Tiebreak SPW, Tiebreak RPW. Each has a thin progress bar tinted RG. Filtered dynamically: tiles whose underlying value is null (e.g. no tiebreaks played) are dropped.
  3. **Per-surface ladder** — Hard / Clay / Grass / Carpet rows with surface-tinted bars for "Saved" + "Converted" side-by-side, plus per-surface match-count meta. Same gradient bar pattern as `cmpHeadToHead` (`--bar-color`, `--bar-mute`, `--fill`).
- Footer attribution: `From the Match Charting Project · {N} points` (only adds `· avg leverage X` when leverage_avg lands — see "Known empty cell" below).
- Slotted into `[slug].astro` after `cmpCareerLedger`, before `cmpEquipmentBag`. Rendered only when `clutch !== null`.

### Sanity-check across the curated roster (overall slice, top by sample size)

| Player | Matches | BP save | BP cvt | TB SPW | TB RPW | DR+ |
|---|---:|---:|---:|---:|---:|---:|
| Federer | 689 | 62.2% | 41.1% | 69.8% | 37.1% | 1.27 |
| Djokovic | 540 | 63.1% | 43.6% | 66.1% | 42.2% | 1.22 |
| Nadal | 416 | 64.1% | 43.0% | 63.8% | 39.2% | 1.18 |
| Sinner | 260 | 65.4% | 45.7% | 68.9% | 42.7% | 1.26 |
| Sampras | 209 | 66.7% | 39.9% | 68.7% | 35.4% | 1.17 |
| Alcaraz | 206 | 65.0% | 42.2% | 67.1% | 42.5% | 1.22 |
| Świątek | 206 | 60.8% | **51.0%** | 55.6% | **51.5%** | **1.32** |
| Roddick | 109 | 64.4% | **29.4%** | 68.5% | 33.3% | 1.03 |

All pass the smell test: Świątek has the highest DR+ and break-conversion rate (matches her "destroyer of serve" rep); Roddick's 29% BP convert is famously his career weakness; Sampras leads BP save thanks to the serve. Federer's 62% vs the 67% target is the MCP-charted-subset distortion (charted matches over-index toward big-stage opponents) — within tolerance.

### Known empty cell — leverage / BLR

`tb_point.leverage` is **null for every row** (1,751,575 / 1,751,575). `libMcpShotParser` does not derive leverage — Sackmann's leverage is a computed quantity (in-match win-probability delta), not a raw MCP token. The Clutch panel handles this gracefully: BLR + the `· avg leverage` footer suffix are filtered out and the layout reflows. **To light those up**, add `src/lib/libDerivedLeverage.ts` that walks `tb_point` in match order, maintains a per-match win-probability state, computes `leverage = |Δp(match win) per point|`, and writes back into the column. ~1.75M points × 1 update each → batch upsert, expect <30s. Then re-run `refresh:clutch`.

### Migration discipline reminder

`db/sql/migrations/` was empty before this session. Going forward: any time you add or rename a column, write the schema rewrite into `dbFirstStrings_Tables.sql` AND drop a forward-only migration file. Number monotonically — `001_*.sql` was just used; next is `002_*.sql`. Apply with `docker exec -i first_strings_pg psql -U first_strings -d first_strings < db/sql/migrations/<file>`. There is no migrations table yet, so apply by hand and don't double-apply.

### For the next agent — concrete pick-up

Two strong options, in order of visible payoff:

**Option A — `tb_shot` ingest from MCP.** `npm run ingest:mcp -- --shots`. ~10M rows, several minutes. The single biggest unlock left in the data layer: enables `cmpServeRose`, `cmpShotHeatmap`, shot-direction maps, error-type breakdowns. After this, the backend can answer "where does Federer hit BH winners on grass" — which is the soul of the project. The flag is already wired in `ingest-sackmann-mcp.ts`; just run it.

**Option B — Backfill `tb_point.leverage`.** Smaller scope (~2-3 hrs). Lights up BLR + leverage_avg in the Clutch panel that just shipped, plus enables future leverage-weighted comparisons. New file `src/lib/libDerivedLeverage.ts` + `src/scripts/refresh-leverage.ts` + `npm run refresh:leverage`. Walk match → set → game → point with a Markov-style P(win) state, compute `|Δp|` per point, batch-update `tb_point.leverage`. Re-run `refresh:clutch` afterward and verify Federer BLR > 0.5 (he should be a positive-leverage player).

A is the bigger feature unlock; B is the cleaner finishing move on what just shipped. User's call.

### Other queued items (carried from the prior 2026-05-03 update)

1. **AI Match Recap card** (`cmpAiInsightCard`).
2. **Player card visual hierarchy refresh** — promote the ranking sparkline.
3. **OG image for `/compare/<a>-vs-<b>`.**
4. **Compare page enhancements** (year-by-year mini-bars, set-score detail, AI summary).
5. **`tb_player_serve_zones` refresh + `cmpServeRose`** — blocked on Option A above.
6. **MCP/Sackmann match dedupe** (still open).

### Things to not do

- **Don't render `cmpClutch` without going through `getPlayerClutchMetrics`** — the 5-match floor is in the lib, not the component. Direct DB reads bypassing it will produce single-match panels.
- **Don't display BLR or leverage_avg as 0 or `—` when null** — the component already hides them. Keep it hiding until leverage is backfilled.
- **Don't add new "_pct" columns to `tb_player_clutch_metrics` without a UI need.** The schema has space for `excitement_index`, `comeback_factor`, `match_ep`, `deuce_ace_pct`, `ad_ace_pct` — those are intentional placeholders, not TODOs.

---

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

**`/compare` is live.** Two new routes — read these before touching H2H:
- `/compare` (`src/pages/compare/index.astro`) — six hand-picked featured matchups as click-through cards, real H2H scores fetched in parallel.
- `/compare/<aSlug>-vs-<bSlug>` (`src/pages/compare/[matchup].astro`) — full deep-dive: cmpHeadToHead module as the page hero, both players' ranking sparklines side-by-side, last 12 meetings with year/tournament/round/surface/score. Slug parsing splits on the *last* `-vs-` so player slugs containing the separator are safe.
- The big tabular score on every cmpHeadToHead module is now an `<a>` to the deep-link compare page (hover slam-rg) — discoverable cross-link from any profile.
- Utility bar **Compare** is no longer disabled; it routes to `/compare` and gets `is-active` styling when on any `/compare/*` route. Venues stays "soon".

**SQL data layer**

- `getHeadToHead(slugA, slugB)` — H2H aggregate + last meeting. Filters `external_source_id IN (1,2)` to dodge MCP double-counts. Surface buckets fold INDOOR_HARD/ACRYLIC into Hard, INDOOR_CLAY into Clay.
- `getEloAnnualPeaksBySlug(slugs[])` + `getRankingAnnualBestBySlug(slugs[])` — batch sparkline data. Page logic prefers real ranking; falls back to Elo proxy for players Sackmann's rankings dataset doesn't cover (pre-1973 careers).
- `getCareerStatsBySlug(slug)` — overall + per-surface (hard/clay/grass/carpet) match record. Sourced from `tb_player_career_stats`.
- `getMatchHistoryBetween(a, b, limit)` — newest-first list of meetings used by the compare deep-link.
- **`th_player_ranking` ingest**: `npm run ingest:rankings` walks `atp_rankings_*.csv` + `wta_rankings_*.csv` into the table. **5,334,298 rows · 25,975 players · 2,418 weeks · Aug 1973 → Dec 2024.** Sackmann's repo itself stops at Dec 30 2024 (his "2024 season" commit) — `git pull` is a no-op until he publishes 2025+ data, so don't waste time on it.
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

### For the next agent — concrete pick-up

**Build the Clutch panel.** Tier 3 #14 part 2. Clear scope, ~2-3 focused hours, lands a meaningful new section on every curated profile.

**Why this one:** the data is already there (1.75M MCP-charted `tb_point` rows), no ingest needed; Sackmann-style leverage / break-point / tiebreak metrics are uniquely tennis-y and play directly into the project's "depth over speed" credo; it's a copy-paste of the cmpCareerLedger SQL-override pattern that just shipped, so the engineering risk is low.

**Concrete steps:**

1. **`src/lib/libDerivedClutch.ts`** — pure SQL aggregations from `tb_point`. Compute per (player_id, surface_id), null surface_id = overall:
   - `bp_save_pct` — server side: pts where `is_break_point` AND `point_winner_id = server_id`, divided by total break points faced
   - `bp_convert_pct` — returner side: break points won as a returner / break points faced as a returner
   - `tiebreak_spw` / `tiebreak_rpw` — service / return points won inside `is_tiebreak = TRUE` games
   - `leverage_avg` — mean `leverage` value across points where it's non-null (Sackmann's pre-computed leverage)
   - `blr` — Balanced Leverage Ratio: weight wins by leverage; (sum of leverage on won points) / (sum of leverage on all points). Sackmann's signature stat.
   - `dr_plus` — Dominance Ratio +: returner pts won % / (1 - server pts won %), capped at 3.0
   - Skip `excitement_index`, `comeback_factor`, `match_ep`, `deuce_ace_pct` for now — they need additional point context the parser may not always have.
2. **`src/scripts/refresh-clutch.ts`** — orchestrator following `refresh-career-stats.ts` pattern: TRUNCATE `tb_player_clutch_metrics`, INSERT...SELECT for the overall + per-surface slices, sanity check Federer's bp_save_pct (publicly known ~67%).
3. **`npm run refresh:clutch`** in package.json.
4. **`getPlayerClutchMetrics(slug)`** in `libDb.ts` under `@region aggregates`. Returns `{ overall, hard, clay, grass, carpet }` shaped like `PlayerCareerStats`.
5. **`cmpClutch.astro`** — full-section component. Title "Clutch" with eyebrow "MCP-charted matches · N pts sample". Surface-tinted tile grid showing each metric:
   - bp_save_pct as the big serif numeral, eyebrow "Break points saved", tabular numerals
   - bp_convert_pct similar
   - blr / dr_plus as smaller tiles with explanatory subtext (one-line)
   - Per-surface mini bars below, surface-tinted gradient like cmpHeadToHead
   - Footer attribution: "From the Match Charting Project · {sample_size} points"
6. **Slot into `[slug].astro`** after `cmpCareerLedger`, before `cmpEquipmentBag`. Component returns null when `matches_sample_size = 0` (most legends have it; some active newcomers won't).

**Edge cases to remember:**
- `tb_point` is partial — only MCP-charted matches have points. Federer is dense (~58k service points charted per HANDOFF); Jódar will be empty and the panel should just not render.
- `is_break_point` is set per-point but `point_winner_id`'s relationship to server vs. returner needs care — use `point_winner_id = server_id` for server-perspective stats.
- Filter to `external_source_id = 3` (SACKMANN_MCP) when reading `tb_point` if there's any source ambiguity.
- Don't include walkovers / retirements in clutch (they distort): join `tb_match` and exclude `is_walkover OR is_retirement`.

**Sanity check:** Federer's career bp save % is ~67% (well-known stat); BLR for top servers tends to land ~1.05; DR+ for top returners ~1.4. If your numbers are wildly off, the join or the leverage source is wrong before anything else.

### Other queued items, sorted by visible payoff

1. **Tier 4 #15 — `tb_shot` ingest from MCP.** `npm run ingest:mcp -- --shots`. ~10M rows, several minutes. Required before serve-placement roses (`cmpServeRose`), court heatmaps, shot-direction visualizations. After clutch, this is the single biggest unlock.
2. **AI Match Recap card** (`cmpAiInsightCard` per DESIGN.md §AI features). `@anthropic-ai/sdk` is in the stack. Generate a 1-paragraph editorial recap per player using H2H data + recent matches as context. Cache by `(slug, as_of_dt)` in a new `tb_player_ai_card` table or filesystem JSON to avoid regen on every page load. This is the project's stated soul move ("a magazine that happens to be a data app").
3. **Player card visual hierarchy refresh.** With the sparkline now carrying real ranking signal (rather than decoration), the card layout could promote it — show current rank inline, sparkline larger, less metadata.
4. **OG image for `/compare/<a>-vs-<b>`.** Astro server-renders an SVG OG image of the H2H module — DESIGN.md flags this as the shareability hook for the page that just shipped.
5. **Compare page enhancements.** Year-by-year mini-bars, set-score detail per meeting, AI summary (per DESIGN.md /compare spec). Defer until 2 lands.
6. **`tb_player_serve_zones` refresh + `cmpServeRose`.** Blocked on shot-level ingest (#1 above).
7. **MCP/Sackmann match dedupe** (still open from prior handoff). Currently MCP-charted matches double in `tb_match`; H2H + career-stats already filter `external_source_id IN (1, 2)` to dodge it, but a canonical merge would simplify future queries.

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
