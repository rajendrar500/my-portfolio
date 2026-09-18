const THUMB_HEIGHT = "h-44 sm:h-48";

const ACCENT_BY_PROJECT: Record<string, string> = {
  salesloft: "from-sky-600/40 via-indigo-900/60 to-zinc-950",
  "prodigy-finance": "from-emerald-600/35 via-teal-950/70 to-zinc-950",
  "acceptpay-global": "from-violet-600/40 via-purple-950/70 to-zinc-950",
  bynder: "from-blue-600/35 via-slate-900/70 to-zinc-950",
};

export function ShowcaseProjectPlaceholder({
  projectId,
  projectName,
}: {
  projectId: string;
  projectName: string;
}) {
  const gradient = ACCENT_BY_PROJECT[projectId] ?? "from-purple-600/35 via-zinc-900 to-zinc-950";

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-purple-500/15 bg-zinc-950/80 ${THUMB_HEIGHT}`}
      aria-hidden="true"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(168,85,247,0.35), transparent 45%), radial-gradient(circle at 80% 70%, rgba(99,102,241,0.25), transparent 40%)",
        }}
      />
      <div className="relative flex h-full flex-col items-center justify-center px-4 text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-purple-200/80">Featured work</p>
        <p className="mt-2 text-lg font-bold tracking-tight text-white sm:text-xl">{projectName}</p>
      </div>
    </div>
  );
}
