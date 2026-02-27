# Research Reference — Presidential Statistics

This file is a quick-reference for AI research sessions. It summarizes all current values and sources so an AI can compare against new findings and update `presidential-stats.json`.

**Data file to update:** `data/presidential-stats.json`
**Last full review:** 2026-02-27

---

## Presidents Reference

| ID | Name | Party | Term | Type |
|----|------|-------|------|------|
| 8 | Wojciech Jaruzelski | PZPR | 1989–1990 | historical |
| 7 | Lech Wałęsa | Independent | 1990–1995 | historical |
| 6 | Aleksander Kwaśniewski | SLD | 1995–2000 | historical |
| 5 | Aleksander Kwaśniewski | SLD | 2000–2005 | historical |
| 4 | Lech Kaczyński | PiS | 2005–2010 | historical |
| 3 | Bronisław Komorowski | PO | 2010–2015 | historical |
| 2 | Andrzej Duda | PiS | 2015–2020 | historical |
| 1 | Andrzej Duda | PiS | 2020–2025 | historical |
| 9 | Karol Nawrocki | PiS | 2025-08-06– | **active** |

> **Active president** (id 9) uses ISO date `"2025-08-06"` as term start — the app calculates duration dynamically. This entry needs the most frequent updates.

---

## Current Values Summary

| President (term) | Weta | Podpisane | Ułaskawienia | Wnioski TK | Inicjatywy |
|---|---|---|---|---|---|
| Jaruzelski (89-90) | 1 | 120 | 607 | 0 | 0 |
| Wałęsa (90-95) | 27 | 410 | 3454 | 11 | 33 |
| Kwaśniewski (95-00) | 11 | 671 | 3252 | 13 | 20 |
| Kwaśniewski (00-05) | 24 | 1123 | 1050 | 12 | 24 |
| Kaczyński (05-10) | 18 | 804 | 201 | 16 | 44 |
| Komorowski (10-15) | 4 | 930 | 360 | 12 | 26 |
| Duda (15-20) | 9 | 1066 | 94 | 10 | 31 |
| Duda (20-25) | 10 | 784 | 52 | 51 | 31 |
| **Nawrocki (25–)** | **27** | **157** | **3** | **4** | **16** |

---

## Category Details & Sources

### 1. Zawetowane ustawy (Vetoed Laws)

**What to search:** `Nawrocki weto ustawa 2025 2026`, `prezydent weto ile`, `weta prezydenta lista`

**Key sources:**
- https://tvn24.pl/polska/weta-prezydentow-kto-ile-zglosil-ra759688-ls2457703 — TVN24 veto analysis (updated regularly)
- https://tvn24.pl/polska/weta-karola-nawrockiego-rekord-wszystkie-ustawy-zawetowane-przez-prezydenta-st8784705 — TVN24 Nawrocki vetoes (as of 4.12.2025)
- https://www.gazetaprawna.pl/wiadomosci/kraj/artykuly/9849526,kancelaria-prezydenta-podsumowuje-10-lat-prezydentury-andrzeja-dudy-1.html — Gazeta Prawna Duda 10-year summary
- https://pravda.org.pl/weto-prezydenci — pravda.org.pl veto overview
- https://www.prezydent.pl/kancelaria/archiwum/archiwum-lecha-kaczynskiego/aktualnosci/rok-2009/zestawienie-aktywnosci-legislacyjnej-prezydentow-rp-w-latach-1995-2009 — Kancelaria Prezydenta 1995-2009

**New sources found (Feb 2026):**
- https://wetomat.pl/ — Wetomat.pl live veto tracker (best single source for current count)
- https://konkret24.tvn24.pl/polityka/karol-nawrocki-zawetowal-rekordowa-liczbe-ustaw-policzylismy-st8881758 — Konkret24 fact-check with running totals
- https://www.prezydent.pl/prawo/ustawy-zawetowane — Official list of vetoed laws

**Search tips:** Nawrocki's veto count changes frequently. Check wetomat.pl for live count, TVN24 and Onet for the latest running tally. Historical values (pre-2025) are stable.

