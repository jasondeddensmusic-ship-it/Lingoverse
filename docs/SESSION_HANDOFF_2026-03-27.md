# Session Handoff — 2026-03-27 (JSX Split + PP61 Translation)

> Next agent: Read this ENTIRE file before doing anything. Then read CLAUDE.md.

---

## What Was Done This Session

### 1. Unmerged Branch Recovery
- Found 4 unmerged branches with significant work
- `claude/laughing-hofstadter` (25 commits): B1 build, B2 build, V1 salvage, unit split, agent infrastructure, tip translations — was already on origin/main, local was stale
- `claude/crazy-tu` (Spanish syntax fix): already applied on main
- `claude/nervous-wilson` (TOPIK enrichment): already applied on main
- `claude/gallant-pare` (nebula visuals): skipped, superseded

### 2. P1: PP61 Metalanguage Translation — COMPLETE
- B2 (U25-U36): 47 tip `text`/`deepDive` fields + 21 verb_table `note` fields translated German → English
- A1/A2 (U5, U7, U9-U12): 20 intro `desc`/`goals[]` fields translated German → English
- German example sentences preserved in-place per PP61 rules
- Commit: `bc79b64`

### 3. P0: JSX Monolith Split — COMPLETE
- `src/verumlingua.jsx` split from 12,554 → 6,287 lines (50% reduction)
- 7 new modules created:

| File | Lines | Contents |
|------|-------|----------|
| `src/styles.js` | 1,031 | CSS-in-JS design system (the full `const CSS` template literal) |
| `src/utils.js` | 664 | shuffle/pick/clamp/getLevel/cap, _normStep, _RAW_UNITS/UNITS assembly, Korean romanization, _normS/_findHit/searchUnits, validateLessonForLeaks (PP8 validator), __contentWarnings/__devWarnings |
| `src/audio.jsx` | 267 | getPreferredVoice, playAudio, SpeakerButton, AUDIO_ENABLED/FOUNDATIONS_LOCK_ENABLED/UI_SOUNDS_ENABLED feature flags, UISounds (Web Audio synth) |
| `src/hooks.js` | 181 | KB_FOCUS_SEL constant, useFocusNav keyboard navigation hook |
| `src/components/shared.jsx` | 270 | FlagButton, Confetti, ContinueButton, NavArrow, ScoreCircle |
| `src/components/LessonEngine.jsx` | 3,918 | All 4 teach card renderers + all quiz renderers + lesson flow logic |
| `src/verumlingua.jsx` | 6,287 | Everything else: NebulaBackground, VLLogo, AppIcon, helpers, Toast, XpPop, TopNav, LangSel, BrandIcon, Home, Flashcards, Quiz, Chat, GrammarPage, Profile, VocabularyPage, CefrReferencePage, VocabTable, IdiomsPage, AuthScreen, Onboarding, LearnPage, CountryFlag, GlossyPopup, UnitMap, FoundationsGateQuiz, FoundationsPlaythrough, LessonList, DevGate, App |

- Zero visual changes. Build passes. Verified in preview.
- Commit: `c53ae6b`

---

## Architecture After This Session

```
src/
  main.jsx                          (entry point)
  verumlingua.jsx                   (6,287 lines — pages + App root)
  styles.js                         (1,031 lines — CSS)
  utils.js                          (664 lines — shared utilities)
  audio.jsx                         (267 lines — TTS + sounds)
  hooks.js                          (181 lines — keyboard nav)
  components/
    shared.jsx                      (270 lines — lesson UI widgets)
    LessonEngine.jsx                (3,918 lines — THE lesson engine)
  data/
    german-v2/unit-01.js ... unit-36.js  (36 per-unit files, ~250 lines each)
    units-german-v2.js              (14 lines — re-exports from level files)
    units-german-v2-a1.js           (imports unit-01 through unit-06)
    units-german-v2-a2.js           (imports unit-07 through unit-12)
    units-german-v2-b1.js           (imports unit-13 through unit-24)
    units-german-v2-b2.js           (imports unit-25 through unit-36)
    ... (other language unit files, metadata, vocabulary, dictionary, etc.)
  docs/
    AGENT_CONTENT_RULES.md          (copy into every content agent prompt)
    AGENT_STORY_RULES.md            (copy into every story agent prompt)
    FORMAT_TEMPLATE.js              (2KB format reference for agents)
```

### Import Chain
```
LessonEngine.jsx  →  utils.js, audio.jsx, hooks.js, shared.jsx, data modules
verumlingua.jsx   →  utils.js, audio.jsx, hooks.js, shared.jsx, LessonEngine.jsx, styles.js, data modules
utils.js          →  data modules only (vocabulary.js, metadata.js, foundations.js, unit files)
audio.jsx         →  React only
hooks.js          →  React only
shared.jsx        →  vocabulary.js (for `t()` function), React
```

### How to Edit
- **Unit content**: Edit `src/data/german-v2/unit-NN.js` directly
- **Lesson engine / teach card renderers**: Edit `src/components/LessonEngine.jsx`
- **CSS**: Edit `src/styles.js`
- **Utilities / normalization**: Edit `src/utils.js`
- **Shared lesson widgets**: Edit `src/components/shared.jsx`
- **Pages / App root**: Edit `src/verumlingua.jsx`
- Always run `npm run build` after edits

