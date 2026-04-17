// FORMAT_TEMPLATE.js — Reference for ALL content agents
// This file shows the EXACT format for every step type.
// Agents: match this format EXACTLY. Do not invent fields.
// Size: ~2KB. Read THIS instead of scanning 10,000+ line unit files.

// ═══ UNIT WRAPPER ═══
{n:25, lang:"de", srcLang:"en", track:"v2", title:"Die Uni", sub:"Herr Professor Doktor",
 icon:"🎓", level:"B2.1", color:"#7B5EE8",
 lessons:[

// ═══ LESSON WRAPPER ═══
{id:"deu_r25l1", title:"Herr Professor Doktor", icon:"🎓", xp:15, board:true, steps:[

// ═══ STEP TYPES ═══

// 1. INTRO — lesson opener. desc + goals ALWAYS in English (source language).
{type:"intro", title:"Herr Professor Doktor",
 desc:"Enter the world of German academia. University vocabulary, academic register, and the art of the Vorlesung.",
 goals:["Learn 20 core university vocabulary words","Understand German academic culture","Recognize formal register markers"]},

// 2. STORY — narrative card. trg=German, src=English. Speaker + mood required.
{type:"story", speaker:"narrator", mood:"warm", art:"de-ber-campus",
 trg:"Freie Universität Berlin. Oktober. Die Bäume in Dahlem tragen noch Laub.",
 src:"Freie Universität Berlin. October. The trees in Dahlem still carry leaves."},

// 3. TEACH — vocabulary card. ALL fields required for new content.
{type:"teach", trg:"die Vorlesung", src:"the lecture", pos:"noun", gender:"f",
 note:"Feminine noun. Vor (before) + Lesung (reading).\nProfessors 'read aloud' their material.",
 example:"A: Wann beginnt die Vorlesung?\nB: Um zehn Uhr im Hörsaal 1A.\nA: Ist sie interessant?\nB: Sehr! Der Professor ist brillant.",
 exampleSrc:"A: When does the lecture start?\nB: At ten o'clock in lecture hall 1A.\nA: Is it interesting?\nB: Very! The professor is brilliant.",
 funFact:"Students knock on desks to applaud, never clap. The Vorlesung is sacred."},

// 4. TIP — grammar/culture card. text + deepDive ALWAYS in English. German examples inline OK.
{type:"tip", title:"Nominalisierung: From Verb to Noun",
 text:"German creates nouns from verbs using the -ung suffix:\n\nuntersuchen (to investigate) > die Untersuchung (investigation)\nforschen (to research) > die Forschung (research)\nbilden (to educate) > die Bildung (education)\n\nAll -ung nouns are feminine and form plurals with -en.",
 deepDive:{title:"Why German Loves Nouns",
  text:"Academic German prefers nouns over verbs. This is called Nominalstil (nominal style). Instead of 'Wir untersuchen das Problem' (We investigate the problem), formal writing prefers 'Die Untersuchung des Problems' (The investigation of the problem). Sounds more objective and distanced."}},

// 5. VERB_TABLE — conjugation grid. note ALWAYS in English.
{type:"verb_table", title:"Konjunktiv II Vergangenheit",
 note:"The past subjunctive uses hätte/wäre + Partizip II. Choose hätte for most verbs, wäre for movement/state-change verbs.",
 groups:[{label:"mit hätte", rows:[
   {pronoun:"ich", form:"hätte gemacht", src:"would have done"},
   {pronoun:"du", form:"hättest gemacht", src:"would have done"}
 ]},{label:"mit wäre", rows:[
   {pronoun:"ich", form:"wäre gegangen", src:"would have gone"},
   {pronoun:"du", form:"wärst gegangen", src:"would have gone"}
 ]}]},

// 6. MC — multiple choice. q in German, hint in English. 4 options. Vary answer position.
{type:"mc",
 q:"Was ist ein Hörsaal?",
 opts:["Ein großer Raum für Vorlesungen","Eine kleine Bibliothek","Ein Büro für Dozenten","Die Mensa"],
 ans:"Ein großer Raum für Vorlesungen",
 hint:"The word is a compound: Hör (listen) + Saal (hall). What do students do in a lecture?"},

// 7. FB — fill-in-blank. SINGLE blank {1} ONLY. Include sSrc. hint in English.
{type:"fb",
 s:"Für das Studium muss man die {1} vor dem 15. Oktober abschließen.",
 a:["Einschreibung"],
 opts:["Einschreibung","Vorlesung","Prüfung","Forschung"],
 hint:"The formal process of registering at a university. You 'write yourself in.'",
 sSrc:"For your studies, you must complete the {1} before October 15th."},

// 8. DRAG_FILL — multi-blank drag. Uses blanks:{} object. hint in English.
{type:"drag_fill",
 s:"Die {1} zeigt, dass die {2} korrekt war.",
 blanks:{"1":"Untersuchung","2":"Hypothese"},
 pool:["Untersuchung","Hypothese","Vorlesung","Ergebnis"],
 hint:"The investigation confirms the initial assumption was correct."},

// 9. MATCH — matching pairs. trg=German, src=English.
{type:"match", pairs:[
  {trg:"Vorlesung", src:"lecture"},
  {trg:"Seminar", src:"discussion class"},
  {trg:"Mensa", src:"cafeteria"},
  {trg:"Fakultät", src:"faculty/department"}
]},

// 10. TR — translation input.
{type:"tr", mk:"Translate to German:", dir:"src>trg"}

]}  // end lesson steps
]}  // end unit lessons

// ═══ JAPANESE EXAMPLE (PP65 — kanji+furigana notation) ═══
// ALL Japanese content MUST use this format. Pure hiragana is WRONG.
// Unit wrapper:
{n:1, lang:"ja", srcLang:"en", track:"v2", title:"はじめまして", sub:"Greetings & Self-Introduction",
 icon:"🗾", level:"A1.1", color:"#7B5EE8",
 lessons:[
{id:"jav2_u1l1", title:"あいさつ", icon:"👋", xp:15, board:true, steps:[

// TEACH — Japanese with kanji+furigana. trg and example use kanji(reading) notation.
{type:"teach", trg:"先生(せんせい)", src:"teacher", pos:"noun", gender:null,
 note:"Used for teachers, doctors, lawyers, and respected professionals.",
 example:"A: 先生(せんせい)はどこですか？\nB: 先生(せんせい)は教室(きょうしつ)にいます。\nA: 何時(なんじ)に来(き)ますか？\nB: もうすぐ来(き)ると思(おも)います。",
 exampleSrc:"A: Where is the teacher?\nB: The teacher is in the classroom.\nA: What time will they come?\nB: I think they will come soon.",
 funFact:"Literally means 'born before' (先 = before, 生 = born/life). Shows deep respect for experience."},

// Key rules:
// - Nouns: kanji+furigana → 先生(せんせい), 大学(だいがく)
// - Verb stems: kanji, endings hiragana → 食(た)べる, 行(い)く
// - Particles: always hiragana → は, が, を, に, で
// - Grammatical endings: always hiragana → です, ます, ました

]}  // end lesson
]}  // end unit
