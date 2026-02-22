export function LobsterSvg({ className = "" }: { className?: string }) {
  // Lobster mark (inline SVG), styled via currentColor.
  // Emphasis on CLAWS (most recognizable lobster feature). Minimal/no antennae.
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      {/* big claws (icon-first) */}
      <path
        d="M6 38c-3-10 4-20 15-22 9-1 16 6 15 15-1 9-11 15-25 13"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M58 38c3-10-4-20-15-22-9-1-16 6-15 15 1 9 11 15 25 13"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {/* body */}
      <path
        d="M18 28c0-7 6-13 14-13s14 6 14 13v16c0 10-6 18-14 18s-14-8-14-18V28z"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinejoin="round"
      />

      {/* eyes */}
      <circle cx="28" cy="24" r="2.3" fill="currentColor" opacity="0.85" />
      <circle cx="36" cy="24" r="2.3" fill="currentColor" opacity="0.85" />

      {/* segments */}
      <path d="M22 33h20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.55" />
      <path d="M22 41h20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.55" />
      <path d="M22 49h20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.55" />

      {/* tiny tail fan */}
      <path
        d="M24 60c3-3 5-4 8-4s5 1 8 4"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.85"
      />
    </svg>
  );
}
