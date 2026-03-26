# V1 Salvage Mining Report: Units 1-4

**Agent**: V1 Salvage Mining Agent
**Date**: 2026-03-26
**Scope**: V1 Units 1-8 → V2 Units 1-4
**Method**: Full read of V1 U1-U4 (lines 8-1337) and V2 U1-U4 (lines 12-1333). Compared content systematically.

---

## Summary

V2 was written from scratch with story-driven content and superior funFacts. However, V1 contains substantial content V2 is missing:

- **6 verb tables** V2 U1-U4 does not have (heißen, sein multi-group, sprechen full, haben full, wohnen/kommen comparisons)
- **12 tip cards** with grammar content not replicated in V2
- **~40 teach cards** covering vocabulary V2 U1-U4 does not teach (Servus/Moin regionals, Auf Wiederhören, farewells system, Bitte/Danke depth, doch/genau/stimmt/natürlich, vielleicht, politeness system, professions system, taste vocabulary, restaurant phrases)
- **Multiple quiz sequences** with better distractor logic than V2 equivalents

---

## V2 U1 "Willkommen in Deutschland" — V1 Gaps

### ITEM 1 — Verb Table: heißen

**Type**: verb_table
**V1 location**: Unit 2, line ~352
**Content**:
```js
{type:"tip",title:"heißen: The Name Verb",text:"heißen means 'to be called' and uses a special stem:\n\nich heiße (I am called)\ndu heißt (you are called, informal)\nSie heißen (you are called, formal)\ner/sie heißt (he/she is called)\n\nNote: du heißt has no extra -e because the stem ends in -ß.",deepDive:{title:"Why heißen instead of haben?",text:"In German, you do not 'have' a name, you 'are called' one. This matches Dutch (heten), Swedish (heta), and even Old English 'to be hight'. The verb heißen also means 'to mean': Was heißt das? (What does that mean?). One verb, two jobs."}}
```
**V2 gap**: V2 teaches `Wie heißen Sie?` (L1 line 53) as a teach card but has NO verb table for heißen and no explanation of its conjugation pattern. V1's tip card explains why du heißt drops the -e (stem ends in -ß), which V2 never addresses.
**Quality**: BETTER than V2 (V2 has no equivalent)
**Recommendation**: TAKE — convert to tip card format for V2 U1 or U2

---

### ITEM 2 — Verb Table: sein (multi-group format)

**Type**: verb_table
**V1 location**: Unit 2, lines 459-473
**Content**:
```js
{type:"verb_table",title:"sein – to be",label:"Present tense",groups:[
  {label:"Singular",rows:[
    {pronoun:"ich",form:"bin",en:"I am"},
    {pronoun:"du",form:"bist",en:"you are (informal)"},
    {pronoun:"er/sie/es",form:"ist",en:"he/she/it is"}
  ]},
  {label:"Plural",rows:[
    {pronoun:"wir",form:"sind",en:"we are"},
    {pronoun:"ihr",form:"seid",en:"you all are (informal plural)"},
    {pronoun:"sie",form:"sind",en:"they are"}
  ]},
  {label:"Formal",rows:[
    {pronoun:"Sie",form:"sind",en:"you are (formal)"}
  ]}
],note:"ich bin is unique. bist, ist, and seid have no parallels in English.\nSie sind (formal) and sie sind (they) share the same form. Context distinguishes them.",deepDive:{title:"Why is sein so irregular?",text:"'sein' merges three ancient Proto-Germanic verbs. The forms bin and bist come from *beuną. The forms ist and sind come from *sinuną. The past tense war comes from *wesan ą. English underwent the same merger: be, am, is, are, was, were all come from different root verbs. These verbs were so frequently used that speakers never replaced them, so their unusual forms survived into modern languages."}}
```
**V2 gap**: V2 has a sein verb table (L4, line 101) but uses a flat rows format without Singular/Plural/Formal sub-grouping. The V1 version's three-group layout (Singular / Plural / Formal) is pedagogically clearer and the deepDive about Proto-Germanic mergers is richer than V2's ("Almost every European language" note).
**Quality**: BETTER (deepDive is superior, grouping is more explanatory)
**Recommendation**: MERGE — adopt V1's group structure and deepDive for V2's sein table

---

### ITEM 3 — Tip: Auf Wiedersehen vs Auf Wiederhören distinction

**Type**: tip
**V1 location**: Unit 1 L2, line 67
**Content**:
```js
{type:"tip",title:"Bis + Time: Build Your Own Farewell",text:"German builds time-based farewells with one word:\n\nbis + morgen = bis morgen (see you tomorrow)\nbis + später = bis später (see you later)\nbis + bald = bis bald (see you soon)\nbis + nächste Woche = bis nächste Woche (see you next week)\n\nYou can use this pattern with any time word!",deepDive:{title:"Auf Wiedersehen vs Auf Wiederhören",text:"Both start with 'Auf Wieder-' which means 'until again'. The difference is the sense used:\n\nAuf Wiedersehen: -sehen = to see. Used face to face.\nAuf Wiederhören: -hören = to hear. Used on the phone.\n\nThis distinction is strict in formal German. Using 'Auf Wiedersehen' on the phone is considered slightly awkward. 'Auf Wiederhören' on the phone is polished and professional."}}
```
**V2 gap**: V2 U1 teaches `Auf Wiedersehen` (L2 line 44) with funFact about "Auf Wiederhören" for phone use, but has no dedicated lesson on the full farewell system (Tschüss / Auf Wiedersehen / Bis morgen / Bis bald / Bis später / Gute Nacht). V1 L2 has 8 teach cards covering this system comprehensively. V2 only has 2 farewell cards.
**Quality**: BETTER (V1 has complete farewell system; V2 incomplete)
**Recommendation**: TAKE — V1 L2's farewell teach cards (lines 53-65) are all salvageable

---

### ITEM 4 — Teach Cards: Full Farewell System (6 cards)

