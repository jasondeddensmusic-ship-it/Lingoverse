# Full Curriculum Audit Handoff — D112: Certification-Grade Vocabulary & Structural Audit

> **Date**: 2026-03-17
> **Predecessor**: D109 (RETROACTIVELY INCOMPLETE), D110 (CEFR Distribution Flags), D111 (Partial structural audit, sub-level fixes only)
> **Goal**: Transform LingoVerse into a certification-grade language learning platform where EVERY vocabulary word, grammar construct, and synonym required by official exams and school curricula is present. No gaps. No shortcuts. No "good enough."
> **STATUS: PENDING**. This is the DEFINITIVE audit that will bring all 5 languages to exam-certification completeness.

---

## WHY THIS AUDIT EXISTS — THE OWNER'S MANDATE

Previous audits checked structure: labels, sub-levels, step types, leak patterns. They never verified the ACTUAL CONTENT against official standards. The question was always "is the container correct?" — never "is everything that should be inside the container actually there?"

**The owner's words**: "We need ALL vocabulary complete for ALL languages and certified official levels per country/language. We cannot miss a single synonym. Not a single construct, not a single WORD that a proper school curriculum would possess."

This is not an incremental improvement. This is a fundamental redefinition of what "complete" means:

**OLD definition**: "A1-B2 content exists for this language, passes structural checks, and covers major grammar constructs."

**NEW definition**: "A1-B2 content for this language contains EVERY vocabulary word, EVERY grammar construct, EVERY communicative function, and EVERY synonym that official certification exams (TOPIK/NT2/Goethe/DELF/DELE) require at each level. A learner using ONLY LingoVerse could pass the official exam."

---

## THE CERTIFICATION-GRADE STANDARD (P55) — NEW PRINCIPLE

### P55: Vocabulary Completeness Doctrine — NON-NEGOTIABLE

Every language in LingoVerse must achieve **certification-grade vocabulary completeness**. This means:

1. **Official exam vocabulary lists are the MINIMUM.** Every word on the official vocabulary list for TOPIK I/II, NT2, Goethe A1-B2, DELF A1-B2, and DELE A1-B2 must have a dedicated teach card in the curriculum. Not "most words." Not "the important ones." ALL of them.

2. **Official word counts by level (approximate targets)**:
   - **A1**: ~800-1,000 active vocabulary words
   - **A2**: ~1,500-2,000 active vocabulary words (cumulative ~2,500-3,000)
   - **B1**: ~3,000-3,500 active vocabulary words (cumulative ~5,500-6,500)
   - **B2**: ~4,000-5,000 active vocabulary words (cumulative ~9,500-11,500)

   These are GENERAL CEFR benchmarks. Each language's official exam may specify different numbers. The official exam number ALWAYS takes precedence over the general benchmark.

3. **Per-language official vocabulary sources (MANDATORY cross-reference)**:
   - **Korean**: TOPIK vocabulary list (6,000+ words for TOPIK II), National Institute of Korean Language frequency lists, TTMIK vocabulary by level
   - **Dutch**: NT2 Basiswoordenlijst (~4,000 words), Inburgeringsexamen word lists, Nederlandse Taalunie CEFR lists
   - **German**: Goethe-Institut Wortliste (A1: ~650, A2: ~1,300, B1: ~2,400, B2: ~4,000+), Profile Deutsch word lists
   - **French**: DELF vocabulary lists by level, Français Fondamental, Référentiel de l'Alliance Française, Éditions Didier word lists
   - **Spanish**: Plan Curricular del Instituto Cervantes vocabulary inventory (A1-B2), DELE preparation vocabulary lists, Aula Internacional word lists

