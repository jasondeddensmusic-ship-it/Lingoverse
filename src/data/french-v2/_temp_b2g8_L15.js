const LESSON_15 = {
  id:"frv2_b2g8_l15", title:"Gastronomie et plaisirs", icon:"\u{1F37D}\u{FE0F}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Gastronomie et plaisirs",
     desc:"Food, drink, and culinary vocabulary for discussing French gastronomy at B2 level.",
     goals:["Learn 15 gastronomy and pleasure words","Discuss food and wine with confidence","Understand culinary terminology"]},

    {type:"teach", trg:"l'amuse-gueule", src:"the appetizer, the nibble", pos:"noun", gender:"m",
     note:"Masculine compound noun. A small snack before a meal.\nPlural: des amuse-gueules.",
     example:"A: Les amuse-gueules sont variés ce soir.\nB: Le chef a préparé des merveilles.",
     exampleSrc:"A: The appetizers are varied tonight.\nB: The chef prepared wonders.",
     funFact:"Literally 'mouth-amuser'. 'Gueule' is informal for mouth. The formal version is 'amuse-bouche'."},

    {type:"teach", trg:"le crustacé", src:"the crustacean", pos:"noun", gender:"m",
     note:"Masculine noun. Shellfish like crabs, lobsters, and shrimp.\nPlural: des crustacés.",
     example:"A: Les crustacés sont frais du matin.\nB: On prend un plateau de fruits de mer ?",
     exampleSrc:"A: The crustaceans are fresh from this morning.\nB: Shall we get a seafood platter?",
     funFact:"France consumes more crustaceans per capita than any other European country."},

    {type:"teach", trg:"la béarnaise", src:"béarnaise sauce", pos:"noun", gender:"f",
     note:"Feminine noun. A rich butter sauce with egg yolks and tarragon.\nFrom the Béarn region.",
     example:"A: Steak-frites avec une béarnaise, s'il vous plaît.\nB: Excellent choix, monsieur.",
     exampleSrc:"A: Steak and fries with béarnaise, please.\nB: Excellent choice, sir.",
     funFact:"Henry IV, born in Béarn, was nicknamed 'le bon roi Henri'. The sauce honors his homeland."},

    {type:"teach", trg:"le cannelloni", src:"cannelloni", pos:"noun", gender:"m",
     note:"Masculine noun. Large tubular pasta stuffed with filling.\nItalian origin, fully adopted.",
     example:"A: Les cannellonis à la viande sont une spécialité ici.\nB: C'est la recette du chef.",
     exampleSrc:"A: Meat cannelloni are a specialty here.\nB: It's the chef's recipe.",
     funFact:"French cuisine adopts Italian pasta freely. 'Gratin de cannellonis' is a French-Italian fusion classic."},

    {type:"mc",
     q:"Quel mot est la version familière de 'amuse-bouche' ?",
     opts:["amuse-gueule","amuse-enfant","amuse-roi","amuse-plat"],
     ans:"amuse-gueule",
     hint:"Uses the informal word for 'mouth'. Small snacks served before the main meal."},

    {type:"teach", trg:"la liqueur", src:"the liqueur", pos:"noun", gender:"f",
     note:"Feminine noun. A sweet, flavored alcoholic beverage.\nDistinct from 'digestif'.",
     example:"A: Une liqueur de mirabelle pour finir ?\nB: Avec plaisir, c'est le meilleur moment.",
     exampleSrc:"A: A mirabelle plum liqueur to finish?\nB: With pleasure, it's the best moment.",
     funFact:"Mirabelle plum liqueur from Lorraine is protected by appellation. Only Lorraine plums qualify."},

    {type:"teach", trg:"la crème", src:"cream", pos:"noun", gender:"f",
     note:"Feminine noun. Dairy cream, or figuratively the best.\n'Crème fraîche' is a French staple.",
     example:"A: La crème fraîche épaisse est meilleure pour cuisiner.\nB: Elle ne tourne pas à la cuisson.",
     exampleSrc:"A: Thick fresh cream is better for cooking.\nB: It doesn't curdle when heated.",
     funFact:"French crème fraîche is cultured, slightly tangy. American sour cream is a different product."},

    {type:"teach", trg:"le café-crème", src:"the café crème (coffee with cream)", pos:"noun", gender:"m",
     note:"Masculine compound noun. A coffee with steamed milk.\nOften shortened to 'un crème'.",
     example:"A: Un café-crème et un croissant, s'il vous plaît.\nB: C'est le petit-déjeuner classique.",
     exampleSrc:"A: A café crème and a croissant, please.\nB: That's the classic breakfast.",
     funFact:"In Parisian cafés, just say 'un crème'. Adding 'café' makes you sound like a tourist."},

    {type:"fb",
     s:"Les {1} sont frais du matin, on prend un plateau ?",
     a:["crustacés"],
     opts:["crustacés","cannellonis","amuse-gueules","café-crèmes"],
     hint:"Shellfish like crabs and lobsters. France is Europe's biggest consumer of these.",
     sSrc:"The {1} are fresh from this morning, shall we get a platter?"},

    {type:"teach", trg:"le grille-pain", src:"the toaster", pos:"noun", gender:"m",
     note:"Masculine compound noun. An appliance for toasting bread.\nInvariable in plural.",
     example:"A: Le grille-pain ne fonctionne plus.\nB: Les tartines seront froides ce matin.",
     exampleSrc:"A: The toaster doesn't work anymore.\nB: The toast will be cold this morning.",
     funFact:"'Tartine' is the French word for a slice of bread with something on it. A breakfast essential."},

    {type:"teach", trg:"le fumier", src:"the manure, the compost", pos:"noun", gender:"m",
     note:"Masculine noun. Animal manure used as fertilizer.\nAlso a strong insult meaning 'scoundrel'.",
     example:"A: Le fumier enrichit le sol du jardin.\nB: C'est le meilleur engrais naturel.",
     exampleSrc:"A: Manure enriches the garden soil.\nB: It's the best natural fertilizer.",
     funFact:"As an insult, 'fumier' is extremely strong in French. In agriculture, it is perfectly polite."},

    {type:"teach", trg:"la fête", src:"the party, the celebration", pos:"noun", gender:"f",
     note:"Feminine noun. A celebration or holiday.\n'Faire la fête' means to party.",
     example:"A: La fête du village dure trois jours.\nB: Il y a un bal et un feu d'artifice.",
     exampleSrc:"A: The village celebration lasts three days.\nB: There's a dance and fireworks.",
     funFact:"Every French village has its annual 'fête'. The national 'Fête de la Musique' on June 21 fills every street."},

    {type:"mc",
     q:"Comment commande-t-on un café avec du lait dans un café parisien ?",
     opts:["Un crème","Un latte","Un café au lait","Un cappuccino"],
     ans:"Un crème",
     hint:"The shortened form of 'café-c...'. Just one word is enough in a Parisian café."},

    {type:"teach", trg:"le banal", src:"the commonplace, the mundane", pos:"noun", gender:"m",
     note:"Noun/adjective. Something ordinary or unoriginal.\nPlural controversy: banals vs banaux.",
     example:"A: C'est d'un banal affligeant.\nB: Aucune originalité, en effet.",
     exampleSrc:"A: It's depressingly commonplace.\nB: No originality whatsoever, indeed.",
     funFact:"The plural 'banals' or 'banaux' is debated. Originally 'banal' meant belonging to the feudal lord."},

    {type:"teach", trg:"la marquise", src:"the marchioness, the glass canopy", pos:"noun", gender:"f",
     note:"Feminine noun. A noblewoman, or an entrance canopy.\nTwo very different meanings.",
     example:"A: La marquise au chocolat est un dessert raffiné.\nB: C'est entre la mousse et le gâteau.",
     exampleSrc:"A: Marquise au chocolat is a refined dessert.\nB: It's between a mousse and a cake.",
     funFact:"Three meanings: noblewoman, glass canopy, AND chocolate dessert. Context is everything."},

    {type:"teach", trg:"l'indigestion", src:"indigestion", pos:"noun", gender:"f",
     note:"Feminine noun. Difficulty digesting food.\nAlso figurative for excess.",
     example:"A: J'ai une indigestion de chocolat.\nB: Tu en as trop mangé à Pâques.",
     exampleSrc:"A: I have chocolate indigestion.\nB: You ate too much at Easter.",
     funFact:"'Indigestion de nouvelles' (news indigestion) describes information overload. Very modern usage."},

    {type:"fb",
     s:"La {1} du village dure trois jours avec bal et feu d'artifice.",
     a:["fête"],
     opts:["fête","crème","liqueur","béarnaise"],
     hint:"A celebration or festival. Every French village has one annually.",
     sSrc:"The village {1} lasts three days with a dance and fireworks."},

    {type:"match", pairs:[
      {trg:"amuse-gueule", src:"appetizer"},
      {trg:"liqueur", src:"liqueur"},
      {trg:"café-crème", src:"coffee with cream"},
      {trg:"fumier", src:"manure"},
      {trg:"marquise", src:"marchioness / canopy / dessert"}
    ]},

    {type:"mc",
     q:"Quel mot peut désigner à la fois une noble, un auvent et un dessert au chocolat ?",
     opts:["marquise","crème","béarnaise","fête"],
     ans:"marquise",
     hint:"Three different meanings in one word. A noblewoman, a glass canopy, and a chocolate treat."},

    {type:"fb",
     s:"J'ai une {1} de chocolat, j'en ai trop mangé.",
     a:["indigestion"],
     opts:["indigestion","liqueur","fête","crème"],
     hint:"Difficulty digesting food from eating too much. Also used figuratively.",
     sSrc:"I have chocolate {1}, I ate too much."}
  ]
};
export default LESSON_15;
