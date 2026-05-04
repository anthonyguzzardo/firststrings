/**
 * Populate tb_match.canonical_match_id for MCP rows that duplicate a
 * Sackmann ATP/WTA row.
 *
 *   npm run refresh:match-canonical
 *
 * Multi-pass heuristic: each pass widens the matching tolerance and
 * commits only the rows that have an UNAMBIGUOUS match in that pass.
 * Already-linked rows are not revisited.
 *
 *   1. year + unordered pair + round + score (exact)
 *   2. year + unordered pair + round + score (whitespace-normalized)
 *   3. year + unordered pair + round (no score)            — score drifted
 *   4. year + unordered pair (no round)                    — round drifted
 *
 * Passes 3 and 4 are only allowed when the candidate Sackmann set has
 * exactly one row, so we never link an MCP row to the wrong meeting.
 *
 * Rows that survive every pass remain canonical_match_id = NULL — they're
 * legitimately MCP-only matches (charts of exhibitions, pre-Open-era
 * matches not in Sackmann's tour-level dataset, etc.).
 */
import { sql } from '../lib/libDb';

interface PassReport { name: string; linked: number }

async function runPass(name: string, query: ReturnType<typeof sql>): Promise<PassReport> {
  const rows = await query as unknown as Array<unknown>;
  return { name, linked: rows.length };
}

