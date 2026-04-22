# Session Handoff — 2026-04-22 (autonomous)

> **READ FIRST.** Major findings from yesterday/today. The next session has one critical task to pick up: fix the validator blind spot, then clear the violations it surfaces.

---

## TL;DR

- **Production teach card count is 39,038**, not 14,823 as previously reported. CLAUDE.md fixed.
- **Orphan-import bug found and fixed.** Italian + Japanese had ~8,500 teach cards in batch files that were imported but never referenced in `lessons:[...]` arrays — Vite tree-shook them out. PR #294 wired them; production bundle grew 42.5MB → 46MB. Italian: 970 → 5,146. Japanese: 737 → 5,076.
- **Validator blind spot confirmed.** `scripts/validate_all.cjs` reads files as text and does NOT follow JS imports. **~24,000 teach cards across 6 languages have NEVER been validated** for PP8/PP43/PP48/PP63/PP64/PP67. They've been shipping unchecked.
- **Working tree clean.** Branch synced to main at commit `0caf25d`.

---

## The validator blind spot — CRITICAL, this is the next session's job

### What the bug is

`scripts/validate_all.cjs` walks `src/data/<lang>-v2/unit-*.js` and `--include-batch` adds `_batch*.js` and `_temp*.js` files. For each file it reads as **text** and runs PP rule checks.

