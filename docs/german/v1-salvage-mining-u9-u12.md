# V1 Salvage Mining Report — German V2 Units 9-12 (A2.2)

> Generated: 2026-03-26
> Agent: V1 Salvage Mining Agent (Units 9-12)
> Source: `src/data/units-german.js` (lines 2501-5317)
> Target: `src/data/units-german-v2.js` units 9-12 (lines 2525-3812)

---

## Scope

V2 Units 9-12 cover A2.2 level. This report mines V1 units 9-16 for content MISSING from V2 units 9-12. The focus is on verb_table and tip cards as the highest-value reusable assets. Quiz steps are noted where they form dense drill sequences.

### V1→V2 Theme Mapping Used

| V1 Unit | V1 Title | V2 Target Unit | V2 Title |
|---------|----------|----------------|----------|
| V1 U9 | Was hast du gemacht? (Perfekt haben) | V2 U7 + V2 U10 | Der Arztbesuch / Deutsche Bahn |
| V1 U10 | Ich bin gefahren (Perfekt sein) | V2 U10 | Deutsche Bahn |
| V1 U11 | Wem gehört das? (Dative full) | V2 U7 | Der Arztbesuch |
| V1 U12 | Wo oder Wohin? (Wechselpräpositionen) | V2 U8 | Müllprofessor |
| V1 U13 | Besser & Schöner (comparative/superlative) | V2 U8 + V2 U11 | Müllprofessor / Weihnachtsmarkt |
| V1 U14 | Weil ich müde bin (Nebensätze) | V2 U8-U10 | (distributed) |
| V1 U15 | Ich fühle mich gut (reflexive verbs) | V2 U9 | Freizeit und Vereine |
| V1 U16 | Was wirst du machen? (Konjunktiv II) | V2 U12 | Halbjahresbilanz |

---

## Summary Table

| Item ID | Type | V1 Location | Title | Target V2 Unit | Quality | Recommendation |
|---------|------|-------------|-------|----------------|---------|----------------|
| S-001 | verb_table | V1 L2511 | haben - Perfekt Helper | V2 U7 (already has this) | Good | SKIP — V2 U7 line 2079 covers it |
| S-002 | verb_table | V1 L2558 | Regular Partizip II Patterns | V2 U10 (already has) | Excellent | SKIP — V2 U10 line 2898 is equivalent |
| S-003 | verb_table | V1 L2599 | Irregular Partizip II Forms | V2 U10 | Excellent | TAKE — V2 U10 has no standalone irregular table |
| S-004 | verb_table | V1 L2640 | Separable Verbs: Partizip II | V2 U10 (already has) | Good | SKIP — V2 U10 line 2899 is equivalent |
| S-005 | verb_table | V1 L2683 | Verbs Without ge- in Partizip II | V2 U10 | Excellent | TAKE — V2 has only in notes/funFacts, no dedicated table |
| S-006 | verb_table | V1 L2856 | Perfekt with sein: Full Conjugation | V2 U10 | Excellent | MERGE — V2 line 2896 partial; V1 adds 3-column format with English |
| S-007 | verb_table | V1 L2901 | Bewegungsverben: Partizip II | V2 U10 | Excellent | TAKE — V2 has no movement verb Partizip II table |
| S-008 | verb_table | V1 L2942 | Zustandsverben: Partizip II | V2 U10 | Excellent | TAKE — V2 has no state-change verb table |
| S-009 | verb_table | V1 L3133 | Complete Partizip II Reference | V2 U10 | Excellent | TAKE — V2 has no master reference table |
| S-010 | verb_table | V1 L3179 | Dative Article Changes | V2 U7 | Excellent | MERGE — V2 U7 has tip but no nom/dat side-by-side table |
| S-011 | verb_table | V1 L3190 | Indefinite Article in Dative | V2 U7 | Excellent | TAKE — V2 U7 has no indefinite article dative table |
| S-012 | verb_table | V1 L3267 | Dative Pronouns (3-column) | V2 U9 | Excellent | TAKE — V2 has NO personal dative pronoun paradigm table |
| S-013 | tip (x14) | V1 L3575-3874 | Wechselpräpositionen system | V2 U8 | Excellent | TAKE 7, SKIP 3, MERGE 4 — see detail below |
| S-014 | verb_table | V1 L4388 | Reflexivpronomen (Accusative) | V2 U9 | Good | SKIP — V2 U9 line 2607 covers it fully |
| S-015 | verb_table | V1 L4435 | Daily Reflexive Verbs: Ich Form | V2 U9 | Good | MERGE — V2 covers verbs in teach cards but has no paradigm table |
| S-016 | tip | V1 L4426 | Separable Reflexive Verbs | V2 U9 | Good | TAKE — V2 U9 has no tip on separable reflexive structure |
| S-017 | tip | V1 L4469 | auf vs über with sich freuen | V2 U9 | Excellent | TAKE — V2 U9 has no preposition split tip for freuen |
| S-018 | tip | V1 L4550 | 'Mir tut X weh' vs Ich habe X-schmerzen | V2 U9 | Good | SKIP — covered in V2 U7 |
| S-019 | tip | V1 L4595 | Accusative vs Dative Reflexive | V2 U9 | Excellent | MERGE — V2 tip at 2639 covers rule; V1 deepDive adds full table |
| S-020 | verb_table | V1 L4843 | wuerde (würde) - Konjunktiv II | V2 U12 | Excellent | MERGE — V2 U11 line 3207 and U13 3936 cover this; V1 standalone useful |
| S-021 | verb_table | V1 L4863 | haette (hätte) - Konjunktiv II | V2 U12 | Excellent | TAKE — V2 only lists as row in combined table, no full conjugation |
| S-022 | verb_table | V1 L4865 | waere (wäre) - Konjunktiv II | V2 U12 | Excellent | TAKE — same gap as S-021 |
| S-023 | verb_table | V1 L4883 | koennte (könnte) - Konjunktiv II | V2 U12 | Excellent | TAKE — same gap as S-021 |
| S-024 | tip | V1 L4847 | werden vs. würde | V2 U12 | Excellent | TAKE — V2 U12 has no explicit future vs hypothetical contrast |
| S-025 | tip | V1 L4889 | hätte and wäre: No würde Needed | V2 U11+U12 | Excellent | TAKE — V2 has this in deepDive only, not as standalone tip |
| S-026 | tip | V1 L4908 | kann vs. könnte | V2 U12 | Good | TAKE — V2 has no direct kann/könnte politeness tip |
| S-027 | tip | V1 L4927 | Politeness Ranking | V2 U12 | Excellent | TAKE — V2 has no 5-level politeness ranking tip |
| S-028 | tip | V1 L4972 | Why war/hatte even in speech | V2 U10 | Good | TAKE — V2 U10 has no tip on Präteritum preference for sein/haben |
| S-029 | tip | V1 L3953 | The Comparative Pattern | V2 U8 (partially covered) | Good | SKIP — V2 U8 line 2316 covers comparatives including irregulars |
| S-030 | tip | V1 L3991 | als vs wie in Comparisons | V2 U8+U11 | Excellent | TAKE — V2 has no als/wie equality contrast tip; "so...wie" absent |
| S-031 | 35 quiz steps | V1 L2858-3163 | Perfekt sein/haben decision drills | V2 U10 | Excellent | TAKE — V2 U10 has limited sein/haben choice drills |
| S-032 | 103 quiz steps | V1 L3569-3943 | Wechselpräpositionen drills | V2 U8 | Good | TAKE 12, REST write fresh — top quality, good distractors |
| S-033 | 20 quiz steps | V1 L4398-4453 | Reflexive pronoun drills | V2 U9 | Good | TAKE 10 — basic pronoun fill-in + dative switch |
| S-034 | 30 quiz steps | V1 L4848-4935 | Konjunktiv II drills | V2 U12 | Excellent | TAKE — V2 U12 has no K-II quiz drill set |

