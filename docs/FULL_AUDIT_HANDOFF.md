# Full Curriculum Audit Handoff — D111: Structural + Deep Audit

> **Date**: 2026-03-17
> **Predecessor**: D109 (Cross-Language Audit — RETROACTIVELY INCOMPLETE per D110). D110 (CEFR Distribution Audit + Anti-Cramming Doctrine).
> **Goal**: Fix CEFR distribution across German/French/Spanish. Deep P52 teach-before-use verification across ALL 5 languages. Full P53 completeness checklist.
> **STATUS: PENDING**. This audit has NOT been started. D109 is INCOMPLETE. D111 is the corrective audit.

---

## WHY THIS AUDIT EXISTS (D110)

D109 deployed 12 agents, found 694 issues, and was marked COMPLETE. But it missed a fundamental structural flaw:

| CEFR | Korean | Dutch | German | French | Spanish |
|------|--------|-------|--------|--------|---------|
| A1   | 6      | 6     | **8**  | **8**  | **8**   |
| A2   | 4      | 4     | **8**  | **8**  | **8**   |
| B1   | 10     | 10    | **7**  | **8**  | **8**   |
| B2   | 10     | 10    | **6**  | **6**  | **6**   |

The newer languages appear **front-loaded** with A-level content (16 units) and potentially **underserved** at B-level (12-13 units). The owner spotted the distribution imbalance in 30 seconds. The audit agents never checked it.

**CRITICAL CORRECTION (D111):** Korean/Dutch 6-4-10-10 is NOT a "gold standard" to copy. There is no universal ideal distribution. Every language has different grammar complexity and concept density at each CEFR level. German might legitimately need 8 A1 units (4 cases, 3 genders, separable verbs). French might need 7 A2 units (14+ tenses, liaison/elision). The question is not "does this match Korean?" but "does this serve THIS language's learners?" Korean and Dutch must also be audited with the same rigor — their distributions may also need adjustment. P54 demands: catalogue concepts first, determine unit count from concepts, never from a template.

D109 also never verified strict teach-before-use (P52): whether every quiz word traces to a prior dedicated teach card (not just "does a teach card exist somewhere").

---

## CRITICAL PHILOSOPHY — READ BEFORE AUDITING

### P54: The Anti-Cramming Doctrine (THE MOST IMPORTANT RULE)

Content must NEVER be crammed to fit a predetermined unit count, lesson count, or step count. The curriculum exists to serve the LANGUAGE, not a spreadsheet.

- If a language needs 50 units and 400 lessons to properly teach A1-B2, it gets 50 units.
- If a language only needs 10 units, it gets 10 units.
- The number of units per CEFR level is determined by the CONCEPTS that need to be taught at that level, compared against established language learning models, textbooks, and official exam frameworks. NOT by a template.
- Every grammar construct deserves the space it needs. A concept that gets a full unit in a textbook does not get squeezed into one lesson.
- Agents must approach each language OPEN-MINDEDLY: first catalogue ALL concepts CEFR requires at each level, THEN determine how many units/lessons are needed, THEN assess the current state.
- Every language is different. Every language deserves its own lesson-count, unit-count, breadth and depth. Source language proximity matters.

### P52: Strict Teach-Before-Use (NON-NEGOTIABLE)

"Taught" means the word has its OWN dedicated teach card with target-language and source-language fields.

- A word appearing ONLY in another card's `example` field does NOT count as taught.
- A word mentioned ONLY in a `deepDive` does NOT count as taught.
- A word used ONLY in a `tip` text does NOT count as taught.
- Every word in any quiz step (mc, fb, drag_fill, tr, match) must trace to a prior dedicated teach card.
- If a teach card's example sentence uses an untaught word, that word MUST be explained in the `note` or `deepDive` field.

### Languages are NOT locked to rigid formats.

The current builds used 30 units / 8 lessons per unit / 18+ steps as a baseline. **That baseline is a FLOOR, not a ceiling.** Every language needs the time and space to get ALL constructs and nuances across properly.

- **Korean already has more lessons** (~311 vs 240 for others) because it needs them.
- **If a language needs 35 units for B2, it gets 35 units.**
- **Nothing should feel crammed.** If a CEFR-required grammar construct is squeezed into a single teach card inside a lesson about something else, that's a FAIL.
- **18 steps is a minimum, not a target.** Complex grammar may need 22-25 steps per lesson.

---

## P53: AUDIT COMPLETENESS CHECKLIST — ALL 9 ITEMS MUST PASS

Every language must PASS all 9 items. Missing ANY = audit INCOMPLETE.

