// French B2 Gap Lesson 5 — Education and Knowledge
const LESSON_5 = {id:"frv2_b2g5_l5", title:"Savoir et éducation", icon:"📚", xp:15, board:true, steps:[
  {type:"intro", title:"Savoir et éducation",
   desc:"Build vocabulary for discussing education, learning processes, and intellectual life at the B2 level.",
   goals:["Learn 15 key words about education and knowledge","Discuss academic and intellectual topics","Use abstract nouns related to learning"]},

  {type:"teach", trg:"l'alphabet", src:"the alphabet", pos:"noun", gender:"m",
   note:"The set of letters used to write a language.\nFrom the first two Greek letters: alpha, beta.",
   example:"A: L'alphabet français a vingt-six lettres.\nB: Comme l'alphabet anglais?\nA: Oui, mais avec des accents en plus.\nB: Les accents changent la prononciation.",
   exampleSrc:"A: The French alphabet has twenty-six letters.\nB: Like the English alphabet?\nA: Yes, but with additional accents.\nB: The accents change the pronunciation.",
   funFact:"From Greek 'alpha' + 'beta'. The French alphabet shares all 26 letters with English."},

  {type:"teach", trg:"la criminologie", src:"criminology", pos:"noun", gender:"f",
   note:"The scientific study of crime and criminal behavior.\nA university discipline.",
   example:"A: Tu étudies la criminologie?\nB: Oui, c'est passionnant.\nA: Qu'est-ce que tu apprends?\nB: Les causes du crime et les méthodes d'enquête.",
   exampleSrc:"A: Are you studying criminology?\nB: Yes, it's fascinating.\nA: What do you learn?\nB: The causes of crime and investigation methods.",
   funFact:"From Latin 'crimen' (crime) + Greek '-logia' (study). A relatively modern discipline, born in the 19th century."},

  {type:"teach", trg:"la déduction", src:"the deduction", pos:"noun", gender:"f",
   note:"Reasoning from general to specific. Also: a tax deduction.\nKey skill in logic and science.",
   example:"A: Par déduction, le suspect est le jardinier.\nB: Comment tu es arrivé à cette conclusion?\nA: J'ai éliminé toutes les autres possibilités.\nB: Très logique, comme Sherlock Holmes!",
   exampleSrc:"A: By deduction, the suspect is the gardener.\nB: How did you reach that conclusion?\nA: I eliminated all other possibilities.\nB: Very logical, like Sherlock Holmes!",
   funFact:"From Latin 'deductio' (leading away). The fiscal sense (tax deduction) came much later."},

  {type:"teach", trg:"l'hypothèse", src:"the hypothesis", pos:"noun", gender:"f",
   note:"A proposed explanation to be tested.\nFundamental to the scientific method.",
   example:"A: Notre hypothèse est que le climat influence le comportement.\nB: Comment allez-vous la vérifier?\nA: Par une série d'expériences contrôlées.\nB: Et si l'hypothèse est fausse?\nA: On en formule une nouvelle.",
   exampleSrc:"A: Our hypothesis is that climate influences behavior.\nB: How will you verify it?\nA: Through a series of controlled experiments.\nB: And if the hypothesis is wrong?\nA: We formulate a new one.",
   funFact:"From Greek 'hypothesis' (foundation, supposition). 'Hypothétique' (hypothetical) is the adjective."},

  {type:"teach", trg:"l'interaction", src:"the interaction", pos:"noun", gender:"f",
   note:"Mutual action or influence between two things or people.\nUsed in science, education, and social contexts.",
   example:"A: L'interaction entre professeur et élèves est essentielle.\nB: Oui, l'apprentissage n'est pas à sens unique.\nA: Les discussions en classe aident beaucoup.\nB: C'est ce qu'on appelle la pédagogie active.",
   exampleSrc:"A: The interaction between teacher and students is essential.\nB: Yes, learning is not one-way.\nA: Class discussions help a lot.\nB: That's what we call active pedagogy.",
   funFact:"From 'inter-' (between) + 'action'. The concept is central to modern teaching methods."},

  {type:"teach", trg:"approfondi", src:"in-depth / thorough", pos:"adj", gender:null,
   note:"Studied or examined deeply and thoroughly.\nFeminine form: approfondie.",
   example:"A: Cette étude est très approfondie.\nB: Les chercheurs ont travaillé pendant deux ans.\nA: Les résultats sont fiables?\nB: Oui, la méthodologie est solide.",
   exampleSrc:"A: This study is very in-depth.\nB: The researchers worked for two years.\nA: Are the results reliable?\nB: Yes, the methodology is solid.",
   funFact:"Past participle of 'approfondir' (to deepen). Literally: made deeper, more thorough."},

  {type:"teach", trg:"incomplet", src:"incomplete", pos:"adj", gender:null,
   note:"Not finished or missing parts.\nFeminine form: incomplète (with accent grave).",
   example:"A: Ce dossier est incomplet.\nB: Il manque quels documents?\nA: Le certificat médical et la photo.\nB: Je les apporte demain sans faute.",
   exampleSrc:"A: This file is incomplete.\nB: Which documents are missing?\nA: The medical certificate and the photo.\nB: I'll bring them tomorrow without fail.",
   funFact:"From 'in-' (not) + 'complet' (complete). Note the feminine adds an accent: incomplète."},

  {type:"teach", trg:"indirect", src:"indirect", pos:"adj", gender:null,
   note:"Not direct. Used in grammar (indirect speech), taxes, and effects.\nFeminine form: indirecte.",
   example:"A: Le tabac a des effets indirects sur la santé.\nB: Comme le tabagisme passif?\nA: Exactement, les non-fumeurs sont aussi affectés.\nB: C'est pour cela que fumer est interdit dans les lieux publics.",
   exampleSrc:"A: Tobacco has indirect effects on health.\nB: Like passive smoking?\nA: Exactly, non-smokers are also affected.\nB: That's why smoking is banned in public places.",
   funFact:"From Latin 'indirectus'. In grammar, 'le discours indirect' is reported speech."},

  {type:"teach", trg:"la division", src:"the division", pos:"noun", gender:"f",
   note:"Separation into parts. Also: a math operation, military unit, or department.",
   example:"A: La division de la classe en groupes facilite le travail.\nB: Oui, les petits groupes sont plus efficaces.\nA: Chaque groupe a un sujet différent?\nB: Oui, et ensuite on met en commun.",
   exampleSrc:"A: Dividing the class into groups makes the work easier.\nB: Yes, small groups are more effective.\nA: Does each group have a different topic?\nB: Yes, and then we share our findings.",
   funFact:"From Latin 'divisio'. In French math: 'faire une division' = to do a division problem."},

  {type:"mc", q:"Quel mot désigne une explication proposée qui doit être testée?",
   opts:["L'hypothèse","La déduction","L'interaction","La division"],
   ans:"L'hypothèse",
   hint:"A scientific starting point: a proposed explanation before experiments confirm it"},

  {type:"fb", s:"Par {1}, le détective a identifié le coupable en éliminant les autres suspects.",
   a:["déduction"], opts:["déduction","division","interaction","hypothèse"],
   hint:"Reasoning from general to specific, eliminating possibilities one by one",
   sSrc:"By {1}, the detective identified the culprit by eliminating the other suspects."},

  {type:"teach", trg:"l'idéalisation", src:"the idealization", pos:"noun", gender:"f",
   note:"Seeing something as perfect when it is not.\nCommon in psychology and art criticism.",
   example:"A: L'idéalisation du passé est courante.\nB: On oublie souvent les aspects négatifs.\nA: C'est la nostalgie qui parle.\nB: Oui, la réalité était plus complexe.",
   exampleSrc:"A: The idealization of the past is common.\nB: We often forget the negative aspects.\nA: It's nostalgia talking.\nB: Yes, reality was more complex.",
   funFact:"From 'idéaliser' + '-tion'. Psychologists use it to describe unrealistic positive views."},

  {type:"teach", trg:"initialement", src:"initially", pos:"adv", gender:null,
   note:"At the beginning, at first.\nUsed to contrast with what happened later.",
   example:"A: Initialement, le projet devait durer six mois.\nB: Et maintenant?\nA: On en est à un an.\nB: Les retards sont fréquents dans la recherche.",
   exampleSrc:"A: Initially, the project was supposed to last six months.\nB: And now?\nA: We're at one year.\nB: Delays are common in research.",
   funFact:"From 'initial' + '-ement'. The adjective 'initial' is the same word in English and French."},

  {type:"teach", trg:"individuellement", src:"individually", pos:"adv", gender:null,
   note:"One by one, as separate individuals.\nContrasts with 'collectivement' (collectively).",
   example:"A: Chaque élève sera évalué individuellement.\nB: Pas de travail de groupe cette fois?\nA: Non, c'est un examen personnel.\nB: D'accord, je vais bien me préparer.",
   exampleSrc:"A: Each student will be assessed individually.\nB: No group work this time?\nA: No, it's a personal exam.\nB: Okay, I'll prepare well.",
   funFact:"From 'individuel' + '-ement'. French adverbs often add '-ment' to the feminine adjective form."},

  {type:"mc", q:"Quel adjectif signifie 'étudié en profondeur'?",
   opts:["Approfondi","Incomplet","Indirect","Initial"],
   ans:"Approfondi",
   hint:"Deeply examined, thoroughly investigated over a long period"},

  {type:"fb", s:"Ce dossier est {1}, il manque plusieurs documents importants.",
   a:["incomplet"], opts:["incomplet","approfondi","indirect","individuel"],
   hint:"Not finished, with missing parts or information",
   sSrc:"This file is {1}, several important documents are missing."},

  {type:"match", pairs:[
    {trg:"l'hypothèse", src:"hypothesis"},
    {trg:"la déduction", src:"deduction"},
    {trg:"approfondi", src:"in-depth"},
    {trg:"initialement", src:"initially"},
    {trg:"la division", src:"division"}
  ]},

  {type:"mc", q:"Que signifie 'l'idéalisation du passé'?",
   opts:["Voir le passé comme parfait alors qu'il ne l'était pas","Étudier l'histoire en détail","Oublier complètement le passé","Critiquer le passé sévèrement"],
   ans:"Voir le passé comme parfait alors qu'il ne l'était pas",
   hint:"Nostalgia makes us remember only the good parts, ignoring the bad"},

  {type:"fb", s:"{1}, le projet devait durer six mois, mais il a pris un an.",
   a:["Initialement"], opts:["Initialement","Individuellement","Indirectement","Idéalement"],
   hint:"At the beginning, at the start of the process",
   sSrc:"{1}, the project was supposed to last six months, but it took a year."},

  {type:"drag_fill", s:"L'{1} entre professeur et élèves est essentielle pour un apprentissage {2}.",
   blanks:{"1":"interaction","2":"approfondi"},
   pool:["interaction","approfondi","division","incomplet"],
   hint:"Mutual exchange between teacher and students leads to thorough learning"},

  {type:"mc", q:"Chaque élève sera évalué comment?",
   opts:["Individuellement","Collectivement","Indirectement","Initialement"],
   ans:"Individuellement",
   hint:"One by one, each person assessed separately"}
]};
export default LESSON_5;
