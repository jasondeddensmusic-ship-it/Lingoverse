# DUTCH QUALITY UPLIFT PLAN — D101+

## Status: AWAITING OWNER APPROVAL

---

## AUDIT RESULTS SUMMARY

### Current State of Dutch V2 Curriculum
- **20 v2 units** (U1-U10 A1-A2, U11-U20 B1) + 23 legacy units
- **164 v2 lessons**, **3,117 total steps**, avg **19.0 steps/lesson**
- **835 teach cards** (375 word, 382 phrase, 78 grammar)
- **221 tips**, **22 verb tables**
- **0 dialogue enrichment** (0/835 teach cards have A:/B: dialogues)
- 2 lessons below 18 steps (v2u2l10: 15, v2u9l8: 17)
- 14 em-dashes (P22c) — all in v2u10l8 B1 roadmap tip, cosmetic
- 0 P48 violations (no multi-blank fb steps)
- 0 D89 violations (no \n in MC ans/opts)

### ERK Grammar Construct Coverage: 100%
All 36 checked ERK A1/A2/B1 grammar constructs are present. No gaps.

### Vocabulary Domains: ~95% covered
All major domains present. Minor partial coverage on a few search terms but the domains themselves are taught.

### Communicative Functions: 100%
All 13 checked functions are covered.

### Quality Issues Found

| Category | Count | Severity |
|----------|-------|----------|
| P8 severe hint-reveals | 74 | HIGH — hint directly gives answer away |
| P8 borderline hint-reveals | 107 | MEDIUM — answer appears in explanation context |
| P22c em-dashes | 14 | LOW — all in one tip card (v2u10l8) |
| P44 lazy hints | 8 | LOW — too short to guide effectively |
| Lessons below 18 steps | 2 | LOW — v2u2l10 (15), v2u9l8 (17) |
| Dialogue enrichment | 0/835 | HIGH — Korean has 847/1132 (75%) |

### P8 Issues Per Unit (severe + borderline)
| Unit | Severe | Borderline | Total |
|------|--------|------------|-------|
| U1 | 1 | 2 | 3 |
| U2 | 0 | 3 | 3 |
| U4 | 1 | 2 | 3 |
| U5 | 3 | 1 | 4 |
| U6 | 4 | 1 | 5 |
| U7 | 3 | 4 | 7 |
| U8 | 2 | 5 | 7 |
| U9 | 3 | 0 | 3 |
| U10 | 2 | 16 | 18 |
| U11 | 2 | 5 | 7 |
| U12 | 5 | 2 | 7 |
| U13 | 8 | 6 | 14 |
| U14 | 7 | 13 | 20 |
| U15 | 5 | 3 | 8 |
| U16 | 5 | 7 | 12 |
| U17 | 3 | 3 | 6 |
| U18 | 3 | 22 | 25 |
| U19 | 9 | 2 | 11 |
| U20 | 8 | 10 | 18 |

### P26 Core Constructs Audit

**Korean U1 L1-L3: FULLY COMPLIANT** — All 7 core constructs NAMED:
- Particles, SOV, 해요체, verb stem+ending, honorifics, sentence-final particles, subject omission

**Dutch U1 L1-L3: 3/9 NAMED, 6 MISSING:**
- NAMED: V2 word order, subject pronouns, de/het (mentioned in L2 note)
- MISSING from L1-L3 (need naming tips):
  1. **Verb conjugation basics (stam+t)** — first taught in U3 L2
  2. **Separable verbs concept** — first taught in U5 L3
  3. **Plural formation (-en/-s)** — first taught in U4 L6
  4. **Diminutives (-je system)** — first taught in U4 L6
  5. **Adjective agreement (-e rule)** — first taught in U5 L4
  6. **Negation niet/geen** — taught in U1 L9 but not NAMED in L1-L3

---

## EXECUTION PLAN

### Phase 0: P26 Core Constructs (1 commit)

**Dutch U1 L1-L3**: Add 1 overview tip to L1 or L2 that NAMES all core Dutch constructs. Following Korean's model (the "How Korean Is Different" tip), create a "How Dutch Works" tip that introduces:
- Verb conjugation (stam + endings) — "You'll master this in Unit 3"
- de/het articles — "Already in Lesson 4"
- Separable verbs — "Coming in Unit 5"
- Plurals and diminutives — "Unit 4"
- Adjective agreement — "Unit 5"
- niet/geen negation — "Lesson 9 of this unit"