4. **Vocabulary domains that MUST be complete at each level**:

   **A1 (ALL languages)**:
   - Greetings and basic social exchanges (ALL standard phrases, not just 3-4)
   - Numbers 0-1000+ (including ordinals)
   - Days, months, seasons (COMPLETE sets, no gaps)
   - Colors (ALL basic colors, not just 5)
   - Family members (COMPLETE: parents, siblings, grandparents, uncle, aunt, cousin, in-laws)
   - Body parts (COMPLETE: head, face parts, limbs, torso, internal if standard)
   - Food and drink (30+ items minimum: fruits, vegetables, meats, drinks, meals)
   - Clothing (15+ items: all standard garments)
   - Home/rooms/furniture (COMPLETE room names + 5+ items per room)
   - Directions and transport (all directional words + all common transport modes)
   - Weather (ALL standard weather terms + temperature)
   - Emotions/feelings (10+ basic emotions)
   - Daily routine verbs (15+ verbs minimum)
   - Basic adjectives (20+ pairs of opposites)
   - Time expressions (ALL: morning, afternoon, evening, night, today, tomorrow, yesterday, now, later, soon, always, never, sometimes, often, usually)
   - Question words (ALL: who, what, where, when, why, how, how much, how many, which)

   **A2 additions**:
   - Health and illness vocabulary (symptoms, doctor visit, pharmacy)
   - Shopping and money (prices, payment, stores, quantities)
   - Hobbies and leisure (15+ activities)
   - Professions/occupations (20+ common jobs)
   - Animals (15+ common animals)
   - Nature and environment (basic landscape, plants, weather expansion)
   - Technology basics (phone, computer, internet, email)
   - Travel vocabulary (airport, hotel, booking, luggage)

   **B1 additions**:
   - Work and professional life (office, meeting, project, deadline, colleague)
   - Education (school, university, subjects, grades, exams)
   - Media and communication (newspaper, article, interview, opinion)
   - Society and politics (basic civic vocabulary)
   - Abstract concepts (idea, problem, solution, experience, opportunity)
   - Feelings expanded (frustrated, anxious, relieved, confused, impressed)
   - Connectors and discourse markers (COMPLETE set for the language)

   **B2 additions**:
   - Academic and formal vocabulary (research, analysis, hypothesis, conclusion)
   - Debate and argumentation (claim, evidence, counter-argument, concede)
   - Literature and arts (genre, author, theme, metaphor, narrative)
   - Economics basics (economy, inflation, trade, investment)
   - Law and rights basics (law, right, responsibility, justice, court)
   - Idiomatic expressions (20+ per language minimum)
   - Proverbs (10+ per language minimum)
   - Register-specific vocabulary (formal/informal pairs)

5. **Every synonym matters.** If the official exam lists both "big" and "large" equivalents in the target language, BOTH must have teach cards. Learners encounter synonyms on exams. LingoVerse must prepare them for ALL of them.

6. **Function words are vocabulary too.** Every preposition, conjunction, article form, pronoun form, and particle that appears at a CEFR level must have a dedicated teach card. These are not assumed knowledge.

7. **Verification method**: For each language, create a machine-readable checklist of ALL official vocabulary items. Run an automated script that checks each item against the actual teach cards in the units file. Any word on the official list without a teach card is a GAP. Zero gaps = PASS.

---

## THE UNIT COUNT ADEQUACY STANDARD (P56) — NEW PRINCIPLE

### P56: Concept-Driven Unit Sizing — NON-NEGOTIABLE

The number of units per CEFR level must be determined by the CONCEPTS that need to be taught, not by any template. This principle SUPERSEDES any previous distribution (including the 6-4-10-10 "gold standard").

**Process for determining unit count**:
1. Catalogue ALL grammar constructs required at this CEFR level for this language (from official exam framework)
2. Catalogue ALL vocabulary domains required at this level
3. Catalogue ALL communicative functions required at this level
4. Group related concepts into natural teaching units (each unit = 1 coherent theme)
5. Estimate lessons needed per unit (each lesson = 1 focused sub-topic, 18-30 steps)
6. The resulting unit count IS the unit count. No compression. No inflation.

**Language difficulty MUST affect unit count**:
- FSI Category I (Dutch, Spanish, French): ~600-750 class hours to B2. Simpler morphology, cognate-rich.
- FSI Category II (German): ~900 class hours. Case system, gender agreement, word order complexity.
- FSI Category IV-V (Korean, Arabic, Japanese, Chinese): ~2,200 class hours. Non-Latin script, fundamentally different grammar, honorific systems, no cognates.

