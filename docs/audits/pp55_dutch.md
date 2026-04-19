# PP55 Audit: Dutch — NT2 Staatsexamen Vocabulary Completeness

**Date**: 2026-04-19
**Exam Framework**: Staatsexamen NT2 Programma I (integration level, A2-B1) and Programma II (higher education level, B2)
**Source**: CvTE (College voor Toetsen en Examens) NT2 official framework; CNaVT vocabulary reference; Dutch CEFR vocabulary list (inburgering.nl)
**Methodology**: Extracted all `trg:` values from `src/data/dutch-v2/*.js` (4,643 raw → 4,812 lowercased unique forms), cross-referenced against a 173-word representative sample from NT2 official thematic vocabulary.

## Results by Level

| Level | Words Checked | Covered | Missing | Coverage |
|-------|--------------|---------|---------|----------|
| NT2 A1/A2 | 139 | 128 | 11 | 92.1% |
| NT2 B1 (sample 21) | 21 | 13 | 8 | 61.9% |
| NT2 B2 (sample 13) | 13 | 5 | 8 | 38.5% |

## Missing Words by Level

### NT2 A1/A2 Missing (11 words)
`slapen`, `pardon`, `duizend`, `restaurant`, `café`, `vliegveld`, `vlees`, `slecht`, `lelijk`, `makkelijk`, `saai`

**Note**: These are genuine gaps. `vliegveld` (airport) and `restaurant` are basic NT2 A2 words. `slapen` (to sleep), `vlees` (meat), `slecht` (bad), `makkelijk` (easy) are common everyday vocabulary. `café` may be taught as a loanword without a dedicated teach card.

### NT2 B1 Missing (8 of 21 sampled)
`vergelijken`, `voorstellen`, `weigeren`, `accepteren`, `politiek`, `economie`, `voordeel`, `nadeel`

### NT2 B2 Missing (8 of 13 sampled)
`bekritiseren`, `verdedigen`, `immigratie`, `discriminatie`, `democratie`, `biodiversiteit`, `ongelijkheid`, `sociale rechtvaardigheid`

## Analysis

Dutch has the highest A1/A2 coverage of all languages audited (92.1%), consistent with its status as a mature v2 build with 89 units and 5,106+ teach cards. The 11 A1/A2 gaps are small and remediable.

B1 coverage drops to 62%, with civic verbs (`vergelijken` = compare, `weigeren` = refuse, `accepteren` = accept) and political vocabulary (`politiek`, `economie`) missing. These are tested in NT2 Programma I reading comprehension.

B2 shows a significant drop to 38.5%. Advanced civic discourse (`immigratie`, `discriminatie`, `democratie`, `biodiversiteit`) is absent — these appear in NT2 Programma II, which targets university-track learners.

## Priority Gaps (NT2-required, no teach card found)

**A1/A2 priority**: `slapen`, `restaurant`, `vliegveld`, `vlees`, `slecht`, `makkelijk`
**B1 priority**: `politiek`, `economie`, `vergelijken`, `voordeel`, `nadeel`
**B2 priority**: `immigratie`, `discriminatie`, `democratie`, `biodiversiteit`, `ongelijkheid`

## Limitations

- Full NT2 word list (approximately 4,000 lemmas) is available from CvTE but not freely redistributable. This audit sampled 173 words from official thematic categories.
- Dutch grammar notes state current grammar content is "mock/placeholder" — this audit covers vocabulary only, not grammar.
