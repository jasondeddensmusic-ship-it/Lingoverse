# CLAUDE.md — LingoVerse Project Instructions

> Every Claude Code session MUST read this file before writing any code or content.
> This file reflects the actual codebase as of March 2026.

---

## Project Overview

LingoVerse is a self-contained multilingual language learning platform. The entire application lives in **one file**: `src/lingoverse.jsx` (~26,600 lines). It is a React 18 app built with Vite.

**Vision**: ANY source language to ANY target language. Every native tongue of every registered country. The architecture must always be built strategically with scale in mind. Nothing should ever be hardcoded for one language pair.

**Current state**: Dutch A1-B1 complete (20 units, 160 lessons). Korean A1 complete (6 units, ~96 lessons, density upgrade in progress). German and Arabic have early skeletons (5 units each, below density standard).

---

## Owner's Workflow (CRITICAL)

The owner is NOT a coder. The workflow is:
1. Edit `src/lingoverse.jsx` with Claude's help
2. Ask Claude for an `index.html` build of the JSX
3. Manually upload that single `index.html` to mijndomein.nl file manager
4. That's it. No CI/CD, no git deploy, no npm on the server.

Any architectural change must preserve this workflow or provide an equally simple alternative. The owner cannot run build scripts on the server.

---

## Architecture — Single File Structure

`src/lingoverse.jsx` contains everything in this order:

| Section | Lines (approx) | Contents |
|---------|----------------|----------|
| Manifesto & Decision Log | 1–3,500 | 20+ principles, 71 decisions, pipeline rules, curriculum spine |
| Utility functions | 3,670–4,060 | TTS, vocab helpers, storage |
| Language metadata | 4,060–4,420 | LANGUAGES, CEFR_LEVELS, LANG_META, LANG_BLUEPRINT, CULTURE_PACKS |
| Foundations system | 4,420–6,840 | FOUNDATIONS_BY_LANG, FK_PLAYTHROUGH, FK_GATE_QUIZ, SCRIPT_BLUEPRINTS |
| UI translations | 6,800–6,840 | TEXT_KEYS, tk() helper |
| Content validator | 7,050 | validateLessonForLeaks() |
| Learning objectives | 7,340–7,450 | OBJECTIVES, STANDARDS |
| Vocabulary & grammar | 7,680–8,940 | VOCAB, LEXEMES, MEANINGS, GRAMMAR |
| XP & achievements | 9,680–9,710 | LEVEL_XP, ACHS |
| Article colors & families | 9,710–9,800 | ARTICLE_COLORS, LANG_FAMILIES |
| CSS design system | 9,800–10,680 | Full CSS-in-JS with dark mode |
| Page components | 10,680–12,940 | TopNav, Home, Profile, Chat, Quiz, Flashcards, Auth, Onboarding |
| **UNITS (curriculum data)** | **12,940–21,960** | All lesson content for all languages (~9,000 lines) |
| Learn page & UnitMap | 21,960–23,560 | Navigation, Foundations UI, lesson lists |
| **LessonEngine** | **23,570–26,360** | Core teaching/quiz rendering engine |
| App root | 26,460–26,650 | Main App component, routing, persistence |

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

### LANG_META (line ~4293)
Per-language settings: scriptType, framework, levelMap, ttsLocale, specialRules. Every new language needs an entry here.

### FOUNDATIONS_BY_LANG (line ~4416)
Reference knowledge grids. Organized by sections (alphabet, vowels, consonants, spelling rules). Dutch has 6 sections with 24 items — that's the benchmark.

### FK_PLAYTHROUGH (line ~5575)
Interactive foundations lessons. Stages → lessons → steps. Currently implemented: Korean (10 phases), Dutch (22 lessons).

### FK_GATE_QUIZ (line ~6272)
Pass/fail gate quiz after foundations. Currently: Korean implemented.

### UNITS (line ~12936)
The main curriculum. Structure:
```
{ n, lang, track, title, sub, icon, level, color, lessons: [
  { id, title, icon, xp, board:true, steps: [...] }
]}
```
Track system: `track:"v2"` for new curriculum, `track:"legacy"` for old Dutch content.

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
- **P26**: Check P26 Naming Map — don't name grammar rules before their harvest unit
- **P32**: Every sentence must be native-speaker quality, every exercise must have exactly ONE correct answer
- **P34**: Every word in exercises must have been taught (teach card) before use
- **P37**: Function words (en, of, maar, ook, niet, ja, nee, er) need teach cards before first use
- **P43**: Minimum 20 steps per Korean lesson. Dutch target: 25-35.

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
- A1 (Units 1-6): COMPLETE but density upgrade in progress (D59)
- **568 density issues** across 94/96 lessons (Korean Density Audit)
- Issue types: NOTE_WALL (328), TIP_WALL (79), TEACH_STREAK (57), TIP_KOREAN_HEAVY (56), NL_SLASH (36), EXAMPLE_FORMULA (7)
- D62 violations in note/text/deepDive fields: ~376 remaining
- Units 7-20: Not yet built

### German: 5 early units, below density standard, needs Goethe-Institut A1 audit
### Arabic: 5 skeleton units, RTL works, needs CEFR audit

---

## Documentation Files

- `docs/LINGOVERSE_MASTER_BIBLE.md` — Full philosophy, per-language standards, official reference requirements, unit count doctrine
- `docs/POLYGLOT_PIPELINE_STANDARDS.md` — Five Universal Pillars, per-language pipeline rules, seed framework, JSON separation plan
- `docs/KOREAN_DENSITY_AUDIT.md` — Detailed audit of all 96 Korean lessons with issue counts and fix patterns

---

## Common Tasks

### Adding a new language:
1. Add to LANGUAGES array (line ~4065)
2. Add LANG_META entry (line ~4293)
3. Add FOUNDATIONS_BY_LANG entry
4. Create FK_PLAYTHROUGH stages
5. Create FK_GATE_QUIZ
6. Add UNITS with track:"v2", board:true on all lessons
7. Validate with validateLessonForLeaks()

### Adding a lesson to an existing unit:
1. Run P24 redundancy check first
2. Follow step type pipeline (intro → teach → tip → quiz → verb_table)
3. Run full audit checklist (P24-P45)
4. Every teach card: check also/cognate/fRef fields

### Building index.html for deployment:
Run `npm run build` — Vite produces a bundled index.html in `dist/`. The owner uploads this single file to mijndomein.nl via their file manager.

---

## Principles to Always Remember

1. **We are building the system that builds courses.** Every decision shapes the process that will eventually run WITHOUT a human safety net.
2. **When unsure about grammar: FLAG IT, do not commit.** Use `// VERIFY:` comments.
3. **The pipeline must guarantee quality by PROCESS, not by human review.** Think: "Would this catch this bug in Japanese, where no human reads the output?"
4. **P26 Spiral is law.** Show grammar naturally 2-4 units before formal naming. Never harvest early.
5. **Every new concept type needs an intro tip before first instance** (D44).
6. **Treat every session as if building for a language you don't speak.** The rules exist because they caught real errors.