**It does NOT follow JS imports.** A unit file like:
```js
import LESSON_1 from './_temp_a2gap_L01.js';
const UNIT = { lessons:[LESSON_1, ...] };
```
The validator sees `LESSON_1` as a bare identifier in the lessons array. It doesn't load `_temp_a2gap_L01.js` to check the actual lesson's teach cards. Even with `--include-batch` it processes batch files in isolation, missing the unit context (so PP63 example-vocab integrity can't trace prior teach cards across the import boundary).

### Quantified blind spot

Runtime corpus minus what static validator could see (per `node scripts/_runtime_count.mjs`):

| Language | Static (validator) | Runtime (actual) | **Unvalidated** |
|---|---|---|---|
| Italian | 970 | 5,146 | **4,176** |
| Japanese | 737 | 5,076 | **4,339** |
| French | 1,212 | 5,176 | 3,964 |
| Spanish | 1,398 | 5,302 | 3,904 |
| Dutch | 1,384 | 5,290 | 3,906 |
| Korean | 1,427 | 5,331 | 3,904 |
| **Total** | **7,128** | **31,321** | **~24,193** |

(German/Chinese/Portuguese/Russian don't use batch imports — fully validated.)

### What this means

For ~38 PRs today, every "all validators clean" claim was true **only for the inline 7,128 cards**. The other 24,000 were shipping without any PP-rule check. Likely violations sitting in batch content right now:
- PP8 hint leaks (hints containing the answer word)
- PP63 untaught vocab in examples
- PP64 teach cards with no quiz coverage
- Possibly PP43 over-dense lessons
- Possibly PP48 multi-blank fb misuse

### The fix path

1. **Patch `scripts/validate_all.cjs` to follow JS imports.** Two implementation options:
   - **Option A (preferred):** Use Node ESM dynamic import on `src/data/units-<lang>-v2.js` (the language's aggregator) and walk the resolved data. This is what `scripts/_runtime_count.mjs` does. Run all PP checks against the in-memory unit objects.
   - **Option B:** Recursively parse `import X from './path.js'` lines and read+merge content. More fragile, doesn't handle re-exports cleanly.
2. **Re-run validator on all 10 languages.** Expect thousands of violations across the 6 batch-using languages.
3. **Triage in batches.** Likely categories:
   - PP8 hint leaks (mechanical fixes — rewrite hint to not contain the answer)
   - PP63 untaught vocab (rewrite example or add teach cards)
   - PP64 lemma-match gaps (add match pairs with dictionary forms)
4. **Fix in waves**, one PP rule per language at a time. Validators must run after each fix to confirm.

**Estimated scope:** 3–8 PRs to clear. Possibly more if PP63 surfaces deep issues.

---

## What shipped today/yesterday (full chronology of this extended run)

### 2026-04-20 (38 PRs, #255–#292)
Vocabulary closures + Italian accent restoration + F11 Resolve Disputes + various PP64 lemma-match fixes. +648 teach cards into inline unit content. All shipped clean per the static validator (which we now know was undercounting).

See `docs/SESSION_HANDOFF_2026-04-20d.md` for full chronology.

### 2026-04-21 (4 PRs, #294–#297-ish)
- **PR #294** — `feat: wire 345 orphaned batch imports (Italian 312 + Japanese 33)`
  - Fixed the orphan-import bug for Italian + Japanese
  - New script: `scripts/wire_orphan_batches.cjs` (dry-run + --apply modes)
  - Bundle grew 42.5MB → 46MB
- **e8fffa5** — `chore: add runtime teach-card counter`
  - New script: `scripts/_runtime_count.mjs`
  - Loads units-`<lang>`-v2.js via Node ESM and counts the actual production corpus
  - Revealed 39,038 total (not 14,823)
- **PR #295** — `docs(CLAUDE.md): runtime totals — 39,038 teach cards`
  - CLAUDE.md per-language counts updated to runtime numbers

---

## Per-language runtime corpus (final, accurate)

| Language | Units | Lessons | Teach cards (runtime) |
|---|---|---|---|
| German | 36 | 564 | 5,209 |
| Korean | 69 | 544 | 5,331 |
| Dutch | 92 | 577 | 5,290 |
| French | 90 | 571 | 5,176 |
| Spanish | 95 | 585 | 5,302 |
| Italian | 36 | 466 | 5,146 |
| Japanese | 36 | 511 | 5,076 |
| Chinese | 45 | 184 | 920 |
| Portuguese | 36 | 136 | 851 |
| Russian | 36 | 98 | 737 |
| **Total** | **571** | **4,236** | **39,038** |

Get this any time: `node scripts/_runtime_count.mjs`

---

## Behavior rules unchanged

- **Autonomous default.** Don't pause for approval on validator-fix work, content additions, doc updates, commits/PRs/squash-merges/CI watches.
- **Pause for:** destructive ops, structural refactors (LessonEngine split), sensitive content, workflow rule changes, owner says "breather".
- **Brief responses.** Numbers > paragraphs.
- **Always run `npm run build`** after each commit before push.
- **Always `gh run watch <id> --exit-status`** after merge.
- **Verify with `git diff --stat origin/main..HEAD`** before pushing.
- **Inline-edit fallback:** if 4-agent parallel dispatch loses changes, switch to single-agent or main-session inline.

---

## Session-start checklist for next agent

```bash
# 1. Confirm clean state
git checkout main && git pull
npm install   # only first use of worktree
npm run build   # should be clean

# 2. Get the actual corpus size
node scripts/_runtime_count.mjs
# Should show ~39,038 across 10 languages

# 3. Run static validator (will show only ~7K-cards-checked picture)
for L in german korean dutch french spanish italian japanese chinese portuguese russian; do
  node scripts/validate_all.cjs $L-v2 | grep -E "Teach|RESULT"
done

# 4. Read this handoff. The validator-blind-spot fix is the priority.
```

---

## Critical gotchas (Windows + this repo)

1. **CRLF line endings.** Source files use `\r\n`. Be careful with `sed` / `node -e` scripts; they can convert and produce huge diffs.
2. **Bash on Windows.** Unix syntax: `/dev/null`, forward slashes.
3. **`npm install` per worktree.** Fresh worktree fails on `ts-fsrs` until npm install runs.
4. **Static validator silently misses imported content.** Confirmed today. Use `_runtime_count.mjs` for true counts; until validator is patched, treat its "PASS" as partial coverage only.
5. **Tree-shaking.** Vite drops imports whose bound names aren't referenced. This is why orphan imports = dead code in the bundle.

---

## Validator commands cheat-sheet

```bash
# Static validator (text-based, MISSES imported batch content):
node scripts/validate_all.cjs <lang>-v2

# Static validator with batch sweep (still misses cross-file context):
node scripts/validate_all.cjs <lang>-v2 --include-batch

# True runtime count (follows JS imports, accurate):
node scripts/_runtime_count.mjs

# Build (catches parse errors, missing imports):
npm run build

# Wire-up script (find + apply orphan imports):
node scripts/wire_orphan_batches.cjs <lang>-v2          # dry-run
node scripts/wire_orphan_batches.cjs <lang>-v2 --apply  # write changes
```

---

## What's "really left" after the validator fix

If the validator fix surfaces violations and we clean them, the platform reaches its first **truly-validated** state across all 39k cards. After that:

1. **Dialogue scaling** (Italian 138 + Japanese 28 dialogues need 3+ turns) — still open, owner-discussed
2. **Korean V2 voice audit** vs V1 originals — 1-session quality pass
3. **`nl/en` → `trg/src` mass migration** — clean data format dual-life, drop `_normStep()`
4. **LessonEngine.jsx split** (4,165 lines, 4 renderers) — owner-pause, structural

STOPS-ON: Supabase, TTS, Midjourney/SD art, mobile shell decision (all owner).

---

**Author:** Claude Opus 4.7 (1M context) — sessions 2026-04-20 + 2026-04-21
**Status:** Green build, all static validators PASS (but only covering 7k of 39k cards). Fix the validator next.
**Branch:** `claude/bold-nobel-889ce9` synced to main.
