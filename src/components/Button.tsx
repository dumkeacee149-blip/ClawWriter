import Link from "next/link";
import { ReactNode } from "react";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-extrabold tracking-tight " +
  "border-2 border-white/15 bg-lobster text-white shadow-[0_18px_45px_rgba(255,45,85,0.35)] " +
  "hover:bg-lobster2 hover:translate-y-[-1px] active:translate-y-[0px] transition";

const ghost =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-extrabold tracking-tight " +
  "border-2 border-white/15 bg-card text-white/90 shadow-[0_16px_35px_rgba(0,0,0,0.35)] " +
  "hover:bg-card/70 hover:translate-y-[-1px] active:translate-y-[0px] transition";

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