**A Category V language with the same unit count as a Category I language is AUTOMATICALLY suspicious.** Korean having 30 units while Spanish also has 30 units needs explicit justification. If the justification is "we used the same template" — that's a P54 violation.

**Korean specifically**: 4 units for A2 is almost certainly insufficient. Korean A2 includes:
- Particle system deepening (subject/topic/object/location/time/instrumental/comitative)
- Past tense (았/었/였 + irregular stems)
- Future tense (을/ㄹ 거예요, 을/ㄹ게요, 겠)
- Progressive/continuous (고 있다)
- Ability/inability (을/ㄹ 수 있다/없다)
- Want/wish (고 싶다)
- Connectors (그래서, 그런데, 그러면, 그리고, 하지만, 그렇지만)
- Honorific deepening (시/세요 expansion, 드리다/주시다)
- Counters system (20+ counters with native/Sino-Korean number selection)
- Basic Sino-Korean vocabulary layer (100+ compounds)
- Verb conjugation patterns (irregular verb batches)
- Speech level awareness (해요체 vs 합쇼체 exposure)

Each of these deserves substantial practice. 4 units x 8 lessons = 32 lessons for all of this is tight. The next session MUST evaluate whether Korean A2 needs expansion.

---

## THE GRAMMAR COMPLETENESS STANDARD (P57) — NEW PRINCIPLE

### P57: Zero Grammar Gaps — NON-NEGOTIABLE

Every grammar construct that appears on official certification exams at a given CEFR level MUST be:
1. **Explicitly taught** with a dedicated teach card or tip card explaining the rule
2. **Practiced** in at least 3 quiz steps (mc, fb, drag_fill, or tr)
3. **Recycled** in at least 2 later lessons at the same or higher level

**Grammar inventory methodology**:
For each language, the audit must produce a COMPLETE grammar inventory table:

| Grammar Construct | CEFR Level | Official Source | Unit(s) Where Taught | Teach Card ID(s) | Quiz Step Count | Status |
|-------------------|-----------|-----------------|---------------------|-------------------|----------------|--------|
| Present tense regular -ar | A1 | DELE A1, PCIC | U2 | esp2l1s3, esp2l2s2 | 8 | COMPLETE |
| Subjuntivo imperfecto -ra | B2 | DELE B2, PCIC | U25 | esp25l3s4 | 5 | COMPLETE |
| Past participle as adjective | B1 | DELE B1 | - | - | 0 | GAP |

Every "GAP" row must be fixed. Zero gaps = PASS.

**Per-language grammar sources (MANDATORY)**:
- **Korean**: TOPIK grammar list (300+ patterns for TOPIK II), Korean Grammar in Use (Beginning/Intermediate/Advanced), TTMIK grammar index
- **Dutch**: NT2 grammar requirements, Basisgrammatica, Dutch: An Essential Grammar, Grammatica overzicht per niveau
- **German**: Goethe-Institut grammar inventory by level, Dreyer & Schmitt Lehr- und Ubungsbuch, Deutsche Grammatik by Helbig/Buscha
- **French**: DELF grammar inventory by level, Grammaire progressive du francais (debutant/intermediaire/avance), Bescherelle
- **Spanish**: PCIC grammar inventory (Gramatica, Inventario A1-B2), Nueva gramatica de la lengua espanola, Aula Internacional grammar index

---

## THE COMMUNICATIVE FUNCTIONS STANDARD (P58) — NEW PRINCIPLE

### P58: Complete Communicative Coverage — NON-NEGOTIABLE

CEFR defines not just grammar and vocabulary but COMMUNICATIVE FUNCTIONS: what a learner can DO with the language at each level. These are testable on official exams.

**A1 communicative functions (ALL languages must cover ALL of these)**:
- Introduce yourself and others
- Ask and answer personal questions (name, age, nationality, profession, address)
- Describe people, places, and things simply
- Express likes and dislikes
- Ask for and give directions
- Order food and drink
- Make simple purchases
- Tell the time
- Describe daily routine
- Make simple appointments
- Write a simple postcard/message
- Fill in a simple form

