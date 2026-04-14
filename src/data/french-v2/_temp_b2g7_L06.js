const LESSON_6 = {
  id:"frv2_b2g7_l6", title:"Travail et economie", icon:"\u{1F4BC}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Travail et economie",
     desc:"Master vocabulary for discussing work, the economy, and professional environments.",
     goals:["Learn 15 work and economy words","Discuss business strategies","Express opinions on economic issues"]},

    {type:"teach", trg:"la main-d'oeuvre", src:"labor, workforce", pos:"noun", gender:"f",
     note:"Feminine noun. Workers available for employment.\nHyphenated compound noun.",
     example:"A: La main-d'oeuvre qualifiee manque dans ce secteur.\nB: Il faut investir dans la formation.",
     exampleSrc:"A: Skilled labor is lacking in this sector.\nB: We need to invest in training.",
     funFact:"Literally 'hand of work'. The term dates to when manual labor was the primary form of employment."},

    {type:"teach", trg:"la micro-entreprise", src:"a micro-business", pos:"noun", gender:"f",
     note:"Feminine noun. A very small business, often one person.",
     example:"A: J'ai cree ma micro-entreprise l'annee derniere.\nB: Ca marche bien ?",
     exampleSrc:"A: I created my micro-business last year.\nB: Is it going well?",
     funFact:"France's 'auto-entrepreneur' status (now 'micro-entreprise') was created in 2009. Over 2 million French people use it."},

    {type:"teach", trg:"le mixage", src:"mixing (audio)", pos:"noun", gender:"m",
     note:"Masculine noun. The process of combining audio tracks.",
     example:"A: Le mixage de cet album a pris six mois.\nB: Le resultat en valait la peine.",
     exampleSrc:"A: The mixing of this album took six months.\nB: The result was worth it.",
     funFact:"French uses both 'mixage' (audio) and 'mixite' (social mixing). Despite looking similar, they come from different roots."},

    {type:"teach", trg:"le commercial", src:"a sales representative", pos:"noun", gender:"m",
     note:"Masculine noun when referring to a person. Feminine: la commerciale.",
     example:"A: Le commercial a conclu trois ventes aujourd'hui.\nB: C'est un excellent resultat.",
     exampleSrc:"A: The sales rep closed three sales today.\nB: That's an excellent result.",
     funFact:"In France, 'un commercial' is a specific job title. The adjective form means 'related to commerce'."},

    {type:"mc",
     q:"Quel terme designe l'ensemble des travailleurs disponibles ?",
     opts:["la main-d'oeuvre","la micro-entreprise","le commercial","le mixage"],
     ans:"la main-d'oeuvre",
     hint:"Literally 'hand of work'. All the workers available for hire."},

    {type:"teach", trg:"la matrice", src:"a matrix, a mold", pos:"noun", gender:"f",
     note:"Feminine noun. A pattern or template. Also: womb (archaic).",
     example:"A: Cette matrice sert de modele pour tous les rapports.\nB: Suivez-la a la lettre.",
     exampleSrc:"A: This template serves as a model for all reports.\nB: Follow it to the letter.",
     funFact:"From Latin 'matrix' meaning womb. In printing, a 'matrice' is the mold for casting type. In math, it's a number grid."},

    {type:"teach", trg:"la materialisation", src:"materialization", pos:"noun", gender:"f",
     note:"Feminine noun. The process of making something real or concrete.",
     example:"A: La materialisation de ce projet prendra du temps.\nB: Rome ne s'est pas construite en un jour.",
     exampleSrc:"A: The materialization of this project will take time.\nB: Rome wasn't built in a day.",
     funFact:"In French bureaucracy, 'la materialisation' often means the physical implementation of a policy or plan."},

    {type:"teach", trg:"materiellement", src:"materially, practically", pos:"adv", gender:null,
     note:"Adverb. In terms of physical or practical reality.",
     example:"A: C'est materiellement impossible dans ce delai.\nB: Il nous faut plus de temps.",
     exampleSrc:"A: It's materially impossible within this deadline.\nB: We need more time.",
     funFact:"Often used to stress physical impossibility: 'materiellement impossible' is stronger than just 'impossible'."},

    {type:"fb",
     s:"La {1} de ce projet ambitieux necessite un budget considerable.",
     a:["materialisation"],
     opts:["materialisation","matrice","main-d'oeuvre","micro-entreprise"],
     hint:"Turning an abstract plan into concrete reality.",
     sSrc:"The {1} of this ambitious project requires a considerable budget."},

    {type:"teach", trg:"la maisonnee", src:"the household", pos:"noun", gender:"f",
     note:"Feminine noun. All the people living in one house.",
     example:"A: Toute la maisonnee etait reveeillee a l'aube.\nB: Les enfants n'ont pas dormi.",
     exampleSrc:"A: The entire household was awake at dawn.\nB: The children didn't sleep.",
     funFact:"A warm, slightly old-fashioned word. More poetic than 'menage' or 'foyer'. Evokes family togetherness."},

    {type:"teach", trg:"la liqueur", src:"a liqueur", pos:"noun", gender:"f",
     note:"Feminine noun. A sweet alcoholic drink made with fruit or herbs.",
     example:"A: Cette liqueur de framboise est delicieuse.\nB: C'est une recette de famille.",
     exampleSrc:"A: This raspberry liqueur is delicious.\nB: It's a family recipe.",
     funFact:"France produces iconic liqueurs: Chartreuse (by monks since 1737), Cointreau, Grand Marnier. Each region has its specialty."},

    {type:"teach", trg:"la marquise", src:"a marchioness, an awning", pos:"noun", gender:"f",
     note:"Feminine noun. A noblewoman, or a glass canopy over a door.",
     example:"A: La marquise de l'hotel protege de la pluie.\nB: C'est aussi tres elegant.",
     exampleSrc:"A: The hotel's awning protects from rain.\nB: It's also very elegant.",
     funFact:"The famous opening 'La marquise sortit a cinq heures' (The marchioness went out at five) is a mock of bad novels, cited by Breton."},

    {type:"mc",
     q:"Quel mot designe un modele ou un patron a suivre ?",
     opts:["la matrice","la maisonnee","la liqueur","la marquise"],
     ans:"la matrice",
     hint:"In math, it's a grid of numbers. In printing, it's a mold for type."},

    {type:"teach", trg:"la martingale", src:"a martingale, a sure system", pos:"noun", gender:"f",
     note:"Feminine noun. A betting strategy or a belt at the back of a coat.",
     example:"A: Il croit avoir trouve la martingale au casino.\nB: Ca n'existe pas, il va tout perdre.",
     exampleSrc:"A: He thinks he's found the winning formula at the casino.\nB: It doesn't exist, he'll lose everything.",
     funFact:"In probability theory, a martingale is a fair game where future value equals present value. The fashion term is unrelated."},

    {type:"teach", trg:"la massue", src:"a club, a bludgeon", pos:"noun", gender:"f",
     note:"Feminine noun. A heavy weapon. Figuratively: a crushing blow.",
     example:"A: Cette nouvelle a fait l'effet d'une massue.\nB: Personne ne s'y attendait.",
     exampleSrc:"A: This news hit like a bludgeon.\nB: No one expected it.",
     funFact:"'Argument massue' means a knockout argument. 'Coup de massue' is a devastating blow, often financial."},

    {type:"fb",
     s:"L'annonce du licenciement a fait l'effet d'un coup de {1}.",
     a:["massue"],
     opts:["massue","matrice","marquise","martingale"],
     hint:"A heavy prehistoric weapon. Used figuratively for a devastating shock.",
     sSrc:"The layoff announcement hit like a blow from a {1}."},

    {type:"match", pairs:[
      {trg:"main-d'oeuvre", src:"workforce"},
      {trg:"micro-entreprise", src:"micro-business"},
      {trg:"commercial", src:"sales rep"},
      {trg:"maisonnee", src:"household"},
      {trg:"massue", src:"bludgeon"}
    ]},

    {type:"mc",
     q:"Quel adverbe insiste sur l'impossibilite physique de realiser quelque chose ?",
     opts:["materiellement","magistralement","momentanement","malgre"],
     ans:"materiellement",
     hint:"Stresses that something cannot physically be done, not just difficult."},

    {type:"fb",
     s:"En France, le statut de {1} simplifie la creation d'activite.",
     a:["micro-entreprise"],
     opts:["micro-entreprise","main-d'oeuvre","matrice","maisonnee"],
     hint:"A very small business structure, often for solo entrepreneurs.",
     sSrc:"In France, {1} status simplifies starting a business."}
  ]
};
export default LESSON_6;
