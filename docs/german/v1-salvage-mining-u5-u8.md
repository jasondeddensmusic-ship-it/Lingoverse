# V1 Salvage Mining: German V1 U5-U12 -> V2 U5-U8
**Agent**: Salvage Mining Agent
**Date**: 2026-03-26
**Method**: Full grep + read of V1 U7-U12, cross-checked against V2 U5-U8 content.

---

## Executive Summary

| V2 Unit | Theme | V1 Source | Key Gaps Found | Salvage Items |
|---------|-------|-----------|----------------|---------------|
| V2 U5 "Hunger!" | Modal verbs (present) | V1 U7 L3-L6 | mögen/möchten distinction missing from V1; V2 HAS all 6 present tables | SKIP (V2 more complete) |
| V2 U6 "Alles auf Deutsch" | Daily life | V1 U5 | (not mined, different theme) | — |
| V2 U7 "Der Arztbesuch" | Perfekt haben/sein + Dative | V1 U9-U11 | LARGE GAPS: V1 has 7 verb tables V2 lacks; dative pronoun table; Partizip II reference table | TAKE 7 items |
| V2 U8 "Müllprofessor" | Wechselpräpositionen | V1 U12 | V2 has tip only; V1 has 8 lessons (92+ steps) of Wechselpräp content | TAKE/MERGE 8 items |

---

## SECTION 1: V2 U5 vs V1 U7 — Modal Verbs

### V2 U5 Current State (lines 1334-1558)
V2 U5 "Hunger!" has:
- `können` table (line 1400): full 6-form table with src translations
- `müssen` table (line 1404): full 6-form table
- `wollen` table (line 1408): full 6-form table
- `dürfen / sollen / mögen` combined table (line 1425): all three in one card with mögen/möchten distinction

### V1 U7 L3-L6 Modal Tables
V1 has 6 separate verb tables for modals:
- L3: `können` — full 6-form (lines 2075)
- L4: `müssen`, `wollen` — separate tables (lines 2097, 2098)
- L6: `dürfen`, `sollen` — separate tables (lines 2143, 2144)
- V1 does NOT have a mögen/möchten table at all

### V1 U7 Tips NOT in V2
V1 L3 tip "Modal Verbs: The Big Pattern" (line 2074) — excellent explanation of verb-to-end rule with deepDive. V2 likely covers this, but the V1 deepDive text explaining WHY the verb goes to the end (V2 language, true V2) is strong.

V1 L4 tip "müssen vs wollen: The Key Contrast" (line 2099) — explicit contrast table, deepDive warning about `wollen` vs `werden`. V2 has this covered in context.

V1 L6 tip "dürfen vs sollen: Who Sets the Rule?" (line 2145) — explicit contrast, deepDive on `dürfen nicht` vs `müssen nicht`. V2 has less contrast content.

V1 L6 deepDive "dürfen nicht = must not (strong prohibition)" — this is a documented Goethe A1/A2 concept that V2 should explicitly teach.

### Recommendation: U5 Modal Verbs
V2 U5 modal tables are MORE complete than V1 (includes mögen/möchten; V1 skips it). No salvage needed for tables. However:

**ITEM S5-01**: V1 dürfen/müssen contrast deepDive (line 2145) — MERGE into V2 U5 dürfen card's deepDive if V2 lacks explicit `dürfen nicht` vs `müssen nicht` contrast.

---

## SECTION 2: V2 U7 vs V1 U9-U11 — Perfekt + Dative

### V2 U7 Current Verb Tables (lines 2009-2232)
- Line 2079: `Perfekt with haben` — has haben conjugation + Partizip II examples (irregular: nehmen, sprechen, trinken; regular: machen, kaufen, hören)
- Line 2103: `Modal Verbs: Präteritum` — 5 modals, full tables
- Line 1477: `Dative Articles After Prepositions` — in V2 U5 scope

### V2 U7 MISSING: Dative Full Paradigm Table
V2 U7 line 2083 has a TIP on dative case but **no verb_table for definite dative articles** (der→dem, die→der, das→dem, die pl.→den+n) and **no indefinite dative table** (ein→einem/einer/einem).

V1 U11 L1 has TWO dedicated verb_tables for this:

