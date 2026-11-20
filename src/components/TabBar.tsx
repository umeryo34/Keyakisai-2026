"use client";

import { LayoutGrid, Map } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

export type ViewMode = "list" | "map";

interface TabBarProps {
  view: ViewMode;
  onViewChange: (view: ViewMode) => void;
}

const TABS: { id: ViewMode; label: string; icon: typeof LayoutGrid }[] = [
  { id: "list", label: "プロダクト一覧", icon: LayoutGrid },
  { id: "map", label: "教室マップ", icon: Map },
];

export function TabBar({ view, onViewChange }: TabBarProps) {
  return (
    <nav className="relative z-20 shrink-0 border-t border-black/5 dark:border-white/5 bg-slate-50 dark:bg-slate-950 px-3 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
      <div className="relative grid grid-cols-2 rounded-2xl bg-white/90 dark:bg-slate-900/90 p-1 ring-1 ring-black/8 dark:ring-white/8">
        {TABS.map((tab) => {
          const Icon = tab.icon;
          const active = view === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onViewChange(tab.id)}
              className={cn(
                "relative z-10 flex min-h-11 items-center justify-center gap-1.5 rounded-xl px-2 text-sm font-medium transition-colors",
                active ? "text-white" : "text-slate-400",
              )}
            >
              {active ? (
                <motion.span
                  layoutId="segment-pill"
                  className="absolute inset-0 rounded-xl bg-linear-to-r from-[#FF6B81] to-[#FF8E53] shadow-lg"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              ) : null}
              <Icon className="relative h-4 w-4" />
              <span className="relative">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
