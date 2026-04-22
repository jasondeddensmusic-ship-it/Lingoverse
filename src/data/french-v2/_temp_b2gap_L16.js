const LESSON_16 = {
  id:"frv2_b2gap_l16", title:"Gestes et actions", icon:"\u{270B}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Gestes et actions",
     desc:"Action verbs and physical movements. From gripping to disguising, from brushing to crunching.",
     goals:["Learn 20 action and movement vocabulary words","Describe physical actions precisely in French","Use vivid verbs in narration"]},

    {type:"teach", trg:"agripper", src:"to grip, to grab", pos:"verb", gender:null,
     note:"Verb. To seize firmly. Reflexive: s'agripper = to cling to.",
     example:"A: Le bebe agrippe mon doigt tres fort.\nB: Il ne veut pas te lacher !",
     exampleSrc:"A: The baby grips my finger very tightly.\nB: He doesn't want to let you go!",
     funFact:"From 'gripper' (to seize). 'S'agripper a la vie' means to cling to life. Very dramatic."},

    {type:"teach", trg:"brosser", src:"to brush", pos:"verb", gender:null,
     note:"Verb. To clean or smooth with a brush. Reflexive: se brosser les dents.",
     example:"A: Brosse tes chaussures avant de sortir.\nB: D'accord, ou est la brosse ?",
     exampleSrc:"A: Brush your shoes before going out.\nB: Okay, where's the brush?",
     funFact:"'Se brosser' alone (without object) is Belgian slang for 'to go without, to miss out'."},

    {type:"teach", trg:"camoufler", src:"to camouflage, to disguise", pos:"verb", gender:null,
     note:"Verb. To hide or conceal something. Also used figuratively.",
     example:"A: Le soldat se camoufle dans les buissons.\nB: Il est presque invisible.",
     exampleSrc:"A: The soldier camouflages himself in the bushes.\nB: He's almost invisible.",
     funFact:"From Italian 'camuffare' (to disguise). WWI French artists invented military camouflage patterns."},

    {type:"teach", trg:"braconner", src:"to poach (hunt illegally)", pos:"verb", gender:null,
     note:"Verb. To hunt or fish illegally on someone else's land.",
     example:"A: Il a ete arrete pour avoir braconne.\nB: Le braconnage est un delit grave.",
     exampleSrc:"A: He was arrested for poaching.\nB: Poaching is a serious offense.",
     funFact:"From Germanic 'brakko' (hunting dog). A 'braconnier' is a poacher. Still a real problem in French forests."},

    {type:"teach", trg:"croquer", src:"to crunch, to sketch", pos:"verb", gender:null,
     note:"Verb. To bite into something crunchy. Also: to make a quick sketch.",
     example:"A: Croque cette pomme, elle est delicieuse.\nB: Mmm, elle est bien croquante !",
     exampleSrc:"A: Crunch into this apple, it's delicious.\nB: Mmm, it's so crunchy!",
     funFact:"A 'croque-monsieur' is a grilled ham and cheese you 'crunch'. 'Croquer' also means to sketch quickly."},

    {type:"mc",
     q:"Quel verbe signifie 'saisir fermement avec la main' ?",
     opts:["agripper","brosser","croquer","braconner"],
     ans:"agripper",
     hint:"From 'gripper' meaning to seize. The reflexive form means to cling desperately to something."},

    {type:"teach", trg:"attrouper", src:"to gather (a crowd)", pos:"verb", gender:null,
     note:"Verb. To form a crowd. Reflexive: s'attrouper = to gather around something.",
     example:"A: Les curieux se sont attroupes autour de l'accident.\nB: La police leur demande de circuler.",
     exampleSrc:"A: Onlookers gathered around the accident.\nB: Police asked them to move along.",
     funFact:"From 'troupe' (troop, group). 'Attroupement' (gathering) can have legal implications in French law."},

    {type:"teach", trg:"chanceler", src:"to stagger, to falter", pos:"verb", gender:null,
     note:"Verb. To sway unsteadily. Used literally and figuratively.",
     example:"A: Il a chancele en sortant du bar.\nB: Quelqu'un devrait l'aider.",
     exampleSrc:"A: He staggered coming out of the bar.\nB: Someone should help him.",
     funFact:"Same root as 'chancelier' (chancellor). The chancellor originally guarded the lattice (cancel) in courts."},

    {type:"teach", trg:"chiper", src:"to pinch, to swipe", pos:"verb", gender:null,
     note:"Verb. To steal something small. Informal, lighter than 'voler'.",
     example:"A: Qui a chipe mes lunettes ?\nB: Regarde sur ta tete !",
     exampleSrc:"A: Who swiped my glasses?\nB: Look on your head!",
     funFact:"Playful theft word. 'Chaparder' is a near-synonym. Both suggest petty, almost endearing pilfering."},

    {type:"fb",
     s:"Le soldat se {1} dans la vegetation pour ne pas etre vu.",
     a:["camoufle"],
     opts:["camoufle","brosse","agrippe","braconne"],
     hint:"To disguise or conceal. WWI French artists invented military patterns for this purpose.",
     sSrc:"The soldier {1} himself in the vegetation to avoid being seen."},

    {type:"teach", trg:"chouchouter", src:"to pamper, to coddle", pos:"verb", gender:null,
     note:"Verb. To spoil someone with affection and care.",
     example:"A: Ma grand-mere me chouchoute toujours.\nB: Profites-en, c'est precieux.",
     exampleSrc:"A: My grandmother always pampers me.\nB: Enjoy it, it's precious.",
     funFact:"From 'chouchou' (pet, favorite). The teacher's pet is 'le chouchou du prof'. Very affectionate word."},

    {type:"teach", trg:"chapeauter", src:"to oversee, to head up", pos:"verb", gender:null,
     note:"Verb. To supervise or be in charge of a project.",
     example:"A: C'est Marie qui chapeaute le projet.\nB: Elle est tres competente.",
     exampleSrc:"A: Marie is heading up the project.\nB: She's very competent.",
     funFact:"Literally 'to put a hat on'. The hat symbolizes authority. A vivid and uniquely French verb."},

    {type:"teach", trg:"d\u00e9ambuler", src:"to stroll, to wander", pos:"verb", gender:null,
     note:"Verb. To walk around without a clear destination. Leisurely movement.",
     example:"A: Nous avons deambule dans les rues de Paris.\nB: C'est la meilleure facon de decouvrir la ville.",
     exampleSrc:"A: We strolled through the streets of Paris.\nB: It's the best way to discover the city.",
     funFact:"From Latin 'deambulare'. 'Le deambulatoire' is the walkway behind a church altar. Very literary word."},

    {type:"mc",
     q:"Quel verbe signifie 'voler quelque chose de petit' de facon familiere ?",
     opts:["braconner","chiper","agripper","croquer"],
     ans:"chiper",
     hint:"A playful word for petty theft. Much lighter than 'voler'. Almost endearing."},

    {type:"teach", trg:"divertir", src:"to entertain, to amuse", pos:"verb", gender:null,
     note:"Verb. To provide amusement. Reflexive: se divertir = to have fun.",
     example:"A: Ce spectacle nous a bien divertis.\nB: Les comediens etaient excellents.",
     exampleSrc:"A: This show really entertained us.\nB: The comedians were excellent.",
     funFact:"From Latin 'divertere' (to turn aside). Pascal wrote that we 'divertir' ourselves to avoid thinking about death."},

    {type:"teach", trg:"dissoudre", src:"to dissolve", pos:"verb", gender:null,
     note:"Verb. To dissolve (substance or organization). Irregular conjugation.",
     example:"A: Le president a dissous l'Assemblee nationale.\nB: De nouvelles elections auront lieu.",
     exampleSrc:"A: The president dissolved the National Assembly.\nB: New elections will take place.",
     funFact:"In politics, 'dissoudre l'Assemblee' is a dramatic presidential power. Chirac used it in 1997 and lost."},

    {type:"teach", trg:"affleurer", src:"to surface, to show through", pos:"verb", gender:null,
     note:"Verb. To appear just at the surface. Literally: to be level with.",
     example:"A: Les rochers affleurent a maree basse.\nB: Il faut etre prudent en bateau.",
     exampleSrc:"A: The rocks surface at low tide.\nB: You have to be careful in a boat.",
     funFact:"From 'a fleur de' (level with). 'A fleur de peau' means on the surface of the skin (hypersensitive)."},

    {type:"fb",
     s:"C'est Marie qui {1} l'ensemble du projet.",
     a:["chapeaute"],
     opts:["chapeaute","camoufle","chouchoute","chancelle"],
     hint:"To oversee or head up. Literally means 'to put a hat on'. The hat symbolizes authority.",
     sSrc:"Marie is the one who {1} the entire project."},

    {type:"teach", trg:"abonder", src:"to abound, to agree enthusiastically", pos:"verb", gender:null,
     note:"Verb. To be plentiful. 'Abonder dans le sens de' = to agree wholeheartedly.",
     example:"A: Les exemples abondent dans ce domaine.\nB: Oui, la recherche est tres riche.",
     exampleSrc:"A: Examples abound in this field.\nB: Yes, the research is very rich.",
     funFact:"'Abonder dans le sens de quelqu'un' means to emphatically agree. A very useful debate expression."},

    {type:"teach", trg:"accaparer", src:"to monopolize, to hoard", pos:"verb", gender:null,
     note:"Verb. To take more than your fair share. To monopolize attention or resources.",
     example:"A: Il accapare la parole depuis une heure.\nB: Laisse les autres s'exprimer.",
     exampleSrc:"A: He's been monopolizing the conversation for an hour.\nB: Let others speak.",
     funFact:"From Italian 'accaparrare' (to buy up). During the Revolution, 'accapareurs' (hoarders) were despised."},

    {type:"match", pairs:[
      {trg:"camoufler", src:"to camouflage"},
      {trg:"chouchouter", src:"to pamper"},
      {trg:"d\u00e9ambuler", src:"to stroll"},
      {trg:"dissoudre", src:"to dissolve"},
      {trg:"accaparer", src:"to monopolize"}
    ]},

    {type:"mc",
     q:"Quel verbe decrit le fait de marcher tranquillement sans but precis ?",
     opts:["d\u00e9ambuler","chanceler","agripper","attrouper"],
     ans:"d\u00e9ambuler",
     hint:"A literary word from Latin meaning to walk around. Think of strolling the streets of Paris."},

    {type:"fb",
     s:"Les curieux se sont {1} autour du spectacle de rue.",
     a:["attroup\u00e9s"],
     opts:["attroup\u00e9s","camoufl\u00e9s","divertis","dissous"],
     hint:"To gather in a crowd around something. From 'troupe' (troop, group).",
     sSrc:"Onlookers {1} around the street performance."}
  ]
};
export default LESSON_16;
