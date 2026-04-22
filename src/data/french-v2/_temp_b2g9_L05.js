// French B2 Gap Batch 9. Lesson 5: Expressions et Locutions
// Fixed expressions and adverbial phrases

const LESSON_5 = {id:"frv2_b2g9_l5", title:"Expressions et Locutions", icon:"💬", xp:15, board:true, steps:[
  {type:"intro", title:"Expressions et Locutions",
   desc:"Master advanced French fixed expressions and adverbial phrases. These phrases make your French sound natural and precise at B2 level.",
   goals:["Learn 20 fixed expressions","Use adverbial locutions fluently","Understand register and nuance"]},

  {type:"teach", trg:"dans l'absolu", src:"in absolute terms", pos:"adv", gender:null,
   note:"Fixed adverbial phrase.\nUsed to consider something theoretically, without context.",
   example:"A: Dans l'absolu, tu as raison.\nB: Mais en pratique, c'est plus compliqué.",
   exampleSrc:"A: In absolute terms, you're right.\nB: But in practice, it's more complicated.",
   funFact:"French loves contrasting 'dans l'absolu' with 'en pratique' or 'en réalité'."},

  {type:"teach", trg:"dans l'espoir de", src:"in the hope of", pos:"adv", gender:null,
   note:"Fixed prepositional phrase + de + infinitive.\nExpresses motivation through hope.",
   example:"A: Il est parti dans l'espoir de trouver du travail.\nB: La ville offre plus d'opportunités.",
   exampleSrc:"A: He left in the hope of finding work.\nB: The city offers more opportunities.",
   funFact:"Espoir and espérer share the root. Espoir is the noun, espérer the verb."},

  {type:"teach", trg:"malgré moi", src:"in spite of myself", pos:"adv", gender:null,
   note:"Malgré (despite) + moi (me).\nDoing something involuntarily or reluctantly.",
   example:"A: J'ai souri malgré moi.\nB: C'était trop drôle pour résister.",
   exampleSrc:"A: I smiled in spite of myself.\nB: It was too funny to resist.",
   funFact:"You can substitute any pronoun: malgré lui, malgré elle, malgré nous, malgré eux."},

  {type:"teach", trg:"par écrit", src:"in writing", pos:"adv", gender:null,
   note:"Par (by) + écrit (writing).\nThe formal way to confirm something officially.",
   example:"A: Veuillez confirmer par écrit.\nB: Je vous envoie un courriel aujourd'hui.",
   exampleSrc:"A: Please confirm in writing.\nB: I'll send you an email today.",
   funFact:"The opposite is 'par oral' or 'à l'oral'. French administration loves 'par écrit'."},

  {type:"teach", trg:"par téléphone", src:"by phone", pos:"adv", gender:null,
   note:"Par (by) + téléphone.\nPar + means of communication is a standard pattern.",
   example:"A: Je l'ai contacté par téléphone.\nB: Il a répondu immédiatement.",
   exampleSrc:"A: I contacted him by phone.\nB: He responded immediately.",
   funFact:"French uses par for the means: par téléphone, par courriel, par courrier, par avion."},

  {type:"teach", trg:"jusqu'au bout", src:"all the way, to the end", pos:"adv", gender:null,
   note:"Jusqu'à (until) + le bout (the end).\nSeeing something through completely.",
   example:"A: Il est allé jusqu'au bout de son projet.\nB: Sa détermination force le respect.",
   exampleSrc:"A: He went all the way with his project.\nB: His determination commands respect.",
   funFact:"Aller jusqu'au bout is a very common expression meaning to see something through to completion."},

  {type:"teach", trg:"là-dessus", src:"on that, thereupon", pos:"adv", gender:null,
   note:"Là (there) + dessus (on top).\nReferring to a topic just mentioned, or physically on it.",
   example:"A: Là-dessus, je suis entièrement d'accord.\nB: Passons au sujet suivant alors.",
   exampleSrc:"A: On that, I completely agree.\nB: Let's move on to the next topic then.",
   funFact:"French has a complete set: là-dessus (on that), là-dessous (under that), là-dedans (in that)."},

  {type:"teach", trg:"là-dedans", src:"in there, in that", pos:"adv", gender:null,
   note:"Là (there) + dedans (inside).\nPhysically inside something, or involved in a matter.",
   example:"A: Qu'est-ce qu'il y a là-dedans?\nB: Je ne sais pas, ouvre la boîte.",
   exampleSrc:"A: What's in there?\nB: I don't know, open the box.",
   funFact:"Là-dedans can be figurative: 'Je ne veux pas être mêlé là-dedans' means I don't want to be involved in that."},

  {type:"teach", trg:"nuit et jour", src:"night and day", pos:"adv", gender:null,
   note:"Fixed expression for constant, unceasing effort.\nNote: French reverses the English order.",
   example:"A: Elle travaille nuit et jour pour réussir.\nB: J'espère qu'elle prend soin de sa santé.",
   exampleSrc:"A: She works night and day to succeed.\nB: I hope she takes care of her health.",
   funFact:"English says 'day and night' but French says 'nuit et jour', putting night first."},

  {type:"mc", q:"'Dans l'absolu' est suivi le plus souvent de:", opts:["Une nuance ou une restriction","Un ordre","Une question","Un compliment"], ans:"Une nuance ou une restriction",
   hint:"You state the absolute truth, then add 'but in reality...' as a contrast."},

  {type:"teach", trg:"par moments", src:"at times, now and then", pos:"adv", gender:null,
   note:"Par (by) + moments (moments, plural).\nOccasionally, intermittently.",
   example:"A: Par moments, je doute de moi.\nB: C'est normal, tout le monde doute parfois.",
   exampleSrc:"A: At times, I doubt myself.\nB: That's normal, everyone doubts sometimes.",
   funFact:"Par moments (plural) means 'at times'. Par moment (singular) is less common but also used."},

  {type:"teach", trg:"pas le moins du monde", src:"not in the slightest", pos:"adv", gender:null,
   note:"Strong negation. Literally: not the least of the world.\nVery emphatic denial.",
   example:"A: Tu es fâché?\nB: Pas le moins du monde!",
   exampleSrc:"A: Are you angry?\nB: Not in the slightest!",
   funFact:"This is an intensified version of 'pas du tout'. French loves emphatic negation."},

  {type:"teach", trg:"en marge de", src:"on the sidelines of, apart from", pos:"adv", gender:null,
   note:"En marge (in the margin) + de.\nOutside the mainstream or main event.",
   example:"A: En marge du sommet, des manifestations ont eu lieu.\nB: Les protestataires voulaient se faire entendre.",
   exampleSrc:"A: On the sidelines of the summit, demonstrations took place.\nB: The protesters wanted to be heard.",
   funFact:"Marge means margin. Being 'en marge' means literally in the margins of society or an event."},

  {type:"teach", trg:"c'est-à-dire que", src:"that is to say, in other words", pos:"adv", gender:null,
   note:"Fixed expression for clarification.\nOften abbreviated c.-à-d. in writing.",
   example:"A: Je suis végétarien, c'est-à-dire que je ne mange pas de viande.\nB: Et le poisson?",
   exampleSrc:"A: I'm vegetarian, that is to say I don't eat meat.\nB: And fish?",
   funFact:"Abbreviated as c.-à-d. in French texts, similar to English 'i.e.' from Latin 'id est'."},

  {type:"fb", s:"Il a travaillé {1} pour terminer le projet à temps.", a:["nuit et jour"], opts:["nuit et jour","par écrit","là-dessus","dans l'absolu"],
   hint:"Around the clock, without stopping. French puts night before day.",
   sSrc:"He worked {1} to finish the project on time."},

  {type:"teach", trg:"par suite de", src:"as a result of, owing to", pos:"adv", gender:null,
   note:"Formal expression of cause.\nPar suite de + noun = because of.",
   example:"A: Par suite de la tempête, les vols sont annulés.\nB: Nous devrons prendre le train.",
   exampleSrc:"A: As a result of the storm, flights are canceled.\nB: We'll have to take the train.",
   funFact:"More formal than 'à cause de'. Used in official announcements and written French."},

  {type:"teach", trg:"par contraste avec", src:"in contrast with", pos:"adv", gender:null,
   note:"Formal comparison marker.\nUsed in essays, analyses, and academic writing.",
   example:"A: Par contraste avec l'année dernière, les résultats sont excellents.\nB: L'équipe a fait un travail remarquable.",
   exampleSrc:"A: In contrast with last year, the results are excellent.\nB: The team did remarkable work.",
   funFact:"French academic writing relies heavily on contrast markers like this one."},

  {type:"mc", q:"'Pas le moins du monde' exprime:", opts:["Un désaccord modéré","Une négation très forte","Une hésitation","Un accord total"], ans:"Une négation très forte",
   hint:"Not the least of the world. This is the strongest way to say 'absolutely not'."},

  {type:"fb", s:"{1} du festival, des ateliers étaient organisés.", a:["En marge"], opts:["En marge","Par suite","Par contraste","Là-dessus"],
   hint:"On the sidelines of the main event, as a separate activity.",
   sSrc:"{1} of the festival, workshops were organized."},

  {type:"match", pairs:[
    {trg:"dans l'absolu", src:"in absolute terms"},
    {trg:"malgré moi", src:"in spite of myself"},
    {trg:"par écrit", src:"in writing"},
    {trg:"jusqu'au bout", src:"to the end"}
  ]},

  {type:"mc", q:"'C'est-à-dire que' sert à:", opts:["Poser une question","Donner un ordre","Clarifier ou reformuler","Exprimer un doute"], ans:"Clarifier ou reformuler",
   hint:"This expression introduces a clarification or rephrasing of what was just said."},

  {type:"fb", s:"{1} de l'inondation, les routes sont coupées.", a:["Par suite"], opts:["Par suite","Par contraste","Dans l'espoir","En marge"],
   hint:"Because of, as a result of. A formal way to express causation.",
   sSrc:"{1} of the flooding, the roads are cut off."},

  {type:"match", pairs:[
    {trg:"là-dessus", src:"on that topic"},
    {trg:"là-dedans", src:"in there"},
    {trg:"par moments", src:"at times"},
    {trg:"nuit et jour", src:"night and day"}
  ]}
]};

export default LESSON_5;
