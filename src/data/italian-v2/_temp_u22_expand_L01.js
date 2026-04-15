// Unit 22 Expansion — Lesson 4: Le feste italiane
const LESSON_4 = {
  id:"itv2_u22l4", title:"Le feste italiane", icon:"🎉", xp:15, board:true,
  steps:[
    {type:"intro", title:"Le feste italiane",
     desc:"Discover Italian festivals and celebrations. From religious holidays to local traditions, festivals reveal the heart of Italian community life and regional identity.",
     goals:["Name major Italian holidays and festivals","Describe celebration traditions","Discuss the cultural meaning behind Italian festivities"]},

    {type:"teach", trg:"la festa", src:"the holiday / party / celebration", pos:"noun", gender:"f",
     note:"Feminine. From Latin 'festa' (festive days).\n'Giorno di festa' = holiday. 'Fare festa' = to celebrate.",
     example:"A: Quale festa italiana preferisci?\nB: Il Carnevale di Venezia e magico.",
     exampleSrc:"A: Which Italian holiday do you prefer?\nB: The Venice Carnival is magical.",
     funFact:"'Festa' covers everything from national holidays to birthday parties. Italy has 12 national holidays ('giorni festivi'). Each city also celebrates its patron saint's day: Rome has San Pietro e Paolo (June 29), Florence has San Giovanni (June 24), Milan has Sant'Ambrogio (December 7). These local holidays mean shops close and festivities fill the streets."},

    {type:"teach", trg:"il Carnevale", src:"Carnival (pre-Lent festival)", pos:"noun", gender:"m",
     note:"Masculine. From Latin 'carnem levare' (to remove meat).\nThe period before Lent begins.",
     example:"A: Il Carnevale di Venezia e famoso in tutto il mondo.\nB: Le maschere sono bellissime.",
     exampleSrc:"A: The Venice Carnival is famous worldwide.\nB: The masks are beautiful.",
     funFact:"'Carnevale' literally means 'farewell to meat,' marking the last festivities before the fasting of Lent. Venice's Carnival dates back to the 11th century. The iconic masks ('maschere') allowed people of all social classes to mix anonymously. Each mask type has a name: Bauta, Colombina, Medico della Peste."},

    {type:"teach", trg:"il presepe", src:"the Nativity scene / crib", pos:"noun", gender:"m",
     note:"Masculine. Also 'presepio.' From Latin 'praesepium' (manger).\nA major Italian Christmas tradition.",
     example:"A: Il presepe di Napoli e una tradizione antica.\nB: I maestri artigiani creano scene incredibili.",
     exampleSrc:"A: The Naples Nativity scene is an ancient tradition.\nB: The master craftsmen create incredible scenes.",
     funFact:"Naples is the world capital of the presepe. The Via San Gregorio Armeno is lined with artisan workshops creating elaborate scenes. Neapolitan presepi include not just biblical figures but local characters, celebrities, and politicians. St. Francis of Assisi created the first living nativity scene in 1223 at Greccio."},

    {type:"teach", trg:"il Palio", src:"the Palio (horse race)", pos:"noun", gender:"m",
     note:"Masculine. From Latin 'pallium' (cloth/banner).\nFamous: il Palio di Siena.",
     example:"A: Hai mai visto il Palio di Siena?\nB: Si, l'atmosfera e incredibile.",
     exampleSrc:"A: Have you ever seen the Palio of Siena?\nB: Yes, the atmosphere is incredible.",
     funFact:"The Palio di Siena is a bareback horse race held twice yearly (July 2 and August 16) in the city's main square. Ten of Siena's seventeen 'contrade' (neighborhoods) compete fiercely. Rivalries run so deep that babies are baptized into their contrada. The winning contrada celebrates for days, sometimes weeks."},

    {type:"teach", trg:"la sagra", src:"the local food festival", pos:"noun", gender:"f",
     note:"Feminine. From Latin 'sacra' (sacred rites).\nEvery Italian town has at least one sagra.",
     example:"A: Andiamo alla sagra del tartufo questo fine settimana?\nB: Ottima idea! Mi piace il tartufo.",
     exampleSrc:"A: Shall we go to the truffle festival this weekend?\nB: Great idea! I love truffle.",
     funFact:"Every Italian town celebrates a local food product with a 'sagra': sagra del tartufo (truffle), sagra della porchetta (roast pork), sagra del cinghiale (wild boar). Originally linked to patron saint celebrations, sagre now focus on food, wine, and community. There are thousands across Italy every year, mostly in summer and autumn."},

    {type:"teach", trg:"la processione", src:"the procession", pos:"noun", gender:"f",
     note:"Feminine. From 'processare' / Latin 'procedere' (to proceed).\nReligious parades through town streets.",
     example:"A: La processione passa per il centro storico.\nB: Tutto il paese partecipa.",
     exampleSrc:"A: The procession goes through the historic center.\nB: The whole town participates.",
     funFact:"Religious processions are a living tradition in Italy, especially in the South. During Holy Week, hooded penitents carry statues through torch-lit streets. The Festa di San Gennaro in Naples draws millions. Even non-religious Italians attend processions as cultural and community events."},

    {type:"teach", trg:"il Ferragosto", src:"Ferragosto (August 15 holiday)", pos:"noun", gender:"m",
     note:"Masculine. From Latin 'Feriae Augusti' (Augustus's rest).\nItaly's biggest summer holiday.",
     example:"A: Cosa fai a Ferragosto?\nB: Andiamo al mare con tutta la famiglia.",
     exampleSrc:"A: What are you doing for Ferragosto?\nB: We are going to the sea with the whole family.",
     funFact:"Ferragosto (August 15) is Italy's most important summer holiday, combining the Catholic Assumption of Mary with ancient Roman harvest celebrations. Cities empty as everyone heads to beaches or mountains. Many businesses close for the entire week around August 15. 'Ferragosto' has become synonymous with summer vacation itself."},

    {type:"teach", trg:"la tradizione", src:"the tradition", pos:"noun", gender:"f",
     note:"Feminine. From Latin 'traditio' (handing over).\n'Mantenere le tradizioni' = to preserve traditions.",
     example:"A: Questa tradizione esiste da secoli.\nB: E importante conservarla per le nuove generazioni.",
     exampleSrc:"A: This tradition has existed for centuries.\nB: It is important to preserve it for new generations.",
     funFact:"'Tradizione' and 'tradimento' (betrayal) share the same Latin root 'tradere' (to hand over). Tradition is what is handed down through generations; betrayal is handing someone over to the enemy. Italians are deeply attached to traditions: 'Non si tocca!' (Do not touch it!) is the reflex when any tradition faces change."},

    {type:"teach", trg:"i fuochi d'artificio", src:"the fireworks", pos:"noun", gender:"m",
     note:"Masculine plural. Literally 'fires of artifice.'\n'Sparare i fuochi' = to set off fireworks.",
     example:"A: I fuochi d'artificio a Capodanno sono spettacolari.\nB: A Napoli sono i piu belli d'Italia.",
     exampleSrc:"A: The fireworks on New Year's Eve are spectacular.\nB: In Naples they are the most beautiful in Italy.",
     funFact:"Italian New Year's Eve ('Capodanno') features massive firework displays. Naples is legendary for its midnight fireworks, with citizens launching their own from balconies and rooftops. Italian festivals often end with fireworks: 'il gran finale' (the grand finale). The word 'artificio' means 'artifice' or 'craft.'"},

    // Quiz steps
    {type:"mc", q:"What does 'Carnevale' literally mean?",
     opts:["Dance of the masks","Farewell to meat (marking the start of Lent)","King of festivals","Feast of colors"],
     ans:"Farewell to meat (marking the start of Lent)",
     hint:"From Latin 'carnem levare.' The festivities precede the fasting period. Venice's version dates back to the 11th century."},

    {type:"fb", s:"Andiamo alla {1} del tartufo questo fine settimana?",
     a:["sagra"],
     opts:["sagra","festa","processione","tradizione"],
     hint:"A local food festival celebrating a specific regional product. Every Italian town has at least one, mostly in summer and autumn.",
     sSrc:"Shall we go to the truffle {1} this weekend?"},

    {type:"match", pairs:[
      {trg:"la festa", src:"holiday / celebration"},
      {trg:"il Carnevale", src:"Carnival"},
      {trg:"il presepe", src:"Nativity scene"},
      {trg:"il Palio", src:"horse race (Siena)"},
      {trg:"il Ferragosto", src:"August 15 holiday"}
    ]},

    {type:"mc", q:"What makes the Palio di Siena unique?",
     opts:["It is a modern sporting event created recently","It is a centuries-old bareback horse race between city neighborhoods","It is only a symbolic ceremony with no competition","It takes place once every ten years"],
     ans:"It is a centuries-old bareback horse race between city neighborhoods",
     hint:"Ten of seventeen 'contrade' compete fiercely twice yearly. Rivalries run so deep that babies are baptized into their contrada."},

    {type:"fb", s:"Cosa fai a {1}?",
     a:["Ferragosto"],
     opts:["Ferragosto","Carnevale","Natale","Pasqua"],
     hint:"Italy's biggest summer holiday on August 15. Cities empty as everyone heads to beaches or mountains. Many businesses close for the week.",
     sSrc:"What are you doing for {1}?"},

    {type:"mc", q:"Who created the first living nativity scene?",
     opts:["Pope Benedict XVI in modern times","Leonardo da Vinci in his workshop","St. Francis of Assisi in 1223","Michelangelo as a Christmas project"],
     ans:"St. Francis of Assisi in 1223",
     hint:"He staged it in Greccio to bring the Christmas story to life. Naples later became the world capital of the miniature version."},

    {type:"fb", s:"La {1} passa per il centro storico.",
     a:["processione"],
     opts:["processione","sagra","festa","tradizione"],
     hint:"A religious parade through town streets, especially during Holy Week. Hooded penitents carry statues by torchlight.",
     sSrc:"The {1} goes through the historic center."},

    {type:"mc", q:"What do 'tradizione' and 'tradimento' have in common?",
     opts:["Nothing at all, they are completely unrelated words","Both come from Latin 'tradere' (to hand over)","Both relate to food and cooking traditions","Both describe religious ceremonies"],
     ans:"Both come from Latin 'tradere' (to hand over)",
     hint:"T... is what is handed down through generations. The other is handing someone over to the enemy. Same root, opposite meanings."}
  ]
};
export default LESSON_4;
