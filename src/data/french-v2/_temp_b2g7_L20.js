const LESSON_20 = {
  id:"frv2_b2g7_l20", title:"Nature et paysages", icon:"\u{1F332}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Nature et paysages",
     desc:"Complete your B2 vocabulary with words for describing nature, landscapes, and the physical world.",
     goals:["Learn 15 nature and landscape words","Describe natural environments","Discuss ecological topics with precision"]},

    {type:"teach", trg:"le monticule", src:"a mound, a hillock", pos:"noun", gender:"m",
     note:"Masculine noun. A small natural or man-made hill.",
     example:"A: Du sommet du monticule, on voit tout le village.\nB: C'est un point de vue ideal.",
     exampleSrc:"A: From the top of the hillock, you can see the whole village.\nB: It's an ideal viewpoint.",
     funFact:"Diminutive of 'mont'. French landscape is dotted with 'monticules', some natural, some ancient burial mounds."},

    {type:"teach", trg:"la manivelle", src:"a crank handle", pos:"noun", gender:"f",
     note:"Feminine noun. A handle turned in circles to operate a mechanism.",
     example:"A: Tourne la manivelle pour remonter le seau du puits.\nB: C'est un vieux systeme mais ca marche.",
     exampleSrc:"A: Turn the crank to raise the well bucket.\nB: It's an old system but it works.",
     funFact:"In French cinema, 'le premier tour de manivelle' marks the first day of filming, from the hand-cranked cameras of early movies."},

    {type:"teach", trg:"le couchant", src:"the west, the sunset", pos:"noun", gender:"m",
     note:"Masculine noun. The direction where the sun sets. Also: sunset itself.",
     example:"A: Le soleil descend vers le couchant.\nB: Le ciel est rouge et orange.",
     exampleSrc:"A: The sun is going down toward the west.\nB: The sky is red and orange.",
     funFact:"'Le couchant' is more poetic than 'l'ouest'. French has 'le levant' (east/sunrise) as its mirror. Both are used in literature."},

    {type:"teach", trg:"la cicatrice", src:"a scar", pos:"noun", gender:"f",
     note:"Feminine noun. A mark left after a wound heals.\nAlso figurative: emotional scars.",
     example:"A: Cette cicatrice raconte une histoire.\nB: Chaque blessure laisse sa trace.",
     exampleSrc:"A: This scar tells a story.\nB: Every wound leaves its mark.",
     funFact:"'Cicatriser' means to heal over. The French expression 'les cicatrices de la guerre' describes the lasting marks of conflict."},

    {type:"mc",
     q:"Quel mot poetique designe la direction ou le soleil se couche ?",
     opts:["le couchant","le levant","le monticule","la manivelle"],
     ans:"le couchant",
     hint:"From 'se coucher' (to lie down). The sun 'lies down' in the west."},

    {type:"teach", trg:"le crible", src:"a sieve, a screen", pos:"noun", gender:"m",
     note:"Masculine noun. A tool with holes for sorting by size.\n'Passer au crible' = to scrutinize.",
     example:"A: Nous avons passe chaque candidature au crible.\nB: Seules trois sont retenues.",
     exampleSrc:"A: We scrutinized every application.\nB: Only three were kept.",
     funFact:"'Passer au crible' is one of French's most useful expressions. It means to examine everything with extreme care."},

    {type:"teach", trg:"l'arete", src:"a ridge, a fish bone", pos:"noun", gender:"f",
     note:"Feminine noun. The sharp edge of a mountain, or a thin bone in fish.",
     example:"A: L'arete du poisson est dangereuse pour les enfants.\nB: Choisis un filet sans aretes.",
     exampleSrc:"A: Fish bones are dangerous for children.\nB: Choose a boneless fillet.",
     funFact:"In mountaineering, 'l'arete' is a narrow ridge. In geometry, it's an edge. In cooking, removing 'les aretes' is a key skill."},

    {type:"teach", trg:"le debarras", src:"a storage room, a junk room", pos:"noun", gender:"m",
     note:"Masculine noun. A room for storing unused things.\n'Bon debarras !' = Good riddance!",
     example:"A: La vieille lampe est au debarras.\nB: On devrait trier tout ce bazar.",
     exampleSrc:"A: The old lamp is in the storage room.\nB: We should sort through all that junk.",
     funFact:"'Bon debarras !' (Good riddance!) is said when getting rid of something unpleasant. From 'debarrasser' (to clear away)."},

    {type:"fb",
     s:"Le jury a passe chaque dossier au {1} avant de decider.",
     a:["crible"],
     opts:["crible","debarras","couchant","monticule"],
     hint:"A sieve or screen. The expression means to examine with great care.",
     sSrc:"The jury {1} every file before deciding."},

    {type:"teach", trg:"le dolmen", src:"a dolmen (stone monument)", pos:"noun", gender:"m",
     note:"Masculine noun. A prehistoric stone table used for burial.",
     example:"A: Ce dolmen a cinq mille ans.\nB: Nos ancetres construisaient pour l'eternite.",
     exampleSrc:"A: This dolmen is five thousand years old.\nB: Our ancestors built for eternity.",
     funFact:"From Breton 'taol maen' (stone table). Brittany has the densest concentration of dolmens in Europe."},

    {type:"teach", trg:"le fumier", src:"manure, dung", pos:"noun", gender:"m",
     note:"Masculine noun. Animal waste used as fertilizer.\nAlso a very strong insult.",
     example:"A: Le fumier enrichit la terre du potager.\nB: C'est un engrais naturel et efficace.",
     exampleSrc:"A: The manure enriches the vegetable garden soil.\nB: It's a natural and effective fertilizer.",
     funFact:"As an insult, 'fumier' is very strong, comparable to English expletives. In agriculture, it's simply organic fertilizer."},

    {type:"teach", trg:"la masse", src:"a mass, a bulk", pos:"noun", gender:"f",
     note:"Feminine noun. A large quantity, or the main body of something.\nAlso: a sledgehammer.",
     example:"A: La masse de travail est enorme cette semaine.\nB: On va devoir faire des heures supplementaires.",
     exampleSrc:"A: The mass of work is enormous this week.\nB: We'll have to do overtime.",
     funFact:"'En masse' (in large numbers) is a French expression used in English too. 'La masse salariale' means the total payroll."},

    {type:"mc",
     q:"Quelle expression signifie 'examiner avec un soin extreme' ?",
     opts:["passer au crible","passer au debarras","passer au couchant","passer au monticule"],
     ans:"passer au crible",
     hint:"Using a sieve to sort: keeping the good, discarding the rest."},

    {type:"teach", trg:"le bosquet", src:"a grove, a copse", pos:"noun", gender:"m",
     note:"Masculine noun. A small cluster of trees in a park or field.",
     example:"A: Les enfants jouent dans le bosquet de bouleaux.\nB: C'est leur cachette preferee.",
     exampleSrc:"A: The children play in the birch grove.\nB: It's their favorite hiding spot.",
     funFact:"Versailles has famous 'bosquets': the Bosquet de l'Encelade, the Bosquet des Bains d'Apollon. Each is an outdoor garden room."},

    {type:"teach", trg:"la clarte", src:"clarity, brightness", pos:"noun", gender:"f",
     note:"Feminine noun. The quality of being clear, bright, or understandable.",
     example:"A: La clarte de son explication etait remarquable.\nB: Tout le monde a compris du premier coup.",
     exampleSrc:"A: The clarity of her explanation was remarkable.\nB: Everyone understood on the first try.",
     funFact:"French values 'la clarte' above all in writing. 'Ce qui se concoit bien s'enonce clairement' (Boileau) is the golden rule."},

    {type:"fb",
     s:"La {1} du matin illuminait la foret de bouleaux.",
     a:["clarte"],
     opts:["clarte","cicatrice","masse","manivelle"],
     hint:"The quality of bright, clear light. Also means clarity of thought.",
     sSrc:"The morning {1} illuminated the birch forest."},

    {type:"match", pairs:[
      {trg:"couchant", src:"sunset/west"},
      {trg:"cicatrice", src:"scar"},
      {trg:"crible", src:"sieve"},
      {trg:"arete", src:"ridge/fish bone"},
      {trg:"clarte", src:"clarity"}
    ]},

    {type:"mc",
     q:"Quel mot désigne à la fois une crête de montagne étroite et un petit os dans la chair d'un poisson ?",
     opts:["une arete","une cicatrice","un crible","un monticule"],
     ans:"une arete",
     hint:"A sharp edge. In geography it's a mountain ridge, in food it's a fish bone."},

    {type:"fb",
     s:"Les {1} de la guerre civile sont encore visibles dans cette region.",
     a:["cicatrices"],
     opts:["cicatrices","clartes","aretes","masses"],
     hint:"Marks left after wounds heal, both physical and figurative.",
     sSrc:"The {1} of the civil war are still visible in this region."}
  ]
};
export default LESSON_20;
