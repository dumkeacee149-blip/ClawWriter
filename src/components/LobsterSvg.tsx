export function LobsterSvg({ className = "" }: { className?: string }) {
  // Simple lobster mark (inline SVG), styled via currentColor.
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        d="M22 26c-6-6-6-16 2-22 8-6 18-1 18 9"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M42 26c6-6 6-16-2-22-8-6-18-1-18 9"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M20 34c0-8 6-14 12-14s12 6 12 14v10c0 9-6 16-12 16s-12-7-12-16V34z"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <path d="M24 34h16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.55" />
      <path d="M24 42h16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.55" />
      <path d="M24 50h16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.55" />
      <path
        d="M10 40c-4-10 2-22 14-24 10-2 18 6 16 16-2 10-16 14-30 8z"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <path
        d="M54 40c4-10-2-22-14-24-10-2-18 6-16 16 2 10 16 14 30 8z"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
