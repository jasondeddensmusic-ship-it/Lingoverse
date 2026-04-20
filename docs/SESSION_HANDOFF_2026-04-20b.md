# Session Handoff — 2026-04-20 (continuation)

> Single source of truth for the next agent. Read this file first, then `CLAUDE.md`, then `docs/AUTONOMOUS_QUEUE.md`. This doc covers the autonomous run starting after PR #254 (handoff from session 2026-04-19/20).

---

## TL;DR — State at handoff

- **6 PRs shipped this session** (#255 through #260). All merged to `main`. All CI green.
- **+173 teach cards** added across 9 languages (Russian smallest at +7; Korean largest at +34).
- **All 10 languages 100% clean** on every validator: PP8, PP43, PP48, PP63, PP64, PP66, PP67.
- **Grand total: ~14,348 teach cards** (was 14,175). Up from 13,637 at start of prior session — +711 across the 41+6 PR run total of two sessions.
- **Working tree clean** on branch `claude/bold-nobel-889ce9` at commit synced with main.

---

## Per-PR breakdown this session

| PR | Title | Cards | Languages |
|---|---|---|---|
| [#255](https://github.com/jasondeddensmusic-ship-it/Lingoverse/pull/255) | A1 essential vocabulary closures — FR/ES/NL/KO | +36 | French (+11), Spanish (+9), Dutch (+6), Korean (+10) |
| [#256](https://github.com/jasondeddensmusic-ship-it/Lingoverse/pull/256) | A1/A2 essentials batch 2 — JA/KO/ES/NL | +24 | Japanese (+6), Korean (+5), Spanish (+9), Dutch (+4) |
| [#257](https://github.com/jasondeddensmusic-ship-it/Lingoverse/pull/257) | A1/N5/HSK1 essentials batch 3 — ZH/JA/RU/PT | +34 | Chinese (+9), Japanese (+8), Russian (+7), Portuguese (+10) |
| [#258](https://github.com/jasondeddensmusic-ship-it/Lingoverse/pull/258) | A1/HSK2-3/TOPIK1/B2 essentials batch 4 — IT/KO/ZH/NL | +35 | Italian (+10), Korean (+10), Chinese (+9), Dutch (+6) |
| [#259](https://github.com/jasondeddensmusic-ship-it/Lingoverse/pull/259) | A2/B2 deepening batch 5 — FR/ES/PT | +26 | French (+9), Spanish (+9), Portuguese (+8) |
| [#260](https://github.com/jasondeddensmusic-ship-it/Lingoverse/pull/260) | A1 essentials batch 6 — IT colors+nouns / KO daily-life | +18 | Italian (+9), Korean (+9) |

## Per-language session deltas

| Language | Before | After | +Added |
|---|---|---|---|
| German | 5,170 | 5,170 | 0 |
| Korean | 1,350 | 1,384 | +34 |
| Italian | 905 | 924 | +19 |
| Spanish | 1,323 | 1,350 | +27 |
| French | 1,156 | 1,176 | +20 |
| Chinese | 842 | 860 | +18 |
| Portuguese | 761 | 779 | +18 |
| Dutch | 1,333 | 1,349 | +16 |
| Japanese | 670 | 684 | +14 |
| Russian | 665 | 672 | +7 |
| **Total** | **14,175** | **14,348** | **+173** |

---

## Key lessons from this session

1. **PP24 pre-check via `type:"teach"[^}]*trg:"..."` regex is essential.** A bare `trg:"..."` grep matches in match pairs which DON'T count as teach cards. The strict regex catches only standalone teach cards.
2. **Article-prefixed forms hide duplicates.** `trg:"o café"` won't match a search for `trg:"café"`. When grep says missing, sometimes it's article-prefixed elsewhere. Trust agent grep over audit doc.
3. **`_temp_*` files imported into units count as taught.** Several Italian colors and Korean A2 staples lived in `_temp_u03_expand_*.js` and `_temp_a2gap_*.js` files imported into unit-03 and unit-31/32/33 respectively. These ARE part of the corpus.
4. **Diminishing returns curve is real.** Batches 1-3 had ~10% substitution rate. Batches 5-6 had ~50%. Most A1/A2 essentials are now closed.
5. **Sometimes agents are right and main session is wrong.** Dutch agent in batch 2 substituted het restaurant/het ziekenhuis/makkelijk because they ARE taught as standalone teach cards. My initial grep missed the `[Omitted long matching line]` hit.
6. **Korean lemma-vs-conjugation in PP64.** Korean verbs taught as 만나다 (lemma) but quizzed only via 만나요 (conjugated) trip the PP64 untested-teach check. Always include the lemma form somewhere a quiz can match (a match pair works well).
7. **PP8 hint leaks easy to introduce.** Even with explicit prompt warnings, agents sometimes write hints that contain the answer word. Always run validator after agent commit; fix manually if 1-2 leaks.

---

## What's still on the queue

### P1 — Pedagogical completeness (autonomous-friendly)

- **More PP55 deepening for Russian, Japanese, Chinese, Portuguese**: these new languages still have substantial A2/B1 gaps per `docs/audits/pp55_*.md`. Each batch has ~50% substitution rate now — useful but slowing.
- **Italian A2 / German A2 dialogue scaling** — handoff PP58 area. Italian: 138 dialogues need 3+ turns. Japanese: 28 need 3+ turns. (No code is broken — quality polish only.)
- **F11 Resolve disputes (B2)** — last remaining PP58 function gap. 5/6 explicit + NL partial. One more language closes it.

### P2 — Technical debt (still owner-decision-dependent)

- **Italian accent restoration (LARGE):** 200+ instances per handoff still need attention even after PR #253. Risky because è/e disambiguation needs context. Best done as targeted scan + manual review per file.
- **Korean legacy `nl/en` field migration** — Some Korean lessons still use legacy field names. Auto-normalized at runtime via `_normStep`, so not breaking. Migrate when convenient.
- **Cognate corpora (COGNATE-CORPUS-001 through 005)** — needs owner-approved cognate list precondition.

### P2 — UI/feature work (unmerged on `sad-cohen-32e111`)

Per prior handoff, 8 feature commits still pending PR from branch `claude/sad-cohen-32e111`:
- SRS wiring (ts-fsrs)
- Verb table clickable
- Dutch grammar production rewrite
- Verumius story arcs (Spanish)
- Cognate Hub tip cards (5 languages)
- Lesson celebration screen
- Placement quiz
- Supabase backend recommendation doc

### STOPS-ON (waiting on owner)

- Supabase credentials (backend persistence)
- Google Cloud TTS credentials
- Midjourney/SD art generation
- Mobile app shell decision

---

## What WORKED well (keep doing)

1. **Pre-grep verification before dispatching agents.** Save agent budget by confirming gap exists. Do it via `type:"teach"[^}]*trg:"..."` regex.
2. **Sonnet agents with strict prompts.** Pattern: AGENT_CONTENT_RULES persona + PP24 pre-check + lessons-array boundary discipline + npm run build verification.
3. **3-4 agents per batch, parallel.** Dispatch independent files. ~3 PRs/hour pace at peak.
4. **Main-session verification after every agent batch.** Run `validate_all.cjs <lang>-v2` + `pp63_audit.cjs --all` + `npm run build` before committing.
5. **Substitution gracefully when duplicates found.** Always provide fallback word lists in agent prompts; agent picks confirmed-missing ones.
6. **Quick inline fixes for validator regressions.** Korean PP64 (add lemma to match pair) and Spanish PP63 (rewrite 3 examples) fixed in <2 min main-session edits.

---

## What NOT to do (this-session learnings)

1. **Don't grep with `trg:"..."` alone for duplicates.** Use `type:"teach"[^}]*trg:"..."` to get only teach cards, not match pairs.
2. **Don't trust audit docs blindly.** They're 2026-04-19 snapshots. Each new PR closes some. Always grep current state before dispatching.
3. **Don't ignore omitted-line hits.** When grep shows `[Omitted long matching line]`, the match exists — read the line directly to see what's there.
4. **Don't dispatch >4 agents.** Rule B7 maximum holds. 4 agents = ~5-10 minutes; 5+ agents = chaos.
5. **Don't burn an agent on the same word twice.** When an agent reports 5 substitutions in a 10-word task, that target list was largely already-taught. Refocus the next batch on different vocab area.
6. **Don't skip the post-merge sync.** `git fetch origin main && git merge origin/main` after every PR merge keeps the local branch from drifting.

---

## Behavior rules for the next agent (continuation)

### Autonomous mode (default)

Same as prior handoff: never stall, ship aggressively. Execute → commit → PR → squash-merge → CI-watch → loop.

**Pause and ask only for:**
- Destructive actions (force push, hard reset)
- Structural refactors (LessonEngine.jsx split — needs dedicated planning)
- Sensitive content (political/cultural framings beyond obvious-factual)
- Workflow changes (rule changes)
- When user says "breather"

### Response style

- **Brief.** Cite numbers. "+24 cards merged." "PR #259 CI green."
- **Honest.** Flag drift. "Korean is ~50% sub rate now — A1 saturating." "Italian has 200+ accent issues still."
- **No emojis unless Jason uses them first.** Warm, not clinical.

### When Jason says "keep grinding" / "loop"

1. Sync: `git fetch origin main && git merge origin/main`
2. Pre-grep next gap candidates via `type:"teach"[^}]*trg:"..."` regex
3. If gap found in ≥1 language, dispatch ≤4 parallel agents (Sonnet)
4. Verify: `validate_all.cjs <lang>-v2` + `pp63_audit.cjs --all` + `npm run build`
5. Fix any inline regressions (PP8 hint leaks, PP63 example violations, PP64 lemma-match misses)
6. Commit with co-author line; push; gh pr create; gh pr merge --squash --auto; gh run watch
7. Loop until queue empty or ≥3 consecutive duplicate-heavy batches signal A1 saturation

### When Jason says "stalled?"

Reply in one sentence with what's running and expected next step. Don't over-explain.

### When Jason says "are you sure?"

Re-run `validate_all.cjs <lang>` + `npm run build` for the relevant language. Answer with concrete result. No hedging.

---

## What I'd do first in the next session

1. **Pull and verify clean state:**
   ```bash
   git checkout claude/bold-nobel-889ce9 (or new worktree branch)
   git fetch origin main && git merge origin/main
   npm install   # only first time per worktree
   npm run build   # confirm green
   ```
2. **Pick a target area** — handoff suggests:
   - **Easy wins**: more A2 deepening for the Romance languages (FR/ES/PT/IT). Each has ~40-60 specific A2 gaps remaining.
   - **Higher impact**: Russian and Chinese B1+B2 (currently 27-37% coverage). New languages need bulk content.
   - **Harder**: Italian accent restoration script. Risky but valuable.
3. **For each target area**: pre-grep the 10 candidate words; if ≥6 confirmed missing, dispatch 1 agent; if all done, refocus.
4. **Do not exceed 8 PRs per session.** Diminishing returns + CLAUDE.md context budget mean 4-8 batches is the productive window.
5. **Update this handoff doc at session end** with new totals + what worked + what's left.

---

## Critical gotchas (Windows + this repo) — unchanged from prior handoff

1. **CRLF line endings.** Source files use `\r\n`. Scripts using `node -e` need to handle.
2. **Bash on Windows.** Unix syntax: `/dev/null`, forward slashes.
3. **`npm install` per worktree.** First use of a fresh worktree fails on `ts-fsrs` until `npm install`.
4. **Agent self-report is insufficient.** Always run main-session `npm run build` after agent commits.
5. **`git diff --stat origin/main..HEAD`** is the authoritative "what am I shipping" check.
6. **`gh run watch <id> --exit-status`** is the canonical CI wait. CI takes 1-2 minutes.

---

## Validator commands cheat-sheet — unchanged

```bash
node scripts/validate_all.cjs <lang>-v2
node scripts/pp63_audit.cjs --all
node scripts/check_filler.cjs
npm run build
gh run list --limit 3
gh run watch <id> --exit-status
```

---

**Author:** Claude Opus 4.7 (1M context) — session 2026-04-20 (continuation, post-handoff-2026-04-20)
**Handoff target:** Next Claude agent session
**Status:** Green. Nothing blocking. Ready to continue.
