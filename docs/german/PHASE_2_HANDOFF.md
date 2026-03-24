# German A1-B2 Planning Handoff

> **Status**: Phase 2 + Phase 3 COMPLETE (2026-03-24).
> **Priority**: Phase 4 (A1 content writing) is NEXT. Character arc fixes pending.
> **Date**: 2026-03-23 (Phase 0-2B), 2026-03-24 (Phase 2C+D, Phase 3)

---

## What's Done (DO NOT REDO)

### Phase 0 — Foundation Research (ALL COMPLETE, ALL COMMITTED)
- **Goethe word lists**: 3,303 lemmas downloaded (A1: 848, A2: 612, B1: 1,843) → `docs/german/goethe-a1.json`, `goethe-a2.json`, `goethe-b1.json`
- **Grammar verification**: 118 constructs verified against official Goethe sources (+2 additions: Modalpartikeln B2, Demonstrativartikel A1) → `docs/german/grammar-inventory-verification.md`
- **Communicative functions**: 84 functions mapped across A1-B2, 0 gaps → `docs/german/communicative-functions-mapping.md`
- **V1 salvage analysis**: 1,690 unique words, 1,444 teach cards, 99.5% dialogue coverage → `docs/salvage/german-v1-analysis.md`
- **Coverage report**: V1 covers 22.5% of Goethe vocabulary (743/3,307). 2,564 gap words → `docs/german/coverage-report.md`
- **B2 word list**: No official Goethe B2 Wortliste exists. Best proxies: telc "Einfach besser!" lists + frequency-based supplements. ~1,700-2,700 additional words needed beyond A1-B1.

### Phase 1 — Story & Scene Design (ALL COMPLETE, ALL COMMITTED)
- **Story arc validation**: 36/36 episodes PASS. 33 NATURAL grammar fit, 3 GOOD, 0 FORCED. 7 minor fixes applied. → `docs/german/story-arc-validation.md`
- **Scene breakdowns**: 144 scenes across 36 episodes. 44 unique locations. Character expression maps for 6 characters. ~30-35 Midjourney backgrounds needed. → `docs/german/episode-scene-breakdowns.md`

### Phase 2A — A1 Vocabulary Mapping (COMPLETE, COMMITTED)
- **848/848 Goethe A1 words** assigned to 6 units → `docs/german/a1-vocabulary-mapping.md`
- Distribution: U1(149), U2(175), U3(116), U4(130), U5(52), U6(226)
- Cumulative: 149 → 324 → 440 → 570 → 622 → 848
- All function words in U1-U2 per PP37
- U5 intentionally small (reuses U4 food vocab)
- U6 largest as review/catch-all (will need 10-12 lessons, not 8)

### Phase 2B — A1 Grammar Mapping (COMPLETE, COMMITTED)
- **27/27 constructs** mapped with teach + practice + recycle → `docs/german/a1-grammar-mapping.md`
- Distribution: U1(9), U2(5), U3(4), U4(6), U5(2), U6(3)
- PP26 seeding plan: 14 higher-level constructs naturally exposed in A1 stories
- Cross-construct dependency chain mapped
- U4 flagged as heaviest (6 constructs) with contingency

---

## What's NOT Done (THE TASK)

### Phase 2C: Map 20 A1 Communicative Functions to Specific Lessons
The functions ARE mapped to units (Phase 0C), but NOT yet to specific lessons within those units. This needs to happen as part of the lesson design.

### Phase 2D: Design Exact Lesson Flow for ALL A1 Lessons

This is the master blueprint. For EACH lesson in EACH unit:

```
## Unit X, Lesson Y: [Title]
- Type: story / vocab / grammar / quiz / review
- Step count target: [18+ quiz/grammar, 12-20 vocab, 12-15 story]
- New vocabulary: [specific words with count]
- Grammar constructs active: [exposed / taught / practiced]
- Communicative functions practiced: [which of the 20]
- Characters present: [from scene breakdowns]
- Scene mode: cinematic / bubble
- Step sequence outline:
  1. intro
  2. teach: word1, word2, word3...
  3. tip: grammar concept
  4. mc: tests X
  5. fb: tests Y
  ...
- Cumulative vocab after lesson: [running total]
```

### Source Documents to Read (ALL in `docs/german/`):
1. `a1-vocabulary-mapping.md` — 848 words per unit (MUST assign every word to a lesson)
2. `a1-grammar-mapping.md` — 27 constructs per unit with lesson flows
3. `communicative-functions-mapping.md` — 20 A1 functions with unit assignments
4. `episode-scene-breakdowns.md` — 4 scenes per episode
5. `../GERMAN_REHAUL_PLAN.md` — episode summaries

