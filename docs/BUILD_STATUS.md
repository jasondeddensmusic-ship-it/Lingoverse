# Build Status & History

> Detailed build history for all languages. CLAUDE.md has the compact summary.
> Last updated: 2026-04-15.

---

## Current State (7 Languages Live)

| Language | Format | Units | Teach Cards | CEFR | Grammar | Status |
|----------|--------|-------|-------------|------|---------|--------|
| German v2 | v2 | 36 | 5,148 | A1-B2 COMPLETE | 58 entries | GOLD STANDARD |
| German v2 (AR) | v2 | 36 | ~5,148 | A1-B2 COMPLETE | 58 entries (AR) | Arabic source variant |
| Korean | v2 | 69 | 5,166 | A1-B2 COMPLETE | 47 entries | 100%+ of German |
| Dutch | v2 | 89 | 5,106 | A1-B2 COMPLETE | mock quality | 99% of German |
| French | v2 | 90 | 5,036 | A1-B2 COMPLETE | 52 entries | 98% of German |
| Spanish | v2 | 92 | 5,124 | A1-B2 COMPLETE | 53 entries | 100% of German |
| Italian | v2 | 32 | 1,129 | A1-B2 (thin B1+B2) | 12 entries | NEW, density expansion needed |
| Japanese | v2 | 29 | 892 | A1-B2 (thin B1+B2) | 20 entries | NEW, density expansion needed |

**Grand total: ~22,500+ teach cards across ~493 units, 7 languages.**
**Grammar modules: 300 entries across 7 languages (German 58+58ar, Korean 47, French 52, Spanish 53, Italian 12, Japanese 20).**

---

## German v2 (EN source) -- THE GOLD STANDARD

- 36 units (A1 6 + A2 6 + B1 12 + B2 12), 558 lessons, ~11,000 steps, 5,148 teach cards
- Story system: Verumius protagonist, 6 recurring characters, 36 episodes, 144 scenes
- Fun info + POS/gender tags on every card
- ALL validations PASS: PP8 (0/2,849), PP43 (max 32), PP48, PP52, PP59, PP61, PP64 (99.9%)
- Full field rename: nl->trg, en->src, exampleEn->exampleSrc
- 189 lesson splits for PP64 (teach-then-test). Zero lessons over 32 steps.
- Grammar module: 58 entries (A1 16, A2 13, B1 16, B2 13). Teacher-board quality.
- Automated validators: `scripts/pp8_validate.cjs`, `scripts/pp64_validate.cjs`

### Build History
- Phase 0: Goethe word lists (3,303 lemmas), grammar inventory (116 constructs), v1 salvage
- Phase 1: Story arc validation (36 episodes PASS), 144 scene breakdowns
- Phase 2: A1+A2 vocab/grammar mapping, lesson design blueprints
- Phase 3: Cross-level allocation (6-6-12-12 distribution)
- A1: 6 units, 44 lessons. A2: 6 units, 50 lessons, 1,382 steps.
- B1: 12 units, 99 lessons, ~2,500 steps. B2: 12 units, 96 lessons, ~2,640 steps.
- Density reduction (2026-03-29): 328->369 lessons. PP43 cap enforced.
- Density splits (2026-04-07): 369->558 lessons. PP64 coverage added. PP43 restored.
- Full validation (2026-03-29 + 2026-04-07): All PP checks PASS.

## German v2 (AR source)

- 36 units, 558 lessons (synced with EN splits), ~5,148 teach cards
- ~6,800 Arabic fixes applied (2026-04-08): mixed-language, match pairs, MC, hints, native review
- Zero English in learner-facing fields
- Grammar: `src/data/grammar/german-ar.js` (58 entries). Idioms: 125 entries with srcAr/litAr/noteAr.
- CEFR vocab: trAr on 4,699/6,537. B2 gap: 1,821 entries missing trAr.
- WORD_DB: Arabic enrichment via .ar/.noteAr/.funFactAr/.exampleAr fields

## Korean -- V2 COMPLETE

- 69 units, 5,166 teach cards. A1-B2 COMPLETE.
- V1 enrichment: POS tags (1,328 cards), funFacts (1,336 cards), per-unit file split (30->69 units)
- Gap fills: A2 +316 cards, B1 +1,666 cards, B2 +1,584 cards
- Grammar: 47 entries (TOPIK aligned A1-B2)
- PP8 PASS. PP59 PASS.

### V1 History (for reference)
- Original: 30 units, 330 lessons. A1-A2 audited (D93). B1 audited (D92).
- D100 dialogue enrichment: 847/1132 teach cards. D109 cross-language audit.
- V2 upgrade (2026-04-12 + 2026-04-15): enriched in place, split to per-unit files.

