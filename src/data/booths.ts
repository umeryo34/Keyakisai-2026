import type { Booth } from "@/types/product";

/** マップの論理サイズ（教室を縦向き・プロジェクター右にした座標系） */
export const MAP_SIZE = { width: 688, height: 1209 } as const;

/** 表示する範囲（周囲の余白を詰める） */
export const MAP_VIEW = { x: 30, y: 45, width: 655, height: 1145 } as const;

export const PROJECTOR = { x: 640, y: 125, w: 30, h: 1040 } as const;

/** すべてのブースを同じ大きさにそろえる */
const BOOTH_W = 64;
const BOOTH_H = 128;
const box = (x: number, y: number) => ({ x, y, w: BOOTH_W, h: BOOTH_H });
/** 上部の弧に並ぶブース（横長・傾きつき）。7〜12 */
const arcBox = (x: number, y: number, rot: number) => ({ x, y, w: BOOTH_H, h: BOOTH_W, rot });

export const booths: Booth[] = [
  // 右列（プロジェクター側）：右下が 1、上に向かって 6 まで
  { id: "1", name: "TOVAL", productId: "toval", rect: box(560, 1048) },
  { id: "2", name: "あとめも", productId: "atomemo", rect: box(560, 914) },
  { id: "3", name: "Daylia(デイリア)", productId: "daylia", rect: box(560, 780) },
  { id: "4", name: "MANZAI", note: "2日目のみ", productId: "manzai", rect: box(560, 608) },
  { id: "5", name: "dranker", productId: "dranker", rect: box(560, 474) },
  { id: "6", name: "Wealy", productId: "wealy", rect: box(560, 340) },
  // 上部（右側）：弧状に並べて 6 とつなぐ
  { id: "7", name: "どこでもPC", productId: "pc-remote", rect: arcBox(528, 244, 91) },
  { id: "8", name: "TokiWagi UI", productId: "tokiwa", rect: arcBox(469, 124, 40) },
  { id: "9", name: "冷笑検知AI", productId: "sarcasm-detector", rect: arcBox(347, 68, 12) },
  // 上部（左側）：弧状に並べて 13 とつなぐ
  { id: "10", name: "Dopa Pong", productId: "dopa-pong", rect: arcBox(213, 68, -12) },
  { id: "11", name: "勤怠管理システム", rect: arcBox(91, 124, -40) },
  { id: "12", name: "AIハードウェア マインクラフト", rect: arcBox(32, 244, -91) },
  // 左列（出入口側）
  { id: "13", name: "ももPay", note: "2日目のみ", productId: "momo-pay", rect: box(64, 340) },
  { id: "14", name: "送迎チーム分け", productId: "carpool", rect: box(64, 474) },
  { id: "15", name: "ScheduleFitter", productId: "schedule-fitter", rect: box(64, 608) },
  { id: "16", name: "CHILL-NIGHT", productId: "chill-night", rect: box(64, 780) },
  { id: "17", name: "これから決めます", rect: box(64, 914) },
];

export function getBoothByProduct(productId: string) {
  return booths.find((booth) => booth.productId === productId);
}
