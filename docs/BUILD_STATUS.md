# Build Status & History

> Detailed build history for all languages. CLAUDE.md has the compact summary.
> This file preserves the full audit trail for reference.

---

## Korean (v1) — PRODUCTION-READY (old format, pending rehaul)

- 30 units, 330 lessons, 6,953 steps
- A1 U1-U6, A2 U7-U10, B1 U11-U20, B2 U21-U30
- Foundations: knowledge + 25 playthrough lessons + gate quiz
- A1-A2 audited (D93, 7 rounds). CEFR A1 34/34 grammar, 17/17 vocab, 15/15 functions. TOPIK I 57/57.
- B1 audited (D92, 14 rounds). ~50 PP8 fixes, 6 engine bugs, 5 PP34 violations.
- B1 density uplift (D88): all 106 lessons 20+ steps.
- B2 density uplift (D96): all 100 lessons 20+ steps. ~600 cross-level review steps.
- PP48 fix (D98): 520 multi-blank fb steps converted to drag_fill.
- PP49 fix (D98): 15 CEFR meta-quizzes rewritten.
- Dialogue enrichment (D100): 847/1132 teach cards with A:/B: dialogues. Rule 9 workflow.
- Cross-language audit (D109): 178 em-dashes, 3 mc ans mismatches, 3 PP49, 12 PP8. CEFR 64/64.
- D112 sessions 1-4: 19 new vocab gap lessons added. ~1,367 teach cards total.
- Remaining: 37 borderline PP8 in B1, 12 PP44 lazy hints in A1/A2, mobile CSS overflow.

## Dutch (v2) — PRODUCTION-READY (old format, pending rehaul)

- 30 v2 units, 261 lessons, ~5,825 steps (legacy deleted 2026-03-21)
- Foundations: knowledge + 22 playthrough lessons + gate quiz
- A1-A2 U1-U10: 80 lessons. B1 U11-U20: 80 lessons. B2 U21-U30: 80 lessons.
- B1 density uplift (D99): avg 12.9 → 18.3. ~437 quiz steps added.
- Quality uplift (D101): Full A1-B2 polish. Purple theming, PP26 roadmap tip, 64 PP8 fixes, 810/835 dialogue enrichment (97%).
- B2 quality audit (D102): 10 rounds. 93+154 PP8 fixes, 7 PP49, 3 density, 6 dupes, 5 PP34. de/het: 0 errors.
- Cross-language audit (D109): 311 PP8, 1 mc ans mismatch, CEFR 68/69, dialogues 97.7%.
- D112 sessions 1-4: 17 new vocab gap lessons. ~1,300 teach cards total.

## German — TWO VERSIONS

### V1 (old format, will be replaced by v2 rehaul)
- 30 units, 259 lessons, ~4,941 steps. Built D103.
- Foundations complete. 1,100/1,100 teach cards with dialogues.
- Cross-language audit (D109): 157 PP8 fixed. CEFR PASS (1 gap: A2 imperative).
- CEFR distribution flagged (D110): 8-8-7-6 was template-based.

### V2 (new rehaul format — PERFECT)
- 36 units (A1 6 + A2 6 + B1 12 + B2 12), **558 lessons** (189 splits for PP64), ~11,000 steps, 5,148 teach cards
- Story system with Verumius protagonist, funFact on every card
- ALL validations PASS: PP8 (0/2,849), PP43 (max 32), PP48, PP52, PP59 (pos/gender), PP61 (metalanguage), PP64 (99.9%)
- Full field rename: nl→trg, en→src, exampleEn→exampleSrc
- Automated validators: `scripts/pp8_validate.cjs`, `scripts/pp64_validate.cjs`

### V2 Arabic Source (srcLang:"ar")
- 36 units, **558 lessons** (synced with EN splits), ~11,000 steps, 5,148 teach cards
- **~6,800 Arabic fixes applied (2026-04-08):** mixed-language fields, match pairs, MC opts/ans, contextual hints, native register review
- Zero English in any learner-facing field (verified by automated scan)
- Arabic-specific pedagogy: ch=خ, /p/ warnings, neuter=محايد, compound=إضافة, cases=إعراب
- Grammar module: `src/data/grammar/german-ar.js` (58 entries across A1-B2)
- Idioms: srcAr/litAr/noteAr on all 125 entries in idioms-german.js
- CEFR vocab: trAr on 4,699/6,537 entries. **B2 gap: 1,821 entries missing trAr.**
- WORD_DB: Arabic enrichment via `.ar`/`.noteAr`/`.funFactAr`/`.exampleAr` fields
- Pages wired: GrammarPage, IdiomsPage, CefrReferencePage, VocabularyPage, Flashcards all baseLang-aware

