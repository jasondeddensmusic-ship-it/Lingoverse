const LESSON_16 = {
  id:"frv2_b2g7_l16", title:"Voyages et geographie", icon:"\u{1F30D}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Voyages et geographie",
     desc:"Master vocabulary for discussing travel, geography, and different places around the world.",
     goals:["Learn 15 travel and geography words","Discuss regions and landscapes","Describe travel experiences"]},

    {type:"teach", trg:"le lynx", src:"a lynx", pos:"noun", gender:"m",
     note:"Masculine noun. A wild cat with tufted ears found in forests.",
     example:"A: Le lynx a ete reintroduit dans les Vosges.\nB: C'est un animal tres discret.",
     exampleSrc:"A: The lynx was reintroduced in the Vosges mountains.\nB: It's a very discreet animal.",
     funFact:"France reintroduced the Eurasian lynx in the 1970s. 'Avoir des yeux de lynx' means to have extremely sharp eyesight."},

    {type:"teach", trg:"l'islandais", src:"Icelandic (person/language)", pos:"noun", gender:"m",
     note:"Masculine noun. An Icelandic person or the Icelandic language.\nAlso adjective: islandais/islandaise.",
     example:"A: L'islandais est une langue nordique tres ancienne.\nB: Elle a peu change depuis le Moyen Age.",
     exampleSrc:"A: Icelandic is a very ancient Nordic language.\nB: It has barely changed since the Middle Ages.",
     funFact:"Icelandic is so conservative that modern speakers can still read 800-year-old sagas. French has changed far more dramatically."},

    {type:"teach", trg:"le finnois", src:"Finnish (person/language)", pos:"noun", gender:"m",
     note:"Masculine noun. A Finnish person or the Finnish language.\nAlso adjective: finnois/finnoise.",
     example:"A: Le finnois n'a rien a voir avec le suedois.\nB: C'est une langue finno-ougrienne.",
     exampleSrc:"A: Finnish has nothing to do with Swedish.\nB: It's a Finno-Ugric language.",
     funFact:"Finland has two official languages: Finnish and Swedish. 'Le finnois' surprises learners with its 15 grammatical cases."},

    {type:"teach", trg:"le flamand", src:"Flemish (person/language)", pos:"noun", gender:"m",
     note:"Masculine noun. A Flemish person or the Flemish language/dialect.",
     example:"A: Le flamand est parle dans le nord de la Belgique.\nB: C'est proche du neerlandais.",
     exampleSrc:"A: Flemish is spoken in northern Belgium.\nB: It's close to Dutch.",
     funFact:"The Flemish-Walloon language divide is Belgium's defining cultural tension. Brussels is officially bilingual but mostly French-speaking."},

    {type:"mc",
     q:"Quel animal aux oreilles pointues a ete reintroduit dans les Vosges ?",
     opts:["le lynx","le mammifere","le crustace","le dolmen"],
     ans:"le lynx",
     hint:"A wild forest cat with distinctive tufted ears and keen eyesight."},

    {type:"teach", trg:"le gaelique", src:"Gaelic", pos:"noun", gender:"m",
     note:"Masculine noun. The Celtic language family (Irish and Scottish Gaelic).",
     example:"A: Le gaelique irlandais est enseigne dans toutes les ecoles.\nB: Mais peu de gens le parlent au quotidien.",
     exampleSrc:"A: Irish Gaelic is taught in all schools.\nB: But few people speak it daily.",
     funFact:"Brittany's Celtic language is 'le breton', not Gaelic. All are Celtic languages but from different branches."},

    {type:"teach", trg:"l'indonesien", src:"Indonesian (person/language)", pos:"noun", gender:"m",
     note:"Masculine/adjective. An Indonesian person or the Indonesian language.",
     example:"A: L'indonesien est une langue relativement facile a apprendre.\nB: Sa grammaire est simple.",
     exampleSrc:"A: Indonesian is a relatively easy language to learn.\nB: Its grammar is simple.",
     funFact:"Bahasa Indonesia was chosen as a unifying language for 700+ local languages. It's based on Malay and uses the Latin alphabet."},

    {type:"teach", trg:"la butte", src:"a hillock, a mound", pos:"noun", gender:"f",
     note:"Feminine noun. A small hill. 'La Butte Montmartre' is Paris's famous hill.",
     example:"A: La butte offre une vue magnifique sur la ville.\nB: On voit les toits de Paris d'ici.",
     exampleSrc:"A: The hillock offers a magnificent view of the city.\nB: You can see the rooftops of Paris from here.",
     funFact:"Montmartre is officially 'la Butte Montmartre'. At 130 meters, it's the highest natural point in Paris."},

    {type:"fb",
     s:"La {1} Montmartre est le point le plus eleve de Paris.",
     a:["butte"],
     opts:["butte","frise","marquise","matrice"],
     hint:"A small hill. Montmartre is Paris's most famous one.",
     sSrc:"The Montmartre {1} is the highest point in Paris."},

    {type:"teach", trg:"l'atoll", src:"an atoll", pos:"noun", gender:"m",
     note:"Masculine noun. A ring-shaped coral reef enclosing a lagoon.",
     example:"A: Cet atoll du Pacifique est inhabite.\nB: Seuls les oiseaux de mer y vivent.",
     exampleSrc:"A: This Pacific atoll is uninhabited.\nB: Only seabirds live there.",
     funFact:"France has atolls in French Polynesia and New Caledonia. Mururoa atoll was the site of French nuclear testing until 1996."},

    {type:"teach", trg:"la bosquet", src:"a grove, a copse", pos:"noun", gender:"m",
     note:"Masculine noun. A small group of trees.",
     example:"A: Le bosquet de chenes offre une ombre agreable.\nB: Pique-niquons ici.",
     exampleSrc:"A: The oak grove offers pleasant shade.\nB: Let's picnic here.",
     funFact:"French formal gardens (Versailles) feature 'bosquets' as designed outdoor rooms within the park. Each has its own theme."},

    {type:"teach", trg:"la benne", src:"a skip, a dumpster", pos:"noun", gender:"f",
     note:"Feminine noun. A large container for waste, or a cable car cabin.",
     example:"A: La benne a ordures passe le mardi matin.\nB: N'oublie pas de sortir les poubelles.",
     exampleSrc:"A: The garbage truck comes Tuesday morning.\nB: Don't forget to take out the bins.",
     funFact:"'Benne' also means the cabin of a cable car or ski lift: 'la benne du teleferique'. Two very different meanings!"},

    {type:"mc",
     q:"Quel est un recif corallien en forme d'anneau entourant un lagon ?",
     opts:["une benne","un atoll","une butte","un bosquet"],
     ans:"un atoll",
     hint:"A ring of coral with a lagoon in the middle, found in tropical oceans."},

    {type:"teach", trg:"le cabriolet", src:"a convertible (car)", pos:"noun", gender:"m",
     note:"Masculine noun. A car with a retractable roof.\nOriginally: a light horse-drawn carriage.",
     example:"A: Il se promene en cabriolet sur la Cote d'Azur.\nB: Le reve !",
     exampleSrc:"A: He's driving a convertible on the French Riviera.\nB: The dream!",
     funFact:"Originally a light two-wheeled carriage. The 'cabriole' (leap) of the horse gave it its name. Now a luxury car type."},

    {type:"teach", trg:"le gravier", src:"gravel", pos:"noun", gender:"m",
     note:"Masculine noun. Small loose stones covering a path.",
     example:"A: Le chemin de gravier crisse sous les pas.\nB: J'aime ce bruit en foret.",
     exampleSrc:"A: The gravel path crunches underfoot.\nB: I love that sound in the forest.",
     funFact:"The 'crissement du gravier' (crunch of gravel) is a quintessential sound of French country estates and formal gardens."},

    {type:"fb",
     s:"Nous avons pique-nique a l'ombre d'un {1} de chenes.",
     a:["bosquet"],
     opts:["bosquet","atoll","cabriolet","gravier"],
     hint:"A small cluster of trees, providing shade in a park or countryside.",
     sSrc:"We picnicked in the shade of an oak {1}."},

    {type:"match", pairs:[
      {trg:"lynx", src:"wild cat"},
      {trg:"butte", src:"hillock"},
      {trg:"atoll", src:"coral ring"},
      {trg:"cabriolet", src:"convertible"},
      {trg:"benne", src:"skip/dumpster"}
    ]},

    {type:"mc",
     q:"Quelle langue celtique est enseignee dans toutes les ecoles d'Irlande ?",
     opts:["le finnois","l'islandais","le gaelique","le flamand"],
     ans:"le gaelique",
     hint:"Ireland's Celtic language, compulsory in schools but not widely spoken daily."},

    {type:"fb",
     s:"Il roule en {1} decapotable le long de la cote mediterraneenne.",
     a:["cabriolet"],
     opts:["cabriolet","gravier","bosquet","benne"],
     hint:"A car with a roof that folds back, perfect for sunny drives.",
     sSrc:"He's driving a {1} convertible along the Mediterranean coast."}
  ]
};
export default LESSON_16;
