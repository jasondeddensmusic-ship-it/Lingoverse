const LESSON_12 = {
  id:"frv2_b2g7_l12", title:"Gastronomie et saveurs", icon:"\u{1F372}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Gastronomie et saveurs",
     desc:"Explore vocabulary for discussing food, cooking, and the French culinary tradition.",
     goals:["Learn 15 food and gastronomy words","Discuss flavors and cooking","Describe culinary traditions"]},

    {type:"teach", trg:"le cannelloni", src:"cannelloni", pos:"noun", gender:"m",
     note:"Masculine noun. Tube-shaped pasta filled with meat or cheese.\nPlural stays the same in French.",
     example:"A: Les cannelloni de ma grand-mere sont delicieux.\nB: C'est une recette italienne adaptee.",
     exampleSrc:"A: My grandmother's cannelloni are delicious.\nB: It's an adapted Italian recipe.",
     funFact:"French cuisine has borrowed extensively from Italian. 'Cannelloni' keeps its Italian form, unlike 'spaghetti' which is sometimes singular in French."},

    {type:"teach", trg:"la bearnaise", src:"bearnaise (sauce)", pos:"noun", gender:"f",
     note:"Feminine noun. A rich sauce made with egg yolks, butter, and tarragon.",
     example:"A: Ce steak avec sa bearnaise est parfait.\nB: C'est ma sauce preferee.",
     exampleSrc:"A: This steak with its bearnaise is perfect.\nB: It's my favorite sauce.",
     funFact:"Named after Bearn, Henry IV's birthplace in southwest France. Made with egg yolks, butter, shallots, tarragon, and vinegar."},

    {type:"teach", trg:"la creperie", src:"a creperie, a pancake restaurant", pos:"noun", gender:"f",
     note:"Feminine noun. A restaurant specializing in crepes.",
     example:"A: Allons a la creperie ce soir.\nB: Bonne idee, je prendrai une galette complete.",
     exampleSrc:"A: Let's go to the creperie tonight.\nB: Good idea, I'll have a complete galette.",
     funFact:"Brittany is the homeland of crepes. A 'galette' is a savory buckwheat crepe, while a 'crepe' is sweet and made with wheat flour."},

    {type:"teach", trg:"l'amuse-gueule", src:"an appetizer, a canape", pos:"noun", gender:"m",
     note:"Masculine noun. A small snack served before a meal.\nPlural: des amuse-gueules.",
     example:"A: Les amuse-gueules sont servis avec l'aperitif.\nB: Essaie les petits fours au fromage.",
     exampleSrc:"A: The appetizers are served with the aperitif.\nB: Try the cheese pastries.",
     funFact:"Literally 'amuse the mouth'. In fine dining, 'amuse-bouche' is preferred as 'gueule' is informal for mouth (animal mouth)."},

    {type:"mc",
     q:"Quel restaurant breton est specialise dans les crepes ?",
     opts:["une creperie","une brasserie","une rotisserie","une patisserie"],
     ans:"une creperie",
     hint:"The name comes directly from the product served: crepes and galettes."},

    {type:"teach", trg:"le cognac", src:"cognac (brandy)", pos:"noun", gender:"m",
     note:"Masculine noun. A fine brandy from the Cognac region of France.",
     example:"A: Un cognac apres le diner ?\nB: Volontiers, un petit verre.",
     exampleSrc:"A: A cognac after dinner?\nB: Gladly, a small glass.",
     funFact:"Only brandy from the Charente region can be called 'cognac'. It must be double-distilled and aged in oak barrels for at least two years."},

    {type:"teach", trg:"le crustace", src:"a crustacean, shellfish", pos:"noun", gender:"m",
     note:"Masculine noun. A sea creature with a hard shell: crab, lobster, shrimp.",
     example:"A: Le plateau de crustaces est impressionnant.\nB: Il y a du homard, du crabe et des crevettes.",
     exampleSrc:"A: The seafood platter is impressive.\nB: There's lobster, crab, and shrimp.",
     funFact:"A 'plateau de fruits de mer' (seafood platter) is a French festive tradition, especially at Christmas and New Year."},

    {type:"teach", trg:"le cafe-creme", src:"a coffee with cream", pos:"noun", gender:"m",
     note:"Masculine noun. An espresso with hot milk or cream.\n'Un creme' for short in cafes.",
     example:"A: Je voudrais un cafe-creme, s'il vous plait.\nB: Avec un croissant ?",
     exampleSrc:"A: I'd like a coffee with cream, please.\nB: With a croissant?",
     funFact:"In Parisian cafes, just say 'un creme'. It's understood as a white coffee. 'Un cafe' alone means a black espresso."},

    {type:"fb",
     s:"Le plateau de {1} est le plat star des fetes de fin d'annee.",
     a:["crustaces"],
     opts:["crustaces","cannelloni","cognac","creperies"],
     hint:"Shellfish like lobster, crab, and shrimp served on a large platter.",
     sSrc:"The {1} platter is the star dish of end-of-year celebrations."},

    {type:"teach", trg:"la cassolette", src:"a small cooking dish", pos:"noun", gender:"f",
     note:"Feminine noun. A small individual cooking or serving dish.",
     example:"A: Les cassolettes de champignons sont pretes.\nB: Ca sent merveilleusement bon.",
     exampleSrc:"A: The mushroom cassolettes are ready.\nB: It smells wonderfully good.",
     funFact:"Diminutive of 'casserole'. A 'cassolette' is a small individual dish, both for cooking and elegant presentation."},

    {type:"teach", trg:"la cochonnaille", src:"cold cuts, pork products", pos:"noun", gender:"f",
     note:"Feminine noun. Informal. Various pork-based cold cuts and charcuterie.",
     example:"A: On a sorti la cochonnaille pour l'aperitif.\nB: Saucisson, jambon, pate... parfait !",
     exampleSrc:"A: We brought out the cold cuts for the aperitif.\nB: Sausage, ham, pate... perfect!",
     funFact:"From 'cochon' (pig). A warm, rustic word. Every French region has its specialty cochonnaille: rillettes, andouille, saucisson."},

    {type:"teach", trg:"le chausson", src:"a turnover (pastry), a slipper", pos:"noun", gender:"m",
     note:"Masculine noun. A folded pastry, or an indoor shoe.\n'Chausson aux pommes' is the classic.",
     example:"A: Ce chausson aux pommes est encore chaud.\nB: Il sort du four.",
     exampleSrc:"A: This apple turnover is still warm.\nB: It just came out of the oven.",
     funFact:"The double meaning creates jokes: 'Mets tes chaussons' means put on your slippers, not eat your turnovers. Context is everything."},

    {type:"mc",
     q:"Quel petit plat individuel sert a presenter des champignons au four ?",
     opts:["une cassolette","une creperie","une cochonnaille","une bearnaise"],
     ans:"une cassolette",
     hint:"A small individual cooking dish, diminutive of 'casserole'."},

    {type:"teach", trg:"le cuivre", src:"copper", pos:"noun", gender:"m",
     note:"Masculine noun. The metal copper, or copper cookware.\nAlso plural: les cuivres (brass instruments).",
     example:"A: Les casseroles en cuivre sont les meilleures.\nB: Mais il faut les entretenir.",
     exampleSrc:"A: Copper pans are the best.\nB: But you have to maintain them.",
     funFact:"French professional kitchens traditionally use copper ('cuivre') pans. They heat evenly but tarnish quickly without polishing."},

    {type:"teach", trg:"le cendrier", src:"an ashtray", pos:"noun", gender:"m",
     note:"Masculine noun. A dish for cigarette ashes.",
     example:"A: Le cendrier est plein, il faut le vider.\nB: Depuis la loi, on ne fume plus a l'interieur.",
     exampleSrc:"A: The ashtray is full, it needs emptying.\nB: Since the law, no one smokes indoors anymore.",
     funFact:"France banned smoking indoors in 2007. The 'cendrier' disappeared from cafes, ending a century of tradition."},

    {type:"fb",
     s:"Les casseroles en {1} sont prisees par les grands chefs.",
     a:["cuivre"],
     opts:["cuivre","cognac","cannelloni","cendrier"],
     hint:"A reddish-brown metal valued for even heat distribution in cooking.",
     sSrc:"{1} pans are prized by great chefs."},

    {type:"match", pairs:[
      {trg:"bearnaise", src:"tarragon butter sauce"},
      {trg:"amuse-gueule", src:"appetizer"},
      {trg:"cognac", src:"brandy"},
      {trg:"cochonnaille", src:"cold cuts"},
      {trg:"chausson", src:"turnover/slipper"}
    ]},

    {type:"mc",
     q:"Quel mot familier designe la charcuterie a base de porc ?",
     opts:["la cochonnaille","la cassolette","la bearnaise","la creperie"],
     ans:"la cochonnaille",
     hint:"From 'cochon' (pig). A rustic, warm word for pork-based charcuterie."},

    {type:"fb",
     s:"Pour l'aperitif, j'ai prepare des {1} au fromage et aux herbes.",
     a:["amuse-gueules"],
     opts:["amuse-gueules","cassolettes","cochonnailles","crustaces"],
     hint:"Small snacks that 'a... the mouth' before the main meal begins.",
     sSrc:"For the aperitif, I prepared cheese and herb {1}."}
  ]
};
export default LESSON_12;
