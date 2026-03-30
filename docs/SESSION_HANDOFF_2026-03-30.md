# Session Handoff — 2026-03-30 (Updated)

> Arabic A2-B2 scaffold generation + partial translation. 17/36 units fully translated.

---

## What Was Done Across Today's Sessions

### Session 1 (earlier): A1 cleanup
- Finished A1 units 1-6 translations (prior sessions had most of it)

### Session 2 (this session): A2-B2 scaffold + translation

#### 1. Generated Arabic scaffold units 7-36
- Ran `node scripts/generate-arabic-units.cjs N` for units 7 through 36
- Created 30 new files in `src/data/german-v2-ar/`
- Each clones the EN-source German v2 unit, sets `srcLang:"ar"`, marks untranslated with `[AR]`

#### 2. Created wrapper/re-export files
- `src/data/units-german-v2-ar-a2.js` — imports units 7-12
- `src/data/units-german-v2-ar-b1.js` — imports units 13-24
- `src/data/units-german-v2-ar-b2.js` — imports units 25-36
- Updated `src/data/units-german-v2-ar.js` — all 4 level imports active

#### 3. Translated units via agents
Agents translated [AR] markers directly using Edit tool.

**Fully translated (0 content [AR]):**

| Level | Units Done |
|-------|-----------|
| A1 | 1, 2, 3, 4, 5, 6 |
| A2 | 7, 8, 9, 10, 11, 12 |
| B1 | 13, 14, 17, 23, 24 |
| **Total** | **17 of 36 units** |

#### 4. Build status
- `npm run build` PASSES with all 36 units loaded
- Bundle: ~24.7MB

---

## What Remains: 19 Units (~4,499 [AR] markers)

| Unit | [AR] Count | Level | Topic (from EN source) |
|------|-----------|-------|------------------------|
| 15 | 259 | B1 | |
| 16 | 254 | B1 | |
| 18 | 180 | B1 | |
| 19 | 235 | B1 | |
| 20 | 129 | B1 | |
| 21 | 228 | B1 | |
| 22 | 239 | B1 | |
| 25 | 251 | B2 | |
| 26 | 251 | B2 | |
| 27 | 262 | B2 | |
| 28 | 266 | B2 | |
| 29 | 258 | B2 | |
| 30 | 257 | B2 | |
| 31 | 245 | B2 | |
| 32 | 243 | B2 | |
| 33 | 240 | B2 | |
| 34 | 250 | B2 | |
| 35 | 240 | B2 | |
| 36 | 230 | B2 | |

Note: Units 3-6, 9, 10, 12, 13 show "1" [AR] — this is the file header comment only, not content.

---

## Nothing Has Been Committed or Pushed

All work is uncommitted in worktree branch `claude/zealous-stonebraker`.

### Uncommitted changes:
**Modified (from prior sessions + this one):**
- `src/components/LessonEngine.jsx`
- `src/components/shared.jsx`
- `src/data/units-german-v2-ar.js` (uncommented A2/B1/B2 imports)
- `src/data/vocabulary.js`
- `src/styles.js`
- `src/verumlingua.jsx`

**New unit files (30):**
- `src/data/german-v2-ar/unit-07.js` through `unit-36.js`

**New wrapper files (3):**
- `src/data/units-german-v2-ar-a2.js`
- `src/data/units-german-v2-ar-b1.js`
- `src/data/units-german-v2-ar-b2.js`

**Helper scripts (can be cleaned up):**
- `scripts/translate-unit14-*.cjs` (7 files, created by agent)
- `scripts/translate-u20-remaining.py`
- `scripts/translate-ar*.py`
- `scripts/apply-ar.cjs`, `scripts/ar-map.json`
- `scripts/fix-ar-unit11-*.cjs`

---

## How to Continue

### Step 1: Translate remaining 19 units
Deploy agents (max 4 at a time, Rule B7). Each agent gets ONE unit.

**Agent prompt template:**
```
You are a senior Arabic linguist. Translate ALL [AR] markers in this file to MSA.
File: src/data/german-v2-ar/unit-NN.js
Edit the file DIRECTLY using Edit tool. Do NOT create helper scripts.
Rules: Native MSA. No em-dashes. \n for newlines. Hints must not contain answer. Max 2 consecutive \n.
Field guide: src=word, note=grammar, funFact=cultural, hint=quiz hint (no leaks!), exampleSrc=example, sSrc=quiz sentence, desc/goals=intro, text/deepDive=grammar.
Leave ZERO [AR] markers.
```

**Batch order (4 agents at a time):**
1. Units 15, 16, 18, 19
2. Units 20, 21, 22, 25
3. Units 26, 27, 28, 29
4. Units 30, 31, 32, 33
5. Units 34, 35, 36

### Step 2: Commit + push
1. Delete helper scripts: `rm scripts/translate-unit14-*.cjs scripts/translate-u20-*.py scripts/translate-ar*.py scripts/fix-ar-unit11-*.cjs scripts/apply-ar.cjs scripts/ar-map.json`
2. Commit all Arabic units + wrappers + modified files
3. Push to main (or merge worktree branch)

### Step 3: Remaining items from CLAUDE.md
- LessonEngine RTL — Apply `srcDir` to source-text containers
- Arabic Foundations — Create `FOUNDATIONS_BY_LANG.de_ar`

---

## Key Files Reference

| File | Purpose |
|------|---------|
| `scripts/generate-arabic-units.cjs` | Generator (EN unit → AR scaffold) |
| `scripts/arabic-dictionary.cjs` | Shared EN→AR dictionary used by generator |
| `src/data/german-v2-ar/unit-NN.js` | Per-unit Arabic source files |
| `src/data/units-german-v2-ar.js` | Main re-export (all levels) |
| `src/data/units-german-v2-ar-{a1,a2,b1,b2}.js` | Level wrappers |

---

## Critical Rules
- **PP61**: All metalanguage in Arabic for `srcLang:"ar"` units
- **PP32**: Native-speaker quality MSA
- **PP8**: Hints must NOT contain answer words
- **PP22c**: No em-dashes (—)
- **PP39**: `\n` in strings, never literal newlines
- **Rule B7**: Max 4 agents at a time
- **Rule B14**: Sonnet for translation, Opus only for creative content
- Arabic pedagogy hooks: ch≈خ, no /p/, neuter=محايد, compound≈إضافة, cases=إعراب
