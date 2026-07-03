# Research Reference — Presidential Statistics

This file is a quick-reference for AI research sessions. It summarizes all current values and sources so an AI can compare against new findings and update `presidential-stats.json`.

**Data file to update:** `data/presidential-stats.json`
**Last full review:** 2026-07-03 (wszystkie 5 kategorii; skorygowano zaniżone liczniki podpisanych ustaw i inicjatyw — szczegóły w sekcjach)
**Last partial update:** 2026-06-11 (weta + podpisane ustawy; ułaskawienia/TK/inicjatywy sprawdzone — bez zmian)

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
| **Nawrocki (25–)** | **39** | **236** | **4** | **9** | **19** |

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

**New vetoes since May review (counted 2026-06-11, total 37):**
- 11.05.2026 — 2 weta: likwidacja CBA / koordynacja antykorupcyjna + ustrój rolny (https://www.prezydent.pl/prawo/ustawy-zawetowane/prezydent-podpisal-9-ustaw-2-zawetowal,120110)
- 02.06.2026 — 1 weto: rozszerzenie systemu SENT (https://www.polsatnews.pl/wiadomosc/2026-06-02/piec-podpisow-i-weto-najnowsza-decyzja-prezydenta/)
- 11.06.2026 — 3 weta: Ordynacja podatkowa/KKS, **rynek kryptoaktywów (trzecie weto tej ustawy — poprzednie 01.12.2025 i 12.02.2026)**, świadczenia opieki zdrowotnej (choroby zakaźne / egzaminy językowe lekarzy) (https://www.prezydent.pl/aktualnosci/wydarzenia/prezydent-rp-podpisal-siedem-ustaw-zawetowal-trzy,121634)

**New vetoes counted 2026-07-03 (total 39):**
- 02.07.2026 — 2 weta: ustawa o zapobieganiu zanieczyszczaniu morza przez statki („realizacja Zielonego Ładu", https://www.bankier.pl/wiadomosc/Prezydent-przeciw-ustawie-morskiej-To-realizacja-Zielonego-Ladu-9162917.html) + ustawa o prawach i obowiązkach ucznia / reforma MEN („szkolna prokuratura", https://www.pap.pl/aktualnosci/prezydent-zawetowal-ustawe-o-prawach-i-obowiazkach-ucznia). Komunikat zbiorczy: „podpisał 5 ustaw; 2 zawetował, 1 do TK" (https://www.radiomaryja.pl/informacje/prezydent-karol-nawrocki-podpisal-piec-ustaw-jedna-skierowal-do-tk-a-dwie-zawetowal/)
- Cross-check: 19.06.2026 prezydent publicznie podał „37 zawetowałem" (Polsat News), 29.06 wPolityce podało 37 — zgodne z naszym licznikiem przed wetami z 02.07.

**Search tips:** Nawrocki's veto count changes frequently. Check wetomat.pl for live count, TVN24 and Onet for the latest running tally. Historical values (pre-2025) are stable. Note: wetomat.pl and prezydent.pl block automated fetches (HTTP 403) — verify counts via news coverage of official communiqués ("prezydent podpisał X ustaw; Y zawetował").

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

**Search tips:** Count monthly from prezydent.pl/prawo/ustawy-podpisane. Aug=31, Sep=3, Oct=24, Nov=30, Dec=44, Jan 2026=15, Feb 2026=10, Mar 2026=10 (as of Mar 9) → total 167. Often published alongside veto counts. Update 11.06.2026: 192 (stan 05.05) + maj=9 (wszystkie 11.05) + 02.06=5 + 11.06=7 → **213**. Oficjalna strona miesięczna maja: https://www.prezydent.pl/prawo/ustawy-podpisane/ustawy-podpisane-w-kwietniu-2026-r,120142 (slug mówi "kwietniu", ale to strona majowa — liczy się ID).

**⚠️ Korekta 03.07.2026 — licznik przypięty do oficjalnych sum KPRP:** nasz dotychczasowy licznik oparty na komunikatach prasowych (213 na 11.06) był zaniżony o ~10 ustaw — miesięczne strony oficjalne zawierają też ustawy podpisywane bez komunikatów (np. ratyfikacyjne). Oficjalne punkty odniesienia:
- 19.06.2026 — prezydent publicznie: „podpisałem **229** ustaw" (po podpisaniu 6 tego dnia; https://www.polsatnews.pl/wiadomosc/2026-06-19/kolejne-ustawy-z-podpisem-prezydenta-nawrocki-zdradza-szczegoly/)
- 29.06.2026 — +2 (nowela KK + uproszczenie procedur administracyjnych) → łącznie **231** (podane wprost: https://wpolityce.pl/polityka/763791-prezydent-nawrocki-podjal-decyzje-ws-dwoch-kolejnych-ustaw)
- 02.07.2026 — +5 (m.in. spółdzielnie uczniowskie/Prawo oświatowe, deregulacja energetyki — czytelniejsze rachunki, nowela KPK/KKS-ENA) → **236** (https://dorzeczy.pl/opinie/909709/prezydent-podpisal-piec-ustaw-sa-zmiany-dla-szkol-energetyki-i-pomorza.html)
Strona miesięczna czerwca: https://www.prezydent.pl/prawo/ustawy-podpisane/ustawy-podpisane-w-czerwcu-2026-r,121443. Przy kolejnych aktualizacjach dodawaj przyrosty do 236 (stan 02.07.2026) i szukaj publicznie podawanych sum („podpisałem X ustaw") jako punktów kontrolnych.

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

**Search tips:** Pardon data updates less frequently. Historical values very stable. Nawrocki pardoned 3 people on Feb 2, 2026 (his first use of pardon power) + 1 (Weronika Krawczyk, 13.04.2026) = **4**. Checked 03.07.2026 — no new pardons in May–July 2026. Check prezydent.pl/aktualnosci/prawo-laski/ for new decisions.

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

**New sources found (Feb–Mar 2026):**
- https://www.prezydent.pl/prawo/wnioski-do-tk — Official list (5 motions total as of Mar 2026)
- Budget 2026 sent to TK (Jan 19, 2026): https://www.prawo.pl/podatki/prezydent-podpisal-budzet-na-2026-rok,536834.html
- Road safety law sent to TK (Dec 22, 2025): https://www.prezydent.pl/prawo/wnioski-do-tk/wniosek-do-trybunalu-konstytucyjnego,110189
- Cybersecurity/KSC law sent to TK (Feb 19, 2026): https://www.prawo.pl/biznes/prezydent-podpisal-ustawe-o-krajowym-systemie-cyberbezpieczenstwa-i-skierowal-wniosek-do-tk,1537069.html

**Search tips:** Check prezydent.pl/prawo/wnioski-do-tk/ for an official list of current president's TK motions. 5 total as of Mar 2026: Min. Sprawiedliwości regulation (Oct), KPP delegalization (Nov), road safety (Dec), budget 2026 (Jan), cybersecurity/KSC law (Feb 19, 2026). Then: PIP reform (02.04), +2 preventive motions (mid-Apr, „podpisał 7 ustaw, dwie do TK"), judges' oath (27.04) → 8 (stan 05.05).

**New motion counted 2026-07-03 (total 9):**
- 02.07.2026 — nowela ustawy o akcyzie (e-papierosy na indukcję elektromagnetyczną) skierowana do TK w trybie kontroli prewencyjnej; zarzuty: chaos legislacyjny, krótkie vacatio legis (https://www.wnp.pl/rynki/rzad-szuka-pieniedzy-prezydent-kieruje-nowele-ustawy-o-akcyzie-do-trybunalu-konstytucyjnego,1077840.html; potwierdzenie: https://www.niedziela.pl/artykul/125662/Prezydent-podpisal-5-ustaw)

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

**⚠️ Korekta 03.07.2026 (17 → 19):** wcześniejsze liczenie przyrostowe przeoczyło dwa projekty:
- **Polski Fundusz Inwestycji Obronnych** („polskie SAFE 0%") — złożony do Sejmu 10.03.2026 (Bogucki: „Sejm może już pracować nad złożonym projektem"; https://www.prawo.pl/samorzad/prezydencki-projekt-ustawy-o-polskim-funduszu-inwestycji-obronnych-juz-w-sejmie,1540437.html; na oficjalnej liście: https://www.prezydent.pl/prawo/inicjatywy-ustawodawcze/spotkanie-ws-polskiego-safe-0,116695). Uwaga: brak jeszcze druku sejmowego „przedstawiony przez Prezydenta RP"; PSL złożyło 24.03 własną, „poprawioną" wersję jako projekt poselski.
- **Rynek kryptoaktywów** — złożony 06.05.2026 (dzień po pełnym przeglądzie 05.05), druk sejmowy nr 2528 z 08.05.2026 (https://www.rp.pl/prawo-dla-ciebie/art44322471-karol-nawrocki-zlozyl-w-sejmie-projekt-ustawy-o-kryptoaktywach-wyciagnieta-reka-pana-prezydenta)

**Weryfikacja przez API Sejmu (obchodzi CAPTCHA na www):** `curl https://api.sejm.gov.pl/sejm/term10/prints` → filtruj tytuły zawierające „przedstawiony przez Prezydenta" i deliveryDate ≥ 2025-08-06. Stan 03.07.2026: 14 druków (druki nadawane z ~3-miesięcznym opóźnieniem — to dolna granica; np. projekt portowy „Tak! Dla Polskich Portów" z X 2025 dostał druk 2394 dopiero 27.03.2026). Timeline zliczeń: 13 (03.12.2025, Polsat) → 16 (Feb 2026, lista oficjalna) → +PFIO (10.03) → +wieś (07.04) → +krypto (06.05) = **19**. Brak nowych inicjatyw w czerwcu 2026 (sprawdzono).

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
