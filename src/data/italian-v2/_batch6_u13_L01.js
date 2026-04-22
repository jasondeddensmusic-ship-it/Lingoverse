// Batch 6. Unit 13 extra lesson. Il congiuntivo: Subjunctive with Impersonal Verbs
const BATCH6_L1 = {id:"itv2_u13l_b6_1", title:"Verbi impersonali e congiuntivo", icon:"\u{1F52E}", xp:15, board:true, steps:[
{type:"intro", title:"Verbi impersonali e congiuntivo",
 desc:"Learn impersonal expressions that trigger the subjunctive mood and practice using them in context.",
 goals:["Use impersonal expressions with the subjunctive","Distinguish subjunctive triggers from indicative ones","Express necessity, probability, and opinions"]},

{type:"teach", trg:"conviene che", src:"it is advisable that", pos:"verb", gender:null,
 note:"Impersonal form of 'convenire.' Triggers congiuntivo.\nUsed for giving advice or suggesting the best course.",
 example:"A: Conviene che tu parta presto.\nB: Hai ragione, c'è sempre traffico.",
 exampleSrc:"A: It is advisable that you leave early.\nB: You are right, there is always traffic.",
 funFact:"'Convenire' also means 'to be worth it' in terms of value: 'conviene comprare online' (it is better to buy online). The subjunctive use adds a layer of advice."},

{type:"teach", trg:"basta che", src:"as long as / provided that", pos:"conj", gender:null,
 note:"Conjunction triggering congiuntivo. From 'bastare' (to be enough).\nSets a minimum condition.",
 example:"A: Puoi uscire, basta che torni prima delle dieci.\nB: Va bene, promesso!",
 exampleSrc:"A: You can go out, as long as you come back before ten.\nB: Alright, I promise!",
 funFact:"'Basta' alone is one of the most useful Italian words: 'enough!' As a conjunction with 'che,' it creates a conditional clause requiring subjunctive."},

{type:"teach", trg:"a meno che non", src:"unless", pos:"conj", gender:null,
 note:"Conjunction triggering congiuntivo. The 'non' is mandatory but\ndoes NOT make it negative. It is a pleonastic (extra) 'non.'",
 example:"A: Andiamo al mare, a meno che non piova.\nB: Le previsioni dicono sole!",
 exampleSrc:"A: We will go to the beach, unless it rains.\nB: The forecast says sun!",
 funFact:"The 'non' in 'a meno che non' confuses even Italian learners. It is grammatically required but does not negate: 'a meno che non piova' means 'unless it rains,' not 'unless it does not rain.'"},

{type:"teach", trg:"prima che", src:"before (+ subjunctive)", pos:"conj", gender:null,
 note:"Conjunction triggering congiuntivo. 'Prima' (before) + 'che.'\nAlways subjunctive because the event has not happened yet.",
 example:"A: Devo finire prima che arrivi il capo.\nB: Hai ancora mezz'ora.",
 exampleSrc:"A: I need to finish before the boss arrives.\nB: You still have half an hour.",
 funFact:"'Prima che' always takes subjunctive because it refers to an unrealized event. Compare 'dopo che' (after) which takes indicative because the event already happened."},

{type:"teach", trg:"nonostante", src:"despite / although", pos:"conj", gender:null,
 note:"Conjunction triggering congiuntivo. Can also be a preposition.\n'Nonostante che' or 'nonostante' + subjunctive.",
 example:"A: Nonostante piova, usciamo lo stesso.\nB: Prendo l'ombrello!",
 exampleSrc:"A: Despite it raining, we are going out anyway.\nB: I will take the umbrella!",
 funFact:"'Nonostante' literally means 'not standing against.' In formal writing, 'malgrado' and 'sebbene' are alternatives, all requiring subjunctive."},

{type:"teach", trg:"purche", src:"provided that / as long as", pos:"conj", gender:null,
 note:"Conjunction triggering congiuntivo. More formal than 'basta che.'\nSets a condition for something to happen.",
 example:"A: Ti aiuto, purche tu mi ascolti.\nB: D'accordo, ti ascolto.",
 exampleSrc:"A: I will help you, provided that you listen to me.\nB: Agreed, I am listening.",
 funFact:"'Purche' is a contraction of 'pur che' (even though). It is more literary than 'basta che' but common in formal speech and writing."},

{type:"teach", trg:"affinché", src:"so that / in order that", pos:"conj", gender:null,
 note:"Conjunction triggering congiuntivo. Expresses purpose.\nMore formal than 'perché' (so that).",
 example:"A: Parlo lentamente affinché tutti capiscano.\nB: Grazie, così e più chiaro.",
 exampleSrc:"A: I speak slowly so that everyone understands.\nB: Thank you, it is clearer that way.",
 funFact:"'Affinche' is a compound of 'a fine che' (to the end that). In everyday speech, Italians often use 'perché' + subjunctive for the same meaning."},

{type:"teach", trg:"qualunque", src:"whichever / whatever", pos:"adj", gender:null,
 note:"Indefinite adjective. Triggers congiuntivo in relative clauses.\nSame for masculine and feminine.",
 example:"A: Qualunque cosa tu decida, ti sostengo.\nB: Grazie, significa molto per me.",
 exampleSrc:"A: Whatever you decide, I support you.\nB: Thank you, that means a lot to me.",
 funFact:"'Qualunque' and 'qualsiasi' are interchangeable. Both trigger subjunctive because they refer to an undefined, hypothetical situation."},

{type:"teach", trg:"dovunque", src:"wherever", pos:"adv", gender:null,
 note:"Indefinite adverb. Triggers congiuntivo in subordinate clauses.\nFrom 'dove' (where) + 'unque.'",
 example:"A: Dovunque tu vada, ti seguiro.\nB: Sei un vero amico.",
 exampleSrc:"A: Wherever you go, I will follow you.\nB: You are a true friend.",
 funFact:"'Dovunque,' 'ovunque,' and 'in qualunque posto' all mean 'wherever.' They all trigger subjunctive because the location is hypothetical and undefined."},

{type:"teach", trg:"chiunque", src:"whoever / anyone", pos:"pron", gender:null,
 note:"Indefinite pronoun. Triggers congiuntivo.\n'Chiunque' + subjunctive = whoever (does something).",
 example:"A: Chiunque voglia venire e benvenuto.\nB: Lo dico a tutti i miei amici.",
 exampleSrc:"A: Whoever wants to come is welcome.\nB: I will tell all my friends.",
 funFact:"'Chiunque' ('chi' + 'unque') works like 'whoever' in English. The '-unque' suffix creates indefinite words that always need subjunctive."},

{type:"teach", trg:"supporre", src:"to suppose / to assume", pos:"verb", gender:null,
 note:"Irregular -ere verb. suppongo, supponi, suppone.\nPast participle: supposto. Triggers congiuntivo.",
 example:"A: Suppongo che lui abbia ragione.\nB: Non ne sono sicuro.",
 exampleSrc:"A: I suppose he is right.\nB: I am not sure about that.",
 funFact:"'Supporre' follows the pattern of 'porre' (to put/place). Like other verbs of opinion, it triggers subjunctive because it expresses uncertainty."},

{type:"teach", trg:"dubitare", src:"to doubt", pos:"verb", gender:null,
 note:"Regular -are verb. dubito, dubiti, dubita.\nAlways triggers congiuntivo. Expresses uncertainty.",
 example:"A: Dubito che Marco venga alla festa.\nB: Neanche io ci credo.",
 exampleSrc:"A: I doubt that Marco will come to the party.\nB: I do not believe it either.",
 funFact:"'Dubitare' is a classic subjunctive trigger. The Latin phrase 'dubito ergo cogito' (I doubt, therefore I think) preceded Descartes by centuries."},

{type:"teach", trg:"pretendere", src:"to demand / to expect", pos:"verb", gender:null,
 note:"Irregular -ere verb. pretendo, pretendi, pretende.\nTriggers congiuntivo. NOT 'to pretend.'",
 example:"A: Pretendo che tu sia puntuale.\nB: Faro del mio meglio.",
 exampleSrc:"A: I demand that you be punctual.\nB: I will do my best.",
 funFact:"False friend alert: 'pretendere' means 'to demand/expect,' NOT 'to pretend.' 'To pretend' in Italian is 'fingere.' This catches many English speakers off guard."},

{type:"teach", trg:"impedire", src:"to prevent / to stop", pos:"verb", gender:null,
 note:"Regular -ire verb with -isc- infix: impedisco, impedisci, impedisce.\nCan trigger congiuntivo.",
 example:"A: La pioggia ha impedito che giocassimo a calcio.\nB: Peccato, sara per la prossima volta.",
 exampleSrc:"A: The rain prevented us from playing soccer.\nB: Too bad, it will be next time.",
 funFact:"'Impedire' comes from Latin 'impedire' (to shackle the feet, from 'im' + 'pes/pedis'). The idea of feet being blocked evolved into preventing action."},

{type:"teach", trg:"ammettere", src:"to admit / to allow", pos:"verb", gender:null,
 note:"Irregular -ere verb. ammetto, ammetti, ammette.\nPast participle: ammesso. Triggers congiuntivo.",
 example:"A: Ammetto che la situazione sia difficile.\nB: Almeno sei onesto.",
 exampleSrc:"A: I admit that the situation is difficult.\nB: At least you are honest.",
 funFact:"'Ammesso che' (assuming that/granted that) is a common subjunctive trigger. 'Ammesso e non concesso' (granted but not conceded) is a classic Italian rhetorical phrase."},

{type:"mc", q:"Quale congiunzione significa 'unless' e richiede 'non' pleonastico?",
 opts:["a meno che non","purche","nonostante","affinché"],
 ans:"a meno che non",
 hint:"This expression requires a grammatically unnecessary 'n...' that does not make it negative."},

{type:"fb", s:"{1} cosa tu decida, ti sostengo.", a:["Qualunque"],
 opts:["Qualunque","Chiunque","Dovunque","Nonostante"],
 hint:"An indefinite adjective meaning 'whatever.' Triggers subjunctive.",
 sSrc:"{1} you decide, I support you."},

{type:"match", pairs:[
 {trg:"purche", src:"provided that"},
 {trg:"affinché", src:"so that"},
 {trg:"nonostante", src:"despite"},
 {trg:"prima che", src:"before"}
]},

{type:"mc", q:"Cosa significa 'pretendere' in italiano?",
 opts:["to prevent","to demand or expect","to pretend","to protect"],
 ans:"to demand or expect",
 hint:"A famous false friend. NOT the same as the English word it resembles."},

{type:"fb", s:"Parlo lentamente {1} tutti capiscano.", a:["affinché"],
 opts:["affinché","nonostante","a meno che","prima che"],
 hint:"A conjunction meaning 'so that' or 'in order that.' Expresses purpose.",
 sSrc:"I speak slowly {1} everyone understands."},

{type:"mc", q:"Perche 'prima che' richiede il congiuntivo?",
 opts:["Because it is formal language","Because it expresses certainty","Because the event has not happened yet","Because it is a negative expression"],
 ans:"Because the event has not happened yet",
 hint:"The subjunctive is used for events that are hypothetical or unrealized."},

{type:"fb", s:"{1} voglia venire alla festa e benvenuto.", a:["Chiunque"],
 opts:["Chiunque","Qualunque","Dovunque","Purche"],
 hint:"An indefinite pronoun meaning 'whoever.' Refers to any unspecified person.",
 sSrc:"{1} wants to come to the party is welcome."},

{type:"match", pairs:[
 {trg:"dubitare", src:"to doubt"},
 {trg:"supporre", src:"to suppose"},
 {trg:"impedire", src:"to prevent"},
 {trg:"ammettere", src:"to admit"}
]}
,{type:"match",pairs:[{trg:"conviene che",src:"it is advisable that"},{trg:"basta che",src:"as long as / provided that"},{trg:"dovunque",src:"wherever"},{trg:"pretendere",src:"to demand / to expect"}]}]};
export default BATCH6_L1;
