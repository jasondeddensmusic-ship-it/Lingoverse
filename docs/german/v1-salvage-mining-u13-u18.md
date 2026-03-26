# V1 Salvage Mining Report — German v2 Units 13-18

> Generated: 2026-03-26 | V1 source: `src/data/units-german.js` (lines 4966-6922)
> V2 target: `src/data/units-german-v2.js` (lines 3813-5460)
> Scope: V2 U13 Die Bewerbung, U14 Erster Arbeitstag, U15 Reise nach Hamburg, U16 Der Streit, U17 Karneval, U18 Im Biergarten

---

## Executive Summary

| V1 Unit | V1 Title | Lines | V2 Target | Items Found | TAKE | MERGE | SKIP |
|---------|----------|-------|-----------|-------------|------|-------|------|
| V1 U17 | Es war einmal... | 4966-5317 | V2 U13, U18 | 24 | 14 | 6 | 4 |
| V1 U18 | Es wird gebaut! | 5318-5508 | V2 U14 | 12 | 4 | 5 | 3 |
| V1 U19 | Der Mann, der... | 5509-5736 | V2 U14, U20 | 11 | 2 | 5 | 4 |
| V1 U20 | Des Mannes Buch | 5737-5969 | V2 U15, U16 | 10 | 2 | 5 | 3 |
| V1 U21 | Er sagte, er sei... | 5970-6220 | V2 U16 | 7 | 0 | 3 | 4 |
| V1 U22 | Um zu verstehen... | 6221-6469 | V2 U17 | 8 | 1 | 4 | 3 |
| V1 U23 | Trotzdem und deshalb | 6470-6724 | V2 U18, U20 | 6 | 1 | 3 | 2 |
| V1 U24 | Die Bewerbung | 6725-6921 | V2 U13 | 9 | 5 | 2 | 2 |
| **TOTAL** | | | | **87** | **29** | **33** | **25** |

**Key finding**: V2 U13-18 already contains most grammar tables and tip cards. The salvage value is concentrated in: (1) missing Präteritum sub-tables (sein, haben, regular, mixed), (2) deepDive enrichment for existing tips, (3) formal writing tips from V1 U20 and U24, and (4) adverbial connector coverage gaps in V2 U18.

---

## CRITICAL: V2 Coverage Before Mining

V2 U13-18 already has these verb tables (NO need to add):
- Präteritum: Starke Verben (schrieb paradigm) — V2 U13
- Konjunktiv II: würde + Infinitiv — V2 U13
- Konjunktiv II: Modalverben — V2 U13
- Passiv Präsens: werden + Partizip II — V2 U14
- Passiv Präteritum: wurde + Partizip II — V2 U14
- Relativpronomen: der/die/das (nominative/accusative/dative) — V2 U14
- Der Genitiv: Artikel und Endungen — V2 U15
- N-Deklination: der Kollege — V2 U15
- Infinitivklauseln im Vergleich — V2 U17
- als vs wenn (when) — V2 U18
- Verben mit festen Präpositionen — V2 U18

V2 U13-18 already has these tip cards (NO need to duplicate):
- Präteritum tip (spoken vs written) — V2 U13
- Konjunktiv II tip (polite mood) — V2 U13
- Modal Konjunktiv II tip — V2 U13
- Formal vs informell tip — V2 U13
- Passiv Präsens tip + Warum Passiv im Büro deepDive — V2 U14
- Passiv Präteritum tip + von/durch deepDive — V2 U14
- Relativsätze tip + Feierabend tip — V2 U14/U16
- Genitive case tip + N-Deklination tip — V2 U15
- Genitive prepositions tip (während/wegen/trotz/statt/innerhalb) — V2 U15
- D/A/CH regional variants tip — V2 U15
- nachdem + Plusquamperfekt tip — V2 U16
- Indirekte Fragen tip — V2 U16
- Five affixes tip — V2 U16
- um...zu tip + vier Infinitivkonstruktionen tip — V2 U17
- Drei Karnevale tip — V2 U17
- als vs wenn tip — V2 U18

---

## V1 UNIT 17: Es war einmal... (Präteritum)

**V1 location**: lines 4966-5317
**V2 target**: U13 (Präteritum needed for CV writing context) + U18 (als/wenn)

### ITEM 17.1 — Verb Table: Präteritum sein
**Type**: verb_table
**V1 location**: line 4980-4991
**Content**:
```
title: "Präteritum: sein (to be)"
rows: ich war / du warst / er war / wir waren / ihr wart / sie/Sie waren
note: "Only 4 forms: war, warst, wart, waren. ich and er/sie/es share: war."
```
**V2 gap**: V2 U13 has "Präteritum: Starke Verben" showing strong verb vowel changes but NO sein/haben paradigm tables. CV writing lesson introduces war/hatte in examples but never tabulates them explicitly.
**Quality**: Excellent. Clean, minimal, accurate.
**Recommendation**: **TAKE** — Insert as second verb_table in V2 U13 L2 (after Starke Verben table). Rename rows to use `src:` instead of `en:` per V2 format.

### ITEM 17.2 — Verb Table: Präteritum haben
**Type**: verb_table
**V1 location**: line 4999-5010
**Content**:
```
title: "Präteritum: haben (to have)"
rows: ich hatte / du hattest / er hatte / wir hatten / ihr hattet / sie/Sie hatten
note: "Only 4 forms: hatte, hattest, hattet, hatten. ich and er/sie/es share: hatte."
```
**V2 gap**: Same as sein above. V2 U13 teaches Konjunktiv II with hätte but never shows the Präteritum hatte paradigm.
**Quality**: Excellent.
**Recommendation**: **TAKE** — Insert alongside sein table in V2 U13 L2.

### ITEM 17.3 — Tip: Why war/hatte even in speech
**Type**: tip (no deepDive)
**V1 location**: line 5012
**Content**:
```
title: "Why war/hatte even in speech?"
text: "Most Präteritum forms sound stiff in conversation. But war and hatte are EXCEPTIONS:
'Ich war müde.' sounds natural.
'Ich bin müde gewesen.' sounds awkward.
Rule: always use war/hatte in speech AND writing."
```
**V2 gap**: V2 U13 has a comprehensive Präteritum tip covering CV vs spoken register, but does NOT explicitly call out the war/hatte exception rule. Learners reading the V2 tip will understand the concept but may not internalize this specific rule.
**Quality**: Good. Concise pedagogical rule.
**Recommendation**: **MERGE** — Graft as deepDive onto V2 U13's existing Präteritum tip. Title: "Die war/hatte-Ausnahme." Translate to German to match V2 U13 target-language tip style.

