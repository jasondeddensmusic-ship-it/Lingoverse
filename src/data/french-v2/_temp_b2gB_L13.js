const LESSON_13 = {
  id:"frv2_b2gB_l13", title:"Gastronomie et terroir", icon:"\u{1F37D}\uFE0F", xp:15, board:true,
  steps:[
    {type:"intro", title:"Gastronomie et terroir",
     desc:"Dive into French culinary culture. Learn vocabulary for food, dining, and regional specialties.",
     goals:["Learn 10 gastronomy and food terms","Discuss French dining culture","Describe culinary experiences"]},

    {type:"teach", trg:"un amuse-gueule", src:"an appetizer, a canape", pos:"noun", gender:"m",
     note:"Masculine compound noun. A small bite served before a meal.\nAmuse (amuse) + gueule (mouth, informal). Plural: des amuse-gueules.",
     example:"A: Les amuse-gueules sont delicieux ce soir.\nB: Le chef s'est vraiment surpasse.",
     exampleSrc:"A: The appetizers are delicious tonight.\nB: The chef really outdid himself.",
     funFact:"Gueule (mouth) is informal, almost rude. Amuse-gueule is the casual version. In fine dining, restaurants say 'amuse-bouche' instead."},

    {type:"teach", trg:"un cafe-creme", src:"a coffee with cream", pos:"noun", gender:"m",
     note:"Masculine compound noun. An espresso with steamed milk.\nOften shortened to 'un creme'. The classic Parisian morning drink.",
     example:"A: Je voudrais un cafe-creme, s'il vous plait.\nB: Avec un croissant, comme d'habitude?",
     exampleSrc:"A: I'd like a coffee with cream, please.\nB: With a croissant, as usual?",
     funFact:"Ordering 'un creme' in Paris marks you as a local. Tourists say 'cafe au lait'. Both get you the same drink."},

    {type:"teach", trg:"une creperie", src:"a creperie, a crepe restaurant", pos:"noun", gender:"f",
     note:"Feminine noun. A restaurant specializing in crepes.\nMost common in Brittany, but found throughout France.",
     example:"A: Il y a une excellente creperie pres de la gare.\nB: On y va? J'adore les galettes au sarrasin.",
     exampleSrc:"A: There's an excellent creperie near the station.\nB: Shall we go? I love buckwheat galettes.",
     funFact:"In Brittany, savory crepes are called 'galettes' and are made with buckwheat flour. Sweet ones are the 'crepes' everyone knows."},

    {type:"teach", trg:"un porcelet", src:"a piglet", pos:"noun", gender:"m",
     note:"Masculine noun. A young pig.\nPorcelet roti = roast suckling pig. Diminutive of 'porc'.",
     example:"A: Le porcelet roti est la specialite de ce restaurant.\nB: Il est cuit lentement pendant huit heures.",
     exampleSrc:"A: Roast piglet is this restaurant's specialty.\nB: It's slowly cooked for eight hours.",
     funFact:"Porcelet roti is a festive dish in many French regions. In Corsica, it is the centerpiece of village celebrations."},

    {type:"teach", trg:"priser", src:"to value highly, to take snuff", pos:"verb", gender:null,
     note:"Regular -er verb. To appreciate or value something.\nAlso: priser du tabac = to take snuff. Context decides.",
     example:"A: Les gourmets prisent les vins de Bourgogne.\nB: C'est une des regions viticoles les plus reputees.",
     exampleSrc:"A: Gourmets value Burgundy wines highly.\nB: It's one of the most renowned wine regions.",
     funFact:"'Prise de tabac' (pinch of snuff) was the original meaning. The figurative sense of valuing something appeared later."},

    {type:"teach", trg:"les fetes", src:"the celebrations, the holidays", pos:"noun", gender:"f",
     note:"Feminine plural noun. Celebrations, holidays, festivals.\nLes fetes de fin d'annee = year-end holidays. Joyeuses fetes!",
     example:"A: Les fetes de Noel durent une semaine en France.\nB: C'est le moment prefere de toute la famille.",
     exampleSrc:"A: Christmas celebrations last a week in France.\nB: It's the whole family's favorite time.",
     funFact:"The French reveillon (Christmas Eve dinner) can have 7-13 courses. It often starts at 8pm and ends well past midnight."},

    {type:"teach", trg:"le petit-dejeuner", src:"breakfast", pos:"noun", gender:"m",
     note:"Masculine compound noun. The morning meal.\nPetit (small) + dejeuner (lunch). Literally 'small lunch'.",
     example:"A: Le petit-dejeuner francais est leger.\nB: Un cafe, un croissant, et c'est tout.",
     exampleSrc:"A: French breakfast is light.\nB: A coffee, a croissant, and that's it.",
     funFact:"The French breakfast tradition is changing. Many young French people now eat cereal or toast, much to traditionalists' dismay."},

    {type:"teach", trg:"le plat du jour", src:"the daily special", pos:"noun", gender:"m",
     note:"Masculine noun phrase. The special dish of the day in a restaurant.\nUsually the best value on the menu.",
     example:"A: Quel est le plat du jour aujourd'hui?\nB: C'est un boeuf bourguignon, un classique.",
     exampleSrc:"A: What's the daily special today?\nB: It's beef bourguignon, a classic.",
     funFact:"The plat du jour is often what the chef is most excited about. Regulars always ask for it before looking at the menu."},

    {type:"teach", trg:"un binocle", src:"a monocle, pince-nez", pos:"noun", gender:"m",
     note:"Masculine noun. An old-fashioned eyepiece without arms.\nPlural: des binocles (slang for glasses).",
     example:"A: Mon arriere-grand-pere portait un binocle.\nB: Ca lui donnait un air tres distingue.",
     exampleSrc:"A: My great-grandfather wore a monocle.\nB: It gave him a very distinguished look.",
     funFact:"In modern French slang, 'binocles' means glasses. Kids say it playfully. The formal word is 'lunettes'."},

    {type:"teach", trg:"un obus", src:"a shell, an artillery round", pos:"noun", gender:"m",
     note:"Masculine noun. An explosive projectile fired from a cannon.\nAlso used figuratively: une nouvelle tombe comme un obus.",
     example:"A: Des obus de la guerre ont ete retrouves dans le champ.\nB: Le demineur est arrive rapidement.",
     exampleSrc:"A: War shells were found in the field.\nB: The bomb disposal expert arrived quickly.",
     funFact:"Over a century after WWI, French farmers still find unexploded obus. The 'Zone Rouge' in northeastern France remains contaminated."},

    {type:"mc", q:"Quelle est la difference entre 'amuse-gueule' et 'amuse-bouche'?",
     opts:["Amuse-bouche est plus elegant","Amuse-gueule est plus elegant","Ils sont identiques","Amuse-bouche est plus gros"],
     ans:"Amuse-bouche est plus elegant",
     hint:"Gueule is informal for mouth, while b... is the polite term"},

    {type:"fb", s:"Le {1} est la specialite de la Bretagne.",
     a:["creperie"], opts:["creperie","cafe-creme","porcelet","binocle"],
     hint:"This type of restaurant specializes in both sweet crepes and savory galettes",
     sSrc:"The {1} is Brittany's specialty."},

    {type:"mc", q:"Que signifie 'priser' dans un contexte gastronomique?",
     opts:["Melanger des ingredients","Apprecier hautement","Preparer un plat","Couper en morceaux"],
     ans:"Apprecier hautement",
     hint:"The verb describes connoisseurs who highly value fine food or wine"},

    {type:"match", pairs:[
      {trg:"un amuse-gueule", src:"an appetizer"},
      {trg:"un cafe-creme", src:"coffee with cream"},
      {trg:"le petit-dejeuner", src:"breakfast"},
      {trg:"le plat du jour", src:"daily special"}
    ]},

    {type:"fb", s:"Les {1} de fin d'annee reunissent toute la famille.",
     a:["fetes"], opts:["fetes","creperies","binocles","obus"],
     hint:"The plural feminine noun for celebrations, especially around Christmas and New Year",
     sSrc:"The year-end {1} bring the whole family together."},

    {type:"mc", q:"Que trouve-t-on encore dans les champs du nord-est de la France?",
     opts:["Des fossiles de dinosaures","Des meteorites","Des obus de la Premiere Guerre mondiale","Des tresors romains"],
     ans:"Des obus de la Premiere Guerre mondiale",
     hint:"Over a century after the war, unexploded ammunition remains in the soil"},

    {type:"fb", s:"Le {1} francais est traditionnellement leger.",
     a:["petit-dejeuner"], opts:["petit-dejeuner","plat du jour","cafe-creme","amuse-gueule"],
     hint:"The morning meal, literally meaning 'small lunch' in French",
     sSrc:"French {1} is traditionally light."},

    {type:"mc", q:"En argot, 'binocles' signifie:",
     opts:["Des jumelles","Des yeux","Des monocles","Des lunettes"],
     ans:"Des lunettes",
     hint:"The slang term is used playfully by children for everyday eyeglasses"},

    {type:"fb", s:"Les gourmets {1} les produits du terroir.",
     a:["prisent"], opts:["prisent","fetent","cuisinent","servent"],
     hint:"The verb means to highly value or appreciate fine products",
     sSrc:"Gourmets {1} local specialty products."},

    {type:"match", pairs:[
      {trg:"une creperie", src:"a crepe restaurant"},
      {trg:"un porcelet", src:"a piglet"},
      {trg:"les fetes", src:"celebrations"},
      {trg:"un obus", src:"a shell"}
    ]}
  ]
};
export default LESSON_13;
