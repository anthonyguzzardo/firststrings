# GOTCHAS

Per CLAUDE.md, only four entry categories are allowed here: necessary friction, historical landmines (with fix date), discipline rules, philosophy-driven choices (with principle). Anything else is rationalized bug — fix it in code instead.

---

## Postgres host port is 5433, not 5432
**Category:** necessary friction.

`docker-compose.yml` maps the container's 5432 to the host's **5433** so the dev DB can coexist with any system-level Postgres already bound to 5432 (very common on macOS). Use `5433` everywhere on the host:
- `FIRSTSTRINGS_PG_URL=postgres://first_strings:first_strings_dev@127.0.0.1:5433/first_strings`
- `psql -h 127.0.0.1 -p 5433 -U first_strings -d first_strings`

Inside the container the port is still 5432 (`docker exec first_strings_pg psql -U first_strings -d first_strings ...` doesn't take `-p`).

If the host node process gets `role "first_strings" does not exist`, the connection is hitting a different Postgres on 5432, not ours — verify with `lsof -nP -iTCP:5432 -sTCP:LISTEN` and reach for 5433.

---

## Curated TS roster vs SQL analytics layer are co-equal
**Category:** philosophy-driven choice.
**Principle:** depth over speed.

There are two player data sources, both authoritative for their domain:
1. **Curated TS roster** (`src/lib/libPlayersData.ts`) — hand-tended bios, equipment, quotes, trophies, projection. Source of truth for the 23 honored players' editorial content.
2. **SQL analytics layer** (`first_strings` schema) — every match, every point, every shot, derived metrics, embeddings. Source of truth for shot-by-shot, head-to-head, ranking history, clutch metrics.

A curated player has both: a `td_player` row with `is_curated = TRUE` and a `tm_player_external_id` row mapping its `td_player.player_id` to the TS slug (`source = MANUAL`). A non-curated player from Sackmann ingest has `is_curated = FALSE` and only the SQL side.

Don't try to collapse the two. Editorial content does not belong in SQL; 10M shots do not belong in TS files.
