const LESSON_7 = {
  id:"frv2_b2gB_l7", title:"Sentiments et psychologie", icon:"\u{1F9E0}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Sentiments et psychologie",
     desc:"Explore the vocabulary of emotions, character traits, and psychological concepts at an advanced level.",
     goals:["Learn 10 psychology and emotion terms","Describe character traits precisely","Discuss emotional states formally"]},

    {type:"teach", trg:"l'agressivite", src:"aggressiveness", pos:"noun", gender:"f",
     note:"Feminine noun. Hostile or violent behavior.\nCan be positive in business: agressivite commerciale = aggressive marketing.",
     example:"A: Son agressivite au travail lui pose des problemes.\nB: Il devrait consulter un psychologue.",
     exampleSrc:"A: His aggressiveness at work is causing him problems.\nB: He should see a psychologist.",
     funFact:"In French sports commentary, 'agressivite' is a compliment. It means playing with intensity and determination."},

    {type:"teach", trg:"l'infidelite", src:"infidelity, unfaithfulness", pos:"noun", gender:"f",
     note:"Feminine noun. Disloyalty, especially in romantic relationships.\nAlso applies to ideas: infidelite a ses principes.",
     example:"A: L'infidelite a detruit leur mariage.\nB: La confiance ne peut plus etre retablie.",
     exampleSrc:"A: Infidelity destroyed their marriage.\nB: Trust can no longer be restored.",
     funFact:"Adultery was a criminal offense in France until 1975. The law punished women more severely than men."},

    {type:"teach", trg:"la malhonnetete", src:"dishonesty", pos:"noun", gender:"f",
     note:"Feminine noun. Lack of honesty or integrity.\nMal (bad) + honnetete (honesty).",
     example:"A: Sa malhonnetete a ete revelee par la presse.\nB: Il avait menti pendant des annees.",
     exampleSrc:"A: His dishonesty was revealed by the press.\nB: He had been lying for years.",
     funFact:"The French value 'honnetete intellectuelle' (intellectual honesty) highly in debates. Admitting you are wrong earns respect."},

    {type:"teach", trg:"predisposer", src:"to predispose", pos:"verb", gender:null,
     note:"Regular -er verb. To make someone likely to have a certain condition or attitude.\nEtre predispose a = to be predisposed to.",
     example:"A: Sa famille le predispose a l'hypertension.\nB: Il doit surveiller son alimentation.",
     exampleSrc:"A: His family predisposes him to hypertension.\nB: He needs to watch his diet.",
     funFact:"French medicine takes genetic predisposition seriously. Your 'medecin traitant' (primary doctor) always asks about family history."},

    {type:"teach", trg:"presager", src:"to foreshadow, to predict", pos:"verb", gender:null,
     note:"Regular -er verb (with accent change: presage).\nCela ne presage rien de bon = that bodes ill.",
     example:"A: Ces nuages ne presagent rien de bon.\nB: On ferait mieux de rentrer avant la tempete.",
     exampleSrc:"A: These clouds don't bode well.\nB: We'd better go home before the storm.",
     funFact:"Presager comes from Latin 'praesagire'. French literature is full of presages, from Moliere's comedies to Hugo's dramas."},

    {type:"teach", trg:"la prunelle", src:"the pupil (of the eye), the sloe", pos:"noun", gender:"f",
     note:"Feminine noun. The dark center of the eye, or a small wild plum.\nTenir a quelque chose comme a la prunelle de ses yeux = to cherish greatly.",
     example:"A: Il tient a cette montre comme a la prunelle de ses yeux.\nB: C'est un souvenir de son grand-pere.",
     exampleSrc:"A: He cherishes this watch like the apple of his eye.\nB: It's a memento from his grandfather.",
     funFact:"The English 'apple of my eye' becomes 'la prunelle de mes yeux' in French. The prunelle (sloe berry) is tiny and dark, like the pupil."},

    {type:"teach", trg:"preter attention", src:"to pay attention", pos:"verb", gender:null,
     note:"Verb phrase. Preter (to lend) + attention.\nMore formal than 'faire attention'. Used in academic and professional contexts.",
     example:"A: Pretez attention a ce que je vais dire.\nB: Nous vous ecoutons attentivement.",
     exampleSrc:"A: Pay attention to what I am about to say.\nB: We are listening attentively.",
     funFact:"'Preter attention' literally means to 'lend attention'. French treats attention as something you temporarily give to someone."},

    {type:"teach", trg:"un pseudonyme", src:"a pseudonym", pos:"noun", gender:"m",
     note:"Masculine noun. A fictitious name used by an author or artist.\nAlso used as adjective: un auteur pseudonyme.",
     example:"A: Cet ecrivain publie sous un pseudonyme.\nB: Personne ne connait sa vraie identite.",
     exampleSrc:"A: This writer publishes under a pseudonym.\nB: Nobody knows his real identity.",
     funFact:"Moliere, Voltaire, and Stendhal are all pseudonyms. French literary tradition practically requires a pen name."},

    {type:"teach", trg:"proferor", src:"to utter, to pronounce", pos:"verb", gender:null,
     note:"Regular -er verb (with accent: profere). To utter words, especially threats or insults.\nProferer des menaces = to utter threats.",
     example:"A: Il a profere des insultes en quittant la salle.\nB: Ce comportement est inacceptable.",
     exampleSrc:"A: He uttered insults as he left the room.\nB: This behavior is unacceptable.",
     funFact:"Proferer is almost always used with negative words: insults, threats, curses. You profere bad things, never compliments."},

    {type:"teach", trg:"proeminent", src:"prominent, protruding", pos:"adj", gender:null,
     note:"Adjective. Sticking out physically, or socially notable.\nFeminine: proeminente. Des yeux proeminents = bulging eyes.",
     example:"A: Son nez proeminent lui donne un air distingue.\nB: Ca lui donne du caractere, je trouve.",
     exampleSrc:"A: His prominent nose gives him a distinguished look.\nB: It gives him character, I think.",
     funFact:"In French, proeminent is purely physical (protruding). For social prominence, use 'eminent' or 'de premier plan' instead."},

    {type:"mc", q:"Que signifie 'presager'?",
     opts:["Annoncer a l'avance","Se souvenir","Regretter","Hesiter"],
     ans:"Annoncer a l'avance",
     hint:"The verb comes from Latin and means to sense or predict what will happen"},

    {type:"fb", s:"Elle tient a ce livre comme a la {1} de ses yeux.",
     a:["prunelle"], opts:["prunelle","agressivite","malhonnetete","infidelite"],
     hint:"The expression uses the word for the dark center of the eye to mean something cherished",
     sSrc:"She cherishes this book like the {1} of her eyes."},

    {type:"mc", q:"'Proferer' est generalement suivi de:",
     opts:["Menaces ou insultes","Compliments","Questions","Remerciements"],
     ans:"Menaces ou insultes",
     hint:"This verb is almost exclusively used with negative or threatening words"},

    {type:"match", pairs:[
      {trg:"l'agressivite", src:"aggressiveness"},
      {trg:"l'infidelite", src:"infidelity"},
      {trg:"la malhonnetete", src:"dishonesty"},
      {trg:"un pseudonyme", src:"a pseudonym"}
    ]},

    {type:"fb", s:"{1} a ce detail, il est tres important.",
     a:["Pretez attention"], opts:["Pretez attention","Presagez","Predisposez","Proferez"],
     hint:"The formal verb phrase means to lend your focus to something important",
     sSrc:"{1} to this detail, it is very important."},

    {type:"mc", q:"Que signifie 'proeminent' en francais?",
     opts:["Qui depasse physiquement","Qui est celebre","Qui est riche","Qui est intelligent"],
     ans:"Qui depasse physiquement",
     hint:"Unlike English 'prominent', the French word refers to something that physically sticks out"},

    {type:"fb", s:"Sa genetique le {1} aux maladies cardiaques.",
     a:["predispose"], opts:["predispose","presage","profere","promine"],
     hint:"The verb means to make someone naturally inclined toward a condition",
     sSrc:"His genetics {1} him to heart disease."},

    {type:"mc", q:"Quel ecrivain francais celebre a utilise un pseudonyme?",
     opts:["Moliere","Victor Hugo","Emile Zola","Gustave Flaubert"],
     ans:"Moliere",
     hint:"His real name was Jean-Baptiste Poquelin"},

    {type:"fb", s:"Son {1} est connu mais sa vraie identite reste secrete.",
     a:["pseudonyme"], opts:["pseudonyme","penchant","proeminent","presage"],
     hint:"The noun describes a false name used by writers and artists",
     sSrc:"His {1} is known but his real identity remains secret."},

    {type:"match", pairs:[
      {trg:"predisposer", src:"to predispose"},
      {trg:"presager", src:"to foreshadow"},
      {trg:"preter attention", src:"to pay attention"},
      {trg:"la prunelle", src:"the pupil (eye)"}
    ]}
  ]
};
export default LESSON_7;
