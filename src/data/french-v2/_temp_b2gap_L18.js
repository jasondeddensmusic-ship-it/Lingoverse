const LESSON_18 = {
  id:"frv2_b2gap_l18", title:"Histoire et heritage", icon:"\u{1F3F0}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Histoire et heritage",
     desc:"Vocabulary for history, tradition, cultural heritage, and the weight of the past. From benedictions to revolutions.",
     goals:["Learn 20 history and heritage vocabulary words","Discuss historical events in French","Explore cultural traditions and legacy"]},

    {type:"teach", trg:"la b\u00e9n\u00e9diction", src:"the benediction, the blessing", pos:"noun", gender:"f",
     note:"Feminine noun. A religious blessing or approval.",
     example:"A: Le pretre a donne sa benediction aux maries.\nB: C'etait une ceremonie emouvante.",
     exampleSrc:"A: The priest gave his blessing to the newlyweds.\nB: It was a moving ceremony.",
     funFact:"From Latin 'benedicere' (to speak well of). 'Donner sa benediction' also means to approve informally."},

    {type:"teach", trg:"l'av\u00e8nement", src:"the advent, the accession", pos:"noun", gender:"m",
     note:"Masculine noun. The coming or arrival of something important, especially a monarch.",
     example:"A: L'avenement de la republique a change la France.\nB: C'etait une revolution totale.",
     exampleSrc:"A: The advent of the republic changed France.\nB: It was a total revolution.",
     funFact:"From Latin 'advenire' (to arrive). Used for royal accessions and the dawn of new eras."},

    {type:"teach", trg:"le bagne", src:"the penal colony, the convict prison", pos:"noun", gender:"m",
     note:"Masculine noun. A prison with forced labor. Historical: overseas penal colonies.",
     example:"A: Le bagne de Cayenne etait terrible.\nB: Les conditions etaient inhumaines.",
     exampleSrc:"A: The penal colony of Cayenne was terrible.\nB: The conditions were inhumane.",
     funFact:"France sent convicts to penal colonies in Guiana until 1953. Devil's Island was the most infamous."},

    {type:"teach", trg:"le ch\u00e2telain", src:"the lord of a castle", pos:"noun", gender:"m",
     note:"Masculine noun. The owner or keeper of a chateau. Feminine: la chatelaine.",
     example:"A: Le chatelain a ouvert son chateau au public.\nB: Les visites sont passionnantes.",
     exampleSrc:"A: The castle lord opened his chateau to the public.\nB: The tours are fascinating.",
     funFact:"Many French castles are still privately owned. Being 'chatelain' means constant restoration work."},

    {type:"teach", trg:"le charnier", src:"the mass grave, the charnel house", pos:"noun", gender:"m",
     note:"Masculine noun. A place where bodies are deposited. Very solemn word.",
     example:"A: Un charnier a ete decouvert pres de l'ancien camp.\nB: C'est un devoir de memoire.",
     exampleSrc:"A: A mass grave was discovered near the former camp.\nB: It's a duty of remembrance.",
     funFact:"From Latin 'carnarium' (place for flesh). 'Devoir de memoire' (duty of remembrance) is sacred in France."},

    {type:"mc",
     q:"Comment appelle-t-on l'arrivee au pouvoir d'un monarque ou d'une ere nouvelle ?",
     opts:["l'av\u00e8nement","la b\u00e9n\u00e9diction","le bagne","le charnier"],
     ans:"l'av\u00e8nement",
     hint:"From Latin 'advenire' (to arrive). Used for the dawn of a new era or a king's accession."},

    {type:"teach", trg:"les armoiries", src:"the coat of arms", pos:"noun", gender:"f",
     note:"Feminine plural noun. Heraldic symbols identifying a family, city, or institution.",
     example:"A: Les armoiries de Paris portent un navire.\nB: Oui, avec la devise 'Fluctuat nec mergitur'.",
     exampleSrc:"A: The coat of arms of Paris bears a ship.\nB: Yes, with the motto 'It is tossed but does not sink'.",
     funFact:"Paris's motto 'Fluctuat nec mergitur' became a symbol of resilience after the 2015 attacks."},

    {type:"teach", trg:"la charte", src:"the charter", pos:"noun", gender:"f",
     note:"Feminine noun. A founding document establishing rights or principles.",
     example:"A: La charte des droits fondamentaux protege les citoyens.\nB: C'est un texte essentiel.",
     exampleSrc:"A: The charter of fundamental rights protects citizens.\nB: It's an essential text.",
     funFact:"The 'Charte de la laicite' is displayed in every French school. Chartes shaped medieval French law."},

    {type:"teach", trg:"l'ascendance", src:"the ancestry, the lineage", pos:"noun", gender:"f",
     note:"Feminine noun. One's line of ancestors and family origins.",
     example:"A: Elle est d'ascendance bretonne.\nB: Ca explique son amour de la mer.",
     exampleSrc:"A: She is of Breton ancestry.\nB: That explains her love of the sea.",
     funFact:"From 'ascendant' (ancestor). In French law, 'ascendants' are your parents, grandparents, etc."},

    {type:"fb",
     s:"Les {1} de la ville representent un lion et trois etoiles.",
     a:["armoiries"],
     opts:["armoiries","chartes","b\u00e9n\u00e9dictions","ascendances"],
     hint:"Heraldic symbols on a shield identifying a family or city. Paris's bear a ship.",
     sSrc:"The city's {1} depict a lion and three stars."},

    {type:"teach", trg:"le centurion", src:"the centurion", pos:"noun", gender:"m",
     note:"Masculine noun. A Roman military officer commanding 100 soldiers.",
     example:"A: Le centurion commandait ses legionnaires avec autorite.\nB: Rome dominait le monde.",
     exampleSrc:"A: The centurion commanded his legionaries with authority.\nB: Rome dominated the world.",
     funFact:"From Latin 'centum' (hundred). Asterix comics made Roman centurions beloved characters in France."},

    {type:"teach", trg:"la coexistence", src:"the coexistence", pos:"noun", gender:"f",
     note:"Feminine noun. Living or existing together, especially despite differences.",
     example:"A: La coexistence pacifique est possible.\nB: Il faut du respect mutuel.",
     exampleSrc:"A: Peaceful coexistence is possible.\nB: It requires mutual respect.",
     funFact:"'Coexistence pacifique' was a Cold War diplomatic term. Now used for multicultural societies."},

    {type:"teach", trg:"le crochet", src:"the hook, the detour", pos:"noun", gender:"m",
     note:"Masculine noun. A hook. Also: a crochet stitch, or a detour.",
     example:"A: Faisons un crochet par le village.\nB: Bonne idee, il est pittoresque.",
     exampleSrc:"A: Let's make a detour through the village.\nB: Good idea, it's picturesque.",
     funFact:"'Faire un crochet' = to make a detour. 'Vivre aux crochets de' = to live off someone else's money."},

    {type:"teach", trg:"le dixieme", src:"the tenth", pos:"noun", gender:"m",
     note:"Masculine noun. One tenth, or the tenth part.",
     example:"A: Seul un dixieme de la population a vote.\nB: C'est un taux de participation tres faible.",
     exampleSrc:"A: Only a tenth of the population voted.\nB: That's a very low turnout.",
     funFact:"French ordinal fractions: 'un dixieme', 'un centieme', 'un millieme'. Clean mathematical system."},

    {type:"mc",
     q:"Comment appelle-t-on une colonie penitentiaire ou les condamnes faisaient des travaux forces ?",
     opts:["un bagne","un charnier","un centurion","un crochet"],
     ans:"un bagne",
     hint:"France had famous ones in Guiana. Devil's Island was the most notorious."},

    {type:"teach", trg:"le devin", src:"the fortune-teller, the seer", pos:"noun", gender:"m",
     note:"Masculine noun. A person who predicts the future. Feminine: la devineresse.",
     example:"A: Je ne suis pas devin, je ne peux pas predire l'avenir.\nB: Personne ne le peut.",
     exampleSrc:"A: I'm no fortune-teller, I can't predict the future.\nB: Nobody can.",
     funFact:"From Latin 'divinus' (divine). 'Deviner' (to guess) comes from the same root. 'Devinette' = riddle."},

    {type:"teach", trg:"l'all\u00e9gresse", src:"the elation, the jubilation", pos:"noun", gender:"f",
     note:"Feminine noun. Intense joy and excitement. Very literary word.",
     example:"A: L'allegresse etait generale apres la victoire.\nB: Tout le monde dansait dans les rues.",
     exampleSrc:"A: The jubilation was universal after the victory.\nB: Everyone was dancing in the streets.",
     funFact:"From Latin 'alacer' (lively). Used in historical writing for moments of collective joy."},

    {type:"teach", trg:"barber", src:"to bore (someone)", pos:"verb", gender:null,
     note:"Verb. To bore someone terribly. Very informal, almost slang.",
     example:"A: Ce cours me barbe completement.\nB: Moi aussi, j'ai envie de dormir.",
     exampleSrc:"A: This class bores me to death.\nB: Me too, I feel like sleeping.",
     funFact:"Possibly from the idea of a barber's monotonous work. 'Barbant' (boring) is the common adjective."},

    {type:"fb",
     s:"L'{1} etait generale dans les rues apres la victoire.",
     a:["all\u00e9gresse"],
     opts:["all\u00e9gresse","ascendance","b\u00e9n\u00e9diction","coexistence"],
     hint:"Intense collective joy and celebration. A literary word from Latin 'alacer' (lively).",
     sSrc:"The {1} was universal in the streets after the victory."},

    {type:"teach", trg:"le bagage", src:"the baggage, the knowledge base", pos:"noun", gender:"m",
     note:"Masculine noun. Luggage. Figurative: one's experience and knowledge.",
     example:"A: Elle a un solide bagage intellectuel.\nB: Ses etudes l'ont bien preparee.",
     exampleSrc:"A: She has a solid intellectual baggage.\nB: Her studies prepared her well.",
     funFact:"'Plier bagage' means to pack up and leave. 'Bagage culturel' = cultural knowledge and background."},

    {type:"teach", trg:"la broutille", src:"the trifle, the triviality", pos:"noun", gender:"f",
     note:"Feminine noun. Something of no importance. A trivial matter.",
     example:"A: Ne t'inquiete pas, c'est une broutille.\nB: Tu as raison, ce n'est rien.",
     exampleSrc:"A: Don't worry, it's a trifle.\nB: You're right, it's nothing.",
     funFact:"From 'brouter' (to graze). Originally meant the small twigs animals nibble on. Tiny and unimportant."},

    {type:"match", pairs:[
      {trg:"b\u00e9n\u00e9diction", src:"blessing"},
      {trg:"bagne", src:"penal colony"},
      {trg:"ch\u00e2telain", src:"castle lord"},
      {trg:"devin", src:"fortune-teller"},
      {trg:"broutille", src:"trifle"}
    ]},

    {type:"mc",
     q:"Quel nom designe le proprietaire ou gardien d'un chateau ?",
     opts:["le ch\u00e2telain","le centurion","le devin","le charnier"],
     ans:"le ch\u00e2telain",
     hint:"From 'chateau' (castle). Many French castles are still privately owned by these people."},

    {type:"fb",
     s:"Je ne suis pas {1}, je ne peux pas predire ce qui va se passer.",
     a:["devin"],
     opts:["devin","centurion","ch\u00e2telain","charnier"],
     hint:"A fortune-teller or seer. From Latin 'divinus' (divine). Related to 'deviner' (to guess).",
     sSrc:"I'm not a {1}, I can't predict what's going to happen."}
  ]
};
export default LESSON_18;
