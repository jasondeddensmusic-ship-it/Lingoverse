const LESSON_15 = {
  id:"frv2_b2g4_l15", title:"Fetes et traditions", icon:"\u{1F389}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Fetes et traditions",
     desc:"Explore vocabulary related to celebrations, food culture, and French social traditions.",
     goals:["Learn 15 words about food, parties, and traditions","Discuss French cultural customs","Describe festive occasions and culinary heritage"]},

    {type:"teach", trg:"un amuse-gueule", src:"an appetizer, a snack", pos:"noun", gender:"m",
     note:"Masculine noun. A small bite served before a meal.\nLiterally: amuse the mouth.",
     example:"A: Les amuse-gueules sont delicieux ce soir.\nB: Le chef a prepare des feuillets au fromage.",
     exampleSrc:"A: The appetizers are delicious tonight.\nB: The chef prepared cheese pastries.",
     funFact:"Literally 'amuse the mouth'. The refined version is 'amuse-bouche', preferred in fine dining."},

    {type:"teach", trg:"une bearnaise", src:"a Bearnaise sauce", pos:"noun", gender:"f",
     note:"Feminine noun. A rich sauce made with butter, egg yolks, and tarragon.",
     example:"A: Cette bearnaise accompagne parfaitement le steak.\nB: La recette demande du vinaigre d'estragon.",
     exampleSrc:"A: This Bearnaise sauce perfectly accompanies the steak.\nB: The recipe calls for tarragon vinegar.",
     funFact:"Named after Bearn, a region in southwest France. Henri IV, born there, was called 'le Grand Bearnais'."},

    {type:"teach", trg:"un cannelloni", src:"a cannelloni", pos:"noun", gender:"m",
     note:"Masculine noun. Tube-shaped pasta filled with meat or cheese.\nItalian origin.",
     example:"A: Les cannellonis de ma grand-mere sont les meilleurs.\nB: Elle les fait avec de la ricotta et des epinards.",
     exampleSrc:"A: My grandmother's cannelloni are the best.\nB: She makes them with ricotta and spinach.",
     funFact:"Italian in origin, but fully adopted into French cuisine. French spelling keeps the Italian plural."},

    {type:"teach", trg:"une cagoule", src:"a balaclava, a hooded jacket", pos:"noun", gender:"f",
     note:"Feminine noun. A head covering or lightweight hooded rain jacket.\nContext changes meaning.",
     example:"A: Mets ta cagoule, il pleut des cordes.\nB: Je la deteste, elle me donne l'air ridicule.",
     exampleSrc:"A: Put on your hooded jacket, it's pouring.\nB: I hate it, it makes me look ridiculous.",
     funFact:"In Britain, 'cagoule' means a cheap rain jacket. In France, it can also mean a balaclava for skiing."},

    {type:"teach", trg:"les fetes", src:"holidays, celebrations", pos:"noun", gender:"f",
     note:"Feminine plural. Parties, holidays, or festivities.\nFrance has many public holidays.",
     example:"A: Les fetes de fin d'annee approchent.\nB: Tu as prevu quelque chose pour le reveillon ?",
     exampleSrc:"A: The end-of-year holidays are approaching.\nB: Have you planned anything for New Year's Eve?",
     funFact:"France has 11 public holidays. 'Faire la fete' means to party. 'Bonne fete' = happy name day."},

    {type:"mc",
     q:"Quel mot designe une petite bouchee servie avant le repas ?",
     opts:["un amuse-gueule","une bearnaise","un cannelloni","une cagoule"],
     ans:"un amuse-gueule",
     hint:"Literally means to a... the mouth. A small bite before the main course."},

    {type:"teach", trg:"un cafe-concert", src:"a cafe with live music", pos:"noun", gender:"m",
     note:"Masculine noun. A cafe where musicians perform.\nPopular in the 19th century.",
     example:"A: Au XIXe siecle, les cafes-concerts etaient tres populaires.\nB: Edith Piaf y a commence sa carriere.",
     exampleSrc:"A: In the 19th century, music cafes were very popular.\nB: Edith Piaf started her career there.",
     funFact:"The cafe-concert was the ancestor of the modern music venue. Toulouse-Lautrec painted many of them."},

    {type:"teach", trg:"un cafe-tabac", src:"a cafe and tobacco shop", pos:"noun", gender:"m",
     note:"Masculine noun. A combined cafe and tobacco shop.\nVery common in France.",
     example:"A: On se retrouve au cafe-tabac du coin ?\nB: D'accord, ils font un bon expresso.",
     exampleSrc:"A: Shall we meet at the corner cafe-tabac?\nB: Okay, they make a good espresso.",
     funFact:"The red diamond-shaped sign marks a 'tabac'. They also sell lottery tickets, stamps, and phone cards."},

    {type:"teach", trg:"un cigarillo", src:"a cigarillo", pos:"noun", gender:"m",
     note:"Masculine noun. A small, thin cigar.\nFrom Spanish diminutive of 'cigarro'.",
     example:"A: Il fume un cigarillo apres le diner.\nB: L'odeur est plus douce qu'un cigare.",
     exampleSrc:"A: He smokes a cigarillo after dinner.\nB: The smell is milder than a cigar.",
     funFact:"From Spanish 'cigarillo', diminutive of cigarro. France bans smoking indoors since 2007."},

    {type:"fb",
     s:"Les {1} de fin d'annee sont un moment important pour les familles.",
     a:["fetes"],
     opts:["fetes","cafes","cagoules","cannellonis"],
     hint:"The word for holidays or celebrations. France has eleven public ones per year.",
     sSrc:"The end-of-year {1} are an important time for families."},

    {type:"teach", trg:"genereux", src:"generous", pos:"adj", gender:null,
     note:"Adjective. Willing to give freely. Feminine: genereuse.\nAlso means ample, abundant.",
     example:"A: Il est tres genereux avec ses amis.\nB: Il offre toujours des cadeaux magnifiques.",
     exampleSrc:"A: He is very generous with his friends.\nB: He always gives magnificent gifts.",
     funFact:"'Un vin genereux' means a full-bodied wine. Generosity applies to flavor too in French."},

    {type:"teach", trg:"genereusement", src:"generously", pos:"adv", gender:null,
     note:"Adverb. In a generous manner.\nFrom 'genereux' + -ment suffix.",
     example:"A: Elle a donne genereusement a l'association.\nB: Son don va aider beaucoup de familles.",
     exampleSrc:"A: She gave generously to the charity.\nB: Her donation will help many families.",
     funFact:"French adverbs add -ment to the feminine adjective: genereuse becomes genereusement."},

    {type:"teach", trg:"un fleuriste", src:"a florist", pos:"noun", gender:"m",
     note:"Masculine or feminine noun. A person who sells flowers.\nAlso the flower shop itself.",
     example:"A: Le fleuriste a compose un bouquet magnifique.\nB: Les roses sont superbes.",
     exampleSrc:"A: The florist put together a magnificent bouquet.\nB: The roses are superb.",
     funFact:"France consumes 1.6 billion euros in flowers annually. Muguet (lily of the valley) on May 1st is a tradition."},

    {type:"mc",
     q:"Quel etablissement combine un cafe et un bureau de tabac ?",
     opts:["un cafe-tabac","un cafe-concert","un amuse-gueule","un cigarillo"],
     ans:"un cafe-tabac",
     hint:"Marked by a red diamond sign. They also sell stamps, lottery tickets, and phone cards."},

    {type:"teach", trg:"le grillage", src:"the wire fence", pos:"noun", gender:"m",
     note:"Masculine noun. Taught earlier. Here in festive outdoor context.\nWire mesh or fencing.",
     example:"A: Le grillage autour du terrain de fete est decore.\nB: On a accroche des guirlandes partout.",
     exampleSrc:"A: The fence around the festival grounds is decorated.\nB: We hung garlands everywhere.",
     funFact:"At French village fetes, the 'grillage' often separates the dance floor from the food stalls."},

    {type:"fb",
     s:"Elle a donne {1} pour soutenir l'hopital.",
     a:["genereusement"],
     opts:["genereusement","genereux","gracieusement","grossierement"],
     hint:"The adverb form of generous. Built by adding -ment to the feminine adjective form.",
     sSrc:"She gave {1} to support the hospital."},

    {type:"match", pairs:[
      {trg:"amuse-gueule", src:"appetizer snack"},
      {trg:"bearnaise", src:"butter and tarragon sauce"},
      {trg:"cafe-concert", src:"music cafe"},
      {trg:"fleuriste", src:"florist"},
      {trg:"cigarillo", src:"small cigar"}
    ]},

    {type:"mc",
     q:"Quelle sauce est faite avec du beurre, des oeufs et de l'estragon ?",
     opts:["la bearnaise","la cagoule","la gabelle","la griffe"],
     ans:"la bearnaise",
     hint:"Named after a region in southwest France where King Henri IV was born."}
  ]
};
export default LESSON_15;
