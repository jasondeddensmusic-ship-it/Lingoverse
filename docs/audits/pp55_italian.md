# PP55 Audit: Italian — CILS/CELI Vocabulary Completeness

**Date**: 2026-04-19
**Exam Framework**: CILS (Università per Stranieri di Siena) / CELI (Università per Stranieri di Perugia)
**Source**: CILS official syllabus (unistrapg.it); CELI official vocabulary framework; Italian CEFR reference vocabulary
**Methodology**: Extracted all `trg:` values from `src/data/italian-v2/*.js` (3,924 raw forms → 3,903 lowercased unique forms after dedup), cross-referenced against a 203-word representative sample from CILS A1–B2 official thematic categories.

## Results by Level

| Level | Words Checked | Covered | Missing | Coverage |
|-------|--------------|---------|---------|----------|
| CILS A1 | 133 | 111 | 22 | 83.5% |
| CILS A2 | 37 | 28 | 9 | 75.7% |
| CILS B1 (sample 20) | 20 | 12 | 8 | 60.0% |
| CILS B2 (sample 13) | 13 | 10 | 3 | 76.9% |

## Missing Words by Level

### CILS A1 Missing (22 words)
`forse`, `lui`, `voi`, `loro`, `potere`, `lavorare`, `parlare`, `chiamarsi`, `sei`, `minuto`, `amico`, `amica`, `città`, `università`, `caffè`, `blu`, `giallo`, `viola`, `brutto`, `facile`, `difficile`, `interessante`

**Note**: `potere` (can/to be able), `lavorare` (to work), `parlare` (to speak) are high-priority CILS A1 verbs. Colors `blu`, `giallo`, `viola` and adjectives `facile`, `difficile`, `interessante` are explicitly listed in CILS A1 requirements.

### CILS A2 Missing (9 words)
`malattia`, `aereo`, `felice`, `annoiato`, `bevanda`, `spiegare`, `pensare`, `credere`, `decidere`

### CILS B1 Missing (8 of 20 sampled)
`confrontare`, `società`, `politica`, `economia`, `istruzione`, `sviluppo`, `vantaggio`, `svantaggio`

### CILS B2 Missing (3 of 13 sampled)
`argomentare`, `analizzare`, `criticare`

## Analysis

Italian has the best A1 coverage of all Romance languages audited (83.5%), reflecting the more mature state of the Italian v2 content. The A1 gaps are largely pronouns (`lui/voi/loro`), core verbs (`potere/lavorare/parlare`), and some basic adjectives.

A2 is solid at 75.7%. Key gaps are health vocabulary (`malattia` = illness, `aereo` = airplane) and emotional adjectives (`felice` = happy, `annoiato` = bored).

B1 drops to 60%. The missing civic/social vocabulary (`società`, `politica`, `economia`, `istruzione`) would be needed for CILS B1 reading comprehension on current events topics.

B2 is strong at 76.9%. Only 3 gaps in the sample: discourse verbs `argomentare`, `analizzare`, `criticare` which appear in CILS B2 writing task descriptors.

## Priority Gaps (CILS-required, no teach card found)

**A1 priority**: `potere`, `lavorare`, `parlare`, `lui/voi/loro`, `facile`, `difficile`, `interessante`, `università`
**A2 priority**: `malattia`, `felice`, `decidere`, `spiegare`, `pensare`
**B1 priority**: `società`, `politica`, `economia`, `istruzione`
**B2 priority**: `argomentare`, `analizzare`, `criticare`

## Limitations

- Full CILS vocabulary inventory is proprietary. This audit used the publicly available CILS syllabus descriptors and standard Italian CEFR reference materials.
- Italian has a large batch-file content base (`_batch*_u*_L*.js`); not all may be accessible via simple grep. Total taught count (3,903) may undercount if batch files use different field naming.
