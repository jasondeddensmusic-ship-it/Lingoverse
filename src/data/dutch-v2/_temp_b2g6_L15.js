// L15: Trade, Goods, and Commerce
const LESSON_15 = {
  id:"nlv2_b2g6_l15", title:"Handel en Goederen", icon:"\uD83D\uDEA2", xp:15, board:true,
  steps:[
    {type:"intro", title:"Trade, Goods, and Commerce",
     desc:"Explore the Dutch trading tradition with vocabulary about goods, trade routes, and commercial activity. The Netherlands has been a trading nation for over 400 years.",
     goals:["Learn 10 trade and commerce terms","Discuss Dutch trading history and present","Understand commercial vocabulary"]},

    {type:"teach", trg:"de handelsgoederen", src:"the trade goods, the merchandise", pos:"noun", gender:"c",
     note:"Compound: handel (trade) + goederen (goods).\nAlways plural. Physical goods for trade.",
     example:"A: De handelsgoederen werden per schip vervoerd.\nB: Vanaf welke haven?\nA: Rotterdam, de grootste haven van Europa.\nB: Dat is al eeuwen zo.",
     exampleSrc:"A: The trade goods were transported by ship.\nB: From which port?\nA: Rotterdam, the largest port in Europe.\nB: That has been so for centuries.",
     funFact:"The Dutch East India Company (VOC) was the first multinational corporation, trading spices, textiles, and precious metals across the globe."},

    {type:"teach", trg:"het handelshuis", src:"the trading house", pos:"noun", gender:"n",
     note:"Compound: handel (trade) + huis (house).\nA company that buys and sells goods internationally.",
     example:"A: Het handelshuis importeert koffie uit Brazilie.\nB: Al lang?\nA: Al sinds de negentiende eeuw.\nB: Dat is een lange traditie.",
     exampleSrc:"A: The trading house imports coffee from Brazil.\nB: For a long time?\nA: Since the nineteenth century.\nB: That is a long tradition.",
     funFact:"Amsterdam was the center of global trade in the 17th century. The 'grachtenpanden' (canal houses) were often trading houses with warehouses upstairs."},

    {type:"teach", trg:"de handelskolonie", src:"the trading colony", pos:"noun", gender:"c",
     note:"Compound: handel (trade) + kolonie (colony).\nA settlement established for commercial purposes.",
     example:"A: De VOC had handelskolonies in heel Azie.\nB: Dat was het begin van het kolonialisme.\nA: De geschiedenis is complex.\nB: En heeft diepe littekens nagelaten.",
     exampleSrc:"A: The VOC had trading colonies throughout Asia.\nB: That was the beginning of colonialism.\nA: The history is complex.\nB: And has left deep scars.",
     funFact:"Dutch colonial history is increasingly discussed critically. Museums like the Rijksmuseum now include colonial perspectives in their exhibitions."},

    {type:"teach", trg:"het handelscontact", src:"the trade contact, the business contact", pos:"noun", gender:"n",
     note:"Compound: handel (trade) + contact.\nA business relationship for trading purposes.",
     example:"A: We hebben een nieuw handelscontact in China.\nB: In welke sector?\nA: Elektronicaonderdelen.\nB: Dat is een groeiende markt.",
     exampleSrc:"A: We have a new trade contact in China.\nB: In which sector?\nA: Electronics components.\nB: That is a growing market.",
     funFact:"The Netherlands is China's second-largest EU trading partner. ASML in Veldhoven makes the world's most advanced chip-making machines."},

    {type:"teach", trg:"de handelsschepen", src:"the merchant ships, the trading vessels", pos:"noun", gender:"c",
     note:"Compound: handel (trade) + schepen (ships).\nAlways plural. Ships used for commercial transport.",
     example:"A: De handelsschepen voeren naar Indie.\nB: Hoe lang duurde de reis?\nA: Soms wel acht maanden.\nB: Dat was een gevaarlijke tocht.",
     exampleSrc:"A: The merchant ships sailed to the Indies.\nB: How long did the journey take?\nA: Sometimes as long as eight months.\nB: That was a dangerous voyage.",
     funFact:"Dutch merchant ships were so numerous in the 17th century that the Netherlands had more ships than all other European nations combined."},

    {type:"mc",
     q:"Wat was de VOC?",
     opts:["Een Nederlandse handelsmaatschappij","Een voetbalclub","Een universiteit","Een politieke partij"],
     ans:"Een Nederlandse handelsmaatschappij",
     hint:"The Dutch East India Company, established in 1602. It was the world's first multinational corporation."},

    {type:"teach", trg:"de bauxiet", src:"bauxite", pos:"noun", gender:"c",
     note:"From the French village Les Baux.\nThe ore from which aluminum is extracted.",
     example:"A: Bauxiet is de grondstof voor aluminium.\nB: Waar wordt het gewonnen?\nA: Vooral in Australie en Guinee.\nB: Het is een belangrijke exportproduct.",
     exampleSrc:"A: Bauxite is the raw material for aluminum.\nB: Where is it mined?\nA: Mainly in Australia and Guinea.\nB: It is an important export product.",
     funFact:"Suriname, a former Dutch colony, was once a major bauxite producer. The American company Alcoa operated mines there for decades."},

    {type:"teach", trg:"het design", src:"design", pos:"noun", gender:"n",
     note:"English loanword, widely adopted in Dutch.\nPronounced di-ZINE. Used for industrial and graphic design.",
     example:"A: Het design van dit product is heel modern.\nB: Wie heeft het ontworpen?\nA: Een Nederlandse designer.\nB: Nederlandse designerIs zijn wereldberoemd.",
     exampleSrc:"A: The design of this product is very modern.\nB: Who designed it?\nA: A Dutch designer.\nB: Dutch designers are world famous.",
     funFact:"Dutch Design Week in Eindhoven is one of the largest design events in Northern Europe. Eindhoven is the design capital of the Netherlands."},

    {type:"teach", trg:"de huiswerkbegeleiding", src:"the homework support, the tutoring", pos:"noun", gender:"c",
     note:"Compound: huiswerk (homework) + begeleiding (guidance).\nAfter-school tutoring services.",
     example:"A: Mijn zoon krijgt huiswerkbegeleiding.\nB: Helpt het?\nA: Ja, zijn cijfers zijn veel beter geworden.\nB: Het is de investering waard.",
     exampleSrc:"A: My son gets homework support.\nB: Does it help?\nA: Yes, his grades have improved a lot.\nB: It is worth the investment.",
     funFact:"Homework tutoring is a growing industry in the Netherlands. Over 30% of secondary school students receive some form of extra support."},

    {type:"fb",
     s:"De {1} voeren van Amsterdam naar het verre Oosten.",
     a:["handelsschepen"],
     opts:["handelsschepen","handelsgoederen","handelskolonies","handelscontacten"],
     hint:"The vessels used for commercial voyages. Ships that carried goods across the oceans.",
     sSrc:"The {1} sailed from Amsterdam to the Far East."},

    {type:"teach", trg:"de aanhang", src:"the following, the supporters", pos:"noun", gender:"c",
     note:"From 'aanhangen' (to adhere to, to follow).\nA group of followers or supporters.",
     example:"A: De politicus heeft een grote aanhang.\nB: Hoeveel mensen steunen hem?\nA: Miljoenen, vooral op sociale media.\nB: Dat is indrukwekkend.",
     exampleSrc:"A: The politician has a large following.\nB: How many people support him?\nA: Millions, especially on social media.\nB: That is impressive.",
     funFact:"The Dutch word 'aanhang' is also used for a partner: 'Neem je je aanhang mee?' (Are you bringing your significant other?) is a common informal expression."},

    {type:"teach", trg:"de grootmacht", src:"the great power, the superpower", pos:"noun", gender:"c",
     note:"Compound: groot (great) + macht (power).\nA nation with dominant global influence.",
     example:"A: Nederland was ooit een grootmacht.\nB: Tijdens de Gouden Eeuw?\nA: Ja, we hadden de grootste vloot ter wereld.\nB: Die tijd is voorbij.",
     exampleSrc:"A: The Netherlands was once a great power.\nB: During the Golden Age?\nA: Yes, we had the largest fleet in the world.\nB: That time is over.",
     funFact:"In the 17th century, the tiny Dutch Republic was the world's leading economic and naval power, controlling global trade routes."},

    {type:"mc",
     q:"Wat is 'bauxiet'?",
     opts:["Een erts waaruit aluminium wordt gewonnen","Een soort steen voor gebouwen","Een tropisch fruit","Een type brandstof"],
     ans:"Een erts waaruit aluminium wordt gewonnen",
     hint:"Named after the French village Les Baux. It is the raw material mined to produce a common lightweight metal."},

    {type:"match", pairs:[
      {trg:"handelsgoederen", src:"trade goods"},
      {trg:"handelshuis", src:"trading house"},
      {trg:"handelskolonie", src:"trading colony"},
      {trg:"handelsschepen", src:"merchant ships"}
    ]},

    {type:"fb",
     s:"Nederland was in de zeventiende eeuw een echte {1}.",
     a:["grootmacht"],
     opts:["grootmacht","handelshuis","handelskolonie","aanhang"],
     hint:"A nation with dominant power and influence on the world stage. Compound of 'groot' and 'macht'.",
     sSrc:"The Netherlands was a true {1} in the seventeenth century."},

    {type:"mc",
     q:"Wat is 'huiswerkbegeleiding'?",
     opts:["Bijles en ondersteuning bij het huiswerk","Een boek met uitleg","Een schoolvak","Een ouderavond"],
     ans:"Bijles en ondersteuning bij het huiswerk",
     hint:"'Huiswerk' is homework and 'begeleiding' is guidance. Extra support for students outside school hours."}
  ]
};
export default LESSON_15;
