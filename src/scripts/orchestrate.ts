/**
 * Orchestrators that chain other npm scripts so the user can type one
 * command instead of nine. Two modes:
 *
 *   npm run setup        # full bootstrap from a fresh docker volume:
 *                        #   db:up → db:migrate → bootstrap → all ingests → refresh:all
 *   npm run refresh:all  # all derivations in dependency order (no ingests)
 *   npm run db:up-wait   # bring docker postgres up + wait until it answers
 *
 * The script invoked is selected by the first argv. Each step is a child
 * process that inherits stdio so logs stream live.
 */
import { spawn } from 'node:child_process';
import { sql } from '../lib/libDb';

type Step = { name: string; cmd: string; args: string[]; optional?: boolean };

function runStep(step: Step): Promise<void> {
  return new Promise((resolve, reject) => {
    console.log(`\n──── ${step.name} ────`);
    const child = spawn(step.cmd, step.args, { stdio: 'inherit', shell: false });
    child.on('error', (e) => reject(e));
    child.on('close', (code) => {
      if (code === 0) resolve();
      else if (step.optional) {
        console.warn(`[orchestrate] ${step.name} exited ${code} (optional, continuing)`);
        resolve();
      } else reject(new Error(`${step.name} exited with code ${code}`));
    });
  });
}

async function pingDbReady(maxAttempts = 30, delayMs = 500): Promise<boolean> {
  for (let i = 0; i < maxAttempts; i++) {
    try {
      await sql`SELECT 1`;
      await sql.end();
      return true;
    } catch {
      await new Promise((r) => setTimeout(r, delayMs));
    }
  }
  return false;
}

const REFRESH_STEPS: Step[] = [
  { name: 'refresh:elo',                cmd: 'npm', args: ['run', 'refresh:elo']                },
  { name: 'refresh:career-stats',       cmd: 'npm', args: ['run', 'refresh:career-stats']       },
  { name: 'refresh:mcp-score',          cmd: 'npm', args: ['run', 'refresh:mcp-score']          },
  { name: 'refresh:match-canonical',    cmd: 'npm', args: ['run', 'refresh:match-canonical']    },
  { name: 'refresh:leverage',           cmd: 'npm', args: ['run', 'refresh:leverage']           },
  { name: 'refresh:clutch',             cmd: 'npm', args: ['run', 'refresh:clutch']             },
  { name: 'refresh:serve-zones',        cmd: 'npm', args: ['run', 'refresh:serve-zones']        },
  { name: 'refresh:shot-distribution',  cmd: 'npm', args: ['run', 'refresh:shot-distribution']  },
  { name: 'refresh:style-embedding',    cmd: 'npm', args: ['run', 'refresh:style-embedding']    },
];

const INGEST_STEPS: Step[] = [
  { name: 'bootstrap',         cmd: 'npm', args: ['run', 'bootstrap']                       },
  { name: 'ingest:atp',        cmd: 'npm', args: ['run', 'ingest:atp']                      },
  { name: 'ingest:wta',        cmd: 'npm', args: ['run', 'ingest:wta']                      },
  { name: 'ingest:mcp shots',  cmd: 'npm', args: ['run', 'ingest:mcp', '--', '--shots']     },
  { name: 'ingest:rankings',   cmd: 'npm', args: ['run', 'ingest:rankings']                 },
  { name: 'ingest:venues',     cmd: 'npm', args: ['run', 'ingest:venues'], optional: true   },
];

async function dbUpWait(): Promise<void> {
  await runStep({ name: 'docker compose up -d', cmd: 'docker', args: ['compose', 'up', '-d'] });
  console.log('[orchestrate] waiting for Postgres to accept connections...');
  const ok = await pingDbReady();
  if (!ok) throw new Error('Postgres did not become ready within timeout');
  console.log('[orchestrate] ✓ Postgres ready');
}

async function refreshAll(): Promise<void> {
  for (const s of REFRESH_STEPS) await runStep(s);
  console.log('\n[orchestrate] ✓ refresh:all complete');
}

async function setup(): Promise<void> {
  await dbUpWait();
  await runStep({ name: 'db:migrate', cmd: 'npm', args: ['run', 'db:migrate'] });
  for (const s of INGEST_STEPS) await runStep(s);
  await refreshAll();
  console.log('\n[orchestrate] ✓ setup complete — `npm run dev` is ready');
}

const mode = process.argv[2];
const main = async () => {
  switch (mode) {
    case 'setup':       await setup();       break;
    case 'refresh-all': await refreshAll();  break;
    case 'db-up-wait':  await dbUpWait();    break;
    default:
      console.error('Usage: orchestrate <setup | refresh-all | db-up-wait>');
      process.exit(1);
  }
};

main().catch((e) => {
  console.error('\n[orchestrate] FAILED:', (e as Error).message);
  process.exit(1);
});
