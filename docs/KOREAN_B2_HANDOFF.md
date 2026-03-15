# KOREAN B2 CURRICULUM HANDOFF — Agent Briefing

> **Date**: 2026-03-15 (original), updated 2026-03-15 (post-D98)
> **Author**: Claude Code session completing A1-B1 audits (D92+D93)
> **Purpose**: Reference doc for B2 build decisions. B2 COMPLETE: skeleton + density uplift + P48/P49 fixes.
> **Decision**: D94, D95, D96, D97, D98

---

## STATUS

B2 COMPLETE as of 2026-03-15:
- Skeleton committed (D94): 10 units, 100 lessons, ~77 grammar patterns.
- Density uplift DONE (D96): All 100 lessons 20-22 steps (avg 21.2).
- **P48 fix DONE (D98)**: 520 multi-blank `fb` steps converted to `drag_fill`. Zero remaining violations.
- **P49 fix DONE (D98)**: 15 CEFR meta-curriculum quiz steps rewritten. Zero remaining violations.
- **Remaining**: B2 deep quality audit (D92-style P8/P34/P46 scan) not yet done.

---

## ORIGINAL MISSION (COMPLETED)

Build Korean B2 curriculum: Units 21-30, targeting TOPIK 4 / CEFR B2 / TTMIK Levels 5-9.

This is the most ambitious level yet. B2 learners transition from "can handle most situations" to "can interact with native speakers without strain." The grammar is complex, the cultural contexts are nuanced, and the quality bar is the highest it has ever been.

---

## MANDATORY PRE-READING (IN THIS ORDER)

1. **`CLAUDE.md`** — Read the ENTIRE file. Not skimming. Every pipeline rule (P8-P56), every decision (D1-D94), every formatting standard. This is the law.
2. **`docs/KOREAN_B1_CURRICULUM_DESIGN.md`** — The B1 design document. Your B2 design must follow the same structure and quality. Pay special attention to Section 10 (B2 Preparation).
3. **`docs/CONCEPT_REGISTRY.md`** — Machine-searchable index of everything taught in A1-B1. Check HERE before adding any teach card.
4. **`docs/DECISION_LOG.md`** — D89-D94 are the most recent and most important. D89 (MC \n bug), D90 (pattern-ID reframe), D91 (two-pass P8), D92 (B1 audit), D93 (A1-A2 audit), D94 (B2 kickoff).
5. **`docs/KOREAN_CURRICULUM_GAP_PLAN.md`** — Shows how B1 gaps were found and fixed. Same methodology applies to B2.
6. **`docs/POLYGLOT_PIPELINE_STANDARDS.md`** — The Five Pillars. The seed framework. The step type standards.
7. **`docs/LINGOVERSE_MASTER_BIBLE.md`** — The vision. The official reference mandate. Korean-specific rules.

---

## WHAT EXISTS: THE FOUNDATION YOU BUILD ON

### Curriculum Stats (A1-B1 COMPLETE)
- **20 units**, ~209 lessons, ~4,700+ steps
- **A1 (U1-U6)**: Greetings, identity, numbers, food, family, transport. Particles + present tense.
- **A2 (U7-U10)**: Past/future tense, health, conditions, daily life, 반말. Irregular verbs (ㄷ/ㅂ/ㄹ/으).
- **B1 (U11-U20)**: Travel, hobbies, connectors, workplace, education, SNS, news, food culture, relationships, consolidation. Progressive, comparatives, obligation, indirect speech, passive/causative, nominalization, noun modifiers, evidential -더라고요, register switching.
- **All 12 seed registry harvests complete**. All 6 irregular verb families taught.
- **All audits PASSED**: D92 (B1, 14 rounds), D93 (A1-A2, 7 rounds). CEFR/TOPIK/TTMIK verified.

### What B1 Graduates Know
Grammar patterns: ~50+ formally taught. Including:
- All particles (는/은, 이/가, 을/를, 에/에서, (으)로, 의, 도, 만, 밖에, 에 의해)
- All tenses (present, past, future, double past, progressive)
- All connectors (-고, -아/어서, -(으)면, -(으)니까, -지만, -는데, -거든요, -자마자, -아/어도, -(으)려면, -다가, -잖아요)
- Indirect speech (4 types: statement, question, command, suggestion)
- Passive/causative voice (-이/히/리/기, 되다, -게 하다)
- Nominalization (-기, -는 것), noun modification (-는/-(으)ㄴ/-(으)ㄹ + noun)
- Evidential -더라고요, inference -나 보다
- Register switching (반말/해요체/합쇼체)
- All 6 irregular verb families

