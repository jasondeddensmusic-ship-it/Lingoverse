const LESSON_16 = {
  id:"frv2_b2gB_l16", title:"Transport et voyage", icon:"\u{1F6EB}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Transport et voyage",
     desc:"Master vocabulary for travel, transportation, and geography at B2 level.",
     goals:["Learn 10 travel and transport terms","Describe journeys formally","Discuss geography and movement"]},

    {type:"teach", trg:"un cafe-tabac", src:"a cafe-tobacconist", pos:"noun", gender:"m",
     note:"Masculine compound noun. A cafe that also sells tobacco, stamps, and lottery tickets.\nPlural: des cafes-tabacs. A French institution.",
     example:"A: On se retrouve au cafe-tabac du coin?\nB: D'accord, j'y serai dans dix minutes.",
     exampleSrc:"A: Shall we meet at the corner cafe-tabac?\nB: Okay, I'll be there in ten minutes.",
     funFact:"Cafes-tabacs are disappearing. France lost half of them between 2000 and 2020. They remain vital social hubs in small towns."},

    {type:"teach", trg:"un cafe-concert", src:"a cafe-concert, a music cafe", pos:"noun", gender:"m",
     note:"Masculine compound noun. A cafe with live musical performances.\nA 19th-century Parisian entertainment tradition.",
     example:"A: Ce cafe-concert propose du jazz tous les vendredis.\nB: L'ambiance est incroyable, on s'y croirait au vieux Paris.",
     exampleSrc:"A: This cafe-concert has jazz every Friday.\nB: The atmosphere is incredible, you'd think you were in old Paris.",
     funFact:"Parisian cafes-concerts launched careers of legends like Edith Piaf and Maurice Chevalier. The tradition lives on in modern cabarets."},

    {type:"teach", trg:"un garde-chasse", src:"a gamekeeper", pos:"noun", gender:"m",
     note:"Masculine compound noun. A person who manages hunting grounds.\nGarde (guard) + chasse (hunt). Plural: des gardes-chasses.",
     example:"A: Le garde-chasse surveille la foret toute l'annee.\nB: Il connait chaque sentier et chaque animal.",
     exampleSrc:"A: The gamekeeper watches over the forest all year.\nB: He knows every trail and every animal.",
     funFact:"France has strict hunting seasons regulated by gardes-chasses. Over a million French people hold hunting licenses."},

    {type:"teach", trg:"le pire", src:"the worst", pos:"noun", gender:"m",
     note:"Masculine noun or adjective. The superlative of 'mauvais'.\nLe pire est a venir = the worst is yet to come. Au pire = at worst.",
     example:"A: Le pire dans cette histoire, c'est le mensonge.\nB: La trahison de confiance est impardonnable.",
     exampleSrc:"A: The worst thing in this story is the lie.\nB: The betrayal of trust is unforgivable.",
     funFact:"'Le pire n'est jamais certain' (the worst is never certain) is a French proverb. It reflects the cautious optimism of French culture."},

    {type:"teach", trg:"la decharge", src:"the discharge, the dump", pos:"noun", gender:"f",
     note:"Feminine noun. A release of electricity, or a waste disposal site.\nDecharge publique = public dump. Decharge electrique = electric shock.",
     example:"A: La decharge municipale ferme a dix-sept heures.\nB: Depechons-nous, on a des encombrants a deposer.",
     exampleSrc:"A: The municipal dump closes at five PM.\nB: Let's hurry, we have bulky items to drop off.",
     funFact:"France produces 354 kg of waste per person per year, less than the EU average. Recycling rates have doubled since 2005."},

    {type:"teach", trg:"prenommer", src:"to name, to give a first name", pos:"verb", gender:null,
     note:"Regular -er verb. To give someone a first name (prenom).\nIl a ete prenomme Pierre = he was named Pierre.",
     example:"A: Ils ont decide de prenommer leur fille Leonie.\nB: C'est un prenom vintage qui revient a la mode.",
     exampleSrc:"A: They decided to name their daughter Leonie.\nB: It's a vintage name that's coming back into fashion.",
     funFact:"Until 1993, French parents could only choose first names from an approved list. The law was changed to allow creative naming."},

    {type:"teach", trg:"un non-fumeur", src:"a non-smoker", pos:"noun", gender:"m",
     note:"Masculine noun. A person who does not smoke.\nFeminine: une non-fumeuse. Zone non-fumeur = no-smoking area.",
     example:"A: Ce restaurant est entierement non-fumeur.\nB: Depuis la loi de deux mille sept, ils le sont presque tous.",
     exampleSrc:"A: This restaurant is entirely non-smoking.\nB: Since the 2007 law, almost all of them are.",
     funFact:"France banned indoor smoking in 2007. Before that, Parisian cafes were legendary for their clouds of cigarette smoke."},

    {type:"teach", trg:"un frisbee", src:"a frisbee", pos:"noun", gender:"m",
     note:"Masculine noun. A flying disc thrown as a sport or game.\nBorrowed directly from English. Ultimate frisbee is growing in France.",
     example:"A: On joue au frisbee sur la plage?\nB: Bonne idee, il y a assez de vent pour ca.",
     exampleSrc:"A: Shall we play frisbee on the beach?\nB: Good idea, there's enough wind for that.",
     funFact:"France has a national ultimate frisbee team. The sport is recognized by the French Olympic committee and growing fast."},

    {type:"teach", trg:"le polo", src:"polo (sport/shirt)", pos:"noun", gender:"m",
     note:"Masculine noun. A horseback ball game, or a style of shirt.\nUn polo = a polo shirt. Le polo est un sport d'elite.",
     example:"A: Il porte toujours un polo bleu marine.\nB: C'est sa marque de fabrique au bureau.",
     exampleSrc:"A: He always wears a navy blue polo.\nB: It's his trademark at the office.",
     funFact:"The polo shirt was invented by French tennis player Rene Lacoste in 1929. His crocodile logo became one of fashion's most iconic symbols."},

    {type:"teach", trg:"l'orange", src:"orange (color/fruit)", pos:"noun", gender:"m",
     note:"Masculine noun when meaning the color. Feminine when meaning the fruit.\nDes chaussures orange (invariable as adjective).",
     example:"A: Le coucher de soleil etait d'un orange magnifique.\nB: Les couleurs changeaient de minute en minute.",
     exampleSrc:"A: The sunset was a magnificent orange.\nB: The colors changed from minute to minute.",
     funFact:"Orange as a color adjective never agrees in French: des robes orange (not oranges). It is one of the few invariable color adjectives."},

    {type:"mc", q:"Qu'est-ce qu'un cafe-tabac?",
     opts:["Un cafe qui vend aussi du tabac et des timbres","Un bar a chicha","Un magasin de cigares","Un restaurant italien"],
     ans:"Un cafe qui vend aussi du tabac et des timbres",
     hint:"This dual-purpose establishment is a social hub especially in small French towns"},

    {type:"fb", s:"Le {1} surveille les animaux de la foret.",
     a:["garde-chasse"], opts:["garde-chasse","cafe-tabac","non-fumeur","frisbee"],
     hint:"The compound noun for the person who manages hunting grounds and wildlife",
     sSrc:"The {1} watches over the forest animals."},

    {type:"mc", q:"Depuis quand est-il interdit de fumer dans les restaurants en France?",
     opts:["2000","2007","1995","2015"],
     ans:"2007",
     hint:"The indoor smoking ban came relatively late compared to some other countries"},

    {type:"match", pairs:[
      {trg:"un cafe-tabac", src:"a cafe-tobacconist"},
      {trg:"un cafe-concert", src:"a music cafe"},
      {trg:"un garde-chasse", src:"a gamekeeper"},
      {trg:"le pire", src:"the worst"}
    ]},

    {type:"fb", s:"Ils ont {1} leur fils Gabriel.",
     a:["prenomme"], opts:["prenomme","decharge","planifie","transporte"],
     hint:"The verb specifically means to give someone a first name",
     sSrc:"They {1} their son Gabriel."},

    {type:"mc", q:"Qui a invente le polo (le vetement)?",
     opts:["Yves Saint Laurent","Christian Dior","Rene Lacoste","Coco Chanel"],
     ans:"Rene Lacoste",
     hint:"This French tennis player created the iconic shirt with a crocodile logo"},

    {type:"fb", s:"Le {1} dans cette histoire, c'est la trahison.",
     a:["pire"], opts:["pire","polo","frisbee","orange"],
     hint:"The superlative of 'mauvais' used as a noun meaning the worst thing",
     sSrc:"The {1} thing in this story is the betrayal."},

    {type:"mc", q:"'Orange' comme adjectif de couleur est:",
     opts:["Feminin","Masculin pluriel","Accord normal","Invariable"],
     ans:"Invariable",
     hint:"This color adjective never changes form regardless of the noun it describes"},

    {type:"fb", s:"La {1} municipale accepte les dechets verts.",
     a:["decharge"], opts:["decharge","jointure","lese-majeste","paroisse"],
     hint:"The feminine noun for a waste disposal site run by the city",
     sSrc:"The municipal {1} accepts garden waste."},

    {type:"match", pairs:[
      {trg:"prenommer", src:"to name"},
      {trg:"un non-fumeur", src:"a non-smoker"},
      {trg:"un frisbee", src:"a frisbee"},
      {trg:"le polo", src:"polo shirt"}
    ]}
  ]
};
export default LESSON_16;