---

## Detailed Item Entries

### S-003: Irregular Partizip II Forms
**Type**: verb_table
**V1 Location**: line 2599 (V1 Unit 9, Lesson 2)
**Full Content**:
```js
{type:"verb_table",title:"Irregular Partizip II Forms",label:"ge + changed stem + en",
 groups:[{label:"Key strong verbs",rows:[
   ["schreiben","geschrieben"],["trinken","getrunken"],["essen","gegessen"],
   ["lesen","gelesen"],["nehmen","genommen"]
 ]}],
 note:"These Partizip II forms end in -en, not -t.\nThe stem vowel changes. Memorise as vocabulary."}
```
**V2 Gap**: V2 U7 line 2079 lists genommen/gesprochen/getrunken in a haben table, and V2 U10 line 2897 mentions irregular forms in a tip, but there is no dedicated irregular Partizip II table with the key strong verb list.
**Quality**: Excellent — concise, 5 essential verbs, correct note.
**Recommendation**: TAKE. Assign to V2 U10. Requires field rename (`rows` format fine, just add `src` column). Add schlafen/schlafen as 6th row for completeness.
**Migration notes**: V1 uses old `rows` array format — convert each row to `{pronoun, form, src}` format. Add English translations in `src` column.

---

### S-005: Verbs Without ge- in Partizip II
**Type**: verb_table
**V1 Location**: line 2683 (V1 Unit 9, Lesson 3)
**Full Content**:
```js
{type:"verb_table",title:"Verbs Without ge- in Partizip II",label:"No ge- for these groups",
 groups:[
   {label:"-ieren verbs (no ge-)",rows:[
     ["telefonieren","telefoniert"],["studieren","studiert"],
     ["fotografieren","fotografiert"],["reparieren","repariert"]
   ]},
   {label:"Inseparable prefix verbs (no ge-)",rows:[
     ["besuchen","besucht"],["erzählen","erzählt"],
     ["verstehen","verstanden"],["erklären","erklärt"]
   ]}
 ],
 note:"Neither group uses ge-.\nInseparable prefixes: be-, er-, ver-, ent-, ge-, zer-."}
```
**V2 Gap**: V2 has coverage scattered in teach card `funFact` fields (renovieren at L2421, fotografieren at L2676, unternehmen at L2776) and in a deepDive at L2897. No dedicated table exists.
**Quality**: Excellent — the two-group structure is exactly what learners need. Inseparable prefix list is accurate.
**Recommendation**: TAKE. Assign to V2 U10. This is the only table that systematically contrasts -ieren and inseparable prefix behavior.
**Migration notes**: Add `src` column (translation). The inseparable prefix list in the note needs `zer-` added — it's in V1. Convert rows to `{pronoun, form, src}` format.

---

### S-006: Perfekt with sein: Full Conjugation (MERGE)
**Type**: verb_table
**V1 Location**: line 2856 (V1 Unit 10, Lesson 1)
**Full Content**:
```js
{type:"verb_table",title:"Perfekt with sein: Full Conjugation",label:"Ich bin gegangen (I went)",
 groups:[
   {label:"Singular",rows:[
     ["ich","bin gegangen","I went"],["du","bist gegangen","you went"],
     ["er/sie/es","ist gegangen","he/she/it went"]
   ]},
   {label:"Plural",rows:[
     ["wir","sind gegangen","we went"],["ihr","seid gegangen","you all went"],
     ["sie/Sie","sind gegangen","they / you (formal) went"]
   ]}
 ],
 note:"Only the sein helper conjugates. Gegangen never changes.",
 deepDive:{title:"Position of Partizip II",text:"In a main clause, the Partizip II goes to the END of the sentence...TMP rule still applies."}}
```
**V2 Gap**: V2 U10 line 2896 has a `Perfekt mit sein` table but uses only 1 group (Bewegungsverben) with 6 different verbs — one per pronoun row — making it look like a conjugation table rather than a system display. V1's 2-group full conjugation shows all pronoun forms with ONE verb (gehen), which is pedagogically cleaner.
**Quality**: Excellent — deepDive TMP note is high-value.
**Recommendation**: MERGE. Keep V2 U10's Bewegungsverben table for verb variety, but add V1's full conjugation table as the paradigm table that comes BEFORE it. The deepDive on TMP rule should be added to the V2 table's deepDive if absent.
**Migration notes**: V1 uses ASCII in some notes (check for ue/ae — none visible here). Convert rows to `{pronoun, form, src}`. The deepDive content is salvageable as-is.

---

### S-007: Bewegungsverben: Partizip II
**Type**: verb_table
**V1 Location**: line 2901 (V1 Unit 10, Lesson 2)
**Full Content**:
```js
{type:"verb_table",title:"Bewegungsverben: Partizip II",label:"Movement verbs + sein",
 groups:[
   {label:"Regular (-t ending)",rows:[
     ["reisen","ist gereist","traveled"],["wandern","ist gewandert","hiked"],
     ["klettern","ist geklettert","climbed"]
   ]},
   {label:"Irregular (-en ending)",rows:[
     ["laufen","ist gelaufen","ran"],["schwimmen","ist geschwommen","swam"],
     ["springen","ist gesprungen","jumped"],["rennen","ist gerannt","sprinted"]
   ]}
 ],
 note:"When you see -en in Partizip II, the verb is usually irregular.",
 deepDive:{title:"laufen vs rennen",text:"Both describe movement on foot:\nlaufen = general running or walking at a moderate pace\nrennen = sprinting, urgent or fast running..."}}
```
**V2 Gap**: V2 U10 line 2896 shows only one Bewegungsverb per pronoun row (gefahren/gegangen/gekommen/angekommen/geflogen/gelaufen). There is no table showing the regular vs irregular split within movement verbs specifically.
**Quality**: Excellent — the regular vs irregular split within movement verbs is a key teaching insight. laufen/rennen deepDive is high quality.
**Recommendation**: TAKE. Assign to V2 U10. Place after the full conjugation table (S-006).
**Migration notes**: All umlauts present. Rows already have 3 columns (verb, form, translation) — convert to `{pronoun, form, src}` format (pronoun = infinitive here). The `laufen vs rennen` deepDive is excellent — keep intact.

---

