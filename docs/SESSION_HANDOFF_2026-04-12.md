# Session Handoff — 2026-04-12

## What Was Done This Session

### Format Migration (DONE — pushed to main)
All 4 V1 languages (Dutch, French, Spanish, Korean) got V2 **format** upgrades:
- Field renames: `nl`→`trg`, `en`→`src`, `exampleEn`→`exampleSrc`
- Per-unit file splits: `{lang}-v2/unit-NN.js` (30 files each)
- Per-level wrapper files + main re-export
- POS tags assigned heuristically (verb, noun, adj, etc.)
- Gender assigned (Dutch de/het, French m/f, Spanish m/f, Korean n/a)
- `funFact` field generated (cognate connections, etymology, POS-contextual)
- `kind`, `cognate`, `fRef` V1 fields removed
- Dutch: 347 cognate objects → funFact text + 22 compound breakdowns
- Korean: `hanja` and `deepDive` fields preserved
- PP8 hint leak fix: 1,755 leaks auto-fixed
- PP43 density: 3 Korean over-dense lessons trimmed
- Imports updated in `utils.js` and `dictionary.js`

### Engine Fixes (DONE — pushed to main)
- `_origTrg` renderer now parses `COMPOUND:` from `st.note` → chip bubbles
- `_origTrg` renderer now shows `st.funFact` in candy Fun Fact bubble
- German v2: 125 compound breakdowns added to `note` field
- AR bidi punctuation: 170 fixes

### What Was NOT Done — The Real V2 Rehaul

**CRITICAL: The format migration is only ~10% of a true V2 upgrade.** German v2 went from ~1,297 to 5,148 teach cards through a multi-phase content rehaul. The other 4 languages still have their original V1 content in V2 wrappers. Here's what each language needs:

---

## The Complete V2 Rehaul Pipeline (Per Language)

Reference: German v2 took ~3 weeks of intensive agent work. See `CLAUDE.md` section "German v2 Rehaul Progress" for the full history.

### Phase 0: Official Word Lists + Grammar Inventory
**Goal:** Establish what MUST be taught.

1. **Obtain official exam word lists:**
   - Dutch: NT2 Staatsexamen word list (A2-B2), Inburgering vocabulary
   - French: DELF/DALF word lists (A1-B2), FLE référentiel
   - Spanish: DELE word lists (A1-B2), Plan Curricular del Instituto Cervantes (PCIC)
   - Korean: TOPIK word lists (levels 1-4), already partially done (see `docs/korean/`)

2. **Grammar construct inventory per CEFR level:**
   - List ALL grammar constructs required at each level
   - Map each to existing units or mark as gap
   - German had 118 constructs → all mapped

3. **V1 salvage analysis:**
   - Audit existing V1 content for reusable teach cards, verb tables, tip cards
   - Don't rebuild from scratch — Rule F.2: "Salvage everything, throw away nothing"

### Phase 1: Curriculum Design
**Goal:** Design the unit structure before writing content.

1. **CEFR distribution:** Decide unit count per level based on concept catalogue (PP56)
   - German: 6-6-12-12 (A1-A2-B1-B2 = 36 units)
   - Other languages may need different distributions based on FSI difficulty

2. **Concept-to-unit mapping:** Each unit covers specific vocab themes + grammar constructs
   - No cramming (PP54), no padding
   - B1+B2 ≥ A1+A2 units (PP51)

3. **Story arc design:** (optional but recommended)
   - Verumius protagonist adapted per language culture
   - Scene breakdowns per unit

### Phase 2: Content Build (A1 → A2 → B1 → B2)
**Goal:** Write the actual teach cards, quiz steps, tips, verb tables.

**Per CEFR level, in order:**

1. **Vocab mapping:** Map every official word list entry to a unit + lesson
2. **Teach card writing:** Every word gets: `trg`, `src`, `pos`, `gender`, `note` (~100 chars), `example` (A/B dialogue), `exampleSrc`, `funFact` (etymology/cultural)
3. **Grammar tips:** Explain constructs at the right level
4. **Verb tables:** Conjugation grids for key verbs
5. **Quiz interleaving:** mc/fb/match/drag_fill quizzes between teach card groups
   - Max 6 consecutive teach cards before a quiz
   - Every teach card must be tested (PP64)
