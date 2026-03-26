# V1 Salvage Mining Report: German V2 Units 19-24 (B1.2)

**Agent:** V1 Salvage Mining Agent
**Date:** 2026-03-26
**V1 source:** `src/data/units-german.js`
**V2 target:** `src/data/units-german-v2.js` (units 19-24, lines 5461-7164)
**Method:** grep + line-range extraction. Zero sampling. All tips, verb tables, and quiz banks examined.

---

## Summary Table

| V1 Unit | V1 Lines | V1 Title | V2 Target | Status | Salvageable Items |
|---------|----------|----------|-----------|--------|-------------------|
| U22 | 6221-6469 | Um zu verstehen... | V2 U17/U19 | PARTIAL GAP | 3 tips, 2 quiz banks |
| U23 | 6470-6724 | Trotzdem und deshalb | V2 U20 | MAJOR GAP | 5 tips, 4 quiz banks |
| U24 | 6725-6921 | Die Bewerbung | V2 U13 | COVERED | 2 tips (format) |
| U25 | 6922-7093 | Wenn ich könnte... | V2 U23 | CRITICAL GAP | 8 tips, verb tables, 98 quizzes |
| U26 | 7094-7346 | Die Bedeutung der Bildung | V2 U21 | MAJOR GAP | 5 tips, 102 quizzes |
| U27 | 7347-7520 | Es ist erledigt! | V2 U22 | PARTIAL GAP | 4 tips, 93 quizzes |
| U28 | 7521-7688 | Einerseits... andererseits | V2 U20/U23/U24 | MAJOR GAP | 6 tips, 90 quizzes |
| U29 | 7689-7855 | Übung macht den Meister! | V2 U23/U24 | MINOR GAP | 2 tips |
| U30 | 7856-8027 | Bereit für die Prüfung! | V2 U23/U24 | MINOR GAP | 3 tips |

---

## Detailed Findings

### ITEM 1 — V1 U22 L1-L4: Three Infinitive Construction Tips
**Type:** `tip` (3 items)
**V1 location:** Lines 6221-6469, lessons deu22l1, deu22l3, deu22l4
**V2 gap:** V2 U17 covers um...zu and ohne...zu. V2 U19 covers subordinating conjunctions including damit. But V1 U22 has a direct-comparison tip (um...zu vs. damit) and a "Three Infinitive Constructions" summary tip (um...zu / ohne...zu / statt...zu together) that V2 lacks.

**Content to salvage:**

Tip A (deu22l1 line 15 relative):
```
title: "um...zu Structure"
text: "um opens the clause, zu + infinitive closes it.\nThe infinitive always goes to the END.\nKey rule: Subject of um...zu MUST be same as main clause."
deepDive title: "um...zu vs. damit"
deepDive text: "When subjects are DIFFERENT, use damit + verb-final:\n\nSame subject (um...zu): Ich lerne, um die Prüfung zu bestehen.\nDifferent subjects (damit): Ich erkläre es, damit du es verstehst.\n\nBoth express purpose, but damit allows two different subjects."
```

Tip B (deu22l3 line 77 relative):
```
title: "ohne...zu vs. um...zu"
text: "Both use zu + infinitive but express different things:\n\num...zu = purpose (in order to)\nohne...zu = absence (without doing)\n\nSame structure, same subject-match rule."
deepDive title: "ohne...zu vs. ohne dass"
deepDive text: "Same subject: Er ging, ohne etwas zu sagen.\nDifferent subjects: Er ging, ohne dass jemand es merkte."
```

Tip C (deu22l4 line 108 relative):
```
title: "The Three Infinitive Constructions"
text: "1. um...zu = purpose\n2. ohne...zu = absence\n3. statt/anstatt...zu = alternative (instead of)\nAll: same structure, same subject-match rule."
deepDive title: "Word order flexibility"
deepDive text: "Statt...zu can come before OR after: 'Statt zu lernen, spielt er.' vs 'Er spielt, statt zu lernen.'"
```

**Quality:** High. V2 U17 covers um...zu and V2 U19 covers damit, but the contrast tips (um vs damit, ohne vs ohne dass, the 3-way summary) are not in V2. These close a real PP45 gap.
**Recommendation:** TAKE Tip A deepDive for V2 U17 (add damit contrast to existing um...zu tip). TAKE Tip C for V2 U19 (three-way summary card). SKIP Tip B (V2 U17 already covers ohne...zu with an adequate deepDive).

---

### ITEM 2 — V1 U22 L5-L7: Separable Verbs + zu, Verb+zu List
**Type:** `tip` (2 items)
**V1 location:** Lines 6221-6469, lessons deu22l5-deu22l7

**Content to salvage:**

