# KOREAN CURRICULUM — FULL QUALITY AUDIT
## 570 Issues Across 10 Units (102 Lessons) | 7 Fix Batches
## Date: 2026-03-14 | Auditor: Claude Code Session

---

## PURPOSE

This audit supersedes the density-focused audit from earlier sessions. It covers ALL quality dimensions: hints, anti-leak, duplicates, formatting consistency, deepDive quality, vocabulary gates, and visual presentation. Every future session fixing Korean content MUST reference this document.

---

## EXECUTIVE SUMMARY

| Metric | Count |
|--------|-------|
| Total issues found | ~570 |
| CRITICAL (P8 leak / P34 vocab gate) | 23 |
| HIGH (lazy hints, bracket text, dupes) | ~350 |
| MEDIUM (walls, deepDive quality) | ~197 |
| Units affected | 10/10 |
| Lessons affected | ~95/102 |

---

## BATCH 1: HINT REWRITE (151 steps) — PRIORITY: CRITICAL

Every quiz hint must GUIDE the learner toward reasoning, never give the answer and never be generic filler.

### 1A: "You learned this word earlier." (85 instances)
**Rule violated:** P44 (hints must guide, never reveal or be useless)
**Pattern:** Vocabulary recall MC placed after teach card, hint provides zero guidance.
**Fix:** Replace each with a concept-specific hint that helps the learner reason.

Example fixes:
- `"You learned this word earlier."` → `"안녕 means peace. This is the formal goodbye."` (for 안녕히 계세요)
- `"You learned this word earlier."` → `"This is the Konglish word borrowed from English 'taxi'."` (for 택시)

**Lines:** 223, 289, 331, 338, 434, 460, 482, 510, 568, 572, 595, 626, 704, 732, 758, 780, 802, 845, 895, 915, 936, 956, 978, 1000, 1020, 1073, 1149, 1153, 1195, 1220, 1249, 1272, 1295, 1348, 1354, 1374, 1395, 1437, 1444, 1450, 1470, 1477, 1484, 1500, 1524, 1546, 1595, 1635, 1650, 1662, 1784, 1854, 1877, 1883, 1886, 1892, 1939, 1943, 1968, 1972, 1996, 2000, 2022, 2027, 2077, 2181, 2195, 2197, 2201, 2222, 2227, 2276, 2297, 2326, 2349, 2373, 2432, 2529, 2555, 2742, 2767, 2791, 2855, 2882

### 1B: "Check the stem vowel: bright or dark?" MISAPPLIED (28 instances)
**Rule violated:** P44 + accuracy
**Pattern:** Formula hint applied to questions that have nothing to do with vowel harmony (particle selection, modifier forms, connectors, 하다 compounds, 반말 copula).
**Fix:** Write contextually correct hints for each. For actual vowel harmony questions, vary the wording.

**Worst misapplications:**
- Line 301: answer is 해요 (하다 always → 해요, vowel harmony irrelevant)
- Line 1531: answer is 작은 (modifier form, not conjugation)
- Line 2034: answer is 그래서 (CONNECTOR, not a verb)
- Line 2516: answer is 합니다 (formal speech level, not vowel harmony)
- Line 2722: answer is 학생이야 (반말 copula, not vowel harmony)

**Lines:** 301, 303, 649, 1231, 1233, 1303, 1328, 1422, 1423, 1424, 1457, 1458, 1487, 1531, 1574, 1918, 2034, 2054, 2135, 2259, 2402, 2516, 2722, 2904, 2914, 641, 1979, 1980, 1981, 2062, 2068, 2234, 2728, 2750, 2905

### 1C: "Use what you know so far." (12 instances)
**Fix:** Same as 1A — replace with specific guidance.
**Lines:** 268, 412, 1503, 2213, 2233, 2280, 2568, 2699, 2838, 2885, 2888, 2895

### 1D: Hints that REVEAL the answer (18 instances) — CRITICAL P8/P44
**Pattern:** Hint contains the English translation of the answer or uses "... = [answer]" pattern.
**Fix:** Rewrite to guide toward the answer without containing it.

