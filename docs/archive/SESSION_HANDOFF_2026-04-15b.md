# Session Handoff — 2026-04-15b (Italian + Japanese Launch: 1,014 Teach Cards)

> Read after `docs/SESSION_HANDOFF_2026-04-15.md`. This is the CONTINUATION session.

---

## What Was Accomplished

### The Numbers

| Language | Before | After | Added | Units | vs German (5,148) |
|----------|--------|-------|-------|-------|-------------------|
| Italian | 0 | 607 | +607 | 26 | 12% (NEW) |
| Japanese | 0 | 407 | +407 | 23 | 8% (NEW) |
| Spanish | 4,961 | 5,124 | +163 | 92 | 100% |
| **Total new** | **0** | **1,177** | **+1,177** | **141** | — |

**Grand total across all languages: ~22,290 teach cards, 387 units, 7 languages.**

### Italian (NEW — from zero to 607 cards)
- **A1 (6 units)**: Greetings, Numbers/Days, Family, Cafe, Home, City
- **A2 (6 units)**: Restaurant, Shopping, Health, Travel, Past tense (avere), Past tense (essere)
- **B1 (12 units)**: Subjunctive, Work, Housing, Advanced Health, Media, Environment, Emotions, Education, Conditional, Culture, Politics, If-clauses
- **B2 (2 units)**: Economy, Law (agents producing more)
- **Grammar module**: 12 entries across A1-B2 (pronouns through periodo ipotetico)
- **Flag SVG**: Italian tricolor added to CountryFlag
- **Infrastructure**: LANGUAGES, foundations, FK_PLAYTHROUGH, all wrappers

### Japanese (NEW — from zero to 407 cards)
- **A1 (10 units)**: Greetings, Self-intro, Objects, Shopping, Food, Family, Time, Places, Shopping 2, Weather
- **A2 (6 units)**: て-form, Ability, Experience, Opinions, Directions, Plans
- **B1 (7 units)**: Passive, Causative, Conditionals, Keigo, Society, Giving/Receiving, Nominalization
- **Grammar module**: 20 entries across A1-B2 (hiragana through keigo, register)
- **Infrastructure**: LANGUAGES, foundations, FK_PLAYTHROUGH, all wrappers

### Spanish Completion
- +163 B2 teach cards (10 lessons, 2 units: Media/Technology + Society/Culture)
- Total: 5,124 — now at 100% of German benchmark

### Grammar Modules (184 new entries total)
- Korean: 47 entries (TOPIK, A1-B2)
- French: 52 entries (DELF, A1-B2)
- Spanish: 53 entries (DELE, A1-B2)
- Italian: 12 entries (CILS, A1-B2)
- Japanese: 20 entries (JLPT, A1-B2)
- All wired to GrammarPage

### PP8 Validation Fixes
- Position leaks: 671 eliminated (was clustering answers in position 0)
- Hint leaks: 277 reduced to ~90 (remaining are V1 edge cases)
- New scripts: `pp8_fix_position_length.cjs`, `pp8_fix_hint_leaks.cjs`
- PP8 validator updated to scan V2 temp lesson files

### Infrastructure
- Dutch/French/Spanish V2 units wired into lesson engine (were dictionary-only)
- Italian + Japanese + Portuguese added to LANGUAGES
- CountryFlag: Italian tricolor + Portuguese flag SVGs
- Italian: A1/A2/B1/B2 wrapper files
- Japanese: A1/A2/B1 wrapper files

---

## PRs Merged (10 total)

| PR | Content |
|----|---------|
| #135 | PP8 fixes, Spanish 5K, Italian/Japanese scaffolding, V2 wiring |
| #136 | Korean grammar, Italian grammar, content expansion |
| #137 | French+Spanish grammar (105 entries), Italian/Japanese expansion |
| #138 | Italian A1 complete (unit-06) |
| #139 | Italian 10 units + Japanese 8 units + grammar + flags |
| #140 | Italian 16 units + Japanese 16 units |
| #141 | Italian 20 units + Japanese 18 units — A1 through B1 |
| #142 | Italian 21 units (479 cards) + Japanese 20 units (356 cards) |
| #143 | Italian B1 COMPLETE + Japanese B1 — 931 teach cards |
| #144 | Italian 26 units (607) + Japanese 23 units (407) — 1,014 total |

---

## What the Next Agent MUST Do

### Priority 1: Complete Italian B2 (units 27-36)
- Units 25-26 exist (Economy, Law). Need 27-36.
- Agent was deploying units 27-32 when this session ended.
- After 32, deploy agent for 33-36 (final Italian units).
- Target: 36 total units matching German structure.

### Priority 2: Complete Japanese B2 (units 24-36)
- Unit 23 exists (Nominalization). Need 24-36.
- Agent was deploying units 24-29 when this session ended.
- After 29, deploy agent for 30-36.
- Target: 36 total units.

### Priority 3: Run Full Validation Pipeline
```bash
node scripts/pp8_validate.cjs --lang=italian
node scripts/pp8_validate.cjs --lang=japanese
npm run build
```

### Priority 4: Expand to 5K Teach Cards
Italian and Japanese each need ~4,500 more teach cards to reach German parity.
This requires the same workflow used for Korean/Dutch/French/Spanish:
1. Extract B2 gap words from CEFR reference lists
2. Deploy batch agents (20 lessons, ~200 cards per batch)
3. Merge into units, validate, push
4. Repeat until 5K reached

---

## File Structure

```
src/data/
  italian-v2/unit-01.js ... unit-26.js    (26 units, 607 cards)
  japanese-v2/unit-01.js ... unit-23.js   (23 units, 407 cards)
  
  units-italian-v2.js           -> imports from 4 per-level files
  units-italian-v2-a1.js        -> units 1-6
  units-italian-v2-a2.js        -> units 7-12
  units-italian-v2-b1.js        -> units 13-24
  units-italian-v2-b2.js        -> units 25-26

  units-japanese-v2.js           -> imports from 3 per-level files
  units-japanese-v2-a1.js        -> units 1-10
  units-japanese-v2-a2.js        -> units 11-16
  units-japanese-v2-b1.js        -> units 17-23

  grammar/italian.js             (12 entries)
  grammar/japanese.js            (20 entries)
  grammar/korean.js              (47 entries)
  grammar/french.js              (52 entries)
  grammar/spanish.js             (53 entries)

scripts/
  pp8_fix_position_length.cjs    (MC answer position shuffler)
  pp8_fix_hint_leaks.cjs         (hint leak auto-fixer)
```

---

## Key Decisions

1. **Italian and Japanese launched simultaneously** — both part of the "7-target thesis" (covers ~95% of global language learning demand)
2. **Portuguese added to LANGUAGES** — infrastructure ready, no content yet
3. **B2 agents hit API 500 errors** — redeployed, some partial output (units 25-26 IT, unit 23 JA) salvaged
4. **Grammar modules written inline** (not by agents) for Italian and Japanese — ensures quality
5. **V2 units for Dutch/French/Spanish were NOT in lesson engine** — critical fix, now wired
