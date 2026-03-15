# CLAUDE.md — LingoVerse Project Instructions

> Every Claude Code session MUST read this file before writing any code or content.
> This file reflects the actual codebase as of March 2026.

---

## Project Overview

LingoVerse is a self-contained multilingual language learning platform built with React 18 and Vite. The codebase is split into 7 source files (1 engine + 6 data modules). Vite bundles them into a single optimized output for deployment.

**Vision**: ANY source language to ANY target language. Every native tongue of every registered country. The architecture must always be built strategically with scale in mind. Nothing should ever be hardcoded for one language pair.

**Current state**: Korean A1-B2 COMPLETE + DIALOGUE-ENRICHED (30 units, ~311 lessons, 847/1132 teach cards with A:/B: dialogues). Dutch A1-B1 COMPLETE + POLISHED (20 v2 units, ~164 lessons, density uplift D99). German and Arabic have early skeletons (5 units each, below density standard). French and Spanish have infrastructure but no content yet.

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
| `units-dutch.js` | ~6,030 | All 43 Dutch units (20 v2 + 23 legacy) |
| `units-korean.js` | ~8,700 | All 30 Korean units (U1-U6 A1, U7-U10 A2, U11-U20 B1, U21-U30 B2) |
| `units-other.js` | ~500 | German (5) + Arabic (5) skeleton units |

### Engine (`src/lingoverse.jsx`, ~12,892 lines)

| Section | Contents |
|---------|----------|
| Manifesto & Decision Log | 20+ principles, 100+ decisions (D1-D100+), pipeline rules, curriculum spine |
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
- **P46**: B1+ multi-construct density. Every B1+ lesson must: (a) layer 2+ constructs in examples, (b) have 50%+ quiz sentences combining current + previous grammar, (c) end with a comprehensive multi-pattern final question (3+ constructs), (d) meet minimum 15 steps.

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

### Step Type Correctness (P48):
- **P48**: Step type MUST match step complexity. Specifically:
  - `fb` (fill-in-blank) is for SINGLE-BLANK steps only. The engine `fb` renderer replaces `{1}` with a blank. It does NOT handle `{2}`, `{3}`, `{4}` — those render as literal text.
  - `drag_fill` is for MULTI-BLANK steps. It uses a `blanks:{}` object and parses all `{N}` tokens correctly.
  - If a step has 2+ blanks, it MUST be `type:"drag_fill"` with a `blanks` object, NOT `type:"fb"` with an `a:[]` array.
  - NEVER create `fb` steps with multiple `{N}` placeholders. They WILL render broken.
  - This rule exists because D96 created 520 broken multi-blank `fb` steps that displayed `{2}`,`{3}`,`{4}` as literal text to learners.

