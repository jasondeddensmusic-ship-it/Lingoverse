// French B2 Gap Batch 9 — Lesson 20: Synthèse et Révision
// Synthesis and review of all B2 gap vocabulary

const LESSON_20 = {id:"frv2_b2g9_l20", title:"Synthèse et Révision", icon:"🎓", xp:15, board:true, steps:[
  {type:"intro", title:"Synthèse et Révision",
   desc:"Review and consolidate all the advanced vocabulary from this batch. Test your mastery across all themes: society, media, health, law, culture, and more.",
   goals:["Review all 20 lessons of vocabulary","Test cross-thematic understanding","Consolidate B2-level expression"]},

  {type:"teach", trg:"la synthèse", src:"synthesis, summary", pos:"noun", gender:"f",
   note:"From Greek synthesis (putting together).\nCombining ideas into a coherent whole.",
   example:"A: La synthèse du rapport est claire.\nB: Tous les points clés sont résumés.",
   exampleSrc:"A: The report summary is clear.\nB: All key points are summarized.",
   funFact:"The exercice de synthèse (synthesis exercise) is a key part of French academic training."},

  {type:"teach", trg:"la consolidation", src:"consolidation", pos:"noun", gender:"f",
   note:"From consolider (to consolidate).\nStrengthening and making permanent.",
   example:"A: La consolidation des acquis est essentielle.\nB: Sans révision, on oublie vite.",
   exampleSrc:"A: Consolidating what you've learned is essential.\nB: Without review, you forget quickly.",
   funFact:"Consolidation de la mémoire is a neuroscience term: sleep helps cement new memories."},

  {type:"teach", trg:"la récapitulation", src:"recapitulation", pos:"noun", gender:"f",
   note:"From récapituler (to recap).\nGoing over the main points again.",
   example:"A: Faisons une récapitulation des thèmes abordés.\nB: Nous avons couvert vingt sujets différents.",
   exampleSrc:"A: Let's do a recap of the themes covered.\nB: We covered twenty different subjects.",
   funFact:"En récapitulant is a formal way to say 'in summary'. Very useful in presentations."},

  {type:"teach", trg:"l'approfondissement", src:"deepening, further study", pos:"noun", gender:"m",
   note:"From approfondir (to deepen) + -issement.\nGoing deeper into a subject.",
   example:"A: L'approfondissement de ces notions viendra plus tard.\nB: Pour l'instant, les bases suffisent.",
   exampleSrc:"A: Deepening these concepts will come later.\nB: For now, the basics are enough.",
   funFact:"Cours d'approfondissement means an advanced course that goes deeper than the introductory level."},

  {type:"mc", q:"Un pamphlet en français est:", opts:["Un guide de voyage","Un texte critique et polémique","Une brochure publicitaire","Un roman court"], ans:"Un texte critique et polémique",
   hint:"Unlike English pamphlet (informational), French pamphlet means a sharp attack."},

  {type:"fb", s:"La {1} de l'adversaire est une tactique malhonnête.", a:["diabolisation"], opts:["diabolisation","consolidation","récapitulation","synthèse"],
   hint:"Making your opponent appear evil. From diable (devil).",
   sSrc:"The {1} of opponents is a dishonest tactic."},

  {type:"mc", q:"Le paludisme est:", opts:["Une maladie transmise par les moustiques","Un trouble mental","Une allergie alimentaire","Un problème cardiaque"], ans:"Une maladie transmise par les moustiques",
   hint:"From Latin palus (swamp). The French word for malaria."},

  {type:"fb", s:"Il a travaillé {1} pour terminer sa thèse.", a:["nuit et jour"], opts:["nuit et jour","par écrit","dans l'absolu","au compte-gouttes"],
   hint:"Around the clock, without stopping. French puts night before day.",
   sSrc:"He worked {1} to finish his thesis."},

  {type:"mc", q:"'Au compte-gouttes' signifie:", opts:["En grande quantité","Avec un instrument médical","Très peu et très lentement","Avec précision"], ans:"Très peu et très lentement",
   hint:"Drop by drop. A figurative expression for getting very little at a time."},

  {type:"match", pairs:[
    {trg:"la persévérance", src:"perseverance"},
    {trg:"la perspicacité", src:"insight"},
    {trg:"la persuasion", src:"persuasion"},
    {trg:"la perquisition", src:"legal search"}
  ]},

  {type:"fb", s:"Les manifestants brandissaient des {1}.", a:["pancartes"], opts:["pancartes","parachutes","pamphlets","penchants"],
   hint:"Signs carried by protesters with slogans written on them.",
   sSrc:"The protesters were holding up {1}."},

  {type:"mc", q:"Le pluriel de grille-pain est:", opts:["Des grille-pain","Des grilles-pains","Des grille-pains","Des grilles-pain"], ans:"Des grille-pain",
   hint:"Verb + noun compounds are invariable. Nothing changes in the plural."},

  {type:"fb", s:"La {1} est un principe fondamental de la République.", a:["laïcité"], opts:["laïcité","grossièreté","malhonnêteté","niaiserie"],
   hint:"The French principle of separation of church and state.",
   sSrc:"{1} is a fundamental principle of the Republic."},

  {type:"mc", q:"Un confrère partage avec vous:", opts:["Le même bureau","La même famille","La même profession","Le même quartier"], ans:"La même profession",
   hint:"The prefix con- means 'with' and frère means 'brother'. Think of two doctors or two lawyers sharing a field."},

  {type:"match", pairs:[
    {trg:"la mâchoire", src:"jaw"},
    {trg:"la jointure", src:"joint (body)"},
    {trg:"la paralysie", src:"paralysis"},
    {trg:"le paludisme", src:"malaria"}
  ]},

  {type:"fb", s:"Le projet est {1}: il coûtera des milliards.", a:["pharaonique"], opts:["pharaonique","banal","pentu","piteux"],
   hint:"Like the pyramids. Absurdly grandiose and expensive.",
   sSrc:"The project is {1}: it will cost billions."},

  {type:"mc", q:"'Faire tout à sa guise' signifie:", opts:["Faire tout correctement","Faire tout comme on veut","Faire tout lentement","Faire tout en groupe"], ans:"Faire tout comme on veut",
   hint:"Guise means manner. À sa guise = as one pleases, in one's own way."},

  {type:"match", pairs:[
    {trg:"dans l'absolu", src:"in absolute terms"},
    {trg:"jusqu'au bout", src:"all the way"},
    {trg:"par écrit", src:"in writing"},
    {trg:"malgré moi", src:"in spite of myself"}
  ]},

  {type:"fb", s:"La {1} culturelle enrichit notre société.", a:["diversité"], opts:["diversité","discrimination","exclusion","déscolarisation"],
   hint:"Variety and difference as a positive force. Many cultures together.",
   sSrc:"Cultural {1} enriches our society."},

  {type:"mc", q:"Bibliothèque et librairie:", opts:["Sont des synonymes","Bibliothèque = library, librairie = bookshop","Sont des antonymes","Bibliothèque = bookshop, librairie = library"], ans:"Bibliothèque = library, librairie = bookshop",
   hint:"Classic false friend. One lends books, the other sells them."},

  {type:"match", pairs:[
    {trg:"le coffre-fort", src:"safe"},
    {trg:"le guet-apens", src:"ambush"},
    {trg:"le laissez-passer", src:"permit"},
    {trg:"le passe-passe", src:"sleight of hand"}
  ]},

  {type:"fb", s:"Les {1} empêchent le dialogue entre les cultures.", a:["préjugés"], opts:["préjugés","synthèses","consolidations","approfondissements"],
   hint:"Pre-judged opinions formed without knowing the facts.",
   sSrc:"{1} prevent dialogue between cultures."},

  {type:"mc", q:"S'obstiner a une connotation:", opts:["Positive","Négative: persister malgré la raison","Neutre","Variable selon le contexte"], ans:"Négative: persister malgré la raison",
   hint:"Unlike persévérer (positive), this verb implies irrational stubbornness."},

  {type:"match", pairs:[
    {trg:"la synthèse", src:"synthesis"},
    {trg:"la consolidation", src:"consolidation"},
    {trg:"la récapitulation", src:"recap"},
    {trg:"l'approfondissement", src:"deepening"}
  ]}
]};

export default LESSON_20;
