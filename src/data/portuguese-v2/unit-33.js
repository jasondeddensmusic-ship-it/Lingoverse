const UNIT_33 = {n:33, lang:"pt", srcLang:"en", track:"v2", title:"Português formal", sub:"Formal Writing", icon:"✍️", level:"B2.2", color:"#7B5EE8", lessons:[

{id:"ptv2_u33l1", title:"Formal Connectors", icon:"🔗", xp:15, board:true, steps:[
{type:"intro", title:"Writing Like a Professional",
 desc:"Formal Portuguese uses connectors that sound old-fashioned in speech but essential in writing. Master these and your emails, essays, and reports will read like a native professional's.",
 goals:["Learn formal transition words","Use 'entretanto' and 'portanto'","Write with precise connectors"]},

{type:"teach", trg:"conforme", src:"according to / as", pos:"prep", gender:null,
 note:"Replaces 'de acordo com' in formal text. More concise and elegant.",
 example:"A: Conforme a lei, todos têm direito à educação.\nB: Exato. O artigo 205 da Constituição garante isso.",
 exampleSrc:"A: According to the law, everyone has the right to education.\nB: Exactly. Article 205 of the Constitution guarantees it.",
 funFact:"Also doubles as an adjective meaning 'matching' or 'in agreement': 'estamos conformes'."},

{type:"teach", trg:"entretanto", src:"however / nevertheless", pos:"conj", gender:null,
 note:"Formal equivalent of 'mas' (but). Introduces a contrast in essays and reports.",
 example:"A: O projeto é ambicioso. Entretanto, falta orçamento.\nB: Verdade. Precisamos de mais recursos.",
 exampleSrc:"A: The project is ambitious. However, it lacks budget.\nB: True. We need more resources.",
 funFact:"Literally 'entre tanto', or 'in the meantime'. Shifted to pure contrast over centuries."},

{type:"teach", trg:"portanto", src:"therefore", pos:"conj", gender:null,
 note:"Introduces a logical conclusion. The formal cousin of 'então' (so).",
 example:"A: Chove há dias. Portanto, o solo está saturado.\nB: Sim, risco de deslizamento é alto.",
 exampleSrc:"A: It has rained for days. Therefore, the soil is saturated.\nB: Yes, landslide risk is high.",
 funFact:"From 'por tanto', meaning 'for that much'. A logical leap packed into one word."},

{type:"teach", trg:"ademais", src:"moreover / furthermore", pos:"adv", gender:null,
 note:"Adds another supporting argument. Used in essays and formal letters.",
 example:"A: O clima tropical favorece a agricultura. Ademais, o solo é fértil.\nB: Por isso o Brasil é um gigante agrícola.",
 exampleSrc:"A: The tropical climate favors agriculture. Moreover, the soil is fertile.\nB: That is why Brazil is an agricultural giant.",
 funFact:"Sounds old-fashioned in speech. In writing, adds serious polish."},

{type:"teach", trg:"outrossim", src:"likewise / also", pos:"adv", gender:null,
 note:"Extremely formal. Appears mostly in legal documents and official letters.",
 example:"A: O contrato deve ser assinado hoje. Outrossim, o pagamento será feito amanhã.\nB: Perfeito. Anotarei as duas informações.",
 exampleSrc:"A: The contract must be signed today. Likewise, payment will be made tomorrow.\nB: Perfect. I will note both details.",
 funFact:"Old-fashioned even in writing. Brazilians joke that 'outrossim' is the password of bureaucrats."},

{type:"mc",
 q:"Which word means 'therefore'?",
 opts:["entretanto","portanto","ademais","conforme"],
 ans:"portanto",
 hint:"Introduces a logical conclusion. Think of cause and effect."},

{type:"fb",
 s:"O orçamento é limitado. {1}, precisaremos priorizar.",
 a:["Portanto"],
 opts:["Portanto","Conforme","Ademais","Outrossim"],
 hint:"Introduces the logical consequence of the previous sentence.",
 sSrc:"The budget is limited. {1}, we will need to prioritize."},

{type:"mc",
 q:"Choose the formal word for 'however':",
 opts:["mas","porém","entretanto","ou"],
 ans:"entretanto",
 hint:"Most formal and longest option. Three syllables."},

{type:"match", pairs:[
 {trg:"conforme", src:"according to"},
 {trg:"entretanto", src:"however"},
 {trg:"portanto", src:"therefore"},
 {trg:"ademais", src:"moreover"},
 {trg:"outrossim", src:"likewise"}
]}
]},

{id:"ptv2_u33l2", title:"Formal Prepositions", icon:"📜", xp:15, board:true, steps:[
{type:"intro", title:"Elevating Prepositions",
 desc:"Formal Portuguese replaces everyday prepositions with multi-word alternatives. 'Por causa de' becomes 'em virtude de'. This is the vocabulary of contracts, essays, and official speeches.",
 goals:["Learn formal prepositional phrases","Replace casual connectors","Write with authority"]},

{type:"teach", trg:"mediante", src:"by means of / through", pos:"prep", gender:null,
 note:"A formal way to say 'by way of' or 'in exchange for'. Common in legal and financial texts.",
 example:"A: O acordo será válido mediante a assinatura das partes.\nB: Entendido. Assinaremos hoje mesmo.",
 exampleSrc:"A: The agreement will be valid by means of the signature of the parties.\nB: Understood. We will sign today.",
 funFact:"Shares its root with 'médio' (middle): the path runs through the middle of something."},

{type:"teach", trg:"haja vista", src:"considering / given that", pos:"conj", gender:null,
 note:"Literally 'may there be sight'. A fossilized subjunctive phrase meaning 'considering'.",
 example:"A: O projeto precisa de revisão, haja vista os erros encontrados.\nB: Concordo. Revisaremos nesta semana.",
 exampleSrc:"A: The project needs review, considering the errors found.\nB: I agree. We will review this week.",
 funFact:"One of the rare frozen subjunctives in daily Portuguese. Sounds like Shakespeare would to English speakers."},

{type:"teach", trg:"no tocante a", src:"regarding / with regard to", pos:"prep", gender:null,
 note:"A formal topic-introducer. Equivalent to 'quanto a' but more elegant.",
 example:"A: No tocante ao orçamento, precisamos discutir.\nB: Certo. Reunião na sexta?",
 exampleSrc:"A: Regarding the budget, we need to discuss.\nB: Alright. Meeting on Friday?",
 funFact:"'Tocante' comes from 'tocar' (to touch). Literally 'in what touches on...'. Very image-rich."},

{type:"teach", trg:"em virtude de", src:"due to / by virtue of", pos:"prep", gender:null,
 note:"Formal replacement for 'por causa de'. Introduces a cause in official documents.",
 example:"A: O evento foi cancelado em virtude da pandemia.\nB: Infelizmente, era necessário.",
 exampleSrc:"A: The event was canceled due to the pandemic.\nB: Unfortunately, it was necessary.",
 funFact:"'Virtude' here keeps its old meaning of 'power' or 'force', not 'moral virtue'."},

{type:"teach", trg:"a respeito de", src:"about / concerning", pos:"prep", gender:null,
 note:"Formal alternative to 'sobre'. Used to introduce a topic in writing.",
 example:"A: Quero falar a respeito do novo contrato.\nB: Estou à disposição. Pode começar.",
 exampleSrc:"A: I want to speak about the new contract.\nB: I am available. Please begin.",
 funFact:"'Respeito' here means 'relation' or 'concern', not 'respect' in the moral sense."},

{type:"teach", trg:"doravante", src:"from now on / henceforth", pos:"adv", gender:null,
 note:"Another elegant one-word adverb. Sets a new rule or norm going forward.",
 example:"A: Doravante, as reuniões serão online.\nB: Ótimo. Economiza tempo de deslocamento.",
 exampleSrc:"A: From now on, meetings will be online.\nB: Great. It saves commuting time.",
 funFact:"Fuses 'de ora' (from now) + 'avante' (forward). A time-machine adverb in a single word."},

{type:"mc",
 q:"Which phrase means 'due to'?",
 opts:["mediante","em virtude de","a respeito de","no tocante a"],
 ans:"em virtude de",
 hint:"Introduces a cause or reason. Contains a word that sounds like the English one."},

{type:"fb",
 s:"{1} ao novo contrato, precisamos discutir detalhes.",
 a:["No tocante"],
 opts:["No tocante","Em virtude","Haja vista","Mediante"],
 hint:"Topic-introducer meaning 'regarding'.",
 sSrc:"{1} the new contract, we need to discuss details."},

{type:"mc",
 q:"Choose the formal expression meaning 'from now on':",
 opts:["agora","doravante","depois","hoje"],
 ans:"doravante",
 hint:"The longest, most formal-sounding option. Often in official memos."},

{type:"fb",
 s:"O contrato será válido {1} a assinatura das partes.",
 a:["mediante"],
 opts:["mediante","conforme","doravante","outrossim"],
 hint:"Means 'by means of' or 'through'. Often used with contracts.",
 sSrc:"The contract will be valid {1} the signature of the parties."},

{type:"mc",
 q:"What does 'haja vista' mean?",
 opts:["however","considering","moreover","likewise"],
 ans:"considering",
 hint:"Introduces a reason to support the previous statement."}
]},

{id:"ptv2_u33l3", title:"Formal Style Mastery", icon:"📝", xp:15, board:true, steps:[
{type:"intro", title:"Putting It All Together",
 desc:"Combine formal connectors into polished paragraphs. Learn final touches that separate student writing from professional prose.",
 goals:["Use 'não obstante' and 'assim sendo'","Build formal paragraphs","Understand register shifts"]},

{type:"teach", trg:"não obstante", src:"nevertheless / notwithstanding", pos:"conj", gender:null,
 note:"Stronger than 'entretanto'. Signals a contrast that does not block the conclusion.",
 example:"A: O plano é complexo. Não obstante, podemos executá-lo.\nB: Concordo. Vamos começar a planejar.",
 exampleSrc:"A: The plan is complex. Nevertheless, we can execute it.\nB: I agree. Let us start planning.",
 funFact:"'Obstar' means 'to obstruct'. 'Não obstante' literally means 'not obstructing'."},

{type:"teach", trg:"deste modo", src:"in this way / thus", pos:"adv", gender:null,
 note:"Summarizes a method just described. Common at the end of an explanation.",
 example:"A: Analisamos os dados cuidadosamente. Deste modo, chegamos à conclusão.\nB: Excelente metodologia.",
 exampleSrc:"A: We analyzed the data carefully. Thus, we reached the conclusion.\nB: Excellent methodology.",
 funFact:"Can be swapped with 'desta forma' or 'assim', with 'deste modo' being the most polished."},

{type:"teach", trg:"assim sendo", src:"that being so / therefore", pos:"conj", gender:null,
 note:"A gerund-based connector. Wraps up an argument before the final conclusion.",
 example:"A: Os prazos são apertados. Assim sendo, precisamos agir já.\nB: Vou acionar a equipe agora.",
 exampleSrc:"A: The deadlines are tight. That being so, we need to act now.\nB: I will notify the team now.",
 funFact:"Literally 'thus being'. A gerund acting as a full subordinate clause, very Latinate."},

{type:"tip", title:"Register Mastery: Casual vs Formal",
 text:"Same meaning, different registers:\n\nmas / porém / entretanto / não obstante (but)\nentão / portanto / assim sendo (therefore)\npor causa de / em virtude de (due to)\nsobre / a respeito de (about)\nde acordo com / conforme (according to)\n\nRule: the more formal the context, the longer the connector. Emails to friends use short words. Contracts use long phrases.",
 deepDive:{title:"When to Use What",
  text:"Casual conversation and WhatsApp: 'mas', 'então', 'sobre'. Professional email: 'porém', 'portanto', 'a respeito de'. Academic essay or legal document: 'entretanto', 'não obstante', 'em virtude de', 'haja vista', 'outrossim'. Watch how Brazilian newspapers like Folha and Estadão shift register depending on the section. Opinion pieces use formal connectors; lifestyle uses casual ones."}},

{type:"mc",
 q:"Which phrase means 'nevertheless'?",
 opts:["deste modo","não obstante","assim sendo","haja vista"],
 ans:"não obstante",
 hint:"Signals contrast but not blockage. Contains a negation."},

{type:"fb",
 s:"Os prazos são apertados. {1}, precisamos entregar.",
 a:["Assim sendo"],
 opts:["Assim sendo","Deste modo","Não obstante","Haja vista"],
 hint:"Introduces the logical conclusion based on the previous statement.",
 sSrc:"Deadlines are tight. {1}, we need to deliver."},

{type:"mc",
 q:"Choose the most formal way to say 'but':",
 opts:["mas","porém","contudo","não obstante"],
 ans:"não obstante",
 hint:"Longest and most old-fashioned of the options."},

{type:"fb",
 s:"Analisamos os dados. {1}, chegamos à conclusão.",
 a:["Deste modo"],
 opts:["Deste modo","Não obstante","Haja vista","Mediante"],
 hint:"Summarizes the method just described. Means 'in this way'.",
 sSrc:"We analyzed the data. {1}, we reached the conclusion."},

{type:"match", pairs:[
 {trg:"não obstante", src:"nevertheless"},
 {trg:"deste modo", src:"in this way"},
 {trg:"assim sendo", src:"that being so"},
 {trg:"doravante", src:"from now on"},
 {trg:"a respeito de", src:"regarding"}
]},

{type:"mc",
 q:"Which register fits a WhatsApp to a friend?",
 opts:["não obstante","entretanto","porém","mas"],
 ans:"mas",
 hint:"Shortest, most everyday. Three letters."}
]}

]}; export default UNIT_33;
