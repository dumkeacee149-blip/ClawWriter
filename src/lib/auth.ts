// IMPORTANT: this module must be Edge-safe because middleware runs on the Edge runtime.
// Keep it dependency-free (no Node 'crypto').

export const AUTH_COOKIE = "ai_gate";
export const AUTH_HEADER = "x-ai-token";

function mustEnv(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env: ${name}`);
  return v;
}

export function getAccessToken() {
  return mustEnv("AI_ACCESS_TOKEN");
}

/**
 * Minimal gate cookie value.
 *
 * Security model here is simple: this is an AI-only gated site; token acts as the shared secret.
 * If you need stronger guarantees (rotation, per-device tokens), switch to JWT or server sessions.
 */
export function makeCookieValue(token: string) {
  return token;
}

export function verifyCookieValue(cookieValue: string | undefined) {
  if (!cookieValue) return false;
  return cookieValue === getAccessToken();
}
