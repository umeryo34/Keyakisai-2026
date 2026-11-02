"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Header } from "@/components/Header";
import { TabBar, type ViewMode } from "@/components/TabBar";
import { ProductList } from "@/components/ProductList";
import { ClassroomMap } from "@/components/ClassroomMap";
import { TableDetailSheet } from "@/components/TableDetailSheet";
import { ProductDrawer } from "@/components/ProductDrawer";
import { products, getProductsByTable } from "@/data/products";
import type { Product, TableId } from "@/types/product";

export default function Home() {
  const [view, setView] = useState<ViewMode>("list");
  const [selectedTableId, setSelectedTableId] = useState<TableId | null>(null);
  const [focusedTableId, setFocusedTableId] = useState<TableId | null>(null);
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  const locateOnMap = (product: Product) => {
    setView("map");
    setSelectedTableId(product.tableId);
    setFocusedTableId(product.tableId);
    window.setTimeout(() => setFocusedTableId(null), 2800);
  };

  return (
    <div className="mx-auto flex h-dvh w-full max-w-md flex-col overflow-hidden border-white/5 bg-slate-950 shadow-[0_0_80px_rgba(0,0,0,0.45)] md:border-x">
      <Header />

      <main className="relative z-0 min-h-0 flex-1 overflow-y-auto overflow-x-hidden px-4 pt-4">
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
              className="flex flex-col gap-4 pb-4"
            >
              <ClassroomMap
                selectedTableId={selectedTableId}
                focusedTableId={focusedTableId}
                onSelectTable={setSelectedTableId}
              />
              <TableDetailSheet
                tableId={selectedTableId}
                products={selectedTableId ? getProductsByTable(selectedTableId) : []}
                onOpenProduct={setActiveProduct}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <TabBar view={view} onViewChange={setView} />
      <ProductDrawer product={activeProduct} onClose={() => setActiveProduct(null)} />
    </div>
  );
}
