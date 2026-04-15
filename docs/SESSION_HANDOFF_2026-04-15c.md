# Session Handoff — 2026-04-15c (7 Languages Live, 22,500+ Teach Cards)

> This is the DEFINITIVE handoff. Read `CLAUDE.md` first, then this file.

---

## HOW YOU WORK (Non-Negotiable)

**You work COMPLETELY AUTONOMOUSLY.** The owner is not a coder. You execute, deploy agents, merge results, validate, fix, push to main, and keep going until the job is done. The owner expects to come back and find things finished.

**The documentation IS the rulebook.** Every rule in `CLAUDE.md`, every PP-number, every decision in `docs/DECISION_LOG.md` is LAW. You follow them exactly.

**You validate until PERFECTION.** Zero PP8. Zero PP48. Zero PP22c. PP61 metalanguage in English everywhere. PP59 pos+gender on every card. PP64 teach-then-test. PP52 teach-before-use. Run the validators, fix what they find, run them again until they pass.

**You push to main after every milestone.** Create PR, merge, verify.

---

## Current State — 7 Languages Live

| Language | Units | Teach Cards | CEFR | Grammar | Density Status |
|----------|-------|-------------|------|---------|---------------|
| German | 36 | 5,148 | A1-B2 COMPLETE | 58 entries | GOLD STANDARD |
| Korean | 69 | 5,166 | A1-B2 COMPLETE | 47 entries | COMPLETE |
| Dutch | 89 | 5,106 | A1-B2 COMPLETE | mock quality | COMPLETE |
| French | 90 | 5,036 | A1-B2 COMPLETE | 52 entries | COMPLETE |
| Spanish | 92 | 5,124 | A1-B2 COMPLETE | 53 entries | COMPLETE |
| Italian | 32 | 1,129 | A1-B2 (A1+A2 expanded) | 12 entries | A1+A2 DENSE, B1+B2 THIN |
| Japanese | 29 | 892 | A1-B2 (A1+A2 expanded) | 20 entries | A1+A2 DENSE, B1+B2 THIN |

**Language selector cleaned:** Only these 7 languages shown. Others (Arabic, Chinese, Portuguese, Russian, Romanian, English-as-target) moved to `_ALL_LANGUAGES` in metadata.js until content is built.

---

## WHAT THE NEXT AGENT MUST DO (Priority Order)

### Priority 0: Validate EVERYTHING First
Before writing any new content, run full validation on Italian and Japanese:
```bash
# PP8 anti-leak
node scripts/pp8_validate.cjs --lang=italian
node scripts/pp8_validate.cjs --lang=japanese

# Build
npm run build
```
Fix any violations found. Zero tolerance.

### Priority 1: Italian + Japanese B1 Density Expansion
B1 units (Italian 13-24, Japanese 17-24) currently have ~20 cards each. Need 3 more lessons per unit.

Deploy density expansion agents (same pattern as A1+A2 expansion):
- Italian B1: 12 units x 3 lessons = 36 new lesson files (~720 new cards)
- Japanese B1: 8 units x 3 lessons = 24 new lesson files (~480 new cards)

### Priority 2: Italian + Japanese B2 Density Expansion
B2 units are even thinner. Same treatment:
- Italian B2: 8 units x 3 lessons = 24 new lesson files (~480 new cards)
- Japanese B2: 5 units x 3 lessons = 15 new lesson files (~300 new cards)

### Priority 3: Italian + Japanese B2 Completion (units to 36)
- Italian needs units 33-36 (4 more B2 units)
- Japanese needs units 30-36 (7 more B2 units)

### Priority 4: Full PP Pipeline Validation
After all content is built, run the COMPLETE validation pipeline on both:
- PP8 (all 5 leak types)
- PP43 (density cap)
- PP48 (fb single blank)
- PP52 (teach-before-use)
- PP59 (pos/gender)
- PP61 (metalanguage)
- PP64 (teach-then-test)
- PP22c (no em-dashes)

### Priority 5: Italian + Japanese CEFR Reference Data
Create `src/data/cefr-reference/italian.js` and `japanese.js` for the CefrReferencePage.

---

## Content Build Workflow (for density expansion)

### Step 1: Deploy Expansion Agent
```
Agent prompt: Add 3 more lessons to [LANG] [LEVEL] units [N-M].
Each lesson: ~20 teach cards + ~10 quiz steps. Max 30 steps.
Read existing unit files first. Write to _temp_uNN_expand_L0N.js files.
[Include AGENT_CONTENT_RULES.md in full]
```

### Step 2: Wire Expansion Lessons Into Units
For each unit file, add imports and spread into lessons array:
```javascript
import EXP_NN_L1 from './_temp_uNN_expand_L01.js';
// ... add to lessons: [...existingLessons, EXP_NN_L1, EXP_NN_L2, EXP_NN_L3]
```

### Step 3: Validate + Build + Push
```bash
npm run build
node scripts/pp8_validate.cjs --lang=italian
git add -A && git commit && git push
gh pr create && gh pr merge --merge
```

---

## File Structure

```
src/data/
  italian-v2/
    unit-01.js ... unit-32.js              (32 units)
    _temp_u01_expand_L01.js ... L03.js     (A1 expansion, 18 files)
    _temp_u07_expand_L01.js ... L03.js     (A2 expansion, 18 files)
    
  japanese-v2/
    unit-01.js ... unit-29.js              (29 units)
    _temp_u01_expand_L01.js ... L04.js     (A1 expansion, 20 files)
    _temp_u11_expand_L01.js ... L03.js     (A2 expansion, 18 files)
    
  units-italian-v2.js        -> imports A1+A2+B1+B2
  units-italian-v2-a1.js     -> units 1-6
  units-italian-v2-a2.js     -> units 7-12
  units-italian-v2-b1.js     -> units 13-24
  units-italian-v2-b2.js     -> units 25-32

  units-japanese-v2.js        -> imports A1+A2+B1+B2
  units-japanese-v2-a1.js     -> units 1-10
  units-japanese-v2-a2.js     -> units 11-16
  units-japanese-v2-b1.js     -> units 17-24
  units-japanese-v2-b2.js     -> units 25-29

  grammar/
    german.js (58), german-ar.js (58), dutch.js (mock),
    korean.js (47), french.js (52), spanish.js (53),
    italian.js (12), japanese.js (20)

scripts/
  pp8_validate.cjs            -> PP8 anti-leak (--lang=X)
  pp8_fix_position_length.cjs -> MC answer position shuffler
  pp8_fix_hint_leaks.cjs      -> Hint leak auto-fixer
  pp64_validate.cjs           -> PP64 teach-then-test (--lang=X)
```

---

## PRs Merged This Session (20 total)

#135-154: PP8 fixes, Spanish 5K, Italian+Japanese launch and expansion.

---

## Key Decisions

1. **Only 7 languages shown** in target selector. Others kept on file in `_ALL_LANGUAGES`.
2. **Density expansion pattern**: add lessons to existing units, not new units.
3. **Each language gets its own shape** (PP56). Italian/Japanese won't copy German's 36-unit count.
4. **B2 agents hit API 500 errors** midway. Partial output salvaged. Agents must be redeployed.
5. **Grammar modules inline** (not agent-written) for quality control.
6. **V2 units for Dutch/French/Spanish were NOT in lesson engine** before this session. Fixed.
