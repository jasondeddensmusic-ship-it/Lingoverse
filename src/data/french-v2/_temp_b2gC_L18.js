// L18 - Abstract Concepts & Philosophy
const LESSON_18 = {id:"frv2_b2gC_l18", title:"Concepts abstraits", icon:"\u{1F4A1}", xp:15, board:true, steps:[

{type:"intro", title:"Concepts abstraits",
 desc:"Engage with abstract vocabulary for philosophy, logic, and intellectual discourse.",
 goals:["Learn 8 abstract nouns and concepts","Discuss philosophical ideas with precision","Navigate intellectual conversations in French"]},

{type:"teach", trg:"le positivisme", src:"positivism", pos:"noun", gender:"m",
 note:"Masculine noun. A philosophy based on observable facts and science.\nFounded by Auguste Comte.",
 example:"A: Le positivisme rejette la métaphysique au profit de la science.\nB: Comte pensait que seuls les faits observables comptent.",
 exampleSrc:"A: Positivism rejects metaphysics in favor of science.\nB: Comte believed that only observable facts matter.",
 funFact:"Auguste Comte, the father of positivisme, was French. He also coined the word 'sociologie.'"},

{type:"teach", trg:"le jamais-vu", src:"jamais vu, never seen before", pos:"noun", gender:"m",
 note:"Masculine noun. The feeling that something familiar seems entirely new.\nOpposite of déjà vu.",
 example:"A: J'ai visité Paris cent fois, mais aujourd'hui c'est du jamais-vu.\nB: Parfois on redécouvre ce qu'on connaît bien.",
 exampleSrc:"A: I have visited Paris a hundred times, but today it feels like never before.\nB: Sometimes we rediscover what we know well.",
 funFact:"Like déjà vu, jamais-vu is a French term used internationally in psychology. The opposite experience."},

{type:"teach", trg:"le non-sens", src:"nonsense, absurdity", pos:"noun", gender:"m",
 note:"Masculine noun. Something that lacks meaning or logic.\nUsed in philosophy and daily speech.",
 example:"A: Cette règle est un non-sens complet.\nB: Je suis d'accord, elle n'a aucune logique.",
 exampleSrc:"A: This rule is complete nonsense.\nB: I agree, it has no logic at all.",
 funFact:"French borrowed non-sens partly from English 'nonsense.' It is used both seriously and casually."},

{type:"teach", trg:"la néologie", src:"neology, word creation", pos:"noun", gender:"f",
 note:"Feminine noun. The process of creating new words.\nA field where French and English differ greatly.",
 example:"A: La néologie est essentielle pour que la langue reste vivante.\nB: Chaque année, des dizaines de mots nouveaux entrent dans le dictionnaire.",
 exampleSrc:"A: Neology is essential for keeping a language alive.\nB: Every year, dozens of new words enter the dictionary.",
 funFact:"The Académie Française actively creates French alternatives to English tech terms. Courriel for email, for example."},

{type:"teach", trg:"la préconisation", src:"advocacy, recommendation", pos:"noun", gender:"f",
 note:"Feminine noun. A formal recommendation from an expert body.\nStronger than simple advice.",
 example:"A: Les préconisations du comité sont claires.\nB: Il faut les appliquer sans délai.",
 exampleSrc:"A: The committee's recommendations are clear.\nB: They must be applied without delay.",
 funFact:"In French government reports, préconisations carry more weight than suggestions but less than directives."},

{type:"teach", trg:"le contrario", src:"contrary (in 'a contrario')", pos:"noun", gender:"m",
 note:"Masculine noun. Used in the expression 'a contrario.'\nA logical term meaning 'by the opposite argument.'",
 example:"A: A contrario, si nous n'agissons pas, la situation s'aggravera.\nB: C'est un argument logique imparable.",
 exampleSrc:"A: On the contrary, if we do not act, the situation will worsen.\nB: That is an irrefutable logical argument.",
 funFact:"A contrario is Latin used in French law and philosophy. It means reasoning from the opposite case."},

{type:"teach", trg:"l'anonymat", src:"anonymity", pos:"noun", gender:"m",
 note:"Masculine noun. The state of being unknown or unnamed.\nFrom anonyme (anonymous).",
 example:"A: L'anonymat sur Internet peut encourager les comportements toxiques.\nB: Mais il protège aussi la liberté d'expression.",
 exampleSrc:"A: Anonymity on the Internet can encourage toxic behavior.\nB: But it also protects freedom of expression.",
 funFact:"French law protects l'anonymat des donneurs (donor anonymity) in blood and organ donation."},

{type:"teach", trg:"la précipitation", src:"haste, rashness", pos:"noun", gender:"f",
 note:"Feminine noun. Acting too quickly without thinking.\nOpposite of pondération (moderation).",
 example:"A: Agir dans la précipitation mène souvent à l'erreur.\nB: Il vaut mieux réfléchir avant de décider.",
 exampleSrc:"A: Acting in haste often leads to mistakes.\nB: It is better to think before deciding.",
 funFact:"French philosophers often contrast précipitation (rashness) with prudence. Descartes warned against it."},

{type:"mc",
 q:"Quel philosophe français a fondé le positivisme ?",
 opts:["Auguste Comte","Jean-Paul Sartre","Albert Camus","René Descartes"],
 ans:"Auguste Comte",
 hint:"He also coined the word 'sociologie.' His philosophy is based on observable facts."},

{type:"fb",
 s:"Le {1} est l'opposé du déjà vu: quelque chose de familier semble nouveau.",
 a:["jamais-vu"], opts:["jamais-vu","non-sens","positivisme","contrario"],
 hint:"Never seen. The strange feeling that something familiar feels entirely unfamiliar.",
 sSrc:"{1} is the opposite of déjà vu: something familiar seems new."},

{type:"mc",
 q:"Que fait l'Académie Française en matière de néologie ?",
 opts:["Elle crée des mots français pour remplacer les anglicismes","Elle interdit tous les nouveaux mots","Elle emprunte des mots à l'anglais","Elle simplifie l'orthographe"],
 ans:"Elle crée des mots français pour remplacer les anglicismes",
 hint:"This institution actively protects French by inventing alternatives to English terms."},

{type:"match", pairs:[
  {trg:"le positivisme", src:"positivism"},
  {trg:"le jamais-vu", src:"never seen before"},
  {trg:"le non-sens", src:"nonsense"},
  {trg:"l'anonymat", src:"anonymity"},
  {trg:"la néologie", src:"word creation"}
]},

{type:"fb",
 s:"L'{1} sur Internet peut protéger la liberté d'expression.",
 a:["anonymat"], opts:["anonymat","non-sens","positivisme","contrario"],
 hint:"The state of being unnamed or unknown. A double-edged sword online.",
 sSrc:"{1} on the Internet can protect freedom of expression."},

{type:"mc",
 q:"Que signifie 'a contrario' en logique ?",
 opts:["Raisonner par l'argument opposé","Être d'accord avec tout le monde","Refuser toute logique","Accepter sans preuve"],
 ans:"Raisonner par l'argument opposé",
 hint:"A Latin term used in French law and philosophy. Reasoning from the opposite case."},

{type:"fb",
 s:"Agir dans la {1} mène souvent à des erreurs regrettables.",
 a:["précipitation"], opts:["précipitation","néologie","anonymat","positivisme"],
 hint:"Rashness, haste. Acting too quickly without proper thought.",
 sSrc:"Acting in {1} often leads to regrettable mistakes."},

{type:"drag_fill",
 s:"Le {1} est une philosophie basée sur les faits, contrairement au {2} métaphysique.",
 blanks:{"1":"positivisme","2":"non-sens"},
 pool:["positivisme","non-sens","anonymat","jamais-vu"],
 hint:"A fact-based philosophy versus meaningless metaphysical speculation"},

{type:"mc",
 q:"Cette règle n'a aucune logique. C'est un _____ complet.",
 opts:["non-sens","positivisme","anonymat","contrario"],
 ans:"non-sens",
 hint:"A loanword from English for something logically incoherent or absurd, used both formally and casually in French."}

]};
export default LESSON_18;
