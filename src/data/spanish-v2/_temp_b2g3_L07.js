// Spanish B2 Gap Batch 3 - Lesson 7: Politics & Government
// 15 teach cards + quizzes, max 30 steps

const LESSON_7 = {id:"esv2_b2g3_l7", title:"Política y gobierno", icon:"🏛️", xp:15, board:true, steps:[
  {type:"intro", title:"Política y gobierno", desc:"Master essential political vocabulary for understanding and discussing government, democracy, and political systems in Spanish.", goals:["Learn 15 political terms","Discuss governance and democracy","Express political opinions"]},

  {type:"teach", trg:"el decreto", src:"the decree", pos:"noun", gender:"m", note:"An official order from a government or authority.\nReal decreto = royal decree (in Spain).", example:"A: El gobierno ha aprobado un nuevo decreto.\nB: ¿Sobre qué tema? ¿Ya está en vigor?", exampleSrc:"A: The government has approved a new decree.\nB: About what topic? Is it already in force?", funFact:"In Spain, a real decreto is signed by the King but drafted by the government. The monarchy's role is ceremonial."},

  {type:"teach", trg:"la centralización", src:"centralization", pos:"noun", gender:"f", note:"Concentrating control in a central authority.\nOpposite: descentralización.", example:"A: La centralización del poder preocupa a las regiones.\nB: Prefieren tener más autonomía local.", exampleSrc:"A: The centralization of power worries the regions.\nB: They prefer to have more local autonomy.", funFact:"Spain's autonomous communities system was created after Franco's centralizing dictatorship to give regions more self-governance."},

  {type:"teach", trg:"descentralizar", src:"to decentralize", pos:"verb", gender:null, note:"Des- (reversal) + centralizar.\nTo distribute power away from a central authority.", example:"A: El objetivo es descentralizar la administración pública.\nB: Así los ciudadanos tendrán servicios más cercanos.", exampleSrc:"A: The goal is to decentralize public administration.\nB: That way citizens will have closer services.", funFact:"Spain is one of the most decentralized countries in Europe. Each comunidad autónoma has its own parliament and powers."},

  {type:"teach", trg:"demócrata", src:"democrat / democratic person", pos:"adj", gender:null, note:"Both adjective and noun. Same form for m/f.\nUn líder demócrata = a democratic leader.", example:"A: Se considera un demócrata convencido.\nB: Siempre defiende la libertad de expresión.", exampleSrc:"A: He considers himself a convinced democrat.\nB: He always defends freedom of expression.", funFact:"From Greek demos (people) + kratos (power). Spain's transition to democracy (1975-1982) is called La Transición."},

  {type:"teach", trg:"la demagogia", src:"demagoguery / populism", pos:"noun", gender:"f", note:"Using emotional appeals instead of rational argument.\nDemagogo = demagogue.", example:"A: Ese discurso es pura demagogia.\nB: Promete cosas que sabe que no puede cumplir.", exampleSrc:"A: That speech is pure demagoguery.\nB: He promises things he knows he can't deliver.", funFact:"From Greek demagogos (leader of the people). The word has been negative since ancient Athens, over 2,400 years."},

  {type:"teach", trg:"el caudillo", src:"the strongman / military leader", pos:"noun", gender:"m", note:"A charismatic military or political leader.\nHistorically loaded term in Spanish.", example:"A: Muchos países latinoamericanos tuvieron caudillos en el siglo diecinueve.\nB: Eran líderes autoritarios con mucho poder personal.", exampleSrc:"A: Many Latin American countries had caudillos in the nineteenth century.\nB: They were authoritarian leaders with a lot of personal power.", funFact:"Franco used the title 'El Caudillo'. The word itself comes from Latin capitellum (little head), same root as captain."},

  {type:"mc", q:"¿Qué es un decreto?", opts:["Una orden oficial del gobierno","Una petición ciudadana","Un debate parlamentario","Una elección popular"], ans:"Una orden oficial del gobierno", hint:"An official order issued by governmental authority, not voted on by citizens."},

  {type:"teach", trg:"la descentralización", src:"decentralization", pos:"noun", gender:"f", note:"The process of distributing power from a central authority.\nNoun form of descentralizar.", example:"A: La descentralización ha sido clave en la democracia española.\nB: Las comunidades autónomas gestionan educación y sanidad.", exampleSrc:"A: Decentralization has been key in Spanish democracy.\nB: The autonomous communities manage education and healthcare.", funFact:"Spain's 17 autonomous communities each have different levels of self-governance. Catalonia and the Basque Country have the most."},

  {type:"teach", trg:"la congregación", src:"the congregation / assembly", pos:"noun", gender:"f", note:"A gathering of people, especially religious.\nAlso: a religious order or community.", example:"A: La congregación se reunió en la iglesia a las diez.\nB: Era el aniversario de la parroquia.", exampleSrc:"A: The congregation gathered at the church at ten.\nB: It was the parish anniversary.", funFact:"Religious congregaciones played a major role in Spanish colonial history, establishing missions across the Americas."},

  {type:"teach", trg:"el comunismo", src:"communism", pos:"noun", gender:"m", note:"The political ideology of common ownership.\nComunista = communist (adj/noun).", example:"A: El comunismo tuvo mucha influencia en la Guerra Civil.\nB: Sí, fue una de las ideologías en conflicto.", exampleSrc:"A: Communism had a lot of influence in the Civil War.\nB: Yes, it was one of the ideologies in conflict.", funFact:"The Spanish Communist Party (PCE) was legalized in 1977 during La Transición, a pivotal moment for Spanish democracy."},

  {type:"fb", s:"La {1} del poder permite que las regiones tomen sus propias decisiones.", a:["descentralización"], opts:["descentralización","centralización","demagogia","congregación"], hint:"The process of distributing authority from a central government to regional bodies.", sSrc:"The {1} of power allows regions to make their own decisions."},

  {type:"teach", trg:"el dogma", src:"the dogma", pos:"noun", gender:"m", note:"A principle held as absolute truth, often without proof.\nDogmático = dogmatic.", example:"A: No deberíamos aceptar ningún dogma sin cuestionarlo.\nB: El pensamiento crítico es fundamental.", exampleSrc:"A: We shouldn't accept any dogma without questioning it.\nB: Critical thinking is fundamental.", funFact:"From Greek dokein (to seem good). Originally meant 'official teaching', now often carries a negative connotation of rigidity."},

  {type:"teach", trg:"dogmático", src:"dogmatic", pos:"adj", gender:null, note:"Rigid in beliefs, unwilling to consider other views.\nPuede ser muy dogmático = he can be very dogmatic.", example:"A: Su postura es demasiado dogmática.\nB: No acepta ninguna opinión diferente a la suya.", exampleSrc:"A: His stance is too dogmatic.\nB: He doesn't accept any opinion different from his own.", funFact:"Dogmático can describe political, religious, or even everyday rigidity. It always implies closed-mindedness."},

  {type:"mc", q:"La demagogia consiste en...", opts:["escribir decretos oficiales","usar emociones en vez de argumentos racionales","respetar todas las opiniones","descentralizar el poder"], ans:"usar emociones en vez de argumentos racionales", hint:"This political tactic manipulates feelings rather than presenting logical reasoning."},

  {type:"teach", trg:"dimitir", src:"to resign (from office)", pos:"verb", gender:null, note:"To step down from a political or professional position.\nDimisión = resignation.", example:"A: El ministro ha decidido dimitir.\nB: Era de esperar después del escándalo.", exampleSrc:"A: The minister has decided to resign.\nB: It was to be expected after the scandal.", funFact:"Dimitir is intransitive in Spanish: you dimitir (resign), you don't dimitir un puesto. The position drops the person."},

  {type:"match", pairs:[{trg:"decreto", src:"decree"},{trg:"demagogia", src:"demagoguery"},{trg:"caudillo", src:"strongman"},{trg:"dogmático", src:"dogmatic"},{trg:"dimitir", src:"to resign"}]},

  {type:"fb", s:"El presidente del partido ha decidido {1} tras perder las elecciones.", a:["dimitir"], opts:["dimitir","decretar","descentralizar","discriminar"], hint:"To voluntarily step down from a position of power after a defeat.", sSrc:"The party president has decided to {1} after losing the elections."},

  {type:"mc", q:"¿Qué término describe a un líder militar autoritario en Latinoamérica?", opts:["El congregante","El comunista","El caudillo","El demócrata"], ans:"El caudillo", hint:"This historically loaded term describes a charismatic strongman with personal power."},

  {type:"fb", s:"No seas tan {1}; hay que escuchar otros puntos de vista.", a:["dogmático"], opts:["dogmático","demócrata","descentralizado","comunista"], hint:"Someone who is rigid in their beliefs and refuses to consider alternatives.", sSrc:"Don't be so {1}; you have to listen to other points of view."}
]};

export default LESSON_7;
