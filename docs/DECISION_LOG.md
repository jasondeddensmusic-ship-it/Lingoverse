# Decision Log — Structured Index

> Machine-searchable index of all D-numbers from `src/lingoverse.jsx`.
> Last updated: 2026-03-17 (D1-D108. D86+ in CLAUDE.md)

---

## Quick Reference Table

| D# | Title | Category | Scope |
|----|-------|----------|-------|
| D108 | Spanish A1-B2 Complete Curriculum Build | Content/Build | Spanish |
| D107 | Temp-File Agent Workflow for Curriculum Builds | Agent Protocol | All |
| D106 | Agent Model Escalation Protocol (Opus over Sonnet) | Agent Protocol | All |
| D105 | French A1-B2 Complete Curriculum Build | Content/Build | French |
| D104 | Post-Build Structural Validation Protocol | Agent Protocol | All |
| D103 | German A1-B2 Complete Build | Content/Build | German |
| D102 | Dutch B2 Quality Audit (10 rounds) | Audit/Quality | Dutch |
| D101 | Dutch Quality Uplift to Korean Standard | Content/Quality | Dutch |
| D100 | Korean Dialogue Enrichment + Sequential Workflow | Content/Workflow | Korean/All |
| D99 | Dutch B1 Polish: Density Uplift + Quick Fixes | Content/Quality | Dutch |
| D98 | P48/P49 Fix: 520 fb→drag_fill + 15 CEFR Purge | Quality Fix | Korean |
| D97 | Content Quality Gate for Uplift/Batch Edits | Agent Protocol | All |
| D96 | B2 Density Uplift (U21-U30) | Content/Quality | Korean |
| D95 | B2 Density Failure Post-Mortem | Agent Protocol | All |
| D94 | Korean B2 Curriculum Kickoff | Content/Architecture | Korean |
| D93 | A1-A2 Full Quality Audit (7 rounds) | Audit | Korean |
| D1 | Arabic: Diagram-First Intro Card | Content | Arabic |
| D2 | Korean: No Full Sentences Before Script | Content | Korean |
| D3 | Anti-Leak Validator | Engine | All |
| D4 | RTL/LTR Mixing | Engine | Arabic |
| D5 | Glyph Readability | Engine | Non-Latin |
| D6 | Korean: Anti-Leak Rewrite (Naked Jamo vs Assembled Blocks) | Content | Korean |
| D7 | LessonEngine: Full Keyboard Navigation | Engine | All |
| D8 | Korean Playthrough: Phase Restructuring & Block Diagrams | Content | Korean |
| D9 | Teach Card Kind System + Script Display Parity + TTS Locale | Engine | All |
| D10 | Letter Card Teacher's Board Style | Engine | Non-Latin |
| D11 | UI Sound & Visual Effects System | Engine | All |
| D12 | Dutch v2 Curriculum (Parallel to Legacy) | Architecture | Dutch |
| D13 | Board-Style Teach Cards & verb_table Step Type | Engine | All |
| D14 | Translation-First Content & Bilingual Line Rendering | Engine | All |
| D15 | Polysemy, Cognates & Visual Engagement in Board Cards | Engine/Content | All |
| D16 | Match Pairs: Live Lines, Keyboard Nav & Dev Skip | Engine | All |
| D17 | Lesson Engine Polish: Navigation, Resume & Visual Cohesion | Engine | All |
| D18 | Quiz Visual Restyle & Article Color System | Engine | All |
| D19 | Arrow Key Scrolling, Spacebar Parity & Keyboard Audit | Engine | All |
| D20 | Foundations Playthrough Visual Parity | Engine | All |
| D21 | Board-Style Default, Backspace Hierarchy & Stage Grid | Engine | All |
| D22 | LessonEngine Visual Parity & Content Formatting Rules | Engine | All |
| D23 | Lesson Redundancy Prevention & NL V2 Unit 2 L1-L5 | Pipeline | All |
| D24 | MC/FB Shuffle, Verb Spelling Notes, Gold-Standard Verb Cards | Engine/Pipeline | All |
| D25 | Visual Cleanliness: IPA, Slashes, isScript, "See Foundations" | Pipeline | All |
| D26 | Translation Grading Rethink: 3-Layer Matching | Engine | All |
| D27 | Drag-Fill Step Type: Multi-Blank Sentence Completion | Engine | All |
| D28 | Three Regression Fixes (Hooks, Tip Logic, Article Colors) | Engine | All |
| D29 | Demonstrative Grammar Fix, Drag-Fill UX, P32 Linguistic Gate | Engine/Content | Dutch |
| D30 | U3 Numbers & Time: Infrastructure, L1-L2 Content & Audit Fixes | Content | Dutch |
| D31 | Visual Density Rework: Engine Changes, Pipeline Rules, Content Migration | Engine | All |
| D32 | Dark Mode + U1-U2 Jargon Audit | Engine/Content | Dutch |
| D34a-l | Session 34: Post-Audit Fixes (12 items) | Content | Dutch |
| D35a-h | Session 35: Candy Gloss UI Overhaul | Engine | All |
| D36 | Glossy Candy UI Overhaul (Session 43+) | Engine | All |
| D37 | Dark Mode Race Fix + Continue Button / B1 Curriculum Complete | Engine/Content | Dutch |
| D38 | Custom SVG Icon Library | Engine | All |
| D39 | Korean A1.1 Curriculum (U1-U3, 30 lessons) / Icon System | Content/Engine | Korean |
| D40 | Em Dash Purge (Leak Prevention) / Hover Selection System | Pipeline/Engine | All |
| D41 | Font System: Quicksand Headings, Nunito Body | Engine | All |
| D42 | Compound Bubble: Glossy Candy Style | Engine | Korean |
| D43 | Hanja Removal from Primary View | Engine | Korean |
| D44 | Sino-Korean Introduction + Hangul History Deep Dive | Content | Korean |
| D45 | Enter Key as Continue Trigger | Engine | All |
| D46 | Arrow Parser Collision Fix | Engine | All |
| D47 | Deep Dive Glossy Candy Treatment (Global) | Engine | All |
| D48 | Romanization Behind Toggle (Non-Latin) | Engine | Non-Latin |
| D49 | Optional Hanja Toggle on Compound Bubble | Engine | Korean |
| D50 | Deep Dive Romanization for CJK | Engine | CJK |
| D51 | Quiz Option Font Fix (CSS Global) | Engine | All |
| D52 | Continue Button Auto-Focus on Lesson Complete | Engine | All |
| D53 | False Friend Glossy Lavender Bubble | Engine | All |
| D54 | Hanja Readability Fix | Engine | Korean |
| D55 | noteHl Single-Char Quote Fix | Engine | All |
| D56 | Done Screen Spacebar Stale Closure Fix | Engine | All |
| D57 | Full A1.1 Pedagogical Audit (81 to 0 issues) | Content | Korean |
| D58 | Structured Card Design Standard (THE Standard) | Pipeline | All |
| D59 | Korean A1 Density Upgrade + P42 Foundation Tips | Content | Korean |
| D60 | Quiz Question Cards: Compound Glossy Bubble Style | Engine | Korean |
| D61 | Example Sentences: Standalone Compound Bubbles | Engine | Korean |
| D62 | Korean-First Auto-Split in Notes | Engine | Korean |
| D63 | Jamo Inline Sizing | Engine | Korean |
| D64 | Operator Sizing in Word Card Display | Engine | Korean |
| D65 | Korean Quiz Option Rendering | Engine | Korean |
| D66 | Korean Word Pills in Tips | Engine | Korean |
| D67 | P8 Hint Leak Purge (CRITICAL) | Pipeline | All |
| D68 | Tip Density: Max 4 Visible Lines | Pipeline | All |
| D69 | Match Pairs Drag-and-Drop + Quiz Sound Fix | Engine | All |
| D70 | P45: DeepDive Is EXPLANATION, Never Continuation | Pipeline | All |
| D71 | P34 Teach-Before-Test: Full Curriculum Audit Required | Pipeline | All |
| D72 | Korean TOPIK/TTMIK Standards Audit | Content | Korean |
| D73 | -(으)ㄹ까요/-(으)ㄹ래요 Highest A2 Gap | Content | Korean |
| D74 | Code-Verified Gap List Replaces Assumed Gaps | Pipeline | All |
| D75 | Question Words Need Standalone Teach Cards | Content | Korean |
| D76 | Seed Registry Expansion (12 to 26) | Content | Korean |
| D77 | B1 Density Violation: 63% Below P43 Floor | Content | Korean |
| D78 | P46: B1+ Multi-Construct Sentence Density | Pipeline | All |
| D79 | P8 Safeguards for Contrast Lessons | Pipeline | All |
| D80 | Code-First Verification Protocol | Agent Protocol | All |
| D81 | Agent Deployment Standards | Agent Protocol | All |
| D82 | Documentation Hierarchy | Architecture | All |
| D83 | Onboarding: Skip "I speak" + Flag Icon Grid | Engine | All |
| D84 | Korean/English Translation Separation | Content/Engine | Korean |
| D85 | Streamlined Onboarding: Single Screen | Engine | All |
| D86 | String Editing Safety (CLAUDE.md only) | Agent Protocol | All |
| D87 | Post-Verification Evidence Format (CLAUDE.md only) | Agent Protocol | All |
| D88 | B1 Density Uplift: 106 Lessons to 20+ Steps | Content/Quality | Korean |
| D89 | Engine Bug: MC ans/opts \n Mismatch | Engine/Quality | All |
| D90 | Pattern-ID MC Reframe to Meaning Questions | Pipeline/Quality | All |
| D91 | Two-Pass P8 Scanning Protocol | Agent Protocol | All |
| D92 | B1 Full Quality Audit: 14 Rounds | Content/Quality | Korean |
| D100 | Korean Dialogue Enrichment + Sequential Agent Workflow | Content/Workflow | Korean/All |

