import { Pool } from "pg";

let _pool: Pool | undefined;

export function db() {
  if (_pool) return _pool;
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) throw new Error("Missing env: DATABASE_URL");

  _pool = new Pool({ connectionString, max: 5 });
  return _pool;
}
