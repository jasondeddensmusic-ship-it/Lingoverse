# Audit: Language Teacher — German A1+A2 (units 01-12)

**Date:** 2026-04-27
**Slice:** German A1+A2, units 01 through 12
**Auditor:** Real-World Language Teacher (15+ years, 30,000 contact hours, language schools + university adult-ed + private practice)
**Lens:** Would I assign this to my real students who paid €300 for this course?

---

## Score (1-10)

- Real-student smell test: **8**
- Stuck-student support: **7**
- Communicative needs coverage: **7**
- Pacing realism: **9**
- Motivation-curve sustainability: **8**
- Cultural/emotional engagement: **9**
- **Overall: 8**

This is the strongest A1+A2 curriculum I've reviewed in a digital product. It treats adult learners as adult learners. The narrative arc (Verumius arrives, can't read the train sign, finds a flat, gets sick, survives Christmas market, decides to stay) is the spine I'd build a 3-month classroom around. There are real concerns — most notably the umlaut-stripped grammar reference page and one specific embarrassing absence — but the bones are excellent.

---

## Top 3 strengths

1. **The Verumius arc is genuine pedagogy, not decoration.** Unit 1 puts him on the wrong train so he NEEDS "Entschuldigung" + "Ich verstehe nicht" + "Können Sie das wiederholen?" — these aren't presented as grammar exercises, they're survival vocabulary the character actually deploys at line `unit-01.js:85-86`. Unit 7's "four-minute doctor" subtitle alone tells me a real teacher (or a teacher-aware writer) shaped this. The cultural specificity — Beipackzettel, Hausordnung, Vereinskultur, Stammtisch, Glühwein, the 14-page apartment rules — is what gets adult learners to keep going past month 3. They feel they're learning about Germany, not just German.

2. **Foundations module is exam-design quality.** `foundations.js:280-298` has a "four English speaker traps" table (W=V, V=F, J=Y, Z=TS) that is *exactly* what every A1 teacher writes on the whiteboard in week 1. The CH ich-Laut / ach-Laut split (line 362-367) is taught with the vowel-trigger rule a real phonologist would use. The Gate Quiz at line 4428 with `diagnosticRouting` (each task maps to a specific stage if you fail it) — this is how the Goethe placement test works. I would actually print this and hand it to a private student.

3. **Pacing is realistic for adult attention spans.** Average ~18-23 steps per lesson across the slice (Unit 6: 435 steps / 24 lessons; Unit 7: 198 / 9; Unit 12: 421 / 18). At ~30-45 seconds per step, that's 12-18 minute sessions — under the 20-minute working-memory ceiling. The breather checkpoint injection in `LessonEngine.jsx:43-55` (auto-pause after 5 consecutive teach cards) is thoughtful — that's the equivalent of me saying "let's take a moment, what stuck?" in class. Story-mode toggle (line 32-35) means students who hate cute mascots can skip the narrative without breaking pedagogy. Lessons titled "Erste Sätze (Teil 2)" and "Wohnungssuche (Teil 2)" show a writer who noticed lessons were getting too long and *split them*, not crammed.

---

## Critical findings (a real student would walk away)

### CRIT-1: Konjunktiv II grammar reference is grammatically wrong
**[grammar/german.js:964-998]** | Konjunktiv II entry has every umlaut stripped: "ware" instead of **wäre**, "hatte" instead of **hätte**, "wurde" instead of **würde**, "konnte" instead of **könnte**. Without the umlaut these are PAST INDICATIVE forms (was/had/became/could-was-able), NOT subjunctive. The example at line 986 — *"Wenn ich reich ware, wurde ich ein Haus kaufen"* — is GRAMMATICALLY INCORRECT German. It would translate as "If I was rich [pseudo-past], I-became [past tense] to-buy a house" — a meaningless sentence.

