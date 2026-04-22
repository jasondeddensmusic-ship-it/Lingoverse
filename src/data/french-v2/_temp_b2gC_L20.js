// L20 - Communication & Rhetoric
const LESSON_20 = {id:"frv2_b2gC_l20", title:"Communication et rhétorique", icon:"\u{1F399}", xp:15, board:true, steps:[

{type:"intro", title:"Communication et rhétorique",
 desc:"Master the vocabulary of persuasion, argumentation, and effective communication.",
 goals:["Learn 8 words for communication and rhetoric","Discuss persuasion techniques and debate","Strengthen your argumentative vocabulary"]},

{type:"teach", trg:"c'est-à-dire que", src:"that is to say, meaning that", pos:"conj", gender:null,
 note:"Conjunction. Introduces a clarification or reformulation.\nVery common in spoken and written French.",
 example:"A: Il est bilingue, c'est-à-dire qu'il parle deux langues couramment.\nB: Le français et l'anglais, je suppose ?",
 exampleSrc:"A: He is bilingual, that is to say he speaks two languages fluently.\nB: French and English, I suppose?",
 funFact:"Abbreviated as c.-à-d. in writing. One of the most useful connecting expressions in French."},

{type:"teach", trg:"dans l'esprit de", src:"in the spirit of", pos:"prep", gender:null,
 note:"Prepositional phrase. Following the intention or philosophy of something.\nUsed in formal contexts.",
 example:"A: Dans l'esprit de la loi, cette mesure protège les consommateurs.\nB: Mais en pratique, elle est difficile à appliquer.",
 exampleSrc:"A: In the spirit of the law, this measure protects consumers.\nB: But in practice, it is difficult to apply.",
 funFact:"French law distinguishes la lettre de la loi (the letter) from l'esprit de la loi (the spirit)."},

{type:"teach", trg:"dans l'espoir de", src:"in the hope of", pos:"prep", gender:null,
 note:"Prepositional phrase. With the expectation or wish that something will happen.\nFollowed by infinitive.",
 example:"A: Il a postulé dans l'espoir de décrocher un entretien.\nB: Croisons les doigts pour lui.",
 exampleSrc:"A: He applied in the hope of landing an interview.\nB: Let's cross our fingers for him.",
 funFact:"French uses many 'dans l' + noun + 'de' expressions: dans l'espoir de, dans l'intention de, dans le but de."},

{type:"teach", trg:"en marge de", src:"on the sidelines of, alongside", pos:"prep", gender:null,
 note:"Prepositional phrase. Parallel to but separate from the main event.\nAlso: marginalized.",
 example:"A: En marge du sommet, les deux présidents ont eu une réunion privée.\nB: Les discussions informelles sont souvent plus productives.",
 exampleSrc:"A: On the sidelines of the summit, the two presidents had a private meeting.\nB: Informal discussions are often more productive.",
 funFact:"Être en marge de la société means to be marginalized. La marge means the margin of a page."},

{type:"teach", trg:"par suite de", src:"as a result of, owing to", pos:"prep", gender:null,
 note:"Prepositional phrase. Because of, as a consequence of.\nFormal register, common in writing.",
 example:"A: Par suite de l'inondation, l'école est fermée aujourd'hui.\nB: Les élèves reprendront les cours lundi.",
 exampleSrc:"A: As a result of the flood, the school is closed today.\nB: Students will resume classes on Monday.",
 funFact:"More formal than 'à cause de.' Used in official announcements, legal texts, and news reports."},

{type:"teach", trg:"l'idiomatisme", src:"idiom, idiomatic expression", pos:"noun", gender:"m",
 note:"Masculine noun. An expression whose meaning cannot be deduced from its words.\nKey concept in linguistics.",
 example:"A: 'Il pleut des cordes' est un idiomatisme français.\nB: On ne peut pas le traduire mot à mot.",
 exampleSrc:"A: 'Il pleut des cordes' is a French idiom.\nB: You cannot translate it word for word.",
 funFact:"French is rich in idiomatismes. Many involve body parts: avoir le bras long, mettre les pieds dans le plat."},

{type:"teach", trg:"l'incrustation", src:"insertion, embedding", pos:"noun", gender:"f",
 note:"Feminine noun. In media: a graphic overlay or insert.\nTV news uses incrustations constantly.",
 example:"A: L'incrustation du graphique à l'écran aide à comprendre les chiffres.\nB: Les téléspectateurs retiennent mieux les informations visuelles.",
 exampleSrc:"A: The graphic overlay on screen helps understand the numbers.\nB: Viewers retain visual information better.",
 funFact:"In TV production, incrustation also means green screen compositing. A technical term used daily."},

{type:"teach", trg:"la matérialisation", src:"realization, implementation", pos:"noun", gender:"f",
 note:"Feminine noun. Turning an abstract idea into reality.\nFrom matériel (material, concrete).",
 example:"A: La matérialisation de cette vision prendra plusieurs années.\nB: Mais chaque étape nous rapproche du but.",
 exampleSrc:"A: The realization of this vision will take several years.\nB: But each step brings us closer to the goal.",
 funFact:"Matérialiser means to make real. French distinguishes it from réaliser (to achieve or to understand)."},

{type:"mc",
 q:"Que signifie 'c'est-à-dire' ?",
 opts:["Autrement dit, en d'autres termes","Par contre","Cependant","Néanmoins"],
 ans:"Autrement dit, en d'autres termes",
 hint:"This expression introduces a clarification. It reformulates what was just said."},

{type:"fb",
 s:"{1} la loi, cette mesure devrait protéger les plus faibles.",
 a:["Dans l'esprit de"], opts:["Dans l'esprit de","Par suite de","En marge de","Dans l'espoir de"],
 hint:"Following the philosophy or intention behind something. The spirit, not the letter.",
 sSrc:"{1} the law, this measure should protect the most vulnerable."},

{type:"mc",
 q:"Que se passe-t-il 'en marge' d'un sommet politique ?",
 opts:["Les votes","Des réunions informelles parallèles","L'événement principal","Les discours officiels"],
 ans:"Des réunions informelles parallèles",
 hint:"On the sidelines. Separate from the main event, but happening alongside it."},

{type:"match", pairs:[
  {trg:"c'est-à-dire que", src:"that is to say"},
  {trg:"dans l'espoir de", src:"in the hope of"},
  {trg:"en marge de", src:"on the sidelines of"},
  {trg:"par suite de", src:"as a result of"},
  {trg:"l'idiomatisme", src:"idiom"}
]},

{type:"fb",
 s:"Il a postulé {1} obtenir un poste dans cette entreprise.",
 a:["dans l'espoir de"], opts:["dans l'espoir de","par suite de","en marge de","dans l'esprit de"],
 hint:"With the wish or expectation of achieving something. Hope-driven action.",
 sSrc:"He applied {1} getting a position in this company."},

{type:"mc",
 q:"Que signifie 'il pleut des cordes' ?",
 opts:["Il y a un orage de grêle","Le temps est nuageux","Il pleut très fort","Il fait du vent"],
 ans:"Il pleut très fort",
 hint:"A French idiom. You cannot translate it word for word. Cordes means ropes."},

{type:"fb",
 s:"{1} l'accident, la route est fermée à la circulation.",
 a:["Par suite de"], opts:["Par suite de","Dans l'espoir de","En marge de","C'est-à-dire"],
 hint:"As a result of, owing to. Formal, used in official announcements.",
 sSrc:"{1} the accident, the road is closed to traffic."},

{type:"drag_fill",
 s:"L'{1} à l'écran aide les téléspectateurs, {2} les images sont plus parlantes que les mots.",
 blanks:{"1":"incrustation","2":"c'est-à-dire"},
 pool:["incrustation","c'est-à-dire","idiomatisme","matérialisation"],
 hint:"The graphic overlay helps viewers, that is to say images speak louder than words"},

{type:"mc",
 q:"Quel est le registre de 'par suite de' comparé à 'à cause de' ?",
 opts:["Plus familier","Identique","Plus oral","Plus formel et écrit"],
 ans:"Plus formel et écrit",
 hint:"Used in official texts and news. The everyday equivalent is 'à cause de.'"},

{type:"fb",
 s:"La {1} de ce projet nécessitera des investissements importants.",
 a:["matérialisation"], opts:["matérialisation","incrustation","idiomatisme","polémique"],
 hint:"Turning an abstract idea into concrete reality. Making a vision real.",
 sSrc:"The {1} of this project will require significant investments."}

]};
export default LESSON_20;
