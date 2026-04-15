// Italian V2 Unit 08 Expansion. Lesson 4: Contrattare e restituire (Haggling & Returns)
// Expands shopping unit with bargaining, returns, exchanges.

const LESSON_4 = {id:"itv2_u8l4", title:"Contrattare e restituire", icon:"\uD83E\uDD1D", xp:15, board:true, steps:[
  {type:"intro", title:"Contrattare e restituire",
   desc:"Learn how to negotiate prices at Italian markets and handle returns or exchanges at shops. Bargaining is an art in Italian open-air markets.",
   goals:["Negotiate prices politely at markets","Ask for discounts and deals","Handle returns and exchanges"]},

  {type:"teach", trg:"contrattare", src:"to negotiate / to bargain", pos:"verb", gender:null,
   note:"Regular -are verb. Present: contratto, contratti, contratta.\nFrom 'contratto' (contract).",
   example:"A: Si puo contrattare?\nB: Certo, mi faccia un'offerta.",
   exampleSrc:"A: Can one bargain?\nB: Of course, make me an offer.",
   funFact:"Bargaining is normal at Italian open-air markets ('mercati rionali') and flea markets ('mercatini delle pulci'), but never in regular shops with fixed prices. Start by showing interest, then suggest a lower price politely."},

  {type:"teach", trg:"il mercato", src:"the market", pos:"noun", gender:"m",
   note:"Masculine. From Latin 'mercatus' (trade, marketplace).\nPlural: i mercati. 'Mercato rionale' = neighborhood market.",
   example:"A: Andiamo al mercato?\nB: Si, oggi c'e il mercato delle pulci.",
   exampleSrc:"A: Shall we go to the market?\nB: Yes, today there is the flea market.",
   funFact:"From Latin 'mercatus' (trade). English 'market,' 'merchant,' and 'commerce' share the root. Every Italian town has a weekly market day. Rome has over 100 'mercati rionali' (neighborhood markets). The most famous is Campo de' Fiori."},

  {type:"teach", trg:"il prezzo", src:"the price", pos:"noun", gender:"m",
   note:"Masculine. From Latin 'pretium' (value, price).\n'Buon prezzo' = good price. 'Prezzo fisso' = fixed price.",
   example:"A: Qual e il prezzo migliore?\nB: Per Lei, trenta euro.",
   exampleSrc:"A: What is your best price?\nB: For you, thirty euros.",
   funFact:"From Latin 'pretium' (price, value), which also gave English 'price,' 'precious,' and 'appreciate.' In Italian markets, the vendor's first price is often higher than what they expect to receive. A polite counter-offer is expected."},

  {type:"teach", trg:"troppo caro", src:"too expensive", pos:"adj", gender:null,
   note:"'Troppo' = too much. 'Caro' = dear/expensive (masc.).\nFeminine: troppo cara. 'E troppo caro!' = It is too expensive!",
   example:"A: Costa cinquanta euro.\nB: Troppo caro! Me lo fa a trenta?",
   exampleSrc:"A: It costs fifty euros.\nB: Too expensive! Will you do it for thirty?",
   funFact:"'Caro' means both 'expensive' and 'dear/beloved.' 'Caro amico' = dear friend. 'Troppo caro' = too expensive. Context makes the meaning clear. At markets, saying 'troppo caro' with a smile is the opening move in bargaining."},

  {type:"teach", trg:"l'offerta", src:"the offer / the deal", pos:"noun", gender:"f",
   note:"Feminine. From 'offrire' (to offer).\n'Offerta speciale' = special deal. 'Fare un'offerta' = to make an offer.",
   example:"A: C'e un'offerta speciale?\nB: Si, tre per il prezzo di due.",
   exampleSrc:"A: Is there a special deal?\nB: Yes, three for the price of two.",
   funFact:"'Offerta' has two meanings: a price offer in bargaining, and a sale/deal in shops. Supermarket flyers are called 'volantini delle offerte.' At markets, 'Mi fa un'offerta?' means 'Will you give me a deal?' It invites the vendor to lower the price."},

  {type:"teach", trg:"restituire", src:"to return (an item)", pos:"verb", gender:null,
   note:"Regular -ire verb (with -isc- forms). Present: restituisco, restituisci.\n'Vorrei restituire questo' = I would like to return this.",
   example:"A: Vorrei restituire questa giacca.\nB: Ha lo scontrino?",
   exampleSrc:"A: I would like to return this jacket.\nB: Do you have the receipt?",
   funFact:"Italian consumer law gives you 14 days to return online purchases ('diritto di recesso'), but physical store returns depend on the shop's policy. Many Italian shops offer exchange only ('cambio'), not refunds. Always ask about the return policy before buying."},

  {type:"teach", trg:"cambiare", src:"to exchange / to change", pos:"verb", gender:null,
   note:"Regular -are verb. 'Vorrei cambiare la taglia' = I would like to exchange the size.\nAlso means 'to change' in general.",
   example:"A: Posso cambiare questa maglietta?\nB: Certo, che taglia Le serve?",
   exampleSrc:"A: Can I exchange this T-shirt?\nB: Of course, what size do you need?",
   funFact:"'Cambiare' covers many meanings: cambiare vestiti (change clothes), cambiare idea (change one's mind), cambiare treno (change trains), cambiare soldi (exchange money). In shops, it specifically means exchanging one item for another."},

  {type:"teach", trg:"il rimborso", src:"the refund", pos:"noun", gender:"m",
   note:"Masculine. From 'rimborsare' (to reimburse).\n'Vorrei un rimborso' = I would like a refund.",
   example:"A: Posso avere un rimborso?\nB: Mi dispiace, possiamo solo cambiare.",
   exampleSrc:"A: Can I get a refund?\nB: I am sorry, we can only exchange.",
   funFact:"From 'ri-' (back) + 'borsa' (purse). Literally, 'putting money back in the purse.' Refunds are less common in Italian shops than exchanges. For online purchases, the 'diritto di recesso' (right of withdrawal) guarantees your refund within 14 days."},

  {type:"teach", trg:"difettoso", src:"defective / faulty", pos:"adj", gender:null,
   note:"Adj. Feminine: difettosa. From 'difetto' (defect, flaw).\n'Prodotto difettoso' = defective product.",
   example:"A: La cerniera e difettosa.\nB: Mi scusi! La cambiamo subito.",
   exampleSrc:"A: The zipper is defective.\nB: I am sorry! We will exchange it right away.",
   funFact:"Italian consumer protection law ('Codice del Consumo') requires shops to repair, replace, or refund defective items for up to 2 years after purchase. This applies even without a receipt if you can prove the purchase. EU law strengthens these protections."},

  {type:"teach", trg:"il camerino", src:"the fitting room", pos:"noun", gender:"m",
   note:"Masculine. Diminutive of 'camera' (room).\n'Dov'e il camerino?' = Where is the fitting room?",
   example:"A: Posso usare il camerino?\nB: Si, e in fondo a destra.",
   exampleSrc:"A: May I use the fitting room?\nB: Yes, it is at the back on the right.",
   funFact:"From 'camera' (room) with diminutive '-ino' (small). A 'camerino' is also a dressing room for actors in theaters. In Italian shops, staff typically count items before you enter the fitting room and check again when you leave."},

  // Quiz steps
  {type:"mc", q:"Where is bargaining acceptable in Italy?",
   opts:["Open-air markets and flea markets","Supermarkets","Pharmacies","Department stores"],
   ans:"Open-air markets and flea markets",
   hint:"Regular shops have fixed prices. Negotiating is normal at outdoor m... and secondhand stalls."},

  {type:"fb", s:"Costa cinquanta euro. {1} caro!",
   a:["Troppo"],
   opts:["Troppo","Molto","Tanto","Poco"],
   hint:"You think the price is more than it should be. This word means 'too much.'",
   sSrc:"It costs fifty euros. {1} expensive!"},

  {type:"match", pairs:[
    {trg:"contrattare", src:"to bargain"},
    {trg:"il prezzo", src:"the price"},
    {trg:"restituire", src:"to return (item)"},
    {trg:"cambiare", src:"to exchange"},
    {trg:"il rimborso", src:"the refund"}
  ]},

  {type:"mc", q:"What does 'diritto di recesso' guarantee for online purchases?",
   opts:["14 days to return the item","30 days to return","Free shipping","A lifetime warranty"],
   ans:"14 days to return the item",
   hint:"EU consumer law protects online shoppers. You have two weeks from delivery to change your mind."},

  {type:"fb", s:"Vorrei {1} questa giacca.",
   a:["restituire"],
   opts:["restituire","comprare","provare","cambiare"],
   hint:"You want to give the jacket back and get your money returned. This verb means 'to return an item.'",
   sSrc:"I would like to {1} this jacket."},

  {type:"mc", q:"What does 'difettoso' mean?",
   opts:["Defective / faulty","Expensive","Different","Difficult"],
   ans:"Defective / faulty",
   hint:"From 'difetto' (defect). Something is broken or does not work properly. You have legal rights."},

  {type:"fb", s:"C'e un'{1} speciale? Tre per il prezzo di due.",
   a:["offerta"],
   opts:["offerta","sconto","taglia","cassa"],
   hint:"A special deal where you get more for less. This word means offer or deal.",
   sSrc:"Is there a special {1}? Three for the price of two."},

  {type:"mc", q:"What is a 'camerino' in a shop?",
   opts:["A fitting room","A cashier","A warehouse","A display window"],
   ans:"A fitting room",
   hint:"Diminutive of 'camera' (r...). The small r... where you try on clothes before buying."},

  {type:"fb", s:"Posso avere un {1}?",
   a:["rimborso"],
   opts:["rimborso","prezzo","sconto","cambio"],
   hint:"You want your money back. This word literally means 'putting money back in the purse.'",
   sSrc:"Can I get a {1}?"}
]};
export default LESSON_4;
