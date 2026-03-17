# CLAUDE.md — LingoVerse Project Instructions

> Every Claude Code session MUST read this file before writing any code or content.
> This file reflects the actual codebase as of March 2026.

---

## Project Overview

LingoVerse is a self-contained multilingual language learning platform built with React 18 and Vite. The codebase is split into 7 source files (1 engine + 6 data modules). Vite bundles them into a single optimized output for deployment.

**Vision**: ANY source language to ANY target language. Every native tongue of every registered country. The architecture must always be built strategically with scale in mind. Nothing should ever be hardcoded for one language pair.

**Current state**: All 5 launch languages have A1-B2 content built and structurally audited. HOWEVER: no language has been verified for CERTIFICATION-GRADE vocabulary completeness (P55), grammar completeness (P57), or communicative function coverage (P58). D112 audit is the immediate next priority. Korean (30 units, ~311 lessons). Dutch (30 v2 units, 244 lessons). German (30 units, 240 lessons). French (30 units, 240 lessons). Spanish (30 units, 240 lessons). Arabic has early skeletons (5 units, below density standard). Unit counts for ALL languages are subject to expansion based on concept cataloguing (P56).

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
| `units-german.js` | ~7,407 | All 30 German units (A1-B2, v1) |
| `units-french.js` | ~1.3MB | All 30 French units (A1-B2, v1, minified) |
| `units-spanish.js` | ~5,262 | All 30 Spanish units (A1-B2, v1) |
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
| P51 | CEFR Distribution Validation | Every audit must validate unit-to-CEFR-level mapping. B1+B2 >= A1+A2. |
| P52 | Strict Teach-Before-Use | "Taught" = own dedicated teach card. Example-only != taught. (P34 tightening) |
| P53 | Audit Completeness Checklist | 9-point checklist. Missing any = audit INCOMPLETE. |
| P54 | Anti-Cramming Doctrine | Content serves the LANGUAGE, not a spreadsheet. Never cram, never pad. |
| P55 | Vocabulary Completeness | ALL official exam vocabulary must have dedicated teach cards. Zero gaps. Certification-grade. |
| P56 | Concept-Driven Unit Sizing | Unit count determined by concept catalogue, not templates. FSI difficulty matters. |
| P57 | Zero Grammar Gaps | ALL official exam grammar constructs taught, practiced (3+ quiz steps), and recycled. |
| P58 | Communicative Functions | ALL CEFR communicative functions at each level covered with practice lessons. |

### Decision Log Reference
The full Decision Log with D1-D112 is in `docs/DECISION_LOG.md`. Key recent decisions:
- **D99**: Dutch B1 density uplift + quick fixes
- **D100**: Korean dialogue enrichment (Rule 9 workflow, 847/1132 cards)
- **D101**: Dutch quality uplift to Korean standard (B2 build, A1-B1 polish)
- **D102**: Dutch B2 quality audit (10 rounds, ~255 P8 fixes, 5 P34 fixes, de/het audit PASS)
- **D109**: Cross-language audit (RETROACTIVELY INCOMPLETE per D110 — missed CEFR distribution)
- **D110**: CEFR distribution audit + anti-cramming doctrine + P34 deep enforcement + P51-P54 + Rule 13
- **D111**: Partial structural audit (sub-level label fixes, automated scans). INCOMPLETE: did not verify vocabulary/grammar completeness.
- **D112**: Certification-grade audit mandate. P55-P58 created. Full vocabulary completeness against official exam lists. Zero tolerance for gaps.

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

### CEFR Distribution Validation (P51) — NON-NEGOTIABLE:
- **P51**: Every audit and every build MUST validate the unit-to-CEFR-level mapping. Specifically:
  - The `level` field on every unit must be checked against the language's intended distribution AND compared with gold standard languages (Korean: 6-4-10-10, Dutch: 6-4-10-10).
  - B1+B2 combined must NEVER have fewer units than A1+A2 combined. Advanced levels are where real learning depth lives. Front-loading beginner content while starving advanced content is pedagogically backwards.
  - Distribution must be justified per language based on that language's actual complexity at each CEFR level, not mechanically applied from a template.
  - The sub-level labels (A1.1, A1.2, B1.1, etc.) must be consistent within each language. No gaps, no jumps (e.g., A1.1 -> A1.4 skipping A1.2/A1.3 is a red flag).
  - **D110 flaw**: German (8-8-7-6), French (8-8-8-6), and Spanish (8-8-8-6) all violate this. The gold standards (Korean/Dutch) use 6-4-10-10. The newer languages have 16 A-level units and only 12-13 B-level units. This was missed by D109.

