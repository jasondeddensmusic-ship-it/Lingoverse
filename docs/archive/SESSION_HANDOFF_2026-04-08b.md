# Session Handoff — 2026-04-08b (Deep Audit + FSRS)

## What Was Done

### Deep Audit (COMPLETE — all validators PASS)
8 audit batches across German v2 EN + AR. 52 files, ~150 individual fixes.

**Structural fixes:**
- 11 em-dashes removed (4 EN + 7 AR) — PP22c PASS
- 13 PP61 metalanguage violations fixed (German-only text translated to English)
- 3 quiz steps added for untested teach cards (U1 pronouns, U14 feststehen, U33 angewiesen)
- 5 duplicate `pos/gender` fields removed in unit-02 (Bäckerei, Fahrrad, Eingang, Beispiel, See)
- 2 wrong POS tags fixed (bio-/einzel- in U18: noun→part, both EN+AR)

**Grammar reference (`src/data/grammar/german.js`):**
- ~35 ASCII umlaut fixes (mude→müde, gross→groß, heiss→heiß, weiss→weiß, etc.)
- 3 content errors (Brüder→Bruder x2, schläft)
- 6 schon→schön context fixes
- 3 Konnten→Könnten polite form fixes

**Arabic source language:**
- 935 A/B→أ/ب speaker labels in exampleSrc (units 1-6)
- 10 English quiz stems translated (units 4, 8, 11, 14)
- 9 mixed Arabic/English src fields cleaned (units 19, 21, 22, 26, 27, 30, 35)
- 1 English hint translated (unit-24)
- 8 speaker:"الراوي"→"narrator" (unit-28)
- 2 "between" code-switches fixed (unit-34)
- ~30 Märchen/schönes/größte umlaut fixes (unit-28 EN+AR)

**English content:**
- 14 "Also:" note appendages removed from unit-04 (pedagogically confusing unrelated vocab in notes)
- unit-16 typo fix (stat→state)
- unit-28 ASCII umlauts throughout

**Translation keys:**
- `home_continue` and `home_lessons_done` added to vocabulary.js (was showing raw keys)

**Home page:**
- Flashcards tile added to home grid

### FSRS Spaced Repetition (INFRASTRUCTURE COMPLETE — UI NEEDS REDESIGN)

**What works:**
- `ts-fsrs` npm package installed — open-source FSRS algorithm
- `src/srs.js` (130 lines) — complete SRS engine module:
  - `loadSrsData(lang)` / `saveSrsData(lang, cards)` — localStorage persistence
  - `initCard()` / `reviewCard(card, rating)` — FSRS operations
  - `previewIntervals(card)` — shows next interval for each rating
  - `getDueCards(cardsMap)` — filters overdue cards
  - `getStats(cardsMap)` — due/mastered/learning/total counts
  - `initSrsForLearnedWords(lang, lwSet, existing)` — migration for existing users
  - `formatNextReview(card, rating)` — human-friendly interval labels
  - Date serialization/hydration for localStorage
- `src/App.jsx` — `clearSrsData()` called on reset/logout
- Lesson engine connection verified: `learnWord(st.trg)` → `user.lw` → SRS cards created on Flashcards mount

**What does NOT work yet (needs redesign):**
- `src/pages/Flashcards.jsx` — the card UI is broken:
  1. **Flip mechanic removed** but not properly replaced — review mode uses show/hide reveal, browse mode still references old flip classes
  2. **Card styling doesn't match lesson engine** — should reuse the exact compound bubble / teach card renderer from LessonEngine.jsx, not a custom card
  3. **Button placement** — rating buttons (Again/Hard/Good/Easy) were overlapping the card in flip mode; in reveal mode they're below but the layout feels wrong
  4. **Browse mode broken** — still references fc-wrap/fc-inner/flipped classes from the old flip system
  5. **Empty state** — redesigned with candy gloss but needs owner approval

