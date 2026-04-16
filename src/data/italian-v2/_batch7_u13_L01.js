// Batch 7 — Unit 13 extra lesson. Il congiuntivo: Hopes, Doubts & Wishes
const BATCH7_L1 = {id:"itv2_u13l_b7_1", title:"Speranze e dubbi", icon:"\u{1F4AD}", xp:15, board:true, steps:[
{type:"intro", title:"Speranze e dubbi",
 desc:"Express hopes, doubts, and wishes using subjunctive triggers and related vocabulary.",
 goals:["Express hopes and wishes","Voice doubts and uncertainties","Use subjunctive-trigger expressions fluently"]},

{type:"teach", trg:"la speranza", src:"the hope", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le speranze.\n'Sperare' = to hope. Triggers subjunctive: 'spero che venga.'",
 example:"A: C'e ancora speranza?\nB: Si, non perdere mai la speranza.",
 exampleSrc:"A: Is there still hope?\nB: Yes, never lose hope.",
 funFact:"'La speranza e l'ultima a morire' (hope is the last to die) is one of Italy's most beloved sayings. It echoes the myth of Pandora's box, where hope remained."},

{type:"teach", trg:"il dubbio", src:"the doubt", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i dubbi.\n'Senza dubbio' = without doubt. 'Dubitare' = to doubt.",
 example:"A: Ho qualche dubbio su questa decisione.\nB: E normale avere dubbi.",
 exampleSrc:"A: I have some doubts about this decision.\nB: It is normal to have doubts.",
 funFact:"'Dubbio' triggers the subjunctive: 'dubito che sia vero' (I doubt it is true). Cartesian doubt ('dubito ergo cogito') was actually expressed in Latin, which Italian preserves."},

{type:"teach", trg:"il desiderio", src:"the wish / desire", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i desideri.\n'Desiderare' = to wish/desire. Triggers subjunctive.",
 example:"A: Qual e il tuo desiderio piu grande?\nB: Desidero che ci sia pace nel mondo.",
 exampleSrc:"A: What is your biggest wish?\nB: I wish there were peace in the world.",
 funFact:"'Desiderio' comes from Latin 'de sideribus' (from the stars). A desire was originally something you wished upon a star. The poetic etymology matches the Italian spirit."},

{type:"teach", trg:"temere", src:"to fear / to be afraid", pos:"verb", gender:null,
 note:"Regular -ere verb. temo, temi, teme.\nTriggers subjunctive: 'temo che piova.'",
 example:"A: Temo che il treno sia in ritardo.\nB: Controlliamo gli orari.",
 exampleSrc:"A: I fear the train is delayed.\nB: Let us check the schedules.",
 funFact:"'Temere' is more formal than 'avere paura.' In legal language, 'si teme che' (it is feared that) is used for official warnings and court documents."},

{type:"teach", trg:"supporre", src:"to suppose / to assume", pos:"verb", gender:null,
 note:"Irregular verb like 'porre.' suppongo, supponi, suppone.\nTriggers subjunctive.",
 example:"A: Suppongo che abbia ragione.\nB: Non sempre le supposizioni sono corrette.",
 exampleSrc:"A: I suppose he is right.\nB: Assumptions are not always correct.",
 funFact:"'Supporre' is built from 'sub' (under) + 'porre' (to place). You are 'placing underneath,' creating a foundation of assumption. The same root gives English 'suppose.'"},

{type:"teach", trg:"sperare", src:"to hope", pos:"verb", gender:null,
 note:"Regular -are verb. spero, speri, spera.\nTriggers subjunctive: 'spero che tu stia bene.'",
 example:"A: Spero che domani faccia bel tempo.\nB: Anch'io, voglio andare al mare.",
 exampleSrc:"A: I hope the weather is nice tomorrow.\nB: Me too, I want to go to the sea.",
 funFact:"'Sperare' comes from the same Latin root as 'prosperity.' Hope and thriving are linguistically connected. 'Disperare' (to despair) adds the negative prefix 'dis-.'"},

{type:"teach", trg:"augurarsi", src:"to wish / to hope for", pos:"verb", gender:null,
 note:"Reflexive -are verb. mi auguro, ti auguri, si augura.\n'Mi auguro che...' = I hope that...",
 example:"A: Mi auguro che tutto vada bene.\nB: Anche noi ce lo auguriamo.",
 exampleSrc:"A: I hope everything goes well.\nB: We hope so too.",
 funFact:"'Auguri!' is Italy's universal well-wishing word: for birthdays, holidays, exams, everything. 'Tanti auguri a te' is the Italian 'Happy Birthday' song."},

{type:"teach", trg:"il timore", src:"the fear / concern", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i timori.\nMore formal than 'paura.' 'Timoroso' = fearful.",
 example:"A: Il timore di sbagliare blocca molte persone.\nB: Bisogna superare i timori.",
 exampleSrc:"A: The fear of making mistakes blocks many people.\nB: One must overcome fears.",
 funFact:"'Timore' is the refined, literary word for fear, while 'paura' is everyday. 'Timore reverenziale' means reverential awe, a respect so deep it borders on fear."},

{type:"teach", trg:"nonostante", src:"despite / although", pos:"conj", gender:null,
 note:"Conjunction. Triggers subjunctive: 'nonostante sia tardi.'\nSynonym: 'malgrado.'",
 example:"A: Nonostante piova, esco lo stesso.\nB: Porta l'ombrello almeno!",
 exampleSrc:"A: Despite the rain, I am going out anyway.\nB: At least bring an umbrella!",
 funFact:"'Nonostante' literally means 'not standing against.' It is one of the most tested subjunctive triggers in CILS exams. Mastering it signals B1+ competence."},

{type:"teach", trg:"a patto che", src:"on condition that / provided that", pos:"conj", gender:null,
 note:"Conjunction. Triggers subjunctive: 'a patto che tu venga.'\n'Patto' = pact/agreement.",
 example:"A: Ti aiuto, a patto che tu mi aiuti domani.\nB: D'accordo, affare fatto!",
 exampleSrc:"A: I will help you, on condition that you help me tomorrow.\nB: Deal!",
 funFact:"'Patto' comes from Latin 'pactum' (agreement). Italy's postwar constitution is sometimes called the 'patto sociale' (social pact) between citizens and the state."},

{type:"teach", trg:"prima che", src:"before (+ subjunctive)", pos:"conj", gender:null,
 note:"Conjunction. Always triggers subjunctive: 'prima che piova.'\n'Prima di' + infinitive when same subject.",
 example:"A: Andiamo prima che chiuda il negozio.\nB: Si, sbrighiamoci!",
 exampleSrc:"A: Let us go before the shop closes.\nB: Yes, let us hurry!",
 funFact:"'Prima che' always requires subjunctive because the action has not happened yet (it is uncertain). This is a key test item at B1 level in CILS and CELI exams."},

{type:"teach", trg:"senza che", src:"without (+ subjunctive)", pos:"conj", gender:null,
 note:"Conjunction. Triggers subjunctive: 'senza che nessuno se ne accorga.'\nIndicates something happening unnoticed.",
 example:"A: E uscito senza che nessuno lo vedesse.\nB: Come ha fatto?",
 exampleSrc:"A: He left without anyone seeing him.\nB: How did he manage?",
 funFact:"'Senza che' is one of the trickier subjunctive triggers because it describes a negative condition. It appears frequently in mystery novels and crime shows."},

{type:"teach", trg:"qualunque", src:"whatever / whichever", pos:"adj", gender:null,
 note:"Adjective. Invariable. Triggers subjunctive: 'qualunque cosa succeda.'\nSynonym: 'qualsiasi.'",
 example:"A: Qualunque cosa succeda, restiamo insieme.\nB: Promesso.",
 exampleSrc:"A: Whatever happens, we stay together.\nB: Promised.",
 funFact:"'Qualunque' and 'qualsiasi' are interchangeable. 'Qualunquismo' is a political term for populist apathy, coined from the postwar movement 'L'Uomo Qualunque' (The Common Man)."},

{type:"mc", q:"Quale parola italiana viene 'dalle stelle' (de sideribus)?",
 opts:["desiderio","dubbio","speranza","timore"],
 ans:"desiderio",
 hint:"A wish or longing. Its Latin root connects to the stars."},

{type:"fb", s:"Spero che domani {1} bel tempo.", a:["faccia"],
 opts:["faccia","fa","fara","fare"],
 hint:"After 'spero che' you need the subjunctive form of 'fare.'",
 sSrc:"I hope the weather is nice tomorrow."},

{type:"match", pairs:[
 {trg:"la speranza", src:"hope"},
 {trg:"il dubbio", src:"doubt"},
 {trg:"il desiderio", src:"wish"},
 {trg:"il timore", src:"fear"}
]},

{type:"mc", q:"Quale congiunzione richiede SEMPRE il congiuntivo?",
 opts:["prima che","dopo che","perche","quando"],
 ans:"prima che",
 hint:"It expresses something that has not happened yet. 'Before' + subjunctive."},

{type:"fb", s:"{1} piova, esco lo stesso.", a:["Nonostante"],
 opts:["Nonostante","Perche","Quando","Dopo che"],
 hint:"Meaning 'despite' or 'although.' Always followed by the subjunctive.",
 sSrc:"{1} it rains, I am going out anyway."},

{type:"mc", q:"Che cosa significa 'a patto che'?",
 opts:["on condition that","because","before","without"],
 ans:"on condition that",
 hint:"An agreement: I will do X if you do Y. Requires subjunctive."},

{type:"fb", s:"Ti aiuto, a patto che tu mi {1} domani.", a:["aiuti"],
 opts:["aiuti","aiuta","aiutare","aiuto"],
 hint:"After 'a patto che' you need the subjunctive. The 'tu' form of 'aiutare.'",
 sSrc:"I will help you, on condition that you {1} me tomorrow."},

{type:"match", pairs:[
 {trg:"nonostante", src:"despite"},
 {trg:"prima che", src:"before"},
 {trg:"senza che", src:"without"},
 {trg:"qualunque", src:"whatever"}
]}
]};
export default BATCH7_L1;
