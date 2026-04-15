// L10 - Daily Life & Objects
const LESSON_10 = {id:"frv2_b2gC_l10", title:"Vie quotidienne et objets", icon:"\u{1F3E0}", xp:15, board:true, steps:[

{type:"intro", title:"Vie quotidienne et objets",
 desc:"Learn precise vocabulary for everyday objects, household items, and daily routines.",
 goals:["Learn 8 words for daily objects and routines","Describe household items with precision","Navigate everyday conversations about home life"]},

{type:"teach", trg:"le coffre-fort", src:"safe, strongbox", pos:"noun", gender:"m",
 note:"Masculine noun. A secure box for valuables.\nCompound: coffre (chest) + fort (strong).",
 example:"A: Où gardes-tu tes documents importants ?\nB: Dans un coffre-fort, à la maison.",
 exampleSrc:"A: Where do you keep your important documents?\nB: In a safe, at home.",
 funFact:"French compound nouns often follow noun + adjective order. The plural is coffres-forts."},

{type:"teach", trg:"la poussette", src:"stroller, pushchair", pos:"noun", gender:"f",
 note:"Feminine noun. A wheeled chair for babies.\nFrom pousser (to push).",
 example:"A: On prend la poussette pour la promenade ?\nB: Oui, le bébé est trop petit pour marcher.",
 exampleSrc:"A: Shall we take the stroller for the walk?\nB: Yes, the baby is too small to walk.",
 funFact:"From pousser (to push). French has many -ette diminutives: fourchette, chaussette, maisonnette."},

{type:"teach", trg:"la prunelle", src:"pupil (of the eye), sloe berry", pos:"noun", gender:"f",
 note:"Feminine noun. The black center of the eye.\nAlso a type of small dark berry.",
 example:"A: On dit 'la prunelle de mes yeux' pour quelque chose de précieux.\nB: Mes enfants sont la prunelle de mes yeux.",
 exampleSrc:"A: We say 'the apple of my eyes' for something precious.\nB: My children are the apple of my eyes.",
 funFact:"English says 'apple of my eye' but French says 'prunelle de mes yeux' (sloe berry of my eyes)."},

{type:"teach", trg:"le binocle", src:"pince-nez, old-fashioned glasses", pos:"noun", gender:"m",
 note:"Masculine noun. Old-style glasses without arms.\nNow humorous or literary.",
 example:"A: Mon arrière-grand-père portait un binocle.\nB: C'était à la mode avant les lunettes modernes.",
 exampleSrc:"A: My great-grandfather wore a pince-nez.\nB: It was fashionable before modern glasses.",
 funFact:"From Latin bi (two) + oculus (eye). The word binocle is now charmingly old-fashioned in French."},

{type:"teach", trg:"la maisonnée", src:"household, all occupants of a house", pos:"noun", gender:"f",
 note:"Feminine noun. All the people living in one house.\nFrom maison + -ée (collective suffix).",
 example:"A: Toute la maisonnée était réunie pour le dîner.\nB: Grand-mère avait préparé un repas pour quinze personnes.",
 exampleSrc:"A: The whole household was gathered for dinner.\nB: Grandmother had prepared a meal for fifteen people.",
 funFact:"The -ée suffix creates collective nouns: maisonnée (household), tablée (table guests), fournée (batch)."},

{type:"teach", trg:"le compte-gouttes", src:"dropper, eyedropper", pos:"noun", gender:"m",
 note:"Masculine noun. A tube for dispensing liquid drop by drop.\nAlso: au compte-gouttes (sparingly).",
 example:"A: Utilise le compte-gouttes pour le médicament.\nB: Trois gouttes matin et soir dans chaque oeil.",
 exampleSrc:"A: Use the dropper for the medicine.\nB: Three drops morning and evening in each eye.",
 funFact:"The expression 'au compte-gouttes' means extremely sparingly. Information given 'au compte-gouttes' comes very slowly."},

{type:"teach", trg:"le parachute", src:"parachute", pos:"noun", gender:"m",
 note:"Masculine noun. A device for slowing a fall through the air.\nCompound: para (against) + chute (fall).",
 example:"A: Le parachute s'est ouvert à mille mètres d'altitude.\nB: Le saut s'est parfaitement déroulé.",
 exampleSrc:"A: The parachute opened at one thousand meters altitude.\nB: The jump went perfectly.",
 funFact:"Invented by a Frenchman, André-Jacques Garnerin, who made the first parachute jump in 1797."},

{type:"teach", trg:"précipitamment", src:"hastily, in a rush", pos:"adv", gender:null,
 note:"Adverb. Doing something in a great hurry.\nFrom précipiter (to rush, to throw down).",
 example:"A: Il est parti précipitamment sans dire au revoir.\nB: Quelque chose a dû se passer.",
 exampleSrc:"A: He left hastily without saying goodbye.\nB: Something must have happened.",
 funFact:"One of the longest common French adverbs at 15 letters. From Latin praecipitare, to throw headlong."},

{type:"mc",
 q:"Quel objet sert à garder des documents importants en sécurité ?",
 opts:["un coffre-fort","un compte-gouttes","un binocle","un parachute"],
 ans:"un coffre-fort",
 hint:"A secure container. Compound word: chest + strong."},

{type:"fb",
 s:"On prend la {1} pour emmener le bébé se promener.",
 a:["poussette"], opts:["poussette","prunelle","maisonnée","jointure"],
 hint:"A wheeled chair for babies. From pousser (to push).",
 sSrc:"We take the {1} to take the baby for a walk."},

{type:"mc",
 q:"Que signifie l'expression 'la prunelle de mes yeux' ?",
 opts:["Quelque chose de très précieux","Un problème de vue","Une petite baie sauvage","Un ancien type de lunettes"],
 ans:"Quelque chose de très précieux",
 hint:"English says 'the apple of my eye.' French uses a different fruit for the same idea."},

{type:"match", pairs:[
  {trg:"le coffre-fort", src:"safe"},
  {trg:"la poussette", src:"stroller"},
  {trg:"la maisonnée", src:"household"},
  {trg:"le compte-gouttes", src:"dropper"},
  {trg:"le parachute", src:"parachute"}
]},

{type:"fb",
 s:"Toute la {1} était réunie pour fêter Noël ensemble.",
 a:["maisonnée"], opts:["maisonnée","poussette","prunelle","précipitamment"],
 hint:"All the people living under one roof. The -ée suffix creates a collective noun.",
 sSrc:"The whole {1} was gathered to celebrate Christmas together."},

{type:"mc",
 q:"Que signifie 'au compte-gouttes' ?",
 opts:["De manière très limitée, goutte par goutte","Très rapidement","En grande quantité","Sans aucun contrôle"],
 ans:"De manière très limitée, goutte par goutte",
 hint:"Think of a dropper releasing one tiny drop at a time. Extremely sparingly."},

{type:"fb",
 s:"Il est parti {1} sans prendre le temps de s'expliquer.",
 a:["précipitamment"], opts:["précipitamment","prudemment","tranquillement","lentement"],
 hint:"In a great hurry. One of the longest common French adverbs.",
 sSrc:"He left {1} without taking the time to explain."},

{type:"drag_fill",
 s:"Mon arrière-grand-père portait un {1} et gardait ses bijoux dans un {2}.",
 blanks:{"1":"binocle","2":"coffre-fort"},
 pool:["binocle","coffre-fort","compte-gouttes","parachute"],
 hint:"Old-fashioned glasses plus a secure box for valuables"},

{type:"mc",
 q:"Quel Français a réalisé le premier saut en parachute en 1797 ?",
 opts:["André-Jacques Garnerin","Louis Pasteur","Jules Verne","Napoléon Bonaparte"],
 ans:"André-Jacques Garnerin",
 hint:"This inventor literally threw himself from a hot air balloon to test his invention."}

]};
export default LESSON_10;
