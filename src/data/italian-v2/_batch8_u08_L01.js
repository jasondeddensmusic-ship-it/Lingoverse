// Batch 8 — Unit 08 extra lesson. Shopping: Materials & Fabrics
const BATCH8_L1 = {id:"itv2_u08l_b8_1", title:"Tessuti e materiali", icon:"🧵", xp:15, board:true, steps:[
{type:"intro", title:"Tessuti e materiali",
 desc:"Learn about fabrics, materials, and quality in Italian fashion and shopping contexts.",
 goals:["Name common fabrics and materials","Describe clothing quality","Shop for clothes with material vocabulary"]},

{type:"teach", trg:"il cotone", src:"the cotton", pos:"noun", gender:"m",
 note:"Masculine noun. 'Di cotone' = made of cotton.\n'Cotone biologico' = organic cotton.",
 example:"A: Questa maglietta e di cotone?\nB: Si, cotone biologico al cento per cento.",
 exampleSrc:"A: Is this T-shirt made of cotton?\nB: Yes, one hundred percent organic cotton.",
 funFact:"Italy is famous for high-quality cotton fabrics. The town of Como is world-renowned for its silk and cotton textile industry, supplying luxury fashion houses."},

{type:"teach", trg:"la seta", src:"the silk", pos:"noun", gender:"f",
 note:"Feminine noun. 'Di seta' = made of silk.\nComo is the silk capital of Italy.",
 example:"A: Che bella sciarpa di seta!\nB: L'ho comprata a Como.",
 exampleSrc:"A: What a beautiful silk scarf!\nB: I bought it in Como.",
 funFact:"Lake Como has been Italy's silk center since the 1400s. Today it produces most of Europe's finest silk, used by brands like Hermes, Gucci, and Armani."},

{type:"teach", trg:"la lana", src:"the wool", pos:"noun", gender:"f",
 note:"Feminine noun. 'Di lana' = made of wool.\n'Maglione di lana' = wool sweater.",
 example:"A: Questo maglione e di lana?\nB: Si, lana merino, molto calda.",
 exampleSrc:"A: Is this sweater made of wool?\nB: Yes, merino wool, very warm.",
 funFact:"Italy's Biella, in Piedmont, is the world capital of fine wool textiles. The water from the Alps gives Biella's wool fabrics an exceptional softness."},

{type:"teach", trg:"il cuoio", src:"the leather (thick)", pos:"noun", gender:"m",
 note:"Masculine noun. Heavy leather for bags, belts, shoes.\n'Pelle' = softer leather.",
 example:"A: Questa borsa e di cuoio vero?\nB: Si, cuoio italiano, fatto a mano.",
 exampleSrc:"A: Is this bag made of real leather?\nB: Yes, Italian leather, handmade.",
 funFact:"Florence's Santa Croce district has been a leather-working center since the Middle Ages. 'Cuoio fiorentino' (Florentine leather) is world-famous for its quality."},

{type:"teach", trg:"il tessuto", src:"the fabric / textile", pos:"noun", gender:"m",
 note:"Masculine noun. 'Tessuto pregiato' = fine fabric.\nFrom 'tessere' (to weave).",
 example:"A: Che tessuto preferisci?\nB: Dipende dalla stagione. Cotone d'estate, lana d'inverno.",
 exampleSrc:"A: What fabric do you prefer?\nB: It depends on the season. Cotton in summer, wool in winter.",
 funFact:"Italy's textile industry is the largest in Europe. The 'Made in Italy' label on fabrics is a guarantee of quality recognized worldwide."},

{type:"teach", trg:"cucire", src:"to sew", pos:"verb", gender:null,
 note:"Irregular verb. Cucio, cuci, cuce.\n'La macchina da cucire' = the sewing machine.",
 example:"A: Sai cucire?\nB: Si, mia nonna mi ha insegnato.",
 exampleSrc:"A: Do you know how to sew?\nB: Yes, my grandmother taught me.",
 funFact:"'Alta sartoria' (high tailoring) is Italy's equivalent of haute couture. Milan, Rome, and Naples each have distinct tailoring traditions."},

{type:"teach", trg:"la taglia", src:"the size (clothing)", pos:"noun", gender:"f",
 note:"Feminine noun. 'Che taglia porta?' = What size do you wear?\nItalian sizes differ from US/UK.",
 example:"A: Che taglia porta?\nB: La quarantadue, una medium.",
 exampleSrc:"A: What size do you wear?\nB: Size forty-two, a medium.",
 funFact:"Italian clothing sizes run differently. A US size 6 is an Italian 42. A US 8 is a 44. Always check the conversion chart when shopping in Italy."},

{type:"teach", trg:"lo sconto", src:"the discount", pos:"noun", gender:"m",
 note:"Masculine noun. 'Fare lo sconto' = to give a discount.\n'In sconto' = on sale.",
 example:"A: C'e uno sconto su questa giacca?\nB: Si, il trenta per cento di sconto.",
 exampleSrc:"A: Is there a discount on this jacket?\nB: Yes, thirty percent off.",
 funFact:"Italy has regulated sales seasons: 'saldi invernali' start in January, 'saldi estivi' in July. Discounts outside these periods are called 'promozioni.'"},

{type:"teach", trg:"il camerino", src:"the fitting room", pos:"noun", gender:"m",
 note:"Masculine noun. 'Posso provare nel camerino?' = Can I try this on in the fitting room?",
 example:"A: Dov'e il camerino?\nB: In fondo a destra, signora.",
 exampleSrc:"A: Where is the fitting room?\nB: At the back on the right, madam.",
 funFact:"'Camerino' literally means 'small room.' It is also the word for a backstage dressing room in theaters. Actors and shoppers use the same word."},

{type:"mc",
 q:"Which Italian city is the world capital of silk production?",
 opts:["Como","Milan","Florence","Rome"],
 ans:"Como",
 hint:"This city on a famous lake has been producing silk since the 1400s and supplies luxury fashion houses worldwide."},

{type:"match", pairs:[
  {trg:"il cotone", src:"the cotton"},
  {trg:"la seta", src:"the silk"},
  {trg:"la lana", src:"the wool"},
  {trg:"il cuoio", src:"the leather"}
]},

{type:"fb",
 s:"Che {1} porta? Abbiamo dalla 38 alla 48.",
 a:["taglia"],
 opts:["taglia","tessuto","sconto","seta"],
 hint:"This word means 'size' for clothing. The shop assistant needs to know which number fits you.",
 sSrc:"What {1} do you wear? We have from 38 to 48."},

{type:"mc",
 q:"When do Italian 'saldi invernali' (winter sales) begin?",
 opts:["January","November","March","September"],
 ans:"January",
 hint:"Italy regulates sale seasons by law. The winter sales begin at the start of the new year."},

{type:"fb",
 s:"Questa borsa e di {1} italiano, fatta a mano a Firenze.",
 a:["cuoio"],
 opts:["cuoio","cotone","seta","tessuto"],
 hint:"This material comes from animal hides. Florence is famous for this handcrafted product.",
 sSrc:"This bag is made of Italian {1}, handmade in Florence."},

{type:"mc",
 q:"What does 'cucire' mean?",
 opts:["To sew","To cut","To wash","To iron"],
 ans:"To sew",
 hint:"You need a needle and thread for this activity. Grandmothers traditionally taught this skill."}
]};
export default BATCH8_L1;
