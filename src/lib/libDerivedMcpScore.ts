/**
 * Reconstruct `tb_match.score` for MCP-charted matches by walking their
 * point sequences and tallying per-set games (+ tiebreak loser pts).
 *
 * MCP CSVs don't carry the score string directly — only the per-point
 * sequence. After this runs, every source-3 match with at least one
 * complete charted set gets a Sackmann-style score: "6-4 7-6(5) 6-3".
 *
 * Idempotent: rerun anytime — UPDATEs are by match_id.
 */
import { sql } from './libDb';

interface PointRow {
  match_id:         bigint;
  set_no:           number;
  game_no:          number;
  point_no_in_game: number;
  point_winner_id:  bigint;
  is_tiebreak:      boolean;
}

interface MatchRow {
  match_id: bigint;
  p1_id:    bigint;
  p2_id:    bigint;
  is_walkover:   boolean;
  is_retirement: boolean;
}

interface GameTally {
  winner: bigint;          // who won this game
  isTb:   boolean;         // tiebreak game?
  tbLoserPts: number;      // 0 for non-TB; loser's pts for TB games
}

interface SetTally {
  gamesP1:     number;
  gamesP2:     number;
  hadTb:       boolean;
  tbLoserPts:  number;
}

function reconstruct(match: MatchRow, points: PointRow[]): string | null {
  if (points.length === 0) return null;

  // Walk and group by (set_no, game_no). The MCP parser sets
  // `point_no_in_game = 1` for every point (known limitation), so we can't
  // use it to identify the last point. Instead we trust that the SELECT
  // ORDER BY point_no_in_match already gives us chronological order, and
  // overwrite the game's winner on every point — the LAST iteration for
  // each (set, game) leaves the correct value.
  type GameKey = string;
  const gameMap = new Map<GameKey, { winner: bigint; isTb: boolean; tally: Map<string, number> }>();
  for (const p of points) {
    const k = `${p.set_no}/${p.game_no}`;
    let g = gameMap.get(k);
    if (!g) {
      g = { winner: p.point_winner_id, isTb: p.is_tiebreak, tally: new Map() };
      gameMap.set(k, g);
    }
    g.winner = p.point_winner_id;          // ← last writer wins
    if (p.is_tiebreak) g.isTb = true;
    const winnerKey = p.point_winner_id.toString();
    g.tally.set(winnerKey, (g.tally.get(winnerKey) ?? 0) + 1);
  }

  // Bucket games into sets.
  const setMap = new Map<number, GameTally[]>();
  for (const [k, g] of gameMap) {
    const setNo = parseInt(k.split('/')[0]!, 10);
    let tbLoserPts = 0;
    if (g.isTb) {
      const winnerKey = g.winner.toString();
      const winnerPts = g.tally.get(winnerKey) ?? 0;
      // Loser pts = total pts - winner's pts.
      let total = 0;
      for (const v of g.tally.values()) total += v;
      tbLoserPts = total - winnerPts;
    }
    const arr = setMap.get(setNo) ?? [];
    arr.push({ winner: g.winner, isTb: g.isTb, tbLoserPts });
    setMap.set(setNo, arr);
  }

  // Order sets ascending and tally games.
  const setNos = Array.from(setMap.keys()).sort((a, b) => a - b);
  const sets: SetTally[] = [];
  for (const setNo of setNos) {
    const games = setMap.get(setNo)!;
    let p1 = 0, p2 = 0, hadTb = false, tbLoserPts = 0;
    for (const g of games) {
      if (g.winner === match.p1_id) p1++;
      else if (g.winner === match.p2_id) p2++;
      // else: skip — point_winner not p1 or p2 (shouldn't happen but be safe)
      if (g.isTb) { hadTb = true; tbLoserPts = Math.max(tbLoserPts, g.tbLoserPts); }
    }
    if (p1 + p2 === 0) continue;  // skip empty sets
    sets.push({ gamesP1: p1, gamesP2: p2, hadTb, tbLoserPts });
  }
  if (sets.length === 0) return null;

  const scoreParts = sets.map((s) => {
    const base = `${s.gamesP1}-${s.gamesP2}`;
    return s.hadTb ? `${base}(${s.tbLoserPts})` : base;
  });
  let score = scoreParts.join(' ');
  if (match.is_retirement) score += ' RET';
  else if (match.is_walkover) score += ' W/O';
  return score;
}

