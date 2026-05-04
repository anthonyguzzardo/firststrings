-- ============================================================================
-- 000_migrations_table.sql
--
-- Bootstraps tb_migration. Every other migration's filename is recorded here
-- after a successful apply, so re-running `npm run db:migrate` is a no-op
-- once the schema is current. Apply this one first via the migration runner —
-- the runner creates this table if missing before checking what's pending.
-- ============================================================================

SET search_path TO first_strings, public;

CREATE TABLE IF NOT EXISTS tb_migration (
  filename            TEXT PRIMARY KEY,
  applied_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  applied_by          TEXT NOT NULL DEFAULT 'db-migrate'
);