**What would happen with a real student:** A diligent learner — exactly the kind we want — gets a Konjunktiv II quiz wrong in Unit 12 (where the actual lesson content correctly uses ä/ü, see `unit-12.js:662`). They tap into the Grammar tab to look up the rule. They see "wurde" and "ware" in the reference. They are now MORE confused than before. They write down the wrong forms in their notebook. Two weeks later they say *"Wenn ich Zeit hatte"* in conversation with a German colleague who hears "If I had time [past, contradictory tense match]". Instructor authority destroyed.

**Suggested fix:** Run the umlaut-restoration pass on `grammar/german.js`. Currently shows 78 instances of stripped umlauts in the grammar reference vs 0 in the unit lessons. The Goethe-aligned rules are correct; only the diacritics are wrong. This is the highest-priority fix in the slice — a 1-hour mechanical pass that prevents the curriculum from teaching wrong German via its own help docs. (Memory file `feedback_german_umlauts.md` already establishes this rule at the project level; the unit content respects it but the grammar.js module was missed.)

### CRIT-2: Restaurant unit teaches no dietary restriction vocabulary
**[unit-05.js — entire unit "Hunger!"]** | Unit 5 is the restaurant unit. It teaches modal verbs, ordering, "zusammen oder getrennt?", hotel rooms. But: zero vocab for **Allergie**, **vegetarisch**, **vegan**, **glutenfrei**, **laktosefrei**, **Erdnüsse**, "Ich habe eine Nuss-Allergie". Grep across all 12 units returns 0 hits for these terms. (Grep confirms `vegetarisch` first appears in Unit 18 at B1.2, and `Allergie` doesn't appear in A1-A2 at all.)

**What would happen with a real student:** I have students with celiac, dairy intolerance, peanut allergy, vegetarianism, halal/kosher restrictions. They went through 12 units (~6 weeks at typical adult pace) feeling competent. They sit down in a Berlin café. They CANNOT communicate "I can't eat gluten" — a phrase that for some of them is literally medical. This is the embarrassing-absence test failing hard. A learner with a serious allergy who completed A1+A2 still has a hospital phrase gap.

**Suggested fix:** Add 6-8 cards to a Unit 5 lesson (or a new short lesson r05l8b). Minimum: *die Allergie / allergisch gegen / die Erdnuss / vegetarisch / vegan / glutenfrei / laktosefrei / Was ist da drin?* and the survival sentence *"Ich bin allergisch gegen Erdnüsse — ist das in dem Gericht?"* This is 1 lesson worth of work and closes a real-world safety gap.

### CRIT-3: "Können Sie langsamer sprechen?" never taught as a chunk
**[unit-02.js:121]** | The components are present: `langsam` (slow) is a teach card in Unit 2, `sprechen` is taught Unit 1, `Können Sie...?` is in Unit 2. But the canonical survival phrase *"Können Sie langsamer sprechen, bitte?"* — what every A1 student needs the FIRST DAY in Germany — is never taught as a memorized chunk. The example at unit-02.js:121 says "Können Sie langsam sprechen?" (without the comparative *-er*). Native speakers say *langsamer* (more slowly) almost always, not *langsam*.

**What would happen with a real student:** Student lands in Frankfurt airport, the gate agent rattles off something at 200 wpm. The student tries to construct the sentence on the fly from parts ("können... Sie... langsam... sprechen... bitte"). They stumble. The agent switches to English, the student feels like they failed. The whole 6-week investment feels worthless. Whereas if the student had memorized *"Können Sie bitte langsamer sprechen?"* as a single chunk in Lesson 1, that one phrase is the difference between dignity and surrender.

**Suggested fix:** Add a single teach card in Unit 1 Lesson 2 (Begrüßung und Höflichkeit) for the chunk *"Können Sie bitte langsamer sprechen?"* with the funFact "This is the most important sentence in your A1 toolkit. Use it before anything else." Cost: 1 card. Benefit: every learner now has the survival phrase.

---

## Important findings

### IMPORTANT-1: Akkusativ vs Dativ contrast not consolidated until Unit 11
The Akkusativ is taught dedicatedly in Unit 4 ("Akkusativ-Alarm" lesson r4l4), with a great framing: "der becomes den, that's it, one gender, one change." Dative gets introduced piecemeal — `seit` as a "dative preposition" in Unit 6, full Dative paradigm flagged in the Unit 7 comment header, but no single dedicated comparison lesson before Unit 11's adjective-declension matrices. **Real-student pain:** by Unit 8 ("Wo oder Wohin?", Wechselpräpositionen), students are being asked to choose Akk vs Dat with two-way prepositions before they've consolidated the contrast. I'd add one short lesson in Unit 6 or 7 specifically titled "Akkusativ vs Dativ — wer kriegt was?" with side-by-side article tables. The grammar reference covers it (entry "Two-Way Prepositions" at grammar/german.js:491) but a learner needs PRACTICE consolidating, not just a reference page.

### IMPORTANT-2: Numbers 21-99 reversal (vierundzwanzig) deserves more drilling
*einundzwanzig* (one-and-twenty) appears as a funFact at unit-04.js:275-276, and the rule is acknowledged. But I see one match-pair drill, not the 10-15 production-mode reps a real student needs to overcome the L1 interference. By month 2, my students are still hesitating on phone numbers, prices, ages. **Suggested:** Unit 4 or Unit 6 could add a short drill lesson "Zahlen-Sprint" — fb/drag_fill cards on 21, 34, 47, 56, 78, 89, 99 etc. with audio. This is the kind of mechanical reps where only repetition wins.

### IMPORTANT-3: Separable verbs taught grammatically but few drilling reps
Grammar reference covers separable verbs beautifully (grammar/german.js:151-173). The unit content has *aufstehen, einkaufen, abfahren, ankommen, mitkommen* present, and they're modeled in dialogues. But the diagnostic question — "where does the prefix GO in a main clause?" — needs production-mode drill. Students have to physically WRITE *"Ich stehe um sieben Uhr **auf**"* with the prefix at the end, not just recognize it. Unit 8 "Kommst du mit?" gestures at this; Unit 10 "Reise" uses *abfahren/ankommen* well. But I'd add a focused drag_fill mini-drill at end of Unit 5 or 6.

### IMPORTANT-4: B-CEFR badging on lessons appropriate; sub-level visible
The unit headers correctly label A1.1/A1.2/A2.1/A2.2/A2.3 (per the search of `^\{n:1` headers). Sub-levels match the CEFR distribution principle (PP51). The `LearnPage.jsx:235` groups units by CEFR band with progress tracking. This is healthy.

### IMPORTANT-5: funFacts are an unsung hero of the A1+A2 slice
The funFact field is consistently warm, etymological, culturally relevant. *"'Tschüss' evolved from French 'adieu' → 'adjuees' → 'tschuess'"* (unit-01.js:36). *"'Bisschen' from 'Biss' (bite). A bite-sized amount."* (unit-01.js:21). *"Eichhörnchen is the word Germans test foreigners with."* (unit-11.js:441). This is the kind of teacher-trivia I deploy when a class energy dips. 1,459 teach cards × engaging funFact = real motivation glue.

### IMPORTANT-6: Story-mode toggle solves the "I hate the mascot" problem
`LessonEngine.jsx:32-42` defaults story mode OFF and filters out story cards AND quiz cards that use story-character names. This is genuinely thoughtful: I have students who hate gamification but love content. Now both audiences are served.

### IMPORTANT-7: Unit 7 ("Der Arztbesuch") mid-A2 dip
Unit 7 has 9 lessons / 198 steps — slimmer than its neighbors. It's compact for what should be a critical Unit (medical vocabulary is high-stakes, not just useful). I'd love to see one more lesson on emergency phrases: *"Es ist ein Notfall", "Ich brauche einen Krankenwagen"*, the 112 emergency number, "Ich nehme Medikamente gegen ___" for chronic conditions. The current unit covers a generic cold competently but misses the emergency-room scenario.

---

## "Embarrassing absences"

A real classroom teacher would notice these missing:

- **Food allergy / dietary restriction vocab** — *Allergie, allergisch gegen, vegan, vegetarisch, glutenfrei, laktosefrei, koscher, halal*. Critical for safety; absent in A1+A2. (Critical, see CRIT-2.)
- **"Können Sie langsamer sprechen, bitte?" as a memorized chunk** — components present, the chunk itself isn't. (Critical, see CRIT-3.)
- **Emergency phrases** — *Notfall, Krankenwagen, Polizei, 112, Hilfe!*. Tourist-trip survival. Absent in A1+A2.
- **"Ich brauche..." as a A1 staple** — `brauchen` does not get a dedicated teach card with conjugation in the early units (grep returns hits but mostly in late-unit examples). For A1 communicative competence it should be top-5 verbs.
- **Money / paying with card vs cash awareness** — the *"Zusammen oder getrennt?"* lesson in Unit 5 is great, but Germans famously prefer cash and *"Karte oder bar?"* / *"Nur Bargeld"* are real-world phrases that catch every tourist. Worth one card in Unit 5.
- **Train ticket + DB-Navigator + ICE/RE/S-Bahn** — Unit 1 introduces the train station, Unit 10 has 47 minutes Verspätung (good!) but the *types* of trains and *types* of tickets aren't clearly taught. *"einfach oder hin und zurück"*, *"erste Klasse oder zweite Klasse"*, *"Sparpreis"* — would belong in Unit 1 or Unit 10.
- **"Ich verstehe nur Bahnhof"** — the canonical German "I don't understand a thing" idiom. Cultural goldmine and a confidence-saver. Could be one card in Unit 12.
- **Numbers > 1000 spoken patterns** — *einhundert* and *tausend* are taught (unit-04.js:275-276), but the spoken pattern *"zweitausenddreihundertfünfundzwanzig"* (2,325) — read-aloud intuition for prices and years — needs more reps.
- **Pharmacy "auf Rezept" vs "rezeptfrei"** — Unit 7 has *Apotheke* but doesn't draw the prescription/OTC distinction explicitly. German pharmacies are gatekept differently than US/UK ones; this is the kind of cultural-pragmatic gap that quietly trips travelers.
- **Specific "I'd like..." chunk for ordering** — *"Ich hätte gern ___, bitte"* (with Konjunktiv II *hätte*) is THE polite ordering formula. Unit 5 teaches *"Ich möchte"* and *"Ich nehme"* but the *hätte gern* chunk is the most native — and it's the kind of phrase that earns immediate respect from servers.

---

## Sign-off

- **Would I use this curriculum in my classroom?** **Yes, with the umlaut fix and the food-allergy addition.** I would assign Units 1-12 as homework between weekly classroom sessions. The curriculum is doing 60% of the teaching; I'd handle pronunciation correction and free-form conversation in class. I'd specifically pair this app with weekly speaking practice, because the curriculum is strong on receptive + production-via-typing but can't replace mouth-mechanics for a German *r* or *ch*.

- **Would I recommend this app to a friend who wants to learn German?** **Yes, with one caveat.** "Use it daily, but until they fix the umlauts in the grammar reference, don't trust the Konjunktiv II help page — verify with a real reference." The unit lessons themselves are sound; the help-doc fix should land before public launch.

- **If I were the learner, would I stick with this past month 3?** **Yes.** This is the rare digital language product where I genuinely care what happens to Verumius. The Christmas market with Opa Heinrich, the realization at end of Unit 12 to *bleiben* — that's not gamification, that's narrative payoff. The plateau zone (month 2-3) gets cushioned by the cultural specificity (*Vereinskultur*, *Beipackzettel*, *Stammtisch*) that makes a learner feel they're not just learning words, they're learning Germany. That's how you get to B1.

---

**Filed:** 2026-04-27
**Confidence:** High — sampled all 12 units' lesson titles, sampled lesson 1 in full, examined all hard-grammar coverage points, audited Foundations module + grammar reference + LessonEngine pacing logic. Did not run the live app; findings are corpus-based.
