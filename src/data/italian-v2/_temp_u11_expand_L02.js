// Italian V2 Unit 11 Expansion — Lesson 5: Le espressioni di tempo al passato (Past Time Expressions Extended)
// Expands past tense unit with more time expressions and narrative connectors.

const LESSON_5 = {id:"itv2_u11l5", title:"Le espressioni di tempo", icon:"\u231A", xp:15, board:true, steps:[
  {type:"intro", title:"Le espressioni di tempo",
   desc:"Expand your past time vocabulary with more expressions for telling when things happened. These connectors help you build longer, more natural stories in Italian.",
   goals:["Use advanced time expressions with past tense","Connect events in chronological order","Tell coherent stories about the past"]},

  {type:"teach", trg:"prima", src:"before / first / earlier", pos:"adv", gender:null,
   note:"From Latin 'primus' (first). Multiple uses.\n'Prima di...' = before... 'Prima' alone = earlier, first.",
   example:"A: Cosa hai fatto prima di cena?\nB: Prima ho fatto una passeggiata.",
   exampleSrc:"A: What did you do before dinner?\nB: First I took a walk.",
   funFact:"'Prima' is a Swiss Army knife word: 'prima' (before/first/earlier), 'prima di' (before + noun), 'prima che' (before + verb, with subjunctive). From Latin 'primus' (first). English 'prime,' 'primary,' and 'primitive' share this root."},

  {type:"teach", trg:"dopo", src:"after / afterwards / then", pos:"adv", gender:null,
   note:"From Latin 'de post' (from behind). 'Dopo' = after.\n'Dopo di...' = after... 'Dopo pranzo' = after lunch.",
   example:"A: Cosa hai fatto dopo?\nB: Dopo sono andato al cinema.",
   exampleSrc:"A: What did you do afterwards?\nB: Afterwards I went to the cinema.",
   funFact:"'Dopo' serves as adverb ('after that'), preposition ('dopo pranzo' = after lunch), and conjunction ('dopo che' = after + clause). From Latin 'de post' (from behind). 'Dopodomani' = the day after tomorrow. 'Dopotutto' = after all."},

  {type:"teach", trg:"poi", src:"then / next / afterwards", pos:"adv", gender:null,
   note:"From Latin 'post' (after). Interchangeable with 'dopo' in storytelling.\n'E poi?' = And then?",
   example:"A: E poi cosa e successo?\nB: Poi siamo andati a mangiare una pizza.",
   exampleSrc:"A: And then what happened?\nB: Then we went to eat a pizza.",
   funFact:"'Poi' is shorter and more conversational than 'dopo.' Italians chain events: 'Prima ho lavorato, poi ho mangiato, e poi sono uscito' (First I worked, then I ate, and then I went out). 'E poi?' (And then?) is the classic prompt to continue a story."},

  {type:"teach", trg:"improvvisamente", src:"suddenly", pos:"adv", gender:null,
   note:"From 'improvviso' (unexpected, sudden).\n'All'improvviso' = all of a sudden (more colloquial).",
   example:"A: Improvvisamente ha iniziato a piovere.\nB: E non avevamo l'ombrello!",
   exampleSrc:"A: Suddenly it started to rain.\nB: And we did not have an umbrella!",
   funFact:"From 'in-' (not) + 'provvisto' (prepared, foreseen). Something 'improvviso' is unforeseen. The shorter 'all'improvviso' (all of a sudden) is more common in speech. 'Di colpo' (suddenly, literally 'of a blow') is another frequent alternative."},

  {type:"teach", trg:"finalmente", src:"finally / at last", pos:"adv", gender:null,
   note:"From 'finale' (final). 'Finalmente!' = At last! (relief, joy).\nDoes NOT mean 'finally' in the sense of 'in conclusion.'",
   example:"A: Finalmente e arrivato il treno!\nB: Due ore di ritardo!",
   exampleSrc:"A: The train finally arrived!\nB: Two hours late!",
   funFact:"'Finalmente' always carries positive emotion: relief, joy, satisfaction that waiting is over. It does NOT mean 'in conclusion' (use 'infine' for that). 'Finalmente sei qui!' (At last you are here!) is always welcoming. From 'fine' (end) + '-mente' (adverb suffix)."},

  {type:"teach", trg:"intanto", src:"meanwhile / in the meantime", pos:"adv", gender:null,
   note:"Contraction of 'in tanto' (in so much [time]).\nUsed for simultaneous actions. 'Nel frattempo' = synonym.",
   example:"A: Io cucino. Intanto tu apparecchia.\nB: Va bene!",
   exampleSrc:"A: I cook. Meanwhile you set the table.\nB: Okay!",
   funFact:"'Intanto' and 'nel frattempo' both mean 'meanwhile.' 'Intanto' is more colloquial. It signals that two things happen at the same time: 'Io studio, intanto lei lavora' (I study, meanwhile she works). Essential for layered storytelling."},

  {type:"teach", trg:"l'altro ieri", src:"the day before yesterday", pos:"adv", gender:null,
   note:"'L'altro' = the other. 'L'altro ieri' = the other yesterday.\n'L'altro giorno' = the other day (vague past).",
   example:"A: Quando l'hai visto?\nB: L'altro ieri al mercato.",
   exampleSrc:"A: When did you see him?\nB: The day before yesterday at the market.",
   funFact:"Italian has a specific word for 'the day before yesterday,' unlike English which needs three words. 'L'altro giorno' (the other day) is deliberately vague and is used when you do not remember the exact day. Both are very common in Italian conversation."},

  {type:"teach", trg:"una volta", src:"once / one time", pos:"adv", gender:null,
   note:"'Volta' = time (occurrence). 'Una volta' = once.\n'Due volte' = twice. 'C'era una volta' = once upon a time.",
   example:"A: Ci sono stato una volta.\nB: Ti e piaciuto?",
   exampleSrc:"A: I have been there once.\nB: Did you like it?",
   funFact:"'C'era una volta' (there was once upon a time) is how every Italian fairy tale begins. 'Volta' specifically means an instance/occurrence, not clock time ('ora'). 'Ogni volta' (every time), 'qualche volta' (sometimes), 'l'ultima volta' (the last time)."},

  {type:"teach", trg:"nel frattempo", src:"in the meantime", pos:"adv", gender:null,
   note:"'Frattempo' = intervening time. More formal than 'intanto.'\nUsed in both spoken and written Italian.",
   example:"A: Il pranzo sara pronto tra un'ora.\nB: Nel frattempo leggo un libro.",
   exampleSrc:"A: Lunch will be ready in an hour.\nB: In the meantime I will read a book.",
   funFact:"'Fra' (between) + 'tempo' (time) = 'frattempo' (the time between). Slightly more formal than 'intanto.' Used when filling time between two events: 'Aspetto il treno. Nel frattempo bevo un caffe' (I am waiting for the train. Meanwhile I drink a coffee)."},

  {type:"teach", trg:"all'improvviso", src:"all of a sudden / out of nowhere", pos:"adv", gender:null,
   note:"From 'improvviso' (unexpected). More colloquial than 'improvvisamente.'\n'All'improvviso' adds dramatic flair to stories.",
   example:"A: Camminavamo tranquilli e all'improvviso...\nB: Cosa? Racconta!",
   exampleSrc:"A: We were walking calmly and all of a sudden...\nB: What? Tell me!",
   funFact:"'All'improvviso' is the storyteller's secret weapon. It creates a dramatic pause and signals something unexpected. Italians love dramatic storytelling, using hands, voice changes, and words like 'all'improvviso' to build suspense. It is more dramatic than 'improvvisamente.'"},

  // Quiz steps
  {type:"mc", q:"What is the difference between 'prima' and 'dopo'?",
   opts:["Prima means before, dopo means after","They are the same","Prima means now","Dopo means before"],
   ans:"Prima means before, dopo means after",
   hint:"These are the basic time opposites. 'Prima di cena' (before dinner), 'dopo cena' (after dinner)."},

  {type:"fb", s:"E {1} cosa e successo?",
   a:["poi"],
   opts:["poi","prima","mai","gia"],
   hint:"You want the storyteller to continue. This word means 'then' or 'next' in a sequence.",
   sSrc:"And {1} what happened?"},

  {type:"match", pairs:[
    {trg:"prima", src:"before / first"},
    {trg:"dopo", src:"after / then"},
    {trg:"poi", src:"then / next"},
    {trg:"finalmente", src:"finally / at last"},
    {trg:"intanto", src:"meanwhile"}
  ]},

  {type:"mc", q:"What does 'C'era una volta' mean?",
   opts:["Once upon a time","There was a turn","It was one way","Once it was good"],
   ans:"Once upon a time",
   hint:"This is how Italian fairy tales begin. 'Volta' means time/occurrence, not a physical turn."},

  {type:"fb", s:"{1} e arrivato il treno! Due ore di ritardo!",
   a:["Finalmente"],
   opts:["Finalmente","Improvvisamente","Intanto","Prima"],
   hint:"You have been waiting for a long time and feel relieved. This word expresses joy that the wait is over.",
   sSrc:"{1} the train arrived! Two hours late!"},

  {type:"mc", q:"What does 'all'improvviso' add to a story?",
   opts:["Dramatic surprise and suspense","A conclusion","A gentle transition","Humor"],
   ans:"Dramatic surprise and suspense",
   hint:"Something unexpected is about to happen. This phrase signals a sudden twist in the narrative."},

  {type:"fb", s:"Quando l'hai visto? L'{1} ieri.",
   a:["altro"],
   opts:["altro","ultimo","primo","anno"],
   hint:"Not yesterday, but the day before. 'L'altro ieri' is a specific two-days-ago expression.",
   sSrc:"When did you see him? The day before {1}."},

  {type:"mc", q:"What is the difference between 'intanto' and 'nel frattempo'?",
   opts:["Intanto is more colloquial, nel frattempo more formal","They have different meanings","Intanto is past only","Nel frattempo is future only"],
   ans:"Intanto is more colloquial, nel frattempo more formal",
   hint:"Both mean 'meanwhile.' One is everyday speech, the other fits better in writing or formal narration."},

  {type:"fb", s:"{1} ha iniziato a piovere.",
   a:["Improvvisamente"],
   opts:["Improvvisamente","Finalmente","Intanto","Prima"],
   hint:"The rain started without warning, catching everyone off guard. This long adverb means 'suddenly.'",
   sSrc:"{1} it started to rain."}
]};
export default LESSON_5;
