# Autonomous Queue

> Source of truth for "what to do next" in an autonomous session. Agents pop the top item, execute it, commit + push + watch CI, mark it DONE, and proceed. Queue empty = autonomy stops cleanly.
>
> Rules: see `CLAUDE.md` Rule H (Autonomy Protocol).
> Blocked items move to `docs/BLOCKED.md`.
> Regenerate with: `node scripts/generate_queue.cjs` (when that script exists).

## Format

Each item has:

- **id**: stable identifier, e.g. `PP63-AUDIT-001`
- **priority**: P0 (emergency) / P1 (high) / P2 (medium) / P3 (low)
- **description**: what to do, one paragraph
- **preconditions**: files must exist, no active agent on target files
- **acceptance-criteria**: validator or build output that says "done"
- **STOPS-ON**: optional — external blocker (API credentials, owner decision, art asset)

---

## P0 — Safety / regression

_None currently._

## P1 — Pedagogical completeness (mechanical, no external blockers)

### PP63-AUDIT-001 — DONE 2026-04-19 (previous session)
- Per-language baselines committed under `docs/audits/pp63_baseline_<lang>-v2.md`.

### PP63-REMEDIATION-PORTUGUESE — 103 untraced cards remain (was 147)
- **progress:** Units 1-3 + 7/8/10 cleared this session (44 cards).
- **remaining:** units 9, 11-36. Unit 9 has 9 flags mostly inflectional
  (dói/sente/verdes) — consider improving `pp63_audit.cjs` to handle
  Portuguese verb stems (-ar/-er/-ir truncation) before rewriting.
- **acceptance:** 0 flags for portuguese-v2 via `node scripts/pp63_audit.cjs portuguese-v2`.

### PP63-AUDIT-IMPROVEMENT — Add Portuguese/Spanish/Italian/French morphology
- **context:** Current pp63_audit uses substring matching only. Verb conjugations
  (sentir → sente, doer → dói) and plurals (café → cafés) aren't transparent
  to the check even though they ARE transparent to learners.
- **proposal:** Add a per-language `stem(word, langCode)` helper that strips
  -r infinitive endings, -s/-es plurals, and common verb endings before
  comparing. Keep conservative — over-stripping causes false negatives.
- **acceptance:** Portuguese baseline drops from 103 → <60 without any
  content edit; Spanish/Italian/French baselines drop proportionally.

### FILLER-CLEANUP-001 — Replace all `src:"(review)"` match-pair filler with the teach card's real translation
- **preconditions:** `scripts/cleanup_review_fillers.cjs` exists.
- **acceptance:** `grep -rE '"\(review\)"' src/data/` returns zero. Validator still reports PP64 = 0 across all 10 languages. Build passes.

### COGNATE-CORPUS-001 — Build cognate corpus for English→Spanish
- **preconditions:** owner-approved cognate list (starts with Wiktionary Latinate cross-section, ~200 words).
- **acceptance:** `src/data/cognates/es.js` exists with cognate map; A1 Unit 1 "Cognate Hub" lesson created referring to the map.

### COGNATE-CORPUS-002 — Build cognate corpus for English→French
- Same pattern as 001 for French.

### COGNATE-CORPUS-003 — Build cognate corpus for English→Italian

### COGNATE-CORPUS-004 — Build cognate corpus for English→Portuguese

### COGNATE-CORPUS-005 — Build cognate corpus for English→German (narrower — Latinate + Germanic cognates)

## P1 — Infrastructure for autonomy

### ~~PP67-VALIDATOR~~ — DONE 2026-04-19 (see `docs/audits/pp67_baseline_2026-04-19.md`)
- Production-mode check implemented in `scripts/validate_all.cjs`.
- Baseline: 243 unit-file violations across 7 languages. 4 langs PASS (Dutch/German/Korean/Spanish).
- Remediation queued as PP67-REMEDIATION-\* below.

### PP67-REMEDIATION-CHINESE — fix `chinese-v2/unit-41.js` (needs 3+ production, has 2)
- **acceptance:** validator reports 0 PP67 flags for chinese-v2.

### PP67-REMEDIATION-PORTUGUESE — fix `portuguese-v2/unit-09/22/23.js` (3 units, low teach counts)
- **acceptance:** 0 PP67 flags for portuguese-v2.

### PP67-REMEDIATION-RUSSIAN — fix russian-v2/unit-08/17/18/19/20/22/24/29/35.js (9 units)
- **acceptance:** 0 PP67 flags for russian-v2.

### PP67-REMEDIATION-FRENCH — fix french-v2/unit-02/11/12/14/26.js (5 units, some with 0 production)
- **acceptance:** 0 PP67 flags for french-v2.

### PP67-REMEDIATION-ITALIAN — large (104 flagged batch files); requires batch-file rewrites
- **acceptance:** under-production count reduced by 50% in first pass; full clear in second pass.

### PP67-REMEDIATION-JAPANESE — large (121 flagged batch files); PP65 kanji+furigana rules apply
- **acceptance:** same ramp as Italian.

