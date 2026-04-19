# PP55 Audit: French — DELF Vocabulary Completeness

**Date**: 2026-04-19
**Exam Framework**: DELF A1/A2/B1/B2 (Alliance Française / CIEP official vocabulary)
**Source**: CECRL official thematic vocabulary lists; Alliance Française A1/A2 core word lists
**Methodology**: Extracted all `trg:` values from `src/data/french-v2/*.js` (4,713 raw → 5,058 lowercased unique forms), then cross-referenced against a 250-word representative sample drawn from official DELF level thematic lists. Fuzzy match allowed for 1–3 character morphological endings.

## Results by Level

| Level | Words Checked | Covered | Missing | Coverage |
|-------|--------------|---------|---------|----------|
| DELF A1 | 156 | 110 | 46 | 70.5% |
| DELF A2 | 50 | 38 | 12 | 76.0% |
| DELF B1 (sample 22) | 22 | 9 | 13 | 40.9% |
| DELF B2 (sample 19) | 19 | 10 | 9 | 52.6% |

## Missing Words by Level

### DELF A1 Missing (46 words)
`peut-être`, `ils`, `elles`, `nom`, `âge`, `nationalité`, `téléphone`, `email`, `famille`, `sœur`, `mari`, `femme`, `enfant`, `fils`, `quatre`, `six`, `neuf`, `dix`, `semaine`, `mardi`, `être`, `faire`, `dire`, `pouvoir`, `vouloir`, `savoir`, `trouver`, `boire`, `dormir`, `ville`, `école`, `restaurant`, `hôtel`, `magasin`, `cinéma`, `théâtre`, `légume`, `fruit`, `salade`, `mauvais`

**Note**: Many "missing" items such as `être`, `avoir`, `faire`, `pouvoir`, `vouloir` are core grammar verbs that appear extensively in tip/verb_table cards and examples but may not have standalone teach cards. The checker requires a `trg:` field match.

### DELF A2 Missing (12 words)
`prix`, `gratuit`, `cher`, `pas cher`, `santé`, `médecin`, `urgence`, `collègue`, `nuit`, `encore`, `content`, `question`

### DELF B1 Missing (13 of 22 sampled)
`proposer`, `refuser`, `conseiller`, `environnement`, `société`, `culture`, `politique`, `économie`, `éducation`, `progrès`, `liberté`, `égalité`, `conséquence`

### DELF B2 Missing (9 of 19 sampled)
`critiquer`, `défendre`, `illustrer`, `mondialisation`, `immigration`, `démocratie`, `biodiversité`, `inégalité`, `justice sociale`

## Analysis

The A1 gap is partially explained by grammar verbs being taught via verb tables rather than standalone teach cards. However, `famille`, `restaurant`, `légume`, `fruit`, `sœur`, `enfant`, `ville`, and `école` are core DELF A1 nouns that should have explicit teach cards.

B1 and B2 gaps are more concerning: abstract nouns and civic vocabulary (`société`, `politique`, `économie`, `liberté`, `égalité`, `mondialisation`, `démocratie`) are on the official DELF B1/B2 topic lists and appear absent. These represent genuine PP55 violations.

## Priority Gaps (DELF-required, no teach card found)

**A1 priority**: `famille`, `restaurant`, `légume`, `fruit`, `sœur`, `enfant`, `ville`, `école`, `dormir`, `boire`, `savoir`
**B1 priority**: `société`, `politique`, `économie`, `environnement`, `liberté`, `égalité`, `éducation`
**B2 priority**: `mondialisation`, `démocratie`, `immigration`, `inégalité`

## Limitations

- Sample size: 247 words from an estimated DELF A1–B2 list of approximately 3,000 unique lemmas. Full exhaustive audit would require the complete DELF official word lists (not freely redistributable).
- Morphological matching is approximate; inflected forms (conjugated verbs, adjective agreements) may mask true coverage.
- Verb table entries are not counted since they use `forms:[]` arrays, not `trg:` fields.