---

## TODO List (In Priority Order)

### P3: B2 Content Validation (NEXT PRIORITY)
For each B2 unit (U25-U36), run these checks:

**PP8 Leak Scan:**
- Hint must NOT contain the answer word
- Answer position must vary (~25% each position A/B/C/D)
- Answer must not always be the longest option
- No visual leaks (answer visible in question text)

**PP52 Teach-Before-Use:**
- Every word in mc/fb/drag_fill/match must trace to a prior teach card
- "Prior" means earlier in the same unit or in a previous unit
- Example-only does NOT count as taught

**PP48 Step Types:**
- `fb` must have SINGLE blank `{1}` only (never `{2}+`)
- `drag_fill` for multi-blank (uses `blanks:{}`)
- Every `fb` must have `sSrc` field

**How to run:**
```bash
# Per unit — find all quiz steps
grep -n 'type:"mc"\|type:"fb"\|type:"drag_fill"\|type:"match"' src/data/german-v2/unit-NN.js
# Check hints for answer words
grep -n 'hint:' src/data/german-v2/unit-NN.js
```

**Agent strategy:** Deploy 3 Sonnet agents (max 4 total), each validating 4 B2 units. Each agent gets `docs/AGENT_CONTENT_RULES.md` and reads the per-unit files directly (~250 lines each). Agents report violations; main session fixes.

### P4: Story Arc Rewrite
Netflix-quality narrative across all 36 V2 German units.
- Use `docs/AGENT_STORY_RULES.md` for the playwright persona
- Read `docs/german/episode-scene-breakdowns.md` for the story bible
- Work unit by unit, rewriting story cards
- Characters must have distinct voices
- Every story card must pass: "Would a learner remember this scene a week later?"

### P5: Other Language Rehauling
Korean > Dutch > French > Spanish. Each gets:
1. V1 salvage mining
2. Vocab + grammar mapping
3. Lesson design blueprints
4. Content build (salvage-first)
5. Validation

### Further JSX Split (Optional)
verumlingua.jsx is still 6,287 lines. Could be split further:
- `VocabularyPage.jsx` (~1,200 lines)
- `UnitMap.jsx` + LearnPage (~1,250 lines)
- `GrammarPage.jsx` (~725 lines)
- Remaining would be ~3,100 lines (small pages + App root)

Not blocking anything — P3 agents only need the per-unit data files, not the JSX.

### Infrastructure Backlog
- POS/gender auto-tagger (0/1,450 cards tagged — blocks color system)
- Visual novel renderer (not built)
- Audio/TTS system (not built)
- Navigation redesign (city explorer maps)
- KOREAN_DICT extraction from engine

---

## Known Issues
1. **B2 content not validated** — PP8, PP52, PP48 not run on U25-U36
2. **B1 hints may be in German** — P1 only covered B2 tips + A1/A2 intros. B1 tips were translated in a prior session but quiz hints across all levels may still have German metalanguage
3. **verumlingua.jsx still 6,287 lines** — functional but could be split further
4. **POS tags: 0/1,450** — blocks the color system
5. **Visual layer not built** — 65 art slugs, 0 actual images

---

## Current State

| Language | Format | Units | Lessons | Steps | Teach Cards | Status |
|----------|--------|-------|---------|-------|-------------|--------|
| Korean | v1 | 30 | 330 | 6,953 | ~1,367 | Production. Pending rehaul. |
| Dutch | v2 old | 30 | 261 | ~5,825 | ~1,300 | Production. Pending rehaul. |
| German v1 | v1 | 30 | 259 | ~4,941 | ~1,297 | Being replaced by v2. |
| **German v2** | **v2 new** | **36** | **~289** | **~7,776** | **~5,050** | **A1-B2 built. PP61 complete. B2 validation pending.** |
| French | v1 | 30 | 258 | ~4,781 | ~1,077 | Production. Pending rehaul. |
| Spanish | v1 | 30 | 258 | ~4,739 | ~1,062 | Production. Pending rehaul. |
| Arabic | skeleton | 5 | 29 | -- | -- | Deferred. |

---

## Agent Deployment Rules (CRITICAL)

1. **MAX 4 agents at a time. NEVER MORE.**
2. Every content agent gets `docs/AGENT_CONTENT_RULES.md` copied into its prompt.
3. Every story agent gets `docs/AGENT_STORY_RULES.md` copied into its prompt.
4. Agents read `docs/FORMAT_TEMPLATE.js` for format (2KB), NOT 10K-line files.
5. Agents read per-unit files (`src/data/german-v2/unit-NN.js`), NOT the full re-export.
6. Agents write to temp files. Main session merges and validates.
7. Prefer doing work yourself (no agents) for translation and validation tasks.
8. Use Sonnet for validation agents, Opus only for creative content.

---

## Session Startup Checklist

1. Read this handoff file
2. Read `CLAUDE.md` (single source of truth)
3. Run `npm run build` to verify everything compiles
4. Check which priority to work on (P3 > P4 > P5)
5. Before any content work: re-read Pipeline Rules in CLAUDE.md
6. Before deploying agents: re-read Agent Deployment Rules above
7. Before editing: `npm run build` after EVERY file change
