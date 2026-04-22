# Session Handoff — 2026-04-22 (validator blind-spot closed)

> **READ FIRST.** Full sweep after the blind spot was surfaced yesterday. Validator is now authoritative; all 39,038 cards pass every PP rule check.

---

## TL;DR

The validator blind spot the prior handoff (`SESSION_HANDOFF_2026-04-22.md`) flagged as the next session's priority is now fixed, and every violation it surfaced has been cleared.

- **Runtime validator** (`scripts/validate_runtime.mjs`) uses Node ESM dynamic import to walk the actual shipped lesson tree. Validates 39,038 cards (was 7,128 under the old text-based validator). **PR #297.**
- **Mechanical fixes** (PP8 hint/visual, PP43, PP48) — 437 violations cleared via surgical rewrite script + hand-edits. **PR #298.**
- **Content coverage** (PP64, PP67) — 6,204 violations cleared via auto-generated per-unit review lessons. **PR #299.**

Net: **6,721 → 0** runtime violations across all 10 languages. Build green, CI green on main.

---

## What the runtime validator added

`scripts/validate_all.cjs` (text-based) was reading files and missing everything imported at runtime — about 31,910 teach cards (82% of the corpus) shipping without any PP-rule check.

The new `scripts/validate_runtime.mjs`:
- Dynamically imports each language's `units-<lang>-v2.js` aggregator.
- Walks the unit → lesson → step tree in memory.
- Runs PP8 hint/visual, PP43 density, PP48 multi-blank fb, PP64 teach-then-test, PP67 production-mode minimum.
- Reports at unit + lesson + step granularity with `--verbose`, or as JSON with `--json` for scripting.
- Exits non-zero when any violations exist — suitable for CI gates.

Refinements added during the wave:
- PP64 normalizes quiz tokens before comparing (was failing on punctuation like the German proverb comma).
- PP67 has a Korean stem matcher (drop final 다) so conjugated quiz answers count as production for dictionary-form teach cards.
- META_HEADING filter skips section-divider "teach cards" whose trg is a title like "A1 Complete: Grammar Summary".

Legacy `validate_all.cjs` is kept for single-file spot checks but do not treat its "PASS" as authoritative.

---

## The three-PR wave

### PR #297 — runtime validator
New file `scripts/validate_runtime.mjs`. CLAUDE.md updated.

### PR #298 — mechanical cleanup (437 → 0)
- **PP8 hint leaks 428 → 0.** Script `scripts/pp8_hint_rewrite.mjs` rewrote 415 hints deterministically:
  - Strip parenthetical gloss whose English content matches an answer word.
  - Swap leaked words with a semantic paraphrase from a 45-entry synonym table.
  - Never substitutes `___` (validator theater). Every rewrite preserves guidance.
- 13 remaining leaks (Korean character-etymology, Chinese/Japanese compound analysis, Dutch synonym discrimination) rewritten inline by hand.
- **PP8 visual leaks 7 → 0.** Korean + Dutch question stems that quoted the answer were abstracted (e.g. "Hoe heet je?" → "Iemand vraagt naar je naam").
- **PP43 over-dense 1 → 0.** Merged two adjacent match steps in German `deu_r8l13`.
- **PP48 multi-blank fb 1 → 0.** Dropped stray `{2}` in Spanish `esv2_b2g7_l20`.

### PR #299 — coverage generator (6,204 → 0)
New file `scripts/pp64_coverage.mjs`. Walks the runtime tree, finds every untested teach card per unit, writes a `_coverage_u{NN}.js` lesson that:
1. Match steps (4 pairs each, real trg/src) — recognition coverage for PP64.
2. Fb steps with trg as answer — production coverage for PP67. Target = `ceil(unit_teach/10) + 2`, topped up from the unit's full taught corpus when untested shorts run short.
3. Patches `unit-NN.js` to import + include the new lesson.

Bracket-aware patcher walks strings/comments accurately so the new var name lands in the `lessons:[...]` array, never in a nested `goals:[...]` or `opts:[...]` (the first attempt had this bug; reverted before shipping).

**279 coverage lesson files** created across 7 affected languages. Every coverage lesson is under 32 steps (PP43), uses genuine src/trg pairs (PP66 — no filler), and has generic hints that don't leak the answer (PP8).

---

## Current state

### Runtime validator output (all 10 languages)
```
german       PP8=0 PP43=0 PP48=0 PP64=0 PP67=0
korean       PP8=0 PP43=0 PP48=0 PP64=0 PP67=0
dutch        PP8=0 PP43=0 PP48=0 PP64=0 PP67=0
french       PP8=0 PP43=0 PP48=0 PP64=0 PP67=0
spanish      PP8=0 PP43=0 PP48=0 PP64=0 PP67=0
italian      PP8=0 PP43=0 PP48=0 PP64=0 PP67=0
japanese     PP8=0 PP43=0 PP48=0 PP64=0 PP67=0
chinese      PP8=0 PP43=0 PP48=0 PP64=0 PP67=0
portuguese   PP8=0 PP43=0 PP48=0 PP64=0 PP67=0
russian      PP8=0 PP43=0 PP48=0 PP64=0 PP67=0
GRAND TOTAL violations: 0
```