Tip D (deu22l7 line 201 relative):
```
title: "Separable vs Inseparable + zu"
text: "Separable: zu goes BETWEEN prefix and verb.\naufstehen → aufzustehen, einkaufen → einzukaufen\n\nInseparable: zu goes BEFORE the whole verb.\nverstehen → zu verstehen, besuchen → zu besuchen\n\nSeparable prefixes: auf, an, ein, mit, aus, ab, zu, vor.\nInseparable prefixes: be-, ge-, er-, ver-, zer-, ent-, emp-, miss-."
deepDive title: "Double separable verbs"
deepDive text: "wiedersehen → wiederzusehen\nkennenlernen → kennenzulernen\nfernsehen → fernzusehen"
```

**Quality:** High. V2 U17 does not cover the separable+zu rule. This is a real gap that causes learner errors (writing "aufzu-stehen" split). Goethe exam tests this.
**Recommendation:** TAKE for V2 U17 (add as tip in L4 or L5, after statt...zu).

---

### ITEM 3 — V1 U23: Adverbial Conjunctions (deshalb, trotzdem, dennoch, außerdem, sowohl...als auch, weder...noch)
**Type:** `tip` (5 items), `quiz banks` (114 quizzes across 5 lessons)
**V1 location:** Lines 6470-6724, lessons deu23l1-deu23l5
**V2 gap:** V2 U20 has ONE tip covering deshalb/deswegen/trotzdem/also/sonst (adverbial conjunctions basics) with ~10 related quizzes. V1 U23 has 5 dedicated lessons and 114 quizzes covering: deshalb/deswegen, trotzdem/dennoch, obwohl contrast, außerdem/zudem/darüber hinaus, and sowohl...als auch / weder...noch. V2 U20 covers the basics but the advanced set (außerdem formality scale, paired connectors sowohl/weder) is entirely absent.

**Content to salvage:**

Tip E (deu23l2 relative): deshalb vs trotzdem contrast
```
title: "deshalb vs trotzdem: Logic Direction"
text: "Both cause V2 inversion, but opposite logic:\n\ndeshalb = expected result\nEs regnet. Deshalb bleibe ich zu Hause. (logical)\n\ntrotzdem = unexpected result\nEs regnet. Trotzdem gehe ich raus. (surprising)\n\ndeshalb = 'because of that' / trotzdem = 'despite that'"
deepDive title: "dennoch vs trotzdem"
deepDive text: "trotzdem = casual everyday speech\ndennoch = formal writing, essays, news\n'Der Markt fiel. Dennoch blieben die Anleger ruhig.'\nStick with trotzdem in conversation, switch to dennoch in writing."
```

Tip F (deu23l3 relative): obwohl vs trotzdem distinction
```
title: "obwohl vs trotzdem: Grammar Difference"
text: "obwohl = subordinating conjunction, verb goes to END\nObwohl es regnet, gehe ich raus.\n\ntrotzdem = adverb, verb stays in position 2\nEs regnet. Trotzdem gehe ich raus.\n\nSame meaning. Completely different grammar.\nTest: Can you start a new sentence with it? trotzdem YES, obwohl NO."
deepDive title: "Clause structure comparison"
deepDive text: "With obwohl (one complex sentence):\nObwohl es kalt ist, gehe ich schwimmen.\n[dependent clause: verb LAST] [main clause: V2]\n\nWith trotzdem (two main clauses):\nEs ist kalt. Trotzdem gehe ich schwimmen."
```

Tip G (deu23l4 relative): außerdem formality scale
```
title: "Formality Scale: Adding Information"
text: "Casual to formal:\nauch = also (simplest)\naußerdem = moreover (everyday, versatile)\nzudem = furthermore (slightly formal)\ndarüber hinaus = beyond that (essays only)\n\nAll add new information. außerdem is your safe default."
deepDive title: "Word order with außerdem"
deepDive text: "Position 1 (with inversion):\nAußerdem spricht sie Französisch.\n\nMid-sentence (no inversion):\nSie spricht außerdem Französisch.\n\nBoth correct. Position 1 emphasizes the addition."
```

Tip H (deu23l5 relative): sowohl...als auch / weder...noch
```
title: "Paired Connectors: sowohl...als auch / weder...noch"
text: "sowohl A als auch B = both A and B\nSie ist sowohl intelligent als auch fleißig.\n\nweder A noch B = neither A nor B\nEr trinkt weder Kaffee noch Tee.\n\nIMPORTANT: weder...noch is already negative.\nNEVER add nicht or kein: Er trinkt weder Kaffee noch Tee. (correct)"
deepDive title: "weder...noch with clauses"
deepDive text: "With full clauses: weder triggers inversion in both:\nWeder hat er Zeit, noch hat er Lust.\n(Neither does he have time, nor does he feel like it.)"
```

**Quiz bank quality:** Excellent. 114 quizzes. Mix of mc/fb/drag_fill/match. Good distractor sets. Obwohl vs trotzdem quizzes especially strong (converting between forms, identifying errors, completing clauses).

