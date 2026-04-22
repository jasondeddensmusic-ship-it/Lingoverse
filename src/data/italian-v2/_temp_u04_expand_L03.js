// Unit 04 Expansion. Lesson 5: Shopping for Food
// Theme: Grocery shopping, quantities, market vocabulary

const LESSON_5 = {
  id:"itv2_u4l5", title:"Al mercato", icon:"\ud83e\udd55", xp:15, board:true,
  steps:[
    {type:"intro", title:"Al mercato",
     desc:"Learn how to shop for food at Italian markets and grocery stores, including quantities and common items.",
     goals:["Ask for food items at a market","Use quantity expressions (un chilo, un etto)","Handle basic market transactions"]},

    {type:"teach", trg:"comprare", src:"to buy", pos:"verb", gender:null,
     note:"Regular -are verb. 'Compro' = I buy.\nFrom Latin 'comparare' (to procure, to prepare).",
     example:"A: Cosa devi comprare?\nB: Devo comprare frutta e verdura.",
     exampleSrc:"A: What do you need to buy?\nB: I need to buy fruit and vegetables.",
     funFact:"Latin 'comparare' meant 'to procure' or 'to prepare.' English 'compare' comes from the same root because comparing means examining things side by side before choosing. Shopping is choosing."},

    {type:"teach", trg:"vendere", src:"to sell", pos:"verb", gender:null,
     note:"Regular -ere verb. 'Vendo' = I sell.\nFrom Latin 'vendere' (to sell).",
     example:"A: Cosa vende questo negozio?\nB: Vende frutta e verdura fresca.",
     exampleSrc:"A: What does this shop sell?\nB: It sells fresh fruit and vegetables.",
     funFact:"From Latin 'vendere,' a contraction of 'venum dare' (to give for sale). English 'vendor' and 'vending machine' come from this root. Italian markets have specialized vendors for each food category."},

    {type:"teach", trg:"il negozio", src:"the shop / store", pos:"noun", gender:"m",
     note:"Masculine. From Latin 'negotium' (business, work).\nPlural: i negozi. 'Fare i negozi' = to go shopping.",
     example:"A: C'e un negozio qui vicino?\nB: Si, all'angolo.",
     exampleSrc:"A: Is there a shop nearby?\nB: Yes, on the corner.",
     funFact:"'Negotium' in Latin literally meant 'not-leisure' (nec + otium). Business is the absence of leisure. English 'negotiate' comes from this same root. Small specialty shops are still common in Italy alongside supermarkets."},

    {type:"teach", trg:"il mercato", src:"the market", pos:"noun", gender:"m",
     note:"Masculine. From Latin 'mercatus' (trade, marketplace).\nOpen-air markets are a cherished Italian tradition.",
     example:"A: Andiamo al mercato sabato?\nB: Si! Voglio comprare frutta fresca.",
     exampleSrc:"A: Shall we go to the market Saturday?\nB: Yes! I want to buy fresh fruit.",
     funFact:"Every Italian town has a weekly open-air market. Rome has Porta Portese (flea market) and Campo de' Fiori (food market). Market vendors shout out prices and deals, creating a vibrant, noisy atmosphere."},

    {type:"teach", trg:"un chilo", src:"a kilo", pos:"noun", gender:"m",
     note:"Masculine. Short for 'chilogrammo.' Italy uses the metric system.\n'Mezzo chilo' = half a kilo (500g).",
     example:"A: Un chilo di pomodori, per favore.\nB: Ecco. Altro?",
     exampleSrc:"A: A kilo of tomatoes, please.\nB: Here you go. Anything else?",
     funFact:"Italy uses the metric system for everything. At markets, you order by the kilo or 'etto' (100g). Saying 'due etti' (200g) is the standard way to order small quantities of cold cuts or cheese."},

    {type:"teach", trg:"un etto", src:"100 grams", pos:"noun", gender:"m",
     note:"Masculine. Short for 'ettogrammo.' Standard unit at delis.\n'Due etti di prosciutto' = 200g of ham.",
     example:"A: Tre etti di prosciutto crudo, per favore.\nB: Tagliato fine o grosso?",
     exampleSrc:"A: 300 grams of raw ham, please.\nB: Sliced thin or thick?",
     funFact:"'Un etto' (100g) is the standard ordering unit at Italian delis and cheese counters. Asking for 'due etti' of prosciutto is so common that it is practically a cultural ritual. Foreigners who use this unit impress locals."},

    {type:"teach", trg:"quanto costa?", src:"how much does it cost?", pos:"verb", gender:null,
     note:"'Quanto' = how much. 'Costa' = it costs (from 'costare').\nPlural: 'quanto costano?' (how much do they cost?).",
     example:"A: Quanto costa un chilo di mele?\nB: Due euro al chilo.",
     exampleSrc:"A: How much does a kilo of apples cost?\nB: Two euros per kilo.",
     funFact:"'Costare' comes from Latin 'constare' (to stand firm, to cost). The idea is that a price 'stands' at a certain level. At open markets, you can sometimes negotiate, but at shops, prices are fixed."},

    {type:"teach", trg:"l'euro", src:"the euro", pos:"noun", gender:"m",
     note:"Masculine. Invariable in Italian: 'un euro, cinque euro.'\nItaly adopted the euro in 2002, replacing the lira.",
     example:"A: Quanto costa?\nB: Cinque euro.",
     exampleSrc:"A: How much is it?\nB: Five euros.",
     funFact:"Unlike most Italian nouns, 'euro' does not change in the plural: 'un euro, due euro' (not 'euri'). Italy's old currency, the lira, had much higher denominations: a coffee cost about 1,500 lire."},

    {type:"teach", trg:"la bottiglia", src:"the bottle", pos:"noun", gender:"f",
     note:"Feminine. From Late Latin 'buticula' (small cask).\nPlural: le bottiglie.",
     example:"A: Una bottiglia d'acqua, per favore.\nB: Naturale o frizzante?",
     exampleSrc:"A: A bottle of water, please.\nB: Still or sparkling?",
     funFact:"Italian recycling culture is strong. Glass bottles ('bottiglie di vetro') are widely recycled. Many Italians still buy wine directly from local producers in refillable bottles ('vino sfuso'), a growing eco-friendly trend."},

    {type:"teach", trg:"la scatola", src:"the box / can", pos:"noun", gender:"f",
     note:"Feminine. Used for boxes and canned goods.\nFrom Germanic 'skatula.' Plural: le scatole.",
     example:"A: Prendi una scatola di pomodori.\nB: Pelati o passata?",
     exampleSrc:"A: Get a can of tomatoes.\nB: Peeled or pureed?",
     funFact:"'Rompere le scatole' (to break the boxes) is a common Italian expression meaning 'to annoy someone.' The polite version of a much ruder phrase. 'Non mi rompere le scatole!' = 'Don't bother me!'"},

    {type:"teach", trg:"il sacchetto", src:"the bag (small)", pos:"noun", gender:"m",
     note:"Masculine. Diminutive of 'sacco' (sack).\n'Il sacchetto di plastica' = plastic bag.",
     example:"A: Vuole un sacchetto?\nB: No grazie, ho la mia borsa.",
     exampleSrc:"A: Do you want a bag?\nB: No thanks, I have my own bag.",
     funFact:"Italy banned free single-use plastic bags in 2011, one of the first countries to do so. Shops now charge for bags. Most Italians carry reusable 'borse della spesa' (shopping bags) or use biodegradable ones."},

    {type:"teach", trg:"fresco", src:"fresh", pos:"adj", gender:"m",
     note:"Masculine: fresco. Feminine: fresca.\nFor food, air, and temperature. From Germanic 'frisk.'",
     example:"A: Il pesce e fresco?\nB: Freschissimo! Appena pescato.",
     exampleSrc:"A: Is the fish fresh?\nB: Very fresh! Just caught.",
     funFact:"'Fresco' in art means a painting done on fresh, wet plaster (affresco). In food, freshness is paramount in Italian culture. 'Prodotti freschi' (fresh products) is a point of pride. English borrowed 'alfresco' (in the fresh air)."},

    // Quiz steps
    {type:"mc", q:"What is 'un etto' in grams?",
     opts:["100 grams","1,000 grams","10 grams","500 grams"],
     ans:"100 grams",
     hint:"Short for 'ettogrammo.' This is the standard unit for ordering cold cuts and cheese at Italian delis."},

    {type:"fb", s:"{1} costa un chilo di mele?",
     a:["Quanto"],
     opts:["Quanto","Come","Dove","Quando"],
     hint:"You are asking about the price. This question word means 'how much.'",
     sSrc:"{1} does a kilo of apples cost?"},

    {type:"mc", q:"Does 'euro' change in the Italian plural?",
     opts:["It depends on the number","No, it stays 'euro'","Yes, it becomes 'euri'","Yes, it becomes 'euros'"],
     ans:"No, it stays 'euro'",
     hint:"Unlike most Italian nouns, this currency word is invariable: 'un e..., cinque e....'"},

    {type:"fb", s:"Devo {1} frutta e verdura.",
     a:["comprare"],
     opts:["comprare","vendere","mangiare","cucinare"],
     hint:"You need to purchase these items. This -are verb means 'to buy.'",
     sSrc:"I need to {1} fruit and vegetables."},

    {type:"match", pairs:[
      {trg:"comprare", src:"to buy"},
      {trg:"vendere", src:"to sell"},
      {trg:"il negozio", src:"the shop"},
      {trg:"il mercato", src:"the market"},
      {trg:"quanto costa?", src:"how much?"}
    ]},

    {type:"mc", q:"What is special about Italian markets?",
     opts:["They are indoors only","They are only in big cities","Weekly open-air markets are a cherished tradition","They only sell fish"],
     ans:"Weekly open-air markets are a cherished tradition",
     hint:"Every Italian town has one. Vendors shout prices, creating a vibrant atmosphere."},

    {type:"fb", s:"Una {1} d'acqua, per favore.",
     a:["bottiglia"],
     opts:["bottiglia","scatola","sacchetto","tazza"],
     hint:"Water comes in this glass container. Feminine noun from Late Latin 'buticula.'",
     sSrc:"A {1} of water, please."},

    {type:"mc", q:"What does 'fresco' mean for food?",
     opts:["Cold","Frozen","Cooked","Fresh"],
     ans:"Fresh",
     hint:"Italian food culture prizes produce that has just arrived. The same word describes paintings done on wet plaster ('affresco')."},

    {type:"fb", s:"Il pesce e {1}! Appena pescato.",
     a:["freschissimo"],
     opts:["freschissimo","buonissimo","caldissimo","grandissimo"],
     hint:"The superlative of 'fresco.' The fish was just caught and is extremely fresh.",
     sSrc:"The fish is very {1}! Just caught."},

    {type:"mc", q:"What does 'rompere le scatole' mean?",
     opts:["To annoy someone","To open a box","To go shopping","To break something"],
     ans:"To annoy someone",
     hint:"This is an idiomatic expression. Literally 'to break the boxes,' it is a polite version of a ruder phrase."}
  ]
};
export default LESSON_5;
