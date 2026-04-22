// Unit 22 Expansion. Lesson 5: Tradizioni regionali
const LESSON_5 = {
  id:"itv2_u22l5", title:"Tradizioni regionali", icon:"🗺️", xp:15, board:true,
  steps:[
    {type:"intro", title:"Tradizioni regionali",
     desc:"Explore Italy's rich regional diversity. From North to South, each region has distinct traditions, dialects, and cultural identities that make Italy a mosaic of micro-cultures.",
     goals:["Describe regional differences in Italian culture","Talk about local customs and dialects","Understand the concept of campanilismo"]},

    {type:"teach", trg:"la regione", src:"the region", pos:"noun", gender:"f",
     note:"Feminine. Italy has 20 regions, each with distinct identity.\n'Le regioni italiane' = the Italian regions.",
     example:"A: Da quale regione vieni?\nB: Vengo dalla Toscana.",
     exampleSrc:"A: Which region are you from?\nB: I come from Tuscany.",
     funFact:"Italy's 20 regions are far more than administrative divisions. Each has its own dialect, cuisine, traditions, and sometimes even its own sense of nationality. Five regions have special autonomous status: Sicilia, Sardegna, Valle d'Aosta, Trentino-Alto Adige, and Friuli Venezia Giulia."},

    {type:"teach", trg:"il dialetto", src:"the dialect", pos:"noun", gender:"m",
     note:"Masculine. From Greek 'dialektos' (way of speaking).\n'Parlare in dialetto' = to speak in dialect.",
     example:"A: I miei nonni parlano ancora in dialetto.\nB: E bello, e parte della nostra storia.",
     exampleSrc:"A: My grandparents still speak in dialect.\nB: It is beautiful, it is part of our history.",
     funFact:"Italian dialects are not just accented versions of standard Italian. Many are distinct languages (Neapolitan, Sicilian, Venetian) with their own grammar and vocabulary. Until Italian unification (1861), most Italians spoke only their local dialect. Standard Italian is based on the Tuscan dialect, largely due to Dante, Petrarca, and Boccaccio."},

    {type:"teach", trg:"il campanilismo", src:"local pride / parochialism", pos:"noun", gender:"m",
     note:"Masculine. From 'campanile' (bell tower).\nDeep loyalty to one's town or neighborhood.",
     example:"A: Il campanilismo e molto forte in Italia.\nB: Ogni citta pensa di essere la migliore!",
     exampleSrc:"A: Local pride is very strong in Italy.\nB: Every city thinks it is the best!",
     funFact:"'Campanilismo' comes from 'campanile' (bell tower), the symbol of every Italian town. Your loyalty extends as far as you can hear your town's bells. This explains why neighboring villages can be fierce rivals. Siena vs. Florence, Pisa vs. Livorno, Napoli vs. Roma are centuries-old rivalries rooted in campanilismo."},

    {type:"teach", trg:"il patrono", src:"the patron saint", pos:"noun", gender:"m",
     note:"Masculine. Feminine: la patrona. From Latin 'patronus' (protector).\n'Santo patrono' = patron saint.",
     example:"A: Chi e il patrono di Napoli?\nB: San Gennaro. La sua festa e il 19 settembre.",
     exampleSrc:"A: Who is the patron saint of Naples?\nB: San Gennaro. His feast day is September 19.",
     funFact:"Every Italian city, town, and village has a patron saint whose feast day is a local holiday. The celebration typically includes a religious procession, a market, fireworks, and communal feasting. San Gennaro's blood liquefaction miracle in Naples draws huge crowds three times a year. If the blood does not liquefy, Neapolitans fear disaster."},

    {type:"teach", trg:"l'artigianato", src:"the craftsmanship / handicrafts", pos:"noun", gender:"m",
     note:"Masculine. From 'artigiano' (craftsman/artisan).\n'Artigianato locale' = local crafts.",
     example:"A: L'artigianato italiano e famoso nel mondo.\nB: La qualita e il segreto del successo.",
     exampleSrc:"A: Italian craftsmanship is famous worldwide.\nB: Quality is the secret of success.",
     funFact:"Italian craftsmanship ('artigianato') is a living tradition. Murano glass (Venice), ceramics (Vietri), leather goods (Florence), lace (Burano), and mosaic work (Ravenna) each belong to specific regions. The term 'Made in Italy' carries global prestige precisely because of these centuries-old artisan traditions."},

    {type:"teach", trg:"la gastronomia", src:"the gastronomy / food culture", pos:"noun", gender:"f",
     note:"Feminine. From Greek 'gaster' (stomach) + 'nomos' (law/rule).\n'La gastronomia regionale' = regional cuisine.",
     example:"A: La gastronomia italiana varia da regione a regione.\nB: Ogni regione ha i suoi piatti tipici.",
     exampleSrc:"A: Italian gastronomy varies from region to region.\nB: Every region has its typical dishes.",
     funFact:"There is no single 'Italian cuisine.' Each region has its own culinary identity: pizza and seafood in Naples, risotto in Milan, pesto in Genoa, ragù in Bologna, orecchiette in Puglia. Italians are fiercely protective of their local recipes. Suggesting that carbonara needs cream will offend any Roman."},

    {type:"teach", trg:"il patrimonio culturale", src:"the cultural heritage", pos:"noun", gender:"m",
     note:"Masculine. 'Patrimonio' from 'padre' (father): father's legacy.\n'Patrimonio dell'UNESCO' = UNESCO heritage.",
     example:"A: L'Italia ha un patrimonio culturale immenso.\nB: Piu siti UNESCO di qualsiasi altro paese.",
     exampleSrc:"A: Italy has an immense cultural heritage.\nB: More UNESCO sites than any other country.",
     funFact:"Italy has 59 UNESCO World Heritage Sites, more than any other country. 'Patrimonio' literally means 'father's estate,' what is inherited. 'Patrimonio culturale' includes monuments, landscapes, traditions, and crafts. Italy created the 'Ministero dei Beni Culturali' (Ministry of Cultural Heritage) specifically to protect this legacy."},

    {type:"teach", trg:"la bottega", src:"the workshop / small shop", pos:"noun", gender:"f",
     note:"Feminine. From Germanic 'bottja' (dwelling, stall).\nHistorically where artisans worked and sold.",
     example:"A: Questa bottega fa ceramiche da tre generazioni.\nB: Si sente la passione nel lavoro.",
     exampleSrc:"A: This workshop has made ceramics for three generations.\nB: You can feel the passion in the work.",
     funFact:"'Bottega' was where Renaissance masters trained apprentices. Verrocchio's bottega produced Leonardo da Vinci. Ghirlandaio's trained Michelangelo. Today, 'bottega' still means a small artisan shop where things are made by hand on the premises. The word carries a romantic weight that 'negozio' (shop) does not."},

    // Quiz steps
    {type:"mc", q:"What is 'campanilismo'?",
     opts:["Deep loyalty to one's town, named after the bell tower","A musical composition for church bells","A style of architecture found only in Rome","A type of Italian bell-ringing music"],
     ans:"Deep loyalty to one's town, named after the bell tower",
     hint:"Your l... extends as far as you can hear your t...'s bells. This explains fierce rivalries between neighboring Italian cities."},

    {type:"fb", s:"I miei nonni parlano ancora in {1}.",
     a:["dialetto"],
     opts:["dialetto","regione","patrono","bottega"],
     hint:"Many Italian grandparents still speak their local language. These are often distinct from standard Italian, with their own grammar.",
     sSrc:"My grandparents still speak in {1}."},

    {type:"match", pairs:[
      {trg:"la regione", src:"the region"},
      {trg:"il dialetto", src:"the dialect"},
      {trg:"il campanilismo", src:"local pride"},
      {trg:"l'artigianato", src:"craftsmanship"},
      {trg:"la gastronomia", src:"gastronomy"}
    ]},

    {type:"mc", q:"How many UNESCO World Heritage Sites does Italy have?",
     opts:["Exactly 35 concentrated in central Italy","59, more than any other country worldwide","Over 100 but many are contested","About 20 scattered across the country"],
     ans:"59, more than any other country worldwide",
     hint:"'Patrimonio' literally means 'father's estate.' Italy's cultural inheritance spans millennia from Roman ruins to Renaissance art."},

    {type:"fb", s:"Ogni citta ha il suo santo {1}.",
     a:["patrono"],
     opts:["patrono","dialetto","campanile","artigiano"],
     hint:"A protector saint whose feast day is a local holiday. Naples has San Gennaro, whose blood miracle draws millions.",
     sSrc:"Every city has its {1} saint."},

    {type:"mc", q:"What is the historical significance of a 'bottega'?",
     opts:["A style of Italian countryside villa","A type of traditional Italian restaurant","An artisan workshop where Renaissance masters trained apprentices","A regional government office building"],
     ans:"An artisan workshop where Renaissance masters trained apprentices",
     hint:"Verrocchio's t... Leonardo. Ghirlandaio's t... Michelangelo. The word carries romantic weight that 'negozio' does not."},

    {type:"fb", s:"La {1} italiana varia da regione a regione.",
     a:["gastronomia"],
     opts:["gastronomia","tradizione","regione","bottega"],
     hint:"Regional food culture. There is no single Italian cuisine: each area has its own recipes, fiercely defended by locals.",
     sSrc:"Italian {1} varies from region to region."},

    {type:"mc", q:"Why is standard Italian based on the Tuscan dialect?",
     opts:["Tuscan was the easiest dialect to learn","Tuscany was the largest Italian region","The Italian government chose it by popular vote","Dante, Petrarca, and Boccaccio wrote in Tuscan"],
     ans:"Dante, Petrarca, and Boccaccio wrote in Tuscan",
     hint:"These three literary giants established T... as the prestige language of literature centuries before Italian unification in 1861."}
  ]
};
export default LESSON_5;
