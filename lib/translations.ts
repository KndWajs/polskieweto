export const translations = {
  pl: {
    title: "Statystyki Prezydentów III RP",
    subtitle: "Porównanie aktywności prezydentów III RP",
    description:
      "Prezentujemy szczegółowe statystyki dotyczące zawetowanych ustaw, podpisanych aktów prawnych, ułaskawień, wniosków do Trybunału Konstytucyjnego oraz inicjatyw ustawodawczych. Dowiedz się, ilu aktów prawnych zawetował każdy prezydent, ile osób ułaskawił i jakie było jego zaangażowanie w proces legislacyjny.",
    categoryDescriptions: {
      zawetowaneUstawy:
        "Sprawdź, ilu ustaw zawetował każdy prezydent Polski. Weto prezydenckie to jeden z najważniejszych instrumentów kontroli władzy wykonawczej przez głowę państwa.",
      podpisaneUstawy:
        "Zobacz liczbę ustaw podpisanych przez poszczególnych prezydentów III RP. Podpis prezydenta jest ostatnim etapem procesu legislacyjnego.",
      ulaskawienia:
        "Porównaj liczbę ułaskawień wydanych przez kolejnych prezydentów. Prawo łaski to prerogatywa prezydencka zapisana w Konstytucji RP.",
      wnioskiDoTK:
        "Analiza wniosków prezydentów do Trybunału Konstytucyjnego. Prezydent może występować z wnioskami o kontrolę konstytucyjności ustaw.",
      inicjatywyUstawodawcze:
        "Statystyki inicjatyw ustawodawczych prezydentów Polski. Prezydent posiada prawo inicjatywy ustawodawczej zgodnie z art. 118 Konstytucji RP.",
    },
    total: "Łącznie",
    sources: "Źródła",
    categories: {
      zawetowaneUstawy: "Zawetowane ustawy",
      podpisaneUstawy: "Podpisane ustawy",
      ulaskawienia: "Ułaskawienia",
      wnioskiDoTK: "Wnioski do TK",
      inicjatywyUstawodawcze: "Inicjatywy ustawodawcze",
    },
    footer: {
      simplygo: "SimplyGo - Odkrywaj Aktywności",
      wajs: "wajs.tech",
    },
  },
  en: {
    title: "Statistics of Presidents of the Third Polish Republic",
    subtitle: "Comparison of presidential activities in the Third Polish Republic",
    description:
      "We present detailed statistics on vetoed laws, signed legal acts, pardons, motions to the Constitutional Tribunal, and legislative initiatives. Discover how many legal acts each president vetoed, how many people they pardoned, and their involvement in the legislative process.",
    categoryDescriptions: {
      zawetowaneUstawy:
        "Check how many laws each Polish president vetoed. Presidential veto is one of the most important instruments for the head of state to control executive power.",
      podpisaneUstawy:
        "See the number of laws signed by individual presidents of the Third Republic. The president's signature is the final stage of the legislative process.",
      ulaskawienia:
        "Compare the number of pardons issued by successive presidents. The right of pardon is a presidential prerogative enshrined in the Constitution of Poland.",
      wnioskiDoTK:
        "Analysis of presidential motions to the Constitutional Tribunal. The president can submit requests for constitutional review of laws.",
      inicjatywyUstawodawcze:
        "Statistics of Polish presidents' legislative initiatives. The president has the right of legislative initiative according to Article 118 of the Constitution.",
    },
    total: "Total",
    sources: "Sources",
    categories: {
      zawetowaneUstawy: "Vetoed Laws",
      podpisaneUstawy: "Signed Laws",
      ulaskawienia: "Pardons",
      wnioskiDoTK: "Constitutional Tribunal Motions",
      inicjatywyUstawodawcze: "Legislative Initiatives",
    },
    footer: {
      simplygo: "SimplyGo - Discover Activities",
      wajs: "wajs.tech",
    },
  },
}

export type Language = keyof typeof translations
