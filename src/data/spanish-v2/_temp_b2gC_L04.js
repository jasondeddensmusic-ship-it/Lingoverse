// B2 Gap Batch C Lesson 04 - Trade & International Commerce
const LESSON_4 = {id:"esv2_b2gC_l4",title:"Comercio internacional",icon:"🌍",xp:15,board:true,steps:[
{type:"intro",title:"Comercio internacional",desc:"Explore vocabulary for international trade, economic organizations, and global commerce in the Spanish-speaking world.",goals:["Learn 12 words about international trade","Discuss economic structures and organizations","Use formal economic register"]},

{type:"teach",trg:"la internacionalización",src:"the internationalization",pos:"noun",gender:"f",
 note:"Feminine noun. The process of expanding globally.\nFrom internacional (international).",
 example:"A: La internacionalización de la empresa ha sido un éxito.\nB: Ya tenemos oficinas en diez países.",
 exampleSrc:"A: The internationalization of the company has been a success.\nB: We already have offices in ten countries.",
 funFact:"At 22 letters, this is one of the longest common Spanish words. It tests spelling in many exams."},

{type:"teach",trg:"la congregación",src:"the congregation / assembly",pos:"noun",gender:"f",
 note:"Feminine noun. A gathering of people or a religious community.\nFrom Latin congregare (to gather).",
 example:"A: La congregación de empresarios debatió sobre el futuro del sector.\nB: Asistieron más de trescientos directivos.",
 exampleSrc:"A: The assembly of businesspeople debated the sector's future.\nB: Over three hundred executives attended.",
 funFact:"In religious contexts, a congregación is a Catholic order. In business, it means a formal gathering."},

{type:"teach",trg:"la asamblea nacional",src:"the national assembly",pos:"noun",gender:"f",
 note:"Feminine compound noun. A country's legislative body.\nAsamblea from French assemblée.",
 example:"A: La asamblea nacional aprobó la nueva ley de comercio.\nB: Entrará en vigor el próximo trimestre.",
 exampleSrc:"A: The national assembly approved the new trade law.\nB: It will come into effect next quarter.",
 funFact:"Spain's parliament is called 'las Cortes Generales', but many Latin American countries use 'asamblea nacional'."},

{type:"teach",trg:"el mecanismo",src:"the mechanism / device",pos:"noun",gender:"m",
 note:"Masculine noun. A system of parts working together.\nAlso used figuratively for processes.",
 example:"A: El mecanismo de control de calidad funciona bien.\nB: Hemos reducido los defectos un 30%.",
 exampleSrc:"A: The quality control mechanism works well.\nB: We've reduced defects by 30%.",
 funFact:"From Greek mechane (machine). In EU Spanish, 'mecanismo' is used for policy instruments and frameworks."},

{type:"mc",q:"¿Qué significa 'internacionalización'?",opts:["El proceso de expandirse a otros países","Una reunión de empresarios","Un mecanismo de control","Una ley de comercio"],ans:"El proceso de expandirse a otros países",hint:"This long word describes a company going beyond its national borders."},

{type:"teach",trg:"la complementación",src:"the complementation / supplementation",pos:"noun",gender:"f",
 note:"Feminine noun. The act of completing or supplementing.\nFrom complementar (to complement).",
 example:"A: La complementación de ambos equipos ha dado buenos resultados.\nB: Juntos cubren todas las áreas necesarias.",
 exampleSrc:"A: The complementation of both teams has given good results.\nB: Together they cover all the necessary areas.",
 funFact:"In grammar, 'complementación' refers to how verbs take their objects. A key term in Spanish linguistics."},

{type:"teach",trg:"la interconexión",src:"the interconnection",pos:"noun",gender:"f",
 note:"Feminine noun. The state of being connected together.\nFrom inter (between) + conexión.",
 example:"A: La interconexión de las redes europeas facilita el comercio.\nB: Los trenes de mercancías cruzan fronteras sin parar.",
 exampleSrc:"A: The interconnection of European networks facilitates trade.\nB: Freight trains cross borders without stopping.",
 funFact:"Spain's railway gauge was historically different from France's, creating a famous interconexión problem at the border."},

{type:"teach",trg:"el lineamiento",src:"the guideline / outline",pos:"noun",gender:"m",
 note:"Masculine noun. A general direction or policy line.\nMore common in Latin American Spanish.",
 example:"A: Los lineamientos del plan estratégico son claros.\nB: Cada departamento sabe qué debe hacer.",
 exampleSrc:"A: The guidelines of the strategic plan are clear.\nB: Each department knows what it must do.",
 funFact:"In Peninsular Spanish, 'directriz' is more common, but 'lineamiento' appears in international documents."},

{type:"fb",s:"La {1} de la empresa comenzó con la apertura de oficinas en Portugal.",a:["internacionalización"],opts:["internacionalización","congregación","interconexión","complementación"],hint:"The process by which a company expands its operations to foreign countries.",sSrc:"The {1} of the company began with opening offices in Portugal."},

{type:"teach",trg:"la exageración",src:"the exaggeration",pos:"noun",gender:"f",
 note:"Feminine noun. Making something seem larger than it is.\nFrom exagerar (to exaggerate).",
 example:"A: Decir que es la peor crisis de la historia es una exageración.\nB: Tienes razón, ha habido crisis mucho peores.",
 exampleSrc:"A: Saying it's the worst crisis in history is an exaggeration.\nB: You're right, there have been much worse crises.",
 funFact:"Spanish speakers often use exageración with the phrase 'sin exageración' (without exaggeration) to add credibility."},

{type:"teach",trg:"la aspiración",src:"the aspiration / ambition",pos:"noun",gender:"f",
 note:"Feminine noun. A strong hope or ambition.\nAlso a phonetics term for breath sounds.",
 example:"A: Su aspiración es dirigir su propia empresa.\nB: Con su talento, seguro que lo consigue.",
 exampleSrc:"A: Her aspiration is to run her own company.\nB: With her talent, she'll surely achieve it.",
 funFact:"In phonetics, 'aspiración' describes the pronunciation of 's' as 'h' in southern Spain and Latin America."},

{type:"teach",trg:"la ovación",src:"the ovation / standing ovation",pos:"noun",gender:"f",
 note:"Feminine noun. Enthusiastic applause from an audience.\nFrom Latin ovare (to celebrate).",
 example:"A: El discurso del presidente recibió una ovación de tres minutos.\nB: Fue un momento muy emotivo para todos.",
 exampleSrc:"A: The president's speech received a three-minute ovation.\nB: It was a very emotional moment for everyone.",
 funFact:"In ancient Rome, an ovatio was a lesser triumph. In Spanish, it always means enthusiastic applause."},

{type:"mc",q:"¿Qué es una interconexión?",opts:["Una ambición personal","El estado de estar conectados entre sí","Una reunión de empresarios","Un tipo de exageración"],ans:"El estado de estar conectados entre sí",hint:"Think about networks or systems that are linked together."},

{type:"fb",s:"Su mayor {1} es llegar a ser directora de la empresa.",a:["aspiración"],opts:["aspiración","exageración","ovación","congregación"],hint:"A deep personal ambition or hope for the future.",sSrc:"Her greatest {1} is to become the company's director."},

{type:"match",pairs:[{trg:"mecanismo",src:"mechanism"},{trg:"lineamiento",src:"guideline"},{trg:"aspiración",src:"aspiration"},{trg:"ovación",src:"ovation"},{trg:"exageración",src:"exaggeration"}]},

{type:"fb",s:"El discurso recibió una gran {1} del público.",a:["ovación"],opts:["ovación","aspiración","exageración","congregación"],hint:"Loud, enthusiastic applause from an audience after an impressive performance or speech.",sSrc:"The speech received a great {1} from the audience."}
]};

export default LESSON_4;