### S-008: Zustandsverben: Partizip II
**Type**: verb_table
**V1 Location**: line 2942 (V1 Unit 10, Lesson 3)
**Full Content**:
```js
{type:"verb_table",title:"Zustandsverben: Partizip II",label:"Change-of-state verbs + sein",
 groups:[
   {label:"Separable prefix verbs",rows:[
     ["einschlafen","ist eingeschlafen","fell asleep"],["aufwachen","ist aufgewacht","woke up"]
   ]},
   {label:"Irregular core verbs",rows:[
     ["werden","ist geworden","became"],["sterben","ist gestorben","died"],
     ["bleiben","ist geblieben","stayed"]
   ]},
   {label:"Regular loanword",rows:[["passieren","ist passiert","happened"]]}
 ],
 note:"Separable verbs insert ge- between prefix and stem.",
 deepDive:{title:"Separable prefix + ge- rule",text:"...ein+schlafen becomes eingeschlafen..."}}
```
**V2 Gap**: V2 has no state-change verb table. The V2 U10 tip at line 2897 mentions that werden/bleiben use sein but does not list them in a table with their Partizip II forms.
**Quality**: Excellent — the three-group split (separable, irregular core, loanword) is pedagogically well-structured. The deepDive on ge- placement is high-value.
**Recommendation**: TAKE. Assign to V2 U10. Place after S-007.
**Migration notes**: All umlauts present. Convert rows. Keep deepDive.

---

### S-009: Complete Partizip II Reference
**Type**: verb_table
**V1 Location**: line 3133 (V1 Unit 10, Lesson 5)
**Full Content**:
```js
{type:"verb_table",title:"Complete Partizip II Reference",label:"Key forms to memorize",
 groups:[
   {label:"sein group (motion)",rows:[
     ["gehen","ist gegangen","went"],["kommen","ist gekommen","came"],
     ["fahren","ist gefahren","drove/traveled"],["fliegen","ist geflogen","flew"],
     ["laufen","ist gelaufen","ran"],["schwimmen","ist geschwommen","swam"]
   ]},
   {label:"sein group (state change)",rows:[
     ["werden","ist geworden","became"],["bleiben","ist geblieben","stayed"],
     ["einschlafen","ist eingeschlafen","fell asleep"],["aufwachen","ist aufgewacht","woke up"]
   ]},
   {label:"haben group (activities)",rows:[
     ["essen","hat gegessen","ate"],["lesen","hat gelesen","read"],
     ["schreiben","hat geschrieben","wrote"],["kaufen","hat gekauft","bought"],
     ["besuchen","hat besucht","visited"]
   ]}
 ],
 note:"These are the highest-frequency verbs in German."}
```
**V2 Gap**: V2 has no master reference table combining sein and haben groups with Partizip II forms. V2 teaches them in separate tips and tables across U7 and U10 but never consolidates into a single reference.
**Quality**: Excellent — 16 verbs, 3 groups, high frequency, ready to use.
**Recommendation**: TAKE. Assign to V2 U10 (final lesson as review/reference). This is the single highest-value salvage item for Perfekt content.
**Migration notes**: Add `tricolumnar` note that `pronoun` column = infinitive. Rows already have translations. Convert format.

---

### S-010: Dative Article Changes (MERGE)
**Type**: verb_table
**V1 Location**: line 3179 (V1 Unit 11, Lesson 1)
**Full Content**:
```js
{type:"verb_table",title:"Dative Article Changes",label:"Definite article: der/die/das to dative",
 groups:[
   {label:"Nominative (for comparison)",
    rows:[["","Maskulin","Feminin","Neutrum","Plural"],["der/die/das","der Vater","die Mutter","das Kind","die Kinder"]]},
   {label:"Dative: dem/der/dem/den+n",
    rows:[["","Maskulin","Feminin","Neutrum","Plural"],["dem/der/dem/den","dem Vater","der Mutter","dem Kind","den Kindern"]]}
 ],
 note:"Masculine and neuter both use dem.\nFeminine uses der.\nPlural uses den and nouns often add -n.",
 deepDive:{title:"Memory trick for dative articles",text:"Masculine and neuter BOTH become dem...\nMnemonic: Nominative: der die das / Accusative: den die das / Dative: dem der dem den..."}}
```
**V2 Gap**: V2 U7 line 2083 has a tip that mentions `der→dem, die→der, das→dem, die(pl)→den+n` but no side-by-side nom vs dat table showing the shift visually. V2 U5 line 1477 has a dative articles table but only for prepositions (not showing nominative for comparison).
**Quality**: Excellent — the side-by-side nom/dat comparison is the clearest way to show the shift. The deepDive mnemonic is high-value.
**Recommendation**: MERGE. The V2 U7 tip already covers the rule; add V1's table alongside it (or integrate the side-by-side comparison into the tip). Best placement: V2 U7, immediately after tip at line 2083. The deepDive mnemonic (all three cases in one view) is the most salvageable element.
**Migration notes**: The multi-row table with headers is a 4-column matrix — use `{pronoun, form, src}` format. The deepDive text is excellent and should be preserved. Remove phonetics.

---

### S-011: Indefinite Article in Dative
**Type**: verb_table
**V1 Location**: line 3190 (V1 Unit 11, Lesson 1)
**Full Content**:
```js
{type:"verb_table",title:"Indefinite Article in Dative",label:"ein/eine/ein to einem/einer/einem",
 groups:[
   {label:"Nominative (for comparison)",
    rows:[["","Maskulin","Feminin","Neutrum"],["ein/eine/ein","ein Freund","eine Freundin","ein Kind"]]},
   {label:"Dative: einem/einer/einem",
    rows:[["","Maskulin","Feminin","Neutrum"],["einem/einer/einem","einem Freund","einer Freundin","einem Kind"]]}
 ],
 note:"Masculine and neuter: einem.\nFeminine: einer.\nParallel to the definite article pattern.",
 deepDive:{title:"Kein in the dative",text:"Kein follows the same pattern as ein: keinem/keiner/keinem/keinen..."}}
```
**V2 Gap**: V2 has no indefinite article dative table. The V2 U7 tip mentions `einem/einer/einem` in passing but does not display it as a paradigm table showing the nom/dat shift.
**Quality**: Excellent — kein deepDive is a valuable bonus that directly extends the rule.
**Recommendation**: TAKE. Assign to V2 U7, immediately after S-010 (definite article table). The kein deepDive saves learners from a common mistake.
**Migration notes**: Same matrix format as S-010. Convert to `{pronoun, form, src}`. The deepDive on kein is excellent — keep.

---