**A2 communicative functions**:
- Describe past events and experiences
- Express plans and intentions
- Give and follow simple instructions
- Make comparisons
- Express agreement and disagreement
- Describe symptoms and health issues
- Handle basic travel situations (hotel, transport, restaurant)
- Write a short informal letter/email
- Understand and leave simple messages

**B1 communicative functions**:
- Express and justify opinions
- Describe hopes, dreams, and ambitions
- Narrate a story or plot
- Handle most travel situations
- Participate in conversations on familiar topics
- Write formal and informal letters
- Summarize information from different sources
- Express conditions and hypotheses
- Give advice and make suggestions

**B2 communicative functions**:
- Present detailed arguments
- Negotiate and persuade
- Speculate about causes and consequences
- Discuss abstract topics fluently
- Write formal reports and essays
- Understand and produce complex texts
- Adapt language to social context (register switching)
- Handle professional interactions
- Discuss current events and social issues

**Verification**: Each communicative function must map to specific lessons that practice it. A function without practice lessons is a GAP.

---

## EXPANDED P53 CHECKLIST — NOW 15 ITEMS

The original 9-item P53 checklist was insufficient. The certification-grade audit requires 15 items:

| # | Check | What to verify | Method |
|---|-------|---------------|--------|
| 1 | **CEFR Distribution (P51)** | Unit-to-level mapping pedagogically sound, concept-driven not template-driven | Manual + external reference comparison |
| 2 | **P8 Anti-Leak (all 5 types)** | Visual, script, hint, pattern, position leaks | Sample 20+ mc/fb per level per language |
| 3 | **P52 Strict Teach-Before-Use** | Every quiz word traces to a prior dedicated teach card | Automated script, FULL verification |
| 4 | **P48 Step Type Correctness** | fb = single blank, drag_fill = multi-blank | Automated grep |
| 5 | **P49 No Meta-Curriculum** | No CEFR labels in learner-facing content | Automated grep |
| 6 | **P22c No Em-Dashes** | Zero em-dashes in content strings | Automated grep |
| 7 | **Density (P43)** | Every lesson meets minimum (Korean: 20+, others: 18+) | Automated script |
| 8 | **board:true** | Every lesson has board:true | Automated script |
| 9 | **Sub-level Label Consistency** | No gaps or jumps in sub-level labels | Automated script |
| 10 | **P55 Vocabulary Completeness** | ALL official exam vocabulary present as teach cards | Automated script against official word list |
| 11 | **P57 Grammar Completeness** | ALL official exam grammar constructs taught and practiced | Grammar inventory table, zero gaps |
| 12 | **P58 Communicative Functions** | ALL CEFR communicative functions covered with practice | Function-to-lesson mapping |
| 13 | **Synonym Coverage** | Key synonyms from official lists all have teach cards | Cross-reference exam prep materials |
| 14 | **P56 Unit Count Adequacy** | Unit count justified by concept catalogue, not template | Concept catalogue document per language |
| 15 | **Exam Simulation Readiness** | A learner could pass the official exam using ONLY LingoVerse | Expert review against exam format |

**ALL 15 items must PASS. Missing ANY = audit INCOMPLETE.**

---

## PHASE 1: VOCABULARY GAP ANALYSIS (HIGHEST PRIORITY)

This is the work that has NEVER been done. For each of the 5 languages:

### Step 1: Obtain official vocabulary lists

Obtain or reconstruct the official vocabulary list for each certification exam level. Sources:

