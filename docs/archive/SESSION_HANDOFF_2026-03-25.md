# Session Handoff — 2026-03-25

## What Was Done

### Shipped to main:
1. **Docs cleanup**: 11 stale docs archived to `docs/archive/`. 2 new companion docs: `docs/BUILD_STATUS.md`, `docs/RULES_RATIONALE.md`.
2. **Engine normalization layer**: `_normStep()` in verumlingua.jsx makes both `nl`/`en` AND `trg`/`src` available on all teach card steps. `_origTrg` flag marks cards originally written in trg/src format so the correct renderer fires.
3. **Article pill removed**: DER/DIE/DAS pill badge removed from board-mode and flashcard teach card renderers. Article + noun always colored via `c.pillText` regardless of grammarHl toggle.
4. **Hotfix**: Prevented normalization from making the new-format (trg) renderer catch old-format (nl) cards. Old cards now correctly use their original renderer with the plain white note box.
5. **PR #74 closed** (V12 nebula — V11 was the chosen version).

### NOT shipped (lost in rebase conflict):
1. **CLAUDE.md slim**: Was reduced from 1,429 to 312 lines. Rebase conflict resolution (`git checkout --ours` during rebase = main's version, NOT ours) reverted this. Needs to be redone.
2. **German v2 field rename**: `nl`/`en` → `trg`/`src` was applied to units-german-v2.js (1,579 nl→trg, 1,628 en→src, 1,450 exampleEn→exampleSrc, srcLang:"en" added to all 12 units). Rebase reverted this. Needs to be redone.

### Known bugs introduced:
- **"Achievement: undefined!"** toast appears on some teach cards. Root cause: `ACHS.find(x=>x.id===id)` returns an achievement with `name: undefined`. Likely triggered by the normalization adding `trg` field to cards. Investigate which achievement ID is being unlocked and why `a.name` is undefined.

---

## Immediate Priorities (in order)

### 1. Fix 73 PP8 violations in German v2
**File**: `src/data/units-german-v2.js`
**Scan results**: 60 hint leaks + 13 visual leaks across 12 units (A1+A2).

**Top patterns to fix**:
- **Case grammar hints (40+ violations, Units 4-6, 8, 11-12)**: Hints spell out article transformations ("die becomes der", "neuter = dem"). Fix: describe the rule without giving the final form ("feminine nouns change in dative").
- **Parenthetical answer reveals (15+ violations)**: Pattern: "verb (answer)" in hints. Fix: remove the parenthetical.
- **Conjunction leaks (Units 7-12)**: Hints name the conjunction (weil, dass, ob) that IS the answer. Fix: describe the function ("reason clause" not "weil-clause").
- **Visual leaks (13)**: Questions quote a sentence containing the answer word. Harder to fix but some can be rephrased.

**Full violation list**: See the PP8 scan output from the 2026-03-25 session (stored in agent context). Key violations by unit:
- U4 (deu_r4): 8 violations (accusative case hints)
- U5 (deu_r5): 12 violations (dative + modal hints)
- U7-U9 (deu_r7-r9): 14 violations (Nebensatz + reflexive hints)
- U10-U12 (deu_r10-r12): 15 violations (Perfekt + Konjunktiv + adjective declension hints)

### 2. Redo CLAUDE.md slim
The 312-line version was written and is correct. It lives in git history at commit `e400dbc` on branch `claude/modest-burnell`. The content:
- Project overview (15 lines), Owner workflow (10 lines), Architecture tables (20 lines)
- New data format spec with trg/src convention + srcLang at unit level
- PP index as compact table (30 lines)
- Pipeline rules grouped by phase (100 lines)
- 6 consolidated agent rules (A-F) replacing the old 25 rules (40 lines)
- Compact current state table, next priorities, doc hierarchy, principles

**How to redo**: Write the new CLAUDE.md fresh (use commit e400dbc as reference), commit directly to main. Do NOT use worktrees or rebase — commit directly.

### 3. Redo German v2 field rename
Same as above — the rename script worked perfectly:
```python
# In units-german-v2.js:
# 1. exampleEn: → exampleSrc:
# 2. nl: → trg: (in object field position)
# 3. ,en: → ,src: (after comma)
# 4. Add srcLang:"en" to each unit (lang:"de" → lang:"de",srcLang:"en")
```
After rename, verify with `npm run build`. The engine normalization layer handles both formats.

### 4. Grammar tag infrastructure
Not started. Plan:
- Define schema: `pos` (verb/noun/adj/adv/prep/conj/pron/num/intj/part/aux), `gender` (m/f/n/pl/null)
- Write auto-tagger script for German (parse articles from trg field, cross-reference patterns)
- Apply to German v2's ~1,450 teach cards
- Manual review for ambiguous cases

### 5. Fix "Achievement: undefined!" bug
Search for the `unlock()` call path. `ACHS.find(x=>x.id===id)` finds an entry but `a.name` is undefined. Check what achievement ID is being triggered and whether it exists in the ACHS array with a proper name field.

### 6. German B1-B2 build
Still pending. 24 units (U13-U36). Master batch plan in `docs/GERMAN_MASTER_BATCH_PLAN.md`.

---

## Technical Notes for Next Session

### Vite + Windows/OneDrive caching
The Vite dev server on this Windows/OneDrive setup has aggressive transform caching that ignores file modifications. Symptoms: edits to verumlingua.jsx don't appear in the served source even after server restart + cache clear. **Workaround**: Use `npx vite build` to verify edits compile correctly, then push to main and test on production. Don't rely on the dev server for visual verification of JSX changes.

### Multiple teach card renderers
There are at least 4 teach card renderers in verumlingua.jsx:
1. **New format** (line ~10077): `if(st.type==="teach" && st._origTrg)` — for cards with original trg/src fields
2. **Board-mode** (line ~10392): `if(st.type==="teach" && boardMode)` — for board:true lessons with nl/en
3. **Legacy new** (line ~10716): `if(st.type==="teach")` with gold frame — for legacy new-word cards
4. **Flashcard** (line ~12355): Inside the flashcard/review system

ALL four need to be kept in sync for any visual changes (pill removal, article coloring, note box style).

### Normalization layer
`_normStep()` runs once at module load on all steps in all units. It:
- Copies nl→trg and en→src (and vice versa)
- Copies exampleEn↔exampleSrc
- Normalizes verb_table row en↔src
- Sets `_origTrg=true` on cards that originally had trg (before normalization)
- Sets `srcLang:"en"` on units that don't have it

### Rebase lesson learned
During rebase, `git checkout --ours` means the BASE branch (main), NOT the branch being rebased. To keep YOUR changes during rebase conflicts, use `git checkout --theirs`. This is the opposite of merge behavior.
