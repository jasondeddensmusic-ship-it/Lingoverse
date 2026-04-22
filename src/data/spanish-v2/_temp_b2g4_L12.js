// B2 Gap Batch 4 Lesson 12 - Social Issues & Society
const LESSON_12 = {id:"esv2_b2g4_l12",title:"Sociedad y desigualdad",icon:"⚖️",xp:15,board:true,steps:[
{type:"intro",title:"Sociedad y desigualdad",desc:"Build vocabulary to discuss social issues, inequality, and community dynamics at B2 level.",goals:["Learn 18 social and political terms","Discuss inequality and social change","Express opinions on complex societal topics"]},

{type:"teach",trg:"desahuciar",src:"to evict",pos:"verb",gender:null,
 note:"Irregular verb. To legally remove someone from their home.\nNoun: el desahucio (eviction).",
 example:"A: Van a desahuciar a la familia del tercer piso.\nB: Es terrible. Llevan ahí veinte años.",
 exampleSrc:"A: They are going to evict the family on the third floor.\nB: It is terrible. They have been there for twenty years.",
 funFact:"Spain's 2008 housing crisis led to a massive anti-eviction movement, the PAH, led by Ada Colau."},

{type:"teach",trg:"el desacuerdo",src:"the disagreement",pos:"noun",gender:"m",
 note:"Masculine noun. A difference of opinion.\nPrefix des- (dis-) + acuerdo (agreement).",
 example:"A: Hay un desacuerdo entre los partidos sobre la reforma.\nB: No creo que lleguen a un consenso pronto.",
 exampleSrc:"A: There is a disagreement between the parties about the reform.\nB: I do not think they will reach a consensus soon.",
 funFact:"In Spanish politics, 'desacuerdo' is softer than 'conflicto'. It implies a fixable difference."},

{type:"teach",trg:"el descontrol",src:"the lack of control / chaos",pos:"noun",gender:"m",
 note:"Masculine noun. A state of being out of control.\nPrefix des- (lack of) + control.",
 example:"A: El descontrol en la gestión del presupuesto es preocupante.\nB: Necesitamos una auditoría externa.",
 exampleSrc:"A: The lack of control in budget management is worrying.\nB: We need an external audit.",
 funFact:"'Descontrol' is very colloquial in Spain. Young people use it positively for wild parties."},

{type:"teach",trg:"el desperfecto",src:"the damage / defect",pos:"noun",gender:"m",
 note:"Masculine noun. Minor damage or a flaw.\nPlural: desperfectos. Common after storms or accidents.",
 example:"A: La tormenta causó desperfectos en varios edificios.\nB: Los bomberos están evaluando los daños.",
 exampleSrc:"A: The storm caused damage to several buildings.\nB: The firefighters are assessing the damage.",
 funFact:"Insurance companies in Spain use 'desperfectos' for minor damage, 'siniestro' for major claims."},

{type:"teach",trg:"encarcelar",src:"to imprison",pos:"verb",gender:null,
 note:"Regular -ar verb. To put someone in prison.\nFrom cárcel (prison).",
 example:"A: El juez decidió encarcelar al acusado sin fianza.\nB: La sentencia será en tres meses.",
 exampleSrc:"A: The judge decided to imprison the accused without bail.\nB: The sentencing will be in three months.",
 funFact:"Spain's prison system emphasizes rehabilitation. Inmates can get reduced sentences for good behavior."},

{type:"mc",q:"¿Qué significa 'desahuciar'?",opts:["Expulsar legalmente a alguien de su vivienda","Curar una enfermedad grave","Aprobar una nueva ley","Construir viviendas sociales"],ans:"Expulsar legalmente a alguien de su vivienda",hint:"Think about a landlord forcing a tenant to leave their home through legal means."},

{type:"teach",trg:"la encomienda",src:"the commission / colonial land grant",pos:"noun",gender:"f",
 note:"Feminine noun. A task entrusted or a historical colonial system.\nFrom encomendar (to entrust).",
 example:"A: La encomienda fue un sistema de explotación colonial.\nB: Los indígenas eran obligados a trabajar la tierra.",
 exampleSrc:"A: The encomienda was a system of colonial exploitation.\nB: The indigenous people were forced to work the land.",
 funFact:"The encomienda system granted Spanish colonists control over indigenous labor in the Americas."},

{type:"teach",trg:"el desajuste",src:"the imbalance / mismatch",pos:"noun",gender:"m",
 note:"Masculine noun. A lack of proper fit or balance.\nPrefix des- + ajuste (adjustment).",
 example:"A: Hay un desajuste entre la oferta y la demanda de vivienda.\nB: Por eso los precios siguen subiendo.",
 exampleSrc:"A: There is an imbalance between housing supply and demand.\nB: That is why prices keep going up.",
 funFact:"'Desajuste hormonal' (hormonal imbalance) is the most common medical use of this word in Spain."},

{type:"teach",trg:"deshumanizar",src:"to dehumanize",pos:"verb",gender:null,
 note:"Regular -ar verb. To remove human qualities.\nNoun: la deshumanización.",
 example:"A: Las redes sociales pueden deshumanizar el debate público.\nB: La gente olvida que hay personas detrás de las pantallas.",
 exampleSrc:"A: Social media can dehumanize public debate.\nB: People forget there are humans behind the screens.",
 funFact:"Philosophers in Spain often discuss 'deshumanización del arte', a concept coined by Ortega y Gasset."},

{type:"teach",trg:"entristecer",src:"to sadden",pos:"verb",gender:null,
 note:"Irregular -er verb. Stem change: entristezco.\nReflexive: entristecerse (to become sad).",
 example:"A: Me entristece ver tanta desigualdad en el mundo.\nB: A mí también, pero hay que ser optimista.",
 exampleSrc:"A: It saddens me to see so much inequality in the world.\nB: Me too, but we must be optimistic.",
 funFact:"Spanish has many emotion verbs with -ecer: entristecer, enloquecer, empobrecer, enriquecer."},

{type:"fb",s:"Van a {1} a las familias que no pueden pagar el alquiler.",a:["desahuciar"],opts:["desahuciar","encarcelar","deshumanizar","entristecer"],hint:"The legal act of forcing someone to leave their rented home.",sSrc:"They are going to {1} the families who cannot pay the rent."},

{type:"teach",trg:"la congregación",src:"the congregation / gathering",pos:"noun",gender:"f",
 note:"Feminine noun. A group assembled, often religious.\nFrom congregar (to gather).",
 example:"A: La congregación se reunió frente al ayuntamiento.\nB: Pedían mejoras en los servicios públicos.",
 exampleSrc:"A: The congregation gathered in front of the town hall.\nB: They were demanding improvements in public services.",
 funFact:"In Catholic Spain, 'congregación' typically refers to religious orders like the Congregation of the Mission."},

{type:"teach",trg:"el convencimiento",src:"the conviction / certainty",pos:"noun",gender:"m",
 note:"Masculine noun. A firm belief or persuasion.\nFrom convencer (to convince).",
 example:"A: Tengo el convencimiento de que las cosas van a mejorar.\nB: Ojalá tengas razón.",
 exampleSrc:"A: I have the conviction that things are going to improve.\nB: I hope you are right.",
 funFact:"'Convencimiento' implies inner certainty, while 'convicción' is used more in legal/political contexts."},

{type:"teach",trg:"el atraso",src:"the delay / backwardness",pos:"noun",gender:"m",
 note:"Masculine noun. Being behind schedule or less developed.\nPlural: atrasos (back payments).",
 example:"A: El atraso tecnológico de algunas zonas rurales es preocupante.\nB: Necesitan mejor conexión a internet.",
 exampleSrc:"A: The technological backwardness of some rural areas is worrying.\nB: They need better internet connection.",
 funFact:"'Cobrar atrasos' means to collect back pay. Very common in Spanish labor disputes."},

{type:"teach",trg:"la centralización",src:"the centralization",pos:"noun",gender:"f",
 note:"Feminine noun. Concentration of power in one place.\nOpposite: la descentralización.",
 example:"A: La centralización del gobierno en Madrid genera debate.\nB: Algunas regiones piden más autonomía.",
 exampleSrc:"A: The centralization of government in Madrid generates debate.\nB: Some regions demand more autonomy.",
 funFact:"Spain's 17 autonomous communities were created partly to counter centuries of centralización."},

{type:"mc",q:"Un 'desajuste' entre oferta y demanda significa:",opts:["Que no existen","Que no están equilibradas","Que funcionan perfectamente","Que son idénticas"],ans:"Que no están equilibradas",hint:"Think about two things that should match but do not fit together properly."},

{type:"teach",trg:"encuestar",src:"to survey / to poll",pos:"verb",gender:null,
 note:"Regular -ar verb. To conduct a survey or poll.\nNoun: la encuesta (survey).",
 example:"A: Van a encuestar a mil personas sobre las elecciones.\nB: Los resultados se publican el viernes.",
 exampleSrc:"A: They are going to survey a thousand people about the elections.\nB: The results will be published on Friday.",
 funFact:"In Spain, publishing polls is banned in the five days before elections: the 'jornada de reflexión'."},

{type:"teach",trg:"encumbrar",src:"to elevate / to raise to a high position",pos:"verb",gender:null,
 note:"Regular -ar verb. To place someone at the top.\nFrom cumbre (summit).",
 example:"A: Las redes sociales pueden encumbrar a alguien de la noche a la mañana.\nB: Y también destruirlo con la misma rapidez.",
 exampleSrc:"A: Social media can elevate someone overnight.\nB: And also destroy them just as quickly.",
 funFact:"From 'cumbre' (peak/summit). 'Encumbrar' literally means to place at the summit of fame or power."},

{type:"fb",s:"Van a {1} a dos mil ciudadanos sobre el transporte público.",a:["encuestar"],opts:["encuestar","encumbrar","encarcelar","entristecer"],hint:"To gather opinions from people using a structured questionnaire.",sSrc:"They are going to {1} two thousand citizens about public transport."},

{type:"match",pairs:[{trg:"desahuciar",src:"to evict"},{trg:"desacuerdo",src:"disagreement"},{trg:"atraso",src:"delay / backwardness"},{trg:"centralización",src:"centralization"},{trg:"convencimiento",src:"conviction"}]}
]};

export default LESSON_12;
