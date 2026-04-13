// L18: Verbs of Action - Physical and abstract actions
const LESSON_18 = {
  id:"esv2_b1gap_l18", title:"Verbos de acci\u00f3n", icon:"\u{1F4AA}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Verbos de acci\u00f3n",
     desc:"Express yourself with precision. Learn verbs for physical actions, emotional reactions, and social interactions.",
     goals:["Learn 20 action verbs","Use verbs in natural conversational contexts","Understand reflexive and stem-changing patterns"]},

    {type:"teach", trg:"abatir", src:"to knock down, to depress", pos:"verb", gender:null,
     note:"Regular -ir verb. Physical and emotional.\nEstoy abatido = I am dejected.",
     example:"A: La mala noticia le abati\u00f3 mucho.\nB: Es normal, necesita tiempo.",
     exampleSrc:"A: The bad news really depressed him.\nB: It is normal, he needs time.",
     funFact:"From Latin 'abbatuere' (to beat down). The physical meaning (to fell a tree, to shoot down a plane) transferred to emotional 'beating down'."},

    {type:"teach", trg:"agonizar", src:"to be dying, to agonize", pos:"verb", gender:null,
     note:"Regular -ar verb. To be in the final stages.\nAlso: to suffer intensely.",
     example:"A: La planta est\u00e1 agonizando. Necesita agua.\nB: Voy a regarla ahora mismo.",
     exampleSrc:"A: The plant is dying. It needs water.\nB: I will water it right now.",
     funFact:"From Greek 'agonizesthai' (to struggle). Greeks used 'agon' for athletic contests and struggles. The word traveled from physical struggle to death struggle."},

    {type:"teach", trg:"arrepentir", src:"to repent, to regret", pos:"verb", gender:null,
     note:"Irregular reflexive. e > ie: me arrepiento.\nArrepentirse de = to regret something.",
     example:"A: Me arrepiento de no haber estudiado m\u00e1s.\nB: Nunca es tarde para empezar.",
     exampleSrc:"A: I regret not having studied more.\nB: It is never too late to start.",
     funFact:"From Latin 'repaenitere' (to cause regret). Always reflexive in Spanish: 'arrepentirse'. You cannot 'arrepentir a alguien', only 'arrepentirte t\u00fa mismo'."},

    {type:"teach", trg:"arrugar", src:"to wrinkle, to crumple", pos:"verb", gender:null,
     note:"Regular -ar verb. For skin, paper, or clothes.\nArrugar la nariz = to wrinkle one's nose.",
     example:"A: No arrugues la camisa, ac\u00e1bala de planchar.\nB: Perd\u00f3n, la pongo en la percha.",
     exampleSrc:"A: Do not wrinkle the shirt, I just ironed it.\nB: Sorry, I will put it on the hanger.",
     funFact:"From 'arruga' (wrinkle). 'Arrugarse' colloquially means to chicken out: '\u00bfTe has arrugado?' = 'Did you chicken out?'"},

    {type:"teach", trg:"arrodillar", src:"to kneel", pos:"verb", gender:null,
     note:"Regular reflexive -ar verb. Arrodillarse = to kneel down.\nFrom 'rodilla' (knee).",
     example:"A: Se arrodill\u00f3 para pedirle matrimonio.\nB: \u00a1Qu\u00e9 rom\u00e1ntico!",
     exampleSrc:"A: He knelt down to propose to her.\nB: How romantic!",
     funFact:"From 'a-' + 'rodilla' (knee), from Latin 'rotella' (small wheel). The knee is shaped like a small wheel. Marriage proposals on one knee are universal."},

    {type:"mc",
     q:"\u00bfQu\u00e9 verbo describes la posici\u00f3n de pedir matrimonio?",
     opts:["arrodillarse","arrepentirse","arrugar","abatir"],
     ans:"arrodillarse",
     hint:"Going down on one or both knees, a gesture associated with proposals and reverence."},

    {type:"teach", trg:"aturdir", src:"to stun, to daze", pos:"verb", gender:null,
     note:"Regular -ir verb. To leave confused or stunned.\nEstoy aturdido = I am dazed.",
     example:"A: El ruido me aturd\u00eda.\nB: Normal, hab\u00eda much\u00edsima gente.",
     exampleSrc:"A: The noise was stunning me.\nB: Of course, there were a lot of people.",
     funFact:"Possibly from Latin 'turdus' (thrush bird). Some say confused people acted like dizzy birds. Another theory links it to 'tordo' (stunned)."},

    {type:"teach", trg:"aterrorizar", src:"to terrorize", pos:"verb", gender:null,
     note:"Regular -ar verb. To cause extreme fear.\nFrom 'terror'.",
     example:"A: La tormenta aterrorizó al perro.\nB: Los animales son sensibles a los truenos.",
     exampleSrc:"A: The storm terrorized the dog.\nB: Animals are sensitive to thunder.",
     funFact:"From 'terror' + '-izar'. The '-izar' suffix converts nouns into verbs: terror > aterrorizar, hospital > hospitalizar, canal > canalizar."},

    {type:"teach", trg:"ambientar", src:"to set (a scene), to create atmosphere", pos:"verb", gender:null,
     note:"Regular -ar verb. To create a mood or setting.\nAmbientar una novela en = to set a novel in.",
     example:"A: La pel\u00edcula est\u00e1 ambientada en los a\u00f1os 50.\nB: Se nota en la ropa y los coches.",
     exampleSrc:"A: The movie is set in the 1950s.\nB: You can tell from the clothes and cars.",
     funFact:"From 'ambiente' (environment). In film, 'ambientaci\u00f3n' is production design. A well-'ambientado' movie feels authentic to its time and place."},

    {type:"teach", trg:"aniquilar", src:"to annihilate, to destroy", pos:"verb", gender:null,
     note:"Regular -ar verb. To destroy completely.\nAlso colloquial: el examen me aniquil\u00f3.",
     example:"A: El equipo fue aniquilado en el partido.\nB: S\u00ed, perdieron cinco a cero.",
     exampleSrc:"A: The team was annihilated in the match.\nB: Yes, they lost five to zero.",
     funFact:"From Latin 'annihilare' (to reduce to nothing): 'ad' + 'nihil' (nothing). Hyperbolic use in sports and exams: 'Me aniquil\u00f3 el examen' (the exam destroyed me)."},

    {type:"fb",
     s:"Me {1} de no haberle dicho la verdad antes.",
     a:["arrepiento"],
     opts:["arrepiento","arrodillo","aterrorizo","aniquilo"],
     hint:"Present tense of a reflexive verb meaning to feel regret. Stem changes e to ie.",
     sSrc:"I {1} not having told him the truth sooner."},

    {type:"teach", trg:"apresar", src:"to capture, to seize", pos:"verb", gender:null,
     note:"Regular -ar verb. To take someone prisoner.\nFrom 'presa' (prey, capture).",
     example:"A: Apresaron al ladr\u00f3n en la estaci\u00f3n.\nB: La polic\u00eda actu\u00f3 muy r\u00e1pido.",
     exampleSrc:"A: They captured the thief at the station.\nB: The police acted very quickly.",
     funFact:"From 'presa' (prey, catch), from Latin 'prehensa' (seized). 'Presa' also means dam (something that 'seizes' water) and prey (something seized by a predator)."},

    {type:"teach", trg:"azorar", src:"to embarrass, to fluster", pos:"verb", gender:null,
     note:"Regular -ar verb. To make someone flustered.\nAzorarse = to become embarrassed.",
     example:"A: Se azor\u00f3 cuando le hicieron la pregunta.\nB: Es t\u00edmido, le pasa siempre.",
     exampleSrc:"A: He got flustered when they asked him the question.\nB: He is shy, it always happens.",
     funFact:"Possibly from 'azor' (goshawk). Startled prey birds flutter in panic when an azor attacks. Being 'azorado' is that same panicked fluttering."},

    {type:"teach", trg:"antojar", src:"to crave, to fancy", pos:"verb", gender:null,
     note:"Reflexive: antojarse. Se me antoja = I feel like.\nAntojo = craving.",
     example:"A: Se me antoja un helado.\nB: A m\u00ed tambi\u00e9n. Vamos a la helader\u00eda.",
     exampleSrc:"A: I fancy an ice cream.\nB: Me too. Let's go to the ice cream shop.",
     funFact:"From 'antojo' (whim, craving), possibly from 'ante ojo' (before the eye), something that appears before your eyes and tempts you. Pregnancy cravings are 'antojos'."},

    {type:"teach", trg:"adue\u00f1ar", src:"to take ownership, to seize", pos:"verb", gender:null,
     note:"Reflexive: adue\u00f1arse de. To take control of something.\nFrom 'due\u00f1o' (owner).",
     example:"A: Se adue\u00f1\u00f3 de la conversaci\u00f3n.\nB: S\u00ed, no dej\u00f3 hablar a nadie.",
     exampleSrc:"A: He took over the conversation.\nB: Yes, he did not let anyone else speak.",
     funFact:"From 'a-' + 'due\u00f1o' (owner). To make yourself the 'owner' of something, whether a conversation, a space, or emotions that take hold of you."},

    {type:"mc",
     q:"\u00bfQu\u00e9 sientes cuando se te antoja un helado?",
     opts:["Un deseo repentino de comerlo","Miedo al fr\u00edo","Ganas de dormir","Pena por algo"],
     ans:"Un deseo repentino de comerlo",
     hint:"When something appears tempting 'before your eyes' and you suddenly want it."},

    {type:"teach", trg:"agredir", src:"to assault, to attack", pos:"verb", gender:null,
     note:"Defective -ir verb (not all forms used). To physically attack someone.\nAgresi\u00f3n = assault.",
     example:"A: Le agredieron a la salida del bar.\nB: Eso es terrible. \u00bfEst\u00e1 bien?",
     exampleSrc:"A: He was assaulted leaving the bar.\nB: That is terrible. Is he okay?",
     funFact:"From Latin 'aggredi' (to approach, attack). A defective verb: some forms are avoided. 'Agredir' is the legal/formal term. 'Atacar' is the everyday equivalent."},

    {type:"teach", trg:"amnistiar", src:"to grant amnesty", pos:"verb", gender:null,
     note:"Regular -ar verb. To officially pardon.\nAmnist\u00eda = amnesty.",
     example:"A: El gobierno amnisti\u00f3 a los presos pol\u00edticos.\nB: Fue una decisi\u00f3n hist\u00f3rica.",
     exampleSrc:"A: The government granted amnesty to the political prisoners.\nB: It was a historic decision.",
     funFact:"From 'amnist\u00eda', from Greek 'amnestia' (forgetfulness). An amnesty literally 'forgets' the offense. Spain's 1977 Amnesty Law was key to the democratic transition."},

    {type:"fb",
     s:"Se me {1} una pizza con extra de queso.",
     a:["antoja"],
     opts:["antoja","agrede","amnist\u00eda","adue\u00f1a"],
     hint:"The reflexive form of a verb meaning to suddenly crave or fancy something.",
     sSrc:"I suddenly {1} a pizza with extra cheese."},

    {type:"match", pairs:[
      {trg:"arrepentirse", src:"to regret"},
      {trg:"aturdir", src:"to stun"},
      {trg:"ambientar", src:"to set (a scene)"},
      {trg:"antojar", src:"to crave"},
      {trg:"apresar", src:"to capture"}
    ]}
  ]
};
export default LESSON_18;
