# CLAUDE.md — LingoVerse Project Instructions

> Every Claude Code session MUST read this file before writing any code or content.
> This file reflects the actual codebase as of March 2026.

---

## Project Overview

LingoVerse is a self-contained multilingual language learning platform built with React 18 and Vite. The codebase is split into 7 source files (1 engine + 6 data modules). Vite bundles them into a single optimized output for deployment.

**Vision**: ANY source language to ANY target language. Every native tongue of every registered country. The architecture must always be built strategically with scale in mind. Nothing should ever be hardcoded for one language pair.

**Current state**: Korean A1-B2 COMPLETE + DIALOGUE-ENRICHED (30 units, ~311 lessons, 847/1132 teach cards with A:/B: dialogues). Dutch A1-B2 COMPLETE + FULLY AUDITED (30 v2 units, 244 lessons, ~5,446 steps, D102 quality audit PASS). German A1-B2 COMPLETE (D103, 30 units, 240 lessons, 4,518 steps, 100% dialogue coverage). Arabic has early skeletons (5 units, below density standard). French and Spanish have infrastructure but no content yet.

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
| `units-german.js` | ~7,188 | All 30 German units (A1-B2, v1) |
| `units-other.js` | ~170 | Arabic (5) skeleton units |

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

### Language Complexity & Unit Count Guidance

Languages are NOT crammed into boxes. The number of units varies by:
1. **Language complexity**: Agglutinative languages (Korean, Japanese, Turkish) need more units for morphology. Languages with grammatical gender (Dutch, German, French) need targeted article/agreement practice. Tonal languages (Chinese, Vietnamese) need pronunciation-heavy foundations.
2. **Source language distance**: A Dutch speaker learning German (close, same family) needs fewer units than an Arabic speaker learning German (distant, different script + grammar). Cognate languages can move faster.
3. **Script complexity**: Non-Latin scripts (hangul, kana/kanji, arabic, cyrillic, hanzi) require dedicated foundations playthrough. Latin-script languages need shorter foundations focused on pronunciation differences.

**Baseline**: Dutch = 20 units A1-B1, 30 units A1-B2. Korean = 30 units A1-B2. These are GUIDELINES, not limits. If a language needs 35 units for B2, it gets 35 units.

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

## Manifesto Principles Index (P-numbers)

The full Manifesto lives in `src/lingoverse.jsx` (lines ~14-314). Key principles referenced throughout:

| Principle | Name | Summary |
|-----------|------|---------|
| P8 | Anti-Leak System | 5 leak types: visual, script, hint, pattern, position |
| P9 | TK Localization | UI strings localization layer (deferred) |
| P14 | No Hardcoded Language | Shared UI must not contain language-specific terms |
| P22c | No Em-Dashes | Use periods, colons, commas, or \n bullets instead |
| P24 | No Redundancy | Check no prior unit already teaches this concept |
| P26 | Core Constructs First | NAME core constructs in L1-L3, elaborate later |
| P27 | No IPA | ASCII-only phonetics, no slashes as separators |
| P30 | No Hooks in Renderers | No React hooks inside if(st.type===) blocks |
| P31 | No Gradient Colors | Never assign CSS gradients to color property |
| P32 | Native Quality | Every sentence native-speaker quality, one correct answer |
| P34 | Teach Before Test | Every word in exercises must have teach card first |
| P35 | Drag Ghost DOM | Use document.body escape hatch with delta positioning |
| P36 | Note Length | Max ~100 chars or use \n/bullets |
| P37 | Function Words | Need teach cards before first use |
| P38 | Phonetics Visibility | Hidden for Latin scripts, visible for non-Latin |
| P39 | String Escaping | Single-escaped \n, not \\n |
| P43 | Density Targets | Korean: 20-25, Dutch: 18-35 steps/lesson |
| P44 | No Lazy Hints | Hints must be 15+ chars, guide not reveal |
| P45 | DeepDive Purpose | Explanation only, never continuation |
| P46 | B1+ Multi-Construct | 2+ constructs per example, 50%+ combo quizzes |
| P47 | Build-Time Density | Validate per lesson during build, not after |
| P48 | Step Type Match | fb = single blank, drag_fill = multi-blank |
| P49 | No Meta-Curriculum | CEFR labels never in learner-facing content |
| P50 | Recycling Quality | Test USAGE, not classification |

### Decision Log Reference
The full Decision Log with D1-D100+ is in `docs/DECISION_LOG.md`. Key recent decisions:
- **D99**: Dutch B1 density uplift + quick fixes
- **D100**: Korean dialogue enrichment (Rule 9 workflow, 847/1132 cards)
- **D101**: Dutch quality uplift to Korean standard (B2 build, A1-B1 polish)
- **D102**: Dutch B2 quality audit (10 rounds, ~255 P8 fixes, 5 P34 fixes, de/het audit PASS)

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

