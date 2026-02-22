import Link from "next/link";

export function Mascot({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "flex items-center gap-2" : "flex items-center gap-3"}>
      <div className={compact ? "h-10 w-10" : "h-14 w-14"} aria-hidden>
        {/* Lobster doctor mascot (SVG) — make lobster features obvious: antennae + segmented tail + big claws */}
        <svg viewBox="0 0 96 96" className="h-full w-full drop-shadow-[0_12px_28px_rgba(0,0,0,0.55)]">
          <defs>
            <linearGradient id="lob" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0" stopColor="#FF2D55" />
              <stop offset="1" stopColor="#FF8FAB" />
            </linearGradient>
          </defs>

          {/* glow */}
          <circle cx="48" cy="48" r="44" fill="rgba(56,189,248,0.12)" />
          <circle cx="48" cy="48" r="40" fill="rgba(110,231,183,0.10)" />

          {/* antennae */}
          <path d="M42 18c-10-8-18-6-22 2" stroke="rgba(255,255,255,0.70)" strokeWidth="3" strokeLinecap="round" fill="none" />
          <path d="M54 18c10-8 18-6 22 2" stroke="rgba(255,255,255,0.70)" strokeWidth="3" strokeLinecap="round" fill="none" />
          <circle cx="20" cy="21" r="3" fill="#38BDF8" />
          <circle cx="76" cy="21" r="3" fill="#38BDF8" />

          {/* head */}
          <ellipse cx="48" cy="38" rx="18" ry="16" fill="url(#lob)" />

          {/* eyes */}
          <circle cx="41" cy="36" r="3.5" fill="rgba(0,0,0,0.55)" />
          <circle cx="55" cy="36" r="3.5" fill="rgba(0,0,0,0.55)" />
          <circle cx="40" cy="35" r="1" fill="rgba(255,255,255,0.55)" />
          <circle cx="54" cy="35" r="1" fill="rgba(255,255,255,0.55)" />

          {/* smile */}
          <path d="M43 44c3 3 7 3 10 0" stroke="rgba(0,0,0,0.55)" strokeWidth="3" strokeLinecap="round" fill="none" />

          {/* segmented tail/body */}
          <path d="M30 52c0-6 8-10 18-10s18 4 18 10v16c0 10-8 18-18 18s-18-8-18-18V52z" fill="url(#lob)" />
          <path d="M34 56h28" stroke="rgba(0,0,0,0.18)" strokeWidth="4" strokeLinecap="round" />
          <path d="M34 64h28" stroke="rgba(0,0,0,0.18)" strokeWidth="4" strokeLinecap="round" />
          <path d="M34 72h28" stroke="rgba(0,0,0,0.18)" strokeWidth="4" strokeLinecap="round" />

          {/* big claws */}
          <path d="M12 58c-4-10 2-22 14-24 10-2 18 6 16 16-2 10-16 14-30 8z" fill="url(#lob)" />
          <path d="M84 58c4-10-2-22-14-24-10-2-18 6-16 16 2 10 16 14 30 8z" fill="url(#lob)" />
          <path d="M18 43c8 6 10 12 8 18" stroke="rgba(255,255,255,0.30)" strokeWidth="3" strokeLinecap="round" fill="none" />
          <path d="M78 43c-8 6-10 12-8 18" stroke="rgba(255,255,255,0.30)" strokeWidth="3" strokeLinecap="round" fill="none" />

          {/* stethoscope */}
          <path d="M34 60c0 10 7 18 14 18s14-8 14-18" stroke="rgba(56,189,248,0.90)" strokeWidth="4" fill="none" strokeLinecap="round" />
          <circle cx="48" cy="78" r="5.5" fill="rgba(56,189,248,0.92)" />

          {/* medical headband cross */}
          <rect x="44" y="22" width="8" height="18" rx="2" fill="#22C55E" />
          <rect x="38" y="28" width="20" height="8" rx="2" fill="#22C55E" />

          {/* tiny DNA helix */}
          <path d="M60 66c-4-4-4-8 0-12" stroke="rgba(255,255,255,0.70)" strokeWidth="2" fill="none" />
          <path d="M68 66c4-4 4-8 0-12" stroke="rgba(255,255,255,0.70)" strokeWidth="2" fill="none" />
          <path d="M60 60h8" stroke="rgba(255,255,255,0.55)" strokeWidth="2" />
          <path d="M60 64h8" stroke="rgba(255,255,255,0.55)" strokeWidth="2" />
        </svg>
      </div>

      <div className="leading-tight">
        <Link href="/" className="font-extrabold tracking-tight">
          MoltClinic
        </Link>
        <div className="text-xs opacity-70">Cartoon lobster doctor • AI medicine</div>
      </div>
    </div>
  );
}
