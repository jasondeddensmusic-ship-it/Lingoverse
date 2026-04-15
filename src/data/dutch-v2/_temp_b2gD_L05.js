// L05: Krant en Media — Press and Media
const LESSON_5 = {
  id:"nlv2_b2gD_l05", title:"Krant en Media", icon:"\u{1F4F0}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Press and Media",
     desc:"The Dutch media landscape is rich and diverse. Learn vocabulary for newspapers, headlines, digital media, and the changing world of journalism.",
     goals:["Master 10 media and press terms","Discuss newspapers and journalism","Navigate digital media vocabulary"]},

    {type:"teach", trg:"de krantenkop", src:"the newspaper headline", pos:"noun", gender:"c",
     note:"Common gender (de). Krant (newspaper) + kop (head).\n'De krantenkop lezen' = to read the headline.",
     example:"A: Heb je de krantenkop gezien?\nB: Welke krant bedoel je?\nA: De Volkskrant, over de verkiezingen.\nB: Ja, nogal sensationeel dit keer.",
     exampleSrc:"A: Have you seen the headline?\nB: Which newspaper do you mean?\nA: De Volkskrant, about the elections.\nB: Yes, quite sensational this time.",
     funFact:"The Netherlands has a strong newspaper tradition. De Telegraaf (1893) is the largest, while de Volkskrant and NRC are considered quality broadsheets."},

    {type:"teach", trg:"het krantenpapier", src:"the newsprint / newspaper paper", pos:"noun", gender:"n",
     note:"Neuter (het). Krant (newspaper) + papier (paper).\nAlso used figuratively for 'old news'.",
     example:"A: Dit krantenpapier is goed voor het inpakken van glaswerk.\nB: Ja, het is stevig genoeg.\nA: Mijn opa las altijd de papieren krant.\nB: Nu leest iedereen digitaal.",
     exampleSrc:"A: This newsprint is good for wrapping glassware.\nB: Yes, it's sturdy enough.\nA: My grandfather always read the paper newspaper.\nB: Now everyone reads digitally.",
     funFact:"Dutch newspaper circulation has dropped over 60% since 2000. Many papers now focus on digital subscriptions, but Sunday paper delivery remains popular."},

    {type:"teach", trg:"de klantenservice", src:"the customer service", pos:"noun", gender:"c",
     note:"Common gender (de). Klant (customer) + en (linking) + service.\n'De klantenservice bellen' = to call customer service.",
     example:"A: Ik heb de klantenservice al drie keer gebeld.\nB: Kreeg je iemand te spreken?\nA: Nee, alleen een wachtmuziekje.\nB: Probeer het via de chat.",
     exampleSrc:"A: I've called customer service three times already.\nB: Did you get to speak to someone?\nA: No, only hold music.\nB: Try the chat.",
     funFact:"Dutch consumers are famously direct when dealing with customer service. Complaints are often straightforward and to the point, which foreigners sometimes find blunt."},

    {type:"teach", trg:"de kijkdichtheid", src:"the viewership rating / audience density", pos:"noun", gender:"c",
     note:"Common gender (de). Kijk (viewing) + dichtheid (density).\n'Een hoge kijkdichtheid' = high viewership.",
     example:"A: De kijkdichtheid van het programma daalt.\nB: Hoeveel kijkers minder?\nA: Bijna een miljoen vergeleken met vorig jaar.\nB: Streaming neemt alles over.",
     exampleSrc:"A: The viewership of the programme is declining.\nB: How many fewer viewers?\nA: Almost a million compared to last year.\nB: Streaming is taking over everything.",
     funFact:"The Dutch public broadcaster NPO still draws large audiences, especially for shows like 'Boer Zoekt Vrouw' (Farmer Seeks Wife), one of the country's most-watched programmes."},

    {type:"mc",
     q:"Wat is een 'krantenkop'?",
     opts:["De titel bovenaan een krantenartikel","De eigenaar van een krant","De eerste pagina van een krant","Een journalist"],
     ans:"De titel bovenaan een krantenartikel",
     hint:"This compound means newspaper + head. It refers to the large text that summarises an article."},

    {type:"teach", trg:"de blog", src:"the blog", pos:"noun", gender:"c",
     note:"Common gender (de). From English 'web log'.\n'Een blog bijhouden' = to keep a blog.",
     example:"A: Ik heb een blog over reizen.\nB: Hoeveel lezers heb je?\nA: Ongeveer vijfduizend per maand.\nA: Dat is best veel!\nB: Ja, ik ben er trots op.",
     exampleSrc:"A: I have a blog about travel.\nB: How many readers do you have?\nA: About five thousand per month.\nA: That's quite a lot!\nB: Yes, I'm proud of it.",
     funFact:"Dutch is one of the top 10 languages for blogging. The Netherlands' high internet penetration rate (over 98%) makes it a digital-first society."},

    {type:"teach", trg:"het design", src:"the design", pos:"noun", gender:"n",
     note:"Neuter (het). From English.\n'Grafisch design' = graphic design. 'Industrieel design' = industrial design.",
     example:"A: Het design van deze website is prachtig.\nB: Wie heeft het gemaakt?\nA: Een bureau uit Rotterdam.\nB: Rotterdam is echt een designstad.",
     exampleSrc:"A: The design of this website is beautiful.\nB: Who made it?\nA: An agency from Rotterdam.\nB: Rotterdam really is a design city.",
     funFact:"Dutch Design is a globally recognised movement. Droog Design and Studio Job are famous worldwide. The Design Academy Eindhoven is one of Europe's top design schools."},

    {type:"teach", trg:"de insider", src:"the insider", pos:"noun", gender:"c",
     note:"Common gender (de). From English.\n'Een insider tip' = an insider tip. Someone with inside knowledge.",
     example:"A: Een insider vertelde me over de fusie.\nB: Mag je dat wel vertellen?\nA: Het staat morgen in de krant.\nB: Dan is het geen geheim meer.",
     exampleSrc:"A: An insider told me about the merger.\nB: Are you allowed to tell that?\nA: It'll be in the newspaper tomorrow.\nB: Then it's no longer a secret.",
     funFact:"Dutch journalism has strong source protection laws. Journalists can refuse to reveal their 'insiders' even in court."},

    {type:"fb",
     s:"De {1} van het avondprogramma is gedaald naar twee miljoen kijkers.",
     a:["kijkdichtheid"],
     opts:["kijkdichtheid","krantenkop","klantenservice","blog"],
     hint:"A measure of how many people watch a television programme. Compound: viewing + density.",
     sSrc:"The {1} of the evening programme has dropped to two million viewers."},

    {type:"teach", trg:"de gokker", src:"the gambler", pos:"noun", gender:"c",
     note:"Common gender (de). From 'gokken' (to gamble).\n'Een verslaafde gokker' = an addicted gambler.",
     example:"A: Hij is een verslaafde gokker.\nB: Sinds wanneer?\nA: Sinds hij die app ontdekte.\nB: Online gokken is een groot probleem.",
     exampleSrc:"A: He is an addicted gambler.\nB: Since when?\nA: Since he discovered that app.\nB: Online gambling is a big problem.",
     funFact:"Online gambling was legalised in the Netherlands in 2021, leading to a surge in advertising and growing concerns about addiction among young people."},

    {type:"teach", trg:"de jackpot", src:"the jackpot", pos:"noun", gender:"c",
     note:"Common gender (de). From English.\n'De jackpot winnen' = to win the jackpot.",
     example:"A: Iemand heeft de jackpot gewonnen!\nB: Hoeveel was het?\nA: Drieentwintig miljoen euro.\nB: Wat zou jij doen met zoveel geld?",
     exampleSrc:"A: Someone has won the jackpot!\nB: How much was it?\nA: Twenty-three million euros.\nB: What would you do with that much money?",
     funFact:"The Dutch State Lottery ('Staatsloterij') dates back to 1726. New Year's Eve draw is a national tradition, with the whole country watching the results."},

    {type:"match", pairs:[
      {trg:"krantenkop", src:"headline"},
      {trg:"kijkdichtheid", src:"viewership rating"},
      {trg:"design", src:"design"},
      {trg:"gokker", src:"gambler"},
      {trg:"jackpot", src:"jackpot"}
    ]},

    {type:"mc",
     q:"Wat deed Nederland in 2021 met online gokken?",
     opts:["Het werd gelegaliseerd","Het werd verboden","Er veranderde niets","Alleen poker werd toegestaan"],
     ans:"Het werd gelegaliseerd",
     hint:"A significant legal change opened up the online gambling market in the Netherlands for the first time."},

    {type:"fb",
     s:"Ik lees elke ochtend de {1} om te weten wat er in de wereld gebeurt.",
     a:["krantenkop"],
     opts:["krantenkop","kijkdichtheid","klantenservice","jackpot"],
     hint:"The bold text at the top of a newspaper article that summarises the news. Compound: newspaper + head.",
     sSrc:"I read the {1} every morning to know what's happening in the world."}
  ]
};
export default LESSON_5;
