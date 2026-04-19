const LESSON_3 = {
  id:"frv2_b2gap_l3", title:"Justice et droit", icon:"\u{2696}\u{FE0F}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Justice et droit",
     desc:"Legal vocabulary for discussing trials, law enforcement, and the justice system. Essential for news comprehension.",
     goals:["Learn 20 legal and justice terms","Discuss court proceedings in French","Understand news reports about legal matters"]},

    {type:"teach", trg:"un accus\u00e9", src:"a defendant, an accused person", pos:"noun", gender:"m",
     note:"Masculine noun. The person charged with a crime. Feminine: une accus\u00e9e.",
     example:"A: L'accus\u00e9 a plaid\u00e9 non coupable.\nB: Son avocat est tr\u00e8s confiant.",
     exampleSrc:"A: The defendant pleaded not guilty.\nB: His lawyer is very confident.",
     funFact:"In French law, 'accus\u00e9' is specifically for serious crimes (cour d'assises), while 'pr\u00e9venu' is for lesser offenses."},

    {type:"teach", trg:"la cassation", src:"the cassation, the annulment", pos:"noun", gender:"f",
     note:"Feminine noun. The quashing of a court ruling. Used in legal contexts.",
     example:"A: L'affaire va en cassation.\nB: La Cour de cassation rendra son verdict bient\u00f4t.",
     exampleSrc:"A: The case is going to cassation.\nB: The Court of Cassation will give its verdict soon.",
     funFact:"The Cour de cassation is France's highest court. It 'breaks' (casse) lower court decisions."},

    {type:"teach", trg:"la censure", src:"the censorship", pos:"noun", gender:"f",
     note:"Feminine noun. The suppression of information deemed objectionable.",
     example:"A: La censure de la presse est un probl\u00e8me grave.\nB: Oui, la libert\u00e9 d'expression est sacr\u00e9e.",
     exampleSrc:"A: Press censorship is a serious problem.\nB: Yes, freedom of expression is sacred.",
     funFact:"In French politics, a 'motion de censure' is a vote of no confidence that can topple the government."},

    {type:"teach", trg:"censurer", src:"to censor", pos:"verb", gender:null,
     note:"Verb. To officially suppress or ban content.",
     example:"A: Ils ont censur\u00e9 le film.\nB: Pourquoi ? Il \u00e9tait trop violent ?",
     exampleSrc:"A: They censored the film.\nB: Why? Was it too violent?",
     funFact:"Voltaire's works were repeatedly censured in 18th century France, which only increased their popularity."},

    {type:"teach", trg:"compara\u00eetre", src:"to appear (in court)", pos:"verb", gender:null,
     note:"Verb. To stand before a judge or tribunal. Formal legal register.",
     example:"A: Il doit compara\u00eetre devant le juge demain.\nB: Son avocat pr\u00e9pare sa d\u00e9fense.",
     exampleSrc:"A: He must appear before the judge tomorrow.\nB: His lawyer is preparing his defense.",
     funFact:"Uses a circumflex on the i (compara\u00eetre). One of many French legal verbs from medieval Latin."},

    {type:"mc",
     q:"O\u00f9 va une affaire quand on conteste le jugement final ?",
     opts:["En cassation","En censure","En aberration","En comparution"],
     ans:"En cassation",
     hint:"France's highest court 'breaks' lower decisions. Think of the verb 'casser'."},

    {type:"teach", trg:"criminel", src:"criminal", pos:"adj", gender:null,
     note:"Adjective. Related to crime or the criminal justice system. Feminine: criminelle.",
     example:"A: C'est une affaire criminelle complexe.\nB: Oui, l'enqu\u00eate dure depuis deux ans.",
     exampleSrc:"A: It's a complex criminal case.\nB: Yes, the investigation has lasted two years.",
     funFact:"French distinguishes 'criminel' (serious crimes) from 'd\u00e9lictueux' (lesser offenses). A legal precision."},

    {type:"teach", trg:"la criminologie", src:"the criminology", pos:"noun", gender:"f",
     note:"Feminine noun. The scientific study of crime and criminal behavior.",
     example:"A: Elle \u00e9tudie la criminologie \u00e0 l'universit\u00e9.\nB: C'est un domaine passionnant.",
     exampleSrc:"A: She studies criminology at university.\nB: It's a fascinating field.",
     funFact:"France's criminology tradition was shaped by Alexandre Lacassagne in Lyon in the 1880s."},

    {type:"teach", trg:"un criminologue", src:"a criminologist", pos:"noun", gender:"m",
     note:"Masculine noun. An expert in crime studies. Feminine: une criminologue.",
     example:"A: Le criminologue a analys\u00e9 le profil du suspect.\nB: Ses conclusions sont tr\u00e8s utiles.",
     exampleSrc:"A: The criminologist analyzed the suspect's profile.\nB: His conclusions are very useful.",
     funFact:"French criminologists often appear on TV news as expert commentators during major trials."},

    {type:"teach", trg:"clandestin", src:"clandestine, illegal", pos:"adj", gender:null,
     note:"Adjective. Secret or hidden, usually illegal. Feminine: clandestine.",
     example:"A: Ils ont d\u00e9couvert un r\u00e9seau clandestin.\nB: La police a arr\u00eat\u00e9 dix personnes.",
     exampleSrc:"A: They discovered a clandestine network.\nB: The police arrested ten people.",
     funFact:"'Passager clandestin' means a stowaway. During WWII, the French Resistance was 'clandestine'."},

    {type:"fb",
     s:"L'accus\u00e9 doit {1} devant le tribunal demain matin.",
     a:["compara\u00eetre"],
     opts:["compara\u00eetre","censurer","alarmer","comparaison"],
     hint:"A formal legal verb meaning to stand before a judge in court.",
     sSrc:"The defendant must {1} before the court tomorrow morning."},

    {type:"teach", trg:"un cambrioleur", src:"a burglar", pos:"noun", gender:"m",
     note:"Masculine noun. A person who breaks into buildings to steal. Feminine: une cambrioleuse.",
     example:"A: Le cambrioleur est entr\u00e9 par la fen\u00eatre.\nB: Les voisins ont appel\u00e9 la police.",
     exampleSrc:"A: The burglar came in through the window.\nB: The neighbors called the police.",
     funFact:"From 'cambriole' (room in thieves' slang). Cambrai, a city in northern France, may be the origin."},

    {type:"teach", trg:"un condam\u00e9", src:"a convict, a condemned person", pos:"noun", gender:"m",
     note:"Masculine noun. Someone found guilty and sentenced. Feminine: une condamn\u00e9e.",
     example:"A: Le condamn\u00e9 a fait appel.\nB: Il esp\u00e8re une r\u00e9duction de peine.",
     exampleSrc:"A: The convict appealed.\nB: He hopes for a reduced sentence.",
     funFact:"Victor Hugo's 'Le Dernier Jour d'un Condamn\u00e9' (1829) was a landmark argument against the death penalty."},

    {type:"teach", trg:"la conciliation", src:"the conciliation, the mediation", pos:"noun", gender:"f",
     note:"Feminine noun. The process of settling a dispute through negotiation.",
     example:"A: La conciliation a \u00e9vit\u00e9 un proc\u00e8s.\nB: Les deux parties sont satisfaites.",
     exampleSrc:"A: The conciliation avoided a trial.\nB: Both parties are satisfied.",
     funFact:"French law encourages 'conciliation' before going to court. Free conciliators exist in every town."},

    {type:"teach", trg:"un contradicteur", src:"an opponent (in debate)", pos:"noun", gender:"m",
     note:"Masculine noun. Someone who argues the opposing side.",
     example:"A: Il est un contradicteur redoutable.\nB: Oui, ses arguments sont toujours solides.",
     exampleSrc:"A: He's a formidable opponent in debate.\nB: Yes, his arguments are always solid.",
     funFact:"From 'contredire' (to contradict). French legal and political culture values the art of contradiction."},

    {type:"mc",
     q:"Comment appelle-t-on une personne qui entre par effraction pour voler ?",
     opts:["Un cambrioleur","Un contradicteur","Un criminologue","Un condamn\u00e9"],
     ans:"Un cambrioleur",
     hint:"Someone who breaks into buildings to steal. The word may come from thieves' slang for 'room'."},

    {type:"teach", trg:"complice", src:"complicit, accessory", pos:"adj", gender:null,
     note:"Adjective and noun. Involved in a crime as an accomplice. Same form for m/f.",
     example:"A: Elle \u00e9tait complice du vol.\nB: Elle risque une peine de prison.",
     exampleSrc:"A: She was an accomplice to the theft.\nB: She faces a prison sentence.",
     funFact:"Can be positive too: 'un regard complice' means a knowing, shared look between friends."},

    {type:"teach", trg:"compromettant", src:"compromising, incriminating", pos:"adj", gender:null,
     note:"Adjective. Describes evidence or behavior that could damage someone. Feminine: compromettante.",
     example:"A: Ils ont trouv\u00e9 des documents compromettants.\nB: L'enqu\u00eate progresse enfin.",
     exampleSrc:"A: They found compromising documents.\nB: The investigation is finally progressing.",
     funFact:"From 'compromettre' (to compromise). In diplomacy, a 'compromis' is a formal agreement to arbitrate."},

    {type:"teach", trg:"applicable", src:"applicable, enforceable", pos:"adj", gender:null,
     note:"Adjective. Capable of being applied or enforced. Same form for m/f.",
     example:"A: Cette loi est applicable d\u00e8s demain.\nB: Il faut informer tout le monde.",
     exampleSrc:"A: This law is enforceable starting tomorrow.\nB: We need to inform everyone.",
     funFact:"French law uses 'applicable' for rules that take effect. 'Non applicable' means it doesn't apply here."},

    {type:"match", pairs:[
      {trg:"accus\u00e9", src:"defendant"},
      {trg:"cambrioleur", src:"burglar"},
      {trg:"conciliation", src:"mediation"},
      {trg:"complice", src:"accomplice"},
      {trg:"censure", src:"censorship"}
    ]},

    {type:"fb",
     s:"La police a d\u00e9couvert un r\u00e9seau {1} de trafiquants.",
     a:["clandestin"],
     opts:["clandestin","criminel","compromettant","applicable"],
     hint:"Means secret, hidden, operating outside the law. Think of a stowaway.",
     sSrc:"The police discovered a {1} network of traffickers."},

    {type:"mc",
     q:"Quel adjectif d\u00e9crit des preuves qui pourraient nuire \u00e0 quelqu'un ?",
     opts:["compromettant","applicable","clandestin","criminel"],
     ans:"compromettant",
     hint:"Evidence that could damage someone's reputation or legal standing. From 'compromettre'."},

    {type:"teach", trg:"illustrer", src:"to illustrate, to demonstrate", pos:"verb", gender:null,
     note:"Regular -er verb. To make an abstract point clear with an example.\nIllustrer par un exemple = to illustrate with an example.",
     example:"A: Pouvez-vous illustrer ce principe avec un exemple concret ?\nB: Bien sûr. Prenons le cas de la loi de 1905.",
     exampleSrc:"A: Can you illustrate this principle with a concrete example?\nB: Of course. Let's take the case of the 1905 law.",
     funFact:"From Latin illustrare (to light up). In French essays, 'pour illustrer' is a key connector used to introduce examples."},

    {type:"teach", trg:"la biodiversité", src:"biodiversity", pos:"noun", gender:"f",
     note:"Feminine noun. The variety of life on Earth.\nLa protection de la biodiversité = biodiversity conservation.",
     example:"A: La biodiversité est menacée par la déforestation.\nB: Des espèces disparaissent chaque jour.",
     exampleSrc:"A: Biodiversity is threatened by deforestation.\nB: Species disappear every day.",
     funFact:"France signed the Convention on Biological Diversity in 1992 at Rio. France's overseas territories host 10% of world's species."},

    {type:"fb",
     s:"Pour {1} ce point, prenons l'exemple de la Révolution française.",
     a:["illustrer"],
     opts:["illustrer","critiquer","défendre","justifier"],
     hint:"This verb means to make an abstract idea clear with a concrete example. A key essay-writing skill.",
     sSrc:"To {1} this point, let's take the example of the French Revolution."}
  ]
};
export default LESSON_3;
