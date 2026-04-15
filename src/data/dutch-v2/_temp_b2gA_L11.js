// B2 Gap Batch A — Lesson 11: Geschiedenis & Macht
// Theme: History, power, empire

const LESSON_11 = {id:"nlv2_b2gA_l11", title:"Geschiedenis & Macht", icon:"\u{1F451}", xp:40, board:true, steps:[
  {type:"intro", title:"Geschiedenis & Macht",
   desc:"Learn vocabulary about power, history, and social structures. These terms appear in NT2 texts about Dutch and world history, as well as current affairs.",
   goals:["Learn vocabulary about power and authority","Discuss historical and social structures","Understand abstract nouns about influence"]},

  {type:"teach", trg:"de keizer", src:"emperor", pos:"noun", gender:"c",
   note:"From Latin 'Caesar'. The ruler of an empire.\nHistorical term, still used in modern contexts.",
   example:"A: Napoleon was ooit keizer van Frankrijk.\nB: En hij heeft ook grote invloed gehad op Nederland.\nA: Klopt, het Nederlandse rechtssysteem is op zijn wetten gebaseerd.\nB: De keizer liet zijn sporen na in heel Europa.",
   exampleSrc:"A: Napoleon was once emperor of France.\nB: And he also had a great influence on the Netherlands.\nA: That's right, the Dutch legal system is based on his laws.\nB: The emperor left his mark across all of Europe.",
   funFact:"The Dutch word 'keizer' comes from the Latin 'Caesar', just like the German 'Kaiser' and the Russian 'tsar'. All trace back to Julius Caesar himself."},

  {type:"teach", trg:"de grootmacht", src:"great power, superpower", pos:"noun", gender:"c",
   note:"Compound: groot (great) + macht (power).\nA nation with enormous international influence.",
   example:"A: Is China een grootmacht?\nB: Absoluut, economisch en militair.\nA: Nederland was ooit ook een grootmacht.\nB: Ja, in de zeventiende eeuw, de Gouden Eeuw.",
   exampleSrc:"A: Is China a great power?\nB: Absolutely, economically and militarily.\nA: The Netherlands was once a great power too.\nB: Yes, in the seventeenth century, the Golden Age.",
   funFact:"During the Dutch Golden Age (17th century), the tiny Netherlands was a true grootmacht: the richest nation on earth with the largest navy. Hard to believe for a country the size of Maryland."},

  {type:"teach", trg:"de grootheid", src:"greatness, magnitude", pos:"noun", gender:"c",
   note:"From groot + -heid suffix. Abstract quality of being great.\nAlso: a great figure (een grootheid in de wetenschap).",
   example:"A: De grootheid van Rembrandt is onbetwist.\nB: Zijn werk heeft de Nederlandse kunst gedefinieerd.\nA: Niet iedereen erkende zijn grootheid tijdens zijn leven.\nB: Dat gebeurt vaker met grote kunstenaars.",
   exampleSrc:"A: The greatness of Rembrandt is undisputed.\nB: His work defined Dutch art.\nA: Not everyone recognized his greatness during his lifetime.\nB: That happens more often with great artists.",
   funFact:"The -heid suffix creates abstract nouns from adjectives: groot > grootheid, vrij > vrijheid, schoon > schoonheid. All -heid nouns are de-words and describe a quality or state."},

  {type:"teach", trg:"de historicus", src:"historian", pos:"noun", gender:"c",
   note:"From Latin. Plural: historici.\nSomeone who studies and writes about history.",
   example:"A: De historicus presenteerde zijn nieuwe boek.\nB: Waarover gaat het?\nA: Over de Nederlandse koloniale geschiedenis.\nB: Dat is een belangrijk en gevoelig onderwerp.",
   exampleSrc:"A: The historian presented his new book.\nB: What is it about?\nA: About Dutch colonial history.\nB: That's an important and sensitive topic.",
   funFact:"Dutch historici have a proud tradition. Huizinga's 'Herfsttij der Middeleeuwen' (The Autumn of the Middle Ages, 1919) is one of the most influential history books ever written."},

  {type:"teach", trg:"de hervormer", src:"reformer", pos:"noun", gender:"c",
   note:"From hervormen (to reform) + -er suffix.\nSomeone who pushes for fundamental changes.",
   example:"A: Willem van Oranje was een grote hervormer.\nB: Wat heeft hij hervormd?\nA: Hij streed voor godsdienstvrijheid in de Nederlanden.\nB: Daarom noemen we hem de Vader des Vaderlands.",
   exampleSrc:"A: William of Orange was a great reformer.\nB: What did he reform?\nA: He fought for religious freedom in the Low Countries.\nB: That's why we call him the Father of the Fatherland.",
   funFact:"The Dutch national anthem, the Wilhelmus, is about Willem van Oranje. It's the oldest national anthem in the world still in use (written around 1572)."},

  {type:"teach", trg:"de glorie", src:"glory", pos:"noun", gender:"c",
   note:"From Latin 'gloria' via French.\nUsed for historical grandeur and achievements.",
   example:"A: De Gouden Eeuw was de periode van Hollandse glorie.\nB: Handel, kunst en wetenschap bloeiden.\nA: Maar er was ook een donkere kant: slavernij en kolonialisme.\nB: Ja, de glorie had een schaduwzijde.",
   exampleSrc:"A: The Golden Age was the period of Dutch glory.\nB: Trade, art, and science flourished.\nA: But there was also a dark side: slavery and colonialism.\nB: Yes, the glory had a shadow side.",
   funFact:"The phrase 'Hollandse glorie' is a fixed expression in Dutch, referring to the Golden Age. It is also the name of a famous 1940 novel by Jan de Hartog about the Dutch herring fleet."},

  {type:"tip", title:"Abstract Nouns: -heid and -er Suffixes",
   text:"Two productive Dutch suffixes for abstract and agent nouns:\n\n-heid (quality/state, always de-word):\n  groot > grootheid (greatness)\n  vrij > vrijheid (freedom)\n  gezond > gezondheid (health)\n\n-er (agent/doer, always de-word):\n  hervormen > hervormer (reformer)\n  investeren > investeerder (investor)\n  kennen > kenner (connoisseur)\n\nBoth are extremely common and help you build vocabulary rapidly.",
   deepDive:{title:"Dutch Colonial History",
    text:"The Netherlands' history as a grootmacht includes a colonial past that is now critically examined:\n\n- VOC (1602-1799): trade empire in Asia\n- WIC (1621-1792): trade and slavery in Americas/Africa\n- Dutch East Indies (now Indonesia): colony until 1949\n- Suriname: colony until 1975\n- Dutch Antilles: still part of the Kingdom\n\nModern Dutch society actively debates how to remember this history. Terms like glorie, grootmacht, and hervormer are central to these discussions."}},

  {type:"mc", q:"Welk woord betekent 'emperor'?",
   opts:["de keizer","de historicus","de hervormer","de grootmacht"],
   ans:"de keizer",
   hint:"From Latin 'Caesar'. The supreme ruler of an empire."},

  {type:"fb", s:"Nederland was in de zeventiende eeuw een {1}.",
   a:["grootmacht"], opts:["grootmacht","grootheid","glorie","keizer"],
   hint:"A nation with enormous military and economic power on the world stage.",
   sSrc:"The Netherlands was a great power in the seventeenth century."},

  {type:"mc", q:"De historicus presenteerde zijn nieuwe boek. Wat is een 'historicus'?",
   opts:["someone who studies and writes about history","a history teacher","a museum guide","a politician"],
   ans:"someone who studies and writes about history",
   hint:"From Latin. The academic who researches and publishes a... the past."},

  {type:"fb", s:"Willem van Oranje was een grote {1}.",
   a:["hervormer"], opts:["hervormer","keizer","historicus","grootmacht"],
   hint:"Someone who pushes for fundamental changes in society or government.",
   sSrc:"William of Orange was a great reformer."},

  {type:"match", pairs:[
    {trg:"keizer", src:"emperor"},
    {trg:"grootmacht", src:"great power"},
    {trg:"grootheid", src:"greatness"},
    {trg:"historicus", src:"historian"},
    {trg:"hervormer", src:"reformer"},
    {trg:"glorie", src:"glory"}
  ]},

  {type:"mc", q:"De Gouden Eeuw was de periode van Hollandse glorie. Wat is 'glorie'?",
   opts:["glory, grandeur","poverty","war","trade"],
   ans:"glory, grandeur",
   hint:"From Latin 'gloria'. The fame and splendour of a great achievement."},

  {type:"fb", s:"De {1} van Rembrandt is onbetwist.",
   a:["grootheid"], opts:["grootheid","grootmacht","glorie","hervormer"],
   hint:"The abstract quality of being great. From groot + -heid.",
   sSrc:"The greatness of Rembrandt is undisputed."},

  {type:"drag_fill", s:"De {1} schreef over de {2} van de Gouden Eeuw en de rol van de {3} in Europa.",
   blanks:{"1":"historicus","2":"glorie","3":"grootmacht"},
   pool:["historicus","glorie","grootmacht","keizer","hervormer"],
   hint:"The scholar who studies the past wrote about the splendour of the Golden Age and the role of the powerful nation."}
]};
export default LESSON_11;
