# Session Handoff 2026-04-07c

## What was done (10 commits on main)

### 1. Plumbing Fixes (commit 076dfe5)
- **Profile vocab progress**: Now uses `buildUnitsVocabCount()` extracting teach cards from UNITS (5,147 for German v2) instead of static `VOCAB[lang]` (~200 words). Users see accurate progress.
- **9 hardcoded English strings** routed through `t()` with ar/fr/es/tr translations: Chat (greeting, intro, buttons, errors), LearnPage (Start Quiz, Continue to Lessons), Quiz (keyboard hint).
- **Chat health check**: Pings Cloudflare Worker on mount. Shows localized "temporarily unavailable" fallback when unreachable. Endpoint is currently alive (405 on GET = healthy).

### 2. Gate Quiz Crash Fix (commit 1388bd1)
- **Root cause**: `FoundationsGateQuiz` component missing `baseLang` prop. `t()` calls crashed with undefined.
- **Fix**: Added `baseLang="en"` to component props (line 821) and passed `baseLang={baseLang}` from caller (line 595).

### 3. Breather System (commit 1388bd1 + 5 iterations)
- **Engine-level teach card pacing**: `injectBreathers()` in LessonEngine.jsx useMemo (line 27) auto-inserts "Quick Review" checkpoint after every 5 consecutive teach cards.
- **Coverage**: 809 breathers across all 36 German units. Max consecutive teach run reduced from 26 to 5 at every CEFR level.
- **Visual iterations**: Started purple blob, owner rejected. Final design matches teach card language: white card bg, purple left accent border, compound bubble word tiles with lavender gradients, muted purple translations, purple sparkle icon, NavArrow back button.
- **Non-graded**: Breathers don't affect quiz scores. Spacebar and swipe advance work. Progress bar includes them.

### 4. Foundations Reference Redesign (commit 1388bd1)
- **Section list**: Changed from 2-column grid to single-column chapter list with numbered purple candy pills, "REFERENCE LIBRARY" header with overall progress bar, chevron arrows, gloss highlights.
- **Section detail**: Added "CHAPTER N" label, page numbering (1/3, 2/3), enhanced gloss highlights on item cards.

### 5. noColor Fix — All Renderers (commits dd005e6, 8c96c1b, 610662b)
- **Problem**: German words in teach card examples and quiz questions showed grammar colors (blue articles, green verbs) even when grammar toggle was off. Unknown/uncatalogued words showed faded purple.
- **Root cause**: `universalHl()` calls in quiz renderers (mc, fb, drag_fill, match) and board-mode teach cards didn't pass `{noColor: true}`. Unknown word styling ignored the noColor flag entirely.
- **Fix**: Added `{noColor: true}` to all 6 quiz/teach renderer `universalHl()` calls. Unknown words and known words both now respect noColor, rendering in `var(--gray-800)` (black). Grammar colors only appear when user explicitly enables the Aa toggle.

### 6. Cleanup
- 6 stale remote branches deleted (awesome-franklin, crazy-beaver, dreamy-kowalevski, mystifying-bassi, pedantic-rosalind, sleepy-lalande)
- 4 local stale branches deleted
- Worktrees pruned (3 locked by OneDrive, harmless)

## Files changed
| File | Change |
|------|--------|
| `src/components/LessonEngine.jsx` | Breather system, noColor fixes (all renderers), NavArrow |
| `src/pages/LearnPage.jsx` | Gate Quiz baseLang fix, Foundations reference redesign, i18n strings |
| `src/pages/Profile.jsx` | buildUnitsVocabCount for accurate progress |
| `src/pages/Chat.jsx` | Health check, i18n strings, endpoint constant |
| `src/pages/Quiz.jsx` | i18n keyboard hint |
| `src/data/vocabulary.js` | 12 new i18n keys (breather, chat, gate quiz, so far) |

