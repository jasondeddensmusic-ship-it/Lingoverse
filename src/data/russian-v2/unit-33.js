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
 example:"A: Следовательно, мы согласны.\nB: Да.",
 exampleSrc:"A: Therefore, we agree.\nB: Yes.",
 funFact:"Следовательно is heavily used in written Russian, academic papers, legal documents. Cognate of 'следовать' (to follow). Literally 'it follows.'"},

{type:"teach", trg:"однако", src:"however (formal)", pos:"conj", gender:null,
 note:"Formal contrast.\nCasual: но.",
 example:"A: Однако это было хорошо.\nB: Да, хорошо.",
 exampleSrc:"A: However, this was good.\nB: Yes, good.",
 funFact:"Однако is formal 'but/however.' Russian writers love using it to start sentences. 'Однако,' with comma, means 'however' at start. 'Однако' without can mean 'although.'"},

{type:"teach", trg:"поскольку", src:"since / inasmuch as (formal)", pos:"conj", gender:null,
 note:"Formal causal.\nCasual: потому что, так как.",
 example:"A: Поскольку время есть.\nB: Да, хорошо.",
 exampleSrc:"A: Inasmuch as there is time.\nB: Yes, good.",
 funFact:"Поскольку is formal causal conjunction. Official documents use it extensively. 'Поскольку' vs 'потому что' is a register signal: formal vs casual."},

{type:"teach", trg:"вследствие", src:"as a result of (formal)", pos:"prep", gender:null,
 note:"Formal preposition + genitive.\nCasual: из-за.",
 example:"A: Вследствие плохой погоды — нет.\nB: Да, понятно.",
 exampleSrc:"A: As a result of bad weather — no.\nB: Yes, understood.",
 funFact:"Вследствие + genitive is bureaucratic/formal. Russian officialese: вследствие, по причине, в связи с — all indicate causation with specific register."},

{type:"teach", trg:"согласно", src:"according to (formal)", pos:"prep", gender:null,
 note:"Formal preposition + dative.\nCasual: по, судя по.",
 example:"A: Согласно этому — да.\nB: Да, согласно.",
 exampleSrc:"A: According to this — yes.\nB: Yes, according to.",
 funFact:"Согласно + dative is formal reference. 'Согласно закону' (according to the law), 'согласно статье' (according to the article). Legal/academic standard."},

{type:"teach", trg:"необходимо", src:"it is necessary (formal)", pos:"adv", gender:null,
 note:"Formal impersonal.\nCasual: надо, нужно.",
 example:"A: Необходимо работать.\nB: Да, необходимо.",
 exampleSrc:"A: It is necessary to work.\nB: Yes, it is necessary.",
 funFact:"Необходимо sounds bureaucratic and serious. 'Надо' sounds conversational. Russians choose based on register: political speech vs friend chat."},

{type:"teach", trg:"таким образом", src:"thus / in this way (formal)", pos:"phrase", gender:null,
 note:"Formal transition.\nCasual: так.",
 example:"A: Таким образом, всё ясно.\nB: Хорошо.",
 exampleSrc:"A: Thus, everything is clear.\nB: Good.",
 funFact:"'Таким образом' closes arguments formally. Russian academic writing loves it. At conclusion of proofs, essays: 'Таким образом, мы доказали...'"},

{type:"teach", trg:"в связи с", src:"in connection with (formal)", pos:"phrase", gender:null,
 note:"Formal + instrumental.\nCasual: из-за, по поводу.",
 example:"A: В связи с этим — да.\nB: Да, понятно.",
 exampleSrc:"A: In connection with this — yes.\nB: Yes, understood.",
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
,{type:"match",pairs:[{trg:"необходимо",src:"it is necessary (formal)"},{trg:"в связи с",src:"in connection with (formal)"}]}]}

]};
export default UNIT_33;
