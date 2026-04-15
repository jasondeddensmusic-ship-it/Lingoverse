// Italian V2 Unit 08 Expansion — Lesson 5: Lo shopping online (Online Shopping)
// Expands shopping unit with online shopping, delivery, and digital commerce.

const LESSON_5 = {id:"itv2_u8l5", title:"Lo shopping online", icon:"\uD83D\uDCBB", xp:15, board:true, steps:[
  {type:"intro", title:"Lo shopping online",
   desc:"Learn Italian vocabulary for online shopping, deliveries, and digital commerce. More and more Italians shop online, and these words are increasingly essential.",
   goals:["Navigate online shopping in Italian","Understand delivery and shipping terms","Handle online orders and tracking"]},

  {type:"teach", trg:"il sito web", src:"the website", pos:"noun", gender:"m",
   note:"Masculine. 'Sito' = site. 'Il sito del negozio' = the shop's website.\nAlso just 'il sito.'",
   example:"A: Hai visto il sito web?\nB: Si, hanno tanti prodotti online.",
   exampleSrc:"A: Have you seen the website?\nB: Yes, they have many products online.",
   funFact:"Italians often shorten 'sito web' to just 'sito.' Italy was slower to adopt e-commerce than northern Europe, but online shopping boomed after 2020. Amazon.it is the dominant platform, followed by Italian sites like Zalando and ePRICE."},

  {type:"teach", trg:"il carrello", src:"the shopping cart (online)", pos:"noun", gender:"m",
   note:"Masculine. From 'carro' (cart, wagon).\nAlso the physical shopping cart in a supermarket.",
   example:"A: Ho messo la giacca nel carrello.\nB: Non dimenticare di completare l'ordine!",
   exampleSrc:"A: I put the jacket in the cart.\nB: Do not forget to complete the order!",
   funFact:"'Carrello' means both the physical supermarket trolley and the online shopping cart. From 'carro' (cart), from Latin 'carrus' (wheeled vehicle). The Gauls invented the word, which spread across all Romance languages and into English as 'car.'"},

  {type:"teach", trg:"l'ordine", src:"the order", pos:"noun", gender:"m",
   note:"Masculine. From Latin 'ordo, ordinis' (arrangement).\n'Fare un ordine' = to place an order. 'Numero d'ordine' = order number.",
   example:"A: Ho fatto l'ordine ieri.\nB: Hai ricevuto la conferma?",
   exampleSrc:"A: I placed the order yesterday.\nB: Did you receive the confirmation?",
   funFact:"'Ordine' means both 'order' (shopping) and 'order' (arrangement). The same Latin root 'ordo' gave English 'order,' 'ordinary,' and 'ordain.' In Italian e-commerce, 'stato dell'ordine' (order status) and 'conferma d'ordine' (order confirmation) are key terms."},

  {type:"teach", trg:"la consegna", src:"the delivery", pos:"noun", gender:"f",
   note:"Feminine. From 'consegnare' (to deliver, hand over).\n'Consegna a domicilio' = home delivery.",
   example:"A: Quando arriva la consegna?\nB: Tra due o tre giorni lavorativi.",
   exampleSrc:"A: When does the delivery arrive?\nB: In two or three business days.",
   funFact:"'Consegna' literally means 'handing over.' 'Giorni lavorativi' (business/working days) exclude weekends and holidays. Italian deliveries can be slower than in northern Europe, especially to islands (Sicily, Sardinia) and small towns."},

  {type:"teach", trg:"la spedizione", src:"the shipping", pos:"noun", gender:"f",
   note:"Feminine. From 'spedire' (to send/ship).\n'Spedizione gratuita' = free shipping. 'Costi di spedizione' = shipping costs.",
   example:"A: Quanto costa la spedizione?\nB: E gratuita sopra i cinquanta euro.",
   exampleSrc:"A: How much is shipping?\nB: It is free above fifty euros.",
   funFact:"From Latin 'expedire' (to free the feet, to dispatch), which also gave English 'expedite' and 'expedition.' Italian online shoppers are very sensitive to shipping costs. 'Spedizione gratuita' (free shipping) is the number one factor in purchase decisions."},

  {type:"teach", trg:"il reso", src:"the return (online)", pos:"noun", gender:"m",
   note:"Masculine. From 'rendere' (to return, give back).\n'Reso gratuito' = free return. 'Fare un reso' = to make a return.",
   example:"A: Come faccio il reso?\nB: C'e l'etichetta prepagata nella scatola.",
   exampleSrc:"A: How do I make the return?\nB: There is a prepaid label in the box.",
   funFact:"Italian e-commerce law mirrors EU regulations: 14 days to return online purchases, no questions asked. 'Reso gratuito' (free returns) has become standard for major retailers. The item must be in its original condition with tags attached."},

  {type:"teach", trg:"il pacco", src:"the package / parcel", pos:"noun", gender:"m",
   note:"Masculine. From Germanic 'pak' (bundle).\nPlural: i pacchi. 'Ricevere un pacco' = to receive a package.",
   example:"A: E arrivato un pacco per te.\nB: Finalmente! L'aspettavo da una settimana.",
   exampleSrc:"A: A package arrived for you.\nB: Finally! I have been waiting for it for a week.",
   funFact:"From a Germanic word meaning 'bundle,' the same root as English 'pack' and 'package.' Italian postal service (Poste Italiane) handles many deliveries alongside private couriers like BRT, GLS, and DHL. Package tracking is called 'tracciamento del pacco.'"},

  {type:"teach", trg:"disponibile", src:"available / in stock", pos:"adj", gender:null,
   note:"Adj. Same form for masculine and feminine (-e ending).\nOpposite: 'esaurito' (sold out/out of stock).",
   example:"A: Questo prodotto e disponibile?\nB: Si, spediamo entro 24 ore.",
   exampleSrc:"A: Is this product available?\nB: Yes, we ship within 24 hours.",
   funFact:"From Latin 'disponere' (to arrange). Online shops show 'disponibile' (available) or 'non disponibile/esaurito' (out of stock). 'Disponibilita limitata' (limited availability) is a common urgency tactic used by Italian e-commerce sites."},

  {type:"teach", trg:"aggiungere al carrello", src:"to add to cart", pos:"verb", gender:null,
   note:"'Aggiungere' = to add (irregular). 'Al carrello' = to the cart.\nButton text on Italian shopping sites.",
   example:"A: Questo mi piace. Lo aggiungo al carrello.\nB: Controlla le taglie disponibili prima.",
   exampleSrc:"A: I like this one. I will add it to the cart.\nB: Check the available sizes first.",
   funFact:"The button 'Aggiungi al carrello' is the Italian equivalent of 'Add to cart.' 'Aggiungere' is an irregular verb: aggiungo, aggiungi, aggiunge. Other common buttons: 'Compra ora' (Buy now), 'Procedi al pagamento' (Proceed to checkout)."},

  {type:"teach", trg:"il codice sconto", src:"the discount code / promo code", pos:"noun", gender:"m",
   note:"Masculine. 'Codice' = code, 'sconto' = discount.\n'Inserire il codice sconto' = to enter the promo code.",
   example:"A: Hai un codice sconto?\nB: Si, e ESTATE20. Venti per cento di sconto.",
   exampleSrc:"A: Do you have a discount code?\nB: Yes, it is ESTATE20. Twenty percent off.",
   funFact:"Italian e-commerce sites use 'codice sconto,' 'codice promozionale,' or 'coupon' interchangeably. The checkout field is usually labeled 'Hai un codice sconto?' or 'Inserisci codice promozionale.' Italians actively search for these before completing purchases."},

  // Quiz steps
  {type:"mc", q:"What does 'spedizione gratuita' mean?",
   opts:["Free shipping","Fast shipping","Express delivery","Standard shipping"],
   ans:"Free shipping",
   hint:"'Gratuita' means f... of charge. This is the s... option that costs nothing."},

  {type:"fb", s:"Ho messo la giacca nel {1}.",
   a:["carrello"],
   opts:["carrello","pacco","ordine","sito"],
   hint:"This is the virtual container where you collect items before checkout. Also a physical trolley in a supermarket.",
   sSrc:"I put the jacket in the {1}."},

  {type:"match", pairs:[
    {trg:"il carrello", src:"the shopping cart"},
    {trg:"l'ordine", src:"the order"},
    {trg:"la consegna", src:"the delivery"},
    {trg:"il reso", src:"the return"},
    {trg:"il pacco", src:"the package"}
  ]},

  {type:"mc", q:"How many days do you have to return online purchases in Italy?",
   opts:["14 days","7 days","30 days","3 days"],
   ans:"14 days",
   hint:"EU consumer law protects online buyers. This 'diritto di recesso' period starts from delivery."},

  {type:"fb", s:"Quanto costa la {1}?",
   a:["spedizione"],
   opts:["spedizione","consegna","cassa","taglia"],
   hint:"You want to know the cost of having the item sent to your address. This means shipping.",
   sSrc:"How much is {1}?"},

  {type:"mc", q:"What does 'esaurito' mean on an Italian shopping site?",
   opts:["Out of stock / sold out","Available","On sale","New arrival"],
   ans:"Out of stock / sold out",
   hint:"The opposite of 'disponibile.' The item is no longer available for purchase."},

  {type:"fb", s:"Come faccio il {1}?",
   a:["reso"],
   opts:["reso","ordine","pacco","carrello"],
   hint:"You want to send the item back. This noun means the act of returning a product you bought.",
   sSrc:"How do I make the {1}?"},

  {type:"mc", q:"What does 'Aggiungi al carrello' mean?",
   opts:["Add to cart","Remove from cart","Proceed to checkout","View cart"],
   ans:"Add to cart",
   hint:"'Aggiungere' means to a.... 'Carrello' is the c.... This is the main shopping button."},

  {type:"fb", s:"Hai un {1} sconto?",
   a:["codice"],
   opts:["codice","prezzo","numero","tipo"],
   hint:"A combination of letters and numbers that gives you a percentage off. Enter it at checkout.",
   sSrc:"Do you have a discount {1}?"}
]};
export default LESSON_5;
