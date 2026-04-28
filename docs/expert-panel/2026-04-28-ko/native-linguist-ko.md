# Audit: Native Linguist (ko) — Korean A1+A2 (Units 01-10 + 31-33)

Date: 2026-04-28
Slice: Korean A1.1 → A2.2 (13 units, lessons up through `kou10l4`)
Reviewer: Native Korean linguist (Seoul, MA/PhD-equivalent), 10+ yrs L2 teaching

---

## Score (1-10)

- **Naturalness:** 7.5
- **Register consistency:** 6.5
- **Cultural accuracy:** 7
- **Frequency calibration:** 8
- **Pragmatic realism:** 7
- **Script fidelity (Hangul/Hanja):** 8.5
- **Overall: 7.3**

This is a serious, thoughtfully-built A1+A2 corpus. The morpheme-decomposition spine, the "Train" metaphor for stem+ending, the explicit handling of 르/으/ㄷ/ㅂ irregulars, and the 8-phase Hangul foundation are genuinely impressive — much better than most commercial apps. But on close native-speaker reading there are real problems: a register slippage in honorifics, several POS mistags on grammar particles, a handful of strained or unidiomatic example sentences, two outright factual errors in funFacts, and a recurring "all hanja, all the time" framing that overplays Sino-Korean etymology where it doesn't belong.

I would NOT yet sign off. Most issues are surface-level and fixable in one focused pass.

---

## Top 3 strengths

1. **The morpheme/LEGO spine is genuinely original and pedagogically sound.** Teaching 학+생, 의+사, 회사+원, 약+국, 병+원 with an explicit reusable-block frame is exactly how a literate Korean reader processes the language. By unit 5–10 a learner has a real working set of ~15 Sino-Korean morphemes. This is better than most textbooks.
2. **The Hangul Foundations (Phases 0–10) are excellent.** Phase 0 introduces the block system explicitly, Phase 5 isolates ㄹ, Phase 6 starts batchim with stable finals only (ㄴ ㅁ ㄹ ㅇ), Phase 8/9/10 deal with aspirated/tense/sound-rules in proper sequence. The vertical/horizontal vowel layout rule and the ㅏ/ㅓ stroke-direction discrimination are textbook-grade.
3. **Irregular verb classes are correctly named and properly previewed.** ㄹ, ㅂ, ㄷ, 르, 으, ㅎ, ㅅ all show up with auto-detect lists in `korean-conjugation.js` (KNOWN_BIEUP, KNOWN_DIEUT, etc.) that match standard Korean linguistic descriptions. The "you've seen 더워요/추워요 — now name the rule" sequencing in U5 → U7 is exactly right pedagogically.

---

## Critical findings

### C1. POS mistag epidemic on Korean particles and copula
Most Korean grammar pieces are tagged `pos:"part"` — fine. But many are mistagged.

