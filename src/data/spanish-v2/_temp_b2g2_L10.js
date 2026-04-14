// B2 Gap2 Lesson 10 - Social Issues & Problems
const LESSON_10 = {id:"esv2_b2g2_l10",title:"Problemas sociales",icon:"📢",xp:15,board:true,steps:[
{type:"intro",title:"Problemas sociales",desc:"Discuss social challenges, abandonment, and societal decline using advanced Spanish vocabulary.",goals:["Learn 20 words about social issues","Discuss problems in society","Express opinions on social challenges"]},

{type:"teach",trg:"el abandono",src:"the abandonment / neglect",pos:"noun",gender:"m",
 note:"Masculine noun. The act of leaving behind or neglecting.",
 example:"A: El abandono de animales aumenta en verano.\nB: Es una irresponsabilidad que debe penalizarse.",
 exampleSrc:"A: Pet abandonment increases in summer.\nB: It is irresponsible behavior that must be penalized.",
 funFact:"Spain introduced fines up to 200,000 euros for animal abandonment in the 2023 animal welfare law."},

{type:"teach",trg:"el atraso",src:"the delay / backwardness",pos:"noun",gender:"m",
 note:"Masculine noun. A delay, or the state of being underdeveloped.",
 example:"A: El atraso tecnológico nos perjudica frente a la competencia.\nB: Necesitamos invertir en digitalización.",
 exampleSrc:"A: The technological backwardness hurts us against the competition.\nB: We need to invest in digitalization.",
 funFact:"Historically, 'el atraso español' was debated by the Generation of '98 writers after Spain's 1898 crisis."},

{type:"teach",trg:"la barbaridad",src:"the outrage / atrocity",pos:"noun",gender:"f",
 note:"Feminine noun. Something outrageous. Colloquially: an enormous amount.",
 example:"A: ¡Qué barbaridad, cien euros por una camiseta!\nB: Los precios están por las nubes.",
 exampleSrc:"A: What an outrage, one hundred euros for a T-shirt!\nB: Prices are sky-high.",
 funFact:"Exclamatory 'qué barbaridad' is quintessential Spanish, expressing shock at almost anything."},

{type:"teach",trg:"la bofetada",src:"the slap (in the face)",pos:"noun",gender:"f",
 note:"Feminine noun. A slap delivered with the open hand to the face.",
 example:"A: Le dio una bofetada delante de todos.\nB: Fue un momento muy violento e incómodo.",
 exampleSrc:"A: He slapped him in front of everyone.\nB: It was a very violent and uncomfortable moment.",
 funFact:"Figuratively, 'una bofetada de realidad' (a slap of reality) is a common expression."},

{type:"teach",trg:"la debilidad",src:"the weakness",pos:"noun",gender:"f",
 note:"Feminine noun. Lack of strength, or a fondness for something.",
 example:"A: El chocolate es mi debilidad.\nB: A mí me pasa lo mismo con el helado.",
 exampleSrc:"A: Chocolate is my weakness.\nB: The same happens to me with ice cream.",
 funFact:"'Tener debilidad por algo' means to have a soft spot for something. Very affectionate usage."},

{type:"mc",q:"¿Qué significa 'qué barbaridad'?",opts:["Una exclamación de asombro o indignación","Un saludo formal","Una pregunta educada","Un insulto grave"],ans:"Una exclamación de asombro o indignación",hint:"Think about the expression Spaniards use when they are shocked or outraged by something."},

{type:"teach",trg:"la criba",src:"the screening / sieve",pos:"noun",gender:"f",
 note:"Feminine noun. A sieve for separating grain, or a selection process.",
 example:"A: La criba de candidatos fue muy estricta.\nB: Solo pasaron diez de los cien aspirantes.",
 exampleSrc:"A: The screening of candidates was very strict.\nB: Only ten out of one hundred applicants passed.",
 funFact:"From 'cribar' (to sift). Used metaphorically for any rigorous selection process."},

{type:"teach",trg:"degenerar",src:"to degenerate / to deteriorate",pos:"verb",gender:null,
 note:"Regular -ar verb. To decline in quality or moral standards.",
 example:"A: La discusión degeneró en una pelea verbal.\nB: Tuvieron que intervenir los moderadores.",
 exampleSrc:"A: The discussion degenerated into a verbal fight.\nB: The moderators had to intervene.",
 funFact:"From Latin degenerare (to depart from one's kind). Common in both medical and social contexts."},

{type:"teach",trg:"decaer",src:"to decline / to weaken",pos:"verb",gender:null,
 note:"Irregular verb. Conjugates like caer: decaigo, decaes.\nUsed for health, morale, or quality.",
 example:"A: Su ánimo decayó después de la mala noticia.\nB: Necesita apoyo de su familia y amigos.",
 exampleSrc:"A: His spirits declined after the bad news.\nB: He needs support from his family and friends.",
 funFact:"'Decadencia' (decline) shares this root. 'La decadencia del imperio' is a classic history phrase."},

{type:"teach",trg:"decrecer",src:"to decrease / to diminish",pos:"verb",gender:null,
 note:"Irregular: like crecer. To become smaller in quantity.",
 example:"A: La población del pueblo decrece año tras año.\nB: Los jóvenes se marchan a las ciudades.",
 exampleSrc:"A: The town's population decreases year after year.\nB: Young people leave for the cities.",
 funFact:"'España vaciada' (emptied Spain) is the term for rural depopulation, where populations decrece."},

{type:"teach",trg:"la definición",src:"the definition",pos:"noun",gender:"f",
 note:"Feminine noun. A statement of the exact meaning of a word or concept.",
 example:"A: ¿Cuál es la definición de democracia?\nB: El gobierno del pueblo, por el pueblo, para el pueblo.",
 exampleSrc:"A: What is the definition of democracy?\nB: Government of the people, by the people, for the people.",
 funFact:"'Alta definición' (high definition) is the tech term. 'Por definición' means 'by definition'."},

{type:"fb",s:"La población rural {1} cada año por la emigración a las ciudades.",a:["decrece"],opts:["decrece","degenera","decae","abandona"],hint:"The verb meaning to become smaller in number, to diminish over time.",sSrc:"The rural population {1} each year due to emigration to the cities."},

{type:"teach",trg:"la clasificación",src:"the classification / standings",pos:"noun",gender:"f",
 note:"Feminine noun. The arrangement into categories, or sports rankings.",
 example:"A: ¿Cómo va la clasificación de la Liga?\nB: El Madrid va primero, seguido del Barça.",
 exampleSrc:"A: How are the League standings?\nB: Madrid is first, followed by Barça.",
 funFact:"Spanish sports media obsess over 'la clasificación'. It is the first thing fans check on Monday."},

{type:"teach",trg:"la asignación",src:"the allocation / assignment",pos:"noun",gender:"f",
 note:"Feminine noun. The act of distributing resources or assigning tasks.",
 example:"A: La asignación de presupuesto fue injusta.\nB: Algunas áreas recibieron mucho menos de lo necesario.",
 exampleSrc:"A: The budget allocation was unfair.\nB: Some areas received much less than needed.",
 funFact:"Also means allowance: 'asignación mensual' is a monthly allowance, especially for children."},

{type:"teach",trg:"el cese",src:"the cessation / dismissal",pos:"noun",gender:"m",
 note:"Masculine noun. The stopping of something, or a job termination.",
 example:"A: El ministro presentó su cese voluntariamente.\nB: La presión mediática fue demasiado fuerte.",
 exampleSrc:"A: The minister submitted his resignation voluntarily.\nB: The media pressure was too strong.",
 funFact:"'Cese de actividades' (cessation of activities) is the formal term for a business closing."},

{type:"teach",trg:"el auge",src:"the boom / peak / heyday",pos:"noun",gender:"m",
 note:"Masculine noun. A period of prosperity or highest point.",
 example:"A: El turismo está en pleno auge en España.\nB: Este año se esperan récords de visitantes.",
 exampleSrc:"A: Tourism is booming in Spain.\nB: This year visitor records are expected.",
 funFact:"From French 'auge'. 'Estar en auge' (to be booming) is one of the most useful B2 expressions."},

{type:"mc",q:"¿Qué es el auge de algo?",opts:["Su momento de mayor éxito","Su punto más bajo","Su inicio","Su final"],ans:"Su momento de mayor éxito",hint:"Think about the peak or golden era when something is at its highest point of success."},

{type:"teach",trg:"el anticipo",src:"the advance (payment) / preview",pos:"noun",gender:"m",
 note:"Masculine noun. Money paid in advance, or an early indication.",
 example:"A: Me dieron un anticipo del sueldo para pagar la mudanza.\nB: Qué suerte, no todas las empresas lo hacen.",
 exampleSrc:"A: They gave me a salary advance to pay for the move.\nB: How lucky, not all companies do that.",
 funFact:"'Anticipo de Navidad' is a tradition in Spain where companies advance part of December salary."},

{type:"teach",trg:"la actualización",src:"the update / modernization",pos:"noun",gender:"f",
 note:"Feminine noun. The process of bringing something up to date.",
 example:"A: La actualización del sistema operativo tardará una hora.\nB: Mejor hacerlo por la noche.",
 exampleSrc:"A: The operating system update will take an hour.\nB: Better to do it at night.",
 funFact:"False friend: 'actual' means current, not actual. 'Actualización' means update, not actualization."},

{type:"teach",trg:"cegar",src:"to blind / to dazzle",pos:"verb",gender:null,
 note:"Irregular: ciego, ciegas. To deprive of sight or judgment.",
 example:"A: La ambición lo cegó y tomó malas decisiones.\nB: No veía las consecuencias de sus actos.",
 exampleSrc:"A: Ambition blinded him and he made bad decisions.\nB: He could not see the consequences of his actions.",
 funFact:"Same stem change as 'negar': e > ie. 'Cegado por la ira' (blinded by rage) is a common phrase."},

{type:"teach",trg:"la convivencia",src:"the coexistence / living together",pos:"noun",gender:"f",
 note:"Feminine noun. The act of living together in harmony.",
 example:"A: La convivencia entre culturas enriquece a la sociedad.\nB: Pero requiere respeto mutuo y diálogo.",
 exampleSrc:"A: Coexistence between cultures enriches society.\nB: But it requires mutual respect and dialogue.",
 funFact:"'Normas de convivencia' (rules of coexistence) are posted in every Spanish school and community."},

{type:"fb",s:"El turismo está en pleno {1} esta temporada.",a:["auge"],opts:["auge","cese","atraso","abandono"],hint:"The noun meaning boom or peak period of success and prosperity.",sSrc:"Tourism is in full {1} this season."},

{type:"match",pairs:[{trg:"abandono",src:"abandonment"},{trg:"auge",src:"boom"},{trg:"criba",src:"screening"},{trg:"cese",src:"cessation"},{trg:"convivencia",src:"coexistence"}]}
]};

export default LESSON_10;
