# Research Reference — Presidential Statistics

This file is a quick-reference for AI research sessions. It summarizes all current values and sources so an AI can compare against new findings and update `presidential-stats.json`.

**Data file to update:** `data/presidential-stats.json`
**Last full review:** 2026-07-18 (wszystkie 5 kategorii ponownie zweryfikowane enumeratywnie ze źródła kanonicznego prezydent.pl przez `curl`; jedno nowe wydarzenie od 03.07 — komunikat z 17.07.2026 „podpisał 9 ustaw; 2 zawetował": weta 39→41, podpisane 236→245, TK 10→11; ułaskawienia 4 i inicjatywy 22 bez zmian)
**Previous full review:** 2026-07-03 (wszystkie 5 kategorii **zweryfikowane enumeratywnie ze źródła kanonicznego** — patrz sekcja „Programmatic verification" na dole; skorygowano: podpisane 213→236, weta 37→39, TK 8→10, inicjatywy 17→22)
**Last partial update:** 2026-06-11 (weta + podpisane ustawy; ułaskawienia/TK/inicjatywy sprawdzone — bez zmian)

> **WAŻNE (lekcja z 03.07.2026):** liczenie wyłącznie przyrostowe (news z okresu od ostatniego przeglądu) systematycznie gubi pozycje — tak przeoczono 5 inicjatyw i 1 wniosek do TK. Każdy przegląd MUSI kończyć się enumeracją z oficjalnych list prezydent.pl (dostępnych przez `curl` — sekcja na dole) i uzgodnieniem z publicznie podawanymi sumami.

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
| **Nawrocki (25–)** | **41** | **245** | **4** | **11** | **22** |

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

**New vetoes counted 2026-07-18 (total 41):**
- 17.07.2026 — 2 weta w komunikacie „podpisał 9 ustaw; 2 zawetował": ustawa o statusie osoby najbliższej w związku i umowie o wspólnym pożyciu (druk 2110) + przepisy wprowadzające tę ustawę (druk 2111) — czyli tzw. związki partnerskie (https://www.prezydent.pl/prawo/ustawy-zawetowane/prezydent-rp-podpisal-9-ustaw-2-zawetowal,123465; cross-check rp.pl art44842161, dorzeczy 916009). Między 02.07 a 17.07 brak innych komunikatów wetujących.

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

**⚠️ Korekta 03.07.2026 — licznik zweryfikowany enumeratywnie (236):** dotychczasowy licznik oparty na komunikatach prasowych (213 na 11.06) był zaniżony o 10 ustaw — komunikaty nie obejmują wszystkich podpisów (np. ratyfikacyjnych). **Kanoniczna metoda: sumowanie oficjalnych stron miesięcznych** (dostępne curl-em, patrz „Programmatic verification"). Zliczenie 03.07.2026:

| Miesiąc | Ustaw | Miesiąc | Ustaw |
|---|---|---|---|
| 08.2025 | 31 | 02.2026 | 10 |
| 09.2025 | 3 | 03.2026 | 27 |
| 10.2025 | 24 | 04.2026 | 15 |
| 11.2025 | 30 | 05.2026 | 12 |
| 12.2025 | 44 | 06.2026 | 20 (02.06=5, 11.06=7, 19.06=6, 29.06=2) |
| 01.2026 | 15 | 07.2026 | 14 (02.07=5, 17.07=9) |

**Suma = 245** (aktualizacja 18.07.2026: lipiec 5→14 po komunikacie z 17.07 „podpisał 9 ustaw"). Poprzednia suma 236 (stan na 02.07). Zgadza się co do sztuki z publicznymi kotwicami: „podpisałem 229 ustaw" (prezydent, 19.06; https://www.polsatnews.pl/wiadomosc/2026-06-19/kolejne-ustawy-z-podpisem-prezydenta-nawrocki-zdradza-szczegoly/), 231 po 29.06 (https://wpolityce.pl/polityka/763791-prezydent-nawrocki-podjal-decyzje-ws-dwoch-kolejnych-ustaw), +5 na 02.07 (https://dorzeczy.pl/opinie/909709/prezydent-podpisal-piec-ustaw-sa-zmiany-dla-szkol-energetyki-i-pomorza.html). Uwaga na pułapki parsowania stron miesięcznych: część miesięcy nie ma numeracji (IX, I, V, VII), a w kwietniu numery 10 i 12 są zjedzone przez formatowanie — licz po wzorcu „podpisana <data>" ORAZ po numeracji i bierz spójny wynik.

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

**Search tips:** Pardon data updates less frequently. Historical values very stable. Nawrocki pardoned 3 people on Feb 2, 2026 (his first use of pardon power) + 1 (Weronika Krawczyk, 13.04.2026) = **4**. Checked 18.07.2026 — strona prawo-laski/2026 nadal ma tylko 2 wpisy decyzyjne (02.02 i 13.04), brak nowych ułaskawień. Check prezydent.pl/aktualnosci/prawo-laski/ for new decisions.

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
- Road safety law sent to TK (Dec 22, 2025): https://www.prezydent.pl/prawo/wnioski-do-tk/wniosek-do-tk-w-trybie-kontroli-nastepczej,112479 (strona 110189 to wniosek ws. KPP z 12.11.2025)
- Cybersecurity/KSC law sent to TK (Feb 19, 2026): https://www.prawo.pl/biznes/prezydent-podpisal-ustawe-o-krajowym-systemie-cyberbezpieczenstwa-i-skierowal-wniosek-do-tk,1537069.html

**Pełna lista wniosków (zweryfikowana 03.07.2026, łącznie 10):**
1. 28.10.2025 — rozporządzenie Min. Sprawiedliwości (+ zawiadomienie do prokuratury; https://www.prezydent.pl/prawo/wnioski-do-tk/wniosek-do-tk-ws-rozporzadzenia-ministra-sprawiedliwosci,109371)
2. 12.11.2025 — delegalizacja Komunistycznej Partii Polski (cele i działalność partii; **UWAGA: to jest strona id 110189** — wcześniej błędnie przypisana w tym pliku do bezpieczeństwa ruchu drogowego; https://www.prezydent.pl/prawo/wnioski-do-tk/wniosek-do-trybunalu-konstytucyjnego,110189)
3. 22.12.2025 — bezpieczeństwo ruchu drogowego, kontrola następcza (definicja „nielegalnego wyścigu"; https://www.prezydent.pl/prawo/wnioski-do-tk/wniosek-do-tk-w-trybie-kontroli-nastepczej,112479)
4. 19.01.2026 — ustawa budżetowa 2026 (https://www.prezydent.pl/prawo/wnioski-do-tk/prezydent-ustawa-budzetowa,113542)
5. 19.02.2026 — ustawa o Krajowym Systemie Cyberbezpieczeństwa, kontrola następcza (**brak w sekcji wnioski-do-tk na prezydent.pl** — sekcja jest niekompletna; źródło: https://www.prawo.pl/biznes/prezydent-podpisal-ustawe-o-krajowym-systemie-cyberbezpieczenstwa-i-skierowal-wniosek-do-tk,1537069.html)
6-7. 02.04.2026 — **dwa** wnioski w jednym komunikacie: Państwowa Inspekcja Pracy (druk 2250) + publiczny transport zbiorowy (druk 2245), kontrola następcza (https://www.prezydent.pl/prawo/wnioski-do-tk/prezydent-podpisal-7-ustaw-dwie-skierowal-do-trybunalu-konstytucyjnego,118082). UWAGA: PIP to jeden z tych dwóch, nie osobny wniosek — wcześniejsze liczenie „PIP + 2" było błędne (kompensowało się z innym błędem).
8. 27.04.2026 — ślubowanie nowych sędziów TK (**brak w sekcji wnioski-do-tk**; https://www.rp.pl/sady-i-trybunaly/art44255101-slubowanie-nowych-sedziow-tk-prezydent-skierowal-wniosek-do-trybunalu)
9. 11.05.2026 — ustawa o zmianie ustawy o transporcie kolejowym, kontrola następcza (**ukryty w komunikacie „podpisał 9 ustaw; 2 zawetował"** — wniosek wymieniony dopiero w treści, nie w tytule! https://www.prezydent.pl/prawo/wnioski-do-tk/prezydent-podpisal-9-ustaw-2-zawetowal,120110)
10. 02.07.2026 — nowela ustawy o akcyzie (e-papierosy na indukcję), kontrola prewencyjna (https://www.wnp.pl/rynki/rzad-szuka-pieniedzy-prezydent-kieruje-nowele-ustawy-o-akcyzie-do-trybunalu-konstytucyjnego,1077840.html)
11. 17.07.2026 — ustawa o zmianie ustawy o pomocy społecznej (druk 2550), kontrola **następcza** — prezydent PODPISAŁ ustawę i zapowiedział skierowanie do TK; wniosek ukryty w komunikacie „podpisał 9 ustaw; 2 zawetował" (nie w tytule) i liczony też w podpisanych ustawach (jak transport kolejowy z 11.05). Źródło: https://www.prezydent.pl/prawo/ustawy-zawetowane/prezydent-rp-podpisal-9-ustaw-2-zawetowal,123465

**Search tips:** sekcja prezydent.pl/prawo/wnioski-do-tk jest NIEKOMPLETNA (brakuje w niej KSC i ślubowania sędziów) i zawiera komunikaty zbiorcze, w których wniosek do TK pojawia się tylko w treści. Zawsze czytaj pełną treść komunikatów o podpisaniu ustaw — mogą zawierać wnioski do TK.

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

**⚠️ Korekta 03.07.2026 (17 → 22, enumeracja oficjalnej listy):** liczenie przyrostowe przeoczyło aż 5 projektów. Oficjalna lista prezydent.pl/prawo/inicjatywy-ustawodawcze (4 strony paginacji, pobrana curl-em 03.07.2026) zawiera **22 pozycje**:
1. 07.08.2025 — TAK! dla CPK (pierwsza inicjatywa)
2. 08.08.2025 — „PIT Zero. Rodzina na plus"
3. 09.08.2025 — „Ochrona polskiej wsi"
4. 21.08.2025 — zamrożenie cen energii elektrycznej
5. 25.08.2025 — nowelizacja ustawy o pomocy obywatelom Ukrainy
6. 29.08.2025 — Fundusz Rozwoju Technologii Przełomowych
7. 29.09.2025 — zmiany w ustawie o IPN i Kodeksie karnym
8. 29.09.2025 — zmiana ustawy o obywatelstwie polskim
9. 17.10.2025 — „Tak! Dla Polskich Portów" (druk 2394 nadany dopiero 27.03.2026!)
10. 03.11.2025 — „Godna emerytura"
11. 07.11.2025 — „Tani prąd –33%"
12. 07.11.2025 — nowelizacja Prawa o ruchu drogowym
13. 17.11.2025 — zmiany w ustawie o Funduszu Medycznym
14. 02.12.2025 — nowelizacja ustawy o ochronie zwierząt
15. 13.01.2026 — nowelizacja ustawy o funkcjonowaniu górnictwa węgla kamiennego
16. 19.02.2026 — przywrócenie prawa do sądu i rozpoznanie sprawy bez nieuzasadnionej zwłoki
17. 10.03.2026 — Polski Fundusz Inwestycji Obronnych („polskie SAFE 0%") — **przeoczony w przeglądzie 05.05**
18. 27.03.2026 — zmiany w Kodeksie postępowania karnego — **przeoczony**
19. 07.04.2026 — ochrona funkcji produkcyjnej wsi
20. 06.05.2026 — rynek kryptoaktywów (druk 2528 z 08.05) — **przeoczony w checku 11.06**
21. 11.06.2026 — świadczenia opieki zdrowotnej finansowane ze środków publicznych (HIV/HCV; ogłoszony przy wecie ustawy o świadczeniach) — **przeoczony**
22. 29.06.2026 — ustanowienie Dnia Działacza Opozycji Antykomunistycznej i Osoby Represjonowanej

**Re-weryfikacja 18.07.2026:** oficjalna lista nadal ma **22 pozycje** (najnowsza 29.06.2026) — brak nowych inicjatyw w okresie 03–18.07.2026. Bez zmian.

**Weryfikacja przez API Sejmu (dolna granica):** `curl https://api.sejm.gov.pl/sejm/term10/prints` → filtruj tytuły zawierające „przedstawiony przez Prezydenta" i deliveryDate ≥ 2025-08-06. Stan 03.07.2026: 14 druków — druki nadawane z opóźnieniem 1–5 miesięcy, więc API Sejmu służy tylko jako cross-check, nie jako licznik. Licznikiem jest enumeracja oficjalnej listy (patrz sekcja „Programmatic verification").

---

## How to Update

1. **Enumerate** — pobierz oficjalne listy z prezydent.pl curl-em i policz od zera (sekcja „Programmatic verification" niżej). To jest podstawa licznika, nie news-y.
2. **Anchor** — znajdź publicznie podane sumy („podpisałem X ustaw, Y zawetowałem" — prezydent/rzecznik podają je co kilka tygodni) i uzgodnij z enumeracją. Rozbieżność = szukaj błędu, nie uśredniaj.
3. **Search** news z okresu od ostatniego przeglądu (zapytania per kategoria niżej) — do wychwycenia wydarzeń świeższych niż listy oficjalne i jako źródła do `sources`.
4. **Update** `data/presidential-stats.json` — change the `value` field for the relevant president/category
5. **Add new sources** to the `sources` array of the category if you found a new reference
6. **Update this file** — change the summary table, per-category notes and the "Last full review" date
7. Historical presidents (id 1-8) rarely change — focus research on **Nawrocki (id 9)**
8. **Bump footer date** in `components/stats-dashboard.tsx` (`t.lastUpdated`: DD.MM.YYYY)

---

## Programmatic verification (APIs & metodyka) — dopisane 03.07.2026

### Dostęp do prezydent.pl (źródło kanoniczne)

**prezydent.pl zwraca 200 dla zwykłego `curl`** — blokuje (403) tylko narzędzia z botowym User-Agentem (WebFetch itp.). Wayback Machine niedostępny z tego środowiska, wetomat.pl → 403. Czyli: **używaj `curl` bezpośrednio na prezydent.pl**.

Kluczowe URL-e (wszystkie z paginacją `/page,N` gdy lista długa):
- `https://www.prezydent.pl/prawo/inicjatywy-ustawodawcze` — 22 pozycje na 03.07.2026 (4 strony)
- `https://www.prezydent.pl/prawo/ustawy-zawetowane` — wpisy-komunikaty (jeden wpis = 1–4 weta!)
- `https://www.prezydent.pl/prawo/wnioski-do-tk` — NIEKOMPLETNA (patrz sekcja TK)
- `https://www.prezydent.pl/prawo/ustawy-podpisane` — linki do stron miesięcznych (kanoniczny licznik podpisów)
- `https://www.prezydent.pl/aktualnosci/prawo-laski/2026` — decyzje ułaskawieniowe (2 wpisy = 4 osoby na 03.07.2026)

Parsowanie HTML: karty list mają `class="articles-item"`, tytuł w atrybucie `title=""` linku, data w `articles-item__date`; treść artykułu w `articles-single__description`. Strony miesięczne podpisanych ustaw: pozycje „N. Ustawa z dnia … (nr druku sejmowego NNNN) – podpisana D miesiąca RRRR r.".

```bash
# przykład: pobranie listy inicjatyw (wszystkie strony paginacji)
curl -s "https://www.prezydent.pl/prawo/inicjatywy-ustawodawcze" -o init-1.html
for p in 2 3 4; do curl -s "https://www.prezydent.pl/prawo/inicjatywy-ustawodawcze/page,$p" -o init-$p.html; done
# potem: wyciągnij pary (title, articles-item__date) i policz unikalne URL-e
```

### API Sejmu (bez CAPTCHA — www.sejm.gov.pl ma CAPTCHA, API nie)

- `https://api.sejm.gov.pl/sejm/term10/prints` — wszystkie druki X kadencji (JSON). Prezydenckie projekty: tytuł zaczyna się od „Przedstawiony przez Prezydenta Rzeczypospolitej Polskiej projekt ustawy…". **Dolna granica** liczby inicjatyw: druki nadawane 1–5 mies. po złożeniu (np. „Tak! Dla Polskich Portów" z 17.10.2025 → druk 2394 z 27.03.2026). Stan 03.07.2026: 14 druków vs 22 inicjatywy na liście oficjalnej.
- `https://api.sejm.gov.pl/eli/acts/DU/2026` — ELI / Dziennik Ustaw (JSON, pole `count`, `items[].type` == „Ustawa"). Cross-check publikacji ustaw (uwaga: data publikacji ≠ data podpisu; publikowane są też ustawy po odrzuceniu weta).

```bash
curl -s "https://api.sejm.gov.pl/sejm/term10/prints" -o prints.json
node -e "const a=require('./prints.json');const p=a.filter(d=>(d.title||'').toLowerCase().includes('przedstawiony przez prezydenta')&&d.deliveryDate>='2025-08-06');console.log(p.length);p.forEach(d=>console.log(d.number,d.deliveryDate,d.title.slice(0,90)))"
```

### Pułapki (wszystkie zaobserwowane w praktyce)

1. **Sekcje tematyczne prezydent.pl są niekompletne.** W `ustawy-zawetowane` brakuje weta SENT z 02.06.2026; w `wnioski-do-tk` brakuje wniosku KSC (19.02) i ślubowania sędziów (27.04). Sekcje ≠ rejestr; traktuj jako pomocnicze.
2. **Komunikaty zbiorcze ukrywają pozycje w treści.** „Prezydent podpisał 9 ustaw; 2 zawetował" (11.05.2026) zawiera W TREŚCI także wniosek do TK ws. transportu kolejowego — niewidoczny w tytule. Zawsze czytaj pełną treść komunikatu.
3. **Jeden wpis listy ≠ jedna pozycja.** Wpis weta może obejmować 1–4 ustawy; komunikat TK z 02.04 = 2 wnioski. Licz pozycje z treści, nie wpisy list.
4. **Numeracja stron miesięcznych bywa zepsuta** (kwiecień 2026: brak numerów 10 i 12 w HTML) i część miesięcy jej nie ma — licz dwiema metodami (numeracja + wystąpienia „podpisana <data>") i porównaj.
5. **Stare newsy wyskakują w wynikach świeżych zapytań** (weto ws. DSA ze stycznia wyglądało jak czerwcowe). Zawsze sprawdzaj datę publikacji artykułu, nie datę z zapytania.
6. **Liczenie przyrostowe dryfuje.** Między 05.05 a 03.07 przyrostowy licznik zgubił 5 inicjatyw i 1 wniosek TK, a podpisane ustawy rozjechały się o 10. Pełna enumeracja przy KAŻDYM przeglądzie.
7. **Kotwice publiczne są wiarygodne.** Sumy podawane przez prezydenta/rzecznika („podpisałem 229 ustaw" 19.06; „231" 29.06 wg wPolityce) zgodziły się co do sztuki z enumeracją stron miesięcznych — używaj ich do uzgodnienia.
8. **Slugi URL bywają mylące** (strona majowa podpisów miała slug „…-w-kwietniu-…" zanim ją poprawiono; strona id 110189 „Wniosek do TK" to KPP z 12.11, nie ruch drogowy) — identyfikuj strony po treści i ID, nie po slugu.

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
