const LESSON_10 = {
  id:"frv2_b2g3_l10", title:"Nature et environnement", icon:"\u{1F33F}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Nature et environnement",
     desc:"Learn vocabulary for discussing nature, environmental challenges, and ecological issues in French.",
     goals:["Learn 17 B2 nature and environment words","Discuss climate and ecological challenges","Express views on environmental policy"]},

    {type:"teach", trg:"une arête", src:"a ridge, a fishbone", pos:"noun", gender:"f",
     note:"Feminine noun. The sharp edge of a mountain or a thin bone in fish.",
     example:"A: L'arête de cette montagne est dangereuse.\nB: Seuls les alpinistes expérimentés y vont.",
     exampleSrc:"A: The ridge of this mountain is dangerous.\nB: Only experienced mountaineers go there.",
     funFact:"At the dinner table, 'attention aux aretes!' (watch out for fishbones!) is one of the most common French mealtime warnings."},

    {type:"teach", trg:"un embrun", src:"sea spray", pos:"noun", gender:"m",
     note:"Masculine noun. Fine spray from waves. Usually plural: les embruns.",
     example:"A: Les embruns nous ont trempés sur la digue.\nB: C'est le charme de la Bretagne en hiver.",
     exampleSrc:"A: The sea spray soaked us on the seawall.\nB: That's the charm of Brittany in winter.",
     funFact:"Embrun is also a town in the Alps. The noun comes from Italian 'imbruno' meaning mist. French sailors distinguish embruns from simple vagues (waves)."},

    {type:"teach", trg:"la dévastation", src:"devastation", pos:"noun", gender:"f",
     note:"Feminine noun. Widespread destruction of land or property.",
     example:"A: La dévastation causée par la tempête est considérable.\nB: Des milliers de personnes sont sans abri.",
     exampleSrc:"A: The devastation caused by the storm is considerable.\nB: Thousands of people are homeless.",
     funFact:"The storm of December 1999 caused unprecedented devastation in France, toppling millions of trees including 10,000 in Versailles alone."},

    {type:"teach", trg:"la coexistence", src:"coexistence", pos:"noun", gender:"f",
     note:"Feminine noun. Living together peacefully despite differences.",
     example:"A: La coexistence entre l'homme et la nature est fragile.\nB: Il faut mieux protéger les espaces naturels.",
     exampleSrc:"A: The coexistence between humans and nature is fragile.\nB: We need to better protect natural spaces.",
     funFact:"'Coexistence pacifique' was a key Cold War term in French diplomacy. Now it is used widely for biodiversity and urban planning."},

    {type:"mc",
     q:"Quel mot désigne les fines gouttelettes d'eau de mer portées par le vent ?",
     opts:["les embruns","les arêtes","les copeaux","les bordées"],
     ans:"les embruns",
     hint:"This word describes the fine spray that hits you when standing near crashing waves. Common in Brittany."},

    {type:"teach", trg:"une bordée", src:"a volley, a broadside", pos:"noun", gender:"f",
     note:"Feminine noun. A naval broadside, or a burst of something (wind, insults).",
     example:"A: Une bordée de neige est tombée cette nuit.\nB: Les routes sont complètement bloquées.",
     exampleSrc:"A: A heavy fall of snow came down last night.\nB: The roads are completely blocked.",
     funFact:"Originally a naval term for firing all cannons on one side. 'Une bordee d'injures' means a volley of insults hurled at someone."},

    {type:"teach", trg:"enrayer", src:"to halt, to check", pos:"verb", gender:null,
     note:"Verb. To stop the progression of something harmful.",
     example:"A: Il faut enrayer la déforestation.\nB: Des mesures urgentes sont nécessaires.",
     exampleSrc:"A: We must halt deforestation.\nB: Urgent measures are needed.",
     funFact:"Originally meant to stop a wheel (from 'raie' meaning groove). Now used figuratively for stopping epidemics, crises, or any harmful spread."},

    {type:"teach", trg:"dénaturer", src:"to distort, to alter the nature of", pos:"verb", gender:null,
     note:"Verb. To change something so it loses its original character.",
     example:"A: Les pesticides dénaturent les sols.\nB: L'agriculture biologique est une alternative.",
     exampleSrc:"A: Pesticides denature the soils.\nB: Organic farming is an alternative.",
     funFact:"'Denaturer les faits' means to distort the facts. In chemistry, 'alcool denature' is denatured alcohol made undrinkable."},

    {type:"teach", trg:"centripète", src:"centripetal", pos:"adj", gender:null,
     note:"Adjective. Moving toward a center point. Opposite of centrifuge.",
     example:"A: La force centripète maintient la Lune en orbite.\nB: Sans elle, la Lune s'éloignerait.",
     exampleSrc:"A: Centripetal force keeps the Moon in orbit.\nB: Without it, the Moon would drift away.",
     funFact:"From Latin 'centrum' + 'petere' (to seek). French physics uses the same Latin-based terms as English, making science texts surprisingly readable."},

    {type:"fb",
     s:"Il faut {1} la propagation de cette maladie avant qu'il ne soit trop tard.",
     a:["enrayer"],
     opts:["enrayer","dénaturer","dessécher","enlaidir"],
     hint:"This verb means to stop or halt the spread of something harmful. Originally about stopping a wheel.",
     sSrc:"We must {1} the spread of this disease before it is too late."},

    {type:"teach", trg:"l'adduction", src:"piping, water supply", pos:"noun", gender:"f",
     note:"Feminine noun. The system of bringing water to a town or building.",
     example:"A: L'adduction d'eau est un problème dans les zones rurales.\nB: Certains villages manquent encore d'eau courante.",
     exampleSrc:"A: Water supply is a problem in rural areas.\nB: Some villages still lack running water.",
     funFact:"French 'adduction d'eau' infrastructure was a major public works project of the Third Republic (1870-1940), bringing clean water to every commune."},

    {type:"teach", trg:"une accélération", src:"an acceleration", pos:"noun", gender:"f",
     note:"Feminine noun. An increase in speed or the rate of change.",
     example:"A: L'accélération du changement climatique inquiète les scientifiques.\nB: Les données sont alarmantes.",
     exampleSrc:"A: The acceleration of climate change worries scientists.\nB: The data is alarming.",
     funFact:"France's TGV held the world rail speed record (574.8 km/h) in 2007. The 'acceleration' of high-speed rail transformed French geography."},

    {type:"teach", trg:"l'ascendance", src:"ancestry, ascendancy", pos:"noun", gender:"f",
     note:"Feminine noun. One's line of ancestors, or influence over others.",
     example:"A: Son ascendance est d'origine alsacienne.\nB: Cela explique son nom de famille.",
     exampleSrc:"A: Her ancestry is of Alsatian origin.\nB: That explains her last name.",
     funFact:"In French astrology, 'l'ascendant' is your rising sign. Asking 'Quel est ton ascendant?' is common in French social conversation."},

    {type:"mc",
     q:"Quel verbe signifie changer la nature de quelque chose, le rendre méconnaissable ?",
     opts:["dénaturer","enrayer","accélérer","coexister"],
     ans:"dénaturer",
     hint:"This verb means to alter something so it loses its original nature or character."},

    {type:"teach", trg:"un exutoire", src:"an outlet, a release", pos:"noun", gender:"m",
     note:"Masculine noun. A way to release pent-up emotion or pressure.",
     example:"A: Le sport est un excellent exutoire.\nB: Ça aide à évacuer le stress.",
     exampleSrc:"A: Sports are an excellent outlet.\nB: It helps release stress.",
     funFact:"From Latin 'exutorium'. Originally a medical term for a wound drainage. Now mainly figurative for emotional or physical release."},

    {type:"teach", trg:"l'extrémité", src:"the end, the extremity", pos:"noun", gender:"f",
     note:"Feminine noun. The farthest point of something. Plural: extremites (hands and feet).",
     example:"A: Nous sommes à l'extrémité nord de l'île.\nB: D'ici, on voit le continent.",
     exampleSrc:"A: We are at the northern tip of the island.\nB: From here, you can see the mainland.",
     funFact:"In medicine, 'les extremites' means hands and feet. 'Etre pousse a l'extremite' means to be driven to desperate measures."},

    {type:"teach", trg:"un accrochage", src:"a collision, a clash", pos:"noun", gender:"m",
     note:"Masculine noun. A minor collision or a verbal confrontation.",
     example:"A: Il y a eu un accrochage entre deux voitures.\nB: Heureusement, personne n'est blessé.",
     exampleSrc:"A: There was a fender-bender between two cars.\nB: Fortunately, no one is hurt.",
     funFact:"In art, 'accrochage' means hanging paintings in a gallery. A 'jour d'accrochage' is when a new exhibition is being set up."},

    {type:"match", pairs:[
      {trg:"arête", src:"ridge"},
      {trg:"embrun", src:"sea spray"},
      {trg:"dévastation", src:"devastation"},
      {trg:"exutoire", src:"outlet"},
      {trg:"accrochage", src:"collision"}
    ]},

    {type:"fb",
     s:"L'{1} d'eau potable reste un défi majeur dans certaines régions du monde.",
     a:["adduction"],
     opts:["adduction","accélération","ascendance","accumulation"],
     hint:"This noun specifically refers to the piping or infrastructure that brings water to a community.",
     sSrc:"The {1} of drinking water remains a major challenge in some regions of the world."}
  ]
};
export default LESSON_10;