**Priority quizzes to salvage (representative sample):**
- "Es regnet stark. ___ gehen wir spazieren." [trotzdem / deshalb / weil / denn] — ans: trotzdem
- "Obwohl es kalt ___, gehen wir schwimmen." [ist / hat / wird / bleibt] — ans: ist
- "Convert: 'Es regnet. Trotzdem gehe ich raus.' Which obwohl version?" — tests grammar conversion
- "Which pair has OPPOSITE meanings?" [deshalb and trotzdem / deshalb and deswegen / ...] — ans: deshalb and trotzdem
- "Er ist krank. ___ geht er zur Arbeit." [Trotzdem / Deshalb / Weil / Denn] — ans: Trotzdem

**Recommendation:** TAKE Tips E, F, G, H for V2 U20 (add to existing adverbial conjunction lesson). TAKE 40-50 quizzes from V1 U23 L2-L3 (obwohl/trotzdem conversion quizzes and außerdem/sowohl/weder banks for V2 U20 L4 and U23 L8).

---

### ITEM 4 — V1 U24: Die Bewerbung (Formal Register)
**Type:** `tip` (2 items format-relevant)
**V1 location:** Lines 6725-6921
**V2 gap:** V2 U13 covers Die Bewerbung extensively. V1 U24 covers identical territory. No gap exists.

**Exceptions — two tips worth reviewing for V2 U13:**

Tip I (deu24l6 relative): Feierabend cultural tip
```
title: "Feierabend: A German Institution"
text: "Work-life separation mindset. Do not email after Feierabend.\n'Schönen Feierabend!' as goodbye.\nCalling about work during Feierabend is rude.\nThe word dates to medieval guild bell-ringing traditions."
```

**Quality:** The Feierabend cultural insight is richer in V1 than V2 U13. V2 U13 has a workplace culture tip but does not cover Feierabend specifically.
**Recommendation:** MERGE Feierabend deepDive into V2 U13 existing workplace culture tip. SKIP the rest (V2 U13 already covers Anschreiben, Lebenslauf, Vorstellungsgespräch, Vertrag at equal or better depth).

---

### ITEM 5 — V1 U25 L1: Strong Konjunktiv II Forms
**Type:** `tip` + `teach` cards + `quiz bank` (8 lessons, 98 quizzes)
**V1 location:** Lines 6922-7093
**V2 gap:** V2 U23 L4 has ONE tip on irreale Bedingungssätze (present tense: wenn...hätte, würde) and ONE tip on brauchen+zu. It does NOT cover:
- Strong Konjunktiv II forms (ginge, käme, wüsste, fände, ließe, bräuchte) vs würde
- Konjunktiv II Vergangenheit with haben (hätte + PP: hätte gemacht, hätte gesagt, hätte gewusst)
- Konjunktiv II Vergangenheit with sein (wäre + PP: wäre gegangen, wäre gekommen, wäre geblieben)
- Past irrealis conditionals (wenn...gehabt hätte, wäre...gekommen)
- Wish and regret patterns (Hätte ich doch nur..., Wäre ich doch nur...)
- als ob + Konjunktiv II
- Politeness scale (Dürfte ich..., Wären Sie so freundlich...)

**This is the largest single gap in V2 U19-U24.**

**Content to salvage:**

Tip J (deu25l1 relative):
```
title: "Strong Konjunktiv II Forms"
text: "Common strong forms (preferred over würde):\nginge, käme, wüsste, fände, ließe, bräuchte\nhätte, wäre, könnte, müsste, dürfte, sollte\n\nUse würde + Infinitiv when:\n1. Strong form sounds old-fashioned\n2. Konj II = Präteritum (e.g., machte)\n3. You are unsure of the strong form"
deepDive text: "Rare in speech (use würde instead):\nhülfe (helfen), stürbe (sterben), würfe (werfen)\n\nCommon in everyday speech:\nhätte, wäre, könnte, müsste, wüsste, ginge, käme, fände, ließe, bräuchte"
```

Tip K (deu25l2 relative):
```
title: "Word Order: Konjunktiv II Vergangenheit"
text: "Main clause:\nIch hätte das gemacht. (hätte = V2, PP at end)\n\nSubordinate clause:\n...wenn ich das gewusst hätte. (PP before hätte at end)\n\nThe conjugated auxiliary (hätte) follows normal position rules.\nPartizip II always goes near the end."
deepDive text: "Complex double-hätte pattern:\nWenn ich das gewusst hätte, hätte ich es anders gemacht.\n\n1st clause: gewusst hätte (PP + aux at end)\n2nd clause: hätte ich es gemacht (V1 after wenn-clause, PP at end)"
```

