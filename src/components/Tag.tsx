export function Tag({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line bg-bg/30 px-2 py-0.5 text-xs opacity-90">
      {children}
    </span>
  );
}
