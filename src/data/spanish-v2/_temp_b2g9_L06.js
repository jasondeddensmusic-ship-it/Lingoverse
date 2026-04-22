// Lesson 6. Cualidades y defectos (Qualities and Flaws)
const LESSON_6 = {id:"esv2_b2g9_l6", title:"Cualidades y defectos", icon:"\u{1F3AD}", xp:25, board:true, steps:[
  {type:"intro", title:"Cualidades y defectos",
   desc:"Describe character traits with precision. From heroism to incompetence, these abstract nouns and adjectives let you discuss human nature at a B2 level.",
   goals:["Learn 10 terms for character traits and qualities","Use abstract nouns to describe people","Distinguish between positive and negative qualities"]},

  {type:"teach", trg:"la heroicidad", src:"heroism; heroic deed", pos:"noun", gender:"f",
   note:"From heroico (heroic) + -idad (quality).\nRefers to both the quality and a specific act.",
   example:"A: La heroicidad de los bomberos salv\u00f3 muchas vidas.\nB: Arriesgaron su vida por los dem\u00e1s.\nA: Eso es verdadera valent\u00eda.\nB: Merecen todo nuestro reconocimiento.",
   exampleSrc:"A: The heroism of the firefighters saved many lives.\nB: They risked their lives for others.\nA: That is true bravery.\nB: They deserve all our recognition.",
   funFact:"The -idad suffix in Spanish creates feminine abstract nouns from adjectives: heroico > heroicidad, feliz > felicidad."},

  {type:"teach", trg:"la incompetencia", src:"the incompetence", pos:"noun", gender:"f",
   note:"In- (not) + competencia (competence).\nLack of ability or skill for a task.",
   example:"A: La incompetencia del t\u00e9cnico caus\u00f3 el problema.\nB: \u00bfQu\u00e9 pas\u00f3 exactamente?\nA: Instal\u00f3 las piezas al rev\u00e9s.\nB: Necesitamos contratar a alguien con m\u00e1s experiencia.",
   exampleSrc:"A: The technician's incompetence caused the problem.\nB: What happened exactly?\nA: He installed the parts backwards.\nB: We need to hire someone with more experience.",
   funFact:"In Spanish law, 'incompetencia' also has a legal meaning: a court lacking jurisdiction to hear a case."},

  {type:"teach", trg:"la impulsividad", src:"the impulsiveness", pos:"noun", gender:"f",
   note:"From impulsivo (impulsive) + -idad.\nActing without thinking first.",
   example:"A: Su impulsividad le crea problemas.\nB: \u00bfQu\u00e9 ha hecho ahora?\nA: Dej\u00f3 el trabajo sin tener otro.\nB: Deber\u00eda pensar antes de actuar.",
   exampleSrc:"A: His impulsiveness creates problems for him.\nB: What has he done now?\nA: He quit his job without having another one.\nB: He should think before acting.",
   funFact:"Spanish speakers often say 'actuar por impulso' (to act on impulse) as the verbal alternative to the noun 'impulsividad'."},

  {type:"teach", trg:"la mediocridad", src:"mediocrity", pos:"noun", gender:"f",
   note:"From mediocre (mediocre) + -idad.\nBeing average or below average in quality.",
   example:"A: No me conformo con la mediocridad.\nB: \u00bfQu\u00e9 quieres decir?\nA: Quiero dar siempre lo mejor de m\u00ed.\nB: Esa actitud te llevar\u00e1 lejos.",
   exampleSrc:"A: I do not settle for mediocrity.\nB: What do you mean?\nA: I always want to give my best.\nB: That attitude will take you far.",
   funFact:"The Latin root 'mediocris' literally meant 'halfway up the mountain', a vivid image for something neither high nor low."},

  {type:"teach", trg:"la infelicidad", src:"unhappiness", pos:"noun", gender:"f",
   note:"In- (not) + felicidad (happiness).\nThe state of being unhappy.",
   example:"A: La infelicidad en el trabajo afecta a toda tu vida.\nB: Es verdad. Pasamos muchas horas trabajando.\nA: Si no eres feliz en tu empleo, b\u00fascate otro.\nB: Es f\u00e1cil decirlo, pero dif\u00edcil hacerlo.",
   exampleSrc:"A: Unhappiness at work affects your whole life.\nB: It is true. We spend many hours working.\nA: If you are not happy in your job, find another one.\nB: It is easy to say, but hard to do.",
   funFact:"Spanish has a rich vocabulary for emotions: infelicidad, desdicha, tristeza, pena, and desgracia all convey shades of unhappiness."},

  {type:"mc", q:"\u00bfQu\u00e9 significa 'impulsividad'?",
   opts:["Actuar sin pensar en las consecuencias","Ser muy lento","Tener mucha paciencia","Actuar con calma y reflexi\u00f3n"],
   ans:"Actuar sin pensar en las consecuencias",
   hint:"An impulsive person acts first, thinks later. This noun describes that trait."},

  {type:"teach", trg:"la indisciplina", src:"indiscipline; lack of discipline", pos:"noun", gender:"f",
   note:"In- (not) + disciplina (discipline).\nFailure to follow rules or maintain order.",
   example:"A: La indisciplina en el equipo es un problema grave.\nB: \u00bfQu\u00e9 est\u00e1 pasando?\nA: Los jugadores llegan tarde a los entrenamientos.\nB: El entrenador debe imponer consecuencias.",
   exampleSrc:"A: The indiscipline in the team is a serious problem.\nB: What is happening?\nA: The players arrive late to training.\nA: The coach must impose consequences.",
   funFact:"In Spanish football, 'indisciplina' is a common headline word when players break team rules or show disrespect."},

  {type:"teach", trg:"la irritabilidad", src:"irritability", pos:"noun", gender:"f",
   note:"From irritable (irritable) + -idad.\nTendency to get annoyed or angry easily.",
   example:"A: \u00daltimamente hay mucha irritabilidad en \u00e9l.\nB: Puede ser por el estr\u00e9s del trabajo.\nA: Deber\u00eda tomarse unos d\u00edas de descanso.\nB: O hablar con un profesional.",
   exampleSrc:"A: Lately there is a lot of irritability in him.\nB: It could be from work stress.\nA: He should take a few days off.\nB: Or talk to a professional.",
   funFact:"Medical Spanish uses 'irritabilidad' as a clinical symptom, particularly in descriptions of anxiety and sleep disorders."},

  {type:"teach", trg:"mezquino", src:"petty; mean; stingy", pos:"adj", gender:null,
   note:"From Arabic 'miskin' (poor/wretched).\nDescribes someone petty, stingy, or morally low.",
   example:"A: No seas mezquino. Comparte con los dem\u00e1s.\nB: No soy mezquino, solo ahorro.\nA: Hay una diferencia entre ahorrar y ser taca\u00f1o.\nB: Vale, tienes raz\u00f3n. Invito yo esta vez.",
   exampleSrc:"A: Do not be petty. Share with others.\nB: I am not petty, I just save money.\nA: There is a difference between saving and being stingy.\nB: Alright, you are right. My treat this time.",
   funFact:"The word 'mezquino' entered Spanish from Arabic during the centuries of Moorish presence in the Iberian Peninsula."},

  {type:"fb", s:"La {1} de los bomberos salv\u00f3 a toda la familia.", a:["heroicidad"],
   opts:["heroicidad","incompetencia","mediocridad","indisciplina"],
   hint:"A positive quality that describes brave and selfless actions.",
   sSrc:"The {1} of the firefighters saved the whole family."},

  {type:"teach", trg:"la individualidad", src:"individuality", pos:"noun", gender:"f",
   note:"From individual + -idad.\nThe quality that makes someone unique.",
   example:"A: La moda debe respetar la individualidad de cada persona.\nB: Estoy de acuerdo. No todos tenemos que vestir igual.\nA: La individualidad es lo que nos hace interesantes.\nB: Exacto. Ser diferente es un valor.",
   exampleSrc:"A: Fashion should respect each person's individuality.\nB: I agree. We do not all have to dress the same.\nA: Individuality is what makes us interesting.\nB: Exactly. Being different is a value.",
   funFact:"In Spanish philosophy, 'individualidad' is contrasted with 'colectividad', a tension central to political debate."},

  {type:"mc", q:"\u00bfDe d\u00f3nde viene la palabra 'mezquino'?",
   opts:["Del lat\u00edn","Del griego","Del \u00e1rabe","Del franc\u00e9s"],
   ans:"Del \u00e1rabe",
   hint:"Many Spanish words starting with 'me-' or 'al-' entered the language during the Moorish period."},

  {type:"fb", s:"La {1} del t\u00e9cnico provoc\u00f3 la aver\u00eda del sistema.", a:["incompetencia"],
   opts:["incompetencia","heroicidad","individualidad","irritabilidad"],
   hint:"The technician's lack of skill or ability caused the breakdown.",
   sSrc:"The {1} of the technician caused the system failure."},

  {type:"match", pairs:[
    {trg:"heroicidad", src:"heroism"},
    {trg:"mediocridad", src:"mediocrity"},
    {trg:"infelicidad", src:"unhappiness"},
    {trg:"indisciplina", src:"lack of discipline"},
    {trg:"individualidad", src:"individuality"}
  ]},

  {type:"mc", q:"\u00bfCu\u00e1l de estas palabras describe una cualidad positiva?",
   opts:["mediocridad","heroicidad","indisciplina","incompetencia"],
   ans:"heroicidad",
   hint:"Only one of these four words describes something admirable and brave."},

  {type:"drag_fill", s:"Su {1} le hizo dejar el trabajo, y su {2} le impidi\u00f3 encontrar otro.",
   blanks:{"1":"impulsividad","2":"incompetencia"},
   pool:["impulsividad","incompetencia","heroicidad","individualidad","mediocridad"],
   hint:"First he acted without thinking, then his lack of skill became the problem."}
]};
export default LESSON_6;
