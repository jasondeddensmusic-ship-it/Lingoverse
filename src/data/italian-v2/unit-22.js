// Italian V2 Unit 22. La cultura italiana (Italian Culture) (B1.4)
import BATCH8_L1 from './_batch8_u22_L01.js';
import BATCH7_L1 from './_batch7_u22_L01.js';
import BATCH6_L1 from './_batch6_u22_L01.js';
import BATCH5_L02 from './_batch5_u22_L02.js';
import BATCH5_L01 from './_batch5_u22_L01.js';
import BATCH3_L02 from './_batch3_u22_L02.js';
import BATCH3_L01 from './_batch3_u22_L01.js';
import EXP_L4 from './_temp_u22_expand_L01.js';import EXP_L5 from './_temp_u22_expand_L02.js';import EXP_L6 from './_temp_u22_expand_L03.js';
import COVERAGE_U22 from './_coverage_u22.js';
// CILS/CELI B1 aligned. Arts, music, cinema vocabulary.

const UNIT_22 = {
  n:22, lang:"it", srcLang:"en", track:"v2",
  title:"La cultura italiana", sub:"Arts, Music & Cinema",
  icon:"🎭", level:"B1.4", color:"#7B5EE8",
  lessons:[
    {id:"itv2_u22l1", title:"Le arti", icon:"🎨", xp:15, board:true, steps:[
      {type:"intro", title:"Le arti",
       desc:"Discover the vocabulary of Italian visual arts. From Renaissance frescoes to modern galleries, Italy's artistic heritage is unmatched and deeply woven into everyday language.",
       goals:["Name art forms and artistic works","Describe artworks and exhibitions","Discuss Italy's artistic heritage"]},

      {type:"teach", trg:"l'opera", src:"the work (of art) / the opera", pos:"noun", gender:"f",
       note:"Feminine. Plural: le opere. From Latin 'opera' (work).\n'Opera d'arte' = work of art. 'Opera lirica' = opera.",
       example:"A: Quale opera preferisci?\nB: La Traviata di Verdi e la mia preferita.\nA: Lo fai spesso?\nB: Almeno una volta alla settimana.",
       exampleSrc:"A: Which opera do you prefer?\nB: La Traviata by Verdi is my favorite.\nA: Do you do it often?\nB: At least once a week.",
       funFact:"'Opera' means both 'work' and the musical genre. Italy invented opera in Florence around 1600. The first opera is generally considered 'Dafne' by Jacopo Peri (1598). Italian opera vocabulary has become universal: soprano, alto, tenor, bass, libretto, bravo are all Italian words used worldwide."},

      {type:"teach", trg:"l'affresco", src:"the fresco", pos:"noun", gender:"m",
       note:"Masculine. From 'a fresco' (on fresh plaster).\nPainting done on wet plaster that becomes part of the wall.",
       example:"A: L'affresco di Michelangelo e incredibile.\nB: La Cappella Sistina e un capolavoro.\nA: Ci sono alternative?\nB: Alcune, ma questa mi sembra la migliore.",
       exampleSrc:"A: Michelangelo's fresco is incredible.\nB: The Sistine Chapel is a masterpiece.\nA: Are there alternatives?\nB: Some, but this one seems the best to me.",
       funFact:"'Affresco' literally means 'on fresh' because the painter works on wet (fresh) plaster. The pigment bonds with the wall as it dries, making frescoes extremely durable. Michelangelo painted the Sistine Chapel ceiling lying on his back on scaffolding for four years (1508-1512)."},

      {type:"teach", trg:"la scultura", src:"the sculpture", pos:"noun", gender:"f",
       note:"Feminine. From Latin 'sculptura' (carving).\n'Scolpire' = to sculpt. 'Scultore/scultrice' = sculptor.",
       example:"A: Hai visto la scultura di Bernini?\nB: Si, il Ratto di Proserpina e magnifico.\nA: Quanto ci vuole?\nB: Di solito circa un'ora, non di piu.",
       exampleSrc:"A: Have you seen Bernini's sculpture?\nB: Yes, the Rape of Proserpina is magnificent.\nA: How long does it take?\nB: Usually about an hour, no more.",
       funFact:"Italy has more UNESCO World Heritage sites than any other country, and many feature sculptures. Bernini's marble works are so lifelike that the 'skin' of his figures appears to yield under pressure. His ability to make cold stone look like soft flesh is considered one of art history's greatest achievements."},

      {type:"teach", trg:"il capolavoro", src:"the masterpiece", pos:"noun", gender:"m",
       note:"Masculine. Compound: 'capo' (head, chief) + 'lavoro' (work).\nLiterally 'head-work' = the finest piece.",
       example:"A: Questo quadro e un vero capolavoro.\nB: L'artista ha lavorato cinque anni.\nA: E successo all'improvviso?\nB: Si, non me lo aspettavo per niente.",
       exampleSrc:"A: This painting is a true masterpiece.\nB: The artist worked for five years.\nA: Did it happen suddenly?\nB: Yes, I did not expect it at all.",
       funFact:"'Capolavoro' literally means 'head-work' or 'chief work.' In medieval guilds, an apprentice had to create a 'capolavoro' (masterwork) to become a master craftsman. The word evolved to mean any supreme achievement. Today Italians use it loosely: even a great meal can be called 'un capolavoro!'"},

      {type:"teach", trg:"la mostra", src:"the exhibition / show", pos:"noun", gender:"f",
       note:"Feminine. From 'mostrare' (to show).\n'Mostra d'arte' = art exhibition. 'In mostra' = on display.",
       example:"A: C'e una mostra di Caravaggio al museo.\nB: Andiamo sabato? Vorrei vederla.\nA: E una bella opportunita.\nB: Sono d'accordo, non voglio perdermela.",
       exampleSrc:"A: There is a Caravaggio exhibition at the museum.\nB: Shall we go Saturday? I would like to see it.\nA: It is a great opportunity.\nB: I agree, I do not want to miss it.",
       funFact:"Italy hosts some of the world's most prestigious art events. The Venice Biennale (Biennale di Venezia) is the oldest international art exhibition, running since 1895. Italian museums charge modest fees compared to other countries, reflecting the belief that art belongs to everyone."},
{type:"match",pairs:[{trg:"l'affresco",src:"the fresco"},{trg:"la scultura",src:"the sculpture"},{trg:"il capolavoro",src:"the masterpiece"},{trg:"la mostra",src:"the exhibition / show"}]},

      {type:"teach", trg:"la galleria", src:"the gallery", pos:"noun", gender:"f",
       note:"Feminine. From Medieval Latin 'galeria' (a long hall).\nAlso means 'tunnel' or 'shopping arcade.'",
       example:"A: La Galleria degli Uffizi e fantastica.\nB: Bisogna prenotare in anticipo.\nA: Mi fa piacere sentirlo.\nB: Si, le cose stanno andando bene.",
       exampleSrc:"A: The Uffizi Gallery is fantastic.\nB: You need to book in advance.\nA: I am glad to hear it.\nB: Yes, things are going well.",
       funFact:"'Galleria' has three meanings in Italian: an art gallery (Galleria degli Uffizi), a covered shopping arcade (Galleria Vittorio Emanuele II in Milan), and a road tunnel (la galleria autostradale). All share the idea of a long enclosed space. The Uffizi in Florence holds the world's finest Renaissance collection."},

      {type:"teach", trg:"il quadro", src:"the painting / picture", pos:"noun", gender:"m",
       note:"Masculine. From Latin 'quadrus' (square, frame).\n'Dipingere un quadro' = to paint a picture.",
       example:"A: Chi ha dipinto questo quadro?\nB: E di Botticelli. Si chiama La Primavera.\nA: Hai altri programmi?\nB: No, per adesso mi concentro su questo.",
       exampleSrc:"A: Who painted this picture?\nB: It is by Botticelli. It is called La Primavera.\nA: Do you have other plans?\nB: No, for now I am focusing on this.",
       funFact:"'Quadro' literally means 'square' or 'frame,' referring to the frame around a painting. 'Dipinto' is the more technical term for a painting as an artwork. In everyday speech, Italians use 'quadro' for any framed picture, even photographs on the wall."},

      // Quiz steps
      {type:"mc", q:"What does 'l'opera' mean in Italian?",
       opts:["Both a work of art and the musical genre","Only the musical genre","Only a painting","A theater building"],
       ans:"Both a work of art and the musical genre",
       hint:"From Latin 'opera' (labor, effort). Italy invented the lyric stage form around 1600 in Florence. The word covers the creative product and the performance tradition."},

      {type:"fb", s:"L'{1} di Michelangelo nella Cappella Sistina e incredibile.",
       a:["affresco"],
       opts:["affresco","opera","scultura","quadro"],
       hint:"This technique involves painting on wet plaster. The word literally means 'on fresh.' The result becomes part of the wall.",
       sSrc:"Michelangelo's {1} in the Sistine Chapel is incredible."},

      {type:"match", pairs:[
        {trg:"l'opera", src:"the work / opera"},
        {trg:"l'affresco", src:"the fresco"},
        {trg:"la scultura", src:"the sculpture"},
        {trg:"il capolavoro", src:"the masterpiece"},
        {trg:"la mostra", src:"the exhibition"}
      ]},

      {type:"mc", q:"What does 'capolavoro' literally mean?",
       opts:["Beautiful and refined work","Head-work (chief work)","Difficult and laborious work","A craftsman's first work"],
       ans:"Head-work (chief work)",
       hint:"Compound of 'capo' (h.../c...) and 'lavoro' (w...). Originally the test piece that made an apprentice a master craftsman."},

      {type:"fb", s:"C'e una {1} di Caravaggio al museo.",
       a:["mostra"],
       opts:["mostra","galleria","scultura","opera"],
       hint:"A temporary display of artworks at a museum or gallery. From 'to show' in Italian. These can last weeks or months.",
       sSrc:"There is a Caravaggio {1} at the museum."},

      {type:"mc", q:"What are the three meanings of 'galleria' in Italian?",
       opts:["Gallery and garden","Only art gallery","Art gallery, shopping arcade, and road tunnel","Gallery and restaurant"],
       ans:"Art gallery, shopping arcade, and road tunnel",
       hint:"All three share the idea of a long enclosed space: one for paintings, one for shops, one for vehicles underground."},

      {type:"fb", s:"Chi ha dipinto questo {1}?",
       a:["quadro"],
       opts:["quadro","affresco","capolavoro","mostra"],
       hint:"A framed painting on a wall. From Latin 'quadrus' (square), referring to the frame around the picture.",
       sSrc:"Who painted this {1}?"},

      {type:"mc", q:"Which Italian city hosts the oldest international art exhibition?",
       opts:["Milan (the Triennale)","Rome (the Quadriennale)","Florence (the Biennale)","Venice (the Biennale)"],
       ans:"Venice (the Biennale)",
       hint:"The B... di Venezia has been running since 1895. It covers art, architecture, cinema, dance, and music."}
    ]},

    {id:"itv2_u22l2", title:"La musica", icon:"🎵", xp:15, board:true, steps:[
      {type:"intro", title:"La musica",
       desc:"Explore Italian music vocabulary. From classical compositions to modern pop, music is central to Italian identity and has shaped musical language worldwide.",
       goals:["Name musical terms and instruments","Discuss concerts and performances","Understand Italian music's global influence"]},

      {type:"teach", trg:"la canzone", src:"the song", pos:"noun", gender:"f",
       note:"Feminine. From Latin 'cantio' (singing).\n'Cantare una canzone' = to sing a song.",
       example:"A: Qual e la tua canzone preferita?\nB: Mi piace molto 'Nel blu dipinto di blu.'\nA: Come posso aiutare?\nB: Potresti darmi una mano domani pomeriggio.",
       exampleSrc:"A: What is your favorite song?\nB: I really like 'Nel blu dipinto di blu.'\nA: How can I help?\nB: You could give me a hand tomorrow afternoon.",
       funFact:"'Nel blu dipinto di blu' (better known as 'Volare') by Domenico Modugno (1958) is the most famous Italian song worldwide. It won the first Grammy for Song of the Year. The Festival di Sanremo, Italy's annual song contest since 1951, remains the biggest music event in Italy and launched many international careers."},

      {type:"teach", trg:"il cantante", src:"the singer", pos:"noun", gender:"m",
       note:"Masculine. Feminine: la cantante (same form, different article).\nFrom 'cantare' (to sing).",
       example:"A: Chi e il tuo cantante preferito?\nB: Adoro Laura Pausini.\nA: Ne vale la pena?\nB: Decisamente si, te lo consiglio.",
       exampleSrc:"A: Who is your favorite singer?\nB: I love Laura Pausini.\nA: Is it worth it?\nB: Definitely yes, I recommend it.",
       funFact:"Italian singers like Laura Pausini, Andrea Bocelli, and Eros Ramazzotti are global stars who sing in multiple languages. Italy has a unique tradition where popular singers are called 'cantautori' (singer-songwriters) and are respected as serious artists, not just entertainers."},

      {type:"teach", trg:"il concerto", src:"the concert", pos:"noun", gender:"m",
       note:"Masculine. From Latin 'concertare' (to compete, to cooperate).\n'Andare a un concerto' = to go to a concert.",
       example:"A: Andiamo al concerto sabato sera?\nB: Si, ho gia i biglietti!\nA: E anche la mia opinione.\nB: Bene, allora siamo d'accordo su questo punto.",
       exampleSrc:"A: Shall we go to the concert Saturday night?\nB: Yes, I already have the tickets!\nA: That is my opinion too.\nB: Good, then we agree on this point.",
       funFact:"'Concerto' entered English directly from Italian. In music, it specifically means a composition for a solo instrument with orchestra. In everyday Italian, it simply means any live music performance. Italy's open-air summer concerts in ancient Roman amphitheaters are world-famous."},

      {type:"teach", trg:"lo strumento", src:"the instrument", pos:"noun", gender:"m",
       note:"Masculine. From Latin 'instrumentum' (tool).\n'Suonare uno strumento' = to play an instrument.",
       example:"A: Suoni qualche strumento?\nB: Suono il pianoforte e la chitarra.\nA: Dove lo hai scoperto?\nB: Su internet, in un articolo molto interessante.",
       exampleSrc:"A: Do you play any instrument?\nB: I play the piano and the guitar.\nA: Where did you discover it?\nB: On the internet, in a very interesting article.",
       funFact:"Many instrument names come from Italian: pianoforte (soft-loud), violoncello (small large viola), piccolo (small). The piano was invented in Florence by Bartolomeo Cristofori around 1700. He called it 'clavicembalo col piano e forte' (harpsichord with soft and loud)."},

      {type:"teach", trg:"la melodia", src:"the melody / tune", pos:"noun", gender:"f",
       note:"Feminine. From Greek 'melodia' (singing, song).\n'Una bella melodia' = a beautiful melody.",
       example:"A: Che bella melodia!\nB: Si, non riesco a togliermela dalla testa.\nA: E un buon segno.\nB: Si, sono ottimista per il futuro.",
       exampleSrc:"A: What a beautiful melody!\nB: Yes, I cannot get it out of my head.\nA: It is a good sign.\nB: Yes, I am optimistic about the future.",
       funFact:"Music terminology is overwhelmingly Italian because Italy dominated European music for centuries. Tempo, allegro, andante, forte, piano, crescendo, diminuendo, staccato, legato, a cappella are all Italian words used in every language by every musician worldwide."},
{type:"match",pairs:[{trg:"il cantante",src:"the singer"},{trg:"il concerto",src:"the concert"},{trg:"lo strumento",src:"the instrument"},{trg:"la melodia",src:"the melody / tune"}]},

      {type:"teach", trg:"il compositore", src:"the composer", pos:"noun", gender:"m",
       note:"Masculine. Feminine: la compositrice. From 'comporre' (to compose).\n'Verdi e un grande compositore' = Verdi is a great composer.",
       example:"A: Chi e il tuo compositore preferito?\nB: Amo la musica di Puccini.\nA: Che bello! Congratulazioni!\nB: Grazie mille, sono davvero contento.",
       exampleSrc:"A: Who is your favorite composer?\nB: I love Puccini's music.\nA: How wonderful! Congratulations!\nB: Thank you so much, I am really happy.",
       funFact:"Italy produced some of history's greatest composers: Vivaldi, Verdi, Puccini, Rossini, Donizetti, Bellini. Verdi's name became a political acronym during Italian unification: V.E.R.D.I. stood for 'Vittorio Emanuele Re D'Italia' (Victor Emmanuel King of Italy). Shouting 'Viva Verdi!' was secretly cheering for unification."},

      {type:"teach", trg:"il cantautore", src:"the singer-songwriter", pos:"noun", gender:"m",
       note:"Masculine. Feminine: la cantautrice.\nCompound: 'cantante' + 'autore' = singer + author.",
       example:"A: De Andre era un grande cantautore.\nB: Le sue canzoni sono poesia.\nA: C'e qualcosa che posso fare?\nB: Grazie, per adesso va tutto bene.",
       exampleSrc:"A: De Andre was a great singer-songwriter.\nB: His songs are poetry.\nA: Is there anything I can do?\nB: Thanks, for now everything is fine.",
       funFact:"The 'cantautore' tradition is a cornerstone of Italian culture. Fabrizio De Andre, Lucio Dalla, Francesco De Gregori, and Lucio Battisti are revered as poets who sang. Their lyrics are studied in schools alongside classical literature. Italy treats its singer-songwriters with a seriousness rarely seen elsewhere."},

      // Quiz steps
      {type:"mc", q:"What is 'la canzone' in Italian?",
       opts:["A song","A concert","A dance","An instrument"],
       ans:"A song",
       hint:"From Latin 'cantio' (singing). 'Cantare' means to sing. The Festival di Sanremo is Italy's biggest music competition."},

      {type:"fb", s:"Suoni qualche {1}?",
       a:["strumento"],
       opts:["strumento","concerto","canzone","melodia"],
       hint:"A physical device you play to make music. Many names for these come from Italian: pianoforte, violoncello, piccolo.",
       sSrc:"Do you play any {1}?"},

      {type:"match", pairs:[
        {trg:"la canzone", src:"the song"},
        {trg:"il cantante", src:"the singer"},
        {trg:"il concerto", src:"the concert"},
        {trg:"lo strumento", src:"the instrument"},
        {trg:"la melodia", src:"the melody"}
      ]},

      {type:"mc", q:"What is a 'cantautore'?",
       opts:["A classical composer","A singer-songwriter","A music teacher","A concert pianist"],
       ans:"A singer-songwriter",
       hint:"A compound word combining the performer and the creator into one role. This tradition is deeply respected in Italy as a form of poetry."},

      {type:"fb", s:"Amo la musica di Puccini. E un grande {1}.",
       a:["compositore"],
       opts:["compositore","cantante","cantautore","strumento"],
       hint:"Puccini wrote operas like La Boheme and Tosca. He created musical works, not performed them. From 'comporre' (to compose).",
       sSrc:"I love Puccini's music. He is a great {1}."},

      {type:"mc", q:"Why is music terminology overwhelmingly Italian?",
       opts:["Musicians prefer Italian food","Italian is the easiest language","Italy dominated European music for centuries","A treaty required it"],
       ans:"Italy dominated European music for centuries",
       hint:"From the Renaissance through the 18th century, the peninsula set the global standard in composition and performance. The vocabulary followed the prestige."},

      {type:"fb", s:"Che bella {1}! Non riesco a togliermela dalla testa.",
       a:["melodia"],
       opts:["melodia","canzone","opera","scultura"],
       hint:"A tune that you cannot stop humming. From Greek roots meaning 'song.' It refers specifically to the musical line, not the lyrics.",
       sSrc:"What a beautiful {1}! I cannot get it out of my head."},

      {type:"mc", q:"What was 'Viva Verdi!' secretly used for?",
       opts:["Starting a music festival","Celebrating a new opera","Ordering food at a restaurant","Cheering for Italian unification (V.E.R.D.I. = Vittorio Emanuele Re D'Italia)"],
       ans:"Cheering for Italian unification (V.E.R.D.I. = Vittorio Emanuele Re D'Italia)",
       hint:"The composer's name became an acronym for the future king. Shouting it in public was a coded political statement."}
    ]},

    {id:"itv2_u22l3", title:"Il cinema", icon:"🎬", xp:15, board:true, steps:[
      {type:"intro", title:"Il cinema",
       desc:"Learn Italian cinema vocabulary. Italy's film industry has produced some of cinema's greatest works and continues to shape global filmmaking culture.",
       goals:["Name film roles and production terms","Discuss movies and film festivals","Understand Italy's cinematic heritage"]},

      {type:"teach", trg:"il regista", src:"the director (film)", pos:"noun", gender:"m",
       note:"Masculine. Feminine: la regista (same form, different article).\nFrom 'regia' (direction, staging).",
       example:"A: Chi e il regista di questo film?\nB: Federico Fellini. E il suo capolavoro.\nA: Quando e successo?\nB: La settimana scorsa, di giovedi.",
       exampleSrc:"A: Who is the director of this film?\nB: Federico Fellini. It is his masterpiece.\nA: When did it happen?\nB: Last week, on Thursday.",
       funFact:"Italy produced legendary directors: Fellini, Visconti, De Sica, Antonioni, Pasolini, Bertolucci. Fellini's name became an English adjective: 'Felliniesque' means dreamlike, surreal, and extravagant. His film 'La Dolce Vita' (1960) gave the world the word 'paparazzi' (from a character named Paparazzo)."},

      {type:"teach", trg:"l'attore", src:"the actor", pos:"noun", gender:"m",
       note:"Masculine. Feminine: l'attrice. From Latin 'actor' (performer).\n'Attore protagonista' = lead actor.",
       example:"A: L'attore e molto bravo.\nB: Si, merita un premio.\nA: Chi altro lo sa?\nB: Per adesso solo noi due e la famiglia.",
       exampleSrc:"A: The actor is very talented.\nB: Yes, he deserves an award.\nA: Who else knows?\nB: For now just the two of us and the family.",
       funFact:"Italian cinema has a rich tradition of character actors. Roberto Benigni won the Best Actor Oscar for 'La vita e bella' (Life is Beautiful, 1997), famously climbing over chairs to reach the stage. Sophia Loren was the first person to win an Oscar for a foreign-language performance (1962)."},

      {type:"teach", trg:"la colonna sonora", src:"the soundtrack / film score", pos:"noun", gender:"f",
       note:"Feminine. Literally 'sound column.'\n'La colonna sonora del film' = the film's soundtrack.",
       example:"A: La colonna sonora e bellissima.\nB: E di Ennio Morricone.\nA: Lo faresti di nuovo?\nB: Assolutamente si, senza esitazione.",
       exampleSrc:"A: The soundtrack is beautiful.\nB: It is by Ennio Morricone.\nA: Would you do it again?\nB: Absolutely yes, without hesitation.",
       funFact:"Ennio Morricone composed over 500 film scores and is considered the greatest film composer of all time. His music for 'The Good, the Bad and the Ugly' and 'Cinema Paradiso' is instantly recognizable worldwide. He finally won an Oscar in 2016 for 'The Hateful Eight.'"},

      {type:"teach", trg:"il cortometraggio", src:"the short film", pos:"noun", gender:"m",
       note:"Masculine. Compound: 'corto' (short) + 'metraggio' (footage).\nOpposite: il lungometraggio (feature film).",
       example:"A: Ha girato un cortometraggio per il festival.\nB: Quanto dura?\nA: E costato molto?\nB: Meno di quanto pensassi, per fortuna.",
       exampleSrc:"A: He shot a short film for the festival.\nB: How long is it?\nA: Did it cost a lot?\nB: Less than I thought, fortunately.",
       funFact:"Many Italian directors started with short films. Italian film schools like the Centro Sperimentale di Cinematografia in Rome (founded 1935) are among Europe's oldest and most prestigious. Short films ('corti' for short) are a vital proving ground for new Italian talent."},

      {type:"teach", trg:"il festival", src:"the festival", pos:"noun", gender:"m",
       note:"Masculine. Invariable plural: i festival.\nBorrowed from English/French, but Italian film festivals are world-famous.",
       example:"A: Hai visto i film del festival di Venezia?\nB: Si, quest'anno c'erano film incredibili.\nA: Come hai saputo?\nB: Me l'ha detto un amico ieri sera.",
       exampleSrc:"A: Did you see the films from the Venice festival?\nB: Yes, this year there were incredible films.\nA: How did you find out?\nB: A friend told me last night.",
       funFact:"The Venice Film Festival (Mostra del Cinema di Venezia), founded in 1932, is the oldest film festival in the world, predating Cannes by seven years. Its top prize, the Leone d'Oro (Golden Lion), is one of cinema's most coveted awards."},
{type:"match",pairs:[{trg:"l'attore",src:"the actor"},{trg:"la colonna sonora",src:"the soundtrack / film score"},{trg:"il cortometraggio",src:"the short film"},{trg:"il festival",src:"the festival"}]},

      {type:"teach", trg:"girare", src:"to shoot (a film) / to turn", pos:"verb", gender:null,
       note:"Regular -are verb. 'Girare un film' = to shoot a film.\nAlso: 'girare a destra' = to turn right.",
       example:"A: Dove hanno girato il film?\nB: L'hanno girato a Roma, vicino al Colosseo.\nA: Cosa ne pensi?\nB: Secondo me e un'ottima scelta.",
       exampleSrc:"A: Where did they shoot the film?\nB: They shot it in Rome, near the Colosseum.\nA: What do you think?\nB: In my opinion it is an excellent choice.",
       funFact:"'Girare' literally means 'to turn,' referring to the turning of a film reel through the camera. The expression stuck even in the digital age. Cinecitta studios in Rome, built in 1937, is where most Italian films are made. It is often called 'the Hollywood on the Tiber.'"},

      {type:"teach", trg:"la sceneggiatura", src:"the screenplay / script", pos:"noun", gender:"f",
       note:"Feminine. From 'scena' (scene) + suffix.\n'Sceneggiatore' = screenwriter.",
       example:"A: La sceneggiatura e originale o adattata?\nB: E adattata da un romanzo.\nA: Pensi di continuare?\nB: Si, mi piace molto e voglio migliorare.",
       exampleSrc:"A: Is the screenplay original or adapted?\nB: It is adapted from a novel.\nA: Do you plan to continue?\nB: Yes, I like it a lot and I want to improve.",
       funFact:"Italian screenwriting has a rich tradition. Many Italian films are written by multiple writers collaborating, unlike Hollywood's single-writer model. The team approach produced masterpieces of neorealism. Cesare Zavattini, who wrote for De Sica, theorized that cinema should show ordinary people's real lives."},

      // Quiz steps
      {type:"mc", q:"What does 'il regista' mean?",
       opts:["The film director","The actor","The screenwriter","The producer"],
       ans:"The film director",
       hint:"From 'regia' (direction). Fellini, Visconti, and De Sica are among Italy's greatest in this role."},

      {type:"fb", s:"La {1} del film e di Ennio Morricone.",
       a:["colonna sonora"],
       opts:["colonna sonora","sceneggiatura","melodia","canzone"],
       hint:"The music that accompanies a film. Literally 'sound column.' Morricone composed over 500 of these.",
       sSrc:"The film's {1} is by Ennio Morricone."},

      {type:"match", pairs:[
        {trg:"il regista", src:"the director"},
        {trg:"l'attore", src:"the actor"},
        {trg:"la colonna sonora", src:"the soundtrack"},
        {trg:"il cortometraggio", src:"the short film"},
        {trg:"il festival", src:"the festival"}
      ]},

      {type:"mc", q:"Which is the oldest film festival in the world?",
       opts:["Cannes (1946)","Venice (1932)","Berlin (1951)","Toronto (1976)"],
       ans:"Venice (1932)",
       hint:"The Mostra del Cinema di Venezia predates all others. Its top prize is the Leone d'Oro (Golden Lion)."},

      {type:"fb", s:"Dove hanno {1} il film?",
       a:["girato"],
       opts:["girato","cantato","dipinto","scritto"],
       hint:"Where did they shoot the film? This verb literally means 'to turn,' from the turning of a film reel through a camera.",
       sSrc:"Where did they {1} the film?"},

      {type:"mc", q:"What word did Fellini's 'La Dolce Vita' give to the world?",
       opts:["Cinema verité","Bravo performance","Paparazzi","Prima donna diva"],
       ans:"Paparazzi",
       hint:"A character in the 1960 film was named Paparazzo, a pushy photographer. The plural became the universal word for celebrity photographers."},

      {type:"fb", s:"La {1} e adattata da un romanzo.",
       a:["sceneggiatura"],
       opts:["sceneggiatura","colonna sonora","scultura","mostra"],
       hint:"The written text of a film, adapted from a novel in this case. From 'scena' (scene).",
       sSrc:"The {1} is adapted from a novel."},

      {type:"mc", q:"What is Cinecitta?",
       opts:["A neorealist movie genre","A prestigious film festival award","A type of Italian cinema ticket","Rome's famous film studios"],
       ans:"Rome's famous film studios",
       hint:"Built in 1937 on the outskirts of the capital, it has hosted productions by Fellini, Zeffirelli, and many others. Often called 'the Hollywood on the Tiber.'"}
    ,{type:"match",pairs:[{trg:"girare",src:"to shoot (a film) / to turn"}]}]},

    {id:"itv2_u22l_b2_academic", title:"Linguaggio Accademico B2", icon:"🎓", xp:20, board:true, steps:[
      {type:"intro", title:"Academic Discourse B2", desc:"Ten B2 academic terms for debate, justification, and impact.", goals:["Use dibattere and giustificare in debate","Describe impact with l'impatto","Use nondimeno and altresì as connectors"]},
      {type:"teach", trg:"dibattere", src:"to debate / discuss", pos:"verb", gender:null,
       note:"Regular -ere verb. Io dibatto, tu dibatti.\nFormal register, used in parliament, academia.",
       example:"A: Dibattiamo il problema?\nB: Sì, ne parliamo oggi.",
       exampleSrc:"A: Shall we debate the problem?\nB: Yes, let us discuss it today.",
       funFact:"Dibattere shares a Latin root with English 'debate.' In Italian parliamentary speech, 'dibattito parlamentare' is the standard term for formal debate."},
      {type:"teach", trg:"giustificare", src:"to justify", pos:"verb", gender:null,
       note:"Regular -are verb. Io giustifico, tu giustifichi.\nGiustificare + infinitive/clause.",
       example:"A: Come giustifichi la tua idea?\nB: Con i dati del progetto.",
       exampleSrc:"A: How do you justify your idea?\nB: With the project data.",
       funFact:"Giustificare comes from Latin 'iustificare' (to make just). Italian academic writing uses 'è giustificato che' as a common formulation."},
      {type:"teach", trg:"enfatizzare", src:"to emphasize / stress", pos:"verb", gender:null,
       note:"Regular -are verb. Io enfatizzo, tu enfatizzi.\nAcademic register. Stronger than sottolineare.",
       example:"A: Voglio enfatizzare un punto.\nB: Prego, parla.",
       exampleSrc:"A: I want to emphasize a point.\nB: Please, speak.",
       funFact:"Enfatizzare comes from Greek 'emphasis' via Latin. Writers use 'vale la pena enfatizzare' as a transition phrase."},
      {type:"teach", trg:"l'impatto", src:"impact", pos:"noun", gender:"m",
       note:"Masculine. Plural: gli impatti.\nAvere impatto su + area.",
       example:"A: Qual è l'impatto della legge?\nB: L'impatto è molto grande.",
       exampleSrc:"A: What is the impact of the law?\nB: The impact is very large.",
       funFact:"L'impatto entered Italian in the 20th century. 'Impatto ambientale' (environmental impact) is a fixed legal term."},
      {type:"teach", trg:"la prospettiva", src:"perspective / viewpoint", pos:"noun", gender:"f",
       note:"Feminine. Plural: le prospettive.\nCambiare prospettiva = to change perspective.",
       example:"A: Qual è la tua prospettiva?\nB: Ho una nuova prospettiva.",
       exampleSrc:"A: What is your perspective?\nB: I have a new perspective.",
       funFact:"Prospettiva originally meant artistic perspective (3D drawing). In academic Italian it refers to any intellectual viewpoint."},
      {type:"teach", trg:"nondimeno", src:"nevertheless", pos:"adv", gender:null,
       note:"Formal connector. Synonyms: tuttavia, comunque.\nCommon in essays and written argument.",
       example:"A: Il progetto è difficile. Nondimeno, lo faremo.\nB: Siamo d'accordo.",
       exampleSrc:"A: The project is difficult. Nevertheless, we will do it.\nB: We agree.",
       funFact:"Nondimeno is a compound: non + di + meno, 'not of less.' Only used in formal writing."},
      {type:"teach", trg:"altresì", src:"furthermore / likewise", pos:"adv", gender:null,
       note:"Formal connector. Synonyms: inoltre, anche.\nUsed in academic and legal writing.",
       example:"A: Il piano è utile. Altresì, è economico.\nB: Due punti forti.",
       exampleSrc:"A: The plan is useful. Furthermore, it is affordable.\nB: Two strong points.",
       funFact:"Altresì comes from 'altro' + 'sì', 'otherwise also.' Almost exclusively written."},
      {type:"teach", trg:"rigoroso", src:"rigorous / strict", pos:"adj", gender:"m",
       note:"Masculine singular. Feminine: rigorosa. Plural: rigorosi/rigorose.\nUsed for methods, standards.",
       example:"A: Il lavoro è rigoroso?\nB: Sì, è molto rigoroso.",
       exampleSrc:"A: Is the work rigorous?\nB: Yes, it is very rigorous.",
       funFact:"Rigoroso shares its Latin root with 'rigor.' Italian academics praise a 'metodo rigoroso.'"},
      {type:"teach", trg:"preciso", src:"precise / accurate", pos:"adj", gender:"m",
       note:"Masculine. Feminine: precisa. Used for data, time, statements.",
       example:"A: La tua risposta è precisa?\nB: Sì, è molto precisa.",
       exampleSrc:"A: Is your answer precise?\nB: Yes, it is very precise.",
       funFact:"Preciso is also used in everyday speech, 'alle due precise' means 'at two o'clock sharp.'"},
      {type:"teach", trg:"complesso", src:"complex / complicated", pos:"adj", gender:"m",
       note:"Masculine. Feminine: complessa. Used for problems, situations, systems.",
       example:"A: Il problema è complesso?\nB: Sì, è molto complesso.",
       exampleSrc:"A: Is the problem complex?\nB: Yes, it is very complex.",
       funFact:"Complesso as a noun also means 'complex' (psychological) or a building complex. Context disambiguates."},
      {type:"tip", title:"Academic Italian: Formal Connectors",
       text:"Academic B2 Italian favors specific connectors:\n\nnondimeno, nevertheless (vs spoken 'comunque')\naltresì, furthermore (vs spoken 'anche')\ntuttavia, however\npertanto, therefore (formal)\n\nCILS B2 writing rewards the formal register.",
       deepDive:{title:"Impact and Perspective Pair",
        text:"In academic argument: 'Da una prospettiva economica, l'impatto è grande.' (From an economic perspective, the impact is large.) Core pattern for CILS B2 argumentative essays."}},
      {type:"mc", q:"Quale parola significa 'to justify'?",
       opts:["giustificare","enfatizzare","investigare","dibattere"],
       ans:"giustificare",
       hint:"Regular -are verb; shares Latin root with the English equivalent."},
      {type:"mc", q:"Quale connettore formale significa 'nevertheless'?",
       opts:["altresì","nondimeno","pertanto","invece"],
       ans:"nondimeno",
       hint:"Compound of 'not' + 'of' + 'less.' Formal written register only."},
      {type:"fb", s:"Voglio {1} un punto importante.", a:"enfatizzare", opts:["enfatizzare","dibattere","giustificare","girare"],
       hint:"Academic verb for stressing or underscoring.", sSrc:"I want to {1} an important point."},
      {type:"fb", s:"Il metodo è {1}.", a:"rigoroso", opts:["rigoroso","preciso","complesso","grande"],
       hint:"Adjective meaning strict or thorough, used for methods.", sSrc:"The method is {1}."},
      {type:"fb", s:"L'{1} della legge è molto grande.", a:"impatto", opts:["impatto","effetto","risultato","peso"],
       hint:"Masculine noun for a significant consequence.", sSrc:"The {1} of the law is very large."},
      {type:"fb", s:"Ho una {1} diversa sul problema.", a:"prospettiva", opts:["prospettiva","idea","opinione","causa"],
       hint:"Feminine noun for a viewpoint, also artistic 3D perspective.", sSrc:"I have a different {1} on the problem."},
      {type:"match", pairs:[
        {trg:"dibattere", src:"to debate"},
        {trg:"giustificare", src:"to justify"},
        {trg:"enfatizzare", src:"to emphasize"},
        {trg:"l'impatto", src:"impact"}
      ]},
      {type:"match", pairs:[
        {trg:"la prospettiva", src:"perspective"},
        {trg:"rigoroso", src:"rigorous"},
        {trg:"preciso", src:"precise"},
        {trg:"complesso", src:"complex"}
      ]},
      {type:"match", pairs:[
        {trg:"nondimeno", src:"nevertheless"},
        {trg:"altresì", src:"furthermore / likewise"}
      ]}
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
, COVERAGE_U22]
};
export default UNIT_22;
