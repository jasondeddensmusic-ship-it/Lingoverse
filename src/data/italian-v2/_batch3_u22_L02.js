// Batch 3 — Unit 22, Lesson 2: Movimenti artistici e festivita (Art Movements & Festivals)
const BATCH3_U22_L2 = {
  id:"itv2_u22l_b3_2", title:"Movimenti artistici e festivita", icon:"\uD83C\uDFA8", xp:15, board:true,
  steps:[
    {type:"intro", title:"Movimenti artistici e festivita",
     desc:"Learn about Italian art movements and cultural celebrations. Italy's artistic legacy spans millennia, and its festivals reveal living cultural traditions.",
     goals:["Name major Italian art movements","Describe Italian festivals and celebrations","Discuss Italy's cultural influence"]},

    {type:"teach", trg:"il Rinascimento", src:"the Renaissance", pos:"noun", gender:"m",
     note:"Masculine. From 'rinascere' (to be reborn).\nBegan in Florence in the 14th century.",
     example:"A: Il Rinascimento e nato a Firenze.\nB: Leonardo e Michelangelo sono i geni di quell'epoca.",
     exampleSrc:"A: The Renaissance was born in Florence.\nB: Leonardo and Michelangelo are the geniuses of that era.",
     funFact:"'Rinascimento' literally means 'rebirth,' describing the revival of classical Greek and Roman culture. Florence's Medici family were the primary patrons. The movement transformed art, science, architecture, and philosophy. Italy's contribution to the Renaissance shaped all of Western civilization."},

    {type:"teach", trg:"il Barocco", src:"the Baroque", pos:"noun", gender:"m",
     note:"Masculine. From Portuguese 'barroco' (irregular pearl).\n17th century: dramatic, ornate, emotional art.",
     example:"A: Roma e piena di architettura barocca.\nB: Le chiese barocche sono mozzafiato.",
     exampleSrc:"A: Rome is full of Baroque architecture.\nB: The Baroque churches are breathtaking.",
     funFact:"The Baroque period (1600s) made Rome one of the world's most dramatic cities. Bernini's fountains, Borromini's churches, and Caravaggio's paintings defined the style: emotional, theatrical, rich in light and shadow. The word 'barocco' originally meant 'bizarre' or 'excessive.'"},

    {type:"teach", trg:"il Neorealismo", src:"the Neorealism", pos:"noun", gender:"m",
     note:"Masculine. Post-WWII Italian film and literature movement.\n'Cinema neorealista' = neorealist cinema.",
     example:"A: Il Neorealismo ha rivoluzionato il cinema.\nB: Film come Roma citta aperta sono capolavori.",
     exampleSrc:"A: Neorealism revolutionized cinema.\nB: Films like Rome, Open City are masterpieces.",
     funFact:"Italian Neorealism (1940s-1950s) used non-professional actors, real locations, and stories of ordinary people struggling in post-war Italy. Directors like De Sica, Rossellini, and Visconti created a new cinematic language. 'Ladri di biciclette' (Bicycle Thieves, 1948) is often called the greatest film ever made."},

    {type:"teach", trg:"la Festa della Repubblica", src:"Republic Day", pos:"noun", gender:"f",
     note:"Feminine. June 2nd, Italy's national holiday.\nCelebrates the 1946 referendum that established the republic.",
     example:"A: Il 2 giugno e la Festa della Repubblica.\nB: C'e sempre la parata militare a Roma.",
     exampleSrc:"A: June 2nd is Republic Day.\nB: There is always a military parade in Rome.",
     funFact:"On June 2, 1946, Italians voted to abolish the monarchy and establish a republic. It was also the first time Italian women could vote. The holiday features a military parade along Via dei Fori Imperiali in Rome, attended by the President. It is Italy's equivalent of France's July 14th."},

    {type:"teach", trg:"il Ferragosto", src:"August holiday (August 15th)", pos:"noun", gender:"m",
     note:"Masculine. From Latin 'Feriae Augusti' (Augustus's rest).\nThe peak of Italian summer holidays.",
     example:"A: A Ferragosto l'Italia si ferma.\nB: Tutti al mare o in montagna!",
     exampleSrc:"A: On Ferragosto, Italy stops.\nB: Everyone goes to the sea or mountains!",
     funFact:"Ferragosto (August 15) is Italy's most celebrated summer holiday. Emperor Augustus declared it a holiday in 18 BC. Today, most Italians take the entire week (or two) around it as vacation. Cities empty, shops close, and beaches overflow. It coincides with the Catholic feast of the Assumption of Mary."},

    {type:"teach", trg:"il presepe", src:"the nativity scene", pos:"noun", gender:"m",
     note:"Masculine. From Latin 'praesepium' (manger).\n'Presepe vivente' = living nativity scene.",
     example:"A: Il presepe napoletano e un'arte.\nB: Via San Gregorio Armeno e piena di botteghe.",
     exampleSrc:"A: The Neapolitan nativity scene is an art form.\nB: Via San Gregorio Armeno is full of workshops.",
     funFact:"Naples is the world capital of 'presepi' (nativity scenes). Via San Gregorio Armeno has artisan workshops that craft elaborate miniature scenes year-round. Neapolitan presepi often include modern figures alongside traditional ones: politicians, footballers, and celebrities appear alongside the Holy Family."},

    {type:"teach", trg:"il design", src:"the design", pos:"noun", gender:"m",
     note:"Masculine. Borrowed from English. 'Design italiano' = Italian design.\n'Il Made in Italy' = Italian-made products.",
     example:"A: Il design italiano e famoso nel mondo.\nB: Dalle automobili ai mobili.",
     exampleSrc:"A: Italian design is famous worldwide.\nB: From cars to furniture.",
     funFact:"Italian design excellence spans furniture (Alessi, Kartell), cars (Ferrari, Lamborghini, Vespa), fashion (Armani, Versace), and architecture (Renzo Piano). The Milan Furniture Fair ('Salone del Mobile') is the world's largest design event. 'Bello e funzionale' (beautiful and functional) is the Italian design philosophy."},

    {type:"teach", trg:"il patrimonio immateriale", src:"the intangible heritage", pos:"noun", gender:"m",
     note:"Masculine. 'Immateriale' = intangible, not physical.\nUNESCO recognizes Italian intangible heritage.",
     example:"A: La dieta mediterranea e patrimonio immateriale.\nB: Anche l'opera lirica e l'arte dei pizzaiuoli.",
     exampleSrc:"A: The Mediterranean diet is intangible heritage.\nB: Also opera and the art of pizza-making.",
     funFact:"Italy has numerous UNESCO Intangible Cultural Heritage items: the Mediterranean diet, opera, Neapolitan pizza-making ('arte dei pizzaiuoli'), truffle hunting, silk weaving, and traditional violin craftsmanship from Cremona. These are living traditions, not museum pieces."},

    {type:"teach", trg:"il Futurismo", src:"Futurism (art movement)", pos:"noun", gender:"m",
     note:"Masculine. Founded by Marinetti in 1909.\nCelebrated speed, technology, and modernity.",
     example:"A: Il Futurismo era un movimento radicale.\nB: Volevano distruggere i musei!",
     exampleSrc:"A: Futurism was a radical movement.\nB: They wanted to destroy museums!",
     funFact:"Futurism was founded in Italy in 1909 by F.T. Marinetti, who published his manifesto in a French newspaper. The movement glorified speed, machines, and youth while rejecting Italy's obsession with the past. It influenced art, architecture, music, and even cooking. Its legacy is controversial due to its later ties to Fascism."},

    {type:"teach", trg:"la processione", src:"the procession", pos:"noun", gender:"f",
     note:"Feminine. From Latin 'processio' (a moving forward).\n'Processione religiosa' = religious procession.",
     example:"A: La processione passa per il centro storico.\nB: E una tradizione che dura da secoli.",
     exampleSrc:"A: The procession goes through the historic center.\nB: It is a tradition that has lasted for centuries.",
     funFact:"Religious processions remain a major part of Italian cultural life, especially in southern Italy. Easter processions in Sicily are among the most dramatic in Europe. Holy Week ('Settimana Santa') features elaborate parades with hooded penitents, carried statues, and brass bands."},

    {type:"teach", trg:"il dialetto", src:"the dialect", pos:"noun", gender:"m",
     note:"Masculine. From Greek 'dialektos' (manner of speaking).\nItaly has dozens of regional dialects.",
     example:"A: Mio nonno parla ancora in dialetto.\nB: Quale dialetto?",
     exampleSrc:"A: My grandfather still speaks in dialect.\nB: Which dialect?",
     funFact:"Italy was unified only in 1861, and each region developed its own language. Neapolitan, Sicilian, Venetian, and Piedmontese are sometimes classified as separate languages, not just dialects. When Italy unified, only about 2-3% of Italians spoke standard Italian. Television in the 1950s-60s did more to spread standard Italian than schools."},

    // Quiz steps
    {type:"mc", q:"Where did the Renaissance begin?",
     opts:["Rome","Venice","Florence","Milan"],
     ans:"Florence",
     hint:"The Medici family were primary patrons. 'Rinascimento' literally means 'rebirth' of classical culture. 14th century."},

    {type:"fb", s:"A {1} l'Italia si ferma.",
     a:["Ferragosto"],
     opts:["Ferragosto","Carnevale","Natale","Pasqua"],
     hint:"August 15th. Emperor Augustus declared this holiday in 18 BC. Today, cities empty and everyone heads to the beach or mountains.",
     sSrc:"On {1}, Italy stops."},

    {type:"match", pairs:[
      {trg:"il Rinascimento", src:"the Renaissance"},
      {trg:"il Barocco", src:"the Baroque"},
      {trg:"il Neorealismo", src:"Neorealism"},
      {trg:"il Futurismo", src:"Futurism"},
      {trg:"il Ferragosto", src:"August holiday"}
    ]},

    {type:"mc", q:"What is special about Via San Gregorio Armeno in Naples?",
     opts:["It is the longest street in Italy","It is full of nativity scene artisan workshops","It hosts the largest food market","It is the oldest street in Europe"],
     ans:"It is full of nativity scene artisan workshops",
     hint:"Artisans craft elaborate miniature 'presepi' year-round. Modern figures (politicians, footballers) appear alongside traditional ones."},

    {type:"fb", s:"Mio nonno parla ancora in {1}.",
     a:["dialetto"],
     opts:["dialetto","italiano","latino","francese"],
     hint:"Regional language variety. Italy has dozens. Some are classified as separate languages. Television helped spread standard Italian.",
     sSrc:"My grandfather still speaks in {1}."},

    {type:"mc", q:"What did Italian Futurists controversially want to do with museums?",
     opts:["Fill them with modern art only","Destroy them to break with the past","Convert them into factories","Move them all to Rome"],
     ans:"Destroy them to break with the past",
     hint:"Marinetti's 1909 manifesto glorified speed and modernity while rejecting Italy's obsession with its classical heritage."},

    {type:"fb", s:"La dieta mediterranea e {1} immateriale UNESCO.",
     a:["patrimonio"],
     opts:["patrimonio","design","dialetto","presepe"],
     hint:"Intangible cultural heritage. Along with opera and Neapolitan pizza-making, it is a recognized living tradition of humanity.",
     sSrc:"The Mediterranean diet is UNESCO intangible {1}."},

    {type:"mc", q:"What unified the Italian language more than schools?",
     opts:["Radio in the 1920s","Television in the 1950s-60s","Newspapers in the 1800s","The Catholic Church"],
     ans:"Television in the 1950s-60s",
     hint:"When Italy unified in 1861, only 2-3% spoke standard Italian. TV brought one common language into every home, something centuries of education had failed to achieve."}
  ,{type:"match",pairs:[{trg:"la Festa della Repubblica",src:"Republic Day"},{trg:"il presepe",src:"the nativity scene"},{trg:"il design",src:"the design"},{trg:"la processione",src:"the procession"}]}]
};
export default BATCH3_U22_L2;
