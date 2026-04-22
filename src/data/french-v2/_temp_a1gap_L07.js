const LESSON_7 = {
  id:"frv2_a1gap_l7", title:"La nature et les animaux", icon:"\u{1F333}", xp:15, board:true,
  steps:[
    {type:"intro", title:"La nature et les animaux",
     desc:"Trees, seasons, and the natural world. Discover French words for the animals and landscapes around you.",
     goals:["Learn 20 nature and animal words","Talk about weather and seasons","Describe the natural world in French"]},

    {type:"teach", trg:"l'animal", src:"the animal", pos:"noun", gender:"m",
     note:"Masculine noun. Plural: 'les animaux' (irregular).",
     example:"A: Tu as un animal de compagnie ?\nB: Oui, j'ai un chien.",
     exampleSrc:"A: Do you have a pet?\nB: Yes, I have a dog.",
     funFact:"France has the highest number of pets per capita in Europe. Dogs and cats rule French homes."},

    {type:"teach", trg:"aboyer", src:"to bark", pos:"verb", gender:null,
     note:"Regular -er verb (with stem change: il aboie). What dogs do.",
     example:"A: Pourquoi le chien aboie ?\nB: Il a vu le facteur.",
     exampleSrc:"A: Why is the dog barking?\nB: He saw the mailman.",
     funFact:"French dogs say 'ouaf ouaf' instead of 'woof woof'. Every language has different animal sounds!"},

    {type:"teach", trg:"l'aile", src:"the wing", pos:"noun", gender:"f",
     note:"Feminine noun. Used for birds, planes, and buildings.",
     example:"A: L'oiseau a une aile cassée.\nB: Oh non, il faut l'aider.",
     exampleSrc:"A: The bird has a broken wing.\nB: Oh no, we need to help it.",
     funFact:"'Sous l'aile de quelqu'un' means 'under someone's wing', a protective metaphor like in English."},

    {type:"teach", trg:"l'automne", src:"the autumn, the fall", pos:"noun", gender:"m",
     note:"Masculine noun. The season between summer and winter.",
     example:"A: Tu aimes l'automne ?\nB: Oui, j'adore les couleurs des arbres.",
     exampleSrc:"A: Do you like autumn?\nB: Yes, I love the colors of the trees.",
     funFact:"The 'vendanges' (grape harvest) happens in autumn. It's when French winemaking regions come alive."},

    {type:"teach", trg:"l'avalanche", src:"the avalanche", pos:"noun", gender:"f",
     note:"Feminine noun. A mass of snow rushing down a mountain.",
     example:"A: Il y a eu une avalanche ?\nB: Oui, dans les Alpes.",
     exampleSrc:"A: Was there an avalanche?\nB: Yes, in the Alps.",
     funFact:"The French Alps see dozens of avalanches every winter. The word comes from a dialect of the Alps region."},

    {type:"mc",
     q:"Comment dit-on 'autumn' en français ?",
     opts:["l'automne","l'avalanche","l'animal","l'aile"],
     ans:"l'automne",
     hint:"This masculine noun is the season when leaves change color and fall from trees."},

    {type:"teach", trg:"l'atmosphère", src:"the atmosphere", pos:"noun", gender:"f",
     note:"Feminine noun. Both the air around Earth and the mood of a place.",
     example:"A: L'atmosphère est agréable ici.\nB: Oui, c'est très calme.",
     exampleSrc:"A: The atmosphere is pleasant here.\nB: Yes, it's very calm.",
     funFact:"In French, 'atmosphère' describes both scientific and emotional settings. 'Quelle atmosphère !' means 'what a vibe!'"},

    {type:"teach", trg:"l'agriculture", src:"the agriculture, the farming", pos:"noun", gender:"f",
     note:"Feminine noun. The practice of farming and growing food.",
     example:"A: L'agriculture est importante ici ?\nB: Oui, on cultive du blé.",
     exampleSrc:"A: Is farming important here?\nB: Yes, we grow wheat.",
     funFact:"France is the largest agricultural producer in the EU, called the 'breadbasket of Europe'."},

    {type:"teach", trg:"agricole", src:"agricultural", pos:"adj", gender:null,
     note:"Same form for both genders. Describes farming-related things.",
     example:"A: C'est une région agricole ?\nB: Oui, il y a beaucoup de fermes.",
     exampleSrc:"A: Is this an agricultural region?\nB: Yes, there are many farms.",
     funFact:"The 'Salon de l'Agriculture' in Paris is a massive annual fair where farmers showcase their best animals and produce."},

    {type:"teach", trg:"l'altitude", src:"the altitude", pos:"noun", gender:"f",
     note:"Feminine noun. Height above sea level.",
     example:"A: On est à quelle altitude ?\nB: À deux mille mètres.",
     exampleSrc:"A: What altitude are we at?\nB: At two thousand meters.",
     funFact:"Mont Blanc, the highest peak in the Alps, reaches 4,808 meters. It sits on the French-Italian border."},

    {type:"fb",
     s:"Le chien {1} quand quelqu'un passe devant la maison.",
     a:["aboie"],
     opts:["aboie","arrive","aide","ajoute"],
     hint:"This verb describes the loud sound that dogs make when they sense something.",
     sSrc:"The dog {1} when someone walks past the house."},

    {type:"teach", trg:"l'aube", src:"the dawn", pos:"noun", gender:"f",
     note:"Feminine noun. The time just before sunrise.",
     example:"A: Tu te lèves à quelle heure ?\nB: À l'aube, vers cinq heures.",
     exampleSrc:"A: What time do you get up?\nB: At dawn, around five.",
     funFact:"'Dès l'aube' (from dawn) is a famous Victor Hugo poem about visiting his daughter's grave at first light."},

    {type:"teach", trg:"l'astre", src:"the star, the celestial body", pos:"noun", gender:"m",
     note:"Masculine noun. Formal/poetic word for celestial bodies.",
     example:"A: Regarde les astres ce soir !\nB: Oui, le ciel est magnifique.",
     exampleSrc:"A: Look at the stars tonight!\nB: Yes, the sky is magnificent.",
     funFact:"'Astre' is the root of 'astronomie' and 'astrologie'. More poetic than the common word 'étoile' (star)."},

    {type:"teach", trg:"aquatique", src:"aquatic", pos:"adj", gender:null,
     note:"Same form for both genders. Related to water.",
     example:"A: Il y a un parc aquatique près d'ici ?\nB: Oui, avec des toboggans !",
     exampleSrc:"A: Is there a water park nearby?\nB: Yes, with waterslides!",
     funFact:"France has many 'centres aquatiques' (water centers), public swimming complexes with pools and slides."},

    {type:"teach", trg:"l'aquarium", src:"the aquarium", pos:"noun", gender:"m",
     note:"Masculine noun. Both the fish tank and the public attraction.",
     example:"A: On va à l'aquarium dimanche ?\nB: Oui, les enfants adorent les poissons !",
     exampleSrc:"A: Shall we go to the aquarium on Sunday?\nB: Yes, the kids love the fish!",
     funFact:"The Aquarium de Paris is located in a building originally built for the 1878 World Fair."},

    {type:"mc",
     q:"Quel mot signifie 'dawn' en français ?",
     opts:["l'altitude","l'aube","l'astre","l'automne"],
     ans:"l'aube",
     hint:"This feminine noun describes the earliest moment of daylight, just before the sun rises."},

    {type:"teach", trg:"alpin", src:"alpine", pos:"adj", gender:null,
     note:"Masculine form. Feminine: 'alpine'. Related to the Alps.",
     example:"A: Tu aimes le ski alpin ?\nB: Oui, je vais aux Alpes chaque hiver.",
     exampleSrc:"A: Do you like alpine skiing?\nB: Yes, I go to the Alps every winter.",
     funFact:"The French Alps host many famous ski resorts including Chamonix, site of the first Winter Olympics in 1924."},

    {type:"teach", trg:"l'ange", src:"the angel", pos:"noun", gender:"m",
     note:"Masculine noun, even when referring to a female angel.",
     example:"A: Elle est gentille, ta fille.\nB: Oui, c'est un ange !",
     exampleSrc:"A: Your daughter is kind.\nB: Yes, she's an angel!",
     funFact:"'Mon ange' (my angel) is a common term of endearment in French, used for children and loved ones."},

    {type:"teach", trg:"l'arène", src:"the arena", pos:"noun", gender:"f",
     note:"Feminine noun. An outdoor amphitheater, especially a Roman one.",
     example:"A: Tu as visité les arènes de Nîmes ?\nB: Oui, elles sont immenses !",
     exampleSrc:"A: Did you visit the Nîmes arena?\nB: Yes, it's enormous!",
     funFact:"The arenas of Nîmes and Arles are among the best-preserved Roman amphitheaters in the world."},

    {type:"teach", trg:"arroser", src:"to water (plants)", pos:"verb", gender:null,
     note:"Regular -er verb. Used for watering plants and celebrating.",
     example:"A: Tu as arrosé les plantes ?\nB: Oui, ce matin.",
     exampleSrc:"A: Did you water the plants?\nB: Yes, this morning.",
     funFact:"'Arroser un événement' means to celebrate with drinks. 'Ça s'arrose !' means 'This calls for a drink!'"},

    {type:"fb",
     s:"On est à 1 500 mètres d'{1}, il fait froid.",
     a:["altitude"],
     opts:["altitude","atmosphère","automne","agriculture"],
     hint:"This feminine noun measures how high above sea level you are.",
     sSrc:"We are at 1,500 meters of {1}, it's cold."},

    {type:"match", pairs:[
      {trg:"animal", src:"animal"},
      {trg:"automne", src:"autumn"},
      {trg:"aube", src:"dawn"},
      {trg:"ange", src:"angel"},
      {trg:"arroser", src:"to water"}
    ]},

    {type:"mc",
     q:"Quel adjectif décrit quelque chose en rapport avec l'eau ?",
     opts:["agricole","anonyme","aquatique","alpin"],
     ans:"aquatique",
     hint:"This adjective describes activities, animals, or environments connected to water."},

    {type:"fb",
     s:"L'oiseau ne peut pas voler, il a une {1} cassée.",
     a:["aile"],
     opts:["aile","arène","aube","atmosphère"],
     hint:"This feminine noun is the body part birds and planes use to fly.",
     sSrc:"The bird can't fly, it has a broken {1}."}
  ]
};
export default LESSON_7;
