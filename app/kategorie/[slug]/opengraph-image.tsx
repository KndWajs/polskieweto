import { ImageResponse } from "next/og"
import { ALL_CATEGORY_SLUGS, SLUG_TO_CATEGORY } from "@/lib/categories"
import { translations } from "@/lib/translations"

export const alt = "Statystyki Prezydentów III RP"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export function generateStaticParams() {
  return ALL_CATEGORY_SLUGS.map((slug) => ({ slug }))
}

export default async function OgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const categoryKey = SLUG_TO_CATEGORY[slug]
  const categoryName = categoryKey
    ? translations.pl.categories[categoryKey]
    : slug

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
        }}
      >
        {/* White top half — Polish flag */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "50%",
            backgroundColor: "#ffffff",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 48,
              fontWeight: 700,
              color: "#18181b",
              textAlign: "center",
            }}
          >
            {categoryName}
          </div>
        </div>
        {/* Red bottom half — Polish flag */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "50%",
            backgroundColor: "#dc143c",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 28,
              color: "#ffffff",
              textAlign: "center",
              maxWidth: "80%",
            }}
          >
            Statystyki Prezydentów III RP
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 20,
              color: "rgba(255,255,255,0.8)",
              marginTop: 16,
            }}
          >
            polskieweto.pl
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
