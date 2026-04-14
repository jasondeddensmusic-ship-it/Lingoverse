// French B2 Gap Lesson 19 — Language and Expression
const LESSON_19 = {id:"frv2_b2g5_l19", title:"Langue et expression", icon:"💬", xp:15, board:true, steps:[
  {type:"intro", title:"Langue et expression",
   desc:"Explore vocabulary about language itself, communication styles, and linguistic phenomena at B2 level.",
   goals:["Learn 15 key words about language and expression","Discuss linguistic concepts and communication","Use metalinguistic vocabulary"]},

  {type:"teach", trg:"l'idiomatisme", src:"the idiom / idiomatic expression", pos:"noun", gender:"m",
   note:"A fixed expression whose meaning differs from its literal parts.\n'Il pleut des cordes' = it's raining cats and dogs.",
   example:"A: Les idiomatismes sont difficiles à traduire.\nB: 'Il pleut des cordes' ne se traduit pas littéralement.\nA: Chaque langue a ses propres expressions.\nB: C'est ce qui rend l'apprentissage intéressant.",
   exampleSrc:"A: Idioms are difficult to translate.\nB: 'It's raining ropes' doesn't translate literally.\nA: Each language has its own expressions.\nB: That's what makes learning interesting.",
   funFact:"From Greek 'idioma' (peculiarity). French has thousands of idiomatic expressions."},

  {type:"teach", trg:"le jamais-vu", src:"the jamais vu (never-seen)", pos:"noun", gender:"m",
   note:"The feeling that something familiar seems new.\nOpposite of 'déjà vu'. Psychology term.",
   example:"A: Tu connais le 'jamais vu'?\nB: C'est le contraire du 'déjà vu'?\nA: Exactement. Quelque chose de familier semble nouveau.\nB: Comme quand tu regardes un mot trop longtemps.",
   exampleSrc:"A: Do you know 'jamais vu'?\nB: Is it the opposite of 'déjà vu'?\nA: Exactly. Something familiar seems new.\nB: Like when you stare at a word for too long.",
   funFact:"French gave English both 'déjà vu' and 'jamais vu'. Both are used internationally in psychology."},

  {type:"teach", trg:"le jockey", src:"the jockey", pos:"noun", gender:"m",
   note:"A professional horse rider in races.\nBorrowed from English. Same spelling.",
   example:"A: Le jockey doit être très léger.\nB: C'est pour ne pas ralentir le cheval.\nA: La course est un sport exigeant.\nB: Oui, pour le cavalier autant que pour le cheval.",
   exampleSrc:"A: The jockey must be very lightweight.\nB: It's so as not to slow down the horse.\nA: Racing is a demanding sport.\nB: Yes, for the rider as much as for the horse.",
   funFact:"English borrowed 'jockey' from Scots, then French borrowed it back. Horse racing is called 'le turf' in French."},

  {type:"teach", trg:"la différencié", src:"differentiated", pos:"adj", gender:null,
   note:"Distinct from others, made different.\nFeminine: différenciée. Used in education and marketing.",
   example:"A: L'enseignement différencié s'adapte à chaque élève.\nB: C'est l'idéal mais difficile à mettre en oeuvre.\nA: Les outils numériques peuvent aider.\nB: Oui, chaque élève avance à son rythme.",
   exampleSrc:"A: Differentiated teaching adapts to each student.\nB: It's ideal but hard to implement.\nA: Digital tools can help.\nB: Yes, each student progresses at their own pace.",
   funFact:"From 'différencier' (to differentiate). 'Pédagogie différenciée' is a key concept in French education."},

  {type:"teach", trg:"l'agrandi", src:"enlarged / expanded", pos:"adj", gender:null,
   note:"Made bigger or expanded. Feminine: agrandie.\nUsed for photos, rooms, and businesses.",
   example:"A: La cuisine a été agrandie l'année dernière.\nB: C'est beaucoup plus spacieux maintenant.\nA: Vous avez abattu un mur?\nB: Oui, on a ouvert sur le salon.",
   exampleSrc:"A: The kitchen was enlarged last year.\nB: It's much more spacious now.\nA: Did you knock down a wall?\nB: Yes, we opened it up to the living room.",
   funFact:"Past participle of 'agrandir' (to enlarge). 'Un agrandissement' is an enlargement (photo or building)."},

  {type:"teach", trg:"la cleptomanie", src:"kleptomania", pos:"noun", gender:"f",
   note:"A compulsive urge to steal.\nA recognized psychological disorder.",
   example:"A: La cleptomanie est un trouble psychologique.\nB: Les personnes ne peuvent pas s'en empêcher?\nA: Non, c'est compulsif.\nB: Le traitement existe mais prend du temps.",
   exampleSrc:"A: Kleptomania is a psychological disorder.\nB: People can't help themselves?\nA: No, it's compulsive.\nB: Treatment exists but takes time.",
   funFact:"From Greek 'kleptein' (to steal) + 'mania' (madness). A 'cleptomane' is someone with this condition."},

  {type:"teach", trg:"le diplodocus", src:"the diplodocus", pos:"noun", gender:"m",
   note:"A large herbivorous dinosaur.\nAlso slang for someone old-fashioned or very tall.",
   example:"A: Le diplodocus pouvait mesurer vingt-cinq mètres.\nB: C'est le plus long dinosaure?\nA: L'un des plus longs, oui.\nB: Le Muséum d'histoire naturelle en a un squelette.",
   exampleSrc:"A: The diplodocus could measure twenty-five meters.\nB: Is it the longest dinosaur?\nA: One of the longest, yes.\nB: The Natural History Museum has a skeleton of one.",
   funFact:"From Greek 'diplos' (double) + 'dokos' (beam). Figuratively, calling someone a 'diplodocus' means they are behind the times."},

  {type:"teach", trg:"le delirium", src:"delirium", pos:"noun", gender:"m",
   note:"A disturbed mental state with confusion and hallucinations.\nMedical term. Also figurative: 'delirium tremens'.",
   example:"A: La fièvre peut provoquer un état de delirium.\nB: Le patient ne reconnaît plus son entourage.\nA: C'est temporaire?\nB: Généralement oui, avec le traitement approprié.",
   exampleSrc:"A: Fever can cause a state of delirium.\nB: The patient no longer recognizes those around them.\nA: Is it temporary?\nB: Generally yes, with appropriate treatment.",
   funFact:"From Latin 'delirium' (going off the furrow). 'Delirium tremens' is alcohol withdrawal syndrome."},

  {type:"teach", trg:"le dixième", src:"the tenth", pos:"noun", gender:"m",
   note:"Ordinal: tenth. Also a fraction: one-tenth.\nUsed for rankings, fractions, and arrondissements.",
   example:"A: C'est le dixième arrondissement de Paris.\nB: Près du canal Saint-Martin?\nA: Exactement, un quartier très vivant.\nB: J'adore les cafés du dixième.",
   exampleSrc:"A: It's the tenth arrondissement of Paris.\nB: Near the Canal Saint-Martin?\nA: Exactly, a very lively neighborhood.\nB: I love the cafes of the tenth.",
   funFact:"Paris has 20 arrondissements (districts). 'Le dixième' is famous for the Gare du Nord and Canal Saint-Martin."},

  {type:"mc", q:"Quel phénomène est l'opposé du 'déjà vu'?",
   opts:["Le jamais-vu","L'idiomatisme","Le delirium","La cleptomanie"],
   ans:"Le jamais-vu",
   hint:"When something familiar suddenly seems completely new and unfamiliar"},

  {type:"fb", s:"Les {1} sont difficiles à traduire d'une langue à l'autre.",
   a:["idiomatismes"], opts:["idiomatismes","diplodocus","cleptomanies","delirium"],
   hint:"Fixed expressions whose meaning differs from the literal words",
   sSrc:"{1} are difficult to translate from one language to another."},

  {type:"teach", trg:"l'inflexion", src:"the inflection (voice)", pos:"noun", gender:"f",
   note:"Reinforcement from L09 in linguistic context.\nA change in pitch or tone of voice.",
   example:"A: L'inflexion de sa voix trahissait sa nervosité.\nB: On entendait qu'il n'était pas à l'aise.\nA: La voix ne ment jamais.\nB: C'est vrai, le corps et la voix disent la vérité.",
   exampleSrc:"A: The inflection of his voice betrayed his nervousness.\nB: You could hear that he wasn't comfortable.\nA: The voice never lies.\nB: True, the body and voice tell the truth.",
   funFact:"Reinforcement: in L09 used for policy shifts, here for vocal changes. Both senses are B2-essential."},

  {type:"teach", trg:"ethnologiquement", src:"ethnologically", pos:"adv", gender:null,
   note:"From the perspective of ethnology (study of cultures).\nVery academic register.",
   example:"A: Ethnologiquement, ces deux peuples partagent des origines communes.\nB: Leurs traditions se ressemblent?\nA: Oui, malgré la distance géographique.\nB: La recherche révèle des connexions surprenantes.",
   exampleSrc:"A: Ethnologically, these two peoples share common origins.\nB: Do their traditions resemble each other?\nA: Yes, despite the geographical distance.\nB: Research reveals surprising connections.",
   funFact:"From 'ethnologie' + '-iquement'. One of the longest French adverbs at 19 letters."},

  {type:"mc", q:"Un 'diplodocus' en argot désigne quelqu'un qui est:",
   opts:["Démodé ou dépassé","Très intelligent","Très grand et mince","Très rapide"],
   ans:"Démodé ou dépassé",
   hint:"Like the extinct dinosaur: someone who belongs to another era"},

  {type:"fb", s:"L'enseignement {1} s'adapte au rythme de chaque élève.",
   a:["différencié"], opts:["différencié","agrandi","adopté","frappé"],
   hint:"Adapted and customized for each individual learner",
   sSrc:"{1} teaching adapts to each student's pace."},

  {type:"match", pairs:[
    {trg:"le jamais-vu", src:"never-seen (phenomenon)"},
    {trg:"l'idiomatisme", src:"idiom"},
    {trg:"le dixième", src:"the tenth"},
    {trg:"la cleptomanie", src:"kleptomania"},
    {trg:"ethnologiquement", src:"ethnologically"}
  ]},

  {type:"mc", q:"Que signifie 'le dixième' quand on parle de Paris?",
   opts:["Le dixième arrondissement","Le dixième étage","La dixième rue","Le dixième café"],
   ans:"Le dixième arrondissement",
   hint:"Paris is divided into 20 numbered districts, each with its own character"},

  {type:"fb", s:"L'{1} de sa voix trahissait sa nervosité pendant le discours.",
   a:["inflexion"], opts:["inflexion","interaction","intériorisation","identification"],
   hint:"The subtle change in pitch or tone that reveals emotion",
   sSrc:"The {1} of his voice betrayed his nervousness during the speech."},

  {type:"drag_fill", s:"La {1} a été {2} pour accueillir plus d'invités.",
   blanks:{"1":"salle","2":"agrandie"},
   pool:["salle","agrandie","cuisine","différenciée"],
   hint:"The room was made bigger to accommodate more guests"},

  {type:"mc", q:"La cleptomanie est:",
   opts:["Un trouble psychologique compulsif","Un type de vol professionnel","Une maladie physique","Un style d'écriture"],
   ans:"Un trouble psychologique compulsif",
   hint:"A recognized psychological condition involving an irresistible urge to steal"}
]};
export default LESSON_19;