### ITEM 17.4 — Verb Table: Regular Präteritum (machen paradigm)
**Type**: verb_table
**V1 location**: line 5040-5051
**Content**:
```
title: "Regular Präteritum: machen"
rows: ich machte / du machtest / er machte / wir machten / ihr machtet / sie/Sie machten
note: "ich = er/sie/es (both -te). wir = sie/Sie (both -ten). Same for ALL regular verbs."
```
**V2 gap**: V2 U13 "Präteritum: Starke Verben" table shows only strong verb vowel changes. Regular -te paradigm is never shown in a full table. The V2 tip mentions "Schwache Verben fügen -te hinzu" but shows no paradigm.
**Quality**: Good.
**Recommendation**: **TAKE** — Insert as separate verb_table in V2 U13. This is a genuine gap.

### ITEM 17.5 — Tip: The -ete Exception
**Type**: tip
**V1 location**: line 5053
**Content**:
```
title: "The -ete exception"
text: "arbeiten → arbeitete (not arbeitte). warten → wartete. reden → redete.
Why? 'arbeittes' is impossible to pronounce. The extra -e- is a pronunciation helper."
```
**V2 gap**: V2 U13 tip mentions arbeiten/arbeitete in passing but never explains the pronunciation rule.
**Quality**: Good. Brief and memorable.
**Recommendation**: **MERGE** — Graft as deepDive onto new regular Präteritum verb_table note (Item 17.4) or as a separate brief tip. Convert to German target-language style.

### ITEM 17.6 — Verb Table: Irregular Präteritum Group 1 (gehen/kommen)
**Type**: verb_table
**V1 location**: lines 5082-5099
**Content**:
```
title: "Irregular Präteritum Pattern"
groups: gehen → ging (full paradigm) + kommen → kam (full paradigm)
note: "ich = er/sie/es (no ending). du adds -st. ihr adds -t. wir/sie/Sie add -en."
```
**V2 gap**: V2 U13 "Präteritum: Starke Verben" shows a REFERENCE LIST (gehen/kam/schrieb etc.) plus ONE full conjugation (schreiben/schrieb). It does NOT show gehen or kommen with full paradigms. These are the two most frequent irregular verbs.
**Quality**: Excellent. Covers the 2 highest-frequency strong verbs.
**Recommendation**: **TAKE** — The V2 table shows schrieb paradigm. Add gehen/kommen as a second table group or as a separate verb_table titled "Präteritum: gehen und kommen."

### ITEM 17.7 — Verb Table: Irregular Präteritum Group 2 (nehmen/sprechen/schreiben)
**Type**: verb_table
**V1 location**: lines 5127-5151
**Content**:
```
title: "Irregular Präteritum: Group 2"
groups: nehmen/sprach rows (ich/du/er) + schreiben/schrieb rows (ich/du/er)
note: "Same pattern: no -te, vowel changes. du always adds -st. wir/sie always add -en."
```
**V2 gap**: V2 shows schrieb paradigm but not nahm, sprach. Both appear in CV-writing contexts in V2 U13.
**Quality**: Good. Partially redundant with V2 (schrieb already shown), but nahm/sprach rows are new.
**Recommendation**: **MERGE** — Extract only nehmen/nahm and sprechen/sprach rows. Add as additional group to existing V2 "Präteritum: Starke Verben" table. schreiben/schrieb already covered.

### ITEM 17.8 — Tip: Vowel change groups
**Type**: tip (no deepDive)
**V1 location**: line 5152 (inside L4)
**Content**:
```
title: "Vowel change groups"
text: "e → a: nahm, sprach, las, gab, kam, sah, fand
ei → ie: schrieb (schreiben → schrieb)
a → u: trug (tragen → trug)
e → i: ging (gehen → ging)
The e → a group is by far the largest."
```
**V2 gap**: V2 U13 lists strong verbs but provides no grouping pattern to help learners predict forms. This is a pedagogical gap — learners seeing a new strong verb need a pattern-recognition strategy.
**Quality**: Excellent. One of the highest-value tips in V1 U17.
**Recommendation**: **TAKE** — Add as tip in V2 U13 after the Starke Verben table. Convert to German, expand to include the e → a group as a memory strategy.

### ITEM 17.9 — Verb Table: Mixed Verbs (brachte/dachte/wusste)
**Type**: verb_table
**V1 location**: lines 5190-5220 (inside L5)
**Content**:
```
title: "Mixed Verbs in Präteritum"
groups: bringen → brachte (ich/du/er rows) + denken → dachte + wissen → wusste
```
**V2 gap**: V2 U13 has NO mixed verb content. brachte, dachte, wusste do not appear anywhere in V2 U13. These are Goethe B1 list words.
**Quality**: Excellent. Genuine vocabulary and grammar gap.
**Recommendation**: **TAKE** — This is the highest-priority gap in V2 U13. Mixed verbs need their own verb_table plus teach cards for each lemma.

### ITEM 17.10 — Tip: Mixed verb pattern
**Type**: tip (no deepDive)
**V1 location**: line 5178 (inside L5)
**Content**:
```
title: "The mixed verb pattern"
text: "Regular: stem + -te. Irregular: vowel change, NO -te. Mixed: vowel change AND adds -te.
bringen → brachte, denken → dachte, wissen → wusste, kennen → kannte, nennen → nannte"
```
**V2 gap**: V2 U13 teaches regular and irregular Präteritum types but never identifies the mixed category. Learners will be confused when they encounter brachte.
**Quality**: Excellent. The three-type taxonomy is essential.
**Recommendation**: **TAKE** — Add as tip in V2 U13 alongside mixed verb table (Item 17.9). Convert to German style.

### ITEM 17.11 — Teach cards: wusste and kannte with deepDives
**Type**: teach card (with deepDive)
**V1 location**: lines 5084-5089 (wusste at line ~5084, kannte at ~5086)
**Content**:
```
wusste: deepDive "wissen vs kennen" — two verbs for 'to know', with examples
kannte: kennen = to know a person/place (contrasted with wissen)
```
**V2 gap**: V2 U13 quizzes auf Verumius' job description context but has no teach card for wissen or kennen. Both appear in B1 Goethe list. The wissen/kennen distinction deepDive is one of the most common learner confusions.
**Quality**: Excellent deepDive. Production-ready.
**Recommendation**: **TAKE** — Extract as two teach cards for V2 U13. Reformat nl/en → trg/src. Add pos:"verb", funFact (etymology if available).

