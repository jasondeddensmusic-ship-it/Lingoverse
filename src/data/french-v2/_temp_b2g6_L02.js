const LESSON_2 = {
  id:"frv2_b2g6_l2", title:"Déclin et transformation", icon:"\uD83D\uDD04", xp:15, board:true,
  steps:[
    {type:"intro", title:"Déclin et transformation",
     desc:"Explore vocabulary for describing decline, deterioration, and transformation in social and political contexts.",
     goals:["Learn 20 words about change and decline","Discuss social evolution with nuance","Use formal register for political topics"]},

    {type:"teach", trg:"le déchaînement", src:"the unleashing, the outburst", pos:"noun", gender:"m",
     note:"Masculine noun. A sudden violent release of emotion or force.",
     example:"A: Le déchaînement de violence a surpris tout le monde.\nB: Personne ne s'y attendait.",
     exampleSrc:"A: The unleashing of violence surprised everyone.\nB: Nobody expected it.",
     funFact:"From 'déchaîner' (to unchain). Literally removing chains, figuratively losing all restraint."},

    {type:"teach", trg:"le déclassement", src:"the downgrading, the social decline", pos:"noun", gender:"m",
     note:"Masculine noun. Loss of social status or ranking.",
     example:"A: Le déclassement social touche la classe moyenne.\nB: Oui, le pouvoir d'achat diminue.",
     exampleSrc:"A: Social downgrading affects the middle class.\nB: Yes, purchasing power is declining.",
     funFact:"A hot-button topic in French sociology. 'Déclassé' describes someone who has lost their social standing."},

    {type:"teach", trg:"la démocratisation", src:"the democratization", pos:"noun", gender:"f",
     note:"Feminine noun. Making something accessible to everyone.",
     example:"A: La démocratisation de l'enseignement est essentielle.\nB: Chacun mérite un accès égal.",
     exampleSrc:"A: The democratization of education is essential.\nB: Everyone deserves equal access.",
     funFact:"In French, used broadly beyond politics: 'la démocratisation du luxe' means luxury becoming affordable."},

    {type:"teach", trg:"la déduction", src:"the deduction", pos:"noun", gender:"f",
     note:"Feminine noun. Logical reasoning from general to specific, or a tax subtraction.",
     example:"A: Par déduction, c'est la seule explication.\nB: Ton raisonnement est logique.",
     exampleSrc:"A: By deduction, it's the only explanation.\nB: Your reasoning is logical.",
     funFact:"Descartes elevated deductive reasoning in French philosophy. Also used for tax deductions."},

    {type:"mc",
     q:"Que signifie 'le déclassement' ?",
     opts:["La perte de statut social","L'amélioration des conditions","Le changement de profession","La montée en grade"],
     ans:"La perte de statut social",
     hint:"Think of losing your class or rank in society. The prefix 'dé-' indicates removal."},

    {type:"teach", trg:"le décimètre", src:"the decimeter", pos:"noun", gender:"m",
     note:"Masculine noun. A unit of length equal to 10 centimeters.",
     example:"A: Le poisson mesure trois décimètres.\nB: Trente centimètres, c'est une belle prise !",
     exampleSrc:"A: The fish measures three decimeters.\nB: Thirty centimeters, that's a nice catch!",
     funFact:"The metric system was born in France during the Revolution. 'Déci-' means one tenth."},

    {type:"teach", trg:"le dépotoir", src:"the dump, the dumping ground", pos:"noun", gender:"m",
     note:"Masculine noun. A place where waste is deposited. Also used figuratively.",
     example:"A: Ce terrain est devenu un dépotoir.\nB: Il faut le nettoyer d'urgence.",
     exampleSrc:"A: This land has become a dump.\nB: We need to clean it up urgently.",
     funFact:"From 'dépoter' (to remove from a pot). Figuratively, 'un dépotoir à idées' means a messy collection."},

    {type:"teach", trg:"la dépouille", src:"the remains, the mortal remains", pos:"noun", gender:"f",
     note:"Feminine noun. The body of a deceased person. Formal register.",
     example:"A: La dépouille a été rapatriée.\nB: La famille pourra enfin faire son deuil.",
     exampleSrc:"A: The remains were repatriated.\nB: The family will finally be able to grieve.",
     funFact:"From 'dépouiller' (to strip). 'Dépouille mortelle' is the full formal expression used in obituaries."},

    {type:"fb",
     s:"La {1} de l'accès à Internet a transformé la société.",
     a:["démocratisation"],
     opts:["démocratisation","déduction","dépouille","décimètre"],
     hint:"Making something available to all people, not just a privileged few.",
     sSrc:"The {1} of Internet access transformed society."},

    {type:"teach", trg:"un dérivé", src:"a derivative, a by-product", pos:"noun", gender:"m",
     note:"Masculine noun. Something that comes from an original source.",
     example:"A: Ce mot est un dérivé du latin.\nB: Comme beaucoup de mots français.",
     exampleSrc:"A: This word is a derivative of Latin.\nB: Like many French words.",
     funFact:"Used in linguistics (word derivatives), finance (financial derivatives), and chemistry (chemical derivatives)."},

    {type:"teach", trg:"la détonation", src:"the detonation, the explosion", pos:"noun", gender:"f",
     note:"Feminine noun. A violent explosion or the sound it makes.",
     example:"A: On a entendu une détonation au loin.\nB: C'était peut-être un feu d'artifice.",
     exampleSrc:"A: We heard a detonation in the distance.\nB: Maybe it was fireworks.",
     funFact:"From Latin 'detonare' meaning to thunder. In French, also used figuratively for shocking revelations."},

    {type:"teach", trg:"la flambée", src:"the surge, the blaze", pos:"noun", gender:"f",
     note:"Feminine noun. A sudden sharp increase, or a blazing fire.",
     example:"A: La flambée des prix inquiète les consommateurs.\nB: Surtout pour l'alimentation.",
     exampleSrc:"A: The surge in prices worries consumers.\nB: Especially for food.",
     funFact:"Literally a sudden blaze. 'Flambée des prix' is the standard French economic term for price spikes."},

    {type:"mc",
     q:"Quel mot décrit une augmentation soudaine et forte des prix ?",
     opts:["le dépotoir","la flambée","la détonation","la dépouille"],
     ans:"la flambée",
     hint:"Think of flames shooting up suddenly. This word applies to prices, violence, or epidemics."},

    {type:"teach", trg:"le frémissement", src:"the trembling, the quiver", pos:"noun", gender:"m",
     note:"Masculine noun. A slight trembling or the first signs of something stirring.",
     example:"A: On sent un frémissement dans l'opinion publique.\nB: Les gens commencent à réagir.",
     exampleSrc:"A: We sense a stirring in public opinion.\nB: People are starting to react.",
     funFact:"From 'frémir' (to shudder). Used for both physical trembling and metaphorical first signs of change."},

    {type:"teach", trg:"la grossièreté", src:"the rudeness, the coarseness", pos:"noun", gender:"f",
     note:"Feminine noun. Vulgar or rude behavior, or a rude remark.",
     example:"A: Sa grossièreté a choqué tout le monde.\nB: Il devrait s'excuser.",
     exampleSrc:"A: His rudeness shocked everyone.\nB: He should apologize.",
     funFact:"From 'grossier' (coarse). In old French, 'gros' implied lack of refinement, not just physical size."},

    {type:"teach", trg:"le grondement", src:"the rumbling, the growl", pos:"noun", gender:"m",
     note:"Masculine noun. A deep, continuous, threatening sound.",
     example:"A: Le grondement du tonnerre approche.\nB: Rentrons avant l'orage.",
     exampleSrc:"A: The rumbling of thunder is approaching.\nB: Let's go inside before the storm.",
     funFact:"From 'gronder' which means both to rumble and to scold. Parents 'grondent' their children too."},

    {type:"fb",
     s:"On perçoit un {1} de mécontentement dans la population.",
     a:["frémissement"],
     opts:["frémissement","grondement","déclassement","déchaînement"],
     hint:"A subtle stirring or quiver, the very first signs of something beginning to move.",
     sSrc:"We perceive a {1} of discontent in the population."},

    {type:"teach", trg:"la division", src:"the division, the split", pos:"noun", gender:"f",
     note:"Feminine noun. Separation into parts, or disagreement within a group.",
     example:"A: La division au sein du parti est profonde.\nB: Ils n'arriveront jamais à s'entendre.",
     exampleSrc:"A: The division within the party is deep.\nB: They'll never manage to agree.",
     funFact:"Used in math, military (army divisions), and politics. 'Diviser pour mieux régner' is the French version of 'divide and conquer'."},

    {type:"teach", trg:"l'entrepreneuriat", src:"entrepreneurship", pos:"noun", gender:"m",
     note:"Masculine noun. The activity of starting and running businesses.",
     example:"A: L'entrepreneuriat est encouragé par l'État.\nB: Il y a des aides pour les jeunes créateurs.",
     exampleSrc:"A: Entrepreneurship is encouraged by the state.\nB: There are grants for young creators.",
     funFact:"'Entrepreneur' is a French word borrowed by English. France has a strong startup culture called 'La French Tech'."},

    {type:"match", pairs:[
      {trg:"flambée", src:"surge, blaze"},
      {trg:"dépotoir", src:"dump"},
      {trg:"dérivé", src:"derivative"},
      {trg:"grondement", src:"rumbling"},
      {trg:"entrepreneuriat", src:"entrepreneurship"}
    ]},

    {type:"mc",
     q:"Quel mot désigne les restes mortels d'une personne ?",
     opts:["le dépotoir","le dérivé","la dépouille","la détonation"],
     ans:"la dépouille",
     hint:"A formal term for a deceased person's body, often used in news reports and obituaries."},

    {type:"fb",
     s:"Le {1} de violence dans les rues a nécessité l'intervention de la police.",
     a:["déchaînement"],
     opts:["déchaînement","déclassement","frémissement","grondement"],
     hint:"An unleashing or outburst. Literally, the act of removing chains.",
     sSrc:"The {1} of violence in the streets required police intervention."}
  ]
};
export default LESSON_2;