| # | Check | What to verify |
|---|-------|---------------|
| 1 | **CEFR Distribution (P51)** | Unit-to-CEFR-level mapping is pedagogically sound. B1+B2 >= A1+A2. Sub-level labels consistent. |
| 2 | **P8 Anti-Leak (all 5 types)** | Visual, script, hint, pattern, position leaks. Sample 10+ mc/fb per level per language. |
| 3 | **P52 Strict Teach-Before-Use** | Every quiz word traces to a prior dedicated teach card. NOT sampling — full verification for deep audit. |
| 4 | **P48 Step Type Correctness** | fb = single blank only. Multi-blank = drag_fill with blanks object. Automated grep. |
| 5 | **P49 No Meta-Curriculum** | No CEFR labels in learner-facing q/opts/ans. Automated grep. |
| 6 | **P22c No Em-Dashes** | Zero em-dashes in any content string. Automated grep. |
| 7 | **Density (P43)** | Every lesson meets language minimum (Korean: 20+, others: 18+). Automated script. |
| 8 | **board:true** | Every lesson has board:true. Automated script. |
| 9 | **Sub-level Label Consistency** | No gaps or jumps in sub-level labels (A1.1 -> A1.4 skipping A1.2/A1.3 = fail). |

---

## PHASE 1: CEFR DISTRIBUTION FIX (German, French, Spanish)

### Step 1: Catalogue what each language ACTUALLY needs per level

For each of German, French, Spanish:
1. List ALL CEFR grammar constructs required at A1, A2, B1, B2
2. Cross-reference against the official exam framework (Goethe/DELE/DELF)
3. Cross-reference against major textbooks (Dreyer & Schmitt / Aula / Grammaire progressive)
4. Determine how many units and lessons each level ACTUALLY needs
5. Compare current distribution with the concept-driven distribution

### Step 2: Decide — relabel or restructure?

Two options:
- **Relabel**: If the content is correct but the `level` field values are wrong (e.g., a unit labeled A1.4 actually teaches A2 content), relabel.
- **Restructure**: If the content itself is misallocated (too much beginner, too little advanced), restructure. This may mean moving content between units or adding new units.

The owner's guidance: "If we need 50 units, SO BE IT. If we only need 10 units, SO BE IT." Follow P54.

### Step 3: Implement the fix

- Update `level` fields on all affected units
- Verify the fix passes P51 (B1+B2 >= A1+A2, sub-levels consistent)
- Run structural validation script (Rule 10)
- Build and verify

---

## PHASE 2: DEEP P52 TEACH-BEFORE-USE VERIFICATION (All 5 languages)

### For each language:

1. **Extract all quiz words.** For every mc/fb/drag_fill/match/tr step, extract all target-language words that the learner must know to answer correctly.

2. **For each quiz word, verify a prior teach card exists.** The teach card must:
   - Have the word in its `nl` (target) field as the primary entry
   - Appear BEFORE the quiz step in lesson ordering (same unit earlier lesson, or earlier unit)
   - NOT just be in another card's `example` field

3. **Flag violations.** For each P52 violation:
   - The quiz step ID (e.g., deu5l3 step 12)
   - The word that's untaught
   - Whether the fix is: (a) add a teach card, or (b) replace the quiz word with a taught word

4. **Fix violations.** Either add teach cards or replace quiz words. Never leave a P52 violation unfixed.

### Methodology:

This is a LARGE task. For each language (~240 lessons, ~4,000+ steps), the agent must:
- Parse all quiz steps (mc, fb, drag_fill, match, tr)
- Extract tested words
- Build a cumulative "taught vocabulary" list by scanning teach cards in lesson order
- Check each quiz word against the cumulative list

Use automated scripts where possible. Manual spot-checking is insufficient for a deep audit.

---

## PHASE 3: REMAINING P53 CHECKLIST ITEMS

Run all remaining items from the P53 checklist:
- P8 anti-leak spot checks (10+ per level per language)
- P48 automated scan
- P49 automated scan
- P22c automated scan
- Density automated script
- board:true automated script
- Sub-level label consistency check

Most of these were covered by D109 and should still PASS. But verify — D109 is INCOMPLETE and cannot be trusted without re-verification.

---

## AGENT DEPLOYMENT STRATEGY (Rule 13 — NON-NEGOTIABLE)

### Every audit agent MUST receive in its prompt:

