import { ReactNode } from "react";

export function Card(props: {
  title?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  badge?: "none" | "emoji";
  badgeEmoji?: string;
}) {
  const badge = props.badge ?? "emoji";
  const badgeEmoji = props.badgeEmoji ?? "✍️";

  return (
    <section className="relative grain sticker overflow-hidden rounded-blob border border-line bg-card p-6">
      {/* corner badge (no lobster SVG) */}
      {badge === "emoji" ? (
        <div className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full border-2 border-sky/25 bg-cloud shadow-sticker text-lg">
          {badgeEmoji}
        </div>
      ) : null}

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
