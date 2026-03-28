# Session Handoff — 2026-03-28c (P4 Story Arc + PP8 Validation)

> Next agent: Read this ENTIRE file before doing anything. Then read CLAUDE.md.

---

## What Was Done This Session

### 1. P4 Story Arc Rewrite — COMPLETE (10 commits)

All 36 German v2 units brought to 30+ story card target. 480 new story cards written and integrated.

| Before | After |
|--------|-------|
| 623 total story cards | **1,103 total story cards** |
| 5 units at 30+ | **36/36 units at 30+** |
| 6 units below 10 cards | **0 units below 10** |

**Phase breakdown:**
- Phase 1b+2: U2, U7, U10, U11 (95 cards) — critical A1/A2 gaps
- Phase 3: U16, U19, U20, U22, U23, U24 (129 cards) — B1 gaps
- Phase 4: U1, U3, U6, U8, U9, U12 (100 cards) — A1/A2 bookend pass
- Phase 5: U13-U15, U17-U18, U21 (71 cards) — B1 bookend pass
- Phase 6: U25-U29, U31-U33, U35 (86 cards) — B2 bookend pass

**Narrative arc highlights:**
- U2: Döner solidarity (Lukas's first silent appearance)
- U7: Four-minute Hausarzt, Beipackzettel comedy, Hildi's soup
- U10: Deutsche Bahn delay, seat confrontation, Currywurst = victory
- U11: Glühwein toast ("Auf uns drei"), Heinrich's crunchy snow
- U21: Nikolaikirche, Hildi's du offer, Werner's photo
- U24: Courtyard party, KD's cactus (Absatz), "Ich bleibe"
- U33: Thinking in German, homesick for Berlin, Hildi watered the plants
- U35: Night walk past every landmark, quiet BESTANDEN

### 2. PP8 Position Bias Fix — COMPLETE (1 commit)

**CRITICAL fix:** 764 of 1,022 MC steps had the correct answer at position 0 (opts[0]).
- Units 2/5/26 had 100% P0 clustering
- Applied deterministic position shuffle (seeded RNG per unit)
- All 36 units now at ~25% per position (P0/P1/P2/P3)
- Script: `scripts/shuffle-mc-positions.cjs` (reproducible)

### 3. U2 Rathaus PP32 Fix (1 commit, bundled with position shuffle)

"Which article goes with Rathaus?" had TWO correct answers: "das Rathaus" AND "ein Rathaus".
Changed to gender-identification format: "What is the gender of 'Rathaus'?" with uniform options.

### 4. Tip Card Engine Fix — forceGrammar (1 commit)

Added `forceGrammar` option to `universalHl()`. When true, applies grammar pack colors even when grammar toggle is OFF. Applied to tip card text renderer and deepDive renderer.

**Files changed:** `src/components/LessonEngine.jsx` lines 1778 (condition), 3175 (tip renderer), 3288 (deepDive renderer).

---

## PP8 Validation Results (Full Scan)

Four Sonnet agents scanned all 36 units. Results:

| Issue | Count | Status |
|-------|-------|--------|
| Position bias | 22 units failed | **FIXED** — all shuffled to ~25% |
| Hint leaks | ~179 | **PENDING** — hints name the answer word |
| Script/pattern leaks | ~98 | **PENDING** — answer is longest option (B2 worst) |
| Visual leaks | ~16 | **PENDING** — answer visible in question text |
| PP32 (multiple correct) | 1 confirmed (U2) | **FIXED** |

### Hint Leak Patterns (top offenders)
- **Conjunction hints**: weil/dass/denn/damit/ohne/statt named directly in hints (U8, U9, U17)
- **Passive voice hints**: wird/wurde named in hints (U14)
- **Grammar label hints**: Konjunktiv/Partizipialattribut named in hints (U25-U33)
- **Fix pattern**: Describe the semantic function, not the target word

### Script/Pattern Leak Patterns (B2 worst)
- "Identify the grammar constructs" MC format is structurally broken
- Correct answer names the most constructs = always longest (2x-17x ratio)
- Fix: equalize distractor lengths with plausible detailed alternatives

### Visual Leak Patterns
- Relative pronoun exercises: noun starts with the article that IS the answer (U14)
- Compound morphology exercises: answer embedded in the compound shown (U34)
- Fix: reframe questions to avoid exposing the answer

---

## Architecture After This Session

Same as previous session. Only changes:
- `src/components/LessonEngine.jsx` — forceGrammar added to universalHl + tip renderer
- `src/data/german-v2/unit-01.js` through `unit-36.js` — story cards added + MC opts shuffled
- `scripts/shuffle-mc-positions.cjs` — new utility script

---

## TODO List (Priority Order)

### P5: PP8 Content Fixes — hint/script/visual leaks (~293 violations)

**Phase 1 — Hint leaks (~179 violations):**
Hints that name the answer word. Fix by describing the semantic function without naming the target.
- U5 (5), U8 (7), U9 (6), U10 (3), U13 (6), U14 (11), U17 (13), U19 (23), U21 (14), U23 (10), U24 (9), U25 (9), U26 (10), U27 (6), U28 (5), U29 (9), U30 (8), U31 (5), U32 (8), U33 (10), U35 (11), U36 (11)
Strategy: Deploy 4 Sonnet agents per batch, 9 units each. Each agent rewrites hints.

**Phase 2 — Script/pattern leaks (~98 violations):**
Answer is dramatically longer than distractors. Concentrated in B2 (U25-U36).
Strategy: Equalize distractor lengths. May need to restructure "identify constructs" MC format.

**Phase 3 — Visual leaks (~16 violations):**
Answer visible in question text. Individual fixes per quiz step.
Strategy: Main session fixes directly, small batch.

### P6: Other Language Rehauling
Korean > Dutch > French > Spanish. Not started.

### Infrastructure Backlog
- Bundle size: 19MB — needs code splitting
- POS/gender auto-tagger (0/1,450 cards tagged)
- Visual novel renderer (not built)
- KOREAN_DICT extraction from engine
- V1 unit n:31 duplicate key collision with v2

---

## Current State

| Language | Format | Units | Lessons | Steps | Teach Cards | Story Cards | Status |
|----------|--------|-------|---------|-------|-------------|-------------|--------|
| Korean | v1 | 30 | 330 | 6,953 | ~1,367 | — | Production |
| Dutch | v2 old | 30 | 261 | ~5,825 | ~1,300 | — | Production |
| German v1 | v1 | 30 | 259 | ~4,941 | ~1,297 | — | Being replaced |
| **German v2** | **v2 new** | **36** | **~319** | **~8,300** | **~5,050** | **1,103** | **Story arc DONE. PP8 position FIXED. Hint/script/visual leaks pending.** |
| French | v1 | 30 | 258 | ~4,781 | ~1,077 | — | Production |
| Spanish | v1 | 30 | 258 | ~4,739 | ~1,062 | — | Production |
| Arabic | skeleton | 5 | 29 | — | — | — | Deferred |

---

## Commits This Session

```
8f6b2a8 Tip card engine fix: forceGrammar colors articles in tip/deepDive text
c96b317 PP8 Position Bias Fix: shuffle MC answers across all 36 units
43cf436 P4 Story Arc: U35 — 6 story cards added
101b91a P4 Story Arc: U27, U31, U32, U33 — 43 story cards added
72b6467 P4 Story Arc: U25, U26, U28, U29 — 37 story cards added
512ded1 P4 Story Arc: U18, U21 — 27 story cards added
3839ec7 P4 Story Arc: U13, U14, U15, U17 — 44 story cards added
5e8c58f P4 Story Arc: U9, U12 — 33 story cards added
662ea41 P4 Story Arc: U1, U3, U6, U8 — 67 story cards added
15992ad P4 Story Arc: U23, U24 — 44 story cards added
08be239 P4 Story Arc: U16, U19, U20, U22 — 85 story cards added
b96bafd P4 Story Arc: U2, U7, U10, U11 — 95 story cards added
```

---

## Agent Deployment Rules (CRITICAL)

1. **MAX 4 agents at a time. NEVER MORE.**
2. Every content agent gets `docs/AGENT_CONTENT_RULES.md` copied into its prompt.
3. Every story agent gets `docs/AGENT_STORY_RULES.md` copied into its prompt.
4. Agents read per-unit files (`src/data/german-v2/unit-NN.js`), NOT the full re-export.
5. Use Sonnet for validation/fixes, Opus only for creative content.
6. **ALWAYS run `npm run build` after every file edit.**

---

## Session Startup Checklist

1. Read this handoff file
2. Read `CLAUDE.md` (single source of truth)
3. Run `npm run build` to verify everything compiles
4. Next priority: P5 PP8 hint leak fixes (deploy 4 Sonnet agents on U5-U36)
