// French B2 Gap Batch 9. Lesson 7: Caractère et Personnalité
// Character and personality vocabulary

const LESSON_7 = {id:"frv2_b2g9_l7", title:"Caractère et Personnalité", icon:"🎭", xp:15, board:true, steps:[
  {type:"intro", title:"Caractère et Personnalité",
   desc:"Describe people's characters with nuance and precision. B2 requires vocabulary beyond simple 'nice' and 'mean' to portray personality traits accurately.",
   goals:["Learn 20 character trait words","Describe personalities with nuance","Distinguish positive and negative traits"]},

  {type:"teach", trg:"persévérant", src:"persevering, persistent", pos:"adj", gender:null,
   note:"From persévérer (to persevere).\nFeminine: persévérante. Someone who never gives up.",
   example:"A: Elle est très persévérante dans ses études.\nB: Rien ne la décourage.",
   exampleSrc:"A: She is very persistent in her studies.\nB: Nothing discourages her.",
   funFact:"Persévérant is one of the qualities most valued in French education."},

  {type:"teach", trg:"orgueilleux", src:"proud, arrogant", pos:"adj", gender:null,
   note:"From orgueil (pride). Negative connotation.\nFeminine: orgueilleuse. Different from fier (positively proud).",
   example:"A: Il est trop orgueilleux pour demander de l'aide.\nB: Son orgueil va lui coûter cher.",
   exampleSrc:"A: He is too proud to ask for help.\nB: His pride will cost him dearly.",
   funFact:"French distinguishes fier (proud, positive) from orgueilleux (proud, negative/arrogant)."},

  {type:"teach", trg:"curieux", src:"curious", pos:"adj", gender:null,
   note:"Feminine: curieuse. Can be positive (inquisitive) or negative (nosy).\nContext determines meaning.",
   example:"A: C'est un enfant très curieux.\nB: Il pose des questions sur tout.",
   exampleSrc:"A: He is a very curious child.\nB: He asks questions about everything.",
   funFact:"The double meaning is exactly like English: curious can mean inquisitive or strange."},

  {type:"teach", trg:"paternaliste", src:"paternalistic", pos:"adj", gender:null,
   note:"From paternel (paternal) + -iste.\nTreating others as if they need a father's guidance.",
   example:"A: Son attitude paternaliste agace ses collègues.\nB: Ils n'ont pas besoin qu'on les surveille.",
   exampleSrc:"A: His paternalistic attitude annoys his colleagues.\nB: They don't need to be watched over.",
   funFact:"Paternalisme was first used to describe factory owners who controlled workers' lives."},

  {type:"teach", trg:"le piquant", src:"the spice, the sting", pos:"noun", gender:"m",
   note:"From piquer (to sting, to prick).\nFigurative: what gives something its edge or interest.",
   example:"A: L'histoire manque de piquant.\nB: Il faudrait ajouter un rebondissement.",
   exampleSrc:"A: The story lacks spice.\nB: We'd need to add a twist.",
   funFact:"Piquant as an adjective means spicy. As a noun, it means the exciting element of something."},

  {type:"teach", trg:"le modéré", src:"moderate (person)", pos:"noun", gender:"m",
   note:"From modérer (to moderate).\nA politically or socially moderate person.",
   example:"A: Les modérés cherchent le compromis.\nB: Mais les extrêmes dominent le débat.",
   exampleSrc:"A: Moderates seek compromise.\nB: But the extremes dominate the debate.",
   funFact:"In French politics, modéré is often used as both noun and adjective for centrist positions."},

  {type:"teach", trg:"l'infidélité", src:"infidelity, unfaithfulness", pos:"noun", gender:"f",
   note:"In- (not) + fidélité (fidelity).\nBetrayal of trust, romantic or otherwise.",
   example:"A: L'infidélité a détruit leur mariage.\nB: La confiance est difficile à reconstruire.",
   exampleSrc:"A: Infidelity destroyed their marriage.\nB: Trust is hard to rebuild.",
   funFact:"Fidélité comes from Latin fidelis (faithful). French gave English 'fidelity' and 'infidelity'."},

  {type:"teach", trg:"originel", src:"original, primordial", pos:"adj", gender:null,
   note:"Relating to origins. Feminine: originelle.\nDifferent from 'original' (creative/unique).",
   example:"A: Le sens originel du mot a changé.\nB: L'évolution linguistique est fascinante.",
   exampleSrc:"A: The original meaning of the word has changed.\nB: Linguistic evolution is fascinating.",
   funFact:"Le péché originel (original sin) is the most common use. Originel means 'from the beginning'."},

  {type:"teach", trg:"banal", src:"banal, ordinary", pos:"adj", gender:null,
   note:"Feminine: banale. Plural: banals (not banaux, unusually).\nMundane, unremarkable.",
   example:"A: C'est une histoire assez banale.\nB: Rien d'extraordinaire, en effet.",
   exampleSrc:"A: It's a rather ordinary story.\nB: Nothing extraordinary, indeed.",
   funFact:"The masculine plural banals is irregular. Most -al adjectives become -aux, but not this one."},

  {type:"mc", q:"Orgueilleux est le contraire de:", opts:["Modeste","Curieux","Persévérant","Courageux"], ans:"Modeste",
   hint:"Orgueilleux means arrogantly proud. The opposite is being humble or..."},

  {type:"teach", trg:"justicier", src:"vigilante, dispenser of justice", pos:"adj", gender:null,
   note:"From justice + -ier.\nAlso a noun: un justicier = one who takes justice into own hands.",
   example:"A: Il se prend pour un justicier.\nB: Mais la justice doit être rendue par les tribunaux.",
   exampleSrc:"A: He thinks he's a vigilante.\nB: But justice must be delivered by the courts.",
   funFact:"In French comics, many superheroes are called justiciers masqués (masked vigilantes)."},

  {type:"teach", trg:"le footballeur", src:"football player", pos:"noun", gender:"m",
   note:"From football + -eur.\nFeminine: la footballeuse. Soccer player in French context.",
   example:"A: Ce footballeur est le meilleur de sa génération.\nB: Il a marqué trente buts cette saison.",
   exampleSrc:"A: This football player is the best of his generation.\nB: He scored thirty goals this season.",
   funFact:"Football in French always means soccer. American football is 'football américain'."},

  {type:"teach", trg:"le penchant", src:"inclination, tendency", pos:"noun", gender:"m",
   note:"From pencher (to lean).\nA natural tendency, often toward something indulgent.",
   example:"A: Son penchant pour le luxe est bien connu.\nB: Il ne peut pas résister aux belles choses.",
   exampleSrc:"A: His taste for luxury is well known.\nB: He can't resist beautiful things.",
   funFact:"Penchant entered English directly from French with the same meaning of an inclination."},

  {type:"teach", trg:"l'assisté", src:"dependent (on welfare)", pos:"noun", gender:"m",
   note:"From assister (to assist).\nOften pejorative: someone living off state aid.",
   example:"A: Le terme 'assisté' est souvent péjoratif.\nB: Il ne reflète pas la réalité des situations.",
   exampleSrc:"A: The term 'welfare dependent' is often pejorative.\nB: It doesn't reflect the reality of situations.",
   funFact:"The debate around assistanat (welfare dependency) is a recurring theme in French politics."},

  {type:"fb", s:"Son attitude {1} agace tout le monde.", a:["paternaliste"], opts:["paternaliste","persévérant","curieux","orgueilleux"],
   hint:"Treating others as if they are children who need a father figure's guidance.",
   sSrc:"His {1} attitude annoys everyone."},

  {type:"teach", trg:"la guise", src:"manner, way", pos:"noun", gender:"f",
   note:"Usually in: à sa guise = as one pleases.\nEn guise de = by way of, instead of.",
   example:"A: Il fait tout à sa guise.\nB: Personne ne peut le contrôler.",
   exampleSrc:"A: He does everything as he pleases.\nB: Nobody can control him.",
   funFact:"En guise de remerciement means 'by way of thanks'. Very common in formal French."},

  {type:"teach", trg:"les grandeurs", src:"grandeur, delusions of grandeur", pos:"noun", gender:"f",
   note:"Plural of grandeur.\nFolie des grandeurs = delusions of grandeur, megalomania.",
   example:"A: Il souffre de la folie des grandeurs.\nB: Ses projets sont complètement irréalistes.",
   exampleSrc:"A: He suffers from delusions of grandeur.\nB: His plans are completely unrealistic.",
   funFact:"La folie des grandeurs was a famous 1971 French comedy film with Louis de Funès."},

  {type:"mc", q:"Le pluriel de 'banal' est:", opts:["Banaux","Banals","Banales","Banalaux"], ans:"Banals",
   hint:"This adjective is irregular. Unlike other -al adjectives, it does NOT become -aux."},

  {type:"fb", s:"En {1} de dessert, elle a servi des fruits.", a:["guise"], opts:["guise","grandeur","infidélité","banale"],
   hint:"By way of, instead of. A formal expression meaning 'as a substitute for'.",
   sSrc:"By way of dessert, she served fruit."},

  {type:"match", pairs:[
    {trg:"persévérant", src:"persistent"},
    {trg:"orgueilleux", src:"arrogant"},
    {trg:"curieux", src:"curious"},
    {trg:"banal", src:"ordinary"}
  ]},

  {type:"mc", q:"'Faire tout à sa guise' signifie:", opts:["Faire tout ensemble","Faire tout rapidement","Faire tout comme on veut","Faire tout avec soin"], ans:"Faire tout comme on veut",
   hint:"À sa guise = as one wishes. Complete freedom to do things one's own way."},

  {type:"fb", s:"La folie des {1} l'a conduit à la ruine.", a:["grandeurs"], opts:["grandeurs","infidélités","piquants","modérés"],
   hint:"Megalomania, thinking too highly of oneself. Delusions of...",
   sSrc:"Delusions of {1} led him to ruin."},

  {type:"match", pairs:[
    {trg:"l'infidélité", src:"infidelity"},
    {trg:"le modéré", src:"moderate person"},
    {trg:"le justicier", src:"vigilante"},
    {trg:"l'assisté", src:"welfare dependent"}
  ]}
]};

export default LESSON_7;