### S-012: Dative Pronouns (3-column paradigm)
**Type**: verb_table
**V1 Location**: line 3267 (V1 Unit 11, Lesson 3)
**Full Content**:
```js
{type:"verb_table",title:"Dative Pronouns",label:"Personal pronouns in the dative case",
 groups:[
   {label:"Singular",rows:[
     ["Person","Nominative","Accusative","Dative"],
     ["1st sing.","ich","mich","mir"],["2nd sing. (informal)","du","dich","dir"],
     ["3rd masc.","er","ihn","ihm"],["3rd fem.","sie","sie","ihr"],["3rd neut.","es","es","ihm"]
   ]},
   {label:"Plural",rows:[
     ["Person","Nominative","Accusative","Dative"],
     ["1st pl.","wir","uns","uns"],["2nd pl. (informal)","ihr","euch","euch"],
     ["3rd pl. / formal","sie/Sie","sie/Sie","ihnen/Ihnen"]
   ]}
 ],
 note:"Formal Sie (dative) = Ihnen (capital I).\nuns and euch are the same for accusative and dative.",
 deepDive:{title:"A shortcut: uns and euch do double duty",text:"Uns is both accusative and dative...\nEr sieht uns (acc) / Er hilft uns (dat)..."}}
```
**V2 Gap**: CRITICAL GAP. V2 has NO personal dative pronoun paradigm table anywhere in units 9-12. The pronouns mir/dir/ihm/ihr/uns/euch/ihnen appear extensively in examples and notes but are never shown as a full paradigm. Learners see them used without a reference table.
**Quality**: Excellent — the 3-column nom/acc/dat comparison is exactly what learners need to see. The uns/euch deepDive resolves a common confusion point.
**Recommendation**: TAKE. This is the single most critical gap in V2 units 9-12 for dative coverage. Assign to V2 U9 (where dative reflexive pronouns are being introduced). Place at the start of the dative pronoun lesson.
**Migration notes**: 4-column matrix table — convert to `{pronoun, form, src}` where the 4th column (Dative) becomes the `form`. The 3-way comparison is the value; do not reduce to 2 columns. The deepDive on uns/euch dual-duty is excellent — keep. Remove phonetics from the associated teach cards if salvaging those too.

---

### S-013: Wechselpräpositionen Tip System (14 tips → 7 TAKE, 4 MERGE, 3 SKIP)

V1 U12 (lines 3569-3943) has 14 systematic tips on Wechselpräpositionen. V2 U8 has only 2 tips covering this: "Wechselpräpositionen: Richtung oder Ort?" (line 2310, covers the core rule + verb lists) and "Action vs State Verb Pairs" (line 539, in a different unit, covers stellen/stehen/legen/liegen). Below is the per-tip decision.

| V1 Line | Tip Title | V2 Coverage | Decision |
|---------|-----------|-------------|----------|
| L3575 | The Core Rule | V2 line 2310 covers fully | SKIP |
| L3601 | Quick Memory Aid (Wo? dative / Wohin? acc.) | Mentioned in V2 2310 deepDive | SKIP |
| L3620 | Dative Articles for Wo? (der/dem/der/den paradigm) | Not in V2 U8 as standalone | TAKE |
| L3636 | Dative Summary Table (per-gender examples) | Not in V2 U8 | TAKE |
| L3663 | Accusative Articles for Wohin? (den/die/das paradigm) | Not in V2 U8 as standalone | TAKE |
| L3679 | Dative vs Accusative: Side by Side (Buch liegt/lege) | In V2 U8 deepDive only | MERGE |
| L3706 | The Verb Pair Logic (stehen/stellen, liegen/legen) | V2 line 539 covers it | SKIP |
| L3716 | Quick Test: stehen/stellen vs liegen/legen | V2 deepDive only | MERGE |
| L3753 | Two hängens: state vs action | Not in V2 at all | TAKE |
| L3763 | The Full Positional Verb System | Partial in V2 U8 deepDive | MERGE |
| L3780 | The Core Four Contractions (im/ins/am/ans) | V2 2310 has them briefly | TAKE |
| L3790 | Feminine Has NO Contraction | Not in V2 | TAKE |
| L3856 | Unit 12 Complete Summary | Write fresh for V2 | MERGE |
| L3866 | Vocab tip: -in suffix (separate topic) | V2 has this content | SKIP |

**Full content of TAKE items:**

**S-013a: Dative Articles for Wo? (line 3620)**
```js
{type:"tip",title:"Dative Articles for Wo?",
 text:"When Wo? triggers dative:\n\nder Tisch (m) → auf DEM Tisch\ndie Wand (f) → an DER Wand\ndas Bett (n) → unter DEM Bett\ndie Bücher (pl) → zwischen DEN Büchern\n\nMasculine and neuter: dem.\nFeminine: der.\nPlural: den + noun adds -n ending.",
 deepDive:{title:"Why does plural add -n?",text:"In dative plural, nouns gain an -n suffix: die Bücher becomes den Büchern..."}}
```
Recommendation: TAKE. Assign to V2 U8. The systematic article display per gender/number is missing from V2.

**S-013b: Dative Summary Table (line 3636)**
```js
{type:"tip",title:"Dative Summary Table",
 text:"der (m): auf dem Tisch, vor dem Haus, hinter dem Baum\ndie (f): in der Küche, an der Wand, vor der Schule\ndas (n): im Zimmer (in + dem), auf dem Bett\nPlural: zwischen den Stühlen, neben den Büchern\n\nKey: m and n both use DEM. f uses DER."}
```
Recommendation: TAKE. Assign to V2 U8. Quick-reference format is high utility.

**S-013c: Accusative Articles for Wohin? (line 3663)**
```js
{type:"tip",title:"Accusative Articles for Wohin?",
 text:"When Wohin? triggers accusative:\n\nder Tisch (m) → auf DEN Tisch\ndie Wand (f) → an DIE Wand\ndas Bett (n) → unter DAS Bett\ndie Stühle (pl) → zwischen DIE Stühle\n\nMasculine CHANGES: der → den.\nFeminine and neuter: same as nominative.\nPlural: die (same as nominative).",
 deepDive:{title:"Why does only masculine change in accusative?",text:"Proto-Germanic had more distinctions that eroded in most genders..."}}
```
Recommendation: TAKE. Assign to V2 U8. The deepDive on why only masculine changes is excellent cultural/linguistic content.

**S-013d: Two hängens (line 3753)**
```js
{type:"tip",title:"Two hängens: One Word, Two Functions",
 text:"hängen (intransitive) = to be hanging (state):\nDas Bild hängt an der Wand. (dative)\n\nhängen (transitive) = to hang up (action):\nIch hänge das Bild an die Wand. (accusative)\n\nTest: if there is a direct object being moved, it is the action version...",
 deepDive:{title:"Strong vs weak forms of hängen",text:"The intransitive hängen is a strong verb: hing/gehangen. The transitive is weak: hängte/gehängt..."}}
```
Recommendation: TAKE. Assign to V2 U8. This is the most confusing Wechselpräp case and V2 has zero coverage.

**S-013e: Core Four Contractions (line 3780)**
```js
{type:"tip",title:"The Core Four Contractions",
 text:"in + dem = im (dative, location)\nin + das = ins (accusative, direction)\nan + dem = am (dative, location)\nan + das = ans (accusative, direction)\n\nThese are NOT optional in normal speech.\nim Zimmer, ins Kino, am Bahnhof, ans Meer.",
 deepDive:{title:"Are there more contractions in German?",text:"Full list: im, ins, am, ans, aufs, vors, hinters, unters, übers. For A2, master im/ins/am/ans first."}}
```
Recommendation: TAKE. V2 U8 mentions these in one line of the core rule tip but has no dedicated tip with full examples and the extended list deepDive.

**S-013f: Feminine Has NO Contraction (line 3790)**
```js
{type:"tip",title:"Feminine Has NO Contraction",
 text:"in die Küche, an die Wand, in die Schule, an die Tür.\n\nFeminine (die) has no contracted form.\nOnly masculine/neuter in dative get im/am.\nOnly neuter in accusative gets ins/ans.\n\nFeminine accusative: always 'in die', 'an die' in full.",
 deepDive:{title:"Why no feminine contraction?",text:"Masculine and neuter share 'dem' in the dative, which contracts easily to 'im/am'. Feminine has 'der' in the dative. 'in der' does not contract..."}}
```
Recommendation: TAKE. V2 has no coverage of this. The absence of feminine contractions is a high-frequency learner mistake point.

