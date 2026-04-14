const LESSON_6 = {
  id:"frv2_b2g3_l6", title:"La vie urbaine", icon:"\u{1F3D9}\u{FE0F}", xp:15, board:true,
  steps:[
    {type:"intro", title:"La vie urbaine",
     desc:"Learn vocabulary about urban life, city infrastructure, and daily life in French cities.",
     goals:["Learn 17 B2 urban and infrastructure words","Describe city life and public spaces","Discuss urban challenges and amenities"]},

    {type:"teach", trg:"une artère", src:"a main road, an artery", pos:"noun", gender:"f",
     note:"Feminine noun. A major street or, literally, a blood vessel.",
     example:"A: Les Champs-Élysées est la plus belle artère de Paris.\nB: C'est aussi la plus fréquentée.",
     exampleSrc:"A: The Champs-Elysees is the most beautiful main road in Paris.\nB: It's also the busiest.",
     funFact:"French uses 'artere' for both blood vessels and major streets. The metaphor of a city as a living body is deeply rooted in French urban planning."},

    {type:"teach", trg:"un arrivage", src:"a delivery, a shipment", pos:"noun", gender:"m",
     note:"Masculine noun. A batch of goods arriving, especially fresh produce.",
     example:"A: Il y a un nouvel arrivage de poissons frais.\nB: Parfait, je vais en acheter pour ce soir.",
     exampleSrc:"A: There's a new delivery of fresh fish.\nB: Perfect, I'll buy some for tonight.",
     funFact:"At Rungis, the world's largest wholesale food market near Paris, the 'arrivages' start at 2 AM every day."},

    {type:"teach", trg:"la boiserie", src:"woodwork, wood paneling", pos:"noun", gender:"f",
     note:"Feminine noun. Decorative wooden panels on walls. Often plural: les boiseries.",
     example:"A: Les boiseries de ce château sont magnifiques.\nB: Elles datent du dix-huitième siècle.",
     exampleSrc:"A: The wood paneling in this castle is magnificent.\nB: It dates from the eighteenth century.",
     funFact:"Versailles' boiseries are among the world's finest. French artisans developed the technique to new heights under Louis XIV."},

    {type:"teach", trg:"un châssis", src:"a frame, a chassis", pos:"noun", gender:"m",
     note:"Masculine noun. The frame of a window, car, or machine.",
     example:"A: Le châssis de la fenêtre est en mauvais état.\nB: Il faudra le remplacer avant l'hiver.",
     exampleSrc:"A: The window frame is in bad condition.\nB: It will need to be replaced before winter.",
     funFact:"From Old French 'chasse' meaning frame. The word entered English as 'chassis' for car frames, keeping its French pronunciation."},

    {type:"mc",
     q:"Quel mot désigne une grande rue principale dans une ville ?",
     opts:["une artère","un arrivage","un châssis","une boiserie"],
     ans:"une artère",
     hint:"This word is also used for blood vessels. Think of a city's main roads as its lifeblood."},

    {type:"teach", trg:"un coffre-fort", src:"a safe, a strongbox", pos:"noun", gender:"m",
     note:"Masculine noun. A secure box for storing valuables. Plural: coffres-forts.",
     example:"A: Mets les bijoux dans le coffre-fort.\nB: D'accord, quel est le code ?",
     exampleSrc:"A: Put the jewelry in the safe.\nB: Alright, what's the code?",
     funFact:"Literally 'strong chest'. French compound nouns with hyphens are a distinctive feature. The adjective 'fort' follows the noun here."},

    {type:"teach", trg:"un crochet", src:"a hook, a detour", pos:"noun", gender:"m",
     note:"Masculine noun. A curved metal hook, or a deviation from a route.",
     example:"A: Faisons un crochet par le marché.\nB: Bonne idée, on pourra acheter des fruits.",
     exampleSrc:"A: Let's make a detour by the market.\nB: Good idea, we can buy some fruit.",
     funFact:"'Faire un crochet' means to make a detour. In boxing, 'un crochet' is a hook punch. Crochet needlework also takes its name from this word."},

    {type:"teach", trg:"un débarras", src:"a storage room, a junk room", pos:"noun", gender:"m",
     note:"Masculine noun. A room for storing unwanted things.",
     example:"A: J'ai trouvé de vieux livres dans le débarras.\nB: Il y a des trésors cachés là-dedans.",
     exampleSrc:"A: I found old books in the storage room.\nB: There are hidden treasures in there.",
     funFact:"'Bon debarras!' is a common French expression meaning 'good riddance!' when you are glad to be rid of something or someone."},

    {type:"teach", trg:"un dépotoir", src:"a dump, a rubbish tip", pos:"noun", gender:"m",
     note:"Masculine noun. A place for discarding waste. Also used figuratively.",
     example:"A: Cette pièce ressemble à un dépotoir.\nB: D'accord, je vais ranger.",
     exampleSrc:"A: This room looks like a dump.\nB: Alright, I'll tidy up.",
     funFact:"From 'depot' meaning deposit. Environmentalists use 'depotoir sauvage' for illegal dumping sites in the countryside."},

    {type:"fb",
     s:"Faisons un {1} par la boulangerie avant de rentrer.",
     a:["crochet"],
     opts:["crochet","arrivage","châssis","débarras"],
     hint:"This word means a small detour or deviation from your planned route.",
     sSrc:"Let's make a {1} by the bakery before heading home."},

    {type:"teach", trg:"une commode", src:"a chest of drawers", pos:"noun", gender:"f",
     note:"Feminine noun. A piece of furniture with drawers. Also an adjective meaning convenient.",
     example:"A: Cette commode ancienne vaut une fortune.\nB: Elle est dans la famille depuis trois générations.",
     exampleSrc:"A: This antique chest of drawers is worth a fortune.\nB: It has been in the family for three generations.",
     funFact:"As an adjective, 'commode' means convenient. 'Ce n'est pas commode' is a common way to say 'it's not easy'."},

    {type:"teach", trg:"un cendrier", src:"an ashtray", pos:"noun", gender:"m",
     note:"Masculine noun. A container for cigarette ash and butts.",
     example:"A: Il n'y a plus de cendrier sur les terrasses.\nB: C'est normal, c'est interdit de fumer ici.",
     exampleSrc:"A: There are no more ashtrays on the terraces.\nB: That's normal, smoking is banned here.",
     funFact:"Since 2008, smoking has been banned in French cafes and restaurants. The cendrier, once a cafe staple, is now mostly found outdoors."},

    {type:"teach", trg:"un boîtier", src:"a case, a housing", pos:"noun", gender:"m",
     note:"Masculine noun. A protective case for equipment or electronics.",
     example:"A: Le boîtier de la télécommande est cassé.\nB: On peut en acheter un nouveau en ligne.",
     exampleSrc:"A: The remote control case is broken.\nB: We can buy a new one online.",
     funFact:"From 'boite' (box). In photography, 'boitier' specifically means a camera body (without the lens)."},

    {type:"mc",
     q:"Quel meuble a des tiroirs et sert à ranger des vêtements ?",
     opts:["une commode","un coffre-fort","un châssis","un débarras"],
     ans:"une commode",
     hint:"This word is also an adjective meaning convenient. As furniture, it has multiple drawers."},

    {type:"teach", trg:"un chevron", src:"a rafter, a V-shaped pattern", pos:"noun", gender:"m",
     note:"Masculine noun. A roof beam or a V-shaped heraldic symbol.",
     example:"A: Les chevrons du toit doivent être remplacés.\nB: C'est un travail important et coûteux.",
     exampleSrc:"A: The roof rafters must be replaced.\nB: It's a major and expensive job.",
     funFact:"Citroen's logo is a double chevron, inspired by the helical gears Andre Citroen manufactured before making cars."},

    {type:"teach", trg:"aéroportuaire", src:"airport-related", pos:"adj", gender:null,
     note:"Adjective. Relating to airports and airport operations.",
     example:"A: La zone aéroportuaire s'agrandit chaque année.\nB: Le trafic aérien ne cesse d'augmenter.",
     exampleSrc:"A: The airport zone is expanding every year.\nB: Air traffic keeps increasing.",
     funFact:"France has the busiest airspace in Europe. Paris-Charles de Gaulle is the continent's second busiest airport."},

    {type:"teach", trg:"l'embellissement", src:"beautification, improvement", pos:"noun", gender:"m",
     note:"Masculine noun. The act of making something more beautiful.",
     example:"A: L'embellissement du centre-ville a pris deux ans.\nB: Mais le résultat en valait la peine.",
     exampleSrc:"A: The beautification of the city center took two years.\nB: But the result was worth it.",
     funFact:"Baron Haussmann's renovation of Paris (1853-1870) was the ultimate 'embellissement'. He demolished medieval streets to create the wide boulevards we know today."},

    {type:"match", pairs:[
      {trg:"artère", src:"main road"},
      {trg:"coffre-fort", src:"safe"},
      {trg:"débarras", src:"storage room"},
      {trg:"commode", src:"chest of drawers"},
      {trg:"embellissement", src:"beautification"}
    ]},

    {type:"fb",
     s:"L'{1} du quartier a attiré de nouveaux commerces et habitants.",
     a:["embellissement"],
     opts:["embellissement","arrivage","dépotoir","cendrier"],
     hint:"This noun means the process of making an area more attractive and beautiful.",
     sSrc:"The {1} of the neighborhood attracted new businesses and residents."}
  ]
};
export default LESSON_6;
