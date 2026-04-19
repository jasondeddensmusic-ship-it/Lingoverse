// B2 Gap Batch 8 Lesson 18 - Social Issues & Morality
const LESSON_18 = {id:"esv2_b2g8_l18",title:"Cuestiones morales",icon:"⚖️",xp:15,board:true,steps:[
{type:"intro",title:"Cuestiones morales",desc:"Explore vocabulary for discussing moral issues, social justice, and governance in Spanish society.",goals:["Learn 15 words about morality and social issues","Discuss authority and social problems","Express nuanced opinions on justice"]},

{type:"teach",trg:"macabro",src:"macabre / gruesome",pos:"adj",gender:null,
 note:"Adjective. Disturbing because related to death.\nFeminine: macabra.",
 example:"A: La escena del crimen era macabra.\nB: Los investigadores dijeron que nunca habían visto algo así.",
 exampleSrc:"A: The crime scene was macabre.\nB: The investigators said they had never seen anything like it.",
 funFact:"Possibly from French 'danse macabre' (dance of death), a medieval artistic genre about mortality."},

{type:"teach",trg:"el machismo",src:"the machismo / male chauvinism",pos:"noun",gender:"m",
 note:"Masculine noun. Exaggerated masculine pride or attitudes of male superiority.",
 example:"A: El machismo sigue presente en muchos aspectos de la sociedad.\nB: Pero cada vez hay más conciencia para combatirlo.",
 exampleSrc:"A: Machismo is still present in many aspects of society.\nB: But there is growing awareness to combat it.",
 funFact:"The word was borrowed into English directly from Spanish. Spain passed landmark gender violence laws in 2004."},

{type:"teach",trg:"la maldad",src:"the evil / wickedness",pos:"noun",gender:"f",
 note:"Feminine noun. The quality of being evil or morally wrong.\nFrom malo (bad) + -dad.",
 example:"A: La maldad del personaje sorprendió a todos los espectadores.\nB: Nadie esperaba ese giro en la trama.",
 exampleSrc:"A: The character's wickedness surprised all the viewers.\nB: Nobody expected that twist in the plot.",
 funFact:"The suffix -dad creates abstract nouns from adjectives: malo > maldad, bondad (goodness) from bueno."},

{type:"teach",trg:"el maltrato",src:"the mistreatment / abuse",pos:"noun",gender:"m",
 note:"Masculine noun. Physical or emotional abuse.\nMal (bad) + trato (treatment).",
 example:"A: El maltrato animal es un delito en España.\nB: Las penas se han endurecido en los últimos años.",
 exampleSrc:"A: Animal abuse is a crime in Spain.\nB: Penalties have become stricter in recent years.",
 funFact:"Spain's 2004 Ley contra la Violencia de Genero was one of Europe's first laws specifically targeting domestic abuse."},

{type:"teach",trg:"el mandatario",src:"the leader / head of state",pos:"noun",gender:"m",
 note:"Masculine noun. A person in a position of authority, especially political.\nFeminine: la mandataria.",
 example:"A: Los mandatarios europeos se reunieron en Bruselas.\nB: Discutieron la crisis energética durante dos días.",
 exampleSrc:"A: The European leaders met in Brussels.\nB: They discussed the energy crisis for two days.",
 funFact:"'Primer mandatario' is a formal way to say 'head of state', especially in Latin American journalism."},

{type:"mc",q:"¿Qué es el machismo?",
 opts:["Una actitud de superioridad masculina","Un tipo de deporte","Un estilo de cocina","Una corriente artística"],
 ans:"Una actitud de superioridad masculina",
 hint:"Exaggerated attitudes of male pride and the belief that men are superior."},

{type:"teach",trg:"el mandato",src:"the mandate / term in office",pos:"noun",gender:"m",
 note:"Masculine noun. An official order, or the period of authority.\nFrom Latin mandatum.",
 example:"A: Su mandato como presidente duró cuatro años.\nB: Fue un periodo de grandes reformas económicas.",
 exampleSrc:"A: His term as president lasted four years.\nB: It was a period of major economic reforms.",
 funFact:"In Spain, the prime minister's mandate has no fixed term limit, unlike in the US or France."},

{type:"teach",trg:"el manifestante",src:"the protester / demonstrator",pos:"noun",gender:"m",
 note:"Common gender noun. A person who takes part in a protest.\nFeminine: la manifestante.",
 example:"A: Miles de manifestantes estaban en la plaza central.\nB: Pedían una reforma del sistema educativo.",
 exampleSrc:"A: Thousands of protesters were in the central square.\nB: They were demanding a reform of the education system.",
 funFact:"Spain's 15-M movement (2011) brought millions of manifestantes to the streets. It reshaped Spanish politics."},

{type:"teach",trg:"el manto",src:"the cloak / mantle / layer",pos:"noun",gender:"m",
 note:"Masculine noun. A long outer garment, or a covering layer.\nUn manto de nieve = a blanket of snow.",
 example:"A: Un manto de niebla cubría toda la ciudad al amanecer.\nB: No se veía nada a más de diez metros.",
 exampleSrc:"A: A blanket of fog covered the entire city at dawn.\nB: You could not see anything beyond ten meters.",
 funFact:"The Virgin's 'manto' (mantle) is a central element of Semana Santa processions in Spain."},

{type:"fb",s:"El {1} animal es un delito castigado con multas y penas de cárcel.",
 a:["maltrato"],opts:["maltrato","mandato","manto","machismo"],
 hint:"Bad treatment or abuse inflicted on animals. Mal + trato.",
 sSrc:"Animal {1} is a crime punished with fines and prison sentences."},

{type:"teach",trg:"la manada",src:"the herd / pack / flock",pos:"noun",gender:"f",
 note:"Feminine noun. A group of animals living together.\nAlso used for groups of people (often negative).",
 example:"A: Una manada de lobos fue avistada en las montañas.\nB: Es señal de que el ecosistema se está recuperando.",
 exampleSrc:"A: A pack of wolves was spotted in the mountains.\nB: It is a sign that the ecosystem is recovering.",
 funFact:"The word took on a loaded legal meaning in Spain after the 2016 'La Manada' court case."},

{type:"teach",trg:"maternal",src:"maternal / motherly",pos:"adj",gender:null,
 note:"Adjective. Related to a mother.\nInstinto maternal = maternal instinct.\nLengua materna = mother tongue.",
 example:"A: La baja maternal en España es de dieciséis semanas.\nB: Desde 2021, los padres tienen la misma duración.",
 exampleSrc:"A: Maternity leave in Spain is sixteen weeks.\nB: Since 2021, fathers have the same duration.",
 funFact:"Spain equalized paternity and maternity leave in 2021 at 16 weeks each, among Europe's most generous."},

{type:"teach",trg:"mayoritario",src:"majority (adj)",pos:"adj",gender:null,
 note:"Adjective. Belonging to or constituting a majority.\nFeminine: mayoritaria. Socio mayoritario = majority shareholder.",
 example:"A: El partido mayoritario ganó las elecciones con amplio margen.\nB: Obtuvo más del sesenta por ciento de los votos.",
 exampleSrc:"A: The majority party won the elections by a wide margin.\nB: It obtained more than sixty percent of the votes.",
 funFact:"Spain uses a proportional representation system, so absolute majorities are rare and coalitions common."},

{type:"mc",q:"¿Qué es un mandatario?",
 opts:["Un líder político o jefe de estado","Un soldado","Un periodista","Un juez de un tribunal"],
 ans:"Un líder político o jefe de estado",
 hint:"A person who holds a position of political authority, especially at the highest level."},

{type:"teach",trg:"la maña",src:"the knack / skill / trick",pos:"noun",gender:"f",
 note:"Feminine noun. Clever ability or resourcefulness.\nDarse maña = to manage skillfully. Usually plural: mañas.",
 example:"A: Se da mucha maña con las reparaciones caseras.\nB: Arregla de todo sin llamar a nadie.",
 exampleSrc:"A: He has a real knack for home repairs.\nB: He fixes everything without calling anyone.",
 funFact:"'Maño/a' is the affectionate nickname for people from Aragon, possibly from this word's sense of skill."},

{type:"teach",trg:"el magnate",src:"the tycoon / magnate",pos:"noun",gender:"m",
 note:"Masculine noun. A very wealthy and powerful business person.\nAlso: magnata (feminine, less common).",
 example:"A: El magnate compró el periódico más importante del país.\nB: Muchos tienen miedo por el futuro del periódico.",
 exampleSrc:"A: The tycoon bought the most important newspaper in the country.\nB: Many are afraid for the future of the newspaper.",
 funFact:"From Latin magnus (great). Originally referred to Hungarian nobles. Now used globally for business moguls."},

{type:"fb",s:"Los {1} recorrieron las calles pidiendo mejores condiciones laborales.",
 a:["manifestantes"],opts:["manifestantes","mandatarios","magnates","mantos"],
 hint:"People who march in the streets to protest and demand change.",
 sSrc:"The {1} marched through the streets demanding better working conditions."},

{type:"mc",q:"Un 'manto de niebla' significa:",
 opts:["Una capa de niebla que cubre todo","Un tipo de abrigo","Una montaña cubierta de nieve","Un fenómeno eléctrico"],
 ans:"Una capa de niebla que cubre todo",
 hint:"A 'manto' is a covering layer. Think of fog as a blanket over the landscape."},

{type:"match",pairs:[
 {trg:"maldad",src:"wickedness"},
 {trg:"mandato",src:"mandate / term"},
 {trg:"manada",src:"herd / pack"},
 {trg:"magnate",src:"tycoon"},
 {trg:"maña",src:"knack / skill"}
]},

{type:"fb",s:"Su {1} como alcaldesa fue recordado por las reformas sociales.",
 a:["mandato"],opts:["mandato","maltrato","manto","machismo"],
 hint:"The period during which someone holds an official position of authority.",
 sSrc:"Her {1} as mayor was remembered for the social reforms."},

{type:"mc",q:"'Darse maña' significa:",
 opts:["Tener habilidad para hacer algo","Tener mala suerte","Estar cansado","Levantarse temprano"],
 ans:"Tener habilidad para hacer algo",
 hint:"Having a clever ability or resourcefulness to accomplish tasks skillfully."}
]};
export default LESSON_18;
