const LESSON_9 = {
  id:"frv2_b2g7_l9", title:"Psychologie et emotions", icon:"\u{1F9E0}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Psychologie et emotions",
     desc:"Build vocabulary for discussing psychological states, emotions, and human behavior.",
     goals:["Learn 15 psychology and emotion words","Describe complex emotional states","Discuss human behavior patterns"]},

    {type:"teach", trg:"l'exaltation", src:"exaltation, fervor", pos:"noun", gender:"f",
     note:"Feminine noun. Intense excitement or enthusiasm, sometimes excessive.",
     example:"A: L'exaltation du public etait contagieuse.\nB: Tout le monde dansait et chantait.",
     exampleSrc:"A: The crowd's exaltation was contagious.\nB: Everyone was dancing and singing.",
     funFact:"Can be positive (passion) or negative (fanaticism). 'Un exalte' is someone dangerously overenthusiastic."},

    {type:"teach", trg:"l'exhibitionnisme", src:"exhibitionism", pos:"noun", gender:"m",
     note:"Masculine noun. Compulsive display of oneself.\nBoth psychological and legal term.",
     example:"A: L'exhibitionnisme sur les reseaux sociaux est courant.\nB: Tout le monde veut etre vu.",
     exampleSrc:"A: Exhibitionism on social media is common.\nB: Everyone wants to be seen.",
     funFact:"Beyond the clinical meaning, French uses this for any excessive self-display. 'Exhibitionnisme mediatique' describes attention-seeking celebrities."},

    {type:"teach", trg:"muer", src:"to molt, to transform", pos:"verb", gender:null,
     note:"Verb. For animals: to shed skin/feathers. For voice: to break.\nAlso figurative: to transform.",
     example:"A: Sa voix a mue pendant l'ete.\nB: Ca arrive a tous les adolescents.",
     exampleSrc:"A: His voice broke during the summer.\nB: It happens to all teenagers.",
     funFact:"Snakes 'muent' when shedding skin. Boys' voices 'muent' at puberty. Cities 'muent' when they transform radically."},

    {type:"teach", trg:"mollir", src:"to soften, to weaken", pos:"verb", gender:null,
     note:"Verb. To become soft or to lose determination.",
     example:"A: Le vent a molli en fin d'apres-midi.\nB: Tant mieux, la mer sera plus calme.",
     exampleSrc:"A: The wind weakened in the late afternoon.\nB: Good, the sea will be calmer.",
     funFact:"From 'mou/molle' (soft). 'Mollir' can describe wind dying down, resolve weakening, or muscles going slack."},

    {type:"mc",
     q:"Quel verbe decrit la voix d'un adolescent qui change ?",
     opts:["muer","mollir","magnifier","manoeuvrer"],
     ans:"muer",
     hint:"Animals shed their skin, and teenage boys' voices do this too."},

    {type:"teach", trg:"massacrant", src:"foul, terrible (mood)", pos:"adj", gender:null,
     note:"Adjective. Used almost exclusively in 'humeur massacrante'.\nFeminine: massacrante.",
     example:"A: Le patron est d'humeur massacrante aujourd'hui.\nB: Mieux vaut l'eviter.",
     exampleSrc:"A: The boss is in a foul mood today.\nB: Better to avoid him.",
     funFact:"From 'massacrer'. 'Humeur massacrante' is one of the most common fixed expressions in French for a terrible mood."},

    {type:"teach", trg:"menager", src:"to handle carefully, to spare", pos:"verb", gender:null,
     note:"Verb. To treat with care or to save resources.\nNot to be confused with 'le menage' (housework).",
     example:"A: Il faut menager ses forces pour la fin.\nB: Tu as raison, le marathon est long.",
     exampleSrc:"A: You must conserve your strength for the end.\nB: You're right, the marathon is long.",
     funFact:"'Menager la chevre et le chou' means to try to please everyone. 'Ne pas menager ses efforts' means to spare no effort."},

    {type:"teach", trg:"meridional", src:"southern", pos:"adj", gender:null,
     note:"Adjective. From or relating to the south of France.\nFeminine: meridionale. Also a noun.",
     example:"A: L'accent meridional est chantant.\nB: J'adore le parler du Midi.",
     exampleSrc:"A: The southern accent is melodic.\nB: I love the speech of the South.",
     funFact:"'Le Midi' is southern France. A 'meridional' is a southerner. The stereotype is warmth, expressiveness, and exaggeration."},

    {type:"fb",
     s:"Le chef est d'humeur {1}, ne lui parle pas maintenant.",
     a:["massacrante"],
     opts:["massacrante","meridionale","momentanee","multicolore"],
     hint:"A fixed expression meaning in a terrible, foul mood. From 'massacrer'.",
     sSrc:"The boss is in a {1} mood, don't talk to him now."},

    {type:"teach", trg:"le mecene", src:"a patron (of the arts)", pos:"noun", gender:"m",
     note:"Masculine noun. A wealthy supporter of arts or culture.",
     example:"A: Ce mecene finance le festival chaque annee.\nB: Sans lui, il n'existerait pas.",
     exampleSrc:"A: This patron funds the festival every year.\nB: Without him, it wouldn't exist.",
     funFact:"Named after Maecenas, the Roman who sponsored Virgil and Horace. French tax law encourages 'mecenat' (patronage)."},

    {type:"teach", trg:"le mecreant", src:"a nonbeliever, a scoundrel", pos:"noun", gender:"m",
     note:"Masculine noun. Originally: a non-Christian. Now: a rogue.\nFeminine: la mecreante.",
     example:"A: Ce mecreant n'a aucun scrupule.\nB: Il ferait n'importe quoi pour de l'argent.",
     exampleSrc:"A: This scoundrel has no scruples.\nB: He'd do anything for money.",
     funFact:"From 'mes-' (mis-) + 'creant' (believing). In medieval French, it meant infidel. Now it's a playful insult."},

    {type:"teach", trg:"la desillusionnement", src:"disillusionment", pos:"noun", gender:"m",
     note:"Masculine noun. Loss of illusions or naive beliefs.",
     example:"A: Le desillusionnement des jeunes face a la politique est reel.\nB: Ils se sentent ignores.",
     exampleSrc:"A: Young people's disillusionment with politics is real.\nB: They feel ignored.",
     funFact:"Post-WWI France experienced massive 'desillusionnement'. The 'Annees folles' (Roaring Twenties) were partly a reaction to it."},

    {type:"mc",
     q:"Quel mot designe un riche protecteur des arts ?",
     opts:["un mecene","un mecreant","un mentor","un mandataire"],
     ans:"un mecene",
     hint:"Named after the Roman Maecenas, patron of Virgil and Horace."},

    {type:"teach", trg:"le melanges", src:"a miscellany, a collection", pos:"noun", gender:"m",
     note:"Masculine noun (often plural). A varied collection of writings or items.",
     example:"A: Ce livre est un melanges d'essais et de poemes.\nB: J'aime cette variete.",
     exampleSrc:"A: This book is a miscellany of essays and poems.\nB: I love this variety.",
     funFact:"In academic French, 'Melanges' is a festschrift: a collection of essays honoring a scholar, a cherished tradition."},

    {type:"teach", trg:"la dechainement", src:"an unleashing, an outburst", pos:"noun", gender:"m",
     note:"Masculine noun. A violent release of force or emotion.",
     example:"A: Le dechainement de violence a surpris tout le monde.\nB: Personne ne l'avait vu venir.",
     exampleSrc:"A: The unleashing of violence surprised everyone.\nB: No one saw it coming.",
     funFact:"From 'de-' + 'chaine' (chain). To unchain. 'Se dechainer' means to go wild, like a storm or a crowd."},

    {type:"fb",
     s:"Le {1} des passions a mene a une confrontation violente.",
     a:["dechainement"],
     opts:["dechainement","desillusionnement","mecene","melanges"],
     hint:"When emotions break free of all restraint, like chains snapping.",
     sSrc:"The {1} of passions led to a violent confrontation."},

    {type:"match", pairs:[
      {trg:"massacrant", src:"foul (mood)"},
      {trg:"menager", src:"to handle carefully"},
      {trg:"meridional", src:"southern"},
      {trg:"mecene", src:"arts patron"},
      {trg:"muer", src:"to molt/transform"}
    ]},

    {type:"mc",
     q:"Quel verbe signifie 'devenir mou' ou 'perdre sa determination' ?",
     opts:["mollir","muer","menager","malmener"],
     ans:"mollir",
     hint:"From 'mou' (soft). To become weaker, like wind dying down."},

    {type:"fb",
     s:"Il faut {1} ses mots quand on parle a quelqu'un de fragile.",
     a:["menager"],
     opts:["menager","mollir","muer","magnifier"],
     hint:"To choose words carefully, to spare someone's feelings.",
     sSrc:"You must {1} your words when speaking to someone fragile."}
  ]
};
export default LESSON_9;
