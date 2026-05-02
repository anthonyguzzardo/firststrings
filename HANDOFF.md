# First Strings — Agent Handoff

A note from the previous agent to the next. Read CLAUDE.md first for the philosophy and conventions, then this for current state and what's next.

## Where things stand (as of 2026-05-02)

**Roster:** 23 players — full data integrated for all of them.

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
| `tmp/integrate-titles.mjs` | Reads `tmp/research/<slug>.json`, inserts `titles: [...]` into the matching player block. Skips players that already have titles. |
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

The user wants a routine that runs every Monday morning to keep active-player data current as the season progresses. Pseudocode for the next agent:

1. **For each active player** (Sinner, Alcaraz, Djokovic, Sabalenka, Rybakina, Gauff, Świątek, Fonseca, Fils, Jódar):
   a. Fetch current career stats from Wikipedia + ATP/WTA tour pages: Slam count, weeks at #1 (career total), year-end #1 finishes, career-high ranking, career prize money. Compare to what's in `libPlayersData.ts`. If anything differs, update.
   b. Fetch current title list (Wikipedia "career statistics" page is canonical). Write to `tmp/research/<slug>.json` as a fresh JSON array. **The current `integrate-titles.mjs` skips players with existing titles** — for the weekly refresh, either:
   - Modify it to add a `--force` flag that replaces existing `titles: [...]` blocks, OR
   - Strip the existing `titles: [...]` block from `libPlayersData.ts` for the affected players, then re-run the script.

2. **Re-run the integration pipeline:**
   ```sh
   node tmp/extract-titles-to-json.mjs    # snapshot current state to JSON (so future runs can diff)
   node tmp/integrate-titles.mjs          # pick up new titles
   node tmp/integrate-equipment.mjs       # no-op unless new equipment files dropped
   node tmp/integrate-bonus.mjs           # no-op unless new bonus files dropped
   node tmp/compute-miles.mjs             # recompute miles with any new titles
   ```

3. **Type-check.** If new TS errors appear (agents add fields the schema doesn't know about), loosen the relevant types in `src/lib/libPlayers.ts` — match the existing pattern (`[extra: string]: unknown` index signatures + optional fields). Don't reject the agent data, accept it.

4. **Open a PR** titled `Weekly stats refresh — YYYY-MM-DD` with a summary:
   - Which players had stat changes (before/after)
   - Which players gained new titles (year + tournament)
   - Any unusual data discrepancies the agent encountered

If absolutely nothing changed, skip the PR.

## Then: "fine-grain detail on matches"

User's stated next priority. Some directions to consider:

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
