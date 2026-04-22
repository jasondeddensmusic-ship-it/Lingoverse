// Batch 7. Unit 16 extra lesson. La salute avanzata: Nutrition & Diet
const BATCH7_L1 = {id:"itv2_u16l_b7_1", title:"L'alimentazione", icon:"\u{1F957}", xp:15, board:true, steps:[
{type:"intro", title:"L'alimentazione",
 desc:"Learn vocabulary about nutrition, dietary habits, and healthy eating in Italian culture.",
 goals:["Discuss nutrition and food groups","Talk about dietary restrictions","Understand Italian food culture and health"]},

{type:"teach", trg:"l'alimentazione", src:"nutrition / diet", pos:"noun", gender:"f",
 note:"Feminine noun. 'Alimentazione sana' = healthy diet.\n'Alimentare' = to feed/nourish.",
 example:"A: L'alimentazione e importante per la salute.\nB: Hai ragione, siamo quello che mangiamo.",
 exampleSrc:"A: Nutrition is important for health.\nB: You are right, we are what we eat.",
 funFact:"The Mediterranean diet, largely based on Italian eating habits, is a UNESCO Intangible Cultural Heritage. It emphasizes olive oil, vegetables, grains, and moderate wine."},

{type:"teach", trg:"le proteine", src:"proteins", pos:"noun", gender:"f",
 note:"Feminine plural noun. Singular: la proteina.\n'Ricco di proteine' = rich in protein.",
 example:"A: Questa carne e ricca di proteine.\nB: Anche i legumi hanno tante proteine.",
 exampleSrc:"A: This meat is rich in protein.\nB: Legumes also have a lot of protein.",
 funFact:"Italians get protein from diverse sources: meat, fish, cheese, legumes, and eggs. 'Legumi' (beans, lentils, chickpeas) are called 'la carne dei poveri' (the poor man's meat)."},

{type:"teach", trg:"i carboidrati", src:"carbohydrates", pos:"noun", gender:"m",
 note:"Masculine plural noun. Singular: il carboidrato.\n'Pasta e pane sono carboidrati.'",
 example:"A: Devo ridurre i carboidrati?\nB: Non eliminare la pasta, riduci le porzioni.",
 exampleSrc:"A: Should I reduce carbohydrates?\nB: Do not eliminate pasta, reduce portions.",
 funFact:"Telling an Italian to give up carbohydrates is like asking them to give up their identity. Pasta, bread, and pizza are non-negotiable. Portion control is preferred over elimination."},

{type:"teach", trg:"i grassi", src:"fats", pos:"noun", gender:"m",
 note:"Masculine plural noun. Singular: il grasso.\n'Grassi saturi' = saturated fats.",
 example:"A: L'olio d'oliva contiene grassi buoni.\nB: E il pilastro della dieta mediterranea.",
 exampleSrc:"A: Olive oil contains good fats.\nB: It is the pillar of the Mediterranean diet.",
 funFact:"Italian cooking uses olive oil instead of butter (a northern exception). Extra virgin olive oil ('olio extravergine d'oliva') is treated with the same reverence as fine wine."},

{type:"teach", trg:"la fibra", src:"fiber (dietary)", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le fibre.\n'Ricco di fibre' = rich in fiber.",
 example:"A: La frutta e ricca di fibre.\nB: Anche i cereali integrali.",
 exampleSrc:"A: Fruit is rich in fiber.\nB: Also whole grains.",
 funFact:"'Fibra' also means fiber in the technological sense: 'fibra ottica' = fiber optics. In Italian health culture, eating 'cibi integrali' (whole foods) for fiber is increasingly popular."},

{type:"teach", trg:"la vitamina", src:"the vitamin", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le vitamine.\n'Integratore vitaminico' = vitamin supplement.",
 example:"A: Le arance sono ricche di vitamina C.\nB: Perfette per l'inverno!",
 exampleSrc:"A: Oranges are rich in vitamin C.\nB: Perfect for winter!",
 funFact:"Italians traditionally prefer getting vitamins from food rather than supplements. 'La spremuta di arancia' (fresh-squeezed orange juice) is the preferred vitamin C source."},

{type:"teach", trg:"il calcio (minerale)", src:"calcium", pos:"noun", gender:"m",
 note:"Masculine noun. Same word as 'football' but different meaning.\n'Ricco di calcio' = rich in calcium.",
 example:"A: Il latte e ricco di calcio.\nB: Anche il parmigiano e una buona fonte.",
 exampleSrc:"A: Milk is rich in calcium.\nB: Parmesan is also a good source.",
 funFact:"'Calcio' means both calcium and football, which can lead to amusing misunderstandings. Parmigiano-Reggiano is actually one of the best sources of 'calcio' (the mineral)."},

{type:"teach", trg:"digerire", src:"to digest", pos:"verb", gender:null,
 note:"Irregular -ire verb with -isc-. digerisco, digerisci, digerisce.\n'La digestione' = digestion.",
 example:"A: Non digerisco bene il latte.\nB: Forse sei intollerante al lattosio.",
 exampleSrc:"A: I do not digest milk well.\nB: Maybe you are lactose intolerant.",
 funFact:"Italians take digestion very seriously. Swimming after eating, drinking cold water during meals, and eating heavy foods at night are all considered dangerous to 'la digestione.'"},

{type:"teach", trg:"il metabolismo", src:"metabolism", pos:"noun", gender:"m",
 note:"Masculine noun. 'Metabolismo veloce/lento' = fast/slow metabolism.",
 example:"A: Ho il metabolismo lento.\nB: L'esercizio fisico lo accelera.",
 exampleSrc:"A: I have a slow metabolism.\nB: Physical exercise speeds it up.",
 funFact:"Italian culture believes in 'accelerare il metabolismo' through green tea, spicy food, and exercise. The concept is deeply embedded in wellness and beauty culture."},

{type:"teach", trg:"il peso forma", src:"ideal weight", pos:"noun", gender:"m",
 note:"Masculine noun. The healthy target weight for a person.\n'Mantenere il peso forma' = to maintain ideal weight.",
 example:"A: Qual e il tuo peso forma?\nB: Circa settanta chili per la mia altezza.",
 exampleSrc:"A: What is your ideal weight?\nB: About seventy kilos for my height.",
 funFact:"'Peso forma' is a distinctly Italian concept, blending health and aesthetics. Italians discuss weight openly, and 'stare in forma' (being fit) is a cultural priority."},

{type:"teach", trg:"equilibrato", src:"balanced", pos:"adj", gender:null,
 note:"Adjective. Equilibrato/a/i/e.\n'Dieta equilibrata' = balanced diet.",
 example:"A: Una dieta equilibrata e fondamentale.\nB: Si, un po' di tutto, senza esagerare.",
 exampleSrc:"A: A balanced diet is fundamental.\nB: Yes, a bit of everything, without overdoing it.",
 funFact:"The Italian approach to food is 'un po' di tutto' (a little of everything). Extreme diets are viewed with suspicion. Balance and enjoyment are the guiding principles."},

{type:"teach", trg:"il digiuno", src:"fasting", pos:"noun", gender:"m",
 note:"Masculine noun. 'Digiunare' = to fast.\n'A digiuno' = on an empty stomach.",
 example:"A: Prendi la medicina a digiuno.\nB: Prima di colazione, capito.",
 exampleSrc:"A: Take the medicine on an empty stomach.\nB: Before breakfast, understood.",
 funFact:"'Digiuno intermittente' (intermittent fasting) has become trendy in Italy. Traditionally, fasting was religious: 'Quaresima' (Lent) required 40 days of reduced eating."},

{type:"teach", trg:"ingrassare", src:"to gain weight", pos:"verb", gender:null,
 note:"Regular -are verb. ingrasso, ingrassi, ingrassa.\nOpposite: 'dimagrire' = to lose weight.",
 example:"A: Ho ingrassato durante le feste.\nB: Capita a tutti! Torniamo in palestra.",
 exampleSrc:"A: I gained weight during the holidays.\nB: It happens to everyone! Let us go back to the gym.",
 funFact:"'Ingrassare durante le feste' (gaining weight during the holidays) is a national Italian experience. January gyms overflow with people trying to undo the damage of panettone and pandoro."},

{type:"mc", q:"Che cos'e la dieta mediterranea?",
 opts:["A UNESCO-recognized eating pattern based on Italian habits","A strict weight-loss plan","A vegan diet","A protein-only diet"],
 ans:"A UNESCO-recognized eating pattern based on Italian habits",
 hint:"B... on olive oil, vegetables, grains, and moderate wine. A cultural heritage."},

{type:"fb", s:"L'olio d'oliva contiene {1} buoni.", a:["grassi"],
 opts:["grassi","proteine","carboidrati","vitamine"],
 hint:"The macronutrient found in oils, nuts, and avocados. Can be 'good' or 'bad.'",
 sSrc:"Olive oil contains good {1}."},

{type:"match", pairs:[
 {trg:"le proteine", src:"proteins"},
 {trg:"i carboidrati", src:"carbohydrates"},
 {trg:"la fibra", src:"fiber"},
 {trg:"la vitamina", src:"vitamin"}
]},

{type:"mc", q:"Che cosa significa 'peso forma'?",
 opts:["Overweight","Ideal weight","Heavy weight","Underweight"],
 ans:"Ideal weight",
 hint:"The healthy target w... for your height. A common Italian health concept."},

{type:"fb", s:"Una dieta {1} e fondamentale.", a:["equilibrata"],
 opts:["equilibrata","veloce","grassa","dolce"],
 hint:"Not too much of anything, not too little. A bit of everything in harmony.",
 sSrc:"A {1} diet is fundamental."},

{type:"mc", q:"Quale minerale ha lo stesso nome dello sport più popolare in Italia?",
 opts:["lo zinco (zinc)","il sodio (sodium)","il calcio (calcium)","il ferro (iron)"],
 ans:"il calcio (calcium)",
 hint:"This mineral shares its name with the Italian word for football."},

{type:"fb", s:"Ho {1} durante le feste di Natale.", a:["ingrassato"],
 opts:["ingrassato","dimagrito","digiunato","equilibrato"],
 hint:"The opposite of losing weight. Too much panettone and pandoro.",
 sSrc:"I {1} during the Christmas holidays."},

{type:"match", pairs:[
 {trg:"digerire", src:"to digest"},
 {trg:"ingrassare", src:"to gain weight"},
 {trg:"il digiuno", src:"fasting"},
 {trg:"il metabolismo", src:"metabolism"}
]}
,{type:"match",pairs:[{trg:"il calcio (minerale)",src:"calcium"},{trg:"il peso forma",src:"ideal weight"},{trg:"equilibrato",src:"balanced"}]},{type:"mc",q:"How do you say \"nutrition / diet\" in Italian?",opts:["la finestra","il tavolo","la bicicletta","l'alimentazione"],ans:"l'alimentazione",hint:"Recall the Italian vocabulary word taught in this lesson."}]};
export default BATCH7_L1;
