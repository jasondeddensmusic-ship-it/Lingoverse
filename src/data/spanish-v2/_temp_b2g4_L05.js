// B2 Gap Batch 4 Lesson 05 - Law & Governance
const LESSON_5 = {id:"esv2_b2g4_l5",title:"Leyes y gobernanza",icon:"⚖️",xp:15,board:true,steps:[
{type:"intro",title:"Leyes y gobernanza",desc:"Master vocabulary for discussing legal frameworks, regulations, and governmental structures in Spain.",goals:["Learn 15 words about law and governance","Discuss regulations and statutes","Express legal concepts clearly"]},

{type:"teach",trg:"el estatuto",src:"the statute / bylaws",pos:"noun",gender:"m",
 note:"Masculine noun. A written rule or regulation.\nPlural: los estatutos.",
 example:"A: El estatuto de autonomía define las competencias de cada región.\nB: Cada comunidad tiene el suyo.",
 exampleSrc:"A: The statute of autonomy defines the powers of each region.\nB: Each community has its own.",
 funFact:"Spain's 17 autonomous communities each have their own 'Estatuto de Autonomía' since 1978."},

{type:"teach",trg:"estipular",src:"to stipulate",pos:"verb",gender:null,
 note:"Regular -ar verb. To specify a requirement in an agreement.\nNoun: la estipulación.",
 example:"A: El contrato estipula un plazo de treinta días.\nB: Tenemos que cumplirlo al pie de la letra.",
 exampleSrc:"A: The contract stipulates a period of thirty days.\nB: We have to follow it to the letter.",
 funFact:"From Latin stipulari (to demand a formal promise). Essential in Spanish legal language."},

{type:"teach",trg:"la estipulación",src:"the stipulation",pos:"noun",gender:"f",
 note:"Feminine noun. A specific requirement in a contract.\nPlural: las estipulaciones.",
 example:"A: Hay una estipulación sobre vacaciones en el contrato.\nB: Sí, tienes derecho a treinta días al año.",
 exampleSrc:"A: There is a stipulation about holidays in the contract.\nB: Yes, you are entitled to thirty days per year.",
 funFact:"Spanish labor law guarantees 30 calendar days of paid vacation, among the most in Europe."},

{type:"teach",trg:"el estamento",src:"the social class / estate",pos:"noun",gender:"m",
 note:"Masculine noun. A social or political class.\nHistorical: nobleza, clero, pueblo.",
 example:"A: En la Edad Media, la sociedad se dividía en tres estamentos.\nB: La nobleza, el clero y el pueblo llano.",
 exampleSrc:"A: In the Middle Ages, society was divided into three estates.\nB: The nobility, the clergy, and the common people.",
 funFact:"From Latin stamentum. The 'Cortes estamentales' were Spain's medieval parliament by estates."},

{type:"teach",trg:"escandalizar",src:"to scandalize / to shock",pos:"verb",gender:null,
 note:"Regular -ar verb. To cause moral outrage.\nReflexive: escandalizarse (to be shocked).",
 example:"A: Sus declaraciones escandalizaron a la opinión pública.\nB: Tuvo que retractarse al día siguiente.",
 exampleSrc:"A: His statements scandalized public opinion.\nB: He had to retract the next day.",
 funFact:"From Greek skandalon (trap, stumbling block). 'Escándalo político' dominates Spanish news cycles."},

{type:"mc",q:"¿Qué estipula un contrato?",opts:["Las condiciones y requisitos acordados","El precio del alquiler","La opinión del juez","Los nombres de los testigos"],ans:"Las condiciones y requisitos acordados",hint:"Think about the specific requirements written into a formal agreement."},

{type:"teach",trg:"erróneo",src:"erroneous / mistaken",pos:"adj",gender:null,
 note:"Adjective. Wrong, based on error.\nFeminine: errónea. More formal than 'equivocado'.",
 example:"A: Esa información es completamente errónea.\nB: Habrá que corregirla cuanto antes.",
 exampleSrc:"A: That information is completely erroneous.\nB: We will have to correct it as soon as possible.",
 funFact:"From Latin erroneus. Used in formal writing and legal contexts more than 'equivocado'."},

{type:"teach",trg:"evidenciar",src:"to demonstrate / to make evident",pos:"verb",gender:null,
 note:"Regular -ar verb. To clearly show or prove.\nNoun: la evidencia.",
 example:"A: El informe evidencia la necesidad de reformas.\nB: Los datos no dejan lugar a dudas.",
 exampleSrc:"A: The report demonstrates the need for reforms.\nB: The data leave no room for doubt.",
 funFact:"A false friend: 'evidencia' in Spanish means 'proof', not the English sense of 'evidence'."},

{type:"teach",trg:"explicitar",src:"to make explicit",pos:"verb",gender:null,
 note:"Regular -ar verb. To state something clearly and openly.\nAdjective: explícito.",
 example:"A: Debemos explicitar las normas del programa.\nB: Así todos sabrán qué se espera de ellos.",
 exampleSrc:"A: We must make the program rules explicit.\nB: That way everyone will know what is expected of them.",
 funFact:"A relatively modern verb in Spanish. The RAE added it as the verbal form of 'explícito'."},

{type:"teach",trg:"el etiquetado",src:"the labeling",pos:"noun",gender:"m",
 note:"Masculine noun. The process of putting labels on products.\nAlso: product label information.",
 example:"A: El etiquetado de los alimentos debe ser claro.\nB: El consumidor tiene derecho a saber qué compra.",
 exampleSrc:"A: Food labeling must be clear.\nB: The consumer has the right to know what they are buying.",
 funFact:"EU regulations require detailed 'etiquetado nutricional' on all packaged foods sold in Spain."},

{type:"fb",s:"El {1} de autonomía de Cataluña se reformó en 2006.",a:["estatuto"],opts:["estatuto","estamento","etiquetado","escándalo"],hint:"The legal document that defines a region's powers and rights.",sSrc:"The {1} of autonomy of Catalonia was reformed in 2006."},

{type:"teach",trg:"etiquetar",src:"to label / to tag",pos:"verb",gender:null,
 note:"Regular -ar verb. To put a label on something.\nFigurative: etiquetar a alguien (to label someone).",
 example:"A: No deberías etiquetar a la gente tan rápido.\nB: Tienes razón, hay que conocer a las personas.",
 exampleSrc:"A: You should not label people so quickly.\nB: You are right, you need to get to know people.",
 funFact:"In social media Spanish, 'etiquetar' also means to tag someone in a post or photo."},

{type:"teach",trg:"la equivalencia",src:"the equivalence",pos:"noun",gender:"f",
 note:"Feminine noun. Being equal in value or function.\nAdjective: equivalente.",
 example:"A: ¿Cuál es la equivalencia de este título en España?\nB: Necesitas una convalidación oficial.",
 exampleSrc:"A: What is the equivalence of this degree in Spain?\nB: You need an official validation.",
 funFact:"Foreign degree holders in Spain must get 'equivalencia' or 'homologación' to use their titles."},

{type:"teach",trg:"excusar",src:"to excuse / to avoid",pos:"verb",gender:null,
 note:"Regular -ar verb. To justify or to exempt.\nReflexive: excusarse (to apologize).",
 example:"A: Se excusó por no haber asistido a la reunión.\nB: Dijo que estaba enfermo.",
 exampleSrc:"A: He excused himself for not attending the meeting.\nB: He said he was ill.",
 funFact:"'Excusado' as a noun is an old-fashioned word for 'bathroom' in some Spanish regions."},

{type:"mc",q:"¿Qué es el etiquetado de alimentos?",opts:["La información en los envases de comida","Un tipo de impuesto","Una receta de cocina","Un estilo de cocinar"],ans:"La información en los envases de comida",hint:"Think about the labels on food packaging that tell you ingredients and nutrition."},

{type:"teach",trg:"el enfoque",src:"the approach / focus",pos:"noun",gender:"m",
 note:"Masculine noun. A way of dealing with something.\nVerb: enfocar.",
 example:"A: Necesitamos un enfoque diferente para resolver esto.\nB: Quizá deberíamos pedir ayuda externa.",
 exampleSrc:"A: We need a different approach to solve this.\nB: Perhaps we should ask for outside help.",
 funFact:"From 'en foco' (in focus). Used constantly in academic and business Spanish for 'approach'."},

{type:"fb",s:"El informe {1} que hay problemas graves en el sistema.",a:["evidencia"],opts:["evidencia","estipula","escandaliza","excusa"],hint:"The verb meaning to clearly demonstrate or prove something.",sSrc:"The report {1} that there are serious problems in the system."},

{type:"match",pairs:[{trg:"estatuto",src:"statute"},{trg:"estipular",src:"to stipulate"},{trg:"erróneo",src:"erroneous"},{trg:"equivalencia",src:"equivalence"},{trg:"enfoque",src:"approach"}]},

{type:"mc",q:"Si una información es 'errónea', es:",opts:["Incorrecta o equivocada","Muy detallada","Completamente secreta","Bastante útil"],ans:"Incorrecta o equivocada",hint:"Think about data that contains mistakes or falsehoods."},

{type:"fb",s:"Debemos {1} las reglas para que todos las entiendan.",a:["explicitar"],opts:["explicitar","etiquetar","estipular","escandalizar"],hint:"To make something clearly stated and openly understood.",sSrc:"We must {1} the rules so that everyone understands them."}
]};

export default LESSON_5;
