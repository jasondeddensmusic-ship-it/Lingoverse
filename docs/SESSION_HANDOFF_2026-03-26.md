# Session Handoff — 2026-03-26

## What Was Done

### Shipped to main (4 commits):
1. **PP8 fixes**: 66 violations fixed across all 12 German v2 units (hint leaks, visual leaks, ambiguous answers)
2. **CLAUDE.md slim**: 1,429 → 325 lines. 25 agent rules consolidated into 6 groups (A-F)
3. **German v2 field rename**: `nl`→`trg` (2,189), `en`→`src` (2,481), `exampleEn`→`exampleSrc` (1,450). `srcLang:"en"` on all 12 units
4. **Achievement bug fix**: `tk(a.nameKey)` instead of `a.name` in unlock toast
5. **Quiz translation system**: `sSrc` field on all 573 fb+drag_fill steps. Complete English sentences (no blanks). Renderers updated for fb, drag_fill, mc. Normalization: `sSrc↔sEn`, `qSrc↔qEn`
6. **`_origTrg` fix**: Now requires `pos` field — renamed old-format cards don't hit new renderer

### Infrastructure state:
- Normalization layer handles both `nl`/`en` and `trg`/`src` transparently
- 4 teach renderers exist (new-format, board-mode, legacy, flashcard)
- All 1,450 German v2 teach cards have `funFact`
- POS tags: 0/1,450 (not started)
- Gender tags: 61/1,450 (some nouns only)
- Story cards: 113 (plain text, no visual layer)
- Art slugs: 65 unique (no actual images generated)
- Visual novel renderer: not built
- V1 salvage: not done (V2 was written from scratch)

---

## Next Session: V1 Salvage + B1/B2 Content + Story Arc

### Phase 1: V1 Salvage Mining (parallel agents)

Deploy agents per-unit (12 agents, one per German v2 unit). Each agent:

1. **Reads its unit's teach card list** — extracts all `trg` words and grammar concepts
2. **Greps `units-german.js` (V1)** via Python script for matching content:
   - Teach cards with same/similar words
   - Verb tables covering same verbs
   - Tip cards explaining same grammar constructs
   - Quiz steps (mc, fb, drag_fill, match) using same vocabulary
   - Example sentences containing target words
3. **Compiles findings** into a structured report:
   - What V1 content exists for each word/construct
   - Quality assessment: is the V1 version better, equal, or worse?
   - Specific salvage recommendations: "take this verb table as-is", "this tip card has better explanation", "these 5 quiz steps reuse directly"
4. **Does NOT edit any files** — research only

Output: 12 findings files in a temp directory, one per unit.

### Phase 2: Validation (Opus agents)

Deploy Opus validators (2-3 units each, 4-6 agents) that:

1. Read each unit's salvage findings
2. Cross-reference with V2 content quality
3. Make final salvage decisions per item:
   - **TAKE**: V1 content is better or fills a gap → integrate
   - **MERGE**: V1 has useful parts (e.g. good quiz distractors) → combine with V2
   - **SKIP**: V2 is already better → discard V1 version
4. Check PP52 (teach-before-use) isn't broken by salvaged content
5. Verify no PP8 leaks in salvaged quiz steps

Output: validated salvage plan per unit with exact items to integrate.

### Phase 3: B1 + B2 Content Build

**After salvage is integrated**, build the remaining 24 units:

1. **B1 (U13-U24)**: 12 units, 33 grammar constructs, 1,843 Goethe B1 words
   - Same salvage-first approach: grep V1 for B1-level content before writing new
   - Master plan: `docs/GERMAN_MASTER_BATCH_PLAN.md`
   - Goethe word list: `docs/german/goethe-b1.json`
2. **B2 (U25-U36)**: 12 units, 33 constructs
   - V1 has minimal B2 content, mostly new writing
   - Focus: professional language, abstract topics, Konjunktiv II mastery

Each unit follows the interleaved flow: story → vocab → story → grammar → story → quiz → resolution.

### Phase 4: Story Arc Rewrite

**After all 36 units have content**, deploy co-writing agents for the full story:

**Requirements:**
- Netflix-quality narrative arc across 36 units (A1→B2)
- Real emotions, real humor, real character growth
- Verumius arrives in Germany as a fish out of water, grows into someone who belongs
- Comedy through SITUATION (authentic foreigner experiences), never cheap jokes
- Cast deepens: Hildi (landlady), Yilmaz (neighbor), Mia (colleague), Lukas (friend), Opa (wisdom)
- Each unit's story serves the vocabulary/grammar being taught — never decoration
- A1: sitcom sketches, survival comedy
- A2: recurring cast, social situations, mild drama
- B1: real stakes, Verumius needs nuanced German to navigate problems
- B2: professional/abstract, wit and irony, emotional payoff

**Agent structure for story writing:**
- 2 Opus agents co-write each story arc segment (writer + critic)
- Neither ships without the other's sign-off (Rule F1)
- Story beats must map to unit vocabulary/grammar naturally
- Every story card gets: speaker, mood, art slug, trg text, src text

---

## Current Data Volumes

| | V1 (units-german.js) | V2 (units-german-v2.js) |
|---|---|---|
| Units | 30 | 12 (of 36 planned) |
| Lessons | 259 | 123 |
| Teach cards | 1,444 | 1,450 |
| Story cards | 5 | 113 |
| MC questions | 1,553 | 598 |
| FB steps | 753 | 399 |
| Drag-fill | 347 | 174 |
| Match pairs | 274 | 129 |
| Tips | 273 | 113 |
| Verb tables | 38 | 39 |
| Total steps | 4,941 | 3,140 |

V1 has **1,800 more quiz steps** and **160 more tips** — substantial salvage potential.

### Goethe Coverage Gap

| Level | Words | V1 covered | Gap |
|-------|-------|-----------|-----|
| A1 | 840 | 428 (51%) | 412 |
| A2 | 616 | 154 (25%) | 462 |
| B1 | 1,851 | 161 (9%) | 1,690 |
| **Total** | **3,307** | **743 (22.5%)** | **2,564** |

---

## Known Bugs

- **Achievement: undefined!** — Fixed this session (`tk(a.nameKey)`)
- POS tags: 0/1,450 — blocks the color system (Phase 0 prerequisite for story arc)
- Gender tags: 61/1,450 — needs auto-tagger script
- Visual layer: 0 actual images, no cinematic renderer

## Files to Reference

- `docs/GERMAN_MASTER_BATCH_PLAN.md` — B1/B2 execution plan
- `docs/german/goethe-b1.json` — 1,851 B1 lemmas
- `docs/german/coverage-report.md` — V1↔Goethe coverage analysis
- `docs/VERUMLINGUA_REHAUL_VISION.md` — Full rehaul spec
- `docs/VISUAL_AUDIO_LAYER.md` — Art/audio/navigation design
- `src/data/units-german.js` — V1 content (salvage source)
- `src/data/units-german-v2.js` — V2 content (target)
