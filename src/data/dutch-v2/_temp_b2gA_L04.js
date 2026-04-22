// B2 Gap Batch A. Lesson 04: Handel & Economie
// Theme: Trade, commerce, investment

const LESSON_4 = {id:"nlv2_b2gA_l4", title:"Handel & Economie", icon:"\u{1F4B9}", xp:40, board:true, steps:[
  {type:"intro", title:"Handel & Economie",
   desc:"Learn Dutch vocabulary for trade, commerce, and investment. The Netherlands has been a trading nation for centuries, and this vocabulary reflects that heritage.",
   goals:["Learn trade and commerce vocabulary","Discuss investment and business","Understand Dutch economic terminology"]},

  {type:"teach", trg:"de commercie", src:"commerce, commercial sector", pos:"noun", gender:"c",
   note:"From Latin 'commercium'. Refers to the business/commercial side.\nOften contrasted with 'ideaal' or 'kunst'.",
   example:"A: In de commercie draait alles om winst.\nB: Dat is niet altijd zo. Sommige bedrijven hebben ook idealen.\nA: Maar uiteindelijk moet de commercie wel geld opleveren.\nB: Daar heb je gelijk in.",
   exampleSrc:"A: In commerce, everything revolves around profit.\nB: That's not always the case. Some companies also have ideals.\nA: But ultimately, commerce does need to make money.\nB: You're right about that.",
   funFact:"The Netherlands has been a commercial powerhouse since the 17th-century VOC (Dutch East India Company). The word 'commercie' entered Dutch from Latin via French trade contacts."},

  {type:"teach", trg:"de investeerder", src:"investor", pos:"noun", gender:"c",
   note:"From 'investeren' (to invest) + -der (agent suffix).\nSomeone who puts money into businesses or projects.",
   example:"A: De investeerder wil tien miljoen euro in het project steken.\nB: Dat is een flink bedrag.\nA: Maar de investeerder verwacht ook een hoog rendement.\nB: Dat is logisch. Zonder risico geen beloning.",
   exampleSrc:"A: The investor wants to put ten million euros into the project.\nB: That's a considerable amount.\nA: But the investor also expects a high return.\nB: That makes sense. No risk, no reward.",
   funFact:"Amsterdam's stock exchange (Euronext Amsterdam) is the oldest in the world, founded in 1602 to trade VOC shares. The Dutch literally invented modern investing."},

  {type:"teach", trg:"de handelspost", src:"trading post", pos:"noun", gender:"c",
   note:"Compound: handel (trade) + post (station).\nHistorical term, also used metaphorically.",
   example:"A: De VOC had handelsposten over de hele wereld.\nB: In Azie, Afrika en Zuid-Amerika.\nA: Die handelsposten waren kleine Nederlandse nederzettingen.\nB: Met winkels, pakhuizen en soms zelfs forten.",
   exampleSrc:"A: The VOC had trading posts all over the world.\nB: In Asia, Africa, and South America.\nA: Those trading posts were small Dutch settlements.\nB: With shops, warehouses, and sometimes even forts.",
   funFact:"The VOC maintained over 30 handelsposten across Asia alone. Remnants can still be found in places like Jakarta (formerly Batavia), Colombo, and Nagasaki."},

  {type:"teach", trg:"de inkoop", src:"purchasing, procurement", pos:"noun", gender:"c",
   note:"Compound: in + koop (purchase).\nBusiness term for buying supplies or stock.",
   example:"A: De afdeling inkoop regelt alle bestellingen.\nB: Hoe kiezen jullie leveranciers?\nA: We letten op prijs, kwaliteit en levertijd.\nB: De inkoop is cruciaal voor onze winstmarge.",
   exampleSrc:"A: The purchasing department handles all orders.\nB: How do you choose suppliers?\nA: We pay attention to price, quality, and delivery time.\nB: Procurement is crucial for our profit margin.",
   funFact:"In Dutch business, 'inkoop' and 'verkoop' (sales) are the two sides of every transaction. Many companies have a dedicated inkoopmanager who negotiates with suppliers."},

  {type:"teach", trg:"het exportartikel", src:"export product, export item", pos:"noun", gender:"n",
   note:"Compound: export + artikel (article/item).\nA product sold to other countries.",
   example:"A: Kaas is al eeuwen een belangrijk exportartikel.\nB: Net als bloemen en groenten.\nA: Nederland is de op een na grootste exporteur van landbouwproducten.\nB: Dat is indrukwekkend voor zo'n klein land.",
   exampleSrc:"A: Cheese has been an important export product for centuries.\nB: Just like flowers and vegetables.\nA: The Netherlands is the second-largest exporter of agricultural products.\nB: That's impressive for such a small country.",
   funFact:"The Netherlands is the world's second-largest agricultural exporter after the USA, despite being 237 times smaller. Flowers, cheese, and tomatoes are top exportartikelen."},

  {type:"teach", trg:"het kapitalisme", src:"capitalism", pos:"noun", gender:"n",
   note:"Political/economic term. het-word.\nUsed in debates about economic systems.",
   example:"A: Het kapitalisme heeft voor- en nadelen.\nB: Wat zijn volgens jou de voordelen?\nA: Innovatie en economische groei.\nB: En de nadelen? Ongelijkheid en milieuschade.",
   exampleSrc:"A: Capitalism has advantages and disadvantages.\nB: What are the advantages in your opinion?\nA: Innovation and economic growth.\nB: And the disadvantages? Inequality and environmental damage.",
   funFact:"The Dutch word 'kapitalisme' follows the same pattern as other -isme words: socialisme, liberalisme, individualisme. All are het-words and all entered Dutch from French in the 19th century."},

  {type:"tip", title:"Trade Vocabulary Patterns",
   text:"Dutch trade vocabulary uses predictable compound patterns:\n\n- handel + noun = trade-related\n  handelspost (trading post), handelscontact (trade contact)\n\n- in/uit + koop = buying/selling direction\n  inkoop (purchasing), verkoop (sales)\n\n- export/import + artikel = traded goods\n  exportartikel, importartikel\n\nThe -isme suffix creates economic system terms (all het-words):\nkapitalisme, socialisme, individualisme.",
   deepDive:{title:"The Netherlands as a Trading Nation",
    text:"The Netherlands' location at the mouths of the Rhine and Meuse rivers made it a natural trading hub. Key moments:\n\n1602: VOC founded, first multinational\n1609: Wisselbank (Exchange Bank) created in Amsterdam\n1611: First commodities exchange\n\nToday, Rotterdam is Europe's largest port, and Schiphol is a major cargo airport. Trade is in Dutch DNA."}},

  {type:"mc", q:"Welk woord betekent 'investor'?",
   opts:["de investeerder","de inkoop","de commercie","het exportartikel"],
   ans:"de investeerder",
   hint:"Someone who invests (investeert) money in businesses or projects."},

  {type:"fb", s:"Kaas is al eeuwen een belangrijk {1} van Nederland.",
   a:["exportartikel"], opts:["exportartikel","handelspost","inkoop","kapitalisme"],
   hint:"A product that is sold to other countries (export + artikel).",
   sSrc:"Cheese has been an important export product of the Netherlands for centuries."},

  {type:"mc", q:"De VOC had handelsposten over de hele wereld. Wat is een 'handelspost'?",
   opts:["a customs office","a trading post","a post office","a military base"],
   ans:"a trading post",
   hint:"Handel (trade) + p... (station/outpost). A place for conducting business abroad."},

  {type:"fb", s:"De afdeling {1} regelt alle bestellingen bij leveranciers.",
   a:["inkoop"], opts:["inkoop","commercie","investeerder","handelspost"],
   hint:"The business function of buying supplies and stock.",
   sSrc:"The purchasing department handles all orders from suppliers."},

  {type:"match", pairs:[
    {trg:"commercie", src:"commerce"},
    {trg:"investeerder", src:"investor"},
    {trg:"handelspost", src:"trading post"},
    {trg:"inkoop", src:"purchasing"},
    {trg:"exportartikel", src:"export product"},
    {trg:"kapitalisme", src:"capitalism"}
  ]},

  {type:"mc", q:"Het kapitalisme heeft voor- en nadelen. Wat is 'het kapitalisme'?",
   opts:["a type of government","a trade agreement","an economic system based on private ownership and profit","a political party"],
   ans:"an economic system based on private ownership and profit",
   hint:"An -isme word describing the e... s... most Western countries use."},

  {type:"fb", s:"In de {1} draait alles om winst en omzet.",
   a:["commercie"], opts:["commercie","investeerder","inkoop","handelspost"],
   hint:"The business/commercial world as opposed to idealism or art.",
   sSrc:"In commerce, everything revolves around profit and revenue."},

  {type:"drag_fill", s:"De {1} besloot geld te steken in de {2} van nieuwe {3}.",
   blanks:{"1":"investeerder","2":"inkoop","3":"exportartikelen"},
   pool:["investeerder","inkoop","exportartikelen","handelspost","kapitalisme"],
   hint:"The person with money funded the purchasing of goods meant for foreign markets."}
]};
export default LESSON_4;
