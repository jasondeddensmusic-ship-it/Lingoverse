// L03 - Psychology & Behavior
const LESSON_3 = {id:"frv2_b2gC_l3", title:"Psychologie et comportement", icon:"\u{1F9E0}", xp:15, board:true, steps:[

{type:"intro", title:"Psychologie et comportement",
 desc:"Explore psychological concepts, behavioral patterns, and the vocabulary of the mind.",
 goals:["Learn 8 words related to psychology and behavior","Discuss mental processes and personality","Express observations about human nature"]},

{type:"teach", trg:"l'agressivité", src:"aggressiveness", pos:"noun", gender:"f",
 note:"Feminine noun. Hostile or combative behavior.\nCan be physical or verbal.",
 example:"A: L'agressivité au volant est un vrai problème.\nB: Oui, beaucoup de conducteurs perdent patience dans les embouteillages.",
 exampleSrc:"A: Road rage is a real problem.\nB: Yes, many drivers lose patience in traffic jams.",
 funFact:"French distinguishes agressivité (the trait) from agression (the act). A subtle but important difference."},

{type:"teach", trg:"la perspicacité", src:"insight, perceptiveness", pos:"noun", gender:"f",
 note:"Feminine noun. The ability to see clearly and understand deeply.\nA compliment for sharp thinkers.",
 example:"A: Ta perspicacité m'impressionne toujours.\nB: Merci, j'essaie d'observer attentivement avant de juger.",
 exampleSrc:"A: Your insight always impresses me.\nB: Thanks, I try to observe carefully before judging.",
 funFact:"From Latin perspicax, meaning sharp-sighted. French kept the full Latin form."},

{type:"teach", trg:"l'idéalisation", src:"idealization", pos:"noun", gender:"f",
 note:"Feminine noun. Seeing something as perfect when it is not.\nCommon in psychology discussions.",
 example:"A: Il fait une idéalisation de son enfance.\nB: C'est normal, on embellit souvent ses souvenirs.",
 exampleSrc:"A: He idealizes his childhood.\nB: That is normal, we often embellish our memories.",
 funFact:"Freud discussed idéalisation as a defense mechanism. The concept entered everyday French through pop psychology."},

{type:"teach", trg:"l'intériorisation", src:"internalization", pos:"noun", gender:"f",
 note:"Feminine noun. Absorbing external ideas into your own thinking.\nOpposite: extériorisation.",
 example:"A: L'intériorisation des normes sociales commence dès l'enfance.\nB: Les enfants apprennent les règles en observant les adultes.",
 exampleSrc:"A: The internalization of social norms begins in childhood.\nB: Children learn rules by observing adults.",
 funFact:"Sociologists like Bourdieu used intériorisation to explain how society shapes individuals unconsciously."},

{type:"teach", trg:"la pédagogie", src:"pedagogy, teaching method", pos:"noun", gender:"f",
 note:"Feminine noun. The art and science of teaching.\nWidely discussed in French education debates.",
 example:"A: Quelle pédagogie utilise cette école ?\nB: La pédagogie Montessori, basée sur l'autonomie de l'enfant.",
 exampleSrc:"A: What teaching method does this school use?\nB: Montessori pedagogy, based on the child's autonomy.",
 funFact:"From Greek paidagogos, literally a slave who walked children to school. Now it means the science of education."},

{type:"teach", trg:"la pâleur", src:"paleness, pallor", pos:"noun", gender:"f",
 note:"Feminine noun. The state of being pale.\nOften a sign of shock, fear, or illness.",
 example:"A: Ta pâleur m'inquiète. Tu te sens bien ?\nB: J'ai eu un choc, mais ça va passer.",
 exampleSrc:"A: Your paleness worries me. Are you feeling well?\nB: I had a shock, but it will pass.",
 funFact:"French literature uses pâleur as a dramatic marker. Pale heroines filled 19th-century novels."},

{type:"teach", trg:"la grossièreté", src:"rudeness, coarseness", pos:"noun", gender:"f",
 note:"Feminine noun. Rude or vulgar behavior.\nFrom grossier (coarse, rude).",
 example:"A: Je ne supporte pas la grossièreté.\nB: Moi non plus. La politesse ne coûte rien.",
 exampleSrc:"A: I cannot stand rudeness.\nB: Neither can I. Politeness costs nothing.",
 funFact:"French culture places high value on politesse. Grossièreté is considered a serious social failing."},

{type:"teach", trg:"la petitesse", src:"pettiness, smallness", pos:"noun", gender:"f",
 note:"Feminine noun. Being small-minded or trivial.\nMoral sense more common than physical.",
 example:"A: Sa petitesse d'esprit le rend insupportable.\nB: Il devrait apprendre à voir plus grand.",
 exampleSrc:"A: His pettiness of mind makes him unbearable.\nB: He should learn to think bigger.",
 funFact:"French uses abstract -esse nouns for character traits: petitesse, finesse, sagesse, tristesse."},

{type:"mc",
 q:"Quel mot décrit la capacité à comprendre les choses en profondeur ?",
 opts:["la perspicacité","l'agressivité","la grossièreté","la pâleur"],
 ans:"la perspicacité",
 hint:"From Latin perspicax, meaning sharp-sighted. A quality of deep understanding."},

{type:"fb",
 s:"L'{1} des normes sociales se fait dès le plus jeune âge.",
 a:["intériorisation"], opts:["intériorisation","idéalisation","agressivité","perspicacité"],
 hint:"The process of absorbing external rules into your own thinking.",
 sSrc:"The {1} of social norms happens from the earliest age."},

{type:"mc",
 q:"Que signifie 'la grossièreté' ?",
 opts:["Un comportement impoli ou vulgaire","Un excès de gentillesse","Une grande peur","Un manque de courage"],
 ans:"Un comportement impoli ou vulgaire",
 hint:"From grossier. The opposite of politesse. Think of coarse, rude behavior."},

{type:"match", pairs:[
  {trg:"l'agressivité", src:"aggressiveness"},
  {trg:"la perspicacité", src:"perceptiveness"},
  {trg:"l'idéalisation", src:"idealization"},
  {trg:"la pédagogie", src:"pedagogy"},
  {trg:"la petitesse", src:"pettiness"}
]},

{type:"fb",
 s:"Il fait une {1} de sa jeunesse en oubliant les moments difficiles.",
 a:["idéalisation"], opts:["idéalisation","intériorisation","perspicacité","grossièreté"],
 hint:"Seeing the past as perfect, ignoring the negative aspects. A common psychological tendency.",
 sSrc:"He {1} his youth, forgetting the difficult moments."},

{type:"mc",
 q:"Quelle méthode pédagogique est basée sur l'autonomie de l'enfant ?",
 opts:["la pédagogie Montessori","la pédagogie classique","la pédagogie militaire","la pédagogie passive"],
 ans:"la pédagogie Montessori",
 hint:"Named after an Italian educator. This approach lets children learn at their own pace."},

{type:"fb",
 s:"Sa {1} m'a inquiété. Il était blanc comme un linge.",
 a:["pâleur"], opts:["pâleur","perspicacité","petitesse","pédagogie"],
 hint:"The condition of being very pale. A physical sign of shock or fear.",
 sSrc:"His {1} worried me. He was white as a sheet."},

{type:"drag_fill",
 s:"La {1} au volant est souvent causée par le stress et la {2} d'esprit.",
 blanks:{"1":"agressivité","2":"petitesse"},
 pool:["agressivité","petitesse","pédagogie","perspicacité"],
 hint:"Road hostility is often linked to stress and small-mindedness"},

{type:"mc",
 q:"Quel suffixe français forme des noms de traits de caractère comme 'petitesse' ?",
 opts:["-esse","-tion","-ment","-eur"],
 ans:"-esse",
 hint:"The same ending as in finesse, sagesse, and tristesse. It creates abstract nouns from adjectives."}

]};
export default LESSON_3;
