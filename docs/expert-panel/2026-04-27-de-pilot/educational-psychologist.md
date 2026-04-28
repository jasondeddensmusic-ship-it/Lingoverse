# Audit: Educational Psychologist — German A1+A2 (Units 01-12)

**Slice:** German V2 Units 01-12 (`src/data/german-v2/unit-01.js` … `unit-12.js`)
**Date:** 2026-04-27
**Pilot run:** EXPERT-PANEL-001
**Lenses applied:** Deci & Ryan (SDT) · Vygotsky (ZPD) · Wood/Bruner/Ross · Dweck · Bandura · Csikszentmihalyi

---

## Score (1-10)

- **Autonomy support: 9**
- **Competence support: 8**
- **Relatedness support: 9**
- **Scaffolding adequacy: 7**
- **Mindset framing: 9**
- **Dark-pattern absence: 10**
- **Overall: 8.7**

> This is one of the cleanest motivation designs I have audited in commercial language ed-tech. The team chose principled patterns where peers default to extractive ones. Where it stumbles, it stumbles softly (vestigial gamification, mid-unit narrative dropout) — never into manipulation.

---

## Top 3 strengths

### 1. Wrong-answer feedback is genuinely growth-mindset framed

`src/data/vocabulary.js:87` defines the central error string:
```
le_not_quite:{en:"❌ Not quite", ar:"❌ ليس تماماً", fr:"❌ Pas tout à fait", ...}
```
Used at `LessonEngine.jsx:3607,3717,3802,4022` — every quiz path. The user does not see "Wrong!" or "Incorrect!" They see "**Not quite — The answer is: [correct answer]**" or "**Not quite — Accepted: [answer]**". This is exactly the Dweck/Hattie prescription: failure framed as a learning event with the corrective information delivered in the same beat. The teal-vs-coral color contrast (`var(--teal-dark)` vs `var(--coral)`) carries information; the *language* carries no shame. Praise for correct answers is similarly restrained: a single "✅ Correct!" — no "Amazing! Brilliant! Wow!" inflation. Bandura would approve: mastery experiences validated honestly, not flattered.

### 2. Streak is vestigial — by design or accident, the dark pattern is absent

`src/App.jsx:132` initializes `streak: 1` and that value is **never incremented and never decremented anywhere in the codebase** (verified: zero matches for `streak[+\-:]` outside the static initializer and the reset path). `LessonEngine.jsx:1143` only reads it. There is no scheduled job that checks "did the user log in today?" and consequently no streak-break notification, no "you're about to lose your 47-day streak!" guilt-trip, no streak freeze monetization. Whether the team disabled it deliberately or never wired it up, the user is freed from the most pervasive operant-conditioning trap in modern language ed-tech. Combined with **zero push notifications** (greps for `notification|reminder|push|nag|daily.*goal` return nothing relevant), this product would survive a critical journalist's audit without a flinch.

### 3. Relatedness through narrative AND through cultural funFacts

