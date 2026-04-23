// Unit 04 Batch 2. Lesson 2: Paying, Tasting & Expressing Preferences
const BATCH2_U04_L2 = {
  id:"itv2_u04l_b2_2", title:"Pagare e scegliere", icon:"\ud83d\udcb6", xp:15, board:true,
  steps:[
    {type:"intro", title:"Pagare e scegliere",
     desc:"Learn how to pay, express taste preferences, and handle the final part of any food transaction in Italian.",
     goals:["Pay at a bar or restaurant","Express food preferences and tastes","Handle common payment and preference interactions"]},

    {type:"teach", trg:"pagare", src:"to pay", pos:"verb", gender:null,
     note:"Regular -are verb. 'Pago io!' = I am paying! (my treat).\nFrom Latin 'pacare' (to pacify, to satisfy).",
     example:"A: Quanto pago?\nB: Tre euro e cinquanta.",
     exampleSrc:"A: How much do I pay?\nB: Three euros and fifty cents.",
     funFact:"'Pago io!' (I am paying!) is a common Italian expression at bars and restaurants. Italians often compete to pay the bill. Grabbing the check is a matter of honor and generosity."},

    {type:"teach", trg:"lo scontrino", src:"the receipt", pos:"noun", gender:"m",
     note:"Masculine. Uses 'lo' because of s+consonant (sc).\nBy law, you must keep the receipt when leaving a shop.",
     example:"A: Ecco lo scontrino.\nB: Grazie!",
     exampleSrc:"A: Here is the receipt.\nB: Thanks!",
     funFact:"Italian law requires businesses to issue a receipt and customers to keep it. Tax police can stop you outside a shop and fine you if you do not have your scontrino. This combats tax evasion, a historic Italian issue."},

    {type:"teach", trg:"i soldi", src:"the money", pos:"noun", gender:"m",
     note:"Masculine plural. Always plural: i soldi (never 'il soldo').\nFrom Latin 'solidus' (a gold coin).",
     example:"A: Hai i soldi?\nB: Si, ho venti euro.",
     exampleSrc:"A: Do you have money?\nB: Yes, I have twenty euros.",
     funFact:"From the Roman 'solidus' coin, which also gave English 'soldier' (someone paid in soldi). 'Soldo' in singular exists but sounds old-fashioned. Italians always use the plural: 'i soldi.'"},

    {type:"teach", trg:"il resto", src:"the change (money)", pos:"noun", gender:"m",
     note:"Masculine. 'Tenga il resto' = Keep the change.\nFrom 'restare' (to remain, to stay).",
     example:"A: Ecco il resto: due euro.\nB: Grazie! Tenga il resto.",
     exampleSrc:"A: Here is the change: two euros.\nB: Thanks! Keep the change.",
     funFact:"'Tenga il resto' (keep the change) is a casual way to tip in Italy. The word 'resto' also means 'remainder' or 'the rest' in general: 'il resto della giornata' (the rest of the day). Same word, different context."},

    {type:"teach", trg:"la carta", src:"the card (credit/debit)", pos:"noun", gender:"f",
     note:"Feminine. 'Pago con la carta' = I pay by card.\nAlso means 'paper' and 'menu' (la carta del ristorante).",
     example:"A: Posso pagare con la carta?\nB: Si, certo! Anche contactless.",
     exampleSrc:"A: Can I pay by card?\nB: Yes, of course! Contactless too.",
     funFact:"Italy was traditionally a cash culture, but card payments have spread rapidly. Since 2022, all businesses must accept card payments by law. However, small bars and market stalls may still prefer 'contanti' (cash)."},

    {type:"teach", trg:"contanti", src:"cash", pos:"noun", gender:"m",
     note:"Masculine plural. 'Pagare in contanti' = to pay in cash.\nFrom 'contare' (to count).",
     example:"A: Pago in contanti.\nB: Va bene. Sono cinque euro.",
     exampleSrc:"A: I am paying in cash.\nB: All right. That is five euros.",
     funFact:"'Contanti' literally means 'counting' money. Cash that you count out by hand. Italy has been gradually moving away from cash, but many Italians still prefer it for small purchases."},

    {type:"teach", trg:"preferire", src:"to prefer", pos:"verb", gender:null,
     note:"Irregular -ire verb with -isc- infix: preferisco, preferisci, preferisce.\nFrom Latin 'praeferre' (to put before).",
     example:"A: Preferisci il caffè o il te?\nB: Preferisco il caffè.",
     exampleSrc:"A: Do you prefer coffee or tea?\nB: I prefer coffee.",
     funFact:"'Preferire' belongs to a group of -ire verbs that add -isc- in singular and third person plural forms. Other verbs in this group: capire (to understand), finire (to finish), pulire (to clean). A common pattern."},

    {type:"teach", trg:"preferito", src:"favorite", pos:"adj", gender:"m",
     note:"Masculine: preferito. Feminine: preferita.\nPast participle of preferire, used as an adjective.",
     example:"A: Qual e il tuo gelato preferito?\nB: Il cioccolato, senz'altro!",
     exampleSrc:"A: What is your favorite ice cream?\nB: Chocolate, without a doubt!",
     funFact:"'Qual e il tuo... preferito?' (What is your favorite...?) is a staple Italian conversation starter. Italians love discussing favorites: film preferito, libro preferito, piatto preferito. Opinions are shared passionately."},

    {type:"teach", trg:"delizioso", src:"delicious", pos:"adj", gender:"m",
     note:"Masculine: delizioso. Feminine: deliziosa.\nFrom Latin 'deliciosus' (giving pleasure).",
     example:"A: Come e la pizza?\nB: Deliziosa! La migliore di Roma!",
     exampleSrc:"A: How is the pizza?\nB: Delicious! The best in Rome!",
     funFact:"From Latin 'deliciae' (pleasures, delights). Italians have many words for praising food: buono (good), ottimo (excellent), squisito (exquisite), delizioso (delicious). Each level of enthusiasm is distinct."},

    {type:"teach", trg:"dolce", src:"sweet (taste)", pos:"adj", gender:null,
     note:"Same form for masculine and feminine (-e ending).\n'Troppo dolce' = too sweet. 'Il dolce' = the dessert.",
     example:"A: Il caffè e dolce?\nB: No, e amaro. Senza zucchero.",
     exampleSrc:"A: Is the coffee sweet?\nB: No, it is bitter. Without sugar.",
     funFact:"'La dolce vita' (the sweet life) became world-famous from Fellini's 1960 film. As an adjective, dolce describes taste (sweet). As a noun, it means dessert. 'Acqua dolce' means fresh water (not salty)."},

    {type:"teach", trg:"amaro", src:"bitter", pos:"adj", gender:"m",
     note:"Masculine: amaro. Feminine: amara.\nAlso a noun: 'l'amaro' is a bitter digestive liqueur.",
     example:"A: Il caffè e amaro.\nB: Vuoi lo zucchero?",
     exampleSrc:"A: The coffee is bitter.\nB: Do you want sugar?",
     funFact:"An 'amaro' is also a category of Italian digestive liqueurs drunk after meals. Famous examples: Fernet-Branca, Averna, Montenegro. They are intentionally bitter, believed to aid digestion. Bitter taste, positive purpose."},

    {type:"teach", trg:"salato", src:"salty / savory", pos:"adj", gender:"m",
     note:"Masculine: salato. Feminine: salata.\nFrom 'sale' (salt). Also means 'expensive' in slang.",
     example:"A: Preferisci dolce o salato?\nB: Salato! Adoro il formaggio.",
     exampleSrc:"A: Do you prefer sweet or savory?\nB: Savory! I love cheese.",
     funFact:"'Dolce o salato?' (sweet or savory?) is a fundamental Italian food question. Italian snacks divide into these two categories. In slang, 'salato' also means expensive: 'Il conto era salato!' (The bill was steep!)."},

    {type:"teach", trg:"troppo", src:"too much / too", pos:"adv", gender:null,
     note:"As adverb: 'troppo caldo' (too hot). As adjective: 'troppa gente' (too many people).\nFrom Germanic 'throp' (village, crowd).",
     example:"A: Il caffè e troppo caldo.\nB: Aspetta un momento.",
     exampleSrc:"A: The coffee is too hot.\nB: Wait a moment.",
     funFact:"'Troppo' entered Italian from Germanic languages. It changes form as an adjective: troppo (m.sg.), troppa (f.sg.), troppi (m.pl.), troppe (f.pl.). As an adverb before adjectives, it stays 'troppo.'"},

    {type:"teach", trg:"abbastanza", src:"enough / quite", pos:"adv", gender:null,
     note:"From 'a bastanza' (to sufficiency). Means both 'enough' and 'fairly/quite.'\n'Abbastanza buono' = quite good.",
     example:"A: Hai mangiato abbastanza?\nB: Si, ho mangiato abbastanza. Grazie!",
     exampleSrc:"A: Have you eaten enough?\nB: Yes, I have eaten enough. Thanks!",
     funFact:"'Abbastanza' serves double duty: 'Ho mangiato abbastanza' (I have eaten enough) and 'E abbastanza buono' (it is quite good). The first meaning is about quantity, the second about degree. Context clarifies."},

    // Quiz steps
    {type:"mc", q:"Cosa significa 'Pago io!'?",
     opts:["I am paying (my treat)!","I am leaving!","I am ordering!","I am hungry!"],
     ans:"I am paying (my treat)!",
     hint:"A common Italian expression of generosity. Competing to grab the bill is a social tradition."},

    {type:"fb", s:"Posso {1} con la carta?",
     a:["pagare"],
     opts:["pagare","comprare","mangiare","bere"],
     hint:"You want to use your credit or debit card. This verb means 'to pay.'",
     sSrc:"Can I {1} by card?"},

    {type:"mc", q:"Why must you keep the receipt in Italy?",
     opts:["Restaurants require it","Tax police can fine you without it","It is a tradition","For returns only"],
     ans:"Tax police can fine you without it",
     hint:"Italian law combats t... evasion by requiring both shops and customers to handle the 'scontrino' properly."},

    {type:"fb", s:"Qual e il tuo gelato {1}?",
     a:["preferito"],
     opts:["preferito","delizioso","dolce","amaro"],
     hint:"This adjective means 'favorite.' It asks which flavor you like most of all.",
     sSrc:"What is your {1} ice cream?"},

    {type:"match", pairs:[
      {trg:"pagare", src:"to pay"},
      {trg:"lo scontrino", src:"the receipt"},
      {trg:"i soldi", src:"money"},
      {trg:"il resto", src:"the change"},
      {trg:"contanti", src:"cash"}
    ,{trg:"abbastanza",src:"enough / quite"}]},

    {type:"mc", q:"What does 'dolce o salato?' ask?",
     opts:["Big or small?","Here or there?","Sweet or savory?","Hot or cold?"],
     ans:"Sweet or savory?",
     hint:"The fundamental Italian snack question. It divides the food world into two basic taste categories."},

    {type:"fb", s:"Il caffè e {1} caldo. Aspetta un momento.",
     a:["troppo"],
     opts:["troppo","molto","abbastanza","poco"],
     hint:"The coffee exceeds the acceptable temperature. This word means 'too much' or 'excessively.'",
     sSrc:"The coffee is {1} hot. Wait a moment."},

    {type:"mc", q:"What is an 'amaro' as a noun?",
     opts:["A type of coffee","A dessert","A salad","A bitter digestive liqueur"],
     ans:"A bitter digestive liqueur",
     hint:"Drunk after meals to aid digestion. Famous brands include Fernet-Branca and Averna. Intentionally b...."}
  ,{type:"match",pairs:[{trg:"la carta",src:"the card (credit/debit)"},{trg:"preferire",src:"to prefer"},{trg:"delizioso",src:"delicious"},{trg:"dolce",src:"sweet (taste)"},{trg:"amaro",src:"bitter"},{trg:"salato",src:"salty / savory"}]}]
};
export default BATCH2_U04_L2;
