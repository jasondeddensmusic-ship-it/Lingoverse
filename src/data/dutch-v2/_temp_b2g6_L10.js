// L10: Sports, Leisure, and Physical Activity
const LESSON_10 = {
  id:"nlv2_b2g6_l10", title:"Sport en Beweging", icon:"\u26BD", xp:15, board:true,
  steps:[
    {type:"intro", title:"Sports, Leisure, and Physical Activity",
     desc:"Learn vocabulary about Dutch sports culture, from hockey to running clubs. The Netherlands is one of the most physically active nations in Europe.",
     goals:["Learn 10 sports and leisure terms","Discuss Dutch sporting traditions","Use sports vocabulary in conversation"]},

    {type:"teach", trg:"het hockey", src:"hockey (field hockey)", pos:"noun", gender:"n",
     note:"English loanword. In the Netherlands, 'hockey' always means field hockey.\nIce hockey is 'ijshockey'.",
     example:"A: Hockey is heel populair in Nederland.\nB: Vooral bij vrouwen, toch?\nA: Bij mannen ook! We zijn wereldkampioen.\nB: Het is een echte Nederlandse sport.",
     exampleSrc:"A: Hockey is very popular in the Netherlands.\nB: Especially among women, right?\nA: Among men too! We are world champions.\nB: It is a true Dutch sport.",
     funFact:"The Netherlands has won more Olympic medals in field hockey than any other country. It is the second most popular team sport after football."},

    {type:"teach", trg:"het honkbal", src:"baseball", pos:"noun", gender:"n",
     note:"Compound: honk (base) + bal (ball).\nLiterally 'base ball'. A direct Dutch translation.",
     example:"A: Wist je dat honkbal populair is in Nederland?\nB: Echt waar?\nA: Ja, we hebben zelfs Europese titels gewonnen.\nB: Dat wist ik helemaal niet!",
     exampleSrc:"A: Did you know that baseball is popular in the Netherlands?\nB: Really?\nA: Yes, we have even won European titles.\nB: I did not know that at all!",
     funFact:"The Dutch national baseball team has won over 20 European championships and competed in the World Baseball Classic."},

    {type:"teach", trg:"hoogspringen", src:"to high jump", pos:"verb", gender:null,
     note:"Compound verb: hoog (high) + springen (to jump).\nAlso used as noun: het hoogspringen.",
     example:"A: Ze traint elke dag voor het hoogspringen.\nB: Hoe hoog springt ze?\nA: Bijna twee meter!\nB: Dat is olympisch niveau.",
     exampleSrc:"A: She trains every day for the high jump.\nB: How high does she jump?\nA: Almost two meters!\nB: That is Olympic level.",
     funFact:"Dutch athletes have a strong tradition in athletics. The Netherlands regularly produces top high jumpers and sprinters."},

    {type:"teach", trg:"gewichtheffen", src:"to weightlift", pos:"verb", gender:null,
     note:"Compound verb: gewicht (weight) + heffen (to lift).\nAlso noun: het gewichtheffen.",
     example:"A: Gewichtheffen is goed voor je botten.\nB: Maar je moet voorzichtig zijn.\nA: Ja, de techniek is heel belangrijk.\nB: Anders krijg je blessures.",
     exampleSrc:"A: Weightlifting is good for your bones.\nB: But you have to be careful.\nA: Yes, technique is very important.\nB: Otherwise you get injuries.",
     funFact:"The Dutch word 'heffen' (to lift) is also used in 'belasting heffen' (to levy tax). Both meanings come from the idea of raising something up."},

    {type:"teach", trg:"de hardloopclub", src:"the running club", pos:"noun", gender:"c",
     note:"Compound: hardloop (running) + club.\nVery popular in the Netherlands.",
     example:"A: Ik ben lid geworden van een hardloopclub.\nB: Hoe vaak trainen jullie?\nA: Drie keer per week.\nB: Dat is een goed schema.",
     exampleSrc:"A: I have become a member of a running club.\nB: How often do you train?\nA: Three times per week.\nB: That is a good schedule.",
     funFact:"The Netherlands has over 500 running clubs. The Rotterdam Marathon and the Dam tot Damloop are the most popular events."},

    {type:"mc",
     q:"Wat betekent 'honkbal' letterlijk?",
     opts:["Basis-bal, een vertaling van baseball","Een bal die je met je honk gooit","Een bal gemaakt van hout","Een sport met een hondenbal"],
     ans:"Basis-bal, een vertaling van baseball",
     hint:"'Honk' is the Dutch word for 'base' in sports. The compound translates the English word directly."},

    {type:"teach", trg:"de hoofdsponsor", src:"the main sponsor", pos:"noun", gender:"c",
     note:"Compound: hoofd (main) + sponsor.\nThe primary financial backer of a team or event.",
     example:"A: De hoofdsponsor heeft het contract verlengd.\nB: Voor hoeveel jaar?\nA: Drie jaar, met een hogere bijdrage.\nB: Goed nieuws voor de club.",
     exampleSrc:"A: The main sponsor has extended the contract.\nB: For how many years?\nA: Three years, with a higher contribution.\nB: Good news for the club.",
     funFact:"Dutch football clubs rely heavily on sponsorship. The shirt sponsor deal is the most lucrative, with top clubs earning millions per season."},

    {type:"teach", trg:"honkvast", src:"homebound, reluctant to move", pos:"adj", gender:null,
     note:"Compound: honk (home base) + vast (fixed, stuck).\nSomeone who never wants to leave home.",
     example:"A: Mijn opa is nogal honkvast.\nB: Wil hij niet op vakantie?\nA: Nee, hij is het liefst thuis.\nB: Sommige mensen zijn nu eenmaal zo.",
     exampleSrc:"A: My grandfather is rather homebound.\nB: Does he not want to go on holiday?\nA: No, he prefers to be at home.\nB: Some people are simply like that.",
     funFact:"Despite being honkvast at heart, the Dutch are actually one of Europe's most-traveled nations. The contradiction is a running joke."},

    {type:"teach", trg:"de duik", src:"the dive, the plunge", pos:"noun", gender:"c",
     note:"From 'duiken' (to dive). A single dive action.\nUsed for swimming, goalkeeping, and figuratively.",
     example:"A: De keeper maakte een spectaculaire duik.\nB: Hij redde de bal met zijn vingertoppen.\nA: Dat was de beste redding van het seizoen.\nB: Het publiek ging helemaal uit zijn dak.",
     exampleSrc:"A: The goalkeeper made a spectacular dive.\nB: He saved the ball with his fingertips.\nA: That was the best save of the season.\nB: The audience went absolutely crazy.",
     funFact:"The Dutch expression 'een duik nemen' (to take a dive) means to start something boldly, like jumping into cold water."},

    {type:"fb",
     s:"Ik ben lid van een {1} en train drie keer per week.",
     a:["hardloopclub"],
     opts:["hardloopclub","hoofdsponsor","honkbalteam","hardloopwedstrijd"],
     hint:"A club where members run together regularly. Compound of 'hardloop' and 'club'.",
     sSrc:"I am a member of a {1} and train three times per week."},

    {type:"teach", trg:"de festivalganger", src:"the festival-goer", pos:"noun", gender:"c",
     note:"Compound: festival + ganger (goer).\nSomeone who attends festivals.",
     example:"A: Duizenden festivalgangers kwamen naar het evenement.\nB: Was het druk?\nA: Enorm! Alle tickets waren uitverkocht.\nB: Dat was de beste editie ooit.",
     exampleSrc:"A: Thousands of festival-goers came to the event.\nB: Was it crowded?\nA: Enormously! All tickets were sold out.\nB: That was the best edition ever.",
     funFact:"The Netherlands is the festival capital of Europe with over 900 music festivals annually, including Lowlands, Pinkpop, and King's Day events."},

    {type:"teach", trg:"de hartenlust", src:"heart's content", pos:"noun", gender:"c",
     note:"Compound: harten (heart's) + lust (desire, pleasure).\nAlways used with 'naar': naar hartenlust.",
     example:"A: Op de markt kun je naar hartenlust winkelen.\nB: Is er veel keuze?\nA: Ja, meer dan honderd kraampjes.\nB: Dan gaan we morgen!",
     exampleSrc:"A: At the market you can shop to your heart's content.\nB: Is there much choice?\nA: Yes, more than one hundred stalls.\nB: Then we will go tomorrow!",
     funFact:"The expression 'naar hartenlust' is centuries old and still used daily. It perfectly captures the Dutch love of freedom and choice."},

    {type:"mc",
     q:"Wat betekent 'honkvast'?",
     opts:["Iemand die liever thuisblijft","Iemand die goed is in honkbal","Iemand die veel reist","Iemand die heel snel rent"],
     ans:"Iemand die liever thuisblijft",
     hint:"'Honk' means home base and 'vast' means stuck or fixed. Someone who is attached to their home."},

    {type:"match", pairs:[
      {trg:"hockey", src:"field hockey"},
      {trg:"honkbal", src:"baseball"},
      {trg:"hardloopclub", src:"running club"},
      {trg:"festivalganger", src:"festival-goer"}
    ]},

    {type:"fb",
     s:"De keeper maakte een spectaculaire {1} om de bal te pakken.",
     a:["duik"],
     opts:["duik","sprong","stap","slag"],
     hint:"A sudden movement through the air to catch or reach something. Used for goalkeepers and divers.",
     sSrc:"The goalkeeper made a spectacular {1} to catch the ball."},

    {type:"mc",
     q:"Wat betekent 'naar hartenlust'?",
     opts:["Zoveel als je wilt, naar believen","Met een zwaar hart","Zonder plezier","Met tegenzin"],
     ans:"Zoveel als je wilt, naar believen",
     hint:"Literally 'to the heart's desire'. An expression meaning you can do something as much as you want."}
  ]
};
export default LESSON_10;
