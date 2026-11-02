export type Category = "All" | "Web" | "App" | "Game" | "Hardware" | "Design";
export type TableId = "A" | "B" | "C" | "D" | "E";

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
  tableId: TableId;
  thumbnail: string;
  authors: Author[];
  links: {
    web?: string;
    appStore?: string;
    googlePlay?: string;
    github?: string;
    demoVideo?: string;
  };
  techStack: string[];
  boothExperience: string;
}

export interface TableInfo {
  id: TableId;
  name: string;
  description: string;
  position: {
    top: string;
    left: string;
    width: string;
    height: string;
  };
}
