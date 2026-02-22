import Link from "next/link";
import { ReactNode } from "react";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-extrabold tracking-tight " +
  "border-2 border-sky/40 bg-sky text-white shadow-[0_16px_35px_rgba(14,165,233,0.35)] " +
  "hover:bg-sky2 hover:translate-y-[-1px] active:translate-y-[0px] transition";

const ghost =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-extrabold tracking-tight " +
  "border-2 border-sky/35 bg-white text-sky2 shadow-[0_14px_28px_rgba(2,6,23,0.10)] " +
  "hover:bg-cloud hover:translate-y-[-1px] active:translate-y-[0px] transition";

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
