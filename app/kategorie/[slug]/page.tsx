import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { CategoryJsonLd } from "@/components/json-ld"
import { CategoryPageClient } from "./category-page-client"
import { ALL_CATEGORY_SLUGS, SLUG_TO_CATEGORY, CATEGORY_SLUG_MAP } from "@/lib/categories"
import { translations } from "@/lib/translations"
import data from "@/data/presidential-stats.json"

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return ALL_CATEGORY_SLUGS.map((slug) => ({ slug }))
}

const categoryMeta: Record<string, { titlePl: string; descriptionPl: string; keywords: string[] }> = {
  zawetowaneUstawy: {
    titlePl: "Zawetowane ustawy – Statystyki Prezydentów III RP",
    descriptionPl:
      "Ile ustaw zawetował każdy prezydent Polski? Porównanie wet prezydenckich od 1989 roku. Wałęsa, Kwaśniewski, Kaczyński, Komorowski, Duda, Nawrocki.",
    keywords: [
      "zawetowane ustawy",
      "weto prezydenckie",
      "weta prezydentów",
      "polskie weto",
      "prezydent weto",
      "zawetowane ustawy statystyki",
    ],
  },
  podpisaneUstawy: {
    titlePl: "Podpisane ustawy – Statystyki Prezydentów III RP",
    descriptionPl:
      "Ile ustaw podpisał każdy prezydent Polski? Porównanie podpisanych aktów prawnych przez prezydentów III RP od 1989 roku.",
    keywords: [
      "podpisane ustawy",
      "podpis prezydenta",
      "ustawy prezydent",
      "legislacja prezydencka",
      "akty prawne prezydent",
    ],
  },
  ulaskawienia: {
    titlePl: "Ułaskawienia – Statystyki Prezydentów III RP",
    descriptionPl:
      "Ile osób ułaskawił każdy prezydent Polski? Porównanie ułaskawień prezydenckich od 1989 roku. Prawo łaski w III RP.",
    keywords: [
      "ułaskawienia prezydenckie",
      "prawo łaski",
      "ułaskawienia prezydent",
      "prawo łaski statystyki",
      "ułaskawienia III RP",
    ],
  },
  wnioskiDoTK: {
    titlePl: "Wnioski do Trybunału Konstytucyjnego – Statystyki Prezydentów III RP",
    descriptionPl:
      "Ile wniosków do Trybunału Konstytucyjnego złożył każdy prezydent Polski? Porównanie wniosków o kontrolę konstytucyjności od 1989 roku.",
    keywords: [
      "wnioski do TK",
      "Trybunał Konstytucyjny",
      "kontrola konstytucyjności",
      "prezydent TK",
      "wnioski prezydenta do Trybunału",
    ],
  },
  inicjatywyUstawodawcze: {
    titlePl: "Inicjatywy ustawodawcze – Statystyki Prezydentów III RP",
    descriptionPl:
      "Ile inicjatyw ustawodawczych zgłosił każdy prezydent Polski? Porównanie projektów ustaw prezydenckich od 1989 roku.",
    keywords: [
      "inicjatywy ustawodawcze",
      "projekty ustaw prezydenta",
      "inicjatywa ustawodawcza prezydent",
      "projekty prezydenckie",
      "legislacja prezydencka",
    ],
  },
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const categoryKey = SLUG_TO_CATEGORY[slug]

  if (!categoryKey) return {}

  const meta = categoryMeta[categoryKey]
  const categoryLabel = translations.pl.categories[categoryKey]

  return {
    title: meta.titlePl,
    description: meta.descriptionPl,
    keywords: [
      ...meta.keywords,
      "statystyki prezydentów",
      "prezydenci Polski",
      "III RP",
    ],
    alternates: {
      canonical: `/kategorie/${slug}`,
    },
    openGraph: {
      title: meta.titlePl,
      description: meta.descriptionPl,
      type: "website",
      url: `/kategorie/${slug}`,
      locale: "pl_PL",
      siteName: "Statystyki Prezydentów III RP",
    },
    twitter: {
      card: "summary_large_image",
      title: `${categoryLabel} – Statystyki Prezydentów III RP`,
      description: meta.descriptionPl,
    },
  }
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params
  const categoryKey = SLUG_TO_CATEGORY[slug]

  if (!categoryKey) {
    notFound()
  }

  const categoryData = data[categoryKey]
  const categoryLabel = translations.pl.categories[categoryKey]

  return (
    <>
      <CategoryJsonLd categoryName={categoryLabel} slug={slug} />
      <CategoryPageClient
        categoryKey={categoryKey}
        slug={slug}
        categoryData={categoryData}
      />
    </>
  )
}
