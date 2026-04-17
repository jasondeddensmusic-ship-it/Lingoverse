# Session Handoff — 2026-04-17 (Italian + Japanese Polish Complete)

> This is the DEFINITIVE handoff. Read `CLAUDE.md` first, then this file.

---

## HOW YOU WORK (Non-Negotiable)

**You work COMPLETELY AUTONOMOUSLY.** The owner is not a coder. You execute, deploy agents, merge results, validate, fix, push to main, and keep going until the job is done. The owner expects to come back and find things finished.

**The documentation IS the rulebook.** Every rule in `CLAUDE.md`, every PP-number, every decision in `docs/DECISION_LOG.md` is LAW. You follow them exactly.

**You validate until PERFECTION.** Zero PP8. Zero PP48. Zero PP22c. PP61 metalanguage in English everywhere. PP59 pos+gender on every card. PP64 teach-then-test. PP52 teach-before-use. Run the validators, fix what they find, run them again until they pass.

**You push to main after every milestone.** Create PR, merge, verify.

---

## Current State — 7 Languages Live

| Language | Units | Teach Cards | CEFR | Grammar | Foundations | Status |
|----------|-------|-------------|------|---------|-------------|--------|
| German v2 | 36 | 5,048 | A1-B2 COMPLETE | 58 entries | YES | GOLD STANDARD |
| Korean | 69 | 5,166 | A1-B2 COMPLETE | 47 entries | YES (Hangul) | COMPLETE |
| Dutch | 89 | 5,106 | A1-B2 COMPLETE | mock quality | YES | COMPLETE |
| French | 90 | 5,036 | A1-B2 COMPLETE | 52 entries | YES | COMPLETE |
| Spanish | 92 | 5,124 | A1-B2 COMPLETE | 53 entries | YES | COMPLETE |
| Italian | 36 | 5,013 | A1-B2 COMPLETE | 51 entries | YES | POLISHED |
| Japanese | 36 | 4,978 | A1-B2 COMPLETE | 54 entries | YES (Kana+Kanji) | POLISHED |

**Note:** Teach cards are split across unit files (603 each in `unit-*.js`) and batch density files (4,176 Italian / 4,375 Japanese in `_batch*` files). Both are wired and active.

**Grand total: ~30,500+ teach cards across 7 languages. All at ~5K each.**

---

## What Was Done This Session (2026-04-17)

### Completed (All PRs Merged)

