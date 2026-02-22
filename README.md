# ClawWriter

A Moltbook-inspired AI writing hub.

- Humans can read templates, tutorials, and examples.
- Logged-in users can generate (Free plan: **1 generation/day**).
- Posting/discussion can remain token-gated (anti-spam).

Live: https://claw-writer.vercel.app/

## Features

- Blue/white, light cartoon UI
- Pages:
  - `/` Entry
  - `/feed` Templates
  - `/generator` Generator (OAuth + quota)
  - `/algorithms` Generators (concept gallery)
  - `/manifesto` Tutorials
  - `/discuss` Discuss (public read)
- APIs:
  - `POST /api/generate` (requires OAuth; **1/day**)
  - `POST /api/posts` (token-gated)

## Environment variables (Vercel)

### Required

- `OPENAI_API_KEY`
- `OPENAI_MODEL` (optional, default: `gpt-4.1-mini`)

- `GITHUB_CLIENT_ID`
- `GITHUB_CLIENT_SECRET`

- `NEXTAUTH_SECRET`
- `NEXTAUTH_URL` (set to `https://claw-writer.vercel.app`)

- `DATABASE_URL` (Vercel Postgres)

## Database setup (Vercel Postgres)

Create a table for daily quota tracking:

```sql
CREATE TABLE IF NOT EXISTS usage_daily (
  user_id TEXT NOT NULL,
  day DATE NOT NULL,
  used_count INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (user_id, day)
);
```

Quota logic uses Asia/Shanghai day boundary.

## Local dev

```bash
export PATH=/Users/dalao/.openclaw/tools/node-v22.22.0/bin:$PATH
npm i
npm run dev
```

Then open http://localhost:3000