### ITEM 17.12 — Tip: als vs wenn decision rule (L6)
**Type**: tip
**V1 location**: line 5128 (inside deu17l6)
**Content**:
```
title: "als vs wenn: The Decision Rule"
text: "TWO questions: (1) Past AND one time? → als. (2) Repeated, present, or future? → wenn.
Keyword clues for wenn: immer, oft, jedes Mal, meistens."
```
**V2 gap**: V2 U18 "Im Biergarten" has an "als vs wenn" verb_table AND a separate als/wenn tip. COVERED. No gap.
**Quality**: Good but redundant with V2.
**Recommendation**: **SKIP** — V2 U18 covers this fully.

### ITEM 17.13 — Tip: Word order after als/wenn (L6)
**Type**: tip
**V1 location**: line 5136 (inside deu17l6)
**Content**:
```
title: "Word order after als/wenn"
text: "Both als and wenn send the verb to the END. Main clause after comma starts with verb.
Als ich ankam, WAR es dunkel."
```
**V2 gap**: V2 U18's als/wenn table and tip cover this. COVERED.
**Recommendation**: **SKIP** — Covered by V2 U18.

### ITEM 17.14 — Tip: Building a story chain (L7)
**Type**: tip
**V1 location**: line 5166 (inside deu17l7)
**Content**:
```
title: "Building a story: the chain"
text: "1. Set the scene: Es war einmal... / Damals...
2. Chain events: dann, danach, daraufhin
3. Add surprise: plötzlich, auf einmal
4. Signal time: eines Tages, am nächsten Morgen
5. End: am Ende, schließlich"
```
**V2 gap**: V2 U13 focuses on CV/interview writing. V2 has no storytelling connector tip. However, the narrative connectors (dann, danach, plötzlich) are relevant to the Verumius story format throughout all V2 units. A storytelling tip could fit in V2 U24 (Einjährig — reflection on one year) better than U13.
**Quality**: Good. More relevant for higher units.
**Recommendation**: **SKIP for U13-18** — Better placed in V2 U24 during build phase. Flag for V2 U24 agent.

### ITEM 17.15 — Tip: Präteritum complete picture (L8)
**Type**: tip
**V1 location**: line 5185 (inside deu17l8)
**Content**:
```
title: "Präteritum: The Complete Picture"
text: "Three types: (1) Regular: stem + -te. (2) Irregular: vowel change, no -te.
(3) Mixed: vowel change + -te. Plus war/hatte. Plus als vs wenn."
```
**V2 gap**: This is a review summary. V2 U13 ends with a tip on register (Formell vs informell) that serves as its summary. A separate Präteritum review tip would be redundant given the individual tips above.
**Recommendation**: **MERGE** — Extract the three-type taxonomy sentence only. Graft as opening sentence of the mixed verb tip (Item 17.10). Drop als/wenn reference (not in V2 U13).

---

## V1 UNIT 18: Es wird gebaut! (Passive Voice)

**V1 location**: lines 5318-5508
**V2 target**: U14 Erster Arbeitstag

### ITEM 18.1 — Verb Table: werden (present tense)
**Type**: verb_table
**V1 location**: line 5378
**Content**:
```
title: "werden (present tense)"
groups: Singular [ich werde, du wirst, er/sie/es wird] + Plural [wir werden, ihr werdet, sie/Sie werden]
note: "Werden is irregular. Memorize the vowel changes: e > i in du/er forms."
deepDive: "Werden has three roles: (1) main verb 'to become', (2) passive auxiliary, (3) future auxiliary."
```
**V2 gap**: V2 U14 has "Passiv Präsens: werden + Partizip II" table but that table shows ONLY passive constructions (wird gemacht, wird gebaut). It does NOT show werden's own full conjugation (ich werde, du wirst, etc.). Learners need this to conjugate passive sentences themselves.
**Quality**: Excellent. The three-role deepDive is production-ready.
**Recommendation**: **TAKE** — Insert as preliminary verb_table before V2 U14's passive tables. The deepDive on werden's three roles is particularly valuable.

### ITEM 18.2 — Verb Table: werden (Präteritum)
**Type**: verb_table
**V1 location**: line 5401
**Content**:
```
title: "werden (Präteritum)"
groups: Singular [ich wurde, du wurdest, er/sie/es wurde] + Plural [wir wurden, ihr wurdet, sie/Sie wurden]
note: "Used in passive Präteritum, very common in news and written German."
deepDive: "In spoken German, Perfekt passive (ist gemacht worden) sometimes preferred. But Präteritum passive dominates in news."
```
**V2 gap**: V2 U14 "Passiv Präteritum: wurde + Partizip II" shows passive sentences but NOT the full wurde conjugation paradigm. Same gap as Item 18.1 for past tense.
**Quality**: Good. Note and deepDive are production-ready.
**Recommendation**: **TAKE** — Insert as preliminary verb_table before V2 U14's Passiv Präteritum table.

### ITEM 18.3 — Tip: ge- or not ge-?
**Type**: tip (with deepDive)
**V1 location**: line 5415
**Content**:
```
title: "ge- or not ge-?"
text: "Regular: ge- + stem + -t (gemacht). Irregular: ge- + changed stem + -en (geschrieben).
Inseparable prefixes (be-, ver-, er-, ent-, emp-, zer-): NO ge- (bezahlt, verkauft).
Verbs ending in -ieren: NO ge- (repariert, studiert)."
deepDive: "Separable prefix verbs place ge- between prefix and stem: aufgemacht, zugemacht, eingeladen."
```
**V2 gap**: V2 U14 uses Partizip II forms in passive constructions throughout but never explains the ge- rules systematically. PP52 risk: learners encounter irregular and prefixed Partizip II in quizzes without having been taught the rules.
**Quality**: Excellent. One of the highest-value tips in V1 U18.
**Recommendation**: **TAKE** — Add as tip in V2 U14 before passive quizzes begin. Convert to German tip style.

### ITEM 18.4 — Tip: Active vs Passive
**Type**: tip (with deepDive)
**V1 location**: line 5393
**Content**:
```
title: "Active vs Passive"
text: "Active: Der Mann baut das Haus. Passive: Das Haus wird gebaut.
In passive, the object becomes the subject. The doer can be omitted or added with 'von'."
deepDive: "Vorgangspassiv (werden + PP) focuses on ACTION happening. Different from Zustandspassiv (sein + PP, completed state)."
```
**V2 gap**: V2 U14 tip "Passiv Präsens: werden + Partizip II" covers the structure but does NOT distinguish Vorgangspassiv from Zustandspassiv. This is a genuine B1 exam distinction.
**Quality**: Good deepDive. The Vorgangspassiv/Zustandspassiv distinction is exam-grade content.
**Recommendation**: **MERGE** — Graft the Vorgangspassiv/Zustandspassiv deepDive onto V2 U14's existing passive tip. The main text is redundant; the deepDive is the prize.

