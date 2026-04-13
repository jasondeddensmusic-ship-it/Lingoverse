// L02 - Abandonment & Loss
const LESSON_2 = {id:"frv2_b1gap_l2", title:"Perte et abandon", icon:"\u{1F4A8}", xp:15, board:true, steps:[

{type:"intro", title:"Perte et abandon",
 desc:"Learn to discuss loss, abandonment, weakness, and the vocabulary of giving up and letting go.",
 goals:["Learn 20 words about loss and abandonment","Express weakness and decline","Discuss difficult life transitions"]},

{type:"teach", trg:"abandonné", src:"abandoned", pos:"adj", gender:null,
 note:"Past participle of abandonner used as adjective.\nAbandonné (m), abandonnée (f).",
 example:"A: Cette maison semble abandonnée.\nB: Oui, personne n'y habite depuis dix ans.",
 exampleSrc:"A: This house looks abandoned.\nB: Yes, nobody has lived there for ten years.",
 funFact:"From Old French 'a bandon' meaning 'at one's disposal,' the meaning flipped over centuries."},

{type:"teach", trg:"l'abus", src:"abuse, misuse", pos:"noun", gender:"m",
 note:"Masculine noun. Can be physical, emotional, or systemic.\nAlso: excessive use of something.",
 example:"A: L'abus d'alcool est dangereux pour la santé.\nB: Oui, il faut boire avec modération.",
 exampleSrc:"A: Alcohol abuse is dangerous for your health.\nB: Yes, you have to drink in moderation.",
 funFact:"From Latin abusus. The phrase 'abus de pouvoir' (abuse of power) is common in French news."},

{type:"teach", trg:"abuser", src:"to abuse, to take advantage", pos:"verb", gender:null,
 note:"Regular -er verb. Abuser de = to misuse.\nAbuser quelqu'un = to deceive (literary).",
 example:"A: Il abuse de la gentillesse de ses collègues.\nB: C'est vrai, il devrait les remercier plus souvent.",
 exampleSrc:"A: He takes advantage of his colleagues' kindness.\nB: True, he should thank them more often.",
 funFact:"In spoken French, 'tu abuses !' means 'you're going too far!' Very common in casual speech."},

{type:"teach", trg:"affaiblir", src:"to weaken", pos:"verb", gender:null,
 note:"Regular -ir verb. A + faible (weak).\nPhysical or figurative weakening.",
 example:"A: La maladie l'a beaucoup affaibli.\nB: Il a besoin de repos et de bonne nourriture.",
 exampleSrc:"A: The illness has greatly weakened him.\nB: He needs rest and good food.",
 funFact:"Built from faible (weak). French loves these a- prefix verbs that transform adjectives."},

{type:"teach", trg:"appauvrir", src:"to impoverish", pos:"verb", gender:null,
 note:"Regular -ir verb. A + pauvre (poor).\nOften reflexive: s'appauvrir.",
 example:"A: La crise a appauvri beaucoup de familles.\nB: Le gouvernement doit agir rapidement.",
 exampleSrc:"A: The crisis has impoverished many families.\nB: The government must act quickly.",
 funFact:"Same pattern as affaiblir: prefix a- + adjective + -ir suffix creates a verb of becoming."},

{type:"mc",
 q:"Quel verbe signifie 'rendre plus faible' ?",
 opts:["affaiblir","appauvrir","abuser","abolir"],
 ans:"affaiblir",
 hint:"This verb is built from the adjective meaning 'weak' with the a- prefix."},

{type:"teach", trg:"abolir", src:"to abolish", pos:"verb", gender:null,
 note:"Regular -ir verb. To completely eliminate.\nFormal and legal register.",
 example:"A: La France a aboli la peine de mort en 1981.\nB: C'était une décision historique.",
 exampleSrc:"A: France abolished the death penalty in 1981.\nB: It was a historic decision.",
 funFact:"Badinter's speech abolishing the death penalty is one of France's most famous orations."},

{type:"teach", trg:"l'abolition", src:"abolition", pos:"noun", gender:"f",
 note:"Feminine noun. The act of abolishing.\nUsed in legal and historical contexts.",
 example:"A: L'abolition de l'esclavage a eu lieu en 1848.\nB: Victor Schoelcher en a été le champion.",
 exampleSrc:"A: The abolition of slavery took place in 1848.\nB: Victor Schoelcher was its champion.",
 funFact:"France abolished slavery twice: first in 1794, restored by Napoleon, then permanently in 1848."},

{type:"teach", trg:"l'abîme", src:"abyss, chasm", pos:"noun", gender:"m",
 note:"Masculine noun. A bottomless depth.\nFigurative: extreme difference or despair.",
 example:"A: Il y a un abîme entre ses promesses et ses actions.\nB: Tu as raison, il ne fait jamais ce qu'il dit.",
 exampleSrc:"A: There's an abyss between his promises and his actions.\nB: You're right, he never does what he says.",
 funFact:"From Greek abyssos (bottomless). The circumflex on the i marks a lost 's' from Old French."},

{type:"fb",
 s:"La France a {1} la peine de mort en 1981.",
 a:["aboli"],
 opts:["aboli","abusé","affaibli","appauvri"],
 hint:"This verb means to completely eliminate a law or practice. Past participle form here.",
 sSrc:"France {1} the death penalty in 1981."},

{type:"teach", trg:"anéantir", src:"to annihilate, to devastate", pos:"verb", gender:null,
 note:"Regular -ir verb. From néant (nothingness).\nPhysical destruction or emotional devastation.",
 example:"A: La nouvelle l'a complètement anéanti.\nB: Il a besoin de temps pour se remettre.",
 exampleSrc:"A: The news completely devastated him.\nB: He needs time to recover.",
 funFact:"Built from néant (nothingness). To anéantir is literally 'to reduce to nothing.'"},

{type:"teach", trg:"accabler", src:"to overwhelm, to burden", pos:"verb", gender:null,
 note:"Regular -er verb. To weigh down physically or emotionally.\nOften passive: être accablé de.",
 example:"A: Elle est accablée de travail en ce moment.\nB: Elle devrait demander de l'aide.",
 exampleSrc:"A: She's overwhelmed with work right now.\nB: She should ask for help.",
 funFact:"Originally meant 'to crush with a beam' (from cable/câble). The metaphor stuck."},

{type:"teach", trg:"asservir", src:"to enslave, to subjugate", pos:"verb", gender:null,
 note:"Regular -ir verb. From serf (serf).\nFormal. Used in politics and history.",
 example:"A: Ce dictateur veut asservir tout un peuple.\nB: La résistance s'organise déjà.",
 exampleSrc:"A: This dictator wants to enslave an entire people.\nB: The resistance is already organizing.",
 funFact:"From serf (serf/slave). The noun asservissement means enslavement or subjugation."},

{type:"mc",
 q:"Quel mot signifie un gouffre sans fond, au sens propre ou figuré ?",
 opts:["un abîme","un abus","une abolition","un abandon"],
 ans:"un abîme",
 hint:"This masculine noun comes from the Greek word for 'bottomless.' Note the circumflex accent."},

{type:"teach", trg:"affranchir", src:"to free, to liberate", pos:"verb", gender:null,
 note:"Regular -ir verb. From franc (free).\nAlso means to stamp a letter (affranchir une lettre).",
 example:"A: Il a réussi à s'affranchir de ses peurs.\nB: C'est admirable, cela demande du courage.",
 exampleSrc:"A: He managed to free himself from his fears.\nB: That's admirable, it takes courage.",
 funFact:"Double meaning: to liberate (a person) and to stamp (a letter). Both involve 'setting free.'"},

{type:"teach", trg:"l'affront", src:"insult, affront", pos:"noun", gender:"m",
 note:"Masculine noun. A deliberate public insult.\nStronger than insulte in formality.",
 example:"A: Il a considéré ce refus comme un affront.\nB: Ce n'était pourtant pas intentionnel.",
 exampleSrc:"A: He considered this refusal an affront.\nB: It wasn't intentional though.",
 funFact:"From Old French 'affronter' (to face). An affront is something thrown in your face."},

{type:"teach", trg:"l'abstention", src:"abstention", pos:"noun", gender:"f",
 note:"Feminine noun. Choosing not to vote or act.\nKey term in French politics.",
 example:"A: Le taux d'abstention était de 40% aux élections.\nB: C'est inquiétant pour la démocratie.",
 exampleSrc:"A: The abstention rate was 40% in the elections.\nB: That's worrying for democracy.",
 funFact:"France obsesses over abstention rates. Every election night, it's the first number announced."},

{type:"teach", trg:"s'abstenir", src:"to abstain, to refrain", pos:"verb", gender:null,
 note:"Irregular verb (like tenir). Reflexive.\nS'abstenir de + infinitive.",
 example:"A: Je m'abstiens de commenter cette décision.\nB: C'est probablement plus sage.",
 exampleSrc:"A: I'm refraining from commenting on this decision.\nB: That's probably wiser.",
 funFact:"The famous voting instruction 'Les abstentionnistes sont priés de...' is a French election cliché."},

{type:"fb",
 s:"La nouvelle l'a complètement {1}.",
 a:["anéanti"],
 opts:["anéanti","accablé","affranchi","asservi"],
 hint:"This verb means to reduce to nothing, built from the word néant (nothingness).",
 sSrc:"The news completely {1} him."},

{type:"teach", trg:"acharné", src:"fierce, relentless", pos:"adj", gender:null,
 note:"Adjective. Acharné (m), acharnée (f).\nFrom acharner (to bait with flesh).",
 example:"A: C'est un travailleur acharné.\nB: Oui, il ne s'arrête jamais avant d'avoir fini.",
 exampleSrc:"A: He's a relentless worker.\nB: Yes, he never stops before he's finished.",
 funFact:"Originally from 'chair' (flesh). To be acharné was to be hungry as a dog given raw meat."},

{type:"teach", trg:"s'acharner", src:"to persist fiercely, to be relentless", pos:"verb", gender:null,
 note:"Reflexive -er verb. S'acharner sur = to attack relentlessly.\nS'acharner à = to persist stubbornly.",
 example:"A: Il s'acharne à finir ce projet malgré les obstacles.\nB: Son acharnement est admirable.",
 exampleSrc:"A: He's persisting fiercely to finish this project despite obstacles.\nB: His determination is admirable.",
 funFact:"S'acharner sur quelqu'un means to go after someone relentlessly. S'acharner à means to persist."},

{type:"match", pairs:[
  {trg:"abolir", src:"to abolish"},
  {trg:"anéantir", src:"to annihilate"},
  {trg:"affranchir", src:"to free"},
  {trg:"accabler", src:"to overwhelm"},
  {trg:"asservir", src:"to enslave"}
]},

{type:"mc",
 q:"Comment décrit-on un travailleur qui ne s'arrête jamais ?",
 opts:["acharné","abandonné","affaibli","accablé"],
 ans:"acharné",
 hint:"This adjective comes from a word meaning 'flesh' and suggests dog-like tenacity."},

{type:"fb",
 s:"Le taux d'{1} était très élevé aux dernières élections.",
 a:["abstention"],
 opts:["abstention","abolition","abus","affront"],
 hint:"This feminine noun describes the act of not voting in an election.",
 sSrc:"The {1} rate was very high in the last elections."}

]};
export default LESSON_2;
