// L09 - Art & Expression
const LESSON_9 = {id:"frv2_b2gC_l9", title:"Art et expression", icon:"\u{1F3A8}", xp:15, board:true, steps:[

{type:"intro", title:"Art et expression",
 desc:"Explore the vocabulary of artistic movements, creative expression, and cultural criticism.",
 goals:["Learn 8 words for art and expression","Discuss artistic movements and criticism","Express opinions about creative works"]},

{type:"teach", trg:"l'expressionnisme", src:"expressionism", pos:"noun", gender:"m",
 note:"Masculine noun. An early 20th-century art movement.\nEmphasizes emotional experience over realism.",
 example:"A: L'expressionnisme a révolutionné la peinture au début du XXe siècle.\nB: Les couleurs intenses et les formes déformées expriment des émotions brutes.",
 exampleSrc:"A: Expressionism revolutionized painting at the beginning of the 20th century.\nB: Intense colors and distorted forms express raw emotions.",
 funFact:"Though born in Germany, expressionnisme profoundly influenced French theater and cinema."},

{type:"teach", trg:"le pléonasme", src:"pleonasm, redundancy", pos:"noun", gender:"m",
 note:"Masculine noun. Using more words than necessary.\nExample: 'monter en haut' (go up upward).",
 example:"A: 'Monter en haut' est un pléonasme.\nB: Oui, 'monter' suffit. Le 'en haut' est inutile.",
 exampleSrc:"A: 'Monter en haut' is a pleonasm.\nB: Yes, 'monter' is enough. The 'en haut' is unnecessary.",
 funFact:"French teachers love hunting pléonasmes. Common ones: prévoir à l'avance, voire même, au jour d'aujourd'hui."},

{type:"teach", trg:"l'exclamation", src:"exclamation", pos:"noun", gender:"f",
 note:"Feminine noun. A sudden emotional cry.\nGrammar: an exclamatory sentence.",
 example:"A: Son exclamation de joie a surpris tout le monde.\nB: Il ne pouvait pas contenir son bonheur.",
 exampleSrc:"A: His exclamation of joy surprised everyone.\nB: He could not contain his happiness.",
 funFact:"French exclamations include 'Oh la la!' (genuine surprise), 'Zut!' (mild frustration), and 'Tiens!' (surprise)."},

{type:"teach", trg:"le décorateur", src:"decorator, set designer", pos:"noun", gender:"m",
 note:"Masculine noun. A person who designs interiors or stage sets.\nFeminine: la décoratrice.",
 example:"A: Le décorateur a transformé cette pièce en un espace moderne.\nB: Il a un talent incroyable pour les couleurs.",
 exampleSrc:"A: The decorator transformed this room into a modern space.\nB: He has an incredible talent for colors.",
 funFact:"In French theater, le décorateur designs the entire visual world of a play. A prestigious artistic role."},

{type:"teach", trg:"le promeneur", src:"stroller, walker", pos:"noun", gender:"m",
 note:"Masculine noun. A person walking for pleasure.\nFeminine: la promeneuse. Very literary.",
 example:"A: Les promeneurs admirent les cerisiers en fleurs au parc.\nB: C'est la plus belle saison pour se promener.",
 exampleSrc:"A: The strollers admire the cherry blossoms in the park.\nB: It is the most beautiful season for walking.",
 funFact:"Rousseau wrote 'Les Rêveries du promeneur solitaire.' The solitary walker is a key figure in French literature."},

{type:"teach", trg:"la physionomie", src:"physiognomy, facial appearance", pos:"noun", gender:"f",
 note:"Feminine noun. The features or expression of a face.\nAlso: the general look of a place.",
 example:"A: La physionomie de ce quartier a beaucoup changé en dix ans.\nB: Oui, les nouveaux bâtiments ont transformé le paysage.",
 exampleSrc:"A: The face of this neighborhood has changed a lot in ten years.\nB: Yes, the new buildings have transformed the landscape.",
 funFact:"Originally the 'science' of reading character from faces. Now it simply means appearance or look."},

{type:"teach", trg:"le particularisme", src:"particularism, local identity", pos:"noun", gender:"m",
 note:"Masculine noun. Strong attachment to local or regional identity.\nOften discussed in French politics.",
 example:"A: Le particularisme breton est très fort.\nB: La Bretagne a sa propre langue, sa musique et ses traditions.",
 exampleSrc:"A: Breton particularism is very strong.\nB: Brittany has its own language, music, and traditions.",
 funFact:"France has many regional particularismes despite centralization. Corsica, Alsace, and Brittany are the most visible."},

{type:"teach", trg:"le pamphlétaire", src:"pamphleteer", pos:"noun", gender:"m",
 note:"Masculine noun. A writer of provocative political texts.\nFeminine: la pamphlétaire.",
 example:"A: Victor Hugo était un grand pamphlétaire.\nB: Ses écrits contre Napoléon III sont célèbres.",
 exampleSrc:"A: Victor Hugo was a great pamphleteer.\nB: His writings against Napoleon III are famous.",
 funFact:"France has a rich tradition of pamphlétaires. Voltaire, Zola ('J'accuse'), and Hugo all used this form."},

{type:"mc",
 q:"Quel mouvement artistique privilégie l'émotion brute aux formes réalistes ?",
 opts:["l'expressionnisme","le particularisme","le pléonasme","la physionomie"],
 ans:"l'expressionnisme",
 hint:"An early 20th-century movement. Distorted forms and intense colors convey raw feelings."},

{type:"fb",
 s:"'Monter en haut' est un {1} classique en français.",
 a:["pléonasme"], opts:["pléonasme","expressionnisme","particularisme","exclamation"],
 hint:"Using more words than necessary. A redundancy that French teachers love to correct.",
 sSrc:"'Monter en haut' is a classic {1} in French."},

{type:"mc",
 q:"Qui a écrit 'Les Rêveries du promeneur solitaire' ?",
 opts:["Zola","Rousseau","Voltaire","Hugo"],
 ans:"Rousseau",
 hint:"An 18th-century philosopher known for his ideas about nature and society."},

{type:"match", pairs:[
  {trg:"l'expressionnisme", src:"expressionism"},
  {trg:"le pléonasme", src:"pleonasm"},
  {trg:"le décorateur", src:"decorator"},
  {trg:"le promeneur", src:"stroller"},
  {trg:"le pamphlétaire", src:"pamphleteer"}
]},

{type:"fb",
 s:"La {1} de ce quartier a complètement changé avec les nouveaux immeubles.",
 a:["physionomie"], opts:["physionomie","exclamation","particularisme","expressionnisme"],
 hint:"The general look or appearance of a place. Originally meant reading faces.",
 sSrc:"The {1} of this neighborhood has completely changed with the new buildings."},

{type:"mc",
 q:"Quel mot décrit l'attachement fort à une identité régionale ?",
 opts:["le promeneur","le pléonasme","le particularisme","le pamphlétaire"],
 ans:"le particularisme",
 hint:"Think of regions like Brittany or Corsica with their own language and traditions."},

{type:"fb",
 s:"Le {1} a conçu un décor magnifique pour la pièce de théâtre.",
 a:["décorateur"], opts:["décorateur","promeneur","pamphlétaire","particularisme"],
 hint:"The person who designs sets and interiors. A visual artist of spaces.",
 sSrc:"The {1} designed a magnificent set for the play."},

{type:"drag_fill",
 s:"Le {1} écrit des textes provocateurs, tandis que le {2} crée des espaces visuels.",
 blanks:{"1":"pamphlétaire","2":"décorateur"},
 pool:["pamphlétaire","décorateur","promeneur","pléonasme"],
 hint:"One writes provocative political texts, the other designs visual environments"},

{type:"mc",
 q:"Quel mot français signifie un cri soudain d'émotion ?",
 opts:["un pléonasme","un particularisme","une physionomie","une exclamation"],
 ans:"une exclamation",
 hint:"A sudden emotional outburst. Think of 'Oh la la!' or 'Zut!' in French."}

]};
export default LESSON_9;
