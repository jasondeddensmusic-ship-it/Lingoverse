// B2 Gap Batch 5 Lesson 16 - Physical Movement & Sports
const LESSON_16 = {id:"esv2_b2g5_l16",title:"Movimiento y deporte",icon:"⚽",xp:15,board:true,steps:[
{type:"intro",title:"Movimiento y deporte",desc:"Learn vocabulary about physical movement, sports, and athletic competition.",goals:["Learn 15 words about movement and sports","Discuss sports events and physical activities","Use specialized athletic vocabulary"]},

{type:"teach",trg:"flexionar",src:"to flex / to bend",pos:"verb",gender:null,
 note:"Regular -ar verb. To bend a joint or muscle.\nRelated noun: la flexión.",
 example:"A: Flexiona las rodillas antes de saltar.\nB: Así evitarás lesionarte.",
 exampleSrc:"A: Flex your knees before jumping.\nB: That way you'll avoid injuring yourself.",
 funFact:"From Latin flexare. 'Flexiones' (push-ups) are named after the bending movement of the arms."},

{type:"teach",trg:"el goleador",src:"the goal scorer",pos:"noun",gender:"m",
 note:"Masculine noun. A player who scores many goals.\nFeminine: la goleadora.",
 example:"A: Es el máximo goleador de la liga esta temporada.\nB: Lleva veinticinco goles en veinte partidos.",
 exampleSrc:"A: He is the top goal scorer in the league this season.\nB: He has twenty-five goals in twenty matches.",
 funFact:"The 'Pichichi' trophy is awarded to La Liga's top goleador, named after Athletic Bilbao's Rafael Moreno."},

{type:"teach",trg:"la halterofilia",src:"the weightlifting",pos:"noun",gender:"f",
 note:"Feminine noun. The sport of lifting heavy weights.\nOlympic discipline.",
 example:"A: La halterofilia requiere mucha fuerza y técnica.\nB: Los atletas entrenan durante años.",
 exampleSrc:"A: Weightlifting requires a lot of strength and technique.\nB: Athletes train for years.",
 funFact:"From Greek halter (weight) + philos (lover). Spain has won Olympic medals in halterofilia."},

{type:"teach",trg:"el contragolpe",src:"the counterattack",pos:"noun",gender:"m",
 note:"Masculine noun. A quick attack after defending.\nKey football tactic.",
 example:"A: El equipo ganó gracias a un contragolpe perfecto.\nB: Pasaron de defender a marcar en diez segundos.",
 exampleSrc:"A: The team won thanks to a perfect counterattack.\nB: They went from defending to scoring in ten seconds.",
 funFact:"Spanish football teams like Real Madrid are famous for their lethal contragolpe style of play."},

{type:"teach",trg:"el estampido",src:"the bang / loud blast",pos:"noun",gender:"m",
 note:"Masculine noun. A sudden, very loud noise.\nFrom estampar (to stamp/crash).",
 example:"A: El estampido del disparo de salida asustó a todos.\nB: Los corredores salieron disparados.",
 exampleSrc:"A: The bang of the starting gun startled everyone.\nB: The runners took off like bullets.",
 funFact:"'Estampido sónico' (sonic boom) is the noise made when an object breaks the sound barrier."},

{type:"mc",q:"¿Qué es un goleador?",opts:["Un jugador que marca muchos goles","Un entrenador de fútbol","Un árbitro deportivo","Un portero experimentado"],ans:"Un jugador que marca muchos goles",hint:"The player known for putting the ball in the net more than anyone else."},

{type:"teach",trg:"el ajedrecista",src:"the chess player",pos:"noun",gender:"m",
 note:"Masculine noun. A person who plays chess.\nFeminine: la ajedrecista. From ajedrez (chess).",
 example:"A: Es una ajedrecista de nivel internacional.\nB: Ha ganado tres campeonatos europeos.",
 exampleSrc:"A: She is an international-level chess player.\nB: She has won three European championships.",
 funFact:"From Arabic ash-shatranj (chess). Spain has a strong chess tradition, with the world's first chess book printed in 1497."},

{type:"teach",trg:"el escaque",src:"the square (on a chessboard)",pos:"noun",gender:"m",
 note:"Masculine noun. One of the 64 squares on a chessboard.\nFrom Arabic.",
 example:"A: El alfil se mueve en diagonal por los escaques.\nB: Solo puede pisar los de su color.",
 exampleSrc:"A: The bishop moves diagonally across the squares.\nB: It can only land on those of its color.",
 funFact:"From Arabic ash-shaq (the half). A chessboard has 32 dark and 32 light escaques."},

{type:"teach",trg:"fruncir",src:"to frown / to gather (fabric)",pos:"verb",gender:null,
 note:"Regular -ir verb. To wrinkle or pucker.\nCommon: fruncir el ceño (to frown).",
 example:"A: El entrenador frunció el ceño al ver la jugada.\nB: No le gustó nada el error del defensa.",
 exampleSrc:"A: The coach frowned when he saw the play.\nB: He didn't like the defender's mistake at all.",
 funFact:"'Fruncir el ceño' literally means 'to gather the brow'. In sewing, 'fruncir' means to create pleats."},

{type:"teach",trg:"el córner",src:"the corner kick",pos:"noun",gender:"m",
 note:"Masculine noun. A corner kick in football.\nFrom English 'corner'. Plural: córneres.",
 example:"A: El árbitro ha señalado córner.\nB: Atención, que son muy peligrosos con su juego aéreo.",
 exampleSrc:"A: The referee has signaled a corner kick.\nB: Watch out, they are very dangerous with their aerial game.",
 funFact:"The RAE accepts 'córner' with accent. Spain scores many goals from set pieces like corners."},

{type:"fb",s:"{1} las rodillas al aterrizar para proteger las articulaciones.",a:["Flexiona"],opts:["Flexiona","Frunce","Fragmenta","Forja"],hint:"To bend your joints, especially when landing from a jump.",sSrc:"{1} your knees when landing to protect your joints."},

{type:"teach",trg:"fragmentar",src:"to fragment / to break into pieces",pos:"verb",gender:null,
 note:"Regular -ar verb. To break something into smaller parts.\nRelated: fragmento (fragment).",
 example:"A: El impacto fragmentó el cristal en cientos de pedazos.\nB: Fue un golpe muy fuerte.",
 exampleSrc:"A: The impact fragmented the glass into hundreds of pieces.\nB: It was a very strong blow.",
 funFact:"From Latin fragmentum. In politics, 'fragmentar el voto' means to split the vote among many parties."},

{type:"teach",trg:"fraccionar",src:"to divide into fractions / to split",pos:"verb",gender:null,
 note:"Regular -ar verb. To divide into parts or fractions.\nRelated: fracción (fraction).",
 example:"A: Decidieron fraccionar el pago en doce cuotas.\nB: Así es más fácil de pagar.",
 exampleSrc:"A: They decided to split the payment into twelve installments.\nB: That way it's easier to pay.",
 funFact:"From Latin fractio (breaking). 'Pago fraccionado' (installment payment) is standard in Spanish commerce."},

{type:"teach",trg:"el descontrol",src:"the lack of control / chaos",pos:"noun",gender:"m",
 note:"Masculine noun. Total absence of order or control.\nVery common in sports commentary.",
 example:"A: Hubo un descontrol total en la defensa.\nB: Por eso encajamos tres goles en diez minutos.",
 exampleSrc:"A: There was total chaos in the defense.\nB: That's why we conceded three goals in ten minutes.",
 funFact:"In Spanish nightlife slang, 'fue un descontrol' means a wild, out-of-control party."},

{type:"mc",q:"¿Qué es la halterofilia?",opts:["El deporte de levantar pesas","Un tipo de carrera de obstáculos","Una técnica de natación","Un ejercicio de estiramiento"],ans:"El deporte de levantar pesas",hint:"An Olympic sport where athletes lift very heavy barbells above their heads."},

{type:"fb",s:"El equipo ganó gracias a un {1} rápido en el último minuto.",a:["contragolpe"],opts:["contragolpe","estampido","escaque","córner"],hint:"A quick attack launched immediately after defending, catching the opponent off guard.",sSrc:"The team won thanks to a quick {1} in the last minute."},

{type:"match",pairs:[{trg:"goleador",src:"goal scorer"},{trg:"ajedrecista",src:"chess player"},{trg:"córner",src:"corner kick"},{trg:"halterofilia",src:"weightlifting"},{trg:"estampido",src:"loud bang"}]},

{type:"fb",s:"El entrenador {1} el ceño cuando vio el penalti.",a:["frunció"],opts:["frunció","flexionó","fragmentó","fraccionó"],hint:"To wrinkle or pucker the brow, showing displeasure.",sSrc:"The coach {1} when he saw the penalty."},

{type:"mc",q:"¿Qué significa 'fraccionar un pago'?",opts:["Dividirlo en varias cuotas","Pagarlo todo de golpe","Cancelar el pago","Aumentar el precio"],ans:"Dividirlo en varias cuotas",hint:"To split a total amount into smaller portions paid over time."}
]};

export default LESSON_16;
