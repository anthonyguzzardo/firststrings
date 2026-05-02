# First Strings

# goal is to make this the coolest tennis fandom page of all time...
An app dedicated to honoring the best tennis legends of all time and tracking current players... ATP and WTA... pre and open era. Making sure it is easy to navigate their profiles, compare them together ... and other shit I haven't thought of. Would be really cool if we could study their strengths, shot selection, where balls land in court, RPMs, serve speed, forehand speed, backhand speed, style of play 1 handed backhand, 2 handed backhand, right/lefty... other traits I'm not thinking of. All the big names obviously current super stars and players that are trending up and what not. 
**would also be cool if we could honor announcers of the game, cool calls and what not... possibly even honor the coolest venues the game has to offer**

## Stack
- Astro (SSR, Node adapter)
**TBD IF WE USE SQL following are examples in PG**
- PostgreSQL 17 + pgvector. Env `ALICE_PG_URL` (`postgres://localhost/<schemaName>`), schema `<SchemaName>`, `search_path = alice,public`
- Claude API (`@anthropic-ai/sdk`) for question generation
- TypeScript (strict)

## Agent Navigation
- Data-layer work: `grep '@region' db/sql/db<SchemaName>_Tables.sql` (schema TOC), `grep '@region' src/lib/libDb.ts` (function TOC). Update nearest `@region` when adding tables/exports.
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
- No ALTER TABLE in `db/sql/<SchemaNamee>_Tables.sql`. Rewrite the CREATE TABLE so schema reads as a complete script. Increments go in `db/sql/migrations/`.
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
2. NOT prefixed: `src/pages/*.astro` (file-based routing → URLs, kebab-case), `src/pages/api/*.ts` (kebab-case), `src/scripts/*.ts` (kebab-case), `src-rs/src/*.rs` (snake_case)
3. SQL: `db/sql/db<SchemaName>_*.sql`, migrations `db/sql/migrations/NNN_description.sql`

```
src/
├── components/  # cmpX.astro
├── layouts/     # layX.astro
├── lib/         # libX.ts / utlX.ts
├── pages/       # kebab-case.astro (api/ also kebab-case.ts)
├── scripts/     # kebab-case.ts (runnable tasks)
└── styles/      # styX.css
db/sql/          # dbAlice_X.sql, migrations/NNN_*.sql
src-rs/src/      # snake_case.rs
```

---

### Module Structure

---

## Philosophy

Every technical decision should serve depth over speed. If it optimizes for engagement or throughput, it's wrong. The design is the philosophy.