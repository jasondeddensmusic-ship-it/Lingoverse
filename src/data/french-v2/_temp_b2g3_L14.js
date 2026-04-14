const LESSON_14 = {
  id:"frv2_b2g3_l14", title:"Littérature et récit", icon:"\u{1F4D6}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Littérature et récit",
     desc:"Learn vocabulary for discussing literature, storytelling, and narrative techniques in French.",
     goals:["Learn 17 B2 literary and narrative words","Discuss books and storytelling styles","Express literary opinions and analysis"]},

    {type:"teach", trg:"bégayer", src:"to stammer, to stutter", pos:"verb", gender:null,
     note:"Verb. To speak with involuntary repetitions. Figuratively: to falter.",
     example:"A: Il bégaye quand il est nerveux.\nB: L'exercice de respiration l'aide beaucoup.",
     exampleSrc:"A: He stutters when he is nervous.\nB: Breathing exercises help him a lot.",
     funFact:"King George VI's stammer was treated by an Australian speech therapist. In French, 'begayer' is also used for machines that stall or sputter."},

    {type:"teach", trg:"chaparder", src:"to pilfer, to swipe", pos:"verb", gender:null,
     note:"Verb. To steal small things, especially food. Lighter than 'voler'.",
     example:"A: Les enfants ont chapardé des cerises dans le jardin.\nB: Ce n'est pas grave, il y en a assez.",
     exampleSrc:"A: The children pilfered cherries from the garden.\nB: It's not a big deal, there are enough.",
     funFact:"A charming, almost innocent word for petty theft. Marcel Pagnol's characters 'chapardent' fruit in his Provencal novels. It evokes childhood mischief."},

    {type:"teach", trg:"une dépouille", src:"remains, a body", pos:"noun", gender:"f",
     note:"Feminine noun. The mortal remains of a deceased person. Very formal register.",
     example:"A: La dépouille du héros national repose au Panthéon.\nB: C'est le plus grand honneur de la République.",
     exampleSrc:"A: The remains of the national hero rest in the Pantheon.\nB: It's the greatest honor of the Republic.",
     funFact:"The Pantheon in Paris holds the 'depouilles' of Victor Hugo, Emile Zola, Marie Curie, and other national heroes. Transfer ceremonies are major events."},

    {type:"teach", trg:"déchoir", src:"to fall from grace, to decline", pos:"verb", gender:null,
     note:"Verb. To lose rank, status, or rights. Irregular: il dechoit, il a dechu.",
     example:"A: Le roi a été déchu de son trône.\nB: La révolution a tout changé.",
     exampleSrc:"A: The king was stripped of his throne.\nB: The revolution changed everything.",
     funFact:"'Dechoir' is a literary verb with dramatic weight. In law, 'decheance de nationalite' means stripping someone of citizenship."},

    {type:"mc",
     q:"Quel verbe signifie voler de petites choses, surtout de la nourriture, de manière espiègle ?",
     opts:["chaparder","bégayer","déchoir","dénigrer"],
     ans:"chaparder",
     hint:"This playful verb describes small-scale theft, like children stealing fruit. It is lighter than 'voler'."},

    {type:"teach", trg:"engoncer", src:"to make look stiff or constricted", pos:"verb", gender:null,
     note:"Verb. To make someone look awkward in tight clothing. Usually passive: engonce dans.",
     example:"A: Il est engoncé dans son costume trop petit.\nB: Il devrait en acheter un à sa taille.",
     exampleSrc:"A: He looks constricted in his too-small suit.\nB: He should buy one that fits.",
     funFact:"A wonderfully visual word. Balzac loved using 'engonce' to describe bourgeois characters stuffed uncomfortably into formal clothes."},

    {type:"teach", trg:"un chichi", src:"fuss, affectation", pos:"noun", gender:"m",
     note:"Masculine noun. Unnecessary fuss or pretentious behavior. Often plural.",
     example:"A: Pas de chichis entre nous, sois naturel.\nB: Tu as raison, la simplicité c'est mieux.",
     exampleSrc:"A: No fuss between us, be natural.\nB: You're right, simplicity is better.",
     funFact:"'Sans chichis' means without pretension. It describes the French ideal of 'decontracte' (relaxed) elegance. Overdressing is 'faire des chichis'."},

    {type:"teach", trg:"un cagoule", src:"a hood, a balaclava", pos:"noun", gender:"f",
     note:"Feminine noun. A hood covering the head and neck, or a lightweight rain jacket.",
     example:"A: Prends ta cagoule, il va pleuvoir.\nB: Bonne idée, la météo annonce des averses.",
     exampleSrc:"A: Take your rain hood, it's going to rain.\nB: Good idea, the forecast says showers.",
     funFact:"In English, 'cagoule' means a lightweight raincoat. In French, it primarily means a hood or balaclava. The English meaning is a British borrowing."},

    {type:"teach", trg:"déplacé", src:"inappropriate, out of place", pos:"adj", gender:null,
     note:"Adjective. Describes behavior or remarks that are tactless. Feminine: deplacee.",
     example:"A: Sa remarque était vraiment déplacée.\nB: Il devrait s'excuser.",
     exampleSrc:"A: His remark was really inappropriate.\nB: He should apologize.",
     funFact:"Literally 'displaced'. A person who is 'deplace' is socially out of their element. 'Personnes deplacees' also means displaced persons (refugees)."},

    {type:"fb",
     s:"Sa remarque était totalement {1} et a mis tout le monde mal à l'aise.",
     a:["déplacée"],
     opts:["déplacée","engoncée","chapardée","déchue"],
     hint:"This adjective means inappropriate or out of place, especially regarding social behavior.",
     sSrc:"Her remark was completely {1} and made everyone uncomfortable."},

    {type:"teach", trg:"la dépouille", src:"remains", pos:"noun", gender:"f",
     note:"Feminine noun. Also means the spoils taken from an enemy. Related: 'depouiller' (to strip).",
     example:"A: La dépouille mortelle a été rapatriée.\nB: La famille attend les obsèques.",
     exampleSrc:"A: The mortal remains were repatriated.\nB: The family is awaiting the funeral.",
     funFact:"'Depouiller un scrutin' means to count ballots, literally 'stripping' the votes from their envelopes. A beautiful bureaucratic metaphor."},

    {type:"teach", trg:"endiabler", src:"to make frenzied, to work up", pos:"verb", gender:null,
     note:"Verb. To fill with wild energy. Past participle 'endiable' used as adjective.",
     example:"A: La foule dansait à un rythme endiablé.\nB: L'orchestre jouait sans s'arrêter.",
     exampleSrc:"A: The crowd danced at a frenzied pace.\nB: The band played without stopping.",
     funFact:"From 'diable' (devil). An 'endiable' rhythm is devilishly fast. The word captures the wild energy of festivals like Mardi Gras."},

    {type:"teach", trg:"défaillir", src:"to faint, to weaken", pos:"verb", gender:null,
     note:"Verb. To lose consciousness or to fail. Irregular: je defaille, il a defailli.",
     example:"A: Elle a failli défaillir sous la chaleur.\nB: Heureusement, quelqu'un lui a donné de l'eau.",
     exampleSrc:"A: She nearly fainted from the heat.\nB: Fortunately, someone gave her water.",
     funFact:"Very literary. In romance novels, heroines 'defaillent' from emotion. In technical use, 'defaillance' means a system failure."},

    {type:"mc",
     q:"Quel adjectif décrit un rythme sauvage et plein d'énergie ?",
     opts:["endiablé","déplacé","engoncé","déchu"],
     ans:"endiablé",
     hint:"This word comes from 'diable' (devil). It describes something with devilishly wild energy."},

    {type:"teach", trg:"exagérément", src:"excessively, exaggeratedly", pos:"adv", gender:null,
     note:"Adverb. To an unreasonable or excessive degree.",
     example:"A: Il a réagi exagérément à cette critique.\nB: C'était disproportionné.",
     exampleSrc:"A: He reacted excessively to that criticism.\nB: It was disproportionate.",
     funFact:"French speakers use 'exagerement' to politely call out overreaction. 'Vous exagerez!' (you're exaggerating!) is a classic French rebuke."},

    {type:"teach", trg:"familièrement", src:"colloquially, informally", pos:"adv", gender:null,
     note:"Adverb. In an informal or casual manner of speech.",
     example:"A: On dit familièrement 'bouquin' pour 'livre'.\nB: C'est du langage courant.",
     exampleSrc:"A: Colloquially, we say 'bouquin' for 'livre' (book).\nB: It's everyday language.",
     funFact:"French dictionaries mark words as 'familier' (informal), 'soutenu' (formal), or 'vulgaire' (vulgar). This register system is deeply embedded in French culture."},

    {type:"teach", trg:"l'ajouter", src:"added, supplementary", pos:"adj", gender:null,
     note:"Adjective (ajoutee). Something that has been added on top of the original.",
     example:"A: La valeur ajoutée de ce service est évidente.\nB: Les clients sont prêts à payer plus.",
     exampleSrc:"A: The added value of this service is obvious.\nB: Customers are willing to pay more.",
     funFact:"'Valeur ajoutee' (added value) is a key business and tax concept. France's 'TVA' (taxe sur la valeur ajoutee) is the VAT tax."},

    {type:"match", pairs:[
      {trg:"bégayer", src:"to stammer"},
      {trg:"chaparder", src:"to pilfer"},
      {trg:"déchoir", src:"to fall from grace"},
      {trg:"chichi", src:"fuss"},
      {trg:"familièrement", src:"colloquially"}
    ]},

    {type:"fb",
     s:"La foule dansait à un rythme {1} toute la nuit.",
     a:["endiablé"],
     opts:["endiablé","déplacé","exagéré","familier"],
     hint:"This adjective means devilishly energetic or frenzied. It comes from 'diable'.",
     sSrc:"The crowd danced at a {1} pace all night long."}
  ]
};
export default LESSON_14;
