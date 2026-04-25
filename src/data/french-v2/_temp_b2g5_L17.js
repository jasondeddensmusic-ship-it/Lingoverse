// French B2 Gap Lesson 17. Food and Gastronomy
const LESSON_17 = {id:"frv2_b2g5_l17", title:"Gastronomie et terroir", icon:"🍽️", xp:15, board:true, steps:[
  {type:"intro", title:"Gastronomie et terroir",
   desc:"Explore vocabulary for discussing French gastronomy, regional cuisine, and food culture at B2 level.",
   goals:["Learn 15 key words about food and gastronomy","Discuss culinary traditions and regional specialties","Use gastronomic vocabulary in context"]},

  {type:"teach", trg:"l'amuse-gueule", src:"the appetizer / canape", pos:"noun", gender:"m",
   note:"A small snack served before a meal. Literally: 'mouth amuser'.\nPlural: amuse-gueules. Informal register.",
   example:"A: Les amuse-gueules sont délicieux.\nB: Le chef les a préparés spécialement pour nous.\nA: Ce feuilleté au fromage est incroyable.\nB: Attends de goûter le plat principal!",
   exampleSrc:"A: The appetizers are delicious.\nB: The chef prepared them specially for us.\nA: This cheese puff is incredible.\nB: Wait until you taste the main course!",
   funFact:"'Gueule' is informal for 'mouth' (literally: animal's jaw). In fine dining, 'amuse-bouche' is more elegant."},

  {type:"teach", trg:"le cannelloni", src:"the cannelloni", pos:"noun", gender:"m",
   note:"Tube-shaped pasta stuffed with filling.\nItalian origin, very popular in French cuisine.",
   example:"A: Les cannellonis sont farcis aux épinards et à la ricotta.\nB: C'est un plat d'origine italienne.\nA: La France l'a adopté depuis longtemps.\nB: La cuisine française emprunte beaucoup à l'Italie.",
   exampleSrc:"A: The cannelloni are stuffed with spinach and ricotta.\nB: It's a dish of Italian origin.\nA: France adopted it a long time ago.\nB: French cuisine borrows a lot from Italy.",
   funFact:"From Italian 'cannellone' (big tube). Catherine de Medici brought Italian cuisine to France in the 16th century."},

  {type:"teach", trg:"le café-crème", src:"the coffee with cream", pos:"noun", gender:"m",
   note:"A coffee with steamed milk or cream.\nA classic French morning drink.",
   example:"A: Un café-crème, s'il vous plaît.\nB: Avec un croissant?\nA: Oui, le petit-déjeuner classique.\nB: En terrasse, c'est encore mieux.",
   exampleSrc:"A: A coffee with cream, please.\nB: With a croissant?\nA: Yes, the classic breakfast.\nB: On the terrace, it's even better.",
   funFact:"Compound: 'café' + 'crème'. Often shortened to just 'un crème' in casual speech at the counter."},

  {type:"teach", trg:"la crème", src:"the cream (adj: cream-colored)", pos:"noun", gender:"f",
   note:"As adjective: cream-colored, off-white.\nInvariant: does not change in plural or gender.",
   example:"A: J'adore cette robe crème.\nB: La couleur est très élégante.\nA: Elle va avec tout.\nB: C'est un classique qui ne se démode jamais.",
   exampleSrc:"A: I love this cream-colored dress.\nB: The color is very elegant.\nA: It goes with everything.\nB: It's a classic that never goes out of style.",
   funFact:"Color adjectives from nouns are invariable in French: 'crème', 'orange', 'marron' never change form."},

  {type:"teach", trg:"le fumier", src:"the manure / compost", pos:"noun", gender:"m",
   note:"Animal waste used as fertilizer. Also a strong insult in colloquial French.\nDual register.",
   example:"A: Le fumier enrichit le sol de manière naturelle.\nB: C'est mieux que les engrais chimiques.\nA: L'agriculture biologique l'utilise beaucoup.\nB: Le retour aux méthodes traditionnelles est positif.",
   exampleSrc:"A: Manure enriches the soil naturally.\nB: It's better than chemical fertilizers.\nA: Organic farming uses it a lot.\nB: The return to traditional methods is positive.",
   funFact:"From 'fumer' (to smoke/manure). As an insult, 'fumier!' is extremely strong, equivalent to 'scum!'."},

  {type:"teach", trg:"l'accordéon", src:"the accordion", pos:"noun", gender:"m",
   note:"A portable musical instrument with bellows and keys.\nIcon of French popular music.",
   example:"A: L'accordéon est l'instrument du bal musette.\nB: C'est le son de Paris.\nA: Mon grand-père en jouait.\nB: La tradition continue dans certains quartiers.",
   exampleSrc:"A: The accordion is the instrument of the musette dance.\nB: It's the sound of Paris.\nA: My grandfather played it.\nB: The tradition continues in some neighborhoods.",
   funFact:"From German 'Akkordeon'. The 'bal musette' (accordion dance) is a quintessential Parisian tradition."},

  {type:"teach", trg:"le café-concert", src:"the concert cafe", pos:"noun", gender:"m",
   note:"A 19th century venue combining drinks and live music.\nPrecursor to modern cabarets.",
   example:"A: Les cafés-concerts étaient très populaires au dix-neuvième siècle.\nB: C'est l'ancêtre du cabaret.\nA: On y chantait et on y dansait.\nB: Edith Piaf a commencé dans des lieux similaires.",
   exampleSrc:"A: Concert cafes were very popular in the nineteenth century.\nB: It's the ancestor of the cabaret.\nA: People sang and danced there.\nB: Edith Piaf started in similar venues.",
   funFact:"Compound: 'café' + 'concert'. These venues launched many famous French chanson singers."},

  {type:"teach", trg:"le frappé", src:"the iced / chilled (drink)", pos:"noun", gender:"m",
   note:"Chilled or iced. Used for cold drinks.\nFeminine: frappée. Also a noun: 'un café frappé'.",
   example:"A: Un café frappé, s'il vous plaît.\nB: Avec de la glace pilée?\nA: Oui, il fait trop chaud aujourd'hui.\nB: Un bon choix pour l'été.",
   exampleSrc:"A: An iced coffee, please.\nB: With crushed ice?\nA: Yes, it's too hot today.\nB: A good choice for summer.",
   funFact:"From 'frapper' (to hit/strike). Originally meant 'struck' by cold, then came to mean chilled."},

  {type:"teach", trg:"l'embout", src:"the nozzle / tip", pos:"noun", gender:"m",
   note:"The end piece or tip of a tool, pipe, or device.\nTechnical but useful vocabulary.",
   example:"A: L'embout de cette poche à douille est cassé.\nB: Il faut en acheter un nouveau pour la pâtisserie.\nA: Prends un embout en forme d'étoile.\nB: D'accord, c'est le plus joli pour les décorations.",
   exampleSrc:"A: The nozzle of this piping bag is broken.\nB: We need to buy a new one for pastry making.\nA: Get a star-shaped nozzle.\nB: Okay, it's the prettiest for decorations.",
   funFact:"From 'en-' + 'bout' (end/tip). In patisserie, different embouts create different decorative patterns."},

  {type:"mc", q:"Que sont les amuse-gueules?",
   opts:["De petites bouchées servies avant le repas","Le plat principal","Le dessert","Une boisson apéritive"],
   ans:"De petites bouchées servies avant le repas",
   hint:"Small snacks to 'amuse' the mouth before the main meal begins"},

  {type:"fb", s:"Un {1}, s'il vous plaît, avec un croissant.",
   a:["café-crème"], opts:["café-crème","café-concert","café-tabac","café frappé"],
   hint:"A classic French morning drink: coffee served with steamed milk or cream",
   sSrc:"A {1}, please, with a croissant."},

  {type:"teach", trg:"l'ajoutée", src:"added / supplementary", pos:"adj", gender:null,
   note:"Something that has been added. Often in 'valeur ajoutée' (added value).\nFeminine form of 'ajouté'.",
   example:"A: Ce service a une vraie valeur ajoutée.\nB: Il fait la différence avec la concurrence.\nA: Les clients sont prêts à payer plus.\nB: Quand la qualité est là, le prix se justifie.",
   exampleSrc:"A: This service has real added value.\nB: It makes the difference with the competition.\nA: Customers are willing to pay more.\nB: When quality is there, the price is justified.",
   funFact:"'Valeur ajoutée' (added value) is a key business concept. The French VAT tax is 'TVA: Taxe sur la Valeur Ajoutée'."},

  {type:"teach", trg:"les fêtes", src:"the holidays / festivities", pos:"noun", gender:"pl",
   note:"Celebrations, holidays, or festivals.\nPlural of 'fête'. 'Les fêtes' often means the Christmas period.",
   example:"A: Les fêtes de fin d'année approchent.\nB: Tu as déjà acheté les cadeaux?\nA: Pas encore, je suis toujours en retard.\nB: Moi aussi, c'est la tradition!",
   exampleSrc:"A: The year-end holidays are approaching.\nB: Have you already bought the gifts?\nA: Not yet, I'm always late.\nB: Me too, it's tradition!",
   funFact:"'Faire la fête' means to party. 'Les fêtes' without qualification usually means Christmas and New Year."},

  {type:"teach", trg:"le gradé", src:"the ranked officer", pos:"noun", gender:"m",
   note:"A military person with rank.\nFrom 'grade' (rank). Also adjective: 'un officier gradé'.",
   example:"A: Les gradés doivent montrer l'exemple.\nB: La discipline commence par le haut.\nA: Un bon officier inspire ses troupes.\nB: Le respect se gagne, il ne s'impose pas.",
   exampleSrc:"A: Ranked officers must set an example.\nB: Discipline starts from the top.\nA: A good officer inspires his troops.\nB: Respect is earned, not imposed.",
   funFact:"From 'grade' (rank), itself from Latin 'gradus' (step). Each grade is a step up in the hierarchy."},

  {type:"mc", q:"Quel instrument est l'icône de la musique populaire parisienne?",
   opts:["Le violon","L'accordéon","Le piano","La guitare"],
   ans:"L'accordéon",
   hint:"The instrument of the 'bal musette', the sound of traditional Paris"},

  {type:"fb", s:"Le {1} enrichit le sol naturellement, c'est mieux que les engrais chimiques.",
   a:["fumier"], opts:["fumier","gravier","grillage","crustacé"],
   hint:"Animal waste used as natural fertilizer in organic farming",
   sSrc:"{1} enriches the soil naturally, it's better than chemical fertilizers."},

  {type:"match", pairs:[
    {trg:"l'amuse-gueule", src:"appetizer"},
    {trg:"le café-concert", src:"concert cafe"},
    {trg:"frappé", src:"iced / chilled"},
    {trg:"les fêtes", src:"holidays"},
    {trg:"la valeur ajoutée", src:"added value"}
  ]},

  {type:"mc", q:"Que signifie 'un café frappé'?",
   opts:["Un café au lait","Un café décaféiné","Un café servi glacé","Un café très fort"],
   ans:"Un café servi glacé",
   hint:"'Frappé' means chilled or struck by cold, served with ice"},

  {type:"fb", s:"Les {1} de fin d'année sont l'occasion de se retrouver en famille.",
   a:["fêtes"], opts:["fêtes","crèperies","grandeurs","galères"],
   hint:"The holiday celebrations at the end of the year, Christmas and New Year",
   sSrc:"The year-end {1} are an opportunity to gather with family."},

  {type:"drag_fill", s:"Les {1} étaient populaires au dix-neuvième siècle, avec musique et {2}.",
   blanks:{"1":"cafés-concerts","2":"danse"},
   pool:["cafés-concerts","danse","amuse-gueules","peinture"],
   hint:"Venues combining drinks and live entertainment, a precursor to cabaret"},

  {type:"mc", q:"Les adjectifs de couleur tirés de noms (crème, orange, marron) sont:",
   opts:["Variables comme les autres adjectifs","Toujours au féminin","Toujours au pluriel","Invariables, ils ne changent pas"],
   ans:"Invariables, ils ne changent pas",
   hint:"These color adjectives derived from nouns never change form for gender or number"}
]};
export default LESSON_17;
