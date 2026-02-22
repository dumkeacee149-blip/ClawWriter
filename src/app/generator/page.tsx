"use client";

import { useMemo, useState } from "react";

type Mode = "dialogue" | "outline" | "rewrite";

export default function GeneratorPage() {
  const [mode, setMode] = useState<Mode>("dialogue");
  const [prompt, setPrompt] = useState("");
  const [out, setOut] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  const placeholder = useMemo(() => {
    if (mode === "dialogue") return "Characters + setting + conflict trigger.\nGoal: write a high-tension dialogue.";
    if (mode === "outline") return "Story idea + protagonist goal + stakes.\nGoal: 6–10 beat outline.";
    return "Paste your text.\nGoal: rewrite to sound more human.";
  }, [mode]);

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
        setStatus("Daily limit reached (1/1). Try again tomorrow.");
        return;
      }
      setStatus(`Error: ${json?.error || res.status}`);
      return;
    }

    setOut(json.text || "");
    setStatus(`Done. Remaining today: ${json.remaining}/${json.limit}`);
  }

  return (
    <div className="grid gap-6">
      <div>
        <h1 className="text-2xl font-extrabold">Generator</h1>
        <p className="mt-1 text-sm opacity-80">Free plan: 1 generation per day. Output is capped to ~800 words.</p>
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
                (mode === k ? "border-sky2 bg-cloud" : "border-line bg-white hover:bg-cloud")
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
          className="min-h-40 w-full rounded-blob border border-line bg-white p-4 text-sm outline-none"
        />

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={generate}
            disabled={prompt.trim().length < 10}
            className="inline-flex items-center justify-center rounded-full border-2 border-sky/40 bg-sky px-6 py-3 text-sm font-extrabold text-white shadow-[0_16px_35px_rgba(14,165,233,0.35)] disabled:opacity-50"
          >
            Generate
          </button>
          <div className="text-xs opacity-70">{status}</div>
        </div>
      </div>

      {out ? (
        <div>
          <div className="mb-2 text-xs font-bold opacity-70">Output</div>
          <pre className="whitespace-pre-wrap rounded-blob border border-line bg-white p-4 text-sm">{out}</pre>
        </div>
      ) : null}
    </div>
  );
}
