# Session Handoff — 2026-04-12 (V2 Rehaul Infrastructure + Korean Enrichment)

## What Was Done

### 1. Multi-Language Validator Infrastructure
- `scripts/pp8_validate.cjs` — generalized with `--lang=` parameter, auto-detects unit count, language-aware word extraction (Korean Hangul support), accent-aware Latin matching for French/Spanish
- `scripts/pp64_validate.cjs` — generalized with `--lang=` parameter, per-language exempt word lists (Korean particles, Dutch de/het, French articles, Spanish articles), per-language compound prefix lists
- Both validators default to `--lang=german` for backward compatibility
- Verified: German still PASSES both validators (PP8: 0 violations, PP64: 99.9%)

### 2. Korean V2 Concept Catalogue
- `docs/korean/KOREAN_V2_CONCEPT_CATALOGUE.md` — PP56-compliant unit count analysis
- 40 units total (6 A1 + 7 A2 + 12 B1 + 15 B2), concept-driven from:
  - 5,670 CEFR vocabulary words (from `src/data/cefr-reference/korean.js`)
  - 135 grammar constructs (113 taught, ~50 new needed for B2)
  - 84 communicative functions (A1:20, A2:20, B1:22, B2:22)
- TOPIK gap: 3,273 new teach cards needed (316 A-level + 887 B1 + ~2,000 B2)
- Korean FSI Category IV justifies more units than German (40 vs 36)

### 3. Korean POS Tagging (PP59 — COMPLETE)
- `scripts/korean_pos_autotag.cjs` — auto-tagger using kind field + Korean morphology rules
- All 1,328 teach cards tagged: noun 680, verb 236, part 222, intj 120, pron 38, aux 16, num 9, adv 6, adj 1
- Korean `gender:null` on all cards (no grammatical gender)
- Build PASSES

### 4. Korean FunFact Enrichment (PP — COMPLETE, quality mixed)
- `scripts/korean_funfact_autogen.cjs` — 6-tier rule system
- All 1,336 teach cards have funFact: hanja etymology (472), grammar patterns (283), loanwords (32), cultural (14), compounds (35), fallback (500)
- Quality: hanja etymologies excellent, fallback tier needs refinement in future pass
- Build PASSES

### 5. Korean Per-Unit File Split (COMPLETE)
- `scripts/split_korean_units.cjs` — splits 9,153-line monolith into 30 per-unit files
- `src/data/korean-v2/unit-01.js` through `unit-30.js` (~250-385 lines each)
- Wrapper files: `units-korean-v2.js`, `units-korean-v2-a1.js` through `b2.js`
- Wired into `src/utils.js` UNITS assembly (201 modules now, up from 166)
- All files have `track:"v2"`, `srcLang:"en"`
- V1 monolith (`units-korean.js`) untouched — both v1 and v2 coexist
- Build PASSES

### 6. Migration Script
- `scripts/migrate_v1_to_v2.cjs` — field rename utility (nl→trg, en→src) for all v1 languages
- NOT yet applied — `_normStep()` in utils.js handles both formats transparently
- Available when mechanical rename is needed

---

## Validator Status

| Check | German v2 | Korean v2 |
|-------|-----------|-----------|
| Build | **PASS** | **PASS** |
| PP8 | **PASS** (0/3,482) | **FAIL** (824 violations, pre-existing from v1) |
| PP59 pos/gender | **PASS** | **PASS** (1,328 cards tagged) |
| PP64 | **99.9%** | Not yet run (needs validation) |

---

## Files Changed (73 total)

| Category | Files | Changes |
|----------|-------|---------|
| Validators | 2 | Generalized for multi-language |
| Scripts | 4 | POS tagger, funFact generator, unit splitter, migration tool |
| Korean v2 units | 30 | Per-unit files from monolith split |
| Korean v2 wrappers | 5 | Per-level imports + main re-export |
| Utils | 1 | Korean v2 wired into UNITS assembly |
| Docs | 2 | Concept catalogue + this handoff |

---

## Next Session Priorities

### Korean Phase 3: New Content Build
The enrichment of existing V1 cards is DONE. Now the real content work begins:

1. **A2 gap content** — 386 new teach cards for missing TOPIK A words
   - Top priorities: 187 nouns (몸, 생활, 하늘, 춤, 한복), 59 verbs (나오다, 넣다, 웃다), 27 adjectives
   - These go into new lessons within units 7-13 (existing units get expanded + 3 new A2 units)

2. **B1 gap content** — 887 new teach cards for TOPIK B1 words
   - High-frequency missing: 경우, 소리, 인간, 시대, 세계
   - Existing units 11-20 get expanded + 2 new B1 units

3. **B2 expansion** — ~2,000 new teach cards (top frequency TOPIK B2)
   - Formal suffix verbs (위하다, 의하다, 관하다, 통하다)
   - Abstract nouns (방법, 내용, 의미, 부분, 활동)
   - ~48 new grammar constructs
   - Existing units 21-30 expanded + 5 new B2 units

4. **PP8 fix** — 824 pre-existing hint/visual leak violations
   - Run after new content exists (new hints may fix some leaks)

5. **Grammar module** — `src/data/grammar/korean.js`
   - A1-B2 entries with teacher-board quality
   - Particle tables, honorific level tables, conjugation patterns

### Agent Strategy for Content Build
- Opus agents for creative content (max 4 at a time, Rule B7)
- Each agent: 1 unit, ~4K token input budget
- Each gets: `AGENT_CONTENT_RULES.md` + `FORMAT_TEMPLATE.js` + unit blueprint + TOPIK gap words
- Agents write to temp files → main session merges + validates
- Sonnet agents for PP8/PP52/PP64 validation in parallel

### After Korean: Dutch → French → Spanish
Same pipeline: concept catalogue → V1 enrichment → per-unit split → new content → validation.
Scripts created this session are reusable for all languages.

---

## Key Decisions Made

1. **V1 field rename deferred** — `_normStep()` handles both nl/en and trg/src transparently. No need for mechanical rename before enrichment.
2. **V1 coexistence** — Both v1 monolith and v2 per-unit files load into UNITS simultaneously. V2 has `track:"v2"`, V1 has `track:"v1"`. Engine handles both.
3. **Unit count = 40** — Concept-driven from TOPIK word lists + grammar inventory + communicative functions. FSI Category IV justifies more than German's 36.
4. **FunFact quality tradeoff** — Generated first pass covers 100% of cards but ~37% are fallback quality. Better to have the field exist (for card layout) and refine later than block on perfection.
5. **Reusable tooling** — POS tagger, funFact generator, and unit splitter scripts are parameterizable for Dutch/French/Spanish.