**Examples:**
- Line 440: hint "Korea" for answer 한국 → change to "The country you're studying the language of."
- Line 602: hint "'There IS water'" for answer 있어요 → change to "Existence verb, polite form."
- Lines 2695-2800: pattern "... = kitchen/living room/etc." → rewrite all

**Lines:** 362, 369, 372, 440, 441, 446, 490, 491, 495, 542, 602, 831, 2695, 2702, 2755, 2799, 2800, 2806

---

## BATCH 2: BRACKET TEXT REMOVAL (16 items) — PRIORITY: HIGH

All `[element]`, `[noun]`, `[name]`, `[body part]` placeholders must be replaced with actual words or natural phrasing. These look sloppy and confuse learners.

**Lines and fixes needed:**
1. Line 256 (intro desc): `[name]` x3 → use actual Korean name like 사라
2. Line 464 (tip): `[이름]` → use 사라 or 민수
3. Line 473 (mc hint): `[name]` → use actual name
4. Line 513 (tip): `[name]` x2 → use actual name
5. Line 514 (mc hint): `[name]` → use actual name
6. Line 522 (mc option + hint): `[name]` x3 → use actual name
7. Line 705 (teach): `[noun]` in nl/en fields → use example noun like 사람
8. Line 713 (match): `[noun]` → use actual nouns per pair
9. Line 1089 (intro desc): `[element]` → use actual element name like 화 (fire)
10. Line 1171 (intro goals): `[noun]` → use example like 물
11. Lines 1521-1523 (teach deepDives): `[noun]` → use example nouns
12. Line 2222 (mc q): `[body part]` → use actual body part
13. Line 2495 (fb hint): `[noun]` → use actual noun
14. Line 2879 (teach): `[noun]` in nl field → use actual noun like 음식

---

## BATCH 3: DUPLICATE QUESTION CLEANUP (9 groups, ~20 steps) — PRIORITY: HIGH

**Rule violated:** P53 (every quiz question must be unique)

| Group | Lines | Issue | Fix |
|-------|-------|-------|-----|
| 1 | 2402 + 2914 | IDENTICAL: 아프면 병원에 가세요 FB | Delete one, rewrite other from different angle |
| 2 | 2858 + 2865 | Both test -기 nominalizer, same lesson | Rewrite one to test from application angle |
| 3 | 2481 + 2626 + 2911 | TRIPLICATE: -아/어서 + suggestion = wrong | Keep one, rewrite two |
| 4 | 2628 + 2724 | Both test when 반말 is appropriate | Rewrite one as scenario-based |
| 5 | 247 + 271 | Both: "verb goes at the END" | Rewrite one to test SOV from different angle |
| 6 | 2830 + 2836 | Both fill 생각보다, same lesson | Delete one |
| 7 | 2717 + 2720 | Both convert 먹어요 to 반말, same lesson | Rewrite one with different verb |
| 8 | 2259 + 2402 + 2914 | TRIPLICATE: 아프 as conditional stem | Keep one, rewrite others |
| 9 | 2859 + 2870 | Both: why Koreans use 것 같아요, same lesson | Merge or rewrite one |

---

## BATCH 4: DISTRACTOR QUALITY (85+ steps) — PRIORITY: HIGH

**Rule violated:** P8 (anti-leak — distractors must be plausible same-category items)

**Systemic pattern:** "to go" (가다/가요) used as filler distractor in ~85 MC questions regardless of what's being tested. When testing a noun, all distractors should be nouns. When testing a phrase, all should be phrases.

**Fix approach:** For each MC, ensure all 4 options are the same grammatical category and plausibly correct. Replace "to go" fillers with taught vocabulary from the same category.

**Additional P8 issues:**
- Line 2606: Answer string doesn't match option text (will fail at runtime)
- Line 1020: Quiz tests a teaching artifact ("SOV verification"), not knowledge

---

## BATCH 5: TIP_WALL + NOTE_WALL CONDENSING (~209 cards) — PRIORITY: MEDIUM