async function main(): Promise<void> {
  console.log('[match-canonical] resetting canonical_match_id...');
  await sql`UPDATE tb_match SET canonical_match_id = NULL WHERE canonical_match_id IS NOT NULL`;

  const reports: PassReport[] = [];

  // Pass 1: tightest — year + pair + round + exact score.
  reports.push(await runPass('exact-score', sql`
    WITH cand AS (
      SELECT
        mcp.match_id AS mcp_id,
        sk.match_id  AS sk_id,
        COUNT(*) OVER (PARTITION BY mcp.match_id) AS n
      FROM tb_match mcp
      JOIN tb_match sk
        ON sk.external_source_id IN (1, 2)
       AND mcp.tournament_edition_year = sk.tournament_edition_year
       AND mcp.round_id = sk.round_id
       AND ((mcp.p1_id = sk.p1_id AND mcp.p2_id = sk.p2_id)
         OR (mcp.p1_id = sk.p2_id AND mcp.p2_id = sk.p1_id))
       AND mcp.score IS NOT NULL AND sk.score IS NOT NULL
       AND mcp.score = sk.score
      WHERE mcp.external_source_id = 3 AND mcp.canonical_match_id IS NULL
    )
    UPDATE tb_match m
    SET canonical_match_id = c.sk_id,
        modified_by = 'refresh-match-canonical-p1',
        dttm_modified_utc = NOW()
    FROM cand c
    WHERE m.match_id = c.mcp_id AND c.n = 1
    RETURNING m.match_id
  `));

  // Pass 2: same shape, but normalize whitespace in the score string.
  // "7-6 (5)" vs "7-6(5)" should now match.
  reports.push(await runPass('normalized-score', sql`
    WITH cand AS (
      SELECT
        mcp.match_id AS mcp_id,
        sk.match_id  AS sk_id,
        COUNT(*) OVER (PARTITION BY mcp.match_id) AS n
      FROM tb_match mcp
      JOIN tb_match sk
        ON sk.external_source_id IN (1, 2)
       AND mcp.tournament_edition_year = sk.tournament_edition_year
       AND mcp.round_id = sk.round_id
       AND ((mcp.p1_id = sk.p1_id AND mcp.p2_id = sk.p2_id)
         OR (mcp.p1_id = sk.p2_id AND mcp.p2_id = sk.p1_id))
       AND mcp.score IS NOT NULL AND sk.score IS NOT NULL
       AND regexp_replace(mcp.score, '\\s+', '', 'g') = regexp_replace(sk.score, '\\s+', '', 'g')
      WHERE mcp.external_source_id = 3 AND mcp.canonical_match_id IS NULL
    )
    UPDATE tb_match m
    SET canonical_match_id = c.sk_id,
        modified_by = 'refresh-match-canonical-p2',
        dttm_modified_utc = NOW()
    FROM cand c
    WHERE m.match_id = c.mcp_id AND c.n = 1
    RETURNING m.match_id
  `));

  // Pass 2.5: drop score, but require the tournament *name* to match
  // case-insensitively. Sackmann ATP/WTA and MCP create their own
  // td_tournament rows for the same event, so tournament_id often differs;
  // the name (e.g. "Wimbledon", "Roland Garros") is far more reliable.
  reports.push(await runPass('tournament-name', sql`
    WITH cand AS (
      SELECT
        mcp.match_id AS mcp_id,
        sk.match_id  AS sk_id,
        COUNT(*) OVER (PARTITION BY mcp.match_id) AS n
      FROM tb_match mcp
      JOIN td_tournament tm ON tm.tournament_id = mcp.tournament_id
      JOIN tb_match sk
        ON sk.external_source_id IN (1, 2)
       AND mcp.tournament_edition_year = sk.tournament_edition_year
       AND mcp.round_id = sk.round_id
       AND ((mcp.p1_id = sk.p1_id AND mcp.p2_id = sk.p2_id)
         OR (mcp.p1_id = sk.p2_id AND mcp.p2_id = sk.p1_id))
      JOIN td_tournament ts ON ts.tournament_id = sk.tournament_id
       AND lower(tm.name) = lower(ts.name)
      WHERE mcp.external_source_id = 3 AND mcp.canonical_match_id IS NULL
    )
    UPDATE tb_match m
    SET canonical_match_id = c.sk_id,
        modified_by = 'refresh-match-canonical-p25',
        dttm_modified_utc = NOW()
    FROM cand c
    WHERE m.match_id = c.mcp_id AND c.n = 1
    RETURNING m.match_id
  `));

  // Pass 3: drop the score requirement entirely. Only accept when the
  // Sackmann candidate set on (year, pair, round) is unique.
  reports.push(await runPass('no-score', sql`
    WITH cand AS (
      SELECT
        mcp.match_id AS mcp_id,
        sk.match_id  AS sk_id,
        COUNT(*) OVER (PARTITION BY mcp.match_id) AS n
      FROM tb_match mcp
      JOIN tb_match sk
        ON sk.external_source_id IN (1, 2)
       AND mcp.tournament_edition_year = sk.tournament_edition_year
       AND mcp.round_id = sk.round_id
       AND ((mcp.p1_id = sk.p1_id AND mcp.p2_id = sk.p2_id)
         OR (mcp.p1_id = sk.p2_id AND mcp.p2_id = sk.p1_id))
      WHERE mcp.external_source_id = 3 AND mcp.canonical_match_id IS NULL
    )
    UPDATE tb_match m
    SET canonical_match_id = c.sk_id,
        modified_by = 'refresh-match-canonical-p3',
        dttm_modified_utc = NOW()
    FROM cand c
    WHERE m.match_id = c.mcp_id AND c.n = 1
    RETURNING m.match_id
  `));

  // Pass 4: drop the round requirement too — only accept when (year, pair)
  // is unique across Sackmann (i.e. these two players met exactly once
  // that year).
  reports.push(await runPass('no-round', sql`
    WITH cand AS (
      SELECT
        mcp.match_id AS mcp_id,
        sk.match_id  AS sk_id,
        COUNT(*) OVER (PARTITION BY mcp.match_id) AS n
      FROM tb_match mcp
      JOIN tb_match sk
        ON sk.external_source_id IN (1, 2)
       AND mcp.tournament_edition_year = sk.tournament_edition_year
       AND ((mcp.p1_id = sk.p1_id AND mcp.p2_id = sk.p2_id)
         OR (mcp.p1_id = sk.p2_id AND mcp.p2_id = sk.p1_id))
      WHERE mcp.external_source_id = 3 AND mcp.canonical_match_id IS NULL
    )
    UPDATE tb_match m
    SET canonical_match_id = c.sk_id,
        modified_by = 'refresh-match-canonical-p4',
        dttm_modified_utc = NOW()
    FROM cand c
    WHERE m.match_id = c.mcp_id AND c.n = 1
    RETURNING m.match_id
  `));

  for (const r of reports) {
    console.log(`[match-canonical] pass ${r.name.padEnd(20)} → ${r.linked.toLocaleString()} new links`);
  }
  const total = reports.reduce((s, r) => s + r.linked, 0);

  // Final tally — merged vs unmerged across all MCP rows.
  const tally = await sql<Array<{ status: string; n: number }>>`
    SELECT CASE WHEN canonical_match_id IS NULL THEN 'unmerged' ELSE 'merged' END AS status,
           COUNT(*)::int AS n
    FROM tb_match WHERE external_source_id = 3
    GROUP BY 1 ORDER BY 1
  `;
  console.log(`[match-canonical] total linked across passes: ${total.toLocaleString()}`);
  for (const r of tally) console.log(`         ${r.status}: ${r.n.toLocaleString()}`);
}

main()
  .then(async () => { await sql.end(); })
  .catch(async (e) => {
    console.error('FAILED:', e);
    await sql.end({ timeout: 5 }).catch(() => undefined);
    process.exit(1);
  });