### No Meta-Curriculum in Learner Content (P49):
- **P49**: CEFR levels (A1, A2, B1, B2, C1, C2) must NEVER appear in learner-facing content. Specifically:
  - Quiz questions must NEVER ask "which level is this from?" or "this pattern recalls which level?"
  - Quiz options must NEVER contain CEFR labels like "A2 progressive", "B1 grammar", "B2 new"
  - Teach cards, tips, and notes must NEVER reference CEFR levels as content the learner needs to know
  - The learner does not know what CEFR is. They are learning a LANGUAGE, not a curriculum taxonomy.
  - Internal comments (// A2 pattern) are fine. Learner-facing strings are NOT.
  - This rule exists because D96 interpreted "recycle A1-B1 grammar" as "quiz learners on which CEFR level grammar belongs to" — producing 100+ anti-pedagogical meta-questions.

### Recycling/Review Step Quality (P50):
- **P50**: When adding review/recycling steps that reuse earlier grammar in later units:
  - "Recycle" means USE the pattern naturally in a new context. NOT ask about its classification.
  - Every recycling MC/FB must test the learner's ability to USE the grammar correctly, choosing the right form/word in a Korean sentence.
  - Good recycling: "지금 뭐 하고 있어요?" → opts: [먹고 있어요, 먹었어요, 먹을 거예요, 먹어요] (tests -고 있다 USAGE)
  - Bad recycling: "-고 있다 is from?" → opts: [A2 progressive, B1 grammar, B2 new, A1 only] (tests TAXONOMY)
  - Recycling steps should place old grammar in the CURRENT unit's thematic context (e.g., A1 particles in B2 workplace sentences).
  - The Polyglot Pipeline Pillar 1 (Show Before Name) applies: test comprehension and production, never label recall.

### Build-Time Quality Enforcement:
- **P47**: Step density must be validated PER LESSON DURING BUILD, not after. Every lesson must meet P43 minimums before the builder moves to the next lesson. Batch-building thin skeletons for later uplift is a known anti-pattern that has caused two costly uplift passes (D88 for B1, D95 for B2). See Agent Rule 7 for enforcement details.

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
- A1-A2 (Units 1-10): COMPLETE (80 lessons, avg 20+ steps)
- B1 (Units 11-20): COMPLETE + DENSITY UPLIFT (D99) + QUALITY FIXES
  - 80 lessons, 1,467 steps, all 18+ per P43 (avg 18.3)
  - **DENSITY UPLIFT COMPLETE (2026-03-15)**: Uplifted from avg 12.9 to avg 18.3. ~437 quiz steps added across 76 under-dense lessons. All 80 lessons now 18-20 steps.
  - **QUICK FIXES COMPLETE (2026-03-15)**: 1 P49 CEFR quiz replaced, 5 P22c em-dashes fixed, 11 critical P8 hint-reveals rewritten.
  - P48 scan: PASS (0 violations). P49 scan: PASS (0 violations).
- 20 v2 units + 23 legacy units, 164 v2 lessons, ~3,551+ steps
- **NEXT ACTION**: Dutch B2 curriculum (U21-U30+), then retroactive A1-A2 polish (D41/D42/D47/D53 standards).

### Korean:
- Foundations: COMPLETE (knowledge + 25 playthrough lessons + gate quiz)
- A1 (Units 1-6): COMPLETE + FULLY AUDITED (D93). CEFR A1 34/34 grammar, 17/17 vocab domains, 15/15 communicative functions.
- A2 (Units 7-10): COMPLETE + FULLY AUDITED (D93). TOPIK I 57/57, TTMIK L1-L4 90/92 (2 deferred to B2).
- B1 (Units 11-20): COMPLETE + DENSITY UPLIFT (D88) + FULLY AUDITED (D92, 14 rounds).
  - 106 lessons, 2,252 steps, all 20+ per P43 (avg 21.2)
  - All 12 seed registry harvests complete. All 6 irregular verb families taught.
  - 25+ grammar patterns, 200+ vocabulary words, 10 cultural anchors.
- **A1-A2 Full Quality Audit (D93, 2026-03-15)**: 7 commit rounds. Verified against CEFR A1/A2, TOPIK I, TTMIK L1-4.
  - Round 1: 어떤, -(으)ㄹ 때, -는 중이다 teach cards + 3 pipeline fixes.
  - Round 2: 52 pipeline issues (P8/D90/P44) + -(으)ㄹ게요 TOPIK gap.
  - Round 3: 화나다 (emotion vocab), 아무 (TTMIK L4 prefix), -(으)ㄹ 뻔하다 (TTMIK L4).
  - Round 4: 5 color teach cards (빨간/파란/하얀/검은/노란).
  - Round 5: -기 때문에, -(으)ㄹ 수밖에 없다 from TTMIK agent.
  - Round 6: 자기/자신 (reflexive pronoun) in U10L7.
  - Round 7: 아래/밑, 앞, 뒤 (spatial position words) in U6L4.2.
  - Design decisions confirmed: Past tense in A2 U7, future in A2 U9, body parts in A2 U8, comparatives in B1 U12.
  - Deferred to B2: 뿐, 마저/조차, -(으)ㄹ 정도로, 얼마든지.
- **B1 Full Quality Audit (D92, 2026-03-15)**: 14 commit rounds. ~50 P8 fixes, 6 engine \n bugs, 5 P34 violations, ~15 translations, 3 D90 reframes.
- **TOPIK/TTMIK gap plan: EXECUTED (2026-03-14)**. All 6 sprints complete. TTMIK L1-6 coverage ~90-95%.
- 20 units, ~209 lessons total, ~4,700+ steps (after all audit additions)
- **B2 (U21-U30): COMPLETE + DENSITY UPLIFT (D95/D96).**
  - 10 units, 100 lessons, ~77 grammar patterns, 10 proverbs, 10 사자성어, 10 body idioms.
  - B2.1 (U21-U25): Formal writing, opinions, news, regret/hypotheticals, cause discrimination.
  - B2.2 (U26-U30): Habits, proverbs/idioms, comparison/degree, register mastery, TOPIK prep + C1 preview.
  - TOPIK II writing prep (51번/52번/53번). 4-register mastery. 8 C1 seeds planted.
  - **DENSITY UPLIFT COMPLETE (2026-03-15)**: All 100 lessons now 20-22 steps (avg 21.2). ~600 cross-level review steps added recycling A1-B1 grammar. Brace/bracket balanced. D89 clean. 0 low lessons.
  - P8 scan: 4 leaks found and fixed. P34 scan: PASS. board:true: 311/311.
- **P48 FIX COMPLETE (D98, 2026-03-15)**: All 520 multi-blank `fb` steps converted to `drag_fill` with proper `blanks:{}` objects. Distribution: U18(1), U21(21), U22(29), U23(56), U24(67), U25(67), U26(69), U27(44), U28(52), U29(56), U30(58). Zero remaining P48 violations.
- **P49 FIX COMPLETE (D98, 2026-03-15)**: 15 CEFR meta-curriculum quiz steps rewritten. Removed all A1/A2/B1/B2/C1 labels from learner-facing quiz `q`, `opts`, and `ans` fields. Replaced with grammar-usage questions. Zero remaining P49 violations in quiz content.
- **DIALOGUE ENRICHMENT COMPLETE (D100, 2026-03-15)**: 847/1132 teach cards now have A:/B: dialogue examples rendered as iOS-style chat bubbles. Coverage by level: A1 97.8%, A2 86.8%, B1 52.1%, B2 58.9%. ~285 cards correctly excluded (COMPOUND/hanja morpheme cards, pure number/counter cards, standalone particles get single-sentence examples). Dialogue length scales by CEFR: A1 2-3 exchanges, A2 3-4, B1 4-5, B2 5+. Zero turn-count mismatches across all 30 units. Engine bug fixes: `showInContext` gate extended for `kind:"phrase"`, null guard on done-screen transition, LessonErrorBoundary added.
- 30 units, ~311 lessons total, ~6,900+ steps (after B2 uplift)
- **REMAINING QUALITY ITEMS**:
  - 37 P8 hint-reveals in B1: mostly grammar pattern names in hints. Borderline, not egregious.
  - P44 lazy hints: 12 in A1/A2 content.
  - Mobile CSS overflow on fb/drag_fill option buttons with long Korean text.
- **Korean is PRODUCTION-READY.** A1-B2 fully built, audited, density-uplifted, P48/P49 clean, and dialogue-enriched. Next: C1 curriculum when Dutch catches up.

### German: 5 early units (27 lessons), below density standard, needs Goethe-Institut A1 audit
### Arabic: 5 skeleton units (29 lessons), RTL works, needs CEFR audit. Missing from vocabulary.js.
### French: Infrastructure only (LANG_META, VOCAB entries, CULTURE_PACKS). No units, no foundations.
### Spanish: Infrastructure only (LANG_META, VOCAB entries). No units, no foundations.

### Infrastructure Readiness:
- LANGUAGES array: 11 languages (fr, nl, en, de, ar, ro, es, ko, zh, ja, ru)
- LANG_META: All 11 complete
- LANG_BLUEPRINT: Only nl, de, ar populated. Others TODO.
- SCRIPT_BLUEPRINTS: 7 scripts defined (hangul, kana, arabic, hanzi, cyrillic, latin_complex, latin_simple)

---

## Product Roadmap

### Phase 1: Content (Current)
5 target languages to A1-B2, from English (primary source) and Arabic (second source):
1. **Korean** - A1-B2 PRODUCTION-READY. Fully audited (D92+D93), density-uplifted (D96), P48/P49 clean (D98), dialogue-enriched (D100). THE GOLD STANDARD. Next: C1 when Dutch catches up.
2. **Dutch** - A1-B1 DONE + POLISHED (D99). Next: **Polish to Korean quality standard** (dialogue enrichment, quality audit), then B2 curriculum.
3. **German** - 5 skeleton units. Next: full A1 build from scratch (after Dutch polish).
4. **French** - Infrastructure exists. Next: LANG_BLUEPRINT, foundations, A1 (after German).
5. **Spanish** - Infrastructure exists. Next: LANG_BLUEPRINT, foundations, A1 (after French).

### Phase 2: AI Integration
- Proxy and backend for AI bot/chat integration
- Personal curriculum adaptation
- UI polish and responsive improvements

### Phase 3: Expansion Languages
- Chinese (Mandarin), Japanese, Russian, Arabic (as target)

### Phase 4: Grand Vision
- ANY source to ANY target. Semi-autonomous course generation.

### Known Scaling Blockers (must fix before Phase 1 expansion):
1. KOREAN_DICT hardcoded in engine (~line 10384) - extract to per-language module
2. LANG_BLUEPRINT incomplete - need fr/es before building those curricula
3. UI strings mostly hardcoded English - TK localization layer deferred (Manifesto P9)
4. No multi-source lesson schema - units assume English source. Onboarding "I speak" screen removed (D83), must re-add when Arabic source is implemented.
5. RTL lesson card styling incomplete (foundations work, lesson engine doesn't)

---

## Korean B1 Design Decisions (Units 11-20)

Full design document: `docs/KOREAN_B1_CURRICULUM_DESIGN.md`

### Key Architectural Decisions

1. **Harvest-Before-New**: All 12 seed registry patterns from A1-A2 are formally harvested in B1 before introducing new grammar. Every harvest lesson opens with "You have been seeing [X] since Unit Y."

2. **Cultural Anchoring**: Each unit is tied to a Korean cultural context (travel, 눈치, 회식, 수능, 맛집, 정, etc.) that provides natural sentence contexts for the grammar being taught.

3. **Irregular Completion**: The remaining 3 irregular verb families (ㅎ in U11, ㅅ in U12, 르 in U13) are harvested in units where their example verbs appear naturally.

4. **Speech Level Progression**: B1.1 uses 해요체 primary; B1.2 adds active 합쇼체/반말 use; U19 introduces explicit register switching.

5. **Indirect Speech Before Passive**: Deliberate ordering. Indirect speech (U16) is more immediately useful; passive/causative (U17) is structurally harder. Having reported speech first enables "The news said..." patterns in U17.

6. **Step Density (D88)**: B1 density uplift completed 2026-03-15. All 106 lessons now at 20+ steps (avg 21.2). New steps are multi-construct per P46 (2+ grammar patterns from different units). Previous avg was 13.8 — uplifted without filler by adding layered quiz steps that combine current + prior grammar.

7. **Contrastive Questions Allowed**: MC questions that show both options in the question stem (e.g., "X vs Y: which means Z?") are permitted when testing pattern discrimination, not recall.

8. **Sino-Korean COMPOUND Chips**: Every new Sino-Korean word gets morpheme decomposition (e.g., "COMPOUND: 관(relate/關) + 계(connect/係)"). By B1 end, learners have seen 100+ Sino-Korean morphemes.

---

## Documentation Files — Hierarchy & Read Order

Every session should understand what each doc does and which ones are authoritative. Read CLAUDE.md first (you're reading it). Then consult docs as needed for the task at hand.

### Tier 1: Authoritative (always current, governs all work)
- **`CLAUDE.md`** (this file) — Single source of truth for project state, pipeline rules, decisions. READ FIRST.
- **`docs/LINGOVERSE_MASTER_BIBLE.md`** — Full philosophy, per-language standards, official reference requirements, unit count doctrine.
- **`docs/POLYGLOT_PIPELINE_STANDARDS.md`** — Five Universal Pillars, per-language pipeline rules, seed framework, JSON separation plan.

### Tier 2: Active reference (current for their scope)
- **`docs/CONCEPT_REGISTRY.md`** — Machine-searchable index of all Korean grammar patterns, vocabulary domains, and teach/tip locations. Check HERE before grepping data files. Updated per language.
- **`docs/DECISION_LOG.md`** — Structured index of all D-numbers (D1-D100+) with topic index. Find decisions by topic without scrolling 12K+ lines of engine code.
- **`docs/KOREAN_B1_CURRICULUM_DESIGN.md`** — Complete B1 design: seed harvests, grammar sequencing, cultural anchors. Template for future level designs.
- **`docs/LINGOVERSE_MASTER_BIBLE.md`** — Full philosophy, per-language standards, official reference requirements, unit count doctrine.
- **`docs/POLYGLOT_PIPELINE_STANDARDS.md`** — Five Universal Pillars, per-language pipeline rules, seed framework, JSON separation plan.

### Tier 3: Completed work reference (historical, not actionable)
These docs describe COMPLETED Korean work. Keep for reference but do NOT use as active handoffs:
- **`docs/KOREAN_B2_HANDOFF.md`** — SUPERSEDED. B2 build is COMPLETE + density-uplifted + P48/P49 clean + dialogue-enriched. Useful only for understanding design decisions behind B2.
- **`docs/KOREAN_B2_DENSITY_UPLIFT_HANDOFF.md`** — SUPERSEDED. Density uplift is COMPLETE (D96). All 100 lessons 20+ steps. Useful only for understanding the uplift strategy.
- **`docs/KOREAN_CURRICULUM_GAP_PLAN.md`** — SUPERSEDED. All 6 TOPIK/TTMIK sprints EXECUTED. Useful only for understanding what gaps were filled and where.

### Deleted (March 2026 cleanup)
- ~~`KOREAN_DENSITY_AUDIT.md`~~ — Superseded by D88 density uplift + D92 audit.
- ~~`KOREAN_TOPIK_TTMIK_AUDIT.md`~~ — Had 25% false positives. Superseded by gap plan v2.
- ~~`KOREAN_QUALITY_AUDIT.md`~~ — All critical items addressed by D92 (14 rounds) + D93 (7 rounds).

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

## Session Startup Protocol (MANDATORY)

Every new Claude Code session MUST follow this sequence before writing any code:

1. **Read CLAUDE.md** (this file). Understand current project state, active TODOs, and all pipeline rules.
2. **Check the Documentation Hierarchy** (above). Know which docs are authoritative. Deleted historical docs are listed for reference only.
3. **Read memory files** (`~/.claude/projects/.../memory/`). Check for owner preferences, past mistakes, and architectural decisions.
4. **Before any audit or gap analysis**: Follow the Agent Deployment Standards below. Never compare external references against CLAUDE.md descriptions alone.
5. **Before writing content**: Re-read the Pipeline Rules section. Every rule (P8, P24, P26, P34, P37, P43, P46) applies to every lesson in every language.

### Why This Exists
In March 2026, audit agents compared TOPIK/TTMIK reference lists against CLAUDE.md descriptions instead of grep-ing actual code. This produced a 25% false-positive rate (10 patterns listed as "missing" that actually existed in `units-korean.js`). The owner could have found these with Ctrl+F faster than the agents did. This protocol prevents that class of error from recurring.

---

## Agent Deployment Standards (MANDATORY)

When deploying sub-agents for audits, gap analysis, or content verification:

### Rule 1: Code-First Verification (D80)
NEVER claim a grammar pattern, vocabulary item, or feature is "missing" based on reading docs or CLAUDE.md alone. ALWAYS:
1. **Grep the actual data file** (e.g., `units-korean.js`, `units-dutch.js`) for the specific pattern.
2. **Search multiple representations**: Korean patterns can appear as hangul (-(으)니까), romanized (nikka), or in teach card `nl`/`en`/`note`/`example` fields. Search all.
3. **Check teach cards AND quiz cards AND tip text**: A pattern might be formally taught (teach card), used in examples (seed), or explained in a tip. All count differently.
4. **Distinguish "not taught" from "taught but not labeled"**: If 그리고 appears in 15 teach card examples but has no standalone teach card, that's "seeded but not formally taught", not "missing".

### Rule 2: Agent Task Specificity (D81)
Every deployed agent must receive:
- **Exact file paths** to search (not "check the Korean curriculum")
- **Exact search terms** with multiple variants (hangul + romanized + English gloss)
- **Clear output format**: for each claimed gap, agent must provide (a) the search terms used, (b) grep results (hit or miss), (c) confidence level
- **Return raw evidence**, not conclusions. The main session interprets.

### Rule 3: Token Optimization (D81)
- Do NOT have agents read entire multi-thousand-line files when a targeted grep suffices
- Do NOT re-read CLAUDE.md in every sub-agent when the main session already has the context
- Do NOT deploy agents for tasks that a single grep/glob from the main session can answer
- A human with Ctrl+F should not be faster than your agent. If they would be, use grep directly.

### Rule 4: Cross-Verification for Audits (D80)
For any audit that produces a gap list:
1. Agent 1 produces the raw gap list from external references
2. Agent 2 (or main session) verifies EVERY item against actual code with grep
3. Only verified gaps proceed to planning
4. False positives are logged with the search terms that would have caught them

### Rule 5: String Editing Safety (D86)
When editing JS string literals (especially in `units-*.js` data files):
1. **NEVER insert actual newline characters** inside JS string literals. Always use the two-character escape `\n`.
2. **Keep each string on one source line.** The Edit tool can silently insert real newlines when replacing multiline content. If a string must contain a line break, use `\n` — never a literal line break inside quotes.
3. **After any batch string edit**, verify the build passes (`npm run build`) before committing. Vite will catch unterminated string literals.
4. **Post-edit verification**: Check quote parity (every `"` has a matching `"`), no unterminated strings, no orphaned commas or colons.
5. **Python scripts editing JS files**: Use `chr(92)` + `chr(110)` for `\n` in Python heredocs to avoid shell/Python escape conflicts. Use `chr(10)` for actual newline detection.

### Rule 6: Post-Verification Evidence Format (D87)
Any gap claim or "missing pattern" assertion MUST include an evidence table:

| Pattern | Search Terms Used | Files Searched | Grep Result | Confidence |
|---------|-------------------|----------------|-------------|------------|
| -(으)니까 | `니까`, `nikka`, `because/since` | units-korean.js | FOUND: kou8l3, step 4 | verified |

- Claims without grep evidence are **rejected** — they do not proceed to planning.
- "I read the file and didn't see it" is NOT evidence. Grep output is evidence.
- Consult `docs/CONCEPT_REGISTRY.md` first before grepping — the registry may already answer the question.

### Rule 7: Build-Time Density Enforcement (D95)
When building curriculum content (units/lessons) across multiple units:
1. **Enforce P43 step counts PER LESSON as you build, not after.** Every lesson must meet the language's density minimum (Korean: 18-20+) BEFORE moving to the next lesson.
2. **Deploy a density-monitoring agent** as a parallel background task during multi-unit builds. This agent should periodically count steps per lesson in the file being built and flag violations immediately.
3. **Never batch-build skeleton lessons for later uplift.** The B1 and B2 builds both produced skeletons averaging 13.8 steps/lesson that required costly separate uplift passes. This pattern must not repeat.
4. **Use a density-first template**: Start each lesson with the intro + minimum required teach/tip/quiz steps BEFORE adding content. Fill in the content afterward. This ensures the structural minimum is always met.
5. **Bird's-eye view agent**: For any build spanning 5+ units, deploy a dedicated orchestrator agent that:
   - Tracks which units/lessons are complete and which are pending
   - Validates density, P8, P34 after each unit (not after the entire level)
   - Flags systematic drift (e.g., step counts decreasing as the session progresses — this is the exact pattern that caused the B2 failure: U21 avg 17.7 → U30 avg 10.9)
   - Reports cumulative statistics after each unit is complete

### Why Rule 7 Exists
In March 2026, the Korean B2 build (U21-U30, 100 lessons) was completed with 91/100 lessons below the P43 density minimum. The build session produced progressively thinner content as it continued — early units averaged 17.7 steps, final units averaged 10.9. No agent was monitoring density during the build. The main session and all sub-agents focused on grammar scope and structural correctness but ignored step count requirements. This cost the owner a full separate uplift pass (same as D88 for B1). The pipeline must guarantee quality by PROCESS (Principle 3) — density is a process guarantee, not a post-hoc fix.

### Rule 8: Content Quality Gate for Uplift/Batch Edits (D97)
When performing density uplifts, batch content additions, or any operation that adds steps to existing lessons:
1. **Every added step must be pedagogically valid on its own.** A step that meets density count but teaches nothing is WORSE than a missing step — it wastes learner time and erodes trust.
2. **Verify step type correctness (P48)**: Every `fb` step has exactly ONE blank (`{1}`). Every multi-blank step uses `drag_fill` with a `blanks` object. Run a grep for `type:"fb"` + `{2}` after any batch edit.
3. **Verify no meta-curriculum leakage (P49)**: Grep for CEFR level strings (A1, A2, B1, B2, C1) in quiz `q`, `opts`, and `ans` fields after any batch edit. Zero tolerance.
4. **Verify recycling quality (P50)**: Every recycling step must test USAGE of the grammar, not classification. Spot-check at least 5 recycling steps per unit after batch addition.
5. **Run a rendering sanity check**: For every new step type used, mentally trace the engine renderer path. Does the engine actually support what the data expects? Check the renderer code, not assumptions.
6. **Post-uplift audit is MANDATORY, not optional.** After any batch edit touching 10+ steps, run P8/P48/P49/P50 verification BEFORE committing. The D96 uplift added ~600 steps with zero quality verification — this must never happen again.

### Why Rule 8 Exists
In March 2026, the D96 density uplift added ~600 steps to Korean B2 to meet P43 minimums. The uplift enforced step COUNT but not step QUALITY. Result: 520 broken multi-blank `fb` steps (engine only supports single-blank), 100+ CEFR taxonomy quizzes (learners asked to classify grammar by level), and hundreds of shallow recycling steps. The owner described this as "disrespecting the pipeline and polyglot vision." Density without quality is anti-pedagogy. Rule 8 ensures that quantity metrics never override teaching quality again.

### Rule 9: Sequential Enrichment with Validator Agent (D100) — THE GOLD STANDARD WORKFLOW
When performing large-scale content enrichment across multiple units (e.g., adding dialogues, examples, or bulk quality fixes to 20+ units):

**Architecture: Sequential Content Agent + Parallel Validator**

1. **One content agent per batch, sequential execution.** All work targets the SAME file (e.g., `units-korean.js`), so agents MUST work sequentially to avoid merge conflicts. Each agent receives:
   - **Exact line range** for their unit(s) (e.g., "U7 starts at line 1997, U8 at line 2239")
   - **Full format spec** with level-appropriate parameters (e.g., "A2 = 3-4 exchanges, 6-8 lines")
   - **Exclusion list** — which card types to skip (COMPOUND/hanja morpheme cards, pure number/counter cards)
   - **Pipeline rules** relevant to the work (P8, P22c, P34, P44)
   - **Cumulative vocabulary context** (what's been taught up to this point)

2. **Validator agent runs AFTER each content agent completes.** The validator checks:
   - **Turn count mismatches**: `example` and `exampleEn` must have identical A:/B: turn counts (the engine regex `/[AB]:\s/` splits both — mismatched counts crash the bubble renderer)
   - **Em-dash scan** (P22c): Zero tolerance for — characters
   - **Dialogue coverage**: Count cards with dialogues vs total cards per unit
   - **Step density**: Verify lesson step counts unchanged
   - **Quote parity**: Every `"` has a matching `"`
   - **No literal newlines** in JS strings

3. **Batch sizing by CEFR level:**
   - A1 (simplest dialogues): 1 unit per batch
   - A2: 2 units per batch
   - B1: 2-4 units per batch
   - B2: 2-5 units per batch
   Higher levels have more complex dialogues but fewer eligible cards (more COMPOUND exclusions).

4. **Line range handoff:** After each content agent completes, the NEXT agent must be given UPDATED line ranges (content agents add lines, shifting everything below). The orchestrator calculates new offsets.

5. **Final cross-level validation sweep** after all units complete. One agent scans the ENTIRE file for:
   - Total dialogue coverage statistics by level
   - Turn count mismatches across ALL units (not just the latest batch)
   - Any new P8 leaks introduced by dialogue text
   - Build verification

**Results of this workflow (D100):** 847 teach cards enriched across 30 Korean units in a single session. 454 cards enriched by sequential agents (A2+B1+B2), 393 already done (A1 + prior work). Zero turn-count mismatches. Zero em-dashes introduced. Zero build failures. All deployed to production. THIS is the standard for all future large-scale content operations.

### Why Rule 9 Exists
In March 2026, Korean dialogue enrichment processed 30 units (1,132 teach cards) by deploying content agents sequentially with a validator agent after each batch. The sequential-with-validation pattern achieved zero defects across 454 card edits — no turn mismatches, no em-dashes, no build breaks. Previous batch operations (D96 density uplift) had deployed parallel agents without validation gates, producing 520+ broken steps. Rule 9 codifies the proven workflow: sequential content agents + parallel validators + cross-level final sweep.

---

## Memory & Decision Tracking (MANDATORY)

Claude Code has a persistent memory system at `~/.claude/projects/.../memory/`. Every session MUST:

1. **After any architectural decision or design choice**: Save it to memory AND update CLAUDE.md if it affects future sessions. Decisions like track values, grammar sequencing, file structure changes, etc.

2. **After any mistake or correction from the owner**: Save a feedback memory explaining what went wrong and how to avoid it. These prevent repeating the same errors.

3. **After completing a major milestone** (e.g., finishing B1, adding a language): Update `project_status.md` in memory AND the "Current Build Status" section in CLAUDE.md.

4. **After learning owner preferences**: Save to `user_profile.md` or `feedback_workflow.md`.

The goal: any future Claude Code session should be able to read CLAUDE.md + memory files and have full context on every decision made, every mistake avoided, and the current state of the project.

---

## Super Handoff: What's DONE and What's NEXT

### DONE (Korean A1-B2 = Gold Standard)
Korean is PRODUCTION-READY. Every quality gate has been passed:

| Milestone | Decision | Status |
|-----------|----------|--------|
| A1-A2 curriculum (U1-U10) | - | COMPLETE |
| B1 curriculum (U11-U20) | - | COMPLETE |
| B2 curriculum (U21-U30) | D94 | COMPLETE |
| A1-A2 quality audit | D93 | 7 rounds, CEFR/TOPIK/TTMIK verified |
| B1 quality audit | D92 | 14 rounds, ~50 P8 fixes |
| B1 density uplift | D88 | All 106 lessons 20+ steps |
| B2 density uplift | D96 | All 100 lessons 20+ steps |
| P48 fb-to-drag_fill fix | D98 | 520 steps converted |
| P49 CEFR purge | D98 | 15 meta-quizzes rewritten |
| Dialogue enrichment | D100 | 847/1132 teach cards with A:/B: dialogues |
| TOPIK/TTMIK gap coverage | D93 | 6 sprints, ~90-95% coverage |
| Engine bug fixes | D100 | showInContext, null guard, error boundary |

**Korean needs NO further work** until C1 curriculum is planned (after Dutch catches up).

### NEXT (Priority Order)

1. **Dutch Polish to Korean Standard**
   - Dutch A1-B1 has 164 lessons but lacks: dialogue enrichment, D92-level quality audit, retroactive D41/D42/D47/D53 standards
   - Use Rule 9 workflow (sequential content + validator) for dialogue enrichment
   - Target: same 847/1132 dialogue coverage ratio scaled to Dutch teach card count
   - Then: Dutch B2 curriculum (U21-U30+)

2. **German A1 Build**
   - 5 skeleton units exist, below density standard
   - Full rebuild from scratch using Goethe-Institut A1 reference
   - Apply all pipeline rules from day one (P43 density during build, not after)

3. **French A1 Build**
   - Infrastructure exists (LANG_META, VOCAB entries, CULTURE_PACKS)
   - Needs: LANG_BLUEPRINT, foundations playthrough, gate quiz, then A1 units

4. **Spanish A1 Build**
   - Infrastructure exists (LANG_META, VOCAB entries)
   - Same path as French: LANG_BLUEPRINT, foundations, A1

### Workflow for All Future Content
Every language expansion MUST follow the Korean playbook:
1. Build foundations (knowledge + playthrough + gate quiz)
2. Build A1-B2 with Rule 7 density enforcement (never batch-build skeletons)
3. Quality audit per level (D92-style: P8, P34, P44, pipeline sweep)
4. Dialogue enrichment with Rule 9 sequential workflow
5. Final cross-level validation

---

## Principles to Always Remember

1. **We are building the system that builds courses.** Every decision shapes the process that will eventually run WITHOUT a human safety net.
2. **When unsure about grammar: FLAG IT, do not commit.** Use `// VERIFY:` comments.
3. **The pipeline must guarantee quality by PROCESS, not by human review.** Think: "Would this catch this bug in Japanese, where no human reads the output?"
4. **P26 Core Constructs First is law.** Teach and NAME core constructs early. Control what gets QUIZZED, not what gets taught. Introduce → Use → Elaborate.
5. **Every new concept type needs an intro tip before first instance** (D44).
6. **Treat every session as if building for a language you don't speak.** The rules exist because they caught real errors.
7. **Code is truth, docs are claims.** When verifying what exists in the curriculum, grep the data files. CLAUDE.md and docs describe intent; `units-*.js` files contain reality. (D80)
8. **A human with Ctrl+F must not be faster than your agents.** If a verification task is a simple keyword search, do it directly. Deploy agents only for tasks requiring judgment or cross-referencing. (D81)
9. **Learners learn LANGUAGE, not curriculum structure.** CEFR levels, grammar labels, unit numbers — these are internal tools. Learners never see them, never need them, never get quizzed on them. (P49)
10. **Density without quality is anti-pedagogy.** A step that meets count but teaches nothing is worse than no step. Every step must earn its place by teaching, testing, or reinforcing LANGUAGE. (D97)
11. **Step type must match engine capability.** Before creating a step, verify the engine renderer actually supports the data shape. Multi-blank needs drag_fill, not fb. Check the code, not assumptions. (P48)
12. **Sequential content + parallel validation = zero defects.** For large-scale content operations, never deploy parallel content agents on the same file. Work sequentially, validate after each batch, sweep across all units at the end. This workflow achieved 0 defects across 454 card edits. It is the gold standard. (D100, Rule 9)
