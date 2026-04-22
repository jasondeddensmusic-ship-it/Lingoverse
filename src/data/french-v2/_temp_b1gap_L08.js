// L08 - Attitude & Character
const LESSON_8 = {id:"frv2_b1gap_l8", title:"Traits de caractère", icon:"\u{1F3AD}", xp:15, board:true, steps:[

{type:"intro", title:"Traits de caractère",
 desc:"Describe personality traits, attitudes, and character qualities with nuance and precision.",
 goals:["Learn 20 words for personality and attitude","Describe bold and cautious characters","Use adjectives of character naturally"]},

{type:"teach", trg:"audacieux", src:"bold, daring", pos:"adj", gender:null,
 note:"Adjective. Audacieux (m), audacieuse (f).\nPositive: brave and innovative.",
 example:"A: C'est un projet audacieux mais réalisable.\nB: Il faut oser pour réussir.",
 exampleSrc:"A: It's a bold project but achievable.\nB: You have to dare to succeed.",
 funFact:"From Latin audacia (daring). Danton's famous cry: 'De l'audace, encore de l'audace!'"},

{type:"teach", trg:"l'ardeur", src:"ardor, fervor", pos:"noun", gender:"f",
 note:"Feminine noun. Passionate energy and enthusiasm.\nFrom Latin ardere (to burn).",
 example:"A: Elle travaille avec une ardeur admirable.\nB: Son énergie motive toute l'équipe.",
 exampleSrc:"A: She works with admirable ardor.\nB: Her energy motivates the whole team.",
 funFact:"From Latin 'to burn.' Someone with ardeur burns with passion. Related to English 'ardent.'"},

{type:"teach", trg:"astucieux", src:"clever, shrewd", pos:"adj", gender:null,
 note:"Adjective. Astucieux (m), astucieuse (f).\nFrom astuce (trick, cleverness).",
 example:"A: C'est une solution astucieuse au problème.\nB: Simple mais efficace, j'aime bien.",
 exampleSrc:"A: It's a clever solution to the problem.\nB: Simple but effective, I like it.",
 funFact:"Astuce means both 'trick' and 'tip.' Online articles love 'Les 10 astuces pour...' (10 tips for...)."},

{type:"teach", trg:"attirant", src:"attractive, appealing", pos:"adj", gender:null,
 note:"Adjective. Attirant (m), attirante (f).\nFrom attirer (to attract). Physical or conceptual.",
 example:"A: Cette offre est très attirante.\nB: Oui, mais lis bien les conditions.",
 exampleSrc:"A: This offer is very attractive.\nB: Yes, but read the conditions carefully.",
 funFact:"Attirant is for general appeal. For physical beauty, French prefers séduisant or beau/belle."},

{type:"teach", trg:"adéquat", src:"adequate, appropriate", pos:"adj", gender:null,
 note:"Adjective. Adéquat (m), adéquate (f).\nFormal. Means 'fitting' more than 'barely enough.'",
 example:"A: Ce logement n'est pas adéquat pour une famille.\nB: Il est trop petit et mal situé.",
 exampleSrc:"A: This housing isn't adequate for a family.\nB: It's too small and badly located.",
 funFact:"In French, adéquat means 'properly suited,' not 'barely sufficient' as in English. A false friend."},

{type:"mc",
 q:"Quel adjectif décrit quelqu'un qui ose prendre des risques ?",
 opts:["audacieux","astucieux","adéquat","attirant"],
 ans:"audacieux",
 hint:"Danton's famous cry used the noun form of this word. It means bold and daring."},

{type:"teach", trg:"ambigu", src:"ambiguous", pos:"adj", gender:null,
 note:"Adjective. Ambigu (m), ambiguë (f).\nUnclear, open to multiple interpretations.",
 example:"A: Sa réponse était assez ambiguë.\nB: On ne sait pas s'il a dit oui ou non.",
 exampleSrc:"A: His answer was rather ambiguous.\nB: We don't know if he said yes or no.",
 funFact:"The feminine ambiguë keeps the tréma (two dots) on the e to preserve the 'gu' pronunciation."},

{type:"teach", trg:"l'ambiguïté", src:"ambiguity", pos:"noun", gender:"f",
 note:"Feminine noun. The quality of being ambiguous.\nNote the tréma on the ï.",
 example:"A: L'ambiguïté de cette loi pose des problèmes.\nB: Les juges l'interprètent différemment.",
 exampleSrc:"A: The ambiguity of this law causes problems.\nB: Judges interpret it differently.",
 funFact:"The tréma (ï) prevents reading 'gui' as one syllable. It forces you to say 'gu-i-té.'"},

{type:"teach", trg:"ambivalent", src:"ambivalent", pos:"adj", gender:null,
 note:"Adjective. Ambivalent (m), ambivalente (f).\nHaving mixed feelings about something.",
 example:"A: Je suis ambivalent à propos de ce déménagement.\nB: C'est normal, c'est un grand changement.",
 exampleSrc:"A: I'm ambivalent about this move.\nB: That's normal, it's a big change.",
 funFact:"From Latin ambi (both) + valere (to be strong). Pulled equally in two directions."},

{type:"teach", trg:"aimablement", src:"kindly, pleasantly", pos:"adv", gender:null,
 note:"Adverb from aimable (kind).\nFormally polite way to say 'nicely.'",
 example:"A: Il m'a aimablement proposé de m'aider.\nB: C'est gentil de sa part.",
 exampleSrc:"A: He kindly offered to help me.\nB: That's nice of him.",
 funFact:"Aimable literally means 'lovable.' Aimablement is doing things in a lovable manner."},

{type:"fb",
 s:"Sa réponse était trop {1} pour être comprise clairement.",
 a:["ambiguë"],
 opts:["ambiguë","audacieuse","adéquate","astucieuse"],
 hint:"This adjective means unclear, open to multiple interpretations. Note the special accent mark.",
 sSrc:"Her answer was too {1} to be understood clearly."},

{type:"teach", trg:"l'affectif", src:"emotional, affective", pos:"adj", gender:null,
 note:"Adjective. Affectif (m), affective (f).\nRelated to emotions and emotional bonds.",
 example:"A: Les liens affectifs sont importants pour les enfants.\nB: Ils ont besoin de stabilité émotionnelle.",
 exampleSrc:"A: Emotional bonds are important for children.\nB: They need emotional stability.",
 funFact:"Psychologists use 'la vie affective' (emotional life) as a technical term for the inner emotional world."},

{type:"teach", trg:"l'affinité", src:"affinity, natural connection", pos:"noun", gender:"f",
 note:"Feminine noun. A natural liking or connection.\nAvoir des affinités avec = to have a bond with.",
 example:"A: J'ai beaucoup d'affinités avec elle.\nB: Vous avez les mêmes centres d'intérêt.",
 exampleSrc:"A: I have a lot of affinity with her.\nB: You have the same interests.",
 funFact:"Dating sites use 'affinités' constantly. The concept of 'matching by affinity' is very French."},

{type:"teach", trg:"approfondi", src:"in-depth, thorough", pos:"adj", gender:null,
 note:"Past participle of approfondir used as adjective.\nApprofondi (m), approfondie (f).",
 example:"A: Une analyse approfondie du problème est nécessaire.\nB: On ne peut pas se contenter d'un survol.",
 exampleSrc:"A: An in-depth analysis of the problem is necessary.\nB: We can't settle for a quick overview.",
 funFact:"From profond (deep). Approfondir literally means 'to make deeper.' Approfondi = made deep/thorough."},

{type:"teach", trg:"l'assiduité", src:"diligence, regular attendance", pos:"noun", gender:"f",
 note:"Feminine noun. Consistent effort and attendance.\nSchool reports measure assiduité.",
 example:"A: Son assiduité en classe est remarquable.\nB: Il n'a manqué aucun cours cette année.",
 exampleSrc:"A: His attendance in class is remarkable.\nB: He hasn't missed a single class this year.",
 funFact:"French schools grade assiduité separately from performance. Being there matters as much as grades."},

{type:"mc",
 q:"Quel adjectif signifie 'qui a des sentiments contradictoires' ?",
 opts:["approfondi","ambivalent","ambigu","affectif"],
 ans:"ambivalent",
 hint:"From Latin meaning 'strong in both directions.' Having mixed feelings pulled two ways."},

{type:"teach", trg:"l'assimiler", src:"to assimilate, to absorb", pos:"verb", gender:null,
 note:"Regular -er verb. To absorb knowledge or integrate.\nAlso: to compare (assimiler à).",
 example:"A: Il a du mal à assimiler toutes ces informations.\nB: Normal, c'est beaucoup en une journée.",
 exampleSrc:"A: He's struggling to absorb all this information.\nB: Of course, it's a lot for one day.",
 funFact:"Politically loaded in France: the 'modèle d'assimilation' expects immigrants to adopt French culture."},

{type:"teach", trg:"altérer", src:"to alter, to corrupt, to deteriorate", pos:"verb", gender:null,
 note:"Irregular -er verb (é>è). To change for the worse.\nDoes NOT mean 'to improve.'",
 example:"A: La chaleur a altéré la qualité du vin.\nB: Il aurait fallu le garder au frais.",
 exampleSrc:"A: The heat altered the quality of the wine.\nB: It should have been kept cool.",
 funFact:"Unlike English 'alter' (neutral change), French altérer always implies degradation or worsening."},

{type:"teach", trg:"alternatif", src:"alternative", pos:"adj", gender:null,
 note:"Adjective. Alternatif (m), alternative (f).\nAlso: alternating (courant alternatif = AC).",
 example:"A: Il faut trouver des solutions alternatives.\nB: Le statu quo n'est plus acceptable.",
 exampleSrc:"A: We need to find alternative solutions.\nB: The status quo is no longer acceptable.",
 funFact:"In French, une alternative means a choice between two options, not just one other option."},

{type:"teach", trg:"l'alternative", src:"alternative, choice between two", pos:"noun", gender:"f",
 note:"Feminine noun. A choice between two options.\nStrictly: only TWO options, not many.",
 example:"A: L'alternative est simple : agir ou subir.\nB: Je préfère agir, évidemment.",
 exampleSrc:"A: The alternative is simple: act or suffer.\nB: I prefer to act, obviously.",
 funFact:"Purists insist une alternative = exactly two choices. Using it for 'another option' is contested."},

{type:"fb",
 s:"Une analyse {1} du dossier prendra plusieurs semaines.",
 a:["approfondie"],
 opts:["approfondie","ambiguë","alternative","affective"],
 hint:"This adjective means in-depth or thorough. It comes from the word for 'deep.'",
 sSrc:"An {1} analysis of the file will take several weeks."},

{type:"match", pairs:[
  {trg:"audacieux", src:"bold"},
  {trg:"astucieux", src:"clever"},
  {trg:"ambigu", src:"ambiguous"},
  {trg:"approfondi", src:"thorough"},
  {trg:"alternatif", src:"alternative"}
]},

{type:"mc",
 q:"Quel verbe signifie changer quelque chose en pire ?",
 opts:["approfondir","affecter","altérer","assimiler"],
 ans:"altérer",
 hint:"Unlike the English 'alter,' this French verb always implies degradation. The heat did this to the wine."}

]};
export default LESSON_8;
