# Audit: Curriculum Designer — German A1+A2 (Units 01-12)

**Date:** 2026-04-27
**Slice:** German A1+A2, units 01-12 (with vertical-articulation peek into U13/U14)
**Auditor:** Curriculum / Instructional Designer (15 years; ADDIE / Backward Design / UbD)
**Frameworks applied:** Wiggins & McTighe (Backward Design), Bloom (revised), CEFR Companion Volume 2020, Mager objectives, Gagné's Nine Events, Biggs constructive alignment.

---

## Score (1-10)

- Backward-design alignment: **8**
- Bloom-level distribution: **5**
- Vertical articulation: **8**
- Horizontal coherence: **7**
- Assessment validity: **7**
- One-pager defensibility: **8**
- **Overall: 7**

This is the most architecturally serious adult-language curriculum I've audited at this price point. Backward design is real (capstone Prüfung lessons in U3/U5/U6/U9/U10/U11/U12 demonstrably consolidate the unit's can-do). The grammar inventory (`docs/german/GRAMMAR_CONSTRUCT_INVENTORY.md`) is mapped construct-by-construct to a tested 26+25+33+32 = 116-construct spine that is honestly Goethe-aligned. The 84-function communicative map (`docs/german/communicative-functions-mapping.md`) claims zero gaps and on spot-check holds.

What stops me from giving this a 9: the **Bloom distribution is dangerously skewed to Remember/Understand**, with `tr` (free-translation, the only true Apply step that requires open production from English to German) appearing **3 times in 12 units, all in U1**. The whole A2 (units 7-12) has zero `tr`. Output-hypothesis violation at scale. Also: U6 is a random-salad anchor unit, U8's single-line-file structure flags an authoring/sustainability concern, and the A1.1 vs A1.2 sub-level distribution is 5:1 — disproportionate.

---

## Top 3 strengths

1. **Capstone backward design is exemplary.** [src/data/german-v2/unit-12.js:637-720] — `deu_r12l14 "Die große Prüfung"` is annotated in source comments with all 25 A2 grammar constructs being tested in numbered sequence (`// 1. Perfekt haben + subordinate word order (multi)` ... `// 25.`). This is the cleanest constructive-alignment artefact I've seen in app-form curriculum. Each numbered comment maps a quiz step to a target construct from `GRAMMAR_CONSTRUCT_INVENTORY.md`. A learner who passes this lesson has demonstrably exercised every A2 construct. This is what "the assessment measures the stated objective" looks like.

2. **Goal/can-do declaration is universal.** Every `intro` step has a `goals:[]` array with 2-4 specific behavioral can-dos (e.g. unit-04 L4 `Akkusativ-Alarm`: "Accusative case (den/einen)", "Negative article kein", "nicht vs kein distinction"). This is Mager-grade objective-writing. Unit-level `sub:` fields summarize the unit can-do in a phrase ("Restaurant, modal verbs & dative prepositions"). A teacher can read the unit shape in 10 seconds.

3. **Vertical articulation of grammar across A1→A2 is real and traceable.** Articles introduced U2 L5 "Der, die, das" → accusative U4 L4 → dative full U7 (kicked off in U5) → Wechselpräpositionen U7-U10 → Perfekt haben/sein U7/U10 → Konjunktiv II basic U11/U12. Each construct is taught, practiced 3+ times in a unit, then recycled in the capstone (verifiable by grep of unit-12 L14 source comments). This matches PP57 spec and is rare outside textbook publishing.

---

## Critical findings (curriculum incoherence)

