# Curriculum Design Patterns

> Reusable patterns extracted from Korean V2 build (2026-03-21 -- 2026-04-15).
> Apply these when building or expanding ANY language's curriculum.
> Cross-references: German V2 (36 units, 5,148 cards), Dutch/French/Spanish V2 (complete), Italian/Japanese V2 (in progress).

---

## 1. Seed/Harvest Pedagogy

### The Principle

Grammar concepts are introduced in two phases:

1. **Seed (A-level):** The pattern appears naturally in a deepDive, note, or brief mention inside a teach card for something else. The learner sees it, absorbs the shape, but is never quizzed on it. The seed is tagged in a registry so harvest is guaranteed.
2. **Harvest (B-level):** A dedicated lesson opens with acknowledgment ("You have been seeing X since Unit Y"), formally names the pattern, drills it, and shows its full range. New grammar then builds ON TOP of harvested patterns, never in isolation.

### Why It Works

- Reduces cognitive shock: learners recognize the pattern before they must produce it.
- Creates a natural "aha!" moment during harvest: "Oh, THAT is what that was!"
- Enforces curriculum coherence: every grammar concept has a planned introduction AND a planned mastery lesson.

### Process Steps

1. During A-level content creation, identify patterns that will become B-level grammar.
2. Introduce each pattern as a seed: include it in examples, note it in a deepDive or tip, but do NOT create quiz steps for it.
3. Record each seed in a **Seed Registry** table: concept name, unit where planted, planned harvest unit, harvest strategy.
4. During B-level content creation, open each harvest lesson with an intro step that references prior exposure.
5. The harvest lesson formally teaches the pattern with its own teach card(s), tip, and quiz steps.
6. New B-level grammar is sequenced to build on already-harvested patterns.

### Seed Registry Template

| # | Seed Concept | Planted In | Harvested In | Harvest Strategy |
|---|-------------|-----------|-------------|-----------------|
| 1 | [pattern name] | [unit.lesson ID] | [target unit.lesson] | [context description] |

### Korean Example (12 seeds across A1-A2, all harvested in B1)

The Korean B1 build had 12 seeds planted across A1-A2 units. Each seed was a grammar pattern previewed in a deepDive or note but never formally drilled. Examples:

- Seed #1: `-go issda` (progressive) was planted in kou9l6, harvested in U11 L4 with travel context ("I am riding the KTX").
- Seed #4: `-neunde` (soft contrast) was planted in kou8l8, harvested in U13 L2 with nunchi context ("I want to go, but...").
- Seed #12: `-deoragoeyo` (evidential) was planted in kou10l7, harvested in U19 L2 with relationship context ("I found that Korean people are kind").

All 12 seeds were harvested with 100% coverage. Zero orphaned seeds remained.

### Generalization

This pattern applies to any language. Typical seed candidates:
- **Romance languages:** Subjunctive mood seeded via fixed expressions at A2, harvested at B1.
- **Germanic languages:** Passive voice seeded in news-style examples at A2, harvested at B1.
- **Japanese:** Potential form seeded via set phrases at A1-A2, harvested at B1.
- **Any language:** Complex connectors, indirect speech, formal register markers.

---

## 2. Concept-Driven Unit Count (PP56)

### The Principle

Unit count is derived from the **concept inventory** for each language, NOT from a fixed template (e.g., "every language gets 30 units"). The formula considers:

1. Official exam word list size (TOPIK, Goethe, DELF, DELE, CILS, JLPT, NT2)
2. Grammar construct count
3. Communicative function coverage (CEFR framework)
4. FSI difficulty category (Cat I languages need fewer units than Cat IV)
5. V1 salvage availability (existing content that can be enriched in place)

### Process Steps

1. **Extract the official word list** for the target language's certification exam(s). Count total lemmas per CEFR level.
2. **Inventory grammar constructs** from the exam syllabus and reference grammars. Count per level.
3. **Map communicative functions** from the CEFR framework (typically 20-22 per level, ~84 total for A1-B2).
4. **Audit existing V1 content** if any: count teach cards, identify gaps, determine enrichment vs. new-build ratio.
5. **Calculate per-level unit needs:**
   - Count gap words (exam list minus already-taught).
   - Estimate units needed: ~20 new teach cards per unit (Rule B.4), but adjust for grammar density.
   - Add units for grammar constructs that need dedicated lessons (especially at B1-B2).
6. **Sum across levels** for total unit count.
7. **Validate against FSI difficulty:** harder languages (Cat III-IV) should have MORE units than easier ones (Cat I).

### Korean Example (40 units derived from concept inventory)

