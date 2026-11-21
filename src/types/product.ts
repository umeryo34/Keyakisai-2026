export type Category = "All" | "Web" | "App" | "Game" | "Hardware" | "Design";

export interface Author {
  name: string;
  grade?: string;
  sns?: string;
}

export interface Product {
  id: string;
  title: string;
  catchphrase: string;
  description: string;
  category: Exclude<Category, "All">;
  thumbnail: string;
  authors: Author[];
  team?: string;
  period?: string;
  motivation?: string;
  highlights?: string[];
  appeals?: string[];
  links: {
    web?: string;
    appStore?: string;
    demoVideo?: string;
    slide?: string;
  };
  techStack: string[];
}

export interface Booth {
  id: string;
  name: string;
  note?: string;
  /** 2日目のみ出店するブース */
  day2Only?: boolean;
  /** 関連づける Product の id（未登録のブースは未指定） */
  productId?: string;
  /** マップ上の位置（論理座標 688 x 1209） */
  rect: { x: number; y: number; w: number; h: number; rot?: number };
}
