// Italian V2 Unit 10. I viaggi (Travel) (A2.2)
import BATCH8_L1 from './_batch8_u10_L01.js';
import BATCH7_L1 from './_batch7_u10_L01.js';
import BATCH6_L1 from './_batch6_u10_L01.js';
import BATCH4_L02 from './_batch4_u10_L02.js';
import BATCH4_L01 from './_batch4_u10_L01.js';
import BATCH3_L02 from './_batch3_u10_L02.js';
import BATCH3_L01 from './_batch3_u10_L01.js';
// CILS/CELI A2 aligned. Travel vocabulary, hotels, transport.
import EXP_10_L1 from './_temp_u10_expand_L01.js';import EXP_10_L2 from './_temp_u10_expand_L02.js';import EXP_10_L3 from './_temp_u10_expand_L03.js';

const UNIT_10 = {
  n:10, lang:"it", srcLang:"en", track:"v2",
  title:"I viaggi", sub:"Travel",
  icon:"\u2708\uFE0F", level:"A2.2", color:"#7B5EE8",
  lessons:[
    {id:"itv2_u10l1", title:"Preparare il viaggio", icon:"\uD83E\uDDF3", xp:15, board:true, steps:[
      {type:"intro", title:"Preparare il viaggio",
       desc:"Learn essential Italian vocabulary for planning and preparing a trip. These words will help you book travel and pack for your journey.",
       goals:["Name essential travel items","Talk about bookings and reservations","Discuss travel plans in Italian"]},

      {type:"teach", trg:"il viaggio", src:"the trip / journey", pos:"noun", gender:"m",
       note:"Masculine. From Latin 'viaticum' (travel provisions).\nPlural: i viaggi. 'Buon viaggio!' = Have a good trip!",
       example:"A: Dove vai in viaggio?\nB: Vado in Sicilia per una settimana.",
       exampleSrc:"A: Where are you going on a trip?\nB: I am going to Sicily for a week.",
       funFact:"From Latin 'viaticum' (provisions for a journey), from 'via' (road). English 'voyage' comes from the same Latin root through French. In ancient Rome, soldiers received 'viaticum' (money and supplies) before a march."},

      {type:"teach", trg:"la valigia", src:"the suitcase", pos:"noun", gender:"f",
       note:"Feminine. Plural: le valigie.\n'Fare la valigia' = to pack (one's suitcase).",
       example:"A: Hai fatto la valigia?\nB: Non ancora. Parto domani!",
       exampleSrc:"A: Have you packed?\nB: Not yet. I leave tomorrow!",
       funFact:"Origin uncertain, possibly from Arabic 'walihah' (bag) via medieval trade routes. 'Fare la valigia' (to make the suitcase) means to pack. Italian airports lost the most luggage in Europe in 2019, earning a humorous reputation."},

      {type:"teach", trg:"il passaporto", src:"the passport", pos:"noun", gender:"m",
       note:"Masculine. From French 'passeport' (pass the port/gate).\nEU citizens can travel with just an ID card.",
       example:"A: Hai il passaporto?\nB: Si, e anche il biglietto.",
       exampleSrc:"A: Do you have the passport?\nB: Yes, and also the ticket.",
       funFact:"'Passe' (pass) + 'port' (gate/harbor). Originally, documents that allowed you to pass through a city gate or port. Italian passports are burgundy red, the standard EU color. Within Europe, Italians often use their ID card ('carta d'identita') instead."},

      {type:"teach", trg:"il biglietto", src:"the ticket", pos:"noun", gender:"m",
       note:"Masculine. Diminutive of 'biglietto' from French 'billet.'\n'Biglietto di andata e ritorno' = round-trip ticket.",
       example:"A: Dove compro il biglietto?\nB: Online o alla biglietteria.",
       exampleSrc:"A: Where do I buy the ticket?\nB: Online or at the ticket office.",
       funFact:"From French 'billet' (note, ticket). 'Biglietto di sola andata' means one-way ticket. 'Andata e ritorno' means round trip. In Italy, train tickets must be validated ('convalidare') before boarding, or you risk a fine."},

      {type:"teach", trg:"la prenotazione", src:"the reservation / booking", pos:"noun", gender:"f",
       note:"Feminine. From 'prenotare' (to book in advance).\n'Confermare la prenotazione' = to confirm the booking.",
       example:"A: Ha una prenotazione?\nB: Si, a nome Bianchi.",
       exampleSrc:"A: Do you have a reservation?\nB: Yes, under the name Bianchi.",
       funFact:"From 'pre-' (before) + 'notare' (to note). Literally 'pre-noting.' Italian hotels, restaurants, and trains all use this word. Online booking has made 'prenotazione online' one of the most common phrases in Italian travel."},
{type:"match",pairs:[{trg:"la valigia",src:"the suitcase"},{trg:"il passaporto",src:"the passport"},{trg:"il biglietto",src:"the ticket"},{trg:"la prenotazione",src:"the reservation / booking"}]},

      {type:"teach", trg:"l'albergo", src:"the hotel", pos:"noun", gender:"m",
       note:"Masculine. From Germanic 'haribarig' (army lodging).\nSynonym: l'hotel (also used, masculine).",
       example:"A: L'albergo e in centro?\nB: Si, vicino alla stazione.",
       exampleSrc:"A: Is the hotel in the center?\nB: Yes, near the station.",
       funFact:"From Germanic 'haribarig' (army camp, lodging), which also gave French 'auberge' (inn). Italians use both 'albergo' (native word) and 'hotel' (French loan). 'Albergo' tends to sound more traditional, 'hotel' more modern or international."},

      {type:"teach", trg:"partire", src:"to leave / to depart", pos:"verb", gender:null,
       note:"Regular -ire verb. Present: parto, parti, parte.\nUses 'essere' in passato prossimo: sono partito/a.",
       example:"A: A che ora parti?\nB: Parto alle sei di mattina.",
       exampleSrc:"A: What time are you leaving?\nB: I am leaving at six in the morning.",
       funFact:"From Latin 'partire' (to divide, separate), because departing is separating yourself from a place. English 'depart' comes from the French version. 'Partire' takes 'essere' in the past tense because it expresses movement."},

      {type:"teach", trg:"arrivare", src:"to arrive", pos:"verb", gender:null,
       note:"Regular -are verb. Present: arrivo, arrivi, arriva.\nUses 'essere' in passato prossimo: sono arrivato/a.",
       example:"A: A che ora arrivi?\nB: Arrivo verso le dieci.",
       exampleSrc:"A: What time do you arrive?\nB: I arrive around ten.",
       funFact:"From Latin 'ad ripam' (to the riverbank), because ships arrived at the bank. The same origin gave French 'arriver' and English 'arrive.' Like 'partire,' this verb uses 'essere' in the past tense."},

      // Quiz steps
      {type:"mc", q:"What does 'fare la valigia' mean?",
       opts:["To pack (a suitcase)","To buy one at the store","To carry a bag with you","To check luggage at the airport"],
       ans:"To pack (a suitcase)",
       hint:"'Fare' (to make/do) combines with a noun for luggage. Italians 'make' their luggage before departing."},

      {type:"fb", s:"Hai il {1}? E anche il biglietto?",
       a:["passaporto"],
       opts:["passaporto","viaggio","albergo","valigia"],
       hint:"This official document identifies you when crossing borders. EU citizens sometimes use an ID card instead.",
       sSrc:"Do you have the {1}? And also the ticket?"},

      {type:"match", pairs:[
        {trg:"il viaggio", src:"the trip"},
        {trg:"la valigia", src:"the suitcase"},
        {trg:"il biglietto", src:"the ticket"},
        {trg:"la prenotazione", src:"the reservation"},
        {trg:"l'albergo", src:"the hotel"}
      ]},

      {type:"mc", q:"Why must you 'convalidare' a train ticket in Italy?",
       opts:["To get a price discount on the fare","To stamp the date and time before boarding","To select or change your assigned seat","To cancel and refund the purchase"],
       ans:"To stamp the date and time before boarding",
       hint:"Without this step, your ticket is not valid and you risk a fine from the conductor."},

      {type:"fb", s:"A che ora {1}?",
       a:["parti"],
       opts:["parti","arrivi","compri","prenoti"],
       hint:"Someone is asking when you will leave. This is the 'tu' form of the verb meaning 'to depart.'",
       sSrc:"What time are you {1}?"},

      {type:"mc", q:"What is the origin of 'arrivare'?",
       opts:["Greek 'arrivis' (supposedly to come)","Latin 'arrivus' (so-called arrival)","Latin 'ad ripam' (to the riverbank)","Arabic 'arriv' (allegedly to reach)"],
       ans:"Latin 'ad ripam' (to the riverbank)",
       hint:"Ships would reach the bank of a river. The word literally described reaching the shore after a voyage."},

      {type:"fb", s:"Ha una {1}? A nome Bianchi.",
       a:["prenotazione"],
       opts:["prenotazione","valigia","camera","chiave"],
       hint:"The hotel is asking if you booked in advance. From 'pre-' (before) + 'notare' (to note).",
       sSrc:"Do you have a {1}? Under the name Bianchi."},

      {type:"mc", q:"What is the difference between 'albergo' and 'hotel'?",
       opts:["They refer to entirely different buildings","Albergo is always the cheaper option","Hotel is always the bigger establishment","Albergo is the Italian word, hotel is a French loan"],
       ans:"Albergo is the Italian word, hotel is a French loan",
       hint:"Both mean the same thing. One has Germanic roots and sounds traditional, the other arrived via a neighboring language's borrowing."}
    ]},

    {id:"itv2_u10l2", title:"In albergo", icon:"\uD83C\uDFE8", xp:15, board:true, steps:[
      {type:"intro", title:"In albergo",
       desc:"Learn the vocabulary you need for checking into and staying at an Italian hotel. From room types to breakfast options, these words are essential for travelers.",
       goals:["Check in at an Italian hotel","Describe room types and preferences","Handle common hotel situations"]},

      {type:"teach", trg:"la camera", src:"the room (hotel)", pos:"noun", gender:"f",
       note:"Feminine. From Latin 'camera' (vaulted room).\n'Camera d'albergo' = hotel room.",
       example:"A: Avete una camera libera?\nB: Si, al terzo piano.",
       exampleSrc:"A: Do you have a free room?\nB: Yes, on the third floor.",
       funFact:"From Latin 'camera' (arched/vaulted room), from Greek 'kamara' (vault). The same root gave English 'camera' (the dark chamber), 'chamber,' and 'comrade' (roommate). In Italian, 'camera' is specifically a bedroom or hotel room."},

      {type:"teach", trg:"singola", src:"single (room)", pos:"adj", gender:null,
       note:"Adj (feminine form, agreeing with 'camera'). Masculine: singolo.\n'Camera singola' = single room.",
       example:"A: Vorrei una camera singola.\nB: Per quante notti?",
       exampleSrc:"A: I would like a single room.\nB: For how many nights?",
       funFact:"From Latin 'singulus' (one at a time). English 'single' comes from the same root. In Italian hotels, a 'singola' has one single bed. If traveling alone but wanting a bigger bed, ask for a 'camera uso singola' (double room for single use)."},

      {type:"teach", trg:"doppia", src:"double (room)", pos:"adj", gender:null,
       note:"Adj (feminine form). Masculine: doppio.\n'Camera doppia' = double room (two single beds or one double).",
       example:"A: Preferisce doppia o matrimoniale?\nB: Matrimoniale, per favore.",
       exampleSrc:"A: Do you prefer double or matrimonial?\nB: Matrimonial, please.",
       funFact:"'Doppia' (two separate beds) is different from 'matrimoniale' (one large bed for couples). This distinction catches many tourists off guard. Always specify 'matrimoniale' if you want a king/queen bed, not 'doppia.'"},

      {type:"teach", trg:"la colazione", src:"the breakfast", pos:"noun", gender:"f",
       note:"Feminine. From Latin 'collatio' (a bringing together).\n'Colazione inclusa' = breakfast included.",
       example:"A: La colazione e inclusa?\nB: Si, dalle sette alle dieci.",
       exampleSrc:"A: Is breakfast included?\nB: Yes, from seven to ten.",
       funFact:"Italian hotel breakfast is typically 'continental': espresso, cornetto (croissant), juice, and fruit. Do not expect eggs, bacon, or large American-style breakfasts at standard Italian hotels. Some upscale hotels now offer international options."},

      {type:"teach", trg:"la chiave", src:"the key", pos:"noun", gender:"f",
       note:"Feminine. From Latin 'clavis' (key).\nPlural: le chiavi. Modern hotels use 'la tessera' (key card).",
       example:"A: Ecco la chiave della camera.\nB: Grazie. A che piano e?",
       exampleSrc:"A: Here is the room key.\nB: Thanks. What floor is it on?",
       funFact:"From Latin 'clavis' (key), which also gave English 'clef' (music), 'clavicle' (collarbone, shaped like a small key), and 'conclave' (locked room, where popes are elected). Many Italian hotels now use electronic 'tessere' (cards) instead."},
{type:"match",pairs:[{trg:"singola",src:"single (room)"},{trg:"doppia",src:"double (room)"},{trg:"la colazione",src:"the breakfast"},{trg:"la chiave",src:"the key"}]},

      {type:"teach", trg:"il piano", src:"the floor / level", pos:"noun", gender:"m",
       note:"Masculine. 'Primo piano' = first floor (UK) / second floor (US).\nGround floor = 'piano terra.'",
       example:"A: A che piano e la camera?\nB: Al quarto piano. C'e l'ascensore.",
       exampleSrc:"A: What floor is the room on?\nB: On the fourth floor. There is an elevator.",
       funFact:"Italian floor numbering follows the European system: 'piano terra' (ground floor) is floor 0, 'primo piano' (first floor) is one level up. This means the Italian 'primo piano' equals the American 'second floor.' The difference confuses many visitors."},

      {type:"teach", trg:"la vista", src:"the view", pos:"noun", gender:"f",
       note:"Feminine. From Latin 'visus' (sight). Past participle of 'vedere' (to see).\n'Con vista mare' = with sea view.",
       example:"A: La camera ha la vista?\nB: Si, vista sul mare.",
       exampleSrc:"A: Does the room have a view?\nB: Yes, a sea view.",
       funFact:"'Vista' comes from 'vedere' (to see). 'Bella vista' (beautiful view) is a common place name across Italy. A room 'con vista' costs more, but in Italian coastal towns, the sea view is often worth the extra euros."},

      {type:"teach", trg:"disponibile", src:"available", pos:"adj", gender:null,
       note:"Adj. Same form for masculine and feminine (-e ending).\nFrom Latin 'disponibilis' (arrangeable).",
       example:"A: E disponibile una camera doppia?\nB: Mi dispiace, siamo al completo.",
       exampleSrc:"A: Is a double room available?\nB: I am sorry, we are fully booked.",
       funFact:"From Latin 'disponere' (to arrange). 'Al completo' means fully booked. During high season (July-August) and holidays, Italian hotels fill up fast. Booking in advance ('prenotare in anticipo') is strongly recommended."},

      // Quiz steps
      {type:"mc", q:"What is the difference between 'doppia' and 'matrimoniale'?",
       opts:["Doppia has two beds, matrimoniale has one large bed","Doppia is a bigger room overall","Matrimoniale is specifically for families","They are completely interchangeable terms"],
       ans:"Doppia has two beds, matrimoniale has one large bed",
       hint:"One room type suits two people sleeping separately. The other suits a couple sharing. Always specify when booking."},

      {type:"fb", s:"La {1} e inclusa?",
       a:["colazione"],
       opts:["colazione","chiave","camera","vista"],
       hint:"You want to know if the morning meal is part of the hotel price. Italian hotels serve espresso and cornetti.",
       sSrc:"Is {1} included?"},

      {type:"match", pairs:[
        {trg:"la camera", src:"the room"},
        {trg:"la chiave", src:"the key"},
        {trg:"il piano", src:"the floor"},
        {trg:"la vista", src:"the view"},
        {trg:"disponibile", src:"available"}
      ]},

      {type:"mc", q:"What is 'piano terra' in an Italian building?",
       opts:["The first floor (as in UK)","The ground floor","The basement below street level","The rooftop terrace"],
       ans:"The ground floor",
       hint:"Literally 'earth level.' Italian 'primo piano' is one level above it, which confuses visitors from the US where the same word means the starting level."},

      {type:"fb", s:"Vorrei una camera {1}.",
       a:["singola"],
       opts:["singola","doppia","matrimoniale","libera"],
       hint:"You are traveling alone and need a room with one bed for one person.",
       sSrc:"I would like a {1} room."},

      {type:"mc", q:"What does 'disponibile' mean?",
       opts:["Expensive","Comfortable","Available","Reserved"],
       ans:"Available",
       hint:"From Latin 'disponere' (to arrange). You ask if a room is free for your dates."},

      {type:"fb", s:"Ecco la {1} della camera.",
       a:["chiave"],
       opts:["chiave","vista","colazione","porta"],
       hint:"This metal object (or electronic card) opens your room door. From Latin 'clavis.'",
       sSrc:"Here is the room {1}."},

      {type:"mc", q:"What is typical Italian hotel breakfast?",
       opts:["Cereal and cold milk (British)","Eggs, bacon, toast (full English)","Pancakes and maple syrup (American)","Espresso, cornetto, juice, fruit"],
       ans:"Espresso, cornetto, juice, fruit",
       hint:"Italian mornings are light and quick: a strong coffee at the bar, a sweet pastry. Nothing cooked, nothing heavy."}
    ]},

    {id:"itv2_u10l3", title:"Alla stazione e in aeroporto", icon:"\uD83D\ude86", xp:15, board:true, steps:[
      {type:"intro", title:"Alla stazione e in aeroporto",
       desc:"Learn vocabulary for navigating train stations and airports in Italy. Trains are the backbone of Italian travel, and these words will help you get around.",
       goals:["Navigate a train station confidently","Understand departure and arrival information","Handle delays and connections"]},

      {type:"teach", trg:"l'aeroporto", src:"the airport", pos:"noun", gender:"m",
       note:"Masculine. From 'aero' (air) + 'porto' (port).\nMajor airports: Fiumicino (Rome), Malpensa (Milan).",
       example:"A: Come arrivi all'aeroporto?\nB: Con il treno, c'e il collegamento diretto.",
       exampleSrc:"A: How do you get to the airport?\nB: By train, there is a direct connection.",
       funFact:"Rome's main airport is named after Leonardo da Vinci (Fiumicino). Milan's Malpensa literally means 'bad thought' in Italian, from the idea that the marshy area was an unpleasant place to be. Italy has over 40 airports."},

      {type:"teach", trg:"il volo", src:"the flight", pos:"noun", gender:"m",
       note:"Masculine. From Latin 'volare' (to fly).\nPlural: i voli. 'Volo diretto' = direct flight.",
       example:"A: A che ora e il volo?\nB: Alle quattordici e trenta.",
       exampleSrc:"A: What time is the flight?\nB: At fourteen thirty.",
       funFact:"From Latin 'volare' (to fly). Italy uses the 24-hour clock for official times. '14:30' is said 'quattordici e trenta,' not '2:30 PM.' Airports and train stations always use 24-hour format. Everyday speech uses both."},

      {type:"teach", trg:"il binario", src:"the platform / track", pos:"noun", gender:"m",
       note:"Masculine. From Latin 'binarius' (consisting of two).\n'Il treno parte dal binario 3' = The train leaves from platform 3.",
       example:"A: Da che binario parte il treno?\nB: Dal binario cinque.",
       exampleSrc:"A: From which platform does the train leave?\nB: From platform five.",
       funFact:"From Latin 'binarius' (in pairs), because train tracks come in pairs of rails. Italian train stations display 'binario' numbers on electronic boards. Platforms can change at the last minute, so always check the 'tabellone' (departure board)."},

      {type:"teach", trg:"l'orario", src:"the timetable / schedule", pos:"noun", gender:"m",
       note:"Masculine. From Latin 'hora' (hour).\n'Orario di partenza' = departure time.",
       example:"A: Hai controllato l'orario?\nB: Si, il prossimo treno e alle undici.",
       exampleSrc:"A: Have you checked the timetable?\nB: Yes, the next train is at eleven.",
       funFact:"From Latin 'hora' (hour). 'Orario' means both 'timetable' and 'schedule.' Italian trains run on a published orario that you can check at trenitalia.com or italotreno.it. The electronic 'tabellone' in stations shows real-time orario updates."},

      {type:"teach", trg:"la coincidenza", src:"the connection (transfer)", pos:"noun", gender:"f",
       note:"Feminine. Also means 'coincidence' in everyday language.\nTrain context: your connecting train.",
       example:"A: C'e una coincidenza a Bologna?\nB: Si, devi cambiare treno.",
       exampleSrc:"A: Is there a connection at Bologna?\nB: Yes, you need to change trains.",
       funFact:"'Coincidenza' means both 'connection' (trains) and 'coincidence.' The double meaning exists because a connecting train 'coincides' with your arrival. Bologna is Italy's biggest rail hub, where many connections converge."},
{type:"match",pairs:[{trg:"il volo",src:"the flight"},{trg:"il binario",src:"the platform / track"},{trg:"l'orario",src:"the timetable / schedule"},{trg:"la coincidenza",src:"the connection (transfer)"}]},

      {type:"teach", trg:"il ritardo", src:"the delay", pos:"noun", gender:"m",
       note:"Masculine. From Latin 'retardare' (to slow down).\n'In ritardo' = late/delayed. 'In orario' = on time.",
       example:"A: Il treno e in ritardo?\nB: Si, venti minuti di ritardo.",
       exampleSrc:"A: Is the train delayed?\nB: Yes, twenty minutes delayed.",
       funFact:"From Latin 'retardare' (to make slow). Italian trains have improved significantly, but delays still happen. Regional trains are more often delayed than high-speed ones. The phrase 'in ritardo' is used for any lateness, not just trains."},

      {type:"teach", trg:"la partenza", src:"the departure", pos:"noun", gender:"f",
       note:"Feminine. From 'partire' (to leave).\n'Tabellone delle partenze' = departure board.",
       example:"A: Dov'e il tabellone delle partenze?\nB: Davanti all'ingresso principale.",
       exampleSrc:"A: Where is the departure board?\nB: In front of the main entrance.",
       funFact:"From 'partire' (to leave). Every Italian train station has a 'tabellone delle partenze' (departure board) and 'tabellone degli arrivi' (arrivals board). Yellow boards in stations show departures, white boards show arrivals."},

      {type:"teach", trg:"l'arrivo", src:"the arrival", pos:"noun", gender:"m",
       note:"Masculine. From 'arrivare' (to arrive).\nPlural: gli arrivi. 'Ora di arrivo' = arrival time.",
       example:"A: Qual e l'ora di arrivo?\nB: Arrivo previsto alle quindici.",
       exampleSrc:"A: What is the arrival time?\nB: Expected arrival at fifteen hundred.",
       funFact:"From 'arrivare' (to arrive). In train stations, arrival information appears on white boards, while departures appear on yellow boards. At airports, 'arrivi' has its own terminal area separate from 'partenze' (departures)."},

      // Quiz steps
      {type:"mc", q:"What does 'il binario' mean at a train station?",
       opts:["The platform / track","The ticket office (biglietteria)","The waiting room (sala d'attesa)","The exit (uscita)"],
       ans:"The platform / track",
       hint:"From Latin 'binarius' (in pairs). Trains run on paired rails. Check the board for the correct number."},

      {type:"fb", s:"Il treno e in {1}. Venti minuti.",
       a:["ritardo"],
       opts:["ritardo","orario","arrivo","partenza"],
       hint:"The train is not on time. It will arrive later than scheduled. Twenty extra minutes of waiting.",
       sSrc:"The train is {1}. Twenty minutes."},

      {type:"match", pairs:[
        {trg:"l'aeroporto", src:"the airport"},
        {trg:"il volo", src:"the flight"},
        {trg:"il binario", src:"the platform"},
        {trg:"la coincidenza", src:"the connection"},
        {trg:"il ritardo", src:"the delay"}
      ]},

      {type:"mc", q:"What color are departure boards in Italian train stations?",
       opts:["White (like arrivals)","Yellow","Blue (like the trains)","Green (pharmacy color)"],
       ans:"Yellow",
       hint:"Departures use this warm color, while arrivals use white. This contrast helps you find info quickly."},

      {type:"fb", s:"A che ora e il {1}?",
       a:["volo"],
       opts:["volo","treno","binario","orario"],
       hint:"You need to know when your plane departs. This word means a journey through the air.",
       sSrc:"What time is the {1}?"},

      {type:"mc", q:"What does 'la coincidenza' mean in a train context?",
       opts:["A ticket you need to validate","A happy coincidence on the journey","A connecting train","An unexpected delay at the station"],
       ans:"A connecting train",
       hint:"You arrive on one service and need to board another. This word describes where two services meet."},

      {type:"fb", s:"Dov'e il tabellone delle {1}?",
       a:["partenze"],
       opts:["partenze","arrivi","coincidenze","biglietti"],
       hint:"You want to find out when and where trains are leaving. This is the board showing outgoing trains.",
       sSrc:"Where is the {1} board?"},

      {type:"mc", q:"Why does Italy use the 24-hour clock at airports and stations?",
       opts:["Italy does not actually use it","It is a specific national law","Only some airports use it","To avoid AM/PM confusion in official schedules"],
       ans:"To avoid AM/PM confusion in official schedules",
       hint:"14:30 is clear and unambiguous. In everyday speech, Italians use both 12-hour and 24-hour time."}
    ,{type:"match",pairs:[{trg:"la partenza",src:"the departure"}]},{type:"mc",q:"How do you say \"to arrive\" in Italian?",opts:["arrivare","la finestra","il tavolo","la bicicletta"],ans:"arrivare",hint:"Recall the Italian vocabulary word taught in this lesson."}]},
    EXP_10_L1, EXP_10_L2, EXP_10_L3,
    {id:"itv2_u10l_lett", title:"Una lettera informale", icon:"\u2709\uFE0F", xp:15, board:true, steps:[
      {type:"intro", title:"Writing Short Informal Letters",
       desc:"Learn to write short informal letters and casual emails in Italian. Essential for CILS A2 and everyday Italian correspondence.",
       goals:["Open a letter casually","Use common body phrases","Close with a warm farewell"]},

      {type:"teach", trg:"Caro/Cara [nome]", src:"Dear [name] (informal opening)", pos:"intj", gender:null,
       note:"Use 'Caro' for a male, 'Cara' for a female.\nThis is the standard informal letter opening in Italian.",
       example:"A: Caro Marco, come stai?\nB: Cara Sofia, sto bene, grazie!",
       exampleSrc:"A: Dear Marco, how are you?\nB: Dear Sofia, I am well, thank you!",
       funFact:"'Caro' means both 'dear' and 'expensive' in Italian. In letters, it comes from Latin 'carus' (beloved, precious). The dual meaning reflects how valued a person is: they are 'costly' to your heart."},

      {type:"teach", trg:"ti scrivo", src:"I am writing to you (informal)", pos:"verb", gender:null,
       note:"From 'scrivere' (to write) + 'ti' (to you, informal).\nUsed in letters and messages to a close friend.",
       example:"A: Ciao Sofia! Ti scrivo da Roma.\nB: Ciao Marco! Come stai?",
       exampleSrc:"A: Hi Sofia! I am writing to you from Rome.\nB: Hi Marco! How are you?",
       funFact:"Italians still write letters by hand for birthdays, thank-you notes, and postcards. 'Ti scrivo' is one of the most poetic phrases in Italian. It opens countless famous letters and songs."},

      {type:"teach", trg:"Spero che tu stia bene", src:"I hope you are well (informal)", pos:"intj", gender:null,
       note:"A warm, standard opener after the greeting.\nLiterally: 'I hope that you are well.'",
       example:"A: Cosa scrivi dopo 'Caro Marco'?\nB: Scrivo: Spero che tu stia bene.",
       exampleSrc:"A: What do you write after 'Dear Marco'?\nB: I write: I hope you are well.",
       funFact:"This phrase uses the subjunctive mood ('stia' from 'stare'). Even Italians who rarely use subjunctive in speech use it here because it is a fixed letter formula — a great way to meet the subjunctive naturally before studying it formally."},

      {type:"teach", trg:"A presto", src:"See you soon (letter closing)", pos:"intj", gender:null,
       note:"One of the most common informal closings.\nUsed in letters, emails, and text messages.",
       example:"A: Ciao! Devo andare. A presto!\nB: A presto! Ciao!",
       exampleSrc:"A: Hi! I have to go. See you soon!\nB: See you soon! Bye!",
       funFact:"'A presto' is flexible: it works as a spoken goodbye AND a written closing. In English you must choose between 'Bye!' (spoken) and 'See you soon' (written). Italian uses the same phrase for both."},

      {type:"teach", trg:"Un bacio", src:"A kiss (informal closing)", pos:"intj", gender:null,
       note:"Warm, affectionate closing for close friends and family.\n'Un bacione' = a big kiss (even warmer).",
       example:"A: Ciao Sofia! Come stai? Un bacio, Marco.\nB: Grazie, Marco! Un bacio!",
       exampleSrc:"A: Hi Sofia! How are you? A kiss, Marco.\nB: Thank you, Marco! A kiss!",
       funFact:"Italians sign letters and WhatsApp messages with 'un bacio' or 'bacioni' (kisses) even between male friends, especially in southern Italy. It reflects the culture's warmth rather than romantic intent."},

      {type:"teach", trg:"Un abbraccio", src:"A hug (informal closing)", pos:"intj", gender:null,
       note:"Slightly warmer and more affectionate than 'Saluti'.\nCommon in letters and emails to friends or family.",
       example:"A: Come firmi la lettera?\nB: Con 'Un abbraccio' e il mio nome.",
       exampleSrc:"A: How do you sign the letter?\nB: With 'A hug' and my name.",
       funFact:"The double closing 'Un bacio e un abbraccio' (a kiss and a hug) is extremely common in Italian letters. It is the written equivalent of the two-cheek kiss greeting Italians give in person."},

      {type:"teach", trg:"Saluti", src:"Regards (letter closing)", pos:"intj", gender:null,
       note:"Slightly more neutral than 'Un bacio'. Works for friends and acquaintances.\n'Tanti saluti' = many regards.",
       example:"A: Cosa scrivi a un amico non molto vicino?\nB: Scrivo: Saluti, Marco.",
       exampleSrc:"A: What do you write to a friend you are not very close to?\nB: I write: Regards, Marco.",
       funFact:"'Saluti' is the informal-end-of-spectrum equivalent of 'Cordiali saluti' (warm regards, formal). In practice, most Italians use 'un bacio' or 'un abbraccio' with friends. 'Saluti' is reserved for people somewhere between friend and formal contact."},

      {type:"tip", title:"Sample Informal Letter",
       text:"Here is a complete short informal letter in Italian:\n\nCara Sofia,\nti scrivo da Roma. Spero che tu stia bene.\nRoma e bellissima. A presto!\nUn bacio,\nMarco\n\nStructure:\n1. Opening: Caro/Cara [nome],\n2. Body opener: ti scrivo... / Spero che tu stia bene.\n3. Main content: one or two sentences.\n4. Closing phrase: A presto / Saluti\n5. Sign-off: Un bacio / Un abbraccio + your name",
       deepDive:"Informal Italian letters follow a consistent structure that has changed little in a century. The comma after the greeting ('Caro Marco,') is standard. The closing phrase goes on its own line, then the sign-off on the next line. Italians write the city and date at the top right: 'Roma, 15 aprile'. In emails, the same phrases are used but the date header is optional."},

      {type:"mc", q:"What is the correct informal opening for a letter to a female friend named Giulia?",
       opts:["Caro Giulia,","Gentile Giulia,","Cara Giulia,","Egregio Giulia,"],
       ans:"Cara Giulia,",
       hint:"Informal openings use 'Caro' for males and the feminine form for females. 'Gentile' and 'Egregio' are formal."},

      {type:"mc", q:"Which phrase means 'I am writing to you' in an informal Italian letter?",
       opts:["ti scrivo","vi scrivo","scrivo voi","me scrivo"],
       ans:"ti scrivo",
       hint:"The informal singular 'you' object pronoun in Italian is a two-letter word that comes before the verb."},

      {type:"fb", s:"Spero che tu stia {1}.",
       a:["bene"],
       opts:["bene","caro","presto","bacio"],
       hint:"This standard letter opener ends with a common adverb meaning 'well' that you learned in the first unit.",
       sSrc:"I hope you are {1}."},

      {type:"fb", s:"Un {1}, Marco.",
       a:["abbraccio"],
       opts:["abbraccio","viaggio","tavolo","bicchiere"],
       hint:"You are signing off warmly with a physical gesture of affection. Think of the Italian word for a warm embrace.",
       sSrc:"A {1}, Marco."},

      {type:"mc", q:"Which two closings are typical for an informal Italian letter?",
       opts:["Distinti saluti and Egregio","Un bacio and Un abbraccio","Cordiali saluti and Gentile","A domani and Buongiorno"],
       ans:"Un bacio and Un abbraccio",
       hint:"Formal closings use 'saluti' with adjectives. Informal ones use warm physical gestures. Which pair reflects that?"},

      {type:"match", pairs:[
        {trg:"Caro/Cara", src:"Dear (informal opening)"},
        {trg:"A presto", src:"See you soon (warm closing)"},
        {trg:"ti scrivo", src:"I am writing to you"},
        {trg:"Un bacio", src:"A kiss (closing)"},
        {trg:"Saluti", src:"Regards (closing)"}
      ]}
    ]},
  ]
};
export default UNIT_10;
