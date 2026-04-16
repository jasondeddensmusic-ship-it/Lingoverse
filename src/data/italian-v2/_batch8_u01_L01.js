// Batch 8 — Unit 01 extra lesson. Greetings: Formal Register & Titles
const BATCH8_L1 = {id:"itv2_u01l_b8_1", title:"Signore e signora", icon:"🎩", xp:15, board:true, steps:[
{type:"intro", title:"Signore e signora",
 desc:"Learn formal titles and polite expressions for respectful conversations in Italian.",
 goals:["Use formal titles correctly","Distinguish tu and Lei registers","Master polite request phrases"]},

{type:"teach", trg:"il signore", src:"the gentleman / Mr.", pos:"noun", gender:"m",
 note:"Masculine noun. Drops the final -e before a name: Signor Rossi.\nUsed as a polite form of address.",
 example:"A: Buongiorno, signore.\nB: Buongiorno a Lei.",
 exampleSrc:"A: Good morning, sir.\nB: Good morning to you.",
 funFact:"'Signore' comes from Latin 'senior' (elder). The same root gives English 'sir' and Spanish 'senor.'"},

{type:"teach", trg:"la signora", src:"the lady / Mrs.", pos:"noun", gender:"f",
 note:"Feminine noun. No letter drops before names: Signora Bianchi.\nUsed for married and unmarried women alike today.",
 example:"A: Signora, posso aiutarLa?\nB: Si, cerco la farmacia.",
 exampleSrc:"A: Madam, may I help you?\nB: Yes, I am looking for the pharmacy.",
 funFact:"'Signorina' (Miss) is now considered outdated and even offensive. Modern Italian uses 'Signora' for all adult women."},

{type:"teach", trg:"permesso", src:"excuse me (may I pass)", pos:"intj", gender:null,
 note:"Used when entering a room or passing through a crowd.\nDifferent from 'scusi' (to get attention).",
 example:"A: Permesso, posso entrare?\nB: Avanti, prego!",
 exampleSrc:"A: Excuse me, may I come in?\nB: Come in, please!",
 funFact:"Italians always say 'permesso' when entering someone's home, even if the door is open. It is considered very rude to walk in silently."},

{type:"teach", trg:"accomodarsi", src:"to take a seat / make oneself comfortable", pos:"verb", gender:null,
 note:"Reflexive verb. Formal: Si accomodi. Informal: Accomodati.\nUsed in restaurants, offices, and homes.",
 example:"A: Prego, si accomodi.\nB: Grazie, molto gentile.",
 exampleSrc:"A: Please, have a seat.\nB: Thank you, very kind.",
 funFact:"This is one of the most quintessentially Italian expressions of hospitality. You will hear it everywhere from doctor offices to hair salons."},

{type:"teach", trg:"gentile", src:"kind / polite", pos:"adj", gender:null,
 note:"Adjective, same form for masculine and feminine.\n'Gentile Signore/a' = Dear Sir/Madam (in letters).",
 example:"A: Che persona gentile!\nB: Si, e sempre molto educata.",
 exampleSrc:"A: What a kind person!\nB: Yes, she is always very polite.",
 funFact:"'Gentile' comes from Latin 'gentilis' (of the same clan). In formal emails, 'Gentile' replaces English 'Dear' and is considered essential."},

{type:"teach", trg:"disturbare", src:"to disturb / to bother", pos:"verb", gender:null,
 note:"Regular -are verb. 'Scusi se disturbo' = Sorry if I am bothering you.\nVery common in formal situations.",
 example:"A: Scusi, non voglio disturbare.\nB: No, dica pure!",
 exampleSrc:"A: Excuse me, I do not want to disturb.\nB: No, go ahead!",
 funFact:"Italians are much more conscious about 'disturbing' others than English speakers. Even phoning someone often starts with 'Scusa se ti disturbo.'"},

{type:"teach", trg:"volentieri", src:"gladly / with pleasure", pos:"adv", gender:null,
 note:"Adverb. A warm, enthusiastic way to accept an offer.\nMore expressive than a simple 'si.'",
 example:"A: Vuoi un caffe?\nB: Volentieri, grazie!",
 exampleSrc:"A: Do you want a coffee?\nB: Gladly, thank you!",
 funFact:"'Volentieri' comes from the Latin 'voluntarius' (willing). It is the most charming way to say yes in Italian."},

{type:"teach", trg:"figurati", src:"do not mention it / no problem", pos:"intj", gender:null,
 note:"Informal. Formal version: Si figuri.\nUsed to dismiss thanks or apologize.",
 example:"A: Grazie mille per l'aiuto!\nB: Ma figurati, di niente!",
 exampleSrc:"A: Thank you so much for the help!\nB: Do not mention it, it is nothing!",
 funFact:"Literally means 'imagine yourself' (that it was no trouble). Italians stack polite dismissals: 'Ma figurati, di niente, ci mancherebbe!'"},

{type:"teach", trg:"augurare", src:"to wish", pos:"verb", gender:null,
 note:"Regular -are verb. 'Ti auguro buona fortuna' = I wish you good luck.\nUsed for greetings and celebrations.",
 example:"A: Ti auguro buon compleanno!\nB: Grazie, sei gentile!",
 exampleSrc:"A: I wish you a happy birthday!\nB: Thank you, you are kind!",
 funFact:"'Auguri!' (wishes!) is the universal Italian congratulations word. Used for birthdays, holidays, exams, weddings, and any good news."},

{type:"teach", trg:"il complimento", src:"the compliment", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i complimenti.\n'Fare un complimento' = to pay a compliment.",
 example:"A: Che bel vestito! E un complimento!\nB: Grazie, sei molto gentile.",
 exampleSrc:"A: What a beautiful dress! It is a compliment!\nB: Thank you, you are very kind.",
 funFact:"'Complimenti!' on its own means 'congratulations!' Italians use it generously for any achievement, big or small."},

{type:"mc",
 q:"How do you say 'excuse me, may I come in?' in Italian?",
 opts:["Permesso, posso entrare?","Scusi, dov'e la porta?","Buongiorno, come sta?","Mi dispiace, sono in ritardo."],
 ans:"Permesso, posso entrare?",
 hint:"This word is specifically used when entering a space or passing through. Think of asking 'permission.'"},

{type:"match", pairs:[
  {trg:"volentieri", src:"gladly"},
  {trg:"figurati", src:"do not mention it"},
  {trg:"permesso", src:"excuse me (may I pass)"},
  {trg:"gentile", src:"kind / polite"}
]},

{type:"fb",
 s:"Prego, si {1}.",
 a:["accomodi"],
 opts:["accomodi","disturbi","auguri","figuri"],
 hint:"This polite phrase invites someone to take a seat or make themselves comfortable.",
 sSrc:"Please, have a {1}."},

{type:"mc",
 q:"Which title is now considered outdated for women in Italian?",
 opts:["Signorina","Signora","Dottoressa","Professoressa"],
 ans:"Signorina",
 hint:"Modern Italian uses one title for all adult women, regardless of marital status."},

{type:"fb",
 s:"Ti {1} buona fortuna per l'esame!",
 a:["auguro"],
 opts:["auguro","disturbo","accomodo","figuro"],
 hint:"This verb means 'to wish.' You use it to express good wishes for someone.",
 sSrc:"I {1} you good luck for the exam!"},

{type:"mc",
 q:"What does 'Complimenti!' mean when used alone?",
 opts:["Congratulations!","I am sorry!","Excuse me!","Thank you!"],
 ans:"Congratulations!",
 hint:"It is related to the English word 'compliment' but used as an exclamation of praise."}
]};
export default BATCH8_L1;
