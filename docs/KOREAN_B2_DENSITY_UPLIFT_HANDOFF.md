# KOREAN B2 DENSITY UPLIFT — Complete Agent Handoff

> **Date**: 2026-03-15
> **Author**: Claude Code session that built the B2 skeleton
> **Purpose**: Everything the next agent needs to uplift B2 to production quality
> **Decision**: D95 (density failure), P47 (build-time enforcement), Agent Rule 7
> **Scope**: NOT just adding filler steps. This is a PEDAGOGIC uplift that makes B2 the crown jewel of the Korean curriculum.

---

## YOUR MISSION

Uplift every B2 lesson (U21-U30, 100 lessons) to meet P43 density minimum (20+ steps for Korean) while SIMULTANEOUSLY:
1. Adding A1-B1 recall exercises that test EVERYTHING taught across 30 units
2. Layering multi-construct sentences (P46: 2+ grammar patterns per quiz, 3+ in final questions)
3. Adding cross-level review that makes the learner USE old patterns in B2 contexts
4. Ensuring TOPIK II / TTMIK L7-10 / CEFR B2 completeness with not a single nuance missing

**You are NOT confined to 10 units or 100 lessons.** If the curriculum needs more units to properly teach and review everything, ADD THEM. Extra units and lessons are welcome. We are building a once-in-a-lifetime pedagogic machine.

---

## CRITICAL: READ THESE FILES FIRST (IN ORDER)

You MUST read these files completely before writing a single step:

1. **`CLAUDE.md`** — The law. Every pipeline rule (P8, P22c, P24, P26, P27, P34, P36, P37, P38, P39, P43, P44, P45, P46, P47), every decision (D1-D95+), every formatting standard. Read the ENTIRE file, not skim.
2. **This file** — You're reading it. Contains the full B2 state, step counts, and uplift strategy.
3. **`docs/CONCEPT_REGISTRY.md`** — Machine-searchable index of EVERYTHING taught in A1-B1. ~830+ teach cards across 209 lessons. You MUST know what exists before writing quiz steps that reference it.
4. **`docs/KOREAN_B1_CURRICULUM_DESIGN.md`** — How B1 was designed. Seed harvests, cultural anchors, grammar sequencing. Your density uplift must follow the same philosophy.
5. **`docs/POLYGLOT_PIPELINE_STANDARDS.md`** — The Five Pillars, seed framework, per-language standards, step type specifications. Every step you write must conform.
6. **`docs/LINGOVERSE_MASTER_BIBLE.md`** — The vision. The Official Reference Mandate. The Unit Count Doctrine: "When in doubt, add lessons."
7. **`docs/KOREAN_CURRICULUM_GAP_PLAN.md`** — How B1 gaps were found and fixed. Shows the D88 density uplift pattern. Your B2 uplift follows the same methodology but BETTER.
8. **`docs/KOREAN_B2_HANDOFF.md`** — Original B2 build reference. Grammar scope, pipeline rules, post-mortem on the density failure.
9. **`src/data/units-korean.js`** — THE CODE. This is truth. 7,797 lines, 30 units, 311 lessons. Your edits go here.

---

## THE PHILOSOPHY: WHY DENSITY MATTERS

This is NOT about padding lessons to hit a number. This is about what a B2 learner needs.

A B2 learner has been taught:
- **A1 (U1-U6)**: ~350 vocab words, 18 particles, basic conjugation, present tense, negation, adjectives, numbers, counters
- **A2 (U7-U10)**: Past/future tense, 6 irregular verb families, conditions, ability, daily life, 반말, ~150 more words
- **B1 (U11-U20)**: 25+ grammar patterns, progressive, comparatives, obligation, indirect speech, passive/causative, nominalization, evidential, register switching, 200+ more words
- **B2 (U21-U30)**: ~77 new grammar patterns, formal writing, proverbs, idioms, register mastery, TOPIK prep

