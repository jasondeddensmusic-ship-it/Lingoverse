# V1 Salvage Status (updated 2026-04-18 — COMPLETE)

**All five V1 files are archived.** Last updated 2026-04-18. See CLAUDE.md Known Blockers for the post-archival summary. This document preserves the original audit methodology for reference.

Audit of V1 legacy unit files against V2 rehaul content, performed before V1 archival to ensure no content was lost.

## Method

1. **Basic matcher** (`scripts/check_v1_salvage.cjs`): substring match of V1 `trg`/`nl` fields in V2 content after article stripping.
2. **Smart matcher** (`scripts/check_v1_salvage_smart.cjs`): handles compound entries (`der Arzt / die Ärztin`), sentence content-word matching, comma-separated lists, trailing ellipsis, multi-language article stripping.
3. **Deep base-form check**: manual verification of "missing" items against V2 using ripgrep.

## Current State (2026-04-18 — COMPLETE)

**All V1 files archived** to `.claude/archive/v1-legacy/`. Imports removed from `src/utils.js` and `src/data/dictionary.js`. Index bundle shrank 7 MB.

| Language | V1 teach items | Smart-matcher coverage (post-salvage) | Status |
|---|---|---|---|
| Dutch | 1136 | 100.0% | **ARCHIVED 2026-04-18** (8 gaps added to `dutch-v2/_temp_b1gap_L10.js` + `_L20.js`) |
| Korean | 1187 | 100.0% | **ARCHIVED 2026-04-18** (2 gaps added to `korean-v2/_temp_b1gap_L12.js`) |
| German | 1343 | 90.1% | **ARCHIVED 2026-04-18** (23 gaps added as new `german-v2/_salvage_v1.js` wired into Unit 35; 133 residual items are pedagogical pattern strings, not vocabulary) |
| French | 914 | 100.0% | **ARCHIVED 2026-04-18** |
| Spanish | 1250 | 100.0% | **ARCHIVED 2026-04-18** (9 gaps added to `spanish-v2/_temp_b1gap_L04.js`) |

Checker upgrades shipped with archival: unicode-escape decoding (fixes Dutch "Belgi\\u00eb" vs "België") and Spanish `/a` gender-pair support (fixes "frustrado/a" matching "frustrado").

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
