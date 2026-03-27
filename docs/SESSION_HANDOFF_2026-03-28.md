# Session Handoff — 2026-03-28 (JSX Split Fix + Story Cards + UI Fixes)

> Next agent: Read this ENTIRE file before doing anything. Then read CLAUDE.md.

---

## What Was Done This Session

### 1. JSX Split Fix (CRITICAL — was breaking production)

The JSX split from the previous session (commit `c53ae6b`) broke lesson rendering. The build passed but runtime crashed with `ReferenceError` because 5 symbols were used across files without proper imports.

**Root cause**: When `LessonEngine.jsx` was extracted from `verumlingua.jsx`, several shared symbols were left undefined:
- `AppIcon` — component (used 12+ times in LessonEngine.jsx)
- `BrandIcon` — component (used in LessonEngine.jsx + shared.jsx)
- `_memStore` — session storage object (used 6 times in LessonEngine.jsx)
- `renderNavTitle` — function (used 2 times in LessonEngine.jsx)
- `LessonErrorBoundary` — class component (used in verumlingua.jsx, defined in shared.jsx)
- `mergeKoreanDict` — function (used in LessonEngine.jsx, from dictionary.js)

**Fix**: Extracted all shared symbols to `src/components/shared.jsx` to break the circular dependency. Both `verumlingua.jsx` and `LessonEngine.jsx` now import from `shared.jsx`.

**Files changed**:
- `src/components/shared.jsx` — now contains AppIcon, BrandIcon, _memStore, renderNavTitle, LessonErrorBoundary (282 lines added)
- `src/components/LessonEngine.jsx` — updated imports
- `src/verumlingua.jsx` — removed moved symbols, updated imports, removed debug _ErrWall
- `src/main.jsx` — cleaned up (removed debug error boundary)

### 2. Story Card Density — Phase 1 (U4, U5)

**Story arc rewrite project started.** Audited all 36 German v2 units for story card quality and density. Found 12 of 36 units below minimum target.

New target: **30-40 story cards per unit** (every lesson opens and closes with a story card).

**Unit 5 "Hunger!"**: 0 → 36 story cards
- Gasthaus compound-word menu comedy
- Lukas friendship origin ("Krasser Name, Alter")
- "Zusammen oder getrennt?" cash-only crisis
- Nighttime walking home, cargo bike, friendship beginning

**Unit 4 "Im Supermarkt"**: 1 → 31 story cards
- REWE entrance, Pfand machine confusion, coin-lock cart comedy
- Bakery Nummer ziehen shame, broccoli-button scale
- Speed checkout BeepBeepBeep, Tüte confusion
- Kitchen victory, Yilmaz text callback

### 3. Speaker Casing Normalization

All speaker fields normalized to lowercase across 8 unit files (30 occurrences):
- `Yilmaz` → `yilmaz`, `Verumius` → `verumius`, `Hildi` → `hildi`
- `Mia` → `mia`, `KD` → `kd`
- Files: unit-01, 08, 09, 11, 12, 20, 24, 32

### 4. UI Color Fixes

**Teach card translations**: teal/green → black (`var(--gray-700)`)
- Fixed in all 4 teach card renderers (new format, board mode, legacy, flashcard)

**Dialogue bubble text**: purple → black (`var(--gray-800)`)
- Fixed in all 6 dialogue renderers (story cards, new-format examples, board-mode examples, legacy examples)

**Punctuation fix**: trailing punctuation (periods, commas) no longer renders on its own line
- Root cause: universalHl split punctuation into separate flex items
- Fix: punctuation now stays attached to the preceding word span

### 5. Other Fixes
- U22 fourth-wall break removed ("Erinnern Sie sich an Unit 4?" → proper narrator scene-setting)
- U4 stray comma between L8 and L9 removed

---

## Architecture After This Session

```
src/
  main.jsx                          (entry point — clean, no debug code)
  verumlingua.jsx                   (~5,800 lines — pages + App root, AppIcon/BrandIcon REMOVED)
  styles.js                         (1,031 lines — CSS)
  utils.js                          (664 lines — shared utilities)
  audio.jsx                         (267 lines — TTS + sounds)
  hooks.js                          (181 lines — keyboard nav)
  components/
    shared.jsx                      (~550 lines — UI widgets + AppIcon, BrandIcon, _memStore, renderNavTitle, LessonErrorBoundary)
    LessonEngine.jsx                (~3,910 lines — lesson engine, imports shared symbols from shared.jsx)
  data/
    german-v2/unit-01.js ... unit-36.js  (36 per-unit files)
    ... (other data files unchanged)
```

### Import Chain (FIXED — no circular deps)
```
shared.jsx       →  vocabulary.js, metadata.js (ICON_REG)
LessonEngine.jsx →  shared.jsx, utils.js, audio.jsx, hooks.js, data modules
verumlingua.jsx  →  shared.jsx, LessonEngine.jsx, utils.js, audio.jsx, hooks.js, styles.js, data modules
```

