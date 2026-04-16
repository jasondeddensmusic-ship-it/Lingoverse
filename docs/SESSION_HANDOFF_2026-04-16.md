# Session Handoff — 2026-04-16 (Italian 5K, Japanese 5K, 7 Languages Live)

> This is the DEFINITIVE handoff. Read `CLAUDE.md` first, then this file.

---

## HOW YOU WORK (Non-Negotiable)

**You work COMPLETELY AUTONOMOUSLY.** The owner is not a coder. You execute, deploy agents, merge results, validate, fix, push to main, and keep going until the job is done. The owner expects to come back and find things finished.

**The documentation IS the rulebook.** Every rule in `CLAUDE.md`, every PP-number, every decision in `docs/DECISION_LOG.md` is LAW. You follow them exactly.

**You validate until PERFECTION.** Zero PP8. Zero PP48. Zero PP22c. PP61 metalanguage in English everywhere. PP59 pos+gender on every card. PP64 teach-then-test. PP52 teach-before-use. Run the validators, fix what they find, run them again until they pass.

**You push to main after every milestone.** Create PR, merge, verify.

---

## Current State — 7 Languages Live

| Language | Units | Teach Cards | CEFR | Grammar | Status |
|----------|-------|-------------|------|---------|--------|
| German v2 | 36 | 5,048 | A1-B2 COMPLETE | 58 entries | GOLD STANDARD |
| Korean | 69 | 5,166 | A1-B2 COMPLETE | 47 entries | COMPLETE |
| Dutch | 89 | 5,106 | A1-B2 COMPLETE | mock quality | COMPLETE |
| French | 90 | 5,036 | A1-B2 COMPLETE | 52 entries | COMPLETE |
| Spanish | 92 | 5,124 | A1-B2 COMPLETE | 53 entries | COMPLETE |
| Italian | 36 | 5,013 | A1-B2 COMPLETE | 12 entries | DENSITY DONE, POLISH NEEDED |
| Japanese | 36 | 4,978 | A1-B2 COMPLETE | 20 entries | DENSITY DONE, POLISH NEEDED |

**Grand total: ~30,500+ teach cards across 7 languages.**

---

## WHAT THE NEXT AGENT MUST DO (Priority Order)

### Phase 1: Polish Italian + Japanese (BEFORE adding new languages)

#### Priority 1A: Japanese Foundations (CRITICAL BLOCKER)

Japanese content is UNUSABLE for complete beginners. There is NO hiragana/katakana introduction.

**Build Japanese Foundations using the FK framework** (`docs/reference/FK_DECISION_FRAMEWORK.md`):
1. Hiragana grid: 5 vowels (あいうえお) x 10 consonant rows + dakuten (゛) + handakuten (゜) + combo sounds (きゃ etc.)
2. Hiragana recognition drills: MC quiz matching hiragana to romaji
3. Katakana grid: same structure for loanword script
4. Katakana recognition drills: same quiz format
5. Kanji introduction tip: what kanji are, how on'yomi/kun'yomi work, radical concept
6. Gate quiz: must pass to unlock Unit 1

**Reference implementation**: Korean Foundations in `src/data/foundations.js` (FK_PLAYTHROUGH, FK_GATE_QUIZ). Copy the pattern for Japanese. The SCRIPT_BLUEPRINTS infrastructure for `kana` already exists in `src/data/metadata.js`.

#### Priority 1B: Kanji in Japanese B1+ Examples

