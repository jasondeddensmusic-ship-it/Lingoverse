// French B2 Gap Batch 9 — Lesson 18: Éducation et Savoir
// Education and knowledge vocabulary

const LESSON_18 = {id:"frv2_b2g9_l18", title:"Éducation et Savoir", icon:"📚", xp:15, board:true, steps:[
  {type:"intro", title:"Éducation et Savoir",
   desc:"Master vocabulary for discussing education systems, learning, and intellectual development. Key for B2 discussions about schooling and academia.",
   goals:["Learn 20 education and knowledge words","Discuss the French education system","Analyze educational challenges"]},

  {type:"teach", trg:"la déscolarisation", src:"dropping out of school", pos:"noun", gender:"f",
   note:"Dé- (un-) + scolarisation (schooling).\nLeaving the education system prematurely.",
   example:"A: La déscolarisation touche surtout les milieux défavorisés.\nB: C'est un cercle vicieux de pauvreté.",
   exampleSrc:"A: Dropping out mainly affects disadvantaged backgrounds.\nB: It's a vicious circle of poverty.",
   funFact:"France has mandatory schooling until 16. Instruction is obligatory until 18 since 2019."},

  {type:"teach", trg:"l'oral", src:"oral exam", pos:"noun", gender:"m",
   note:"The spoken component of an exam.\nOpposite: l'écrit (written exam).",
   example:"A: J'ai passé l'oral du baccalauréat ce matin.\nB: Comment ça s'est passé?",
   exampleSrc:"A: I took the oral bac exam this morning.\nB: How did it go?",
   funFact:"The bac oral includes a grand oral where students present and defend a personal project."},

  {type:"teach", trg:"l'interro", src:"quiz, test (slang)", pos:"noun", gender:"f",
   note:"Clipped from interrogation.\nVery common student slang for a short test.",
   example:"A: Interro surprise en histoire demain!\nB: Comment tu le sais? Le prof l'a dit?",
   exampleSrc:"A: Surprise quiz in history tomorrow!\nB: How do you know? Did the teacher say so?",
   funFact:"French students clip everything: interro (interrogation), resto (restaurant), prof (professeur)."},

  {type:"teach", trg:"la persévérance", src:"perseverance", pos:"noun", gender:"f",
   note:"From persévérer (to persevere).\nA quality highly valued in French education.",
   example:"A: La persévérance est la clé de la réussite scolaire.\nB: Les bons résultats viennent avec le temps.",
   exampleSrc:"A: Perseverance is the key to academic success.\nB: Good results come with time.",
   funFact:"French report cards often mention persévérance as a key quality teachers look for."},

  {type:"teach", trg:"le participe", src:"participle (grammar)", pos:"noun", gender:"m",
   note:"From Latin participium.\nParticipe passé (past), participe présent (present).",
   example:"A: L'accord du participe passé est compliqué.\nB: C'est la règle la plus difficile en français!",
   exampleSrc:"A: The agreement of the past participle is complicated.\nB: It's the hardest rule in French!",
   funFact:"Past participle agreement with avoir is so difficult that even French adults get it wrong."},

  {type:"teach", trg:"l'identification", src:"identification", pos:"noun", gender:"f",
   note:"From identifier + -ation.\nRecognition, or the psychological process of identifying with someone.",
   example:"A: L'identification des plantes est un exercice de biologie.\nB: Les élèves utilisent un guide de terrain.",
   exampleSrc:"A: Plant identification is a biology exercise.\nB: Students use a field guide.",
   funFact:"In psychology, identification means adopting another person's characteristics unconsciously."},

  {type:"teach", trg:"l'intériorisation", src:"internalization", pos:"noun", gender:"f",
   note:"From intérioriser (to internalize).\nAbsorbing external rules, values, or knowledge.",
   example:"A: L'intériorisation des règles grammaticales prend du temps.\nB: La pratique régulière est essentielle.",
   exampleSrc:"A: Internalizing grammar rules takes time.\nB: Regular practice is essential.",
   funFact:"Piaget and Vygotsky used intériorisation as a key concept in learning theory."},

  {type:"teach", trg:"la bibliothèque", src:"library", pos:"noun", gender:"f",
   note:"From Greek biblion (book) + theke (storage).\nNot to be confused with librairie (bookshop).",
   example:"A: La bibliothèque municipale est ouverte le samedi.\nB: J'y vais pour emprunter des livres.",
   exampleSrc:"A: The public library is open on Saturdays.\nB: I go there to borrow books.",
   funFact:"False friend alert: bibliothèque = library. Librairie = bookshop. They are different."},

  {type:"teach", trg:"l'incapacité", src:"inability, incapacity", pos:"noun", gender:"f",
   note:"In- (not) + capacité.\nInability to do something, or legal incapacity.",
   example:"A: Son incapacité à se concentrer inquiète ses parents.\nB: Le médecin recommande un bilan.",
   exampleSrc:"A: His inability to concentrate worries his parents.\nB: The doctor recommends an assessment.",
   funFact:"Incapacité de travail (work incapacity) is a legal status in French employment law."},

  {type:"mc", q:"Une interro surprise est:", opts:["Un examen prévu à l'avance","Un test sans prévenir les élèves","Une interview avec un professeur","Un exercice facile"], ans:"Un test sans prévenir les élèves",
   hint:"Surprise = without warning. An unannounced quiz that catches students off guard."},

  {type:"teach", trg:"la justification", src:"justification, reasoning", pos:"noun", gender:"f",
   note:"From justifier + -ation.\nExplaining why something is correct or valid.",
   example:"A: Donnez la justification de votre réponse.\nB: Il faut montrer le raisonnement.",
   exampleSrc:"A: Give the justification for your answer.\nB: You need to show the reasoning.",
   funFact:"French exams often require 'justification': you must explain your answer, not just give it."},

  {type:"teach", trg:"approfondi", src:"in-depth, thorough", pos:"adj", gender:null,
   note:"From approfondir (to deepen).\nFeminine: approfondie.",
   example:"A: Une étude approfondie du sujet est nécessaire.\nB: Les analyses superficielles ne suffisent pas.",
   exampleSrc:"A: An in-depth study of the subject is necessary.\nB: Superficial analyses are not enough.",
   funFact:"Approfondir literally means to make deeper: a- + profond (deep). Very visual word."},

  {type:"teach", trg:"la phonétique", src:"phonetics", pos:"noun", gender:"f",
   note:"The study of speech sounds.\nAlso adjective: transcription phonétique.",
   example:"A: La phonétique est essentielle pour bien prononcer.\nB: Chaque son doit être maîtrisé.",
   exampleSrc:"A: Phonetics is essential for good pronunciation.\nB: Each sound must be mastered.",
   funFact:"The International Phonetic Alphabet was created by a French phonetician, Paul Passy, in 1888."},

  {type:"teach", trg:"l'idiomatisme", src:"idiom, idiomatic expression", pos:"noun", gender:"m",
   note:"From idiomatique (idiomatic).\nA fixed expression specific to a language.",
   example:"A: Les idiomatismes sont difficiles à traduire.\nB: 'Il pleut des cordes' ne se traduit pas littéralement.",
   exampleSrc:"A: Idioms are difficult to translate.\nB: 'It's raining ropes' can't be translated literally.",
   funFact:"Every language has unique idiomatismes. They reveal cultural thinking patterns."},

  {type:"fb", s:"L'accord du {1} passé avec avoir est la règle la plus difficile.", a:["participe"], opts:["participe","oral","identification","idiomatisme"],
   hint:"A grammar term for the verb form that works with auxiliaries. Past...",
   sSrc:"The agreement of the past {1} with avoir is the hardest rule."},

  {type:"teach", trg:"le cursus", src:"curriculum, course of study", pos:"noun", gender:"m",
   note:"From Latin cursus (course).\nThe complete educational pathway.",
   example:"A: Son cursus universitaire a duré cinq ans.\nB: Il a un master en économie.",
   exampleSrc:"A: His university curriculum lasted five years.\nB: He has a master's in economics.",
   funFact:"Cursus is Latin and keeps its original form. Plural: des cursus (invariable)."},

  {type:"mc", q:"Bibliothèque et librairie en français sont:", opts:["Des synonymes","Bibliothèque = library, librairie = bookshop","Bibliothèque = bookshop, librairie = library","Le même mot"], ans:"Bibliothèque = library, librairie = bookshop",
   hint:"A classic false friend. One place lends books for free; the other sells them for money."},

  {type:"fb", s:"Une analyse {1} est nécessaire pour comprendre le problème.", a:["approfondie"], opts:["approfondie","interro","orale","phonétique"],
   hint:"In-depth, thorough. From approfondir, to make deeper.",
   sSrc:"An {1} analysis is necessary to understand the problem."},

  {type:"match", pairs:[
    {trg:"l'oral", src:"oral exam"},
    {trg:"l'interro", src:"quiz (slang)"},
    {trg:"le participe", src:"participle"},
    {trg:"le cursus", src:"curriculum"}
  ]},

  {type:"mc", q:"L'intériorisation des règles signifie:", opts:["Les apprendre par coeur","Les absorber jusqu'à les appliquer naturellement","Les écrire dans un cahier","Les oublier rapidement"], ans:"Les absorber jusqu'à les appliquer naturellement",
   hint:"Making external rules become internal, natural behavior. Deep learning."},

  {type:"fb", s:"Les {1} sont propres à chaque langue et difficiles à traduire.", a:["idiomatismes"], opts:["idiomatismes","participes","justifications","cursus"],
   hint:"Fixed expressions unique to a language. Like 'it's raining cats and dogs'.",
   sSrc:"{1} are specific to each language and difficult to translate."},

  {type:"match", pairs:[
    {trg:"la déscolarisation", src:"dropping out"},
    {trg:"la persévérance", src:"perseverance"},
    {trg:"la bibliothèque", src:"library"},
    {trg:"la phonétique", src:"phonetics"}
  ]}
]};

export default LESSON_18;
