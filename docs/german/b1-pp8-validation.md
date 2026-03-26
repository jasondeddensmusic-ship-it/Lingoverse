# PP8 Leak Validation: German B1 Units 13-24

**Date**: 2026-03-26
**Validator**: PP8 Leak Validator (automated + manual review)
**Files checked**: `/tmp/de-v2-u{13-24}.js`
**Overall result**: FAIL — critical position clustering in 11/12 units

---

## Executive Summary

All 12 units fail PP8. Two systematic problems account for the vast majority of violations:

1. **Position clustering (CRITICAL)**: 11 of 12 units have 100% of mc answers in position 0 (first option). This is a complete PP8 position failure. One unit (U20) has the inverse problem: 0% at position 0.
2. **Hint leaks**: Hints frequently name the answer word directly (especially articles: der/die/das/dem/den, and words like "würde", "einander", "ob").
3. **Script leaks**: Many mc answers are notably longer than all distractors (>3 chars), making the correct answer guessable by length.
4. **Visual leaks**: Several drag_fill and fb sentences contain the answer word outside the blank position.

Note: Some "um" leaks in U17 are false positives (substring of "Verumius") and are marked as such.

---

## Per-Unit Summary

| Unit | Quiz Steps | MC Steps | Violations | Position | Status |
|------|-----------|---------|------------|----------|--------|
| U13  | 35        | 20      | 15         | P0=100%  | FAIL   |
| U14  | 63        | 30      | 45         | P0=100%  | FAIL   |
| U15  | 36        | 20      | 12         | P0=100%  | FAIL   |
| U16  | 17        | 9       | 6          | P0=100%  | FAIL   |
| U17  | 41        | 26      | 17         | P0=100%  | FAIL   |
| U18  | 40        | 23      | 6          | P0=100%  | FAIL   |
| U19  | 45        | 28      | 13         | P0=100%  | FAIL   |
| U20  | 21        | 10      | 5          | P0=0%    | FAIL   |
| U21  | 36        | 19      | 13         | P0=100%  | FAIL   |
| U22  | 22        | 13      | 11         | P0=100%  | FAIL   |
| U23  | 33        | 17      | 11         | P0=100%  | FAIL   |
| U24  | 35        | 19      | 13         | P0=100%  | FAIL   |

---

## Position Distribution Tables

Target: ~25% per position. >50% in any one position = POSITION_LEAK.

| Unit | P0 | P1 | P2 | P3 | MC Total | Verdict |
|------|----|----|----|----|----------|---------|
| U13  | 20 (100%) | 0 | 0 | 0 | 20 | FAIL: P0 monopoly |
| U14  | 30 (100%) | 0 | 0 | 0 | 30 | FAIL: P0 monopoly |
| U15  | 20 (100%) | 0 | 0 | 0 | 20 | FAIL: P0 monopoly |
| U16  | 9 (100%)  | 0 | 0 | 0 | 9  | FAIL: P0 monopoly |
| U17  | 26 (100%) | 0 | 0 | 0 | 26 | FAIL: P0 monopoly |
| U18  | 23 (100%) | 0 | 0 | 0 | 23 | FAIL: P0 monopoly |
| U19  | 28 (100%) | 0 | 0 | 0 | 28 | FAIL: P0 monopoly |
| U20  | 0 (0%)    | 4 (40%) | 4 (40%) | 2 (20%) | 10 | FAIL: P0 never used |
| U21  | 19 (100%) | 0 | 0 | 0 | 19 | FAIL: P0 monopoly |
| U22  | 13 (100%) | 0 | 0 | 0 | 13 | FAIL: P0 monopoly |
| U23  | 17 (100%) | 0 | 0 | 0 | 17 | FAIL: P0 monopoly |
| U24  | 19 (100%) | 0 | 0 | 0 | 19 | FAIL: P0 monopoly |

**Root cause**: The `ans` field in all mc steps matches the first element of `opts[]`. This appears to be a systematic authoring artifact where `ans` was set to `opts[0]` during generation. Every mc step needs its `ans` randomized across positions or `opts[]` shuffled so the correct answer appears at varied positions.

**Fix**: Shuffle `opts[]` in each mc step so the correct answer appears at roughly 25% each position. Do NOT re-use position 0 for all of them.

---

## Detailed Violations by Unit

### UNIT 13 — Die Bewerbung (B1.1)
**Total violations: 15** (3 hint, 12 script, 0 visual + position)

#### HINT_LEAK (3)

