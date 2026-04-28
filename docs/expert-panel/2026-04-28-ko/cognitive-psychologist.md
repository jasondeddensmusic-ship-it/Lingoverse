# Audit: Cognitive Psychologist — Korean A1+A2 (units 01-10 + 31-33)

Date: 2026-04-28
Slice: Korean A1+A2 (13 units, ~2,500 steps surveyed)
Auditor lens: Roediger & Karpicke (2006), Bjork & Bjork (desirable difficulties), Cepeda et al. (2008/2009 spacing meta-analyses), Bahrick (permastore), Dunlosky et al. (2013), Cowan (2001 WM), Ericsson (deliberate practice).

## Score (1-10)
- Spacing schedule: **6**
- Retrieval mode dominance: **4**
- Interleaving: **4**
- Error framing: **3**
- Cognitive load calibration: **5**
- **Overall: 4.4**

## Top 3 strengths

1. **FSRS engine integration is correct in principle.** `src/srs.js:74-78` wraps `ts-fsrs` with sensible Good/Again ratings on quiz outcomes. `recordQuizOutcome` (`src/srs.js:164-179`) is called from every mc/fb/drag_fill outcome (`LessonEngine.jsx:584-590`) AND every successful match pair (`LessonEngine.jsx:4046`). The plumbing is in place, which is the precondition for any spacing science to work. ts-fsrs's defaults (`generatorParameters()`) implement a near-exponential expansion that aligns well with Cepeda et al.'s ratio-of-ISI-to-RI guidance.
2. **The "verb engine" (`kou1l2b`) and "vowel harmony" (`kou2l2b`) lessons are pedagogically excellent.** They explicitly model GENERATIVE production: stem + ending = infinite verbs. This is Ericsson-style chunking — turning surface forms into a deeper schema that supports transfer. The deepDive in `unit-01.js:153` ("This is how a polyglot thinks. Not: 'I memorised this phrase.' But: 'I see stem 먹...'") names the schema explicitly. Schema-level encoding produces far better retention than rote (Bjork & Richardson-Klavehn, 1989).
3. **Daily Review tile uses the SRS due-queue, not "today's lesson"** (`src/pages/Home.jsx:14-16, 87-119`; `src/srs.js:182-186`). When users tap it, they review whatever is genuinely due across all units — that's interleaved by construction. This is exactly what Bjork's interleaving research recommends, in contrast to blocked review of "the lesson you just finished."

## Critical findings (must fix)

### C1. Recognition mode dominates ~70-74% across ALL of A1+A2; production never increases at A2
**[unit-01.js through unit-10.js — aggregate stats]** | A1.1 (u01-u03) recognition share: 70-74%. A2.2 (u10) recognition share: 69%. There is essentially **no shift toward retrieval mode as CEFR rises**.

| Unit | Total quiz | MC% (recog) | FB+drag% (production) |
|------|-----------:|------------:|----------------------:|
| u01 (A1.1) | 165 | 74% | 26% |
| u04 (A1.2) | 101 | 67% | 33% |
| u07 (A2.1) | 126 | 70% | 30% |
| u10 (A2.2) | 180 | 69% | 31% |

A2.2 should be approaching the ~30%-free-recall floor that the Cognitive Psychologist persona requires for B1+ — yet u10 sits at the same level as A1.1. The A2-gap batch lessons in units 31-33 are even more skewed: most batch lessons have 17-20 teach cards but only 3-5 mc + 2-4 fb (~15-25% of total steps quiz the learner at all, and the production share is similar).

**Citation:** Roediger & Karpicke (2006, *Psych Sci*) — direct comparison shows free recall produces ~50% better long-term retention than re-study. Karpicke & Roediger (2008, *Science*) — testing > re-exposure. McDaniel & Butler (2011) — recognition tests produce weaker transfer than recall tests.

**Fix:** At A2.1, target 35% production. At A2.2, target 45%. Convert ~30% of mc steps with target-language answers into fb (single blank) where the learner types/picks the Korean form, not the English gloss. `unit-04.js:31` (`mc: '면 means: Cold/Hot/Noodles/Soup'`) is recognition; the same content as `fb: 라___ → ramen` would be production.

### C2. Wrong-answer feedback is punitive, never explanatory — and "streak" hard-coded to 1
**[LessonEngine.jsx:591, 3607, 3717-3719, 3802; LessonEngine.jsx:1143]** | The check path is `setTimeout(()=>{if(correct){setScore(s=>s+1);addXp(2);UISounds.correct();}else{UISounds.wrong();}},150)`. On wrong, the user sees only `❌ Not quite — The answer is: 안녕히 계세요` (`vocabulary.js:87, 99`). No explanation. No recast. No "your answer would mean ___, you needed ___." For 반말/존댓말 confusion specifically — culturally costly errors — the mismatch is rendered identically to "wrong noun." 

