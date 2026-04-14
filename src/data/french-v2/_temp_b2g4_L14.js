const LESSON_14 = {
  id:"frv2_b2g4_l14", title:"Nature et environnement", icon:"\u{1F333}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Nature et environnement",
     desc:"Explore vocabulary for the natural world, ecology, and environmental issues.",
     goals:["Learn 15 words about nature and environment","Discuss ecological topics with precision","Describe natural phenomena and landscapes"]},

    {type:"teach", trg:"un heliotrope", src:"a heliotrope, a sunflower-like plant", pos:"noun", gender:"m",
     note:"Masculine noun. A plant that turns toward the sun.\nAlso a purple color.",
     example:"A: L'heliotrope pousse bien dans ce jardin.\nB: Il sent merveilleusement bon.",
     exampleSrc:"A: The heliotrope grows well in this garden.\nB: It smells wonderfully good.",
     funFact:"From Greek 'helios' (sun) + 'tropos' (turn). The plant literally follows the sun across the sky."},

    {type:"teach", trg:"le fumier", src:"manure, dung", pos:"noun", gender:"m",
     note:"Masculine noun. Animal waste used as fertilizer.\nAlso a strong insult.",
     example:"A: Le fermier repand du fumier sur les champs.\nB: Ca sent mauvais mais c'est excellent pour la terre.",
     exampleSrc:"A: The farmer spreads manure on the fields.\nB: It smells bad but it's excellent for the soil.",
     funFact:"Calling someone 'fumier' is a severe insult in French, roughly equivalent to 'scum' or 'bastard'."},

    {type:"teach", trg:"un hareng", src:"a herring", pos:"noun", gender:"m",
     note:"Masculine noun. A common Atlantic fish.\nThe 'g' is silent: ah-RAN.",
     example:"A: Le hareng fume est une specialite du Nord.\nB: On le mange avec des pommes de terre.",
     exampleSrc:"A: Smoked herring is a northern specialty.\nB: You eat it with potatoes.",
     funFact:"'Hareng saur' (smoked herring) is traditional in northern France. 'Un faux hareng' = a red herring."},

    {type:"teach", trg:"une gamba", src:"a king prawn", pos:"noun", gender:"f",
     note:"Feminine noun. A large prawn or shrimp.\nFrom Spanish 'gamba'.",
     example:"A: Les gambas grillees sont delicieuses.\nB: J'adore les fruits de mer.",
     exampleSrc:"A: Grilled king prawns are delicious.\nB: I love seafood.",
     funFact:"Borrowed from Spanish. In France, 'gambas' always means the large variety, not regular shrimp."},

    {type:"teach", trg:"le cheptel", src:"the livestock", pos:"noun", gender:"m",
     note:"Masculine noun. The total livestock of a farm or region.\nPronounced shep-TEL.",
     example:"A: Le cheptel de cette ferme compte cinq cents betes.\nB: C'est une exploitation importante.",
     exampleSrc:"A: This farm's livestock numbers five hundred animals.\nB: It's a significant operation.",
     funFact:"From Latin 'capitale' (property). Cattle and capital share the same root: wealth was measured in livestock."},

    {type:"mc",
     q:"Quel mot designe l'ensemble du betail d'une ferme ?",
     opts:["le cheptel","le fumier","le hareng","le flot"],
     ans:"le cheptel",
     hint:"From Latin 'capitale' meaning property. Livestock was once the primary measure of wealth."},

    {type:"teach", trg:"la gabelle", src:"the salt tax", pos:"noun", gender:"f",
     note:"Feminine noun. Historical tax on salt in France.\nA hated tax abolished in 1946.",
     example:"A: La gabelle a provoque des revoltes au Moyen Age.\nB: Le sel etait aussi cher que l'or.",
     exampleSrc:"A: The salt tax provoked revolts in the Middle Ages.\nB: Salt was as expensive as gold.",
     funFact:"The gabelle was one of the most despised taxes in French history. Salt smugglers were called 'faux-sauniers'."},

    {type:"teach", trg:"la flambee", src:"the surge, the blaze", pos:"noun", gender:"f",
     note:"Feminine noun. Taught earlier. Reinforced in environmental context.\nA sudden increase.",
     example:"A: La flambee des temperatures inquiete les scientifiques.\nB: Le rechauffement s'accelere.",
     exampleSrc:"A: The surge in temperatures worries scientists.\nB: Warming is accelerating.",
     funFact:"'Flambee' means both a fire blazing up and a sudden spike. 'Flambee des prix' = price surge."},

    {type:"teach", trg:"hippomobile", src:"horse-drawn", pos:"adj", gender:null,
     note:"Adjective. Powered by horses. From Greek 'hippos' (horse).",
     example:"A: Les voitures hippomobiles ont disparu des villes.\nB: On en voit encore dans les parcs.",
     exampleSrc:"A: Horse-drawn carriages have disappeared from cities.\nB: You still see them in parks.",
     funFact:"'Hippomobile' sounds technical but just means horse-powered. The prefix 'hippo-' comes from Greek."},

    {type:"fb",
     s:"Le fermier epand du {1} pour enrichir la terre.",
     a:["fumier"],
     opts:["fumier","cheptel","hareng","goudron"],
     hint:"Animal waste used as fertilizer. Also a very strong insult when directed at a person.",
     sSrc:"The farmer spreads {1} to enrich the soil."},

    {type:"teach", trg:"la globalite", src:"the totality, the whole", pos:"noun", gender:"f",
     note:"Feminine noun. Taught earlier. Reinforced in ecological context.\nThe entirety of something.",
     example:"A: Il faut considerer la globalite de l'ecosysteme.\nB: Chaque espece a son role.",
     exampleSrc:"A: We must consider the ecosystem in its totality.\nB: Every species has its role.",
     funFact:"French ecology favors holistic thinking: 'la globalite' emphasizes seeing the whole, not just parts."},

    {type:"teach", trg:"un funiculaire", src:"a funicular railway", pos:"noun", gender:"m",
     note:"Masculine noun. A cable railway on a steep slope.\nFrom Latin 'funiculus' (small rope).",
     example:"A: Le funiculaire de Montmartre monte jusqu'au Sacre-Coeur.\nB: C'est plus facile que les escaliers.",
     exampleSrc:"A: The Montmartre funicular goes up to the Sacre-Coeur.\nB: It's easier than the stairs.",
     funFact:"Lyon has two funiculars, nicknamed 'la ficelle' (the string). Montmartre's funicular carries 2 million riders per year."},

    {type:"teach", trg:"un grimage", src:"makeup, face painting", pos:"noun", gender:"m",
     note:"Masculine noun. Theatrical or disguise makeup.\nFrom 'grimer' (to make up).",
     example:"A: Le grimage des acteurs prend deux heures.\nB: Le resultat est impressionnant.",
     exampleSrc:"A: The actors' makeup takes two hours.\nB: The result is impressive.",
     funFact:"'Se grimer' means to put on stage makeup. Different from 'se maquiller' (everyday makeup)."},

    {type:"mc",
     q:"Quel impot historique portait sur le sel en France ?",
     opts:["la gabelle","la garderie","la gazette","la galere"],
     ans:"la gabelle",
     hint:"One of the most hated taxes in French history. Salt smugglers were called 'faux-sauniers'."},

    {type:"teach", trg:"le grondement", src:"the rumbling", pos:"noun", gender:"m",
     note:"Masculine noun. Taught earlier. Reinforced in nature context.\nA deep rumbling sound.",
     example:"A: Le grondement du tonnerre annonce l'orage.\nB: Les animaux se cachent.",
     exampleSrc:"A: The rumbling of thunder announces the storm.\nB: The animals hide.",
     funFact:"'Gronder' means both to rumble and to scold. French children fear 'se faire gronder' (getting told off)."},

    {type:"fb",
     s:"Le {1} de Montmartre transporte deux millions de passagers par an.",
     a:["funiculaire"],
     opts:["funiculaire","fumier","cheptel","contour"],
     hint:"A cable railway that climbs steep hills. Lyon has two, and Montmartre has a famous one.",
     sSrc:"The Montmartre {1} carries two million passengers per year."},

    {type:"match", pairs:[
      {trg:"heliotrope", src:"sun-following plant"},
      {trg:"hareng", src:"herring"},
      {trg:"gamba", src:"king prawn"},
      {trg:"cheptel", src:"livestock"},
      {trg:"gabelle", src:"salt tax"}
    ]},

    {type:"mc",
     q:"Quel adjectif designe un vehicule tire par des chevaux ?",
     opts:["hippomobile","funiculaire","frontal","habitable"],
     ans:"hippomobile",
     hint:"From the Greek word for horse (hippos). A technical term for horse-powered transport."}
  ]
};
export default LESSON_14;
