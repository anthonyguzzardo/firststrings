/**
 * Idempotent migration runner.
 *
 *   npm run db:migrate
 *
 * Reads `db/sql/migrations/*.sql` in filename order, skips any whose
 * filename is already in `tb_migration`, and applies the rest inside one
 * transaction per file (so a failure leaves a clean state).
 *
 * The `tb_migration` table itself is bootstrapped from
 * `000_migrations_table.sql` if it doesn't exist yet — that file uses
 * IF NOT EXISTS so it's safe to apply on every cold start.
 */
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { sql } from '../lib/libDb';

const MIGRATIONS_DIR = join(process.cwd(), 'db', 'sql', 'migrations');

async function main(): Promise<void> {
  if (!existsSync(MIGRATIONS_DIR)) {
    console.log('[db-migrate] no migrations dir; nothing to do.');
    return;
  }

  const files = readdirSync(MIGRATIONS_DIR)
    .filter((n) => n.endsWith('.sql'))
    .sort();

  if (files.length === 0) {
    console.log('[db-migrate] no migration files; nothing to do.');
    return;
  }

  // Always apply 000_migrations_table.sql first if present (uses IF NOT EXISTS).
  // Then check what's already applied.
  const bootstrap = files.find((n) => n.startsWith('000_'));
  if (bootstrap) {
    const bootstrapSql = readFileSync(join(MIGRATIONS_DIR, bootstrap), 'utf-8');
    await sql.unsafe(bootstrapSql);
  } else {
    // No bootstrap — create tb_migration manually so the next pass can record.
    await sql`
      CREATE TABLE IF NOT EXISTS first_strings.tb_migration (
        filename TEXT PRIMARY KEY,
        applied_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        applied_by TEXT NOT NULL DEFAULT 'db-migrate'
      )
    `;
  }

  const applied = await sql<Array<{ filename: string }>>`
    SELECT filename FROM tb_migration
  `;
  const appliedSet = new Set(applied.map((r) => r.filename));

  const pending = files.filter((n) => !appliedSet.has(n));
  if (pending.length === 0) {
    console.log(`[db-migrate] nothing to apply (${applied.length} already on board).`);
    return;
  }

  console.log(`[db-migrate] ${pending.length} pending migration${pending.length === 1 ? '' : 's'}:`);
  for (const f of pending) console.log(`  · ${f}`);

  for (const f of pending) {
    const path = join(MIGRATIONS_DIR, f);
    const text = readFileSync(path, 'utf-8');
    process.stdout.write(`[db-migrate] applying ${f} ... `);
    try {
      await sql.begin(async (txn) => {
        await txn.unsafe(text);
        await txn`INSERT INTO tb_migration (filename) VALUES (${f}) ON CONFLICT DO NOTHING`;
      });
      console.log('✓');
    } catch (e) {
      console.log('✗');
      console.error(`[db-migrate] FAILED on ${f}:`, (e as Error).message);
      throw e;
    }
  }
  console.log(`[db-migrate] ✓ applied ${pending.length} migration${pending.length === 1 ? '' : 's'}.`);
}

main()
  .then(async () => { await sql.end(); })
  .catch(async (e) => {
    console.error(e);
    await sql.end({ timeout: 5 }).catch(() => undefined);
    process.exit(1);
  });
