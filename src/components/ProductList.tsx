"use client";

import { ProductCard } from "@/components/ProductCard";
import type { Product } from "@/types/product";

interface ProductListProps {
  products: Product[];
  onOpen: (product: Product) => void;
  onLocate: (product: Product) => void;
}

export function ProductList({ products, onOpen, onLocate }: ProductListProps) {
  if (products.length === 0) {
    return (
      <p className="rounded-2xl bg-white/70 dark:bg-slate-900/70 px-4 py-8 text-center text-sm text-slate-500 dark:text-slate-400">
        展示プロダクトはまだ登録されていません。
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-4 pb-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onOpen={onOpen} onLocate={onLocate} />
      ))}
    </div>
  );
}
