# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Polish Presidents Statistics Dashboard — a Next.js app comparing statistical data (vetoed laws, signed laws, pardons, Constitutional Tribunal motions, legislative initiatives) across all presidents of the Third Polish Republic (1989–present). Bilingual (Polish/English), static data, no backend.

## Commands

```bash
pnpm dev          # Start dev server
pnpm build        # Production build (TS errors ignored via next.config)
pnpm lint         # ESLint
pnpm start        # Start production server
```

Package manager is **pnpm** (not npm/yarn).

## Architecture

- **Next.js 16 App Router** with React 19 and TypeScript
- **Tailwind CSS 4** via PostCSS plugin (`@tailwindcss/postcss`)
- **shadcn/ui** (New York style, RSC-enabled) — 56+ components in `components/ui/`
- **Static data** — no database, no API routes. All presidential data lives in `data/presidential-stats.json`

### Key Files

- `app/layout.tsx` — Root layout with Polish SEO metadata, Geist fonts, Vercel Analytics
- `app/page.tsx` — Renders `<StatsDashboard />`
- `components/stats-dashboard.tsx` — Main client component: category tabs, language toggle, stat cards, newsletter embed, sources
- `components/stat-card.tsx` — President card with bar chart, party colors, per-year calculation
- `lib/translations.ts` — i18n object with `pl` and `en` keys (not i18next)
- `lib/utils.ts` — `cn()` utility (clsx + tailwind-merge)
- `data/presidential-stats.json` — 5 categories, each with 9 president entries and source citations
- `hooks/use-mobile.ts` — Viewport detection hook (768px breakpoint)

### Conventions

- Client components use `"use client"` directive
- Path alias: `@/*` maps to project root
- Party color mapping in stat-card: PiS→blue, PO→orange, SLD→red, Solidarność→yellow
- Theming via CSS variables in OKLCh color space (`app/globals.css`), dark/light modes via next-themes
- Images are unoptimized (`next.config.mjs`: `images.unoptimized: true`)

### Data Structure

Each category in `presidential-stats.json` has:
```json
{
  "data": [{ "id": 1, "name": "...", "image": "/images/...", "value": 0, "party": "...", "term": "YYYY–YYYY" }],
  "sources": ["https://..."]
}
```

Terms can be a range (`"2020–2025"`) or an ISO date (`"2025-08-06"`) for sitting presidents.
