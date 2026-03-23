# VerumLingua Master Batch Plan: German A1-B2 Curriculum Rehaul

## Context

The owner demands a fundamental shift in workflow: **plan EVERYTHING before writing a single line of content**. The existing German v1 curriculum (30 units, 258 lessons) was built from templates, not concepts. The v2 rehaul (1 unit built so far) introduces a completely new format: story-driven episodes with Verumius as protagonist, 2-bubble teach cards with fun info, interleaved lesson flow, full grammar tagging, and Midjourney art integration.

German is the **template language** — every decision gets documented as a reusable playbook for Korean, Dutch, French, Spanish.

**Goal**: Build a certification-grade German A1-B2 curriculum with zero errors, validated by multiple agents, with a complete Midjourney asset list, all before writing production content.

---

## Phase 0: Foundation (Sessions 1-2)

**What**: Obtain and document ALL official reference material. This is the single source of truth for everything that follows.

### 0A: Goethe-Institut Word Lists
- Web-search for freely available Goethe-Wortliste PDFs (A1/A2/B1 published, B2 from exam prep)
- Structure into `docs/german/goethe-wordlist-a1.md` through `b2.md`
- Each word tagged: word, article/gender, POS, level, domain
- Cross-reference against existing v1 teach cards → produce COVERAGE REPORT (what's taught vs. gaps)
- **Deliverable**: Structured word lists + gap report

### 0B: Grammar Inventory
- Verify the 116 catalogued constructs (from D119) against Goethe exam descriptions + Dreyer & Schmitt
- Every construct: name, level, official source citation, teaching unit assignment
- **Deliverable**: Grammar inventory table with citations (Rule 14: every claim has a source)

### 0C: Communicative Functions
- Map all 60 CEFR functions (15 A1 + 14 A2 + 15 B1 + 16 B2) to story episodes
- **Deliverable**: Function-to-episode mapping table

### 0D: Salvage Extraction
- Run extraction script on v1 `units-german.js` (1,437 teach cards, 2,920 quiz steps)
- Tag each: REUSABLE / RELOCATE / REWRITE / DISCARD
- **Deliverable**: `docs/salvage/german-*.json` files

### Agents
| Agent | Model | Task |
|-------|-------|------|
| Vocab Research | Opus | Web search + compile Goethe word lists |
| Coverage Comparison | Sonnet | Grep v1 teach cards vs. word lists |
| Grammar Research | Opus | Cross-ref 116 constructs vs. official sources |
| Function Mapper | Sonnet | Map 60 functions to episodes |
| Salvage Extractor | Sonnet | Parse + tag v1 content |

### Gate G0
Word lists documented with sources. Grammar inventory verified with citations. Salvage extracted. ALL gaps identified.

---

## Phase 1: Story Arc Planning (Session 3)

**What**: Validate and complete the full Verumius-in-Berlin story across all 36 episodes.

### 1A: Arc Verification
- Verify D119 story bible: no plot holes, natural character introductions, grammar fits story context
- Character introduction schedule: Dr. Yilmaz (U1), Hildi (U3), Lukas (U5), KD (U6), Mia (A2 U4), Opa Heinrich (A2 U5)
- Genre progression: A1 sitcom → A2 social comedy → B1 adventure comedy → B2 dramedy
- 15 German cultural anchors mapped to specific episodes

### 1B: Episode Scene Design
- Per episode: 4 scenes (intro / development / climax / resolution)
- Each scene: location, characters present, mood, cinematic vs. bubble mode
- Character expressions needed per scene
- Background scene descriptions for Midjourney

### Agents
| Agent | Model | Task |
|-------|-------|------|
| Story Coherence | Opus | Validate 36-episode arc, flag forced grammar |
| Scene Designer | Opus | Break each episode into 4 scenes with visual specs |

### Gate G1
Story arc validated. All 36 episodes have scene breakdowns. No forced grammar, no cultural issues, no plot holes.

---

## Phase 2: A1 Deep Planning (Sessions 4-5)

**What**: Map EVERY A1 word, grammar construct, and communicative function to specific lessons. Design exact lesson flows.

### 2A: Vocabulary Mapping
- Distribute all ~650 Goethe A1 words across 6 units by theme
- Assign teach card count per lesson (12-20 for vocab, mixed for story/grammar)
- Draft fun info type per word (etymology / cultural / memory hook)
- Build cumulative PP52 tracker: running word total after each lesson

### 2B: Grammar Construct Mapping
- Map all 26 A1 constructs to: introduction lesson + 3 quiz steps + 2 recycle appearances
- PP26 seeding plan: which A2+ constructs appear naturally in A1 stories
- Lesson flow per unit: Story → Vocab → Story → Grammar → Story → Quiz → Resolution

### 2C: Communicative Functions (A1)
- Map all 15 A1 functions to story scenes + quiz practice
- Every function must have actual practice, not just exposure

### 2D: Lesson-Level Design
- Design exact flow for each of ~48 A1 lessons
- Per lesson: type, step count target, step sequence outline, new vocab, active grammar, characters, scene mode
- Running PP52 verification after each lesson

### Agents
| Agent | Model | Task |
|-------|-------|------|
| A1 Vocab Mapper | Opus | Distribute 650 words to units, draft fun info |
| A1 Grammar Mapper | Opus | Map 26 constructs with teach/practice/recycle |
| A1 Lesson Designer | Opus | Design all ~48 lesson outlines |
| A1 Design Validator | Sonnet | Cross-check outlines: PP43, PP52, PP55, PP57 |

### Gate G2
Every A1 word assigned. Every construct mapped (teach + 3 quiz + 2 recycle). Every function covered. All lesson outlines validated by Sonnet.

---

## Phase 3: Cross-Level Seeding (Session 6)

**What**: Broadly plan A2/B1/B2 to verify A1 doesn't front-load, miss seeding, or create dead ends.

### 3A: Broad Planning
- A2: 6 units, ~650 new words, 25 constructs (Perfekt, dative, Wechselpräpositionen)
- B1: 12 units, ~1,100 new words, 33 constructs (passive, Konjunktiv II, relative clauses)
- B2: 12 units, ~1,600 new words, 32 constructs (Konjunktiv I, nominalization, advanced passive)
- Cross-level seeding map: A1 lessons that seed A2+ concepts

### 3B: PP26 Core Constructs
- Verify show-before-name-before-elaborate sequence for every construct
- No quiz tests a construct before formal teaching

### 3C: Character Arc Verification
- Trace each character across all 36 episodes
- Verify growth arcs, register shifts (Hildi offers du in B1), no character disappears 6+ episodes

### Agents
| Agent | Model | Task |
|-------|-------|------|
| Cross-Level Planner | Opus | Broad A2/B1/B2 allocation, verify no conflicts |
| PP26 Verifier | Sonnet | Check construct introduction sequence |
| Character Arc | Sonnet | Trace 6 characters across 36 episodes |

### Gate G3
All 4 levels have allocations summing to complete official lists. Seeding confirmed. Character arcs validated.

---

## Phase 4: A1 Content Writing (Sessions 7-10)

**What**: Write all A1 content in v2 format from the validated plans. Zero tolerance for errors.

### Writing Process (Rule 9 + Rule 11 + Rule 12)

**3 batches of 2 units each, sequential:**

| Batch | Units | Opus writes | Sonnet writes | Then |
|-------|-------|-------------|---------------|------|
| 1 | U1-U2 | `/tmp/de-v2-u1.js` | `/tmp/de-v2-u2.js` | Sonnet validates U1, Opus validates U2 |
| 2 | U3-U4 | `/tmp/de-v2-u3.js` | `/tmp/de-v2-u4.js` | Cross-validate |
| 3 | U5-U6 | `/tmp/de-v2-u5.js` | `/tmp/de-v2-u6.js` | Cross-validate |

### Content Writer Briefing (every agent gets ALL of this)
- Full v2 format spec (existing Unit 1 as reference)
- Lesson outline from Phase 2D
- Vocabulary list with fun info drafts
- Grammar constructs for this unit
- Story scene descriptions with character moods
- ALL pipeline rules: PP8, PP22c, PP34/PP52, PP43, PP44, PP48, PP49, P59
- German rules: proper ä/ö/ü/ß, der/die/das colors, article accuracy
- Cumulative vocabulary (all words taught in prior units)
- Temp file path
- Minimum step counts per lesson type

### Validator Agents (run after each batch)
| Validator | Model | Checks |
|-----------|-------|--------|
| PP8 Leak Validator | Sonnet | All 5 leak types (visual, script, hint, pattern, position) |
| PP52 Teach-Before-Use | Sonnet | Every quiz word has prior teach card (FULL scan, no sampling) |
| PP48/PP49 Structural | Sonnet | fb single-blank, no CEFR labels, no em-dashes |
| Density Validator | Sonnet | 18+ steps/lesson, quality check (Rule 8) |
| Umlaut Scanner | Sonnet | Zero ASCII transliterations (ue/oe/ae/ss) |

### Post-Merge Validation (after all 3 batches)
- Rule 10 structural validation script (no undefined elements, unit ordering, required fields)
- `npm run build` compilation check
- PP55: compare all teach card `trg` fields against Goethe A1 list → zero gaps
- PP57: grammar inventory table → every construct has teach + 3 quiz + 2 recycle

### A1 Full Audit (15-item PP53)
1. ✅ CEFR distribution (6 A1 units, labels correct)
2. ✅ PP8 all 5 leak types (20+ samples per level)
3. ✅ PP52 teach-before-use (FULL automated scan)
4. ✅ PP48 step type correctness
5. ✅ PP49 no CEFR labels
6. ✅ PP22c no em-dashes
7. ✅ PP43 density (every lesson meets minimum)
8. ✅ board:true on every lesson
9. ✅ Sub-level label consistency
10. ✅ PP55 vocabulary completeness (every Goethe A1 word)
11. ✅ PP57 grammar completeness (26/26 constructs)
12. ✅ PP58 communicative functions (15/15)
13. ✅ Synonym coverage
14. ✅ PP56 unit count justified
15. ✅ Exam simulation readiness

**ALL 15 PASS or content revision before proceeding.**

### Gate G4
A1 content complete. 15/15 PP53 PASS. Build passes. Zero errors.

---

## Phase 5: Asset Documentation (Session 11)

**What**: Produce a complete Midjourney prompt document for all A1 visual assets.

### Deliverables
1. **Scene backgrounds** (24 scenes: 6 episodes × 4 scenes each)
   - Per scene: Midjourney prompt using `--cref` and `--sref` references
   - Location-specific (BER airport, ICE train, Berlin Hbf, Altbau apartment, REWE, Bäckerei)
   - Lighting/mood per scene

2. **Character expression sheets** (A1 cast)
   - Verumius: 8 expressions (happy, confused, thinking, excited, nervous, proud, surprised, embarrassed)
   - Dr. Yilmaz: 6 expressions
   - Hildi: 6 expressions
   - Lukas: 6 expressions
   - KD: 4 expressions (A1 cameo only)

3. **Berlin city map** (isometric overview, 4 districts = 4 CEFR levels)

4. **Props/objects** per scene (Koffer, Reisepass, Hausordnung, Pfand machine, etc.)

**Output**: `docs/german/midjourney-prompts-a1.md` — one prompt per asset, ready to paste into Midjourney.

### Gate G5
Every A1 scene has a prompt. Every character has expression specs. Document is copy-paste ready.

---

## Phase 6: A2 → B1 → B2 (Sessions 12-35)

Same depth as Phases 2-5, repeated for each level:

| Level | Units | New Words | Constructs | Functions | Est. Sessions |
|-------|-------|-----------|------------|-----------|---------------|
| A2 | 6 | ~650 | 25 | 14 | 4-5 |
| B1 | 12 | ~1,100 | 33 | 15 | 8-10 |
| B2 | 12 | ~1,600 | 32 | 16 | 8-10 |

Each level follows: Deep Plan → Cross-Validate → Write Content → Audit → Asset Doc

### Special Considerations Per Level
- **A2**: Perfekt (haben/sein) needs 2+ units. Characters Mia + Opa Heinrich introduced.
- **B1**: Heaviest grammar load (33 constructs). PP46 applies: 2+ constructs per example, 50% combo quizzes. Hildi offers du (emotional milestone).
- **B2**: Academic register, Konjunktiv I, exam prep unit. Final unit: all characters reunite.

---

## Phase 7: Final Cross-Level Audit (Sessions 36-37)

Full A1-B2 audit:
- PP55: 5,000+ words verified against complete Goethe lists
- PP57: 116/116 grammar constructs taught + practiced + recycled
- PP58: 60/60 communicative functions with practice
- PP52: Full automated teach-before-use scan across all 36 units
- Character arcs: complete and satisfying
- Story coherence: no plot holes across 36 episodes
- Asset completeness: every scene has a Midjourney prompt

---

## What I Can Do RIGHT NOW (This Session)

**Phase 0 is actionable immediately.** Specifically:

1. **Search for and document Goethe-Wortliste** (A1/A2/B1 freely available online)
2. **Extract salvage data** from v1 German units (script-based, fast)
3. **Verify the 116 grammar constructs** against official sources
4. **Map the 60 communicative functions** to the 36 episodes

This gives us the foundation documents that ALL subsequent planning depends on. No content is written. Pure research and documentation.

---

## Zero-Error Guarantee Architecture

| Mechanism | What It Catches | When It Runs |
|-----------|----------------|--------------|
| Plan-before-code | Structural errors (wrong CEFR level, missing domains) | Before any content |
| Opus + Sonnet co-write (Rule 11) | Model blind spots | During content writing |
| Sequential + validator (Rule 9) | Merge conflicts, format drift | After each batch |
| Build-time density (Rule 7) | Thin lessons | During content writing |
| Full scans, no sampling (Rule 15) | PP52/PP48/PP49 violations | After each batch |
| Structural validation (Rule 10) | Undefined elements, missing fields | After each merge |
| 15-item PP53 audit | Everything | After each CEFR level |
| Official source citation (Rule 14) | Unverified claims | All research phases |
| Cumulative vocab tracking | PP52 violations at write time | Every lesson |
| Owner approval gates | Polyglot judgment | Between phases |

---

## Session Estimate Summary

| Phase | Sessions |
|-------|----------|
| 0: Foundation | 2 |
| 1: Story Arc | 1 |
| 2: A1 Deep Plan | 2 |
| 3: Cross-Level Seed | 1 |
| 4: A1 Content Write | 3-4 |
| 5: A1 Assets | 1 |
| 6A: A2 | 4-5 |
| 6B: B1 | 8-10 |
| 6C: B2 | 8-10 |
| 7: Final Audit | 1-2 |
| **TOTAL** | **~33-38 sessions** |

---

## Critical Files

| File | Purpose |
|------|---------|
| `docs/GERMAN_REHAUL_PLAN.md` | D119 plan: 36 units, 116 constructs, 6 characters, story arc |
| `docs/VERUMLINGUA_REHAUL_VISION.md` | Authoritative design spec: card format, story system, lesson flow |
| `docs/VISUAL_AUDIO_LAYER.md` | Art pipeline, Midjourney templates, scene format, character design |
| `src/data/units-german-v2.js` | Current v2 content (1 unit built, target for all new content) |
| `src/data/units-german.js` | V1 content (1,437 teach cards to salvage) |
| `src/data/foundations.js` | German foundations (complete, no changes needed) |
| `CLAUDE.md` | All pipeline rules, agent rules, manifesto principles |

## Verification

After each CEFR level is complete:
1. Run `npm run build` — must compile cleanly
2. Run Rule 10 structural validation script
3. Run PP52 full automated scan
4. Run PP55 word list comparison
5. Run PP8 spot-check (20+ samples)
6. Run PP53 15-item checklist — ALL PASS
7. Open in browser, navigate every lesson, verify rendering
8. Test on iPhone Safari for mobile layout
