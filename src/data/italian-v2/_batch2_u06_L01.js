// Unit 06 Batch 2. Lesson 1: More City Places & Shops
const BATCH2_U06_L1 = {
  id:"itv2_u06l_b2_1", title:"I negozi in città", icon:"\ud83d\udecd\ufe0f", xp:15, board:true,
  steps:[
    {type:"intro", title:"I negozi in città",
     desc:"Learn the names of shops, services, and other places you will find in an Italian city.",
     goals:["Name common shops and services","Ask where shops are located","Understand Italian shopping culture"]},

    {type:"teach", trg:"la panetteria", src:"the bakery", pos:"noun", gender:"f",
     note:"Feminine. From 'pane' (bread) + '-etteria' (shop suffix).\nAlso called 'il panificio' in some regions.",
     example:"A: Vado alla panetteria. Vuoi qualcosa?\nB: Si, prendi del pane fresco!",
     exampleSrc:"A: I am going to the bakery. Do you want something?\nB: Yes, get some fresh bread!",
     funFact:"Italian bakeries open very early, often at 6 AM. The smell of fresh bread in the morning is part of Italian daily life. Each region has its own bread specialties, from Puglia's 'pane di Altamura' to Sardinia's 'pane carasau.'"},

    {type:"teach", trg:"la macelleria", src:"the butcher shop", pos:"noun", gender:"f",
     note:"Feminine. From 'macellaio' (butcher), from Latin 'macellum' (market).\nSpecialized meat shop.",
     example:"A: Dov'e la macelleria?\nB: Accanto alla panetteria.",
     exampleSrc:"A: Where is the butcher shop?\nB: Next to the bakery.",
     funFact:"Italian butcher shops are specialized. The macellaio knows every cut and can advise on cooking. Unlike supermarkets, a macelleria builds personal relationships. 'Il solito' (the usual) is common among regulars."},

    {type:"teach", trg:"la pasticceria", src:"the pastry shop", pos:"noun", gender:"f",
     note:"Feminine. From 'pasticcio' (pastry). Sells cakes, pastries, and sweets.\nAlso serves as a cafe in many towns.",
     example:"A: Andiamo alla pasticceria?\nB: Si, voglio una torta!",
     exampleSrc:"A: Shall we go to the pastry shop?\nB: Yes, I want a cake!",
     funFact:"Italian pasticcerie are temples of craftsmanship. Each region has signature pastries: cannoli (Sicily), sfogliatella (Naples), pandoro (Verona). For celebrations, Italians buy a whole cake ('torta') from the pasticceria."},

    {type:"teach", trg:"la gelateria", src:"the ice cream shop", pos:"noun", gender:"f",
     note:"Feminine. From 'gelato' + '-eria' (shop suffix).\nArtisan gelato is made fresh daily.",
     example:"A: C'e una buona gelateria qui vicino?\nB: Si, all'angolo. Il gelato e artigianale!",
     exampleSrc:"A: Is there a good ice cream shop nearby?\nB: Yes, on the corner. The gelato is artisan!",
     funFact:"Look for 'gelato artigianale' (artisan gelato) signs. Avoid shops with mountains of brightly colored gelato. The best gelaterie keep their product in covered metal containers. Natural colors mean natural ingredients."},

    {type:"teach", trg:"la tabaccheria", src:"the tobacco shop", pos:"noun", gender:"f",
     note:"Feminine. Also called 'il tabaccaio.' Sells much more than tobacco.\nMarked by a big 'T' sign.",
     example:"A: Dove compro i francobolli?\nB: Alla tabaccheria.",
     exampleSrc:"A: Where do I buy stamps?\nB: At the tobacco shop.",
     funFact:"Italian tabaccherie sell stamps, bus tickets, phone credit, lottery tickets, and official tax stamps ('marche da bollo'). They are essential service points. The big black 'T' sign is found in every Italian town."},

    {type:"teach", trg:"la lavanderia", src:"the laundromat / dry cleaner", pos:"noun", gender:"f",
     note:"Feminine. From 'lavare' (to wash).\n'Lavanderia a gettoni' = coin laundromat.",
     example:"A: C'e una lavanderia qui vicino?\nB: Si, in via Roma.",
     exampleSrc:"A: Is there a laundromat nearby?\nB: Yes, on Roma street.",
     funFact:"Self-service laundromats ('lavanderie a gettoni') are becoming common in Italian cities, especially near universities. Traditional dry cleaners ('tintorie') still exist for dress shirts and suits."},

    {type:"teach", trg:"il fioraio", src:"the florist", pos:"noun", gender:"m",
     note:"Masculine. From 'fiore' (flower).\nAlso: 'il negozio di fiori' (flower shop).",
     example:"A: Vado dal fioraio. E il compleanno della nonna.\nB: Che bel pensiero!",
     exampleSrc:"A: I am going to the florist. It is grandmother's birthday.\nB: What a nice thought!",
     funFact:"Flowers are important in Italian social life. Never bring chrysanthemums as a gift (they are for funerals). Red roses are romantic. For dinner invitations, bring an odd number of flowers. Italians notice these details."},

    {type:"teach", trg:"l'edicola", src:"the newsstand", pos:"noun", gender:"f",
     note:"Feminine. Uses l' before vowel. Sells newspapers, magazines, and small items.\nFrom Latin 'aedicula' (small temple).",
     example:"A: Compra il giornale all'edicola.\nB: Quale giornale vuoi?",
     exampleSrc:"A: Buy the newspaper at the newsstand.\nB: Which newspaper do you want?",
     funFact:"Italian edicole sell newspapers, magazines, stickers, small toys, and sometimes snacks. Despite the digital age, Italians still value their morning newspaper. Major papers include La Repubblica, Il Corriere della Sera, and La Stampa."},

    {type:"teach", trg:"il mercatino", src:"the small market / flea market", pos:"noun", gender:"m",
     note:"Masculine. Diminutive of 'mercato.'\n'Mercatino delle pulci' = flea market. 'Mercatino di Natale' = Christmas market.",
     example:"A: Sabato c'è il mercatino in piazza.\nB: Andiamo! Adoro i mercatini!",
     exampleSrc:"A: Saturday there is a market in the square.\nB: Let's go! I love small markets!",
     funFact:"Italian Christmas markets ('mercatini di Natale') are magical, especially in northern cities like Bolzano, Trento, and Merano, which share Austrian-German traditions. They sell crafts, food, and mulled wine ('vin brule')."},

    {type:"teach", trg:"il centro", src:"the center / downtown", pos:"noun", gender:"m",
     note:"Masculine. 'Il centro storico' = the historic center.\nFrom Latin 'centrum' (center point).",
     example:"A: Andiamo in centro?\nB: Si, voglio fare shopping!",
     exampleSrc:"A: Shall we go downtown?\nB: Yes, I want to go shopping!",
     funFact:"Italian cities revolve around their 'centro storico' (historic center). This is where the main piazza, church, shops, and restaurants are. Many Italian centers are pedestrian-only zones ('zone pedonali'), perfect for walking."},

    {type:"teach", trg:"aperto", src:"open", pos:"adj", gender:"m",
     note:"Masculine: aperto. Feminine: aperta.\nPast participle of 'aprire.' 'E aperto?' = Is it open?",
     example:"A: Il negozio e aperto?\nB: Si, e aperto fino alle otto.",
     exampleSrc:"A: Is the shop open?\nB: Yes, it is open until eight.",
     funFact:"Italian shops have complex opening hours. Many close for lunch (1-3:30 PM) and all day Sunday or Monday. Supermarkets have longer hours. 'Orario continuato' means non-stop opening (no lunch break), increasingly common."},

    {type:"teach", trg:"chiuso", src:"closed", pos:"adj", gender:"m",
     note:"Masculine: chiuso. Feminine: chiusa.\nPast participle of 'chiudere.' 'E chiuso?' = Is it closed?",
     example:"A: La farmacia e chiusa?\nB: Si, apre domani mattina.",
     exampleSrc:"A: Is the pharmacy closed?\nB: Yes, it opens tomorrow morning.",
     funFact:"'Chiuso per ferie' (closed for holidays) is a common August sign. 'Chiuso il lunedì' (closed Mondays) appears on many Italian shops and museums. Always check before visiting."},

    {type:"teach", trg:"la via", src:"the street / road (address)", pos:"noun", gender:"f",
     note:"Feminine. Used in addresses: 'Via Roma, 15.'\nFrom Latin 'via' (road, path, way).",
     example:"A: In che via abiti?\nB: In via Garibaldi, numero 42.",
     exampleSrc:"A: On what street do you live?\nB: On Garibaldi street, number 42.",
     funFact:"Italian addresses use 'via' (street), 'piazza' (square), 'viale' (boulevard), 'corso' (main road), and 'vicolo' (alley). 'Via' is the most common. Streets are often named after historical figures, dates, or places."},

    {type:"teach", trg:"l'angolo", src:"the corner", pos:"noun", gender:"m",
     note:"Masculine. Uses l' before vowel. 'All'angolo' = on the corner.\nFrom Latin 'angulus.'",
     example:"A: Dov'e la farmacia?\nB: All'angolo, a destra.",
     exampleSrc:"A: Where is the pharmacy?\nB: On the corner, to the right.",
     funFact:"From Latin 'angulus' (corner, angle). English 'angle' comes from the same root. 'Il bar all'angolo' (the bar on the corner) is a fixture of Italian neighborhoods. Every block has one."},

    // Quiz steps
    {type:"mc", q:"What does a 'tabaccheria' sell besides tobacco?",
     opts:["Stamps, bus tickets, phone credit, lottery tickets","Only cigarettes","Food and drinks","Clothes and shoes"],
     ans:"Stamps, bus tickets, phone credit, lottery tickets",
     hint:"These shops marked with a big 'T' are essential service points. They sell many daily necessities beyond their name."},

    {type:"fb", s:"Vado alla {1}. Vuoi del pane fresco?",
     a:["panetteria"],
     opts:["panetteria","pasticceria","macelleria","farmacia"],
     hint:"This shop sells bread and is open early in the morning. From 'pane' (bread).",
     sSrc:"I am going to the {1}. Do you want fresh bread?"},

    {type:"mc", q:"What should you avoid bringing as a gift in Italy?",
     opts:["Chocolate","Chrysanthemums (for funerals only)","Red roses","Wine"],
     ans:"Chrysanthemums (for funerals only)",
     hint:"In Italian culture, these flowers are strictly associated with death and cemetery visits. Never give them as a celebration gift."},

    {type:"fb", s:"Il negozio e {1} fino alle otto.",
     a:["aperto"],
     opts:["aperto","chiuso","grande","nuovo"],
     hint:"The shop can receive customers. This word is the opposite of 'chiuso.'",
     sSrc:"The shop is {1} until eight."},

    {type:"match", pairs:[
      {trg:"la panetteria", src:"the bakery"},
      {trg:"la pasticceria", src:"the pastry shop"},
      {trg:"la gelateria", src:"the ice cream shop"},
      {trg:"la tabaccheria", src:"the tobacco shop"},
      {trg:"l'edicola", src:"the newsstand"}
    ]},

    {type:"mc", q:"What is 'il centro storico'?",
     opts:["A museum","A train station","The historic city center","A shopping mall"],
     ans:"The historic city center",
     hint:"Every Italian c... has one. It is where the main piazza, church, and shops are. Often pedestrian-only."},

    {type:"fb", s:"In che {1} abiti?",
     a:["via"],
     opts:["via","piazza","palazzo","piano"],
     hint:"This word means 'street' and is used in Italian addresses. From Latin meaning 'road' or 'path.'",
     sSrc:"On what {1} do you live?"},

    {type:"mc", q:"What does 'chiuso per ferie' mean on a shop?",
     opts:["Closed for lunch","Open all day","Under renovation","Closed for holidays"],
     ans:"Closed for holidays",
     hint:"A common August sign in Italy when businesses shut down for summer vacation."}
  ,{type:"match",pairs:[{trg:"chiuso",src:"closed"}]}]
};
export default BATCH2_U06_L1;