### Runtime corpus
39,038 teach cards across 10 languages, 4,515 lessons (+279 coverage lessons added this session).

---

## Architecture notes for the next session

- **Two validators now.** `validate_runtime.mjs` is authoritative. `validate_all.cjs` is kept but no longer reflects shipping reality. When writing new scripts that need violation data, call `validate_runtime.mjs --json`.
- **Coverage files are ephemeral.** `_coverage_u*.js` files are auto-generated by `pp64_coverage.mjs`. They can be regenerated anytime: `rm src/data/*/_coverage_*.js && git checkout src/data/ && node scripts/pp64_coverage.mjs --apply`.
- **Their quality is the mechanical minimum.** Match pairs = real translations; fb answers = real target-language forms; hints = generic. This passes the validator and is pedagogically valid (it tests taught vocabulary) but is not the same as hand-crafted pedagogical content. A future human+AI pass could replace these with contextual examples.
- **PP63 (example-vocab integrity)** is NOT yet validated at runtime. The existing `pp63_audit.cjs` is a standalone script with its own massive function-word lists; porting into the runtime validator is a larger project. Listed as remaining work below.

---

## Remaining work (descending priority)

1. **PP63 runtime validation.** Port `pp63_audit.cjs`'s function-word lists and checks into `validate_runtime.mjs`. Then sweep the 31,910 previously-unvalidated cards. Expect hundreds of PP63 hits in batch/temp content.
2. **Hand-craft polish.** The 279 auto-generated coverage lessons work but are mechanical. A future pass could replace `s:"{1}"` fb steps with contextual sentence frames pulled from the card's own `example` field (replacing the trg with `{1}`). No new validator violations expected — just richer UX.
3. **Dialogue scaling** (pre-existing work): Italian 138 + Japanese 28 dialogues need 3+ turns.
4. **V1 → V2 source migration** to drop `_normStep()`.
5. **LessonEngine.jsx split** (4,165 lines, owner-paused).

---

## Behavior rules unchanged

- **Autonomous default.** Don't pause for approval on validator-fix work, content additions, doc updates, commits/PRs/squash-merges/CI watches.
- **Pause for:** destructive ops, structural refactors, sensitive content, workflow rule changes, owner says "breather".
- **Brief responses.** Numbers > paragraphs.
- **Always run `npm run build`** after each commit before push.
- **Always `gh run watch <id> --exit-status`** after merge.
- **Verify with `git diff --stat origin/main..HEAD`** before pushing.

---

## Session-start checklist for next agent

```bash
# 1. Confirm clean state
git checkout main && git pull
npm install   # only first use of worktree
npm run build   # should be clean

# 2. Authoritative validator — should show zero violations
node scripts/validate_runtime.mjs

# 3. If picking up PP63 work, start here:
node scripts/pp63_audit.cjs <lang>-v2 --include-batch
# (this is still text-based; porting into validate_runtime.mjs is the next step)
```

---

## Commands cheat-sheet

```bash
# Authoritative runtime validator (follows imports, walks actual data):
node scripts/validate_runtime.mjs                       # all 10 languages
node scripts/validate_runtime.mjs italian --verbose     # one language, detail
node scripts/validate_runtime.mjs --json > /tmp/v.json  # machine-readable

# Runtime corpus count:
node scripts/_runtime_count.mjs

# Regenerate coverage lessons (idempotent):
rm src/data/*/_coverage_*.js
git checkout src/data/
node scripts/pp64_coverage.mjs --apply

# Legacy static validator (MISSES imported batch content, kept for speed):
node scripts/validate_all.cjs <lang>-v2
```

---

## What shipped in this session

| PR | Title | Lines |
|---|---|---|
| [#297](https://github.com/jasondeddensmusic-ship-it/Lingoverse/pull/297) | feat(validator): runtime validator closes blind spot | +364 / −4 |
| [#298](https://github.com/jasondeddensmusic-ship-it/Lingoverse/pull/298) | fix(validator-cleanup): clear all PP8/PP43/PP48 violations | +649 / −439 |
| [#299](https://github.com/jasondeddensmusic-ship-it/Lingoverse/pull/299) | fix(pp64,pp67): 6,204 → 0 via auto-generated coverage lessons | +8,019 / −290 |

All three merged to main. CI green.

---

**Author:** Claude Opus 4.7 (1M context) — session 2026-04-22
**Status:** All PP-rule checks PASS at runtime across 39,038 cards. First truly-validated corpus state since the V2 rollout began.
**Branch:** synced to main at 5ce33ee.
