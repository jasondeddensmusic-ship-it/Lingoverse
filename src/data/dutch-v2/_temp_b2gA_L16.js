// B2 Gap Batch A — Lesson 16: Natuur & Milieu
// Theme: Nature, environment, sustainability

const LESSON_16 = {id:"nlv2_b2gA_l16", title:"Natuur & Milieu", icon:"\u{1F33F}", xp:40, board:true, steps:[
  {type:"intro", title:"Natuur & Milieu",
   desc:"Learn vocabulary about nature, seasons, and environmental topics. The Netherlands' relationship with water and land makes environmental vocabulary especially relevant.",
   goals:["Learn nature and environment vocabulary","Discuss seasons and agriculture","Understand Dutch compound nouns for natural phenomena"]},

  {type:"teach", trg:"het jaargetij", src:"season (of the year)", pos:"noun", gender:"n",
   note:"Compound: jaar (year) + getij (tide/time).\nhet-word. Plural: jaargetijden. The four seasons.",
   example:"A: Welk jaargetij vind jij het mooist?\nB: De herfst, als de bladeren verkleuren.\nA: Elk jaargetij heeft zijn eigen charme.\nB: Behalve de winter. Die duurt te lang in Nederland!",
   exampleSrc:"A: Which season do you find most beautiful?\nB: Autumn, when the leaves change colour.\nA: Every season has its own charm.\nB: Except winter. That lasts too long in the Netherlands!",
   funFact:"The word 'getij' originally meant 'tide' (as in ocean tides). Jaargetij literally means 'year-tide', reflecting the cyclical nature of seasons. Dutch also uses 'seizoen' (from French saison)."},

  {type:"teach", trg:"de fruitsoort", src:"type of fruit, fruit variety", pos:"noun", gender:"c",
   note:"Compound: fruit + soort (type/species).\nUsed in agriculture and food discussions.",
   example:"A: Welke fruitsoorten groeien er in Nederland?\nB: Appels, peren en bessen vooral.\nA: En aardbeien?\nB: Ja, dat is ook een populaire fruitsoort hier.",
   exampleSrc:"A: What types of fruit grow in the Netherlands?\nB: Apples, pears, and berries especially.\nA: And strawberries?\nB: Yes, that's also a popular fruit variety here.",
   funFact:"The Netherlands is a major fruit exporter. The Betuwe region (between the big rivers) is called 'de fruittuin van Nederland' (the fruit garden of the Netherlands). Elstar apples are a Dutch invention."},

  {type:"teach", trg:"de irrigatie", src:"irrigation", pos:"noun", gender:"c",
   note:"From Latin 'irrigatio'. Artificial water supply for agriculture.\nde-word (-tie ending).",
   example:"A: Irrigatie is essentieel voor de landbouw in droge gebieden.\nB: Nederland heeft juist het omgekeerde probleem.\nA: Te veel water in plaats van te weinig?\nB: Precies, daarom zijn we zo goed in waterbeheer.",
   exampleSrc:"A: Irrigation is essential for agriculture in dry areas.\nB: The Netherlands actually has the opposite problem.\nA: Too much water instead of too little?\nB: Exactly, that's why we're so good at water management.",
   funFact:"While the Netherlands is famous for pumping water OUT (polders), Dutch irrigation expertise is exported worldwide. Wageningen University is the global leader in agricultural water management."},

  {type:"teach", trg:"de hectare", src:"hectare", pos:"noun", gender:"c",
   note:"Unit of land area: 10,000 square meters.\nUsed for farms, parks, and nature reserves.",
   example:"A: Het natuurgebied beslaat tweeduizend hectare.\nB: Dat is behoorlijk groot.\nA: Ja, een van de grootste natuurgebieden van Nederland.\nB: Hoeveel hectare heeft het gemiddelde Nederlandse boerenbedrijf?",
   exampleSrc:"A: The nature reserve covers two thousand hectares.\nB: That's quite large.\nA: Yes, one of the largest nature areas in the Netherlands.\nB: How many hectares does the average Dutch farm have?",
   funFact:"The average Dutch farm is about 30 hectares, but produces more per hectare than almost any other country. The Netherlands proves that small-scale intensive farming can be incredibly productive."},

  {type:"teach", trg:"het kalenderjaar", src:"calendar year", pos:"noun", gender:"n",
   note:"Compound: kalender + jaar. het-word because jaar is het.\nUsed in finance and administration.",
   example:"A: Het kalenderjaar loopt van januari tot december.\nB: Dat weet iedereen toch?\nA: Ja, maar niet alle organisaties volgen het kalenderjaar.\nB: Sommige hebben een gebroken boekjaar.",
   exampleSrc:"A: The calendar year runs from January to December.\nB: Everyone knows that, right?\nA: Yes, but not all organizations follow the calendar year.\nB: Some have a broken fiscal year.",
   funFact:"Dutch tax returns (belastingaangifte) follow the kalenderjaar. The deadline is usually May 1st. About 7 million Dutch people file their taxes online via the Belastingdienst website."},

  {type:"teach", trg:"de kalendermaand", src:"calendar month", pos:"noun", gender:"c",
   note:"Compound: kalender + maand. de-word because maand is de.\nUsed in contracts and billing periods.",
   example:"A: De opzegtermijn is drie kalendermaanden.\nB: Dat betekent dat ik voor maart moet opzeggen.\nA: Ja, je telt drie volle kalendermaanden.\nB: Dus als ik in januari opzeg, eindig ik op 1 april.",
   exampleSrc:"A: The notice period is three calendar months.\nB: That means I have to cancel before March.\nA: Yes, you count three full calendar months.\nB: So if I cancel in January, I finish on April 1st.",
   funFact:"Dutch contracts love the word 'kalendermaand' because it is precise: exactly one month from the first to the last day. It avoids ambiguity about whether 'a month' means 28, 30, or 31 days."},

  {type:"tip", title:"Kalender- and Jaar- Time Compounds",
   text:"Dutch has precise compound nouns for time periods:\n\njaar- (year):\n- jaargetij (season)\n- kalenderjaar (calendar year)\n- jaarsalaris (annual salary)\n- jaarverslag (annual report)\n\nkalender- (calendar):\n- kalenderjaar (calendar year)\n- kalendermaand (calendar month)\n- kalenderweek (calendar week)\n\nThe distinction matters in contracts and administration: 'drie maanden' is vague, 'drie kalendermaanden' is precise.",
   deepDive:{title:"Dutch Agriculture and Nature",
    text:"The Netherlands has a unique relationship with its land:\n\n- 54% of land is used for agriculture\n- Intensive farming: highest yields per hectare in Europe\n- But also: nature reserves and Natura 2000 areas\n- Ongoing tension between farming and nature\n\nThe stikstofcrisis (nitrogen crisis) dominates Dutch politics. Farmers must reduce nitrogen emissions to protect nature. This debate uses vocabulary like hectare, irrigatie, and natural area measurements."}},

  {type:"mc", q:"Welk woord betekent 'season (of the year)'?",
   opts:["het jaargetij","het kalenderjaar","de kalendermaand","de irrigatie"],
   ans:"het jaargetij",
   hint:"Jaar (year) + getij (tide/time). Spring, summer, autumn, winter."},

  {type:"fb", s:"Welke {1} groeien er in Nederland?",
   a:["fruitsoorten"], opts:["fruitsoorten","jaargetijden","hectares","kalendermaanden"],
   hint:"Types or varieties of fruit. Plural of fruitsoort.",
   sSrc:"What types of fruit grow in the Netherlands?"},

  {type:"mc", q:"Irrigatie is essentieel voor de landbouw. Wat is 'irrigatie'?",
   opts:["artificial water supply for crops","a type of fertilizer","a harvesting technique","a soil treatment"],
   ans:"artificial water supply for crops",
   hint:"From Latin 'irrigatio'. Bringing w... to fields where it doesn't rain enough."},

  {type:"fb", s:"De opzegtermijn is drie {1}.",
   a:["kalendermaanden"], opts:["kalendermaanden","kalenderjaren","jaargetijden","hectares"],
   hint:"A precise term for months counted from the first to the last day.",
   sSrc:"The notice period is three calendar months."},

  {type:"match", pairs:[
    {trg:"jaargetij", src:"season"},
    {trg:"fruitsoort", src:"type of fruit"},
    {trg:"irrigatie", src:"irrigation"},
    {trg:"hectare", src:"hectare"},
    {trg:"kalenderjaar", src:"calendar year"},
    {trg:"kalendermaand", src:"calendar month"}
  ]},

  {type:"mc", q:"Het kalenderjaar loopt van januari tot december. Wat is een 'kalenderjaar'?",
   opts:["a year from January 1st to December 31st","a school year","a fiscal quarter","a leap year"],
   ans:"a year from January 1st to December 31st",
   hint:"Kalender + jaar. The standard twelve-month y... as on the calendar."},

  {type:"fb", s:"{1} is essentieel voor de landbouw in droge gebieden.",
   a:["Irrigatie"], opts:["Irrigatie","Hectare","Kalendermaand","Fruitsoort"],
   hint:"The artificial supply of water to farmland. A Latin-origin -tie word.",
   sSrc:"Irrigation is essential for agriculture in dry areas."},

  {type:"drag_fill", s:"Elk {1} brengt andere {2} voort op de honderd {3} van de boerderij.",
   blanks:{"1":"jaargetij","2":"fruitsoorten","3":"hectare"},
   pool:["jaargetij","fruitsoorten","hectare","irrigatie","kalenderjaar"],
   hint:"Each season produces different fruit varieties on the farm's hundred hectares of land."}
]};
export default LESSON_16;