- [unit-01.js:50] `안녕히 가세요` tagged `pos:"intj"` ✓ (correct)
- [unit-01.js:89] `저` (I, polite) tagged `pos:"pron"` ✓
- [unit-01.js:90] `는 / 은` tagged `pos:"part"` ✓
- [unit-01.js:93] `이에요 / 예요` tagged `pos:"aux"` — **questionable**. The Korean copula 이다 is traditionally classed as 서술격 조사 (predicative particle) in 학교문법 or as a verb (지정사) by some linguists. Calling it `aux` (auxiliary) is a pedagogical compromise but inconsistent with the rest of the corpus which tags 있다/없다 as verbs.
- [unit-01.js:189] `아니요` (no) tagged `pos:"part"` — **WRONG**. 아니요 is a stand-alone interjection / response word (감탄사), not a particle. Should be `intj`. Compare: 네 is correctly tagged `intj` at [unit-01.js:188].
- [unit-01.js:191] `아니에요` tagged `pos:"aux"` — same copula issue.
- [unit-01.js:212] `안` (pre-verb negation) tagged `pos:"adv"` ✓ (correct, this IS an adverb)
- [unit-01.js:235] `이것` tagged `pos:"pron"` ✓
- [unit-01.js:236] `뭐` tagged `pos:"pron"` ✓
- [unit-01.js:286] `만나서 반갑습니다` tagged `pos:"pron"` — **WRONG**. This is a fixed expression / greeting phrase. Should be `intj` (matches 잘 부탁합니다 at [unit-01.js:341] which IS tagged `intj`).
- [unit-01.js:287] `이름이 뭐예요?` tagged `pos:"aux"` — **WRONG**. This is a sentence/question, not an auxiliary. Should be flagged as a phrase, not a single POS.
- [unit-02.js:11] `선생님` tagged `pos:"part"` — **WRONG**. 선생님 is a noun. Should be `noun`. (Compare 학생 at line 10, correctly tagged `noun`.)
- [unit-02.js:37] `있어요` tagged `pos:"noun"` — **WRONG**. 있다 is a verb (or, in some traditions, a 형용사 when meaning "to exist"). Should be `verb`.
- [unit-02.js:38] `없어요` tagged `pos:"noun"` — **WRONG**, same issue.
- [unit-02.js:46] `물` (water) tagged `pos:"noun"` ✓
- [unit-02.js:55] `질문` tagged `pos:"noun"` ✓ but the **funFact says "SINO-KOREAN: 질 (matter) + 문 (ask)"** — actually 질문 is 質 (quality) + 問 (ask). Correct in the body but inconsistent across notes vs funFacts. Several Sino-Korean glosses across the corpus mix up 質/秩, 件/間, 員/院.
- [unit-02.js:166] `말하다` tagged `pos:"verb"` ✓
- [unit-02.js:244] `도` (also/too) tagged `pos:"noun"` — **WRONG**. 도 is a particle (보조사). Should be `part`.
- [unit-02.js:265] `에` (location particle) tagged `pos:"noun"` — **WRONG**. Should be `part`.
- [unit-02.js:270] `지금` tagged `pos:"noun"` ✓ (it IS a noun in Korean grammar, even though it functions adverbially)
- [unit-03.js:34] `전화번호` tagged `pos:"num"` — **WRONG**. It's a noun.
- [unit-07.js:336] `시간 있어요?` tagged `pos:"pron"` — **WRONG**, sentence not a pronoun.
- [unit-09.js:14] `이번 주말` tagged `pos:"pron"` — **WRONG**, this is a noun phrase.
- [unit-10.js:42] `방` tagged `pos:"noun"` ✓
- [unit-10.js:51] `신발을 벗다` tagged `pos:"verb"` ✓ (the phrase as a whole is verbal)

**Severity: HIGH.** This breaks the POS-color system the platform depends on, AND undermines learner trust. The word card system shows POS color tags; particles colored as nouns will be visually inconsistent.

### C2. 만나서 반갑습니다 — register mismatch in unit 1
[unit-01.js:286] `만나서 반갑습니다` is taught at A1.1 unit 1 alongside 안녕하세요, 감사합니다, 죄송합니다. The note says "Used in first meetings. Formal and warm." But 만나서 반갑습니다 is **합쇼체** (deferential-formal), while everything else in U1 (안녕하세요, 감사합니다 are also 합쇼체-derived but feel less stiff in modern usage) is being framed as 해요체.

The contemporary natural register for "nice to meet you" with a peer or stranger of similar status is **만나서 반가워요** (해요체), not 만나서 반갑습니다. The 합쇼체 form is correct in formal job interview / business card / stage introduction contexts but feels very stiff in casual settings. Lesson 1 doesn't flag this distinction — it just teaches 만나서 반갑습니다 as the default "nice to meet you," which will produce learners who sound oddly formal at cafes and parties.

**Fix:** Teach 만나서 반가워요 as the primary form in U1, with 만나서 반갑습니다 introduced later as the formal-business variant. (Unit 9 L4 does eventually introduce both speech levels — but by then the learner has been saying 반갑습니다 for 8 units.)

### C3. 잠시만요 — meaning is fuzzy and the example dialogue is unnatural
[unit-01.js:290] teaches 잠시만요 with example:
> A: 안녕하세요!\nB: 잠시만요!\nA: 네!

This is **not natural Korean.** A native speaker would not respond to 안녕하세요 with 잠시만요. 잠시만요 is used (a) to ask someone to wait (e.g., on the phone, or at a counter), or (b) as "excuse me, coming through" in a crowded space, or (c) as "one moment please" mid-task. It is never a response to a greeting.

