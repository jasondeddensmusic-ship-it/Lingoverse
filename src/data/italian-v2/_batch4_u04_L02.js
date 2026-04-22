// Batch 4. Unit 04, Lesson 2: Paying & Tipping at the Bar
const BATCH4_U04_L2 = {
  id:"itv2_u04l_b4_2", title:"Il conto", icon:"\uD83D\uDCB6", xp:15, board:true,
  steps:[
    {type:"intro", title:"Il conto",
     desc:"Learn how to pay, ask for the bill, and understand Italian customs around tipping and bar etiquette.",
     goals:["Ask for the bill","Understand payment vocabulary","Navigate Italian bar and cafe customs"]},

    {type:"teach", trg:"il conto", src:"the bill / check", pos:"noun", gender:"m",
     note:"Masculine. 'Il conto, per favore' is the standard request.\nFrom Latin 'computus' (calculation).",
     example:"A: Il conto, per favore.\nB: Subito. Sono quindici euro.",
     exampleSrc:"A: The bill, please.\nB: Right away. That is fifteen euros.",
     funFact:"In Italy, you almost never get the bill until you ask for it. Waiters consider it rude to rush diners. You can sit at a table for hours after eating. The magic phrase is always 'il conto, per favore.'"},

    {type:"teach", trg:"pagare", src:"to pay", pos:"verb", gender:null,
     note:"Regular -are verb. 'Posso pagare con carta?' = Can I pay by card?\nFrom Latin 'pacare' (to appease).",
     example:"A: Posso pagare con la carta?\nB: Si, accettiamo tutte le carte.",
     exampleSrc:"A: Can I pay by card?\nB: Yes, we accept all cards.",
     funFact:"Cash is still king in many Italian bars and small shops. The phrase 'pagare in contanti' (to pay in cash) is very common. Italy was slow to adopt card payments, though it is rapidly changing. A 2022 law requires all businesses to accept cards."},

    {type:"teach", trg:"il resto", src:"the change", pos:"noun", gender:"m",
     note:"Masculine. 'Tenga il resto' = Keep the change.\nFrom Latin 'restare' (to remain).",
     example:"A: Ecco venti euro.\nB: Ecco il resto: cinque euro.",
     exampleSrc:"A: Here is twenty euros.\nB: Here is the change: five euros.",
     funFact:"'Tenga il resto' (keep the change) is the simplest way to leave a small tip in Italy. Since tipping is not expected, this phrase alone is generous. Italians might round up the bill rather than calculating a percentage."},

    {type:"teach", trg:"lo scontrino", src:"the receipt", pos:"noun", gender:"m",
     note:"Masculine. Legally required in Italy. 'Scontrino fiscale' = tax receipt.\nKeep it until you leave the shop.",
     example:"A: Mi da lo scontrino, per favore?\nB: Certo, eccolo.",
     exampleSrc:"A: Can you give me the receipt, please?\nB: Of course, here it is.",
     funFact:"Italian law requires businesses to issue a receipt and customers to keep it. Tax police (Guardia di Finanza) can check outside shops. If you do not have your scontrino, both you and the shop can be fined. This fights tax evasion."},

    {type:"teach", trg:"la mancia", src:"the tip", pos:"noun", gender:"f",
     note:"Feminine. Tipping is not expected in Italy but appreciated.\n'Lasciare la mancia' = to leave a tip.",
     example:"A: Lasciamo la mancia?\nB: Si, un euro o due va bene.",
     exampleSrc:"A: Shall we leave a tip?\nB: Yes, one or two euros is fine.",
     funFact:"Tipping culture in Italy is completely different from the US. Service ('coperto') is included in the bill. Tips are a small bonus, not a salary supplement. Leaving 5-10% is generous; not tipping is perfectly acceptable."},

    {type:"teach", trg:"il coperto", src:"the cover charge", pos:"noun", gender:"m",
     note:"Masculine. A per-person charge for table service, bread, and setting.\nUsually 1-3 euros per person.",
     example:"A: Cos'e il coperto?\nB: E il prezzo per il servizio al tavolo.",
     exampleSrc:"A: What is the cover charge?\nB: It is the price for table service.",
     funFact:"The 'coperto' is a uniquely Italian charge covering bread, table setting, and service. It appears on every restaurant bill. Some regions have tried to ban it, but it persists. Always check the menu for the coperto amount."},

    {type:"teach", trg:"la carta di credito", src:"the credit card", pos:"noun", gender:"f",
     note:"Feminine. 'Carta di credito' or just 'la carta.'\n'Accettate la carta?' = Do you accept cards?",
     example:"A: Accettate la carta di credito?\nB: Si, tutte le carte.",
     exampleSrc:"A: Do you accept credit cards?\nB: Yes, all cards.",
     funFact:"Many small Italian bars still prefer cash ('contanti'). The famous phrase 'il POS non funziona' (the card machine is not working) is sometimes an excuse. New laws mandate card acceptance, but old habits die hard."},

    {type:"teach", trg:"i contanti", src:"cash", pos:"noun", gender:"m",
     note:"Masculine plural. 'In contanti' = in cash. 'Pagare in contanti' = to pay cash.\nFrom 'contare' (to count).",
     example:"A: Pago in contanti.\nB: Perfetto, sono otto euro e cinquanta.",
     exampleSrc:"A: I am paying cash.\nB: Perfect, that is eight euros fifty.",
     funFact:"Italy has traditionally been a cash-heavy economy. Even now, cash transactions are common for small purchases. The government has been pushing digital payments with tax incentives and mandatory card acceptance rules."},

    {type:"teach", trg:"costare", src:"to cost", pos:"verb", gender:null,
     note:"'Quanto costa?' = How much does it cost?\n'Quanto costano?' = How much do they cost? (plural).",
     example:"A: Quanto costa il cappuccino?\nB: Un euro e cinquanta.",
     exampleSrc:"A: How much does the cappuccino cost?\nB: One euro fifty.",
     funFact:"Italian bars have two prices: 'al banco' (at the counter, cheaper) and 'al tavolo' (at the table, more expensive). A coffee standing at the counter might be 1.20 euros, but 2.50 euros sitting down. Always check."},

    {type:"teach", trg:"il prezzo", src:"the price", pos:"noun", gender:"m",
     note:"Masculine. Plural: i prezzi. From Latin 'pretium' (value).\n'Buon prezzo' = good price.",
     example:"A: Qual e il prezzo?\nB: Il prezzo e scritto sul menu.",
     exampleSrc:"A: What is the price?\nB: The price is written on the menu.",
     funFact:"In Italian markets, prices are often not displayed. You must ask 'quanto costa?' Bargaining ('contrattare') is common at flea markets but never at food shops or restaurants. 'A buon mercato' means 'cheap' (literally: at a good market)."},

    {type:"teach", trg:"caro", src:"expensive / dear", pos:"adj", gender:"m",
     note:"Masculine. Feminine: cara. Means both 'expensive' and 'dear' (loved).\n'Caro mio!' = My dear!",
     example:"A: Il ristorante e caro?\nB: Si, ma il cibo e ottimo.",
     exampleSrc:"A: Is the restaurant expensive?\nB: Yes, but the food is excellent.",
     funFact:"'Caro' has a beautiful double meaning: expensive (referring to price) and dear/beloved (referring to people). 'Cara' is a common term of endearment. 'Caro mio' (my dear) can be affectionate or sarcastically warning, depending on tone."},

    {type:"teach", trg:"economico", src:"cheap / affordable / economical", pos:"adj", gender:"m",
     note:"Masculine. Feminine: economica. More polite than 'a buon mercato.'\nRelated to 'economia' (economy).",
     example:"A: Conosci un ristorante economico?\nB: Si, la trattoria in piazza.",
     exampleSrc:"A: Do you know an affordable restaurant?\nB: Yes, the trattoria in the square.",
     funFact:"Italians prefer 'economico' to describe good value. Calling something 'cheap' (a buon mercato) can imply low quality. 'Economico' suggests smart spending. Italian culture values quality: better to spend more on fewer, better things."},

    {type:"teach", trg:"offrire", src:"to treat / to offer (to pay for someone)", pos:"verb", gender:null,
     note:"Irregular past participle: offerto. 'Ti offro un caffè' = I'll buy you a coffee.\nCommon social gesture.",
     example:"A: Oggi offro io!\nB: Grazie, sei gentilissimo!",
     exampleSrc:"A: Today I'm treating!\nB: Thanks, you are very kind!",
     funFact:"'Offrire' a coffee to someone is a fundamental Italian social ritual. Arguments over who pays ('no, offro io!' 'no, io!') are a national sport. The fight to pay the bill is genuine and expected. Letting someone else pay without resistance is rude."},

    {type:"teach", trg:"lo sconto", src:"the discount", pos:"noun", gender:"m",
     note:"Masculine. 'Fare uno sconto' = to give a discount.\n'Sconti' = sales (plural).",
     example:"A: Fate sconti per i studenti?\nB: Si, dieci per cento.",
     exampleSrc:"A: Do you give student discounts?\nB: Yes, ten percent.",
     funFact:"Italian shops have regulated sale periods: 'saldi invernali' (winter sales, January-February) and 'saldi estivi' (summer sales, July-August). Outside these periods, discounts at clothing stores are less common than in the US."},

    {type:"teach", trg:"gratis", src:"free (no charge)", pos:"adj", gender:null,
     note:"Invariable. From Latin 'gratis' (for thanks, freely).\n'E gratis!' = It's free!",
     example:"A: Il pane e gratis?\nB: Si, il coperto include il pane.",
     exampleSrc:"A: Is the bread free?\nB: Yes, the cover charge includes the bread.",
     funFact:"From Latin 'gratis,' meaning 'for thanks' (i.e., expecting only gratitude, not payment). The word has spread to many languages unchanged. In Italy, water in restaurants is never gratis: you always pay for bottled water."},

    // Quiz steps
    {type:"mc", q:"Come chiedi il conto al ristorante?",
     opts:["Il conto, per favore","Lo scontrino, per favore","La mancia, per favore","Il coperto, per favore"],
     ans:"Il conto, per favore",
     hint:"This is the word for the bill or check at a restaurant."},

    {type:"fb", s:"Posso {1} con la carta di credito?",
     a:["pagare"], opts:["pagare","costare","offrire","comprare"],
     hint:"This verb means 'to pay' and you are asking about payment method.",
     sSrc:"Can I {1} with a credit card?"},

    {type:"match", pairs:[
      {trg:"il conto", src:"the bill"},
      {trg:"la mancia", src:"the tip"},
      {trg:"lo scontrino", src:"the receipt"},
      {trg:"il coperto", src:"the cover charge"},
      {trg:"lo sconto", src:"the discount"}
    ]},

    {type:"mc", q:"Perche in Italia i prezzi al banco e al tavolo sono diversi?",
     opts:["Foreigners pay more at the table","Table service costs more than counter service","Counter coffee is lower quality","They charge per minute at the table"],
     ans:"Table service costs more than counter service",
     hint:"Standing at the c... is the quick, cheaper option in Italian bars."},

    {type:"fb", s:"Oggi {1} io il caffè! Sei mio ospite.",
     a:["offro"], opts:["offro","pago","costo","compro"],
     hint:"You are treating your friend to coffee, insisting on paying.",
     sSrc:"Today I'll {1} the coffee! You are my guest."},

    {type:"mc", q:"Cos'e lo 'scontrino fiscale'?",
     opts:["A discount coupon","A parking ticket","A legally required tax receipt","A restaurant menu"],
     ans:"A legally required tax receipt",
     hint:"Italian law requires businesses to issue this and customers to keep it."},

    {type:"fb", s:"Questo ristorante e molto {1}, ma il cibo e eccellente.",
     a:["caro"], opts:["caro","gratis","economico","amaro"],
     hint:"The restaurant has high prices but great food.",
     sSrc:"This restaurant is very {1}, but the food is excellent."},

    {type:"mc", q:"Qual e un modo gentile per dire 'cheap' in italiano?",
     opts:["Caro","Gratis","A buon mercato","Economico"],
     ans:"Economico",
     hint:"This word implies good value without suggesting low quality."}
  ,{type:"match",pairs:[{trg:"il resto",src:"the change"},{trg:"la carta di credito",src:"the credit card"},{trg:"i contanti",src:"cash"},{trg:"costare",src:"to cost"},{trg:"il prezzo",src:"the price"},{trg:"offrire",src:"to treat / to offer (to pay for someone)"}]}]
};
export default BATCH4_U04_L2;
