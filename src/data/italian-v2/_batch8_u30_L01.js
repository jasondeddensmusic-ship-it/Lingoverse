// Batch 8 — Unit 30 extra lesson. Advanced Subjunctive: Concessive & Adversative
const BATCH8_L1 = {id:"itv2_u30l_b8_1", title:"Concessione e contrasto", icon:"⚖️", xp:15, board:true, steps:[
{type:"intro", title:"Concessione e contrasto",
 desc:"Learn vocabulary for expressing concession, contrast, and unexpected outcomes in advanced Italian.",
 goals:["Use concessive expressions","Express contrast and paradox","Build sophisticated argumentation"]},

{type:"teach", trg:"la contraddizione", src:"the contradiction", pos:"noun", gender:"f",
 note:"Feminine noun. 'Contraddire' = to contradict.\n'In contraddizione con' = in contradiction with.",
 example:"A: C'e una contraddizione nel tuo argomento.\nB: Dove esattamente?",
 exampleSrc:"A: There is a contradiction in your argument.\nB: Where exactly?",
 funFact:"'Cadere in contraddizione' (to fall into contradiction) is a feared outcome in Italian debate. Logic and rhetoric are valued highly in Italian intellectual tradition."},

{type:"teach", trg:"il paradosso", src:"the paradox", pos:"noun", gender:"m",
 note:"Masculine noun. 'Paradossale' = paradoxical.\nFrom Greek: para (against) + doxa (opinion).",
 example:"A: E un paradosso: piu studio, meno capisco.\nB: A volte serve fare una pausa.",
 exampleSrc:"A: It is a paradox: the more I study, the less I understand.\nB: Sometimes you need to take a break.",
 funFact:"Italy loves paradoxes. Pirandello built his entire theatrical career on paradox: the mask versus the face, appearance versus reality, sanity versus madness."},

{type:"teach", trg:"il dilemma", src:"the dilemma", pos:"noun", gender:"m",
 note:"Masculine noun. 'Trovarsi di fronte a un dilemma' = to face a dilemma.\nFrom Greek: di (two) + lemma (proposition).",
 example:"A: Sono di fronte a un dilemma etico.\nB: Qualunque scelta abbia delle conseguenze.",
 exampleSrc:"A: I am facing an ethical dilemma.\nB: Either choice has consequences.",
 funFact:"The 'dilemma del prigioniero' (prisoner's dilemma) is studied in Italian universities as a fundamental concept in game theory and ethics."},

{type:"teach", trg:"la sfumatura", src:"the nuance / shade", pos:"noun", gender:"f",
 note:"Feminine noun. 'Sfumare' = to fade/shade.\n'Cogliere le sfumature' = to catch the nuances.",
 example:"A: La lingua italiana ha mille sfumature.\nB: Per questo e cosi bella e difficile.",
 exampleSrc:"A: The Italian language has a thousand nuances.\nB: That is why it is so beautiful and difficult.",
 funFact:"'Sfumato' is Leonardo da Vinci's famous painting technique: softly blending colors without lines. The Mona Lisa's smile is the ultimate sfumatura, neither happy nor sad."},

{type:"teach", trg:"la resa", src:"the surrender / rendering", pos:"noun", gender:"f",
 note:"Feminine noun. 'Resa dei conti' = day of reckoning.\n'Arrendersi' = to surrender.",
 example:"A: E arrivata la resa dei conti.\nB: Finalmente sapremo la verita.",
 exampleSrc:"A: The day of reckoning has arrived.\nB: Finally we will know the truth.",
 funFact:"'Resa dei conti' (settling of accounts) is a dramatic Italian expression used in politics, sports, and family disputes alike. It implies a final, decisive confrontation."},

{type:"teach", trg:"la polemica", src:"the controversy / polemic", pos:"noun", gender:"f",
 note:"Feminine noun. 'Polemico' = polemical/controversial.\n'Fare polemica' = to stir controversy.",
 example:"A: La decisione ha scatenato una grande polemica.\nB: Sui social se ne parla tantissimo.",
 exampleSrc:"A: The decision sparked a big controversy.\nB: Everyone is talking about it on social media.",
 funFact:"Italians embrace 'polemica' as a form of public discourse. Heated debates on TV talk shows are entertainment. A good 'polemista' (debater) is admired, not avoided."},

{type:"teach", trg:"la controparte", src:"the counterpart / opposing party", pos:"noun", gender:"f",
 note:"Feminine noun. 'Controparte contrattuale' = contractual counterpart.\nUsed in law and negotiation.",
 example:"A: La controparte ha rifiutato la proposta.\nB: Dobbiamo negoziare di nuovo.",
 exampleSrc:"A: The counterpart rejected the proposal.\nB: We need to negotiate again.",
 funFact:"In Italian legal language, 'controparte' is the opposing side. In business, it is your negotiation partner. Same word, very different emotional charge depending on context."},

{type:"teach", trg:"l'eccezione", src:"the exception", pos:"noun", gender:"f",
 note:"Feminine noun. 'L'eccezione conferma la regola' = the exception proves the rule.\n'Eccezionale' = exceptional.",
 example:"A: Ogni regola ha la sua eccezione.\nB: In italiano, ci sono piu eccezioni che regole!",
 exampleSrc:"A: Every rule has its exception.\nB: In Italian, there are more exceptions than rules!",
 funFact:"Italian grammar is famously full of exceptions. Students joke that learning the exceptions takes longer than learning the rules. 'L'eccezione conferma la regola' is cold comfort."},

{type:"teach", trg:"l'ambiguita", src:"the ambiguity", pos:"noun", gender:"f",
 note:"Feminine noun. Invariable. 'Ambiguo' = ambiguous.\n'Senza ambiguita' = unambiguously.",
 example:"A: Il messaggio e pieno di ambiguita.\nB: Chiediamo un chiarimento.",
 exampleSrc:"A: The message is full of ambiguity.\nB: Let us ask for clarification.",
 funFact:"Italians are comfortable with ambiguity in a way that frustrates more direct cultures. 'Ni' (a blend of no + si) perfectly captures the Italian comfort with not committing."},

{type:"mc",
 q:"What is Leonardo da Vinci's 'sfumato' technique?",
 opts:["Softly blending colors without hard lines","Using only dark colors","Painting with fingers","Creating 3D effects"],
 ans:"Softly blending colors without hard lines",
 hint:"The technique creates gradual transitions between c... and tones. The Mona Lisa's mysterious smile is the most famous example."},

{type:"match", pairs:[
  {trg:"il paradosso", src:"the paradox"},
  {trg:"la sfumatura", src:"the nuance"},
  {trg:"la polemica", src:"the controversy"},
  {trg:"l'eccezione", src:"the exception"}
]},

{type:"fb",
 s:"C'e una {1} nel tuo ragionamento: dici una cosa e fai il contrario.",
 a:["contraddizione"],
 opts:["contraddizione","sfumatura","eccezione","ambiguita"],
 hint:"Your words and actions do not match. This logical flaw means you are saying two incompatible things.",
 sSrc:"There is a {1} in your reasoning: you say one thing and do the opposite."},

{type:"mc",
 q:"What does the Italian word 'Ni' express?",
 opts:["A blend of yes and no (neither committing)","An emphatic yes","A strong no","A question"],
 ans:"A blend of yes and no (neither committing)",
 hint:"Italians combined 'no' and 'si' into a single word that perfectly expresses ambivalence."},

{type:"fb",
 s:"E arrivata la {1}, finalmente sapremo chi ha ragione.",
 a:["resa dei conti"],
 opts:["resa dei conti","controparte","polemica","eccezione"],
 hint:"This dramatic expression means a final confrontation or day of reckoning. Accounts will be settled.",
 sSrc:"The {1} has arrived, finally we will know who is right."},

{type:"mc",
 q:"What does 'l'eccezione conferma la regola' mean?",
 opts:["The exception proves the rule","Exceptions destroy rules","Rules have no exceptions","Exceptions are more important than rules"],
 ans:"The exception proves the rule",
 hint:"This common expression argues that the existence of exceptions actually validates the general rule they deviate from."}
]};
export default BATCH8_L1;