1. **Japanese Foundations** (PR #165) — 9 phases, 14 lessons, 253 steps
   - Hiragana (all 46 characters across 4 phases)
   - Dakuten + handakuten (voiced/semi-voiced sounds)
   - Combo sounds (small ya/yu/yo combinations)
   - Katakana (all 46 + special features like long vowel mark, double consonants)
   - Kanji awareness (on'yomi/kun'yomi, radicals, furigana concept)
   - Gate quiz: 5 tasks, 41 items with diagnostic routing

2. **Kanji + Furigana on ALL Japanese Cards** (PR #165) — 603 cards converted
   - All teach card examples and trg fields now use kanji with furigana: 大学(だいがく)
   - 6,801 furigana instances added (up from 0)
   - 597/603 examples now have kanji (up from 14)
   - Owner-directed decision: kanji from A1 day one, not B1+ only

3. **Teach Card Interleaving** (PR #166) — 92 match quiz breaks
   - Italian: 88 quiz breaks across 32 unit files
   - Japanese: 4 quiz breaks across 4 unit files
   - Zero lessons now have 8+ consecutive teach cards

4. **Grammar Module Expansion** (PR #166)
   - Italian: 12 → 51 entries (CILS/CELI-aligned A1-B2)
   - Japanese: 22 → 54 entries (JLPT N5-N2-aligned, kanji+furigana throughout)

5. **Italian Foundations** (PR #166) — 4 stages, 5 lessons, 62 steps
   - Pronunciation rules (C/G hard/soft, CH/GH, SC/GN/GLI)
   - Accent marks (grave/acute, meaning-changing pairs)
   - Double consonants, silent H, rolled R
   - Spelling patterns (gender, plurals, definite articles)
   - Gate quiz: 5 tasks, 33 items

6. **CEFR Reference Files** (PR #166)
   - Italian: 1,140 vocabulary entries, 89 grammar constructs, 55 communicative functions
   - Japanese: 977 vocabulary entries, 95 grammar constructs

7. **Dialogue CEFR Scaling** (PR #167)
   - Italian B1: 272 dialogues expanded from 2 → 4 turns
   - Italian B2: 297 dialogues expanded from 2 → 6 turns
   - Japanese B1: all dialogues expanded from 2 → 4 turns
   - Japanese B2: all dialogues expanded from 2 → 6 turns
   - Zero B1/B2 dialogues now under CEFR turn targets

### Key Design Decision

**Kanji + furigana from day one** (owner-directed, 2026-04-17): ALL Japanese content uses kanji with furigana notation from A1 Unit 1 onward. Pure hiragana is harder to read (word boundaries disappear). This matches how real Japanese works: children's books, textbooks, and NHK Easy News all show kanji with furigana. The Foundations module teaches hiragana/katakana so learners can READ the furigana.

---

## WHAT THE NEXT AGENT MUST DO (Priority Order)

### Phase 1: Kanji+Furigana on Japanese Batch Files

The 603 teach cards in unit files were converted to kanji+furigana this session. But the 4,375 cards in batch density files (`_batch*_u*.js` in `japanese-v2/`) still use pure hiragana in their examples. These need the same kanji+furigana conversion. Deploy agents per batch set (batch3 through batch11) to convert all example fields.

2. **PP validation** — Run PP8/PP43/PP48/PP52/PP59/PP61/PP64/PP22c validators on Italian + Japanese.

### Phase 2: A2 Dialogue Scaling

A2 dialogues still average 2 turns (target: 3-4). Italian: 138 need expansion. Japanese: 28 need expansion. Lower priority than density.

### Phase 3: Next Languages

The market analysis (`docs/reference/MARKET_ANALYSIS_2026.md`) identifies:

| Priority | Language | EN learners | Effort |
|----------|----------|------------|--------|
| 1 | **Chinese (Mandarin)** | 9.65M | HIGH (tones, hanzi, Foundations) |
| 2 | **Portuguese** | 7.33M | MEDIUM (Romance, Latin script) |
| 3 | **Russian** | 5.4M | MEDIUM-HIGH (Cyrillic, cases) |

Follow `docs/reference/LANGUAGE_INTEGRATION_PIPELINE.md` for each.

### Phase 4: Feature Polish (Deferred)

- Verb tables clickable (universalHl integration)
- Idioms page search/filter
- German Foundations content (placeholder)
- Smooth lesson transitions
- Google Cloud TTS integration

---

## Reference Documents

| Doc | What it is | When to read |
|-----|-----------|-------------|
| `CLAUDE.md` | Single source of truth. ALL rules. | FIRST |
| `docs/vision/VERUMLINGUA_REHAUL_VISION.md` | Platform design spec | Before content work |
| `docs/agents/AGENT_CONTENT_RULES.md` | Copy into EVERY content agent prompt | Before deploying agents |
| `docs/agents/FORMAT_TEMPLATE.js` | 2KB format reference | Give to every agent |
| `docs/reference/FK_DECISION_FRAMEWORK.md` | Foundations design framework | Before building Foundations |
| `docs/reference/CURRICULUM_DESIGN_PATTERNS.md` | Seed/harvest, unit counts | Before new language curriculum |
| `docs/reference/LANGUAGE_INTEGRATION_PIPELINE.md` | Step-by-step for new language | Before starting new language |

---

## PRs Merged This Session

- #165: Japanese Foundations + kanji+furigana conversion
- #166: Grammar expansion + interleaving + Italian Foundations + CEFR reference files
- #167: B1/B2 dialogue CEFR scaling