**Inputs:**
- TOPIK vocabulary: 5,670 words (A1: 270, A2: 636, B1: 1,237, B2: 3,527)
- Grammar constructs: ~135 total (A1: 20, A2: 15, B1: 40, B2: 60)
- Communicative functions: 84 (20+20+22+22)
- V1 salvage: 1,336 teach cards across 30 units
- FSI Category: IV (4x harder than Category I)

**Calculation:**

| Level | Exam Words | V1 Taught | Gap | Existing Units | New Units | Total Units |
|-------|-----------|-----------|-----|----------------|-----------|-------------|
| A1 | 270 | ~290 | 0 | 6 (solid) | 0 | 6 |
| A2 | 636 | ~250 | ~386 | 4 | +3 for gap | 7 |
| B1 | 1,237 | ~350 | ~887 | 10 | +2 for gap | 12 |
| B2 | ~2,000* | ~446 | ~2,000 | 10 | +5 for gap | 15 |
| **Total** | **~4,143** | **1,336** | **~3,273** | **30** | **+10** | **40** |

*B2 capped at top ~2,000 by frequency, matching German B2 scale. Remaining 1,527 stay in CEFR reference for self-study.

**Result:** 40 units (6+7+12+15), concept-driven.

### German Comparison (36 units)

German is FSI Category I (easier). Its concept inventory:
- Goethe word list: 3,303 lemmas
- Grammar constructs: 118
- Communicative functions: 84

German got 36 units (6+6+12+12). Korean gets MORE because:
1. FSI Category IV (4x harder).
2. B2 vocabulary nearly 2x German B2 (3,527 vs. 1,821 CEFR words).
3. Script complexity (Hangul assembly) requires more A1 reinforcement.
4. Particle system and honorifics need dedicated practice across all levels.

### Key Insight

Never start with "We need N units." Start with "How many concepts does this language require at each level?" Then derive units from that. Two languages will almost never need the same unit count.

---

## 3. Communicative Functions Framework

### The Structure

CEFR defines communicative functions: things a learner can DO with the language at each level. The VerumLingua framework maps ~20-22 functions per CEFR level (A1, A2, B1, B2), totaling ~84 functions for a full A1-B2 curriculum.

### Process Steps

1. **Source the function list** from the CEFR Companion Volume (2020) and the language's exam body (Goethe Companion, TOPIK specifications, DELF descriptors, etc.).
2. **Organize by level** with ~20 functions per level. Each function is a concrete communicative act, not an abstract grammar label.
3. **Map each function to unit(s)** where it is PRACTICED (learner actively performs via quiz, not just exposed via story).
4. **Verify zero gaps:** every function at every level must have at least one unit with active practice.
5. **Track the mapping** in a dedicated file: `docs/{language}/communicative-functions-mapping.md`.

### Function Categories (universal across languages)

Functions tend to cluster into recurring categories, but the language-specific FORM varies:

| Category | A1 Example | B1 Example | B2 Example |
|----------|-----------|-----------|-----------|
| Social interaction | Greet, farewell, introduce self | Make formal requests, handle complaints | Negotiate, mediate |
| Information exchange | Ask/answer basic questions | Narrate stories, describe processes | Summarize and paraphrase extended texts |
| Opinion/argument | Express likes/dislikes | Express and justify opinions | Argue persuasively in formal register |
| Pragmatic | Order food, make purchases | Handle service situations (bank, hospital) | Handle bureaucratic situations (visa, contracts) |
| Emotional | React to news | Express nuanced emotions | Express subtlety and nuance |

### Language-Specific Examples

**German A1 functions** (from `docs/german/communicative-functions-mapping.md`):
- Introduce self (name, age, nationality, profession) -- U1
- Order food and drink -- U5
- Make appointments -- U6
- Express ability (kann/kann nicht) -- U5, U6

**Korean A1 functions** (from concept catalogue):
- Introduce self (name, nationality, job) -- U1-U2
- Count and use numbers (native + Sino-Korean systems + counters) -- U3
- Order food and drink (juseyo, menu) -- U4
- Use polite speech level (haeyo-che) -- U1+

