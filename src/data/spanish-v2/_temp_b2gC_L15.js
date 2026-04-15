// B2 Gap Batch C Lesson 15 - Character & Moral Qualities
const LESSON_15 = {id:"esv2_b2gC_l15",title:"Carácter y cualidades morales",icon:"💎",xp:15,board:true,steps:[
{type:"intro",title:"Carácter y cualidades morales",desc:"Learn vocabulary for describing character traits, moral qualities, and ethical concepts in Spanish.",goals:["Learn 12 words about character and morals","Discuss virtues, vices, and ethical behavior","Use abstract character vocabulary"]},

{type:"teach",trg:"pernicioso",src:"pernicious / harmful",pos:"adj",gender:null,
 note:"Adjective. Extremely harmful or destructive.\nFeminine: perniciosa.",
 example:"A: El tabaco tiene efectos perniciosos para la salud.\nB: Aun así, millones de personas siguen fumando.",
 exampleSrc:"A: Tobacco has pernicious effects on health.\nB: Even so, millions of people continue to smoke.",
 funFact:"From Latin perniciosus (destructive), from per- (thoroughly) + nex (death). Literally 'death-causing'."},

{type:"teach",trg:"paternal",src:"paternal / fatherly",pos:"adj",gender:null,
 note:"Adjective, same form for m/f. Related to a father.\nOpposite: maternal.",
 example:"A: Tiene un tono paternal cuando habla con los nuevos empleados.\nB: Les hace sentir cómodos desde el primer día.",
 exampleSrc:"A: He has a fatherly tone when speaking with new employees.\nB: He makes them feel comfortable from the first day.",
 funFact:"Spanish uses 'paternal' and 'maternal' for both the literal (father/mother) and figurative (protective/caring) senses."},

{type:"teach",trg:"patriarcal",src:"patriarchal",pos:"adj",gender:null,
 note:"Adjective, same form for m/f. Relating to male authority.\nFrom Greek patriarch (ruling father).",
 example:"A: La sociedad patriarcal limitaba las oportunidades de las mujeres.\nB: Afortunadamente, las cosas están cambiando.",
 exampleSrc:"A: Patriarchal society limited women's opportunities.\nB: Fortunately, things are changing.",
 funFact:"Spain's feminist movement has been particularly strong since 2018, with massive protests against patriarcal structures."},

{type:"teach",trg:"patrimonial",src:"patrimonial / heritage-related",pos:"adj",gender:null,
 note:"Adjective, same form for m/f. Related to heritage or assets.\nFrom patrimonio (patrimony).",
 example:"A: La gestión patrimonial de la empresa ha sido excelente.\nB: Han duplicado el valor de sus activos en cinco años.",
 exampleSrc:"A: The asset management of the company has been excellent.\nB: They've doubled the value of their assets in five years.",
 funFact:"Spain has 50 UNESCO World Heritage sites. 'Patrimonio de la Humanidad' is one of Spain's proudest designations."},

{type:"mc",q:"¿Qué adjetivo significa 'extremadamente dañino'?",opts:["Pernicioso","Paternal","Patriarcal","Patrimonial"],ans:"Pernicioso",hint:"This Latin-derived word literally relates to death and destruction, describing something deeply harmful."},

{type:"teach",trg:"parejo",src:"even / equal / similar",pos:"adj",gender:null,
 note:"Adjective. Uniform, equal, or matching.\nFeminine: pareja.",
 example:"A: Los resultados de ambos equipos fueron parejos.\nB: Fue un partido muy competido hasta el final.",
 exampleSrc:"A: Both teams' results were even.\nB: It was a very competitive match until the end.",
 funFact:"The noun 'pareja' (partner/couple) comes from the same root. Two people who are matched together."},

{type:"teach",trg:"partícipe",src:"participant / involved party",pos:"adj",gender:null,
 note:"Adjective and noun. Someone who takes part.\nUsed with 'hacer' to mean 'to inform'.",
 example:"A: Quiero hacerte partícipe de la buena noticia.\nB: ¡Dime! Estoy deseando saberla.",
 exampleSrc:"A: I want to share the good news with you.\nB: Tell me! I'm dying to hear it.",
 funFact:"'Hacer partícipe' is a very formal way to say 'to share information with someone'. Common in speeches."},

{type:"teach",trg:"liberador",src:"liberating / freeing",pos:"adj",gender:null,
 note:"Adjective. That which sets free or liberates.\nFeminine: liberadora. Also noun: the liberator.",
 example:"A: La experiencia fue liberadora, me sentí como nueva.\nB: A veces necesitamos soltar lo que nos pesa.",
 exampleSrc:"A: The experience was liberating, I felt like a new person.\nB: Sometimes we need to let go of what weighs us down.",
 funFact:"Simón Bolívar is known as 'El Libertador' in Latin America. The adjective 'liberador' captures that same spirit."},

{type:"fb",s:"Los resultados de ambos equipos fueron muy {1}.",a:["parejos"],opts:["parejos","perniciosos","paternales","patrimoniales"],hint:"An adjective meaning even, equal, or closely matched in quality or performance.",sSrc:"Both teams' results were very {1}."},

{type:"teach",trg:"la cabeza",src:"the head / mind / leader",pos:"noun",gender:"f",
 note:"Feminine noun. The body part, and figuratively the mind.\nAlso: leader of a group.",
 example:"A: Tiene buena cabeza para los negocios.\nB: Siempre toma las decisiones correctas.",
 exampleSrc:"A: She has a good head for business.\nB: She always makes the right decisions.",
 funFact:"Spanish has dozens of 'cabeza' idioms: 'de cabeza' (headfirst), 'cabeza de turco' (scapegoat), 'sentar cabeza' (to settle down)."},

{type:"teach",trg:"el adulto",src:"the adult",pos:"noun",gender:"m",
 note:"Masculine noun. A fully grown person.\nFeminine: la adulta. Also adjective.",
 example:"A: Los adultos deben dar ejemplo a los jóvenes.\nB: Es nuestra responsabilidad como sociedad.",
 exampleSrc:"A: Adults must set an example for young people.\nB: It's our responsibility as a society.",
 funFact:"In Spanish law, 'adulto' begins at 18, but 'mayor de edad' (of legal age) is the formal legal term."},

{type:"teach",trg:"el jefe",src:"the boss / chief",pos:"noun",gender:"m",
 note:"Masculine noun. The person in charge.\nFeminine: la jefa. Very common word.",
 example:"A: Mi jefe me ha dado el día libre mañana.\nB: ¡Qué suerte! El mío nunca hace eso.",
 exampleSrc:"A: My boss gave me the day off tomorrow.\nB: How lucky! Mine never does that.",
 funFact:"From French chef. In Latin America, 'jefe' is sometimes used as a friendly form of address, like 'buddy'."},

{type:"mc",q:"¿Qué significa 'hacer partícipe a alguien'?",opts:["Compartir información o una experiencia con alguien","Obligar a alguien a participar","Castigar a alguien por su comportamiento","Dejar a alguien fuera del grupo"],ans:"Compartir información o una experiencia con alguien",hint:"A formal expression meaning to include someone by sharing news or experiences with them."},

{type:"fb",s:"Los {1} deben dar ejemplo a las generaciones más jóvenes.",a:["adultos"],opts:["adultos","jefes","cabezas","partícipes"],hint:"Fully grown people who have reached maturity and legal age.",sSrc:"{1} must set an example for younger generations."},

{type:"match",pairs:[{trg:"pernicioso",src:"pernicious"},{trg:"parejo",src:"even / equal"},{trg:"partícipe",src:"participant"},{trg:"cabeza",src:"head / mind"},{trg:"jefe",src:"boss"}]},

{type:"fb",s:"El tabaco tiene efectos {1} para la salud.",a:["perniciosos"],opts:["perniciosos","parejos","paternales","patriarcales"],hint:"An adjective meaning extremely harmful or destructive, especially in a gradual way.",sSrc:"Tobacco has {1} effects on health."}
]};

export default LESSON_15;