---

### 2. Podpisane ustawy (Signed Laws)

**What to search:** `Nawrocki podpisane ustawy ile 2025 2026`, `prezydent podpisał ustawy liczba`

**Key sources:**
- https://www.gazetaprawna.pl/wiadomosci/kraj/artykuly/9849526,kancelaria-prezydenta-podsumowuje-10-lat-prezydentury-andrzeja-dudy-1.html — Duda summary
- https://www.prezydent.pl/kancelaria/archiwum/andrzej-duda/prezydent/piec-lat-prezydentury-andrzeja-dudy/legislacja — Duda 5-year archival data
- https://www.prezydent.pl/kancelaria/archiwum/archiwum-lecha-kaczynskiego/aktualnosci/rok-2009/zestawienie-aktywnosci-legislacyjnej-prezydentow-rp-w-latach-1995-2009 — Kancelaria 1995-2009
- https://wydarzenia.interia.pl/kraj/news-podsumowanie-pieciu-lat-rzadow-prezydenta-bronislawa-komorow,nId,1864061 — Komorowski summary
- https://przegladdziennikarski.pl/wojciech-jaruzelski-poczatki-polskiej-prezydentury/ — Jaruzelski data

**New sources found (Feb 2026):**
- https://www.prezydent.pl/prawo/ustawy-podpisane — Official monthly breakdown of signed laws (best primary source — count per month)

**Search tips:** Count monthly from prezydent.pl/prawo/ustawy-podpisane. Aug=31, Sep=3, Oct=24, Nov=30, Dec=44, Jan 2026=15, Feb 2026=10 → total 157. Often published alongside veto counts.

---

### 3. Ułaskawienia (Pardons)

**What to search:** `Nawrocki ułaskawienie prawo łaski 2025 2026`, `prezydent ułaskawienia ile`, `prawo łaski prezydent statystyki`

**Key sources:**
- https://wiadomosci.wp.pl/wybory-prezydenckie-2020-andrzej-duda-ulaskawil-zabojce-dilera-i-kierujacego-po-pijaku-6529533356439169a — WP Duda pardons
- http://solidarnosc.rzeszow.org.pl/prezydenckie-ulaskawienia-kto-byl-rekordzista/ — Historical pardon ranking
- https://pl.wikipedia.org/wiki/U%C5%82askawienie — Wikipedia overview
- https://www.wprost.pl/tygodnik/9372/fabryka-ulaskawien.html — Wprost historical analysis
- https://wiadomosci.onet.pl/kraj/ulaskawienie-na-horyzoncie-polacy-w-sondazu-ocenili-przywilej-nawrockiego/dnm6l6g — Onet on Nawrocki pardons

**New sources found (Feb 2026):**
- https://www.prezydent.pl/aktualnosci/prawo-laski/2026 — Official pardon decisions page
- https://tvn24.pl/polska/prezydent-karol-nawrocki-ulaskawil-trzy-osoby-znamy-uzasadnienia-st8881270 — First pardons (3 people, Feb 2, 2026)

**Search tips:** Pardon data updates less frequently. Historical values very stable. Nawrocki pardoned 3 people on Feb 2, 2026 (his first use of pardon power). Check prezydent.pl/aktualnosci/prawo-laski/ for new decisions.

---

### 4. Wnioski do TK (Constitutional Tribunal Motions)

**What to search:** `Nawrocki wniosek Trybunał Konstytucyjny 2025 2026`, `prezydent wnioski do TK`, `prezydent zaskarżył ustawę TK`