| Location | Issue | Suggested fix |
|---|---|---|
| **All 12 units, system-wide** | **Bloom-level Apply tier is starved.** Step-type counts across U1-U12: teach=1,560 (Understand), mc=792 (Remember/Understand), match=241 (Remember), fb=575 (Understand/Apply), drag_fill=177 (Apply), `tr` (free Apply) = **3 total, all in U1, zero in A2**. Recognition / cued-recall vastly outweighs free production. Output-hypothesis (Swain) violated: the curriculum tests "do you recognize Tschüss?" 250 times before it asks "produce 'Good night, I am tired' in German" once. | Add ≥2 `tr` steps per unit capstone (units 03/05/06/09/10/11/12). Aim for 8% of all quiz steps to be `tr`. Currently 0.16%. |
| [src/data/german-v2/unit-06.js:1-490] | **Unit-06 is random-salad horizontal incoherence.** 18 lessons, sub:`"Daily life, health, work, hobbies & Hildi's tea"`. Lesson titles include `Beim Arzt` (doctor) + `Am Bürgeramt` (admin) + `Stift und Papier` (school stationery) + `Hildis Tee` + `Arbeit und Bildung` + `Ein Fest planen`. There is no Verumius journey threading these. U7 immediately following is dedicated `Arztbesuch` — **U6 L6 Beim Arzt and U7 L3 Beim Hausarzt teach overlapping vocabulary in adjacent units.** | Either (a) collapse U6 into 8-10 thematically-tight lessons around one anchor (e.g. "Hildis Tee" cozy-domestic-routine arc), and migrate `Beim Arzt`, `Am Bürgeramt`, `Stift und Papier` into dedicated units; or (b) explicitly rename U6's sub: to "Daily life recap & function-word density" so learners know it's a connector. |
| [src/data/german-v2/unit-08.js (single line)] | **Unit-08 ships as one 119KB single-line file** with no in-source breaks. Every other unit has structured `// ─── L1: ... ───` comments (e.g. unit-01.js:7, unit-02.js:6, unit-12.js:636). This is an authoring/maintenance-debt smell — and it's the MüllProfessor unit, structurally a key A2.1 grammar pivot (subordinate clauses with weil/dass via Hildi's recycling lecture). When the gold-standard template language has one unit that breaks the template, the template is at risk for the other 9 languages. | Reformat unit-08.js to match the per-lesson commented structure used by all other units. This is mechanical, not pedagogical, but it's load-bearing for "scale to 20 languages." |
| [src/data/german-v2/unit-01.js:9 + every intro step] | **`intro.goals` arrays are can-dos in author voice, not learner voice.** "Learn basic greetings", "Master essential greetings", "Test your German survival skills". CEFR / Mager standard is learner-voice can-dos: "I can greet someone formally and informally", "I can ask and answer 'where are you from?'". The current verb (Learn / Master / Understand) is a teaching-input verb, not a measurable learner behavior. | Rewrite all `goals:[]` to start with "I can…" (CEFR pattern). This is a search-and-replace at scale, ~130 intro steps. Worth it for certification defensibility. |
| [src/data/german-v2/unit-01.js:0 across all 12 units] | **`type:"story"` step type appears 0 times in A1+A2** despite `STORY_BIBLE.md` defining 6 recurring characters (Hildi, Lukas, Yilmaz, KD, Mia, Heinrich) with arc growth across A1→B2 and despite `episode-scene-breakdowns.md` being a 150KB production bible. Story content is embedded as `intro.desc` paragraphs and `teach.example` dialogues. Functionally this works, but the `story` step type is unused, meaning the engine has a renderer for content that was authored as `intro` instead. | Decide: either (a) deprecate `story` step type from the engine, or (b) migrate canonical Verumius scenes to it for richer rendering (speaker tags, art slots). Currently neither. The Story Bible exists; the data layer doesn't reflect it. |

---

## Important findings

