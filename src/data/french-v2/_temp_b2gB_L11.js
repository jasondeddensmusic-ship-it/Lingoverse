const LESSON_11 = {
  id:"frv2_b2gB_l11", title:"Religion et societe", icon:"\u{1F54C}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Religion et societe",
     desc:"Explore vocabulary at the intersection of religion, secularism, and society in France.",
     goals:["Learn 10 terms about religion and secularism","Discuss laicite in French","Express nuanced views on belief"]},

    {type:"teach", trg:"une paroisse", src:"a parish", pos:"noun", gender:"f",
     note:"Feminine noun. A local church community and its geographic area.\nUn paroissien = a parishioner.",
     example:"A: La paroisse organise une fete ce dimanche.\nB: Tout le village est invite.",
     exampleSrc:"A: The parish is organizing a celebration this Sunday.\nB: The whole village is invited.",
     funFact:"France has over 36,000 parishes, roughly one per commune. Many rural churches are now maintained by volunteers."},

    {type:"teach", trg:"un mecreant", src:"a non-believer, a miscreant", pos:"noun", gender:"m",
     note:"Masculine noun. Originally an unbeliever, now also a rascal.\nFeminine: une mecreante. Can be playful or serious.",
     example:"A: Au Moyen Age, les mecreants etaient persecutes.\nB: La tolerance religieuse est venue bien plus tard.",
     exampleSrc:"A: In the Middle Ages, non-believers were persecuted.\nB: Religious tolerance came much later.",
     funFact:"Mecreant comes from 'mes-' (mis-) + 'creant' (believing). It shifted from serious theological term to playful insult over centuries."},

    {type:"teach", trg:"l'idealisation", src:"idealization", pos:"noun", gender:"f",
     note:"Feminine noun. Regarding something or someone as perfect.\nL'idealisation du passe = idealizing the past.",
     example:"A: L'idealisation de cette epoque est dangereuse.\nB: La realite etait bien moins rose.",
     exampleSrc:"A: The idealization of this era is dangerous.\nB: Reality was far less rosy.",
     funFact:"Rousseau's idealization of the 'noble savage' shaped French intellectual thought for centuries. His influence persists today."},

    {type:"teach", trg:"l'integrisme", src:"fundamentalism", pos:"noun", gender:"m",
     note:"Masculine noun. Strict adherence to traditional religious doctrine.\nUn integriste = a fundamentalist. Can apply to any religion.",
     example:"A: L'integrisme menace le vivre-ensemble.\nB: Toutes les religions en ont des formes.",
     exampleSrc:"A: Fundamentalism threatens social cohesion.\nB: All religions have forms of it.",
     funFact:"The French coined 'integrisme' in the Catholic context before it was applied to Islam. It originally described reactionary Catholics."},

    {type:"teach", trg:"l'interiorisation", src:"internalization", pos:"noun", gender:"f",
     note:"Feminine noun. The process of absorbing values or emotions internally.\nA key concept in psychology and sociology.",
     example:"A: L'interiorisation des normes sociales commence des l'enfance.\nB: Les enfants imitent d'abord, puis integrent les regles.",
     exampleSrc:"A: The internalization of social norms begins in childhood.\nB: Children first imitate, then integrate the rules.",
     funFact:"Bourdieu's concept of 'habitus' describes the interiorisation of social class behaviors. It remains central to French sociology."},

    {type:"teach", trg:"la diabolisation", src:"demonization", pos:"noun", gender:"f",
     note:"Feminine noun. The act of portraying someone as evil.\nDiaboliser = to demonize. Common in political discourse.",
     example:"A: La diabolisation de l'adversaire est une strategie politique.\nB: Ca empeche tout debat constructif.",
     exampleSrc:"A: The demonization of the opponent is a political strategy.\nB: It prevents any constructive debate.",
     funFact:"In French politics, 'dediabolisation' describes a party's effort to appear more moderate. The term became prominent in the 2010s."},

    {type:"teach", trg:"un pharaon", src:"a pharaoh", pos:"noun", gender:"m",
     note:"Masculine noun. An ancient Egyptian ruler.\nAlso used figuratively for an all-powerful leader.",
     example:"A: Les pharaons ont bati les pyramides.\nB: Ces monuments temoignent de leur puissance.",
     exampleSrc:"A: The pharaohs built the pyramids.\nB: These monuments testify to their power.",
     funFact:"France has a special connection to Egypt. Napoleon's expedition (1798) and Champollion's deciphering of hieroglyphs are national pride."},

    {type:"teach", trg:"le positivisme", src:"positivism", pos:"noun", gender:"m",
     note:"Masculine noun. Auguste Comte's philosophy based on scientific observation.\nOnly facts and evidence matter, not speculation.",
     example:"A: Le positivisme a influence la science moderne.\nB: Auguste Comte en est le fondateur.",
     exampleSrc:"A: Positivism influenced modern science.\nB: Auguste Comte is its founder.",
     funFact:"Comte's positivism is on Brazil's flag: 'Ordem e Progresso' (Order and Progress) comes directly from his philosophy."},

    {type:"teach", trg:"le presbytere", src:"the presbytery, the rectory", pos:"noun", gender:"m",
     note:"Masculine noun. The residence of a parish priest.\nA cultural landmark in many French villages.",
     example:"A: Le presbytere a ete transforme en musee.\nB: C'est un bel exemple de reconversion du patrimoine.",
     exampleSrc:"A: The presbytery was turned into a museum.\nB: It's a fine example of heritage conversion.",
     funFact:"'Le presbytere n'a rien perdu de son charme ni le jardin de son eclat' is a famous Surrealist phrase by Andre Breton."},

    {type:"teach", trg:"le participe", src:"the participle", pos:"noun", gender:"m",
     note:"Masculine noun. A verb form used as adjective or in compound tenses.\nParticipe passe = past participle. Participe present = present participle.",
     example:"A: Le participe passe s'accorde avec le sujet pour les verbes avec etre.\nB: C'est une regle que beaucoup de Francais oublient.",
     exampleSrc:"A: The past participle agrees with the subject for verbs using etre.\nB: It's a rule many French people forget.",
     funFact:"Past participle agreement is the most tested grammar point in French exams. Even native speakers struggle with it."},

    {type:"mc", q:"Que signifie 'integrisme'?",
     opts:["Adherence stricte a une doctrine religieuse","Integration sociale","Intergroupement politique","Calcul integral"],
     ans:"Adherence stricte a une doctrine religieuse",
     hint:"The noun describes rigid, uncompromising religious traditionalism"},

    {type:"fb", s:"Le {1} a ete transforme en gite rural.",
     a:["presbytere"], opts:["presbytere","pharaon","positivisme","participe"],
     hint:"The residence of a parish priest, often a historic building in French villages",
     sSrc:"The {1} was converted into a rural cottage."},

    {type:"mc", q:"Qui a fonde le positivisme?",
     opts:["Rousseau","Auguste Comte","Voltaire","Descartes"],
     ans:"Auguste Comte",
     hint:"This French philosopher developed a philosophy based purely on scientific observation"},

    {type:"match", pairs:[
      {trg:"une paroisse", src:"a parish"},
      {trg:"un mecreant", src:"a non-believer"},
      {trg:"la diabolisation", src:"demonization"},
      {trg:"un pharaon", src:"a pharaoh"}
    ]},

    {type:"fb", s:"La {1} de l'adversaire nuit au debat democratique.",
     a:["diabolisation"], opts:["diabolisation","idealisation","interiorisation","paroisse"],
     hint:"Portraying your opponent as evil or demonic to discredit them",
     sSrc:"The {1} of the opponent harms democratic debate."},

    {type:"mc", q:"Le participe passe s'accorde avec le sujet quand le verbe auxiliaire est:",
     opts:["faire","aller","etre","avoir"],
     ans:"etre",
     hint:"This auxiliary verb triggers agreement between participle and subject"},

    {type:"fb", s:"L'{1} des valeurs familiales se fait des l'enfance.",
     a:["interiorisation"], opts:["interiorisation","idealisation","integrisme","diabolisation"],
     hint:"The psychological process of absorbing external values into one's own belief system",
     sSrc:"The {1} of family values happens from childhood."},

    {type:"mc", q:"'Mecreant' signifiait a l'origine:",
     opts:["Criminel","Paysan","Soldat","Non-croyant"],
     ans:"Non-croyant",
     hint:"The word combines mes- (mis-) with creant (believing)"},

    {type:"fb", s:"L'{1} du passe est un piege frequent.",
     a:["idealisation"], opts:["idealisation","integrisme","positivisme","participe"],
     hint:"Regarding a past era as perfect when reality was more complex",
     sSrc:"The {1} of the past is a frequent trap."},

    {type:"match", pairs:[
      {trg:"l'idealisation", src:"idealization"},
      {trg:"l'interiorisation", src:"internalization"},
      {trg:"le positivisme", src:"positivism"},
      {trg:"le participe", src:"participle"}
    ]}
  ]
};
export default LESSON_11;
