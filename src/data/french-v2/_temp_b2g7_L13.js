const LESSON_13 = {
  id:"frv2_b2g7_l13", title:"Identite et appartenance", icon:"\u{1F310}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Identite et appartenance",
     desc:"Learn vocabulary for discussing identity, heritage, and belonging in a diverse society.",
     goals:["Learn 15 words about identity and belonging","Discuss cultural heritage","Express views on diversity"]},

    {type:"teach", trg:"l'incarnation", src:"an incarnation, an embodiment", pos:"noun", gender:"f",
     note:"Feminine noun. The physical representation of an abstract idea.",
     example:"A: Elle est l'incarnation de l'elegance.\nB: Tout en elle respire la grace.",
     exampleSrc:"A: She is the embodiment of elegance.\nB: Everything about her exudes grace.",
     funFact:"From Latin 'incarnare' (to make flesh). Originally a religious term for God becoming human. Now used figuratively."},

    {type:"teach", trg:"l'incrustation", src:"an inlay, an intrusion", pos:"noun", gender:"f",
     note:"Feminine noun. Decorative embedding, or uninvited staying.\n'S'incruster' means to overstay one's welcome.",
     example:"A: Les incrustations de nacre decorent la boite.\nB: C'est un travail d'artisan magnifique.",
     exampleSrc:"A: The mother-of-pearl inlays decorate the box.\nB: It's magnificent craftsmanship.",
     funFact:"'S'incruster a une fete' means to crash a party. The word covers both beautiful artisan inlaying and unwanted social lingering."},

    {type:"teach", trg:"l'indigene", src:"indigenous, native", pos:"noun", gender:"m",
     note:"Masculine/feminine noun and adjective. A native inhabitant.\nCareful: has colonial overtones in French.",
     example:"A: Les peuples indigenes ont des droits fondamentaux.\nB: Il faut les reconnaitre et les proteger.",
     exampleSrc:"A: Indigenous peoples have fundamental rights.\nB: They must be recognized and protected.",
     funFact:"In French colonial history, 'indigene' had a legal status with fewer rights. Today, 'autochtone' is often preferred."},

    {type:"teach", trg:"l'anonymat", src:"anonymity", pos:"noun", gender:"m",
     note:"Masculine noun. The state of being unknown or unidentified.",
     example:"A: L'anonymat sur internet pose des problemes.\nB: Les gens disent ce qu'ils n'oseraient pas en face.",
     exampleSrc:"A: Anonymity on the internet poses problems.\nB: People say things they wouldn't dare face to face.",
     funFact:"In France, anonymous donations to political parties are capped at 150 euros. 'Garder l'anonymat' means to stay anonymous."},

    {type:"mc",
     q:"Quel mot signifie 'representer physiquement une idee abstraite' ?",
     opts:["l'incarnation","l'incrustation","l'anonymat","l'indigene"],
     ans:"l'incarnation",
     hint:"From Latin 'caro/carnis' (flesh). Making something abstract into flesh."},

    {type:"teach", trg:"la descendance", src:"descendants, offspring", pos:"noun", gender:"f",
     note:"Feminine noun. One's children and their children.\nCollective noun, not a single person.",
     example:"A: Sa descendance est nombreuse.\nB: Il a huit petits-enfants.",
     exampleSrc:"A: His offspring are numerous.\nB: He has eight grandchildren.",
     funFact:"In French genealogy, 'ascendance' goes up (ancestors) and 'descendance' goes down (descendants). Mirror terms."},

    {type:"teach", trg:"le compatriote", src:"a fellow countryman", pos:"noun", gender:"m",
     note:"Masculine noun. Someone from the same country.\nFeminine: la compatriote.",
     example:"A: J'ai rencontre un compatriote a l'etranger.\nB: Ca fait toujours plaisir.",
     exampleSrc:"A: I met a fellow countryman abroad.\nB: It's always nice.",
     funFact:"From 'com-' (with) + 'patriote'. French travelers abroad often bond with compatriotes over shared culture and language."},

    {type:"teach", trg:"la concordance", src:"agreement, consistency", pos:"noun", gender:"f",
     note:"Feminine noun. The state of being in agreement.\n'La concordance des temps' is a key grammar concept.",
     example:"A: La concordance des temoignages est frappante.\nB: Ils disent tous la meme chose.",
     exampleSrc:"A: The consistency of the testimonies is striking.\nB: They all say the same thing.",
     funFact:"'La concordance des temps' is a major grammar rule governing tense sequences. It's stricter in French than in English."},

    {type:"fb",
     s:"L'{1} en ligne permet de s'exprimer sans crainte de jugement.",
     a:["anonymat"],
     opts:["anonymat","incarnation","incrustation","indigene"],
     hint:"The state of being unknown, with no identity revealed.",
     sSrc:"Online {1} allows self-expression without fear of judgment."},

    {type:"teach", trg:"la coexistence", src:"coexistence", pos:"noun", gender:"f",
     note:"Feminine noun. Living together, especially different groups peacefully.",
     example:"A: La coexistence pacifique est un ideal.\nB: Il faut du respect mutuel.",
     exampleSrc:"A: Peaceful coexistence is an ideal.\nB: Mutual respect is needed.",
     funFact:"During the Cold War, 'coexistence pacifique' was a diplomatic concept. Now used for multicultural societies too."},

    {type:"teach", trg:"la conciliation", src:"reconciliation, balance", pos:"noun", gender:"f",
     note:"Feminine noun. Finding a balance between opposing needs.\nAlso: legal mediation.",
     example:"A: La conciliation travail-famille est un defi.\nB: C'est une question de societe.",
     exampleSrc:"A: Work-life balance is a challenge.\nB: It's a societal issue.",
     funFact:"In French labor law, 'conciliation' is the first step before a tribunal. It aims to resolve disputes without a full trial."},

    {type:"teach", trg:"le consul", src:"a consul", pos:"noun", gender:"m",
     note:"Masculine noun. A government representative in a foreign city.",
     example:"A: Le consul nous a aide avec les documents.\nB: Le consulat etait tres efficace.",
     exampleSrc:"A: The consul helped us with the documents.\nB: The consulate was very efficient.",
     funFact:"France has one of the world's largest consular networks with over 200 consulates. Napoleon was 'Premier Consul' before becoming Emperor."},

    {type:"mc",
     q:"Quel mot designe le fait de vivre ensemble en paix ?",
     opts:["la descendance","la coexistence","la concordance","la conciliation"],
     ans:"la coexistence",
     hint:"'Co-' (together) + 'existence' (living). Different groups sharing space peacefully."},

    {type:"teach", trg:"le communique", src:"a press release, a statement", pos:"noun", gender:"m",
     note:"Masculine noun. An official public announcement.",
     example:"A: Le communique de presse a ete publie ce matin.\nB: Il annonce une fusion importante.",
     exampleSrc:"A: The press release was published this morning.\nB: It announces a major merger.",
     funFact:"'Communique de presse' is the standard French term for press release. From the verb 'communiquer'."},

    {type:"teach", trg:"le consultant", src:"a consultant", pos:"noun", gender:"m",
     note:"Masculine noun. An expert advisor hired for specific projects.\nFeminine: la consultante.",
     example:"A: Le consultant a presente son rapport.\nB: Ses recommandations sont claires.",
     exampleSrc:"A: The consultant presented his report.\nB: His recommendations are clear.",
     funFact:"France has a huge consulting industry. The Big Four firms (Deloitte, PwC, EY, KPMG) all have major Paris offices."},

    {type:"fb",
     s:"La {1} entre vie professionnelle et vie privee reste un defi majeur.",
     a:["conciliation"],
     opts:["conciliation","coexistence","concordance","descendance"],
     hint:"Finding a balance between two competing demands, like work and family.",
     sSrc:"The {1} of professional and private life remains a major challenge."},

    {type:"match", pairs:[
      {trg:"incarnation", src:"embodiment"},
      {trg:"anonymat", src:"anonymity"},
      {trg:"compatriote", src:"fellow countryman"},
      {trg:"consul", src:"consul"},
      {trg:"communique", src:"press release"}
    ]},

    {type:"mc",
     q:"Quel mot designe l'accord entre differents temoignages ?",
     opts:["la coexistence","la descendance","la concordance","la conciliation"],
     ans:"la concordance",
     hint:"When multiple accounts agree with each other, showing consistency."},

    {type:"fb",
     s:"Les {1} de nacre sur le meuble en font une piece de collection.",
     a:["incrustations"],
     opts:["incrustations","incarnations","identifications","intensifications"],
     hint:"Decorative pieces embedded into a surface, like mother-of-pearl in wood.",
     sSrc:"The mother-of-pearl {1} on the furniture make it a collector's piece."}
  ]
};
export default LESSON_13;