## Key decisions
- Breather threshold of 5 consecutive teaches was chosen because A1/A2 lessons sometimes have 4 naturally. This means breathers only fire when content genuinely bunches up.
- noColor is now the DEFAULT for all lesson content. Grammar colors are opt-in via the Aa toggle. This matches the owner's preference for clean black text.
- Breather design went through 4 iterations based on owner feedback: purple blob -> teach card style -> icon/color tweaks -> final version.

---

## CRITICAL: Next Session Priorities

### Priority 1: Quiz Interleaving in Lesson Data (URGENT)
**The breather system is a band-aid. The real fix is more quizzes.**

The owner says lessons are still "too few quizzes." The breather adds review pauses but NOT actual quiz steps. The data itself needs restructuring.

**Current state (confirmed by analysis):**
- Unit 1 (A1): max 26 consecutive teaches in one lesson before any quiz
- Unit 13 (B1): max 21 consecutive teaches
- Unit 29 (B2): eight runs of 20+ teaches each
- Many lessons have a "teach dump then quiz block" pattern instead of interleaved teach-quiz-teach-quiz

**What needs to happen:**
1. Audit each unit file to find lessons with >8 teach cards before a quiz step
2. For each offending lesson, insert additional mc/fb quiz steps between teach card groups
3. Target pattern: 3-4 teaches, then 1-2 quiz steps testing those words, then next 3-4 teaches
4. Quiz steps must test words from the IMMEDIATELY preceding teach cards (PP52/PP34 compliance)
5. This is a DATA task, not an engine task. Edit the unit files directly.

**Scope estimate:**
- A1: 6 units, ~15 lessons need restructuring
- A2: 6 units, ~10 lessons need restructuring
- B1: 12 units, ~40 lessons need restructuring
- B2: 12 units, ~45 lessons need restructuring
- Total: ~110 lessons across 36 units

**Agent approach:**
- Use Sonnet agents to scan each unit file and identify lessons with consecutive teach runs >6
- For each identified lesson, have Opus agents write interleaved quiz steps
- Max 4 agents at a time (Rule B.7). Each agent handles 1 unit.
- Follow AGENT_CONTENT_RULES.md for all quiz content
- PP8 anti-leak scan after every batch

### Priority 2: "REVIEW" vs "NEW WORD" Label
Words taught in the current lesson show "REVIEW" instead of "NEW WORD" because `learnWord()` fires on the previous card and adds to `user.lw`. By the time the next card for a different word renders, words from earlier in the same lesson are already "learned."

**Possible fix:** Track a `sessionLearned` set that only contains words learned in prior sessions/lessons, not the current one. Or change the label logic to check if the word was taught earlier in THIS lesson vs a prior lesson.

### Priority 3: Phase 3 — Navigation + Flow Redesign
- Home screen redesign: "Continue Learning" prominent
- Smooth page transitions and lesson completion celebrations

### Priority 4: Audio/TTS
- Google Cloud TTS integration
- Enable `AUDIO_ENABLED` flag in `src/audio.jsx`

### Priority 5: V1 to V2 Language Upgrades
- Korean (most audited) -> Dutch -> French -> Spanish
- Massive scope: each language needs full rehaul treatment

## Current State Summary

| Component | Status |
|-----------|--------|
| German v2 content (36 units) | PERFECT. All validations pass. |
| Breather system | LIVE. 809 checkpoints, max 5 consecutive teaches. |
| Foundations Reference | REDESIGNED. Glossy book chapter list. |
| Gate Quiz | FIXED. No more white screen. |
| Profile vocab progress | FIXED. Shows 5,147 not 200. |
| Chat health check | LIVE. Graceful fallback. |
| noColor (all renderers) | FIXED. Black text everywhere, Aa toggle opt-in. |
| Arabic source (36 units) | COMPLETE. Grammar, idioms, CEFR, i18n, RTL all done. |
| Quiz interleaving | NOT DONE. Data needs restructuring. Priority 1 for next session. |
