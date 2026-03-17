# D111 Session Plan — Per-Language CEFR Audit + Deep P52 + Full P53

> **Date**: 2026-03-17
> **Predecessor**: D109 (RETROACTIVELY INCOMPLETE per D110), D110 (CEFR distribution + anti-cramming doctrine)
> **STATUS: IN PROGRESS**

---

## FOUNDATIONAL CORRECTION: No "Gold Standard" Distribution

Previous documentation (D110, FULL_AUDIT_HANDOFF.md) used Korean/Dutch 6-4-10-10 as a "gold standard" to measure other languages against. **This is wrong.** It contradicts P54 (Anti-Cramming Doctrine) at its core.

### The truth:
- **There is no universal ideal CEFR distribution.** Every language has different grammar complexity, different concept density at each level, different pedagogical needs.
- **Korean 6-4-10-10 is right FOR KOREAN.** It reflects Korean's specific A1 needs (hangul, particles, basic conjugation in 6 units) and B1-B2 needs (honorifics, indirect speech, passive/causative, 사자성어 in 20 units).
- **Dutch 6-4-10-10 is right FOR DUTCH.** It reflects Dutch's specific needs. But that doesn't make it a template.
- **German MIGHT legitimately need 8-6-8-8.** German has 4 grammatical cases, 3 genders, separable verbs, and a complex adjective declension system. A1 might genuinely need more space than Korean A1.
- **French MIGHT legitimately need 7-7-8-8.** French has complex verb morphology (14+ tenses), 2 genders with many irregular patterns, liaison/elision rules, and the subjunctive starts at B1.
- **Spanish MIGHT legitimately need 7-7-8-8.** Ser/estar, preterito/imperfecto, subjunctive mood (4 tenses), and the pronoun system all demand space.

### What P54 actually requires:
1. FIRST: Catalogue ALL concepts CEFR requires at each level for THIS specific language
2. THEN: Determine how many units each level needs based on those concepts
3. THEN: Compare current distribution against concept-driven distribution
4. The question is NOT "does this match Korean?" but "does this serve THIS language's learners?"

### Critical implication:
**Korean and Dutch are NOT exempt from this audit.** They must receive the same scrutiny:
- Does Korean A2 really need only 4 units? Or were concepts compressed?
- Does Dutch B1 really need 10 units? Or could some be consolidated?
- Every language gets examined with fresh eyes against its OWN requirements.

---

## Audit Scope: ALL 5 Languages, EQUAL Depth

| Language | File | Current Distribution | Status |
|----------|------|---------------------|--------|
| Korean | `src/data/units-korean.js` | 6-4-10-10 | Assumed correct. MUST VERIFY. |
| Dutch | `src/data/units-dutch.js` | 6-4-10-10 | Assumed correct. MUST VERIFY. |
| German | `src/data/units-german.js` | 8-8-7-6 | Flagged by D110. MUST EVALUATE per-language. |
| French | `src/data/units-french.js` | 8-8-8-6 | Flagged by D110. MUST EVALUATE per-language. |
| Spanish | `src/data/units-spanish.js` | 8-8-8-6 | Flagged by D110. MUST EVALUATE per-language. |

**COMPLETENESS IS KEY.** No language gets a free pass. No language gets measured against another language's template.

---

## Phase 1: Per-Language CEFR Concept Cataloguing + Distribution Evaluation

For EACH of the 5 languages (not just German/French/Spanish):

### Step 1: Catalogue what CEFR actually requires at each level
- Research official CEFR descriptors for A1, A2, B1, B2
- Cross-reference against language-specific exam frameworks:
  - Korean: TOPIK I/II, TTMIK
  - Dutch: NT2, Inburgeringsexamen
  - German: Goethe-Zertifikat A1-B2, TestDaF
  - French: DELF A1-B2, DALF
  - Spanish: DELE A1-B2, SIELE
- Cross-reference against major textbooks (per LINGOVERSE_MASTER_BIBLE.md)

### Step 2: Map current units to concept requirements
- For each unit, list the grammar concepts it teaches
- Determine: is this concept correctly placed at this CEFR level?
- Determine: does this level have enough units for its concepts, or are concepts crammed/padded?

### Step 3: Evaluate distribution per language
- Is each level's unit count justified by its concept load?
- Are B-levels getting adequate depth? (P51: B1+B2 >= A1+A2)
- Are A-levels inflated with content that could be consolidated?
- Are sub-level labels (A1.1, A1.2, etc.) consistent with no gaps?

