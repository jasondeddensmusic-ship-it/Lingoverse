# Expert Panel Synthesis — 2026-04-27-de-pilot

**Date:** 2026-04-27  
**Reports:** 6 panelists  
**Methodology:** [docs/agents/EXPERT_PANEL.md](../../agents/EXPERT_PANEL.md) — consensus weighting × unique-signal boosts, tiered into CRITICAL / IMPORTANT / NICE-TO-HAVE / NOISE.

## Panelist scores

| Panelist | Overall (1-10) |
|---|---|
| Cognitive Psychologist | 5.4 |
| Curriculum Designer | 7 |
| Educational Psychologist | 8.7 |
| Language Teacher | 8 |
| Native Linguist (de) | 7 |
| SLA Researcher | 6 |

## Findings tally

- **CRITICAL:** 7
- **IMPORTANT:** 25
- **NICE-TO-HAVE:** 54
- **NOISE (dropped, see discarded.log):** 0

## CRITICAL findings (7)

### EXPERT-PANEL-FINDING-001 — CRITICAL — Production-mode (free recall) gap — opts:[] exposed / no `tr` step / Quiz is 100% recognition / Bloom-Apply starved

**Theme:** `production-mode-gap`
**Consensus:** 3 panelists (`cognitive-psychologist`, `curriculum-designer`, `sla-researcher`) — base 9 (n × consensus weight) + boost 2.5 [Tier-1 panelist(s), file/line citation, academic citation, concrete fix] → **score 11.5** | max-observed-severity 3/3
**Units cited:** U1, U12
**Files / lines cited:** `src/pages/Quiz.jsx`, `src/pages/Quiz.jsx:30-70`, `Quiz.jsx:268-280`, `src/data/german-v2`
**Academic citations:** Swain 1985; Roediger & Karpicke 2006

