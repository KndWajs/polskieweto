"use client"

import { useState } from "react"
import { CategoryTabs } from "./category-tabs"
import { StatCard } from "./stat-card"
import { LanguageToggle } from "./language-toggle"
import { translations, type Language } from "@/lib/translations"
import data from "@/data/presidential-stats.json"

type CategoryKey = keyof typeof data

export function StatsDashboard() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("zawetowaneUstawy")
  const [language, setLanguage] = useState<Language>("pl")

  const t = translations[language]

  const categories = [
    { key: "zawetowaneUstawy", label: t.categories.zawetowaneUstawy },
    { key: "podpisaneUstawy", label: t.categories.podpisaneUstawy },
    { key: "ulaskawienia", label: t.categories.ulaskawienia },
    { key: "wnioskiDoTK", label: t.categories.wnioskiDoTK },
    { key: "inicjatywyUstawodawcze", label: t.categories.inicjatywyUstawodawcze },
  ]

  const categoryData = data[activeCategory]
  const currentData = categoryData.data
  const sources = categoryData.sources

  const maxValue = Math.max(...currentData.map((item) => item.value))
  const totalValue = currentData.reduce((sum, item) => sum + item.value, 0)

  const sortedData = [...currentData].sort((a, b) => b.value - a.value)

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

        <CategoryTabs
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={(cat) => setActiveCategory(cat as CategoryKey)}
        />

        <div className="mt-6 mb-4 text-sm text-muted-foreground leading-relaxed">
          <p>{t.categoryDescriptions[activeCategory as keyof typeof t.categoryDescriptions]}</p>
        </div>

        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-foreground">
            {categories.find((c) => c.key === activeCategory)?.label}
          </h2>
          <div className="text-sm text-muted-foreground">
            {t.total}:{" "}
            <span className="font-bold text-foreground">
              {totalValue.toLocaleString(language === "pl" ? "pl-PL" : "en-US")}
            </span>
          </div>
        </div>

        <div className="space-y-4">
          {sortedData.map((item, index) => (
            <div key={item.id} className="flex items-center gap-4">
              <span className="text-2xl font-bold text-muted-foreground w-8 text-center">{index + 1}</span>
              <div className="flex-1">
                <StatCard
                  name={item.name}
                  image={item.image}
                  value={item.value}
                  maxValue={maxValue}
                  party={item.party}
                  term={item.term}
                  language={language}
                />
              </div>
            </div>
          ))}
        </div>

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

        <div className="mt-8 pt-6 border-t border-border">
          <h3 className="text-sm font-medium text-muted-foreground mb-3">{t.sources}:</h3>
          <ul className="flex flex-wrap gap-4">
            {sources.map((source, index) => (
              <li key={index}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  {source.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <footer className="border-t border-border mt-12 py-6">
          <div className="max-w-5xl mx-auto px-4 text-center text-sm text-muted-foreground space-y-2">
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