### 5A: TIP_WALL — Visible text >8 newlines (79 cards)
**Rule:** Visible tip text should be scannable. Excess goes in deepDive.
**Worst offender:** Line 1040 — speech levels tip with 46 newlines in visible text.

**Fix pattern:** Keep 4-6 key lines visible, move the rest to deepDive.

### 5B: NOTE_WALL — Teach note >5 newlines (130 cards)
**Rule:** P36 — notes max ~100 chars unstructured or use \n/bullets. "What" in note, "why" in deepDive.

**Fix pattern:** Keep the essential definition + one pattern visible. Move examples and extensions to deepDive.

---

## BATCH 6: DEEPDIVE CLEANUP (~77 items) — PRIORITY: MEDIUM

### 6A: "More on..." titles (37 instances)
**Fix:** Replace each with a descriptive title that tells the learner what they'll learn.
- "More on Bowing Basics" → "When and How Deep to Bow"
- "More on SOV: Verb Goes Last" → "Why Verb-Last Feels Natural"

### 6B: deepDive starts with \n (27 instances)
**Fix:** Remove leading \n from all deepDive text fields.

### 6C: Trivial deepDives <50 chars (13 instances)
**Fix:** Either enrich with useful content or remove the deepDive entirely.

---

## BATCH 7: VOCABULARY GATE FIXES (5 items) — PRIORITY: CRITICAL

**Rule violated:** P34 (every word in exercises must be pre-taught)

| Line | Word | Issue | Fix |
|------|------|-------|-----|
| 2751 | 컵라면 | In match pair, never taught | Add teach card before quiz |
| 2751 | 봉투 | In match pair, never taught | Add teach card before quiz |
| 2781 | 반반/양념/후라이드 | In FB, only in deepDive | Add teach cards or move to taught section |
| 2694 | 노래방/피시방/찜질방 | In MC opts, only in note | Add teach cards before quiz |
| 2699 | 온돌 | In MC, only in tip deepDive | Add teach card or remove from quiz |

---

## BATCH 2.5: FORMAT CONSISTENCY (7 items) — PRIORITY: HIGH

### Days of the Week COMPOUND chips
Monday (line 1090) uses `COMPOUND:` keyword triggering chip renderer. Tuesday-Sunday (lines 1091-1098) use plain text.

**Fix:** Rewrite all six to match Monday's format:
```
note:"COMPOUND: 화(fire/火) + 요(day-of) + 일(day).\n'Fire-day' = Tuesday."
```

---

## RECOMMENDED EXECUTION ORDER

1. **Batch 7** (vocab gate) — 5 items, prevents CRITICAL P34 violations
2. **Batch 1D** (answer-revealing hints) — 18 items, CRITICAL P8 violations
3. **Batch 2** (bracket text) — 16 items, visible to learners right now
4. **Batch 2.5** (format consistency) — 7 items, quick visual fix
5. **Batch 3** (duplicates) — 20 steps, P53 violations
6. **Batch 1A-C** (lazy hints) — 125 items, biggest batch, do unit-by-unit
7. **Batch 4** (distractor quality) — 85 steps, do alongside Batch 1
8. **Batch 5** (walls) — 209 cards, do unit-by-unit
9. **Batch 6** (deepDive cleanup) — 77 items, do unit-by-unit

**Strategy:** Work unit-by-unit (U1→U10), applying ALL batches to each unit before moving to the next. This keeps changes localized and testable.

**Estimated sessions:** 3-5 sessions depending on pace. Each session handles 2-3 units.

---

## VALIDATION AFTER EACH UNIT

After fixing each unit, verify:
1. Zero "You learned this word earlier" hints remaining
2. Zero bracket text in any field
3. Zero duplicate questions within and across units
4. All hints contextually accurate (no misapplied formulas)
5. No hint contains the answer
6. All deepDive titles descriptive (no "More on...")
7. No note >5 \n, no tip text >8 \n
8. All quiz distractors same category as answer
9. P56 string integrity (brace balance, no unclosed strings)
