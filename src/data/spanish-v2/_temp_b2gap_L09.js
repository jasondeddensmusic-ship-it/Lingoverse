// B2 Gap Lesson 09 - Politics & Governance
const LESSON_9 = {id:"esv2_b2gap_l9",title:"Política y gobierno",icon:"🏛️",xp:15,board:true,steps:[
{type:"intro",title:"Política y gobierno",desc:"Navigate the vocabulary of political systems, governance, and institutional structures.",goals:["Learn 20 political and governance terms","Discuss government and institutions","Use formal register for politics"]},

{type:"teach",trg:"la adhesión",src:"the adhesion / accession",pos:"noun",gender:"f",
 note:"Feminine noun. The act of joining or supporting something.",
 example:"A: La adhesión de España a la UE fue en 1986.\nB: Cambió completamente la economía del país.",
 exampleSrc:"A: Spain's accession to the EU was in 1986.\nB: It completely changed the country's economy.",
 funFact:"Spain's EU 'adhesión' is celebrated as a milestone of democratic consolidation."},

{type:"teach",trg:"la admisión",src:"the admission",pos:"noun",gender:"f",
 note:"Feminine noun. Being accepted into a group or institution.",
 example:"A: El proceso de admisión es muy competitivo.\nB: Solo aceptan al diez por ciento.",
 exampleSrc:"A: The admission process is very competitive.\nB: They only accept ten percent.",
 funFact:"From Latin admissio. 'Admisión a trámite' is a legal term meaning a case is accepted for review."},

{type:"teach",trg:"la afiliación",src:"the affiliation / membership",pos:"noun",gender:"f",
 note:"Feminine noun. Membership in a party or organization.",
 example:"A: La afiliación al partido ha crecido este año.\nB: Los jóvenes se están involucrando más.",
 exampleSrc:"A: Party membership has grown this year.\nB: Young people are getting more involved.",
 funFact:"Spanish political parties report their 'afiliación' numbers, which are often debated publicly."},

{type:"teach",trg:"antidemocrático",src:"anti-democratic",pos:"adj",gender:null,
 note:"Adjective. Against democratic principles.\nFeminine: antidemocrática.",
 example:"A: Esas medidas son claramente antidemocráticas.\nB: Van contra los derechos fundamentales.",
 exampleSrc:"A: Those measures are clearly anti-democratic.\nB: They go against fundamental rights.",
 funFact:"Spain's constitution of 1978 specifically guards against antidemocratic movements."},

{type:"teach",trg:"aprobatorio",src:"approving",pos:"adj",gender:null,
 note:"Adjective. Expressing approval.\nFeminine: aprobatoria.",
 example:"A: El informe fue aprobatorio en todos los aspectos.\nB: Podemos seguir adelante con el proyecto.",
 exampleSrc:"A: The report was approving in all aspects.\nB: We can proceed with the project.",
 funFact:"From aprobar (to approve). Opposite: 'desaprobatorio' (disapproving)."},

{type:"mc",q:"La entrada de España en la UE se llama:",opts:["la admisión","la adhesión","la afiliación","la abstención"],ans:"la adhesión",hint:"Countries join the EU through a process of formal accession."},

{type:"teach",trg:"autonómico",src:"autonomic / regional",pos:"adj",gender:null,
 note:"Adjective. Related to autonomous regions.\nFeminine: autonómica.",
 example:"A: Las elecciones autonómicas son en mayo.\nB: Cada comunidad elige su propio gobierno.",
 exampleSrc:"A: The regional elections are in May.\nB: Each community elects its own government.",
 funFact:"Spain has 17 comunidades autónomas, each with its own parliament and 'gobierno autonómico'."},

{type:"teach",trg:"burocrático",src:"bureaucratic",pos:"adj",gender:null,
 note:"Adjective. Related to excessive administration.\nFeminine: burocrática.",
 example:"A: El proceso es demasiado burocrático.\nB: Hay que simplificar los trámites.",
 exampleSrc:"A: The process is too bureaucratic.\nB: We need to simplify the procedures.",
 funFact:"From French bureaucratique. 'Burocracia' is often used negatively in Spanish public discourse."},

{type:"teach",trg:"el burócrata",src:"the bureaucrat",pos:"noun",gender:"m",
 note:"Common gender noun. La burócrata for feminine.\nOften used pejoratively.",
 example:"A: Los burócratas frenan la innovación.\nB: Hay demasiados trámites para todo.",
 exampleSrc:"A: Bureaucrats slow down innovation.\nB: There are too many procedures for everything.",
 funFact:"Spain has been working to reduce bureaucracy with digital administration since 2007."},

{type:"teach",trg:"la congregación",src:"the congregation",pos:"noun",gender:"f",
 note:"Feminine noun. A gathering of people, especially religious.",
 example:"A: La congregación se reunió en la iglesia a las diez.\nB: Había más de doscientas personas.",
 exampleSrc:"A: The congregation gathered at the church at ten.\nB: There were over two hundred people.",
 funFact:"From Latin congregatio (flock together). Also used for Vatican congregations (departments)."},

{type:"fb",s:"Las elecciones {1} se celebran cada cuatro años.",a:["autonómicas"],opts:["autonómicas","antidemocráticas","burocráticas","aprobatorias"],hint:"Elections for regional self-governing communities.",sSrc:"The {1} elections are held every four years."},

{type:"teach",trg:"congregar",src:"to congregate / to bring together",pos:"verb",gender:null,
 note:"Regular -ar verb with g>gu before e.\nCongrego, congregas...",
 example:"A: La manifestación congregó a miles de personas.\nB: Fue una demostración de fuerza pacífica.",
 exampleSrc:"A: The demonstration brought together thousands of people.\nB: It was a show of peaceful strength.",
 funFact:"Reflexive 'congregarse' emphasizes people gathering voluntarily."},

{type:"teach",trg:"conllevar",src:"to entail / to involve",pos:"verb",gender:null,
 note:"Regular -ar verb. To carry with it, to imply consequences.",
 example:"A: El puesto conlleva mucha responsabilidad.\nB: Pero también tiene buenas ventajas.",
 exampleSrc:"A: The position entails a lot of responsibility.\nB: But it also has good benefits.",
 funFact:"Con- (with) + llevar (to carry). To carry something along with, hence 'to entail'."},

{type:"teach",trg:"conformar",src:"to form / to make up",pos:"verb",gender:null,
 note:"Regular -ar verb. To constitute or compose.\nReflexive: conformarse (to settle for).",
 example:"A: Veinte países conforman la organización.\nB: Y esperan que se unan más pronto.",
 exampleSrc:"A: Twenty countries make up the organization.\nB: And they expect more to join soon.",
 funFact:"Reflexive 'conformarse con' means to be content with, to settle for less."},

{type:"teach",trg:"conforme",src:"in agreement / as",pos:"conj",gender:null,
 note:"Conjunction and adjective. As/according to, or satisfied.",
 example:"A: Conforme avanzaba el debate, la tensión crecía.\nB: Al final, no llegaron a un acuerdo.",
 exampleSrc:"A: As the debate progressed, tension grew.\nB: In the end, they did not reach an agreement.",
 funFact:"Very versatile: 'conforme a la ley' (according to the law), 'estoy conforme' (I agree)."},

{type:"mc",q:"Un proceso con demasiado papeleo es:",opts:["autonómico","burocrático","aprobatorio","antidemocrático"],ans:"burocrático",hint:"Think about excessive red tape and administrative procedures."},

{type:"teach",trg:"la consistencia",src:"the consistency",pos:"noun",gender:"f",
 note:"Feminine noun. Firmness or coherence over time.",
 example:"A: La consistencia en el trabajo da resultados.\nB: Es mejor ser constante que brillante a ratos.",
 exampleSrc:"A: Consistency at work gives results.\nB: It is better to be steady than brilliant occasionally.",
 funFact:"Also means physical consistency: 'la consistencia de la masa' (the consistency of the dough)."},

{type:"teach",trg:"la consolidación",src:"the consolidation",pos:"noun",gender:"f",
 note:"Feminine noun. Making something stronger or more stable.",
 example:"A: La consolidación de la democracia llevó décadas.\nB: Fue un proceso largo pero necesario.",
 exampleSrc:"A: The consolidation of democracy took decades.\nB: It was a long but necessary process.",
 funFact:"Spain's democratic 'consolidación' is studied worldwide as a model transition from dictatorship."},

{type:"teach",trg:"colaborativo",src:"collaborative",pos:"adj",gender:null,
 note:"Adjective. Done together as a team.\nFeminine: colaborativa.",
 example:"A: El proyecto es colaborativo entre cinco universidades.\nB: Cada una aporta su especialidad.",
 exampleSrc:"A: The project is collaborative between five universities.\nB: Each one contributes its specialty.",
 funFact:"'Economía colaborativa' (sharing economy) is a hot topic in Spanish economic policy debates."},

{type:"teach",trg:"colateral",src:"collateral",pos:"adj",gender:null,
 note:"Adjective. Side effect or secondary consequence. Invariable.",
 example:"A: Los daños colaterales fueron enormes.\nB: Afectaron a miles de civiles inocentes.",
 exampleSrc:"A: The collateral damage was enormous.\nB: It affected thousands of innocent civilians.",
 funFact:"From Latin collateralis (side by side). 'Efecto colateral' is widely used in medicine and politics."},

{type:"teach",trg:"la abstención",src:"the abstention",pos:"noun",gender:"f",
 note:"Feminine noun. Not voting or not participating.",
 example:"A: La abstención en las elecciones fue del treinta por ciento.\nB: Es un dato preocupante.",
 exampleSrc:"A: Abstention in the elections was thirty percent.\nB: It is a worrying figure.",
 funFact:"Spain does not have compulsory voting. Abstention rates vary from 20% to 40% depending on elections."},

{type:"fb",s:"El puesto de director {1} mucha responsabilidad.",a:["conlleva"],opts:["conlleva","congrega","conforma","consolida"],hint:"To carry with it, to involve as a consequence.",sSrc:"The director position {1} a lot of responsibility."},

{type:"mc",q:"Cuando veinte países componen una organización, la:",opts:["conllevan","congregan","conforman","consolidan"],ans:"conforman",hint:"These countries 'make up' or constitute the organization."},

{type:"match",pairs:[{trg:"adhesión",src:"accession"},{trg:"afiliación",src:"membership"},{trg:"abstención",src:"abstention"},{trg:"consolidación",src:"consolidation"},{trg:"burócrata",src:"bureaucrat"}]},

{type:"fb",s:"La manifestación {1} a más de diez mil personas.",a:["congregó"],opts:["congregó","conllevó","conformó","consolidó"],hint:"To bring a large group of people together in one place.",sSrc:"The demonstration {1} more than ten thousand people."},

{type:"mc",q:"¿Qué significa 'conformarse con algo'?",opts:["Aceptarlo sin quejas","Rechazarlo","Cambiarlo","Destruirlo"],ans:"Aceptarlo sin quejas",hint:"To settle for something, to be content with what you have."}
]};

export default LESSON_9;
