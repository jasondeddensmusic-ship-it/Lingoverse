# German V2 Build Handoff: A1 Fix + B1 + B2

> **Generated**: 2026-03-25
> **Status**: A2 COMPLETE + AUDITED. A1 at 49.8% Goethe coverage. B1/B2 not started.
> **Priority**: Fix A1 FIRST. Then B1. Then B2.
> **Tone**: This is a real product. Rule 25 applies. No sloppy work.

---

## 1. What's DONE (DO NOT REDO)

### A2 (U7-U12) - FULLY AUDITED, PRODUCTION-READY
- 6 units, 50 lessons, ~1,382 steps in `src/data/units-german-v2.js`
- 606/607 Goethe A2 words (99.8%) with dedicated teach cards
- 25/25 grammar constructs taught and practiced (3+ quiz steps each)
- Full audit PASS: PP55, PP52, PP8, PP57, PP48, PP22c, PP49, structural
- Story: Arztbesuch, Müllprofessor, Vereinskultur, Deutsche Bahn, Weihnachtsmarkt, Halbjahresbilanz

### Planning Docs (all in `docs/german/`)
- `cross-level-allocation.md` - B1 (12 units, 33 constructs, 1,843 words) + B2 (12 units, 33 constructs, ~2,000 words)
- `a2-vocabulary-mapping.md` + `a2-grammar-mapping.md` - completed and verified
- `a1-vocabulary-mapping.md` + `a1-grammar-mapping.md` - mapping done, content NOT complete
- `episode-scene-breakdowns.md` - all 36 episodes with scene descriptions
- `grammar-inventory-verification.md` - 118 constructs across A1-B2
- `communicative-functions-mapping.md` - 84 functions, 0 gaps
- `goethe-a1.json`, `goethe-a2.json`, `goethe-b1.json` - official word lists

### V1 Content Available for Salvage
- `src/data/units-german.js` - 1,444 teach cards, 19 verb tables, 70 tip cards
- V1 A2 covers only 8.8% of Goethe A2 vocab (rebuild was justified)
- 9 verb tables to port (Partizip II patterns, dative articles/pronouns, hätte/wäre)
- 12 Wechselpräpositionen tips to port (V2 has 1, V1 has 12 systematic breakdowns)
- 8 additional grammar tips to port (sein/haben decision tree, dative verbs, reflexive preps)

---

## 2. What's NOT DONE (THE WORK)

### PRIORITY 1: Fix A1 (URGENT - 426 missing Goethe words)

**Current state**: 6 units, 44 lessons, 932 steps. 422/848 Goethe A1 words = **49.8% coverage**.

**Missing by unit**:
| Unit | Mapped | Missing | Coverage | Key Gaps |
|------|--------|---------|----------|----------|
| U1 | 149 | 108 | 27.5% | Numbers 1-20, articles, pronouns, prepositions, question words |
| U2 | 175 | 102 | 41.7% | Place nouns, travel verbs, directional adverbs |
| U3 | 116 | 47 | 59.5% | Home/family vocab gaps |
| U4 | 130 | 44 | 66.2% | Food/drink nouns, large numbers |
| U5 | 52 | 2 | 96.2% | Nearly complete |
| U6 | 226 | 123 | 45.6% | Body parts, communication, work, social nouns |

**Also fix**: 4 under-dense lessons (deu_r2l1:15, deu_r3l1:14, deu_r3l8:16, deu_r4l1:14)

**Approach**:
1. Load `docs/german/a1-vocabulary-mapping.md` for each unit
2. Grep v2 A1 content for each word
3. Add missing teach cards to appropriate lessons (add new lessons if needed)
4. Fix 4 under-dense lessons
5. Run full PP55 + PP52 + PP8 audit
6. Rule 19: verify Goethe coverage DURING build, not after

### PRIORITY 2: Port V1 Content to V2

**Port NOW (high value)**:
- 4 Partizip II verb tables (V1 lines 2558, 2599, 2640, 2683) -> V2 U10
- 3 Dative article/pronoun tables (V1 lines 3179, 3190, 3267) -> V2 U7
- 12 Wechselpräpositionen tips (V1 U12 lines 3575-3915) -> V2 U8
- 2 Konjunktiv II tables (V1 lines 4863, 4865) -> V2 U11

**Port later**: sein/haben decision tree, reflexive prep tips, daily routine verbs table

### PRIORITY 3: B1 Build (U13-U24)

**Specs** (from `cross-level-allocation.md`):
| Unit | Episode | Grammar | Words |
|------|---------|---------|-------|
| U13 | Die Bewerbung | Präteritum expanded, Konj II expanded/modals | ~150 |
| U14 | Erster Arbeitstag | Passive Präsens, Relative clauses (nom/acc/dat) | ~150 |
| U15 | Reise nach Hamburg | Genitive case, N-Deklination | ~150 |
| U16 | Der Streit | Indirect questions, Konj I preview | ~150 |
| U17 | Karneval im Rheinland | um/ohne/statt...zu, damit vs um...zu | ~150 |
| U18 | Im Biergarten | als vs wenn, Verbs+fixed preps, da-/wo- compounds | ~150 |
| U19 | Ausländerbehörde | nachdem/bevor/sobald, Passive+modals | ~160 |
| U20 | Die Versicherung | obwohl/damit/falls, Compound nouns deep | ~160 |
| U21 | Ost und West | Adj declension (no article+genitive), Partizip I+II adj | ~160 |
| U22 | Umwelt und Alltag | Infinitive clauses expanded, Reciprocal verbs | ~160 |
| U23 | Die Prüfung | Adverbial conjunctions, brauchen+zu | ~153 |
| U24 | Einjährig | Plusquamperfekt, Futur I, Double infinitive, Review | ~150 |

