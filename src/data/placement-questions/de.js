// German placement-quiz question bank.
// Schema: { id, level, q, opts[], ans, category? }

export const GERMAN_PLACEMENT = [
  // ═══ A1.1 — greetings, sein basics, gender, numbers 1-10 ═══
  { id:"de-a11-1", level:"A1.1", q:"Which greeting is used in the morning?", opts:["Guten Abend","Guten Morgen","Gute Nacht","Auf Wiedersehen"], ans:"Guten Morgen", category:"greetings" },
  { id:"de-a11-2", level:"A1.1", q:"'Ich ___ Student.' (I am a student.)", opts:["bin","bist","ist","sind"], ans:"bin", category:"sein" },
  { id:"de-a11-3", level:"A1.1", q:"Which article goes with 'Haus' (house)?", opts:["der","die","das","ein"], ans:"das", category:"articles" },
  { id:"de-a11-4", level:"A1.1", q:"Which number is 'sieben'?", opts:["5","6","7","8"], ans:"7", category:"numbers" },
  { id:"de-a11-5", level:"A1.1", q:"'Wie ___ du?' (What is your name?)", opts:["heißt","heißen","heiße","heißen"], ans:"heißt", category:"intro" },

  // A1.1 reinforcement pool
  { id:"de-a11-6", level:"A1.1", q:"The plural of 'das Buch' (book) is:", opts:["das Bücher","die Bücher","der Bücher","ein Bücher"], ans:"die Bücher", category:"plural" },
  { id:"de-a11-7", level:"A1.1", q:"'Wie geht ___?' (How are you?)", opts:["es dir","dir es","du es","es sich"], ans:"es dir", category:"greetings" },

  // ═══ A1.2 — present tense verbs, cases (nom/acc basics), possessives ═══
  { id:"de-a12-1", level:"A1.2", q:"'Wir ___ in Berlin.' (We live in Berlin.)", opts:["wohne","wohnst","wohnt","wohnen"], ans:"wohnen", category:"present-tense" },
  { id:"de-a12-2", level:"A1.2", q:"'___ Buch ist interessant.' (My book is interesting.)", opts:["Mein","Meine","Meinen","Meinem"], ans:"Mein", category:"possessive" },
  { id:"de-a12-3", level:"A1.2", q:"Accusative article for a masculine noun:", opts:["der","die","das","den"], ans:"den", category:"accusative" },
  { id:"de-a12-4", level:"A1.2", q:"'Er ___ Kaffee.' (He drinks coffee.)", opts:["trinke","trinkst","trinkt","trinken"], ans:"trinkt", category:"present-tense" },
  { id:"de-a12-5", level:"A1.2", q:"'Es gibt ___ Bücher.' (There are books.)", opts:["ein","eine","viele","einer"], ans:"viele", category:"quantifiers" },

  { id:"de-a12-6", level:"A1.2", q:"'Wie alt ___ du?' (How old are you?)", opts:["bist","bis","sind","seid"], ans:"bist", category:"sein" },
  { id:"de-a12-7", level:"A1.2", q:"'Sie ___ 25 Jahre alt.' (She is 25 years old.)", opts:["bin","bist","ist","sind"], ans:"ist", category:"sein" },

  // ═══ A2.1 — perfect tense, modal verbs, dative basics ═══
  { id:"de-a21-1", level:"A2.1", q:"'Ich ___ gestern ins Kino ___ .' (I went to the cinema yesterday.)", opts:["habe … gegangen","bin … gegangen","habe … gefahren","bin … gefahren"], ans:"bin … gegangen", category:"perfect" },
  { id:"de-a21-2", level:"A2.1", q:"'Ich ___ Deutsch lernen.' (I want to learn German.)", opts:["kann","muss","will","darf"], ans:"will", category:"modal-verbs" },
  { id:"de-a21-3", level:"A2.1", q:"Dative article for a masculine noun:", opts:["der","den","dem","des"], ans:"dem", category:"dative" },
  { id:"de-a21-4", level:"A2.1", q:"'Er ___ die Hausaufgaben gemacht.' (He did the homework.)", opts:["hat","ist","hatte","war"], ans:"hat", category:"perfect" },
  { id:"de-a21-5", level:"A2.1", q:"'Du ___ jetzt nicht schreien.' (You must not shout now.)", opts:["willst","kannst","darfst","sollst"], ans:"darfst", category:"modal-verbs" },

  { id:"de-a21-6", level:"A2.1", q:"'Sie ___ letztes Jahr in Berlin gewohnt.' (She lived in Berlin last year.)", opts:["hat","ist","hatte","war"], ans:"hat", category:"perfect" },
  { id:"de-a21-7", level:"A2.1", q:"Which word signals the perfect tense of a motion verb?", opts:["haben","sein","werden","können"], ans:"sein", category:"perfect" },

  // ═══ A2.2 — Konjunktiv II basics, comparative, two-way prepositions ═══
  { id:"de-a22-1", level:"A2.2", q:"'Wenn ich Zeit hätte, ___ ich kommen.' (If I had time, I would come.)", opts:["werde","würde","will","kann"], ans:"würde", category:"konjunktiv-2" },
  { id:"de-a22-2", level:"A2.2", q:"'Die Suppe ist ___.' (The soup is cold — right now.)", opts:["kalt","kälter","kälteste","kühl"], ans:"kalt", category:"adjectives" },
  { id:"de-a22-3", level:"A2.2", q:"'Maria ist ___ als Johann.' (Maria is taller than Johann.)", opts:["groß","größer","am größten","großer"], ans:"größer", category:"comparative" },
  { id:"de-a22-4", level:"A2.2", q:"'Das Buch liegt ___ dem Tisch.' (The book is on the table.)", opts:["an","in","auf","über"], ans:"auf", category:"two-way-prepositions" },
  { id:"de-a22-5", level:"A2.2", q:"'Ich fahre ___ die Stadt.' (I drive around the city.)", opts:["durch","mit","nach","von"], ans:"durch", category:"prepositions" },

  // ═══ B1.1 — Nebensätze, passive voice basics, Präteritum ═══
  { id:"de-b11-1", level:"B1.1", q:"'Ich weiß, ___ er kommt.' (I know that he is coming.)", opts:["das","dass","ob","wenn"], ans:"dass", category:"nebensatz" },
  { id:"de-b11-2", level:"B1.1", q:"'Das Buch ___ gelesen.' (The book is being read.)", opts:["hat","wird","ist","kann"], ans:"wird", category:"passive" },
  { id:"de-b11-3", level:"B1.1", q:"'Er ___ krank.' (He was ill.) — simple past", opts:["ist","war","wäre","wird"], ans:"war", category:"praeteritum" },
  { id:"de-b11-4", level:"B1.1", q:"'Als ich jung ___, spielte ich Fußball.'", opts:["bin","war","wäre","sei"], ans:"war", category:"praeteritum" },
  { id:"de-b11-5", level:"B1.1", q:"Verb position in a subordinate clause with 'weil':", opts:["second position","end position","first position","after subject"], ans:"end position", category:"word-order" },

  // ═══ B1.2 — Konjunktiv I (indirect speech), relative clauses, genitive ═══
  { id:"de-b12-1", level:"B1.2", q:"'Er sagte, er ___ müde.' (He said he was tired.) — Konjunktiv I", opts:["ist","sei","wäre","war"], ans:"sei", category:"konjunktiv-1" },
  { id:"de-b12-2", level:"B1.2", q:"'Das Buch, ___ ich gelesen habe, ist toll.' (The book that I read is great.)", opts:["den","das","die","dem"], ans:"das", category:"relative-clause" },
  { id:"de-b12-3", level:"B1.2", q:"Genitive article for a masculine noun:", opts:["der","des","dem","den"], ans:"des", category:"genitive" },
  { id:"de-b12-4", level:"B1.2", q:"'Ich habe ihn ___ für einen Freund.' (I mistook him for a friend.)", opts:["gehalten","gemacht","gegeben","gebracht"], ans:"gehalten", category:"idioms" },
  { id:"de-b12-5", level:"B1.2", q:"'Das ist der Mann, ___ Frau Ärztin ist.' (That is the man whose wife is a doctor.)", opts:["der","dem","dessen","die"], ans:"dessen", category:"relative-clause" },

  // ═══ B2.1 — extended passive, participles, advanced conjunctions ═══
  { id:"de-b21-1", level:"B2.1", q:"'Das Haus wurde ___.' (The house was built.) — Zustandspassiv", opts:["bauen","gebaut","gebaut worden","ist gebaut"], ans:"gebaut", category:"zustandspassiv" },
  { id:"de-b21-2", level:"B2.1", q:"'Ich wünschte, ich ___ dabei gewesen.' (I wish I had been there.)", opts:["hätte","wäre","würde","sei"], ans:"wäre", category:"konjunktiv-2-perf" },
  { id:"de-b21-3", level:"B2.1", q:"Extended participial attribute: '___ Brief' refers to a letter that has been read.", opts:["lesende","gelesen","gelesenen","zu lesenden"], ans:"gelesenen", category:"extended-attribute" },
  { id:"de-b21-4", level:"B2.1", q:"'Er kam, ___ er krank war.' (He came although he was ill.)", opts:["weil","dass","obwohl","wenn"], ans:"obwohl", category:"conjunctions" },
  { id:"de-b21-5", level:"B2.1", q:"'Sie tut so, ___ sie alles weiß.' (She acts as if she knows everything.)", opts:["dass","als ob","obwohl","damit"], ans:"als ob", category:"konjunktiv-2" },

  // ═══ B2.2 — advanced register, nominalizations, complex syntax ═══
  { id:"de-b22-1", level:"B2.2", q:"'___ des Regens gingen wir spazieren.' (Despite the rain we went for a walk.)", opts:["Wegen","Trotz","Dank","Während"], ans:"Trotz", category:"genitive-prepositions" },
  { id:"de-b22-2", level:"B2.2", q:"Which is the nominalization of 'entscheiden' (to decide)?", opts:["die Entscheidung","das Entscheiden","der Entscheid","die Entscheidende"], ans:"die Entscheidung", category:"nominalization" },
  { id:"de-b22-3", level:"B2.2", q:"Most formal way to express a request:", opts:["Mach das!","Könnten Sie das bitte tun?","Du solltest das machen.","Mach das mal."], ans:"Könnten Sie das bitte tun?", category:"register" },
  { id:"de-b22-4", level:"B2.2", q:"'___ er es versucht, scheitert er.' (However often he tries, he fails.)", opts:["Sooft","Weil","Obwohl","Wenn"], ans:"Sooft", category:"complex-conjunctions" },
  { id:"de-b22-5", level:"B2.2", q:"'Das Projekt ___ bis Freitag fertiggestellt worden.' (Pluperfect passive)", opts:["wurde","war","ist","hat"], ans:"war", category:"pluperfect-passive" },
];

export const QUESTIONS_BY_LEVEL = {};
for (const q of GERMAN_PLACEMENT) {
  QUESTIONS_BY_LEVEL[q.level] = QUESTIONS_BY_LEVEL[q.level] || [];
  QUESTIONS_BY_LEVEL[q.level].push(q);
}

export const LEVEL_ORDER = ['A1.1','A1.2','A2.1','A2.2','B1.1','B1.2','B2.1','B2.2'];

export default GERMAN_PLACEMENT;
