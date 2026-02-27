"use client"

interface CategoryTabsProps {
  categories: { key: string; label: string }[]
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export function CategoryTabs({ categories, activeCategory, onCategoryChange }: CategoryTabsProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {categories.map((category) => (
        <button
          key={category.key}
          onClick={() => onCategoryChange(category.key)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
            activeCategory === category.key
              ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
              : "bg-secondary text-secondary-foreground hover:bg-muted hover:text-foreground"
          }`}
        >
          {category.label}
        </button>
      ))}
    </div>
  )
}
