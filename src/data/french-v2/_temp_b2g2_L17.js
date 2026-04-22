const LESSON_17 = {
  id:"frv2_b2g2_l17", title:"Voyages et transports", icon:"\u{2708}\u{FE0F}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Voyages et transports",
     desc:"Master vocabulary for discussing travel, transportation, and movement. From airports to expeditions, from detours to destinations.",
     goals:["Learn 20 travel and transport terms","Discuss journeys in French","Navigate travel situations with confidence"]},

    {type:"teach", trg:"deambuler", src:"to stroll, to wander", pos:"verb", gender:null,
     note:"Verb. To walk slowly without a specific destination.",
     example:"A: On a deambule dans les rues de Montmartre.\nB: C'est le meilleur moyen de decouvrir le quartier.",
     exampleSrc:"A: We strolled through the streets of Montmartre.\nB: It's the best way to discover the neighborhood.",
     funFact:"From Latin 'deambulare'. In hospitals, a 'deambulateur' is a walker frame. Same root, different use."},

    {type:"teach", trg:"l'eldorado", src:"the Eldorado, the promised land", pos:"noun", gender:"m",
     note:"Masculine noun. A mythical place of great wealth. Used figuratively.",
     example:"A: Pour beaucoup, la Silicon Valley est un eldorado.\nB: Mais la realite est souvent plus dure.",
     exampleSrc:"A: For many, Silicon Valley is an Eldorado.\nB: But reality is often harsher.",
     funFact:"From Spanish 'El Dorado' (the golden one). French explorers searched for it in South America."},

    {type:"teach", trg:"l'embrun", src:"the sea spray", pos:"noun", gender:"m",
     note:"Masculine noun. Salt water spray from waves. Usually plural: les embruns.",
     example:"A: Les embruns fouettent le visage sur la falaise.\nB: L'air marin est vivifiant.",
     exampleSrc:"A: The sea spray whips your face on the cliff.\nB: The sea air is invigorating.",
     funFact:"Embrun is also a town in the French Alps. But the ocean word comes from Latin 'imber' (rain)."},

    {type:"teach", trg:"enfourcher", src:"to mount, to straddle", pos:"verb", gender:null,
     note:"Verb. To mount a horse, bicycle, or motorcycle by swinging a leg over.",
     example:"A: Il a enfourche son velo et il est parti.\nB: Il disparait toujours a toute vitesse.",
     exampleSrc:"A: He mounted his bike and took off.\nB: He always disappears at top speed.",
     funFact:"From 'fourche' (fork). You sit in the fork of the saddle. Also figurative: 'enfourcher un sujet favori'."},

    {type:"teach", trg:"le demi-tour", src:"the U-turn, the about-face", pos:"noun", gender:"m",
     note:"Masculine noun. Turning back in the opposite direction.",
     example:"A: Fais demi-tour, on a rate la sortie.\nB: Le GPS dit de continuer tout droit.",
     exampleSrc:"A: Make a U-turn, we missed the exit.\nB: The GPS says to keep going straight.",
     funFact:"'Faire demi-tour' is the standard expression. In the military, 'demi-tour, droite !' is a drill command."},

    {type:"mc",
     q:"Quel verbe signifie 'marcher sans but precis' ?",
     opts:["deambuler","enfourcher","demonter","deposseeder"],
     ans:"deambuler",
     hint:"To stroll or wander without a specific destination. Think of a leisurely walk."},

    {type:"teach", trg:"la croisiere", src:"the cruise", pos:"noun", gender:"f",
     note:"Feminine noun. A pleasure voyage on a ship.",
     example:"A: Ils partent en croisiere en Mediterranee.\nB: Escales a Barcelone, Naples et Athenes.",
     exampleSrc:"A: They're going on a Mediterranean cruise.\nB: Stops in Barcelona, Naples, and Athens.",
     funFact:"France's Marseille port is the Mediterranean's busiest for cruises. Over 2 million passengers yearly."},

    {type:"teach", trg:"l'escale", src:"the stopover, the port of call", pos:"noun", gender:"f",
     note:"Feminine noun. A stop during a journey, especially at a port or airport.",
     example:"A: Le vol fait escale a Dubai.\nB: On aura deux heures pour se degourdir les jambes.",
     exampleSrc:"A: The flight makes a stopover in Dubai.\nB: We'll have two hours to stretch our legs.",
     funFact:"'Faire escale' works for both ships and planes. From Italian 'scala' (ladder, port of call)."},

    {type:"teach", trg:"le sejour", src:"the stay, the living room", pos:"noun", gender:"m",
     note:"Masculine noun. A temporary stay somewhere, or the main room in a house.",
     example:"A: Notre sejour a Prague etait merveilleux.\nB: Trois jours, c'etait trop court.",
     exampleSrc:"A: Our stay in Prague was wonderful.\nB: Three days was too short.",
     funFact:"'Titre de sejour' is a residence permit. 'Salle de sejour' is the living room. Same word, different meanings."},

    {type:"teach", trg:"la traversee", src:"the crossing", pos:"noun", gender:"f",
     note:"Feminine noun. The act of crossing a body of water or territory.",
     example:"A: La traversee de la Manche prend environ une heure en ferry.\nB: Par beau temps, c'est tres agreable.",
     exampleSrc:"A: Crossing the English Channel takes about an hour by ferry.\nB: In good weather, it's very pleasant.",
     funFact:"'Traversee du desert' (desert crossing) means a period of obscurity. A political metaphor in France."},

    {type:"fb",
     s:"Le vol fait {1} a Istanbul avant d'arriver a Bangkok.",
     a:["escale"],
     opts:["escale","croisiere","traversee","sejour"],
     hint:"A stop during a journey, especially at an airport between flights.",
     sSrc:"The flight makes a {1} in Istanbul before arriving in Bangkok."},

    {type:"teach", trg:"le pelerinage", src:"the pilgrimage", pos:"noun", gender:"m",
     note:"Masculine noun. A journey to a sacred or meaningful place.",
     example:"A: Des milliers de personnes font le pelerinage de Saint-Jacques chaque annee.\nB: Le chemin traverse toute la France.",
     exampleSrc:"A: Thousands of people make the pilgrimage to Santiago each year.\nB: The path crosses all of France.",
     funFact:"The Camino de Santiago starts in France. 'Pelerinage' comes from Latin 'peregrinus' (foreigner/pilgrim)."},

    {type:"teach", trg:"le periple", src:"the journey, the trip (long)", pos:"noun", gender:"m",
     note:"Masculine noun. A long, eventful journey through multiple places.",
     example:"A: Son periple a travers l'Asie a dure six mois.\nB: Il a visite douze pays differents.",
     exampleSrc:"A: His journey across Asia lasted six months.\nB: He visited twelve different countries.",
     funFact:"From Greek 'periplous' (sailing around). Originally a maritime term. Now used for any long trip."},

    {type:"teach", trg:"l'itineraire", src:"the itinerary, the route", pos:"noun", gender:"m",
     note:"Masculine noun. A planned route or travel plan.",
     example:"A: Quel est l'itineraire prevu pour demain ?\nB: On commence par le musee, puis le chateau.",
     exampleSrc:"A: What's the itinerary planned for tomorrow?\nB: We start with the museum, then the castle.",
     funFact:"From Latin 'iter' (journey). 'Itineraire bis' means an alternative route to avoid traffic. Very French."},

    {type:"mc",
     q:"Quel mot designe un long voyage a travers plusieurs pays ?",
     opts:["un demi-tour","un periple","un sejour","une escale"],
     ans:"un periple",
     hint:"A long, eventful journey visiting many places. Originally a Greek sailing term."},

    {type:"teach", trg:"la randonnee", src:"the hike, the trek", pos:"noun", gender:"f",
     note:"Feminine noun. A long walk in nature, usually for pleasure.",
     example:"A: On fait une randonnee dans les Pyrenees ce week-end ?\nB: Bonne idee, le meteo annonce du beau temps.",
     exampleSrc:"A: Shall we go hiking in the Pyrenees this weekend?\nB: Good idea, the weather forecast is promising.",
     funFact:"France has over 180,000 km of marked hiking trails (GR). The GR20 in Corsica is Europe's toughest."},

    {type:"teach", trg:"le decalage horaire", src:"the jet lag, the time difference", pos:"noun", gender:"m",
     note:"Masculine noun. The time difference between zones, or the resulting fatigue.",
     example:"A: Le decalage horaire avec Tokyo est de huit heures.\nB: Il faut quelques jours pour s'adapter.",
     exampleSrc:"A: The time difference with Tokyo is eight hours.\nB: It takes a few days to adapt.",
     funFact:"'Decalage' means a shift or offset. French has no single-word equivalent for 'jet lag'."},

    {type:"teach", trg:"le bivouac", src:"the bivouac, the campsite", pos:"noun", gender:"m",
     note:"Masculine noun. A temporary camp without tents or with minimal shelter.",
     example:"A: On a fait un bivouac au sommet de la montagne.\nB: Les etoiles etaient incroyables.",
     exampleSrc:"A: We bivouacked at the mountain summit.\nB: The stars were incredible.",
     funFact:"From Swiss German 'Biwacht' (extra watch). The word entered French through military campaigns."},

    {type:"teach", trg:"la villegiature", src:"the holiday resort stay", pos:"noun", gender:"f",
     note:"Feminine noun. A stay at a vacation spot. Elegant, somewhat old-fashioned.",
     example:"A: Ils passent leur villegiature sur la Cote d'Azur.\nB: Comme chaque ete depuis vingt ans.",
     exampleSrc:"A: They spend their holiday on the French Riviera.\nB: Like every summer for twenty years.",
     funFact:"From Italian 'villeggiatura'. Suggests an elegant, unhurried vacation. Distinctly upper-class connotation."},

    {type:"fb",
     s:"Le {1} avec New York est de six heures en hiver.",
     a:["decalage horaire"],
     opts:["decalage horaire","demi-tour","periple","bivouac"],
     hint:"The time difference between two time zones. Think of clocks being 'shifted'.",
     sSrc:"The {1} with New York is six hours in winter."},

    {type:"match", pairs:[
      {trg:"croisiere", src:"cruise"},
      {trg:"pelerinage", src:"pilgrimage"},
      {trg:"randonnee", src:"hike"},
      {trg:"bivouac", src:"campsite"},
      {trg:"villegiature", src:"holiday stay"}
    ]},

    {type:"mc",
     q:"Quel sentier de randonnee corse est considere comme le plus difficile d'Europe ?",
     opts:["le chemin de Saint-Jacques","le tour du Mont-Blanc","le GR20","le GR10"],
     ans:"le GR20",
     hint:"A famous Corsican hiking trail known for its extreme difficulty."},

    {type:"fb",
     s:"Il a enfourche son velo et a commence son {1} a travers la France.",
     a:["periple"],
     opts:["periple","sejour","demi-tour","bivouac"],
     hint:"A long journey through multiple places. Originally a Greek sailing term.",
     sSrc:"He mounted his bike and began his {1} across France."}
  ]
};
export default LESSON_17;
