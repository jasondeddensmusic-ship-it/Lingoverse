# PP55 Audit: Spanish — DELE/PCIC Vocabulary Completeness

**Date**: 2026-04-19
**Exam Framework**: DELE (Instituto Cervantes) / Plan Curricular del Instituto Cervantes (PCIC)
**Source**: PCIC official vocabulary inventory (publicly available at cvc.cervantes.es); DELE official exam descriptors
**Methodology**: Extracted all `trg:` values from `src/data/spanish-v2/*.js` (4,380 raw → 4,837 lowercased unique forms), cross-referenced against a 221-word representative sample from PCIC A1–B2 thematic categories.

## Results by Level

| Level | Words Checked | Covered | Missing | Coverage |
|-------|--------------|---------|---------|----------|
| DELE/PCIC A1 | 135 | 108 | 27 | 80.0% |
| DELE/PCIC A2 | 49 | 27 | 22 | 55.1% |
| DELE/PCIC B1 (sample 22) | 22 | 6 | 16 | 27.3% |
| DELE/PCIC B2 (sample 15) | 15 | 5 | 10 | 33.3% |

## Missing Words by Level

### DELE/PCIC A1 Missing (27 words)
`nosotros`, `vosotros`, `ellas`, `usted`, `ustedes`, `hacer`, `querer`, `saber`, `llamarse`, `vender`, `hoy`, `minuto`, `semana`, `familia`, `marido`, `mujer`, `escuela`, `colegio`, `universidad`, `restaurante`, `cafetería`, `tienda`, `cine`, `fruta`, `feo`, `nuevo`, `fácil`

**Note**: Some core verbs (`hacer`, `querer`, `saber`) likely appear in grammar/verb table steps rather than standalone teach cards. Pronoun set gaps (`nosotros`, `vosotros`, `ustedes`) are genuine and notable.

### DELE/PCIC A2 Missing (22 words)
`necesitar`, `pensar`, `creer`, `esperar`, `decidir`, `preferir`, `recordar`, `olvidar`, `llegar`, `salir`, `entrar`, `pagar`, `euro`, `gratis`, `descuento`, `salud`, `enfermedad`, `dolor`, `emocionado`, `cena`, `menú`, `plato`

### DELE/PCIC B1 Missing (16 of 22 sampled)
`comparar`, `explicar`, `proponer`, `rechazar`, `medio ambiente`, `sociedad`, `política`, `economía`, `educación`, `libertad`, `ventaja`, `desventaja`, `consecuencia`, `solución`, `objetivo`, `problema social`

### DELE/PCIC B2 Missing (10 of 15 sampled)
`sintetizar`, `criticar`, `defender`, `demostrar`, `globalización`, `inmigración`, `discriminación`, `laicismo`, `desigualdad`, `justicia social`

## Analysis

A1 coverage is reasonable at 80% but has notable gaps in core pronouns (formal register `usted/ustedes`, plural `nosotros/vosotros`) and basic vocabulary (`familia`, `restaurante`, `universidad`, `fruta`).

A2 coverage drops to 55%, with common action verbs (`necesitar`, `pensar`, `creer`, `llegar`, `salir`, `pagar`) missing as standalone teach cards — these are A2-level PCIC requirements.

B1 and B2 coverage is critically low (27% and 33% respectively). Civic and social vocabulary (`sociedad`, `política`, `economía`, `educación`, `globalización`, `democracia` — misspelled in one form but in scope) which is central to DELE B1/B2 communication functions appears largely absent.

## Priority Gaps (PCIC-required, no teach card found)

**A1 priority**: `familia`, `restaurante`, `universidad`, `escuela`, `usted`, `hacer`, `querer`, `saber`
**A2 priority**: `llegar`, `salir`, `pagar`, `salud`, `necesitar`, `cena`
**B1 priority**: `sociedad`, `política`, `economía`, `educación`, `medio ambiente`, `libertad`
**B2 priority**: `globalización`, `inmigración`, `discriminación`, `desigualdad`

## Limitations

- PCIC full inventory contains approximately 8,000 lemmas across A1–C2. This audit sampled 221 words (about 2.8%).
- Full PCIC word lists require purchase or institutional access; this audit used the freely available PCIC thematic descriptors.
- Morphological matching covers common Spanish inflections but may miss irregular forms.
