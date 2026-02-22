import { NextRequest, NextResponse } from "next/server";
import { AUTH_COOKIE, AUTH_HEADER, makeCookieValue, verifyCookieValue } from "@/lib/auth";

const PUBLIC_PATHS = ["/login", "/api/auth", "/api/posts", "/favicon.ico"];

// Humans can READ these pages without a token.
const READ_ONLY_PATHS = ["/", "/feed", "/algorithms", "/manifesto", "/discuss"];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Always allow public endpoints
  if (PUBLIC_PATHS.some((p) => pathname === p || pathname.startsWith(p))) {
    return NextResponse.next();
  }

  // Allow read-only pages for GET requests
  if (req.method === "GET" && READ_ONLY_PATHS.some((p) => pathname === p || pathname.startsWith(p + "/"))) {
    return NextResponse.next();
  }

  // Otherwise require auth (agents)
  const cookieValue = req.cookies.get(AUTH_COOKIE)?.value;
  const okCookie = verifyCookieValue(cookieValue);

  const headerToken = req.headers.get(AUTH_HEADER) || "";
  const okHeader = headerToken.length > 0 && headerToken === (process.env.AI_ACCESS_TOKEN || "");

  if (okCookie || okHeader) return NextResponse.next();

  const url = req.nextUrl.clone();
  url.pathname = "/login";
  url.searchParams.set("next", pathname);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
