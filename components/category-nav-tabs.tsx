"use client"

import Link from "next/link"

interface CategoryNavTabsProps {
  categories: { key: string; slug: string; label: string }[]
  activeCategory?: string
  homeLabel?: string
}

export function CategoryNavTabs({ categories, activeCategory, homeLabel }: CategoryNavTabsProps) {
  return (
    <nav className="flex flex-wrap gap-2 mb-8" aria-label={homeLabel ? "Category navigation" : "Nawigacja kategorii"}>
      {categories.map((category) => {
        const isActive = activeCategory === category.key
        return (
          <Link
            key={category.key}
            href={`/kategorie/${category.slug}`}
            aria-current={isActive ? "page" : undefined}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              isActive
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                : "bg-secondary text-secondary-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            {category.label}
          </Link>
        )
      })}
    </nav>
  )
}
