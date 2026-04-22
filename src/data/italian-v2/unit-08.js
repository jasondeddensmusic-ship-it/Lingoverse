// Italian V2 Unit 08. Lo shopping (Shopping & Clothes) (A2.1)
import BATCH8_L1 from './_batch8_u08_L01.js';
import BATCH7_L1 from './_batch7_u08_L01.js';
import BATCH6_L1 from './_batch6_u08_L01.js';
import BATCH4_L02 from './_batch4_u08_L02.js';
import BATCH4_L01 from './_batch4_u08_L01.js';
import BATCH3_L02 from './_batch3_u08_L02.js';
import BATCH3_L01 from './_batch3_u08_L01.js';
// CILS/CELI A2 aligned. Clothing, shopping vocabulary, colors and patterns.
import EXP_08_L1 from './_temp_u08_expand_L01.js';import EXP_08_L2 from './_temp_u08_expand_L02.js';import EXP_08_L3 from './_temp_u08_expand_L03.js';

import COVERAGE_U08 from './_coverage_u08.js';
const UNIT_08 = {
  n:8, lang:"it", srcLang:"en", track:"v2",
  title:"Lo shopping", sub:"Shopping & Clothes",
  icon:"\uD83D\uDECD\uFE0F", level:"A2.1", color:"#7B5EE8",
  lessons:[
    {id:"itv2_u8l1", title:"I vestiti", icon:"\uD83D\uDC57", xp:15, board:true, steps:[
      {type:"intro", title:"I vestiti",
       desc:"Learn the Italian names for common clothing items. Italian fashion is world-famous, and knowing these words is essential for shopping.",
       goals:["Name common clothing items in Italian","Use correct articles and gender for clothes","Describe what someone is wearing"]},

      {type:"teach", trg:"la giacca", src:"the jacket", pos:"noun", gender:"f",
       note:"Feminine. From Old French 'jaque' (short coat).\nPlural: le giacche.",
       example:"A: Ti piace questa giacca?\nB: Si, e molto elegante.",
       exampleSrc:"A: Do you like this jacket?\nB: Yes, it is very elegant.",
       funFact:"Italian fashion houses like Armani, Gucci, and Prada are known worldwide for their jackets. Milan Fashion Week is one of the 'Big Four' fashion events. The word came to Italian from French, which borrowed it from Arabic 'shakk.'"},

      {type:"teach", trg:"i pantaloni", src:"the trousers / pants", pos:"noun", gender:"m",
       note:"Masculine PLURAL. Always plural in Italian, like English 'pants.'\nSingular form 'pantalone' is rare.",
       example:"A: Questi pantaloni sono troppo lunghi.\nB: Li possiamo accorciare.",
       exampleSrc:"A: These trousers are too long.\nB: We can shorten them.",
       funFact:"Named after 'Pantalone,' a character in Italian commedia dell'arte who wore distinctive long trousers. This Venetian merchant character was so famous that his name became the word for trousers in many European languages."},

      {type:"teach", trg:"la gonna", src:"the skirt", pos:"noun", gender:"f",
       note:"Feminine. From Gothic 'gunna' (fur garment).\nPlural: le gonne. 'Minigonna' = miniskirt.",
       example:"A: Questa gonna e della tua taglia?\nB: No, e troppo grande.",
       exampleSrc:"A: Is this skirt your size?\nB: No, it is too big.",
       funFact:"The word has Germanic origins, from Gothic 'gunna' meaning a fur garment. The same root exists in English 'gown.' Italian fashion revolutionized skirt design in the 1950s and 1960s, especially through designers like Emilio Pucci."},

      {type:"teach", trg:"le scarpe", src:"the shoes", pos:"noun", gender:"f",
       note:"Feminine PLURAL. Singular: la scarpa.\nFrom Germanic 'skarpa' (leather pouch).",
       example:"A: Che belle scarpe! Dove le hai comprate?\nB: In un negozio in centro.",
       exampleSrc:"A: What beautiful shoes! Where did you buy them?\nB: In a shop in the center.",
       funFact:"Italy is one of the world's top shoe-making countries. Regions like Marche and Veneto have centuries-old shoemaking traditions. Brands like Ferragamo, Tod's, and Prada started as artisan shoe workshops."},

      {type:"teach", trg:"la camicia", src:"the shirt (button-up)", pos:"noun", gender:"f",
       note:"Feminine. From Latin 'camisia' (undergarment).\nPlural: le camicie. Formal, with buttons.",
       example:"A: Devo comprare una camicia nuova.\nB: Di che colore?",
       exampleSrc:"A: I need to buy a new shirt.\nB: What color?",
       funFact:"'Camicia' specifically means a button-up shirt. A casual T-shirt is 'maglietta.' The difference matters in Italian: wearing a 'camicia' signals formality, while a 'maglietta' is for leisure. The same Latin root gave French 'chemise.'"},
{type:"match",pairs:[{trg:"i pantaloni",src:"the trousers / pants"},{trg:"la gonna",src:"the skirt"},{trg:"le scarpe",src:"the shoes"},{trg:"la camicia",src:"the shirt (button-up)"}]},

      {type:"teach", trg:"la maglietta", src:"the T-shirt", pos:"noun", gender:"f",
       note:"Feminine. Diminutive of 'maglia' (knitwear, jersey).\nInformal, no buttons.",
       example:"A: Fa caldo. Metto la maglietta.\nB: Buona idea.",
       exampleSrc:"A: It is hot. I will wear the T-shirt.\nB: Good idea.",
       funFact:"From 'maglia' (knitwear), with the diminutive suffix '-etta' (small). 'Maglia' itself comes from Latin 'macula' (mesh, spot). A 'maglia' can also mean a sports jersey, as in 'maglia rosa' (the pink jersey of the Giro d'Italia cycling race)."},

      {type:"teach", trg:"il cappello", src:"the hat", pos:"noun", gender:"m",
       note:"Masculine. From Latin 'cappellus' (hood, cap).\nPlural: i cappelli. Not 'capelli' (hair)!",
       example:"A: Metti il cappello, c'e il sole!\nB: Hai ragione.",
       exampleSrc:"A: Put on the hat, it is sunny!\nB: You are right.",
       funFact:"Be careful: 'cappello' (hat, double -p-) and 'capello' (a single hair, single -p-) sound almost the same but mean very different things. 'Capelli' (plural) means hair. This is a classic Italian spelling trap."},

      // Quiz steps
      {type:"mc", q:"Why is 'pantaloni' always plural in Italian?",
       opts:["It refers to a garment with two legs","It is a foreign word with no plural","It is a pure exception to all rules","It can also be singular in formal speech"],
       ans:"It refers to a garment with two legs",
       hint:"English uses the same plural-only convention for trousers and scissors. Think about the structure: two separate sections joined at the top."},

      {type:"fb", s:"Ti piace questa {1}?",
       a:["giacca"],
       opts:["giacca","gonna","scarpe","cappello"],
       hint:"This is an outer garment worn over other clothing. Milan is famous for designers who make these.",
       sSrc:"Do you like this {1}?"},

      {type:"match", pairs:[
        {trg:"la giacca", src:"the jacket"},
        {trg:"la gonna", src:"the skirt"},
        {trg:"le scarpe", src:"the shoes"},
        {trg:"la camicia", src:"the shirt"},
        {trg:"il cappello", src:"the hat"}
      ]},

      {type:"mc", q:"What is the difference between 'camicia' and 'maglietta'?",
       opts:["Camicia is always bigger in size","Camicia has buttons, maglietta does not","Maglietta is exclusively for women","They are interchangeable words"],
       ans:"Camicia has buttons, maglietta does not",
       hint:"One is formal with a front closure (think office), the other is casual and pulled over the head (think weekend)."},

      {type:"fb", s:"Devo comprare una {1} nuova.",
       a:["camicia"],
       opts:["camicia","maglietta","gonna","scarpe"],
       hint:"This is a formal button-up shirt. From Latin 'camisia' (undergarment).",
       sSrc:"I need to buy a new {1}."},

      {type:"mc", q:"What is the difference between 'cappello' and 'capello'?",
       opts:["Cappello = hair, capello = hat","They mean the exact same thing","Cappello = hat, capello = a hair","Both words mean hat only"],
       ans:"Cappello = hat, capello = a hair",
       hint:"The double 'p' version goes on your head. The single 'p' version grows on your head. Spelling matters."},

      {type:"fb", s:"Fa caldo. Metto la {1}.",
       a:["maglietta"],
       opts:["maglietta","giacca","camicia","gonna"],
       hint:"It is hot, so you want something casual and light without buttons. A T-shirt.",
       sSrc:"It is hot. I will wear the {1}."},

      {type:"mc", q:"What does 'le scarpe' mean?",
       opts:["The shirts","The scarves","The skirts","The shoes"],
       ans:"The shoes",
       hint:"Italy is famous for handcrafting these. You wear them on your feet. Ferragamo is a famous brand."}
    ]},

    {id:"itv2_u8l2", title:"Fare acquisti", icon:"\uD83D\uDCB3", xp:15, board:true, steps:[
      {type:"intro", title:"Fare acquisti",
       desc:"Learn essential shopping vocabulary for buying clothes and other items in Italian stores.",
       goals:["Ask about sizes and try on clothes","Talk about prices and discounts","Complete a purchase at the register"]},

      {type:"teach", trg:"la taglia", src:"the size (clothing)", pos:"noun", gender:"f",
       note:"Feminine. Italian sizes differ from US/UK sizes.\n'Che taglia porta?' = What size do you wear?",
       example:"A: Che taglia porta?\nB: La 42, di solito.",
       exampleSrc:"A: What size do you wear?\nB: Size 42, usually.",
       funFact:"Italian clothing sizes are numbered differently. A US size 6 is roughly an Italian 42. A US 8 is Italian 44. The system is based on centimeters. Knowing your 'taglia' saves time in Italian shops."},

      {type:"teach", trg:"provare", src:"to try on", pos:"verb", gender:null,
       note:"Regular -are verb. Present: provo, provi, prova.\n'Posso provare?' = May I try on?",
       example:"A: Posso provare questa gonna?\nB: Certo, il camerino e li.",
       exampleSrc:"A: May I try on this skirt?\nB: Of course, the fitting room is there.",
       funFact:"From Latin 'probare' (to test, approve), which also gave English 'prove' and 'probe.' In Italian shops, you usually must ask to use the fitting room ('camerino'). The staff will often count the items you bring in."},

      {type:"teach", trg:"costare", src:"to cost", pos:"verb", gender:null,
       note:"Regular -are verb. 'Quanto costa?' = How much does it cost?\n'Quanto costano?' = How much do they cost? (plural).",
       example:"A: Quanto costa questa giacca?\nB: Costa centocinquanta euro.",
       exampleSrc:"A: How much does this jacket cost?\nB: It costs one hundred and fifty euros.",
       funFact:"From Latin 'constare' (to stand together, to cost). English 'cost' comes from the same root. In Italian markets, bargaining is common, but in shops with fixed prices, the listed price is final."},

      {type:"teach", trg:"i saldi", src:"the sales (discount period)", pos:"noun", gender:"m",
       note:"Masculine PLURAL. Fixed sale periods regulated by law.\nSummer saldi: July. Winter saldi: January.",
       example:"A: Quando iniziano i saldi?\nB: Il primo luglio.",
       exampleSrc:"A: When do the sales start?\nB: On the first of July.",
       funFact:"Italy regulates sale periods by law. Shops cannot offer discounts outside designated periods (typically January and July). This protects smaller shops from larger chains that could afford year-round sales. Each region sets exact dates."},

      {type:"teach", trg:"lo sconto", src:"the discount", pos:"noun", gender:"m",
       note:"Masculine. 'Fare uno sconto' = to give a discount.\n'Sconto del 30%' = 30% off.",
       example:"A: C'e uno sconto?\nB: Si, sconto del venti per cento.",
       exampleSrc:"A: Is there a discount?\nB: Yes, twenty percent off.",
       funFact:"'Scontare' (to discount) comes from 'contare' (to count) with 's-' (removal prefix). Literally 'to count off.' In Italian markets, asking 'Mi fa uno sconto?' (Will you give me a discount?) is perfectly normal and expected."},
{type:"match",pairs:[{trg:"provare",src:"to try on"},{trg:"costare",src:"to cost"},{trg:"i saldi",src:"the sales (discount period)"},{trg:"lo sconto",src:"the discount"}]},

      {type:"teach", trg:"pagare", src:"to pay", pos:"verb", gender:null,
       note:"Regular -are verb. Present: pago, paghi, paga.\n'Pago io!' = I will pay! (I am treating.)",
       example:"A: Posso pagare con la carta?\nB: Si, certo.",
       exampleSrc:"A: Can I pay by card?\nB: Yes, of course.",
       funFact:"From Latin 'pacare' (to pacify, satisfy), because paying a debt brings peace. The same root gave English 'pay.' In Italy, small shops sometimes prefer cash, though card payments are increasingly common by law."},

      {type:"teach", trg:"la cassa", src:"the register / checkout", pos:"noun", gender:"f",
       note:"Feminine. From Latin 'capsa' (box, case).\nAlso means 'cash register' or 'cashier area.'",
       example:"A: Dove pago?\nB: Alla cassa, in fondo.",
       exampleSrc:"A: Where do I pay?\nB: At the register, at the end.",
       funFact:"From Latin 'capsa' (box), which also gave English 'case' and 'cash.' In Italian supermarkets, you bag your own groceries. There is no bagging service. Be ready to pack quickly at the cassa."},

      {type:"teach", trg:"lo scontrino", src:"the receipt", pos:"noun", gender:"m",
       note:"Masculine. From 'scontro' (encounter, check).\nBy law, you must keep your receipt in Italy.",
       example:"A: Ecco lo scontrino.\nB: Grazie. Lo conservo.",
       exampleSrc:"A: Here is the receipt.\nB: Thanks. I will keep it.",
       funFact:"Italian law requires shops to give receipts and customers to keep them. The 'Guardia di Finanza' (financial police) can stop you outside a shop and fine both you and the shop if you have no receipt. This fights tax evasion."},

      // Quiz steps
      {type:"mc", q:"How do you ask 'How much does it cost?' in Italian?",
       opts:["Quanto costa?","Quanto paga?","Quanto sconta?","Quanto prova?"],
       ans:"Quanto costa?",
       hint:"Combine the 'how much?' question word with the pricing verb in third person singular. For multiple items, switch to plural."},

      {type:"fb", s:"Posso {1} questa gonna?",
       a:["provare"],
       opts:["provare","pagare","costare","comprare"],
       hint:"You want to test if the clothes fit before buying. The fitting room is called 'camerino.'",
       sSrc:"May I {1} this skirt?"},

      {type:"match", pairs:[
        {trg:"la taglia", src:"the size"},
        {trg:"i saldi", src:"the sales"},
        {trg:"lo sconto", src:"the discount"},
        {trg:"la cassa", src:"the register"},
        {trg:"lo scontrino", src:"the receipt"}
      ]},

      {type:"mc", q:"When are the summer sales ('saldi') in Italy?",
       opts:["May","July","September","December"],
       ans:"July",
       hint:"Sale periods are regulated by Italian law. The summer period starts at the beginning of this month."},

      {type:"fb", s:"Posso {1} con la carta?",
       a:["pagare"],
       opts:["pagare","provare","costare","scontare"],
       hint:"You want to complete your purchase using a credit card. This verb means 'to pay.'",
       sSrc:"Can I {1} by card?"},

      {type:"mc", q:"Why must you keep your receipt ('scontrino') in Italy?",
       opts:["For returns only","It is a tradition","It is required by law to fight tax evasion","It is optional"],
       ans:"It is required by law to fight tax evasion",
       hint:"The financial police can check outside shops. Both you and the shop can be fined if you lack this."},

      {type:"fb", s:"C'e uno {1} del venti per cento.",
       a:["sconto"],
       opts:["sconto","saldo","prezzo","conto"],
       hint:"This means a percentage off the original price. You are getting 20% off.",
       sSrc:"There is a {1} of twenty percent."},

      {type:"mc", q:"What does 'la taglia' refer to?",
       opts:["Brand name","Price tag","Fabric type","Clothing size"],
       ans:"Clothing size",
       hint:"Italian numbering differs from US/UK. The staff will ask 'Che __ porta?' to find your fit."}
    ]},

    {id:"itv2_u8l3", title:"Colori e tessuti", icon:"\uD83C\uDFA8", xp:15, board:true, steps:[
      {type:"intro", title:"Colori e tessuti",
       desc:"Learn to describe clothing patterns and fabrics in Italian. This helps you be specific when shopping and describe what you want.",
       goals:["Describe clothing patterns","Name common fabrics","Combine colors and patterns in descriptions"]},

      {type:"teach", trg:"a righe", src:"striped", pos:"adj", gender:null,
       note:"Invariable expression. 'Riga' = stripe/line.\n'Una camicia a righe' = a striped shirt.",
       example:"A: Preferisci a righe o a tinta unita?\nB: A righe, sono piu sportive.",
       exampleSrc:"A: Do you prefer striped or solid color?\nB: Striped, they are more sporty.",
       funFact:"'Riga' means both 'stripe' and 'line.' 'A righe' is a prepositional phrase that does not change form. Italian pattern descriptions use 'a' (in the style of): a righe (striped), a quadri (checkered), a pois (polka-dotted)."},

      {type:"teach", trg:"a quadri", src:"checkered / plaid", pos:"adj", gender:null,
       note:"Invariable expression. 'Quadro' = square.\n'A quadri' literally means 'in squares.'",
       example:"A: Mi piace quella gonna a quadri.\nB: E molto alla moda.",
       exampleSrc:"A: I like that checkered skirt.\nB: It is very fashionable.",
       funFact:"'Quadro' means 'square' and also 'painting' or 'picture' (because paintings are framed in squares). The pattern 'a quadri' can describe anything from Scottish tartan to simple checkerboard patterns."},

      {type:"teach", trg:"di cotone", src:"cotton / made of cotton", pos:"adj", gender:null,
       note:"'Cotone' = cotton (noun, masculine). 'Di' = of/made of.\n'Una maglietta di cotone' = a cotton T-shirt.",
       example:"A: Di che tessuto e?\nB: E di cotone, molto fresco.",
       exampleSrc:"A: What fabric is it?\nB: It is cotton, very cool.",
       funFact:"From Arabic 'qutn' (cotton), which entered Italian during medieval trade. Italy was a major textile producer during the Renaissance. Today, the Como area is still famous for silk, and Biella for wool and cotton fabrics."},

      {type:"teach", trg:"di lana", src:"wool / made of wool", pos:"adj", gender:null,
       note:"'Lana' = wool (noun, feminine). From Latin 'lana' (wool).\n'Un maglione di lana' = a wool sweater.",
       example:"A: Questo maglione e di lana?\nB: Si, lana merino. Molto caldo.",
       exampleSrc:"A: Is this sweater wool?\nB: Yes, merino wool. Very warm.",
       funFact:"From Latin 'lana' (wool). English 'lanolin' (wool oil) comes from the same root. Italian wool from Biella is considered among the finest in the world. Many luxury suit fabrics are woven in northern Italy."},

      {type:"teach", trg:"di pelle", src:"leather / made of leather", pos:"adj", gender:null,
       note:"'Pelle' = skin/leather (noun, feminine). From Latin 'pellis' (skin).\n'Una borsa di pelle' = a leather bag.",
       example:"A: Le scarpe sono di pelle?\nB: Si, pelle italiana di qualita.",
       exampleSrc:"A: Are the shoes leather?\nB: Yes, quality Italian leather.",
       funFact:"'Pelle' means both 'skin' and 'leather.' Florence is the historic center of Italian leather craft. The Santa Croce area has had leather workshops since the Renaissance. Italian leather goods are prized worldwide for their quality."},
{type:"match",pairs:[{trg:"a quadri",src:"checkered / plaid"},{trg:"di cotone",src:"cotton / made of cotton"},{trg:"di lana",src:"wool / made of wool"},{trg:"di pelle",src:"leather / made of leather"}]},

      {type:"teach", trg:"a tinta unita", src:"solid color / plain", pos:"adj", gender:null,
       note:"Invariable expression. 'Tinta' = color/dye, 'unita' = unified.\nOne color, no pattern.",
       example:"A: La vuole a righe o a tinta unita?\nB: A tinta unita, blu scuro.",
       exampleSrc:"A: Do you want it striped or solid color?\nB: Solid color, dark blue.",
       funFact:"Literally 'in unified color,' meaning one single color without patterns. Italian fashion often favors solid colors for elegance. The concept of 'sprezzatura' (studied carelessness) values understated solid-color garments."},

      {type:"teach", trg:"stretto", src:"tight / narrow", pos:"adj", gender:null,
       note:"Adj. Feminine: stretta. Opposite: largo (wide, loose).\nFrom Latin 'strictus' (drawn tight).",
       example:"A: Questi pantaloni sono troppo stretti.\nB: Provi la taglia piu grande.",
       exampleSrc:"A: These trousers are too tight.\nB: Try the bigger size.",
       funFact:"From Latin 'strictus' (pulled tight), which also gave English 'strict,' 'restrict,' and 'constrict.' All carry the idea of tightness or limitation. In fashion, 'slim fit' is often translated as 'aderente' or 'stretto.'"},

      {type:"teach", trg:"largo", src:"wide / loose", pos:"adj", gender:null,
       note:"Adj. Feminine: larga. Opposite: stretto (tight).\nAlso means 'wide' for streets or spaces.",
       example:"A: Come ti sta la giacca?\nB: E un po' larga. Serve una taglia piu piccola.",
       exampleSrc:"A: How does the jacket fit?\nB: It is a bit loose. I need a smaller size.",
       funFact:"From Latin 'largus' (abundant, generous), which gave English 'large.' Interestingly, the meaning shifted slightly: in English 'large' means big, while in Italian 'largo' specifically means wide or loose, not just big in general."},

      // Quiz steps
      {type:"mc", q:"What does 'a righe' mean?",
       opts:["Striped","Checkered","Solid color","Spotted"],
       ans:"Striped",
       hint:"'Riga' means stripe or line. The 'a' prefix means 'in the style of.' Think of parallel lines."},

      {type:"fb", s:"Questo maglione e di {1}. Molto caldo.",
       a:["lana"],
       opts:["lana","cotone","pelle","seta"],
       hint:"This natural fiber comes from sheep. It keeps you warm in winter.",
       sSrc:"This sweater is made of {1}. Very warm."},

      {type:"match", pairs:[
        {trg:"a righe", src:"striped"},
        {trg:"a quadri", src:"checkered"},
        {trg:"di cotone", src:"cotton"},
        {trg:"di lana", src:"wool"},
        {trg:"di pelle", src:"leather"}
      ]},

      {type:"mc", q:"What does 'a tinta unita' mean?",
       opts:["Checkered","Solid color / plain","Multicolored","Faded"],
       ans:"Solid color / plain",
       hint:"'Tinta' means c..., 'unita' means unified. One single c... with no pattern at all."},

      {type:"fb", s:"Questi pantaloni sono troppo {1}.",
       a:["stretti"],
       opts:["stretti","larghi","lunghi","corti"],
       hint:"The pants are uncomfortably snug. You cannot move freely. Opposite of 'largo.'",
       sSrc:"These trousers are too {1}."},

      {type:"mc", q:"Where does 'cotone' come from?",
       opts:["Greek 'koton'","Latin 'cottus'","Arabic 'qutn'","French 'coton'"],
       ans:"Arabic 'qutn'",
       hint:"This word entered Italian through medieval trade with the Arab world. The fiber was a major trade commodity."},

      {type:"fb", s:"Le scarpe sono di {1}?",
       a:["pelle"],
       opts:["pelle","lana","cotone","plastica"],
       hint:"This material comes from animal skin. Florence is the historic center for crafting it in Italy.",
       sSrc:"Are the shoes made of {1}?"},

      {type:"mc", q:"What is the opposite of 'stretto'?",
       opts:["Corto","Grande","Lungo","Largo"],
       ans:"Largo",
       hint:"If clothes are too tight, you need them wider and looser. This word means wide or loose."}
    ,{type:"match",pairs:[{trg:"a tinta unita",src:"solid color / plain"},{trg:"stretto",src:"tight / narrow"}]}]},
    EXP_08_L1, EXP_08_L2, EXP_08_L3,
  
  BATCH8_L1,
  BATCH7_L1,
  BATCH6_L1,
  BATCH4_L02,
  BATCH4_L01,
  BATCH3_L02,
  BATCH3_L01
, COVERAGE_U08]
};
export default UNIT_08;
