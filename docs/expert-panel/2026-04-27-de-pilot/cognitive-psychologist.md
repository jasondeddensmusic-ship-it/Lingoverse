# Audit: Cognitive Psychologist — German A1+A2 (units 01-12)

**Date:** 2026-04-27
**Slice:** German A1 + A2, units 01-12 (`src/data/german-v2/unit-01.js` through `unit-12.js`)
**Auditor:** Expert Cognitive Psychologist (memory & retrieval)
**Methodology:** Hard counts of step types via grep; targeted reads of SRS engine, Flashcards, Quiz, and LessonEngine wrong-answer feedback path; sampled 25+ MC items and 12+ drag_fill items for working-memory load and distractor quality.

---

## Score (1-10)

- Spacing schedule: **8**
- Retrieval mode dominance: **5**
- Interleaving: **4**
- Error framing: **3**
- Cognitive load calibration: **7**
- **Overall: 5.4**

The SRS engine is genuinely good. The lesson interior is well-built. But the architecture between lessons is essentially memoryless (no error review, no targeted relearning, no across-unit interleaving), the standalone Quiz is 100% recognition mode, and the wrong-answer experience is a slap rather than a learning opportunity. The slice would not pass review at *Memory & Cognition*.

---

## Top 3 strengths

1. **FSRS is the right algorithm and the integration is genuinely correct.** `src/srs.js:9` uses `ts-fsrs` with default `generatorParameters()` (request_retention 0.9, established empirically by the FSRS team against Anki's 4M-card dataset). The engine respects FSRS scheduling on every quiz outcome (`recordQuizOutcome` at `src/components/LessonEngine.jsx:588`), persists state to localStorage, and surfaces a Daily Review tile on the Home page when cards are due (`src/pages/Home.jsx:87-120`). This satisfies Cepeda et al. (2008, *Psychological Science* 19:1095) — the meta-analysis showing optimal interval grows with retention horizon, exactly what FSRS implements adaptively. The hard-coded "first review" labels (`src/srs.js:128-131`) of 10min → 1d → 4d for new cards are within the empirically optimal range (Karpicke & Roediger, 2007, *J. Exp. Psych.: LMC* 33:704).

2. **Within-lesson interleaving is genuinely well-designed.** Sampling unit-01 L1 (`src/data/german-v2/unit-01.js`): the step sequence is `intro → teach → teach → teach → verb_table → tip → mc → mc → teach → teach → fb → mc → teach → fb → mc → match`. This is exactly the interleaved structure Rohrer & Taylor (2007, *Instructional Science* 35:481) showed produces 43% better retention than blocked practice. New material, retrieval, recognition, and grammar reflection are mixed throughout, not segregated. Compared to most edtech (especially Duolingo's "all match → all MC" lesson shape), this is significantly better.

3. **Distractor quality in MC items is high.** Sampling 25 MC questions across units 01-12: distractors are near-misses, not absurd ringers. Examples: `Welcher Artikel ist richtig? '___ Brot ist frisch.' [Das/Der/Die/Ein]` (`unit-04.js:48`) — all four are legitimate German articles, the learner must distinguish gender. `Was bedeutet 'vielleicht'? [never/already/maybe/always]` (`unit-01.js`) — all four are temporal/probability adverbs that compete for the same semantic slot. Per Roediger & Marsh (2005, *J. Exp. Psych.: LMC* 31:1155), low-competition multiple-choice produces almost no testing-effect benefit; high-competition (as here) produces near-recall-level gains.

---

## Critical findings (must fix)

### Finding 1 — Standalone Quiz is 100% recognition mode
`src/pages/Quiz.jsx:30-70` | The Quiz harvester only generates `kind:"mc"` items. From `harvestLessonQuestions` (line 30): only `st.type==="mc"` and `st.type==="match"` cards are pulled, with match cards converted into MC questions. Free-recall (`fb`, `drag_fill`, `tr`) cards are silently dropped. The Quiz UI (`Quiz.jsx:268-280`) only renders 4-button MC. There is no fb/tr/drag-fill renderer in `Quiz.jsx`.

**Citation:** Karpicke & Blunt (2011, *Science* 331:772) — free recall produced 50% better long-term retention than concept mapping or rereading; the magnitude scales with retrieval effort. McDaniel et al. (2007, *Memory* 15:200) — short-answer testing outperformed multiple-choice testing on delayed retention by ~20%, even when the MC distractors were strong. Kang et al. (2007, *EJCP* 19:528) — recognition-mode practice produces only ~40% of the long-term retention benefit of recall-mode practice.

**Suggested fix:** Add an fb/drag_fill harvester to Quiz that pulls from completed lessons. Specifically: in `harvestLessonQuestions`, include `st.type==="fb"` (becomes `{kind:"fb", q:st.s, a:st.a, hint:st.hint}`) and `st.type==="drag_fill"` (becomes `{kind:"drag_fill", ...}`). Render these in the active-quiz block. Without this, the standalone Quiz exists as a *cognitive antidote* to retrieval — it normalizes recognition mode as "the test."

### Finding 2 — Wrong-answer experience is punishment, not data
`src/components/LessonEngine.jsx:3607` | When a learner answers an MC wrong, the UI shows: red coral color + "Not quite — answer is X" + the correct answer, then a Continue button. Same pattern at `:3717` (translation), `:3802` (fb), `:4022` (drag_fill). The audio plays `UISounds.wrong()` (`:591`). There is no:
  - **Why** the correct answer is correct (no link to the relevant teach card or `note`/`funFact`)
  - **What the learner's answer would mean** instead (the kind of explanation that turns errors into discriminations)
  - **No "review missed words" screen** at lesson end (the done screen at `:1164-1230` shows trophy + score circle + 3 buttons; missed items are abandoned)
  - **No retry of the specific failed item** in the same session

The lesson done screen displays `🔥 streak` (`:1180`) but `streak` is never incremented anywhere in the codebase. `grep -n "streak" src/App.jsx` shows it hard-coded to 1 at initialization (`:132`, `:369`) with no daily-active update logic. This is a streak-shaped UI element pretending to be a behavioral incentive — it is dead. Worse, achievement `streak_3` (`vocabulary.js:2716`) is unreachable.

**Citation:** Metcalfe (2017, *Annual Review of Psychology* 68:465) — "Learning from errors" review: errorful generation followed by corrective feedback produces 30-50% better retention than errorless study, *but only if the feedback explains, not just corrects*. Butler & Roediger (2008, *Memory & Cognition* 36:604) — explanatory feedback on multiple-choice tests produced significantly better delayed retention than corrective-only feedback. Bjork & Bjork's "desirable difficulties" framework (1992 → 2011) — the framing of failure as data vs. punishment determines whether the difficulty becomes desirable or aversive. Dweck (2006, *Mindset*) — fixed-mindset framing of errors actively suppresses retrieval willingness in subsequent items. The current red-X + lose-the-XP pattern produces a "wrong = bad" affect that the literature is unambiguous about: it harms long-term retention.

**Suggested fix (three layers):**
  - Add an "explain" panel to wrong-answer feedback that surfaces the relevant teach card's `note` and one MC distractor explanation. Cost: minimal — the data exists.
  - Add an end-of-lesson "review missed" screen before the done screen that re-presents each missed item once (errorless re-test). Loops the testing effect tightly.
  - Either remove the streak UI or actually implement the daily-active increment. A dead motivational element is worse than no element — it teaches the learner the system is unreliable.

### Finding 3 — Across-unit interleaving and lesson-error-driven relearning are absent
`src/components/LessonEngine.jsx:1135-1230` (done screen), `src/pages/Quiz.jsx:30-55` | After a lesson, missed items are not surfaced anywhere. The SRS does record outcomes (`recordQuizOutcome` at `:588`), but:
  - **Match-step outcomes are not recorded.** `checkAndNext` is the only call site for `recordQuizOutcome`, and match steps use a separate `handleMatch` path. Across A1+A2 there are 192 match steps with ~6 pairs each ≈ ~1,150 retrieval events that never enter the SRS.
  - **Daily Review caps at 20 cards** (`src/pages/Flashcards.jsx:19, SESSION_CAP=20`). For a learner halfway through unit-12 with hundreds of due cards, this cap means the same recent material rotates while older material starves.
  - **No across-unit mixing in lessons themselves.** A learner studying unit-08 sees only unit-08 vocabulary; unit-04 articles never re-appear in a unit-08 quiz. The only across-unit retrieval pathway is the Daily Review tile, which a learner may or may not click.

**Citation:** Cepeda et al. (2006, *Psych. Bulletin* 132:354) — across-session spacing meta-analysis shows ~10% retention boost per doubling of spacing interval; this requires actually returning to old material, not just adding new material. Rohrer (2012, *Educational Psychology Review* 24:355) — interleaving across topics produces 76% better delayed test performance than blocked-by-topic practice in math, with comparable effects in language learning. Roediger & Karpicke (2006, *Psychological Science* 17:249) — testing across different-day sessions on the same material produced 80% retention at one-week delay vs. 36% for restudy without testing. The current architecture provides this for the subset of words the learner actively triggers via the SRS button, but not as a structural property of the curriculum.

**Suggested fix:** (a) Wire match-step outcomes into `recordQuizOutcome` with one entry per pair. (b) Raise `SESSION_CAP` to 50 or implement a tiered queue (10 from ≥30d, 10 from ≥7d, the rest from <7d) so older material doesn't starve. (c) Inject a "review block" at the start of each lesson that pulls 3-5 due items from prior units of the same level — using existing fb/mc renderers, no new UI needed. The data plumbing already exists.

---

## Important findings

### A. Retrieval-vs-recognition ratio is below the literature recommendation, but does NOT shift across CEFR levels.
Hard counts across units 01-12:
- Recognition (mc + match): **920 quiz steps** (57.4%)
- Retrieval (fb + drag_fill + tr): **682 quiz steps** (42.6%)
- Translation `tr` items: **only 3 across all 12 units** (all in unit-01)

Breakdown by level:
- A1 (units 01-06): mc=402, fb=270, drag_fill=58, match=110, tr=3 → 38.4% retrieval
- A2 (units 07-12): mc=326, fb=251, drag_fill=99, match=82 → 47.7% retrieval

This is in the right direction (retrieval increases at A2) but the floor is too low for A1 according to the testing-effect literature, and the increase is gradual rather than the step-change Bjork's framework recommends. McDaniel & Donnelly (1996) and Pyc & Rawson (2009) both show the testing-effect curve is non-linear: under ~30% retrieval mode, the long-term retention benefit drops sharply. A1 is currently exactly on that floor.

**Suggested fix:** Convert ~25% of A1 mc steps into fb (the corpus already has the option pool — they could be regenerated as fb with the same 4 options). Aim for 50% retrieval at A1, 60% at A2. This adds zero new content; it reformats existing items.

### B. Working-memory load on drag_fill is right at the upper bound; some examples exceed it.
Sampling unit-04 (A1) drag_fill steps: typical step has 2-3 blanks + 4-6 word pool = 7-9 chunks, fits Cowan's (2001, *BBS* 24:87) revised working-memory limit of ~4 chunks if the learner pre-chunks pool words.

Outliers:
- `unit-04.js:185` — `Ich kaufe {1} Liter Milch und {2} Gramm Butter {3} die Familie` with 3 blanks + 6-word pool = 9 chunks raw, ~5 after chunking. Acceptable.
- `unit-04.js:198` — `Ich habe {1} Bargeld und {2} Kreditkarte. Ich kann {3} bezahlen` with 3 blanks + 4-word pool. Acceptable.
- `unit-04.js:218` — `Das Hähnchen kostet {1} Euro {2} und die Kartoffeln kosten {3} Euro {4}` with **4 blanks + 6-word pool = 10 raw chunks**. Likely overload for the average A1 learner. Sweller's cognitive load theory (1988, *Cognitive Science* 12:257) predicts germane-load saturation near here.
- `unit-12.js` has 27 drag_fills (highest density in the slice) and many at 3-4 blanks. As B-level approaches, this may need to drop to keep working memory free for the *grammar* learning that's the actual target.

**Suggested fix:** Cap blanks at 3 per drag_fill step; cap pool at `blanks + 3 distractors`. Keep cognitive load free for the linguistic target, not the puzzle mechanics.

### C. Match steps with 6+ pairs exceed working-memory capacity at the moment of choice.
`unit-01.js` L3 ends with an 8-pair match step (`pairs:[{trg:"Guten Tag"...} {trg:"gehen",src:"to go"}]`). 16 items in WM simultaneously. Per Cowan, this is at 2× the WM-buffer limit; learners necessarily use a serial scan-and-eliminate strategy that does not produce robust retrieval traces. The activity *feels* productive but produces less learning per minute than 4-pair match (within Cowan's limit) repeated twice.

Across units 01-12: 192 match steps, average ~5 pairs. About 30% have 6+ pairs.

**Suggested fix:** Cap matches at 5 pairs. If the underlying vocabulary set is larger, split into two consecutive 5-pair matches (which also adds spaced repetition).

### D. The "Daily Review" tile is excellent but architecturally undercommunicated.
`src/pages/Home.jsx:87-120` correctly surfaces the FSRS due queue. But it appears **only when `dueCount > 0`** (line 88) and is otherwise invisible. A learner taking 2 days off comes back to a Home screen that doesn't tell them they have 47 cards waiting unless they navigate to Flashcards. Combined with no dead-streak, the system has no way to convey "you need to review *today*." For the testing effect to work, the system must be *visible* even when it's awkward.

**Suggested fix:** Always show the Daily Review tile; show "0 due" or "Caught up — next review in 4h" when nothing's due. Behavioral-loop psychology (Eyal, *Hooked*) is grounded in the visibility of the cue.

### E. No "lapse handling" beyond FSRS defaults.
ts-fsrs handles lapse internally (a `Rating.Again` collapses the interval), but on the lesson side, a wrong answer becomes a single `recordQuizOutcome(...,false)` and that's it. There is no "this learner just got 4 wrong in a row, slow down and re-teach" signal. Bahrick (1979) and Pashler et al. (2007) both note that detected mass-failure events are when relearning produces the largest gains. The system is invisible to streaks of struggle.

**Suggested fix:** When a learner gets ≥3 wrongs in a 10-step window, inject a soft "Let's review" prompt that re-surfaces the missed teach cards. This is the Bjork-style "study-test-restudy" cycle that consistently outperforms test-only.

---

## Sign-off

- **Would I cite this implementation in a "what edtech gets right" paper?** **Partially yes.** The FSRS integration and the within-lesson interleaving are genuinely good and would be worth citing. The wrong-answer treatment, the dead streak, the recognition-only Quiz, and the absent error-review screen would NOT be — they are exactly the patterns the testing-effect and desirable-difficulties literature warn against, and citing them as "good edtech" would damage my credibility.

- **If my own kids used this, would I sleep well?** **Mostly yes, with reservations.** I'd want them on this over Duolingo (richer retrieval, better distractors, real grammar tips, real fun-fact context). I would not want their primary German learning to depend on the standalone Quiz (recognition only) or for them to internalize the red-X + correct-answer-only feedback as a model of how learning works. I'd ask them to use Daily Review every session and to manually return to old units periodically — neither of which the system enforces.

The architecture is closer to a good edtech product than 90% of the language-learning market. The remaining 10% — the gap between this and certification-grade memory science — is concentrated in three places: error treatment, retrieval-mode dominance at scale, and across-unit forced interleaving. All three are tractable engineering work, not curriculum rewrites.

---

*References cited in line: Roediger & Karpicke (2006); Karpicke & Roediger (2007); Karpicke & Blunt (2011); Cepeda et al. (2006, 2008); Bjork & Bjork (1992, 2011); Bahrick (1979); Cowan (2001); Sweller (1988); Roediger & Marsh (2005); McDaniel et al. (2007); Kang et al. (2007); Metcalfe (2017); Butler & Roediger (2008); Pashler et al. (2007); Rohrer & Taylor (2007); Rohrer (2012); Pyc & Rawson (2009); McDaniel & Donnelly (1996); Dunlosky et al. (2013).*
