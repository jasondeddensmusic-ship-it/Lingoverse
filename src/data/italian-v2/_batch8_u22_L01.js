// Batch 8 — Unit 22 extra lesson. Culture: Italian Design & Architecture
const BATCH8_L1 = {id:"itv2_u22l_b8_1", title:"Design e architettura", icon:"🏛️", xp:15, board:true, steps:[
{type:"intro", title:"Design e architettura",
 desc:"Learn vocabulary for Italian design, architecture, and the aesthetic traditions that shaped the world.",
 goals:["Discuss Italian design and architecture","Describe buildings and spaces","Understand Italian aesthetic vocabulary"]},

{type:"teach", trg:"la cupola", src:"the dome / cupola", pos:"noun", gender:"f",
 note:"Feminine noun. 'La cupola del Brunelleschi' = Brunelleschi's dome.\nIconic Italian architectural element.",
 example:"A: La cupola del Duomo e impressionante.\nB: E la piu grande cupola in muratura del mondo.",
 exampleSrc:"A: The dome of the Cathedral is impressive.\nB: It is the largest masonry dome in the world.",
 funFact:"Brunelleschi's dome in Florence (1436) was built without scaffolding, using a technique so brilliant that engineers still study it. No wooden support, just genius engineering."},

{type:"teach", trg:"il mosaico", src:"the mosaic", pos:"noun", gender:"m",
 note:"Masculine noun. 'Arte del mosaico' = mosaic art.\nAncient Roman and Byzantine tradition.",
 example:"A: I mosaici di Ravenna sono patrimonio UNESCO.\nB: Voglio vederli dal vivo!",
 exampleSrc:"A: The mosaics of Ravenna are UNESCO heritage.\nB: I want to see them in person!",
 funFact:"Ravenna's Byzantine mosaics (5th-6th century) use gold tesserae set at slight angles so they catch light differently throughout the day. Living, breathing art."},

{type:"teach", trg:"il restauro", src:"the restoration", pos:"noun", gender:"m",
 note:"Masculine noun. 'Restaurare' = to restore.\n'In restauro' = under restoration.",
 example:"A: Il palazzo e in restauro da due anni.\nB: Ma ne vale la pena per salvare la storia.",
 exampleSrc:"A: The palace has been under restoration for two years.\nB: But it is worth it to save history.",
 funFact:"Italy spends billions on 'restauro' of its immense cultural heritage. Italian restoration experts are the best in the world, hired by museums and governments everywhere."},

{type:"teach", trg:"l'affresco", src:"the fresco", pos:"noun", gender:"m",
 note:"Masculine noun. Literally: 'on fresh' (plaster).\nPaint applied to wet plaster.",
 example:"A: L'affresco nella cappella e del Quattrocento.\nB: I colori sono ancora vividi!",
 exampleSrc:"A: The fresco in the chapel is from the 15th century.\nB: The colors are still vivid!",
 funFact:"'A fresco' means painting on fresh wet plaster. The pigment bonds chemically with the wall. This is why Michelangelo's Sistine Chapel ceiling has lasted over 500 years."},

{type:"teach", trg:"la facciata", src:"the facade", pos:"noun", gender:"f",
 note:"Feminine noun. 'La facciata del Duomo' = the cathedral facade.\nAlso figurative: 'e solo facciata' = it is just for show.",
 example:"A: La facciata della chiesa e in marmo bianco.\nB: Tipico dello stile romanico toscano.",
 exampleSrc:"A: The church facade is in white marble.\nB: Typical of the Tuscan Romanesque style.",
 funFact:"Many Italian churches have unfinished facades. The Duomo di Firenze got its facade only in 1887, over 400 years after the building was complete. Budget problems are eternal."},

{type:"teach", trg:"il portico", src:"the portico / arcade", pos:"noun", gender:"m",
 note:"Masculine noun. 'Sotto i portici' = under the arcades.\nBologna is famous for its 40km of portici.",
 example:"A: Camminiamo sotto i portici, piove.\nB: Bologna ha portici ovunque, che fortuna!",
 exampleSrc:"A: Let us walk under the arcades, it is raining.\nB: Bologna has arcades everywhere, how lucky!",
 funFact:"Bologna's 40 kilometers of portici are a UNESCO World Heritage Site since 2021. They were built so that the city could expand upward, creating covered walkways below."},

{type:"teach", trg:"lo stile", src:"the style", pos:"noun", gender:"m",
 note:"Masculine noun. 'Stile gotico/barocco/rinascimentale' = Gothic/Baroque/Renaissance style.",
 example:"A: Qual e il tuo stile preferito?\nB: Il Rinascimento, per l'armonia delle proporzioni.",
 exampleSrc:"A: What is your favorite style?\nB: The Renaissance, for the harmony of proportions.",
 funFact:"'Avere stile' (to have style) goes beyond fashion in Italy. It means having taste, elegance, and grace in everything you do. Architecture, food, dress, behavior."},

{type:"teach", trg:"l'artigianato", src:"the craftsmanship / artisanship", pos:"noun", gender:"m",
 note:"Masculine noun. 'L'artigiano' = the artisan.\n'Fatto a mano' = handmade.",
 example:"A: L'artigianato italiano e famoso nel mondo.\nB: Soprattutto il vetro di Murano.",
 exampleSrc:"A: Italian craftsmanship is famous worldwide.\nB: Especially Murano glass.",
 funFact:"From Murano glass to Florentine leather, Italian 'artigianato' is a living tradition. Many workshops have been family-run for centuries, passing skills from generation to generation."},

{type:"teach", trg:"il patrimonio", src:"the heritage / patrimony", pos:"noun", gender:"m",
 note:"Masculine noun. 'Patrimonio culturale' = cultural heritage.\n'Patrimonio UNESCO' = UNESCO heritage.",
 example:"A: L'Italia ha il maggior numero di siti patrimonio UNESCO.\nB: Con 59 siti, e la prima al mondo!",
 exampleSrc:"A: Italy has the most UNESCO heritage sites.\nB: With 59 sites, it is first in the world!",
 funFact:"Italy holds the world record with 59 UNESCO World Heritage Sites (as of 2024). The entire historic centers of Rome, Florence, and Venice are protected sites."},

{type:"mc",
 q:"How was Brunelleschi's dome in Florence built?",
 opts:["Without scaffolding, using an innovative self-supporting technique","With massive wooden scaffolding","With metal supports","Using pre-made concrete blocks"],
 ans:"Without scaffolding, using an innovative self-supporting technique",
 hint:"The dome was too large for traditional methods. Brunelleschi invented a t... that is still studied by engineers today."},

{type:"match", pairs:[
  {trg:"la cupola", src:"the dome"},
  {trg:"l'affresco", src:"the fresco"},
  {trg:"la facciata", src:"the facade"},
  {trg:"il restauro", src:"the restoration"}
]},

{type:"fb",
 s:"Camminiamo sotto i {1}, sta piovendo.",
 a:["portici"],
 opts:["portici","mosaici","affreschi","restauri"],
 hint:"These are covered walkways with arches. Bologna has 40 kilometers of them.",
 sSrc:"Let us walk under the {1}, it is raining."},

{type:"mc",
 q:"How many UNESCO World Heritage Sites does Italy have?",
 opts:["59 (the most in the world)","25","42","100"],
 ans:"59 (the most in the world)",
 hint:"Italy holds the w... record. Many entire city centers are protected heritage sites."},

{type:"fb",
 s:"L'{1} italiano e famoso in tutto il mondo.",
 a:["artigianato"],
 opts:["artigianato","affresco","patrimonio","portico"],
 hint:"This word describes the tradition of skilled handmade work. From Murano glass to Florentine leather.",
 sSrc:"Italian {1} is famous throughout the world."},

{type:"mc",
 q:"What does 'a fresco' literally mean in art?",
 opts:["On fresh (wet plaster)","In cold weather","With fresh colors","Under fresh air"],
 ans:"On fresh (wet plaster)",
 hint:"This painting technique involves applying pigment directly onto a freshly prepared surface. The paint bonds chemically as the surface dries."}
]};
export default BATCH8_L1;
