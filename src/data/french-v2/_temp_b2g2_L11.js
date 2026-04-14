const LESSON_11 = {
  id:"frv2_b2g2_l11", title:"Histoire et heritage", icon:"\u{1F3F0}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Histoire et heritage",
     desc:"Explore vocabulary for discussing historical events, ancestors, and cultural heritage. From centurions to charters, from communards to dynasties.",
     goals:["Learn 20 history and heritage terms","Discuss historical events in French","Understand cultural heritage vocabulary"]},

    {type:"teach", trg:"l'attelage", src:"the harness, the horse team", pos:"noun", gender:"m",
     note:"Masculine noun. A team of horses or the harness connecting them to a vehicle.",
     example:"A: L'attelage de quatre chevaux tirait la diligence.\nB: C'etait le moyen de transport des riches.",
     exampleSrc:"A: The team of four horses pulled the stagecoach.\nB: It was the means of transport for the rich.",
     funFact:"Versailles hosted spectacular attelage competitions. Today, competitive carriage driving is still popular in France."},

    {type:"teach", trg:"les chartes", src:"the charters", pos:"noun", gender:"f",
     note:"Feminine plural noun. Official documents granting rights or privileges.",
     example:"A: Les chartes medievales garantissaient les droits des villes.\nB: Elles etaient signees par le roi.",
     exampleSrc:"A: Medieval charters guaranteed the rights of cities.\nB: They were signed by the king.",
     funFact:"The Ecole nationale des chartes trains France's archivists. It is one of France's most prestigious schools."},

    {type:"teach", trg:"une bordee", src:"a broadside, a volley", pos:"noun", gender:"f",
     note:"Feminine noun. A naval broadside or a flurry of insults.",
     example:"A: Le navire a lache une bordee de canons.\nB: L'ennemi a ete pris par surprise.",
     exampleSrc:"A: The ship fired a broadside of cannons.\nB: The enemy was taken by surprise.",
     funFact:"In Quebec, 'une bordee de neige' means a heavy snowfall. The word has different meanings in different regions."},

    {type:"teach", trg:"un charnier", src:"a mass grave, a charnel house", pos:"noun", gender:"m",
     note:"Masculine noun. A place where bodies are piled or buried.",
     example:"A: Les archeologues ont decouvert un charnier medieval.\nB: Il date de l'epidemie de peste noire.",
     exampleSrc:"A: Archaeologists discovered a medieval mass grave.\nB: It dates from the Black Plague epidemic.",
     funFact:"From 'chair' (flesh). The catacombs of Paris are a famous charnier holding millions of bones."},

    {type:"teach", trg:"le cheptel", src:"the livestock, the herd", pos:"noun", gender:"m",
     note:"Masculine noun. The total livestock of a farm or region.",
     example:"A: Le cheptel bovin francais est le plus grand d'Europe.\nB: L'elevage est un secteur cle.",
     exampleSrc:"A: The French cattle herd is the largest in Europe.\nB: Farming is a key sector.",
     funFact:"From medieval Latin 'capitale' (head of cattle). 'Capital' and 'cheptel' share the same root."},

    {type:"mc",
     q:"Comment appelle-t-on l'ensemble du betail d'une region ?",
     opts:["le cheptel","l'attelage","le charnier","la bordee"],
     ans:"le cheptel",
     hint:"The total livestock of a farm or area. From Latin for 'head of cattle'."},

    {type:"teach", trg:"un arroseur", src:"a sprinkler, a waterer", pos:"noun", gender:"m",
     note:"Masculine noun. A person or device that waters or sprinkles.",
     example:"A: L'arroseur arrose la pelouse tous les soirs.\nB: Le jardin est toujours vert.",
     exampleSrc:"A: The sprinkler waters the lawn every evening.\nB: The garden is always green.",
     funFact:"'L'arroseur arrose' (1895) by the Lumieres is considered the first comedy film in history."},

    {type:"teach", trg:"l'arete", src:"the fishbone, the ridge", pos:"noun", gender:"f",
     note:"Feminine noun. A fish bone or the sharp ridge of a mountain.",
     example:"A: Attention aux aretes dans ce poisson !\nB: Oui, elles sont fines et difficiles a voir.",
     exampleSrc:"A: Watch out for the bones in this fish!\nB: Yes, they're fine and hard to see.",
     funFact:"In architecture, 'arete' means the edge where two surfaces meet. A 'voute d'aretes' is a groin vault."},

    {type:"teach", trg:"l'artere", src:"the artery, the main road", pos:"noun", gender:"f",
     note:"Feminine noun. A blood vessel or a major road in a city.",
     example:"A: Les Champs-Elysees est la plus celebre artere de Paris.\nB: Elle attire des millions de visiteurs.",
     exampleSrc:"A: The Champs-Elysees is the most famous avenue in Paris.\nB: It attracts millions of visitors.",
     funFact:"Haussmann designed Paris' arteres (main boulevards) for both beauty and military crowd control."},

    {type:"teach", trg:"les cabinets", src:"the offices, the toilet (old)", pos:"noun", gender:"m",
     note:"Masculine plural noun. Professional offices or, in old usage, the toilet.",
     example:"A: Le cabinet du ministre est au deuxieme etage.\nB: Il recoit sur rendez-vous uniquement.",
     exampleSrc:"A: The minister's office is on the second floor.\nB: He sees visitors by appointment only.",
     funFact:"'Le cabinet de curiosites' was a Renaissance-era collection room, ancestor of the modern museum."},

    {type:"fb",
     s:"Les Champs-Elysees est la plus celebre {1} de Paris.",
     a:["artere"],
     opts:["artere","arete","bordee","charte"],
     hint:"A main road or boulevard in a city. Also means a blood vessel in anatomy.",
     sSrc:"The Champs-Elysees is the most famous {1} in Paris."},

    {type:"teach", trg:"le cinquantieme", src:"the fiftieth", pos:"noun", gender:"m",
     note:"Masculine noun. The ordinal number fifty or a fiftieth part.",
     example:"A: C'est le cinquantieme anniversaire de l'association.\nB: Une grande fete est prevue.",
     exampleSrc:"A: It's the fiftieth anniversary of the association.\nB: A big celebration is planned.",
     funFact:"France uses ordinal numbers differently: 'le premier' but then 'le deuxieme' (not 'le second' in formal)."},

    {type:"teach", trg:"le cendrier", src:"the ashtray", pos:"noun", gender:"m",
     note:"Masculine noun. A receptacle for cigarette ashes.",
     example:"A: Il n'y a plus de cendriers dans les restaurants.\nB: Normal, il est interdit de fumer a l'interieur.",
     exampleSrc:"A: There are no more ashtrays in restaurants.\nB: Of course, smoking indoors is banned.",
     funFact:"France banned indoor smoking in 2008. Before that, cendriers were on every restaurant table."},

    {type:"teach", trg:"le cagoule", src:"the hood, the balaclava", pos:"noun", gender:"f",
     note:"Feminine noun. A hooded garment covering the face. Also a rain hood.",
     example:"A: Les manifestants portaient des cagoules.\nB: Ils ne voulaient pas etre identifies.",
     exampleSrc:"A: The protesters were wearing balaclavas.\nB: They didn't want to be identified.",
     funFact:"'Encagouler' means to cover with a hood. The word comes from 'cogulla' (monk's hood)."},

    {type:"mc",
     q:"Quel est le plus ancien film comique de l'histoire du cinema ?",
     opts:["L'arroseur arrose","Le voyage dans la lune","Metropolis","Les temps modernes"],
     ans:"L'arroseur arrose",
     hint:"A Lumiere brothers film from 1895 involving a gardener and a prankster."},

    {type:"teach", trg:"les clous", src:"the nails, the pedestrian crossing", pos:"noun", gender:"m",
     note:"Masculine plural noun. Nails or, figuratively, the studs of a crosswalk.",
     example:"A: Traversez aux clous, c'est plus sur.\nB: Oui, les voitures doivent s'arreter.",
     exampleSrc:"A: Cross at the crosswalk, it's safer.\nB: Yes, cars must stop.",
     funFact:"French crosswalks were once marked with brass studs (clous). The expression survived the studs."},

    {type:"teach", trg:"la cassolette", src:"the small casserole, the incense burner", pos:"noun", gender:"f",
     note:"Feminine noun. A small cooking pot or a decorative incense holder.",
     example:"A: Ces cassolettes de fruits de mer sont delicieuses.\nB: La presentation est magnifique aussi.",
     exampleSrc:"A: These seafood cassolettes are delicious.\nB: The presentation is magnificent too.",
     funFact:"Diminutive of 'cassole', the dish that gave 'cassoulet' its name. Toulouse's famous stew."},

    {type:"teach", trg:"l'arrivage", src:"the delivery, the new shipment", pos:"noun", gender:"m",
     note:"Masculine noun. A fresh delivery of goods, especially at a market.",
     example:"A: Il y a un nouvel arrivage de poisson ce matin.\nB: Allons-y tot pour avoir le meilleur choix.",
     exampleSrc:"A: There's a new fish delivery this morning.\nB: Let's go early for the best selection.",
     funFact:"French markets announce their 'arrivages' daily. Rungis market, near Paris, is the world's largest."},

    {type:"teach", trg:"la depouille", src:"the remains, the mortal remains", pos:"noun", gender:"f",
     note:"Feminine noun. The body of a deceased person. Formal, respectful term.",
     example:"A: La depouille du soldat inconnu repose sous l'Arc de Triomphe.\nB: C'est un lieu de memoire national.",
     exampleSrc:"A: The remains of the unknown soldier rest under the Arc de Triomphe.\nB: It's a national memorial.",
     funFact:"From 'depouiller' (to strip). Originally meant animal skin, then evolved to mean mortal remains."},

    {type:"fb",
     s:"Traversez aux {1}, c'est plus prudent que de traverser n'importe ou.",
     a:["clous"],
     opts:["clous","cabinets","cendriers","chartes"],
     hint:"The French word for pedestrian crossing, from the brass studs that used to mark them.",
     sSrc:"Cross at the {1}, it's safer than crossing just anywhere."},

    {type:"match", pairs:[
      {trg:"attelage", src:"horse team"},
      {trg:"charnier", src:"mass grave"},
      {trg:"arroseur", src:"sprinkler"},
      {trg:"cassolette", src:"small casserole"},
      {trg:"depouille", src:"remains"}
    ]},

    {type:"mc",
     q:"D'ou vient le mot 'cheptel' ?",
     opts:["du latin 'capitale' (tete de betail)","du grec 'cheptos' (troupeau)","du germanique 'schaf' (mouton)","du celte 'cept' (enclos)"],
     ans:"du latin 'capitale' (tete de betail)",
     hint:"The same Latin root that gave us the English word 'capital'. Head of cattle."},

    {type:"fb",
     s:"Il y a un nouvel {1} de fruits exotiques au marche ce matin.",
     a:["arrivage"],
     opts:["arrivage","attelage","artere","arete"],
     hint:"A fresh delivery of goods, especially at a market. Think of goods 'arriving'.",
     sSrc:"There's a new {1} of exotic fruits at the market this morning."}
  ]
};
export default LESSON_11;