### Step 4: Decide per language — confirm, relabel, or restructure
- **Confirm**: Distribution is correct for this language's needs
- **Relabel**: Content is fine but level boundaries are wrong
- **Restructure**: Content allocation needs adjustment (units moved, added, or consolidated)

---

## Phase 2: Deep P52 Teach-Before-Use Verification (All 5 Languages)

For EACH language:

1. Parse all quiz steps (mc, fb, drag_fill, match, tr)
2. Extract all target-language words the learner must know
3. Build cumulative "taught vocabulary" list from teach cards in lesson order
4. Check every quiz word against cumulative list
5. Flag and fix all violations

**Methodology**: Automated script-based, not sampling. Every quiz step checked.

**Agent requirement**: Opus for vocabulary analysis (Rule 11).

---

## Phase 3: Full P53 Checklist (All 5 Languages)

All 9 items, all 5 languages. No exceptions.

| # | Check | Method |
|---|-------|--------|
| 1 | CEFR Distribution (P51) | Phase 1 output |
| 2 | P8 Anti-Leak (5 types) | Spot-check 10+ mc/fb per level |
| 3 | P52 Teach-Before-Use | Phase 2 output |
| 4 | P48 Step Type Correctness | Automated grep: fb with {2} |
| 5 | P49 No Meta-Curriculum | Automated grep: CEFR labels in q/opts/ans |
| 6 | P22c No Em-Dashes | Automated grep |
| 7 | Density (P43) | Automated script |
| 8 | board:true | Automated script |
| 9 | Sub-level Label Consistency | Manual review of level fields |

---

## Execution Order

### Session 1 (THIS SESSION):
1. Write this plan document (DONE)
2. Update FULL_AUDIT_HANDOFF.md with the "no gold standard" correction
3. Run Phase 1 for German — concept catalogue + distribution evaluation
4. Run automated P53 checks (items 4-8) for German in parallel
5. Begin Phase 2 (P52) for German if time permits

### Session 2:
1. Phase 1 for French + Spanish (concept catalogue + distribution evaluation)
2. Automated P53 checks for French + Spanish
3. Phase 2 (P52) for French

### Session 3:
1. Phase 2 (P52) for Spanish
2. Phase 1 for Korean + Dutch (verify, not assume!)
3. Phase 2 (P52) for Korean + Dutch

### Session 4:
1. Phase 3: Full P53 final sweep, all 5 languages
2. Fix all remaining violations
3. Update CLAUDE.md, DECISION_LOG.md
4. D111 COMPLETE

### Flexibility clause:
Sessions may merge or expand based on findings. If Phase 1 reveals that a language needs restructuring (not just relabeling), that language gets its own dedicated session. P54 applies to the audit itself: the audit takes as long as it needs.

---

## Agent Deployment (Rule 13)

### Every audit agent receives:
- Complete Pipeline Rules (P8 through P54)
- P53 checklist (all 9 items)
- P54 anti-cramming doctrine (full text)
- **Explicit: "There is no gold standard distribution. Evaluate this language against ITS OWN requirements."**
- Language-specific official references
- Exact file paths

### Agent types:
- **Concept Catalogue Agent (Opus)**: Researches CEFR requirements for a specific language, cross-references exam frameworks, evaluates current distribution
- **Structural Scan Agent (Sonnet)**: P48/P49/P22c/density/board:true/sub-labels automated checks
- **P52 Deep Agent (Opus)**: Vocabulary extraction + teach-card tracing
- **P8 Spot-Check Agent (Sonnet)**: Hint/leak analysis

---

## Success Criteria

D111 is COMPLETE when:

1. **Every language's CEFR distribution has been evaluated against its own concept requirements** (not against another language). Each distribution is either confirmed correct or fixed with documented reasoning.

2. **P52 deep verification PASS** for all 5 languages. Zero unresolved violations. Evidence: automated script output.

3. **P53 full checklist PASS** for all 5 languages. All 9 items explicit PASS/FAIL. All FAILs resolved.

4. **No cramming anywhere.** Every language has the units and lessons its concepts require.

5. **All fixes committed, pushed, and built.** Code verified.

6. **CLAUDE.md + DECISION_LOG.md updated** with D111 results.

---

## Key Principle (Owner's Words)

> There is no gold standard distribution. ALL languages are different. Everything needs and deserves the SAME attention and audit work. COMPLETENESS is KEY.

This means:
- Korean gets audited with the same rigor as Spanish
- Dutch gets audited with the same rigor as German
- No language gets a pass because "it was built first" or "it already went through D92"
- Every distribution must be justified by that language's own pedagogical needs
- If Korean's 6-4-10-10 turns out to be wrong for Korean, we fix it
