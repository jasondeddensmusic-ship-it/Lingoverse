// Batch 7 — Unit 08 extra lesson. Lo shopping: Jewelry & Personal Accessories
const BATCH7_L1 = {id:"itv2_u08l_b7_1", title:"Gioielli e accessori", icon:"\u{1F48D}", xp:15, board:true, steps:[
{type:"intro", title:"Gioielli e accessori",
 desc:"Learn vocabulary for jewelry, accessories, and describing personal style.",
 goals:["Name common jewelry and accessories","Describe materials and styles","Shop for gifts and personal items"]},

{type:"teach", trg:"l'anello", src:"the ring", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: gli anelli.\n'Anello di fidanzamento' = engagement ring.",
 example:"A: Che bell'anello! E d'oro?\nB: Si, e un regalo della nonna.",
 exampleSrc:"A: What a beautiful ring! Is it gold?\nB: Yes, it is a gift from grandma.",
 funFact:"Italian engagement rings are traditionally worn on the left hand, but wedding bands go on the right hand. This is the opposite of many English-speaking countries."},

{type:"teach", trg:"la collana", src:"the necklace", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le collane.\nFrom 'collo' (neck).",
 example:"A: Questa collana e bellissima.\nB: E fatta di corallo.",
 exampleSrc:"A: This necklace is beautiful.\nB: It is made of coral.",
 funFact:"Torre del Greco near Naples has been the world capital of coral jewelry making for centuries. Italian coral necklaces are prized throughout the Mediterranean."},

{type:"teach", trg:"il braccialetto", src:"the bracelet", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i braccialetti.\nDiminutive of 'bracciale.'",
 example:"A: Mi piace il tuo braccialetto.\nB: Grazie, l'ho comprato a Firenze.",
 exampleSrc:"A: I like your bracelet.\nB: Thanks, I bought it in Florence.",
 funFact:"Florence's Ponte Vecchio (Old Bridge) is lined with jewelry shops since the 16th century. It is one of the world's most famous shopping streets for gold and silver."},

{type:"teach", trg:"l'orecchino", src:"the earring", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: gli orecchini.\nFrom 'orecchio' (ear).",
 example:"A: Hai perso un orecchino!\nB: Oh no, dove?",
 exampleSrc:"A: You lost an earring!\nB: Oh no, where?",
 funFact:"Vermeer's famous painting 'La ragazza con l'orecchino di perla' (Girl with a Pearl Earring) is one of the most reproduced artworks in Italian museums and gift shops."},

{type:"teach", trg:"l'oro", src:"gold", pos:"noun", gender:"m",
 note:"Masculine noun. 'D'oro' = made of gold.\n'Oro giallo/bianco/rosa' = yellow/white/rose gold.",
 example:"A: E d'oro o d'argento?\nB: D'oro bianco.",
 exampleSrc:"A: Is it gold or silver?\nB: White gold.",
 funFact:"Arezzo in Tuscany is Italy's gold capital, producing about 30% of Europe's gold jewelry. The annual Arezzo gold fair (Oro Arezzo) is a major industry event."},

{type:"teach", trg:"l'argento", src:"silver", pos:"noun", gender:"m",
 note:"Masculine noun. 'D'argento' = made of silver.\nAlso used for hair: 'capelli d'argento' = silver hair.",
 example:"A: Preferisco l'argento all'oro.\nB: Anche io, e piu elegante.",
 exampleSrc:"A: I prefer silver to gold.\nB: Me too, it is more elegant.",
 funFact:"'Argento vivo' (quicksilver/mercury) is used figuratively to describe a restless person. 'Ha l'argento vivo addosso' means someone who cannot sit still."},

{type:"teach", trg:"la perla", src:"the pearl", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le perle.\n'Perla di saggezza' = pearl of wisdom.",
 example:"A: Le perle sono naturali?\nB: Si, vengono dal Giappone.",
 exampleSrc:"A: Are the pearls natural?\nB: Yes, they come from Japan.",
 funFact:"'Gettare perle ai porci' (to cast pearls before swine) is a common Italian expression from the Bible. It means wasting something valuable on those who do not appreciate it."},

{type:"teach", trg:"il diamante", src:"the diamond", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i diamanti.\nFrom Greek 'adamas' (unconquerable).",
 example:"A: Il diamante e la pietra piu dura.\nB: Per questo si dice 'un diamante e per sempre.'",
 exampleSrc:"A: The diamond is the hardest stone.\nB: That is why they say 'a diamond is forever.'",
 funFact:"Italy is a major diamond cutting and trading center. Valenza Po in Piedmont is known as the 'city of gold and jewels' for its concentration of jewelry workshops."},

{type:"teach", trg:"la borsa", src:"the handbag / purse", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le borse.\nAlso: 'borsa' = stock exchange, 'borsa di studio' = scholarship.",
 example:"A: Che bella borsa! E di pelle?\nB: Si, pelle italiana.",
 exampleSrc:"A: What a beautiful bag! Is it leather?\nB: Yes, Italian leather.",
 funFact:"Italian leather goods are world-famous. Florence is the leather capital, with the San Lorenzo market and Santa Croce workshops dating back to the Renaissance."},

{type:"teach", trg:"gli occhiali da sole", src:"sunglasses", pos:"noun", gender:"m",
 note:"Masculine plural noun. 'Occhiali' = glasses.\nAlways plural in Italian.",
 example:"A: Dove sono i miei occhiali da sole?\nB: Sulla tua testa!",
 exampleSrc:"A: Where are my sunglasses?\nB: On your head!",
 funFact:"Italy dominates the global eyewear industry. Luxottica, based in Milan, makes glasses for Ray-Ban, Prada, Chanel, and dozens of other brands."},

{type:"teach", trg:"il portafoglio", src:"the wallet", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i portafogli.\nLiterally: 'leaf/sheet carrier' (porta + foglio).",
 example:"A: Ho dimenticato il portafoglio a casa!\nB: Non ti preoccupare, pago io.",
 exampleSrc:"A: I forgot my wallet at home!\nB: Do not worry, I will pay.",
 funFact:"'Portafoglio' literally means 'folder carrier.' The word 'portafoglio' in politics means 'portfolio,' as in a minister's area of responsibility."},

{type:"teach", trg:"indossare", src:"to wear", pos:"verb", gender:null,
 note:"Regular -are verb. indosso, indossi, indossa.\nUsed for clothing and accessories.",
 example:"A: Cosa indossi stasera?\nB: Un vestito nero con la collana d'oro.",
 exampleSrc:"A: What are you wearing tonight?\nB: A black dress with a gold necklace.",
 funFact:"'Indossare' is more formal than 'portare' or 'mettere' for wearing. Italian fashion magazines and stylists prefer 'indossare' for its elegance."},

{type:"teach", trg:"regalare", src:"to give as a gift", pos:"verb", gender:null,
 note:"Regular -are verb. regalo, regali, regala.\n'Il regalo' = the gift/present.",
 example:"A: Cosa regali alla mamma per il compleanno?\nB: Una bella collana.",
 exampleSrc:"A: What are you giving mom for her birthday?\nB: A beautiful necklace.",
 funFact:"In Italy, it is traditional to 'regalare' gold jewelry for important milestones: baptism, communion, 18th birthday, engagement, and wedding."},

{type:"teach", trg:"elegante", src:"elegant / classy", pos:"adj", gender:null,
 note:"Adjective. Same form for masculine and feminine.\n'Vestirsi elegante' = to dress up.",
 example:"A: Devi vestirti elegante per la cena.\nB: Metto il vestito blu.",
 exampleSrc:"A: You need to dress elegantly for the dinner.\nB: I will wear the blue suit.",
 funFact:"'La bella figura' (making a good impression) is a core Italian value. Dressing elegantly is not vanity but social respect. Even a quick errand calls for looking put-together."},

{type:"mc", q:"Dove si comprano gioielli d'oro a Firenze?",
 opts:["Sul Ponte Vecchio","Al Colosseo","In Piazza San Marco","Al Duomo"],
 ans:"Sul Ponte Vecchio",
 hint:"The famous old bridge lined with jewelry shops since the 16th century."},

{type:"fb", s:"Le {1} sono naturali, vengono dal Giappone.", a:["perle"],
 opts:["perle","collane","anelli","borse"],
 hint:"Round, smooth gems that come from oysters. Symbol of elegance.",
 sSrc:"The {1} are natural, they come from Japan."},

{type:"match", pairs:[
 {trg:"l'anello", src:"ring"},
 {trg:"la collana", src:"necklace"},
 {trg:"il braccialetto", src:"bracelet"},
 {trg:"l'orecchino", src:"earring"}
]},

{type:"mc", q:"Che cosa significa 'la bella figura'?",
 opts:["Making a good impression","Having a nice body","Wearing jewelry","Being fashionable"],
 ans:"Making a good impression",
 hint:"A core Italian value about presenting yourself well to others."},

{type:"fb", s:"Cosa {1} stasera? Un vestito nero.", a:["indossi"],
 opts:["indossi","regali","compri","porti"],
 hint:"The formal verb for wearing clothes or accessories.",
 sSrc:"What are you {1} tonight? A black dress."},

{type:"mc", q:"Su quale mano si porta la fede nuziale in Italia?",
 opts:["La mano destra","La mano sinistra","Non si porta","Dipende dalla regione"],
 ans:"La mano destra",
 hint:"The opposite of many English-speaking countries. Right, not left."},

{type:"fb", s:"E d'{1} bianco o d'argento?", a:["oro"],
 opts:["oro","argento","diamante","perla"],
 hint:"The precious yellow metal. White variety also exists.",
 sSrc:"Is it white {1} or silver?"},

{type:"match", pairs:[
 {trg:"l'oro", src:"gold"},
 {trg:"l'argento", src:"silver"},
 {trg:"il diamante", src:"diamond"},
 {trg:"il portafoglio", src:"wallet"}
]}
]};
export default BATCH7_L1;