| # | Step | Hint (truncated) | Answer | Leaked |
|---|------|-----------------|--------|--------|
| 1 | mc | "From 'empfehlen' (to recommend). A letter from your former boss." | Empfehlung | Empfehlung (stem: empfehl) |
| 2 | fb | "A polite wish in a cover letter. Be careful: würde (would) is not the same as wu..." | würde | würde |
| 3 | drag_fill | "First: past tense for CV history. Then: würde + Infinitiv for a polite wish about..." | {1:arbeitete, 2:würde, 3:arbeiten} | würde |

#### SCRIPT_LEAK (12)
All 12 mc steps have the correct answer as the longest option by more than 3 chars:

| # | Answer (truncated) | Ans len | Other option lengths |
|---|--------------------|---------|---------------------|
| 1 | Foto, Personaldaten, Ausbildung, Berufserfahrung | 48 | [29, 23, 16] |
| 2 | Konjunktiv II (höflich/hypothetisch) | 36 | [20, 18, 26] |
| 3 | Präteritum, dann Konjunktiv II | 30 | [17, 20, 24] |
| 4 | Es ist höflicher und formeller | 30 | [25, 20, 17] |
| 5 | Konjunktiv II der Modalverben (höfliche Bitten) | 47 | [42, 37, 19] |
| 6 | Präteritum, dann Modaler Konj. II, dann würde + Inf. | 52 | [16, 19, 47] |
| 7 | Vergangene Ausbildung im Präteritum | 35 | [31, 29, 29] |
| 8 | dürfen (dürfte = darf ich/könnte ich) | 37 | [15, 15, 15] |
| 9 | Modaler Konjunktiv II + Kausalsatz + Wortschatzbreite | 53 | [38, 21, 28] |
| 10 | Wir würden uns freuen, Sie in unserem Team zu begrüßen. | 55 | [34, 25, 25] |
| 11 | Könnten ist höflicher und formeller | 35 | [30, 30, 26] |
| 12 | Formelles und informelles Register in derselben Sprache | 55 | [32, 23, 29] |

---

### UNIT 14 — Im Büro (B1.1)
**Total violations: 45** (13 hint, 15 script, 17 visual + position)

This is the highest violation count. The unit teaches relative pronouns and passive voice, which creates systematic visual leaks because sentences like "Die Datei, ___ ich kopiert habe" already contain "Die" (= answer "die").

#### HINT_LEAK (13)

| # | Step | Hint (truncated) | Answer | Leaked |
|---|------|-----------------|--------|--------|
| 1 | drag_fill | "Kollegin is feminine. She WAS invited (accusative passive). Feminine accusative..." | {1:die, 2:eingeladen} | die |
| 2 | mc | "Kind is neuter. Helfen takes dative: we helped IT. Neuter dative = dem." | dem | dem |
| 3 | mc | "Kollegin is feminine. She IS SITTING (subject = Nominativ). Feminine Nominativ =..." | die | die |
| 4 | fb | "Rechner is masculine. I operate IT (direct object = Akkusativ). Masculine Akkusa..." | den | den |
| 5 | fb | "Thomas is masculine. He HAS his birthday (subject = Nominativ). Masculine Nomina..." | der | der |
| 6 | mc | "Lautsprecher is masculine. It does NOT function (subject = Nominativ). Masculine..." | der | der |
| 7 | fb | "Fernbedienung is feminine. I searched for IT (direct object = Akkusativ). Femini..." | die | die |
| 8 | drag_fill | "The file IS being uploaded (present passive). Wird + Partizip II." | {1:wird, 2:hochgeladen} | wird |
| 9 | fb | "Kollege is masculine. Helfen takes Dativ. I helped TO HIM. Masculine Dativ = dem." | dem | dem |
| 10 | fb | "Today = present passive (wird). Yesterday = past passive (wurde)." | [wird, wurde] | wird, wurde |
| 11 | mc | "Arbeit is feminine. It was NOT completed (subject of passive = Nominativ). Femin..." | die | die |
| 12 | fb | "Kollegin is feminine. Gratulieren takes Dativ. Feminine Dativ = der." | der | der |
| 13 | drag_fill | "Tomorrow the report (wird, present passive) THAT today was not finished (der, ma..." | {1:wird, 2:der, 3:wurde} | wird, der, wurde |

**Pattern**: Hints in U14 consistently follow "X is [gender]. [role]. [Gender] [case] = [answer]." This always gives away the answer. Hints must be rewritten to guide without naming.

#### SCRIPT_LEAK (15)
All 15 mc answers are the longest option by >3 chars. (See full list in raw analysis output.)

