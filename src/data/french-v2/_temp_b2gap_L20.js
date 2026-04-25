const LESSON_20 = {
  id:"frv2_b2gap_l20", title:"Monde moderne", icon:"\u{1F310}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Monde moderne",
     desc:"Vocabulary for the modern world: technology, dysfunction, social change, and contemporary challenges.",
     goals:["Learn 20 modern world vocabulary words","Discuss contemporary issues in French","Navigate technology and social change topics"]},

    {type:"teach", trg:"coder", src:"to code, to program", pos:"verb", gender:null,
     note:"Verb. To write computer code. Also: to encode or assign codes.",
     example:"A: Mon fils apprend a coder a l'ecole.\nB: C'est une competence essentielle aujourd'hui.",
     exampleSrc:"A: My son is learning to code at school.\nB: It's an essential skill today.",
     funFact:"French uses both 'coder' and 'programmer'. 'Code informatique' = computer code. 'Coder' is more modern."},

    {type:"teach", trg:"le dysfonctionnement", src:"the dysfunction, the malfunction", pos:"noun", gender:"m",
     note:"Masculine noun. A failure to function properly. Used for systems and organizations.",
     example:"A: Il y a un dysfonctionnement dans le systeme.\nB: Les informaticiens travaillent dessus.",
     exampleSrc:"A: There's a malfunction in the system.\nB: The IT team is working on it.",
     funFact:"'Dys-' (bad) + 'fonctionnement' (functioning). Also used for organizational problems, not just machines."},

    {type:"teach", trg:"la dissociation", src:"the dissociation, the separation", pos:"noun", gender:"f",
     note:"Feminine noun. The act of separating connected things. Also a psychological term.",
     example:"A: La dissociation entre theorie et pratique pose probleme.\nB: Il faut reconcilier les deux.",
     exampleSrc:"A: The disconnect between theory and practice is problematic.\nB: We need to reconcile the two.",
     funFact:"In psychology, 'dissociation' describes a mental disconnect from reality. Used in trauma studies."},

    {type:"teach", trg:"la cryptographie", src:"cryptography", pos:"noun", gender:"f",
     note:"Feminine noun. The science of encoding and decoding secret messages.",
     example:"A: La cryptographie protege nos donnees en ligne.\nB: C'est la base de la securite informatique.",
     exampleSrc:"A: Cryptography protects our data online.\nB: It's the foundation of computer security.",
     funFact:"From Greek 'kryptos' (hidden) + 'graphein' (to write). France was a pioneer in cryptography during WWII."},

    {type:"teach", trg:"l'accrochage", src:"the collision, the clash", pos:"noun", gender:"m",
     note:"Masculine noun. A minor collision or a heated argument.",
     example:"A: Il y a eu un accrochage sur l'autoroute.\nB: Rien de grave, juste de la tole froissee.",
     exampleSrc:"A: There was a fender-bender on the highway.\nB: Nothing serious, just crumpled metal.",
     funFact:"From 'accrocher' (to hook/catch). Covers everything from car scrapes to heated verbal exchanges."},

    {type:"mc",
     q:"Quel mot designe un probleme de fonctionnement dans un systeme ?",
     opts:["un dysfonctionnement","un accrochage","une dissociation","une cryptographie"],
     ans:"un dysfonctionnement",
     hint:"'Dys-' (bad) + 'fonctionnement' (functioning). Used for machines and organizations alike."},

    {type:"teach", trg:"l'anonymat", src:"the anonymity", pos:"noun", gender:"m",
     note:"Masculine noun. The state of being unknown or unidentified.",
     example:"A: Il prefere garder l'anonymat.\nB: C'est son droit le plus strict.",
     exampleSrc:"A: He prefers to remain anonymous.\nB: That's entirely his right.",
     funFact:"From Greek 'anonymos' (nameless). 'Sous couvert d'anonymat' = under the cloak of anonymity."},

    {type:"teach", trg:"appr\u00e9ciable", src:"appreciable, significant", pos:"adj", gender:null,
     note:"Adjective. Large enough to be noticed or valued.",
     example:"A: Les progres sont appreciables.\nB: On voit une nette amelioration.",
     exampleSrc:"A: The progress is appreciable.\nB: There's a clear improvement.",
     funFact:"From 'apprecier' (to appreciate/value). Means 'worth appreciating' rather than 'grateful'."},

    {type:"teach", trg:"l'adduction", src:"the supply (water/gas piping)", pos:"noun", gender:"f",
     note:"Feminine noun. The process of bringing water or gas to a location via pipes.",
     example:"A: L'adduction d'eau potable est un defi dans cette region.\nB: Les infrastructures manquent.",
     exampleSrc:"A: The supply of drinking water is a challenge in this region.\nB: Infrastructure is lacking.",
     funFact:"From Latin 'adducere' (to lead toward). 'Adduction d'eau' is a key term in civil engineering."},

    {type:"fb",
     s:"Il y a un {1} dans le logiciel, les donnees ne s'enregistrent pas.",
     a:["dysfonctionnement"],
     opts:["dysfonctionnement","accrochage","anonymat","cryptographie"],
     hint:"A failure to function properly. 'Dys-' + 'fonctionnement'. Used for both tech and organizational failures.",
     sSrc:"There is a {1} in the software, the data isn't saving."},

    {type:"teach", trg:"consommateur", src:"consumer", pos:"noun", gender:"m",
     note:"Masculine noun (also adjective). A buyer of goods. Feminine: consommatrice.",
     example:"A: Le consommateur a de plus en plus de pouvoir.\nB: Grace aux reseaux sociaux.",
     exampleSrc:"A: The consumer has more and more power.\nB: Thanks to social media.",
     funFact:"'Societe de consommation' (consumer society) is a critical term in French sociology and philosophy."},

    {type:"teach", trg:"diff\u00e9renci\u00e9", src:"differentiated, distinct", pos:"adj", gender:null,
     note:"Adjective. Made distinct or specialized. Feminine: differenciee.",
     example:"A: Il faut une approche differenciee pour chaque eleve.\nB: L'education personnalisee est cle.",
     exampleSrc:"A: We need a differentiated approach for each student.\nB: Personalized education is key.",
     funFact:"Big in French education: 'pedagogie differenciee' = teaching adapted to each student's level."},

    {type:"teach", trg:"contributeur", src:"contributor", pos:"noun", gender:"m",
     note:"Masculine noun (also adjective). A person who contributes. Feminine: contributrice.",
     example:"A: Les contributeurs du projet sont nombreux.\nB: Chacun apporte sa pierre a l'edifice.",
     exampleSrc:"A: The project contributors are numerous.\nB: Everyone adds their stone to the building.",
     funFact:"'Apporter sa pierre a l'edifice' (bring your stone to the building) means to do your part. Classic French."},

    {type:"teach", trg:"la diabolisation", src:"the demonization", pos:"noun", gender:"f",
     note:"Feminine noun. The act of portraying someone or something as evil.",
     example:"A: La diabolisation de l'adversaire est une strategie dangereuse.\nB: Ca detruit le debat.",
     exampleSrc:"A: The demonization of the opponent is a dangerous strategy.\nB: It destroys debate.",
     funFact:"From 'diable' (devil). Very common in French political commentary. 'Diaboliser' is the verb."},

    {type:"mc",
     q:"Quel adjectif decrit une approche adaptee aux besoins de chaque individu ?",
     opts:["diff\u00e9renci\u00e9","appr\u00e9ciable","consommateur","contributeur"],
     ans:"diff\u00e9renci\u00e9",
     hint:"Adapted to individual needs. The core concept in personalized teaching where each pupil gets a tailored approach."},

    {type:"teach", trg:"la connexion", src:"the connection", pos:"noun", gender:"f",
     note:"Feminine noun. A link between things, people, or networks.",
     example:"A: La connexion internet est tres lente ici.\nB: Essaie de redemarrer le routeur.",
     exampleSrc:"A: The internet connection is very slow here.\nB: Try restarting the router.",
     funFact:"Note the French spelling with '-xion' not '-ction'. 'Se connecter' = to log in/connect."},

    {type:"teach", trg:"conjoint", src:"joint, combined (also: spouse)", pos:"adj", gender:null,
     note:"Adjective. Done together. As a noun: 'le/la conjoint(e)' = spouse.",
     example:"A: C'est une decision conjointe.\nB: Les deux parties sont d'accord.",
     exampleSrc:"A: It's a joint decision.\nB: Both parties agree.",
     funFact:"'Conjoint' as a noun is the legal/administrative term for spouse. More formal than 'mari' or 'femme'."},

    {type:"teach", trg:"l'antih\u00e9ros", src:"the antihero", pos:"noun", gender:"m",
     note:"Masculine noun. A protagonist who lacks traditional heroic qualities.",
     example:"A: Ce personnage est un antiheros fascinant.\nB: Ses defauts le rendent humain.",
     exampleSrc:"A: This character is a fascinating antihero.\nB: His flaws make him human.",
     funFact:"French literature loves antiheroes: Meursault in Camus' 'L'Etranger' is the quintessential example."},

    {type:"fb",
     s:"La {1} de l'adversaire politique est une tactique courante.",
     a:["diabolisation"],
     opts:["diabolisation","dissociation","cryptographie","connexion"],
     hint:"Portraying someone as evil. From 'diable' (devil). Common in political commentary.",
     sSrc:"The {1} of the political opponent is a common tactic."},

    {type:"teach", trg:"la cinquantieme", src:"the fiftieth", pos:"noun", gender:"f",
     note:"Ordinal adjective. The 50th in a sequence.",
     example:"A: C'est la cinquantieme edition du festival.\nB: Un demi-siecle de culture !",
     exampleSrc:"A: It's the fiftieth edition of the festival.\nB: Half a century of culture!",
     funFact:"French ordinals add '-ieme' to the cardinal: 'cinquante' + '-ieme'. Except 'premier' (first)."},

    {type:"teach", trg:"l'app\u00e9tence", src:"the appetite, the desire for", pos:"noun", gender:"f",
     note:"Feminine noun. A natural inclination or desire for something. Formal register.",
     example:"A: Les jeunes ont une forte appetence pour le numerique.\nB: C'est leur univers naturel.",
     exampleSrc:"A: Young people have a strong appetite for digital technology.\nB: It's their natural world.",
     funFact:"From Latin 'appetentia' (desire). More refined than 'envie'. Used in business: 'appetence client'."},

    {type:"match", pairs:[
      {trg:"dysfonctionnement", src:"malfunction"},
      {trg:"anonymat", src:"anonymity"},
      {trg:"cryptographie", src:"cryptography"},
      {trg:"antih\u00e9ros", src:"antihero"},
      {trg:"connexion", src:"connection"}
    ]},

    {type:"mc",
     q:"Quel mot designe l'etat de ne pas etre identifie ou reconnu ?",
     opts:["l'adduction","l'anonymat","la connexion","la dissociation"],
     ans:"l'anonymat",
     hint:"From Greek 'anonymos' (nameless). The journalistic phrase 'sous couvert de ___' uses this state-of-being noun."},

    {type:"fb",
     s:"Les jeunes ont une forte {1} pour les nouvelles technologies.",
     a:["app\u00e9tence"],
     opts:["app\u00e9tence","connexion","diabolisation","dissociation"],
     hint:"A natural inclination or desire. More refined than 'envie'. Used in business for customer desire.",
     sSrc:"Young people have a strong {1} for new technologies."}
  ]
};
export default LESSON_20;
