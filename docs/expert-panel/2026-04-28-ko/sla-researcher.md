# Audit: SLA Researcher — Korean A1+A2 (units 01-10 + 31-33)

**Reviewer:** Expert Panel — SLA Researcher / Applied Linguist (PhD applied linguistics, 20 years adult SLA)
**Date:** 2026-04-28
**Slice:** Korean V2 — A1.1 (u01-03), A1.2 (u04-06), A2.1 (u07-09), A2.2 (u10 + u31-33)
**Files reviewed:** `src/data/korean-v2/unit-{01..10}.js`; wrapper units 31-33 importing 19 `_temp_a2gap_L*.js` lessons; `src/data/foundations.js` Korean section (lines 893-1100); `src/data/grammar/korean.js` (47 entries TOPIK-aligned)
**Method:** Full read of u01-02 + structured-skim of u03-10; full read of `_temp_a2gap_L01.js`; structural greps for quiz typology, dialogue depth, spiraling, hint integrity. All counts cited are from grep output captured during this audit.

---

## Score (1-10)

- **Comprehensible-input calibration**: 7
- **Pushed-output adequacy**: 4
- **Interaction quality**: 5 (split A1=3 / A2=7; see Critical 1)
- **Form-meaning-use triad**: 8
- **Spiraling adequacy**: 8
- **Overall**: **6.5**

This is a thoughtful curriculum that takes the morphology seriously and wires Sino-Korean as a productive system from day one. It is currently *recognition-rich and production-poor*, and the A1 dialogues do not yet exercise the conversational repair muscle that Korean honorific selection demands. Both are fixable without restructuring. With the fixes, this is a **6.5 → 8** course; without them, learners will pass the validators and stall on first contact with a Korean speaker.

---

## Top 3 strengths

1. **The morpheme-as-LEGO scaffold is a model of explicit generative grammar.** Unit 1 introduces 국 (country) and within two units learners decode 학교, 도서관, 교실, 병원, 약국 — each with the etymology made visible (`hanja:"學+校"`). This implements VanPatten's processing-instruction principle (force explicit form-meaning mapping) without sliding into rote translation. The "Train metaphor" (stem + tense car + politeness car) at u01-L2b and u07-L2 is the cleanest pedagogical framing of agglutination I have seen in self-directed L2 Korean materials. Larsen-Freeman would call this making the system's own generativity available to the learner — not just teaching forms, but teaching *how forms are built*. (`src/data/korean-v2/unit-01.js:113-153`, `unit-02.js:223-228`).

2. **Honorific awareness is woven from Lesson 1, not bolted on.** 안녕하세요 / 안녕히 가세요 / 안녕히 계세요 / 안녕 are taught as a system tied to the listener's role (leaving vs staying), with the bowing tip and culture frame at `unit-01.js:38-83`. Speech-level architecture (해요체 / 합쇼체 / 반말) is named, contrasted, and given social rules at `unit-09.js:88-100` and `unit-10.js:77-100`. This is where many TOPIK-aligned curricula fail — they teach 요 forms first and treat 합쇼체 as advanced, then learners are blindsided by the formal register at airports, banks, and convenience stores. This curriculum models the full register sociolinguistics from the start, which is exactly Long's Interaction Hypothesis applied to honorifics: meaning-negotiation in Korean is honorific-negotiation.

