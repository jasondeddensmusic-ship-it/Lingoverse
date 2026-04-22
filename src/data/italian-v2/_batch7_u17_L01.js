// Batch 7. Unit 17 extra lesson. I media e la tecnologia: Online Shopping & E-Commerce
const BATCH7_L1 = {id:"itv2_u17l_b7_1", title:"Lo shopping online", icon:"\u{1F4F1}", xp:15, board:true, steps:[
{type:"intro", title:"Lo shopping online",
 desc:"Learn vocabulary for online shopping, digital payments, and e-commerce in Italian.",
 goals:["Navigate online stores in Italian","Handle digital payments and delivery","Discuss online shopping habits"]},

{type:"teach", trg:"l'acquisto", src:"the purchase", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: gli acquisti.\n'Fare acquisti' = to make purchases / to shop.",
 example:"A: Ho fatto un acquisto online.\nB: Cosa hai comprato?",
 exampleSrc:"A: I made an online purchase.\nB: What did you buy?",
 funFact:"'Acquisto' comes from Latin 'acquirere.' 'Fare acquisti' is more formal than 'fare shopping' (which uses the English word). Both are used in everyday Italian."},

{type:"teach", trg:"il corriere", src:"the courier / delivery person", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i corrieri.\n'Corriere espresso' = express courier.",
 example:"A: Il corriere e passato?\nB: Si, ha lasciato il pacco dal vicino.",
 exampleSrc:"A: Did the courier come?\nB: Yes, he left the package with the neighbor.",
 funFact:"Italian couriers often leave packages with neighbors when you are not home. The 'vicino di casa' system works because Italians generally know their neighbors well."},

{type:"teach", trg:"la consegna", src:"the delivery", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le consegne.\n'Consegna a domicilio' = home delivery. 'Consegnare' = to deliver.",
 example:"A: La consegna e prevista per domani.\nB: Finalmente!",
 exampleSrc:"A: Delivery is expected for tomorrow.\nB: Finally!",
 funFact:"'Consegna a domicilio' has exploded in Italy since 2020. Food delivery apps (Glovo, Deliveroo, Just Eat) changed Italian dining culture forever, though many purists disapprove."},

{type:"teach", trg:"il reso", src:"the return (of goods)", pos:"noun", gender:"m",
 note:"Masculine noun. 'Fare un reso' = to make a return.\n'Politica di reso' = return policy.",
 example:"A: Posso fare un reso?\nB: Si, entro trenta giorni dall'acquisto.",
 exampleSrc:"A: Can I make a return?\nB: Yes, within thirty days of purchase.",
 funFact:"EU consumer law gives 14 days to return online purchases, no questions asked. Italian consumers are increasingly savvy about 'diritto di recesso' (right of withdrawal)."},

{type:"teach", trg:"il carrello", src:"the cart (online)", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i carrelli.\n'Aggiungere al carrello' = add to cart.",
 example:"A: Ho tre articoli nel carrello.\nB: Vai alla cassa per pagare.",
 exampleSrc:"A: I have three items in the cart.\nB: Go to checkout to pay.",
 funFact:"'Carrello' means both the physical shopping cart and the online one. 'Carrello abbandonato' (abandoned cart) is a major problem for Italian e-commerce businesses."},

{type:"teach", trg:"il codice sconto", src:"the discount code", pos:"noun", gender:"m",
 note:"Masculine noun. 'Inserire il codice sconto' = to enter the discount code.",
 example:"A: Hai un codice sconto?\nB: Si, sconto del 20%!",
 exampleSrc:"A: Do you have a discount code?\nB: Yes, 20% off!",
 funFact:"Italian shoppers are avid users of 'codici sconto.' Websites and influencers constantly share them. Black Friday and 'i saldi' (seasonal sales) are now major shopping events in Italy."},

{type:"teach", trg:"la spedizione", src:"the shipping", pos:"noun", gender:"f",
 note:"Feminine noun. 'Spedizione gratuita' = free shipping.\n'Spese di spedizione' = shipping costs.",
 example:"A: La spedizione e gratuita?\nB: Si, per ordini sopra i cinquanta euro.",
 exampleSrc:"A: Is shipping free?\nB: Yes, for orders over fifty euros.",
 funFact:"'Spedizione gratuita' is the magic phrase that convinces Italian shoppers to buy. Many add extra items just to reach the free shipping threshold."},

{type:"teach", trg:"la recensione", src:"the review", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le recensioni.\n'Recensire' = to review. 'Cinque stelle' = five stars.",
 example:"A: Leggi le recensioni prima di comprare?\nB: Sempre, almeno dieci.",
 exampleSrc:"A: Do you read reviews before buying?\nB: Always, at least ten.",
 funFact:"Italian online reviews can be dramatic and detailed. A one-star review might read like a short novel, complete with emotional descriptions of disappointment and betrayal."},

{type:"teach", trg:"la garanzia", src:"the warranty / guarantee", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le garanzie.\n'In garanzia' = under warranty.",
 example:"A: Il prodotto e ancora in garanzia?\nB: Si, per due anni.",
 exampleSrc:"A: Is the product still under warranty?\nB: Yes, for two years.",
 funFact:"EU law mandates a minimum 2-year warranty on all products. Italian consumer protection ('tutela del consumatore') is among the strongest in the world."},

{type:"teach", trg:"la truffa", src:"the scam / fraud", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le truffe.\n'Truffare' = to scam. 'Il truffatore' = the scammer.",
 example:"A: Attenzione, questo sito sembra una truffa.\nB: Hai ragione, i prezzi sono troppo bassi.",
 exampleSrc:"A: Careful, this site looks like a scam.\nB: You are right, the prices are too low.",
 funFact:"Online scams (truffe online) are a growing concern in Italy. The 'Polizia Postale' (Postal Police) is the agency that investigates cybercrime and online fraud."},

{type:"teach", trg:"il pagamento", src:"the payment", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i pagamenti.\n'Metodo di pagamento' = payment method.",
 example:"A: Quale metodo di pagamento preferisci?\nB: La carta di credito.",
 exampleSrc:"A: Which payment method do you prefer?\nB: Credit card.",
 funFact:"Italy was traditionally a cash-heavy society. Digital payments have grown rapidly, and the government has introduced incentives to encourage 'pagamenti digitali' to combat tax evasion."},

{type:"teach", trg:"il rimborso", src:"the refund", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i rimborsi.\n'Chiedere un rimborso' = to request a refund.",
 example:"A: Ho chiesto un rimborso per il prodotto difettoso.\nB: Quanto tempo ci vuole?",
 exampleSrc:"A: I requested a refund for the defective product.\nB: How long does it take?",
 funFact:"Getting a 'rimborso' in Italy can require patience. The bureaucratic process often involves multiple emails, forms, and waiting periods. Persistence pays off."},

{type:"teach", trg:"disponibile", src:"available / in stock", pos:"adj", gender:null,
 note:"Adjective. Same form for m/f.\n'Non disponibile' = out of stock.",
 example:"A: Questo articolo e disponibile?\nB: Si, consegna in tre giorni.",
 exampleSrc:"A: Is this item available?\nB: Yes, delivery in three days.",
 funFact:"'Disponibile' means both available (for products) and approachable/willing (for people). 'E una persona molto disponibile' means someone who is always willing to help."},

{type:"mc", q:"Che cosa significa 'spedizione gratuita'?",
 opts:["free shipping","express delivery","home delivery","guaranteed delivery"],
 ans:"free shipping",
 hint:"No extra cost for sending the product to your home. The word 'gratuita' means f...."},

{type:"fb", s:"Ho tre articoli nel {1}.", a:["carrello"],
 opts:["carrello","reso","corriere","pagamento"],
 hint:"The virtual shopping container on a website where you put items before buying.",
 sSrc:"I have three items in the {1}."},

{type:"match", pairs:[
 {trg:"l'acquisto", src:"purchase"},
 {trg:"la consegna", src:"delivery"},
 {trg:"il reso", src:"return"},
 {trg:"il rimborso", src:"refund"}
]},

{type:"mc", q:"Quale agenzia italiana indaga sulle truffe online?",
 opts:["I Vigili del Fuoco","La Polizia Postale","I Carabinieri","La Guardia di Finanza"],
 ans:"La Polizia Postale",
 hint:"A special police unit focused on postal services and cybercrime."},

{type:"fb", s:"Leggi le {1} prima di comprare?", a:["recensioni"],
 opts:["recensioni","garanzie","consegne","truffe"],
 hint:"What other customers write about a product. Often with star ratings.",
 sSrc:"Do you read {1} before buying?"},

{type:"mc", q:"Quanti anni di garanzia prevede la legge europea?",
 opts:["Sei mesi","Tre anni","Due anni","Un anno"],
 ans:"Due anni",
 hint:"EU consumer protection mandates a minimum warranty period on all products."},

{type:"fb", s:"Attenzione, questo sito sembra una {1}.", a:["truffa"],
 opts:["truffa","garanzia","recensione","consegna"],
 hint:"A fraudulent scheme to cheat you out of money. The prices seem too good to be true.",
 sSrc:"Careful, this site looks like a {1}."},

{type:"match", pairs:[
 {trg:"il corriere", src:"courier"},
 {trg:"il pagamento", src:"payment"},
 {trg:"la garanzia", src:"warranty"},
 {trg:"il codice sconto", src:"discount code"}
]}
,{type:"match",pairs:[{trg:"la spedizione",src:"the shipping"},{trg:"la recensione",src:"the review"}]}]};
export default BATCH7_L1;
