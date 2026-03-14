LingoVerse Korean Curriculum — Agent Handoff Brief
Session 39 Onward | Updated: 2026-03-12
CRITICAL: READ BEFORE TOUCHING ANY CODE
File Location
Working file: lingoverse.jsx  (single-file React app, ~26,651 lines)
Korean curriculum: Lines ~19180–21920
Korean pipeline rules: Lines ~19012–19176 (P40-P56 + Decision Log + Validation
Checklist)
Korean seed registry: Lines ~19185–19211
Braces: 23,315/23,315 (MUST stay balanced after every edit)
The P56 Rule (NON-NEGOTIABLE)
After ANY content edit, verify:
1. No unclosed strings (quote parity per line in L19000-22200)
2. No literal \n  between JS objects (must be real newlines)
3. Brace balance unchanged
WHAT WAS DONE (Sessions 36-39)
Sessions 36-38: Pipeline Batches (ALL RESOLVED 
)
See HANDOFF_SESSION38 for full details. Summary:
P43 naked translations: 184 → 0
P45 DD splits: 5 → 0


P49 visible teaching: fixed
P52 unit/lesson refs: 7 → 0
P53 duplicates: 28 → 0
P54 MC length bias: 59 → 0
DD-TITLES generic: 337 → 0
Grammar cards missing DD: 22 → 0
을/를 restructure: moved from U4 to U2
Session 39: D62 Attempted + Partial Completion
 COMPLETED — Safe changes shipped:
Change
Scope
Status
102 intro desc rewrites
All 10 units
 Avg 61 chars (was 173). Hand-written.
Board intro desc renderer
Line
~24849
 Now processes \n , renders candy
bubbles
Legacy intro desc
renderer
Line
~24908
 Same line-aware processing
54 title fixes
All 10 units
 Korean-first for “More About X” patterns
 FAILED — Automated D62 engine on note/text/deepDive fields
What happened: An automated regex engine was built to extract inline Korean from English
prose across all note: , text: , and deepDive  fields. It processed ~480 violations.
Why it failed: The engine could not distinguish between:
Korean WORDS mixed into English prose (genuine D62 violations) — e.g., "해요체 is
safe for 95% of daily situations"
Korean GRAMMAR PATTERNS that ARE the teaching — e.g., "Pattern: topic + noun +
이/가 + 아니에요"
The engine ripped grammar formulas apart, creating 404 orphaned Korean fragments
(particles like 이, 가, 아니에요 on standalone lines without context or translation). This is
WORSE than the original violation — it destroys the teaching.


Decision: All automated note/text/deepDive changes were REVERTED. The shipped file
contains ONLY the 4 safe changes listed above. The original note/text/deepDive content is
UNTOUCHED.
 REMAINING — D62 violations in note/text/deepDive fields
~376 violations remain in note/text/deepDive fields across all 10 units. These need manual,
field-by-field rewrites by someone who understands:
1. Which Korean belongs inline (grammar patterns, particle formulas, contraction notation)
2. Which Korean should be extracted (vocabulary terms buried in English prose
paragraphs)
3. How to rewrite the English so it still makes sense after extraction
The automated approach CANNOT work for this. See Decision Log D62-FAIL below.
 WHAT’S LEFT
BATCH D62: Inline Korean in note/text/deepDive (~376 violations)
Status: Intro descs fixed (102/102). Note/text/deepDive untouched (376 violations).
Why it’s hard: Korean grammar explanations necessarily reference Korean particles and
endings. The D62 rule says “Korean standalone on its own line” but grammar FORMULAS
like 이/가 + 아니에요 are patterns being taught — extracting the particles destroys the
pattern. Every fix requires human judgment about what’s a vocabulary term (extract) vs a
grammar pattern (keep or restructure differently).
Recommended approach for next session:
1. Work ONE UNIT at a time
2. Read each note/text field IN CONTEXT of what it’s teaching
3. For each Korean-in-English violation, decide:
Is this a vocabulary word in English prose? → Extract to own line with → translation
Is this a grammar formula/pattern? → Keep inline BUT add \n\n  before and after
for visual separation
Is this an example sentence? → Already handled by example:  field, remove from
prose


4. Validate after EACH UNIT (braces, strings, render check)
5. Target: ~40 violations per unit, ~1 hour per unit = 10 hours total
Categories of violations (from audit):
Type
Count
Fix approach
Korean (translation) pairs in English
54
Extract to own line with →
Korean suffixes in English (-다, -요, etc.)
99
Keep in context, add spacing
Korean words in English prose
199
Extract vocabulary, keep patterns
Titles with Korean
60
 DONE (54 fixed Session 39)
Other
70
Case-by-case
BATCH P36: Dense Notes (11) + Intro Prose (22)
22 intro prose walls → 
 DONE (all 102 intros rewritten)
11 dense notes → Still pending. Overlaps with D62.
DECISION LOG — SESSION 39
D62-INTRO: Intro Desc Rewrite Strategy
Decision: Rewrite all 102 intro descs to max 2 sentences, avg 61 chars. Korean on own line
with → translation. Goals section carries detail. Rationale: Intros are the first thing ADHD
learners see. Prose walls cause immediate cognitive overload. Short intros with one candy-
bubbled Korean term set the lesson’s focus instantly. Status: 
 Shipped. All 102 intros