- **Cognitive Psychologist** (CRITICAL): Finding 1 — Standalone Quiz is 100% recognition mode
- **Curriculum Designer** (CRITICAL): All 12 units, system-wide** | **Bloom-level Apply tier is starved.** Step-type counts across U1-U12: teach=1,560 (Understand), mc=792 (Remember/Understand), match=241 (Remember), fb=575 (Understand…
- **SLA Researcher** (CRITICAL): [unit-01..12, all fb cards: 355/355 contain opts:[...]](../../../src/data/german-v2/) | **Every fill-in-blank quiz exposes a 4-option pool, eliminating actual recall demand.** Sample u01:22 {type:"…

**Owner triage:** [ ] accept &nbsp; [ ] defer &nbsp; [ ] reject &nbsp; — reason: _______________

### EXPERT-PANEL-FINDING-002 — CRITICAL — Unit-08 file ships as a single line — authoring/template debt

**Theme:** `unit8-flat-file`
**Consensus:** 2 panelists (`curriculum-designer`, `sla-researcher`) — base 4 (n × consensus weight) + boost 3.0 [Tier-1 panelist(s), file/line citation, severity-language 9, concrete fix] → **score 7.0** | max-observed-severity 3/3
**Units cited:** U1, U2, U7, U8, U12
**Files / lines cited:** `src/data/german-v2/unit-08.js`, `unit-01.js:7`, `unit-02.js:6`, `unit-12.js:636`

- **Curriculum Designer** (CRITICAL): [src/data/german-v2/unit-08.js (single line)] | **Unit-08 ships as one 119KB single-line file** with no in-source breaks. Every other unit has structured // ─── L1: ... ─── comments (e.g. unit-01.j…
- **Curriculum Designer** (IMPORTANT): U8 "Müllprofessor" — coherent journey, broken file structure.** Der falsche Eimer → Hildis Lektion → Recycling-Codes → Abendbrot-discovery → meeting Mia. The arc holds; the file shape is the issue …
- **SLA Researcher** (IMPORTANT): Unit 8 is structurally underweight given its A2.1 placement.** u08 has 13 lessons but the whole file is on a single line (no newlines), suggesting machine-generated bulk vs. authored content. Spot-…

**Owner triage:** [ ] accept &nbsp; [ ] defer &nbsp; [ ] reject &nbsp; — reason: _______________

### EXPERT-PANEL-FINDING-003 — CRITICAL — Scaffolding triggers on dose, not on struggle — no adaptive response to wrong-streak

**Theme:** `no-adaptive-scaffolding`
**Consensus:** 2 panelists (`cognitive-psychologist`, `educational-psychologist`) — base 4 (n × consensus weight) + boost 2.5 [Tier-1 panelist(s), file/line citation, academic citation, concrete fix] → **score 6.5** | max-observed-severity 3/3
**Files / lines cited:** `src/components/LessonEngine.jsx`, `src/components/LessonEngine.jsx:43-60`, `LessonEngine.jsx:3587`
**Academic citations:** Bahrick 1979; Pashler et al. 2007

- **Cognitive Psychologist** (IMPORTANT): E. No "lapse handling" beyond FSRS defaults.
- **Educational Psychologist** (CRITICAL): CF-2 | src/components/LessonEngine.jsx:43-60 (breather logic) | Scaffolding triggers on dose, not on struggle

**Owner triage:** [ ] accept &nbsp; [ ] defer &nbsp; [ ] reject &nbsp; — reason: _______________

### EXPERT-PANEL-FINDING-004 — CRITICAL — No `type:"story"` cards rendered — narrative is described in `intro` text only

**Theme:** `story-cards-not-rendered`
**Consensus:** 2 panelists (`curriculum-designer`, `sla-researcher`) — base 4 (n × consensus weight) + boost 2.0 [Tier-1 panelist(s), file/line citation, concrete fix] → **score 6.0** | max-observed-severity 3/3
**Units cited:** U1
**Files / lines cited:** `src/data/german-v2/unit-01.js`, `src/data/german-v2/unit-01.js:0`, `src/data/german-v2`

- **Curriculum Designer** (CRITICAL): [src/data/german-v2/unit-01.js:0 across all 12 units] | **type:"story" step type appears 0 times in A1+A2** despite STORY_BIBLE.md defining 6 recurring characters (Hildi, Lukas, Yilmaz, KD, Mia, He…
- **SLA Researcher** (CRITICAL): [no type:"story" cards exist in any of the 36 German units; story is referenced only via intro desc strings and dialogue subtext](../../../src/data/german-v2/) | Grep type:"story" = 0 hits. The Ver…

**Owner triage:** [ ] accept &nbsp; [ ] defer &nbsp; [ ] reject &nbsp; — reason: _______________

### EXPERT-PANEL-FINDING-005 — CRITICAL — Konjunktiv II umlauts stripped in `grammar/german.js` — wrong forms taught in reference

**Theme:** `konjunktiv-umlauts-stripped`
**Consensus:** 2 panelists (`curriculum-designer`, `language-teacher`) — base 4 (n × consensus weight) + boost 2.0 [Tier-1 panelist(s), file/line citation, concrete fix] → **score 6.0** | max-observed-severity 3/3
**Units cited:** U5, U7, U10, U11, U12, U13
**Files / lines cited:** `grammar/german.js:964-998`, `unit-12.js:662`

- **Curriculum Designer** (IMPORTANT): [unit-13.js entry vs unit-12.js capstone] | **A2→B1 transition shows a small assumed-knowledge step.** U12 L7 "Konjunktiv II und Nebensätze" exposes Konjunktiv II at A2.3, but U13 L5 "Ich würde mic…
- **Curriculum Designer** (IMPORTANT): Talk about past, future, and hypotheticals**: narrate yesterday with Perfekt haben + sein, plan tomorrow with future-as-present + werden hints, express polite wishes with Konjunktiv II basics (möch…
- **Language Teacher** (CRITICAL): CRIT-1: Konjunktiv II grammar reference is grammatically wrong
- **Language Teacher** (IMPORTANT): Specific "I'd like..." chunk for ordering** — *"Ich hätte gern ___, bitte"* (with Konjunktiv II *hätte*) is THE polite ordering formula. Unit 5 teaches *"Ich möchte"* and *"Ich nehme"* but the *hät…

**Owner triage:** [ ] accept &nbsp; [ ] defer &nbsp; [ ] reject &nbsp; — reason: _______________

### EXPERT-PANEL-FINDING-006 — CRITICAL — Country-preposition rule (`aus der Türkei` vs `aus Deutschland`) used in examples but never taught

**Theme:** `country-prepositions-untaught`
**Consensus:** 2 panelists (`curriculum-designer`, `native-linguist-de`) — base 4 (n × consensus weight) + boost 2.0 [Tier-1 panelist(s), file/line citation, concrete fix] → **score 6.0** | max-observed-severity 3/3
**Units cited:** U1, U2
**Files / lines cited:** `src/data/german-v2/unit-01.js`, `src/data/german-v2/unit-01.js:107`, `unit-01.js:78`, `unit-01.js:155`

- **Curriculum Designer** (IMPORTANT): Country prepositions (aus der Türkei vs aus Deutschland)**: introduced via examples at U1 L4, never explicitly taught as a rule until B1+. Native-linguist auditor flagged the same. From a curriculu…
- **Native Linguist (de)** (CRITICAL): [src/data/german-v2/unit-01.js:107] | example: Woher kommst du? — Ich komme aus der Türkei. | This is fine. BUT later: [unit-01.js:78] Wohin fährst du? — Ich fahre nach Hamburg. and [unit-01.js:155…

**Owner triage:** [ ] accept &nbsp; [ ] defer &nbsp; [ ] reject &nbsp; — reason: _______________

### EXPERT-PANEL-FINDING-007 — CRITICAL — `Tschüss` etymology (French adieu) wrong; pronunciation hint wrong

**Theme:** `etymology-pronunciation-tschuss`
**Consensus:** 2 panelists (`language-teacher`, `native-linguist-de`) — base 4 (n × consensus weight) + boost 2.0 [Tier-1 panelist(s), file/line citation, severity-language 6] → **score 6.0** | max-observed-severity 3/3
**Units cited:** U1, U11
**Files / lines cited:** `unit-01.js:36`, `unit-01.js:21`, `unit-11.js:441`, `src/data/german-v2/unit-01.js`, `src/data/german-v2/unit-01.js:36`

- **Language Teacher** (IMPORTANT): IMPORTANT-5: funFacts are an unsung hero of the A1+A2 slice
- **Native Linguist (de)** (CRITICAL): [src/data/german-v2/unit-01.js:36] | Tschüss" ... "Pronounced like 'choose' with a softer ch." | **Pronunciation hint is wrong.** *Tschüss* starts with /tʃ/ (English ch as in "church"), not the sof…
- **Native Linguist (de)** (CRITICAL): [src/data/german-v2/unit-01.js:36 funFact] | "'Tschüss' evolved from the French 'adieu' (to God), which became 'adjuees' in dialect, then 'tschuess.'" | **Etymology is wrong.** *Tschüss* comes from…

**Owner triage:** [ ] accept &nbsp; [ ] defer &nbsp; [ ] reject &nbsp; — reason: _______________

## IMPORTANT findings (25)

### EXPERT-PANEL-FINDING-008 — IMPORTANT — A1.1 vs A1.2 sub-level ratio is 5:1 — unbalanced

**Theme:** `a1-1-vs-a1-2-imbalance`
**Consensus:** 2 panelists (`curriculum-designer`, `language-teacher`) — base 4 (n × consensus weight) + boost 2.5 [Tier-1 panelist(s), file/line citation, severity-language 6, concrete fix] → **score 4.0** | max-observed-severity 2/3
**Units cited:** U1, U2, U3, U4, U5, U6
**Files / lines cited:** `unit-01.js:5`, `unit-02.js:5`, `unit-03.js:5`, `unit-04.js:5`, `unit-05.js:5`, `unit-06.js:5`, `LearnPage.jsx:235`

- **Curriculum Designer** (IMPORTANT): [unit-01.js:5, unit-02.js:5, unit-03.js:5, unit-04.js:5, unit-05.js:5, unit-06.js:5] | **A1.1 vs A1.2 ratio is 5:1.** Five units of A1.1 (U1-U5) and one unit of A1.2 (U6). A2 is balanced (2+2+2 acr…
- **Language Teacher** (IMPORTANT): IMPORTANT-4: B-CEFR badging on lessons appropriate; sub-level visible

**Owner triage:** [ ] accept &nbsp; [ ] defer &nbsp; [ ] reject &nbsp; — reason: _______________

### EXPERT-PANEL-FINDING-009 — IMPORTANT — "Können Sie langsamer sprechen?" survival chunk never taught

**Theme:** `speak-slower-chunk-missing`
**Consensus:** 1 panelist (`language-teacher`) — base 1 (n × consensus weight) + boost 3.0 [Tier-1 panelist(s), file/line citation, severity-language 9, concrete fix] → **score 4.0** | max-observed-severity 3/3
**Units cited:** U1, U2
**Files / lines cited:** `unit-02.js:121`

- **Language Teacher** (CRITICAL): CRIT-3: "Können Sie langsamer sprechen?" never taught as a chunk
- **Language Teacher** (IMPORTANT): "Können Sie langsamer sprechen, bitte?" as a memorized chunk** — components present, the chunk itself isn't. (Critical, see CRIT-3.)

**Owner triage:** [ ] accept &nbsp; [ ] defer &nbsp; [ ] reject &nbsp; — reason: _______________

### EXPERT-PANEL-FINDING-010 — IMPORTANT — "Germans love X / Germans are X" cultural-stereotype framing across funFacts

**Theme:** `stereotype-debt`
**Consensus:** 1 panelist (`native-linguist-de`) — base 1 (n × consensus weight) + boost 3.0 [Tier-1 panelist(s), file/line citation, severity-language 9, concrete fix] → **score 4.0** | max-observed-severity 3/3
**Units cited:** U1, U5
**Files / lines cited:** `src/data/german-v2/unit-05.js`, `src/data/german-v2/unit-05.js:90`, `unit-01.js:66`

- **Native Linguist (de)** (CRITICAL): Multiple files | funFact:"Germans love X / Germans are X / Germans always X" appears **122 times across v2; ~30 land in A1-A2.** Examples in slice: "Germans love compound nouns", "Germans love thei…
- **Native Linguist (de)** (CRITICAL): [src/data/german-v2/unit-05.js:90] | verboten funFact: "Verboten signs are everywhere in Germany. Germans are known for following rules, and these signs are taken seriously." | Stereotype + factual…
- **Native Linguist (de)** (IMPORTANT): The "Germans love X" trope is the single biggest cultural problem.** Even when the content is friendly or self-deprecating, it constructs national essentialism. A German learner-of-Italian wouldn't…
- **Native Linguist (de)** (IMPORTANT): The "Germans are direct" funFact at [unit-01.js:66]** ("In business, this directness is respected, not rude") is exactly the kind of self-mythologizing that Germans would themselves push back on. I…

**Owner triage:** [ ] accept &nbsp; [ ] defer &nbsp; [ ] reject &nbsp; — reason: _______________

### EXPERT-PANEL-FINDING-011 — IMPORTANT — Restaurant unit teaches no dietary-restriction / allergy vocabulary (real-world safety gap)

**Theme:** `food-allergy-vocab-missing`
**Consensus:** 1 panelist (`language-teacher`) — base 1 (n × consensus weight) + boost 2.5 [Tier-1 panelist(s), severity-language 9, concrete fix] → **score 3.5** | max-observed-severity 3/3
**Units cited:** U5, U18

- **Language Teacher** (CRITICAL): CRIT-2: Restaurant unit teaches no dietary restriction vocabulary
- **Language Teacher** (IMPORTANT): Food allergy / dietary restriction vocab** — *Allergie, allergisch gegen, vegan, vegetarisch, glutenfrei, laktosefrei, koscher, halal*. Critical for safety; absent in A1+A2. (Critical, see CRIT-2.)

**Owner triage:** [ ] accept &nbsp; [ ] defer &nbsp; [ ] reject &nbsp; — reason: _______________

### EXPERT-PANEL-FINDING-012 — IMPORTANT — [Themeless] Free production is under-trained.** With only 3 tr steps in 12 units (zero in A2

**Theme:** _(themeless cluster)_
**Consensus:** 1 panelist (`curriculum-designer`) — base 1 (n × consensus weight) + boost 2.5 [Tier-1 panelist(s), severity-language 9, concrete fix] → **score 3.5** | max-observed-severity 2/3

- **Curriculum Designer** (IMPORTANT): Free production is under-trained.** With only 3 tr steps in 12 units (zero in A2), a learner has rarely been asked to produce a full German sentence from English without options. Goethe-A2 writing …

**Owner triage:** [ ] accept &nbsp; [ ] defer &nbsp; [ ] reject &nbsp; — reason: _______________

### EXPERT-PANEL-FINDING-013 — IMPORTANT — [Themeless] IMPORTANT-1: Akkusativ vs Dativ contrast not consolidated until Unit 11

**Theme:** _(themeless cluster)_
**Consensus:** 1 panelist (`language-teacher`) — base 1 (n × consensus weight) + boost 2.5 [Tier-1 panelist(s), file/line citation, severity-language 6, concrete fix] → **score 3.5** | max-observed-severity 2/3
**Units cited:** U4, U6, U7, U8, U11
**Files / lines cited:** `grammar/german.js:491`

- **Language Teacher** (IMPORTANT): IMPORTANT-1: Akkusativ vs Dativ contrast not consolidated until Unit 11

**Owner triage:** [ ] accept &nbsp; [ ] defer &nbsp; [ ] reject &nbsp; — reason: _______________

### EXPERT-PANEL-FINDING-014 — IMPORTANT — [Themeless] IMPORTANT-2: Numbers 21-99 reversal (vierundzwanzig) deserves more drilling

**Theme:** _(themeless cluster)_
**Consensus:** 1 panelist (`language-teacher`) — base 1 (n × consensus weight) + boost 2.5 [Tier-1 panelist(s), file/line citation, severity-language 6, concrete fix] → **score 3.5** | max-observed-severity 2/3
**Units cited:** U4, U6
**Files / lines cited:** `unit-04.js:275-276`

- **Language Teacher** (IMPORTANT): IMPORTANT-2: Numbers 21-99 reversal (vierundzwanzig) deserves more drilling

**Owner triage:** [ ] accept &nbsp; [ ] defer &nbsp; [ ] reject &nbsp; — reason: _______________

### EXPERT-PANEL-FINDING-015 — IMPORTANT — [Themeless] IMPORTANT-3: Separable verbs taught grammatically but few drilling reps

**Theme:** _(themeless cluster)_
**Consensus:** 1 panelist (`language-teacher`) — base 1 (n × consensus weight) + boost 2.5 [Tier-1 panelist(s), file/line citation, severity-language 6, concrete fix] → **score 3.5** | max-observed-severity 2/3
**Units cited:** U5, U8, U10
**Files / lines cited:** `grammar/german.js:151-173`

- **Language Teacher** (IMPORTANT): IMPORTANT-3: Separable verbs taught grammatically but few drilling reps

**Owner triage:** [ ] accept &nbsp; [ ] defer &nbsp; [ ] reject &nbsp; — reason: _______________

### EXPERT-PANEL-FINDING-016 — IMPORTANT — Wrong-answer feedback is corrective-only (no explanation, no missed-items review)

**Theme:** `wrong-answer-feedback`
**Consensus:** 1 panelist (`cognitive-psychologist`) — base 1 (n × consensus weight) + boost 2.0 [Tier-1 panelist(s), file/line citation, concrete fix] → **score 3.0** | max-observed-severity 3/3
**Files / lines cited:** `src/components/LessonEngine.jsx`, `src/App.jsx`, `src/components/LessonEngine.jsx:3607`, `vocabulary.js:2716`

- **Cognitive Psychologist** (CRITICAL): Finding 2 — Wrong-answer experience is punishment, not data

**Owner triage:** [ ] accept &nbsp; [ ] defer &nbsp; [ ] reject &nbsp; — reason: _______________

### EXPERT-PANEL-FINDING-017 — IMPORTANT — Across-unit interleaving absent — match outcomes don't enter SRS, Daily Review caps at 20

**Theme:** `across-unit-interleaving-absent`
**Consensus:** 1 panelist (`cognitive-psychologist`) — base 1 (n × consensus weight) + boost 2.0 [Tier-1 panelist(s), file/line citation, concrete fix] → **score 3.0** | max-observed-severity 3/3
**Units cited:** U4, U8, U12
**Files / lines cited:** `src/components/LessonEngine.jsx`, `src/pages/Quiz.jsx`, `src/pages/Flashcards.jsx`, `src/components/LessonEngine.jsx:1135-1230`, `src/pages/Quiz.jsx:30-55`, `src/pages/Flashcards.jsx:19`

- **Cognitive Psychologist** (CRITICAL): Finding 3 — Across-unit interleaving and lesson-error-driven relearning are absent

**Owner triage:** [ ] accept &nbsp; [ ] defer &nbsp; [ ] reject &nbsp; — reason: _______________

### EXPERT-PANEL-FINDING-018 — IMPORTANT — Drag_fill / match working-memory load near or above Cowan limit

**Theme:** `working-memory-overload`
**Consensus:** 1 panelist (`cognitive-psychologist`) — base 1 (n × consensus weight) + boost 2.0 [Tier-1 panelist(s), file/line citation, concrete fix] → **score 3.0** | max-observed-severity 2/3
**Units cited:** U1, U4, U12
**Files / lines cited:** `unit-04.js:185`, `unit-04.js:198`, `unit-04.js:218`

- **Cognitive Psychologist** (IMPORTANT): B. Working-memory load on drag_fill is right at the upper bound; some examples exceed it.
- **Cognitive Psychologist** (IMPORTANT): C. Match steps with 6+ pairs exceed working-memory capacity at the moment of choice.

**Owner triage:** [ ] accept &nbsp; [ ] defer &nbsp; [ ] reject &nbsp; — reason: _______________

### EXPERT-PANEL-FINDING-019 — IMPORTANT — `intro.goals` arrays are author-voice ("Learn X"), not learner-voice CEFR can-dos ("I can X")

**Theme:** `intro-goals-voice`
**Consensus:** 1 panelist (`curriculum-designer`) — base 1 (n × consensus weight) + boost 2.0 [Tier-1 panelist(s), file/line citation, concrete fix] → **score 3.0** | max-observed-severity 3/3
**Units cited:** U1
**Files / lines cited:** `src/data/german-v2/unit-01.js`, `src/data/german-v2/unit-01.js:9`

- **Curriculum Designer** (CRITICAL): [src/data/german-v2/unit-01.js:9 + every intro step] | **intro.goals arrays are can-dos in author voice, not learner voice.** "Learn basic greetings", "Master essential greetings", "Test your Germa…

**Owner triage:** [ ] accept &nbsp; [ ] defer &nbsp; [ ] reject &nbsp; — reason: _______________

### EXPERT-PANEL-FINDING-020 — IMPORTANT — Hint quality uneven — math-disguised number hints, hint that contains the answer

**Theme:** `hint-quality-uneven`
**Consensus:** 1 panelist (`curriculum-designer`) — base 1 (n × consensus weight) + boost 2.0 [Tier-1 panelist(s), file/line citation, concrete fix] → **score 3.0** | max-observed-severity 2/3
**Units cited:** U1
**Files / lines cited:** `unit-01.js:265`

- **Curriculum Designer** (IMPORTANT): [unit-01.js:265] | **Some mc "test" what was just stated in the prompt.** q:"Which question word would you use to ask 'What is your name?'" hint:"In German, you ask 'How are you called?' not 'What …

**Owner triage:** [ ] accept &nbsp; [ ] defer &nbsp; [ ] reject &nbsp; — reason: _______________

### EXPERT-PANEL-FINDING-021 — IMPORTANT — "(continued)" lessons ship generic stub intros — relatedness flatten

**Theme:** `continued-stub-intros`
**Consensus:** 1 panelist (`educational-psychologist`) — base 1 (n × consensus weight) + boost 2.0 [Tier-1 panelist(s), file/line citation, severity-language 7] → **score 3.0** | max-observed-severity 3/3
**Units cited:** U1, U2, U3, U4, U5, U6, U7, U8, U9, U10, U11, U12
**Files / lines cited:** `src/data/german-v2/unit-01.js`, `src/data/german-v2/unit-01.js:84`, `unit-01.js:9`, `src/data/german-v2/unit-01.js:9`

- **Educational Psychologist** (CRITICAL): CF-1 | src/data/german-v2/unit-01.js:84 (and 34 other "(continued)" lessons across A1+A2) | Generic placeholder intros undermine autonomy + relatedness
- **Educational Psychologist** (IMPORTANT): IF-7 | src/data/german-v2/unit-01.js:9 lesson goals are concrete and outcome-framed

**Owner triage:** [ ] accept &nbsp; [ ] defer &nbsp; [ ] reject &nbsp; — reason: _______________

### EXPERT-PANEL-FINDING-022 — IMPORTANT — Streak UI displayed but variable never incremented (vestigial / dead)

**Theme:** `streak-non-functional`
**Consensus:** 1 panelist (`educational-psychologist`) — base 1 (n × consensus weight) + boost 2.0 [Tier-1 panelist(s), file/line citation, concrete fix] → **score 3.0** | max-observed-severity 3/3
**Files / lines cited:** `src/components/LessonEngine.jsx`, `src/components/LessonEngine.jsx:1180`, `src/pages/Profile.jsx`

- **Educational Psychologist** (CRITICAL): CF-3 | src/components/LessonEngine.jsx:1180 | Streak displayed prominently despite being non-functional creates a misleading status signal
- **Educational Psychologist** (IMPORTANT): IF-3 | src/pages/Profile.jsx | No leaderboard, no comparison, all metrics are personal

**Owner triage:** [ ] accept &nbsp; [ ] defer &nbsp; [ ] reject &nbsp; — reason: _______________

### EXPERT-PANEL-FINDING-023 — IMPORTANT — "Embarrassing absences" — emergency phrases, brauchen, train-ticket types, "Ich hätte gern..."

**Theme:** `embarrassing-absences`
**Consensus:** 1 panelist (`language-teacher`) — base 1 (n × consensus weight) + boost 2.0 [Tier-1 panelist(s), severity-language 9] → **score 3.0** | max-observed-severity 2/3
**Units cited:** U7

- **Language Teacher** (IMPORTANT): IMPORTANT-7: Unit 7 ("Der Arztbesuch") mid-A2 dip
- **Language Teacher** (IMPORTANT): Emergency phrases** — *Notfall, Krankenwagen, Polizei, 112, Hilfe!*. Tourist-trip survival. Absent in A1+A2.
- **Language Teacher** (IMPORTANT): Pharmacy "auf Rezept" vs "rezeptfrei"** — Unit 7 has *Apotheke* but doesn't draw the prescription/OTC distinction explicitly. German pharmacies are gatekept differently than US/UK ones; this is the…

**Owner triage:** [ ] accept &nbsp; [ ] defer &nbsp; [ ] reject &nbsp; — reason: _______________

### EXPERT-PANEL-FINDING-024 — IMPORTANT — `Grippe` glossed as "the flu, the cold" — Grippe ≠ Erkältung (lexical error)

**Theme:** `lexical-error-grippe`
**Consensus:** 1 panelist (`native-linguist-de`) — base 1 (n × consensus weight) + boost 2.0 [Tier-1 panelist(s), file/line citation, concrete fix] → **score 3.0** | max-observed-severity 3/3
**Units cited:** U7
**Files / lines cited:** `src/data/german-v2/unit-07.js`, `src/data/german-v2/unit-07.js:9`

- **Native Linguist (de)** (CRITICAL): [src/data/german-v2/unit-07.js:9] | trg:"die Grippe", src:"the flu, the cold" (gloss includes "the cold") | **Lexical error.** *Grippe* is influenza/flu, NOT a cold. *Erkältung* is the cold (mild).…

**Owner triage:** [ ] accept &nbsp; [ ] defer &nbsp; [ ] reject &nbsp; — reason: _______________

### EXPERT-PANEL-FINDING-025 — IMPORTANT — Du/Sie boundary not scaffolded inside dialogues — register zigzag mid-lesson

**Theme:** `register-zigzag-dialogues`
**Consensus:** 1 panelist (`native-linguist-de`) — base 1 (n × consensus weight) + boost 2.0 [Tier-1 panelist(s), file/line citation, concrete fix] → **score 3.0** | max-observed-severity 3/3
**Units cited:** U1
**Files / lines cited:** `src/data/german-v2/unit-01.js`, `src/data/german-v2/unit-01.js:14`, `unit-01.js:58`, `unit-01.js:37`

- **Native Linguist (de)** (CRITICAL): [src/data/german-v2/unit-01.js:14, 14-table] | fahren verb table shows du fährst, er fährt. Correct. But the example: A: Fahren Sie nach Hamburg? B: Nein, ich fahre nach Berlin. — note the formal *…

**Owner triage:** [ ] accept &nbsp; [ ] defer &nbsp; [ ] reject &nbsp; — reason: _______________

### EXPERT-PANEL-FINDING-026 — IMPORTANT — Dialogues are 2-turn ping-pong; no clarification / repair / recast moves

**Theme:** `no-multi-turn-dialogues`
**Consensus:** 1 panelist (`sla-researcher`) — base 1 (n × consensus weight) + boost 2.0 [Tier-1 panelist(s), file/line citation, academic citation] → **score 3.0** | max-observed-severity 3/3
**Units cited:** U1, U2, U5, U7, U10, U12
**Files / lines cited:** `src/data/german-v2`
**Academic citations:** Long 1996; Pica 1994

- **SLA Researcher** (CRITICAL): [unit-01..12, dialogue length: ~85% are 2-turn ping-pong](../../../src/data/german-v2/) | Across the 12 units, ~1,460 A:/B: exchanges exist but only ~209 (14%) extend to 3+ turns (4+ lines). U07 is…

**Owner triage:** [ ] accept &nbsp; [ ] defer &nbsp; [ ] reject &nbsp; — reason: _______________

### EXPERT-PANEL-FINDING-027 — IMPORTANT — Re-teaches without `deepen`/`recyclingOf` flag — learner sees "new word" badge on review

**Theme:** `re-teach-no-recycling-frame`
**Consensus:** 1 panelist (`sla-researcher`) — base 1 (n × consensus weight) + boost 2.0 [Tier-1 panelist(s), academic citation, concrete fix] → **score 3.0** | max-observed-severity 2/3
**Units cited:** U2, U7
**Academic citations:** Bjork 2011

- **SLA Researcher** (IMPORTANT): Re-teaching without recycling-frame.** Apotheke is taught as a type:"teach" card in u02:31 AND again as a type:"teach" card in u07:8. The u07 card adds detail (red A regulation, opening hours, cont…

**Owner triage:** [ ] accept &nbsp; [ ] defer &nbsp; [ ] reject &nbsp; — reason: _______________

### EXPERT-PANEL-FINDING-028 — IMPORTANT — [Themeless] IF-1 | src/pages/Onboarding.jsx:161-188 | Placement-quiz framing is exemplary

**Theme:** _(themeless cluster)_
**Consensus:** 1 panelist (`educational-psychologist`) — base 1 (n × consensus weight) + boost 2.0 [Tier-1 panelist(s), file/line citation, concrete fix] → **score 3.0** | max-observed-severity 2/3
**Files / lines cited:** `src/pages/Onboarding.jsx`, `src/pages/Onboarding.jsx:161-188`

- **Educational Psychologist** (IMPORTANT): IF-1 | src/pages/Onboarding.jsx:161-188 | Placement-quiz framing is exemplary

**Owner triage:** [ ] accept &nbsp; [ ] defer &nbsp; [ ] reject &nbsp; — reason: _______________

### EXPERT-PANEL-FINDING-029 — IMPORTANT — [Themeless] IMPORTANT-6: Story-mode toggle solves the "I hate the mascot" problem

**Theme:** _(themeless cluster)_
**Consensus:** 1 panelist (`language-teacher`) — base 1 (n × consensus weight) + boost 2.0 [Tier-1 panelist(s), file/line citation, severity-language 6] → **score 3.0** | max-observed-severity 2/3
**Files / lines cited:** `LessonEngine.jsx:32-42`

- **Language Teacher** (IMPORTANT): IMPORTANT-6: Story-mode toggle solves the "I hate the mascot" problem

**Owner triage:** [ ] accept &nbsp; [ ] defer &nbsp; [ ] reject &nbsp; — reason: _______________

### EXPERT-PANEL-FINDING-030 — IMPORTANT — [Themeless] [src/data/german-v2/unit-01.js:138-141] | haben verb_table omits the -e in du ha

**Theme:** _(themeless cluster)_
**Consensus:** 1 panelist (`native-linguist-de`) — base 1 (n × consensus weight) + boost 2.0 [Tier-1 panelist(s), file/line citation, concrete fix] → **score 3.0** | max-observed-severity 3/3
**Units cited:** U1
**Files / lines cited:** `src/data/german-v2/unit-01.js`, `src/data/german-v2/unit-01.js:138-141`, `src/data/german-v2/unit-01.js:16`, `src/data/german-v2/unit-01.js:37`, `src/data/german-v2/unit-01.js:146`

- **Native Linguist (de)** (CRITICAL): [src/data/german-v2/unit-01.js:138-141] | haben verb_table omits the -e in du habst → hast, but lists *ihr habt* with t. The asymmetry is correct, but the note says "haben is irregular in du (hast)…
- **Native Linguist (de)** (CRITICAL): [src/data/german-v2/unit-01.js:16] | mc opt: "Thank you very much" as a wrong answer for *Entschuldigung*. The other distractors are "Goodbye", "Hello there". | Fine pedagogically, but stylisticall…
- **Native Linguist (de)** (CRITICAL): [src/data/german-v2/unit-01.js:37] | Auf Wiedersehen example: Vielen Dank für Ihre Hilfe! — Gern geschehen. Auf Wiedersehen! | Acceptable, but in a real shop or office, a native would more often sa…
- **Native Linguist (de)** (IMPORTANT): Du/Sie boundary is taught but never quite scaffolded inside dialogues.** [src/data/german-v2/unit-01.js:146 tip is excellent: "Use 'du' with: Friends and family / Children and teenagers / Fellow st…

**Owner triage:** [ ] accept &nbsp; [ ] defer &nbsp; [ ] reject &nbsp; — reason: _______________

### EXPERT-PANEL-FINDING-031 — IMPORTANT — [Themeless] [src/data/german-v2/unit-03.js:42] | das Mädchen taught as neuter at A1 with a g

**Theme:** _(themeless cluster)_
**Consensus:** 1 panelist (`native-linguist-de`) — base 1 (n × consensus weight) + boost 2.0 [Tier-1 panelist(s), file/line citation, concrete fix] → **score 3.0** | max-observed-severity 3/3
**Units cited:** U3
**Files / lines cited:** `src/data/german-v2/unit-03.js`, `src/data/german-v2/unit-03.js:42`

- **Native Linguist (de)** (CRITICAL): [src/data/german-v2/unit-03.js:42] | das Mädchen taught as neuter at A1 with a good explanation of -chen → neuter rule. | This is correct AND well-handled, but it should be noted somewhere that ref…

**Owner triage:** [ ] accept &nbsp; [ ] defer &nbsp; [ ] reject &nbsp; — reason: _______________

### EXPERT-PANEL-FINDING-032 — IMPORTANT — [Themeless] Verb tables vs. communicative use are decoupled.** The verb_table step gives ful

**Theme:** _(themeless cluster)_
**Consensus:** 1 panelist (`sla-researcher`) — base 1 (n × consensus weight) + boost 2.0 [Tier-1 panelist(s), academic citation, concrete fix] → **score 3.0** | max-observed-severity 2/3
**Units cited:** U1
**Academic citations:** Ellis 2006

- **SLA Researcher** (IMPORTANT): Verb tables vs. communicative use are decoupled.** The verb_table step gives full paradigms (sein, haben, fahren, sprechen, kommen, lernen, wohnen, schlafen) — that is form-coverage. But the immedi…

**Owner triage:** [ ] accept &nbsp; [ ] defer &nbsp; [ ] reject &nbsp; — reason: _______________

## NICE-TO-HAVE findings (54) — backlog

Compact list. Per `EXPERT_PANEL.md`: aggregate; surface only if patterns emerge across panels. Detailed text lives in each panelist's report.

- **EXPERT-PANEL-FINDING-033** | `daily-review-visibility` | score 2.5 | `cognitive-psychologist` — Daily Review tile only renders when dueCount > 0 — invisible cue when caught up
- **EXPERT-PANEL-FINDING-034** | `random-salad-u6` | score 2.5 | `curriculum-designer` — Unit-06 is horizontal-coherence "random salad" — multiple unrelated themes
- **EXPERT-PANEL-FINDING-035** | `per-unit-lesson-count-variance` | score 2.5 | `curriculum-designer` — Per-unit lesson count varies 9-24 with no documented rationale (pacing fatigue risk)
- **EXPERT-PANEL-FINDING-036** | `no-listening-speaking` | score 2.5 | `curriculum-designer` — No real listening / speaking practice (TTS deferred; one-pager limit)
- **EXPERT-PANEL-FINDING-037** | `weil-pre-taught-in-examples` | score 2.5 | `curriculum-designer` — Weil-clauses appear in U7 examples 2 units before they're taught grammar
- **EXPERT-PANEL-FINDING-038** | `mein-familienname` | score 2.5 | `native-linguist-de` — Pragmatically odd phrasings (e.g., "Mein Familienname ist Weber")
- **EXPERT-PANEL-FINDING-039** | `country-cultural-asymmetry` | score 2.5 | `native-linguist-de` — Cultural depth asymmetric — Berlin centrism, regional DACH variation under-treated
- **EXPERT-PANEL-FINDING-040** | `vocab-spiraling-weak` | score 2.5 | `sla-researcher` — ~50% of A1 lemmas are dead vocab by A2 — recycling under floor
- **EXPERT-PANEL-FINDING-041** | `hint-arithmetic` | score 2.5 | `sla-researcher` — Number-quiz hints are arithmetic riddles, not language-bridges
- **EXPERT-PANEL-FINDING-042** | _(themeless)_ | score 2.5 | `cognitive-psychologist` — A. Retrieval-vs-recognition ratio is below the literature recommendation, but do
- **EXPERT-PANEL-FINDING-043** | _(themeless)_ | score 2.5 | `curriculum-designer` — Many mc steps with 4-option answer-clustering | **Spot-check assessment validity
- **EXPERT-PANEL-FINDING-044** | _(themeless)_ | score 2.5 | `curriculum-designer` — Survive arrival in Germany**: greet formally (Sie/du distinction), introduce sel
- **EXPERT-PANEL-FINDING-045** | _(themeless)_ | score 2.5 | `curriculum-designer` — Set up daily life**: rent and describe an apartment (rooms + furniture), introdu
- **EXPERT-PANEL-FINDING-046** | _(themeless)_ | score 2.5 | `educational-psychologist` — IF-2 | src/audio.jsx:14-96 (UISounds) | Sound design is non-coercive
- **EXPERT-PANEL-FINDING-047** | _(themeless)_ | score 2.5 | `educational-psychologist` — IF-4 | src/components/shared.jsx:6-84 (FlagButton) | Learners have voice
- **EXPERT-PANEL-FINDING-048** | _(themeless)_ | score 2.5 | `educational-psychologist` — IF-5 | src/components/LessonEngine.jsx:669 (retryLesson) and :1188 (Try Again bu
- **EXPERT-PANEL-FINDING-049** | _(themeless)_ | score 2.5 | `educational-psychologist` — IF-6 | src/pages/LearnPage.jsx:756-764 | Foundations lock has a "Unlock anyway" 
- **EXPERT-PANEL-FINDING-050** | _(themeless)_ | score 2.5 | `educational-psychologist` — IF-8 | Expert Mode LessonEngine.jsx:73-76 | Scaffolding fades for advanced learn
- **EXPERT-PANEL-FINDING-051** | _(themeless)_ | score 2.5 | `language-teacher` — Numbers > 1000 spoken patterns** — *einhundert* and *tausend* are taught (unit-0
- **EXPERT-PANEL-FINDING-052** | _(themeless)_ | score 2.5 | `native-linguist-de` — [src/data/german-v2/unit-04.js:74] | dreißig / vierzig / fünfzig and note: "Tens
- **EXPERT-PANEL-FINDING-053** | _(themeless)_ | score 2.5 | `native-linguist-de` — Wie ist Ihre Adresse? example: Meine Adresse ist Berliner Str. 12.** [unit-01.js
- **EXPERT-PANEL-FINDING-054** | _(themeless)_ | score 2.5 | `native-linguist-de` — das Café vs der Kaffee is well-explained** [unit-02.js:41] — but pronunciation n
- **EXPERT-PANEL-FINDING-055** | _(themeless)_ | score 2.5 | `native-linguist-de` — The Eszett (ß) is taught accurately in foundations but funFact at [unit-02.js:9]
- **EXPERT-PANEL-FINDING-056** | _(themeless)_ | score 2.5 | `native-linguist-de` — du heißt is taught without -e at [unit-01.js:75]** with the correct rule "stem e
- **EXPERT-PANEL-FINDING-057** | _(themeless)_ | score 2.5 | `native-linguist-de` — A2 medical unit (Unit 7) example dialogues are unusually natural.** Compliment: 
- **EXPERT-PANEL-FINDING-058** | _(themeless)_ | score 2.5 | `native-linguist-de` — The Döner funFact** [unit-01.js:234] is excellent. Accurate, current, respectful
- **EXPERT-PANEL-FINDING-059** | _(themeless)_ | score 2.5 | `native-linguist-de` — Fräulein is correctly flagged as outdated/offensive** [unit-01.js:349]. Good. Th
- **EXPERT-PANEL-FINDING-060** | _(themeless)_ | score 2.5 | `sla-researcher` — i+1 vs i+5 calibration: u01 hits 30+ teach cards in 7 lessons before any meaning
- **EXPERT-PANEL-FINDING-061** | `ai-conversation-not-wired` | score 2.0 | `curriculum-designer` — AI Chat exists but not wired into lesson flow
- **EXPERT-PANEL-FINDING-062** | _(themeless)_ | score 2.0 | `curriculum-designer` — Sentence-bracket / V2 word order**: introduced as a rule in U1 L4 tip ("V2 word 
- **EXPERT-PANEL-FINDING-063** | _(themeless)_ | score 2.0 | `curriculum-designer` — man indefinite pronoun**: taught U1 L11 (Bausteine, line 323) but never recycled
- **EXPERT-PANEL-FINDING-064** | _(themeless)_ | score 2.0 | `curriculum-designer` — Adjective declension**: introduced U11 (Christmas market: "Der rote Schal") but 
- **EXPERT-PANEL-FINDING-065** | _(themeless)_ | score 2.0 | `curriculum-designer` — U2 "Entschuldigung, wo ist...?" — coherent journey.** 22 lessons but they all th
- **EXPERT-PANEL-FINDING-066** | _(themeless)_ | score 2.0 | `curriculum-designer` — U3 "Die Wohnungssuche" — coherent journey.** Wohnung frei → Familie → Verwandte 
- **EXPERT-PANEL-FINDING-067** | _(themeless)_ | score 2.0 | `curriculum-designer` — U4 "Im Supermarkt" — mostly coherent, tight on grammar.** Einkaufswagen-Panik → 
- **EXPERT-PANEL-FINDING-068** | _(themeless)_ | score 2.0 | `curriculum-designer` — U5 "Hunger!" — coherent journey.** Was gibt's → Wie schmeckt's → Speisekarte → M
- **EXPERT-PANEL-FINDING-069** | _(themeless)_ | score 2.0 | `curriculum-designer` — U7 "Der Arztbesuch" — coherent and tight.** As above; gold standard for unit hor
- **EXPERT-PANEL-FINDING-070** | _(themeless)_ | score 2.0 | `curriculum-designer` — U9 "Freizeit und Vereine" — coherent.** Lauftreff (Mia intro) → Was machst du ge
- **EXPERT-PANEL-FINDING-071** | _(themeless)_ | score 2.0 | `curriculum-designer` — U10 "Deutsche Bahn" — coherent.** 47 Minuten Verspätung → Unterwegs → Mein Platz
- **EXPERT-PANEL-FINDING-072** | _(themeless)_ | score 2.0 | `curriculum-designer` — U11 "Auf dem Weihnachtsmarkt" — coherent.** Gendarmenmarkt → Kleidung → Opa Hein
- **EXPERT-PANEL-FINDING-073** | _(themeless)_ | score 2.0 | `curriculum-designer` — U12 "Halbjahresbilanz" — appropriately reflective.** Six-month reflection unit; 
- **EXPERT-PANEL-FINDING-074** | _(themeless)_ | score 2.0 | `curriculum-designer` — Connect ideas in extended speech**: use coordinating conjunctions (und/aber/oder
- **EXPERT-PANEL-FINDING-075** | _(themeless)_ | score 2.0 | `curriculum-designer` — No writing-as-output beyond fb/drag_fill.** The "Write simple messages / fill in
- **EXPERT-PANEL-FINDING-076** | _(themeless)_ | score 2.0 | `curriculum-designer` — Cultural depth is asymmetric across units.** U2 (Berlin), U7 (Hausarzt + Beipack
- **EXPERT-PANEL-FINDING-077** | _(themeless)_ | score 2.0 | `language-teacher` — "Ich brauche..." as a A1 staple** — brauchen does not get a dedicated teach card
- **EXPERT-PANEL-FINDING-078** | _(themeless)_ | score 2.0 | `language-teacher` — Money / paying with card vs cash awareness** — the *"Zusammen oder getrennt?"* l
- **EXPERT-PANEL-FINDING-079** | _(themeless)_ | score 2.0 | `language-teacher` — Train ticket + DB-Navigator + ICE/RE/S-Bahn** — Unit 1 introduces the train stat
- **EXPERT-PANEL-FINDING-080** | _(themeless)_ | score 2.0 | `language-teacher` — "Ich verstehe nur Bahnhof"** — the canonical German "I don't understand a thing"
- **EXPERT-PANEL-FINDING-081** | _(themeless)_ | score 2.0 | `native-linguist-de` — Religious/political neutrality is mostly held.** Good — no jarring missteps in t
- **EXPERT-PANEL-FINDING-082** | _(themeless)_ | score 2.0 | `sla-researcher` — Add tip cards on register & sociolinguistic variation.** The du/Sie tip in u01 i
- **EXPERT-PANEL-FINDING-083** | _(themeless)_ | score 2.0 | `sla-researcher` — Pronunciation phonetics column is partial.** Most teach cards in u01 carry phone
- **EXPERT-PANEL-FINDING-084** | _(themeless)_ | score 2.0 | `sla-researcher` — No tr (free translation) tasks at A2.** The engine supports tr (3 instances in u
- **EXPERT-PANEL-FINDING-085** | _(themeless)_ | score 2.0 | `sla-researcher` — Cumulative learner vocabulary tracking surface.** The roadmap mentions "cumulati
- **EXPERT-PANEL-FINDING-086** | _(themeless)_ | score 2.0 | `sla-researcher` — exampleSrc translations occasionally over-translate.** u01:69 stimmt example tra

## Conflicts (panelists disagree)

Two panelists flagged the SAME theme with OPPOSITE judgments — one praised, one critiqued. Owner decides which lens wins for this product's positioning. Per `EXPERT_PANEL.md`: log decision in `docs/DECISION_LOG.md`.

### Streak UI displayed but variable never incremented (vestigial / dead)

**Praised by:** `educational-psychologist` — "2. Streak is vestigial — by design or accident, the dark pattern is absent"

**Critiqued by:** `cognitive-psychologist` (CRITICAL) — "Finding 2 — Wrong-answer experience is punishment, not data"; `cognitive-psychologist` (IMPORTANT) — "D. The "Daily Review" tile is excellent but architecturally undercommunicated."; `educational-psychologist` (CRITICAL) — "CF-3 | src/components/LessonEngine.jsx:1180 | Streak displayed prominently despite being non-functio"; `educational-psychologist` (IMPORTANT) — "IF-3 | src/pages/Profile.jsx | No leaderboard, no comparison, all metrics are personal"

**Owner decision:** [ ] praise wins &nbsp; [ ] critique wins &nbsp; [ ] both true (different aspects) — reason: _______________

## Strengths consensus

Themes praised by 1+ panelists. Useful for keeping in mind WHAT works when iterating, so fixes don't accidentally regress the system.

- **Foundations module is genuinely excellent (alphabet, ich-Laut/ach-Laut, Eszett)** — praised by 2 (`language-teacher`, `native-linguist-de`)
- **FSRS implementation is genuinely correct (request_retention 0.9, persistence)** — praised by 1 (`cognitive-psychologist`)
- **MC distractor quality is high (semantic competition, not absurd ringers)** — praised by 1 (`cognitive-psychologist`)
- **Capstone backward design (U12 L14 numbered 25-construct A2 prüfung)** — praised by 1 (`curriculum-designer`)
- **Verumius narrative + cultural funFacts deliver genuine relatedness** — praised by 1 (`educational-psychologist`)
- **Modal particles (doch, mal, halt, schon) taught explicitly at A1 — rare** — praised by 1 (`native-linguist-de`)
- **Separable verbs taught with split-position rule (incl. UMziehen vs umZIEHEN)** — praised by 1 (`native-linguist-de`)

---

_Generated by `scripts/synthesize_expert_panel.cjs`. Regenerate after re-running the panel by re-running this script._