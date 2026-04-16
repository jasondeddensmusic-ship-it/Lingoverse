// Italian V2 Unit 27. La scienza (B2.1)
import BATCH6_L1 from './_batch6_u27_L01.js';
import BATCH5_L02 from './_batch5_u27_L02.js';
import BATCH5_L01 from './_batch5_u27_L01.js';
import BATCH3_L02 from './_batch3_u27_L02.js';
import BATCH3_L01 from './_batch3_u27_L01.js';
import EXP_L4 from './_temp_u27_expand_L01.js';import EXP_L5 from './_temp_u27_expand_L02.js';import EXP_L6 from './_temp_u27_expand_L03.js';
// CILS B2 aligned. Science, research, and discovery vocabulary.

const UNIT_27 = {
  n:27, lang:"it", srcLang:"en", track:"v2",
  title:"La scienza", sub:"Science & Research",
  icon:"🔬", level:"B2.1", color:"#7B5EE8",
  lessons:[
    // ─── Lesson 1: Il metodo scientifico ───
    {id:"itv2_u27l1", title:"Il metodo scientifico", icon:"🧪", xp:15, board:true, steps:[
      {type:"intro", title:"Il metodo scientifico",
       desc:"Learn how to discuss scientific research, hypotheses, and experiments in Italian. Master the vocabulary used in academic and popular science contexts.",
       goals:["Name core concepts of the scientific method","Describe research processes and findings","Discuss hypotheses and theories"]},

      {type:"teach", trg:"la ricerca", src:"the research", pos:"noun", gender:"f",
       note:"Feminine noun. Plural: le ricerche.\n'Ricerca scientifica' = scientific research. Also means 'search.'",
       example:"A: La ricerca ha richiesto tre anni di lavoro.\nB: I risultati sono stati pubblicati su Nature.",
       exampleSrc:"A: The research required three years of work.\nB: The results were published in Nature.",
       funFact:"Italy ranks 8th globally for scientific publications. Italian researchers punch above their weight despite chronic underfunding, a phenomenon known as 'fare di necessita virtu' (making a virtue of necessity)."},

      {type:"teach", trg:"l'esperimento", src:"the experiment", pos:"noun", gender:"m",
       note:"Masculine noun. Plural: gli esperimenti.\n'Condurre un esperimento' = to conduct an experiment.",
       example:"A: L'esperimento ha confermato la nostra ipotesi.\nB: Dobbiamo ripeterlo per sicurezza.",
       exampleSrc:"A: The experiment confirmed our hypothesis.\nB: We must repeat it to be sure.",
       funFact:"Galileo Galilei, considered the father of the experimental method, conducted his famous gravity experiments in Pisa around 1590. The Italian word 'esperimento' shares the Latin root 'experiri' (to try)."},

      {type:"teach", trg:"l'ipotesi", src:"the hypothesis", pos:"noun", gender:"f",
       note:"Feminine noun. Invariable (same singular and plural).\n'Formulare un'ipotesi' = to formulate a hypothesis.",
       example:"A: L'ipotesi iniziale era sbagliata.\nB: I dati ci hanno costretto a cambiarla.",
       exampleSrc:"A: The initial hypothesis was wrong.\nB: The data forced us to change it.",
       funFact:"From Greek 'hypotithenai' (to put under). In Italian, nouns ending in '-si' never change in the plural: l'ipotesi, le ipotesi. The same pattern applies to 'la crisi,' 'la tesi,' and 'l'analisi.'"},

      {type:"teach", trg:"la teoria", src:"the theory", pos:"noun", gender:"f",
       note:"Feminine noun. Plural: le teorie.\n'In teoria' = in theory, theoretically.",
       example:"A: La teoria della relativita ha rivoluzionato la fisica.\nB: Einstein la pubblico nel 1905.",
       exampleSrc:"A: The theory of relativity revolutionized physics.\nB: Einstein published it in 1905.",
       funFact:"Enrico Fermi developed both theory and experiment brilliantly. His group in Rome, 'i ragazzi di via Panisperna,' made groundbreaking nuclear physics discoveries in the 1930s before Fermi emigrated to the US."},

      {type:"teach", trg:"la scoperta", src:"the discovery", pos:"noun", gender:"f",
       note:"Feminine noun. Plural: le scoperte.\nFrom 'scoprire' (to discover). 'Fare una scoperta' = to make a discovery.",
       example:"A: Questa scoperta cambiera la medicina moderna.\nB: Potrebbe salvare milioni di vite.",
       exampleSrc:"A: This discovery will change modern medicine.\nB: It could save millions of lives.",
       funFact:"Italian scientists have made landmark discoveries across centuries: Volta invented the battery, Marconi pioneered radio, and Rita Levi-Montalcini won the Nobel Prize for discovering nerve growth factor."},

      {type:"mc",
       q:"Come si chiama una spiegazione provvisoria che deve essere testata con esperimenti?",
       opts:["Un'ipotesi","Una teoria","Una scoperta","Una ricerca"],
       ans:"Un'ipotesi",
       hint:"A preliminary explanation proposed before testing. It must be verified through experiments before becoming accepted."},

      {type:"teach", trg:"la metodologia", src:"the methodology", pos:"noun", gender:"f",
       note:"Feminine noun. The systematic approach used in research.\nPlural: le metodologie.",
       example:"A: La metodologia usata e rigorosa.\nB: Hanno seguito tutti i protocolli standard.",
       exampleSrc:"A: The methodology used is rigorous.\nB: They followed all standard protocols.",
       funFact:"Italian universities require a detailed 'sezione metodologica' in every thesis. The word combines the Greek 'methodos' (pursuit of knowledge) with 'logos' (study), both borrowed through Latin."},

      {type:"fb",
       s:"L'{1} ha confermato i risultati della ricerca precedente.",
       a:["esperimento"],
       opts:["esperimento","ipotesi","scoperta","metodologia"],
       hint:"A controlled test designed to verify or disprove a hypothesis. Scientists conduct these in laboratories.",
       sSrc:"The {1} confirmed the results of the previous research."},

      {type:"teach", trg:"il brevetto", src:"the patent", pos:"noun", gender:"m",
       note:"Masculine noun. Plural: i brevetti.\n'Brevettare' (verb) = to patent. 'Ufficio brevetti' = patent office.",
       example:"A: Abbiamo ottenuto il brevetto per la nuova tecnologia.\nB: Nessun altro potra copiarla.",
       exampleSrc:"A: We obtained the patent for the new technology.\nB: No one else will be able to copy it.",
       funFact:"Venice created the first formal patent system in 1474, the 'Parte Veneziana.' This law granted inventors exclusive rights for ten years, establishing the model that every modern patent system follows."},

      {type:"teach", trg:"la pubblicazione", src:"the publication", pos:"noun", gender:"f",
       note:"Feminine noun. Plural: le pubblicazioni.\n'Pubblicare' (verb) = to publish. Used for scientific papers and books.",
       example:"A: La pubblicazione e apparsa su una rivista prestigiosa.\nB: Ha gia ricevuto cento citazioni.",
       exampleSrc:"A: The publication appeared in a prestigious journal.\nB: It has already received one hundred citations.",
       funFact:"The pressure to publish is captured by the English phrase 'publish or perish,' which Italian academics have adopted as 'pubblica o muori.' Italy uses a national system called ANVUR to evaluate research output."},

      {type:"mc",
       q:"Che cosa protegge un brevetto?",
       opts:["Un libro o un romanzo","Un'invenzione o una tecnologia nuova","Una teoria scientifica","Un metodo di insegnamento"],
       ans:"Un'invenzione o una tecnologia nuova",
       hint:"This legal protection prevents others from copying your invention. Venice created the first system for this in 1474."},

      {type:"match", pairs:[
        {trg:"ricerca", src:"research"},
        {trg:"esperimento", src:"experiment"},
        {trg:"ipotesi", src:"hypothesis"},
        {trg:"scoperta", src:"discovery"},
        {trg:"brevetto", src:"patent"}
      ]},

      {type:"fb",
       s:"La {1} della ricerca deve essere rigorosa e replicabile.",
       a:["metodologia"],
       opts:["metodologia","pubblicazione","teoria","scoperta"],
       hint:"The systematic approach or set of methods used to conduct research. It must be clear enough for others to replicate.",
       sSrc:"The {1} of the research must be rigorous and replicable."},

      {type:"mc",
       q:"Che differenza c'e tra un'ipotesi e una teoria?",
       opts:["La teoria viene prima dell'ipotesi","Sono la stessa cosa","L'ipotesi e provvisoria, la teoria e supportata da molte prove","L'ipotesi e sempre vera"],
       ans:"L'ipotesi e provvisoria, la teoria e supportata da molte prove",
       hint:"One is a preliminary guess that needs testing. The other has been confirmed through extensive evidence and experiments over time."}
    ]},

    // ─── Lesson 2: La biologia e la vita ───
    {id:"itv2_u27l2", title:"La biologia e la vita", icon:"🧬", xp:15, board:true, steps:[
      {type:"intro", title:"La biologia e la vita",
       desc:"Explore biological vocabulary for cells, DNA, and living systems. Learn to discuss genetics and biology topics that appear in news and everyday conversation.",
       goals:["Name key biological structures and molecules","Discuss genetics and DNA in simple terms","Describe ecosystems and biological processes"]},

      {type:"teach", trg:"la cellula", src:"the cell", pos:"noun", gender:"f",
       note:"Feminine noun. Plural: le cellule.\n'Cellula staminale' = stem cell. 'Cellula nervosa' = nerve cell.",
       example:"A: Il corpo umano ha circa 37 trilioni di cellule.\nB: Un numero incredibile.",
       exampleSrc:"A: The human body has about 37 trillion cells.\nB: An incredible number.",
       funFact:"Robert Hooke named them 'cells' in 1665 because they reminded him of monks' rooms. Italian borrowed 'cellula' from Latin 'cellula' (small room), the diminutive of 'cella.'"},

      {type:"teach", trg:"il DNA", src:"the DNA", pos:"noun", gender:"m",
       note:"Masculine noun. Invariable abbreviation.\nStands for 'acido desossiribonucleico.' Also used figuratively: 'e nel nostro DNA' = it is in our DNA.",
       example:"A: L'analisi del DNA ha identificato il colpevole.\nB: La scienza forense e avanzatissima.",
       exampleSrc:"A: The DNA analysis identified the culprit.\nB: Forensic science is extremely advanced.",
       funFact:"Italian uses the same abbreviation 'DNA' as English, though the full Italian name is 'acido desossiribonucleico.' Figuratively, Italians say 'e nel DNA dell'azienda' the way English speakers say 'it is in the company's DNA.'"},

      {type:"teach", trg:"la molecola", src:"the molecule", pos:"noun", gender:"f",
       note:"Feminine noun. Plural: le molecole.\n'Molecola d'acqua' = water molecule. Related: molecolare (adjective).",
       example:"A: Questa molecola potrebbe essere la chiave per un nuovo farmaco.\nB: I test clinici inizieranno l'anno prossimo.",
       exampleSrc:"A: This molecule could be the key to a new drug.\nB: Clinical trials will begin next year.",
       funFact:"Amedeo Avogadro, an Italian scientist, proposed that equal volumes of gases contain equal numbers of molecules. 'Il numero di Avogadro' (6.022 x 10 to the 23rd) is named after him."},

      {type:"teach", trg:"l'ecosistema", src:"the ecosystem", pos:"noun", gender:"m",
       note:"Masculine noun. Plural: gli ecosistemi.\n'Ecosistema marino/terrestre' = marine/terrestrial ecosystem.",
       example:"A: L'ecosistema mediterraneo e molto fragile.\nB: Il cambiamento climatico lo minaccia.",
       exampleSrc:"A: The Mediterranean ecosystem is very fragile.\nB: Climate change threatens it.",
       funFact:"Italy is one of Europe's most biodiverse countries, with over 57,000 animal species. The Mediterranean basin is a global biodiversity hotspot, and Italian ecosystems range from Alpine to subtropical."},

      {type:"mc",
       q:"Qual e l'unita fondamentale di tutti gli esseri viventi?",
       opts:["La cellula","La molecola","Il DNA","L'ecosistema"],
       ans:"La cellula",
       hint:"The basic building block of all living organisms. Every plant, animal, and bacterium is made up of these tiny units."},

      {type:"teach", trg:"il gene", src:"the gene", pos:"noun", gender:"m",
       note:"Masculine noun. Plural: i geni.\n'Ingegneria genetica' = genetic engineering. 'Genotipo' = genotype.",
       example:"A: I geni determinano il colore degli occhi.\nB: Ma anche l'ambiente conta molto.",
       exampleSrc:"A: Genes determine eye color.\nB: But the environment also matters a lot.",
       funFact:"'Gene' and 'genio' (genius) share the same Greek root 'genos' (origin, birth). In Italian, 'i geni' can mean either 'the genes' or 'the geniuses,' depending on context."},

      {type:"teach", trg:"il tessuto", src:"the tissue", pos:"noun", gender:"m",
       note:"Masculine noun. Plural: i tessuti.\nBiological tissue and fabric share the same word.\n'Tessuto muscolare' = muscle tissue.",
       example:"A: Il tessuto e stato analizzato al microscopio.\nB: Le cellule appaiono normali.",
       exampleSrc:"A: The tissue was analyzed under the microscope.\nB: The cells appear normal.",
       funFact:"Like English 'tissue' (from French 'tissu,' meaning woven), Italian 'tessuto' comes from 'tessere' (to weave). Biological tissue is 'woven' from cells, just as fabric is woven from threads."},

      {type:"fb",
       s:"L'analisi del {1} ha rivelato una mutazione genetica rara.",
       a:["DNA"],
       opts:["DNA","gene","tessuto","ecosistema"],
       hint:"The molecule that carries all genetic information in living organisms. A double helix found in every cell.",
       sSrc:"The {1} analysis revealed a rare genetic mutation."},

      {type:"teach", trg:"l'organismo", src:"the organism", pos:"noun", gender:"m",
       note:"Masculine noun. Plural: gli organismi.\n'Organismo vivente' = living organism. 'Organismo geneticamente modificato' (OGM) = GMO.",
       example:"A: Questo organismo vive nelle profondita marine.\nB: Resiste a pressioni incredibili.",
       exampleSrc:"A: This organism lives in the ocean depths.\nB: It withstands incredible pressures.",
       funFact:"Italy has some of the strictest regulations on OGM (GMOs) in Europe. The debate between scientific research and the 'precautionary principle' is a constant theme in Italian political discourse."},

      {type:"teach", trg:"l'evoluzione", src:"the evolution", pos:"noun", gender:"f",
       note:"Feminine noun. 'La teoria dell'evoluzione' = the theory of evolution.\nAlso used figuratively: 'l'evoluzione della societa' = the evolution of society.",
       example:"A: L'evoluzione delle specie richiede milioni di anni.\nB: Darwin lo dimostro nel 1859.",
       exampleSrc:"A: The evolution of species takes millions of years.\nB: Darwin demonstrated it in 1859.",
       funFact:"Lazzaro Spallanzani, an 18th-century Italian biologist, disproved spontaneous generation a century before Pasteur. His work on animal reproduction laid groundwork for understanding how organisms evolve and reproduce."},

      {type:"mc",
       q:"Che cos'e un OGM?",
       opts:["Un ospedale generale municipale","Un organismo geneticamente modificato","Un ordine giuridico mondiale","Un'organizzazione governativa militare"],
       ans:"Un organismo geneticamente modificato",
       hint:"An organism whose DNA has been altered in a laboratory. Italy strictly regulates these in agriculture."},

      {type:"match", pairs:[
        {trg:"cellula", src:"cell"},
        {trg:"molecola", src:"molecule"},
        {trg:"gene", src:"gene"},
        {trg:"tessuto", src:"tissue"},
        {trg:"ecosistema", src:"ecosystem"}
      ]},

      {type:"fb",
       s:"L'{1} mediterraneo ospita oltre 57.000 specie animali.",
       a:["ecosistema"],
       opts:["ecosistema","organismo","evoluzione","cellula"],
       hint:"A community of living organisms and their physical environment functioning as a unit. The Mediterranean basin is one.",
       sSrc:"The Mediterranean {1} hosts over 57,000 animal species."},

      {type:"mc",
       q:"Perche il 'tessuto' biologico si chiama cosi?",
       opts:["Perche si trova solo nella pelle","Perche e stato scoperto da un sarto","Perche le cellule sono intrecciate come i fili di un tessuto","Perche e morbido come la stoffa"],
       ans:"Perche le cellule sono intrecciate come i fili di un tessuto",
       hint:"From 'tessere' (to weave). Cells in a tissue are woven together in structure, just as threads form fabric."}
    ]},

    // ─── Lesson 3: Progresso e innovazione ───
    {id:"itv2_u27l3", title:"Progresso e innovazione", icon:"💡", xp:15, board:true, steps:[
      {type:"intro", title:"Progresso e innovazione",
       desc:"Discuss scientific progress, technological innovation, and the impact of discoveries on society. Learn vocabulary for expressing opinions about science and ethics.",
       goals:["Discuss the impact of scientific discoveries","Express opinions on science and ethics","Describe innovation and technological progress"]},

      {type:"teach", trg:"il progresso", src:"the progress", pos:"noun", gender:"m",
       note:"Masculine noun. Usually singular.\n'Progresso scientifico/tecnologico' = scientific/technological progress.",
       example:"A: Il progresso scientifico ha allungato la vita media.\nB: Ma ha anche creato nuovi problemi etici.",
       exampleSrc:"A: Scientific progress has extended average life expectancy.\nB: But it has also created new ethical problems.",
       funFact:"Italy invested heavily in scientific progress during the Renaissance, when patrons like the Medici funded research. Today, Italy spends about 1.4% of GDP on research, below the EU average of 2.3%."},

      {type:"teach", trg:"l'innovazione", src:"the innovation", pos:"noun", gender:"f",
       note:"Feminine noun. Plural: le innovazioni.\n'Innovazione tecnologica' = technological innovation.",
       example:"A: L'innovazione e la chiave per la competitivita.\nB: Senza innovazione, le imprese muoiono.",
       exampleSrc:"A: Innovation is the key to competitiveness.\nB: Without innovation, businesses die.",
       funFact:"Northern Italy's 'distretti industriali' (industrial districts) are famous for bottom-up innovation. Small firms in areas like Emilia-Romagna collaborate and innovate together, a model studied worldwide."},

      {type:"teach", trg:"il laboratorio", src:"the laboratory", pos:"noun", gender:"m",
       note:"Masculine noun. Plural: i laboratori.\nAbbreviated colloquially as 'il lab.' 'Laboratorio di ricerca' = research lab.",
       example:"A: Il laboratorio e aperto ventiquattro ore su ventiquattro.\nB: I ricercatori lavorano a turni.",
       exampleSrc:"A: The laboratory is open twenty-four hours a day.\nB: The researchers work in shifts.",
       funFact:"Italy hosts major research laboratories including INFN (nuclear physics) under Gran Sasso mountain and the European Space Agency's ESRIN center near Rome. Gran Sasso is the world's largest underground physics lab."},

      {type:"teach", trg:"il ricercatore", src:"the researcher", pos:"noun", gender:"m",
       note:"Masculine noun. Feminine: la ricercatrice.\nPlural: i ricercatori / le ricercatrici.",
       example:"A: I ricercatori italiani sono apprezzati nel mondo.\nB: Molti pero lavorano all'estero.",
       exampleSrc:"A: Italian researchers are valued worldwide.\nB: Many however work abroad.",
       funFact:"Italy's 'fuga dei cervelli' (brain drain) is especially severe in science. Thousands of Italian researchers work at CERN, NASA, and top universities abroad because of limited positions and low salaries at home."},

      {type:"mc",
       q:"Dove lavorano normalmente i ricercatori scientifici?",
       opts:["In un laboratorio","In un tribunale","In un parlamento","In una borsa"],
       ans:"In un laboratorio",
       hint:"The place equipped with instruments and tools where scientists conduct experiments. Often found in universities or research centers."},

      {type:"teach", trg:"i dati", src:"the data", pos:"noun", gender:"m",
       note:"Masculine plural noun. Singular: il dato.\n'Raccogliere dati' = to collect data. 'Analisi dei dati' = data analysis.",
       example:"A: I dati confermano la nostra teoria.\nB: Abbiamo raccolto campioni per un anno.",
       exampleSrc:"A: The data confirm our theory.\nB: We collected samples for a year.",
       funFact:"In Italian, 'dati' is always plural (the singular 'dato' means a single piece of data). Unlike English, where 'data' is often treated as singular, Italian grammar always requires 'i dati sono' (the data are), never 'il dati e.'"},

      {type:"teach", trg:"il risultato", src:"the result", pos:"noun", gender:"m",
       note:"Masculine noun. Plural: i risultati.\n'Risultati promettenti' = promising results.",
       example:"A: I risultati della ricerca sono promettenti.\nB: Potremmo avere un vaccino entro l'anno.",
       exampleSrc:"A: The research results are promising.\nB: We could have a vaccine within the year.",
       funFact:"Italian scientific papers traditionally present 'risultati e discussione' (results and discussion) as separate sections. The word comes from 'risultare' (to result, to turn out), from Latin 'resultare' (to bounce back)."},

      {type:"fb",
       s:"I {1} dell'esperimento confermano l'ipotesi iniziale.",
       a:["risultati"],
       opts:["risultati","dati","brevetti","laboratori"],
       hint:"The outcomes or findings that emerge at the end of an experiment or study. What the experiment showed.",
       sSrc:"The {1} of the experiment confirm the initial hypothesis."},

      {type:"teach", trg:"l'etica", src:"the ethics", pos:"noun", gender:"f",
       note:"Feminine noun. 'Comitato etico' = ethics committee.\n'Etica della ricerca' = research ethics.",
       example:"A: L'etica deve guidare la ricerca scientifica.\nB: Non tutto cio che e possibile e giusto.",
       exampleSrc:"A: Ethics must guide scientific research.\nB: Not everything that is possible is right.",
       funFact:"Italy's National Bioethics Committee (Comitato Nazionale per la Bioetica) advises the government on sensitive issues like cloning, stem cells, and end-of-life care. It was established in 1990."},

      {type:"teach", trg:"la sperimentazione", src:"the experimentation / testing", pos:"noun", gender:"f",
       note:"Feminine noun. 'Sperimentazione clinica' = clinical trial.\n'Sperimentazione animale' = animal testing.",
       example:"A: La sperimentazione del farmaco durera due anni.\nB: Se i risultati sono positivi, sara approvato.",
       exampleSrc:"A: The drug trial will last two years.\nB: If the results are positive, it will be approved.",
       funFact:"Italy banned cosmetic testing on animals in line with EU regulations. The debate on 'sperimentazione animale' is intense, with strong animal rights movements alongside a robust pharmaceutical industry."},

      {type:"mc",
       q:"Che cos'e un comitato etico nella ricerca?",
       opts:["Un gruppo che finanzia gli esperimenti","Un organo che valuta se una ricerca rispetta principi morali","Un laboratorio specializzato","Un team di ricercatori senior"],
       ans:"Un organo che valuta se una ricerca rispetta principi morali",
       hint:"A body that reviews research to ensure it follows moral principles and does not harm participants. Every major institution has one."},

      {type:"match", pairs:[
        {trg:"progresso", src:"progress"},
        {trg:"innovazione", src:"innovation"},
        {trg:"laboratorio", src:"laboratory"},
        {trg:"risultato", src:"result"},
        {trg:"etica", src:"ethics"}
      ]},

      {type:"fb",
       s:"I {1} raccolti durante l'esperimento devono essere analizzati.",
       a:["dati"],
       opts:["dati","risultati","ricercatori","brevetti"],
       hint:"Raw information gathered through observation and measurement. Scientists collect these and then analyze them.",
       sSrc:"The {1} collected during the experiment must be analyzed."},

      {type:"mc",
       q:"Perche molti ricercatori italiani lavorano all'estero?",
       opts:["Perche la ricerca italiana e poco apprezzata","Perche preferiscono il clima di altri paesi","Per la scarsita di posizioni e stipendi bassi in Italia","Perche le universita italiane sono chiuse"],
       ans:"Per la scarsita di posizioni e stipendi bassi in Italia",
       hint:"Limited job openings and low pay push talented scientists to seek opportunities abroad. This phenomenon is called 'brain drain.'"}
    ]}
  ]
};

export default UNIT_27;
