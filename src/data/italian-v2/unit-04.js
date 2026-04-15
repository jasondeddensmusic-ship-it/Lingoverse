// Italian V2 Unit 04 — Al bar (At the Bar/Cafe) (A1.1)
// CILS/CELI A1 aligned. Food, drink, ordering, articles.

const UNIT_04 = {
  n:4, lang:"it", srcLang:"en", track:"v2",
  title:"Al bar", sub:"At the Bar / Cafe",
  icon:"\u2615", level:"A1.1", color:"#7B5EE8",
  lessons:[
    {id:"itv2_u4l1", title:"Cosa prendi?", icon:"\u2615", xp:15, board:true, steps:[
      {type:"intro", title:"Cosa prendi?",
       desc:"Learn the essential food and drink vocabulary for ordering at an Italian bar or cafe.",
       goals:["Name common Italian drinks","Name popular food items","Understand articles with food words"]},

      {type:"teach", trg:"il caffe", src:"the coffee / espresso", pos:"noun", gender:"m",
       note:"Masculine. In Italy, 'caffe' always means espresso.\nIf you want filter coffee, ask for 'caffe americano.'",
       example:"A: Cosa prendi?\nB: Un caffe, per favore.",
       exampleSrc:"A: What are you having?\nB: A coffee, please.",
       funFact:"When you order 'un caffe' in Italy, you get a single shot of espresso. The Italian coffee ritual is fast: stand at the bar, drink it in two sips, and go. Sitting down often costs more."},

      {type:"teach", trg:"il cappuccino", src:"the cappuccino", pos:"noun", gender:"m",
       note:"Masculine. Named after the Capuchin monks' brown hoods.\nItalians only drink it in the morning.",
       example:"A: Un cappuccino, per favore.\nB: Subito! Con zucchero?",
       exampleSrc:"A: A cappuccino, please.\nB: Right away! With sugar?",
       funFact:"Ordering a cappuccino after 11 AM in Italy marks you as a tourist. Italians believe milk and coffee after a meal disrupts digestion. This unwritten rule is taken very seriously."},

      {type:"teach", trg:"il cornetto", src:"the croissant", pos:"noun", gender:"m",
       note:"Masculine. The Italian version of a croissant.\nLiterally means 'little horn.' Often filled with cream or jam.",
       example:"A: Vorrei un cornetto.\nB: Vuoto o ripieno?",
       exampleSrc:"A: I would like a croissant.\nB: Empty or filled?",
       funFact:"In northern Italy, they say 'brioche' (from French). In central and southern Italy, it is 'cornetto.' Same pastry, different names. The classic Italian breakfast is cornetto e cappuccino."},

      {type:"teach", trg:"l'acqua", src:"the water", pos:"noun", gender:"f",
       note:"Feminine. Uses l' because it starts with a vowel.\nFull form: la acqua, contracted to l'acqua.",
       example:"A: Acqua naturale o frizzante?\nB: Naturale, grazie.",
       exampleSrc:"A: Still or sparkling water?\nB: Still, thank you.",
       funFact:"In Italian restaurants, you must specify 'naturale' (still) or 'frizzante' (sparkling). Tap water ('acqua del rubinetto') exists but is rarely offered. Most Italians prefer bottled."},

      {type:"teach", trg:"la birra", src:"the beer", pos:"noun", gender:"f",
       note:"Feminine. Plural: le birre.\nFrom Germanic languages via Latin 'biber' (drink).",
       example:"A: Una birra, per favore.\nB: Piccola o grande?",
       exampleSrc:"A: A beer, please.\nB: Small or large?",
       funFact:"Italy is not traditionally a beer country, but craft beer ('birra artigianale') has exploded since 2010. Italy now has over 800 microbreweries, many in regions famous for wine."},

      {type:"teach", trg:"il vino", src:"the wine", pos:"noun", gender:"m",
       note:"Masculine. Vino rosso (red), vino bianco (white).\nFrom Latin 'vinum.'",
       example:"A: Un bicchiere di vino, per favore.\nB: Rosso o bianco?",
       exampleSrc:"A: A glass of wine, please.\nB: Red or white?",
       funFact:"Italy is the world's largest wine producer, competing with France every year. Every one of Italy's 20 regions produces wine. The word 'vino' has barely changed from its Latin ancestor 'vinum.'"},

      {type:"teach", trg:"il panino", src:"the sandwich", pos:"noun", gender:"m",
       note:"Masculine. Plural: i panini (NOT 'paninis').\nLiterally means 'small bread' from 'pane' (bread).",
       example:"A: Vorrei un panino con prosciutto.\nB: Con mozzarella?",
       exampleSrc:"A: I would like a ham sandwich.\nB: With mozzarella?",
       funFact:"'Panini' is already plural in Italian, so 'paninis' in English is a double plural. The diminutive ending -ino means 'little,' so panino literally means 'little bread roll.'"},

      {type:"teach", trg:"la pizza", src:"the pizza", pos:"noun", gender:"f",
       note:"Feminine. The most internationally famous Italian word.\nPlural: le pizze.",
       example:"A: Che pizza vuoi?\nB: Una pizza margherita, per favore!",
       exampleSrc:"A: What pizza do you want?\nB: A margherita pizza, please!",
       funFact:"Pizza margherita was created in 1889 in Naples, reportedly to honor Queen Margherita. Its red (tomato), white (mozzarella), and green (basil) represent the Italian flag colors."},

      {type:"teach", trg:"il gelato", src:"the ice cream", pos:"noun", gender:"m",
       note:"Masculine. From 'gelare' (to freeze).\nItalian gelato has less fat and air than ice cream.",
       example:"A: Che gusto vuoi?\nB: Cioccolato e fragola, per favore.",
       exampleSrc:"A: What flavor do you want?\nB: Chocolate and strawberry, please.",
       funFact:"Gelato has 5-8% milkfat compared to 14-25% in American ice cream. It is churned slower, incorporating less air, making it denser and more flavorful. Florence claims to have invented it in the 1500s."},

      // Quiz steps
      {type:"mc", q:"What is 'il caffe' in Italy?",
       opts:["An espresso","A cappuccino","A latte","Filter coffee"],
       ans:"An espresso",
       hint:"In Italy, this word always refers to a single shot, served at the bar. Not the large cups common elsewhere."},

      {type:"fb", s:"Un {1}, per favore.",
       a:["cappuccino"],
       opts:["cappuccino","caffe","vino","gelato"],
       hint:"This milky morning coffee is named after monks whose hoods matched its brown color.",
       sSrc:"A {1}, please."},

      {type:"match", pairs:[
        {trg:"il caffe", src:"the coffee"},
        {trg:"la birra", src:"the beer"},
        {trg:"il vino", src:"the wine"},
        {trg:"l'acqua", src:"the water"},
        {trg:"il gelato", src:"the ice cream"}
      ]},

      {type:"mc", q:"What is the correct plural of 'panino'?",
       opts:["Panini","Paninos","Paninis","Panine"],
       ans:"Panini",
       hint:"Italian masculine nouns ending in -o form their plural by changing -o to -i. No English -s needed."},

      {type:"fb", s:"Vorrei una {1} margherita.",
       a:["pizza"],
       opts:["pizza","birra","acqua","cornetto"],
       hint:"The most famous Italian food. The margherita version was created in 1889 in Naples.",
       sSrc:"I would like a {1} margherita."},

      {type:"mc", q:"Which of these is feminine?",
       opts:["La birra","Il vino","Il panino","Il gelato"],
       ans:"La birra",
       hint:"Look at the article. The feminine singular definite article is 'la,' while masculine uses 'il.'"},

      {type:"fb", s:"Acqua naturale o {1}?",
       a:["frizzante"],
       opts:["frizzante","grande","piccola","rossa"],
       hint:"The two options for water in Italy: still (naturale) or this sparkling variety.",
       sSrc:"Still or {1} water?"},

      {type:"mc", q:"Why does 'acqua' use 'l'' instead of 'la'?",
       opts:["It starts with a vowel","It is masculine","It is irregular","It is plural"],
       ans:"It starts with a vowel",
       hint:"When a feminine noun begins with a vowel, the article 'la' contracts. The vowel of 'la' drops."}
    ]},

    {id:"itv2_u4l2", title:"Vorrei ordinare", icon:"\ud83e\uddd1\u200d\ud83c\udf73", xp:15, board:true, steps:[
      {type:"intro", title:"Vorrei ordinare",
       desc:"Learn how to order food and drinks, ask for the bill, and use polite expressions at a bar or restaurant.",
       goals:["Order food and drinks politely","Ask for the bill","Use articles correctly with food items"]},

      {type:"teach", trg:"vorrei", src:"I would like", pos:"verb", gender:null,
       note:"Conditional of 'volere' (to want). Very polite way to order.\nMore polite than 'voglio' (I want).",
       example:"A: Vorrei un caffe e un cornetto.\nB: Subito, signore!",
       exampleSrc:"A: I would like a coffee and a croissant.\nB: Right away, sir!",
       funFact:"'Vorrei' is the conditional mood, which softens requests. Saying 'voglio' (I want) to a barista is not rude but sounds more blunt. Most Italians use 'vorrei' when ordering."},

      {type:"teach", trg:"posso avere", src:"can I have", pos:"verb", gender:null,
       note:"Another polite ordering phrase. 'Posso' = I can (from 'potere').\nSlightly more casual than 'vorrei.'",
       example:"A: Posso avere un bicchiere d'acqua?\nB: Certo! Naturale?",
       exampleSrc:"A: Can I have a glass of water?\nB: Of course! Still?",
       funFact:"'Potere' (to be able to) is one of three essential Italian modal verbs, alongside 'volere' (to want) and 'dovere' (to have to). These three verbs power most everyday conversations."},

      {type:"teach", trg:"il conto", src:"the bill / check", pos:"noun", gender:"m",
       note:"Masculine. 'Il conto, per favore' is how you ask for the bill.\nFrom Latin 'computus' (calculation).",
       example:"A: Il conto, per favore.\nB: Subito. Sono quindici euro.",
       exampleSrc:"A: The bill, please.\nB: Right away. That's fifteen euros.",
       funFact:"In Italy, the waiter will NEVER bring the bill without being asked. It is considered rude to rush diners. You must always request 'il conto.' Tipping is not expected but rounding up is appreciated."},

      {type:"teach", trg:"per favore", src:"please", pos:"adv", gender:null,
       note:"Literally: 'for (a) favor.' The universal polite request word.\nAlternatives: per cortesia, per piacere.",
       example:"A: Un caffe, per favore.\nB: Con zucchero?\nA: No, grazie.",
       exampleSrc:"A: A coffee, please.\nB: With sugar?\nA: No, thanks.",
       funFact:"Italians have three ways to say please: 'per favore' (for a favor), 'per piacere' (for pleasure), and 'per cortesia' (by courtesy). All are correct; 'per favore' is most common."},

      {type:"tip", title:"Italian articles with food",
       text:"Definite articles ('the') in Italian depend on the noun's gender and starting sound.\n\nMasculine:\n- il: most consonants (il caffe, il vino, il panino)\n- lo: before z, s+consonant, gn, ps (lo zucchero)\n- l': before vowels (l'olio)\n\nFeminine:\n- la: most consonants (la pizza, la birra)\n- l': before vowels (l'acqua, l'arancia)\n\nPlural:\n- i (m): i panini, i caffe\n- gli (m): gli spaghetti, gli gnocchi\n- le (f): le pizze, le birre",
       deepDive:"The article system is one of the first hurdles for learners. The good news: once you know a noun's gender (which you learn with the noun), the article choice follows clear rules based on the first sound. Memorize the noun WITH its article: not just 'caffe' but 'il caffe.'"},

      {type:"teach", trg:"il te", src:"the tea", pos:"noun", gender:"m",
       note:"Masculine. Borrowed from Chinese via Dutch traders.\nAccent on e to distinguish from 'te' (you).",
       example:"A: Vorrei un te, per favore.\nB: Caldo o freddo?",
       exampleSrc:"A: I would like a tea, please.\nB: Hot or cold?",
       funFact:"Tea is not traditionally Italian. Coffee culture dominates, but tea consumption is growing. 'Te freddo' (iced tea) is popular in summer, often peach-flavored (alla pesca)."},

      {type:"teach", trg:"lo zucchero", src:"the sugar", pos:"noun", gender:"m",
       note:"Masculine. Uses 'lo' because it starts with z.\nFrom Arabic 'sukkar' via medieval trade routes.",
       example:"A: Caffe con zucchero?\nB: No, senza zucchero, grazie.",
       exampleSrc:"A: Coffee with sugar?\nB: No, without sugar, thanks.",
       funFact:"The word traveled from Sanskrit to Arabic ('sukkar') to Italian ('zucchero') to English ('sugar'). Each language reshaped it. Italy was a key node in the medieval sugar trade."},

      {type:"teach", trg:"il latte", src:"the milk", pos:"noun", gender:"m",
       note:"Masculine. 'Latte' in Italy means just plain milk.\nA 'latte' as a coffee drink does not exist in Italy.",
       example:"A: Un latte caldo, per favore.\nB: Con cacao?",
       exampleSrc:"A: A warm milk, please.\nB: With cocoa?",
       funFact:"If you order 'un latte' in an Italian bar, you will receive a glass of plain milk. The coffee drink Americans call a 'latte' is actually a 'caffe latte' (coffee with milk) in Italy."},

      {type:"teach", trg:"il succo", src:"the juice", pos:"noun", gender:"m",
       note:"Masculine. 'Succo d'arancia' = orange juice, 'succo di mela' = apple juice.\nFrom Latin 'sucus' (sap, juice).",
       example:"A: Vorrei un succo d'arancia.\nB: Fresco o confezionato?",
       exampleSrc:"A: I would like an orange juice.\nB: Fresh or packaged?",
       funFact:"The preposition changes by vowel: 'succo d'arancia' (of orange, contracted because arancia starts with a vowel) but 'succo di mela' (of apple, no contraction needed)."},

      // Quiz steps
      {type:"mc", q:"What does 'vorrei' mean?",
       opts:["I would like","I want","I need","I can"],
       ans:"I would like",
       hint:"This is the conditional form of 'volere.' It softens the request compared to the direct 'I want.'"},

      {type:"fb", s:"{1}, per favore.",
       a:["Il conto"],
       opts:["Il conto","Il caffe","La pizza","Il panino"],
       hint:"You have finished your meal and want to pay. Ask the waiter for this document.",
       sSrc:"{1}, please."},

      {type:"mc", q:"Which article goes with 'zucchero'?",
       opts:["Lo","Il","La","L'"],
       ans:"Lo",
       hint:"Words starting with z take a special masculine article. Not the regular 'il.'"},

      {type:"fb", s:"Vorrei un {1} d'arancia.",
       a:["succo"],
       opts:["succo","caffe","latte","te"],
       hint:"You want a fruit drink. This word means the liquid squeezed from fruit.",
       sSrc:"I would like an orange {1}."},

      {type:"match", pairs:[
        {trg:"vorrei", src:"I would like"},
        {trg:"il conto", src:"the bill"},
        {trg:"lo zucchero", src:"the sugar"},
        {trg:"il latte", src:"the milk"},
        {trg:"il te", src:"the tea"}
      ]},

      {type:"mc", q:"What happens if you order 'un latte' in Italy?",
       opts:["You get a glass of plain milk","You get a coffee latte","You get a cappuccino","The waiter is confused"],
       ans:"You get a glass of plain milk",
       hint:"In Italian, this word simply means the dairy drink. The coffee version needs 'caffe' added to it."},

      {type:"fb", s:"Posso {1} un bicchiere d'acqua?",
       a:["avere"],
       opts:["avere","bere","prendere","fare"],
       hint:"This verb means 'to have.' Combined with 'posso' it forms a polite request: 'can I have.'",
       sSrc:"Can I {1} a glass of water?"},

      {type:"mc", q:"In Italy, when does the waiter bring the bill?",
       opts:["Only when you ask for it","After the main course","Automatically after dessert","At a set time"],
       ans:"Only when you ask for it",
       hint:"Italian dining culture considers it rude to rush customers. You must take the initiative."}
    ]}
  ]
};
export default UNIT_04;