| Location | Issue | Suggested fix |
|---|---|---|
| [unit-01.js:5, unit-02.js:5, unit-03.js:5, unit-04.js:5, unit-05.js:5, unit-06.js:5] | **A1.1 vs A1.2 ratio is 5:1.** Five units of A1.1 (U1-U5) and one unit of A1.2 (U6). A2 is balanced (2+2+2 across .1/.2/.3). The A1 imbalance signals that A1.1 absorbed scope creep that should have been split. The intended Goethe-A1 split is 50/50; here it's 83/17. | If 6 A1 units is the right concept count (PP56), rebalance: U4 or U5 should arguably be A1.2 (e.g. U5 "Hunger!" introduces modal verbs and dative prepositions — both A1.2-territory in the inventory). |
| [unit-01.js: 18 lessons, unit-07.js: 9 lessons] | **Per-unit lesson count varies 9-24 with no obvious rationale.** U1=18, U2=22, U3=16, U4=13, U5=11, U6=18+ (24 cited in CLAUDE.md is per-build, not per-source — the variance is real). U7=9 is the lightest. U6=18 is among the heaviest. A learner will hit a 22-lesson U2 right after a 18-lesson U1 — risk of pacing fatigue. | Document the rationale per-unit if intentional (e.g. "U7 is short because Arztbesuch is narrow scope"). Otherwise, consider rebalancing U2 down or splitting it. |
| Many `mc` steps with 4-option answer-clustering | **Spot-check assessment validity:** [unit-04.js:106] `Ich kaufe ___ Fisch.` opts:["den","der","dem","des"] ans:"den" — correct answer first option. [unit-04.js:108] `Ich esse ___ Banane.` opts:["der","die","den","dem"] ans:"die" — correct answer second option. [unit-04.js:109] `Er kauft ___ Brot.` opts:["das","den","der","die"] ans:"das" — first option. Answer position varies but a frequency check across all `mc` would confirm PP8 position-leak rule (~25% per position). | This is in scope for a separate position-leak validator (suspect this is already wired per CLAUDE.md "Validators currently wired into CI"). My finding: not a curriculum issue, but adjacent. |
| [unit-01.js:265] | **Some `mc` "test" what was just stated in the prompt.** `q:"Which question word would you use to ask 'What is your name?'" hint:"In German, you ask 'How are you called?' not 'What is your name?'"` — the hint says "How" → ans:"Wie" is then trivial. PP44 hint-leak class. | Run hint-quality validator across these 12 units. CLAUDE.md confirms `audit_hint_quality.mjs` exists; unclear if it's been run on the German corpus since 2026-04-22 reset. |
| [unit-13.js entry vs unit-12.js capstone] | **A2→B1 transition shows a small assumed-knowledge step.** U12 L7 "Konjunktiv II und Nebensätze" exposes Konjunktiv II at A2.3, but U13 L5 "Ich würde mich freuen" assumes the learner is fluent enough to USE Konjunktiv II in a polite-request register. The bridge teach card for "would-deference register" is missing — register-shift is a B1 communicative function (CEFR), not a grammar one. | Add a tip card at U13 L5 explicitly framing Konjunktiv II's pragmatic shift from "unreal hypotheticals" (U12 use) to "polite register" (U13 use). Same form, different function. |
| [communicative-functions-mapping.md line 39: F18 "Understand simple announcements"] | **One A1 communicative function (#18) is mapped to U1+U4 with practice-type "Story context, comprehension quiz" — but the only listening-comprehension affordance in the data layer is `teach.example` text.** No actual audio comprehension step type exists (no `listen` or `audio_q`). The function is "practiced" only through reading-as-listening simulation. | Either flag this honestly in the mapping doc ("A1.18: practiced via reading-only proxy; full listening practice deferred to Google Cloud TTS phase") or build a `listen` step type. CLAUDE.md confirms TTS is deferred — fine — but the function-mapping should say so. |

---

## Vertical-articulation gaps

- **Country prepositions (`aus der Türkei` vs `aus Deutschland`)**: introduced via examples at U1 L4, never explicitly taught as a rule until B1+. Native-linguist auditor flagged the same. From a curriculum perspective: this is an A1 communicative-function dependency (F19 "Spell and give personal details", F1 "Introduce self") with zero grammar coverage. Add a tip card at U1 L4 closing or U2 L1 opening.
- **Sentence-bracket / V2 word order**: introduced as a rule in U1 L4 tip ("V2 word order"), but never explicitly recycled when separable verbs arrive in U3 L5 (`aufstehen`). Separable-verb prefix-flying-to-end is the concrete consequence of the sentence bracket, but lesson U3 L5 teaches the verb without revisiting the bracket frame. Native-speaker auditor caught the same.
- **`man` indefinite pronoun**: taught U1 L11 (Bausteine, line 323) but never recycled in A2 capstone or used as a teaching device for passive avoidance. CEFR puts `man` constructions at A1+ recycle through A2/B1. Curriculum has it as a one-shot teach.
- **Adjective declension**: introduced U11 (Christmas market: "Der rote Schal") but the predicative-vs-attributive distinction was implicit since U2 L7 "Eigenschaften und mehr". Predicative adjectives are A1; attributive are A2. The bridge is light — one tip card in U11 L4 carries the whole transition. Strengthen with explicit contrast tip earlier in U11.
- **Subordinate clauses**: U9 L5/L6 "Ob oder dass?" + "ADUSO" cluster is well-built, but U7 L4 "Untersuchung und Diagnose" already exposes a `weil` clause in `teach.example` ("Ich bin krank, weil ich kalt bin"). Weil arrives in examples 2 units before it arrives as taught grammar. Either pull weil's teach card forward to U7 or remove it from U7 examples.
- **Sub-level boundaries are leaky.** U6 (A1.2) teaches Bürgeramt + Beim Arzt vocabulary. U7 (A2.1) teaches Arztbesuch. Same domain, two adjacent units. Either unit-06's `Beim Arzt` lesson is a primer for U7 (fine, but flag it in the lesson title: "Beim Arzt: Vorgeschmack") or it's redundant.

---

## Horizontal-coherence flags

- **U6 "Alles auf Deutsch" — RANDOM SALAD.** 18 lessons spanning daily routine + health + work + hobbies + civic + tea-with-Hildi + stationery. No Verumius journey thread. Compare to U7 "Der Arztbesuch": 9 lessons, single arc — Apotheke → Mein Körper → Hausarzt → Untersuchung → Diagnose → Vorsicht → Beipackzettel → Alles klar? → Gute Besserung. THAT is coherent. U6 should be torn apart and redistributed or rebranded as a recap unit.
- **U2 "Entschuldigung, wo ist...?" — coherent journey.** 22 lessons but they all thread through "Verumius lost in Berlin → finds Döner → finds his way → reflects". `Der Döner-Umweg` (L8) is the comedic peak; `Morgen versuche ich es nochmal` (L10) is the emotional reset. This is sitcom-grade horizontal coherence.
- **U3 "Die Wohnungssuche" — coherent journey.** Wohnung frei → Familie → Verwandte → Besichtigung → Aufräumen → Möbel → Haustiere → Hausordnung → Prüfung → Willkommen zu Hause. Linear narrative spine. Excellent.
- **U4 "Im Supermarkt" — mostly coherent, tight on grammar.** Einkaufswagen-Panik → Obst → Nummern/Farben → Akkusativ-Alarm → DOGFU → Nummer-ziehen → Speed-Checkout → Küchenparade. Grammar-pivot lesson L4 sits cleanly inside the supermarket arc.
- **U5 "Hunger!" — coherent journey.** Was gibt's → Wie schmeckt's → Speisekarte → Modal verbs → Bestellen → Rechnung → Hotel → Stammtisch. Restaurant-to-stammtisch arc; modal verbs naturally land in restaurant ordering context.
- **U7 "Der Arztbesuch" — coherent and tight.** As above; gold standard for unit horizontal coherence.
- **U8 "Müllprofessor" — coherent journey, broken file structure.** Der falsche Eimer → Hildis Lektion → Recycling-Codes → Abendbrot-discovery → meeting Mia. The arc holds; the file shape is the issue (see Critical Finding above).
- **U9 "Freizeit und Vereine" — coherent.** Lauftreff (Mia intro) → Was machst du gern → Vereinssitzung → Mitmachen → ob/dass grammar → Digital → Nach dem Lauf → Vereinsprüfung. Clean Vereinskultur arc with Mia's introduction.
- **U10 "Deutsche Bahn" — coherent.** 47 Minuten Verspätung → Unterwegs → Mein Platz → Perfekt mit sein → Koffer → Wenn-clauses → Hin und her → Anschluss → Fahrkartenkontrolle → Reiseprüfung. Train-journey arc with Perfekt sein naturally landing on movement.
- **U11 "Auf dem Weihnachtsmarkt" — coherent.** Gendarmenmarkt → Kleidung → Opa Heinrichs Brötchen → adjective declension → Wetter → Glühwein → Weihnachtsprüfung. Christmas-market arc with adjective declension naturally landing on "der rote Schal".
- **U12 "Halbjahresbilanz" — appropriately reflective.** Six-month reflection unit; mixed-bag is structurally correct here because the unit IS a recap. Literaturcafé + Papierkram + Konjunktiv II + KD lacht + Prüfung + Ich will bleiben + Abschluss. This isn't random salad; it's a wrap-up unit by design.

---

## One-pager test result

After completing VerumLingua German A1+A2 (Units 01-12), a learner can:

1. **Survive arrival in Germany**: greet formally (Sie/du distinction), introduce self with name + nationality + profession, ask/give directions, navigate Berlin via U-Bahn, order food (modal verbs: ich möchte / kann ich), read menus, pay bar/Karte, say goodbye in 4+ registers. (U1, U2, U5)
2. **Set up daily life**: rent and describe an apartment (rooms + furniture), introduce family (possessives, all cases nominative), shop in a supermarket (accusative case + DOGFU prepositions + kein/nicht), pay bills, schedule appointments. (U3, U4, U6)
3. **Talk about past, future, and hypotheticals**: narrate yesterday with Perfekt haben + sein, plan tomorrow with future-as-present + werden hints, express polite wishes with Konjunktiv II basics (möchte / hätte gern). (U7, U10, U11, U12)
4. **Handle illness, neighbor conflict, and bureaucracy**: visit a Hausarzt, describe pain (dative verbs: tut weh + hilft), read a Beipackzettel, sort recycling (subordinate clauses with weil/dass), join a Verein (Vereinskultur), navigate a Christmas market. (U7, U8, U9, U11)
5. **Connect ideas in extended speech**: use coordinating conjunctions (und/aber/oder/denn), subordinate weil/dass/wenn/ob, comparative+superlative, Wechselpräpositionen with case choice, adjective declension after definite/indefinite articles. (U9-U12 capstones)

**This is a Goethe-A2-test-passing learner.** The capstone in U12 L14 is essentially a Goethe-A2 simulation: 25 numbered constructs, multi-construct synthesis, no scaffolding. A learner who passes that demonstrably has CEFR A2 productive competence in writing and reading.

**Would-be embarrassing absences from the one-pager:**

- **No real listening/speaking practice.** "Pronounce / understand spoken German" cannot be claimed. All audio is deferred. A learner who completes A1+A2 has NEVER heard a German speaker in this app. Cannot pass the listening or speaking sections of Goethe-A2. (Acknowledged in CLAUDE.md as Google Cloud TTS deferred — but should be on the one-pager limitations.)
- **Free production is under-trained.** With only 3 `tr` steps in 12 units (zero in A2), a learner has rarely been asked to produce a full German sentence from English without options. Goethe-A2 writing section will be a shock. **This is the single biggest curriculum-design risk** and the one I'd fix first.
- **No real conversation practice.** AI Chat is mentioned in CLAUDE.md as "AI conversation Phase 1" but is not wired into the lesson flow. Apply/Analyze/Evaluate Bloom levels (the top three) live in conversation. Curriculum stops at Apply-via-cued-recall.
- **No writing-as-output beyond fb/drag_fill.** The "Write simple messages / fill in forms" function (A1 F15) is taught conceptually via examples but never tested as an output task. A learner cannot demonstrate "I wrote a 50-word email in German."
- **Cultural depth is asymmetric across units.** U2 (Berlin), U7 (Hausarzt + Beipackzettel), U9 (Vereinskultur), U11 (Christmas market) are culturally deep. U4 (supermarket), U6 (mixed bag) are thin on cultural framing despite the domain being culturally distinctive (German checkout speed, Pfand system, Wochenmarkt vs Edeka — barely covered).

---

## Sign-off

- **Would I defend this curriculum design at a peer review? YES, conditionally.** Two conditions: (a) the Bloom-Apply gap is closed by adding `tr` steps to every unit capstone, and (b) U6 is restructured or rebranded. Without those two fixes, a curriculum-review committee would press on "where is free production?" and "what is U6 doing?" Both are answerable but not currently answered.

- **Is the structure sound enough to scale to 20 languages without re-design? PARTIALLY.** The grammar-construct → unit-spine → capstone-test backward-design pattern (U12 L14 as the proof point) is template-grade. Other languages should clone it. The intro/goals/teach/quiz/match/capstone rhythm is template-grade. The character-arc Story Bible pattern is template-grade.
  - **What does NOT scale yet:** (i) the `tr` Bloom gap is currently a German-specific authoring habit; if other languages copy German they'll inherit it — bake `tr` into the template. (ii) Unit-08's single-line file is a one-off authoring failure but signals tooling absence — agents need a unit-file linter that rejects flat unit files. (iii) Unit-06's random-salad shape is a sign that the per-unit concept-driven count (PP56) was not enforced for THIS unit — the enforcement mechanism needs to be a validator, not an aspiration. (iv) Goal-statements-in-teacher-voice will bleed into every cloned language. Fix at template level before next language ships.
  - **What scales beautifully:** the per-unit `// L1, L2, ...` source structure (when followed), the `level: A1.1/A1.2/A2.1/A2.2/A2.3` sub-level granularity, the `intro.goals[]` array as a per-lesson contract, the capstone-as-construct-checklist pattern in U12 L14.

This is a curriculum that gets architecture right where 80% of language apps don't. The remaining 20% is the difference between "passes Goethe-A2 reading/writing" (current state) and "passes Goethe-A2 entire" (with listening + speaking + free production added). The bones are sound. Some of the muscles are missing.
