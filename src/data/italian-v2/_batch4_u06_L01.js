// Batch 4 — Unit 06, Lesson 1: Getting Around — Transport Vocabulary
const BATCH4_U06_L1 = {
  id:"itv2_u06l_b4_1", title:"I trasporti", icon:"\uD83D\uDE8C", xp:15, board:true,
  steps:[
    {type:"intro", title:"I trasporti",
     desc:"Learn Italian vocabulary for transport, tickets, and getting around in the city and beyond.",
     goals:["Name common forms of transport","Buy tickets and understand schedules","Navigate Italian public transport"]},

    {type:"teach", trg:"l'autobus", src:"the bus", pos:"noun", gender:"m",
     note:"Masculine. Invariable plural: gli autobus.\n'Prendere l'autobus' = to take the bus.",
     example:"A: Che autobus va in centro?\nB: Il numero 23.",
     exampleSrc:"A: Which bus goes to the center?\nB: Number 23.",
     funFact:"Italian city buses are famous for their unpredictable schedules. 'L'autobus non passa mai in orario' (the bus never comes on time) is a national joke. Despite this, the bus network covers every corner of Italian cities."},

    {type:"teach", trg:"la metropolitana", src:"the subway / metro", pos:"noun", gender:"f",
     note:"Feminine. Often shortened to 'la metro.'\nOnly Rome, Milan, Naples, Turin, Catania, Brescia, and Genoa have metro systems.",
     example:"A: Prendiamo la metro?\nB: Si, e più veloce dell'autobus.",
     exampleSrc:"A: Shall we take the metro?\nB: Yes, it is faster than the bus.",
     funFact:"Milan has the most extensive metro in Italy. Rome's metro is famously small because digging always uncovers archaeological remains. Every construction project in Rome risks becoming an archaeological dig."},

    {type:"teach", trg:"il treno", src:"the train", pos:"noun", gender:"m",
     note:"Masculine. Plural: i treni.\nItaly has excellent high-speed trains (Frecciarossa).",
     example:"A: Il treno per Firenze parte alle dieci.\nB: Abbiamo ancora tempo.",
     exampleSrc:"A: The train to Florence leaves at ten.\nB: We still have time.",
     funFact:"Italy's Frecciarossa (Red Arrow) trains reach 300 km/h. Milan to Rome takes under 3 hours. Italy invested heavily in high-speed rail, making train travel competitive with flying for many routes."},

    {type:"teach", trg:"il biglietto", src:"the ticket", pos:"noun", gender:"m",
     note:"Masculine. Plural: i biglietti. 'Fare il biglietto' = to buy a ticket.\nFrom French 'billet.'",
     example:"A: Hai il biglietto?\nB: Si, l'ho comprato online.",
     exampleSrc:"A: Do you have the ticket?\nB: Yes, I bought it online.",
     funFact:"On Italian buses and trams, you must validate ('convalidare') your ticket in the machine before riding. Riding without a validated ticket risks a fine of 50+ euros. Inspectors ('controllori') check regularly and are not forgiving."},

    {type:"teach", trg:"la fermata", src:"the stop (bus/tram)", pos:"noun", gender:"f",
     note:"Feminine. From 'fermare' (to stop). 'La prossima fermata' = the next stop.\n'Fermata dell'autobus' = bus stop.",
     example:"A: Qual e la prossima fermata?\nB: Piazza Garibaldi.",
     exampleSrc:"A: What is the next stop?\nB: Piazza Garibaldi.",
     funFact:"Italian bus stops often have the stop name on a sign but no real-time information. Apps like 'Moovit' have become essential for Italian commuters. The phrase 'scendo alla prossima' (I'm getting off at the next one) is said to the driver."},

    {type:"teach", trg:"il binario", src:"the platform / track", pos:"noun", gender:"m",
     note:"Masculine. 'Il treno parte dal binario 3' = The train leaves from platform 3.\nFrom 'bina' (pair of rails).",
     example:"A: Da che binario parte il treno?\nB: Dal binario cinque.",
     exampleSrc:"A: From which platform does the train leave?\nB: From platform five.",
     funFact:"Italian train platforms are famously unreliable: the binario can change at the last minute. The departure board ('tabellone delle partenze') is essential. Experienced Italian travelers always double-check just before boarding."},

    {type:"teach", trg:"la bicicletta", src:"the bicycle", pos:"noun", gender:"f",
     note:"Feminine. Often shortened to 'la bici.' Plural: le biciclette.\nPopular in flat cities like Ferrara and Bologna.",
     example:"A: Vado al lavoro in bicicletta.\nB: Che bello! Fai esercizio.",
     exampleSrc:"A: I go to work by bicycle.\nB: How nice! You get exercise.",
     funFact:"Ferrara is Italy's cycling capital, with more bicycles per capita than anywhere in the country. Italy also has a deep love for cycling as a sport: the Giro d'Italia is one of the three Grand Tours of professional cycling."},

    {type:"teach", trg:"il motorino", src:"the scooter / moped", pos:"noun", gender:"m",
     note:"Masculine. Diminutive of 'motore.' Also called 'lo scooter.'\nIconic Italian urban transport.",
     example:"A: Vado al lavoro in motorino.\nB: Attento al traffico!",
     exampleSrc:"A: I go to work on a scooter.\nB: Be careful of traffic!",
     funFact:"The Vespa (literally 'wasp') is Italy's most famous scooter, created by Piaggio in 1946. In Rome and Naples, motorini weave through traffic with legendary skill. Getting your first motorino at 14 is a rite of passage for Italian teenagers."},

    {type:"teach", trg:"la patente", src:"the driver's license", pos:"noun", gender:"f",
     note:"Feminine. 'Avere la patente' = to have a license.\n'Prendere la patente' = to get your license.",
     example:"A: Hai la patente?\nB: Si, l'ho presa a diciotto anni.",
     exampleSrc:"A: Do you have a driver's license?\nB: Yes, I got it at eighteen.",
     funFact:"Getting a 'patente' in Italy is expensive and difficult. It requires a theory exam, extensive driving lessons, and a practical test. The whole process costs around 1,000 euros. Italian drivers are famously creative with traffic rules."},

    {type:"teach", trg:"il parcheggio", src:"the parking lot / parking", pos:"noun", gender:"m",
     note:"Masculine. 'Cercare parcheggio' = to look for parking.\nParking in Italian cities is a nightmare.",
     example:"A: C'e un parcheggio qui vicino?\nB: Si, sotto la piazza.",
     exampleSrc:"A: Is there a parking lot nearby?\nB: Yes, under the square.",
     funFact:"Finding parking in Italian cities is an art form. Double-parking is widespread and somewhat tolerated. Italian drivers leave their phone number on the dashboard so the blocked car can call them to move. A uniquely Italian system."},

    {type:"teach", trg:"il semaforo", src:"the traffic light", pos:"noun", gender:"m",
     note:"Masculine. From Greek 'sema' (sign) + 'phoros' (carrier).\n'Al semaforo gira a destra' = At the traffic light turn right.",
     example:"A: Al semaforo, vai dritto.\nB: E poi?\nA: Poi gira a sinistra.",
     exampleSrc:"A: At the traffic light, go straight.\nB: And then?\nA: Then turn left.",
     funFact:"Italian traffic lights follow the same green-yellow-red pattern as most countries. However, the Italian interpretation of yellow ('giallo') is famously flexible. 'Passare con il giallo' (going through on yellow) is considered normal by many Italian drivers."},

    {type:"teach", trg:"l'incrocio", src:"the intersection / crossroads", pos:"noun", gender:"m",
     note:"Masculine. From 'incrociare' (to cross).\nA key word for giving and receiving directions.",
     example:"A: All'incrocio, gira a destra.\nB: Dopo il semaforo?",
     exampleSrc:"A: At the intersection, turn right.\nB: After the traffic light?",
     funFact:"Italian city intersections can be chaotic roundabouts where the right-of-way rules seem theoretical. The unwritten rule is: whoever is more decisive gets through first. Italian driving requires confidence above all else."},

    {type:"teach", trg:"il traffico", src:"the traffic", pos:"noun", gender:"m",
     note:"Masculine. 'C'e molto traffico' = There is a lot of traffic.\nFrom Arabic 'taraffaqa' (to move slowly).",
     example:"A: Perche sei in ritardo?\nB: C'era tanto traffico!",
     exampleSrc:"A: Why are you late?\nB: There was so much traffic!",
     funFact:"'C'era traffico' (there was traffic) is Italy's universal excuse for being late. Italian cities, especially Rome, Milan, and Naples, are notoriously congested. The word entered Italian from Arabic through medieval trade routes."},

    {type:"teach", trg:"l'orario", src:"the schedule / timetable", pos:"noun", gender:"m",
     note:"Masculine. 'In orario' = on time. 'L'orario dei treni' = train schedule.\nFrom Latin 'hora' (hour).",
     example:"A: A che ora parte il prossimo treno?\nB: Guarda l'orario.",
     exampleSrc:"A: What time does the next train leave?\nB: Check the schedule.",
     funFact:"'In orario' (on time) and 'in ritardo' (late) are constantly used in Italian public transport. The announcements 'il treno e in orario' or 'il treno viaggia con 15 minuti di ritardo' are part of daily Italian life."},

    // Quiz steps
    {type:"mc", q:"Come si chiama il treno veloce italiano?",
     opts:["Frecciarossa","Frecciaverde","Trenirapidi","Velocetreno"],
     ans:"Frecciarossa",
     hint:"This high-speed train's name means 'Red Arrow' in Italian."},

    {type:"fb", s:"Da che {1} parte il treno per Roma?",
     a:["binario"], opts:["binario","fermata","biglietto","orario"],
     hint:"You are asking which platform the train departs from.",
     sSrc:"From which {1} does the train to Rome leave?"},

    {type:"match", pairs:[
      {trg:"l'autobus", src:"bus"},
      {trg:"il treno", src:"train"},
      {trg:"la bicicletta", src:"bicycle"},
      {trg:"il motorino", src:"scooter"},
      {trg:"la metropolitana", src:"subway"}
    ]},

    {type:"mc", q:"Cosa devi fare con il biglietto sull'autobus?",
     opts:["Convalidarlo nella macchinetta","Mostrarlo all'autista","Tenerlo in tasca","Darlo al controllore"],
     ans:"Convalidarlo nella macchinetta",
     hint:"You must stamp or validate your ticket before riding in Italy."},

    {type:"fb", s:"C'era tanto {1}, per questo sono in ritardo.",
     a:["traffico"], opts:["traffico","treno","parcheggio","biglietto"],
     hint:"This is the universal Italian excuse for arriving late.",
     sSrc:"There was a lot of {1}, that is why I am late."},

    {type:"mc", q:"Quale città italiana e famosa per le biciclette?",
     opts:["Ferrara","Roma","Napoli","Palermo"],
     ans:"Ferrara",
     hint:"This flat Emilia-Romagna city has the highest bikes per capita in Italy."},

    {type:"fb", s:"Il treno e in {1}, parte tra cinque minuti.",
     a:["orario"], opts:["orario","ritardo","binario","fermata"],
     hint:"The train is on schedule, not delayed.",
     sSrc:"The train is on {1}, it leaves in five minutes."},

    {type:"mc", q:"Cos'e la Vespa?",
     opts:["An iconic Italian scooter made by Piaggio","A type of Italian bus","A high-speed train","A taxi service"],
     ans:"An iconic Italian scooter made by Piaggio",
     hint:"Its name means 'wasp' in I... and it was created in 1946."}
  ,{type:"match",pairs:[{trg:"la fermata",src:"the stop (bus/tram)"},{trg:"la patente",src:"the driver's license"}]}]
};
export default BATCH4_U06_L1;