`LessonEngine.jsx:1143`: `const streak = user?.streak || 1;` — same German-pilot pattern. The streak displayed on the home stats card never increments anywhere; it's a cosmetic decoration.

**Citation:** Metcalfe (2017, *Annual Review of Psych*) — "Learning from errors": errors followed by corrective feedback produce BETTER retention than errorless drills. But the corrective feedback must be informative; just showing the right answer produces only modest gains, while explanatory feedback (why was the wrong choice wrong?) produces large effects. Kornell, Hays & Bjork (2009) — errorful generation aids retention IF it's recast into the correct form with explanation.

**Fix:** When a learner picks the wrong honorific level (e.g., 안녕 in u01 step 11 "leaving a shop"), surface a 1-sentence cultural recast: *"안녕 is casual — to a shopkeeper (older, stranger), use 안녕히 계세요. They stay; you wish them peace."* Reuse the existing `hint` field as a `whyWrong` field. Cost: ~1 hour of engine work + content backfill on the ~20 most-failed steps per unit. Also: either remove the streak display entirely (it's lying to users) or wire it to actual data.

### C3. Cognitive load overruns: 17-20 teach cards in single lessons, drag_fill with 4 blanks + 8-tile pool
**[unit-05.js: L4.2=18 teach, L4.3=17 teach, L7c=17 teach in 46 total steps; unit-09.js:252, 282, 310; unit-10.js:336, 362, 433; _temp_a2gap_L01.js: 18 teach + only 4 mc + 2 fb]** | A teach card is ~3 chunks (target word + meaning + example). 17-20 teach cards back-to-back = ~51-60 chunks injected into WM with minimal interleaved retrieval to consolidate. By Cowan's (2001) 4-chunk WM ceiling, the only thing that survives is whatever happens to be retrieved later — and most of these lessons don't retrieve most cards.

Drag_fill load examples that exceed reasonable WM:
- `unit-09.js:282`: 4 blanks + 8-tile pool → **12 simultaneous chunks**, plus the sentence semantics.
- `unit-10.js:336`: 4 blanks + 8 tiles. Same.
- `unit-10.js:433`: 4 blanks + 8 tiles, with semantically related distractors (좋아해요/알아요/잊어요/생각해요). High load AND high distractor competition simultaneously.

For Korean specifically, drag_fill with particle pools (이/가/을/를/은/는) presents 6 phonologically-similar tiles — the chunk count alone is 6, before the sentence parse.

**Citation:** Cowan (2001, *BBS*) — central WM capacity is ~4 chunks. Sweller (1988) — extraneous load (interface complexity) crowds out germane load (schema construction). Paas & van Merriënboer (1994) — split-attention effect: when multiple sources of information must be integrated, load multiplies.

**Fix:** Per PP43 (CLAUDE.md states 32 steps/lesson cap), enforce a *teach-card cap of 8/lesson* at A1, 10/lesson at A2. Split L7c (46 steps) into two lessons. For drag_fill, cap blanks at 3 and pool at 6 distinct tiles (or cap at 2 blanks for A1.1-A1.2). Same load principle: keep n+distractors under ~8.

## Important findings

### I1. Spacing exposure is correct but never gets scheduled into long-term maintenance
**[src/srs.js:91-97, 100-110, 183-186]** | `getDueCards` and `getDueToday` return what is due now/earlier — that's correct. But `getStats` calls anything with `scheduled_days > 21` "mastered" (`srs.js:106`) and the system makes no effort to RE-surface those cards at 30/90/180-day intervals to test Bahrick-style permastore (Bahrick 1984; Cepeda et al. 2009 found optimal Inter-Study-Interval ≈ 10-20% of Retention-Interval). FSRS will keep extending intervals on its own, but if a learner stops opening the app for 3 weeks, every "mastered" card silently expires; the engine doesn't proactively surface a "30-day check" or "90-day check" tile. **Fix:** add a "Long-term Review" tile to Home that pulls cards last reviewed >30 days ago regardless of due date — a permastore probe.

### I2. Interleaving is per-session only, not curriculum-level
**[unit-04.js:31-32 — match pair followed by match pair on same set; unit-09.js:228-232 — adjacent drag_fill tests on `-고 싶어해요`]** | Within a lesson, step types are mostly mixed (good), but related steps cluster: two match games on food cards in succession; two drag_fill on the same construct two steps apart. This is "blocked-within-mixed" and produces less generalization than fully randomized order (Rohrer & Pashler 2010, *Educ. Researcher*). Across lessons, the curriculum is strictly blocked: you finish u04 food, then u05 family, with no dependency for u04 retrieval inside u05 lessons. **Citation:** Rohrer (2012) — interleaving by topic is the well-replicated finding; the within-session shuffle the engine already does is good but partial. **Fix:** Force ~10% of every lesson's quiz steps to be drawn from the SRS due-queue, not from this lesson. The plumbing exists (`getDueToday` works) — wire it into the lesson flow as "warm-up retrieval" before the main steps.

### I3. Standalone Quiz page is 100% MC recognition mode
**[src/pages/Quiz.jsx:30-70]** | `harvestLessonQuestions` produces only `{kind:"mc",...}` items, and `harvestVocabQuestions` does the same — turning every match pair into "what does X mean?" with English options. There is no fb path, no typed input, no reverse direction (English → Korean production). Standalone Quiz mode is a recognition-only review system. **Citation:** Pyc & Rawson (2009) — practice-test format determines retention shape; recognition practice produces weaker recall transfer than production practice. **Fix:** Add a "type the Korean" mode: take a random teach card, show the English gloss + POS, ask the learner to type the trg. This is genuinely difficult (productive recall) and is the missing capstone for the 70/30 recognition/production curriculum.

### I4. Honorific/banmal decisions are tested as MC vocabulary, not as situational judgment
**[unit-01.js:69, 83; unit-09.js:101-103; unit-10.js:84-90]** | Speech-level mastery is the highest-stakes pragmatic skill at A1+A2, yet the items are recognition: "Casual (반말) form: which option is the polite eating verb with -요 removed?" The learner picks 먹어 from a list. They are never asked to PRODUCE the right level for a given social context (e.g., "Type how you'd ask your friend's grandmother where the bus stop is"). **Citation:** Anderson (1982) on procedural knowledge — declarative facts about speech levels don't transition to procedural fluency without retrieval-mode practice in context. **Fix:** Add 4-6 fb-style "social context" items per A2 unit: setup line in English describing the interlocutor, learner types the appropriate Korean utterance.

### I5. funFact, deepDive, and example fields are excellent — but never tested
**[unit-01.js:42-44, unit-04.js:13-22, etymology decompositions throughout]** | The Sino-Korean morpheme decomposition (학생 = 學 study + 生 life; 의사 = 醫 medicine + 師 master) is a genuine cognitive accelerator (Wang, Liu & Perfetti 2004 on radical-based reading; transfer to Korean Hanja is well-documented). But quizzing of decomposition is shallow: u02 has *some* mc on morphemes (`회사원 = 회사 + 원. 원 means: Member`), but most morphemes (생, 학, 사) are taught and never re-quizzed. Same for the funFact column — these are gold for fact-cued retrieval but invisible to the SRS. **Fix:** Auto-generate one "decompose this compound" mc per Sino-Korean teach card so the morpheme bank itself becomes a retrieval target.

### I6. Match game with 4 pairs = 8 simultaneous items; close to WM ceiling
**[unit-01.js:73, unit-04.js:28-29, repeated everywhere]** | All match games use 4 pairs. The learner holds 4 trg + 4 src = 8 items in WM until the game completes. With Korean script for the trg side, this is actively visually parsing Hangul + tracking which pair you tentatively connected. Within Cowan's range but at the ceiling. **Fix:** For A1, prefer 3-pair match. Reserve 4-pair for A2+. Avoid 5-pair entirely (none surveyed exceeded 4, which is good).

### I7. Same content cycles back without targeted spacing decisions
The "verb engine" (`kou1l2b`), "vowel harmony" (`kou2l2b`), "particle trio" (`kou5l5`), "speech levels" (`kou9l4`), "반말" (`kou10l3`) form a beautifully scaffolded conceptual spine. But the curriculum doesn't explicitly schedule 1d/3d/7d/14d retrievals on each ★ lesson's core construct. The seed-registry comment at `unit-01.js:8-37` documents WHERE concepts are planted vs harvested, but this is human-curated and not delivered to the SRS as priority cards. **Citation:** Cepeda et al. (2008) — the right interval is a function of intended retention, not of curriculum order. **Fix:** Tag ★ lessons' anchor cards with `priority:"core"` and have the SRS surface them more aggressively in Daily Review.

## Sign-off

- **Would I cite this implementation in a "what edtech gets right" paper? Partial.** I'd cite the FSRS integration, the verb-engine generative pedagogy, and the seed-registry curriculum design as positive examples. I would NOT cite the recognition-heavy quiz mix, the missing explanatory feedback, or the 17-card teach-card stacks.
- **If my own kids used this, would I sleep well? Yes — but I'd nag them to use Daily Review religiously, NOT trust the in-lesson MC pass as evidence of learning, and I'd worry they'd reach A2.2 still recognizing rather than producing Korean.** A motivated learner with correct study habits will do well here. A passive learner will get a streak (technically: a hard-coded "1") and an illusion of mastery. Fix C1, C2, C3 and this is a B+ implementation. Without those fixes, the validator-green status is masking a real retention risk.
