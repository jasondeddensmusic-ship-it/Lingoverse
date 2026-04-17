// Russian V2 Unit 33 — Formal Language and Written Style (B2.2)
const UNIT_33 = {n:33, lang:"ru", srcLang:"en", track:"v2", title:"Формальный язык", sub:"Formal Language",
 icon:"✍️", level:"B2.2", color:"#7B5EE8",
 lessons:[

{id:"ruv2_u33l1", title:"Formal Register", icon:"✍️", xp:15, board:true, steps:[

{type:"intro", title:"Formal Russian",
 desc:"B2 speakers distinguish colloquial from formal register. Formal Russian has specific vocabulary, connectors, and structures used in writing and professional contexts.",
 goals:["Recognize formal register","Use formal connectors","Shift to formal style"]},

{type:"teach", trg:"следовательно", src:"therefore (formal)", pos:"adv", gender:null,
 note:"Formal conjunction.\nCasual: поэтому, так что.",
 example:"A: Следовательно, мы приняли решение.\nB: Понятно.",
 exampleSrc:"A: Therefore, we made a decision.\nB: Understood.",
 funFact:"Следовательно is heavily used in written Russian, academic papers, legal documents. Cognate of 'следовать' (to follow). Literally 'it follows.'"},

{type:"teach", trg:"однако", src:"however (formal)", pos:"conj", gender:null,
 note:"Formal contrast.\nCasual: но.",
 example:"A: Однако результат был положительный.\nB: Неожиданно.",
 exampleSrc:"A: However, the result was positive.\nB: Unexpectedly.",
 funFact:"Однако is formal 'but/however.' Russian writers love using it to start sentences. 'Однако,' with comma, means 'however' at start. 'Однако' without can mean 'although.'"},

{type:"teach", trg:"поскольку", src:"since / inasmuch as (formal)", pos:"conj", gender:null,
 note:"Formal causal.\nCasual: потому что, так как.",
 example:"A: Поскольку время уже позднее.\nB: Надо закругляться.",
 exampleSrc:"A: Inasmuch as it's already late.\nB: We should wrap up.",
 funFact:"Поскольку is formal causal conjunction. Official documents use it extensively. 'Поскольку' vs 'потому что' is a register signal: formal vs casual."},

{type:"teach", trg:"вследствие", src:"as a result of (formal)", pos:"prep", gender:null,
 note:"Formal preposition + genitive.\nCasual: из-за.",
 example:"A: Вследствие плохой погоды.\nB: Отменим матч.",
 exampleSrc:"A: As a result of bad weather.\nB: We'll cancel the match.",
 funFact:"Вследствие + genitive is bureaucratic/formal. Russian officialese: вследствие, по причине, в связи с — all indicate causation with specific register."},

{type:"teach", trg:"согласно", src:"according to (formal)", pos:"prep", gender:null,
 note:"Formal preposition + dative.\nCasual: по, судя по.",
 example:"A: Согласно законам физики.\nB: Да, это очевидно.",
 exampleSrc:"A: According to the laws of physics.\nB: Yes, that's obvious.",
 funFact:"Согласно + dative is formal reference. 'Согласно закону' (according to the law), 'согласно статье' (according to the article). Legal/academic standard."},

{type:"teach", trg:"необходимо", src:"it is necessary (formal)", pos:"adv", gender:null,
 note:"Formal impersonal.\nCasual: надо, нужно.",
 example:"A: Необходимо принять меры.\nB: Какие именно?",
 exampleSrc:"A: It is necessary to take measures.\nB: What measures exactly?",
 funFact:"Необходимо sounds bureaucratic and serious. 'Надо' sounds conversational. Russians choose based on register: political speech vs friend chat."},

{type:"teach", trg:"таким образом", src:"thus / in this way (formal)", pos:"phrase", gender:null,
 note:"Formal transition.\nCasual: так.",
 example:"A: Таким образом, проблема решена.\nB: Хорошо.",
 exampleSrc:"A: Thus, the problem is solved.\nB: Good.",
 funFact:"'Таким образом' closes arguments formally. Russian academic writing loves it. At conclusion of proofs, essays: 'Таким образом, мы доказали...'"},

{type:"teach", trg:"в связи с", src:"in connection with (formal)", pos:"phrase", gender:null,
 note:"Formal + instrumental.\nCasual: из-за, по поводу.",
 example:"A: В связи с этим я хочу сказать...\nB: Слушаю.",
 exampleSrc:"A: In connection with this, I want to say...\nB: I'm listening.",
 funFact:"'В связи с' + instrumental is officialese. 'В связи с этим/тем' (in connection with this/that) opens formal remarks. Business correspondence staple."},

{type:"tip", title:"Formal vs Casual Russian",
 text:"FORMAL REGISTER:\n• следовательно (therefore)\n• однако (however)\n• поскольку (inasmuch as)\n• вследствие + gen (as a result of)\n• согласно + dat (according to)\n• необходимо (it's necessary)\n• таким образом (thus)\n• в связи с + ins (in connection with)\n\nCASUAL EQUIVALENTS:\n• поэтому (so)\n• но (but)\n• потому что (because)\n• из-за + gen (because of)\n• по (according to)\n• надо/нужно (need to)\n• так (so)\n• из-за этого (because of this)\n\nWHEN TO USE FORMAL:\n• Official documents\n• Academic papers\n• News articles\n• Business letters\n• Formal speeches\n\nWHEN TO USE CASUAL:\n• Texting friends\n• Casual conversation\n• Blog posts\n• Social media\n\nMixing registers poorly sounds awkward. Master both, use appropriately.",
 icon:"✍️"},

{type:"mc", q:"Which is the formal equivalent of 'но'?",
 opts:["поэтому","однако","потому что","надо"],
 ans:"однако",
 hint:"Formal 'however' starts sentences — more academic tone than 'but.'"},

{type:"mc", q:"'Необходимо' vs 'надо' differ in:",
 opts:["Meaning (different concepts)","Register (formal vs casual)","Grammar (different cases)","Nothing — they're synonyms"],
 ans:"Register (formal vs casual)",
 hint:"Same meaning, but different social/professional context."},

{type:"fb", s:"Опоздание произошло {1} пробок.",
 a:["вследствие"],
 opts:["вследствие","из-за","поэтому","однако"],
 hint:"Formal 'as a result of' + genitive.",
 sSrc:"The delay occurred as a result of traffic jams."},

{type:"match", pairs:[
  {trg:"следовательно", src:"therefore (formal)"},
  {trg:"однако", src:"however (formal)"},
  {trg:"поскольку", src:"inasmuch as"},
  {trg:"согласно", src:"according to"},
  {trg:"таким образом", src:"thus"}
]}
,

{type:"match", pairs:[
  {trg:"в связи с", src:"in connection with (formal)"}
]},

{type:"match", pairs:[
  {trg:"необходимо", src:"it is necessary (formal)"}
]}]}

]};
export default UNIT_33;
