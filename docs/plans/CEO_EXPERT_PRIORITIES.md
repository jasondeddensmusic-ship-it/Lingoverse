# CEO + Expert Priorities (2026-04-19)

> Strategic roadmap for turning VerumLingua from a validator-clean prototype into a premium language-learning product. Grounded in second-language acquisition research (SLA) and psychometric best practices.
>
> Sister doc: `docs/vision/VERUMLINGUA_REHAUL_VISION.md` (product vision).
> Superseded by: nothing yet.
> Source: owner-driven pivot conversation 2026-04-19 challenging "validator-green = done."

---

## The honest state

The validator currently checks 4 of ~17 PP rules: PP8 (leaks), PP43 (density), PP48 (multi-blank fb), PP64 (teach-then-test coverage). Those pass for all 10 languages. The other 13 rules are not automated, and several pedagogical dimensions have no rule at all:

- **PP52** teach-before-use — not validator-enforced
- **PP55** vocab completeness vs official exam lists (Goethe/DELF/DELE/TOPIK/CILS/JLPT) — only German audited
- **PP57** grammar completeness — only German
- **PP58** communicative functions — only German
- **PP61** metalanguage in source language — not validated
- **PP63 → PP68** example-vocab integrity — will be validator-enforced after this session
- **PP65** Japanese kanji+furigana — audited for unit files, not all batch files

AND, today's PP64 cleanup used auto-generated match pairs with `src:"(review)"` filler. Those pass the "trg is quizzed somewhere" check but provide negligible retrieval value. PP66 (no filler coverage) forbids this going forward, and `scripts/cleanup_review_fillers.cjs` rewrites the existing instances with the teach card's real `src` translation.

---

## 10 priorities in ranked order

Ranked by expected impact on **learner outcomes**, not validator points.

### 1. Replace thin review-pair filler with real retrieval variety

Immediate action: rewrite every auto-added `"(review)"` `src` with the teach card's actual translation. Follow-up: add production-mode (`fb` / `drag_fill` with target-language answer) where units are recognition-heavy. PP67 (production-mode minimum) enforces going forward.

**Learning-science grounding:** Roediger & Karpicke (2006) testing effect — retrieval strengthens memory traces more than re-reading. Swain (1985) output hypothesis — production forces deeper processing than comprehension alone.

### 2. Wire ts-fsrs into the whole lesson engine, not just Flashcards

`ts-fsrs` (Free Spaced Repetition Scheduler, open-source implementation of FSRS-5) is already installed in dependencies. Currently only used in the Flashcards page. Every miss and every correct answer during lessons should update that card's FSRS schedule. Daily-review mode fed by due-today cards becomes the default landing action.

**Grounding:** SRS (Ebbinghaus forgetting curve + Pimsleur + Leitner lineage → SuperMemo SM-2 → Anki → FSRS). The difference between "Duolingo-tier" and "Anki-tier" retention is roughly 2x at 90 days.

### 3. Ship audio: listening + speaking

Biggest user-outcome gap. No listening, no speaking. Google Cloud TTS was decided months ago but deferred. Web Speech API is free and browser-native for recognition.

- **v1:** per-example TTS audio for top 2 languages (German, Spanish). Web Speech API recognition drills at B1+.
- **v2:** native-speaker audio contractors for top 5 languages, then all 10.

`STOPS-ON: needs Google Cloud TTS credentials` for v1.

### 4. Verumius story system beyond German

Story is the moat. Current state: German-template only, art placeholder. Needed: story arcs for Spanish (biggest market after English-origin demand), then Japanese (high differentiation value).

- Ship the 2-bubble dialogue format across A1 for the next language.
- `STOPS-ON: needs Stable Diffusion / Midjourney art` for visuals — but dialogue text can ship without art as a story-mode preview.

### 5. Adaptive placement test (ceiling-style, with forgiveness)

Start at A1.1, feed 5 baseline questions per sub-level, pass threshold 3/5, terminate on sustained failure with reinforcement-recovery logic.

**Algorithm (owner-specified 2026-04-19):**
- Each wrong answer injects 2 reinforcement questions at the current level
- If learner gets both reinforcement questions correct, the wrong-streak counter resets
- Hard safety valve: 5 cumulative wrong-without-recovery terminates
- Final level = last sub-level where threshold passed