### ITEM 18.5 — Tip: Passive + Modal Verbs
**Type**: tip
**V1 location**: line 5472
**Content**:
```
title: "Passive + Modal Verbs"
text: "Das muss gemacht werden. Das kann repariert werden. Das soll gebaut werden.
Modal is conjugated. Werden stays infinitive at the end."
deepDive: "Word order in subordinate clauses: ...weil das gemacht werden muss. Modal goes to very end."
```
**V2 gap**: V2 U14 does NOT include passive + modal constructions. V2 U19 (Ausländerbehörde) has "passive with modals" as a topic per its subtitle. So this content belongs to U19, not U14.
**Recommendation**: **SKIP for U13-18** — Flag for V2 U19 agent.

### ITEM 18.6 — Tip: Passive Perfekt (worden vs geworden)
**Type**: tip
**V1 location**: line 5492
**Content**:
```
title: "Passive Perfekt"
text: "ist gemacht worden (NOT geworden!).
geworden = became (Er ist Arzt geworden).
worden = passive auxiliary (Es ist gebaut worden)."
deepDive: "Präteritum passive more common in writing; Perfekt passive more common in speech."
```
**V2 gap**: V2 U14 covers Präsens and Präteritum passive only. Passive Perfekt is not mentioned. This is a genuine gap and a classic learner mistake (worden vs geworden).
**Recommendation**: **MERGE** — Add as brief tip (worden/geworden distinction only) in V2 U14's final lesson. The full Perfekt passive paradigm can be taught in V2 U19 or later.

### ITEM 18.7 — Tip: News Passive Phrases
**Type**: tip
**V1 location**: line 5517
**Content**:
```
title: "News Passive Phrases"
text: "Es wird erwartet, dass... Es wurde bekannt gegeben, dass...
Es wird vermutet, dass... Die Ermittlungen wurden eingeleitet."
deepDive: "Konjunktiv I for indirect speech in news: Der Minister sagte, die Lage sei unter Kontrolle."
```
**V2 gap**: V2 U14 focuses on office/workplace passive. News register passive is not covered. This content could fit V2 U19 (Ausländerbehörde — administrative register) better.
**Recommendation**: **SKIP for U13-18** — Flag for V2 U19 agent.

---

## V1 UNIT 19: Der Mann, der... (Relative Clauses)

**V1 location**: lines 5509-5736
**V2 target**: U14 (relative clause content already complete)

### ITEM 19.1 — Tip: Complete Relative Pronoun Table
**Type**: tip
**V1 location**: line 5982 (inside deu19l8)
**Content**:
```
title: "Complete Relative Pronoun Table"
text: "     Nom.  Acc.  Dat.
Masc: der   den   dem
Fem:  die   die   der
Neut: das   das   dem
Plur: die   die   denen
Plus: was (after alles/nichts/superlatives), wo (places), wohin/woher (direction)"
```
**V2 gap**: V2 U14 "Relativpronomen: der/die/das" table covers nom/acc/dat but does NOT show the full 3-case paradigm in one compact view. The V1 version has a clean tabular format that serves as the definitive reference card.
**Quality**: Excellent reference card.
**Recommendation**: **MERGE** — Graft as deepDive onto V2 U14's existing Relativpronomen tip. Title: "Vollständige Relativpronomen-Tabelle."

### ITEM 19.2 — Tip: How Relative Clauses Work (3 rules)
**Type**: tip
**V1 location**: line 5512
**Content**:
```
title: "How Relative Clauses Work"
text: "1. Relative pronoun matches GENDER of noun.
2. Verb goes to END.
3. Clause surrounded by COMMAS.
deepDive: In German, relative clauses ALWAYS need commas (not optional like English)."
```
**V2 gap**: V2 U14 tip "Relativsätze: der/die/das als Relativpronomen" covers structure well. The comma deepDive (always required in German) is NOT mentioned in V2.
**Quality**: Good. Comma rule is a genuine pedagogical point.
**Recommendation**: **MERGE** — Graft comma deepDive only onto V2 U14's existing relative clause tip.

### ITEM 19.3 — Tip: Nominative vs Accusative — the key difference
**Type**: tip
**V1 location**: line 5562
**Content**:
```
title: "Accusative vs Nominative: The Key Difference"
text: "Test: Who does the action in the relative clause?
Der Mann, der singt = HE sings (nominative).
Der Mann, den ich sehe = I see HIM (accusative).
Only MASCULINE changes: der → den."
```
**V2 gap**: V2 U14 Relativpronomen table shows the case forms but does NOT provide the test/decision method. Learners know the forms but not how to choose.
**Quality**: Excellent. The "who does the action" test is the most effective teaching tool for this distinction.
**Recommendation**: **MERGE** — Graft as deepDive onto V2 U14's Relativpronomen tip. Title: "Nominativ oder Akkusativ: Der Test."

### ITEM 19.4 — Tip: Dative Relative Pronoun Table
**Type**: tip
**V1 location**: line 5587
**Content**:
```
title: "Dative Relative Pronoun Table"
text: "Masculine: dem (der Mann, dem ich helfe)
Feminine: der (die Frau, der ich danke)
Neuter: dem (das Kind, dem ich gebe)
Plural: denen (die Leute, denen ich helfe)
Common dative verbs: helfen, danken, gefallen, gehören, vertrauen, folgen."
```
**V2 gap**: V2 U14 Relativpronomen table includes dative rows but does NOT list common dative verbs that trigger dative relative clauses. The list of dative verbs (helfen, danken, gefallen, gehören) is a genuine content gap.
**Quality**: Good. The dative verb list is the valuable part.
**Recommendation**: **MERGE** — Graft the dative verb list as deepDive or note onto V2 U14's existing Relativpronomen table.

### ITEM 19.5 — Tip: was as Relative Pronoun
**Type**: tip
**V1 location**: line 5638
**Content**:
```
title: "When to Use 'was' Instead of der/die/das"
text: "Use was after: alles, etwas, nichts, vieles, einiges.
Also after neuter superlatives: das Beste, was...
Also after entire clauses: Er lacht, was mich freut."
```
**V2 gap**: V2 U14 does not cover 'was' as a relative pronoun. This is used in V2 story content and quizzes will eventually reference it at B1+ level.
**Quality**: Good. Genuinely missing from V2 U14.
**Recommendation**: **MERGE** — Add as brief tip in V2 U14's final relative clause lesson. Three use cases are the key content.

### ITEM 19.6-19.11 — Remaining V1 U19 tips (wo pronoun, decision flowchart, etc.)
**V2 gap analysis**: V2 U14 already covers relative clauses comprehensively for B1 level. The remaining V1 U19 tips (wo pronoun, wohin/woher compounds, full decision flowchart) add detail but are not gaps at this level.
**Recommendation**: **SKIP** — V2 U14 is sufficient for B1. Flag wo/was relative pronouns for V2 U20+ if needed.

