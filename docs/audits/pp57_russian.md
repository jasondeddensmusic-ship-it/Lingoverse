# PP57 Grammar Construct Audit — Russian (ТРКИ/CEFR A1-B2)

**Date:** 2026-04-19
**Source:** `src/data/grammar/russian.js` (50 constructs), `src/data/russian-v2/` (36 units, 73 tip cards, 0 verb_tables — Units 23-36 partially stubbed)
**Framework:** ТРКИ (Test of Russian as a Foreign Language) A1-B2 / CEFR equivalent

## Summary

- Total constructs: 50
- Taught (tip or teach card): 35/50 (70%)
- Practiced (3+ quiz steps): 30/50 (60%) — only 395 quiz steps total; 12 units are stubs with <100 lines
- Recycled (2+ lessons): 25/50 (50%) — stub units (B2.1-B2.2) have almost no practice
- Overall PP57 status: **FAIL — 15 constructs missing tip instruction; 12 stub units (Units 25-32, 34-36) contribute almost no quiz practice for B1-B2 constructs**

## Development Status

- Units 01-22: fully developed (160-290 lines each)
- Unit 23-24: partially developed (96-173 lines each)
- Units 25-36: STUBS (~84-106 lines each, minimal content)
- B2.1 and B2.2 units are entirely stubs — all B2 grammar constructs (constructs 26-50) have near-zero practice

## Construct Coverage

| # | Construct | Level | Taught | Practiced | Notes |
|---|-----------|-------|--------|-----------|-------|
| 1 | Cyrillic Alphabet | A1 | NO — 0 teach cards, no tip | 0 quiz steps | GAP: no script introduction unit |
| 2 | Three Genders (m/f/n) | A1 | YES — tip: "Body Parts: Gender Patterns", "Noun Genders in Food" | yes | PASS |
| 3 | Personal Pronouns | A1 | YES — tip: "Possessive Agreement Chart" | yes | PASS |
| 4 | Present Tense 'To Be' Omitted | A1 | NO — no explicit tip on zero-copula | limited | GAP: fundamental Russian structure |
| 5 | Question Formation | A1 | NO — no tip found | limited | GAP |
| 6 | Numbers and Age | A1 | YES — tips: "The Age Formula", "Number + Ruble Pattern" | yes | PASS |
| 7 | У меня есть (to have) | A1 | PARTIAL — tips: "Past of 'Have' in Russian", "Saying 'I Have [Symptom]'" | yes | PARTIAL |
| 8 | Basic Negation with не | A1 | PARTIAL — 4 teach cards with не; no dedicated tip | yes | PARTIAL |
| 9 | This/That: Это/Этот/Эта | A1 | NO — no tip found | limited | GAP |
| 10 | Possessive Pronouns | A1 | YES — tip: "Possessive Agreement Chart" | yes | PASS |
| 11 | Greetings and Courtesy | A1 | NO — no dedicated tip | yes (unit 1 covers this) | PASS via lesson content |
| 12 | My Name Is: Меня зовут | A1 | YES — tip: "The Меня зовут Pattern" | yes | PASS |
| 13 | Past Tense Formation | A2 | YES — tip: "Russian Past Tense Formation" | yes | PASS |
| 14 | Future Tense: Two Forms | A2 | YES — tips: "The Two Russian Futures", "Expressing Future Plans" | yes | PASS |
| 15 | Verb Aspect: Imperfective vs Perfective | A2 | YES — tips: "Verb Aspect Pairs: Perfective vs Imperfective", "Aspect Decision Rules", "Aspect Pair Types", "Aspect Pairs: The Core Concept" | yes | PASS |
| 16 | Accusative Case (Direct Objects) | A2 | YES — tip: "Accusative: Animacy Matters for Masculines" | yes | PASS |
| 17 | Motion with В/На + Case | A2 | YES — tips: "В vs На: Location Rules", "Direction vs Location", "Location vs Direction: Где vs Куда" | yes | PASS |
| 18 | Genitive Case (Of/From) | B1 | YES — tips: "Genitive Endings Summary", "Genitive: Many Uses" | yes | PASS |
| 19 | Dative Case (To/For) | B1 | YES — tips: "Dative Summary", "Dative: Key Uses" | yes | PASS |
| 20 | Instrumental Case (With/By) | B1 | YES — tips: "Instrumental Summary + Pronouns", "Instrumental Uses", "Seasons Use Instrumental Case" | yes | PASS |
| 21 | Prepositional Case | B1 | YES — tips: "Prepositional Endings Summary", "Prepositions Take Cases" | yes | PASS |
| 22 | Reflexive Verbs (-ся) | B1 | YES — tip: "Reflexive -ся Verbs: Four Uses" | yes | PASS |
| 23 | Comparisons: Better/Worse | B1 | NO — no tip found; 0 teach cards | limited | GAP |
| 24 | Modal Verbs: Can, Must, Should | B1 | NO — no tip found | limited | GAP |
| 25 | The 6 Cases Overview | B1 | YES — tip: "Case Functions at a Glance", "Preposition + Case Chart" | yes | PASS |
| 26 | Conditional Mood with бы | B1 | YES — tip: "Russian Conditional Formation" | yes (unit 22) | PASS |
| 27 | Imperative Mood | B1 | YES — tip: "Russian Imperative Formation" (Unit 23) | yes | PASS |
| 28 | Reflexive Verbs (Complete) | B1 | YES — tip: "Reflexive -ся Verbs: Four Uses" | yes | PASS |
| 29 | Motion Verbs: Идти/Ходить | B1 | YES — tips: "Motion Verb Pairs", "Motion Verbs: Идти vs Ехать" | yes | PASS |
| 30 | Motion Verbs with Prefixes | B1 | YES — tips: "Motion Prefixes: The System" | yes | PASS |
| 31 | Indefinite Pronouns | B1 | NO — no tip or dedicated teach card | limited | GAP |
| 32 | Relative Pronouns (который) | B1 | NO — 0 teach cards, no tip | 0 quiz steps | GAP: critical relative clause connector |
| 33 | Complex Conjunctions | B1 | NO — no tip found | limited | GAP |
| 34 | Numbers and Case Agreement | B2 | YES — tip: "Russian Numbers Change the Noun", "The 5+ Pattern" | limited (stub units) | PASS tip; FAIL practice (stub) |
| 35 | Time Expressions | B2 | YES — tips: "Time Expressions Without Prepositions", "Russian Days of the Week" | limited (stub) | PARTIAL |
| 36 | Expressing Opinions | B2 | YES — tip: "Formal vs Casual Russian" (indirect) | 0 quiz steps (stub) | FAIL practice |
| 37 | Subjunctive/Conditional Clauses | B2 | YES — tip: "Russian Conditional Formation" | 0 quiz steps (stub) | FAIL practice |
| 38 | Perfect Tense Concepts | B2 | NO — no tip | 0 quiz steps (stub) | GAP |
| 39 | Participles (Active/Passive) | B2 | NO — no tip or teach card | 0 quiz steps (stub) | GAP: critical advanced structure |
| 40 | Adverbial Participles (деепричастия) | B2 | NO — no tip or teach card | 0 quiz steps (stub) | GAP |
| 41 | Complex Subordinate Clauses | B2 | NO — no tip or teach card | 0 quiz steps (stub) | GAP |
| 42 | Passive Voice | B2 | NO — no tip or teach card | 0 quiz steps (stub) | GAP |
| 43 | Reported Speech | B2 | NO — no tip or teach card | 0 quiz steps (stub) | GAP |
| 44 | Gerunds and -ing Forms | B2 | YES — tip: "Verbal Periphrases" (implies gerunds) | 0 quiz steps (stub) | FAIL practice |
| 45 | Formal Register and Writing | B2 | YES — tip: "Russian Business Language" | 0 quiz steps (stub) | FAIL practice |
| 46 | Numbers: Full Agreement | B2 | YES — tip: "Russian Numbers Change the Noun" | 0 quiz steps (stub) | FAIL practice |
| 47 | Word Formation and Prefixes | B2 | YES — tip: "Motion Prefixes: The System" | 0 quiz steps (stub) | PARTIAL |
| 48 | Idioms and Proverbs | B2 | YES — tip: "Russian Proverbs" | 0 quiz steps (stub) | FAIL practice |
| 49 | Stylistic Register | B2 | YES — tips: "Formal vs Casual Russian", "Formal vs Informal in Russian" | 0 quiz steps (stub) | FAIL practice |
| 50 | Pragmatic Expressions | B2 | NO — no tip found | 0 quiz steps (stub) | GAP |

