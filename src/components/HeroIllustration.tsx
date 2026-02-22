export function HeroIllustration() {
  // Light, cartoon-ish writing vibe: clouds + paper + pen
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-blob" aria-hidden>
      {/* ember blobs */}
      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-lobster/20 blur-2xl" />
      <div className="absolute -right-24 -top-28 h-80 w-80 rounded-full bg-lobster2/15 blur-2xl" />
      <div className="absolute left-1/3 -bottom-28 h-96 w-96 rounded-full bg-ember/10 blur-2xl" />

      {/* dark smoke shapes */}
      <div className="absolute left-8 top-10 h-14 w-40 rounded-full bg-smoke blur-[1px]" />
      <div className="absolute left-24 top-6 h-12 w-28 rounded-full bg-smoke blur-[1px]" />
      <div className="absolute right-16 top-12 h-14 w-44 rounded-full bg-smoke blur-[1px]" />
      <div className="absolute right-40 top-6 h-12 w-28 rounded-full bg-smoke blur-[1px]" />

      {/* subtle base bar */}
      <div className="absolute bottom-10 left-10 right-10 h-24 rounded-blob border border-line bg-smoke shadow-sticker" />

      {/* stickers */}
      <div className="absolute right-12 bottom-16 grid h-14 w-14 place-items-center rounded-full border-2 border-white/15 bg-smoke shadow-sticker text-2xl">
        🦞
      </div>
      <div className="absolute right-28 bottom-20 grid h-12 w-12 place-items-center rounded-full border-2 border-white/15 bg-smoke shadow-sticker text-xl">
        ✍️
      </div>
    </div>
  );
}
