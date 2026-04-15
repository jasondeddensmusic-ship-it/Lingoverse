// French B2 Gap Batch D Lesson 4 — Psychology and Emotions
const LESSON_4 = {id:"frv2_b2gD_l4", title:"Psychologie et émotions", icon:"🧠", xp:15, board:true, steps:[
  {type:"intro", title:"Psychologie et émotions",
   desc:"Develop vocabulary for discussing psychological states, emotional intelligence, and mental processes.",
   goals:["Learn 10 psychology and emotion terms","Describe mental states and processes","Discuss psychological concepts in depth"]},

  {type:"teach", trg:"l'idéalisation", src:"the idealization", pos:"noun", gender:"f",
   note:"Seeing something or someone as perfect, beyond reality.\nCommon in psychology and relationships.",
   example:"A: L'idéalisation du passé est un piège courant.\nB: On oublie les mauvais moments.\nA: Et on embellit les souvenirs.\nB: La nostalgie déforme la réalité.",
   exampleSrc:"A: Idealizing the past is a common trap.\nB: We forget the bad moments.\nA: And we embellish memories.\nB: Nostalgia distorts reality.",
   funFact:"Freud described idealization as a defense mechanism. In French, 'idéal' can be both noun and adjective."},

  {type:"teach", trg:"l'intériorisation", src:"the internalization", pos:"noun", gender:"f",
   note:"Absorbing external values or emotions into oneself.\nPsychological term for making something part of your identity.",
   example:"A: L'intériorisation du stress est dangereuse.\nB: Il vaut mieux exprimer ses émotions.\nA: Oui, mais ce n'est pas facile pour tout le monde.\nB: C'est pourquoi la thérapie peut aider.",
   exampleSrc:"A: Internalizing stress is dangerous.\nB: It's better to express your emotions.\nA: Yes, but it's not easy for everyone.\nB: That's why therapy can help.",
   funFact:"From 'intérieur' (interior) + '-isation'. Psychologists distinguish internalization from simple imitation."},

  {type:"teach", trg:"psychologiquement", src:"psychologically", pos:"adv", gender:null,
   note:"In a way that relates to the mind and emotions.\nA common adverb in discussions of wellbeing.",
   example:"A: Elle est psychologiquement prête pour l'examen.\nB: Elle a fait un excellent travail de préparation.\nA: Sa confiance en soi a beaucoup grandi.\nB: C'est la moitié de la bataille.",
   exampleSrc:"A: She is psychologically ready for the exam.\nB: She did excellent preparation work.\nA: Her self-confidence has grown a lot.\nB: That's half the battle.",
   funFact:"One of the longest common French adverbs at 20 letters. The -ment suffix creates adverbs from adjectives."},

  {type:"teach", trg:"le penchant", src:"the inclination / tendency", pos:"noun", gender:"m",
   note:"A natural tendency toward something.\nCan be positive or negative. 'Avoir un penchant pour' = to have a fondness for.",
   example:"A: Il a un penchant pour les desserts au chocolat.\nB: Qui n'en a pas?\nA: C'est vrai, c'est universel.\nB: Le chocolat rend tout le monde heureux.",
   exampleSrc:"A: He has an inclination for chocolate desserts.\nB: Who doesn't?\nA: That's true, it's universal.\nB: Chocolate makes everyone happy.",
   funFact:"From 'pencher' (to lean). A penchant is literally what you 'lean toward'. English borrowed this word directly."},

  {type:"mc",
   q:"Que signifie 'l'intériorisation du stress'?",
   opts:["Absorber le stress au lieu de l'exprimer","Faire du sport pour réduire le stress","Parler de son stress à un ami","Ignorer complètement le stress"],
   ans:"Absorber le stress au lieu de l'exprimer",
   hint:"Think about keeping emotions inside rather than expressing them outwardly."},

  {type:"teach", trg:"la grossièreté", src:"the rudeness / coarseness", pos:"noun", gender:"f",
   note:"Rude or vulgar behavior. Also: a rude remark.\n'Dire des grossièretés' = to use coarse language.",
   example:"A: Sa grossièreté a choqué tout le monde.\nB: Qu'est-ce qu'il a dit exactement?\nA: Des insultes inacceptables.\nB: Il devrait s'excuser publiquement.",
   exampleSrc:"A: His rudeness shocked everyone.\nB: What exactly did he say?\nA: Unacceptable insults.\nB: He should apologize publicly.",
   funFact:"From 'grossier' (coarse/rude), which comes from 'gros' (big/thick). The idea of 'thick' behavior becoming 'rude'."},

  {type:"teach", trg:"la petitesse", src:"the pettiness / smallness", pos:"noun", gender:"f",
   note:"Small-mindedness or meanness of spirit.\nAlso literal: physical smallness.",
   example:"A: La petitesse de ses remarques me déçoit.\nB: Il est jaloux de ton succès.\nA: C'est triste de réagir ainsi.\nB: Ne laisse pas ça t'affecter.",
   exampleSrc:"A: The pettiness of his remarks disappoints me.\nB: He's jealous of your success.\nA: It's sad to react that way.\nB: Don't let it affect you.",
   funFact:"From 'petit' + '-esse'. The -esse suffix creates abstract nouns: 'tristesse' (sadness), 'sagesse' (wisdom), 'richesse' (wealth)."},

  {type:"teach", trg:"l'agressivité", src:"the aggressiveness", pos:"noun", gender:"f",
   note:"Hostile or forceful behavior. Can be physical or verbal.\nIn psychology, can be passive or active.",
   example:"A: L'agressivité au volant est un vrai problème.\nB: Surtout aux heures de pointe.\nA: Les gens perdent patience rapidement.\nB: Il faudrait des campagnes de sensibilisation.",
   exampleSrc:"A: Road rage is a real problem.\nB: Especially during rush hour.\nA: People lose patience quickly.\nB: There should be awareness campaigns.",
   funFact:"French distinguishes 'agressivité' (the trait) from 'agression' (the act). Road rage is literally 'agressivité au volant'."},

  {type:"fb",
   s:"L'{1} du passé nous empêche de voir la réalité telle qu'elle est.",
   a:["idéalisation"],
   opts:["idéalisation","intériorisation","agressivité","grossièreté"],
   hint:"This psychological term means seeing the past as more perfect than it really was.",
   sSrc:"The {1} of the past prevents us from seeing reality as it is."},

  {type:"teach", trg:"la malhonnêteté", src:"the dishonesty", pos:"noun", gender:"f",
   note:"Lack of honesty or integrity.\nStronger than 'mensonge' (lying).",
   example:"A: La malhonnêteté intellectuelle est inacceptable.\nB: Surtout dans le monde académique.\nA: Plagier les travaux des autres est grave.\nB: Les conséquences peuvent être très sévères.",
   exampleSrc:"A: Intellectual dishonesty is unacceptable.\nB: Especially in academia.\nA: Plagiarizing others' work is serious.\nB: The consequences can be very severe.",
   funFact:"From 'mal-' (badly) + 'honnêteté' (honesty). The 'h' in 'honnête' is silent, a common trap for learners."},

  {type:"teach", trg:"l'inefficacité", src:"the inefficiency", pos:"noun", gender:"f",
   note:"Lack of effectiveness or productivity.\nOften criticized in bureaucracy and institutions.",
   example:"A: L'inefficacité de ce système est frustrante.\nB: On perd tellement de temps.\nA: Il faudrait tout moderniser.\nB: La numérisation pourrait aider.",
   exampleSrc:"A: The inefficiency of this system is frustrating.\nB: We waste so much time.\nA: Everything should be modernized.\nB: Digitization could help.",
   funFact:"Triple negative prefix: 'in-' + 'ef-' (from 'ex-') + 'ficacité'. French loves stacking prefixes for abstract nouns."},

  {type:"mc",
   q:"Quel mot décrit un comportement hostile ou violent?",
   opts:["L'agressivité","La petitesse","Le penchant","La grossièreté"],
   ans:"L'agressivité",
   hint:"This word specifically describes forceful, hostile behavior that can be physical or verbal."},

  {type:"match", pairs:[
    {trg:"penchant", src:"inclination"},
    {trg:"grossièreté", src:"rudeness"},
    {trg:"petitesse", src:"pettiness"},
    {trg:"malhonnêteté", src:"dishonesty"},
    {trg:"inefficacité", src:"inefficiency"}
  ]},

  {type:"fb",
   s:"Sa {1} a choqué tous les invités lors du dîner.",
   a:["grossièreté"],
   opts:["grossièreté","petitesse","persévérance","pondération"],
   hint:"This noun describes rude, coarse behavior that offends people around you.",
   sSrc:"His {1} shocked all the guests at the dinner."}
]};
export default LESSON_4;