Tip L (deu25l3 relative):
```
title: "hätte vs wäre in Konjunktiv II Past"
text: "Use hätte + PP for most verbs:\nhätte gemacht, hätte gesagt, hätte gewusst, hätte gekauft\n\nUse wäre + PP for:\nMotion verbs: wäre gegangen, wäre gekommen, wäre gefahren\nChange of state: wäre geworden, wäre eingeschlafen\nbleiben, sein, passieren, geschehen\n\nSame rule as Perfekt: ist gegangen → wäre gegangen."
deepDive text: "Double wäre sentences:\nEs wäre schön gewesen, wenn sie gekommen wäre.\n\nMain clause: wäre ... gewesen\nSubclause: gekommen wäre (PP before wäre at end)"
```

Tip M (deu25l4 relative):
```
title: "Present vs Past Irrealis"
text: "Present (not real NOW):\nWenn ich Zeit hätte, würde ich kommen.\n(If I had time, I would come.)\n\nPast (not real in the PAST):\nWenn ich Zeit gehabt hätte, wäre ich gekommen.\n(If I had had time, I would have come.)\n\nPresent = Konjunktiv II simple forms.\nPast = hätte/wäre + Partizip II."
deepDive text: "Mixed conditionals:\nWenn ich damals studiert hätte (past), wäre ich jetzt Ärztin (present).\nPast cause + present consequence."
```

Tip N (deu25l5 relative):
```
title: "Wish and Regret Patterns"
text: "Present wishes:\nIch wünschte, ich hätte/wäre/könnte...\n\nPast regrets:\nHätte ich doch nur + PP!\nWäre ich doch nur + PP!\nWenn ich doch nur + PP + hätte/wäre!\n\ndoch, nur, bloß add emotional emphasis. All three mean the same thing."
deepDive text: "Subtle register differences:\nIch wünschte = formal, calm wish\nHätte ich doch nur = emotional regret\nWenn ich doch nur = slightly softer regret"
```

Tip O (deu25l6 relative):
```
title: "als ob + Konjunktiv II"
text: "Both mean 'as if':\n\nals ob + ... + verb at END:\nEr tut, als ob er müde wäre.\n\nals + verb immediately:\nEr tut, als wäre er müde.\n\nSame meaning. als (without ob) is more elegant.\nAlways requires Konjunktiv II."
deepDive text: "Common verbs before als ob:\ntun als ob, aussehen als ob, klingen als ob,\nsich fühlen als ob, scheinen als ob, sich verhalten als ob\n\nAll describe APPEARANCES, not facts."
```

Tip P (deu25l8 relative):
```
title: "Konjunktiv II Complete Overview"
text: "Present irrealis: Wenn ich Zeit hätte, ginge ich.\nPast irrealis: Wenn ich Zeit gehabt hätte, wäre ich gegangen.\nWishes: Ich wünschte, ich hätte mehr Zeit.\nRegret: Hätte ich doch nur mehr gelernt!\nals ob: Er tut, als ob er alles wüsste.\nPolite: Dürfte ich Sie bitten...?"
```

**Verb tables to salvage (V1 has none in U25 — all grammar taught through examples).**

**Quiz bank quality:** Excellent. 98 quizzes. Strong distractor sets for hätte/wäre distinction. Key quiz types:
- "Which auxiliary for Konj II past of gehen?" [wäre gegangen / hätte gegangen / würde gegangen] — tests sein vs haben rule
- Drag fills: "Wenn er früher {aufgestanden} {wäre}, {hätte} er den Zug nicht {verpasst}." — combines both auxiliaries
- "Complete: Wenn sie es mir ___, hätte ich geholfen." — ans: gesagt hätte — word order in subclause
- Match pairs: hätte gemacht / hätte gesagt / hätte gewusst / hätte gekauft
- "Das hätte ich nie gedacht!" — idiomatic surprise pattern
- als ob completions and conversions

**Recommendation:** TAKE all 8 tips (J through P) — these cover content entirely absent from V2 U23. TAKE 50-60 quizzes from L2-L4 (hätte/wäre distinction drills and past irrealis sentence building). HIGH PRIORITY. V2 U23 currently only shows learners present-tense irrealis; past irrealis is a required Goethe B1 construct.

---

### ITEM 6 — V1 U26 L3-L5: Partizip I/II as Adjective, Extended Phrases
**Type:** `tip` (5 items), `quiz bank` (102 quizzes)
**V1 location:** Lines 7094-7346, lessons deu26l3-deu26l5
**V2 gap:** V2 U22 already has tips on Partizip I as adjective and Partizip II as adjective, plus a match quiz (der lachende Mann / der gelesene Brief). The extended participial phrase (die in Berlin lebende Frau, der von Goethe geschriebene Roman) is NOT in V2 U22.

**V1 U26 L1-L2 (nominalizations):** V2 U21 does not cover -ung/-heit/-keit nominalizations at all. This is a B2 topic that should go in future B2 units, not B1.2.

