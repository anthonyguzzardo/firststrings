/**
 * Fixture tests for libMcpShotParser. Asserts a small set of known
 * shot-string → expected outcome mappings sampled from real MCP files.
 *
 *   npx tsx src/scripts/test-mcp-parser.ts
 */
import {
  parseMcpPoint,
  OUTCOME_WINNER,
  OUTCOME_UNFORCED_ERROR,
  OUTCOME_FORCED_ERROR,
  OUTCOME_ACE,
  OUTCOME_DOUBLE_FAULT,
  SHOT_TYPE_SERVE,
} from '../lib/libMcpShotParser';

interface Case {
  name: string;
  first: string;
  second?: string;
  expect: {
    rally_length?: number;
    is_ace?: boolean;
    is_double_fault?: boolean;
    is_serve_and_volley?: boolean;
    point_outcome_id?: number;
    serve_direction_id?: number | null;
    error_type_id_on_last?: number | null;
  };
}

const cases: Case[] = [
  { name: 'ace down the T', first: '6*', expect: { rally_length: 1, is_ace: true, point_outcome_id: OUTCOME_ACE, serve_direction_id: 3 } },
  { name: 'ace wide', first: '4*', expect: { rally_length: 1, is_ace: true, point_outcome_id: OUTCOME_ACE, serve_direction_id: 1 } },
  { name: 'short rally UE long', first: '4f39f3f3d@', expect: { is_ace: false, point_outcome_id: OUTCOME_UNFORCED_ERROR, error_type_id_on_last: 3 } },
  { name: 'serve fault wide', first: '4w', expect: { rally_length: 1, is_ace: false, is_double_fault: false } },
  { name: 'standalone serve fault long', first: '4d', expect: { rally_length: 1, is_ace: false } },
  { name: 'double fault', first: '4w', second: '5n', expect: { is_double_fault: true, point_outcome_id: OUTCOME_DOUBLE_FAULT } },
  { name: 'serve and volley winner', first: '4+r2v3*', expect: { is_serve_and_volley: true, point_outcome_id: OUTCOME_WINNER, rally_length: 3 } },
  { name: 'long rally net forced error', first: '4r28f3sf2f1s1f+1s3n#', expect: { point_outcome_id: OUTCOME_FORCED_ERROR, error_type_id_on_last: 1 } },
  { name: 'service winner (return forced error)', first: '4r19f3b2f3f1b1f1d@', expect: { point_outcome_id: OUTCOME_UNFORCED_ERROR } },
  { name: 'just BH return + winner', first: '4b27f3*', expect: { point_outcome_id: OUTCOME_WINNER } },
];

let passed = 0;
let failed = 0;

for (const c of cases) {
  const got = parseMcpPoint(c.first, c.second);
  const failures: string[] = [];

  if (c.expect.rally_length !== undefined && got.rally_length !== c.expect.rally_length) {
    failures.push(`rally_length: expected ${c.expect.rally_length}, got ${got.rally_length}`);
  }
  if (c.expect.is_ace !== undefined && got.is_ace !== c.expect.is_ace) {
    failures.push(`is_ace: expected ${c.expect.is_ace}, got ${got.is_ace}`);
  }
  if (c.expect.is_double_fault !== undefined && got.is_double_fault !== c.expect.is_double_fault) {
    failures.push(`is_double_fault: expected ${c.expect.is_double_fault}, got ${got.is_double_fault}`);
  }
  if (c.expect.is_serve_and_volley !== undefined && got.is_serve_and_volley !== c.expect.is_serve_and_volley) {
    failures.push(`is_serve_and_volley: expected ${c.expect.is_serve_and_volley}, got ${got.is_serve_and_volley}`);
  }
  if (c.expect.point_outcome_id !== undefined && got.point_outcome_id !== c.expect.point_outcome_id) {
    failures.push(`point_outcome_id: expected ${c.expect.point_outcome_id}, got ${got.point_outcome_id}`);
  }
  if (c.expect.serve_direction_id !== undefined) {
    const serveShot = got.shots.find((s) => s.shot_type_id === SHOT_TYPE_SERVE);
    if ((serveShot?.serve_direction_id ?? null) !== c.expect.serve_direction_id) {
      failures.push(`serve_direction_id: expected ${c.expect.serve_direction_id}, got ${serveShot?.serve_direction_id ?? null}`);
    }
  }
  if (c.expect.error_type_id_on_last !== undefined) {
    const last = got.shots[got.shots.length - 1];
    if ((last?.error_type_id ?? null) !== c.expect.error_type_id_on_last) {
      failures.push(`error_type on last shot: expected ${c.expect.error_type_id_on_last}, got ${last?.error_type_id ?? null}`);
    }
  }

  if (failures.length === 0) {
    passed++;
    console.log(`  ✓ ${c.name}`);
  } else {
    failed++;
    console.log(`  ✗ ${c.name}`);
    console.log(`     input: ${c.first}${c.second ? ` | ${c.second}` : ''}`);
    for (const f of failures) console.log(`     - ${f}`);
    console.log(`     parsed:`, JSON.stringify(got, null, 2));
  }
}

console.log(`\n${passed} passed, ${failed} failed`);
process.exit(failed > 0 ? 1 : 0);
