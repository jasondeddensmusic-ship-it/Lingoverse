// Batch 8 — Unit 15 extra lesson. Housing: Apartment Problems & Maintenance
const BATCH8_L1 = {id:"itv2_u15l_b8_1", title:"Problemi in casa", icon:"🔧", xp:15, board:true, steps:[
{type:"intro", title:"Problemi in casa",
 desc:"Learn vocabulary for common household problems, repairs, and dealing with maintenance issues.",
 goals:["Describe household problems","Request repairs","Communicate with landlords and technicians"]},

{type:"teach", trg:"la perdita", src:"the leak", pos:"noun", gender:"f",
 note:"Feminine noun. Also means 'loss.' 'Una perdita d'acqua' = a water leak.\n'Perdere' = to lose/leak.",
 example:"A: C'e una perdita d'acqua in bagno.\nB: Chiamo subito l'idraulico.",
 exampleSrc:"A: There is a water leak in the bathroom.\nB: I will call the plumber right away.",
 funFact:"'Perdita' works for water, gas, time, and money. 'Perdita di tempo' (waste of time) is one of the most common Italian complaints."},

{type:"teach", trg:"l'idraulico", src:"the plumber", pos:"noun", gender:"m",
 note:"Masculine noun. From 'idraulica' (plumbing/hydraulics).\nOne of Italy's most called tradespeople.",
 example:"A: L'idraulico viene domani mattina.\nB: Finalmente! La perdita e da tre giorni.",
 exampleSrc:"A: The plumber is coming tomorrow morning.\nB: Finally! The leak has been for three days.",
 funFact:"Finding a good 'idraulico' in Italy is like finding gold. They are always busy. The joke goes that Italian plumbers are harder to book than doctors."},

{type:"teach", trg:"l'elettricista", src:"the electrician", pos:"noun", gender:"m",
 note:"Masculine/feminine (same form). 'Chiamare l'elettricista' = to call the electrician.",
 example:"A: La presa non funziona. Chiamo l'elettricista.\nB: Attento, non toccare i fili!",
 exampleSrc:"A: The socket does not work. I will call the electrician.\nB: Be careful, do not touch the wires!",
 funFact:"Italian electrical systems use 220V, unlike the American 110V. The standard Italian plug has three round pins in a row. Adapter chaos is a rite of passage for visitors."},

{type:"teach", trg:"il rubinetto", src:"the faucet / tap", pos:"noun", gender:"m",
 note:"Masculine noun. 'Il rubinetto gocciola' = the faucet drips.\nDiminutive of 'rubino' (ruby).",
 example:"A: Il rubinetto della cucina gocciola.\nB: Prova a chiuderlo più forte.",
 exampleSrc:"A: The kitchen faucet is dripping.\nB: Try closing it tighter.",
 funFact:"'Rubinetto' literally means 'little ruby.' Medieval taps were shaped like small ruby-colored cocks (roosters). The French 'robinet' shares the same origin."},

{type:"teach", trg:"la muffa", src:"the mold / mildew", pos:"noun", gender:"f",
 note:"Feminine noun. 'C'e muffa sul muro' = there is mold on the wall.\nCommon in old Italian buildings.",
 example:"A: C'e muffa nell'angolo del bagno.\nB: Serve più ventilazione.",
 exampleSrc:"A: There is mold in the corner of the bathroom.\nB: More ventilation is needed.",
 funFact:"Mold is a chronic issue in many old Italian apartments, especially in humid cities like Venice. 'Anti-muffa' (anti-mold) paint is a booming business."},

{type:"teach", trg:"la bolletta", src:"the utility bill", pos:"noun", gender:"f",
 note:"Feminine noun. 'Bolletta del gas/luce/acqua' = gas/electric/water bill.\n'Pagare le bollette' = to pay the bills.",
 example:"A: La bolletta della luce e arrivata.\nB: Quanto e questo mese?",
 exampleSrc:"A: The electricity bill arrived.\nB: How much is it this month?",
 funFact:"'Essere in bolletta' means to be broke. The expression comes from the idea that when you can barely pay your bills, you are in financial trouble."},

{type:"teach", trg:"il riscaldamento", src:"the heating", pos:"noun", gender:"m",
 note:"Masculine noun. 'Riscaldamento centralizzato' = central heating.\n'Riscaldare' = to heat.",
 example:"A: Il riscaldamento non funziona.\nB: In pieno inverno? Che disastro!",
 exampleSrc:"A: The heating is not working.\nB: In the middle of winter? What a disaster!",
 funFact:"Italian apartment buildings often have 'riscaldamento centralizzato' (central heating) controlled by the condominium. You cannot always adjust it individually."},

{type:"teach", trg:"il trasloco", src:"the move (house move)", pos:"noun", gender:"m",
 note:"Masculine noun. 'Fare il trasloco' = to move house.\n'Traslocare' = to relocate.",
 example:"A: Quando fai il trasloco?\nB: Sabato prossimo. Mi aiuti?",
 exampleSrc:"A: When are you moving?\nB: Next Saturday. Will you help me?",
 funFact:"In Italy, moving house often involves recruiting all your friends and family. Professional movers exist but are expensive. Pizza and beer are the traditional payment."},

{type:"teach", trg:"la caparra", src:"the deposit (rental)", pos:"noun", gender:"f",
 note:"Feminine noun. 'Versare la caparra' = to pay the deposit.\nUsually 2-3 months rent.",
 example:"A: Quanto e la caparra?\nB: Tre mesi di affitto, come da contratto.",
 exampleSrc:"A: How much is the deposit?\nB: Three months' rent, as per the contract.",
 funFact:"Getting back your 'caparra' when leaving an Italian apartment can be a battle. Landlords find reasons to keep it. 'Restituire la caparra' is every tenant's hope."},

{type:"mc",
 q:"What does 'essere in bolletta' mean?",
 opts:["To be broke","To receive a bill","To have electricity","To pay on time"],
 ans:"To be broke",
 hint:"If you can barely pay your bills (bollette), you are in financial difficulty. It is an idiomatic expression."},

{type:"match", pairs:[
  {trg:"l'idraulico", src:"the plumber"},
  {trg:"la muffa", src:"the mold"},
  {trg:"il trasloco", src:"the house move"},
  {trg:"la caparra", src:"the deposit"}
]},

{type:"fb",
 s:"C'e una {1} d'acqua in bagno. Chiamo l'idraulico!",
 a:["perdita"],
 opts:["perdita","muffa","bolletta","caparra"],
 hint:"Water is escaping from a pipe. This word means both 'leak' and 'loss.'",
 sSrc:"There is a water {1} in the bathroom. I am calling the plumber!"},

{type:"mc",
 q:"Why does 'rubinetto' literally mean 'little ruby'?",
 opts:["Medieval taps were shaped like small ruby-colored roosters","Taps were made of rubies","Taps were always red","Rubies were used to seal pipes"],
 ans:"Medieval taps were shaped like small ruby-colored roosters",
 hint:"The diminutive -etto is applied to 'rubino' (r...). The old tap handle shape resembled a s... rooster."},

{type:"fb",
 s:"Il {1} centralizzato non funziona, fa freddo in casa.",
 a:["riscaldamento"],
 opts:["riscaldamento","trasloco","rubinetto","documento"],
 hint:"This is the system that keeps your home warm. When it breaks in winter, it is a disaster.",
 sSrc:"The central {1} is not working, it is cold in the house."},

{type:"mc",
 q:"How much is a typical rental deposit (caparra) in Italy?",
 opts:["Two to three months' rent","One week's rent","One year's rent","There is no deposit"],
 ans:"Two to three months' rent",
 hint:"Italian landlords require a substantial upfront payment, typically measured in months of rent."}
]};
export default BATCH8_L1;