rewritten.
D62-RENDERER: Intro Desc Renderer Fix
Decision: Replace both intro desc renderers (board-style L24849, legacy L24908) with
line-aware IIFE that processes \n  splits. Korean+arrow pairs get candy bubbles (22px bold
purple, gradient background). Blank lines get 14px spacers. Rationale: The original
renderers dumped st.desc  raw into a <p>  tag, making \n  invisible. Without the renderer
fix, content changes have zero visual effect. Status: 
 Shipped. Both renderers replaced.
Note: dk  variable (dark mode check) must be in scope. The board intro renderer lives
inside LessonEngine  function (L23569) which defines dk  at L23570.


D62-FAIL: Automated D62 Engine Failure 
Decision: REVERT all automated note/text/deepDive D62 changes. Ship only safe changes.
What failed: A regex-based engine that:
1. Found Korean ([\uac00-\ud7af]) with 2+ English words before it
2. Extracted Korean to standalone line
3. Added → translation from parenthetical if present
4. Left English context above
Why it failed:
Could not distinguish vocabulary terms from grammar patterns
Ripped 이/가 + 아니에요 into 3 orphaned lines ( 이, 가, 아니에요)
Created 404 orphaned Korean fragments across all units
Destroyed grammar formulas that ARE the teaching content
Broke English sentences by removing Korean that was syntactically necessary
Lesson learned: D62 fixes require HUMAN JUDGMENT per field. Automation works for
titles (pattern is simple: “More About X” → “X”) and intro descs (complete rewrite). It does
NOT work for grammar explanations where Korean is structurally part of the English
sentence.
For future sessions: Do NOT attempt automated D62 on note/text/deepDive fields. Work
manually, unit by unit, reading each field in context.
D62-TITLES: Korean-First Title Fixes
Decision: Fix only simple patterns: “More About X” → “X”, “English (Korean)” → “Korean:
English” Rationale: These are safe mechanical transforms. More complex title patterns
(Korean suffixes, mixed content) need human judgment. Status: 
 54 titles fixed. ~6
complex titles left unfixed (acceptable).
KOREAN CURRICULUM MAP (Post-Session 39)
Unit
CEFR
Lessons
Theme
Session 39 Changes
U1
A1.1
12
Greetings, 이에요/예요, negation, verb
engine
Intro rewritten, titles
fixed


U2
A1.1
12
있다/없다, vowel harmony, 을/를, 이/그/저
Intro rewritten, titles
fixed
U3
A1.2
11
Numbers, counters, time, SOV, 해요체
Intro rewritten, titles
fixed
U4
A1.2
8
Food, 주세요/-(으)세요, -고 싶다, market
Intro rewritten, titles
fixed
U5
A1.3
7
Family, descriptive verbs, particle trio
named
Intro rewritten, titles
fixed
U6
A1.3
7
Transport, 에/에서, (으)로, weather, 7
verbs
Intro rewritten, titles
fixed
U7
A2.1
9
Past tense, ㄷ/ㅂ irregulars, -아/어서
Intro rewritten, titles
fixed
U8
A2.1
8
Body, -(으)면, -(으)ㄹ 수 있다, -지 마세요
Intro rewritten, titles
fixed
U9
A2.2
9
Future, speech levels, ㄹ/으 irregulars,
때문에
Intro rewritten, titles
fixed
U10
A2.2
10
Daily routines, 반말, -는 것 같다, -(으)니
까
Intro rewritten, titles
fixed
Total: 103 lessons
VALIDATION CHECKLIST (after EVERY edit)
1.  Braces 23,315/23,315 balanced
2.  No unclosed strings in Korean section (L19000-22200)
3.  No literal \n between JS objects (P56)
4.  0 em-dashes in Korean content fields (P21)
5.  0 Korean without English translation in notes (P43)
6.  0 formula = chain patterns in visible notes/tips (P44)
7.  0 pipeline codes in student content (P51)
8.  0 notes ending with ":" before deepDive (P45)
9.  0 deepDives starting with "→" (P45)
10. 0 duplicate quiz questions (P53)
11. 0 "coming soon" in student content (P46)
12. 0 Unit/Lesson numbers in student content (P52)


13. 0 Korean sentences in notes without English (P43)
14. MC answer length balanced (P54)
15. 0 generic DD titles (Details/Examples/More Detail)
16. 0 grammar cards missing deepDive
17. Intro descs: max 2 sentences, Korean on own line 
 DONE
18. **~376 inline Korean in note/text/deepDive (D62) ← MANUAL FIX NEEDED**
PRIORITY FOR NEXT SESSION
1. BATCH D62 (manual) — Fix inline Korean in note/text/deepDive fields. ONE UNIT AT A
TIME. Read in context. Distinguish vocabulary (extract) from grammar patterns
(restructure with spacing). ~40 per unit.
2. P36 dense notes (11) — Overlaps with D62.
3. THEN: B1 Korean (U11-U16) — BLOCKED until D62 complete
4. THEN: Dutch retroactive polish
FILE STRUCTURE QUICK REFERENCE
Lines 1-18        → React imports, memory store
Lines 6-3300      → Manifesto, Dutch pipeline rules, decision logs
Lines 3300-3890   → Dutch pipeline rules P1-P24, decision logs 34-35
Lines 3890-4200   → Data schema, languages, CEFR, foundations
Lines 4200-19000  → Dutch curriculum + Arabic FK
Lines 19012-19176 → Korean pipeline rules P40-P56 + decision log + checklist
Lines 19185-19211 → Korean seed registry
Lines 19182-21920 → Korean A1-A2 curriculum (U1-U10, 103 lessons)
Lines 21920-22200 → Korean B1 placeholders
Lines 22200-26651 → React components, renderer, UI