**ITEM S7-01 — TAKE**:
```js
{type:"verb_table",title:"Dative Article Changes",label:"Definite article: der/die/das to dative",groups:[
  {label:"Nominative (for comparison)",rows:[["","Maskulin","Feminin","Neutrum","Plural"],["der/die/das","der Vater","die Mutter","das Kind","die Kinder"]]},
  {label:"Dative: dem/der/dem/den+n",rows:[["","Maskulin","Feminin","Neutrum","Plural"],["dem/der/dem/den","dem Vater","der Mutter","dem Kind","den Kindern"]]}
],note:"Masculine and neuter both use dem.\nFeminine uses der.\nPlural uses den and nouns often add -n.",deepDive:{title:"Memory trick for dative articles",text:"Masculine and neuter BOTH become dem in the dative.\nFeminine becomes der, the same as the masculine nominative.\n\nA mnemonic for the three cases:\nNominative: der die das\nAccusative: den die das (only masculine changes)\nDative: dem der dem den\n\nDative is the only case where plural gets a special form (den + noun -n or -en)."}}
```
- V1 location: line 3179
- V2 gap: V2 U7 teaches dative via tip text only; no table format
- Quality: 5/5 — clean, includes nom comparison, has deepDive
- Recommendation: **TAKE** — add to V2 U7 L3 "Beim Hausarzt" after existing dative tip

**ITEM S7-02 — TAKE**:
```js
{type:"verb_table",title:"Indefinite Article in Dative",label:"ein/eine/ein to einem/einer/einem",groups:[
  {label:"Nominative (for comparison)",rows:[["","Maskulin","Feminin","Neutrum"],["ein/eine/ein","ein Freund","eine Freundin","ein Kind"]]},
  {label:"Dative: einem/einer/einem",rows:[["","Maskulin","Feminin","Neutrum"],["einem/einer/einem","einem Freund","einer Freundin","einem Kind"]]}
],note:"Masculine and neuter: einem.\nFeminine: einer.\nParallel to the definite article pattern.",deepDive:{title:"Kein in the dative",text:"Kein (no/not a) follows the same pattern as ein:\nkeinem Freund, keiner Freundin, keinem Kind, keinen Kindern.\n\nOnce you learn einem/einer/einem, you automatically know keinem/keiner/keinem too. These patterns are parallel throughout German grammar."}}
```
- V1 location: line 3190
- V2 gap: Missing entirely from V2 U7
- Quality: 5/5 — deepDive on kein extension is excellent pedagogy
- Recommendation: **TAKE** — add to V2 U7 L3 alongside S7-01

**ITEM S7-03 — TAKE**:
```js
{type:"verb_table",title:"Dative Pronouns",label:"Personal pronouns in the dative case",groups:[
  {label:"Singular",rows:[["Person","Nominative","Accusative","Dative"],["1st sing.","ich","mich","mir"],["2nd sing. (informal)","du","dich","dir"],["3rd masc.","er","ihn","ihm"],["3rd fem.","sie","sie","ihr"],["3rd neut.","es","es","ihm"]]},
  {label:"Plural",rows:[["Person","Nominative","Accusative","Dative"],["1st pl.","wir","uns","uns"],["2nd pl. (informal)","ihr","euch","euch"],["3rd pl. / formal","sie/Sie","sie/Sie","ihnen/Ihnen"]]}
],note:"Formal Sie (dative) = Ihnen (capital I).\nuns and euch are the same for accusative and dative.",deepDive:{title:"A shortcut: uns and euch do double duty",text:"Uns is both accusative and dative for wir (we).\nEuch is both accusative and dative for ihr (you all).\n\nEr sieht uns. (He sees us, accusative)\nEr hilft uns. (He helps us, dative)\n\nSame form, context makes the case clear."}}
```
- V1 location: line 3267
- V2 gap: V2 U7 teaches mir/dir pronouns via teach cards and tips but has NO consolidated pronoun reference table
- Quality: 5/5 — three-way case comparison in one table
- Recommendation: **TAKE** — add to V2 U7 L4 or new dative pronouns lesson

### V2 U7 MISSING: Irregular Partizip II Reference Table

V2 U7 line 2079 has a Perfekt table with 6 Partizip II examples. V1 U9 has a dedicated reference table:

**ITEM S7-04 — TAKE**:
```js
{type:"verb_table",title:"Irregular Partizip II Forms",label:"ge + changed stem + en",groups:[
  {label:"Key strong verbs",rows:[["schreiben","geschrieben"],["trinken","getrunken"],["essen","gegessen"],["lesen","gelesen"],["nehmen","genommen"]]}
],note:"These Partizip II forms end in -en, not -t.\nThe stem vowel changes. Memorise as vocabulary."}
```
- V1 location: line 2599
- V2 gap: V2 uses examples in the tip text but no standalone reference table
- Quality: 4/5 — concise, exactly the 5 highest-frequency irregular forms
- Recommendation: **TAKE** — upgrade V2 U7 Perfekt table or add as supplement

