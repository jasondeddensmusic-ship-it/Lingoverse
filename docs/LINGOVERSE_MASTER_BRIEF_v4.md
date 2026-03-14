LINGOVERSE — MASTER SESSION BRIEF v4
Feed this document FIRST to Claude at every session start.
Updated: 2026-03-12 (post-Session 39: intros rewritten, renderer fixed,
automated D62 FAILED)
1. WHAT THIS IS
LingoVerse is a single-file React JSX app (~26,651 lines) — simultaneously app engine,
curriculum data, rendering system, and design manifesto. It teaches languages to adults
using a grammar-first, ADHD/dyslexia-friendly approach.
Developer: A polyglot (Dutch, English, German, Arabic) with ADHD and dyslexia. Building
LingoVerse because Duolingo over-gamifies, Busuu has no Korean, Airlearn is too brief.
Current focus: Korean (EN→KO), A1-A2. 10 units, 103 lessons, 537 teach cards, ~2,070
steps.
Big picture: Eventually ANY language to ANY speaker. Korean → Dutch →
German/French/Spanish → Japanese/Turkish/Arabic/Russian. Pipeline must work WITHOUT
a native speaker reviewer.
Files: Upload → /mnt/user-data/uploads/lingoverse.jsx  | Work →
/home/claude/lingoverse.jsx  | Output → /mnt/user-data/outputs/lingoverse.jsx  |
Korean data: lines ~19180–21920
2. THE VISION (non-negotiable)
2.1 Grammar-First, Not Phrase-First
Teach the ENGINE. Morpheme LEGO approach: 학+생=학생. Core particles (은/는, 이/가, 을/를)
taught in U1-U2 before anything else.
2.2 Teach Before Test (P34)


Every word/structure in a quiz MUST be explicitly taught first. No exceptions.
2.3 Respect the Adult Learner
No baby talk. No “Great job! 
”. Tone: smart linguist friend.
2.4 ADHD/Dyslexia Design (D62 — CRITICAL)
Korean LARGE, standalone on its own line
NEVER mix Korean into English prose — this is the #1 remaining issue
No formula chains (가 + 요 = 가요) → use (가다 → 가요)
No = sign chains → use structured grids/tables
No prose walls. One concept per visual chunk.
Scannable in ONE eye-pass. If it needs reading, it’s too dense.
BAD: “You know 은/는 (topic) and 이/가 (subject). Now: 을/를 marks the OBJECT.” GOOD:
“You know two particles. Now: the third.\n\n을/를\n→ OBJECT (what the verb acts on)”
 D62 EXCEPTION (learned Session 39): Grammar PATTERNS like 이/가 + 아니에요
should NOT be ripped apart. These ARE the teaching. Instead: add \n\n  spacing before
and after the pattern for visual separation, and ensure the pattern is labelled (e.g., starts
with “Pattern:” or is in a structured format). The rule is about VOCABULARY mixed into
prose, not grammar formulas being taught.
2.5 Early Building Blocks — Particle Trio in U1-U2
The three core particles are the ENGINE of Korean sentences:
U1: 은/는 (topic), 이에요/예요 (identity)
U2: 이/가 (subject), 을/를 (object) — 을/를 moved from U4 in Session 38
U4: 주세요/-(으)세요 (requesting) — uses particles already known
2.6 DeepDive = Explanation, Never Continuation (P45/P49)
“If I delete the deepDive, is the visible card still complete?” If NO → fix.
3. PIPELINE RULES — COMPLETE (P1-P56 + D62)
Code
Status


Rule
P43
Full English in A1-A2: ALL Korean must
have translation
 0 violations
P45
No dangling content (colon/comma
endings, DD splits)
 0 violations
P49
Visible teaching (essential content on
visible card)
 0 violations
P52
No Unit/Lesson numbers in student
content
 0 violations
P53
No duplicate questions
 0 violations
P54
MC length balance (correct ≈ distractor
length)
 0 violations
P36-
INTRO
Intro descs short and scannable
 102/102 rewritten
D62
Korean-first lines in note/text/deepDive
 ~376 remaining — MANUAL
FIX ONLY
P36
Dense notes (>5 lines)
 11 remaining
4. CURRENT AUDIT STATE (2026-03-12)
 RESOLVED (Sessions 36-39)
All Session 36-38 batches: 0 violations across P43/P45/P49/P52/P53/P54/DD-TITLES
을/를 restructure: U4 → U2
102 intro descs rewritten (avg 173 → 61 chars, max 309 → 94 chars)
Both intro desc renderers fixed (now process \n  with candy bubbles)
54 titles fixed (Korean-first patterns)
 ATTEMPTED AND FAILED (Session 39)
Automated D62 engine on note/text/deepDive fields


Created 404 orphaned Korean fragments by ripping grammar patterns apart
ALL changes reverted. See Decision Log D62-FAIL in handoff doc.
 REMAINING
1. ~376 D62 violations in note/text/deepDive — REQUIRES MANUAL FIX, unit by unit
2. 11 dense notes (P36) — overlaps with D62
 BLOCKED until D62 complete
B1 Korean (U11-U16)
Dutch retroactive polish
Other language curricula
5. KOREAN CURRICULUM MAP
Unit
CEFR
Lessons
Key Content
U1
A1.1
12
Greetings, 이에요/예요, negation, verb engine, Konglish
U2
A1.1
12
있다/없다, vowel harmony, 을/를, 이/그/저, 좋다/좋아하다
U3
A1.2
11
Numbers (both), counters, time, SOV named, 해요체
U4
A1.2
8
Food, 주세요/-(으)세요, -고 싶다, taste, market
U5
A1.3
7
Family, descriptive verbs, particle trio named, 의
U6
A1.3
7
Transport, 에/에서, (으)로, weather, 7 verbs
U7
A2.1
9
Past tense, ㄷ/ㅂ irregulars, -고, -아/어서
U8
A2.1
8
Body, -(으)면, -(으)ㄹ 수 있다, -지 마세요, -는데
U9
A2.2
9
Future, -아/어서 full, speech levels, ㄹ/으 irreg, 때문에
U10
A2.2
10
Daily routines, 반말, -는 것 같다, -(으)니까
Total: 103 lessons, 537 teach, 791 MC, 281 FB, 517 deepDives


6. VALIDATION CHECKLIST (after EVERY edit)
1.  Braces 23,315/23,315 balanced
2.  No unclosed strings in Korean section
3.  No literal \n between JS objects (P56)
4.  Intro descs: ≤2 sentences, Korean on own line 
 DONE
5.  0 Korean without English translation (P43)
6.  0 notes ending with ":" before deepDive (P45)
7.  0 Unit/Lesson numbers in student content (P52)
8.  0 duplicate quiz questions (P53)
9.  MC answer length balanced (P54)
10. 0 generic DD titles
11. 0 grammar cards missing deepDive
12. ~376 inline Korean in note/text/deepDive (D62) ← MANUAL FIX
7. HOW TO START A SESSION
1. Copy fresh upload: cp /mnt/user-data/uploads/lingoverse.jsx
/home/claude/lingoverse.jsx
2. Run full validation (braces, strings, content inventory)
3. Read Seed Registry (line ~19185) if writing new content
4. For D62 work: Read each field IN CONTEXT. Vocabulary → extract. Grammar patterns
→ restructure with spacing. Never automate.
5. Validate after EVERY unit
6. cp -f  to output (shutil.copy2 can silently fail)
7. Present file
This document replaces LINGOVERSE_MASTER_BRIEF_v3.md. Companion:
LINGOVERSE_HANDOFF_SESSION39.md (detailed session log).