Vocabulary: ~500+ words, 20 thematic domains, 100+ Sino-Korean morphemes decomposed.

Speech levels: All three (반말, 해요체, 합쇼체) actively used. Register switching taught.

### B2 Seeds Already Planted
From U20L10 deepDive "Looking Ahead to B2":
- -(으)ㄴ/는 반면에 (on the other hand)
- -고자 (with the intention of, formal)
- -(으)ㄹ 뿐만 아니라 (not only... but also)
- -는 바람에 (because of, unexpected)
- -(으)ㄹ 정도로 (to the extent that)

From A1-A2 audit (deferred to B2):
- 뿐 (formal "only")
- 마저/조차 (emphatic "even")
- -(으)ㄹ 정도로 (to the extent that)
- 얼마든지 (as much as you want)

From B1 gap plan Tier 3 (deferred to B2):
- -지요/-죠 (tag question "right?")
- -(이)라도 ("at least" / "even if")
- 대신에 ("instead")
- -기는 하다 ("I DID do it, but...")

### Seed Registry (at end of B1)
Located at top of `src/data/units-korean.js` lines 179-208. All 12 original B1 seeds show "harvested". Line 207 says: "B2 seeds to be planted in U17-U20 for future harvest."

---

## B2 GRAMMAR SCOPE

### What TOPIK 4 / CEFR B2 Requires
Cross-reference these sources BEFORE writing any unit:
1. **TOPIK II Level 4 grammar list** — The official test standard
2. **TTMIK Levels 5-9** — Teaching sequence for intermediate-advanced
3. **Korean Grammar in Use: Intermediate** — Pattern inventory
4. **Integrated Korean: Intermediate 1-2** — Academic sequencing

### Grammar Patterns Expected at B2

