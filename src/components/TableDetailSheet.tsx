"use client";

import { AnimatePresence, motion } from "framer-motion";
import { tableMap } from "@/data/tables";
import { CATEGORY_BADGE } from "@/lib/labels";
import type { Product, TableId } from "@/types/product";

interface TableDetailSheetProps {
  tableId: TableId | null;
  products: Product[];
  onOpenProduct: (product: Product) => void;
}

export function TableDetailSheet({ tableId, products, onOpenProduct }: TableDetailSheetProps) {
  return (
    <div className="min-h-[168px]">
      <AnimatePresence mode="wait">
        {tableId ? (
          <motion.div
            key={tableId}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            className="space-y-3 rounded-3xl border border-white/8 bg-slate-900/85 p-4"
          >
            <div>
              <p className="text-xs font-semibold tracking-[0.16em] text-[#FF6B81]">
                {tableMap[tableId].name}
              </p>
              <p className="mt-1 text-sm text-slate-300">{tableMap[tableId].description}</p>
            </div>
            <div className="flex gap-3 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {products.map((product) => (
                <button
                  key={product.id}
                  type="button"
                  onClick={() => onOpenProduct(product)}
                  className="min-h-11 w-[220px] shrink-0 overflow-hidden rounded-2xl bg-slate-950 text-left ring-1 ring-white/8"
                >
                  <div className="aspect-video bg-slate-800">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={product.thumbnail} alt="" className="h-full w-full object-cover" />
                  </div>
                  <div className="space-y-1 px-3 py-2">
                    <p className="text-[10px] font-semibold text-rose-300">
                      {CATEGORY_BADGE[product.category]}
                    </p>
                    <p className="truncate text-sm font-semibold text-white">{product.title}</p>
                    <p className="truncate text-xs text-slate-400">{product.catchphrase}</p>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.p
            key="idle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="rounded-3xl border border-dashed border-white/10 px-4 py-8 text-center text-sm text-slate-400"
          >
            テーブルをタップすると、その場所の展示が出ます。
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