3. **Spiraling is real, not aspirational.** Sample-grep of 20 vocab items from u01-03 across u04-10 + u31-33: 안녕하세요 reappears in 4 later files; 감사합니다 in 10; 저는 in 12; 있어요 in 25; 커피 in 11; 친구 in 12; 공부 in 12. Only `직진` (1 file) and `회사원` (2) underperform. Korean morphemes (학, 생, 국, 사, 실, 관, 원, 방) recur cumulatively across unit tip cards, reinforcing the LEGO bank. This implements Pimsleur-style cumulative recycling at the morpheme level — better than at the word level, because it builds productive decoding capacity (Larsen-Freeman's "complex adaptive system" framing).

---

## Critical findings (must fix)

### CRITICAL 1 — A1 dialogues are 100% 2-turn ping-pong; A2 jumps to 4-turn but skips repair sequences entirely.

**Citation:** Long (1983, 1996) — Interaction Hypothesis. Negotiated meaning, clarification requests, and conversational repair are necessary conditions for L2 acquisition, not optional decoration. Pica (1994) on negotiation routines.

**Evidence (grep of `example:"A:...B:...A:...B:` patterns across 10 units):**

| Unit | A1/A2 | Examples with A: | 4+ turn dialogues | % four-turn |
|---|---|---|---|---|
| u01 | A1.1 | 51 | 0 | 0% |
| u02 | A1.1 | 82 | 0 | 0% |
| u03 | A1.1 | 60 | 0 | 0% |
| u04 | A1.2 | 47 | 0 | 0% |
| u05 | A1.2 | 91 | 0 | 0% |
| u06 | A1.2 | 111 | 0 | 0% |
| u07 | A2.1 | 44 | 42 | **95%** |
| u08 | A2.1 | 93 | 64 | **69%** |
| u09 | A2.1 | 82 | 77 | **94%** |
| u10 | A2.2 | 91 | 84 | **92%** |

**The shape:** The transition is binary — at u07 the dialogue model changes from "A asks, B answers" to a multi-turn exchange in nearly every example. The implication is not that A1 should suddenly have B2-level dialogues; it's that a learner who studies A1 for weeks is being trained to expect 2-turn structure and then meets a 4-turn world. Krashen would call this an i+5 jump, not i+1, at exactly the wrong layer (discourse competence).

**Worse:** even the A2 multi-turn dialogues are *information exchange*, not negotiation. Repair markers — the linguistic moves Long identified as the engine of acquisition — are essentially absent across all 13 units:

- `다시 말씀해 주세요` (please say that again): **0 occurrences**
- `이해 못했어요` (I didn't understand): **0 occurrences**
- `잘 못 들었어요` (I didn't hear well): **0 occurrences**
- `뭐라고요?` (what was that?): **0 occurrences**
- `다시 한 번` (one more time): **1 occurrence** in 13 units

`잠시만요` appears 8 times but as a "please wait" lexical item, not as a clarification-request move inside a dialogue. There is no example anywhere of a Korean speaker correcting a learner's honorific level mid-sentence (the most common real-world repair routine for L2 Korean), or of a learner asking for slower speech.

**Concrete fix:**
1. Across u04-u06 (the A1.2 transition), retrofit 30% of teach-card examples to 3 turns (A→B→A) — closer of the conversation, not just the question-and-answer.
2. In u07, introduce a dedicated lesson "Repair phrases" (8-12 teach cards): 다시 말씀해 주세요 / 천천히 말해 주세요 / 잘 못 들었어요 / 한 번 더 / 뭐라고요? / 죄송한데 / 그게 무슨 말이에요? / 어떻게 말해요? Provide 4-6 example dialogues where one speaker uses these to recover from miscomprehension.
3. In u09 (speech-level lesson), add at least one example of *register repair* — a person addressing an elder in 반말 by mistake and self-correcting to 해요체 (e.g. "어 가— 가세요!"). This is the single most useful conversational skill for learners and the validators have no way to measure its absence.

---

### CRITICAL 2 — 99% of "production-mode" `fb` tasks expose a 4-option visible word bank, collapsing them to forced-choice recognition.

**Citation:** Swain (1985, 1995, 2005) — Output Hypothesis. The cognitive work of *retrieving* a target form from semantic memory is what consolidates the form-meaning binding. Roediger & Karpicke (2006) — testing effect; production retrieval beats recognition. DeKeyser (2007) — declarative-to-procedural transition requires output without scaffolding. The platform's own PP67 ("production-mode minimum") is correctly stated; this critical finding is that the implementation does not enforce its spirit.

**Evidence:**
- Total `fb` (fill-in-blank) steps across u01-u10: **360**.
- `fb` steps with `opts:[]` array exposing 4 candidate answers: **355 / 360 = 98.6%**.
- Result: a learner facing `저는 사라{1}.` is choosing between `예요`, `이에요`, `아니에요`, `네` — an MC question dressed as a fill-in-blank. The retrieval cost is the same as a 4-option `mc`, not a free-recall production task. The validator's `fb` count is high; the actual *output cost* per item is low.

**A2-gap files (`_temp_a2gap_L01.js` through `L19.js`) are no better:** `fb` steps consistently expose `opts:[...]`. There are 0 free-text inputs anywhere in the A1+A2 slice. The 19 A2-gap lessons average 17 teach cards but only 3-4 quiz steps each, of which only 2-4 are `fb` and all are option-bounded.

This is the single biggest gap between certification-grade and certification-claiming. The owner clearly intended PP67 to enforce output, but encoding `fb` with a 4-option `opts:` array makes it mechanically equivalent to recognition.

**Concrete fix (engine-level, not just content):**
1. Introduce a third quiz type — `fb_open` — where `opts` is omitted and learners type the answer in Hangul. Render with the existing IME, validate normalized (whitespace, particle drop tolerance, romanization fallback).
2. **Cap `fb_with_opts` at 50% of all `fb` per lesson at A1.1; 30% at A1.2; 20% at A2; 0% at B1+.** The remaining `fb` instances must be `fb_open`.
3. For the immediate Korean A1+A2 slice: at minimum, identify the **30 highest-frequency target morphemes** (이에요/예요, 은/는, 이/가, 을/를, 었어요, 았어요, 했어요, 갈 거예요, etc.) and convert one `fb` per teach card to `fb_open`. This is ~150 conversions across u01-u10 — a long afternoon's work, and the single largest pedagogical lift available.
4. Add a `tr` (translation input) task at the end of each lesson: source-language prompt → learner types target-language sentence. One per lesson is enough; even 10 of these across A1+A2 would establish the production muscle.

---

### CRITICAL 3 — Honorific-level *selection* is taught as fact, not exercised as choice.

**Citation:** VanPatten (2007) — processing instruction; learners must process form-meaning *connections*, not memorize them. Larsen-Freeman (2003) — language as use; honorific selection is not a grammar fact but a contextual judgment. Long & Robinson (1998) — focus on form requires noticing in communicative context, not isolation.

**Evidence:** Korean has three+ speech levels, and the curriculum names all three (해요체 / 합쇼체 / 반말). But across u01-u10 I found:
- **97 honorific markers** (-세요, -드세요, -계세요, etc.) inside example dialogues.
- **0 examples** in any unit where the same dialogue contains both an honorific form *and* a casual form addressed to a different conversational partner — i.e., a learner choosing 어머니께 (formal) vs 친구한테 (casual) within one scene.
- **0 quizzes** anywhere in u01-u10 that ask "Which speech level should you use to a stranger 10 years older?" with a forced choice between forms (e.g. "선생님이 오세요 / 와요 / 와"). The relevant lesson at u09-L4 is conceptually rich but the practice is recognition of which level a form belongs to, not production of the right form for a given social context.

**The pedagogical gap:** The owner has correctly identified that Korean honorifics are *productive* (they require contextual selection, not memorization), but the practice is structured as if they are *receptive* (recognition of which level a form belongs to). This is exactly the gap VanPatten warns about — learners who can label 해요체 vs 합쇼체 but freeze when asked to address a Korean elder.

**Concrete fix:**
1. In u07-L4 (after past tense is established), add a "register-switching" lesson with 6-8 mini-scenarios: "You are at a coffee shop ordering from a 20-year-old barista — say 'I want coffee.'" / "You are speaking to your friend's grandmother — same sentence." Learner picks the correct form. The technical implementation is a multi-prompt `mc` where the q text varies the social context and the opts are 해요체 / 합쇼체 / 반말 of the same predicate.
2. In u09-L4, add at least one `fb_open` (per critical 2) where the learner produces both registers: "Order coffee from your friend (반말): ___" / "Order coffee from a stranger (해요체): ___".
3. Mark these as core PP-rule items and validate via a new `audit_register_production.mjs`.

---

## Important findings

### IMPORTANT 1 — Vocabulary load exceeds working-memory cap in 2 of 10 units.

**Citation:** Cowan (2001) — working memory ~4 items; Nation (2001) — vocabulary acquisition rate caps around 10-12 new lexemes per session for sustainable retention.

**Per-lesson teach-card averages (audit script output):**
- u01 avg 4.3, max 8 (acceptable)
- u02 avg 5.9, max 11 (acceptable)
- u03 avg 5.0, max 12 (one outlier)
- u04 avg 5.9, max 10 (acceptable)
- **u05 avg 7.0, max 18 (problem)**
- **u06 avg 7.4, max 13 (problem)**
- u07 avg 5.4, max 10 (acceptable)
- u08 avg 6.7, max 12 (one outlier)
- u09 avg 6.3, max 14 (one outlier)
- **u10 avg 8.3, max 17 (problem)**

The 18-card lesson at u05 is L4.1 "Descriptive Verbs" — and it teaches 크다, 작다, 예쁘다, 멋있다, 귀엽다, 좋다 all in one go, including the ㅡ-irregular (예쁘다) and the ㅂ-irregular (귀엽다). This is i+3, not i+1. A learner who has never seen irregulars meets two new irregular classes plus six new lemmas in one lesson.

**Concrete fix:** Split u05-L4 into two lessons (regular descriptive verbs first, irregulars second). Split u10-L1 (daily routine, 17 cards) into two — morning routine + evening routine. Apply Nation's rule: 10-12 new lexemes is the soft cap; irregular morphology counts double.

---

### IMPORTANT 2 — Form-meaning-use triad is strong on form/meaning but USE is sometimes presented as register-only, not communicative function.

**Citation:** Larsen-Freeman (2003) — the form/meaning/use triad. Use = "when and why a speaker chooses this form among alternatives." Halliday — communicative function. Lyster & Sato — context-of-use should be made explicit.

**Where it works (high marks):** u02-L2c (`을/를` object marker) explicitly contrasts the trio of particles `은/는, 이/가, 을/를` and gives a parsing test (`unit-02.js:118-141`); u06-L2 names `에` vs `에서` with the action/static test; u04-L2 distinguishes `주세요` from `-(으)세요` by communicative function (request for object vs request for action).

**Where it slips:** u05-L3 (`우리` vs `의`) gives the form difference and the cultural frame ("Korean collectivism") but never makes the *use* test explicit — when MUST a learner choose 우리 over 제? The deepDive says "for family and close possessions" but the next quiz tests recognition, not selection. A learner could complete this lesson and still default to 제 엄마 (technically grammatical, sociolinguistically off). Same issue with `만나다 / 보다 / 사귀다` at u07-L1: the deepDive distinguishes them, but no quiz forces selection in context.

**Concrete fix:** Every lesson that teaches a near-synonym pair (우리/제, 만나다/보다, 알다/이해하다, 정말요/진짜요, 감사합니다/고마워요) needs at least one MC where the q frames a social context and the opts are the synonym pair, e.g.:
> "You are introducing your mother to a teacher (formal first meeting). Choose: (a) 우리 어머니예요. (b) 제 어머니예요." Correct: (a). Hint: "For family with elders/strangers, Korean uses the collective form."

This converts the use dimension from a deepDive note (passive) into a graded skill (active).

---

### IMPORTANT 3 — Hint quality is mixed: ~25% of `fb` hints contain the literal answer.

**Audit:** Across u01-u02-u03-u04-u07-u08-u09-u10 (skipping the two units I sampled most lightly), of 287 `fb` steps, **72 (25%)** have a hint that contains the literal answer string.

**Pattern of leak:** Most are subtle (the hint includes a related grammatical fragment, e.g. `note:"Vowel ending or consonant ending?"` accompanying a hint that gives away the choice through morphological structure). Some are explicit:
- `unit-01.js:215`: `{type:"fb",s:"커피___ 아니에요.",a:"가",hint:"Check the last letter of the word."}` — hint passes; no leak.
- `unit-01.js:241`: `{type:"fb",s:"이것은 ___예요?",a:"뭐",hint:"Which question word fills the blank to ask about the object?"}` — hint passes; no leak.
- However, `unit-09.js`: `{type:"fb",a:"몰라요",hint:"모르다 is 르-irregular. The 르 doubles to ㄹㄹ before -아/어."}` — hint contains the literal phonemes (ㄹㄹ → 몰라) that produce the answer. Pattern leak.

This is below validator threshold but above pedagogical noise. **PP44 says hints must GUIDE; 25% guidance-vs-give is borderline.** Worth a sweep.

**Concrete fix:** Run `scripts/audit_hint_quality.mjs` with a stricter rule: hint must not contain any 3+ character substring of the answer. Manual review of the ~72 violations; rewrite hints to point to the *strategy* not the *answer*.

---

### IMPORTANT 4 — Past tense / future tense lessons skip the *no-subject* default that real Korean uses constantly.

**Citation:** Pica (1994) on input-output asymmetry; Long on pragmatic competence.

In u07 (past tense) and u09 (future tense), every example dialogue has an explicit subject: "저는 학교에 갔어요." But Korean conversation drops subjects ~70% of the time. A learner who has only ever produced "저는 X했어요" structures will sound robotic. The grammar reference at `grammar/korean.js` mentions subject-dropping in passing, but the lesson examples don't model it. A simple addition would be 2-3 "subject-dropped" examples per past/future tense lesson: A: "어디 갔어요?" B: "학교 갔어요." (no 저는).

---

### IMPORTANT 5 — A2-gap files have a different pedagogy from main units (much more teach-heavy).

The 19 `_temp_a2gap_L*.js` files (which u31-u33 import) average 17 teach cards but only 3-5 quizzes per lesson — that's a 4:1 teach-to-test ratio, vs the main units' ~1:1.5 ratio. These appear to be salvage/coverage lessons retrofitted to close TOPIK gaps. They will not give learners enough retrieval practice to internalize the new vocabulary. PP64 (teach-then-test) is technically met but the testing effect (Roediger & Karpicke) is starved.

**Concrete fix:** Add 3-5 more `fb_open` (per Critical 2) and 2 `mc` per gap-file lesson. Target a 1:1 teach-to-test ratio at minimum.

---

## Nice-to-have

1. **Pronunciation phonetic for non-romanized contexts.** `phonetic` field is present and helpful (e.g. `phonetic:"han-guk"`), but it's inconsistently formatted (some hyphen-separated, some not). Standardize.
2. **Audio cue for ㅂ/ㄷ/ㄱ-irregulars.** These verbs change shape audibly — a brief audio note ("listen for the 우 sound replacing ㅂ") would scaffold the pattern.
3. **Verumius-side examples in CRITICAL 1's repair lesson.** The brand has an AI tutor; this is the lesson that benefits most from voice modeling. Have Verumius demonstrate slow speech and clarification.
4. **Honorific drift quiz at end of A2.2.** A learner who's done u01-u33 should be able to answer: "You meet your friend's father for the first time. He's 50. He says 안녕! to you. What do you say back?" (Trick: he can use 반말 to a younger person, but you must reply in 해요체 minimum.)
5. **Mistake-tolerant `tr` (translation input) tasks.** Even one per lesson, with normalization for spacing and common particle drops. The technical lift is small; the pedagogical value is enormous.

---

## Cross-language patterns

(Reading the Korean slice in light of the panel's German pilot findings.)

- The German pilot reportedly flagged similar register-selection gaps. Korean is a **harder** case because the register system has more levels and Korean conversation actively drops subjects, so the social inference layer is wider. The interventions for German (more dialogue depth, more production tasks) apply *more strongly* to Korean.
- The agglutinative morphology in Korean is taught with the Train metaphor; this is the right move and could be borrowed by Japanese (which has identical concerns with verb stems + ending stacks). Recommend cross-pollinating the metaphor.
- The Sino-Korean morpheme bank is the single best feature of this curriculum and has no counterpart in the German build (which has compounding but not the same generative decoding load). Worth flagging to the design team that this is a Korean/Japanese/Chinese-shared feature that deserves its own engine support (a "morpheme bank" UI element on the Personal fluency page).

---

## Sign-off

- **Would I cite this in an SLA paper as a model implementation?** With caveats. The morphological scaffolding (Train metaphor, Sino-Korean LEGO bank), the honorific awareness from day one, and the spiraling discipline are genuinely strong — citable as positive examples. The dialogue-depth jump at u07 and the recognition-disguised-as-production `fb` pattern are exactly the gaps an SLA reviewer would flag. With Critical 1 and Critical 2 fixed, this is paper-citable.

- **Would I assign this to my undergrad SLA students as required reading?** Yes — as a "compare these design choices to Krashen, Swain, and Long" assignment. The transparency of the design (every lesson has a goals array; the spiral registry at the top of u01 is a curriculum-design artifact most courses hide) makes it pedagogically discussable in a way that black-box apps like Duolingo are not. I would assign u01-L2b (Train metaphor), u02-L2c (particle trio), and u09-L4 (speech levels) as the core reading.

---

*Reviewer note: I have not run the platform's own validators on this slice. All counts cited are from grep audits performed during this review. The platform's PP-rule validators are reportedly at 0 across 39,038 cards; my findings concern what those validators cannot mechanically catch — discourse-level adequacy, output adequacy, and pragmatic-competence development — exactly what the panel was assembled to surface.*
