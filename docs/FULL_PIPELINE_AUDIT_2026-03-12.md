LINGOVERSE KOREAN A1-A2 — PIPELINE AUDIT
UPDATE
Post-Session 39 | 2026-03-12
Status: Intro descs 
 | Renderers 
 | Titles 
 | D62
note/text/deepDive 
 MANUAL NEEDED
EXECUTIVE SUMMARY
Session 39 attempted a full D62 fix across all units. Partial success:
102 intro descs rewritten (short, scannable, Korean on own lines) 
Both intro desc renderers fixed (now process \n  with candy bubbles) 
54 titles fixed (Korean-first patterns) 
Automated D62 engine on note/text/deepDive fields FAILED — created 404
orphaned Korean fragments by ripping grammar patterns apart. ALL automated changes
reverted. 
~376 D62 violations remain in note/text/deepDive fields. These require manual, field-by-
field rewrites. Automation cannot distinguish vocabulary (should extract) from grammar
patterns (should keep).
Category
Before S38
After S38
After S39
Translation gaps (P43)
184
0 
0 
MC length bias (P54)
59
0 
0 
Generic DD titles
337
0 
0 
Grammar cards missing DD
22
0 
0 
을/를 taught too late
U4
U2 
U2 


Intro descs (prose walls)
22 walls
22 walls
0 
Intro desc renderer
No \n support
No \n support
 Fixed
D62 titles
~60
~60
~6 
D62 note/text/deepDive
~376
~376
~376 
 UNCHANGED
P36: Dense notes
11
11
11 
SESSION 39 DETAIL
What Shipped
1. Intro Desc Rewrites (102/102) Every intro description across all 10 units was hand-
rewritten to:
Max 2 sentences (avg 61 chars, was 173)
Korean on its own \n -separated line
Arrow translation on next line ( \n→ English )
Goals section carries all detail
Example:
2. Intro Desc Renderers (2 fixed) Both renderers (board-style ~L24849, legacy ~L24908)
replaced with line-aware IIFE:
Splits on \\n|\n
Korean line + → next line → candy bubble (22px bold purple, gradient bg)
Blank line → 14px spacer
English text → normal paragraph with smartHl
3. Title Fixes (54) “More About X” → “X” and “English (Korean)” → “Korean: English”
BEFORE (173 chars): "Your very first Korean words. Korean greetings are about 
PEACE and RESPECT. 안녕 literally means 'peace.' Every greeting you learn here 
is a window into Korean culture."
AFTER (68 chars): "안녕\n→ peace\n\nYour first Korean words. Greetings are about r


patterns.
What Failed
Automated D62 Engine on note/text/deepDive: Built a regex-based engine that found
Korean + 2+ English words and extracted Korean to standalone lines. Applied across ~480
fields in U1-U10.
Failure mode: Grammar pattern formulas like 이/가 + 아니에요 were ripped into orphaned
fragments. The string "Pattern: topic + noun + 이/가 + 아니에요."  became:
"Pattern: topic + noun + / + ."
"이"
"가"  
"아니에요"
This is pedagogically destructive — the PATTERN is what’s being taught.
Scale of damage: 404 orphaned Korean fragments created. All reverted.
Root cause: Regex cannot determine semantic role. A Korean particle in "이/가 goes
before 아니에요"  is a grammar REFERENCE that should stay inline (with spacing). A Korean
word in "You'll hear this in 합쇼체 constantly"  is VOCABULARY that should be
extracted. These require human judgment.
REMAINING WORK: D62 IN NOTE/TEXT/DEEPDIVE
Classification of ~376 Violations
Type
Count
Fix Approach
Can Automate?
Korean vocabulary in
English prose
~120
Extract to own line + →
translation
Partially (if >3
chars, no / or +)
Korean grammar
patterns inline
~80
Keep inline, add \n\n
spacing before/after
NO
Korean (translation)
pairs
~54
Extract to own line + →
translation
YES (safe)
Korean suffixes in
English (-다, -요)
~72
Context-dependent: some
extract, some keep
NO


Mixed/complex
~50
Case-by-case
NO
Recommended Manual Approach
For each field, ask THREE questions:
1. Is this Korean a vocabulary WORD in English prose? (e.g., “You’ll hear 합쇼체
constantly”) → Extract: 합쇼체\n→ formal speech level\n\nYou'll hear this
constantly.
2. Is this Korean a grammar PATTERN being taught? (e.g., “Pattern: 이/가 + 아니에요”) →
Keep inline but add spacing: \n\nPattern: 이/가 + 아니에요\n→ subject marker +
negative copula\n\n
3. Is this Korean an EXAMPLE sentence? (e.g., “For instance: 저는 학생이에요”) → Should
be in example:  field, not prose. If prose is the only option: put on its own \n  line.
Scope by Unit (unchanged from pre-S39)
Unit
Estimated violations
Notes
U1
~50
Verb engine tips, negation patterns
U2
~40
Vowel harmony, particle explanations
U3
~30
Number tips, SOV/해요체 naming
U4
~25
Food context, ordering
U5
~30
Family, particle trio, adjective tips
U6
~40
Transport, 에/에서, irregular previews
U7
~45
Past tense, contraction maps
U8
~35
Conditional, ability, -는데
U9
~40
Future, speech levels, -아/어서
U10
~41
반말, daily life
STRUCTURAL CHANGES LOG


Session 39 Changes
102 intro descs: Complete rewrite (all 10 units)
2 renderers: Board + legacy intro desc (line-aware candy bubble processing)
54 titles: Korean-first pattern fixes
Braces: 23,315/23,315 (changed from 23,276 due to renderer code addition)
Lines: 26,651 (was 26,619 — renderer code adds ~32 lines)
Content Counts (current)
Teach cards: 537 (unchanged)
MC questions: 791 (unchanged)
FB questions: 281 (unchanged)
Tips: 126 (unchanged)
DeepDives: 517 (unchanged)
Total lessons: 103 (unchanged)
Intro descs: 102 (all rewritten, avg 61 chars)
TTMIK ALIGNMENT (unchanged from S38)
The particle teaching order matches TTMIK Level 1:
은/는: U1 (TTMIK L1 L2) 
이에요/예요: U1 (TTMIK L1 L1) 
이/가: U2 (TTMIK L1 L9) 
을/를: U2 (TTMIK L1 L12) 
에: U2 (TTMIK L1 L13) 
Past tense: U7 (TTMIK L2 L6) 
Future tense: U9 (TTMIK L2 L1) 
FILES
Source: /mnt/user-data/outputs/lingoverse.jsx


This audit: /mnt/user-data/outputs/FULL_PIPELINE_AUDIT_2026-03-12.md
Master brief v4: /mnt/user-data/outputs/LINGOVERSE_MASTER_BRIEF_v4.md
Session handoff: /mnt/user-data/outputs/LINGOVERSE_HANDOFF_SESSION39.md


