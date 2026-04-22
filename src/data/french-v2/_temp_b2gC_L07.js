// L07 - Crime & Justice
const LESSON_7 = {id:"frv2_b2gC_l7", title:"Crime et justice", icon:"\u{2696}", xp:15, board:true, steps:[

{type:"intro", title:"Crime et justice",
 desc:"Learn vocabulary for discussing crime, law, and the justice system in French.",
 goals:["Learn 8 words related to crime and justice","Discuss legal concepts and punishment","Express opinions about the justice system"]},

{type:"teach", trg:"le prévenu", src:"defendant, accused", pos:"noun", gender:"m",
 note:"Masculine noun. A person accused of a crime.\nFeminine: la prévenue. Legal register.",
 example:"A: Le prévenu a nié toutes les accusations.\nB: Son avocat prépare une défense solide.",
 exampleSrc:"A: The defendant denied all charges.\nB: His lawyer is preparing a strong defense.",
 funFact:"In French law, prévenu means someone charged but not yet judged. Once convicted: condamné."},

{type:"teach", trg:"l'outrage", src:"outrage, contempt", pos:"noun", gender:"m",
 note:"Masculine noun. A serious offense or insult.\nLegal: outrage à agent (contempt of officer).",
 example:"A: Il a été arrêté pour outrage à agent de police.\nB: C'est une infraction prise très au sérieux en France.",
 exampleSrc:"A: He was arrested for contempt of a police officer.\nB: It is an offense taken very seriously in France.",
 funFact:"In France, insulting a police officer is a crime called outrage, punishable by a fine or prison."},

{type:"teach", trg:"la proie", src:"prey, victim", pos:"noun", gender:"f",
 note:"Feminine noun. An animal hunted by a predator.\nFiguratively: a victim of exploitation.",
 example:"A: Les personnes âgées sont souvent la proie des escrocs.\nB: Il faut les protéger contre ces arnaques.",
 exampleSrc:"A: Elderly people are often the prey of scammers.\nB: We need to protect them from these scams.",
 funFact:"The expression 'être en proie à' means to be gripped by (fear, doubt). Very common in literature."},

{type:"teach", trg:"la pègre", src:"underworld, organized crime", pos:"noun", gender:"f",
 note:"Feminine noun. The criminal underworld.\nFrom a Provencal word meaning filthy.",
 example:"A: La pègre contrôlait ce quartier dans les années 70.\nB: La police a mis des années à démanteler les réseaux.",
 exampleSrc:"A: The underworld controlled this neighborhood in the 1970s.\nB: The police took years to dismantle the networks.",
 funFact:"Marseille's pègre was legendary. French noir films and novels are full of pègre characters."},

{type:"teach", trg:"le penchant", src:"inclination, tendency", pos:"noun", gender:"m",
 note:"Masculine noun. A natural tendency toward something.\nCan be positive or negative.",
 example:"A: Il a un penchant pour les sports extrêmes.\nB: C'est dangereux, mais il adore l'adrénaline.",
 exampleSrc:"A: He has an inclination for extreme sports.\nB: It is dangerous, but he loves adrenaline.",
 funFact:"From pencher (to lean). Your penchant is what you lean toward. Very literary in French."},

{type:"teach", trg:"la malhonnêteté", src:"dishonesty", pos:"noun", gender:"f",
 note:"Feminine noun. The quality of being dishonest.\nMal- (bad) + honnêteté (honesty).",
 example:"A: La malhonnêteté des dirigeants a choqué le public.\nB: Plusieurs ont été poursuivis pour fraude.",
 exampleSrc:"A: The dishonesty of the leaders shocked the public.\nB: Several were prosecuted for fraud.",
 funFact:"French loves prefix negation: honnête/malhonnête, heureux/malheureux. The mal- prefix means bad."},

{type:"teach", trg:"le préambule", src:"preamble, introduction", pos:"noun", gender:"m",
 note:"Masculine noun. An introductory statement.\nOften legal: the preamble to a constitution.",
 example:"A: Le préambule de la Constitution affirme les droits fondamentaux.\nB: C'est un texte fondateur de la République française.",
 exampleSrc:"A: The preamble of the Constitution affirms fundamental rights.\nB: It is a founding text of the French Republic.",
 funFact:"The Préambule de 1946 is part of French constitutional law. It guarantees social and economic rights."},

{type:"teach", trg:"le précepte", src:"precept, principle", pos:"noun", gender:"m",
 note:"Masculine noun. A rule or principle guiding behavior.\nOften moral or religious.",
 example:"A: Les préceptes de la justice sont universels.\nB: L'égalité devant la loi est le plus important.",
 exampleSrc:"A: The precepts of justice are universal.\nB: Equality before the law is the most important.",
 funFact:"From Latin praeceptum, meaning instruction. French law is built on several préceptes fondamentaux."},

{type:"mc",
 q:"Comment appelle-t-on une personne accusée d'un crime avant le jugement ?",
 opts:["le prévenu","le précepte","le préambule","le penchant"],
 ans:"le prévenu",
 hint:"This legal term means the accused. Once convicted, the person becomes a condamné."},

{type:"fb",
 s:"Les personnes âgées sont souvent la {1} des escrocs.",
 a:["proie"], opts:["proie","pègre","pénalité","malhonnêteté"],
 hint:"An animal hunted by a predator. Figuratively: a vulnerable target for criminals.",
 sSrc:"Elderly people are often the {1} of scammers."},

{type:"mc",
 q:"Que désigne 'la pègre' ?",
 opts:["Les victimes d'un crime","Le milieu criminel organisé","La police secrète","Les juges d'un tribunal"],
 ans:"Le milieu criminel organisé",
 hint:"The criminal underworld. Think of organized crime networks operating in the shadows."},

{type:"match", pairs:[
  {trg:"le prévenu", src:"defendant"},
  {trg:"l'outrage", src:"contempt"},
  {trg:"la proie", src:"prey"},
  {trg:"la malhonnêteté", src:"dishonesty"},
  {trg:"le précepte", src:"precept"}
]},

{type:"fb",
 s:"Il a été arrêté pour {1} à un agent de police.",
 a:["outrage"], opts:["outrage","préambule","penchant","précepte"],
 hint:"A serious insult or offense directed at an authority figure. A crime in France.",
 sSrc:"He was arrested for {1} of a police officer."},

{type:"mc",
 q:"Quel mot désigne une tendance naturelle vers quelque chose ?",
 opts:["un prévenu","un outrage","un penchant","un préambule"],
 ans:"un penchant",
 hint:"From the verb pencher (to lean). What you naturally lean toward or are drawn to."},

{type:"fb",
 s:"La {1} des responsables politiques a provoqué un scandale national.",
 a:["malhonnêteté"], opts:["malhonnêteté","proie","pègre","précepte"],
 hint:"The opposite of honesty. The mal- prefix turns a virtue into its opposite.",
 sSrc:"The {1} of political leaders caused a national scandal."},

{type:"drag_fill",
 s:"Le {1} de la Constitution énonce les {2} fondamentaux de la République.",
 blanks:{"1":"préambule","2":"préceptes"},
 pool:["préambule","préceptes","prévenu","penchant"],
 hint:"The introductory text of the Constitution states the fundamental principles"},

{type:"mc",
 q:"Quelle expression signifie 'être submergé par un sentiment' ?",
 opts:["Être en pègre de","Être en penchant pour","Être en outrage à","Être en proie à"],
 ans:"Être en proie à",
 hint:"Literally, to be the prey of. Used figuratively with emotions like fear or doubt."}

]};
export default LESSON_7;
