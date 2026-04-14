const LESSON_14 = {
  id:"frv2_b2g7_l14", title:"Sciences et decouvertes", icon:"\u{1F52C}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Sciences et decouvertes",
     desc:"Build vocabulary for discussing scientific research, discoveries, and academic debate.",
     goals:["Learn 15 science-related words","Discuss research and methodology","Express scientific reasoning"]},

    {type:"teach", trg:"la criminologie", src:"criminology", pos:"noun", gender:"f",
     note:"Feminine noun. The scientific study of crime and criminal behavior.",
     example:"A: La criminologie aide a comprendre les comportements deviants.\nB: C'est une science interdisciplinaire.",
     exampleSrc:"A: Criminology helps understand deviant behavior.\nB: It's an interdisciplinary science.",
     funFact:"France's first criminology institute was founded in Lyon in 1920. Edmond Locard created the principle 'every contact leaves a trace'."},

    {type:"teach", trg:"la matrice", src:"a matrix, a template", pos:"noun", gender:"f",
     note:"Feminine noun. A structured framework or a mold for casting.",
     example:"A: Cette matrice de donnees est complexe.\nB: Il faut un logiciel specialise.",
     exampleSrc:"A: This data matrix is complex.\nB: We need specialized software.",
     funFact:"In mathematics, matrices were first developed for solving linear equations. The French mathematician Cauchy contributed key theorems."},

    {type:"teach", trg:"l'heliotrope", src:"a heliotrope (plant/mineral)", pos:"noun", gender:"m",
     note:"Masculine noun. A plant that turns toward the sun, or a purple stone.",
     example:"A: L'heliotrope embaume le jardin.\nB: Son parfum est enivrant.",
     exampleSrc:"A: The heliotrope fills the garden with fragrance.\nB: Its perfume is intoxicating.",
     funFact:"From Greek 'helios' (sun) + 'tropos' (turn). The plant literally follows the sun across the sky."},

    {type:"teach", trg:"la cryptographie", src:"cryptography", pos:"noun", gender:"f",
     note:"Feminine noun. The science of encoding and decoding secret messages.",
     example:"A: La cryptographie protege nos transactions en ligne.\nB: Sans elle, rien ne serait securise.",
     exampleSrc:"A: Cryptography protects our online transactions.\nB: Without it, nothing would be secure.",
     funFact:"France restricted cryptography as a weapon until 1999. Today, ANSSI (National Cybersecurity Agency) leads French crypto policy."},

    {type:"mc",
     q:"Quelle science etudie le crime et les comportements criminels ?",
     opts:["la criminologie","la cryptographie","la meteorologie","la dietetique"],
     ans:"la criminologie",
     hint:"'Crimin-' (crime) + '-logie' (study of). The scientific analysis of criminal behavior."},

    {type:"teach", trg:"la dietetique", src:"dietetics, nutrition science", pos:"noun", gender:"f",
     note:"Feminine noun. The science of diet and nutrition.\nAlso adjective: dietetique.",
     example:"A: La dietetique recommande cinq fruits et legumes par jour.\nB: C'est un objectif difficile a atteindre.",
     exampleSrc:"A: Nutrition science recommends five fruits and vegetables a day.\nB: It's a hard goal to reach.",
     funFact:"France's 'Programme National Nutrition Sante' (PNNS) has made diet a public health priority since 2001."},

    {type:"teach", trg:"le dolmen", src:"a dolmen", pos:"noun", gender:"m",
     note:"Masculine noun. A prehistoric stone monument made of large flat stones.",
     example:"A: Ce dolmen date de cinq mille ans.\nB: Les megalithes fascinent les archeologues.",
     exampleSrc:"A: This dolmen is five thousand years old.\nB: Megaliths fascinate archaeologists.",
     funFact:"France has over 4,500 dolmens, the most in the world. Brittany's Carnac stones are among Europe's most impressive megalithic sites."},

    {type:"teach", trg:"le biotope", src:"a biotope, a habitat", pos:"noun", gender:"m",
     note:"Masculine noun. A defined natural environment for specific organisms.",
     example:"A: Ce marais est un biotope unique.\nB: Des especes rares y vivent.",
     exampleSrc:"A: This marsh is a unique biotope.\nB: Rare species live there.",
     funFact:"From Greek 'bios' (life) + 'topos' (place). French ecology uses 'biotope' for the physical space, 'biocenose' for its community of organisms."},

    {type:"fb",
     s:"La {1} est essentielle pour securiser les communications numeriques.",
     a:["cryptographie"],
     opts:["cryptographie","criminologie","dietetique","matrice"],
     hint:"The science of secret codes, protecting digital information.",
     sSrc:"{1} is essential for securing digital communications."},

    {type:"teach", trg:"le cartographe", src:"a cartographer", pos:"noun", gender:"m",
     note:"Masculine/feminine noun. A person who makes maps.",
     example:"A: Le cartographe a dresse une carte detaillee de la region.\nB: Chaque sentier y figure.",
     exampleSrc:"A: The cartographer drew a detailed map of the region.\nB: Every path is shown on it.",
     funFact:"France's IGN (Institut Geographique National) produces the most detailed maps in Europe. Hikers swear by their 1:25,000 scale maps."},

    {type:"teach", trg:"la magnitude", src:"magnitude (earthquake)", pos:"noun", gender:"f",
     note:"Feminine noun. The measure of an earthquake's strength.",
     example:"A: Le seisme de magnitude sept a devaste la region.\nB: Les secours sont mobilises.",
     exampleSrc:"A: The magnitude seven earthquake devastated the region.\nB: Rescue teams are mobilized.",
     funFact:"France experiences minor earthquakes regularly, especially in the Alps and Pyrenees. Major ones are rare but not impossible."},

    {type:"teach", trg:"l'acceleration", src:"acceleration", pos:"noun", gender:"f",
     note:"Feminine noun. The increase in speed or the rate of change.",
     example:"A: L'acceleration de cette voiture est impressionnante.\nB: Elle passe de zero a cent en cinq secondes.",
     exampleSrc:"A: This car's acceleration is impressive.\nB: It goes from zero to a hundred in five seconds.",
     funFact:"In physics, acceleration is measured in meters per second squared. Galileo first studied it with rolling balls on inclined planes."},

    {type:"mc",
     q:"Quel est le nom d'un monument prehistorique en pierre ?",
     opts:["un dolmen","un biotope","un heliotrope","un cartographe"],
     ans:"un dolmen",
     hint:"Large flat stones balanced on upright ones, built thousands of years ago."},

    {type:"teach", trg:"le composant", src:"a component", pos:"noun", gender:"m",
     note:"Masculine noun. A part or element of a larger system.",
     example:"A: Ce composant electronique est defectueux.\nB: Il faut le remplacer immediatement.",
     exampleSrc:"A: This electronic component is defective.\nB: It must be replaced immediately.",
     funFact:"In computing, 'composant logiciel' is a software component. In cooking, ingredients are sometimes called 'composants' in formal recipes."},

    {type:"teach", trg:"le donneur", src:"a donor", pos:"noun", gender:"m",
     note:"Masculine noun. A person who gives something, especially blood or organs.\nFeminine: la donneuse.",
     example:"A: Nous manquons de donneurs de sang.\nB: Je vais m'inscrire des demain.",
     exampleSrc:"A: We're short of blood donors.\nB: I'll sign up tomorrow.",
     funFact:"France runs 'dons du sang' (blood drives) regularly. Donation is voluntary and unpaid, a principle enshrined in French law since 1952."},

    {type:"fb",
     s:"Le {1} a dessine une carte precise de la cote mediterraneenne.",
     a:["cartographe"],
     opts:["cartographe","composant","donneur","dolmen"],
     hint:"A specialist who creates maps, charts, and geographic representations.",
     sSrc:"The {1} drew a precise map of the Mediterranean coast."},

    {type:"match", pairs:[
      {trg:"criminologie", src:"criminology"},
      {trg:"heliotrope", src:"sun-following plant"},
      {trg:"dolmen", src:"prehistoric monument"},
      {trg:"biotope", src:"natural habitat"},
      {trg:"donneur", src:"donor"}
    ]},

    {type:"mc",
     q:"Quel mot designe l'environnement naturel d'une espece vivante ?",
     opts:["un biotope","un dolmen","un heliotrope","un cartographe"],
     ans:"un biotope",
     hint:"'Bio' (life) + 'topos' (place). The physical habitat of organisms."},

    {type:"fb",
     s:"L'{1} du changement climatique inquiete les scientifiques.",
     a:["acceleration"],
     opts:["acceleration","heliotrope","cryptographie","dietetique"],
     hint:"Getting faster and faster. The rate of increase in speed or intensity.",
     sSrc:"The {1} of climate change worries scientists."}
  ]
};
export default LESSON_14;
