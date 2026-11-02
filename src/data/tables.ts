import type { TableInfo } from "@/types/product";

export const tables: TableInfo[] = [
  {
    id: "A",
    name: "Table A",
    description: "黒板寄りの窓側。Webプロダクト中心のブースです。",
    position: { top: "20%", left: "12%", width: "32%", height: "17%" },
  },
  {
    id: "B",
    name: "Table B",
    description: "黒板寄りの出入口側。モバイルアプリを展示しています。",
    position: { top: "20%", left: "56%", width: "32%", height: "17%" },
  },
  {
    id: "C",
    name: "Table C",
    description: "教室中央。ゲームをその場で遊べる体験ブースです。",
    position: { top: "43%", left: "34%", width: "32%", height: "17%" },
  },
  {
    id: "D",
    name: "Table D",
    description: "廊下寄りの窓側。Hardware / IoT の実機展示です。",
    position: { top: "66%", left: "12%", width: "32%", height: "17%" },
  },
  {
    id: "E",
    name: "Table E",
    description: "廊下寄りの出入口側。デザインと制作物を展示しています。",
    position: { top: "66%", left: "56%", width: "32%", height: "17%" },
  },
];

export const tableMap = Object.fromEntries(tables.map((table) => [table.id, table])) as Record<
  TableInfo["id"],
  TableInfo
>;
