const LESSON_16 = {
  id:"frv2_b2g3_l16", title:"Conflits et résolutions", icon:"\u{1F91D}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Conflits et résolutions",
     desc:"Learn vocabulary for discussing conflicts, disagreements, and how they are resolved in French.",
     goals:["Learn 17 B2 conflict and resolution words","Discuss disagreements and their causes","Express ideas about peace and reconciliation"]},

    {type:"teach", trg:"un déchaînement", src:"an outburst, an unleashing", pos:"noun", gender:"m",
     note:"Masculine noun. A violent outpouring of emotion or force.",
     example:"A: Le déchaînement de violence a surpris tout le monde.\nB: La situation a dégénéré très vite.",
     exampleSrc:"A: The outburst of violence surprised everyone.\nB: The situation deteriorated very quickly.",
     funFact:"Literally 'unchaining'. The image is powerful: emotions or forces breaking free from restraints. Used for storms, crowds, and media frenzies."},

    {type:"teach", trg:"les démêlés", src:"disputes, legal troubles", pos:"noun", gender:"m",
     note:"Masculine plural noun. Run-ins with authority or ongoing disputes. Always plural.",
     example:"A: Il a eu des démêlés avec la justice.\nB: Son avocat essaie de régler l'affaire.",
     exampleSrc:"A: He has had run-ins with the law.\nB: His lawyer is trying to settle the matter.",
     funFact:"From 'demeler' meaning to untangle. 'Demeles' are tangled legal or personal conflicts that need sorting out. Very common in news reporting."},

    {type:"teach", trg:"ensanglanter", src:"to stain with blood", pos:"verb", gender:null,
     note:"Verb. To cover or stain with blood. Figuratively: to mark with violent events.",
     example:"A: La guerre civile a ensanglanté le pays pendant des années.\nB: Les cicatrices sont encore visibles.",
     exampleSrc:"A: The civil war bloodied the country for years.\nB: The scars are still visible.",
     funFact:"A powerful literary verb. Journalists use 'ensanglanter' for terrorist attacks: 'l'attentat qui a ensanglante Paris' carries enormous emotional weight."},

    {type:"teach", trg:"le barbelé", src:"barbed wire", pos:"noun", gender:"m",
     note:"Masculine noun/adjective. Wire with sharp points. 'Fil barbele' is the full term.",
     example:"A: Les barbelés empêchent le passage.\nB: C'est une zone militaire interdite.",
     exampleSrc:"A: The barbed wire prevents passage.\nB: It's a restricted military zone.",
     funFact:"Barbed wire defined World War I trenches. The French word 'barbele' comes from 'barbe' (beard), describing the wire's pointed 'whiskers'."},

    {type:"mc",
     q:"Quel mot désigne des problèmes ou conflits avec la justice ?",
     opts:["des démêlés","des barbelés","des déchaînements","des détonations"],
     ans:"des démêlés",
     hint:"This plural noun comes from 'demeler' (to untangle). It describes tangled legal or personal conflicts."},

    {type:"teach", trg:"la déflation", src:"deflation", pos:"noun", gender:"f",
     note:"Feminine noun. A general decline in prices. Opposite of inflation.",
     example:"A: La déflation inquiète les économistes.\nB: La baisse des prix peut paralyser l'économie.",
     exampleSrc:"A: Deflation worries economists.\nB: Falling prices can paralyze the economy.",
     funFact:"Japan's 'lost decade' of deflation is studied in French economics courses. France experienced deflation briefly during the 2009 financial crisis."},

    {type:"teach", trg:"un désapprobateur", src:"disapproving", pos:"adj", gender:null,
     note:"Adjective. Expressing disapproval. Feminine: desapprobatrice.",
     example:"A: Il m'a lancé un regard désapprobateur.\nB: Apparemment, il n'est pas d'accord.",
     exampleSrc:"A: He gave me a disapproving look.\nB: Apparently, he doesn't agree.",
     funFact:"The French 'regard desapprobateur' (disapproving look) is a cultural art form. French people can communicate entire paragraphs through facial expressions."},

    {type:"teach", trg:"débraillé", src:"disheveled, slovenly", pos:"adj", gender:null,
     note:"Adjective. Having untidy clothing or appearance. Feminine: debraillee.",
     example:"A: Il est arrivé tout débraillé à l'entretien.\nB: Ce n'est pas la meilleure première impression.",
     exampleSrc:"A: He arrived all disheveled at the interview.\nB: It's not the best first impression.",
     funFact:"From 'braies' meaning old-style trousers. Someone 'debraille' literally has their clothes undone. French culture is quite judgmental about appearance."},

    {type:"teach", trg:"un attardé", src:"delayed, backward", pos:"adj", gender:null,
     note:"Adjective. Lagging behind in development. Can be offensive when applied to people.",
     example:"A: Ce projet est attardé par rapport au calendrier.\nB: Il faut accélérer le rythme.",
     exampleSrc:"A: This project is behind schedule.\nB: We need to pick up the pace.",
     funFact:"Be careful: 'attarde mental' was once a clinical term but is now considered offensive. Use 'en retard de developpement' instead."},

    {type:"fb",
     s:"La guerre civile a {1} le pays pendant plus de dix ans.",
     a:["ensanglanté"],
     opts:["ensanglanté","déchaîné","barbelé","attardé"],
     hint:"This powerful verb means to stain with blood, both literally and figuratively for violent events.",
     sSrc:"The civil war {1} the country for more than ten years."},

    {type:"teach", trg:"un atteint", src:"affected, suffering from", pos:"adj", gender:null,
     note:"Adjective. Affected by a disease or condition. Feminine: atteinte.",
     example:"A: Elle est atteinte d'une maladie rare.\nB: Les médecins cherchent un traitement.",
     exampleSrc:"A: She is affected by a rare disease.\nB: Doctors are looking for a treatment.",
     funFact:"'Porter atteinte a' means to harm or violate. 'Atteinte a la vie privee' is invasion of privacy. A very productive legal term."},

    {type:"teach", trg:"le différencié", src:"differentiated", pos:"adj", gender:null,
     note:"Adjective. Distinguished or made distinct from others. Feminine: differenciee.",
     example:"A: L'enseignement différencié s'adapte à chaque élève.\nB: C'est plus efficace que le cours magistral.",
     exampleSrc:"A: Differentiated teaching adapts to each student.\nB: It's more effective than lecturing.",
     funFact:"'Pedagogie differenciee' is a major concept in French education. Each student gets personalized learning paths within the same classroom."},

    {type:"teach", trg:"la désaffection", src:"disaffection, loss of interest", pos:"noun", gender:"f",
     note:"Feminine noun. A gradual loss of loyalty, interest, or attachment.",
     example:"A: La désaffection des électeurs pour les partis traditionnels grandit.\nB: L'abstention est à un niveau record.",
     exampleSrc:"A: Voters' disaffection with traditional parties is growing.\nB: Abstention is at a record level.",
     funFact:"'Desaffection' also means physically abandoning a building. A 'lieu desaffecte' is a decommissioned building repurposed for art or housing."},

    {type:"mc",
     q:"Quel adjectif décrit quelqu'un dont les vêtements sont en désordre ?",
     opts:["débraillé","désapprobateur","différencié","attardé"],
     ans:"débraillé",
     hint:"This adjective comes from 'braies' (old trousers). It describes someone whose clothing is untidy or undone."},

    {type:"teach", trg:"le dénigrement", src:"denigration", pos:"noun", gender:"m",
     note:"Masculine noun. Systematic unfair criticism to damage someone's reputation.",
     example:"A: Le dénigrement constant nuit à l'ambiance de travail.\nB: C'est une forme de harcèlement.",
     exampleSrc:"A: Constant denigration harms the work atmosphere.\nB: It's a form of harassment.",
     funFact:"French law takes 'denigrement' seriously. In business, 'denigrement commercial' (unfairly criticizing a competitor) can lead to lawsuits."},

    {type:"teach", trg:"la déroute", src:"a rout, a crushing defeat", pos:"noun", gender:"f",
     note:"Feminine noun. A complete and disorderly defeat or collapse.",
     example:"A: L'élection a été une déroute pour le parti au pouvoir.\nB: Ils ont perdu presque tous leurs sièges.",
     exampleSrc:"A: The election was a rout for the ruling party.\nB: They lost almost all their seats.",
     funFact:"Waterloo (1815) is the archetypical 'deroute' in French history. The word comes from 'route' as in being thrown off one's path."},

    {type:"teach", trg:"l'ajourné", src:"postponed, deferred", pos:"adj", gender:null,
     note:"Adjective. Put off to a later date. Feminine: ajournee.",
     example:"A: La réunion a été ajournée à la semaine prochaine.\nB: Le directeur n'était pas disponible.",
     exampleSrc:"A: The meeting was postponed to next week.\nB: The director was not available.",
     funFact:"From 'jour' (day). 'Ajourner' means to set a new day. In exams, 'etre ajourne' means to have failed and must retake later."},

    {type:"match", pairs:[
      {trg:"démêlés", src:"legal troubles"},
      {trg:"barbelé", src:"barbed wire"},
      {trg:"désaffection", src:"disaffection"},
      {trg:"déroute", src:"crushing defeat"},
      {trg:"ajourné", src:"postponed"}
    ]},

    {type:"fb",
     s:"Le procès a été {1} en raison de l'absence d'un témoin clé.",
     a:["ajourné"],
     opts:["ajourné","ensanglanté","débraillé","dénigré"],
     hint:"This adjective means postponed or deferred to a later date. It comes from 'jour' (day).",
     sSrc:"The trial was {1} due to the absence of a key witness."}
  ]
};
export default LESSON_16;
