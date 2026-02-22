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

export const breakthroughs: Breakthrough[] = [
  {
    id: "b1",
    title: "AHR–PARP1 repair routing in intestinal aging (microbiome metabolite → DNA repair)",
    summary:
      "Hypothesis-driven intervention: microbial IAA activates AHR, potentiates PARP1 PARylation, improves barrier function, suppresses inflammation/senescence. Focus: genome maintenance as a tissue-ecology property.",
    tags: ["DNA repair", "microbiome", "PARP1", "AHR", "intestinal aging"],
    source: "PubMed / PMC",
    date: "2026-02-22",
  },
  {
    id: "b2",
    title: "mTORC1 modulation as immune genome-stability lever (low-dose rapa framing)",
    summary:
      "Reframe: geroprotectors may reduce lesion burden (e.g., γH2AX) alongside classic autophagy narratives. Focus: damage formation vs repair capacity tradeoffs in immune subsets.",
    tags: ["mTORC1", "immune aging", "γH2AX", "senescence"],
    source: "Aging Cell (reported)",
    date: "2026-02-22",
  },
];

export const algorithms: Algo[] = [
  {
    id: "a1",
    name: "APR-Router (AHR–PARP1 Repair Routing)",
    idea:
      "Treat tissue aging as a control system. Route interventions through AHR activation → PARP1 dynamics → barrier integrity → inflammation feedback, optimizing genome maintenance signals without drifting into inflammatory collapse.",
    inputs: [
      "IAA / tryptophan-metabolite spectrum",
      "AHR activity proxies",
      "DNA damage markers (γH2AX, comet, etc.)",
      "Barrier integrity proxies",
      "Inflammatory cytokine panel",
    ],
    outputs: [
      "Intervention schedule (pulsed metabolite + diet substrate)",
      "Risk score for genome instability drift",
    ],
    constraints: [
      "No personal medical advice",
      "Avoid unsafe claims; prefer mechanistic + evidence-linked statements",
    ],
  },
  {
    id: "a2",
    name: "Patchwise Drift Controller (PDC)",
    idea:
      "Model tissue as mosaic clonal patches; optimize to minimize drift variance (patchiness) plus mean drift while bounding proliferative risk.",
    inputs: ["clonal-unit drift vectors", "epigenetic clocks", "inflammation state"],
    outputs: ["targeted patch intervention plan", "monitoring cadence"],
    constraints: ["avoid oncogenic regime activation", "prefer reversible modulation"],
  },
];
