// Batch 7 — Unit 06 extra lesson. In citta: Sports & Leisure Activities
const BATCH7_L1 = {id:"itv2_u06l_b7_1", title:"Sport e tempo libero", icon:"\u26BD", xp:15, board:true, steps:[
{type:"intro", title:"Sport e tempo libero",
 desc:"Learn vocabulary for popular sports and leisure activities in Italy.",
 goals:["Name common sports and activities","Talk about hobbies and free time","Express preferences about activities"]},

{type:"teach", trg:"il calcio", src:"football / soccer", pos:"noun", gender:"m",
 note:"Masculine noun. Italy's national sport.\n'Giocare a calcio' = to play football.",
 example:"A: Guardiamo la partita di calcio?\nB: Si, gioca l'Italia stasera!",
 exampleSrc:"A: Shall we watch the football match?\nB: Yes, Italy plays tonight!",
 funFact:"Italy has won the FIFA World Cup four times (1934, 1938, 1982, 2006). Calcio literally means 'kick.' The national team is called 'gli Azzurri' (the Blues)."},

{type:"teach", trg:"nuotare", src:"to swim", pos:"verb", gender:null,
 note:"Regular -are verb. nuoto, nuoti, nuota.\n'Piscina' = swimming pool.",
 example:"A: Sai nuotare?\nB: Si, nuoto ogni mattina in piscina.",
 exampleSrc:"A: Can you swim?\nB: Yes, I swim every morning in the pool.",
 funFact:"Italy has over 7,600 km of coastline. Swimming is part of the culture, and beach towns (stabilimenti balneari) with organized swimming areas are an Italian summer institution."},

{type:"teach", trg:"correre", src:"to run", pos:"verb", gender:null,
 note:"Irregular verb. corro, corri, corre. Past: ho corso.\nAlso: 'la corsa' = the run/race.",
 example:"A: Corri spesso?\nB: Si, corro tre volte alla settimana al parco.",
 exampleSrc:"A: Do you run often?\nB: Yes, I run three times a week in the park.",
 funFact:"The Rome Marathon passes by the Colosseum, St. Peter's, and the Trevi Fountain. Running through ancient history is a unique Italian experience."},

{type:"teach", trg:"la palestra", src:"the gym", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le palestre.\n'Andare in palestra' = to go to the gym.",
 example:"A: Vai in palestra oggi?\nB: Si, ho lezione di yoga alle sei.",
 exampleSrc:"A: Are you going to the gym today?\nB: Yes, I have yoga class at six.",
 funFact:"From Greek 'palaistra' (wrestling school). Italian gyms often include sauna, spa, and social areas. The gym is a meeting place, not just a workout space."},

{type:"teach", trg:"la squadra", src:"the team", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le squadre.\n'Fare squadra' = to work as a team.",
 example:"A: Per quale squadra tifi?\nB: Tifo per la Juventus.",
 exampleSrc:"A: Which team do you support?\nB: I support Juventus.",
 funFact:"Every Italian city has a football team, and loyalty is fierce. Asking 'per chi tifi?' (who do you support?) can start friendships or rivalries instantly."},

{type:"teach", trg:"la partita", src:"the match / game", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le partite.\nUsed for sports matches and card/board games.",
 example:"A: A che ora e la partita?\nB: Alle otto e mezza.",
 exampleSrc:"A: What time is the match?\nB: At half past eight.",
 funFact:"Watching 'la partita' together is a sacred Italian ritual. Bars and piazzas fill up for big games, and the noise can be heard blocks away."},

{type:"teach", trg:"vincere", src:"to win", pos:"verb", gender:null,
 note:"Irregular verb. vinco, vinci, vince. Past: ho vinto.\nOpposite: perdere (to lose).",
 example:"A: Chi ha vinto la partita?\nB: Ha vinto il Milan, due a uno.",
 exampleSrc:"A: Who won the match?\nB: Milan won, two to one.",
 funFact:"'Chi non risica non rosica' (who does not risk does not win) is the Italian version of 'nothing ventured, nothing gained.' Risk and reward are deeply linked in Italian culture."},

{type:"teach", trg:"perdere", src:"to lose", pos:"verb", gender:null,
 note:"Irregular verb. perdo, perdi, perde. Past: ho perso.\nAlso means 'to miss' (a train, etc.).",
 example:"A: Abbiamo perso la partita.\nB: Non importa, la prossima volta vinciamo!",
 exampleSrc:"A: We lost the match.\nB: It does not matter, next time we win!",
 funFact:"'Perdere' means both to lose and to miss: 'ho perso il treno' (I missed the train). 'Perdersi' (reflexive) means to get lost: 'mi sono perso a Roma.'"},

{type:"teach", trg:"allenarsi", src:"to train / to work out", pos:"verb", gender:null,
 note:"Reflexive -are verb. mi alleno, ti alleni, si allena.\n'L'allenamento' = the training session.",
 example:"A: Ti alleni tutti i giorni?\nB: Quasi, cinque volte alla settimana.",
 exampleSrc:"A: Do you train every day?\nB: Almost, five times a week.",
 funFact:"'Allenare' comes from a word meaning 'to loosen up.' The coach is 'l'allenatore' (masculine) or 'l'allenatrice' (feminine). Italian football coaches are national celebrities."},

{type:"teach", trg:"il nuoto", src:"swimming (the sport)", pos:"noun", gender:"m",
 note:"Masculine noun. The sport itself.\n'Fare nuoto' = to do swimming (as a sport).",
 example:"A: Mio figlio fa nuoto.\nB: Che bello, e molto salutare.",
 exampleSrc:"A: My son does swimming.\nB: How nice, it is very healthy.",
 funFact:"Italy has produced many Olympic swimming champions. Federica Pellegrini is considered one of the greatest swimmers in history and a national hero."},

{type:"teach", trg:"la bicicletta", src:"the bicycle", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le biciclette.\nShortened to 'la bici' in everyday speech.",
 example:"A: Andiamo in bicicletta al parco?\nB: Si, che bella giornata!",
 exampleSrc:"A: Shall we ride to the park?\nB: Yes, what a beautiful day!",
 funFact:"The Giro d'Italia is one of cycling's three Grand Tours. It covers about 3,500 km across Italy each May. Pink is its signature color, not yellow."},

{type:"teach", trg:"sciare", src:"to ski", pos:"verb", gender:null,
 note:"Regular -are verb. scio, scii, scia.\n'Andare a sciare' = to go skiing.",
 example:"A: Sai sciare?\nB: Si, vado in montagna ogni inverno.",
 exampleSrc:"A: Can you ski?\nB: Yes, I go to the mountains every winter.",
 funFact:"The Italian Alps and Dolomites offer world-class skiing. Cortina d'Ampezzo, which hosted the 1956 Winter Olympics, is Italy's most glamorous ski resort."},

{type:"teach", trg:"il tifoso", src:"the fan / supporter", pos:"noun", gender:"m",
 note:"Masculine noun. Feminine: la tifosa. Plural: i tifosi.\nFrom 'tifo' (passion/fever for a team).",
 example:"A: I tifosi cantano allo stadio.\nB: Che atmosfera incredibile!",
 exampleSrc:"A: The fans are singing at the stadium.\nB: What an incredible atmosphere!",
 funFact:"Italian football fans are called 'tifosi,' from 'tifo' meaning typhus/fever. Their passion is literally like a fever. Organized fan groups called 'ultras' are famous worldwide."},

{type:"teach", trg:"il pareggio", src:"the draw / tie", pos:"noun", gender:"m",
 note:"Masculine noun. 'Pareggiare' = to draw/tie.\nWhen both teams score the same.",
 example:"A: Com'e finita la partita?\nB: Pareggio, uno a uno.",
 exampleSrc:"A: How did the match end?\nB: A draw, one to one.",
 funFact:"In Italian football betting (Totocalcio), results are marked 1-X-2: home win, draw, away win. The 'X' for draw is one of the most famous symbols in Italian sports culture."},

{type:"mc", q:"Qual e lo sport nazionale italiano?",
 opts:["il calcio","il nuoto","lo sci","la pallavolo"],
 ans:"il calcio",
 hint:"The most popular sport in Italy. Literally means 'kick.'"},

{type:"fb", s:"Vai in {1} oggi? Ho lezione di yoga.", a:["palestra"],
 opts:["palestra","piscina","stadio","parco"],
 hint:"The building where people exercise, take fitness classes, and work out.",
 sSrc:"Are you going to the {1} today? I have yoga class."},

{type:"match", pairs:[
 {trg:"vincere", src:"to win"},
 {trg:"perdere", src:"to lose"},
 {trg:"allenarsi", src:"to train"},
 {trg:"il pareggio", src:"draw / tie"}
]},

{type:"mc", q:"Che cos'e il Giro d'Italia?",
 opts:["A famous cycling race","A running marathon","A swimming competition","A football tournament"],
 ans:"A famous cycling race",
 hint:"One of c...'s three Grand Tours, held each May across Italy. Think bicycles."},

{type:"fb", s:"Per quale {1} tifi?", a:["squadra"],
 opts:["squadra","partita","palestra","bicicletta"],
 hint:"A group of players that compete together. You support one of these.",
 sSrc:"Which {1} do you support?"},

{type:"mc", q:"Che cosa significa 'tifoso'?",
 opts:["A sports fan","A coach","A referee","A player"],
 ans:"A sports fan",
 hint:"From 'tifo' (fever). Someone who passionately supports a team."},

{type:"fb", s:"Andiamo a {1} in montagna questo inverno?", a:["sciare"],
 opts:["sciare","nuotare","correre","giocare"],
 hint:"A winter sport done on snow with long boards attached to your feet.",
 sSrc:"Shall we go {1} in the mountains this winter?"},

{type:"match", pairs:[
 {trg:"il calcio", src:"football"},
 {trg:"il nuoto", src:"swimming"},
 {trg:"la bicicletta", src:"bicycle"},
 {trg:"la partita", src:"match"}
]}
]};
export default BATCH7_L1;
