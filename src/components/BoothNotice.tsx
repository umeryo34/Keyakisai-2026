"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { Booth } from "@/types/product";

interface BoothNoticeProps {
  booth: Booth | null;
  onClose: () => void;
}

/** 詳細ページがまだないブース用の小さなモーダル */
export function BoothNotice({ booth, onClose }: BoothNoticeProps) {
  return (
    <AnimatePresence>
      {booth ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ scale: 0.95, y: 12 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(event) => event.stopPropagation()}
            className="w-full max-w-xs rounded-3xl border border-black/10 dark:border-white/10 bg-white dark:bg-slate-950 p-5 text-center"
          >
            <p className="text-xs font-semibold tracking-[0.16em] text-[#FF6B81]">
              ブース {booth.id}
              {booth.note ? `（${booth.note}）` : ""}
            </p>
            <p className="mt-2 text-lg font-bold text-slate-900 dark:text-white">{booth.name}</p>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">詳細ページは準備中です。</p>
            <button
              type="button"
              onClick={onClose}
              className="mt-4 min-h-11 w-full rounded-2xl bg-slate-100 dark:bg-slate-800 text-sm font-semibold text-slate-900 dark:text-white"
            >
              閉じる
            </button>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
