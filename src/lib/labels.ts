import type { Product } from "@/types/product";

export function formatAuthors(authors: Product["authors"], team?: string) {
  const names = authors
    .map((author) => (author.grade ? `${author.name}（${author.grade}）` : author.name))
    .join(" / ");
  return team ? `${team} · ${names}` : names;
}
