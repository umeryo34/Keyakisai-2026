"use client";

import { useSyncExternalStore } from "react";

/** 2日目（このブースだけが出店する日）の開始日 */
export const DAY2_START = "2026-11-22";

const subscribe = () => () => {};
const getSnapshot = () =>
  new Date().toLocaleDateString("sv-SE", { timeZone: "Asia/Tokyo" }) < DAY2_START;
const getServerSnapshot = () => false;

/** 今日が2日目より前か（= 「2日目のみ」のブースが出店していない日か） */
export function useBeforeDay2() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
