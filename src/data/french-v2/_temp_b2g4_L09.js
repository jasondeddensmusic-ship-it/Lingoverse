const LESSON_9 = {
  id:"frv2_b2g4_l9", title:"Mouvement et action", icon:"\u{1F3C3}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Mouvement et action",
     desc:"Master verbs and nouns related to physical movement, force, and dynamic action.",
     goals:["Learn 15 words about movement and force","Describe physical actions precisely","Use vivid action vocabulary in context"]},

    {type:"teach", trg:"fracasser", src:"to smash, to shatter", pos:"verb", gender:null,
     note:"Verb. To break violently into pieces. Very forceful.",
     example:"A: Il a fracasse la vitre d'un coup de poing.\nB: Les morceaux de verre etaient partout.",
     exampleSrc:"A: He smashed the window with a punch.\nB: Pieces of glass were everywhere.",
     funFact:"From Italian 'fracassare'. 'Se fracasser' means to crash violently. Used in accident reports."},

    {type:"teach", trg:"froisser", src:"to crumple, to offend", pos:"verb", gender:null,
     note:"Verb. To wrinkle fabric or paper. Figuratively: to hurt feelings.",
     example:"A: Ne froisse pas ta chemise, on sort ce soir.\nB: Pardon, je vais la repasser.",
     exampleSrc:"A: Don't crumple your shirt, we're going out tonight.\nB: Sorry, I'll iron it.",
     funFact:"'Se froisser un muscle' means to pull a muscle. Three meanings from one verb: wrinkle, offend, strain."},

    {type:"teach", trg:"herisser", src:"to bristle, to make stand on end", pos:"verb", gender:null,
     note:"Verb. To make hair stand up. Figuratively: to annoy greatly.",
     example:"A: Ce bruit me herisse.\nB: Moi aussi, c'est insupportable.",
     exampleSrc:"A: That noise makes me bristle.\nB: Me too, it's unbearable.",
     funFact:"From 'herisson' (hedgehog). A hedgehog bristles its spines. Same visual for irritated hair."},

    {type:"teach", trg:"hierarchiser", src:"to rank, to prioritize", pos:"verb", gender:null,
     note:"Verb. To organize by order of importance.",
     example:"A: Il faut hierarchiser les taches urgentes.\nB: Commenceons par les plus critiques.",
     exampleSrc:"A: We need to prioritize the urgent tasks.\nB: Let's start with the most critical ones.",
     funFact:"From 'hierarchie'. French workplace culture is famously hierarchical compared to Nordic countries."},

    {type:"teach", trg:"immortaliser", src:"to immortalize", pos:"verb", gender:null,
     note:"Verb. To preserve forever, especially in memory or art.",
     example:"A: Ce tableau a immortalise la bataille.\nB: On s'en souvient grace a l'artiste.",
     exampleSrc:"A: This painting immortalized the battle.\nB: We remember it thanks to the artist.",
     funFact:"The Academie francaise calls its members 'les Immortels'. They immortalize the French language."},

    {type:"mc",
     q:"Quel verbe signifie 'briser violemment en morceaux' ?",
     opts:["fracasser","froisser","herisser","hierarchiser"],
     ans:"fracasser",
     hint:"From Italian 'fracassare'. A very forceful action involving violent breaking."},

    {type:"teach", trg:"demonter", src:"to dismantle, to unsettle", pos:"verb", gender:null,
     note:"Verb. To take apart. Figuratively: to throw someone off balance.",
     example:"A: La question l'a completement demonte.\nB: Il n'a pas su quoi repondre.",
     exampleSrc:"A: The question completely unsettled him.\nB: He didn't know what to say.",
     funFact:"'Mer demontee' describes extremely rough seas. The ocean 'dismantles' everything in its path."},

    {type:"teach", trg:"la detonation", src:"the detonation, the explosion", pos:"noun", gender:"f",
     note:"Feminine noun. A sudden loud explosion or bang.",
     example:"A: La detonation a ete entendue a des kilometres.\nB: Les fenetres ont vibre.",
     exampleSrc:"A: The detonation was heard for kilometers.\nB: The windows vibrated.",
     funFact:"From Latin 'detonare' (to thunder). In chemistry, detonation is faster than deflagration."},

    {type:"teach", trg:"le dechaInement", src:"the unleashing, the outburst", pos:"noun", gender:"m",
     note:"Masculine noun. An uncontrolled release of violence or emotion.",
     example:"A: Le dechainement de violence a surpris tout le monde.\nB: C'etait totalement inattendu.",
     exampleSrc:"A: The outburst of violence surprised everyone.\nB: It was totally unexpected.",
     funFact:"Literally 'un-chaining'. To unleash something that was held back by chains."},

    {type:"fb",
     s:"Il faut {1} les projets par ordre de priorite.",
     a:["hierarchiser"],
     opts:["hierarchiser","immortaliser","fracasser","demonter"],
     hint:"To organize things by rank or importance. From the noun 'hierarchie'.",
     sSrc:"We need to {1} the projects by order of priority."},

    {type:"teach", trg:"l'explosif", src:"the explosive", pos:"noun", gender:"m",
     note:"Masculine noun. A substance that can explode. Also adjective: explosive.",
     example:"A: Les demineurs ont neutralise l'explosif.\nB: La zone est securisee maintenant.",
     exampleSrc:"A: The bomb squad neutralized the explosive.\nB: The area is secure now.",
     funFact:"Alfred Nobel invented dynamite, an explosive, then created the Nobel Peace Prize. Ironic legacy."},

    {type:"teach", trg:"l'extremite", src:"the extremity, the end point", pos:"noun", gender:"f",
     note:"Feminine noun. The very end or tip. Also desperation.",
     example:"A: Nous sommes arrives a l'extremite de la route.\nB: Il n'y a plus rien apres.",
     exampleSrc:"A: We've reached the end of the road.\nB: There's nothing beyond this.",
     funFact:"'Etre a la derniere extremite' means to be at death's door. A dramatic expression."},

    {type:"teach", trg:"frontal", src:"frontal, head-on", pos:"adj", gender:null,
     note:"Adjective. Direct and confrontational. Feminine: frontale.",
     example:"A: L'attaque a ete frontale.\nB: Ils n'ont pas cherche a negocier.",
     exampleSrc:"A: The attack was head-on.\nB: They didn't try to negotiate.",
     funFact:"'Collision frontale' is a head-on crash. Also used for direct confrontation in debates."},

    {type:"mc",
     q:"Quel mot évoque une libération soudaine et violente d'une force longtemps retenue ?",
     opts:["un explosif","un dechainement","une detonation","une extremite"],
     ans:"un dechainement",
     hint:"Literally means 'un-chaining'. Something that was held back is suddenly released."},

    {type:"teach", trg:"un boulet", src:"a cannonball, a burden", pos:"noun", gender:"m",
     note:"Masculine noun. A heavy iron ball. Figuratively: a person who drags you down.",
     example:"A: Ce projet est un vrai boulet.\nB: Il nous ralentit depuis des mois.",
     exampleSrc:"A: This project is a real burden.\nB: It's been slowing us down for months.",
     funFact:"Convicts wore a 'boulet' chained to their ankle. Now slang for any dead weight."},

    {type:"fb",
     s:"La question l'a completement {1}, il est reste sans voix.",
     a:["demonte"],
     opts:["demonte","fracasse","froisse","herisse"],
     hint:"To dismantle or unsettle someone. Also used for rough seas that 'take apart' ships.",
     sSrc:"The question completely {1} him, he was left speechless."},

    {type:"match", pairs:[
      {trg:"fracasser", src:"to smash"},
      {trg:"froisser", src:"to crumple, to offend"},
      {trg:"herisser", src:"to bristle"},
      {trg:"demonter", src:"to dismantle"},
      {trg:"boulet", src:"cannonball, burden"}
    ]},

    {type:"mc",
     q:"Que signifie 'frontal' dans le contexte d'un conflit ?",
     opts:["Diplomatique","Discret","Direct et sans detour","Lache et indirect"],
     ans:"Direct et sans detour",
     hint:"From 'front' meaning forehead. A frontal approach is face-to-face, head-on."}
  ]
};
export default LESSON_9;
