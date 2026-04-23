// Batch 8. Unit 02 extra lesson. Numbers & Time: Schedules & Appointments
const BATCH8_L1 = {id:"itv2_u02l_b8_1", title:"Gli orari", icon:"📋", xp:15, board:true, steps:[
{type:"intro", title:"Gli orari",
 desc:"Learn to discuss schedules, make appointments, and talk about daily routines with precise timing.",
 goals:["Talk about schedules and timetables","Make and confirm appointments","Use time expressions for daily routines"]},

{type:"teach", trg:"l'orario", src:"the schedule / timetable", pos:"noun", gender:"m",
 note:"Masculine noun (despite ending in -o after l').\n'Orario di apertura' = opening hours.",
 example:"A: Qual e l'orario del treno?\nB: Parte alle otto e arriva alle dieci.",
 exampleSrc:"A: What is the train schedule?\nB: It leaves at eight and arrives at ten.",
 funFact:"Italian trains run on a 24-hour clock. '14:30' is normal, not military time. Italians find the 12-hour AM/PM system confusing."},

{type:"teach", trg:"l'appuntamento", src:"the appointment", pos:"noun", gender:"m",
 note:"Masculine noun. 'Fissare un appuntamento' = to make an appointment.\nAlso means 'a date' (romantic).",
 example:"A: Ho un appuntamento dal dottore.\nB: A che ora?\nA: Alle tre del pomeriggio.",
 exampleSrc:"A: I have a doctor's appointment.\nB: At what time?\nA: At three in the afternoon.",
 funFact:"'Appuntamento' covers both medical appointments and romantic dates. Context is everything. 'Ho un appuntamento' could be exciting or boring!"},

{type:"teach", trg:"puntuale", src:"punctual / on time", pos:"adj", gender:null,
 note:"Adjective, same form for m/f singular.\n'Essere puntuale' = to be on time.",
 example:"A: Il treno e puntuale oggi?\nB: Si, per una volta e in orario!",
 exampleSrc:"A: Is the train on time today?\nB: Yes, for once it is on schedule!",
 funFact:"Despite stereotypes, northern Italians value punctuality. The expression 'puntuale come un orologio svizzero' (punctual as a Swiss watch) is a high compliment."},

{type:"teach", trg:"in anticipo", src:"early / ahead of time", pos:"adv", gender:null,
 note:"Adverbial phrase. Opposite: 'in ritardo' (late).\n'Arrivare in anticipo' = to arrive early.",
 example:"A: Sei arrivato in anticipo!\nB: Si, preferisco non avere fretta.",
 exampleSrc:"A: You arrived early!\nB: Yes, I prefer not to rush.",
 funFact:"In Italian business culture, arriving 5 minutes early is ideal. For social gatherings, arriving exactly on time can seem overeager. 15 minutes late is normal."},

{type:"teach", trg:"in ritardo", src:"late / behind schedule", pos:"adv", gender:null,
 note:"Adverbial phrase. 'Sono in ritardo' = I am late.\nOne of the most useful phrases in daily Italian.",
 example:"A: Scusa, sono in ritardo!\nB: Non ti preoccupare, siamo appena arrivati.",
 exampleSrc:"A: Sorry, I am late!\nB: Do not worry, we just arrived.",
 funFact:"The classic Italian excuse for lateness: 'C'era traffico' (there was traffic). Works in every city, every time."},

{type:"teach", trg:"la sveglia", src:"the alarm clock", pos:"noun", gender:"f",
 note:"Feminine noun. 'Mettere la sveglia' = to set the alarm.\nAlso: 'svegliarsi' = to wake up.",
 example:"A: A che ora metti la sveglia?\nB: Alle sei e mezza. Devo uscire presto.",
 exampleSrc:"A: What time do you set the alarm?\nB: At six thirty. I need to leave early.",
 funFact:"From the verb 'svegliare' (to wake). The expression 'sveglia!' shouted alone means 'wake up!' or 'pay attention!'"},

{type:"teach", trg:"la pausa", src:"the break / pause", pos:"noun", gender:"f",
 note:"Feminine noun. 'Pausa pranzo' = lunch break.\n'Fare una pausa' = to take a break.",
 example:"A: Facciamo una pausa caffè?\nB: Si, ne ho bisogno!",
 exampleSrc:"A: Shall we take a coffee break?\nB: Yes, I need one!",
 funFact:"The 'pausa caffè' is sacred in Italian workplaces. It is not just about caffeine but about socializing. Drinking coffee alone at your desk is considered sad."},

{type:"teach", trg:"quotidiano", src:"daily / everyday", pos:"adj", gender:null,
 note:"Adjective: quotidiano/a/i/e. Also a noun: 'il quotidiano' = the daily newspaper.",
 example:"A: Qual e la tua routine quotidiana?\nB: Mi alzo, faccio colazione e vado al lavoro.",
 exampleSrc:"A: What is your daily routine?\nB: I get up, have breakfast, and go to work.",
 funFact:"'Quotidiano' comes from Latin 'quotidianus' (each day). Italy has many famous quotidiani: La Repubblica, Il Corriere della Sera, La Stampa."},

{type:"teach", trg:"fissare", src:"to set / to fix / to schedule", pos:"verb", gender:null,
 note:"Regular -are verb. 'Fissare un appuntamento' = to schedule an appointment.\nAlso: to stare at someone.",
 example:"A: Posso fissare un appuntamento?\nB: Certo, quando Le va bene?",
 exampleSrc:"A: Can I schedule an appointment?\nB: Of course, when suits you?",
 funFact:"'Fissare' has a double meaning: to schedule and to stare. 'Mi stai fissando!' means 'You are staring at me!' Context makes it clear."},

{type:"teach", trg:"il promemoria", src:"the reminder", pos:"noun", gender:"m",
 note:"Masculine noun. Invariable plural: i promemoria.\nA useful word for modern life.",
 example:"A: Metto un promemoria sul telefono.\nB: Buona idea, così non dimentichiamo.",
 exampleSrc:"A: I will set a reminder on my phone.\nB: Good idea, so we do not forget.",
 funFact:"Literally 'for memory' (pro + memoria). One of many Latin-derived compound words that Italian has kept intact."},

{type:"mc",
 q:"What does 'in anticipo' mean?",
 opts:["Early / ahead of time","Late / behind schedule","On time","In a hurry"],
 ans:"Early / ahead of time",
 hint:"It is the opposite of 'in ritardo.' Think of the English word 'anticipate.'"},

{type:"match", pairs:[
  {trg:"la sveglia", src:"the alarm clock"},
  {trg:"la pausa", src:"the break"},
  {trg:"fissare", src:"to schedule"},
  {trg:"il promemoria", src:"the reminder"}
]},

{type:"fb",
 s:"Scusa, sono {1}! C'era traffico.",
 a:["in ritardo"],
 opts:["in ritardo","in anticipo","puntuale","quotidiano"],
 hint:"This phrase means you arrived after the expected time. The classic Italian excuse follows.",
 sSrc:"Sorry, I am {1}! There was traffic."},

{type:"mc",
 q:"'Pausa pranzo' means what?",
 opts:["Afternoon nap","Lunch break","Coffee break","Morning pause"],
 ans:"Lunch break",
 hint:"'Pranzo' is the midday meal. Combined with 'pausa' it describes a specific work b...."},

{type:"fb",
 s:"Posso {1} un appuntamento per domani?",
 a:["fissare"],
 opts:["fissare","puntuale","sveglia","pausa"],
 hint:"This verb means 'to set' or 'to schedule.' You use it when booking appointments.",
 sSrc:"Can I {1} an appointment for tomorrow?"},

{type:"mc",
 q:"What is special about the word 'appuntamento'?",
 opts:["It is always feminine","It only works with the 24-hour clock","It means both appointment and date","It is only used for doctors"],
 ans:"It means both appointment and date",
 hint:"Context determines whether you are going to the doctor or meeting someone special."}
,{type:"match",pairs:[{trg:"puntuale",src:"punctual / on time"},{trg:"in anticipo",src:"early / ahead of time"},{trg:"quotidiano",src:"daily / everyday"}]},{type:"mc",q:"How do you say \"schedule / timetable\" in Italian?",opts:["l'appuntamento","puntuale","in anticipo","l'orario"],ans:"l'orario",hint:"Recall the Italian vocabulary word taught in this lesson."},{type:"mc",q:"How do you say \"appointment\" in Italian?",opts:["l'appuntamento","l'orario","puntuale","in anticipo"],ans:"l'appuntamento",hint:"Recall the Italian vocabulary word taught in this lesson."}]};
export default BATCH8_L1;