6. **Lesson design:** Each lesson 15-32 steps, intro + teach + quiz + review
7. **Density enforcement:** PP43 during build, not after

### Phase 3: Validation
**Goal:** Zero violations across all checks.

Run in this order (PP53 audit checklist):
1. ✅ PP43 density (max 32 steps per lesson)
2. ✅ PP8 anti-leak (all 5 types: visual, script, hint, pattern, position)
3. PP52 teach-before-use (every quiz word traces to prior teach card)
4. PP48 step types (fb = single blank, drag_fill = multi-blank)
5. PP59 pos/gender on every teach card
6. PP61 metalanguage in source language (English for EN-source courses)
7. PP64 teach-then-test (every teach card quizzed)
8. PP55 vocab completeness (every official exam word has a teach card)
9. PP57 grammar completeness (every grammar construct taught + practiced)
10. PP22c no em-dashes

### Phase 4: Post-Build Polish
- Quiz translations (sSrc fields on fb/drag_fill)
- Compound breakdowns for compound-heavy words
- Story cards (if story system enabled)

---

## Current State Per Language

### Dutch (30 units, 1,233 teach cards)
- **Format:** V2 ✅ (per-unit files, POS, gender, funFact)
- **Official word list coverage:** NOT CHECKED. NT2/Inburgering word lists not mapped.
- **Grammar constructs:** NOT AUDITED. Dutch grammar module exists (`src/data/grammar/dutch.js`) but is MOCK quality (see memory: `feedback_dutch_grammar_mock.md`).
- **Estimated gap:** ~2,000-3,000 teach cards need to be ADDED to reach German-level completeness.
- **Estimated work:** Major. Dutch is owner's native language — quality bar is highest.
- **Key note:** 347 cognate connections preserved from V1. These are valuable.

### French (30 units, 1,092 teach cards)
- **Format:** V2 ✅
- **Official word list coverage:** NOT CHECKED. DELF/DALF lists not mapped.
- **Grammar constructs:** NOT AUDITED. No French grammar module exists.
- **Estimated gap:** ~2,500-3,500 teach cards needed.
- **Key note:** French is the largest V1 file (2.22 MB). Content is decent but missing B1/B2 depth.

### Spanish (30 units, 1,262 teach cards)
- **Format:** V2 ✅
- **Official word list coverage:** NOT CHECKED. DELE/PCIC lists not mapped.
- **Grammar constructs:** NOT AUDITED. No Spanish grammar module exists.
- **Estimated gap:** ~2,500-3,500 teach cards needed.
- **Key note:** Similar structure to French. Good A1/A2, thin B1/B2.

### Korean (30 units, 1,266 teach cards)
- **Format:** V2 ✅
- **Official word list coverage:** PARTIALLY DONE. TOPIK coverage report exists at `docs/korean/TOPIK_COVERAGE.md` (if it exists — check).
- **Grammar constructs:** NOT FULLY AUDITED. Korean has complex honorific/politeness system.
- **Estimated gap:** ~2,000-3,000 teach cards needed.
- **Key note:** Most audited V1 language. Has hanja field (18 cards), rich deepDive content (523 cards). Korean conjugation engine exists (`src/data/korean-conjugation.js`).

### German v2 (36 units, 5,148 teach cards) — THE TEMPLATE
- **Format:** V2 ✅ PERFECT
- **Word list coverage:** PP55 99.8% (Goethe-Wortliste 3,303 lemmas)
- **Grammar constructs:** PP57 PASS (118 constructs, all taught + practiced)
- **Validation:** ALL PASS — PP8 (0/3,482), PP43 (0), PP48 (0), PP52 (PASS), PP59 (PASS), PP61 (PASS), PP64 (99.9%)
- **Story:** 36 episodes, 144 scene breakdowns
- **This is the gold standard.** Every other language should match this quality.

---

## Agent Strategy for V2 Rehaul

