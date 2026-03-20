# D119: German Curriculum + Story Rehaul — Planning Session

> This is a PLANNING document. No code is written until the plan is approved by the owner.
> German is the FIRST language to receive the full platform rehaul treatment.

---

## 1. Session Goal

Design the complete German A1-B2 curriculum in the new VerumLingua format:
- **Story arcs** per unit (Verumius in Germany)
- **Cast of characters** per CEFR level
- **Interleaved lesson flow** (story intro -> vocab -> story dev -> grammar -> quiz -> resolution)
- **Concept-driven unit sizing** (P56): unit count from catalogued concepts, not templates
- **CEFR word list integration**: every word taught, every grammar construct covered

---

## 2. Current German State

### Existing Content (D103, all old format)
- 30 units (U1-U30), 258 lessons, ~4,876 steps
- A1 (U1-U8): Greetings, introductions, family, food, daily routine, home, directions, shopping
- A2 (U9-U16): Perfekt, dative, Wechselprapositionen, comparatives, Nebensatze, reflexive, future, Konjunktiv II basics
- B1 (U17-U24): Prateritum, passive, relative clauses, genitive, indirect speech, infinitive, advanced connectors, work culture
- B2 (U25-U30): Advanced Konjunktiv II, participial, advanced passive, discourse markers, proverbs/idioms, TestDaF/telc prep
- 1,100/1,100 teach cards with A:/B: dialogues (100%)
- German conjugation engine: `german-conjugation.js` with strong/mixed/modal/auxiliary verb tables, case declension, form index

### Known Issues (D110)
- **CEFR distribution flagged**: 8-8-7-6 (A1-A2-B1-B2) vs gold standard 6-4-10-10
- B-level content compressed (13 units vs 20 in gold standard)
- Deep P52 teach-before-use verification not done
- FSI Category II language (~900 class hours) — more units needed than Category I

### Infrastructure Ready
- `LANG_BLUEPRINT["de"]`: COMPLETE
- `FOUNDATIONS_BY_LANG["de"]`: COMPLETE (6 sections, 25 items)
- `FK_PLAYTHROUGH["de"]`: COMPLETE (6 stages, 15 lessons)
- `FK_GATE_QUIZ["de"]`: COMPLETE (5 tasks, 35 items)
- `german-conjugation.js`: Full conjugation engine (strong/mixed/modal/auxiliary)
- `function-words-de.js`: Function word list with POS tags
- `WORD_DB["de"]`: Built from teach cards + function words

---

## 3. Planning Tasks

### 3a. Concept Catalogue (P56)
For each CEFR level, catalogue ALL required concepts from official sources:

**Official Sources for German:**
- Goethe-Institut Wortliste (A1: ~650, A2: ~1,300, B1: ~2,400, B2: ~4,000+ words)
- Goethe-Institut grammar inventory by level
- Dreyer & Schmitt (Lehr- und Ubungsbuch der deutschen Grammatik)
- telc exam specifications
- Profile deutsch (CEFR reference for German)

**Catalogue format per level:**
1. Grammar constructs (with official source reference)
2. Vocabulary domains (with word counts from Goethe lists)
3. Communicative functions (CEFR descriptors)
4. Cultural competences

### 3b. Unit Count Determination
- Current: 30 units (8-8-7-6)
- Target: concept-driven (likely 35-40+ for Category II language)
- Distribution must satisfy P51: B1+B2 >= A1+A2
- Each unit gets exactly the space its concepts need (P54)

### 3c. Story System Design

**Protagonist**: Verumius (Roman scholar chibi, learning German)
**Setting**: Verumius arrives in Germany. Story grows with CEFR:
- A1: Survival situations (airport, hotel, supermarket, cafe)
- A2: Daily life (apartment, neighbors, doctor, hobbies)
- B1: Professional/social (job interview, workplace, travel, culture)
- B2: Advanced (university, debate, media, bureaucracy)

**Cast of Characters** (per vision doc Section 3):
- Design 4-6 recurring characters per level
- Each character represents a German cultural archetype
- Characters grow and develop across units
- Dialogue reflects natural German register progression

**Episode Format** (per vision doc Section 3.3):
Each unit = 1 story episode with interleaved lessons:
1. Story Intro (scene-setting, new situation)
2. Vocab Lesson (words needed for the story)
3. Story Development (plot advances, new vocab in context)
4. Grammar Lesson (pattern from the story explained)
5. Story Climax (drama/comedy peak, grammar in use)
6. Quiz (test vocab + grammar from this episode)
7. Story Resolution (wrap-up, preview next episode)

### 3d. Lesson Format (New)
Per vision doc Section 4:
- **Vocab lessons**: 2-bubble teach cards only, each with fun info
- **Story episodes**: Tagged dialogue with grammar coloring
- **Grammar lessons**: Tips + verb tables + practice
- **Quiz lessons**: MC, FB, drag_fill, translation
- **Review lessons**: Spaced repetition of prior content

### 3e. Content Salvage (Vision doc Section 2.4)
- Extract all existing German sentences and dialogues
- Save to `docs/salvage/german-sentences.json`
- Redistribute into new story dialogues and quiz content
- Nothing thrown away

---

## 4. Deliverables

This planning session should produce:
1. **Complete concept catalogue** per CEFR level (grammar + vocab + functions)
2. **Revised unit count and distribution** with justification
3. **Story bible**: character profiles, story arcs per level, episode summaries
4. **Unit-by-unit plan**: title, story episode, vocab domains, grammar constructs, lesson count
5. **Salvage inventory**: count of reusable sentences from existing content
6. **Build order**: which units to build first, estimated sessions needed

---

## 5. Constraints

- **P54 Anti-Cramming**: Content serves the language, not a spreadsheet
- **P55 Vocabulary Completeness**: Every Goethe-Wortliste word gets a teach card
- **P56 Concept-Driven Sizing**: Unit count from concepts, not templates
- **P57 Zero Grammar Gaps**: Every grammar construct taught, practiced (3+), recycled (2+)
- **P58 Communicative Functions**: All CEFR functions at each level covered
- **Vision doc authority**: When this plan and the vision doc conflict, vision doc wins
- **German-specific**: der/die/das article system, 4 cases, word order (V2, Nebensatz), compound nouns, formal/informal register (Sie/du)

---

## 6. Agent Instructions

Use `model:"opus"` for all planning agents (Rule 11). This session is PLANNING ONLY:
- Research official Goethe/telc exam requirements
- Catalogue concepts exhaustively
- Design story arcs and characters
- Produce the unit-by-unit plan
- Do NOT write any curriculum code
- Do NOT modify any units-*.js files
- Present the plan for owner approval before any implementation
