# Session Handoff — 2026-03-29 (Session 4)

> Arabic Source Language German Curriculum — Translation + Expansion

---

## What Was Done This Session

### PP32 Content Quality Audit — COMPLETE

All 36 German v2 units audited for content quality:
- 45 formula-pattern tips rewritten to natural prose (PP36)
- 1 semantic mismatch fixed: U1 L2 "Gern geschehen" dialogue context
- 26 missing story card moods added (U1, U7-U12)
- Commit: `ef45df9` on main

Final validation: 369 lessons, 9,396 steps, 5,147 teach cards. Zero violations on all checks.

---

## Current Task: Arabic SRC → German TRG Curriculum

### What Exists

**Infrastructure** (all working, committed on main):
- Onboarding 2-step flow: "I speak Arabic" → "I want to learn German"
- `srcLang` filtering in unit loader (falls back to English if no Arabic units)
- RTL flags in LessonEngine (`srcRtl`, `srcDir` defined but not yet applied to elements)
- Generator script: `scripts/generate-arabic-units.cjs`
- Data directory: `src/data/german-v2-ar/` with 6 A1 unit scaffolds
- Wrapper files: `units-german-v2-ar-a1.js`, `units-german-v2-ar.js`
- Utils import: `UNITS_GERMAN_V2_AR` in `_RAW_UNITS`

**A1 Scaffolds** (6 units, cloned from English):

| Unit | [AR] markers | Teach cards | Some words pre-translated |
|------|-------------|-------------|--------------------------|
| U01 | 960 | 173 | Hallo→مرحبًا, der Zug→القطار, sprechen→يتكلم |
| U02 | 1,018 | 206 | ~18 words |
| U03 | 803 | 149 | ~8 words |
| U04 | 635 | 101 | ~2 words |
| U05 | 489 | 66 | ~32 words |
| U06 | 1,126 | 212 | ~3 words |
| **Total** | **5,031** | **907** | ~92 words |

### What Needs To Be Done

#### Phase 1: Fill [AR] markers in A1 (6 units)

**Fields needing Arabic translation** (listed by priority):

1. **`src`** — Word/phrase translation. Learner sees this. MOST CRITICAL.
2. **`exampleSrc`** — Example sentence translation in Arabic.
3. **`sSrc`** — Quiz sentence translation (fb/drag_fill steps).
4. **`note`** — Pedagogical note. Must be REWRITTEN for Arabic speakers, not just translated. E.g., point out where German sounds like Arabic (ch ≈ خ) or differs (no /p/ in Arabic).
5. **`funFact`** — Etymology/cultural note in Arabic.
6. **`hint`** — Quiz hint in Arabic. Must NOT contain answer words (PP8!).
7. **`desc`** — Intro description in Arabic.
8. **`goals`** — Intro learning goals in Arabic.
9. **`text`** — Tip explanation text in Arabic.
10. **`deepDive`** — Grammar deep dive in Arabic.
11. **`story.src`** — Story card translations in Arabic.

**Arabic-specific pedagogy** (must be reflected in notes/tips):
- German "w" = /v/ sound (no Arabic equivalent for /v/)
- German "p" vs "b" — Arabic speakers struggle (Arabic has no /p/)
- German "ch" = similar to Arabic خ — point this out as an ADVANTAGE
- German cases (4: Nom/Acc/Dat/Gen) parallel Arabic cases (3: مرفوع/منصوب/مجرور)
- German 3 genders (m/f/n) vs Arabic 2 (m/f) — neuter concept needs explanation
- German compound nouns parallel Arabic إضافة (idafa)
- German definite articles der/die/das vs Arabic ال (al-)
- Word order: German V2 rule has no Arabic parallel

**PP61 for Arabic source**: All metalanguage in ARABIC (not English). This means notes, hints, funFacts, tips, intros, deepDives are all in Arabic for Arabic-speaking learners.

#### Phase 2: Generate A2-B2 scaffolds

```bash
for i in $(seq 7 36); do node scripts/generate-arabic-units.cjs $i; done
```

Then create wrapper files:
- `src/data/units-german-v2-ar-a2.js` (imports U07-U12)
- `src/data/units-german-v2-ar-b1.js` (imports U13-U24)
- `src/data/units-german-v2-ar-b2.js` (imports U25-U36)

Uncomment imports in `src/data/units-german-v2-ar.js`.

#### Phase 3: Apply RTL to LessonEngine

`srcDir` is defined at line 13 of `src/components/LessonEngine.jsx` but not yet spread into elements. Apply `...srcDir` to all source-text containers:
- Teach card `src` display
- `exampleSrc` display
- `note` and `funFact` display
- Quiz `hint` display
- `sSrc` display
- Intro `desc` and `goals`
- Tip `text` and `deepDive`
- Story `src` (narrator translations)

#### Phase 4: Arabic Foundations

Create `FOUNDATIONS_BY_LANG.de_ar` in `src/data/foundations.js`:
- German alphabet from Arabic speaker perspective
- Sounds that don't exist in Arabic: /p/, /v/, /ü/, /ö/
- ß and umlauts explained for Arabic speakers
- Reading practice with Arabic transliteration

#### Phase 5: Validation

1. `npm run build` — must pass
2. PP8 scan on Arabic hints (must not leak answers)
3. RTL rendering test in browser
4. PP61: all metalanguage in Arabic (not English) for Arabic-source units
5. Test full flow: onboarding → select Arabic → select German → load unit → play lesson

---

## Recommended Work Strategy

**DO NOT use background agents for Arabic translation.** They die during context compression.

**Option A: Expand the generator script**
The generator script at `scripts/generate-arabic-units.cjs` has ~100 common word translations built in. Strategy:
1. Expand `WORD_TRANSLATIONS` dictionary with ALL A1 vocabulary
2. Add separate dictionaries for notes, funFacts, hints
3. Re-run on all 6 units
4. Manual polish for context-specific translations

**Option B: Direct translation, one unit at a time**
1. Read unit file (80-140KB each, ~20-40K tokens)
2. Find all `[AR]` markers
3. Replace with proper MSA Arabic
4. Verify build
5. Move to next unit

**Token budget**: Each A1 unit uses ~20-40K tokens to read + edit. 6 units = manageable in one session.

---

## Files Reference

| File | Purpose |
|------|---------|
| `src/data/german-v2-ar/unit-01.js` through `unit-06.js` | A1 scaffolds with [AR] markers |
| `src/data/units-german-v2-ar.js` | Re-export wrapper (A1 only, A2-B2 commented) |
| `src/data/units-german-v2-ar-a1.js` | A1 level wrapper |
| `scripts/generate-arabic-units.cjs` | Generator script with ~100 word translations |
| `src/verumlingua.jsx` | Onboarding 2-step, srcLang filtering |
| `src/components/LessonEngine.jsx` | srcRtl/srcDir flags (line 13) |
| `src/utils.js` | UNITS_GERMAN_V2_AR in _RAW_UNITS |
| `src/data/foundations.js` | Where to add de_ar foundations |

---

## Critical Rules

- PP61: Arabic-source metalanguage in ARABIC, not English
- PP8: Arabic hints must not contain answer words
- PP22c: No em-dashes
- PP39: `\n` in strings, never `\\n`
- PP32: Every sentence native-speaker quality MSA Arabic
- Max 4 agents at a time (Rule B.7)
- Per-unit files only (Rule B.11)
- Sonnet for translation, Opus for creative rewriting (Rule B.14)
