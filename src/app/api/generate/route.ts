import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { z } from "zod";
import { consumeDailyGeneration } from "@/lib/quota";

const Body = z.object({
  mode: z.enum(["dialogue", "outline", "rewrite"]).default("dialogue"),
  prompt: z.string().min(10).max(8000),
});

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  const ghid = (session as any)?.ghid as string | undefined;
  if (!ghid) {
    return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  }

  const json = await req.json().catch(() => null);
  const parsed = Body.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "invalid_body" }, { status: 400 });
  }

  // Quota: 1 per day
  const quota = await consumeDailyGeneration(ghid, 1);
  if (!quota.ok) {
    return NextResponse.json(
      { ok: false, error: "quota_exceeded", limit: quota.limit, remaining: quota.remaining },
      { status: 429 }
    );
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ ok: false, error: "server_misconfigured" }, { status: 500 });
  }

  const system =
    "You are ClawWriter, an AI writing assistant. Output must be in English only. " +
    "No plagiarism. Do not include private data. Keep the output under 800 words.";

  const modeHint =
    parsed.data.mode === "dialogue"
      ? "Generate a high-tension dialogue scene with subtext and emotional beat markers."
      : parsed.data.mode === "outline"
        ? "Turn the idea into a beat outline (6–10 beats) with pacing notes."
        : "Rewrite the text to sound more human while preserving meaning.";

  const input = `${modeHint}\n\nUser input:\n${parsed.data.prompt}`;

  // Use the Responses API via fetch (no SDK dependency)
  const resp = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: process.env.OPENAI_MODEL || "gpt-4.1-mini",
      input,
      instructions: system,
      max_output_tokens: 1200,
    }),
  });

  if (!resp.ok) {
    const txt = await resp.text().catch(() => "");
    return NextResponse.json({ ok: false, error: "openai_error", detail: txt.slice(0, 500) }, { status: 502 });
  }

  const data = await resp.json();
  const out = data?.output_text || "";

  return NextResponse.json({ ok: true, text: out, remaining: quota.remaining, limit: quota.limit });
}
