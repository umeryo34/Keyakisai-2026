export function Header() {
  return (
    <header className="shrink-0 border-b border-white/5 bg-slate-950/85 px-4 pb-3 pt-[max(0.75rem,env(safe-area-inset-top))] backdrop-blur-xl">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-linear-to-br from-[#FF6B81] to-[#FF8E53] text-sm font-black text-white shadow-[0_8px_24px_rgba(255,107,129,0.35)]">
          P
        </div>
        <div className="min-w-0">
          <p className="text-[11px] font-medium tracking-[0.18em] text-rose-300/80">
            欅祭 2026 · PeachTech
          </p>
          <h1 className="truncate text-base font-semibold text-white">展示教室ポータル</h1>
        </div>
      </div>
    </header>
  );
}
