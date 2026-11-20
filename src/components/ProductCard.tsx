"use client";

import { ExternalLink, MapPin } from "lucide-react";
import { getBoothByProduct } from "@/data/booths";
import { formatAuthors } from "@/lib/labels";
import { cn } from "@/lib/cn";
import type { Product } from "@/types/product";

function hasQuickLink(product: Product) {
  return Boolean(
    product.links.web || product.links.slide,
  );
}

interface ProductCardProps {
  product: Product;
  onOpen: (product: Product) => void;
  onLocate: (product: Product) => void;
}

export function ProductCard({ product, onOpen, onLocate }: ProductCardProps) {
  const booth = getBoothByProduct(product.id);
  return (
    <article className="overflow-hidden rounded-3xl border border-black/8 dark:border-white/8 bg-white/80 dark:bg-slate-900/80 shadow-[0_18px_40px_rgba(0,0,0,0.28)]">
      <button type="button" onClick={() => onOpen(product)} className="block w-full text-left">
        <div className="relative aspect-video overflow-hidden bg-slate-200 dark:bg-slate-800">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.thumbnail}
            alt=""
            className="h-full w-full bg-rose-100 dark:bg-[#f4f1ec] object-contain"
          />
          <div className="absolute inset-x-3 top-3 flex gap-2">
            {booth ? (
              <span className="rounded-full bg-[#FF6B81]/90 px-2.5 py-1 text-[11px] font-semibold text-white">
                ブース {booth.id}
              </span>
            ) : null}
          </div>
        </div>
        <div className="space-y-1.5 px-4 pt-4">
          <h2 className="text-[17px] font-semibold tracking-tight text-slate-900 dark:text-white">{product.title}</h2>
          <p className="truncate text-sm text-slate-600 dark:text-slate-300">{product.catchphrase}</p>
          <p className="text-xs text-slate-500">{formatAuthors(product.authors, product.team)}</p>
        </div>
      </button>

      {booth || hasQuickLink(product) ? (
        <div className="flex gap-2 px-3 pb-3 pt-3">
          {booth ? (
            <button
              type="button"
              onClick={() => onLocate(product)}
              className="flex min-h-11 flex-1 items-center justify-center gap-1.5 rounded-2xl bg-black/6 dark:bg-white/6 px-3 text-xs font-semibold text-slate-900 dark:text-white ring-1 ring-black/10 dark:ring-white/10"
            >
              <MapPin className="h-4 w-4 text-[#FF6B81]" />
              マップで場所を見る
            </button>
          ) : null}
          <QuickLink product={product} />
        </div>
      ) : (
        <div className="h-3" />
      )}
    </article>
  );
}

function QuickLink({ product }: { product: Product }) {
  const link = product.links.web ?? product.links.slide;
  if (!link) return null;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "flex min-h-11 min-w-11 items-center justify-center gap-1.5 rounded-2xl px-3 text-xs font-semibold",
        "bg-linear-to-r from-[#FF6B81] to-[#FF8E53] text-white",
      )}
    >
      <ExternalLink className="h-4 w-4" />
      {product.links.web ? "Webを開く" : "スライド"}
    </a>
  );
}
