const LESSON_20 = {
  id:"frv2_b2gA_l20", title:"Curiosites et rarete", icon:"\u{1F48E}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Curiosites et rarete",
     desc:"Explore unusual, rare, and culturally specific vocabulary at the B2 level. From forgotten words to contemporary slang, expand your expressive range.",
     goals:["Learn 14 rare and curious words","Use precise vocabulary for unusual situations","Understand cultural specificities of French"]},

    {type:"teach", trg:"un prestidigitateur", src:"a magician, a conjuror", pos:"noun", gender:"m",
     note:"Masculine noun. Feminine: une prestidigitatrice.\nA stage magician. From Latin 'praesto digiti' (quick fingers).",
     example:"A: Le prestidigitateur a fait disparaitre la colombe.\nB: Comment fait-il ? C'est incroyable !",
     exampleSrc:"A: The magician made the dove disappear.\nB: How does he do it? It's incredible!",
     funFact:"France has a rich magic tradition. Robert-Houdin (19th century) is considered the father of modern magic. Houdini took his name."},

    {type:"teach", trg:"un guet-apens", src:"an ambush, a trap", pos:"noun", gender:"m",
     note:"Masculine compound noun. A planned trap or surprise attack.\nPlural: des guets-apens.",
     example:"A: Ils sont tombes dans un guet-apens.\nB: L'ennemi les attendait dans la foret.",
     exampleSrc:"A: They fell into an ambush.\nB: The enemy was waiting for them in the forest.",
     funFact:"Also used figuratively: 'C'etait un guet-apens amoureux' (a romantic trap). The word sounds dramatic in any context."},

    {type:"teach", trg:"un amuse-gueule", src:"an appetizer, a snack", pos:"noun", gender:"m",
     note:"Masculine compound noun. Small bites served before a meal.\nLiterally 'mouth-amuser'. Plural invariable.",
     example:"A: Les amuse-gueules sont delicieux ce soir.\nB: Essaie les feuillete au fromage.",
     exampleSrc:"A: The appetizers are delicious tonight.\nB: Try the cheese puff pastries.",
     funFact:"In fine dining, the chef often sends complimentary amuse-gueules. They showcase the restaurant's style."},

    {type:"teach", trg:"le jamais-vu", src:"the never-seen, jamais vu", pos:"noun", gender:"m",
     note:"Masculine compound noun. The eerie feeling that a familiar thing seems new.\nOpposite of deja vu.",
     example:"A: J'ai eu un etrange sentiment de jamais-vu en rentrant chez moi.\nB: C'est un phenomene psychologique connu.",
     exampleSrc:"A: I had a strange feeling of jamais-vu coming home.\nB: It's a known psychological phenomenon.",
     funFact:"Both 'deja vu' and 'jamais vu' are French terms used worldwide in psychology. French coined the vocabulary of memory."},

    {type:"teach", trg:"la lese-majeste", src:"lese-majesty, an offense to authority", pos:"noun", gender:"f",
     note:"Feminine compound noun. An insult or offense against a ruler or authority.\nFrom Latin 'laesa maiestas'.",
     example:"A: Critiquer le chef, c'est presque de la lese-majeste ici.\nB: L'ambiance est vraiment hierarchique.",
     exampleSrc:"A: Criticizing the boss is almost lese-majesty here.\nB: The atmosphere is really hierarchical.",
     funFact:"Still a crime in some monarchies. In French, it is now used ironically for any perceived insult to authority."},

    {type:"mc",
     q:"Quel mot designe un piege ou une embuscade planifiee ?",
     opts:["un guet-apens","un amuse-gueule","un prestidigitateur","un jamais-vu"],
     ans:"un guet-apens",
     hint:"A planned trap where attackers lie in wait. Used literally and figuratively."},

    {type:"teach", trg:"le passe-passe", src:"the sleight of hand, the trick", pos:"noun", gender:"m",
     note:"Masculine compound noun. A magic trick or deceptive maneuver.\n'Tour de passe-passe' = sleight of hand.",
     example:"A: C'est un tour de passe-passe comptable.\nB: Les chiffres ont ete manipules.",
     exampleSrc:"A: It's an accounting trick.\nB: The numbers were manipulated.",
     funFact:"Almost always used in the expression 'tour de passe-passe'. Applies to magic, politics, and financial deception."},

    {type:"teach", trg:"le pharaon", src:"the pharaoh", pos:"noun", gender:"m",
     note:"Masculine noun. An ancient Egyptian ruler.\nAlso: a card game popular in 18th century France.",
     example:"A: Les pharaons ont bati les pyramides.\nB: C'est un exploit d'ingenierie incroyable.",
     exampleSrc:"A: The pharaohs built the pyramids.\nB: It's an incredible feat of engineering.",
     funFact:"Napoleon's Egyptian campaign (1798) sparked Egyptomania in France. The Rosetta Stone was found by French soldiers."},

    {type:"teach", trg:"la guise", src:"the manner, the way (in 'en guise de')", pos:"noun", gender:"f",
     note:"Feminine noun. Almost always in 'en guise de' (by way of, instead of).\n'A sa guise' = as one pleases.",
     example:"A: En guise de reponse, il a souri.\nB: Ce sourire en disait long.",
     exampleSrc:"A: By way of response, he smiled.\nB: That smile said a lot.",
     funFact:"'A votre guise' (as you please) is a polite but slightly cold way to let someone do what they want."},

    {type:"fb",
     s:"C'est un tour de {1} financier pour cacher les pertes.",
     a:["passe-passe"],
     opts:["passe-passe","guise","lese-majeste","jamais-vu"],
     hint:"A sleight of hand or deceptive trick. Used for deception in magic and finance.",
     sSrc:"It's a financial {1} trick to hide the losses."},

    {type:"teach", trg:"le plouc", src:"the bumpkin, the hick", pos:"noun", gender:"m",
     note:"Masculine noun. A rural, unsophisticated person.\nInformal and mildly insulting.",
     example:"A: Il se comporte comme un plouc.\nB: Ses manieres a table sont terribles.",
     exampleSrc:"A: He behaves like a bumpkin.\nB: His table manners are terrible.",
     funFact:"'Plouc' comes from Breton place names starting with 'plou-' (parish). Originally mocked rural Bretons."},

    {type:"teach", trg:"le cleptomane", src:"the kleptomaniac", pos:"noun", gender:"m",
     note:"Masculine noun. Feminine: une cleptomane.\nSomeone who compulsively steals. Also: kleptomane.",
     example:"A: C'est un cleptomane, il ne peut pas s'en empecher.\nB: Il a besoin d'aide professionnelle.",
     exampleSrc:"A: He's a kleptomaniac, he can't help it.\nB: He needs professional help.",
     funFact:"Both spellings 'cleptomane' and 'kleptomane' are accepted. The condition is recognized as a disorder in France."},

    {type:"teach", trg:"le presbyte", src:"the farsighted person", pos:"noun", gender:"m",
     note:"Also adjective. Cannot see clearly up close.\nFrom Greek 'presbus' (old man).",
     example:"A: Je deviens presbyte avec l'age.\nB: C'est normal apres quarante ans.",
     exampleSrc:"A: I'm becoming farsighted with age.\nB: It's normal after forty.",
     funFact:"Presbytie typically starts around age 40-45. The Greek root links old age to this condition."},

    {type:"mc",
     q:"Quelle expression signifie 'comme il le souhaite, a sa maniere' ?",
     opts:["a son passe-passe","a sa guise","a sa lese-majeste","a son guet-apens"],
     ans:"a sa guise",
     hint:"'As one pleases' or 'in one's own way'. A polite but sometimes cold expression."},

    {type:"teach", trg:"le polytechnicien", src:"the Polytechnique graduate", pos:"noun", gender:"m",
     note:"Masculine noun. Feminine: une polytechnicienne.\nGraduate of France's elite Ecole Polytechnique.",
     example:"A: C'est un polytechnicien, il est brillant.\nB: L'X forme les meilleurs ingenieurs.",
     exampleSrc:"A: He's a Polytechnique graduate, he's brilliant.\nB: 'X' trains the best engineers.",
     funFact:"'L'X' (short for Polytechnique) is one of France's Grandes Ecoles. Graduates run many major French companies."},

    {type:"fb",
     s:"En {1} de reponse, il a hausse les epaules.",
     a:["guise"],
     opts:["guise","passe-passe","lese-majeste","pharaon"],
     hint:"By way of, instead of. Used in the expression 'en ___ de'.",
     sSrc:"By way of response, he shrugged his shoulders."},

    {type:"match", pairs:[
      {trg:"prestidigitateur", src:"magician"},
      {trg:"amuse-gueule", src:"appetizer"},
      {trg:"jamais-vu", src:"never-seen feeling"},
      {trg:"plouc", src:"bumpkin"},
      {trg:"polytechnicien", src:"Polytechnique graduate"}
    ]},

    {type:"mc",
     q:"Quel phenomene psychologique est l'oppose du deja vu ?",
     opts:["la lese-majeste","le guet-apens","le jamais-vu","le passe-passe"],
     ans:"le jamais-vu",
     hint:"When something familiar suddenly feels completely new and unfamiliar. French coined both terms."}
  ]
};
export default LESSON_20;
