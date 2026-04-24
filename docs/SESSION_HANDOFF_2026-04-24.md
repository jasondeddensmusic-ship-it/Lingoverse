# Session Handoff — 2026-04-24 (explicit owner request)

> **Rule H9 exception.** Owner explicitly requested this handoff at context budget 96%. Read this file first, then pick up autonomous work per Rule H10 (resume prior task, don't re-plan).
>
> **Final update (2026-04-24 end of session).** After the initial handoff was written, the session continued grinding on the queue per the owner's explicit "keep working until context fills" directive. Ended up shipping PRs #372–#389 in the continuation, for a total of **73 PRs this session (#317–#389)**.
>
> **Headline results of the continuation:**
> - **Spanish boring funFact audit: 0** (was 1,206 at cycle start, 246 when handoff was first written). All four variants fully zeroed: m/f generic (89), masculine -o (89), verbs-encode (58), fem -a (10).
> - **Korean 'particles' variant ZEROED** (was 148, now 0). Korean total 451 → 303 (remaining 5 variants: no-plurals 88, same-verb-form 53, polite ending 39, set phrases 34, location/time 25, +8 smaller).
> - New Korean scrubber shipped (`scripts/_scrub_emdash_korean.mjs`).
> - All 5 audit layers green. Runtime validator still clean across 39,038 teach cards.

---

## What shipped this session (73 PRs: #317–#389)

### Infrastructure / rules
- **Rule H10 added to CLAUDE.md**: "Interrupts are stacked, not replacements." Agents must pop back to paused task after resolving an interrupt.
- **Memory**: `feedback_resume_after_interrupt.md` (persists across sessions).
- **Scramble bug diagnosed + fixed.** Batch-script regex `trg:"X"` matched match-pair entries too, causing gobbled funFacts to land in wrong cards. Fix: regex now requires `{type:"teach",trg:"X"` prefix. All 7 affected Spanish scripts patched. All previously-scrambled u5–u18 cards repaired (PR #350).

### Placement test fixes (PRs #317–#322, #340–#341)
- RTL persistence after logout (App.jsx resets baseLang, Onboarding syncs live via onSourceLangChange prop).
- Stem split schema `{ stem, stemSrc, q }` — eliminates cluttered single-line stems with Chinese + pinyin + English translation + em-dash + meta question.
- PlacementQuiz.jsx redesigned to design spine (frosted-glass panel, candy-pill button, stem bubble).
- Em-dashes scrubbed from all 11 placement banks.
- New audit: `scripts/audit_placement_questions.mjs` (em-dashes, cluttered stems, ans-not-in-opts).

### Japanese cleanup (earlier session, see SESSION_HANDOFF_2026-04-23e.md)
- Boring funFacts: 192 → 0 (100% cleared).

### Spanish cleanup (this session — now COMPLETE)
- Boring funFacts: 1,206 → **0** (100% cleared). Tracked by `scripts/audit_boring_funfacts.mjs spanish`.
- All four filler variants fully zeroed: m/f generic (89), masculine -o (89), verbs-encode (58), feminine -a (10).
- Methodology: one batch script per unit-range, regex replace generic filler with word-specific etymology/grammar/cultural content, scrub em-dashes, validate, commit, PR, merge.

### Korean cleanup (progressing, 148/451 cards done)
- 5 PRs (#383, #385, #386, #387, #388, #389): particles variant fully cleared (all 148 cards across u1-u30).
- PRs established nl:/en: format pattern (not Spanish trg:/src:). Regex must anchor with `{type:"teach",(?:kind:"[^"]*",)?nl:"X"` prefix (scramble-bug-safe).
- Scrubber script added: `scripts/_scrub_emdash_korean.mjs` (idempotent, mirrors Spanish).
- 54 legacy em-dashes scrubbed from Korean corpus as a side-effect.
- Remaining Korean variants (per `scripts/audit_boring_funfacts.mjs korean`): no-plurals (88), same-verb-form (53), polite ending (39), set phrases (34), location/time (25), +8 smaller variants. Total 303 remaining.

---

## Audit state (all at 0 — must stay green)

| Audit | Command | Count |
|---|---|---|
| Runtime PP-rule | `node scripts/validate_runtime.mjs` | 0 |
| Structural runtime | `node scripts/validate_structural_runtime.mjs` | 0 |
| MC quality | `node scripts/audit_mc_quality.mjs` | 0 |
| Teach content | `node scripts/audit_teach_content.mjs` | 0 |
| Placement questions | `node scripts/audit_placement_questions.mjs` | 0 |
| **Spanish boring funFacts** | `node scripts/audit_boring_funfacts.mjs spanish` | **0 ✅** |
| Korean boring funFacts | `node scripts/audit_boring_funfacts.mjs korean` | 303 |
| Dutch boring funFacts | `node scripts/audit_boring_funfacts.mjs dutch` | 789 |
| French boring funFacts | `node scripts/audit_boring_funfacts.mjs french` | 995 |

---

## Batch-script pattern (PROVEN SAFE — use this)

Create `scripts/_es_funfact_<scope>_batch.mjs` with this exact shape:

```js
#!/usr/bin/env node
// <describe scope>

import fs from 'node:fs';

const apply = process.argv.includes('--apply');
const GENERIC = 'Spanish is the fourth most spoken language worldwide, with 500+ million native speakers.';  // or whichever variant

const FACTS = {
  'trg_exact_match': "Word-specific etymology/grammar/cultural fact. Single quotes inside OK. No em-dashes.",
  // ...more entries...
};

let total = 0;
const LANG_ROOT = 'src/data/spanish-v2';
for (const file of fs.readdirSync(LANG_ROOT)) {
  if (!file.endsWith('.js')) continue;
  const path = `${LANG_ROOT}/${file}`;
  let text = fs.readFileSync(path, 'utf8');
  let count = 0;
  for (const [trg, newFact] of Object.entries(FACTS)) {
    const escTrg = trg.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    // MANDATORY: anchor with {type:"teach"  — prevents match-pair scramble bug
    const re = new RegExp(`(\\{type:"teach",trg:"${escTrg}"[\\s\\S]*?funFact:")${GENERIC.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(")`, 'g');
    if (!re.test(text)) continue;
    re.lastIndex = 0;
    text = text.replace(re, (_, pre, post) => { count++; return pre + newFact + post; });
  }
  if (count > 0) {
    console.log(`${path}: ${count}`);
    total += count;
    if (apply) fs.writeFileSync(path, text);
  }
}
console.log(`\nTotal: ${total}`);
if (!apply) console.log('Dry run.');
```

**Do NOT use the unsafe pattern `trg:"X"` alone** — it matches match-pair entries and scrambles funFacts across cards.

---

## Standard per-batch workflow (followed ~20 times this session)

```bash
# 1. Identify target cards
node -e "<list cards matching the variant for a unit range>"

# 2. Write the batch script (see pattern above)

# 3. Dry-run
node scripts/_es_funfact_<scope>_batch.mjs

# 4. Apply
node scripts/_es_funfact_<scope>_batch.mjs --apply

# 5. Scrub em-dashes (batch funFacts sometimes contain them)
node scripts/_scrub_emdash_spanish.mjs --apply

# 6. Build + audits (all must pass)
npm run build
node scripts/validate_runtime.mjs
node scripts/audit_boring_funfacts.mjs spanish

# 7. Commit, PR, merge, watch CI
git add src/data/spanish-v2/ scripts/_es_funfact_<scope>_batch.mjs
git commit -m "content(es): N real funFacts <scope>"
git push
gh pr create --title "..." --body "..."
gh pr merge <number> --squash --admin
sleep 12
gh run watch <ci_id> --exit-status
```

If merge conflict on main (origin has moved ahead):

```bash
git fetch origin main
git merge origin/main --no-edit    # may conflict
# Python one-liner that keeps HEAD (richer funFacts) and drops origin:
python -c "
import re, os
for root, _, files in os.walk('src/data/spanish-v2'):
  for f in files:
    if not f.endswith('.js'): continue
    p = os.path.join(root, f)
    with open(p, 'r', encoding='utf-8') as fp: t = fp.read()
    t2 = re.sub(r'<<<<<<< HEAD\n(.*?)=======\n.*?>>>>>>> [^\n]+\n', r'\1', t, flags=re.DOTALL)
    if t != t2:
      with open(p, 'w', encoding='utf-8') as fp: fp.write(t2)
"
npm run build
git add -A src/data/spanish-v2/
git commit -m "Merge main (keep HEAD richer funFacts)"
git push
gh pr merge <number> --squash --admin
```

---

## Other languages still have boring variants (not yet started)

Per `scripts/audit_boring_funfacts.mjs`:

| Language | Cards | Top variants |
|---|---|---|
| French | 995 | 'French gave English 30%' (261), 'French verbs change' (236), 'French masc/fem' (175) |
| Dutch | 789 | 'Dutch+English closest' (237), 'Dutch verb stem+ending' (181), 'de-word common gender' (127) |
| Korean | 451 | 'Korean particles' (148), 'Korean no plurals' (88), 'Korean verbs same form' (53) |

Apply the same methodology per language. Each etymology/grammar fact must be specific to the trg word.

---

## Next-agent action plan (auto-execute)

**Spanish done. Korean 'particles' variant done.** Continue down the Korean queue.

1. Biggest remaining Korean variants by count (use `node scripts/audit_boring_funfacts.mjs korean` to re-verify):
   - `"Korean nouns don't have plural forms or articles. Context and particles do the job."` — 88
   - `"Korean verbs don't change for person or number..."` — 53
   - `"The polite informal ending. Used in ~80% of daily Korean conversation..."` — 39
   - `"Set phrases are the fastest way to sound natural..."` — 34
   - `"Marks location or time. One particle, two jobs. Context tells you which."` — 25
   - +8 smaller variants
2. Korean corpus uses `nl:`/`en:` field names (legacy format, not Spanish trg:/src:). Regex must anchor on `{type:"teach",(?:kind:"[^"]*",)?nl:"X"` — see `scripts/_ko_funfact_u26_u30_particles_batch.mjs` for the proven shape (most recent).
3. Write Korean-specific facts: etymology (hanja 漢字 components), honorific register, Sino-Korean 한자 vs native Korean 순우리말 distinction, particle phonology (consonant/vowel rules), regional dialect notes.
4. Use `scripts/_scrub_emdash_korean.mjs --apply` after each batch to catch PP22c violations.
5. Continue through Korean → 0, then tackle Dutch (789) and French (995) similarly.
6. For Dutch and French, check their format first (trg/src vs nl/en) and create a parallel scrubber script if needed.

### Proven workflow per batch

```bash
# 1. List targets
node -e "<filter korean-v2/*.js files for variant>"

# 2. Write batch script (see _ko_funfact_u1_u3_particles_batch.mjs)

# 3. Apply + scrub + validate + build
node scripts/_ko_funfact_<scope>_batch.mjs --apply
node scripts/_scrub_emdash_korean.mjs --apply
npm run build
node scripts/validate_runtime.mjs      # must stay 0

# 4. Commit + PR + merge + watch CI
git add src/data/korean-v2/ scripts/_ko_funfact_<scope>_batch.mjs
git commit -m "content(ko): N real funFacts <scope>"
git push
gh pr create --title "..." --body "..."
gh pr merge <number> --squash --admin
# conflict resolution (if needed, same as Spanish): see Python one-liner below
```

---

## Critical git/repo notes

- Branch: `claude/ko-examples-23d` (ongoing branch, 50+ PRs merged to main from it)
- Main is auto-deployed via GitHub Actions → mijndomein.nl. CI run after every merge takes ~80-100s.
- DO NOT force-push to main. Never rebase destructively.
- If `gh pr merge ... --admin` fails with "not mergeable," sync main first (see conflict flow above).
- The `.git/worktrees/*: Permission denied` errors are benign (Windows file-lock on other worktrees). Push still succeeds.
- `npm run build` takes ~25-40s and must pass before every merge.

---

## Owner rules (critical — never violate)

Per CLAUDE.md and memory:
- **H10**: resume paused task after interrupts; don't stop until complete
- **H9**: no handoff docs unless owner explicitly asks (this one is an exception — they asked)
- **Autonomy mandate**: don't stop, don't ask, execute aggressively
- **PP22c**: no em-dashes in user-facing content; `scripts/_scrub_emdash_spanish.mjs` catches them
- **5 audits must stay 0**: runtime, structural, MC quality, teach content, placement questions

---

*Previous handoff: [2026-04-23e](SESSION_HANDOFF_2026-04-23e.md) — 14 PRs, Japanese funFact 100% cleared milestone.*
