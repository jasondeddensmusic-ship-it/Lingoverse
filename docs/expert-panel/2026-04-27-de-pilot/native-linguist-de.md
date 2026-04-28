# Audit: Native Linguist (de) — German A1+A2 (Units 01-12)

**Date:** 2026-04-27
**Slice:** German A1+A2, units 01-12
**Auditor:** Native German speaker (Berlin), MA Linguistics, Humboldt-Universität, 12 years teaching DaF/DaZ

---

## Score (1-10)

- Naturalness: **7**
- Register consistency: **6**
- Cultural accuracy: **6**
- Frequency calibration: **8**
- Pragmatic realism: **7**
- Script fidelity: n/a (Latin)
- **Overall: 7**

A solid, ambitious A1+A2 corpus that is far above typical app-Deutsch. Grammar is accurate, foundations module is genuinely well-thought-through, and modal particles (doch, mal, schon, halt) ARE introduced — which is rare. But: the cultural framing leans heavily on national stereotyping ("Germans love X" / "Germans are X" appears 122+ times across the v2 corpus, of which roughly 30 hits land in A1-A2), some lexical choices conflate adjacent meanings (Grippe ≠ "cold"), and there are a handful of register slips and pronunciation hints that mislead.

---

## Top 3 strengths

1. **Foundations module is excellent.** [src/data/foundations.js:257-500] — the alphabet/vowels/consonants/CH/SP-ST/Auslautverhärtung sections are accurate, well-organized, and avoid the "use German letters but English sounds" trap. The two CH-Laute (ich-Laut after front vowels and consonants; ach-Laut after a/o/u/au) are correctly distinguished. The ß/ss long/short-vowel rule with the Swiss-German call-out is exactly right. This is rare in commercial apps.

2. **Modal particles are taught explicitly.** [src/data/german-v2/unit-02.js:78,80; unit-12.js:746] — `doch`, `mal`, `schon`, and `halt` (separately glossed) are taught with usage notes. This is the secret heartbeat of natural German speech and most textbooks ignore it for years. Teaching `Doch!` as the answer to a negative question at A1 is a strong call.

3. **Separable verbs are introduced systematically with the splitting rule explained.** [src/data/german-v2/unit-03.js:131-137; unit-05.js:149] — `aufstehen, einkaufen, mitbringen, aufräumen, anmachen/ausmachen` all show the prefix-flying-to-end behavior with examples. The crucial distinction `UMziehen (separable, to relocate) vs umZIEHEN (inseparable, to change clothes)` at [unit-03.js:135] is taught precisely — this is graduate-level metalinguistic awareness packaged for A1.

---

## Critical findings

