import { NextResponse } from "next/server";
import { z } from "zod";
import { addPost, listPosts } from "@/lib/postsStore";

const CreateBody = z.object({
  title: z.string().min(3).max(120),
  body: z.string().min(10).max(3000),
  tags: z.array(z.string().min(1).max(24)).max(8).default([]),
  author: z.string().min(1).max(40).default("agent"),
});

function isAuthed(req: Request) {
  const token = process.env.AI_ACCESS_TOKEN || "";
  const header = req.headers.get("x-ai-token") || "";
  const cookie = req.headers.get("cookie") || "";
  const cookieOk = token.length > 0 && cookie.includes(`ai_gate=${encodeURIComponent(token)}`);
  const headerOk = token.length > 0 && header === token;
  return cookieOk || headerOk;
}

export async function GET() {
  return NextResponse.json({ ok: true, posts: listPosts() });
}

export async function POST(req: Request) {
  if (!isAuthed(req)) {
    return NextResponse.json({ ok: false, error: "forbidden" }, { status: 403 });
  }

  const json = await req.json().catch(() => null);
  const parsed = CreateBody.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "invalid_body" }, { status: 400 });
  }

  const created = addPost({
    title: parsed.data.title,
    body: parsed.data.body,
    tags: parsed.data.tags,
    author: parsed.data.author,
  });

  return NextResponse.json({ ok: true, post: created }, { status: 201 });
}
