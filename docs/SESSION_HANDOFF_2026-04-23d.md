# Session Handoff — 2026-04-23d (content polish + new audit layer)

> **READ FIRST.** Extends 2026-04-23c (runtime validator absolute zero). This session shipped 4 content/polish PRs and added a 4th audit layer (teach-content completeness).

---

## TL;DR

| Check | Final count |
|---|---|
| Runtime PP-rule validator (PP8/PP22c/PP43/PP48/PP64/PP67) | **0** |
| Structural runtime audit | **0** |
| MC quality audit | **0** |
| Teach-content audit (new this session) | **0** |
| Runtime corpus | **39,038 teach cards** |

---

## What shipped (2026-04-23d — 4 PRs, #317–#320)

### #317 — content(ko): inject A2 example dialogues into 90 teach cards
- 32 Korean lessons across units 1, 12–20 gained natural A2-level example dialogues using already-taught vocabulary.
- 3 binary 이에요/예요 MC questions in `kou1l2` converted to `fb` (proper fill-in-blank — their 2-option pool was tripping mcOptsCount).
- Hints strengthened to guide toward the vowel/consonant rule rather than restating the answer.
- Net: MC quality audit dropped 93 → 0 (all Korean teach-no-example gaps closed).

### #318 — polish(ja): PP67 production quizzes for unit-15/22 light batches
- Closes `JAPANESE-PP67-POLISH` from the autonomous queue.
- 4 batch lessons (jav2_u15l_b9_1, jav2_u15l_b10_1, jav2_u22l_b9_1, jav2_u22l_b10_1) each gained one additional production-mode `fb` step, bringing them from 1 → 2 production quizzes.
- New scripts: `scripts/audit_dialogue_turns.mjs` (per-language turn counts), `scripts/_a2_dialogue_audit.mjs` (A2-scoped turn audit).

### #319 — docs(queue): mark IDIOMS-PAGE-SEARCH + JAPANESE-PP67-POLISH done
- Queue hygiene. IDIOMS-PAGE-SEARCH was already implemented in `src/pages/IdiomsPage.jsx:13-35,93-117` but queue doc was stale.

### #320 — content(es): restore 16 missing funFacts + new teach-content audit
- 8 Spanish unit-7 teach cards had `funFact:null`; added etymology + cultural facts.
- 8 other Spanish cards (units 11–16) had funFact misplaced INSIDE `deepDive` due to a missing closing brace — runtime saw it, audit didn't. Script `scripts/_es_move_funfact_out.mjs` detects and moves them out.
- **New audit layer:** `scripts/audit_teach_content.mjs` catches:
  - Missing funFact / note / pos
  - Example without source translation
  - Stale TODO / TBD / FIXME markers (case-sensitive to avoid matching Spanish `todo`, Portuguese `tudo`, etc.)

---

## Milestone reached

**First session where all 4 audit layers report zero:**
1. `scripts/validate_runtime.mjs` — PP-rule validator (PP8 hint/visual/position/length, PP22c, PP43, PP48, PP64, PP67)
2. `scripts/validate_structural_runtime.mjs` — null slots, duplicate opts, ans-not-in-opts, orphan match steps
3. `scripts/audit_mc_quality.mjs` — whitespace, non-standard opts, missing example/pos/hint
4. `scripts/audit_teach_content.mjs` (new) — missing funFact/note/pos, example without source, stale placeholders

---

## Remaining work (ordered by priority)

### 1. Dialogue scaling (pre-existing, low pedagogical urgency)
Italian: 890 A2 teach cards at 2 turns; Japanese: 472; Spanish: 4,081 corpus-wide; Korean: 4,012 corpus-wide; French: 3,703. Current 2-turn format is valid A2 content; 3+ turns is a quality enhancement, not a defect. **Recommended approach:** agent-driven parallel scaling per Rule B + Rule G (dual-linguist), 1 unit per agent, validator-clean before merge.

### 2. Korean phonetic backfill (4,305 missing cards) — deferred
- Only 58% of Korean hand-crafted phonetics match the simple syllable-hyphenated form from `_romanize()`; 42% have been phonology-tuned (e.g. `먹다` → `meok-da` handles batchim linking that the naive romanizer gets wrong).
- Auto-generation would ship 42% inaccurate phonetics. Deferred until a phonology-aware romanizer is written.
- Russian: 713 missing Cyrillic→Latin phonetics. Deterministic transliteration could work here but not prioritized.

### 3. V1 → V2 `_normStep()` removal
Data-format dual-life cleanup. Owner-paused.

### 4. LessonEngine.jsx split (4,165 lines)
Owner-paused structural refactor.

### 5. Cognate corpora (P1 in queue)
COGNATE-CORPUS-001..005 require an owner-approved seed list. Not mechanical.

### 6. PP55 / PP57 / PP58 audits (P3 in queue)
Audit completeness against official exam wordlists/grammar/functions for non-German languages. Requires authoritative source lists.

---

## Behavior rules unchanged

- Autonomous mode on. Don't pause for validator-fix work, content additions, doc updates, commits/PRs/squash-merges/CI watches.
- Pause for: destructive ops, structural refactors, sensitive content, workflow rule changes.
- Brief responses. Numbers > paragraphs.
- Always run `npm run build` after each commit before push.
- Always `gh run watch <id> --exit-status` after merge.

---

## Validator commands cheat-sheet

```bash
# The 4 audits (all must report 0 before commit)
node scripts/validate_runtime.mjs
node scripts/validate_structural_runtime.mjs
node scripts/audit_mc_quality.mjs
node scripts/audit_teach_content.mjs

# Build
npm run build

# Dialogue turn audit (for scaling work)
node scripts/audit_dialogue_turns.mjs
node scripts/_a2_dialogue_audit.mjs italian japanese

# Korean teach-no-example list (use if a new gap appears)
node scripts/_ko_list_no_example.mjs
```

---

## Scripts added this session

- `scripts/_ko_add_examples.mjs` — Batch injector for Korean A2 example dialogues. Contains 90 hand-crafted dialogues. Idempotent (only injects where `example:` field is missing).
- `scripts/_ko_list_no_example.mjs` — Lists remaining Korean teach cards without examples.
- `scripts/audit_dialogue_turns.mjs` — Per-language turn-count audit for teach-card examples.
- `scripts/_a2_dialogue_audit.mjs` — A2-scoped turn audit for scaling decisions.
- `scripts/audit_teach_content.mjs` — 4th audit layer: funFact/note/pos completeness.
- `scripts/_es_move_funfact_out.mjs` — One-shot fixer to move funFact out of deepDive blocks.

---

*Previous handoff: [2026-04-23c](SESSION_HANDOFF_2026-04-23c.md)*
