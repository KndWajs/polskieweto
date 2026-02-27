"use client"

import Image from "next/image"

interface StatCardProps {
  name: string
  image: string
  value: number
  maxValue: number
  party: string
  term: string
}

const partyColors: Record<string, string> = {
  PiS: "bg-blue-600",
  PO: "bg-orange-500",
  SLD: "bg-red-600",
  Solidarność: "bg-yellow-500",
}

function calculateYears(term: string): number {
  // Check if it's an ongoing presidency (format: "2024-08-06" or similar date)
  if (term.match(/^\d{4}-\d{2}-\d{2}$/)) {
    const startDate = new Date(term)
    const today = new Date("2025-12-19") // Current date
    const diffTime = Math.abs(today.getTime() - startDate.getTime())
    const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25)
    return diffYears
  }

  // Handle range format like "2020-2025"
  const years = term.split(/[-–]/).map((y) => Number.parseInt(y.trim()))
  if (years.length === 2 && !isNaN(years[0]) && !isNaN(years[1])) {
    return years[1] - years[0]
  }
  return 1 // Default to 1 year if parsing fails
}

function formatTermDisplay(term: string): string {
  if (term.match(/^\d{4}-\d{2}-\d{2}$/)) {
    const date = new Date(term)
    const year = date.getFullYear()
    return `${year}–obecnie`
  }
  return term
}

export function StatCard({ name, image, value, maxValue, party, term }: StatCardProps) {
  const percentage = (value / maxValue) * 100
  const barColor = partyColors[party] || "bg-primary"

  const years = calculateYears(term)
  const perYear = years > 0 ? (value / years).toFixed(1) : "0.0"
  const displayTerm = formatTermDisplay(term)

  return (
    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 py-3">
      <div className="flex items-center gap-3 md:flex-col md:items-center md:gap-1 md:w-[140px] shrink-0">
        <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-muted shrink-0">
          <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
        </div>
        <div className="flex flex-col md:items-center md:text-center">
          <span className="text-sm font-medium text-foreground leading-tight text-balance">{name}</span>
          <span className="text-xs text-muted-foreground">
            {party} · {displayTerm}
          </span>
        </div>
      </div>

      <div className="flex-1 flex items-center gap-3 md:gap-4">
        <div className="flex-1 h-6 md:h-8 bg-secondary rounded-sm overflow-hidden">
          <div
            className={`h-full ${barColor} rounded-sm transition-all duration-500 ease-out`}
            style={{ width: `${percentage}%` }}
          />
        </div>
        <div className="flex flex-col items-end min-w-[60px] md:min-w-[80px]">
          <span className="text-xl md:text-2xl font-bold text-foreground text-right tabular-nums">
            {value.toLocaleString("pl-PL")}
          </span>
          <span className="text-xs text-muted-foreground tabular-nums">{perYear}/rok</span>
        </div>
      </div>
    </div>
  )
}
