// Batch 3 — Unit 23, Lesson 1: Istituzioni e dovere civico (Institutions & Civic Duty)
const BATCH3_U23_L1 = {
  id:"itv2_u23l_b3_1", title:"Istituzioni e dovere civico", icon:"\uD83D\uDDF3\uFE0F", xp:15, board:true,
  steps:[
    {type:"intro", title:"Istituzioni e dovere civico",
     desc:"Expand your political vocabulary with institutions, civic participation, and the vocabulary of Italian democratic life.",
     goals:["Name Italian government institutions","Discuss civic duties and participation","Understand the Italian political system"]},

    {type:"teach", trg:"il sindaco", src:"the mayor", pos:"noun", gender:"m",
     note:"Masculine. Feminine: la sindaca (increasingly used).\nFrom Greek 'syndikos' (advocate).",
     example:"A: Chi e il sindaco della tua citta?\nB: E stato eletto due anni fa.",
     exampleSrc:"A: Who is the mayor of your city?\nB: He was elected two years ago.",
     funFact:"Italian mayors ('sindaci') are directly elected by citizens and serve five-year terms. They have significant power over local services, urban planning, and public order. The mayor wears a tricolor sash at official events. Some mayors become national figures and later enter parliament."},

    {type:"teach", trg:"il comune", src:"the municipality / city hall", pos:"noun", gender:"m",
     note:"Masculine. From Latin 'communis' (shared).\n'Andare al comune' = to go to city hall.",
     example:"A: Devo andare al comune per il certificato.\nB: L'ufficio anagrafe e al primo piano.",
     exampleSrc:"A: I need to go to city hall for the certificate.\nB: The registry office is on the first floor.",
     funFact:"Italy has over 7,900 'comuni' (municipalities), from tiny mountain villages with 20 residents to Rome with nearly 3 million. The 'comune' is the basic unit of Italian government. Many administrative tasks (birth certificates, identity cards, residency) require visiting your local comune."},

    {type:"teach", trg:"la regione", src:"the region", pos:"noun", gender:"f",
     note:"Feminine. Italy has 20 regions, 5 with special autonomy.\n'Regione Lombardia' = Lombardy region.",
     example:"A: In quale regione vivi?\nB: Vivo in Toscana, vicino a Siena.",
     exampleSrc:"A: In which region do you live?\nB: I live in Tuscany, near Siena.",
     funFact:"Italy's 20 regions have their own governments, budgets, and some legislative power. Five have 'statuto speciale' (special autonomy): Sicily, Sardinia, Trentino-Alto Adige, Valle d'Aosta, and Friuli Venezia Giulia. Regional identity is often stronger than national identity in Italy."},

    {type:"teach", trg:"il presidente della Repubblica", src:"the President of the Republic", pos:"noun", gender:"m",
     note:"Masculine. Head of state, mostly ceremonial role.\nElected by parliament, serves 7 years.",
     example:"A: Il Presidente della Repubblica rappresenta l'unita nazionale.\nB: E un ruolo molto rispettato.",
     exampleSrc:"A: The President represents national unity.\nB: It is a very respected role.",
     funFact:"The Italian President is elected by parliament (not by popular vote) for a seven-year term. The role is mostly ceremonial but carries moral authority. The President can dissolve parliament and refuse to sign unconstitutional laws. The Quirinale Palace in Rome is the presidential residence, larger than Buckingham Palace."},

    {type:"teach", trg:"il primo ministro", src:"the prime minister", pos:"noun", gender:"m",
     note:"Masculine. Official title: 'Presidente del Consiglio dei Ministri.'\nHead of government, runs day-to-day politics.",
     example:"A: Il primo ministro ha presentato il nuovo piano.\nB: Cosa ne pensi?",
     exampleSrc:"A: The prime minister presented the new plan.\nB: What do you think about it?",
     funFact:"Italy's head of government is officially called 'Presidente del Consiglio' (President of the Council of Ministers), not 'primo ministro,' though both terms are used. Unlike many countries, Italy's PM is not directly elected but appointed by the President after elections determine parliamentary majorities."},

    {type:"teach", trg:"la Costituzione", src:"the Constitution", pos:"noun", gender:"f",
     note:"Feminine (capitalized for the Italian one). Entered into force January 1, 1948.\n'Principi fondamentali' = fundamental principles.",
     example:"A: La Costituzione italiana e del 1948.\nB: E considerata una delle piu progressive.",
     exampleSrc:"A: The Italian Constitution is from 1948.\nB: It is considered one of the most progressive.",
     funFact:"The Italian Constitution was written after World War II and the fall of Fascism. Its opening article states: 'L'Italia e una Repubblica democratica, fondata sul lavoro' (Italy is a democratic Republic, founded on labor). It was designed with strong anti-authoritarian safeguards to prevent another dictatorship."},

    {type:"teach", trg:"il referendum", src:"the referendum", pos:"noun", gender:"m",
     note:"Masculine. From Latin 'referendum' (things to be referred back).\n'Referendum abrogativo' = repealing referendum.",
     example:"A: C'e un referendum il mese prossimo.\nB: Su quale tema?",
     exampleSrc:"A: There is a referendum next month.\nB: On what topic?",
     funFact:"Italy uses referendums frequently. Citizens can petition for 'referendum abrogativi' (to repeal existing laws) by collecting 500,000 signatures. Historically, Italians voted to legalize divorce (1974) and maintain abortion rights (1981) through referendums. A 50%+1 quorum is required for validity."},

    {type:"teach", trg:"la tassa", src:"the tax", pos:"noun", gender:"f",
     note:"Feminine. From Latin 'taxare' (to assess, value).\n'Pagare le tasse' = to pay taxes.",
     example:"A: Le tasse in Italia sono alte.\nB: Ma abbiamo la sanita pubblica gratuita.",
     exampleSrc:"A: Taxes in Italy are high.\nB: But we have free public healthcare.",
     funFact:"Italy has one of Europe's highest tax burdens. 'Pressione fiscale' (tax pressure) is a constant political topic. Tax evasion ('evasione fiscale') is estimated at over 100 billion euros annually. The 'Guardia di Finanza' (financial police) combats this. Italians have a complex, often adversarial relationship with taxation."},

    {type:"teach", trg:"la burocrazia", src:"the bureaucracy", pos:"noun", gender:"f",
     note:"Feminine. From French 'bureaucratie.' 'Burocrazia italiana' is legendary.\n'Snellire la burocrazia' = to streamline bureaucracy.",
     example:"A: La burocrazia italiana e molto complessa.\nB: Ci vuole pazienza per ogni documento.",
     exampleSrc:"A: Italian bureaucracy is very complex.\nB: It takes patience for every document.",
     funFact:"Italian bureaucracy is both famous and infamous. Getting a simple certificate can require multiple office visits, stamps ('bolli'), and fees. The term 'kafkiano' (Kafkaesque) is often used to describe the experience. Digital government services are improving, but paper-based processes persist in many areas."},

    {type:"teach", trg:"il welfare", src:"the welfare (state)", pos:"noun", gender:"m",
     note:"Masculine. English loanword used in Italian.\n'Stato sociale' = welfare state (Italian equivalent).",
     example:"A: Il welfare italiano include sanita e pensioni.\nB: Ma il sistema e sotto pressione.",
     exampleSrc:"A: Italian welfare includes healthcare and pensions.\nB: But the system is under pressure.",
     funFact:"Italy's welfare state provides universal healthcare (SSN), pensions, unemployment benefits, and family allowances. The system is generous but financially strained. 'Lo stato sociale' (the social state) is the Italian term, though 'welfare' from English is widely used in media and political discussion."},

    {type:"teach", trg:"il volontariato", src:"the volunteering", pos:"noun", gender:"m",
     note:"Masculine. From 'volontario' (volunteer).\n'Fare volontariato' = to volunteer.",
     example:"A: Faccio volontariato alla Croce Rossa.\nB: Che bella esperienza!",
     exampleSrc:"A: I volunteer at the Red Cross.\nB: What a great experience!",
     funFact:"Italy has a vibrant volunteering sector. Over 5 million Italians volunteer regularly. The 'terzo settore' (third sector) includes thousands of non-profit organizations. Catholic organizations like Caritas and secular groups like Amnesty Italia work alongside local associations. Volunteering is especially popular among retirees and students."},

    // Quiz steps
    {type:"mc", q:"How is the Italian President elected?",
     opts:["By popular vote of all citizens","By parliament for a seven-year term","By the prime minister alone","By regional governors jointly"],
     ans:"By parliament for a seven-year term",
     hint:"Not by the people directly. The role is largely ceremonial but carries significant moral authority. The Quirinale Palace is the residence."},

    {type:"fb", s:"Devo andare al {1} per il certificato.",
     a:["comune"],
     opts:["comune","parlamento","regione","governo"],
     hint:"City hall. Where you get birth certificates, identity cards, and handle residency matters. Italy has over 7,900 of these.",
     sSrc:"I need to go to {1} for the certificate."},

    {type:"match", pairs:[
      {trg:"il sindaco", src:"the mayor"},
      {trg:"il comune", src:"city hall"},
      {trg:"la regione", src:"the region"},
      {trg:"la Costituzione", src:"the Constitution"},
      {trg:"il referendum", src:"the referendum"}
    ]},

    {type:"mc", q:"What does Article 1 of the Italian Constitution state?",
     opts:["Italy is a monarchy","Italy is a democratic Republic, founded on labor","All citizens must serve in the military","The Catholic Church is the state religion"],
     ans:"Italy is a democratic Republic, founded on labor",
     hint:"Written after WWII and the fall of Fascism. Strong anti-authoritarian safeguards. 'Fondata sul lavoro' emphasizes the dignity of work."},

    {type:"fb", s:"La {1} italiana e molto complessa.",
     a:["burocrazia"],
     opts:["burocrazia","tassa","regione","Costituzione"],
     hint:"Italian paperwork is legendary. Multiple office visits, stamps, and fees for simple certificates. 'Kafkiano' is often the word used.",
     sSrc:"Italian {1} is very complex."},

    {type:"mc", q:"How many signatures are needed to petition for a referendum in Italy?",
     opts:["100,000","250,000","500,000","1,000,000"],
     ans:"500,000",
     hint:"Citizens can petition to repeal existing laws. Half a million signatures trigger a public vote. The vote requires over 50% turnout to be valid."},

    {type:"fb", s:"Faccio {1} alla Croce Rossa.",
     a:["volontariato"],
     opts:["volontariato","burocrazia","welfare","referendum"],
     hint:"Giving your time freely to help others. Over 5 million Italians do this regularly through various organizations.",
     sSrc:"I {1} at the Red Cross."},

    {type:"mc", q:"Which regions have 'statuto speciale' (special autonomy)?",
     opts:["Lombardia and Veneto","Toscana and Lazio","Sicilia, Sardegna, Trentino-Alto Adige, Valle d'Aosta, Friuli VG","Campania and Puglia"],
     ans:"Sicilia, Sardegna, Trentino-Alto Adige, Valle d'Aosta, Friuli VG",
     hint:"Five regions have greater self-governance due to geography, language minorities, or historical agreements. Islands and border regions predominate."}
  ]
};
export default BATCH3_U23_L1;