### Audit Report
Full report at `docs/DEEP_AUDIT_2026-04-08.md` covering:
- Structural validation (all PASS)
- CEFR alignment (all grammar constructs covered A1-B2)
- EN translation quality (689 generic hints identified as top priority)
- AR translation quality (MSA scores 6-9/10, contrastive hooks strong at A1 but fade at B2)
- Competitor benchmark (VL is only full AR→DE course, feature matrix vs Duolingo/Babbel/Busuu/Goethe)
- Learning science alignment (30+ citations, FSRS/SRS identified as #1 gap)

---

## Validator Status

| Check | Status |
|-------|--------|
| PP8 anti-leak | **PASS** (0/3,482) |
| PP43 density | **PASS** (0 over 32) |
| PP48 fb blanks | **PASS** |
| PP22c em-dashes | **PASS** |
| PP64 teach-then-test | **99.9%** (5 false positives) |
| board:true | **PASS** (558/558) |
| Build | **PASS** (17s) |

---

## Next Session: Flashcard UI Redesign

### The Problem
The Flashcards page was iterated too many times without a clear design spec. The SRS engine works but the UI is a mess. Needs a clean-slate design session.

### What the Next Session Should Do

1. **Decide the card mechanic**: Flip (3D rotate) vs Reveal (expand to show answer). The flip requires fixed-height absolutely-positioned faces which causes layout issues. Reveal is simpler but less satisfying. DECIDE FIRST.

2. **Reuse the lesson engine card style**: The teach card in LessonEngine.jsx has the compound bubble, POS/gender badges, note box, example bubbles. The flashcard should look EXACTLY like a teach card, not a custom design. Consider importing shared components or copying the exact JSX patterns.

3. **Fix browse mode**: Currently broken because the flip CSS classes are inconsistent with the review mode changes. Both modes need to use the same card component.

4. **Rating buttons**: The all-purple gradient (dark=forgot, light=easy) approach was correct. They need to be BELOW the card with clear spacing, never overlapping. Fixed labels: "repeat now" / "10 min" / "1 day" / "4 days" for new cards.

5. **Test with real state**: The preview environment doesn't persist `window.storage`, making it impossible to test the full lesson→flashcard flow. Either:
   - Deploy to lingoverse.nl and test live
   - Add a dev helper that populates `user.lw` with test words

### Files to Modify
- `src/pages/Flashcards.jsx` — rewrite UI only (SRS logic is fine)
- `src/styles.js` — flashcard CSS section
- Possibly extract shared card components from LessonEngine.jsx

### Files NOT to Touch
- `src/srs.js` — working correctly
- `src/App.jsx` — integration is correct
- Any content files — audit is complete

---

## Key Findings from Audit

### Top 3 Content Priorities (for future sessions)
1. **689 generic quiz hints** — "Think about the meaning..." / "Which word fits..." — replace with word-specific guidance across all 36 units
2. **227 lessons with >6 consecutive teach cards** — interleave quizzes (39 severe cases with 11+)
3. **B2 etymology monotony** — ~200 "From Latin..." funFacts need variety

### Top 3 Feature Priorities (per learning science)
1. **FSRS flashcard UI** — engine built, UI needs redesign (THIS SESSION'S UNFINISHED WORK)
2. **Audio/TTS** — #1 competitive gap, creates "silent vocabulary"
3. **Basic gamification** — streaks + XP display (XP data exists, just not wired to UI)

### Competitive Advantage
VL is the **only platform** offering full A1-B2 German from Arabic. No competitor comes close. This is the #1 marketing angle.

---

## Files Changed (52 total)

| Category | Files | Changes |
|----------|-------|---------|
| EN content units | 16 | PP61, PP22c, PP64, duplicate fields, POS tags, umlauts, notes |
| AR content units | 19 | A/B labels, English remnants, em-dashes, umlauts, speaker tags |
| Grammar reference | 1 | ~35 umlaut fixes, 3 content errors |
| Vocabulary data | 1 | 2 translation keys added |
| SRS engine | 1 | NEW: src/srs.js (130 lines) |
| Flashcards UI | 1 | Rewritten (NEEDS FURTHER WORK) |
| Styles | 1 | +200 lines SRS CSS |
| App.jsx | 1 | clearSrsData import + reset handler |
| Home.jsx | 1 | Flashcards tile |
| Package files | 2 | ts-fsrs dependency |
| Docs | 2 | Audit report + this handoff |
| Scripts | 1 | PP64 results updated |
