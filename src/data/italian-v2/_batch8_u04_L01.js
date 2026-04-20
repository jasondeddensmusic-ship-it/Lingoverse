// Batch 8 — Unit 04 extra lesson. Bar/Cafe: Pastries & Italian Breakfast
const BATCH8_L1 = {id:"itv2_u04l_b8_1", title:"La colazione italiana", icon:"🥐", xp:15, board:true, steps:[
{type:"intro", title:"La colazione italiana",
 desc:"Discover the world of Italian breakfast. Learn the vocabulary for pastries, spreads, and morning drinks.",
 goals:["Name common Italian pastries and breakfast items","Order breakfast at a bar","Understand Italian breakfast culture"]},

{type:"teach", trg:"il cornetto", src:"the croissant", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i cornetti.\nThe Italian version of a croissant, often filled.",
 example:"A: Un cornetto alla crema, per favore.\nB: Vuoto o ripieno?",
 exampleSrc:"A: A custard-filled croissant, please.\nB: Plain or filled?",
 funFact:"The cornetto is NOT a French croissant. It is softer, sweeter, and often filled with crema, marmellata, or cioccolato. Italians eat it for breakfast, never lunch."},

{type:"teach", trg:"la marmellata", src:"the jam / marmalade", pos:"noun", gender:"f",
 note:"Feminine noun. Used for all fruit preserves.\n'Pane e marmellata' = bread and jam.",
 example:"A: Che marmellata avete?\nB: Fragola, albicocca e pesca.",
 exampleSrc:"A: What jam do you have?\nB: Strawberry, apricot, and peach.",
 funFact:"Technically, 'marmellata' should only mean citrus preserves (EU law), but Italians use it for all jams. The correct word for non-citrus is 'confettura.'"},

{type:"teach", trg:"il miele", src:"the honey", pos:"noun", gender:"m",
 note:"Masculine noun. Uncountable.\n'Dolce come il miele' = sweet as honey.",
 example:"A: Metti miele o zucchero nel te?\nB: Miele, e più naturale.",
 exampleSrc:"A: Do you put honey or sugar in your tea?\nB: Honey, it is more natural.",
 funFact:"Italy produces extraordinary regional honeys. 'Miele di castagno' (chestnut honey) from Tuscany is dark and slightly bitter, unlike anything else."},

{type:"teach", trg:"lo zucchero", src:"the sugar", pos:"noun", gender:"m",
 note:"Masculine noun. 'Senza zucchero' = without sugar.\n'Zuccherato' = sweetened.",
 example:"A: Quanto zucchero nel caffè?\nB: Niente, lo prendo amaro.",
 exampleSrc:"A: How much sugar in the coffee?\nB: None, I take it bitter.",
 funFact:"Italians are passionate about their coffee order. 'Amaro' (bitter, no sugar), 'dolce' (sweet), or 'con un po' di zucchero' (with a little sugar) are the options."},

{type:"teach", trg:"la farina", src:"the flour", pos:"noun", gender:"f",
 note:"Feminine noun. 'Farina 00' is the finest Italian flour.\n'Farina integrale' = whole wheat flour.",
 example:"A: Che farina usi per la pizza?\nB: Sempre farina 00, e la migliore.",
 exampleSrc:"A: What flour do you use for pizza?\nB: Always 00 flour, it is the best.",
 funFact:"Italian flour is graded by fineness: 00 (finest), 0, 1, 2, integrale (whole). The famous 00 flour makes pizza dough stretchy and light."},

{type:"teach", trg:"inzuppare", src:"to dunk / to dip", pos:"verb", gender:null,
 note:"Regular -are verb. 'Inzuppare il biscotto' = to dunk the cookie.\nFrom 'zuppa' (soup).",
 example:"A: Inzuppi il cornetto nel cappuccino?\nB: Sempre! E il modo migliore.",
 exampleSrc:"A: Do you dunk the croissant in the cappuccino?\nB: Always! It is the best way.",
 funFact:"Dunking pastries in cappuccino is perfectly acceptable in Italy. Some bars even serve cornetti designed to be inzuppati, with a harder crust that holds up."},

{type:"teach", trg:"il bancone", src:"the counter (bar counter)", pos:"noun", gender:"m",
 note:"Masculine noun. 'Al bancone' = at the counter.\nDrinking at the counter is cheaper than sitting.",
 example:"A: Ci sediamo o restiamo al bancone?\nB: Al bancone, costa meno!",
 exampleSrc:"A: Shall we sit down or stay at the counter?\nB: At the counter, it costs less!",
 funFact:"In most Italian bars, a coffee at the counter costs around one euro. The same coffee at a table (al tavolo) can cost two or three euros. Locals always stand."},

{type:"teach", trg:"lo scontrino", src:"the receipt", pos:"noun", gender:"m",
 note:"Masculine noun. You often pay first, then show the receipt.\n'Chiedere lo scontrino' = to ask for the receipt.",
 example:"A: Ha lo scontrino?\nB: Si, eccolo. Un caffè e un cornetto.",
 exampleSrc:"A: Do you have the receipt?\nB: Yes, here it is. A coffee and a croissant.",
 funFact:"In many Italian bars, you pay at the cassa (register) first, get your scontrino, then hand it to the barista. The Guardia di Finanza can fine shops without receipts."},

{type:"teach", trg:"la spremuta", src:"the freshly squeezed juice", pos:"noun", gender:"f",
 note:"Feminine noun. 'Spremuta d'arancia' = fresh orange juice.\nFrom 'spremere' (to squeeze).",
 example:"A: Una spremuta d'arancia, per favore.\nB: Fresca, appena fatta!",
 exampleSrc:"A: A fresh orange juice, please.\nB: Fresh, just made!",
 funFact:"A 'spremuta' is always freshly squeezed on the spot. Bottled juice is 'succo di frutta.' Ordering a spremuta at a bar and watching them squeeze the oranges is a morning ritual."},

{type:"mc",
 q:"What is the difference between drinking 'al bancone' and 'al tavolo'?",
 opts:["At the counter is cheaper than at a table","At the counter is more expensive","There is no difference","At the counter you get more coffee"],
 ans:"At the counter is cheaper than at a table",
 hint:"Italian bars have a two-price system. Standing customers pay less for the same drink."},

{type:"match", pairs:[
  {trg:"il miele", src:"the honey"},
  {trg:"la farina", src:"the flour"},
  {trg:"lo zucchero", src:"the sugar"},
  {trg:"la marmellata", src:"the jam"}
]},

{type:"fb",
 s:"Un {1} alla crema, per favore.",
 a:["cornetto"],
 opts:["cornetto","bancone","scontrino","spremuta"],
 hint:"This is the Italian version of a croissant, often filled with custard, jam, or chocolate.",
 sSrc:"A cream-filled {1}, please."},

{type:"mc",
 q:"What does 'amaro' mean when ordering coffee?",
 opts:["Without sugar (bitter)","Extra sweet","With milk","Very hot"],
 ans:"Without sugar (bitter)",
 hint:"It literally means 'b....' Italians who like unsweetened coffee use this word."},

{type:"fb",
 s:"Una {1} d'arancia, per favore.",
 a:["spremuta"],
 opts:["spremuta","marmellata","farina","sveglia"],
 hint:"This word means freshly squeezed juice. The oranges are squeezed right in front of you.",
 sSrc:"A fresh {1} of orange, please."},

{type:"mc",
 q:"What should you show the barista after paying at the cassa?",
 opts:["Lo scontrino (the receipt)","La carta (the card)","Il menu","Il cornetto"],
 ans:"Lo scontrino (the receipt)",
 hint:"In many Italian bars, you pay first at the register and receive a small paper proof of payment."}
,{type:"match",pairs:[{trg:"inzuppare",src:"to dunk / to dip"},{trg:"il bancone",src:"the counter (bar counter)"}]}]};
export default BATCH8_L1;