**The problem with thin B2 lessons**: A 10-step lesson teaches ONE pattern in isolation. The learner never combines it with prior knowledge. They pass the lesson but can't use the pattern in a real sentence that also requires past tense, a connector, and a particle — things they learned 20 units ago.

**The fix**: Every B2 quiz step must layer the NEW B2 pattern with OLD A1-B1 patterns. This is not repetition for repetition's sake. This is how fluency works: the learner must activate prior knowledge while processing new structures. Every quiz sentence should make a B1 graduate say: "I know every piece of this individually, but I've never combined them like this."

---

## CURRENT B2 STATE: EXACT STEP COUNTS

### Per-Unit Summary

| Unit | Title | Lessons | Total Steps | Avg Steps/Lesson | Teach | Quiz | DEFICIT to 20 avg |
|------|-------|---------|-------------|------------------|-------|------|-------------------|
| U21 | 취업 준비 | 10 | 177 | 17.7 | 38 | 119 | +23 steps needed |
| U22 | 의견과 토론 | 10 | 162 | 16.2 | 23 | 118 | +38 steps needed |
| U23 | 뉴스 읽기 | 10 | 144 | 14.4 | 23 | 102 | +56 steps needed |
| U24 | 후회와 가정 | 10 | 134 | 13.4 | 18 | 97 | +66 steps needed |
| U25 | 원인과 결과 | 10 | 131 | 13.1 | 16 | 97 | +69 steps needed |
| U26 | 세대 차이 | 10 | 124 | 12.4 | 17 | 88 | +76 steps needed |
| U27 | 속담과 사자성어 | 10 | 154 | 15.4 | 43 | 94 | +46 steps needed |
| U28 | 비교와 정도 | 10 | 125 | 12.5 | 25 | 82 | +75 steps needed |
| U29 | 격식과 비격식 | 10 | 118 | 11.8 | 18 | 81 | +82 steps needed |
| U30 | B2 종합 | 10 | 109 | 10.9 | 16 | 70 | +91 steps needed |

**Grand total deficit: ~622 steps needed to reach 20-step average across all 100 lessons.**
**Actual target: 22-25 avg (not bare minimum 20), so realistically 800-1200 new steps.**

### What Step Types Are Missing

The B2 skeleton uses: intro, teach, tip, mc, fb, match, drag_fill.

**Completely absent from B2:**
- `tr` (translation input) — Should be used at B2 for production practice
- `verb_table` — Could be used for register comparison tables

**Underrepresented:**
- `drag_fill` — Very few per lesson. This is the best step type for multi-construct testing.
- `match` — Often only 1 per lesson. Good for batch discrimination.

---

## THE UPLIFT STRATEGY

### Strategy 1: Cross-Level Review Steps (THE KEY INNOVATION)

Every uplifted lesson gets 3-5 new quiz steps that test the B2 pattern COMBINED WITH specific A1-B1 patterns. This is NOT random review. Each combination is deliberate.

**Example for a lesson teaching -(으)ㄴ/는 반면에 (on the other hand):**

Current thin lesson might have:
```
mc: "한국어는 어려운 반면에 재미있어요. What does 반면에 mean?"
```

Uplifted lesson adds:
```
fb: "어제 비가 ___ 반면에 오늘은 맑아요." (ans: 온, tests: past tense modifier -(으)ㄴ from U7 + 반면에)
mc: "동생은 운동을 좋아하는 반면에 저는 책 읽는 것을 좋아해요. What does the speaker prefer?"
    (tests: 반면에 + -는 것 nominalization from U18 + family vocab from U5)
drag_fill: "한국 음식은 매운 ___ 일본 음식은 ___ 편이에요."
    blanks: {1:"반면에", 2:"담백한"}
    pool: ["반면에","때문에","담백한","맵다"]
    (tests: 반면에 vs 때문에 discrimination + adjective vocab)
fb: "서울은 ___ 반면에 제주도는 조용해요."
    (ans: 복잡한, tests: 반면에 + adjective from A1 + location from U11)
```

