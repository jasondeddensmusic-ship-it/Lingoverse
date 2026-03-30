# Session Handoff — 2026-03-30b

> Arabic Source Language: Full A1 content translated. UI localization mapped but not started.

---

## What Was Done This Session

### Arabic A1 Content — COMPLETE
- **Units 1-6**: All 5,500+ [AR] markers translated to Arabic (MSA)
- **Match pairs**: 368 English src values → Arabic
- **Verb tables**: 195 English src values → Arabic
- **Quiz questions**: 299 English q/opts values → Arabic
- **PP61 fixes**: 13 English-in-Arabic funFact/tip leaks fixed
- **PP8 fixes**: 6 hint-leak violations fixed
- **Garbled strings**: 7 corrupted Arabic/English mashups fixed in Unit 4
- **Naturalness**: 2 `تقافي` → `تتقارب صوتيًا` fixes
- **Build**: PASSES
- **Pedagogy audit**: PASSED (ch≈خ, محايد, إعراب, إضافة, بلى all present)

### Onboarding UI — Partially Fixed
- Step 1 "I speak..." now uses `t("ob_i_speak", baseSel)` — switches to Arabic when Arabic selected
- Step 1 subtitle uses `t("ob_choose_native", baseSel)`
- Step 1 button uses `t("ob_continue", baseSel)`
- Step 2 already used `t()` — no changes needed

### Infrastructure
- Translator script: header protection + double-quote safety
- New script: `scripts/fix-english-remnants.cjs` for non-[AR] field translation
- 25 batch files with 6,250+ translations in `scripts/batches/`

---

## What Needs Doing — UI LOCALIZATION

### The Problem
When an Arabic speaker selects Arabic, the **content** (teach cards, stories, quizzes) is fully in Arabic. But the **UI chrome** — buttons, labels, headers, navigation, POS tags, grammar labels — is all hardcoded English in the JSX files. ~180+ strings need to be routed through the `t()` translation system.

### Architecture
The app has a translation system in `src/data/vocabulary.js`:
- `TEXT_KEYS` (TK): 28 keys, have `en` + `nl` only. NO `ar`.
- `UI` dictionary: ~140 keys, most have `ar` translations already.
- `t(key, lang)` function: looks up translations. Used in some places, bypassed in most.

### The Fix (3 phases)

#### Phase 1: Add `ar` to all TEXT_KEYS (quick win)
File: `src/data/vocabulary.js` lines 17-44
- Add `ar` to all 28 TK entries
- These are quiz/lesson UI strings like "Choose the correct answer", "Hint:", "Continue", etc.

#### Phase 2: Replace hardcoded strings with `t()` calls (~180 strings)
This is the bulk of the work. Every hardcoded English string in JSX needs:
1. A new key added to `UI` dict in vocabulary.js (with `ar` translation)
2. The JSX string replaced with `t("key", baseLang)`

Priority order:
1. **Lesson Engine** (~60 strings) — "NEW WORD", "Begin", "Check", "Lesson", quiz feedback, card labels
2. **Unit Map** (~25 strings) — "Coming Soon", step counts, XP labels
3. **Vocabulary Page** (~25 strings) — filters, empty states, flashcard labels
4. **Navigation** (~10 strings) — already mostly done via `t()`
5. **Quiz Page** (~15 strings) — mode labels, feedback
6. **Chat Page** (~15 strings) — Nova labels, level selector
7. **Profile Page** (~10 strings) — achievements, manifesto, logout
8. **Shared components** (~15 strings) — flag dialog, error boundary
9. **Misc** (~10 strings) — settings, CEFR reference, grammar page

#### Phase 3: RTL support for Arabic UI
- `direction: rtl` on all containers when `baseLang === "ar"`
- Arrow icons flip (← becomes →)
- Progress bars reverse
- Layout mirrors

### Full String Inventory by File

