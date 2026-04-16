// Batch 8 — Unit 33 extra lesson. Philosophy: Ethics & Moral Reasoning
const BATCH8_L1 = {id:"itv2_u33l_b8_1", title:"Etica e morale", icon:"🤔", xp:15, board:true, steps:[
{type:"intro", title:"Etica e morale",
 desc:"Learn vocabulary for ethical reasoning, moral philosophy, and value-based discussions in Italian.",
 goals:["Discuss ethical concepts","Use moral philosophy vocabulary","Build arguments about values"]},

{type:"teach", trg:"l'etica", src:"the ethics", pos:"noun", gender:"f",
 note:"Feminine noun. 'Etico' = ethical.\n'Codice etico' = code of ethics.",
 example:"A: L'etica professionale e fondamentale.\nB: Senza etica, non c'e fiducia.",
 exampleSrc:"A: Professional ethics are fundamental.\nB: Without ethics, there is no trust.",
 funFact:"Italy's ethical tradition runs from Roman Stoicism through Catholic moral theology to modern bioethics. The Vatican's influence makes ethical debates in Italy uniquely complex."},

{type:"teach", trg:"la coscienza", src:"the conscience / consciousness", pos:"noun", gender:"f",
 note:"Feminine noun. Double meaning: moral conscience AND awareness.\n'Obiezione di coscienza' = conscientious objection.",
 example:"A: La mia coscienza non me lo permette.\nB: Allora segui il tuo istinto.",
 exampleSrc:"A: My conscience will not allow it.\nB: Then follow your instinct.",
 funFact:"'Obiezione di coscienza' is recognized in Italian law for military service (since 1972) and for doctors regarding abortion. It sparks intense debate about rights and duties."},

{type:"teach", trg:"la virtu", src:"the virtue", pos:"noun", gender:"f",
 note:"Feminine noun. Invariable. 'Virtuoso' = virtuous.\n'Fare di necessita virtu' = to make a virtue of necessity.",
 example:"A: La pazienza e una grande virtu.\nB: Una virtu che non tutti hanno.",
 exampleSrc:"A: Patience is a great virtue.\nB: A virtue that not everyone has.",
 funFact:"Machiavelli redefined 'virtu' in 'Il Principe.' For him, it was not moral goodness but political skill and boldness. This redefinition shocked Europe and changed political philosophy forever."},

{type:"teach", trg:"il bene comune", src:"the common good", pos:"noun", gender:"m",
 note:"Masculine compound. 'Agire per il bene comune' = to act for the common good.",
 example:"A: Le leggi devono servire il bene comune.\nB: Non l'interesse di pochi.",
 exampleSrc:"A: Laws must serve the common good.\nB: Not the interest of the few.",
 funFact:"Italy's Constitution explicitly mentions 'il bene comune.' Article 3 states that the Republic must remove obstacles that limit equality. The common good is constitutional law."},

{type:"teach", trg:"la giustizia", src:"the justice", pos:"noun", gender:"f",
 note:"Feminine noun. 'Giusto' = just/fair.\n'Giustizia sociale' = social justice.",
 example:"A: La giustizia deve essere uguale per tutti.\nB: E un ideale per cui lottare.",
 exampleSrc:"A: Justice must be equal for everyone.\nB: It is an ideal worth fighting for.",
 funFact:"Dante placed the pursuit of justice at the center of the 'Divina Commedia.' Hell's deepest circle is reserved for traitors, those who betrayed trust and justice."},

{type:"teach", trg:"il principio", src:"the principle", pos:"noun", gender:"m",
 note:"Masculine noun. 'Per principio' = on principle.\n'Principi fondamentali' = fundamental principles.",
 example:"A: E una questione di principio, non di soldi.\nB: Ammiro la tua coerenza.",
 exampleSrc:"A: It is a matter of principle, not money.\nB: I admire your consistency.",
 funFact:"'Uomo di principi' (man of principles) is a high compliment in Italian. It means someone who stands firm on their values regardless of pressure."},

{type:"teach", trg:"la dignita", src:"the dignity", pos:"noun", gender:"f",
 note:"Feminine noun. Invariable. 'Dignita umana' = human dignity.\nArticle 3 of the Italian Constitution.",
 example:"A: Ogni persona ha diritto alla dignita.\nB: E il fondamento di ogni societa civile.",
 exampleSrc:"A: Every person has the right to dignity.\nB: It is the foundation of every civil society.",
 funFact:"'Dignita' appears in the very first articles of the Italian Constitution. The post-war founders, remembering fascism, placed human dignity above all other values."},

{type:"teach", trg:"la responsabilita", src:"the responsibility", pos:"noun", gender:"f",
 note:"Feminine noun. Invariable. 'Responsabile' = responsible.\n'Assumersi la responsabilita' = to take responsibility.",
 example:"A: Bisogna assumersi la responsabilita delle proprie azioni.\nB: E il segno della maturita.",
 exampleSrc:"A: One must take responsibility for one's actions.\nB: It is the sign of maturity.",
 funFact:"Italian law distinguishes 'responsabilita civile' (civil liability) from 'responsabilita penale' (criminal responsibility). Both are strictly personal: you cannot inherit criminal guilt."},

{type:"teach", trg:"il dovere", src:"the duty / obligation", pos:"noun", gender:"m",
 note:"Masculine noun. Also verb: 'dovere' = must/to have to.\n'Senso del dovere' = sense of duty.",
 example:"A: Il dovere di ogni cittadino e rispettare la legge.\nB: E contribuire alla comunita.",
 exampleSrc:"A: The duty of every citizen is to respect the law.\nB: And to contribute to the community.",
 funFact:"Italian Carabinieri have a motto: 'Nei secoli fedele' (faithful through the centuries). Their sense of duty is legendary, combining military discipline with civic service."},

{type:"mc",
 q:"How did Machiavelli redefine 'virtu'?",
 opts:["From moral goodness to political skill and boldness","From courage to kindness","From wisdom to strength","From patience to action"],
 ans:"From moral goodness to political skill and boldness",
 hint:"In 'Il Principe,' virtue is not about being good but about being effective. This redefinition shocked Europe."},

{type:"match", pairs:[
  {trg:"la coscienza", src:"the conscience"},
  {trg:"la giustizia", src:"the justice"},
  {trg:"la dignita", src:"the dignity"},
  {trg:"il dovere", src:"the duty"}
]},

{type:"fb",
 s:"Le leggi devono servire il {1}, non l'interesse di pochi.",
 a:["bene comune"],
 opts:["bene comune","principio","dovere","virtu"],
 hint:"This concept refers to the welfare of the entire community. Laws should benefit everyone, not just some.",
 sSrc:"Laws must serve the {1}, not the interest of the few."},

{type:"mc",
 q:"What is 'obiezione di coscienza' in Italian law?",
 opts:["Conscientious objection (refusing on moral grounds)","A legal complaint","A philosophical theory","A court procedure"],
 ans:"Conscientious objection (refusing on moral grounds)",
 hint:"This legal right allows individuals to refuse certain duties that conflict with their m... beliefs."},

{type:"fb",
 s:"Bisogna assumersi la {1} delle proprie azioni.",
 a:["responsabilita"],
 opts:["responsabilita","coscienza","dignita","giustizia"],
 hint:"Taking ownership of what you do. This quality is considered the mark of maturity.",
 sSrc:"One must take {1} for one's actions."},

{type:"mc",
 q:"Where in Italian law does 'dignita' appear?",
 opts:["In the first articles of the Constitution","Only in criminal law","In tax regulations","Nowhere"],
 ans:"In the first articles of the Constitution",
 hint:"The post-war founders placed human dignity at the very foundation of the Republic, remembering the horrors of fascism."}
]};
export default BATCH8_L1;
