"use client"

import { useState } from "react"
import { CategoryNavTabs } from "./category-nav-tabs"
import { CategoryContent } from "./category-content"
import { LanguageToggle } from "./language-toggle"
import { translations, type Language } from "@/lib/translations"
import { CATEGORY_KEYS, CATEGORY_SLUG_MAP } from "@/lib/categories"
import data from "@/data/presidential-stats.json"

const DEFAULT_CATEGORY = "zawetowaneUstawy" as const

export function StatsDashboard() {
  const [language, setLanguage] = useState<Language>("pl")

  const t = translations[language]

  const categories = CATEGORY_KEYS.map((key) => ({
    key,
    slug: CATEGORY_SLUG_MAP[key],
    label: t.categories[key],
  }))

  const categoryData = data[DEFAULT_CATEGORY]

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-foreground">{t.title}</h1>
              <p className="text-muted-foreground mt-1">{t.subtitle}</p>
            </div>
            <LanguageToggle language={language} onLanguageChange={setLanguage} />
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8" aria-label={language === "pl" ? "Statystyki prezydentów" : "Presidential statistics"}>
        <div className="mb-8 text-sm text-muted-foreground leading-relaxed">
          <p>{t.description}</p>
        </div>

        <CategoryNavTabs categories={categories} />

        <CategoryContent
          categoryLabel={t.categories[DEFAULT_CATEGORY]}
          categoryDescription={t.categoryDescriptions[DEFAULT_CATEGORY]}
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
            <p>{t.lastUpdated}: 16.04.2026</p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <a href="mailto:simplygopolska@gmail.com" className="hover:text-foreground transition-colors">
                simplygopolska@gmail.com
              </a>
              <span className="hidden sm:inline">•</span>
              <a
                href="https://simplygo.pl"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                {t.footer.simplygo}
              </a>
              <span className="hidden sm:inline">•</span>
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