---

## V1 UNIT 20: Des Mannes Buch (Genitive Case)

**V1 location**: lines 5737-5969
**V2 target**: U15 Reise nach Hamburg (genitive covered), U16 Der Streit

### ITEM 20.1 — Tip: German Letter Layout (formal letter structure)
**Type**: tip
**V1 location**: line 5742 (inside deu20l6)
**Content**:
```
title: "German Letter Layout"
text: "1. Your address (top right). 2. Recipient's address (left). 3. City, date: Berlin, den 15. März 2026.
4. Subject line (bold, no 'Betreff:' prefix). 5. Greeting: Sehr geehrte/r...
6-8. Paragraphs. 9. Closing: Mit freundlichen Grüßen. 10. Signature.
Date format: day. month year.
After greeting: COMMA, then new line."
deepDive: "Formal letters ALWAYS use Sie (capital S): Ihnen, Ihrer, Ihnen. This extends to email."
```
**V2 gap**: V2 U13 covers application writing but focuses on Anschreiben phrases. A general formal letter layout tip (dates, address format, structure) is NOT in V2 U13 or anywhere in U13-18. This is relevant to V2 U13's formal writing focus.
**Quality**: Excellent. Production-ready, exam-grade content. The date format and Sie-capitalization rules are commonly tested.
**Recommendation**: **TAKE** — Add to V2 U13 (formal writing context). This is the highest-priority TAKE from V1 U20 for this scope.

### ITEM 20.2 — Tip: Model Formal Letter (complete sample)
**Type**: tip
**V1 location**: line 5767 (inside deu20l7)
**Content**:
```
title: "Model Formal Letter: Complete"
text: Full sample letter: Anna Müller / Berliner Str. 42 / 10115 Berlin /
Firma Meier GmbH / Personalabteilung / ... / Berlin, den 15. März 2026 /
Bewerbung als Projektleiterin / Sehr geehrte Damen und Herren, /
hiermit bewerbe ich mich... / In der Anlage finden Sie... / Ich würde mich freuen...
/ Mit freundlichen Grüßen / Anna Müller
```
**V2 gap**: V2 U13 teaches individual phrases (Sehr geehrte Damen und Herren, Mit freundlichen Grüßen) but has NO complete model letter. A model is essential for learners to understand how the pieces fit together.
**Quality**: Excellent. A complete, authentic sample.
**Recommendation**: **TAKE** — Add as tip in V2 U13 L6 or L7 (cover letter writing lessons). A model letter in a tip is the standard format for this type of content.

### ITEM 20.3 — Tip: Names vs Articles in Genitive
**Type**: tip
**V1 location**: line 5738 (inside deu20l2)
**Content**:
```
title: "Names vs Articles in Genitive"
text: "Two ways to show possession:
1. Name + s: Peters Auto = Peter's car. No apostrophe!
2. Article genitive: das Auto des Mannes.
Never mix: Des Peters Auto (wrong). Peters Auto (correct).
The 'Deppenapostroph' — writing Peter's Auto is grammatically wrong."
```
**V2 gap**: V2 U15 "Der Genitiv: Artikel und Endungen" covers article genitive only. The genitive -s on proper names (Peters, Annas, Berlins) and the apostrophe rule are NOT covered anywhere in V2 U13-18.
**Quality**: Excellent. The Deppenapostroph deepDive is culturally rich.
**Recommendation**: **MERGE** — Graft as deepDive or brief addition onto V2 U15's genitive tip. The apostrophe rule is highly testable.

### ITEM 20.4 — Tip: Genitive prepositions — remaining three (statt, innerhalb, außerhalb)
**Type**: tip
**V1 location**: line 5790 (inside deu20l4)
**Content**:
```
title: "All Six Genitive Prepositions"
text: "wegen, trotz, während, statt/anstatt, innerhalb, außerhalb"
```
**V2 gap**: V2 U15 tip "Genitive prepositions: während, wegen, trotz, statt, innerhalb" — ALREADY covers all six. COVERED.
**Recommendation**: **SKIP** — Covered by V2 U15.

### ITEM 20.5 — Tip: n-Deklination — which nouns follow it
**Type**: tip
**V1 location**: line 5816 (inside deu20l5)
**Content**:
```
title: "Which Nouns Follow n-Deklination?"
text: "Group 1: Ending in -e: Junge, Kollege, Kunde, Neffe, Löwe.
Group 2: Foreign -ent/-ant/-ist/-at: Student, Präsident, Polizist, Soldat.
Group 3: Special: Herr, Mensch, Nachbar, Bauer.
Key rule: nominative is normal, ALL other cases add -(e)n."
deepDive: "Old German 'weak noun' class. If you see 'der Student, -en, -en' in a dictionary, the two -en forms signal n-Deklination."
```
**V2 gap**: V2 U15 "N-Deklination: der Kollege" covers the paradigm. But its tip says "Common N-Deklination nouns: der Herr, der Kollege, der Junge, der Kunde, der Name, der Student, der Patient, der Nachbar" and shows "How to spot them: -e ending (Kollege, Junge), -ent/-ant/-ist (Student, Patient), the word Herr." COVERED — V2 U15 already addresses this.
**Recommendation**: **SKIP** — V2 U15 covers n-Deklination identification.

### ITEM 20.6-20.10 — Remaining V1 U20 content
The remaining V1 U20 tips (Genitive article overview, wegen+dative in speech, Warm vs Kalt Miete vocabulary) are either already covered in V2 U15 or are out of scope for U13-18 target.
**Recommendation**: **SKIP** — Either covered or out of scope.

---

## V1 UNIT 21: Er sagte, er sei... (Konjunktiv I)

**V1 location**: lines 5970-6220
**V2 target**: V2 U16 Der Streit (indirect questions covered; Konjunktiv I is a V2 U16 topic)

### Assessment:
V2 U16 "Der Streit" covers: indirect questions (ob, W-Fragen), Ruhezeit culture, nachdem + Plusquamperfekt. It does NOT cover Konjunktiv I. The V2 subtitle says "indirect questions" not "indirect speech."

After reviewing V2 U16 (lines 4666-4936), Konjunktiv I does not appear at all. The topic is slated for a later unit based on the B1 curriculum design. Grafting V1 U21 Konjunktiv I content into V2 U13-18 would introduce content out of pedagogical sequence.