**MERGE items (summary):**
- Line 3679 "Dative vs Accusative: Side by Side" — content in V2 2310 deepDive. MERGE the explicit paired examples (Buch liegt/lege) into V2's existing deepDive.
- Line 3716 "Quick Test: stehen/stellen vs liegen/legen" — content in V2 539 deepDive. MERGE the upright/flat distinction language.
- Line 3763 "Full Positional Verb System" — partial overlap. MERGE the 4-verb state/action lists into V2's deepDive.
- Line 3856 "Summary" — Write fresh for V2 context.

---

### S-015: Daily Reflexive Verbs: Ich Form (MERGE)
**Type**: verb_table
**V1 Location**: line 4435 (V1 Unit 15, Lesson 2)
**Full Content**:
```js
{type:"verb_table",title:"Daily Reflexive Verbs: Ich Form",label:"First person singular",
 groups:[{label:"Morning routine",rows:[
   ["sich duschen","ich dusche mich"],["sich anziehen","ich ziehe mich an"],
   ["sich kämmen","ich kämme mich"],["sich rasieren","ich rasiere mich"],
   ["sich schminken","ich schminke mich"]
 ]}],
 note:"Note how sich anziehen and sich ausziehen split:\nthe prefix (an/aus) moves to the end of the sentence."}
```
**V2 Gap**: V2 U9 teaches individual reflexive verbs as teach cards but has no paradigm table showing the morning routine set together. The separable split (ziehe...an) is noted in individual cards but not collected in a table.
**Quality**: Good — concise, practical, 5 high-frequency verbs.
**Recommendation**: MERGE. The table format adds value but V2's teach cards cover the same verbs. Combine with a note about separable behavior in a V2-style verb_table.
**Migration notes**: Add `src` column with English. Convert rows. Add sich ausziehen and sich umziehen as additional rows since V2 U9 covers both.

---

### S-016: Separable Reflexive Verbs tip
**Type**: tip
**V1 Location**: line 4426 (V1 Unit 15, Lesson 2)
**Full Content**:
```js
{type:"tip",title:"Separable Reflexive Verbs",
 text:"Some reflexive verbs are ALSO separable. The prefix splits off and goes to the end:\n\nsich anziehen: Ich ziehe mich an. (prefix 'an' at end)\nsich ausziehen: Ich ziehe mich aus. (prefix 'aus' at end)\nsich umziehen: Ich ziehe mich um. (prefix 'um' at end)\n\nThe reflexive pronoun stays right after the main verb.",
 deepDive:{title:"Separable reflexive verbs in Perfekt",
  text:"In Perfekt, separable reflexive verbs combine the ge- prefix:\nsich anziehen: Ich habe mich angezogen.\nsich ausziehen: Ich habe mich ausgezogen.\nge- goes between prefix and stem: an+ge+zogen = angezogen."}}
```
**V2 Gap**: V2 U9 covers sich anziehen and other separable reflexives as teach cards but has no tip explaining WHY the prefix splits and how this works in Perfekt.
**Quality**: Good — clear examples, the Perfekt deepDive adds genuine value not elsewhere in V2 U9.
**Recommendation**: TAKE. Assign to V2 U9.
**Migration notes**: Update examples to fit V2 U9 story context (Lauftreff/Vereine theme). No umlaut issues. Keep deepDive.

---

### S-017: auf vs über with sich freuen
**Type**: tip
**V1 Location**: line 4469 (V1 Unit 15, Lesson 3)
**Full Content**:
```js
{type:"tip",title:"auf vs über with sich freuen",
 text:"The preposition changes the TIME direction:\n\nsich freuen AUF = looking FORWARD to something (future)\nIch freue mich auf die Ferien.\n\nsich freuen ÜBER = being happy ABOUT something (past or current)\nIch freue mich über das Ergebnis.\n\nauf = arrow pointing to the future. über = reflecting on what happened.",
 deepDive:{title:"darauf and darüber",
  text:"When a preposition refers to a thing (not a person), German uses da-compounds:\nFreust du dich auf den Urlaub? Ja, ich freue mich darauf.\nda + auf = darauf. da + über = darüber. You will study these fully in B1."}}
```
**V2 Gap**: V2 U9 teaches `sich freuen` as a teach card but does not distinguish the auf/über split. This is a very common learner error point. The da-compound preview in the deepDive is appropriate for A2.2.
**Quality**: Excellent — the future/past time-direction metaphor is memorable. deepDive gives B1 preview without overloading.
**Recommendation**: TAKE. Assign to V2 U9, place immediately after the sich freuen teach card.
**Migration notes**: Update Ferien example to fit story context if needed. No structural issues.

---

### S-019: Accusative vs Dative Reflexive (MERGE)
**Type**: tip
**V1 Location**: line 4550 (V1 Unit 15, Lesson 4)
**Full Content**:
```js
{type:"tip",title:"Accusative vs Dative Reflexive",
 text:"ACCUSATIVE reflexive (most common):\nIch fühle mich gut. (I feel well.)\nIch wasche mich. (I wash myself.)\n\nDATIVE reflexive (with a direct object):\nIch wasche mir die Hände. (I wash my hands.)\nIch putze mir die Zähne. (I brush my teeth.)\n\nRule: if the verb ALREADY has a direct object (die Hände, die Zähne), the reflexive switches to DATIVE: mir instead of mich.",
 deepDive:{title:"Dative reflexive pronoun table",
  text:"ich: mir (instead of mich)\ndu: dir (instead of dich)\ner/sie/es: sich (same)\nwir: uns (same)\nihr: euch (same)\nsie/Sie: sich (same)\n\nOnly ich and du change: mich to mir, dich to dir."}}
```
**V2 Gap**: V2 U9 line 2639 has an equivalent tip "Reflexive Pronouns: Accusative vs Dative" that covers the same rule with good examples (waschen mich vs mir die Hände, putzen mir die Zähne). The V1 deepDive is slightly more explicit as a mini-table.
**Quality**: Good — the deepDive mini-table makes the ich/du change explicit.
**Recommendation**: MERGE. V2's tip is already good. Add V1's deepDive mini-table to V2's existing deepDive to make the ich/du changes explicit.
**Migration notes**: V2 tip already exists at line 2639. Only the deepDive content needs to be merged.

---

### S-020: würde Konjunktiv II table (MERGE)
**Type**: verb_table
**V1 Location**: line 4843 (V1 Unit 16, Lesson 2)
**Full Content**:
```js
{type:"verb_table",title:"wuerde (would)",label:"Konjunktiv II",
 groups:[{header:"",rows:[
   ["ich","wuerde"],["du","wuerdest"],["er/sie/es","wuerde"],
   ["wir","wuerden"],["ihr","wuerdet"],["sie/Sie","wuerden"]
 ]}],
 note:"Same word order as werden: wuerde in position 2, infinitive at the end."}
```
**V2 Gap**: V2 U11 line 3207 has a würde table with both würde conjugation AND common irregular forms (wäre/hätte/könnte/müsste) in one combined table. V2 U13 line 3936 has a standalone würde table.
**Quality**: Good — the word-order note (position 2, infinitive at end) is the key pedagogical point.
**Recommendation**: MERGE. V2 U11 already has this covered. The word-order note from V1 should be added to the V2 table's note field if it's missing.
**Migration notes**: V1 uses ASCII (wuerde → würde). Umlaut fix required before use. The note content is the only salvage value.

