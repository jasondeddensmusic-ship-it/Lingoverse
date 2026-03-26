# German B1 Structural Validation Report
**Date**: 2026-03-26
**Scope**: Units 13-24 (`/tmp/de-v2-u{13-24}.js`)
**Validator**: Automated structural validator + manual inspection
**Status**: OVERALL FAIL - 5 of 12 units have violations requiring fixes before merge

---

## 1. Per-Unit Summary Table

| Unit | Title | Level | Lessons | Total Steps | JS Syntax | Header | IDs | PP43 | PP48 | PP22c | PP49 | Fields | RESULT |
|------|-------|-------|---------|-------------|-----------|--------|-----|------|------|-------|------|--------|--------|
| U13 | Die Bewerbung | B1.1 | 8 | 238 | PASS | PASS | PASS | PASS | PASS | PASS | **FAIL** | PASS | **FAIL** |
| U14 | Erster Arbeitstag | B1.1 | 8 | 271 | PASS | PASS | PASS | PASS | **FAIL** | PASS | PASS | PASS | **FAIL** |
| U15 | Reise nach Hamburg | B1.1 | 8 | 230 | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | **PASS** |
| U16 | Der Streit | B1.2 | 8 | 210 | PASS | PASS | PASS | PASS | PASS | comments only | PASS | PASS | **PASS** |
| U17 | Karneval im Rheinland | B1.2 | 8 | 242 | PASS | PASS | PASS | PASS | PASS | PASS | PASS | **FAIL** | **FAIL** |
| U18 | Im Biergarten | B1.2 | 8 | 207 | PASS* | PASS | PASS | PASS | PASS | PASS | PASS | **FAIL** | **FAIL** |
| U19 | Ausländerbehörde | B1.2 | 8 | 184 | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | **PASS** |
| U20 | Die Versicherung | B1.2 | 8 | 185 | PASS | PASS | PASS | PASS | PASS | comments only | PASS | PASS | **PASS** |
| U21 | Ost und West | B1.2 | 8 | 188 | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | **PASS** |
| U22 | Umwelt und Alltag | B1.2 | 8 | 192 | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | **PASS** |
| U23 | Die Prüfung | B1.2 | 10 | 266 | PASS | PASS | PASS | PASS | PASS | comments only | **FAIL** | **FAIL** | **FAIL** |
| U24 | Einjährig | B1.2 | 8 | 185 | PASS | PASS | PASS | PASS | PASS | comments only | PASS | PASS | **PASS** |

*U18 uses `export const GERMAN_V2_UNIT_18 = {...};` instead of a bare object literal (trailing semicolon). Parses correctly after normalization, but export format must be standardized before merge.

**PASS: 7 units (U15, U16, U19, U20, U21, U22, U24)**
**FAIL: 5 units (U13, U14, U17, U18, U23)**

---

## 2. All Violations

### U13 - Die Bewerbung (1 violation)

**VIOLATION 1 - PP49: CEFR label in mc question field**
- Location: `L7.step[26]` (lesson "Alles auf dem Prüfstand")
- Field: `q`
- Content: `"Ein Anschreiben enthält: 'Ich könnte Ihr Team verstärken, da ich drei Sprachen fließend spreche.' Was macht diesen Satz B1-Niveau?"`
- Problem: The question uses "B1-Niveau" as learner-facing content. PP49 forbids CEFR labels in learner-facing fields.
- Also affected: `ans` field contains "Modaler Konjunktiv II + Kausalsatz + Wortschatzbreite" and `hint` references "B1 constructs" - these are borderline but the `q` field is the clear violation.
- Fix: Rephrase question to describe the grammatical complexity without naming the CEFR level. Example: "Was macht diesen Satz besonders anspruchsvoll?" or "Welche Grammatikstrukturen enthält dieser Satz?"

---

### U14 - Erster Arbeitstag (2 violations)

**VIOLATION 2 - PP48: `fb` step with 2 blanks ({1} and {2})**
- Location: `L6.step[24]` (lesson "Geburtstagskuchen und Regeln")
- Sentence: `"Die Regeln, {1} in der Kaffeküche gelten, {2} ernst genommen."`
- Answer: `["die", "werden"]`
- Problem: `fb` type only supports a single blank `{1}`. Two-blank exercises must use `drag_fill` with a `blanks:{}` object.
- Fix: Convert to `drag_fill` type with `blanks:{"1":"die","2":"werden"}` and `pool:["die","der","werden","wurde","wird","den"]`.

