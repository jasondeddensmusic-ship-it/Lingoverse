const LESSON_11 = {
  id:"frv2_b2gap_l11", title:"Nature et paysages", icon:"\u{1F333}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Nature et paysages",
     desc:"Explore the vocabulary of landscapes, vegetation, and the natural world. From forests to hilltops.",
     goals:["Learn 20 nature and landscape vocabulary words","Describe outdoor environments in French","Discuss ecology and natural features"]},

    {type:"teach", trg:"un bosquet", src:"a grove, a copse", pos:"noun", gender:"m",
     note:"Masculine noun. A small cluster of trees.",
     example:"A: Allons nous asseoir dans le bosquet.\nB: Bonne idee, il y fait frais.",
     exampleSrc:"A: Let's go sit in the grove.\nB: Good idea, it's cool there.",
     funFact:"Diminutive of Old French 'bosc' (forest). Versailles has a famous 'Bosquet de la Colonnade'."},

    {type:"teach", trg:"une butte", src:"a hillock, a mound", pos:"noun", gender:"f",
     note:"Feminine noun. A small hill or raised area of ground.",
     example:"A: De la butte, on voit tout le village.\nB: C'est un panorama magnifique.",
     exampleSrc:"A: From the hillock, you can see the whole village.\nB: It's a magnificent panorama.",
     funFact:"Montmartre's full name is 'la Butte Montmartre'. Parisians just say 'la Butte'."},

    {type:"teach", trg:"broussailleux", src:"bushy, overgrown", pos:"adj", gender:null,
     note:"Adjective. Covered in brambles or thick undergrowth. Feminine: broussailleuse.",
     example:"A: Ce chemin est tres broussailleux.\nB: Il faut un machette pour passer.",
     exampleSrc:"A: This path is very overgrown.\nB: You need a machete to get through.",
     funFact:"From 'broussaille' (bush, bramble). 'La brousse' means the bush in African French."},

    {type:"teach", trg:"crouler", src:"to crumble, to collapse", pos:"verb", gender:null,
     note:"Verb. To fall into ruin. Also figurative: 'crouler sous le travail'.",
     example:"A: Ce vieux mur menace de crouler.\nB: Il faut le consolider rapidement.",
     exampleSrc:"A: This old wall is threatening to crumble.\nB: We need to reinforce it quickly.",
     funFact:"'Crouler sous' means to be overwhelmed by. 'Je croule sous les dossiers' = I'm buried in files."},

    {type:"teach", trg:"une ar\u00eate", src:"a ridge, a fishbone", pos:"noun", gender:"f",
     note:"Feminine noun. A sharp edge or ridge. Also the tiny bones in fish.",
     example:"A: L'ar\u00eate de la montagne est dangereuse.\nB: Il faut etre prudent par ce vent.",
     exampleSrc:"A: The mountain ridge is dangerous.\nB: You have to be careful in this wind.",
     funFact:"Same word for mountain ridges and fish bones. Both share the idea of a thin, sharp line."},

    {type:"mc",
     q:"Quel mot designe un petit groupe d'arbres ?",
     opts:["un bosquet","une butte","une ar\u00eate","un dolmen"],
     ans:"un bosquet",
     hint:"A diminutive of Old French 'bosc' meaning forest. Think of a small cluster of trees."},

    {type:"teach", trg:"un dolmen", src:"a dolmen", pos:"noun", gender:"m",
     note:"Masculine noun. A prehistoric stone monument with flat stones on uprights.",
     example:"A: Ce dolmen date du neolithique.\nB: Cinq mille ans, c'est impressionnant.",
     exampleSrc:"A: This dolmen dates from the Neolithic.\nB: Five thousand years, that's impressive.",
     funFact:"From Breton 'taol maen' meaning stone table. Brittany has over 1,000 dolmens."},

    {type:"teach", trg:"l'art\u00e8re", src:"the artery, the main road", pos:"noun", gender:"f",
     note:"Feminine noun. A blood vessel or a major road in a city.",
     example:"A: Les Champs-Elysees est la grande art\u00e8re de Paris.\nB: Oui, c'est toujours anime.",
     exampleSrc:"A: The Champs-Elysees is the great artery of Paris.\nB: Yes, it's always bustling.",
     funFact:"Used for both blood vessels and main streets. A city's 'arteres' are its lifelines."},

    {type:"teach", trg:"le bercail", src:"the fold, home base", pos:"noun", gender:"m",
     note:"Masculine noun. Originally a sheepfold. Now means home or safe haven.",
     example:"A: Il est temps de rentrer au bercail.\nB: Oui, la famille nous attend.",
     exampleSrc:"A: It's time to head back home.\nB: Yes, the family is waiting for us.",
     funFact:"From Latin 'vervecale' (sheep enclosure). 'Rentrer au bercail' is a warm, familiar expression."},

    {type:"fb",
     s:"De la {1}, on peut admirer tout le paysage.",
     a:["butte"],
     opts:["butte","ar\u00eate","art\u00e8re","boiserie"],
     hint:"A small hill or mound. Montmartre is famously called this by Parisians.",
     sSrc:"From the {1}, you can admire the whole landscape."},

    {type:"teach", trg:"le cheptel", src:"the livestock", pos:"noun", gender:"m",
     note:"Masculine noun. The total number of farm animals. Pronounced 'shep-TEL'.",
     example:"A: Le cheptel de cette ferme compte deux cents betes.\nB: C'est une grande exploitation.",
     exampleSrc:"A: This farm's livestock numbers two hundred animals.\nB: It's a large operation.",
     funFact:"From Latin 'capitale' meaning property. Same root as 'capital'. Livestock was wealth."},

    {type:"teach", trg:"le crustac\u00e9", src:"the crustacean", pos:"noun", gender:"m",
     note:"Masculine noun. A shellfish with an exoskeleton (crab, lobster, shrimp).",
     example:"A: Les crustaces sont frais au marche ce matin.\nB: Prenons des crevettes et du crabe.",
     exampleSrc:"A: The crustaceans are fresh at the market this morning.\nB: Let's get shrimp and crab.",
     funFact:"From Latin 'crusta' meaning shell. France is Europe's top consumer of crustaceans."},

    {type:"teach", trg:"aigre", src:"sour, bitter", pos:"adj", gender:null,
     note:"Adjective. Describes a sharp, acid taste or a biting tone.",
     example:"A: Ce vin est devenu aigre.\nB: Il a tourne en vinaigre.",
     exampleSrc:"A: This wine has turned sour.\nB: It turned into vinegar.",
     funFact:"'Aigre-doux' means bittersweet (sweet and sour). 'Vinaigre' literally means 'sour wine'."},

    {type:"teach", trg:"un copeau", src:"a wood shaving, a chip", pos:"noun", gender:"m",
     note:"Masculine noun. A thin curl of wood or metal from cutting.",
     example:"A: Le sol de l'atelier est couvert de copeaux.\nB: Le menuisier a travaille toute la journee.",
     exampleSrc:"A: The workshop floor is covered in wood shavings.\nB: The carpenter worked all day.",
     funFact:"From 'couper' (to cut). Chocolate shavings are also called 'copeaux de chocolat'."},

    {type:"mc",
     q:"Quel mot designe l'ensemble des animaux d'une ferme ?",
     opts:["le cheptel","le crustac\u00e9","le bosquet","le copeau"],
     ans:"le cheptel",
     hint:"From Latin 'capitale' meaning property. Livestock was the original form of wealth."},

    {type:"teach", trg:"un corbeau", src:"a crow, a raven", pos:"noun", gender:"m",
     note:"Masculine noun. A large black bird. Also slang for an anonymous letter writer.",
     example:"A: Un corbeau a vole le sandwich de mon fils.\nB: Ils sont malins, ces oiseaux !",
     exampleSrc:"A: A crow stole my son's sandwich.\nB: Those birds are clever!",
     funFact:"In the 1943 film 'Le Corbeau', the word meant an anonymous poison-pen letter writer. Still used today."},

    {type:"teach", trg:"la bestiole", src:"the little creature, the bug", pos:"noun", gender:"f",
     note:"Feminine noun. A small animal or insect, often said affectionately.",
     example:"A: Quelle est cette bestiole sur la fenetre ?\nB: C'est juste une coccinelle.",
     exampleSrc:"A: What's this little creature on the window?\nB: It's just a ladybug.",
     funFact:"Diminutive of 'bete' (beast). Shows how French adds '-iole' for something small and cute."},

    {type:"teach", trg:"le couchant", src:"the sunset, the west", pos:"noun", gender:"m",
     note:"Masculine noun. The setting sun or the direction where it sets.",
     example:"A: Le couchant est splendide ce soir.\nB: Les couleurs sont incroyables.",
     exampleSrc:"A: The sunset is splendid this evening.\nB: The colors are incredible.",
     funFact:"From 'se coucher' (to lie down/set). The sun 'se couche' in French. Poetic word for west."},

    {type:"fb",
     s:"Ce vin a tourne, il est devenu {1}.",
     a:["aigre"],
     opts:["aigre","douillet","broussailleux","distinct"],
     hint:"An adjective for a sharp, sharp-edged taste. Think of fermented wine that has turned unpleasant.",
     sSrc:"This wine has turned, it has become {1}."},

    {type:"teach", trg:"le contour", src:"the outline, the contour", pos:"noun", gender:"m",
     note:"Masculine noun. The outer edge or shape of something.",
     example:"A: Les contours de la montagne se dessinent dans la brume.\nB: C'est un paysage de reve.",
     exampleSrc:"A: The mountain's outlines appear through the mist.\nB: It's a dreamlike landscape.",
     funFact:"From 'con' (around) + 'tour' (turn). English borrowed 'contour' directly from French."},

    {type:"match", pairs:[
      {trg:"butte", src:"hillock"},
      {trg:"dolmen", src:"stone monument"},
      {trg:"corbeau", src:"crow"},
      {trg:"couchant", src:"sunset"},
      {trg:"bestiole", src:"little creature"}
    ]},

    {type:"mc",
     q:"Quel adjectif decrit un terrain envahi par la vegetation sauvage ?",
     opts:["broussailleux","aigre","douillet","cantonal"],
     ans:"broussailleux",
     hint:"From 'broussaille' meaning bramble or bush. Think of an overgrown path."},

    {type:"fb",
     s:"Ce vieux mur menace de {1} sous le poids du lierre.",
     a:["crouler"],
     opts:["crouler","carreler","astiquer","brosser"],
     hint:"To crumble or collapse. Also used figuratively: 'c... sous le travail'.",
     sSrc:"This old wall is threatening to {1} under the weight of the ivy."}
  ]
};
export default LESSON_11;