---

## Topic Index

### Font / Typography
D41, D51, D58

### Anti-Leak / P8
D3, D6, D24, D34b, D40, D67, D79, D90, D91

### Keyboard Navigation
D7, D16, D17, D19, D45, D52, D56

### UI / Visual Design
D10, D11, D13, D15, D18, D20, D21, D22, D31, D35a-h, D36, D38, D42, D47, D53, D60, D61

### Dark Mode
D32, D37

### Sound / Audio
D11, D35d, D69

### Korean Curriculum
D2, D6, D8, D39, D44, D57, D59, D72, D73, D74, D75, D76, D77, D88, D92, D93, D94, D96, D98, D100

### Korean Engine Features
D42, D43, D48, D49, D50, D54, D58, D60, D61, D62, D63, D64, D65, D66, D84

### Dutch Curriculum
D12, D23, D29, D30, D32, D34a-l, D99, D101, D102

### German Curriculum
D103, D104

### French Curriculum
D105

### Spanish Curriculum
D107, D108

### Pipeline Rules
D3, D14, D23, D24, D25, D40, D58, D67, D68, D70, D71, D78, D79, D89, D90, D97

### Agent Protocol / Documentation
D74, D80, D81, D82, D86, D87, D91, D95, D97, D100, D104, D106, D107

