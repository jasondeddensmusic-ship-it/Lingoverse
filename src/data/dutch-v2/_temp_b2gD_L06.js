// L06: Handel en Koopmanschap. Trade and Commerce
const LESSON_6 = {
  id:"nlv2_b2gD_l06", title:"Handel en Koopmanschap", icon:"\u{1F4B0}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Trade and Commerce",
     desc:"The Dutch have been traders for centuries. Master vocabulary about commerce, business dealings, and the merchant spirit that defines Dutch culture.",
     goals:["Master 10 trade and commerce terms","Discuss business and merchant culture","Navigate commercial vocabulary"]},

    {type:"teach", trg:"het handelscontact", src:"the trade contact / business contact", pos:"noun", gender:"n",
     note:"Neuter (het). Handel (trade) + contact.\n'Handelscontacten onderhouden' = to maintain business contacts.",
     example:"A: Heb je goede handelscontacten in China?\nB: Ja, via een partner in Shanghai.\nA: Dat is belangrijk voor de export.\nB: Relaties zijn alles in de zakenwereld.",
     exampleSrc:"A: Do you have good trade contacts in China?\nB: Yes, through a partner in Shanghai.\nA: That's important for exports.\nB: Relationships are everything in the business world.",
     funFact:"The Dutch have the saying 'handel is handel' (business is business), reflecting their pragmatic approach to commerce that dates back centuries."},

    {type:"teach", trg:"de koopmansmoraal", src:"the merchant morality / trader's ethics", pos:"noun", gender:"c",
     note:"Common gender (de). Koopman (merchant) + moraal (morality).\nOften used critically about profit-driven ethics.",
     example:"A: De koopmansmoraal is soms twijfelachtig.\nB: Wat bedoel je precies?\nA: Winst boven alles, ook boven principes.\nB: Dat is helaas een oud probleem.",
     exampleSrc:"A: The merchant morality is sometimes questionable.\nB: What do you mean exactly?\nA: Profit above everything, even above principles.\nB: That's unfortunately an old problem.",
     funFact:"The term 'koopmansmoraal' is often used critically in Dutch debates about colonial history, referring to how profit justified exploitation."},

    {type:"teach", trg:"de koopmanstraditie", src:"the merchant tradition / trading tradition", pos:"noun", gender:"c",
     note:"Common gender (de). Koopman (merchant) + traditie (tradition).\n'Een lange koopmanstraditie' = a long trading tradition.",
     example:"A: Amsterdam heeft een lange koopmanstraditie.\nB: Sinds de Gouden Eeuw?\nA: Eigenlijk al sinds de middeleeuwen.\nB: De stad is gebouwd op handel.",
     exampleSrc:"A: Amsterdam has a long merchant tradition.\nB: Since the Golden Age?\nA: Actually since the Middle Ages.\nB: The city is built on trade.",
     funFact:"Rotterdam's harbour is Europe's largest port and the world's busiest outside Asia. The Dutch trading tradition continues to drive the economy."},

    {type:"teach", trg:"de krachtmeting", src:"the trial of strength / power struggle", pos:"noun", gender:"c",
     note:"Common gender (de). Kracht (strength/power) + meting (measurement).\n'Een politieke krachtmeting' = a political power struggle.",
     example:"A: De onderhandelingen werden een echte krachtmeting.\nB: Wie won er uiteindelijk?\nA: Geen van beiden, het werd een compromis.\nB: Dat is typisch Nederlands.",
     exampleSrc:"A: The negotiations became a real power struggle.\nB: Who won in the end?\nA: Neither side, it became a compromise.\nB: That's typically Dutch.",
     funFact:"The Dutch consensus model ('poldermodel') means most conflicts end in compromise. A 'krachtmeting' that produces a winner and loser is considered a failure."},

    {type:"mc",
     q:"Wat betekent 'koopmansmoraal'?",
     opts:["De ethiek van handelaren, vaak gericht op winst","De regels van een beurs","De wet op handel","Het moraal van zeelieden"],
     ans:"De ethiek van handelaren, vaak gericht op winst",
     hint:"A compound of 'merchant' + 'morality'. It describes the ethical standards, often profit-driven, associated with traders."},

    {type:"teach", trg:"de gelegenheidsonderneming", src:"the opportunistic venture / ad hoc business", pos:"noun", gender:"c",
     note:"Common gender (de). Gelegenheid (occasion/opportunity) + onderneming (enterprise).\nA business set up for a specific opportunity.",
     example:"A: Het was een gelegenheidsonderneming, geen echt bedrijf.\nB: Hoelang bestond het?\nA: Drie maanden, voor een groot evenement.\nB: En daarna opgeheven?",
     exampleSrc:"A: It was an opportunistic venture, not a real company.\nB: How long did it exist?\nA: Three months, for a big event.\nB: And dissolved afterwards?",
     funFact:"Dutch law makes it very easy to start a business. You can register a 'eenmanszaak' (sole proprietorship) at the Chamber of Commerce in under an hour."},

    {type:"teach", trg:"de klerk", src:"the clerk", pos:"noun", gender:"c",
     note:"Common gender (de). From French 'clerc' (clerk).\n'Een kantoorklerk' = an office clerk.",
     example:"A: Mijn overgrootvader was klerk bij een handelsbank.\nB: Dat was een respectabel beroep.\nA: Hij schreef alles met de hand.\nB: Geen computers in die tijd!",
     exampleSrc:"A: My great-grandfather was a clerk at a trading bank.\nB: That was a respectable profession.\nA: He wrote everything by hand.\nB: No computers in those days!",
     funFact:"The word 'klerk' entered Dutch via French. In medieval times, clerks were among the few literate people, often serving both church and commerce."},

    {type:"teach", trg:"het kantoorleven", src:"the office life", pos:"noun", gender:"n",
     note:"Neuter (het). Kantoor (office) + leven (life).\n'Het dagelijkse kantoorleven' = daily office life.",
     example:"A: Het kantoorleven is niet voor iedereen.\nB: Ik word gek van acht uur stilzitten.\nA: Sinds corona werken veel mensen thuis.\nB: Hybride werken is het nieuwe normaal.",
     exampleSrc:"A: Office life isn't for everyone.\nB: I go crazy sitting still for eight hours.\nA: Since corona, many people work from home.\nB: Hybrid working is the new normal.",
     funFact:"The Netherlands has the highest rate of part-time work in Europe. Many Dutch people work 4 days a week, with Friday off being very common."},

    {type:"fb",
     s:"De onderhandelingen tussen de twee partijen werden een felle {1}.",
     a:["krachtmeting"],
     opts:["krachtmeting","koopmansmoraal","koopmanstraditie","gelegenheidsonderneming"],
     hint:"A contest or struggle between two parties to see who is stronger. Compound: strength + measuring.",
     sSrc:"The negotiations between the two parties became a fierce {1}."},

    {type:"teach", trg:"de kortheid", src:"the brevity / shortness", pos:"noun", gender:"c",
     note:"Common gender (de). Kort (short) + -heid (abstract suffix).\n'Vanwege de kortheid' = for brevity's sake.",
     example:"A: Ik waardeer de kortheid van je presentatie.\nB: Bedankt, ik houd het graag bondig.\nA: Sommige collega's praten te lang.\nB: Tijd is geld, toch?",
     exampleSrc:"A: I appreciate the brevity of your presentation.\nB: Thanks, I like to keep it concise.\nA: Some colleagues talk too long.\nB: Time is money, right?",
     funFact:"Dutch business culture values directness and brevity. Meetings are expected to start on time and stay on topic. Wasting people's time is considered very rude."},

    {type:"teach", trg:"de kostenplaat", src:"the cost overview / cost picture", pos:"noun", gender:"c",
     note:"Common gender (de). Kosten (costs) + plaat (picture/plate).\n'De totale kostenplaat' = the total cost picture.",
     example:"A: Kun je de kostenplaat laten zien?\nB: Ja, het totaal is hoger dan verwacht.\nA: Waar zitten de overschrijdingen?\nB: Vooral bij de personeelskosten.",
     exampleSrc:"A: Can you show the cost overview?\nB: Yes, the total is higher than expected.\nA: Where are the overruns?\nB: Mainly in personnel costs.",
     funFact:"The Dutch are known for splitting bills precisely ('going Dutch'). The same precision applies to business: every cent must be accounted for in the 'kostenplaat'."},

    {type:"match", pairs:[
      {trg:"handelscontact", src:"trade contact"},
      {trg:"krachtmeting", src:"power struggle"},
      {trg:"klerk", src:"clerk"},
      {trg:"kortheid", src:"brevity"},
      {trg:"kostenplaat", src:"cost overview"}
    ]},

    {type:"mc",
     q:"Wat is een 'gelegenheidsonderneming'?",
     opts:["Een overheidsinstelling","Een tijdelijk bedrijf voor een specifieke kans","Een restaurant voor feesten","Een groot internationaal bedrijf"],
     ans:"Een tijdelijk bedrijf voor een specifieke kans",
     hint:"A business created specifically for an occasion or opportunity. It is temporary and purpose-built."},

    {type:"fb",
     s:"Het {1} in Nederland verandert door thuiswerken en flexibele uren.",
     a:["kantoorleven"],
     opts:["kantoorleven","handelscontact","kostenplaat","kortheid"],
     hint:"Daily life in a workplace with desks, computers, and colleagues. Compound: office + life.",
     sSrc:"The {1} in the Netherlands is changing due to working from home and flexible hours."}
  ]
};
export default LESSON_6;
