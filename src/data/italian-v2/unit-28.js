// Italian V2 Unit 28 — La letteratura (B2.2)
import EXP_L4 from './_temp_u28_expand_L01.js';import EXP_L5 from './_temp_u28_expand_L02.js';import EXP_L6 from './_temp_u28_expand_L03.js';
// CILS B2 aligned. Literature, narrative forms, and literary analysis vocabulary.

const UNIT_28 = {
  n:28, lang:"it", srcLang:"en", track:"v2",
  title:"La letteratura", sub:"Literature & Narrative",
  icon:"📚", level:"B2.2", color:"#7B5EE8",
  lessons:[
    // ─── Lesson 1: Generi e forme letterarie ───
    {id:"itv2_u28l1", title:"Generi e forme letterarie", icon:"📖", xp:15, board:true, steps:[
      {type:"intro", title:"Generi e forme letterarie",
       desc:"Learn to discuss literary genres, narrative forms, and the Italian literary tradition. Master vocabulary for talking about books, stories, and creative writing.",
       goals:["Name major literary genres in Italian","Describe different forms of prose and poetry","Discuss books and reading preferences"]},

      {type:"teach", trg:"il romanzo", src:"the novel", pos:"noun", gender:"m",
       note:"Masculine noun. Plural: i romanzi.\n'Romanzo storico' = historical novel. 'Romanzo giallo' = detective novel.",
       example:"A: Hai letto l'ultimo romanzo di Elena Ferrante?\nB: Si, e un capolavoro.",
       exampleSrc:"A: Have you read Elena Ferrante's latest novel?\nB: Yes, it is a masterpiece.",
       funFact:"Alessandro Manzoni's 'I Promessi Sposi' (1827) is considered the foundational Italian novel. It helped standardize modern Italian, and every Italian student reads it in school. Love it or hate it, no one escapes it."},

      {type:"teach", trg:"il racconto", src:"the short story / tale", pos:"noun", gender:"m",
       note:"Masculine noun. Plural: i racconti.\nShorter than a novel. From 'raccontare' (to tell/narrate).",
       example:"A: Preferisco i racconti ai romanzi.\nB: Anch'io, sono piu intensi.",
       exampleSrc:"A: I prefer short stories to novels.\nB: Me too, they are more intense.",
       funFact:"Italy has a rich tradition of short stories from Boccaccio's 'Decameron' (1353) to Italo Calvino's fantastical tales. The 'racconto' format thrives in Italian literary magazines and anthologies."},

      {type:"teach", trg:"la poesia", src:"the poetry / poem", pos:"noun", gender:"f",
       note:"Feminine noun. Plural: le poesie.\n'Scrivere poesie' = to write poems. 'Poeta' = poet (masculine), 'poetessa' = poet (feminine).",
       example:"A: La poesia italiana e tra le piu ricche del mondo.\nB: Da Dante a Montale, una tradizione straordinaria.",
       exampleSrc:"A: Italian poetry is among the richest in the world.\nB: From Dante to Montale, an extraordinary tradition.",
       funFact:"Dante's 'Divina Commedia' (1320) essentially created the Italian literary language. The sonnet form was also invented in Italy by Giacomo da Lentini at Frederick II's court in Sicily around 1230."},

      {type:"teach", trg:"la narrativa", src:"the fiction / narrative prose", pos:"noun", gender:"f",
       note:"Feminine noun. 'Narrativa contemporanea' = contemporary fiction.\nBroader than 'romanzo': includes all prose storytelling.",
       example:"A: La narrativa italiana contemporanea e molto varia.\nB: Ci sono autori per tutti i gusti.",
       exampleSrc:"A: Contemporary Italian fiction is very diverse.\nB: There are authors for all tastes.",
       funFact:"Italian bookshops divide fiction into 'narrativa italiana' and 'narrativa straniera' (foreign fiction). Translated works, especially from English, make up about 25% of the Italian book market."},

      {type:"mc",
       q:"Come si chiama un'opera in prosa lunga con personaggi e trama complessa?",
       opts:["Un romanzo","Un racconto","Una poesia","Un saggio"],
       ans:"Un romanzo",
       hint:"A long prose work with developed characters and an intricate plot. Manzoni wrote the most famous Italian one."},

      {type:"teach", trg:"il dramma", src:"the drama / play", pos:"noun", gender:"m",
       note:"Masculine noun. Plural: i drammi.\n'Dramma teatrale' = theatrical play. Also means a dramatic situation.",
       example:"A: Luigi Pirandello ha scritto drammi famosi in tutto il mondo.\nB: Ha vinto il Nobel nel 1934.",
       exampleSrc:"A: Luigi Pirandello wrote dramas famous all over the world.\nB: He won the Nobel Prize in 1934.",
       funFact:"Italy gave the world the 'commedia dell'arte,' improvised theatrical drama with stock characters like Arlecchino and Pulcinella. Pirandello then revolutionized modern drama with plays questioning the nature of identity."},

      {type:"teach", trg:"il saggio", src:"the essay", pos:"noun", gender:"m",
       note:"Masculine noun. Plural: i saggi.\n'Saggio critico' = critical essay. Also means 'wise person.'",
       example:"A: Ha pubblicato un saggio sulla letteratura del Novecento.\nB: E diventato un testo di riferimento.",
       exampleSrc:"A: He published an essay on twentieth-century literature.\nB: It became a reference text.",
       funFact:"'Saggio' has two distinct meanings: an essay (from Latin 'exagium,' a weighing) and a wise person (from Latin 'sapius,' knowing). Umberto Eco was celebrated both as a 'saggista' (essayist) and a novelist."},

      {type:"fb",
       s:"Dante e il piu grande {1} della lingua italiana.",
       a:["poeta"],
       opts:["poeta","romanzo","saggio","dramma"],
       hint:"A person who writes verse. Dante is the supreme example in the Italian tradition.",
       sSrc:"Dante is the greatest {1} of the Italian language."},

      {type:"teach", trg:"il verso", src:"the verse / line of poetry", pos:"noun", gender:"m",
       note:"Masculine noun. Plural: i versi.\n'Versi liberi' = free verse. 'Scrivere in versi' = to write in verse.",
       example:"A: Conosci i primi versi della Divina Commedia?\nB: Nel mezzo del cammin di nostra vita...",
       exampleSrc:"A: Do you know the first lines of the Divine Comedy?\nB: In the middle of the journey of our life...",
       funFact:"Italian poetry traditionally uses the 'endecasillabo' (eleven-syllable line), the backbone of the sonnet and the terza rima. Dante's entire Commedia consists of over 14,000 endecasillabi."},

      {type:"mc",
       q:"Che differenza c'e tra un romanzo e un racconto?",
       opts:["Il racconto ha sempre un lieto fine","Il romanzo e piu lungo e complesso del racconto","Il romanzo e sempre autobiografico","Non c'e differenza"],
       ans:"Il romanzo e piu lungo e complesso del racconto",
       hint:"Length and complexity distinguish these two prose forms. One is a longer work with multiple storylines, the other is shorter and more concentrated."},

      {type:"match", pairs:[
        {trg:"romanzo", src:"novel"},
        {trg:"racconto", src:"short story"},
        {trg:"poesia", src:"poetry"},
        {trg:"dramma", src:"drama"},
        {trg:"saggio", src:"essay"}
      ]},

      {type:"fb",
       s:"Ha scritto un {1} critico sulla poesia del Novecento.",
       a:["saggio"],
       opts:["saggio","dramma","romanzo","racconto"],
       hint:"A non-fiction analytical text that examines a topic in depth. The academic or critical form of writing, not storytelling.",
       sSrc:"He wrote a critical {1} on twentieth-century poetry."},

      {type:"mc",
       q:"Quale forma letteraria ha inventato l'Italia?",
       opts:["Il saggio","Il romanzo","Il sonetto","L'autobiografia"],
       ans:"Il sonetto",
       hint:"A fourteen-line poetic form invented in Sicily around 1230. It later spread to all of European literature, including Shakespeare's works."}
    ]},

    // ─── Lesson 2: Elementi della narrazione ───
    {id:"itv2_u28l2", title:"Elementi della narrazione", icon:"🎭", xp:15, board:true, steps:[
      {type:"intro", title:"Elementi della narrazione",
       desc:"Learn vocabulary for analyzing stories: characters, plot, twists, and narrative techniques. Essential for discussing books, films, and storytelling in Italian.",
       goals:["Describe characters and their roles in a story","Discuss plot structure and narrative twists","Analyze storytelling techniques"]},

      {type:"teach", trg:"il personaggio", src:"the character (in a story)", pos:"noun", gender:"m",
       note:"Masculine noun. Plural: i personaggi.\n'Personaggio principale' = main character. 'Personaggio secondario' = supporting character.",
       example:"A: Il personaggio principale e molto complesso.\nB: Ha difetti e qualita in ugual misura.",
       exampleSrc:"A: The main character is very complex.\nB: He has flaws and qualities in equal measure.",
       funFact:"Pirandello's characters famously question their own existence. His play 'Sei personaggi in cerca d'autore' (Six Characters in Search of an Author, 1921) shattered the boundary between fiction and reality."},

      {type:"teach", trg:"la trama", src:"the plot", pos:"noun", gender:"f",
       note:"Feminine noun. Plural: le trame.\n'La trama del romanzo' = the plot of the novel. Also means 'weave' in textiles.",
       example:"A: La trama e piena di sorprese.\nB: Non riuscivo a smettere di leggere.",
       exampleSrc:"A: The plot is full of surprises.\nB: I could not stop reading.",
       funFact:"'Trama' literally means the weft threads in weaving. A story's plot is metaphorically 'woven' from events, just as fabric is woven from threads. Italian and English share this textile metaphor for narrative."},

      {type:"teach", trg:"il colpo di scena", src:"the plot twist", pos:"noun", gender:"m",
       note:"Masculine compound noun. Plural: i colpi di scena.\nLiterally 'blow of scene.' A sudden, unexpected turn in the story.",
       example:"A: Il colpo di scena finale mi ha lasciato senza parole.\nB: Non me lo aspettavo assolutamente.",
       exampleSrc:"A: The final plot twist left me speechless.\nB: I did not expect it at all.",
       funFact:"Italian opera is built on colpi di scena. Puccini's 'Tosca' has one of the most famous twists in all of theater. The phrase has entered everyday Italian to describe any shocking surprise, even outside fiction."},

      {type:"teach", trg:"il narratore", src:"the narrator", pos:"noun", gender:"m",
       note:"Masculine noun. Feminine: la narratrice.\n'Narratore onnisciente' = omniscient narrator. 'Narratore in prima persona' = first-person narrator.",
       example:"A: Il narratore racconta la storia in prima persona.\nB: Questo rende tutto piu intimo.",
       exampleSrc:"A: The narrator tells the story in first person.\nB: This makes everything more intimate.",
       funFact:"Italo Calvino played with the narrator concept brilliantly. His novel 'Se una notte d'inverno un viaggiatore' opens with 'You are about to begin reading Italo Calvino's new novel,' making the reader the protagonist."},

      {type:"mc",
       q:"Come si chiama un evento improvviso e inaspettato nella trama di un romanzo?",
       opts:["Un colpo di scena","Un personaggio","Un narratore","Un verso"],
       ans:"Un colpo di scena",
       hint:"A sudden, shocking turn in the story that nobody saw coming. Literally a 'blow of scene' in Italian."},

      {type:"teach", trg:"la metafora", src:"the metaphor", pos:"noun", gender:"f",
       note:"Feminine noun. Plural: le metafore.\nA figure of speech that compares without using 'like' or 'as.'",
       example:"A: La vita e un viaggio: ecco una metafora classica.\nB: La letteratura ne e piena.",
       exampleSrc:"A: Life is a journey: that is a classic metaphor.\nB: Literature is full of them.",
       funFact:"Dante's entire Commedia is an extended metaphor for the soul's journey. Italian literary criticism distinguishes 'metafora' from 'similitudine' (simile, which uses 'come' = like/as)."},

      {type:"teach", trg:"il simbolo", src:"the symbol", pos:"noun", gender:"m",
       note:"Masculine noun. Plural: i simboli.\n'Valore simbolico' = symbolic value. 'Simbolismo' = symbolism (literary movement).",
       example:"A: La foresta e un simbolo dell'ignoto.\nB: Dante la usa all'inizio dell'Inferno.",
       exampleSrc:"A: The forest is a symbol of the unknown.\nB: Dante uses it at the beginning of the Inferno.",
       funFact:"The 'selva oscura' (dark forest) opening Dante's Inferno is perhaps the most analyzed symbol in Italian literature. It represents sin, confusion, and the soul's distance from God."},

      {type:"fb",
       s:"La {1} del romanzo e complessa, con molti colpi di scena.",
       a:["trama"],
       opts:["trama","metafora","poesia","narrativa"],
       hint:"The sequence of events in a story. What happens from beginning to end, including all the twists.",
       sSrc:"The {1} of the novel is complex, with many plot twists."},

      {type:"teach", trg:"l'ambientazione", src:"the setting", pos:"noun", gender:"f",
       note:"Feminine noun. The time and place where a story takes place.\nFrom 'ambientare' (to set a story in a location).",
       example:"A: L'ambientazione del romanzo e la Sicilia degli anni Cinquanta.\nB: Si sente il calore e la tensione dell'epoca.",
       exampleSrc:"A: The setting of the novel is 1950s Sicily.\nB: You can feel the heat and tension of the era.",
       funFact:"Italian literature is deeply tied to place. Verga's Sicily, Pavese's Piedmont hills, Ferrante's Naples: each author's work is inseparable from its 'ambientazione.' The landscape becomes almost a character itself."},

      {type:"teach", trg:"il tema", src:"the theme", pos:"noun", gender:"m",
       note:"Masculine noun. Plural: i temi.\n'Tema centrale' = central theme. Also means 'essay' in school contexts.",
       example:"A: Il tema principale del romanzo e la solitudine.\nB: Ogni personaggio la vive in modo diverso.",
       exampleSrc:"A: The main theme of the novel is loneliness.\nB: Each character experiences it differently.",
       funFact:"In Italian schools, 'tema' also means a written composition or essay assigned as homework. Students dread the 'tema in classe' (in-class essay). The dual meaning reflects how themes are both found in literature and explored through writing."},

      {type:"mc",
       q:"Che cos'e l'ambientazione di un romanzo?",
       opts:["Il personaggio principale","Il luogo e il tempo in cui si svolge la storia","La morale della storia","Lo stile di scrittura dell'autore"],
       ans:"Il luogo e il tempo in cui si svolge la storia",
       hint:"Where and when the story takes place. The geographical location and historical period that form the backdrop of the narrative."},

      {type:"match", pairs:[
        {trg:"personaggio", src:"character"},
        {trg:"trama", src:"plot"},
        {trg:"metafora", src:"metaphor"},
        {trg:"simbolo", src:"symbol"},
        {trg:"ambientazione", src:"setting"}
      ]},

      {type:"fb",
       s:"Il {1} centrale del romanzo e il conflitto tra liberta e dovere.",
       a:["tema"],
       opts:["tema","simbolo","personaggio","narratore"],
       hint:"The underlying subject or message of the work. What the author is really exploring beneath the surface events.",
       sSrc:"The central {1} of the novel is the conflict between freedom and duty."},

      {type:"mc",
       q:"Chi racconta la storia in un romanzo?",
       opts:["L'editore","Il personaggio","Il narratore","Il poeta"],
       ans:"Il narratore",
       hint:"The voice that tells the story. Can be in first person, third person, or even second person as in Calvino's experiments."}
    ]},

    // ─── Lesson 3: Parlare di libri ───
    {id:"itv2_u28l3", title:"Parlare di libri", icon:"💬", xp:15, board:true, steps:[
      {type:"intro", title:"Parlare di libri",
       desc:"Practice discussing books, authors, and reading habits. Learn vocabulary for book reviews, literary opinions, and the Italian publishing world.",
       goals:["Express opinions about books and authors","Discuss the publishing industry","Recommend and review books"]},

      {type:"teach", trg:"l'autore", src:"the author", pos:"noun", gender:"m",
       note:"Masculine noun. Feminine: l'autrice.\nPlural: gli autori / le autrici. 'Autore bestseller' = bestselling author.",
       example:"A: Chi e il tuo autore italiano preferito?\nB: Italo Calvino, senza dubbio.",
       exampleSrc:"A: Who is your favorite Italian author?\nB: Italo Calvino, without a doubt.",
       funFact:"Six Italian authors have won the Nobel Prize for Literature: Carducci, Deledda, Pirandello, Quasimodo, Montale, and Fo. Italy ranks fourth globally for literary Nobel prizes."},

      {type:"teach", trg:"l'editore", src:"the publisher", pos:"noun", gender:"m",
       note:"Masculine noun. Feminine: l'editrice.\n'Casa editrice' = publishing house. 'L'edizione' = the edition.",
       example:"A: Quale editore ha pubblicato il romanzo?\nB: Einaudi, una delle case editrici piu prestigiose.",
       exampleSrc:"A: Which publisher published the novel?\nB: Einaudi, one of the most prestigious publishing houses.",
       funFact:"Italian publishing is concentrated in Milan and Turin. Einaudi, Mondadori, Feltrinelli, and Adelphi are the major houses. Feltrinelli bookshops, with their red logos, are cultural landmarks in every Italian city."},

      {type:"teach", trg:"il capolavoro", src:"the masterpiece", pos:"noun", gender:"m",
       note:"Masculine noun. Plural: i capolavori.\nLiterally 'head-work' or 'chief work.' The finest work of an artist.",
       example:"A: Il Gattopardo e considerato un capolavoro della letteratura italiana.\nB: Tomasi di Lampedusa lo scrisse poco prima di morire.",
       exampleSrc:"A: The Leopard is considered a masterpiece of Italian literature.\nB: Tomasi di Lampedusa wrote it shortly before dying.",
       funFact:"'Capolavoro' originally meant the final piece a medieval craftsman produced to earn the title of master ('capo' = head, 'lavoro' = work). The term migrated from artisan workshops to the world of art and literature."},

      {type:"teach", trg:"la recensione", src:"the review", pos:"noun", gender:"f",
       note:"Feminine noun. Plural: le recensioni.\n'Scrivere una recensione' = to write a review. Used for books, films, restaurants.",
       example:"A: La recensione sul giornale era molto positiva.\nB: Ha convinto molti lettori a comprare il libro.",
       exampleSrc:"A: The review in the newspaper was very positive.\nB: It convinced many readers to buy the book.",
       funFact:"Italy's most influential literary supplement is the 'Tuttolibri' section of La Stampa newspaper. Online, blogs and social media have democratized book reviewing, challenging traditional literary gatekeepers."},

      {type:"mc",
       q:"Come si chiama l'opera migliore e piu famosa di un autore?",
       opts:["Il capolavoro","La recensione","L'edizione","Il racconto"],
       ans:"Il capolavoro",
       hint:"Literally 'head-work' or 'chief work.' The crowning achievement in an artist's career."},

      {type:"teach", trg:"il lettore", src:"the reader", pos:"noun", gender:"m",
       note:"Masculine noun. Feminine: la lettrice.\nPlural: i lettori / le lettrici. 'Lettore accanito' = avid reader.",
       example:"A: L'Italia ha pochi lettori rispetto ad altri paesi europei.\nB: Solo il 40% degli italiani legge almeno un libro all'anno.",
       exampleSrc:"A: Italy has few readers compared to other European countries.\nB: Only 40% of Italians read at least one book per year.",
       funFact:"Italy has one of the lowest reading rates in Western Europe. The divide is regional: northern Italians read significantly more than southerners. 'Non-lettori' (non-readers) are a constant concern for publishers and educators."},

      {type:"teach", trg:"il genere", src:"the genre", pos:"noun", gender:"m",
       note:"Masculine noun. Plural: i generi.\n'Genere letterario' = literary genre. Also means 'gender' and 'type.'",
       example:"A: Che genere di libri preferisci?\nB: Mi piacciono i gialli e la fantascienza.",
       exampleSrc:"A: What genre of books do you prefer?\nB: I like detective fiction and science fiction.",
       funFact:"Italian uses color-based names for some genres: 'giallo' (yellow) for mystery, 'nero' (black) for crime/noir, 'rosa' (pink) for romance. These names come from the cover colors used by Mondadori's paperback series."},

      {type:"fb",
       s:"La {1} del critico ha stroncato il nuovo romanzo.",
       a:["recensione"],
       opts:["recensione","narrativa","poesia","trama"],
       hint:"A critical evaluation of a book, film, or restaurant published in a newspaper or online. A professional opinion piece.",
       sSrc:"The critic's {1} tore apart the new novel."},

      {type:"teach", trg:"il capitolo", src:"the chapter", pos:"noun", gender:"m",
       note:"Masculine noun. Plural: i capitoli.\n'Leggere un capitolo' = to read a chapter. Also used figuratively: 'un nuovo capitolo della vita.'",
       example:"A: A che capitolo sei arrivato?\nB: Al decimo. La storia sta diventando avvincente.",
       exampleSrc:"A: Which chapter have you reached?\nB: The tenth. The story is becoming gripping.",
       funFact:"Manzoni divided 'I Promessi Sposi' into 38 chapters, each opening with a now-iconic sentence. Italian students can often quote 'Quel ramo del lago di Como' (That branch of Lake Como) from chapter one by heart."},

      {type:"teach", trg:"la citazione", src:"the quotation / quote", pos:"noun", gender:"f",
       note:"Feminine noun. Plural: le citazioni.\n'Citare' (verb) = to quote. 'Fuori contesto' = out of context.",
       example:"A: Questa citazione di Leopardi e bellissima.\nB: 'L'infinito' ha versi indimenticabili.",
       exampleSrc:"A: This quotation from Leopardi is beautiful.\nB: 'L'infinito' has unforgettable lines.",
       funFact:"Italians love literary quotations. Dante's verses appear on everything from coffee mugs to political speeches. The most quoted Italian line is probably 'Lasciate ogne speranza, voi ch'intrate' (Abandon all hope, you who enter)."},

      {type:"mc",
       q:"Perche i romanzi polizieschi in Italia si chiamano 'gialli'?",
       opts:["Perche il primo autore si chiamava Gialli","Per il colore delle copertine di una famosa collana Mondadori","Perche la paura fa diventare gialli","Per il colore della carta usata per stamparli"],
       ans:"Per il colore delle copertine di una famosa collana Mondadori",
       hint:"Named after the color of the covers used by a famous publisher's mystery series. A bright, warm color."},

      {type:"match", pairs:[
        {trg:"autore", src:"author"},
        {trg:"editore", src:"publisher"},
        {trg:"capolavoro", src:"masterpiece"},
        {trg:"lettore", src:"reader"},
        {trg:"citazione", src:"quotation"}
      ]},

      {type:"fb",
       s:"Che {1} di libri preferisci: gialli, rosa o fantascienza?",
       a:["genere"],
       opts:["genere","capitolo","verso","tema"],
       hint:"The category or type of literature. Mystery, romance, and science fiction are examples of these.",
       sSrc:"What {1} of books do you prefer: mystery, romance, or science fiction?"},

      {type:"mc",
       q:"Quanti italiani leggono almeno un libro all'anno?",
       opts:["Meno del 10%","Circa l'80%","Circa il 40%","Il 100%"],
       ans:"Circa il 40%",
       hint:"Italy has one of the lowest reading rates in Western Europe. The percentage is well under half the population."}
    ]}
  ]
};

export default UNIT_28;
