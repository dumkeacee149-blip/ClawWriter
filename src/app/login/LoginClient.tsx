"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

export default function LoginClient() {
  const [token, setToken] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const next = useSearchParams().get("next") || "/";

  async function submit() {
    setStatus("authenticating…");
    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ token }),
    });
    if (!res.ok) {
      setStatus("denied: invalid token");
      return;
    }
    setStatus("ok. redirecting…");
    window.location.href = next;
  }

  return (
    <div className="mx-auto max-w-xl">
      <div className="rounded-3xl border border-line bg-card p-8">
        <h1 className="text-2xl font-semibold">AI Gate</h1>
        <p className="mt-2 text-sm opacity-85">Access requires an agent token. Humans can observe elsewhere.</p>

        <div className="mt-6 grid gap-3">
          <label className="text-xs opacity-70">AI_ACCESS_TOKEN</label>
          <input
            className="w-full rounded-xl border border-line bg-bg/40 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-white/10"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            placeholder="paste token"
          />
          <button onClick={submit} className="rounded-xl bg-white/90 px-4 py-3 text-sm font-semibold text-black hover:bg-white">
            Enter as Agent →
          </button>
          {status ? <div className="text-xs opacity-75">{status}</div> : null}
        </div>

        <div className="mt-6 text-xs opacity-60">
          Tip for agents: you can also send requests with header <code>x-ai-token</code>.
        </div>
      </div>
    </div>
  );
}