---

### S-021: hätte Konjunktiv II table (TAKE)
**Type**: verb_table
**V1 Location**: line 4863 (V1 Unit 16, Lesson 2)
**Full Content**:
```js
{type:"verb_table",title:"haette (would have)",label:"Konjunktiv II of haben",
 groups:[{header:"",rows:[
   ["ich","haette"],["du","haettest"],["er/sie/es","haette"],
   ["wir","haetten"],["ihr","haettet"],["sie/Sie","haetten"]
 ]}],
 note:"Never say 'wuerde haben'. Always use haette.\nIch haette gern... = I would like to have..."}
```
**V2 Gap**: V2 U11 line 3207 lists `haben → hätte` as a single row in the combined irregular forms group. V2 U13 line 3936 also only shows it as a single row. Neither shows the FULL conjugation of hätte (ich/du/er/wir/ihr/sie).
**Quality**: Excellent — the "never say würde haben" rule in the note is critical. The `Ich hätte gern...` form is among the highest-frequency Konjunktiv II phrases.
**Recommendation**: TAKE. Assign to V2 U12. Place alongside wäre and könnte tables for a 3-table Konjunktiv II paradigm set.
**Migration notes**: ASCII fix: haette → hätte, haettest → hättest, haetten → hätten. Convert rows to `{pronoun, form, src}` with English translations.

---

### S-022: wäre Konjunktiv II table (TAKE)
**Type**: verb_table
**V1 Location**: line 4865 (V1 Unit 16, Lesson 2)
**Full Content**:
```js
{type:"verb_table",title:"waere (would be)",label:"Konjunktiv II of sein",
 groups:[{header:"",rows:[
   ["ich","waere"],["du","waer(e)st"],["er/sie/es","waere"],
   ["wir","waeren"],["ihr","waer(e)t"],["sie/Sie","waeren"]
 ]}],
 note:"Never say 'wuerde sein'. Always use waere.\nDas waere schoen! = That would be nice!"}
```
**V2 Gap**: Same as S-021. V2 shows wäre as a single row in combined tables, never as a full conjugation.
**Quality**: Excellent — "never say würde sein" rule is critical. The du/ihr forms with optional -e- (wär(e)st) is a detail that prevents confusion.
**Recommendation**: TAKE. Assign to V2 U12. Same package as S-021 and S-023.
**Migration notes**: ASCII fix: waere → wäre, waer(e)st → wär(e)st, waeren → wären. The parenthetical (e) notation is authentic — keep it.

---

### S-023: könnte Konjunktiv II table (TAKE)
**Type**: verb_table
**V1 Location**: line 4883 (V1 Unit 16, Lesson 3)
**Full Content**:
```js
{type:"verb_table",title:"koennte (could)",label:"Konjunktiv II of koennen",
 groups:[{header:"",rows:[
   ["ich","koennte"],["du","koenntest"],["er/sie/es","koennte"],
   ["wir","koennten"],["ihr","koenntet"],["sie/Sie","koennten"]
 ]}],
 note:"Like koennen but with umlaut and -te ending.\nUsed for polite requests and hypothetical ability."}
```
**V2 Gap**: V2 U11 line 3207 lists `können → könnte` as a row. V2 U13 line 3974 has a full Modalverben Konjunktiv-II table that includes könnte with full conjugation of könnte ONLY. The V2 U13 table is more comprehensive (5 modals + full conjugation of könnte).
**Quality**: Good — the "like können but with umlaut and -te ending" note is a useful pattern anchor.
**Recommendation**: TAKE for V2 U12 if U12 introduces polite requests before U13. The V2 U13 table is better and covers all modals. If U12 is the FIRST introduction, V1's standalone table is useful; otherwise V2 U13 supersedes it.
**Best assignment**: V2 U12 (first encounter), then V2 U13 has the expanded version.
**Migration notes**: ASCII fix: koennte → könnte, koennten → könnten, etc.

---

### S-024: werden vs. würde tip (TAKE)
**Type**: tip
**V1 Location**: line 4847 (V1 Unit 16, Lesson 2)
**Full Content**:
```js
{type:"tip",title:"werden vs. wuerde",
 text:"werden = future (WILL happen)\nIch werde morgen kommen. (I will come tomorrow.)\n\nwuerde = hypothetical (WOULD happen)\nIch wuerde gern kommen. (I would like to come.)\n\nSame word order, completely different meaning!\nwerden = real plans\nwuerde = wishes, hypotheticals, polite requests",
 deepDive:"This bracket structure (conjugated verb in position 2, infinitive at the end) is called the Satzklammer..."}
```
**V2 Gap**: V2 U12 has "Konjunktiv II: Dreaming Big" (line 3503) which teaches würde + infinitive for wishes. V2 U12 also has the Halbjahresbilanz theme where future plans are discussed. But V2 has no explicit tip contrasting werden (future) vs. würde (hypothetical) with the same word order. This is a critical confusion point.
**Quality**: Excellent — the "same word order, completely different meaning" framing is memorable.
**Recommendation**: TAKE. Assign to V2 U12. Note that V2 doesn't introduce werden + infinitive as future tense in U12 (that's in V2 B1) — so this tip needs adaptation: frame as the contrast between will happen vs. would happen, mentioning werden for context but not requiring its full paradigm.
**Migration notes**: ASCII fix: wuerde → würde. The deepDive on Satzklammer can be simplified since V2 learners already know verb-final in Nebensätze.

---

### S-025: hätte and wäre: No würde Needed (TAKE)
**Type**: tip
**V1 Location**: line 4889 (V1 Unit 16, Lesson 2)
**Full Content**:
```js
{type:"tip",title:"haette and waere: No wuerde Needed",
 text:"haben and sein have their OWN Konjunktiv II forms.\nNever use wuerde haben or wuerde sein.\n\nCorrect: Ich haette gern ein Bier.\nWrong: Ich wuerde gern ein Bier haben.\n\nCorrect: Das waere toll.\nWrong: Das wuerde toll sein.\n\nThese forms are used constantly in spoken German."}
```
**V2 Gap**: V2 U11 line 3207 note says "Use wäre/hätte/könnte/müsste directly (no würde needed)" but this is buried in a table note. V2 U13 deepDive covers it. Neither has a dedicated tip as a standalone correction.
**Quality**: Excellent — the correct/wrong contrast format is maximally clear. "Used constantly in spoken German" is accurate and motivating.
**Recommendation**: TAKE. Assign to V2 U12. The explicit wrong-form warning prevents the most common Konjunktiv II learner error.
**Migration notes**: ASCII fix: haette → hätte, waere → wäre, wuerde → würde.

---

