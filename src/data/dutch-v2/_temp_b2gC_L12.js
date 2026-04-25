// L12: Industrie en Economie. Industry and Economy
const LESSON_12 = {
  id:"nlv2_b2gC_l12", title:"Industrie en Economie", icon:"\u{1F3ED}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Industry and Economy",
     desc:"The Netherlands has a strong, export-driven economy. Master vocabulary related to industry, trade, and economic structures to follow Dutch business news.",
     goals:["Master 10 industry and economy terms","Discuss economic structures and trade","Navigate business and policy vocabulary"]},

    {type:"teach", trg:"de industriestad", src:"the industrial city", pos:"noun", gender:"c",
     note:"Common gender (de). Industrie (industry) + stad (city).\nEindhoven and Rotterdam are prime examples.",
     example:"A: Rotterdam is een echte industriestad.\nB: Ja, met de grootste haven van Europa.\nA: Er werken duizenden mensen in de logistiek.\nB: En het wordt steeds moderner.",
     exampleSrc:"A: Rotterdam is a true industrial city.\nB: Yes, with the largest port in Europe.\nA: Thousands of people work in logistics.\nA: And it's becoming more and more modern.",
     funFact:"Rotterdam's port is the largest in Europe and was the largest in the world until 2004. It handles over 450 million tonnes of cargo annually."},

    {type:"teach", trg:"de kennisstad", src:"the knowledge city", pos:"noun", gender:"c",
     note:"Common gender (de). Kennis (knowledge) + stad (city).\nCities focused on tech and education.",
     example:"A: Eindhoven is de kennisstad van Nederland.\nB: Door de High Tech Campus?\nA: Ja, en de Technische Universiteit.\nB: Er werken heel veel ingenieurs.",
     exampleSrc:"A: Eindhoven is the knowledge city of the Netherlands.\nB: Because of the High Tech Campus?\nA: Yes, and the Technical University.\nB: A lot of engineers work there.",
     funFact:"Eindhoven's High Tech Campus hosts over 235 companies and 12,000 researchers. It is nicknamed 'the smartest square kilometre in Europe'."},

    {type:"teach", trg:"de kansarmoede", src:"poverty due to lack of opportunity", pos:"noun", gender:"c",
     note:"Common gender (de). Kans (chance/opportunity) + armoede (poverty).\nPoverty caused by structural disadvantage.",
     example:"A: Kansarmoede treft vooral kinderen.\nB: In welke gebieden?\nA: Vooral in de grote steden.\nB: Het onderwijs kan helpen om de cyclus te doorbreken.",
     exampleSrc:"A: Poverty of opportunity mainly affects children.\nB: In which areas?\nA: Mainly in the big cities.\nB: Education can help break the cycle.",
     funFact:"'Kansarmoede' is a specifically Flemish/Dutch concept: poverty not just of money, but of chances and opportunities. It is used in social policy."},

    {type:"teach", trg:"het bauxiet", src:"bauxite", pos:"noun", gender:"n",
     note:"Neuter (het bauxiet). The ore from which aluminium is made.\nNamed after Les Baux, France.",
     example:"A: Bauxiet wordt gebruikt om aluminium te maken.\nB: Waar komt het vandaan?\nA: Vooral uit tropische landen.\nB: Het is een belangrijke grondstof.",
     exampleSrc:"A: Bauxite is used to make aluminium.\nB: Where does it come from?\nA: Mainly from tropical countries.\nB: It is an important raw material.",
     funFact:"The Netherlands processes bauxite into aluminium at facilities in Delfzijl. Suriname, a former Dutch colony, was once a major bauxite producer."},

    {type:"mc",
     q:"Welke stad wordt 'de slimste vierkante kilometer van Europa' genoemd?",
     opts:["Eindhoven","Utrecht","Amsterdam","Den Haag"],
     ans:"Eindhoven",
     hint:"Home to the High Tech Campus and a major Technical University. A southern city."},

    {type:"teach", trg:"de festivalorganisator", src:"the festival organiser", pos:"noun", gender:"n",
     note:"Common gender (de). Festival + organisator (organiser).\n'Organiseren' = to organise.",
     example:"A: Mijn zus is festivalorganisator.\nB: Wat voor festivals?\nA: Muziekfestivals in heel Nederland.\nB: Wat een gave baan!",
     exampleSrc:"A: My sister is a festival organiser.\nB: What kind of festivals?\nA: Music festivals all over the Netherlands.\nB: What a cool job!",
     funFact:"The Netherlands hosts over 900 music festivals per year, more per capita than almost any other country. Lowlands and Pinkpop are the most famous."},

    {type:"teach", trg:"de hoofdsponsor", src:"the main sponsor", pos:"noun", gender:"c",
     note:"Common gender (de). Hoofd (main/head) + sponsor.\n'Het hoofdsponsorschap' = main sponsorship.",
     example:"A: Wie is de hoofdsponsor van het evenement?\nB: Een groot telecombedrijf.\nA: Hoeveel hebben ze betaald?\nB: Dat is vertrouwelijk, maar het is veel.",
     exampleSrc:"A: Who is the main sponsor of the event?\nB: A large telecom company.\nA: How much did they pay?\nB: That's confidential, but it's a lot.",
     funFact:"Dutch football clubs depend heavily on sponsors. The shirt sponsor ('shirtsponsor') is the most visible and most expensive placement."},

    {type:"teach", trg:"de gelegenheidsonderneming", src:"the pop-up business / occasional enterprise", pos:"noun", gender:"c",
     note:"Common gender (de). Gelegenheid (occasion) + onderneming (enterprise).\nA business that operates temporarily.",
     example:"A: Het is een gelegenheidsonderneming voor Koningsdag.\nB: Wat verkopen ze?\nA: Oranje hoedjes en vlaggetjes.\nB: Slim, dat verkoopt altijd goed!",
     exampleSrc:"A: It's a pop-up business for King's Day.\nB: What do they sell?\nA: Orange hats and little flags.\nB: Smart, that always sells well!",
     funFact:"On Koningsdag, the whole country becomes a giant flea market. Everyone, including children, can sell without a permit. A unique Dutch tradition."},

    {type:"fb",
     s:"Rotterdam is met zijn enorme haven een typische {1}.",
     a:["industriestad"],
     opts:["industriestad","kennisstad","kansarmoede","gelegenheidsonderneming"],
     hint:"A city whose identity revolves around manufacturing, logistics, and heavy industry.",
     sSrc:"Rotterdam with its enormous port is a typical {1}."},

    {type:"teach", trg:"de kortheid", src:"the brevity / shortness", pos:"noun", gender:"c",
     note:"Common gender (de). From 'kort' (short).\n'In het kort' = in short/briefly.",
     example:"A: De kortheid van zijn toespraak viel op.\nB: Ja, hij sprak maar vijf minuten.\nA: Normaal praat hij een uur.\nB: Misschien had hij haast.",
     exampleSrc:"A: The brevity of his speech was noticeable.\nB: Yes, he only spoke for five minutes.\nA: Normally he talks for an hour.\nB: Maybe he was in a hurry.",
     funFact:"The Dutch value directness and brevity: 'Doe maar normaal, dan doe je al gek genoeg' (Act normal, that's crazy enough). No unnecessary words."},

    {type:"teach", trg:"de kweken", src:"to cultivate / to breed / to grow", pos:"verb", gender:null,
     note:"'Kweken' = to grow/breed. Separable.\n'De kweker' = the grower. 'De kwekerij' = the nursery.",
     example:"A: Mijn buurman kweekt zijn eigen tomaten.\nB: In een kas?\nA: Nee, gewoon in de achtertuin.\nB: Wat leuk, ik wil dat ook proberen.",
     exampleSrc:"A: My neighbour grows his own tomatoes.\nB: In a greenhouse?\nA: No, just in the back garden.\nB: How nice, I want to try that too.",
     funFact:"The Netherlands is the second-largest agricultural exporter in the world. 'Kwekerijen' (nurseries) grow flowers, plants, and vegetables at industrial scale."},

    {type:"mc",
     q:"Wat is 'kansarmoede'?",
     opts:["Armoede door luiheid","Armoede door gebrek aan kansen en mogelijkheden","Armoede in een arm land","Tijdelijke armoede"],
     ans:"Armoede door gebrek aan kansen en mogelijkheden",
     hint:"Kans (opportunity) + a... (poverty). Not just lack of money, but lack of chances."},

    {type:"fb",
     s:"Mijn buurman {1} zijn eigen groenten in de achtertuin.",
     a:["kweekt"],
     opts:["kweekt","koopt","kookt","kent"],
     hint:"To cultivate or grow plants yourself, from seed to harvest.",
     sSrc:"My neighbour {1} his own vegetables in the back garden."},

    {type:"match", pairs:[
      {trg:"industriestad", src:"industrial city"},
      {trg:"kennisstad", src:"knowledge city"},
      {trg:"kansarmoede", src:"poverty of opportunity"},
      {trg:"bauxiet", src:"bauxite"}
    ]},

    {type:"mc",
     q:"Op Koningsdag mag iedereen spullen verkopen zonder vergunning. Dit heet:",
     opts:["Een vakbond","Een handelspost","Een gelegenheidsonderneming","Een illegale markt"],
     ans:"Een gelegenheidsonderneming",
     hint:"A temporary, occasion-based enterprise. Pop-up selling on a special day."},

    {type:"fb",
     s:"De {1} van zijn verhaal was opvallend, hij was in twee minuten klaar.",
     a:["kortheid"],
     opts:["kortheid","kennisstad","kansarmoede","kweker"],
     hint:"The quality of being short or brief. A noun formed from the adjective 'kort'.",
     sSrc:"The {1} of his story was noticeable, he was done in two minutes."},

    {type:"match", pairs:[
      {trg:"festivalorganisator", src:"festival organiser"},
      {trg:"hoofdsponsor", src:"main sponsor"},
      {trg:"gelegenheidsonderneming", src:"pop-up business"},
      {trg:"kortheid", src:"brevity"}
    ]},

    {type:"mc",
     q:"Nederland is qua landbouwexport nummer:",
     opts:["Vijf","Tien","Een","Twee"],
     ans:"Twee",
     hint:"A tiny country that punches far above its weight. Only the USA exports more agricultural products."}
  ]
};
export default LESSON_12;
