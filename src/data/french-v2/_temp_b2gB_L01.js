const LESSON_1 = {
  id:"frv2_b2gB_l1", title:"Justice et droit", icon:"\u2696\uFE0F", xp:15, board:true,
  steps:[
    {type:"intro", title:"Justice et droit",
     desc:"Enter the world of French law and justice. Learn vocabulary for courts, crimes, and legal proceedings.",
     goals:["Learn 10 legal and justice terms","Discuss court proceedings in French","Express opinions about law and order"]},

    {type:"teach", trg:"un administrateur", src:"an administrator", pos:"noun", gender:"m",
     note:"Masculine noun. Person who manages an organization or estate.\nFeminine: une administratrice.",
     example:"A: L'administrateur a convoque une reunion.\nB: Il doit expliquer les nouvelles regles.",
     exampleSrc:"A: The administrator called a meeting.\nB: He needs to explain the new rules.",
     funFact:"From Latin 'administrare' meaning to serve. In French law, an administrateur judiciaire manages bankrupt companies."},

    {type:"teach", trg:"un outrage", src:"an outrage, a contempt", pos:"noun", gender:"m",
     note:"Masculine noun. An insult or offense, especially against authority.\nOutrage a magistrat is a criminal offense in France.",
     example:"A: Il a ete condamne pour outrage a agent.\nB: Qu'est-ce qu'il avait fait exactement?",
     exampleSrc:"A: He was convicted of contempt of an officer.\nB: What exactly did he do?",
     funFact:"Insulting a police officer in France can result in a fine of up to 7,500 euros. Free speech has limits."},

    {type:"teach", trg:"un prevenu", src:"a defendant, an accused person", pos:"noun", gender:"m",
     note:"Masculine noun. A person charged with a crime before trial.\nFeminine: une prevenue.",
     example:"A: Le prevenu a plaide non coupable.\nB: Son avocat semble confiant.",
     exampleSrc:"A: The defendant pleaded not guilty.\nB: His lawyer seems confident.",
     funFact:"In French law, 'prevenu' is for minor offenses, 'accuse' for serious crimes. The distinction matters in court."},

    {type:"teach", trg:"proscrit", src:"banned, proscribed", pos:"adj", gender:null,
     note:"Adjective. Forbidden by law or authority.\nAlso used as a noun: un proscrit means an exile or outlaw.",
     example:"A: Ce produit est proscrit en Europe.\nB: Depuis quand exactement?",
     exampleSrc:"A: This product is banned in Europe.\nB: Since when exactly?",
     funFact:"Victor Hugo was himself a proscrit, exiled to Jersey and Guernsey for 19 years after opposing Napoleon III."},

    {type:"teach", trg:"la desobeissance", src:"disobedience", pos:"noun", gender:"f",
     note:"Feminine noun. The act of refusing to obey rules or authority.\nDesobeissance civile is a key concept in French political thought.",
     example:"A: La desobeissance civile a une longue tradition en France.\nB: C'est un droit fondamental pour certains.",
     exampleSrc:"A: Civil disobedience has a long tradition in France.\nB: It's a fundamental right for some.",
     funFact:"Thoreau coined 'civil disobedience' in 1849, but French thinkers like Etienne de La Boetie wrote about it 300 years earlier."},

    {type:"teach", trg:"la justification", src:"the justification", pos:"noun", gender:"f",
     note:"Feminine noun. A reason or explanation that defends an action.\nIn printing, it also means text alignment.",
     example:"A: Quelle est votre justification pour ce retard?\nB: J'ai eu un accident sur la route.",
     exampleSrc:"A: What is your justification for this delay?\nB: I had an accident on the road.",
     funFact:"In French bureaucracy, a 'justificatif' is a supporting document. You need them for everything from renting to opening a bank account."},

    {type:"teach", trg:"profaner", src:"to desecrate, to profane", pos:"verb", gender:null,
     note:"Regular -er verb. To treat something sacred with disrespect.\nProfanation is a criminal offense in France.",
     example:"A: Quelqu'un a profane le monument aux morts.\nB: C'est un acte inqualifiable.",
     exampleSrc:"A: Someone desecrated the war memorial.\nB: It's an unspeakable act.",
     funFact:"From Latin 'profanare' meaning to put before the temple, i.e. outside the sacred space. Pro (before) + fanum (temple)."},

    {type:"teach", trg:"la perseverance", src:"perseverance", pos:"noun", gender:"f",
     note:"Feminine noun. Steady persistence in a course of action.\nOften used in motivational and judicial contexts.",
     example:"A: Sa perseverance a fini par payer.\nB: Apres cinq ans de procedure, il a gagne.",
     exampleSrc:"A: His perseverance finally paid off.\nB: After five years of proceedings, he won.",
     funFact:"The Mars rover Perseverance has the same name in French. NASA chose it from a student essay contest."},

    {type:"teach", trg:"la perspicacite", src:"perspicacity, insight", pos:"noun", gender:"f",
     note:"Feminine noun. The quality of having keen mental perception.\nA prized trait in judges and investigators.",
     example:"A: Le juge a fait preuve d'une grande perspicacite.\nB: Il a vu ce que personne d'autre n'avait remarque.",
     exampleSrc:"A: The judge showed great perspicacity.\nB: He saw what nobody else had noticed.",
     funFact:"From Latin 'perspicax' meaning sharp-sighted. In French, it sounds more elegant than 'intelligence' in formal contexts."},

    {type:"teach", trg:"la division", src:"the division", pos:"noun", gender:"f",
     note:"Feminine noun. A separation into parts, or a section of an organization.\nAlso used for disagreement: semer la division.",
     example:"A: Cette loi a cree une division dans le parlement.\nB: Les debats ont ete tres vifs.",
     exampleSrc:"A: This law created a division in parliament.\nB: The debates were very heated.",
     funFact:"In French police, a 'division' is a department. The Division criminelle handles serious crimes, like the FBI's divisions."},

    {type:"mc", q:"Quel mot designe une personne accusee d'un delit avant le proces?",
     opts:["un prevenu","un administrateur","un outrage","une justification"],
     ans:"un prevenu",
     hint:"This person has been charged but not yet tried in court"},

    {type:"fb", s:"La {1} civile est un acte de resistance politique.",
     a:["desobeissance"], opts:["desobeissance","justification","division","perspicacite"],
     hint:"Think of deliberately refusing to obey unjust laws as a political statement",
     sSrc:"Civil {1} is an act of political resistance."},

    {type:"mc", q:"Que signifie 'profaner' un lieu sacre?",
     opts:["Le photographier","Le traiter avec irrespect","Le renover","Le visiter"],
     ans:"Le traiter avec irrespect",
     hint:"The verb comes from putting something outside the sacred space"},

    {type:"match", pairs:[
      {trg:"un outrage", src:"contempt / offense"},
      {trg:"un prevenu", src:"a defendant"},
      {trg:"la perspicacite", src:"insight"},
      {trg:"proscrit", src:"banned"}
    ]},

    {type:"fb", s:"Sa {1} lui a permis de resoudre l'enigme.",
     a:["perspicacite"], opts:["perspicacite","perseverance","division","justification"],
     hint:"This quality involves sharp mental perception and keen observation",
     sSrc:"His {1} allowed him to solve the mystery."},

    {type:"mc", q:"Quel est le feminin de 'administrateur'?",
     opts:["administrateure","administrateresse","administratrice","administrateuse"],
     ans:"administratrice",
     hint:"This follows the regular -teur to -trice pattern like acteur/actrice"},

    {type:"fb", s:"Ce comportement est {1} par le reglement interieur.",
     a:["proscrit"], opts:["proscrit","profane","divise","justifie"],
     hint:"The adjective means forbidden or banned by rules",
     sSrc:"This behavior is {1} by the internal regulations."},

    {type:"mc", q:"'Semer la division' signifie:",
     opts:["Planter des graines","Calculer une operation","Organiser un groupe","Creer des desaccords"],
     ans:"Creer des desaccords",
     hint:"Semer means to sow; think of spreading something negative among people"},

    {type:"fb", s:"L'{1} a presente les comptes annuels.",
     a:["administrateur"], opts:["administrateur","outrage","prevenu","justification"],
     hint:"The person who manages and oversees an organization's affairs",
     sSrc:"The {1} presented the annual accounts."},

    {type:"match", pairs:[
      {trg:"la justification", src:"justification"},
      {trg:"la perseverance", src:"perseverance"},
      {trg:"profaner", src:"to desecrate"},
      {trg:"la division", src:"division"}
    ]}
  ]
};
export default LESSON_1;
