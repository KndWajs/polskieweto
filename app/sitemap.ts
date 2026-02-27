import type { MetadataRoute } from "next"
import { ALL_CATEGORY_SLUGS } from "@/lib/categories"

export default function sitemap(): MetadataRoute.Sitemap {
  const categoryEntries: MetadataRoute.Sitemap = ALL_CATEGORY_SLUGS.map((slug) => ({
    url: `https://polskieweto.pl/kategorie/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  return [
    {
      url: "https://polskieweto.pl",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    ...categoryEntries,
  ]
}
