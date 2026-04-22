// L01: Housing and Property
const LESSON_1 = {
  id:"nlv2_b2g6_l1", title:"Huisvesting en Vastgoed", icon:"\uD83C\uDFE0", xp:15, board:true,
  steps:[
    {type:"intro", title:"Housing and Property",
     desc:"Explore the Dutch housing market, from renting to buying. Learn vocabulary for property types, rental agreements, and the unique challenges of finding a home in the Netherlands.",
     goals:["Learn 10 housing and property terms","Discuss rental and ownership situations","Understand Dutch housing culture"]},

    {type:"teach", trg:"de huizenprijs", src:"the house price", pos:"noun", gender:"c",
     note:"Compound: huizen (houses) + prijs (price).\nAlways plural 'huizen' in the compound.",
     example:"A: De huizenprijs is weer gestegen.\nB: Ja, het is bijna onbetaalbaar geworden.\nA: Vooral in Amsterdam.\nB: Zelfs in kleinere steden stijgt het.",
     exampleSrc:"A: The house price has risen again.\nB: Yes, it has become almost unaffordable.\nA: Especially in Amsterdam.\nB: Even in smaller cities it is rising.",
     funFact:"Dutch house prices have risen over 80% since 2015, making it one of Europe's most heated housing markets."},

    {type:"teach", trg:"de huisbaas", src:"the landlord", pos:"noun", gender:"c",
     note:"Compound: huis (house) + baas (boss).\nFeminine form: huisbaas or verhuurster.",
     example:"A: Mijn huisbaas wil de huur verhogen.\nB: Met hoeveel procent?\nA: Bijna tien procent!\nB: Dat is boven het wettelijke maximum.",
     exampleSrc:"A: My landlord wants to increase the rent.\nB: By how many percent?\nA: Almost ten percent!\nB: That is above the legal maximum.",
     funFact:"In the Netherlands, rent increases are capped by the government. The 'huurcommissie' (rent tribunal) can mediate disputes."},

    {type:"teach", trg:"de huisstijl", src:"the house style, corporate identity", pos:"noun", gender:"c",
     note:"Compound: huis (house) + stijl (style).\nUsed for visual branding, not home decor.",
     example:"A: We moeten de huisstijl vernieuwen.\nB: Goed idee, het logo is verouderd.\nA: En de kleuren passen niet meer.\nB: Laten we een ontwerper inhuren.",
     exampleSrc:"A: We need to renew the corporate identity.\nB: Good idea, the logo is outdated.\nA: And the colors no longer fit.\nB: Let us hire a designer.",
     funFact:"The word 'huisstijl' literally means 'house style' but refers exclusively to branding. For interior design, the Dutch say 'woonstijl'."},

    {type:"teach", trg:"het huisarrest", src:"house arrest", pos:"noun", gender:"n",
     note:"Compound: huis (house) + arrest (detention).\nUsed literally and by parents with children.",
     example:"A: De verdachte heeft huisarrest gekregen.\nB: Met een enkelband?\nA: Ja, hij mag niet naar buiten.\nB: Dat is beter dan de gevangenis.",
     exampleSrc:"A: The suspect has been placed under house arrest.\nB: With an ankle monitor?\nA: Yes, he is not allowed outside.\nB: That is better than prison.",
     funFact:"Dutch parents also use 'huisarrest' informally when grounding their children. Kids understand the drama immediately."},

    {type:"teach", trg:"het huishoudgeld", src:"the housekeeping money", pos:"noun", gender:"n",
     note:"Compound: huishoud(en) (housekeeping) + geld (money).\nBudget for groceries and household items.",
     example:"A: Hoeveel huishoudgeld geven jullie uit per maand?\nB: Ongeveer vierhonderd euro.\nA: Dat is best redelijk.\nB: We letten goed op aanbiedingen.",
     exampleSrc:"A: How much housekeeping money do you spend per month?\nB: About four hundred euros.\nA: That is quite reasonable.\nB: We pay close attention to offers.",
     funFact:"The concept of 'huishoudgeld' is tied to Dutch thriftiness. Many Dutch households still maintain a separate budget for daily expenses."},

    {type:"mc",
     q:"Wat betekent 'de huizenprijs'?",
     opts:["De prijs van woningen","De prijs van meubels","De huurkosten per maand","De verkoopprijs van grond"],
     ans:"De prijs van woningen",
     hint:"Think about the compound: huizen means houses, and p... means price."},

    {type:"teach", trg:"de huizenruil", src:"the house swap", pos:"noun", gender:"c",
     note:"Compound: huizen (houses) + ruil (swap, exchange).\nPopular for holiday exchanges.",
     example:"A: We hebben een huizenruil gedaan voor de vakantie.\nB: Met wie?\nA: Een gezin uit Barcelona.\nB: Wat een leuk concept!",
     exampleSrc:"A: We did a house swap for the holiday.\nB: With whom?\nA: A family from Barcelona.\nB: What a fun concept!",
     funFact:"House swapping is particularly popular among Dutch families. Websites like HomeExchange have large Dutch user bases."},

    {type:"teach", trg:"de hoeksteen", src:"the cornerstone", pos:"noun", gender:"c",
     note:"Compound: hoek (corner) + steen (stone).\nOften used figuratively: the foundation of something.",
     example:"A: Het gezin is de hoeksteen van de samenleving.\nB: Dat is een bekende uitdrukking.\nA: Maar wat betekent het precies?\nB: Dat het gezin de basis vormt.",
     exampleSrc:"A: The family is the cornerstone of society.\nB: That is a well-known expression.\nA: But what does it mean exactly?\nB: That the family forms the foundation.",
     funFact:"The phrase 'hoeksteen van de samenleving' was a core principle of Dutch Christian democratic politics for decades."},

    {type:"teach", trg:"de helikopter", src:"the helicopter", pos:"noun", gender:"c",
     note:"From Greek: helix (spiral) + pteron (wing).\nPronounced hay-lee-KOP-ter in Dutch.",
     example:"A: Er vloog een helikopter over het huis.\nB: Misschien van de politie?\nA: Nee, het was een traumahelikopter.\nB: Die zijn zo belangrijk voor noodgevallen.",
     exampleSrc:"A: A helicopter flew over the house.\nB: Maybe from the police?\nA: No, it was a trauma helicopter.\nB: Those are so important for emergencies.",
     funFact:"The Netherlands has a network of four trauma helicopters that can reach any location in the country within 15 minutes."},

    {type:"fb",
     s:"De {1} wil het huurcontract niet verlengen.",
     a:["huisbaas"],
     opts:["huisbaas","huizenprijs","huisarrest","huizenruil"],
     hint:"The person who owns the property and rents it out to you.",
     sSrc:"The {1} does not want to extend the rental contract."},

    {type:"teach", trg:"de havenaanleg", src:"the harbor construction", pos:"noun", gender:"c",
     note:"Compound: haven (harbor) + aanleg (construction, layout).\nImportant in Dutch maritime history.",
     example:"A: De havenaanleg heeft twee jaar geduurd.\nB: Was het een groot project?\nA: Ja, de hele kustlijn is veranderd.\nB: Dat is typisch Nederlands.",
     exampleSrc:"A: The harbor construction took two years.\nB: Was it a big project?\nA: Yes, the entire coastline changed.\nB: That is typically Dutch.",
     funFact:"Rotterdam's Europoort is the largest port in Europe. Dutch harbor engineering expertise is exported worldwide."},

    {type:"teach", trg:"het havengebied", src:"the harbor area, port district", pos:"noun", gender:"n",
     note:"Compound: haven (harbor) + gebied (area).\nOften being redeveloped into residential areas.",
     example:"A: Het havengebied wordt omgebouwd tot woningen.\nB: Dat gebeurt in veel steden.\nA: In Amsterdam heet het de NDSM-werf.\nB: Daar zijn nu hippe restaurants.",
     exampleSrc:"A: The harbor area is being converted into housing.\nB: That happens in many cities.\nA: In Amsterdam it is called the NDSM wharf.\nB: There are now trendy restaurants there.",
     funFact:"Old Dutch port areas are being transformed into creative hubs. Amsterdam's NDSM and Rotterdam's Kop van Zuid are prime examples."},

    {type:"mc",
     q:"Wat is een 'huizenruil'?",
     opts:["Een woningcorporatie","Een woningruil voor vakantie","Een hypotheekovereenkomst","Een verhuisbedrijf"],
     ans:"Een woningruil voor vakantie",
     hint:"The compound combines houses with exchange. Think about what you do on holiday."},

    {type:"match", pairs:[
      {trg:"huisbaas", src:"landlord"},
      {trg:"huisstijl", src:"corporate identity"},
      {trg:"hoeksteen", src:"cornerstone"},
      {trg:"havengebied", src:"port district"}
    ]},

    {type:"fb",
     s:"Het gezin is de {1} van de samenleving.",
     a:["hoeksteen"],
     opts:["hoeksteen","huisstijl","havenaanleg","helikopter"],
     hint:"A stone placed at the corner of a building, used here as a metaphor for foundation.",
     sSrc:"The family is the {1} of society."},

    {type:"mc",
     q:"Wat is een 'traumahelikopter'?",
     opts:["Een helikopter voor toeristen","Een politiehelikopter","Een helikopter voor medische noodgevallen","Een militaire helikopter"],
     ans:"Een helikopter voor medische noodgevallen",
     hint:"Trauma refers to serious injuries. What kind of helicopter would respond to those?"},

    {type:"match", pairs:[
      {trg:"huizenprijs", src:"house price"},
      {trg:"huishoudgeld", src:"housekeeping money"},
      {trg:"huisarrest", src:"house arrest"},
      {trg:"havenaanleg", src:"harbor construction"}
    ]}
  ]
};
export default LESSON_1;
