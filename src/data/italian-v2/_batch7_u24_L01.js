// Batch 7 — Unit 24 extra lesson. Il periodo ipotetico: Complex Conditions & Alternatives
const BATCH7_L1 = {id:"itv2_u24l_b7_1", title:"Condizioni e alternative", icon:"\u{1F500}", xp:15, board:true, steps:[
{type:"intro", title:"Condizioni e alternative",
 desc:"Master complex conditional expressions, alternative scenarios, and nuanced hypothetical language.",
 goals:["Express complex conditions and alternatives","Use advanced conditional connectors","Handle hypothetical scenarios fluently"]},

{type:"teach", trg:"nel caso in cui", src:"in case / in the event that", pos:"conj", gender:null,
 note:"Conjunction. Triggers subjunctive: 'nel caso in cui piova.'\nMore formal than 'se.'",
 example:"A: Nel caso in cui piova, restiamo a casa.\nB: D'accordo, preparo un piano B.",
 exampleSrc:"A: In case it rains, we stay home.\nB: Agreed, I will prepare a plan B.",
 funFact:"'Nel caso in cui' is a key B1/B2 connector. It signals preparedness for uncertainty. In legal Italian, it appears constantly in contracts and regulations."},

{type:"teach", trg:"ammesso che", src:"assuming that / granted that", pos:"conj", gender:null,
 note:"Conjunction. Triggers subjunctive: 'ammesso che sia vero.'\nExpresses a conditional assumption.",
 example:"A: Ammesso che arrivi in tempo, possiamo partire.\nB: Faro del mio meglio.",
 exampleSrc:"A: Assuming you arrive on time, we can leave.\nB: I will do my best.",
 funFact:"'Ammesso e non concesso' (granted but not conceded) is a legal and rhetorical formula. It means: even if we accept your premise (which we do not), the conclusion still fails."},

{type:"teach", trg:"purche", src:"as long as / provided that", pos:"conj", gender:null,
 note:"Conjunction. Triggers subjunctive: 'purche tu venga.'\n'Pur di' + infinitive = willing to do anything.",
 example:"A: Ti aiuto, purche tu studi.\nB: Promesso, studio tre ore al giorno.",
 exampleSrc:"A: I will help you, as long as you study.\nB: Promised, I study three hours a day.",
 funFact:"'Pur di' (willing to do anything for) shows extreme determination: 'farei qualsiasi cosa pur di riuscire' (I would do anything to succeed). Very emotional and expressive."},

{type:"teach", trg:"a meno che non", src:"unless", pos:"conj", gender:null,
 note:"Conjunction. Triggers subjunctive. Note the 'non' (not actually negative).\n'A meno che non piova' = unless it rains.",
 example:"A: Vengo alla festa, a meno che non debba lavorare.\nB: Speriamo di no!",
 exampleSrc:"A: I will come to the party, unless I have to work.\nB: Let us hope not!",
 funFact:"The 'non' in 'a meno che non' confuses learners because it looks negative but is not. It is called 'non pleonastico' (pleonastic not). Standard Italian requires it, though some omit it."},

{type:"teach", trg:"comunque", src:"anyway / however", pos:"adv", gender:null,
 note:"Adverb and conjunction. 'Comunque vada' = however it goes.\nAlso: 'in any case.'",
 example:"A: Comunque vada, sono contento.\nB: L'importante e partecipare.",
 exampleSrc:"A: However it goes, I am happy.\nB: The important thing is to participate.",
 funFact:"'Comunque' is one of Italy's most overused words. It functions as 'anyway,' 'however,' 'in any case,' and even as a filler word. Italians sprinkle it into conversations constantly."},

{type:"teach", trg:"altrimenti", src:"otherwise", pos:"adv", gender:null,
 note:"Adverb. 'Sbrigati, altrimenti perdiamo il treno' = hurry, otherwise we miss the train.",
 example:"A: Devi prenotare adesso, altrimenti non ci sono piu posti.\nB: Lo faccio subito!",
 exampleSrc:"A: You must book now, otherwise there are no more seats.\nB: I will do it right away!",
 funFact:"'Altrimenti' comes from 'altro' (other) + 'mente' (mind/manner). Literally: in another way. It always implies a negative consequence if the condition is not met."},

{type:"teach", trg:"semmai", src:"if anything / if at all", pos:"adv", gender:null,
 note:"Adverb. Contraction of 'se mai' (if ever).\n'Semmai, ti chiamo io' = if anything, I will call you.",
 example:"A: Devo chiamarti?\nB: No, semmai ti chiamo io.",
 exampleSrc:"A: Should I call you?\nB: No, if anything I will call you.",
 funFact:"'Semmai' is wonderfully versatile. It softens statements: 'non e stupido, semmai e pigro' (he is not stupid, if anything he is lazy). A very Italian way of correcting diplomatically."},

{type:"teach", trg:"eventualmente", src:"possibly / if need be", pos:"adv", gender:null,
 note:"Adverb. FALSE FRIEND: does NOT mean 'eventually' (that is 'alla fine').\nMeans 'if the situation arises.'",
 example:"A: Eventualmente, possiamo cambiare piano.\nB: Bene, e sempre meglio avere un piano B.",
 exampleSrc:"A: If need be, we can change the plan.\nB: Good, it is always better to have a plan B.",
 funFact:"This is one of the most famous false friends between Italian and English. 'Eventualmente' means 'possibly/if needed,' NOT 'eventually.' English speakers trip on this constantly."},

{type:"teach", trg:"qualora", src:"in the event that / should", pos:"conj", gender:null,
 note:"Conjunction. Very formal. Triggers subjunctive.\n'Qualora fosse necessario' = should it be necessary.",
 example:"A: Qualora avessi bisogno, chiamami.\nB: Grazie, lo terro a mente.",
 exampleSrc:"A: Should you need anything, call me.\nB: Thank you, I will keep that in mind.",
 funFact:"'Qualora' is formal, elegant Italian. You find it in contracts, laws, and polished writing. Using it in speech signals education and refinement. It combines 'quale' + 'ora' (which hour/moment)."},

{type:"teach", trg:"a condizione che", src:"on condition that", pos:"conj", gender:null,
 note:"Conjunction. Triggers subjunctive.\nSynonym of 'a patto che.' 'Condizione' = condition.",
 example:"A: Accetto, a condizione che il prezzo non cambi.\nB: Il prezzo e fisso, non ti preoccupare.",
 exampleSrc:"A: I accept, on condition that the price does not change.\nB: The price is fixed, do not worry.",
 funFact:"In negotiations, 'a condizione che' sets clear boundaries. Italian contracts use this phrase extensively. It is more formal than 'a patto che' and appears in legal language."},

{type:"teach", trg:"per quanto", src:"as much as / however much", pos:"conj", gender:null,
 note:"Conjunction. 'Per quanto mi riguarda' = as far as I am concerned.\nCan trigger subjunctive.",
 example:"A: Per quanto sia difficile, non mi arrendo.\nB: Ammiro la tua determinazione.",
 exampleSrc:"A: However difficult it is, I will not give up.\nB: I admire your determination.",
 funFact:"'Per quanto mi riguarda' is a staple of Italian opinion-giving. It means 'as far as I am concerned' and elegantly introduces a personal view."},

{type:"teach", trg:"eppure", src:"and yet / nevertheless", pos:"conj", gender:null,
 note:"Conjunction. Introduces a contrasting truth.\n'Eppure si muove' = and yet it moves (Galileo).",
 example:"A: Era stanchissimo, eppure ha continuato.\nB: Che forza di volonta!",
 exampleSrc:"A: He was exhausted, and yet he continued.\nB: What willpower!",
 funFact:"'Eppur si muove!' (And yet it moves!) is attributed to Galileo after his forced recantation that the Earth orbits the Sun. Whether he really said it or not, it became Italy's most famous act of defiance."},

{type:"teach", trg:"viceversa", src:"vice versa / the other way around", pos:"adv", gender:null,
 note:"Adverb. From Latin 'vice versa' (the position being changed).\n'E viceversa' = and vice versa.",
 example:"A: Se piove, restiamo a casa, e viceversa.\nB: Chiaro, bel tempo = passeggiata.",
 exampleSrc:"A: If it rains, we stay home, and vice versa.\nB: Clear, nice weather = walk.",
 funFact:"'Viceversa' entered English directly from Italian/Latin. In everyday Italian, it is used constantly to avoid repeating the reverse of a statement."},

{type:"mc", q:"Che cosa significa 'eventualmente' in italiano?",
 opts:["possibly / if need be","eventually / in the end","always","never"],
 ans:"possibly / if need be",
 hint:"A famous false friend. It does NOT mean 'eventually' in English."},

{type:"fb", s:"Vengo alla festa, {1} che non debba lavorare.", a:["a meno"],
 opts:["a meno","a patto","nel caso","a condizione"],
 hint:"The first two words of 'unless' in Italian. Followed by 'che non.'",
 sSrc:"I will come to the party, {1} I have to work."},

{type:"match", pairs:[
 {trg:"comunque", src:"anyway"},
 {trg:"altrimenti", src:"otherwise"},
 {trg:"eppure", src:"and yet"},
 {trg:"viceversa", src:"vice versa"}
]},

{type:"mc", q:"Chi disse 'Eppur si muove'?",
 opts:["Galileo Galilei","Leonardo da Vinci","Dante Alighieri","Niccolo Machiavelli"],
 ans:"Galileo Galilei",
 hint:"The famous astronomer, after being forced to deny that the Earth moves around the Sun."},

{type:"fb", s:"{1} fosse necessario, chiamami.", a:["Qualora"],
 opts:["Qualora","Comunque","Eppure","Altrimenti"],
 hint:"A very formal way of saying 'should' or 'in the event that.' Triggers subjunctive.",
 sSrc:"{1} it be necessary, call me."},

{type:"mc", q:"Quale congiunzione introduce una condizione con il congiuntivo e contiene 'non'?",
 opts:["a meno che non","purche","nel caso in cui","qualora"],
 ans:"a meno che non",
 hint:"Meaning 'unless.' The 'n...' is pleonastic (not actually negative)."},

{type:"fb", s:"Ti aiuto, {1} tu studi.", a:["purche"],
 opts:["purche","perche","finche","affinche"],
 hint:"Meaning 'as long as' or 'provided that.' A condition for helping.",
 sSrc:"I will help you, {1} you study."},

{type:"match", pairs:[
 {trg:"nel caso in cui", src:"in case"},
 {trg:"ammesso che", src:"assuming that"},
 {trg:"qualora", src:"should / in the event"},
 {trg:"semmai", src:"if anything"}
]}
]};
export default BATCH7_L1;