#### VISUAL_LEAK (17)
The visual leaks in U14 fall into two structural patterns:

**Pattern A — Relative pronoun in sentence noun phrase**:
The sentence starts with a noun that has the same gender as the relative pronoun answer:
- "Die Datei, {1} ich gestern kopiert habe..." — "Die" before blank gives away "die"
- "Der Kollege, {1} neben mir sitzt..." — "Der" gives away "der"
- "Die Kollegin, {1} gestern {2} wurde..." — "Die" gives away "die"

| # | Sentence (truncated) | Answer | Leaked word |
|---|---------------------|--------|-------------|
| 1 | 'Der Kollege, ___ neben mir sitzt, heißt Thomas.' | der | der |
| 2 | Die Datei, {1} ich gestern kopiert habe, ist weg. | [die] | die |
| 3 | Die Kollegin, {1} gestern {2} wurde, heißt Anna. | {1:die} | die |
| 4 | Der Auftrag, {1} letzte Woche {2} wurde, ist jetzt {3}. | {1:der} | der |
| 5 | 'Die Kollegin, ___ neben Verumius sitzt, heißt Mia.' | die | die |
| 6 | Die E-Mail, {1} gestern {2} wurde, ist wichtig. | {1:die} | die |
| 7 | Der Kollege, {1} mich {2} hat, {3} gestern eingestellt. | {1:der} | der |
| 8 | Der Kuchen, {1} von Thomas {2} wurde, schmeckt gut. | {1:der} | der |
| 9 | Die Regeln, {1} in der Kaffküche gelten, {2} ernst genommen. | [die] | die |
| 10 | Der Handwerker, {1} gerufen {2}, hat das Regal {3}. | {1:der} | der |
| 11 | 'Der Lautsprecher, ___ nicht funktioniert, muss repariert werden.' | der | der |
| 12 | Die Fernbedienung, {1} ich gesucht habe, lag unter dem Kissen. | [die] | die |
| 13 | Das Programm, {1} gestern {2} wurde, funktioniert nicht. | {1:das} | das |
| 14 | Die Dateien, {1} gelöscht {2}, {3} wichtig. | {1:die} | die |
| 15 | 'Die Arbeit, ___ nicht erledigt wurde, wird morgen gemacht.' | die | die |
| 16 | Die Mitarbeiterin, {1} die E-Mail {2} hat, {3} gestern {4}. | {1:die} | die |
| 17 | Morgen {1} der Bericht, {2} heute nicht fertig {3}, endlich geschrieben. | {2:der} | der |

**Fix**: Restructure sentences so the head noun is NOT visible before the blank, OR use sentences where the noun has a different gender article than the relative pronoun (impossible for nom. relative). Better solution: use a question format "Welches Relativpronomen passt: 'Der Hund, ___ bellt...'" where the sentence structure is given in quotes and the head noun is clear.

---

### UNIT 15 — Hamburg (B1.1)
**Total violations: 12** (6 hint, 5 script, 1 visual + position)

#### HINT_LEAK (6)

| # | Step | Hint (truncated) | Answer | Leaked |
|---|------|-----------------|--------|--------|
| 1 | fb | "Kollege is an N-Deklination noun. In accusative, it adds -n." | [Kollegen] | Kollegen (stem:kolleg) |
| 2 | drag_fill | "Kollege is masculine AND N-Deklination. Genitive masculine article + N-Dekl endi..." | {1:des, 2:Kollegen} | Kollegen (stem:kolleg) |
| 3 | drag_fill | "Während takes genitive. Essen is neuter: des + -(e)ns." | {1:des, 2:Essens} | des, Essens (stem:essen) |
| 4 | drag_fill | "DURING the meeting, someone was introduced to the colleague. Dative N-Dekl: dem Kollegen..." | {1:Während, 2:Kollegen} | Kollegen |
| 5 | fb | "Kollege is N-Deklination. What ending does it take in accusative?" | [Kollegen] | Kollegen (stem:kolleg) |
| 6 | drag_fill | "DURING the stay. Aufenthalt is masculine. Genitive masculine: des." | {1:Während, 2:des} | des |

#### SCRIPT_LEAK (5)
| # | Answer | Ans len | Other lengths |
|---|--------|---------|--------------|
| 1 | Hello (northern German greeting) | 32 | [17, 7, 9] |
| 2 | The last element (Zeug/Fahrzeug) is neuter | 42 | [30, 15, 28] |
| 3 | Genitive: of the department (feminine) | 38 | [26, 25, 26] |
| 4 | Hafen is masculine. Genitive masculine: des + -(e)s | 51 | [30, 18, 27] |
| 5 | trotz takes genitive; Regen is masculine | 40 | [35, 22, 31] |