1. **The complete Pipeline Rules** from CLAUDE.md (P8 through P54) — verbatim or as a comprehensive summary with all rule numbers
2. **The P53 audit completeness checklist** (all 9 items, copy from above)
3. **The P54 anti-cramming doctrine** (full text, not summary)
4. **The D110 CEFR distribution flaw** as a cautionary example
5. **Explicit instruction**: "Validate CEFR distribution FIRST before any content-level checks"
6. **The language's specific references** (exam framework, textbooks, teaching platforms)
7. **The exact file paths** to search

### Agent structure:

**Per language, deploy 3 focused agents:**

1. **Structural Agent (Sonnet OK)**: P51 CEFR distribution + P48/P49/P22c automated scans + density + board:true + sub-level labels. This agent handles checklist items 1, 4, 5, 6, 7, 8, 9.

2. **P52 Teach-Before-Use Agent (Opus required)**: Deep vocabulary extraction from quiz steps, cumulative teach card tracking, violation flagging. This agent handles checklist item 3. This is the most compute-intensive task and MUST use Opus.

3. **P8 Anti-Leak Agent (Sonnet OK)**: Spot-check mc/fb hints across all levels. This agent handles checklist item 2.

**Do NOT try to audit all 5 languages simultaneously.** Process one language at a time. **ALL 5 languages get the same audit depth** — Korean and Dutch are NOT exempt. Their distributions must be verified against their own language requirements, not assumed correct because they were built first.

### Sizing:
- Each agent handles ONE language, ONE aspect
- Do NOT ask one agent to read an 8,000-line file AND do CEFR analysis AND pipeline checks
- Structural validation scripts run in seconds — use Bash, not agents
- P52 deep verification is the bottleneck — allocate Opus for this

---

## FILES TO AUDIT

| Language | Units file | Lines | Units | Lessons | Steps |
|----------|-----------|-------|-------|---------|-------|
| Korean | `src/data/units-korean.js` | ~8,700 | 30 | ~311 | ~6,900+ |
| Dutch | `src/data/units-dutch.js` | ~8,091 | 43 (20 v2 + 23 legacy) | 244 v2 | ~5,446 |
| German | `src/data/units-german.js` | ~7,407 | 30 | 240 | ~4,518 |
| French | `src/data/units-french.js` | ~1.3MB (minified) | 30 | 240 | ~4,380 |
| Spanish | `src/data/units-spanish.js` | ~5,262 | 30 | 240 | ~4,363 |

Also check:
- `src/data/metadata.js` — infrastructure (LANG_META, LANG_BLUEPRINT, CULTURE_PACKS)
- `src/data/foundations.js` — foundations (FOUNDATIONS_BY_LANG, FK_PLAYTHROUGH, FK_GATE_QUIZ)
- `src/data/vocabulary.js` — vocabulary infrastructure (ARTICLE_SYSTEMS, ARTICLE_COLORS)

---

## REFERENCE DOCS

Read CLAUDE.md FIRST (single source of truth). Then:
- `docs/LINGOVERSE_MASTER_BIBLE.md` — full philosophy, per-language standards, official reference requirements
- `docs/POLYGLOT_PIPELINE_STANDARDS.md` — five pillars, pipeline rules, per-language curriculum standards, anti-cramming Pillar 6
- `docs/CONCEPT_REGISTRY.md` — Korean grammar/vocab index (machine-searchable)
- `docs/DECISION_LOG.md` — all D-numbers (D1-D110)
- `docs/KOREAN_B1_CURRICULUM_DESIGN.md` — B1 design template

---

## SUCCESS CRITERIA

The audit is COMPLETE when:

1. **P51 CEFR distribution**: German, French, and Spanish have been relabeled or restructured so that the distribution is pedagogically justified and B1+B2 >= A1+A2. The fix has been documented with reasoning.

2. **P52 teach-before-use**: Every quiz word in every language traces to a prior dedicated teach card. Zero P52 violations remain. Evidence: automated verification script output.

3. **P53 full checklist**: All 9 items PASS for all 5 languages. Each item has explicit PASS/FAIL status in the audit report.

4. **P54 compliance**: No evidence of cramming. If a language needs more units, the expansion is planned (not crammed). If units need content moved, the restructuring is documented.

5. **All fixes committed and pushed.** Code changes verified with build pass.

6. **CLAUDE.md updated** with D111 status and any new decisions.

7. **DECISION_LOG.md updated** with D111 entry.

---

## WHAT D109 GOT RIGHT (preserve these)

D109 was not worthless — it caught real issues:
- 694 content fixes (P8, P22c, P49, mc ans mismatches)
- CEFR grammar coverage verification with grep evidence
- Infrastructure validation across all 5 languages

These results are preserved. D111 adds the STRUCTURAL layer that D109 missed and deepens the P34->P52 verification.
