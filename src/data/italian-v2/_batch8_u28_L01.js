// Batch 8 — Unit 28 extra lesson. Literature: Narrative Techniques & Genres
const BATCH8_L1 = {id:"itv2_u28l_b8_1", title:"Generi e tecniche", icon:"📖", xp:15, board:true, steps:[
{type:"intro", title:"Generi e tecniche",
 desc:"Learn vocabulary for literary genres, narrative techniques, and discussing books in Italian.",
 goals:["Name literary genres in Italian","Discuss narrative techniques","Describe books and reading preferences"]},

{type:"teach", trg:"il racconto", src:"the short story / tale", pos:"noun", gender:"m",
 note:"Masculine noun. 'Raccontare' = to tell/narrate.\nShorter than 'romanzo' (novel).",
 example:"A: Hai letto i racconti di Calvino?\nB: Si, 'Le cosmicomiche' e il mio preferito.",
 exampleSrc:"A: Have you read Calvino's short stories?\nB: Yes, 'Cosmicomics' is my favorite.",
 funFact:"Italo Calvino's short stories mix fantasy, science, and philosophy. He was part of OuLiPo, a group that used mathematical constraints to create literature."},

{type:"teach", trg:"il capitolo", src:"the chapter", pos:"noun", gender:"m",
 note:"Masculine noun. 'Capitolo per capitolo' = chapter by chapter.\nAlso figurative: a chapter of life.",
 example:"A: A che capitolo sei?\nB: Al decimo, non riesco a smettere di leggere!",
 exampleSrc:"A: What chapter are you on?\nB: The tenth, I cannot stop reading!",
 funFact:"'Chiudere un capitolo' (to close a chapter) is used figuratively for ending a phase of life. 'Aprire un nuovo capitolo' means starting fresh."},

{type:"teach", trg:"la metafora", src:"the metaphor", pos:"noun", gender:"f",
 note:"Feminine noun. 'Metaforico' = metaphorical.\nFrom Greek: meta (beyond) + phora (to carry).",
 example:"A: La pioggia e una metafora della tristezza.\nB: Nella letteratura italiana, sempre.",
 exampleSrc:"A: Rain is a metaphor for sadness.\nB: In Italian literature, always.",
 funFact:"Dante's 'Divina Commedia' is built on elaborate metaphors. The 'selva oscura' (dark forest) in the opening represents spiritual confusion. Every detail is symbolic."},

{type:"teach", trg:"il narratore", src:"the narrator", pos:"noun", gender:"m",
 note:"Masculine noun. Feminine: la narratrice.\n'Narratore onnisciente' = omniscient narrator.",
 example:"A: Il narratore in prima persona rende la storia intima.\nB: Ti senti dentro la storia.",
 exampleSrc:"A: The first-person narrator makes the story intimate.\nB: You feel inside the story.",
 funFact:"Italian has a rich narrative tradition. 'Il narratore' Pirandello questioned reality itself: his narrators are often unreliable, forcing readers to doubt everything they read."},

{type:"teach", trg:"la suspense", src:"the suspense", pos:"noun", gender:"f",
 note:"Feminine noun. Borrowed from English/French.\n'Tenere in suspense' = to keep in suspense.",
 example:"A: Il libro mi tiene in suspense fino alla fine.\nB: Adoro i thriller italiani!",
 exampleSrc:"A: The book keeps me in suspense until the end.\nB: I love Italian thrillers!",
 funFact:"Italy has a thriving 'giallo' (yellow) genre. Crime fiction is called 'giallo' because early Italian mystery novels had yellow covers. Mondadori's 'Gialli' series started in 1929."},

{type:"teach", trg:"il colpo di scena", src:"the plot twist", pos:"noun", gender:"m",
 note:"Masculine noun. Literally: 'scene hit.'\n'Che colpo di scena!' = What a twist!",
 example:"A: L'ultimo colpo di scena mi ha sorpreso.\nB: Non me lo aspettavo proprio!",
 exampleSrc:"A: The last plot twist surprised me.\nB: I really did not expect it!",
 funFact:"Italian opera invented the 'colpo di scena.' From Verdi to Puccini, sudden revelations and dramatic turns are the beating heart of Italian storytelling."},

{type:"teach", trg:"la poesia", src:"the poetry / poem", pos:"noun", gender:"f",
 note:"Feminine noun. 'Il poeta/la poetessa' = the poet.\n'Scrivere poesie' = to write poems.",
 example:"A: Leggi mai poesie?\nB: Si, adoro Leopardi e Ungaretti.",
 exampleSrc:"A: Do you ever read poetry?\nB: Yes, I love Leopardi and Ungaretti.",
 funFact:"Italy invented the sonnet. Petrarch perfected it in the 1300s. The 'sonetto petrarchesco' (Petrarchan sonnet) has 14 lines in an octave + sestet structure that Shakespeare later adapted."},

{type:"teach", trg:"il capolavoro", src:"the masterpiece", pos:"noun", gender:"m",
 note:"Masculine noun. Compound: capo (head/chief) + lavoro (work).\nPlural: i capolavori.",
 example:"A: 'Il Gattopardo' e un capolavoro della letteratura.\nB: Lampedusa lo scrisse in soli due anni.",
 exampleSrc:"A: 'The Leopard' is a masterpiece of literature.\nB: Lampedusa wrote it in just two years.",
 funFact:"Many Italian literary capolavori were written in remarkably short periods. 'Il Gattopardo' was rejected by publishers, then became Italy's most celebrated 20th-century novel after Lampedusa's death."},

{type:"teach", trg:"il lettore", src:"the reader", pos:"noun", gender:"m",
 note:"Masculine noun. Feminine: la lettrice.\n'Lettore appassionato' = avid reader.",
 example:"A: Sono un lettore appassionato di romanzi storici.\nB: Hai letto 'Il nome della rosa'?",
 exampleSrc:"A: I am an avid reader of historical novels.\nB: Have you read 'The Name of the Rose'?",
 funFact:"Umberto Eco's 'Il nome della rosa' (The Name of the Rose) proved that intellectual Italian literature could become a global bestseller. Over 50 million copies sold worldwide."},

{type:"mc",
 q:"Why is crime fiction called 'giallo' (yellow) in Italian?",
 opts:["Early Italian mystery novels had yellow covers","The first detective wore yellow","Yellow means danger","Lemons are a common clue"],
 ans:"Early Italian mystery novels had yellow covers",
 hint:"Mondadori's m... series, starting in 1929, used distinctive y... c.... The color became synonymous with the genre."},

{type:"match", pairs:[
  {trg:"il racconto", src:"the short story"},
  {trg:"la metafora", src:"the metaphor"},
  {trg:"il colpo di scena", src:"the plot twist"},
  {trg:"il capolavoro", src:"the masterpiece"}
]},

{type:"fb",
 s:"L'ultimo {1} mi ha completamente sorpreso.",
 a:["colpo di scena"],
 opts:["colpo di scena","capitolo","narratore","lettore"],
 hint:"This dramatic moment in a story suddenly changes everything. Literally, a 'hit to the scene.'",
 sSrc:"The last {1} completely surprised me."},

{type:"mc",
 q:"Who invented the sonnet?",
 opts:["Italian poets, perfected by Petrarch","Shakespeare","Homer","Dante"],
 ans:"Italian poets, perfected by Petrarch",
 hint:"The 14-line form was born in Italy and refined in the 1300s. It later traveled to England where it was adapted."},

{type:"fb",
 s:"'Il Gattopardo' e un {1} della letteratura italiana.",
 a:["capolavoro"],
 opts:["capolavoro","capitolo","racconto","giallo"],
 hint:"This compound word means 'head work,' the finest work an artist or writer produces.",
 sSrc:"'The Leopard' is a {1} of Italian literature."},

{type:"mc",
 q:"What did Pirandello's narrators often do?",
 opts:["Were unreliable, making readers doubt reality","Always told the truth","Spoke directly to the audience","Used only present tense"],
 ans:"Were unreliable, making readers doubt reality",
 hint:"Pirandello questioned the nature of truth and identity. His narrators cannot always be trusted."}
,{type:"match",pairs:[{trg:"il capitolo",src:"the chapter"},{trg:"il narratore",src:"the narrator"},{trg:"la suspense",src:"the suspense"},{trg:"la poesia",src:"the poetry / poem"},{trg:"il lettore",src:"the reader"}]}]};
export default BATCH8_L1;