#### VISUAL_LEAK (1)
| # | Sentence | Answer | Leaked |
|---|---------|--------|--------|
| 1 | Die Rundfahrt durch den Hafen {1} Stadt war wunderbar. | [der] | der (in "durch den" — "der" appears in "Hafen der Stadt" context) |

---

### UNIT 16 — Kriminalfall (B1.2)
**Total violations: 6** (4 hint, 0 script, 2 visual + position)

#### HINT_LEAK (4)

| # | Step | Hint (truncated) | Answer | Leaked |
|---|------|-----------------|--------|--------|
| 1 | fb | "Welches Verb bedeutet, etwas zu behaupten oder eine Aussage zu machen?" | [behauptet] | behauptet (stem:behaupte) |
| 2 | drag_fill | "Eine nachdem + Plusquamperfekt-Klausel, gefolgt von einer indirekten Ja/Nein-Fra..." | {1:hatte, 2:ob, 3:war} | ob |
| 3 | drag_fill | "Nachdem die Polizei den Täter festgenommen hatte, wollte der Richter wissen..." | {1:festgenommen, 2:ob, 3:geplant} | festgenommen, ob, geplant |
| 4 | drag_fill | "Nachdem er die Marmelade probiert hatte, wollte er wissen, ob Verumius wirklich..." | {1:probiert, 2:ob, 3:war} | probiert, ob, war |

Note: Leaks 3 and 4 are severe — the hint CONTAINS the full sentence with answers filled in, making it a complete answer key.

#### VISUAL_LEAK (2)

| # | Question/Sentence | Answer | Leaked |
|---|------------------|--------|--------|
| 1 | "Der Nachbar von Verumius ist wütend wegen des Lärms. Welches Wort beschreibt..." | wütend | wütend appears verbatim in question |
| 2 | "Welcher Satz fragt korrekt 'Können Sie mir sagen, wo das Büro ist?'?" | Können Sie mir sagen, wo das Büro ist? | Full answer sentence in question text |

---

### UNIT 17 — Karneval in Köln (B1.2)
**Total violations: 17** (2 hint, 9 script, 6 visual* + position)

*Note: 5 of the 6 "visual leaks" flagged for "um" are false positives (substring of "Verumius"). Only 1 is genuine. See details below.

#### HINT_LEAK (2)

| # | Step | Hint | Answer | Leaked |
|---|------|------|--------|--------|
| 1 | mc/fb | "The subject changes: I buy, the CHILDREN are happy. Different subjects need damit..." | damit | damit |
| 2 | mc/fb | "I sing, but the subject of mitmachen is 'alle' (everyone else). Different subjects need damit..." | damit | damit |

#### SCRIPT_LEAK (9)
| # | Answer (truncated) | Ans len | Other lengths |
|---|--------------------|---------|--------------|
| 1 | Ein kölnischer Karnevalsgruß | 38 | [18, 12, 16] |
| 2 | ein Auftritt auf der Bühne | 31 | [8, 13, 12] |
| 3 | Einen römischen Senator | 28 | [13, 12, 22] |
| 4 | Die Subjekte sind verschieden: Mia erklärt, Verumius versteht | 66 | [19, 22, 26] |
| 5 | Beide arbeiten im Journalismus | 30 | [25, 12, 12] |
| 6 | der allerbeste von allen | 24 | [12, 14, 13] |
| 7 | Er schaut die Serie statt den Roman zu lesen | 44 | [39, 34, 22] |
| 8 | Er feiert die ganze Nacht, ohne müde zu werden | 51 | [32, 28, 40] |
| 9 | Verschiedene Subjekte: Mia singt, Verumius lernt | 48 | [22, 30, 26] |

#### VISUAL_LEAK analysis
| # | Sentence | Answer | Verdict |
|---|---------|--------|---------|
| 1 | "Verumius zieht eine Toga an, {1} ein Senator zu sein." | [um] | FALSE POSITIVE: "um" is substring of "Verumius" |
| 2 | "{1} nur zuzuschauen, tanzt Verumius mit, {2} Spaß zu haben." | {1:Statt, 2:um} | FALSE POSITIVE for "um"; Statt: no leak (blank at start) |
| 3 | "Verumius tanzt, {1} ein guter Tänzer zu sein, {2} Spaß zu haben." | {1:ohne, 2:um} | FALSE POSITIVE for "um" |
| 4 | "Statt zu Hause zu bleiben, feiern wir den ganzen Tag. '{1}...zu' bedeutet 'instead of'" | [Statt] | REAL LEAK: "Statt" appears verbatim in sentence |
| 5 | "Verumius fährt nach Köln, {1} Karneval zu feiern." | [um] | FALSE POSITIVE |
| 6 | "Verumius reist nach Köln, {1} Karneval zu erleben, {2} die Regeln zu kennen..." | {1:um, 2:ohne, 3:damit} | FALSE POSITIVE for "um" |