**ITEM S7-05 — TAKE**:
```js
{type:"verb_table",title:"Separable Verbs: Partizip II",label:"PREFIX + ge + STEM + t/en",groups:[
  {label:"Separable Partizip II",rows:[["einkaufen","eingekauft"],["aufräumen","aufgeräumt"],["anfangen","angefangen"],["mitbringen","mitgebracht"],["aufstehen","aufgestanden"],["anrufen","angerufen"]]}
],note:"ge- goes BETWEEN prefix and stem.\nStrong separable verbs (like anfangen) use -en ending."}
```
- V1 location: line 2640
- V2 gap: V2 U7 tip (line 2078) mentions inseparable/separable ge- rules in deepDive text but has no table format
- Quality: 4/5 — covers 6 key separable verbs with the critical pattern
- Recommendation: **TAKE** — add to V2 U7 deepDive or as a reference table in L3

**ITEM S7-06 — TAKE**:
```js
{type:"verb_table",title:"Verbs Without ge- in Partizip II",label:"No ge- for these groups",groups:[
  {label:"-ieren verbs (no ge-)",rows:[["telefonieren","telefoniert"],["studieren","studiert"],["fotografieren","fotografiert"],["reparieren","repariert"]]},
  {label:"Inseparable prefix verbs (no ge-)",rows:[["besuchen","besucht"],["erzählen","erzählt"],["verstehen","verstanden"],["erklären","erklärt"]]}
],note:"Neither group uses ge-.\nInseparable prefixes: be-, er-, ver-, ent-, ge-, zer-."}
```
- V1 location: line 2683
- V2 gap: V2 U7 line 2078 deepDive briefly mentions inseparable prefixes in text but has no table
- Quality: 4/5 — teaches two separate exception groups cleanly
- Recommendation: **TAKE** — critical for PP52; learners who see `besucht` vs `eingekauft` need this table

**ITEM S7-07 — TAKE** (highest priority):
```js
{type:"verb_table",title:"Complete Partizip II Reference",label:"Key forms to memorize",groups:[
  {label:"sein group (motion)",rows:[["gehen","ist gegangen","went"],["kommen","ist gekommen","came"],["fahren","ist gefahren","drove/traveled"],["fliegen","ist geflogen","flew"],["laufen","ist gelaufen","ran"],["schwimmen","ist geschwommen","swam"]]},
  {label:"sein group (state change)",rows:[["werden","ist geworden","became"],["bleiben","ist geblieben","stayed"],["einschlafen","ist eingeschlafen","fell asleep"],["aufwachen","ist aufgewacht","woke up"]]},
  {label:"haben group (activities)",rows:[["essen","hat gegessen","ate"],["lesen","hat gelesen","read"],["schreiben","hat geschrieben","wrote"],["kaufen","hat gekauft","bought"],["besuchen","hat besucht","visited"]]}
],note:"These are the highest-frequency verbs in German."}
```
- V1 location: line 3133 (end of V1 U10)
- V2 gap: V2 U7 has Perfekt with haben (L3) but Perfekt mit sein is in V2 U10. This master reference table spans both. V2 U10 has its own sein table (line 2896) but no cross-group reference.
- Quality: 5/5 — best cross-group Partizip II reference in V1; includes sein/haben distinction and 3-column format with English
- Recommendation: **TAKE** for V2 U10 "Deutsche Bahn" as a mastery consolidation table; ALSO useful as a reference handout in V2 U7

---

## SECTION 3: V2 U8 vs V1 U12 — Wechselpräpositionen

### V2 U8 Current Wechselpräpositionen Coverage
V2 U8 "Müllprofessor" (lines 2232-2525) contains:
- Line 2299: intro to Wechselpräpositionen in goals of L2 "Mülltrennung"
- Line 2310: **tip "Wechselpräpositionen: Richtung oder Ort?"** — good overview tip with the 9 prepositions, accusative vs dative contrast, key contractions im/ins/am/ans, deepDive on stellen vs stehen verbs
- Line 2311: teach card for `hängen` (covers both state and directional)
- Lines 2395, 2404, 2435, 2444, 2447, 2459, 2464: individual quiz steps using Wechselpräpositionen
- **No dedicated stehen/stellen, liegen/legen lessons**
- **No dedicated contractions lesson (im/ins/am/ans)**
- **No systematic Wo? + Dativ or Wohin? + Akkusativ practice sets**

