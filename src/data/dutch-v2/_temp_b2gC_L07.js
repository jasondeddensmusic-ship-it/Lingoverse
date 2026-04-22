// L07: Krant en Media. News and Media Vocabulary
const LESSON_7 = {
  id:"nlv2_b2gC_l7", title:"Krant en Media", icon:"\u{1F4F0}", xp:15, board:true,
  steps:[
    {type:"intro", title:"News and Media",
     desc:"Reading Dutch newspapers and following media discussions requires specific vocabulary. Master the language of headlines, journalism, and public debate.",
     goals:["Master 10 media and journalism terms","Discuss news and public discourse","Navigate newspaper and media vocabulary"]},

    {type:"teach", trg:"de krantenkop", src:"the headline", pos:"noun", gender:"c",
     note:"Common gender (de). Kranten (newspaper) + kop (head).\n'De voorpagina' = the front page.",
     example:"A: Heb je de krantenkop gezien vandaag?\nB: Ja, over de verkiezingen.\nA: Het was nogal een schrikbarende kop.\nB: Kranten overdrijven soms.",
     exampleSrc:"A: Have you seen today's headline?\nB: Yes, about the elections.\nA: It was quite a shocking headline.\nB: Newspapers exaggerate sometimes.",
     funFact:"The oldest Dutch newspaper still in print is the Haarlems Dagblad, founded in 1656. The Netherlands has a rich press tradition."},

    {type:"teach", trg:"het krantenpapier", src:"the newsprint / newspaper paper", pos:"noun", gender:"n",
     note:"Neuter (het). Kranten (newspaper) + papier (paper).\nAlso used for wrapping fish and chips!",
     example:"A: Vroeger werden patat verpakt in krantenpapier.\nB: Echt? Dat klinkt niet hygienisch.\nA: Het was heel normaal in de jaren zeventig.\nB: Nu gebruiken we kartonnen bakjes.",
     exampleSrc:"A: In the past, chips were wrapped in newsprint.\nB: Really? That doesn't sound hygienic.\nA: It was very normal in the seventies.\nB: Now we use cardboard trays.",
     funFact:"Wrapping fish and chips in newspaper was common across Northern Europe. The practice was banned for food safety reasons."},

    {type:"teach", trg:"de kijkdichtheid", src:"the viewership / viewer density", pos:"noun", gender:"c",
     note:"Common gender (de). Kijk (viewing) + dichtheid (density).\nUsed for TV ratings.",
     example:"A: De kijkdichtheid van het journaal daalt.\nB: Omdat iedereen online nieuws leest.\nA: Toch kijken miljoenen nog naar het acht-uur journaal.\nB: Ja, het is een Nederlandse traditie.",
     exampleSrc:"A: The viewership of the news broadcast is declining.\nB: Because everyone reads news online.\nA: Still, millions watch the eight o'clock news.\nB: Yes, it's a Dutch tradition.",
     funFact:"The NOS Journaal (8 PM news) is still watched by over 2 million Dutch viewers daily, despite the rise of online news."},

    {type:"teach", trg:"de klerk", src:"the clerk / office worker", pos:"noun", gender:"c",
     note:"Common gender (de). From French 'clerc'.\nAn older word, still used in formal contexts.",
     example:"A: Zijn overgrootvader werkte als klerk.\nB: Bij welk bedrijf?\nA: Bij een handelsmaatschappij in Amsterdam.\nB: In die tijd was dat een respectabel beroep.",
     exampleSrc:"A: His great-grandfather worked as a clerk.\nB: At which company?\nA: At a trading company in Amsterdam.\nB: In those days that was a respectable profession.",
     funFact:"The English word 'clerk' and Dutch 'klerk' both descend from Latin 'clericus'. Originally it meant a member of the clergy who could read and write."},

    {type:"mc",
     q:"Wat meet de 'kijkdichtheid'?",
     opts:["Hoeveel mensen naar een programma kijken","Hoe ver je kunt kijken","Hoeveel programma's er zijn","Hoe dik een krant is"],
     ans:"Hoeveel mensen naar een programma kijken",
     hint:"Kijk (viewing) + dichtheid (density). How densely packed the audience is for a broadcast."},

    {type:"teach", trg:"de krachtterm", src:"the swear word / strong language", pos:"noun", gender:"c",
     note:"Common gender (de). Kracht (force/power) + term (word).\n'Krachttermen gebruiken' = to use strong language.",
     example:"A: Hij gebruikt nogal wat krachttermen.\nB: Ja, hij is boos over het besluit.\nA: Dat snap ik, maar vloeken helpt niet.\nB: Nee, maar het lucht wel op.",
     exampleSrc:"A: He uses quite a few swear words.\nB: Yes, he's angry about the decision.\nA: I understand, but swearing doesn't help.\nB: No, but it does feel relieving.",
     funFact:"Dutch swear words often involve diseases (kanker, tyfus, pest). This is unique among European languages."},

    {type:"teach", trg:"de krachtmeting", src:"the showdown / trial of strength", pos:"noun", gender:"c",
     note:"Common gender (de). Kracht (force) + meting (measurement).\nUsed in politics and sports.",
     example:"A: De verkiezing wordt een echte krachtmeting.\nB: Tussen welke partijen?\nA: VVD en PvdA, zoals altijd.\nB: Het wordt spannend.",
     exampleSrc:"A: The election will be a real showdown.\nB: Between which parties?\nA: VVD and PvdA, as always.\nB: It will be exciting.",
     funFact:"Dutch political 'krachtmetingen' often happen during coalition negotiations, which can take months after elections."},

    {type:"teach", trg:"de kledij", src:"the clothing / attire", pos:"noun", gender:"c",
     note:"Common gender (de). Formal/literary for 'kleding'.\nMore common in Flemish Dutch.",
     example:"A: De kledij van die tijd was heel anders.\nB: Ja, met hoepelrokken en korsetten.\nA: Dat lijkt me verschrikkelijk oncomfortabel.\nB: Het was mode!",
     exampleSrc:"A: The attire of that time was very different.\nB: Yes, with hoop skirts and corsets.\nA: That seems terribly uncomfortable.\nB: It was fashion!",
     funFact:"'Kledij' is more common in Belgian Dutch. In the Netherlands, 'kleding' is preferred. Both are correct standard Dutch."},

    {type:"fb",
     s:"De {1} in de krant was heel dramatisch vandaag.",
     a:["krantenkop"],
     opts:["krantenkop","krantenpapier","kijkdichtheid","klerk"],
     hint:"The large text at the top of a newspaper article that grabs attention.",
     sSrc:"The {1} in the newspaper was very dramatic today."},

    {type:"teach", trg:"de kledingstijl", src:"the clothing style / fashion style", pos:"noun", gender:"c",
     note:"Common gender (de). Kleding (clothing) + stijl (style).\n'Een eigen stijl hebben' = to have your own style.",
     example:"A: Jouw kledingstijl is echt uniek.\nB: Dank je! Ik mix vintage met modern.\nA: Waar koop je je kleren?\nB: Vooral bij kringloopwinkels.",
     exampleSrc:"A: Your clothing style is really unique.\nB: Thanks! I mix vintage with modern.\nA: Where do you buy your clothes?\nB: Mainly at thrift shops.",
     funFact:"The Dutch are known for their casual, practical style. 'Doe maar normaal' (act normal) extends to fashion: comfort over glamour."},

    {type:"teach", trg:"de hoepelrok", src:"the hoop skirt", pos:"noun", gender:"c",
     note:"Common gender (de). Hoepel (hoop) + rok (skirt).\nA skirt held wide by a frame or hoops.",
     example:"A: Hoepelrokken waren populair in de zestiende eeuw.\nB: Ze zijn enorm groot!\nA: Je kon nauwelijks door een deur.\nB: Mode gaat soms boven comfort.",
     exampleSrc:"A: Hoop skirts were popular in the sixteenth century.\nB: They are enormously big!\nA: You could barely fit through a door.\nB: Fashion sometimes trumps comfort.",
     funFact:"Dutch Golden Age paintings show women in wide hoopskirts. The fashion originated in Spain and spread across Europe."},

    {type:"mc",
     q:"Wat is het verschil tussen 'kledij' en 'kleding'?",
     opts:["Kledij is voor kinderen","Kledij is formeler en vaker gebruikt in Belgie","Kleding is verouderd","Er is geen verschil"],
     ans:"Kledij is formeler en vaker gebruikt in Belgie",
     hint:"Both mean clothing, but one is more literary and more common south of the border."},

    {type:"fb",
     s:"De verkiezing wordt een spannende {1} tussen de twee partijen.",
     a:["krachtmeting"],
     opts:["krachtmeting","krachtterm","krantenkop","kledingstijl"],
     hint:"A contest or showdown where two sides test their strength against each other.",
     sSrc:"The election will be an exciting {1} between the two parties."},

    {type:"match", pairs:[
      {trg:"krantenkop", src:"headline"},
      {trg:"krantenpapier", src:"newsprint"},
      {trg:"kijkdichtheid", src:"viewership"},
      {trg:"krachtmeting", src:"showdown"}
    ]},

    {type:"mc",
     q:"Nederlandse scheldwoorden gebruiken vaak:",
     opts:["Kleuren","Dierennamen","Ziektenamen","Beroepen"],
     ans:"Ziektenamen",
     hint:"Unlike most languages that use body parts or religion, Dutch profanity has a unique category."},

    {type:"fb",
     s:"Zij heeft een heel bijzondere {1}, altijd creatief.",
     a:["kledingstijl"],
     opts:["kledingstijl","kledij","hoepelrok","klerk"],
     hint:"Someone's personal way of dressing and combining clothes.",
     sSrc:"She has a very special {1}, always creative."},

    {type:"match", pairs:[
      {trg:"krachtterm", src:"swear word"},
      {trg:"kledij", src:"attire (formal)"},
      {trg:"kledingstijl", src:"clothing style"},
      {trg:"hoepelrok", src:"hoop skirt"}
    ]}
  ]
};
export default LESSON_7;