**Content to salvage (Partizip only):**

Tip Q (deu26l3 line 75 relative):
```
title: "Partizip I as Adjective: The Formula"
text: "Formation: infinitive + d\nlachen → lachend, schlafen → schlafend, fahren → fahrend\n\nAs adjective takes normal endings:\nder lachende Mann, die schlafende Katze, das fahrende Auto\n\nMeaning: noun IS doing the action right now."
deepDive title: "Partizip I vs English -ing"
deepDive text: "German Partizip I CANNOT form progressive tense:\n'I am laughing' = Ich lache (not 'Ich bin lachend')\n\nGerman Partizip I MUST take adjective endings.\nMore common in formal/written language. Spoken: Der Mann, der lacht."
```

Note: V2 U22 already has a nearly identical tip. This is COVERED.

Tip R (deu26l4 line 106 relative):
```
title: "Partizip I vs Partizip II as Adjective"
text: "Partizip I (infinitive + d) = ONGOING action:\nder lachende Mann = the man who IS laughing\n\nPartizip II (ge- + stem) = COMPLETED action/state:\ndas geöffnete Fenster = the window that HAS BEEN opened\n\nKey difference:\nPartizip I = active (the noun does it)\nPartizip II = passive (it was done TO the noun)"
deepDive title: "Partizip II formation recap"
deepDive text: "Weak: ge- + stem + -t (gekocht, geöffnet)\nStrong: ge- + stem change + -en (geschrieben, gelesen)\nInseparable prefixes: NO ge- (besucht, entwickelt)\n-ieren verbs: NO ge- (studiert, organisiert)"
```

Note: V2 U22 has a match quiz contrasting these but no explicit comparison tip. This tip adds value.

Tip S (deu26l5 line 135 relative): Extended participial phrases
```
title: "The Extended Participial Phrase"
text: "German packs modifiers BEFORE the noun in a frame:\n\nArticle ... Partizip + ending + NOUN\n\ndie [in Berlin lebende] Frau\ndas [von Goethe geschriebene] Buch\nder [seit Wochen geplante] Urlaub\n\nTo read: find the article, jump to the NOUN, read the middle.\nTo build: start with a relative clause, remove relative pronoun and verb ending, move participle before noun."
deepDive title: "Why German does this"
deepDive text: "English: 'The woman who lives in Berlin'\nGerman formal: 'Die in Berlin lebende Frau'\n\nPacks complex information in a single noun phrase. Standard in academic writing. Extreme examples exist in legal texts. Start simple and build up."
```

**Quality:** The extended participial phrase (Tip S) is entirely absent from V2 U22. This is a genuine B1.2 gap — it is tested in Goethe B1 reading texts. The basic Partizip I/II tips (Q, R) have partial coverage in V2 U22; Tip R adds the deepDive on formation that V2 lacks.

**Quiz bank quality:** Good. 102 quizzes. The L5 extended-phrase quizzes are most valuable:
- Building extended phrases from relative clauses
- Identifying the noun in complex bracketed phrases
- Converting between relative clause and extended adjective forms

**Recommendation:** SKIP Tip Q (V2 U22 already has it). TAKE Tip R deepDive (add PP formation deepDive to V2 U22 Partizip II tip). TAKE Tip S for V2 U22 (new lesson or tip card). TAKE 25-30 quizzes from L5 (extended phrase drills). SKIP L1-L2 nominalizations (B2 territory).

---

### ITEM 7 — V1 U27 L2, L5, L6, L7: Advanced Passive Forms
**Type:** `tip` (4 items)
**V1 location:** Lines 7347-7520
**V2 gap:** V2 U14 covers standard passive (werden + PP) and V2 U19 covers passive with modals. V1 U27 adds: Zustandspassiv (sein + PP as state), bekommen-Passiv, man as passive alternative, sich lassen passive alternative, sein + zu + Infinitiv, -bar adjectives. V2 covers none of these.

**Content to salvage:**

Tip T (deu27l2 relative): Zustandspassiv
```
title: "Zustandspassiv: The Result Passive"
text: "Formation: sein + past participle\nPresent: ist geöffnet (is open)\nPast: war geöffnet (was open)\n\nFocus: the STATE or RESULT, not the process.\n\nVorgangspassiv (werden): Das Fenster wird geöffnet.\n(Someone is opening it right now)\n\nZustandspassiv (sein): Das Fenster ist geöffnet.\n(It is in an open state)"
deepDive text: "Many Zustandspassiv forms look like adjective + sein, and the line between them is blurry in daily use. Common examples: Das Geschäft ist geschlossen. Der Kaffee ist gekocht. Ist der Kaffee fertig?"
```