### V1 U12 Coverage
V1 U12 "Wo oder Wohin?" has 7 full lessons (estimated 140+ steps):
- L1: Wechselpräpositionen intro (9 preps, core rule)
- L2: Wo? + Dativ (6 teach phrases + full practice)
- L3: Wohin? + Akkusativ (7 teach phrases + full practice)
- L4: stehen/stellen, liegen/legen (4 verb teach + full practice)
- L5: hängen, setzen, sitzen (5 teach + full practice)
- L6: Contractions im, ins, am, ans (4 teach + full practice)
- (implied L7: review)

### V1 U12 Items for V2 U8

**ITEM S8-01 — TAKE** (high priority):
```js
{type:"verb_table",title:"Dative vs Accusative: Side by Side",/* from V1 L3 tip */}
```
Specifically, V1 L3 (line 3677) tip "Dative vs Accusative: Side by Side":
```
Wo? (dative) vs Wohin? (accusative):
Das Buch liegt auf dem Tisch. (dative)
Ich lege das Buch auf den Tisch. (accusative)
Die Lampe hängt an der Wand. (dative)
Ich hänge die Lampe an die Wand. (accusative)
Only masculine changes: dem → den.
```
- V2 gap: V2 U8 tip gives the rule but not a minimal pair contrast
- Quality: 5/5 — the paired sentences are the most pedagogically effective way to show the contrast
- Recommendation: **TAKE** text into V2 U8 tip deepDive or new tip card

**ITEM S8-02 — TAKE**:
V1 L4 teach card for `stehen` (line 3706) — state verb with dative:
```js
{type:"teach",kind:"word",nl:"stehen",en:"to stand (location)"}
// + V1 L4 teach card for stellen (line 3708) — action verb with accusative
{type:"teach",kind:"word",nl:"stellen",en:"to place / put upright"}
```
- V2 gap: V2 U8 line 2281 has `stellen` teach card but NO `stehen` teach card. The state/action pair is incomplete.
- Quality: 5/5 — stehen is Goethe A1 vocabulary
- Recommendation: **TAKE** `stehen` teach card (migrate to trg/src format); pair with existing V2 `stellen`

**ITEM S8-03 — TAKE**:
V1 L4 teach cards for `liegen` (line 3710) and `legen` (line 3712):
```js
{type:"teach",kind:"word",nl:"liegen",en:"to lie / be lying flat"}
{type:"teach",kind:"word",nl:"legen",en:"to lay / place flat"}
```
- V2 gap: Neither `liegen` nor `legen` appears as a teach card in V2 U8
- Quality: 5/5 — both are Goethe A2 vocabulary; liegen is one of the 500 most common German verbs
- Recommendation: **TAKE** both; migrate to trg/src format

**ITEM S8-04 — TAKE** (high priority):
V1 L4 tip "The Verb Pair Logic" (line 3704):
```
stehen = to stand (location, already there) + DATIVE
stellen = to place upright (action, movement) + ACCUSATIVE
liegen = to lie flat (location, already there) + DATIVE
legen = to lay flat (action, movement) + ACCUSATIVE
State verb = dative. Action verb = accusative.
```
- V2 gap: V2 U8 tip (line 2310) covers the directional rule but does NOT systematically connect stehen/stellen/liegen/legen to the Wo/Wohin framework
- Quality: 5/5 — the cleanest summary of the entire positional verb system
- Recommendation: **TAKE** as new tip card in V2 U8 L2 or L3

**ITEM S8-05 — TAKE** (high priority):
V1 L5 tip "Two hängens: One Word, Two Functions" (line 3751):
```
hängen (intransitive) = to be hanging (state): Das Bild hängt an der Wand. (dative)
hängen (transitive) = to hang up (action): Ich hänge das Bild an die Wand. (accusative)
Test: if there is a direct object being moved, it is the action version.
```
deepDive: strong/weak forms, past tense distinction (gehangen vs gehängt).
- V2 gap: V2 U8 line 2311 has `hängen` teach card that mentions both uses but the tip explanation is much cleaner in V1
- Quality: 5/5 — hängen is the paradigm example for all Wechselpräpositionen
- Recommendation: **MERGE** V1 tip deepDive into V2 U8 line 2311 hängen card's deepDive

