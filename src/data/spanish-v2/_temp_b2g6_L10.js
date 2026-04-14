// B2 Gap Batch 6 Lesson 10 - Technology & Innovation
const LESSON_10 = {id:"esv2_b2g6_l10",title:"Tecnología e innovación",icon:"💡",xp:15,board:true,steps:[
{type:"intro",title:"Tecnología e innovación",desc:"Master vocabulary for discussing technology, digital innovation, and the modern connected world.",goals:["Learn 15 technology and innovation terms","Discuss digital transformation and connectivity","Use tech vocabulary in professional contexts"]},

{type:"teach",trg:"innovar",src:"to innovate",pos:"verb",gender:null,
 note:"Regular -ar verb. To introduce new ideas or methods.\nFrom Latin innovare.",
 example:"A: Las empresas que no innovan se quedan atrás.\nB: La competencia es feroz en el sector tecnológico.",
 exampleSrc:"A: Companies that do not innovate fall behind.\nB: Competition is fierce in the tech sector.",
 funFact:"From Latin in- (into) + novus (new). To 'make new' within an existing framework."},

{type:"teach",trg:"interactivo",src:"interactive",pos:"adj",gender:null,
 note:"Adjective. Allowing two-way communication or action.\nInter- (between) + activo (active).",
 example:"A: El museo tiene una exposición interactiva sobre el espacio.\nB: Los niños pueden tocar y experimentar.",
 exampleSrc:"A: The museum has an interactive exhibition about space.\nB: The children can touch and experiment.",
 funFact:"'Pizarra interactiva' (interactive whiteboard) has replaced traditional blackboards in many Spanish schools."},

{type:"teach",trg:"la interacción",src:"the interaction",pos:"noun",gender:"f",
 note:"Feminine noun. Mutual action or communication between\npeople or systems.",
 example:"A: La interacción entre profesor y alumno es fundamental.\nB: El aprendizaje mejora cuando hay diálogo.",
 exampleSrc:"A: The interaction between teacher and student is fundamental.\nB: Learning improves when there is dialogue.",
 funFact:"From inter- (between) + acción (action). Action that goes both ways."},

{type:"teach",trg:"la interconexión",src:"the interconnection",pos:"noun",gender:"f",
 note:"Feminine noun. A connection between things.\nInter- (between) + conexión.",
 example:"A: La interconexión de los sistemas informáticos es clave.\nB: Todo debe funcionar de manera integrada.",
 exampleSrc:"A: The interconnection of computer systems is key.\nB: Everything must work in an integrated way.",
 funFact:"The internet is essentially a global interconexión of computer networks."},

{type:"mc",q:"¿Qué significa innovar?",opts:["Introducir nuevas ideas o métodos","Copiar un modelo existente","Destruir tecnología antigua","Conectar sistemas entre sí"],ans:"Introducir nuevas ideas o métodos",hint:"Creating something new or introducing new ways of doing things."},

{type:"teach",trg:"el interruptor",src:"the switch",pos:"noun",gender:"m",
 note:"Masculine noun. A device that starts or stops\nan electrical current.",
 example:"A: El interruptor de la luz no funciona.\nB: Tendré que llamar al electricista.",
 exampleSrc:"A: The light switch does not work.\nB: I will have to call the electrician.",
 funFact:"From interrumpir (to interrupt). A switch 'interrupts' the flow of electricity."},

{type:"teach",trg:"el intermitente",src:"the turn signal / indicator",pos:"noun",gender:"m",
 note:"Masculine noun. The blinking light on a car.\nFrom Latin intermittere (to send between).",
 example:"A: Pon el intermitente antes de girar.\nB: Ya lo sé, siempre lo pongo.",
 exampleSrc:"A: Put on the turn signal before turning.\nB: I know, I always use it.",
 funFact:"Also an adjective meaning 'intermittent'. As a noun, it specifically means a car's turn signal in Spain."},

{type:"teach",trg:"intensificar",src:"to intensify",pos:"verb",gender:null,
 note:"Regular -ar verb (c>qu before e).\nTo make stronger or more intense.",
 example:"A: Debemos intensificar los esfuerzos de investigación.\nB: El plazo se acerca y necesitamos resultados.",
 exampleSrc:"A: We must intensify the research efforts.\nB: The deadline is approaching and we need results.",
 funFact:"The spelling changes to 'intensifiqué' in the first person preterite (c > qu before e)."},

{type:"fb",s:"El {1} de la luz está al lado de la puerta.",a:["interruptor"],opts:["interruptor","intermitente","interactivo","innovar"],hint:"The device on the wall that turns lights on and off.",sSrc:"The light {1} is next to the door."},

{type:"teach",trg:"la internacionalización",src:"internationalization",pos:"noun",gender:"f",
 note:"Feminine noun. The process of becoming international.\nInternacional + -ización.",
 example:"A: La internacionalización de la empresa fue un éxito.\nB: Ahora tienen oficinas en diez países.",
 exampleSrc:"A: The internationalization of the company was a success.\nB: Now they have offices in ten countries.",
 funFact:"Often abbreviated as 'i18n' in the tech world (18 letters between 'i' and 'n')."},

{type:"teach",trg:"interferir",src:"to interfere",pos:"verb",gender:null,
 note:"Irregular verb (like preferir). To get in the way\nor disrupt. From Latin interferre.",
 example:"A: No quiero interferir en tus decisiones.\nB: Te agradezco el respeto.",
 exampleSrc:"A: I do not want to interfere in your decisions.\nB: I appreciate the respect.",
 funFact:"Conjugates like 'preferir': interfiero, interfieres, interfiere. The stem vowel changes e > ie."},

{type:"teach",trg:"insertar",src:"to insert",pos:"verb",gender:null,
 note:"Regular -ar verb. To place something inside.\nFrom Latin inserere.",
 example:"A: Inserta la tarjeta en el lector.\nB: Ya está, el sistema la ha reconocido.",
 exampleSrc:"A: Insert the card into the reader.\nB: Done, the system has recognized it.",
 funFact:"In computing, 'insertar' is used for pasting or adding elements, like 'insertar una imagen'."},

{type:"mc",q:"¿Qué es un intermitente en un coche?",opts:["La luz que indica un giro","El motor del vehículo","El freno de mano","El espejo retrovisor"],ans:"La luz que indica un giro",hint:"The blinking light you use before turning left or right."},

{type:"match",pairs:[
  {trg:"innovar",src:"to innovate"},
  {trg:"interruptor",src:"switch"},
  {trg:"intermitente",src:"turn signal"},
  {trg:"interferir",src:"to interfere"},
  {trg:"insertar",src:"to insert"}
]},

{type:"fb",s:"La {1} de nuestra marca en Asia ha sido todo un reto.",a:["internacionalización"],opts:["internacionalización","interconexión","interacción","innovación"],hint:"The process of expanding a business to work across multiple countries.",sSrc:"The {1} of our brand in Asia has been quite a challenge."}
]};
export default LESSON_10;
