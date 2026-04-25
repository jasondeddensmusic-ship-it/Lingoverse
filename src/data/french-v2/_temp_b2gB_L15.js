const LESSON_15 = {
  id:"frv2_b2gB_l15", title:"Ville et urbanisme", icon:"\u{1F3D9}\uFE0F", xp:15, board:true,
  steps:[
    {type:"intro", title:"Ville et urbanisme",
     desc:"Learn vocabulary for discussing urban life, city planning, and community spaces in French.",
     goals:["Learn 10 urban life and community terms","Discuss city planning","Describe neighborhoods"]},

    {type:"teach", trg:"les cabinets", src:"the offices, the toilet (euphemism)", pos:"noun", gender:"m",
     note:"Masculine plural noun. Professional offices (cabinet medical), or a polite word for toilet.\nUn cabinet = a single office. Les cabinets = restrooms.",
     example:"A: Ou sont les cabinets, s'il vous plait?\nB: Au fond du couloir a gauche.",
     exampleSrc:"A: Where are the restrooms, please?\nB: At the end of the corridor on the left.",
     funFact:"'Les cabinets' for toilet is old-fashioned but still understood. Young people say 'les toilettes'. Very formal: 'les commodites'."},

    {type:"teach", trg:"un compte-goutte", src:"a dropper, in dribs and drabs", pos:"noun", gender:"m",
     note:"Masculine noun. A device for dispensing liquid drop by drop.\nAu compte-gouttes = in very small amounts, sparingly.",
     example:"A: Les informations arrivent au compte-gouttes.\nB: C'est frustrant, on aimerait en savoir plus.",
     exampleSrc:"A: Information is coming in dribs and drabs.\nB: It's frustrating, we'd like to know more.",
     funFact:"'Au compte-gouttes' is one of the most vivid French expressions. It perfectly captures the frustration of slow, insufficient supply."},

    {type:"teach", trg:"une lese-majeste", src:"lese-majesty, treason against authority", pos:"noun", gender:"f",
     note:"Feminine compound noun. An offense against a ruler's dignity.\nLese (injured) + majeste (majesty). Now used figuratively.",
     example:"A: Critiquer le chef, c'est presque de la lese-majeste ici.\nB: Personne n'ose rien dire.",
     exampleSrc:"A: Criticizing the boss is almost lese-majesty here.\nB: Nobody dares say anything.",
     funFact:"Lese-majeste was a real crime in France until the Revolution. Today it is used ironically for any challenge to authority."},

    {type:"teach", trg:"un porte-a-faux", src:"an overhang, an awkward position", pos:"noun", gender:"m",
     note:"Masculine compound noun. An architectural overhang, or being in a difficult position.\nEtre en porte-a-faux = to be in an awkward situation.",
     example:"A: Cette declaration le met en porte-a-faux.\nB: Il va devoir se justifier devant ses collegues.",
     exampleSrc:"A: This statement puts him in an awkward position.\nB: He'll have to justify himself to his colleagues.",
     funFact:"In architecture, porte-a-faux describes a structure that extends beyond its support. The figurative meaning captures that same instability."},

    {type:"teach", trg:"un pou", src:"a louse", pos:"noun", gender:"m",
     note:"Masculine noun. A parasitic insect. Plural: des poux.\nChercher des poux a quelqu'un = to pick a fight.",
     example:"A: Mon fils a attrape des poux a l'ecole.\nB: C'est classique a la rentree, traite-le vite.",
     exampleSrc:"A: My son caught lice at school.\nB: It's classic at back-to-school time, treat it quickly.",
     funFact:"French pharmacies sell dozens of anti-lice products. The 'alerte poux' (lice alert) note from school is a parental rite of passage."},

    {type:"teach", trg:"un clou", src:"a nail", pos:"noun", gender:"m",
     note:"Masculine noun. A metal fastener, or the highlight of something.\nLe clou du spectacle = the highlight of the show. Des clous! = no way!",
     example:"A: Le clou du spectacle etait le feu d'artifice.\nB: Tout le monde a applaudi pendant cinq minutes.",
     exampleSrc:"A: The highlight of the show was the fireworks.\nB: Everyone applauded for five minutes.",
     funFact:"'Des clous!' (literally 'nails!') is an old French way of saying 'no way!' or 'not a chance!' Still heard in older generations."},

    {type:"teach", trg:"un mutualiste", src:"a mutualist, a mutual insurance member", pos:"noun", gender:"m",
     note:"Masculine noun. A member of a mutual benefit society.\nFeminine: une mutualiste. La mutuelle = mutual insurance.",
     example:"A: Les mutualistes beneficient de tarifs reduits.\nB: C'est l'avantage de la couverture complementaire.",
     exampleSrc:"A: Mutual members benefit from reduced rates.\nB: That's the advantage of supplementary coverage.",
     funFact:"Over 95% of French people have a 'mutuelle' (supplementary health insurance) on top of Securite Sociale. It covers what the state does not."},

    {type:"teach", trg:"un ex", src:"an ex, a former partner", pos:"noun", gender:"m",
     note:"Masculine or feminine noun. A former romantic partner.\nMon ex = my ex. Also prefix: ex-president, ex-mari.",
     example:"A: J'ai croise mon ex au supermarche.\nB: C'etait genant ou normal?",
     exampleSrc:"A: I ran into my ex at the supermarket.\nB: Was it awkward or normal?",
     funFact:"French uses 'ex' as casually as English. It entered everyday French in the 1980s. Before that, people said 'mon ancien compagnon'."},

    {type:"teach", trg:"le demi-tour", src:"the U-turn, the about-face", pos:"noun", gender:"m",
     note:"Masculine noun. Turning back in the opposite direction.\nFaire demi-tour = to turn around. Also figurative: a policy reversal.",
     example:"A: Le gouvernement a fait demi-tour sur cette reforme.\nB: La pression populaire etait trop forte.",
     exampleSrc:"A: The government made a U-turn on this reform.\nB: Popular pressure was too strong.",
     funFact:"'Demi-tour!' is a military command. In politics, a government 'demi-tour' is always embarrassing and heavily covered by media."},

    {type:"teach", trg:"le non-sens", src:"nonsense", pos:"noun", gender:"m",
     note:"Masculine noun. Something absurd or meaningless.\nC'est un non-sens = it's nonsensical. Borrowed from English.",
     example:"A: Cette decision est un non-sens economique.\nB: Elle va couter bien plus qu'elle ne rapportera.",
     exampleSrc:"A: This decision is economic nonsense.\nB: It will cost far more than it will bring in.",
     funFact:"French borrowed 'non-sens' from English, but English originally borrowed 'nonsense' from French via 'non' + 'sens'. Full circle."},

    {type:"mc", q:"Que signifie 'au compte-gouttes'?",
     opts:["En tres petites quantites","Rapidement","Genereusement","En secret"],
     ans:"En tres petites quantites",
     hint:"A dropper releases liquid one drop at a time, suggesting very slow, sparse delivery"},

    {type:"fb", s:"Le {1} du spectacle etait le concert final.",
     a:["clou"], opts:["clou","pou","demi-tour","porte-a-faux"],
     hint:"The noun that means both a metal fastener and the highlight of an event",
     sSrc:"The {1} of the show was the final concert."},

    {type:"mc", q:"'Etre en porte-a-faux' signifie:",
     opts:["Etre au sommet","Etre dans une situation inconfortable","Etre en equilibre parfait","Etre en retard"],
     ans:"Etre dans une situation inconfortable",
     hint:"Like a structure extending beyond its support, you are in an unstable position"},

    {type:"match", pairs:[
      {trg:"un compte-goutte", src:"a dropper"},
      {trg:"une lese-majeste", src:"lese-majesty"},
      {trg:"un pou", src:"a louse"},
      {trg:"un demi-tour", src:"a U-turn"}
    ]},

    {type:"fb", s:"Le gouvernement a fait {1} face aux protestations.",
     a:["demi-tour"], opts:["demi-tour","porte-a-faux","lese-majeste","compte-goutte"],
     hint:"The compound noun for reversing direction, used figuratively for a policy reversal",
     sSrc:"The government made a {1} in the face of protests."},

    {type:"mc", q:"Qu'est-ce qu'une 'mutuelle' en France?",
     opts:["Un syndicat","Une association sportive","Une assurance sante complementaire","Une banque cooperative"],
     ans:"Une assurance sante complementaire",
     hint:"This supplementary insurance covers what the national health system does not"},

    {type:"fb", s:"Cette politique est un {1} total, elle aggrave le probleme.",
     a:["non-sens"], opts:["non-sens","ex","clou","pou"],
     hint:"The noun borrowed from English that describes something absurd and meaningless",
     sSrc:"This policy is total {1}, it makes the problem worse."},

    {type:"mc", q:"'Chercher des poux a quelqu'un' signifie:",
     opts:["Aider quelqu'un","Faire des compliments","Ignorer quelqu'un","Chercher la dispute"],
     ans:"Chercher la dispute",
     hint:"Looking for lice on someone is a metaphor for nitpicking and provoking conflict"},

    {type:"fb", s:"J'ai croise mon {1} au restaurant hier soir.",
     a:["ex"], opts:["ex","clou","pou","mutualiste"],
     hint:"The informal noun for a former romantic partner",
     sSrc:"I ran into my {1} at the restaurant last night."},

    {type:"match", pairs:[
      {trg:"les cabinets", src:"restrooms"},
      {trg:"un mutualiste", src:"a mutual member"},
      {trg:"un non-sens", src:"nonsense"},
      {trg:"un ex", src:"an ex"}
    ]}
  ]
};
export default LESSON_15;
