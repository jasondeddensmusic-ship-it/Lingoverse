const UNIT_32 = {n:32, lang:"pt", srcLang:"en", track:"v2", title:"Meio ambiente", sub:"Environment/Sustainability", icon:"🌱", level:"B2.2", color:"#7B5EE8", lessons:[

{id:"ptv2_u32l1", title:"Planet and Pollution", icon:"🌍", xp:15, board:true, steps:[
{type:"intro", title:"Talking About the Environment",
 desc:"Brazil holds the Amazon, the world's largest rainforest. Environmental vocabulary is part of everyday conversation here, from news to classroom debates.",
 goals:["Learn core environmental terms","Discuss pollution and recycling","Talk about sustainability"]},

{type:"teach", trg:"meio ambiente", src:"environment", pos:"noun", gender:"m",
 note:"Literally 'middle environment'. Always masculine, always singular in this fixed phrase.",
 example:"A: O meio ambiente está em perigo?\nB: Sim, precisamos agir rápido.",
 exampleSrc:"A: Is the environment in danger?\nB: Yes, we need to act fast.",
 funFact:"Often shortened to 'o ambiente' in casual speech, but official texts keep the full phrase."},

{type:"teach", trg:"sustentabilidade", src:"sustainability", pos:"noun", gender:"f",
 note:"The practice of meeting needs today without harming future generations.",
 example:"A: Sua empresa pratica a sustentabilidade?\nB: Sim, reciclamos e economizamos energia.",
 exampleSrc:"A: Does your company practice sustainability?\nB: Yes, we recycle and save energy.",
 funFact:"This word is a Portuguese giant: seventeen letters. Brazilians love breaking it into syllables when nervous."},

{type:"teach", trg:"poluição", src:"pollution", pos:"noun", gender:"f",
 note:"Contamination of air, water, or soil. Common compound: 'poluição do ar' (air pollution).",
 example:"A: São Paulo tem muita poluição?\nB: Infelizmente, sim. O ar fica cinza.",
 exampleSrc:"A: Does São Paulo have a lot of pollution?\nB: Unfortunately, yes. The air turns gray.",
 funFact:"The verb form is 'poluir': 'não polua o rio' (do not pollute the river)."},

{type:"teach", trg:"reciclagem", src:"recycling", pos:"noun", gender:"f",
 note:"Converting waste into reusable materials. Brazil has a huge informal recycling network of 'catadores' (collectors).",
 example:"A: Vocês fazem reciclagem em casa?\nB: Sim, separamos papel, plástico e vidro.",
 exampleSrc:"A: Do you recycle at home?\nB: Yes, we separate paper, plastic, and glass.",
 funFact:"Brazil recycles almost 100 percent of its aluminum cans. One of the highest rates in the world."},

{type:"teach", trg:"preservar", src:"to preserve", pos:"verb", gender:null,
 note:"To protect something and keep it intact. Used for nature, culture, and heritage.",
 example:"A: Devemos preservar a Amazônia?\nB: Claro. É o pulmão do planeta.",
 exampleSrc:"A: Should we preserve the Amazon?\nB: Of course. It is the lungs of the planet.",
 funFact:"Also used for food: 'alimentos preservados' (preserved foods)."},

{type:"teach", trg:"proteger", src:"to protect", pos:"verb", gender:null,
 note:"To defend or shield from harm. Stronger than 'preservar', it implies active defense.",
 example:"A: Como podemos proteger as florestas?\nB: Combatendo o desmatamento ilegal.",
 exampleSrc:"A: How can we protect the forests?\nB: By fighting illegal deforestation.",
 funFact:"Conjugates as 'eu protejo, você protege'. The j-to-g shift happens for spelling, not sound."},

{type:"mc",
 q:"Which word means 'recycling'?",
 opts:["poluição","reciclagem","sustentabilidade","preservação"],
 ans:"reciclagem",
 hint:"The process of turning waste into reusable materials. Root looks like the English word."},

{type:"fb",
 s:"A {1} do ar em São Paulo é preocupante.",
 a:["poluição"],
 opts:["poluição","sustentabilidade","reciclagem","preservação"],
 hint:"When the air contains harmful substances, this problem exists.",
 sSrc:"Air {1} in São Paulo is worrying."},

{type:"mc",
 q:"What does 'preservar' mean?",
 opts:["to pollute","to throw away","to preserve","to destroy"],
 ans:"to preserve",
 hint:"To keep something safe and intact over time. Sounds like the English cognate."},

{type:"fb",
 s:"Devemos {1} as florestas para as futuras gerações.",
 a:["preservar"],
 opts:["preservar","poluir","desmatar","ignorar"],
 hint:"To protect and keep intact over time.",
 sSrc:"We should {1} forests for future generations."},

{type:"mc",
 q:"Which is correct: 'o meio ambiente' or 'a meio ambiente'?",
 opts:["a meio ambiente","o meio ambiente","um meio ambiente","as meio ambiente"],
 ans:"o meio ambiente",
 hint:"Meio ambiente is always masculine, despite what the ending suggests."},

{type:"fb",
 s:"O governo quer investir em {1}.",
 a:["sustentabilidade"],
 opts:["sustentabilidade","poluição","extinção","desmatamento"],
 hint:"The practice of preserving resources for future generations. Longest option.",
 sSrc:"The government wants to invest in {1}."},

{type:"fb",
 s:"Separar o lixo é o primeiro passo para a {1} doméstica.",
 a:["reciclagem"],
 opts:["reciclagem","poluição","extinção","sustentabilidade"],
 hint:"Turning waste materials into new products. Starts with 'r'.",
 sSrc:"Separating trash is the first step toward household {1}."},

{type:"fb",
 s:"Precisamos {1} as florestas e os rios para as próximas gerações.",
 a:["proteger"],
 opts:["proteger","poluir","desmatar","explorar"],
 hint:"To actively defend and shield from harm.",
 sSrc:"We need to {1} the forests and rivers for future generations."},

{type:"match", pairs:[
 {trg:"meio ambiente", src:"environment"},
 {trg:"sustentabilidade", src:"sustainability"},
 {trg:"poluição", src:"pollution"},
 {trg:"reciclagem", src:"recycling"},
 {trg:"proteger", src:"to protect"}
]}
]},

{id:"ptv2_u32l2", title:"Amazon and Forests", icon:"🌳", xp:15, board:true, steps:[
{type:"intro", title:"Brazil's Forests",
 desc:"The Amazon rainforest covers over half of Brazil. Its fate shapes global climate. Learn the vocabulary to talk about forests and their threats.",
 goals:["Learn forest-related terms","Discuss deforestation","Talk about biodiversity"]},

{type:"teach", trg:"Amazônia", src:"Amazon (region)", pos:"noun", gender:"f",
 note:"The rainforest region covering northern Brazil and eight neighboring countries. Always capitalized.",
 example:"A: A Amazônia está em risco?\nB: Sim, por causa do desmatamento.",
 exampleSrc:"A: Is the Amazon in danger?\nB: Yes, because of deforestation.",
 funFact:"Named after the Amazon river, which was named after the Greek Amazons by a Spanish explorer who claimed to have seen female warriors."},

{type:"teach", trg:"floresta", src:"forest", pos:"noun", gender:"f",
 note:"A large area covered with trees. 'Floresta tropical' is a tropical forest.",
 example:"A: Você já visitou uma floresta tropical?\nB: Sim, a Amazônia é impressionante.",
 exampleSrc:"A: Have you ever visited a tropical forest?\nB: Yes, the Amazon is impressive.",
 funFact:"Related to English 'forest', both from Latin 'forestis', meaning 'outside' (outside royal lands)."},

{type:"teach", trg:"desmatamento", src:"deforestation", pos:"noun", gender:"m",
 note:"The clearing of forests, often illegally. A major issue in Brazil.",
 example:"A: O desmatamento aumentou no ano passado?\nB: Sim, muito. É uma tragédia.",
 exampleSrc:"A: Did deforestation increase last year?\nB: Yes, a lot. It is a tragedy.",
 funFact:"Breaks down as 'des-' (un-) + 'mata' (forest) + '-mento' (action). Literally 'un-foresting'."},

{type:"teach", trg:"biodiversidade", src:"biodiversity", pos:"noun", gender:"f",
 note:"The variety of life in a given place. Brazil has the highest biodiversity in the world.",
 example:"A: Por que proteger a biodiversidade?\nB: Porque cada espécie tem um papel único.",
 exampleSrc:"A: Why protect biodiversity?\nB: Because each species has a unique role.",
 funFact:"Brazil is one of 17 'megadiverse' countries, together holding 70 percent of Earth's species."},

{type:"teach", trg:"espécie", src:"species", pos:"noun", gender:"f",
 note:"A group of organisms that can reproduce together. The Amazon holds millions, most still undescribed.",
 example:"A: Quantas espécies vivem na Amazônia?\nB: Milhões. Muitas ainda desconhecidas.",
 exampleSrc:"A: How many species live in the Amazon?\nB: Millions. Many still unknown.",
 funFact:"Same word, no change in plural: 'uma espécie, duas espécies'. The final 's' is already there."},

{type:"teach", trg:"extinção", src:"extinction", pos:"noun", gender:"f",
 note:"When a species disappears forever. Happening faster than ever due to human activity.",
 example:"A: A onça está em extinção?\nB: Sim, mas há esforços para salvá-la.",
 exampleSrc:"A: Is the jaguar on the verge of extinction?\nB: Yes, but there are efforts to save it.",
 funFact:"'Em extinção' is the set phrase. 'Extinguir' is the verb: to put out a fire or end a species."},

{type:"mc",
 q:"What does 'desmatamento' mean?",
 opts:["reforestation","deforestation","recycling","preservation"],
 ans:"deforestation",
 hint:"'Des-' is a prefix of removal. 'Mata' means forest. Put them together."},

{type:"fb",
 s:"A {1} brasileira é a maior do mundo.",
 a:["biodiversidade"],
 opts:["biodiversidade","poluição","extinção","floresta"],
 hint:"The variety of plants, animals, and microorganisms in an ecosystem.",
 sSrc:"Brazilian {1} is the largest in the world."},

{type:"mc",
 q:"Which word refers to a group of organisms that can reproduce together?",
 opts:["floresta","extinção","espécie","Amazônia"],
 ans:"espécie",
 hint:"Biological category: dogs are one, cats are another."},

{type:"fb",
 s:"Muitas {1} estão em perigo de extinção.",
 a:["espécies"],
 opts:["espécies","florestas","poluições","reciclagens"],
 hint:"Plural of a biological group. The word ends in -s already.",
 sSrc:"Many {1} are in danger of extinction."},

{type:"mc",
 q:"Which word describes the variety of life in an ecosystem?",
 opts:["extinção","floresta","biodiversidade","espécie"],
 ans:"biodiversidade",
 hint:"Combines 'bio' (life) with diversity. Brazil has the world's highest amount."},

{type:"fb",
 s:"O {1} ilegal destrói milhares de hectares de floresta por ano.",
 a:["desmatamento"],
 opts:["desmatamento","aquecimento","reciclagem","ambiente"],
 hint:"The clearing of forests, often illegal.",
 sSrc:"Illegal {1} destroys thousands of hectares of forest per year."},

{type:"mc",
 q:"Which noun refers to a specific group of organisms that share genetics?",
 opts:["biodiversidade","floresta","extinção","espécie"],
 ans:"espécie",
 hint:"Singular. Dogs are one, cats are another example."},

{type:"match", pairs:[
 {trg:"Amazônia", src:"Amazon (region)"},
 {trg:"floresta", src:"forest"},
 {trg:"desmatamento", src:"deforestation"},
 {trg:"biodiversidade", src:"biodiversity"},
 {trg:"extinção", src:"extinction"}
]}
]},

{id:"ptv2_u32l3", title:"Climate and Energy", icon:"☀️", xp:15, board:true, steps:[
{type:"intro", title:"Climate Change and Energy",
 desc:"Climate and energy are twin topics: how we power our lives shapes the planet's temperature. Brazil leads in renewables thanks to rivers and sun.",
 goals:["Learn climate vocabulary","Discuss renewable energy","Talk about global warming"]},

{type:"teach", trg:"clima", src:"climate / weather", pos:"noun", gender:"m",
 note:"Masculine despite ending in -a. Means both long-term climate and short-term weather in casual speech.",
 example:"A: Como é o clima em Manaus?\nB: Quente e úmido o ano todo.",
 exampleSrc:"A: What is the climate like in Manaus?\nB: Hot and humid all year round.",
 funFact:"One of many Greek-origin -a words that are masculine in Portuguese: 'o problema', 'o mapa', 'o clima'."},

{type:"teach", trg:"aquecimento global", src:"global warming", pos:"noun", gender:"m",
 note:"The rise in Earth's average temperature caused by human activity. Often paired with 'mudança climática' (climate change).",
 example:"A: O aquecimento global é real?\nB: Os cientistas dizem que sim, há décadas.",
 exampleSrc:"A: Is global warming real?\nB: Scientists have said yes for decades.",
 funFact:"'Aquecer' means 'to heat up'. The noun 'aquecimento' covers warm-ups, heating systems, and climate change alike."},

{type:"teach", trg:"energia renovável", src:"renewable energy", pos:"noun", gender:"f",
 note:"Energy from sources that naturally replenish: sun, wind, water. Brazil gets over 80 percent of its electricity this way.",
 example:"A: Qual energia renovável domina no Brasil?\nB: A hidrelétrica, sem dúvida.",
 exampleSrc:"A: Which renewable energy dominates in Brazil?\nB: Hydroelectric, without a doubt.",
 funFact:"Itaipu, on the border with Paraguay, was the world's largest dam until China built the Three Gorges."},

{type:"tip", title:"Environmental Phrase Building",
 text:"Combine core words to talk fluently:\n\nproteger + o meio ambiente: protect the environment\ncombater + o desmatamento: combat deforestation\npreservar + a biodiversidade: preserve biodiversity\nreduzir + a poluição: reduce pollution\ninvestir em + energia renovável: invest in renewable energy",
 deepDive:{title:"Why Brazil Is a Climate Superpower",
  text:"Brazil has three climate advantages: immense renewable hydroelectric capacity, tropical sunshine year-round, and the world's largest carbon sink (the Amazon). Its weakness is the same Amazon: deforestation can turn a climate hero into a climate villain overnight. That is why environmental vocabulary dominates Brazilian news cycles."}},

{type:"mc",
 q:"What does 'clima' mean?",
 opts:["earth","climate / weather","environment","forest"],
 ans:"climate / weather",
 hint:"The long-term ___ pattern of a region. Sounds like the English word."},

{type:"fb",
 s:"O {1} está mudando por causa das atividades humanas.",
 a:["clima"],
 opts:["clima","meio ambiente","floresta","desmatamento"],
 hint:"The broader long-term weather pattern of the planet.",
 sSrc:"The {1} is changing because of human activity."},

{type:"mc",
 q:"Which of these is a renewable energy source?",
 opts:["petróleo","carvão","sol","gasolina"],
 ans:"sol",
 hint:"Think of energy that does not run out when used. Something that shines every day."},

{type:"fb",
 s:"O {1} global ameaça ecossistemas no mundo inteiro.",
 a:["aquecimento"],
 opts:["aquecimento","desmatamento","ambiente","clima"],
 hint:"The rising temperature of the planet.",
 sSrc:"Global {1} threatens ecosystems worldwide."},

{type:"fb",
 s:"A {1} é essencial para reduzir as emissões de carbono.",
 a:["energia renovável"],
 opts:["energia renovável","poluição","reciclagem","extinção"],
 hint:"Energy from sources that replenish naturally: sun, wind, water. Two words.",
 sSrc:"{1} is essential to reduce carbon emissions."},

{type:"mc",
 q:"Which of these contributes MOST to global warming?",
 opts:["energia renovável","reciclagem","queima de combustíveis fósseis","biodiversidade"],
 ans:"queima de combustíveis fósseis",
 hint:"Burning oil, coal, and gas releases CO2 that traps heat."},

{type:"fb",
 s:"O {1} global causa o derretimento das calotas polares.",
 a:["aquecimento"],
 opts:["aquecimento","desmatamento","clima","ambiente"],
 hint:"Rising temperature of the planet. Noun from the verb 'aquecer'.",
 sSrc:"Global {1} causes the melting of polar ice caps."},

{type:"fb",
 s:"O Brasil produz mais de 80% da sua eletricidade com {1}.",
 a:["energia renovável"],
 opts:["energia renovável","combustível fóssil","poluição","extinção"],
 hint:"Power generated from sources that naturally replenish. Two words.",
 sSrc:"Brazil produces more than 80% of its electricity from {1}."},

{type:"fb",
 s:"O {1} da cidade é quente o ano todo por causa da sua localização.",
 a:["clima"],
 opts:["clima","aquecimento","desmatamento","ambiente"],
 hint:"The long-term pattern of weather in a specific region.",
 sSrc:"The city's {1} is hot all year because of its location."},

{type:"match", pairs:[
 {trg:"clima", src:"climate"},
 {trg:"aquecimento global", src:"global warming"},
 {trg:"energia renovável", src:"renewable energy"},
 {trg:"preservar", src:"to preserve"},
 {trg:"proteger", src:"to protect"}
]},

{type:"match", pairs:[
  {trg:"desmatamento", src:"deforestation"}
]}]}

]}; export default UNIT_32;
