import Image from "next/image";
import peachTechIcon from "../assets/PeachTech-icon-no-text-no-back-.png";

export function Header() {
  return (
    <header className="shrink-0 border-b border-black/5 dark:border-white/5 bg-slate-50/85 dark:bg-slate-950/85 px-4 pb-3 pt-[max(0.75rem,env(safe-area-inset-top))] backdrop-blur-xl">
      <div className="flex items-center gap-3">
        {/* 背景のdivをなくし、Imageを直接大きく配置（shrink-0で潰れ防止） */}
        <Image
          src={peachTechIcon}
          alt="PeachTechアイコン"
          className="h-10 w-10 shrink-0 object-contain"
        />  
        <div className="min-w-0">
          <p className="text-[11px] font-medium tracking-[0.18em] text-rose-600/80 dark:text-rose-300/80">
            欅祭2026 PeachTech
          </p>
          <h1 className="truncate text-base font-semibold text-slate-900 dark:text-white">
            展示教室ポータル
          </h1>
        </div>
      </div>
    </header>
  );
}