| Language | Exam | Vocabulary List Source |
|----------|------|----------------------|
| Korean | TOPIK I (A1-A2) | TOPIK official vocabulary (~3,500 words) |
| Korean | TOPIK II (B1-B2) | TOPIK official vocabulary (~6,000+ words) |
| Dutch | NT2 A2/Inburgering | Basiswoordenlijst (~4,000 words) |
| Dutch | NT2 B1-B2 | NT2 Staatsexamen vocabulary |
| German | Goethe A1 | Goethe-Wortliste A1 (~650 words) |
| German | Goethe A2 | Goethe-Wortliste A2 (~1,300 words) |
| German | Goethe B1 | Goethe-Wortliste B1 (~2,400 words) |
| German | Goethe B2 | Goethe-Wortliste B2 (~4,000+ words) |
| French | DELF A1-A2 | CIEP/FEI reference vocabulary |
| French | DELF B1-B2 | CIEP/FEI reference vocabulary |
| Spanish | DELE A1-A2 | PCIC Nociones especificas A1-A2 |
| Spanish | DELE B1-B2 | PCIC Nociones especificas B1-B2 |

### Step 2: Extract current vocabulary from units files

For each language, run a script that extracts every `nl:` field value from every teach card. This is the "currently taught vocabulary" list.

```javascript
// Extract all taught vocabulary from a units file
const fs = require('fs');
const content = fs.readFileSync('src/data/units-{lang}.js', 'utf8');
const nlMatches = content.match(/nl:\s*"([^"]+)"/g);
const vocabulary = nlMatches.map(m => m.replace(/nl:\s*"/, '').replace(/"$/, ''));
console.log(`Total teach cards: ${vocabulary.length}`);
console.log(`Unique vocabulary: ${new Set(vocabulary).size}`);
// Output full list for comparison
vocabulary.forEach(w => console.log(w));
```

### Step 3: Gap analysis

Compare the official list against the extracted list. Every word on the official list that does NOT appear in the extracted list is a GAP.

Output format:
```
VOCABULARY GAP REPORT: [Language] [Level]
Official list size: N words
Currently taught: M words
Coverage: M/N (X%)
GAPS (words on official list missing from curriculum):
1. [word] — [English meaning] — [domain]
2. [word] — [English meaning] — [domain]
...
```

### Step 4: Gap resolution plan

For each gap:
- Determine which unit it belongs in (by CEFR level and thematic fit)
- Determine whether it needs a new lesson, a new unit, or can be added to an existing lesson (WITHOUT cramming)
- If adding to existing lessons would exceed comfortable density, create new lessons or units

### Step 5: Implementation

Build the missing teach cards, quiz steps, and any new lessons/units needed. Follow ALL pipeline rules (P8, P34/P52, P43, P48, etc.).

---

## PHASE 2: GRAMMAR GAP ANALYSIS

### Step 1: Build complete grammar inventory per language

For each language, create the grammar inventory table (see P57 above). Use official exam grammar lists as the source of truth:

- **Korean**: TOPIK grammar patterns list (한국어능력시험 문법 목록)
- **Dutch**: NT2 grammatica per niveau
- **German**: Goethe-Institut Grammatik-Inventar
- **French**: DELF grammaire par niveau (Referentiel)
- **Spanish**: PCIC Gramatica Inventario

### Step 2: Cross-reference against units files

For each grammar construct on the official list, verify:
1. Is it explicitly taught? (teach card or tip card)
2. Is it practiced? (quiz steps)
3. Is it recycled? (later lessons)

### Step 3: Fix all grammar gaps

Any grammar construct that's on the official exam list but not taught/practiced in LingoVerse is a GAP that must be fixed.

---

## PHASE 3: UNIT COUNT RE-EVALUATION (ALL 5 LANGUAGES)

### Korean (CRITICAL — 4 A2 units for Category V language)

Korean is FSI Category V (2,200 class hours). The current 6-4-10-10 distribution must be re-evaluated:
- **A1 (6 units)**: Evaluate against TOPIK I requirements. Is 6 sufficient for hangul mastery + basic grammar + survival vocabulary?
- **A2 (4 units)**: ALMOST CERTAINLY NEEDS EXPANSION. 4 units for the particle system deepening, past/future tense, progressive, counters, connectors, honorific expansion, and 100+ Sino-Korean compounds is extremely tight. Compare against TOPIK I full requirements.
- **B1 (10 units)**: Evaluate against TOPIK II Level 3-4 requirements.
- **B2 (10 units)**: Evaluate against TOPIK II Level 5-6 requirements.