**VIOLATION 3 - PP48: `fb` step with 2 blanks ({1} and {2})**
- Location: `L7.step[27]` (lesson "Alles zusammen")
- Sentence: `"Heute {1} die Software aktualisiert. Gestern {2} der Drucker repariert."`
- Answer: `["wird", "wurde"]`
- Problem: Same as above. `fb` type with two blanks must be `drag_fill`.
- Fix: Convert to `drag_fill` type with `blanks:{"1":"wird","2":"wurde"}` and `pool:["wird","wurde","werden","wurden"]`.

---

### U17 - Karneval im Rheinland (1 violation)

**VIOLATION 4 - Required field missing: `verb_table` has no `note`**
- Location: `L4.step[22]` (lesson "Warum? Wozu? Stattdessen!")
- Title: `"Infinitivklausseln im Vergleich"`
- Problem: `verb_table` requires `title`, `groups`, and `note`. The `note` field is absent entirely.
- Context: The table covers `um...zu`, `ohne...zu`, `(an)statt...zu`, and `damit` constructions.
- Fix: Add a `note` field. Example: `note:"Use um...zu, ohne...zu, and (an)statt...zu when the subject is the same. Use damit when subjects differ."`

---

### U18 - Im Biergarten (2 violations + 1 structural note)

**STRUCTURAL NOTE (not a content violation): Export format mismatch**
- U18 uses `export const GERMAN_V2_UNIT_18 = {...};` (named export with semicolon)
- All other 11 files use a bare object literal (no export keyword, no semicolon)
- This will cause issues in the merge script which expects uniform format.
- Fix: Remove `export const GERMAN_V2_UNIT_18 =` prefix and trailing `;` to match other files.

**VIOLATION 5 - Required field missing: `verb_table` has no `note`**
- Location: `L3.step[24]` (lesson "Die Spargel-Panik")
- Title: `"als vs wenn (when)"`
- Problem: `note` field absent.
- Context: Table shows als (single past event) vs wenn (repeated/hypothetical).
- Fix: Add `note` field. Example: `note:"'als' = one-time event in the past. 'wenn' = repeated events or hypothetical conditions."`

**VIOLATION 6 - Required field missing: `verb_table` has no `note`**
- Location: `L4.step[18]` (lesson "Worauf freust du dich?")
- Title: `"Verben mit festen Präpositionen"`
- Problem: `note` field absent.
- Context: Table covers verbs with fixed prepositions: sich freuen auf, warten auf, bestehen auf, sich freuen über, sprechen über, denken an, sich erinnern an, sich interessieren für.
- Fix: Add `note` field. Example: `note:"These verbs require specific prepositions that must be memorized. When the object is a clause or pronoun, use a da-compound (darauf, darüber, daran) instead."`

---

### U23 - Die Prüfung (5 violations)

**VIOLATION 7 - PP49: CEFR label in `fb` sentence field**
- Location: `L3.step[22]` (lesson "Vor der Prüfung")
- Field: `s`
- Content: `"Am Goethe-{1} kann man die B1-Prüfung ablegen."`
- Problem: "B1" appears in the blank-fill sentence shown to learners. PP49 forbids CEFR labels in learner-facing content.
- Note: "Goethe-Institut" is the institution name (acceptable), but "B1-Prüfung" labels the level explicitly.
- Fix: Rephrase: `"Am Goethe-{1} kann man die Sprachprüfung ablegen."` and update `sSrc` accordingly.

**VIOLATION 8 - PP49: CEFR label in `fb` sSrc field**
- Location: `L3.step[22]` same step as above
- Field: `sSrc`
- Content: `"At the Goethe Institute you can take the B1 exam."`
- Fix: Change to `"At the Goethe Institute you can take the language exam."` after fixing `s`.

**VIOLATION 9 - Required field missing: `verb_table` has no `note`**
- Location: `L5.step[20]` (lesson "Drei Konstruktionen")
- Title: `"Doppelinfinitiv: können im Perfekt"`
- Problem: `note` field absent.
- Context: Table shows double-infinitive construction in Perfekt with modal verbs (hat kommen können, hat es machen wollen, etc.).
- Fix: Add `note` field. Example: `note:"When a modal verb has a dependent infinitive, use the double infinitive in Perfekt (hat kommen können), NOT the past participle (*hat gekonnt)."`

