const LESSON_7 = {
  id:"frv2_b2g3_l7", title:"Gastronomie et terroir", icon:"\u{1F37D}\u{FE0F}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Gastronomie et terroir",
     desc:"Learn vocabulary about French food culture, from artisanal baking to regional specialties and dining customs.",
     goals:["Learn 17 B2 food and culinary words","Discuss gastronomy and regional cuisine","Describe food preparation and dining"]},

    {type:"teach", trg:"un amuse-gueule", src:"an appetizer, a nibble", pos:"noun", gender:"m",
     note:"Masculine noun. A small bite served before a meal. Plural: amuse-gueules.",
     example:"A: Les amuse-gueules sont délicieux.\nB: Oui, le chef les a préparés avec soin.",
     exampleSrc:"A: The appetizers are delicious.\nB: Yes, the chef prepared them with care.",
     funFact:"Literally 'amuse the mouth'. In fine dining, the similar 'amuse-bouche' is more refined. 'Gueule' is the informal word for mouth."},

    {type:"teach", trg:"la béarnaise", src:"bearnaise sauce", pos:"noun", gender:"f",
     note:"Feminine noun. A classic French sauce made with egg yolks, butter, and tarragon.",
     example:"A: Un steak avec de la béarnaise, s'il vous plaît.\nB: Excellent choix, c'est notre spécialité.",
     exampleSrc:"A: A steak with bearnaise, please.\nB: Excellent choice, it's our specialty.",
     funFact:"Named after the Bearn region in southwest France, home of Henry IV. It is one of the five French 'mother sauces' derivatives."},

    {type:"teach", trg:"la crème", src:"cream", pos:"noun", gender:"f",
     note:"Feminine noun. Dairy cream, or figuratively, the best of something.",
     example:"A: Ajoutez de la crème fraîche dans la sauce.\nB: Combien, une cuillère à soupe ?",
     exampleSrc:"A: Add some fresh cream to the sauce.\nB: How much, a tablespoon?",
     funFact:"'La creme de la creme' meaning the very best is used in both French and English. France produces over 400,000 tonnes of cream annually."},

    {type:"teach", trg:"un crustacé", src:"a crustacean, shellfish", pos:"noun", gender:"m",
     note:"Masculine noun. Marine animals like crabs, lobsters, and shrimp.",
     example:"A: Le plateau de crustacés est impressionnant.\nB: Il y a du homard, des crevettes et des langoustines.",
     exampleSrc:"A: The shellfish platter is impressive.\nB: There is lobster, shrimp, and langoustines.",
     funFact:"The French Christmas Eve 'reveillon' traditionally features a 'plateau de fruits de mer' loaded with crustaces."},

    {type:"mc",
     q:"Comment appelle-t-on une petite bouchée servie avant le repas ?",
     opts:["un amuse-gueule","un crustacé","un arrivage","un filet"],
     ans:"un amuse-gueule",
     hint:"Literally, this compound word means to a... or entertain the mouth."},

    {type:"teach", trg:"un filet", src:"a fillet, a net", pos:"noun", gender:"m",
     note:"Masculine noun. A boneless piece of meat or fish, or a thin net.",
     example:"A: Je voudrais un filet de saumon, s'il vous plaît.\nB: Il est très frais, il vient d'arriver.",
     exampleSrc:"A: I would like a salmon fillet, please.\nB: It is very fresh, it just arrived.",
     funFact:"A 'filet mignon' is literally a 'cute fillet'. In France, it refers specifically to pork tenderloin, not beef as in America."},

    {type:"teach", trg:"le cheptel", src:"livestock", pos:"noun", gender:"m",
     note:"Masculine noun. All the livestock on a farm or in a region.",
     example:"A: Le cheptel bovin de cette région est important.\nB: Oui, c'est le premier producteur de lait.",
     exampleSrc:"A: The cattle livestock of this region is significant.\nB: Yes, it's the top milk producer.",
     funFact:"Pronounced 'shep-tel', from medieval Latin 'capitale' meaning wealth. Cattle and capital share this root: livestock was money."},

    {type:"teach", trg:"un café-crème", src:"a coffee with cream", pos:"noun", gender:"m",
     note:"Masculine noun. A coffee served with steamed milk or cream.",
     example:"A: Un café-crème et un croissant, s'il vous plaît.\nB: Tout de suite, installez-vous en terrasse.",
     exampleSrc:"A: A coffee with cream and a croissant, please.\nB: Right away, have a seat on the terrace.",
     funFact:"Often shortened to just 'un creme'. Ordering 'un latte' in Paris will get you a glass of milk. Say 'un creme' instead."},

    {type:"teach", trg:"un copeau", src:"a shaving, a chip", pos:"noun", gender:"m",
     note:"Masculine noun. A thin piece shaved off wood, metal, or chocolate.",
     example:"A: Décorez le gâteau avec des copeaux de chocolat.\nB: Ça va être magnifique.",
     exampleSrc:"A: Decorate the cake with chocolate shavings.\nB: It's going to be beautiful.",
     funFact:"A carpenter's workshop floor is covered in 'copeaux de bois'. In cooking, 'copeaux de parmesan' are a classic salad garnish."},

    {type:"fb",
     s:"Le {1} bovin de la Normandie est l'un des plus importants de France.",
     a:["cheptel"],
     opts:["cheptel","filet","crustacé","copeau"],
     hint:"This masculine noun means all the livestock in a region. It comes from the same root as 'capital'.",
     sSrc:"The cattle {1} of Normandy is one of the largest in France."},

    {type:"teach", trg:"un café-tabac", src:"a tobacconist-cafe", pos:"noun", gender:"m",
     note:"Masculine noun. A traditional French cafe that also sells tobacco products.",
     example:"A: On se retrouve au café-tabac du coin ?\nB: D'accord, j'y serai dans dix minutes.",
     exampleSrc:"A: Shall we meet at the corner cafe-tabac?\nB: Alright, I'll be there in ten minutes.",
     funFact:"The red diamond-shaped sign marks a 'tabac'. These dual-purpose shops are a uniquely French institution dating to the 17th century."},

    {type:"teach", trg:"une crêperie", src:"a creperie", pos:"noun", gender:"f",
     note:"Feminine noun. A restaurant specializing in crepes.",
     example:"A: Il y a une excellente crêperie dans la rue Montparnasse.\nB: On y va pour le dîner ?",
     exampleSrc:"A: There's an excellent creperie on Rue Montparnasse.\nB: Shall we go there for dinner?",
     funFact:"Brittany is the crepe capital of France. Montparnasse in Paris is famous for its creperies because many Bretons moved there."},

    {type:"teach", trg:"la boulange", src:"baking, bakery work", pos:"noun", gender:"f",
     note:"Feminine noun. The craft or trade of bread-making. Informal for bakery.",
     example:"A: Il a quitté la finance pour la boulange.\nB: Vraiment ? Quel changement de carrière !",
     exampleSrc:"A: He left finance for the baking trade.\nB: Really? What a career change!",
     funFact:"France has a law (the 'decret pain' of 1993) defining exactly what a 'boulangerie' must do to earn the name. Industrial bread does not qualify."},

    {type:"mc",
     q:"Comment appelle-t-on un café qui vend aussi du tabac ?",
     opts:["un café-tabac","un café-crème","une crêperie","une boulange"],
     ans:"un café-tabac",
     hint:"These traditional establishments have a distinctive red diamond-shaped sign outside."},

    {type:"teach", trg:"un cannelloni", src:"cannelloni", pos:"noun", gender:"m",
     note:"Masculine noun. Cylindrical pasta tubes filled with meat or cheese.",
     example:"A: Les cannellonis sont farcis à la ricotta et aux épinards.\nB: Ça sent merveilleusement bon.",
     exampleSrc:"A: The cannelloni are stuffed with ricotta and spinach.\nB: It smells wonderful.",
     funFact:"Italian loanwords abound in French cuisine. France adopted cannelloni, along with pizza, cappuccino, and espresso."},

    {type:"teach", trg:"un boulet", src:"a cannonball, a burden", pos:"noun", gender:"m",
     note:"Masculine noun. Literally a ball and chain. Figuratively: a nuisance or dead weight.",
     example:"A: Ce projet est un vrai boulet pour l'équipe.\nB: Oui, il ralentit tout le monde.",
     exampleSrc:"A: This project is a real burden for the team.\nB: Yes, it's slowing everyone down.",
     funFact:"'Trainer un boulet' means to drag a ball and chain. In French slang, calling someone a 'boulet' means they are hopelessly incompetent."},

    {type:"teach", trg:"un accordéon", src:"an accordion", pos:"noun", gender:"m",
     note:"Masculine noun. A portable bellows-driven musical instrument.",
     example:"A: Il joue de l'accordéon dans le métro.\nB: Sa musique rend le trajet plus agréable.",
     exampleSrc:"A: He plays the accordion in the metro.\nB: His music makes the commute more pleasant.",
     funFact:"The accordion is the quintessential sound of Parisian 'musette'. Edith Piaf's music was inseparable from the accordion."},

    {type:"match", pairs:[
      {trg:"amuse-gueule", src:"appetizer"},
      {trg:"crêperie", src:"creperie"},
      {trg:"café-crème", src:"coffee with cream"},
      {trg:"filet", src:"fillet"},
      {trg:"boulange", src:"baking trade"}
    ]},

    {type:"fb",
     s:"Décorez le dessert avec des {1} de chocolat blanc.",
     a:["copeaux"],
     opts:["copeaux","filets","crustacés","boulets"],
     hint:"These are thin shavings or chips, often of chocolate, used as garnish.",
     sSrc:"Decorate the dessert with white chocolate {1}."}
  ]
};
export default LESSON_7;
