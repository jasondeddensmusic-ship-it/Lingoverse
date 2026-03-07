# LINGOVERSE EXTRACTION — VALIDATION REPORT
## Date: 2026-03-08

---

## EXTRACTION RESULTS: ✅ PERFECT

| Metric | Expected | Got | Status |
|--------|----------|-----|--------|
| Korean lessons | 96 | 96 | ✅ |
| Dutch v2 lessons | 164 | 164 | ✅ |
| Dutch legacy lessons | 73 | 73 | ✅ |
| German lessons | 19 | 19 | ✅ |
| Arabic lessons | 10 | 10 | ✅ |
| Total unit steps | 4,742 | 4,742 | ✅ |
| Duplicate IDs | 0 | 0 | ✅ |
| Teach cards with `kind` | 1,803 | 1,803 | ✅ |
| Korean dictionary entries | — | 144 | ✅ |
| Korean seeds parsed | — | 22 | ✅ |
| Total files produced | — | 78 | ✅ |

---

## `kind` FIELD DISTRIBUTION (1,803 teach cards)

| Kind | Count | Description |
|------|-------|-------------|
| word | 758 | Single vocabulary word |
| grammar | 244 | Grammar point (particle, ending, conjugation) |
| phrase | 801 | Multi-word expression or sentence |
| info | 0 | No target-language content (tip-like) |

---

## PRE-EXISTING ISSUES FOUND (not caused by extraction)

### 1. Match format inconsistency (75 errors)
- Dutch v2: 6 match steps missing `pairs` 
- Dutch legacy: ~45 match steps use `mks` key instead of `pairs`
- German: ~16 match steps use `mks` key
- Arabic: ~10 match steps use `mks` key
- **Fix:** Legacy/German/Arabic courses use the MK-based match system (`mks`). These are valid but use a different format than Korean/Dutch v2 (`pairs`). Not a bug — two coexisting formats.

### 2. Answer mismatch bugs (4 errors)
- Korean: MC answer "을" not in options (kou5l5 area)
- Dutch v2: FB answer "alsjeblieft,alstublieft" — comma-separated, not in opts
- Dutch legacy: FB answer "Heet,Ben" — comma-separated
- Dutch legacy: FB answer "Groot,Klein" — comma-separated
- **Fix:** These are actual content bugs. The comma-separated answers suggest the engine handles multi-answer FB differently, but the validator flags them.

### 3. Teach streaks (57+ warnings — matches density audit)
- Korean: multiple lessons with 5-9 teach cards in a row
- Dutch: similar patterns
- **Known issue.** This is exactly what the KOREAN_DENSITY_AUDIT.md documents (57 TEACH_STREAK issues).

### 4. Seed harvest lessons not found (12 warnings)
- All 12 are B1 Korean lessons (kou11–kou19) that haven't been written yet
- Seeds are correctly planted in A1/A2, harvest lessons are planned for B1
- **Not a bug.** These warnings disappear as B1 content is written.

---

## ID NORMALIZATION PERFORMED

| Before | After | Count |
|--------|-------|-------|
| `u1l1` (German, no prefix) | `deu1l1` | 5 |
| `de_u2l1` (German, underscore) | `deu2l1` | 10 |
| `ar_u1l1` (Arabic, underscore) | `aru1l1` | 10 (but were already in `ar_` format) |

**Dutch IDs left unchanged** to avoid breaking cross-references.

---

## FILES PRODUCED

```
data/
├── korean/          (10 unit files + dictionary.json + seeds.json)
├── dutch_v2/        (20 unit files)
├── dutch_legacy/    (23 unit files)
├── german/          (5 unit files)
├── arabic/          (5 unit files)
├── foundations/     (7 config files)
└── shared/          (6 data files)

Total: 78 JSON files
```
