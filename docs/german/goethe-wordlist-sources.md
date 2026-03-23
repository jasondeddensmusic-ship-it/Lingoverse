# Goethe-Institut Official Word Lists: Source Documentation

> Generated 2026-03-23 by Vocab Research Agent (Phase 0A)

## Summary

| Level | Source | Entries | Freely Available | Machine-Readable |
|-------|--------|---------|-----------------|------------------|
| A1 | Goethe-Zertifikat A1 / DWDS | 848 | Yes | JSON/CSV |
| A2 | Goethe-Zertifikat A2 / DWDS | 612 (non-cumulative) | Yes | JSON/CSV |
| B1 | Goethe-Zertifikat B1 / DWDS | 1,843 (non-cumulative) | Yes | JSON/CSV |
| B2 | **No official list exists** | N/A | N/A | N/A |
| **Cumulative A1-B1** | | **3,303** | | |

## DWDS Machine-Readable Downloads

- A1 JSON: `https://www.dwds.de/api/lemma/goethe/A1.json`
- A1 CSV: `https://www.dwds.de/api/lemma/goethe/A1.csv`
- A2 JSON: `https://www.dwds.de/api/lemma/goethe/A2.json`
- A2 CSV: `https://www.dwds.de/api/lemma/goethe/A2.csv`
- B1 JSON: `https://www.dwds.de/api/lemma/goethe/B1.json`
- B1 CSV: `https://www.dwds.de/api/lemma/goethe/B1.csv`

JSON entry structure: `{ lemma, pos, genera, articles, url }`

A1 POS breakdown: 403 nouns, 156 verbs, 80 adjectives, 48 adverbs, 33 cardinal numbers, 18 prepositions, 15 possessive pronouns, etc.

## Official PDF Sources

- A1: https://www.goethe.de/pro/relaunch/prf/de/A1_SD1_Wortliste_02.pdf
- A2: https://www.goethe.de/pro/relaunch/prf/en/Goethe-Zertifikat_A2_Wortliste.pdf
- B1: https://www.goethe.de/pro/relaunch/prf/en/Goethe-Zertifikat_B1_Wortliste.pdf

## B2 Strategy (no official list)

**Confirmed by D112 audit (2026-03-17) and Phase 0A research (2026-03-23): No official Goethe B2 Wortliste exists.**

D112 estimated the German B2 target at ~1,500 additional words beyond B1, for a total polyglot target of ~5,650 words A1-B2.

Best proxies for B2 vocabulary:
1. **telc "Einfach besser!" Wortschatzlisten** (free PDFs, vocational focus)
   - Einfach besser! 400 (German only): https://www.telc.net/fileadmin/user_upload/Downloads_Verlag/Einfach_besser_100_400_500/Wortschatzlisten/Einfach_besser_400_Wortschatzliste_Deutsch.pdf
   - Einfach besser! 500 (German-English): https://www.telc.net/fileadmin/user_upload/Downloads_Verlag/Einfach_besser_100_400_500/Wortschatzlisten/Einfach_besser_500_Wortschatzliste_Englisch.pdf
2. **Aspekte neu B2** (Klett/Langenscheidt) textbook vocabulary index — paywalled
3. **Sicher! B2** (Hueber) textbook vocabulary index — paywalled
4. **Frequency-based supplement**: DWDS top 5,000-6,000 lemmas minus A1-B1 official words
5. **Profile deutsch** software/database — covers A1-C2 but requires purchase

**Coverage math:**
- Official Goethe A1-B1: 3,303 lemmas (downloaded)
- B2 proxy target: ~1,500-2,300 additional words
- Total polyglot target: 5,000-6,000 words
- V1 currently teaches: ~1,690 unique words (Phase 0D count)
- Gap to fill: ~3,310-4,310 words across A1-B2

## Source Citations (Rule 14)

- DWDS Goethe Wortschatz: https://www.dwds.de/lemma/wortschatz-goethe-zertifikat
- DWDS API docs: https://www.dwds.de/d/api#wb-list-goethe
- Goethe B2 exam page (confirms no Wortliste): https://www.goethe.de/en/spr/prf/ueb/pb2.html
- telc Einfach besser! 500: https://www.telc.net/fileadmin/user_upload/Downloads_Verlag/Einfach_besser_100_400_500/Wortschatzlisten/Einfach_besser_500_Wortschatzliste_Englisch.pdf
