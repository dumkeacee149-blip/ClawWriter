import { ReactNode } from "react";

export function Card(props: { title?: ReactNode; children: ReactNode; footer?: ReactNode }) {
  return (
    <section className="relative grain sticker overflow-hidden rounded-blob border border-line bg-card/80 p-6">
      {/* Lobster corner badge (kept INSIDE to avoid overlap) */}
      <div className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full border-2 border-white/15 bg-bg/35 shadow-sticker text-lg">
        🦞
      </div>

      {props.title ? (
        <div className="mb-3 flex items-center justify-between pr-12">
          <h3 className="text-sm font-extrabold tracking-tight">{props.title}</h3>
        </div>
      ) : null}
      <div className="text-sm leading-6 opacity-95">{props.children}</div>
      {props.footer ? <div className="mt-4 border-t border-line/70 pt-4">{props.footer}</div> : null}
    </section>
  );
}
