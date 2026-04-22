// Batch 3. Unit 22, Lesson 1: Cucina regionale e sport (Regional Cuisine & Sports)
const BATCH3_U22_L1 = {
  id:"itv2_u22l_b3_1", title:"Cucina regionale e sport", icon:"\u26BD", xp:15, board:true,
  steps:[
    {type:"intro", title:"Cucina regionale e sport",
     desc:"Explore Italian regional cuisine and sports culture. Food and football are two pillars of Italian identity that unite and divide the country in equal measure.",
     goals:["Name regional Italian cuisines","Discuss Italian sports culture","Use cultural vocabulary in conversation"]},

    {type:"teach", trg:"la cucina regionale", src:"the regional cuisine", pos:"noun", gender:"f",
     note:"Feminine. Each of Italy's 20 regions has distinct traditions.\n'La cucina toscana' = Tuscan cuisine.",
     example:"A: Ogni regione ha la sua cucina.\nB: Questa e la bellezza dell'Italia.",
     exampleSrc:"A: Every region has its own cuisine.\nB: This is the beauty of Italy.",
     funFact:"Italy has no single 'national cuisine.' Each of the 20 regions has distinct dishes, ingredients, and traditions. What is called 'Italian food' abroad is often a mix of different regional traditions. A Neapolitan and a Milanese might disagree completely on what 'real Italian food' means."},

    {type:"teach", trg:"il piatto tipico", src:"the typical dish", pos:"noun", gender:"m",
     note:"Masculine. 'Tipico' = typical, characteristic.\n'Qual e il piatto tipico della regione?' = What is the region's typical dish?",
     example:"A: Qual e il piatto tipico di Napoli?\nB: La pizza napoletana, senza dubbio.",
     exampleSrc:"A: What is the typical dish of Naples?\nB: Neapolitan pizza, without a doubt.",
     funFact:"Regional pride in 'piatti tipici' is fierce. Every town claims its version is the 'original.' Bologna has ragu (not 'spaghetti bolognese,' which Italians do not recognize), Rome has carbonara and caciò è pepe, Sicily has arancini, and Milan has risotto alla milanese."},

    {type:"teach", trg:"la sagra", src:"the local food festival", pos:"noun", gender:"f",
     note:"Feminine. From Latin 'sacra' (sacred celebrations).\n'Sagra del tartufo' = truffle festival.",
     example:"A: C'e la sagra del vino questo weekend.\nB: Andiamo! E sempre divertente.",
     exampleSrc:"A: There is the wine festival this weekend.\nB: Let us go! It is always fun.",
     funFact:"Italy has thousands of 'sagre' (food festivals) every year, each celebrating a local product: sagra del tartufo (truffle), sagra della porchetta (roasted pork), sagra del pesce (fish). They are community events with food stalls, music, and dancing. Most run from spring through autumn."},

    {type:"teach", trg:"il campionato", src:"the championship / league", pos:"noun", gender:"m",
     note:"Masculine. From 'campione' (champion).\n'Campionato di Serie A' = Serie A league.",
     example:"A: Chi vincera il campionato quest'anno?\nB: Difficile dirlo, la Serie A e molto competitiva.",
     exampleSrc:"A: Who will win the league this year?\nB: Hard to say, Serie A is very competitive.",
     funFact:"Italian football ('calcio') is a national obsession. Serie A is one of the world's top leagues. Italian football rivalries run deep: Juventus vs. Inter (Derby d'Italia), Milan vs. Inter (Derby della Madonnina), Roma vs. Lazio (Derby della Capitale). Football conversations dominate Italian social life."},

    {type:"teach", trg:"la squadra", src:"the team", pos:"noun", gender:"f",
     note:"Feminine. From Germanic 'skwadra' (square formation).\n'Tifoso' = fan. 'Tifare per' = to root for.",
     example:"A: Per quale squadra tifi?\nB: Tifo per la Roma da sempre!",
     exampleSrc:"A: Which team do you support?\nB: I have always supported Roma!",
     funFact:"Italian football fandom is inherited. Children support their father's team. Switching teams is considered treason. 'Tifo' comes from the medical term for typhoid fever, suggesting that fandom is a kind of delirium. Italian football culture involves organized fan groups ('ultras'), stadium chants, and pre-match rituals."},

    {type:"teach", trg:"il tifoso", src:"the fan / supporter", pos:"noun", gender:"m",
     note:"Masculine. Feminine: la tifosa. From 'tifo' (enthusiasm, literally typhoid).\n'Tifoso sfegatato' = die-hard fan.",
     example:"A: I tifosi sono impazziti per il gol!\nB: Che emozione! Abbiamo vinto!",
     exampleSrc:"A: The fans went crazy for the goal!\nB: What excitement! We won!",
     funFact:"Italian 'tifosi' are among the world's most passionate sports fans. Football stadiums on match day create an electric atmosphere with choreographed displays, flares (despite bans), and elaborate chants. The word 'tifo' reflects how Italian culture views sports passion as a kind of beautiful madness."},

    {type:"teach", trg:"il patrimonio culturale", src:"the cultural heritage", pos:"noun", gender:"m",
     note:"Masculine. 'Patrimonio' = heritage, patrimony.\n'Patrimonio UNESCO' = UNESCO heritage.",
     example:"A: Il patrimonio culturale italiano e immenso.\nB: Piu di 55 siti UNESCO!",
     exampleSrc:"A: Italy's cultural heritage is immense.\nB: More than 55 UNESCO sites!",
     funFact:"Italy leads the world in UNESCO World Heritage Sites with over 55. 'Patrimonio' comes from Latin 'patrimonium' (inheritance from the father), reflecting how cultural heritage is passed down. The Italian Constitution (Article 9) commits the state to protecting artistic and historical heritage."},

    {type:"teach", trg:"la tradizione", src:"the tradition", pos:"noun", gender:"f",
     note:"Feminine. From Latin 'traditio' (a handing over).\n'Tradizione popolare' = folk tradition.",
     example:"A: Questa e una tradizione del nostro paese.\nB: Da quanti anni la celebrate?",
     exampleSrc:"A: This is a tradition of our town.\nB: For how many years have you celebrated it?",
     funFact:"'Tradizione' and 'tradimento' (betrayal) share the same root: Latin 'tradere' (to hand over). A tradition is something 'handed down' through generations. Italian towns guard their traditions fiercely. Many festivals, recipes, and customs have been celebrated for centuries without interruption."},

    {type:"teach", trg:"il Carnevale", src:"the Carnival", pos:"noun", gender:"m",
     note:"Masculine. From Latin 'carne vale' (farewell to meat).\nBefore Lent. Venice Carnival is world-famous.",
     example:"A: Il Carnevale di Venezia e spettacolare.\nB: Le maschere sono incredibili.",
     exampleSrc:"A: The Venice Carnival is spectacular.\nB: The masks are incredible.",
     funFact:"'Carnevale' literally means 'farewell to meat,' marking the last feast before Lent's fasting period. The Venice Carnival dates back to the 11th century. Elaborate masks allowed social classes to mingle anonymously. Other famous Italian carnivals: Viareggio (giant floats) and Ivrea (Battle of the Oranges)."},

    {type:"teach", trg:"il Palio", src:"the Palio (traditional horse race)", pos:"noun", gender:"m",
     note:"Masculine. From Latin 'pallium' (cloth prize).\n'Il Palio di Siena' = Siena's famous horse race.",
     example:"A: Hai mai visto il Palio di Siena?\nB: No, ma dicono che sia incredibile.",
     exampleSrc:"A: Have you ever seen the Palio di Siena?\nB: No, but they say it is incredible.",
     funFact:"The Palio di Siena has been run twice yearly since the 17th century. Siena's 17 'contrade' (city districts) compete in a bareback horse race around Piazza del Campo. The rivalry between contrade is intense and lifelong. Winning the Palio brings a neighborhood together in celebration for months."},

    {type:"teach", trg:"l'artigianato", src:"the craftsmanship / handicraft", pos:"noun", gender:"m",
     note:"Masculine. From 'artigiano' (artisan).\n'Artigianato locale' = local crafts.",
     example:"A: L'artigianato italiano e famoso nel mondo.\nB: Si, soprattutto il vetro di Murano.",
     exampleSrc:"A: Italian craftsmanship is famous worldwide.\nB: Yes, especially Murano glass.",
     funFact:"Italian 'artigianato' includes Murano glass (Venice), ceramic tiles (Deruta, Vietri), leather goods (Florence), lace (Burano), and mosaic work (Ravenna). Many artisan workshops have operated for generations. 'Made in Italy' craftsmanship commands premium prices globally."},

    // Quiz steps
    {type:"mc", q:"What does 'sagra' refer to in Italian culture?",
     opts:["A local food festival celebrating a specific product","A formal dinner at a restaurant","A cooking competition on television","A sacred religious ceremony"],
     ans:"A local food festival celebrating a specific product",
     hint:"Thousands happen yearly across Italy: truffle, wine, porchetta, fish. Community events with f... stalls, music, and dancing."},

    {type:"fb", s:"Per quale {1} tifi?",
     a:["squadra"],
     opts:["squadra","campionato","sagra","tradizione"],
     hint:"Which team do you support? Italian football fandom is inherited. Children support their father's team. Switching is considered betrayal.",
     sSrc:"Which {1} do you support?"},

    {type:"match", pairs:[
      {trg:"il campionato", src:"the championship"},
      {trg:"la squadra", src:"the team"},
      {trg:"il tifoso", src:"the fan"},
      {trg:"il Carnevale", src:"the Carnival"},
      {trg:"il Palio", src:"the traditional horse race"}
    ]},

    {type:"mc", q:"What does 'Carnevale' literally mean?",
     opts:["Time to celebrate with music","Farewell to meat (before Lent)","Festival of masks and costumes","Victory of joy over sadness"],
     ans:"Farewell to meat (before Lent)",
     hint:"From Latin 'carne vale.' The last chance to feast b... the fasting period of L... begins."},

    {type:"fb", s:"L'{1} italiano e famoso nel mondo.",
     a:["artigianato"],
     opts:["artigianato","campionato","patrimonio","Carnevale"],
     hint:"Italian craftsmanship: Murano glass, Florentine leather, Deruta ceramics. 'Made in Italy' commands premium prices globally.",
     sSrc:"Italian {1} is famous worldwide."},

    {type:"mc", q:"What is special about the Palio di Siena?",
     opts:["It is a cooking competition","It is a modern Formula 1 car race","It is a bareback horse race between city districts","It is a football tournament"],
     ans:"It is a bareback horse race between city districts",
     hint:"Seventeen 'contrade' compete twice yearly around Piazza del Campo. The tradition dates back centuries and rivalry is lifelong."},

    {type:"fb", s:"Ogni regione ha la sua {1}.",
     a:["cucina"],
     opts:["cucina","squadra","maschera","sagra"],
     hint:"There is no single Italian national food. Each of the 20 regions has distinct dishes, ingredients, and culinary traditions.",
     sSrc:"Every region has its own {1}."},

    {type:"mc", q:"Why is switching football teams considered 'treason' in Italy?",
     opts:["A law prohibits changing teams","Teams charge switching fees","It is actually perfectly normal","Fandom is inherited and lifelong, a core identity"],
     ans:"Fandom is inherited and lifelong, a core identity",
     hint:"Children inherit their father's team. 'Tifo' (f...) is compared to a fever. Your team is part of who you are, not a casual preference."}
  ,{type:"match",pairs:[{trg:"il piatto tipico",src:"the typical dish"},{trg:"la sagra",src:"the local food festival"},{trg:"il patrimonio culturale",src:"the cultural heritage"},{trg:"la tradizione",src:"the tradition"}]}]
};
export default BATCH3_U22_L1;
