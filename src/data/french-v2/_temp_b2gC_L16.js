// L16 - History & Heritage
const LESSON_16 = {id:"frv2_b2gC_l16", title:"Histoire et patrimoine", icon:"\u{1F3F0}", xp:15, board:true, steps:[

{type:"intro", title:"Histoire et patrimoine",
 desc:"Explore vocabulary for discussing history, heritage, and the preservation of cultural memory.",
 goals:["Learn 8 words for history and heritage","Discuss historical events and cultural preservation","Express ideas about memory and legacy"]},

{type:"teach", trg:"le lèse-majesté", src:"lese-majesty, treason", pos:"noun", gender:"m",
 note:"Masculine noun. An offense against the dignity of a ruler.\nHistorical and figurative use.",
 example:"A: Critiquer le roi, c'était un crime de lèse-majesté.\nB: Aujourd'hui, on utilise l'expression de façon humoristique.",
 exampleSrc:"A: Criticizing the king was a crime of lese-majesty.\nB: Today, we use the expression humorously.",
 funFact:"Lèse-majesté entered English directly from French. It is now used jokingly for any challenge to authority."},

{type:"teach", trg:"le guet-apens", src:"ambush, trap", pos:"noun", gender:"m",
 note:"Masculine noun. A planned surprise attack or trap.\nLegal and military term.",
 example:"A: Les soldats sont tombés dans un guet-apens.\nB: L'ennemi les attendait derrière la colline.",
 exampleSrc:"A: The soldiers fell into an ambush.\nB: The enemy was waiting for them behind the hill.",
 funFact:"From guetter (to watch) + à pens (with intent). A premeditated trap. The -s is silent."},

{type:"teach", trg:"le paraphe", src:"initials, flourish", pos:"noun", gender:"m",
 note:"Masculine noun. Initials or a decorative signature.\nUsed in legal and administrative documents.",
 example:"A: Mettez votre paraphe en bas de chaque page.\nB: D'accord, et ma signature complète à la dernière page ?",
 exampleSrc:"A: Put your initials at the bottom of each page.\nB: Okay, and my full signature on the last page?",
 funFact:"French law distinguishes paraphe (initials on each page) from signature (full name at the end)."},

{type:"teach", trg:"la passe-passe", src:"sleight of hand, trick", pos:"noun", gender:"m",
 note:"Masculine noun. In 'tour de passe-passe.'\nA magic trick or deceptive maneuver.",
 example:"A: Ce tour de passe-passe financier a trompé tout le monde.\nB: Les auditeurs n'ont rien vu pendant des années.",
 exampleSrc:"A: This financial sleight of hand fooled everyone.\nB: The auditors saw nothing for years.",
 funFact:"Passe-passe comes from magicians passing objects between hands. Now used for any clever deception."},

{type:"teach", trg:"le garde-chasse", src:"gamekeeper", pos:"noun", gender:"m",
 note:"Masculine noun. A person who guards a hunting estate.\nCompound: garde (guard) + chasse (hunt).",
 example:"A: Le garde-chasse surveille le domaine toute l'année.\nB: Il protège les animaux contre le braconnage.",
 exampleSrc:"A: The gamekeeper watches over the estate all year.\nB: He protects animals against poaching.",
 funFact:"French estates (domaines) traditionally employ a garde-chasse. The role dates back to medieval hunting rights."},

{type:"teach", trg:"le porte-à-faux", src:"overhang, precarious position", pos:"noun", gender:"m",
 note:"Masculine noun. An architectural overhang.\nFiguratively: an awkward, unstable position.",
 example:"A: Cette déclaration l'a mis en porte-à-faux avec ses alliés.\nB: Il est maintenant dans une position très inconfortable.",
 exampleSrc:"A: This statement put him at odds with his allies.\nB: He is now in a very uncomfortable position.",
 funFact:"In architecture, en porte-à-faux means cantilevered. In politics, it means being in a contradictory position."},

{type:"teach", trg:"la désillusionnement", src:"disillusionment", pos:"noun", gender:"m",
 note:"Masculine noun. The loss of illusions or hopes.\nFrom dés- (un-) + illusion.",
 example:"A: Le désillusionnement des jeunes envers la politique est inquiétant.\nB: Ils ne croient plus aux promesses des candidats.",
 exampleSrc:"A: The disillusionment of young people toward politics is worrying.\nB: They no longer believe in candidates' promises.",
 funFact:"Post-war France experienced mass désillusionnement. The concept runs through Camus and Sartre's work."},

{type:"teach", trg:"le portefaix", src:"porter, carrier", pos:"noun", gender:"m",
 note:"Masculine noun. A person who carries heavy loads.\nArchaic but found in literature and history.",
 example:"A: Les portefaix transportaient les marchandises dans les ports.\nB: C'était un métier épuisant et mal payé.",
 exampleSrc:"A: The porters carried goods in the ports.\nB: It was an exhausting and poorly paid job.",
 funFact:"From porter (to carry) + faix (burden). A word from old France still found in Balzac and Zola."},

{type:"mc",
 q:"Que signifiait 'lèse-majesté' sous la monarchie ?",
 opts:["Un crime contre la dignité du roi","Un hommage au roi","Une loi fiscale","Un titre de noblesse"],
 ans:"Un crime contre la dignité du roi",
 hint:"Offending royal dignity. Now used humorously for challenging any authority."},

{type:"fb",
 s:"Les soldats sont tombés dans un {1} préparé par l'ennemi.",
 a:["guet-apens"], opts:["guet-apens","porte-à-faux","passe-passe","paraphe"],
 hint:"A planned surprise attack. From guetter (to watch) + with intent.",
 sSrc:"The soldiers fell into an {1} prepared by the enemy."},

{type:"mc",
 q:"Que doit-on mettre en bas de chaque page d'un document légal ?",
 opts:["son paraphe","sa signature complète","son adresse","la date"],
 ans:"son paraphe",
 hint:"Your initials, not your full signature. Required on each page of legal documents."},

{type:"match", pairs:[
  {trg:"le guet-apens", src:"ambush"},
  {trg:"le paraphe", src:"initials"},
  {trg:"le garde-chasse", src:"gamekeeper"},
  {trg:"le porte-à-faux", src:"precarious position"},
  {trg:"le portefaix", src:"porter"}
]},

{type:"fb",
 s:"Ce tour de {1} financier a trompé même les experts.",
 a:["passe-passe"], opts:["passe-passe","porte-à-faux","guet-apens","lèse-majesté"],
 hint:"Sleight of hand. A magic trick or clever deception.",
 sSrc:"This financial sleight of {1} fooled even the experts."},

{type:"mc",
 q:"Que signifie 'être en porte-à-faux' ?",
 opts:["Être dans une position inconfortable et contradictoire","Être en bonne santé","Être très riche","Être en vacances"],
 ans:"Être dans une position inconfortable et contradictoire",
 hint:"Like a cantilevered structure that could topple. An unstable, awkward situation."},

{type:"fb",
 s:"Le {1} des jeunes envers la politique augmente chaque année.",
 a:["désillusionnement"], opts:["désillusionnement","lèse-majesté","portefaix","garde-chasse"],
 hint:"The loss of hopes and illusions. When reality disappoints expectations.",
 sSrc:"The {1} of young people toward politics increases every year."},

{type:"drag_fill",
 s:"Le {1} surveillait le domaine tandis que les {2} transportaient les récoltes.",
 blanks:{"1":"garde-chasse","2":"portefaix"},
 pool:["garde-chasse","portefaix","paraphe","guet-apens"],
 hint:"The estate guard watched over things while the carriers moved the harvest"},

{type:"mc",
 q:"Chez quels auteurs trouve-t-on souvent le mot 'portefaix' ?",
 opts:["Balzac et Zola","Voltaire et Rousseau","Camus et Sartre","Flaubert et Proust"],
 ans:"Balzac et Zola",
 hint:"19th-century realist authors who wrote about working-class life and hard labor."}

]};
export default LESSON_16;
