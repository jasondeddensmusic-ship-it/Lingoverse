// L13 - Conflict & Emotions
const LESSON_13 = {id:"frv2_b2gC_l13", title:"Conflits et émotions fortes", icon:"\u{1F525}", xp:15, board:true, steps:[

{type:"intro", title:"Conflits et émotions fortes",
 desc:"Learn vocabulary for expressing strong emotions, conflicts, and heated situations.",
 goals:["Learn 8 words for conflict and strong emotions","Discuss heated situations with nuance","Express reactions to shocking events"]},

{type:"teach", trg:"l'inefficacité", src:"inefficiency", pos:"noun", gender:"f",
 note:"Feminine noun. Lack of effectiveness.\nIn- (not) + efficacité (efficiency).",
 example:"A: L'inefficacité de cette administration est frustrante.\nB: Les dossiers mettent des mois à être traités.",
 exampleSrc:"A: The inefficiency of this administration is frustrating.\nB: Files take months to be processed.",
 funFact:"French bureaucracy is legendary. L'inefficacité administrative is a common complaint in daily conversation."},

{type:"teach", trg:"l'infidélité", src:"infidelity, unfaithfulness", pos:"noun", gender:"f",
 note:"Feminine noun. Betrayal of trust, especially in a relationship.\nIn- (not) + fidélité (fidelity).",
 example:"A: L'infidélité est la première cause de divorce en France.\nB: La confiance est difficile à reconstruire.",
 exampleSrc:"A: Infidelity is the leading cause of divorce in France.\nB: Trust is difficult to rebuild.",
 funFact:"French literature and cinema are full of infidélité stories. It is a central theme in Flaubert and Proust."},

{type:"teach", trg:"l'intégrisme", src:"fundamentalism", pos:"noun", gender:"m",
 note:"Masculine noun. Strict, literal adherence to a doctrine.\nUsed for religious or political extremism.",
 example:"A: L'intégrisme de toute forme menace la démocratie.\nB: La tolérance est la base du vivre-ensemble.",
 exampleSrc:"A: Fundamentalism in any form threatens democracy.\nB: Tolerance is the foundation of living together.",
 funFact:"Originally a Catholic term for rejecting Vatican II reforms. Now used broadly for any ideological rigidity."},

{type:"teach", trg:"le modéré", src:"moderate (person)", pos:"noun", gender:"m",
 note:"Masculine noun. A person with balanced political views.\nFeminine: la modérée. Also adjective.",
 example:"A: Les modérés cherchent le compromis entre les deux camps.\nB: Leur voix est souvent noyée dans les extrêmes.",
 exampleSrc:"A: The moderates seek compromise between the two sides.\nB: Their voice is often drowned out by extremes.",
 funFact:"In French politics, les modérés historically formed the political center. Today they struggle for attention."},

{type:"teach", trg:"l'indigène", src:"indigenous person, native", pos:"noun", gender:"m",
 note:"Masculine/feminine noun. A person native to a region.\nSensitive term due to colonial history.",
 example:"A: Les droits des peuples indigènes sont reconnus par l'ONU.\nB: Mais dans la pratique, beaucoup reste à faire.",
 exampleSrc:"A: The rights of indigenous peoples are recognized by the UN.\nB: But in practice, much remains to be done.",
 funFact:"In French colonial history, le Code de l'indigénat was a discriminatory legal system. The word carries weight."},

{type:"teach", trg:"la déscolarisation", src:"dropping out of school", pos:"noun", gender:"f",
 note:"Feminine noun. The process of leaving school.\nDé- (un-) + scolarisation (schooling).",
 example:"A: La déscolarisation touche surtout les familles défavorisées.\nB: Des programmes existent pour ramener ces jeunes à l'école.",
 exampleSrc:"A: Dropping out of school mainly affects disadvantaged families.\nB: Programs exist to bring these young people back to school.",
 funFact:"France has compulsory education until 16 (extended to 18 in 2020). Déscolarisation is a major policy concern."},

{type:"teach", trg:"le prétexte", src:"pretext, excuse", pos:"noun", gender:"m",
 note:"Masculine noun. A false reason given to justify an action.\nSous prétexte de = under the pretext of.",
 example:"A: Il est parti sous prétexte d'un rendez-vous urgent.\nB: Je ne crois pas un mot de son excuse.",
 exampleSrc:"A: He left under the pretext of an urgent appointment.\nB: I don't believe a word of his excuse.",
 funFact:"The expression 'sous prétexte que' is extremely common in French. It implies doubt about the stated reason."},

{type:"teach", trg:"prêter attention", src:"to pay attention", pos:"verb", gender:null,
 note:"Expression: prêter + attention. To lend your attention to something.\nMore formal than 'faire attention.'",
 example:"A: Il faut prêter attention aux détails dans ce contrat.\nB: Tu as raison, une erreur pourrait coûter cher.",
 exampleSrc:"A: You must pay attention to the details in this contract.\nB: You are right, a mistake could be costly.",
 funFact:"French 'lends' attention (prêter), while English 'pays' it. Different metaphors for the same idea."},

{type:"mc",
 q:"Quel mot décrit le manque d'efficacité d'un système ?",
 opts:["l'inefficacité","l'infidélité","l'intégrisme","l'indigène"],
 ans:"l'inefficacité",
 hint:"The negative prefix in- plus efficacité. When something does not work well."},

{type:"fb",
 s:"Il est parti sous {1} d'un rendez-vous, mais c'était un mensonge.",
 a:["prétexte"], opts:["prétexte","modéré","intégrisme","attention"],
 hint:"A false reason given to justify leaving. French uses 'sous ___ de.'",
 sSrc:"He left under the {1} of an appointment, but it was a lie."},

{type:"mc",
 q:"Que signifie 'la déscolarisation' ?",
 opts:["Le changement d'école","L'abandon de l'école","L'inscription à l'école","La réussite scolaire"],
 ans:"L'abandon de l'école",
 hint:"The dé- prefix reverses the meaning. Un-schooling. Leaving education."},

{type:"match", pairs:[
  {trg:"l'inefficacité", src:"inefficiency"},
  {trg:"l'infidélité", src:"infidelity"},
  {trg:"le modéré", src:"moderate"},
  {trg:"le prétexte", src:"pretext"},
  {trg:"la déscolarisation", src:"dropping out"}
]},

{type:"fb",
 s:"Les {1} cherchent toujours le compromis entre les extrêmes.",
 a:["modérés"], opts:["modérés","intégrismes","prétextes","indigènes"],
 hint:"People with balanced views who seek the middle ground in political debates.",
 sSrc:"The {1} always seek compromise between extremes."},

{type:"mc",
 q:"Quel mot était lié au Code de l'indigénat dans l'histoire coloniale française ?",
 opts:["prétexte","intégrisme","indigène","modéré"],
 ans:"indigène",
 hint:"A person native to a region. The colonial code using this word was deeply discriminatory."},

{type:"fb",
 s:"Il faut {1} aux détails pour éviter les erreurs coûteuses.",
 a:["prêter attention"], opts:["prêter attention","faire confiance","trouver prétexte","être modéré"],
 hint:"To lend your focus to something. More formal than 'faire a....'",
 sSrc:"You must {1} to details to avoid costly mistakes."},

{type:"drag_fill",
 s:"L'{1} religieux menace la démocratie, selon les {2} du parlement.",
 blanks:{"1":"intégrisme","2":"modérés"},
 pool:["intégrisme","modérés","prétexte","déscolarisation"],
 hint:"Fundamentalism is a threat, according to the balanced, centrist members"},

{type:"mc",
 q:"Quelle est la métaphore française pour 'to pay attention' ?",
 opts:["Donner (give) attention","Acheter (buy) attention","Vendre (sell) attention","Prêter (lend) attention"],
 ans:"Prêter (lend) attention",
 hint:"French uses a different verb than English. You 'l...' your focus rather than 'pay' for it."}

]};
export default LESSON_13;