**ITEM S8-06 — TAKE** (high priority):
V1 L5 teach cards for `sitzen` (line 3753) and `sich setzen` (line 3755):
```js
{type:"teach",kind:"word",nl:"sitzen",en:"to sit / be sitting"}
{type:"teach",kind:"word",nl:"sich setzen",en:"to sit down (reflexive)"}
```
- V2 gap: Neither appears in V2 U8 as teach cards
- Quality: 4/5 — sitzen is Goethe A1; sich setzen is A2; both needed for completeness
- Recommendation: **TAKE** both; migrate to trg/src format

**ITEM S8-07 — TAKE** (high priority):
V1 L6 teach cards and tip for contractions (lines 3788-3800):
```js
{type:"teach",kind:"phrase",nl:"im (in + dem)",en:"in the (dative, location)"}
{type:"teach",kind:"phrase",nl:"ins (in + das)",en:"into the (accusative, direction)"}
{type:"teach",kind:"phrase",nl:"am (an + dem)",en:"at the / on the (dative, location)"}
{type:"teach",kind:"phrase",nl:"ans (an + das)",en:"to the (accusative, direction)"}
{type:"teach",kind:"phrase",nl:"aufs (auf + das)",en:"onto the (neuter, accusative)"}
```
V1 L6 tip "The Core Four Contractions" + deepDive on full list + tip "Feminine Has NO Contraction"
- V2 gap: V2 U8 line 2310 tip mentions `im/ins/am/ans` in passing but has no dedicated teach cards for contractions
- Quality: 5/5 — V1 treatment is the best in the codebase; deepDive on full contraction list is excellent
- Recommendation: **TAKE** all 4 core contractions as teach cards; include the "Feminine Has NO Contraction" tip

**ITEM S8-08 — TAKE** (high priority):
V1 L1 tip "Quick Memory Aid" (line 3595):
```
Ask yourself:
Wo? = WHERE is it? Describes a STATE. Use DATIVE.
Wohin? = WHERE TO? Describes MOVEMENT. Use ACCUSATIVE.
Dative = sitting still.
Accusative = on the move.
```
deepDive: "Static vs dynamic: the universal test"
- V2 gap: V2 U8 has the rule spread across multiple places; this single crystallized memory aid is missing
- Quality: 5/5 — shortest possible formulation of the core rule
- Recommendation: **TAKE** as standalone tip or add to existing V2 U8 tip

**ITEM S8-09 — MERGE**:
V1 L5 tip "The Full Positional Verb System" (line 3781):
```
State (Wo? + dative): stehen, liegen, sitzen, hängen (intrans.)
Action (Wohin? + accusative): stellen, legen, setzen / sich setzen, hängen (trans.)
Memory key: the action verb takes a direct object.
```
- V2 gap: No consolidated summary exists in V2
- Quality: 5/5 — ideal as a review card at end of Wechselpräpositionen sequence
- Recommendation: **TAKE** as final tip in V2 U8 Wechselpräpositionen sequence

---

## SECTION 4: V1 U7 — Additional Vocab Gaps for V2 U2

The transport vocab from V1 U7 L1 was the source for V2 U2 "Entschuldigung, wo ist...?" and V1 U7 L5 "Am Bahnhof" for V2 U10 "Deutsche Bahn". Checking for gaps:

**ITEM S2-01 — CHECK for V2 U2**:
V1 U7 L7 "Die Stadt" (lines 2163-2184) has 8 city place teach cards:
- die Post, die Bank, die Apotheke, das Krankenhaus, die Schule, das Rathaus, der Supermarkt, die Polizei

V2 U2 focus is directions/transport. V2 U7 has die Apotheke and das Krankenhaus already. V2 should already have die Bank, die Polizei, das Rathaus if they are taught in A1-A2. This requires a cross-check against all V2 U1-U8 teach cards before deciding.

**ITEM S2-02 — CHECK for V2 U2**:
V1 U7 L1 teach card `das Gleis` (line 2124) and `der Fahrplan` (line 2123) — both Goethe A2 vocabulary.
V2 U10 is "Deutsche Bahn" — check whether these teach cards exist there.

---

## SECTION 5: Summary Table — All Salvage Items