### How to Edit
- **Shared components** (AppIcon, BrandIcon, _memStore, renderNavTitle): Edit `src/components/shared.jsx`
- **Lesson engine**: Edit `src/components/LessonEngine.jsx`
- **Unit content**: Edit `src/data/german-v2/unit-NN.js`
- **Pages / App root**: Edit `src/verumlingua.jsx`
- **CSS**: Edit `src/styles.js`
- Always run `npm run build` after edits

---

## TODO List (In Priority Order)

### P4: Story Arc Rewrite — CONTINUE (Phase 2+)

Story card density elevation across all 36 German v2 units. Target: 30-40 cards per unit, every lesson with open+close bookends.

**Completed**: U4 (31 cards), U5 (36 cards)

**Remaining phases**:

| Phase | Units | Cards Needed | Status |
|-------|-------|-------------|--------|
| 1b | U2 | ~24 | Pending — narrator travelogue needs real dialogue |
| 2 | U10, U11, U7 | ~71 | Pending — critical A2 gaps |
| 3 | U16, U19, U20, U22, U23, U24 | ~140 | Pending — critical B1 gaps |
| 4 | U1, U3, U6, U8, U9, U12, U14, U15, U17, U18, U21, U26, U31, U33 | ~210 | Pending — bookend pass |
| 5 | U13, U25, U27, U28, U29, U30, U32, U35 | ~80 | Pending — gap fill |
| 6 | All 36 | 0 (art slugs) | Pending — art slug backfill |

**Agent strategy**: Max 4 agents at a time. Opus for creative writing. Each agent gets AGENT_STORY_RULES.md + episode breakdowns + unit file + FORMAT_TEMPLATE.js.

**Plan file**: `.claude/plans/bright-forging-hellman.md` (approved, partially executed)

### P5: Other Language Rehauling
Korean > Dutch > French > Spanish. Not started.

### Infrastructure Backlog
- Bundle size: 19MB production JS — needs code splitting
- POS/gender auto-tagger (0/1,450 cards tagged)
- Visual novel renderer (not built)
- KOREAN_DICT extraction from engine

---

## Known Issues

1. **Bundle size 19MB** — causes slow initial load on production. Code splitting needed.
2. **Pre-existing LearnPage console error** — React Strict Mode double-render logs an error but doesn't affect functionality. Non-blocking.
3. **B2 content not validated** — PP8, PP52, PP48 not run on U25-U36
4. **POS tags: 0/1,450** — blocks the color system
5. **Visual layer not built** — 65 art slugs referenced, 0 actual images

---

## Current State

| Language | Format | Units | Lessons | Steps | Teach Cards | Status |
|----------|--------|-------|---------|-------|-------------|--------|
| Korean | v1 | 30 | 330 | 6,953 | ~1,367 | Production. Pending rehaul. |
| Dutch | v2 old | 30 | 261 | ~5,825 | ~1,300 | Production. Pending rehaul. |
| German v1 | v1 | 30 | 259 | ~4,941 | ~1,297 | Being replaced by v2. |
| **German v2** | **v2 new** | **36** | **~289** | **~7,843** | **~5,050** | **A1-B2 built. Story rewrite in progress.** |
| French | v1 | 30 | 258 | ~4,781 | ~1,077 | Production. Pending rehaul. |
| Spanish | v1 | 30 | 258 | ~4,739 | ~1,062 | Production. Pending rehaul. |
| Arabic | skeleton | 5 | 29 | -- | -- | Deferred. |

---

## Commits This Session

```
299d5ef Fix punctuation rendering on separate line in dialogue bubbles
49644e2 Fix remaining purple dialogue bubbles in board-mode teach cards
9debc45 Fix JSX split broken imports + story cards for U4/U5 + color fixes
```

---

## Agent Deployment Rules (CRITICAL)

1. **MAX 4 agents at a time. NEVER MORE.**
2. Every content agent gets `docs/AGENT_CONTENT_RULES.md` copied into its prompt.
3. Every story agent gets `docs/AGENT_STORY_RULES.md` copied into its prompt.
4. Agents read `docs/FORMAT_TEMPLATE.js` for format (2KB), NOT 10K-line files.
5. Agents read per-unit files (`src/data/german-v2/unit-NN.js`), NOT the full re-export.
6. Agents write to temp files. Main session merges and validates.
7. Use Sonnet for validation agents, Opus only for creative content.
8. **ALWAYS run `npm run build` after every file edit.**
9. **ALWAYS verify in preview after code changes.**

---

## Session Startup Checklist

1. Read this handoff file
2. Read `CLAUDE.md` (single source of truth)
3. Run `npm run build` to verify everything compiles
4. Check which priority to work on (story cards Phase 2 is next)
5. Before deploying agents: re-read Agent Deployment Rules above
6. Before editing: `npm run build` after EVERY file change