**Each new step must reference the CONCEPT REGISTRY to verify the tested patterns were actually taught.**

### Strategy 2: A1-B1 Pattern Recycling Map

Here is what MUST be recycled across B2 quiz steps. Use this as a checklist. Every pattern below should appear in at least 3-5 B2 quiz sentences:

**From A1 (U1-U6) — these are the BASICS that must be automatic:**
- 는/은 (topic) vs 이/가 (subject) — test in sentences where choice matters
- 을/를 (object) — test in complex B2 sentences
- 에/에서 (location) — test location vs action-location distinction
- (으)로 (means/direction) — test in travel/transport B2 contexts
- 도 (also), 만 (only), 의 (possessive) — weave into B2 sentences
- 안/못 negation — test in B2 grammar contexts
- -고 싶다 (want to) — combine with B2 formal alternatives
- Basic adjectives (크다/작다/많다/적다/어렵다/쉽다) — use as building blocks
- Numbers: Sino-Korean AND Native Korean — test in B2 contexts (statistics, TOPIK writing)
- Counters (개, 명, 잔, 병, 마리) — test in B2 sentences about society/economy

**From A2 (U7-U10) — these need ACTIVE recall:**
- Past tense -았/었어요 — every lesson should have past tense sentences
- Future -(으)ㄹ 거예요 — test alongside B2 formal alternatives (-고자, -(으)려고)
- -고 (sequential) — combine with B2 connectors in complex sentences
- -아/어서 (because/sequence) — contrast with B2 "because" patterns (-(으)므로, -느라고, -는 바람에)
- -(으)면 (if/when) — layer with B2 conditionals
- -(으)니까 (because, subjective) — contrast actively with -(으)므로
- 것 같아요 (I think/seems) — still relevant at B2, combine with new patterns
- All 6 irregular verb families — USE irregular verbs in B2 example sentences. Don't let them fade.
- 반말/해요체/합쇼체 — B2 adds 하게체/해라체/문어체, so test ALL registers

**From B1 (U11-U20) — these are the BRIDGE to B2:**
- -고 있다 (progressive) — use in B2 contexts
- -(으)ㄹ 줄 알다/모르다 (ability/inability) — combine with B2 patterns
- Comparatives (-보다, 더, 가장) — natural in U28 (comparison unit) but use everywhere
- -는데 (background/contrast) — the Swiss Army Knife, use in every B2 lesson
- -거든요 (reason giving) — combine with B2 formal equivalents
- -아/어야 하다 (obligation) — layer with B2 formal obligation
- -(으)려고 (purpose) — contrast with -고자 (formal purpose)
- Indirect speech (-다고, -냐고, -라고, -자고) — combine with B2 news/formal contexts
- Passive/causative (-이/히/리/기, 되다, -게 하다) — essential for B2 news register
- Nominalization (-기, -는 것) — B2 adds -(으)ㅁ, so contrast explicitly
- Noun modifiers (-는/-(으)ㄴ/-(으)ㄹ + noun) — test HEAVILY. These are the backbone of complex Korean sentences.
- -더라고요 (evidential) — combine with B2 patterns for rich personal narratives
- -나 보다 (inference) — combine with B2 formal inference patterns
- Register switching — B2 DEEPENS this. Every lesson can test register awareness.

### Strategy 3: TOPIK II / TTMIK L7-10 Completeness Audit

Before declaring the uplift complete, verify against these references:

**TOPIK II Level 4 Grammar (MUST be in B2):**
Every pattern on the TOPIK 4급 grammar list must either:
(a) Be taught with a dedicated teach card in B2, OR
(b) Be verified as already taught in A1-B1 via CONCEPT_REGISTRY + grep

**TTMIK Levels 7-10 (B2 scope):**
Cross-reference TTMIK's lesson lists for Levels 7-10. Key patterns:
- Level 7: Advanced connectors, formal writing patterns
- Level 8: Nuanced expressions, double negatives, idiomatic patterns
- Level 9: Literary Korean, proverbs, advanced register
- Level 10: Near-native nuance, academic Korean, TOPIK prep

