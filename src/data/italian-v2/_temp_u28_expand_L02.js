// Unit 28 Expansion. Lesson 5: Grandi autori italiani
const LESSON_5 = {
  id:"itv2_u28l5", title:"Grandi autori italiani", icon:"✒️", xp:15, board:true,
  steps:[
    {type:"intro", title:"Grandi autori italiani",
     desc:"Learn to discuss the lives and works of major Italian authors. Build vocabulary for biographical and literary discussion at an advanced level.",
     goals:["Discuss famous Italian writers and their contributions","Describe the themes and styles of major works","Express personal literary preferences with sophistication"]},

    {type:"teach", trg:"il premio Nobel", src:"the Nobel Prize", pos:"noun", gender:"m",
     note:"Masculine compound noun. 'Vincere il premio Nobel' = to win the Nobel Prize.\n'Premiato/a' = awarded, prize-winning.",
     example:"A: L'Italia ha sei premi Nobel per la letteratura.\nB: L'ultimo e stato Dario Fo nel 1997.",
     exampleSrc:"A: Italy has six Nobel Prizes for Literature.\nB: The last one was Dario Fo in 1997.",
     funFact:"Italy's literary Nobel laureates span diverse styles: Carducci (classical poetry), Deledda (Sardinian realism), Pirandello (experimental drama), Quasimodo (hermetic poetry), Montale (modernist verse), and Fo (political satire). This range reflects Italy's literary breadth."},

    {type:"teach", trg:"il capolavoro", src:"the masterpiece", pos:"noun", gender:"m",
     note:"Masculine noun. Plural: i capolavori.\nThe greatest work of an author. Literally 'head-work.'",
     example:"A: Qual e il capolavoro di Italo Calvino?\nB: Molti dicono 'Se una notte d'inverno un viaggiatore.'",
     exampleSrc:"A: What is Italo Calvino's masterpiece?\nB: Many say 'If on a winter's night a traveler.'",
     funFact:"Identifying an author's 'capolavoro' is a favorite pastime of Italian literary critics. Heated debates about whether Leopardi's masterpiece is 'L'infinito' or 'A Silvia' can fill entire conference sessions."},

    {type:"teach", trg:"la biografia", src:"the biography", pos:"noun", gender:"f",
     note:"Feminine noun. Plural: le biografie.\n'Autobiografia' = autobiography. 'Biografo/a' = biographer.",
     example:"A: Sto leggendo la biografia di Primo Levi.\nB: La sua vita e straordinaria quanto i suoi libri.",
     exampleSrc:"A: I am reading the biography of Primo Levi.\nB: His life is as extraordinary as his books.",
     funFact:"Primo Levi's 'Se questo e un uomo' (If This Is a Man), his memoir of Auschwitz, was initially rejected by Einaudi. Published by a small press in 1947, it became one of the most important Holocaust testimonies ever written."},

    {type:"teach", trg:"l'opera omnia", src:"the complete works", pos:"noun", gender:"f",
     note:"Feminine noun (invariable). Latin phrase used in Italian.\nThe entirety of an author's published writings.",
     example:"A: Einaudi ha pubblicato l'opera omnia di Calvino.\nB: Sono tre volumi nella collana 'I Meridiani.'",
     exampleSrc:"A: Einaudi published Calvino's complete works.\nB: They are three volumes in the 'I Meridiani' series.",
     funFact:"Mondadori's 'I Meridiani' series is Italy's equivalent of France's 'Bibliotheque de la Pleiade': luxury editions of complete works on Bible paper. Owning a Meridiano is a mark of literary devotion."},

    {type:"teach", trg:"il manoscritto", src:"the manuscript", pos:"noun", gender:"m",
     note:"Masculine noun. Plural: i manoscritti.\nA handwritten text. 'Manoscritto originale' = original manuscript.",
     example:"A: Il manoscritto originale della Divina Commedia non esiste piu.\nB: Sopravvivono solo copie medievali.",
     exampleSrc:"A: The original manuscript of the Divine Comedy no longer exists.\nB: Only medieval copies survive.",
     funFact:"Italy's national libraries in Florence and Rome house thousands of precious manuscripts. The Vatican Library alone contains over 80,000 manuscripts. 'Manoscritto' literally means 'written by hand' (mano + scritto)."},

    {type:"mc",
     q:"Quanti premi Nobel per la letteratura ha vinto l'Italia?",
     opts:["Sei","Dieci","Due","Tre"],
     ans:"Sei",
     hint:"Italy ranks fourth globally for this prize. The laureates range from classical poets to experimental playwrights, spanning over a century."},

    {type:"teach", trg:"la prosa", src:"the prose", pos:"noun", gender:"f",
     note:"Feminine noun. Writing that is not poetry.\n'Prosa poetica' = poetic prose. Opposite: 'la poesia' (verse).",
     example:"A: La prosa di Elena Ferrante e diretta e potente.\nB: I suoi romanzi napoletani hanno conquistato il mondo.",
     exampleSrc:"A: Elena Ferrante's prose is direct and powerful.\nB: Her Neapolitan novels have conquered the world.",
     funFact:"Elena Ferrante writes under a pseudonym and has never revealed her identity, despite global fame. The mystery of her identity has become a literary phenomenon in itself, with journalists and academics trying to unmask her."},

    {type:"teach", trg:"lo stile", src:"the style", pos:"noun", gender:"m",
     note:"Masculine noun. Plural: gli stili.\n'Stile narrativo' = narrative style. 'Stile elevato/colloquiale' = elevated/colloquial style.",
     example:"A: Lo stile di Calvino e leggero ma profondo.\nB: Riesce a essere complesso con parole semplici.",
     exampleSrc:"A: Calvino's style is light but deep.\nB: He manages to be complex with simple words.",
     funFact:"Italian literary criticism distinguishes 'stile alto' (high style), 'stile medio' (middle style), and 'stile basso' (low style), a classification going back to Dante himself. These categories still influence how Italian authors are evaluated."},

    {type:"fb",
     s:"Sto leggendo la {1} di Primo Levi: la sua vita e stata straordinaria.",
     a:["biografia"],
     opts:["biografia","prosa","citazione","narrativa"],
     hint:"The story of someone's life written by another person. A detailed account of a real individual's experiences.",
     sSrc:"I am reading the {1} of Primo Levi: his life was extraordinary."},

    {type:"teach", trg:"l'influenza letteraria", src:"the literary influence", pos:"noun", gender:"f",
     note:"Feminine compound noun. How one writer affects another.\n'Influenzare' = to influence. 'Essere influenzato da' = to be influenced by.",
     example:"A: L'influenza di Dante sulla letteratura mondiale e immensa.\nB: Ha ispirato scrittori di ogni epoca e paese.",
     exampleSrc:"A: Dante's influence on world literature is immense.\nB: He inspired writers of every era and country.",
     funFact:"Dante's influence extends far beyond literature. T.S. Eliot, Borges, and Beckett all drew deeply from the Commedia. The concept of a structured journey through levels of spiritual meaning has shaped Western storytelling for seven centuries."},

    {type:"teach", trg:"il premio letterario", src:"the literary prize", pos:"noun", gender:"m",
     note:"Masculine compound noun. Plural: i premi letterari.\n'Premio Strega' = Italy's most prestigious literary prize.",
     example:"A: Il Premio Strega e il piu importante premio letterario italiano.\nB: Viene assegnato ogni anno a luglio.",
     exampleSrc:"A: The Strega Prize is the most important Italian literary prize.\nB: It is awarded every year in July.",
     funFact:"The Premio Strega, awarded since 1947, takes its name from 'Strega' liqueur, whose manufacturer sponsors it. Winning the Strega guarantees bestseller status. Past winners include Moravia, Eco, Ferrante, and Starnone."},

    {type:"mc",
     q:"Chi e Elena Ferrante?",
     opts:["Una giornalista famosa per le sue inchieste","Un'autrice di bestseller che scrive sotto pseudonimo e non ha mai rivelato la sua identita","Una poetessa ermetica del Novecento","La fondatrice del neorealismo letterario"],
     ans:"Un'autrice di bestseller che scrive sotto pseudonimo e non ha mai rivelato la sua identita",
     hint:"This globally famous author of Neapolitan novels has never shown her face. Her true identity remains one of contemporary literature's greatest mysteries."},

    {type:"match", pairs:[
      {trg:"capolavoro", src:"masterpiece"},
      {trg:"biografia", src:"biography"},
      {trg:"manoscritto", src:"manuscript"},
      {trg:"prosa", src:"prose"},
      {trg:"premio letterario", src:"literary prize"}
    ]},

    {type:"fb",
     s:"Lo {1} narrativo di Calvino e unico: leggero, ironico e profondamente intelligente.",
     a:["stile"],
     opts:["stile","genere","tema","verso"],
     hint:"The distinctive way an author writes. The combination of language, tone, and structure that makes their work recognizable.",
     sSrc:"Calvino's narrative {1} is unique: light, ironic, and deeply intelligent."},

    {type:"mc",
     q:"Come si chiama il piu prestigioso premio letterario italiano?",
     opts:["Il Premio Bancarella","Il Premio Campiello","Il Premio Strega","Il Premio Viareggio"],
     ans:"Il Premio Strega",
     hint:"Named after a famous Italian liqueur that sponsors it. Awarded in July since 1947, winning guarantees bestseller status."}
  ]
};
export default LESSON_5;
