// French B2 Gap Batch D Lesson 5 — Education and Learning
const LESSON_5 = {id:"frv2_b2gD_l5", title:"Enseignement et apprentissage", icon:"📚", xp:15, board:true, steps:[
  {type:"intro", title:"Enseignement et apprentissage",
   desc:"Build vocabulary for discussing education systems, teaching methods, and academic life in France.",
   goals:["Learn 10 education and learning terms","Discuss the French school system","Express opinions about pedagogy"]},

  {type:"teach", trg:"la pédagogie", src:"the pedagogy / teaching method", pos:"noun", gender:"f",
   note:"The art and science of teaching.\nAlso means a specific teaching approach.",
   example:"A: La pédagogie Montessori gagne du terrain en France.\nB: Elle met l'enfant au centre de l'apprentissage.\nA: C'est différent de l'approche traditionnelle.\nB: Les résultats sont encourageants.",
   exampleSrc:"A: Montessori pedagogy is gaining ground in France.\nB: It puts the child at the center of learning.\nA: It's different from the traditional approach.\nB: The results are encouraging.",
   funFact:"From Greek 'paidagogia' (leading children). In Ancient Greece, a 'pedagogue' was a slave who walked children to school."},

  {type:"teach", trg:"le professorat", src:"the professorship / teaching career", pos:"noun", gender:"m",
   note:"The profession of being a teacher or professor.\nAlso: the exam to become a teacher.",
   example:"A: Elle a choisi le professorat par vocation.\nB: C'est un métier exigeant.\nA: Mais aussi très gratifiant.\nB: Former les jeunes esprits, c'est noble.",
   exampleSrc:"A: She chose teaching as a vocation.\nB: It's a demanding profession.\nA: But also very rewarding.\nB: Shaping young minds is noble.",
   funFact:"In France, becoming a teacher requires passing the CAPES or Agrégation, extremely competitive national exams."},

  {type:"teach", trg:"le proviseur", src:"the headmaster / principal", pos:"noun", gender:"m",
   note:"The head of a lycée (secondary school).\nFor collège: 'principal'. For primary: 'directeur'.",
   example:"A: Le proviseur a convoqué une réunion d'urgence.\nB: C'est au sujet des violences?\nA: Oui, il veut renforcer la sécurité.\nB: Il prendra la parole devant les parents.",
   exampleSrc:"A: The headmaster called an emergency meeting.\nB: Is it about the violence?\nA: Yes, he wants to strengthen security.\nB: He'll address the parents.",
   funFact:"From Latin 'provisor' (one who provides). Each level of French school has a different title for its head."},

  {type:"teach", trg:"la déscolarisation", src:"the dropping out / deeschooling", pos:"noun", gender:"f",
   note:"Leaving school before completion. Also: removing from schooling.\nA social issue tracked by French authorities.",
   example:"A: La déscolarisation touche surtout les quartiers défavorisés.\nB: Les causes sont multiples.\nA: Pauvreté, problèmes familiaux, harcèlement.\nB: Il faut agir à tous les niveaux.",
   exampleSrc:"A: Dropping out mainly affects disadvantaged neighborhoods.\nB: The causes are multiple.\nA: Poverty, family problems, bullying.\nB: Action is needed at all levels.",
   funFact:"From 'dé-' (un-) + 'scolarisation' (schooling). France made school compulsory in 1882 under Jules Ferry."},

  {type:"mc",
   q:"Qui dirige un lycée en France?",
   opts:["Le proviseur","Le professeur","Le pédagogue","Le doyen"],
   ans:"Le proviseur",
   hint:"Each level of French school has its own title. This one is specifically for the lycée."},

  {type:"teach", trg:"l'oral", src:"the oral exam / spoken test", pos:"noun", gender:"m",
   note:"A spoken examination. Opposite of 'écrit' (written).\n'Passer un oral' = to take an oral exam.",
   example:"A: Mon oral de français est demain.\nB: Tu as préparé ton texte?\nA: Oui, je l'ai répété dix fois.\nB: N'oublie pas de respirer et de parler lentement.",
   exampleSrc:"A: My French oral exam is tomorrow.\nB: Have you prepared your text?\nA: Yes, I've rehearsed it ten times.\nB: Don't forget to breathe and speak slowly.",
   funFact:"The French Baccalauréat includes mandatory oral exams. The 'Grand Oral' was added in 2021 as a major component."},

  {type:"teach", trg:"le pilier", src:"the pillar / cornerstone", pos:"noun", gender:"m",
   note:"A supporting column. Figuratively: a key element.\n'Les piliers de l'école' = the pillars of school.",
   example:"A: La lecture est un pilier de l'éducation.\nB: Avec l'écriture et le calcul.\nA: On les appelle les savoirs fondamentaux.\nB: Tout le reste repose sur ces trois bases.",
   exampleSrc:"A: Reading is a pillar of education.\nB: Along with writing and arithmetic.\nA: They're called the fundamental skills.\nB: Everything else rests on these three bases.",
   funFact:"From Latin 'pilare' (pillar). In rugby, 'pilier' is also the term for a prop forward."},

  {type:"teach", trg:"le préambule", src:"the preamble / introduction", pos:"noun", gender:"m",
   note:"An introductory statement before the main content.\nLegal and formal contexts.",
   example:"A: Le préambule de la Constitution est célèbre.\nB: Il affirme les droits fondamentaux.\nA: Chaque mot a été soigneusement choisi.\nB: C'est un texte fondateur de la République.",
   exampleSrc:"A: The preamble of the Constitution is famous.\nB: It affirms fundamental rights.\nA: Every word was carefully chosen.\nB: It's a founding text of the Republic.",
   funFact:"From Latin 'praeambulus' (walking before). The French Constitution's preamble references the 1789 Declaration of Rights."},

  {type:"fb",
   s:"La {1} active place l'élève au centre de son apprentissage.",
   a:["pédagogie"],
   opts:["pédagogie","déscolarisation","justification","perspicacité"],
   hint:"This word describes the art and science of teaching, especially a specific method or approach.",
   sSrc:"Active {1} places the student at the center of their learning."},

  {type:"teach", trg:"le décimètre", src:"the decimeter", pos:"noun", gender:"m",
   note:"One tenth of a meter (10 cm). In schools: a small ruler.\nEvery French student owns one.",
   example:"A: Tu peux me prêter ton décimètre?\nB: Bien sûr, il est dans ma trousse.\nA: Merci, je dois tracer une figure géométrique.\nB: N'oublie pas de me le rendre.",
   exampleSrc:"A: Can you lend me your ruler?\nB: Of course, it's in my pencil case.\nA: Thanks, I need to draw a geometric figure.\nB: Don't forget to give it back.",
   funFact:"In French schools, 'un décimètre' means specifically a 10-20cm ruler, not the measurement unit. Every student has one."},

  {type:"teach", trg:"le précepte", src:"the precept / principle", pos:"noun", gender:"m",
   note:"A rule or principle guiding behavior.\nMoral or educational guidelines.",
   example:"A: Les préceptes de cette école sont stricts.\nB: Discipline et respect?\nA: Oui, mais aussi créativité et curiosité.\nB: C'est un bon équilibre.",
   exampleSrc:"A: This school's precepts are strict.\nB: Discipline and respect?\nA: Yes, but also creativity and curiosity.\nB: It's a good balance.",
   funFact:"From Latin 'praeceptum' (something taught). A 'précepteur' was a private tutor for wealthy families."},

  {type:"mc",
   q:"Qu'est-ce que 'la déscolarisation'?",
   opts:["L'abandon scolaire ou la sortie du système éducatif","L'inscription dans une nouvelle école","La réforme du programme scolaire","L'apprentissage à domicile par choix"],
   ans:"L'abandon scolaire ou la sortie du système éducatif",
   hint:"The prefix 'dé-' means removal or reversal. Think about what it means to undo 'scolarisation'."},

  {type:"match", pairs:[
    {trg:"proviseur", src:"headmaster"},
    {trg:"oral", src:"oral exam"},
    {trg:"pilier", src:"pillar"},
    {trg:"préambule", src:"preamble"},
    {trg:"précepte", src:"precept"}
  ]},

  {type:"fb",
   s:"Le {1} du lycée a annoncé de nouvelles règles pour la rentrée.",
   a:["proviseur"],
   opts:["proviseur","professorat","pilier","précepte"],
   hint:"This is the person in charge of a French lycée, similar to a headmaster or principal.",
   sSrc:"The {1} of the high school announced new rules for the start of term."}
]};
export default LESSON_5;