### Content Enrichment Workflow
D100, D105, D108

### Architecture / Scaling
D4, D5, D9, D12, D82, D83, D85

### Onboarding
D83, D85

### Content Quality
D15, D25, D29, D57, D67, D70, D71, D77, D78, D89, D92, D93, D96, D97, D98, D99, D101, D102, D103, D104, D105, D108

---

## Where to Find Each Decision

- **D1-D85**: Inline comments in `src/lingoverse.jsx`, starting at line ~676 (main decision log block) and scattered as inline comments
- **D34a-l**: Session 34 block at line ~3643
- **D35a-h**: Session 35 block at line ~3707
- **D36-D40**: Session 35+ block continuing from line ~3778
- **D86-D87**: Defined in `CLAUDE.md` Agent Deployment Standards (Rules 5-6), not in lingoverse.jsx
- **D89-D92**: From B1 Full Quality Audit (March 2026), defined in `CLAUDE.md` and `DECISION_LOG.md`
- **D95-D98**: B2 density uplift cycle (March 2026), defined in `CLAUDE.md` and `DECISION_LOG.md`
- **D99**: Dutch B1 polish (March 2026), defined in `DECISION_LOG.md`
- **D102**: Dutch B2 Quality Audit (March 2026), defined in `CLAUDE.md`
- **D103**: German A1-B2 Complete Build (March 2026), defined in `CLAUDE.md`
- **D104**: Post-Build Structural Validation Protocol (March 2026), defined in `CLAUDE.md` Rule 10
- **D105**: French A1-B2 Complete Build (March 2026), defined in `CLAUDE.md` and `DECISION_LOG.md`
- **D106**: Agent Model Escalation Protocol (March 2026), defined in `CLAUDE.md` Rule 11 and `DECISION_LOG.md`
- **D107**: Temp-File Agent Workflow (March 2026), defined in `CLAUDE.md` Rule 12 and `DECISION_LOG.md`
- **D108**: Spanish A1-B2 Complete Build (March 2026), defined in `CLAUDE.md` and `DECISION_LOG.md`

