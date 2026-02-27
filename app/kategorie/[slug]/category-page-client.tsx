"use client"

import { useState } from "react"
import Link from "next/link"
import { CategoryNavTabs } from "@/components/category-nav-tabs"
import { CategoryContent } from "@/components/category-content"
import { LanguageToggle } from "@/components/language-toggle"
import { translations, type Language } from "@/lib/translations"
import { CATEGORY_KEYS, CATEGORY_SLUG_MAP, type CategoryKey } from "@/lib/categories"

interface CategoryPageClientProps {
  categoryKey: CategoryKey
  slug: string
  categoryData: {
    data: { id: number; name: string; image: string; value: number; party: string; term: string }[]
    sources: { title: string; url: string }[]
  }
}

export function CategoryPageClient({ categoryKey, slug, categoryData }: CategoryPageClientProps) {
  const [language, setLanguage] = useState<Language>("pl")
  const t = translations[language]

  const categories = CATEGORY_KEYS.map((key) => ({
    key,
    slug: CATEGORY_SLUG_MAP[key],
    label: t.categories[key],
  }))

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <Link href="/" className="text-2xl md:text-3xl font-bold text-foreground hover:text-primary transition-colors">
                {t.title}
              </Link>
              <p className="text-muted-foreground mt-1">{t.subtitle}</p>
            </div>
            <LanguageToggle language={language} onLanguageChange={setLanguage} />
          </div>
        </div>
      </header>

      <main
        className="max-w-5xl mx-auto px-4 py-8"
        aria-label={language === "pl" ? "Statystyki prezydentów" : "Presidential statistics"}
      >
        <CategoryNavTabs
          categories={categories}
          activeCategory={categoryKey}
          homeLabel={language === "en" ? "Category navigation" : undefined}
        />

        <CategoryContent
          categoryLabel={t.categories[categoryKey]}
          categoryDescription={t.categoryDescriptions[categoryKey]}
          data={categoryData.data}
          sources={categoryData.sources}
          language={language}
          totalLabel={t.total}
          sourcesLabel={t.sources}
        />

        <div className="mt-12 mb-8">
          <div className="flex justify-center">
            <iframe
              src="https://preview.mailerlite.io/forms/1992084/174207367548766009/share"
              width="400"
              height="280"
              className="border-0"
              title="Newsletter signup form"
              loading="lazy"
            />
          </div>
        </div>

        <footer className="border-t border-border mt-12 py-6">
          <div className="max-w-5xl mx-auto px-4 text-center text-sm text-muted-foreground space-y-2">
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <a href="mailto:simplygopolska@gmail.com" className="hover:text-foreground transition-colors">
                simplygopolska@gmail.com
              </a>
              <span className="hidden sm:inline">&bull;</span>
              <a
                href="https://simplygo.pl"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                {t.footer.simplygo}
              </a>
              <span className="hidden sm:inline">&bull;</span>
              <a
                href="https://wajs.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                {t.footer.wajs}
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
