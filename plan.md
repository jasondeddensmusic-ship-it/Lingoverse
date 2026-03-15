# DUTCH QUALITY UPLIFT PLAN — D101+

## Status: EXECUTING

---

## AUDIT RESULTS SUMMARY

### Current State of Dutch V2 Curriculum
- **20 v2 units** (U1-U10 A1-A2, U11-U20 B1) + 23 legacy units
- **164 v2 lessons**, **3,117 total steps**, avg **19.0 steps/lesson**
- **835 teach cards** (375 word, 382 phrase, 78 grammar)
- **221 tips**, **22 verb tables**
- **0 dialogue enrichment** (0/835 teach cards have A:/B: dialogues)
- 2 lessons below 18 steps (v2u2l10: 15, v2u9l8: 17)
- 14 em-dashes (P22c) in v2u10l8
- 0 P48 violations, 0 D89 violations
- Unit colors: mixed (blue, teal, gold, pink, coral, purple) — should be ALL purple

### ERK Grammar Coverage: 100% (A1-B1)
All 36 checked ERK A1/A2/B1 grammar constructs present. No gaps.

### Quality Issues Found

| Category | Count | Severity |
|----------|-------|----------|
| P8 severe hint-reveals | 74 | HIGH |
| P8 borderline hint-reveals | 107 | MEDIUM |
| P22c em-dashes | 14 | LOW |
| P44 lazy hints | 8 | LOW |
| Lessons below 18 steps | 2 | LOW |
| Dialogue enrichment | 0/835 | HIGH |
| Non-purple unit colors | ~18 units | MEDIUM |
| P26 core constructs | 6/9 missing | HIGH |

### P26 Core Constructs Audit
- **Dutch U1 L1-L3: 3/9 NAMED, 6 MISSING**
- NAMED: V2 word order, subject pronouns, de/het
- MISSING: verb conjugation, separable verbs, plurals, diminutives, adjective agreement, negation

---

## EXECUTION PLAN

### Phase 0: Purple Theming + CLAUDE.md Updates (1 commit)

1. **Change all 20 v2 Dutch unit colors to `#7B5EE8`** (purple)
   - Article colors (blue `#4A8FE7` for de, gold `#E8960A` for het) are PERMANENT — never touched
   - Teal `#2ECDA7` remains for word emphasis in teach cards where logically appropriate
   - Purple is the unit/theme color only

2. **Update CLAUDE.md** to add:
   - Manifesto principles summary (P1-P50 index)
   - P8 leak type names (visual, script, hint, pattern, position)
   - Language complexity level guidance (unit counts vary by language complexity and source language)
   - Article color permanence note

### Phase 1: P26 Core Constructs (1 commit)

Add 1 "How Dutch Works" overview tip to U1 L1 or L2 that NAMES all 9 core Dutch constructs:
- V2 word order, subject pronouns, de/het articles
- Verb conjugation (stam + endings) — "Unit 3"
- Separable verbs — "Unit 5"
- Plurals (-en/-s) and diminutives (-je) — "Unit 4"
- Adjective agreement (-e rule) — "Unit 5"
- Negation niet/geen — "Lesson 9"

### Phase 2: P8 Quality Fixes (3-5 commits)

Fix all 74 severe hint-reveals by unit batch:
- Batch 1: U1-U5 (9 severe)
- Batch 2: U6-U10 (14 severe)
- Batch 3: U11-U15 (27 severe)
- Batch 4: U16-U20 (24 severe)

Also fix:
- ~30-40 borderline cases that need rewriting
- 8 P44 lazy hints (expand to 15+ chars)
- 14 P22c em-dashes in v2u10l8

Validator after each batch.

### Phase 3: Density Fixes (1 commit)

- **v2u2l10** (15 steps): Add 3+ quiz steps
- **v2u9l8** (17 steps): Add 1+ quiz step

### Phase 4: Dialogue Enrichment (5-8 commits, Rule 9)

Target: ~625/835 teach cards (75%) with A:/B: dialogues.
Exclusions: pure number cards, pure article drills, single-word function words.

