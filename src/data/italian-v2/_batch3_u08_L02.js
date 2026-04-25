// Batch 3. Unit 08, Lesson 2: Contrattare e comprare (Bargaining & Buying)
const BATCH3_U08_L2 = {
  id:"itv2_u08l_b3_2", title:"Contrattare e comprare", icon:"\uD83D\uDCB0", xp:15, board:true,
  steps:[
    {type:"intro", title:"Contrattare e comprare",
     desc:"Learn the vocabulary of negotiating prices, comparing items, and completing purchases in Italian markets and shops.",
     goals:["Negotiate prices at Italian markets","Compare items and express preferences","Handle returns and complaints"]},

    {type:"teach", trg:"il mercato", src:"the market", pos:"noun", gender:"m",
     note:"Masculine. From Latin 'mercatus' (trading).\n'Mercato rionale' = neighborhood market.",
     example:"A: Andiamo al mercato sabato?\nB: Si, la frutta e più fresca li.",
     exampleSrc:"A: Shall we go to the market Saturday?\nB: Yes, the fruit is fresher there.",
     funFact:"Every Italian town has at least one weekly market. These 'mercati rionali' sell everything from fresh produce to clothing. Bargaining is expected at outdoor markets but never in shops with fixed prices. The famous Porta Portese flea market in Rome runs every Sunday."},

    {type:"teach", trg:"il prezzo", src:"the price", pos:"noun", gender:"m",
     note:"Masculine. From Latin 'pretium' (value, price).\n'A buon prezzo' = at a good price.",
     example:"A: Qual e il prezzo di questa borsa?\nB: Novanta euro, ma posso fare ottanta.",
     exampleSrc:"A: What is the price of this bag?\nB: Ninety euros, but I can do eighty.",
     funFact:"'Pretium' (price) also gave Italian 'prezioso' (precious) and English 'price' and 'precious.' In Italian markets, the initial price is often higher than expected because the vendor anticipates bargaining. The art of arriving at a fair price is part of the shopping experience."},

    {type:"teach", trg:"il rimborso", src:"the refund", pos:"noun", gender:"m",
     note:"Masculine. From 'rimborsare' (to reimburse).\n'Chiedere un rimborso' = to ask for a refund.",
     example:"A: Vorrei un rimborso, per favore.\nB: Ha lo scontrino?",
     exampleSrc:"A: I would like a refund, please.\nB: Do you have the receipt?",
     funFact:"Italian consumer protection law ('Codice del Consumo') grants strong rights to buyers. For defective products, you are entitled to repair, replacement, or refund. Online purchases have a 14-day 'diritto di recesso' (right of withdrawal). In-store refunds vary by shop policy."},

    {type:"teach", trg:"conveniente", src:"affordable / good value", pos:"adj", gender:null,
     note:"Adjective. Same form masculine/feminine (-e ending).\n'Un prezzo conveniente' = a good price.",
     example:"A: Questo ristorante e molto conveniente.\nB: Si, si mangia bene e si spende poco.",
     exampleSrc:"A: This restaurant is very affordable.\nB: Yes, you eat well and spend little.",
     funFact:"'Conveniente' is a false friend for English speakers. It does NOT mean 'convenient' (that is 'comodo' or 'pratico'). Instead, it means 'affordable' or 'good value for money.' Saying 'E molto conveniente' means 'It is a great deal.'"},

    {type:"teach", trg:"caro", src:"expensive / dear", pos:"adj", gender:null,
     note:"Adjective. Feminine: cara. Also means 'dear' (term of endearment).\nOpposite: economico (cheap, affordable).",
     example:"A: Questa giacca e troppo cara.\nB: Aspetta i saldi, costera meno.",
     exampleSrc:"A: This jacket is too expensive.\nB: Wait for the sales, it will cost less.",
     funFact:"'Caro' means both 'expensive' and 'dear/beloved.' 'Caro Marco' at the start of a letter means 'Dear Marco.' 'Che caro!' can mean 'How sweet!' or 'How expensive!' depending on context. The dual meaning connects value with affection."},

    {type:"teach", trg:"economico", src:"cheap / budget-friendly", pos:"adj", gender:null,
     note:"Adjective. Feminine: economica. Does NOT mean 'economic.'\n'Un hotel economico' = a budget hotel.",
     example:"A: Cerco qualcosa di più economico.\nB: Abbiamo questi modelli in offerta.",
     exampleSrc:"A: I am looking for something cheaper.\nB: We have these models on offer.",
     funFact:"'Economico' is another false friend. In Italian, it means 'inexpensive' or 'budget,' not 'relating to the economy.' For that meaning, Italians say 'economico' in academic contexts but 'a buon mercato' or 'conveniente' are preferred for everyday shopping."},

    {type:"teach", trg:"l'offerta", src:"the offer / special deal", pos:"noun", gender:"f",
     note:"Feminine. From 'offrire' (to offer).\n'In offerta' = on sale / on special offer.",
     example:"A: C'e qualcosa in offerta?\nB: Si, le scarpe sono in offerta speciale.",
     exampleSrc:"A: Is anything on offer?\nB: Yes, the shoes are on special offer.",
     funFact:"'Offerta speciale' and 'promozione' are how Italian stores announce deals outside the regulated 'saldi' periods. While deep discounts are restricted to sale seasons (January and July), stores can run 'offerte' and 'promozioni' at any time as long as they do not call them 'saldi.'"},

    {type:"teach", trg:"la garanzia", src:"the warranty / guarantee", pos:"noun", gender:"f",
     note:"Feminine. From 'garantire' (to guarantee).\n'In garanzia' = under warranty.",
     example:"A: C'e la garanzia?\nB: Si, due anni di garanzia.",
     exampleSrc:"A: Is there a warranty?\nB: Yes, two years of warranty.",
     funFact:"EU law mandates a minimum two-year warranty on all consumer goods sold in Italy. This applies even to items bought on sale. The 'garanzia legale' (legal guarantee) covers defects present at the time of purchase. Manufacturers often offer additional voluntary warranties."},

    {type:"teach", trg:"il contante", src:"the cash", pos:"noun", gender:"m",
     note:"Masculine. From 'contare' (to count).\n'Pagare in contanti' = to pay in cash.",
     example:"A: Pago in contanti o con la carta?\nB: Come preferisce.",
     exampleSrc:"A: Shall I pay in cash or by card?\nB: As you prefer.",
     funFact:"Italy has been gradually reducing cash usage. A law now mandates that all businesses accept card payments for any amount. However, cash culture remains strong, especially in southern Italy and at markets. Some vendors still prefer 'contanti' for small purchases."},

    {type:"teach", trg:"la busta", src:"the bag / envelope", pos:"noun", gender:"f",
     note:"Feminine. From Germanic 'busti' (bust, torso, container).\n'Busta della spesa' = shopping bag.",
     example:"A: Vuole una busta?\nB: No grazie, ho la borsa.",
     exampleSrc:"A: Would you like a bag?\nB: No thanks, I have my bag.",
     funFact:"Since 2011, Italian law requires shops to charge for plastic bags. Most Italians bring reusable bags ('borse riutilizzabili'). Biodegradable bags ('buste biodegradabili') cost a few cents each. This environmental law has significantly reduced plastic bag use in Italy."},

    {type:"teach", trg:"la fattura", src:"the invoice / formal receipt", pos:"noun", gender:"f",
     note:"Feminine. More formal than 'scontrino.'\n'Emettere una fattura' = to issue an invoice.",
     example:"A: Mi serve la fattura per l'azienda.\nB: Certo, mi dia la partita IVA.",
     exampleSrc:"A: I need an invoice for the company.\nB: Of course, give me the VAT number.",
     funFact:"A 'fattura' is a formal invoice with the buyer's tax details, used for business expenses and tax deductions. Different from a 'scontrino' (simple register receipt). Italian businesses must request a 'fattura' to deduct expenses. The electronic invoice ('fattura elettronica') became mandatory in 2019."},

    {type:"teach", trg:"il regalo", src:"the gift / present", pos:"noun", gender:"m",
     note:"Masculine. From 'regalare' (to give as a gift).\n'E per un regalo' = It is for a gift.",
     example:"A: E per un regalo? Lo incarto?\nB: Si, per favore. Con un bel fiocco.",
     exampleSrc:"A: Is it for a gift? Shall I wrap it?\nB: Yes, please. With a nice bow.",
     funFact:"Italian shops often offer free gift wrapping ('confezione regalo'). Presentation matters enormously in Italian gift culture. A beautifully wrapped package shows care and thought. Saying 'E per un regalo' signals to the shopkeeper that special presentation is expected."},

    {type:"teach", trg:"incartare", src:"to wrap (a package)", pos:"verb", gender:null,
     note:"Regular -are verb. From 'carta' (paper).\n'Incartare un regalo' = to wrap a gift.",
     example:"A: Glielo incarto?\nB: Si, e un regalo di compleanno.",
     exampleSrc:"A: Shall I wrap it for you?\nB: Yes, it is a birthday present.",
     funFact:"'Incartare' literally means 'to put in paper.' Italian shops pride themselves on elegant wrapping. Even bakeries wrap bread in tissue paper. The care taken with packaging reflects the Italian value of 'bella figura' (making a good impression) in every interaction."},

    // Quiz steps
    {type:"mc", q:"What does 'conveniente' actually mean in Italian?",
     opts:["Affordable / good value","Comfortable to wear","Traditional and classic","Convenient (easy to reach)"],
     ans:"Affordable / good value",
     hint:"This is a false friend. It does NOT mean 'convenient.' For that, Italians say 'comodo' or 'pratico.'"},

    {type:"fb", s:"Vorrei un {1}, per favore.",
     a:["rimborso"],
     opts:["rimborso","saldo","regalo","prezzo"],
     hint:"You want your money back for a returned item. Italian consumer law gives you strong rights for defective goods.",
     sSrc:"I would like a {1}, please."},

    {type:"match", pairs:[
      {trg:"il prezzo", src:"the price"},
      {trg:"il rimborso", src:"the refund"},
      {trg:"l'offerta", src:"the offer / deal"},
      {trg:"la garanzia", src:"the warranty"},
      {trg:"il contante", src:"cash"}
    ]},

    {type:"mc", q:"Where is bargaining expected in Italy?",
     opts:["In supermarkets (always)","At outdoor markets (usually)","In all department stores","In pharmacies"],
     ans:"At outdoor markets (usually)",
     hint:"Shops with fixed prices never negotiate. But at o... 'mercati,' vendors expect and enjoy the back-and-forth."},

    {type:"fb", s:"C'e qualcosa in {1}?",
     a:["offerta"],
     opts:["offerta","garanzia","fattura","busta"],
     hint:"You are asking if there are any special deals. Italian stores run these promotions outside the regulated sale periods.",
     sSrc:"Is anything on {1}?"},

    {type:"mc", q:"Why do Italian shops now charge for plastic bags?",
     opts:["Only certain exclusive stores charge for them","To make extra profit from customers","A 2011 environmental law mandates the fee","Bags were always expensive in Italy"],
     ans:"A 2011 environmental law mandates the fee",
     hint:"This l... significantly reduced plastic bag use. Most Italians now bring reusable bags or pay a few cents for biodegradable ones."},

    {type:"fb", s:"Glielo {1}? E un regalo.",
     a:["incarto"],
     opts:["incarto","pago","cambio","sconto"],
     hint:"The shopkeeper offers to put paper around the gift. Elegant presentation matters in Italian gift culture.",
     sSrc:"Shall I {1} it? It is a gift."},

    {type:"mc", q:"What is the difference between 'caro' and 'economico'?",
     opts:["They mean the same thing","Caro = small, economico = large","Caro = new, economico = used","Caro = expensive, economico = inexpensive"],
     ans:"Caro = expensive, economico = inexpensive",
     hint:"These two adjectives are opposites on the price scale. The first also means 'dear' in the affectionate sense; the second is a false friend (means affordable, not 'economic')."}
  ,{type:"match",pairs:[{trg:"conveniente",src:"affordable / good value"},{trg:"la busta",src:"the bag / envelope"},{trg:"la fattura",src:"the invoice / formal receipt"},{trg:"incartare",src:"to wrap (a package)"}]}]
};
export default BATCH3_U08_L2;