### ITEM 21.1-21.7 — All V1 U21 Konjunktiv I content
**Verb tables**: sein: Konjunktiv I (full paradigm), haben: Konjunktiv I (full paradigm), Regular Verb Konjunktiv I Endings (machen model)
**Tips**: Direct to Indirect transformation, With/without dass, Substitution rule, Modal verbs Konj. I, News language patterns, Reporting verbs (sagen/meinen/behaupten/berichten/erklären/betonen)
**V2 gap**: Konjunktiv I is entirely absent from V2 U13-18. However, it is not scheduled for these units.
**Recommendation**: **SKIP for U13-18** — Flag for V2 U19-20 or later unit build agent where Konjunktiv I appears in the B1 curriculum plan. This entire V1 unit is a gold mine for the correct target unit.

---

## V1 UNIT 22: Um zu verstehen... (Infinitive Clauses)

**V1 location**: lines 6221-6469
**V2 target**: U17 Karneval im Rheinland (infinitive clauses covered)

### ITEM 22.1 — Tips: ohne...zu and statt...zu
**Type**: tip
**V1 location**: lines 6277 (ohne...zu) and 6308 (statt...zu)
**Content**:
```
ohne...zu tip: "Er ging, ohne zu grüßen. Same structure as um...zu but with 'without.'
Same subject rule. Different subjects → ohne dass."
statt...zu tip: "Statt zu lernen, spielt er. Instead of doing. Same subject rule.
Statt...zu before main clause: main clause verb after comma."
```
**V2 gap**: V2 U17 "Vier Infinitivkonstruktionen" tip covers all four (um...zu, ohne...zu, statt...zu, damit) and the "Infinitivklauseln im Vergleich" verb_table covers them comparatively. COVERED.
**Recommendation**: **SKIP** — V2 U17 already covers ohne...zu and statt...zu.

### ITEM 22.2 — Tip: Verbs + zu + Infinitiv list
**Type**: tip
**V1 location**: line 6370 (inside deu22l6)
**Content**:
```
title: "Verb + zu Collection"
text: "versuchen zu, anfangen zu, aufhören zu, vergessen zu, beginnen zu, planen zu, hoffen zu.
All follow same pattern: conjugated verb + (comma) + zu + infinitive.
Special: brauchen nur/nicht zu (replaces müssen in negatives)."
```
**V2 gap**: V2 U17 focuses on um/ohne/statt/damit constructions. The list of verbs that take bare zu + infinitive (versuchen, anfangen, aufhören, vergessen, planen, hoffen) is NOT in V2 U17. These are high-frequency B1 verbs.
**Quality**: Excellent. The brauchen...zu note is especially useful (B1 exam item).
**Recommendation**: **TAKE** — Add as tip or set of teach cards in V2 U17. These verbs need teach cards per PP52 before they can be quizzed. Note: check which ones already have teach cards in V2 U17 first.

### ITEM 22.3 — Tip: Separable vs Inseparable verbs + zu
**Type**: tip
**V1 location**: line 6401 (inside deu22l7)
**Content**:
```
title: "Separable vs Inseparable + zu"
text: "Separable: zu goes BETWEEN prefix and verb.
aufstehen → aufzustehen, einkaufen → einzukaufen.
Inseparable: zu goes BEFORE whole verb.
verstehen → zu verstehen, besuchen → zu besuchen.
How to tell: separable prefixes are prepositions (auf, an, ein, mit, aus, ab, zu, vor)."
```
**V2 gap**: V2 U17's infinitive clause content uses separable verbs in examples but never explains where zu goes in separable verbs. This is a PP52 risk — learners may be quizzed on aufzustehen without being taught the rule.
**Quality**: Excellent. Clear rule with examples.
**Recommendation**: **MERGE** — Graft as deepDive onto V2 U17's "um...zu mit trennbaren Verben" deepDive (which already exists but may not cover the full rule). Verify V2 U17 deepDive content first.

### ITEM 22.4-22.8 — Remaining V1 U22 content
The remaining tips (um...zu with location phrases, es + zu constructions, complete overview) are either already in V2 U17 or are review content.
**Recommendation**: **SKIP** — Covered by V2 U17.

---

## V1 UNIT 23: Trotzdem und deshalb (Adverbial Connectors)

**V1 location**: lines 6470-6724
**V2 target**: U18 Im Biergarten (als/wenn, fixed prepositions, da-/wo-compounds)

### Assessment:
V2 U18 covers als/wenn, fixed prepositions with verbs, and da-/wo-compounds. Adverbial connectors (deshalb, trotzdem, obwohl, außerdem, sowohl...als auch, etc.) are covered in V2 U20 "Die Versicherung" based on the subtitle "adverbial conjunctions."

### ITEM 23.1 — Tip: Critical Difference obwohl vs trotzdem
**Type**: tip
**V1 location**: line 6565 (inside deu23l3)
**Content**:
```
title: "The Critical Difference"
text: "obwohl = subordinating conjunction. Verb goes to END.
trotzdem = adverb. Verb in position 2 (inverted).
Key test: Can you start a new sentence with it? trotzdem: YES. obwohl: NO."
deepDive: Clause structure comparison showing both constructions for same meaning.
```
**V2 gap**: V2 U20 covers adverbial conjunctions but whether it covers the obwohl/trotzdem distinction is out of scope for this report. Flag for V2 U20 agent.
**Recommendation**: **SKIP for U13-18** — Flag for V2 U20 build agent.

### ITEM 23.2 — Tip: je...desto Word Order
**Type**: tip
**V1 location**: line 6679 (inside deu23l7)
**Content**:
```
title: "je...desto Word Order"
text: "je-clause (dependent): verb to END. je + comparative + subject + rest + VERB.
desto-clause (main): desto + comparative + VERB + subject + rest.
Full: Je mehr du lernst, desto besser verstehst du.
Alternative: je...umso (same meaning, same word order)."
deepDive: "je-clause IS a dependent clause (verb last). desto-clause is main clause (V2 rule)."
```
**V2 gap**: je...desto does not appear in V2 U13-18 and is not listed as a topic for those units. This belongs to B1.2 content, possibly V2 U21-23.
**Recommendation**: **SKIP for U13-18** — Flag for V2 U21+ build agent. je...desto is a B1.2 construct.

### ITEM 23.3-23.6 — Remaining V1 U23 content
deshalb/deswegen, trotzdem/dennoch, außerdem/zudem, sowohl...als auch, weder...noch, entweder...oder, nicht nur...sondern auch tips are all relevant for V2 U20 (adverbial conjunctions). Out of scope for U13-18.
**Recommendation**: **SKIP for U13-18** — Flag ALL V1 U23 tips for V2 U20 build agent. This unit is a complete curriculum match for V2 U20.

---

## V1 UNIT 24: Die Bewerbung (SAME TOPIC as V2 U13!)

**V1 location**: lines 6725-6921
**V2 target**: U13 Die Bewerbung

