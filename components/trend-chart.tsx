"use client"

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

function formatTermDisplay(term: string, language: Language): string {
  if (isOngoing(term)) {
    return `${new Date(term).getFullYear()}–${language === "pl" ? "obecnie" : "present"}`
  }
  return term
}

export function TrendChart({ data, language, label }: TrendChartProps) {
  const t = translations[language]
  const locale = language === "pl" ? "pl-PL" : "en-US"
  const hasOngoing = data.some((d) => isOngoing(d.term))

  const chartData = data
    .map((d) => ({
      ...d,
      startYear: termStartYear(d.term),
      tick: `${termStartYear(d.term)}${isOngoing(d.term) ? "*" : ""}`,
      dotColor: partyDotColors[d.party] ?? "#6b7280",
    }))
    .sort((a, b) => a.startYear - b.startYear)

  const maxValue = Math.max(...chartData.map((d) => d.value))

  const chartConfig = {
    value: { label, color: "var(--chart-1)" },
  } satisfies ChartConfig

  return (
    <div className="mt-8 pt-6 border-t border-border">
      <h3 className="text-sm font-medium text-muted-foreground mb-3">{t.trend.title}</h3>
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
                  <p className="mt-1 font-bold text-foreground tabular-nums">{p.value.toLocaleString(locale)}</p>
                </div>
              )
            }}
          />
          <Line
            dataKey="value"
            type="monotone"
            stroke="var(--color-value)"
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
              dataKey="value"
              position="top"
              offset={10}
              fontSize={12}
              className="fill-muted-foreground"
              formatter={(value: number) => value.toLocaleString(locale)}
            />
          </Line>
        </LineChart>
      </ChartContainer>
      {hasOngoing && <p className="mt-2 text-xs text-muted-foreground">* {t.trend.ongoing}</p>}
    </div>
  )
}
