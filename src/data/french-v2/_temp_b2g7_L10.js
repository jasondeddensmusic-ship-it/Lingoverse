const LESSON_10 = {
  id:"frv2_b2g7_l10", title:"Vie urbaine", icon:"\u{1F3D9}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Vie urbaine",
     desc:"Master vocabulary for discussing city life, urban planning, and daily life in French cities.",
     goals:["Learn 15 urban life words","Discuss city infrastructure","Describe urban environments"]},

    {type:"teach", trg:"le declassement", src:"downgrading, social decline", pos:"noun", gender:"m",
     note:"Masculine noun. Loss of social status or being demoted.",
     example:"A: La peur du declassement social est reelle.\nB: Beaucoup craignent de perdre leur niveau de vie.",
     exampleSrc:"A: The fear of social decline is real.\nB: Many fear losing their standard of living.",
     funFact:"A major theme in French sociology. 'Les declasses' are those who have fallen below their parents' social class."},

    {type:"teach", trg:"le decimettre", src:"a decimeter", pos:"noun", gender:"m",
     note:"Masculine noun. A unit of length equal to 10 centimeters.",
     example:"A: Ce poisson mesure trois decimetres.\nB: Pas mal pour un poisson de riviere.",
     exampleSrc:"A: This fish measures three decimeters.\nB: Not bad for a river fish.",
     funFact:"France championed the metric system after the Revolution (1795). The decimetre is rarely used in daily life but common in science."},

    {type:"teach", trg:"le footballeur", src:"a soccer player", pos:"noun", gender:"m",
     note:"Masculine noun. A person who plays football (soccer).\nFeminine: la footballeuse.",
     example:"A: Ce footballeur a marque trois buts hier soir.\nB: Il est en forme olympique.",
     exampleSrc:"A: This soccer player scored three goals last night.\nB: He's in Olympic form.",
     funFact:"France's 1998 World Cup win made 'footballeur' one of the most aspirational professions for French youth."},

    {type:"teach", trg:"l'encombre", src:"an obstacle, a hindrance", pos:"noun", gender:"m",
     note:"Masculine noun. Something that gets in the way.\n'Sans encombre' means without difficulty.",
     example:"A: Le voyage s'est deroule sans encombre.\nB: Tant mieux, on a eu de la chance.",
     exampleSrc:"A: The trip went without a hitch.\nB: Good, we were lucky.",
     funFact:"'Sans encombre' is the most common usage by far. 'Encombrer' (to clutter) is the related verb."},

    {type:"mc",
     q:"Quelle expression signifie 'sans probleme' ou 'sans difficulte' ?",
     opts:["sans encombre","sans decimettre","sans declassement","sans footballeur"],
     ans:"sans encombre",
     hint:"An obstacle or hindrance. 'Without' plus this word means smoothly."},

    {type:"teach", trg:"la depouille", src:"remains (of the dead)", pos:"noun", gender:"f",
     note:"Feminine noun. A dead body, especially in solemn or formal contexts.",
     example:"A: La depouille du president repose au Pantheon.\nB: C'est un honneur posthume.",
     exampleSrc:"A: The president's remains rest at the Pantheon.\nB: It's a posthumous honor.",
     funFact:"The Pantheon in Paris holds the remains ('depouilles') of France's greatest citizens: Voltaire, Hugo, Curie."},

    {type:"teach", trg:"la detonation", src:"a detonation, an explosion", pos:"noun", gender:"f",
     note:"Feminine noun. A loud explosion or the sound of one.",
     example:"A: Une detonation a retenti dans la nuit.\nB: Les voisins ont appele la police.",
     exampleSrc:"A: A detonation rang out in the night.\nB: The neighbors called the police.",
     funFact:"In physics, detonation is faster than deflagration. In everyday French, it means any loud bang or explosion."},

    {type:"teach", trg:"l'explosif", src:"an explosive", pos:"noun", gender:"m",
     note:"Masculine noun. A substance that can explode.\nAlso adjective: explosive situation.",
     example:"A: Les demineurs ont neutralise l'explosif.\nB: La zone est maintenant securisee.",
     exampleSrc:"A: The bomb squad neutralized the explosive.\nB: The area is now secured.",
     funFact:"Alfred Nobel invented dynamite and felt so guilty he created the Nobel Prize. 'Explosif' is both noun and adjective in French."},

    {type:"fb",
     s:"La {1} a ete entendue a plusieurs kilometres.",
     a:["detonation"],
     opts:["detonation","depouille","declassement","encombre"],
     hint:"The loud bang of an explosion reaching far and wide.",
     sSrc:"The {1} was heard several kilometers away."},

    {type:"teach", trg:"le missile", src:"a missile", pos:"noun", gender:"m",
     note:"Masculine noun. A weapon that is propelled at a target.",
     example:"A: Le missile a ete intercepte en vol.\nB: Le systeme de defense a fonctionne.",
     exampleSrc:"A: The missile was intercepted in flight.\nB: The defense system worked.",
     funFact:"France has its own nuclear deterrent: 'la Force de dissuasion nucleaire'. Submarine-launched missiles are the primary delivery system."},

    {type:"teach", trg:"la division", src:"a division", pos:"noun", gender:"f",
     note:"Feminine noun. Separation into parts, or a military unit.\nAlso: disagreement.",
     example:"A: La division au sein du parti est profonde.\nB: Ils n'arrivent plus a se mettre d'accord.",
     exampleSrc:"A: The division within the party is deep.\nB: They can no longer agree.",
     funFact:"In math, French children learn 'la division' around age 8. In the army, a division is 10,000-15,000 soldiers."},

    {type:"teach", trg:"le dysfonctionnement", src:"a malfunction, a dysfunction", pos:"noun", gender:"m",
     note:"Masculine noun. When something doesn't work properly.",
     example:"A: Ce dysfonctionnement informatique bloque tout le service.\nB: Appelez le technicien.",
     exampleSrc:"A: This computer malfunction is blocking the entire department.\nB: Call the technician.",
     funFact:"French bureaucracy loves this word. 'Un dysfonctionnement' sounds more dignified than 'une panne' (a breakdown)."},

    {type:"mc",
     q:"Ou reposent les depouilles des grands Francais comme Victor Hugo ?",
     opts:["au Pantheon","au Louvre","a Versailles","a Notre-Dame"],
     ans:"au Pantheon",
     hint:"This building in Paris's Latin Quarter was built as a church but became a secular mausoleum."},

    {type:"teach", trg:"l'extremite", src:"an extremity, an end", pos:"noun", gender:"f",
     note:"Feminine noun. The very end or tip of something.\nAlso: a desperate measure.",
     example:"A: Il habite a l'extremite de la ville.\nB: C'est loin de tout.",
     exampleSrc:"A: He lives at the far end of the city.\nB: It's far from everything.",
     funFact:"'Etre reduit a la derniere extremite' means to be desperate. 'Les extremites' can mean the hands and feet in medicine."},

    {type:"teach", trg:"le moule", src:"a mold, a cast", pos:"noun", gender:"m",
     note:"Masculine noun. A hollow container for shaping.\nNote: 'la moule' (feminine) means mussel!",
     example:"A: Verse la pate dans le moule a gateau.\nB: Il faut le beurrer d'abord.",
     exampleSrc:"A: Pour the batter into the cake mold.\nB: You need to butter it first.",
     funFact:"Gender matters here: 'le moule' is a mold for casting, 'la moule' is a shellfish. Mixing them up is a classic French joke."},

    {type:"fb",
     s:"Le {1} du reseau a cause trois heures de coupure internet.",
     a:["dysfonctionnement"],
     opts:["dysfonctionnement","declassement","decimettre","division"],
     hint:"When a system or machine does not work correctly. A technical failure.",
     sSrc:"The network {1} caused three hours of internet outage."},

    {type:"match", pairs:[
      {trg:"declassement", src:"social decline"},
      {trg:"depouille", src:"remains"},
      {trg:"explosif", src:"explosive"},
      {trg:"missile", src:"missile"},
      {trg:"moule", src:"mold"}
    ]},

    {type:"mc",
     q:"Attention au genre ! Quel est le genre de 'moule' quand il designe un recipient pour gateaux ?",
     opts:["masculin","feminin","les deux","neutre"],
     ans:"masculin",
     hint:"'Le moule' is the container for shaping. 'La moule' is the shellfish. Different genders!"},

    {type:"fb",
     s:"La peur du {1} social pousse les parents a investir dans l'education.",
     a:["declassement"],
     opts:["declassement","dysfonctionnement","moule","missile"],
     hint:"Falling below one's current social class or status.",
     sSrc:"Fear of social {1} pushes parents to invest in education."}
  ]
};
export default LESSON_10;
