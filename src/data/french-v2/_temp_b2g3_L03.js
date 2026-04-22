const LESSON_3 = {
  id:"frv2_b2g3_l3", title:"Les émotions fortes", icon:"\u{1F525}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Les émotions fortes",
     desc:"Build vocabulary for powerful emotions, from joy and euphoria to frustration and disillusionment.",
     goals:["Learn 18 B2 emotion and feeling words","Describe emotional states with nuance","Use expressive language in French"]},

    {type:"teach", trg:"l'allégresse", src:"elation, jubilation", pos:"noun", gender:"f",
     note:"Feminine noun. Intense, contagious joy. Stronger than 'joie'.",
     example:"A: L'allégresse était palpable dans les rues.\nB: Tout le monde fêtait la victoire.",
     exampleSrc:"A: The jubilation was palpable in the streets.\nB: Everyone was celebrating the victory.",
     funFact:"From Italian 'allegrezza'. The musical term 'allegro' shares this root, meaning lively and fast."},

    {type:"teach", trg:"l'euphorie", src:"euphoria", pos:"noun", gender:"f",
     note:"Feminine noun. An overwhelming feeling of happiness or well-being.",
     example:"A: L'euphorie des premiers jours s'est calmée.\nB: Oui, la réalité nous a rattrapés.",
     exampleSrc:"A: The euphoria of the first days has calmed down.\nB: Yes, reality caught up with us.",
     funFact:"Greek 'euphoria' means 'bearing well'. In medicine, it can describe an abnormal state of intense well-being."},

    {type:"teach", trg:"l'exaltation", src:"exaltation, intense excitement", pos:"noun", gender:"f",
     note:"Feminine noun. A state of heightened emotion or enthusiasm.",
     example:"A: Dans l'exaltation du moment, il a tout promis.\nB: Il va regretter ses paroles.",
     exampleSrc:"A: In the exaltation of the moment, he promised everything.\nB: He will regret his words.",
     funFact:"Romanticism loved 'exaltation'. Victor Hugo and Lamartine used it constantly to describe poetic inspiration."},

    {type:"teach", trg:"dépité", src:"disappointed, vexed", pos:"adj", gender:null,
     note:"Adjective. Feeling bitter disappointment. Feminine: depitee.",
     example:"A: Il est dépité par le résultat du vote.\nB: Je comprends, il y avait mis tout son cœur.",
     exampleSrc:"A: He is vexed by the result of the vote.\nB: I understand, he put his whole heart into it.",
     funFact:"From 'depit' meaning spite. 'En depit de' means 'despite', literally 'in the spite of'."},

    {type:"mc",
     q:"Quel mot décrit une joie intense et contagieuse, plus forte que 'joie' ?",
     opts:["l'allégresse","l'euphorie","l'exaltation","le dépit"],
     ans:"l'allégresse",
     hint:"This word comes from Italian and shares a root with the musical term 'allegro'."},

    {type:"teach", trg:"la démotivation", src:"lack of motivation", pos:"noun", gender:"f",
     note:"Feminine noun. The loss of motivation or drive.",
     example:"A: La démotivation des élèves est un vrai problème.\nB: Il faut trouver de nouvelles approches.",
     exampleSrc:"A: Students' lack of motivation is a real problem.\nB: We need to find new approaches.",
     funFact:"French workplace studies rank 'demotivation' as the top concern for HR departments, above salary disputes."},

    {type:"teach", trg:"démotiver", src:"to demotivate", pos:"verb", gender:null,
     note:"Verb. To cause someone to lose motivation or enthusiasm.",
     example:"A: Ces critiques constantes démotivent l'équipe.\nB: Il faut aussi encourager, pas seulement critiquer.",
     exampleSrc:"A: These constant criticisms demotivate the team.\nB: You also need to encourage, not just criticize.",
     funFact:"The prefix 'de-' reverses the meaning. French has many such pairs: motiver/demotiver, monter/demonter, faire/defaire."},

    {type:"teach", trg:"désabusé", src:"disillusioned, jaded", pos:"adj", gender:null,
     note:"Adjective. Having lost all illusions. Feminine: desabusee.",
     example:"A: Il a un regard désabusé sur la politique.\nB: Vingt ans de promesses non tenues, ça use.",
     exampleSrc:"A: He has a disillusioned view of politics.\nB: Twenty years of broken promises wears you down.",
     funFact:"From 'desabuser' meaning to free from illusion. A wonderfully French concept: losing your 'abus' (false beliefs)."},

    {type:"teach", trg:"farouche", src:"fierce, wild, shy", pos:"adj", gender:null,
     note:"Adjective. Can mean fiercely determined or painfully shy, depending on context.",
     example:"A: C'est une farouche défenseuse des droits humains.\nB: Oui, elle ne lâche jamais rien.",
     exampleSrc:"A: She is a fierce defender of human rights.\nB: Yes, she never gives up.",
     funFact:"An unusual word with two opposite senses: a 'farouche' animal is wild and shy, but a 'farouche' defender is fierce and bold."},

    {type:"fb",
     s:"Après des années de déceptions, il est devenu {1} et cynique.",
     a:["désabusé"],
     opts:["désabusé","dépité","farouche","euphorique"],
     hint:"This adjective means having lost all illusions, becoming jaded over time.",
     sSrc:"After years of disappointments, he became {1} and cynical."},

    {type:"teach", trg:"l'agressivité", src:"aggressiveness", pos:"noun", gender:"f",
     note:"Feminine noun. A tendency toward hostile or violent behavior.",
     example:"A: L'agressivité au volant est un vrai danger.\nB: Les accidents sont souvent liés au stress.",
     exampleSrc:"A: Road rage is a real danger.\nB: Accidents are often linked to stress.",
     funFact:"French distinguishes 'agressivite' (general tendency) from 'agression' (a specific act). English often conflates them."},

    {type:"teach", trg:"enivrer", src:"to intoxicate, to exhilarate", pos:"verb", gender:null,
     note:"Verb. To make drunk, or figuratively, to fill with excitement.",
     example:"A: Le succès l'a enivré.\nB: Il faut qu'il garde les pieds sur terre.",
     exampleSrc:"A: Success intoxicated him.\nB: He needs to keep his feet on the ground.",
     funFact:"From 'ivre' (drunk). The figurative sense is very literary. Baudelaire wrote 'Enivrez-vous!' (Get drunk!) as a prose poem."},

    {type:"teach", trg:"l'exclamation", src:"an exclamation", pos:"noun", gender:"f",
     note:"Feminine noun. A sudden cry or remark expressing emotion.",
     example:"A: Son exclamation de surprise a fait rire tout le monde.\nB: Il ne s'y attendait pas du tout.",
     exampleSrc:"A: His exclamation of surprise made everyone laugh.\nB: He didn't expect it at all.",
     funFact:"The French exclamation mark was introduced in the 14th century. It was originally called a 'point d'admiration' (admiration mark)."},

    {type:"mc",
     q:"Quel verbe signifie rendre quelqu'un ivre, au sens propre ou figuré ?",
     opts:["dépiter","enivrer","démotiver","exalter"],
     ans:"enivrer",
     hint:"This verb comes from 'ivre' (drunk). Baudelaire used it as the title of a famous prose poem."},

    {type:"teach", trg:"la familiarité", src:"familiarity", pos:"noun", gender:"f",
     note:"Feminine noun. Closeness or informality. Can imply excessive informality.",
     example:"A: Sa familiarité avec le patron dérange les collègues.\nB: Il devrait garder ses distances.",
     exampleSrc:"A: His familiarity with the boss bothers the colleagues.\nB: He should keep his distance.",
     funFact:"In French culture, the shift from 'vous' to 'tu' is a major marker of familiarite. Getting it wrong is a social faux pas."},

    {type:"teach", trg:"fantasmer", src:"to fantasize", pos:"verb", gender:null,
     note:"Verb. To create mental fantasies or have unrealistic dreams.",
     example:"A: Il fantasme sur une vie à la campagne.\nB: Mais il n'a jamais quitté Paris.",
     exampleSrc:"A: He fantasizes about a life in the countryside.\nB: But he has never left Paris.",
     funFact:"French psychoanalysis (Lacan) uses 'fantasme' as a technical term, distinct from the everyday sense of daydreaming."},

    {type:"teach", trg:"débonnaire", src:"good-natured, easy-going", pos:"adj", gender:null,
     note:"Adjective. Describes a kind, gentle, patient temperament.",
     example:"A: C'est un homme débonnaire, toujours souriant.\nB: Oui, il ne se met jamais en colère.",
     exampleSrc:"A: He is a good-natured man, always smiling.\nB: Yes, he never gets angry.",
     funFact:"Louis I, son of Charlemagne, was called 'Louis le Debonnaire'. The word literally meant 'of good lineage' in Old French."},

    {type:"match", pairs:[
      {trg:"allégresse", src:"jubilation"},
      {trg:"euphorie", src:"euphoria"},
      {trg:"démotivation", src:"lack of motivation"},
      {trg:"familiarité", src:"familiarity"},
      {trg:"débonnaire", src:"good-natured"}
    ]},

    {type:"fb",
     s:"L'{1} de la foule était incroyable après le but de la victoire.",
     a:["allégresse"],
     opts:["allégresse","agressivité","exclamation","exaltation"],
     hint:"This feminine noun means intense, contagious joy, especially in a crowd celebrating.",
     sSrc:"The {1} of the crowd was incredible after the winning goal."},

    {type:"mc",
     q:"Quel adjectif décrit quelqu'un de doux et patient, jamais en colère ?",
     opts:["désabusé","dépité","débonnaire","farouche"],
     ans:"débonnaire",
     hint:"Louis I, son of Charlemagne, was given this nickname. It meant 'of good lineage' in Old French."}
  ]
};
export default LESSON_3;
