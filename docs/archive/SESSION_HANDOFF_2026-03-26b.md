# Session Handoff — 2026-03-26b (V1 Salvage + B1 Prep)

## What Was Done This Session

### 1. V1 Salvage Pipeline (Complete)

**Phase 1: Mining** — 12 parallel agents searched V1 (8,185 lines) for content reusable in V2 U1-U12.
- Raw finding: ~1,042 items flagged

**Phase 2: Validation** — 4 Opus validators cross-referenced every finding against V2.
- Key discovery: V2 already has nearly all V1 teach cards. Phase 1 over-counted by ~10x.
- Real salvage value: deepDives, verb tables, PP52 fixes

**Phase 3: Integration** — Committed to `claude/keen-wing` branch.
- 24 deepDive grafts onto tips that lacked them (U1-U12)
- 5 verb tables: fahren present (U2), war/hatte Prateritum (U6), Partizip II patterns (U10)
- 2 PP52 fixes: `ob` teach card (U9), `Abendbrot` teach card (U8)
- 0 teach cards added (all 14 candidates already existed)
- Docs: `docs/german/v1-salvage-report.md`, `docs/german/v1-salvage-validated.md`

### 2. Current Data Volumes (post-salvage)

| | V2 (units-german-v2.js) |
|---|---|
| Units | 12 (of 36 planned) |
| Lessons | 123 |
| Steps | 3,147 |
| Teach cards | ~1,452 |
| deepDives | 77 (was ~53) |
| Verb tables | ~44 (was ~39) |
| File lines | 3,814 |

### 3. Lesson Learned

**V2 was written from scratch and is comprehensively better than V1 for vocabulary.** The salvage pipeline's main value was discovering this definitively, plus harvesting V1's deepDive explanations and verb tables that V2 lacked. Future sessions should NOT expect V1 teach cards to be useful.

---

## Next Session: B1 Content Build (U13-U24)

### Prerequisites (all DONE)
- Goethe B1 word list: `docs/german/goethe-b1.json` (1,843 lemmas)
- Grammar inventory: 33 B1 constructs catalogued in `docs/german/cross-level-allocation.md`
- Story arc: 12 episode briefs in `docs/german/episode-scene-breakdowns.md`
- Character arcs: 6 characters with B1 growth plans
- Build workflow: proven on A2 (documented in `docs/GERMAN_MASTER_BATCH_PLAN.md`)

### What Needs to Happen

**Step 1: B1 Vocabulary Mapping** (1 agent)
- Distribute 1,843 Goethe B1 words across U13-U24
- ~150 words per unit, thematic clustering
- Cross-reference with A1/A2 coverage (no duplicates)

**Step 2: B1 Grammar Mapping** (1 agent)
- Assign 33 constructs to units (already sketched in cross-level-allocation.md)
- Define teach/practice/recycle chain per construct
- Ensure PP57: each construct gets 3+ quiz steps + 2+ later recycles

**Step 3: B1 Lesson Design** (12 agents, 1 per unit)
- Each agent gets: unit episode brief, vocab allocation, grammar constructs, character notes
- Outputs: lesson-by-lesson blueprint (step types, step count, vocab taught per lesson)
- Does NOT write actual content yet

**Step 4: B1 Content Build** (12 agents, 1 per unit, write to temp files)
- Each agent writes all lessons for its unit
- Max 20 new vocab per lesson (Rule 20)
- PP46: 2+ constructs per example, 50%+ combo quizzes
- All teach cards get POS/gender/funFact

**Step 5: B1 Validation** (12 agents, 1 per unit)
- PP55: every Goethe B1 word has a teach card
- PP52: every quiz word traces to a prior teach card
- PP8: no hint leaks (5 types)
- PP57: every grammar construct taught + practiced + recycled
- PP43: density 18-35 steps/lesson

**Step 6: Fix + Merge**
- Fix agents address validation findings
- Main session merges temp files into units-german-v2.js
- Build validation after each unit merge

### Key Files
- `docs/GERMAN_MASTER_BATCH_PLAN.md` — execution plan
- `docs/GERMAN_REHAUL_PLAN.md` — D119 concept catalogue
- `docs/german/cross-level-allocation.md` — unit-by-unit grammar/vocab
- `docs/german/episode-scene-breakdowns.md` — 36 episode briefs
- `docs/german/goethe-b1.json` — 1,843 B1 lemmas
- `src/data/units-german-v2.js` — target file (append U13-U24)
