# French A1-B2 Build Handoff (D105) — COMPLETED

> **Date**: 2026-03-16
> **Predecessor**: German D103/D104 (30 units, 240 lessons, 4,518 steps)
> **Status**: **COMPLETE** — French A1-B2 fully built and deployed.
> **Result**: 30 units, 240 lessons, 4,380 steps, 883/883 teach cards with dialogues (100%)
> **Agent model**: Opus 4.6 (Sonnet agents failed repeatedly — see D106)

---

## BUILD COMPLETE

French A1-B2 curriculum has been fully built and verified:
- LANG_BLUEPRINT["fr"]: COMPLETE
- Foundations (knowledge + playthrough + gate quiz): COMPLETE
- 30 units (U1-U30), 240 lessons, 4,380 steps: COMPLETE
- Quality scan: P48=0, P22c=0, P49=0, board:true=240/240, unit ordering=PASS
- Dialogue enrichment: 883/883 (100%)
- Build: PASSES (Vite)

**Key lesson learned (D106)**: Sonnet-tier agents consistently went stale or became unresponsive during large content generation. Opus 4.6 agents completed all tasks reliably. Rule 11 now mandates Opus 4.6 for all future content generation.

**Next language**: Spanish A1-B2. See CLAUDE.md handoff section.

---

## Original Handoff Document (Historical Reference)

The original planning content below is preserved for reference.

---

## What This Document Was

This was the handoff document for building the French A1-B2 curriculum from scratch. It contained: what existed, what needed to be built, the execution plan, and lessons learned from previous builds.

---

## Lessons Learned from German D103/D104 (CRITICAL)

The German build was completed successfully but shipped with 3 critical defects that caused a **white screen crash in production**. These MUST NOT be repeated:

### Defect 1: Stray Commas Creating Undefined Array Elements
**What happened**: When multiple parallel agents built units and appended them to `units-german.js`, 3 stray commas between units created `undefined` holes in the JavaScript array. The array had 33 elements (30 real + 3 undefined) instead of 30.
**Why Vite didn't catch it**: `[{...}, , {...}]` is valid JavaScript (sparse array). It compiles fine. But React crashes when reading `.n` or `.lessons` on `undefined`.
**Prevention**: After EVERY append to the units file, validate the array has no undefined elements. Use the validation script in CLAUDE.md Rule 10.

### Defect 2: MC Steps Missing `ans` Field
**What happened**: 3 multiple-choice steps were written without the `ans` field. The engine crashed when comparing the learner's selection against `undefined`.
**Prevention**: The validation script checks every `type:"mc"` step for `q`, `opts`, and `ans`. Run it after every unit build.

### Defect 3: Units Built Out of Order
**What happened**: Parallel agents built units non-sequentially (U9 before U6, U12 before U7, etc.). The engine displays units in array order with NO sort. Learners saw scrambled progression.
**Prevention**: Build units sequentially (1, 2, 3, ...). If parallel agents are used, sort the file before committing. The validation script checks `u.n === i + 1`.

### Defect 4: P8 Hint-Reveals (491 found in audit)
**What happened**: Build agents generated hints that contained the answer word verbatim. Example: hint "Use 'Hallo' here" for a quiz where 'Hallo' is the answer.
**Prevention**: Every hint must GUIDE, never REVEAL. Check that no hint contains the `ans` string. Use semantic hints ("The universal greeting word" instead of "Use Hallo").

---

## French Infrastructure Inventory

### Already Built (DO NOT rebuild):
| Component | Location | Details |
|-----------|----------|---------|
| LANGUAGES entry | `metadata.js:131` | code:"fr", name:"French", flag, native, greeting, welcomeBack |
| BASE_LANGUAGES | `metadata.js:148` | French as available source language |
| LANG_META["fr"] | `metadata.js:300` | scriptType:"latin", CEFR, ttsLocale:"fr-FR", specialRules |
| CULTURE_PACKS["fr"] | `metadata.js:367` | food, customs, places, situations, politeness, taboos |
| ARTICLE_SYSTEMS["fr"] | `vocabulary.js:2433-2442` | le (masc/blue), la (fem/coral), detect with l' elision |
| FK_SCHEMA_MAP["fr"] | `metadata.js:235` | fr:"latin" |
| FOUNDATIONS_BY_LANG["fr"] | `foundations.js:1244-1262` | 1 section, 5 items (alphabet, accents, nasals, sounds, silent letters) |
| FK_PLAYTHROUGH["fr"] | `foundations.js:2238` | Empty shell: stages:[] |
| MKG translations | `metadata.js:401-405` | French translations for unit template titles |

