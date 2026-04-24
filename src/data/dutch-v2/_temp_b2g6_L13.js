// L13: Income, Finance, and the Economy
const LESSON_13 = {
  id:"nlv2_b2g6_l13", title:"Inkomen en Economie", icon:"\uD83D\uDCB0", xp:15, board:true,
  steps:[
    {type:"intro", title:"Income, Finance, and the Economy",
     desc:"Learn vocabulary about income, financial resources, and economic concepts. The Netherlands has a complex economy with strong social safety nets.",
     goals:["Learn 10 financial and economic terms","Discuss income and money matters","Understand Dutch economic vocabulary"]},

    {type:"teach", trg:"het hoofdinkomen", src:"the main income", pos:"noun", gender:"n",
     note:"Compound: hoofd (main) + inkomen (income).\nThe primary source of earnings.",
     example:"A: Haar hoofdinkomen komt van haar baan als arts.\nB: Heeft ze ook een bijbaan?\nA: Ja, ze schrijft ook boeken.\nB: Dat is een mooie combinatie.",
     exampleSrc:"A: Her main income comes from her job as a doctor.\nB: Does she also have a side job?\nA: Yes, she also writes books.\nB: That is a nice combination.",
     funFact:"Over 50% of Dutch workers work part-time, the highest rate in Europe. Many have multiple income sources."},

    {type:"teach", trg:"het geldmiddel", src:"the financial resource, the funds", pos:"noun", gender:"n",
     note:"Compound: geld (money) + middel (means, resource).\nUsually plural: geldmiddelen.",
     example:"A: De gemeente heeft onvoldoende geldmiddelen.\nB: Voor welk project?\nA: Het nieuwe zwembad.\nB: Misschien kunnen ze subsidie aanvragen.",
     exampleSrc:"A: The municipality has insufficient funds.\nB: For which project?\nA: The new swimming pool.\nB: Maybe they can apply for a subsidy.",
     funFact:"Dutch municipalities depend heavily on national government funding. The 'gemeentefonds' (municipality fund) distributes billions annually."},

    {type:"teach", trg:"de geldlust", src:"the greed for money, the money lust", pos:"noun", gender:"c",
     note:"Compound: geld (money) + lust (desire, craving).\nA negative word for excessive desire for wealth.",
     example:"A: Zijn geldlust kent geen grenzen.\nB: Hij wil altijd meer.\nA: Geld maakt niet gelukkig.\nB: Maar armoede ook niet.",
     exampleSrc:"A: His greed for money knows no bounds.\nB: He always wants more.\nA: Money does not make you happy.\nB: But poverty does not either.",
     funFact:"The Dutch have a complex relationship with money. Showing wealth openly is considered 'opschepperig' (boastful) and socially unacceptable."},

    {type:"teach", trg:"de gulden", src:"the guilder (former Dutch currency)", pos:"noun", gender:"c",
     note:"Also an adjective meaning 'golden'.\nThe Dutch guilder was replaced by the euro in 2002.",
     example:"A: Mijn oma praat nog steeds over guldens.\nB: Hoeveel is een gulden waard?\nA: Ongeveer 45 eurocent.\nB: Sommigen missen de gulden nog steeds.",
     exampleSrc:"A: My grandmother still talks about guilders.\nB: How much is a guilder worth?\nA: About 45 euro cents.\nB: Some still miss the guilder.",
     funFact:"The guilder (gulden) was one of Europe's most stable currencies for centuries. Many older Dutch people still mentally convert euros to guilders."},

    {type:"teach", trg:"het genotmiddel", src:"the stimulant, the intoxicant", pos:"noun", gender:"n",
     note:"Compound: genot (pleasure) + middel (substance, means).\nCovers alcohol, tobacco, drugs, caffeine.",
     example:"A: Koffie is technisch gezien een genotmiddel.\nB: Net als alcohol en tabak?\nA: Ja, alles wat plezier of energie geeft.\nB: De Nederlanders drinken veel koffie.",
     exampleSrc:"A: Coffee is technically a stimulant.\nB: Just like alcohol and tobacco?\nA: Yes, everything that gives pleasure or energy.\nB: The Dutch drink a lot of coffee.",
     funFact:"The Dutch are among the top coffee drinkers in the world, averaging about 8.5 kg of coffee per person per year."},

    {type:"mc",
     q:"Wat is een 'genotmiddel'?",
     opts:["Een stof die plezier of stimulatie geeft","Een medicijn tegen pijn","Een soort voedingssupplement","Een financieel instrument"],
     ans:"Een stof die plezier of stimulatie geeft",
     hint:"'Genot' means pleasure and 'middel' means substance. Think of coffee, alcohol, and tobacco."},

    {type:"teach", trg:"de gelegenheidsonderneming", src:"the ad hoc enterprise, the opportunistic venture", pos:"noun", gender:"c",
     note:"Compound: gelegenheid (opportunity) + onderneming (enterprise).\nA business started for a specific occasion.",
     example:"A: Tijdens Koningsdag openen veel gelegenheidsondernemingen.\nB: Zoals kraampjes op de vrijmarkt?\nA: Precies, iedereen wordt even ondernemer.\nB: Dat is typisch Nederlands.",
     exampleSrc:"A: During King's Day many ad hoc enterprises open.\nB: Like stalls at the free market?\nA: Exactly, everyone becomes an entrepreneur for a day.\nB: That is typically Dutch.",
     funFact:"On King's Day, the entire country becomes a 'vrijmarkt' (free market). Children sell old toys, adults sell food, and no permit is needed."},

    {type:"teach", trg:"de franc", src:"the franc (currency)", pos:"noun", gender:"c",
     note:"From Francorum Rex (King of the Franks).\nUsed in Belgium until the euro was introduced.",
     example:"A: In Belgie betaalden ze vroeger met francs.\nB: Tot wanneer?\nA: Tot 2002, toen kwam de euro.\nB: Net als de gulden in Nederland.",
     exampleSrc:"A: In Belgium they used to pay with francs.\nB: Until when?\nA: Until 2002, then the euro came.\nB: Just like the guilder in the Netherlands.",
     funFact:"The Belgian franc was worth about 1/40 of a Dutch guilder. Cross-border shopping was common because of price differences."},

    {type:"teach", trg:"de drop", src:"the licorice (Dutch candy)", pos:"noun", gender:"c",
     note:"A uniquely Dutch passion. Both sweet and salty varieties.\nThe Netherlands consumes more licorice per capita than any other country.",
     example:"A: Wil je een dropje?\nB: Is het zoete of zoute drop?\nA: Dubbelzoute drop.\nB: Lekker! Buitenlanders vinden het vies.",
     exampleSrc:"A: Would you like a piece of licorice?\nB: Is it sweet or salty licorice?\nA: Double-salted licorice.\nB: Delicious! Foreigners think it is disgusting.",
     funFact:"The Dutch eat over 32 million kilos of drop per year. There are more than 80 different varieties, from sweet to extremely salty."},

    {type:"fb",
     s:"De {1} was de Nederlandse munt voor de euro.",
     a:["gulden"],
     opts:["gulden","franc","mark","kroon"],
     hint:"The former Dutch currency, also an adjective meaning 'golden'. Replaced by the euro in 2002.",
     sSrc:"The {1} was the Dutch currency before the euro."},

    {type:"teach", trg:"de feministe", src:"the feminist (female)", pos:"noun", gender:"c",
     note:"From French 'feministe'. The '-e' ending marks feminine.\nMale: feminist.",
     example:"A: Zij is een bekende feministe.\nB: Waar zet ze zich voor in?\nA: Gelijke betaling en kansen.\nB: Dat is nog steeds belangrijk.",
     exampleSrc:"A: She is a well-known feminist.\nB: What does she campaign for?\nA: Equal pay and opportunities.\nB: That is still important.",
     funFact:"Aletta Jacobs was the first Dutch female university student (1871) and a pioneering feminist. She fought for women's suffrage, achieved in 1919."},

    {type:"teach", trg:"fascistisch", src:"fascist", pos:"adj", gender:null,
     note:"From Italian 'fascismo' (bundle, group).\nUsed historically and in political analysis.",
     example:"A: Het fascistische regime viel in 1945.\nB: Na de bevrijding van Nederland.\nA: Dat was een donkere periode.\nB: We mogen het nooit vergeten.",
     exampleSrc:"A: The fascist regime fell in 1945.\nB: After the liberation of the Netherlands.\nA: That was a dark period.\nB: We should never forget it.",
     funFact:"May 4th is Dodenherdenking (Remembrance Day) and May 5th is Bevrijdingsdag (Liberation Day) in the Netherlands, commemorating WWII."},

    {type:"mc",
     q:"Hoeveel drop eten Nederlanders per jaar?",
     opts:["Drop is niet populair in Nederland","Meer dan 30 miljoen kilo","Ongeveer 5 miljoen kilo","Minder dan 1 miljoen kilo"],
     ans:"Meer dan 30 miljoen kilo",
     hint:"The Netherlands is the world's largest consumer of licorice per capita. The number is staggeringly high."},

    {type:"match", pairs:[
      {trg:"hoofdinkomen", src:"main income"},
      {trg:"geldmiddel", src:"financial resource"},
      {trg:"gulden", src:"guilder"},
      {trg:"genotmiddel", src:"stimulant"}
    ]},

    {type:"fb",
     s:"Zijn {1} kent geen grenzen, hij wil altijd meer verdienen.",
     a:["geldlust"],
     opts:["geldlust","gulden","geldmiddel","genotmiddel"],
     hint:"An excessive desire for money. Compound of 'geld' (money) and 'lust' (desire).",
     sSrc:"His {1} knows no bounds, he always wants to earn more."},

    {type:"mc",
     q:"Wat is een 'gelegenheidsonderneming'?",
     opts:["Een overheidsinstelling","Een bank voor kleine leningen","Een tijdelijk bedrijf voor een specifieke gelegenheid","Een groot internationaal bedrijf"],
     ans:"Een tijdelijk bedrijf voor een specifieke gelegenheid",
     hint:"Think of the stalls on King's Day. A temporary business set up for a specific occasion or opportunity."}
  ]
};
export default LESSON_13;
