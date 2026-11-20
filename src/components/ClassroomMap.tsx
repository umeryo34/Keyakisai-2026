"use client";

import { booths, MAP_VIEW, PROJECTOR } from "@/data/booths";
import { cn } from "@/lib/cn";
import type { Booth } from "@/types/product";

interface ClassroomMapProps {
  focusedBoothId: string | null;
  onSelectBooth: (booth: Booth) => void;
}

const px = (value: number) => `${((value - MAP_VIEW.x) / MAP_VIEW.width) * 100}%`;
const py = (value: number) => `${((value - MAP_VIEW.y) / MAP_VIEW.height) * 100}%`;
const pw = (value: number) => `${(value / MAP_VIEW.width) * 100}%`;
const ph = (value: number) => `${(value / MAP_VIEW.height) * 100}%`;

export function ClassroomMap({ focusedBoothId, onSelectBooth }: ClassroomMapProps) {
  return (
    <section
      className="mx-auto"
      style={{ width: "min(100%, calc((100dvh - 150px) * 0.572))" }}
    >
      <div
        className="relative w-full overflow-hidden rounded-3xl bg-white ring-1 ring-rose-200 shadow-[0_8px_30px_rgba(255,107,129,0.15)]"
        style={{ aspectRatio: `${MAP_VIEW.width} / ${MAP_VIEW.height}` }}
      >
        <div
          className="absolute flex items-center justify-center rounded-md border border-rose-200 bg-rose-50"
          style={{
            left: px(PROJECTOR.x),
            top: py(PROJECTOR.y),
            width: pw(PROJECTOR.w),
            height: ph(PROJECTOR.h),
          }}
        >
          <span className="text-[10px] font-semibold tracking-[0.5em] text-rose-400 [writing-mode:vertical-rl]">
            プロジェクター
          </span>
        </div>

        {/* 中央の空きスペースにブース名の一覧 */}
        <ul
          className="absolute flex flex-col justify-center gap-[1px]"
          style={{
            left: px(150),
            width: pw(390),
            top: py(350),
            height: ph(830),
          }}
        >
          {booths.map((booth) => (
            <li key={booth.id}>
              <button
                type="button"
                onClick={() => onSelectBooth(booth)}
                className="flex w-full items-center gap-1.5 rounded-md px-1 py-[3px] text-left"
              >
                <span
                  className={cn(
                    "flex h-4 w-4 shrink-0 items-center justify-center rounded text-[9px] font-black",
                    booth.productId ? "bg-[#FF6B81] text-white" : "bg-rose-100 text-rose-400",
                  )}
                >
                  {booth.id}
                </span>
                <span
                  className={cn(
                    "truncate text-[10px] leading-tight",
                    booth.productId ? "font-semibold text-black" : "text-black/45",
                  )}
                >
                  {booth.name}
                  {booth.note ? `（${booth.note}）` : ""}
                </span>
              </button>
            </li>
          ))}
        </ul>

        {booths.map((booth) => {
          const focused = focusedBoothId === booth.id;
          return (
            <button
              key={booth.id}
              type="button"
              aria-label={`ブース${booth.id} ${booth.name}`}
              onClick={() => onSelectBooth(booth)}
              style={{
                left: px(booth.rect.x),
                top: py(booth.rect.y),
                width: pw(booth.rect.w),
                height: ph(booth.rect.h),
                transform: booth.rect.rot ? `rotate(${booth.rect.rot}deg)` : undefined,
              }}
              className={cn(
                "absolute flex items-center justify-center rounded-lg border text-sm font-black leading-none transition-all",
                booth.productId
                  ? "border-[#FF6B81] bg-[#FFB3C0] text-black"
                  : "border-rose-200 bg-rose-50 text-black/50",
                focused &&
                  "animate-table-pulse border-[#FF6B81] bg-[#FF6B81] text-white",
              )}
            >
              <span style={booth.rect.rot ? { transform: `rotate(${-booth.rect.rot}deg)` } : undefined}>
                {booth.id}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
