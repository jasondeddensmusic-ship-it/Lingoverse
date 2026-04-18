// Batch 7 — Unit 33 extra lesson. La filosofia: Logic & Argumentation
const BATCH7_L1 = {id:"itv2_u33l_b7_1", title:"La logica e l'argomentazione", icon:"\u{1F9E0}", xp:15, board:true, steps:[
{type:"intro", title:"La logica e l'argomentazione",
 desc:"Learn vocabulary for logical reasoning, argumentation, and constructing persuasive discourse.",
 goals:["Build logical arguments in Italian","Identify reasoning fallacies","Use academic discourse markers"]},

{type:"teach", trg:"l'argomentazione", src:"argumentation / reasoning", pos:"noun", gender:"f",
 note:"Feminine noun. 'Argomentare' = to argue/reason.\n'L'argomento' = the argument/topic.",
 example:"A: La tua argomentazione e convincente.\nB: Grazie, ho studiato il tema a fondo.",
 exampleSrc:"A: Your argumentation is convincing.\nB: Thank you, I studied the topic thoroughly.",
 funFact:"'Argomento' means both argument (logical) and topic/subject. 'Cambiare argomento' = to change the subject. Context always clarifies which meaning applies."},

{type:"teach", trg:"la premessa", src:"the premise", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le premesse.\n'Partire da una premessa' = to start from a premise.",
 example:"A: La premessa del ragionamento e corretta.\nB: Allora la conclusione segue logicamente.",
 exampleSrc:"A: The premise of the reasoning is correct.\nB: Then the conclusion follows logically.",
 funFact:"'Premessa' literally means 'placed before.' In Italian academic culture, a good 'premessa' (introduction/premise) is considered essential. 'Fatta questa premessa...' = having established this..."},

{type:"teach", trg:"la conclusione", src:"the conclusion", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le conclusioni.\n'Trarre conclusioni' = to draw conclusions. 'In conclusione' = in conclusion.",
 example:"A: In conclusione, i dati confermano l'ipotesi.\nB: Un risultato significativo.",
 exampleSrc:"A: In conclusion, the data confirms the hypothesis.\nB: A significant result.",
 funFact:"'Non trarre conclusioni affrettate' (do not draw hasty conclusions) is a common Italian warning. 'Saltare alle conclusioni' (to jump to conclusions) is equally frowned upon."},

{type:"teach", trg:"la contraddizione", src:"the contradiction", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le contraddizioni.\n'Contraddire' = to contradict. 'Contraddittorio' = contradictory.",
 example:"A: C'e una contraddizione nel tuo ragionamento.\nB: Dove? Fammi capire.",
 exampleSrc:"A: There is a contradiction in your reasoning.\nB: Where? Let me understand.",
 funFact:"'Il contraddittorio' is also a legal term: the right of both parties to present their case. Italian courts require 'il principio del contraddittorio' (adversarial principle)."},

{type:"teach", trg:"l'ipotesi", src:"the hypothesis", pos:"noun", gender:"f",
 note:"Feminine noun. Invariable plural.\n'Ipotetico' = hypothetical. 'Formulare un'ipotesi' = to formulate a hypothesis.",
 example:"A: L'ipotesi deve essere verificabile.\nB: Altrimenti non e scienza.",
 exampleSrc:"A: The hypothesis must be verifiable.\nB: Otherwise it is not science.",
 funFact:"Galileo's scientific method, developed in Italy, placed 'ipotesi' (hypothesis) and 'esperimento' (experiment) at the center of knowledge. This Italian contribution transformed human thought."},

{type:"teach", trg:"il ragionamento", src:"reasoning / argument", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i ragionamenti.\n'Ragionare' = to reason. 'Ragionevole' = reasonable.",
 example:"A: Il ragionamento e logico.\nB: Le premesse portano alla conclusione.",
 exampleSrc:"A: The reasoning is logical.\nB: The premises lead to the conclusion.",
 funFact:"'Ragionare' comes from 'ragione' (reason). 'Hai ragione' (you are right) literally means 'you have reason.' Italian values 'ragionamento' (careful reasoning) over emotional argument."},

{type:"teach", trg:"la fallacia", src:"the fallacy", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le fallacie.\n'Fallace' = fallacious. A flaw in reasoning.",
 example:"A: Questo e un esempio di fallacia logica.\nB: L'argomento sembra valido ma non lo e.",
 exampleSrc:"A: This is an example of a logical fallacy.\nB: The argument seems valid but it is not.",
 funFact:"Italian rhetoric teaches common 'fallacie': 'ad hominem' (attacking the person), 'straw man' (uomo di paglia), and 'slippery slope' (pendio scivoloso). All use Latin or Italian terms."},

{type:"teach", trg:"confutare", src:"to refute / to disprove", pos:"verb", gender:null,
 note:"Regular -are verb. confuto, confuti, confuta.\n'La confutazione' = the refutation.",
 example:"A: Come puoi confutare questa teoria?\nB: Con dati e prove concrete.",
 exampleSrc:"A: How can you refute this theory?\nB: With data and concrete evidence.",
 funFact:"'Confutare' is the scholarly verb for disproving. In academic Italian, 'confutazione' is a formal rhetorical move: systematically destroying an opposing argument with evidence."},

{type:"teach", trg:"sostenere", src:"to argue / to maintain / to support", pos:"verb", gender:null,
 note:"Irregular verb. sostengo, sostieni, sostiene.\n'Sostenere una tesi' = to argue a thesis.",
 example:"A: Sostengo che l'educazione sia la soluzione.\nB: Sono d'accordo con la tua posizione.",
 exampleSrc:"A: I argue that education is the solution.\nB: I agree with your position.",
 funFact:"'Sostenere' has many meanings: to support (physically or morally), to argue (a thesis), to sustain, and to endure. 'Sostenere un esame' = to take an exam. A word with impressive range."},

{type:"teach", trg:"il paradosso", src:"the paradox", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i paradossi.\n'Paradossale' = paradoxical.",
 example:"A: Questo e un paradosso interessante.\nB: Sembra contraddittorio ma ha senso.",
 exampleSrc:"A: This is an interesting paradox.\nB: It seems contradictory but makes sense.",
 funFact:"Italy contributed famous paradoxes to philosophy: Zeno's paradoxes (via Greek philosophy in Magna Graecia) and Galileo's paradox of infinite sets were both explored on Italian soil."},

{type:"teach", trg:"l'analogia", src:"the analogy", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le analogie.\n'Per analogia' = by analogy. 'Analogo' = analogous.",
 example:"A: Uso un'analogia per spiegare.\nB: Le analogie rendono tutto piu chiaro.",
 exampleSrc:"A: I use an analogy to explain.\nB: Analogies make everything clearer.",
 funFact:"'Ragionare per analogia' (reasoning by analogy) is a fundamental tool in Italian legal tradition. Laws can be applied 'per analogia' when a specific case is not covered by existing rules."},

{type:"teach", trg:"il sillogismo", src:"the syllogism", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i sillogismi.\nA logical argument with two premises and a conclusion.",
 example:"A: 'Tutti gli uomini sono mortali, Socrate e un uomo, quindi Socrate e mortale' e un sillogismo.\nB: L'esempio classico.",
 exampleSrc:"A: 'All men are mortal, Socrates is a man, therefore Socrates is mortal' is a syllogism.\nB: The classic example.",
 funFact:"Aristotle's syllogism was preserved and transmitted through Italian medieval universities. Thomas Aquinas, who taught in Naples and Rome, used syllogistic reasoning to build his theological arguments."},

{type:"teach", trg:"oggettivo", src:"objective", pos:"adj", gender:null,
 note:"Adjective. Oggettivo/a/i/e.\nOpposite: 'soggettivo' = subjective.",
 example:"A: Cerchiamo di essere oggettivi.\nB: Mettiamo da parte le opinioni personali.",
 exampleSrc:"A: Let us try to be objective.\nB: Let us set aside personal opinions.",
 funFact:"The debate between 'oggettivita' (objectivity) and 'soggettivita' (subjectivity) runs through Italian philosophy from Vico to Croce. Italian thinkers contributed greatly to epistemology."},

{type:"mc", q:"Che cos'e un sillogismo?",
 opts:["A logical argument with two premises and a conclusion","A type of poetry","A philosophical school","A debate format"],
 ans:"A logical argument with two premises and a conclusion",
 hint:"The classic form: all A are B, C is A, therefore C is B."},

{type:"fb", s:"C'e una {1} nel tuo ragionamento.", a:["contraddizione"],
 opts:["contraddizione","conclusione","analogia","premessa"],
 hint:"When two parts of an argument cannot both be true. A logical conflict.",
 sSrc:"There is a {1} in your reasoning."},

{type:"match", pairs:[
 {trg:"la premessa", src:"premise"},
 {trg:"la conclusione", src:"conclusion"},
 {trg:"la fallacia", src:"fallacy"},
 {trg:"il paradosso", src:"paradox"}
]},

{type:"mc", q:"Che cosa significa 'confutare'?",
 opts:["To refute / disprove","To confirm","To ignore","To accept"],
 ans:"To refute / disprove",
 hint:"The scholarly verb for systematically destroying an argument with evidence."},

{type:"fb", s:"{1} che l'educazione sia la soluzione.", a:["Sostengo"],
 opts:["Sostengo","Confuto","Contradico","Ignoro"],
 hint:"To argue or maintain a position. To support a thesis.",
 sSrc:"I {1} that education is the solution."},

{type:"mc", q:"In diritto italiano, cosa permette il 'ragionamento per analogia'?",
 opts:["Applying laws to uncovered cases by similarity","Creating new laws","Ignoring existing laws","Contradicting judges"],
 ans:"Applying laws to uncovered cases by similarity",
 hint:"When a specific case is not covered, similar existing rules can be applied."},

{type:"fb", s:"Cerchiamo di essere {1}, senza opinioni personali.", a:["oggettivi"],
 opts:["oggettivi","soggettivi","paradossali","analogici"],
 hint:"Based on facts, not personal feelings. The opposite of subjective.",
 sSrc:"Let us try to be {1}, without personal opinions."},

{type:"match", pairs:[
 {trg:"l'argomentazione", src:"argumentation"},
 {trg:"il ragionamento", src:"reasoning"},
 {trg:"l'analogia", src:"analogy"},
 {trg:"confutare", src:"to refute"}
]}
,{type:"match",pairs:[{trg:"sostenere",src:"to argue / to maintain / to support"},{trg:"oggettivo",src:"objective"}]}]};
export default BATCH7_L1;
