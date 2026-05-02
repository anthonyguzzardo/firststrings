# First Strings — Agent Handoff

A note from the previous agent to the next. Read CLAUDE.md first for the philosophy and conventions, then this for current state and what's next.

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

Priorities 1-3 below have **landed** in this same session. See the "Landed this session" subsection that follows.

1. ~~**Bootstrap td_player from the curated TS roster.**~~ Done (23 curated players, all with MANUAL xref).
2. ~~**First ingest script: Sackmann ATP.**~~ Done (65,941 players, 194,996 matches, 4,188 tournaments).
3. ~~**WTA mirror.**~~ Done (69,758 players, 158,076 matches, 5,843 tournaments).
4. **`libMcpShotParser.ts`** — the key technical lift. Tokenizer + state machine that converts an MCP shot string (e.g. `"4f1*"`) into a sequence of `tb_shot` row payloads. Reference: `tennisabstract.com/blog/2015/09/23/the-match-charting-project-quick-start-guide/`. Build pure (no DB), test with a fixture set of ~20 known points, then wire into `src/scripts/ingest-sackmann-mcp.ts`. The MCP repo will already exist at `tmp/data/sackmann/mcp/` after a clone-step is added — same pattern as ATP/WTA. Match Charting Project metadata is in `charting-m-matches.csv` / `charting-w-matches.csv`; points are in `charting-{m,w}-points-*.csv` with the raw shot string in the `1st`, `2nd`, `Notes` columns.
5. **First derived metric:** Elo trajectory (`libDerivedElo.ts` + `src/scripts/refresh-elo.ts`) — easiest visible win now that matches are loaded; powers career-arc charts. Process all 353k matches in chronological order, K-factor = 32, surface-specific tracks alongside an overall track. Write into `th_player_elo`.
6. **First viz:** career-arc chart on the curated player profile page using D3 + Observable Plot, fed from `th_player_elo` joined with `th_player_ranking` (rankings ingest also TBD). Slots into the existing profile page next to the equipment/trophy sections.

Defer for later:
- Live-match feed (still adds infra cost the project hasn't justified yet).
- Infotennis scraper (Antwerp 2021+ Court Vision) — high value but only after the historical core is solid.
- Style embedding pipeline (Python `py/embed_players.py`) — needs aggregates to feed it; queue for after step 5.
- Sackmann historical rankings ingest — `atp_rankings_*.csv` files. Straightforward but volume-y; either run alongside Elo or right before the career-arc viz.

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

Spot-check: `SELECT … FROM td_player … JOIN tb_match …` for `slug='roger-federer'` returns **1265-280, 83 distinct events, 1998-2021** — matches public records to within ~1% (Sackmann includes some Davis Cup / qualifying that may differ from headline W-L).

### How to reproduce

```sh
docker compose up -d           # Postgres + pgvector on host port 5433
npm run db:psql                # interactive psql into the container
npm run bootstrap              # 23 curated players → SQL
npm run ingest:atp             # ATP players + matches (clones to tmp/data/sackmann/atp first run)
npm run ingest:wta             # WTA players + matches (clones to tmp/data/sackmann/wta first run)
npm run db:reset               # nuke the volume and start clean if you need to
```

Each ingest is fully idempotent: re-running upserts and creates nothing new.

### Architectural notes worth knowing

- **The shared engine** lives in `src/lib/libSackmannIngest.ts`; the per-tour scripts are 25-line wrappers. To add a third Sackmann-style dataset (Challenger? ITF? doubles?) just call `ingestSackmann({...})` with a different `tourId` / `sourceId` / file pattern.
- **`libIngestUtils.ts`** holds the slugify, csv-date parser, `ensureRepo` helper, and the IOC/handedness/surface/level/round code → te_id mappings. Anything that's tomorrow's "ingest needs to know how to map X" goes here, not in the engine.
- **Slug collision handling.** ATP "John Smith" and WTA "John Smith" each get their own slug regardless because curated players already own the clean slug; Sackmann players that collide append a tour-suffixed sackmann_id. Curated profiles are protected — the engine's INSERT … ON CONFLICT (slug) DO NOTHING leaves the curated row alone, then `tm_player_external_id` adds the Sackmann pointer.
- **Dedupe on both unique constraints.** `tm_player_external_id` has UNIQUE (player_id, source_id) AND UNIQUE (source_id, external_id). Sackmann data occasionally reuses a Wikidata Q-number across player rows, so the engine pre-dedupes on both keys (helper `dedupeMappings` in libSackmannIngest.ts). Same for matches: a few WTA year files have within-file duplicate (tourney_id, match_num) pairs — engine de-dupes per-batch.
- **No `is_best_of_five` on WTA matches.** Detection is heuristic (`best_of='5'` from Sackmann); WTA never plays best-of-5, so all WTA rows get `FALSE`.

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
