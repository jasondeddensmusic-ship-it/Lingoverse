// Unit 31 Expansion. Lesson 6: La propaganda e la persuasione
const LESSON_6 = {
  id:"itv2_u31l6", title:"La propaganda e la persuasione", icon:"📢", xp:15, board:true,
  steps:[
    {type:"intro", title:"La propaganda e la persuasione",
     desc:"Learn advanced vocabulary for discussing propaganda techniques, persuasion methods, and information warfare. Develop critical awareness of how messages are crafted to influence.",
     goals:["Identify common propaganda techniques","Discuss persuasion in advertising and politics","Express critical analysis of manipulative communication"]},

    {type:"teach", trg:"la persuasione", src:"the persuasion", pos:"noun", gender:"f",
     note:"Feminine noun. The act of convincing someone through argument or appeal.\n'Persuasivo/a' (adj) = persuasive. 'Persuadere' (verb) = to persuade.",
     example:"A: La persuasione e un'arte antica quanto la civilta.\nB: Aristotele ne ha descritto le tecniche tremila anni fa.",
     exampleSrc:"A: Persuasion is an art as old as civilization.\nB: Aristotle described its techniques three thousand years ago.",
     funFact:"Aristotle's three pillars of persuasion are still used in Italian communication studies: 'ethos' (credibility), 'pathos' (emotion), and 'logos' (logic). Italian advertising agencies explicitly use this framework when designing campaigns."},

    {type:"teach", trg:"il populismo", src:"the populism", pos:"noun", gender:"m",
     note:"Masculine noun. A political style appealing to 'ordinary people' against 'elites.'\n'Populista' (noun/adj) = populist.",
     example:"A: Il populismo usa un linguaggio semplice e diretto.\nB: Divide il mondo in 'noi' contro 'loro.'",
     exampleSrc:"A: Populism uses simple and direct language.\nB: It divides the world into 'us' versus 'them.'",
     funFact:"Italy has been called a 'laboratory of populism' by political scientists. From Berlusconi to the Five Star Movement, Italian politics has produced diverse populist models studied worldwide. The word 'populismo' appears more in Italian newspapers than in almost any other European press."},

    {type:"teach", trg:"la demagogia", src:"the demagoguery", pos:"noun", gender:"f",
     note:"Feminine noun. Appealing to emotions and prejudices rather than reason.\n'Demagogo/a' (noun) = demagogue. 'Demagogico/a' (adj) = demagogic.",
     example:"A: La demagogia promette soluzioni facili a problemi complessi.\nB: E pericolosa perche sfrutta la frustrazione delle persone.",
     exampleSrc:"A: Demagoguery promises easy solutions to complex problems.\nB: It is dangerous because it exploits people's frustration.",
     funFact:"From Greek 'demagogos' (leader of the people). Italian political commentators use 'demagogia' as a sharp criticism. Calling someone a 'demagogo' in Italian public discourse is a severe accusation, implying deliberate manipulation of voters' emotions."},

    {type:"teach", trg:"lo slogan", src:"the slogan", pos:"noun", gender:"m",
     note:"Masculine noun. Plural: gli slogan (invariable).\nA memorable phrase used in advertising or politics.\n'Slogan elettorale' = campaign slogan.",
     example:"A: Uno slogan efficace si ricorda facilmente.\nB: 'Si puo fare!' e stato uno degli slogan piu famosi in Italia.",
     exampleSrc:"A: An effective slogan is easily remembered.\nB: 'It can be done!' was one of the most famous slogans in Italy.",
     funFact:"From Scottish Gaelic 'sluagh-ghairm' (battle cry). Italian political slogans tend to be shorter and punchier than their English equivalents. 'Forza Italia!' (Go Italy!) worked both as a football cheer and a party name."},

    {type:"teach", trg:"il capro espiatorio", src:"the scapegoat", pos:"noun", gender:"m",
     note:"Masculine compound noun. A person or group blamed for problems they did not cause.\nFrom the biblical 'goat of atonement.'",
     example:"A: I populisti spesso cercano un capro espiatorio.\nB: E piu facile dare la colpa a qualcuno che affrontare i problemi reali.",
     exampleSrc:"A: Populists often look for a scapegoat.\nB: It is easier to blame someone than to face real problems.",
     funFact:"'Capro espiatorio' literally translates the Hebrew concept from Leviticus. In Italian political analysis, identifying the 'capro espiatorio' of a populist narrative is considered essential for understanding propaganda. Immigrants, elites, or Europe often fill this role."},

    {type:"mc",
     q:"Che cos'e la demagogia?",
     opts:["Un tipo di democrazia diretta","L'uso di emozioni e pregiudizi per manipolare l'opinione pubblica, promettendo soluzioni facili","Un metodo di ricerca scientifica","Una forma di giornalismo investigativo"],
     ans:"L'uso di emozioni e pregiudizi per manipolare l'opinione pubblica, promettendo soluzioni facili",
     hint:"Appealing to emotions rather than reason. Offering simple answers to complex questions to gain political support."},

    {type:"teach", trg:"il messaggio subliminale", src:"the subliminal message", pos:"noun", gender:"m",
     note:"Masculine compound noun. Plural: i messaggi subliminali.\nInformation below the threshold of conscious awareness.",
     example:"A: I messaggi subliminali nella pubblicita sono vietati.\nB: La legge italiana protegge i consumatori dalla manipolazione nascosta.",
     exampleSrc:"A: Subliminal messages in advertising are prohibited.\nB: Italian law protects consumers from hidden manipulation.",
     funFact:"Italy banned subliminal advertising in the 1990s following EU directives. The fear of 'messaggi subliminali' became a cultural phenomenon, with conspiracy theories about hidden messages in everything from commercials to political speeches."},

    {type:"teach", trg:"la retorica della paura", src:"the fear rhetoric", pos:"noun", gender:"f",
     note:"Feminine compound noun. Communication that exploits fear to persuade.\n'Politica della paura' = politics of fear.",
     example:"A: La retorica della paura e una delle tecniche di propaganda piu efficaci.\nB: Quando abbiamo paura, pensiamo meno razionalmente.",
     exampleSrc:"A: Fear rhetoric is one of the most effective propaganda techniques.\nB: When we are afraid, we think less rationally.",
     funFact:"Italian media studies distinguish 'allarmismo' (alarmism, unnecessary fear-mongering) from legitimate warnings. The COVID-19 pandemic intensified debate about where responsible communication ends and 'retorica della paura' begins."},

    {type:"fb",
     s:"I populisti spesso cercano un {1} espiatorio per spiegare i problemi del paese.",
     a:["capro"],
     opts:["capro","messaggio","slogan","conflitto"],
     hint:"A biblical term for someone unfairly blamed. Combined with 'espiatorio,' it describes the propaganda technique of targeting an innocent group.",
     sSrc:"Populists often look for a {1} to explain the country's problems."},

    {type:"teach", trg:"la controinformazione", src:"the counter-information", pos:"noun", gender:"f",
     note:"Feminine noun. Information that challenges official narratives.\n'Fare controinformazione' = to provide alternative information.",
     example:"A: La controinformazione puo essere sia positiva che negativa.\nB: Dipende se sfida la propaganda o ne crea un'altra.",
     exampleSrc:"A: Counter-information can be both positive and negative.\nB: It depends on whether it challenges propaganda or creates another one.",
     funFact:"Italy has a strong tradition of 'controinformazione' dating back to the political turmoil of the 1970s. Independent media, community radio stations, and now online platforms provide alternative perspectives. The line between legitimate counter-narrative and conspiracy theory is hotly debated."},

    {type:"teach", trg:"il pensiero unico", src:"the groupthink / single thought", pos:"noun", gender:"m",
     note:"Masculine compound noun. When a dominant narrative suppresses alternative views.\n'Pensiero dominante' = dominant thinking.",
     example:"A: Alcuni accusano i media di promuovere il pensiero unico.\nB: La diversita di opinioni e fondamentale per la democrazia.",
     exampleSrc:"A: Some accuse the media of promoting groupthink.\nB: Diversity of opinion is fundamental for democracy.",
     funFact:"'Pensiero unico' entered Italian political vocabulary in the 1990s, originally to criticize neoliberal economic orthodoxy. Today it is used by both left and right to accuse opponents of intellectual conformity. The phrase reveals a deep Italian distrust of imposed consensus."},

    {type:"mc",
     q:"Perche l'Italia e stata definita un 'laboratorio del populismo'?",
     opts:["Perche ha inventato il termine 'populismo'","Perche ha prodotto diverse forme di populismo studiate in tutto il mondo","Perche non ha mai avuto movimenti populisti","Perche tutti i partiti italiani sono populisti"],
     ans:"Perche ha prodotto diverse forme di populismo studiate in tutto il mondo",
     hint:"From media moguls to anti-establishment digital movements, Italy has generated multiple models of populist politics that scholars worldwide analyze and compare."},

    {type:"match", pairs:[
      {trg:"persuasione", src:"persuasion"},
      {trg:"populismo", src:"populism"},
      {trg:"demagogia", src:"demagoguery"},
      {trg:"capro espiatorio", src:"scapegoat"},
      {trg:"pensiero unico", src:"groupthink"}
    ]},

    {type:"fb",
     s:"Uno {1} politico efficace deve essere breve, memorabile e facile da ripetere.",
     a:["slogan"],
     opts:["slogan","editoriale","sondaggio","algoritmo"],
     hint:"A short, catchy phrase used in political campaigns or advertising. Designed to stick in people's minds and be easily repeated.",
     sSrc:"An effective political {1} must be short, memorable, and easy to repeat."},

    {type:"mc",
     q:"Qual e la differenza tra 'controinformazione' positiva e negativa?",
     opts:["Non c'e differenza, e sempre negativa","La positiva sfida la propaganda con fatti verificabili, la negativa crea nuova disinformazione","La positiva viene dal governo, la negativa dai cittadini","La positiva e online, la negativa e stampata"],
     ans:"La positiva sfida la propaganda con fatti verificabili, la negativa crea nuova disinformazione",
     hint:"Counter-information can be a force for truth when it presents verified facts against official spin. But it becomes harmful when it simply replaces one p... with another."}
  ]
};
export default LESSON_6;