**Type**: teach (×6)
**V1 location**: Unit 1 L2, lines 53-65
**Missing from V2**: Tschüss (just a line in V2, no note), Auf Wiederhören (mentioned in funFact only), Bis morgen, Bis später, Gute Nacht, Bis bald as dedicated teach cards with phonetics and notes
**Content** (representative):
```js
{type:"teach",kind:"word",nl:"Auf Wiederhören",en:"goodbye (on the phone)",phonetic:"owf-VEE-der-hör-en",example:"A: Dann bis später. Auf Wiederhören!\nB: Auf Wiederhören! Einen schönen Tag.\nA: Danke, Ihnen auch!",exampleEn:"A: Then see you later. Goodbye!\nB: Goodbye! Have a nice day.\nA: Thank you, you too!",note:"Used on the phone ONLY.\nWiederhören = hearing again (not seeing).\nWrong to use in person."}
```
**V2 gap**: V2 U1 L2 teaches `Tschüss` and `Auf Wiedersehen` as teach cards but is MISSING `Auf Wiederhören`, `Bis morgen`, `Bis später`, `Bis bald`, and `Gute Nacht` as standalone teach cards. These appear in V2 U1 L8 as passing references but are never dedicated teach cards.
**Quality**: BETTER (V1 is more complete and granular)
**Recommendation**: TAKE — all 6 farewell cards are directly salvageable after format conversion

---

### ITEM 5 — Tip: The Guten + Time Pattern