**Totals**: 33 grammar constructs, 1,843 Goethe B1 words, 12 units, ~96 lessons

**Build steps**:
1. Download/verify `goethe-b1.json` word list
2. Create `b1-vocabulary-mapping.md` (map 1,843 words to 12 units)
3. Create `b1-grammar-mapping.md` (map 33 constructs with teach/practice/recycle plan)
4. Design lessons per unit (like `a1-u{1-6}-lessons.md`)
5. Build using Rules 18-25 (direct-write, Goethe verification during build, max 20 words/agent)
6. Full audit (PP55, PP52, PP8, PP57, structural)
7. Fix until all pass

### PRIORITY 4: B2 Build (U25-U36)

Same as B1 but: no official Goethe B2 word list. Use telc "Einfach besser!" lists + frequency supplements. ~1,700-2,700 additional words. 33 grammar constructs including Modalpartikeln.

---

## 3. Proven Build Workflow (from A2 session)

### What Worked
1. **2 agents per lesson pair** - parallel, each writes to own temp file
2. **Validate per lesson** - step count, PP48, board:true before assembly
3. **Assemble per unit** - cat header + lessons + footer
4. **Merge and build** - insert before `];`, run `npx vite build`
5. **Commit per unit** - small commits, easy rollback
6. **5 parallel audit agents after all units** - PP55, PP52, PP8, PP57, structural
7. **Fix agents per unit pair** - sequential, not concurrent on same file
8. **Re-audit until all pass**

### What Failed
1. **No Goethe word list given to build agents** - caused 59 missing A2 words
2. **Agents with 30+ words** - died or timed out (U9 L8: 42 words, U12 L10: 38 words)
3. **3 concurrent fix agents on same file** - broke syntax with literal newlines
4. **No PP8 pre-commit scan** - shipped 11 hint leaks and 8 visual leaks
5. **Assuming A1 was complete** - it was at 49.8%, not verified

### The Right Way (Rules 19-25)
- Every build agent gets the Goethe word list for their unit
- Every unit is verified against Goethe BEFORE merging
- Max 20 new vocab per agent lesson
- PP8 hint-leak grep before every commit
- V1 checked for recyclable content before writing from scratch
- Full audit is safety net, not primary quality control

---

## 4. Pipeline Rules Quick Reference

| Rule | Summary |
|------|---------|
| PP8 | 5 leak types: visual, script, hint, pattern, position |
| PP22c | No em-dashes ever |
| PP34/PP52 | Teach before test. "Taught" = own teach card |
| PP37 | Function words need teach cards |
| PP43 | 18+ steps per lesson minimum |
| PP44 | Hints 15+ chars, guide not reveal |
| PP46 | B1+ 50%+ multi-construct quiz steps |
| PP48 | fb = single blank, drag_fill = multi-blank |
| PP49 | No CEFR labels in learner content |
| PP54 | Anti-cramming. Content decides count |
| PP55 | Every Goethe word gets a teach card. Zero gaps |
| PP57 | Every grammar construct taught + 3 quiz steps + 2 recycle |
| Rule 19 | Goethe verification DURING build |
| Rule 20 | Max 20 words per agent lesson |
| Rule 21 | No 3+ concurrent edits on same file |
| Rule 22 | PP8 hint-leak scan before commit |
| Rule 23 | Verify A1 vocab before building A2+ |
| Rule 24 | Salvage V1 content first |
| Rule 25 | This is not a game |

---

## 5. File Locations

| File | Contents |
|------|----------|
| `src/data/units-german-v2.js` | V2 curriculum (12 units, 102 lessons, 2,636 steps) |
| `src/data/units-german.js` | V1 curriculum (30 units, 259 lessons, salvage source) |
| `docs/german/goethe-a1.json` | 848 A1 words |
| `docs/german/goethe-a2.json` | 612 A2 words |
| `docs/german/goethe-b1.json` | 1,843 B1 words |
| `docs/german/a1-vocabulary-mapping.md` | 848 words mapped to U1-U6 |
| `docs/german/a2-vocabulary-mapping.md` | 607 words mapped to U7-U12 |
| `docs/german/cross-level-allocation.md` | B1+B2 unit/grammar/vocab allocation |
| `docs/german/episode-scene-breakdowns.md` | All 36 episodes with scenes |
| `docs/german/grammar-inventory-verification.md` | 118 constructs A1-B2 |

---

## 6. Format Reference

Every teach card:
```javascript
{type:"teach",nl:"das Wort",en:"the word",note:"Gender, plural, usage.",
example:"A: Sentence?\nB: Response.\nA: Follow-up.",
exampleEn:"A: Translation?\nB: Translation.\nA: Translation.",
funFact:"Interesting memorable fact."}
```

Every lesson: `board:true`, 18+ steps, id format `deu_r{unit}l{lesson}`.
Every unit: `{n:X,lang:"de",track:"v2",title:"...",level:"A2.1",color:"#7B5EE8",lessons:[...]}`
