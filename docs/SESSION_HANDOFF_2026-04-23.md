# Session Handoff — 2026-04-23

> **READ FIRST.** Second wave of validator-cleanup. Runtime validator now covers five more checks (PP22c + four PP8 variants) and 2,800+ surfaced violations were cleared. Coverage lessons got a UX polish pass.

---

## TL;DR

Runtime validator extended: PP8 position leak, PP8 length leak, PP22c em-dash.
Initial sweep surfaced 2,324 new violations; 2,107 cleared this session.

- PP22c em-dash: 289 → **0**
- PP8 position: 461 → **7**
- PP8 length: 980 → **210** (via strict matching + tuned 60%/6+MCs threshold)
- Plus: all 279 auto-generated coverage lessons refreshed with contextual fb sentences instead of bare `{1}` placeholders.

Runtime corpus unchanged: **39,038 teach cards**, build green on main.

---

## What shipped

| PR | Title | Summary |
|---|---|---|
| [#301](https://github.com/jasondeddensmusic-ship-it/Lingoverse/pull/301) | fix: PP22c em-dash + PP8 position leaks | 2,528 em-dashes rewritten, 12,132 MC steps rotated, length threshold tuned |
| [#302](https://github.com/jasondeddensmusic-ship-it/Lingoverse/pull/302) | polish(coverage): contextual fb sentences | 279 coverage lessons regenerated — fb `s` field now pulls first turn of card's `example` with trg blanked |

### Key scripts added

- `scripts/pp22c_fix.mjs` — text-based em-dash sweep with three replacement strategies (clause boundary → period, mid-phrase → comma, compound → hyphen-minus)
- `scripts/pp8_position_fix.mjs` — walks every MC block in every source file, rotates opts so answer position cycles `i % opts.length` within each lesson

### Validator extensions

`scripts/validate_runtime.mjs` now reports:
- `pp8_position` — per-lesson >50% clustering in one slot (4+ MCs)
- `pp8_length` — per-lesson >60% uniquely-longest answer (6+ MCs, strict inequality)
- `pp22c` — em-dash in any user-facing string or array field

`scripts/pp64_coverage.mjs` gained a `--regenerate` flag that overwrites existing `_coverage_u*.js` files when the validator has zero gaps — used to propagate generator improvements without re-patching unit files.

---

## Current runtime validator state

```
All 10 languages PP8/PP22c/PP43/PP48/PP64/PP67 clean EXCEPT:
  PP8 position:   7   (German u02/u03/u08/u09, Spanish u93, Portuguese u04/u06)
  PP8 length:   210   (Korean 130, Dutch 31, French 29, Spanish 11, Italian 6, Japanese 1, Portuguese 2)
  Total residual: 217
```

---

## Remaining work — priority order

### 1. PP8 length residuals (210 lessons) — CONTENT-LEVEL
Every flagged lesson has 4+ out of 6+ MC steps where the correct answer is STRICTLY longer than every distractor. Fix requires content-level distractor rewriting (can't be automated safely; content judgment needed).

Typical pattern: short-word distractors paired with a longer descriptive answer.

```
ans="sometimes"(9) | opts=["often"(5), "always"(6), "never"(5), "sometimes"(9)]
ans="not at all"(10) | opts=["a little"(8), "not at all"(10), "very much"(9), "sometimes"(9)]
```

**Approach options:**
- Content-agent pass with strict Rule B16 bounded-retry + Rule G dual-linguist gates.
- Or: add one longer distractor per leaky MC (needs plausible lexical pool per language).
- Or: accept as acceptable natural-vocab variation (210 out of ~14k MC steps = 1.5%).

### 2. PP8 position residuals (7 lessons) — INVESTIGATE
Mostly German (4) + Portuguese (2) + Spanish (1). Position rotator's per-lesson counter may not be detecting lesson boundaries in those specific files. Needs a careful single-file trace.

### 3. Dialogue scaling — Japanese A2 (119) + Italian (138)
Pre-existing polish work. Teach-card `example` fields need 3+ turns for A2+ CEFR alignment. Per-card content work; best dispatched to content agents under Rule B/G.

### 4. PP63 runtime port
Text-based `pp63_audit.cjs` reports zero gaps with `--include-batch`. Runtime port would be a safety net but isn't surfacing a hidden issue.

### 5. V1 → V2 `_normStep()` removal
Data-format dual-life cleanup. Pre-existing, owner-scoped.

### 6. LessonEngine.jsx split (4,165 lines)
Owner-paused structural refactor.

---

## Session-start checklist

```bash
git checkout main && git pull
npm install   # fresh worktree only

# Runtime validator (authoritative):
node scripts/validate_runtime.mjs

# Runtime corpus (should show 39,038):
node scripts/_runtime_count.mjs

# If investigating residual PP8 length/position, start here:
node scripts/validate_runtime.mjs <lang> --verbose | grep -A 1 'pp8_'
```

---

## Gotchas unchanged

1. CRLF line endings on Windows; pp22c_fix and coverage regen may produce large CRLF-flip diffs but content-wise only the targeted changes matter.
2. Runtime validator is authoritative. Legacy `validate_all.cjs` undercounts batch-imported content and its PASS is not trustworthy alone.
3. `_coverage_u*.js` files are auto-generated. Re-run with `--regenerate --apply` to refresh after generator tweaks.

---

**Author:** Claude Opus 4.7 (1M context) — session 2026-04-23
**Status:** 217 residual violations (all PP8 position/length content-level). Runtime corpus 39,038 cards, build green, CI green on main.
**Branch:** synced to main at 8473d65b.
