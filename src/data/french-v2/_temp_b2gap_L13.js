const LESSON_13 = {
  id:"frv2_b2gap_l13", title:"Paroles et langage", icon:"\u{1F4AC}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Paroles et langage",
     desc:"The vocabulary of speech, language, and communication styles. From whispering to stuttering, from slang to eloquence.",
     goals:["Learn 20 speech and language vocabulary words","Describe communication styles in French","Discuss language registers and expression"]},

    {type:"teach", trg:"chuchoter", src:"to whisper", pos:"verb", gender:null,
     note:"Verb. To speak very softly, barely audible.",
     example:"A: Pourquoi chuchotes-tu ?\nB: Le bebe dort a cote.",
     exampleSrc:"A: Why are you whispering?\nB: The baby is sleeping next door.",
     funFact:"Onomatopoeia: the 'ch-ch' sound imitates whispering. 'Chuchotement' is the noun form."},

    {type:"teach", trg:"b\u00e9gayer", src:"to stutter, to stammer", pos:"verb", gender:null,
     note:"Verb. To repeat sounds involuntarily when speaking.",
     example:"A: Il begaye quand il est nerveux.\nB: Sois patient avec lui.",
     exampleSrc:"A: He stutters when he's nervous.\nB: Be patient with him.",
     funFact:"From Old French 'begue' (stammerer). King Louis II was called 'le Begue' (the Stammerer)."},

    {type:"teach", trg:"le blabla", src:"the blather, the waffle", pos:"noun", gender:"m",
     note:"Masculine noun. Empty, meaningless talk. Informal register.",
     example:"A: Assez de blabla, passons a l'action !\nB: Tu as raison, on perd du temps.",
     exampleSrc:"A: Enough blather, let's get to action!\nB: You're right, we're wasting time.",
     funFact:"Reduplication for emphasis, like 'bonbon' or 'dodo'. BlaBlaCar, the rideshare app, is a French company."},

    {type:"teach", trg:"argotique", src:"slangy, colloquial", pos:"adj", gender:null,
     note:"Adjective. Relating to slang or informal language.",
     example:"A: Cette expression est tres argotique.\nB: Je l'ai apprise dans la rue.",
     exampleSrc:"A: This expression is very slangy.\nB: I learned it on the street.",
     funFact:"From 'argot' (slang). Parisian argot is famous: 'verlan' reverses syllables (meuf = femme, ouf = fou)."},

    {type:"teach", trg:"l'affirmation", src:"the assertion, the statement", pos:"noun", gender:"f",
     note:"Feminine noun. A confident declaration or the act of asserting.",
     example:"A: C'est une affirmation audacieuse.\nB: Je peux la justifier.",
     exampleSrc:"A: That's a bold assertion.\nB: I can justify it.",
     funFact:"'Affirmation de soi' means self-assertion. A key concept in French psychology and personal development."},

    {type:"mc",
     q:"Quel verbe signifie 'parler tres doucement' ?",
     opts:["chuchoter","b\u00e9gayer","crouler","assourdir"],
     ans:"chuchoter",
     hint:"An onomatopoeia where the 'ch-ch' sound imitates the action itself."},

    {type:"teach", trg:"le cancan", src:"the gossip, the scandal", pos:"noun", gender:"m",
     note:"Masculine noun. Malicious gossip. Also a high-kicking dance.",
     example:"A: Les cancans vont bon train au bureau.\nB: Ne les ecoute pas.",
     exampleSrc:"A: Gossip is rife at the office.\nB: Don't listen to it.",
     funFact:"The cancan dance was considered scandalous in 1830s Paris. The word mimics the 'quack quack' of ducks."},

    {type:"teach", trg:"l'administrateur", src:"the administrator", pos:"noun", gender:"m",
     note:"Masculine noun. A person who manages an organization. Feminine: administratrice.",
     example:"A: L'administrateur a envoye un memo important.\nB: Il faut le lire tout de suite.",
     exampleSrc:"A: The administrator sent an important memo.\nB: We need to read it right away.",
     funFact:"From Latin 'administrare' (to manage). In French law, an 'administrateur judiciaire' rescues failing businesses."},

    {type:"teach", trg:"administrer", src:"to administer, to manage", pos:"verb", gender:null,
     note:"Verb. To manage or run an organization. Also: to administer medicine.",
     example:"A: Il administre trois societes.\nB: C'est un homme d'affaires tres occupe.",
     exampleSrc:"A: He manages three companies.\nB: He's a very busy businessman.",
     funFact:"Can mean both 'to manage' and 'to give (medicine)'. 'Administrer une gifle' = to slap someone."},

    {type:"fb",
     s:"Cette expression est tres {1}, elle n'est pas dans le dictionnaire classique.",
     a:["argotique"],
     opts:["argotique","dentaire","budg\u00e9taire","cantonal"],
     hint:"Relating to slang or informal language. Think of street talk and verlan.",
     sSrc:"This expression is very {1}, it's not in the standard dictionary."},

    {type:"teach", trg:"assener", src:"to deliver (a blow or statement)", pos:"verb", gender:null,
     note:"Verb. To strike hard or state forcefully. Often with 'un coup' or 'une verite'.",
     example:"A: Il lui a assene ses quatre verites.\nB: C'etait brutal mais necessaire.",
     exampleSrc:"A: He told him some hard truths.\nB: It was brutal but necessary.",
     funFact:"'Assener ses quatre verites' means to tell someone unpleasant truths to their face. Very French."},

    {type:"teach", trg:"le chichi", src:"the fuss, the pretense", pos:"noun", gender:"m",
     note:"Masculine noun. Unnecessary fuss or affected behavior. Often plural.",
     example:"A: Pas de chichis entre nous !\nB: D'accord, soyons simples.",
     exampleSrc:"A: No fuss between us!\nB: Okay, let's keep it simple.",
     funFact:"'Sans chichi' means straightforward, unpretentious. Also a type of churro in southern France."},

    {type:"teach", trg:"un communiqu\u00e9", src:"a press release, a statement", pos:"noun", gender:"m",
     note:"Masculine noun. An official public statement or announcement.",
     example:"A: Le ministere a publie un communique.\nB: Que dit-il exactement ?",
     exampleSrc:"A: The ministry published a press release.\nB: What does it say exactly?",
     funFact:"From 'communiquer' (to communicate). English borrowed 'communique' directly from French."},

    {type:"mc",
     q:"Que signifie 'faire des chichis' ?",
     opts:["Faire des manieres inutiles","Chuchoter doucement","B\u00e9gayer de peur","Administrer un remede"],
     ans:"Faire des manieres inutiles",
     hint:"Unnecessary fuss or affected behavior. 'Sans chichi' means straightforward."},

    {type:"teach", trg:"l'auteure", src:"the author (female)", pos:"noun", gender:"f",
     note:"Feminine noun. The feminized form of 'auteur'. Debated in language academies.",
     example:"A: L'auteure a remporte le prix Goncourt.\nB: Son roman est magnifique.",
     exampleSrc:"A: The author won the Goncourt Prize.\nB: Her novel is magnificent.",
     funFact:"The feminization of 'auteur' sparked fierce debate. Quebec uses 'auteure', France often prefers 'autrice'."},

    {type:"teach", trg:"l'anthropologue", src:"the anthropologist", pos:"noun", gender:"m",
     note:"Masculine/feminine noun. A scholar who studies human societies and cultures.",
     example:"A: L'anthropologue a passe deux ans au Senegal.\nB: Ses recherches sont passionnantes.",
     exampleSrc:"A: The anthropologist spent two years in Senegal.\nB: His research is fascinating.",
     funFact:"Claude Levi-Strauss, France's most famous anthropologist, revolutionized the field with structuralism."},

    {type:"teach", trg:"la classification", src:"the classification", pos:"noun", gender:"f",
     note:"Feminine noun. The systematic arrangement into categories.",
     example:"A: La classification des especes a ete mise a jour.\nB: Il y a de nouvelles decouvertes.",
     exampleSrc:"A: The species classification has been updated.\nB: There are new discoveries.",
     funFact:"Buffon's 'Histoire naturelle' (1749) was an early French classification of the natural world."},

    {type:"fb",
     s:"Il lui a {1} ses quatre verites sans menagement.",
     a:["assen\u00e9"],
     opts:["assen\u00e9","chuchot\u00e9","administr\u00e9","communiqu\u00e9"],
     hint:"To deliver a statement or blow with force. Often used with 'quatre verites' (hard truths).",
     sSrc:"He {1} some hard truths without holding back."},

    {type:"teach", trg:"le contradicteur", src:"the opponent in debate", pos:"noun", gender:"m",
     note:"Masculine noun. A person who argues the opposite position.",
     example:"A: Le contradicteur a souleve des points valides.\nB: Le debat etait tres riche.",
     exampleSrc:"A: The opponent raised valid points.\nB: The debate was very rich.",
     funFact:"From Latin 'contradicere' (to speak against). French debate culture values a strong 'contradicteur'."},

    {type:"teach", trg:"la combine", src:"the scheme, the trick", pos:"noun", gender:"f",
     note:"Feminine noun. A crafty plan or underhanded scheme.",
     example:"A: Il a toujours une combine pour eviter de payer.\nB: Un jour, ca lui retombera dessus.",
     exampleSrc:"A: He always has a scheme to avoid paying.\nB: One day, it'll catch up with him.",
     funFact:"From 'combiner' (to combine, to scheme). 'Combinard' is slang for a schemer or fixer."},

    {type:"match", pairs:[
      {trg:"chuchoter", src:"to whisper"},
      {trg:"blabla", src:"blather"},
      {trg:"cancan", src:"gossip"},
      {trg:"communiqu\u00e9", src:"press release"},
      {trg:"combine", src:"scheme"}
    ]},

    {type:"mc",
     q:"Quel verbe signifie 'repeter involontairement des sons en parlant' ?",
     opts:["b\u00e9gayer","chuchoter","assener","administrer"],
     ans:"b\u00e9gayer",
     hint:"King Louis II of France was called 'le Begue' for this speech difficulty."},

    {type:"fb",
     s:"Le ministere a publie un {1} officiel ce matin.",
     a:["communiqu\u00e9"],
     opts:["communiqu\u00e9","cancan","blabla","contradicteur"],
     hint:"An official public statement from an institution. English borrowed this word from French.",
     sSrc:"The ministry published an official {1} this morning."}
  ]
};
export default LESSON_13;
