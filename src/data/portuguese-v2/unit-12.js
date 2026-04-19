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
 opts:["o trem","o avião","o carro","o ônibus"],
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
 opts:["to buy a ticket","to take a trip","to miss the train","to drive a car"],
 ans:"to take a trip",
 hint:"The verb 'fazer' combined with the noun 'viagem' means exactly this."},

{type:"fb", s:"Em São Paulo, muita gente usa o {1} para evitar o trânsito.",
 a:["metrô"],
 opts:["metrô","carro","avião","hotel"],
 hint:"Underground public transport that avoids street traffic.",
 sSrc:"In São Paulo, many people use the {1} to avoid traffic."},

{type:"mc", q:"Which transport word has the same form in singular and plural?",
 opts:["carro","avião","ônibus","trem"],
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

{type:"mc", q:"Where do you catch a plane?",
 opts:["na estação","no aeroporto","no hotel","no escritório"],
 ans:"no aeroporto",
 hint:"The place for air travel, combining 'air' and 'port' in one word."},

{type:"mc", q:"Which word means 'suitcase'?",
 opts:["a mala","a passagem","a estação","o hotel"],
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
 opts:["Tenho uma mala no hotel","Tenho uma reserva no hotel","Tenho uma passagem no hotel","Tenho uma estação no hotel"],
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
 opts:["partir","chegar","reservar","viajar"],
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
]},

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
 opts:["O carro é mais rápido que o avião","O ônibus é mais rápido que o avião","O avião é mais rápido que o ônibus","O metrô é mais rápido que o avião"],
 ans:"O avião é mais rápido que o ônibus",
 hint:"Air travel beats road travel for speed over long distances."},

{type:"fb", s:"Nós {1} para o Brasil todos os anos.",
 a:["viajamos"],
 opts:["viajamos","chegamos","partimos","reservamos"],
 hint:"The 'nós' (we) form of the verb meaning 'to travel'.",
 sSrc:"We {1} to Brazil every year."},

{type:"mc", q:"What does 'depois' mean?",
 opts:["before","afterwards","never","always"],
 ans:"afterwards",
 hint:"A sequencing word pointing to what comes later."}
,

{type:"match", pairs:[
  {trg:"a viagem", src:"the trip"}
]}]}

]}; export default UNIT_12;