**Real visual leaks in U17**: 1 (the Statt sentence).

---

### UNIT 18 — Bayerische Traditionen (B1.2)
**Total violations: 6** (3 hint, 1 script, 2 visual + position)

#### HINT_LEAK (3)

| # | Step | Hint (truncated) | Answer | Leaked |
|---|------|-----------------|--------|--------|
| 1 | drag_fill | "Sitting in the beer garden was a specific moment. Heinrich insisted ON it: besteht auf = darauf..." | {1:Als, 2:darauf} | darauf |
| 2 | drag_fill | "First: specific past evening (als). Second: happy ABOUT the evening (da + über = darüber)..." | {1:Als, 2:darüber, 3:darauf} | Als |
| 3 | drag_fill | "Warten AUF. Then replace 'auf den Frühling' with the da-compound." | {1:auf, 2:darauf} | auf |

#### SCRIPT_LEAK (1)
| # | Answer | Ans len | Other lengths |
|---|--------|---------|--------------|
| 1 | sich ernähren | 18 | [7, 12, 10] |

#### VISUAL_LEAK (2)

| # | Sentence | Answer | Leaked |
|---|---------|--------|--------|
| 1 | "Heinrich _____ auf frischem Spargel. (besteht auf)" | besteht | "besteht" in parenthetical hint at end of sentence |
| 2 | "Welches Wort bedeutet 'sich ernähren' oder 'essen' im gesundheitsbewussten..." | sich ernähren | Full answer phrase in question text |

---

### UNIT 19 — Behörden und Bürokratie (B1.3)
**Total violations: 13** (5 hint, 8 script, 0 visual + position)

#### HINT_LEAK (5)

| # | Step | Hint (truncated) | Answer | Leaked |
|---|------|-----------------|--------|--------|
| 1 | drag_fill | "Plural subject = müssen. Then Partizip II, then werden at the very end." | {1:müssen, 2:eingereicht, 3:werden} | müssen, werden |
| 2 | drag_fill | "Dass introduces what the officer says. The modal goes to the end of the dass-clause..." | {1:dass, 2:kann, 3:nachdem} | dass, nachdem |
| 3 | drag_fill | "Obligation: muss. Passive: Partizip II + werden. The transfer must be executed." | {1:muss, 2:ausgeführt, 3:werden} | muss, werden |
| 4 | drag_fill | "After he submitted the application, the decision must be issued. Nachdem + Perfekt..." | {1:Nachdem, 2:muss, 3:ausgestellt, ...} | Nachdem, muss, werden |
| 5 | drag_fill | "After submitting, the permit could be approved, after he had paid. Nachdem + konnte..." | {1:Nachdem, 2:konnte, 3:werden, 4:...} | Nachdem, konnte, werden, nachdem |

#### SCRIPT_LEAK (8)
| # | Answer (truncated) | Ans len | Other lengths |
|---|--------------------|---------|--------------|
| 1 | Die offizielle Meldeadresse | 27 | [18, 16, 14] |
| 2 | Ein offizielles Dokument über die Geburt | 40 | [27, 28, 21] |
| 3 | Ob er den Antrag digital einreichen kann | 40 | [29, 26, 22] |
| 4 | Das Dokument braucht eine offizielle Bestätigung. | 49 | [24, 41, 35] |
| 5 | Eine temporäre Lösung, während ein Dokument noch fehlt | 54 | [34, 25, 18] |
| 6 | Wohnsitz ist die offizielle Meldeadresse | 40 | [21, 30, 16] |
| 7 | Der Bankauftrag hat eine Frist bis Freitag. | 43 | [36, 31, 39] |
| 8 | Alle Unterlagen sammeln, Gebühren bezahlen und rechtzeitig den Antrag stellen | 77 | [24, 23, 57] |

---

### UNIT 20 — Gesundheit und Krankheit (B1.3)
**Total violations: 5** (0 hint, 2 script, 3 visual + inverted position)

