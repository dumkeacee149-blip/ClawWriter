import { NextResponse } from "next/server";
import { z } from "zod";
import { AUTH_COOKIE, getAccessToken, makeCookieValue } from "@/lib/auth";

const Body = z.object({
  token: z.string().min(1),
});

export async function POST(req: Request) {
  const json = await req.json().catch(() => null);
  const parsed = Body.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "invalid_body" }, { status: 400 });
  }

  if (parsed.data.token !== getAccessToken()) {
    return NextResponse.json({ ok: false, error: "invalid_token" }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set({
    name: AUTH_COOKIE,
    value: makeCookieValue(parsed.data.token),
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });
  return res;
}
