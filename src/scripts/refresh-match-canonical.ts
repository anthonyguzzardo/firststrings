/**
 * Populate tb_match.canonical_match_id for MCP rows that duplicate a
 * Sackmann ATP/WTA row.
 *
 *   npm run refresh:match-canonical
 *
 * Heuristic: for each MCP match (source=3), find a single Sackmann match
 * (source IN 1, 2) with the SAME:
 *   - tournament_edition_year
 *   - unordered (p1_id, p2_id) pair
 *   - round_id
 *   - score (when both rows have one)
 * If exactly one Sackmann row matches, point the MCP row at it via
 * canonical_match_id. Ambiguous matches stay NULL.
 *
 * Idempotent — re-runs reset and re-populate via a single SQL statement.
 *
 * For now no other code reads canonical_match_id; queries continue to filter
 * `external_source_id IN (1, 2)` to avoid double-counting. The column is here
 * as a forward-compatible foundation: future MCP-aware aggregations can
 * follow `canonical_match_id` (or stay on the MCP row if NULL).
 */
import { sql } from '../lib/libDb';

async function main(): Promise<void> {
  console.log('[match-canonical] resetting canonical_match_id...');
  await sql`UPDATE tb_match SET canonical_match_id = NULL WHERE canonical_match_id IS NOT NULL`;

  console.log('[match-canonical] computing canonical pairs (heuristic match)...');
  const updated = await sql<Array<{ mcp_id: string; canonical_id: string }>>`
    WITH pairs AS (
      SELECT
        mcp.match_id AS mcp_id,
        sk.match_id  AS sk_id,
        ROW_NUMBER() OVER (
          PARTITION BY mcp.match_id
          ORDER BY sk.match_id
        ) AS rn,
        COUNT(*) OVER (PARTITION BY mcp.match_id) AS match_count
      FROM tb_match mcp
      JOIN tb_match sk
        ON sk.external_source_id IN (1, 2)
       AND mcp.tournament_edition_year = sk.tournament_edition_year
       AND mcp.round_id = sk.round_id
       AND ((mcp.p1_id = sk.p1_id AND mcp.p2_id = sk.p2_id)
         OR (mcp.p1_id = sk.p2_id AND mcp.p2_id = sk.p1_id))
       AND (mcp.score IS NULL OR sk.score IS NULL OR mcp.score = sk.score)
      WHERE mcp.external_source_id = 3
    ),
    unique_pairs AS (
      SELECT mcp_id, sk_id FROM pairs WHERE match_count = 1
    )
    UPDATE tb_match m
    SET canonical_match_id = up.sk_id,
        modified_by = 'refresh-match-canonical',
        dttm_modified_utc = NOW()
    FROM unique_pairs up
    WHERE m.match_id = up.mcp_id
    RETURNING m.match_id::text AS mcp_id, m.canonical_match_id::text AS canonical_id
  `;
  console.log(`[match-canonical] linked ${updated.length.toLocaleString()} MCP rows to a canonical Sackmann match`);

  // Report the residue: MCP rows still NULL (ambiguous or no match found).
  const residue = await sql<Array<{ status: string; n: number }>>`
    SELECT
      CASE
        WHEN canonical_match_id IS NULL THEN 'unmerged'
        ELSE 'merged'
      END AS status,
      COUNT(*)::int AS n
    FROM tb_match
    WHERE external_source_id = 3
    GROUP BY 1
    ORDER BY 1
  `;
  for (const r of residue) console.log(`         ${r.status}: ${r.n.toLocaleString()}`);
}

main()
  .then(async () => { await sql.end(); })
  .catch(async (e) => {
    console.error('FAILED:', e);
    await sql.end({ timeout: 5 }).catch(() => undefined);
    process.exit(1);
  });
