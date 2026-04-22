// B2 Gap Batch 4 Lesson 06 - Work & Professions
const LESSON_6 = {id:"esv2_b2g4_l6",title:"Trabajo y profesiones",icon:"👔",xp:15,board:true,steps:[
{type:"intro",title:"Trabajo y profesiones",desc:"Build vocabulary for discussing careers, workplace roles, and professional development.",goals:["Learn 15 work and profession words","Discuss job roles and training","Describe workplace situations"]},

{type:"teach",trg:"el entrenador",src:"the coach / trainer",pos:"noun",gender:"m",
 note:"Masculine noun. Someone who trains others.\nFeminine: la entrenadora.",
 example:"A: El entrenador preparó un plan de entrenamiento intensivo.\nB: El equipo necesita mejorar su resistencia.",
 exampleSrc:"A: The coach prepared an intensive training plan.\nB: The team needs to improve its endurance.",
 funFact:"In Spain, football coaches are 'entrenadores'. 'Mister' is slang borrowed from English."},

{type:"teach",trg:"el entrevistador",src:"the interviewer",pos:"noun",gender:"m",
 note:"Masculine noun. The person who conducts interviews.\nFeminine: la entrevistadora.",
 example:"A: El entrevistador me hizo preguntas muy difíciles.\nB: ¿Sobre qué temas te preguntó?",
 exampleSrc:"A: The interviewer asked me very difficult questions.\nB: What topics did he ask you about?",
 funFact:"From entrevistar (to interview). Spanish job interviews often include a 'dinámica de grupo'."},

{type:"teach",trg:"el diseñador",src:"the designer",pos:"noun",gender:"m",
 note:"Masculine noun. Someone who creates designs.\nFeminine: la diseñadora.",
 example:"A: El diseñador presentó tres propuestas para el logotipo.\nB: Me gusta más la segunda opción.",
 exampleSrc:"A: The designer presented three proposals for the logo.\nB: I like the second option best.",
 funFact:"Spain has world-famous designers like Balenciaga and Manolo Blahnik in fashion."},

{type:"teach",trg:"el adulto",src:"the adult",pos:"noun",gender:"m",
 note:"Masculine noun. A fully grown person.\nFeminine: la adulta. Also used as adjective.",
 example:"A: Este curso está diseñado para adultos.\nB: ¿Hay clases en horario de tarde?",
 exampleSrc:"A: This course is designed for adults.\nB: Are there classes in the afternoon?",
 funFact:"'Educación para adultos' is a major government program in Spain for lifelong learning."},

{type:"teach",trg:"el escribano",src:"the notary / scribe",pos:"noun",gender:"m",
 note:"Masculine noun. Historical: a public scribe or notary.\nFeminine: la escribana.",
 example:"A: Los escribanos registraban todos los documentos oficiales.\nB: Eran figuras clave en la administración colonial.",
 exampleSrc:"A: The scribes recorded all official documents.\nB: They were key figures in colonial administration.",
 funFact:"In Argentina and Uruguay, 'escribano' is still the standard term for a notary public."},

{type:"mc",q:"¿Quién es el entrevistador?",opts:["La persona que hace las preguntas","La persona que busca empleo","El jefe de la empresa","El candidato seleccionado"],ans:"La persona que hace las preguntas",hint:"Think about who conducts the interview and asks the questions."},

{type:"teach",trg:"la expatriación",src:"the expatriation",pos:"noun",gender:"f",
 note:"Feminine noun. Living abroad, away from one's country.\nVerb: expatriarse.",
 example:"A: La expatriación puede ser una experiencia enriquecedora.\nB: Pero también implica muchos sacrificios.",
 exampleSrc:"A: Expatriation can be an enriching experience.\nB: But it also involves many sacrifices.",
 funFact:"After the 2008 crisis, Spain saw a wave of 'expatriación' of young professionals to Northern Europe."},

{type:"teach",trg:"extracomunitario",src:"non-EU / from outside the EU",pos:"adj",gender:null,
 note:"Adjective. From outside the European Union.\nFeminine: extracomunitaria.",
 example:"A: Los trabajadores extracomunitarios necesitan un permiso de trabajo.\nB: El proceso puede tardar varios meses.",
 exampleSrc:"A: Non-EU workers need a work permit.\nB: The process can take several months.",
 funFact:"Spain uses 'comunitario' for EU citizens and 'extracomunitario' for everyone else in immigration law."},

{type:"teach",trg:"esforzar",src:"to make an effort",pos:"verb",gender:null,
 note:"Stem-changing verb (o>ue). Almost always reflexive: esforzarse.\nNoun: el esfuerzo.",
 example:"A: Tienes que esforzarte más si quieres aprobar.\nB: Lo sé, voy a estudiar todos los días.",
 exampleSrc:"A: You have to make more effort if you want to pass.\nB: I know, I am going to study every day.",
 funFact:"'Esforzarse' is stem-changing: me esfuerzo, te esfuerzas. The 'o' becomes 'ue' when stressed."},

{type:"teach",trg:"espabilar",src:"to wake up / to get moving",pos:"verb",gender:null,
 note:"Regular -ar verb. To become alert or to hurry up.\nColloquial and common.",
 example:"A: ¡Espabila, que llegamos tarde!\nB: Ya voy, ya voy. Dame un minuto.",
 exampleSrc:"A: Get moving, we are going to be late!\nB: I am coming, I am coming. Give me a minute.",
 funFact:"Very colloquial. A mother telling her child 'espabila' is a quintessentially Spanish scene."},

{type:"fb",s:"El {1} del equipo de fútbol fue despedido tras los malos resultados.",a:["entrenador"],opts:["entrenador","entrevistador","diseñador","escribano"],hint:"The person responsible for training and coaching a sports team.",sSrc:"The team's {1} was fired after the poor results."},

{type:"teach",trg:"el estanco",src:"the tobacconist's shop",pos:"noun",gender:"m",
 note:"Masculine noun. A licensed shop selling tobacco and stamps.\nAlso sells public transport cards.",
 example:"A: Voy al estanco a comprar sellos.\nB: ¿Me traes también una tarjeta de metro?",
 exampleSrc:"A: I am going to the tobacconist's to buy stamps.\nB: Can you bring me a metro card too?",
 funFact:"Estancos are state-licensed monopolies dating back to the 18th century. Only they sell tobacco."},

{type:"teach",trg:"la actualización",src:"the update / updating",pos:"noun",gender:"f",
 note:"Feminine noun. Bringing something up to date.\nVerb: actualizar.",
 example:"A: La actualización del software tardará unos minutos.\nB: Mientras tanto, podemos tomar un café.",
 exampleSrc:"A: The software update will take a few minutes.\nB: Meanwhile, we can have a coffee.",
 funFact:"'Actualización profesional' means continuing education to keep your skills current."},

{type:"mc",q:"¿Qué es un estanco en España?",opts:["Una oficina de correos","Una tienda que vende tabaco y sellos","Un restaurante tradicional","Un banco pequeño"],ans:"Una tienda que vende tabaco y sellos",hint:"Think about the licensed shop where you buy tobacco, stamps, and metro cards."},

{type:"teach",trg:"el acondicionamiento",src:"the conditioning / fitting out",pos:"noun",gender:"m",
 note:"Masculine noun. Preparing or adapting something.\nCommon: acondicionamiento físico, aire acondicionado.",
 example:"A: El acondicionamiento del nuevo local costó mucho dinero.\nB: Pero ha quedado perfecto para la tienda.",
 exampleSrc:"A: The fitting out of the new premises cost a lot of money.\nB: But it turned out perfect for the shop.",
 funFact:"'Acondicionamiento físico' is the Spanish term for physical conditioning or fitness training."},

{type:"fb",s:"Los trabajadores {1} necesitan un visado especial.",a:["extracomunitarios"],opts:["extracomunitarios","entusiastas","enérgicos","erróneos"],hint:"People from countries that are not members of the European Union.",sSrc:"Non-EU {1} workers need a special visa."},

{type:"match",pairs:[{trg:"entrenador",src:"coach"},{trg:"diseñador",src:"designer"},{trg:"estanco",src:"tobacconist"},{trg:"expatriación",src:"expatriation"},{trg:"actualización",src:"update"}]},

{type:"mc",q:"¿Qué significa 'espabilar'?",opts:["Hablar en voz baja","Pensar con calma","Ponerse en marcha rápidamente","Quedarse dormido"],ans:"Ponerse en marcha rápidamente",hint:"What a parent says to a child who is moving too slowly in the morning."},

{type:"fb",s:"La {1} de los conocimientos es esencial en cualquier profesión.",a:["actualización"],opts:["actualización","expatriación","equivalencia","expropiación"],hint:"The process of bringing your skills and knowledge up to date.",sSrc:"The {1} of knowledge is essential in any profession."}
]};

export default LESSON_6;