A natural example would be:
> A: 저기요, 화장실이 어디예요?\nB: 잠시만요... 저쪽 끝에 있어요.

Or:
> [phone] A: 여보세요? B: 네, 잠시만요. 김 과장님 바꿔드릴게요.

**Severity: HIGH** — a learner will produce wrong-context Korean.

### C4. The 안녕하세요 etymology in U1 is overstated
[unit-01.js:42] funFact says: *"Sino-Korean compound: 안녕 (peace) + 하 (do) + 세요 (please/honorific)"* and the deepDive says *"Literally: 'Do you have peace?'"*

The decomposition is etymologically defensible but pedagogically misleading at A1. 안녕하세요 in modern Korean is parsed by native speakers as a fused unit — not as a compositional question "do you have peace?" Teaching it as such gives learners a false analytical instinct. (Compare: native English speakers don't parse "goodbye" as "God be with ye" even though that's the etymology.)

A more accurate framing: "Etymologically related to 안녕 (well-being), but in modern use a fixed greeting that doesn't get analyzed compositionally." The current framing primes learners to over-analyze and produce constructions like 안녕세요 or 안녕하 by analogy.

### C5. 우리 엄마 / 우리 나라 — explanation is partially wrong
[unit-05.js:57] deepDive: *"Korean uses 우리 (our) where English uses 'my'... The logic: family and community are SHARED. 'My house' belongs to everyone in it..."*

This is **collectivism-as-stereotype**, and it's not quite right. The actual rule is more specific:
- 우리 is used for things belonging to a group the speaker is part of: 우리 엄마, 우리 학교, 우리 회사, 우리 나라, 우리 집.
- 제/내 is used for items NOT shared with others: 제 가방, 제 휴대폰, 제 이름.
- The rule is about **shared membership**, not "Korean culture is collectivist." A Korean only child still says 우리 엄마 — there's no one to share her with. The "our" reflects an in-group / out-group framing in Korean grammar, not a metaphysical claim about whose mother she is.

The note also misrepresents 나의 엄마 as "sounding cold, even selfish." It's not selfish — it's just stylistically marked (more poetic / written / introspective). Korean writers absolutely use 나의 어머니 in essays without sounding cold.

### C6. 누나/오빠/형/언니 cross-gender extension example
[unit-01.js:337] funFact about 오빠 says it's "how female fans call male idols!"