| ID | V1 Location | Type | Content | Target V2 Unit | Priority | Recommendation |
|----|------------|------|---------|---------------|----------|----------------|
| S5-01 | V1 U7 L6, line 2145 | deepDive text | dürfen nicht vs müssen nicht contrast | V2 U5 | Medium | MERGE into V2 U5 dürfen card |
| S7-01 | V1 U11 L1, line 3179 | verb_table | Definite dative articles (der→dem etc.) | V2 U7 | HIGH | TAKE |
| S7-02 | V1 U11 L1, line 3190 | verb_table | Indefinite dative articles (ein→einem etc.) | V2 U7 | HIGH | TAKE |
| S7-03 | V1 U11 L2, line 3267 | verb_table | Dative personal pronouns (mir/dir/ihm/ihr) | V2 U7 | HIGH | TAKE |
| S7-04 | V1 U9 L2, line 2599 | verb_table | Irregular Partizip II forms (5 key verbs) | V2 U7 | Medium | TAKE |
| S7-05 | V1 U9 L3, line 2640 | verb_table | Separable verbs Partizip II | V2 U7 | Medium | TAKE |
| S7-06 | V1 U9 L4, line 2683 | verb_table | Verbs without ge- (-ieren + inseparable) | V2 U7 | HIGH | TAKE |
| S7-07 | V1 U10 end, line 3133 | verb_table | Complete Partizip II reference (sein+haben) | V2 U10 | HIGH | TAKE for U10 |
| S8-01 | V1 U12 L3, line 3677 | tip text | Wo/Wohin minimal pair contrast | V2 U8 | HIGH | TAKE |
| S8-02 | V1 U12 L4, line 3706 | teach card | stehen (location, dative) | V2 U8 | HIGH | TAKE |
| S8-03 | V1 U12 L4, lines 3710-3712 | teach cards | liegen + legen | V2 U8 | HIGH | TAKE |
| S8-04 | V1 U12 L4, line 3704 | tip | Verb Pair Logic (stehen/stellen/liegen/legen) | V2 U8 | HIGH | TAKE |
| S8-05 | V1 U12 L5, line 3751 | tip+deepDive | Two hängens distinction | V2 U8 | HIGH | MERGE into V2 U8 hängen card |
| S8-06 | V1 U12 L5, lines 3753-3755 | teach cards | sitzen + sich setzen | V2 U8 | Medium | TAKE |
| S8-07 | V1 U12 L6, lines 3790-3800 | teach cards+tip | im/ins/am/ans contractions | V2 U8 | HIGH | TAKE |
| S8-08 | V1 U12 L1, line 3595 | tip | Wo=dative, Wohin=accusative memory aid | V2 U8 | HIGH | TAKE |
| S8-09 | V1 U12 L5, line 3781 | tip | Full positional verb system summary | V2 U8 | HIGH | TAKE |

**Total salvage items**: 17
**TAKE**: 14
**MERGE**: 3
**SKIP**: 0

---

## SECTION 6: Notes on Migration Format

All V1 content uses the legacy `nl`/`en` format. All items marked TAKE or MERGE must be converted to the new `trg`/`src` format before insertion into V2.

Conversion rules:
- `nl` → `trg`
- `en` → `src`
- `exampleEn` → `exampleSrc`
- Add `funFact` to all teach cards (required for new format)
- Add `pos` and `gender` tags to all teach cards (required for new format)
- V1 `verb_table` rows using `[["pronoun","form"]]` format must be checked against V2 pronoun-object format: `{pronoun:"...",form:"...",src:"..."}` — add `src` translations

### POS and Gender Tags Required for Teach Cards

| Item | Word | POS | Gender |
|------|------|-----|--------|
| S8-02 | stehen | verb | null |
| S8-03 | liegen | verb | null |
| S8-03 | legen | verb | null |
| S8-06 | sitzen | verb | null |
| S8-06 | sich setzen | verb | null |
| S8-07 | im | part | null |
| S8-07 | ins | part | null |
| S8-07 | am | part | null |
| S8-07 | ans | part | null |

---

## SECTION 7: V1 Content Quality Assessment

V1 U12 is the highest-quality V1 unit for salvage. Every lesson is systematic, has excellent deepDives, and the verb pair system (stehen/stellen/liegen/legen/sitzen/setzen/hängen) is taught more thoroughly in V1 than anywhere in V2.

V1 U11 dative pronoun and article tables are the cleanest reference tables in the entire V1 corpus. They include 3-way case comparison (nom/acc/dat) which V2 currently lacks.

V1 U9-U10 Partizip II reference tables are complete and correct. V2 U7's Perfekt coverage is good but would benefit from the specialized exception tables (S7-04, S7-05, S7-06).

---

*End of mining report. Total items: 17. Proceed to validation phase.*