Tip U (deu27l5 relative): bekommen-Passiv
```
title: "bekommen-Passiv: The Recipient Passive"
text: "Standard passive: Das Buch wird dem Kind geschenkt.\nbekommen-Passiv: Das Kind bekommt das Buch geschenkt.\n\nThe RECIPIENT becomes the subject.\n\nVery common in spoken German.\nkriegen works identically: Das Kind kriegt das Buch geschenkt."
deepDive text: "Use when you want to emphasize the RECIPIENT. Natural with verbs of giving, sending, explaining, services (hair cut, car repaired). Some grammarians call it informal, but it is standard spoken German."
```

Tip V (deu27l6 relative): man and sich lassen
```
title: "man and sich lassen: Passive Alternatives"
text: "man = general passive (people in general):\nHier raucht man nicht. = Hier wird nicht geraucht.\n\nsich lassen = possibility passive:\nDas lässt sich machen. = Das kann gemacht werden.\n\nman sounds natural in speech.\nsich lassen sounds elegant in business/formal contexts."
```

Tip W (deu27l7 relative): sein + zu + Infinitiv / -bar
```
title: "sein + zu + Infinitiv and -bar Adjectives"
text: "sein + zu + Inf: TWO meanings by context:\n1. Possibility: Das ist zu schaffen. (can be done)\n2. Necessity: Die Regeln sind zu beachten. (must be followed)\n\n-bar = -able/-ible:\nmachbar (doable), lösbar (solvable), essbar (edible)\nun- prefix negates: unlösbar, unvorstellbar"
```

**V2 gap assessment:** V2 U22 has an excellent `lassen` tip covering the three uses. Tip V (sich lassen as passive alternative) overlaps with this. But Zustandspassiv (Tip T), bekommen-Passiv (Tip U), and sein+zu/-bar (Tip W) are entirely absent from V2.

**Quiz bank quality:** Good. 93 quizzes. Zustandspassiv/Vorgangspassiv contrast quizzes are particularly strong.

**Recommendation:** TAKE Tips T and U for V2 U22 (new lesson or add to existing passive tips). MERGE Tip V's `sich lassen` content into V2 U22's existing lassen tip (it already covers `sich lassen` but not the passive function explicitly). TAKE Tip W (sein+zu/-bar) for V2 U22. TAKE 25-30 Zustandspassiv contrast quizzes.

---

### ITEM 8 — V1 U28: Discourse Markers and Argumentation
**Type:** `tip` (6 items), `quiz bank` (90 quizzes)
**V1 location:** Lines 7521-7688
**V2 gap:** V2 U20 has basic deshalb/trotzdem/deswegen/also/sonst. V2 U23 L8 and U24 have some discourse work but focus on exam context. V1 U28 covers: einerseits...andererseits, zwar...aber, im Gegensatz zu (dative!), comparison grammar (genauso wie / anders als), vor allem / insbesondere / nicht zuletzt layering, formal genitive prepositions (hinsichtlich, bezüglich, angesichts, aufgrund, infolge), and essay structure (Erörterung template).

**Content to salvage:**

Tip X (deu28l1 relative): einerseits...andererseits
```
title: "einerseits...andererseits / zwar...aber"
text: "einerseits...andererseits = on one hand...on the other hand\nCan be in position 1 (with inversion) or mid-sentence.\n\nzwar...aber = admittedly...but\nzwar ALWAYS sits in the Mittelfeld (never position 1):\nEr ist zwar nett, aber unzuverlässig.\n\nim Gegensatz zu = in contrast to (takes DATIVE)"
deepDive text: "im Gegensatz zu contracts as usual:\nim Gegensatz zu meinem Bruder\nim Gegensatz zur Situation (zu + der = zur)"
```

Tip Y (deu28l3 relative): vor allem / layering argument
```
title: "Layering Arguments: Crescendo Effect"
text: "A strong argument builds with increasing force:\n1. Erstens... (first)\n2. Außerdem / Darüber hinaus... (moreover)\n3. Vor allem / Insbesondere... (especially)\n4. Nicht zuletzt... (not least)\n\nThis creates a crescendo effect."
deepDive text: "darüber hinaus, des Weiteren, and ferner are roughly synonymous. darüber hinaus most common. ferner most formal and slightly old-fashioned."
```

Tip Z (deu28l4 relative): Genitive prepositions
```
title: "Formal Genitive Prepositions"
text: "All take genitive:\nhinsichtlich des Problems (regarding the problem)\nbezüglich der Frage (concerning the question)\nangesichts der Krise (in view of the crisis)\naufgrund des Wetters (due to the weather)\ninfolge des Unfalls (as a result of the accident)\n\nIn speech: wegen (+ dative). In writing: use these."
deepDive text: "In everyday speech, people say 'was X angeht' or 'wegen'. But in job applications, reports, and exams, these genitive prepositions signal competence."
```

