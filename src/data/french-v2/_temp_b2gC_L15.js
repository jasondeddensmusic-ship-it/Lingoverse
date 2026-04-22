// L15 - Adverbs & Expressions
const LESSON_15 = {id:"frv2_b2gC_l15", title:"Adverbes et locutions", icon:"\u{1F4AC}", xp:15, board:true, steps:[

{type:"intro", title:"Adverbes et locutions",
 desc:"Master advanced French adverbs and fixed expressions that add nuance and precision to your speech.",
 goals:["Learn 8 advanced adverbs and expressions","Use fixed expressions naturally in context","Add nuance and precision to your French"]},

{type:"teach", trg:"là-dessus", src:"on that matter, thereupon", pos:"adv", gender:null,
 note:"Adverb. About that topic. Physically: on top of that.\nUsed to transition between ideas.",
 example:"A: Qu'est-ce que tu penses là-dessus ?\nB: Je n'ai pas encore d'opinion ferme sur cette question.",
 exampleSrc:"A: What do you think about that?\nB: I don't have a firm opinion on this question yet.",
 funFact:"French has a whole family: là-dessus (on it), là-dessous (under it), là-dedans (in it), là-dehors (outside)."},

{type:"teach", trg:"là-dedans", src:"in there, in that", pos:"adv", gender:null,
 note:"Adverb. Inside that place or topic.\nPhysical and figurative uses.",
 example:"A: N'entre pas là-dedans, c'est dangereux.\nB: Qu'est-ce qu'il y a là-dedans ?",
 exampleSrc:"A: Don't go in there, it is dangerous.\nB: What is in there?",
 funFact:"Là-dedans can be physical (inside a box) or abstract (involved in a situation). Context decides."},

{type:"teach", trg:"dans l'absolu", src:"in absolute terms, ideally", pos:"adv", gender:null,
 note:"Fixed expression. Speaking theoretically, without practical constraints.\nUsed in debates.",
 example:"A: Dans l'absolu, tout le monde devrait avoir accès à l'éducation gratuite.\nB: Oui, mais en pratique, le financement pose problème.",
 exampleSrc:"A: In absolute terms, everyone should have access to free education.\nB: Yes, but in practice, financing is an issue.",
 funFact:"French distinguishes dans l'absolu (theory) from en pratique (practice). A key debate structure."},

{type:"teach", trg:"jusqu'au bout", src:"all the way, to the very end", pos:"adv", gender:null,
 note:"Fixed expression. To the end, completely.\nShows determination or thoroughness.",
 example:"A: Tu vas aller jusqu'au bout de ce projet ?\nB: Oui, j'ai commencé et je finirai, quoi qu'il arrive.",
 exampleSrc:"A: Are you going to see this project through to the end?\nB: Yes, I started and I will finish, no matter what.",
 funFact:"Aller jusqu'au bout is a very French expression of determination. Often used in sports and politics."},

{type:"teach", trg:"pour peu que", src:"provided that, if only", pos:"adv", gender:null,
 note:"Fixed expression. If the slightest condition is met.\nFollowed by subjunctive.",
 example:"A: Pour peu qu'il fasse beau, nous irons pique-niquer.\nB: Croisons les doigts pour le soleil.",
 exampleSrc:"A: Provided that it is nice out, we will go for a picnic.\nB: Let's cross our fingers for sunshine.",
 funFact:"Pour peu que always triggers the subjunctive mood. It means 'if even just a little.' Very elegant."},

{type:"teach", trg:"d'autre part", src:"on the other hand", pos:"adv", gender:null,
 note:"Fixed expression. Introducing a contrasting point.\nOften paired with d'une part (on one hand).",
 example:"A: D'une part, ce projet est ambitieux. D'autre part, il manque de financement.\nB: Il faudra trouver un compromis.",
 exampleSrc:"A: On one hand, this project is ambitious. On the other hand, it lacks funding.\nB: We will need to find a compromise.",
 funFact:"D'une part... d'autre part is the French equivalent of 'on one hand... on the other.' Essential for essays."},

{type:"teach", trg:"bien dit", src:"well said", pos:"adv", gender:null,
 note:"Expression. Complimenting someone's words.\nFamiliar but widely used.",
 example:"A: La liberté commence où l'ignorance finit.\nB: Bien dit ! C'est exactement ce que je pense.",
 exampleSrc:"A: Freedom begins where ignorance ends.\nB: Well said! That is exactly what I think.",
 funFact:"French speakers love acknowledging good rhetoric. Bien dit, bien vu (well observed), and bien joué (well played)."},

{type:"teach", trg:"psychologiquement", src:"psychologically", pos:"adv", gender:null,
 note:"Adverb. In a psychological sense.\nOne of the longest common French adverbs.",
 example:"A: Il est psychologiquement prêt pour cette épreuve.\nB: Des mois de préparation mentale l'ont rendu solide.",
 exampleSrc:"A: He is psychologically ready for this test.\nB: Months of mental preparation have made him strong.",
 funFact:"At 19 letters, psychologiquement is one of the longest everyday French adverbs. The -ment suffix is like English -ly."},

{type:"mc",
 q:"Quelle expression introduit un point de vue théorique ?",
 opts:["dans l'absolu","là-dessus","d'autre part","jusqu'au bout"],
 ans:"dans l'absolu",
 hint:"Speaking without practical constraints. The theoretical ideal, not the reality."},

{type:"fb",
 s:"{1} qu'il fasse beau, nous irons à la plage.",
 a:["Pour peu"], opts:["Pour peu","D'autre part","Bien dit","Là-dessus"],
 hint:"Provided that, if only just a little. This expression triggers the subjunctive.",
 sSrc:"{1} that it is nice out, we will go to the beach."},

{type:"mc",
 q:"Quelle paire d'expressions structure un argument en deux parties ?",
 opts:["Pour peu... pour beaucoup","D'une part... d'autre part","Là-dessus... là-dedans","Bien dit... bien vu"],
 ans:"D'une part... d'autre part",
 hint:"On one hand... on the other hand. Essential for balanced argumentation."},

{type:"match", pairs:[
  {trg:"là-dessus", src:"on that matter"},
  {trg:"là-dedans", src:"in there"},
  {trg:"dans l'absolu", src:"in absolute terms"},
  {trg:"jusqu'au bout", src:"to the very end"},
  {trg:"d'autre part", src:"on the other hand"}
]},

{type:"fb",
 s:"Je vais aller {1} de ce marathon, même si c'est difficile.",
 a:["jusqu'au bout"], opts:["jusqu'au bout","dans l'absolu","là-dessus","d'autre part"],
 hint:"All the way to the end. A French expression of absolute determination.",
 sSrc:"I will go {1} of this marathon, even if it is difficult."},

{type:"mc",
 q:"Quelle famille d'adverbes inclut 'là-dessus,' 'là-dedans,' et 'là-dessous' ?",
 opts:["Les adverbes de manière","Les adverbes de quantité","Les adverbes de lieu composés avec 'là'","Les adverbes de temps"],
 ans:"Les adverbes de lieu composés avec 'là'",
 hint:"All three start with 'là' and add a preposition: on, in, under."},

{type:"fb",
 s:"Il est {1} préparé pour cet examen après des mois d'entraînement.",
 a:["psychologiquement"], opts:["psychologiquement","précipitamment","précédemment","prudemment"],
 hint:"In a psychological sense. Relating to mental readiness. A very long French adverb.",
 sSrc:"He is {1} prepared for this exam after months of training."},

{type:"drag_fill",
 s:"N'entre pas {1}, et ne touche à rien {2}.",
 blanks:{"1":"là-dedans","2":"là-dessus"},
 pool:["là-dedans","là-dessus","là-dessous","là-dehors"],
 hint:"Don't go inside that, and don't touch anything on top of it"},

{type:"mc",
 q:"Quel suffixe transforme un adjectif en adverbe en français ?",
 opts:["-tion","-esse","-eur","-ment"],
 ans:"-ment",
 hint:"Like English -ly. Attach this four-letter suffix to the feminine form of an adjective to create an adverb."}

]};
export default LESSON_15;
