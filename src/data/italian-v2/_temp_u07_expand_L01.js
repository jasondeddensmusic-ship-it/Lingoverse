// Italian V2 Unit 07 Expansion — Lesson 4: Il vino italiano (Italian Wine)
// Expands restaurant unit with wine vocabulary and ordering.

const LESSON_4 = {id:"itv2_u7l4", title:"Il vino italiano", icon:"\uD83C\uDF77", xp:15, board:true, steps:[
  {type:"intro", title:"Il vino italiano",
   desc:"Learn how to read a wine list and order wine in Italian. Italy is the world's largest wine producer, and every region has its own specialties.",
   goals:["Name types of wine in Italian","Read a wine list and ask for recommendations","Describe wine characteristics"]},

  {type:"teach", trg:"il vino rosso", src:"red wine", pos:"noun", gender:"m",
   note:"Masculine. 'Rosso' = red. Major reds: Chianti, Barolo, Amarone.\nPlural: i vini rossi.",
   example:"A: Un bicchiere di vino rosso, per favore.\nB: Abbiamo un ottimo Chianti.",
   exampleSrc:"A: A glass of red wine, please.\nB: We have an excellent Chianti.",
   funFact:"Italy has over 500 native grape varieties. Sangiovese (Chianti), Nebbiolo (Barolo), and Aglianico are among the most prized red grapes. Each Italian region is proud of its local wine and considers it the best."},

  {type:"teach", trg:"il vino bianco", src:"white wine", pos:"noun", gender:"m",
   note:"Masculine. 'Bianco' = white. Major whites: Pinot Grigio, Verdicchio, Soave.\n'Vino bianco fermo' = still white wine.",
   example:"A: Preferisce rosso o bianco?\nB: Bianco, per favore. Fa caldo.",
   exampleSrc:"A: Do you prefer red or white?\nB: White, please. It is hot.",
   funFact:"White wines are more popular in northern Italy, while the south favors reds. Pinot Grigio from the northeast and Vermentino from Sardinia are summer favorites. Italians often match wine to season, not just food."},

  {type:"teach", trg:"il vino rosato", src:"rose wine", pos:"noun", gender:"m",
   note:"Masculine. 'Rosato' = pinkish. Made from red grapes with brief skin contact.\nLess common than rosso or bianco in Italy.",
   example:"A: Avete un rosato?\nB: Si, un Cerasuolo d'Abruzzo.",
   exampleSrc:"A: Do you have a rose?\nB: Yes, a Cerasuolo d'Abruzzo.",
   funFact:"Rose wine is gaining popularity in Italy but traditionally played a minor role. Puglia and Abruzzo produce the most respected Italian roses. The word 'rosato' comes from 'rosa' (rose/pink), describing the delicate color."},

  {type:"teach", trg:"secco", src:"dry (wine)", pos:"adj", gender:null,
   note:"Adj. Feminine: secca. Opposite: dolce (sweet).\n'Un vino secco' = a dry wine. From Latin 'siccus' (dry).",
   example:"A: Lo preferisce secco o dolce?\nB: Secco, grazie.",
   exampleSrc:"A: Do you prefer it dry or sweet?\nB: Dry, thanks.",
   funFact:"From Latin 'siccus' (dry), which also gave English 'desiccate' (to dry out). In wine terms, 'secco' means low residual sugar. Most Italian table wines are secco. Sweet wines like Moscato d'Asti are typically served with dessert."},

  {type:"teach", trg:"frizzante", src:"sparkling / fizzy", pos:"adj", gender:null,
   note:"Adj. Same form for masculine and feminine (-e ending).\n'Vino frizzante' = lightly sparkling wine.",
   example:"A: Vorrei un prosecco.\nB: Frizzante o spumante?",
   exampleSrc:"A: I would like a prosecco.\nB: Lightly sparkling or fully sparkling?",
   funFact:"'Frizzante' describes gentle bubbles, while 'spumante' means fully sparkling (like champagne). Prosecco from Veneto is Italy's most famous sparkling wine. Lambrusco from Emilia-Romagna is a frizzante red, unusual worldwide."},

  {type:"teach", trg:"la lista dei vini", src:"the wine list", pos:"noun", gender:"f",
   note:"Feminine ('lista'). 'Dei vini' = of the wines.\n'Posso vedere la lista dei vini?' = May I see the wine list?",
   example:"A: Posso vedere la lista dei vini?\nB: Certo, eccola.",
   exampleSrc:"A: May I see the wine list?\nB: Of course, here it is.",
   funFact:"Italian wine lists are organized by type (rosso, bianco, rosato) and often by region. Prices vary enormously. House wine ('vino della casa') is usually the best value and is perfectly respectable to order in Italy."},

  {type:"teach", trg:"il vino della casa", src:"the house wine", pos:"noun", gender:"m",
   note:"Masculine. 'Della casa' = of the house. Usually served in a carafe.\nOften the best value on the wine list.",
   example:"A: Quanto costa il vino della casa?\nB: Otto euro al litro.",
   exampleSrc:"A: How much is the house wine?\nB: Eight euros per liter.",
   funFact:"Ordering house wine in Italy is not a sign of being cheap. Many restaurants take pride in their house wine, which is often sourced from local producers. It comes in a carafe ('caraffa') and is sold by the quarter, half, or full liter."},

  {type:"teach", trg:"il brindisi", src:"the toast (celebratory)", pos:"noun", gender:"m",
   note:"Masculine. From the city of Brindisi, a departure port.\n'Fare un brindisi' = to make a toast. 'Cin cin!' = Cheers!",
   example:"A: Facciamo un brindisi?\nB: Si! Cin cin! Alla salute!",
   exampleSrc:"A: Shall we make a toast?\nB: Yes! Cheers! To health!",
   funFact:"'Cin cin' is the Italian way to say 'cheers.' It imitates the clinking sound of glasses. Be careful: 'cin cin' sounds like a word for a body part in Japanese, which can cause embarrassment with Japanese guests. 'Alla salute!' (to health) is the safe alternative."},

  {type:"teach", trg:"corposo", src:"full-bodied (wine)", pos:"adj", gender:null,
   note:"Adj. Feminine: corposa. From 'corpo' (body).\nDescribes a wine with rich, heavy flavor.",
   example:"A: Vorrei un rosso corposo.\nB: Le consiglio il Barolo.",
   exampleSrc:"A: I would like a full-bodied red.\nB: I recommend the Barolo.",
   funFact:"From 'corpo' (body). Wine vocabulary in Italian mirrors the human body: a wine can be 'corposo' (full-bodied), 'leggero' (light), 'morbido' (soft), or 'nervoso' (nervous/edgy). Barolo from Piedmont is called the 'king of wines.'"},

  {type:"teach", trg:"abbinare", src:"to pair (food and wine)", pos:"verb", gender:null,
   note:"Regular -are verb. 'Abbinare il vino al piatto' = to pair wine with the dish.\nFrom 'binario' (pair).",
   example:"A: Quale vino si abbina al pesce?\nB: Di solito un bianco leggero.",
   exampleSrc:"A: Which wine pairs with fish?\nB: Usually a light white.",
   funFact:"Wine pairing is taken seriously in Italy. The basic rule: white with fish and light dishes, red with meat and rich sauces. But regions break their own rules. In Piedmont, some pair Barolo with fish. Locals know best."},

  // Quiz steps
  {type:"mc", q:"What does 'secco' mean when describing wine?",
   opts:["Dry","Sweet","Sparkling","Red"],
   ans:"Dry",
   hint:"From Latin 'siccus' (dry). This describes wine with low residual sugar. Opposite of 'dolce.'"},

  {type:"fb", s:"Un bicchiere di vino {1}, per favore.",
   a:["rosso"],
   opts:["rosso","bianco","rosato","secco"],
   hint:"You want a glass of the color of wine that includes Chianti, Barolo, and Amarone.",
   sSrc:"A glass of {1} wine, please."},

  {type:"match", pairs:[
    {trg:"il vino rosso", src:"red wine"},
    {trg:"il vino bianco", src:"white wine"},
    {trg:"secco", src:"dry"},
    {trg:"frizzante", src:"sparkling"},
    {trg:"corposo", src:"full-bodied"}
  ]},

  {type:"mc", q:"What is 'il vino della casa'?",
   opts:["The house wine","The expensive wine","The imported wine","The dessert wine"],
   ans:"The house wine",
   hint:"This is the restaurant's own selection, served in a carafe. Usually the best value on the list."},

  {type:"fb", s:"Posso vedere la {1} dei vini?",
   a:["lista"],
   opts:["lista","bottiglia","caraffa","carta"],
   hint:"You want to see the document that shows all available wines with prices.",
   sSrc:"May I see the wine {1}?"},

  {type:"mc", q:"What is the difference between 'frizzante' and 'spumante'?",
   opts:["Frizzante is lightly sparkling, spumante is fully sparkling","They are the same","Frizzante is still, spumante is sparkling","Frizzante is sweet, spumante is dry"],
   ans:"Frizzante is lightly sparkling, spumante is fully sparkling",
   hint:"One has gentle bubbles, the other has strong bubbles like champagne. Prosecco can be either."},

  {type:"fb", s:"Facciamo un {1}! Cin cin!",
   a:["brindisi"],
   opts:["brindisi","vino","bicchiere","dolce"],
   hint:"You are raising your glass to celebrate. This is the Italian word for a celebratory toast.",
   sSrc:"Let's make a {1}! Cheers!"},

  {type:"mc", q:"What verb means 'to pair' food and wine?",
   opts:["Abbinare","Ordinare","Consigliare","Assaggiare"],
   ans:"Abbinare",
   hint:"From 'binario' (pair). This verb describes matching the right wine with the right dish."},

  {type:"fb", s:"Vorrei un rosso {1}. Mi consiglia il Barolo.",
   a:["corposo"],
   opts:["corposo","leggero","dolce","frizzante"],
   hint:"You want a wine with a rich, heavy body. From 'corpo' (body). Barolo is famous for this quality.",
   sSrc:"I would like a {1} red. I recommend the Barolo."}
]};
export default LESSON_4;
