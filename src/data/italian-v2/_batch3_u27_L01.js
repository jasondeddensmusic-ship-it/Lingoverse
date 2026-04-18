// Batch 3 — Unit 27 Lesson (Science: Lab & Chemistry)
const BATCH3_L_1 = {
  id:"itv2_u27l_b3_1", title:"Il laboratorio e la chimica", icon:"⚗️", xp:15, board:true,
  steps:[
    {type:"intro", title:"Il laboratorio e la chimica",
     desc:"Master laboratory vocabulary and chemistry terminology. Learn the language Italian scientists use to describe materials, reactions, and experimental procedures.",
     goals:["Name laboratory equipment and procedures","Describe chemical reactions and materials","Discuss scientific measurements and accuracy"]},

    {type:"teach", trg:"il microscopio", src:"the microscope", pos:"noun", gender:"m",
     note:"Masculine noun. Plural: i microscopi.\n'Microscopio elettronico' = electron microscope.",
     example:"A: Il microscopio ha rivelato strutture invisibili a occhio nudo.\nB: La risoluzione di questo modello e incredibile.",
     exampleSrc:"A: The microscope revealed structures invisible to the naked eye.\nB: The resolution of this model is incredible.",
     funFact:"Marcello Malpighi, an Italian biologist from Bologna, was the first to use a microscope for systematic biological research in the 1660s. He discovered capillaries, completing Harvey's theory of blood circulation."},

    {type:"teach", trg:"la reazione", src:"the reaction", pos:"noun", gender:"f",
     note:"Feminine noun. Plural: le reazioni.\n'Reazione chimica' = chemical reaction. Also means response/reaction in general.",
     example:"A: La reazione chimica ha prodotto un gas inaspettato.\nB: Dobbiamo ripetere l'esperimento con maggiore cautela.",
     exampleSrc:"A: The chemical reaction produced an unexpected gas.\nB: We must repeat the experiment with greater caution.",
     funFact:"Amedeo Avogadro's law (1811), formulated in Turin, describes gas behavior during reactions. His work on molecular theory was ignored for 50 years before Stanislao Cannizzaro championed it at the 1860 Karlsruhe Congress."},

    {type:"teach", trg:"la sostanza", src:"the substance", pos:"noun", gender:"f",
     note:"Feminine noun. Plural: le sostanze.\n'Sostanza chimica' = chemical substance. 'Sostanza tossica' = toxic substance.",
     example:"A: Questa sostanza e altamente infiammabile.\nB: Va conservata in un contenitore apposito.",
     exampleSrc:"A: This substance is highly flammable.\nB: It must be stored in a special container.",
     funFact:"From Latin 'substantia' (essence, what stands under). In Italian, 'in sostanza' also means 'in essence' or 'basically,' connecting the chemical meaning of fundamental matter to everyday abstract use."},

    {type:"teach", trg:"la formula", src:"the formula", pos:"noun", gender:"f",
     note:"Feminine noun. Plural: le formule.\n'Formula chimica' = chemical formula. 'Formula matematica' = mathematical formula.",
     example:"A: La formula dell'acqua e H2O.\nB: Due atomi di idrogeno e uno di ossigeno.",
     exampleSrc:"A: The formula for water is H2O.\nB: Two hydrogen atoms and one oxygen atom.",
     funFact:"Italian chemists contributed fundamental formulas to science. Cannizzaro's reaction, Avogadro's number, and Natta's polymerization (Nobel Prize 1963) all bear Italian names in chemistry textbooks worldwide."},

    {type:"teach", trg:"il campione", src:"the sample / specimen", pos:"noun", gender:"m",
     note:"Masculine noun. Plural: i campioni.\nIn science: a sample for analysis. Also means 'champion' in sports.",
     example:"A: Abbiamo analizzato il campione di sangue.\nB: I risultati saranno pronti domani.",
     exampleSrc:"A: We analyzed the blood sample.\nB: The results will be ready tomorrow.",
     funFact:"'Campione' has three distinct meanings in Italian: sample (science), champion (sports), and sample/free item (commerce). All derive from the same Latin root 'campus' (field), through different metaphorical extensions."},

    {type:"mc",
     q:"Chi fu il primo scienziato a usare sistematicamente il microscopio per la ricerca biologica?",
     opts:["Galileo Galilei","Marcello Malpighi","Leonardo da Vinci","Lazzaro Spallanzani"],
     ans:"Marcello Malpighi",
     hint:"This Bolognese scientist discovered capillaries in the 1660s, completing our understanding of blood circulation."},

    {type:"teach", trg:"la variabile", src:"the variable", pos:"noun", gender:"f",
     note:"Feminine noun. A factor that can change in an experiment.\n'Variabile indipendente/dipendente' = independent/dependent variable.",
     example:"A: Bisogna controllare tutte le variabili dell'esperimento.\nB: Altrimenti i risultati non saranno affidabili.",
     exampleSrc:"A: All the variables of the experiment must be controlled.\nB: Otherwise the results will not be reliable.",
     funFact:"Galileo was among the first to systematically isolate variables in experiments. His approach of changing one factor at a time while keeping others constant became the foundation of the modern scientific method."},

    {type:"teach", trg:"il composto", src:"the compound", pos:"noun", gender:"m",
     note:"Masculine noun. A substance made of two or more elements.\n'Composto chimico' = chemical compound. 'Composto organico' = organic compound.",
     example:"A: L'acqua e un composto di idrogeno e ossigeno.\nB: E il composto piu abbondante sulla Terra.",
     exampleSrc:"A: Water is a compound of hydrogen and oxygen.\nB: It is the most abundant compound on Earth.",
     funFact:"Giulio Natta won the 1963 Nobel Prize in Chemistry for discovering a way to create polypropylene, a compound now used in everything from packaging to car bumpers. His research at the Politecnico di Milano changed the plastics industry forever."},

    {type:"teach", trg:"la provetta", src:"the test tube", pos:"noun", gender:"f",
     note:"Feminine noun. Plural: le provette.\nA glass tube used in laboratories. 'Fecondazione in provetta' = in vitro fertilization.",
     example:"A: Ha mescolato i due liquidi nella provetta.\nB: La soluzione e diventata blu immediatamente.",
     exampleSrc:"A: She mixed the two liquids in the test tube.\nB: The solution turned blue immediately.",
     funFact:"'Provetta' is a diminutive of 'prova' (test). The famous phrase 'bambino in provetta' (test-tube baby) became common in Italian after the first IVF birth in 1978, though the correct medical term is 'fecondazione in vitro.'"},

    {type:"fb",
     s:"La {1} chimica tra acido e base ha prodotto sale e acqua.",
     a:["reazione"],
     opts:["reazione","formula","sostanza","variabile"],
     hint:"When two or more substances interact and transform into new ones. A chemical process that creates different products.",
     sSrc:"The chemical {1} between acid and base produced salt and water."},

    {type:"teach", trg:"il fenomeno", src:"the phenomenon", pos:"noun", gender:"m",
     note:"Masculine noun. Plural: i fenomeni.\n'Fenomeno naturale' = natural phenomenon. 'Fenomeno sociale' = social phenomenon.",
     example:"A: Il riscaldamento globale e un fenomeno preoccupante.\nB: Le sue cause sono ormai ben documentate.",
     exampleSrc:"A: Global warming is a worrying phenomenon.\nB: Its causes are now well documented.",
     funFact:"From Greek 'phainomenon' (that which appears). Galileo insisted that science must study 'fenomeni' through observation and measurement, not just through philosophical reasoning. This empirical approach revolutionized knowledge."},

    {type:"teach", trg:"la precisione", src:"the precision / accuracy", pos:"noun", gender:"f",
     note:"Feminine noun. 'Con precisione' = with precision.\n'Strumento di precisione' = precision instrument.",
     example:"A: La precisione delle misurazioni e fondamentale.\nB: Un errore minimo puo invalidare l'intero esperimento.",
     exampleSrc:"A: The precision of measurements is fundamental.\nB: A small error can invalidate the entire experiment.",
     funFact:"Italian craftsmanship is famous for precision, from Ferrari engines to surgical instruments. The word 'precisione' comes from Latin 'praecidere' (to cut short, to cut precisely), linking accuracy to the image of a clean cut."},

    {type:"teach", trg:"il reagente", src:"the reagent", pos:"noun", gender:"m",
     note:"Masculine noun. Plural: i reagenti.\nA substance used in a chemical reaction to detect or produce another substance.",
     example:"A: Il reagente ha cambiato colore, indicando la presenza di ferro.\nB: Questo test e molto sensibile.",
     exampleSrc:"A: The reagent changed color, indicating the presence of iron.\nB: This test is very sensitive.",
     funFact:"Analytical chemistry has a strong Italian tradition. Luigi Galvani discovered bioelectricity, Alessandro Volta invented the battery (originally an electrochemical reagent setup), and Ascanio Sobrero synthesized nitroglycerin in Turin in 1847."},

    {type:"teach", trg:"l'analisi", src:"the analysis", pos:"noun", gender:"f",
     note:"Feminine noun. Invariable plural: le analisi.\n'Analisi del sangue' = blood test. 'Analisi chimica' = chemical analysis.",
     example:"A: L'analisi del campione ha confermato la contaminazione.\nB: I livelli di piombo sono troppo alti.",
     exampleSrc:"A: The analysis of the sample confirmed contamination.\nB: Lead levels are too high.",
     funFact:"Like 'ipotesi,' 'analisi' belongs to the group of Greek-origin nouns ending in '-si' that never change in the plural: l'analisi, le analisi. This pattern includes crisi, tesi, diagnosi, and sintesi."},

    {type:"mc",
     q:"Che cos'e una variabile in un esperimento scientifico?",
     opts:["Un errore nel procedimento sperimentale che deve essere corretto","Un fattore che puo cambiare e che viene controllato o misurato","Il risultato finale dell'esperimento da pubblicare","Uno strumento di laboratorio per le misurazioni chimiche"],
     ans:"Un fattore che puo cambiare e che viene controllato o misurato",
     hint:"A factor that scientists change, control, or measure. Experiments involve manipulating one while keeping others constant."},

    {type:"match", pairs:[
      {trg:"microscopio", src:"microscope"},
      {trg:"provetta", src:"test tube"},
      {trg:"composto", src:"compound"},
      {trg:"reagente", src:"reagent"},
      {trg:"analisi", src:"analysis"}
    ]},

    {type:"fb",
     s:"L'{1} del campione ha rivelato tracce di mercurio nell'acqua.",
     a:["analisi"],
     opts:["analisi","formula","reazione","fenomeno"],
     hint:"A detailed examination of a sample to determine its composition. What scientists do with samples in the laboratory.",
     sSrc:"The {1} of the sample revealed traces of mercury in the water."},

    {type:"mc",
     q:"Perche e importante controllare tutte le variabili di un esperimento?",
     opts:["Per rendere l'esperimento piu lungo e dettagliato","Per garantire che i risultati siano affidabili e replicabili","Per usare piu reagenti possibili nel processo","Per pubblicare il lavoro su una rivista internazionale"],
     ans:"Per garantire che i risultati siano affidabili e replicabili",
     hint:"If uncontrolled factors interfere, you cannot be sure what caused the result. Reliability and reproducibility depend on this."}
  ,{type:"match",pairs:[{trg:"la sostanza",src:"the substance"},{trg:"la formula",src:"the formula"},{trg:"il campione",src:"the sample / specimen"},{trg:"la variabile",src:"the variable"},{trg:"il fenomeno",src:"the phenomenon"},{trg:"la precisione",src:"the precision / accuracy"}]}]
};
export default BATCH3_L_1;