## Dutch -- V2 COMPLETE

- 89 units, 5,106 teach cards. A1-B2 COMPLETE.
- V1 enrichment: POS + gender + funFacts (1,233 cards), 347 cognate funFacts, 22 COMPOUND breakdowns
- Gap fills: A1 +356 cards, B1 +335 cards, B2 +3,182 cards
- Grammar: mock quality (NOT production-ready, needs teacher-board rewrite)
- PP8 PASS.

### V1 History (for reference)
- Original: 30 units, 261 lessons. D99 density uplift. D101 purple theming. D102 B2 audit.
- V2 upgrade (2026-04-12 + 2026-04-15): enriched in place, split to per-unit files.

## French -- V2 COMPLETE

- 90 units, 5,036 teach cards. A1-B2 COMPLETE.
- V1 enrichment: POS + gender + funFacts (1,092 cards)
- Gap fills: A1 +342 cards, B1 +334 cards, B2 +3,268 cards
- Grammar: 52 entries (DELF aligned A1-B2)
- PP8 PASS.

### V1 History (for reference)
- Original: 30 units, 258 lessons. Built D105. D109 cross-language audit.
- V2 upgrade (2026-04-12 + 2026-04-15): enriched in place, split to per-unit files.

## Spanish -- V2 COMPLETE

- 92 units, 5,124 teach cards. A1-B2 COMPLETE.
- V1 enrichment: POS + gender + funFacts (1,262 cards)
- Gap fills: A1 +337 cards, B1 +305 cards, B2 +3,057 cards, +163 final B2 cards
- Grammar: 53 entries (DELE aligned A1-B2)
- PP8 PASS.

### V1 History (for reference)
- Original: 30 units, 258 lessons. Built D107/D108. D109 cross-language audit.
- V2 upgrade (2026-04-12 + 2026-04-15): enriched in place, split to per-unit files.

## Italian -- V2 NEW (2026-04-15)

- 32 units, 1,129 teach cards. A1+A2 density expanded, B1+B2 thin.
- A1 (6 units): Greetings, Numbers/Days, Family, Cafe, Home, City
- A2 (6 units): Restaurant, Shopping, Health, Travel, Past tense (avere/essere)
- B1 (12 units): Subjunctive, Work, Housing, Health, Media, Environment, Emotions, Education, Conditional, Culture, Politics, If-clauses
- B2 (8 units): Economy, Law + 6 more
- Grammar: 12 entries (CILS aligned A1-B2)
- Next: B1+B2 density expansion, then B2 completion to 36 units.

## Japanese -- V2 NEW (2026-04-15)

- 29 units, 892 teach cards. A1+A2 density expanded, B1+B2 thin.
- A1 (10 units): Greetings, Self-intro, Objects, Shopping, Food, Family, Time, Places, Shopping 2, Weather
- A2 (6 units): te-form, Ability, Experience, Opinions, Directions, Plans
- B1 (8 units): Passive, Causative, Conditionals, Keigo, Society, Giving/Receiving, Nominalization + 1 more
- B2 (5 units): In progress
- Grammar: 20 entries (JLPT aligned A1-B2)
- Next: B1+B2 density expansion, then B2 completion to 36 units.

## Arabic (target language) -- DEFERRED

- 5 skeleton units, 29 lessons. Deferred until content pipeline is established.

---

## Infrastructure

- LANGUAGES array: 7 active languages shown in selector (de, ko, nl, fr, es, it, ja). Others in _ALL_LANGUAGES.
- V2 format: per-unit files in `src/data/{lang}-v2/unit-NN.js`, per-level wrappers, top-level re-export.
- Automated validators: pp8_validate.cjs, pp64_validate.cjs (both with --lang= parameter)
- PP8 fixers: pp8_fix_position_length.cjs, pp8_fix_hint_leaks.cjs

## Mobile Optimization (2026-03-30)

- Bottom nav: 5 tabs (Home, Learn, Chat, Reference, Profile). Hidden on desktop (>700px).
- Verumius FAB: floating purple button on mobile, opens chat panel.
- Safe areas: viewport-fit:cover, env(safe-area-inset-*).
- Bottom sheets: useBottomSheet hook (swipe-to-dismiss).
- Swipe navigation: useSwipe hook on lesson cards.
- Touch targets: min 44x44px. Responsive: clamp() typography, auto-fill grids.
- iOS: 16px inputs (no auto-zoom), dvh units, touch-action:manipulation.