### Anti-Leak System (P8) — Five Leak Types:
1. **Visual leak**: Answer visible in the question text itself
2. **Script leak**: Answer deducible from script/character patterns (e.g., only one Korean option among English)
3. **Hint leak**: Hint directly reveals or contains the answer (P44: hints must GUIDE, never REVEAL)
4. **Pattern leak**: Answer always in same position or always the longest option
5. **Position leak**: Correct answer clustering (must vary ~25% each position)
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
- Purple #7B5EE8 — UI accent, focus, selection, board card left accent, ALL unit theme colors
- Teal #2ECDA7 — English translations, correct answers, word emphasis (logical use only)
- Gold #E8960A — het article, low-score warning
- Blue #4A8FE7 — de article, general buttons
- Coral #F56565 — wrong answers only

**Article colors are PERMANENT.** The de/het color scheme (blue for de-words, gold for het-words) is a core learning feature that must never be removed or changed. It exists across all Dutch content and is integral to the learning experience.

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
- **B2 (Units 21-30): COMPLETE (D101, 2026-03-15)**
  - 10 units, 80 lessons, ~1,600+ steps, all 18+ per P43
  - B2.1 (U21-U25): Formal writing, conditionals, news/media, hypotheticals, academic Dutch, workplace Dutch
  - B2.2 (U26-U30): Society/conjunctions, discourse markers, literature/proverbs, debate/argumentation, NT2 prep
  - Grammar: conditional types 1-3, subjunctive, advanced passive, participial constructions, cleft sentences, advanced conjunctions (doordat, zodat, mits, tenzij, naarmate, hoe...hoe), discourse markers, debate vocabulary
  - 1,090/1,492 teach cards with A:/B: dialogues (73%)
  - All purple themed (#7B5EE8). 0 em-dashes. 0 P48 violations.
- **DUTCH QUALITY UPLIFT COMPLETE (D101, 2026-03-15)**: Full A1-B2 polish to Korean standard.
  - Phase 0: Purple theming for all 30 v2 units
  - Phase 1: P26 "How Dutch Works" roadmap tip in U1 L1
  - Phase 2: 64 severe P8 hint-reveals fixed, 12 P44 lazy hints expanded
  - Phase 3: 2 under-dense lessons uplifted to 18+ steps
  - Phase 4: 810/835 A1-B1 teach cards enriched with dialogues (97%)
  - Phase 5: 10 B2 units built (U21-U30, 80 lessons)
- 30 v2 units + 23 legacy units, 244 v2 lessons, ~5,446 steps
- **DUTCH B2 QUALITY AUDIT COMPLETE (D102, 2026-03-16)**: D92-style audit, 10 rounds, 10 commits.
  - Round 1-2: 93 severe P8 hint-reveals fixed (answer words appearing in hints)
  - Round 3: 7 P49 CEFR labels removed from learner-facing content
  - Round 4: 3 under-dense lessons uplifted to 18+ steps
  - Round 5: P8 pattern leaks fixed + MC option length equalization
  - Round 6: 6 duplicate MC questions replaced with unique content
  - Round 7: 2 P49 intro titles fixed ("Wat Betekent B2?" → "Wat Kun Je Nu?")
  - Round 8: 154 CAPS hint-reveals rewritten (English translations in hints)
  - Round 9: 1 visual leak, 1 P48 fb→drag_fill content error, 8 U30 hint-reveals
  - Round 10: 5 P34 teach-before-test violations fixed (quiz words without teach cards)
  - de/het article audit: 55+ nouns verified, ZERO errors
  - Final scan: P48=0, P22c=0, P44=0, P49=0, density=80/80, board:true=80/80, duplicates=0
- **Dutch is PRODUCTION-READY.** A1-B2 fully built, polished (D101), and audited (D102).
- **NEXT ACTION**: Dialogue enrichment uplift (73% → 90%+) or A1-A2 retroactive standards pass when prioritized.

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

### German:
- **A1-B2 COMPLETE (D103, 2026-03-16)**: Full build from scratch.
  - Foundations: COMPLETE (FOUNDATIONS_BY_LANG 6 sections/25 items, FK_PLAYTHROUGH 6 stages/15 lessons, FK_GATE_QUIZ 5 tasks/35 items)
  - 30 units (U1-U30), 240 lessons, 4,518 steps, avg 18.8 steps/lesson, all 18+
  - A1 (U1-U8): Greetings, introductions, family, food, daily routine, home, directions, shopping
  - A2 (U9-U16): Perfekt haben/sein, dative case, Wechselprapositionen, comparatives, Nebensatze, reflexive verbs, future/Konjunktiv II basics
  - B1 (U17-U24): Prateritum, passive voice, relative clauses, genitive/n-Deklination, indirect speech, infinitive constructions, advanced connectors, work culture
  - B2 (U25-U30): Advanced Konjunktiv II, participial constructions, advanced passive, discourse markers, proverbs/idioms, TestDaF/telc B2 prep
  - 1,100/1,100 teach cards with A:/B: dialogues (100%)
  - der/die/das article colors throughout (der=blue, die=coral, das=purple)
  - Quality audit PASS: P48=0, P22c=0, P49=0, board:true=240/240, density=all 18+
  - Track: v1. All purple themed (#7B5EE8). Lesson IDs: deu{N}l{N}.
- **German is PRODUCTION-READY.** A1-B2 fully built and audited.
### Arabic: 5 skeleton units (29 lessons), RTL works, needs CEFR audit. Missing from vocabulary.js.
### French:
- **A1-B2 COMPLETE (D105, 2026-03-16)**: Full build from scratch.
  - Foundations: COMPLETE (FOUNDATIONS_BY_LANG 5 sections/~25 items, FK_PLAYTHROUGH ~15 lessons, FK_GATE_QUIZ 5 tasks/~35 items)
  - LANG_BLUEPRINT["fr"]: COMPLETE (2-gender system, nasal vowels, liaison, silent letters, accents, verb groups, tu/vous)
  - 30 units (U1-U30), 240 lessons, 4,380 steps, avg 18.3 steps/lesson, all 18+
  - A1 (U1-U8): Greetings, introductions, family, food, daily routine, home, directions, shopping
  - A2 (U9-U16): Passé composé avoir/être, imparfait, PC vs imparfait, pronouns y/en/COD/COI, future, comparatives, conditional
  - B1 (U17-U24): Subjonctif présent (regular + irregular), relative pronouns, plus-que-parfait, passive voice, gerund, advanced connectors, work culture
  - B2 (U25-U30): Subjonctif passé, conditionnel passé, nominalization, discourse markers, proverbs/idioms, DELF B2/TCF prep + C1 preview
  - 883/883 teach cards with A:/B: dialogues (100%)
  - le/la article colors throughout (le=blue masculine, la=coral feminine)
  - Quality scan: P48=0, P22c=0, P49=0, board:true=240/240, unit ordering=PASS, density=all 18+
  - Track: v1. All purple themed (#7B5EE8). Lesson IDs: fre{N}l{N}.
  - Built with Opus 4.6 agents after Sonnet agents proved unreliable (D106).
- **French is PRODUCTION-READY.** A1-B2 fully built. Next: D92-style deep quality audit or C1 planning.
### Spanish: Infrastructure only (LANG_META, VOCAB entries). No units, no foundations.

### Infrastructure Readiness:
- LANGUAGES array: 11 languages (fr, nl, en, de, ar, ro, es, ko, zh, ja, ru)
- LANG_META: All 11 complete
- LANG_BLUEPRINT: nl, de, ar, fr populated. es TODO.
- SCRIPT_BLUEPRINTS: 7 scripts defined (hangul, kana, arabic, hanzi, cyrillic, latin_complex, latin_simple)

---

## Product Roadmap

### Phase 1: Content (Current)
5 target languages to A1-B2, from English (primary source) and Arabic (second source):
1. **Korean** - A1-B2 PRODUCTION-READY. Fully audited (D92+D93), density-uplifted (D96), P48/P49 clean (D98), dialogue-enriched (D100). THE GOLD STANDARD. Next: C1 when Dutch catches up.
2. **Dutch** - A1-B2 PRODUCTION-READY. Fully built (D101), audited (D102, 10 rounds). 30 units, 244 lessons, 5,446 steps. THE SECOND GOLD STANDARD.
3. **German** - A1-B2 COMPLETE (D103). 30 units, 240 lessons, 4,518 steps. Foundations + gate quiz built. 100% dialogue coverage. Quality audit PASS.
4. **French** - A1-B2 COMPLETE (D105). 30 units, 240 lessons, 4,380 steps. Foundations + gate quiz built. 100% dialogue coverage. Quality scan PASS.
5. **Spanish** - Infrastructure exists. Next: LANG_BLUEPRINT, foundations, A1-B2 build.

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

### Tier 3: Completed reference (historical, preserved for context)
- **`docs/FRENCH_A1_B2_HANDOFF.md`** — French build handoff, D105 COMPLETE. Preserved for lessons learned (D106 agent model escalation).
- **`docs/FRENCH_AGENT_PROMPT.md`** — French content generation instructions used during D105 build.

### Deleted (March 2026 cleanup)
All completed Korean work docs deleted. Their content is fully captured in CLAUDE.md decisions and build status:
- ~~`KOREAN_B2_HANDOFF.md`~~ — B2 build COMPLETE + density-uplifted + P48/P49 clean + dialogue-enriched (D94-D100).
- ~~`KOREAN_B2_DENSITY_UPLIFT_HANDOFF.md`~~ — Density uplift COMPLETE (D96). All 100 lessons 20+ steps.
- ~~`KOREAN_CURRICULUM_GAP_PLAN.md`~~ — All 6 TOPIK/TTMIK sprints EXECUTED (D93).
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

### Rule 10: Post-Build Structural Validation (D104)
After completing a full curriculum build (all units for a language), run a structural validation script BEFORE the final commit. This catches errors that Vite/ESBuild do NOT catch (they compile fine but crash React at runtime).

**The validation script MUST check:**
1. **No undefined/null array elements.** Stray commas between units create sparse array holes. These crash React when reading `.n`, `.title`, `.lessons` on `undefined`. Iterate every element and assert non-null.
2. **Unit ordering.** Units must be sequential by `n` (1, 2, 3, ..., 30). The engine displays units in array order with no sort. Scrambled order = scrambled learner experience.
3. **Required fields on every MC step.** Every `type:"mc"` step MUST have `q`, `opts` (array), and `ans` (string matching one of opts). A missing `ans` crashes when the learner selects an answer.
4. **Required fields on every fb step.** Every `type:"fb"` step MUST have `s`, `a`, and `opts`. No `{2}` or `{3}` in the `s` field (P48).
5. **Required fields on every teach step.** Every `type:"teach"` step MUST have `nl` and `en`.
6. **Required fields on every drag_fill step.** Every `type:"drag_fill"` step MUST have `s`, `blanks` (object), and `pool` (array).
7. **Required fields on every match step.** Every `type:"match"` step MUST have `pairs` (array of objects with `nl` and `en`).
8. **board:true on every lesson.** Zero exceptions for new content.
9. **Lesson density.** Every lesson must have 18+ steps (P43).

**Validation script template** (run with `node -e "..."` after build):
```javascript
const units = require('/tmp/test-lang.js'); // CJS-converted copy
let issues = [];
units.forEach((u, i) => {
  if (!u) { issues.push('Index ' + i + ': UNDEFINED ELEMENT'); return; }
  if (u.n !== i + 1) issues.push('Unit ' + u.n + ' at index ' + i + ': expected n=' + (i+1));
  u.lessons.forEach(l => {
    if (!l.board) issues.push(l.id + ': missing board:true');
    if (l.steps.length < 18) issues.push(l.id + ': only ' + l.steps.length + ' steps');
    l.steps.forEach((s, si) => {
      if (s.type === 'mc' && !s.ans) issues.push(l.id + ' step ' + si + ': mc missing ans');
      if (s.type === 'fb' && !s.a) issues.push(l.id + ' step ' + si + ': fb missing a');
      if (s.type === 'fb' && s.s && s.s.includes('{2}')) issues.push(l.id + ' step ' + si + ': P48 fb multi-blank');
      if (s.type === 'teach' && !s.nl) issues.push(l.id + ' step ' + si + ': teach missing nl');
      if (s.type === 'teach' && !s.en) issues.push(l.id + ' step ' + si + ': teach missing en');
      if (s.type === 'drag_fill' && !s.blanks) issues.push(l.id + ' step ' + si + ': drag_fill missing blanks');
      if (s.type === 'match' && !s.pairs) issues.push(l.id + ' step ' + si + ': match missing pairs');
    });
  });
});
if (issues.length === 0) console.log('VALIDATION PASS: ' + units.length + ' units clean');
else { console.log('VALIDATION FAIL: ' + issues.length + ' issues'); issues.forEach(i => console.log('  ' + i)); }
```

### Why Rule 10 Exists
In March 2026, the German D103 build (30 units, 240 lessons, 4,518 steps) was deployed with 3 critical defects that caused a white screen crash:
1. **3 stray commas** between units created `undefined` array elements (at indices 7, 11, 30 in a 33-element array that should have been 30)
2. **3 MC steps missing `ans` field** (deu3l6 steps 11/15, deu7l7 step 15) that crashed on answer selection
3. **Units scrambled** out of order (1,2,3,4,5,9,6,10,12,7...) because parallel build agents appended units non-sequentially

Vite compiled the file without errors. The build passed. But React crashed at runtime when trying to read properties of `undefined` array elements. This class of structural defect is invisible to build tools and can only be caught by runtime-style validation. Rule 10 makes this validation mandatory before any curriculum is considered "complete."

### Rule 11: Agent Model Escalation Protocol (D106)
When deploying sub-agents for content generation and curriculum building:

1. **Default to Opus 4.6 (`model:"opus"`) for ALL content generation agents.** Any agent tasked with building curriculum units, teach cards, quiz steps, or lessons MUST use Opus. Sonnet agents lack the sustained output quality, reliability, and pipeline rule adherence needed for large content tasks. This is non-negotiable.

2. **Sonnet (`model:"sonnet"`) is acceptable ONLY for**:
   - Validation agents (grep/count/structural checks)
   - Search and exploration agents (finding files, reading code)
   - Simple file edits (< 500 lines of output)
   - Quick audits (P8/P48/P49 scans)

3. **If a Sonnet agent fails, goes stale, or becomes unresponsive**: Do NOT retry with Sonnet. Escalate immediately to Opus 4.6. Document the failure.

4. **For multi-unit curriculum builds (5+ units)**: Always use Opus 4.6 from the start. The cost of retrying after Sonnet failure (wasted time, stale agents, broken sequential workflows) far exceeds the cost of using Opus initially.

5. **Agent reliability is non-negotiable.** Every deployed agent MUST complete its assigned task. Stale or unresponsive agents break Rule 9 sequential workflows, waste owner time, and risk data loss. If a model tier cannot reliably complete a task type, that model is permanently banned from that task type.

6. **Model selection in Agent tool calls**: Use the `model` parameter explicitly:
   - Content generation: `model:"opus"`
   - Validation/search: `model:"sonnet"` (or omit for default)
   - When in doubt: use `model:"opus"`

### Why Rule 11 Exists
In March 2026, the French A1-B2 build (D105) deployed Sonnet-tier sub-agents for curriculum content generation. Multiple agents became stale, unresponsive, or failed to complete their tasks, requiring repeated retries and manual owner intervention. The same tasks completed successfully and reliably when escalated to Opus 4.6. Content generation requires sustained coherence across thousands of lines, strict pipeline rule adherence (P8, P34, P43, P48, P49), language-specific accuracy (grammar, phonetics, cultural context), and exact structural format compliance. These demands exceed what smaller models can reliably deliver. This rule prevents future sessions from repeating the same costly trial-and-error pattern.

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

### DONE (Dutch A1-B2 = Second Gold Standard)
Dutch is PRODUCTION-READY. Every quality gate has been passed:

| Milestone | Decision | Status |
|-----------|----------|--------|
| A1-B1 curriculum (U1-U20) | D99 | COMPLETE + density uplifted |
| B2 curriculum (U21-U30) | D101 | COMPLETE (10 units, 80 lessons) |
| A1-B2 quality polish | D101 | Full polish to Korean standard |
| B2 quality audit | D102 | 10 rounds, ~255 P8 fixes, 5 P34 fixes |
| de/het article audit | D102 | 55+ nouns verified, 0 errors |
| All pipeline scans | D102 | P48=0, P22c=0, P44=0, P49=0 |

**Dutch needs NO further work** until dialogue enrichment uplift (currently 73%, target 90%+) or A1-A2 retroactive standards pass.

### DONE (German A1-B2 = Third Gold Standard)
German is PRODUCTION-READY. Built from scratch in D103:

| Milestone | Decision | Status |
|-----------|----------|--------|
| Foundations (knowledge + playthrough + gate quiz) | D103 | COMPLETE |
| A1 curriculum (U1-U8) | D103 | COMPLETE |
| A2 curriculum (U9-U16) | D103 | COMPLETE |
| B1 curriculum (U17-U24) | D103 | COMPLETE |
| B2 curriculum (U25-U30) | D103 | COMPLETE |
| Quality audit (P48/P22c/P49/density) | D103 | PASS |
| Dialogue enrichment | D103 | 1,100/1,100 (100%) |
| Post-build validation fix | D104 | 3 undefined array elements, 3 missing MC ans, unit ordering |

**German needs NO further work** until D92-style deep audit or C1 curriculum planning.

### DONE (French A1-B2 = Fourth Gold Standard)
French is PRODUCTION-READY. Built from scratch in D105:

| Milestone | Decision | Status |
|-----------|----------|--------|
| LANG_BLUEPRINT["fr"] | D105 | COMPLETE |
| Foundations (knowledge + playthrough + gate quiz) | D105 | COMPLETE |
| A1 curriculum (U1-U8) | D105 | COMPLETE |
| A2 curriculum (U9-U16) | D105 | COMPLETE |
| B1 curriculum (U17-U24) | D105 | COMPLETE |
| B2 curriculum (U25-U30) | D105 | COMPLETE |
| Quality scan (P48/P22c/P49/density/board:true) | D105 | PASS |
| Dialogue enrichment | D105 | 883/883 (100%) |
| Agent model escalation protocol | D106 | Opus 4.6 mandatory for content agents |

**French needs NO further work** until D92-style deep quality audit or C1 curriculum planning.

### NEXT: Spanish A1-B2 Build

#### What EXISTS (infrastructure ready, DO NOT rebuild):
| Component | File | Lines | Status |
|-----------|------|-------|--------|
| LANGUAGES entry | `src/data/metadata.js` | ~137 | COMPLETE: code:"es", name:"Spanish", flag:"🇪🇸", native:"Español", greeting, welcomeBack |
| BASE_LANGUAGES | `src/data/metadata.js` | ~149 | COMPLETE: Spanish as available source language |
| LANG_META["es"] | `src/data/metadata.js` | ~301 | COMPLETE: scriptType:"latin", framework:"CEFR", ttsLocale:"es-ES", specialRules:["ñ","inverted_punctuation","gendered_nouns","ser_estar","subjunctive"] |
| LANG_BLUEPRINT["es"] | `src/data/metadata.js` | N/A | **MISSING** — must be built before content generation |
| CULTURE_PACKS["es"] | `src/data/metadata.js` | N/A | **MISSING** — must be built |
| ARTICLE_SYSTEMS["es"] | `src/data/vocabulary.js` | N/A | **MISSING** — must be built (el=masculine/blue, la=feminine/coral) |
| FOUNDATIONS_BY_LANG["es"] | `src/data/foundations.js` | ~1456 | PARTIAL: 1 section (alphabet grid with 27 letters + Ñ). Needs expansion to 4-6 sections. |
| FK_PLAYTHROUGH["es"] | `src/data/foundations.js` | ~2583 | EMPTY SHELL: `{name:"Spanish Foundations Play",icon:"🇪🇸",blueprint:"latin_simple",stages:[]}` |
| FK_GATE_QUIZ["es"] | `src/data/foundations.js` | N/A | **MISSING** — must be built |
| FK_SCHEMA_MAP | `src/data/metadata.js` | N/A | Needs "es":"latin" entry |
| VOCAB pilot | `src/data/vocabulary.js` | N/A | NO Spanish lexemes. Expand as units are built. |
| Import/spread | `src/lingoverse.jsx` | N/A | NOT SET UP — needs new import + UNITS spread update |

#### What MUST BE BUILT from scratch:
| Component | File | Action |
|-----------|------|--------|
| LANG_BLUEPRINT["es"] | `src/data/metadata.js` | Build linguistic DNA: 2-gender system (el/la), ser vs estar, subjunctive mood, inverted punctuation (¿¡), Ñ, verb conjugation (3 groups: -ar/-er/-ir + extensive irregulars including stem-changing), formal/informal (tú/usted/vosotros/ustedes), regional variation awareness (Spain vs Latin America). Follow fr/de/nl blueprint format. |
| CULTURE_PACKS["es"] | `src/data/metadata.js` | Build cultural data: food (paella, tapas, tortilla, churros, gazpacho), customs (siesta, sobremesa, two surnames, late dinners), places (Madrid, Barcelona, Sevilla, México), situations, politeness notes, taboos. |
| ARTICLE_SYSTEMS["es"] | `src/data/vocabulary.js` | Build: el (masculine, blue), la (feminine, coral). Detect function must handle el/la/los/las and the masculine exception (el agua, el águila). |
| FOUNDATIONS_BY_LANG["es"] expansion | `src/data/foundations.js` | Expand from 1 section to 5-6 sections: (1) Alphabet + Ñ, (2) Vowels (5 pure vowels, diphthongs), (3) Consonants (RR trill, J/G, C/Z, LL, H silent), (4) Accent marks + stress rules, (5) Verb group preview (-ar/-er/-ir), (6) Grammar awareness (gender, ser/estar). Target: ~25 items. |
| FK_PLAYTHROUGH["es"] | `src/data/foundations.js` | Build interactive playthrough: ~12-15 lessons. Spanish pronunciation is very regular (nearly phonetic spelling), so foundations can be shorter than French/German. Focus: Ñ, RR trill, J, accent marks, stress rules, inverted punctuation. |
| FK_GATE_QUIZ["es"] | `src/data/foundations.js` | Build pass/fail gate quiz. 5 tasks, ~35 items. |
| Spanish units (A1-B2) | `src/data/units-spanish.js` | NEW FILE. ~28-30 units, ~224-240 lessons, ~4,500+ steps. |

#### Unit Structure (MUST follow this format):
```javascript
{n:1,lang:"es",track:"v1",title:"¡Hola!",sub:"Greetings & Goodbyes",icon:"👋",level:"A1.1",color:"#7B5EE8",lessons:[
  {id:"esp1l1",title:"¡Buenos días!",icon:"👋",xp:15,board:true,steps:[
    {type:"intro",title:"¡Buenos días!",desc:"...",goals:[...]},
    {type:"teach",kind:"word",nl:"Hola",en:"Hello",phonetic:"OH-la",example:"A: ¡Hola!\nB: ¡Hola! ¿Qué tal?",exampleEn:"A: Hello!\nB: Hello! How are you?",note:"Universal Spanish greeting. Works any time of day."},
    // ... 18+ steps per lesson (P43)
  ]},
]}
```
**CRITICAL fields**: `track:"v1"`, `color:"#7B5EE8"`, `board:true` on every lesson, `lang:"es"`, lesson IDs as `esp{N}l{N}`.
**NOTE**: The `nl` field is used for the TARGET language word (Spanish), NOT literally "Nederlands". This is the engine convention across all languages.

#### Spanish Curriculum Plan (~28-30 units):

**A1 (Units 1-8): Survival Spanish** — DELE A1 / Instituto Cervantes reference
- U1: Greetings, goodbyes, tú/usted distinction, essential politeness (por favor, gracias)
- U2: Self-introduction, nationality, languages, numbers 0-20, ser + estar basics
- U3: Family, possessives (mi/tu/su/nuestro), descriptions with ser + adjectives
- U4: Food & drink, en el restaurante, articles (el/la/los/las/un/una/unos/unas), gustar
- U5: Daily routine, time, reflexive verbs (levantarse, acostarse), -ar verbs present
- U6: Home & rooms, furniture, hay, prepositions of place, -er/-ir verbs present
- U7: Directions, transport, ir + a, venir de, imperative (tú form)
- U8: Shopping, clothing, colors, numbers to 1000, demonstratives (este/ese/aquel)

**A2 (Units 9-16): Expanding** — DELE A2 reference
- U9: Pretérito indefinido (regular), time expressions (ayer, la semana pasada)
- U10: Pretérito indefinido (irregular: ser/ir, tener, hacer, estar, poder, poner, decir)
- U11: Pretérito imperfecto: formation, usage (descriptions, habits, ongoing past)
- U12: Indefinido vs imperfecto (the critical distinction), storytelling
- U13: Object pronouns (lo/la/le/les, me/te/nos), pronoun placement, a personal
- U14: Future simple + ir + a + infinitivo, plans and predictions
- U15: Comparatives & superlatives, adjective agreement (gender + number), placement
- U16: Conditional (me gustaría, si + imperfecto), polite requests, hypotheticals

**B1 (Units 17-24): Independent** — DELE B1 reference
- U17: Presente de subjuntivo introduction (quiero que, es necesario que), regular verbs
- U18: Subjuntivo with irregular verbs (ser, estar, ir, haber, saber, dar)
- U19: Relative pronouns (que, quien, donde, cual), complex sentences
- U20: Pretérito pluscuamperfecto, sequencing past events, reported speech basics
- U21: Passive voice (ser + past participle), se pasiva, news language
- U22: Gerundio (estar + gerundio), progressive tenses, cause/manner
- U23: Advanced connectors (aunque + subjuntivo, a pesar de, sin embargo, no obstante)
- U24: Spanish work culture, formal register, carta de presentación

**B2 (Units 25-30): Proficient** — DELE B2 / SIELE reference
- U25: Subjuntivo imperfecto + advanced triggers (para que, antes de que, a menos que)
- U26: Condicional compuesto, regrets, reproaches (si + pluscuamperfecto)
- U27: Nominalization, academic register, formal writing
- U28: Discourse markers, essay structure, argumentation (por un lado/por otro lado)
- U29: Refranes, modismos, figurative language, literary Spanish
- U30: DELE B2/SIELE prep, comprehensive review, C1 preview

#### Spanish-Specific Teaching Priorities:
1. **el/la from day one.** Every noun teach card MUST include the article. Use color coding: el=blue (masculine), la=coral (feminine). Build ARTICLE_SYSTEMS["es"] in vocabulary.js.
2. **Ser vs estar is THE fundamental challenge.** Both mean "to be" but are NOT interchangeable. Introduce both in A1 U2, dedicate examples throughout. This confusion persists into C1.
3. **Verb conjugation is massive.** Spanish has 3 groups (-ar, -er, -ir) plus extensive stem-changing verbs (e→ie, o→ue, e→i) and irregulars. Introduce -ar in A1, -er/-ir in A1-A2, stem-changers progressively.
4. **Spanish pronunciation is very regular.** Unlike French, spelling is nearly phonetic. Foundations can be shorter. Focus on: RR trill, J/G, Ñ, accent marks, stress rules.
5. **Indefinido vs imperfecto is THE A2 challenge.** Same as French PC vs imparfait. Dedicate U12 to the distinction.
6. **Subjuntivo needs gradual introduction.** Even more important than in French. Start with common triggers in B1, expand in B2. Spanish uses subjunctive far more than French.
7. **Cognates with English are very abundant** (~30-40% overlap via Latin roots). Flag cognates AND false friends (embarazada ≠ embarrassed, etc.) with `cognate` field.
8. **Regional variation matters.** Spain (vosotros, z=/θ/) vs Latin America (ustedes, z=/s/). Default to neutral Latin American pronunciation, note Spain differences. Don't teach vosotros actively until B1+.
9. **Inverted punctuation (¿¡) from day one.** This is non-optional and uniquely Spanish.
10. **Gustar-type verbs early.** The "backwards" construction (me gusta, te gusta) is alien to English speakers. Introduce in A1 U4 with food.

#### Build Workflow (MANDATORY):
Follow the French D105 playbook with D106 agent model requirements:

1. **Use Opus 4.6 agents for ALL content generation** (Rule 11, D106). Sonnet for validation only.
2. **Build LANG_BLUEPRINT first** — Spanish has no blueprint yet.
3. **Build CULTURE_PACKS["es"]** — Spanish has no culture pack yet.
4. **Build ARTICLE_SYSTEMS["es"]** — Spanish has no article system yet.
5. **Expand FOUNDATIONS_BY_LANG["es"]** — Currently 1 section. Expand to 5-6 sections/~25 items.
6. **Build FK_PLAYTHROUGH["es"]** — Fill the empty stages array. ~12-15 lessons.
7. **Build FK_GATE_QUIZ["es"]** — 5 tasks, ~35 items.
8. **Create `src/data/units-spanish.js`** as a new file immediately. Do NOT build in `units-other.js`.
9. **Update imports in `src/lingoverse.jsx`**: Add `import spanishUnits from './data/units-spanish.js';` and add `...spanishUnits` to UNITS spread.
10. **Build units level by level** (A1 → A2 → B1 → B2), never skip ahead.
11. **Rule 7: Enforce density PER LESSON as you build** (18-20+ steps). NEVER batch-build thin skeletons.
12. **Rule 8: Quality gate after each level.** Run P8/P34/P44/P48/P49 scan after completing each level.
13. **Rule 9: Sequential content agents + parallel validators.** One content agent per unit batch, validator after each.
14. **Rule 10 (D104): Post-build structural validation.** Run validation script after ALL units built.
15. **Build with dialogues from day one** (A:/B: format on teach cards).
16. **Commit and push after each unit is complete.**

#### Session Execution Plan (for the next agent):
1. Build LANG_BLUEPRINT["es"] in `src/data/metadata.js`
2. Build CULTURE_PACKS["es"] in `src/data/metadata.js`
3. Build ARTICLE_SYSTEMS["es"] in `src/data/vocabulary.js`
4. Add FK_SCHEMA_MAP entry: es:"latin" in `src/data/metadata.js`
5. Expand FOUNDATIONS_BY_LANG["es"] in `src/data/foundations.js` (1 section → 5-6 sections)
6. Build FK_PLAYTHROUGH["es"] stages in `src/data/foundations.js`
7. Build FK_GATE_QUIZ["es"] in `src/data/foundations.js`
8. Create `src/data/units-spanish.js` with empty export
9. Update imports in `src/lingoverse.jsx`
10. Build A1 units (U1-U8) with Opus 4.6 agents, quality audit after
11. Build A2 units (U9-U16) with Opus 4.6 agents, quality audit after
12. Build B1 units (U17-U24) with Opus 4.6 agents, quality audit after
13. Build B2 units (U25-U30) with Opus 4.6 agents, quality audit after
14. **Run post-build structural validation** (Rule 10, D104)
15. Final cross-level validation sweep
16. Update CLAUDE.md with Spanish build status

### AFTER Spanish (Priority Order)

1. **Arabic A1-B2 Build** (when ready)
   - Has skeleton units + LANG_BLUEPRINT + foundations knowledge grid
   - Needs: FK_PLAYTHROUGH, FK_GATE_QUIZ, full curriculum rebuild

2. **Deep Quality Audits** (D92-style) for German and French
   - Both passed quality scans but have not had the multi-round deep audit treatment
   - Korean (D92/D93) and Dutch (D102) set the audit standard

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
13. **Post-build structural validation is mandatory.** After building a complete curriculum, run the validation script to catch: (a) undefined/null array elements from stray commas, (b) missing required fields (especially MC `ans`), (c) unit ordering (must be sequential by `n`), (d) P48 multi-blank fb violations. The German D103 build shipped with 3 undefined array elements + 3 missing MC ans fields + scrambled unit order, causing a white screen crash. This class of error is invisible to build tools (Vite compiles fine) but crashes React at runtime. (D104, Rule 10)
14. **Use Opus 4.6 for content generation, always.** Sonnet agents go stale, become unresponsive, and fail to complete large content tasks. Content generation (building units, teach cards, quiz steps) MUST use `model:"opus"`. Sonnet is fine for validation, search, and small edits. Do not waste time retrying failed Sonnet agents — escalate to Opus immediately. (D106, Rule 11)
