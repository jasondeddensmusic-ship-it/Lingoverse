// French B2 Gap Lesson 10. Politics and Governance
const LESSON_10 = {id:"frv2_b2g5_l10", title:"Politique et gouvernance", icon:"🏛️", xp:15, board:true, steps:[
  {type:"intro", title:"Politique et gouvernance",
   desc:"Build vocabulary for discussing political systems, governance, and civic engagement at the B2 level.",
   goals:["Learn 15 key words about politics and governance","Discuss political movements and ideologies","Use formal political register vocabulary"]},

  {type:"teach", trg:"le fédéralisme", src:"federalism", pos:"noun", gender:"m",
   note:"A system of government where power is shared between central and regional governments.",
   example:"A: Le fédéralisme fonctionne bien en Suisse.\nB: Chaque canton a une grande autonomie.\nA: C'est un modèle pour d'autres pays?\nB: Certains le pensent, mais chaque pays est différent.",
   exampleSrc:"A: Federalism works well in Switzerland.\nB: Each canton has great autonomy.\nA: Is it a model for other countries?\nB: Some think so, but every country is different.",
   funFact:"From Latin 'foedus' (treaty/pact). Switzerland's federal system dates back to 1291."},

  {type:"teach", trg:"le communiste", src:"the communist", pos:"noun", gender:"m",
   note:"A supporter of communism. Also an adjective.\nFeminine (noun): communiste. Same form as adj.",
   example:"A: Le parti communiste était très influent en France.\nB: Surtout après la Seconde Guerre mondiale.\nA: Et aujourd'hui?\nB: Il existe toujours mais avec moins d'influence.",
   exampleSrc:"A: The Communist party was very influential in France.\nB: Especially after World War II.\nA: And today?\nB: It still exists but with less influence.",
   funFact:"From Latin 'communis' (common). The French Communist Party (PCF) was founded in 1920."},

  {type:"teach", trg:"le démographe", src:"the demographer", pos:"noun", gender:"m",
   note:"A specialist who studies population statistics.\nSame form for masculine and feminine.",
   example:"A: Le démographe annonce un vieillissement de la population.\nB: C'est un défi pour le système de retraites.\nA: Quelles solutions propose-t-il?\nB: Encourager la natalité et l'immigration.",
   exampleSrc:"A: The demographer announces an aging population.\nB: It's a challenge for the pension system.\nA: What solutions does he propose?\nB: Encouraging birth rates and immigration.",
   funFact:"From Greek 'demos' (people) + 'graphein' (to write). France has a strong tradition of demographic research."},

  {type:"teach", trg:"désapprobateur", src:"disapproving", pos:"adj", gender:null,
   note:"Showing disapproval. Describes looks, tones, or attitudes.\nFeminine: désapprobatrice.",
   example:"A: Son regard désapprobateur m'a mis mal à l'aise.\nB: Il n'était pas d'accord avec ta proposition?\nA: Clairement pas.\nB: Il aurait pu s'exprimer autrement.",
   exampleSrc:"A: His disapproving look made me uncomfortable.\nB: He didn't agree with your proposal?\nA: Clearly not.\nB: He could have expressed himself differently.",
   funFact:"From 'dés-' (dis-) + 'approbateur' (approving). The noun is 'désapprobation' (disapproval)."},

  {type:"teach", trg:"générationnel", src:"generational", pos:"adj", gender:null,
   note:"Related to a specific generation or age group.\nFeminine: générationnelle.",
   example:"A: Le conflit générationnel est éternel.\nB: Les jeunes et les anciens ne sont jamais d'accord?\nA: Pas sur tout, mais c'est normal.\nB: Chaque génération a ses propres valeurs.",
   exampleSrc:"A: The generational conflict is eternal.\nB: Young and old never agree?\nA: Not on everything, but that's normal.\nB: Each generation has its own values.",
   funFact:"From 'génération' + '-el'. The sociological study of generations is a major field in France."},

  {type:"teach", trg:"le déchaînement", src:"the unleashing / fury", pos:"noun", gender:"m",
   note:"A violent outburst of emotions, violence, or forces.\nLiterally: the unchaining.",
   example:"A: Le déchaînement de violence a choqué le pays.\nB: C'était totalement inattendu.\nA: Les causes sont profondes.\nB: Il faut un dialogue national.",
   exampleSrc:"A: The unleashing of violence shocked the country.\nB: It was completely unexpected.\nA: The causes run deep.\nB: We need a national dialogue.",
   funFact:"From 'dé-' (un-) + 'chaîne' (chain). Literally: releasing from chains. Very vivid imagery."},

  {type:"teach", trg:"l'agressivité", src:"aggressiveness", pos:"noun", gender:"f",
   note:"Hostile or violent behavior or attitude.\nUsed in psychology, politics, and daily life.",
   example:"A: L'agressivité dans le débat politique augmente.\nB: Les insultes remplacent les arguments.\nA: C'est mauvais pour la démocratie.\nB: On devrait revenir à un débat respectueux.",
   exampleSrc:"A: Aggressiveness in political debate is increasing.\nB: Insults are replacing arguments.\nA: It's bad for democracy.\nB: We should return to respectful debate.",
   funFact:"From Latin 'aggressivus'. French distinguishes 'agressivité' (attitude) from 'agression' (act)."},

  {type:"teach", trg:"généraliste", src:"generalist / general", pos:"adj", gender:null,
   note:"Covering a wide range rather than specializing.\nAlso a noun: 'un médecin généraliste' (GP).",
   example:"A: Ce journal est généraliste, il couvre tous les sujets.\nB: Pas spécialisé dans un domaine?\nA: Non, politique, culture, sport, économie.\nB: C'est utile pour avoir une vue d'ensemble.",
   exampleSrc:"A: This newspaper is generalist, it covers all subjects.\nB: Not specialized in one field?\nA: No, politics, culture, sports, economy.\nB: It's useful for getting an overview.",
   funFact:"From 'général' + '-iste'. A 'médecin généraliste' (GP) is the first point of healthcare in France."},

  {type:"teach", trg:"hiérarchiser", src:"to prioritize / to rank", pos:"verb", gender:null,
   note:"To organize in order of importance.\nEssential in planning and decision-making.",
   example:"A: Il faut hiérarchiser les priorités.\nB: Quelles sont les plus urgentes?\nA: La sécurité et l'éducation.\nB: D'accord, commençons par ces deux dossiers.",
   exampleSrc:"A: We need to prioritize the priorities.\nB: Which are the most urgent?\nA: Security and education.\nB: Okay, let's start with those two files.",
   funFact:"From 'hiérarchie' (hierarchy) + '-iser'. French loves turning nouns into verbs with this suffix."},

  {type:"mc", q:"Quel système politique partage le pouvoir entre gouvernement central et régions?",
   opts:["Le fédéralisme","Le communisme","La démocratie directe","La monarchie"],
   ans:"Le fédéralisme",
   hint:"Power is divided between a central authority and constituent regional units"},

  {type:"fb", s:"Le {1} annonce un vieillissement de la population dans les prochaines décennies.",
   a:["démographe"], opts:["démographe","communiste","galeriste","décorateur"],
   hint:"A specialist who studies population statistics and trends",
   sSrc:"The {1} announces an aging of the population in the coming decades."},

  {type:"teach", trg:"humilié", src:"humiliated", pos:"adj", gender:null,
   note:"Made to feel ashamed or degraded.\nFeminine: humiliée. A strong emotional word.",
   example:"A: Il se sent humilié par cette décision.\nB: On aurait dû le consulter avant.\nA: La communication est essentielle.\nB: Oui, personne ne devrait se sentir humilié au travail.",
   exampleSrc:"A: He feels humiliated by this decision.\nB: They should have consulted him first.\nA: Communication is essential.\nB: Yes, nobody should feel humiliated at work.",
   funFact:"From Latin 'humiliare' (to humble). Related to 'humilis' (low/humble) and 'humus' (ground)."},

  {type:"teach", trg:"ironiquement", src:"ironically", pos:"adv", gender:null,
   note:"In an ironic manner. Used when outcomes contradict expectations.\nVery common in French commentary.",
   example:"A: Ironiquement, c'est le critique qui a commis l'erreur.\nB: C'est le monde à l'envers!\nA: L'ironie du sort est souvent cruelle.\nB: Oui, la vie a un drôle de sens de l'humour.",
   exampleSrc:"A: Ironically, it was the critic who made the mistake.\nB: The world is upside down!\nA: The irony of fate is often cruel.\nB: Yes, life has a funny sense of humor.",
   funFact:"From 'ironique' + '-ment'. Irony is central to French intellectual culture and humor."},

  {type:"teach", trg:"immensément", src:"immensely", pos:"adv", gender:null,
   note:"To an extremely great degree.\nLess common than 'énormément' but more literary.",
   example:"A: Elle est immensément populaire.\nB: Des millions de fans dans le monde entier.\nA: Son dernier livre s'est vendu partout.\nB: Le succès est immensément mérité.",
   exampleSrc:"A: She is immensely popular.\nB: Millions of fans worldwide.\nA: Her latest book sold everywhere.\nB: The success is immensely deserved.",
   funFact:"From 'immense' + '-ment'. French adverbs typically add '-ment' to the feminine adjective form."},

  {type:"mc", q:"Quel verbe signifie 'organiser par ordre d'importance'?",
   opts:["Communiquer","Hiérarchiser","Démontrer","Inspecter"],
   ans:"Hiérarchiser",
   hint:"To rank things in a hierarchy from most to least important"},

  {type:"fb", s:"Son regard {1} m'a fait comprendre qu'il n'approuvait pas.",
   a:["désapprobateur"], opts:["désapprobateur","générationnel","généraliste","humilié"],
   hint:"A look that clearly shows disapproval or disagreement",
   sSrc:"His {1} look made me understand that he did not approve."},

  {type:"match", pairs:[
    {trg:"le fédéralisme", src:"federalism"},
    {trg:"hiérarchiser", src:"to prioritize"},
    {trg:"le déchaînement", src:"unleashing / fury"},
    {trg:"ironiquement", src:"ironically"},
    {trg:"humilié", src:"humiliated"}
  ]},

  {type:"mc", q:"Le conflit générationnel concerne:",
   opts:["Les problèmes techniques","Les questions environnementales","Les différences entre tranches d'âge","Les disputes entre pays"],
   ans:"Les différences entre tranches d'âge",
   hint:"A conflict that arises between different age groups and their values"},

  {type:"fb", s:"Le {1} de violence dans les rues a choqué tout le pays.",
   a:["déchaînement"], opts:["déchaînement","fédéralisme","démographe","communiste"],
   hint:"A violent outburst, like removing chains and letting fury loose",
   sSrc:"The {1} of violence in the streets shocked the entire country."},

  {type:"drag_fill", s:"L'{1} dans le débat politique remplace les {2} par des insultes.",
   blanks:{"1":"agressivité","2":"arguments"},
   pool:["agressivité","arguments","résultats","solutions"],
   hint:"Hostile behavior in political discourse replaces reasoned points with insults"},

  {type:"mc", q:"Quel adverbe signifie 'de façon contraire à ce qu'on attendait'?",
   opts:["Immensément","Généralement","Individuellement","Ironiquement"],
   ans:"Ironiquement",
   hint:"When the outcome is the opposite of what was expected"}
]};
export default LESSON_10;
