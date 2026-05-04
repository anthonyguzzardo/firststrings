-- ============================================================================
-- 002_match_canonical_xref.sql
--
-- Adds canonical_match_id to tb_match so MCP-charted matches can point at the
-- Sackmann ATP/WTA row that represents the same physical match. Populated by
-- `npm run refresh:match-canonical` via a year + player-pair + round + score
-- heuristic. Unmerged rows keep canonical_match_id = NULL (treat as canonical
-- in their own right).
-- ============================================================================

SET search_path TO first_strings, public;

ALTER TABLE tb_match
  ADD COLUMN IF NOT EXISTS canonical_match_id BIGINT;

CREATE INDEX IF NOT EXISTS idx_tb_match_canonical
  ON tb_match (canonical_match_id) WHERE canonical_match_id IS NOT NULL;