### The Interleaved Lesson Pattern (per unit, adjust per PP54):
- L1: Story intro (cinematic) — expose context
- L2: Vocab teach cards — formally teach words from story
- L3: Story development — use taught words, expose grammar
- L4: Grammar lesson — formalize constructs
- L5: Vocab + review — more words + recycled grammar
- L6: Story climax (cinematic) — everything together
- L7: Comprehensive quiz — test all vocab + grammar
- L8: Story resolution + cultural deep dive

**IMPORTANT**: U6 has 226 words. It CANNOT fit in 8 lessons. PP54 says give it 10-12 lessons. Other units may also need adjustments. The CONTENT decides the lesson count.

### Critical Checks During Design:
1. **PP52**: Before ANY quiz step, verify the word has been taught. Maintain running taught-word list.
2. **PP43**: Every lesson hits minimum step count (18+ quiz/grammar, 12+ vocab/story)
3. **PP58**: By end of U6, all 20 A1 functions must have practice lessons
4. **PP57**: By end of U6, all 27 constructs must have 3+ quiz steps
5. **PP55**: By end of U6, all 848 words must have teach cards
6. **PP8**: Quiz design avoids all 5 leak types
7. **PP48**: fb = single blank, drag_fill = multi-blank
8. **PP49**: No CEFR labels in learner content
9. **German-specific**: Proper ä/ö/ü/ß always, NEVER ae/oe/ue/ss

### WHY THIS TASK KEEPS TIMING OUT:
The task requires designing 50-60 individual lessons with word-by-word tracking across 848 vocabulary items. A single agent cannot hold all this in context.

**RECOMMENDED APPROACH**: Break into 6 sub-tasks, one per unit:
1. Agent 1: Design U1 lessons (149 words, 9 grammar constructs) → write to `docs/german/a1-u1-lessons.md`
2. Agent 2: Design U2 lessons (175 words, 5 constructs, cumulative from U1) → `docs/german/a1-u2-lessons.md`
3. Agent 3: Design U3 lessons (116 words, 4 constructs) → `docs/german/a1-u3-lessons.md`
4. Agent 4: Design U4 lessons (130 words, 6 constructs) → `docs/german/a1-u4-lessons.md`
5. Agent 5: Design U5 lessons (52 words, 2 constructs) → `docs/german/a1-u5-lessons.md`
6. Agent 6: Design U6 lessons (226 words, 3 constructs, 10-12 lessons) → `docs/german/a1-u6-lessons.md`

Each agent gets the FULL rule set + their unit's vocabulary list + their unit's grammar constructs + cumulative vocabulary from prior units + the scene breakdown for their episode.

After all 6 complete, a VALIDATOR agent reads all 6 files and checks:
- All 848 words have teach cards (zero gaps)
- All 27 constructs have 3+ quiz steps
- All 20 communicative functions have practice
- PP52 teach-before-use across unit boundaries
- Consistent cumulative vocabulary tracking

---

## Full Session Progress (2026-03-23)

| Phase | Deliverable | Status | File |
|-------|------------|--------|------|
| ✅ Fix | 175 umlaut transliterations | Shipped | `units-german-v2.js` |
| ✅ 0A | 3,303 Goethe words (JSON) | Shipped | `docs/german/goethe-*.json` |
| ✅ 0B | 118 grammar constructs verified | Shipped | `docs/german/grammar-inventory-verification.md` |
| ✅ 0C | 84 communicative functions, 0 gaps | Shipped | `docs/german/communicative-functions-mapping.md` |
| ✅ 0D | V1 salvage: 1,690 words | Shipped | `docs/salvage/german-v1-analysis.md` |
| ✅ Cov | 22.5% Goethe coverage, 2,564 gaps | Shipped | `docs/german/coverage-report.md` |
| ✅ 1A | Story arc PASS (36/36) | Shipped | committed inline |
| ✅ 1B | 144 scenes, 44 locations | Shipped | `docs/german/episode-scene-breakdowns.md` |
| ✅ 2A | 848/848 A1 words mapped | Shipped | `docs/german/a1-vocabulary-mapping.md` |
| ✅ 2B | 27/27 A1 grammar mapped | Shipped | `docs/german/a1-grammar-mapping.md` |
| ✅ 2C+D | A1 lesson-by-lesson design (52 lessons) | DONE (2026-03-24) | `docs/german/a1-u{1-6}-lessons.md` |
| ✅ CV | Cross-validation: 848/848 vocab, 27/27 grammar, 20/20 functions | DONE (2026-03-24) | `docs/german/a1-cross-validation-report.md` |

