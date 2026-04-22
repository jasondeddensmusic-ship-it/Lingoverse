const LESSON_11 = {
  id:"frv2_b2g6_l11", title:"Nature et environnement", icon:"\uD83C\uDF3F", xp:15, board:true,
  steps:[
    {type:"intro", title:"Nature et environnement",
     desc:"Learn vocabulary for describing landscapes, natural phenomena, and environmental issues.",
     goals:["Learn 20 nature and environment B2 words","Describe landscapes with precision","Discuss ecological challenges"]},

    {type:"teach", trg:"le crustacé", src:"the crustacean", pos:"noun", gender:"m",
     note:"Masculine noun. A marine animal with a hard shell: lobster, crab, shrimp.",
     example:"A: Les crustacés sont une spécialité bretonne.\nB: Surtout le homard et les langoustines.",
     exampleSrc:"A: Crustaceans are a Breton specialty.\nB: Especially lobster and langoustines.",
     funFact:"France is Europe's largest consumer of crustaceans. The Christmas 'plateau de fruits de mer' is iconic."},

    {type:"teach", trg:"le lynx", src:"the lynx", pos:"noun", gender:"m",
     note:"Masculine noun. A wild cat found in European forests. Invariable in plural.",
     example:"A: Le lynx a été réintroduit dans les Vosges.\nB: C'est une espèce protégée.",
     exampleSrc:"A: The lynx was reintroduced in the Vosges.\nB: It's a protected species.",
     funFact:"'Avoir des yeux de lynx' means to have sharp eyes. The lynx boréal lives in eastern France."},

    {type:"teach", trg:"le kangourou", src:"the kangaroo", pos:"noun", gender:"m",
     note:"Masculine noun. An Australian marsupial. Plural: des kangourous.",
     example:"A: Le kangourou est le symbole de l'Australie.\nB: Il peut sauter jusqu'à neuf mètres.",
     exampleSrc:"A: The kangaroo is the symbol of Australia.\nB: It can jump up to nine meters.",
     funFact:"In French, 'poche kangourou' (kangaroo pouch) describes the front pocket on hooded sweatshirts."},

    {type:"teach", trg:"le littoral", src:"the coastline", pos:"noun", gender:"m",
     note:"Masculine noun. The coastal strip where land meets sea.",
     example:"A: Le littoral méditerranéen attire des millions de touristes.\nB: Surtout en été.",
     exampleSrc:"A: The Mediterranean coastline attracts millions of tourists.\nB: Especially in summer.",
     funFact:"France's 'loi littoral' (1986) protects coastal areas from excessive construction. A landmark law."},

    {type:"mc",
     q:"Quel animal a été réintroduit dans les forêts françaises ?",
     opts:["le lynx","le kangourou","le crustacé","le gravier"],
     ans:"le lynx",
     hint:"A wild cat species reintroduced in the Vosges mountains. Known for sharp eyesight."},

    {type:"teach", trg:"la bordure", src:"the border, the edge", pos:"noun", gender:"f",
     note:"Feminine noun. The edge or rim of something. Not the same as 'frontière'.",
     example:"A: Les fleurs poussent en bordure du chemin.\nB: C'est très joli au printemps.",
     exampleSrc:"A: Flowers grow along the edge of the path.\nB: It's very pretty in spring.",
     funFact:"'En bordure de' is a useful prepositional phrase: 'en bordure de mer' (by the seaside)."},

    {type:"teach", trg:"le gaélique", src:"Gaelic", pos:"noun", gender:"m",
     note:"Masculine noun. The Celtic language of Ireland and Scotland.",
     example:"A: Le gaélique est encore parlé en Irlande.\nB: C'est même une langue officielle.",
     exampleSrc:"A: Gaelic is still spoken in Ireland.\nB: It's even an official language.",
     funFact:"Brittany's Celtic language (Breton) is related to Gaelic. France has several regional languages."},

    {type:"teach", trg:"le finnois", src:"Finnish", pos:"noun", gender:"m",
     note:"Masculine noun. The language of Finland. Also an adjective.",
     example:"A: Le finnois est une langue très différente du français.\nB: C'est une langue finno-ougrienne.",
     exampleSrc:"A: Finnish is a very different language from French.\nB: It's a Finno-Ugric language.",
     funFact:"Finnish has 15 grammatical cases. French students find it one of the most challenging European languages."},

    {type:"fb",
     s:"Le {1} breton attire des millions de vacanciers chaque été.",
     a:["littoral"],
     opts:["littoral","lynx","crustacé","gravier"],
     hint:"The coastal strip where land meets sea, protected by French law since 1986.",
     sSrc:"The Breton {1} attracts millions of vacationers every summer."},

    {type:"teach", trg:"l'islandais", src:"Icelandic", pos:"noun", gender:"m",
     note:"Masculine noun. The language of Iceland. Also an adjective.",
     example:"A: L'islandais a très peu changé depuis le Moyen Âge.\nB: Les sagas sont encore lisibles.",
     exampleSrc:"A: Icelandic has changed very little since the Middle Ages.\nB: The sagas are still readable.",
     funFact:"Icelandic speakers can still read texts from 1,000 years ago, something impossible for French speakers."},

    {type:"teach", trg:"le flamand", src:"Flemish", pos:"noun", gender:"m",
     note:"Masculine noun. The Dutch dialect spoken in Belgium and northern France.",
     example:"A: Le flamand est parlé dans le nord de la France.\nB: C'est proche du néerlandais.",
     exampleSrc:"A: Flemish is spoken in northern France.\nB: It's close to Dutch.",
     funFact:"French Flanders around Dunkirk still has Flemish speakers. Belgium's linguistic divide is politically charged."},

    {type:"teach", trg:"le binocle", src:"the pince-nez, the spectacles", pos:"noun", gender:"m",
     note:"Masculine noun. Old-fashioned spectacles without earpieces. Also slang for glasses.",
     example:"A: Grand-père portait un binocle élégant.\nB: Ça lui donnait un air distingué.",
     exampleSrc:"A: Grandfather wore an elegant pince-nez.\nB: It gave him a distinguished look.",
     funFact:"From Latin 'bini oculi' (two eyes). Now mostly literary or humorous. Modern French uses 'lunettes'."},

    {type:"mc",
     q:"Quelle langue germanique est parlée dans le nord de la France ?",
     opts:["l'islandais","le flamand","le finnois","le gaélique"],
     ans:"le flamand",
     hint:"A dialect closely related to Dutch, spoken in the Dunkirk region and Belgium."},

    {type:"teach", trg:"la lèvre", src:"the lip", pos:"noun", gender:"f",
     note:"Feminine noun. The fleshy part of the mouth. Plural: les lèvres.",
     example:"A: Elle a mis du rouge à lèvres.\nB: La couleur est magnifique.",
     exampleSrc:"A: She put on lipstick.\nB: The color is gorgeous.",
     funFact:"'Rouge à lèvres' (lipstick) literally means 'red for lips'. 'Du bout des lèvres' means reluctantly."},

    {type:"teach", trg:"la griffe", src:"the claw, the scratch mark", pos:"noun", gender:"f",
     note:"Feminine noun. An animal's claw or the mark it leaves.",
     example:"A: Le chat a laissé des griffes sur le canapé.\nB: Il faut lui acheter un griffoir.",
     exampleSrc:"A: The cat left scratch marks on the sofa.\nB: We need to buy it a scratching post.",
     funFact:"'Griffes' is also slang for someone's controlling influence: 'tomber dans les griffes de' means to fall into someone's clutches."},

    {type:"teach", trg:"le funiculaire", src:"the funicular railway", pos:"noun", gender:"m",
     note:"Masculine noun. A cable railway for steep slopes.",
     example:"A: Le funiculaire de Montmartre est très connu.\nB: Il monte au Sacré-Cœur.",
     exampleSrc:"A: The Montmartre funicular is very well known.\nB: It goes up to Sacré-Cœur.",
     funFact:"Lyon has two famous funiculars nicknamed 'la ficelle' (the string). Montmartre's has run since 1900."},

    {type:"fb",
     s:"Les {1} sont une spécialité gastronomique de la côte bretonne.",
     a:["crustacés"],
     opts:["crustacés","binocles","funiculaires","griffes"],
     hint:"Marine animals with hard shells, like lobsters, crabs, and shrimp.",
     sSrc:"{1} are a gastronomic specialty of the Breton coast."},

    {type:"teach", trg:"le diplodocus", src:"the diplodocus", pos:"noun", gender:"m",
     note:"Masculine noun. A large herbivorous dinosaur. Also slang for an outdated person.",
     example:"A: Le diplodocus mesurait plus de 25 mètres.\nB: C'est le plus connu des dinosaures.",
     exampleSrc:"A: The diplodocus measured over 25 meters.\nB: It's the most well-known dinosaur.",
     funFact:"In French slang, 'un vieux diplodocus' means someone hopelessly outdated or technologically clueless."},

    {type:"teach", trg:"le jockey", src:"the jockey", pos:"noun", gender:"m",
     note:"Masculine noun. A professional horse rider in races.",
     example:"A: Le jockey a remporté le Prix de l'Arc de Triomphe.\nB: C'est sa troisième victoire.",
     exampleSrc:"A: The jockey won the Prix de l'Arc de Triomphe.\nB: It's his third victory.",
     funFact:"The Prix de l'Arc de Triomphe at Longchamp is one of the world's most prestigious horse races."},

    {type:"match", pairs:[
      {trg:"kangourou", src:"kangaroo"},
      {trg:"funiculaire", src:"funicular railway"},
      {trg:"lèvre", src:"lip"},
      {trg:"diplodocus", src:"diplodocus"},
      {trg:"jockey", src:"jockey"}
    ]},

    {type:"mc",
     q:"Quel terme familier décrit une personne complètement dépassée ?",
     opts:["un binocle","un crustacé","un diplodocus","un jockey"],
     ans:"un diplodocus",
     hint:"A dinosaur name used as slang. Think of someone hopelessly stuck in the past."},

    {type:"fb",
     s:"Le {1} de Montmartre permet de monter facilement au Sacré-Cœur.",
     a:["funiculaire"],
     opts:["funiculaire","littoral","flamand","kangourou"],
     hint:"A cable railway designed for steep slopes, famous in Paris and Lyon.",
     sSrc:"The Montmartre {1} makes it easy to go up to Sacré-Cœur."}
  ]
};
export default LESSON_11;