---

## D89-D92: B1 Audit Decisions (2026-03-15)

### D89: Engine Bug — MC ans/opts \n Mismatch
LessonEngine uses strict `===` to compare selected option with `st.ans`. If `ans` contains `\n` but the corresponding option in `opts[]` uses a space (or vice versa), the quiz PERMANENTLY fails — the learner can never select the correct answer. **Rule**: NEVER use `\n` inside MC `ans` or `opts` strings. Use space or parentheses instead. Systematic scan found 6 instances across A1-B1; all fixed.

### D90: Pattern-ID MC Reframe to Meaning Questions
MC questions like "Which grammar pattern is used?" with options like `"-(으)면서 (simultaneous)"` are P8 violations when the hint explains the pattern. **Rule**: Reframe pattern-identification MCs to test MEANING or USAGE. Instead of "Which connector?", ask "What does this sentence describe?" with answer like "Two things happening at the same time." This tests comprehension, not label recall.

### D91: Two-Pass P8 Scanning Protocol
Single-pass P8 scans miss subtle leaks, especially single-particle answers (는, 기, 고) where the grammar pattern containing them appears in the hint. **Protocol**: (1) First pass: scan all fb/mc for exact answer substring in hint. (2) Second pass: re-scan with awareness of single-character answers and grammar pattern names. (3) Both passes must use different agents or independent reviews. B1 audit: Pass 1 found 26, Pass 2 found 11 more = 37 total.

### D92: B1 Full Quality Audit — 14 Rounds
Complete B1 (U11-U20) audit across 14 commit rounds. Fixed: ~50 P8 hint-reveals, 6 engine \n bugs, 5 P34 teach-before-test violations, ~15 missing translations, 3 pattern-ID MC reframes, 2 duplicate match sets, 1 misleading translation. All fixes verified by independent agent scans. Standard for future level audits.

## D93: A1-A2 Full Quality Audit (2026-03-15)

Complete A1-A2 (U1-U10) audit against CEFR A1/A2, TOPIK I, and TTMIK L1-4. Verified: all 34 CEFR A1 grammar constructs, 17 vocabulary domains, 15 communicative functions, 57 TOPIK I patterns. Gaps found and fixed across 7 commit rounds:
- **Round 1** (bea78d3): 어떤, -(으)ㄹ 때, -는 중이다 teach cards + 3 pipeline fixes.
- **Round 2** (5756746): 52 pipeline issues (P8/D90/P44) + -(으)ㄹ게요 TOPIK gap.
- **Round 3** (6861a44): 화나다 (emotion vocab), 아무 (TTMIK L4 prefix), -(으)ㄹ 뻔하다 (TTMIK L4).
- **Round 4** (59e3386): 5 color teach cards (빨간/파란/하얀/검은/노란) to fix tip that said "You know" colors never taught.
- **Round 5** (e1602fe): -기 때문에 (formal "because"), -(으)ㄹ 수밖에 없다 ("can't help but") from TTMIK agent findings.
- **Round 6** (8362d3c): 자기/자신 (reflexive pronoun "self") teach card added to U10L7. TTMIK L2-15 item, verified genuinely missing via grep.
- **Round 7** (9e13237): 아래/밑, 앞, 뒤 (spatial position words) teach cards added to U6L4.2. CEFR agent found "8-position set" tip listed 8 words but only 4 had teach cards.

**Final coverage**: CEFR A1 34/34, CEFR A1 Vocab 17/17, TOPIK I 57/57, TTMIK L1 30/30, L2 29/30, L3 20/20, L4 11/11.

**Design decisions confirmed (not gaps)**: Past tense in A2 U7 (not A1), future tense in A2 U9, body parts in A2 U8, comparatives in B1 U12. Korean A1 focuses on particles + present tense; A2 adds tenses + conditions. This mirrors TTMIK and standard Korean pedagogy.

**Deferred to B2 (not A1-A2 scope)**: 뿐 (formal "only"), 마저/조차 (emphatic "even"), -(으)ㄹ 정도로 (to the extent), 얼마든지 (as much as you want).