## Gaps Summary

**15 constructs missing tip instruction:**

Critical A1-B1 gaps:
1. Cyrillic Alphabet (A1) — no script teaching at all
2. Present Tense 'To Be' Omitted (A1) — zero-copula never explained
3. Question Formation (A1) — not explicitly addressed
4. This/That: Это/Этот/Эта (A1)
5. Comparisons: Better/Worse (B1)
6. Modal Verbs: Can, Must, Should (B1)
7. Indefinite Pronouns (B1)
8. Relative Pronouns: который (B1) — CRITICAL
9. Complex Conjunctions (B1)

B2 structural gaps (also stub units):
10. Perfect Tense Concepts (B2)
11. Participles Active/Passive (B2) — деепричастия + причастия are essential B2
12. Adverbial Participles деепричастия (B2)
13. Complex Subordinate Clauses (B2)
14. Passive Voice (B2)
15. Reported Speech (B2)
16. Pragmatic Expressions (B2)

## Critical Structural Problem

12 units (Units 25-36) are stubs. These cover B2.1 and B2.2. ALL B2 constructs (constructs 34-50) have zero meaningful quiz practice because those units are empty stubs. Only 395 total quiz steps exist for a 50-construct curriculum.

Verdict: Russian B1+ content exists but B2 is essentially absent. PP57 cannot pass for B2 Russian until stub units 25-36 are developed.

## Notes

- Russian was launched 2026-04-17 and is described as "U3-36 stubs" in CLAUDE.md. This audit confirms that status.
- The first 22 units (A1-B1.1) are well-developed and cover most A1-B1 constructs.
- Cyrillic Alphabet is the most surprising gap: no script introduction unit exists even though it is construct #1.
- The ТРКИ framework requires all 6 cases, aspect pairs, and participles to be taught and practiced — all of which have gaps in the current state.
