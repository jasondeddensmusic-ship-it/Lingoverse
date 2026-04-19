// B2 Gap Batch B Lesson 12 — Technology & Innovation
const LESSON_12 = {id:"esv2_b2gB_l12",title:"Tecnología e innovación",icon:"💻",xp:15,board:true,steps:[
{type:"intro",title:"Tecnología e innovación",desc:"Learn vocabulary about technology, digital innovation, and modern tools in Spanish.",goals:["Learn 12 words about technology and innovation","Discuss digital tools and processes","Use technical vocabulary in professional contexts"]},

{type:"teach",trg:"el computador",src:"the computer",pos:"noun",gender:"m",
 note:"Masculine noun. Used in Latin America.\nIn Spain, 'el ordenador' is the standard term.",
 example:"A: Mi computador se ha quedado obsoleto.\nB: Deberías comprar uno con más memoria.",
 exampleSrc:"A: My computer has become obsolete.\nB: You should buy one with more memory.",
 funFact:"Spain uses 'ordenador' (from French ordinateur), while Latin America prefers 'computador/computadora'."},

{type:"teach",trg:"el logo",src:"the logo",pos:"noun",gender:"m",
 note:"Masculine noun. Short for logotipo.\nA visual symbol representing a brand.",
 example:"A: El nuevo logo de la empresa es mucho más moderno.\nB: Lo han diseñado una agencia de Barcelona.",
 exampleSrc:"A: The company's new logo is much more modern.\nB: A Barcelona agency designed it.",
 funFact:"The full form 'logotipo' comes from Greek logos (word) + typos (mark). 'Logo' is the informal shortcut."},

{type:"teach",trg:"la línea",src:"the line / connection / range",pos:"noun",gender:"f",
 note:"Feminine noun. Many meanings: physical line, phone line,\nproduct line, metro line.",
 example:"A: La línea de metro tres está cortada por obras.\nB: Tendremos que ir en autobús hoy.",
 exampleSrc:"A: Metro line three is closed for maintenance.\nB: We will have to go by bus today.",
 funFact:"'En línea' means 'online' in modern Spanish, a calque from English 'on line'."},

{type:"teach",trg:"el lineamiento",src:"the guideline / directive",pos:"noun",gender:"m",
 note:"Masculine noun. A principle or policy directive.\nMore common in Latin America. In Spain: 'directriz'.",
 example:"A: Los lineamientos del proyecto deben seguirse estrictamente.\nB: No hay margen para interpretaciones.",
 exampleSrc:"A: The project guidelines must be followed strictly.\nB: There is no room for interpretation.",
 funFact:"In Mexico and Colombia, 'lineamientos' is the standard term for official guidelines in government and business."},

{type:"mc",q:"¿Cómo se dice 'computer' en España?",
 opts:["Ordenador","Computador","Procesador","Calculador"],
 ans:"Ordenador",
 hint:"Spain borrowed this word from French, while Latin America uses a term closer to English."},

{type:"teach",trg:"el nicho",src:"the niche / recess",pos:"noun",gender:"m",
 note:"Masculine noun. A recessed space in a wall.\nAlso: a market niche or ecological niche.",
 example:"A: Han encontrado un nicho de mercado muy rentable.\nB: Venden productos ecológicos para mascotas.",
 exampleSrc:"A: They have found a very profitable market niche.\nB: They sell organic products for pets.",
 funFact:"In Spanish cemeteries, 'nicho' refers to the wall compartments where coffins are placed."},

{type:"teach",trg:"el margen",src:"the margin / edge / leeway",pos:"noun",gender:"m",
 note:"Masculine noun (el margen = edge/leeway).\nFeminine (la margen = riverbank).\nGender changes meaning.",
 example:"A: El margen de beneficio es muy estrecho.\nB: Necesitamos aumentar las ventas para ser rentables.",
 exampleSrc:"A: The profit margin is very narrow.\nB: We need to increase sales to be profitable.",
 funFact:"One of few Spanish words where gender changes meaning: el margen (margin/leeway), la margen (river bank)."},

{type:"teach",trg:"la base",src:"the base / foundation / basis",pos:"noun",gender:"f",
 note:"Feminine noun. The bottom support of something.\nAlso: the foundation of an argument.",
 example:"A: La base de datos contiene millones de datos.\nB: Se actualiza automáticamente cada hora.",
 exampleSrc:"A: The database contains millions of data entries.\nB: It is updated automatically every hour.",
 funFact:"'Base de datos' (database) is one of the most common tech terms in Spanish computing."},

{type:"fb",s:"El {1} de mercado que han encontrado es muy específico.",
 a:["nicho"],opts:["nicho","logo","margen","lineamiento"],
 hint:"A specialized segment of a market that serves a particular group of customers.",
 sSrc:"The market {1} they have found is very specific."},

{type:"teach",trg:"la agencia de publicidad",src:"the advertising agency",pos:"noun",gender:"f",
 note:"Feminine compound. A company that creates ads.\nPublicidad = advertising.",
 example:"A: La agencia de publicidad diseñó una campaña muy creativa.\nB: El anuncio se hizo viral en redes sociales.",
 exampleSrc:"A: The advertising agency designed a very creative campaign.\nB: The ad went viral on social media.",
 funFact:"Madrid and Barcelona are Spain's advertising hubs, home to both local and international agencies."},

{type:"teach",trg:"multilingüe",src:"multilingual",pos:"adj",gender:null,
 note:"Adjective. Speaking or using several languages.\nFrom multi- (many) + lingua (language).",
 example:"A: España necesita más profesionales multilingües.\nB: El mercado laboral europeo lo exige.",
 exampleSrc:"A: Spain needs more multilingual professionals.\nB: The European job market demands it.",
 funFact:"Spain is officially multilingual: Castilian, Catalan, Basque, Galician, and Aranese all have official status."},

{type:"teach",trg:"la cabeza",src:"the head / leader / top",pos:"noun",gender:"f",
 note:"Feminine noun. The body part, or the leader/top.\nMany idioms: 'a la cabeza' (in the lead).",
 example:"A: Esa empresa va a la cabeza en innovación tecnológica.\nB: Invierten mucho en investigación y desarrollo.",
 exampleSrc:"A: That company is at the forefront of technological innovation.\nB: They invest a lot in research and development.",
 funFact:"'Cabeza' appears in dozens of idioms: 'perder la cabeza' (lose one's mind), 'cabeza de turco' (scapegoat)."},

{type:"mc",q:"¿Qué cambia con el género de 'margen'?",
 opts:["El significado: el margen (margen/espacio), la margen (orilla del río)","La pronunciación","El número de sílabas","Nada, es siempre masculino"],
 ans:"El significado: el margen (margen/espacio), la margen (orilla del río)",
 hint:"This is one of the rare words where masculine and feminine forms have different meanings."},

{type:"match",pairs:[
 {trg:"nicho",src:"niche"},
 {trg:"margen",src:"margin"},
 {trg:"logo",src:"logo"},
 {trg:"multilingüe",src:"multilingual"},
 {trg:"base de datos",src:"database"}
]},

{type:"fb",s:"La {1} diseñó el nuevo anuncio para la campaña de Navidad.",
 a:["agencia de publicidad"],opts:["agencia de publicidad","base de datos","línea","cabeza"],
 hint:"A company whose business is creating advertisements and marketing campaigns.",
 sSrc:"The {1} designed the new ad for the Christmas campaign."},

{type:"fb",s:"Esa empresa va a la {1} del sector tecnológico en Europa.",
 a:["cabeza"],opts:["cabeza","base","línea","margen"],
 hint:"An expression meaning 'in the lead' or 'at the forefront', using a body part.",
 sSrc:"That company is at the {1} of the technology sector in Europe."},

]};
export default LESSON_12;
