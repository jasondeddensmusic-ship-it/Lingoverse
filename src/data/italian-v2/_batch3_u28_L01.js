// Batch 3 — Unit 28 Lesson (Literature: Criticism & Techniques)
const BATCH3_L_1 = {
  id:"itv2_u28l_b3_1", title:"Critica e tecniche narrative", icon:"✍️", xp:15, board:true,
  steps:[
    {type:"intro", title:"Critica e tecniche narrative",
     desc:"Deepen your literary vocabulary with terms for criticism, rhetorical devices, and advanced narrative techniques. Essential for discussing Italian literature at an academic level.",
     goals:["Describe literary criticism approaches","Identify rhetorical and narrative devices","Discuss themes and interpretation methods"]},

    {type:"teach", trg:"la critica", src:"the criticism / critical analysis", pos:"noun", gender:"f",
     note:"Feminine noun. 'Critica letteraria' = literary criticism.\n'Il critico' = the critic. 'Critica testuale' = textual criticism.",
     example:"A: La critica ha accolto il romanzo con entusiasmo.\nB: Tre recensioni positive in una settimana.",
     exampleSrc:"A: Critics received the novel with enthusiasm.\nB: Three positive reviews in one week.",
     funFact:"Italian literary criticism has a tradition stretching from Aristotle's 'Poetica' through the Renaissance theorists to Benedetto Croce's idealist aesthetics and Umberto Eco's semiotic analysis."},

    {type:"teach", trg:"l'ironia", src:"irony", pos:"noun", gender:"f",
     note:"Feminine noun. 'Ironia della sorte' = irony of fate.\n'Ironico/ironica' (adj) = ironic. 'Autoironia' = self-irony.",
     example:"A: L'ironia di Pirandello e sottile e amara.\nB: I suoi personaggi non capiscono mai la propria condizione.",
     exampleSrc:"A: Pirandello's irony is subtle and bitter.\nB: His characters never understand their own condition.",
     funFact:"Italian literature excels in irony, from Boccaccio's wry social commentary to Calvino's playful philosophical games. The Italian concept of 'autoironia' (self-irony) is considered a sign of intelligence and maturity."},

    {type:"teach", trg:"la similitudine", src:"the simile", pos:"noun", gender:"f",
     note:"Feminine noun. A comparison using 'come' (like/as).\nDifferent from metafora: similitudine is explicit, metafora is implicit.",
     example:"A: 'La vita e come un viaggio' e una similitudine.\nB: Se togli il 'come', diventa una metafora.",
     exampleSrc:"A: 'Life is like a journey' is a simile.\nB: If you remove 'like,' it becomes a metaphor.",
     funFact:"Dante uses elaborate similitudini throughout the Commedia, comparing hellish scenes to familiar Italian landscapes. His comparison of damned souls to autumn leaves falling is one of the most cited similes in Western literature."},

    {type:"teach", trg:"l'allegoria", src:"the allegory", pos:"noun", gender:"f",
     note:"Feminine noun. An extended metaphor where characters and events represent abstract ideas.\n'Lettura allegorica' = allegorical reading.",
     example:"A: La Divina Commedia e un'allegoria del cammino dell'anima.\nB: Ogni personaggio rappresenta un concetto morale.",
     exampleSrc:"A: The Divine Comedy is an allegory of the soul's journey.\nB: Every character represents a moral concept.",
     funFact:"Medieval Italian literature was steeped in allegory. Dante explicitly described four levels of meaning in texts: literal, allegorical, moral, and 'anagogical' (spiritual). This interpretive tradition shaped European literary criticism."},

    {type:"teach", trg:"il protagonista", src:"the protagonist", pos:"noun", gender:"m",
     note:"Masculine noun. Feminine: la protagonista.\n'Protagonista della storia' = protagonist of the story.",
     example:"A: Il protagonista del romanzo e un antieroe affascinante.\nB: Ha molti difetti ma conquista il lettore.",
     exampleSrc:"A: The protagonist of the novel is a fascinating antihero.\nB: He has many flaws but wins over the reader.",
     funFact:"From Greek 'protos' (first) + 'agonistes' (actor). Italian literature offers unforgettable protagonists: Renzo in 'I Promessi Sposi,' Zeno in Svevo's 'La coscienza di Zeno,' and the unnamed narrator in Ferrante's Neapolitan novels."},

    {type:"mc",
     q:"Qual e la differenza tra una similitudine e una metafora?",
     opts:["Non c'e nessuna differenza tecnica tra i due concetti","La similitudine usa 'come' per il confronto, la metafora no","La metafora e sempre piu lunga e complessa della similitudine","La similitudine si usa solo in poesia, la metafora solo in prosa"],
     ans:"La similitudine usa 'come' per il confronto, la metafora no",
     hint:"One makes the comparison explicit with 'c...' (like/as). The other states the comparison directly without the linking word."},

    {type:"teach", trg:"l'antagonista", src:"the antagonist", pos:"noun", gender:"m",
     note:"Masculine/feminine noun. The character who opposes the protagonist.\n'Forza antagonista' = opposing force.",
     example:"A: L'antagonista del romanzo e complesso quanto il protagonista.\nB: Non e semplicemente malvagio.",
     exampleSrc:"A: The novel's antagonist is as complex as the protagonist.\nB: He is not simply evil.",
     funFact:"Italian narratology distinguishes 'antagonista' from 'oppositore.' The antagonista is a specific character, while the oppositore can be a situation, society, or internal conflict. Modern Italian fiction often blurs this line."},

    {type:"teach", trg:"il flashback", src:"the flashback", pos:"noun", gender:"m",
     note:"Masculine noun. English loanword. A scene from the past inserted into the narrative.\nItalian alternative: 'l'analessi.'",
     example:"A: Il romanzo usa molti flashback per rivelare il passato del protagonista.\nB: Ogni capitolo alterna presente e ricordi.",
     exampleSrc:"A: The novel uses many flashbacks to reveal the protagonist's past.\nB: Every chapter alternates between present and memories.",
     funFact:"Italian narrative technique uses both 'flashback' (borrowed from English/cinema) and the more technical 'analessi' (from Greek). Similarly, 'flash-forward' coexists with 'prolessi.' Academic critics prefer the Greek-origin terms."},

    {type:"teach", trg:"il punto di vista", src:"the point of view", pos:"noun", gender:"m",
     note:"Masculine compound noun. The perspective from which a story is told.\n'Punto di vista onnisciente' = omniscient point of view.",
     example:"A: Cambiare il punto di vista trasforma completamente la storia.\nB: Lo stesso evento appare diverso da ogni angolazione.",
     exampleSrc:"A: Changing the point of view completely transforms the story.\nB: The same event appears different from each angle.",
     funFact:"Italo Calvino's 'Se una notte d'inverno un viaggiatore' famously experiments with point of view, using second person ('tu') to make the reader the protagonist. This metanarrative technique challenged all conventions."},

    {type:"fb",
     s:"La Divina Commedia e un'{1} del cammino dell'anima verso Dio.",
     a:["allegoria"],
     opts:["allegoria","ironia","similitudine","critica"],
     hint:"An extended metaphor where the entire story represents abstract ideas. Characters and events stand for moral or spiritual concepts.",
     sSrc:"The Divine Comedy is an {1} of the soul's journey toward God."},

    {type:"teach", trg:"il climax", src:"the climax", pos:"noun", gender:"m",
     note:"Masculine noun. Invariable. The point of highest tension in a narrative.\nItalian alternative: 'l'apice narrativo.'",
     example:"A: Il climax del romanzo arriva nell'ultimo capitolo.\nB: La tensione cresce fino a diventare insostenibile.",
     exampleSrc:"A: The climax of the novel arrives in the last chapter.\nB: The tension builds until it becomes unbearable.",
     funFact:"Italian opera is built around climactic moments ('acuti' in music). Verdi and Puccini were masters of building tension to an explosive climax. This dramatic tradition deeply influenced Italian narrative structure."},

    {type:"teach", trg:"l'incipit", src:"the opening / beginning", pos:"noun", gender:"m",
     note:"Masculine noun. Invariable. The first lines of a literary work.\nFrom Latin 'incipit' (it begins).",
     example:"A: L'incipit dei Promessi Sposi e famoso in tutta Italia.\nB: 'Quel ramo del lago di Como...' lo conoscono tutti.",
     exampleSrc:"A: The opening of The Betrothed is famous throughout Italy.\nB: 'That branch of Lake Como...' is known by everyone.",
     funFact:"Italians can often quote famous incipit by heart: Dante's 'Nel mezzo del cammin di nostra vita' and Manzoni's 'Quel ramo del lago di Como' are cultural touchstones. A great incipit is considered the mark of literary mastery."},

    {type:"teach", trg:"la suspense", src:"the suspense", pos:"noun", gender:"f",
     note:"Feminine noun. Invariable. Tension created by uncertainty about the outcome.\nAlso: 'la tensione narrativa.'",
     example:"A: L'autore mantiene la suspense fino all'ultima pagina.\nB: Non riesci a posare il libro.",
     exampleSrc:"A: The author maintains suspense until the last page.\nB: You cannot put the book down.",
     funFact:"Italian 'giallo' fiction perfected the art of suspense. Andrea Camilleri's Inspector Montalbano series sold over 30 million copies worldwide, combining Sicilian atmosphere with masterful suspense construction."},

    {type:"teach", trg:"il monologo interiore", src:"the interior monologue", pos:"noun", gender:"m",
     note:"Masculine compound noun. A narrative technique showing a character's thoughts.\n'Flusso di coscienza' = stream of consciousness.",
     example:"A: Svevo usa il monologo interiore per rivelare i pensieri di Zeno.\nB: Il lettore entra nella mente del personaggio.",
     exampleSrc:"A: Svevo uses interior monologue to reveal Zeno's thoughts.\nB: The reader enters the character's mind.",
     funFact:"Italo Svevo's 'La coscienza di Zeno' (1923) is a masterpiece of interior monologue. Svevo, from Trieste, was a friend of James Joyce, and both writers explored consciousness through innovative narrative techniques."},

    {type:"mc",
     q:"Come si chiama in italiano l'inizio di un'opera letteraria?",
     opts:["Il climax","L'incipit","Il flashback","L'epilogo"],
     ans:"L'incipit",
     hint:"From Latin 'it begins.' The famous first lines that set the tone for the entire work. Every Italian knows Dante's and Manzoni's."},

    {type:"match", pairs:[
      {trg:"ironia", src:"irony"},
      {trg:"allegoria", src:"allegory"},
      {trg:"protagonista", src:"protagonist"},
      {trg:"climax", src:"climax"},
      {trg:"incipit", src:"opening"}
    ]},

    {type:"fb",
     s:"L'autore cambia spesso il {1} di vista per mostrare la complessita della storia.",
     a:["punto"],
     opts:["punto","monologo","colpo","flusso"],
     hint:"The narrative perspective. The position from which the story is observed and told. Combined with 'di vista.'",
     sSrc:"The author often changes the {1} of view to show the story's complexity."},

    {type:"mc",
     q:"Chi scrisse 'La coscienza di Zeno,' un capolavoro del monologo interiore?",
     opts:["Pirandello","Calvino","Svevo","Moravia"],
     ans:"Svevo",
     hint:"This author from Trieste, a friend of James Joyce, explored consciousness through innovative narrative techniques in his most famous novel."}
  ,{type:"match",pairs:[{trg:"la critica",src:"the criticism / critical analysis"},{trg:"la similitudine",src:"the simile"},{trg:"il flashback",src:"the flashback"},{trg:"la suspense",src:"the suspense"},{trg:"il monologo interiore",src:"the interior monologue"}]},{type:"mc",q:"How do you say \"antagonist\" in Italian?",opts:["l'antagonista","la finestra","il tavolo","la bicicletta"],ans:"l'antagonista",hint:"Recall the Italian vocabulary word taught in this lesson."}]
};
export default BATCH3_L_1;
