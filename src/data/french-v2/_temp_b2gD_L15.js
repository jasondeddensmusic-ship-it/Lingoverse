// French B2 Gap Batch D Lesson 15 — Expressions and Idioms
const LESSON_15 = {id:"frv2_b2gD_l15", title:"Expressions et locutions", icon:"🗝️", xp:15, board:true, steps:[
  {type:"intro", title:"Expressions et locutions",
   desc:"Master fixed expressions and idiomatic phrases that are essential for advanced French communication.",
   goals:["Learn 10 fixed expressions and idioms","Use adverbial phrases naturally","Understand formal and informal registers"]},

  {type:"teach", trg:"là-dessus", src:"on that matter / thereupon", pos:"adv", gender:null,
   note:"On this subject, about that. Also: on top of that.\nVery common in conversation and writing.",
   example:"A: Je ne suis pas d'accord là-dessus.\nB: Qu'est-ce qui te dérange?\nA: Le manque de transparence.\nB: On peut en discuter calmement.",
   exampleSrc:"A: I don't agree on that matter.\nB: What bothers you?\nA: The lack of transparency.\nB: We can discuss it calmly.",
   funFact:"Part of the 'là-' family: là-dessus (on it), là-dessous (under it), là-dedans (in it), là-bas (over there). All use hyphens."},

  {type:"teach", trg:"là-dedans", src:"in there / in that", pos:"adv", gender:null,
   note:"Inside that place or thing. Also figurative: 'involved in that'.\nHyphenated compound adverb.",
   example:"A: Qu'est-ce qu'il y a là-dedans?\nB: Des vieux cartons du grenier.\nA: On devrait trier tout ça.\nB: Tu as raison, certains sont là depuis vingt ans.",
   exampleSrc:"A: What's in there?\nB: Old boxes from the attic.\nA: We should sort through all of that.\nB: You're right, some have been there for twenty years.",
   funFact:"Also figurative: 'Je ne veux rien avoir là-dedans' (I don't want to be involved in that). Very versatile in spoken French."},

  {type:"teach", trg:"jusqu'au bout", src:"to the very end / all the way", pos:"adv", gender:null,
   note:"Until the very end, completely.\n'Aller jusqu'au bout' = to see something through.",
   example:"A: Il faut aller jusqu'au bout de ce projet.\nB: Même si c'est difficile?\nA: Surtout si c'est difficile.\nB: D'accord, on ne lâche rien.",
   exampleSrc:"A: We need to see this project through to the end.\nB: Even if it's difficult?\nA: Especially if it's difficult.\nB: Alright, we won't give up.",
   funFact:"'Le bout' means 'the end/tip'. 'Jusqu'au bout des doigts' (to the fingertips) means completely, thoroughly."},

  {type:"teach", trg:"dans l'absolu", src:"in absolute terms / ideally", pos:"adv", gender:null,
   note:"Speaking theoretically, without considering real constraints.\nUsed to introduce an ideal scenario.",
   example:"A: Dans l'absolu, cette solution est parfaite.\nB: Mais en pratique?\nA: C'est plus compliqué.\nB: Il faut tenir compte du budget.",
   exampleSrc:"A: In absolute terms, this solution is perfect.\nB: But in practice?\nA: It's more complicated.\nB: We need to take the budget into account.",
   funFact:"A very French way of reasoning: 'dans l'absolu' versus 'en pratique'. This contrast structures many French arguments."},

  {type:"mc",
   q:"Que signifie 'aller jusqu'au bout'?",
   opts:["Terminer complètement ce qu'on a commencé","Marcher très longtemps","Arriver en retard","Partir le premier"],
   ans:"Terminer complètement ce qu'on a commencé",
   hint:"'Le bout' means the very end or tip. Going 'jusqu'au bout' means reaching that final point."},

  {type:"teach", trg:"pour peu que", src:"provided that / if only", pos:"conj", gender:null,
   note:"Introduces a minimal condition. Requires subjunctive.\nFormal and elegant. 'Pour peu qu'il fasse beau...'",
   example:"A: Pour peu qu'on s'organise, on peut y arriver.\nB: Tu penses que c'est possible?\nA: Oui, avec un minimum d'effort.\nB: Alors, commençons maintenant.",
   exampleSrc:"A: Provided we organize ourselves, we can manage.\nB: Do you think it's possible?\nA: Yes, with a minimum of effort.\nB: Then let's start now.",
   funFact:"Requires the subjunctive mood. Very elegant in formal writing. Equivalent to 'à condition que' but more literary."},

  {type:"teach", trg:"en marge de", src:"on the margins of / alongside", pos:"prep", gender:null,
   note:"On the edge of, outside the mainstream of something.\nAlso: alongside an event. 'En marge de la conférence'.",
   example:"A: Des manifestations ont eu lieu en marge du sommet.\nB: Les autorités s'y attendaient?\nA: Oui, le dispositif de sécurité était important.\nB: C'est le prix de la démocratie.",
   exampleSrc:"A: Demonstrations took place on the margins of the summit.\nB: Were the authorities expecting it?\nA: Yes, the security arrangement was significant.\nB: That's the price of democracy.",
   funFact:"'Marge' (margin) comes from Latin 'margo'. 'En marge de la société' means living outside mainstream society."},

  {type:"teach", trg:"c'est-à-dire que", src:"that is to say / meaning that", pos:"conj", gender:null,
   note:"Used to clarify or rephrase what was just said.\nAbbreved: 'c.-à-d.' in writing. Very frequent in spoken French.",
   example:"A: Il est parti. C'est-à-dire qu'il ne reviendra pas.\nB: Tu en es sûr?\nA: Oui, il a vendu son appartement.\nB: C'est définitif alors.",
   exampleSrc:"A: He left. That is to say, he won't come back.\nB: Are you sure?\nA: Yes, he sold his apartment.\nB: It's final then.",
   funFact:"Abbreviated 'c.-à-d.' in formal writing. One of the most common French connectors, used constantly in both speech and writing."},

  {type:"fb",
   s:"{1}, cette solution serait idéale, mais en pratique elle coûte trop cher.",
   a:["Dans l'absolu"],
   opts:["Dans l'absolu","Jusqu'au bout","C'est-à-dire","Là-dessus"],
   hint:"A French expression for reasoning without practical constraints. The ideal case, divorced from reality.",
   sSrc:"{1}, this solution would be ideal, but in practice it costs too much."},

  {type:"teach", trg:"par suite de", src:"as a result of / following", pos:"prep", gender:null,
   note:"Because of, as a consequence of.\nFormal register. Used in official documents and news.",
   example:"A: L'usine a fermé par suite de difficultés financières.\nB: Combien d'emplois sont perdus?\nA: Deux cents dans l'immédiat.\nB: C'est un coup dur pour la région.",
   exampleSrc:"A: The factory closed as a result of financial difficulties.\nB: How many jobs are lost?\nA: Two hundred immediately.\nB: It's a blow for the region.",
   funFact:"More formal than 'à cause de'. Used in legal documents, insurance claims, and journalism. 'Suite à' is its informal cousin."},

  {type:"teach", trg:"dans l'espoir de", src:"in the hope of", pos:"prep", gender:null,
   note:"Expresses motivation by hope. Followed by an infinitive.\nElegant alternative to 'en espérant'.",
   example:"A: Elle a postulé dans l'espoir de décrocher le poste.\nB: La concurrence est rude.\nA: Mais son dossier est excellent.\nB: Je lui souhaite bonne chance.",
   exampleSrc:"A: She applied in the hope of landing the job.\nB: The competition is tough.\nA: But her application is excellent.\nB: I wish her good luck.",
   funFact:"This construction is very common in formal letters. 'Dans l'espoir d'une réponse favorable' closes many French business letters."},

  {type:"mc",
   q:"Quelle expression introduit une clarification de ce qui vient d'être dit?",
   opts:["C'est-à-dire que","Jusqu'au bout","En marge de","Par suite de"],
   ans:"C'est-à-dire que",
   hint:"This connector is used to rephrase or explain, abbreviated as 'c.-à-d.' in writing."},

  {type:"match", pairs:[
    {trg:"là-dessus", src:"on that matter"},
    {trg:"jusqu'au bout", src:"to the very end"},
    {trg:"pour peu que", src:"provided that"},
    {trg:"en marge de", src:"on the margins of"},
    {trg:"par suite de", src:"as a result of"}
  ]},

  {type:"fb",
   s:"Des négociations informelles ont eu lieu {1} la conférence officielle.",
   a:["en marge de"],
   opts:["en marge de","par suite de","dans l'espoir de","jusqu'au bout de"],
   hint:"This prepositional phrase means 'alongside' or 'on the sidelines of' an event.",
   sSrc:"Informal negotiations took place {1} the official conference."}
]};
export default LESSON_15;
