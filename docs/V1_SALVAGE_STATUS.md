# V1 Salvage Status (2026-04-17)

Audit of V1 legacy unit files against V2 rehaul content, to ensure no content is lost before V1 archival.

## Method

1. **Basic matcher** (`scripts/check_v1_salvage.cjs`): substring match of V1 `trg`/`nl` fields in V2 content after article stripping.
2. **Smart matcher** (`scripts/check_v1_salvage_smart.cjs`): handles compound entries (`der Arzt / die Ärztin`), sentence content-word matching, comma-separated lists, trailing ellipsis, multi-language article stripping.
3. **Deep base-form check**: manual verification of "missing" items against V2 using ripgrep.

## Current State

**V1 files are still imported in `src/utils.js` (line 518) alongside V2.** No content is currently lost. V1 must remain imported until the gaps below are filled.

| Language | V1 teach items | Smart-matcher coverage | Genuinely missing (base-form) | Status |
|---|---|---|---|---|
| Dutch | 1136 | 99.3% | 8 | Minor salvage pending |
| Korean | 1187 | 99.8% | 2 | Minor salvage pending |
| German | 1343 | 87.9% | ~24 | Moderate salvage pending |
| French | 914 | 100.0% | 0 | **ARCHIVED 2026-04-18** → `.claude/archive/v1-legacy/units-french.js` |
| Spanish | 1250 | 99.3% | 9 | Minor salvage pending |

Smart-matcher false positives (~138 for German) come from V1 using ASCII transliterations (`koennte`, `spaeter`, `naechste`), parenthetical grammar annotations (`gefahren (sein)`, `ist gelaufen`), formula placeholders (`Er/Sie wohnt in...`), comparative patterns (`gut - besser - am besten`), contractions with expansions (`am (an + dem)`), and declension-pattern strings (`der gute Kaffee`). These are either covered in V2 as standard content (proper umlaut forms, base verbs, contractions, grammar modules) or are pedagogical pattern strings that don't need direct teach cards in V2.

## Genuine Salvage Targets

### Dutch (8 items) — B1 Feelings/Emotions
- `België` (country name, masculine/singular)
- `gefrustreerd` (frustrated)
- `verward` (confused)
- `uitkijken naar` (to look forward to)
- `ongerust` (worried/anxious)
- `gespannen` (tense)
- `jaloers` (jealous)
- `de mislukking` (the failure)

Target unit: Dutch B1 feelings expansion lesson.

### Korean (2 items) — B1 Advanced Emotions
- `감동하다` (gam-dong-ha-da, to be moved/touched)
- `혼란스럽다` (hol-lan-seu-reop-da, to be confused)

Target unit: Korean B1 emotions lesson.

### Spanish (9 items) — B1 Feelings/States
- `frustrado/a` (frustrated)
- `decepcionado/a` (disappointed)
- `impresionado/a` (impressed)
- `confundido/a` (confused)
- `satisfecho/a` (satisfied)
- `celoso/a` (jealous)
- `tener ganas de` (to feel like / to want to)
- `seguro/a de sí mismo/a` (self-confident)
- `tenso/a` (tense)

Target unit: Spanish B1 feelings expansion (unit-11/12 imperfect scene lessons are nearby thematically).

### German (~24 items) — Distributed

**Feelings (4):** wütend, frustriert, zerstört, schlapp
**Colors (1):** lila
**Clothing (1):** der Gürtel
**Animals (1):** der Löwe
**Travel (2):** das Gepäck, das Ladegerät
**Work/Professions (4):** der Programmierer, der Feuerwehrmann, die Probezeit, die Gleitzeit
**Legal (1):** das Bußgeld
**Compass (1):** östlich
**Numbers (2):** dreiunddreißig, neunundneunzig
**B2 Academic (3):** bereuen, erörtern, die Erörterung
**B2 Idioms/Formulas (3):** Hals über Kopf, In Anlehnung an, Laut Angaben

Target units: Distribute across existing topical units (feelings → unit with emotions; travel → travel unit; etc.) without exceeding PP43 density limits.

## Recommended Archival Order

1. **French v1** — ARCHIVED 2026-04-18. Moved to `.claude/archive/v1-legacy/units-french.js`; imports removed from `src/utils.js` (line 13 + `_RAW_UNITS` spread). Salvage checkers (`check_v1_salvage.cjs`, `check_v1_salvage_smart.cjs`) updated to read from archive path. Build passes. French still reports 914/914 = 100% in the audit.
2. After salvage completes per language (Korean 2, Dutch 8, Spanish 9, German 24): archive that language's V1 file following the same pattern.

## Files Preserved

V1 files remain at `src/data/units-{lang}.js` and are still imported by `src/utils.js`. They are not yet archived. The smart salvage checker (`scripts/check_v1_salvage_smart.cjs`) can be re-run at any time to reverify coverage.

## Re-running the Audit

```
node scripts/check_v1_salvage_smart.cjs
```

Prints coverage percentage and lists missing items per language.