## D94: Korean B2 Curriculum Kickoff (2026-03-15)

Korean A1-B1 is fully audited and verified. B2 curriculum (U21-U30) begins. B2 targets TOPIK 4 / CEFR B2 / TTMIK L5-9. Key parameters:
- **Units**: U21-U30 (10 units, continuing the v1 track)
- **Target lessons**: ~100-120 (10-12 per unit)
- **Target steps**: ~2,000-2,500 (20-25 per lesson per P43)
- **Grammar scope**: Advanced connectors, formal written Korean, advanced honorifics, proverbs/idioms, passive/causative deepening, complex nominalization, TOPIK essay structure
- **B2 seeds already planted in B1**: U20L10 deepDive previews -(으)ㄴ/는 반면에, -고자, -(으)ㄹ 뿐만 아니라, -는 바람에, -(으)ㄹ 정도로
- **Items deferred from A1-A2 audit**: 뿐, 마저/조차, -(으)ㄹ 정도로, 얼마든지 — must be placed in B2
- **Items deferred from B1 gap plan Tier 3**: -(으)ㄹ 뻔했다 (already added in A1-A2 audit round 3 to U20), -지요/-죠, -(이)라도, 대신에, -기는 하다
- **Pipeline**: All rules P8-P56, D58, D89-D93 apply. P46 multi-construct density is MANDATORY. B2 should be stricter than B1.
- **References**: TOPIK II (levels 3-4), TTMIK L5-9, Korean Grammar in Use Intermediate, Integrated Korean Intermediate 1-2

## D95: B2 Density Failure Post-Mortem (2026-03-15)

Korean B2 skeleton (U21-U30, 100 lessons) was built with 91/100 lessons below P43 minimum. Progressive thinning: U21 averaged 17.7 steps, U30 averaged 10.9. No agent monitored density during build. **Root cause**: No Rule 7 enforcement (density checked post-build, not per-lesson). Same pattern as B1 pre-uplift (D88). **Action**: Created P47 (build-time density enforcement) and Agent Rule 7 (deploy orchestrator agent during multi-unit builds). See CLAUDE.md for full rule text.

## D96: B2 Density Uplift (2026-03-15)

All 100 B2 lessons uplifted to 20-22 steps (avg 21.2). ~600 cross-level review steps added recycling A1-B1 grammar. However, uplift enforced step COUNT but not step QUALITY — see D97 and D98.

## D97: Content Quality Gate for Uplift/Batch Edits (2026-03-15)

Created Agent Rule 8 in response to D96 quality failures. **Rule**: After any batch edit touching 10+ steps, MUST verify P48 (step type correctness), P49 (no CEFR in learner content), P50 (recycling tests usage not classification) BEFORE committing. Every added step must be pedagogically valid on its own. Density without quality is anti-pedagogy. See CLAUDE.md Rule 8 for full text.

## D98: P48/P49 Fix — 520 fb→drag_fill + 15 CEFR Purge (2026-03-15)

**P48 fix**: Converted all 520 multi-blank `fb` steps to `drag_fill` with proper `blanks:{}` objects and `pool:[]` arrays. The engine `fb` renderer only supports single-blank `{1}`; steps with `{2}`,`{3}`,`{4}` rendered as literal text to learners. Distribution: U18(1), U21(21), U22(29), U23(56), U24(67), U25(67), U26(69), U27(44), U28(52), U29(56), U30(58). Conversion was mechanical (Python script), verified by grep post-conversion: zero remaining `type:"fb"` with `{2}+`.

**P49 fix**: Rewrote 15 quiz steps that exposed CEFR level labels (A1/A2/B1/B2/C1) in learner-facing `q`, `opts`, or sentence strings. Examples of violations:
- "A1-문법은?" → rewritten to "이 문장에서 이유와 요청을 나타내는 문법은?"
- "B2에서 배운 원인 패턴의 수는?" → rewritten to test formal cause pattern identification
- "B1에서 배운 문법을" → removed CEFR label, kept grammar-usage question

**Verification**: `grep` confirms zero remaining CEFR labels in quiz `q`/`opts`/`ans` fields. Build passes. Engine runtime safety net also added (auto-convert any surviving multi-blank fb to drag_fill).

## D99: Dutch B1 Polish — Density Uplift + Quick Fixes (2026-03-15)

Complete Dutch B1 (U11-U20) polish pass. Three phases:

**Phase 1: Quick Fixes**
- 1 P49 violation fixed: U20L8 CEFR quiz ("What is your next Dutch level?" with A2/B1/B2/C1 options) replaced with grammar register question.
- 5 P22c em-dash violations fixed in learner-facing `note:` and `title:` fields.
- 11 critical P8 hint-reveals rewritten. Pattern: hints directly stated article gender ("Huis is a het-word"), demonstrative rules ("Man = de-word, hier = nearby"), or complete grammar formulas ("S = 't kofschip = -t"). All rewritten to guide without revealing.

**Phase 2: Density Uplift**
B1 units averaged 12.9 steps/lesson (76/80 lessons below P43 minimum of 18). Five parallel agents deployed in git worktrees, each handling 2 units:
- U11-U12: +38 steps (past perfect, zou/zouden, banking vocab)
- U13-U14: +89 steps (subordination, all 5 uses of 'er')
- U15-U16: +95 steps (infinitives, verb clusters, passive voice)
- U17-U18: +86 steps (housing, relative clauses, indirect speech)
- U19-U20: +131 steps (participles, compounds, diminutives, consolidation)
Total: ~437 new quiz steps across 76 lessons. All mc/fb/match/drag_fill types.

**Phase 3: Quality Verification**
Independent audit agent verified: 80/80 lessons at 18+ steps (avg 18.3). P48: 0 violations. P49: 0 violations. Build: passes.

**Key difference from Korean D96 uplift**: Dutch B1 uplift followed Rule 7 (parallel agents with density monitoring) and Rule 8 (quality verification before commit). No P48/P49 violations introduced. No meta-curriculum leakage. No broken step types. Every new step tests vocabulary or grammar from its lesson's teach cards.

---

## D101: Dutch Quality Uplift to Korean Standard (2026-03-15)

Full-spectrum quality uplift of Dutch curriculum from A1-B1 to A1-B2, targeting Korean gold standard.

**Phase 0: Purple Theming + CLAUDE.md**
All 30 v2 Dutch unit colors changed to #7B5EE8 (purple). Article colors (blue de, gold het) PERMANENT. CLAUDE.md updated with manifesto index, P8 leak types, language complexity guidance.

**Phase 1: P26 Core Constructs**
Added "How Dutch Works: A Roadmap" tip to U1 L1, naming all 9 core Dutch constructs with forward references to where they're taught.

**Phase 2: P8/P22c/P44 Quality Fixes**
- 64 severe P8 hint-reveals fixed (hints that revealed answer text)
- 12 P44 lazy hints expanded to 15+ characters
- 14 P22c em-dashes removed from v2u10l8

**Phase 3: Density Fixes**
- v2u2l10: 15 to 18 steps (+3 quiz steps)
- v2u9l8: 17 to 18 steps (+1 quiz step)

**Phase 4: Dialogue Enrichment**
810/835 A1-B1 teach cards enriched with A:/B: dialogues (97%). Content-aware pattern matching against 16 regex categories for contextually appropriate responses.

**Phase 5: B2 Curriculum Build (U21-U30)**
10 new units, 80 lessons, ~1,600+ steps:
- U21: Formeel Schrijven (conditionals, opinions, formal letters)
- U22: Nieuws & Media (advanced passive, indirect speech)
- U23: Als Ik Kon... (hypotheticals, subjunctive)
- U24: Academisch Nederlands (participials, cleft sentences)
- U25: Op de Werkvloer (register, modals, business Dutch)
- U26: Maatschappij & Cultuur (advanced conjunctions: doordat, zodat, mits, tenzij, naarmate)
- U27: Gevorderde Gesprekken (discourse markers, hedging, phone etiquette)
- U28: Literatuur & Uitdrukkingen (proverbs, idioms, figurative language)
- U29: Debat & Argumentatie (counter-arguments, concession, persuasion)
- U30: B2 Klaar! (NT2 prep, C1 preview)

**Final Stats**: 30 v2 units, 244 lessons, 5,446 steps. 1,090/1,492 teach cards with dialogues (73%). 0 em-dashes. 0 P48 violations.

---

## D102: Dutch B2 Quality Audit (2026-03-16)