Tip AA (deu28l7 relative): Concession-refutation pattern
```
title: "The Concession Pattern"
text: "Essential for B2 essays:\n1. Concede: Zwar / Obwohl / Es stimmt, dass...\n2. Counter: aber / trotzdem / dennoch / nichtsdestotrotz\n3. Conclude: Daher / Folglich / Aus diesem Grund\n\nShows you can see BOTH sides."
deepDive text: "nichtsdestotrotz (nevertheless) = nichts + desto + trotz.\nValid in formal writing. dennoch is shorter and equally formal."
```

**V2 gap assessment:** These topics (einerseits/andererseits, concession pattern, formal genitive prepositions, crescendo layering) are entirely absent from V2 U19-U24. They are relevant to V2 U24 (capstone/review) and will be needed in B2 units (U25-U36).

**Quiz bank quality:** Good. 90 quizzes. The genitive preposition quizzes and einerseits/andererseits substitution exercises are the most salvageable.

**Recommendation:** TAKE Tips X and AA for V2 U23 L8 "Die großen Wörter" (which already covers discourse connectors). DEFER Tips Y, Z, and the genitive preposition quizzes to B2 units (U25+) — these are B2.1-level content. TAKE 20-25 einerseits/andererseits and concession quizzes for V2 U23 or U24.

---

### ITEM 9 — V1 U29-U30: Proverbs, Idioms, Exam Strategies
**Type:** `tip` (5 items), minor quiz content
**V1 location:** Lines 7689-8027

**V1 U29 (Proverbs and idioms):** Entirely different topic from V2 B1.2 content. Not relevant to V2 U19-U24. Proverbs/idioms are deferred to future B2 units.

**V1 U30 L6 (Tense Review summary tip):**
```
title: "Tense Review: When to Use What"
text: "Präsens: now, general truths, scheduled future\nPerfekt: spoken past\nPräteritum: written/narrative past\nPlusquamperfekt: before the past (Nachdem er gegessen hatte, ging er)\nFutur I: future plans\n\nExam: narrative texts use Präteritum. Spoken tasks use Perfekt."
deepDive text: "The Plusquamperfekt + nachdem/bevor pattern is heavily tested: 'Nachdem ich die Prüfung bestanden hatte, feierte ich.' Subclause = Plusquamperfekt, main clause = Präteritum."
```

**V2 gap:** V2 U24 already has excellent Plusquamperfekt and Futur I content. The tense summary is useful as a review card for V2 U24 L7 (Rückblick und Ausblick) but mostly redundant with existing V2 content.

**V1 U30 L7 (Nomen-Verb-Verbindungen tip):**
```
title: "Nomen-Verb-Verbindungen Matter"
text: "Fixed noun-verb combinations replace simple verbs:\nentscheiden → eine Entscheidung treffen\nbeeinflussen → Einfluss nehmen auf\nbeitragen → einen Beitrag leisten\n\nExpected in academic writing, business, exam essays."
```

**V2 gap:** Not covered in V2 U19-U24. B2 territory but a useful preview in V2 U24 capstone.

