// L06: Immigratie en Integratie — Immigration and Integration
const LESSON_6 = {
  id:"nlv2_b2gC_l6", title:"Immigratie en Integratie", icon:"\u{1F3E0}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Immigration and Integration",
     desc:"Immigration and integration are central topics in Dutch public debate. Master the vocabulary to follow news, discuss policy, and understand this key social issue.",
     goals:["Master 10 immigration and integration terms","Discuss Dutch integration policy","Understand social debate vocabulary"]},

    {type:"teach", trg:"de immigrante", src:"the (female) immigrant", pos:"noun", gender:"c",
     note:"Common gender (de). Female form of 'immigrant'.\n'Immigreren' = to immigrate.",
     example:"A: Mijn buurvrouw is een immigrante uit Marokko.\nB: Hoe lang woont ze hier al?\nA: Meer dan twintig jaar.\nB: Ze spreekt vast goed Nederlands.",
     exampleSrc:"A: My neighbour is a female immigrant from Morocco.\nB: How long has she lived here?\nA: More than twenty years.\nB: She must speak good Dutch.",
     funFact:"Dutch uses '-e' to create feminine forms: immigrant/immigrante, student/studente. This is becoming less common in modern usage."},

    {type:"teach", trg:"het inburgeringsbeleid", src:"the civic integration policy", pos:"noun", gender:"n",
     note:"Neuter (het). Inburgering (civic integration) + beleid (policy).\n'Inburgeren' = to integrate as a citizen.",
     example:"A: Het inburgeringsbeleid is weer veranderd.\nB: Wat is er anders?\nA: Nieuwkomers moeten nu sneller het examen doen.\nB: Dat kan best lastig zijn.",
     exampleSrc:"A: The civic integration policy has changed again.\nB: What is different?\nA: Newcomers now have to take the exam sooner.\nB: That can be quite difficult.",
     funFact:"The Dutch 'inburgeringsexamen' tests Dutch language, knowledge of Dutch society, and orientation on the Dutch labour market."},

    {type:"teach", trg:"de allochtoon", src:"the person of non-Dutch origin", pos:"noun", gender:"c",
     note:"Common gender (de). From Greek: allos (other) + chthon (land).\nControversial term, officially retired in 2016.",
     example:"A: Het woord 'allochtoon' wordt niet meer officieel gebruikt.\nB: Waarom niet?\nA: Het werd als stigmatiserend ervaren.\nB: Wat zegt men nu dan?\nA: 'Persoon met een migratieachtergrond.'",
     exampleSrc:"A: The word 'allochtoon' is no longer used officially.\nB: Why not?\nA: It was experienced as stigmatising.\nB: What do people say now then?\nA: 'Person with a migration background.'",
     funFact:"The Dutch government officially stopped using 'allochtoon' and 'autochtoon' in 2016. The WRR (Scientific Council) advised against the terms."},

    {type:"teach", trg:"de inschakeling", src:"the involvement / engagement / activation", pos:"noun", gender:"c",
     note:"Common gender (de). From 'inschakelen' (to involve/switch on).\n'Arbeidsmarktinschakeling' = labour market activation.",
     example:"A: De inschakeling van vrijwilligers is belangrijk.\nB: Ja, zonder hen lukt het niet.\nA: Hoe werven jullie vrijwilligers?\nB: Via sociale media en het buurthuis.",
     exampleSrc:"A: The involvement of volunteers is important.\nB: Yes, without them it won't work.\nA: How do you recruit volunteers?\nB: Through social media and the community centre.",
     funFact:"'Inschakelen' literally means 'to switch in'. Like flipping a switch to activate someone's participation in a process."},

    {type:"mc",
     q:"Waarom wordt het woord 'allochtoon' niet meer officieel gebruikt?",
     opts:["Het was te moeilijk uit te spreken","Het werd als stigmatiserend ervaren","Het was grammaticaal incorrect","Het was een Engels leenwoord"],
     ans:"Het werd als stigmatiserend ervaren",
     hint:"The term was felt to label people negatively based on their background."},

    {type:"teach", trg:"het internationalisme", src:"internationalism", pos:"noun", gender:"n",
     note:"Neuter (het). From 'internationaal' (international).\nThe belief in international cooperation.",
     example:"A: Nederland heeft een traditie van internationalisme.\nB: Ja, met het Internationaal Gerechtshof in Den Haag.\nA: En veel internationale organisaties.\nB: Dat past bij de handelsgeest.",
     exampleSrc:"A: The Netherlands has a tradition of internationalism.\nB: Yes, with the International Court of Justice in The Hague.\nA: And many international organisations.\nB: That fits the trading spirit.",
     funFact:"The Hague hosts over 200 international organisations, earning it the nickname 'the legal capital of the world'."},

    {type:"teach", trg:"de geloofsgenoot", src:"the fellow believer / co-religionist", pos:"noun", gender:"c",
     note:"Common gender (de). Geloof (faith) + genoot (companion).\n'Genoot' appears in many compounds.",
     example:"A: Hij heeft contact met geloofsgenoten in het buitenland.\nB: Via welke organisatie?\nA: Via de kerk, ze ondersteunen elkaar.\nB: Dat is mooi, zo'n netwerk.",
     exampleSrc:"A: He has contact with fellow believers abroad.\nB: Through which organisation?\nA: Through the church, they support each other.\nB: That's nice, such a network.",
     funFact:"The suffix '-genoot' means companion: geloofsgenoot (co-religionist), lotgenoot (fellow sufferer), vakgenoot (colleague in the same field)."},

    {type:"teach", trg:"het kiesrecht", src:"the right to vote / suffrage", pos:"noun", gender:"n",
     note:"Neuter (het). Kies (choose) + recht (right).\n'Algemeen kiesrecht' = universal suffrage.",
     example:"A: Wanneer kregen vrouwen kiesrecht in Nederland?\nB: In 1919, het actieve kiesrecht.\nA: Dat is nog niet zo lang geleden.\nB: Nee, en het passieve kiesrecht kwam in 1917.",
     exampleSrc:"A: When did women get the right to vote in the Netherlands?\nB: In 1919, the active right to vote.\nA: That's not so long ago.\nB: No, and the passive right to vote came in 1917.",
     funFact:"Aletta Jacobs was a pioneer for women's suffrage in the Netherlands. She was also the first female university student in the country."},

    {type:"fb",
     s:"Het {1} verplicht nieuwkomers om een taalexamen te doen.",
     a:["inburgeringsbeleid"],
     opts:["inburgeringsbeleid","internationalisme","kiesrecht","inschakeling"],
     hint:"The government policy that requires newcomers to integrate into Dutch society.",
     sSrc:"The {1} requires newcomers to take a language exam."},

    {type:"teach", trg:"de kerkdienst", src:"the church service", pos:"noun", gender:"c",
     note:"Common gender (de). Kerk (church) + dienst (service).\n'De zondagse dienst' = the Sunday service.",
     example:"A: Ga je zondag naar de kerkdienst?\nB: Ja, om tien uur in de Grote Kerk.\nA: Is het een Nederlandse dienst?\nB: Ja, met orgelmuziek.",
     exampleSrc:"A: Are you going to the church service on Sunday?\nB: Yes, at ten o'clock in the Grote Kerk.\nA: Is it a Dutch service?\nB: Yes, with organ music.",
     funFact:"The Netherlands has a unique religious landscape: the north is traditionally Protestant, the south Catholic. This is called the 'bijbelgordel' (Bible belt)."},

    {type:"teach", trg:"het kerkgenootschap", src:"the religious denomination", pos:"noun", gender:"n",
     note:"Neuter (het). Kerk (church) + genootschap (society).\n'Het protestantse kerkgenootschap' = the Protestant denomination.",
     example:"A: Tot welk kerkgenootschap behoort deze kerk?\nB: Het is een gereformeerde kerk.\nA: Is dat hetzelfde als hervormd?\nB: Nee, er zijn kleine verschillen.",
     exampleSrc:"A: Which denomination does this church belong to?\nB: It's a Reformed church.\nA: Is that the same as Dutch Reformed?\nB: No, there are small differences.",
     funFact:"The Dutch Reformed tradition split into many denominations. The distinction between 'hervormd' and 'gereformeerd' is uniquely Dutch."},

    {type:"mc",
     q:"Wanneer kregen vrouwen in Nederland het actieve kiesrecht?",
     opts:["1848","1890","1919","1945"],
     ans:"1919",
     hint:"Nearly a century ago. It came shortly after World War I ended."},

    {type:"fb",
     s:"Hij ontmoet zijn {1} elke zondag na de dienst.",
     a:["geloofsgenoten"],
     opts:["geloofsgenoten","kerkdienst","kerkgenootschap","kiesrecht"],
     hint:"People who share the same religious faith. Fellow believers.",
     sSrc:"He meets his {1} every Sunday after the service."},

    {type:"match", pairs:[
      {trg:"immigrante", src:"female immigrant"},
      {trg:"inburgeringsbeleid", src:"civic integration policy"},
      {trg:"allochtoon", src:"person of non-Dutch origin"},
      {trg:"inschakeling", src:"involvement / activation"}
    ]},

    {type:"mc",
     q:"Het suffix '-genoot' betekent:",
     opts:["Vijand","Metgezel, deelgenoot","Leider","Vreemdeling"],
     ans:"Metgezel, deelgenoot",
     hint:"Geloofsgenoot, lotgenoot, vakgenoot. They all share something with you."},

    {type:"fb",
     s:"Tot welk {1} behoort deze kerk?",
     a:["kerkgenootschap"],
     opts:["kerkgenootschap","kerkdienst","kiesrecht","geloofsgenoot"],
     hint:"The broader religious organisation or denomination a church belongs to.",
     sSrc:"Which {1} does this church belong to?"},

    {type:"match", pairs:[
      {trg:"kiesrecht", src:"right to vote"},
      {trg:"kerkdienst", src:"church service"},
      {trg:"kerkgenootschap", src:"denomination"},
      {trg:"internationalisme", src:"internationalism"}
    ]}
  ]
};
export default LESSON_6;
