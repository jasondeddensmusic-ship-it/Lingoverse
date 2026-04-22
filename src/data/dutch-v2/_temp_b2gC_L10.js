// L10: Digitale Wereld. Digital Life and Technology
const LESSON_10 = {
  id:"nlv2_b2gC_l10", title:"Digitale Wereld", icon:"\u{1F4BB}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Digital Life and Technology",
     desc:"The digital world has its own Dutch vocabulary. From social media to online behaviour, master the terms that fill modern Dutch conversations about technology.",
     goals:["Master 10 digital and technology terms","Discuss online behaviour and trends","Navigate modern Dutch tech vocabulary"]},

    {type:"teach", trg:"het design", src:"the design", pos:"noun", gender:"n",
     note:"Neuter (het). English loanword, very common.\n'Ontwerp' is the native Dutch alternative.",
     example:"A: Het design van deze website is prachtig.\nB: Vind je? Ik vind het te druk.\nA: De kleuren werken goed samen.\nB: Misschien heb je gelijk.",
     exampleSrc:"A: The design of this website is beautiful.\nB: You think? I find it too busy.\nA: The colours work well together.\nB: Maybe you're right.",
     funFact:"Dutch design is world-famous. The 'Dutch Design Week' in Eindhoven attracts over 350,000 visitors annually."},

    {type:"teach", trg:"het internetgedrag", src:"internet behaviour / online behaviour", pos:"noun", gender:"n",
     note:"Neuter (het). Internet + gedrag (behaviour).\n'Onlinegedrag' is a synonym.",
     example:"A: Het internetgedrag van jongeren baart zorgen.\nB: Wat bedoel je?\nA: Ze delen te veel persoonlijke informatie.\nB: Ja, privacy is een probleem.",
     exampleSrc:"A: The internet behaviour of young people causes concern.\nB: What do you mean?\nA: They share too much personal information.\nB: Yes, privacy is a problem.",
     funFact:"The Netherlands has one of the highest internet penetration rates in Europe, at over 97% of the population."},

    {type:"teach", trg:"de informatieverschaffing", src:"the provision of information", pos:"noun", gender:"c",
     note:"Common gender (de). Informatie (information) + verschaffing (provision).\n'Verschaffen' = to provide/supply.",
     example:"A: De informatieverschaffing door de overheid kan beter.\nB: Op welk gebied?\nA: Over vaccinaties en gezondheidszorg.\nB: Ja, de communicatie is soms onduidelijk.",
     exampleSrc:"A: The provision of information by the government could be better.\nB: In which area?\nA: About vaccinations and healthcare.\nB: Yes, the communication is sometimes unclear.",
     funFact:"The Dutch government website 'rijksoverheid.nl' is the main channel for official information to citizens."},

    {type:"teach", trg:"de informatiestress", src:"information stress / info overload", pos:"noun", gender:"c",
     note:"Common gender (de). Informatie (information) + stress.\n'Te veel informatie' = too much information.",
     example:"A: Ik heb last van informatiestress.\nB: Door alle nieuwsberichten?\nA: Ja, en e-mails, en sociale media.\nB: Probeer eens een dag zonder telefoon.",
     exampleSrc:"A: I'm suffering from information stress.\nB: Because of all the news reports?\nA: Yes, and emails, and social media.\nB: Try a day without your phone.",
     funFact:"The Dutch coined 'informatiestress' as digital overload became a recognised problem. 'Digital detox' weekends are increasingly popular."},

    {type:"mc",
     q:"'Informatieverschaffing' betekent:",
     opts:["Informatie verstrekken aan anderen","Informatie verwijderen","Informatie vertalen","Informatie verzamelen"],
     ans:"Informatie verstrekken aan anderen",
     hint:"'Verschaffen' means to provide or supply. It is about giving information to people."},

    {type:"teach", trg:"de klantenservice", src:"customer service", pos:"noun", gender:"c",
     note:"Common gender (de). Klanten (customers) + service.\n'De helpdesk' is a common synonym.",
     example:"A: Ik moet de klantenservice bellen.\nB: Waarover?\nA: Mijn bestelling is niet aangekomen.\nB: Succes, je staat waarschijnlijk lang in de wacht.",
     exampleSrc:"A: I need to call customer service.\nB: About what?\nA: My order hasn't arrived.\nB: Good luck, you'll probably be on hold for a long time.",
     funFact:"Dutch customer service often starts with a long automated menu. The phrase 'in de wacht staan' (to be on hold) is dreaded by all."},

    {type:"teach", trg:"het examenrooster", src:"the exam schedule / exam timetable", pos:"noun", gender:"n",
     note:"Neuter (het). Examen (exam) + rooster (schedule/grid).\n'Het lesrooster' = the class schedule.",
     example:"A: Heb je het examenrooster al gezien?\nB: Ja, ik heb drie examens in een week!\nA: Dat is pittig. Wanneer begin je met leren?\nB: Vandaag nog, ik heb geen keuze.",
     exampleSrc:"A: Have you seen the exam schedule yet?\nB: Yes, I have three exams in one week!\nA: That's tough. When are you starting to study?\nB: Today, I have no choice.",
     funFact:"'Rooster' means both 'schedule/grid' and 'grill/grate'. The idea is that a timetable looks like a grid pattern."},

    {type:"teach", trg:"de jukebox", src:"the jukebox", pos:"noun", gender:"c",
     note:"Common gender (de). English loanword.\nA coin-operated music player from the 1950s-80s.",
     example:"A: Er staat een jukebox in dat cafe!\nB: Echt? Doet hij het nog?\nA: Ja, met echte platen erin.\nB: Geweldig, laten we een nummer opzetten.",
     exampleSrc:"A: There's a jukebox in that cafe!\nB: Really? Does it still work?\nA: Yes, with real records in it.\nB: Awesome, let's put on a song.",
     funFact:"Many Dutch 'bruin cafe' (brown cafes) still have working jukeboxes. These old-fashioned pubs are a Dutch cultural treasure."},

    {type:"fb",
     s:"Veel jongeren hebben last van {1} door sociale media.",
     a:["informatiestress"],
     opts:["informatiestress","informatieverschaffing","internetgedrag","klantenservice"],
     hint:"The feeling of being overwhelmed by too much digital information and notifications.",
     sSrc:"Many young people suffer from {1} because of social media."},

    {type:"teach", trg:"de jackpot", src:"the jackpot", pos:"noun", gender:"c",
     note:"Common gender (de). English loanword.\n'De jackpot winnen' = to hit the jackpot.",
     example:"A: Heb je gehoord? Iemand heeft de jackpot gewonnen!\nB: Hoeveel was het?\nA: Tien miljoen euro!\nB: Wauw, die hoeft nooit meer te werken.",
     exampleSrc:"A: Have you heard? Someone won the jackpot!\nB: How much was it?\nA: Ten million euros!\nB: Wow, they never have to work again.",
     funFact:"The Dutch State Lottery ('Staatsloterij') dates back to 1726, making it one of the oldest lotteries in the world."},

    {type:"teach", trg:"de gokker", src:"the gambler", pos:"noun", gender:"c",
     note:"Common gender (de). From 'gokken' (to gamble).\n'Gokverslaving' = gambling addiction.",
     example:"A: Hij is een echte gokker.\nB: In het casino?\nA: Nee, online. Dat is het probleem.\nB: Online gokken is gevaarlijk verslavend.",
     exampleSrc:"A: He's a real gambler.\nB: At the casino?\nA: No, online. That's the problem.\nB: Online gambling is dangerously addictive.",
     funFact:"The Netherlands legalised online gambling in 2021 with the 'Wet kansspelen op afstand' (Remote Gaming Act). Regulation is strict."},

    {type:"mc",
     q:"'Rooster' heeft twee betekenissen. Welke?",
     opts:["Dier en plant","Schema en metalen raster","Boek en film","School en kantoor"],
     ans:"Schema en metalen raster",
     hint:"A timetable looks like a grid. And a cooking grate is also a grid pattern."},

    {type:"fb",
     s:"Ik moet de {1} bellen, mijn pakket is zoek.",
     a:["klantenservice"],
     opts:["klantenservice","informatieverschaffing","jackpot","jukebox"],
     hint:"The department of a company that helps customers with problems and questions.",
     sSrc:"I need to call {1}, my package is missing."},

    {type:"match", pairs:[
      {trg:"design", src:"design"},
      {trg:"internetgedrag", src:"online behaviour"},
      {trg:"informatiestress", src:"information overload"},
      {trg:"klantenservice", src:"customer service"}
    ]},

    {type:"mc",
     q:"Wanneer is online gokken gelegaliseerd in Nederland?",
     opts:["2010","2015","2021","Het is nog steeds illegaal"],
     ans:"2021",
     hint:"It was regulated quite recently, with the Remote Gaming Act coming into effect."},

    {type:"fb",
     s:"Hij heeft drie examens volgende week. Het {1} is pittig.",
     a:["examenrooster"],
     opts:["examenrooster","internetgedrag","design","jackpot"],
     hint:"The schedule that tells you when and where your tests take place.",
     sSrc:"He has three exams next week. The {1} is tough."},

    {type:"match", pairs:[
      {trg:"informatieverschaffing", src:"provision of information"},
      {trg:"examenrooster", src:"exam schedule"},
      {trg:"gokker", src:"gambler"},
      {trg:"jackpot", src:"jackpot"}
    ]}
  ]
};
export default LESSON_10;
