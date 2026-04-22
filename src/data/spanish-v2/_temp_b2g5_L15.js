// B2 Gap Batch 5 Lesson 15 - Politics & Ideology
const LESSON_15 = {id:"esv2_b2g5_l15",title:"Política e ideología",icon:"🗳️",xp:15,board:true,steps:[
{type:"intro",title:"Política e ideología",desc:"Learn vocabulary about political systems, ideological movements, and social change.",goals:["Learn 15 words about politics and ideology","Discuss political movements and social reform","Use formal political discourse vocabulary"]},

{type:"teach",trg:"el idealismo",src:"the idealism",pos:"noun",gender:"m",
 note:"Masculine noun. The belief in pursuing high principles.\nOpposite: pragmatismo, realismo.",
 example:"A: Su idealismo le llevó a dedicarse a la política.\nB: Quería cambiar el mundo desde dentro.",
 exampleSrc:"A: His idealism led him to dedicate himself to politics.\nB: He wanted to change the world from within.",
 funFact:"In philosophy, idealismo also means the theory that reality is constructed by the mind (Kant, Hegel)."},

{type:"teach",trg:"el ideólogo",src:"the ideologue",pos:"noun",gender:"m",
 note:"Masculine noun. A person who develops or promotes an ideology.\nFeminine: la ideóloga.",
 example:"A: El ideólogo del partido diseñó la estrategia electoral.\nB: Su discurso conectó con los jóvenes.",
 exampleSrc:"A: The party ideologue designed the electoral strategy.\nB: His discourse connected with young people.",
 funFact:"From Greek idea + logos. In modern use, 'ideólogo' can have a negative connotation of rigid thinking."},

{type:"teach",trg:"la evangelización",src:"the evangelization",pos:"noun",gender:"f",
 note:"Feminine noun. The spreading of religious faith.\nHistorical: conversion of indigenous peoples.",
 example:"A: La evangelización de América fue un proceso complejo.\nB: Tuvo consecuencias profundas para las culturas indígenas.",
 exampleSrc:"A: The evangelization of the Americas was a complex process.\nB: It had profound consequences for indigenous cultures.",
 funFact:"Spanish missionaries created the first dictionaries and grammars of many indigenous languages during evangelización."},

{type:"teach",trg:"la cristianización",src:"the Christianization",pos:"noun",gender:"f",
 note:"Feminine noun. The process of converting a society to Christianity.\nHistorical term.",
 example:"A: La cristianización de la península ibérica fue gradual.\nB: Duró varios siglos.",
 exampleSrc:"A: The Christianization of the Iberian Peninsula was gradual.\nB: It lasted several centuries.",
 funFact:"The Visigoth king Recaredo's conversion to Catholicism in 589 AD was a turning point for Spain."},

{type:"teach",trg:"la descentralización",src:"the decentralization",pos:"noun",gender:"f",
 note:"Feminine noun. Transferring authority from central to local government.\nKey concept in Spanish politics.",
 example:"A: La descentralización ha dado más poder a las regiones.\nB: Cada comunidad autónoma gestiona su sanidad.",
 exampleSrc:"A: Decentralization has given more power to the regions.\nB: Each autonomous community manages its own healthcare.",
 funFact:"Spain's 'Estado de las Autonomías' is one of the most decentralized systems in Europe."},

{type:"mc",q:"¿Qué es un ideólogo?",opts:["Una persona que desarrolla o promueve una ideología","Un político en el gobierno","Un periodista de opinión","Un filósofo clásico"],ans:"Una persona que desarrolla o promueve una ideología",hint:"The person who creates the intellectual framework and ideas behind a political movement."},

{type:"teach",trg:"el adepto",src:"the follower / devotee",pos:"noun",gender:"m",
 note:"Masculine/adjective. A devoted follower of a cause.\nFeminine: la adepta. Also adjective: adepto a.",
 example:"A: El movimiento tiene cada vez más adeptos.\nB: Su mensaje atrae a gente de todas las edades.",
 exampleSrc:"A: The movement has more and more followers.\nB: Its message attracts people of all ages.",
 funFact:"From Latin adeptus (one who has attained). Originally an alchemist who found the philosopher's stone."},

{type:"teach",trg:"la aprobación",src:"the approval",pos:"noun",gender:"f",
 note:"Feminine noun. Official acceptance or endorsement.\nFrom aprobar (to approve/pass).",
 example:"A: La aprobación de la ley generó un gran debate.\nB: Algunos partidos votaron en contra.",
 exampleSrc:"A: The approval of the law generated a great debate.\nB: Some parties voted against it.",
 funFact:"In Spain, laws can be approved by 'mayoría simple' (simple majority) or 'mayoría absoluta' (absolute majority)."},

{type:"teach",trg:"la expropiación",src:"the expropriation",pos:"noun",gender:"f",
 note:"Feminine noun. Government seizure of private property.\nFrom expropiar (to expropriate).",
 example:"A: La expropiación de terrenos para la autopista fue polémica.\nB: Los propietarios recibieron una compensación.",
 exampleSrc:"A: The expropriation of land for the highway was controversial.\nB: The owners received compensation.",
 funFact:"The Spanish Constitution allows expropriation only for public interest and with fair compensation."},

{type:"teach",trg:"el hincapié",src:"the emphasis / stress",pos:"noun",gender:"m",
 note:"Masculine noun. Almost always in 'hacer hincapié en' (to emphasize).\nFrom hincar (to drive in) + pie (foot).",
 example:"A: El ministro hizo hincapié en la necesidad de reformas.\nB: Repitió el mensaje varias veces.",
 exampleSrc:"A: The minister emphasized the need for reforms.\nB: He repeated the message several times.",
 funFact:"Literally 'to drive one's foot in', like planting your feet firmly to make a strong point."},

{type:"fb",s:"El {1} del partido diseñó toda la estrategia electoral.",a:["ideólogo"],opts:["ideólogo","adepto","idealismo","hincapié"],hint:"The intellectual architect behind a political movement's ideas.",sSrc:"The party {1} designed the entire electoral strategy."},

{type:"teach",trg:"la hinchada",src:"the fan base / supporters (sports)",pos:"noun",gender:"f",
 note:"Feminine noun. The collective fans of a sports team.\nFrom hinchar (to swell).",
 example:"A: La hinchada del equipo llenó el estadio.\nB: Animaron durante los noventa minutos sin parar.",
 exampleSrc:"A: The team's fan base filled the stadium.\nB: They cheered for ninety minutes nonstop.",
 funFact:"From hinchar (to swell/inflate). The fans 'inflate' the team's confidence with their energy."},

{type:"teach",trg:"a la moda",src:"fashionable / trendy",pos:"adv",gender:null,
 note:"Adverbial phrase. In the current fashion.\nAlso adjective: estar a la moda.",
 example:"A: Su ropa siempre está a la moda.\nB: Lee muchas revistas de tendencias.",
 exampleSrc:"A: Her clothes are always fashionable.\nB: She reads many trend magazines.",
 funFact:"'A la moda' can also describe food prepared in a particular style, like 'bacalao a la moda de Bilbao'."},

{type:"teach",trg:"a partir de",src:"from / starting from",pos:"prep",gender:null,
 note:"Prepositional phrase. Indicates a starting point in time or quantity.\nVery common in formal Spanish.",
 example:"A: A partir de mañana, el horario cambia.\nB: ¿A qué hora abrimos entonces?",
 exampleSrc:"A: Starting from tomorrow, the schedule changes.\nB: What time do we open then?",
 funFact:"'A partir de' is more formal than 'desde'. Used constantly in laws, regulations, and official announcements."},

{type:"teach",trg:"en cambio",src:"on the other hand / however",pos:"adv",gender:null,
 note:"Adverbial phrase. Introduces a contrast.\nSimilar to 'sin embargo' but lighter.",
 example:"A: Madrid es muy ruidoso. Barcelona, en cambio, tiene barrios tranquilos.\nB: Depende de la zona, claro.",
 exampleSrc:"A: Madrid is very noisy. Barcelona, on the other hand, has quiet neighborhoods.\nB: It depends on the area, of course.",
 funFact:"'En cambio' is less formal than 'sin embargo' and less strong than 'por el contrario'."},

{type:"mc",q:"¿Qué significa 'hacer hincapié'?",opts:["Aprobar una ley","Poner énfasis en algo","Dar un paso hacia atrás","Cambiar de opinión"],ans:"Poner énfasis en algo",hint:"To plant your feet firmly and stress a point, literally 'to drive in the foot'."},

{type:"fb",s:"{1} septiembre, las clases empiezan a las nueve.",a:["A partir de"],opts:["A partir de","En cambio","A la moda","Sin embargo"],hint:"A formal phrase meaning 'starting from' a certain point in time.",sSrc:"{1} September, classes start at nine."},

{type:"match",pairs:[{trg:"idealismo",src:"idealism"},{trg:"adepto",src:"follower"},{trg:"aprobación",src:"approval"},{trg:"hinchada",src:"fan base"},{trg:"hincapié",src:"emphasis"}]},

{type:"fb",s:"La {1} del estadio animó al equipo durante todo el partido.",a:["hinchada"],opts:["hinchada","aprobación","evangelización","expropiación"],hint:"The collective fans or supporters of a sports team.",sSrc:"The stadium {1} cheered the team throughout the match."},

{type:"mc",q:"¿Qué introduce 'en cambio'?",opts:["Una lista de ejemplos","Una conclusión final","Un contraste con lo anterior","Una consecuencia lógica"],ans:"Un contraste con lo anterior",hint:"This phrase signals that what follows is different from or contrasts with what was just said."}
]};

export default LESSON_15;
