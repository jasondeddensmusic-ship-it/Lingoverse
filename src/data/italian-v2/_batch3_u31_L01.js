// Batch 3 — Unit 31 Lesson (Advanced Media: Print & Broadcast)
const BATCH3_L_1 = {
  id:"itv2_u31l_b3_1", title:"Stampa e televisione", icon:"📺", xp:15, board:true,
  steps:[
    {type:"intro", title:"Stampa e televisione",
     desc:"Expand your media vocabulary with terms for print journalism, broadcasting, and the Italian television landscape. Essential for understanding media debates and news culture.",
     goals:["Describe the Italian print and broadcast landscape","Discuss editorial processes and media ownership","Understand TV and radio terminology"]},

    {type:"teach", trg:"il quotidiano", src:"the daily newspaper", pos:"noun", gender:"m",
     note:"Masculine noun. Plural: i quotidiani.\n'Quotidiano nazionale' = national daily. Also adjective: 'la vita quotidiana' = daily life.",
     example:"A: Il Corriere della Sera e il quotidiano più diffuso d'Italia.\nB: Seguito da La Repubblica e La Stampa.",
     exampleSrc:"A: Corriere della Sera is the most widely read daily in Italy.\nB: Followed by La Repubblica and La Stampa.",
     funFact:"Italy has about 80 daily newspapers, far more than most European countries. Many are regional: Il Mattino (Naples), Il Messaggero (Rome), La Nazione (Florence). Italians often read the local paper alongside a national one."},

    {type:"teach", trg:"il settimanale", src:"the weekly magazine", pos:"noun", gender:"m",
     note:"Masculine noun. Plural: i settimanali.\n'Settimanale di attualita' = news weekly. From 'settimana' (week).",
     example:"A: L'Espresso era il settimanale di attualita più letto.\nB: Ora e diventato un supplemento online.",
     exampleSrc:"A: L'Espresso was the most read news weekly.\nB: Now it has become an online supplement.",
     funFact:"Italian magazines follow the time pattern in their names: 'quotidiano' (daily), 'settimanale' (weekly), 'mensile' (monthly). Gossip weeklies like 'Chi' and 'Oggi' sell millions of copies, far outstripping serious journalism."},

    {type:"teach", trg:"il palinsesto", src:"the TV schedule / programming", pos:"noun", gender:"m",
     note:"Masculine noun. Originally: a reused parchment (palimpsest).\nIn media: the schedule of TV programs.",
     example:"A: Il palinsesto autunnale della RAI sara presentato a luglio.\nB: I nuovi programmi inizieranno a settembre.",
     exampleSrc:"A: RAI's autumn schedule will be presented in July.\nB: New programs will start in September.",
     funFact:"'Palinsesto' literally means 'palimpsest' (scraped-again parchment). Italian TV adopted the term because programming schedules are constantly rewritten and rearranged, just like ancient parchments were scraped and reused."},

    {type:"teach", trg:"il telegiornale", src:"the TV news / newscast", pos:"noun", gender:"m",
     note:"Masculine noun. Abbreviated TG.\n'TG1' = RAI's main evening news. 'TG5' = Mediaset's main evening news.",
     example:"A: Il telegiornale delle otto e il più seguito in Italia.\nB: Circa dieci milioni di spettatori ogni sera.",
     exampleSrc:"A: The eight o'clock news is the most watched in Italy.\nB: About ten million viewers every evening.",
     funFact:"Italy has multiple competing TGs: TG1, TG2, TG3 (RAI), TG4, TG5, Studio Aperto (Mediaset), and TGLa7. Each has a perceived political lean. The 8pm TG1 remains the single most-watched TV program in Italy."},

    {type:"teach", trg:"l'abbonamento", src:"the subscription", pos:"noun", gender:"m",
     note:"Masculine noun. Plural: gli abbonamenti.\n'Abbonamento RAI' = RAI TV license fee. 'Abbonarsi' (verb) = to subscribe.",
     example:"A: L'abbonamento RAI si paga con la bolletta elettrica.\nB: Costa circa 90 euro all'anno.",
     exampleSrc:"A: The RAI license fee is paid with the electricity bill.\nB: It costs about 90 euros per year.",
     funFact:"Italy's RAI license fee ('canone RAI') was controversially moved onto electricity bills in 2016 to combat mass evasion. Previously, about 30% of Italians simply did not pay. The move immediately raised compliance to over 95%."},

    {type:"mc",
     q:"Perche il canone RAI e stato spostato sulla bolletta elettrica?",
     opts:["Per ridurre il costo per le famiglie italiane più povere","Perche la RAI non aveva più bisogno di finanziamenti pubblici","Per combattere l'evasione: molti italiani non lo pagavano","Per finanziare la transizione al digitale della televisione"],
     ans:"Per combattere l'evasione: molti italiani non lo pagavano",
     hint:"About 30% of Italians simply did not pay the license fee. Putting it on the electricity bill made evasion nearly impossible."},

    {type:"teach", trg:"il conduttore", src:"the TV presenter / host", pos:"noun", gender:"m",
     note:"Masculine noun. Feminine: la conduttrice.\n'Condurre un programma' = to host a show.",
     example:"A: La conduttrice del talk show e molto popolare.\nB: Il suo programma attira milioni di spettatori.",
     exampleSrc:"A: The talk show host is very popular.\nB: Her program attracts millions of viewers.",
     funFact:"Italian TV presenters become national celebrities. Figures like Fabio Fazio, Mara Venier, and Maria De Filippi are household names with enormous cultural influence. Their migration between RAI and Mediaset is front-page news."},

    {type:"teach", trg:"l'ascolto", src:"the viewership / audience rating", pos:"noun", gender:"m",
     note:"Masculine noun. 'Dati di ascolto' = audience ratings.\n'Share di ascolto' = audience share percentage.",
     example:"A: I dati di ascolto di ieri sera danno la vittoria alla RAI.\nB: Il film ha ottenuto il 25% di share.",
     exampleSrc:"A: Last night's audience data give the win to RAI.\nB: The film achieved a 25% audience share.",
     funFact:"Italian TV battles are fought over 'share' (audience percentage), with RAI and Mediaset competing nightly. Auditel, the Italian audience measurement company, publishes daily ratings that shape programming decisions and advertising prices."},

    {type:"teach", trg:"il servizio", src:"the report / news segment", pos:"noun", gender:"m",
     note:"Masculine noun. In journalism: a TV news report on a specific topic.\n'Servizio speciale' = special report.",
     example:"A: Il servizio sulla corruzione ha suscitato un grande dibattito.\nB: Il giornalista ha ricevuto minacce.",
     exampleSrc:"A: The report on corruption sparked a great debate.\nB: The journalist received threats.",
     funFact:"Italian TV 'servizi' combine narrated footage with on-site interviews. Programs like 'Report' (RAI3) produce investigative servizi that have exposed scandals, changed laws, and occasionally toppled politicians."},

    {type:"fb",
     s:"Il {1} delle otto di RAI1 e il programma più visto in Italia.",
     a:["telegiornale"],
     opts:["telegiornale","palinsesto","servizio","quotidiano"],
     hint:"The TV news broadcast. Abbreviated TG. The 8pm edition on RAI's main channel draws about 10 million viewers nightly.",
     sSrc:"The 8pm {1} on RAI1 is the most watched program in Italy."},

    {type:"teach", trg:"la tiratura", src:"the circulation (newspapers)", pos:"noun", gender:"f",
     note:"Feminine noun. The number of copies printed and distributed.\n'Tiratura media' = average circulation.",
     example:"A: La tiratura dei quotidiani italiani e in calo costante.\nB: I lettori si spostano online.",
     exampleSrc:"A: The circulation of Italian dailies is in constant decline.\nB: Readers are moving online.",
     funFact:"Italian newspaper circulation has fallen by over 50% since 2000. The Corriere della Sera, once selling 700,000 copies daily, now prints about 200,000. Digital subscriptions are growing but cannot fully compensate for the print decline."},

    {type:"teach", trg:"il servizio pubblico", src:"the public broadcasting service", pos:"noun", gender:"m",
     note:"Masculine compound noun. State-funded media.\n'RAI - Radiotelevisione Italiana' = Italy's public broadcaster.",
     example:"A: La RAI e il servizio pubblico radiotelevisivo italiano.\nB: Ha tre canali TV principali e diverse emittenti radio.",
     exampleSrc:"A: RAI is the Italian public broadcasting service.\nB: It has three main TV channels and several radio stations.",
     funFact:"RAI was founded in 1954 and holds a unique place in Italian culture. Its historical role in unifying the Italian language through television is widely acknowledged: programs like 'Non e mai troppo tardi' taught millions of Italians to read."},

    {type:"teach", trg:"la pubblicita", src:"the advertising / advertisement", pos:"noun", gender:"f",
     note:"Feminine noun. Invariable (accented ending).\n'Spot pubblicitario' = TV commercial. 'Agenzia pubblicitaria' = advertising agency.",
     example:"A: La pubblicita finanzia gran parte della televisione italiana.\nB: Mediaset dipende quasi interamente dalla raccolta pubblicitaria.",
     exampleSrc:"A: Advertising funds much of Italian television.\nB: Mediaset depends almost entirely on advertising revenue.",
     funFact:"Italian advertising is regulated by the 'Istituto dell'Autodisciplina Pubblicitaria.' Unlike many countries, Italy allows alcohol advertising on TV but heavily restricts tobacco. The famous 'Carosello' program (1957-1977) made TV ads an art form."},

    {type:"mc",
     q:"Quale ruolo storico ha avuto la RAI nell'unificazione linguistica dell'Italia?",
     opts:["Ha creato un dizionario ufficiale della lingua italiana","Ha insegnato a leggere e scrivere a milioni di italiani attraverso la televisione","Ha imposto l'uso del fiorentino come lingua nazionale obbligatoria","Ha tradotto tutti i programmi stranieri in italiano standard"],
     ans:"Ha insegnato a leggere e scrivere a milioni di italiani attraverso la televisione",
     hint:"Educational TV programs brought standard Italian into homes where only dialect was spoken, helping unify the national language."},

    {type:"match", pairs:[
      {trg:"quotidiano", src:"daily newspaper"},
      {trg:"telegiornale", src:"newscast"},
      {trg:"palinsesto", src:"TV schedule"},
      {trg:"conduttore", src:"TV presenter"},
      {trg:"pubblicita", src:"advertising"}
    ]},

    {type:"fb",
     s:"I dati di {1} danno la vittoria alla RAI nella fascia serale.",
     a:["ascolto"],
     opts:["ascolto","tiratura","abbonamento","servizio"],
     hint:"TV audience measurement. The ratings that determine which channel 'won' the evening by attracting more viewers.",
     sSrc:"The audience {1} data give the win to RAI in the evening slot."},

    {type:"mc",
     q:"Qual e la differenza tra RAI e Mediaset nel sistema televisivo italiano?",
     opts:["RAI e pubblica e finanziata dal canone e dalla pubblicita, Mediaset e privata e vive solo di pubblicita","RAI trasmette solo notizie e documentari, Mediaset solo film e intrattenimento","Non c'è differenza: sono entrambe aziende private in competizione","RAI opera solo online mentre Mediaset trasmette esclusivamente in televisione"],
     ans:"RAI e pubblica e finanziata dal canone e dalla pubblicita, Mediaset e privata e vive solo di pubblicita",
     hint:"One is the state broadcaster funded by license fees and ads. The other is a private company that relies entirely on advertising revenue."}
  ,{type:"match",pairs:[{trg:"il settimanale",src:"the weekly magazine"},{trg:"il servizio",src:"the report / news segment"},{trg:"la tiratura",src:"the circulation (newspapers)"},{trg:"il servizio pubblico",src:"the public broadcasting service"}]},{type:"mc",q:"How do you say \"subscription\" in Italian?",opts:["la finestra","l'abbonamento","il tavolo","la bicicletta"],ans:"l'abbonamento",hint:"Recall the Italian vocabulary word taught in this lesson."},
{type:"fb",s:"Il {1} trasmette le notizie alle 20:00 ogni sera.",a:["telegiornale"],opts:["telegiornale","settimanale","palinsesto","abbonamento"],hint:"A television news programme broadcast daily.",sSrc:"The {1} broadcasts the news at 20:00 every evening."}]
};
export default BATCH3_L_1;
