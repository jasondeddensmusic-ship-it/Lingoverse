# Session Handoff — 2026-03-26 (B2 Build + Infrastructure Split)

> Next agent: Read this ENTIRE file before doing anything. Then read CLAUDE.md.

---

## What Was Done This Session

### 1. German B2 Content Build (U25-U36) — COMPLETE
- 12 units, 96 lessons, ~2,640 steps, ~1,844 new vocabulary
- Salvage-first: mined V1 U25-U30 (570 reusable items), built around salvage
- All teach cards have POS tags, gender, funFacts
- Deployed to lingoverse.nl

### 2. Infrastructure Split — COMPLETE
- `units-german-v2.js` split into 36 per-unit files in `src/data/german-v2/unit-NN.js`
- 4 level index files (`units-german-v2-a1.js` etc.) import per-unit files
- Main file re-exports from level files
- Agent infrastructure created:
  - `docs/AGENT_CONTENT_RULES.md` — Linguistic expert persona + all PP rules
  - `docs/AGENT_STORY_RULES.md` — Master playwright persona + story rules
  - `docs/FORMAT_TEMPLATE.js` — 2KB format reference for all step types

### 3. Renderer Fix — COMPLETE
- Note box changed from pink gradient to white bg + purple left bar
- Affects new-format renderer (cards with `pos` field)

### 4. Excessive `\n` Fix — COMPLETE
- 1,503 sequences of `\n\n\n+` collapsed to `\n\n` across B1+B2

### 5. Metalanguage Translation — 80% COMPLETE
- B1 intros + tips: DONE
- B2 intros: DONE
- B2 tips: NOT DONE (~47 tips + ~21 verb_table notes still in German)
- A1/A2 stray intros: NOT DONE (~10 items in U5,7,9,10,11,12)

---

## Architecture After Split

```
src/data/units-german-v2.js          (14 lines - imports + re-exports)
  -> units-german-v2-a1.js           (imports unit-01 through unit-06)
  -> units-german-v2-a2.js           (imports unit-07 through unit-12)
  -> units-german-v2-b1.js           (imports unit-13 through unit-24)
  -> units-german-v2-b2.js           (imports unit-25 through unit-36)
       -> german-v2/unit-01.js       (225-455 lines each, 36 files)
       -> german-v2/unit-02.js
       -> ...
       -> german-v2/unit-36.js

src/verumlingua.jsx                  (13,000 lines - MONOLITH, needs split)
```

### How to Edit a Unit
1. Open `src/data/german-v2/unit-NN.js` (e.g., unit-25.js for U25)
2. Edit directly. File exports `UNIT_25`.
3. Run `npm run build` to verify.
4. The import chain handles the rest automatically.

### How to Deploy Agents
1. Copy `docs/AGENT_CONTENT_RULES.md` into EVERY content agent prompt
2. Copy `docs/AGENT_STORY_RULES.md` into EVERY story agent prompt
3. Tell agents to read `docs/FORMAT_TEMPLATE.js` for format reference
4. Tell agents to read only `src/data/german-v2/unit-NN.js` (NOT the full file)
5. **MAX 4 agents at a time. NEVER more.** This is a hard rule.
6. Agents write to temp files. Main session merges.

---

## TODO List (In Priority Order)

### P0: JSX Component Split (verumlingua.jsx)
The 13,000-line monolith needs splitting into components. This is critical for maintainability and agent efficiency. Planned split:

| New File | Lines | Contents |
|----------|-------|----------|
| `src/styles.js` | ~1,000 | CSS-in-JS (the `const CSS` block starting ~line 1458) |
| `src/utils.js` | ~500 | Utilities: `_normStep`, `_normS`, `_findHit`, `searchUnits`, `_romanize`, voice/audio helpers |
| `src/components/TopNav.jsx` | ~200 | TopNav, LangSel, BrandIcon |
| `src/components/Home.jsx` | ~300 | Home page component |
| `src/components/UnitMap.jsx` | ~600 | UnitMap, CefrReferencePage, LessonList |
| `src/components/LessonEngine.jsx` | ~4,000 | The 4 teach card renderers + quiz renderers + lesson flow. THE BIG ONE. |
| `src/components/Flashcards.jsx` | ~200 | Flashcard review system |
| `src/components/Chat.jsx` | ~200 | AI chat component |
| `src/components/Profile.jsx` | ~200 | Profile page |
| `src/components/VocabularyPage.jsx` | ~600 | Dictionary/vocab browser |
| `src/components/Foundations.jsx` | ~500 | FoundationsGateQuiz + FoundationsPlaythrough |
| `src/components/Auth.jsx` | ~200 | AuthScreen + Onboarding |
| `src/components/shared.jsx` | ~300 | Toast, XpPop, Confetti, ContinueButton, NavArrow, etc. |
| `src/App.jsx` | ~500 | App root, routing, state management |

**Approach:**
- Start from the OUTSIDE in. Extract CSS first (zero risk), then utilities, then leaf components (Profile, Chat), then the big ones (LessonEngine, UnitMap).
- After each extraction, run `npm run build` to verify.
- The 4 teach card renderers (lines ~10077, ~10392, ~10716, ~12355) MUST stay together in LessonEngine or a shared renderer file. They share variables.
- Watch for: shared state (user, lang, baseLang), shared hooks (useFocusNav), shared constants (LANGUAGES, LANG_META).