## French (v1) — PRODUCTION-READY (old format, pending rehaul)

- 30 units, 258 lessons, ~4,781 steps. Built D105.
- Foundations complete. 883/883 teach cards with dialogues.
- Cross-language audit (D109): 15 PP8, 2 PP49. CEFR PASS (3 minor vocab gaps).
- CEFR distribution flagged (D110): 8-8-8-6 was template-based.
- units-french.js is 42,552 lines / 1.85MB (minified). Use grep, never full-read.

## Spanish (v1) — PRODUCTION-READY (old format, pending rehaul)

- 30 units, 258 lessons, ~4,739 steps. Built D107/D108.
- Foundations complete. All teach cards with dialogues.
- Cross-language audit (D109): 23 PP8, 1 PP49. CEFR PASS (2 vocab gaps).
- CEFR distribution flagged (D110): 8-8-8-6 was template-based.
- D113 bug fixes: 2 syntax errors + CEFR tab grouping fix.

## Arabic — Foundations Only (learning Arabic)

- 5 skeleton units, 29 lessons for learning Arabic as a target language.
- RTL works. Missing from vocabulary.js.
- Separate from German v2 Arabic source (above), which is Arabic speakers learning German.

## Infrastructure

- LANGUAGES array: 11 languages (fr, nl, en, de, ar, ro, es, ko, zh, ja, ru)
- LANG_META: All 11 complete
- LANG_BLUEPRINT: nl, de, ar, fr, es populated
- SCRIPT_BLUEPRINTS: 7 scripts (hangul, kana, arabic, hanzi, cyrillic, latin_complex, latin_simple)

## Mobile Optimization (2026-03-30)

- Bottom nav: 5 tabs (Home, Learn, Chat, Reference, Profile). Hidden on desktop (>700px).
- Verumius FAB: floating purple button on mobile, opens chat panel. Hidden on chat page + desktop.
- Safe areas: viewport-fit:cover, env(safe-area-inset-*) on nav bars + main content.
- Bottom sheets: useBottomSheet hook (swipe-to-dismiss) on word popup.
- Swipe navigation: useSwipe hook on lesson cards (left=next, right=back).
- Touch targets: min 44x44px on all interactive elements.
- Responsive: clamp() typography, auto-fill grids, overflow-wrap, scroll lock on modals.
- Chat: Old Nova (broken CORS) replaced with Verumius full-page chat (Cloudflare Workers).
- iOS: 16px inputs (no auto-zoom), dvh units, touch-action:manipulation.

## Bug Fixes (2026-04-04)

- **Rainbow word coloring fixed** (PR #99): `grammarHl` defaulted to `true` for A1-A2, causing all words to render with POS colors. Changed to `false` — black text by default, colors on "Aa" tap.
- **Faded note text fixed** (PR #99): Note text (English metalanguage) was run through `universalHl()` with target lang, making every word near-invisible. Removed `universalHl` from note renderers in both new-format and legacy teach cards.

## Architecture Cleanup (2026-04-04)

- **Discovery**: `src/verumlingua.jsx` (6,010 lines) is dead code. `src/main.jsx` → `src/App.jsx` is the real entry. Zero imports of verumlingua.jsx. Deletion scheduled in Phase 1.
- **All pages already split**: 13 files in `src/pages/`, React.lazy loaded from App.jsx.
- **All shared components extracted**: 8 files in `src/components/`.
- **Remaining monolith**: `src/components/LessonEngine.jsx` (4,036 lines). Splitting roadmap documented in CLAUDE.md.

## Strategic Decisions (2026-04-04)

- **TTS**: Google Cloud TTS chosen. Deferred — content first, audio later.
- **CEFR Reference**: Redesigned as Progress Tracker ("You know 340/677 A1 words").
- **Phase ordering locked**: Phase 1 (German EN→DE polish) → Phase 2 (Arabic B1+B2) → Phase 3 (Nav) → Phase 4 (Audio) → Phase 5 (V1→V2) → Phase 6 (Premium visual).
- **Nothing gets cut**: All features stay. VL = full ecosystem.
- **Arabic mandatory**: Proves any→any architecture + personal use case.
