# Decision Log — Structured Index

> Machine-searchable index of all D-numbers from `src/lingoverse.jsx`.
> Last updated: 2026-03-15 (D1-D85 + D86-D88 in CLAUDE.md)

---

## Quick Reference Table

| D# | Title | Category | Scope |
|----|-------|----------|-------|
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
D2, D6, D8, D39, D44, D57, D59, D72, D73, D74, D75, D76, D77, D88, D92

### Korean Engine Features
D42, D43, D48, D49, D50, D54, D58, D60, D61, D62, D63, D64, D65, D66, D84

### Dutch Curriculum
D12, D23, D29, D30, D32, D34a-l

### Pipeline Rules
D3, D14, D23, D24, D25, D40, D58, D67, D68, D70, D71, D78, D79, D89, D90

### Agent Protocol / Documentation
D74, D80, D81, D82, D86, D87, D91

### Architecture / Scaling
D4, D5, D9, D12, D82, D83, D85

### Onboarding
D83, D85

### Content Quality
D15, D25, D29, D57, D67, D70, D71, D77, D78, D89, D92

---

## Where to Find Each Decision

- **D1-D85**: Inline comments in `src/lingoverse.jsx`, starting at line ~676 (main decision log block) and scattered as inline comments
- **D34a-l**: Session 34 block at line ~3643
- **D35a-h**: Session 35 block at line ~3707
- **D36-D40**: Session 35+ block continuing from line ~3778
- **D86-D87**: Defined in `CLAUDE.md` Agent Deployment Standards (Rules 5-6), not in lingoverse.jsx
- **D89-D92**: From B1 Full Quality Audit (March 2026), defined in `CLAUDE.md` and `DECISION_LOG.md`

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

---

## Notes

- D33 does not exist (numbering gap between session-level and main decisions)
- D34a-l and D35a-h use sub-letter notation for session-level fixes
- D36-D40 in the session block overlap with D36-D40 in the main decision list (same decisions, cross-referenced)
- Decisions D86+ live in CLAUDE.md only (agent protocol additions that don't require engine code)
