// B2 Gap Batch 6 Lesson 05 - Environment & Nature
const LESSON_5 = {id:"esv2_b2g6_l5",title:"Medio ambiente",icon:"🌿",xp:15,board:true,steps:[
{type:"intro",title:"Medio ambiente",desc:"Explore vocabulary about environmental issues, sustainability, and natural resources.",goals:["Learn 15 environmental and nature terms","Discuss sustainability and ecology","Use environment-related vocabulary fluently"]},

{type:"teach",trg:"el fertilizante",src:"the fertilizer",pos:"noun",gender:"m",
 note:"Masculine noun. A substance to enrich soil.\nFrom fértil (fertile) + -izante.",
 example:"A: ¿Usas fertilizantes químicos en el huerto?\nB: No, solo uso compost natural.",
 exampleSrc:"A: Do you use chemical fertilizers in the garden?\nB: No, I only use natural compost.",
 funFact:"Spain is one of Europe's largest consumers of fertilizers due to its extensive agriculture."},

{type:"teach",trg:"el hidrocarburo",src:"the hydrocarbon",pos:"noun",gender:"m",
 note:"Masculine noun. An organic compound of hydrogen\nand carbon. Hidro + carburo.",
 example:"A: Los hidrocarburos son la principal fuente de energía.\nB: Pero también causan contaminación.",
 exampleSrc:"A: Hydrocarbons are the main source of energy.\nB: But they also cause pollution.",
 funFact:"Hidro (water/hydrogen) + carburo (carbon). These are the building blocks of fossil fuels."},

{type:"teach",trg:"el basurero",src:"the garbage dump / garbage collector",pos:"noun",gender:"m",
 note:"Masculine noun. A landfill, or the person who\ncollects trash. From basura (garbage).",
 example:"A: El basurero municipal está casi lleno.\nB: Necesitamos reciclar más urgentemente.",
 exampleSrc:"A: The municipal garbage dump is almost full.\nB: We need to recycle more urgently.",
 funFact:"In Spain, the person is 'el basurero', the place is 'el vertedero'. In Latin America both use 'basurero'."},

{type:"teach",trg:"la dureza",src:"the hardness / toughness",pos:"noun",gender:"f",
 note:"Feminine noun. The quality of being hard.\nFrom duro (hard) + -eza.",
 example:"A: La dureza del agua en esta zona causa problemas.\nB: Sí, deja mucha cal en las tuberías.",
 exampleSrc:"A: The hardness of the water in this area causes problems.\nB: Yes, it leaves a lot of limescale in the pipes.",
 funFact:"'Dureza del agua' (water hardness) varies greatly across Spain, from soft in the north to hard in the southeast."},

{type:"mc",q:"¿Qué son los hidrocarburos?",opts:["Compuestos orgánicos de hidrógeno y carbono","Fertilizantes naturales","Minerales del subsuelo","Tipos de plantas acuáticas"],ans:"Compuestos orgánicos de hidrógeno y carbono",hint:"The building blocks of fossil fuels, made of hydrogen and carbon."},

{type:"teach",trg:"la hilera",src:"the row / line",pos:"noun",gender:"f",
 note:"Feminine noun. A line of things placed in order.\nFrom hilo (thread).",
 example:"A: Plantamos los árboles en hilera.\nB: Así reciben la misma cantidad de sol.",
 exampleSrc:"A: We planted the trees in a row.\nB: That way they receive the same amount of sunlight.",
 funFact:"From hilo (thread). A row is like things 'threaded' together in a line."},

{type:"teach",trg:"la horquilla",src:"the fork / hairpin / bracket",pos:"noun",gender:"f",
 note:"Feminine noun. A forked tool, a hairpin, or a range\nof values. Diminutive of horca (pitchfork).",
 example:"A: La horquilla de temperaturas va de veinte a treinta grados.\nB: Es un rango bastante amplio.",
 exampleSrc:"A: The temperature range goes from twenty to thirty degrees.\nB: It is quite a wide range.",
 funFact:"In environmental science, 'horquilla' means a bracket or range. In everyday life, it is a hairpin."},

{type:"teach",trg:"insular",src:"insular / island-related",pos:"adj",gender:null,
 note:"Adjective. Related to islands.\nFrom Latin insula (island).",
 example:"A: El clima insular es más suave que el continental.\nB: Las islas Canarias son un buen ejemplo.",
 exampleSrc:"A: The insular climate is milder than the continental one.\nB: The Canary Islands are a good example.",
 funFact:"Spain has two insular provinces: the Canary Islands in the Atlantic and the Balearic Islands in the Mediterranean."},

{type:"fb",s:"Los agricultores ecológicos no usan {1} químicos.",a:["fertilizantes"],opts:["fertilizantes","hidrocarburos","basureros","hileras"],hint:"Substances added to soil to help plants grow.",sSrc:"Organic farmers do not use chemical {1}."},

{type:"teach",trg:"la fragilidad",src:"the fragility",pos:"noun",gender:"f",
 note:"Feminine noun. The quality of being easily broken.\nFrom frágil (fragile) + -idad.",
 example:"A: La fragilidad del ecosistema marino es preocupante.\nB: Cualquier vertido puede causar daños irreversibles.",
 exampleSrc:"A: The fragility of the marine ecosystem is worrying.\nB: Any spill can cause irreversible damage.",
 funFact:"The -idad suffix creates abstract nouns from adjectives: frágil > fragilidad, like English -ity."},

{type:"teach",trg:"la inercia",src:"the inertia",pos:"noun",gender:"f",
 note:"Feminine noun. Resistance to change or movement.\nFrom Latin inertia.",
 example:"A: La inercia política frena las reformas ambientales.\nB: Hace falta presión ciudadana.",
 exampleSrc:"A: Political inertia slows down environmental reforms.\nB: Citizen pressure is needed.",
 funFact:"Used both in physics (resistance to motion) and figuratively (reluctance to change)."},

{type:"teach",trg:"la inestabilidad",src:"the instability",pos:"noun",gender:"f",
 note:"Feminine noun. Lack of stability.\nIn- (not) + estabilidad (stability).",
 example:"A: La inestabilidad del clima afecta a los cultivos.\nB: Los agricultores no pueden predecir las lluvias.",
 exampleSrc:"A: Climate instability affects the crops.\nB: Farmers cannot predict the rainfall.",
 funFact:"Climate instability in Spain has led to severe droughts, making water management a national priority."},

{type:"teach",trg:"la envergadura",src:"the scope / wingspan / magnitude",pos:"noun",gender:"f",
 note:"Feminine noun. The size or importance of something.\nOriginally a sailing term for sail width.",
 example:"A: Es un proyecto de gran envergadura.\nB: Sí, afectará a toda la región.",
 exampleSrc:"A: It is a project of great scope.\nB: Yes, it will affect the whole region.",
 funFact:"Originally a nautical term for the width of a ship's sails. Now means 'scope' or 'magnitude'."},

{type:"mc",q:"¿Qué significa fragilidad?",opts:["La cualidad de romperse fácilmente","Un tipo de fertilizante","Una fila de árboles","Una horquilla de temperaturas"],ans:"La cualidad de romperse fácilmente",hint:"Think of something fragile, delicate, easily broken."},

{type:"match",pairs:[
  {trg:"fertilizante",src:"fertilizer"},
  {trg:"basurero",src:"garbage dump"},
  {trg:"fragilidad",src:"fragility"},
  {trg:"inercia",src:"inertia"},
  {trg:"envergadura",src:"scope / magnitude"}
]},

{type:"fb",s:"La {1} del ecosistema hace que cualquier cambio sea peligroso.",a:["fragilidad"],opts:["fragilidad","inestabilidad","envergadura","inercia"],hint:"The quality of being delicate and easily damaged.",sSrc:"The {1} of the ecosystem makes any change dangerous."}
]};
export default LESSON_5;
