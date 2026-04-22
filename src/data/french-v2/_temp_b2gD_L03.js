// French B2 Gap Batch D Lesson 3. Politics and Democracy
const LESSON_3 = {id:"frv2_b2gD_l3", title:"Politique et démocratie", icon:"🗳️", xp:15, board:true, steps:[
  {type:"intro", title:"Politique et démocratie",
   desc:"Expand your political vocabulary to discuss democracy, governance, and social movements in French.",
   goals:["Learn 10 political and governance terms","Discuss democratic processes and institutions","Express opinions on social movements"]},

  {type:"teach", trg:"la démocratisation", src:"the democratization", pos:"noun", gender:"f",
   note:"The process of becoming more democratic.\nApplied to countries, institutions, or access.",
   example:"A: La démocratisation de l'enseignement a transformé la société.\nB: Avant, seuls les riches pouvaient étudier.\nA: Maintenant l'université est accessible à tous.\nB: C'est un progrès fondamental.",
   exampleSrc:"A: The democratization of education transformed society.\nB: Before, only the wealthy could study.\nA: Now university is accessible to everyone.\nB: It's a fundamental advancement.",
   funFact:"The -isation suffix creates feminine nouns from verbs. France's grandes ecoles remain elite despite democratization."},

  {type:"teach", trg:"le précurseur", src:"the precursor / forerunner", pos:"noun", gender:"m",
   note:"Someone or something that comes before and influences what follows.\nAlso used as an adjective.",
   example:"A: Olympe de Gouges fut une précurseur du féminisme.\nB: Elle a écrit la Déclaration des droits de la femme?\nA: Exactement, en 1791.\nB: Bien avant le mouvement suffragiste.",
   exampleSrc:"A: Olympe de Gouges was a precursor of feminism.\nB: She wrote the Declaration of the Rights of Woman?\nA: Exactly, in 1791.\nB: Well before the suffragist movement.",
   funFact:"From Latin 'praecursor' (one who runs ahead). The same root gives 'courir' (to run)."},

  {type:"teach", trg:"la préconisation", src:"the recommendation", pos:"noun", gender:"f",
   note:"A formal suggestion or advice, often from an authority.\nMore official than 'conseil'.",
   example:"A: Les préconisations du rapport sont claires.\nB: Réduire les émissions de trente pour cent?\nA: Oui, d'ici 2035.\nB: C'est ambitieux mais nécessaire.",
   exampleSrc:"A: The report's recommendations are clear.\nB: Reduce emissions by thirty percent?\nA: Yes, by 2035.\nB: It's ambitious but necessary.",
   funFact:"From 'préconiser' (to recommend/advocate). Formal register, used in reports, policy documents, and expert opinions."},

  {type:"teach", trg:"le pamphlétaire", src:"the pamphleteer", pos:"noun", gender:"m",
   note:"A writer of political pamphlets or satirical texts.\nHistorical and literary term.",
   example:"A: Voltaire était un grand pamphlétaire.\nB: Ses textes ont influencé la Révolution.\nA: L'art de la polémique était son arme.\nB: La plume plus forte que l'épée.",
   exampleSrc:"A: Voltaire was a great pamphleteer.\nB: His texts influenced the Revolution.\nA: The art of polemic was his weapon.\nB: The pen mightier than the sword.",
   funFact:"From English 'pamphlet', itself from a 12th-century Latin love poem 'Pamphilus'. The irony is delicious."},

  {type:"mc",
   q:"Qu'est-ce qu'un précurseur?",
   opts:["Quelqu'un qui ouvre la voie avant les autres","Un homme politique au pouvoir","Un critique littéraire","Un journaliste d'investigation"],
   ans:"Quelqu'un qui ouvre la voie avant les autres",
   hint:"The Latin root means 'one who runs ahead', preparing the path for others."},

  {type:"teach", trg:"la pondération", src:"the moderation / weighting", pos:"noun", gender:"f",
   note:"Balance and restraint in judgment. Also: statistical weighting.\nFrom 'pondérer' (to weigh/balance).",
   example:"A: Sa pondération est admirable dans ce débat.\nB: Il ne cède jamais à l'émotion.\nA: C'est rare en politique.\nB: Oui, la plupart préfèrent la provocation.",
   exampleSrc:"A: His moderation is admirable in this debate.\nB: He never gives in to emotion.\nA: That's rare in politics.\nB: Yes, most prefer provocation.",
   funFact:"From Latin 'ponderare' (to weigh). The same root gives 'pondéral' (relating to weight) and English 'ponder'."},

  {type:"teach", trg:"la persévérance", src:"the perseverance", pos:"noun", gender:"f",
   note:"Persistent effort despite difficulty.\nA core virtue in French education and politics.",
   example:"A: Sa persévérance a fini par payer.\nB: Combien de fois a-t-elle échoué?\nA: Cinq fois avant de réussir.\nB: C'est une leçon pour nous tous.",
   exampleSrc:"A: Her perseverance finally paid off.\nB: How many times did she fail?\nA: Five times before succeeding.\nB: It's a lesson for all of us.",
   funFact:"From Latin 'perseverantia'. The French education system values 'la persévérance scolaire' as an official goal."},

  {type:"teach", trg:"la perspicacité", src:"the insight / perceptiveness", pos:"noun", gender:"f",
   note:"The ability to understand things quickly and deeply.\nA quality valued in leaders and analysts.",
   example:"A: Sa perspicacité politique est remarquable.\nB: Elle anticipe toujours les crises.\nA: Comment fait-elle?\nB: Elle écoute plus qu'elle ne parle.",
   exampleSrc:"A: Her political insight is remarkable.\nB: She always anticipates crises.\nA: How does she do it?\nB: She listens more than she speaks.",
   funFact:"From Latin 'perspicax' (sharp-sighted). Shares the root 'spic-/spec-' (to look) with 'spectacle' and 'inspirer'."},

  {type:"fb",
   s:"La {1} de l'accès à Internet a transformé les sociétés modernes.",
   a:["démocratisation"],
   opts:["démocratisation","pondération","persévérance","préconisation"],
   hint:"This noun describes the process of making something available to everyone, not just the elite.",
   sSrc:"The {1} of Internet access has transformed modern societies."},

  {type:"teach", trg:"prédominant", src:"predominant", pos:"adj", gender:null,
   note:"Most common, most influential, or most powerful.\nFeminine: prédominante.",
   example:"A: L'anglais est la langue prédominante dans les affaires.\nB: Mais le français reste important en diplomatie.\nA: Chaque langue a son domaine.\nB: La diversité linguistique est une richesse.",
   exampleSrc:"A: English is the predominant language in business.\nB: But French remains important in diplomacy.\nA: Each language has its domain.\nB: Linguistic diversity is a treasure.",
   funFact:"From 'pré-' (before) + 'dominant' (dominating). In French politics, 'parti prédominant' describes the ruling party."},

  {type:"teach", trg:"prospère", src:"prosperous / thriving", pos:"adj", gender:null,
   note:"Economically successful or flourishing.\nSame form for masculine and feminine.",
   example:"A: Cette région est devenue très prospère.\nB: Grace à l'industrie touristique?\nA: Oui, et aussi à l'agriculture biologique.\nB: Un modèle de développement durable.",
   exampleSrc:"A: This region has become very prosperous.\nB: Thanks to the tourism industry?\nA: Yes, and also organic agriculture.\nB: A model of sustainable development.",
   funFact:"From Latin 'prosperus' (favorable). The verb 'prospérer' keeps the accent: il prospère."},

  {type:"mc",
   q:"Quelle qualité permet de comprendre rapidement les situations complexes?",
   opts:["La démocratisation","La perspicacité","La persévérance","La pondération"],
   ans:"La perspicacité",
   hint:"This quality relates to sharp-sightedness and quick understanding, from the Latin for 'to see clearly'."},

  {type:"match", pairs:[
    {trg:"démocratisation", src:"democratization"},
    {trg:"précurseur", src:"precursor"},
    {trg:"pondération", src:"moderation"},
    {trg:"perspicacité", src:"insight"},
    {trg:"prospère", src:"prosperous"}
  ]},

  {type:"fb",
   s:"Les {1} du comité d'experts seront publiées demain.",
   a:["préconisations"],
   opts:["préconisations","pondérations","perspicacités","démocratisations"],
   hint:"These are the formal recommendations issued by an expert panel or authority.",
   sSrc:"The committee of experts' {1} will be published tomorrow."}
]};
export default LESSON_3;
