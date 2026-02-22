import Link from "next/link";
import { ReactNode } from "react";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-extrabold tracking-tight " +
  "border-2 border-white/20 bg-white text-black shadow-[0_10px_30px_rgba(0,0,0,0.45)] " +
  "hover:bg-white/90 hover:translate-y-[-1px] active:translate-y-[0px] transition";

const ghost =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-extrabold tracking-tight " +
  "border-2 border-white/20 bg-bg/30 text-white shadow-[0_10px_30px_rgba(0,0,0,0.35)] " +
  "hover:bg-bg/50 hover:translate-y-[-1px] active:translate-y-[0px] transition";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
}) {
  return (
    <Link href={href} className={(variant === "primary" ? base : ghost) + " " + className}>
      {children}
    </Link>
  );
}
