// Batch 7 — Unit 12 extra lesson. Essere al passato: Traditions & Festivals
const BATCH7_L1 = {id:"itv2_u12l_b7_1", title:"Feste e tradizioni", icon:"\u{1F389}", xp:15, board:true, steps:[
{type:"intro", title:"Feste e tradizioni",
 desc:"Learn vocabulary for Italian festivals, traditions, and celebrations using past tense with essere.",
 goals:["Describe Italian festivals and traditions","Talk about past celebrations","Use essere-verbs for events and arrivals"]},

{type:"teach", trg:"il Carnevale", src:"Carnival", pos:"noun", gender:"m",
 note:"Masculine noun. The festival before Lent.\n'A Carnevale ogni scherzo vale' = At Carnival, anything goes.",
 example:"A: Siamo andati al Carnevale di Venezia.\nB: Com'era? Bellissimo?",
 exampleSrc:"A: We went to the Venice Carnival.\nB: How was it? Beautiful?",
 funFact:"The Venice Carnival dates back to the 11th century. Masks (maschere) were worn so that social classes could mix freely. The most famous mask is the 'Bauta' with its pointed chin."},

{type:"teach", trg:"la maschera", src:"the mask / costume", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le maschere.\n'Mascherarsi' = to wear a costume/mask.",
 example:"A: Che maschera hai indossato a Carnevale?\nB: Mi sono vestito da Arlecchino!",
 exampleSrc:"A: What costume did you wear at Carnival?\nB: I dressed up as Harlequin!",
 funFact:"Italian commedia dell'arte masks are iconic: Arlecchino (Harlequin), Pulcinella (Punch), Colombina, and Pantalone. Each represents a different character type and social class."},

{type:"teach", trg:"il Ferragosto", src:"August holiday (Aug 15)", pos:"noun", gender:"m",
 note:"Masculine noun. Italy's main summer holiday.\nOrigins: Roman emperor Augustus's rest day.",
 example:"A: Dove sei andato per Ferragosto?\nB: Siamo andati al mare in Sardegna.",
 exampleSrc:"A: Where did you go for Ferragosto?\nB: We went to the sea in Sardinia.",
 funFact:"Ferragosto (August 15) is when Italy essentially shuts down. Factories close, cities empty, and everyone heads to the beach or mountains. Traffic jams are legendary."},

{type:"teach", trg:"la Befana", src:"Befana (Epiphany witch)", pos:"noun", gender:"f",
 note:"Feminine noun. A kind old witch who brings gifts on January 6.\n'L'Epifania tutte le feste porta via' = Epiphany takes all holidays away.",
 example:"A: La Befana e arrivata!\nB: Ha portato dolci o carbone?",
 exampleSrc:"A: The Befana has arrived!\nB: Did she bring sweets or coal?",
 funFact:"The Befana is an old woman who flies on a broomstick on Epiphany night (Jan 5-6), filling stockings with candy for good children and coal (carbone) for naughty ones."},

{type:"teach", trg:"il presepe", src:"the nativity scene", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i presepi.\nA Christmas tradition stronger in Italy than the Christmas tree.",
 example:"A: Hai visto il presepe in piazza?\nB: Si, e bellissimo quest'anno!",
 exampleSrc:"A: Have you seen the nativity scene in the square?\nB: Yes, it is beautiful this year!",
 funFact:"Naples is the world capital of nativity scenes (presepi). Via San Gregorio Armeno is an entire street of artisan presepe workshops, with figurines of celebrities alongside the Holy Family."},

{type:"teach", trg:"il fuoco d'artificio", src:"the firework", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i fuochi d'artificio.\nLiterally: 'fire of artifice/craft.'",
 example:"A: I fuochi d'artificio sono iniziati a mezzanotte.\nB: Erano spettacolari!",
 exampleSrc:"A: The fireworks started at midnight.\nB: They were spectacular!",
 funFact:"Italians celebrate New Year's Eve (Capodanno) with massive fireworks displays. Naples is famous for its chaotic and spectacular fireworks, visible across the entire bay."},

{type:"teach", trg:"la processione", src:"the procession", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le processioni.\nA religious or civic parade through town.",
 example:"A: La processione e passata per la piazza.\nB: C'era tanta gente.",
 exampleSrc:"A: The procession passed through the square.\nB: There were so many people.",
 funFact:"Easter processions (processioni pasquali) are dramatic in southern Italy. In Sicily and Calabria, hooded figures carry heavy statues through the streets in centuries-old traditions."},

{type:"teach", trg:"il patrono", src:"the patron saint", pos:"noun", gender:"m",
 note:"Masculine noun. Feminine: la patrona. Plural: i patroni.\nEvery Italian town has one.",
 example:"A: Chi e il patrono di Napoli?\nB: San Gennaro, festeggiato il 19 settembre.",
 exampleSrc:"A: Who is the patron saint of Naples?\nB: Saint Gennaro, celebrated on September 19.",
 funFact:"Every Italian city has a patron saint and a public holiday. Milan celebrates Sant'Ambrogio (Dec 7), Rome celebrates San Pietro (Jun 29). The 'festa del patrono' is a day off work."},

{type:"teach", trg:"la sagra", src:"the food festival", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le sagre.\nA local food festival celebrating regional products.",
 example:"A: Siamo andati alla sagra del tartufo.\nB: Avete mangiato bene?",
 exampleSrc:"A: We went to the truffle festival.\nB: Did you eat well?",
 funFact:"Italy has thousands of 'sagre' (food festivals) every year, celebrating everything from truffles to chestnuts to porchetta. They are a cornerstone of local identity and community life."},

{type:"teach", trg:"il corteo", src:"the parade / march", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i cortei.\nA public march or parade through the streets.",
 example:"A: Il corteo storico e partito dal centro.\nB: Tutti erano in costume medievale.",
 exampleSrc:"A: The historical parade departed from the center.\nB: Everyone was in medieval costume.",
 funFact:"Many Italian cities hold 'cortei storici' (historical parades) in medieval or Renaissance costume. Siena's Palio and Florence's Calcio Storico are the most famous."},

{type:"teach", trg:"lo scherzo", src:"the joke / prank", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: gli scherzi.\n'Fare uno scherzo' = to play a prank.",
 example:"A: Ti hanno fatto uno scherzo a Carnevale?\nB: Si, mi hanno lanciato i coriandoli!",
 exampleSrc:"A: Did they play a prank on you at Carnival?\nB: Yes, they threw confetti at me!",
 funFact:"'Scherzi a parte' (jokes aside) is a common expression. 'A Carnevale ogni scherzo vale' (at Carnival any joke goes) means anything is permitted during the festival."},

{type:"teach", trg:"i coriandoli", src:"confetti (paper)", pos:"noun", gender:"m",
 note:"Masculine plural noun. Small colored paper pieces.\nThrown during Carnival and celebrations.",
 example:"A: I bambini lanciano i coriandoli.\nB: Che festa allegra!",
 exampleSrc:"A: The children are throwing confetti.\nB: What a joyful party!",
 funFact:"Italian 'coriandoli' are small paper bits, not the sugar-coated almonds (those are 'confetti'). English borrowed the wrong word: what English calls 'confetti' is Italian 'confetti' (wedding almonds)."},

{type:"teach", trg:"il panettone", src:"Christmas cake (Milanese)", pos:"noun", gender:"m",
 note:"Masculine noun. Tall, dome-shaped sweet bread with dried fruits.\nA Christmas staple.",
 example:"A: Preferisci il panettone o il pandoro?\nB: Il pandoro, senza canditi!",
 exampleSrc:"A: Do you prefer panettone or pandoro?\nB: Pandoro, without candied fruits!",
 funFact:"The panettone vs pandoro debate divides Italy every Christmas. Milan's panettone has candied fruits and raisins, while Verona's pandoro is plain with powdered sugar. Feelings run strong."},

{type:"teach", trg:"il brindisi di mezzanotte", src:"midnight toast", pos:"noun", gender:"m",
 note:"Masculine noun. The toast at midnight on New Year's Eve.\n'Spumante' = sparkling wine.",
 example:"A: Siamo rimasti svegli per il brindisi di mezzanotte.\nB: Buon anno nuovo!",
 exampleSrc:"A: We stayed awake for the midnight toast.\nB: Happy New Year!",
 funFact:"At midnight on New Year's Eve, Italians toast with spumante (sparkling wine), eat lentils for luck, and wear red underwear for good fortune. In Naples, they used to throw old furniture out windows."},

{type:"mc", q:"Quando si festeggia il Ferragosto?",
 opts:["Il 15 agosto","Il 25 dicembre","Il 6 gennaio","Il 1 gennaio"],
 ans:"Il 15 agosto",
 hint:"The biggest summer holiday in Italy. In the middle of August."},

{type:"fb", s:"La {1} e arrivata il 6 gennaio con i dolci!", a:["Befana"],
 opts:["Befana","maschera","processione","sagra"],
 hint:"An old witch who flies on a broomstick on Epiphany and fills stockings.",
 sSrc:"The {1} arrived on January 6 with sweets!"},

{type:"match", pairs:[
 {trg:"il Carnevale", src:"Carnival"},
 {trg:"la maschera", src:"mask"},
 {trg:"il presepe", src:"nativity scene"},
 {trg:"il panettone", src:"Christmas cake"}
]},

{type:"mc", q:"Che cosa sono i 'coriandoli' italiani?",
 opts:["Small colored paper pieces","Sugar-coated almonds","Chocolate candies","Carnival masks"],
 ans:"Small colored paper pieces",
 hint:"Thrown during Carnival. Not the almonds (those are 'confetti' in Italian)."},

{type:"fb", s:"Siamo andati alla {1} del tartufo.", a:["sagra"],
 opts:["sagra","processione","maschera","vacanza"],
 hint:"A local food festival celebrating a specific regional product.",
 sSrc:"We went to the truffle {1}."},

{type:"mc", q:"Che cosa indossano gli italiani a Capodanno per fortuna?",
 opts:["Biancheria rossa","Una maschera","Un cappello","Scarpe nuove"],
 ans:"Biancheria rossa",
 hint:"A clothing item in a specific color believed to bring good fortune for the new year."},

{type:"fb", s:"I {1} d'artificio sono iniziati a mezzanotte.", a:["fuochi"],
 opts:["fuochi","scherzi","cortei","coriandoli"],
 hint:"Explosive lights in the sky. A spectacular display for celebrations.",
 sSrc:"The {1} started at midnight."},

{type:"match", pairs:[
 {trg:"la sagra", src:"food festival"},
 {trg:"il corteo", src:"parade"},
 {trg:"lo scherzo", src:"joke/prank"},
 {trg:"il patrono", src:"patron saint"}
]}
,{type:"match",pairs:[{trg:"il Ferragosto",src:"August holiday (Aug 15)"},{trg:"la processione",src:"the procession"},{trg:"i coriandoli",src:"confetti (paper)"},{trg:"il brindisi di mezzanotte",src:"midnight toast"}]},{type:"mc",q:"How do you say \"firework\" in Italian?",opts:["la finestra","il tavolo","il fuoco d'artificio","la bicicletta"],ans:"il fuoco d'artificio",hint:"Recall the Italian vocabulary word taught in this lesson."}]};
export default BATCH7_L1;
