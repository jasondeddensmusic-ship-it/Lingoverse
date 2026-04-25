// French B2 Gap Lesson 16. Human Rights and Ethics
const LESSON_16 = {id:"frv2_b2g5_l16", title:"Droits humains et éthique", icon:"✊", xp:15, board:true, steps:[
  {type:"intro", title:"Droits humains et éthique",
   desc:"Learn vocabulary for discussing human rights, social justice, and ethical dilemmas at B2 level.",
   goals:["Learn 15 key words about rights and ethics","Discuss social justice and ethical issues","Use formal vocabulary for human rights topics"]},

  {type:"teach", trg:"l'assisté", src:"the welfare recipient", pos:"noun", gender:"m",
   note:"A person who receives social assistance.\nFeminine: assistée. Can be pejorative in some contexts.",
   example:"A: Le mot 'assisté' est souvent péjoratif.\nB: Oui, il stigmatise les personnes en difficulté.\nA: On devrait dire 'bénéficiaire d'aide sociale'.\nB: Le vocabulaire a un impact sur la perception.",
   exampleSrc:"A: The word 'welfare recipient' is often pejorative.\nB: Yes, it stigmatizes people in difficulty.\nA: We should say 'social aid beneficiary'.\nB: Vocabulary has an impact on perception.",
   funFact:"From 'assister' (to assist). The debate over 'assistanat' (welfare dependency) is heated in French politics."},

  {type:"teach", trg:"l'attardé", src:"the delayed / backward", pos:"adj", gender:null,
   note:"Offensive when used for people. Acceptable for regions or development.\nFeminine: attardée.",
   example:"A: Ce village est économiquement attardé.\nB: L'infrastructure n'a pas évolué depuis trente ans.\nA: Il faut investir dans les zones rurales.\nB: L'égalité territoriale est un droit.",
   exampleSrc:"A: This village is economically backward.\nB: The infrastructure hasn't changed in thirty years.\nA: We must invest in rural areas.\nB: Territorial equality is a right.",
   funFact:"From 'attarder' (to delay). Using this word for people is considered highly offensive in modern French."},

  {type:"teach", trg:"indiscriminé", src:"indiscriminate", pos:"adj", gender:null,
   note:"Done without careful judgment or selection.\nDescribes violence, attacks, or actions. Feminine: indiscriminée.",
   example:"A: Les bombardements indiscriminés touchent les civils.\nB: C'est un crime de guerre.\nA: La communauté internationale doit réagir.\nB: Les victimes innocentes méritent protection.",
   exampleSrc:"A: Indiscriminate bombings hit civilians.\nB: It's a war crime.\nA: The international community must react.\nB: Innocent victims deserve protection.",
   funFact:"From 'in-' (not) + 'discriminé' (discriminated). The English sense (without distinction) dominates."},

  {type:"teach", trg:"impunément", src:"with impunity", pos:"adv", gender:null,
   note:"Without suffering any punishment.\nRelated to 'impunité' (impunity) from lesson 1.",
   example:"A: On ne peut pas agir impunément.\nB: Tout le monde doit répondre de ses actes.\nA: La justice finit toujours par triompher.\nB: C'est ce que nous espérons tous.",
   exampleSrc:"A: You can't act with impunity.\nB: Everyone must answer for their actions.\nA: Justice always triumphs in the end.\nB: That's what we all hope.",
   funFact:"From 'impuni' (unpunished) + '-ment'. Reinforces the concept from 'impunité' with adverb force."},

  {type:"teach", trg:"l'indigène", src:"the indigenous person", pos:"noun", gender:"m",
   note:"A native inhabitant of a land.\nAlso adjective. Handle with care: historically loaded in French.",
   example:"A: Les droits des peuples indigènes sont souvent négligés.\nB: Leurs terres sont menacées par l'exploitation.\nA: La reconnaissance de leur culture est essentielle.\nB: Plusieurs pays ont fait des progrès.",
   exampleSrc:"A: The rights of indigenous peoples are often neglected.\nB: Their lands are threatened by exploitation.\nA: Recognition of their culture is essential.\nB: Several countries have made progress.",
   funFact:"From Latin 'indigena' (native). In French colonial history, this word had a discriminatory legal status."},

  {type:"teach", trg:"insulaire", src:"insular / island-dwelling", pos:"adj", gender:null,
   note:"Related to islands. Also figurative: narrow-minded.\nSame form for masculine and feminine.",
   example:"A: La mentalité insulaire peut être fermée.\nB: Vivre sur une île crée une identité forte.\nA: Mais aussi un certain isolement.\nB: L'ouverture au monde est nécessaire.",
   exampleSrc:"A: The insular mentality can be closed-minded.\nB: Living on an island creates a strong identity.\nA: But also a certain isolation.\nB: Openness to the world is necessary.",
   funFact:"From Latin 'insularis' (of an island). France has many insular territories: Corsica, Martinique, Reunion."},

  {type:"teach", trg:"irréparablement", src:"irreparably", pos:"adv", gender:null,
   note:"In a way that cannot be fixed or undone.\nVery formal and literary.",
   example:"A: L'environnement est irréparablement endommagé dans cette zone.\nB: La déforestation a causé des dégâts permanents.\nA: Peut-on au moins limiter les dommages?\nB: Il faut essayer, même si c'est difficile.",
   exampleSrc:"A: The environment is irreparably damaged in this area.\nB: Deforestation caused permanent damage.\nA: Can we at least limit the damage?\nB: We must try, even if it's difficult.",
   funFact:"From 'irréparable' + '-ment'. One of the longest common French adverbs at 16 letters."},

  {type:"teach", trg:"la déscolarisation", src:"the dropping out of school", pos:"noun", gender:"f",
   note:"The process of leaving school before graduation.\nA major social concern.",
   example:"A: La déscolarisation touche surtout les milieux défavorisés.\nB: Les causes sont multiples: pauvreté, violence, ennui.\nA: L'école doit s'adapter à tous.\nB: Des programmes de rattrapage existent.",
   exampleSrc:"A: Dropping out of school mainly affects disadvantaged backgrounds.\nB: The causes are multiple: poverty, violence, boredom.\nA: School must adapt to everyone.\nB: Catch-up programs exist.",
   funFact:"From 'dé-' (un-) + 'scolarisation' (schooling). A major policy challenge in France and worldwide."},

  {type:"teach", trg:"la désaffection", src:"the disaffection / loss of interest", pos:"noun", gender:"f",
   note:"Loss of interest or attachment. Also: taking a building out of use.\nUsed for politics and institutions.",
   example:"A: La désaffection pour la politique inquiète les démocrates.\nB: Les jeunes ne votent plus?\nA: De moins en moins aux élections locales.\nB: Il faut renouveler l'offre politique.",
   exampleSrc:"A: The disaffection toward politics worries democrats.\nB: Young people no longer vote?\nA: Less and less in local elections.\nB: The political offering needs to be renewed.",
   funFact:"From 'dés-' (dis-) + 'affection' (attachment). In architecture, 'désaffecter' means to decommission a building."},

  {type:"mc", q:"Que signifie 'agir impunément'?",
   opts:["Agir sans être puni","Agir avec prudence","Agir collectivement","Agir rapidement"],
   ans:"Agir sans être puni",
   hint:"Acting freely without ever facing legal or social consequences for your actions."},

  {type:"fb", s:"Les bombardements {1} touchent les civils innocents.",
   a:["indiscriminés"], opts:["indiscriminés","insurmontables","industriels","indiscutables"],
   hint:"Done without distinction between military and civilian targets",
   sSrc:"The {1} bombings hit innocent civilians."},

  {type:"teach", trg:"l'inattendu", src:"the unexpected (adj use)", pos:"adj", gender:null,
   note:"Not expected, surprising. Reinforcement from L11.\n'Un résultat inattendu' (an unexpected result).",
   example:"A: Le résultat de l'élection est inattendu.\nB: Personne n'avait prévu cette victoire.\nA: Les sondages se sont trompés.\nB: L'inattendu fait partie de la démocratie.",
   exampleSrc:"A: The election result is unexpected.\nB: Nobody had predicted this victory.\nA: The polls were wrong.\nB: The unexpected is part of democracy.",
   funFact:"Reinforcement: used here as adjective (L11 introduced as noun). Both uses are common at B2."},

  {type:"teach", trg:"l'imprononçable", src:"unpronounceable", pos:"adj", gender:null,
   note:"Impossible or very difficult to pronounce.\nUsed humorously for foreign names or long words.",
   example:"A: Ce nom de ville est imprononçable.\nB: Tu veux essayer quand même?\nA: Non merci, je vais le montrer sur la carte.\nB: C'est plus sûr!",
   exampleSrc:"A: This town name is unpronounceable.\nB: Do you want to try anyway?\nA: No thanks, I'll point to it on the map.\nB: That's safer!",
   funFact:"From 'im-' (not) + 'prononçable' (pronounceable). French speakers find many Welsh and Czech names imprononçable."},

  {type:"teach", trg:"généralement", src:"generously", pos:"adv", gender:null,
   note:"Repeated for reinforcement: 'généralement' = generally, but 'généreusement' = generously.\nDo not confuse these two similar-looking adverbs.",
   example:"A: Elle donne généreusement à toutes les associations.\nB: Sa générosité est connue de tous.\nA: Chaque geste compte.\nB: Oui, même les petites donations aident.",
   exampleSrc:"A: She gives generously to all organizations.\nB: Her generosity is known to everyone.\nA: Every gesture counts.\nB: Yes, even small donations help.",
   funFact:"From 'généreux/généreuse' + '-ment'. Note: 'généralement' means 'generally' (different word!)."},

  {type:"mc", q:"Qu'est-ce que la déscolarisation?",
   opts:["La réforme du système éducatif","L'abandon de l'école avant la fin des études","L'inscription dans une nouvelle école","L'augmentation des effectifs scolaires"],
   ans:"L'abandon de l'école avant la fin des études",
   hint:"Leaving school before completing one's education"},

  {type:"fb", s:"La {1} pour la politique se traduit par une faible participation aux élections.",
   a:["désaffection"], opts:["désaffection","déscolarisation","démocratisation","désobéissance"],
   hint:"Loss of interest or attachment toward political life",
   sSrc:"The {1} toward politics results in low voter turnout."},

  {type:"match", pairs:[
    {trg:"impunément", src:"with impunity"},
    {trg:"insulaire", src:"insular"},
    {trg:"indiscriminé", src:"indiscriminate"},
    {trg:"imprononçable", src:"unpronounceable"},
    {trg:"irréparablement", src:"irreparably"}
  ]},

  {type:"mc", q:"Quel adjectif décrit une mentalité étroite liée à la vie sur une île?",
   opts:["Imprononçable","Indolore","Insulaire","Indiscriminée"],
   ans:"Insulaire",
   hint:"From the Latin word for island, also meaning closed-minded"},

  {type:"fb", s:"L'environnement est {1} endommagé par la déforestation.",
   a:["irréparablement"], opts:["irréparablement","impunément","industriellement","individuellement"],
   hint:"In a way that cannot be fixed or repaired, permanent damage",
   sSrc:"The environment is {1} damaged by deforestation."},

  {type:"drag_fill", s:"Les droits des peuples {1} sont souvent {2} par les grandes entreprises.",
   blanks:{"1":"indigènes","2":"négligés"},
   pool:["indigènes","négligés","insulaires","protégés"],
   hint:"Native peoples' rights are often overlooked by large corporations"},

  {type:"mc", q:"Que signifie 'un résultat inattendu'?",
   opts:["Un résultat très attendu","Un résultat officiel","Un résultat final","Un résultat que personne n'avait prévu"],
   ans:"Un résultat que personne n'avait prévu",
   hint:"Something nobody saw coming, a surprising outcome"}
]};
export default LESSON_16;