U20 is the only unit where answers are NOT all at position 0 — instead they cluster at positions 1, 2, and 3, with position 0 never used. Both are PP8 position failures.

#### SCRIPT_LEAK (2)
| # | Answer | Ans len | Other lengths |
|---|--------|---------|--------------|
| 1 | Erkältung | 14 | [10, 8, 9] |
| 2 | the insurance company | 21 | [10, 12, 8] |

#### VISUAL_LEAK (3)

| # | Sentence | Answer | Leaked |
|---|---------|--------|--------|
| 1 | "Verumius hat eine schlimme Erkältung. Welches deutsche Wort beschreibt das?" | Erkältung | "Erkältung" appears verbatim in question |
| 2 | Die Salbe, {1} der Arzt mir verschrieben hat, hilft nicht. {2} brauche ich ein anderes... | {1:die, 2:Deswegen} | die (in "die Salbe") |
| 3 | Der Patient, {1} dem die Ärztin die Spritze gegeben hat, hatte Angst. {2} war er... | {1:dem, 2:Trotzdem} | dem (in "dem die Ärztin") |

---

### UNIT 21 — Die Wende (B1.3)
**Total violations: 13** (10 hint, 2 script, 1 visual + position)

U21 has the most hint leaks (10), concentrated around "einander" exercises.

#### HINT_LEAK (10)

| # | Step | Hint (truncated) | Answer | Leaked |
|---|------|-----------------|--------|--------|
| 1 | mc | "Dieses Wort bedeutet freedom, gebaut aus frei + -heit." | Freiheit | Freiheit (stem:frei) |
| 2 | drag_fill | "Genitiv nach des = -en. Explizit each other = einander. About each other = voneinander..." | {1:Kalten, 2:einander, 3:voneinander} | einander, voneinander |
| 3 | drag_fill | "Trotz + Genitiv feminin ohne Artikel = -er. Sich gegenseitig helfen = einander..." | {1:großer, 2:einander, 3:echten} | einander, echten |
| 4 | drag_fill | "Während + Genitiv Plural ohne Artikel = -er. Sich gegenseitig helfen = einander..." | {1:schwieriger, 2:einander, 3:...} | einander |
| 5 | fb | "Explizit reziprok (each other) = einander, nicht sich." | [einander] | einander |
| 6 | drag_fill | "Während + Genitiv Plural mit Artikel = der. Gegenseitig = einander (zweimal)..." | {1:der, 2:einander, 3:einander, 4:...} | der, einander, einander |
| 7 | mc | "Für + einander mit Präposition = ein Wort: füreinander." | füreinander | füreinander |
| 8 | drag_fill | "Wegen + Genitiv feminin ohne Artikel = -er. Nicht verstehen (each other) = einander..." | {1:unterschiedlicher, 2:einander, 3:miteinander} | einander, miteinander |
| 9 | fb | "Welches Wort bedeutet Gesellschaft als Gesamtstruktur, nicht nur lokale Gemeinschaft?" | [Gesellschaft] | Gesellschaft |
| 10 | drag_fill | "Nach einer (Genitiv feminin): -en. Sich gegenseitig helfen: einander. Trotz + Genitiv..." | {1:großen, 2:einander, 3:...} | einander |

**Pattern**: The entire hint system for "einander" exercises names the answer directly. Every hint saying "Explizit reziprok = einander" gives away the answer. Hints must be restructured to say things like "Think about reciprocal actions — not just 'sich' but a more explicit form."

#### SCRIPT_LEAK (2)
| # | Answer (truncated) | Ans len | Other lengths |
|---|--------------------|---------|--------------|
| 1 | Sie bietet die informelle Anrede als Zeichen des Vertrauens an | 62 | [30, 23, 33] |
| 2 | Es war einst ein Luxusgericht, das zum Alltagsessen wurde | 57 | [50, 39, 40] |

#### VISUAL_LEAK (1)
| # | Sentence | Answer | Leaked |
|---|---------|--------|--------|
| 1 | "Während {1} Versammlungen zeigten die Bürger {2} großen Mut. Sie..." | {1:der, 2:einander, ...} | "großen" appears in sentence; answer contains "große" form |

Note: This visual leak is a near-match (großen vs große adjective forms) - marginal but valid.

---

### UNIT 22 — Umwelt und Nachhaltigkeit (B1.4)
**Total violations: 11** (6 hint, 4 script, 1 visual + position)

#### HINT_LEAK (6)