export async function refreshMcpScore(): Promise<void> {
  console.log('[mcp-score] loading source-3 matches with NULL score...');
  const matches = await sql<MatchRow[]>`
    SELECT match_id, p1_id, p2_id, is_walkover, is_retirement
    FROM tb_match
    WHERE external_source_id = 3
      AND score IS NULL
    ORDER BY match_id
  `;
  console.log(`[mcp-score] ${matches.length.toLocaleString()} candidate matches`);

  const CHUNK = 500;
  let written = 0, skipped = 0;
  for (let off = 0; off < matches.length; off += CHUNK) {
    const slice = matches.slice(off, off + CHUNK);
    const ids = slice.map((m) => Number(m.match_id));
    const points = await sql<PointRow[]>`
      SELECT match_id, set_no, game_no, point_no_in_game, point_winner_id, is_tiebreak
      FROM tb_point
      WHERE match_id = ANY(${ids}::bigint[])
      ORDER BY match_id, point_no_in_match
    `;
    // Group by match.
    const byMatch = new Map<string, PointRow[]>();
    for (const p of points) {
      const k = p.match_id.toString();
      const arr = byMatch.get(k) ?? [];
      arr.push(p);
      byMatch.set(k, arr);
    }

    // Build update payload for the transactional batch.
    const updates: Array<{ match_id: string; score: string }> = [];
    for (const m of slice) {
      const pts = byMatch.get(m.match_id.toString()) ?? [];
      const score = reconstruct(m, pts);
      if (!score) { skipped++; continue; }
      updates.push({ match_id: m.match_id.toString(), score });
    }

    if (updates.length > 0) {
      await sql.begin(async (txn) => {
        await txn`
          CREATE TEMP TABLE tmp_mcp_score (
            match_id BIGINT PRIMARY KEY, score TEXT NOT NULL
          ) ON COMMIT DROP
        `;
        // Insert in 5000-row batches.
        for (let i = 0; i < updates.length; i += 5000) {
          const batch = updates.slice(i, i + 5000);
          await txn`
            INSERT INTO tmp_mcp_score ${txn(batch as unknown as Record<string, unknown>[], 'match_id', 'score')}
          `;
        }
        await txn`
          UPDATE tb_match m
          SET score = t.score,
              modified_by = 'refresh-mcp-score',
              dttm_modified_utc = NOW()
          FROM tmp_mcp_score t
          WHERE m.match_id = t.match_id
        `;
      });
    }
    written += updates.length;
    console.log(`[mcp-score] chunk ${off + 1}–${Math.min(off + CHUNK, matches.length)} · ${updates.length} scored · cum ${written.toLocaleString()} (skipped ${skipped})`);
  }
  console.log(`[mcp-score] ✓ ${written.toLocaleString()} scores written, ${skipped} skipped (no point data)`);

  // Sample a handful for eyeballing.
  const sample = await sql<Array<{ slug_a: string; slug_b: string; score: string; year: number }>>`
    SELECT pa.slug AS slug_a, pb.slug AS slug_b, m.score, m.tournament_edition_year::int AS year
    FROM tb_match m
    JOIN td_player pa ON pa.player_id = m.p1_id
    JOIN td_player pb ON pb.player_id = m.p2_id
    WHERE m.external_source_id = 3 AND m.score IS NOT NULL
      AND pa.is_curated AND pb.is_curated
    ORDER BY random() LIMIT 5
  `;
  console.log('[mcp-score] sample reconstructed scores:');
  for (const s of sample) {
    console.log(`         ${s.year} ${s.slug_a} vs ${s.slug_b}: ${s.score}`);
  }
}