D92-style deep audit of Dutch B2 (U21-U30), 10 rounds, 10 commits:
- Rounds 1-2: 93 severe P8 hint-reveals fixed
- Round 3: 7 P49 CEFR labels removed
- Round 4: 3 under-dense lessons uplifted to 18+ steps
- Round 5: P8 pattern leaks + MC option length equalization
- Round 6: 6 duplicate MC questions replaced
- Round 7: 2 P49 intro titles fixed
- Round 8: 154 CAPS hint-reveals rewritten
- Round 9: 1 visual leak, 1 P48 fix, 8 U30 hint-reveals
- Round 10: 5 P34 teach-before-test violations fixed
- de/het article audit: 55+ nouns verified, ZERO errors
- Final: P48=0, P22c=0, P44=0, P49=0, density=80/80, board:true=80/80

## D103: German A1-B2 Complete Build (2026-03-16)

Full German curriculum built from scratch:
- Foundations: 6 sections/25 items knowledge grid, 6 stages/15 playthrough lessons, 5 tasks/35 items gate quiz
- 30 units (U1-U30), 240 lessons, 4,518 steps, avg 18.8 steps/lesson
- A1 (U1-U8), A2 (U9-U16), B1 (U17-U24), B2 (U25-U30)
- 1,100/1,100 teach cards with dialogues (100%)
- der/die/das article colors (der=blue, die=coral, das=purple)
- Quality audit PASS: P48=0, P22c=0, P49=0, board:true=240/240

## D104: Post-Build Structural Validation Protocol (2026-03-16)

Created after German D103 shipped with 3 critical defects causing white screen crash:
1. 3 stray commas creating undefined array elements
2. 3 MC steps missing `ans` field
3. Units scrambled out of order

All invisible to Vite (valid JS, compiles fine) but crash React at runtime. Rule 10 mandates a validation script checking: no undefined elements, sequential unit ordering, required fields on all step types, board:true, density. See CLAUDE.md Rule 10 for full script template.

## D105: French A1-B2 Complete Build (2026-03-16)