### S-026: kann vs. könnte tip (TAKE)
**Type**: tip
**V1 Location**: line 4908 (V1 Unit 16, Lesson 3)
**Full Content**:
```js
{type:"tip",title:"kann vs. koennte",
 text:"kann = can (ability, fact)\nIch kann schwimmen. (I can swim.)\n\nkoennte = could (polite, hypothetical)\nKoennte ich bitte...? (Could I please...?)\n\nUsing kann for requests sounds blunt:\nKann ich Wasser haben? = Can I have water? (direct)\nKoennte ich Wasser haben? = Could I have water? (polite)\n\nIn formal settings, ALWAYS use koennte.",
 deepDive:"koennte also expresses unrealized ability: Ich koennte morgen kommen. (I could come tomorrow, if needed.)"}
```
**V2 Gap**: V2 U12 has polite requests in Konjunktiv II context but no direct kann/könnte register comparison. The water example is highly memorable.
**Quality**: Good — the practical Wasser example is memorable and directly usable.
**Recommendation**: TAKE. Assign to V2 U12. Fits the Halbjahresbilanz theme (workplace politeness register).
**Migration notes**: ASCII fix: koennte → könnte.

---

### S-027: Politeness Ranking tip (TAKE)
**Type**: tip
**V1 Location**: line 4927 (V1 Unit 16, Lesson 3)
**Full Content**:
```js
{type:"tip",title:"Politeness Ranking",
 text:"From least to most polite:\n1. Machen Sie das! (Do that! = command)\n2. Koennen Sie das machen? (Can you do that? = direct)\n3. Koennten Sie das machen? (Could you do that? = polite)\n4. Wuerden Sie bitte machen? (Would you please? = very polite)\n5. Waere es moeglich, das zu machen? (Would it be possible? = most formal)\n\nFor strangers and formal settings, use level 3-5."}
```
**V2 Gap**: V2 U12 has no politeness register tip. The Halbjahresbilanz unit covers workplace German and Konjunktiv II — a 5-level politeness ranking fits perfectly.
**Quality**: Excellent — numbered scale is memorable and directly practical. Level 5 is B1 preview without being taught.
**Recommendation**: TAKE. This is the most culturally valuable tip in V1 U16 and has no equivalent anywhere in V2 units 9-12.
**Migration notes**: ASCII fix: koennen → können, koennten → könnten, wuerden → würden, waere → wäre, moeglich → möglich.

---

### S-028: Why war/hatte even in speech (TAKE)
**Type**: tip
**V1 Location**: line 5012 (V1 Unit 17, Lesson 1 — Präteritum unit)
**Full Content**:
```js
{type:"tip",title:"Why war/hatte even in speech?",
 text:"Most Präteritum forms sound stiff in conversation.\nBut war and hatte are the EXCEPTIONS:\n\n'Ich war müde.' sounds natural.\n'Ich bin müde gewesen.' sounds awkward.\n\n'Er hatte Hunger.' sounds natural.\n'Er hat Hunger gehabt.' sounds clumsy.\n\nRule: always use war/hatte in speech AND writing."}
```
**V2 Gap**: V2 U10 teaches Perfekt and uses war/hatte in stories but has no explicit tip explaining WHY these two verbs are always Präteritum even in spoken German. V2 U7 line 2104 has "Why Modals Prefer Präteritum" but nothing for sein/haben.
**Quality**: Good — the "sounds awkward/clumsy" framing is accurate and memorable.
**Recommendation**: TAKE. Assign to V2 U10. Place after the Perfekt mit sein lesson content. This is essential for naturalness in spoken German.
**Migration notes**: No ASCII issues. Update examples if needed for story context.

---

### S-030: als vs wie in Comparisons (TAKE)
**Type**: tip
**V1 Location**: line 4001 (V1 Unit 13, Lesson 3)
**Full Content**:
```js
{type:"tip",title:"als vs wie in Comparisons",
 text:"These two words cause the most confusion:\n\nals = than (used in COMPARATIVE: -er + als)\nwie = as (used in EQUALITY: so + adj + wie)\n\nDas Auto ist schneller ALS das Fahrrad. (faster than)\nDas Taxi ist so teuer WIE das Uber. (as expensive as)\n\nNever mix them: 'schneller wie' is a common spoken error but wrong in standard German.",
 deepDive:{title:"When do native speakers mix als and wie?",
  text:"In informal spoken German, especially in the South, you often hear 'schneller wie'...\nIn written German, exams, and formal speech, als for comparatives is strictly required."}}
```
**V2 Gap**: V2 U8 teaches comparatives and superlatives but has NO tip on als vs wie or the so...wie equality construction. The entire equality comparison system (so...wie, genauso...wie, nicht so...wie) is absent from V2 units 9-12.
**Quality**: Excellent — the "common spoken error" note is exactly what Goethe exam prep requires. The regional note in the deepDive is valuable cultural context.
**Recommendation**: TAKE. Assign to V2 U8 or V2 U11 (Christmas market uses many comparisons). This is a critical gap — PP55 requires covering the equality construction for the Goethe exam.
**Migration notes**: No ASCII issues. Update Uber example if needed.

---

### S-031: Perfekt sein/haben decision quiz set
**Type**: quiz steps (35 steps)
**V1 Location**: lines 2858-3163 (V1 Unit 10, Lessons 1-5)
**Description**: 35 mc/fb/drag_fill steps drilling the haben vs. sein choice, Partizip II formation, and complete Perfekt sentences. Includes:
- 12 mc steps on haben vs. sein selection with specific verbs
- 8 fb steps with Partizip II blanks
- 6 drag_fill steps on complete Perfekt sentence construction
- 9 match steps (infinitive → Partizip II pairs)
**V2 Gap**: V2 U10 has significantly fewer drill steps on haben/sein choice and Partizip II formation. The unit's density on the core grammar is lighter than V1.
**Quality**: Good — distractors are well-designed. Most steps use simple vocabulary already taught in V2.
**Recommendation**: TAKE 20 of the 35 steps — the ones using vocabulary known to V2 learners (fahren, gehen, kommen, essen, kaufen, schreiben, lesen, arbeiten). Skip the 15 using V1-specific vocabulary not in V2 (klettern, springen, reden as a verb).
**PP8 note**: Run hint-leak scan before integration. V1 hints at lines 2887, 2929, 2975 need review — some are borderline.
**Migration notes**: Field rename (nl→trg, en→src) required. Add `sSrc` to all fb/drag_fill steps.

---

### S-032: Wechselpräpositionen quiz set
**Type**: quiz steps (top 12 of 103)
**V1 Location**: lines 3597-3859 (V1 Unit 12, Lessons 1-5)
**Description**: 103 quiz steps across 5 lessons. Top 12 salvage candidates:
- 6 mc steps on stehen/stellen/liegen/legen selection
- 4 fb steps on article selection (dem/der/den/das)
- 2 drag_fill steps on location vs direction in sentences
**V2 Gap**: V2 U8 has limited Wechselpräp drill steps.
**Quality**: Good — the stehen/stellen/liegen/legen steps are particularly well-constructed.
**Recommendation**: TAKE the 12 listed above. The remaining 91 steps use vocabulary (Schrank, Regal, Flur, Sofa) that may or may not be in V2 U8 — check before using.
**PP8 note**: Full 103-step scan needed. V1 U12 hints at lines 3700-3800 include some that contain location words — check each.
**Migration notes**: Field rename required. Add `sSrc`.

