# CLAUDE.md — LingoVerse Project Instructions

> Every Claude Code session MUST read this file before writing any code or content.
> This file reflects the actual codebase as of March 2026.

---

## Project Overview

LingoVerse is a self-contained multilingual language learning platform built with React 18 and Vite. The codebase is split into 7 source files (1 engine + 6 data modules). Vite bundles them into a single optimized output for deployment.

**Vision**: ANY source language to ANY target language. Every native tongue of every registered country. The architecture must always be built strategically with scale in mind. Nothing should ever be hardcoded for one language pair.

**Current state**: Dutch A1-B1 complete (20 units, 160 lessons). Korean A1-B1 complete (20 units, 195 lessons). German and Arabic have early skeletons (5 units each, below density standard).

---

## Owner's Workflow (CRITICAL)

The owner is NOT a coder. The workflow is:
1. Edit `src/lingoverse.jsx` with Claude's help
2. Claude commits and pushes to GitHub
3. GitHub Actions automatically builds and deploys to mijndomein.nl via FTPS
4. lingoverse.nl updates within ~2 minutes. No manual upload needed.

The deploy workflow is in `.github/workflows/deploy.yml`. FTP credentials are stored as GitHub Secrets (FTP_USERNAME, FTP_PASSWORD).

---

## Architecture — Multi-File Structure

### Data Modules (`src/data/`)

| File | Lines | Contents |
|------|-------|----------|
| `metadata.js` | ~440 | VOCAB_DB, LANGUAGES, CEFR_LEVELS, LANG_META, LANG_BLUEPRINT, CULTURE_PACKS, UNIT_TEMPLATES, MKG, SCRIPT_BLUEPRINTS |
| `foundations.js` | ~2,060 | FOUNDATIONS_BY_LANG, FK_PLAYTHROUGH, FK_GATE_QUIZ |
| `vocabulary.js` | ~2,500 | TEXT_KEYS, tk(), VOCAB, LEXEMES, MEANINGS, GRAMMAR, CHAT_STARTERS, LEVEL_XP, ACHS, LANG_FAMILIES, ARTICLE_COLORS |
| `units-dutch.js` | ~5,590 | All 43 Dutch units (20 v2 + 23 legacy) |
| `units-korean.js` | ~4,710 | All 20 Korean units (U1-U6 A1, U7-U10 A2, U11-U20 B1) |
| `units-other.js` | ~500 | German (5) + Arabic (5) skeleton units |

### Engine (`src/lingoverse.jsx`, ~12,800 lines)

| Section | Contents |
|---------|----------|
| Manifesto & Decision Log | 20+ principles, 71 decisions, pipeline rules, curriculum spine |
| Utility functions | TTS, vocab helpers, storage, validators |
| CSS design system | Full CSS-in-JS with dark mode |
| Page components | TopNav, Home, Profile, Chat, Quiz, Flashcards, Auth, Onboarding |
| UNITS assembly | `const UNITS = [...dutchUnits, ...koreanUnits, ...otherUnits]` |
| Learn page & UnitMap | Navigation, Foundations UI, lesson lists |
| LessonEngine | Core teaching/quiz rendering engine |
| App root | Main App component, routing, persistence |

---

## Vision & Architecture Awareness

### The Endgame: Universal Language Learning

LingoVerse's endgame is ANY source language to ANY target language. This means:

1. **Nothing hardcoded for one language pair.** Every component, renderer, and data structure must work for any language. Shared UI components must NEVER contain hardcoded language-specific terms (Manifesto P14).

2. **Language families matter for curriculum design.** Related languages share grammar, vocabulary, and learning shortcuts that should be exploitable:
   - **Germanic**: Dutch, German, English, Swedish, Norwegian, Danish
   - **Romance**: French, Spanish, Italian, Portuguese, Romanian
   - **CJK/East Asian**: Korean, Japanese, Chinese
   - **Slavic**: Russian, Polish, Czech, Ukrainian
   - **Turkic**: Turkish, Azerbaijani
   - **Semitic**: Arabic, Hebrew

3. **Source-target proximity must influence everything.** When a Dutch speaker learns German, the curriculum should be fundamentally different (faster paced, cognate-heavy, contrastive grammar focus) than when an Arabic speaker learns German (slower paced, script transition, entirely new grammar system).

4. **The long-term goal is semi-autonomous course generation.** Language family templates, shared grammar pattern libraries, reusable curriculum skeletons. Spinning up a new language pair should be a guided generation process, not starting from scratch.

### Architecture Implications

