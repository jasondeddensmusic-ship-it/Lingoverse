// L14: Formal Language and Archaic Pronouns
const LESSON_14 = {
  id:"nlv2_b2g6_l14", title:"Formeel Taalgebruik", icon:"\uD83D\uDCDC", xp:15, board:true,
  steps:[
    {type:"intro", title:"Formal Language and Archaic Pronouns",
     desc:"Explore the formal and archaic corners of Dutch. From the old pronoun 'gij' to formal expressions, these words appear in literature, religion, and official documents.",
     goals:["Learn 10 formal and archaic Dutch terms","Understand the pronoun 'gij' and its usage","Recognize formal register markers"]},

    {type:"teach", trg:"gij", src:"you (archaic/Flemish formal)", pos:"pron", gender:null,
     note:"The old second person pronoun.\nStill used in Belgium, the Bible, and legal texts.",
     example:"A: Gij zult niet stelen.\nB: Dat is uit de Bijbel, toch?\nA: Ja, de Tien Geboden.\nB: In Vlaanderen gebruiken ze 'gij' nog dagelijks.",
     exampleSrc:"A: Thou shalt not steal.\nB: That is from the Bible, right?\nA: Yes, the Ten Commandments.\nB: In Flanders they still use 'gij' daily.",
     funFact:"In Belgium, 'gij' is the everyday informal pronoun, while in the Netherlands it sounds biblical or medieval. This creates funny misunderstandings."},

    {type:"teach", trg:"hemzelf", src:"himself", pos:"pron", gender:null,
     note:"Hem (him) + zelf (self). Emphatic pronoun.\nUsed to stress that the person did it themselves.",
     example:"A: Hij heeft het hemzelf aangedaan.\nB: Niemand heeft hem gedwongen?\nA: Nee, het was zijn eigen keuze.\nB: Dat is jammer.",
     exampleSrc:"A: He brought it upon himself.\nB: Nobody forced him?\nA: No, it was his own choice.\nB: That is a shame.",
     funFact:"Dutch emphatic pronouns (hemzelf, haarzelf, zichzelf) are used more frequently in formal writing than in spoken language."},

    {type:"teach", trg:"de aanspreekvorm", src:"the form of address", pos:"noun", gender:"c",
     note:"Compound: aanspreken (to address) + vorm (form).\nHow you address someone: je/jij, u, or gij.",
     example:"A: Welke aanspreekvorm gebruik je in een brief?\nB: Formeel? Dan 'u' natuurlijk.\nA: En informeel?\nB: Dan gewoon 'je' of 'jij'.",
     exampleSrc:"A: Which form of address do you use in a letter?\nB: Formal? Then 'u' of course.\nA: And informal?\nB: Then just 'je' or 'jij'.",
     funFact:"The Dutch u/jij distinction is fading. Many companies now use 'je' with customers. Using 'u' with young people can feel awkward."},

    {type:"teach", trg:"het aandachtspunt", src:"the point of attention, the issue to note", pos:"noun", gender:"n",
     note:"Compound: aandacht (attention) + punt (point).\nUsed in meetings and reports for items requiring focus.",
     example:"A: Er zijn drie aandachtspunten voor het project.\nB: Welke zijn dat?\nA: Budget, planning en communicatie.\nB: Laten we met het budget beginnen.",
     exampleSrc:"A: There are three points of attention for the project.\nB: Which ones?\nA: Budget, planning, and communication.\nB: Let us start with the budget.",
     funFact:"Dutch meetings are structured around 'aandachtspunten' and 'actiepunten' (action points). The poldermodel demands that every concern is addressed."},

    {type:"teach", trg:"de continuïteit", src:"the continuity", pos:"noun", gender:"c",
     note:"From Latin 'continuitas'. Note the trema on the i.\nMaintaining something without interruption.",
     example:"A: De continuïteit van het bedrijf staat op het spel.\nB: Waarom?\nA: De directeur is plotseling vertrokken.\nB: Er moet snel een opvolger komen.",
     exampleSrc:"A: The continuity of the company is at stake.\nB: Why?\nA: The director has suddenly left.\nB: A successor must come quickly.",
     funFact:"Dutch businesses prioritize 'continuïteit' highly. Succession planning and knowledge transfer are standard in Dutch corporate culture."},

    {type:"mc",
     q:"In welk land wordt 'gij' nog dagelijks gebruikt?",
     opts:["Belgie (Vlaanderen)","Nederland","Duitsland","Engeland"],
     ans:"Belgie (Vlaanderen)",
     hint:"In the Netherlands it sounds archaic, but across the southern border it is the everyday informal pronoun."},

    {type:"teach", trg:"de beoefenaar", src:"the practitioner", pos:"noun", gender:"c",
     note:"From 'beoefenen' (to practice, to engage in).\nSomeone who practices an art, sport, or profession.",
     example:"A: Hij is een beoefenaar van de martial arts.\nB: Welke discipline?\nA: Judo, al sinds zijn jeugd.\nB: Dat verklaart zijn discipline.",
     exampleSrc:"A: He is a practitioner of martial arts.\nB: Which discipline?\nA: Judo, since his youth.\nB: That explains his discipline.",
     funFact:"The Netherlands has produced many Olympic judo champions. Anton Geesink's 1964 gold medal shocked Japan and made judo global news."},

    {type:"teach", trg:"de geboortestad", src:"the city of birth, the birthplace", pos:"noun", gender:"c",
     note:"Compound: geboorte (birth) + stad (city).\nAppears on official documents.",
     example:"A: Wat is jouw geboortestad?\nB: Amsterdam, maar ik woon nu in Utrecht.\nA: Voel je je nog Amsterdammer?\nA: Altijd, dat zit in je bloed.",
     exampleSrc:"A: What is your city of birth?\nB: Amsterdam, but I now live in Utrecht.\nA: Do you still feel like an Amsterdammer?\nB: Always, that is in your blood.",
     funFact:"Dutch identity is strongly tied to birthplace. People from Amsterdam, Rotterdam, and The Hague have distinct identities and friendly rivalries."},

    {type:"teach", trg:"de handtasdief", src:"the purse snatcher, the bag thief", pos:"noun", gender:"c",
     note:"Compound: handtas (handbag) + dief (thief).\nA specific type of petty criminal.",
     example:"A: Er was een handtasdief actief op de markt.\nB: Is iemand bestolen?\nA: Ja, drie vrouwen.\nB: De politie zoekt naar de dader.",
     exampleSrc:"A: There was a purse snatcher active at the market.\nB: Was someone robbed?\nA: Yes, three women.\nB: The police are looking for the perpetrator.",
     funFact:"Bag snatching on scooters was a major problem in Amsterdam. The city introduced specific anti-snatch measures including banning scooters from bike paths."},

    {type:"fb",
     s:"In vergaderingen bespreken we altijd de belangrijkste {1}.",
     a:["aandachtspunten"],
     opts:["aandachtspunten","aanspreekvorm","continuïteit","geboortestad"],
     hint:"Points that require attention or focus. Items on the agenda that need to be addressed.",
     sSrc:"In meetings we always discuss the most important {1}."},

    {type:"teach", trg:"de hoeder", src:"the guardian, the keeper", pos:"noun", gender:"c",
     note:"From 'hoeden' (to guard, to watch over).\nAn archaic but still used word for protector.",
     example:"A: Zij is de hoeder van de familietraditie.\nB: Ze houdt alles in stand?\nA: Ja, zonder haar zou het verdwijnen.\nB: Dat is een belangrijke rol.",
     exampleSrc:"A: She is the guardian of the family tradition.\nB: She keeps everything alive?\nA: Yes, without her it would disappear.\nB: That is an important role.",
     funFact:"The famous Dutch question 'Ben ik mijn broeders hoeder?' (Am I my brother's keeper?) from Genesis is still used in political debates."},

    {type:"teach", trg:"de geleerde", src:"the scholar, the learned person", pos:"noun", gender:"c",
     note:"From 'geleerd' (learned). A substantivized adjective.\nUsed for highly educated intellectuals.",
     example:"A: Erasmus was de grootste geleerde van zijn tijd.\nB: Hij woonde in Rotterdam.\nA: De universiteit is naar hem vernoemd.\nB: Een van de beroemdste Nederlanders ooit.",
     exampleSrc:"A: Erasmus was the greatest scholar of his time.\nB: He lived in Rotterdam.\nA: The university is named after him.\nB: One of the most famous Dutch people ever.",
     funFact:"Erasmus of Rotterdam (1466-1536) was the most influential Dutch intellectual in history. The Erasmus exchange program bears his name."},

    {type:"mc",
     q:"Wat is een 'aanspreekvorm'?",
     opts:["De manier waarop je iemand aanspreekt (u, je, gij)","Een soort telefoonformulier","Een type werkwoord","Een formele brief"],
     ans:"De manier waarop je iemand aanspreekt (u, je, gij)",
     hint:"'Aanspreken' means to address someone. The 'vorm' (form) refers to whether you use u, je, or g...."},

    {type:"match", pairs:[
      {trg:"gij", src:"thou (archaic you)"},
      {trg:"aanspreekvorm", src:"form of address"},
      {trg:"continuïteit", src:"continuity"},
      {trg:"beoefenaar", src:"practitioner"}
    ]},

    {type:"fb",
     s:"Erasmus was de grootste {1} van de Renaissance in de Lage Landen.",
     a:["geleerde"],
     opts:["geleerde","hoeder","beoefenaar","handtasdief"],
     hint:"A highly educated intellectual or scholar. From the adjective 'geleerd' (learned).",
     sSrc:"Erasmus was the greatest {1} of the Renaissance in the Low Countries."},

    {type:"mc",
     q:"Wat betekent 'continuïteit'?",
     opts:["Het voortbestaan zonder onderbreking","Een continent in de aardrijkskunde","Een soort contract","Een muzikale term"],
     ans:"Het voortbestaan zonder onderbreking",
     hint:"From Latin 'continuitas'. The state of continuing without interruption. Important in business planning."}
  ]
};
export default LESSON_14;
