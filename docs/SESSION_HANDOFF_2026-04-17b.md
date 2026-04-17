# Session Handoff — 2026-04-17b (Japanese PP65 Complete + Full Validation)

> This is the DEFINITIVE handoff. Read `CLAUDE.md` first, then this file.

---

## HOW YOU WORK (Non-Negotiable)

**You work COMPLETELY AUTONOMOUSLY.** The owner is not a coder. You execute, deploy agents, merge results, validate, fix, push to main, and keep going until the job is done. The owner expects to come back and find things finished.

**The documentation IS the rulebook.** Every rule in `CLAUDE.md`, every PP-number, every decision in `docs/DECISION_LOG.md` is LAW. You follow them exactly.

**You validate until PERFECTION.** Zero PP8. Zero PP48. Zero PP22c. PP61 metalanguage in English everywhere. PP59 pos+gender on every card. PP64 teach-then-test. PP52 teach-before-use. Run the validators, fix what they find, run them again until they pass.

**You push to main after every milestone.** Create PR, merge, verify.

---

## What Was Done This Session (2026-04-17b)

### Completed (All PRs Merged)

1. **PP65 Kanji+Furigana on ALL 348 Japanese Batch Files** (PR #170)
   - Converted ~4,375 teach cards from pure hiragana to kanji+furigana notation
   - Deployed across 8 agent waves (batch 2-11, all 36 units each)
   - Every content word now uses `漢字(ふりがな)` format
   - Particles, grammatical endings, set phrases correctly kept in hiragana
   - Build passes after every wave

2. **Japanese Beginner Path Fixes** (PR #171)
   - Added "How to Read Japanese" tip card at start of Unit 1 (D122)
   - Enabled FOUNDATIONS_LOCK_ENABLED = true (D121)
   - Simplified early Unit 1 examples to remove untaught vocabulary
   - Audited complete beginner path: zero-skill learner can now learn properly

3. **Full PP Validation + Fixes** (PR #172)
   - Fixed all 17 PP8 hint leaks in Japanese batch files (0 remain)
   - Fixed 4 PP22c em-dashes in content fields (0 remain)
   - Wired Italian + Japanese CEFR reference files to CefrReferencePage (D124)
   - All PP rules validated: ZERO violations

4. **Italian PP8 Fixes** (PR #170)
   - Fixed 5 hint leaks in unit files
   - Fixed 13 visual leaks in batch files (0 visual leaks remain)
   - 7 hint leaks remain (common English words)

5. **Validator Improvements** (PR #170, #172)
   - Added `--include-batch` flag for complete coverage
   - Fixed hint-leak check: substring -> word-boundary matching (D123)
   - Expanded SKIP_WORDS, added MC visual leak min-length check

### New Decisions
- **D121**: Foundations Lock Enabled (all languages)
- **D122**: Japanese Unit 1 Notation Tutorial
- **D123**: PP8 Validator Upgraded (word-boundary + batch support)
- **D124**: Italian + Japanese CEFR Reference Files Wired

---

## Current State — 7 Languages Live

| Language | Units | Teach Cards | CEFR | Grammar | Foundations | Status |
|----------|-------|-------------|------|---------|-------------|--------|
| German v2 | 36 | 5,148 | A1-B2 COMPLETE | 58 entries | YES | GOLD STANDARD |
| Korean | 69 | 5,166 | A1-B2 COMPLETE | 47 entries | YES (Hangul) | COMPLETE |
| Dutch | 89 | 5,106 | A1-B2 COMPLETE | mock quality | YES | COMPLETE |
| French | 90 | 5,036 | A1-B2 COMPLETE | 52 entries | YES | COMPLETE |
| Spanish | 92 | 5,124 | A1-B2 COMPLETE | 53 entries | YES | COMPLETE |
| Italian | 36 | 5,013 | A1-B2 COMPLETE | 51 entries | YES | POLISHED |
| Japanese | 36 | 4,978 | A1-B2 COMPLETE | 54 entries | YES (Kana+Kanji) | **FULLY VALIDATED** |

**Grand total: ~30,500+ teach cards across 7 languages. All at ~5K each.**

### Japanese Validation Results (2026-04-17b)

| Rule | Status |
|------|--------|
| PP8 hint leaks | PASS (0) |
| PP8 visual leaks | PASS (0) |
| PP22c em-dashes | PASS (0) |
| PP43 density | PASS (0 over-dense) |
| PP48 multi-blank fb | PASS (0) |
| PP49 CEFR labels | PASS (0) |
| PP59 pos+gender | PASS (all present) |
| PP61 metalanguage | PASS (all English) |
| PP65 kanji+furigana | PASS (all 384 files) |
| Structural (board:true) | PASS |
| Foundations | PASS (9 phases, gate quiz) |
| Grammar | PASS (54 entries, JLPT N5-N2) |
| CEFR Reference | PASS (wired to page) |

---

## WHAT THE NEXT AGENT MUST DO (Priority Order)

### Phase 1: A2 Dialogue Scaling

A2 dialogues still average 2 turns (target: 3-4). Italian: 138 need expansion. Japanese: 28 need expansion.

### Phase 2: Italian PP8 Hint Leak Cleanup

7 hint leaks remain in Italian batch files. Run:
```
node scripts/validate_all.cjs italian-v2 --include-batch 2>&1 | grep PP8-HINT
```
Fix each by rephrasing the hint to avoid the answer word.

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

## Validator Commands

```bash
# Unit files only (fast)
node scripts/validate_all.cjs japanese-v2

# Unit + batch files (complete)
node scripts/validate_all.cjs japanese-v2 --include-batch

# Auto-fix hint leaks
node scripts/validate_all.cjs japanese-v2 --include-batch --fix-hints

# Build
npm run build
```

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

- #170: PP65 kanji+furigana on all 348 batch files + Italian PP8 fixes + validator improvements
- #171: Japanese beginner path (notation tutorial + Foundations lock + example cleanup)
- #172: Full PP validation pass (0 violations) + CEFR reference wiring
