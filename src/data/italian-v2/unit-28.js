// Italian V2 Unit 28. La letteratura (B2.2)
import BATCH8_L1 from './_batch8_u28_L01.js';
import BATCH7_L1 from './_batch7_u28_L01.js';
import BATCH6_L1 from './_batch6_u28_L01.js';
import BATCH5_L02 from './_batch5_u28_L02.js';
import BATCH5_L01 from './_batch5_u28_L01.js';
import BATCH3_L02 from './_batch3_u28_L02.js';
import BATCH3_L01 from './_batch3_u28_L01.js';
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
       example:"A: Hai letto l'ultimo romanzo di Elena Ferrante?\nB: Si, e un capolavoro.\nA: Lo faresti di nuovo?\nB: Assolutamente si, senza esitazione.\nA: E un fenomeno recente?\nB: Non proprio, ha radici che risalgono a decenni fa.",
       exampleSrc:"A: Have you read Elena Ferrante's latest novel?\nB: Yes, it is a masterpiece.\nA: Would you do it again?\nB: Absolutely yes, without hesitation.\nA: Is it a recent phenomenon?\nB: Not exactly, it has roots that go back decades.",
       funFact:"Alessandro Manzoni's 'I Promessi Sposi' (1827) is considered the foundational Italian novel. It helped standardize modern Italian, and every Italian student reads it in school. Love it or hate it, no one escapes it."},

      {type:"teach", trg:"il racconto", src:"the short story / tale", pos:"noun", gender:"m",
       note:"Masculine noun. Plural: i racconti.\nShorter than a novel. From 'raccontare' (to tell/narrate).",
       example:"A: Preferisco i racconti ai romanzi.\nB: Anch'io, sono piu intensi.\nA: E costato molto?\nB: Meno di quanto pensassi, per fortuna.\nA: Possiamo approfondire questo aspetto?\nB: Certo, e un tema che merita una discussione piu ampia.",
       exampleSrc:"A: I prefer short stories to novels.\nB: Me too, they are more intense.\nA: Did it cost a lot?\nB: Less than I thought, fortunately.\nA: Can we explore this aspect further?\nB: Of course, it is a topic that deserves a broader discussion.",
       funFact:"Italy has a rich tradition of short stories from Boccaccio's 'Decameron' (1353) to Italo Calvino's fantastical tales. The 'racconto' format thrives in Italian literary magazines and anthologies."},

      {type:"teach", trg:"la poesia", src:"the poetry / poem", pos:"noun", gender:"f",
       note:"Feminine noun. Plural: le poesie.\n'Scrivere poesie' = to write poems. 'Poeta' = poet (masculine), 'poetessa' = poet (feminine).",
       example:"A: La poesia italiana e tra le piu ricche del mondo.\nB: Da Dante a Montale, una tradizione straordinaria.\nA: Come hai saputo?\nB: Me l'ha detto un amico ieri sera.\nA: C'e qualcosa che mi sfugge?\nB: Forse il fatto che il contesto storico e molto complesso.",
       exampleSrc:"A: Italian poetry is among the richest in the world.\nB: From Dante to Montale, an extraordinary tradition.\nA: How did you find out?\nB: A friend told me last night.\nA: Am I missing something?\nB: Perhaps the fact that the historical context is very complex.",
       funFact:"Dante's 'Divina Commedia' (1320) essentially created the Italian literary language. The sonnet form was also invented in Italy by Giacomo da Lentini at Frederick II's court in Sicily around 1230."},

      {type:"teach", trg:"la narrativa", src:"the fiction / narrative prose", pos:"noun", gender:"f",
       note:"Feminine noun. 'Narrativa contemporanea' = contemporary fiction.\nBroader than 'romanzo': includes all prose storytelling.",
       example:"A: La narrativa italiana contemporanea e molto varia.\nB: Ci sono autori per tutti i gusti.\nA: Cosa ne pensi?\nB: Secondo me e un'ottima scelta.\nA: Qual e la tua posizione in merito?\nB: Personalmente credo che serva un approccio piu equilibrato.",
       exampleSrc:"A: Contemporary Italian fiction is very diverse.\nB: There are authors for all tastes.\nA: What do you think?\nB: In my opinion it is an excellent choice.\nA: What is your position on the matter?\nB: Personally I believe a more balanced approach is needed.",
       funFact:"Italian bookshops divide fiction into 'narrativa italiana' and 'narrativa straniera' (foreign fiction). Translated works, especially from English, make up about 25% of the Italian book market."},

      {type:"mc",
       q:"Come si chiama un'opera in prosa lunga con personaggi e trama complessa?",
       opts:["Un romanzo","Un racconto","Una poesia","Un saggio"],
       ans:"Un romanzo",
       hint:"A long prose work with developed characters and an intricate plot. Manzoni wrote the most famous Italian one."},

      {type:"teach", trg:"il dramma", src:"the drama / play", pos:"noun", gender:"m",
       note:"Masculine noun. Plural: i drammi.\n'Dramma teatrale' = theatrical play. Also means a dramatic situation.",
       example:"A: Luigi Pirandello ha scritto drammi famosi in tutto il mondo.\nB: Ha vinto il Nobel nel 1934.\nA: Pensi di continuare?\nB: Si, mi piace molto e voglio migliorare.\nA: Credi che la situazione migliorera?\nB: Dipende dalle scelte che faremo nei prossimi mesi.",
       exampleSrc:"A: Luigi Pirandello wrote dramas famous all over the world.\nB: He won the Nobel Prize in 1934.\nA: Do you plan to continue?\nB: Yes, I like it a lot and I want to improve.\nA: Do you think the situation will improve?\nB: It depends on the choices we make in the coming months.",
       funFact:"Italy gave the world the 'commedia dell'arte,' improvised theatrical drama with stock characters like Arlecchino and Pulcinella. Pirandello then revolutionized modern drama with plays questioning the nature of identity."},

      {type:"teach", trg:"il saggio", src:"the essay", pos:"noun", gender:"m",
       note:"Masculine noun. Plural: i saggi.\n'Saggio critico' = critical essay. Also means 'wise person.'",
       example:"A: Ha pubblicato un saggio sulla letteratura del Novecento.\nB: E diventato un testo di riferimento.\nA: E stato difficile?\nB: Un po', ma alla fine ne e valsa la pena.\nA: Come si confronta con altri paesi?\nB: L'Italia ha le sue specificita, ma il trend e simile in Europa.",
       exampleSrc:"A: He published an essay on twentieth-century literature.\nB: It became a reference text.\nA: Was it difficult?\nB: A little, but in the end it was worth it.\nA: How does it compare with other countries?\nB: Italy has its own specificities, but the trend is similar in Europe.",
       funFact:"'Saggio' has two distinct meanings: an essay (from Latin 'exagium,' a weighing) and a wise person (from Latin 'sapius,' knowing). Umberto Eco was celebrated both as a 'saggista' (essayist) and a novelist."},

      {type:"fb",
       s:"Dante e il piu grande {1} della lingua italiana.",
       a:["poeta"],
       opts:["poeta","romanzo","saggio","dramma"],
       hint:"A person who writes verse. Dante is the supreme example in the Italian tradition.",
       sSrc:"Dante is the greatest {1} of the Italian language."},

      {type:"teach", trg:"il verso", src:"the verse / line of poetry", pos:"noun", gender:"m",
       note:"Masculine noun. Plural: i versi.\n'Versi liberi' = free verse. 'Scrivere in versi' = to write in verse.",
       example:"A: Conosci i primi versi della Divina Commedia?\nB: Nel mezzo del cammin di nostra vita...\nA: E la prima volta?\nB: No, l'ho fatto anche l'anno scorso.\nA: Quali sono le conseguenze a lungo termine?\nB: Difficile dirlo, ma il cambiamento sara significativo.",
       exampleSrc:"A: Do you know the first lines of the Divine Comedy?\nB: In the middle of the journey of our life...\nA: Is it the first time?\nB: No, I did it last year too.\nA: What are the long-term consequences?\nB: Hard to say, but the change will be significant.",
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

      {type:"tip", title:"Passato Remoto",
       text:"Italian has two simple past tenses. Which one you use depends on register and region.\n\nPassato prossimo (compound past): used in northern and central Italy for all past events in everyday speech.\n'Ho mangiato la pizza.' (I ate pizza.) — standard spoken Italian.\n\nPassato remoto (simple past): used in southern Italy in daily speech, and across Italy in writing, literature, history, and formal narrative.\n'Mangiai la pizza.' (I ate pizza.) — literary or southern regional.\n\nIn literature, history, and formal writing, passato remoto dominates regardless of region. When you read Dante, Pirandello, or any Italian novel, you will encounter it constantly.\n\nFormation: remove the infinitive ending, add tense endings:\n-are: -ai, -asti, -o, -ammo, -aste, -arono\n-ere: -ei/-etti, -esti, -e/-ette, -emmo, -este, -erono/-ettero\n-ire: -ii, -isti, -i, -immo, -iste, -irono\n\nMany common verbs are irregular: essere > fui, avere > ebbi, fare > feci, dire > dissi, scrivere > scrissi, venire > venni.",
       icon:"💡",
       deepDive:{title:"North vs South: the great tense divide", text:"Italy's north-south split on the passato remoto is one of the most striking regional differences in the language. In Milan or Bologna, 'ieri ho incontrato Marco' (yesterday I met Marco) is natural. In Palermo or Naples, 'ieri incontrai Marco' sounds equally natural.\n\nThe boundary runs roughly through Tuscany. North of Florence, passato prossimo dominates speech. South of Rome, passato remoto is the living spoken tense.\n\nFor learners: learn passato remoto to read literature and understand southern Italian speech. Use passato prossimo in your own spoken Italian unless you are deliberately imitating a literary or southern register."}},

      {type:"tip", title:"Trapassato Remoto",
       text:"The trapassato remoto is Italian's rarest tense. You will almost never produce it, but you will encounter it in literature.\n\nFormation: passato remoto of avere or essere + past participle.\navere: ebbi parlato, avesti scritto, ebbe dormito...\nessere: fui andato/a, fosti partito/a, fu arrivato/a...\n\nWhen is it used? Only in formal written Italian, in subordinate time clauses introduced by dopo che, quando, non appena, or appena, when the main clause is in the passato remoto.\n\n'Dopo che ebbe letto la lettera, la brucio.'\n(After he had read the letter, he burned it.)\n\nIn modern Italian, this tense is replaced by:\n— dopo aver letto la lettera (infinitive construction)\n— dopo che aveva letto la lettera (trapassato prossimo)\n\nYou need to recognize it in literary texts. You rarely need to produce it.",
       icon:"💡",
       deepDive:{title:"Why it survives only in formal writing", text:"The trapassato remoto disappeared from spoken Italian centuries ago. It survives only in literary and legal Italian precisely because those registers deliberately preserve archaic forms.\n\nWhen you read 19th-century Italian novels (Manzoni's 'I Promessi Sposi', Verga's 'I Malavoglia'), you will see it frequently. When you read contemporary literature or journalism, it is rare.\n\nA useful shortcut: any time you see ebbi, avesti, ebbe, avemmo, aveste, ebbero (or fui, fosti, fu...) followed by a past participle in a time clause, you are looking at the trapassato remoto."}},

      {type:"teach", trg:"il personaggio", src:"the character (in a story)", pos:"noun", gender:"m",
       note:"Masculine noun. Plural: i personaggi.\n'Personaggio principale' = main character. 'Personaggio secondario' = supporting character.",
       example:"A: Il personaggio principale e molto complesso.\nB: Ha difetti e qualita in ugual misura.\nA: Come ti sei trovato?\nB: Molto bene, lo consiglio a tutti.\nA: Dobbiamo restare aggiornati su questo tema.\nB: Assolutamente, e in continua evoluzione.",
       exampleSrc:"A: The main character is very complex.\nB: He has flaws and qualities in equal measure.\nA: How did you find it?\nB: Very well, I recommend it to everyone.\nA: We need to stay updated on this topic.\nB: Absolutely, it is constantly evolving.",
       funFact:"Pirandello's characters famously question their own existence. His play 'Sei personaggi in cerca d'autore' (Six Characters in Search of an Author, 1921) shattered the boundary between fiction and reality."},

      {type:"teach", trg:"la trama", src:"the plot", pos:"noun", gender:"f",
       note:"Feminine noun. Plural: le trame.\n'La trama del romanzo' = the plot of the novel. Also means 'weave' in textiles.",
       example:"A: La trama e piena di sorprese.\nB: Non riuscivo a smettere di leggere.\nA: Da quanto tempo?\nB: Da qualche mese ormai.\nA: Come vedi il futuro di questo ambito?\nB: Con cautela ottimistica, se si fanno le scelte giuste.",
       exampleSrc:"A: The plot is full of surprises.\nB: I could not stop reading.\nA: For how long?\nB: For a few months now.\nA: How do you see the future of this field?\nB: With cautious optimism, if the right choices are made.",
       funFact:"'Trama' literally means the weft threads in weaving. A story's plot is metaphorically 'woven' from events, just as fabric is woven from threads. Italian and English share this textile metaphor for narrative."},

      {type:"teach", trg:"il colpo di scena", src:"the plot twist", pos:"noun", gender:"m",
       note:"Masculine compound noun. Plural: i colpi di scena.\nLiterally 'blow of scene.' A sudden, unexpected turn in the story.",
       example:"A: Il colpo di scena finale mi ha lasciato senza parole.\nB: Non me lo aspettavo assolutamente.\nA: In che senso?\nB: Nel senso che bisogna pensarci bene prima di decidere.\nA: E una questione di cui si parla poco.\nB: Hai ragione, meriterebbe molta piu attenzione da parte dei media.",
       exampleSrc:"A: The final plot twist left me speechless.\nB: I did not expect it at all.\nA: In what sense?\nB: In the sense that you need to think carefully before deciding.\nA: It is an issue that is rarely discussed.\nB: You are right, it would deserve much more attention from the media.",
       funFact:"Italian opera is built on colpi di scena. Puccini's 'Tosca' has one of the most famous twists in all of theater. The phrase has entered everyday Italian to describe any shocking surprise, even outside fiction."},

      {type:"teach", trg:"il narratore", src:"the narrator", pos:"noun", gender:"m",
       note:"Masculine noun. Feminine: la narratrice.\n'Narratore onnisciente' = omniscient narrator. 'Narratore in prima persona' = first-person narrator.",
       example:"A: Il narratore racconta la storia in prima persona.\nB: Questo rende tutto piu intimo.\nA: Interessante, non lo sapevo.\nB: Si, e una cosa che pochi sanno.\nA: Vorrei capire meglio i dettagli.\nB: Posso mandarti un articolo che spiega tutto molto bene.",
       exampleSrc:"A: The narrator tells the story in first person.\nB: This makes everything more intimate.\nA: Interesting, I did not know that.\nB: Yes, it is something few people know.\nA: I would like to understand the details better.\nB: I can send you an article that explains everything very well.",
       funFact:"Italo Calvino played with the narrator concept brilliantly. His novel 'Se una notte d'inverno un viaggiatore' opens with 'You are about to begin reading Italo Calvino's new novel,' making the reader the protagonist."},

      {type:"mc",
       q:"Come si chiama un evento improvviso e inaspettato nella trama di un romanzo?",
       opts:["Un colpo di scena","Un personaggio","Un narratore","Un verso"],
       ans:"Un colpo di scena",
       hint:"A sudden, shocking turn in the story that nobody saw coming. Literally a 'blow of scene' in Italian."},

      {type:"teach", trg:"la metafora", src:"the metaphor", pos:"noun", gender:"f",
       note:"Feminine noun. Plural: le metafore.\nA figure of speech that compares without using 'like' or 'as.'",
       example:"A: La vita e un viaggio: ecco una metafora classica.\nB: La letteratura ne e piena.\nA: Hai chiesto consiglio a qualcuno?\nB: Si, al mio amico Luca. Lui ha esperienza.\nA: Che ruolo gioca la tecnologia in tutto questo?\nB: Fondamentale, sta trasformando completamente il settore.",
       exampleSrc:"A: Life is a journey: that is a classic metaphor.\nB: Literature is full of them.\nA: Did you ask anyone for advice?\nB: Yes, my friend Luca. He has experience.\nA: What role does technology play in all this?\nB: A fundamental one, it is completely transforming the sector.",
       funFact:"Dante's entire Commedia is an extended metaphor for the soul's journey. Italian literary criticism distinguishes 'metafora' from 'similitudine' (simile, which uses 'come' = like/as)."},

      {type:"teach", trg:"il simbolo", src:"the symbol", pos:"noun", gender:"m",
       note:"Masculine noun. Plural: i simboli.\n'Valore simbolico' = symbolic value. 'Simbolismo' = symbolism (literary movement).",
       example:"A: La foresta e un simbolo dell'ignoto.\nB: Dante la usa all'inizio dell'Inferno.\nA: Ne parleremo domani?\nB: Certo, con calma e senza fretta.\nA: Non avevo mai pensato a questo aspetto.\nB: E un punto di vista che molti trascurano, in effetti.",
       exampleSrc:"A: The forest is a symbol of the unknown.\nB: Dante uses it at the beginning of the Inferno.\nA: Shall we talk about it tomorrow?\nB: Of course, calmly and without rush.\nA: I had never thought about this aspect.\nB: It is a point of view that many overlook, in fact.",
       funFact:"The 'selva oscura' (dark forest) opening Dante's Inferno is perhaps the most analyzed symbol in Italian literature. It represents sin, confusion, and the soul's distance from God."},

      {type:"fb",
       s:"La {1} del romanzo e complessa, con molti colpi di scena.",
       a:["trama"],
       opts:["trama","metafora","poesia","narrativa"],
       hint:"The sequence of events in a story. What happens from beginning to end, including all the twists.",
       sSrc:"The {1} of the novel is complex, with many plot twists."},

      {type:"teach", trg:"l'ambientazione", src:"the setting", pos:"noun", gender:"f",
       note:"Feminine noun. The time and place where a story takes place.\nFrom 'ambientare' (to set a story in a location).",
       example:"A: L'ambientazione del romanzo e la Sicilia degli anni Cinquanta.\nB: Si sente il calore e la tensione dell'epoca.\nA: Come va adesso?\nB: Molto meglio di prima, grazie.\nA: E un argomento che mi sta a cuore.\nB: Si vede, e bello avere questa passione.",
       exampleSrc:"A: The setting of the novel is 1950s Sicily.\nB: You can feel the heat and tension of the era.\nA: How is it going now?\nB: Much better than before, thanks.\nA: It is a topic I care about deeply.\nB: One can tell, it is nice to have that passion.",
       funFact:"Italian literature is deeply tied to place. Verga's Sicily, Pavese's Piedmont hills, Ferrante's Naples: each author's work is inseparable from its 'ambientazione.' The landscape becomes almost a character itself."},

      {type:"teach", trg:"il tema", src:"the theme", pos:"noun", gender:"m",
       note:"Masculine noun. Plural: i temi.\n'Tema centrale' = central theme. Also means 'essay' in school contexts.",
       example:"A: Il tema principale del romanzo e la solitudine.\nB: Ogni personaggio la vive in modo diverso.\nA: Lo fai spesso?\nB: Almeno una volta alla settimana.\nA: Mi piacerebbe saperne di piu.\nB: Con piacere, possiamo continuare la prossima volta.",
       exampleSrc:"A: The main theme of the novel is loneliness.\nB: Each character experiences it differently.\nA: Do you do it often?\nB: At least once a week.\nA: I would like to know more.\nB: With pleasure, we can continue next time.",
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
       example:"A: Chi e il tuo autore italiano preferito?\nB: Italo Calvino, senza dubbio.\nA: Ci sono alternative?\nB: Alcune, ma questa mi sembra la migliore.\nA: C'e una soluzione realistica?\nB: Non semplice, ma con la collaborazione di tutti e possibile.",
       exampleSrc:"A: Who is your favorite Italian author?\nB: Italo Calvino, without a doubt.\nA: Are there alternatives?\nB: Some, but this one seems the best to me.\nA: Is there a realistic solution?\nB: Not simple, but with everyone's collaboration it is possible.",
       funFact:"Six Italian authors have won the Nobel Prize for Literature: Carducci, Deledda, Pirandello, Quasimodo, Montale, and Fo. Italy ranks fourth globally for literary Nobel prizes."},

      {type:"teach", trg:"l'editore", src:"the publisher", pos:"noun", gender:"m",
       note:"Masculine noun. Feminine: l'editrice.\n'Casa editrice' = publishing house. 'L'edizione' = the edition.",
       example:"A: Quale editore ha pubblicato il romanzo?\nB: Einaudi, una delle case editrici piu prestigiose.\nA: Quanto ci vuole?\nB: Di solito circa un'ora, non di piu.\nA: Ne hai discusso con altri colleghi?\nB: Si, e il consenso generale e che serve un intervento strutturale.",
       exampleSrc:"A: Which publisher published the novel?\nB: Einaudi, one of the most prestigious publishing houses.\nA: How long does it take?\nB: Usually about an hour, no more.\nA: Have you discussed it with other colleagues?\nB: Yes, and the general consensus is that structural intervention is needed.",
       funFact:"Italian publishing is concentrated in Milan and Turin. Einaudi, Mondadori, Feltrinelli, and Adelphi are the major houses. Feltrinelli bookshops, with their red logos, are cultural landmarks in every Italian city."},

      {type:"teach", trg:"il capolavoro", src:"the masterpiece", pos:"noun", gender:"m",
       note:"Masculine noun. Plural: i capolavori.\nLiterally 'head-work' or 'chief work.' The finest work of an artist.",
       example:"A: Il Gattopardo e considerato un capolavoro della letteratura italiana.\nB: Tomasi di Lampedusa lo scrisse poco prima di morire.\nA: E successo all'improvviso?\nB: Si, non me lo aspettavo per niente.\nA: Cosa si potrebbe fare di diverso?\nB: Investire di piu nella formazione e nella prevenzione.",
       exampleSrc:"A: The Leopard is considered a masterpiece of Italian literature.\nB: Tomasi di Lampedusa wrote it shortly before dying.\nA: Did it happen suddenly?\nB: Yes, I did not expect it at all.\nA: What could be done differently?\nB: Invest more in education and prevention.",
       funFact:"'Capolavoro' originally meant the final piece a medieval craftsman produced to earn the title of master ('capo' = head, 'lavoro' = work). The term migrated from artisan workshops to the world of art and literature."},

      {type:"teach", trg:"la recensione", src:"the review", pos:"noun", gender:"f",
       note:"Feminine noun. Plural: le recensioni.\n'Scrivere una recensione' = to write a review. Used for books, films, restaurants.",
       example:"A: La recensione sul giornale era molto positiva.\nB: Ha convinto molti lettori a comprare il libro.\nA: E una bella opportunita.\nB: Sono d'accordo, non voglio perdermela.\nA: E un problema anche in altri settori?\nB: Si, purtroppo e trasversale e riguarda molti ambiti.",
       exampleSrc:"A: The review in the newspaper was very positive.\nB: It convinced many readers to buy the book.\nA: It is a great opportunity.\nB: I agree, I do not want to miss it.\nA: Is it a problem in other sectors too?\nB: Yes, unfortunately it cuts across many areas.",
       funFact:"Italy's most influential literary supplement is the 'Tuttolibri' section of La Stampa newspaper. Online, blogs and social media have democratized book reviewing, challenging traditional literary gatekeepers."},

      {type:"mc",
       q:"Come si chiama l'opera migliore e piu famosa di un autore?",
       opts:["Il capolavoro","La recensione","L'edizione","Il racconto"],
       ans:"Il capolavoro",
       hint:"Literally 'head-work' or 'chief work.' The crowning achievement in an artist's career."},

      {type:"teach", trg:"il lettore", src:"the reader", pos:"noun", gender:"m",
       note:"Masculine noun. Feminine: la lettrice.\nPlural: i lettori / le lettrici. 'Lettore accanito' = avid reader.",
       example:"A: L'Italia ha pochi lettori rispetto ad altri paesi europei.\nB: Solo il 40% degli italiani legge almeno un libro all'anno.\nA: Mi fa piacere sentirlo.\nB: Si, le cose stanno andando bene.\nA: Qual e l'opinione degli esperti?\nB: Ci sono posizioni diverse, ma la maggioranza concorda su un punto.",
       exampleSrc:"A: Italy has few readers compared to other European countries.\nB: Only 40% of Italians read at least one book per year.\nA: I am glad to hear it.\nB: Yes, things are going well.\nA: What is the experts' opinion?\nB: There are different positions, but the majority agrees on one point.",
       funFact:"Italy has one of the lowest reading rates in Western Europe. The divide is regional: northern Italians read significantly more than southerners. 'Non-lettori' (non-readers) are a constant concern for publishers and educators."},

      {type:"teach", trg:"il genere", src:"the genre", pos:"noun", gender:"m",
       note:"Masculine noun. Plural: i generi.\n'Genere letterario' = literary genre. Also means 'gender' and 'type.'",
       example:"A: Che genere di libri preferisci?\nB: Mi piacciono i gialli e la fantascienza.\nA: Hai altri programmi?\nB: No, per adesso mi concentro su questo.\nA: E un fenomeno recente?\nB: Non proprio, ha radici che risalgono a decenni fa.",
       exampleSrc:"A: What genre of books do you prefer?\nB: I like detective fiction and science fiction.\nA: Do you have other plans?\nB: No, for now I am focusing on this.\nA: Is it a recent phenomenon?\nB: Not exactly, it has roots that go back decades.",
       funFact:"Italian uses color-based names for some genres: 'giallo' (yellow) for mystery, 'nero' (black) for crime/noir, 'rosa' (pink) for romance. These names come from the cover colors used by Mondadori's paperback series."},

      {type:"fb",
       s:"La {1} del critico ha stroncato il nuovo romanzo.",
       a:["recensione"],
       opts:["recensione","narrativa","poesia","trama"],
       hint:"A critical evaluation of a book, film, or restaurant published in a newspaper or online. A professional opinion piece.",
       sSrc:"The critic's {1} tore apart the new novel."},

      {type:"teach", trg:"il capitolo", src:"the chapter", pos:"noun", gender:"m",
       note:"Masculine noun. Plural: i capitoli.\n'Leggere un capitolo' = to read a chapter. Also used figuratively: 'un nuovo capitolo della vita.'",
       example:"A: A che capitolo sei arrivato?\nB: Al decimo. La storia sta diventando avvincente.\nA: Come posso aiutare?\nB: Potresti darmi una mano domani pomeriggio.\nA: Possiamo approfondire questo aspetto?\nB: Certo, e un tema che merita una discussione piu ampia.",
       exampleSrc:"A: Which chapter have you reached?\nB: The tenth. The story is becoming gripping.\nA: How can I help?\nB: You could give me a hand tomorrow afternoon.\nA: Can we explore this aspect further?\nB: Of course, it is a topic that deserves a broader discussion.",
       funFact:"Manzoni divided 'I Promessi Sposi' into 38 chapters, each opening with a now-iconic sentence. Italian students can often quote 'Quel ramo del lago di Como' (That branch of Lake Como) from chapter one by heart."},

      {type:"teach", trg:"la citazione", src:"the quotation / quote", pos:"noun", gender:"f",
       note:"Feminine noun. Plural: le citazioni.\n'Citare' (verb) = to quote. 'Fuori contesto' = out of context.",
       example:"A: Questa citazione di Leopardi e bellissima.\nB: 'L'infinito' ha versi indimenticabili.\nA: Ne vale la pena?\nB: Decisamente si, te lo consiglio.\nA: C'e qualcosa che mi sfugge?\nB: Forse il fatto che il contesto storico e molto complesso.",
       exampleSrc:"A: This quotation from Leopardi is beautiful.\nB: 'L'infinito' has unforgettable lines.\nA: Is it worth it?\nB: Definitely yes, I recommend it.\nA: Am I missing something?\nB: Perhaps the fact that the historical context is very complex.",
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
    ,{type:"match",pairs:[{trg:"la narrativa",src:"the fiction / narrative prose"},{trg:"il verso",src:"the verse / line of poetry"},{trg:"il colpo di scena",src:"the plot twist"},{trg:"il capitolo",src:"the chapter"}]}]},

    // ─── Lesson 4: Verbi avanzati ───
    {id:"itv2_u28l_b2v", title:"Verbi avanzati", icon:"📚", xp:15, board:true, steps:[
      {type:"intro", title:"B2 Advanced Verbs",
       desc:"Learn 7 essential B2 Italian verbs for academic and formal writing: to argue, to analyze, to criticize, to demonstrate, to illustrate, to underline, to contest. Essential for CILS B2/C1 tasks.",
       goals:["Master 7 advanced B2 verbs","Use them in formal writing","Structure academic arguments"]},

      {type:"teach", trg:"argomentare", src:"to argue (a case) / to present arguments", pos:"verb", gender:null,
       note:"Regular -are verb. Used in academic and formal contexts to mean presenting a reasoned case, not quarreling.",
       example:"A: Come e il tuo saggio?\nB: Ho cercato di argomentare ogni punto in modo chiaro.\nA: Bene. Un saggio deve argomentare con esempi.\nB: Si, ho lavorato molto sulla struttura.",
       exampleSrc:"A: How is your essay?\nB: I tried to argue each point in a clear way.\nA: Good. An essay must argue with examples.\nB: Yes, I worked hard on the structure.",
       funFact:"From Latin 'argumentare.' The noun 'argomento' means both 'argument' and 'topic/subject' in Italian, so context determines the meaning."},

      {type:"teach", trg:"analizzare", src:"to analyze", pos:"verb", gender:null,
       note:"Regular -are verb. Core verb for academic writing, literary criticism, and formal discourse.",
       example:"A: Cosa bisogna fare per la tesi?\nB: Devi analizzare la trama e il tema del romanzo.\nA: E difficile scegliere da dove iniziare.\nB: Inizia dal personaggio principale.",
       exampleSrc:"A: What do you need to do for the thesis?\nB: You have to analyze the plot and the theme of the novel.\nA: It is difficult to choose where to start.\nB: Start from the main character.",
       funFact:"'Analizzare' entered Italian via French 'analyser' from Greek 'analyein' (to unloose). Analysis literally means breaking something apart to understand it."},

      {type:"teach", trg:"criticare", src:"to criticize / to critique", pos:"verb", gender:null,
       note:"Regular -are verb. Note the spelling: the hard 'c' sound is kept before vowel endings. Used both for literary criticism and negative judgment.",
       example:"A: Il professore ha criticato il mio saggio.\nB: In che senso? Ha detto che era sbagliato?\nA: No, ha criticato solo la struttura.\nB: Allora e un commento utile, non un problema grande.",
       exampleSrc:"A: The professor critiqued my essay.\nB: In what sense? Did he say it was wrong?\nA: No, he only criticized the structure.\nB: Then it is useful feedback, not a big problem.",
       funFact:"Literary criticism (la critica letteraria) is a respected academic discipline in Italy. Great critics like Benedetto Croce shaped how Italians read their own literature."},

      {type:"teach", trg:"dimostrare", src:"to demonstrate / to prove", pos:"verb", gender:null,
       note:"Regular -are verb. Stronger than 'mostrare' (to show): dimostrare implies logical proof or evidence, not just display.",
       example:"A: Riesci a dimostrare la tua tesi?\nB: Si, ho trovato tre citazioni molto chiare nel romanzo.\nA: Ottimo. Usa le citazioni nel saggio.\nB: Le aggiungo subito nel capitolo due.",
       exampleSrc:"A: Can you demonstrate your thesis?\nB: Yes, I found three very clear quotations in the novel.\nA: Excellent. Use the quotations in the essay.\nB: I will add them right away in chapter two.",
       funFact:"'Dimostrare' and English 'demonstrate' both come from Latin 'demonstrare' (to point out fully). In Italian, a math proof is called 'una dimostrazione.'"},

      {type:"teach", trg:"illustrare", src:"to illustrate / to exemplify", pos:"verb", gender:null,
       note:"Regular -are verb. In academic Italian, 'illustrare' means to clarify or explain with examples, not just to draw pictures.",
       example:"A: Puoi illustrare con un esempio?\nB: Certo. Il tema della solitudine si vede nella trama del romanzo.\nA: Molto chiaro.\nB: Gli esempi rendono tutto piu facile da capire.",
       exampleSrc:"A: Can you illustrate with an example?\nB: Of course. The theme of loneliness can be seen in the plot of the novel.\nA: Very clear.\nB: Examples make everything easier to understand.",
       funFact:"From Latin 'illustrare' (to light up, to make bright). When you illustrate a point, you are literally shedding light on it."},

      {type:"teach", trg:"sottolineare", src:"to underline / to emphasize", pos:"verb", gender:null,
       note:"Regular -are verb. Literally 'to underline' but figuratively means to stress or highlight the importance of something. Very common in academic and journalistic writing.",
       example:"A: Cosa vuoi sottolineare nel saggio?\nB: Voglio sottolineare il tema del romanzo e il suo simbolo centrale.\nA: Hai ragione, e un punto importante.\nB: Si, lo sottolineo nel capitolo finale.",
       exampleSrc:"A: What do you want to emphasize in the essay?\nB: I want to underline the theme of the novel and its central symbol.\nA: You are right, it is an important point.\nB: Yes, I will underline it in the final chapter.",
       funFact:"'Sottolineare' literally means 'to underline' (sotto = under, linea = line). Students in Italy still physically underline key passages in textbooks, so the literal and figurative meanings overlap naturally."},

      {type:"teach", trg:"contestare", src:"to contest / to challenge / to dispute", pos:"verb", gender:null,
       note:"Regular -are verb. Means to formally challenge or dispute a claim, decision, or idea. Stronger than 'criticare': contestare implies active opposition.",
       example:"A: Hai letto la recensione?\nB: Si, ma contesto la sua interpretazione del personaggio.\nA: In che senso la contesti?\nB: Non vede il tema centrale del romanzo.",
       exampleSrc:"A: Did you read the review?\nB: Yes, but I contest its interpretation of the character.\nA: In what sense do you contest it?\nB: It does not see the central theme of the novel.",
       funFact:"'Contestare' became prominent in Italian during the 1968 student protests ('la contestazione'). Today it is used in both legal contexts (to dispute a charge) and intellectual debate."},

      {type:"tip", title:"Academic Italian: Verbi chiave",
       text:"These 7 verbs are the backbone of formal academic writing in Italian.\nUse them to: argue a position (argomentare), analyze evidence (analizzare), critique a work (criticare), prove a claim (dimostrare), give examples (illustrare), emphasize key ideas (sottolineare), and challenge interpretations (contestare).\nCILS B2/C1 writing tasks explicitly reward candidates who use these verbs accurately and in context.",
       deepDive:"Tone matters: 'criticare' is neutral in academic Italian (literary criticism is a respected field), but in everyday speech it can sound negative. Use 'analizzare' or 'contestare' when you want to sound more precise and less judgmental.\nFor essay writing, a classic structure is: enunciare la tesi (state the thesis), argomentare con prove (argue with evidence), illustrare con esempi (illustrate with examples), contestare le obiezioni (contest objections), and sottolineare la conclusione (emphasize the conclusion)."},

      {type:"mc",
       q:"Which verb means to formally challenge or dispute a claim?",
       opts:["illustrare","argomentare","contestare","sottolineare"],
       ans:"contestare",
       hint:"This verb implies active opposition. It became prominent during the 1968 Italian student movement."},

      {type:"mc",
       q:"Il professore ha ___ la tesi con tre esempi storici.",
       opts:["criticato","illustrato","analizzato","sottolineato"],
       ans:"illustrato",
       hint:"The verb that means 'to clarify or exemplify with examples.' From Latin meaning 'to light up.'"},

      {type:"fb",
       s:"Per la tesi, devi {1} almeno tre romanzi del Novecento.",
       a:["analizzare"],
       opts:["analizzare","illustrare","contestare","sottolineare"],
       hint:"The core academic verb for breaking down a text or evidence into its parts. Comes from Greek 'to unloose.'",
       sSrc:"For the thesis, you have to {1} at least three twentieth-century novels."},

      {type:"fb",
       s:"Nella conclusione, voglio {1} che il tema del romanzo e ancora attuale.",
       a:["sottolineare"],
       opts:["sottolineare","argomentare","contestare","dimostrare"],
       hint:"The verb that literally means 'to underline' but figuratively means to emphasize or stress an idea.",
       sSrc:"In the conclusion, I want to {1} that the theme of the novel is still relevant today."},

      {type:"match", pairs:[
        {trg:"argomentare", src:"to argue / present a case"},
        {trg:"dimostrare", src:"to prove / demonstrate"},
        {trg:"contestare", src:"to contest / challenge"},
        {trg:"illustrare", src:"to illustrate / exemplify"},
        {trg:"sottolineare", src:"to emphasize / underline"}
      ]},

      {type:"mc",
       q:"'Dimostrare' and 'mostrare' are related, but 'dimostrare' implies:",
       opts:["showing something visually","logical proof or evidence","drawing a picture","giving a speech"],
       ans:"logical proof or evidence",
       hint:"'Dimostrare' is stronger than 'mostrare.' It goes beyond showing — it establishes a claim through reasoning. A math 'dimostrazione' is a formal derivation."},

      {type:"fb",
       s:"Bisogna {1} ogni saggio prima di pubblicarlo.",
       a:["criticare"],
       opts:["criticare","illustrare","argomentare","contestare"],
       hint:"The verb meaning 'to critique' or 'to give critical feedback.' Note the hard 'c' sound before each ending.",
       sSrc:"One must {1} every essay before publishing it."}
    ]}
  ,
  BATCH8_L1,
  BATCH7_L1,
  BATCH6_L1,
  BATCH5_L02,
  BATCH5_L01,
  BATCH3_L02,
  BATCH3_L01,
  EXP_L4,
  EXP_L5,
  EXP_L6
]
};

export default UNIT_28;
