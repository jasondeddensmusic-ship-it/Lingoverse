const LESSON_12 = {
  id:"frv2_b2g3_l12", title:"Le monde du travail", icon:"\u{1F4BC}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Le monde du travail",
     desc:"Learn vocabulary about the professional world, business practices, and career dynamics in French.",
     goals:["Learn 17 B2 professional and business words","Discuss workplace issues and dynamics","Navigate business conversations in French"]},

    {type:"teach", trg:"un dépensier", src:"a spendthrift", pos:"noun", gender:"m",
     note:"Masculine noun. Someone who spends money carelessly. Feminine: depensiere. Also adjective.",
     example:"A: Mon frère est un vrai dépensier.\nB: Il devrait apprendre à économiser.",
     exampleSrc:"A: My brother is a real spendthrift.\nB: He should learn to save.",
     funFact:"'Depensier' can be a noun or adjective. The opposite is 'econome' (thrifty). French culture traditionally values 'l'epargne' (saving)."},

    {type:"teach", trg:"un débiteur", src:"a debtor", pos:"noun", gender:"m",
     note:"Masculine noun. Someone who owes money. Feminine: debitrice. Also adjective.",
     example:"A: Le débiteur doit rembourser sa dette en cinq ans.\nB: C'est un plan de remboursement raisonnable.",
     exampleSrc:"A: The debtor must repay his debt in five years.\nB: It's a reasonable repayment plan.",
     funFact:"In French banking, your 'debit' side is money going out. The Banque de France maintains a file of all 'interdits bancaires' (banned debtors)."},

    {type:"teach", trg:"dédommager", src:"to compensate, to indemnify", pos:"verb", gender:null,
     note:"Verb. To pay someone for damage or loss they suffered.",
     example:"A: L'assurance va nous dédommager pour les dégâts.\nB: J'espère que ce sera rapide.",
     exampleSrc:"A: The insurance will compensate us for the damage.\nB: I hope it will be quick.",
     funFact:"From 'dommage' (damage). 'C'est dommage' means 'that's a pity'. 'Dommages et interets' is the legal term for damages in court."},

    {type:"teach", trg:"faire semblant", src:"to pretend", pos:"verb", gender:null,
     note:"Verbal expression. To fake or simulate something.",
     example:"A: Il fait semblant de ne pas comprendre.\nB: Mais je sais qu'il a très bien entendu.",
     exampleSrc:"A: He pretends not to understand.\nB: But I know he heard perfectly well.",
     funFact:"A very useful everyday expression. Children learn it early: 'On fait semblant de...' is how French kids start pretend play."},

    {type:"mc",
     q:"Quel verbe signifie indemniser quelqu'un pour une perte ou un dommage ?",
     opts:["dédommager","dépenser","déconnecter","décomposer"],
     ans:"dédommager",
     hint:"This verb comes from 'dommage' (damage). It means to pay for losses suffered."},

    {type:"teach", trg:"le déchaînement", src:"an outburst, an unleashing", pos:"noun", gender:"m",
     note:"Masculine noun. A violent release of emotion, energy, or force.",
     example:"A: Le déchaînement médiatique a été sans précédent.\nB: Chaque journal voulait le scoop.",
     exampleSrc:"A: The media frenzy was unprecedented.\nB: Every newspaper wanted the scoop.",
     funFact:"From 'dechainer' meaning to unchain. The image is of something breaking free from its chains. 'Se dechainer' means to go wild."},

    {type:"teach", trg:"déposséder", src:"to dispossess", pos:"verb", gender:null,
     note:"Verb. To strip someone of their property or rights.",
     example:"A: Les habitants ont été dépossédés de leurs terres.\nB: C'est une injustice historique.",
     exampleSrc:"A: The inhabitants were dispossessed of their lands.\nB: It's a historical injustice.",
     funFact:"Land dispossession is a recurring theme in French colonial history. The verb carries strong emotional and political weight."},

    {type:"teach", trg:"un factotum", src:"a factotum, a do-it-all", pos:"noun", gender:"m",
     note:"Masculine noun. A person employed to do all kinds of work.",
     example:"A: C'est le factotum du bureau, il s'occupe de tout.\nB: Sans lui, rien ne fonctionnerait.",
     exampleSrc:"A: He's the office factotum, he takes care of everything.\nB: Without him, nothing would work.",
     funFact:"From Latin 'fac totum' meaning 'do everything'. In theater, it describes the stage manager who handles all behind-the-scenes work."},

    {type:"teach", trg:"la bénédiction", src:"a blessing", pos:"noun", gender:"f",
     note:"Feminine noun. A divine blessing or, figuratively, wholehearted approval.",
     example:"A: Ce contrat est une vraie bénédiction pour l'entreprise.\nB: Oui, il assure notre avenir.",
     exampleSrc:"A: This contract is a real blessing for the company.\nB: Yes, it secures our future.",
     funFact:"In French, you can say 'c'est une benediction' for anything fortunate, just like 'it's a godsend' in English. The religious sense is still primary."},

    {type:"fb",
     s:"Les propriétaires ont été {1} de leurs biens par le régime autoritaire.",
     a:["dépossédés"],
     opts:["dépossédés","dédommagés","déchaînés","déconnectés"],
     hint:"This verb means to strip someone of their property or possessions by force.",
     sSrc:"The owners were {1} of their belongings by the authoritarian regime."},

    {type:"teach", trg:"la concordance", src:"concordance, agreement", pos:"noun", gender:"f",
     note:"Feminine noun. Harmony or agreement between things. Key grammar term.",
     example:"A: La concordance des témoignages prouve la vérité.\nB: Tous disent la même chose.",
     exampleSrc:"A: The agreement between the testimonies proves the truth.\nB: They all say the same thing.",
     funFact:"'La concordance des temps' is a fundamental French grammar rule governing tense sequences. It trips up even advanced learners."},

    {type:"teach", trg:"un encombre", src:"a hindrance, an obstacle", pos:"noun", gender:"m",
     note:"Masculine noun. An impediment or difficulty. Often in 'sans encombre'.",
     example:"A: Le voyage s'est passé sans encombre.\nB: Tant mieux, on avait de l'avance.",
     exampleSrc:"A: The trip went without a hitch.\nB: Good, we were ahead of schedule.",
     funFact:"'Sans encombre' is a set expression meaning 'without any problems'. You hear it in travel and project updates constantly."},

    {type:"teach", trg:"un banal", src:"something ordinary, a commonplace", pos:"noun", gender:"m",
     note:"Masculine noun/adjective. Something unremarkable or ordinary.",
     example:"A: C'est un événement tout à fait banal.\nB: Rien d'extraordinaire, en effet.",
     exampleSrc:"A: It's a completely ordinary event.\nB: Nothing extraordinary, indeed.",
     funFact:"In medieval French, 'banal' meant belonging to the feudal lord. The 'four banal' was the lord's oven that everyone had to use, hence 'ordinary for everyone'."},

    {type:"mc",
     q:"Quelle expression signifie 'sans problème' ou 'sans difficulté' ?",
     opts:["sans encombre","sans bénédiction","sans factotum","sans concordance"],
     ans:"sans encombre",
     hint:"This set phrase uses a word meaning hindrance or obstacle, negated by 'sans' (without)."},

    {type:"teach", trg:"un amateurisme", src:"amateurism", pos:"noun", gender:"m",
     note:"Masculine noun. Lack of professionalism or competence.",
     example:"A: L'amateurisme de cette organisation est choquant.\nB: Il faut tout restructurer.",
     exampleSrc:"A: The amateurism of this organization is shocking.\nB: Everything needs to be restructured.",
     funFact:"In French, 'amateurisme' is almost always negative. An 'amateur' can be positive (a passionate hobbyist), but '-isme' makes it a flaw."},

    {type:"teach", trg:"un explosif", src:"an explosive", pos:"noun", gender:"m",
     note:"Masculine noun. A substance that can detonate. Also adjective: une situation explosive.",
     example:"A: Les artificiers ont neutralisé l'explosif.\nB: La zone est maintenant sécurisée.",
     exampleSrc:"A: The bomb squad neutralized the explosive.\nB: The area is now secured.",
     funFact:"Alfred Nobel invented dynamite and used his fortune to create the Nobel Prize. In French, 'explosif' is used figuratively for any volatile situation."},

    {type:"teach", trg:"criblé", src:"riddled, full of", pos:"adj", gender:null,
     note:"Adjective. Covered with holes or overwhelmed. Feminine: criblee.",
     example:"A: L'entreprise est criblée de dettes.\nB: Elle risque la faillite.",
     exampleSrc:"A: The company is riddled with debt.\nB: It risks bankruptcy.",
     funFact:"From 'crible' (a sieve). Something 'crible' has been passed through a sieve, leaving it full of holes. Very vivid imagery."},

    {type:"match", pairs:[
      {trg:"dépensier", src:"spendthrift"},
      {trg:"débiteur", src:"debtor"},
      {trg:"factotum", src:"do-it-all"},
      {trg:"bénédiction", src:"blessing"},
      {trg:"criblé", src:"riddled"}
    ]},

    {type:"fb",
     s:"L'entreprise est {1} de dettes et risque de fermer.",
     a:["criblée"],
     opts:["criblée","banale","explosive","bénie"],
     hint:"This adjective means completely overwhelmed or full of, like a sieve with holes.",
     sSrc:"The company is {1} with debt and risks closing."}
  ]
};
export default LESSON_12;
