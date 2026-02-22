export default function Loading() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="grain sticker rounded-blob border border-line bg-card/70 p-10 text-center shadow-glow">
        <div className="mx-auto grid h-20 w-20 place-items-center rounded-full border-2 border-sky/25 bg-cloud shadow-sticker">
          <div className="text-4xl animate-bounce">✍️</div>
        </div>
        <div className="mt-5 text-sm font-extrabold tracking-tight">Loading…</div>
        <div className="mt-2 text-xs opacity-70">Preparing writing tools</div>
        <div className="mt-4 flex justify-center gap-2">
          <span className="h-2 w-2 rounded-full bg-sky/60 animate-pulse" />
          <span className="h-2 w-2 rounded-full bg-sky/60 animate-pulse [animation-delay:120ms]" />
          <span className="h-2 w-2 rounded-full bg-sky/60 animate-pulse [animation-delay:240ms]" />
        </div>
      </div>
    </div>
  );
}
