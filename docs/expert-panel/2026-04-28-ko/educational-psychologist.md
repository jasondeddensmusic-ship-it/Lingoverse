# Audit: Educational Psychologist — Korean A1+A2 (Units 01-10 + 31-33)

**Slice:** Korean V2 Units 01-10 + 31-33 (`src/data/korean-v2/unit-01.js` … `unit-10.js`, `unit-31.js`, `unit-32.js`, `unit-33.js`)
**Date:** 2026-04-28
**Panel run:** EXPERT-PANEL-002 (Korean tier-1)
**Lenses applied:** Deci & Ryan (SDT) · Vygotsky (ZPD) · Wood/Bruner/Ross · Dweck · Bandura · Csikszentmihalyi

---

## Score (1-10)

- **Autonomy support: 8**
- **Competence support: 8**
- **Relatedness support: 5**
- **Scaffolding adequacy: 9**
- **Mindset framing: 9**
- **Dark-pattern absence: 10**
- **Overall: 8.2**

> The Korean curriculum's *cognitive* scaffolding is the best I have seen on this platform — the Verb Engine + LEGO morpheme work in U1-U3 is a textbook ZPD intervention. The motivational design is also clean: zero dark patterns, growth-mindset error feedback, principled handling of honorific anxiety. What pulls the overall score below the German pilot is one structural absence: the relatedness scaffold (Verumius / consistent cast) that carried German thins out almost completely after U1, leaving the Korean learner climbing a steeper grammar curve with less emotional companionship. This is fixable without re-writing content — and worth fixing, because Korean's affective load is uniquely high.

---

## Top 3 strengths

### 1. The Verb Engine (U1-L2b, U2-L2b) is gold-standard Vygotskian scaffolding

`src/data/korean-v2/unit-01.js:113-153` introduces conjugation through a single explicit metaphor: "🚂 STEM = the engine, 🚃 ENDING = the car that snaps on" (line 123), then immediately pays it off — at U2-L2b (`unit-02.js:60-115`) the same metaphor returns with the bright/dark vowel rule, and the deepDive ends with: *"You derived these yourself. You did not memorise them. That is the difference between a phrase learner and a language learner."* (`unit-02.js:102`)

This is precisely what Wood, Bruner & Ross prescribe: the scaffold is **named, made visible, then explicitly transferred** to the learner. By U10 (`unit-10.js:30-37`) the same train metaphor is being used to teach -기 전에 / -(으)ㄴ 후에 / -(으)ㄹ 때 with no hand-holding — the learner is now expected to apply the engine themselves. Bandura's mastery-experience principle is satisfied not by praise but by *capability*: at the end of U2-L2b, a learner literally can generate verb forms they have never seen. This is the single most psychologically powerful pedagogical move in the Korean A1+A2 corpus.

The LEGO-morpheme framing (`unit-01.js:262` "60% of Korean words are built from small meaning-blocks") is the parallel scaffold for vocabulary, paid off in U2-L1 jobs (`unit-02.js:8-32`) where 사 / 원 / 님 / 학 / 생 are reused across 10+ words. Same Vygotskian move, same payoff.

### 2. Wrong-answer feedback is genuinely growth-mindset framed

`src/data/vocabulary.js:87` defines the central error string: `le_not_quite:{en:"❌ Not quite", ...}`. Used at `LessonEngine.jsx:3607, 3717, 3802, 4022` — every quiz path. The user does not see "Wrong!" or "Incorrect!" They see **"Not quite — The answer is: 안녕히 계세요"** (with the Korean rendered in purple-accent at `LessonEngine.jsx:3607`, drawing the eye to the *correct form* not the failure). Praise for correct answers is similarly restrained: a single "✅ Correct!" — no "Amazing! Brilliant! Wow!" inflation that Dweck warns against. The audio is consistent: `src/audio.jsx:82-85` makes the wrong-answer sound a "soft low double-bump" — not a buzzer, not a shame klaxon. Csikszentmihalyi's flow precondition (immediate, non-punitive feedback) is met.

### 3. Honorific anxiety is scaffolded with rare warmth, and dark patterns are absent

Korean's honorific system is the single biggest affective pressure point for adult learners. The curriculum handles it with active reassurance:

- `unit-01.js:92` (Tip "🎀 You're Speaking Politely"): *"해요체 is safe for 95% of daily situations. Polite but not stiff. Perfect for stores, cafés, new people."* The deepDive explicitly demystifies the rule: *"Korean uses VERB ENDINGS (grammar, not vocabulary). Same sentence, different ending = different respect level. Age determines EVERYTHING... It's not rude. It's NECESSARY."*
- `unit-03.js:182` (Tip "🌱 반말: It Exists. Don't Use It Yet."): *"The correct order: 1. 해요체 (you're here now): master this first... Most Korean speakers will correct you kindly. But they'll think more of you if you use 해요체 correctly than if you try 반말 too soon."* This is exactly what an adult learner with first-language perfectionism needs to hear. Bandura's self-efficacy: *you have a safe default; you cannot accidentally insult someone if you stay here.*
- `unit-08.js:147-160` builds an entire lesson around `걱정하지 마세요` (don't worry) — teaching the learner the language to reassure others, which inversely cues the curriculum's attitude toward the learner's own anxiety.

On the dark-pattern axis: `src/App.jsx:132` initializes `streak: 1` and the value is **never incremented anywhere in the codebase** (verified: zero increment sites for `user.streak`, only initialization in `App.jsx:132,369` and read-only display in `LessonEngine.jsx:1143,1180`, `Home.jsx:151`, `Profile.jsx:58`). There is no scheduled job checking "did the user log in today?", no streak-break notification, no "you're about to lose your 47-day streak!" guilt-trip. Whether deliberate or accidental, the user is freed from the most pervasive operant-conditioning trap in modern language ed-tech. Combined with zero push notifications and no leaderboard, this product would survive a critical journalist's audit on user manipulation without a flinch.

---

## Critical findings (must fix)

### CF-1 | `src/data/korean-v2/unit-01.js:38-385` (Unit 1 character intro) → `unit-02.js` onwards (drop-off) | Missing relatedness scaffold; Verumius cast / Korean equivalent never lands

```
unit-01.js:5  title:"안녕하세요!"  sub:"Greetings, 이다 & Being"
unit-01.js:40 desc:"안녕\n→ peace\n\nYour first Korean words. Greetings are about respect."
```

The Korean curriculum opens with 19 references to 민수 / 사라 in unit-01 — a hint of a cast — and then drops to 2 in unit-02, 0-3 in units 03-10. There is no Verumius equivalent narrating the journey. The opening intro at `unit-01.js:40` is purely instructional ("Your first Korean words. Greetings are about respect.") — no character is *arriving* anywhere. Compare the German pilot (`german-v2/unit-01.js:9`): *"Verumius arrives in Germany for the first time. But things don't go as planned…"* The German learner gets a fellow traveler; the Korean learner gets a textbook.

**SDT principle violated:** Relatedness. Korean's affective load is *higher* than German's (script unfamiliarity + honorific anxiety + perfectionism trap with particles), so the curriculum needs *more* identification scaffolding, not less. Bandura: vicarious learning through a fumbling-but-improving model is exactly what reduces self-efficacy paralysis in the early-intimidation phase.

**Suggested fix:** Either (a) wire Verumius into Korean A1+A2 with a Seoul/Busan arc — Verumius mispronounces 안녕히 가세요 vs 계세요, gets gently corrected, learns honorifics through embarrassment-then-recovery — or (b) commit to a Korean-native cast (민수 + 사라 + 지영 + a Korean grandmother figure) and *use them consistently* across U1-U10 lesson intros so each lesson has a "what's happening this episode" hook. Either works psychologically; what doesn't work is the current half-presence. The funFacts already do part of this work emotionally (Sejong inventing Hangul at `unit-01.js:262`, 편의점 culture at `unit-10.js:111`) — they need a recurring human presence to anchor to.

### CF-2 | `src/App.jsx:132` + `src/data/vocabulary.js:143` (`ach_on_fire`: "3-day streak") + `LessonEngine.jsx:1180`, `Home.jsx:151`, `Profile.jsx:58` | Streak surface is unkept-promise; the dark-pattern absence is also a pedagogical absence

The streak is hard-coded to 1 and never moves. The lesson-completion screen still renders `🔥 1 Day streak` (`LessonEngine.jsx:1180`); Profile shows `1 Days` next to the flame icon (`Profile.jsx:58`); Home shows `1 Day` (`Home.jsx:151`); the achievement `streak_3` ("3-day streak", `vocabulary.js:143`) is unreachable.

This is the same finding the German pilot's Cognitive Psychologist flagged: dark-pattern *absent* is good, but a frozen UI element that *promises* progress and never delivers is worse than removing the surface. From SDT: undermines competence (the user can't tell if their daily practice is "working"); from Bandura: a mastery indicator that never moves is a non-mastery experience repeated nightly; from Dweck: implicitly tells the learner that effort doesn't change the metric.