### Rule B.7: MAX 4 agents at a time. NEVER MORE.
### Rule B.14: Sonnet for validation + translation. Opus ONLY for creative content.
### Rule B.8: Every content agent MUST include `docs/agents/AGENT_CONTENT_RULES.md` in full.
### Rule C.3: Sequential content + parallel validators.

### Recommended Approach: One Language at a Time

1. **Start with Dutch** (owner's native language, highest priority)
2. Then French (Romance template)
3. Then Spanish (shares Romance structure with French)
4. Korean last (most different, already most audited)

### Per-Language Agent Workflow

**Step 1: Word list acquisition** (1 research agent)
- Fetch official CEFR word lists for the target language
- Cross-reference against existing teach cards
- Report gaps: words present in exam list but missing from curriculum

**Step 2: Grammar inventory** (1 research agent)
- List all grammar constructs per CEFR level
- Cross-reference against existing tip cards and verb tables
- Report gaps: constructs not yet taught

**Step 3: Curriculum redesign** (main session)
- Decide unit count and distribution
- Map words and grammar to units
- Design lesson blueprints

**Step 4: Content build** (2 Opus agents, sequential, 1 unit at a time)
- Agent 1: Write new teach cards + quizzes for gaps in one unit
- Agent 2: Review + validate that unit
- Rule B.4: Max 20 new vocab words per agent lesson

**Step 5: Validation** (2 Sonnet validators, parallel)
- PP8 scan + PP52 + PP64 + PP43 + PP48

**Step 6: Push to main** after each CEFR level passes validation

---

## Scripts Available

| Script | Purpose |
|--------|---------|
| `scripts/v2_upgrade.cjs` | Format migration (nl→trg, split files). Already run. |
| `scripts/enrich_funfacts.cjs` | Generate funFact for teach cards missing them. |
| `scripts/enrich_german_compounds.cjs` | Add COMPOUND breakdowns to German nouns. |
| `scripts/enrich_dutch_compounds.cjs` | Add COMPOUND breakdowns to Dutch nouns. |
| `scripts/fix_compound_placement.cjs` | Move COMPOUND from funFact to note field. |
| `scripts/fix_ar_bidi_punct.cjs` | Fix Arabic RTL punctuation. |
| `scripts/validate_all.cjs` | Universal PP8/PP43/PP48/PP64 validator for any language. |
| `scripts/pp8_validate.cjs` | German-specific PP8 validator (more thorough). |
| `scripts/pp64_validate.cjs` | German-specific PP64 validator. |

---

## Key Files to Read First

1. `CLAUDE.md` — All rules, all pipeline principles, all agent rules
2. `docs/agents/AGENT_CONTENT_RULES.md` — Mandatory for every content agent
3. `docs/agents/FORMAT_TEMPLATE.js` — Step type format reference
4. `docs/vision/VERUMLINGUA_REHAUL_VISION.md` — Platform vision (supersedes CLAUDE.md on conflicts)
5. This handoff document

---

## What the Next Agent Must Do

1. **Read this handoff + CLAUDE.md in full.** No shortcuts.
2. **Pick one language** (Dutch recommended first).
3. **Acquire the official word list** for that language's CEFR levels.
4. **Run a gap analysis** against existing teach cards.
5. **Design the curriculum expansion** (how many new units, where do new words go).
6. **Build content systematically** — one CEFR level at a time, push after each.
7. **Validate everything** with the automated scripts + manual spot checks.
8. **Repeat for next language.**

This is NOT a one-session job. Each language is ~1-2 full sessions of intensive agent work. German took ~3 weeks. With the pipeline now established, the others should be faster but still substantial.

---

## Session Stats
- Commits pushed: 8
- Total teach cards across platform: ~9,901 (German 5,148 + Dutch 1,233 + French 1,092 + Spanish 1,262 + Korean 1,266)
- PP8 fixes applied: 1,755 + 170 (AR bidi)
- Engine fixes: compound bubble renderer + funFact bubble for V2 cards
- New scripts: 3 (validate_all.cjs, fix_pp48.cjs, fix_compound_placement.cjs)
