// Batch 7 — Unit 11 extra lesson. Il passato: Childhood Memories
const BATCH7_L1 = {id:"itv2_u11l_b7_1", title:"Ricordi d'infanzia", icon:"\u{1F9F8}", xp:15, board:true, steps:[
{type:"intro", title:"Ricordi d'infanzia",
 desc:"Talk about childhood memories using the past tense. Learn vocabulary for toys, games, and school memories.",
 goals:["Describe childhood activities in the past","Name common toys and games","Share memories using past tense verbs"]},

{type:"teach", trg:"il giocattolo", src:"the toy", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i giocattoli.\nFrom 'giocare' (to play).",
 example:"A: Qual era il tuo giocattolo preferito?\nB: Un orsetto di peluche.",
 exampleSrc:"A: What was your favorite toy?\nB: A stuffed teddy bear.",
 funFact:"Italy is famous for toy craftsmanship. Pinocchio, the world's most famous wooden toy, was created by Italian author Carlo Collodi in 1883."},

{type:"teach", trg:"la bambola", src:"the doll", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le bambole.\nDiminutive of 'bimba' (little girl).",
 example:"A: Da bambina giocavo con le bambole.\nB: Anch'io, ne avevo tante.",
 exampleSrc:"A: As a child I used to play with dolls.\nB: Me too, I had many.",
 funFact:"Italian porcelain dolls from Naples and Venice were prized across Europe for centuries. Today, 'bambola' is also slang for a very attractive woman."},

{type:"teach", trg:"nascondino", src:"hide and seek", pos:"noun", gender:"m",
 note:"Masculine noun. From 'nascondere' (to hide).\n'Giocare a nascondino' = to play hide and seek.",
 example:"A: Da bambini giocavamo a nascondino.\nB: Era il mio gioco preferito!",
 exampleSrc:"A: As children we played hide and seek.\nB: It was my favorite game!",
 funFact:"Italian children count to twenty during nascondino, shouting 'Chi non si e nascosto, peggio per lui!' (Whoever has not hidden, too bad for them!) before seeking."},

{type:"teach", trg:"l'altalena", src:"the swing", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le altalene.\n'Andare sull'altalena' = to go on the swing.",
 example:"A: Mi piaceva tanto l'altalena.\nB: A tutti i bambini piace!",
 exampleSrc:"A: I loved the swing so much.\nB: All children love it!",
 funFact:"'Altalena' comes from the Latin 'tollere' (to lift). The word literally captures the rising motion. Italian playgrounds (parchi giochi) always have altalene."},

{type:"teach", trg:"lo scivolo", src:"the slide", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: gli scivoli.\nFrom 'scivolare' (to slide/slip).",
 example:"A: Lo scivolo era troppo alto per me.\nB: Avevi paura?",
 exampleSrc:"A: The slide was too tall for me.\nB: Were you afraid?",
 funFact:"Italian waterparks use 'scivolo d'acqua' (water slide). The verb 'scivolare' means to slip, giving us both the playground slide and the warning 'pavimento scivoloso' (slippery floor)."},

{type:"teach", trg:"la favola", src:"the fairy tale / fable", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le favole.\n'Raccontare una favola' = to tell a fairy tale.",
 example:"A: La nonna ci raccontava le favole.\nB: Quella di Pinocchio era la mia preferita.",
 exampleSrc:"A: Grandma used to tell us fairy tales.\nB: Pinocchio was my favorite.",
 funFact:"Gianni Rodari, an Italian, won the Hans Christian Andersen Award for children's literature. His 'Favole al telefono' (Phone Fables) is a classic of Italian children's literature."},

{type:"teach", trg:"il disegno", src:"the drawing", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i disegni.\n'Disegnare' = to draw. 'Disegno animato' = cartoon.",
 example:"A: Da bambino facevo tanti disegni.\nB: Li hai ancora?",
 exampleSrc:"A: As a child I made many drawings.\nB: Do you still have them?",
 funFact:"'Disegno' means both drawing and design/plan. 'Disegno di legge' is a law proposal. Leonardo da Vinci's drawings are among the most famous 'disegni' in history."},

{type:"teach", trg:"il compagno di classe", src:"the classmate", pos:"noun", gender:"m",
 note:"Masculine noun. Feminine: la compagna di classe.\nPlural: i compagni di classe.",
 example:"A: Ti ricordi dei tuoi compagni di classe?\nB: Si, siamo ancora amici.",
 exampleSrc:"A: Do you remember your classmates?\nB: Yes, we are still friends.",
 funFact:"Italian children stay with the same class group for all five years of elementary school. 'Compagni di classe' often become lifelong friends because of this system."},

{type:"teach", trg:"la merenda", src:"the snack (afternoon)", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le merende.\nThe afternoon snack, typically around 4 PM.",
 example:"A: Cosa mangiavi per merenda?\nB: Pane e Nutella!",
 exampleSrc:"A: What did you eat for your snack?\nB: Bread and Nutella!",
 funFact:"'La merenda' is a sacred Italian childhood ritual. Pane e Nutella (bread and Nutella) is the most iconic merenda. Nutella itself was invented in Piedmont by Ferrero."},

{type:"teach", trg:"il quaderno", src:"the notebook / exercise book", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i quaderni.\nFrom 'quattro' (four), referring to folded sheets.",
 example:"A: Dov'e il mio quaderno di matematica?\nB: Nello zaino, in fondo.",
 exampleSrc:"A: Where is my math notebook?\nB: In the backpack, at the bottom.",
 funFact:"Italian school notebooks come in two types: 'a righe' (lined) for writing and 'a quadretti' (squared) for math. Students must use specific ones for each subject."},

{type:"teach", trg:"lo zaino", src:"the backpack", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: gli zaini.\nUsed for school, hiking, and travel.",
 example:"A: Lo zaino e troppo pesante!\nB: Hai troppi libri.",
 exampleSrc:"A: The backpack is too heavy!\nB: You have too many books.",
 funFact:"Italian school backpacks are notoriously heavy because students carry many textbooks daily. It has become a national debate, with some schools now using tablets."},

{type:"teach", trg:"il ricordo", src:"the memory / souvenir", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i ricordi.\n'Ricordare' = to remember.",
 example:"A: Ho tanti bei ricordi dell'infanzia.\nB: I ricordi sono il nostro tesoro.",
 exampleSrc:"A: I have many beautiful childhood memories.\nB: Memories are our treasure.",
 funFact:"'Ricordo' means both memory and souvenir. At tourist shops, you buy 'ricordi.' The double meaning is poetic: you bring home both a physical object and a memory."},

{type:"teach", trg:"la vacanza estiva", src:"summer holiday", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le vacanze estive.\n'Le grandi vacanze' = the summer holidays.",
 example:"A: Dove andavi in vacanza estiva?\nB: Sempre al mare, in Puglia.",
 exampleSrc:"A: Where did you go on summer holiday?\nB: Always to the sea, in Puglia.",
 funFact:"Italian summer holidays last about three months (June to mid-September). August is sacred: most businesses close for 'Ferragosto' (August 15) and the surrounding weeks."},

{type:"mc", q:"Che cosa giocavano i bambini italiani nel cortile?",
 opts:["nascondino","disegno","merenda","quaderno"],
 ans:"nascondino",
 hint:"A game where one child counts while the others hide. Then you seek them out."},

{type:"fb", s:"Da bambina giocavo con le {1}.", a:["bambole"],
 opts:["bambole","favole","merende","altalene"],
 hint:"Toy figures, usually shaped like people, that children play with.",
 sSrc:"As a child I used to play with {1}."},

{type:"match", pairs:[
 {trg:"il giocattolo", src:"toy"},
 {trg:"la bambola", src:"doll"},
 {trg:"l'altalena", src:"swing"},
 {trg:"lo scivolo", src:"slide"}
]},

{type:"mc", q:"Che cos'e la merenda in Italia?",
 opts:["An afternoon snack around 4 PM","A type of pasta","A school exam","A birthday party"],
 ans:"An afternoon snack around 4 PM",
 hint:"Between lunch and dinner. Pane e Nutella is the most iconic version."},

{type:"fb", s:"Lo {1} e troppo pesante, hai troppi libri!", a:["zaino"],
 opts:["zaino","quaderno","disegno","scivolo"],
 hint:"The bag students carry on their backs to school.",
 sSrc:"The {1} is too heavy, you have too many books!"},

{type:"mc", q:"Chi ha scritto 'Pinocchio'?",
 opts:["Carlo Collodi","Gianni Rodari","Dante Alighieri","Italo Calvino"],
 ans:"Carlo Collodi",
 hint:"An Italian author from the 19th century. His wooden puppet became world-famous."},

{type:"fb", s:"Ho tanti bei {1} dell'infanzia.", a:["ricordi"],
 opts:["ricordi","giocattoli","quaderni","favole"],
 hint:"Things you remember from the past. Also the word for souvenirs.",
 sSrc:"I have many beautiful {1} of childhood."},

{type:"match", pairs:[
 {trg:"la favola", src:"fairy tale"},
 {trg:"il quaderno", src:"notebook"},
 {trg:"il ricordo", src:"memory"},
 {trg:"la merenda", src:"snack"}
]}
]};
export default BATCH7_L1;