All 4,978 Japanese teach cards use pure hiragana in examples. B1+ should show kanji with furigana:
- Add `exampleKanji` field to B1+ teach cards: `exampleKanji:"大学(だいがく)で哲学(てつがく)を専攻(せんこう)しました。"`
- A1-A2 stays pure hiragana (learners haven't learned kanji yet)
- The renderer can show hiragana by default with a toggle to reveal kanji+furigana

#### Priority 1C: Dialogue CEFR Scaling

Vision doc (`docs/vision/VERUMLINGUA_REHAUL_VISION.md` Section 2.2) says:
- A1: 2-3 exchanges, A2: 3-4, B1: 4-5, B2: 5+

Reality: ALL levels average 2.0 turns. Deploy agents to enrich B1/B2 `example` fields with 4-5+ turn dialogues. ~3,000 cards per language affected. Italian and Japanese both need this.

#### Priority 1D: Teach Card Interleaving (ADHD)

291 Italian + 105 Japanese lesson files have 8+ consecutive teach cards without quiz breaks. Insert quiz steps every 5-6 teach cards. Can be automated with a script.

#### Priority 1E: Italian + Japanese Grammar Module Expansion

Italian has only 12 grammar entries, Japanese has 20. German has 58. These need teacher-board quality expansion:
- Italian: target 50+ entries covering subjunctive, passato prossimo/remoto, conditional, all tenses
- Japanese: target 50+ entries covering te-form, passive, causative, conditionals, keigo, particles

#### Priority 1F: CEFR Reference Files

`src/data/cefr-reference/italian.js` and `japanese.js` do NOT exist yet. Agents hit rate limits trying to create them. These are needed for gap analysis to verify PP55 exam word coverage. Create them using the German file as format template.

#### Priority 1G: Italian Foundations

Lower priority than Japanese (Latin script is readable) but still needed: pronunciation rules, double consonants (pappa vs papa), accent marks (perche, citta), open/closed vowels.

---

### Phase 2: Next Languages (AFTER Italian + Japanese are polished)

The market analysis (`docs/reference/MARKET_ANALYSIS_2026.md`) identifies the next languages by demand from English source speakers:

| Priority | Language | EN learners | VL Status | Effort |
|----------|----------|------------|-----------|--------|
| 1 | **Chinese (Mandarin)** | 9.65M | NOT AVAILABLE | HIGH (tones, hanzi, Foundations) |
| 2 | **Portuguese** | 7.33M + bidirectional with Spanish | NOT AVAILABLE | MEDIUM (Romance, Latin script) |
| 3 | **Russian** | 5.4M | NOT AVAILABLE | MEDIUM-HIGH (Cyrillic, cases) |

**For each new language, follow `docs/reference/LANGUAGE_INTEGRATION_PIPELINE.md`:**
1. Register in LANGUAGES array
2. Create LANG_META + LANG_BLUEPRINT
3. Build Foundations (FK) using `docs/reference/FK_DECISION_FRAMEWORK.md`
4. Create CEFR reference word list
5. Design concept-driven unit structure using `docs/reference/CURRICULUM_DESIGN_PATTERNS.md`
6. Deploy batch content agents (proven 11-batch pipeline)
7. Wire, validate, merge
8. Create grammar module
9. Dictionary expansion using `docs/reference/DICTIONARY_EXPANSION_CHECKLIST.md`

---

## Reference Documents (Read These)

| Doc | What it is | When to read |
|-----|-----------|-------------|
| `CLAUDE.md` | Single source of truth. ALL rules. | FIRST |
| `docs/vision/VERUMLINGUA_REHAUL_VISION.md` | Platform design spec. Supersedes conflicts. | Before ANY content work |
| `docs/vision/VISUAL_AUDIO_LAYER.md` | Art, audio, navigation design | Before UI work |
| `docs/agents/AGENT_CONTENT_RULES.md` | Copy into EVERY content agent prompt | Before deploying agents |
| `docs/agents/FORMAT_TEMPLATE.js` | 2KB format reference | Give to every agent |
| `docs/reference/FK_DECISION_FRAMEWORK.md` | 6-step Foundations design framework | Before building any Foundations |
| `docs/reference/CURRICULUM_DESIGN_PATTERNS.md` | Seed/harvest, unit counts, lesson templates | Before building new language curriculum |
| `docs/reference/DICTIONARY_EXPANSION_CHECKLIST.md` | 6-item per-language dictionary checklist | Before adding dictionary support |
| `docs/reference/LANGUAGE_INTEGRATION_PIPELINE.md` | Step-by-step for new language | Before starting any new language |
| `docs/reference/MARKET_ANALYSIS_2026.md` | Language demand data + scaling priorities | Before choosing next language |

---

## Batch Density Pipeline (Proven Process)

This session proved the pipeline works. For reference:

```
1. node -e "[count teach cards per unit]"        # Assess gaps
2. Deploy Opus agent: 36 files x ~15 cards       # Write content
3. Wire: sed -i imports + lessons array spread    # Connect to units
4. node scripts/pp8_fix_hint_leaks.cjs --lang=X  # Auto-fix hints
5. node scripts/pp8_fix_position_length.cjs --lang=X  # Shuffle positions
6. npm run build                                  # Verify compilation
7. node scripts/pp8_validate.cjs --lang=X         # Validate PP8
8. git add + commit + push + gh pr create + merge # Ship it
9. Repeat until ~5K per language
```

**Key learnings:**
- Max 4 agents at a time (Rule B7)
- Opus for content, Sonnet for validation (Rule B14)
- Agents hit rate limits around 40-50 file writes. Design batches of 36 files max.
- Always run pp8_fix_hint_leaks AFTER wiring (catches substring leaks like "neutral" containing "tra")
- Batch files use naming: `_batch{N}_u{NN}_L{MM}.js` to avoid conflicts

---

## PRs Merged This Session

#158 (docs reorg), #159 (content expansion), #160 (validation), #161 (density 5K), #162 (audit), #163 (handoff)

---

## Key Decisions Made This Session

1. **Italian and Japanese promoted to 36 units each** matching German structure
2. **11-batch density pipeline** fills languages from ~1K to ~5K teach cards
3. **Vision compliance audit** revealed dialogue scaling and interleaving as systemic gaps
4. **Japanese Foundations identified as critical blocker** for beginner accessibility
5. **Next languages**: Chinese > Portuguese > Russian based on market demand data
6. **Docs reorganized**: 4 new extraction files preserve valuable content from archived docs
