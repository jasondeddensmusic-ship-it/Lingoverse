// Batch 7 — Unit 22 extra lesson. La cultura italiana: Music & Performing Arts
const BATCH7_L1 = {id:"itv2_u22l_b7_1", title:"La musica e lo spettacolo", icon:"\u{1F3B6}", xp:15, board:true, steps:[
{type:"intro", title:"La musica e lo spettacolo",
 desc:"Learn vocabulary for music, performing arts, and Italian entertainment culture.",
 goals:["Talk about music genres and instruments","Discuss performances and concerts","Understand Italian musical heritage"]},

{type:"teach", trg:"il cantante", src:"the singer", pos:"noun", gender:"m",
 note:"Masculine noun. Feminine: la cantante. Plural: i cantanti.\n'Cantare' = to sing.",
 example:"A: Chi e il tuo cantante preferito?\nB: Adoro Laura Pausini.",
 exampleSrc:"A: Who is your favorite singer?\nB: I love Laura Pausini.",
 funFact:"Italy gave the world opera, so 'cantante' carries special prestige. The Sanremo Music Festival, held annually since 1951, is Italy's most important music event."},

{type:"teach", trg:"il palcoscenico", src:"the stage", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i palcoscenici.\n'Salire sul palcoscenico' = to go on stage.",
 example:"A: L'attore e salito sul palcoscenico.\nB: Il pubblico ha applaudito.",
 exampleSrc:"A: The actor went on stage.\nB: The audience applauded.",
 funFact:"'Palcoscenico' is a compound of 'palco' (platform) and 'scenico' (scenic). La Scala in Milan has one of the most famous 'palcoscenici' in the world."},

{type:"teach", trg:"il concerto", src:"the concert", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i concerti.\n'Concerto dal vivo' = live concert.",
 example:"A: Andiamo al concerto sabato sera?\nB: Si, ho gia i biglietti!",
 exampleSrc:"A: Shall we go to the concert Saturday evening?\nB: Yes, I already have the tickets!",
 funFact:"'Concerto' comes from Latin 'concertare' (to agree/harmonize). Italy hosts major music festivals: Umbria Jazz, Ravello Festival, and the Arena di Verona summer opera season."},

{type:"teach", trg:"il pianoforte", src:"the piano", pos:"noun", gender:"m",
 note:"Masculine noun. Shortened to 'il piano.' Literally: 'soft-loud' (piano + forte).",
 example:"A: Suoni il pianoforte?\nB: Si, da quando avevo sei anni.",
 exampleSrc:"A: Do you play the piano?\nB: Yes, since I was six years old.",
 funFact:"The pianoforte was invented in Italy by Bartolomeo Cristofori around 1700 in Florence. Its name describes its ability to play both quietly (piano) and loudly (forte)."},

{type:"teach", trg:"il violino", src:"the violin", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i violini.\nThe instrument of Stradivari and Paganini.",
 example:"A: Il violino e uno strumento difficile.\nB: Ma produce un suono bellissimo.",
 exampleSrc:"A: The violin is a difficult instrument.\nB: But it produces a beautiful sound.",
 funFact:"Antonio Stradivari of Cremona made the world's finest violins in the 1700s. A Stradivarius violin sold for 15.9 million dollars in 2011, the most expensive instrument ever auctioned."},

{type:"teach", trg:"la chitarra", src:"the guitar", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le chitarre.\n'Chitarrista' = guitar player.",
 example:"A: Mi presti la chitarra?\nB: Certo, ma trattala bene!",
 exampleSrc:"A: Can you lend me the guitar?\nB: Sure, but treat it well!",
 funFact:"The classical guitar tradition in Italy goes back centuries. 'Chitarra classica' (nylon strings) and 'chitarra elettrica' (electric) are both popular. Many Italian pop songs feature acoustic guitar."},

{type:"teach", trg:"il regista", src:"the director (film/theater)", pos:"noun", gender:"m",
 note:"Masculine noun. Feminine: la regista. Plural: i registi.\n'La regia' = the direction.",
 example:"A: Chi e il regista del film?\nB: Paolo Sorrentino, ha vinto l'Oscar.",
 exampleSrc:"A: Who is the director of the film?\nB: Paolo Sorrentino, he won the Oscar.",
 funFact:"Italian cinema has produced legendary 'registi': Fellini, Visconti, De Sica, Antonioni, Pasolini, and more recently Sorrentino and Garrone. Italian neorealism changed world cinema."},

{type:"teach", trg:"lo spettacolo", src:"the show / performance", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: gli spettacoli.\n'Il mondo dello spettacolo' = show business.",
 example:"A: Lo spettacolo inizia alle nove.\nB: Meglio arrivare presto per i posti migliori.",
 exampleSrc:"A: The show starts at nine.\nB: Better arrive early for the best seats.",
 funFact:"'Che spettacolo!' is an exclamation meaning 'What a show!' or 'Amazing!' It is used for anything impressive, from a sunset to a football goal."},

{type:"teach", trg:"il pubblico", src:"the audience / public", pos:"noun", gender:"m",
 note:"Masculine noun. 'Il grande pubblico' = the general public.\nAlso adjective: 'trasporto pubblico.'",
 example:"A: Il pubblico ha applaudito per dieci minuti.\nB: Lo spettacolo deve essere stato fantastico.",
 exampleSrc:"A: The audience applauded for ten minutes.\nB: The show must have been fantastic.",
 funFact:"Italian audiences are notoriously passionate. At La Scala, a bad performance can be met with booing (fischi), while a great one receives a standing ovation lasting many minutes."},

{type:"teach", trg:"il biglietto", src:"the ticket", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i biglietti.\n'Biglietteria' = box office/ticket counter.",
 example:"A: Hai comprato i biglietti per il concerto?\nB: Si, terza fila!",
 exampleSrc:"A: Did you buy the tickets for the concert?\nB: Yes, third row!",
 funFact:"Italian theater and concert tickets can be bought at the 'botteghino' (box office) or online. Last-minute 'biglietti' for La Scala are sometimes available at special prices for young people."},

{type:"teach", trg:"il compositore", src:"the composer", pos:"noun", gender:"m",
 note:"Masculine noun. Feminine: la compositrice. Plural: i compositori.\n'Comporre' = to compose.",
 example:"A: Verdi e il piu grande compositore italiano.\nB: Anche Puccini e straordinario.",
 exampleSrc:"A: Verdi is the greatest Italian composer.\nB: Puccini is also extraordinary.",
 funFact:"Italy's great 'compositori' shaped Western music: Vivaldi, Monteverdi, Verdi, Puccini, Rossini. Musical terms like 'allegro,' 'forte,' and 'piano' are all Italian words."},

{type:"teach", trg:"il capolavoro", src:"the masterpiece", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i capolavori.\nLiterally: 'chief work' (capo + lavoro).",
 example:"A: Questa opera e un capolavoro.\nB: Si, Verdi era un genio.",
 exampleSrc:"A: This opera is a masterpiece.\nB: Yes, Verdi was a genius.",
 funFact:"'Capolavoro' originally referred to the piece a craftsman made to prove mastery of their trade. Now it describes any outstanding work of art, music, or literature."},

{type:"teach", trg:"il balletto", src:"ballet", pos:"noun", gender:"m",
 note:"Masculine noun. 'Il ballerino / la ballerina' = ballet dancer.\nFrom Italian 'ballare' (to dance).",
 example:"A: Hai mai visto un balletto alla Scala?\nB: Si, Il lago dei cigni. Indimenticabile.",
 exampleSrc:"A: Have you ever seen a ballet at La Scala?\nB: Yes, Swan Lake. Unforgettable.",
 funFact:"The word 'ballet' itself comes from Italian 'balletto' (little dance). Italy was the birthplace of ballet in the Renaissance courts, before France adopted and popularized it."},

{type:"mc", q:"Chi ha inventato il pianoforte?",
 opts:["Bartolomeo Cristofori","Antonio Stradivari","Giuseppe Verdi","Niccolo Paganini"],
 ans:"Bartolomeo Cristofori",
 hint:"An Italian instrument maker from Florence, around the year 1700."},

{type:"fb", s:"Lo {1} inizia alle nove di sera.", a:["spettacolo"],
 opts:["spettacolo","concerto","biglietto","pubblico"],
 hint:"A general word for show or performance. 'Che... !' = How amazing!",
 sSrc:"The {1} starts at nine in the evening."},

{type:"match", pairs:[
 {trg:"il pianoforte", src:"piano"},
 {trg:"il violino", src:"violin"},
 {trg:"la chitarra", src:"guitar"},
 {trg:"il balletto", src:"ballet"}
]},

{type:"mc", q:"Che cos'e il Festival di Sanremo?",
 opts:["Italy's most important music festival","A food festival","A film festival","A fashion show"],
 ans:"Italy's most important music festival",
 hint:"Held annually since 1951. The biggest event in Italian m...."},

{type:"fb", s:"Verdi e il piu grande {1} italiano.", a:["compositore"],
 opts:["compositore","cantante","regista","ballerino"],
 hint:"Someone who writes music. The creator of operas and symphonies.",
 sSrc:"Verdi is the greatest Italian {1}."},

{type:"mc", q:"Da quale parola italiana viene 'ballet'?",
 opts:["balletto","ballo","ballare","ballerino"],
 ans:"balletto",
 hint:"The Italian diminutive meaning 'little dance.' Italy was the birthplace of this art form."},

{type:"fb", s:"Questa opera e un {1}.", a:["capolavoro"],
 opts:["capolavoro","concerto","biglietto","palcoscenico"],
 hint:"An outstanding work of art. Literally 'chief work.'",
 sSrc:"This opera is a {1}."},

{type:"match", pairs:[
 {trg:"il cantante", src:"singer"},
 {trg:"il regista", src:"director"},
 {trg:"il pubblico", src:"audience"},
 {trg:"il palcoscenico", src:"stage"}
]}
]};
export default BATCH7_L1;