**Korean Grammar in Use: Intermediate (Darakwon):**
~90 grammar patterns by theme. Compare against B2 content. Any TOPIK 4-level pattern in this book that is NOT in B2 is a curriculum error.

**After the uplift, produce an evidence table (D87 format):**

| Pattern | Source (TOPIK/TTMIK/KGIU) | Location in B2 | Grep Evidence | Status |
|---------|---------------------------|----------------|---------------|--------|
| -(으)ㄴ/는 반면에 | TOPIK 4, TTMIK L7 | U21L3 | FOUND: line XXXX | verified |

### Strategy 4: Consider Adding Units

The owner explicitly said: "We are NOT confined to 10 units." If the density audit reveals that certain topics need more space, ADD LESSONS OR UNITS:

**Possible additions:**
- **U31: A1-B1 종합 복습 (Comprehensive Review)** — 10 lessons that systematically review ALL A1-B1 grammar through B2-level sentences. Each lesson focuses on a different A1-B1 theme but uses B2 vocabulary and grammar.
- **U32: TOPIK II 실전 (TOPIK Practice)** — Additional TOPIK writing practice beyond U30. Full mock 쓰기 sections.
- **Extra lessons within existing units** — If a unit's topic needs 12 lessons instead of 10, add them. Lesson IDs support it (kou21l11, kou21l12, etc.).

---

## PIPELINE RULES — EVERY STEP YOU WRITE MUST OBEY THESE

### Critical Rules (violating ANY is a curriculum error)

| Rule | What | How to Check |
|------|------|-------------|
| **P8** | Answer NEVER visible in question. Hints guide, never reveal. Question and answer use DIFFERENT representations. | Read each quiz step: can you answer WITHOUT knowing the target skill? If yes, it leaks. |
| **P24** | No duplicate teach cards. Check CONCEPT_REGISTRY first, then grep. | `grep "pattern_text" units-korean.js` before adding any teach card. |
| **P34** | Every word in a quiz must have been taught (teach card) before first quiz use. | For each quiz answer, verify a teach card exists earlier in the curriculum. |
| **P43** | Korean: 20-25 steps/lesson. No lesson under 20. Aim for 22-25 at B2. | Count steps per lesson BEFORE moving to the next lesson. P47 says: enforce DURING build. |
| **P46** | 50%+ quiz sentences layer 2+ grammar patterns from DIFFERENT units. Final question: 3+ constructs. | Review each quiz: does it test ONLY the new pattern, or does it COMBINE with prior grammar? |
| **P47** | Validate density PER LESSON during build, not after. Never batch thin skeletons. | If a lesson has <20 steps when you finish it, ADD MORE before moving on. |
| **D21** | `board:true` on ALL lessons. | Already present on all 311 lessons. Maintain it on any new lessons. |
| **D58** | Korean-only lines centered/large/purple. Max 85 chars/line. Colons for definitions, never equals. | Check all teach card `nl`, `example`, `note` fields. |
| **D86** | NEVER insert real newlines inside JS string literals. Always use \n escape. | Verify after every edit: no unterminated strings. |
| **D89** | NEVER use \n inside MC `ans` or `opts` strings. Engine uses `===` comparison. | Grep: `grep -n 'ans:.*\\n' units-korean.js` should return 0 hits. |
| **D90** | Pattern-ID MCs test MEANING/USAGE, not label recall. | Never: "What is -(으)ㄹ 텐데 called?" Always: Korean sentence + usage question. |

### Formatting Rules (enforced on every string)

- **P22c**: No em-dashes (—). Use periods, colons, commas, or \n bullets.
- **P27**: No IPA. No slashes as separators. ASCII-only phonetics. B2 has NO romanization.
- **P36**: Notes max ~100 chars unstructured or use \n/bullets.
- **P39**: All strings use single-escaped \n (not \\n).
- **P44**: Hints must GUIDE, never REVEAL. Reference decision frameworks, not grammar rules.
- **P45**: DeepDive is EXPLANATION, never CONTINUATION. Visible card must be self-contained.

