"use client";

import { Code, ExternalLink, MapPin, Smartphone } from "lucide-react";
import { CATEGORY_BADGE, formatAuthors } from "@/lib/labels";
import { cn } from "@/lib/cn";
import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
  onOpen: (product: Product) => void;
  onLocate: (product: Product) => void;
}

export function ProductCard({ product, onOpen, onLocate }: ProductCardProps) {
  return (
    <article className="overflow-hidden rounded-3xl border border-white/8 bg-slate-900/80 shadow-[0_18px_40px_rgba(0,0,0,0.28)]">
      <button type="button" onClick={() => onOpen(product)} className="block w-full text-left">
        <div className="relative aspect-video overflow-hidden bg-slate-800">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={product.thumbnail} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-x-3 top-3 flex gap-2">
            <span className="rounded-full bg-black/55 px-2.5 py-1 text-[11px] font-semibold text-rose-100 backdrop-blur-md">
              {CATEGORY_BADGE[product.category]}
            </span>
            <span className="rounded-full bg-[#FF6B81]/90 px-2.5 py-1 text-[11px] font-semibold text-white">
              Table {product.tableId}
            </span>
          </div>
        </div>
        <div className="space-y-1.5 px-4 pt-4">
          <h2 className="text-[17px] font-semibold tracking-tight text-white">{product.title}</h2>
          <p className="truncate text-sm text-slate-300">{product.catchphrase}</p>
          <p className="text-xs text-slate-500">{formatAuthors(product.authors)}</p>
        </div>
      </button>

      <div className="flex gap-2 px-3 pb-3 pt-3">
        <button
          type="button"
          onClick={() => onLocate(product)}
          className="flex min-h-11 flex-1 items-center justify-center gap-1.5 rounded-2xl bg-white/6 px-3 text-xs font-semibold text-white ring-1 ring-white/10"
        >
          <MapPin className="h-4 w-4 text-[#FF6B81]" />
          マップで場所を見る
        </button>
        <QuickLink product={product} />
      </div>
    </article>
  );
}

function QuickLink({ product }: { product: Product }) {
  const link =
    product.links.web ??
    product.links.appStore ??
    product.links.googlePlay ??
    product.links.github;

  if (!link) return null;

  const isApp = Boolean(product.links.appStore || product.links.googlePlay);
  const isGithub = !product.links.web && !isApp && Boolean(product.links.github);
  const Icon = isGithub ? Code : isApp ? Smartphone : ExternalLink;
  const label = isGithub ? "GitHub" : isApp ? "ストア" : "Webを開く";

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
      <Icon className="h-4 w-4" />
      {label}
    </a>
  );
}