### Strict Teach-Before-Use (P52) — NON-NEGOTIABLE:
- **P52**: Tightening of P34. "Taught" means the word has its OWN dedicated teach card with target-language and source-language fields (currently named `nl` and `en` for legacy reasons — see scaling blocker #6). Specifically:
  - A word appearing ONLY in another card's `example` or `exampleEn` field does NOT count as taught vocabulary. The learner has no card to review, no explicit exposure.
  - A word mentioned ONLY in a `deepDive` (optional advanced section) does NOT count as taught vocabulary.
  - A word used ONLY in a `tip` text does NOT count as taught vocabulary.
  - Every single word used in any quiz step (mc, fb, drag_fill, tr, match) must trace back to a prior dedicated teach card in the same unit or an earlier unit.
  - If a teach card's example sentence uses a word that hasn't been taught yet, that word MUST be explained in the teach card's `note` or `deepDive` field. Unexplained words in examples are invisible vocabulary gaps.
  - The P37 cognate exception remains narrow: exempt ONLY if (a) transparently cognate, (b) only in examples not quizzes, (c) single word.

### Audit Completeness Checklist (P53) — NON-NEGOTIABLE:
- **P53**: Every cross-language audit MUST check ALL of the following. Missing ANY = audit INCOMPLETE:
  1. CEFR level distribution per unit (P51)
  2. P8 all 5 leak types (visual, script, hint, pattern, position)
  3. P52 strict teach-before-use with grep verification
  4. P48 step type correctness (fb = single blank, drag_fill = multi-blank)
  5. P49 no CEFR labels in learner-facing content
  6. P22c no em-dashes in any content string
  7. Density per lesson (P43 minimums met)
  8. board:true on every lesson
  9. Sub-level label consistency (no gaps, no jumps)
  - An audit that passes 8 of 9 checks is NOT a PASS. All 9 must pass.

### Anti-Cramming Doctrine (P54) — THE MOST IMPORTANT CONTENT RULE:
- **P54**: Content must NEVER be crammed to fit a predetermined unit count, lesson count, or step count. The curriculum exists to serve the LANGUAGE, not a spreadsheet. This is the foundational principle of LingoVerse's polyglot vision. Specifically:
  - If a language needs 50 units and 400 lessons to properly teach A1-B2, it gets 50 units and 400 lessons. If it only needs 10 units, it gets 10 units.
  - The number of units per CEFR level is determined by the CONCEPTS that need to be taught at that level, compared against established language learning models (textbooks, official exam frameworks, major teaching platforms). NOT by a template copied from another language.
  - Every grammar construct deserves the space it needs. A concept that gets a full unit in a textbook does not get squeezed into one lesson. A concept that's a single lesson in a textbook does not get inflated into a unit.
  - Agents must approach each language open-mindedly: FIRST catalogue ALL concepts that CEFR requires at each level for this specific language, THEN determine how many units and lessons are needed to teach them properly, THEN build. Never start with "30 units, 8 lessons each" and work backwards.
  - 18 steps is a FLOOR, not a target. Complex grammar (German cases, French subjunctive, Spanish ser/estar) may need 25-30 steps. Simple vocabulary may need exactly 18. Build what the content needs.
  - NEVER add filler to reach a count. NEVER compress to fit a quota. The learner's comprehension is the only metric.
  - Every language is different. Every language deserves its own lesson-count, its own unit-count, its own breadth and depth. Source language proximity matters: a Dutch speaker learning German needs different pacing than an Arabic speaker learning German.
  - **This rule exists because**: German, French, and Spanish were all built with a mechanical 8-8-8-6 or 8-8-7-6 template that front-loaded A-level content and compressed B-level content. The result: 16 units on beginner material that could fit in 10, and only 6 units on advanced material that needs 10. The owner caught this by visual inspection. The agents did not.

### Vocabulary Completeness Doctrine (P55) — NON-NEGOTIABLE:
- **P55**: Every language must achieve CERTIFICATION-GRADE vocabulary completeness. A learner who completes LingoVerse A1-B2 must be able to pass the official certification exam (TOPIK/NT2/Goethe/DELF/DELE). Specifically:
  - Every word on the official vocabulary list for the certification exam at each CEFR level MUST have a dedicated teach card. Not "most words." ALL of them.
  - Official vocabulary sources are MANDATORY cross-references:
    - **Korean**: TOPIK vocabulary list (6,000+ words for TOPIK II), National Institute of Korean Language frequency lists
    - **Dutch**: NT2 Basiswoordenlijst (~4,000 words), Inburgeringsexamen word lists
    - **German**: Goethe-Institut Wortliste (A1: ~650, A2: ~1,300, B1: ~2,400, B2: ~4,000+)
    - **French**: DELF vocabulary lists by level, Referentiel de l'Alliance Francaise
    - **Spanish**: Plan Curricular del Instituto Cervantes vocabulary inventory (A1-B2)
  - Vocabulary domains MUST be complete at each level. At A1: ALL greetings, ALL numbers (0-1000+), ALL days/months/seasons, ALL basic colors, COMPLETE family tree, COMPLETE body parts, 30+ food/drink items, 15+ clothing items, ALL rooms + 5+ items per room, ALL directions, ALL weather terms, 10+ emotions, 15+ daily routine verbs, 20+ adjective pairs, ALL time expressions, ALL question words.
  - Every synonym on the official list gets its own teach card. If the exam lists both formal and informal equivalents, BOTH are taught.
  - Function words (prepositions, conjunctions, articles, pronouns, particles) at each CEFR level ALL need dedicated teach cards.
  - **Verification**: Automated script compares official word list against extracted teach card `nl:` fields. Any word on the official list without a teach card is a GAP. Zero gaps = PASS.
  - **This rule exists because**: No previous audit ever verified actual vocabulary against official exam lists. The question was always "does content exist?" — never "is EVERY required word taught?"

### Concept-Driven Unit Sizing (P56) — NON-NEGOTIABLE:
- **P56**: The number of units per CEFR level is determined by cataloguing concepts, NOT by applying any template. This SUPERSEDES any previous distribution pattern (including the 6-4-10-10 pattern). Specifically:
  - Process: (1) Catalogue ALL grammar constructs at this level from official exams, (2) Catalogue ALL vocabulary domains, (3) Catalogue ALL communicative functions, (4) Group into natural teaching units, (5) Estimate lessons per unit, (6) The resulting count IS the count.
  - FSI language difficulty MUST affect unit count:
    - Category I (Dutch, Spanish, French): ~600-750 class hours to B2. Simpler morphology, cognate-rich.
    - Category II (German): ~900 class hours. Case system, gender agreement, word order complexity.
    - Category IV-V (Korean, Arabic, Japanese, Chinese): ~2,200 class hours. Non-Latin script, fundamentally different grammar, honorific systems.
  - **A Category V language with the same unit count as a Category I language is AUTOMATICALLY SUSPICIOUS.** Korean having 30 units while Spanish also has 30 units needs explicit justification. If the justification is "we used the same template" — that's a P54 violation.
  - Korean A2 with 4 units is flagged: particle deepening, past/future tense, progressive, counters, connectors, honorific expansion, Sino-Korean layer, verb conjugation irregulars — this is substantial content for 4 units.
  - **This rule exists because**: All 5 languages ended up with ~30 units despite vastly different complexity. Korean (2,200 hours) and Spanish (600 hours) should NOT have the same unit count by default.

### Zero Grammar Gaps (P57) — NON-NEGOTIABLE:
- **P57**: Every grammar construct on official certification exam lists MUST be explicitly taught, practiced, and recycled. Specifically:
  - "Taught" = dedicated teach card or tip card explaining the rule
  - "Practiced" = at least 3 quiz steps (mc, fb, drag_fill, or tr) testing this construct
  - "Recycled" = appears in at least 2 later lessons at the same or higher level
  - Official grammar sources per language:
    - **Korean**: TOPIK grammar patterns list (300+ for TOPIK II), Korean Grammar in Use series
    - **Dutch**: NT2 grammar requirements, Basisgrammatica, Dutch: An Essential Grammar
    - **German**: Goethe-Institut grammar inventory by level, Dreyer & Schmitt
    - **French**: DELF grammar inventory by level, Grammaire progressive du francais
    - **Spanish**: PCIC grammar inventory (Gramatica A1-B2), Nueva gramatica
  - Every audit must produce a COMPLETE grammar inventory table mapping each official construct to its unit, teach card ID, and quiz step count. Any construct with zero quiz steps = GAP.
  - **This rule exists because**: Previous audits checked "does major grammar exist?" but never verified exhaustive coverage against official lists. Constructs that are "minor" in one reference may be critical on the exam.

### Communicative Functions Coverage (P58) — NON-NEGOTIABLE:
- **P58**: CEFR defines communicative functions — what learners can DO with the language. These are testable on exams and must all be covered. Specifically:
  - A1 functions (ALL languages): introduce self/others, ask/answer personal questions, describe people/places/things, express likes/dislikes, ask/give directions, order food, make purchases, tell time, describe daily routine, make appointments, write simple messages, fill in forms.
  - A2 functions: describe past events, express plans, give/follow instructions, make comparisons, express agreement/disagreement, describe health issues, handle basic travel, write short informal letters.
  - B1 functions: express/justify opinions, narrate stories, handle most travel situations, write formal/informal letters, summarize information, express conditions/hypotheses, give advice.
  - B2 functions: present detailed arguments, negotiate/persuade, speculate about causes/consequences, discuss abstract topics, write reports/essays, adapt register, handle professional interactions, discuss current events.
  - Each function must map to specific lessons with practice. A function without practice lessons = GAP.
  - **This rule exists because**: Grammar and vocabulary coverage alone do not guarantee communicative competence. A learner who knows all grammar but cannot "express opinions" (B1 function) will fail the speaking/writing sections of official exams.

### Expanded Audit Completeness Checklist (P53 update) — NOW 15 ITEMS:
- **P53 (updated)**: The audit completeness checklist is expanded from 9 to 15 items to include certification-grade requirements:
  1. CEFR level distribution per unit (P51)
  2. P8 all 5 leak types (20+ samples per level per language)
  3. P52 strict teach-before-use (FULL automated verification, not sampling)
  4. P48 step type correctness
  5. P49 no CEFR labels in learner-facing content
  6. P22c no em-dashes
  7. Density per lesson (P43 minimums)
  8. board:true on every lesson
  9. Sub-level label consistency
  10. P55 vocabulary completeness (ALL official exam vocabulary as teach cards)
  11. P57 grammar completeness (ALL official exam grammar taught and practiced)
  12. P58 communicative functions coverage
  13. Synonym coverage from official lists
  14. P56 unit count adequacy (concept-driven, not template)
  15. Exam simulation readiness (learner could pass official exam using only LingoVerse)
  - ALL 15 items must PASS. Missing ANY = audit INCOMPLETE.

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
- **CROSS-LANGUAGE AUDIT (D109, 2026-03-17)**: 311 P8 hint-reveals fixed (54 mc + 134 fb + 123 additional). 1 critical mc ans mismatch fixed (v2u25l7). CEFR grammar 68/69 PASS (only B2 dienen te missing: LOW priority). Dialogue coverage: 97.7% (1,080/1,105).
- **Dutch is PRODUCTION-READY.** A1-B2 fully built, polished (D101), audited (D102), and cross-audited (D109).
- **NEXT ACTION**: Dialogue enrichment uplift (97.7% → 100%) or A1-A2 retroactive standards pass when prioritized.

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
- **CROSS-LANGUAGE AUDIT (D109, 2026-03-17)**: Full 5-language audit. 178 em-dashes fixed, 3 critical mc ans mismatches fixed (kou4l8, kou9l8), 3 P49 CEFR labels removed, 12 severe P8 hint-reveals rewritten. CEFR grammar coverage: 64/64 FULL PASS.
- **Korean is PRODUCTION-READY.** A1-B2 fully built, audited, density-uplifted, P48/P49 clean, dialogue-enriched, and cross-audited (D109). Next: C1 curriculum when Dutch catches up.

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
- **CROSS-LANGUAGE AUDIT (D109, 2026-03-17)**: 157 P8 hint-reveals fixed. CEFR grammar PASS with 1 moderate gap (A2 imperative mood: no dedicated lesson). P22c=0, P49=0.
- **CEFR DISTRIBUTION FLAG (D110)**: German has 8-8-7-6 distribution (A1-A2-B1-B2). Gold standard is 6-4-10-10. B-level content is compressed. Needs relabeling or restructuring in D111 audit.
- **German is PRODUCTION-READY with caveats.** A1-B2 fully built, cross-audited (D109), but CEFR distribution flagged (D110). Next: D111 structural + deep audit.
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
- **CROSS-LANGUAGE AUDIT (D109, 2026-03-17)**: 15 P8 hint-reveals fixed, 2 P49 CEFR labels removed. CEFR grammar PASS with minor vocab gaps (weather, months, health). verb_table underused (5 across 240 lessons).
- **CEFR DISTRIBUTION FLAG (D110)**: French has 8-8-8-6 distribution (A1-A2-B1-B2). Gold standard is 6-4-10-10. B2 is compressed (6 units vs 10). Needs relabeling or restructuring in D111 audit.
- **French is PRODUCTION-READY with caveats.** A1-B2 fully built, cross-audited (D109), but CEFR distribution flagged (D110). Next: D111 structural + deep audit.
### Spanish:
- **A1-B2 COMPLETE (D108, 2026-03-17)**: Full build using D107 temp-file agent workflow + D106 Opus 4.6 agents.
  - Infrastructure: COMPLETE (LANG_BLUEPRINT, CULTURE_PACKS, ARTICLE_SYSTEMS, FOUNDATIONS, FK_PLAYTHROUGH, FK_GATE_QUIZ)
  - 30 units (U1-U30), 240 lessons, 4,363 steps, avg 18.2 steps/lesson, all 18+
  - A1 (U1-U8): Greetings, family, numbers/days/colors, food, daily routine, home, directions, shopping
  - A2 (U9-U16): Preterito indefinido (regular + irregular), imperfecto, indefinido vs imperfecto, object pronouns, future simple, comparatives/superlatives, conditional
  - B1 (U17-U24): Subjuntivo presente (regular + irregular), relative pronouns, pluscuamperfecto/reported speech, passive voice, gerundio/progressive, advanced connectors, work culture
  - B2 (U25-U30): Subjuntivo imperfecto, condicional compuesto, nominalization, discourse markers, proverbs/idioms, DELE B2/SIELE prep + C1 preview
  - All teach cards have A:/B: dialogues. el/la article colors throughout (el=blue, la=coral).
  - Quality validation PASS: P48=0, P22c=0, P49=0, board:true=240/240, unit ordering=PASS, density=all 18+
  - Track: v1. All purple themed (#7B5EE8). Lesson IDs: esp{N}l{N}.
- **CROSS-LANGUAGE AUDIT (D109, 2026-03-17)**: 23 P8 hint-reveals fixed, 1 P49 CEFR label removed. CEFR grammar PASS with 2 vocab gaps (A1 body parts: MODERATE, A2 animals: LOW).
- **CEFR DISTRIBUTION FLAG (D110)**: Spanish has 8-8-8-6 distribution (A1-A2-B1-B2). Gold standard is 6-4-10-10. B2 is compressed (6 units vs 10). Needs relabeling or restructuring in D111 audit.
- **Spanish is PRODUCTION-READY with caveats.** A1-B2 fully built, cross-audited (D109), but CEFR distribution flagged (D110). Next: D111 structural + deep audit.

### Infrastructure Readiness:
- LANGUAGES array: 11 languages (fr, nl, en, de, ar, ro, es, ko, zh, ja, ru)
- LANG_META: All 11 complete
- LANG_BLUEPRINT: nl, de, ar, fr, es populated.
- SCRIPT_BLUEPRINTS: 7 scripts defined (hangul, kana, arabic, hanzi, cyrillic, latin_complex, latin_simple)

---

## Product Roadmap

### Phase 1: Content (Current)
5 target languages to A1-B2, from English (primary source) and Arabic (second source):
1. **Korean** - A1-B2 PRODUCTION-READY. Fully audited (D92+D93), density-uplifted (D96), P48/P49 clean (D98), dialogue-enriched (D100). THE GOLD STANDARD. Next: C1 when Dutch catches up.
2. **Dutch** - A1-B2 PRODUCTION-READY. Fully built (D101), audited (D102, 10 rounds). 30 units, 244 lessons, 5,446 steps. THE SECOND GOLD STANDARD.
3. **German** - A1-B2 COMPLETE (D103). 30 units, 240 lessons, 4,518 steps. Foundations + gate quiz built. 100% dialogue coverage. Quality audit PASS.
4. **French** - A1-B2 COMPLETE (D105). 30 units, 240 lessons, 4,380 steps. Foundations + gate quiz built. 100% dialogue coverage. Quality scan PASS.
5. **Spanish** - A1-B2 COMPLETE (D108). 30 units, 240 lessons, 4,363 steps. Foundations + gate quiz built. A:/B: dialogues on all teach cards. Quality validation PASS.

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
2. ~~LANG_BLUEPRINT incomplete~~ RESOLVED: All 5 launch languages have LANG_BLUEPRINT
3. UI strings mostly hardcoded English - TK localization layer deferred (Manifesto P9)
4. No multi-source lesson schema - units assume English source. Onboarding "I speak" screen removed (D83), must re-add when Arabic source is implemented.
5. RTL lesson card styling incomplete (foundations work, lesson engine doesn't)
6. **nl/en field naming** (D110): All teach cards across ALL languages use `nl` for target-language word and `en` for source-language translation. These are hardcoded Dutch-English vestiges. Future rename: `nl` -> `tgt` (or `target`), `en` -> `src` (or `source`). Thousands of occurrences across all units files + engine renderers. Own decision when multi-source architecture is built.
7. **CEFR distribution imbalance** (D110): German (8-8-7-6), French (8-8-8-6), Spanish (8-8-8-6) have front-loaded A-level distributions. ALL 5 languages need concept-driven re-evaluation (P56). Korean A2 (4 units for Category V language) also flagged.
8. **Vocabulary completeness NOT verified** (D112): No language has been verified against official exam vocabulary lists (TOPIK/NT2/Goethe/DELF/DELE). The number of teach cards per language is unknown relative to the number REQUIRED by certification exams. This is the #1 content blocker. See P55.
9. **Grammar completeness NOT verified** (D112): No language has a complete grammar inventory table mapping every official exam grammar construct to teach cards and quiz steps. See P57.

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

### Tier 3: Active build reference (current work in progress)
- **`docs/FULL_AUDIT_HANDOFF.md`** — Full curriculum audit handoff for all 5 languages. CEFR coverage, pipeline compliance, polyglot vision verification. Use this to continue the audit in a new session.

### Deleted (March 2026 cleanup)
All completed build docs deleted. Their content is fully captured in CLAUDE.md decisions and build status:
- ~~`docs/SPANISH_AGENT_PROMPT.md`~~ — Spanish build COMPLETE (D108). Format spec and workflow captured in CLAUDE.md Rule 12.
- ~~`docs/FRENCH_A1_B2_HANDOFF.md`~~ — French build COMPLETE (D105). Lessons learned captured in D106.
- ~~`docs/FRENCH_AGENT_PROMPT.md`~~ — French build COMPLETE (D105). Format spec captured in CLAUDE.md.
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

### Rule 12: Temp-File Agent Workflow for Curriculum Builds (D107)
When deploying sub-agents to build curriculum units, agents MUST write to temporary files, NOT directly to the main units file. The main session merges validated content into the target file.

1. **Agents write to temp files.** Each content agent writes its unit(s) to a dedicated temp file (e.g., `/tmp/esp-u7.js`). The agent exports a valid JavaScript array fragment containing one or more complete unit objects. The agent NEVER touches the main `units-{lang}.js` file.

2. **Temp file format.** The agent writes ONLY the unit object(s) as a JS array, wrapped in `module.exports = [...]`:
   ```javascript
   // /tmp/esp-u7.js
   module.exports = [
   {n:7,lang:"es",track:"v1",title:"...",sub:"...",icon:"...",level:"A1.4",color:"#7B5EE8",lessons:[
     {id:"esp7l1",title:"...",icon:"...",xp:15,board:true,steps:[...]},
     // ... 8 lessons, 18+ steps each
   ]}
   ];
   ```

3. **Agent self-validates before returning.** Each content agent runs the standard validation checks on its own temp file: step counts (18+), board:true, mc.ans, fb.a, P48, teach.nl/en. The agent reports PASS/FAIL with details.

4. **Main session validates and merges.** The main session:
   a. Reads the temp file and validates independently (never trust agent self-report alone)
   b. Inserts the unit content into the main `units-{lang}.js` file before the closing `];`
   c. Runs full-file validation (all units, not just the new one)
   d. Runs `npx vite build` to verify compilation
   e. Commits and pushes

5. **Two agents max in parallel.** Deploy at most 2 content agents simultaneously (e.g., U7 agent + U8 agent). Each writes to its own temp file. No merge conflicts possible since they don't touch the main file.

6. **Validation agent runs after merge.** After the main session merges both units, a validation agent (Sonnet-tier is fine) scans the full file for P8/P48/P49/P22c/density issues.

7. **NO worktree isolation for curriculum builds.** Worktrees branch from the latest commit, which may not have the current session's uncommitted work. This caused repeated failures in the Spanish D107 build where worktree agents couldn't find `units-spanish.js`. Always use temp files instead.

8. **Agent briefing template.** Every content agent MUST receive:
   - The exact unit number(s) to build
   - The curriculum plan for those units (from CLAUDE.md)
   - The complete format spec (unit structure, lesson structure, step types)
   - All pipeline rules (P8, P22c, P34, P43, P44, P48, P49)
   - Language-specific rules (articles, phonetics, grammar notes)
   - The temp file path to write to
   - A sample unit from the existing file for format reference (first 50 lines of the current units file)
   - The cumulative vocabulary context (what's been taught in prior units)

### Why Rule 12 Exists
In March 2026, the Spanish A1-B2 build (D107) attempted three different agent deployment strategies for curriculum content: (1) worktree-isolated agents that failed because worktrees branched from commits that predated the `units-spanish.js` file, (2) direct-write agents that went stale after reading thousands of lines but never writing, and (3) main-session manual writing that was too slow. The temp-file workflow solves all three problems: agents write to isolated temp files (no git conflicts, no worktree issues), the main session controls all merges (no stale agent writes), and agents can work in parallel on different temp files (fast). This pattern was identified as the correct approach during D107 and is now mandatory for all future curriculum builds.

### Rule 13: Full-Context Audit Agents (D110) — NON-NEGOTIABLE
Every audit agent MUST receive FULL pipeline context in its prompt. An agent that audits without complete rules produces the exact class of error D109 produced: checking details while missing structure.

1. **Every audit agent's prompt MUST include**: (a) the complete Pipeline Rules section from CLAUDE.md (P8 through P54, verbatim or summarized with all rule numbers), (b) the P53 audit completeness checklist (all 9 points), (c) the anti-cramming doctrine (P54), (d) the D110 CEFR distribution flaw as a cautionary example, (e) explicit instruction to validate CEFR distribution FIRST before any content-level checks.

2. **Audit agents must validate STRUCTURE before CONTENT.** The first thing any audit agent checks is: Are the units assigned to the correct CEFR levels? Is the distribution pedagogically sound? Does it match or have justified deviation from the gold standards? Only AFTER structural validation passes does the agent proceed to content-level checks (P8, P34/P52, P48, P49, etc.).

3. **Audit agents must cross-reference external standards.** For every language, the agent must compare the curriculum against established textbooks, official exam frameworks (TOPIK, DELE, DELF, Goethe, NT2), and major teaching platforms. The question is not "does this content exist?" but "does this content exist at the right level with the right depth compared to how real language courses teach it?"

4. **Deep P52 (teach-before-use) verification.** Agents must not just check "does a teach card exist somewhere" — they must verify that EVERY word in EVERY quiz step has a prior dedicated teach card. Sampling is not sufficient for P52. For a full audit, every quiz step must be checked. For spot-check audits, sample at least 20 quiz steps per unit.

5. **The agent's final report MUST include a P53 checklist with PASS/FAIL for each of the 9 items.** If any item is FAIL, the audit is INCOMPLETE. The agent must clearly state this.

### Why Rule 13 Exists
In March 2026, D109 deployed 12 audit agents across 5 languages. The agents checked P8 leaks, P22c em-dashes, P49 CEFR labels, and grammar coverage. They found and fixed 694 issues. But they completely missed that German, French, and Spanish had fundamentally wrong CEFR distributions (8-8-7-6 or 8-8-8-6 instead of the gold standard 6-4-10-10). The owner spotted this in 30 seconds by looking at the unit list. The agents spent hours on content details while missing structural fundamentals. Rule 13 ensures future audit agents check structure first, have full pipeline context, and never produce an audit report that's missing any of the P53 checklist items.

### Rule 14: Official Source Verification (D112) — NON-NEGOTIABLE
Every vocabulary or grammar claim in an audit MUST cite the official source. Uncited claims are REJECTED.

1. **Every vocabulary gap claim must include**: the official source name (e.g., "Goethe-Wortliste B1"), the specific word, and ideally the page/section reference. "I think this word is B1 level" is NOT evidence. "Goethe-Wortliste B1, Wortliste page 23: 'Erfahrung'" IS evidence.

2. **Every grammar coverage claim must include**: the official grammar inventory source, the specific construct name as listed in that source, and the CEFR level assigned by that source.

3. **Web sources are acceptable** when official PDFs are not freely available, but must be from authoritative sites: Instituto Cervantes, Goethe-Institut, CIEP/France Education International, TOPIK official, or established textbook publishers. Blog posts and forum opinions are NOT sources.

4. **When official lists are paywalled or unavailable**, use the best available proxy: textbook vocabulary indices, exam preparation book word lists, or multiple established teaching platform concordance. Document which proxy was used and why.

### Why Rule 14 Exists
Previous audits made claims like "CEFR grammar PASS" without ever consulting the official grammar inventory for the language. A grammar audit that does not reference the Goethe-Institut grammar inventory (for German) or the PCIC grammar inventory (for Spanish) is not an audit — it's guesswork. Rule 14 ensures every audit claim is traceable to an authoritative source.

### Rule 15: No Sampling for Completeness Audits (D112) — NON-NEGOTIABLE
Sampling (checking 10% and extrapolating) is NEVER acceptable for vocabulary or grammar completeness verification.

1. **For P55 vocabulary completeness**: Check EVERY word on the official list against the teach cards. This is automated (script compares two lists). There is no reason to sample when a script can check everything.

2. **For P57 grammar completeness**: Check EVERY construct on the official grammar inventory. Produce the full inventory table. No "spot-check 20 constructs and assume the rest are fine."

3. **For P52 teach-before-use**: Check EVERY quiz step, not a sample. This is automated (script extracts quiz words and checks against cumulative teach list). Sampling caught 5 P34 violations in D102; full verification would have caught all of them in one pass.

4. **Sampling IS acceptable for**: P8 anti-leak checks (human judgment required per step, full automation impractical), communicative function mapping (requires pedagogical judgment).

### Why Rule 15 Exists
D111 ran "automated scans" that checked structural properties (step types, em-dashes, density) but never checked vocabulary completeness because "it would take too long." The entire vocabulary of a language file can be extracted and compared against a word list in seconds with a script. The audit was incomplete not because the task was hard but because nobody wrote the script. Rule 15 makes full verification the default and sampling the exception.

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
| Cross-language audit | D109 | 178 em-dashes fixed, 3 P49 removed, 12 P8 severe fixed, CEFR 64/64 |

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
| Cross-language audit | D109 | 311 P8 fixed, 1 mc ans fixed, CEFR 68/69, dialogues 97.7% |

**Dutch needs NO further work** until dialogue enrichment uplift (currently 97.7%, target 100%) or A1-A2 retroactive standards pass.

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
| Cross-language audit | D109 | 157 P8 fixed, CEFR PASS (1 moderate gap: A2 imperative) |

**German needs D111 audit.** CEFR distribution flagged (D110): 8-8-7-6 vs gold standard 6-4-10-10. Deep P52 teach-before-use verification not yet done. Next: D111 structural + deep audit.

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
| Cross-language audit | D109 | 15 P8 fixed, 2 P49 removed, CEFR PASS (3 minor vocab gaps) |

**French needs D111 audit.** CEFR distribution flagged (D110): 8-8-8-6 vs gold standard 6-4-10-10. Deep P52 teach-before-use verification not yet done. Next: D111 structural + deep audit.

### DONE (Spanish A1-B2 = Fifth Gold Standard)
Spanish is PRODUCTION-READY. Built from scratch in D107 (infrastructure) + D108 (content):

| Milestone | Decision | Status |
|-----------|----------|--------|
| LANG_BLUEPRINT["es"] | D107 | COMPLETE |
| CULTURE_PACKS["es"] | D107 | COMPLETE |
| ARTICLE_SYSTEMS["es"] | D107 | COMPLETE (el=blue, la=coral) |
| Foundations (knowledge + playthrough + gate quiz) | D107 | COMPLETE |
| A1 curriculum (U1-U8) | D107/D108 | COMPLETE |
| A2 curriculum (U9-U16) | D108 | COMPLETE |
| B1 curriculum (U17-U24) | D108 | COMPLETE |
| B2 curriculum (U25-U30) | D108 | COMPLETE |
| Quality validation (P48/P22c/P49/density/board:true) | D108 | PASS |
| Dialogue enrichment | D108 | All teach cards have A:/B: dialogues |
| Temp-file agent workflow | D107 | Gold standard for future builds |
| Cross-language audit | D109 | 23 P8 fixed, 1 P49 removed, CEFR PASS (2 vocab gaps) |

**Spanish needs D111 audit.** CEFR distribution flagged (D110): 8-8-8-6 vs gold standard 6-4-10-10. Deep P52 teach-before-use verification not yet done. Next: D111 structural + deep audit.
### NEXT PRIORITIES — D112 CERTIFICATION-GRADE AUDIT (IMMEDIATE)

**This is a multi-session project.** Each session focuses on ONE language and completes ALL 15 P53 checklist items.

1. **D112: Certification-Grade Vocabulary & Grammar Audit** (IMMEDIATE PRIORITY)
   - **Phase 1**: Vocabulary gap analysis. For each language, obtain official exam vocabulary list, extract current teach card vocabulary, compare. Produce gap report. Fix ALL gaps.
   - **Phase 2**: Grammar gap analysis. For each language, produce complete grammar inventory table from official exam grammar lists. Verify every construct is taught + practiced + recycled. Fix ALL gaps.
   - **Phase 3**: Unit count re-evaluation. Every language's unit count must be justified by concept catalogue, not template. Korean A2 (4 units for Category V language) flagged for expansion. German/French/Spanish B2 (6 units each) flagged for expansion.
   - **Phase 4**: Communicative functions mapping. Verify ALL CEFR communicative functions covered.
   - **Phase 5**: Full 15-item P53 checklist re-verification.
   - Session order: Korean first (most complex, sets template), then Dutch, German, French, Spanish.
   - ALL 5 languages audited to same depth. No language is "exempt" because it was built first.
   - Agents receive full pipeline context per Rule 13. Opus for content generation per Rule 11. Official source citation per Rule 14. No sampling per Rule 15.

2. **Arabic A1-B2 Build** (after D112 completes)
   - Has skeleton units + LANG_BLUEPRINT + foundations knowledge grid
   - Needs: FK_PLAYTHROUGH, FK_GATE_QUIZ, full curriculum build
   - MUST follow P54 anti-cramming doctrine + P55 vocabulary completeness + P56 concept-driven sizing from day one
   - Arabic is the FIRST language to be built under the certification-grade standard

3. **Deep Quality Audits** (D92-style) for German, French, and Spanish
   - All three passed quality scans but have not had the multi-round deep audit treatment
   - Korean (D92/D93) and Dutch (D102) set the audit standard
   - These audits are INCLUDED in D112 scope, not separate

### Workflow for All Future Content
Every language expansion MUST follow this workflow:
1. **Obtain official vocabulary and grammar lists.** Before writing anything, get the complete official word list and grammar inventory for the target certification exam at each CEFR level. These are the REQUIREMENTS.
2. **Catalogue all concepts (P54, P56).** Organize vocabulary by domain, grammar by construct, communicative functions by CEFR level. Determine unit count and distribution from the concepts, not from any template.
3. Build foundations (knowledge + playthrough + gate quiz)
4. Build A1-B2 with Rule 7 density enforcement (never batch-build skeletons)
5. **Vocabulary completeness check (P55).** After building, run automated comparison against official word list. Fix ALL gaps before proceeding.
6. **Grammar completeness check (P57).** Produce grammar inventory table. Fix ALL gaps.
7. Quality audit per level (D92-style: P8, P52, P44, P48, P49)
8. Dialogue enrichment with Rule 9 sequential workflow
9. **Full 15-item P53 checklist.** ALL items must PASS. No exceptions.
10. **Certification readiness review.** A domain expert confirms exam preparedness.

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
15. **Never cram, never pad.** The curriculum exists to serve the LANGUAGE, not a spreadsheet. If 50 units are needed, build 50. If 10 suffice, build 10. Determine unit count from the concepts that need teaching, compared against real textbooks and exam frameworks. Never start with a unit count and work backwards. Every language deserves its own shape. (P54, D110)
16. **Structure before content, always.** Before checking whether a teach card has a typo, check whether the unit it's in is at the right CEFR level. Before checking P8 leaks, check whether the CEFR distribution makes pedagogical sense. An audit that misses structural problems but catches 700 content issues is a failed audit. (P51, P53, D110, Rule 13)
17. **"Taught" means its own teach card.** A word appearing in another card's example sentence is NOT taught vocabulary. A word in a deepDive is NOT taught. A word in a tip is NOT taught. Every quiz word must trace to a prior dedicated teach card. No exceptions beyond the narrow P37 cognate rule. (P52, D110)
18. **Audit agents need full context.** Every audit agent gets the complete pipeline rules, the P53 checklist, the anti-cramming doctrine, and explicit instruction to check structure first. An agent without full rules produces the errors D109 produced. (Rule 13, D110)
19. **Certification-grade means EVERY word on the official exam list.** Not "most." Not "the important ones." ALL of them. A learner completing LingoVerse must be able to pass TOPIK/NT2/Goethe/DELF/DELE at each level. Vocabulary completeness is verified by automated comparison against official word lists. Zero gaps. (P55, D112)
20. **Unit count follows from concepts, never from templates.** A Category V language (Korean, 2,200 class hours) with the same unit count as a Category I language (Spanish, 600 hours) is automatically suspicious. Catalogue ALL required concepts first, THEN determine units. Korean A2 with 4 units needs re-evaluation. (P56, D112)
21. **Every grammar construct on the official exam list must be taught, practiced, and recycled.** "Taught" = teach/tip card. "Practiced" = 3+ quiz steps. "Recycled" = 2+ later lessons. Full grammar inventory tables required. Zero gaps. (P57, D112)
22. **Communicative functions are as important as grammar.** CEFR tests what learners can DO, not just what they know. Every communicative function at each level (introduce self, express opinions, negotiate, write essays) must map to practice lessons. (P58, D112)
23. **No sampling for completeness audits.** When checking vocabulary or grammar completeness, check EVERY item — not a sample. Scripts can compare full lists in seconds. Sampling is only acceptable for P8 leak checks (requires human judgment). (Rule 15, D112)
24. **Every claim needs an official source.** "I think this word is B1" is not evidence. "Goethe-Wortliste B1, page 23" is evidence. Uncited vocabulary/grammar claims in audits are REJECTED. (Rule 14, D112)