**Suggested fix (one of three, in order of psychological soundness):**
1. **Remove the streak UI entirely** (delete the flame stat from done-screen + Home + Profile). Cost: 4 lines. Benefit: clean.
2. **Implement it non-punitively**: increment on any day with ≥1 lesson, never decrement, never notify. The streak becomes a *trophy of consistency*, not a *threat of loss*. This preserves the dark-pattern-absence stance.
3. **Replace with a non-time metric**: "lessons this week" or "concepts mastered" — tied to *learning* rather than *showing up*. Highest pedagogical value.

Whichever path: the current frozen-1 state is incoherent and has to go.

### CF-3 | `src/data/korean-v2/unit-31.js`, `unit-32.js`, `unit-33.js` | A2.2 vocabulary expansion units have placeholder structure with no intro framing

```
unit-31.js:13-17  lessons:[LESSON_1, LESSON_2, LESSON_3, LESSON_4, LESSON_5, LESSON_6, COVERAGE_U31]
unit-31.js:14-15  title:"생활 필수 어휘 1"  sub:"Body, Family, Emotions, Time & Home"
```

Units 31-33 are 20-21 lines each — pure import wrappers. The lessons themselves (e.g. `_temp_a2gap_L01.js:7-9`) have intros like *"Learn essential vocabulary for talking about the body, health, hygiene, and daily self-care routines."* — clinical, not motivational. Compare U1 intros which open with a hook ("Your first Korean words"). Unit titles like "생활 필수 어휘 1" ("Essential life vocabulary 1") read as catalog labels, not as episodes.

**SDT principle violated:** Autonomy + relatedness. A learner who has just finished U10's "Daily Life, 반말 & A2 Complete" arc lands in U31 with zero contextual carry-over. There's no "you've graduated to A2.2 — now Verumius/Minsu has been in Korea for 6 months" framing.

**Suggested fix:** Add unit-level intro frames to U31-U33 — a `title` and `sub` that tells a story-of-skill rather than naming the lexical bin, plus a 2-line desc on the first lesson tying the new content to where the learner just was. Mechanically this is one new file edit per unit.

---

## Important findings

### IF-1 | `unit-01.js:42-46` (Lesson 1, steps 2-4: three back-to-back grammar tips before any retrieval) | Cognitive load spike at the cold-start moment

The opening sequence is: teach 안녕하세요 → tip "How Korean Is Different From English" (5 bullets, deepDive 200+ words) → tip "Korean Verbs End in -다" (deepDive 100+ words) → only THEN the first MC. A new learner — likely intimidated by Hangul, confronting SOV order, and trying to read 안녕하세요 for the first time — gets ~600 words of meta-language before any retrieval success.

**Csikszentmihalyi flow:** the challenge has spiked above skill before any mastery beat. Bandura: the first successful interaction (the MC at step 5) comes too late — by then the learner may have already decided this is "too hard."

**Suggested fix:** Pull the "Korean Verbs End in -다" tip to AFTER the first 4 successful MC/match retrievals. Let the learner *get something right* about 안녕하세요 / 안녕히 가세요 / 안녕히 계세요 first, then introduce the meta-rule. Same content, different sequence — flow protected.

### IF-2 | `unit-09.js:67,75` and similar | "Which is WRONG?" quiz framing flips error from data to identity

```
unit-09.js:67  q:"Which -아/어서 sentence is WRONG?"
unit-09.js:75  q:"-아/어서 + imperative is wrong. Which connector allows..."
```

