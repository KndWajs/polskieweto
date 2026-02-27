"use client"

import { StatCard } from "./stat-card"
import type { Language } from "@/lib/translations"

interface PresidentData {
  id: number
  name: string
  image: string
  value: number
  party: string
  term: string
}

interface Source {
  title: string
  url: string
}

interface CategoryContentProps {
  categoryLabel: string
  categoryDescription: string
  data: PresidentData[]
  sources: Source[]
  language: Language
  totalLabel: string
  sourcesLabel: string
}

export function CategoryContent({
  categoryLabel,
  categoryDescription,
  data,
  sources,
  language,
  totalLabel,
  sourcesLabel,
}: CategoryContentProps) {
  const maxValue = Math.max(...data.map((item) => item.value))
  const totalValue = data.reduce((sum, item) => sum + item.value, 0)
  const sortedData = [...data].sort((a, b) => b.value - a.value)

  return (
    <>
      <div className="mt-6 mb-4 text-sm text-muted-foreground leading-relaxed">
        <p>{categoryDescription}</p>
      </div>

      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-foreground">{categoryLabel}</h2>
        <div className="text-sm text-muted-foreground">
          {totalLabel}:{" "}
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

      <div className="mt-8 pt-6 border-t border-border">
        <h3 className="text-sm font-medium text-muted-foreground mb-3">{sourcesLabel}:</h3>
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
    </>
  )
}
