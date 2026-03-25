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

### V2 (new rehaul format — ACTIVE BUILD)
- 12 units (A1 U1-U6 + A2 U7-U12), 123 lessons, 3,140 steps, 1,450 teach cards
- Story system with Verumius protagonist, funFact on every card
- A2 PP52 fixes (42 violations fixed), PP8 fixes (17 severe + 20 pattern leaks)
- 25 vocab gap-filler lessons (L9-L13 per unit) — Goethe words, no story layer yet
- MISSING: POS/gender tags (P59), trg/src field rename, story integration for vocab lessons
- B1 build (U13-U24) and B2 build (U25-U36) pending
- Master batch plan: docs/GERMAN_MASTER_BATCH_PLAN.md

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

## Arabic — SKELETON ONLY

- 5 skeleton units, 29 lessons. RTL works. Missing from vocabulary.js.
- Deferred until new format is established.

## Infrastructure

- LANGUAGES array: 11 languages (fr, nl, en, de, ar, ro, es, ko, zh, ja, ru)
- LANG_META: All 11 complete
- LANG_BLUEPRINT: nl, de, ar, fr, es populated
- SCRIPT_BLUEPRINTS: 7 scripts (hangul, kana, arabic, hanzi, cyrillic, latin_complex, latin_simple)