**Expected outcome**: Korean may need 35-40 units total. If so, it gets 35-40 units. P54 applies.

### Dutch

Re-evaluate against NT2 Staatsexamen I and II requirements. The 6-4-10-10 distribution was built first and served as a template for others. It must now be verified as concept-driven for Dutch specifically.

### German

Current 8-8-7-6 flagged by D110. The D111 sub-level fix adjusted labels but did NOT restructure content. Re-evaluate against Goethe-Institut level requirements:
- German A1 has more grammar than Romance A1 (nominative + accusative cases, 3 genders, separable verbs). 8 A1 units may be justified.
- German B2 with only 6 units for advanced Konjunktiv II, participial constructions, advanced passive, all discourse markers, proverbs/idioms, and TestDaF prep is almost certainly insufficient.

### French

Current 8-8-8-6 flagged by D110. Re-evaluate against DELF requirements:
- French B2 with 6 units for subjonctif passe, conditionnel passe, nominalization, discourse markers, proverbs, and DELF B2 prep is tight.
- Research showed B1 is the grammar-heaviest level for French (subjonctif present introduction + all triggers). 8 B1 units may not be enough.

### Spanish

Current 8-8-8-6 flagged by D110. Re-evaluate against DELE/PCIC requirements:
- Same B1/B2 compression issues as French.
- Research confirmed B1 is the most grammar-dense level for Spanish (subjuntivo presente, pluscuamperfecto, condicional, si clauses, relative pronouns, passive).

---

## PHASE 4: STRUCTURAL RE-VERIFICATION

After vocabulary/grammar gaps are fixed and unit counts adjusted, re-run ALL structural checks:

- P8 anti-leak (expanded sample: 20+ per level per language)
- P48 step type correctness
- P49 no meta-curriculum
- P22c no em-dashes
- P43 density
- board:true
- Sub-level label consistency
- P52 teach-before-use (FULL automated verification)

---

## AGENT DEPLOYMENT STRATEGY

### This audit is TOO LARGE for a single session.

Realistic scope: This is a multi-session project. Each session should focus on ONE language and complete ALL 15 checklist items for that language before moving to the next.

### Suggested session order:
1. **Session 1: Korean** (most complex, gold standard, sets the template)
2. **Session 2: Dutch** (second gold standard, validates the template)
3. **Session 3: German** (most grammar-dense European language)
4. **Session 4: French** (similar structure to Spanish, do first)
5. **Session 5: Spanish** (last, benefits from all learnings)

### Per-session workflow:

1. **Research phase** (1-2 Opus agents): Obtain/reconstruct the official vocabulary and grammar lists for this language at each CEFR level. Web search + official sources.

2. **Extraction phase** (Bash scripts): Extract all currently taught vocabulary and grammar from the units file. Produce machine-readable lists.

3. **Gap analysis phase** (1 Opus agent): Compare official lists against extracted lists. Produce gap reports with exact missing items.

4. **Unit count evaluation** (main session): Based on gap analysis, determine if the current unit count is sufficient or needs expansion.

5. **Content building phase** (Opus agents, Rule 9 sequential workflow): Build missing teach cards, quiz steps, lessons, and units. Follow ALL pipeline rules.

6. **Verification phase** (Sonnet agents + Bash scripts): Run all 15 checklist items. Produce final audit report.

7. **Documentation phase** (main session): Update CLAUDE.md, DECISION_LOG.md, and audit report.

### Agent rules (all existing rules apply, PLUS):

- **Rule 14: Official Source Verification** — Every vocabulary or grammar claim must cite the official source (exam name, page number, or URL). "I think this word is A2" is not evidence. "Goethe-Wortliste A2, page 15" is evidence.

- **Rule 15: No Sampling for Completeness Audits** — Sampling (checking 10% and extrapolating) is NEVER acceptable for vocabulary or grammar completeness. Check EVERY item on the official list. This is not a spot-check — it's a certification.

---

