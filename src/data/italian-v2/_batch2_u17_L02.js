// Unit 17 Batch2. Lesson 2: Broadcasting, Radio & Traditional Media
const BATCH2_U17_L2 = {
  id:"itv2_u17l_b2_2", title:"Radio e televisione", icon:"📺", xp:15, board:true,
  steps:[
    {type:"intro", title:"Radio e televisione",
     desc:"Learn vocabulary for Italian broadcasting, radio, television, and the evolving media landscape. Italy's media history is rich and deeply connected to politics and culture.",
     goals:["Discuss TV and radio in Italian","Understand Italian broadcasting terms","Talk about media consumption habits"]},

    {type:"teach", trg:"il canale", src:"the channel (TV)", pos:"noun", gender:"m",
     note:"Masculine. From Latin 'canalis' (pipe, channel).\n'Cambiare canale' = to change the channel.",
     example:"A: Su quale canale danno il film?\nB: Su Rai Uno, alle nove di sera.",
     exampleSrc:"A: On which channel is the movie?\nB: On Rai One, at nine in the evening.",
     funFact:"Italy has three public channels (Rai 1, Rai 2, Rai 3) and several major private ones (Canale 5, Italia 1, Rete 4, La7). The duopoly between RAI (public) and Mediaset (private, founded by Silvio Berlusconi) has defined Italian television for decades. 'Il telecomando' (remote control) is essential vocabulary."},

    {type:"teach", trg:"il programma", src:"the program / TV show", pos:"noun", gender:"m",
     note:"Masculine. Plural: i programmi.\n'Programma televisivo' = TV program. Also means 'plan.'",
     example:"A: Quale programma guardi stasera?\nB: Un programma di cucina su Rai Due.",
     exampleSrc:"A: What program are you watching tonight?\nB: A cooking show on Rai Two.",
     funFact:"Italian TV is famous for its variety shows ('programmi di varietà'), cooking competitions ('gare di cucina'), and talk shows ('salotti televisivi'). 'Sanremo' (the Italian Song Festival) is the most-watched event of the year. Italian prime-time programming starts later than in most countries: around 9:15 PM."},

    {type:"teach", trg:"la trasmissione", src:"the broadcast / transmission", pos:"noun", gender:"f",
     note:"Feminine. From 'trasmettere' (to transmit, to broadcast).\n'Trasmissione in diretta' = live broadcast.",
     example:"A: La trasmissione inizia alle otto.\nB: E in diretta o registrata?",
     exampleSrc:"A: The broadcast starts at eight.\nB: Is it live or recorded?",
     funFact:"'Trasmissione' covers both the act of broadcasting and the program itself. 'In diretta' (live) versus 'in differita' (delayed/recorded) is an important distinction. Italian audiences value live broadcasting, especially for sports ('partite in diretta') and Sanremo."},

    {type:"teach", trg:"il conduttore", src:"the host / presenter (TV)", pos:"noun", gender:"m",
     note:"Masculine. Feminine: la conduttrice.\nFrom 'condurre' (to lead, to host).",
     example:"A: Chi e il conduttore del programma?\nB: Un giornalista molto famoso.",
     exampleSrc:"A: Who is the host of the program?\nB: A very famous journalist.",
     funFact:"Italian TV presenters ('conduttori') often become national celebrities. Names like Fabio Fazio, Maria De Filippi, and Carlo Conti are household names. Hosting Sanremo is considered the pinnacle of a TV career. The role of 'conduttore' carries cultural weight beyond entertainment."},

    {type:"teach", trg:"il telecomando", src:"the remote control", pos:"noun", gender:"m",
     note:"Masculine. Tele (at a distance) + comando (command).\n'Passami il telecomando' = pass me the remote.",
     example:"A: Dove e il telecomando?\nB: Sotto il cuscino del divano, come sempre!",
     exampleSrc:"A: Where is the remote control?\nB: Under the sofa cushion, as always!",
     funFact:"'Il telecomando' is the subject of a universal Italian domestic debate: who controls it? 'Zapping' (channel surfing) was borrowed into Italian to describe the Italian habit of rapidly switching channels during commercial breaks. The telecomando is arguably the most fought-over object in Italian households."},

    {type:"teach", trg:"la pubblicita", src:"the advertisement / advertising", pos:"noun", gender:"f",
     note:"Feminine. Also: 'lo spot' (a single TV ad, from English).\n'Fare pubblicita' = to advertise.",
     example:"A: C'e troppa pubblicita in televisione.\nB: Per questo preferisco lo streaming.",
     exampleSrc:"A: There is too much advertising on television.\nB: That is why I prefer streaming.",
     funFact:"Italian TV has famously long commercial breaks, sometimes lasting 5-7 minutes. 'Carosello' was Italy's legendary evening commercial program (1957-1977), where ads were mini-shows with comedy, music, and stories. It ended each night at 8:50 PM, and Italian children were told to go to bed 'dopo Carosello' (after Carosello)."},

    {type:"teach", trg:"il radioascoltatore", src:"the radio listener", pos:"noun", gender:"m",
     note:"Masculine. Feminine: la radioascoltatrice.\n'Radio' + 'ascoltatore' (listener). Compound noun.",
     example:"A: Quanti radioascoltatori ha questa emittente?\nB: Circa due milioni al giorno.",
     exampleSrc:"A: How many listeners does this station have?\nB: About two million per day.",
     funFact:"Italian radio remains very popular, especially in cars. Major stations include Radio Deejay, RTL 102.5, Radio Italia, and the public Rai Radio 1-2-3. Italian radio DJs are celebrities in their own right. Morning shows ('la rassegna stampa,' press review) are a commuter ritual."},

    {type:"teach", trg:"l'emittente", src:"the broadcaster / station", pos:"noun", gender:"f",
     note:"Feminine. From 'emettere' (to emit, to broadcast).\n'Emittente televisiva' = TV station. 'Emittente radiofonica' = radio station.",
     example:"A: Quale emittente trasmette la partita?\nB: La partita e su un'emittente privata.",
     exampleSrc:"A: Which station broadcasts the match?\nB: The match is on a private station.",
     funFact:"Italy has hundreds of 'emittenti locali' (local TV and radio stations) alongside the national networks. Local stations play an important role in community life, covering regional news, local sports, and cultural events. 'Telecamere nascoste' (hidden camera) prank shows were a local TV staple."},

    {type:"teach", trg:"il documentario", src:"the documentary", pos:"noun", gender:"m",
     note:"Masculine. From 'documento' (document).\n'Documentario naturalistico' = nature documentary.",
     example:"A: Hai visto quel documentario sulla mafia?\nB: Si, era molto interessante e ben fatto.",
     exampleSrc:"A: Did you see that documentary about the mafia?\nB: Yes, it was very interesting and well-made.",
     funFact:"Italian documentaries ('documentari') are gaining international recognition. Rai often produces high-quality documentaries on Italian history, art, food, and society. Netflix Italy commissions Italian documentaries. The genre has grown beyond television into cinema, with Italian doc-films winning international awards."},

    {type:"teach", trg:"il palinsesto", src:"the TV schedule / programming lineup", pos:"noun", gender:"m",
     note:"Masculine. From Greek 'palimpsestos' (scraped and reused).\nThe full schedule of shows for a channel.",
     example:"A: Il palinsesto autunnale e già uscito?\nB: Si, ci sono molte novità quest'anno.",
     exampleSrc:"A: Has the autumn schedule been released?\nB: Yes, there are many new shows this year.",
     funFact:"'Palinsesto' originally referred to ancient parchment that was scraped clean and rewritten. In Italian TV, it means the programming schedule. 'La guerra dei palinsesti' (the schedule war) describes the fierce competition between RAI and Mediaset for prime-time audiences, especially in autumn."},

    {type:"teach", trg:"il reality show", src:"the reality show", pos:"noun", gender:"m",
     note:"Masculine. Borrowed from English.\n'Grande Fratello' = Big Brother (Italian version).",
     example:"A: Guardi i reality show?\nB: Solo il Grande Fratello, per curiosita.",
     exampleSrc:"A: Do you watch reality shows?\nB: Only Big Brother, out of curiosity.",
     funFact:"Reality shows are hugely popular in Italy. 'Grande Fratello' (Big Brother), 'L'Isola dei Famosi' (Celebrity Island), and 'Temptation Island' draw millions of viewers. Italian reality TV often generates more public debate than political events. 'Trash TV' is an accepted Italian term for lowbrow entertainment."},

    // Quiz steps
    {type:"mc", q:"What was 'Carosello' in Italian TV history?",
     opts:["A legendary evening commercial program from 1957-1977","A political debate show that ran for decades","A children's cartoon that aired every morning","A famous Italian drama series from the 1980s"],
     ans:"A legendary evening commercial program from 1957-1977",
     hint:"Ads were presented as mini-shows with comedy and music. Italian children were told to go to bed after it ended at 8:50 PM."},

    {type:"fb", s:"Su quale {1} danno il film stasera?",
     a:["canale"],
     opts:["canale","programma","telecomando","palinsesto"],
     hint:"This is a specific TV network where shows are broadcast. You select it with the remote control.",
     sSrc:"On which {1} is the movie tonight?"},

    {type:"match", pairs:[
      {trg:"il canale", src:"the channel"},
      {trg:"la trasmissione", src:"the broadcast"},
      {trg:"il conduttore", src:"the host / presenter"},
      {trg:"la pubblicita", src:"the advertisement"},
      {trg:"il palinsesto", src:"the TV schedule"}
    ]},

    {type:"mc", q:"What does 'in diretta' mean in Italian broadcasting?",
     opts:["In the director's cut version","Live, as it happens now","Directed by a specific person","In the direction of the cameras"],
     ans:"Live, as it happens now",
     hint:"The opposite is 'in differita' (delayed/recorded). Sports events and Sanremo are prized 'in d...' experiences."},

    {type:"fb", s:"Chi e il {1} del programma?",
     a:["conduttore"],
     opts:["conduttore","documentario","canale","telecomando"],
     hint:"This person leads and presents the show. Hosting Sanremo is considered the pinnacle of a TV career in Italy.",
     sSrc:"Who is the {1} of the program?"},

    {type:"mc", q:"What is 'il palinsesto' in Italian TV?",
     opts:["A rerun of old classic programs","A type of satellite dish antenna","The programming schedule for a channel","A TV ratings measurement system"],
     ans:"The programming schedule for a channel",
     hint:"From Greek 'palimpsestos' (scraped and reused). In modern Italian, it is the full lineup of shows for a TV network."},

    {type:"fb", s:"C'e troppa {1} in televisione.",
     a:["pubblicita"],
     opts:["pubblicita","trasmissione","emittente","connessione"],
     hint:"These commercial breaks interrupt programs and can last 5-7 minutes on Italian TV. Many viewers switch to streaming to avoid them.",
     sSrc:"There is too much {1} on television."},

    {type:"mc", q:"Which Italian reality show is based on 'Big Brother'?",
     opts:["Sanremo","L'Isola dei Famosi","Temptation Island","Grande Fratello"],
     ans:"Grande Fratello",
     hint:"'G...' means 'big' and 'F...' means 'brother.' This show draws millions of Italian viewers every season."}
  ,{type:"match",pairs:[{trg:"il programma",src:"the program / TV show"},{trg:"il telecomando",src:"the remote control"},{trg:"il radioascoltatore",src:"the radio listener"},{trg:"il documentario",src:"the documentary"},{trg:"il reality show",src:"the reality show"}]},{type:"mc",q:"How do you say \"broadcaster / station\" in Italian?",opts:["l'emittente","la bicicletta","la finestra","il tavolo"],ans:"l'emittente",hint:"Recall the Italian vocabulary word taught in this lesson."}]
};
export default BATCH2_U17_L2;