Every decision must move toward:
- Language family templates (germanic, romance, CJK, slavic, turkic, semitic)
- Shared grammar pattern libraries (conjugation systems, case systems, word order patterns)
- Reusable curriculum skeletons (A1 survival spiral, B1 professional/social expansion)
- Proximity-based pacing (cognate languages = faster, distant languages = slower)
- Script-aware foundations (latin variants, arabic, hangul, kana/kanji, cyrillic, hanzi)

---

## Key Constants & Data Structures

### LANG_META (`src/data/metadata.js`)
Per-language settings: scriptType, framework, levelMap, ttsLocale, specialRules. Every new language needs an entry here.

### FOUNDATIONS_BY_LANG (`src/data/foundations.js`)
Reference knowledge grids. Organized by sections (alphabet, vowels, consonants, spelling rules). Dutch has 6 sections with 24 items — that's the benchmark.

### FK_PLAYTHROUGH (`src/data/foundations.js`)
Interactive foundations lessons. Stages → lessons → steps. Currently implemented: Korean (25 phases), Dutch (22 lessons).

### FK_GATE_QUIZ (`src/data/foundations.js`)
Pass/fail gate quiz after foundations. Currently: Korean implemented.

### UNITS (assembled in `src/lingoverse.jsx` from `src/data/units-*.js`)
The main curriculum. Structure:
```
{ n, lang, track, title, sub, icon, level, color, lessons: [
  { id, title, icon, xp, board:true, steps: [...] }
]}
```
### Track System (IMPORTANT)
- **Korean**: Always `track:"v1"` for ALL units (A1, A2, B1, future B2+). Korean has no legacy course. One tab.
- **Dutch**: `track:"v2"` for new curriculum, `track:"legacy"` for old content. Two tabs until legacy is deleted.
- **New languages**: Use a single track value (e.g., `track:"v1"`). Only create a second track if migrating from an old curriculum.
Data lives in: `units-dutch.js`, `units-korean.js`, `units-other.js`.

### MK / MEANINGS / LEXEMES
Vocabulary is meaning-centric. MK keys are the atomic unit. All content maps through meaning, not surface language.

### LANG_FAMILIES (line ~9756)
Reusable family descriptions: germanic, romance, indoeuropean, borrowed, turkic. Used in cognate popups.

---

## LessonEngine Step Types

Every lesson is an array of step objects. The LessonEngine (line ~23570) renders them:

| Type | Purpose | Key Fields |
|------|---------|-----------|
| `intro` | Lesson intro | title, desc, goals[] |
| `teach` | Word/concept card | nl, en, phonetic, example, exampleEn, note, kind, cognate, also, fRef, diagram, hanja |
| `tip` | Grammar/culture card | title, text, deepDive |
| `verb_table` | Conjugation grid | title, label, groups[], note, deepDive |
| `mc` | Multiple choice | q, opts[], ans, hint |
| `fb` | Fill-in-blank | s, a, opts[], hint |
| `match` | Matching pairs | pairs: [{nl, en}] |
| `drag_fill` | Multi-blank drag | s, blanks:{}, pool[], hint |
| `tr` | Translation input | mk, dir |

**CRITICAL**: `board:true` is MANDATORY on all new lessons (D21). No exceptions except legacy content.

---

## Pipeline Rules (Must-Follow for Content Creation)

### Before Writing ANY Lesson:
- **P24**: Check no prior unit already teaches this concept
- **P26**: Core Constructs First — introduce and NAME core constructs in Lessons 1-3. Use them in all later lessons. Elaborate (full drills) only in dedicated units. Quiz vocabulary/phrases early, system mechanics only at Elaborate phase. Check Core Constructs Map for timing.
- **P32**: Every sentence must be native-speaker quality, every exercise must have exactly ONE correct answer
- **P34**: Every word in exercises must have been taught (teach card) before use
- **P37**: Function words need teach cards before first use. Each language defines its own function word list in LANG_BLUEPRINT. Cognate exception: exempt only if (a) transparently cognate, (b) only in examples not quizzes, (c) single word.
- **P43**: Density targets per language (Korean: 20-25, Dutch: 25-35). Pedagogy over count — never add filler steps.

### Content Formatting:
- **P22c**: NEVER use em-dashes (—). Use periods, colons, commas, or \n bullets.
- **P27**: No IPA notation, no slashes as separators, ASCII-only phonetics
- **P36**: Notes max ~100 chars unstructured or use \n/bullets. "What" in note, "why" in deepDive.
- **P38**: Phonetics hidden by default for Latin scripts, visible for non-Latin
- **P39**: All content strings use single-escaped \n (not \\n)
- **P45**: DeepDive is EXPLANATION, never CONTINUATION of the visible card
- **D58**: Korean-only lines centered/large/purple. Empty lines = 12px spacers. Max 85 chars/line. Colons for definitions, never equals.
- **D62**: Note/text/deepDive fields must follow structured card design standards