Full French curriculum built from scratch following D103/D104 playbook:
- LANG_BLUEPRINT["fr"] created in metadata.js
- FOUNDATIONS_BY_LANG["fr"] expanded to 5 sections/~25 items
- FK_PLAYTHROUGH["fr"] built with ~15 lessons
- FK_GATE_QUIZ["fr"] built with 5 tasks/~35 items
- 30 units (U1-U30), 240 lessons, 4,380 steps, avg 18.3 steps/lesson
- 883/883 teach cards with A:/B: dialogues (100%)
- le/la article colors (le=blue masculine, la=coral feminine)
- Quality scan: P48=0, P22c=0, P49=0 (2 DELF B2 exam name refs, not meta-curriculum), board:true=240/240, unit ordering=PASS
- Track: v1. All purple themed (#7B5EE8). Lesson IDs: fre{N}l{N}.

Build used Opus 4.6 agents after Sonnet agents proved unreliable (stale, unresponsive, failing to complete). See D106.

## D106: Agent Model Escalation Protocol (2026-03-16)

**Problem**: During the French A1-B2 build, Sonnet-tier sub-agents frequently became stale, unresponsive, or failed to complete their assigned tasks. This caused delays and required manual intervention from the owner.

**Root cause**: Large content generation tasks (building 8+ units with 18+ steps per lesson) exceed the reliable capacity of smaller models. The content requires: (a) sustained coherence across 1,000+ lines, (b) strict pipeline rule adherence (P8, P34, P43, P48, P49), (c) language-specific accuracy (grammar, phonetics, cultural context), and (d) structural format compliance (exact JSON-like JS object format).

**Rule (codified as Rule 11 in Agent Deployment Standards)**:
1. **Default to Opus 4.6 for content generation agents.** Any agent tasked with building curriculum units (teach cards, quiz steps, lessons) MUST use `model:"opus"`. Sonnet agents lack the sustained output quality and reliability needed for these tasks.
2. **Sonnet remains acceptable for**: validation agents (grep/count checks), search/exploration agents, simple file edits, and tasks under ~500 lines of output.
3. **If a Sonnet agent fails or goes stale**: Do NOT retry with Sonnet. Escalate immediately to Opus 4.6. Document the failure in the session.
4. **For multi-unit builds**: Always use Opus 4.6 from the start. The cost of retrying with Opus after Sonnet failure exceeds the cost of using Opus initially.
5. **Agent reliability is non-negotiable.** Every deployed agent must complete its task. Stale/unresponsive agents waste owner time and break sequential workflows (Rule 9). If an agent model cannot reliably complete a task type, that model is banned from that task type.

**This is now permanent policy.** All future curriculum builds (Spanish, Arabic, expansion languages) MUST use Opus 4.6 for content generation agents.

## D107: Temp-File Agent Workflow for Curriculum Builds (2026-03-16)

**Problem**: During the Spanish A1-B2 build, three agent deployment strategies failed:
1. **Worktree agents** branched from commits that predated `units-spanish.js`, so the file didn't exist in the worktree. Agents couldn't write to the target file. Failed 3 times.
2. **Direct-write agents** (Opus) went stale after reading thousands of lines of context but never writing. One agent consumed 68KB of output reading files without producing any content.
3. **Main-session manual writing** was functional but painfully slow, taking the main session's full attention for each unit.

**Solution (codified as Rule 12 in Agent Deployment Standards)**:
1. Content agents write to **temp files** (`/tmp/esp-uN.js`), NOT to the main units file.
2. Each agent writes a self-contained unit as `module.exports = [{...unit object...}]`.
3. The agent runs its own validation (step counts, P48, board:true, required fields).
4. The **main session** validates independently, merges into the main file, runs full-file validation, builds, commits.
5. Two agents can run in parallel (e.g., U7 + U8) since they write to separate temp files.
6. A validation agent (Sonnet-tier) scans after merge for P8/P48/P49/P22c.
7. **Worktrees are BANNED for curriculum builds.** They branch from committed state, which may not include the current session's work.

**Key insight**: Separation of content generation (agent) from file management (main session) eliminates all three failure modes. Agents focus on writing quality content. Main session focuses on integration and validation.

**Build status at D107**: Spanish A1 U1-U6 complete (48 lessons, 867 steps). Infrastructure complete. U7-U30 remaining.

---

## Notes

## D108: Spanish A1-B2 Complete Curriculum Build (2026-03-17)

Full Spanish curriculum built from scratch following D107 temp-file agent workflow + D106 Opus 4.6 agents:
- LANG_BLUEPRINT["es"] created in metadata.js (2-gender system, ser/estar, subjunctive, verb groups, inverted punctuation)
- CULTURE_PACKS["es"] created in metadata.js (food, customs, places, situations)
- FOUNDATIONS_BY_LANG["es"] expanded to 5 sections/~25 items
- FK_PLAYTHROUGH["es"] built with ~12 lessons across 5 stages
- FK_GATE_QUIZ["es"] built with 5 tasks/~35 items
- 30 units (U1-U30), 240 lessons, 4,363 steps, avg 18.2 steps/lesson
- A1 (U1-U8): Greetings, family, numbers/days/colors, food, daily routine, home, directions, shopping
- A2 (U9-U16): Preterito indefinido (regular + irregular), imperfecto, indefinido vs imperfecto, object pronouns, future simple, comparatives, conditional
- B1 (U17-U24): Subjuntivo presente (regular + irregular), relative pronouns, pluscuamperfecto/reported speech, passive voice, gerundio, advanced connectors, work culture
- B2 (U25-U30): Subjuntivo imperfecto, condicional compuesto, nominalization, discourse markers, proverbs/idioms, DELE B2/SIELE prep + C1 preview
- All teach cards have A:/B: dialogues. el/la article colors (el=blue, la=coral).
- Quality validation: P48=0, P22c=0, P49=0, board:true=240/240, unit ordering=PASS, density=all 18+
- Track: v1. All purple themed (#7B5EE8). Lesson IDs: esp{N}l{N}.

Build used D107 temp-file agent workflow: Opus 4.6 agents wrote units to /tmp/esp-uN.js, main session validated and merged into units-spanish.js. Multiple agents went stale during B2 build (U22, U27x2, U30), requiring direct main-session builds. All units validated with structural validation script (Rule 10) before final commit.

**Phase 1 Content is now COMPLETE.** All 5 launch languages (Korean, Dutch, German, French, Spanish) have full A1-B2 curricula.

---

## Notes

- D33 does not exist (numbering gap between session-level and main decisions)
- D34a-l and D35a-h use sub-letter notation for session-level fixes
- D36-D40 in the session block overlap with D36-D40 in the main decision list (same decisions, cross-referenced)
- Decisions D86+ live in CLAUDE.md only (agent protocol additions that don't require engine code)
