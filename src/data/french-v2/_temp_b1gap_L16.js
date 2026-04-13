// L16 - Transformation & Change
const LESSON_16 = {id:"frv2_b1gap_l16", title:"Changer et se transformer", icon:"\u{1F504}", xp:15, board:true, steps:[

{type:"intro", title:"Changer et se transformer",
 desc:"Learn vocabulary for transformation, adaptation, and how things evolve over time.",
 goals:["Learn 20 words about change and transformation","Describe processes of adaptation","Express degrees and nuances of change"]},

{type:"teach", trg:"s'acclimater", src:"to acclimatize, to adapt", pos:"verb", gender:null,
 note:"Reflexive -er verb. To adapt to new conditions.\nS'acclimater à = to get used to.",
 example:"A: Il faut du temps pour s'acclimater à la chaleur.\nB: Bois beaucoup d'eau en attendant.",
 exampleSrc:"A: It takes time to acclimatize to the heat.\nB: Drink lots of water in the meantime.",
 funFact:"From climat (climate). Originally about plants adapting to new climates. Now used for any adjustment."},

{type:"teach", trg:"s'adapter", src:"to adapt", pos:"verb", gender:null,
 note:"Reflexive -er verb. S'adapter à = to adjust to.\nMore general than s'acclimater.",
 example:"A: Les enfants s'adaptent vite à leur nouvelle école.\nB: Ils se sont déjà fait des amis.",
 exampleSrc:"A: Children adapt quickly to their new school.\nB: They've already made friends.",
 funFact:"Darwin's 'survival of the fittest' is often translated as 'l'adaptation des plus aptes' in French."},

{type:"teach", trg:"l'amaigrir", src:"to make thin, to lose weight", pos:"verb", gender:null,
 note:"Regular -ir verb. From maigre (thin).\nCan be transitive or reflexive (s'amaigrir).",
 example:"A: La maladie l'a beaucoup amaigri.\nB: Il a perdu dix kilos en un mois.",
 exampleSrc:"A: The illness made him very thin.\nB: He lost ten kilos in one month.",
 funFact:"French has many a- prefix + adjective + -ir verbs: amaigrir, affaiblir, adoucir, assoupir."},

{type:"teach", trg:"l'amollir", src:"to soften, to make soft", pos:"verb", gender:null,
 note:"Regular -ir verb. From mou/mol (soft).\nPhysical or figurative softening.",
 example:"A: La chaleur a amolli le beurre.\nB: C'est parfait pour la pâtisserie.",
 exampleSrc:"A: The heat softened the butter.\nB: That's perfect for baking.",
 funFact:"Figuratively, amollir quelqu'un means to make someone weak-willed. A negative connotation."},

{type:"teach", trg:"l'aliéner", src:"to alienate, to give away rights", pos:"verb", gender:null,
 note:"Irregular -er verb (é>è). To estrange or transfer.\nS'aliéner = to alienate (people from you).",
 example:"A: Sa décision a aliéné beaucoup de ses partisans.\nB: Ils se sentent trahis.",
 exampleSrc:"A: His decision alienated many of his supporters.\nB: They feel betrayed.",
 funFact:"Marx used aliénation as a key concept: workers are alienated from their labor. Very influential in France."},

{type:"mc",
 q:"Quel verbe signifie 's'habituer à un nouveau climat ou environnement' ?",
 opts:["s'acclimater","s'amaigrir","s'aliéner","s'amollir"],
 ans:"s'acclimater",
 hint:"This verb comes from the word climat. It was originally used for plants adapting to new environments."},

{type:"teach", trg:"l'assagir", src:"to calm down, to settle down", pos:"verb", gender:null,
 note:"Regular -ir verb. From sage (wise, well-behaved).\nOften reflexive: s'assagir.",
 example:"A: Avec l'âge, il s'est beaucoup assagi.\nB: Il était bien plus turbulent dans sa jeunesse.",
 exampleSrc:"A: With age, he's calmed down a lot.\nB: He was much more turbulent in his youth.",
 funFact:"Parents hope their children will s'assagir. The verb implies becoming wiser, not just quieter."},

{type:"teach", trg:"l'assouvir", src:"to satisfy, to fulfill (a desire)", pos:"verb", gender:null,
 note:"Regular -ir verb. To fully satisfy a craving or desire.\nStronger than satisfaire.",
 example:"A: Rien ne peut assouvir sa soif de connaissances.\nB: Il lit trois livres par semaine.",
 exampleSrc:"A: Nothing can satisfy his thirst for knowledge.\nB: He reads three books a week.",
 funFact:"Assouvir implies complete satisfaction of a deep need. Assouvir sa faim = to fully satiate hunger."},

{type:"teach", trg:"l'advenir", src:"to happen, to come to pass", pos:"verb", gender:null,
 note:"Irregular verb (like venir). Impersonal: il advient que.\nFormal, literary register.",
 example:"A: Advienne que pourra, je ne changerai pas d'avis.\nB: Tu es vraiment déterminé.",
 exampleSrc:"A: Come what may, I won't change my mind.\nB: You're really determined.",
 funFact:"'Advienne que pourra' (come what may) is the most common use. A fatalistic, poetic expression."},

{type:"teach", trg:"l'acrobatique", src:"acrobatic", pos:"adj", gender:null,
 note:"Adjective. Same form for m/f.\nPhysically daring or impressively agile.",
 example:"A: La réception acrobatique du gardien a sauvé le match.\nB: Quel réflexe incroyable !",
 exampleSrc:"A: The goalkeeper's acrobatic save saved the match.\nB: What an incredible reflex!",
 funFact:"Sports commentators love this word. An 'arrêt acrobatique' is a spectacular goalkeeping save."},

{type:"fb",
 s:"Avec l'âge, il s'est beaucoup {1}.",
 a:["assagi"],
 opts:["assagi","amaigri","amolli","aliéné"],
 hint:"This verb means to calm down and become wiser. It comes from the word sage (wise).",
 sSrc:"With age, he has greatly {1}."},

{type:"teach", trg:"l'augurer", src:"to predict, to bode", pos:"verb", gender:null,
 note:"Regular -er verb. To foresee good or bad results.\nCela augure bien = that bodes well.",
 example:"A: Ce début de saison augure bien pour l'avenir.\nB: L'équipe est en pleine forme.",
 exampleSrc:"A: This start to the season bodes well for the future.\nB: The team is in great shape.",
 funFact:"From Latin augur (Roman priest who read omens). Augurer preserves the ancient art of prediction."},

{type:"teach", trg:"l'accélérateur", src:"accelerator, gas pedal", pos:"noun", gender:"m",
 note:"Masculine noun. The pedal that speeds up a car.\nFigurative: catalyst for change.",
 example:"A: N'appuie pas trop sur l'accélérateur.\nB: D'accord, je vais ralentir.",
 exampleSrc:"A: Don't press the accelerator too much.\nB: Okay, I'll slow down.",
 funFact:"Figuratively, 'mettre le pied sur l'accélérateur' means to speed things up in any context."},

{type:"teach", trg:"l'aléger", src:"to alleviate, to ease", pos:"verb", gender:null,
 note:"See alléger (L14). Variant spelling reminder.\nAlléger une charge = to lighten a burden.",
 example:"A: Le gouvernement veut alléger les impôts.\nB: Ce serait une bonne nouvelle pour tous.",
 exampleSrc:"A: The government wants to lower taxes.\nB: That would be good news for everyone.",
 funFact:"Tax reduction is always called allègement fiscal. One of France's most debated political topics."},

{type:"teach", trg:"l'assouplissement", src:"relaxation (of rules), stretching", pos:"noun", gender:"m",
 note:"Masculine noun. From assouplir.\nMaking something more flexible.",
 example:"A: L'assouplissement des horaires plaît aux employés.\nB: Ils peuvent mieux organiser leur journée.",
 exampleSrc:"A: The relaxation of schedules pleases employees.\nB: They can better organize their day.",
 funFact:"Exercices d'assouplissement are stretching exercises. Assouplissement des règles is easing regulations."},

{type:"mc",
 q:"Quel verbe signifie 'satisfaire complètement un désir profond' ?",
 opts:["assouvir","assagir","augurer","acclimater"],
 ans:"assouvir",
 hint:"This verb implies complete satisfaction of a deep craving. Think of fully satiating hunger."},

{type:"teach", trg:"l'aboutissement", src:"outcome, culmination", pos:"noun", gender:"m",
 note:"Masculine noun. From aboutir (to result in).\nThe successful conclusion of a process.",
 example:"A: Ce diplôme est l'aboutissement de cinq ans de travail.\nB: Tu peux être fier de toi.",
 exampleSrc:"A: This diploma is the culmination of five years of work.\nB: You can be proud of yourself.",
 funFact:"Always implies a positive ending. If something fails, it's an échec, not an aboutissement."},

{type:"teach", trg:"s'accrocher", src:"to hold on, to persist", pos:"verb", gender:null,
 note:"Reflexive -er verb. From croche (hook).\nS'accrocher à = to cling to, to keep trying.",
 example:"A: Accroche-toi, les examens sont bientôt finis !\nB: Merci, j'en ai vraiment besoin.",
 exampleSrc:"A: Hang in there, exams are almost over!\nB: Thanks, I really need that.",
 funFact:"'Accroche-toi !' is the French 'Hang in there!' One of the most encouraging phrases in French."},

{type:"teach", trg:"l'achèvement", src:"completion, finishing", pos:"noun", gender:"m",
 note:"Masculine noun. From achever (to complete).\nThe final completion of a work.",
 example:"A: L'achèvement des travaux est prévu pour décembre.\nB: On pourra emménager pour les fêtes.",
 exampleSrc:"A: Completion of the work is planned for December.\nB: We can move in for the holidays.",
 funFact:"Achever has a dark double meaning: to finish (a project) or to finish off (a wounded person)."},

{type:"fb",
 s:"Ce diplôme est l'{1} de cinq ans d'efforts.",
 a:["aboutissement"],
 opts:["aboutissement","achèvement","assouplissement","accélérateur"],
 hint:"This masculine noun means the successful culmination of a long process.",
 sSrc:"This diploma is the {1} of five years of effort."},

{type:"match", pairs:[
  {trg:"s'acclimater", src:"to acclimatize"},
  {trg:"s'assagir", src:"to calm down"},
  {trg:"augurer", src:"to predict"},
  {trg:"s'accrocher", src:"to hold on"},
  {trg:"l'aboutissement", src:"culmination"}
]},

{type:"mc",
 q:"Quel est l'encouragement français équivalent de 'Hang in there!' ?",
 opts:["Accroche-toi !","Assagis-toi !","Acclimate-toi !","Assouvis-toi !"],
 ans:"Accroche-toi !",
 hint:"This reflexive verb literally means to hook onto something. It's the most common French encouragement."}

]};
export default LESSON_16;
