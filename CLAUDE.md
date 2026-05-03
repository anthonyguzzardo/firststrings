# First Strings

# goal is to make this the coolest tennis fandom page of all time...
An app dedicated to honoring the best tennis legends of all time and tracking current players... ATP and WTA... pre and open era. Making sure it is easy to navigate their profiles, compare them together ... and other shit I haven't thought of. Would be really cool if we could study their strengths, shot selection, where balls land in court, RPMs, serve speed, forehand speed, backhand speed, style of play 1 handed backhand, 2 handed backhand, right/lefty... other traits I'm not thinking of. All the big names obviously current super stars and players that are trending up and what not. 
**would also be cool if we could honor announcers of the game, cool calls and what not... possibly even honor the coolest venues the game has to offer**

## Stack
- Astro 5 (SSR, Node standalone adapter), TypeScript strict, Node 20+ everywhere (app + ingest scripts + cron).
- PostgreSQL 17 + pgvector. Env `FIRSTSTRINGS_PG_URL`, schema `first_strings`, `search_path = first_strings, public`. Local: `docker compose up -d` (host port `5433` to coexist with any system Postgres on `5432`).
- `postgres.js` for DB access (raw SQL, no ORM). `zod` for runtime validation at ingest boundaries.
- Claude API (`@anthropic-ai/sdk`) for narrative generation and the Ask the Oracle widget.
- Visualization: D3 v7 + Observable Plot for charts and court SVGs; MapLibre GL JS for the venue map; deck.gl reserved for high-cardinality shot scatters if/when needed.
- Python (small footprint, two scripts only): `sentence-transformers` for player style embeddings → pgvector; forked `glad94/infotennis` for Court Vision scraping. Tooling: `uv`.

## Local dev
```sh
docker compose up -d         # Postgres + pgvector (port 5433 on host)
npm run dev                  # Astro dev server on :4321
```
`.env` (gitignored) holds `FIRSTSTRINGS_PG_URL`. See `.env.example`.

## Agent Navigation
- **Visual / design / component work:** read `DESIGN.md` first (1k+ line manual — palette, typography, motion, GPU policy, components, page architecture, V1→V4 roadmap). Receipts in `tmp/design-research/{roland-garros,wimbledon,australian-open,us-open,broader-tennis,motion-and-gpu}.md`.
- **Data-layer work:** `grep '@region' db/sql/dbFirstStrings_Tables.sql` (schema TOC), `grep '@region' src/lib/libDb.ts` (function TOC). Update nearest `@region` when adding tables/exports.
- Curated TS roster lives in `src/lib/libPlayersData.ts` (~13.4k lines). The SQL `td_player` row for a curated player carries `is_curated = TRUE` and is bridged to its slug via `tm_player_external_id` (source = `MANUAL`).
- **Current state, milestones, and what's next:** `HANDOFF.md`.
- Unfamiliar areas: check `GOTCHAS.md`.
- `GOTCHAS.md` entry categories (only): necessary friction, historical landmines (with fix date), discipline rules, philosophy-driven choices (with principle). "Semi-intentional" or "matches pattern of X being best-effort" = rationalizing a bug. Fix it.

## Architecture

---

## CRITICAL: Logical Foreign Keys

**No physical FK constraints exist. App is responsible for referential integrity.**

- No cascade deletes. App must clean up children.
- DB will not reject orphaned references.
- JOINs work fine (raw SQL via postgres.js).

### Pattern


---

## Database Conventions

- Prefixes: `te_` (enum/static), `td_` (dictionary), `tb_` (mutable), `tm_` (matrix), `th_` (history)
- Surrogate keys: `table_name_id` (NEVER bare `id`)
- Logical FKs only
- Footer columns on mutable tables: `dttm_created_utc`, `created_by`, `dttm_modified_utc`, `modified_by`. None on enum tables.
- Header comments on every table: PURPOSE, USE CASE, MUTABILITY, REFERENCED BY, FOOTER
- Enum tables: explicit INSERT with fixed IDs
- No ALTER TABLE in `db/sql/dbFirstStrings_Tables.sql`. Rewrite the CREATE TABLE so schema reads as a complete script. Forward-only increments go in `db/sql/migrations/NNN_description.sql`.
- No proper nouns in column names
---

## Naming Convention

Prefixes make files self-identifying outside their directory (stack traces, search results, tab bars).

| Prefix | Type | Example |
|--------|------|---------|
| `lib` | Library/domain logic | `libDynamicalSignals.ts` |
| `utl` | Utility | `utlDate.ts` |
| `cmp` | Astro component | `cmpObsToolbar.astro` |
| `lay` | Astro layout | `layBase.astro` |
| `sty` | CSS file | `styObservatory.css` |

Rules:
1. Prefix + PascalCase, no hyphens
2. NOT prefixed: `src/pages/*.astro` (file-based routing → URLs, kebab-case), `src/pages/api/*.ts` (kebab-case), `src/scripts/*.ts` (kebab-case), `py/**/*.py` (snake_case)
3. SQL: `db/sql/dbFirstStrings_*.sql`, migrations `db/sql/migrations/NNN_description.sql`

```
src/
├── components/  # cmpX.astro
├── layouts/     # layX.astro
├── lib/         # libX.ts / utlX.ts
├── pages/       # kebab-case.astro (api/ also kebab-case.ts)
├── scripts/     # kebab-case.ts (runnable ingest / refresh tasks)
└── styles/      # styX.css
db/sql/          # dbFirstStrings_*.sql, migrations/NNN_*.sql
py/              # snake_case.py (embedding generation, infotennis scraper)
```

---

### Module Structure

---

## Philosophy

Every technical decision should serve depth over speed. If it optimizes for engagement or throughput, it's wrong. The design is the philosophy.