**Type**: tip
**V1 location**: Unit 1 L1, line 22
**Content**:
```js
{type:"tip",title:"The Guten + Time Pattern",text:"All formal time-of-day greetings follow one formula:\n\nGuten + Morgen = Guten Morgen (good morning)\nGuten + Tag = Guten Tag (good day)\nGuten + Abend = Guten Abend (good evening)\n\nThree words, one pattern. Guten is the accusative form of gut (good).",deepDive:{title:"Why Guten and not Gut?",text:"German adjectives change ending depending on grammatical context. 'Guten' here comes from an old shortened form of 'Ich wünsche Ihnen einen guten Morgen' (I wish you a good morning). The phrase was trimmed down but the accusative -en ending on 'guten' stayed.\n\nYou will study adjective endings properly in B1. For now, just learn the three greetings as fixed phrases."}}
```
**V2 gap**: V2 U1 L8 has a tip about German greetings by time of day (line 250) but it focuses on time ranges (until 11 AM, etc.) and gender agreement (Guten vs Gute), NOT on the formula pattern. The V1 tip explains WHY it is "Guten" (accusative shortening) with a deepDive preview of adjective declension — a pedagogically superior explanation.
**Quality**: BETTER (explains the "why"; V2's tip is more superficial)
**Recommendation**: MERGE — combine V1's formula explanation with V2's time-range information

---

### ITEM 6 — Tip: Regional Greetings (Moin, Servus, Grüezi)

**Type**: tip + 2 teach cards
**V1 location**: Unit 1 L1, lines 26-28
**Content**:
```js
{type:"teach",kind:"word",nl:"Servus",en:"hello / goodbye (Southern)",phonetic:"ZER-voos",example:"..."},
{type:"tip",title:"Regional Greetings",text:"Germany, Austria, and Switzerland each have regional flavors:\n\nNorthern Germany: Moin! (anytime, very casual)\nBavaria and Austria: Servus! (hello and goodbye)\nSwitzerland: Grüezi! (formal hello)\n\nIn standard German, Hallo and Guten Tag are always safe.",deepDive:{title:"Why does Moin mean hello if it sounds like morning?",text:"Moin comes from Low German 'moin dag' (good day), shortened to just 'moin'. Despite sounding like 'Morgen', it is used all day and even in the evening in Hamburg, Bremen, and the far north..."}}
```
**V2 gap**: V2 U1 L8 mentions "Moin" briefly in a tip deepDive but does NOT teach Servus or Grüezi as standalone teach cards, and has no dedicated regional greeting tip. V1 teaches Servus as a full teach card.
**Quality**: BETTER (V1 more complete)
**Recommendation**: TAKE — Servus teach card and Regional Greetings tip are both salvageable

---

### ITEM 7 — Tip: Four Ways to Say "You Are Welcome" (formality gradient)

**Type**: tip
**V1 location**: Unit 1 L5, line 184
**Content**:
```js
{type:"tip",title:"Four Ways to Say You Are Welcome",text:"German has a gradient of formality:\n\nBitte = you are welcome (neutral)\nBitte sehr = you are most welcome (formal)\nGern geschehen = my pleasure (warm)\nKein Problem = no problem (casual)\n\nIn shops: Bitte or Bitte sehr.\nWith friends: Gern geschehen or Kein Problem.",deepDive:{title:"Bitte: the most multi-purpose word in German",text:"Bitte is one of the most flexible words in German:\n\n1. Please: Einen Kaffee, bitte!\n2. You are welcome: Danke! / Bitte!\n3. Here you go: (handing something) Hier, bitte.\n4. Pardon? / Come again? (rising intonation): Bitte?\n5. Please go ahead: Bitte! (waving someone through a door)\n\nMastering bitte's contexts makes you sound immediately more natural in German."}}
```
**V2 gap**: V2 U1 L2 teaches `Bitte` (line 46) with funFact about 4 uses, but has NO dedicated tip explaining the formality gradient of "you are welcome" options. V1's tip maps the full register spectrum (Bitte / Bitte sehr / Gern geschehen / Kein Problem) with usage contexts — content V2 is missing.
**Quality**: BETTER (V2 funFact is shorter; V1 tip is more systematic)
**Recommendation**: TAKE — directly usable after format conversion

---

### ITEM 8 — Teach Cards: Bitte/Danke Full System (6 cards)

**Type**: teach (×6)
**V1 location**: Unit 1 L5, lines 170-182
**Missing from V2**: Danke schön (teach card), Bitte sehr, Es tut mir leid, Kein Problem, Gern geschehen as dedicated teach cards
**Content** (representative):
```js
{type:"teach",kind:"phrase",nl:"Es tut mir leid",en:"I am sorry",phonetic:"es toot meer lyte",example:"A: Sie haben meinen Termin vergessen!\nB: Es tut mir leid! Das war mein Fehler.\nA: Kein Problem.",note:"Deeper apology than Entschuldigung.\nLit: It does sorrow to me.\nEs tut mir sehr leid = I am very sorry."}
{type:"teach",kind:"phrase",nl:"Gern geschehen",en:"my pleasure / you are welcome",example:"A: Danke für deine Hilfe!\nB: Gern geschehen! Das mache ich gern.\nA: Du bist super!",note:"Warmer and more personal than Bitte.\nGern = gladly. Geschehen = happened.\nLit: Gladly happened."}
```
**V2 gap**: V2 U1 teaches Danke and Bitte but is MISSING `Danke schön`, `Bitte sehr`, `Es tut mir leid`, `Kein Problem`, and `Gern geschehen` as dedicated teach cards. These are A1.1 essentials.
**Quality**: BETTER (V2 coverage is incomplete)
**Recommendation**: TAKE — all 5 missing politeness cards are directly salvageable

---

### ITEM 9 — Tip: doch (The Contradictor)

**Type**: tip
**V1 location**: Unit 1 L6, line 221
**Content**:
```js
{type:"tip",title:"Doch: The Contradictor",text:"German has a special word for contradicting a negative:\n\nA: Du kommst nicht? (You are not coming?)\nB: Doch! Ich komme. (Yes I am! I am coming.)\n\nDoch = yes (but I disagree with your negative assumption)\nJa = yes (regular agreement)\nNein = no\n\nIf you say 'ja' to a negative question, the meaning is unclear in German. Doch removes all ambiguity.",deepDive:{title:"Why German needs doch",text:"Many languages have a third answer word for contradicting negatives. French has 'si', German has 'doch', Dutch has 'toch' (in some uses) or 'jawel'.\n\nEnglish lost this word. When someone says 'You didn't eat, did you?' and you DID eat, English speakers say 'Yes I did!' with heavy stress. German uses one word: Doch.\n\nDoch has many other uses in German (e.g., as a softener, in commands, in exclamations). For now, master the contradiction function."}}
```
**V2 gap**: V2 U2 has a teach card for `doch` (line 465) with funFact about it being "untranslatable" but NO tip card systematically explaining the ja/nein/doch three-way system. The V1 tip shows the contrast table and explains WHY doch is needed. V2's funFact is good but the tip's full exposition is better for learner understanding.
**Quality**: BETTER (more systematic; V2 has a good funFact but not the full tip)
**Recommendation**: MERGE — combine V1's three-way contrast tip with V2's funFact

---

### ITEM 10 — Teach Cards: ja/nein/vielleicht/genau/stimmt/natürlich (4 missing)

**Type**: teach (×4)
**V1 location**: Unit 1 L6, lines 213-223
**Content** (representative):
```js
{type:"teach",kind:"word",nl:"vielleicht",en:"maybe / perhaps",phonetic:"feel-LYKT",example:"A: Kommst du heute Abend?\nB: Vielleicht. Ich bin nicht sicher.\nA: Okay, sag mir Bescheid!",note:"Expressing uncertainty.\nViel = much. Leicht = light. Together: perhaps.\nMore neutral than 'wahrscheinlich' (probably)."}
{type:"teach",kind:"word",nl:"genau",en:"exactly / right / indeed",phonetic:"geh-NOW",example:"...",note:"One of the most common German response words.\nUsed to confirm and show you are following.\nEquivalent to 'exactly', 'right', 'indeed', or 'precisely'."}
{type:"teach",kind:"word",nl:"stimmt",en:"that's right / true",phonetic:"shtimt",example:"..."}
{type:"teach",kind:"word",nl:"natürlich",en:"of course / naturally",phonetic:"na-TÜR-likh",example:"..."}
```
**V2 gap**: V2 teaches `Ja` and `Nein` (L2 lines 49-50) but is MISSING `vielleicht`, `genau`, `stimmt`, and `natürlich` as dedicated teach cards. These response words are used constantly in conversation and are Goethe A1 list items. Without them, learners have an incomplete response toolkit.
**Quality**: BETTER (V2 doesn't teach these at all in U1-U4)
**Recommendation**: TAKE — all 4 response word cards are directly salvageable

---

### ITEM 11 — Tip: Ich heißen vs Mein Name ist (register comparison)

**Type**: tip
**V1 location**: Unit 2 L1, line 108 (approximately)
**Content**:
```js
{type:"tip",title:"Ich heiße vs Mein Name ist",text:"Both mean 'my name is', but tone differs:\n\nIch heiße [Name] = I am called [Name] (neutral, any situation)\nMein Name ist [Name] = My name is [Name] (slightly more formal)\nIch bin [Name] = I am [Name] (very casual, like English)\n\nIn a job interview: Mein Name ist.\nWith a new classmate: Ich bin or Ich heiße.",deepDive:{title:"Academic and professional titles in German",text:"Germans use titles with care. If someone has a doctorate, they are addressed as 'Herr Doktor Fischer' or 'Frau Doktor Müller'. Professors keep their title permanently.\n\nOn official letters and in formal meetings, you may see:\nHerr Prof. Dr. Müller\nFrau Dr. Schneider\n\nDropping the title when addressing such a person can be seen as disrespectful. When in doubt, use the title. The person will tell you if they prefer otherwise."}}
```
**V2 gap**: V2 U1 L2 teaches `Wie heißen Sie?` (line 53) but has no tip comparing the three self-introduction registers (Ich bin / Ich heiße / Mein Name ist) or the deepDive about German academic/professional titles — important cultural content for A1 learners.
**Quality**: BETTER (V2 does not cover this register comparison)
**Recommendation**: TAKE — directly salvageable

---

### ITEM 12 — Tip: du/ihr/Sie Three-Way System

**Type**: tip
**V1 location**: Unit 2 L4, line 481 (approximately)
**Content**:
```js
{type:"tip",title:"du / ihr / Sie: Three Ways to Say You",text:"German has three ways to address people:\n\ndu = one person, informal (friends, family, peers)\nihr = two or more people, informal (you all)\nSie = one or more people, formal (strangers, bosses, customers)\n\nVerb forms:\ndu bist, ihr seid, Sie sind",deepDive:{title:"When did German start using Sie as a formal pronoun?",text:"The formal Sie comes from 17th-century court culture. It was originally the third-person plural (sie = they) used as a distancing honorific, as if addressing royalty as a group. French went through a similar process with 'vous'. English once had 'thou' (informal) vs 'you' (formal) but eventually merged both into 'you'. German kept the distinction..."}}
```
**V2 gap**: V2 U1 teaches du vs Sie in the L3 article lesson (line 96 area) but does NOT include `ihr` in the same tip, and the deepDive about 17th-century court culture origin is absent from V2. This is excellent cultural content.
**Quality**: BETTER (V1 covers all three forms; V2 misses ihr in this context)
**Recommendation**: TAKE — directly salvageable

---

### ITEM 13 — Tip: No Article with Professions

**Type**: tip (+ deepDive)
**V1 location**: Unit 2 L3, line 434
**Content**:
```js
{type:"tip",title:"No Article with Professions",text:"German drops the article before professions:\n\nIch bin Lehrer. (NOT: Ich bin ein Lehrer)\nSie ist Ärztin. (NOT: Sie ist eine Ärztin)\nEr ist Student. (NOT: Er ist ein Student)\n\nException: if you add an adjective, the article returns:\nEr ist ein sehr guter Lehrer.",deepDive:{title:"Why no article with professions?",text:"Job titles after 'sein' classify the person rather than count them as objects. German omits the article for exactly this reason. The same happens with nationalities (Ich bin Deutsche) and religions. Once an adjective is added, the article returns because a full noun phrase is restored."}}
```
**V2 gap**: V2 does not teach professions in U1-U4 at all. The keine-Artikel rule appears in V2 U3 (L2, line ~804) but only as part of possessive tip context. The professions tip from V1 is not present in V2 U1-U4.
**Quality**: BETTER (V2 has no equivalent in U1-U4)
**Recommendation**: TAKE — useful for V2 U2 or U3 where professions first appear contextually

---

### ITEM 14 — Verb Table: sprechen (full 6-form)

**Type**: verb_table
**V1 location**: Unit 2 L5, line 524 (tip with conjugation); V2 U1 L1 has verb_table (line 27)
**Content** (V1 tip with conjugation):
```js
{type:"tip",title:"sprechen: A Strong Verb",text:"sprechen is a strong (irregular) verb. The stem vowel changes in the du and er/sie/es forms:\n\nich spreche\ndu sprichst (e → i)\ner/sie/es spricht (e → i)\nwir sprechen\nihr sprecht\nsie/Sie sprechen\n\nThis e→i vowel shift appears in many German strong verbs.",deepDive:{title:"Strong vs Weak Verbs",text:"..."}}
```
**V2 gap**: V2 U1 has a sprechen verb_table (lines 27-27) that is good quality. The V1 tip is nearly identical in content to V2's verb table — this is a SKIP for the verb table itself.
**Quality**: EQUAL
**Recommendation**: SKIP — V2 already has a good sprechen table

---

### ITEM 15 — Tip: Compound Numbers Above 20 (units-first pattern)

**Type**: tip
**V1 location**: Unit 2 L7, line 602
**Content**:
```js
{type:"tip",title:"Compound Numbers Above 20",text:"German numbers above 20 are built units-first:\n\n21 = einundzwanzig (one and twenty)\n22 = zweiundzwanzig (two and twenty)\n35 = fünfunddreißig (five and thirty)\n47 = siebenundvierzig (seven and forty)\n\nPattern: units + und + tens.\nAll written as one word.",deepDive:{title:"Why does German say 'one-and-twenty' instead of 'twenty-one'?",text:"Old English used the same structure: 'one and twenty' appears in Shakespeare and older texts. Most Germanic languages historically put the smaller number first..."}}
```
**V2 gap**: V2 U4 L3 teaches numbers 30-1000 (line 1119 area) with `dreißig / vierzig / fünfzig` etc. but does NOT have a dedicated tip explaining the units-first pattern with examples. The V1 deepDive about Old English "one and twenty" is excellent cultural content.
**Quality**: BETTER (V2 covers the numbers without explaining the reversal rule systematically)
**Recommendation**: TAKE — the tip and deepDive are directly salvageable for V2 U4 or U5

---

## V2 U2 "Entschuldigung, wo ist...?" — V1 Gaps

### ITEM 16 — Verb Table: haben (full 6-form with deepDive)

**Type**: verb_table
**V1 location**: Unit 3 L3, lines 768-779
**Content**:
```js
{type:"verb_table",title:"haben: to have",label:"Present tense conjugation",groups:[
  {label:"Singular",rows:[
    {pronoun:"ich",form:"habe",note:"I have"},
    {pronoun:"du",form:"hast",note:"you have (informal)"},
    {pronoun:"er/sie/es",form:"hat",note:"he/she/it has"}
  ]},
  {label:"Plural",rows:[
    {pronoun:"wir",form:"haben",note:"we have"},
    {pronoun:"ihr",form:"habt",note:"you all have (informal)"},
    {pronoun:"sie/Sie",form:"haben",note:"they/you (formal) have"}
  ]}
],note:"haben is irregular in du (hast) and er/sie/es (hat). The plural forms are regular except ihr habt.",deepDive:{title:"haben vs sein as auxiliary verbs",text:"In German, both haben and sein are used as auxiliary (helper) verbs to form the past tense (Perfekt).\n\nIch habe gegessen = I have eaten (haben + past participle)\nIch bin gegangen = I have gone (sein + past participle)\n\nVerbs of motion and change-of-state typically use sein. Other verbs typically use haben..."}}
```
**V2 gap**: V2 U1 has a haben verb table (line 109) but it is flat format (no Singular/Plural groups). More importantly, V1's deepDive about haben vs sein as auxiliary verbs is a crucial pedagogical preview of the Perfekt tense — not present in V2's table. V1's grouped format is also clearer.
**Quality**: BETTER (V1 grouped format + auxiliary preview deepDive)
**Recommendation**: MERGE — adopt V1's grouped format and deepDive for V2's haben table

---

### ITEM 17 — Tip: Article Colors for der/die/das (with gender reasoning)

**Type**: tip
**V1 location**: Unit 3 L1, line 690
**Content**:
```js
{type:"tip",title:"Article Colors: der, die, das",text:"Every German noun has a grammatical gender.\nThe article shows the gender:\n\nder Vater, der Bruder (masculine, blue)\ndie Mutter, die Schwester (feminine, coral)\ndas Kind (neuter, gold)\ndie Eltern (always plural)\n\nLearn the article WITH each noun from day one. They are inseparable.",deepDive:{title:"Why does German have grammatical gender?",text:"German inherited grammatical gender from Proto-Germanic and Proto-Indo-European. Unlike English which dropped most gender markers, German kept all three.\n\ndas Mädchen (girl) is neuter because -chen is a neuter diminutive ending. der Tisch (table) is masculine. There is no universal rule, so every noun must be learned with its article.\n\nTip: Many nouns ending in -er are masculine (der Bruder, der Vater). Many nouns ending in -ung, -keit, or -heit are feminine. Nouns ending in -chen or -lein are neuter. These patterns help but have exceptions."}}
```
**V2 gap**: V2 U2 has a Gender Color Code tip (line 420) which covers the same topic but is briefer. The V1 version includes more suffix patterns (-er often masculine, -ung/-keit/-heit feminine, -chen neuter) and uses family vocabulary as examples, making it more concrete for learners who have just learned family words.
**Quality**: EQUAL (V2's tip is also good; V1 has slightly more suffix patterns)
**Recommendation**: MERGE — add V1's additional suffix patterns (-er masculine) to V2's tip

---

### ITEM 18 — Tip: German Plural Forms (no single rule)

**Type**: tip (with 8 plural patterns)
**V1 location**: Unit 3 L5, line 863
**Content**:
```js
{type:"tip",title:"German Plural: No Single Rule",text:"German plural forms are unpredictable. You must learn each one.\n\nCommon patterns to notice:\n\nBruder: die Brüder (umlaut + r)\nSchwester: die Schwestern (add -n)\nMutter: die Mütter (umlaut only)\nVater: die Väter (umlaut only)\nKind: die Kinder (add -er)\nEltern: always plural (no singular)\n\nStrategy: learn plurals with nouns from the start.",deepDive:{title:"Why German plurals have no rule",text:"English forms most plurals with -s. German has 8+ plural patterns:\n\n1. No change: der Bruder / die Bruder? No, die Brüder (umlaut)\n2. Add -e: der Tag / die Tage\n3. Add -er: das Kind / die Kinder\n4. Add -n/-en: die Schwester / die Schwestern\n5. Add -s (foreign words): das Auto / die Autos\n6. Umlaut + e: der Vater / die Väter\n7. Umlaut only: die Mutter / die Mütter\n8. No change: der Lehrer / die Lehrer\n\nThe dictionary entry for a German noun always includes the plural form. Learn it with each new word."}}
```
**V2 gap**: V2 has no dedicated plural system tip in U1-U4. Individual plurals are noted on teach cards but there is no tip that gives learners the full picture of German plural patterns and a learning strategy.
**Quality**: BETTER (V2 has nothing equivalent in U1-U4)
**Recommendation**: TAKE — directly salvageable for V2 U3

---

### ITEM 19 — Tip: Inversion for Questions with haben

**Type**: tip (deepDive)
**V1 location**: Unit 3 L3, line 787 (deepDive in haben tip)
**Content**:
```js
deepDive:{title:"Inversion in questions with haben",text:"In German, to ask a yes/no question, you swap the subject and verb:\n\nDu hast einen Bruder. (statement)\nHast du einen Bruder? (question)\n\nIch habe eine Katze. (statement)\nHabe ich eine Katze? (question, rare unless rhetorical)\n\nHat sie Geschwister? (Does she have siblings?)\n\nThis inversion rule applies to ALL German verbs, not just haben."}
```
**V2 gap**: V2 teaches yes/no questions implicitly through examples but has no dedicated tip about verb-subject inversion for question formation. This is a core A1 grammar concept.
**Quality**: BETTER (V2 has no equivalent)
**Recommendation**: TAKE — extract as standalone tip card for V2 U2 or U3

---

### ITEM 20 — Tip: Possessives mein/dein/sein/ihr (-e Rule)

**Type**: tip
**V1 location**: Unit 3 L4, line 822
**Content**:
```js
{type:"tip",title:"The -e Rule for Possessives",text:"German possessives follow a simple pattern:\n\nBefore masculine nouns (der-words): mein, dein, sein, ihr\nBefore feminine nouns (die-words): meine, deine, seine, ihre\nBefore neuter nouns (das-words): mein, dein, sein, ihr\nBefore plural nouns: meine, deine, seine, ihre\n\nSummary: Add -e before die-words and all plurals.",deepDive:{title:"Possessives in accusative and dative (preview)",text:"In Unit 4 you will learn the accusative case. When possessives appear in accusative position (after verbs like 'have'), the masculine form adds -en:\n\nDas ist mein Bruder. (nominative)\nIch habe meinen Bruder. (accusative)\n\nFeminine and neuter forms do not change in accusative. For now, focus on nominative."}}
```
**V2 gap**: V2 U3 L2 has a possessives tip (line 804) which covers the same content. The V1 version's four-row layout (der/die/das/plural) is slightly cleaner and the accusative preview is more explicit about the -en change. These are largely equivalent.
**Quality**: EQUAL (V2's tip is similar quality)
**Recommendation**: SKIP — V2 has equivalent content

---

## V2 U3 "Die Wohnungssuche" — V1 Gaps

### ITEM 21 — Tip: Oma/Opa vs Großmutter/Großvater (register distinction)

**Type**: tip
**V1 location**: Unit 3 L2, line 735
**Content**:
```js
{type:"tip",title:"Großeltern: German Compound Words",text:"German builds new words by joining existing words:\n\nGroß + Mutter = Großmutter (grandmother)\nGroß + Vater = Großvater (grandfather)\nGroß + Eltern = Großeltern (grandparents)\n\nThe first word modifies the second.\nGroß here means 'great' (as in great-parent).\n\nThis compounding is a core German superpower. You will see it everywhere.",deepDive:{title:"Oma/Opa vs Großmutter/Großvater",text:"In daily life, most Germans say Oma and Opa rather than Großmutter and Großvater. The formal versions appear in writing, official contexts, and obituaries.\n\nSimilarly, Mutti (mummy) and Vati (daddy) are very common affectionate forms. Regional variations exist: in Bavaria and Austria you hear Mama and Papa universally even into adulthood.\n\nFor learners: use Oma, Opa, Mutti, Vati in conversation. Switch to the formal forms in writing."}}
```
**V2 gap**: V2 U3 teaches Opa/Oma and Großvater/Großmutter (lines 797-798) but has NO tip about German compound word formation (the Groß + Mutter pattern) and no deepDive about register differences (Oma = daily speech, Großmutter = formal/written). V1's tip is culturally richer.
**Quality**: BETTER (V1 has compound word tip + register deepDive; V2 missing both)
**Recommendation**: TAKE — tip and deepDive are directly salvageable

---

### ITEM 22 — Teach Cards: Extended Family (Tante, Onkel, Cousin, Cousine, Geschwister)

**Type**: teach (×5)
**V1 location**: Unit 3 L2, lines 727-734
**Missing from V2**: V2 U3 teaches core family but does Tante/Onkel/Cousin/Cousine appear?
**V2 check**: V2 U3 L2 (lines 782-820) teaches Vater, Mutter, Bruder, Schwester, Sohn, Tochter, Kind, Mädchen, Junge, Mann, Eltern, Geschwister, Großvater, Großmutter, Freundin, ledig, verheiratet, geschieden, geboren. Does NOT include Tante, Onkel, Cousin, Cousine.
**Content** (representative):
```js
{type:"teach",kind:"word",nl:"die Tante",en:"the aunt",phonetic:"dee TAN-teh",example:"A: Das ist meine Tante Maria.\nB: Hallo, Tante Maria! Schön, Sie kennenzulernen.",note:"die Tante = the aunt.\nPlural: die Tanten."}
{type:"teach",kind:"word",nl:"der Onkel",en:"the uncle",phonetic:"dehr ONG-kel",example:"A: Mein Onkel wohnt in Berlin.\nB: Cool! Besuchst du ihn oft?",note:"der Onkel = the uncle.\nPlural: die Onkel (no change)."}
```
**V2 gap**: Tante, Onkel, Cousin, Cousine are ABSENT from V2 U3. These are Goethe A1 list words.
**Quality**: BETTER (V2 missing these entirely)
**Recommendation**: TAKE — all 4 extended family cards are directly salvageable

---

### ITEM 23 — Teach Cards: Haustiere (Hund, Katze, Fisch, Vogel, Kaninchen)

**Type**: teach (×5) + tip
**V1 location**: Unit 3 L6, lines 893-926
**Content** (representative):
```js
{type:"teach",kind:"word",nl:"der Hund",en:"the dog",phonetic:"dehr hoont",example:"A: Ich habe einen Hund. Er heißt Max.\nB: Wie groß ist er?\nA: Er ist mittelgroß und sehr freundlich.",note:"der Hund = the dog.\nPlural: die Hunde.\nEinen Hund (accusative masculine)."}
{type:"tip",title:"ein vs eine vs einen",text:"After haben, the article changes (accusative case):\n\nhaben + masculine (der): einen\nhaben + feminine (die): eine\nhaben + neuter (das): ein\n\nExamples:\nIch habe einen Hund. (der Hund: einen)\nIch habe eine Katze. (die Katze: eine)\nIch habe ein Kaninchen. (das Kaninchen: ein)\n\nOnly masculine changes: der becomes einen.",deepDive:{title:"Why does only masculine change in accusative?",text:"German has 4 grammatical cases. In the accusative case (used for direct objects, like what you 'have'), only the masculine article changes:\n\nnominative: der Hund (subject)\naccusative: Ich habe einen Hund (object)\n\nFeminine (die) and neuter (das) stay the same in accusative. Masculine (der) changes to den (definite) or einen (indefinite).\n\nThis is a crucial rule in German. You will study all four cases systematically starting in Unit 6."}}
```
**V2 gap**: V2 U3 does NOT teach pets at all. The Haustiere vocabulary (Hund, Katze, Fisch, Vogel, Kaninchen) is missing. These are common A1 vocabulary items on the Goethe list. Moreover, V1's pet tip includes a mini-introduction to the accusative case (einen Hund) — the SAME concept V2 U4 teaches formally (Akkusativ-Alarm). V1 introduces it naturally through pets first.
**Quality**: BETTER (V2 completely missing)
**Recommendation**: TAKE — pets are missing from V2; accusative preview in pet tip is also valuable

---

### ITEM 24 — Tip: ein vs eine vs einen (Accusative Preview via Pets)

**Type**: tip
**V1 location**: Unit 3 L6, line 904
**Content**: (see Item 23 above)
**V2 gap**: V2 U4 L4 (Akkusativ-Alarm, line 1143) formally teaches the accusative, but V1 introduces it naturally through pets — a gentler first exposure. V2 has no such preview.
**Quality**: BETTER (V2 has no preview; V1 gives learners a first exposure before the formal lesson)
**Recommendation**: TAKE — natural accusative preview via pets (salvage with pets, Item 23)

---

## V2 U4 "Im Supermarkt" — V1 Gaps

### ITEM 25 — Tip: Restaurant Etiquette in Germany

**Type**: tip
**V1 location**: Unit 4 L5, line 1197
**Content**:
```js
{type:"tip",title:"Restaurant Etiquette in Germany",text:"A few customs that differ from other countries:\n\n1. Seating: You seat yourself unless a sign says Bitte warten.\n2. Water: Not automatically free. Tap water is rarely served unless asked.\n3. Tipping: Round up or add 10%. Say the total when paying.\n4. Bill: Germans often split individually (Getrennt zahlen).\n5. Payment: Zahlen Sie bar oder mit Karte? (Cash or card?)",deepDive:{title:"Bar oder Karte? German payment culture",text:"Germany remains strongly cash-oriented compared to most of Western Europe. Many restaurants, bakeries, and small shops are Nur Bar (cash only).\n\nWhen paying, you tell the waiter the exact amount: Stimmt so (= keep the change). Or: Machen Sie 23 Euro (= make it 23 euros, the rest is a tip).\n\nThis direct approach with tipping is normal and not considered impolite."}}
```
**V2 gap**: V2 U4 covers shopping and supermarket culture but has no restaurant etiquette tip. V2 U5 "Hunger!" covers restaurants but may lack this cultural tip. The cash culture deepDive is excellent and aligns with V2 U4's cash/card payment content.
**Quality**: BETTER (V2 doesn't have this in U4; highly relevant cultural content)
**Recommendation**: TAKE — relocate to V2 U4 or U5

---

### ITEM 26 — Teach Cards: Restaurant Ordering Phrases (4 cards)

**Type**: teach (×4)
**V1 location**: Unit 4 L5, lines 1181-1195
**Missing from V2 U4**: `Ich hätte gern`, `Die Speisekarte bitte`, `Was empfehlen Sie?`, `Getrennt oder zusammen?`, `Das schmeckt sehr gut!`, `Ich bin Vegetarier/in`
**Content** (representative):
```js
{type:"teach",kind:"phrase",nl:"Ich hätte gern...",en:"I would gladly have...",example:"A: Was hätten Sie gern?\nB: Ich hätte gern den Lachs.\nA: Ausgezeichnet!",note:"More formal and elegant than Ich möchte.\nUsed in upscale restaurants.\nHätte = would have (Konjunktiv II). Gern = gladly."}
{type:"teach",kind:"phrase",nl:"Was empfehlen Sie?",en:"What do you recommend?",example:"A: Was empfehlen Sie heute?\nB: Der Lachs ist sehr frisch!\nA: Dann nehme ich den Lachs."}
```
**V2 gap**: V2 U4 is supermarket-focused. V2 U5 "Hunger!" will cover restaurants, but these specific ordering phrases are worth checking against U5 content. For now they are ABSENT from V2 U4.
**Quality**: BETTER (V2 missing in U4)
**Recommendation**: TAKE — relocate to V2 U5 if that unit lacks them

---

### ITEM 27 — Teach Cards: Taste Vocabulary (lecker, süß, salzig, scharf, sauer, bitter)

**Type**: teach (×6) + tip
**V1 location**: Unit 4 L7, lines 1261-1275
**Content** (representative):
```js
{type:"teach",kind:"word",nl:"lecker",en:"delicious / yummy",phonetic:"LEK-er",example:"A: Wie ist die Suppe?\nB: Lecker! Sehr lecker!",note:"The most common positive food word in German.\nLecker alone = Yum! Very natural in any food context."}
{type:"tip",title:"Schmeckt + Taste Description",text:"Es schmeckt gut. = It tastes good.\nEs schmeckt lecker. = It tastes delicious.\nEs schmeckt zu salzig. = It tastes too salty.\n\nPattern: Es schmeckt + adjective\n\nPersonal preference:\nIch mag süßes Essen. = I like sweet food.\nIch esse gern Fisch. = I like eating fish.\ngern with a verb = gladly = expressing liking.",deepDive:{...}}
```
**V2 gap**: V2 U4 teaches food vocabulary but NO taste adjectives appear in V2 U4. `lecker`, `süß`, `salzig`, `scharf`, `sauer`, `bitter`, and the `schmeckt` verb pattern are all absent from V2 U1-U4.
**Quality**: BETTER (V2 completely missing)
**Recommendation**: TAKE — all 6 taste cards + schmeckt tip are directly salvageable

---

### ITEM 28 — Tip: Obst vs Gemüse (category words + Wochenmarkt)

**Type**: tip
**V1 location**: Unit 4 L6, line 1232
**Content**:
```js
{type:"tip",title:"Obst vs Gemüse",text:"Two important category words:\n\nObst = fruit (das Obst, neuter, uncountable)\nGemüse = vegetables (das Gemüse, neuter, uncountable)\n\nUse them when shopping:\nIch suche das Obst. = I am looking for the fruit section.\nHaben Sie frisches Gemüse? = Do you have fresh vegetables?\n\nNote: individual fruits use their own article (der Apfel, die Banane), but the category word Obst is always das.",deepDive:{title:"At the German Wochenmarkt",text:"Germany has vibrant weekly markets (Wochenmärkte) in almost every town and city, open on Saturday mornings...\n\nUseful phrases:\nWas kostet ein Kilo? = What does a kilo cost?\nIch hätte gern 500 Gramm. = I would like 500 grams.\nDas macht... Euro. = That comes to... euros."}}
```
**V2 gap**: V2 U4 L2 teaches das Obst and das Gemüse (lines 1093-1097) with funFacts but has no tip explaining the category/individual-item article distinction or the Wochenmarkt deepDive with shopping phrases.
**Quality**: BETTER (V2 covers the words but not the conceptual distinction; market phrases are absent)
**Recommendation**: TAKE — the conceptual tip and Wochenmarkt deepDive are salvageable

---

### ITEM 29 — Teach Cards: Vegetables Not in V2 (Gurke, Zwiebel)

**Type**: teach (×2)
**V1 location**: Unit 4 L6, lines 1228-1230
**Content**:
```js
{type:"teach",kind:"word",nl:"die Gurke",en:"the cucumber",example:"A: Frische Gurken!\nB: Zwei für einen Euro!\nA: Ich nehme vier, bitte.",note:"Feminine: die Gurke. Plural: Gurken."}
{type:"teach",kind:"word",nl:"die Zwiebel",en:"the onion",example:"A: Brauchst du Zwiebeln?\nB: Ja, drei Zwiebeln bitte.",note:"Feminine: die Zwiebel. Plural: Zwiebeln.\nBase of many German sauces and stews."}
```
**V2 gap**: V2 U4 teaches Apfel, Banane, Tomate, Kartoffel (line 1096) but NOT Gurke or Zwiebel. Both are Goethe A1 list items and extremely common in German cooking.
**Quality**: BETTER (V2 missing)
**Recommendation**: TAKE — both vegetable cards are directly salvageable

---

### ITEM 30 — Tip: Suffix Rules for Gender (comprehensive)

**Type**: tip
**V1 location**: Unit 4 L3, line 1105
**Content**:
```js
{type:"tip",title:"Suffix Rules: Reliable Signals",text:"Some endings tell you the gender reliably:\n\nALWAYS die (feminine):\n-ung: die Zeitung, die Übung\n-heit/-keit: die Freiheit, die Möglichkeit\n-schaft: die Freundschaft\n-tion: die Nation, die Station\n-ei: die Bäckerei\n\nALWAYS das (neuter):\n-chen: das Brötchen, das Mädchen\n-lein: das Büchlein\n-um: das Museum\n\nOften der (masculine):\n-er (agent nouns): der Lehrer, der Fahrer",deepDive:{title:"The -tion rule and loanwords",text:"...\n-tät (Qualität, Universität) = always die\n-ik (Musik, Physik) = usually die\n-ismus (Tourismus, Idealismus) = always der\n-ment (Instrument, Moment) = usually das"}}
```
**V2 gap**: V2 U2 has a Gender Patterns tip (line 454) covering -ung/-ei/-keit (feminine) and -chen (neuter) and compound rule. V1 goes further with -schaft, -tion, -heit, -um, -er plus the deepDive adding -tät, -ik, -ismus, -ment rules.
**Quality**: BETTER (V1 is more comprehensive; V2 covers a subset)
**Recommendation**: MERGE — add V1's additional suffix rules to V2's existing gender pattern tip

---

## Priority Summary

### TAKE (use as-is after format conversion)

| # | Item | Type | Target V2 Unit |
|---|------|------|----------------|
| 1 | heißen tip (conjugation + "to mean") | tip | U1 |
| 3 | Auf Wiederhören tip (face-to-face vs phone) | tip | U1 |
| 4 | Full farewell system (6 teach cards) | teach ×6 | U1 |
| 6 | Servus card + Regional Greetings tip | teach + tip | U1 |
| 7 | Four ways to say "you are welcome" tip | tip | U1 |
| 8 | Bitte/Danke full system (5 missing cards) | teach ×5 | U1 |
| 10 | vielleicht/genau/stimmt/natürlich (4 cards) | teach ×4 | U1 |
| 11 | Ich heiße vs Mein Name ist tip + titles deepDive | tip | U1-U2 |
| 12 | du/ihr/Sie three-way tip + court history deepDive | tip | U1 |
| 13 | No article with professions tip | tip | U2-U3 |
| 15 | Compound numbers units-first tip | tip | U4 |
| 18 | German plural forms (8 patterns) tip | tip | U3 |
| 19 | Inversion for yes/no questions | tip (from deepDive) | U2-U3 |
| 21 | Oma/Opa compound word tip + register deepDive | tip | U3 |
| 22 | Extended family: Tante/Onkel/Cousin/Cousine | teach ×4 | U3 |
| 23 | Haustiere (5 pet teach cards) | teach ×5 | U3 |
| 24 | ein/eine/einen accusative preview via pets | tip | U3 |
| 25 | Restaurant etiquette tip + cash culture deepDive | tip | U4-U5 |
| 26 | Restaurant ordering phrases (4 cards) | teach ×4 | U5 |
| 27 | Taste vocabulary (6 cards + schmeckt tip) | teach ×6 + tip | U4-U5 |
| 28 | Obst vs Gemüse tip + Wochenmarkt deepDive | tip | U4 |
| 29 | Gurke + Zwiebel teach cards | teach ×2 | U4 |

### MERGE (combine V1 and V2 content)

| # | Item | What to merge |
|---|------|---------------|
| 2 | sein verb table | Add V1's 3-group structure + Proto-Germanic deepDive |
| 5 | Guten + Time Pattern tip | Add V1's accusative explanation to V2's time-range tip |
| 9 | doch tip | Add V1's ja/nein/doch contrast table to V2's funFact |
| 16 | haben verb table | Add V1's 2-group structure + auxiliary preview deepDive |
| 17 | Article colors tip | Add V1's -er masculine pattern to V2's tip |
| 30 | Suffix rules for gender tip | Add V1's -schaft/-tion/-heit/-um/-er rules to V2's tip |

### SKIP

| # | Item | Reason |
|---|------|--------|
| 14 | sprechen verb table | V2 already has equivalent quality |
| 20 | mein/dein/sein/ihr possessives tip | V2 has equivalent content |

---

## Format Conversion Notes

All V1 items use old format:
- `nl` → convert to `trg`
- `en` → convert to `src`
- `exampleEn` → convert to `exampleSrc`
- Add `pos` and `gender` fields (required on new content)
- Add `funFact` field (required on new teach cards)
- Remove `phonetic` field (not used in V2 format)
- Remove `kind` field (not used in V2 format)
- Remove `cognate` field (not used in V2 format)

For verb_table rows: V1 uses `en` field; V2 uses `src` field. Change accordingly.

For tip cards: no structural changes needed; deepDive format is the same.

---

*Total salvageable items: 30 items covering ~52 teach cards, ~16 tip cards, ~2 verb table improvements*