The MC stem capitalizes "WRONG" and asks the learner to identify wrongness as a quiz answer. This is a small but real Dweck violation: the cognitive task is fine (discriminate which sentence breaks the rule), but the *framing* makes "wrong" the focal noun rather than the rule. A learner whose own answer comes back marked with the coral color and the word "wrong" highlighted in the question stem is being cued twice: identity-level wrongness is *the topic of study*.

**Suggested fix:** Reframe to "Which sentence breaks the -아/어서 rule?" or "Which is *not* allowed with -아/어서?" Same question, no identity-loaded vocabulary. ~6 quiz stems across U7-U10.

### IF-3 | `_temp_a2gap_L01.js:43-54` and similar | A2 expansion lessons skip the "🎯 What You Can Now Do" capstone tips

The earlier units (U1-L2b at `unit-01.js:152-153`, U2-L2b at `unit-02.js:102`) close with explicit "🎯 What You Can Now Do" tips that Bandura calls *competence enactment* — the learner is told what skill they have just acquired. A2.2 expansion lessons (U31-U33) close with a coverage block (`_coverage_u31.js`) and no parallel summary moment. The Bandura beat is missing.

**Suggested fix:** Add a closing tip step to each A2 vocab-expansion lesson: 30 words, naming the new capability ("You can now talk about your body in Korean / describe your home / express basic emotions"). Trivial mechanically; meaningful psychologically.

### IF-4 | `unit-01.js:88` (U1-L2 goal: "Learn about Korean politeness levels") combined with unit-01.js:108-109 (no production-mode quiz on -이에요/예요 split) | Goal promised, retrieval not delivered

The L2 intro promises "Understand the topic marker 은/는 / Learn about Korean politeness levels" but the lesson's quizzes are predominantly recognition (mc) on the copula split. The learner reads about politeness levels in tip-form and never has to *produce* the choice in a meaningful context. SDT competence: a goal stated but not retrieval-tested becomes a vague feeling rather than a verified skill.

**Suggested fix:** Add 2-3 fb steps where the learner produces 이에요 vs 예요 in context (already partially present at `unit-01.js:95-99`, but the learner can win by surface pattern — last-letter check — without engaging the politeness frame). One drag_fill that mixes register choices would close the loop.

### IF-5 | `unit-10.js:80-99` (U10-L3 반말 lesson) | Critical "social rules" Tip is buried mid-lesson, not at the start

`unit-10.js:86` Tip "⚠️ 반말 Social Rules. CRITICAL" appears *after* the learner has already practiced converting verbs to 반말 — the danger context comes after the skill demo. For a learner with honorific anxiety, this means they may have spent 5 minutes producing 반말 forms before being told "Using 반말 without permission = RUDE."

**Suggested fix:** Move the social-rules Tip to step 2 (right after the intro), not step 7. Establish the social envelope before the production. Same content, sequence inverted, anxiety reduced.

---

## Sign-off

- **Would I recommend this to my own students learning Korean?** **Yes**, with the caveat that I would warn them that the early-intimidation phase has less companionship than the cognitive scaffold deserves — a self-motivated learner will thrive; an anxious learner may need an external accountability partner that the app does not provide. Once past U3, the Verb Engine + LEGO morpheme system is a genuine pedagogical asset I would recommend over most commercial alternatives.
- **Could a journalist write a critical exposé about user manipulation here?** **No.** Zero push notifications. Zero leaderboards. Streak frozen at 1 (the unkept-promise problem is real but not extractive). Praise is restrained, error feedback is growth-framed, no IAP / paywall / freemium guilt mechanics observed. The product is morally defensible. The work to do is making it *psychologically warmer*, not making it less manipulative — it is already not manipulative.

---

**Net read for the synthesis layer:** Korean's strengths are different from German's — Korean's *cognitive* scaffolding (Verb Engine, LEGO morphemes, honorific reassurance) is *better* than German's. Korean's *emotional* scaffolding (cast continuity, intro framing, A2.2 contextual carry-over) is *thinner* than German's. The streak unkept-promise and the buried 반말 social-rules tip are independent fixes that pay disproportionate dividends. None of the findings require corpus rewrites — they're all sequence, framing, or wrapper-level.
