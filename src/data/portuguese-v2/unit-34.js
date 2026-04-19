const UNIT_34 = {n:34, lang:"pt", srcLang:"en", track:"v2", title:"O Brasil", sub:"Geography of Brazil", icon:"🗺️", level:"B2.2", color:"#7B5EE8", lessons:[

{id:"ptv2_u34l1", title:"Regions and States", icon:"📍", xp:15, board:true, steps:[
{type:"intro", title:"Brazilian Geography Basics",
 desc:"Brazil is divided into five regions and twenty-six states. Each region has distinct culture, climate, and economy. This lesson teaches you the macro map.",
 goals:["Learn the five regions","Know 'estado' vs 'região'","Name Brazil's main regions"]},

{type:"teach", trg:"região", src:"region", pos:"noun", gender:"f",
 note:"A large area grouping several states. Brazil has five official regions.",
 example:"A: Qual região do Brasil você conhece?\nB: Conheço o Nordeste e o Sul.",
 exampleSrc:"A: Which region of Brazil do you know?\nB: I know the Northeast and the South.",
 funFact:"The plural adds -ões: 'regiões'. One of the most beautiful plurals in Portuguese."},

{type:"teach", trg:"estado", src:"state", pos:"noun", gender:"m",
 note:"A federal unit within Brazil. Each has its own governor and capital.",
 example:"A: Quantos estados tem o Brasil?\nB: Vinte e seis, mais o Distrito Federal.",
 exampleSrc:"A: How many states does Brazil have?\nB: Twenty-six, plus the Federal District.",
 funFact:"Also means 'condition' or 'status': 'em bom estado' (in good condition)."},

{type:"teach", trg:"Norte", src:"North (region)", pos:"noun", gender:"m",
 note:"The largest region by area. Contains most of the Amazon rainforest.",
 example:"A: O Norte é a maior região?\nB: Sim, em território, mas não em população.",
 exampleSrc:"A: Is the North the largest region?\nB: Yes, in territory, but not in population.",
 funFact:"The Northern states include Amazonas, Pará, and Acre. All green on maps due to forest cover."},

{type:"teach", trg:"Nordeste", src:"Northeast (region)", pos:"noun", gender:"m",
 note:"Home to the country's best beaches, strong folk culture, and the famous 'sertão'.",
 example:"A: Você já viajou pelo Nordeste?\nB: Sim, as praias são espetaculares.",
 exampleSrc:"A: Have you ever traveled through the Northeast?\nB: Yes, the beaches are spectacular.",
 funFact:"The Northeast has nine states and includes Bahia, Pernambuco, and Ceará. Birthplace of samba and forró."},

{type:"teach", trg:"Centro-Oeste", src:"Center-West (region)", pos:"noun", gender:"m",
 note:"The agricultural heartland. Includes Brasília, the capital.",
 example:"A: Onde fica Brasília?\nB: No Centro-Oeste, no estado de Goiás... quase.",
 exampleSrc:"A: Where is Brasília?\nB: In the Center-West, in the state of Goiás... almost.",
 funFact:"Brasília is actually in the Distrito Federal, carved out of Goiás in 1960."},

{type:"teach", trg:"Sudeste", src:"Southeast (region)", pos:"noun", gender:"m",
 note:"The economic powerhouse. Includes São Paulo, Rio de Janeiro, and Minas Gerais.",
 example:"A: O Sudeste é o coração econômico do Brasil?\nB: Com certeza. Metade do PIB está lá.",
 exampleSrc:"A: Is the Southeast the economic heart of Brazil?\nB: For sure. Half of the GDP is there.",
 funFact:"Holds about 42 percent of Brazil's population in only 11 percent of its territory."},

{type:"teach", trg:"Sul", src:"South (region)", pos:"noun", gender:"m",
 note:"The coolest region climatically. Strong European immigrant heritage.",
 example:"A: Como é o clima no Sul?\nB: Mais ameno. Pode até nevar na serra.",
 exampleSrc:"A: How is the climate in the South?\nB: Milder. It can even snow in the mountains.",
 funFact:"Includes Rio Grande do Sul, Santa Catarina, and Paraná. Known for gaúcho culture and churrasco."},

{type:"mc",
 q:"Which region contains most of the Amazon rainforest?",
 opts:["Norte","Nordeste","Sul","Sudeste"],
 ans:"Norte",
 hint:"Amazon is at the top of Brazil's map. Which cardinal direction matches?"},

{type:"fb",
 s:"O Brasil é dividido em cinco {1}.",
 a:["regiões"],
 opts:["regiões","estados","países","cidades"],
 hint:"The macro geographical groupings. Plural of 'região'.",
 sSrc:"Brazil is divided into five {1}."},

{type:"mc",
 q:"Which region is the economic powerhouse of Brazil?",
 opts:["Norte","Sul","Sudeste","Centro-Oeste"],
 ans:"Sudeste",
 hint:"Contains São Paulo, the biggest city in South America."},

{type:"match", pairs:[
 {trg:"Norte", src:"North"},
 {trg:"Nordeste", src:"Northeast"},
 {trg:"Sudeste", src:"Southeast"},
 {trg:"Sul", src:"South"},
 {trg:"Centro-Oeste", src:"Center-West"}
]}
]},

{id:"ptv2_u34l2", title:"Biomes and Landscapes", icon:"🏞️", xp:15, board:true, steps:[
{type:"intro", title:"Brazil's Natural Zones",
 desc:"Brazil contains six distinct biomes: Amazônia, Cerrado, Mata Atlântica, Caatinga, Pampa, and Pantanal. Each has unique wildlife and climate.",
 goals:["Learn Brazil's biomes","Discuss landscapes","Use specific geography terms"]},

{type:"teach", trg:"Amazônia", src:"Amazon (biome)", pos:"noun", gender:"f",
 note:"The world's largest rainforest biome, covering about 40 percent of Brazil. Also the name of the region.",
 example:"A: A Amazônia é só floresta?\nB: Não. Tem rios, várzeas e campos também.",
 exampleSrc:"A: Is the Amazon only forest?\nB: No. It has rivers, floodplains, and grasslands too.",
 funFact:"Over 400 billion trees grow in the Amazon. More than one hundred times the number of stars you can see at night."},

{type:"teach", trg:"Pantanal", src:"Pantanal (wetlands)", pos:"noun", gender:"m",
 note:"The world's largest tropical wetland, stretching across Mato Grosso and Mato Grosso do Sul.",
 example:"A: Você já foi ao Pantanal?\nB: Sim, vi onças e muitos jacarés.",
 exampleSrc:"A: Have you been to the Pantanal?\nB: Yes, I saw jaguars and many caimans.",
 funFact:"Every rainy season, the Pantanal floods into an area bigger than England. Then drains again."},

{type:"teach", trg:"Cerrado", src:"Cerrado (savanna)", pos:"noun", gender:"m",
 note:"Brazil's tropical savanna biome. Covers the Center-West. Often called 'the Brazilian savanna'.",
 example:"A: O Cerrado está ameaçado?\nB: Sim, mais de 50 por cento já foi desmatado.",
 exampleSrc:"A: Is the Cerrado threatened?\nB: Yes, more than 50 percent has already been deforested.",
 funFact:"The Cerrado holds five percent of all life on Earth. Most of it underground, in twisted roots."},

{type:"teach", trg:"Mata Atlântica", src:"Atlantic Forest", pos:"noun", gender:"f",
 note:"The coastal rainforest stretching from Rio Grande do Sul to the Northeast. Historically devastated.",
 example:"A: Quanto da Mata Atlântica ainda existe?\nB: Menos de 15 por cento da original.",
 exampleSrc:"A: How much of the Atlantic Forest still exists?\nB: Less than 15 percent of the original.",
 funFact:"Despite its destruction, it is one of the most biodiverse places on Earth. Tiny golden lion tamarins live only here."},

{type:"teach", trg:"praia", src:"beach", pos:"noun", gender:"f",
 note:"Brazil's coastline is 7,500 kilometers long, packed with beaches famous worldwide.",
 example:"A: Qual praia é a melhor?\nB: Copacabana. A vista do Pão de Açúcar é linda.",
 exampleSrc:"A: Which beach is the best?\nB: Copacabana. The view of Sugarloaf Mountain is beautiful.",
 funFact:"Brazil has the longest continuous beach in the world: Praia do Cassino in Rio Grande do Sul, 254 kilometers long."},

{type:"teach", trg:"sertão", src:"backlands / hinterland", pos:"noun", gender:"m",
 note:"The dry interior of the Northeast. Harsh climate, deep culture, setting of classic Brazilian literature.",
 example:"A: Como é a vida no sertão?\nB: Difícil, mas o povo é muito forte.",
 exampleSrc:"A: How is life in the sertão?\nB: Hard, but the people are very strong.",
 funFact:"Euclides da Cunha wrote 'Os Sertões' in 1902, a book that changed how Brazilians see their own country."},

{type:"teach", trg:"serra", src:"mountain range / highlands", pos:"noun", gender:"f",
 note:"Brazil has no Andes, but many 'serras' like Serra do Mar and Serra da Mantiqueira.",
 example:"A: Vocês viajam para a serra no inverno?\nB: Sim, adoramos. Ar puro e clima fresco.",
 exampleSrc:"A: Do you travel to the mountains in winter?\nB: Yes, we love it. Clean air and cool weather.",
 funFact:"Brazil's highest point, Pico da Neblina, is only 2,995 meters. Small compared to the Andes, big for Brazil."},

{type:"teach", trg:"interior", src:"inland / interior", pos:"noun", gender:"m",
 note:"Anywhere away from the coast. A common Brazilian distinction: coastal vs interior life.",
 example:"A: Você mora no interior?\nB: Sim, a duzentos quilômetros da capital.",
 exampleSrc:"A: Do you live in the interior?\nB: Yes, two hundred kilometers from the capital.",
 funFact:"About 80 percent of Brazilians live within 200 kilometers of the coast. The interior is vast and emptier."},

{type:"mc",
 q:"Which biome is the world's largest tropical wetland?",
 opts:["Amazônia","Cerrado","Pantanal","Mata Atlântica"],
 ans:"Pantanal",
 hint:"Floods every rainy season. Home to many caimans and jaguars."},

{type:"fb",
 s:"A {1} perdeu mais de 85 por cento de sua área original.",
 a:["Mata Atlântica"],
 opts:["Mata Atlântica","Amazônia","Pantanal","Cerrado"],
 hint:"The forest along Brazil's Atlantic coast. Two words, both capitalized.",
 sSrc:"The {1} has lost more than 85 percent of its original area."},

{type:"mc",
 q:"What does 'sertão' refer to?",
 opts:["the beach","the dry interior of the Northeast","the Amazon","the Atlantic Forest"],
 ans:"the dry interior of the Northeast",
 hint:"Classic Brazilian literature is set here. A place of harsh climate."},

{type:"fb",
 s:"A {1} brasileira tem 7.500 quilômetros.",
 a:["praia"],
 opts:["praia","serra","selva","costa"],
 hint:"Sandy shore where people swim and sunbathe.",
 sSrc:"The Brazilian {1} is 7,500 kilometers long."}
]},

{id:"ptv2_u34l3", title:"Describing Brazil", icon:"🇧🇷", xp:15, board:true, steps:[
{type:"intro", title:"Putting Geography into Sentences",
 desc:"Learn to describe Brazilian places with fluency. Combine regions, biomes, and landscapes into smooth, natural sentences.",
 goals:["Build location descriptions","Compare regions","Use geography vocabulary"]},

{type:"tip", title:"Describing Places",
 text:"Useful patterns:\n\nfica no / fica na: is located in\n(fica no Sul, fica na Bahia)\n\nestá localizado(a) em: is located in (more formal)\n\nestende-se por / cobre: stretches across / covers\n(A Amazônia cobre 40 por cento do país)\n\nabriga / contém: houses / contains\n(O Pantanal abriga milhares de espécies)\n\nLembre-se: states take 'em' + article. 'Em + a' = 'na'. 'Em + o' = 'no'.",
 deepDive:{title:"Gender of Brazilian States",
  text:"Most Brazilian states take a specific article. Masculine: o Rio de Janeiro, o Paraná, o Acre, o Amapá, o Amazonas. Feminine: a Bahia, a Paraíba. No article: São Paulo, Minas Gerais, Pernambuco (used like proper nouns without articles). This inconsistency confuses even Brazilians. When in doubt, listen to native speakers from that state."}},

{type:"mc",
 q:"'A Amazônia fica no ___.'",
 opts:["Norte","Sul","Sudeste","Nordeste"],
 ans:"Norte",
 hint:"The rainforest covers the top part of the country."},

{type:"fb",
 s:"Brasília está localizada no {1} do país.",
 a:["Centro-Oeste"],
 opts:["Centro-Oeste","Sudeste","Sul","Norte"],
 hint:"The region where the capital was built in 1960.",
 sSrc:"Brasília is located in the {1} of the country."},

{type:"mc",
 q:"'O Pantanal ___ milhares de espécies.'",
 opts:["abriga","fica","é","cobre"],
 ans:"abriga",
 hint:"Verb meaning 'shelters' or 'houses'. Which verb hosts species?"},

{type:"fb",
 s:"A Mata Atlântica {1} por toda a costa brasileira.",
 a:["estende-se"],
 opts:["estende-se","abriga","fica","cobre"],
 hint:"Reflexive verb meaning 'stretches across'. Used for long geographic features.",
 sSrc:"The Atlantic Forest {1} along the entire Brazilian coast."},

{type:"mc",
 q:"Which region has the mildest, coolest climate?",
 opts:["Norte","Nordeste","Sul","Centro-Oeste"],
 ans:"Sul",
 hint:"The bottom of Brazil, closer to colder Argentina."},

{type:"fb",
 s:"O {1} da Bahia é famoso pela seca e pela música de raiz.",
 a:["sertão"],
 opts:["sertão","litoral","pantanal","cerrado"],
 hint:"The dry backlands. Three syllables, with a til on the 'a'.",
 sSrc:"The Bahian {1} is famous for drought and roots music."},

{type:"match", pairs:[
 {trg:"região", src:"region"},
 {trg:"estado", src:"state"},
 {trg:"praia", src:"beach"},
 {trg:"serra", src:"mountain range"},
 {trg:"interior", src:"inland / interior"}
]},

{type:"mc",
 q:"Most Brazilians live close to which geographic feature?",
 opts:["the sertão","the Amazon","the coast","the serra"],
 ans:"the coast",
 hint:"About 80 percent live within 200 km of the ocean."}
]}

]}; export default UNIT_34;
