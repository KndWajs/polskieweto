export const CATEGORY_KEYS = [
  "zawetowaneUstawy",
  "podpisaneUstawy",
  "ulaskawienia",
  "wnioskiDoTK",
  "inicjatywyUstawodawcze",
] as const

export type CategoryKey = (typeof CATEGORY_KEYS)[number]

export const CATEGORY_SLUG_MAP: Record<CategoryKey, string> = {
  zawetowaneUstawy: "zawetowane-ustawy",
  podpisaneUstawy: "podpisane-ustawy",
  ulaskawienia: "ulaskawienia",
  wnioskiDoTK: "wnioski-do-tk",
  inicjatywyUstawodawcze: "inicjatywy-ustawodawcze",
}

export const SLUG_TO_CATEGORY: Record<string, CategoryKey> = Object.fromEntries(
  Object.entries(CATEGORY_SLUG_MAP).map(([key, slug]) => [slug, key as CategoryKey]),
) as Record<string, CategoryKey>

export const ALL_CATEGORY_SLUGS = Object.values(CATEGORY_SLUG_MAP)
