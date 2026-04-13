const LESSON_5 = {
  id:"frv2_a1gap_l5", title:"La maison et le quartier", icon:"\u{1F3E0}", xp:15, board:true,
  steps:[
    {type:"intro", title:"La maison et le quartier",
     desc:"Your home and neighborhood. Learn the words for where you live, from apartments to elevators to the streets around you.",
     goals:["Learn 20 words about homes and neighborhoods","Describe where you live","Talk about places near your home"]},

    {type:"teach", trg:"l'appartement", src:"the apartment", pos:"noun", gender:"m",
     note:"Masculine noun. Shortened to 'l'appart' in casual speech.",
     example:"A: Tu habites dans une maison ?\nB: Non, j'habite dans un appartement.",
     exampleSrc:"A: Do you live in a house?\nB: No, I live in an apartment.",
     funFact:"Most Parisians live in apartments. Houses are rare and extremely expensive in the city."},

    {type:"teach", trg:"l'armoire", src:"the wardrobe, the cabinet", pos:"noun", gender:"f",
     note:"Feminine noun. A large piece of furniture for storing clothes.",
     example:"A: Où est ma chemise ?\nB: Elle est dans l'armoire.",
     exampleSrc:"A: Where is my shirt?\nB: It's in the wardrobe.",
     funFact:"From Latin 'armarium' (a place to store weapons). The meaning shifted from arms to clothes over centuries."},

    {type:"teach", trg:"l'allée", src:"the path, the aisle", pos:"noun", gender:"f",
     note:"Feminine noun. A walkway, garden path, or aisle.",
     example:"A: Où est le parc ?\nB: Au bout de l'allée.",
     exampleSrc:"A: Where is the park?\nB: At the end of the path.",
     funFact:"The famous 'Allée des Champs-Elysées' is one of the most famous streets in the world."},

    {type:"teach", trg:"l'ascenseur", src:"the elevator", pos:"noun", gender:"m",
     note:"Masculine noun. Essential vocabulary for apartment buildings.",
     example:"A: On prend les escaliers ?\nB: Non, prenons l'ascenseur.",
     exampleSrc:"A: Shall we take the stairs?\nB: No, let's take the elevator.",
     funFact:"Many old Parisian buildings had elevators installed years after construction, squeezed into tiny stairwells."},

    {type:"teach", trg:"l'atelier", src:"the workshop, the studio", pos:"noun", gender:"m",
     note:"Masculine noun. Where artists or craftsmen work.",
     example:"A: Tu travailles où ?\nB: Dans mon atelier, au sous-sol.",
     exampleSrc:"A: Where do you work?\nB: In my workshop, in the basement.",
     funFact:"Montmartre in Paris is famous for its artists' ateliers. Picasso had one there."},

    {type:"mc",
     q:"Quel mot signifie 'elevator' en français ?",
     opts:["l'ascenseur","l'armoire","l'atelier","l'allée"],
     ans:"l'ascenseur",
     hint:"This masculine noun is the machine that takes you up and down in a building."},

    {type:"teach", trg:"l'abri", src:"the shelter", pos:"noun", gender:"m",
     note:"Masculine noun. A place of protection from weather or danger.",
     example:"A: Il pleut ! Vite, un abri !\nB: On va sous l'abri de bus.",
     exampleSrc:"A: It's raining! Quick, a shelter!\nB: Let's go under the bus shelter.",
     funFact:"'A l'abri' means 'sheltered' or 'safe'. You hear it in weather warnings and safety instructions."},

    {type:"teach", trg:"l'auberge", src:"the inn", pos:"noun", gender:"f",
     note:"Feminine noun. A small, typically rural hotel.",
     example:"A: Où on dort ce soir ?\nB: J'ai trouvé une petite auberge.",
     exampleSrc:"A: Where do we sleep tonight?\nB: I found a small inn.",
     funFact:"'Auberge de jeunesse' means youth hostel. A budget-friendly option loved by young travelers."},

    {type:"teach", trg:"l'arrondissement", src:"the district", pos:"noun", gender:"m",
     note:"Masculine noun. Paris is divided into 20 arrondissements.",
     example:"A: Tu habites dans quel arrondissement ?\nB: Dans le cinquième.",
     exampleSrc:"A: Which district do you live in?\nB: In the fifth.",
     funFact:"Paris arrondissements spiral outward like a snail shell. The 1st is in the center, the 20th on the edge."},

    {type:"teach", trg:"l'avenue", src:"the avenue", pos:"noun", gender:"f",
     note:"Feminine noun. A wide street, often lined with trees.",
     example:"A: L'avenue est belle, non ?\nB: Oui, avec tous ces arbres !",
     exampleSrc:"A: The avenue is beautiful, isn't it?\nB: Yes, with all these trees!",
     funFact:"'L'Avenue des Champs-Elysées' is often called the most beautiful avenue in the world."},

    {type:"teach", trg:"l'adresse", src:"the address", pos:"noun", gender:"f",
     note:"Feminine noun. Also means 'skill' or 'dexterity' in older usage.",
     example:"A: Quelle est ton adresse ?\nB: 12 rue Victor Hugo.",
     exampleSrc:"A: What is your address?\nB: 12 Victor Hugo Street.",
     funFact:"French addresses put the number before the street name, like English but unlike German."},

    {type:"fb",
     s:"Tu habites dans quel {1} de Paris ?",
     a:["arrondissement"],
     opts:["arrondissement","appartement","atelier","abri"],
     hint:"This long word refers to one of the 20 numbered areas that divide Paris.",
     sSrc:"Which {1} of Paris do you live in?"},

    {type:"teach", trg:"l'arbre", src:"the tree", pos:"noun", gender:"m",
     note:"Masculine noun. One of the first nature words to learn.",
     example:"A: Il y a un grand arbre dans le jardin.\nB: Oui, c'est un chêne.",
     exampleSrc:"A: There's a big tree in the garden.\nB: Yes, it's an oak.",
     funFact:"France has 138 different native tree species. The 'platane' (plane tree) lines most city streets."},

    {type:"teach", trg:"l'architecte", src:"the architect", pos:"noun", gender:"m",
     note:"Same form for masculine and feminine. Gender shown by article only.",
     example:"A: Qui a construit cette maison ?\nB: C'est un architecte célèbre.",
     exampleSrc:"A: Who built this house?\nB: It's a famous architect.",
     funFact:"Le Corbusier and Gustave Eiffel are France's most famous architects and engineers."},

    {type:"teach", trg:"l'architecture", src:"the architecture", pos:"noun", gender:"f",
     note:"Feminine noun. The art and science of designing buildings.",
     example:"A: Tu aimes l'architecture de Paris ?\nB: Oui, c'est magnifique !",
     exampleSrc:"A: Do you like Paris architecture?\nB: Yes, it's magnificent!",
     funFact:"Haussmann redesigned Paris in the 1860s, creating the wide boulevards and uniform buildings we see today."},

    {type:"mc",
     q:"Quel mot signifie 'the tree' en français ?",
     opts:["l'arbre","l'abri","l'allée","l'arche"],
     ans:"l'arbre",
     hint:"This masculine noun refers to a large plant with a trunk, branches, and leaves."},

    {type:"teach", trg:"l'accueil", src:"the reception, the welcome", pos:"noun", gender:"m",
     note:"Masculine noun. Both a place (reception desk) and an action (welcome).",
     example:"A: L'accueil est où ?\nB: Juste à l'entrée, à gauche.",
     exampleSrc:"A: Where is the reception?\nB: Right at the entrance, on the left.",
     funFact:"'Bienvenue' means welcome as a greeting. 'Accueil' is the act or place of welcoming."},

    {type:"teach", trg:"l'agence", src:"the agency", pos:"noun", gender:"f",
     note:"Feminine noun. Used for travel agencies, real estate, etc.",
     example:"A: Tu vas à l'agence de voyages ?\nB: Oui, pour réserver les billets.",
     exampleSrc:"A: Are you going to the travel agency?\nB: Yes, to book the tickets.",
     funFact:"'Agence immobilière' is a real estate agency. Finding an apartment in Paris often starts there."},

    {type:"teach", trg:"l'arche", src:"the arch", pos:"noun", gender:"f",
     note:"Feminine noun. An architectural curve or a biblical ark.",
     example:"A: Tu vois la grande arche ?\nB: Oui, elle est impressionnante !",
     exampleSrc:"A: Do you see the great arch?\nB: Yes, it's impressive!",
     funFact:"'La Grande Arche de la Défense' is a modern landmark in Paris, a cube-shaped arch built in 1989."},

    {type:"teach", trg:"l'arrêt", src:"the stop", pos:"noun", gender:"m",
     note:"Masculine noun. Most commonly used for bus/tram stops.",
     example:"A: L'arrêt de bus est loin ?\nB: Non, il est juste là.",
     exampleSrc:"A: Is the bus stop far?\nB: No, it's right there.",
     funFact:"'Sans arrêt' means 'non-stop'. You see it on express bus and train signs."},

    {type:"fb",
     s:"L'{1} de bus est juste au coin de la rue.",
     a:["arrêt"],
     opts:["arrêt","arbre","accueil","agence"],
     hint:"This masculine noun is the place where buses pause to let passengers on and off.",
     sSrc:"The bus {1} is right at the corner of the street."},

    {type:"match", pairs:[
      {trg:"appartement", src:"apartment"},
      {trg:"adresse", src:"address"},
      {trg:"avenue", src:"avenue"},
      {trg:"accueil", src:"reception"},
      {trg:"arrêt", src:"stop"}
    ]},

    {type:"mc",
     q:"Quel mot décrit un petit hôtel à la campagne ?",
     opts:["l'auberge","l'agence","l'atelier","l'arche"],
     ans:"l'auberge",
     hint:"This feminine noun refers to a cozy rural accommodation, often with a restaurant."},

    {type:"fb",
     s:"Quelle est ton {1} ? J'ai besoin de t'envoyer un colis.",
     a:["adresse"],
     opts:["adresse","agence","avenue","allée"],
     hint:"This feminine noun is the specific location where you receive your mail.",
     sSrc:"What is your {1}? I need to send you a package."}
  ]
};
export default LESSON_5;
