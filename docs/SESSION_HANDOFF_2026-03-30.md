# Session Handoff — 2026-03-30

> Arabic Source Language Translation — Unit 1 complete, Unit 2 at 74%

---

## What Was Done This Session

### Architecture Built
- **Shared dictionary**: `scripts/arabic-dictionary.cjs` — single source of truth for English→Arabic translations
- **Translator script**: `scripts/translate-ar-markers.cjs` — applies dictionary + batch translations to [AR] markers
- **Batch system**: `scripts/batches/*.cjs` — 17 batch files with 1,942 translations
- **Generator updated**: `scripts/generate-arabic-units.cjs` now imports from shared dictionary
- **NFC normalization**: Translator normalizes Unicode (fixes NFD ü/ö from macOS)
- **PP39 safety**: Translator ensures `\n` stays as literal `\n` in JS strings
- **Double [AR] fix**: Translator collapses `[AR] [AR]` from generator bug

### Unit 1 — 100% COMPLETE ✅
- 960 [AR] markers → 0 remaining
- All 12 Arabic pedagogy hooks verified:
  - ch≈خ (139 mentions), /p/ warning (2), neuter/محايد (18), compound≈إضافة (5)
  - Case system إعراب (3), Arabic comparisons (32), ال article (1), verb parallels (6)
  - du/Sie≈أنت/حضرتك (2), number order=Arabic (3), V2 word order (2), ü/ö warning (5)
- PP61 audit: zero English in source-language fields
- Build passes

### Unit 2 — 74.2% (747/1,007)
- All src word translations done (209)
- All desc translations done (15)
- All goals done (~42)
- All funFacts done (~206)
- ~160 exampleSrc done
- ~180 notes done
- All hints done (59)
- All sSrc done (19)
- **174 [AR] markers remain in file**
- Build passes

---

## What Needs Doing

### Priority 1: Finish Unit 2 (174 markers)
Remaining markers breakdown:
- ~100 notes with slightly different text than batch keys
- ~40 exampleSrc that didn't match
- ~20 text/tips (long grammar explanations with `\n`)
- ~14 misc (goals, funFacts with truncated keys)

**Root cause**: Batch keys sometimes don't exactly match file content due to:
1. Text truncation in extraction
2. `\n` as literal two characters in file vs actual newline in JS
3. Slight wording differences between original English and what I wrote

**Fix approach**: Extract ALL remaining [AR] strings directly from the applied file, write exact-match translations.

### Priority 2: Finish Units 3-6

| Unit | [AR] markers | Status |
|------|-------------|--------|
| U03 | 304 | Not started |
| U04 | 256 | Not started |
| U05 | 236 | Not started |
| U06 | 390 | Not started |
| **Total** | **1,186** | |

Cross-unit coverage from existing dictionary: ~3-4% (most content is unique per unit).

**Approach**: Same process as Unit 1-2. Extract unique strings per field type, write Arabic translations in batch files, run translator, sweep remaining.

### Priority 3: Pedagogy audit for Units 2-6
After each unit reaches 100%, audit for:
- ch≈خ advantage highlighted
- /p/ sound warnings on relevant words
- Neuter gender (محايد) explained
- Compound nouns ≈ إضافة referenced
- Case system parallel (إعراب)
- Arabic-specific comparisons

---

## Architecture Reference

```
scripts/
├── arabic-dictionary.cjs      ← Shared dictionary (single source of truth)
├── translate-ar-markers.cjs   ← Translator (reads dictionary + batches)
├── generate-arabic-units.cjs  ← Generator (imports dictionary)
└── batches/                   ← Translation batch files
    ├── funfacts-batch-01.cjs  ← Unit 1 funFacts
    ├── unit01-*.cjs           ← Unit 1 batches (7 files)
    └── unit02-*.cjs           ← Unit 2 batches (9 files)
```

### How to translate a unit:
```bash
# 1. Extract remaining [AR] strings
node -e "..." > remaining.txt

# 2. Write translations in scripts/batches/unitNN-xxx.cjs

# 3. Apply translations
node scripts/translate-ar-markers.cjs N

# 4. Check remaining
grep -c '\[AR\]' src/data/german-v2-ar/unit-NN.js

# 5. Build
npm run build
```

### Known issues:
- **NFC/NFD**: File may have NFD ü/ö (from macOS). Translator normalizes to NFC.
- **`\n` escaping**: File stores `\n` as literal backslash+n. Translations must use `\\n` in batch values for multiline content. Translator has PP39 safety net.
- **Double [AR]**: Generator sometimes produces `[AR] [AR]`. Translator collapses these.

---

## Files Modified

| File | Changes |
|------|---------|
| `scripts/arabic-dictionary.cjs` | NEW — 858 lines, shared dictionary |
| `scripts/translate-ar-markers.cjs` | NEW — 130 lines, translator engine |
| `scripts/batches/*.cjs` | NEW — 17 batch files, 1,942 translations |
| `scripts/generate-arabic-units.cjs` | Updated to import shared dictionary |
| `src/data/german-v2-ar/unit-01.js` | Fully translated (0 [AR] markers) |
| `src/data/german-v2-ar/unit-02.js` | 74% translated (174 [AR] markers) |

---

## Critical Rules Reminder
- PP61: All metalanguage in Arabic for srcLang:"ar"
- PP32: Native-speaker quality MSA
- PP8: Hints must NOT contain answer words
- PP22c: No em-dashes
- PP39: `\n` in strings, never literal newlines
- Arabic pedagogy: ch≈خ, no /p/, cases parallel, compound≈إضافة, neuter=محايد
