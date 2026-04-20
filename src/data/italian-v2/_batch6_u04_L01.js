// Batch 6 — Unit 04 extra lesson. Al bar: Pastries & Breakfast Culture
const BATCH6_L1 = {id:"itv2_u04l_b6_1", title:"La colazione al bar", icon:"\u{1F950}", xp:15, board:true, steps:[
{type:"intro", title:"La colazione al bar",
 desc:"Explore Italian breakfast culture, pastries, and the rituals of the morning bar visit.",
 goals:["Name common Italian pastries and breakfast items","Order a complete breakfast at a bar","Understand Italian breakfast culture"]},

{type:"teach", trg:"il cornetto", src:"the croissant", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i cornetti.\nThe Italian version of a croissant, slightly sweeter.",
 example:"A: Un cornetto alla crema, per favore.\nB: Vuoto o ripieno?",
 exampleSrc:"A: A cream-filled croissant, please.\nB: Empty or filled?",
 funFact:"The Italian cornetto is sweeter and softer than a French croissant. The name means 'little horn' from its shape. In southern Italy it is called 'brioche.'"},

{type:"teach", trg:"la brioche", src:"the sweet pastry / croissant", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le brioche (invariable).\nIn Sicily, often served with gelato.",
 example:"A: In Sicilia si mangia la brioche con il gelato.\nB: Per colazione? Fantastico!",
 exampleSrc:"A: In Sicily they eat brioche with gelato.\nB: For breakfast? Fantastic!",
 funFact:"The cornetto vs. brioche debate divides Italy. North says 'cornetto,' south says 'brioche.' In Sicily, brioche con gelato is a beloved summer breakfast."},

{type:"teach", trg:"la spremuta", src:"the fresh-squeezed juice", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le spremute.\nFrom 'spremere' (to squeeze). Always freshly made.",
 example:"A: Una spremuta d'arancia, per favore.\nB: Grande o piccola?",
 exampleSrc:"A: A fresh-squeezed orange juice, please.\nB: Large or small?",
 funFact:"Italian bars squeeze juice fresh in front of you. 'Spremuta' only refers to freshly squeezed juice. Bottled juice is 'succo di frutta.'"},

{type:"teach", trg:"la marmellata", src:"the jam / marmalade", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le marmellate.\nUsed for all fruit preserves, not just citrus.",
 example:"A: Cornetto alla marmellata o alla crema?\nB: Alla marmellata, grazie.",
 exampleSrc:"A: Croissant with jam or cream?\nB: With jam, thanks.",
 funFact:"EU law distinguishes 'marmellata' (citrus only) from 'confettura' (other fruits), but Italians use 'marmellata' for everything in daily speech."},

{type:"teach", trg:"il bancone", src:"the bar counter", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i banconi.\nWhere you stand to drink coffee quickly.",
 example:"A: Prendiamo il caffè al bancone?\nB: Si, e più veloce e costa meno.",
 exampleSrc:"A: Shall we have coffee at the counter?\nB: Yes, it is faster and costs less.",
 funFact:"In Italy, coffee at the bar counter costs less than sitting at a table. Standing at the bancone is the traditional, quick Italian coffee ritual."},

{type:"teach", trg:"lo scontrino", src:"the receipt / ticket", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: gli scontrini.\nIn many bars, you pay first and show the receipt.",
 example:"A: Prima lo scontrino alla cassa, poi ordini al bancone.\nB: Ah, capisco!",
 exampleSrc:"A: First the receipt at the cash register, then you order at the counter.\nB: Ah, I understand!",
 funFact:"Many traditional Italian bars use a two-step system: pay at the 'cassa' first, get your scontrino, then present it at the bar to get your order."},

{type:"teach", trg:"il barista", src:"the bartender / barista", pos:"noun", gender:"m",
 note:"Masculine noun. Feminine: la barista.\nThe person who makes and serves drinks at a bar.",
 example:"A: Il barista fa un ottimo cappuccino.\nB: Si, viene qui da anni.",
 exampleSrc:"A: The barista makes an excellent cappuccino.\nB: Yes, he has been coming here for years.",
 funFact:"In Italy, 'barista' means anyone who works behind a bar. The English borrowing narrowed it to coffee specialists. Italian baristas typically serve everything from espresso to cocktails."},

{type:"teach", trg:"inzuppare", src:"to dunk / to dip", pos:"verb", gender:null,
 note:"Regular -are verb. inzuppo, inzuppi, inzuppa.\nFrom 'zuppa' (soup). To soak in liquid.",
 example:"A: Posso inzuppare il cornetto nel cappuccino?\nB: Certo, lo fanno tutti!",
 exampleSrc:"A: Can I dunk the croissant in the cappuccino?\nB: Of course, everyone does it!",
 funFact:"Dunking your cornetto in your cappuccino is a perfectly acceptable Italian habit, despite what etiquette books say. Even businesspeople do it at the bar."},

{type:"teach", trg:"la cassa", src:"the cash register / checkout", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le casse.\nWhere you pay in a bar or shop.",
 example:"A: Scusi, dov'e la cassa?\nB: La in fondo, a sinistra.",
 exampleSrc:"A: Excuse me, where is the cash register?\nB: Over there in the back, on the left.",
 funFact:"In traditional Italian bars, the 'cassiere/a' (cashier) sits at a separate register from where drinks are prepared, an efficient division of labor."},

{type:"teach", trg:"il tramezzino", src:"the triangular sandwich", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i tramezzini.\nSoft white bread triangle with fillings.",
 example:"A: Prendo un tramezzino al prosciutto.\nB: Con insalata o senza?",
 exampleSrc:"A: I will have a ham sandwich.\nB: With salad or without?",
 funFact:"The tramezzino was invented in Turin in the 1920s at Caffe Mulassano. The name means 'in between' and was reportedly coined by the poet Gabriele D'Annunzio."},

{type:"teach", trg:"la granita", src:"the flavored ice / slush", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le granite.\nA semi-frozen dessert, especially popular in Sicily.",
 example:"A: In estate prendo sempre una granita al limone.\nB: Con la brioche?",
 exampleSrc:"A: In summer I always get a lemon granita.\nB: With brioche?",
 funFact:"Sicilian granita is an art form. The almond and coffee varieties from Catania are legendary. It is not the same as a 'slushie,' the texture is denser and more refined."},

{type:"teach", trg:"il cucchiaino", src:"the teaspoon", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i cucchiaini.\nDiminutive of 'cucchiaio' (spoon).",
 example:"A: Posso avere un cucchiaino per il caffè?\nB: Eccolo.",
 exampleSrc:"A: May I have a teaspoon for the coffee?\nB: Here it is.",
 funFact:"Italians stir their espresso vigorously with a cucchiaino to blend the 'crema' (foam) with the liquid. Some add sugar first, stir, then drink in one or two sips."},

{type:"teach", trg:"il vassoio", src:"the tray", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i vassoi.\nUsed in bars and restaurants to carry drinks and food.",
 example:"A: Il barista porta il vassoio al tavolo.\nB: Tre caffè e due cornetti.",
 exampleSrc:"A: The barista brings the tray to the table.\nB: Three coffees and two croissants.",
 funFact:"In busy Italian bars, the barista carries an impossibly full vassoio with one hand through the crowd, a skill learned over years of practice."},

{type:"teach", trg:"il resto", src:"the change (money)", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i resti.\nMoney returned after a purchase. Also means 'remainder.'",
 example:"A: Ecco dieci euro.\nB: E il suo resto: tre euro e cinquanta.",
 exampleSrc:"A: Here are ten euros.\nB: And your change: three euros and fifty cents.",
 funFact:"In Italy, small change shortages are common. Shopkeepers may offer candy instead of a few cents of change, a practice called 'il resto in caramelle.'"},

{type:"mc", q:"Come si chiama il dolce fatto a triangolo con pane morbido?",
 opts:["il tramezzino","il cornetto","la brioche","la granita"],
 ans:"il tramezzino",
 hint:"A soft white bread triangle with filling, invented in Turin in the 1920s."},

{type:"fb", s:"Prima pago alla {1}, poi ordino al bancone.", a:["cassa"],
 opts:["cassa","brioche","granita","spremuta"],
 hint:"The place where you pay, the cash register.",
 sSrc:"First I pay at the {1}, then I order at the counter."},

{type:"mc", q:"Cosa significa 'inzuppare'?",
 opts:["to dunk or dip","to drink quickly","to pay","to order"],
 ans:"to dunk or dip",
 hint:"What you do with your cornetto in your cappuccino."},

{type:"match", pairs:[
 {trg:"il cornetto", src:"croissant"},
 {trg:"la spremuta", src:"fresh juice"},
 {trg:"il tramezzino", src:"triangle sandwich"},
 {trg:"la granita", src:"flavored ice"}
]},

{type:"fb", s:"Il {1} fa un ottimo cappuccino ogni mattina.", a:["barista"],
 opts:["barista","bancone","vassoio","scontrino"],
 hint:"The person who works behind the bar and makes drinks.",
 sSrc:"The {1} makes an excellent cappuccino every morning."},

{type:"mc", q:"Dove costa meno il caffè in un bar italiano?",
 opts:["Al bancone","Al tavolo","In terrazza","Alla cassa"],
 ans:"Al bancone",
 hint:"Standing up at the bar is the cheapest option, a quick Italian tradition."},

{type:"fb", s:"Ecco venti euro. Mi da il {1}, per favore?", a:["resto"],
 opts:["resto","vassoio","cucchiaino","scontrino"],
 hint:"The money you get back after paying more than the total.",
 sSrc:"Here are twenty euros. Can you give me the {1}, please?"},

{type:"match", pairs:[
 {trg:"il bancone", src:"bar counter"},
 {trg:"lo scontrino", src:"receipt"},
 {trg:"la cassa", src:"cash register"},
 {trg:"il cucchiaino", src:"teaspoon"}
]}
,{type:"match",pairs:[{trg:"la marmellata",src:"the jam / marmalade"},{trg:"inzuppare",src:"to dunk / to dip"},{trg:"il vassoio",src:"the tray"}]}]};
export default BATCH6_L1;
