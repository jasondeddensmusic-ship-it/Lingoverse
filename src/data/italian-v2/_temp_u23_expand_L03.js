// Unit 23 Expansion — Lesson 6: L'immigrazione e l'integrazione
const LESSON_6 = {
  id:"itv2_u23l6", title:"L'immigrazione e l'integrazione", icon:"🌍", xp:15, board:true,
  steps:[
    {type:"intro", title:"L'immigrazione e l'integrazione",
     desc:"Learn vocabulary about immigration, integration, and multiculturalism in modern Italy. These topics dominate Italian public debate and are essential for understanding contemporary society.",
     goals:["Discuss immigration and integration","Talk about cultural diversity","Express opinions on social inclusion"]},

    {type:"teach", trg:"l'immigrato", src:"the immigrant", pos:"noun", gender:"m",
     note:"Masculine. Feminine: l'immigrata. From 'immigrare.'\n'Immigrato regolare' = legal immigrant.",
     example:"A: Molti immigrati contribuiscono all'economia italiana.\nB: Fanno lavori essenziali per il paese.",
     exampleSrc:"A: Many immigrants contribute to the Italian economy.\nB: They do essential jobs for the country.",
     funFact:"Italy has about 5 million foreign residents (roughly 8% of the population). The largest communities come from Romania, Albania, Morocco, China, and Ukraine. Many immigrants work in agriculture, caregiving ('badanti'), and construction. The term 'extracomunitario' (non-EU citizen) was once common but is now considered reductive."},

    {type:"teach", trg:"il permesso di soggiorno", src:"the residence permit", pos:"noun", gender:"m",
     note:"Masculine. 'Permesso' = permit. 'Soggiorno' = stay.\n'Rinnovare il permesso' = to renew the permit.",
     example:"A: Devo rinnovare il permesso di soggiorno.\nB: Hai preparato tutti i documenti?",
     exampleSrc:"A: I need to renew my residence permit.\nB: Have you prepared all the documents?",
     funFact:"The 'permesso di soggiorno' is the key document for non-EU residents in Italy. Obtaining and renewing it involves long bureaucratic processes at the 'questura' (police headquarters). Wait times of months are common. 'Ho il permesso' (I have the permit) is one of the most important phrases for any immigrant in Italy."},

    {type:"teach", trg:"l'accoglienza", src:"the welcome / reception / hospitality", pos:"noun", gender:"f",
     note:"Feminine. From 'accogliere' (to welcome, to receive).\n'Centro di accoglienza' = reception center.",
     example:"A: L'accoglienza e un valore importante.\nB: Bisogna aiutare chi ha bisogno.",
     exampleSrc:"A: Welcoming others is an important value.\nB: We need to help those in need.",
     funFact:"'Accoglienza' is a politically charged word in Italy. 'Centri di accoglienza' (reception centers) house asylum seekers. Some Italians see accoglienza as a moral duty; others view it as a burden. The debate reveals a deep tension between Italy's tradition of emigration (Italians sought welcome abroad) and its newer role as a destination country."},

    {type:"teach", trg:"l'integrazione", src:"the integration", pos:"noun", gender:"f",
     note:"Feminine. From 'integrare' (to integrate).\n'Politiche di integrazione' = integration policies.",
     example:"A: L'integrazione richiede impegno da entrambe le parti.\nB: La lingua e il primo passo.",
     exampleSrc:"A: Integration requires effort from both sides.\nB: Language is the first step.",
     funFact:"Italian integration policy emphasizes language learning and civic education. 'Corsi di italiano per stranieri' (Italian courses for foreigners) are offered by many municipalities. The 'accordo di integrazione' (integration agreement) requires newcomers to learn basic Italian and civic knowledge. Language is widely seen as the bridge to belonging."},

    {type:"teach", trg:"il rifugiato", src:"the refugee", pos:"noun", gender:"m",
     note:"Masculine. Feminine: la rifugiata. From 'rifugiarsi' (to take refuge).\n'Diritto di asilo' = right to asylum.",
     example:"A: I rifugiati hanno diritto alla protezione.\nB: E un diritto riconosciuto dalla legge internazionale.",
     exampleSrc:"A: Refugees have the right to protection.\nB: It is a right recognized by international law.",
     funFact:"Italy, due to its Mediterranean position, is a primary entry point for refugees from Africa and the Middle East. Lampedusa, a small island south of Sicily, has become a symbol of the migration crisis. The Italian coast guard has rescued hundreds of thousands of people at sea. 'Sbarco' (landing/disembarkation) is a word frequently heard in Italian news."},

    {type:"teach", trg:"la diversita", src:"the diversity", pos:"noun", gender:"f",
     note:"Feminine. From 'diverso' (different, diverse).\n'Diversita culturale' = cultural diversity.",
     example:"A: La diversita culturale arricchisce la societa.\nB: Possiamo imparare molto gli uni dagli altri.",
     exampleSrc:"A: Cultural diversity enriches society.\nB: We can learn a lot from each other.",
     funFact:"'Diversita' is increasingly embraced in Italian public discourse. Italian cities are becoming more multicultural: halal butchers next to salumerie, Chinese restaurants beside trattorias. Schools with diverse student bodies are called 'classi arcobaleno' (rainbow classes). The concept challenges the traditional view of Italy as culturally homogeneous."},

    {type:"teach", trg:"la convivenza civile", src:"civil coexistence / living together", pos:"noun", gender:"f",
     note:"Feminine. 'Convivenza' = cohabitation. 'Civile' = civil, civic.\n'Regole di convivenza civile' = rules for living together.",
     example:"A: La convivenza civile si basa sul rispetto.\nB: Dobbiamo rispettare le differenze.",
     exampleSrc:"A: Civil coexistence is based on respect.\nB: We must respect differences.",
     funFact:"'Convivenza civile' is a key concept in Italian civic education ('educazione civica'). It describes how different people live together peacefully in a shared society. Italian schools now teach it as a subject. The phrase captures a social ideal: not just tolerance, but active, respectful coexistence among people of different backgrounds."},

    {type:"teach", trg:"il pregiudizio", src:"the prejudice / bias", pos:"noun", gender:"m",
     note:"Masculine. From 'pre-' (before) + 'giudizio' (judgment).\n'Combattere i pregiudizi' = to fight prejudices.",
     example:"A: Dobbiamo combattere i pregiudizi.\nB: L'ignoranza e la causa principale.",
     exampleSrc:"A: We must fight prejudices.\nB: Ignorance is the main cause.",
     funFact:"'Pregiudizio' literally means 'pre-judgment,' judging before knowing. Italian anti-discrimination law addresses 'pregiudizi razziali' (racial prejudice) and 'discriminazione' (discrimination). The word carries intellectual weight: it implies the person has formed an opinion without examining the evidence. 'Senza pregiudizi' (without prejudice) is both a legal and a social aspiration."},

    // Quiz steps
    {type:"mc", q:"What percentage of Italy's population are foreign residents?",
     opts:["About 2%","About 8%","About 15%","About 25%"],
     ans:"About 8%",
     hint:"A... 5 million people. The largest communities come from Romania, Albania, Morocco, China, and Ukraine."},

    {type:"fb", s:"Devo rinnovare il {1} di soggiorno.",
     a:["permesso"],
     opts:["permesso","diritto","movimento","pregiudizio"],
     hint:"The key document for non-EU residents. Renewing it at the 'questura' involves long bureaucratic waits, sometimes months.",
     sSrc:"I need to renew my residence {1}."},

    {type:"match", pairs:[
      {trg:"l'immigrato", src:"the immigrant"},
      {trg:"il rifugiato", src:"the refugee"},
      {trg:"l'accoglienza", src:"the welcome / hospitality"},
      {trg:"l'integrazione", src:"the integration"},
      {trg:"il pregiudizio", src:"the prejudice"}
    ]},

    {type:"mc", q:"Why is Lampedusa significant in the immigration debate?",
     opts:["It is Italy's largest and wealthiest city","It is a small island that is a primary entry point for refugees","It houses the Italian parliament","It is where immigration laws are written"],
     ans:"It is a small island that is a primary entry point for refugees",
     hint:"Located south of Sicily, in the Mediterranean. The Italian coast guard has rescued hundreds of thousands of people at sea near it."},

    {type:"fb", s:"La {1} culturale arricchisce la societa.",
     a:["diversita"],
     opts:["diversita","solidarieta","convivenza","accoglienza"],
     hint:"The variety of cultures, backgrounds, and perspectives living together. Italian cities are becoming more multicultural each year.",
     sSrc:"Cultural {1} enriches society."},

    {type:"mc", q:"What is 'convivenza civile' in Italian education?",
     opts:["A university entrance exam subject","The concept of peaceful coexistence now taught in schools","A historic political party platform","A type of student housing"],
     ans:"The concept of peaceful coexistence now taught in schools",
     hint:"It describes how different people live together respectfully. Italian s... n... teach it as a civic education subject."},

    {type:"fb", s:"L'{1} richiede impegno da entrambe le parti.",
     a:["integrazione"],
     opts:["integrazione","immigrazione","accoglienza","associazione"],
     hint:"The process of becoming part of a new society. Italian policy emphasizes language learning as the first and most important step.",
     sSrc:"{1} requires effort from both sides."},

    {type:"mc", q:"What does 'pregiudizio' literally mean?",
     opts:["Post-judgment (judging after the fact)","Pre-judgment (judging before knowing)","Legal judgment (a court decision)","Self-judgment (judging yourself)"],
     ans:"Pre-judgment (judging before knowing)",
     hint:"From 'p...-' (b...) and 'giudizio' (j...). Forming an opinion without examining evidence. 'Senza pregiudizi' is both legal and social."}
  ]
};
export default LESSON_6;