#### LessonEngine.jsx (~60 strings)
| Category | Examples | Count |
|----------|---------|-------|
| Card labels | "New Word", "Grammar Pattern", "Key Phrase", "Review", "Compound", "Fun Fact" | 12 |
| Buttons | "Begin", "Check", "Check ✓", "Start over", "Continue", "Overview", "Try Again" | 7 |
| Quiz feedback | "Fill in the blanks", "Conjugate the verb", "Select a word then its match", "All matched!" | 6 |
| Hints/instructions | "Need a hint?", "Tap to reveal translation", "Arrow keys navigate..." | 8 |
| Done screen | "Quiz score:", "+XP earned!", progress text | 4 |
| Word popup | "Translation coming soon", "Not yet in dictionary", "Tap for full entry" | 4 |
| Section headers | "In Context", "Block Structure", "Conjugation", "Good to know", "Letter Forms" | 6 |
| Misc | "Lesson", "Vocab Not Found", "Grammar Reference", keyboard hints | 8 |

#### verumlingua.jsx (~100 strings)
| Category | Examples | Count |
|----------|---------|-------|
| Home page | tile descriptions, progress stats ("day", "words") | 10 |
| Quiz page | mode labels, descriptions, score display | 12 |
| Chat page | Nova labels, level buttons, intro text, typing indicator | 15 |
| Profile | CEFR level, achievements, manifesto, logout | 10 |
| Vocabulary | filters, empty states, review cards, table headers | 25 |
| Grammar | topic counts, section labels | 5 |
| CEFR ref | headings, section titles, empty states | 8 |
| Unit map | "Coming Soon", stats, gate quiz, foundations | 20 |
| Auth/onboarding | login errors, profile creation, welcome text | 10 |
| Dev gate | "LingoVerse", "Access code", "Enter", "Invalid code" | 5 |

#### shared.jsx (~12 strings)
| Category | Examples | Count |
|----------|---------|-------|
| Flag dialog | "Report", "What's wrong?", reason labels, submit | 10 |
| Error boundary | "Something went wrong", "Back to lessons" | 3 |

### Key Decisions Needed
1. **POS tag names**: "Verbs", "Adjectives", "Nouns" etc. — translate to Arabic (أفعال, صفات, أسماء) or keep English?
2. **Grammar case labels**: "Nom", "Acc", "Dat", "Gen" — translate or keep German abbreviations?
3. **Gender labels**: "der", "die", "das" — these are German, keep as-is
4. **Keyboard shortcuts**: "Arrow keys navigate · Space select" — translate or keep English (most keyboards are Latin)?
5. **"Coming Soon"** — appears 6 times, use one key

### Estimated Effort
- Phase 1 (TEXT_KEYS ar): ~30 minutes
- Phase 2 (180 strings): ~4-6 hours with agents
- Phase 3 (RTL): ~2-3 hours
- Total: ~1-2 sessions

---

## Files Modified This Session

| File | Changes |
|------|---------|
| `src/data/german-v2-ar/unit-01.js` through `unit-06.js` | Fully translated (content + quiz/match/verb) |
| `src/verumlingua.jsx` | Onboarding Step 1 uses t() |
| `src/data/vocabulary.js` | ob_choose_native key updated |
| `scripts/translate-ar-markers.cjs` | Header protection + quote safety |
| `scripts/fix-english-remnants.cjs` | NEW — fixes non-[AR] English |
| `scripts/batches/*.cjs` | 13 new batch files |

---

## Current State

| Language | Format | Units | Lessons | Steps | Teach | [AR] | English remnants | Status |
|----------|--------|-------|---------|-------|-------|------|-----------------|--------|
| German v2 (EN) | v2 | 36 | 369 | 9,396 | 5,147 | n/a | n/a | PERFECT |
| German v2 (AR) | v2 | 6 | 80 | 1,911 | 907 | 0 | 0 match/vt | Content DONE, UI pending |

---

## Critical Rules Reminder
- PP61: ALL metalanguage in Arabic for srcLang:"ar"
- PP32: Native-speaker quality MSA
- PP8: Hints must NOT contain answer words
- PP22c: No em-dashes
- PP39: `\n` in strings, never literal newlines
- UI strings: Route through `t(key, baseLang)`, never hardcode
