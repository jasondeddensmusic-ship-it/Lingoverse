// Lesson 16. Deportes y ocio
const LESSON_16 = {id:"esv2_b2gA_l16", title:"Deportes y ocio", icon:"⚽", xp:15, board:true, steps:[
{type:"intro", title:"Deportes y ocio", desc:"Discuss sports, leisure activities, and competition with specialized B2 vocabulary.", goals:["Learn 15 sports and leisure terms","Discuss athletic events and hobbies","Use sports vocabulary naturally"]},

{type:"teach", trg:"el montañista", src:"the mountaineer / climber", pos:"noun", gender:"m",
 note:"A person who climbs mountains as a sport.\nFeminine: la montañista. From montana.",
 example:"A: El montañista alcanzó la cumbre tras ocho horas de ascenso.\nB: Fue una hazaña impresionante.",
 exampleSrc:"A: The mountaineer reached the summit after eight hours of climbing.\nB: It was an impressive feat.",
 funFact:"Spain's Picos de Europa and Sierra Nevada attract mountaineers from across Europe."},

{type:"teach", trg:"el motorista", src:"the motorcyclist", pos:"noun", gender:"m",
 note:"A person who rides a motorcycle.\nFeminine: la motorista. From motor.",
 example:"A: El motorista llevaba un casco rojo brillante.\nB: La seguridad es fundamental en la moto.",
 exampleSrc:"A: The motorcyclist was wearing a bright red helmet.\nB: Safety is essential on a motorcycle.",
 funFact:"MotoGP is hugely popular in Spain. Spanish riders have won more titles than any other nation."},

{type:"teach", trg:"el motocross", src:"motocross", pos:"noun", gender:"m",
 note:"Motorcycle racing on rough terrain.\nFrom moto + cross (country).",
 example:"A: El circuito de motocross tiene saltos espectaculares.\nB: Es un deporte muy emocionante pero peligroso.",
 exampleSrc:"A: The motocross track has spectacular jumps.\nB: It's a very exciting but dangerous sport.",
 funFact:"Spain hosts several rounds of the Motocross World Championship."},

{type:"teach", trg:"el mediocampo", src:"the midfield", pos:"noun", gender:"m",
 note:"The central area of a football pitch.\nMedio (middle) + campo (field).",
 example:"A: El equipo domina el mediocampo con tres jugadores creativos.\nB: El control del mediocampo es clave para ganar.",
 exampleSrc:"A: The team dominates the midfield with three creative players.\nB: Midfield control is key to winning.",
 funFact:"Spain's football success is built on midfield control, the famous 'tiki-taka' style."},

{type:"teach", trg:"el marcador", src:"the scoreboard / marker", pos:"noun", gender:"m",
 note:"A display showing the score. Also: a pen/marker.\nFrom marcar (to mark/score).",
 example:"A: El marcador muestra dos a uno a favor del equipo local.\nB: Quedan solo diez minutos de partido.",
 exampleSrc:"A: The scoreboard shows two to one in favor of the home team.\nB: There are only ten minutes left in the match.",
 funFact:"'Abrir el marcador' (to open the scoring) is the phrase for the first goal."},

{type:"mc", q:"¿Qué es el 'mediocampo' en fútbol?", opts:["La zona central del terreno de juego","La portería","El banquillo de suplentes","La zona de los aficionados"], ans:"La zona central del terreno de juego",
 hint:"Break it down: medio (middle) + campo (field). The center of the pitch."},

{type:"fb", s:"El {1} alcanzó la cumbre del Everest sin oxígeno suplementario.", a:["montañista"], opts:["montañista","motorista","marcador","mediocampo"],
 hint:"This person climbs mountains as a sport or profession.",
 sSrc:"The {1} reached the summit of Everest without supplementary oxygen."},

{type:"teach", trg:"el mirón", src:"the onlooker / voyeur", pos:"noun", gender:"m",
 note:"Someone who watches without participating. Slightly negative connotation.\nFrom mirar.",
 example:"A: Había varios mirones mirando las obras de la calle.\nB: La gente siempre se para a mirar.",
 exampleSrc:"A: There were several onlookers looking at the street works.\nB: People always stop to look.",
 funFact:"Has a mildly pejorative tone. 'Espectador' is the neutral word for spectator."},

{type:"teach", trg:"mozo", src:"young / young man / waiter (archaic)", pos:"adj", gender:null,
 note:"Young and vigorous. As noun: a young assistant or porter.\nFrom Latin musteus (new).",
 example:"A: De mozo trabajó en el mercado cargando cajas.\nB: Eran trabajos muy duros pero muy buenos para el carácter.",
 exampleSrc:"A: As a young man he worked at the market carrying boxes.\nB: They were tough jobs but they built character.",
 funFact:"'Mozo de equipajes' (porter) is still used at train stations. Very Peninsular."},

{type:"teach", trg:"el multimillonario", src:"the multimillionaire", pos:"noun", gender:"m",
 note:"A person with many millions.\nFeminine: la multimillonaria. Multi- + millonario.",
 example:"A: El multimillonario donó diez millones a la investigación.\nB: Su fundación apoya proyectos científicos.",
 exampleSrc:"A: The multimillionaire donated ten million to research.\nB: His foundation supports scientific projects.",
 funFact:"Spain's richest person is Amancio Ortega, founder of Zara, worth over 80 billion euros."},

{type:"mc", q:"¿Cuál es la connotación de 'mirón'?", opts:["Formal: un investigador","Ligeramente negativa: alguien que mira sin participar","Muy positiva: un gran observador","Neutral: un espectador normal"], ans:"Ligeramente negativa: alguien que mira sin participar",
 hint:"The -on suffix often adds a sense of excess. Someone who watches too much."},

{type:"fb", s:"El {1} muestra empate a cero en el descanso.", a:["marcador"], opts:["marcador","mediocampo","motocross","mirón"],
 hint:"This displays the current score during a sporting event.",
 sSrc:"The {1} shows a goalless draw at halftime."},

{type:"teach", trg:"el muermo", src:"the bore / boring thing", pos:"noun", gender:"m",
 note:"A boring person or tedious situation.\nOriginally: a horse disease (glanders).",
 example:"A: La conferencia fue un muermo total.\nB: Me dormí a los diez minutos.",
 exampleSrc:"A: The lecture was a total bore.\nB: I fell asleep after ten minutes.",
 funFact:"Originally a veterinary term for a horse disease. Now purely colloquial for 'boring'."},

{type:"teach", trg:"la cobra", src:"the cobra", pos:"noun", gender:"f",
 note:"A venomous hooded snake.\nFrom Portuguese cobra (snake), from Latin colubra.",
 example:"A: La cobra real es la serpiente venenosa más grande del mundo.\nB: Puede alcanzar los cinco metros.",
 exampleSrc:"A: The king cobra is the largest venomous snake in the world.\nB: It can reach five meters.",
 funFact:"In Spanish slang, 'hacer una cobra' means to dodge a kiss on the cheek."},

{type:"teach", trg:"el día", src:"the day", pos:"noun", gender:"m",
 note:"Uses masculine article despite ending in -a.\nFrom Latin dies.",
 example:"A: ¿Qué día es hoy?\nB: Hoy es martes, veintitrés de abril.",
 exampleSrc:"A: What day is it today?\nB: Today is Tuesday, April 23rd.",
 funFact:"One of Spanish's exceptions: ends in -a but is masculine. 'El día' never 'la día'."},

{type:"match", pairs:[
 {trg:"el montañista", src:"mountaineer"},
 {trg:"el motorista", src:"motorcyclist"},
 {trg:"el mediocampo", src:"midfield"},
 {trg:"el marcador", src:"scoreboard"},
 {trg:"el mirón", src:"onlooker"}
]},

{type:"fb", s:"De {1} trabajó de camarero para pagarse los estudios.", a:["mozo"], opts:["mozo","mirón","muermo","adulto"],
 hint:"This word means 'as a young man'. It describes youth and vigor.",
 sSrc:"As a {1} he worked as a waiter to pay for his studies."},

{type:"mc", q:"¿Qué significa 'hacer una cobra' en argot español?", opts:["Enfadarse mucho","Correr muy rápido","Esquivar un beso en la mejilla","Bailar como una serpiente"], ans:"Esquivar un beso en la mejilla",
 hint:"The cobra 'dodges' by pulling its head back. Apply that to a social greeting."},

{type:"drag_fill", s:"El {1} del equipo controla el {2} con maestría.", blanks:{"1":"centrocampista","2":"mediocampo"}, pool:["centrocampista","mediocampo","marcador","motocross"],
 hint:"The midfielder controls the center of the pitch skillfully."},

{type:"fb", s:"La reunión fue un {1} absoluto; nadie prestaba atención.", a:["muermo"], opts:["muermo","cobra","mirón","montañista"],
 hint:"This colloquial noun describes something or someone extremely boring.",
 sSrc:"The meeting was an absolute {1}; nobody was paying attention."},

{type:"match", pairs:[
 {trg:"el motocross", src:"motocross"},
 {trg:"mozo", src:"young man"},
 {trg:"el multimillonario", src:"multimillionaire"},
 {trg:"el muermo", src:"bore"},
 {trg:"la cobra", src:"cobra"}
]}
]};
export default LESSON_16;