**Advanced Connectors:**
- -(으)ㄴ/는 반면에 (on the other hand / whereas)
- -는 바람에 (because of, unexpected cause)
- -(으)ㄹ 뿐만 아니라 (not only... but also)
- -는 한 (as long as)
- -(으)므로 (because, formal written)
- -(으)ㄹ 텐데 (I expect that / it should be)
- -는 셈이다 (it amounts to / it's as if)
- -는 대로 (as / the way that)
- -느라고 (because of doing)
- -(으)ㄹ 리가 없다 (there's no way that)
- -는 김에 (while you're at it)
- -(으)ㄴ/는 척하다 (pretend to)

**Formal/Written Korean:**
- -고자 (with the intention of, formal)
- -(으)며 (and, formal written = -고)
- -에 의하면 / -에 따르면 (according to)
- -(으)ㄹ 뿐이다 (only, nothing but)
- -(이)야말로 (indeed / truly is)
- -에 불과하다 (merely / only)
- -(으)ㄴ/는 바 (that which / the fact that)

**Advanced Expressions:**
- -기는 하다 (concessive: "I DID do it, but...")
- -기 마련이다 (it's bound to / inevitably)
- -기 나름이다 (it depends on)
- -(으)ㄹ 만하다 (worth doing)
- -(으)ㄹ 수밖에 없다 (can't help but — already taught U17, deepen)
- -는 법이다 (it's a rule that / naturally)
- -(으)ㄹ 정도로 (to the extent that)
- -다시피 (as you can see/know)

**Advanced Speech/Register:**
- 하게체 (semi-formal, used by older speakers)
- 해라체 (plain/authoritative)
- Business Korean register
- Academic writing style
- Formal email/letter conventions

**Advanced Vocabulary Systems:**
- 4-character Sino-Korean idioms (사자성어)
- Korean proverbs (속담)
- Idiomatic expressions
- Abstract/academic vocabulary (정치, 경제, 사회, 문화, 환경, 기술)

---

## RECOMMENDED UNIT STRUCTURE

### B2.1: Advanced Connection (Units 21-23) — Expanding sentence complexity
| Unit | Cultural Anchor | Grammar Focus |
|------|----------------|---------------|
| U21 | 한국 사회 (Korean society) | -는 반면에, -는 바람에, -(으)ㄹ 뿐만 아니라, -(으)므로 |
| U22 | 한국 경제/직장 (Economy/career) | -고자, -(으)ㄹ 텐데, -기는 하다, -기 마련이다 |
| U23 | 한국 미디어 (Media/opinions) | -는 대로, -는 셈이다, -(으)ㄹ 리가 없다, -는 김에 |

### B2.2: Formal Korean (Units 24-26) — Written and professional register
| Unit | Cultural Anchor | Grammar Focus |
|------|----------------|---------------|
| U24 | 한국 교육 심화 (Advanced education) | Formal written connectors (-(으)며, -에 의하면), academic vocabulary |
| U25 | 한국 뉴스 심화 (Advanced news) | News register, passive deepening, 4-char idioms (사자성어) |
| U26 | 비즈니스 한국어 (Business Korean) | Business email, meeting language, 하게체/해라체, formal proposals |

### B2.3: Cultural Mastery (Units 27-29) — Nuanced expression
| Unit | Cultural Anchor | Grammar Focus |
|------|----------------|---------------|
| U27 | 한국 문학 (Korean literature) | Proverbs (속담), literary expressions, -다시피, -(이)야말로 |
| U28 | 한국 역사 (Korean history) | Historical narrative, formal past, -(으)ㄴ/는 바, -에 불과하다 |
| U29 | 현대 한국 (Modern Korea) | Technology, environment, social issues, advanced opinion expression |

### B2.4: Consolidation (Unit 30)
| Unit | Cultural Anchor | Grammar Focus |
|------|----------------|---------------|
| U30 | B2 완성 + TOPIK 4 prep | Comprehensive review, TOPIK essay structure, all B2 grammar integrated |

---

## PIPELINE RULES — ALL APPLY, STRICTER THAN EVER

### Critical Rules (violating any of these is a curriculum error)

| Rule | What | Why |
|------|------|-----|
| **P8** | Anti-leak. Answer never visible in question. Hints guide, never reveal. | D67, D91 |
| **P24** | No duplicate teaches. Grep CONCEPT_REGISTRY.md + units-korean.js first. | D23 |
| **P26** | Show before name. Seeds planted 2+ units before harvest. | Core philosophy |
| **P34** | Every quiz word must have a prior teach card. | D71 |
| **P43** | 20-25 steps per lesson. No lesson under 20 for B2. | D77 |
| **P46** | Multi-construct density. 50%+ quiz sentences layer 2+ grammar patterns. Final question: 3+ constructs. | D78 |
| **D21** | `board:true` on ALL lessons. No exceptions. | Always |
| **D58** | Korean-only lines centered. Max 85 chars. Colons for definitions. | Always |
| **D89** | NEVER use `\n` inside MC `ans` or `opts` strings. Engine uses `===`. | Engine bug |
| **D90** | Pattern-ID MCs test MEANING/USAGE, not label recall. | D90 |

### B2-Specific Standards

1. **P43 at B2 = 20-25 steps minimum.** B2 is harder content; each step carries more weight. But the density floor is 20, not 15. Aim for 22-25.

2. **P46 at B2 = stricter.** Every B2 quiz sentence MUST layer 2+ patterns. The final question of every lesson MUST test 3+ constructs from DIFFERENT units. B2 learners must demonstrate integration, not isolation.

3. **English translations at B2.** Per P43 in the Korean pipeline rules at the top of `units-korean.js`: "Phase out at B2+ only." This means B2 can start reducing English translations in notes and tips — but quiz stems MUST still have English. Teach cards MUST still have `exampleEn`. Do NOT remove English from quiz stems.

4. **Romanization at B2 = ZERO.** Per POLYGLOT_PIPELINE_STANDARDS: "U7+: no romanization except phonetically irregular items." B2 has no romanization anywhere. Remove `phonetic` fields or leave them empty.

5. **Speech levels at B2.** All three levels actively used. B2 adds 하게체 and 해라체 exposure. Register switching is an active quiz topic.

6. **Sino-Korean COMPOUND chips.** Continue decomposing every new Sino-Korean word. B2 vocabulary is heavily Sino-Korean (경제, 정치, 사회, 문화, 환경, 기술, etc.). This is where the LEGO principle pays off the most.

7. **Cultural anchors.** Every unit must have at least one cultural tip that explains WHY the grammar works the way it does. B2 anchors should be deeper than B1 — Korean society, economy, literature, history, not just travel and food.

### Formatting Rules (enforced on every string)

- **P22c**: No em-dashes (—). Use periods, colons, commas, or \n bullets.
- **P27**: No IPA. ASCII-only phonetics (but B2 has no phonetics anyway).
- **P36**: Notes max ~100 chars unstructured or use \n/bullets.
- **P39**: All strings use single-escaped \n (not \\n).
- **P45**: DeepDive is EXPLANATION, never CONTINUATION. Visible card must be self-contained.
- **D62**: Structured card design standards on all note/text/deepDive fields.
- **D86**: NEVER insert real newlines inside JS string literals. Always use \n escape.

### Anti-Leak Protocol (D91: Two-Pass)

After writing each unit:
1. **Pass 1**: Scan all fb/mc for exact answer substring appearing in the hint.
2. **Pass 2**: Re-scan with awareness of single-character answers and grammar pattern names in hints.
3. **Grep verification**: `grep -n 'hint:.*ANSWER_TEXT' units-korean.js` for each quiz.

---

## TECHNICAL IMPLEMENTATION

### File Location
All B2 content goes in `src/data/units-korean.js`. Append after the closing `]},` of Unit 20 (line ~5954) and before the final `];` (line ~5955).

### Unit Structure Template
```javascript
// ═══════════════════════════════════════════════════════════
// UNIT 21 — [Korean title] ([English subtitle]) — B2.1
// Grammar: [list key patterns]
// Cultural anchor: [anchor]
// Prerequisite: U20 (B1 complete)
// ═══════════════════════════════════════════════════════════
{n:21,lang:"ko",track:"v1",title:"[Korean]",sub:"[English subtitle]",icon:"[emoji]",level:"B2.1",color:"#[hex]",lessons:[
// ═══ L1: [Title] ═══
{id:"kou21l1",title:"[Title]",icon:"[emoji]",xp:20,board:true,steps:[
  {type:"intro",title:"[English title]",desc:"[Korean]\n[English]\n\n[Description]",goals:["Goal 1","Goal 2","Goal 3","Goal 4"]},
  // teach → tip → quiz → teach → quiz pattern
]},
]},
```

### Lesson ID Format
`kou{unit}l{lesson}` — e.g., `kou21l1`, `kou25l8`, `kou30l12`

### Track Value
**Always `track:"v1"`**. Korean has ONE track. Never use "v2" for Korean (D-level decision, see `feedback_track_system.md` in memory).

### Level Values
- U21-U23: `level:"B2.1"`
- U24-U26: `level:"B2.2"`
- U27-U29: `level:"B2.3"`
- U30: `level:"B2.4"`

### Color Palette (continue B1 style, differentiate from B1)
B1 used warm tones. B2 should use deeper/richer tones to signal advancement.

---

## SEED REGISTRY FOR B2

### Seeds to Plant in U21-U23 for Harvest in U27-U30
You MUST plant seeds for grammar that will be formally taught later. Document them in the seed registry at the top of `units-korean.js` after line 207.

Example seeds to plant:
- -(이)야말로 in U21 example sentences → harvest in U27
- 사자성어 in U22 cultural tips → harvest in U25
- 속담 (proverbs) in U23 example sentences → harvest in U27

### Harvesting B1 Deferred Items
These items were explicitly deferred to B2. They MUST be taught:
- 뿐 → teach in U21-U22 area (formal "only")
- 마저/조차 → teach in U23-U24 area (emphatic "even")
- -(으)ㄹ 정도로 → teach in U21-U23 area (to the extent that)
- 얼마든지 → teach naturally where it fits
- -지요/-죠 → teach in U21-U22 area (very common, should have been B1)
- -(이)라도 → teach in U22-U24 area
- 대신에 → teach where it fits
- -기는 하다 → teach in U22 area (concessive pattern)

---

## QUALITY ASSURANCE

### Before Each Unit Commit
1. Every lesson has `board:true`
2. Every lesson has 20+ steps
3. Every teach card has: nl, en, example, exampleEn, note
4. Every MC has 4 options, balanced length, answer not in question
5. Every FB has a hint that guides but doesn't reveal
6. Every new Sino-Korean word has COMPOUND decomposition
7. Grep for em-dashes (—) in content strings: must be 0
8. Grep for the answer text appearing in the hint
9. No duplicate quiz questions (grep existing file first)
10. All strings use \n not literal newlines

### After Each Unit
Run the validation checklist at lines 153-170 of `units-korean.js`.

### After All 10 Units
Full two-pass P8 scan (D91). Full concept registry update. Full CLAUDE.md status update. D-number for the B2 build in decision log.

---

## WHAT TO CROSS-REFERENCE

### TOPIK II Level 4
Search for "TOPIK II 문법 목록" or "TOPIK 4급 문법" to get the official grammar list. Every item on that list must be taught or explicitly deferred with justification.

### TTMIK Levels 5-9
TTMIK Levels 5-9 cover the B1-B2 grammar systematically. Cross-reference their lesson lists. Items already taught in B1 should be checked off; new items should be placed in B2 units.

### Korean Grammar in Use: Intermediate
This book contains ~90 grammar patterns organized by theme. It is the gold standard for intermediate Korean grammar. Many TOPIK 4 patterns come from this book.

---

## OWNER WORKFLOW REMINDER

The owner is NOT a coder. The workflow:
1. You edit `src/data/units-korean.js`
2. You commit and push to GitHub
3. GitHub Actions builds and deploys to lingoverse.nl via FTPS
4. The site updates in ~2 minutes

**DO**: Commit frequently (per-unit is ideal). Push after each commit so the owner can review live.
**DON'T**: Accumulate 5 units of uncommitted work. A crash loses everything.

---

## POST-MORTEM: B2 BUILD DENSITY FAILURE (D95)

> **Added**: 2026-03-15, after B2 skeleton build

The B2 build (U21-U30, 100 lessons) was completed with 91/100 lessons below the P43 density minimum of 18-20 steps. Average: 13.8 steps/lesson. This is the SAME failure as B1 (D88), which also averaged 13.8 before its uplift pass.

### What went wrong
1. **No density monitoring during build.** Sub-agents validated P8 (anti-leak), P34 (teach-before-test), and board:true — but nobody tracked step counts per lesson.
2. **Progressive thinning.** Early units (U21) averaged 17.7 steps. Final units (U30) averaged 10.9. As the session's context filled up, lessons got shorter. Nobody flagged this drift.
3. **Bird's-eye failure.** The main session focused on completing all 10 units. Sub-agents were given narrow validation tasks. Nobody had the holistic view to say "U28 lessons average 11 steps, that's 40% below minimum."
4. **Known anti-pattern repeated.** B1 had the exact same problem (D88). The solution was documented. But the B2 build session didn't enforce it during construction.

### How to prevent this in future builds
1. **P47 (new)**: Step density validated per lesson DURING build, not after.
2. **Agent Rule 7 (new)**: Deploy a density-monitoring agent during multi-unit builds. Use density-first templates. Deploy a bird's-eye orchestrator for 5+ unit builds.
3. **Never build thin skeletons.** If a lesson has fewer than 18 steps when you finish writing it, add more quiz steps before moving on. The D88-style uplift pass is a known costly recovery pattern.

### Current status
B2 skeleton committed (2026-03-15). Density uplift pending as separate pass.

---

## FINAL NOTES

1. **Code is truth, docs are claims (D80).** Always grep `units-korean.js` to verify what exists. Never trust a doc description alone.
2. **A human with Ctrl+F must not be faster than your agents (D81).** Use grep directly for simple checks.
3. **When unsure about grammar: FLAG IT (// VERIFY:).** Do not commit uncertain Korean.
4. **The pipeline must guarantee quality by PROCESS, not by human review (Principle 3).** Think: "Would this catch this bug in Japanese?"
5. **Every B2 lesson should make a B1 graduate say: 'I know every piece of this sentence individually, but I've never seen them combined like this.'** That's the B2 feeling.
6. **P47: Enforce density DURING build (D95).** Never batch-build thin skeletons. Both B1 and B2 failed this way. See Agent Rule 7.

Good luck. Build something excellent.