### PP66-VALIDATOR — Implement filler-coverage check in `scripts/check_filler.cjs`
- **acceptance:** Grep for `"(review)"`, `"(taught)"`, `"(TBD)"`, `"(see above)"` in all `src/data/*.js`. Zero matches required. Runs as pre-commit / pre-push hook.

### ~~QUEUE-GENERATOR~~ — DONE 2026-04-19
- `scripts/generate_queue.cjs` writes `docs/audits/queue_snapshot_<date>.md`.
- Snapshot format: per-language summary table + prioritized derived items (P0 safety, P1/P2 by severity).
- Does NOT overwrite this file — intentionally safe. Re-run: `node scripts/generate_queue.cjs`.

## P2 — Product features (requires UI work)

### PLACEMENT-QUIZ — Ceiling-test placement quiz with forgiveness algorithm
- **acceptance:** React component with algorithm: 5 baseline per sub-level, 3/5 pass, 2 reinforcement questions per wrong, reinforcement-recovery resets streak, 5-wrong safety valve terminates. Integrated into onboarding flow optionally.

### SRS-LESSON-INTEGRATION — Wire ts-fsrs into LessonEngine
- **acceptance:** Missed quiz items call `fsrs.update(grade: Again)`. Correct items call `fsrs.update(grade: Good/Easy)`. `DailyReview` mode exists surfacing due-today cards. Existing Flashcards page still works.
- **risk:** LessonEngine.jsx is ~4,000 lines. High surface area.

### CAN-DO-MILESTONES — Surface CEFR can-do statements in profile page
- **acceptance:** For each language the user studies, show a checklist of can-do statements per CEFR sub-level with progress indicators tied to units completed.

## P2 — Content expansion (dual-linguist gated)

### VERUMIUS-STORY-SPANISH — Port Verumius story framework to Spanish
- **acceptance:** A1 story-mode dialogues exist for the first 6 units with 2-bubble format. Text only; art follows separately.
- **flow:** Author-agent (Opus) writes; Validator A (grammar/accuracy) + Validator B (register/idiomaticity) cross-read per Rule G.

### VERUMIUS-STORY-JAPANESE — Port Verumius to Japanese
- Same pattern with kanji+furigana per PP65.

## P3 — Audit catch-up

### PP55-AUDIT — Score each language against its official exam vocab list
- **acceptance:** For each language, a report of missing/covered words against the relevant exam wordlist (Goethe A1/A2/B1/B2 for German, etc.). Only German currently audited.

### PP57-AUDIT — Grammar construct completeness per language
- Same pattern as PP55 for grammar inventories.

### PP58-AUDIT — CEFR communicative function coverage
- Only German currently audited.

## P3 — Feature polish (deferred)

### VERB-TABLES-CLICKABLE — `verb_table` forms don't use `universalHl()`; no click-to-see, no POS colors
### IDIOMS-PAGE-SEARCH — 45 entries with no filter/search
### GERMAN-FOUNDATIONS-CONTENT — "Coming soon" placeholder
### LESSON-TRANSITIONS — Completion celebrations still TODO

---

## STOPS-ON items (external dependencies)

### TTS-V1 — ship per-example audio for German + Spanish
- **STOPS-ON:** needs Google Cloud TTS credentials (provisioned in Cloud Console, env var `GCP_TTS_KEY` in GitHub Actions secrets).

### NATIVE-AUDIO-CONTRACTORS — 40-hour contractor recording per language
- **STOPS-ON:** needs owner budget decision.

### VERUMIUS-ART-SPANISH — illustrator for A1 Spanish scenes
- **STOPS-ON:** needs Midjourney / Stable Diffusion asset generation decision and delivery.

### MOBILE-APP-SHELL — iOS / Android wrapper
- **STOPS-ON:** needs owner decision on native-shell vs PWA.

---

## Done this session (2026-04-19)

- V1 salvage COMPLETE — 43 gaps filled, all V1 files archived, 7 MB bundle shrink (PR #183, #184)
- PP8/PP43/PP48 cleared across 4 languages with validator upgrade (PR #185)
- Korean 729 PP8 hint leaks cleared via agent swarms (PR #186)
- PP64 teach-then-test cleared across all 10 languages (4,203 → 0) (PR #187)
- Rules PP66/67/68, Rule B15/16/17, Rule C11/12, Rule E4, Rule G, Rule H added to CLAUDE.md
- Core Principles 14–18 added
- Autonomy infrastructure docs created

## Done this session (sad-cohen-32e111, 2026-04-19 late)

- PP67 production-mode validator implemented in `scripts/validate_all.cjs` + baseline captured (PR #189)
  - 4 langs PASS: Dutch, German, Korean, Spanish
  - Remaining: 243 unit-level flags across 7 languages
- `scripts/generate_queue.cjs` + first snapshot at `docs/audits/queue_snapshot_<date>.md` (PR #190)
- PP63 Portuguese remediation: 44 cards cleared across units 1-3 and 7/8/10 (147 → 103) (PR #191, #192)
  - Dual-linguist Rule G validation applied (Sonnet Brazilian-Portuguese linguist agent cross-read unit-01)
  - Rewrites use only taught vocabulary + function words + proper nouns
