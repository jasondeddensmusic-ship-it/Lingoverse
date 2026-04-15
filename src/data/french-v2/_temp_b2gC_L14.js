// L14 - Family & Relationships
const LESSON_14 = {id:"frv2_b2gC_l14", title:"Famille et relations", icon:"\u{1F46A}", xp:15, board:true, steps:[

{type:"intro", title:"Famille et relations",
 desc:"Learn vocabulary for family structures, generational relationships, and social bonds.",
 goals:["Learn 8 words for family and relationships","Discuss family dynamics and generations","Express ideas about social connections"]},

{type:"teach", trg:"l'arrière-grand-parent", src:"great-grandparent", pos:"noun", gender:"m",
 note:"Masculine noun. A grandparent's parent.\nPlural: les arrière-grands-parents.",
 example:"A: Mon arrière-grand-père est né en 1920.\nB: Il a donc vécu la Seconde Guerre mondiale.",
 exampleSrc:"A: My great-grandfather was born in 1920.\nB: So he lived through the Second World War.",
 funFact:"Arrière means behind or back. French adds arrière- for each generation: arrière-arrière-grand-parent."},

{type:"teach", trg:"le consentement", src:"consent", pos:"noun", gender:"m",
 note:"Masculine noun. Permission, agreement.\nA key concept in law and relationships.",
 example:"A: Le consentement mutuel est la base de toute relation saine.\nB: Il doit être libre, éclairé et explicite.",
 exampleSrc:"A: Mutual consent is the foundation of any healthy relationship.\nB: It must be free, informed, and explicit.",
 funFact:"French law now defines consent explicitly. The age of sexual consent was set at 15 in 2021."},

{type:"teach", trg:"la guise", src:"manner, way", pos:"noun", gender:"f",
 note:"Feminine noun. Way of doing things.\nAlmost always in: à sa guise (as one pleases).",
 example:"A: Laisse-le agir à sa guise, il est adulte.\nB: D'accord, mais je m'inquiète quand même.",
 exampleSrc:"A: Let him act as he pleases, he is an adult.\nB: Okay, but I worry anyway.",
 funFact:"En guise de means 'by way of' or 'as a substitute for.' A very literary expression."},

{type:"teach", trg:"le laissez-passer", src:"pass, permit", pos:"noun", gender:"m",
 note:"Masculine noun. An official document allowing passage.\nLiterally: let pass. Invariable plural.",
 example:"A: Il faut un laissez-passer pour entrer dans cette zone.\nB: Demande-le au bureau de sécurité.",
 exampleSrc:"A: You need a pass to enter this area.\nB: Ask for it at the security office.",
 funFact:"Laissez-passer is a verb imperative turned noun. Like laissez-faire in economics. Very French."},

{type:"teach", trg:"la main-d'oeuvre", src:"workforce, labor", pos:"noun", gender:"f",
 note:"Feminine noun. Workers collectively.\nLiterally: hand of work. The labor available.",
 example:"A: L'usine cherche de la main-d'oeuvre qualifiée.\nB: C'est difficile de trouver des techniciens expérimentés.",
 exampleSrc:"A: The factory is looking for qualified labor.\nB: It is hard to find experienced technicians.",
 funFact:"From the hand that does the work. French distinguishes main-d'oeuvre qualifiée (skilled) from non qualifiée."},

{type:"teach", trg:"nous-mêmes", src:"ourselves", pos:"pron", gender:null,
 note:"Emphatic pronoun. Nous + mêmes.\nAdds emphasis: 'we ourselves.'",
 example:"A: Nous devons résoudre ce problème nous-mêmes.\nB: Personne ne viendra nous aider cette fois.",
 exampleSrc:"A: We must solve this problem ourselves.\nB: Nobody will come to help us this time.",
 funFact:"French adds -même(s) for emphasis: moi-même, toi-même, lui-même, eux-mêmes. Always hyphenated."},

{type:"teach", trg:"l'assisté", src:"welfare recipient, dependent", pos:"noun", gender:"m",
 note:"Masculine noun. A person receiving social assistance.\nFeminine: l'assistée. Can be pejorative.",
 example:"A: Le mot 'assisté' est souvent utilisé de manière péjorative.\nB: Oui, il stigmatise les personnes en difficulté.",
 exampleSrc:"A: The word 'welfare recipient' is often used pejoratively.\nB: Yes, it stigmatizes people in difficulty.",
 funFact:"The debate about assistanat (welfare dependency) is politically charged in France. A sensitive topic."},

{type:"teach", trg:"le pendant", src:"counterpart, pendant", pos:"noun", gender:"m",
 note:"Masculine noun. The matching or opposite element.\nAlso: an earring that hangs.",
 example:"A: Cette tradition est le pendant français de Thanksgiving.\nB: Chaque culture a ses fêtes de gratitude.",
 exampleSrc:"A: This tradition is the French counterpart of Thanksgiving.\nB: Every culture has its gratitude celebrations.",
 funFact:"From pendre (to hang). Le pendant means what hangs alongside. Often used for cultural comparisons."},

{type:"mc",
 q:"Comment dit-on 'great-grandparent' en français ?",
 opts:["l'arrière-grand-parent","le grand-parent","le beau-parent","le demi-parent"],
 ans:"l'arrière-grand-parent",
 hint:"A... means behind or back. Go one generation further back than grandparent."},

{type:"fb",
 s:"Laisse-la agir à sa {1}, elle sait ce qu'elle fait.",
 a:["guise"], opts:["guise","main-d'oeuvre","pendant","consentement"],
 hint:"As she pleases, in her own way. A literary expression.",
 sSrc:"Let her act as she {1}, she knows what she is doing."},

{type:"mc",
 q:"Que signifie 'la main-d'oeuvre' ?",
 opts:["L'ensemble des travailleurs disponibles","Un gant de travail","Une machine industrielle","Un outil manuel"],
 ans:"L'ensemble des travailleurs disponibles",
 hint:"Literally: the hand of work. The collective labor force in an industry or region."},

{type:"match", pairs:[
  {trg:"l'arrière-grand-parent", src:"great-grandparent"},
  {trg:"le consentement", src:"consent"},
  {trg:"le laissez-passer", src:"pass, permit"},
  {trg:"la main-d'oeuvre", src:"workforce"},
  {trg:"le pendant", src:"counterpart"}
]},

{type:"fb",
 s:"Il faut un {1} pour accéder à la zone sécurisée.",
 a:["laissez-passer"], opts:["laissez-passer","consentement","pendant","assisté"],
 hint:"An official document allowing passage. A verb-turned-noun: 'let pass.'",
 sSrc:"You need a {1} to access the secure zone."},

{type:"mc",
 q:"Que signifie le suffixe '-même(s)' ajouté aux pronoms ?",
 opts:["Il ajoute de l'emphase: 'nous-mêmes' = 'we ourselves'","Il crée le pluriel","Il exprime le doute","Il marque le passé"],
 ans:"Il ajoute de l'emphase: 'nous-mêmes' = 'we ourselves'",
 hint:"Self-emphasis. Adding it to a pronoun means the person themselves, no one else."},

{type:"fb",
 s:"Cette fête est le {1} culturel de Thanksgiving en France.",
 a:["pendant"], opts:["pendant","consentement","assisté","laissez-passer"],
 hint:"The matching or equivalent element. Used for cultural comparisons.",
 sSrc:"This celebration is the cultural {1} of Thanksgiving in France."},

{type:"drag_fill",
 s:"Nous devons résoudre ce problème {1}, car la {2} disponible est insuffisante.",
 blanks:{"1":"nous-mêmes","2":"main-d'oeuvre"},
 pool:["nous-mêmes","main-d'oeuvre","laissez-passer","consentement"],
 hint:"We must solve it ourselves because the available workforce is not enough"},

{type:"mc",
 q:"Pourquoi le mot 'assisté' est-il considéré comme sensible en France ?",
 opts:["Il stigmatise les personnes en difficulté financière","Il est grammaticalement incorrect","Il n'existe pas en français officiel","Il est trop technique"],
 ans:"Il stigmatise les personnes en difficulté financière",
 hint:"This word can carry negative judgment about people receiving social support."}

]};
export default LESSON_14;