### Must Be Built:
| Component | Location | Action |
|-----------|----------|--------|
| LANG_BLUEPRINT["fr"] | `metadata.js` after line ~355 | Full linguistic DNA document |
| FOUNDATIONS_BY_LANG["fr"] expansion | `foundations.js:1244` | 1 section -> 5-6 sections, ~25 items |
| FK_PLAYTHROUGH["fr"] stages | `foundations.js:2238` | Fill stages array, ~15-20 lessons |
| FK_GATE_QUIZ["fr"] | `foundations.js` after FK_GATE_QUIZ["de"] | 5 tasks, ~35 items |
| units-french.js | `src/data/` | New file, ~28-30 units |
| Import in lingoverse.jsx | `src/lingoverse.jsx` | New import + UNITS spread |

---

## French Curriculum Architecture

### Gender System (2-way: le/la)
- Masculine (le): le livre, le chat, le soleil
- Feminine (la): la maison, la table, la lune
- Elision before vowels: l'homme, l'école (gender hidden!)
- Plural for both: les
- Article colors: le = blue (#4A8FE7), la = coral (#E8475E)

### Verb System (the mountain)
- **3 regular groups**: -er (parler), -ir (finir), -re (vendre)
- **Major irregulars**: être, avoir, aller, faire, pouvoir, vouloir, devoir, savoir, voir, prendre, mettre, dire, écrire, lire, connaître, vivre
- **Tense progression**: Présent (A1) -> Passé composé (A2) -> Imparfait (A2) -> Futur simple (A2) -> Conditionnel (A2/B1) -> Subjonctif (B1) -> Plus-que-parfait (B1) -> Conditionnel passé (B2) -> Subjonctif passé (B2)

### Key Challenges for English Speakers
1. **Gendered nouns** — every noun is le or la, must memorize
2. **Nasal vowels** — an/en, on, in/ain, un have no English equivalent
3. **Liaison** — silent final consonants pronounced before vowels
4. **Passé composé vs imparfait** — the existential crisis of French learners
5. **Subjonctif** — mood triggered by specific constructions, not intuitive
6. **Tu vs vous** — social minefield, more complex than German du/Sie
7. **Silent letters everywhere** — ils parlent = /il parl/ (the -ent is silent!)

### DELF/TCF Alignment
- A1: DELF A1 (survival French, basic interactions)
- A2: DELF A2 (simple daily tasks, past tense basics)
- B1: DELF B1 (independent user, subjunctive introduction)
- B2: DELF B2 (advanced argumentation, nuanced expression)

---

## Execution Checklist

### Phase 0: Infrastructure (commit after each)
- [ ] Build LANG_BLUEPRINT["fr"] in metadata.js
- [ ] Expand FOUNDATIONS_BY_LANG["fr"] to 5-6 sections / ~25 items
- [ ] Build FK_PLAYTHROUGH["fr"] stages (~15-20 lessons)
- [ ] Build FK_GATE_QUIZ["fr"] (5 tasks, ~35 items)
- [ ] Create `src/data/units-french.js` (empty export)
- [ ] Update `src/lingoverse.jsx` imports and UNITS spread
- [ ] Verify build passes

### Phase 1: A1 (U1-U8)
- [ ] Build U1-U8 sequentially (8 lessons each, 18+ steps per lesson)
- [ ] Quality audit: P8, P34, P44, P48, P49
- [ ] Validation script: 0 issues
- [ ] Commit and push

### Phase 2: A2 (U9-U16)
- [ ] Build U9-U16 sequentially
- [ ] Quality audit
- [ ] Validation script: 0 issues
- [ ] Commit and push

### Phase 3: B1 (U17-U24)
- [ ] Build U17-U24 sequentially
- [ ] Quality audit
- [ ] Validation script: 0 issues
- [ ] Commit and push

### Phase 4: B2 (U25-U30)
- [ ] Build U25-U30 sequentially
- [ ] Quality audit
- [ ] Validation script: 0 issues
- [ ] Commit and push

### Phase 5: Final Validation (D104 compliance)
- [ ] Run Rule 10 structural validation on complete file
- [ ] Verify 0 undefined elements, sequential ordering, 0 missing fields
- [ ] Run `npm run build` — must pass
- [ ] Cross-level sweep: P8, P48, P49, density
- [ ] Update CLAUDE.md build status
- [ ] Final commit and push

---

## Quality Gates (Non-Negotiable)

Every lesson must pass ALL of these before the agent moves to the next:

| Gate | Rule | Check |
|------|------|-------|
| Density | P43 | 18+ steps per lesson |
| Teach before test | P34 | Every quiz word must have a prior teach card |
| No hint-reveals | P8/P44 | Hints must not contain the answer; 15+ chars |
| Step type match | P48 | fb = single blank only; multi-blank = drag_fill |
| No CEFR in content | P49 | Learners never see A1/A2/B1/B2 labels |
| No em-dashes | P22c | Use periods, colons, \n bullets instead |
| board:true | D21 | Every lesson, no exceptions |
| Dialogues | D100 | Every teach card has A:/B: dialogue |
| Article colors | - | Every noun has le/la in the nl field |
| Sequential ordering | D104 | Units must be in n:1, n:2, n:3... order |
| No undefined elements | D104 | Array must have 0 holes |
| All MC have ans | D104 | Every mc step has q, opts, ans |