| # | Step | Hint (truncated) | Answer | Leaked |
|---|------|-----------------|--------|--------|
| 1 | mc | "Verpackung und Kunststoff kommen in die gelbe Tonne. Papier ist blau, Bio ist braun..." | Gelbe Tonne | Gelbe Tonne |
| 2 | fb | "Dritte Person Singular von lassen. Er lässt jemand anderen sein Fahrrad reparieren..." | [lässt] | lässt |
| 3 | drag_fill | "Mia lässt jemanden die fehlenden Dokumente kopieren. Kausatives lassen (3. Person)..." | {1:lässt, 2:fehlenden} | lässt, fehlenden |
| 4 | fb | "Die Luft IST verschmutzt worden. Partizip II als Adjektiv. Abgeschlossene Handlu..." | [verschmutzte] | verschmutzte (stem:verschmutz) |
| 5 | drag_fill | "Der Fluss wurde verschmutzt (abgeschlossen). Die Fabrik brennt gerade (laufend)." | {1:verschmutzte, 2:brennende} | verschmutzte (stem:verschmutz) |
| 6 | fb | "Der Tourist WAR verloren. Abgeschlossene Handlung als Adjektiv. Partizip II + Ad..." | [verlorene] | verlorene (stem:verloren) |

#### SCRIPT_LEAK (4)
| # | Answer (truncated) | Ans len | Other lengths |
|---|--------------------|---------|--------------|
| 1 | Partizip I ist laufende Handlung, Partizip II ist abgeschlossene Handlung | 73 | [55, 21, 60] |
| 2 | Er lässt sich nicht von hübscher Verpackung hereinlegen | 65 | [40, 37, 29] |
| 3 | Sie bietet informelle Anrede als Zeichen der Nähe an | 57 | [30, 34, 40] |
| 4 | Ein Mechaniker oder Fahrradladen | 32 | [15, 3, 7] |

#### VISUAL_LEAK (1)
| # | Sentence | Answer | Leaked |
|---|---------|--------|--------|
| 1 | "Verumius spricht über den Stromverbrauch im Büro. Welches Wort bedeutet..." | Strom | "Strom" appears in "Stromverbrauch" in question |

---

### UNIT 23 — Das B1-Examen (B1.4)
**Total violations: 11** (5 hint, 5 script, 1 visual + position)

#### HINT_LEAK (5)

| # | Step | Hint | Answer | Leaked |
|---|------|------|--------|--------|
| 1 | mc/fb | "Irreale Bedingung: Der Hauptsatz braucht würde + Infinitiv." | würde | würde |
| 2 | drag_fill | "Irrealer Bedingungssatz. Die Wenn-Klausel braucht wäre, der Hauptsatz braucht würde..." | {1:wäre, 2:würde} | wäre, würde |
| 3 | drag_fill | "By now + long ago: er hat längst alles gelernt, was er braucht." | {1:Inzwischen, 2:längst} | längst |
| 4 | drag_fill | "Although he is prepared, he IS still nervous. Obwohl = Nebensatz (verb at end)..." | {1:Obwohl, 2:ist} | Obwohl |
| 5 | drag_fill | "After he has passed the exam, he IS now officially B1. Nachdem-clause first..." | {1:Nachdem, 2:ist} | Nachdem |

#### SCRIPT_LEAK (5)
| # | Answer (truncated) | Ans len | Other lengths |
|---|--------------------|---------|--------------|
| 1 | If he had been able to come, he would not have needed to stay home. | 67 | [35, 41, 33] |
| 2 | Irrealer Bedingungssatz + Doppelinfinitiv | 41 | [23, 18, 15] |
| 3 | Weil er gründlich gelernt hat, ist er weniger nervös. | 53 | [42, 43, 28] |
| 4 | Dankbarkeit für eine Entscheidung, die auch anders hätte ausgehen können. | 73 | [37, 41, 33] |
| 5 | Irrealer Bedingungssatz + Doppelinfinitiv + brauchen + zu | 57 | [25, 33, 37] |

#### VISUAL_LEAK (1)
| # | Sentence | Answer | Leaked |
|---|---------|--------|--------|
| 1 | "{1} er gut vorbereitet ist, {2} er trotzdem nervös." | {1:Obwohl, 2:ist} | "ist" appears in sentence |

---

### UNIT 24 — Abschied und Zukunft (B1.4)
**Total violations: 13** (5 hint, 5 script, 3 visual + position)

#### HINT_LEAK (5)