**Italian A1 functions** (typical for a new build):
- Introduce self (nome, nazionalita, professione)
- Handle articles and gender (il/lo/la/l'/i/gli/le)
- Order food (al bar, al ristorante)
- Describe daily routine (ogni giorno, la mattina)

Note how the universal function "introduce self" maps to completely different grammar concerns per language (Korean needs speech levels, Italian needs article gender, German needs case system awareness).

### Validation

German achieved 84/84 functions mapped with zero gaps. Korean planned 84 functions. Any new language build should target the same coverage standard.

---

## 4. Lesson Structure Templates

Four reusable lesson templates, extracted from the Korean B1 build. These work for any language -- only the content changes.

### 4.1 Standard Teaching Lesson

The workhorse. Used for L1-L8 in most units.

**Step sequence:**
```
intro -> teach x3-5 -> tip (grammar) -> mc x2-3 -> fb x2-3 -> match -> drag_fill
```

**Step count target:** 12-16 steps (soft cap 32 per PP43).

**Rules:**
- Teach cards introduce new vocabulary/patterns.
- The tip formalizes the grammar pattern (with deepDive for advanced explanation).
- Quiz steps test ONLY words/patterns introduced in teach cards (PP34/PP52).
- Match pairs reinforce vocabulary recognition.
- drag_fill provides productive practice with sentence-level context.

### 4.2 Harvest Lesson

Used when a seed from a lower level gets formally taught. See Section 1 (Seed/Harvest).

**Step sequence:**
```
intro ("You've been seeing X since Unit Y") -> tip (formal explanation) ->
teach (if new vocab needed) -> mc x3 -> fb x2 -> match -> drag_fill
```

**Key difference from Standard:** Opens with acknowledgment of prior exposure. The intro step explicitly connects to earlier encounters. The tip comes BEFORE teach cards (explanation first, since the learner has seen the pattern).

### 4.3 Culture Lesson

Used to teach vocabulary through cultural context. Every unit should have cultural anchoring (see Section 5).

**Step sequence:**
```
intro -> teach x3-4 (cultural vocabulary) -> tip (cultural explanation with deepDive) ->
mc x2 -> fb x1 -> match
```

**Key difference from Standard:** Fewer quiz steps. The tip carries more weight (cultural explanation). deepDive provides historical/social context.

### 4.4 Review/Assessment Lesson

Used as L9 or L10 in a unit. Pure assessment, no new teaching.

**Step sequence:**
```
intro -> mc x3-4 -> fb x3-4 -> match -> drag_fill x2
```

**Key difference from Standard:** Zero teach cards. Tests the full unit's content. Intro may preview next unit or celebrate progress.

### Interleaving Rule

After quiz interleaving (PP64), the strict templates above get quizzes inserted between teach card groups. The actual pattern becomes:

```
intro -> teach x2-3 -> mc x1-2 -> teach x2-3 -> fb x1-2 -> tip -> match -> drag_fill
```

Max consecutive teach cards without a quiz: 6 (enforced during build).

---

## 5. Curriculum Trade-Off Decisions

Generalizable principles extracted from the Korean B1 build. These apply to any language at B1+ level.

### 5.1 Step Density Scales with Cognitive Weight

**Principle:** B1+ lessons should have FEWER steps per lesson than A1-A2, not more.

**Rationale:** Each B1 grammar pattern carries more cognitive weight than A1 vocabulary. A teach card explaining indirect speech needs more processing time than a teach card for "apple." Quality beats quantity.

**Korean data:** B1 averaged ~13.8 steps/lesson (pre-density-uplift) vs. A1-A2 target of 20-25. After density uplift (D88), B1 rose to ~21.2, but this was achieved by adding quiz steps for untested teach cards, not by adding more teaching.

**Guideline:** Target 12-16 steps for B1 grammar-heavy lessons, 18-25 for A1-A2 vocabulary-heavy lessons. Never pad to hit a step count (PP54).

### 5.2 Contrastive Questions (PP8 Exception)

**Principle:** Some quiz questions intentionally show similar patterns side by side in the question stem. This technically violates PP8 (answer visible in question) but is pedagogically essential for teaching pattern discrimination.

**When acceptable:** The question tests UNDERSTANDING of a difference, not RECALL of a word. Example: "Pattern-A vs Pattern-B: which expresses a firm plan?" -- this is a valid discrimination exercise even though both patterns appear in the stem.

**When NOT acceptable:** The question simply reveals the answer word in the stem (standard PP8 leak). These must always be fixed.

**Decision rule:** If removing the "leak" would make the question impossible to ask, it is a valid contrastive question. If the question could be rephrased to hide the answer without losing pedagogical value, it is a leak and must be fixed.

### 5.3 Grammar Ordering by Utility, Not Complexity

**Principle:** Sequence grammar by communicative UTILITY first, structural complexity second.

**Korean example:** Indirect speech (U16) was placed before passive/causative (U17), even though indirect speech has 4 sub-patterns. Rationale:
1. Indirect speech is more immediately useful in daily communication.
2. Passive/causative is more structurally complex but less frequently needed.
3. Having reported speech established means later units can use "The news said..." naturally.

**Generalization:** When two grammar concepts are at the same CEFR level, teach the one with higher communicative frequency first. This gives learners more usable language sooner and creates a richer base for later patterns.

### 5.4 Register Switching Placement

**Principle:** Register switching (formal/informal/casual) should be placed LATE in B1, not early.

**Rationale:**
1. Students need all register forms solidified individually before switching between them.
2. Cultural context provides emotional motivation for register choice (Korean: jeong culture; German: Sie/du workplace norms).
3. By late B1, students have enough grammar to express the same idea multiple ways.

**Guideline:** Introduce register awareness at A2 (expose), practice individual registers through B1.1-B1.2, place explicit register-switching drills in the final third of B1.

### 5.5 Cultural Anchoring Per Unit

**Principle:** Every unit is anchored to a cultural context that provides natural sentences and motivation for the grammar being taught.

**Selection criteria for cultural anchors:**
1. The grammar pattern appears NATURALLY in this context (not forced).
2. The cultural topic is interesting enough to motivate learning.
3. The vocabulary domain overlaps with the grammar focus.

**Korean examples:**
- Progressive tense anchored to travel/KTX (natural for "I am riding the train").
- Obligation/permission anchored to workplace culture (rules map to Korean work norms).
- Nominalization anchored to food culture (talking ABOUT eating, not just eating).

**Process:** For each unit, ask: "In what real-life cultural situation does this grammar pattern appear most naturally?" That situation becomes the unit's cultural anchor, theme, and vocabulary domain.

---

## 6. Content Gap Analysis Methodology

### The Workflow

A structured process for measuring coverage against official exam word lists and generating actionable gap reports.

### Step 1: Extract the Official Word List

Obtain the certification body's word list for the target language:
- **German:** Goethe-Wortliste (3,303 lemmas, A1-B2)
- **Korean:** TOPIK vocabulary list (5,670 words, Levels 1-4 mapped to A1-B2)
- **French:** DELF/DALF reference vocabulary
- **Spanish:** PCIC (Plan Curricular del Instituto Cervantes)
- **Italian:** CILS vocabulary lists
- **Japanese:** JLPT vocabulary lists (N5-N2 mapped to A1-B2)

Format: one lemma per line, tagged by CEFR level.

### Step 2: Compare Against Teach Card `trg` Fields

Extract all `trg` values from the language's unit files. Compare against the official list.

**Three categories:**
1. **Taught:** Word has its own dedicated teach card with `trg` field matching the lemma.
2. **Partial:** Word appears in examples, deepDives, or notes but has no dedicated teach card. Does NOT count as "taught" per PP34.
3. **Missing:** Word does not appear anywhere in the curriculum.

### Step 3: Analyze the "Missing" Category

**Key insight from Korean V2 build:** Many "missing" words turn out to be parts of compounds or derived forms that ARE taught. For example:
- "gwangye" (relationship) might be missing, but "gwan" (relate) and "gye" (connect) are taught as Sino-Korean morphemes.
- German: "Handschuh" (glove) might be missing, but "Hand" (hand) and "Schuh" (shoe) are taught, and the compound is transparent.

**Decision rule:** A compound/derived word counts as "covered" if:
1. All component morphemes are taught, AND
2. The word formation rule is explained in a tip/deepDive, AND
3. The learner can reasonably deduce the meaning.

Otherwise, the word needs its own teach card.

### Step 4: Generate the Gap List

Produce a prioritized list:
1. **High priority:** High-frequency words on exam lists that are completely absent.
2. **Medium priority:** Words that appear in examples but lack dedicated teach cards.
3. **Low priority:** Low-frequency words or transparent compounds.

### Step 5: Fill Gaps

- Allocate gap words to existing units (if the unit's theme matches) or create new units.
- Respect PP43 density caps (max 32 steps per lesson, max ~20 new teach cards per unit).
- After filling, re-run the comparison to verify zero gaps.

### Korean Gap Data

| Level | CEFR Words | V1 Taught | Gap | Action |
|-------|-----------|-----------|-----|--------|
| A1 | 270 | ~290 | 0 | Enrich only (pos, funFact) |
| A2 | 636 | ~250 | ~386 | Enrich existing + 386 new cards |
| B1 | 1,237 | ~350 | ~887 | Enrich existing + 887 new cards |
| B2 | 3,527 | ~446 | ~2,000 | Top ~2,000 by frequency |
| **Total** | **5,670** | **1,336** | **~3,273** | Enrich all 1,336 + add ~3,273 new |

### B2 Cap Decision

When a B2 word list is very large (Korean: 3,527, Japanese JLPT N2: similar scale), it is acceptable to cap at the top ~2,000 words by frequency, matching the German B2 benchmark of ~1,844 teach cards. Remaining words go into the CEFR Reference page for self-study, not into lesson units.

---

## 7. Concept Registry Format

A concept registry is a machine-searchable index of all grammar patterns, vocabulary domains, and cultural concepts taught in a language's curriculum. It enables agents to verify pattern existence WITHOUT grepping multi-thousand-line data files.

### When to Create

Create a concept registry when a language reaches V2 maturity (all levels have content, validation passes). The registry is a living document updated after every content build.

### Format Template

```markdown
# Concept Registry: [Language Name] ([lang code])

> [Language] section: U1-U[N], ~[X] teach cards, ~[Y] lessons
> Data files: src/data/[lang]-v2/unit-01.js through unit-[N].js
> Last updated: [date]

---

## Unit Overview

| Unit | Level | Title | Theme | Lessons | Teach Cards |
|------|-------|-------|-------|---------|-------------|
| U1 | A1 | [title] | [theme] | [N] | [N] |
| ... | | | | | |

---

## Grammar Patterns

### [Category 1: e.g., Articles & Gender / Particles / Verb Conjugation]

| Pattern | Meaning | Unit | Type |
|---------|---------|------|------|
| [pattern] | [meaning] | U[N] | teach (grammar) / tip |

### [Category 2]
...

---

## Vocabulary Domains

### U1-U[N] ([level range])

| Domain | Unit | Key Words |
|--------|------|-----------|
| [domain] | U[N] | [3-5 representative words] |

---

## Cultural Concepts (Tips)

| Concept | Unit | Tip Title |
|---------|------|-----------|
| [concept] | U[N] | [tip title] |

---

## How to Use This Registry

### For Agents Verifying Pattern Existence
1. Search this file first (Ctrl+F or grep).
2. If found: note the Unit and Type columns. The pattern EXISTS.
3. If NOT found: grep the per-unit data files to double-check
   (registry may be slightly behind code).
4. A pattern with Type "tip" means it is explained but may not
   have a standalone teach card.
5. A pattern with Type "teach (grammar)" has a dedicated teach card.

### For Content Creation
1. Check this registry before adding new teach cards (PP24
   redundancy prevention).
2. If the pattern already has a teach card, your new lesson must
   teach a NEW SKILL using it as a vehicle.
3. Cross-reference the Unit column to understand sequencing
   dependencies.

### Updating This Registry
When adding new units or lessons:
1. Add new grammar patterns to the appropriate table.
2. Add new vocabulary domains.
3. Update the Unit Overview table (lesson/teach counts).
4. Update the "Last updated" date at the top.
```

### Type Field Semantics

| Type Value | Meaning | Quizzable? |
|-----------|---------|-----------|
| `teach (grammar)` | Dedicated teach card exists | Yes (PP52) |
| `teach` | Vocabulary teach card | Yes (PP52) |
| `tip` | Explained in a tip card | Not directly (only via vocab that uses it) |
| `deepDive` | Mentioned in a deepDive | No (does not count as "taught") |
| `note` | Mentioned in a teach card's note | No (seed only) |

---

## Appendix: Quick-Reference Checklist for New Language Builds

When building or expanding a language from scratch, follow these steps in order:

1. **Official word list extraction** -- Obtain the exam body's word list, count per level. (Section 6, Step 1)
2. **Grammar construct inventory** -- List all grammar constructs from exam syllabi. (Section 2)
3. **Communicative functions mapping** -- Map ~84 functions across A1-B2. (Section 3)
4. **Concept-driven unit count** -- Derive units from concept inventory, not templates. (Section 2)
5. **Cultural anchor selection** -- Pick one cultural context per unit. (Section 5.5)
6. **Seed registry creation** -- Identify B-level patterns to seed at A-level. (Section 1)
7. **V1 salvage audit** (if applicable) -- Count existing teach cards, identify gap words. (Section 6)
8. **Lesson structure selection** -- Apply the 4 templates per lesson type. (Section 4)
9. **Content build** -- Sequential content agents + parallel validators (Rule C).
10. **Gap analysis** -- Re-compare against official word list, fill remaining gaps. (Section 6)
11. **Concept registry creation** -- Build the machine-searchable index. (Section 7)
12. **Validation sweep** -- PP8, PP43, PP48, PP52, PP59, PP61, PP64 all must PASS.
