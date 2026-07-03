"use client"

import { useState } from "react"
import { CartesianGrid, LabelList, Line, LineChart, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, type ChartConfig } from "@/components/ui/chart"
import { translations, type Language } from "@/lib/translations"

interface PresidentData {
  id: number
  name: string
  image: string
  value: number
  party: string
  term: string
}

interface TrendChartProps {
  data: PresidentData[]
  language: Language
  label: string
}

type TrendMode = "perYear" | "total"

const partyDotColors: Record<string, string> = {
  PiS: "#2563eb",
  PO: "#f97316",
  SLD: "#dc2626",
  Solidarność: "#eab308",
}

function isOngoing(term: string): boolean {
  return /^\d{4}-\d{2}-\d{2}$/.test(term)
}

function termStartYear(term: string): number {
  if (isOngoing(term)) return new Date(term).getFullYear()
  const year = Number.parseInt(term.split(/[-–]/)[0].trim())
  return Number.isNaN(year) ? 0 : year
}

function calculateYears(term: string): number {
  if (isOngoing(term)) {
    const startDate = new Date(term)
    const today = new Date()
    const diffTime = Math.abs(today.getTime() - startDate.getTime())
    return diffTime / (1000 * 60 * 60 * 24 * 365.25)
  }
  const years = term.split(/[-–]/).map((y) => Number.parseInt(y.trim()))
  if (years.length === 2 && !isNaN(years[0]) && !isNaN(years[1])) {
    return years[1] - years[0]
  }
  return 1
}

function formatTermDisplay(term: string, language: Language): string {
  if (isOngoing(term)) {
    return `${new Date(term).getFullYear()}–${language === "pl" ? "obecnie" : "present"}`
  }
  return term
}

export function TrendChart({ data, language, label }: TrendChartProps) {
  const [mode, setMode] = useState<TrendMode>("perYear")
  const t = translations[language]
  const locale = language === "pl" ? "pl-PL" : "en-US"
  const hasOngoing = data.some((d) => isOngoing(d.term))

  const chartData = data
    .map((d) => {
      const years = calculateYears(d.term)
      const perYear = years > 0 ? Math.round((d.value / years) * 10) / 10 : 0
      return {
        ...d,
        startYear: termStartYear(d.term),
        tick: `${termStartYear(d.term)}${isOngoing(d.term) ? "*" : ""}`,
        dotColor: partyDotColors[d.party] ?? "#6b7280",
        perYear,
        displayValue: mode === "perYear" ? perYear : d.value,
      }
    })
    .sort((a, b) => a.startYear - b.startYear)

  const maxValue = Math.max(...chartData.map((d) => d.displayValue))

  const formatValue = (value: number) =>
    mode === "perYear"
      ? value.toLocaleString(locale, { minimumFractionDigits: 1, maximumFractionDigits: 1 })
      : value.toLocaleString(locale)

  const chartConfig = {
    displayValue: { label, color: "var(--chart-1)" },
  } satisfies ChartConfig

  const modes: { key: TrendMode; label: string }[] = [
    { key: "perYear", label: t.trend.perYear },
    { key: "total", label: t.total },
  ]

  return (
    <div className="mt-8 pt-6 border-t border-border">
      <div className="mb-3 flex items-center justify-between gap-2">
        <h3 className="text-sm font-medium text-muted-foreground">{t.trend.title}</h3>
        <div className="flex rounded-lg bg-secondary p-0.5" role="group" aria-label={t.trend.title}>
          {modes.map((m) => (
            <button
              key={m.key}
              onClick={() => setMode(m.key)}
              aria-pressed={mode === m.key}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                mode === m.key
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>
      </div>
      <ChartContainer
        config={chartConfig}
        className="w-full aspect-[2/1] md:aspect-[3/1]"
        role="img"
        aria-label={`${t.trend.title}: ${label}`}
      >
        <LineChart data={chartData} margin={{ top: 28, right: 16, left: 16, bottom: 4 }}>
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis dataKey="tick" tickLine={false} axisLine={false} tickMargin={8} interval={0} fontSize={12} />
          <YAxis hide domain={[0, Math.ceil(maxValue * 1.15)]} />
          <ChartTooltip
            cursor={{ strokeDasharray: "3 3" }}
            content={({ active, payload }) => {
              if (!active || !payload?.length) return null
              const p = payload[0].payload as (typeof chartData)[number]
              return (
                <div className="rounded-md border border-border bg-popover px-3 py-2 text-xs shadow-sm">
                  <p className="font-medium text-foreground">{p.name}</p>
                  <p className="text-muted-foreground">
                    {p.party} · {formatTermDisplay(p.term, language)}
                  </p>
                  <p className="mt-1 font-bold text-foreground tabular-nums">
                    {p.value.toLocaleString(locale)}
                    <span className="ml-1 font-normal text-muted-foreground">
                      ·{" "}
                      {p.perYear.toLocaleString(locale, { minimumFractionDigits: 1, maximumFractionDigits: 1 })}/
                      {t.trend.perYearUnit}
                    </span>
                  </p>
                </div>
              )
            }}
          />
          <Line
            dataKey="displayValue"
            type="monotone"
            stroke="var(--color-displayValue)"
            strokeWidth={2}
            isAnimationActive={false}
            dot={(props: { cx?: number; cy?: number; payload?: { id: number; dotColor: string } }) => (
              <circle
                key={`dot-${props.payload?.id}`}
                cx={props.cx}
                cy={props.cy}
                r={4.5}
                fill={props.payload?.dotColor}
                stroke="var(--background)"
                strokeWidth={1.5}
              />
            )}
            activeDot={{ r: 6 }}
          >
            <LabelList
              dataKey="displayValue"
              position="top"
              offset={10}
              fontSize={12}
              className="fill-muted-foreground"
              formatter={formatValue}
            />
          </Line>
        </LineChart>
      </ChartContainer>
      {hasOngoing && <p className="mt-2 text-xs text-muted-foreground">* {t.trend.ongoing}</p>}
    </div>
  )
}