Batch plan (sequential content + validator):
1. U1-U2 (A1, 2-3 exchanges) — ~130 cards
2. U3-U4 (A1, 2-3 exchanges) — ~130 cards
3. U5-U6 (A1, 2-3 exchanges) — ~115 cards
4. U7-U8 (A2, 3-4 exchanges) — ~100 cards
5. U9-U10 (A2, 3-4 exchanges) — ~70 cards
6. U11-U14 (B1, 4-5 exchanges) — ~135 cards
7. U15-U18 (B1, 4-5 exchanges) — ~120 cards
8. U19-U20 (B1, 4-5 exchanges) — ~65 cards

### Phase 5: Dutch B2 Curriculum Build (U21-U30, 8-10 commits)

Build 10 new units (80-100 lessons) for B2 level, following Korean B2 as template.

**B2 Grammar Scope** (ERK B2 / NT2 Staatsexamen II):
- Conditional types 1-3 (als/indien/mocht/ware)
- Advanced indirect speech (zei dat, vroeg of)
- Subjunctive (moge, ware, zij het)
- Extended passive (worden/zijn + voltooid deelwoord)
- Advanced relative clauses (hetgeen, waarvan, die/dat nesting)
- Participial constructions (de rennende man)
- Cleft sentences (Het is Jan die...)
- Advanced conjunctions (doordat, zodat, naarmate, mits, tenzij)
- Future perfect (zal hebben + vd)
- Past perfect in subordinate clauses
- "Er" system mastery (5 uses combined)
- Register variation (formal/informal/academic/business)
- Advanced word order (multiple subordinate clause stacking)

**B2 Vocabulary Target**: ~2000 new words (total ~4000-6000 for B2)
**Density**: 18-20+ steps per lesson, enforced DURING build (Rule 7)
**Dialogues**: Built-in from day one (not retrofitted)
**All purple themed** (#7B5EE8)

**Unit Outline**:
- U21: Formal Writing & Opinion (conditional 1-2, opinion markers)
- U22: News & Media (passive voice advanced, indirect speech)
- U23: Hypotheticals & Regret (conditional 3, subjunctive)
- U24: Academic Dutch (participial constructions, cleft sentences)
- U25: Workplace Communication (register switching, business Dutch)
- U26: Dutch Society & Culture (advanced conjunctions, essay structure)
- U27: Advanced Conversations (discourse markers, hedging)
- U28: Literature & Idioms (figurative language, proverbs)
- U29: Debate & Argumentation (counter-arguments, concession)
- U30: NT2 Prep & C1 Preview (exam strategies, C1 seeds)

### Phase 6: Documentation (1 commit)

1. Build Dutch section in `docs/CONCEPT_REGISTRY.md`
2. Update `CLAUDE.md` build status (Dutch A1-B2 COMPLETE)
3. Update `docs/DECISION_LOG.md` with D101+ numbers
4. Update language complexity guidance in docs

---

## ESTIMATED SCOPE

| Phase | Changes | Commits |
|-------|---------|---------|
| Phase 0: Theming + CLAUDE.md | 20 color changes + doc updates | 1 |
| Phase 1: P26 | 1 tip card added to U1 | 1 |
| Phase 2: P8/P22c/P44 | ~110 hint rewrites + 8 P44 + 14 P22c | 3-5 |
| Phase 3: Density | 2 lessons expanded | 1 |
| Phase 4: Dialogues | ~625 teach cards enriched | 5-8 |
| Phase 5: B2 Build | 10 units, ~80-100 lessons | 8-10 |
| Phase 6: Docs | Registry + status updates | 1 |
| **Total** | | **20-27 commits** |

---

## CONSTRAINTS

- Sequential editing (Rule 9) — one file, no parallel content agents
- Build must pass after every batch
- Every Dutch sentence must be native-speaker quality
- de/het correctness verified on every noun teach card
- Article colors (blue de, gold het) PERMANENT — never changed
- Purple #7B5EE8 for ALL unit theme colors
- Teal #2ECDA7 only for word emphasis where logical
- Density enforced DURING build, not after (Rule 7)
- No CEFR labels in learner content (P49)
- No vocab cramming — add units/lessons as needed for complete coverage
- Commit and push after each phase

---

## DESIGN PRINCIPLES

- **Languages are not crammed into boxes.** Dutch gets as many units as it needs. Unit count varies by language complexity and source language distance.
- **Article color scheme is permanent.** Blue for de-words, gold for het-words. This is a core learning feature, not theming.
- **Korean is the gold standard.** Every quality metric Dutch achieves must match or exceed Korean's standard.
- **Build dialogues into B2 from day one.** No retrofitting — every teach card gets its dialogue during initial creation.
