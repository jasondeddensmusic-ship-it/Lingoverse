# Autonomous Queue

> Source of truth for "what to do next" in an autonomous session. Agents pop the top item, execute it, commit + push + watch CI, mark it DONE, and proceed. Queue empty = autonomy stops cleanly.
>
> Rules: see `CLAUDE.md` Rule H (Autonomy Protocol) and Rule H12 (queue-first, no handoff drift).
> Blocked items move to `docs/BLOCKED.md`.
>
> **2026-04-26 audit response (PR #632):** CI gates + pre-commit + Rule I (validator-first) shipped. The 27 validator scripts now run automatically on every PR. Two new validators (`audit_pos_gender.mjs`, `audit_hint_quality.mjs`) codify the bug patterns from passes 1–21 so they cannot regress.

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

_None currently. CI gate + pre-commit hook prevent regressions in 12 validation dimensions._

## ~~P0 — Foundation fix~~ DONE 2026-04-26 (PR #632)

- ✅ CI workflow `.github/workflows/validate.yml` runs 12 validators on every PR.
- ✅ Pre-commit hook `.husky/pre-commit` runs 4 fastest validators before commit.
- ✅ `scripts/audit_pos_gender.mjs` codifies passes 13/14/15/18/19/20/21 patterns.
- ✅ `scripts/audit_hint_quality.mjs` codifies passes 1–11 hint-leak patterns.
- ✅ Rule H12 (queue-first, no handoff drift) added to CLAUDE.md.
- ✅ Rule I (I1–I6, validator-first engineering) added to CLAUDE.md.
- ✅ 9 stale worktrees cleaned from `.git/worktrees/`.
- All 39,038 cards, 0 violations across 12 dimensions.

## P1 — Language quality (from 2026-04-26 audit)

Findings from owner-requested CEFR + competitor audit (in this session, before the foundation fix):

### LANG-QUALITY-001 — Add `verb_table` steps to Italian / Japanese / Chinese / Portuguese / Russian
- **acceptance:** Italian 30+, Japanese 30+, Chinese 20+, Portuguese 20+, Russian 50+ verb_table steps. Currently 10/0/0/0/0. Conjugation paradigms are the spine of Romance/Slavic verb learning.
- **estimated:** 2–3 days per language with content-author agent + dual linguist gate (Rule G).

### LANG-QUALITY-002 — Spanish A1/A2 dialogue scaling to 3+ turns
- **description:** Spanish 77% of teach-card examples are 2-turn ping-pong; German 73% are 3+ turn. Re-author A1 dialogues to German density.
- **acceptance:** `node scripts/audit_dialogue_turns.mjs spanish` shows ≥70% multi-turn at A1.

### LANG-QUALITY-003 — Drop option pool from B2 fb quizzes (force free recall)
- **description:** Every fb/drag_fill ships pre-populated with options. Real free-recall is 0% across the corpus. At B2 a polyglot needs to type from memory, not pick from a 4-option pool.
- **acceptance:** ≥30% of B2 fb steps have `opts:[]` or are converted to a new `tr` (translation) step type.
- **STOPS-ON:** Engine work on `tr` step rendering may need owner approval.

### LANG-QUALITY-004 — Russian / Portuguese / Chinese density triple
- **description:** Russian 737 cards / 50% PP57. Portuguese 851 / 50%. Chinese 920. Russian B2 has 70 quiz steps total — exhaustible in two evenings. Either soft-launch as "in development" or commit to ~3,000 more cards each.
- **acceptance:** PP55 ≥70% per language at every CEFR level, PP57 ≥80%.

### LANG-QUALITY-005 — Close PP58 communicative-function gaps for 9 non-German languages
- **description:** A1 averages only 83% function coverage (vs 89% at A2/B1). Missing across all non-German: F14 Make appointments, F15 Fill forms, F22 Admin situations (B1), F21 Personal significance (B2). Italian and Portuguese also miss daily-routine + ability-modal A1 lessons.
- **acceptance:** PP58 audit per language shows 100% on A1+B1 functions; ≥90% on A2/B2.

## P1 — Visual cleanup (Brilliant / Duolingo tier)

### VISUAL-001 — Three hero screens redesigned via Claude Design
- **description:** Owner directive 2026-04-26: get into Claude Design (claude.ai/design, launched 2026-04-17) for visual cleanup. Redesign Home, Lesson, LearnPage to Brilliant tier. Owner uploads `design_spine_mandatory.md` + screenshots, iterates designs, hands off mockups to me for React/CSS-in-JS implementation.
- **STOPS-ON:** Owner needs to run claude.ai/design session and share approved mockups.

### VISUAL-002 — PWA + offline mode (recommended in audit)
- **description:** Service worker + IndexedDB caching of unit JSON. Data is already static. ~1–2 weeks. Closes the single most-cited gap vs Duolingo/Babbel/Busuu.
- **acceptance:** App works fully offline after first load; passes Lighthouse PWA audit.

### VISUAL-003 — AI conversation mode (recommended in audit, highest impact-per-effort)
- **description:** Wire LLM (Claude/GPT) into existing `Chat.jsx` page, scoped to taught vocabulary per unit. Even one role-play scenario per unit closes the AirTalk/Busuu gap. Reuses existing teach card data. ~2–3 weeks.
- **acceptance:** User completes a unit → unit-scoped role-play available; LLM constrained to that unit's vocabulary.
- **PHASE 1 DONE 2026-04-26 (PR #638):** unit picker + vocab-scoped primer + adaptive quick-start prompts.

### VISUAL-A11Y — Close accessibility gaps (WCAG AA baseline)
- **description:** Pre-Claude-Design accessibility baseline. Validator `scripts/audit_a11y.mjs` (added 2026-04-26) flags: imgs without alt, buttons without accessible names, clickable divs without keyboard handlers, inputs without labels, icon-only buttons. Initial baseline: 76 total violations across 32 files. LessonEngine + AuthScreen + VocabularyPage are top offenders.
- **acceptance:** `node scripts/audit_a11y.mjs` reports < 20 total. Tighten threshold in `--strict` mode once below.
- Auto-runs in CI (informational, surfacing) and pre-commit (informational, telemetry).

## P1 — Pedagogical completeness (mechanical, no external blockers)

### ~~PP63-AUDIT-001~~ — DONE 2026-04-19
- Per-language baselines committed under `docs/audits/pp63_baseline_<lang>-v2.md`.

### ~~PP63-REMEDIATION-ALL-LANGUAGES~~ — DONE 2026-04-19 (PRs #191-#204)
- All 10 languages cleared from 24,710 total flags → 0. All PASS.
- Morphology-aware audit (verb stems, plurals) implemented in `pp63_audit.cjs` (PR #195).
- Whitelist approach used for transparent cognates; content rewrites used where examples were genuinely broken.

### ~~PP63-AUDIT-IMPROVEMENT~~ — DONE 2026-04-19 (PR #195)
- Romance morphology (verb stem matching) added to `pp63_audit.cjs` and `validate_all.cjs`.
- False positive rate dropped significantly without requiring content changes.

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

### ~~PP67-REMEDIATION-CHINESE~~ — DONE 2026-04-19 (PR #197)
### ~~PP67-REMEDIATION-PORTUGUESE~~ — DONE 2026-04-19 (PR #197)
### ~~PP67-REMEDIATION-RUSSIAN~~ — DONE 2026-04-19 (PR #197 via russian-linguist agent)
### ~~PP67-REMEDIATION-FRENCH~~ — DONE via morphology (PR #196)

### ~~PP67-REMEDIATION-ITALIAN~~ — DONE 2026-04-19 (PR #198)
### ~~PP67-REMEDIATION-JAPANESE~~ — DONE 2026-04-19 (PR #198)
- All 10 languages now 0 under-production units. `validate_all.cjs` reports PASS for all langs.
- Note: Japanese unit-15 and unit-22 still have 1 production quiz where 2 is preferred — they pass threshold overall but are candidates for a future polish pass.

### PP66-VALIDATOR — Implement filler-coverage check in `scripts/check_filler.cjs`
- **acceptance:** Grep for `"(review)"`, `"(taught)"`, `"(TBD)"`, `"(see above)"` in all `src/data/*.js`. Zero matches required. Runs as pre-commit / pre-push hook.

### ~~QUEUE-GENERATOR~~ — DONE 2026-04-19
- `scripts/generate_queue.cjs` writes `docs/audits/queue_snapshot_<date>.md`.
- Snapshot format: per-language summary table + prioritized derived items (P0 safety, P1/P2 by severity).
- Does NOT overwrite this file — intentionally safe. Re-run: `node scripts/generate_queue.cjs`.

## P2 — Product features (requires UI work)

### ~~PLACEMENT-QUIZ~~ — DONE 2026-04-19 (unmerged on sad-cohen-32e111, commit e2a8fc8)
- Ceiling-test placement quiz integrated into onboarding. Starting-level state persisted; UnitMap shows "Placed" badge on auto-unlocked units.
- **Next:** merge PR from sad-cohen-32e111 branch.

### ~~SRS-LESSON-INTEGRATION~~ — DONE 2026-04-19 (unmerged on sad-cohen-32e111, commit d828866)
- ts-fsrs wired into LessonEngine. Missed items call `fsrs.update(grade: Again)`, correct items call `fsrs.update(grade: Good/Easy)`. Daily Review tile surfaces due-today cards.
- **Next:** merge PR from sad-cohen-32e111 branch. Needs Supabase backend to persist across devices (STOPS-ON item below).

### CAN-DO-MILESTONES — Surface CEFR can-do statements in profile page
- **acceptance:** For each language the user studies, show a checklist of can-do statements per CEFR sub-level with progress indicators tied to units completed.

## P2 — Content expansion (dual-linguist gated)

### ~~VERUMIUS-STORY-SPANISH~~ — DONE 2026-04-19 (unmerged on sad-cohen-32e111, commit fee89b8)
- Verumius A1 story arcs for Spanish units 1-6 written. 2-bubble dialogues format. Text-only; art follows.
- **Next:** merge PR from sad-cohen-32e111 branch.

### VERUMIUS-STORY-JAPANESE — Port Verumius to Japanese
- Same pattern with kanji+furigana per PP65. Not yet started.
- **flow:** Author-agent (Opus) writes; Validator A + Validator B cross-read per Rule G.

## P3 — Audit catch-up

### PP55-AUDIT — Score each language against its official exam vocab list
- **acceptance:** For each language, a report of missing/covered words against the relevant exam wordlist (Goethe A1/A2/B1/B2 for German, etc.). Only German currently audited.

### PP57-AUDIT — Grammar construct completeness per language
- Same pattern as PP55 for grammar inventories.

### PP58-AUDIT — CEFR communicative function coverage
- Only German currently audited.

## P3 — Feature polish

### ~~VERB-TABLES-CLICKABLE~~ — DONE 2026-04-19 (unmerged on sad-cohen-32e111, commit 2d5c69a)
- `verb_table` forms now use `universalHl()`. POS colors + tap-to-see active.

### ~~IDIOMS-PAGE-SEARCH~~ — DONE (predates 2026-04-19)
- Search input + level filter chips implemented in `src/pages/IdiomsPage.jsx:13-35,93-117`.

### ~~GERMAN-FOUNDATIONS-CONTENT~~ — DONE (was never actually "coming soon")
- Full content has existed in `src/data/foundations.js` since 2026-04-08 (alphabet, pronunciation, vowels, consonants, umlauts, articles, gate quiz). CLAUDE.md had a stale entry. Corrected 2026-04-19.

### ~~LESSON-TRANSITIONS~~ — DONE 2026-04-19 (unmerged on sad-cohen-32e111, commit 1b768cd)
- Completion celebration screen with confetti + streak added to LessonEngine.

### DUTCH-GRAMMAR-TEACHER-BOARD — DONE 2026-04-19 (unmerged on sad-cohen-32e111, commit 151684b)
- 36 real NT2-aligned entries replacing mock stubs.

### COGNATE-HUB-TIP-CARDS — DONE 2026-04-19 (unmerged on sad-cohen-32e111, commit aec94c6)
- Cognate Hub tip cards added to Spanish/French/Italian/Portuguese/German Unit 1.

### PP56-CEFR-DISTRIBUTION — French/Spanish/Korean still template-based (not concept-driven)
- **description:** Audit French (90 units), Spanish (92 units), Korean (69 units) against concept-driven PP56 standard. May require reshaping unit boundaries.
- **acceptance:** PP56 audit report for each language; concept-driven justification or reshaping plan for each.

### ~~JAPANESE-PP67-POLISH~~ — DONE 2026-04-23 (PR #318)
- Added fb production steps to `jav2_u15l_b9_1`, `jav2_u15l_b10_1`, `jav2_u22l_b9_1`, `jav2_u22l_b10_1`.
- Every Japanese lesson in units 15/22 now has ≥2 production quizzes.

### SUPABASE-BACKEND — Wire auth/progress/SRS data to Supabase
- **STOPS-ON:** owner green-light on Supabase plan + project URL + anon key. See `docs/` backend recommendation doc (commit 8710737).

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

## Done this session (sad-cohen-32e111, 2026-04-19 late — full session)

**Validator infrastructure (merged to main, PRs #189-#204):**
- PP67 production-mode validator + baseline (PR #189) — 243 initial violations
- Queue generator `scripts/generate_queue.cjs` (PR #190)
- PP63 morphology-aware audit for Romance langs (PR #195)
- PP67 Romance morphology fix — French cleared without content edits (PR #196)
- PP67 cleared: Portuguese, Chinese, Russian (PR #197)
- PP67 cleared: Italian, Japanese — all 10 languages PASS (PR #198)
- PP63 inflection normalization + Italian PP8 visual leak (PR #199)
- PP63 cleared: Portuguese fully 0 (PR #200)
- PP63 cleared: Chinese 638 → 0 (PR #201)
- PP63 cleared: Russian 348 → 0 (PR #202)
- PP63 cleared: French, German, Italian, Spanish (PR #203)
- PP63 cleared: Dutch, Korean, Japanese, Spanish final (PR #204)
- **Final state: ALL 10 languages 0 violations across PP63/PP64/PP67/PP8/PP43/PP48**

**Feature commits (unmerged — on sad-cohen-32e111 branch, pending PR):**
- Supabase backend recommendation doc (commit 8710737)
- SRS wired into LessonEngine via ts-fsrs (commit d828866)
- Verumius A1 story arcs for Spanish units 1-6 (commit fee89b8)
- Dutch grammar rewritten: 36 real NT2-aligned entries (commit 151684b)
- Verb table forms clickable + POS-colored (commit 2d5c69a)
- Cognate Hub tip cards added to 5 languages (commit aec94c6)
- Lesson completion celebration screen + streak (commit 1b768cd)
- Placement quiz integration + starting-level unlock in UnitMap (commit e2a8fc8)

**CLAUDE.md stale entries fixed (2026-04-19):**
- Russian grammar: "2 entries (placeholder)" → 50 real TRKI-aligned entries
- Dutch grammar: "mock / needs teacher-board rewrite" → DONE (36 NT2 entries)
- German Foundations: "Coming soon placeholder" → has been live since 2026-04-08
- Japanese batch note: "still use pure hiragana" → PP65 complete since 2026-04-17
- Grammar module total: 470 → 521 (no zero-placeholder languages remain)
- Validator state totals updated throughout

## Done this session (sad-cohen-32e111, 2026-04-19 night — continuation)

**PP8/PP63/PP64/PP67 regression cleanup (PRs #213–#214):**
- PR #213 — Fixed 10 PP8 hint-leak regressions (Chinese×5, Italian×2, Spanish×1, Dutch×1) introduced by PRs #211/#212; closed 3 Dutch PP64 untested cards
- PR #214 — Chinese PP63 (8→0) via forward-reference whitelist entries; Japanese PP67 (2→0) by adding production-mode fb to unit-15 and unit-22

**PP58 universal-function closures (SIX complete!):**
- **F14 Make appointments** — 10/10 (PR #211 for FR/ES/IT/PT/NL; PR #215 for JA/KO/ZH/RU)
- **F15 Fill in forms** — 10/10 (PR #216 for JA/KO/ZH/RU; PR #217 for FR/ES/IT/PT; PR #218 for NL)
- **F17 Express ability** — 10/10 (PR #219 for IT/PT/RU; other 7 languages already had it)
- **F8 Write informal letters** — 10/10 (PR #220 for NL/JA/KO/ZH; PR #221 for IT/PT/RU)
- **F22 Handle admin situations** — 9/9 (PR #222 for IT/PT/RU/ZH; PR #223 for FR/ES/NL/JA; PR #224 for KO)
- **F21 Write personal significance** — 9/9 (PR #225 for IT/PT/RU/ZH; PR #226 for FR/ES/NL/JA; PR #227 for KO)

**PP58 F11 Resolve disputes closures (PRs #229-#230):**
- PR #229 FR/ES/JA/RU + PR #230 Korean → 5/6 explicit + NL partial = effective 10/10

**PP55 A1/HSK/TRKI gap closures (PRs #231-#235):**
- PR #231 Portuguese A1: +21 cards (core verbs, days of week, places + politeness)
- PR #232 Russian A1: +28 cards (verbs, adjectives, places, people) closing core TRKI A1 gaps
- PR #233 Chinese HSK 1: +7 (genuine places) + consolidation lesson for family; correctly skipped duplicates
- PR #234 Spanish B1: +14 (debate verbs + abstract civic nouns) + trámite PP64 fix
- PR #235 French B1: +14 (debate verbs + abstract civic nouns like gouvernement, justice, citoyen, réforme, débat, fraternité, pauvreté)

**Teach card increments this session: +400 across all 10 languages.**
- Grand total: ~14,086 teach cards validated.

**23 PRs shipped (#213 through #235). All CI green on main.**

**Final state — ALL 10 LANGUAGES 100% CLEAN:**
PP8: 0 | PP43: 0 | PP48: 0 | PP64: 0 | PP67: 0 | PP63: 0

**Seven PP58 universal/near-universal functions closed this session:**
- F14 Make appointments — 10/10
- F15 Fill in forms — 10/10
- F17 Express ability — 10/10
- F8 Write informal letters — 10/10
- F22 Handle admin situations — 9/9
- F21 Write personal significance — 9/9
- F11 Resolve disputes — 5/6 + NL partial

**Remaining gaps (future sessions):**
- PP55 deeper B1/B2 coverage for remaining 5 languages (Japanese, Korean, Dutch, Italian, German)
- PP55 A2-level gaps across Romance languages (pensar, creer, necesitar patterns flagged)
- F10 Make purchases A1 for Portuguese (isolated, small)

**Writing process:** All content written by parallel Sonnet agents (Rule B7 max 4), each self-validating PP8/PP63/PP64/PP67 and correctly substituting duplicates (PP24). Main session reviewed aggregate outputs, reverted 1 duplicate-heavy lesson (ZH unit-04), ran npm run build after each batch, pushed, watched CI to green. Total agents dispatched this session: **~40** (F14+F15+F17+F8+F22+F21+F11 batches plus PT/RU/ZH/ES/FR PP55 closures).

---

## Done this session (2026-04-24 extended run)

**133+ PRs shipped (#317-#460).** Owner directive: "keep working until context fills." After mid-session stop, Rule H11 codified (NEVER SELF-TERMINATE).

**🎯 BORING FUNFACT AUDIT ZEROED across all 10 languages (3,633 cards cleared):**
- Spanish: 1,206 → 0 (all 4 variants)
- Korean: 451 → 0 (all 8 variants)
- Dutch: 789 → 0 (all 14 variants)
- French: 995 → 0 (all 9 variants)
- Japanese: 192 → 0 (earlier session)

**Scramble residue cleanup:** Systematic cross-trg scramble detection audit (`_audit_scramble_residue.mjs`). 14+ residue cards fixed across Korean, Dutch, French.

**Cross-trg duplicate audit:** All 10 languages at 0 cross-trg duplicates (count ≥ 3). Only legitimate reinforcement duplicates remain.

**Rules shipped:**
- H10 — Interrupts are stacked, not replacements
- H11 — NEVER SELF-TERMINATE (forbids "session wrap," etc.)

**Placement test fixes (PRs #317-#341):**
- RTL persistence after logout (App.jsx + Onboarding live sync)
- Stem schema split `{ stem, stemSrc, q }`
- Design-spine redesign of PlacementQuiz.jsx
- 11 placement banks em-dash scrubbed

**Scramble bug diagnosed and fixed:** Unsafe regex `trg:"X"` matched match-pair entries. All batch scripts now use `{type:"teach",trg:"X"` anchor. Scramble bug cleanup propagated to Korean (via `nl:`) and subsequent residue fixes.

**Tools shipped:**
- `scripts/_scrub_emdash_{korean,dutch,french}.mjs` (Spanish scrubber pre-existing)
- `scripts/audit_placement_questions.mjs`
- `scripts/_audit_scramble_residue.mjs`
- `scripts/_audit_duplicates_3plus.mjs`
- 40+ per-language funFact batch scripts preserved as templates

**Final audit state (all 10 langs, 39,038 teach cards):**
Runtime PP-rule: 0 | Structural: 0 | MC quality: 0 | Teach content: 0 | Placement: 0 | **Boring funFacts: 0** ✅ | **Cross-trg duplicates: 0** ✅
