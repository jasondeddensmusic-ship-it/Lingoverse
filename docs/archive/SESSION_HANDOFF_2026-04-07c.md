# Session Handoff 2026-04-07c

## What was done (14 commits on main)

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

### 7. Story Mode Hidden + Story Quizzes Filtered (commits 474a77e, 178d01c)
- **Story mode toggle hidden** from lesson header bar. Story mode is post-launch.
- **191 story-referencing quiz steps filtered** when storyMode is off. Regex matches character names (Verumius, Sophie, Lisa, Markus, Klara, Max, Tobias, Frau Weber, Herr Schmidt) in mc.q and fb.s fields. These quizzes are skipped alongside story cards.
- `storyMode` defaults to `false`. Story cards and story quizzes are invisible to users. All story data/renderers remain in code for post-launch.
- **This makes the quiz scarcity WORSE** — 191 fewer quiz steps. The next session MUST add replacement quizzes.

---

## CRITICAL: Next Session Priority — Quiz Interleaving (URGENT)

### The Problem (3 compounding factors)
1. **Teach dump pattern**: Lessons authored with 15-26 consecutive teach cards followed by a quiz block at the end
2. **Story quizzes now filtered**: 191 quiz steps removed (reference story characters). These were often the only quizzes in some lessons.
3. **Owner feedback**: "Way too few quizzes." Breathers add review pauses but NOT actual quiz steps.

### The Numbers
**Before story filter:**
- 1,426 total quiz steps (mc+fb) across 36 units
- Many lessons have a "teach dump then quiz block" pattern

**After story filter:**
- 1,235 quiz steps remain (191 removed)
- Some lessons may now have ZERO quizzes

**Consecutive teach runs (worst cases):**
- Unit 1 (A1): max 26 consecutive teaches in one lesson
- Unit 2 (A1): max 26 consecutive teaches
- Unit 13 (B1): max 21 consecutive teaches
- Unit 29 (B2): eight runs of 20+ teaches each

### What Needs to Happen
1. **Scan all 36 unit files** for lessons where: (a) consecutive teach runs >6, OR (b) quiz steps were removed by story filter leaving <3 quizzes per lesson
2. **Insert interleaved quiz steps** between teach card groups
3. **Target pattern**: 3-4 teaches, then 1-2 quiz steps testing those words, then next 3-4 teaches
4. **Quiz steps must NOT reference story characters** (no Verumius, Sophie, etc.)
5. **Quiz steps must test words from the IMMEDIATELY preceding teach cards** (PP52/PP34 compliance)
6. **PP8 anti-leak scan** after every batch — hints must not contain answers, position must vary
7. This is a DATA task, not an engine task. Edit the per-unit files in `src/data/german-v2/unit-NN.js`

### Scope Estimate
- A1: 6 units, ~15 lessons need restructuring
- A2: 6 units, ~10 lessons need restructuring
- B1: 12 units, ~40 lessons need restructuring
- B2: 12 units, ~45 lessons need restructuring
- Total: ~110 lessons across 36 units
- Estimated new quiz steps needed: ~300-500

### Agent Approach
- **Phase 1 (Sonnet):** Scan each unit file. Output: list of lessons with consecutive teach runs >6, plus lessons that lost story quizzes. Include lesson IDs, step indices, and teach card words.
- **Phase 2 (Opus):** For each identified lesson, write interleaved mc/fb quiz steps. Each quiz tests the 3-5 words from the immediately preceding teach cards. No story character references. Follow AGENT_CONTENT_RULES.md.
- **Phase 3 (Sonnet):** PP8 anti-leak validation on all new quiz steps.
- Max 4 agents at a time (Rule B.7). Each agent handles 1-2 units.
- Agents read per-unit files (`src/data/german-v2/unit-NN.js`, ~250 lines each). NEVER the re-export or monolith.
- Write to temp files. Main session merges + validates.

### Replacement Quiz Guidelines
- Use `mc` (multiple choice) and `fb` (fill-in-blank, SINGLE blank only) types
- `mc`: 4 options, 1 correct. Hint 15+ chars, must GUIDE not give answer.
- `fb`: Single `{1}` blank. 4 options in `opts[]`. Hint 15+ chars.
- All explanatory text (hints) in English (PP61)
- No em-dashes (PP22c). No CEFR labels in questions (PP49).
- Answer position must vary (PP8 position leak)
- Every quiz word must trace to a prior teach card in the same lesson (PP52)

---

## Other Priorities (after quiz interleaving)

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

---

## Current State Summary

| Component | Status |
|-----------|--------|
| German v2 content (36 units) | All validations pass but quiz density too low. |
| Breather system | LIVE. 809 checkpoints, max 5 consecutive teaches. |
| Story mode | HIDDEN. Toggle removed, story quizzes filtered. Post-launch. |
| Foundations Reference | REDESIGNED. Glossy book chapter list. |
| Gate Quiz | FIXED. No more white screen. |
| Profile vocab progress | FIXED. Shows 5,147 not 200. |
| Chat health check | LIVE. Graceful fallback. |
| noColor (all renderers) | FIXED. Black text everywhere, Aa toggle opt-in. |
| Arabic source (36 units) | COMPLETE. Grammar, idioms, CEFR, i18n, RTL all done. |
| **Quiz interleaving** | **NOT DONE. Priority 1. ~110 lessons, ~300-500 new quiz steps needed.** |
