// Batch 7 — Unit 28 extra lesson. La letteratura: Poetry & Verse
const BATCH7_L1 = {id:"itv2_u28l_b7_1", title:"La poesia", icon:"\u{1F4DC}", xp:15, board:true, steps:[
{type:"intro", title:"La poesia",
 desc:"Learn vocabulary for poetry, verse forms, and Italy's rich poetic tradition.",
 goals:["Discuss poetry and poetic forms","Understand literary analysis vocabulary","Talk about Italian poets and their legacy"]},

{type:"teach", trg:"il poeta", src:"the poet", pos:"noun", gender:"m",
 note:"Masculine noun. Feminine: la poetessa or la poeta. Plural: i poeti.\n'Poetico' = poetic.",
 example:"A: Dante e il più grande poeta italiano.\nB: La Divina Commedia e il suo capolavoro.",
 exampleSrc:"A: Dante is the greatest Italian poet.\nB: The Divine Comedy is his masterpiece.",
 funFact:"Dante Alighieri is called 'il Sommo Poeta' (the Supreme Poet). He is also credited with standardizing the Italian language. Modern Italian is largely based on the Tuscan dialect he used."},

{type:"teach", trg:"il verso", src:"the verse / line (of poetry)", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i versi.\n'Versi sciolti' = blank verse. 'Verso libero' = free verse.",
 example:"A: Quanti versi ha un sonetto?\nB: Quattordici, divisi in quartine e terzine.",
 exampleSrc:"A: How many lines does a sonnet have?\nB: Fourteen, divided into quatrains and tercets.",
 funFact:"The sonnet was invented in Italy by Giacomo da Lentini in the 13th century. Shakespeare later adopted the form, but the Italian sonnet (Petrarchan) remains the original model."},

{type:"teach", trg:"la rima", src:"the rhyme", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le rime.\n'Rimare' = to rhyme. 'Rima baciata' = couplet rhyme (AABB).",
 example:"A: Questa poesia ha una bella rima.\nB: Si, il suono e musicale.",
 exampleSrc:"A: This poem has a beautiful rhyme.\nB: Yes, the sound is musical.",
 funFact:"Italian is naturally rich in rhymes because most words end in vowels. This makes Italian poetry especially musical. Petrarch's 'Rime' (Rhymes) set the standard for love poetry worldwide."},

{type:"teach", trg:"la strofa", src:"the stanza / strophe", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le strofe.\nA group of verses forming a unit in a poem.",
 example:"A: La prima strofa e la più bella.\nB: Introduce il tema dell'amore.",
 exampleSrc:"A: The first stanza is the most beautiful.\nB: It introduces the theme of love.",
 funFact:"The Italian 'ottava rima' (eight-line stanza, ABABABCC) was invented for epic poetry. Ariosto's 'Orlando Furioso' uses it throughout its 46 cantos."},

{type:"teach", trg:"la metafora", src:"the metaphor", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le metafore.\n'Metaforico' = metaphorical.",
 example:"A: 'La vita e un viaggio' e una metafora comune.\nB: Semplice ma efficace.",
 exampleSrc:"A: 'Life is a journey' is a common metaphor.\nB: Simple but effective.",
 funFact:"Dante's Divine Comedy is one enormous metaphor: the journey through Hell, Purgatory, and Paradise represents the soul's path from sin to salvation. Every detail is symbolic."},

{type:"teach", trg:"l'allegoria", src:"the allegory", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le allegorie.\nAn extended metaphor where characters and events represent abstract ideas.",
 example:"A: La Divina Commedia e ricca di allegorie.\nB: Ogni personaggio rappresenta un concetto.",
 exampleSrc:"A: The Divine Comedy is rich in allegories.\nB: Every character represents a concept.",
 funFact:"Medieval Italian literature loved allegory. Dante, Petrarch, and Boccaccio all used it extensively. The 'Roman de la Rose' tradition influenced Italian allegorical writing."},

{type:"teach", trg:"il romanticismo", src:"Romanticism", pos:"noun", gender:"m",
 note:"Masculine noun. The 19th-century artistic movement.\n'Romantico' = romantic.",
 example:"A: Leopardi e il poeta del romanticismo italiano.\nB: I suoi Canti sono immortali.",
 exampleSrc:"A: Leopardi is the poet of Italian Romanticism.\nB: His Songs are immortal.",
 funFact:"Giacomo Leopardi is Italy's greatest Romantic poet. His 'L'infinito' (The Infinite) is perhaps the most famous Italian poem after Dante. He wrote it at age 21 in his hometown of Recanati."},

{type:"teach", trg:"il sonetto", src:"the sonnet", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i sonetti.\n14 lines. Italian (Petrarchan) form: ABBA ABBA + CDE CDE.",
 example:"A: Il sonetto e una forma poetica italiana.\nB: Inventata nel XIII secolo in Sicilia.",
 exampleSrc:"A: The sonnet is an Italian poetic form.\nB: Invented in the 13th century in Sicily.",
 funFact:"The word 'sonetto' means 'little song.' From Sicily, it spread to Tuscany (Petrarch perfected it), then to all of Europe. Shakespeare, Neruda, and Rilke all wrote sonnets."},

{type:"teach", trg:"l'endecasillabo", src:"the hendecasyllable (11-syllable line)", pos:"noun", gender:"m",
 note:"Masculine noun. The most important Italian verse meter.\n11 syllables per line.",
 example:"A: L'endecasillabo e il verso classico italiano.\nB: Dante e Petrarca lo usavano sempre.",
 exampleSrc:"A: The hendecasyllable is the classic Italian verse.\nB: Dante and Petrarch always used it.",
 funFact:"The endecasillabo is to Italian poetry what iambic pentameter is to English. It has dominated Italian verse for 800 years because its rhythm perfectly fits the natural flow of Italian speech."},

{type:"teach", trg:"la lirica", src:"lyric poetry", pos:"noun", gender:"f",
 note:"Feminine noun. 'Lirico' = lyric/lyrical.\nAlso refers to opera: 'teatro lirico' = opera house.",
 example:"A: Petrarca e il padre della lirica italiana.\nB: Il suo Canzoniere e un modello universale.",
 exampleSrc:"A: Petrarch is the father of Italian lyric poetry.\nB: His Songbook is a universal model.",
 funFact:"Italian 'lirica' gave the world the concept of lyric poetry focused on personal emotion. 'Opera lirica' (lyric opera) is simply called 'opera' in most other languages."},

{type:"teach", trg:"l'interpretazione", src:"the interpretation", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le interpretazioni.\n'Interpretare' = to interpret.",
 example:"A: Qual e la tua interpretazione di questa poesia?\nB: Penso che parli della nostalgia.",
 exampleSrc:"A: What is your interpretation of this poem?\nB: I think it speaks about nostalgia.",
 funFact:"Literary 'interpretazione' is a core skill in Italian schools. Students learn 'analisi del testo' (text analysis) from middle school. The 'maturita' exam always includes a poetry analysis option."},

{type:"teach", trg:"il canto", src:"the canto / song", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i canti.\nA major division of a long poem. Also: a song.",
 example:"A: La Divina Commedia ha cento canti.\nB: Trentatre per cantica, più uno introduttivo.",
 exampleSrc:"A: The Divine Comedy has one hundred cantos.\nB: Thirty-three per canticle, plus one introduction.",
 funFact:"'Canto' means both a chapter of a long poem and a song. Leopardi's collection is called 'Canti' (Songs). The musical and poetic meanings reflect the deep link between Italian poetry and music."},

{type:"teach", trg:"la terzina", src:"the tercet (three-line stanza)", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le terzine.\n'Terza rima' = Dante's interlocking three-line scheme (ABA BCB CDC).",
 example:"A: Dante ha inventato la terza rima.\nB: Un sistema di terzine intrecciate.",
 exampleSrc:"A: Dante invented terza rima.\nB: A system of interlocking tercets.",
 funFact:"Dante's 'terza rima' (ABA BCB CDC...) creates a chain of interlocking rhymes that mirrors the journey forward. The number three symbolizes the Holy Trinity, central to the poem's theology."},

{type:"mc", q:"Chi ha inventato il sonetto?",
 opts:["Giacomo da Lentini","Francesco Petrarca","Dante Alighieri","Giovanni Boccaccio"],
 ans:"Giacomo da Lentini",
 hint:"A Sicilian poet from the 13th century. Petrarch perfected the form later."},

{type:"fb", s:"La Divina Commedia ha cento {1}.", a:["canti"],
 opts:["canti","versi","rime","strofe"],
 hint:"The major divisions of Dante's epic poem. 33 per canticle plus one introduction.",
 sSrc:"The Divine Comedy has one hundred {1}."},

{type:"match", pairs:[
 {trg:"il verso", src:"verse / line"},
 {trg:"la rima", src:"rhyme"},
 {trg:"la strofa", src:"stanza"},
 {trg:"il sonetto", src:"sonnet"}
]},

{type:"mc", q:"Quante sillabe ha l'endecasillabo?",
 opts:["Undici","Dieci","Dodici","Quattordici"],
 ans:"Undici",
 hint:"The name contains the number. 'Hendeca' (from Greek) means this number."},

{type:"fb", s:"'La vita e un viaggio' e una {1}.", a:["metafora"],
 opts:["metafora","allegoria","rima","strofa"],
 hint:"A figure of speech that describes one thing as if it were another.",
 sSrc:"'Life is a journey' is a {1}."},

{type:"mc", q:"Chi e 'il Sommo Poeta'?",
 opts:["Dante Alighieri","Francesco Petrarca","Giacomo Leopardi","Ludovico Ariosto"],
 ans:"Dante Alighieri",
 hint:"The Supreme Poet. Author of the Divine Comedy. Father of the Italian language."},

{type:"fb", s:"Petrarca e il padre della {1} italiana.", a:["lirica"],
 opts:["lirica","commedia","tragedia","prosa"],
 hint:"Poetry that expresses personal emotions. Also connected to opera.",
 sSrc:"Petrarch is the father of Italian {1} poetry."},

{type:"match", pairs:[
 {trg:"la metafora", src:"metaphor"},
 {trg:"l'allegoria", src:"allegory"},
 {trg:"la terzina", src:"tercet"},
 {trg:"l'endecasillabo", src:"hendecasyllable"}
]}
]};
export default BATCH7_L1;