**Recommendation:** SKIP V1 U29 (proverbs — different topic). TAKE tense summary deepDive from V1 U30 L6 (add as deepDive to V2 U24's existing Plusquamperfekt tip). TAKE Nomen-Verb-Verbindungen tip for V2 U24 L7 capstone preview (brief preview only — full treatment in B2).

---

## Prioritized Action List

### Priority 1 — CRITICAL (must do before B1.2 ships)

| Item | Source | Target | Action |
|------|--------|--------|--------|
| Konjunktiv II Vergangenheit (Tips J-P) | V1 U25 L2-L8 | V2 U23 | Add dedicated lesson deu_r23l4-extension: Konj II past (hätte/wäre + PP, past irrealis, regret patterns) |
| Hätte/wäre distinction quiz bank | V1 U25 L2-L3 | V2 U23 | Salvage 50-60 quizzes for L4-L5 |
| Past irrealis sentence drills | V1 U25 L4 | V2 U23 | Salvage drag_fill combos (mixed hätte/wäre) |

### Priority 2 — HIGH (significant gap, Goethe-tested)

| Item | Source | Target | Action |
|------|--------|--------|--------|
| obwohl vs trotzdem contrast (Tips E, F) | V1 U23 L2-L3 | V2 U20 | Add tip + 20-25 quizzes to L4 |
| außerdem / sowohl / weder (Tips G, H) | V1 U23 L4-L5 | V2 U20 | Add lesson or extend L4 |
| Extended participial phrases (Tip S) | V1 U26 L5 | V2 U22 | Add tip + 15-20 quizzes to L5 or L6 |
| Zustandspassiv (Tip T) | V1 U27 L2 | V2 U22 | Add tip + contrast quizzes |
| einerseits/andererseits + concession (Tips X, AA) | V1 U28 L1, L7 | V2 U23 L8 | Extend "Die großen Wörter" |

### Priority 3 — MEDIUM (adds depth, not exam-critical)

| Item | Source | Target | Action |
|------|--------|--------|--------|
| bekommen-Passiv (Tip U) | V1 U27 L5 | V2 U22 | Add tip to passive lesson |
| sein + zu + Inf / -bar (Tip W) | V1 U27 L7 | V2 U22 | Add compact tip |
| Separable+zu rule (Tip D) | V1 U22 L7 | V2 U17 | Add tip to existing L4 |
| Partizip I vs II comparison (Tip R deepDive) | V1 U26 L4 | V2 U22 | Add deepDive to existing Partizip II tip |
| Nomen-Verb-Verbindungen preview | V1 U30 L7 | V2 U24 L7 | Brief preview tip only |
| Feierabend cultural tip | V1 U24 L6 | V2 U13 | Merge into workplace culture tip |

### Priority 4 — DEFER (B2 territory)

| Item | Source | Target | Action |
|------|--------|--------|--------|
| Formal genitive prepositions (Tip Z) | V1 U28 L4 | V2 U25+ | Hold for B2.1 |
| Nominalizations -ung/-heit/-keit | V1 U26 L1-L2 | V2 U25+ | Hold for B2.1 |
| Academic writing phrases | V1 U28 L5-L6 | V2 U25+ | Hold for B2.1 |
| Proverbs and idioms | V1 U29 | V2 U25+ | Hold for B2.2 |
| Crescendo layering (Tip Y) | V1 U28 L3 | V2 U25+ | Hold for B2 essay units |

---

## Verb Tables

**V1 U25:** No verb tables (Konjunktiv II grammar taught through example sentences and teach cards).
**V1 U26:** No verb tables.
**V1 U27:** No verb tables (passive constructions taught through tips and examples).
**V1 U23:** No verb tables.
**V1 U28:** No verb tables.
**V1 U30:** No verb tables.

**Note:** V1 U22-U30 does not have verb tables. All verb tables in this phase are already present in V2: passive+modals (V2 U19 line 138), lassen conjugation (V2 U22 line 126), double infinitive (V2 U23 line 154), Futur I (V2 U24 line 101), strong adjective endings (V2 U21 line 78).

---

## V2 Coverage Assessment (U19-U24)

| Grammar Construct | V2 Coverage | V1 Salvage Available |
|-------------------|-------------|----------------------|
| Passive + modals | FULL (U19 L3) | Zustandspassiv, bekommen, sein+zu not covered |
| Subordinating conjunctions expanded | FULL (U19 L4) | damit contrast deepDive missing |
| Relative clauses with prepositions | FULL (U20 L3) | None needed |
| Adverbial conjunctions (basic) | GOOD (U20 L4) | außerdem/sowohl/weder absent |
| obwohl vs trotzdem | PARTIAL (noted) | Full contrast tip + 20 quizzes available |
| Adj declension no article | FULL (U21 L3) | None needed |
| Adj declension genitive | FULL (U21 L4) | None needed |
| Reciprocal verbs | FULL (U21 L4) | None needed |
| Partizip I as adjective | GOOD (U22 L3) | Extended phrases absent |
| Partizip II as adjective | GOOD (U22 L4) | Formation deepDive missing |
| lassen causative | FULL (U22 L4) | None needed |
| Irreale Bedingungssätze (present) | GOOD (U23 L4) | Past irrealis entirely absent |
| Konjunktiv II Vergangenheit | ABSENT | Full tip set + 98 quizzes available |
| brauchen + zu | FULL (U23 L4) | None needed |
| Double infinitive | FULL (U23 L5) | None needed |
| Plusquamperfekt | FULL (U24 L3) | None needed |
| Futur I | FULL (U24 L4) | None needed |
| Discourse markers advanced | PARTIAL (U23 L8) | einerseits/concession available |
| Extended participial phrases | ABSENT | Full tip + 15 quizzes available |
| Zustandspassiv | ABSENT | Full tip + contrast quizzes available |
| bekommen-Passiv | ABSENT | Tip available (P3 priority) |

---

## Files Searched

- `src/data/units-german.js` lines 6221-8027 (V1 U22-U30)
- `src/data/units-german-v2.js` lines 5461-7164 (V2 U19-U24)
- `docs/german/b1-u19-lessons.md` through `b1-u24-lessons.md` (lesson design docs)
- `docs/german/b1-grammar-mapping.md` (grammar construct inventory)

**Search terms used:** `verb_table`, `type:"tip"`, `{id:`, `hätte`, `wäre`, `PP`, `Konjunktiv II Vergangenheit`, `außerdem`, `sowohl`, `weder`, `einerseits`, `Partizip`, `Zustandspassiv`, `bekommen`, `sein.*zu`, `-bar`, `obwohl`, `trotzdem`, `deshalb`
