# Session Handoff — 2026-04-20d (autonomous + planning)

> **Read this first.** This is the complete handoff for the 2026-04-20 extended autonomous run. Supersedes 2026-04-20c and earlier.

---

## TL;DR

- **38 PRs shipped** today (#255–#292). All merged to `main`. All CI green.
- **+648 teach cards** added across all 10 languages. Grand total: **14,823**.
- **All 10 languages PASS every validator** — even with batch-file expansion (`--include-batch`). Italian has 1 non-critical PP64 flag (1/4228 = 0.024%); all others 0.
- **Italian accent restoration:** new `scripts/restore_italian_accents.cjs` shipped. ~805 stripped accents fixed across 208 batch files.
- **F11 Resolve Disputes (PP58):** closed for Portuguese + Chinese. DE/IT had vocabulary scattered, no dedicated lesson needed.
- **Diagnostic discovery (mid-session):** sub-agent Edits sometimes silently failed to persist when running 4 in parallel on long, multi-step workflows. Diagnosed with controlled tests — not a tool bug; appears to correlate with long agent sessions on Windows. Worked around by switching to inline main-session edits for the last ~12 PRs. **All work landed correctly.**

---

## Per-language teach card state

| Language | Cards | Status |
|---|---|---|
| German | 5,187 | GOLD STANDARD. All PP checks PASS. |
| Korean | 1,427 | TOPIK-aligned. All clean. |
| Dutch | 1,384 | NT2-aligned. All clean. |
| French | 1,212 | DELF-aligned. All clean. |
| Spanish | 1,398 | DELE/PCIC-aligned. All clean. |
| Italian | 970 | CILS-aligned. 1 non-critical PP64 flag in batch files (0.024%). |
| Japanese | 737 | JLPT-aligned, full PP65 kanji+furigana. All clean. |
| Chinese | 920 | HSK-aligned, hanzi+pinyin. All clean. |
| Portuguese | 851 | CELPE-Bras-aligned. All clean. |
| Russian | 737 | TRKI-aligned. All clean. |
| **Total** | **14,823** | (was 14,175 at session start — **+648 this run**) |

Validator command for full check (PP8/PP43/PP48/PP63/PP64/PP66/PP67):
```bash
for L in german korean dutch french spanish italian japanese chinese portuguese russian; do
  node scripts/validate_all.cjs $L-v2 --include-batch
done
node scripts/pp63_audit.cjs --all
node scripts/check_filler.cjs
npm run build
```

---

## What shipped this session (chronological)

### Phase 1: PP55 vocabulary closures (#255–#270, parallel-agent era)
14 thematic PP55 closures across all 10 languages. Patterns: A1 essentials → rooms/clothing/food → jobs/animals/sports → B1 civic → C1 academic. ~+460 teach cards.

### Phase 2: Inline content writing (#271–#284, after agent reliability degraded)
12 inline-from-main-session PRs covering A1-B2 vocab gaps. ~+95 teach cards.

### Phase 3: Polish + diagnosis (#285–#292)
- #285: docs reconcile (+0)
- #286: Italian accent restoration phase 1 (script + 667 fixes across 208 batch files)
- #287: Italian accent phase 2 (pero + è phrases, +65 fixes)
- #288: PP58 F11 Resolve Disputes for PT + ZH (+14 cards)
- #289: Italian accent phase 3 (qual è, c'è, dov'è, com'è, +73 fixes)
- #290: PP64 lemma-match gaps closed for DE (5) + KO (2) — added match pairs with dictionary forms
- #291: Italian PP67 batch fix (1 production quiz → 2)
- #292: CLAUDE.md totals reconcile

---

## Diagnostic note: sub-agent Edit reliability

**Observation:** Mid-session, when dispatching 4 sub-agents in parallel for long content tasks (read file, multiple Edits, run validators, fix PP63 violations), some agents reported success but their Edits did not appear on disk. Pattern: 50% reliability for parallel agents with 30+ tool uses; 100% for short single-Edit agents.

**Diagnosis:** I ran a controlled test (4 parallel agents, each doing 1 Read + 1 Edit + 1 grep on a different file). All 4 Edits persisted correctly. So the Edit tool is not broken.

**Working hypothesis:** long, complex multi-tool agent sessions sometimes have writes that don't flush before the agent returns. Could be Windows filesystem timing, sub-agent sandboxing, or tool-call buffer issues. Not deterministic.

**Practical workaround for next session:**
- Short single-purpose sub-agent prompts (1 lesson, ≤15 tool uses) work reliably.
- For complex multi-step content work, write inline from main session (slower but 100% reliable).
- Always verify with `git diff --stat` after agent batch — if expected files don't show changes, retry or write inline.

**This is captured in CLAUDE.md Rule B21 already.** Don't trust agent self-reports.

---

## Code organization assessment (planning conversation result)

Discussed with owner this session. Documented findings:

### Three real concerns, ranked

**A. `LessonEngine.jsx` at 4,165 lines** — biggest structural risk
- Contains 4 teach-card renderers that must stay in sync (PP30)
- Plus quiz renderers, WordBubble, MiniWordPopup, GrammarColorPicker, lesson flow state
- Planned split in CLAUDE.md "Refactoring Roadmap" — needs dedicated session with regression testing
- Owner-pause: structural refactor

**B. Data format dual-life (`nl`/`en` legacy + `trg`/`src` current)** — medium
- `_normStep()` in utils.js does runtime translation
- Cost is comprehension, not performance
- Recommendation: one-shot migration script, then drop `_normStep` and 1 of 4 LessonEngine renderers
- Should precede LessonEngine split

**C. `_temp_*.js` and `_batch*.js` files** — low priority
- Italian: 252 batch files. Korean similar.
- Confusing directory tree, but byproduct of agent workflow (smaller files = better agent context)
- Don't refactor unless moving away from agent-driven content authoring

### Korean V2 ↔ V1 aesthetic preservation

- Same KOREAN SEED REGISTRY header preserved (V1 → V2)
- Same train-metaphor stem/ending pedagogy
- 1187/1187 V1 teach items covered in V2 (per `check_v1_salvage_smart.cjs`)
- 2 manual gap fills (감동하다, 혼란스럽다)
- **Open question:** tip voice, funFact richness, cultural depth may have drifted in V2 lessons written by agents. Worth a sample audit (10 random lessons) to spot-check.

---

## Next-session priorities (in suggested order)

### Short, owner-decision-free items

1. **Korean V2 voice audit** (1 session) — sample 10 random Korean V2 lessons, compare tip personality + funFact richness to V1 (in `.claude/archive/v1-legacy/units-korean.js` via `git show`). Flag any that feel mechanical. Small targeted PRs to restore voice.

2. **More Italian accent patterns** — current script catches ~805 fixes. Run `grep -n "\b(suppone\|abbiamo gia\|...)\b" src/data/italian-v2/_batch*.js` to find more candidates. Low risk because patterns are unambiguous (e.g., `e' ` is a misused apostrophe-replacement that should be `è`).

3. **Bounded retries on 1-PP64-flag** — Italian batch files have 1 untested teach card. Locate via `node scripts/_find_pp64_v2.cjs italian-v2` (script exists, may have false positives — cross-check with validator output). Add 1 match pair to fix.

### Medium items (need planning, not approval)

4. **Dialogue scaling for Italian (138) + Japanese (28)** — extend 2-turn dialogues to 3+ turns. Owner expressed mild preference for "Option B: natural elaboration" over generic closers. Feasible to do in batches of 30-50 with strict PP63 verification per batch.

5. **`nl/en` → `trg/src` mass migration** — write `scripts/migrate_legacy_fields.cjs`. Convert all data files. Drop `_normStep()` from utils.js. Verify all renderers still work. One clean-sheet PR. **Unblocks LessonEngine simplification.**

### Owner-decision items (do not touch without input)

6. **LessonEngine.jsx split** — needs structural planning + browser-based regression testing across all 4 teach renderers, all quiz types, all step types. Don't start without an explicit go.

7. **Premium visual overhaul, mobile shell, art direction, pricing** — all owner decisions per past handoffs.

### STOPS-ON (waiting on owner credentials/decisions)

- Supabase credentials (backend persistence for SRS, progress, auth)
- Google Cloud TTS credentials (per-example audio)
- Midjourney/Stable Diffusion (Verumius story art)
- Mobile app shell decision (PWA vs native)

---

## What's still on `claude/sad-cohen-32e111` (unmerged)

Per prior handoffs, 8 feature commits remain on that branch awaiting PR:
- SRS wired into LessonEngine (ts-fsrs)
- Verb table forms clickable + POS-colored
- Dutch grammar production-quality rewrite
- Verumius A1 story arcs for Spanish
- Cognate Hub tip cards (5 languages)
- Lesson celebration screen + streak
- Placement quiz integration
- Supabase backend recommendation doc

These are built and tested but not yet on main. Probably worth a PR review session at some point — they're substantial features.

---

## Behavior rules unchanged from prior handoffs

- **Autonomous default.** Don't pause for approval on content additions, validator fixes, doc updates, commits/PRs/squash-merges/CI watches.
- **Pause for:** destructive ops (force push, hard reset), structural refactors (LessonEngine split), sensitive content, workflow changes, owner says "breather".
- **Brief responses.** Numbers > paragraphs. "X PRs shipped." "+Y cards." "All clean."
- **Always run `npm run build` after each commit**, before push. Catches parse errors agents miss.
- **Always `gh run watch <id> --exit-status`** after merge. Don't declare done until CI green.
- **Inline-edit fallback:** if 4-agent parallel dispatch loses changes, switch to single-agent or main-session inline. Validator + build + git diff are the verification gate.

---

## Session-start checklist for the next agent

```bash
# 1. Confirm clean state
git checkout main
git pull
npm install   # only if first use of this worktree
npm run build   # should be clean

# 2. Verify all validators
for L in german korean dutch french spanish italian japanese chinese portuguese russian; do
  node scripts/validate_all.cjs $L-v2 --include-batch | grep RESULT
done
node scripts/pp63_audit.cjs --all
node scripts/check_filler.cjs

# 3. Read this handoff + CLAUDE.md "Next Priorities"

# 4. If no specific direction:
#    - Pick item 1 (Korean voice audit) or item 2 (more Italian accents) — both quick wins
#    - Or wait for owner direction
```

---

## Critical gotchas (Windows + this repo) — unchanged

1. **CRLF line endings.** Source files use `\r\n`. Be careful with `sed` / `node -e` scripts.
2. **Bash on Windows.** Unix syntax: `/dev/null`, forward slashes.
3. **`npm install` per worktree.** First use of fresh worktree fails on `ts-fsrs` until `npm install`.
4. **Agent self-report unreliable for long sessions.** Always run main-session `npm run build` + `git diff --stat` after agent commits.
5. **`git diff --stat origin/main..HEAD`** is the authoritative "what am I shipping" check.
6. **`gh run watch <id> --exit-status`** — wait on CI before next batch.

---

## Session totals (cumulative across 2026-04-20)

| Metric | Start | End | Delta |
|---|---|---|---|
| Total teach cards | 14,175 | 14,823 | **+648** |
| PRs shipped | (prior baseline) | 38 | #255–#292 |
| Languages 100% clean | 10 | 10 | maintained |
| New scripts shipped | — | 3 | `restore_italian_accents.cjs`, `_find_pp64_gaps.cjs`, `_find_pp64_v2.cjs` |
| Italian batch-file accent fixes | (many stripped) | 805 restored | net cleanliness |
| New PP58 functions closed | F14/F15/F17/F8/F22/F21/F11 (partial) | + F11 PT/ZH | F11 effectively 8/10 |

---

**Author:** Claude Opus 4.7 (1M context) — session 2026-04-20 (extended autonomous + planning)
**Status:** Green. All validators clean. Working tree clean on `claude/bold-nobel-889ce9`.
**Next session:** see "Next-session priorities" above. Korean voice audit or more Italian accents are good warm-ups.
