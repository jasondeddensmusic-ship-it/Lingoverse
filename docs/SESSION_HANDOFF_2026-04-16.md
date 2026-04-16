# Session Handoff — 2026-04-16 (Italian + Japanese to 5K)

> Read `CLAUDE.md` first, then this file.

---

## What Was Accomplished

### The Numbers

| Language | Start | End | Added | vs German (5,048) |
|----------|-------|-----|-------|-------------------|
| Italian | 1,129 | **5,013** | +3,884 | **99.3%** |
| Japanese | 892 | **4,978** | +4,086 | **98.6%** |

**Grand total across 7 languages: ~30,500+ teach cards.**

### How It Was Built

11 batch rounds per language using the proven density pipeline:
1. Deploy Opus agents writing lessons to `_batch{N}_u{NN}_L{MM}.js` temp files
2. Wire into unit files via imports + lessons array spread
3. Run PP8 auto-fixers (hint leaks, position shuffling)
4. Build + validate + commit + push
5. Repeat

### Validation Results

| Check | Italian | Japanese |
|-------|---------|----------|
| PP8 anti-leak | ALL 36 PASS | ALL 36 PASS |
| PP22c em-dashes | 0 | 0 |
| PP48 fb blanks | 0 invalid | 0 invalid |
| PP59 POS/gender | 0 missing | 0 missing |
| PP43 density | 0 violations | 0 violations |
| Content audit | 8 factual fixes | 17 fixes |
| Build | PASS | PASS |

### Also Accomplished

- **Docs reorganization**: 9 stale files archived, 4 new extraction docs (grammar inventory, story bible, curriculum patterns, dictionary checklist)
- **CLAUDE.md pruned**: 509 -> 438 lines
- **BUILD_STATUS.md rewritten**: reflects current 7-language reality
- **Gap extraction script**: `scripts/extract_gap.cjs` for CEFR coverage analysis
- **PRs merged**: #158 (docs), #159 (content), #160 (validation), #161 (density), #162 (audit)

---

## KNOWN GAPS (Priority Order)

### Priority 1: Japanese Foundations (CRITICAL)

Japanese content is UNUSABLE for a complete beginner. There is NO introduction to:
- Hiragana (46 characters)
- Katakana (46 characters)
- Kanji (what they are, how readings work, on'yomi vs kun'yomi)
- The 3-script system and when each is used

The Foundations infrastructure exists (SCRIPT_BLUEPRINTS for kana in metadata.js) but has ZERO content. Korean has full Foundations with jamo grids + recognition drills + gate quiz. Japanese needs the same.

**What to build:**
1. Hiragana grid (5 vowels x 10 consonant rows + dakuten/handakuten)
2. Hiragana recognition drills (read-and-match exercises)
3. Katakana grid (same structure)
4. Katakana recognition drills
5. Kanji introduction (what kanji are, radical system, on/kun readings)
6. Gate quiz (must pass before starting Unit 1)

**Reference**: `docs/reference/FK_DECISION_FRAMEWORK.md` has the 6-step framework for Foundations design.

### Priority 2: Kanji in Japanese Examples

All 4,978 Japanese teach cards use pure hiragana in examples:
```
example:"だいがくでてつがくをせんこうしました。"
```

Should be (at B1+):
```
example:"大学で哲学を専攻しました。"
```

Or with furigana annotations:
```
example:"大学(だいがく)で哲学(てつがく)を専攻(せんこう)しました。"
```

**Approach**: Add a `kanji` field to B1+ teach cards containing the kanji version. The renderer can show hiragana with optional kanji toggle. A1-A2 stays pure hiragana.

### Priority 3: Dialogue CEFR Scaling

Vision doc says:
- A1: 2-3 exchanges, A2: 3-4, B1: 4-5, B2: 5+

Reality: ALL levels average 2.0 turns. B1/B2 learners get the same shallow dialogues as A1.

**Fix**: Deploy agents to enrich B1/B2 example fields with 4-5+ turn dialogues. ~3,000 cards affected.

### Priority 4: Teach Card Interleaving

291 Italian + 105 Japanese files have 8+ consecutive teach cards without quiz breaks. ADHD-hostile.

**Fix**: Insert quiz break steps every 5-6 teach cards programmatically. Can be automated.

### Priority 5: Italian Foundations

Italian also has no Foundations content, but Latin script means it's less critical than Japanese. Still needed for: pronunciation rules, double consonants, accent marks, vowel sounds.

---

## File Structure After This Session

```
src/data/
  italian-v2/
    unit-01.js ... unit-36.js              (36 units)
    _temp_u01_expand_L01.js ... L03.js     (A1 expansion)
    _temp_u07_expand_L01.js ... L03.js     (A2 expansion)
    _temp_u13_expand_L01.js ... L03.js     (B1 expansion)
    _temp_u25_expand_L01.js ... L03.js     (B2 expansion)
    _batch2_u01_L01.js ... _batch8_u36_L01.js  (density batches)

  japanese-v2/
    unit-01.js ... unit-36.js              (36 units)
    _temp_u01_expand_L01.js ... L04.js     (A1 expansion)
    _temp_u11_expand_L01.js ... L03.js     (A2 expansion)
    _temp_u17_expand_L01.js ... L03.js     (B1 expansion)
    _temp_u25_expand_L01.js ... L03.js     (B2 expansion)
    _batch2_u01_L01.js ... _batch11_u36_L01.js  (density batches)

  cefr-reference/
    german.js, korean.js, dutch.js, french.js, spanish.js
    (italian.js and japanese.js NOT YET CREATED — CEFR agents hit rate limits)

scripts/
  extract_gap.cjs                          (CEFR gap analysis tool)
  pp8_validate.cjs, pp64_validate.cjs      (validators)
  pp8_fix_position_length.cjs, pp8_fix_hint_leaks.cjs  (auto-fixers)
```

---

## Key Decisions

1. **Batch expansion pipeline works**: 11 rounds brought both languages from ~1K to ~5K
2. **Rate limits are real**: Opus agents hit API limits mid-run. Partial output salvaged. Design batches to be resumable.
3. **Dialogue quality is batch-generation weakness**: Agents write 2-turn dialogues by default. Enrichment needs explicit instructions + examples.
4. **Japanese needs script-first approach**: Can't teach a logographic language without teaching the script first.
5. **CEFR reference files not yet created**: Both Italian and Japanese need CILS/JLPT word lists for proper gap analysis.
