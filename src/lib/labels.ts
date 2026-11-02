import type { Category, Product } from "@/types/product";

export const CATEGORY_BADGE: Record<Exclude<Category, "All">, string> = {
  Web: "Web",
  App: "App",
  Game: "Game",
  Hardware: "IoT",
  Design: "Other",
};

export function formatAuthors(authors: Product["authors"]) {
  return authors
    .map((author) => (author.grade ? `${author.name}（${author.grade}）` : author.name))
    .join(" / ");
}