**VIOLATION 10 - PP49: CEFR label in `drag_fill` sentence field**
- Location: `L10.step[38]` (lesson "Bildung und Kultur")
- Field: `s`
- Content: `"{1} er die Prüfung bestanden hat, {2} er nun offiziell B1."`
- Problem: "B1" labels the CEFR level in learner-facing text.
- Fix: Rephrase: `"{1} er die Prüfung bestanden hat, {2} er nun zertifiziert."` and update `sSrc`.

**VIOLATION 11 - PP49: CEFR label in `drag_fill` sSrc field**
- Location: `L10.step[38]` same step
- Field: `sSrc`
- Content: `"After he passed the exam, he is now officially B1."`
- Fix: Change to `"After he passed the exam, he is now officially certified."` after fixing `s`.

---

## 3. Notes on PP22c (Em-Dash)

Em-dashes (`—`) appear ONLY in comment lines in 4 units. These are developer comments, not learner-facing content. They are not PP22c violations but should be cleaned up for consistency.

| Unit | Em-dash lines | Nature |
|------|--------------|--------|
| U16 | Lines 1, 8, 39, 71, 102, 133, 169, 203, 238 | All `//` comment lines only |
| U20 | Lines 1, 8, 39, 70, 99, 130, 161, 190, 219 | All `//` comment lines only |
| U23 | Line 1 | `//` comment line only |
| U24 | Line 1 | `//` comment line only |

**Verdict**: No PP22c violations in learner-facing content. Comments are not engine-rendered. No action required for compliance, but optional cleanup recommended.

---

## 4. Step Counts Per Lesson Per Unit

All lessons meet PP43 minimum (18+ steps). No PP43 violations found.

### U13 - Die Bewerbung (B1.1) - 238 total steps
| Lesson | ID | Title | Steps |
|--------|----|-------|-------|
| L1 | deu_r13l1 | Der rote Stift | 28 |
| L2 | deu_r13l2 | Berufe und Qualifikationen | 26 |
| L3 | deu_r13l3 | Ich studierte in Istanbul | 30 |
| L4 | deu_r13l4 | Ich würde mich freuen | 28 |
| L5 | deu_r13l5 | Könnten Sie das wiederholen? | 34 |
| L6 | deu_r13l6 | Der perfekte Lebenslauf | 29 |
| L7 | deu_r13l7 | Alles auf dem Prüfstand | 28 |
| L8 | deu_r13l8 | Die gute Nachricht | 35 |

### U14 - Erster Arbeitstag (B1.1) - 271 total steps
| Lesson | ID | Title | Steps |
|--------|----|-------|-------|
| L1 | deu_r14l1 | Der erste Morgen | 26 |
| L2 | deu_r14l2 | Das Büro | 24 |
| L3 | deu_r14l3 | Die Kaffeküche | 30 |
| L4 | deu_r14l4 | Grammatik im Büro | 33 |
| L5 | deu_r14l5 | Du oder Sie? | 35 |
| L6 | deu_r14l6 | Geburtstagskuchen und Regeln | 28 |
| L7 | deu_r14l7 | Alles zusammen | 32 |
| L8 | deu_r14l8 | Feierabend | 63 |

Note: L8 (63 steps) is very dense. Not a violation but worth reviewing for learner fatigue.

### U15 - Reise nach Hamburg (B1.1) - 230 total steps
| Lesson | ID | Title | Steps |
|--------|----|-------|-------|
| L1 | deu_r15l1 | Moin, Hamburg! | 26 |
| L2 | deu_r15l2 | Unterwegs in der Stadt | 26 |
| L3 | deu_r15l3 | Herr Professor Doktor Schmidt | 30 |
| L4 | deu_r15l4 | Der Genitiv und die N-Deklination | 28 |
| L5 | deu_r15l5 | Hamburger Küche | 26 |
| L6 | deu_r15l6 | Elbphilharmonie | 29 |
| L7 | deu_r15l7 | Alles über Hamburg | 30 |
| L8 | deu_r15l8 | Zurück nach Berlin | 35 |

