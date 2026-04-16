// Batch 7 — Unit 01 extra lesson. Greetings & Basics: Weather Small Talk
const BATCH7_L1 = {id:"itv2_u01l_b7_1", title:"Che tempo fa?", icon:"\u2601\uFE0F", xp:15, board:true, steps:[
{type:"intro", title:"Che tempo fa?",
 desc:"Learn how to talk about the weather, a universal conversation starter in Italian.",
 goals:["Describe basic weather conditions","Use weather expressions in small talk","Talk about seasons and temperature"]},

{type:"teach", trg:"il tempo", src:"the weather", pos:"noun", gender:"m",
 note:"Masculine noun. Also means 'time.' Context tells you which.\n'Che tempo fa?' = What is the weather like?",
 example:"A: Che tempo fa oggi?\nB: Fa bello, c'e il sole!",
 exampleSrc:"A: What is the weather like today?\nB: It is nice, the sun is out!",
 funFact:"Italians use 'fare' (to do/make) for weather: 'fa caldo' (it is hot), 'fa freddo' (it is cold). The weather literally 'does' things in Italian."},

{type:"teach", trg:"piovere", src:"to rain", pos:"verb", gender:null,
 note:"Irregular verb. Piove (it rains). Past: ha piovuto or e piovuto.\nUsed impersonally, no subject pronoun needed.",
 example:"A: Piove ancora?\nB: Si, piove da stamattina.",
 exampleSrc:"A: Is it still raining?\nB: Yes, it has been raining since this morning.",
 funFact:"The famous Italian expression 'piove, governo ladro!' (it rains, thief government!) blames bad weather on politicians. Used humorously for any complaint."},

{type:"teach", trg:"la temperatura", src:"the temperature", pos:"noun", gender:"f",
 note:"Feminine noun. Italy uses Celsius.\n'La temperatura e di 25 gradi' = The temperature is 25 degrees.",
 example:"A: Qual e la temperatura oggi?\nB: Circa trenta gradi. Fa molto caldo!",
 exampleSrc:"A: What is the temperature today?\nB: About thirty degrees. It is very hot!",
 funFact:"Italy uses Celsius exclusively. When Italians hear '100 degrees,' they think of boiling water, not a hot summer day."},

{type:"teach", trg:"nuvoloso", src:"cloudy", pos:"adj", gender:null,
 note:"Adjective from 'nuvola' (cloud). Nuvoloso/a/i/e.\n'Cielo nuvoloso' = cloudy sky.",
 example:"A: Com'e il cielo oggi?\nB: E nuvoloso, ma non piove.",
 exampleSrc:"A: How is the sky today?\nB: It is cloudy, but it is not raining.",
 funFact:"'Nuvola' comes from Latin 'nubes.' The same root gives English 'nebula.' Northern Italy, especially Milan, is known for its cielo nuvoloso."},

{type:"teach", trg:"soleggiato", src:"sunny", pos:"adj", gender:null,
 note:"Adjective from 'sole' (sun). Soleggiato/a/i/e.\nA common weather forecast word.",
 example:"A: Domani sara soleggiato?\nB: Si, sole tutto il giorno!",
 exampleSrc:"A: Will it be sunny tomorrow?\nB: Yes, sun all day!",
 funFact:"Southern Italy enjoys over 300 sunny days per year. Sicily and Sardinia are the sunniest regions, making 'soleggiato' the default weather."},

{type:"teach", trg:"il temporale", src:"the thunderstorm", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i temporali.\nA storm with thunder and lightning.",
 example:"A: Attenzione, sta arrivando un temporale!\nB: Meglio chiudere le finestre.",
 exampleSrc:"A: Watch out, a thunderstorm is coming!\nB: Better close the windows.",
 funFact:"Summer thunderstorms in Italy are dramatic but brief. They are especially common in the Po Valley, where warm Mediterranean air meets cooler Alpine air."},

{type:"teach", trg:"la nebbia", src:"the fog", pos:"noun", gender:"f",
 note:"Feminine noun. 'C'e nebbia' = It is foggy.\nVery common in the Po Valley region.",
 example:"A: C'e molta nebbia stamattina.\nB: Non si vede niente!",
 exampleSrc:"A: There is a lot of fog this morning.\nB: You cannot see anything!",
 funFact:"The Po Valley (Pianura Padana) is one of the foggiest regions in Europe. Milan, Turin, and Bologna are all famous for their winter nebbia."},

{type:"teach", trg:"il vento", src:"the wind", pos:"noun", gender:"m",
 note:"Masculine noun. 'Tira vento' = It is windy.\nAlso: 'ventoso' (windy, adjective).",
 example:"A: Tira molto vento oggi.\nB: Si, porta l'ombrello!",
 exampleSrc:"A: It is very windy today.\nB: Yes, bring your umbrella!",
 funFact:"Italy has named winds: 'tramontana' (cold north wind), 'scirocco' (hot African wind), 'maestrale' (northwest wind). Each has its own character and mythology."},

{type:"teach", trg:"il cielo", src:"the sky", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i cieli.\nAlso means 'heaven.' 'Cielo azzurro' = blue sky.",
 example:"A: Guarda che bel cielo azzurro!\nB: Perfetto per una passeggiata.",
 exampleSrc:"A: Look at that beautiful blue sky!\nB: Perfect for a walk.",
 funFact:"'Cielo' means both sky and heaven. 'Mio cielo!' is an exclamation like 'My heavens!' The famous 'azzurro' of the Italian sky gives the national team its color."},

{type:"teach", trg:"l'ombrello", src:"the umbrella", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: gli ombrelli.\nFrom 'ombra' (shadow/shade).",
 example:"A: Hai l'ombrello?\nB: No, l'ho dimenticato a casa.",
 exampleSrc:"A: Do you have the umbrella?\nB: No, I forgot it at home.",
 funFact:"'Ombrello' literally means 'little shade.' The parasol (ombrellone) is the 'big shade' you see on Italian beaches. Same root, different size."},

{type:"teach", trg:"la previsione", src:"the forecast", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le previsioni.\n'Le previsioni del tempo' = the weather forecast.",
 example:"A: Hai visto le previsioni del tempo?\nB: Si, domani piove.",
 exampleSrc:"A: Have you seen the weather forecast?\nB: Yes, tomorrow it rains.",
 funFact:"The Italian word for forecast comes from 'prevedere' (to foresee). Italian TV weather forecasts are a national institution, with celebrity meteorologists."},

{type:"teach", trg:"umido", src:"humid / damp", pos:"adj", gender:null,
 note:"Adjective. Umido/a/i/e. 'Aria umida' = humid air.\nOpposite: secco (dry).",
 example:"A: Oggi e molto umido.\nB: Si, si suda anche senza fare niente.",
 exampleSrc:"A: Today is very humid.\nB: Yes, you sweat even without doing anything.",
 funFact:"Coastal Italian cities like Venice, Naples, and Genoa are famous for their humid summers. The humidity makes 30 degrees feel like 40."},

{type:"teach", trg:"mite", src:"mild / gentle", pos:"adj", gender:null,
 note:"Adjective. Invariable (same for m/f/pl).\n'Clima mite' = mild climate.",
 example:"A: Il clima qui e molto mite.\nB: Si, non fa mai troppo freddo.",
 exampleSrc:"A: The climate here is very mild.\nB: Yes, it never gets too cold.",
 funFact:"The Italian Riviera and the Amalfi Coast are famous for their 'clima mite.' Liguria in particular has a microclimate that allows lemon and olive trees to flourish."},

{type:"teach", trg:"nevicare", src:"to snow", pos:"verb", gender:null,
 note:"Impersonal verb. 'Nevica' = it snows.\nPast: ha nevicato. Used like 'piovere.'",
 example:"A: Nevica spesso qui?\nB: Solo in montagna, in citta quasi mai.",
 exampleSrc:"A: Does it snow often here?\nB: Only in the mountains, in the city almost never.",
 funFact:"Snow in Rome is so rare it makes national news. When it snowed in 2012, Romans built snowmen at the Colosseum and the photos went viral."},

{type:"mc", q:"Come si dice 'it is raining' in italiano?",
 opts:["piove","nevica","tira vento","fa caldo"],
 ans:"piove",
 hint:"The impersonal form of the verb for water falling from the sky."},

{type:"fb", s:"Oggi il {1} e azzurro e soleggiato.", a:["cielo"],
 opts:["cielo","vento","tempo","temporale"],
 hint:"The expanse above you. Also means 'heaven' in Italian.",
 sSrc:"Today the {1} is blue and sunny."},

{type:"match", pairs:[
 {trg:"nuvoloso", src:"cloudy"},
 {trg:"soleggiato", src:"sunny"},
 {trg:"umido", src:"humid"},
 {trg:"mite", src:"mild"}
]},

{type:"mc", q:"Che cosa sono le 'previsioni del tempo'?",
 opts:["the weather forecast","the temperature","the thunderstorm","the seasons"],
 ans:"the weather forecast",
 hint:"What you check on TV or your phone to know tomorrow's w...."},

{type:"fb", s:"C'e molta {1} stamattina, non si vede niente.", a:["nebbia"],
 opts:["nebbia","neve","pioggia","nuvola"],
 hint:"A thick white or gray mist close to the ground. Common in northern Italy.",
 sSrc:"There is a lot of {1} this morning, you cannot see anything."},

{type:"mc", q:"Quale regione italiana e famosa per la nebbia?",
 opts:["La Pianura Padana","La Sicilia","La Sardegna","La Calabria"],
 ans:"La Pianura Padana",
 hint:"The large flat valley in northern Italy where Milan and Bologna are located."},

{type:"fb", s:"Porta l'{1}, oggi piove!", a:["ombrello"],
 opts:["ombrello","temperatura","temporale","nebbia"],
 hint:"The object you carry to stay dry when it rains.",
 sSrc:"Bring the {1}, today it rains!"},

{type:"match", pairs:[
 {trg:"piovere", src:"to rain"},
 {trg:"nevicare", src:"to snow"},
 {trg:"il temporale", src:"thunderstorm"},
 {trg:"la temperatura", src:"temperature"}
]}
]};
export default BATCH7_L1;
