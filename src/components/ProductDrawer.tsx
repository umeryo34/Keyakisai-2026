"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Globe, Presentation, Video, X } from "lucide-react";
import { useEffect } from "react";
import { getBoothByProduct } from "@/data/booths";
import { formatAuthors } from "@/lib/labels";
import type { Product } from "@/types/product";

interface ProductDrawerProps {
  product: Product | null;
  onClose: () => void;
}

export function ProductDrawer({ product, onClose }: ProductDrawerProps) {
  useEffect(() => {
    if (!product) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [product]);

  return (
    <AnimatePresence>
      {product ? (
        <motion.div
          className="fixed inset-0 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            aria-label="閉じる"
            className="absolute inset-0 bg-black/60"
            onClick={onClose}
          />
          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-drawer-title"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 34 }}
            className="absolute inset-x-0 bottom-0 mx-auto max-h-[86vh] w-full max-w-md overflow-y-auto rounded-t-[28px] border border-black/10 dark:border-white/10 bg-slate-50 dark:bg-slate-950 pb-[max(1.25rem,env(safe-area-inset-bottom))] shadow-[0_-20px_80px_rgba(0,0,0,0.45)]"
          >
            <div className="sticky top-0 z-10 flex h-16 items-center justify-center bg-slate-50/95 dark:bg-slate-950/95 px-4 backdrop-blur">
              <div className="h-1.5 w-12 rounded-full bg-black/20 dark:bg-white/20" />
              <button
                type="button"
                onClick={onClose}
                className="absolute right-3 top-1/2 flex h-11 -translate-y-1/2 w-11 items-center justify-center rounded-full bg-black/8 dark:bg-white/8 text-slate-900 dark:text-white"
                aria-label="詳細を閉じる"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="px-4">
              <div className="overflow-hidden rounded-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.thumbnail}
                  alt=""
                  className="aspect-video w-full bg-rose-100 dark:bg-[#f4f1ec] object-contain"
                />
              </div>
              <div className="mt-3 flex gap-2">
                {getBoothByProduct(product.id) ? (
                  <span className="rounded-full bg-[#FF6B81] px-2.5 py-1 text-[11px] font-semibold text-white">
                    ブース {getBoothByProduct(product.id)?.id}
                  </span>
                ) : null}
              </div>
              <h2 id="product-drawer-title" className="mt-3 text-2xl font-bold text-slate-900 dark:text-white">
                {product.title}
              </h2>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{product.catchphrase}</p>
              <p className="mt-2 text-xs text-slate-500">
                {formatAuthors(product.authors, product.team)}
              </p>

              <p className="mt-4 whitespace-pre-line text-sm leading-7 text-slate-700 dark:text-slate-200">{product.description}</p>

              {product.period ? <Meta label="作成期間" text={product.period} /> : null}
              {product.motivation ? <Meta label="なぜ作ったか" text={product.motivation} /> : null}
              {product.highlights?.length ? (
                <BulletSection label="工夫した点" items={product.highlights} />
              ) : null}
              {product.appeals?.length ? (
                <BulletSection label="アピールポイント" items={product.appeals} />
              ) : null}


              <section className="mt-5" hidden={product.techStack.filter(Boolean).length === 0}>
                <p className="text-xs font-semibold tracking-widest text-slate-500 dark:text-slate-400">TECH STACK</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {product.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-white dark:bg-slate-900 px-3 py-1.5 text-xs text-cyan-800 dark:text-cyan-100 ring-1 ring-cyan-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>

              {product.authors.some((author) => author.sns) ? (
                <section className="mt-5">
                  <p className="text-xs font-semibold tracking-widest text-slate-500 dark:text-slate-400">CREATORS</p>
                  <div className="mt-2 flex flex-col gap-2">
                    {product.authors.map((author) =>
                      author.sns ? (
                        <a
                          key={author.name}
                          href={author.sns}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex min-h-11 items-center justify-between rounded-2xl bg-black/5 dark:bg-white/5 px-4 text-sm text-slate-900 dark:text-white"
                        >
                          <span>
                            {author.name}
                            {author.grade ? `（${author.grade}）` : ""}
                          </span>
                          <ExternalLink className="h-4 w-4 text-slate-500 dark:text-slate-400" />
                        </a>
                      ) : null,
                    )}
                  </div>
                </section>
              ) : null}

              <div className="mt-5 grid grid-cols-2 gap-2">
                {product.links.web ? (
                  <LinkButton href={product.links.web} label="Webを開く" icon={Globe} />
                ) : null}
                {product.links.demoVideo ? (
                  <LinkButton href={product.links.demoVideo} label="デモ動画" icon={Video} />
                ) : null}
                {product.links.slide ? (
                  <LinkButton href={product.links.slide} label="スライド" icon={Presentation} />
                ) : null}
              </div>
            </div>
          </motion.aside>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function Meta({ label, text }: { label: string; text: string }) {
  return (
    <section className="mt-5">
      <p className="text-xs font-semibold tracking-widest text-slate-500 dark:text-slate-400">{label}</p>
      <p className="mt-1 whitespace-pre-line text-sm leading-6 text-slate-700 dark:text-slate-200">{text}</p>
    </section>
  );
}

function BulletSection({ label, items }: { label: string; items: string[] }) {
  return (
    <section className="mt-5">
      <p className="text-xs font-semibold tracking-widest text-slate-500 dark:text-slate-400">{label}</p>
      <ul className="mt-2 list-disc space-y-2 pl-4">
        {items.map((item) => (
          <li key={item} className="text-sm leading-6 text-slate-700 dark:text-slate-200">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

function LinkButton({
  href,
  label,
  icon: Icon,
}: {
  href: string;
  label: string;
  icon: typeof Globe;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex min-h-11 items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-[#FF6B81] to-[#FF8E53] px-3 text-sm font-semibold text-white"
    >
      <Icon className="h-4 w-4" />
      {label}
    </a>
  );
}
