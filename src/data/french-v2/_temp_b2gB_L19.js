const LESSON_19 = {
  id:"frv2_b2gB_l19", title:"Morale et ethique", icon:"\u2696\uFE0F", xp:15, board:true,
  steps:[
    {type:"intro", title:"Morale et ethique",
     desc:"Explore the vocabulary of ethics, moral reasoning, and philosophical values at B2 level.",
     goals:["Learn 10 moral and ethical terms","Discuss ethical dilemmas","Express moral judgments formally"]},

    {type:"teach", trg:"l'exhibitionnisme", src:"exhibitionism", pos:"noun", gender:"m",
     note:"Masculine noun. Compulsive desire to display oneself, or to show off.\nAlso a legal term for indecent exposure.",
     example:"A: Son exhibitionnisme sur les reseaux sociaux est agacant.\nB: Il publie tout ce qu'il fait, meme ses repas.",
     exampleSrc:"A: His exhibitionism on social media is annoying.\nB: He posts everything he does, even his meals.",
     funFact:"French law treats exhibitionnisme as a crime (delit). Social media has blurred the line between sharing and exhibitionism."},

    {type:"teach", trg:"un pretexte", src:"a pretext, an excuse", pos:"noun", gender:"m",
     note:"Masculine noun. A reason given to hide the real motive.\nSous un pretexte fallacieux = under a false pretext.",
     example:"A: Il a trouve un pretexte pour ne pas venir.\nB: Je suis sur qu'il n'avait tout simplement pas envie.",
     exampleSrc:"A: He found a pretext for not coming.\nB: I'm sure he simply didn't feel like it.",
     funFact:"'Sous pretexte que' (on the pretext that) is essential in French argumentation. It signals you are exposing someone's real motivation."},

    {type:"teach", trg:"la clemence", src:"clemency, mercy", pos:"noun", gender:"f",
     note:"Feminine noun. Showing mercy or leniency toward someone.\nDemander clemence = to ask for mercy.",
     example:"A: Le juge a fait preuve de clemence.\nB: La peine est moins lourde que prevu.",
     exampleSrc:"A: The judge showed clemency.\nB: The sentence is lighter than expected.",
     funFact:"In French history, the right of clemency (grace presidentielle) belongs to the President. It has been used sparingly since the 1990s."},

    {type:"teach", trg:"la bienveillance", src:"benevolence, goodwill", pos:"noun", gender:"f",
     note:"Feminine noun. A disposition to do good, kindness.\nBien (well) + veillance (watching). Bienveillant = benevolent.",
     example:"A: La bienveillance est essentielle dans l'education.\nB: Les enfants apprennent mieux dans un climat de confiance.",
     exampleSrc:"A: Benevolence is essential in education.\nB: Children learn better in a climate of trust.",
     funFact:"'Education bienveillante' (positive parenting) became a major trend in France in the 2010s, challenging traditional strict French parenting."},

    {type:"teach", trg:"la rectitude", src:"rectitude, uprightness", pos:"noun", gender:"f",
     note:"Feminine noun. Moral correctness and strict honesty.\nRectitude morale = moral uprightness.",
     example:"A: Sa rectitude morale est reconnue par tous.\nB: Il n'a jamais trahi ses principes.",
     exampleSrc:"A: His moral rectitude is recognized by all.\nB: He has never betrayed his principles.",
     funFact:"In French politics, 'rectitude' is a powerful compliment. It implies incorruptibility, a rare quality in public life."},

    {type:"teach", trg:"la complaisance", src:"complacency, indulgence", pos:"noun", gender:"f",
     note:"Feminine noun. Excessive willingness to please, or self-satisfaction.\nPar complaisance = out of a desire to please.",
     example:"A: Sa complaisance envers le pouvoir est decevante.\nB: Il n'ose jamais critiquer ses superieurs.",
     exampleSrc:"A: His complacency toward power is disappointing.\nB: He never dares criticize his superiors.",
     funFact:"In French, complaisance is always slightly negative. It implies weakness or lack of backbone, unlike English 'compliance'."},

    {type:"teach", trg:"la probite", src:"probity, integrity", pos:"noun", gender:"f",
     note:"Feminine noun. Complete honesty and integrity.\nMore formal and stronger than 'honnetete'. Used in legal contexts.",
     example:"A: La probite de ce fonctionnaire est exemplaire.\nB: En vingt ans de carriere, pas une seule plainte.",
     exampleSrc:"A: This civil servant's probity is exemplary.\nB: In twenty years of career, not a single complaint.",
     funFact:"French civil servants must meet strict probite standards. The Haute Autorite pour la transparence monitors their financial declarations."},

    {type:"teach", trg:"l'equite", src:"equity, fairness", pos:"noun", gender:"f",
     note:"Feminine noun. Fairness and impartiality in treatment.\nDifferent from egalite: equite adjusts for circumstances.",
     example:"A: L'equite demande de traiter chacun selon ses besoins.\nB: Ce n'est pas la meme chose que l'egalite stricte.",
     exampleSrc:"A: Equity requires treating each person according to their needs.\nB: It's not the same as strict equality.",
     funFact:"The French debate between egalite and equite is constant. The Republic's motto says egalite, but policy often aims for equite."},

    {type:"teach", trg:"la rancune", src:"grudge, resentment", pos:"noun", gender:"f",
     note:"Feminine noun. Persistent ill feeling from a past wrong.\nGarder rancune a quelqu'un = to hold a grudge against someone.",
     example:"A: Il garde rancune a son frere depuis des annees.\nB: Une dispute d'heritage a detruit leur relation.",
     exampleSrc:"A: He's held a grudge against his brother for years.\nB: An inheritance dispute destroyed their relationship.",
     funFact:"'Sans rancune!' (no hard feelings!) is said after an argument to show the slate is clean. It is a very French gesture of reconciliation."},

    {type:"teach", trg:"l'impartialite", src:"impartiality", pos:"noun", gender:"f",
     note:"Feminine noun. Not favoring one side over another.\nIm (not) + partialite. Essential quality for judges and journalists.",
     example:"A: L'impartialite de la justice est un principe fondamental.\nB: Les juges doivent rester neutres en toutes circonstances.",
     exampleSrc:"A: The impartiality of justice is a fundamental principle.\nB: Judges must remain neutral in all circumstances.",
     funFact:"French judges can be 'recuses' (disqualified) if impartiality is in doubt. The system takes judicial neutrality very seriously."},

    {type:"mc", q:"Quelle est la difference entre egalite et equite?",
     opts:["L'equite adapte le traitement aux besoins individuels","Elles sont identiques","L'egalite est plus juste","L'equite ignore les differences"],
     ans:"L'equite adapte le traitement aux besoins individuels",
     hint:"One gives everyone the same thing; the other adjusts based on circumstances"},

    {type:"fb", s:"Il garde {1} a son ancien associe depuis la faillite.",
     a:["rancune"], opts:["rancune","clemence","bienveillance","equite"],
     hint:"The feminine noun for persistent resentment over a past wrong",
     sSrc:"He holds a {1} against his former business partner since the bankruptcy."},

    {type:"mc", q:"Que signifie 'sans rancune'?",
     opts:["Pas de ressentiment","Sans raison","Sans regret","Sans esperance"],
     ans:"Pas de ressentiment",
     hint:"This phrase is said after a disagreement to show the slate is wiped clean"},

    {type:"match", pairs:[
      {trg:"la clemence", src:"clemency"},
      {trg:"la bienveillance", src:"benevolence"},
      {trg:"la probite", src:"probity"},
      {trg:"l'impartialite", src:"impartiality"}
    ]},

    {type:"fb", s:"La {1} du juge a surpris l'accusation.",
     a:["clemence"], opts:["clemence","rancune","complaisance","rectitude"],
     hint:"The noun for showing mercy and leniency in a legal context",
     sSrc:"The judge's {1} surprised the prosecution."},

    {type:"mc", q:"La 'complaisance' est generalement:",
     opts:["Legerement negative","Tres positive","Neutre","Juridique"],
     ans:"Legerement negative",
     hint:"In French, this quality implies weakness and excessive willingness to please"},

    {type:"fb", s:"Sa {1} morale est un exemple pour tous.",
     a:["rectitude"], opts:["rectitude","rancune","complaisance","exhibitionnisme"],
     hint:"The noun for strict moral correctness and unwavering honesty",
     sSrc:"His moral {1} is an example for all."},

    {type:"mc", q:"Qu'est-ce que la 'probite'?",
     opts:["Une honnetete absolue","Une forme de courage","Un type de punition","Une qualite physique"],
     ans:"Une honnetete absolue",
     hint:"This formal word is stronger than mere honesty; it implies complete integrity"},

    {type:"fb", s:"L'{1} est exigee de tous les juges.",
     a:["impartialite"], opts:["impartialite","exhibitionnisme","complaisance","rancune"],
     hint:"The quality of not favoring either side, essential for judicial neutrality",
     sSrc:"{1} is required of all judges."},

    {type:"match", pairs:[
      {trg:"la rectitude", src:"uprightness"},
      {trg:"la complaisance", src:"complacency"},
      {trg:"la rancune", src:"resentment"},
      {trg:"l'equite", src:"equity"}
    ]}
  ]
};
export default LESSON_19;