### Anti-Leak Protocol (D91: Two-Pass)

After each unit uplift:
1. **Pass 1**: Scan all fb/mc for exact answer substring appearing in the hint.
2. **Pass 2**: Re-scan for grammar pattern names in hints that reveal the answer.
3. **Grep verification**: `grep -n 'hint:.*ANSWER_TEXT' units-korean.js` for each new quiz.

---

## WHAT B1 GRADUATES KNOW (COMPLETE REFERENCE)

### All Grammar Patterns (A1-B1)

**Particles (18):**
는/은, 이/가, 을/를, 도, 의, 에, 에서, (이)랑, 마다, 까지, 부터, 동안, 처럼, 한테/에게, 한테서/에게서, (으)로, 만, 밖에 + neg, 에 의해

**Verb Endings & Tenses:**
-아/어요 (present), -ㅂ니다/습니다 (formal), 반말 (casual), -았/었어요 (past), -(으)ㄹ 거예요 (future plan), -겠습니다 (formal will), -(으)ㄹ래요 (casual want), -(으)ㄹ까요 (suggestion), -(으)세요 (request), -고 싶다 (want to), -고 싶어하다 (3rd person want), -(으)ㅂ시다 (formal let's), -(ㄴ/는)다 (narrative/plain)

**Negation:**
안, -지 않다, 못, -지 못하다, -지 마세요 (prohibition)

**Connectors (16):**
-고, -아/어서, -(으)면, -(으)니까, -지만, -는데, -거든요, -네요, -자마자, -아/어도, -(으)려면, -(으)려고, -다가, -잖아요, 때문에, -기 때문에

**Advanced Grammar (B1):**
-고 있다 (progressive), -(으)ㄹ 줄 알다/모르다 (ability), -(으)ㄴ 적이 있다/없다 (experience), -아/어 보다 (try), -아/어지다 (become), -게 되다 (ended up), -게 (adverbial -ly), -아/어 주다/드리다 (benefactive), -기 전에 (before), -(으)ㄴ 후에 (after), -(으)러 가다/오다 (go to do), -보다/더/가장 (comparative), -(으)면서 (while), -기로 하다 (decide to), -아야/어야 하다/되다 (must), -(으)면 안 되다 (must not), -아/어도 되다 (may)

**Indirect Speech:** -다고, -냐고, -(으)라고, -자고 하다
**Passive:** -이/히/리/기, 되다 pattern
**Causative:** -게 하다
**Nominalization:** -기, -는 것
**Noun Modifiers:** -는 (present), -(으)ㄴ (past/adj), -(으)ㄹ (future)
**Evidential:** -더라고요, -나 보다
**Other:** -았/었었 (double past), -(으)ㄹ 수밖에 없다, -(으)ㄹ 뻔하다, 것 같아요, 생각보다, 자기/자신, 아무

**Irregular Verb Families (all 6):** ㄷ, ㅂ, ㄹ, 으, ㅎ, ㅅ, 르

### All Vocabulary Domains (A1-B1)

| Domain | Unit | Key Words to Recycle in B2 |
|--------|------|---------------------------|
| Greetings | U1 | 안녕하세요, 감사합니다, 죄송합니다, 실례합니다 |
| Identity | U1-U2 | 이름, 나이, 직업, 학생, 회사원, 나라 |
| Numbers | U3 | 하나-열, 일-만, counters (개/명/잔/병/마리/권/대) |
| Food | U4 | 밥, 국, 찌개, 불고기, 비빔밥, 김치, 맛있다, 맵다, 달다 |
| Family | U5 | 할아버지/할머니, 아빠/엄마, 형/오빠/누나/언니, 동생 |
| Colors | U5 | 빨간, 파란, 하얀, 검은, 노란 |
| Transport | U6 | 지하철, 버스, KTX, 택시, 비행기 |
| Location | U6 | 위, 아래, 앞, 뒤, 옆, 안, 밖, 사이 |
| Time | U7 | 어제, 오늘, 내일, 지난주, 다음 주, 아까, 방금 |
| Body | U8 | 머리, 눈, 코, 입, 귀, 손, 발, 배, 다리, 팔 |
| Health | U8 | 아프다, 감기, 병원, 약, 쉬다 |
| Daily Life | U10 | 일어나다, 씻다, 출근하다, 퇴근하다, 일하다 |
| Travel | U11 | 여행, 숙소, 예약하다, 비행기, 공항, 제주도 |
| Hobbies | U12 | 취미, 운동, 등산, 요리, 독서 |
| Workplace | U14 | 직장, 회의, 회사, 상사, 동료 |
| Education | U15 | 교육, 학교, 시험, 학원, 수능 |
| Internet | U16 | 인터넷, 댓글, 검색하다, 공유하다 |
| News | U17 | 뉴스, 기사, 사건, 사고, 경제 |
| Food Culture | U18 | 찌개, 반찬, 삼겹살, 떡볶이, 맛집 |
| Relationships | U19 | 관계, 사이, 정, 소개팅 |
| Seasons | U20 | 사계절, 봄, 여름, 가을, 겨울 |

### B2 Grammar Patterns Already in Skeleton

**U21 (취업 준비):** 취업 vocab, -(으)ㄴ/는 반면에, -(으)ㄹ 뿐만 아니라, -고자, -(으)며, -에 의하면/따르면, TOPIK 쓰기 자기소개서, 직장 문화
**U22 (의견과 토론):** 토론 vocab, -는 셈이다, -(으)ㄹ 텐데, -기는 하다, -기 마련이다, -는 법이다, -기 나름이다, TOPIK 토론, 한국 사회 이슈
**U23 (뉴스 읽기):** 뉴스 vocab, -(으)ㄹ 리가 없다, -는 바람에, -느라고, -(으)ㄴ/는 척하다, -다시피, 기사 읽기, 한국 미디어
**U24 (후회와 가정):** 감정 vocab, -(으)ㄹ걸(요), -았/었더라면, -(으)ㄹ 뻔하다 HARVEST, -ㄴ/는다고 치다, 양보 (concession), 한국 정서
**U25 (원인과 결과):** 인과 vocab, -(으)므로, -는 탓에, -는 덕분에, -는 통에, -는 데(에), -기에, -길래, 15 "because" patterns overview, 환경 이슈
**U26 (세대 차이):** 세대 vocab, -는 반면(에) deepening, -더니, -(으)ㄴ/는 데 반해, -기는커녕, -(으)ㄹ 뿐더러, 한국 세대 문화
**U27 (속담과 사자성어):** 10 proverbs, 10 사자성어, -은/는커녕, -(으)나 마나, -(으)ㄹ지라도, -아/어 봤자, -아/어서라도, -(ㄴ/는)다니/다더니, 10 body idioms
**U28 (비교와 정도):** 비교 vocab, -(으)ㄹ 정도(로) HARVEST, -(으)ㄹ 지경이다, -(으)ㄹ 만하다, -(으)ㄴ/는 만큼, -(ㄴ/는)다기보다, -치고, -(으)ㄴ/는 김에, -듯(이), TOPIK 쓰기 비교, 경쟁 사회
**U29 (격식과 비격식):** 4-register overview, -(으)ㄴ 채(로), -(으)ㅁ nominalization, -(이)야말로, -(으)ㄴ/는 한, -(으)ㄹ 뿐이다, -(이)나 할 것 없이, 직장 한국어, 존댓말 layers
**U30 (B2 종합):** Grammar map, -는 사이에, -는 수가 있다, 원인 복습, 대조 복습, 격식 복습, -아/어 대다, -아/어다가, -고 들다, -아/어 죽겠다, TOPIK 쓰기 51/52/53, 한류, C1 preview

---

## AGENT DEPLOYMENT STRATEGY

### Rule 7 Compliance (MANDATORY)

You MUST deploy agents as follows:

1. **Bird's-Eye Orchestrator Agent** (runs throughout):
   - Tracks which lessons have been uplifted and which are pending
   - Validates density after EACH lesson (not after each unit)
   - Flags if step counts drop below 20
   - Reports cumulative statistics after each unit
   - Monitors for progressive thinning (the exact failure pattern from the original build)

2. **P8 Scanner Agent** (runs after each unit):
   - Two-pass anti-leak scan (D91)
   - Grep verification of every new hint against its answer
   - Returns evidence, not conclusions

3. **Cross-Reference Agent** (runs once at start, once at end):
   - Verifies TOPIK II Level 4 grammar list against B2 content
   - Verifies TTMIK L7-10 coverage
   - Produces D87-format evidence table
   - Identifies any patterns that are STILL missing after uplift

4. **A1-B1 Recall Auditor** (runs after all uplift):
   - Samples 20 random B2 quiz steps
   - Checks: does each one layer at least 1 A1-B1 pattern?
   - Reports the distribution: which A1-B1 patterns get the most/least recycling?
   - Identifies "forgotten" patterns that no B2 quiz references

### Work Order

1. Start with U30 (worst: avg 10.9, consolidation unit should be STRONGEST)
2. Then U29, U28, U27, U26 (B2.2 — work backward from worst)
3. Then U25, U24, U23, U22, U21 (B2.1)
4. After each unit: run P8 scan + density check
5. After all 10 units: run cross-reference audit + A1-B1 recall audit
6. If audit reveals gaps: add lessons or units as needed

### Commit Strategy

- Commit after EACH UNIT (not after all 10). Per owner workflow: "Commit frequently. Push after each commit so the owner can review live."
- Each commit message should include: unit number, number of steps added, new average density
- Push to main after each commit. GitHub Actions auto-deploys.

---

## STEP TEMPLATES FOR COMMON UPLIFT PATTERNS

### Template 1: Cross-Level Review MC

```javascript
{type:"mc",q:"서울에서 부산까지 KTX로 두 시간밖에 안 걸리는 반면에 버스는 다섯 시간이나 걸려요. 서울에서 부산까지 KTX로 얼마나 걸려요?",
opts:["두 시간","다섯 시간","세 시간","한 시간"],ans:"두 시간",
hint:"Look for the contrast marker. The first clause before 반면에 describes KTX."}
```
Tests: 반면에 (B2) + 밖에 (B1) + (으)로 means (A2) + Sino-Korean numbers (A1) + time duration

### Template 2: Multi-Construct FB

```javascript
{type:"fb",s:"어제 회의에서 발표를 ___ 긴장해서 실수를 많이 했어요.",a:"하느라고",
hint:"Think about the cause pattern that implies 'because I was busy doing X'. The action consumed your attention."}
```
Tests: -느라고 (B2) + 회의 vocab (B1 U14) + past tense context (A2) + 많이 adverb (A1)

### Template 3: A1-B1 Vocab in B2 Context Drag_Fill

```javascript
{type:"drag_fill",s:"요즘 한국에서는 {1} 문화가 {2} 반면에 전통 {3} 문화는 점점 사라지고 있다고 해요.",
blanks:{1:"배달",2:"발달하는",3:"시장"},
pool:["배달","발달하는","시장","발전","택배","가게"],
hint:"Delivery culture is developing. Traditional ___-culture is disappearing."}
```
Tests: 반면에 (B2) + 배달 culture (B1) + -다고 하다 indirect speech (B1) + -고 있다 progressive (B1)

### Template 4: Register Switching MC

```javascript
{type:"mc",q:"상사에게 보고서를 보낼 때 어떤 표현이 가장 적절해요?\n\n(a) 보고서 보냈어\n(b) 보고서 보냈어요\n(c) 보고서를 보내 드렸습니다\n(d) 보고서 보낸다",
opts:["보고서 보냈어","보고서 보냈어요","보고서를 보내 드렸습니다","보고서 보낸다"],
ans:"보고서를 보내 드렸습니다",
hint:"To a superior at work. Think about which speech level AND which verb form shows respect."}
```
Tests: Register awareness (B2) + 합쇼체 (A2+) + -아/어 드리다 honorific benefactive (B1) + workplace vocab (B1)

---

## TECHNICAL IMPLEMENTATION

### File Location
All edits go in `src/data/units-korean.js` (~7,797 lines currently).

### How to Add Steps to an Existing Lesson
1. Find the lesson by grep: `grep -n "id:\"kou21l3\"" units-korean.js`
2. Navigate to the lesson's `steps:[]` array
3. Add new steps before the closing `]` of the steps array
4. Use the Edit tool to insert, NOT Write tool to rewrite
5. After each edit: verify brace/bracket balance

### Brace/Bracket Verification (MANDATORY after each unit)
Use Python heredoc to count braces and brackets:
```bash
python3 << 'PYEOF'
with open("src/data/units-korean.js") as f:
    t = f.read()
print(f"Open braces: {t.count('{')}, Close braces: {t.count('}')}")
print(f"Open brackets: {t.count('[')}, Close brackets: {t.count(']')}")
assert t.count('{') == t.count('}'), "BRACE MISMATCH"
assert t.count('[') == t.count(']'), "BRACKET MISMATCH"
print("PASS")
PYEOF
```

### String Editing Safety (D86)
- NEVER insert real newlines inside JS strings. Always use \n.
- Keep each string on one source line.
- After batch edits: check quote parity.
- Python heredoc `<< 'PYEOF'` prevents shell escaping issues.

---

## THE VISION: WHAT WE'RE BUILDING

This is not a language app. This is a pedagogic machine that will eventually teach ANY language from ANY source language. Every decision you make in this B2 uplift shapes the process that will run for Korean C1, Dutch B2, German A1, French A1, Spanish A1, Arabic A1, and every language after that.

The owner's words: "We are building a never seen before once in a lifetime pedagogic machine. All languages all source languages."

The pipeline rules exist because they caught real errors. P8 exists because learners were guessing without knowing. P34 exists because learners were quizzed on words they'd never seen. P43 exists because thin lessons don't build fluency. P46 exists because isolated-pattern testing doesn't build integration. P47 exists because two separate builds (B1 and B2) both produced thin skeletons that needed costly uplift passes.

Your job is to make this the LAST time a density uplift is needed. Build it right. Build it dense. Build it with the full weight of 30 units of prior learning behind every quiz step.

---

## FINAL CHECKLIST (Before declaring B2 uplift complete)

- [ ] Every B2 lesson has 20+ steps (aim for 22-25)
- [ ] Every quiz step layers 2+ grammar patterns from different units (P46)
- [ ] Final question of every lesson tests 3+ constructs
- [ ] Every A1-B1 grammar pattern appears in at least 3 B2 quiz sentences
- [ ] All 6 irregular verb families appear in B2 example sentences
- [ ] All speech levels (반말, 해요체, 합쇼체, 하게체, 해라체, 문어체) are tested
- [ ] TOPIK II Level 4 grammar: 100% coverage (D87 evidence table produced)
- [ ] TTMIK L7-10: 90%+ coverage (evidence table produced)
- [ ] P8 two-pass scan: 0 leaks
- [ ] P34: 0 violations (no untaught words in quizzes)
- [ ] D89: 0 \n characters in MC ans/opts
- [ ] All brace/bracket counts balanced
- [ ] CONCEPT_REGISTRY.md updated with all B2 patterns
- [ ] CLAUDE.md "Current Build Status" updated
- [ ] Memory files updated (project_status.md)
- [ ] No lesson has been skipped or left at skeleton density

Good luck. Build the finest B2 Korean curriculum ever created.
