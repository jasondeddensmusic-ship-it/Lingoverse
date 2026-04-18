# Polish Matrix — per-language × per-dimension completion

> A single table showing where each language stands on every pedagogical / product dimension. Autonomous agents read this to pick the biggest gap.
>
> Updated manually at session end, or automatically by `scripts/generate_polish_matrix.cjs` (TODO).

## Legend

- ✅ Complete to the current definition of "done"
- 🟡 Partial — exists but needs polish / scale-up
- ❌ Not done

## Matrix

| Dimension | DE | KO | NL | FR | ES | IT | JA | ZH | PT | RU |
|---|---|---|---|---|---|---|---|---|---|---|
| **Validator green (PP8/43/48/64)** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **PP66 no-filler** | 🟡 post-cleanup | 🟡 | 🟡 | 🟡 | 🟡 | 🟡 | ✅ | ✅ | ✅ | 🟡 |
| **PP67 production-mode minimum** | ❌ unaudited | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| **PP68 example-vocab integrity** | ❌ unaudited | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| **PP52 teach-before-use** | 🟡 spot-checked | 🟡 | 🟡 | 🟡 | 🟡 | 🟡 | 🟡 | 🟡 | 🟡 | 🟡 |
| **PP55 exam-vocab completeness** | ✅ Goethe | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| **PP57 grammar construct completeness** | ✅ 116 items | ❌ | 🟡 mock | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| **PP58 communicative functions mapped** | ✅ 84 functions | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| **PP61 metalanguage in source lang** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **PP65 kanji+furigana** | — | — | — | — | — | — | ✅ unit files / 🟡 batch files | — | — | — |
| **CEFR distribution concept-driven (PP56)** | ✅ | ✅ | ❌ template | ❌ template | ❌ template | ✅ | ✅ | ✅ HSK | ✅ | ✅ TRKI |
| **Cognate corpus (EN→target)** | ❌ | n/a | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| **Foundations content** | ❌ placeholder | ✅ Hangul | ✅ | ✅ | ✅ | ✅ | ✅ kana+kanji | ✅ Hanzi | ✅ | ✅ Cyrillic |
| **Arabic source (trAr field)** | 🟡 A1–B1 complete / B2 gap 1821 | — | — | — | — | — | — | — | — | — |
| **Audio (TTS)** | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| **Audio (native)** | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| **Speech recognition drills** | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| **Verumius story dialogue (text)** | ✅ 36 units | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| **Verumius story art** | 🟡 placeholder | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| **Cultural tip cards** | ✅ | ✅ deep | 🟡 | 🟡 | 🟡 | 🟡 | 🟡 | 🟡 | 🟡 | 🟡 |
| **Grammar teacher-board rewrite** | ✅ | ✅ 47 entries | ❌ mock | ✅ 52 | ✅ 53 | ✅ 51 | ✅ 54 | ✅ 53 | ✅ 50 | 🟡 2 placeholder |
| **Idioms** | ✅ | ✅ | 🟡 mock | 🟡 | 🟡 | ✅ | ✅ | ✅ | 🟡 | ❌ |
| **A2 dialogue 3+ turns** | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ 138 missing | ❌ 28 missing | ✅ | ✅ | ✅ |

## Summary gaps (2026-04-19)

Languages that need MOST work to reach "premium" bar (German as reference):
1. **Korean, Japanese** — missing exam-vocab completeness audit, grammar-construct completeness match, communicative functions mapping.
2. **Spanish, French, Italian** — missing cognate corpus (high ROI), missing PP55/57/58, CEFR distribution still template-based for FR/ES.
3. **Dutch** — mock grammar/idioms content needs teacher-board rewrite.
4. **Russian** — grammar module is placeholder.
5. **All** — PP67 and PP68 never audited.

## Unblocking a language

To move one language from prototype-tier to premium:
1. Run PP63/PP68 audit → close the gaps
2. Audit PP55 vocab-completeness vs official exam list → fill gaps
3. Audit PP57 grammar-construct completeness → fill gaps
4. Add cognate corpus (for cognate-rich pairs)
5. Ship Verumius story dialogue text
6. Provision TTS audio (requires credentials)
7. Native audio recording (requires contractor budget)