## Phase 3 Results (2026-03-24)

| Phase | Deliverable | Status | File |
|-------|------------|--------|------|
| ✅ 3A | A2 broad allocation (25 constructs, 612 words) | DONE | `docs/german/cross-level-allocation.md` |
| ✅ 3B | B1 broad allocation (33 constructs, 1843 words) | DONE | `docs/german/cross-level-allocation.md` |
| ✅ 3C | B2 broad allocation (33 constructs, ~2000 words) | DONE | `docs/german/cross-level-allocation.md` |
| ✅ 3D | PP26 seed verification (25/25 seeded) | DONE | `docs/german/pp26-seed-verification.md` |
| ✅ 3E | Character arc verification (6 fixes needed) | DONE | `docs/german/character-arc-verification.md` |

### Phase 3 Key Findings
- **118/118 grammar constructs** mapped across 36 units (A1:27, A2:25, B1:33, B2:33)
- **PP51 PASS**: B1+B2 (24 units) >= A1+A2 (12 units)
- **Vocabulary flow**: 848 → 1,460 → 3,303 → ~5,300 (on target for 5-6K)
- **PP26 seeds**: 25/25 A2 constructs seeded in A1 stories (4 gaps fixed with story text additions)
- **Character arcs**: 3/6 FAIL (Heinrich 16-ep gap, Lukas 8+9-ep gaps, Yilmaz 7+9-ep gaps). 6 priority fixes documented. Mia only full PASS.
- **No dead ends** from A1 into A2/B1/B2

### Outstanding: Character Arc Fixes (6 items, not yet applied)
1. Heinrich: Add 3 scenes (B1 wisdom x2, B2 health decline x1)
2. Lukas: Add 4 cameos across two gaps
3. Yilmaz B1: Add 2 appearances including Sie→du shift
4. Hildi du offer: Move to B1 (U20-U21), attach to vulnerability revelation
5. KD B2 digital: Add 1 café scene (U31-U32)
6. Fix 1 completion: Add Yilmaz reference to U4 or U5

## What Comes Next

### Phase 4: A1 Content Writing (Sessions 7-10)
- Validator agent checks all A1 lessons against PP52/PP55/PP57/PP58
- Second agent (different model) re-validates independently
- Both must agree: zero gaps

### Phase 4: Midjourney Asset List
- Compile all scenes + character expressions into a prompt doc
- One prompt per scene background (~30-35 for A1)
- One prompt per character expression variant
- Owner feeds these to Midjourney one by one

### Phase 5: Content Writing (A1 only, one unit at a time)
- Write actual JS lesson content from the approved lesson designs
- Sequential content + parallel validation (Rule 9)
- Every agent gets full rule set
- Post-build umlaut scan mandatory
- PP48/PP49/PP52 verification after each unit

### Then repeat Phases 2-5 for A2, B1, B2.

---

## PIPELINE RULES QUICK REFERENCE (for agent briefings)

Every agent MUST know:
- **PP8**: 5 leak types (visual, script, hint, pattern, position)
- **PP22c**: No em-dashes ever
- **PP27**: No IPA, ASCII phonetics only
- **PP34/PP52**: Teach before test. "Taught" = own teach card. Example-only ≠ taught.
- **PP37**: Function words need teach cards. Narrow cognate exception.
- **PP43**: Density minimums (18+ quiz/grammar, varies by type)
- **PP44**: Hints must guide, not reveal (15+ chars)
- **PP48**: fb = 1 blank, drag_fill = multi-blank
- **PP49**: No CEFR labels in learner content
- **PP54**: Anti-cramming. Content decides count.
- **PP55**: Every Goethe word gets a teach card. Zero gaps.
- **PP57**: Every grammar construct taught + 3 quiz steps + 2 recycle
- **PP58**: Every communicative function gets practice
- **German umlauts**: ALWAYS ä/ö/ü/ß, NEVER ae/oe/ue/ss in lesson content
- **Rule 1**: Grep code, never assume
- **Rule 9**: Sequential content + parallel validation
- **Rule 11**: Opus + Sonnet co-write and cross-validate
- **Rule 14**: Cite official sources
- **Rule 15**: No sampling for completeness audits