**Grounding:** This is a ceiling-test variant (classical psychometrics) with a reinforcement buffer — fairer than pure 3-consecutive-wrong termination because it forgives single flukes. Used informally by TTMIK and others.

### 6. Cognate + false-friend explicit instruction per language pair

~30-60% of Spanish/French/Italian/Portuguese vocabulary is transparent to English speakers. Currently not exploited. False friends (ES `embarazada` ≠ embarrassed; PT `puxar` = pull, not push) are high-retention comedy cards.

Build: `src/data/cognates/{lang}.js` per language pair. Add a "Cognate Hub" lesson to A1 Unit 1 for each Romance language.

**Grounding:** Bilingual-lexicon research on cross-linguistic transfer (Odlin 1989; Jarvis & Pavlenko 2008). Leveraging transfer accelerates A1-A2.

### 7. PP63 / PP68 example-vocab integrity audit (automated)

Write `scripts/pp63_audit.cjs`. Every content word ≥3 chars in every teach-card `example` field must trace to (a) the card's own trg, (b) an earlier teach card, (c) the language's function-word list, or (d) a flagged cognate. Report per-language untaught-word-in-example count. Each language should drop to 0.

**Grounding:** Krashen's input hypothesis i+1 — learners acquire language from input that's comprehensible. Examples stuffed with untaught vocabulary violate comprehensibility silently. The user skips or Googles. Retention collapses.

### 8. Cultural depth + native audio commissioning

Where the app is weakest per language: cultural context + native audio. Cultural tip cards are thin outside Korean. Audio is nonexistent.

- Commission: one contractor per language × 40 hours for native audio + cultural tip review.
- `STOPS-ON: needs contractor budget decision`.

### 9. Per-language polish matrix + "can-do" user-facing progress

Build `docs/POLISH_MATRIX.md`: 10 languages × N dimensions (vocab-by-level, grammar-by-level, functions-by-level, audio-ready, story-ready, cultural-ready). Surface CEFR can-do statements in user profile: "✓ I can order food politely in Spanish" / "☐ I can describe past events using the imperfect."

**Grounding:** Can-do statements (CEFR) turn study into milestones. Streaks are weak motivation; visible capability gain is strong motivation. Mihaly Csikszentmihalyi's flow research — skill increase visibility sustains engagement.

### 10. Freeze new languages until existing 10 reach premium bar

Current 10 languages are prototype-tier. Scale without quality = scale of mediocrity.

- Freeze: no 11th language until German, Spanish, Japanese each pass: PP8/43/48/64/66/67/68 + PP52 + PP55 (exam-list match) + PP57 (grammar-construct match) + audio + Verumius story.
- This is a hard product-decision gate, not just a guideline.

---

## Supporting rules shipped with this plan

In `CLAUDE.md`:
- **PP66** no filler coverage
- **PP67** production-mode minimum
- **PP68** example-vocab integrity (automated)
- **Rule B15** genuine content, not validator theater
- **Rule B16** bounded retry (3 strikes → BLOCKED)
- **Rule B17** agents never self-validate
- **Rule C11** validator-theater detection (pre-commit grep)
- **Rule C12** idempotent auto-fix scripts
- **Rule E4** truth-source ranking
- **Rule G** dual linguistic validation (replaces native-speaker review as a bottleneck)
- **Rule H** autonomy protocol (queue-driven loop)
- **Core Principles 14–18** (validator-green is floor, retrieval beats recognition, don't game the metric, autonomy requires queue, two linguists beat one)

---

## Execution order for this plan

This is the order used in the current autonomy pass. Reorder if the queue generator produces different priorities.

1. Rules into CLAUDE.md + new autonomy docs
2. PP63/PP68 audit (`scripts/pp63_audit.cjs`) + run it → reveals the pedagogical mess
3. Filler cleanup (`scripts/cleanup_review_fillers.cjs`) — rewrites `"(review)"` with real translations
4. Cognate corpus + A1 cognate hub lessons (ES, FR, IT, PT, DE from English)
5. Placement quiz (ceiling + forgiveness algorithm)
6. ts-fsrs integration into LessonEngine (highest risk — last)

Each step: commit + push + CI watch before the next.
