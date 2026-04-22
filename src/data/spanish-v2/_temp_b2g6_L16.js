// B2 Gap Batch 6 Lesson 16 - Abstract Concepts
const LESSON_16 = {id:"esv2_b2g6_l16",title:"Conceptos abstractos",icon:"💭",xp:15,board:true,steps:[
{type:"intro",title:"Conceptos abstractos",desc:"Build your vocabulary for discussing abstract ideas, philosophical concepts, and intangible qualities.",goals:["Learn 15 abstract concept terms","Discuss complex ideas with precision","Use abstract vocabulary in formal contexts"]},

{type:"teach",trg:"la inutilidad",src:"uselessness / futility",pos:"noun",gender:"f",
 note:"Feminine noun. The quality of being useless.\nIn- (not) + utilidad (usefulness).",
 example:"A: La inutilidad de la queja es evidente.\nB: Es mejor proponer soluciones.",
 exampleSrc:"A: The futility of the complaint is evident.\nB: It is better to propose solutions.",
 funFact:"The prefix in- is the most productive negative prefix in Spanish abstract nouns."},

{type:"teach",trg:"la irrealidad",src:"unreality",pos:"noun",gender:"f",
 note:"Feminine noun. The quality of being unreal.\nIr- (not) + realidad.",
 example:"A: Hay una sensación de irrealidad después de las buenas noticias.\nB: Es como si estuviera soñando.",
 exampleSrc:"A: There is a sense of unreality after the good news.\nB: It is as if I were dreaming.",
 funFact:"The prefix ir- is used before words starting with 'r': irreal, irrespetuoso, irresponsable."},

{type:"teach",trg:"la inconveniencia",src:"the inconvenience / unsuitability",pos:"noun",gender:"f",
 note:"Feminine noun. The quality of being unsuitable\nor the disadvantage of something.",
 example:"A: La inconveniencia de ese horario es obvia.\nB: Nadie puede llegar a las seis de la mañana.",
 exampleSrc:"A: The unsuitability of that schedule is obvious.\nB: Nobody can arrive at six in the morning.",
 funFact:"'Inconveniente' (the adjective/noun) is far more common than 'inconveniencia' in everyday speech."},

{type:"teach",trg:"invariable",src:"invariable / unchanging",pos:"adj",gender:null,
 note:"Adjective. Not changing or varying.\nIn- (not) + variable.",
 example:"A: Su rutina matinal es invariable desde hace años.\nB: Siempre se levanta a las seis y media.",
 exampleSrc:"A: His morning routine has been invariable for years.\nB: He always gets up at six thirty.",
 funFact:"In grammar, 'palabras invariables' are words that do not change form: adverbs, prepositions, conjunctions."},

{type:"mc",q:"¿Qué significa inutilidad?",opts:["La cualidad de no servir para nada","La capacidad de ser útil","Un tipo de habilidad","Una herramienta práctica"],ans:"La cualidad de no servir para nada",hint:"The state of being useless or serving no purpose."},

{type:"teach",trg:"inmaterial",src:"immaterial / intangible",pos:"adj",gender:null,
 note:"Adjective. Not made of physical matter.\nIn- (not) + material.",
 example:"A: El patrimonio inmaterial incluye tradiciones y lenguas.\nB: Es tan importante como los monumentos.",
 exampleSrc:"A: Intangible heritage includes traditions and languages.\nB: It is as important as monuments.",
 funFact:"UNESCO's 'patrimonio cultural inmaterial' (intangible cultural heritage) includes Spanish flamenco."},

{type:"teach",trg:"ineludible",src:"inescapable / unavoidable",pos:"adj",gender:null,
 note:"Adjective. Impossible to avoid.\nIn- (not) + eludible (avoidable).",
 example:"A: La reforma fiscal es ineludible.\nB: No podemos seguir posponiendo esta decisión.",
 exampleSrc:"A: Tax reform is unavoidable.\nB: We cannot keep postponing this decision.",
 funFact:"From Latin eludere (to escape). Something 'ineludible' cannot be escaped or dodged."},

{type:"teach",trg:"impensable",src:"unthinkable",pos:"adj",gender:null,
 note:"Adjective. Impossible to imagine or consider.\nIm- (not) + pensable.",
 example:"A: Hace veinte años, el teletrabajo era impensable.\nB: Ahora es la norma en muchas empresas.",
 exampleSrc:"A: Twenty years ago, remote work was unthinkable.\nB: Now it is the norm in many companies.",
 funFact:"The prefix im- appears before 'p' and 'b': impensable, imborrable, imparcial."},

{type:"fb",s:"La protección del patrimonio {1} es responsabilidad de todos.",a:["inmaterial"],opts:["inmaterial","invariable","ineludible","impensable"],hint:"Not physical, not made of matter. Think of traditions and languages.",sSrc:"The protection of {1} heritage is everyone's responsibility."},

{type:"teach",trg:"intencional",src:"intentional",pos:"adj",gender:null,
 note:"Adjective. Done on purpose.\nFrom intención + -al.",
 example:"A: ¿El error fue intencional o accidental?\nB: Creo que fue un accidente.",
 exampleSrc:"A: Was the mistake intentional or accidental?\nB: I think it was an accident.",
 funFact:"In law, 'homicidio intencional' (intentional homicide) carries a heavier sentence than accidental."},

{type:"teach",trg:"indescriptible",src:"indescribable",pos:"adj",gender:null,
 note:"Adjective. Too intense or extreme to describe.\nIn- (not) + descriptible.",
 example:"A: La vista desde la montaña es indescriptible.\nB: Las fotos no le hacen justicia.",
 exampleSrc:"A: The view from the mountain is indescribable.\nB: Photos do not do it justice.",
 funFact:"Often used for both positive and negative extremes: 'alegría indescriptible' or 'dolor indescriptible'."},

{type:"teach",trg:"infalible",src:"infallible",pos:"adj",gender:null,
 note:"Adjective. Never making mistakes.\nIn- (not) + falible (fallible).",
 example:"A: No existe un método infalible para aprender idiomas.\nB: Pero la constancia siempre funciona.",
 exampleSrc:"A: There is no infallible method for learning languages.\nB: But consistency always works.",
 funFact:"In Catholic theology, papal infallibility ('infalibilidad papal') is a formal doctrine since 1870."},

{type:"mc",q:"¿Qué significa ineludible?",opts:["Que es fácil de resolver","Que no se puede evitar","Que es invisible","Que no tiene importancia"],ans:"Que no se puede evitar",hint:"Something that cannot be escaped or avoided. It must be faced."},

{type:"match",pairs:[
  {trg:"inutilidad",src:"futility"},
  {trg:"inmaterial",src:"immaterial"},
  {trg:"ineludible",src:"unavoidable"},
  {trg:"impensable",src:"unthinkable"},
  {trg:"infalible",src:"infallible"}
]},

{type:"fb",s:"El paisaje era de una belleza {1}.",a:["indescriptible"],opts:["indescriptible","ineludible","intencional","invariable"],hint:"So beautiful that words cannot capture it.",sSrc:"The landscape was of an {1} beauty."}
]};
export default LESSON_16;
