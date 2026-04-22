// B2 Gap Batch 6 Lesson 19 - Urban Life & Services
const LESSON_19 = {id:"esv2_b2g6_l19",title:"Vida urbana y servicios",icon:"🏙️",xp:15,board:true,steps:[
{type:"intro",title:"Vida urbana y servicios",desc:"Master vocabulary for discussing city life, public services, and daily urban living.",goals:["Learn 15 urban life and services terms","Discuss city living and infrastructure","Use practical urban vocabulary"]},

{type:"teach",trg:"la junta",src:"the board / committee / meeting",pos:"noun",gender:"f",
 note:"Feminine noun. A governing body or official meeting.\nFrom juntar (to join/gather).",
 example:"A: La junta de vecinos se reúne el primer lunes del mes.\nB: Hay que hablar sobre las obras del ascensor.",
 exampleSrc:"A: The residents' committee meets the first Monday of the month.\nB: We need to talk about the elevator renovations.",
 funFact:"'Junta directiva' (board of directors) and 'junta de vecinos' (homeowners' association) are very common."},

{type:"teach",trg:"la base",src:"the base / foundation",pos:"noun",gender:"f",
 note:"Feminine noun. The bottom part or foundation.\nAlso a military base. From Latin basis.",
 example:"A: La base del edificio necesita refuerzo.\nB: El ingeniero dice que hay grietas en los cimientos.",
 exampleSrc:"A: The base of the building needs reinforcement.\nB: The engineer says there are cracks in the foundations.",
 funFact:"'A base de' means 'by means of': 'Aprendió a base de práctica' (He learned through practice)."},

{type:"teach",trg:"el adulto",src:"the adult",pos:"noun",gender:"m",
 note:"Masculine noun. A fully grown person.\nFeminine: la adulta. From Latin adultus.",
 example:"A: La entrada para adultos cuesta diez euros.\nB: ¿Y para niños?",
 exampleSrc:"A: The admission for adults costs ten euros.\nB: And for children?",
 funFact:"In Spain, you are legally an adult at 18, but cannot rent a car until 21 at most agencies."},

{type:"teach",trg:"dar de alta",src:"to register / to discharge (medical)",pos:"verb",gender:null,
 note:"Verb phrase. To register in a system, or to discharge\na patient from hospital.",
 example:"A: Me dieron de alta en el hospital esta mañana.\nB: ¡Qué buena noticia! ¿Ya te encuentras mejor?",
 exampleSrc:"A: I was discharged from the hospital this morning.\nB: What good news! Are you feeling better already?",
 funFact:"Opposite: 'dar de baja' (to deregister/sign off sick). 'Estoy de baja' means 'I am on sick leave'."},

{type:"mc",q:"¿Qué significa dar de alta en un hospital?",opts:["Permitir que el paciente se vaya a casa","Ingresar al paciente","Operar al paciente","Transferir al paciente a otro hospital"],ans:"Permitir que el paciente se vaya a casa",hint:"When the doctor says you are well enough to leave."},

{type:"teach",trg:"el jaque",src:"check (in chess)",pos:"noun",gender:"m",
 note:"Masculine noun. A threat to the king in chess.\nFrom Arabic shah (king).",
 example:"A: ¡Jaque! Tu rey está en peligro.\nB: Vaya, no vi venir ese movimiento.",
 exampleSrc:"A: Check! Your king is in danger.\nB: Wow, I did not see that move coming.",
 funFact:"From Arabic/Persian 'shah' (king). 'Jaque mate' (checkmate) comes from 'shah mat' (the king is dead)."},

{type:"teach",trg:"el escaque",src:"the square (on a chessboard)",pos:"noun",gender:"m",
 note:"Masculine noun. One of the 64 squares on a\nchessboard. From Arabic.",
 example:"A: El caballo se mueve en forma de ele sobre los escaques.\nB: Es la pieza más difícil de dominar.",
 exampleSrc:"A: The knight moves in an L-shape across the squares.\nB: It is the hardest piece to master.",
 funFact:"Also used figuratively: 'escaquearse' (to sneak away from duty) comes from hiding behind chess squares."},

{type:"teach",trg:"en cambio",src:"on the other hand / however",pos:"adv",gender:null,
 note:"Adverbial phrase. Used to introduce a contrast.\nEn (in) + cambio (change).",
 example:"A: Madrid es muy caluroso en verano. Barcelona, en cambio, tiene la brisa del mar.\nB: Por eso prefiero la costa.",
 exampleSrc:"A: Madrid is very hot in summer. Barcelona, on the other hand, has the sea breeze.\nB: That is why I prefer the coast.",
 funFact:"'En cambio' is more formal than 'sin embargo' (however) in some contexts. Both express contrast."},

{type:"fb",s:"La {1} de vecinos aprobó las reformas por unanimidad.",a:["junta"],opts:["junta","base","adulto","escaque"],hint:"The committee or board that makes decisions for a community.",sSrc:"The residents' {1} approved the renovations unanimously."},

{type:"teach",trg:"en casa",src:"at home",pos:"adv",gender:null,
 note:"Adverbial phrase. In one's own home.\nEn (in) + casa (house).",
 example:"A: ¿Estás en casa esta tarde?\nB: Sí, no tengo planes. Ven cuando quieras.",
 exampleSrc:"A: Are you at home this afternoon?\nB: Yes, I have no plans. Come whenever you want.",
 funFact:"'En casa' (at home) vs 'a casa' (homeward). 'Voy a casa' (I am going home) vs 'Estoy en casa' (I am at home)."},

{type:"teach",trg:"a la moda",src:"fashionable / in style",pos:"adv",gender:null,
 note:"Adverbial phrase. Following current fashion trends.\nA (to/in) + la moda (fashion).",
 example:"A: Siempre va vestida a la moda.\nB: Le encanta seguir las últimas tendencias.",
 exampleSrc:"A: She always dresses fashionably.\nB: She loves following the latest trends.",
 funFact:"'Pasado de moda' means out of fashion. 'La moda' comes from Latin modus (manner/way)."},

{type:"teach",trg:"a partir de",src:"from / starting from",pos:"prep",gender:null,
 note:"Prepositional phrase. Indicates a starting point in\ntime or quantity.",
 example:"A: A partir de mañana, el horario cambia.\nB: ¿A qué hora abrirán?",
 exampleSrc:"A: Starting from tomorrow, the schedule changes.\nB: What time will they open?",
 funFact:"Very common in formal announcements. 'A partir de' can refer to both time and amounts."},

{type:"mc",q:"¿Qué significa a partir de mañana?",opts:["Durante mañana","Desde mañana en adelante","Hasta mañana","Antes de mañana"],ans:"Desde mañana en adelante",hint:"From that point forward. Starting at a particular moment."},

{type:"match",pairs:[
  {trg:"junta",src:"board / committee"},
  {trg:"dar de alta",src:"to discharge"},
  {trg:"en cambio",src:"on the other hand"},
  {trg:"a la moda",src:"fashionable"},
  {trg:"a partir de",src:"starting from"}
]},

{type:"fb",s:"{1} septiembre, los precios del alquiler subirán.",a:["A partir de"],opts:["A partir de","En cambio","En casa","A la moda"],hint:"Starting from a specific point in time.",sSrc:"{1} September, the rental prices will go up."}
]};
export default LESSON_19;