**Key sources:**
- https://www.prezydent.pl/kancelaria/archiwum/archiwum-lecha-kaczynskiego/aktualnosci/rok-2009/zestawienie-aktywnosci-legislacyjnej-prezydentow-rp-w-latach-1995-2009 — Kancelaria 1995-2009
- https://pravda.org.pl/weto-prezydenci — includes TK motion data
- https://www.gazetaprawna.pl/wiadomosci/kraj/artykuly/9849526,kancelaria-prezydenta-podsumowuje-10-lat-prezydentury-andrzeja-dudy-1.html — Duda summary
- https://www.prawo.pl/samorzad/prezydentura-bronislawa-komorowskiego-26-projektow-ustaw-4-weta,207078.html — Komorowski summary
- https://polskieradio24.pl/artykul/3616008,nawrocki-chcial-delegalizacji-tej-partii-jest-decyzja-trybunalu-konstytucyjnego — Nawrocki KPP motion
- https://www.prezydent.pl/prawo/wnioski-do-tk/wniosek-do-tk-ws-rozporzadzenia-ministra-sprawiedliwosci,109371 — official TK motion page

**New sources found (Feb 2026):**
- https://www.prezydent.pl/prawo/wnioski-do-tk — Official list (4 motions total as of Feb 2026)
- Budget 2026 sent to TK (Jan 19, 2026): https://www.prawo.pl/podatki/prezydent-podpisal-budzet-na-2026-rok,536834.html
- Road safety law sent to TK (Dec 22, 2025): https://www.prezydent.pl/prawo/wnioski-do-tk/wniosek-do-trybunalu-konstytucyjnego,110189

**Search tips:** Check prezydent.pl/prawo/wnioski-do-tk/ for an official list of current president's TK motions. 4 total: Min. Sprawiedliwości regulation (Oct), KPP delegalization (Nov), road safety (Dec), budget 2026 (Jan).

---

### 5. Inicjatywy ustawodawcze (Legislative Initiatives)

**What to search:** `Nawrocki inicjatywa ustawodawcza projekt ustawy 2025 2026`, `prezydent projekty ustaw ile`

**Key sources:**
- https://www.prezydent.pl/kancelaria/archiwum/archiwum-lecha-kaczynskiego/aktualnosci/rok-2009/zestawienie-aktywnosci-legislacyjnej-prezydentow-rp-w-latach-1995-2009 — Kancelaria 1995-2009
- https://pravda.org.pl/weto-prezydenci — includes legislative initiative data
- https://www.gazetaprawna.pl/wiadomosci/kraj/artykuly/9849526,kancelaria-prezydenta-podsumowuje-10-lat-prezydentury-andrzeja-dudy-1.html — Duda summary
- https://www.prawo.pl/samorzad/prezydentura-bronislawa-komorowskiego-26-projektow-ustaw-4-weta,207078.html — Komorowski summary
- https://demagog.org.pl/wypowiedzi/ktory-z-polskich-prezydentow-zglosil-najwiecej-projektow-ustaw/ — Demagog analysis
- https://www.polsatnews.pl/wiadomosc/2025-12-03/sejm-zadecyduje-o-prezydenckim-wecie-jest-decyzja-koalicji-w-tej-sprawie/ — Nawrocki initiatives (as of 3.12.2025)

**New sources found (Feb 2026):**
- https://www.prezydent.pl/prawo/inicjatywy-ustawodawcze — Official list (16 initiatives as of Feb 2026)
- Latest: "Projekt ustawy o przywróceniu prawa do sądu" (Feb 19, 2026)
- Coal mining law (Jan 13, 2026), animal protection (Dec 2, 2025)

**Search tips:** prezydent.pl/prawo/inicjatywy-ustawodawcze is the canonical list. Also check Sejm website for presidential bill submissions.

---

## How to Update

1. **Search** using the queries listed per category, adding the current year
2. **Compare** new findings with the values in the summary table above
3. **Update** `data/presidential-stats.json` — change the `value` field for the relevant president/category
4. **Add new sources** to the `sources` array of the category if you found a new reference
5. **Update this file** — change the summary table and the "Last full review" date
6. Historical presidents (id 1-8) rarely change — focus research on **Nawrocki (id 9)**

## General Search Queries for Full Update

```
Nawrocki prezydent statystyki 2026
weta prezydenta Nawrockiego ile
Nawrocki podpisane ustawy
Nawrocki ułaskawienie prawo łaski
Nawrocki wniosek Trybunał Konstytucyjny
Nawrocki inicjatywa ustawodawcza projekt ustawy
statystyki prezydentów III RP porównanie
```
