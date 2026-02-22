export function HeroIllustration() {
  // No SVG illustration per requirement. Pure CSS blobs + emoji stickers.
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-blob" aria-hidden>
      {/* gradient blobs */}
      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-mint/20 blur-2xl" />
      <div className="absolute -right-24 -top-28 h-80 w-80 rounded-full bg-sky/20 blur-2xl" />
      <div className="absolute left-1/3 -bottom-28 h-96 w-96 rounded-full bg-lobster/15 blur-2xl" />

      {/* sticker emojis */}
      <div className="absolute right-16 top-16 grid h-16 w-16 place-items-center rounded-full border-2 border-white/15 bg-bg/30 shadow-sticker text-3xl">
        🧬
      </div>
      <div className="absolute right-20 bottom-14 grid h-14 w-14 place-items-center rounded-full border-2 border-white/15 bg-bg/30 shadow-sticker text-2xl">
        🦞
      </div>

      {/* soft lab-bench bar */}
      <div className="absolute bottom-10 left-10 right-10 h-20 rounded-blob border-2 border-white/10 bg-bg/25 shadow-sticker" />
    </div>
  );
}
