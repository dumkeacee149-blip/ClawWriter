import { db } from "@/lib/db";

export type QuotaResult =
  | { ok: true; remaining: number; limit: number }
  | { ok: false; remaining: number; limit: number };

function todayKeyShanghai(): string {
  // Use Asia/Shanghai day boundary by using Intl formatting.
  // Result like 2026-02-22
  const fmt = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  return fmt.format(new Date());
}

export async function consumeDailyGeneration(userId: string, limit = 1): Promise<QuotaResult> {
  const day = todayKeyShanghai();

  // Atomic upsert + conditional increment.
  // Requires UNIQUE(user_id, day) in table usage_daily.
  const sql = `
    INSERT INTO usage_daily (user_id, day, used_count)
    VALUES ($1, $2, 1)
    ON CONFLICT (user_id, day)
    DO UPDATE SET used_count = usage_daily.used_count + 1
    WHERE usage_daily.used_count < $3
    RETURNING used_count;
  `;

  const r = await db().query(sql, [userId, day, limit]);
  if (r.rowCount === 0) {
    return { ok: false, remaining: 0, limit };
  }
  const used = Number(r.rows[0].used_count || 0);
  const remaining = Math.max(0, limit - used);
  return { ok: true, remaining, limit };
}