### U16 - Der Streit (B1.2) - 210 total steps
| Lesson | ID | Title | Steps |
|--------|----|-------|-------|
| L1 | deu_r16l1 | Das Bohrloch | 24 |
| L2 | deu_r16l2 | Die Hausordnung | 24 |
| L3 | deu_r16l3 | Die Zettel an der Wand | 24 |
| L4 | deu_r16l4 | Indirekte Fragen | 24 |
| L5 | deu_r16l5 | Hildi greift ein | 29 |
| L6 | deu_r16l6 | Heinrichs Weisheit | 27 |
| L7 | deu_r16l7 | Alles auf den Tisch | 28 |
| L8 | deu_r16l8 | Marmelade und Frieden | 30 |

### U17 - Karneval im Rheinland (B1.2) - 242 total steps
| Lesson | ID | Title | Steps |
|--------|----|-------|-------|
| L1 | deu_r17l1 | Kölle Alaaf! | 25 |
| L2 | deu_r17l2 | Masken und Melodien | 26 |
| L3 | deu_r17l3 | Jeder ist du | 30 |
| L4 | deu_r17l4 | Warum? Wozu? Stattdessen! | 30 |
| L5 | deu_r17l5 | Kneipentour durch die Altstadt | 30 |
| L6 | deu_r17l6 | Rosenmontagszug! | 30 |
| L7 | deu_r17l7 | Kamelle und Konfetti | 30 |
| L8 | deu_r17l8 | Konfetti im Haar | 41 |

### U18 - Im Biergarten (B1.2) - 207 total steps
| Lesson | ID | Title | Steps |
|--------|----|-------|-------|
| L1 | deu_r18l1 | Unter den Kastanien | 27 |
| L2 | deu_r18l2 | Brotzeit und Bratwurst | 24 |
| L3 | deu_r18l3 | Die Spargel-Panik | 27 |
| L4 | deu_r18l4 | Worauf freust du dich? | 26 |
| L5 | deu_r18l5 | Lukas spielt | 27 |
| L6 | deu_r18l6 | Dialekt auf dem Teller | 25 |
| L7 | deu_r18l7 | Prost und Wiederholung | 25 |
| L8 | deu_r18l8 | Der Nachhauseweg | 26 |

### U19 - Ausländerbehörde (B1.2) - 184 total steps
| Lesson | ID | Title | Steps |
|--------|----|-------|-------|
| L1 | deu_r19l1 | Wartenummer B089 | 22 |
| L2 | deu_r19l2 | Amtsdeutsch | 24 |
| L3 | deu_r19l3 | Das muss gemacht werden | 23 |
| L4 | deu_r19l4 | Bevor die Frist abläuft | 24 |
| L5 | deu_r19l5 | Die Dokumentenprüfung | 23 |
| L6 | deu_r19l6 | Bankdeutsch und Briefpost | 23 |
| L7 | deu_r19l7 | Alles auf dem Prüfstand | 23 |
| L8 | deu_r19l8 | Ich habe es geschafft! | 22 |

### U20 - Die Versicherung (B1.2) - 185 total steps
| Lesson | ID | Title | Steps |
|--------|----|-------|-------|
| L1 | deu_r20l1 | Der Papierstapel | 24 |
| L2 | deu_r20l2 | Körpervokabular | 24 |
| L3 | deu_r20l3 | KD im Café | 22 |
| L4 | deu_r20l4 | Die Grammatik der Bürokratie | 24 |
| L5 | deu_r20l5 | Apotheke und Pflege | 24 |
| L6 | deu_r20l6 | TK oder AOK? | 22 |
| L7 | deu_r20l7 | Prüfung: Gesundheit und System | 22 |
| L8 | deu_r20l8 | Hildis Servietten-Diagramm | 23 |

### U21 - Ost und West (B1.2) - 188 total steps
| Lesson | ID | Title | Steps |
|--------|----|-------|-------|
| L1 | deu_r21l1 | Leipzig Hauptbahnhof | 22 |
| L2 | deu_r21l2 | Stimmen der Geschichte | 24 |
| L3 | deu_r21l3 | Altes Rathaus | 24 |
| L4 | deu_r21l4 | Nikolaikirche | 24 |
| L5 | deu_r21l5 | Hildis Fotoalbum | 24 |
| L6 | deu_r21l6 | Du kannst ruhig du sagen | 24 |
| L7 | deu_r21l7 | Zeitzeugen | 22 |
| L8 | deu_r21l8 | Leipziger Allerlei | 24 |

