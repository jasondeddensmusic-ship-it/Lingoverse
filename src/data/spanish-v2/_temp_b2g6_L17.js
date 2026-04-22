// B2 Gap Batch 6 Lesson 17 - Personality & Character
const LESSON_17 = {id:"esv2_b2g6_l17",title:"Personalidad y carácter",icon:"🎭",xp:15,board:true,steps:[
{type:"intro",title:"Personalidad y carácter",desc:"Master vocabulary for describing personality traits, character qualities, and human behavior.",goals:["Learn 15 personality and character terms","Describe people's traits precisely","Use nuanced character vocabulary"]},

{type:"teach",trg:"ingenioso",src:"ingenious / witty",pos:"adj",gender:null,
 note:"Adjective. Clever and creative. Also means witty.\nFrom ingenio (ingenuity/wit).",
 example:"A: Fue una solución muy ingeniosa.\nB: A veces las ideas simples son las mejores.",
 exampleSrc:"A: It was a very ingenious solution.\nB: Sometimes simple ideas are the best.",
 funFact:"'El Ingenioso Hidalgo Don Quijote' uses 'ingenioso' in the title, meaning both clever and eccentric."},

{type:"teach",trg:"ignorante",src:"ignorant",pos:"adj",gender:null,
 note:"Adjective. Lacking knowledge or awareness.\nFrom Latin ignorare. Also used as a noun.",
 example:"A: No seas ignorante, infórmate antes de opinar.\nB: Tienes razón, debería leer más sobre el tema.",
 exampleSrc:"A: Do not be ignorant, get informed before giving your opinion.\nB: You are right, I should read more about the topic.",
 funFact:"In Spanish, 'ignorante' is a strong insult. Use 'desconocer' (to be unaware of) to be more polite."},

{type:"teach",trg:"imparcial",src:"impartial / unbiased",pos:"adj",gender:null,
 note:"Adjective. Not favoring one side over another.\nIm- (not) + parcial (partial).",
 example:"A: Un juez debe ser siempre imparcial.\nB: Cualquier sesgo pondría en peligro la justicia.",
 exampleSrc:"A: A judge must always be impartial.\nB: Any bias would endanger justice.",
 funFact:"'Imparcialidad' (impartiality) is a core principle of Spanish judicial law."},

{type:"teach",trg:"irresponsable",src:"irresponsible",pos:"adj",gender:null,
 note:"Adjective. Not taking responsibility for actions.\nIr- (not) + responsable.",
 example:"A: Fue muy irresponsable dejar la puerta abierta.\nB: Cualquiera podría haber entrado.",
 exampleSrc:"A: It was very irresponsible to leave the door open.\nB: Anyone could have entered.",
 funFact:"The prefix ir- is used before 'r': irresponsable, irrespetuoso, irreal, irremediable."},

{type:"mc",q:"¿Qué significa imparcial?",opts:["Que no favorece a ninguna de las partes","Que es muy parcial","Que no tiene opinión","Que siempre está de acuerdo"],ans:"Que no favorece a ninguna de las partes",hint:"Fair and unbiased, not taking sides in a dispute."},

{type:"teach",trg:"irrespetuoso",src:"disrespectful",pos:"adj",gender:null,
 note:"Adjective. Showing lack of respect.\nIr- (not) + respetuoso (respectful).",
 example:"A: Su comentario fue muy irrespetuoso.\nB: Debería disculparse inmediatamente.",
 exampleSrc:"A: His comment was very disrespectful.\nB: He should apologize immediately.",
 funFact:"In Spain, being called 'irrespetuoso' is serious. Respect ('respeto') is a central cultural value."},

{type:"teach",trg:"insensible",src:"insensitive / numb",pos:"adj",gender:null,
 note:"Adjective. Lacking feeling or sensitivity.\nIn- (not) + sensible (sensitive).",
 example:"A: No seas insensible, ella está pasándolo muy mal.\nB: Tienes razón, debería ser más empático.",
 exampleSrc:"A: Do not be insensitive, she is having a very hard time.\nB: You are right, I should be more empathetic.",
 funFact:"False friend alert: Spanish 'sensible' means 'sensitive', not 'sensible'. English 'sensible' = 'sensato'."},

{type:"teach",trg:"indeciso",src:"indecisive",pos:"adj",gender:null,
 note:"Adjective. Unable to make decisions.\nIn- (not) + deciso (decided).",
 example:"A: Es tan indeciso que tarda media hora en elegir un plato.\nB: A veces hay que decidir y ya está.",
 exampleSrc:"A: He is so indecisive that he takes half an hour to choose a dish.\nB: Sometimes you just have to decide and be done with it.",
 funFact:"'Estar indeciso' (to be undecided at this moment) vs 'ser indeciso' (to be an indecisive person by nature)."},

{type:"fb",s:"El árbitro debe ser completamente {1} durante el partido.",a:["imparcial"],opts:["imparcial","ingenioso","ignorante","indeciso"],hint:"Not favoring either team. Fair and unbiased.",sSrc:"The referee must be completely {1} during the match."},

{type:"teach",trg:"inquisitivo",src:"inquisitive / curious",pos:"adj",gender:null,
 note:"Adjective. Eager to learn or investigate.\nFrom Latin inquisitivus.",
 example:"A: Los niños son naturalmente inquisitivos.\nB: Hacen preguntas sobre todo.",
 exampleSrc:"A: Children are naturally inquisitive.\nB: They ask questions about everything.",
 funFact:"Related to the Inquisición. But 'inquisitivo' today simply means curious and questioning."},

{type:"teach",trg:"influenciable",src:"impressionable / easily influenced",pos:"adj",gender:null,
 note:"Adjective. Easily swayed by others.\nInfluencia + -able.",
 example:"A: Los adolescentes son muy influenciables.\nB: Por eso las redes sociales son un arma de doble filo.",
 exampleSrc:"A: Teenagers are very impressionable.\nB: That is why social media is a double-edged sword.",
 funFact:"'Arma de doble filo' (double-edged sword) is a very common Spanish expression for something risky."},

{type:"teach",trg:"impotente",src:"powerless / impotent",pos:"adj",gender:null,
 note:"Adjective. Unable to act or take action.\nIm- (not) + potente (powerful).",
 example:"A: Me siento impotente ante esta situación.\nB: Entiendo tu frustración, pero algo se podrá hacer.",
 exampleSrc:"A: I feel powerless in this situation.\nB: I understand your frustration, but something can surely be done.",
 funFact:"Also has a medical meaning. In general use, it means being unable to change a situation."},

{type:"mc",q:"¿Qué significa influenciable?",opts:["Que no cambia de opinión","Fácilmente influido por los demás","Que tiene mucha influencia","Que es muy inteligente"],ans:"Fácilmente influido por los demás",hint:"Someone who is easily swayed or persuaded by others."},

{type:"match",pairs:[
  {trg:"ingenioso",src:"ingenious / witty"},
  {trg:"irrespetuoso",src:"disrespectful"},
  {trg:"indeciso",src:"indecisive"},
  {trg:"inquisitivo",src:"inquisitive"},
  {trg:"impotente",src:"powerless"}
]},

{type:"fb",s:"Los jóvenes son muy {1} y las redes sociales lo saben.",a:["influenciables"],opts:["influenciables","imparciales","inquisitivos","insensibles"],hint:"Easily swayed or persuaded by others' opinions.",sSrc:"Young people are very {1} and social media knows it."}
]};
export default LESSON_17;
