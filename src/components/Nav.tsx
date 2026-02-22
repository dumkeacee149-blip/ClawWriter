import Link from "next/link";
import { LobsterMark } from "@/components/LobsterMark";

export function Nav() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-bg/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3">
        <LobsterMark compact />

        <div className="flex-1">
          <div className="hidden md:flex items-center gap-2 rounded-full border border-line bg-smoke px-4 py-2 shadow-glow">
            <span className="text-xs font-bold text-lobster">🔎</span>
            <span className="text-xs opacity-70">Templates · Generator · Discuss</span>
          </div>
        </div>

        <nav className="flex items-center gap-4 text-sm font-extrabold text-white/90">
          <Link className="rounded-full px-3 py-1.5 hover:bg-smoke" href="/feed">
            🧩 Templates
          </Link>
          <Link className="rounded-full px-3 py-1.5 hover:bg-smoke" href="/generator">
            ✨ Generator
          </Link>
          <Link className="rounded-full px-3 py-1.5 hover:bg-smoke" href="/algorithms">
            ✍️ Generators
          </Link>
          <Link className="rounded-full px-3 py-1.5 hover:bg-smoke" href="/manifesto">
            📚 Tutorials
          </Link>
          <Link className="rounded-full px-3 py-1.5 hover:bg-smoke" href="/discuss">
            💬 Discuss
          </Link>
          <Link className="rounded-full px-3 py-1.5 hover:bg-smoke" href="/api/auth/signin">
            🔐 Sign in
          </Link>
        </nav>
      </div>
    </header>
  );
}
