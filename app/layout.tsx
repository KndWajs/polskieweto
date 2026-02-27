import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Statystyki Prezydentów III RP - Zawetowane ustawy, ułaskawienia, wnioski do TK",
  description:
    "Porównanie statystyk prezydentów Polski III RP. Zawetowane ustawy, ułaskawienia, podpisane ustawy, wnioski do Trybunału Konstytucyjnego, inicjatywy ustawodawcze. Wałęsa, Kwaśniewski, Kaczyński, Komorowski, Duda.",
  keywords: [
    "statystyki prezydentów",
    "prezydenci Polski",
    "III RP",
    "zawetowane ustawy",
    "ułaskawienia prezydenckie",
    "podpisane ustawy",
    "wnioski do TK",
    "Trybunał Konstytucyjny",
    "inicjatywy ustawodawcze",
    "Lech Wałęsa",
    "Aleksander Kwaśniewski",
    "Lech Kaczyński",
    "Bronisław Komorowski",
    "Andrzej Duda",
    "prezydent RP",
    "weto prezydenckie",
  ],
  authors: [{ name: "SimplyGo", url: "https://simplygo.pl" }],
  creator: "SimplyGo",
  publisher: "SimplyGo",
  openGraph: {
    title: "Statystyki Prezydentów III RP",
    description:
      "Porównanie zawetowanych ustaw, ułaskawień, wniosków do TK i inicjatyw ustawodawczych prezydentów Polski.",
    type: "website",
    locale: "pl_PL",
    siteName: "Statystyki Prezydentów III RP",
  },
  twitter: {
    card: "summary_large_image",
    title: "Statystyki Prezydentów III RP",
    description:
      "Porównanie zawetowanych ustaw, ułaskawień, wniosków do TK i inicjatyw ustawodawczych prezydentów Polski.",
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: "v0.app",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='16' fill='white'/><rect y='16' width='32' height='16' fill='%23dc143c'/></svg>",
    apple:
      "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='16' fill='white'/><rect y='16' width='32' height='16' fill='%23dc143c'/></svg>",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
