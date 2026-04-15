// Unit 28 Expansion. Lesson 6: L'analisi del testo
const LESSON_6 = {
  id:"itv2_u28l6", title:"L'analisi del testo", icon:"🔍", xp:15, board:true,
  steps:[
    {type:"intro", title:"L'analisi del testo",
     desc:"Master vocabulary for literary analysis, textual interpretation, and critical reading. These terms are essential for discussing literature at an advanced academic level.",
     goals:["Describe literary techniques and devices","Analyze texts using appropriate critical vocabulary","Discuss interpretation and textual meaning"]},

    {type:"teach", trg:"l'allegoria", src:"the allegory", pos:"noun", gender:"f",
     note:"Feminine noun. Plural: le allegorie.\nA story with a hidden moral or political meaning.\n'Allegorico/a' (adj) = allegorical.",
     example:"A: La Divina Commedia e una grande allegoria del viaggio dell'anima.\nB: Ogni personaggio rappresenta un concetto morale.",
     exampleSrc:"A: The Divine Comedy is a great allegory of the soul's journey.\nB: Each character represents a moral concept.",
     funFact:"Italian literature is deeply allegorical. Dante's Commedia, Ariosto's Orlando Furioso, and Manzoni's Promessi Sposi all operate on multiple levels of meaning. Italian students learn to read 'oltre la lettera' (beyond the literal)."},

    {type:"teach", trg:"l'ironia", src:"the irony", pos:"noun", gender:"f",
     note:"Feminine noun. Plural: le ironie.\n'Ironia drammatica' = dramatic irony. 'Ironico/a' (adj) = ironic.",
     example:"A: L'ironia di Pirandello e sottile e amara.\nB: Ridi, ma poi ti accorgi della tristezza sotto.",
     exampleSrc:"A: Pirandello's irony is subtle and bitter.\nB: You laugh, but then you notice the sadness underneath.",
     funFact:"Italian has a rich tradition of 'ironia' and 'autoironia' (self-irony). Italians prize the ability to laugh at themselves. Pirandello's 'umorismo' (humor) essay distinguished between 'il comico' (making you laugh) and 'il sentimento del contrario' (the feeling of the opposite)."},

    {type:"teach", trg:"il punto di vista", src:"the point of view", pos:"noun", gender:"m",
     note:"Masculine compound noun. The perspective from which a story is told.\n'Punto di vista del narratore' = narrator's point of view.",
     example:"A: Il punto di vista cambia tre volte nel romanzo.\nB: Ogni personaggio racconta la stessa storia in modo diverso.",
     exampleSrc:"A: The point of view changes three times in the novel.\nB: Each character tells the same story differently.",
     funFact:"Pirandello's 'Cosi e (se vi pare)' (Right You Are, If You Think So) is the ultimate Italian exploration of multiple points of view. Each character insists on their version of truth, and the audience never learns the 'real' story."},

    {type:"teach", trg:"la similitudine", src:"the simile", pos:"noun", gender:"f",
     note:"Feminine noun. Plural: le similitudini.\nA comparison using 'come' (like/as). Distinct from 'metafora' (without 'come').",
     example:"A: 'Veloce come il vento' e una similitudine comune.\nB: La metafora direbbe semplicemente 'era il vento.'",
     exampleSrc:"A: 'Fast as the wind' is a common simile.\nB: A metaphor would simply say 'he was the wind.'",
     funFact:"Dante uses elaborate 'similitudini' throughout the Commedia, often drawn from nature and everyday life. His comparison of the souls in Limbo to leaves falling in autumn became one of the most imitated images in Western poetry."},

    {type:"teach", trg:"il climax", src:"the climax", pos:"noun", gender:"m",
     note:"Masculine noun. Invariable. The point of highest tension in a story.\nAlso called 'acme' or 'apice narrativo.'",
     example:"A: Il climax del romanzo arriva nell'ultimo capitolo.\nB: La tensione e insostenibile fino alla rivelazione finale.",
     exampleSrc:"A: The climax of the novel comes in the last chapter.\nB: The tension is unbearable until the final revelation.",
     funFact:"Italian literary analysis uses both the borrowed 'climax' and native terms like 'apice' (apex) and 'culmine' (culmination). The term also appears in rhetoric, where it describes a series of phrases building to a peak."},

    {type:"mc",
     q:"Qual e la differenza tra una similitudine e una metafora?",
     opts:["Sono la stessa cosa","La similitudine usa 'come' per confrontare, la metafora no","La metafora e piu lunga della similitudine","La similitudine si usa solo in poesia"],
     ans:"La similitudine usa 'come' per confrontare, la metafora no",
     hint:"One figure of speech makes a comparison using 'like' or 'as.' The other states directly that something IS something else, without a comparing word."},

    {type:"teach", trg:"il flashback", src:"the flashback", pos:"noun", gender:"m",
     note:"Masculine noun. Invariable. Borrowed from English.\nItalian equivalent: 'analessi.' A scene set in the past within a present narrative.",
     example:"A: Il flashback rivela il passato del protagonista.\nB: Capiamo finalmente le sue motivazioni.",
     exampleSrc:"A: The flashback reveals the protagonist's past.\nB: We finally understand his motivations.",
     funFact:"Italian literary criticism uses both 'flashback' and the formal term 'analessi' (from Greek). Its counterpart, 'flashforward' or 'prolessi,' shows events that have not yet happened. Both techniques are central to modern Italian fiction."},

    {type:"teach", trg:"il sottotesto", src:"the subtext", pos:"noun", gender:"m",
     note:"Masculine noun. The implicit meaning beneath the surface of a text.\n'Leggere il sottotesto' = to read the subtext.",
     example:"A: Il sottotesto del romanzo e una critica alla societa borghese.\nB: Non lo dice mai esplicitamente, ma il messaggio e chiaro.",
     exampleSrc:"A: The subtext of the novel is a critique of bourgeois society.\nB: It never says so explicitly, but the message is clear.",
     funFact:"Italian literature excels at 'non detto' (the unsaid). Natalia Ginzburg's spare prose and Moravia's apparently simple stories both carry powerful subtexts about Italian society, family dynamics, and moral compromise."},

    {type:"fb",
     s:"La Divina Commedia e una grande {1}: ogni elemento ha un significato nascosto.",
     a:["allegoria"],
     opts:["allegoria","ironia","similitudine","biografia"],
     hint:"A narrative that works on two levels: the literal story and a hidden moral or symbolic meaning beneath the surface.",
     sSrc:"The Divine Comedy is a great {1}: every element has a hidden meaning."},

    {type:"teach", trg:"l'interpretazione", src:"the interpretation", pos:"noun", gender:"f",
     note:"Feminine noun. Plural: le interpretazioni.\n'Interpretare' (verb) = to interpret. 'Interpretazione critica' = critical interpretation.",
     example:"A: L'interpretazione di questo passo e controversa.\nB: Ogni critico offre una lettura diversa.",
     exampleSrc:"A: The interpretation of this passage is controversial.\nB: Every critic offers a different reading.",
     funFact:"Italian literary criticism values 'la molteplicita delle letture' (multiplicity of readings). Umberto Eco's theoretical work on 'opera aperta' (open work) argues that great literature invites infinite interpretations rather than imposing a single meaning."},

    {type:"teach", trg:"la critica letteraria", src:"the literary criticism", pos:"noun", gender:"f",
     note:"Feminine compound noun. The academic study and evaluation of literature.\n'Critico letterario' = literary critic.",
     example:"A: La critica letteraria italiana ha una lunga tradizione.\nB: Da Croce a Eco, ha prodotto pensatori influenti.",
     exampleSrc:"A: Italian literary criticism has a long tradition.\nB: From Croce to Eco, it has produced influential thinkers.",
     funFact:"Benedetto Croce dominated Italian literary criticism for decades with his 'estetica' (aesthetics) philosophy. His approach, judging literature by intuition and artistic beauty rather than historical context, shaped how generations of Italians studied literature."},

    {type:"mc",
     q:"Che cos'e il sottotesto di un romanzo?",
     opts:["Le note a pie di pagina","Il significato implicito che sta sotto la superficie della narrazione","Il riassunto del libro","Il titolo alternativo"],
     ans:"Il significato implicito che sta sotto la superficie della narrazione",
     hint:"What the author communicates without stating it directly. The hidden layer of meaning beneath the literal events of the story."},

    {type:"match", pairs:[
      {trg:"allegoria", src:"allegory"},
      {trg:"ironia", src:"irony"},
      {trg:"similitudine", src:"simile"},
      {trg:"climax", src:"climax"},
      {trg:"sottotesto", src:"subtext"}
    ]},

    {type:"fb",
     s:"Ogni critico offre un'{1} diversa dello stesso romanzo.",
     a:["interpretazione"],
     opts:["interpretazione","allegoria","similitudine","ironia"],
     hint:"The act of explaining what a text means. Different readers may arrive at different conclusions about the same work.",
     sSrc:"Every critic offers a different {1} of the same novel."},

    {type:"mc",
     q:"Che cos'e l'opera aperta secondo Umberto Eco?",
     opts:["Un libro con il finale aperto","Un'opera che invita interpretazioni infinite da parte del lettore","Un testo non finito dall'autore","Un romanzo scritto a piu mani"],
     ans:"Un'opera che invita interpretazioni infinite da parte del lettore",
     hint:"Eco's theory argues that great literature does not impose a single fixed meaning. Instead, it remains open to multiple readings and reinterpretations."}
  ]
};
export default LESSON_6;
