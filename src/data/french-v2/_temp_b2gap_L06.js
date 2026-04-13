const LESSON_6 = {
  id:"frv2_b2gap_l6", title:"Gastronomie et culture", icon:"\u{1F37D}\u{FE0F}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Gastronomie et culture",
     desc:"The vocabulary of French food culture, from fine dining to regional specialties and casual eating.",
     goals:["Learn 20 food and culture words","Discuss French culinary traditions","Describe dining experiences with flair"]},

    {type:"teach", trg:"un amuse-gueule", src:"an appetizer, a nibble", pos:"noun", gender:"m",
     note:"Masculine noun. A small bite served before a meal. Informal but widely used.",
     example:"A: Les amuse-gueules sont d\u00e9licieux.\nB: Oui, surtout les petits toasts au saumon.",
     exampleSrc:"A: The appetizers are delicious.\nB: Yes, especially the small salmon toasts.",
     funFact:"Literally means 'amuse the mouth'. The formal term is 'amuse-bouche', preferred in fine dining."},

    {type:"teach", trg:"une brasserie", src:"a brasserie, a brewpub", pos:"noun", gender:"f",
     note:"Feminine noun. A large, casual restaurant. Originally a brewery.",
     example:"A: On mange \u00e0 la brasserie ce soir ?\nB: Bonne id\u00e9e, j'adore leur choucroute.",
     exampleSrc:"A: Shall we eat at the brasserie tonight?\nB: Good idea, I love their sauerkraut.",
     funFact:"From 'brasser' (to brew). Alsatian brasseries brought the concept to Paris in the 1870s."},

    {type:"teach", trg:"un biscuit", src:"a cookie, a biscuit", pos:"noun", gender:"m",
     note:"Masculine noun. A baked sweet treat. Also means porcelain in ceramics.",
     example:"A: Tu veux un biscuit avec ton caf\u00e9 ?\nB: Oui, un petit sablé, merci.",
     exampleSrc:"A: Do you want a biscuit with your coffee?\nB: Yes, a shortbread cookie, please.",
     funFact:"From Latin 'bis coctus' meaning twice-baked. Originally made for sailors on long voyages."},

    {type:"teach", trg:"un cognac", src:"a cognac", pos:"noun", gender:"m",
     note:"Masculine noun. A premium brandy from the Cognac region of France.",
     example:"A: Un cognac apr\u00e8s le d\u00eener ?\nB: Volontiers, un petit verre.",
     exampleSrc:"A: A cognac after dinner?\nB: Gladly, a small glass.",
     funFact:"Only brandy from the Cognac region can legally be called cognac. It's France's most exported spirit."},

    {type:"teach", trg:"un chausson", src:"a turnover (pastry), a slipper", pos:"noun", gender:"m",
     note:"Masculine noun. A filled pastry, or a soft indoor shoe.",
     example:"A: Je prends un chausson aux pommes.\nB: Excellent choix, ils sont faits maison.",
     exampleSrc:"A: I'll have an apple turnover.\nB: Excellent choice, they're homemade.",
     funFact:"The dual meaning (pastry and slipper) comes from the shape. Both look like a folded foot covering."},

    {type:"teach", trg:"la b\u00e9arnaise", src:"the bearnaise (sauce)", pos:"noun", gender:"f",
     note:"Feminine noun. A classic French sauce made with butter, egg yolk, and tarragon.",
     example:"A: Le steak avec la b\u00e9arnaise, s'il vous pla\u00eet.\nB: Excellent, c'est notre sp\u00e9cialit\u00e9.",
     exampleSrc:"A: The steak with bearnaise sauce, please.\nB: Excellent, it's our specialty.",
     funFact:"Named after B\u00e9arn, Henry IV's home region. Created in the 1830s at a Paris restaurant called Le Pavillon Henri IV."},

    {type:"mc",
     q:"Comment s'appelle un petit en-cas servi avant le repas ?",
     opts:["Un amuse-gueule","Un chausson","Un biscuit","Un cognac"],
     ans:"Un amuse-gueule",
     hint:"Literally 'mouth amuser'. Served before the main course to whet your appetite."},

    {type:"teach", trg:"bourguignon", src:"Burgundian, from Burgundy", pos:"adj", gender:null,
     note:"Adjective. From the Burgundy region. Famous in 'b\u0153uf bourguignon'.",
     example:"A: Le b\u0153uf bourguignon, c'est un classique.\nB: Oui, avec du bon vin rouge.",
     exampleSrc:"A: Beef bourguignon is a classic.\nB: Yes, with good red wine.",
     funFact:"Burgundy (Bourgogne) is one of France's top wine and food regions. The dish uses local Pinot Noir."},

    {type:"teach", trg:"un cannelloni", src:"a cannelloni", pos:"noun", gender:"m",
     note:"Masculine noun in French. Stuffed pasta tubes, Italian origin but common in France.",
     example:"A: Les cannellonis sont farcis aux \u00e9pinards.\nB: Mmm, \u00e7a a l'air d\u00e9licieux.",
     exampleSrc:"A: The cannelloni are stuffed with spinach.\nB: Mmm, that looks delicious.",
     funFact:"Italian cuisine is deeply embedded in southern French cooking. Nice was Italian until 1860."},

    {type:"teach", trg:"le cuivre", src:"the copper", pos:"noun", gender:"m",
     note:"Masculine noun. The metal copper. Important in French cooking and crafts.",
     example:"A: Les casseroles en cuivre chauffent mieux.\nB: Oui, mais elles sont ch\u00e8res.",
     exampleSrc:"A: Copper pots heat better.\nB: Yes, but they're expensive.",
     funFact:"French chefs prize copper cookware. The Mauviel factory in Normandy has made copper pots since 1830."},

    {type:"fb",
     s:"Le b\u0153uf {1} se pr\u00e9pare avec du vin rouge de Bourgogne.",
     a:["bourguignon"],
     opts:["bourguignon","b\u00e9arnaise","baroque","bosniaque"],
     hint:"From the Burgundy region of France. A famous slow-cooked beef dish.",
     sSrc:"Beef {1} is prepared with red Burgundy wine."},

    {type:"teach", trg:"une cassolette", src:"a small baking dish, a ramekin", pos:"noun", gender:"f",
     note:"Feminine noun. A small individual cooking vessel or the dish served in it.",
     example:"A: La cassolette de fruits de mer est excellente ici.\nB: C'est leur sp\u00e9cialit\u00e9.",
     exampleSrc:"A: The seafood cassolette is excellent here.\nB: It's their specialty.",
     funFact:"Diminutive of 'cassole' (pan). Related to 'cassoulet', the famous bean stew from Toulouse."},

    {type:"teach", trg:"une cr\u00eaperie", src:"a creperie", pos:"noun", gender:"f",
     note:"Feminine noun. A restaurant specializing in crepes.",
     example:"A: Il y a une bonne cr\u00eaperie rue Saint-Jacques.\nB: Allons-y, j'adore les galettes.",
     exampleSrc:"A: There's a good creperie on Saint-Jacques Street.\nB: Let's go, I love buckwheat crepes.",
     funFact:"Brittany is the homeland of crepes. 'Galette' is the savory buckwheat version, 'cr\u00eape' is sweet."},

    {type:"teach", trg:"un barman", src:"a bartender", pos:"noun", gender:"m",
     note:"Masculine noun. A person who serves drinks at a bar.",
     example:"A: Le barman pr\u00e9pare un cocktail.\nB: Il est tr\u00e8s rapide et souriant.",
     exampleSrc:"A: The bartender is making a cocktail.\nB: He's very quick and friendly.",
     funFact:"An anglicism adopted in French. Some purists prefer 'serveur de bar' but 'barman' dominates."},

    {type:"teach", trg:"un bonus", src:"a bonus", pos:"noun", gender:"m",
     note:"Masculine noun. An extra benefit or reward beyond the expected.",
     example:"A: Le dessert est offert, c'est un bonus.\nB: Quelle bonne surprise !",
     exampleSrc:"A: Dessert is free, it's a bonus.\nB: What a nice surprise!",
     funFact:"From Latin 'bonus' meaning good. Used in business (year-end bonus) and gaming (bonus level)."},

    {type:"mc",
     q:"Dans quel type de restaurant mange-t-on principalement des cr\u00eapes ?",
     opts:["Une cr\u00eaperie","Une brasserie","Une cassolette","Un caf\u00e9"],
     ans:"Une cr\u00eaperie",
     hint:"Brittany's signature restaurant type, specializing in both sweet and savory thin pancakes."},

    {type:"teach", trg:"la boulange", src:"the bakery trade, baking", pos:"noun", gender:"f",
     note:"Feminine noun. Informal word for the baking profession or trade.",
     example:"A: Il travaille dans la boulange depuis vingt ans.\nB: C'est un vrai artisan.",
     exampleSrc:"A: He's been in the baking trade for twenty years.\nB: He's a true artisan.",
     funFact:"From 'boulanger' (baker). The 'boulangerie' is sacred in France. The baguette got UNESCO heritage status in 2022."},

    {type:"teach", trg:"un caf\u00e9-cr\u00e8me", src:"a coffee with cream", pos:"noun", gender:"m",
     note:"Masculine noun. A coffee drink made with steamed milk.",
     example:"A: Un caf\u00e9-cr\u00e8me, s'il vous pla\u00eet.\nB: Grand ou petit ?",
     exampleSrc:"A: A coffee with cream, please.\nB: Large or small?",
     funFact:"Often shortened to 'un cr\u00e8me' in Parisian caf\u00e9s. Not to be confused with Italian cappuccino."},

    {type:"teach", trg:"un cendrier", src:"an ashtray", pos:"noun", gender:"m",
     note:"Masculine noun. A receptacle for cigarette ash and butts.",
     example:"A: Il n'y a plus de cendriers dans les restaurants.\nB: Normal, c'est interdit de fumer.",
     exampleSrc:"A: There are no more ashtrays in restaurants.\nB: Of course, smoking is banned.",
     funFact:"From 'cendre' (ash). France banned indoor smoking in 2007. The cendrier is now a relic of caf\u00e9 culture."},

    {type:"teach", trg:"une cochonnaille", src:"a pork cold cut, charcuterie", pos:"noun", gender:"f",
     note:"Feminine noun. Informal. Pork-based cold cuts and cured meats.",
     example:"A: On partage une assiette de cochonnailles ?\nB: Avec un bon vin rouge, parfait.",
     exampleSrc:"A: Shall we share a plate of cold cuts?\nB: With a good red wine, perfect.",
     funFact:"From 'cochon' (pig). The word sounds rustic and convivial, evoking country meals."},

    {type:"match", pairs:[
      {trg:"brasserie", src:"brewpub restaurant"},
      {trg:"cr\u00eaperie", src:"crepe restaurant"},
      {trg:"cuivre", src:"copper"},
      {trg:"barman", src:"bartender"},
      {trg:"cochonnaille", src:"pork cold cuts"}
    ]},

    {type:"fb",
     s:"Le {1} nous a pr\u00e9par\u00e9 un cocktail sp\u00e9cial pour la soir\u00e9e.",
     a:["barman"],
     opts:["barman","boulanger","cuivre","cognac"],
     hint:"The person who mixes and serves drinks behind the bar counter.",
     sSrc:"The {1} prepared a special cocktail for us for the evening."},

    {type:"mc",
     q:"Quel m\u00e9tal est traditionnellement utilis\u00e9 pour les casseroles en France ?",
     opts:["Le cuivre","Le cognac","Le biscuit","Le bonus"],
     ans:"Le cuivre",
     hint:"A reddish metal prized by French chefs for excellent heat distribution."}
  ]
};
export default LESSON_6;
