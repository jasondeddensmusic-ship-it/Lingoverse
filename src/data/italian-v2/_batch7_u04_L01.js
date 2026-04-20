// Batch 7 — Unit 04 extra lesson. Al bar: Fruits & Healthy Snacks
const BATCH7_L1 = {id:"itv2_u04l_b7_1", title:"Frutta e spuntini", icon:"\u{1F34E}", xp:15, board:true, steps:[
{type:"intro", title:"Frutta e spuntini",
 desc:"Learn the names of common fruits and healthy snacks you can find at Italian markets and bars.",
 goals:["Name common Italian fruits","Order fruit-based drinks and snacks","Talk about food preferences"]},

{type:"teach", trg:"la mela", src:"the apple", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le mele.\n'Mela verde' = green apple, 'mela rossa' = red apple.",
 example:"A: Vuoi una mela?\nB: Si, una mela verde, per favore.",
 exampleSrc:"A: Do you want an apple?\nB: Yes, a green apple, please.",
 funFact:"The Trentino-Alto Adige region produces most of Italy's apples. 'Mela' comes from Latin 'malum,' which also means 'evil,' linking to the biblical forbidden fruit."},

{type:"teach", trg:"l'arancia", src:"the orange", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le arance.\nThe juice: 'succo d'arancia.' The color: arancione.",
 example:"A: Prendo una spremuta d'arancia.\nB: Fresca, appena spremuta!",
 exampleSrc:"A: I will have a fresh-squeezed orange juice.\nB: Fresh, just squeezed!",
 funFact:"Sicily produces blood oranges (arance rosse), a unique variety with deep red flesh. They are sweeter and richer in vitamins than regular oranges."},

{type:"teach", trg:"la banana", src:"the banana", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le banane.\nItaly imports most bananas from Latin America.",
 example:"A: Metto una banana nel frullato.\nB: Buona idea, e dolce e cremosa.",
 exampleSrc:"A: I am putting a banana in the smoothie.\nB: Good idea, it is sweet and creamy.",
 funFact:"Italy does not grow bananas commercially, but they are one of the most popular fruits. 'Andare a banane' (to go bananas) means to go crazy, borrowed from English."},

{type:"teach", trg:"la pesca", src:"the peach", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le pesche.\nAlso means 'fishing' (same word, different meaning!).",
 example:"A: Le pesche sono mature?\nB: Si, dolcissime!",
 exampleSrc:"A: Are the peaches ripe?\nB: Yes, very sweet!",
 funFact:"The Emilia-Romagna region is famous for its peaches. The Bellini cocktail, invented at Harry's Bar in Venice, is made with white peach puree and Prosecco."},

{type:"teach", trg:"l'uva", src:"the grape(s)", pos:"noun", gender:"f",
 note:"Feminine noun. Usually singular even for a bunch.\n'Uva bianca' = green grapes, 'uva nera' = red grapes.",
 example:"A: L'uva e buonissima quest'anno.\nB: Perfetta per fare il vino!",
 exampleSrc:"A: The grapes are excellent this year.\nB: Perfect for making wine!",
 funFact:"Italy is one of the world's largest wine producers. There are over 500 native Italian grape varieties, more than any other country."},

{type:"teach", trg:"la pera", src:"the pear", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le pere.\n'Formaggio e pere' = a classic Italian pairing.",
 example:"A: Vuoi una pera?\nB: Si, con un po' di formaggio.",
 exampleSrc:"A: Do you want a pear?\nB: Yes, with a little cheese.",
 funFact:"'Al contadino non far sapere quanto e buono il formaggio con le pere' is a proverb: do not let the farmer know how good cheese is with pears. A jealously guarded secret pairing."},

{type:"teach", trg:"la ciliegia", src:"the cherry", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le ciliegie.\nSeason: May-June. Very popular in Italy.",
 example:"A: Le ciliegie sono care quest'anno.\nB: Si, ma sono buonissime.",
 exampleSrc:"A: Cherries are expensive this year.\nB: Yes, but they are delicious.",
 funFact:"'Una ciliegia tira l'altra' (one cherry pulls another) is a famous Italian proverb. It means once you start, you cannot stop. True for cherries and for gossip."},

{type:"teach", trg:"il limone", src:"the lemon", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i limoni.\nEssential in Italian cooking and drinks.",
 example:"A: Mi dai un limone?\nB: Per il pesce o per il te?",
 exampleSrc:"A: Can you give me a lemon?\nB: For the fish or for the tea?",
 funFact:"The Amalfi Coast and Sorrento are famous for their giant lemons used to make limoncello, a lemon liqueur served ice-cold as a digestif after dinner."},

{type:"teach", trg:"la fragola", src:"the strawberry", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le fragole.\n'Fragola' gelato flavor is a classic.",
 example:"A: Gelato alla fragola, per favore.\nB: Due palline o tre?",
 exampleSrc:"A: Strawberry gelato, please.\nB: Two scoops or three?",
 funFact:"Italian strawberries peak in April-May. 'Fragole con panna' (strawberries with cream) is a beloved spring dessert, and wild strawberries (fragoline di bosco) are a delicacy."},

{type:"teach", trg:"la noce", src:"the walnut", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le noci.\nAlso: 'noce moscata' = nutmeg, 'noce di cocco' = coconut.",
 example:"A: Aggiungo le noci all'insalata.\nB: Buona idea, danno croccantezza.",
 exampleSrc:"A: I am adding walnuts to the salad.\nB: Good idea, they add crunchiness.",
 funFact:"'Nocino' is a traditional Italian liqueur made from green walnuts, harvested on June 24 (St. John's Day). It is especially popular in Emilia-Romagna."},

{type:"teach", trg:"maturo", src:"ripe / mature", pos:"adj", gender:null,
 note:"Adjective. Maturo/a/i/e.\n'Frutta matura' = ripe fruit. Also: 'persona matura' = mature person.",
 example:"A: Queste pesche sono mature?\nB: Si, perfette da mangiare oggi.",
 exampleSrc:"A: Are these peaches ripe?\nB: Yes, perfect to eat today.",
 funFact:"'Maturo' comes from Latin 'maturus.' Italians are very particular about fruit ripeness. At the market, you specify: 'da mangiare oggi' (to eat today) or 'per domani' (for tomorrow)."},

{type:"teach", trg:"sbucciare", src:"to peel", pos:"verb", gender:null,
 note:"Regular -are verb. sbuccio, sbucci, sbuccia.\n'Sbucciare una mela' = to peel an apple.",
 example:"A: Devo sbucciare le arance?\nB: Si, per la macedonia.",
 exampleSrc:"A: Should I peel the oranges?\nB: Yes, for the fruit salad.",
 funFact:"'Buccia' means peel/skin of fruit. 'Sbucciare' removes it. The expression 'scivolare su una buccia di banana' (to slip on a banana peel) is used for embarrassing mishaps."},

{type:"teach", trg:"la macedonia", src:"the fruit salad", pos:"noun", gender:"f",
 note:"Feminine noun. A mix of chopped fresh fruits.\nOften served with lemon juice and sugar.",
 example:"A: Facciamo una macedonia per dessert?\nB: Si, con fragole, pesche è banane.",
 exampleSrc:"A: Shall we make a fruit salad for dessert?\nB: Yes, with strawberries, peaches, and bananas.",
 funFact:"'Macedonia' means both fruit salad and the country. The metaphor is the same: a mix of different things. It originally referred to the diverse peoples of ancient Macedonia."},

{type:"teach", trg:"il succo", src:"the juice", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i succhi.\n'Succo di frutta' = fruit juice.",
 example:"A: Un succo di frutta, per favore.\nB: Di mela o di pesca?",
 exampleSrc:"A: A fruit juice, please.\nB: Apple or peach?",
 funFact:"Italian bars serve freshly squeezed juices (spremute) alongside packaged ones (succhi). A 'spremuta' is always fresh, while a 'succo' may be from a carton."},

{type:"mc", q:"Quale frutto si usa per il limoncello?",
 opts:["il limone","l'arancia","la mela","la pera"],
 ans:"il limone",
 hint:"A yellow citrus fruit from the Amalfi Coast, used for a famous Italian liqueur."},

{type:"fb", s:"Le ciliegie sono {1}, perfette per oggi.", a:["mature"],
 opts:["mature","verdi","crude","fredde"],
 hint:"When fruit is ready to eat, not too hard and not too soft.",
 sSrc:"The cherries are {1}, perfect for today."},

{type:"match", pairs:[
 {trg:"la mela", src:"apple"},
 {trg:"l'arancia", src:"orange"},
 {trg:"la ciliegia", src:"cherry"},
 {trg:"l'uva", src:"grapes"}
]},

{type:"mc", q:"Che cos'e la 'macedonia'?",
 opts:["A fruit salad","A type of pasta","An Italian wine","A peach juice"],
 ans:"A fruit salad",
 hint:"A mix of different chopped fresh fruits, often served as dessert."},

{type:"fb", s:"Devo {1} le arance per la macedonia.", a:["sbucciare"],
 opts:["sbucciare","mangiare","comprare","tagliare"],
 hint:"To remove the skin from fruit before cutting it up.",
 sSrc:"I need to {1} the oranges for the fruit salad."},

{type:"mc", q:"Come si chiama il frutto usato per il Bellini?",
 opts:["la pesca","la fragola","il limone","l'uva"],
 ans:"la pesca",
 hint:"A soft, fuzzy fruit that is mixed with Prosecco for a famous Venetian cocktail."},

{type:"fb", s:"Un {1} di frutta, per favore. Di mela.", a:["succo"],
 opts:["succo","litro","bicchiere","gelato"],
 hint:"A drink made from fruit. Can be fresh or from a carton.",
 sSrc:"A fruit {1}, please. Apple."},

{type:"match", pairs:[
 {trg:"la pesca", src:"peach"},
 {trg:"la banana", src:"banana"},
 {trg:"la pera", src:"pear"},
 {trg:"la noce", src:"walnut"}
]}
,{type:"match",pairs:[{trg:"maturo",src:"ripe / mature"},{trg:"la macedonia",src:"the fruit salad"}]}]};
export default BATCH7_L1;