| # | Step | Hint | Answer | Leaked |
|---|------|------|--------|--------|
| 1 | drag_fill | "Futur I: konjugiertes werden + Infinitiv. Erste Person Singular." | {1:werde, 2:machen} | werde |
| 2 | drag_fill | "Erster Teilsatz: Perfekt (hat + Partizip II). Zweiter Teilsatz: Futur I (wird + ...)..." | {1:hat, 2:vorbereitet, 3:wird} | hat, wird |
| 3 | drag_fill | "Erster Teilsatz: Plusquamperfekt im Nebensatz (Partizip II + hatte am Ende). Zweiter..." | {1:gehabt, 2:hatte, 3:kommt} | hatte |
| 4 | fb | "Das Relativpronomen ersetzt 'der Mann' (maskulin Nominativ) als Subjekt des Relativsatzes." | [der] | der |
| 5 | mc/fb | "Für indirekte Ja/Nein-Fragen benutzt Deutsch 'ob' (whether)." | ob | ob |

#### SCRIPT_LEAK (5)
| # | Answer (truncated) | Ans len | Other lengths |
|---|--------------------|---------|--------------|
| 1 | Das tägliche Leben | 18 | [13, 10, 14] |
| 2 | Vor dem Moment, der in der Geschichte beschrieben wird | 54 | [22, 14, 12] |
| 3 | Er hatte schon entschieden | 26 | [19, 21, 18] |
| 4 | Plusquamperfekt: er hatte nicht vor, zu kommen | 46 | [36, 42, 32] |
| 5 | B2 wird härtere Herausforderungen bringen | 41 | [30, 24, 28] |

#### VISUAL_LEAK (3)

| # | Sentence | Answer | Leaked |
|---|---------|--------|--------|
| 1 | "Nachdem er ein Jahr in Berlin verbracht hatte, {1} er sich entschlossen zu bleiben..." | [hatte] | "hatte" appears before blank |
| 2 | "Verumius {1} seinen Freunden sagen, dass er bleiben wird." | [wird] | "wird" in "bleiben wird" at end of sentence |
| 3 | "Der Mann, {1} den Kaktus mitgebracht hat, heißt KD." | [der] | "der" in "der Mann" at sentence start |

---

## Consolidated Fix List

### Priority 1 — Position clustering (ALL units)
Every mc step in U13-U15, U17-U19, U21-U24 has `ans` matching `opts[0]`. Fix: shuffle opts[] for each mc step so the correct answer appears at randomized positions (~25% each). U20 needs the inverse fix: answers cluster at positions 1-3, skipping position 0.

### Priority 2 — Hint leaks (fix per unit)

**High-frequency patterns to fix:**

1. **Article hints** (U14): "X is feminine. Feminine nominative = die." — Never name the article in the hint. Instead: "Think about the gender and grammatical role of this noun."
2. **Einander hints** (U21): "Explicit reciprocal = einander." — Rewrite to: "This reciprocal form is stronger than 'sich' alone — it means truly each other, explicitly."
3. **Conjunctions in hints** (U19, U23): "Nachdem + Plusquamperfekt..." — If "Nachdem" is the answer, don't name it in the hint. Say: "Think about the temporal connector for completed-before-past events."
4. **Würde hints** (U13, U23): "würde (would) is not the same as..." names the answer. Rewrite.
5. **Vocabulary definition hints** (U22): "Dritte Person Singular von lassen. Er lässt..." — names the inflected form. Say instead: "Third person singular. What happens to the stem vowel?"

### Priority 3 — Script leaks (balance option lengths)

For every mc step, ensure distractors are comparable in length to the correct answer. Avoid answers that are 15+ chars longer than all distractors. Rewrite or truncate answer options to be comparable in length.

### Priority 4 — Visual leaks

**U14 relative pronouns**: Restructure sentences to avoid head noun before blank. E.g.:
- Instead of: "Die Datei, {1} ich kopiert habe, ist weg."
- Use: "Ergänze das Relativpronomen: 'Das Buch, ___ auf dem Tisch liegt, gehört mir.'" (different noun gender visible, different pronoun needed)

**U16, U18, U20, U22**: Remove answer word from question text:
- U16: Don't repeat the target word in the mc question
- U18: Remove parenthetical "besteht auf" from the fill-in-the-blank sentence
- U22: Don't use "Strom" in a question asking to identify "Strom"

---

## Overall Verdict

**FAIL**

All 12 units fail PP8. Violations are systematic, not isolated. The two critical fixes are:

1. **Randomize answer positions** across all mc steps (affects 196 mc steps total across 11 units with position clustering)
2. **Rewrite hints** that name answer words — especially article/pronoun hints and conjunction hints

These files must be revised before merge into the main unit file.
