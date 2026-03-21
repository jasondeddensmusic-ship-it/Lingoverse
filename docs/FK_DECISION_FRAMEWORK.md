# Claude's FK Decision Framework

> Extracted from src/verumlingua.jsx on 2026-03-21
> Original location: lines 326-484

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CLAUDE'S FK DECISION FRAMEWORK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

How I decide what a language's Foundations need.
Read this before adding or changing ANY FK content.

STEP 1: ASK "WHAT STOPS A BEGINNER FROM READING?"

   For each language, there is a specific wall that prevents
   a total beginner from reading even one sentence.

   - For Arabic: the wall is SCRIPT (RTL + joining + forms)
   - For Japanese: the wall is THREE SCRIPTS (kana are step 1,
     but kanji is the real wall — without kanji awareness,
     you cannot read a single real sentence)
   - For Chinese: the wall is PRONUNCIATION (tones + pinyin
     is the entire bridge — without finals, you literally
     cannot say half the syllables)
   - For Korean: the wall is ASSEMBLY (how letters become
     syllable blocks + batchim)
   - For Dutch/German: the wall is DECEPTIVE SIMILARITY
     (looks like English but sounds completely different —
     vowel length, digraphs, and spelling rules)
   - For Russian: the wall is FALSE FRIENDS (Cyrillic letters
     that look like Latin but make different sounds)
   - For French/Spanish/Romanian: the wall is ACCENT MARKS
     and SOUND RULES (which letter combos make which sounds)

   Whatever that wall is → that's what FK MUST cover.
   If FK doesn't break that wall, the learner is stuck.

STEP 2: ASK "WHAT DOES THE LEARNER ENCOUNTER FIRST?"

   Don't build FK for advanced features. Build it for what
   the learner will SEE in their first week.

   I got this wrong initially for Japanese. I had hiragana
   and katakana grids (good!) but no kanji section. The problem:
   the VERY FIRST sentence a learner sees (私はコーヒーを飲みます)
   contains kanji. If FK doesn't explain what those characters
   ARE, the learner hits a wall inside their first lesson.

   Similarly for Chinese: I had a grid for the 21 initial
   consonants, but no grid for the ~35 finals. A learner
   can see that 'b' = /p/ but then encounters '-iang' in
   their first word (liáng = 凉 = cool) and has no reference
   for what '-iang' sounds like.

   The test: open Unit 1, Lesson 1 for this language.
   Does FK prepare the learner for what they'll see there?
   If not, FK has a gap.

STEP 3: ASK "WHAT'S THE MINIMUM, NOT THE MAXIMUM?"

   FK is not a textbook. It's a launchpad.

   - Japanese kanji section doesn't teach 2,136 characters.
     It explains WHAT kanji is, shows ~15 basic radicals,
     explains on'yomi/kun'yomi, and shows how kanji + hiragana
     work together. That's enough to not be confused.

   - Chinese finals grid doesn't drill every combination.
     It shows the system: simple finals → compound finals →
     the -n/-ng trap. That's enough to use as a reference.

   The goal is: "after reading FK, I am NOT CONFUSED when
   I start Unit 1." Not: "after reading FK, I have mastered
   the writing system."

STEP 4: ASK "IS THERE A 2D GRID POSSIBLE?"

   The manifesto requires 2D grids for every writing system.
   Grids are powerful because they show STRUCTURE, not just
   individual items.

   - Hiragana/katakana: rows = consonant, cols = vowel → grid
   - Korean consonants/vowels: natural grid
   - Batchim: 7 output sounds × multiple input consonants → grid
   - Chinese initials: rows by place of articulation → grid
   - Chinese finals: rows by vowel series → grid
   - Kanji radicals: rows by category (nature/human/world) → grid
   - Arabic letter forms: rows by letter, cols by position → grid

   If data can be organized into rows and columns, MAKE A GRID.
   Grids are always better than lists for reference material.

STEP 5: COMPARE AGAINST THE STRONGEST FK

   Dutch has 6 sections and 24 items. That's the benchmark.
   Not every language needs that many — Dutch has genuinely
   complex orthography. But ask: does this language's FK
   feel PROPORTIONAL to its complexity?

   - Arabic (complex script) → 6 sections: proportional ✅
   - Japanese (3 scripts) → 3 sections: proportional ✅
   - Korean (assembly system) → 4 sections: proportional ✅
   - Chinese (tones + characters) → 3 sections: proportional ✅
   - French (Latin + accents) → 1 section: proportional ✅
   - Russian (new alphabet) → 1 section: borderline but ok ✅

STEP 6: ANTI-LEAK AUDIT (MANDATORY FOR PLAYTHROUGH)

   Every MC question in a Playthrough lesson MUST pass:

   A) REPRESENTATION SPLIT:
      Question and answer use DIFFERENT representations.
      ✅ "The vowel for 'ah' has its stroke pointing…" → Right
      ❌ "ㅏ has its stroke pointing…" → Right (ㅏ SHOWS the stroke)

   B) NO SELF-ANSWERING:
      The answer must not be visible in the question itself.
      ✅ "Read this syllable: 호" opts: ho/jo/so/go (must decode)
      ✅ "What sound does ㄱ make?" (must recognize the jamo)
      ❌ "Which consonant is in 나?" (answer visible in block)
      ❌ "ㅁ vs ㅇ — how do shapes differ?" (shapes ARE the answer)
      ❌ "What sound does the g/k consonant make?" (answer in text)

   C) NO HINT LEAKS:
      Hints are tap-to-reveal only. Even when revealed, they
      must not contain the answer text or narrow to 1 option.

   D) BALANCED DISTRACTORS:
      All options similar length. No "obviously right" option.

   Run: "Can this be answered without using the target skill?"
   If YES → REWRITE before shipping.

DECISION RECORD: Japanese Kanji Section (v0.27.0)

   OBSERVED: Japanese FK had hiragana + katakana but no kanji.
   TESTED: The "when to use which script" item mentions kanji
     and even shows an example sentence with kanji in it.
     But a learner had never been told what kanji IS.
   DECIDED: Add ja_kanji section with 4 items:
     1. What is kanji (concept + 5 pictographic examples)
     2. On'yomi vs kun'yomi (the two reading systems)
     3. Basic radicals grid (15 radicals in 3 categories)
     4. Kanji + hiragana relationship (okurigana)
   WHY THIS SCOPE: These 4 items answer the question
     "what are those characters I keep seeing?" without
     trying to teach kanji memorization (that's for lessons).

DECISION RECORD: Chinese Finals Section (v0.27.0)

   OBSERVED: Chinese FK had initials grid (21 consonants) but
     no finals grid. Tone sandhi item mentions finals in passing.
   TESTED: A learner sees 'liáng' in a lesson. They can look up
     'l' in the initials grid = /l/. But '-iang'? No reference.
   DECIDED: Add zh_finals section with 4 items:
     1. Simple finals grid (6 basic vowels)
     2. Compound finals grid (all ~35 combinations organized
        by vowel series: a-series, e-series, i-series, u-series, ü-series)
     3. The -n vs -ng trap (the #1 pronunciation mistake)
     4. Stroke order basics (the 4 rules)
   WHY THIS SCOPE: Initials without finals = half a phone book.
     The compound finals grid is the missing reference that
     makes pinyin actually usable as a pronunciation tool.