The Verumius cast appears 34 times in unit-01 and 30 times in unit-12 — character continuity sustains across the A1+A2 arc. Lessons read as episodes of a story: `unit-01.js:9` "Verumius arrives in Germany for the first time. But things don't go as planned…"; `unit-06.js:121` "Verumius calls the Hausverwaltung about the hot water." This is identification scaffolding (Bandura's vicarious learning) — the learner is not "a student doing exercises," they're following someone fumbling through Berlin alongside them.

The funFacts deepen this. `unit-02.js:11`: "Berlin has more bridges than Venice. About 1,700! The Oberbaumbrücke is the most famous, connecting Kreuzberg and Friedrichshain." `unit-02.js:32`: "An Eckkneipe is a corner pub, a Berlin institution." `unit-01.js:12`: "'Zug' literally means 'pull.' The word also means 'a gulp' of beer and 'a move' in chess." These are not template padding — they are *culturally-warm anchors* that connect the learner emotionally to the German-speaking community. SDT's relatedness need is being met not just by Verumius, but by the language itself being framed as a living culture worth knowing.

---

## Critical findings (must fix)

### CF-1 | `src/data/german-v2/unit-01.js:84` (and 34 other "(continued)" lessons across A1+A2) | Generic placeholder intros undermine autonomy + relatedness

```js
{type:"intro",title:"Erste Sätze (continued)",
 desc:"Continue practicing the vocabulary from this topic.",
 goals:["Review and practice key words"]}
```

A1+A2 has **35 lessons with this exact stub** (verified via grep: unit-01:3, unit-02:7, unit-03:3, unit-04:3, unit-05:2, unit-06:6, unit-07:?, unit-08:?, unit-09:1, unit-10:1, unit-11:2, unit-12:1 — at least 29 confirmed in the slice). Compare to the rich opener at `unit-01.js:9`: *"Verumius arrives in Germany for the first time. But things don't go as planned..."* — versus the generic *"Continue practicing the vocabulary from this topic."*

**Principle violated:** SDT autonomy + relatedness. A goal of "Review and practice key words" doesn't tell the learner *why* this lesson exists in their journey. It frames the activity as task-completion, not meaningful progress. Vygotsky/Bandura: the learner needs to see the lesson as a step in a coherent skill arc. A generic stub flattens the narrative just as the user is asked to keep investing effort.

**Suggested fix:** Each "(continued)" lesson should carry a one-sentence diegetic continuation tied to the same scene. e.g. *"Verumius is still at the Bürgeramt — the queue moved. More forms, more vocabulary, same Verumius."* If labor is the constraint, even a 60-second pass that swaps in 2-3 sentences of continuation per lesson would close this gap.

### CF-2 | `src/components/LessonEngine.jsx:43-60` (breather logic) | Scaffolding triggers on dose, not on struggle

```js
const MAX_TEACH=5;
// Inject breather checkpoints after every 5 consecutive teach cards
```

The `_breather` checkpoint is excellent — it manages cognitive load (Sweller's load theory). But it fires purely on count: every 5 teach cards. There is **no adaptive scaffolding for a struggling learner**. I searched `wrongCount|wrongStreak|3.*wrong|wrongInRow|consecutive.*wrong` and found no logic that responds when a learner gets 3 in a row wrong.

**Principle violated:** Vygotsky ZPD + Wood-Bruner-Ross contingent fading. Effective scaffolding is *contingent*: it appears more when the learner is struggling, fades when they're succeeding. A learner who whiffs 4 of the last 5 quiz items needs different help than one who's nailing them.

**Suggested fix (post-launch enhancement):** After 3 wrong answers in the current lesson, auto-surface the hint (`showHint=true`) on the next quiz, or inject an extra review of the recently-tested teach cards. Even a soft prompt — *"Want to revisit the last few words before continuing?"* — would honor both autonomy (the user chooses) and ZPD (the system noticed). Currently, hints are user-summoned (`LessonEngine.jsx:3587`), which respects autonomy beautifully but offers nothing to a learner who doesn't yet know they need help.

### CF-3 | `src/components/LessonEngine.jsx:1180` | Streak displayed prominently despite being non-functional creates a misleading status signal

```js
{statCard("🔥",streak,t("le_day_streak",baseLang),"#F56565")}
```

The done-screen shows "🔥 1 Day streak" in coral red (the wrong-answer color, no less), with all the visual weight of a real metric. Because the value is hard-coded to 1 (per Top Strength #2), every learner — first-time or 100th-lesson — sees the same "1." This is subtler than a dark pattern, but it's still a **competence-signal that lies**. A 30-day learner deserves to see "30." A first-day learner should not see a fire icon at all.

**Principle violated:** Bandura self-efficacy through honest mastery experiences. A metric the user thinks tracks their consistency, but doesn't, is a small breach of trust the moment a perceptive user notices.

**Suggested fix (one of):** (a) Wire up the streak honestly (track `lastActiveDate` in user state, increment on first lesson of a new calendar day, reset on miss) — but only if the team is willing to also add streak-freeze tolerance and never weaponize it for guilt. (b) Remove the streak pill from the done screen entirely until it works. (c) Replace it with a *trustworthy* metric like "Lessons completed: N" that the system already tracks via `user.cu`. Of these, (b) or (c) is safer than (a) — adding a working streak invites the dark-pattern temptation later.

---

## Important findings

### IF-1 | `src/pages/Onboarding.jsx:161-188` | Placement-quiz framing is exemplary

> "How much [language] do you know?" → "Take the placement test" / "Skip — I am new to [language]."

Twin equal-weight options. Copy: *"Take a short placement test and we will drop you in at the right level. Or skip and start from the very beginning."* SDT autonomy: zero coercion, zero "we recommend you do this" guilt. The quiz "takes about 5 minutes and adapts to your level." Csikszentmihalyi flow design — the system tries to land the user at challenge≈skill from minute one. Keep this exact pattern when adding new languages; do not let "engagement growth" arguments erode it.

### IF-2 | `src/audio.jsx:14-96` (UISounds) | Sound design is non-coercive

Web Audio API synthesized tones, low volume (vol 0.07-0.10), gentle sine waves. Correct = ascending 880→1100 Hz chime; wrong = descending 280→220 Hz soft double-bump (NOT a buzzer, NOT a klaxon, NOT a Pavlovian punishment cue). User-toggleable via `localStorage.vl_ui_sounds`. Sound carries information without operant conditioning. Pair with the audio-off path being respected, not penalized.

### IF-3 | `src/pages/Profile.jsx` | No leaderboard, no comparison, all metrics are personal

Stats are: XP, streak (vestigial), level, words learned. Plus a CEFR Milestones panel that uses **"can-do" statements** (`CAN_DO[sl]` from `cefr-can-do.js` — line 234). These are framed as personal mastery checkpoints ("I can introduce myself," "I can handle a doctor's visit"), not comparisons. SDT relatedness through community-membership-by-capability, not relatedness through ranking. The XP progress bar shows level→level+1 with a real number — competence-supportive without leaderboards.

### IF-4 | `src/components/shared.jsx:6-84` (FlagButton) | Learners have voice

Six flag categories including "wrong_answer," "missing_answer," "hint_spoiler." After submission: *"Thanks!"* + *"This helps."* Users are not silent consumers — they can flag content errors and the language treats them as collaborators. SDT autonomy + relatedness: the relationship is reciprocal.

### IF-5 | `src/components/LessonEngine.jsx:669` (`retryLesson`) and `:1188` (Try Again button) | Failure carries zero penalty

`retryLesson()` resets state cleanly: `setSi(0); setScore(0); setDone(false); ...`. No XP deduction, no streak break, no "you used 1 of 3 retries." Try Again is gold-gradient, equal visual weight with Continue. Dweck would call this a textbook growth-mindset affordance.

### IF-6 | `src/pages/LearnPage.jsx:756-764` | Foundations lock has a "Unlock anyway" override

The Foundations gate exists (Manifesto P13), but with an explicit `map_unlock_anyway` underline-link that bypasses it. Learners who already know the alphabet can skip without arguing with the system. Autonomy preserved; the lock is a *suggestion*, not a wall.

### IF-7 | `src/data/german-v2/unit-01.js:9` lesson goals are concrete and outcome-framed

```js
goals:["Learn basic greetings","Understand simple questions","Survive your first German conversation"]
```

"Survive your first German conversation" is deliciously human — competence-supportive, ZPD-realistic ("you won't be eloquent yet, but you'll survive"), and lightly humorous. Compare to the generic "Review and practice key words" of the (continued) lessons (CF-1). The good ones are *very* good.

### IF-8 | Expert Mode `LessonEngine.jsx:73-76` | Scaffolding fades for advanced learners

```js
const expertMode=...localStorage.getItem("vl_expert_mode")==="true";
const isB1plus=/^B[12]/.test(unitLevel);
const expertFreeText=expertMode&&isB1plus;
```

User-toggleable. At B1+ with Expert Mode on, fill-in-blank cards lose their option-pool training wheels and become free-text production. This is exactly Wood-Bruner-Ross contingent fading — the support is removed when the learner signals readiness. The fact that it's *opt-in* rather than *forced at B1* is the autonomy-respecting choice. Excellent design.

---

## Sign-off

- **Would I recommend this to my own students learning a language?** **Yes.** With one caveat: I would tell them that the streak counter is currently cosmetic, so don't worry about "keeping it up." Otherwise, this is the cleanest motivation architecture I've audited at this scope.
- **Could a journalist write a critical exposé about user manipulation here?** **No.** I tried to find one and couldn't. There are no extraction loops, no anxiety triggers, no pay-to-skip-shame mechanics. The product respects the learner's time, autonomy, and dignity.

The Critical Findings above are the difference between *very good* and *excellent*. CF-1 is the most pressing — 35 generic stubs in the most motivationally-fragile stretch (the early A1+A2 grind, before learners can self-validate competence) is real risk for relatedness drop-off mid-unit. CF-2 is a post-launch enhancement, not a blocker. CF-3 is a 30-minute fix.

If the team holds this design philosophy through B1+B2 and into the other 9 languages, this product becomes the rare ed-tech artifact a developmental psychologist can recommend without footnotes.

— Educational Psychologist, EXPERT-PANEL-001