Correct, but the ONLY example given for "outside family" usage is K-pop. This reinforces the K-pop-as-Korean-culture stereotype the audit asked me to flag. In reality, 오빠 is used by women to address: any close older male (boyfriend, close colleague slightly older, husband even, friend's older brother). The K-pop framing is a slice, not the whole picture.

Same issue at [unit-05.js:42] — *"오빠! the most common word shouted at K-pop concerts."* This is true but reductive. K-pop is mentioned 4+ times in U1+U5 cultural notes; adjust to balance.

### C7. 께서 (honorific subject particle) is missing from A2
The honorific subject particle 께서 is the most common honorific marker in everyday Korean, used whenever a Korean person speaks of an elder/superior in the third person. A grep across A1+A2 (units 01–10, 31–33) shows 께서 appears ZERO times in dedicated teaching. It first appears in unit-20 (B1) in passing.

But 께서 should be acknowledged at A2 because it's required to talk about parents, teachers, bosses, grandparents:
> 할머니께서 진지를 드세요 = Grandmother is having her meal (honorific).

Korean learners who have done all 13 A1+A2 units still cannot construct the most basic honorific subject sentence. They've been told to say *"우리 할아버지가 건강하세요"* — which works conversationally but is not actually how a careful Korean speaker honors a grandparent in formal speech. (Should be *우리 할아버지께서 건강하세요*.)

**Severity: MEDIUM-HIGH.** Korean honorifics are the audit's stated lens. This is a real gap.

---

## Important findings

### I1. 사 in 의사/요리사/간호사 vs 회사원 — etymology slip
[unit-02.js:20] tip says *"You've seen 사 (expert) THREE times: 의사, 요리사, 간호사."* This conflates 師 (teacher/master) and 士 (specialist/scholar). 의사 is 醫師, 요리사 is 料理師, 간호사 is 看護師 — all 師. But Korean professional titles use BOTH 師 and 士:
- 사 = 師: 의사, 간호사, 교사, 요리사 (mastery/transmitting)
- 사 = 士: 변호사 (lawyer), 회계사 (accountant), 세무사 (tax accountant) — these are 士 (scholar/qualified specialist)

For A1, conflating them is fine (the lesson uses 사 (師/士) header at [unit-02.js:20] header which acknowledges this). But the funFacts should not claim 사 has one consistent meaning — that's misleading once a learner reaches B1+ vocabulary.

### I2. 학생이 아니에요 vs 학생은 아니에요 — particle distinction unmentioned
[unit-01.js:191] correctly notes that 아니에요 takes 이/가, not 은/는. Good. But the deeper distinction (학생이 아니에요 = "I'm not a student" simple denial vs 학생은 아니에요 = "I'm not a STUDENT (but I am something)" contrastive) is genuinely useful at A2 and never mentioned in any of these 13 units. Missed pedagogical opportunity.

### I3. 잘 부탁합니다 misframed as a "first meeting" closer
[unit-01.js:341] says *"Common closing phrase in first meetings."* Correct in formal/business contexts (job interviews, new role at a company, formal introductions). NOT used at casual first meetings — a Korean meeting a friend's friend at a barbecue does not say 잘 부탁합니다. The example dialogue at [unit-01.js:344] places it after 만나서 반갑습니다 in what looks like a casual meeting. Mismatch.

### I4. 도 with verbs/adjectives is missing
[unit-02.js:244] teaches 도 with nouns only. But 도 also attaches to verb endings: 가기도 해요 (also goes), 먹어도 봐요 (try eating). This is hugely productive in everyday Korean and never appears in A1+A2.

### I5. -아/어 주세요 (please do for me) is referenced before being properly taught
[unit-01.js:42] decomposes 안녕하세요 as containing 세요 = "please/honorific." The next teach card uses 주세요 (please give) at [unit-01.js:160] in 커피 주세요. But the underlying -아/어 주다 (do for me) construction is not explained until U15 (B1). For 13 A1+A2 units, learners are told 주세요 means "please give" without ever being told it's part of a compositional pattern. By A2 this should be at least previewed.

### I6. 진지/연세/말씀 — honorific noun pairs not introduced
Korean has a small but important set of honorific nouns:
- 밥 → 진지 (meal, hon.)
- 나이 → 연세 (age, hon.)
- 이름 → 성함 (name, hon.)
- 말 → 말씀 (speech, hon.)
- 집 → 댁 (house, hon.)

[unit-01.js:336] teaches 나이 in A1.1 but never mentions 연세 — yet the SAME unit tells learners that *"In Korea, age shapes every social interaction."* If you ask an elder their age you should ask 연세가 어떻게 되세요? — not 나이가 몇이에요? Learners trained on this curriculum will ask grandmothers their 나이 and sound rude.

### I7. Vowel harmony rule — mostly right, one slip
[unit-02.js:64] says *"BRIGHT vowels: ㅏ and ㅗ. These attract the ending -아요."* and the foundations file [foundations.js:925] correctly classifies ㅑ as bright (a "y-version" of ㅏ) and ㅛ as bright. But [korean-conjugation.js:18] only has BRIGHT_MEDIALS = `{0, 2, 8, 9}` (= ㅏ, ㅑ, ㅗ, ㅘ). ㅛ is medial index 12 — not in the bright set. So 보다 (medial ㅗ index 8) is bright (correct → 봐요), but a verb like *오다 → 와요* (medial ㅗ → 아요) is fine, AND the engine handles ㅑ (index 2) as bright.

Wait — let me re-check. 가다 (medial ㅏ=0) bright ✓. 보다 (medial ㅗ=8) bright ✓. 오다 (medial ㅗ=8) bright ✓. So the engine is mostly right. But ㅑ (medial 2) being marked bright is unusual — most descriptive grammars treat ㅑ-stems as bright in Sino-Korean (yang/yin) classification but practically there are very few ㅑ-stem verbs to test it on. ㅛ (12) being EXCLUDED from bright is questionable for theoretical consistency but matters basically not at all for actual verb conjugation.

**Verdict on I7:** The engine is correct for production, but the description in unit lessons is slightly oversimplified. Not a blocker.

### I8. 노래방 culture in U10 — accurate but framed as exotic
[unit-10.js:43] frames 방 culture as *"... 방 is one of the most versatile words in Korean housing."* — good. But the example list (노래방, PC방, 찜질방, 만화방) skews toward youth-stereotype spaces. Missing common 방 compounds: 다방 (old-school coffeehouse), 비디오방 (video room — increasingly rare), 공부방 (study room, not just for kids), 모텔/원룸. The picture of Korean leisure is K-pop+gaming+spa, which reproduces the same stereotype debt.

### I9. 동갑 (same age) introduced casually but undeveloped
[unit-09.js:88] uses 동갑 ("same age") in passing but never teaches it as vocabulary. This is the central concept that determines whether two Koreans use 반말 — if it's important enough to mention, teach it explicitly with its own teach card.

### I10. 사다 → 샀어요 vowel contraction
[unit-10.js:108] correctly explains 사 + 았어요 → 샀어요 via ㅏ+ㅏ merge. But it says *"Same contraction as 가다 → 갔어요"* — true but the example sentence at line 108 *"이거 어디에서 샀어요?"* uses casual 이거 which is fine. No issue here, just confirming this is well-handled.

### I11. ~ 잠시만요 funFact uses outdated "만 = only" gloss
[unit-01.js:290] funFact: *"Literal: 잠시 (moment) + 만 (only) + 요 (polite)."* Almost right — but in 잠시만요, 만 is functioning as 'just' (only) and 요 is the politeness particle attached to a non-final ending. The literal meaning is "(give me) just a moment, please." The current gloss is OK, just a bit clipped.

### I12. -지 마세요 etymology
[unit-08.js:148] correctly notes *"마세요 comes from 말다 (to stop/cease) + 세요 (polite request)."* This is actually right and well-explained. ✓

### I13. 노란/빨간/하얀/검은 — adjective-modifier forms vs descriptive verbs
[unit-05.js:116-120] introduces 빨간/파란/하얀/검은/노란 as `pos:"noun"` ("red") with the note *"Adjectival form of 빨갛다 (to be red)"*. This is technically wrong on POS — 빨간 is the modifier form (관형형) of the descriptive verb 빨갛다, not a noun. It should be `pos:"adj"` or treated as a verb-derived modifier. The note is correct that the underlying word is 빨갛다 (a ㅎ-irregular descriptive verb), but the surface form 빨간 is being presented as if it's a stand-alone color noun, which it isn't — 빨간색 is the noun.

### I14. 어렸을 때 referenced but 어리다 never taught
[unit-10.js:34] deepDive uses *"어렸을 때 = when (I) was young"* without ever teaching 어리다 (to be young). PP63 violation — example contains untaught content word.

### I15. 도와주다 / 도와드리다 vs 돕다
[unit-09.js:64] introduces 도와주다 and 도와드리다 by name in deepDive but never teaches the underlying verb 돕다 (to help). This is one of the most common ㅂ-irregular verbs in everyday Korean and gets glossed over.

---

## Cultural sensitivity notes

### CS1. K-pop / K-drama / "Korean culture is X" framing
- **Overuse:** K-pop appears as the framing for 오빠 ([unit-01.js:337], [unit-05.js:42]), 멋있어요 ([unit-05.js:80]), and several other notes. Korean food appears as 비빔밥 / 김치찌개 / 삼겹살 / 김밥 in approximately every dialogue example.
- **Stereotypy debt** (per audit lens): I count roughly **7 instances** of "Koreans + (universal claim)" framing across the 13-unit slice. Sample: [unit-01.js:262] *"For over a thousand years, Korea used Chinese characters for ALL writing"* (overstated — Korean was mixed-script, not exclusively Chinese), [unit-01.js:337] *"Koreans calculate age differently"* (true but already legally changed in 2023, framed as if still current), [unit-08.js:111] *"You may have noticed: Korea has more cafés per capita than any country"* (factual claim — actually the metric depends on how you count, and Korea is HIGH but not always #1; Belgium and Sweden compete).
- **Severity:** lower than the German pilot's 122x, but not zero. Pass through the funFacts and replace blanket "Koreans X" with specific situational framing.

### CS2. North Korea (북한) is invisible
The audit asks for "Seoul focus, with awareness of regional + 북한 differences." North Korean Korean (문화어) is mentioned ZERO times across these 13 units. Even a single funFact acknowledging that 표준어 ≠ universal Korean would address this. Words like 동무 (comrade — ONLY North Korean) are not explained as North Korean; learners will use 동무 thinking it means "friend" and confuse Koreans.

### CS3. 사투리 (regional dialects) — invisible
South Korea has substantial dialectal variation: 경상도 사투리 (Gyeongsang, around Busan/Daegu — pitch accent, distinctive intonation), 전라도 사투리 (Jeolla, around Gwangju), 제주도 사투리 (Jeju — historically nearly mutually unintelligible), 충청도 사투리 (slow drawl). The curriculum picks Seoul standard correctly, but never tells the learner "this is Seoul standard; dialects exist." A learner who travels to Busan will be confused by 머꼬? for 뭐 해? and have no framework for it.

### CS4. 4 = death funFact
[unit-03.js:11] gives the 사 (4) = 死 (death) homophony funFact. Accurate. ✓ Good cultural note.

### CS5. King Sejong and Hangul invention
[unit-01.js:262] says *"In 1443, King Sejong the Great invented Hangul specifically so that ordinary people could read and write."* Mostly accurate but should clarify: Sejong commissioned the project (he didn't invent it alone — there's debate, but the 집현전 scholars contributed). Promulgated in 1446 (훈민정음). The 1443 date refers to creation/announcement, 1446 to publication. Minor accuracy note.

---

## Sign-off

- **Would I use this with my real Korean students?** Mostly yes, with a 1-page errata sheet covering: (a) replace 만나서 반갑습니다 → 만나서 반가워요 in casual contexts, (b) flag 잠시만요 misuse, (c) introduce 께서 in A2, (d) correct POS tags on 도, 에, 있다, 없다, 도, 아니요, (e) caveat the K-pop framing on 오빠/멋있다.
- **Would I cite this curriculum to my colleagues as a respectable example?** Yes, with the caveat that A1 honorific register needs cleaning up. The morpheme-decomposition spine and the "Train" metaphor are pedagogically worth talking about — better than most commercial competitors. The grammar/korean.js entries on 은/는 vs 이/가 are particularly clean and would be defensible in a 교사용 자료 review.
- **Would my Korean-speaking parents/siblings be embarrassed by anything in this?**
  - **No** for grammar accuracy (the irregular verb tables are correct, the conjugation engine matches standard descriptive linguistics).
  - **Mildly yes** for 잠시만요 used as a greeting response (C3) — they'd say "no Korean speaks like that."
  - **Mildly yes** for the 우리 엄마 collectivism framing (C5) — overinterpretation.
  - **Yes** for not introducing 연세 / 진지 / 성함 honorific nouns (I6) — they'd be embarrassed if a learner asked their 할머니 *"몇 살이에요?"* after 13 units of Korean study.
  - **No** for the cultural notes overall, which are factually accurate-to-mostly-accurate. The overuse of Sino-Korean etymology framing might raise eyebrows ("why does my granddaughter want to tell me 학교 means 'study + teach'?") but isn't wrong.

---

## Recommendations (priority order)

1. **Fix POS tags** across the 13-unit slice. ~25 tags need correction (particles tagged as nouns, copula inconsistencies, sentences tagged as parts of speech). Mechanical fix.
2. **Replace 만나서 반갑습니다 with 만나서 반가워요 as the U1 default.** Move 반갑습니다 to U9's 합쇼체 lesson where it belongs.
3. **Rewrite 잠시만요 dialogue example** to match actual usage (waiting context, not greeting response).
4. **Introduce 께서 + at least one honorific noun pair (진지/연세) in A2.** Target unit: U10 alongside the daily-routine + 반말 introduction, where 할머니께서 주무세요 makes natural sense.
5. **De-K-pop-ify the cultural framing** of 오빠, 멋있다, K-food. Diversify the example pool.
6. **Add a single line acknowledging dialect variation and 표준어** in the foundations or U1 cultural intro.
7. **Audit the 60+ funFacts** for "Koreans X" national-essentialist framing and replace with situational claims.

The bones are good. The polish needs work.
