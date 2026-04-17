const UNIT_07 = {n:7, lang:"pt", srcLang:"en", track:"v2", title:"Como está o tempo?", sub:"Weather and Seasons", icon:"🌤️", level:"A2.1", color:"#7B5EE8", lessons:[

{id:"ptv2_u7l1", title:"O tempo hoje", icon:"☀️", xp:15, board:true, steps:[
{type:"intro", title:"Talking about the weather",
 desc:"Learn how Brazilians talk about the weather using the impersonal 'está' pattern. Master the most common weather words you will hear every day.",
 goals:["Learn 6 core weather words","Use 'está' for temporary weather states","Ask 'Como está o tempo?'"]},

{type:"teach", trg:"o tempo", src:"the weather", pos:"noun", gender:"m",
 note:"'Tempo' means both 'weather' and 'time' in Portuguese.\nContext tells you which.",
 example:"A: Como está o tempo hoje?\nB: O tempo está bom.\nA: Que bom!\nB: Sim, está ensolarado.",
 exampleSrc:"A: How is the weather today?\nB: The weather is nice.\nA: Great!\nB: Yes, it is sunny.",
 funFact:"From Latin 'tempus'. Same root as English 'temporal' and 'tempo'."},

{type:"teach", trg:"o sol", src:"the sun", pos:"noun", gender:"m",
 note:"The sun. Also used in 'fazer sol' (to be sunny).",
 example:"A: Que sol!\nB: Sim, está muito quente.\nA: Vamos para a praia?\nB: Boa ideia!",
 exampleSrc:"A: What a sun!\nB: Yes, it is very hot.\nA: Shall we go to the beach?\nB: Good idea!",
 funFact:"Brazil gets more sunshine than almost any country. 'Sol' appears in countless song lyrics."},

{type:"teach", trg:"quente", src:"hot", pos:"adj", gender:null,
 note:"Adjective for hot. Same form for masculine and feminine.",
 example:"A: Está quente aqui.\nB: Muito quente!\nA: Quer água?\nB: Por favor, estou com calor.",
 exampleSrc:"A: It is hot here.\nB: Very hot!\nA: Do you want water?\nB: Please, I am feeling hot.",
 funFact:"Brazilians say 'estou com calor' (I have heat), not 'I am hot'. Different logic!"},

{type:"teach", trg:"frio", src:"cold", pos:"adj", gender:null,
 note:"Means 'cold'. Frio (m), fria (f) for objects. Weather always uses masculine: está frio.",
 example:"A: Está frio hoje.\nB: Muito frio!\nA: Onde está seu casaco?\nB: Em casa. Que pena!",
 exampleSrc:"A: It is cold today.\nB: Very cold!\nA: Where is your coat?\nB: At home. What a shame!",
 funFact:"Southern Brazil gets real winters. It even snows in Santa Catarina some years."},

{type:"teach", trg:"ensolarado", src:"sunny", pos:"adj", gender:null,
 note:"Adjective meaning sunny. Literally 'sunned'. Feminine: ensolarada.",
 example:"A: Que dia ensolarado!\nB: Perfeito para a praia.\nA: Vamos agora?\nB: Sim, vamos!",
 exampleSrc:"A: What a sunny day!\nB: Perfect for the beach.\nA: Shall we go now?\nB: Yes, let's go!",
 funFact:"Rio de Janeiro averages 2,300 hours of sunshine per year, double many European cities."},

{type:"teach", trg:"nublado", src:"cloudy", pos:"adj", gender:null,
 note:"Adjective meaning cloudy. From 'nuvem' (cloud). Feminine: nublada.",
 example:"A: Está nublado.\nB: Vai chover?\nA: Talvez.\nB: Vou levar um guarda-chuva.",
 exampleSrc:"A: It is cloudy.\nB: Is it going to rain?\nA: Maybe.\nB: I will take an umbrella.",
 funFact:"São Paulo is famous for sudden shifts from nublado to chuvoso in minutes."},

{type:"tip", title:"Weather with 'está'",
 text:"Brazilian Portuguese uses impersonal 'está' for current weather:\n\nEstá quente. (It is hot.)\nEstá frio. (It is cold.)\nEstá nublado. (It is cloudy.)\n\nNo subject needed. 'Está' alone carries the 'it is' meaning. For general climate, use 'é': Aqui é quente (Here it is hot, in general).",
 deepDive:{title:"Está vs É for Weather",
  text:"The distinction is crucial. 'Está' marks temporary states happening right now. 'É' marks permanent traits. 'Está quente' means it is hot right now. 'É quente' means this place is generally hot. Mix them up and you sound strange."}},

{type:"mc", q:"How do you say 'It is hot' in Brazilian Portuguese?",
 opts:["É quente","Está quente","Tem quente","Faz quente"],
 ans:"Está quente",
 hint:"Use the temporary state verb for current weather conditions."},

{type:"mc", q:"What does 'nublado' mean?",
 opts:["sunny","rainy","cloudy","windy"],
 ans:"cloudy",
 hint:"The root comes from the word for cloud."},

{type:"fb", s:"Que dia {1}! Vamos à praia.",
 a:["ensolarado"],
 opts:["ensolarado","nublado","frio","chuvoso"],
 hint:"The beach suggestion implies the day is bright and warm.",
 sSrc:"What a {1} day! Let's go to the beach."},

{type:"match", pairs:[
 {trg:"sol", src:"sun"},
 {trg:"quente", src:"hot"},
 {trg:"frio", src:"cold"},
 {trg:"nublado", src:"cloudy"}
]},

{type:"mc", q:"A friend says 'Está frio'. What do they mean?",
 opts:["It is raining","It is cold","It is sunny","It is windy"],
 ans:"It is cold",
 hint:"The adjective is the opposite of quente."},

{type:"fb", s:"Como {1} o tempo hoje?",
 a:["está"],
 opts:["está","é","tem","faz"],
 hint:"Current weather states use the temporary being verb.",
 sSrc:"How {1} the weather today?"}
]},

{id:"ptv2_u7l2", title:"Chuva e vento", icon:"🌧️", xp:15, board:true, steps:[
{type:"intro", title:"Rain, wind, and storms",
 desc:"Brazil is a land of dramatic weather. Learn the vocabulary for rain, wind, and the full verb 'chover' (to rain).",
 goals:["Learn chuva, chover, vento, neve","Use impersonal 'chover' correctly","Describe rainy weather scenes"]},

{type:"teach", trg:"a chuva", src:"the rain", pos:"noun", gender:"f",
 note:"Feminine noun meaning rain.",
 example:"A: Olha a chuva!\nB: Que chuva forte!\nA: Vamos esperar.\nB: Boa ideia, está muito forte.",
 exampleSrc:"A: Look at the rain!\nB: What strong rain!\nA: Let's wait.\nB: Good idea, it is very strong.",
 funFact:"The Amazon rainforest gets over 2,000 mm of rain per year. Manaus has 'temporada de chuva' all year."},

{type:"teach", trg:"chover", src:"to rain", pos:"verb", gender:null,
 note:"Impersonal verb, only used in 3rd person: chove (it rains), choveu (it rained), vai chover (it will rain).",
 example:"A: Está chovendo?\nB: Sim, está chovendo muito.\nA: Vai parar?\nB: Não sei, talvez chova o dia todo.",
 exampleSrc:"A: Is it raining?\nB: Yes, it is raining a lot.\nA: Will it stop?\nB: I do not know, maybe it will rain all day.",
 funFact:"Brazilians often say 'está chovendo canivete' (it is raining pocketknives) for a heavy downpour."},

{type:"teach", trg:"o vento", src:"the wind", pos:"noun", gender:"m",
 note:"Masculine noun meaning wind. Used with 'fazer': faz vento (it is windy).",
 example:"A: Que vento forte!\nB: Sim, faz muito vento hoje.\nA: Segura o chapéu!\nB: Obrigado!",
 exampleSrc:"A: What strong wind!\nB: Yes, it is very windy today.\nA: Hold your hat!\nB: Thanks!",
 funFact:"The coastal winds of northeastern Brazil are so reliable that Fortaleza is a world capital of kitesurfing."},

{type:"teach", trg:"a neve", src:"the snow", pos:"noun", gender:"f",
 note:"Feminine noun meaning snow. Rare in most of Brazil.",
 example:"A: Já viu neve?\nB: Sim, no sul do Brasil.\nA: Que legal!\nB: Foi lindo, mas frio!",
 exampleSrc:"A: Have you ever seen snow?\nB: Yes, in southern Brazil.\nA: How cool!\nB: It was beautiful, but cold!",
 funFact:"It snows in São Joaquim, Santa Catarina, almost every winter. Brazilians travel hours to see it."},

{type:"teach", trg:"o clima", src:"the climate", pos:"noun", gender:"m",
 note:"Climate refers to long-term weather patterns. Different from 'tempo' (current weather).",
 example:"A: Como é o clima aqui?\nB: É tropical, quente o ano todo.\nA: E no sul?\nB: É mais frio, com quatro estações.",
 exampleSrc:"A: What is the climate like here?\nB: It is tropical, hot all year.\nA: And in the south?\nB: It is colder, with four seasons.",
 funFact:"Brazil has six distinct climate zones, from equatorial Amazon to subtropical Rio Grande do Sul."},

{type:"tip", title:"Chover and Impersonal Verbs",
 text:"Some verbs have no real subject. They describe weather events:\n\nchover (to rain) > chove, choveu, vai chover\nnevar (to snow) > neva, nevou\nventar (to be windy) > venta, ventou\n\nNever say 'eu chovo' or 'ele chove'. Only the 3rd person singular exists. The progressive form is common: 'está chovendo'.",
 deepDive:{title:"Weather 'Fazer' Expressions",
  text:"For many weather phenomena, Brazilians use 'fazer' (to make) impersonally. 'Faz sol' (it is sunny), 'faz frio' (it is cold), 'faz vento' (it is windy). This is equivalent to 'está' but slightly more formal and general. Both are correct."}},

{type:"mc", q:"Which is correct for 'It is raining'?",
 opts:["Eu chovo","Está chovendo","É chuva","Tem chovendo"],
 ans:"Está chovendo",
 hint:"Use the progressive form of the impersonal weather verb."},

{type:"mc", q:"What does 'o vento' mean?",
 opts:["the rain","the snow","the wind","the cloud"],
 ans:"the wind",
 hint:"This word is related to English 'ventilation'."},

{type:"fb", s:"A {1} estava forte e fiquei todo molhado.",
 a:["chuva"],
 opts:["chuva","neve","sol","vento"],
 hint:"Getting wet strongly suggests this type of precipitation.",
 sSrc:"The {1} was strong and I got all wet."},

{type:"match", pairs:[
 {trg:"chuva", src:"rain"},
 {trg:"chover", src:"to rain"},
 {trg:"vento", src:"wind"},
 {trg:"neve", src:"snow"}
]},

{type:"mc", q:"What is the difference between 'tempo' and 'clima'?",
 opts:["No difference","Tempo is now, clima is long-term","Clima is now, tempo is long-term","Both mean time only"],
 ans:"Tempo is now, clima is long-term",
 hint:"One describes today's conditions, the other the general pattern of a place."},

{type:"fb", s:"Vai {1} amanhã. Leve um guarda-chuva.",
 a:["chover"],
 opts:["chover","neve","sol","vento"],
 hint:"The umbrella suggests we are talking about rain as a future event.",
 sSrc:"It is going to {1} tomorrow. Take an umbrella."},

{type:"mc", q:"Which sentence is correct?",
 opts:["Eu chovo hoje","Ela chove","Está chovendo muito","Chovemos aqui"],
 ans:"Está chovendo muito",
 hint:"Weather verbs only exist in the third person singular."}
]},

{id:"ptv2_u7l3", title:"As estações", icon:"🍂", xp:15, board:true, steps:[
{type:"intro", title:"The four seasons",
 desc:"Brazil has four seasons but they differ greatly by region. Learn the season names and cultural facts about each.",
 goals:["Learn the four seasons","Know Brazilian seasonal patterns","Use 'em' with seasons"]},

{type:"teach", trg:"a estação", src:"the season", pos:"noun", gender:"f",
 note:"Also means 'station' as in train station. Context decides.\nPlural: as estações.",
 example:"A: Qual é sua estação favorita?\nB: O verão!\nA: Por quê?\nB: Gosto do calor e da praia.",
 exampleSrc:"A: What is your favorite season?\nB: Summer!\nA: Why?\nB: I like the heat and the beach.",
 funFact:"Near the equator, Brazilians say there are only 'estação chuvosa' and 'estação seca'. Four seasons is a southern concept."},

{type:"teach", trg:"o verão", src:"the summer", pos:"noun", gender:"m",
 note:"Summer. In Brazil: December through February. Note the accent and the nasal sound.",
 example:"A: Adoro o verão!\nB: Eu também. Vamos à praia?\nA: Claro! Que calor!\nB: Perfeito para nadar.",
 exampleSrc:"A: I love summer!\nB: Me too. Shall we go to the beach?\nA: Of course! What heat!\nB: Perfect for swimming.",
 funFact:"Carnaval happens in Brazilian summer. Rio in February can easily hit 40 degrees Celsius."},

{type:"teach", trg:"o inverno", src:"the winter", pos:"noun", gender:"m",
 note:"Winter. In Brazil: June through August. Mild in most of the country.",
 example:"A: Como é o inverno aqui?\nB: Não é muito frio.\nA: Nunca neva?\nB: No sul sim, aqui não.",
 exampleSrc:"A: What is winter like here?\nB: It is not very cold.\nA: Does it ever snow?\nB: In the south yes, here no.",
 funFact:"Rio de Janeiro winter averages 21 degrees. Many Europeans consider it perfect summer weather."},

{type:"teach", trg:"o outono", src:"the autumn", pos:"noun", gender:"m",
 note:"Autumn or Fall. March through May in Brazil. Subtle season in most of the country.",
 example:"A: O outono é lindo aqui.\nB: As folhas ficam amarelas?\nA: Algumas, sim.\nB: Que bonito!",
 exampleSrc:"A: Autumn is beautiful here.\nB: Do the leaves turn yellow?\nA: Some do, yes.\nB: How lovely!",
 funFact:"In northern Brazil, outono looks just like any other season. Palm trees do not change color."},

{type:"teach", trg:"a primavera", src:"the spring", pos:"noun", gender:"f",
 note:"Spring. September through November in Brazil. Flowers bloom and days warm up.",
 example:"A: Chegou a primavera!\nB: Que flores bonitas!\nA: Amo esta estação.\nB: Eu também, tudo renasce.",
 exampleSrc:"A: Spring has arrived!\nB: What beautiful flowers!\nA: I love this season.\nB: Me too, everything is reborn.",
 funFact:"Primavera comes from Latin 'prima vera' (first green). It is a feminine noun unlike other seasons."},

{type:"tip", title:"Seasons with 'em' and 'no/na'",
 text:"To say 'in summer' or 'in winter', use these contractions:\n\nno verão (in summer, m)\nno inverno (in winter, m)\nno outono (in autumn, m)\nna primavera (in spring, f)\n\nThe contractions come from em + o = no, em + a = na. The gender of the season decides which contraction you use.",
 deepDive:{title:"Brazilian vs European Seasons",
  text:"Brazil sits in the Southern Hemisphere. When Portugal has summer, Brazil has winter. This creates interesting contrasts: Brazilian Christmas is on a beach in high heat, while São João festivals in June happen in chilly evenings. Seasons depend entirely on your hemisphere."}},

{type:"mc", q:"When is summer in Brazil?",
 opts:["June to August","March to May","December to February","September to November"],
 ans:"December to February",
 hint:"Brazil is in the Southern Hemisphere, opposite to Europe and North America."},

{type:"mc", q:"Which season is feminine?",
 opts:["verão","inverno","outono","primavera"],
 ans:"primavera",
 hint:"It ends in a and uses 'a' as its article."},

{type:"fb", s:"Gosto muito do {1} porque faz calor.",
 a:["verão"],
 opts:["verão","inverno","outono","primavera"],
 hint:"The reason given is heat, so pick the hottest season.",
 sSrc:"I like {1} a lot because it is hot."},

{type:"match", pairs:[
 {trg:"verão", src:"summer"},
 {trg:"inverno", src:"winter"},
 {trg:"outono", src:"autumn"},
 {trg:"primavera", src:"spring"}
]},

{type:"mc", q:"How do you say 'in spring'?",
 opts:["no primavera","na primavera","em primavera","a primavera"],
 ans:"na primavera",
 hint:"This season is feminine, so use the feminine contraction of em with a."},

{type:"fb", s:"No {1} faz frio e no verão faz calor.",
 a:["inverno"],
 opts:["inverno","primavera","outono","verão"],
 hint:"The sentence contrasts this season with summer, so pick the opposite.",
 sSrc:"In {1} it is cold and in summer it is hot."},

{type:"mc", q:"What does 'estação' mean?",
 opts:["weather","climate","season","storm"],
 ans:"season",
 hint:"This word refers to a period of the year, not the current conditions."}
,

{type:"match", pairs:[
  {trg:"o tempo", src:"the weather"},
  {trg:"o clima", src:"the climate"},
  {trg:"a estação", src:"the season"}
]}]}

]}; export default UNIT_07;
