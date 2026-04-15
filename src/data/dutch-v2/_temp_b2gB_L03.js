// Dutch B2 gapB Lesson 03 — Media en Informatie
// Information overload, digital media, and news vocabulary

const LESSON_3 = {id:"nlv2_b2gB_l3", title:"Media en Informatie", icon:"\u{1F4F0}", xp:25, board:true, steps:[
{type:"intro", title:"Media en Informatie",
 desc:"In the age of information overload, Dutch has developed specific vocabulary for digital media, news consumption, and the challenges of staying informed.",
 goals:["8 media and information nouns","Discuss digital media habits","Navigate Dutch news and information culture"]},

{type:"teach", trg:"de informatieverschaffing", src:"provision of information", pos:"noun", gender:"c",
 note:"Informatie + verschaffing (providing).\n'Verschaffen' = to provide, to supply.",
 example:"A: De informatieverschaffing kan beter.\nB: Hoe bedoel je?\nA: De burger weet niet wat er speelt.\nB: Meer transparantie is nodig.",
 exampleSrc:"A: The provision of information could be better.\nB: What do you mean?\nA: Citizens don't know what's going on.\nB: More transparency is needed.",
 funFact:"The Dutch government has a dedicated information law (Wet open overheid) requiring public institutions to proactively share information."},

{type:"teach", trg:"de informatiestress", src:"information stress", pos:"noun", gender:"c",
 note:"Informatie + stress.\nThe anxiety caused by too much information.",
 example:"A: Ik heb last van informatiestress.\nB: Hoezo? Wat is er aan de hand?\nA: Te veel nieuws, te veel mails.\nB: Probeer eens een dag offline te gaan.",
 exampleSrc:"A: I suffer from information stress.\nB: How so? What's going on?\nA: Too much news, too many emails.\nB: Try going offline for a day.",
 funFact:"Dutch research shows that constant news consumption correlates with higher stress levels, leading to the 'digital detox' trend."},

{type:"teach", trg:"de krantenkop", src:"newspaper headline", pos:"noun", gender:"c",
 note:"Kranten (newspaper) + kop (head).\n'De koppen halen' = to make the headlines.",
 example:"A: Heb je de krantenkop gezien?\nB: Welke? Er was zo veel nieuws.\nA: Over de verkiezingen.\nB: Oh ja, dat was groot nieuws.",
 exampleSrc:"A: Did you see the headline?\nB: Which one? There was so much news.\nA: About the elections.\nB: Oh yes, that was big news.",
 funFact:"The Netherlands has one of the highest newspaper readership rates in Europe, though digital subscriptions now outnumber print."},

{type:"teach", trg:"het krantenpapier", src:"newspaper / newsprint", pos:"noun", gender:"n",
 note:"Kranten + papier (paper).\nAlso refers to the physical paper material itself.",
 example:"A: Lees je nog op krantenpapier?\nB: Nee, alles digitaal tegenwoordig.\nA: Ik mis het bladergevoel soms.\nB: Begrijpelijk, het is anders dan een scherm.",
 exampleSrc:"A: Do you still read on newsprint?\nB: No, everything digital these days.\nA: I sometimes miss the feel of turning pages.\nB: Understandable, it's different from a screen.",
 funFact:"Dutch newspaper paper is among the most recycled materials in the country, with over 85% being collected for reuse."},

{type:"teach", trg:"het internetgedrag", src:"internet behavior", pos:"noun", gender:"n",
 note:"Internet + gedrag (behavior).\nUsed in research and policy discussions.",
 example:"A: Het internetgedrag van jongeren verandert.\nB: In welk opzicht?\nA: Meer video, minder tekst.\nB: Dat zie je overal.",
 exampleSrc:"A: The internet behavior of young people is changing.\nB: In what way?\nA: More video, less text.\nB: You see that everywhere.",
 funFact:"The Netherlands has one of the highest internet penetration rates in the world, with over 98% of households connected."},

{type:"teach", trg:"de kijkdichtheid", src:"viewer ratings / audience density", pos:"noun", gender:"c",
 note:"Kijk (viewing) + dichtheid (density).\nThe percentage of people watching a broadcast.",
 example:"A: De kijkdichtheid was hoog gisteravond.\nB: Wat was er op televisie?\nA: De finale van het EK.\nB: Logisch, dat kijkt heel Nederland.",
 exampleSrc:"A: The viewer ratings were high last night.\nB: What was on television?\nA: The European Championship final.\nB: Of course, all of the Netherlands watches that.",
 funFact:"The Dutch equivalent of Nielsen ratings is measured by SKO (Stichting KijkOnderzoek), which tracks viewing habits across all platforms."},

{type:"teach", trg:"de blogs", src:"blogs", pos:"noun", gender:"c",
 note:"English loanword, fully adopted into Dutch.\n'Bloggen' = to blog. 'De blogger' = the blogger.",
 example:"A: Lees je veel blogs?\nB: Ja, vooral over reizen en eten.\nA: Heb je zelf ook een blog?\nB: Nee, ik ben meer een lezer dan een schrijver.",
 exampleSrc:"A: Do you read many blogs?\nB: Yes, especially about travel and food.\nA: Do you have a blog yourself?\nB: No, I'm more of a reader than a writer.",
 funFact:"The Dutch blogging scene exploded in the early 2010s, with 'mama blogs' and travel blogs becoming major media channels."},

{type:"teach", trg:"de klantenservice", src:"customer service", pos:"noun", gender:"c",
 note:"Klanten (customers) + service.\n'De klantenservicemedewerker' = customer service employee.",
 example:"A: Ik moet de klantenservice bellen.\nB: Veel geduld gewenst.\nA: Ik weet het, de wachttijden zijn lang.\nB: Probeer anders de chatbot.",
 exampleSrc:"A: I need to call customer service.\nB: Best of luck with the waiting.\nA: I know, the wait times are long.\nB: Try the chatbot instead.",
 funFact:"Dutch customer service is famously direct. Don't expect American-style friendliness, but do expect honest, efficient help."},

{type:"mc", q:"'De krantenkop' is:",
 opts:["A newspaper delivery person","A newspaper headline","The front page","The editor"],
 ans:"A newspaper headline",
 hint:"Kop means head. The 'head' of a news article is its title."},

{type:"fb", s:"Ik heb last van {1} door te veel nieuws.",
 a:["informatiestress"], opts:["informatiestress","informatieverschaffing","kijkdichtheid","krantenkop"],
 hint:"The stress caused by being overwhelmed with information",
 sSrc:"I suffer from {1} because of too much news."},

{type:"mc", q:"'De kijkdichtheid' meet:",
 opts:["How thick a newspaper is","How many people watch a broadcast","The internet speed","The screen brightness"],
 ans:"How many people watch a broadcast",
 hint:"Kijk (viewing) + dichtheid (density). A broadcasting measurement."},

{type:"fb", s:"Het {1} van jongeren verandert elk jaar.",
 a:["internetgedrag"], opts:["internetgedrag","krantenpapier","klantenservice","blogs"],
 hint:"How young people behave online, their digital habits",
 sSrc:"The {1} of young people changes every year."},

{type:"match", pairs:[
 {trg:"de informatieverschaffing", src:"provision of information"},
 {trg:"de informatiestress", src:"information stress"},
 {trg:"de krantenkop", src:"newspaper headline"},
 {trg:"het krantenpapier", src:"newsprint"}
]},

{type:"mc", q:"Welk woord past? 'De ... kan beter, de burger weet te weinig.'",
 opts:["informatiestress","informatieverschaffing","kijkdichtheid","klantenservice"],
 ans:"informatieverschaffing",
 hint:"The act of providing or supplying information to the public"},

{type:"fb", s:"Bel de {1} als je een klacht hebt.",
 a:["klantenservice"], opts:["klantenservice","kijkdichtheid","informatiestress","krantenkop"],
 hint:"The department you contact when you have a complaint about a product or service",
 sSrc:"Call {1} if you have a complaint."},

{type:"match", pairs:[
 {trg:"het internetgedrag", src:"internet behavior"},
 {trg:"de kijkdichtheid", src:"viewer ratings"},
 {trg:"de blogs", src:"blogs"},
 {trg:"de klantenservice", src:"customer service"}
]}
]};
export default LESSON_3;
