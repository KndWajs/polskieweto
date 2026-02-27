import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "Statystyki Prezydentów III RP"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OgImage() {
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
              fontSize: 52,
              fontWeight: 700,
              color: "#18181b",
              textAlign: "center",
            }}
          >
            Statystyki Prezydentów III RP
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
            Weta · Podpisane ustawy · Ułaskawienia · Wnioski do TK · Inicjatywy ustawodawcze
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
