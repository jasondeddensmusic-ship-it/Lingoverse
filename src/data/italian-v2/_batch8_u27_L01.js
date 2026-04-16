// Batch 8 — Unit 27 extra lesson. Science: Laboratory & Methodology
const BATCH8_L1 = {id:"itv2_u27l_b8_1", title:"Il metodo scientifico", icon:"🧪", xp:15, board:true, steps:[
{type:"intro", title:"Il metodo scientifico",
 desc:"Learn vocabulary for scientific methodology, laboratory work, and the research process.",
 goals:["Describe the scientific method","Use laboratory vocabulary","Discuss research methodology"]},

{type:"teach", trg:"il campione", src:"the sample / specimen", pos:"noun", gender:"m",
 note:"Masculine noun. Also means 'champion.'\n'Campione di sangue' = blood sample.",
 example:"A: Il campione deve essere analizzato.\nB: Lo portiamo al laboratorio subito.",
 exampleSrc:"A: The sample needs to be analyzed.\nB: Let us take it to the laboratory right away.",
 funFact:"'Campione' meaning both 'sample' and 'champion' creates fun ambiguity. A headline like 'Il campione italiano' could mean Italy's champion or an Italian sample."},

{type:"teach", trg:"il microscopio", src:"the microscope", pos:"noun", gender:"m",
 note:"Masculine noun. 'Al microscopio' = under the microscope.\nFrom Greek: micro (small) + scopio (to look).",
 example:"A: Guarda il campione al microscopio.\nB: L'ingrandimento mostra dettagli incredibili.",
 exampleSrc:"A: Look at the sample under the microscope.\nB: The magnification shows incredible details.",
 funFact:"Galileo Galilei improved the microscope in the early 1600s. Italy's contribution to optics and scientific instruments is enormous, from Galileo's telescopes to modern precision engineering."},

{type:"teach", trg:"la provetta", src:"the test tube", pos:"noun", gender:"f",
 note:"Feminine noun. Diminutive of 'prova' (test).\n'Bambino in provetta' = test-tube baby.",
 example:"A: Metti il liquido nella provetta.\nB: Quanto? Circa dieci millilitri?",
 exampleSrc:"A: Put the liquid in the test tube.\nB: How much? About ten milliliters?",
 funFact:"'Bambino in provetta' (test-tube baby) was a controversial phrase in Italian media when IVF technology arrived. Italy now has strict but comprehensive IVF legislation."},

{type:"teach", trg:"la formula", src:"the formula", pos:"noun", gender:"f",
 note:"Feminine noun. 'Formula chimica' = chemical formula.\n'Formula matematica' = mathematical formula.",
 example:"A: Qual e la formula dell'acqua?\nB: H2O, due atomi di idrogeno e uno di ossigeno.",
 exampleSrc:"A: What is the formula for water?\nB: H2O, two hydrogen atoms and one oxygen atom.",
 funFact:"Amedeo Avogadro, an Italian scientist, proposed the law that equal volumes of gas contain equal numbers of molecules. 'Il numero di Avogadro' is fundamental in chemistry."},

{type:"teach", trg:"il procedimento", src:"the procedure / process", pos:"noun", gender:"m",
 note:"Masculine noun. 'Procedimento scientifico' = scientific procedure.\nFrom 'procedere' (to proceed).",
 example:"A: Segui il procedimento con attenzione.\nB: Ogni passo e fondamentale.",
 exampleSrc:"A: Follow the procedure carefully.\nB: Every step is fundamental.",
 funFact:"Galileo's insistence on systematic 'procedimento sperimentale' (experimental procedure) in the 1600s is why he is called the father of modern science."},

{type:"teach", trg:"la scoperta", src:"the discovery", pos:"noun", gender:"f",
 note:"Feminine noun. 'Scoprire' = to discover.\n'Fare una scoperta' = to make a discovery.",
 example:"A: Questa scoperta cambiera la medicina.\nB: Ci sono voluti anni di ricerca.",
 exampleSrc:"A: This discovery will change medicine.\nB: It took years of research.",
 funFact:"Italian scientists have made groundbreaking scoperte: Volta (battery), Marconi (radio), Fermi (nuclear reactor), Levi-Montalcini (nerve growth factor). Italy has 20 Nobel laureates."},

{type:"teach", trg:"il dato", src:"the data point / datum", pos:"noun", gender:"m",
 note:"Masculine noun. Usually plural: i dati.\n'Raccogliere dati' = to collect data.",
 example:"A: I dati confermano l'ipotesi.\nB: Servono altri esperimenti per essere sicuri.",
 exampleSrc:"A: The data confirm the hypothesis.\nB: More experiments are needed to be sure.",
 funFact:"'Dato' comes from Latin 'datum' (given). Italian naturally uses the singular 'dato' and plural 'dati,' unlike English which awkwardly debates 'data is' vs 'data are.'"},

{type:"teach", trg:"la variabile", src:"the variable", pos:"noun", gender:"f",
 note:"Feminine noun. 'Variabile indipendente/dipendente' = independent/dependent variable.",
 example:"A: Quante variabili stai analizzando?\nB: Tre: temperatura, pressione e tempo.",
 exampleSrc:"A: How many variables are you analyzing?\nB: Three: temperature, pressure, and time.",
 funFact:"Italian scientific terminology borrows heavily from Latin, which means Italian students often find scientific papers in English easier to read than other European students."},

{type:"teach", trg:"la peer review", src:"the peer review", pos:"noun", gender:"f",
 note:"Feminine noun. English borrowing.\n'Rivista peer-reviewed' = peer-reviewed journal. 'Revisione paritaria' is the Italian alternative.",
 example:"A: L'articolo ha superato la peer review.\nB: Complimenti, sara pubblicato!",
 exampleSrc:"A: The article passed peer review.\nB: Congratulations, it will be published!",
 funFact:"Italian academia increasingly uses 'peer review' in English. The Italian equivalent 'revisione paritaria' exists but sounds overly formal. Code-switching is common in Italian science."},

{type:"mc",
 q:"Why is Galileo Galilei called the father of modern science?",
 opts:["He insisted on systematic experimental procedure","He invented the telescope","He discovered gravity","He wrote in Latin"],
 ans:"He insisted on systematic experimental procedure",
 hint:"His revolutionary contribution was methodology: observing, experimenting, and verifying systematically."},

{type:"match", pairs:[
  {trg:"il campione", src:"the sample"},
  {trg:"la provetta", src:"the test tube"},
  {trg:"la scoperta", src:"the discovery"},
  {trg:"la variabile", src:"the variable"}
]},

{type:"fb",
 s:"I {1} confermano la nostra ipotesi iniziale.",
 a:["dati"],
 opts:["dati","campioni","formule","microscopi"],
 hint:"These are the pieces of information collected during research. Usually used in plural form.",
 sSrc:"The {1} confirm our initial hypothesis."},

{type:"mc",
 q:"What does 'campione' mean in non-scientific Italian?",
 opts:["Champion","Teacher","Sample only","Equipment"],
 ans:"Champion",
 hint:"The same word has two very different meanings. In sports, it means the winner. In science, it means a specimen."},

{type:"fb",
 s:"L'articolo ha superato la {1} ed e stato accettato.",
 a:["peer review"],
 opts:["peer review","formula","provetta","variabile"],
 hint:"This is the quality check process where other scientists evaluate your research before publication.",
 sSrc:"The article passed {1} and was accepted."},

{type:"mc",
 q:"How many Nobel laureates has Italy produced?",
 opts:["20","5","50","100"],
 ans:"20",
 hint:"Italy has a strong scientific tradition. Volta, Marconi, Fermi, and Levi-Montalcini are among its most famous scientists."}
]};
export default BATCH8_L1;
