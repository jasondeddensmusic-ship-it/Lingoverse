const UNIT_12 = {n:12, lang:"pt", srcLang:"en", track:"v2", title:"Vamos viajar!", sub:"Travel and Transport", icon:"✈️", level:"A2.2", color:"#7B5EE8", lessons:[

{id:"ptv2_u12l1", title:"Meios de transporte", icon:"🚌", xp:15, board:true, steps:[
{type:"intro", title:"Ways to travel",
 desc:"Brazil is a huge country. Planes, buses, cars, and subways each have their place. Learn the key nouns for getting around.",
 goals:["Learn transport vocabulary","Use 'de' with transport modes","Say how you travel"]},

{type:"teach", trg:"a viagem", src:"the trip", pos:"noun", gender:"f",
 note:"Trip, journey. Feminine noun. Plural: as viagens.",
 example:"A: Como foi a viagem?\nB: Ótima!\nA: Para onde foi?\nB: Para o Rio.",
 exampleSrc:"A: How was the trip?\nB: Great!\nA: Where did you go?\nB: To Rio.",
 funFact:"From old French 'voyage', related to 'via' (way). Same root as English 'voyage'."},

{type:"teach", trg:"o avião", src:"the airplane", pos:"noun", gender:"m",
 note:"Airplane. Masculine noun ending in -ão. Plural: os aviões.",
 example:"A: Viaja de avião?\nB: Sim, é mais rápido.\nA: Tem medo?\nB: Um pouco.",
 exampleSrc:"A: Do you travel by plane?\nB: Yes, it is faster.\nA: Are you afraid?\nB: A little.",
 funFact:"The Brazilian Santos Dumont is celebrated here as the true inventor of the airplane, flying in Paris in 1906."},

{type:"teach", trg:"o trem", src:"the train", pos:"noun", gender:"m",
 note:"Train. Masculine noun. Plural: os trens.",
 example:"A: O trem chega às dez.\nB: De onde vem?\nA: De Campinas.\nB: Vou buscar no trem.",
 exampleSrc:"A: The train arrives at ten.\nB: Where from?\nA: From Campinas.\nB: I will pick them up at the train.",
 funFact:"Brazil's passenger trains are limited, but the 'Trem do Corcovado' in Rio takes tourists up to Christ the Redeemer."},

{type:"teach", trg:"o ônibus", src:"the bus", pos:"noun", gender:"m",
 note:"Bus. Masculine noun. Same form in singular and plural: o ônibus, os ônibus.",
 example:"A: O ônibus passa aqui?\nB: Sim, de dez em dez minutos.\nA: Qual linha?\nB: A 172.",
 exampleSrc:"A: Does the bus pass here?\nB: Yes, every ten minutes.\nA: Which line?\nB: The 172.",
 funFact:"In Brazil, long-distance buses are called 'ônibus rodoviário' and link even the most remote towns."},

{type:"teach", trg:"o carro", src:"the car", pos:"noun", gender:"m",
 note:"Car. Masculine noun. Plural: os carros. Also called 'o automóvel'.",
 example:"A: Vai de carro?\nB: Sim, é mais confortável.\nA: Com quem?\nB: Com minha família.",
 exampleSrc:"A: Are you going by car?\nB: Yes, it is more comfortable.\nA: With whom?\nB: With my family.",
 funFact:"Brazil manufactures its own cars and is one of the world's top ten largest auto producers."},

{type:"teach", trg:"o metrô", src:"the subway", pos:"noun", gender:"m",
 note:"Subway, metro. Masculine noun. Short for 'metropolitano'.",
 example:"A: Pega o metrô?\nB: Todo dia.\nA: Qual linha?\nB: A linha azul.",
 exampleSrc:"A: Do you take the subway?\nB: Every day.\nA: Which line?\nB: The blue line.",
 funFact:"São Paulo has the largest metro system in Brazil, while Rio's metro is famous for its beach-front stations."},

{type:"tip", title:"Travel Preposition: DE + transport",
 text:"To say how you travel, Portuguese uses 'de' + mode:\n\nVou de avião. (I'm going by plane.)\nViajo de carro. (I travel by car.)\nVolta de ônibus. (He returns by bus.)\n\nException: on foot = a pé, not 'de pé' (which means 'standing'). Pay attention to the article: 'de carro' (general) vs 'no carro' (in the specific car).",
 deepDive:{title:"De vs Em with Transport",
  text:"There is a subtle difference:\n\nVou de trem. (I go by train.) General mode.\nVou no trem das dez. (I go on the ten o'clock train.) Specific train.\n\n'De' is general and abstract. 'No/na' is specific and concrete. Both are correct, used in different situations."}},

{type:"mc", q:"Which word means 'the airplane'?",
 opts:["o avião","o carro","o ônibus","o trem"],
 ans:"o avião",
 hint:"It flies through the air, ends in -ão."},

{type:"mc", q:"How do you say 'I go by car'?",
 opts:["Vou em carro","Vou de carro","Vou no carro","Vou carro"],
 ans:"Vou de carro",
 hint:"Portuguese uses a one-letter preposition for general transport modes."},

{type:"fb", s:"O {1} passa a cada dez minutos na nossa rua.",
 a:["ônibus"],
 opts:["ônibus","avião","trem","metrô"],
 hint:"Large public road vehicle with a number or line; runs on streets.",
 sSrc:"The {1} passes every ten minutes on our street."},

{type:"match", pairs:[
 {trg:"avião", src:"airplane"},
 {trg:"trem", src:"train"},
 {trg:"ônibus", src:"bus"},
 {trg:"metrô", src:"subway"}
]},

{type:"mc", q:"'Fazer uma viagem' means:",
 opts:["to drive a car","to buy a ticket","to take a trip","to miss the train"],
 ans:"to take a trip",
 hint:"The verb 'fazer' combined with the noun 'viagem' means exactly this."},

{type:"fb", s:"Em São Paulo, muita gente usa o {1} para evitar o trânsito.",
 a:["metrô"],
 opts:["metrô","carro","avião","hotel"],
 hint:"Underground public transport that avoids street traffic.",
 sSrc:"In São Paulo, many people use the {1} to avoid traffic."},

{type:"mc", q:"Which transport word has the same form in singular and plural?",
 opts:["trem","carro","avião","ônibus"],
 ans:"ônibus",
 hint:"It already ends in -s, so no plural ending is added."}
]},

{id:"ptv2_u12l2", title:"No aeroporto", icon:"🛫", xp:15, board:true, steps:[
{type:"intro", title:"Airport and tickets",
 desc:"When you travel, you need to know airport, station, ticket, suitcase, and hotel. These are the words that keep you moving.",
 goals:["Learn airport and travel nouns","Talk about tickets and bags","Describe arriving at a hotel"]},

{type:"teach", trg:"o aeroporto", src:"the airport", pos:"noun", gender:"m",
 note:"Airport. Masculine noun. Combines 'aéreo' (aerial) and 'porto' (port).",
 example:"A: O aeroporto é longe?\nB: Uns quarenta minutos.\nA: De carro?\nB: Sim, melhor de carro.",
 exampleSrc:"A: Is the airport far?\nB: About forty minutes.\nA: By car?\nB: Yes, better by car.",
 funFact:"Brazil's biggest airport is São Paulo Guarulhos, handling over forty million passengers annually."},

{type:"teach", trg:"a estação", src:"the station", pos:"noun", gender:"f",
 note:"Station (train, bus, or subway). Feminine noun. Plural: as estações.",
 example:"A: Onde fica a estação?\nB: Logo ali.\nA: Qual linha passa?\nB: A vermelha.",
 exampleSrc:"A: Where is the station?\nB: Right over there.\nA: Which line comes through?\nB: The red one.",
 funFact:"'Estação' also means 'season' (of the year): as quatro estações (the four seasons)."},

{type:"teach", trg:"a passagem", src:"the ticket", pos:"noun", gender:"f",
 note:"Ticket (for long travel), also means 'passage'. Feminine noun. For cinema/event tickets use 'ingresso' or 'bilhete'.",
 example:"A: Já comprou a passagem?\nB: Sim, ontem.\nA: Quanto foi?\nB: Quatrocentos reais.",
 exampleSrc:"A: Did you buy the ticket?\nB: Yes, yesterday.\nA: How much was it?\nB: Four hundred reais.",
 funFact:"'Passagem' comes from 'passar' (to pass through). It applies to planes, trains, and long-distance buses."},

{type:"teach", trg:"a mala", src:"the suitcase", pos:"noun", gender:"f",
 note:"Suitcase, luggage. Feminine noun. 'Bagagem' is the broader word for all your luggage.",
 example:"A: Quantas malas?\nB: Só uma.\nA: É pesada?\nB: Vinte quilos.",
 exampleSrc:"A: How many suitcases?\nB: Only one.\nA: Is it heavy?\nB: Twenty kilos.",
 funFact:"'Fazer as malas' (to pack the bags) is the common phrase for preparing to travel."},

{type:"teach", trg:"o hotel", src:"the hotel", pos:"noun", gender:"m",
 note:"Hotel. Masculine noun. Plural: os hotéis (drop -l, add accent + -is).",
 example:"A: Onde vamos ficar?\nB: Num hotel perto da praia.\nA: É caro?\nB: Nem tanto.",
 exampleSrc:"A: Where are we staying?\nB: At a hotel near the beach.\nA: Is it expensive?\nB: Not that much.",
 funFact:"Brazil popularized the 'pousada', a small family-run hotel, often at beaches and in colonial towns."},

{type:"tip", title:"Plurals Ending in -L",
 text:"Nouns ending in -l change in the plural:\n\n-al + is: hospital / hospitais\n-el + is: hotel / hotéis\n-il + is: fácil / fáceis\n-ol + is: espanhol / espanhóis\n\nThe -l drops and -is is added, often with an accent. These are very regular patterns once you spot them.",
 deepDive:{title:"Passagem vs Ingresso vs Bilhete",
  text:"Three words, all about tickets:\n\nPassagem: travel tickets (plane, train, long-distance bus).\nIngresso: entry tickets for events (cinema, stadium, concert).\nBilhete: short-distance or small tickets (city bus, metro, lottery).\n\nBrazilians may mix them in casual speech, but the difference is clear in formal contexts."}},

{type:"fb", s:"Preciso fazer as {1} antes da viagem amanhã.",
 a:["malas"],
 opts:["malas","passagens","hotéis","estações"],
 hint:"The bags you pack your clothes into. Plural.",
 sSrc:"I need to pack my {1} before the trip tomorrow."},

{type:"fb", s:"Vou ficar num {1} perto da praia de Copacabana.",
 a:["hotel"],
 opts:["hotel","aeroporto","estação","ônibus"],
 hint:"The place where you pay to sleep while traveling.",
 sSrc:"I'm going to stay at a {1} near Copacabana beach."},

{type:"mc", q:"Where do you catch a plane?",
 opts:["no aeroporto","no hotel","no escritório","na estação"],
 ans:"no aeroporto",
 hint:"The place for air travel, combining 'air' and 'port' in one word."},

{type:"mc", q:"Which word means 'suitcase'?",
 opts:["o hotel","a mala","a passagem","a estação"],
 ans:"a mala",
 hint:"Feminine noun; what you pack clothes into for a trip."},

{type:"fb", s:"Perdi a minha {1} e não posso entrar no avião.",
 a:["passagem"],
 opts:["passagem","mala","estação","viagem"],
 hint:"The paper or digital code you need to board a flight.",
 sSrc:"I lost my {1} and I cannot board the plane."},

{type:"match", pairs:[
 {trg:"aeroporto", src:"airport"},
 {trg:"estação", src:"station"},
 {trg:"passagem", src:"ticket"},
 {trg:"hotel", src:"hotel"}
]},

{type:"mc", q:"What is the plural of 'hotel'?",
 opts:["hotels","hoteles","hotéis","hotéus"],
 ans:"hotéis",
 hint:"Portuguese nouns ending in -el drop the -l and add -is with an accent."},

{type:"fb", s:"O trem sai da {1} central às oito da manhã.",
 a:["estação"],
 opts:["estação","passagem","mala","viagem"],
 hint:"The place where trains and buses depart and arrive.",
 sSrc:"The train leaves the central {1} at eight in the morning."},

{type:"mc", q:"Which sentence means 'I have a reservation at the hotel'?",
 opts:["Tenho uma passagem no hotel","Tenho uma estação no hotel","Tenho uma mala no hotel","Tenho uma reserva no hotel"],
 ans:"Tenho uma reserva no hotel",
 hint:"The word '___' covers bookings for rooms or tables."}
]},

{id:"ptv2_u12l3", title:"Verbos de viagem", icon:"🧳", xp:15, board:true, steps:[
{type:"intro", title:"Travel verbs and adverbs",
 desc:"Round out your travel kit with the verbs for traveling, arriving, leaving, and reserving, plus the useful adverbs rápido, primeiro, and depois.",
 goals:["Use viajar, chegar, partir, reservar","Order events with primeiro and depois","Describe speed with rápido"]},

{type:"teach", trg:"viajar", src:"to travel", pos:"verb", gender:null,
 note:"Regular -ar verb: viajo, viaja, viajamos, viajam.",
 example:"A: Viaja muito?\nB: Adoro viajar!\nA: Para onde?\nB: Portugal e Argentina.",
 exampleSrc:"A: Do you travel a lot?\nB: I love to travel!\nA: Where to?\nB: Portugal and Argentina.",
 funFact:"Brazilians love 'férias' (vacation). Workers are entitled to thirty paid days off per year by law."},

{type:"teach", trg:"chegar", src:"to arrive", pos:"verb", gender:null,
 note:"Regular -ar verb: chego, chega, chegamos, chegam. Spelling note: 'chegue' keeps the hard g.",
 example:"A: A que horas chega?\nB: Às oito.\nA: De onde?\nB: De São Paulo.",
 exampleSrc:"A: What time does it arrive?\nB: At eight.\nA: From where?\nB: From São Paulo.",
 funFact:"'Chegar' also means 'to be enough': 'Já chega!' means 'That's enough!' or 'Stop!'"},

{type:"teach", trg:"partir", src:"to depart", pos:"verb", gender:null,
 note:"Regular -ir verb: parto, parte, partimos, partem. Formal; 'sair' is more common for 'leave'.",
 example:"A: Quando parte o avião?\nB: Às seis da manhã.\nA: Muito cedo!\nB: Pois é.",
 exampleSrc:"A: When does the plane depart?\nB: At six in the morning.\nA: Very early!\nB: Indeed.",
 funFact:"'Partir' also means 'to break': 'partir o pão' (to break bread). Same Latin root as English 'part'."},

{type:"teach", trg:"reservar", src:"to reserve", pos:"verb", gender:null,
 note:"Regular -ar verb: reservo, reserva, reservamos, reservam. Use for hotels, tables, and tickets.",
 example:"A: Já reservou o hotel?\nB: Sim, ontem.\nA: Por quantas noites?\nB: Cinco noites.",
 exampleSrc:"A: Did you reserve the hotel?\nB: Yes, yesterday.\nA: For how many nights?\nB: Five nights.",
 funFact:"Brazilians increasingly book through apps like Booking, Airbnb, and Decolar, often last-minute."},

{type:"teach", trg:"rápido", src:"fast", pos:"adj", gender:"m",
 note:"Fast, quick. Adjective that changes for gender: rápido/rápida. Also used as adverb (fast, quickly).",
 example:"A: O avião é mais rápido.\nB: Mas também mais caro.\nA: É verdade.\nB: Vou de ônibus.",
 exampleSrc:"A: The plane is faster.\nB: But also more expensive.\nA: That is true.\nB: I will go by bus.",
 funFact:"From Latin 'rapidus'. Same root as English 'rapid' and 'rape' (in its original sense of 'snatching')."},

{type:"teach", trg:"primeiro", src:"first", pos:"adv", gender:null,
 note:"First. Used as adverb (first, firstly) and as adjective (primeiro/primeira).",
 example:"A: Primeiro vamos ao hotel.\nB: E depois?\nA: À praia.\nB: Perfeito!",
 exampleSrc:"A: First we go to the hotel.\nB: And then?\nA: To the beach.\nB: Perfect!",
 funFact:"'O primeiro de abril' is April Fool's Day in Brazil, called 'Dia da Mentira' (Day of Lies)."},

{type:"teach", trg:"depois", src:"afterwards", pos:"adv", gender:null,
 note:"After, afterwards, then. Invariable adverb.",
 example:"A: Chegamos, e depois?\nB: Vamos jantar.\nA: Onde?\nB: No restaurante do hotel.",
 exampleSrc:"A: We arrive, and then?\nB: We will have dinner.\nA: Where?\nB: At the hotel restaurant.",
 funFact:"'Até depois!' (see you later) is a casual farewell in Brazil, equivalent to 'catch you later'."},

{type:"tip", title:"Chegar vs Partir vs Sair",
 text:"Three verbs about moving:\n\nChegar = to arrive. Chego às oito.\nPartir = to depart (formal). O trem parte às seis.\nSair = to leave (casual). Saio de casa às sete.\n\nIn everyday speech, Brazilians say 'sair' more than 'partir'. 'Partir' stays in formal announcements and travel tickets.",
 deepDive:{title:"Primeiro / Depois / Finalmente",
  text:"A simple way to sequence events:\n\nPrimeiro vamos ao aeroporto.\nDepois pegamos o avião.\nFinalmente chegamos ao Rio.\n\n(First we go to the airport. Then we take the plane. Finally we arrive in Rio.) These three words turn a list of actions into a clear itinerary."}},

{type:"mc", q:"Which verb means 'to arrive'?",
 opts:["chegar","reservar","viajar","partir"],
 ans:"chegar",
 hint:"The opposite of leaving."},

{type:"mc", q:"How do you say 'fast' (feminine)?",
 opts:["rápido","rápida","rápidos","rápidas"],
 ans:"rápida",
 hint:"Change the ending from -o to -a for feminine nouns."},

{type:"fb", s:"O avião {1} às oito em ponto.",
 a:["parte"],
 opts:["parte","chega","viaja","reserva"],
 hint:"The 3rd-person singular of the verb for a plane taking off from the airport.",
 sSrc:"The plane {1} at eight sharp."},

{type:"match", pairs:[
 {trg:"viajar", src:"to travel"},
 {trg:"chegar", src:"to arrive"},
 {trg:"primeiro", src:"first"},
 {trg:"depois", src:"afterwards"}
,{trg:"a viagem", src:"the trip"}]},

{type:"mc", q:"'Reservei um hotel em Salvador' means:",
 opts:["I visited a hotel in Salvador","I sold a hotel in Salvador","I booked a hotel in Salvador","I own a hotel in Salvador"],
 ans:"I booked a hotel in Salvador",
 hint:"The verb 'reservar' is what you do when planning a stay."},

{type:"fb", s:"{1} vamos ao hotel e depois à praia.",
 a:["Primeiro"],
 opts:["Primeiro","Rápido","Chega","Reservo"],
 hint:"An adverb for ordering steps, meaning 'in the first place'.",
 sSrc:"{1} we go to the hotel and afterwards to the beach."},

{type:"mc", q:"Which is faster, in Brazilian travel?",
 opts:["O metrô é mais rápido que o avião","O carro é mais rápido que o avião","O ônibus é mais rápido que o avião","O avião é mais rápido que o ônibus"],
 ans:"O avião é mais rápido que o ônibus",
 hint:"Air travel beats road travel for speed over long distances."},

{type:"fb", s:"Nós {1} para o Brasil todos os anos.",
 a:["viajamos"],
 opts:["viajamos","chegamos","partimos","reservamos"],
 hint:"The 'nós' (we) form of the verb meaning 'to travel'.",
 sSrc:"We {1} to Brazil every year."},

{type:"mc", q:"What does 'depois' mean?",
 opts:["afterwards","never","always","before"],
 ans:"afterwards",
 hint:"A sequencing word pointing to what comes later."}
]},

{id:"ptv2_u12l4", title:"Uma carta informal", icon:"✉️", xp:15, board:true, steps:[
{type:"intro", title:"Writing Short Informal Letters",
 desc:"Learn to write short informal letters, emails, and WhatsApp messages in Brazilian Portuguese. Essential for CAPLE A2 and daily communication.",
 goals:["Open a letter casually","Use common body phrases","Close with a warm farewell"]},

{type:"teach", trg:"Oi", src:"Hi (casual letter opening)", pos:"intj", gender:null,
 note:"The most natural casual opening for letters, emails, and WhatsApp messages in Brazil. Add the recipient's name: 'Oi, Ana!'",
 example:"A: Oi, Ana! Como vai você?\nB: Oi, João! Estou bem, obrigada.",
 exampleSrc:"A: Hi, Ana! How are you?\nB: Hi, João! I am well, thank you.",
 funFact:"Brazilians almost never write 'Prezado/a' to friends. 'Oi' opens ninety percent of all informal messages."},

{type:"teach", trg:"Como vai você?", src:"How are you?", pos:"intj", gender:null,
 note:"Common informal check-in. Shorter than 'Tudo bem?' but just as friendly.",
 example:"A: Como vai você?\nB: Vou bem! E você?\nA: Tudo bem.",
 exampleSrc:"A: How are you?\nB: I am well! And you?\nA: All good.",
 funFact:"'Como vai?' can stand alone without 'você'. Brazilians drop pronouns all the time in casual messages."},

{type:"teach", trg:"Espero que esteja bem.", src:"I hope you are well.", pos:"intj", gender:null,
 note:"Polite letter-body opener after the greeting. Signals care without being too formal.",
 example:"A: Espero que esteja bem, João!\nB: Estou bem, sim! Obrigado.",
 exampleSrc:"A: I hope you are well, João!\nB: I am well, yes! Thank you.",
 funFact:"'Espero que' triggers the subjunctive ('esteja' instead of 'está'). At A2 you use it as a fixed phrase before learning the full subjunctive at B1."},

{type:"teach", trg:"Até logo", src:"see you soon", pos:"intj", gender:null,
 note:"Friendly closing that assumes you will meet again. Works in letters and spoken goodbyes.",
 example:"A: Até logo, Ana!\nB: Até logo! Tchau tchau.",
 exampleSrc:"A: See you soon, Ana!\nB: See you soon! Bye bye.",
 funFact:"'Até' means 'until'. You can swap 'logo' for 'amanhã' (tomorrow), 'breve' (soon), or 'mais tarde' (later) to be more specific."},

{type:"teach", trg:"Um beijo", src:"a kiss", pos:"noun", gender:"m",
 note:"Affectionate letter closing. Brazilians use this freely between friends, regardless of gender.",
 example:"A: Escrevo mais depois. Um beijo!\nB: Um beijo para você também!",
 exampleSrc:"A: I will write more later. A kiss!\nB: A kiss for you too!",
 funFact:"In Brazil, one air-kiss on the cheek is the standard greeting between friends. 'Um beijo' in a message mirrors this physical warmth."},

{type:"teach", trg:"Um abraço", src:"a hug", pos:"noun", gender:"m",
 note:"Warm but slightly less intimate closing than 'Um beijo'. Common between male friends and colleagues.",
 example:"A: Boa viagem! Um abraço, João.\nB: Obrigado! Um abraço para você.",
 exampleSrc:"A: Have a good trip! A hug, João.\nB: Thank you! A hug for you too.",
 funFact:"'Abraço' comes from 'braço' (arm). A hug is literally an arm-wrap. Brazilians are famous for being physically expressive and warm."},

{type:"teach", trg:"Saudades", src:"missing you", pos:"noun", gender:"f",
 note:"Unique Portuguese concept: deep longing for someone or something. Plural form 'saudades' is most common.",
 example:"A: Muitas saudades de você!\nB: Eu também! Quando você vem?\nA: Em dezembro.",
 exampleSrc:"A: I miss you so much!\nB: Me too! When are you coming?\nA: In December.",
 funFact:"'Saudade' has no perfect English translation. It is a bittersweet longing for someone absent. Fado music, Portugal's national genre, is built entirely around this feeling."},

{type:"tip", title:"Informal Letter Structure",
 text:"A short informal message in Brazilian Portuguese has three parts:\n\n1. Opening: 'Oi, [nome]!' or 'Oi!'\n2. Body: 'Espero que esteja bem.' + your news or question\n3. Closing: 'Um beijo,' or 'Um abraço,' + your name\n\nWhatsApp messages often skip the opening and go straight to body. The closing is optional in rapid chats but expected in longer messages.",
 deepDive:{title:"Beijo vs Abraço vs Saudades",
  text:"Use as closings:\n\nUm beijo: close friends and family, all genders in Brazil.\nUm abraço: broad use, safe between men who prefer not to use 'beijo'.\nSaudades: when you genuinely miss the person, often in a final line before the closing.\n\nExample order: 'Saudades de você. Um beijo, Ana.' (Missing you. A kiss, Ana.)"}},

{type:"mc", q:"Which phrase opens an informal Brazilian letter most naturally?",
 opts:["Oi, Ana!","Boa tarde,","Muito obrigado","Prezado Senhor,"],
 ans:"Oi, Ana!",
 hint:"Use the same greeting you would in a text message to a friend."},

{type:"fb", s:"Uma mensagem informal começa com {1}, não com 'Prezado Senhor'.",
 a:["Oi"],
 opts:["Oi","Olá","Sim","Não"],
 hint:"The short, warm Brazilian greeting that opens casual messages and WhatsApp chats.",
 sSrc:"An informal message opens with {1}, not with 'Dear Sir'."},

{type:"fb", s:"{1} você?\nVou bem, obrigada! E você?",
 a:["Como vai"],
 opts:["Como vai","Espero que","Até logo","Saudades de"],
 hint:"A two-word phrase asking how someone is going, often used to open a message body.",
 sSrc:"{1} you?\nI am well, thanks! And you?"},

{type:"mc", q:"'Espero que esteja bem' is best used:",
 opts:["As a letter closing","As a letter-body opener after the greeting","As the subject line of an email","As a question"],
 ans:"As a letter-body opener after the greeting",
 hint:"It signals care and warmth right after you say hello."},

{type:"fb", s:"Boa viagem para o Rio! {1}!\nObrigado, até logo!",
 a:["Um abraço"],
 opts:["Um abraço","Saudades","Sim","Até logo"],
 hint:"A warm physical-gesture closing, common between friends before a trip.",
 sSrc:"Have a good trip to Rio! {1}!\nThank you, see you soon!"},

{type:"mc", q:"'Muitas saudades de você!' means:",
 opts:["Thank you for writing!","See you soon!","I miss you so much!","Nice to meet you!"],
 ans:"I miss you so much!",
 hint:"This word expresses a deep Portuguese longing for someone absent."},

{type:"fb", s:"Escrevo mais depois. {1}, Ana.",
 a:["Um beijo"],
 opts:["Um beijo","Como vai","Saudades","Espero que"],
 hint:"An affectionate one-word closing used freely between friends in Brazil.",
 sSrc:"I will write more later. {1}, Ana."},

{type:"mc", q:"Which phrase means 'See you soon' at the end of a message?",
 opts:["Um beijo","Espero que esteja bem.","Saudades","Até logo"],
 ans:"Até logo",
 hint:"A farewell that implies you will meet again soon."},

{type:"mc", q:"'Espero que esteja bem.' is a Portuguese phrase meaning:",
 opts:["I hope you are well.","See you soon.","A hug from me.","I miss you very much."],
 ans:"I hope you are well.",
 hint:"A warm wish placed at the start of the message body."},

{type:"match", pairs:[
 {trg:"Como vai você?", src:"How are you?"},
 {trg:"Um beijo", src:"a kiss (closing)"},
 {trg:"Um abraço", src:"a hug (closing)"},
 {trg:"Saudades", src:"missing you"}
]}
]},

{id:"ptv2_u12l_a2_body_clothes", title:"Corpo e roupa", icon:"👕", xp:20, board:true, steps:[
{type:"intro", title:"Body and clothing vocabulary",
 desc:"Expand your body vocabulary beyond unit 9 basics, and learn key clothing words for everyday conversation.",
 goals:["Name six more body parts","Learn four clothing items","Use 'usar' to say what someone is wearing"]},

{type:"teach", trg:"o nariz", src:"the nose", pos:"noun", gender:"m",
 note:"Nose. Masculine noun. Plural: os narizes.",
 example:"A: O nariz está frio!\nB: Faz muito frio hoje.\nA: Sim, vou comprar um casaco.",
 exampleSrc:"A: My nose is cold!\nB: It is very cold today.\nA: Yes, I am going to buy a coat.",
 funFact:"In Brazilian Portuguese, 'dar de nariz' (to nose-dive) describes a bad fall, borrowed directly from the image of landing face-first."},

{type:"teach", trg:"as orelhas", src:"the ears", pos:"noun", gender:"f",
 note:"Ears. Feminine plural noun. Singular: a orelha. Different from 'o ouvido' (the inner ear, sense of hearing).",
 example:"A: As orelhas estão geladas!\nB: Faz frio lá fora?\nA: Faz muito frio.",
 exampleSrc:"A: My ears are frozen!\nB: Is it cold outside?\nA: It is very cold.",
 funFact:"'Orelha' is the visible outer ear. 'Ouvido' is the sense of hearing or the inner ear. Brazilians never confuse them."},

{type:"teach", trg:"o cabelo", src:"the hair", pos:"noun", gender:"m",
 note:"Hair (on the head). Masculine noun. Usually singular in Portuguese: 'o cabelo' even for a full head of hair.",
 example:"A: O cabelo é bonito!\nB: Obrigada! Cortei ontem.\nA: Ficou muito bom.",
 exampleSrc:"A: Your hair is beautiful!\nB: Thank you! I cut it yesterday.\nA: It looks very good.",
 funFact:"Brazil has the second-largest beauty industry in the world. Hair care ('cuidado com o cabelo') is a major cultural preoccupation."},

{type:"teach", trg:"o braço", src:"the arm", pos:"noun", gender:"m",
 note:"Arm. Masculine noun. Plural: os braços. Not to be confused with 'o abraço' (a hug), which literally means 'an arm-wrap'.",
 example:"A: O braço está doendo.\nB: Você se machucou?\nA: Sim, no trabalho.\nB: Vai ao médico.",
 exampleSrc:"A: My arm is hurting.\nB: Did you hurt yourself?\nA: Yes, at work.\nB: Go to the doctor.",
 funFact:"'Dar o braço' (to give the arm) means to link arms when walking, a common gesture between friends and couples in Brazil."},

{type:"teach", trg:"o estômago", src:"the stomach", pos:"noun", gender:"m",
 note:"Stomach. Masculine noun. In everyday speech Brazilians also say 'a barriga' (the belly).",
 example:"A: O estômago está doendo.\nB: Comeu bem hoje?\nA: Não comi nada.\nB: Come alguma coisa!",
 exampleSrc:"A: My stomach is hurting.\nB: Have you eaten well today?\nA: I have not eaten anything.\nB: Eat something!",
 funFact:"'Ter estômago' (to have stomach) is a figure of speech meaning to have the nerve or courage to do something unpleasant."},

{type:"teach", trg:"o coração", src:"the heart", pos:"noun", gender:"m",
 note:"Heart. Masculine noun. Plural: os corações. Also used figuratively for love and emotion.",
 example:"A: O coração é um músculo.\nB: Sim, muito importante.\nA: Precisa de exercício.",
 exampleSrc:"A: The heart is a muscle.\nB: Yes, very important.\nA: It needs exercise.",
 funFact:"'De coração' (from the heart) is a common phrase in Brazil for expressing sincere feelings, as in 'Obrigado de coração' (Thank you from the heart)."},

{type:"tip", title:"Body-part pain with DOER",
 text:"Portuguese uses 'doer' (to hurt) like an impersonal verb, similar to how English uses 'my ... hurts':\n\nO braço está doendo. (My arm is hurting.)\nO estômago dói. (My stomach hurts.)\nAs orelhas doem no frio. (Ears hurt in the cold.)\n\n'Estar doendo' (progressive) = ongoing pain. 'Doer / dói' (simple) = general or habitual pain. Both are natural.",
 deepDive:{title:"Orelha vs Ouvido",
  text:"Two words for 'ear':\n\nA orelha: the outer, visible ear. What you can see and touch.\nO ouvido: the inner ear, or the sense of hearing.\n\nPractical examples:\nEle tem as orelhas grandes. (He has big ears, physical description.)\nEle tem bom ouvido musical. (He has a good musical ear, sense/ability.) Never swap them."}},

{type:"teach", trg:"a camiseta", src:"the t-shirt", pos:"noun", gender:"f",
 note:"T-shirt. Feminine noun. The most common casual top in Brazil, worn year-round in warm climates.",
 example:"A: Gosto desta camiseta!\nB: É nova?\nA: Sim, comprei ontem.\nB: Muito bonita.",
 exampleSrc:"A: I like this t-shirt!\nB: Is it new?\nA: Yes, I bought it yesterday.\nB: Very nice.",
 funFact:"Brazilians wear camisetas in almost all casual settings. Dress codes for restaurants or clubs will specify 'no camiseta' to require smarter clothing."},

{type:"teach", trg:"a saia", src:"the skirt", pos:"noun", gender:"f",
 note:"Skirt. Feminine noun. Plural: as saias.",
 example:"A: A saia é bonita.\nB: Obrigada! Comprei na loja.\nA: É cara?\nB: Não, é barata.",
 exampleSrc:"A: The skirt is nice.\nB: Thank you! I bought it at the store.\nA: Is it expensive?\nB: No, it is cheap.",
 funFact:"Brazil's Carnaval is famous for elaborate costumes, but the everyday saia is a staple of informal Brazilian fashion for women."},

{type:"teach", trg:"o casaco", src:"the coat", pos:"noun", gender:"m",
 note:"Coat, jacket. Masculine noun. Used in cold weather or air-conditioned spaces.",
 example:"A: Precisa de um casaco?\nB: Sim, está frio.\nA: Tenho um casaco aqui.\nB: Obrigado!",
 exampleSrc:"A: Do you need a coat?\nB: Yes, it is cold.\nA: I have a coat here.\nB: Thank you!",
 funFact:"In São Paulo's 'inverno europeu' (cold winter by Brazilian standards), casaco sales spike. In Rio, a casaco is often only needed in air-conditioned shopping malls."},

{type:"teach", trg:"usar", src:"to wear / to use", pos:"verb", gender:null,
 note:"To wear (clothing) or to use (an object). Regular -ar verb: uso, usa, usamos, usam.",
 example:"A: Você usa camiseta no trabalho?\nB: Não, uso camisa.\nA: Eu uso camiseta sempre.\nB: Depende do trabalho.",
 exampleSrc:"A: Do you wear a t-shirt to work?\nB: No, I wear a shirt.\nA: I always wear a t-shirt.\nB: It depends on the job.",
 funFact:"'Usar' is the everyday Brazilian verb for wearing clothes. 'Vestir' exists too but is more formal or reflexive ('vestir-se' = to get dressed)."},

{type:"mc", q:"Which word is the outer visible ear?",
 opts:["a orelha","o ouvido","o coração","o nariz"],
 ans:"a orelha",
 hint:"The physical structure you can see on the side of someone's head."},

{type:"fb", s:"Está frio! Preciso comprar um {1} para sair.",
 a:["casaco"],
 opts:["casaco","camiseta","saia","camisa"],
 hint:"The outer garment you wear over other clothes when it is cold.",
 sSrc:"It is cold! I need to buy a {1} to go out."},

{type:"mc", q:"'Usar' in the sentence 'Ela usa camiseta' means:",
 opts:["She buys a t-shirt","She wears a t-shirt","She washes a t-shirt","She likes a t-shirt"],
 ans:"She wears a t-shirt",
 hint:"In the context of clothing, 'usar' always means to wear."},

{type:"fb", s:"O {1} está doendo, comi muito hoje.",
 a:["estômago"],
 opts:["estômago","coração","nariz","braço"],
 hint:"The digestive organ that hurts when you overeat.",
 sSrc:"My {1} is hurting. I ate too much today."},

{type:"match", pairs:[
 {trg:"o nariz", src:"the nose"},
 {trg:"as orelhas", src:"the ears"},
 {trg:"o cabelo", src:"the hair"},
 {trg:"o braço", src:"the arm"}
]},

{type:"fb", s:"Ela não {1} saia no trabalho, prefere calça.",
 a:["usa"],
 opts:["usa","tem","faz","compra"],
 hint:"The verb for wearing clothing items (3rd-person singular, present).",
 sSrc:"She does not {1} a skirt at work, she prefers pants."},

{type:"mc", q:"Which body part is used figuratively in 'Obrigado de coração'?",
 opts:["o braço","o nariz","o coração","o estômago"],
 ans:"o coração",
 hint:"This organ is universally linked to emotion and sincere feeling."},

{type:"fb", s:"O {1} de Ana é muito bonito, ela cortou ontem.",
 a:["cabelo"],
 opts:["cabelo","nariz","casaco","braço"],
 hint:"What grows on the top of your head.",
 sSrc:"Ana's {1} is very nice, she cut it yesterday."},

{type:"match", pairs:[
 {trg:"a camiseta", src:"the t-shirt"},
 {trg:"a saia", src:"the skirt"},
 {trg:"o casaco", src:"the coat"},
 {trg:"usar", src:"to wear / to use"}
]},

{type:"fb", s:"O médico disse: o {1} precisa de exercício para ficar forte.",
 a:["coração"],
 opts:["coração","nariz","cabelo","casaco"],
 hint:"The vital muscle that pumps blood throughout the body.",
 sSrc:"The doctor said: the {1} needs exercise to stay strong."},

{type:"mc", q:"What is the everyday Brazilian word for wearing clothing?",
 opts:["vestir","ter","fazer","usar"],
 ans:"usar",
 hint:"A regular -ar verb meaning 'to use', also used for clothing in everyday speech."},

{type:"mc", q:"Which sentence is correct Portuguese?",
 opts:["O braço está doendo.","O braço está hurt.","Braço é hurt.","O braço doer."],
 ans:"O braço está doendo.",
 hint:"Use 'estar' + present participle (-ndo form) for ongoing pain."}
]}

]}; export default UNIT_12;