### ITEM 24.1 — Tip: Formal vs Informal Office Language (registers)
**Type**: tip
**V1 location**: line 6836 (inside deu24l7)
**Content**:
```
title: "Formal vs. Informal Office Language"
text: "Formal (external/superior): Sehr geehrte/r... / Könnten Sie bitte... / Mit freundlichen Grüßen
Semi-formal (colleagues): Liebe/r... / Kannst du bitte... / Viele Grüße
Informal (close colleagues): Hallo [Name]... / Schick mir bitte... / LG (Liebe Grüße)"
deepDive: "Phone etiquette: always state your name when answering ('Müller, guten Tag')."
```
**V2 gap**: V2 U13 tip "Formell vs. informell: Zwei Welten" contrasts formal application language with informal chat. It does NOT give the three-level register breakdown (external/colleagues/close colleagues) or phone etiquette. These are genuine content gaps.
**Quality**: Excellent. Production-ready, culturally authentic.
**Recommendation**: **MERGE** — Graft three-level breakdown as deepDive onto V2 U13's existing formell/informell tip. Phone etiquette note is new content.

### ITEM 24.2 — Tip: Anschreiben Structure
**Type**: tip
**V1 location**: line 6753 (inside deu24l3)
**Content**:
```
title: "Anschreiben Structure"
text: "10-point structure: Absender, Empfänger, Datum, Betreff, Anrede, Einleitung, Hauptteil, Schluss, Grußformel, Unterschrift.
Note: Betreff clearly states position + reference number.
Don't start with 'Hiermit bewerbe ich mich' (outdated but still common).
Maximum ONE page."
```
**V2 gap**: V2 U13 teaches Anschreiben phrases but has no structural overview tip listing the 10 components. This is the same content as Item 20.2 (complete model letter) but focuses on structure rather than a sample.
**Quality**: Excellent. The "don't start with Hiermit" note is production-quality cultural insight.
**Recommendation**: **TAKE** — Add as tip in V2 U13 L3 or L4 (cover letter lessons). This is distinct from the model letter (Item 20.2) — it's the structural blueprint.

### ITEM 24.3 — Tip: The Sie-Form in Interviews
**Type**: tip
**V1 location**: line 6774 (inside deu24l4)
**Content**:
```
title: "The Sie-Form in Interviews"
text: "Job interviews in Germany ALWAYS use Sie.
Never switch to du unless the interviewer explicitly offers it.
Even then, some candidates stay with Sie."
deepDive: "Startups may use du in interviews. When in doubt, use Sie.
The transition from Sie to du: 'das Duzen anbieten' — traditionally from the higher-ranking person."
```
**V2 gap**: V2 U13 covers interview language in L5 "Könnten Sie das wiederholen?" but has no explicit tip about maintaining Sie throughout. The deepDive about Duzen conventions is entirely absent from V2.
**Quality**: Good. The Duzen deepDive is culturally rich and B1-appropriate.
**Recommendation**: **TAKE** — Add as tip or deepDive in V2 U13 L5 (interview lesson). Highly relevant to the lesson's mock interview scene.

### ITEM 24.4 — Tip: German Employment Terms (brutto/netto, Kündigungsfrist)
**Type**: tip
**V1 location**: line 6795 (inside deu24l5)
**Content**:
```
title: "German Employment Terms"
text: "brutto = gross (before taxes). netto = net (after taxes).
Vollzeit = full-time. Teilzeit = part-time.
befristet = fixed-term. unbefristet = permanent."
deepDive: "Arbeitsrecht: after Probezeit, Kündigungsfrist = 4 weeks to 15th or end of month.
Betriebsrat must be consulted before dismissal. Sick leave: 6 weeks full pay."
```
**V2 gap**: V2 U13 has teach cards for Vollzeit, Teilzeit, befristet, unbefristet. COVERED for basic terms. The Arbeitsrecht deepDive (Kündigungsfrist, Betriebsrat, sick leave) is NOT in V2 anywhere in U13-18.
**Quality**: Good deepDive. Arbeitsrecht content is culturally essential for B1 learners.
**Recommendation**: **MERGE** — Graft the Arbeitsrecht deepDive onto a relevant V2 U13 teach card (e.g., the Betrieb or Angestellte cards). The basic terms are already taught.

### ITEM 24.5 — Tip: The Complete Application Timeline
**Type**: tip
**V1 location**: line 6854 (inside deu24l8)
**Content**:
```
title: "The Complete Application Timeline"
text: "8 steps: 1. Stellenanzeige finden. 2. Bewerbung schreiben. 3. Bewerbung abschicken.
4. Einladung zum Vorstellungsgespräch. 5. Vorstellungsgespräch. 6. Zusage oder Absage.
7. Vertrag unterschreiben. 8. Probezeit beginnt."
deepDive: "Process takes weeks to months. Large companies: phone screening + personal interview + Assessment Center.
Zusage: 1-2 weeks to decide. Absage: usually by mail or email. Normal to send 20-50 applications."
```
**V2 gap**: V2 U13 teaches individual phases (Anschreiben, Lebenslauf, Vorstellungsgespräch) but has no sequential timeline that shows the whole process from start to finish. The 8-step list gives learners a mental model for the entire process.
**Quality**: Excellent. The 20-50 applications deepDive is a memorable cultural anchor.
**Recommendation**: **TAKE** — Add as tip in V2 U13's final lesson (L8 or as intro tip in L1). This is the unit's "big picture" overview.

---

## Priority Matrix: All Items

