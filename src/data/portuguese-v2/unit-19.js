const UNIT_19 = {n:19, lang:"pt", srcLang:"en", track:"v2", title:"Mais ou menos?", sub:"Comparatives and Superlatives", icon:"📊", level:"B1.2", color:"#7B5EE8", lessons:[

{id:"ptv2_u19l1", title:"Basic Comparisons", icon:"⚖️", xp:15, board:true, steps:[
{type:"intro", title:"Comparing Things",
 desc:"Portuguese compares with simple building blocks: mais, menos, tão, quanto, que. Learn the three core patterns and you can compare anything to anything.",
 goals:["Learn mais...que and menos...que","Use tão...quanto for equals","Practice with common adjectives"]},

{type:"teach", trg:"mais", src:"more", pos:"adv", gender:null,
 note:"Adverb of quantity. Placed before the adjective or noun being compared.",
 example:"A: O Rio tem mais praias que São Paulo.\nB: Com certeza, o Rio é famoso por isso.",
 exampleSrc:"A: Rio has more beaches than São Paulo.\nB: For sure, Rio is famous for that.",
 funFact:"From Latin 'magis'. Spanish says 'más' (no 'i'). Portuguese kept the 'i' sound."},

{type:"teach", trg:"menos", src:"less / fewer", pos:"adv", gender:null,
 note:"Opposite of mais. Works the same way: menos + adjective/noun + que/do que.",
 example:"A: O inverno no Brasil é menos frio que no Canadá.\nB: Claro, o clima é bem diferente.",
 exampleSrc:"A: Winter in Brazil is less cold than in Canada.\nB: Of course, the climate is very different.",
 funFact:"Portuguese uses 'menos' for both 'less' (uncountable) and 'fewer' (countable). English makes this distinction."},

{type:"teach", trg:"que", src:"than", pos:"conj", gender:null,
 note:"Comparative conjunction. Joins the two things being compared. 'Do que' is more formal, both are correct.",
 example:"A: Esse restaurante é melhor que o outro.\nB: Concordo, a comida é mais saborosa.",
 exampleSrc:"A: This restaurant is better than the other one.\nB: I agree, the food is tastier.",
 funFact:"Brazilians often say just 'que'. In writing, 'do que' sounds more polished: 'mais caro do que esperava'."},

{type:"teach", trg:"tão", src:"as", pos:"adv", gender:null,
 note:"Used for equality. Tão + adjective + quanto. Means 'as...as' in English.",
 example:"A: Essa praia é tão bonita quanto aquela.\nB: Verdade, as duas são muito bonitas.",
 exampleSrc:"A: This beach is as beautiful as that one.\nB: True, both are very beautiful.",
 funFact:"Before vowels, 'tão' doesn't contract. Keeps its full form always."},

{type:"teach", trg:"quanto", src:"as (in comparisons)", pos:"conj", gender:null,
 note:"Partners with 'tão' to express equality. Also used alone in set phrases.",
 example:"A: Ele é tão alto quanto o irmão.\nB: E tão inteligente quanto também.",
 exampleSrc:"A: He is as tall as his brother.\nB: And as intelligent as well.",
 funFact:"Can also mean 'how much' as a question: 'quanto custa?' (how much does it cost?)."},

{type:"tip", title:"Three Comparison Patterns",
 text:"Superiority (more):\n\nmais + adjective + que/do que\n\nO Rio é mais quente que São Paulo.\n(Rio is hotter than São Paulo.)\n\nInferiority (less):\n\nmenos + adjective + que/do que\n\nEste café é menos forte que aquele.\n(This coffee is less strong than that one.)\n\nEquality (equal):\n\ntão + adjective + quanto\n\nEla é tão simpática quanto você.\n(She is as friendly as you.)",
 deepDive:{title:"Quanto vs Como",
  text:"In Portugal and older writing, 'como' sometimes replaces 'quanto' for equality: 'tão bonita como aquela'. In modern BR speech, 'tão... quanto' dominates. Both are correct, but 'quanto' sounds more neutral and current in Brazil. Hearing 'como' in this context often flags a European Portuguese speaker."}},

{type:"fb",
 s:"O Rio é {1} quente que Curitiba.",
 a:["mais"],
 opts:["mais","menos","tão","muito"],
 hint:"Rio is hotter, so use the superiority word.",
 sSrc:"Rio is {1} hot than Curitiba."},

{type:"fb",
 s:"Este café é {1} forte que aquele.",
 a:["menos"],
 opts:["menos","mais","tão","muito"],
 hint:"This coffee is weaker, so use the inferiority word.",
 sSrc:"This coffee is {1} strong than that one."},

{type:"mc",
 q:"Which word completes the equality pattern? 'tão bonita ___ aquela'",
 opts:["que","como","de","quanto"],
 ans:"quanto",
 hint:"The equality frame uses a specific second word that pairs with 'tão', not the word for 'than'.",},

{type:"mc",
 q:"How do you say 'hotter than'?",
 opts:["menos quente que","tão quente quanto","mais quente que","muito quente"],
 ans:"mais quente que",
 hint:"Superiority pattern: ___ + adjective + ___."},

{type:"mc",
 q:"Choose the comparison of equality:",
 opts:["mais que","menos que","tão quanto","muito mais"],
 ans:"tão quanto",
 hint:"Equality uses a pair of words forming a frame around the adjective."},

{type:"fb",
 s:"Ela é {1} alta quanto o irmão.",
 a:["tão"],
 opts:["tão","mais","menos","muito"],
 hint:"The pair with 'quanto' signals equality.",
 sSrc:"She is {1} tall as her brother."},

{type:"fb",
 s:"O metrô é mais rápido {1} o ônibus.",
 a:["que"],
 opts:["que","quanto","tão","mais"],
 hint:"Joins the two items in a superiority comparison.",
 sSrc:"The subway is faster {1} the bus."},

{type:"match", pairs:[
 {trg:"mais", src:"more"},
 {trg:"menos", src:"less / fewer"},
 {trg:"tão", src:"as (with adjectives)"},
 {trg:"quanto", src:"as (second part)"},
 {trg:"que", src:"than"}
]},

{type:"mc",
 q:"Which sentence uses inferiority correctly?",
 opts:["Paulo é menos alto do que Ana.","Paulo é tão alto quanto Ana.","Paulo é mais alto que Ana.","Paulo menos alto Ana."],
 ans:"Paulo é menos alto do que Ana.",
 hint:"Inferiority: ___ + adjective + ___/do ___."}
]},

{id:"ptv2_u19l2", title:"Irregular Comparatives", icon:"🌟", xp:15, board:true, steps:[
{type:"intro", title:"Irregular Forms",
 desc:"Four key adjectives have irregular comparative forms. Using 'mais bom' is wrong. Say 'melhor' instead. These four save face in every conversation.",
 goals:["Learn bom > melhor","Learn mau > pior","Learn grande > maior and pequeno > menor","Avoid common learner mistakes"]},

{type:"teach", trg:"melhor", src:"better", pos:"adj", gender:null,
 note:"Irregular comparative of 'bom' (good). Never say 'mais bom'. Works for all genders and numbers (melhor/melhores).",
 example:"A: Este livro é melhor que o anterior.\nB: Com certeza, a história é mais envolvente.",
 exampleSrc:"A: This book is better than the previous one.\nB: For sure, the story is more engaging.",
 funFact:"From Latin 'melior'. Spanish 'mejor', Italian 'migliore', French 'meilleur'. All siblings."},

{type:"teach", trg:"pior", src:"worse", pos:"adj", gender:null,
 note:"Irregular comparative of 'mau' (bad) or 'ruim'. Never say 'mais mau'. Plural: piores.",
 example:"A: O trânsito hoje está pior que ontem.\nB: Verdade, demorei uma hora para chegar.",
 exampleSrc:"A: The traffic today is worse than yesterday.\nB: True, I took an hour to get here.",
 funFact:"From Latin 'peior'. Same family as 'melhor', just the opposite direction."},

{type:"teach", trg:"maior", src:"bigger / larger", pos:"adj", gender:null,
 note:"Irregular comparative of 'grande' (big). Never say 'mais grande'. Plural: maiores.",
 example:"A: São Paulo é maior que o Rio.\nB: Sim, a população é muito maior.",
 exampleSrc:"A: São Paulo is bigger than Rio.\nB: Yes, the population is much bigger.",
 funFact:"Used for physical size, population, and age. 'Meu irmão maior' = my older brother."},

{type:"teach", trg:"menor", src:"smaller", pos:"adj", gender:null,
 note:"Irregular comparative of 'pequeno' (small). Never say 'mais pequeno' in BR. Plural: menores.",
 example:"A: Esta sala é menor que a outra.\nB: Realmente, mas é mais aconchegante.",
 exampleSrc:"A: This room is smaller than the other one.\nB: True, but it's cozier.",
 funFact:"In PT, 'mais pequeno' is actually normal! But BR speakers always say 'menor'."},

{type:"tip", title:"The Four Irregulars",
 text:"bom > melhor (good > better)\nmau / ruim > pior (bad > worse)\ngrande > maior (big > bigger)\npequeno > menor (small > smaller)\n\nCommon learner mistakes:\n\nWRONG: mais bom, mais mau, mais grande, mais pequeno\nRIGHT: melhor, pior, maior, menor\n\nThese forms are used for BOTH comparatives AND superlatives:\n\nO melhor livro do ano. (The best book of the year.)\nO pior dia da minha vida. (The worst day of my life.)",
 deepDive:{title:"Bem, Mal, and Their Comparatives",
  text:"The adverbs 'bem' (well) and 'mal' (badly) also have irregular comparatives: 'melhor' and 'pior'. Context tells you whether you are comparing an adjective or an adverb. 'Ele canta melhor' (He sings better, adverb) vs 'Este é melhor' (This one is better, adjective). Same word, different grammar role."}},

{type:"fb",
 s:"Este restaurante é {1} que ontem. A comida está ótima!",
 a:["melhor"],
 opts:["melhor","pior","maior","menor"],
 hint:"The food is great, so things improved. Irregular comparative of bom.",
 sSrc:"This restaurant is {1} than yesterday. The food is great!"},

{type:"fb",
 s:"O trânsito hoje está {1} que ontem, demorei duas horas.",
 a:["pior"],
 opts:["pior","melhor","menor","maior"],
 hint:"The traffic got worse, not better. Irregular comparative of mau.",
 sSrc:"Traffic today is {1} than yesterday, it took me two hours."},

{type:"mc",
 q:"What is the comparative of 'bom'?",
 opts:["mais bom","melhor","pior","maior"],
 ans:"melhor",
 hint:"Irregular form. Never use 'mais' with this adjective."},

{type:"mc",
 q:"Choose the comparative of 'grande':",
 opts:["mais grande","menor","maior","melhor"],
 ans:"maior",
 hint:"Irregular form for 'bigger'. 'Mais grande' is always wrong."},

{type:"mc",
 q:"Which sentence is CORRECT?",
 opts:["Este filme é mais bom que o outro.","Este filme é melhor que o outro.","Este filme é mais grande que o outro.","Este filme é pior bom que o outro."],
 ans:"Este filme é melhor que o outro.",
 hint:"Use the irregular comparative of 'bom'."},

{type:"fb",
 s:"O trânsito no Rio é {1} que em Brasília.",
 a:["pior"],
 opts:["pior","mais mau","menor","melhor"],
 hint:"Comparative of 'mau'. Traffic tends to get this way in big cities.",
 sSrc:"The traffic in Rio is {1} than in Brasília."},

{type:"fb",
 s:"Minha irmã é {1} que eu, ela tem 25 anos.",
 a:["maior"],
 opts:["maior","menor","melhor","pior"],
 hint:"Comparative of grande. Used for being older too.",
 sSrc:"My sister is {1} than me, she's 25."},

{type:"match", pairs:[
 {trg:"melhor", src:"better"},
 {trg:"pior", src:"worse"},
 {trg:"maior", src:"bigger"},
 {trg:"menor", src:"smaller"}
]},

{type:"mc",
 q:"What is the opposite of 'melhor'?",
 opts:["maior","menor","pior","mais bom"],
 ans:"pior",
 hint:"Good vs bad. Better vs..."},

{type:"drag_fill",
 s:"Este café é {1} que aquele, mas aquele bolo é {2} que este.",
 blanks:{"1":"melhor","2":"maior"},
 pool:["melhor","maior","menor","pior"],
 hint:"First blank: comparative of bom (quality). Second blank: comparative of grande (size)."}
]},

{id:"ptv2_u19l3", title:"Superlatives", icon:"🏆", xp:15, board:true, steps:[
{type:"intro", title:"The Best and the Biggest",
 desc:"Superlatives mark the top or bottom of a group. Portuguese uses 'o mais' and 'o menos', plus the absolute superlative '-íssimo' for dramatic emphasis.",
 goals:["Form relative superlatives (o mais...)","Use irregular superlatives","Learn the -íssimo suffix"]},

{type:"teach", trg:"o mais", src:"the most", pos:"adv", gender:null,
 note:"Relative superlative. 'O/A/Os/As mais + adjective + de'. Agrees with the noun in gender and number.",
 example:"A: Qual é a cidade mais bonita do Brasil?\nB: Rio é a mais bonita do país.",
 exampleSrc:"A: Which is the most beautiful city in Brazil?\nB: Rio is the most beautiful in the country.",
 funFact:"The article 'o/a' can drop if the noun already has one: 'a cidade mais bonita' instead of 'a mais bonita cidade'."},

{type:"teach", trg:"o menos", src:"the least", pos:"adv", gender:null,
 note:"Opposite superlative. 'O/A/Os/As menos + adjective + de'. Same agreement rule as 'o mais'.",
 example:"A: Esse foi o dia menos produtivo da semana.\nB: Mas tudo bem, amanhã você recupera.",
 exampleSrc:"A: That was the least productive day of the week.\nB: But it's okay, tomorrow you'll recover.",
 funFact:"The preposition after the superlative is 'de': 'o menor de todos' (the smallest of all)."},

{type:"teach", trg:"o melhor", src:"the best", pos:"adj", gender:"m",
 note:"Irregular superlative. 'O melhor + noun + de/do/da'. Plural: os melhores.",
 example:"A: Qual é o melhor restaurante daqui?\nB: Tem um japonês ótimo perto.",
 exampleSrc:"A: What's the best restaurant around here?\nB: There's a great Japanese one nearby.",
 funFact:"Same word for comparative and superlative. The article 'o/a' signals the superlative meaning."},

{type:"teach", trg:"o pior", src:"the worst", pos:"adj", gender:"m",
 note:"Irregular superlative. 'O pior + noun + de/do/da'. Plural: os piores.",
 example:"A: Foi o pior concerto da minha vida.\nB: Que pena, e eu queria tanto ir!",
 exampleSrc:"A: It was the worst concert of my life.\nB: What a shame, and I wanted to go so badly!",
 funFact:"'O pior' also works as a dramatic noun: 'o pior é que...' = 'the worst part is that...'."},

{type:"teach", trg:"lindíssimo", src:"extremely beautiful", pos:"adj", gender:"m",
 note:"Absolute superlative formed with -íssimo. Adds dramatic emphasis without comparing.",
 example:"A: Que vestido lindíssimo você comprou!\nB: Obrigada! Foi uma promoção.",
 exampleSrc:"A: What an extremely beautiful dress you bought!\nB: Thanks! It was on sale.",
 funFact:"Drop the final vowel of the adjective, then add -íssimo/-íssima. Lindo > lindíssimo. Feliz > felicíssimo."},

{type:"teach", trg:"caríssimo", src:"extremely expensive", pos:"adj", gender:"m",
 note:"From 'caro' (expensive). The -íssimo suffix intensifies without needing 'muito'.",
 example:"A: Esse restaurante é caríssimo!\nB: Eu sei, mas a comida vale a pena.",
 exampleSrc:"A: That restaurant is extremely expensive!\nB: I know, but the food is worth it.",
 funFact:"Brazilians love -íssimo. 'Gostosíssimo' (super tasty), 'longíssimo' (super long). Adds drama to any day."},

{type:"tip", title:"The -íssimo Suffix",
 text:"The absolute superlative adds maximum emphasis:\n\nAdjective > -íssimo/-íssima\n\nbonito > bonitíssimo (extremely pretty)\nfeliz > felicíssimo (extremely happy)\nfácil > facílimo (extremely easy)\ndifícil > dificílimo (extremely difficult)\n\nSpelling rules:\n\nDrop the final vowel, then add -íssimo.\nAdjectives ending in -z change to -c- before -íssimo.\nSome adjectives have Latin-based forms: fácil > facílimo, not 'facilíssimo'.",
 deepDive:{title:"Two Flavors of Superlative",
  text:"The RELATIVE superlative compares within a group: 'o mais alto da turma' (the tallest in the class). The ABSOLUTE superlative has no comparison, just intensity: 'altíssimo' (super tall). Brazilians mix both constantly. Relative is more formal in writing, absolute is everywhere in speech."}},

{type:"mc",
 q:"How do you say 'the most beautiful city'?",
 opts:["a mais bonita cidade","a cidade mais bonita","a cidade maior bonita","a cidade muito bonita"],
 ans:"a cidade mais bonita",
 hint:"Article + noun + ___ + adjective. Adjective usually follows the noun."},

{type:"mc",
 q:"What does 'lindíssimo' mean?",
 opts:["a little pretty","extremely beautiful","the prettiest","less beautiful"],
 ans:"extremely beautiful",
 hint:"The -íssimo suffix signals maximum intensity without comparison."},

{type:"fb",
 s:"Este é o {1} dia da minha vida, estou tão feliz!",
 a:["melhor"],
 opts:["melhor","pior","maior","menor"],
 hint:"Superlative of bom. You are feeling positive.",
 sSrc:"This is the {1} day of my life, I'm so happy!"},

{type:"fb",
 s:"A Amazônia é a floresta {1} do mundo.",
 a:["maior"],
 opts:["maior","menor","melhor","pior"],
 hint:"Superlative of grande. Amazon is famous for this.",
 sSrc:"The Amazon is the {1} forest in the world."},

{type:"match", pairs:[
 {trg:"o mais", src:"the most"},
 {trg:"o menos", src:"the least"},
 {trg:"o melhor", src:"the best"},
 {trg:"o pior", src:"the worst"},
 {trg:"lindíssimo", src:"extremely beautiful"}
]},

{type:"mc",
 q:"How do you form the absolute superlative of 'caro'?",
 opts:["cariíssimo","caríssimo","carasíssimo","maissimo caro"],
 ans:"caríssimo",
 hint:"Drop final vowel, add -íssimo."},

{type:"mc",
 q:"Choose the correct superlative: 'Este é ___ café da cidade.'",
 opts:["mais melhor o","o mais melhor","o melhor","melhor o"],
 ans:"o melhor",
 hint:"Irregular superlative. Never combine 'mais' with '___'."},

{type:"drag_fill",
 s:"Essa música é {1} que aquela, mas aquela é {2} famosa do ano.",
 blanks:{"1":"melhor","2":"a mais"},
 pool:["melhor","a mais","pior","o menos"],
 hint:"First blank: irregular comparative. Second blank: article + adverb for the relative superlative."},

{type:"tip", title:"Conjunctions: mas, porém, todavia",
 text:"Conjunctions connect ideas. The most important contrast connectors:\n\nmas = but (everyday speech, most common)\nEu gosto de café, mas prefiro chá. (I like coffee, but I prefer tea.)\n\nporém = however (slightly more formal, still common in writing and clear speech)\nÉ caro, porém vale a pena. (It is expensive, however it is worth it.)\n\ntodavia = nevertheless / yet (formal, written language)\nO projeto é difícil; todavia, vamos tentar. (The project is hard; nevertheless, we will try.)\n\nAlso useful:\ne = and (addition)\nou = or (choice)\npois = because / for (formal cause)\nentão = so / then (result)\nporque = because (reason, most common)",
 icon:"🔗",
 deepDive:{title:"Contrast Register Scale",
  text:"For contrast, the register scale from most casual to most formal is:\nmas (spoken everywhere) > porém (written, clear speech) > contudo > todavia > entretanto (formal texts).\n\nFor addition: e > além disso > outrossim (very formal).\n\nFor result: então > portanto > logo (formal).\n\nStart with mas, e, porque, então. The formal connectors (porém, contudo, portanto) appear naturally in B2 writing, news articles, and academic texts."}},
]}

]}; export default UNIT_19;
