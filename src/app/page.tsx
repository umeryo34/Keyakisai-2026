"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Header } from "@/components/Header";
import { TabBar, type ViewMode } from "@/components/TabBar";
import { ProductList } from "@/components/ProductList";
import { ClassroomMap } from "@/components/ClassroomMap";
import { BoothNotice } from "@/components/BoothNotice";
import { ProductDrawer } from "@/components/ProductDrawer";
import { cn } from "@/lib/cn";
import { products } from "@/data/products";
import { getBoothByProduct } from "@/data/booths";
import type { Booth, Product } from "@/types/product";

export default function Home() {
  const [view, setView] = useState<ViewMode>("list");
  const [noticeBooth, setNoticeBooth] = useState<Booth | null>(null);
  const [focusedBoothId, setFocusedBoothId] = useState<string | null>(null);
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  const openBooth = (booth: Booth) => {
    const product = booth.productId ? products.find((item) => item.id === booth.productId) : undefined;
    if (product) setActiveProduct(product);
    else setNoticeBooth(booth);
  };

  const locateOnMap = (product: Product) => {
    const booth = getBoothByProduct(product.id);
    if (!booth) return;
    setView("map");
    setFocusedBoothId(booth.id);
    window.setTimeout(() => setFocusedBoothId(null), 2800);
  };

  return (
    <div className="mx-auto flex h-dvh w-full max-w-md flex-col overflow-hidden border-black/5 dark:border-white/5 bg-slate-50 dark:bg-slate-950 shadow-[0_0_80px_rgba(0,0,0,0.45)] md:border-x">
      <Header />

      <main
        className={cn(
          "relative z-0 min-h-0 flex-1 overflow-y-auto overflow-x-hidden",
          view === "map" ? "px-2 pt-2" : "px-4 pt-4",
        )}
      >
        <AnimatePresence mode="wait">
          {view === "list" ? (
            <motion.div
              key="list"
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 24 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              <ProductList products={products} onOpen={setActiveProduct} onLocate={locateOnMap} />
            </motion.div>
          ) : (
            <motion.div
              key="map"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="pb-2"
            >
              <ClassroomMap focusedBoothId={focusedBoothId} onSelectBooth={openBooth} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <TabBar view={view} onViewChange={setView} />
      <BoothNotice booth={noticeBooth} onClose={() => setNoticeBooth(null)} />
      <ProductDrawer product={activeProduct} onClose={() => setActiveProduct(null)} />
    </div>
  );
}