| Priority | Item | Type | Target | Reason |
|----------|------|------|--------|--------|
| P1 | 17.9 + 17.10 | verb_table + tip (mixed verbs) | V2 U13 | Genuine gap: brachte/dachte/wusste absent from V2 |
| P1 | 17.11 | teach cards (wusste/kannte deepDive) | V2 U13 | PP52 risk: wissen/kennen not taught |
| P1 | 18.1 | verb_table (werden present) | V2 U14 | V2 U14 uses werden paradigm but never shows it |
| P1 | 18.2 | verb_table (werden Präteritum) | V2 U14 | Same gap |
| P1 | 18.3 | tip (ge- or not ge-) | V2 U14 | PP52 risk: prefixed Partizip II used but rule not taught |
| P1 | 24.2 | tip (Anschreiben structure) | V2 U13 | Complete structural overview missing from V2 U13 |
| P1 | 20.2 | tip (model formal letter) | V2 U13 | No complete model in V2 U13 |
| P1 | 24.5 | tip (application timeline) | V2 U13 | Full process overview missing |
| P2 | 17.1 + 17.2 | verb_table (sein/haben Präteritum) | V2 U13 | Paradigm tables missing from V2 U13 |
| P2 | 17.4 | verb_table (regular Präteritum) | V2 U13 | -te paradigm never shown in V2 U13 |
| P2 | 17.6 | verb_table (gehen/kommen) | V2 U13 | Highest-frequency strong verbs lack full paradigm |
| P2 | 17.8 | tip (vowel change groups) | V2 U13 | Pattern recognition tool missing |
| P2 | 20.1 | tip (German letter layout) | V2 U13 | Dates/address/Sie-caps rules not in V2 |
| P2 | 24.3 | tip (Sie-form in interviews) | V2 U13 | Duzen conventions missing |
| P2 | 22.2 | tip (verb + zu list) | V2 U17 | versuchen/vergessen/hoffen etc. not in V2 U17 |
| P3 | 17.3 | tip graft (war/hatte exception) | V2 U13 | deepDive enrichment |
| P3 | 17.5 | tip graft (-ete exception) | V2 U13 | deepDive enrichment |
| P3 | 17.7 | verb_table merge (nahm/sprach rows) | V2 U13 | Minor extension of existing table |
| P3 | 18.4 | deepDive graft (Vorgangspassiv) | V2 U14 | Exam-grade distinction |
| P3 | 18.6 | tip graft (worden vs geworden) | V2 U14 | Classic learner mistake |
| P3 | 19.1 | deepDive graft (full pronoun table) | V2 U14 | Reference card upgrade |
| P3 | 19.3 | deepDive graft (nom/acc test) | V2 U14 | Decision method missing |
| P3 | 19.4 | deepDive graft (dative verb list) | V2 U14 | Content gap in V2 tip |
| P3 | 19.5 | tip (was as relative pronoun) | V2 U14 | Missing from V2 U14 |
| P3 | 20.3 | deepDive graft (name genitive) | V2 U15 | Peters vs des Mannes distinction |
| P3 | 22.3 | deepDive graft (separable + zu) | V2 U17 | PP52 risk: aufzustehen used but rule unclear |
| P3 | 24.1 | deepDive graft (register levels) | V2 U13 | Three-level breakdown missing |
| P3 | 24.4 | deepDive graft (Arbeitsrecht) | V2 U13 | Employment law content missing |
| SKIP | 17.12-17.13 | als/wenn tips | — | Covered by V2 U18 |
| SKIP | 17.14-17.15 | Storytelling tips | V2 U24 | Wrong unit — flag for U24 |
| SKIP | 18.5 | Passive + modal tip | V2 U19 | Wrong unit — flag for U19 |
| SKIP | 18.7 | News passive tip | V2 U19 | Wrong unit — flag for U19 |
| SKIP | 19.6-19.11 | Advanced relative clause tips | V2 U20+ | Beyond B1 scope for U14 |
| SKIP | 20.4-20.10 | Remaining genitive tips | — | Covered or wrong unit |
| SKIP | 21.1-21.7 | All Konjunktiv I content | V2 U19+ | Wrong unit — flag for U19+ |
| SKIP | 23.1-23.6 | All connector tips | V2 U20 | Wrong unit — flag for U20 |

---

## Items to Flag for Other Build Agents

| Target Unit | V1 Source | Content |
|-------------|-----------|---------|
| V2 U19 | V1 U18 L5 (line 5472) | Passive + modal verbs tip |
| V2 U19 | V1 U18 L7 (line 5517) | News passive phrases + Konjunktiv I in news |
| V2 U19+ | V1 U21 (lines 5970-6220) | ENTIRE Konjunktiv I unit (6 verb tables, 7 tips, 40+ quizzes) |
| V2 U20 | V1 U23 (lines 6470-6724) | ENTIRE adverbial connectors unit (deshalb/trotzdem/obwohl/außerdem/sowohl/weder/je...desto) |
| V2 U24 | V1 U17 L7 (line 5166) | Storytelling chain tip (damals/plötzlich/schließlich) |

---

## V2 Format Notes for All TAKE Items

All V1 content uses old format:
- `nl:` fields → rename to `trg:`
- `en:` fields → rename to `src:`
- `rows` with `en:` key → rename to `src:`
- Add `pos:` and `gender:` to any new teach cards
- Add `funFact:` to any new teach cards (required for new content)
- `exampleEn:` → `exampleSrc:`
- Tips in V2 U13 use German as tip language (text is in German). Translate V1 English-language tips to German.
- Tips in V2 U14 mix English and German. Match the language style of adjacent tips.

---

## Source Line References

| V1 Content | Line Range |
|------------|-----------|
| V1 U17 Präteritum sein table | 4980-4991 |
| V1 U17 Präteritum haben table | 4999-5010 |
| V1 U17 war/hatte in speech tip | 5012 |
| V1 U17 Regular machen table | 5040-5051 |
| V1 U17 -ete exception tip | 5053 |
| V1 U17 gehen/kommen table | 5082-5099 |
| V1 U17 nahm/sprach table | 5127-5151 |
| V1 U17 vowel change groups tip | 5152 |
| V1 U17 mixed verbs pattern tip | 5178 |
| V1 U17 mixed verb table (brachte/dachte/wusste) | 5190-5220 |
| V1 U17 wusste deepDive (wissen vs kennen) | 5084-5089 |
| V1 U18 werden present table | 5378 |
| V1 U18 werden Präteritum table | 5401 |
| V1 U18 ge- or not ge- tip | 5415 |
| V1 U18 Active vs Passive tip | 5393 |
| V1 U18 Passive + Modal tip | 5472 |
| V1 U18 Passive Perfekt tip | 5492 |
| V1 U18 News passive tip | 5517 |
| V1 U19 Complete pronoun table tip | 5982 |
| V1 U19 Relative clauses 3 rules tip | 5512 |
| V1 U19 Acc vs Nom test tip | 5562 |
| V1 U19 Dative pronoun table tip | 5587 |
| V1 U19 was as relative pronoun tip | 5638 |
| V1 U20 German letter layout tip | 5742 |
| V1 U20 Model formal letter tip | 5767 |
| V1 U20 Names vs articles genitive tip | 5738 |
| V1 U21 sein Konjunktiv I table | 6010 |
| V1 U21 haben Konjunktiv I table | 6058 |
| V1 U21 Regular verb Konj I table | 6102 |
| V1 U22 verb + zu list tip | 6370 |
| V1 U22 separable + zu tip | 6401 |
| V1 U23 obwohl vs trotzdem tip | 6565 |
| V1 U23 je...desto tip | 6679 |
| V1 U24 formal vs informal registers tip | 6836 |
| V1 U24 Anschreiben structure tip | 6753 |
| V1 U24 Sie-form in interviews tip | 6774 |
| V1 U24 German employment terms tip | 6795 |
| V1 U24 Application timeline tip | 6854 |
