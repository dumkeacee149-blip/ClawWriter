"use client";

import { useMemo, useState } from "react";

type Mode = "dialogue" | "outline" | "rewrite";

export default function GeneratorPage() {
  const [mode, setMode] = useState<Mode>("dialogue");
  const [prompt, setPrompt] = useState("");
  const [out, setOut] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [quotaReached, setQuotaReached] = useState(false);
  const [resetIn, setResetIn] = useState<string>("");

  const placeholder = useMemo(() => {
    if (mode === "dialogue")
      return "Characters + setting + conflict trigger.\nAdd: stakes, subtext, emotional turns.";
    if (mode === "outline")
      return "Story idea + protagonist goal + stakes.\nOutput: 6–10 beats with pacing notes.";
    return "Paste your paragraph.\nRewrite: keep meaning, improve cadence & voice.";
  }, [mode]);

  function computeResetInShanghai() {
    const now = new Date();
    // Compute next Asia/Shanghai midnight by formatting date parts.
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Shanghai",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    }).formatToParts(now);

    const get = (t: string) => parts.find((p) => p.type === t)?.value || "00";
    const y = Number(get("year"));
    const m = Number(get("month"));
    const d = Number(get("day"));

    // Build a Date for Shanghai midnight in UTC by using the +08:00 offset.
    // next midnight = (y-m-d) 24:00:00 +08
    const shNextMidnightUtc = Date.UTC(y, m - 1, d, 16, 0, 0) + 24 * 60 * 60 * 1000;
    const diffMs = Math.max(0, shNextMidnightUtc - now.getTime());

    const totalSec = Math.floor(diffMs / 1000);
    const hh = String(Math.floor(totalSec / 3600)).padStart(2, "0");
    const mm = String(Math.floor((totalSec % 3600) / 60)).padStart(2, "0");
    return `${hh}:${mm}`;
  }

  async function generate() {
    setStatus("Generating…");
    setOut("");

    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ mode, prompt }),
    });

    if (res.status === 401) {
      setStatus("Please log in first.");
      return;
    }

    const json = await res.json().catch(() => null);
    if (!res.ok) {
      if (json?.error === "quota_exceeded") {
        setQuotaReached(true);
        setResetIn(computeResetInShanghai());
        setStatus("Daily limit reached (50/day total). Try again tomorrow.");
        return;
      }
      setStatus(`Error: ${json?.error || res.status}`);
      return;
    }

    setQuotaReached(false);
    setOut(json.text || "");
    setStatus(`Done. Remaining today: ${json.remaining}/${json.limit}`);
  }

  return (
    <div className="grid gap-6">
      <div>
        <h1 className="text-2xl font-extrabold">Generator</h1>
        <p className="mt-1 text-sm opacity-80">Agent-only. Daily total cap: 50 generations. Output is capped to ~800 words.</p>
        <p className="mt-1 text-xs opacity-70">Requires GitHub sign-in + agent token match.</p>
      </div>

      <div className="grid gap-3">
        <label className="text-xs font-bold opacity-70">Mode</label>
        <div className="flex flex-wrap gap-2">
          {([
            ["dialogue", "Dialogue"],
            ["outline", "Outline"],
            ["rewrite", "Rewrite"],
          ] as const).map(([k, label]) => (
            <button
              key={k}
              onClick={() => setMode(k)}
              className={
                "rounded-full border-2 px-4 py-2 text-sm font-extrabold transition " +
                (mode === k
                  ? "border-white/20 bg-card text-white"
                  : "border-white/15 bg-white text-black hover:bg-white/90")
              }
            >
              {label}
            </button>
          ))}
        </div>

        <label className="mt-2 text-xs font-bold opacity-70">Input</label>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder={placeholder}
          className="min-h-40 w-full rounded-blob border border-white/15 bg-white p-4 text-sm text-black placeholder:text-black/40 outline-none"
        />

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={generate}
            disabled={quotaReached || prompt.trim().length < 10}
            className="inline-flex items-center justify-center rounded-full border-2 border-white/15 bg-lobster px-6 py-3 text-sm font-extrabold text-white shadow-[0_18px_45px_rgba(255,45,85,0.35)] disabled:opacity-50"
          >
            Generate
          </button>

          <div className="rounded-full border border-white/10 bg-smoke px-3 py-2 text-xs text-white/80">
            {status || "Ready."}
          </div>
        </div>
      </div>

      {out ? (
        <div>
          <div className="mb-2 text-xs font-bold opacity-70">Output</div>
          <pre className="whitespace-pre-wrap rounded-blob border border-line bg-white p-4 text-sm">{out}</pre>
        </div>
      ) : quotaReached ? (
        <div className="rounded-blob border border-line bg-card p-4 text-sm">
          <div className="mb-1 font-extrabold">No output</div>
          <div className="opacity-80">
            Daily limit reached (50/day total). Next reset in <span className="font-extrabold">{resetIn || "--:--"}</span> (Asia/Shanghai).
          </div>
        </div>
      ) : null}
    </div>
  );
}
