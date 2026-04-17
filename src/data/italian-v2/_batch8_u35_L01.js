// Batch 8 — Unit 35 extra lesson. Innovation: Space & Frontiers
const BATCH8_L1 = {id:"itv2_u35l_b8_1", title:"Lo spazio e le frontiere", icon:"🛰️", xp:15, board:true, steps:[
{type:"intro", title:"Lo spazio e le frontiere",
 desc:"Learn vocabulary for space exploration, cutting-edge technology, and the frontiers of innovation.",
 goals:["Discuss space exploration","Use advanced technology vocabulary","Talk about scientific frontiers"]},

{type:"teach", trg:"il satellite", src:"the satellite", pos:"noun", gender:"m",
 note:"Masculine noun. 'Satellite artificiale' = artificial satellite.\n'Via satellite' = by satellite.",
 example:"A: Il satellite italiano e stato lanciato con successo.\nB: Orbita intorno alla Terra ogni novanta minuti.",
 exampleSrc:"A: The Italian satellite was launched successfully.\nB: It orbits Earth every ninety minutes.",
 funFact:"Italy was the third country to launch a satellite (San Marco 1, 1964), after the USSR and USA. The Italian Space Agency (ASI) is a major contributor to the International Space Station."},

{type:"teach", trg:"il prototipo", src:"the prototype", pos:"noun", gender:"m",
 note:"Masculine noun. 'Costruire un prototipo' = to build a prototype.\nFrom Greek: proto (first) + typos (type).",
 example:"A: Il prototipo e pronto per i test.\nB: Se funziona, passiamo alla produzione.",
 exampleSrc:"A: The prototype is ready for testing.\nB: If it works, we move to production.",
 funFact:"Italian engineering prototypes are renowned. From Ferrari's first race car to Olivetti's first personal computer, Italy has a long history of innovative prototypes."},

{type:"teach", trg:"la robotica", src:"the robotics", pos:"noun", gender:"f",
 note:"Feminine noun. 'Il robot' = the robot.\n'Robotica avanzata' = advanced robotics.",
 example:"A: L'Italia e leader nella robotica industriale.\nB: Soprattutto nell'automazione delle fabbriche.",
 exampleSrc:"A: Italy is a leader in industrial robotics.\nB: Especially in factory automation.",
 funFact:"IIT (Istituto Italiano di Tecnologia) in Genova is one of Europe's top robotics labs. Their humanoid robots and soft robotics research are world-class."},

{type:"teach", trg:"il brevetto", src:"the patent", pos:"noun", gender:"m",
 note:"Masculine noun. 'Brevettare un'invenzione' = to patent an invention.\n'Ufficio brevetti' = patent office.",
 example:"A: Abbiamo brevettato il nuovo materiale.\nB: Nessuno potra copiarlo per vent'anni.",
 exampleSrc:"A: We patented the new material.\nB: Nobody can copy it for twenty years.",
 funFact:"Italy files over 4,000 patents per year at the European Patent Office. Northern Italy's 'distretti tecnologici' (tech districts) drive mechanical, chemical, and biotech innovation."},

{type:"teach", trg:"il lancio", src:"the launch", pos:"noun", gender:"m",
 note:"Masculine noun. 'Lanciare' = to launch.\n'Lancio spaziale' = space launch. Also: product launch.",
 example:"A: Il lancio del razzo e previsto per domani.\nB: Incrociamo le dita!",
 exampleSrc:"A: The rocket launch is scheduled for tomorrow.\nB: Let us cross our fingers!",
 funFact:"Italy's Vega rocket, developed by Avio, launches from French Guiana. It is Europe's lightweight launch vehicle, designed to put small satellites into orbit. A proud Italian contribution."},

{type:"teach", trg:"l'algoritmo", src:"the algorithm", pos:"noun", gender:"m",
 note:"Masculine noun. Named after Al-Khwarizmi.\n'Algoritmo di machine learning' = ML algorithm.",
 example:"A: L'algoritmo analizza milioni di dati in pochi secondi.\nB: L'intelligenza artificiale e impressionante.",
 exampleSrc:"A: The algorithm analyzes millions of data points in seconds.\nB: Artificial intelligence is impressive.",
 funFact:"The word 'algoritmo' comes from the name of the Persian mathematician Al-Khwarizmi. Italian mathematicians like Fibonacci helped transmit Arabic mathematical knowledge to Europe."},

{type:"teach", trg:"la nanotecnologia", src:"the nanotechnology", pos:"noun", gender:"f",
 note:"Feminine noun. 'Nano' = one billionth.\n'Nanomateriali' = nanomaterials.",
 example:"A: La nanotecnologia rivoluzionera la medicina.\nB: Farmaci mirati a livello cellulare.",
 exampleSrc:"A: Nanotechnology will revolutionize medicine.\nB: Drugs targeted at the cellular level.",
 funFact:"Italy's CNR (Consiglio Nazionale delle Ricerche) has major nanotechnology research centers. Applications range from smart textiles to drug delivery to cultural heritage preservation."},

{type:"teach", trg:"la startup", src:"the startup", pos:"noun", gender:"f",
 note:"Feminine noun. English borrowing.\n'Ecosistema startup' = startup ecosystem.",
 example:"A: La startup ha ricevuto un milione di finanziamento.\nB: Sviluppano un'app per la salute.",
 exampleSrc:"A: The startup received one million in funding.\nB: They are developing a health app.",
 funFact:"Italy's startup ecosystem is growing, centered in Milan, Rome, and Turin. The Italian government offers tax incentives ('agevolazioni fiscali') for innovative startups."},

{type:"teach", trg:"la frontiera", src:"the frontier / boundary", pos:"noun", gender:"f",
 note:"Feminine noun. 'Frontiera tecnologica' = technological frontier.\nAlso: national border.",
 example:"A: Siamo alla frontiera della conoscenza umana.\nB: Ogni scoperta apre nuove domande.",
 exampleSrc:"A: We are at the frontier of human knowledge.\nB: Every discovery opens new questions.",
 funFact:"'Frontiera' in Italian works both literally (border) and figuratively (frontier of knowledge). At Italian borders, you once saw 'Benvenuti in Italia!' signs. Now EU borders are open."},

{type:"mc",
 q:"When did Italy launch its first satellite?",
 opts:["1964 (third country after USSR and USA)","1957","1980","2000"],
 ans:"1964 (third country after USSR and USA)",
 hint:"Italy was remarkably early in space exploration. San Marco 1 made Italy the t... space-faring nation."},

{type:"match", pairs:[
  {trg:"il satellite", src:"the satellite"},
  {trg:"il prototipo", src:"the prototype"},
  {trg:"l'algoritmo", src:"the algorithm"},
  {trg:"la frontiera", src:"the frontier"}
]},

{type:"fb",
 s:"Il {1} del razzo Vega e previsto per domani mattina.",
 a:["lancio"],
 opts:["lancio","satellite","prototipo","brevetto"],
 hint:"This is the moment when a rocket leaves the ground. Italy's Vega rocket performs this from French Guiana.",
 sSrc:"The {1} of the Vega rocket is scheduled for tomorrow morning."},

{type:"mc",
 q:"Where is Italy's top robotics research lab located?",
 opts:["IIT in Genova","CERN in Geneva","MIT in Boston","NASA in Houston"],
 ans:"IIT in Genova",
 hint:"The Istituto Italiano di Tecnologia is one of Europe's leading centers for robotics and artificial intelligence."},

{type:"fb",
 s:"La {1} ha ricevuto un finanziamento di un milione di euro.",
 a:["startup"],
 opts:["startup","nanotecnologia","robotica","frontiera"],
 hint:"This is a new, innovative company in its early stages. Italy's ecosystem for these is growing, especially in Milan.",
 sSrc:"The {1} received one million euros in funding."},

{type:"mc",
 q:"Who was Fibonacci and why is he important?",
 opts:["An Italian mathematician who transmitted Arabic mathematical knowledge to Europe","An Italian astronaut","A rocket engineer","A computer scientist"],
 ans:"An Italian mathematician who transmitted Arabic mathematical knowledge to Europe",
 hint:"His 'Liber Abaci' introduced the numeral system used worldwide today. The famous sequence named after him appears everywhere in nature."}
]};
export default BATCH8_L1;
