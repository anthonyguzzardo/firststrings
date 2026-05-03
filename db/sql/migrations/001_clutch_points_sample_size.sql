-- ============================================================================
-- 001_clutch_points_sample_size.sql
--
-- Adds points_sample_size to tb_player_clutch_metrics so the Clutch panel can
-- display "N matches · M points" attribution honestly. Existing rows (if any)
-- get 0 — refresh-clutch will repopulate on next run.
-- ============================================================================

SET search_path TO first_strings, public;

ALTER TABLE tb_player_clutch_metrics
  ADD COLUMN IF NOT EXISTS points_sample_size INT NOT NULL DEFAULT 0;