## SUCCESS CRITERIA — THE NEW STANDARD

The audit for each language is COMPLETE when:

1. **P55 Vocabulary Completeness**: 95%+ of official exam vocabulary has dedicated teach cards. Remaining 5% must be justified (archaic words, regional variants, etc.) and documented.

2. **P57 Grammar Completeness**: 100% of official exam grammar constructs are taught and practiced. Zero gaps.

3. **P58 Communicative Functions**: ALL CEFR communicative functions at each level are covered with practice lessons.

4. **P56 Unit Count**: Unit count is justified by a concept catalogue, not a template. Any needed expansion is built.

5. **P52 Teach-Before-Use**: Every quiz word traces to a prior dedicated teach card. Automated verification PASS.

6. **P53 Full Checklist (expanded to 15 items)**: ALL 15 items PASS.

7. **Exam simulation**: A domain expert confirms that a learner completing the LingoVerse curriculum would be prepared for the official exam at each level.

8. **Documentation**: CLAUDE.md, DECISION_LOG.md, and language-specific audit reports are fully updated.

---

## FILES TO AUDIT

| Language | Units file | Lines | Units | Lessons | Steps |
|----------|-----------|-------|-------|---------|-------|
| Korean | `src/data/units-korean.js` | ~8,700 | 30 | ~311 | ~6,900+ |
| Dutch | `src/data/units-dutch.js` | ~8,091 | 43 (30 v2 + 23 legacy) | 244 v2 | ~5,446 |
| German | `src/data/units-german.js` | ~7,407 | 30 | 240 | ~4,518 |
| French | `src/data/units-french.js` | ~1.3MB (minified) | 30 | 240 | ~4,380 |
| Spanish | `src/data/units-spanish.js` | ~5,262 | 30 | 240 | ~4,363 |

Infrastructure:
- `src/data/metadata.js` — LANG_META, LANG_BLUEPRINT, CULTURE_PACKS
- `src/data/foundations.js` — FOUNDATIONS_BY_LANG, FK_PLAYTHROUGH, FK_GATE_QUIZ
- `src/data/vocabulary.js` — ARTICLE_SYSTEMS, ARTICLE_COLORS

---

## REFERENCE DOCS

Read in order:
1. `CLAUDE.md` — Single source of truth (READ FIRST, ALWAYS)
2. `docs/LINGOVERSE_MASTER_BIBLE.md` — Full philosophy, per-language standards
3. `docs/POLYGLOT_PIPELINE_STANDARDS.md` — Six pillars, pipeline rules, per-language standards
4. `docs/CONCEPT_REGISTRY.md` — Korean grammar/vocab index
5. `docs/DECISION_LOG.md` — All D-numbers (D1-D112+)
6. `docs/KOREAN_B1_CURRICULUM_DESIGN.md` — B1 design template

---

## WHAT PREVIOUS AUDITS GOT RIGHT (preserve)

- D109: 694 content fixes (P8, P22c, P49, mc ans mismatches)
- D109: CEFR grammar coverage verification with grep evidence
- D110: Identified CEFR distribution imbalance, created P51-P54
- D111: Fixed sub-level label inconsistencies, ran automated structural scans

These results are preserved. D112 adds the VOCABULARY and GRAMMAR COMPLETENESS layers that no previous audit has ever checked.

---

## THE VISION — WHY THIS MATTERS

LingoVerse is not "another Duolingo." Duolingo teaches vocabulary lists. LingoVerse teaches LANGUAGE SYSTEMS. But the vocabulary must be COMPLETE for the system teaching to work.

A learner who masters Korean grammar through LingoVerse but encounters unknown vocabulary on TOPIK is a learner who loses confidence in the platform. A learner who knows every grammar pattern but can't order food because the word for "receipt" was never taught is a learner who feels betrayed.

The goal: a learner who completes LingoVerse A1-B2 for ANY language can walk into the official certification exam and PASS. Not barely. Confidently. Because every word, every construct, every function they need was taught, practiced, and reinforced.

That is what "certification-grade" means. That is what LingoVerse must be.