### P1: B2 Tips Translation (~47 tips + ~21 verb_table notes)
Work unit by unit through `src/data/german-v2/unit-25.js` through `unit-36.js`.

**For each unit:**
1. `grep -n 'type:"tip"' src/data/german-v2/unit-NN.js` to find all tips
2. Read each tip's `text` and `deepDive.text` fields
3. If the text is in German (metalanguage, not example sentences), translate to English
4. German example sentences STAY in German (they are the content being taught)
5. `note` fields on verb_table steps: translate to English
6. Run `npm run build` after each unit

**PP61 rule:** "Beide bewirken Inversion (Verb in Position 2)" is metalanguage = translate to English. "Es regnet. Deshalb bleibe ich zu Hause." is an example sentence = keep in German.

### P2: A1/A2 Stray German Intros (~10 items)
Units 5, 7, 9, 10, 11, 12 have some intro desc/goals in German.
```bash
grep -n 'type:"intro"' src/data/german-v2/unit-05.js src/data/german-v2/unit-07.js src/data/german-v2/unit-09.js src/data/german-v2/unit-10.js src/data/german-v2/unit-11.js src/data/german-v2/unit-12.js
```
Translate desc and goals[] to English. Leave title in German (it is the lesson name).

### P3: B2 Content Validation (Unit by Unit)
For each B2 unit (25-36), run these checks:

**PP8 Leak Scan:**
```bash
grep -n 'hint:' src/data/german-v2/unit-NN.js | while read line; do
  # Check if hint contains any word from the answer
done
```
- Hint must NOT contain the answer word
- Answer position must vary (~25% each position A/B/C/D)
- Answer must not always be the longest option

**PP52 Teach-Before-Use:**
- Every word in mc/fb/drag_fill/match must trace to a prior teach card
- "Prior" means earlier in the same unit or in a previous unit
- Example-only does NOT count as taught

**PP48 Step Types:**
- `fb` must have SINGLE blank `{1}` only
- `drag_fill` for multi-blank (uses `blanks:{}`)
- Every `fb` must have `sSrc` field

### P4: Story Arc Rewrite
Netflix-quality narrative across all 36 V2 German units.
- Use `docs/AGENT_STORY_RULES.md` for the playwright persona
- Read `docs/german/episode-scene-breakdowns.md` for the story bible
- Work unit by unit, rewriting story cards for each lesson
- Characters must have distinct voices (see AGENT_STORY_RULES.md)
- Every story card must pass: "Would a learner remember this scene a week later?"

### P5: Other Language Rehauling
Korean > Dutch > French > Spanish. Each gets the same treatment:
1. V1 salvage mining
2. Vocab + grammar mapping
3. Lesson design blueprints
4. Content build (salvage-first)
5. Validation

---

## Known Issues

1. **B2 tips in German** — ~47 tips have German metalanguage (see P1 above)
2. **A1/A2 stray intros** — ~10 intros still in German (see P2 above)
3. **B2 content not validated** — PP8, PP52, PP48 not run on B2 (see P3 above)
4. **verumlingua.jsx is 13K lines** — needs component split (see P0 above)
5. **Visual layer not built** — 65 art slugs, 0 actual images
6. **KOREAN_DICT hardcoded** — extract to per-language module

---

## Agent Deployment Rules (CRITICAL)

1. **MAX 4 agents at a time. NEVER MORE.** 12+ Opus agents burned 84% of session in one batch. This must never happen again.
2. Every content agent gets `docs/AGENT_CONTENT_RULES.md` copied into its prompt.
3. Every story agent gets `docs/AGENT_STORY_RULES.md` copied into its prompt.
4. Agents read `docs/FORMAT_TEMPLATE.js` for format (2KB), NOT 10K-line unit files.
5. Agents read per-unit files (`src/data/german-v2/unit-NN.js`), NOT the full re-export.
6. Agents write to temp files. Main session merges and validates.
7. Prefer doing work yourself (no agents) for translation and validation tasks.
8. Use Sonnet for validation agents, Opus only for creative content.

---

## Current State

| Language | Format | Units | Lessons | Steps | Teach Cards | Status |
|----------|--------|-------|---------|-------|-------------|--------|
| Korean | v1 | 30 | 330 | 6,953 | ~1,367 | Production. Pending rehaul. |
| Dutch | v2 old | 30 | 261 | ~5,825 | ~1,300 | Production. Pending rehaul. |
| German v1 | v1 | 30 | 259 | ~4,941 | ~1,297 | Being replaced by v2. |
| **German v2** | **v2 new** | **36** | **~289** | **~7,776** | **~5,050** | **A1-B2 built. Tips ~80% translated. B2 validation pending.** |
| French | v1 | 30 | 258 | ~4,781 | ~1,077 | Production. Pending rehaul. |
| Spanish | v1 | 30 | 258 | ~4,739 | ~1,062 | Production. Pending rehaul. |
| Arabic | skeleton | 5 | 29 | -- | -- | Deferred. |

---

## Session Startup Checklist

1. Read this handoff file
2. Read `CLAUDE.md` (single source of truth)
3. Run `npm run build` to verify everything compiles
4. Check which priority to work on (P0 > P1 > P2 > P3 > P4)
5. Before any content work: re-read Pipeline Rules in CLAUDE.md
6. Before deploying agents: re-read Agent Deployment Rules above
7. Before editing: `npm run build` after EVERY file change
