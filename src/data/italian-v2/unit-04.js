// Italian V2 Unit 04. Al bar (At the Bar/Cafe) (A1.1)
import BATCH8_L1 from './_batch8_u04_L01.js';
import BATCH7_L1 from './_batch7_u04_L01.js';
import BATCH6_L1 from './_batch6_u04_L01.js';
import BATCH4_L02 from './_batch4_u04_L02.js';
import BATCH4_L01 from './_batch4_u04_L01.js';
import BATCH2_L02 from './_batch2_u04_L02.js';
import BATCH2_L01 from './_batch2_u04_L01.js';
// CILS/CELI A1 aligned. Food, drink, ordering, articles.
import EXP_04_L1 from './_temp_u04_expand_L01.js';import EXP_04_L2 from './_temp_u04_expand_L02.js';import EXP_04_L3 from './_temp_u04_expand_L03.js';

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
{type:"match",pairs:[{trg:"il cappuccino",src:"the cappuccino"},{trg:"il cornetto",src:"the croissant"},{trg:"l'acqua",src:"the water"},{trg:"la birra",src:"the beer"}]},

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

      {type:"tip", title:"Definite Articles: il, lo, la, l', i, gli, le",
       text:"Italian has 7 definite articles. The right form depends on gender, number, and the first sound of the word.\n\nMasculine singular:\nil — before most consonants: il caffe, il vino\nlo — before s+consonant, z, gn, ps: lo zucchero\nl' — before vowels: l'amico\n\nFeminine singular:\nla — before consonants: la pizza, la birra\nl' — before vowels: l'acqua, l'amica\n\nPlural:\ni — masculine (most): i panini, i vini\ngli — masculine (vowel or special clusters): gli amici\nle — all feminine: le pizze, le birre\n\nThe article is part of the word. Learn nouns with their article.",
       icon:"💡",
       deepDive:{title:"Why so many articles?",
        text:"Italian articles encode gender AND phonology. The phonological rules (il vs. lo, la vs. l') exist for smooth pronunciation. 'Il zucchero' would clash because two consonants in a row is awkward. 'Lo zucchero' flows. Same with 'la acqua' vs. 'l'acqua.' Italian always chooses the path of least resistance phonologically. The best strategy: never learn a noun alone. Always learn it as 'il caffe,' 'la pizza,' 'lo zucchero.' The article locks in gender."}},

      {type:"mc", q:"What is the correct plural of 'panino'?",
       opts:["Paninos","Panini","Paninis","Panine"],
       ans:"Panini",
       hint:"Italian masculine nouns ending in -o form their plural by changing -o to -i. No English -s needed."},

      {type:"fb", s:"Vorrei una {1} margherita.",
       a:["pizza"],
       opts:["pizza","birra","acqua","cornetto"],
       hint:"The most famous Italian food. The margherita version was created in 1889 in Naples.",
       sSrc:"I would like a {1} margherita."},

      {type:"mc", q:"Which of these is feminine?",
       opts:["Il panino","Il vino","La birra","Il gelato"],
       ans:"La birra",
       hint:"Look at the article. The feminine singular definite article is 'la,' while masculine uses 'il.'"},

      {type:"fb", s:"Acqua naturale o {1}?",
       a:["frizzante"],
       opts:["frizzante","grande","piccola","rossa"],
       hint:"The two options for water in Italy: still (naturale) or this sparkling variety.",
       sSrc:"Still or {1} water?"},

      {type:"mc", q:"Why does 'acqua' use 'l'' instead of 'la'?",
       opts:["It is plural","It is masculine","It is irregular","It starts with a vowel"],
       ans:"It starts with a vowel",
       hint:"When a feminine noun begins with a v..., the article 'la' contracts. The v... of 'la' drops."}
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
       opts:["I would like","I want (direct)","I need (necessary)","I can (ability)"],
       ans:"I would like",
       hint:"This is the conditional form of 'volere.' It softens the request compared to the direct 'I want.'"},

      {type:"fb", s:"{1}, per favore.",
       a:["Il conto"],
       opts:["Il conto","Il caffe","La pizza","Il panino"],
       hint:"You have finished your meal and want to pay. Ask the waiter for this document.",
       sSrc:"{1}, please."},

      {type:"mc", q:"Which article goes with 'zucchero'?",
       opts:["Il","Lo","La","L'"],
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
       opts:["You get a cappuccino instead","You get the coffee-milk blend you expected","You get a glass of plain milk","The waiter does not understand you"],
       ans:"You get a glass of plain milk",
       hint:"In Italian, this word simply means the dairy drink. The coffee version needs 'caffe' added to it."},

      {type:"fb", s:"Posso {1} un bicchiere d'acqua?",
       a:["avere"],
       opts:["avere","bere","prendere","fare"],
       hint:"This verb means 'to have.' Combined with 'posso' it forms a polite request: 'can I have.'",
       sSrc:"Can I {1} a glass of water?"},

      {type:"mc", q:"In Italy, when does the waiter bring the bill?",
       opts:["At a set time","After the main course","Automatically after dessert","Only when you ask for it"],
       ans:"Only when you ask for it",
       hint:"Italian dining culture considers it rude to rush customers. You must take the initiative."}
    ,{type:"match",pairs:[{trg:"per favore",src:"please"}]}]},
    EXP_04_L1, EXP_04_L2, EXP_04_L3,

    {id:"itv2_u4l_jobs_animals_sports", title:"Professioni, animali e sport", icon:"\u26bd", xp:15, board:true, steps:[
      {type:"intro", title:"Professioni, animali e sport",
       desc:"Learn Italian words for professions (female forms), common animals, and sports. These are essential A1/A2 vocabulary for everyday conversations.",
       goals:["Name female profession forms in Italian","Identify common Italian animals","Talk about sports and hobbies"]},

      {type:"teach", trg:"la professoressa", src:"the female teacher / professor", pos:"noun", gender:"f",
       note:"Feminine form of 'il professore.' Used for female teachers at school or university.\nIn Italian, professions change ending for gender.",
       example:"A: Chi e la tua professoressa?\nB: La mia professoressa si chiama Maria. E brava.",
       exampleSrc:"A: Who is your female teacher?\nB: My female teacher is called Maria. She is good.",
       funFact:"Italian is one of the most gender-consistent languages in Europe. Every profession has both a masculine and feminine form. The -essa ending (from Latin -issa) marks feminine roles: professoressa, dottoressa, studentessa."},

      {type:"teach", trg:"la cuoca", src:"the female cook / chef", pos:"noun", gender:"f",
       note:"Feminine form of 'il cuoco.' Used for a female cook or chef.\nFrom Latin 'coqua' (female cook).",
       example:"A: La cuoca e brava?\nB: Si, la cuoca e bravissima! Mangiamo bene qui.",
       exampleSrc:"A: Is the female cook good?\nB: Yes, the female cook is excellent! We eat well here.",
       funFact:"Italy has some of the world's most celebrated female chefs. The tradition of the 'nonna' (grandmother) as the family cook is deeply cultural. Many Italian restaurant owners are proud of their 'cuoca di casa' (home cook)."},

      {type:"teach", trg:"la cameriera", src:"the waitress", pos:"noun", gender:"f",
       note:"Feminine form of 'il cameriere.' A female room or table attendant.\nFrom 'camera' (room): a room attendant.",
       example:"A: Scusa, cameriera!\nB: Si, dica! Cosa prende?",
       exampleSrc:"A: Excuse me, waitress!\nB: Yes, tell me! What will you have?",
       funFact:"The word 'cameriera' can also mean 'maid' or 'chambermaid' in a hotel. Context makes the meaning clear. In a restaurant, she waits tables; in a hotel, she cleans rooms."},

      {type:"teach", trg:"la commessa", src:"the female shop assistant", pos:"noun", gender:"f",
       note:"Feminine form of 'il commesso.' A female shop assistant or saleswoman.\nFrom Latin 'committere' (to entrust).",
       example:"A: La commessa e gentile.\nB: Si, mi ha aiutato molto.",
       exampleSrc:"A: The shop assistant is kind.\nB: Yes, she helped me a lot.",
       funFact:"Italian shops, especially boutiques, are famous for their attentive 'commesse.' Unlike self-service supermarkets, traditional Italian shops often have staff who guide customers personally. This personal service is a point of cultural pride."},

      {type:"teach", trg:"il poliziotto", src:"the police officer", pos:"noun", gender:"m",
       note:"Masculine. Feminine: la poliziotta.\nFrom 'polizia' (police), from Greek 'polis' (city-state).",
       example:"A: C'e un poliziotto li.\nB: Si, chiediamo a lui.",
       exampleSrc:"A: There is a police officer there.\nB: Yes, let us ask him.",
       funFact:"Italy has multiple police forces: the Polizia di Stato (state police), the Carabinieri (military police), and the Guardia di Finanza (financial police). A 'poliziotto' typically refers to the Polizia di Stato officer."},

      {type:"teach", trg:"l'orso", src:"the bear", pos:"noun", gender:"m",
       note:"Masculine. Uses l' because it starts with a vowel.\nFrom Latin 'ursus.' Plural: gli orsi.",
       example:"A: Hai paura dell'orso?\nB: Si, l'orso e grande e forte!",
       exampleSrc:"A: Are you afraid of the bear?\nB: Yes, the bear is big and strong!",
       funFact:"The brown bear (orso bruno) still lives in the Italian Alps and the Apennines. The Adamello Brenta Natural Park in Trentino is home to Italy's last significant wild bear population. 'Orso' also gave English the name Ursula."},

      {type:"teach", trg:"il topo", src:"the mouse / rat", pos:"noun", gender:"m",
       note:"Masculine. Refers to both mice and rats.\nFrom Latin 'typus.' Plural: i topi.",
       example:"A: C'e un topo in casa!\nB: Un topo? Chiama il gatto!",
       exampleSrc:"A: There is a mouse in the house!\nB: A mouse? Call the cat!",
       funFact:"'Il topo di biblioteca' (the library mouse) is the Italian idiom for a bookworm. Italian culture loves animal metaphors. Mickey Mouse is called 'Topolino' (little mouse) in Italy, and Disney comics were published under that name for decades."},

      {type:"teach", trg:"il maiale", src:"the pig", pos:"noun", gender:"m",
       note:"Masculine. From Latin 'maialis' (castrated pig).\nAlso used figuratively as an insult (similar to English 'pig').",
       example:"A: Il maiale e grande o piccolo?\nB: Il maiale e grande e molto intelligente!",
       exampleSrc:"A: Is the pig big or small?\nB: The pig is big and very intelligent!",
       funFact:"Italy's cured pork tradition is world-famous. Prosciutto di Parma, salame, pancetta, and mortadella all come from the pig. Italians say 'del maiale non si butta via niente' (nothing of the pig is thrown away), celebrating its full use."},

      {type:"teach", trg:"la pallacanestro", src:"basketball", pos:"noun", gender:"f",
       note:"Feminine. Literally: palla (ball) + canestro (basket).\nItalian translation describes the action of the sport.",
       example:"A: Ti piace la pallacanestro?\nB: Si, mi piace molto! Guardo le partite in televisione.",
       exampleSrc:"A: Do you like basketball?\nB: Yes, I like it a lot! I watch the games on television.",
       funFact:"Italy has a strong basketball tradition. The Italian national team has won European Championships multiple times. Many NBA stars played in the Italian league (Lega Basket) early in their careers. 'Canestro' means 'basket' but also 'wicker basket.'"},

      {type:"teach", trg:"il tennis", src:"tennis", pos:"noun", gender:"m",
       note:"Masculine. Borrowed directly from English/French.\nFrom the tennis call 'tenez!' (French: hold!, catch!).",
       example:"A: Giochi a tennis?\nB: Si! Mi piace molto il tennis.",
       exampleSrc:"A: Do you play tennis?\nB: Yes! I like tennis a lot.",
       funFact:"Italy produced champions like Adriano Panatta and more recently Jannik Sinner, who became world number 1 in 2024. The Italian Open in Rome ('Internazionali d'Italia') is one of the top clay court tournaments."},

      {type:"tip", title:"Gender patterns in Italian professions",
       text:"Italian professions follow predictable gender patterns.\n\nMasculine to feminine changes:\n-o → -a: il cuoco → la cuoca, il commesso → la commessa\n-tore → -trice: il direttore → la direttrice\n-e → -essa: il professore → la professoressa\n-e stays -e: il cameriere → la cameriera (! note: -e → -a here)\n\nSome professions use the same form for both:\nil medico, il giudice (add article to mark gender: la medico, la giudice)\n\nRule: always learn the masculine and feminine forms together.",
       icon:"\ud83d\udca1",
       deepDive:{title:"Why Italian marks profession gender",
        text:"Italian grammar reflects grammatical gender in nearly every noun. Profession nouns are especially consistent because they describe people. When a noun refers to a person, Italian almost always has both a masculine and feminine form. This is different from English, which mostly uses neutral terms (teacher, doctor, actor). The Italian system is more precise: 'il professore' (male teacher) vs. 'la professoressa' (female teacher) leaves no ambiguity about who is being discussed. The -essa ending, from Latin -issa (itself from Greek), is one of the oldest feminine markers in the language."}},

      {type:"mc", q:"What is the feminine form of 'il cuoco'?",
       opts:["la cuoca","la cuoco","la cuochi","la cuoci"],
       ans:"la cuoca",
       hint:"Masculine nouns ending in -o form their feminine by changing -o to -a. The article also changes."},

      {type:"mc", q:"What does 'la pallacanestro' literally mean?",
       opts:["ball in the basket","round ball game","court ball","big round thing"],
       ans:"ball in the basket",
       hint:"The Italian name is a compound word describing the sport visually. The first part means the round object you throw. The second part ('canestro') names the hoop you score through."},

      {type:"fb", s:"C'e un {1} in casa! Chiama il gatto!",
       a:["topo"],
       opts:["topo","orso","maiale","cane"],
       hint:"This small rodent causes panic in households. The cat is the natural solution.",
       sSrc:"There is a {1} in the house! Call the cat!"},

      {type:"match", pairs:[
        {trg:"la professoressa", src:"the female teacher"},
        {trg:"la cameriera", src:"the waitress"},
        {trg:"il poliziotto", src:"the police officer"},
        {trg:"la commessa", src:"the female shop assistant"},
        {trg:"la cuoca", src:"the female cook"}
      ]},

      {type:"fb", s:"Ti piace {1}?\nSi, mi piace molto!",
       a:["il tennis"],
       opts:["il tennis","la pallacanestro","il calcio","la birra"],
       hint:"This racket sport is popular worldwide and was borrowed into Italian from French. Italy's Sinner plays it.",
       sSrc:"Do you like {1}?\nYes, I like it a lot!"},

      {type:"mc", q:"Which animal is described by 'orso'?",
       opts:["a bear","a mouse","a pig","a horse"],
       ans:"a bear",
       hint:"This large animal still lives in the Italian Alps. Its Latin name 'ursus' gave English the name Ursula."},

      {type:"fb", s:"La {1} e bravissima! Mangiamo bene qui.",
       a:["cuoca"],
       opts:["cuoca","cameriera","commessa","professoressa"],
       hint:"The person cooking the excellent food in this restaurant. Feminine professional noun ending in -a.",
       sSrc:"The female {1} is excellent! We eat well here."},

      {type:"mc", q:"What does 'il maiale' represent in Italian food culture?",
       opts:["A farm animal used for world-famous cured meats","A symbol of bad luck","An animal kept only as a pet","An animal found only in zoos"],
       ans:"A farm animal used for world-famous cured meats",
       hint:"Italians say 'nothing is thrown away' from this creature. Prosciutto di Parma and salame are two products made from it."},

      {type:"fb", s:"Scusa, {1}! Cosa prende?",
       a:["cameriera"],
       opts:["cameriera","commessa","cuoca","professoressa"],
       hint:"You are addressing the female person who serves food and drinks at your table in a restaurant.",
       sSrc:"Excuse me, {1}! What will you have?"},

      {type:"match", pairs:[
        {trg:"l'orso", src:"the bear"},
        {trg:"il topo", src:"the mouse"},
        {trg:"il maiale", src:"the pig"},
        {trg:"la pallacanestro", src:"basketball"},
        {trg:"il tennis", src:"tennis"}
      ]}
    ]},
  ]
};
export default UNIT_04;
