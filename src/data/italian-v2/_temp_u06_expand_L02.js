// Unit 06 Expansion — Lesson 5: Buying Tickets & Getting Around
// Theme: Tickets, schedules, transport phrases, practical navigation

const LESSON_5 = {
  id:"itv2_u6l5", title:"Biglietti e orari", icon:"\ud83c\udfab", xp:15, board:true,
  steps:[
    {type:"intro", title:"Biglietti e orari",
     desc:"Learn how to buy tickets, read schedules, and navigate public transport in Italian cities.",
     goals:["Buy tickets for transport","Read and understand schedules","Ask practical transport questions"]},

    {type:"teach", trg:"il biglietto", src:"the ticket", pos:"noun", gender:"m",
     note:"Masculine. Diminutive of 'biglietto' from French 'billet.'\nPlural: i biglietti. Used for transport, events, and cinemas.",
     example:"A: Un biglietto per Roma, per favore.\nB: Solo andata o andata e ritorno?",
     exampleSrc:"A: A ticket to Rome, please.\nB: One way or round trip?",
     funFact:"Italian transport tickets must be validated ('convalidare') before boarding. Buses and trams have yellow machines for stamping. Getting caught without a validated ticket means a fine of 50 euros or more."},

    {type:"teach", trg:"andata e ritorno", src:"round trip", pos:"noun", gender:"f",
     note:"Literally: 'going and return.' 'Solo andata' = one way.\nThe standard question when buying train tickets.",
     example:"A: Andata e ritorno per Firenze.\nB: Prima o seconda classe?",
     exampleSrc:"A: Round trip to Florence.\nB: First or second class?",
     funFact:"Italian trains have two classes: prima classe (first, more spacious) and seconda classe (second, standard). For high-speed trains, there are additional tiers. 'Solo andata' (one way) drops the return leg."},

    {type:"teach", trg:"la fermata", src:"the stop (bus/tram)", pos:"noun", gender:"f",
     note:"Feminine. From 'fermare' (to stop). 'La fermata dell'autobus' = the bus stop.\nFor trains: 'la stazione.'",
     example:"A: Qual e la prossima fermata?\nB: Piazza Venezia.",
     exampleSrc:"A: What is the next stop?\nB: Piazza Venezia.",
     funFact:"Bus stops in Italian cities often have digital displays showing wait times. 'Fermata a richiesta' means 'request stop,' where you must press a button or signal the driver. Not all buses stop at every stop automatically."},

    {type:"teach", trg:"la linea", src:"the line / route", pos:"noun", gender:"f",
     note:"Feminine. Used for bus/metro routes: 'la linea 1, la linea rossa.'\nFrom Latin 'linea' (string, line).",
     example:"A: Che linea devo prendere?\nB: La linea 5, direzione centro.",
     exampleSrc:"A: Which line do I need to take?\nB: Line 5, direction center.",
     funFact:"Italian metro systems use colors for lines: Roma has A (arancione/orange), B (blu/blue), and C (verde/green). Milan has 5 lines. Bus routes use numbers. 'Linea' also means phone line: 'la linea e occupata' (the line is busy)."},

    {type:"teach", trg:"l'orario", src:"the schedule / timetable", pos:"noun", gender:"m",
     note:"Masculine. Uses l' before vowel. From 'ora' (hour).\n'L'orario dei treni' = train schedule.",
     example:"A: Hai controllato l'orario dei treni?\nB: Si, il prossimo e alle 14:30.",
     exampleSrc:"A: Did you check the train schedule?\nB: Yes, the next one is at 2:30 PM.",
     funFact:"Italy uses the 24-hour clock officially: 14:30 not 2:30 PM. Train schedules, store hours, and appointments all use 24-hour format. In casual speech, people say 'le due e mezza' (half past two) without specifying AM/PM."},

    {type:"teach", trg:"partire", src:"to leave / to depart", pos:"verb", gender:null,
     note:"Regular -ire verb: parto, parti, parte.\n'Il treno parte alle...' = the train departs at...",
     example:"A: A che ora parte il treno?\nB: Parte alle dieci.",
     exampleSrc:"A: What time does the train leave?\nB: It leaves at ten.",
     funFact:"'Partire' is used for departures of all kinds: trains, planes, people. 'Partenza' (departure) appears on airport and station signs. The opposite arrival term is 'arrivare' (to arrive), with 'arrivo' on signs."},

    {type:"teach", trg:"arrivare", src:"to arrive", pos:"verb", gender:null,
     note:"Regular -are verb: arrivo, arrivi, arriva.\n'A che ora arrivi?' = what time do you arrive?",
     example:"A: A che ora arrivi a Roma?\nB: Arrivo alle tre del pomeriggio.",
     exampleSrc:"A: What time do you arrive in Rome?\nB: I arrive at three in the afternoon.",
     funFact:"From Vulgar Latin 'arripare' (to reach the shore), from 'ripa' (riverbank). Arriving originally meant reaching land after a voyage. English 'arrive' came through French from this same Latin root. 'Arrivi' means arrivals on station boards."},

    {type:"teach", trg:"la coincidenza", src:"the connection (transport)", pos:"noun", gender:"f",
     note:"Feminine. A connecting train or bus. Also means 'coincidence.'\n'Perdere la coincidenza' = to miss the connection.",
     example:"A: C'e una coincidenza per Napoli?\nB: Si, alle 15:20 sul binario 3.",
     exampleSrc:"A: Is there a connection to Naples?\nB: Yes, at 3:20 PM on platform 3.",
     funFact:"'Coincidenza' has dual meanings: a transport connection and a coincidence. In stations, it means a connecting service. Missing a connection ('perdere la coincidenza') is a common travel frustration in Italy."},

    {type:"teach", trg:"il binario", src:"the platform (train)", pos:"noun", gender:"m",
     note:"Masculine. From 'binario' (consisting of two rails).\n'Binario 1, binario 5' = platform 1, platform 5.",
     example:"A: Da quale binario parte il treno?\nB: Dal binario 12.",
     exampleSrc:"A: From which platform does the train leave?\nB: From platform 12.",
     funFact:"Italian stations can be confusing: platform numbers sometimes change at the last minute. Always check the electronic departure boards ('tabellone delle partenze'). 'Binario' literally refers to the two-rail track system."},

    {type:"teach", trg:"in ritardo", src:"late / delayed", pos:"adv", gender:null,
     note:"'Essere in ritardo' = to be late. 'Il treno e in ritardo' = the train is delayed.\nOpposite: 'in anticipo' (early) or 'in orario' (on time).",
     example:"A: Il treno e in ritardo?\nB: Si, dieci minuti di ritardo.",
     exampleSrc:"A: Is the train delayed?\nB: Yes, ten minutes late.",
     funFact:"Italian train punctuality has improved significantly with high-speed trains (Frecciarossa). Regional trains are less reliable. 'In orario' means on time, 'in anticipo' means early, 'in ritardo' means late. Trenitalia tracks delays in real time."},

    {type:"teach", trg:"convalidare", src:"to validate (a ticket)", pos:"verb", gender:null,
     note:"Regular -are verb. MANDATORY for paper tickets on buses and regional trains.\nForgetting can result in a fine.",
     example:"A: Hai convalidato il biglietto?\nB: Si, alla macchinetta gialla.",
     exampleSrc:"A: Did you validate the ticket?\nB: Yes, at the yellow machine.",
     funFact:"Paper tickets for Italian buses and regional trains MUST be stamped in a validation machine before boarding. The machine prints the date and time. Digital tickets and high-speed train tickets do not need validation."},

    // Quiz steps
    {type:"mc", q:"What must you do with paper bus tickets in Italy?",
     opts:["Validate them in the yellow machine","Just show them","Write your name on them","Give them to the driver"],
     ans:"Validate them in the yellow machine",
     hint:"Italian paper tickets must be stamped with date and time before use. Forgetting means a potential fine."},

    {type:"fb", s:"Un biglietto per Roma, {1} andata.",
     a:["solo"],
     opts:["solo","andata","ritorno","prima"],
     hint:"You want a one-way ticket, not a round trip. This word means 'only.'",
     sSrc:"A ticket to Rome, {1} way."},

    {type:"mc", q:"What does 'in ritardo' mean?",
     opts:["Late / delayed","On time","Early","Cancelled"],
     ans:"Late / delayed",
     hint:"The opposite of 'in orario' (on time). Common for trains and personal appointments."},

    {type:"fb", s:"A che ora {1} il treno?",
     a:["parte"],
     opts:["parte","arriva","costa","prende"],
     hint:"You are asking about the departure time. Third person of 'partire.'",
     sSrc:"What time does the train {1}?"},

    {type:"match", pairs:[
      {trg:"il biglietto", src:"the ticket"},
      {trg:"la fermata", src:"the stop"},
      {trg:"il binario", src:"the platform"},
      {trg:"l'orario", src:"the schedule"},
      {trg:"la coincidenza", src:"the connection"}
    ]},

    {type:"mc", q:"What clock system does Italy use officially?",
     opts:["24-hour clock","12-hour with AM/PM","Both equally","Depends on the region"],
     ans:"24-hour clock",
     hint:"Train schedules, store hours, and appointments use this format. 14:30 instead of 2:30 PM."},

    {type:"fb", s:"Da quale {1} parte il treno?",
     a:["binario"],
     opts:["binario","fermata","linea","orario"],
     hint:"You are asking about the train platform number. Literally 'two-rail' in Italian.",
     sSrc:"From which {1} does the train leave?"},

    {type:"mc", q:"What does 'andata e ritorno' mean?",
     opts:["Round trip","One way","First class","Express service"],
     ans:"Round trip",
     hint:"Literally 'going and return.' The ticket covers both the outbound and return journey."},

    {type:"fb", s:"Qual e la prossima {1}?",
     a:["fermata"],
     opts:["fermata","stazione","linea","strada"],
     hint:"You are on a bus and want to know the next stop. From 'fermare' (to stop).",
     sSrc:"What is the next {1}?"},

    {type:"mc", q:"What does 'perdere la coincidenza' mean?",
     opts:["To miss the connection","To lose money","To find a coincidence","To catch the train"],
     ans:"To miss the connection",
     hint:"In transport context, 'coincidenza' means a connecting service. 'Perdere' means to lose or miss."}
  ]
};
export default LESSON_5;
