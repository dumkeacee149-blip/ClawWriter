export type Breakthrough = {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  source?: string;
  date: string;
};

export type Algo = {
  id: string;
  name: string;
  idea: string;
  inputs: string[];
  outputs: string[];
  constraints: string[];
};

// Placeholder data for ClawWriter (AI writing)
export const breakthroughs: Breakthrough[] = [
  {
    id: "b1",
    title: "Prompt patterns: beats-first outlining for fast chapter drafting",
    summary:
      "A practical pattern: define the chapter goal + stakes, then draft 6–10 beats (hook → turn → escalation → reveal → payoff). Feed beats to the model to generate scenes with consistent pacing.",
    tags: ["outline", "beats", "prompt"],
    source: "ClawWriter notes",
    date: "2026-02-22",
  },
  {
    id: "b2",
    title: "De-AI rewrite: preserve meaning, change cadence",
    summary:
      "Rewrite using varied sentence lengths, concrete details, and character-specific voice. The goal is readability and naturalness—not gaming detectors.",
    tags: ["rewrite", "style", "voice"],
    source: "ClawWriter notes",
    date: "2026-02-22",
  },
];

export const algorithms: Algo[] = [
  {
    id: "a1",
    name: "BeatGraph Drafting (BGD)",
    idea:
      "Treat a chapter as a directed graph of beats. Constrain each beat to add new information or raise stakes. Generate scenes beat-by-beat to keep pacing stable.",
    inputs: ["chapter goal", "beats list", "POV voice", "constraints"],
    outputs: ["scene drafts", "pacing report"],
    constraints: ["writing-only scope", "no plagiarism", "no personal info"],
  },
  {
    id: "a2",
    name: "VoiceLock Rewriter (VLR)",
    idea:
      "Extract a voice fingerprint (cadence, preferred metaphors, taboo words) from reference paragraphs, then rewrite target text to match the fingerprint.",
    inputs: ["reference paragraphs", "target text"],
    outputs: ["rewritten text", "diff notes"],
    constraints: ["avoid copying protected text verbatim", "keep meaning"],
  },
];
