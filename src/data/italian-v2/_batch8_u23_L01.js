// Batch 8 — Unit 23 extra lesson. Politics: Italian Political System
const BATCH8_L1 = {id:"itv2_u23l_b8_1", title:"Il sistema politico", icon:"🗳️", xp:15, board:true, steps:[
{type:"intro", title:"Il sistema politico",
 desc:"Learn vocabulary for the Italian political system, institutions, and civic participation.",
 goals:["Name Italian political institutions","Discuss elections and governance","Understand Italian political vocabulary"]},

{type:"teach", trg:"il parlamento", src:"the parliament", pos:"noun", gender:"m",
 note:"Masculine noun. Italy has a bicameral parliament:\n'Camera dei Deputati' + 'Senato della Repubblica.'",
 example:"A: Il parlamento ha approvato la nuova legge.\nB: Con quanti voti?",
 exampleSrc:"A: Parliament approved the new law.\nB: With how many votes?",
 funFact:"Italy's parliament was reduced from 945 to 600 members in a 2020 referendum. The Camera has 400 deputies and the Senato has 200 senators."},

{type:"teach", trg:"il referendum", src:"the referendum", pos:"noun", gender:"m",
 note:"Masculine noun. Invariable plural: i referendum.\n'Referendum abrogativo' = repealing referendum.",
 example:"A: Hai votato al referendum?\nB: Si, ho votato si per cambiare la legge.",
 exampleSrc:"A: Did you vote in the referendum?\nB: Yes, I voted yes to change the law.",
 funFact:"Italy uses referendums frequently. The most famous was the 1946 referendum that abolished the monarchy. Italians chose a republic by 54% to 46%."},

{type:"teach", trg:"la coalizione", src:"the coalition", pos:"noun", gender:"f",
 note:"Feminine noun. 'Formare una coalizione' = to form a coalition.\nEssential in Italian politics.",
 example:"A: La coalizione di centro-destra ha vinto.\nB: Chi sara il nuovo premier?",
 exampleSrc:"A: The center-right coalition won.\nB: Who will be the new prime minister?",
 funFact:"Italian governments are almost always coalitions. Since 1945, Italy has had over 70 governments. Coalition-building is an art form in Italian politics."},

{type:"teach", trg:"la scheda elettorale", src:"the ballot", pos:"noun", gender:"f",
 note:"Feminine noun. 'Scheda bianca' = blank ballot.\n'Scheda nulla' = spoiled ballot.",
 example:"A: Hai compilato la scheda elettorale?\nB: Si, ho messo la croce sul simbolo.",
 exampleSrc:"A: Did you fill out the ballot?\nB: Yes, I put the cross on the party symbol.",
 funFact:"Italian ballots are enormous paper sheets with all party symbols. You draw an X on your chosen party. The physical size of Italian ballots surprises many foreigners."},

{type:"teach", trg:"il sindaco", src:"the mayor", pos:"noun", gender:"m",
 note:"Masculine noun. Feminine: la sindaca (increasingly used).\n'Palazzo del sindaco' = mayor's office.",
 example:"A: Chi e il sindaco della tua citta?\nB: E stato eletto l'anno scorso.",
 exampleSrc:"A: Who is the mayor of your city?\nB: He was elected last year.",
 funFact:"Italian mayors have significant power. They control local police, urban planning, and civil ceremonies. They can even perform weddings. The mayor's office is in the 'municipio.'"},

{type:"teach", trg:"la manifestazione", src:"the demonstration / protest", pos:"noun", gender:"f",
 note:"Feminine noun. 'Manifestare' = to demonstrate/protest.\nAlso: event/show.",
 example:"A: C'e una manifestazione in piazza oggi.\nB: Per quale motivo?\nA: Per i diritti dei lavoratori.",
 exampleSrc:"A: There is a demonstration in the square today.\nB: For what reason?\nA: For workers' rights.",
 funFact:"Italian piazzas were designed for public gathering. Demonstrations, celebrations, and markets all happen in the same squares, a tradition dating to ancient Roman forums."},

{type:"teach", trg:"lo sciopero", src:"the strike", pos:"noun", gender:"m",
 note:"Masculine noun. 'Fare sciopero' = to go on strike.\n'Scioperare' = to strike.",
 example:"A: Domani c'e sciopero dei trasporti.\nB: Come vado al lavoro allora?",
 exampleSrc:"A: Tomorrow there is a transport strike.\nB: How do I get to work then?",
 funFact:"Transport strikes in Italy are so common they have guaranteed 'fasce di garanzia' (guaranteed service windows) by law: 6-9 AM and 5-8 PM. Italians plan around them."},

{type:"teach", trg:"il dibattito", src:"the debate", pos:"noun", gender:"m",
 note:"Masculine noun. 'Dibattere' = to debate.\n'Dibattito parlamentare' = parliamentary debate.",
 example:"A: Il dibattito in TV era molto acceso.\nB: I candidati non si sono risparmiati.",
 exampleSrc:"A: The TV debate was very heated.\nB: The candidates did not hold back.",
 funFact:"Italian political debates are famous for their passion and volume. Talking over each other is expected, not rude. Silence in a debate means you have conceded."},

{type:"teach", trg:"il bilancio", src:"the budget / balance sheet", pos:"noun", gender:"m",
 note:"Masculine noun. 'Legge di bilancio' = budget law.\n'Fare il bilancio' = to take stock/assess.",
 example:"A: Il bilancio dello Stato e in deficit.\nB: Servono riforme urgenti.",
 exampleSrc:"A: The state budget is in deficit.\nB: Urgent reforms are needed.",
 funFact:"The annual 'legge di bilancio' (budget law) is Italy's most debated piece of legislation. It determines spending, taxes, and pensions. Political careers depend on it."},

{type:"mc",
 q:"How many members does the Italian parliament have after the 2020 reform?",
 opts:["600 (400 deputies + 200 senators)","945","500","1000"],
 ans:"600 (400 deputies + 200 senators)",
 hint:"A 2020 referendum reduced the total. The Camera and Senato were both cut significantly."},

{type:"match", pairs:[
  {trg:"il referendum", src:"the referendum"},
  {trg:"la coalizione", src:"the coalition"},
  {trg:"lo sciopero", src:"the strike"},
  {trg:"il sindaco", src:"the mayor"}
]},

{type:"fb",
 s:"Domani c'e {1} dei trasporti, prendi la bicicletta.",
 a:["sciopero"],
 opts:["sciopero","referendum","dibattito","bilancio"],
 hint:"This word means a work stoppage. When transport workers do this, buses and trains do not run.",
 sSrc:"Tomorrow there is a transport {1}, take your bicycle."},

{type:"mc",
 q:"What are 'fasce di garanzia' during Italian strikes?",
 opts:["Guaranteed service windows when transport must run","Extra strike hours","Compensation payments","Alternative transport options"],
 ans:"Guaranteed service windows when transport must run",
 hint:"By law, certain hours m... have s... even during strikes. Morning and evening commute times are protected."},

{type:"fb",
 s:"La {1} di centro-destra ha vinto le elezioni.",
 a:["coalizione"],
 opts:["coalizione","manifestazione","scheda","bilancio"],
 hint:"This word describes multiple parties joining together to govern. Essential in Italian politics.",
 sSrc:"The center-right {1} won the elections."},

{type:"mc",
 q:"What happened in the 1946 Italian referendum?",
 opts:["Italians voted to become a republic, abolishing the monarchy","Italy joined the EU","Women gained the right to vote","The constitution was written"],
 ans:"Italians voted to become a republic, abolishing the monarchy",
 hint:"This was the most important referendum in Italian history. The monarchy lost by about 54% to 46%."}
]};
export default BATCH8_L1;