### Anti-Leak (P8):
- Answer must not be visible in question
- Hints must GUIDE, never REVEAL (P44)
- Answer position varies (~25% each position)
- Engine shuffleOpts handles runtime shuffle
- Question and answer must use DIFFERENT representations

### Engine Rules:
- **P30**: NO React hooks inside if(st.type===) renderer blocks. EVER.
- **P31**: Never assign CSS gradients to the `color` property
- **P35**: Drag ghosts use document.body DOM escape hatch with delta positioning

---

## Design System

### Colors:
- Purple #7B5EE8 — UI accent, focus, selection, board card left accent
- Teal #2ECDA7 — English translations, correct answers
- Gold #E8960A — het article, low-score warning
- Blue #4A8FE7 — de article, general buttons
- Coral #F56565 — wrong answers only

### Fonts:
- Quicksand — display headings
- Nunito — all body/question/note text
- NO Georgia/serif anywhere in lesson engine (D41, D51)

### Visual Language:
- All lesson cards: white bg, 22px border-radius, 4px purple left border, subtle shadow
- Candy gloss aesthetic: 5-stop gradients, shine overlays, inset shadows on interactive elements
- Dark mode: Ctrl+N toggle, soft dark #1E1E2E base

---

## Keyboard Navigation

| Key | Action |
|-----|--------|
| Space/Enter | Continue / select option |
| Backspace | Previous step / back in nav hierarchy |
| Escape | Quit lesson / back in nav hierarchy |
| Arrow keys | Navigate options (MC/match) |
| A/B/C/D | Direct option select on quiz |
| Down arrow | Open deepDive (first press) |
| Up arrow | Close deepDive |
| Ctrl+S | Dev skip (auto-answer) |
| Ctrl+N | Toggle dark mode |
| Ctrl+D | Reset all progress (dev) |

---

## Current Build Status

### Dutch:
- Foundations: COMPLETE (knowledge + 22 playthrough lessons + gate quiz)
- A1-A2 (Units 1-10): COMPLETE (80 lessons)
- B1 (Units 11-20): COMPLETE (80 lessons)
- Retroactive polish needed: Apply D41/D42/D47/D53/D58 standards to all units

### Korean:
- Foundations: COMPLETE (knowledge + 25 playthrough lessons + gate quiz)
- A1 (Units 1-6): COMPLETE, all A1 gap items added (못, -지만, spatial words, adverbs, colors, connectors)
- A2 (Units 7-10): COMPLETE (U7 Past Tense, U8 Health/Conditional, U9 Future/Speech Levels, U10 Daily Life/반말)
- B1 (Units 11-20): COMPLETE (93 lessons, ~1,285 steps, audited)
  - U11: Travel/KTX, progressive, ㅎ-irregular
  - U12: Hobbies, comparatives, ㅅ-irregular
  - U13: Connectors, -는데/-거든요/-네요, 르-irregular (all 6 irregular families done)
  - U14: Workplace, obligation/permission/purpose
  - U15: Education, benefactive -아/어 주다, -게 되다
  - U16: Internet/SNS, indirect speech, honorifics
  - U17: News, passive/causative, double past
  - U18: Food, -기 nominalization, noun modifiers
  - U19: Relationships, -더라고요 evidential, register switching
  - U20: Consolidation + B1 assessment
  - All 12 seed registry harvests complete
- 20 units, 195 lessons total (A1: 66, A2: 36, B1: 93)
- A1-A2 quality audit: ~570 issues found (2026-03-14), see `docs/KOREAN_QUALITY_AUDIT.md`
- A1 gap checklist: 34/34 items present. All 17 CEFR A1 domains covered.

### German: 5 early units, below density standard, needs Goethe-Institut A1 audit
### Arabic: 5 skeleton units, RTL works, needs CEFR audit

---

## Korean B1 Design Decisions (Units 11-20)

Full design document: `docs/KOREAN_B1_CURRICULUM_DESIGN.md`

### Key Architectural Decisions

1. **Harvest-Before-New**: All 12 seed registry patterns from A1-A2 are formally harvested in B1 before introducing new grammar. Every harvest lesson opens with "You have been seeing [X] since Unit Y."

2. **Cultural Anchoring**: Each unit is tied to a Korean cultural context (travel, 눈치, 회식, 수능, 맛집, 정, etc.) that provides natural sentence contexts for the grammar being taught.

3. **Irregular Completion**: The remaining 3 irregular verb families (ㅎ in U11, ㅅ in U12, 르 in U13) are harvested in units where their example verbs appear naturally.

4. **Speech Level Progression**: B1.1 uses 해요체 primary; B1.2 adds active 합쇼체/반말 use; U19 introduces explicit register switching.

