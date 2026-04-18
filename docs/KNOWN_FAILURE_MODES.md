# Known Failure Modes

> Patterns we've seen fail before. Each entry: trigger, symptom, fix, date discovered.
>
> An agent seeing a trigger should apply the fix directly rather than rediscover the issue.

---

## Validator theater: auto-generated filler coverage

**Trigger:** Agent given "fix PP64 untested teach cards" writes `{trg:"X",src:"(review)"}` match pairs.

**Symptom:** PP64 goes green but no real retrieval value. Learners see meaningless "(review)" text. Rule PP66 forbids this.

**Fix:** `scripts/cleanup_review_fillers.cjs` rewrites filler `src` fields to the teach card's actual translation. Agents must use real translations from the start.

**Discovered:** 2026-04-19 after my own `pp64_fix.cjs` auto-pass.

---

## Hint `___` substitution fake-fix

**Trigger:** Agent given "fix PP8 hint leak" replaces the leaked answer word with `___`.

**Symptom:** PP8-HINT goes green but the hint reads "Only safe with ___ friends your ___ or younger" — degraded pedagogy.

**Fix:** Agent prompts (Rule B15) explicitly forbid `___` substitution. Hints must be rewritten with genuine guidance, not blanked.

**Discovered:** 2026-04-18 during Korean 729-leak cleanup.

---

## PP43 explosion from PP64 auto-additions

**Trigger:** `scripts/pp64_fix.cjs` adds match steps to lessons that are already near the 32-step hard cap.

**Symptom:** PP64 = 0 but new PP43 over-dense violations appear (34–38 steps in German).

**Fix:** PP64 auto-fix must check step count BEFORE appending. If near cap, merge into an existing match step instead of adding a new one. Implemented by a follow-up agent in this session.

**Discovered:** 2026-04-19 during bulk PP64 cleanup.

---

## Apostrophe truncation in validator's match-pair regex

**Trigger:** Content with apostrophes — Italian `l'amicizia`, French `l'école`, English `'s`, Dutch `z'n`.

**Symptom:** `extractField` regex `trg:"([^'"]*)"` truncates at the first `'`, so validator reports these trgs as untested even when coverage exists.

**Fix:** For such cases, use `mc` with `ans:"..."` (robust regex) OR use the field in `fb` `a:` (also robust). Avoid relying on match pairs for apostrophe-heavy content.

**Discovered:** 2026-04-19 by an Italian PP64 cleanup agent.

---

## Secondary leaks introduced by first-pass hint rewrites

**Trigger:** Agent rewrites hint to remove leaked word, but the rewrite introduces a different answer word as collateral.

**Symptom:** Validator passes initially but second pass catches new leak.

**Fix:** Agents doing PP8 fixes must iterate until validator reports 0, usually 2-3 passes. This is expected and documented. `ans` contains many possible leak-words; rewrite conservatively.

**Discovered:** 2026-04-18 during Korean PP8 cleanup (hint rewrites accidentally leaked "formal", "verb", "style", "formal" into adjacent answers).

---

## Committed merge conflict markers

**Trigger:** Resolving a merge conflict hastily and committing without `npm run build`.

**Symptom:** `<<<<<<< HEAD`, `=======`, `>>>>>>> origin/main` shipped in source. CI build fails.

**Fix:** Rule C9 — mandatory `npm run build` after every merge-conflict resolution before pushing. Also `grep -rE '^(<<<<<<<|=======|>>>>>>>)' src/` must return zero.

**Discovered:** 2026-04-17 when 32 Russian units shipped with embedded conflict markers, PRs #178–#180 all failed CI.

---

## Agent context window overflow

**Trigger:** Spawning 12+ concurrent Opus agents or feeding one agent >40K tokens.

**Symptom:** Session memory exhausted mid-run, agents return empty or truncated.

**Fix:** Rule B7 — MAX 4 agents at a time. Rule B13 — token budget caps per agent type. Pre-digest data in agent prompts.

**Discovered:** Early 2026-04 — named "session death" in memory.

---

## Validator undercount via extractA string-form miss

**Trigger:** Validator's `extractA` only handled `a:["x"]` array form, not `a:"x"` string form.

**Symptom:** PP64 counts inflated because fb `a:"x"` string answers weren't being tracked as quiz coverage.

**Fix:** 2026-04-19 upgrade to `validate_all.cjs` — extractA now tries array form, falls back to string form. Reduced PP64 base count from 4666 to 4203.

**Discovered:** 2026-04-19 by the author (me) while debugging PP64 fix script discrepancies.

---

## Agent spawning sub-agents recursively

**Trigger:** Agent prompt hands agent a task that it interprets as "spawn more agents to help."

**Symptom:** Uncontrolled agent tree. 4-agent cap meaningless.

**Fix:** Rule H6 — agents MUST NOT spawn sub-agents. Only the main session spawns. Agent prompts state this explicitly.

**Discovered:** Possible but never observed. Prevention rule added proactively.

---

## Parallel agents editing same file

**Trigger:** Two agents both assigned to the same unit file.

**Symptom:** One overwrites the other's changes, or git conflicts at merge.

**Fix:** Rule D2 (max 2 agents per file, 50+ line buffer) + Rule H7 (file-lock manifest for parallel batches).

**Discovered:** Observed mid-session 2026-04-18.

---

## Validator-script heredoc escaping in tmp-dir `node -e` fails

**Trigger:** Writing quick debug scripts via `bash heredoc` with embedded regex.

**Symptom:** Shell interpolation corrupts regex literals; `node` fails with "Invalid regular expression".

**Fix:** Write debug scripts via the `Write` tool to a `scripts/_tmp_*.cjs` path, run with `node scripts/_tmp_*.cjs`. Never heredoc regex content.

**Discovered:** 2026-04-19 during Italian PP64 residual debug.

---

## Agent silent failure: no edits + "task complete"

**Trigger:** Agent completes but file is unchanged (often because the grep/read path was wrong).

**Symptom:** Agent reports success; validator still flags same count.

**Fix:** Agent prompts must include VERIFICATION step ("run validator and confirm count before reporting success"). Author should spot-check file timestamp after agent completion.

**Discovered:** Multiple times in PP8 Korean batches.

---

## How to use this file

At session start: read this file.
When executing a queue item: if the task matches a trigger here, apply the documented fix preemptively.
When a new failure pattern is observed and resolved: add an entry here before ending the session.
