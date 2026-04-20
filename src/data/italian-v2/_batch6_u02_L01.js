// Batch 6 — Unit 02 extra lesson. Numbers, Days & Time: Appointments & Schedules
const BATCH6_L1 = {id:"itv2_u02l_b6_1", title:"Appuntamenti e orari", icon:"\u{1F4C5}", xp:15, board:true, steps:[
{type:"intro", title:"Appuntamenti e orari",
 desc:"Learn to make appointments, discuss schedules, and talk about daily routines using time expressions.",
 goals:["Make and confirm appointments","Discuss opening hours","Talk about daily schedules"]},

{type:"teach", trg:"l'appuntamento", src:"the appointment", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: gli appuntamenti.\nUsed for doctor, business, and personal meetings.",
 example:"A: Ho un appuntamento alle tre.\nB: Con chi hai l'appuntamento?",
 exampleSrc:"A: I have an appointment at three.\nB: Who is your appointment with?",
 funFact:"From 'appuntare' (to point out/note down). Italians distinguish between 'appuntamento' (scheduled meeting) and 'incontro' (casual encounter)."},

{type:"teach", trg:"l'orario", src:"the schedule / timetable", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: gli orari.\nUsed for bus schedules, opening hours, and work hours.",
 example:"A: Qual e l'orario del treno?\nB: Parte alle otto e venti.",
 exampleSrc:"A: What is the train schedule?\nB: It leaves at eight twenty.",
 funFact:"Italian trains and buses use 24-hour time. '14:30' is perfectly normal in daily speech, unlike in English-speaking countries."},

{type:"teach", trg:"prenotare", src:"to book / to reserve", pos:"verb", gender:null,
 note:"Regular -are verb. prenoto, prenoti, prenota.\nUsed for restaurants, hotels, tickets.",
 example:"A: Vorrei prenotare un tavolo per due.\nB: Per che ora?",
 exampleSrc:"A: I would like to book a table for two.\nB: For what time?",
 funFact:"From 'nota' (note). Literally to 'pre-note' something. Booking ahead is essential in popular Italian restaurants, especially on weekends."},

{type:"teach", trg:"la prenotazione", src:"the reservation / booking", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le prenotazioni.\nNominal form of 'prenotare.'",
 example:"A: Ho una prenotazione a nome Rossi.\nB: Si, ecco il suo tavolo.",
 exampleSrc:"A: I have a reservation under the name Rossi.\nB: Yes, here is your table.",
 funFact:"In Italy, the phrase 'a nome di' (under the name of) is the standard way to identify a reservation."},

{type:"teach", trg:"confermare", src:"to confirm", pos:"verb", gender:null,
 note:"Regular -are verb. confermo, confermi, conferma.\nFrom Latin 'confirmare' (to make firm).",
 example:"A: Posso confermare la prenotazione?\nB: Si, tutto confermato per sabato.",
 exampleSrc:"A: Can I confirm the reservation?\nB: Yes, everything is confirmed for Saturday.",
 funFact:"Italian bureaucracy loves confirmations. Expect to hear 'confermo' (I confirm) often when dealing with official matters."},

{type:"teach", trg:"annullare", src:"to cancel", pos:"verb", gender:null,
 note:"Regular -are verb. annullo, annulli, annulla.\nUsed for reservations, subscriptions, orders.",
 example:"A: Devo annullare l'appuntamento di domani.\nB: Va bene, a quando lo spostiamo?",
 exampleSrc:"A: I need to cancel tomorrow's appointment.\nB: Alright, when shall we move it to?",
 funFact:"From Latin 'annullare' (to make nothing). The legal term 'annullamento' (annulment) comes from the same root."},

{type:"teach", trg:"spostare", src:"to move / to reschedule", pos:"verb", gender:null,
 note:"Regular -are verb. sposto, sposti, sposta.\nFor appointments: to reschedule to another time.",
 example:"A: Possiamo spostare la riunione a giovedì?\nB: Certo, a che ora?",
 exampleSrc:"A: Can we move the meeting to Thursday?\nB: Of course, at what time?",
 funFact:"Literally 'to change place' (s + postare). Used for both physical objects and time-based events."},

{type:"teach", trg:"puntuale", src:"punctual / on time", pos:"adj", gender:null,
 note:"Adjective, same form for m/f. Plural: puntuali.\nOpposite: in ritardo (late).",
 example:"A: Sei sempre puntuale!\nB: Il tempo e importante.",
 exampleSrc:"A: You are always punctual!\nB: Time is important.",
 funFact:"The stereotype that Italians are never puntuale is exaggerated, but trains in the south do run on a different concept of time than in the north."},

{type:"teach", trg:"in ritardo", src:"late / delayed", pos:"adv", gender:null,
 note:"Adverbial phrase. Opposite of 'puntuale' or 'in anticipo.'\nVery common expression in daily Italian.",
 example:"A: Scusa, sono in ritardo!\nB: Non ti preoccupare, anche io sono appena arrivato.",
 exampleSrc:"A: Sorry, I am late!\nB: Do not worry, I also just arrived.",
 funFact:"The classic Italian response to being late: 'Il treno era in ritardo' (the train was late). Trains are a universal excuse across the country."},

{type:"teach", trg:"in anticipo", src:"early / ahead of time", pos:"adv", gender:null,
 note:"Adverbial phrase. Opposite of 'in ritardo.'\nUsed for arrivals and deadlines.",
 example:"A: Siamo in anticipo di dieci minuti.\nB: Perfetto, possiamo prendere un caffè.",
 exampleSrc:"A: We are ten minutes early.\nB: Perfect, we can have a coffee.",
 funFact:"'Anticipo' shares its root with 'anticipare' (to anticipate). Arriving 'in anticipo' is considered polite in business settings."},

{type:"teach", trg:"l'agenda", src:"the planner / diary", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le agende.\nA personal organizer for appointments and notes.",
 example:"A: Guardo la mia agenda... sono libero venerdì.\nB: Perfetto, venerdì va bene.",
 exampleSrc:"A: Let me check my planner... I am free on Friday.\nB: Perfect, Friday works.",
 funFact:"From Latin 'agenda' meaning 'things to be done.' Unlike in English, the Italian 'agenda' usually refers to a physical or digital diary, not a political program."},

{type:"teach", trg:"la durata", src:"the duration / length", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le durate.\nFrom 'durare' (to last).",
 example:"A: Qual e la durata del film?\nB: Due ore e mezza.",
 exampleSrc:"A: What is the duration of the film?\nB: Two and a half hours.",
 funFact:"Italian uses 'durata' for time length and 'lunghezza' for physical length. They are never interchangeable."},

{type:"teach", trg:"il turno", src:"the shift / turn", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i turni.\nUsed for work shifts and taking turns.",
 example:"A: A che ora inizia il tuo turno?\nB: Alle sei di mattina.",
 exampleSrc:"A: What time does your shift start?\nB: At six in the morning.",
 funFact:"'Fare i turni' (to work shifts) is how many Italian factory and hospital workers describe their schedule. 'Turno di notte' is the night shift."},

{type:"teach", trg:"disponibile", src:"available / free", pos:"adj", gender:null,
 note:"Adjective, same form for m/f. Plural: disponibili.\nUsed for people, rooms, and products.",
 example:"A: Sei disponibile domani mattina?\nB: Si, dopo le dieci.",
 exampleSrc:"A: Are you available tomorrow morning?\nB: Yes, after ten.",
 funFact:"'Disponibile' also describes a person who is helpful and accommodating. 'E molto disponibile' means 'he/she is very helpful.'"},

{type:"mc", q:"Come si dice 'reservation' in italiano?",
 opts:["la prenotazione","l'appuntamento","l'orario","il turno"],
 ans:"la prenotazione",
 hint:"The noun form of 'prenotare' (to book). Used for restaurants and hotels."},

{type:"fb", s:"Scusa, sono {1} di venti minuti!", a:["in ritardo"],
 opts:["in ritardo","in anticipo","puntuale","disponibile"],
 hint:"The opposite of being on time. You arrived twenty minutes after the agreed time.",
 sSrc:"Sorry, I am {1} by twenty minutes!"},

{type:"mc", q:"Cosa fai se non puoi andare all'appuntamento?",
 opts:["Lo annullo o lo sposto","Lo confermo","Lo prenoto","Sono puntuale"],
 ans:"Lo annullo o lo sposto",
 hint:"Two options when you cannot make it: cancel or reschedule."},

{type:"match", pairs:[
 {trg:"prenotare", src:"to book"},
 {trg:"confermare", src:"to confirm"},
 {trg:"annullare", src:"to cancel"},
 {trg:"spostare", src:"to reschedule"}
]},

{type:"fb", s:"Guardo la mia {1} per controllare se sono libero.", a:["agenda"],
 opts:["agenda","durata","orario","prenotazione"],
 hint:"Your personal planner where you write down appointments.",
 sSrc:"I check my {1} to see if I am free."},

{type:"mc", q:"Qual e il contrario di 'in ritardo'?",
 opts:["in anticipo","puntuale","disponibile","annullato"],
 ans:"in anticipo",
 hint:"The direct opposite: arriving before the scheduled time, not just on time."},

{type:"fb", s:"Sei {1} sabato pomeriggio?", a:["disponibile"],
 opts:["disponibile","puntuale","in ritardo","in anticipo"],
 hint:"Another way of asking if someone is free. Also means 'helpful.'",
 sSrc:"Are you {1} on Saturday afternoon?"},

{type:"match", pairs:[
 {trg:"puntuale", src:"punctual"},
 {trg:"in ritardo", src:"late"},
 {trg:"la durata", src:"duration"},
 {trg:"il turno", src:"shift"}
]}
]};
export default BATCH6_L1;