5. **Indirect Speech Before Passive**: Deliberate ordering. Indirect speech (U16) is more immediately useful; passive/causative (U17) is structurally harder. Having reported speech first enables "The news said..." patterns in U17.

6. **Step Density Trade-off**: B1 averages ~13.8 steps/lesson (vs A1-A2's 20-25). B1 grammar is cognitively heavier per step. Quality over filler.

7. **Contrastive Questions Allowed**: MC questions that show both options in the question stem (e.g., "X vs Y: which means Z?") are permitted when testing pattern discrimination, not recall.

8. **Sino-Korean COMPOUND Chips**: Every new Sino-Korean word gets morpheme decomposition (e.g., "COMPOUND: 관(relate/關) + 계(connect/係)"). By B1 end, learners have seen 100+ Sino-Korean morphemes.

---

## Documentation Files

- `docs/LINGOVERSE_MASTER_BIBLE.md` — Full philosophy, per-language standards, official reference requirements, unit count doctrine
- `docs/POLYGLOT_PIPELINE_STANDARDS.md` — Five Universal Pillars, per-language pipeline rules, seed framework, JSON separation plan
- `docs/KOREAN_B1_CURRICULUM_DESIGN.md` — **NEW** Complete B1 design: seed harvests, grammar sequencing, cultural anchors, trade-offs
- `docs/KOREAN_QUALITY_AUDIT.md` — A1-A2 quality audit with 7 fix batches (2026-03-14, issues resolved)
- `docs/KOREAN_DENSITY_AUDIT.md` — Historical density tracking (superseded by quality audit)

---

## Common Tasks

### Adding a new language:
1. Add to LANGUAGES array (line ~4065)
2. Add LANG_META entry (line ~4293)
3. Add FOUNDATIONS_BY_LANG entry
4. Create FK_PLAYTHROUGH stages
5. Create FK_GATE_QUIZ
6. Add UNITS with the correct track value and board:true on all lessons (see Track System below)
7. Validate with validateLessonForLeaks()

**File separation convention**: New languages start in `units-other.js`. Once a language has 5+ units with real content (not skeletons), create a dedicated `units-{lang}.js` file:
1. Create `src/data/units-{lang}.js` exporting the units array
2. Add `import {lang}Units from './data/units-{lang}.js';` in lingoverse.jsx (lines 7-9)
3. Add `...{lang}Units` to the UNITS spread (line ~8102)
4. Remove those units from `units-other.js`

This is manual. Phase 2 (post-content-complete) will migrate all units to JSON files per language.

### Adding a lesson to an existing unit:
1. Run P24 redundancy check first
2. Follow step type pipeline (intro → teach → tip → quiz → verb_table)
3. Run full audit checklist (P24-P45)
4. Every teach card: check also/cognate/fRef fields

### Deploying to lingoverse.nl:
Commit and push to `main`. GitHub Actions automatically builds and uploads to mijndomein.nl via FTPS. The site updates within ~2 minutes. No manual upload needed. To manually trigger: go to Actions → "Build and Deploy to Mijndomein" → "Run workflow".

---

## Memory & Decision Tracking (MANDATORY)

Claude Code has a persistent memory system at `~/.claude/projects/.../memory/`. Every session MUST:

1. **After any architectural decision or design choice**: Save it to memory AND update CLAUDE.md if it affects future sessions. Decisions like track values, grammar sequencing, file structure changes, etc.

2. **After any mistake or correction from the owner**: Save a feedback memory explaining what went wrong and how to avoid it. These prevent repeating the same errors.

3. **After completing a major milestone** (e.g., finishing B1, adding a language): Update `project_status.md` in memory AND the "Current Build Status" section in CLAUDE.md.

4. **After learning owner preferences**: Save to `user_profile.md` or `feedback_workflow.md`.

The goal: any future Claude Code session should be able to read CLAUDE.md + memory files and have full context on every decision made, every mistake avoided, and the current state of the project.

---

## Principles to Always Remember

1. **We are building the system that builds courses.** Every decision shapes the process that will eventually run WITHOUT a human safety net.
2. **When unsure about grammar: FLAG IT, do not commit.** Use `// VERIFY:` comments.
3. **The pipeline must guarantee quality by PROCESS, not by human review.** Think: "Would this catch this bug in Japanese, where no human reads the output?"
4. **P26 Core Constructs First is law.** Teach and NAME core constructs early. Control what gets QUIZZED, not what gets taught. Introduce → Use → Elaborate.
5. **Every new concept type needs an intro tip before first instance** (D44).
6. **Treat every session as if building for a language you don't speak.** The rules exist because they caught real errors.
