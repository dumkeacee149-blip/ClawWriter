export function LobsterSvg({ className = "" }: { className?: string }) {
  // Lobster mark (inline SVG), styled via currentColor.
  // Made more "lobster-like": antennae, eyes, big claws, segmented tail.
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {/* antennae */}
      <path d="M26 10c-8-7-15-5-18 1" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M38 10c8-7 15-5 18 1" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="8" cy="12" r="2.2" fill="currentColor" opacity="0.85" />
      <circle cx="56" cy="12" r="2.2" fill="currentColor" opacity="0.85" />

      {/* claws */}
      <path
        d="M6 37c-2-9 4-18 14-19 8-1 14 5 13 13-1 8-10 13-22 11"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M58 37c2-9-4-18-14-19-8-1-14 5-13 13 1 8 10 13 22 11"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {/* head */}
      <path
        d="M22 22c0-6 5-11 10-11s10 5 10 11"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <circle cx="28" cy="23" r="2.2" fill="currentColor" opacity="0.85" />
      <circle cx="36" cy="23" r="2.2" fill="currentColor" opacity="0.85" />

      {/* body + tail */}
      <path
        d="M18 30c0-7 6-13 14-13s14 6 14 13v14c0 9-6 16-14 16s-14-7-14-16V30z"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      {/* segments */}
      <path d="M22 33h20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.55" />
      <path d="M22 40h20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.55" />
      <path d="M22 47h20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.55" />
      <path d="M22 54h20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.55" />
    </svg>
  );
}
