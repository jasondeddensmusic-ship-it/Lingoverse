// B2 Gap Lesson 01 - Society & Citizenship
const LESSON_1 = {id:"esv2_b2gap_l1",title:"Ciudadanos y sociedad",icon:"🏛️",xp:15,board:true,steps:[
{type:"intro",title:"Ciudadanos y sociedad",desc:"Explore vocabulary about citizens, assemblies, and social structures in contemporary Spain.",goals:["Learn 20 words about society and governance","Discuss civic participation","Use abstract nouns with confidence"]},

{type:"teach",trg:"el ciudadano",src:"the citizen",pos:"noun",gender:"m",
 note:"Masculine noun. From ciudad (city).\nFeminine: la ciudadana.",
 example:"A: ¿Todos los ciudadanos tienen derecho a votar?\nB: Sí, a partir de los dieciocho años.",
 exampleSrc:"A: Do all citizens have the right to vote?\nB: Yes, from the age of eighteen.",
 funFact:"From Latin civitatem. The same root gives us 'civilization' in English."},

{type:"teach",trg:"la ciudadanía",src:"the citizenship",pos:"noun",gender:"f",
 note:"Feminine noun. The abstract status of being a citizen.",
 example:"A: ¿Cómo se obtiene la ciudadanía española?\nB: Hay varios caminos, como la residencia prolongada.",
 exampleSrc:"A: How do you obtain Spanish citizenship?\nB: There are various paths, like extended residency.",
 funFact:"Spain allows dual citizenship with many Latin American countries due to historical ties."},

{type:"teach",trg:"la asamblea",src:"the assembly",pos:"noun",gender:"f",
 note:"Feminine noun. A formal gathering for discussion or decisions.",
 example:"A: ¿Cuándo es la próxima asamblea de vecinos?\nB: El jueves a las siete de la tarde.",
 exampleSrc:"A: When is the next neighborhood assembly?\nB: Thursday at seven in the evening.",
 funFact:"From Old French assemblee. Spain's regional parliaments are often called 'asambleas'."},

{type:"teach",trg:"el censo",src:"the census",pos:"noun",gender:"m",
 note:"Masculine noun. Official count of the population.",
 example:"A: ¿Estás inscrito en el censo electoral?\nB: Sí, me registré el mes pasado.",
 exampleSrc:"A: Are you registered in the electoral census?\nB: Yes, I registered last month.",
 funFact:"From Latin censere (to assess). Spain's first modern census was in 1768."},

{type:"teach",trg:"el consenso",src:"the consensus",pos:"noun",gender:"m",
 note:"Masculine noun. General agreement among a group.",
 example:"A: ¿Llegaron a un consenso?\nB: Sí, después de largas negociaciones.",
 exampleSrc:"A: Did they reach a consensus?\nB: Yes, after lengthy negotiations.",
 funFact:"'El consenso de 1978' refers to the broad agreement that produced Spain's constitution."},

{type:"mc",q:"¿Qué es un ciudadano?",opts:["Una persona con derechos en un país","Un tipo de edificio","Un político profesional","Una reunión formal"],ans:"Una persona con derechos en un país",hint:"Think about who lives in and belongs to a country."},

{type:"teach",trg:"la conformidad",src:"the conformity / agreement",pos:"noun",gender:"f",
 note:"Feminine noun. State of being in agreement or compliance.",
 example:"A: ¿Dio su conformidad al proyecto?\nB: Sí, firmó los documentos ayer.",
 exampleSrc:"A: Did he give his agreement to the project?\nB: Yes, he signed the documents yesterday.",
 funFact:"In legal Spanish, 'dar su conformidad' means to formally consent or approve."},

{type:"teach",trg:"la consideración",src:"the consideration",pos:"noun",gender:"f",
 note:"Feminine noun. Careful thought or regard for others.",
 example:"A: Debemos tener en consideración todos los factores.\nB: Estoy de acuerdo, no podemos decidir a la ligera.",
 exampleSrc:"A: We must take all factors into consideration.\nB: I agree, we cannot decide lightly.",
 funFact:"'Tener en consideración' is more formal than the everyday 'tener en cuenta'."},

{type:"teach",trg:"la concienciación",src:"the awareness-raising",pos:"noun",gender:"f",
 note:"Feminine noun. Making people aware of an issue.",
 example:"A: La campaña de concienciación fue un éxito.\nB: Mucha gente cambió sus hábitos.",
 exampleSrc:"A: The awareness campaign was a success.\nB: Many people changed their habits.",
 funFact:"In Latin America, the spelling 'concientización' is preferred, following Paulo Freire."},

{type:"teach",trg:"la aprobación",src:"the approval",pos:"noun",gender:"f",
 note:"Feminine noun. Official acceptance or endorsement.",
 example:"A: ¿La ley recibió la aprobación del parlamento?\nB: Sí, con una amplia mayoría.",
 exampleSrc:"A: Did the law receive parliamentary approval?\nB: Yes, with a broad majority.",
 funFact:"The verb 'aprobar' also means 'to pass' an exam in academic Spanish."},

{type:"fb",s:"Los {1} tienen el deber de participar en las elecciones.",a:["ciudadanos"],opts:["ciudadanos","censos","consensos","asambleas"],hint:"The people who live in and belong to a country.",sSrc:"The {1} have the duty to participate in elections."},

{type:"teach",trg:"el concursante",src:"the contestant",pos:"noun",gender:"m",
 note:"Masculine noun. Someone in a competition.\nFeminine: la concursante.",
 example:"A: ¿Cuántos concursantes hay en el programa?\nB: Veinte, pero solo uno ganará.",
 exampleSrc:"A: How many contestants are on the show?\nB: Twenty, but only one will win.",
 funFact:"From concurso (contest). Spanish TV game shows use this word constantly."},

{type:"teach",trg:"el aspirante",src:"the candidate / aspirant",pos:"noun",gender:"m",
 note:"Masculine noun. Someone aspiring to a position.\nFeminine: la aspirante.",
 example:"A: Hay tres aspirantes al puesto de director.\nB: ¿Quién tiene más experiencia?",
 exampleSrc:"A: There are three candidates for the director position.\nB: Who has the most experience?",
 funFact:"From Latin aspirare (to breathe toward). An aspirant 'breathes toward' their goal."},

{type:"teach",trg:"la aspiración",src:"the aspiration",pos:"noun",gender:"f",
 note:"Feminine noun. A strong hope or ambition.",
 example:"A: ¿Cuál es tu mayor aspiración profesional?\nB: Contribuir a mejorar mi comunidad.",
 exampleSrc:"A: What is your greatest professional aspiration?\nB: To contribute to improving my community.",
 funFact:"In phonetics, 'aspiración' refers to the puff of air in sounds like English 'p' in 'pat'."},

{type:"teach",trg:"la acreditación",src:"the accreditation",pos:"noun",gender:"f",
 note:"Feminine noun. Official recognition that standards are met.",
 example:"A: ¿El programa tiene acreditación internacional?\nB: Sí, desde hace dos años.",
 exampleSrc:"A: Does the program have international accreditation?\nB: Yes, for the past two years.",
 funFact:"From Latin accreditare. Universities seek 'acreditación' to validate their degrees."},

{type:"mc",q:"Una persona que participa en un concurso es un:",opts:["aspirante","concursante","ciudadano","caudillo"],ans:"concursante",hint:"The word derives from 'concurso', meaning contest or competition."},

{type:"teach",trg:"la centralización",src:"the centralization",pos:"noun",gender:"f",
 note:"Feminine noun. Concentrating control in a central authority.",
 example:"A: La centralización del poder preocupa a las regiones.\nB: Prefieren más autonomía local.",
 exampleSrc:"A: The centralization of power worries the regions.\nB: They prefer more local autonomy.",
 funFact:"Spain's 17 autonomous communities were created partly to reverse centuries of centralization."},

{type:"teach",trg:"el autoritarismo",src:"the authoritarianism",pos:"noun",gender:"m",
 note:"Masculine noun. A system favoring obedience to authority over freedom.",
 example:"A: El autoritarismo destruye la libertad de expresión.\nB: Es incompatible con la democracia.",
 exampleSrc:"A: Authoritarianism destroys freedom of expression.\nB: It is incompatible with democracy.",
 funFact:"Spain transitioned from authoritarianism to democracy in 1978 during 'La Transición'."},

{type:"teach",trg:"el comunismo",src:"the communism",pos:"noun",gender:"m",
 note:"Masculine noun. Political ideology based on collective ownership.",
 example:"A: ¿Qué papel tuvo el comunismo en España?\nB: El Partido Comunista fue clave contra el franquismo.",
 exampleSrc:"A: What role did communism play in Spain?\nB: The Communist Party was key against Francoism.",
 funFact:"The PCE was legalized in 1977, a pivotal moment in Spain's democratic transition."},

{type:"teach",trg:"el caudillo",src:"the strongman / leader",pos:"noun",gender:"m",
 note:"Masculine noun. A military or political leader, often authoritarian.",
 example:"A: El caudillo concentró todo el poder en sus manos.\nB: Fue una época muy oscura del país.",
 exampleSrc:"A: The strongman concentrated all power in his hands.\nB: It was a very dark era for the country.",
 funFact:"Franco adopted the title 'El Caudillo'. The word comes from Latin capitellum (little head)."},

{type:"teach",trg:"el clero",src:"the clergy",pos:"noun",gender:"m",
 note:"Masculine noun. The body of religious leaders.",
 example:"A: El clero tenía mucha influencia en la sociedad.\nB: Especialmente en la educación.",
 exampleSrc:"A: The clergy had a lot of influence in society.\nB: Especially in education.",
 funFact:"From Greek kleros (lot). In medieval Spain, the clergy was one of the three 'estates'."},

{type:"fb",s:"La {1} del poder es un tema polémico en España.",a:["centralización"],opts:["centralización","ciudadanía","aspiración","aprobación"],hint:"The process of concentrating control in one central place.",sSrc:"The {1} of power is a controversial topic in Spain."},

{type:"mc",q:"¿Qué es el clero?",opts:["El conjunto de religiosos","Un tipo de gobierno","Una asamblea política","Un edificio público"],ans:"El conjunto de religiosos",hint:"Think about priests, bishops, and other religious figures."},

{type:"match",pairs:[{trg:"ciudadano",src:"citizen"},{trg:"consenso",src:"consensus"},{trg:"asamblea",src:"assembly"},{trg:"censo",src:"census"},{trg:"clero",src:"clergy"}]},

{type:"fb",s:"Los {1} compitieron durante tres semanas en televisión.",a:["concursantes"],opts:["concursantes","aspirantes","ciudadanos","caudillos"],hint:"People who take part in a TV competition show.",sSrc:"The {1} competed for three weeks on television."},

{type:"mc",q:"¿Qué necesitas para votar en España?",opts:["Estar inscrito en el censo electoral","Ser miembro del clero","Tener una acreditación universitaria","Pertenecer a una asamblea"],ans:"Estar inscrito en el censo electoral",hint:"You must be officially registered in the population count."}
]};

export default LESSON_1;