| Location | Sentence | Issue | What a native would actually say |
|---|---|---|---|
| [src/data/german-v2/unit-07.js:9] | `trg:"die Grippe", src:"the flu, the cold"` (gloss includes "the cold") | **Lexical error.** *Grippe* is influenza/flu, NOT a cold. *Erkältung* is the cold (mild). Conflating them is a clinical/lexical category error every native catches. The note attempts to fix it ("Erkältung is a milder cold, Grippe is more serious") but the `src` field still says "the flu, the cold" — meaning the app shows "cold" as a translation. | Drop "the cold" from `src`. *Grippe* = the flu. Period. |
| [src/data/german-v2/unit-01.js:36] | `Tschüss" ... "Pronounced like 'choose' with a softer ch."` | **Pronunciation hint is wrong.** *Tschüss* starts with /tʃ/ (English ch as in "church"), not the soft /ʃ/ in "choose". And the vowel is /y/ (ü), not /uː/. "Like 'choose' with a softer ch" is doubly misleading. | "Like English 'chooss' but the OO is the rounded ü-sound (say EE with rounded lips)." |
| [src/data/german-v2/unit-01.js:138-141] | haben verb_table omits the -e in `du habst → hast`, but lists *ihr habt* with `t`. The asymmetry is correct, but the note says "haben is irregular in du (hast) and er/sie/es (hat)" — fine — yet the same lesson teaches REGULAR verbs that drop -e for stems in -t/-d (line 51 lists "du arbeitest, du findest"). Learners later see "du gibst", "du hilfst" without explanation that -ben → -bst, not -best. | Acceptable here, but flag: the "stems ending in -t/-d add -e" rule needs a counter-example. Otherwise a learner thinks `du habst` should exist. |
| [src/data/german-v2/unit-01.js:107] | example: `Woher kommst du? — Ich komme aus der Türkei.` | This is fine. BUT later: [unit-01.js:78] `Wohin fährst du? — Ich fahre nach Hamburg.` and [unit-01.js:155] `Ich komme aus der Schweiz.` The country-prepositions rule (`aus der Türkei/Schweiz` (f), `aus dem Iran` (m), `aus Deutschland` (no article)) is never explained at A1. Learners memorize four phrases and then break the rule on country #5. | Add a tip card after Unit 1 L4 explaining: most countries are neuter and take *aus* without an article (`aus Deutschland, aus Italien, aus Spanien`); but feminine countries (`die Türkei, die Schweiz, die Slowakei`) and masculine countries (`der Iran, der Irak`) take the article in dative. |
| [src/data/german-v2/unit-01.js:14, 14-table] | `fahren` verb table shows `du fährst, er fährt`. Correct. But the example: `A: Fahren Sie nach Hamburg? B: Nein, ich fahre nach Berlin.` — note the formal *Sie* in line A, switching to declarative *ich* in B. That's fine. **However:** at [unit-01.js:58] `A: Danke für deine Hilfe! B: Gern geschehen!` uses informal *deine* immediately after teaching formal *Ihre Hilfe* in [unit-01.js:37] (`Vielen Dank für Ihre Hilfe!`). No flag, no bridge. A learner three minutes earlier in the lesson saw *Ihre*, now sees *deine*, no scaffolding. | Either lock to one register per dialogue, or add a one-line tip: "We're switching to *du* with friends now." |
| [src/data/german-v2/unit-01.js:16] | `mc` opt: "Thank you very much" as a wrong answer for *Entschuldigung*. The other distractors are "Goodbye", "Hello there". | Fine pedagogically, but stylistically: a German native would never expect *Entschuldigung* to be confused with *Vielen Dank*. The distractors should include semantically nearby items: *Bitte schön / Es tut mir leid / Verzeihung / Pardon*. |
| [src/data/german-v2/unit-01.js:36 funFact] | "'Tschüss' evolved from the French 'adieu' (to God), which became 'adjuees' in dialect, then 'tschuess.'" | **Etymology is wrong.** *Tschüss* comes from Spanish/Walloon *adios* via Low German *atschüs* → *tschüs(s)*, not from French *adieu*. The form *adjuees* is invented. | Correct: "Tschüss came from Low German atschüs, which itself goes back to Spanish adiós (via 17th-century maritime trade), not French adieu." |
| [src/data/german-v2/unit-04.js:74] | `dreißig / vierzig / fünfzig` and note: "Tens: add -zig to the root. dreißig is the exception (not dreizig)." | True so far. But the note doesn't explain that *sechzig* drops the -s of *sechs* (not *sechszig*) and *siebzig* drops the -en of *sieben* (not *siebenzig*). These ARE called out in unit-01.js:373 for the teens — but the same shortcuts at the tens level are not flagged. | Reuse the teens tip for the tens: "Same shortcuts apply: sechzig (no -s), siebzig (no -en)." |
| Multiple files | `funFact:"Germans love X / Germans are X / Germans always X"` appears **122 times across v2; ~30 land in A1-A2.** Examples in slice: "Germans love compound nouns", "Germans love their cash", "Germans are early risers", "Germans love planning", "Germans are known for directness", "Germans are punctual", "Germans love their Kleingärten", "Germans love their showers", "Germans love forms. For everything. Every. Single. Thing." | **National stereotyping.** Some of these are mild and even self-deprecating, but in aggregate they construct a caricature: punctual, rule-loving, cash-only, paperwork-obsessed, beer-drinking, planning-obsessed Germans. A Berliner from Kreuzberg, a Hamburger working in tech, a Stuttgart engineer — all would cringe at being collapsed into "Germans love X." More important: many are factually loose ("Germans love their cash" — cash use has dropped to ~40% post-2020) or recycle the very tropes the app is supposed to escape. | Replace with concrete, sourced facts. Instead of "Germans love planning," explain that *Plan* shows up in 50+ compounds because the Germanic suffix structure favors transparent compounding. Concrete > caricature. |
| [src/data/german-v2/unit-03.js:42] | `das Mädchen` taught as neuter at A1 with a good explanation of -chen → neuter rule. | This is correct AND well-handled, but it should be noted somewhere that referring to a girl with `es` (because grammatical gender) sounds increasingly odd to younger speakers, who often switch to `sie` for natural reference: "Das Mädchen, das dort sitzt — sie ist meine Schwester." This is a real ongoing pragmatic shift. | Add a deepDive: "Grammatically *das Mädchen* takes *es*, but in everyday speech speakers often shift to *sie* for natural-gender reference once the noun is established." |
| [src/data/german-v2/unit-05.js:90] | `verboten` funFact: "Verboten signs are everywhere in Germany. Germans are known for following rules, and these signs are taken seriously." | Stereotype + factually weak. This is the "Germans love rules" trope unmolested. | Replace with: "*verboten* is the past participle of *verbieten* (to forbid). Germany distinguishes carefully between *verboten* (forbidden by law) and *nicht erlaubt* (not allowed informally). Public signs use the strong form." |
| [src/data/german-v2/unit-01.js:37] | `Auf Wiedersehen` example: `Vielen Dank für Ihre Hilfe! — Gern geschehen. Auf Wiedersehen!` | Acceptable, but in a real shop or office, a native would more often say `Danke, schönen Tag noch! — Ihnen auch! Tschüss.` *Auf Wiedersehen* is correct but feels slightly stilted in 2026 service contexts; reserve for actually-formal partings (business meetings, doctor's office leaving). | Add a register layer: `Auf Wiedersehen` for genuinely formal goodbye; `Schönen Tag (noch)!` is the modern shop-floor version that pairs with the Tschüss farewell most Germans actually use today. |

---

## Important findings

- **Du/Sie boundary is taught but never quite scaffolded inside dialogues.** [src/data/german-v2/unit-01.js:146 tip is excellent: "Use 'du' with: Friends and family / Children and teenagers / Fellow students / People who offer it." But within the same unit, examples zigzag: lesson 2 uses *Sie* (Frau Schmidt context), lesson 3 uses *du* (Verumius/Yilmaz, who are presumably strangers in unit 1 but already on *du* terms). The Yilmaz–Verumius relationship establishment moment is not made explicit. Native readers will wonder: did they offer each other *du* offstage? At what point did Frau Yilmaz become Hatice? The story implies casualness without showing the shift.

- **`Mein Familienname ist Weber` is grammatically fine but pragmatically odd.** [unit-01.js:345] No native answers the question *Wie ist Ihr Familienname?* with *Mein Familienname ist Weber*. They say *Weber.* or *Mein Name ist Weber.* The pedagogical scaffolding (full sentence) is understandable for A1, but feel the awkwardness, because the full surname phrase only appears on bureaucratic forms.

- **`Wie ist Ihre Adresse?` example: `Meine Adresse ist Berliner Str. 12.`** [unit-01.js:346] Real Germans say *Berliner Straße 12* (full word, comma optional, never *Berliner Str. 12* in speech). The abbreviation `Str.` is print-only.

- **`das Café` vs `der Kaffee` is well-explained** [unit-02.js:41] — but pronunciation note "ho-TEL" for `das Hotel` [unit-02.js:33] suggests final-syllable stress, which is correct for the loanword, but contradicts the foundations claim that "most native German words stress the first syllable" without re-flagging that *Hotel, Kaffee, Hotel, Café, Banane* all violate the rule. A small "loanword stress" callback would help.

- **Bavarian/Austrian variation is mentioned but minimally taught.** [unit-01.js:286,287] `Servus` and `Grüß Gott` get one-line treatments. For a curriculum that targets DACH (Germany + Austria + Switzerland), an Austrian reading the unit will find their daily greeting a footnote. Either commit to Standard German with explicit DACH flags, or expand the regional content meaningfully. Currently it sits between.

- **The Eszett (ß) is taught accurately in foundations but funFact at [unit-02.js:9]** says "The ß (Eszett) is unique to German." This is technically true today (Switzerland dropped it), but historically and culturally the formulation flattens the Switzerland call-out the foundations module made well. Inconsistency within the curriculum itself.

- **`du heißt` is taught without -e at [unit-01.js:75]** with the correct rule "stem ends in -ß so no extra -e." Good. But `du tanzt`, `du sitzt` have the same rule and aren't covered. Once is teaching, twice is a pattern.

- **A2 medical unit (Unit 7) example dialogues are unusually natural.** Compliment: the doctor-patient dialogues feel realistic ([unit-07.js:9-22]). Better than most A2 textbooks.

---

## Cultural sensitivity notes

1. **The "Germans love X" trope is the single biggest cultural problem.** Even when the content is friendly or self-deprecating, it constructs national essentialism. A German learner-of-Italian wouldn't want every funFact to start "Italians love pasta." Same standard applies. This is also a missed opportunity: real cultural notes (the Mietrecht, the *Anwesenheitspflicht* in school, the Pfandsystem, Sundays-everything-closed) are infinitely more interesting than "Germans are punctual."

2. **Berlin centrism.** [122 funFacts mention Berlin across v2.] Of course Berlin is the largest German city, but the curriculum treats Berlin as Germany. Munich, Hamburg, Frankfurt, Cologne, Leipzig, Stuttgart, Dresden, Vienna, Zurich, Bern — these all deserve story slots. A Bavarian learner currently sees "Berlin" as the default city in nearly every dialogue. This is sociolinguistically a Berlin-skewed Hochdeutsch, which is fine if explicitly chosen, but it's not flagged.

3. **The Döner funFact** [unit-01.js:234] is excellent. Accurate, current, respectful, names the Turkish-German inventor (Kadir Nurman) explicitly. This is the model for what funFacts should be.

4. **Religious/political neutrality is mostly held.** Good — no jarring missteps in the slice. The Hauptbahnhof, Kaiser-Wilhelm-Gedächtniskirche, and Brandenburger Tor references are factual and appropriate.

5. **`Fräulein` is correctly flagged as outdated/offensive** [unit-01.js:349]. Good. The same care should be applied across other gendered language patterns.

6. **The "Germans are direct" funFact at [unit-01.js:66]** ("In business, this directness is respected, not rude") is exactly the kind of self-mythologizing that Germans would themselves push back on. It's also empirically uneven — directness norms vary substantially by region (Berlin direct, Schwäbisch indirect, Hamburg dry, Bavarian warm).

---

## Sign-off

- **Would I use this with my real German students?** **Yes, with substitutions.** I would use the foundations module wholesale, the grammar tables wholesale, and the separable-verb/modal-particle treatments. I would rewrite roughly 30 funFacts to remove "Germans love/are X" framing, fix the *Grippe = the flu* gloss, and correct the *Tschüss* etymology and pronunciation hint. About 90% of A1-A2 content is keeper.

- **Would I cite this curriculum to my colleagues as a respectable example?** **Cautious yes.** If I cite it, I would say "their grammar architecture and foundations module are excellent — far above app-Deutsch standard. Their cultural framing reproduces national-stereotype tropes that the field has been trying to leave behind for 15 years; if they fix that, this is the best app-based A1-A2 German I've reviewed."

- **Would my German-speaking parents/siblings be embarrassed by anything?** **A few items, yes:**
  1. "Germans love their cash" — my Berlin-tech sister would side-eye this. Cash usage has dropped ~40 points since 2020.
  2. "Germans are early risers" / "Germans love planning" / "Germans love forms" — collectively, my parents would call this *die übliche Touristenbroschüre*.
  3. The *Tschüss = adieu* etymology is wrong and would embarrass any German linguist.
  4. The *Grippe = "the flu, the cold"* gloss would embarrass a German pharmacist.
  5. "Germans are known for following rules" funFact under *verboten* — a generation of Germans actively distancing itself from the *Befehl-und-Gehorsam* stereotype would not love this framing.

Net assessment: this is a **strong A1-A2 corpus with stereotype debt and a handful of factual edits required**. The architecture (foundations, separable verbs, modal particles, V2 word order) is genuinely well-designed. Fix the cultural framing and the small lexical/etymological errors and this becomes one of the better A1-A2 German corpora available.

— Native German Linguist Panelist, Pilot Audit EXPERT-PANEL-001
