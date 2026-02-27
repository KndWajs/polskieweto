export function JsonLd() {
  const webSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Statystyki Prezydentów III RP",
    url: "https://polskieweto.pl",
    description:
      "Porównanie statystyk prezydentów Polski III RP. Zawetowane ustawy, ułaskawienia, podpisane ustawy, wnioski do Trybunału Konstytucyjnego, inicjatywy ustawodawcze.",
    publisher: {
      "@type": "Organization",
      name: "SimplyGo",
      url: "https://simplygo.pl",
    },
    inLanguage: ["pl", "en"],
  }

  const dataset = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "Presidential Statistics of the Third Polish Republic",
    description:
      "Statistical comparison of Polish presidents (1989–present) across five categories: vetoed laws, signed laws, pardons, Constitutional Tribunal motions, and legislative initiatives.",
    url: "https://polskieweto.pl",
    temporalCoverage: "1989/2026",
    spatialCoverage: "Poland",
    variableMeasured: [
      "Vetoed laws (zawetowane ustawy)",
      "Signed laws (podpisane ustawy)",
      "Pardons (ułaskawienia)",
      "Constitutional Tribunal motions (wnioski do TK)",
      "Legislative initiatives (inicjatywy ustawodawcze)",
    ],
    creator: {
      "@type": "Organization",
      name: "SimplyGo",
      url: "https://simplygo.pl",
    },
    license: "https://creativecommons.org/licenses/by/4.0/",
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSite) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dataset) }}
      />
    </>
  )
}
