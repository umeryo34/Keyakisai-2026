"use client";

import { tables } from "@/data/tables";
import { cn } from "@/lib/cn";
import type { TableId } from "@/types/product";

interface ClassroomMapProps {
  selectedTableId: TableId | null;
  focusedTableId: TableId | null;
  onSelectTable: (tableId: TableId) => void;
}

export function ClassroomMap({
  selectedTableId,
  focusedTableId,
  onSelectTable,
}: ClassroomMapProps) {
  return (
    <section className="rounded-[28px] border border-cyan-300/15 bg-[#07111f] p-3 shadow-[inset_0_0_80px_rgba(14,116,144,0.18)]">
      <div className="mb-2 flex items-center justify-between px-1 text-[10px] font-semibold tracking-[0.2em] text-cyan-200/70">
        <span>CLASSROOM BLUEPRINT</span>
        <span>ROOM 3204</span>
      </div>

      <div className="relative aspect-4/5 overflow-hidden rounded-3xl bg-[#081525] blueprint-grid ring-1 ring-cyan-400/20">
        <p className="absolute left-1/2 top-1.5 z-10 -translate-x-1/2 rounded-full bg-slate-950/80 px-3 py-1 text-[10px] font-semibold tracking-widest text-cyan-100">
          黒板・演台側
        </p>
        <p className="absolute bottom-1.5 left-1/2 z-10 -translate-x-1/2 rounded-full bg-slate-950/80 px-3 py-1 text-[10px] font-semibold tracking-widest text-cyan-100">
          出入口（廊下側）
        </p>
        <p className="absolute left-2 top-1/2 z-10 -translate-y-1/2 text-[10px] font-semibold tracking-[0.35em] text-sky-200/80 [writing-mode:vertical-rl]">
          窓側
        </p>
        <p className="absolute right-2 top-1/2 z-10 -translate-y-1/2 text-[10px] font-semibold tracking-[0.35em] text-amber-100/80 [writing-mode:vertical-rl]">
          廊下
        </p>

        <div className="absolute left-[10%] right-[10%] top-[8%] h-[6%] rounded-md border border-cyan-200/40 bg-cyan-300/10" />
        <div className="absolute left-[38%] top-[14.5%] h-[4%] w-[24%] rounded-sm border border-orange-300/40 bg-orange-400/15" />
        <div className="absolute bottom-[8%] right-[4%] flex h-[7%] w-[12%] items-center justify-center rounded-md border border-rose-300/50 bg-rose-400/20 text-[9px] font-bold text-rose-100">
          IN
        </div>

        {tables.map((table) => {
          const selected = selectedTableId === table.id;
          const focused = focusedTableId === table.id;
          return (
            <button
              key={table.id}
              type="button"
              onClick={() => onSelectTable(table.id)}
              style={table.position}
              className={cn(
                "absolute flex min-h-11 flex-col items-center justify-center rounded-2xl border text-center transition-all",
                selected
                  ? "border-[#FF6B81] bg-[#FF6B81]/20 text-white shadow-[0_0_24px_rgba(255,107,129,0.55)]"
                  : "border-cyan-300/30 bg-slate-900/70 text-cyan-50 hover:border-cyan-200/70",
                focused && "animate-table-pulse",
              )}
            >
              <span className="text-[11px] font-semibold tracking-wide text-cyan-100/80">TABLE</span>
              <span className="text-xl font-black leading-none">{table.id}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