---

### S-033: Reflexive pronoun drill set
**Type**: quiz steps (10 of 20)
**V1 Location**: lines 4398-4453 (V1 Unit 15, Lesson 1-2)
**Description**: 20 steps drilling accusative reflexive selection and dative reflexive switch.
**Recommendation**: TAKE 10 — the basic sich/mich/dich selection steps and the 2 dative switch steps (wasche mir die Hände). Skip the 10 health-vocabulary steps.

---

### S-034: Konjunktiv II drill set
**Type**: quiz steps (30 steps)
**V1 Location**: lines 4848-4935 (V1 Unit 16, Lessons 2-3)
**Description**: 30 steps drilling würde/hätte/wäre/könnte selection, polite requests, and wenn-clause structure.
**V2 Gap**: V2 U12 has minimal K-II quiz steps relative to the concept's importance.
**Quality**: Excellent — would/would have/would be three-way selection steps are well-designed.
**Recommendation**: TAKE all 30. This is the richest quiz salvage in V1 U16. Check vocabulary against V2 U12 word list before integration.
**PP8 note**: V1 hints at lines 4895, 4912, 4928 need scan — some hint at hätte/wäre by synonym.
**Migration notes**: ASCII fix throughout (wuerde/haette/waere/koennte → proper umlauts). Field rename. Add `sSrc`.

---

## Priority Order for Integration

### Tier 1 — Critical Gaps (integrate first)

| Priority | Item | Target Unit | Why |
|----------|------|-------------|-----|
| 1 | S-012 Dative Pronouns table | V2 U9 | Only complete dative pronoun paradigm; CRITICAL missing reference |
| 2 | S-009 Complete Partizip II Reference | V2 U10 | Master reference table; highest-frequency verbs |
| 3 | S-034 Konjunktiv II drill set (30 steps) | V2 U12 | V2 U12 density is low on K-II practice |
| 4 | S-027 Politeness Ranking | V2 U12 | Most culturally valuable tip; no V2 equivalent |
| 5 | S-030 als vs wie | V2 U8 or U11 | PP55: equality construction required for Goethe exam |

### Tier 2 — Strong Additions

| Priority | Item | Target Unit | Why |
|----------|------|-------------|-----|
| 6 | S-013f Feminine Has NO Contraction | V2 U8 | Common learner mistake, zero V2 coverage |
| 7 | S-013d Two hängens | V2 U8 | Most confusing Wechselpräp case |
| 8 | S-025 hätte/wäre: No würde Needed | V2 U12 | Prevents the most common K-II error |
| 9 | S-007 Bewegungsverben: Partizip II | V2 U10 | Regular vs irregular split within motion verbs |
| 10 | S-008 Zustandsverben: Partizip II | V2 U10 | State-change verb group essential for A2 |

### Tier 3 — Solid Additions

| Priority | Item | Target Unit | Why |
|----------|------|-------------|-----|
| 11 | S-011 Indefinite Article in Dative | V2 U7 | Table missing; kein deepDive valuable |
| 12 | S-003 Irregular Partizip II table | V2 U10 | Standalone table fills V2 gap |
| 13 | S-005 Verbs Without ge- table | V2 U10 | Two-group structure clarifies -ieren vs inseparable |
| 14 | S-017 auf vs über with sich freuen | V2 U9 | Common error; da-compound preview |
| 15 | S-028 Why war/hatte in speech | V2 U10 | Essential for spoken naturalness |
| 16 | S-016 Separable Reflexive Verbs | V2 U9 | Perfekt deepDive adds value |
| 17 | S-024 werden vs. würde | V2 U12 | Same word order, different meaning |
| 18 | S-026 kann vs. könnte | V2 U12 | Register awareness for workplace German |
| 19 | S-021 hätte full conjugation | V2 U12 | Full paradigm vs. single row |
| 20 | S-022 wäre full conjugation | V2 U12 | Full paradigm vs. single row |
| 21 | S-013e Core Four Contractions | V2 U8 | Extended contraction list deepDive |
| 22 | S-013a Dative Articles for Wo? | V2 U8 | Per-gender article display |
| 23 | S-013c Accusative Articles for Wohin? | V2 U8 | Proto-Germanic deepDive is excellent |
| 24 | S-031 Perfekt sein/haben drills (20) | V2 U10 | Density boost for core A2 grammar |
| 25 | S-032 Wechselpräp drills (12) | V2 U8 | Positional verb drill quality |

### MERGE Items (lower priority — edit existing V2 cards)

- S-006: Add full paradigm table before V2 U10's existing Bewegungsverben table
- S-010: Add nom/dat side-by-side table to V2 U7 dative lesson + deepDive mnemonic
- S-013b: Add dative summary to V2 U8 Wechselpräp section
- S-019: Add explicit mini-table to V2 U9 reflexive acc/dat deepDive
- S-015: Convert V2 U9 morning-routine teach cards into verb_table format

---

## Format Migration Checklist

ALL salvaged V1 content requires these conversions before integration:

1. **Umlaut fix** (critical): All V1 K-II content uses ASCII — wuerde→würde, haette→hätte, waere→wäre, koennte→könnte, koennen→können, moeglich→möglich
2. **Field rename**: `nl`→`trg`, `en`→`src`, `exampleEn`→`exampleSrc`
3. **Row format**: Old `rows:[["ich","form"]]` → new `rows:[{pronoun:"ich",form:"form",src:"translation"}]`
4. **Add `src` column**: All V1 verb_tables are bilingual but the translation is missing from some rows — add English
5. **Add `funFact`**: Required on all teach cards in new format (not on verb_table or tip)
6. **Add `pos`/`gender`**: Required on all teach cards (P59)
7. **Remove `phonetic`**: PP38 — hidden for Latin scripts
8. **Remove `kind`**: Old `kind:"word"` field not used in V2 format
9. **Remove `cognate`**: Old field, not in V2 format
10. **PP8 scan**: All salvaged quiz steps need hint-leak check before integration
11. **Add `sSrc`**: All salvaged fb/drag_fill steps need English sentence translation
12. **`board:true`**: Verify on all lessons receiving salvaged content

---

## Files Referenced

- `src/data/units-german.js` — V1 source (8,185 lines)
  - V1 U9: lines 2501-2839
  - V1 U10: lines 2840-3170
  - V1 U11: lines 3171-3568
  - V1 U12: lines 3569-3943
  - V1 U13: lines 3944-4155
  - V1 U14: lines 4156-4373
  - V1 U15: lines 4374-4776 (starts at 4374 as n:15)
  - V1 U16: lines 4777-4965 (Konjunktiv II verb tables at 4781-4883)
- `src/data/units-german-v2.js` — V2 target (7,164 lines)
  - V2 U7: lines 2009-2231
  - V2 U8: lines 2232-2524
  - V2 U9: lines 2525-2821
  - V2 U10: lines 2822-3082
  - V2 U11: lines 3083-3362
  - V2 U12: lines 3363-3812
- `docs/german/v1-salvage-report.md` — Companion high-level report (U1-U12 overview)
- `docs/german/v1-salvage-validated.md` — Validation decisions when available