This is ~1 tip card addition. Small, surgical change.

**Korean**: Already compliant. No changes needed.

### Phase 1: P8 Quality Audit (3-5 commits)

Fix all 74 severe hint-reveals. For each:
- Rewrite hint to GUIDE toward the answer without revealing it
- The hint should activate the relevant skill, not give the answer
- Example: `hint:"Mogen = may = permission"` → `hint:"Which modal means 'may'?"`

Approach: Fix by unit batch (U1-U5, U6-U10, U11-U15, U16-U20). Run validator after each batch.

For the 107 borderline cases: Review case-by-case. Many are grammar explanations where the answer naturally appears (e.g., "Wij + zijn = ?"). These may be acceptable depending on context — they test if you recognize the pattern, not just read the hint. Estimate ~30-40 need fixing.

Also fix:
- 8 lazy hints (P44): Expand to 15+ chars with actual guidance
- 14 em-dashes (P22c): Replace in v2u10l8

### Phase 2: Density Fixes (1 commit)

Fix 2 under-dense lessons:
- **v2u2l10** (15 steps): Add 3+ quiz steps combining identity vocabulary
- **v2u9l8** (17 steps): Add 1+ quiz step

### Phase 3: Dialogue Enrichment (5-8 commits, Rule 9 workflow)

The largest phase. 835 teach cards need dialogue treatment.

**Target coverage**: ~75% (same as Korean: 625/835 cards)
**Exclusions**: Pure number cards, pure article drill cards, single-word function words

**Batch plan (sequential content + validator per Rule 9)**:
1. U1-U2 (A1, 2-3 exchanges) — ~130 teach cards
2. U3-U4 (A1, 2-3 exchanges) — ~130 teach cards
3. U5-U6 (A1, 2-3 exchanges) — ~115 teach cards
4. U7-U8 (A2, 3-4 exchanges) — ~100 teach cards
5. U9-U10 (A2, 3-4 exchanges) — ~70 teach cards
6. U11-U14 (B1, 4-5 exchanges) — ~135 teach cards
7. U15-U18 (B1, 4-5 exchanges) — ~120 teach cards
8. U19-U20 (B1, 4-5 exchanges) — ~65 teach cards

Each batch:
1. Content agent adds A:/B: dialogues to teach cards
2. Validator checks: turn count parity, em-dashes, quote parity, no literal newlines
3. Build verification

**Dialogue format for Dutch**:
```
example:"A: Hallo, hoe gaat het?\nB: Goed, dank je! En met jou?\nA: Prima!",
exampleEn:"A: Hello, how are you?\nB: Good, thanks! And with you?\nA: Great!"
```

### Phase 4: Documentation (1 commit)

1. Build Dutch section in `docs/CONCEPT_REGISTRY.md`
2. Update `CLAUDE.md` build status
3. Update `docs/DECISION_LOG.md` with new D-numbers
4. Write `docs/DUTCH_QUALITY_AUDIT.md` (or append to existing docs)

---

## ESTIMATED SCOPE

| Phase | Changes | Commits |
|-------|---------|---------|
| Phase 0: P26 | 1 tip card added to U1 | 1 |
| Phase 1: P8 | ~110 hint rewrites + 8 P44 + 14 P22c | 3-5 |
| Phase 2: Density | 2 lessons expanded | 1 |
| Phase 3: Dialogues | ~625 teach cards enriched | 5-8 |
| Phase 4: Docs | Registry + status updates | 1 |
| **Total** | | **11-16 commits** |

All work targets `src/data/units-dutch.js` except Phase 4 (docs).

---

## CONSTRAINTS CONFIRMED

- Sequential editing (Rule 9) — one file, no parallel content agents
- Build must pass after every batch
- Every Dutch sentence must be native-speaker quality
- de/het correctness verified on every noun teach card
- Commit and push after each phase

---

## READY FOR APPROVAL?

This plan brings Dutch from "density-uplifted with basic fixes" to "Korean-level production-ready" through:
1. P26 compliance (core constructs named)
2. P8 quality (74+ hint-reveals fixed)
3. Full dialogue enrichment (0% → ~75%)
4. Complete documentation

The ERK audit found NO grammar or vocabulary gaps — the curriculum content is solid. The quality pass is about presentation (dialogues, hint quality) and documentation.