### U22 - Umwelt und Alltag (B1.2) - 192 total steps
| Lesson | ID | Title | Steps |
|--------|----|-------|-------|
| L1 | deu_r22l1 | Nachhaltigkeit im Büro | 24 |
| L2 | deu_r22l2 | Grün denken | 24 |
| L3 | deu_r22l3 | Der Pfand-Meister | 24 |
| L4 | deu_r22l4 | Grammatik der Natur | 26 |
| L5 | deu_r22l5 | Bio oder Discounter? | 24 |
| L6 | deu_r22l6 | Ruhig du sagen | 24 |
| L7 | deu_r22l7 | Umwelt-Quiz | 22 |
| L8 | deu_r22l8 | Ein richtiger Berliner | 24 |

### U23 - Die Prüfung (B1.2) - 266 total steps
| Lesson | ID | Title | Steps |
|--------|----|-------|-------|
| L1 | deu_r23l1 | Lernmaschine | 24 |
| L2 | deu_r23l2 | Werkzeuge des Lernens | 24 |
| L3 | deu_r23l3 | Vor der Prüfung | 24 |
| L4 | deu_r23l4 | Hypothesen und Wünsche | 24 |
| L5 | deu_r23l5 | Drei Konstruktionen | 26 |
| L6 | deu_r23l6 | Wortschatz-Blitz | 26 |
| L7 | deu_r23l7 | Im Prüfungsraum | 26 |
| L8 | deu_r23l8 | Die großen Wörter | 26 |
| L9 | deu_r23l9 | BESTANDEN! | 27 |
| L10 | deu_r23l10 | Bildung und Kultur | 39 |

Note: U23 has 10 lessons (not 8 like others). This is not a violation but should be confirmed as intentional.

### U24 - Einjährig (B1.2) - 185 total steps
| Lesson | ID | Title | Steps |
|--------|----|-------|-------|
| L1 | deu_r24l1 | Ein Jahr | 24 |
| L2 | deu_r24l2 | Rückblick | 22 |
| L3 | deu_r24l3 | Bevor Berlin | 22 |
| L4 | deu_r24l4 | Zukunftsmusik | 24 |
| L5 | deu_r24l5 | Vorbereitung | 23 |
| L6 | deu_r24l6 | Das Fest | 24 |
| L7 | deu_r24l7 | Rückblick und Ausblick | 22 |
| L8 | deu_r24l8 | Ich werde bleiben | 24 |

---

## 5. Fix Priority List

All violations must be fixed before merge. In order of impact:

| # | Unit | Location | Check | Fix Complexity |
|---|------|----------|-------|---------------|
| 1 | U14 | L6.step[24] | PP48: fb multi-blank | Medium: convert fb to drag_fill |
| 2 | U14 | L7.step[27] | PP48: fb multi-blank | Medium: convert fb to drag_fill |
| 3 | U13 | L7.step[26] | PP49: CEFR label in q | Easy: rephrase question |
| 4 | U23 | L3.step[22] | PP49: CEFR label in s + sSrc | Easy: replace "B1-Prüfung" with "Sprachprüfung" |
| 5 | U23 | L10.step[38] | PP49: CEFR label in s + sSrc | Easy: replace "offiziell B1" with "offiziell zertifiziert" |
| 6 | U17 | L4.step[22] | verb_table missing note | Easy: add note field |
| 7 | U18 | L3.step[24] | verb_table missing note | Easy: add note field |
| 8 | U18 | L4.step[18] | verb_table missing note | Easy: add note field |
| 9 | U23 | L5.step[20] | verb_table missing note | Easy: add note field |
| 10 | U18 | file-level | export format mismatch | Easy: strip export const and trailing semicolon |

---

## 6. Overall Result

**OVERALL: FAIL**

11 violations across 5 units. 7 units are structurally clean. No PP43 failures (all lessons 18+ steps). No lesson ID gaps or duplicates. No invalid POS/gender values on teach cards. No teach cards missing required fields. The violations are concentrated in 4 categories:

- PP48 (fb multi-blank): 2 violations in U14 - must convert to drag_fill
- PP49 (CEFR labels): 4 violations across U13 and U23 - rephrase to remove level labels
- Missing verb_table note: 4 violations across U17, U18, U23 - add note field
- U18 export format: 1 structural note - standardize to bare object literal

All fixes are straightforward edits. No structural redesign required.
