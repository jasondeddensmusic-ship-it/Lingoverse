// B2 Gap2 Lesson 13 - Politics & Governance
const LESSON_13 = {id:"esv2_b2g2_l13",title:"Política y gobernanza",icon:"🏛️",xp:15,board:true,steps:[
{type:"intro",title:"Política y gobernanza",desc:"Discuss political systems, governance, and civic life with advanced vocabulary from Spanish public discourse.",goals:["Learn 20 words about politics and governance","Discuss political systems and processes","Express informed opinions on governance"]},

{type:"teach",trg:"la ciudadanía",src:"the citizenship",pos:"noun",gender:"f",
 note:"Feminine noun. The status of being a citizen, or citizens collectively.",
 example:"A: La ciudadanía exige transparencia a sus representantes.\nB: Es un derecho fundamental en democracia.",
 exampleSrc:"A: The citizenry demands transparency from its representatives.\nB: It is a fundamental right in a democracy.",
 funFact:"'Ciudadanía digital' (digital citizenship) is a new concept taught in Spanish schools."},

{type:"teach",trg:"la concienciación",src:"the awareness-raising",pos:"noun",gender:"f",
 note:"Feminine noun. The process of making people aware of an issue.",
 example:"A: La concienciación sobre el cambio climático ha aumentado.\nB: Cada vez más gente recicla y ahorra energía.",
 exampleSrc:"A: Awareness about climate change has increased.\nB: More and more people recycle and save energy.",
 funFact:"In Latin America: 'concientización'. Paulo Freire popularized the concept in education worldwide."},

{type:"teach",trg:"la aprobación",src:"the approval",pos:"noun",gender:"f",
 note:"Feminine noun. Official acceptance or endorsement of something.",
 example:"A: La aprobación de la ley fue por mayoría absoluta.\nB: La oposición votó en contra.",
 exampleSrc:"A: The approval of the law was by absolute majority.\nB: The opposition voted against.",
 funFact:"In academics, 'aprobación' also means passing a subject. 'Aprobar' = to pass (an exam)."},

{type:"teach",trg:"la centralización",src:"the centralization",pos:"noun",gender:"f",
 note:"Feminine noun. Concentrating power or control in a central authority.",
 example:"A: La centralización excesiva genera rechazo en las regiones.\nB: Prefieren gestionar sus propios asuntos.",
 exampleSrc:"A: Excessive centralization generates rejection in the regions.\nB: They prefer to manage their own affairs.",
 funFact:"Spain's 17 autonomous communities were born from the desire to reverse Franco-era centralization."},

{type:"teach",trg:"el autoritarismo",src:"the authoritarianism",pos:"noun",gender:"m",
 note:"Masculine noun. A political system favoring strong central power without freedom.",
 example:"A: El autoritarismo niega las libertades individuales.\nB: La historia nos enseña sus peligros.",
 exampleSrc:"A: Authoritarianism denies individual freedoms.\nB: History teaches us its dangers.",
 funFact:"Spain experienced authoritarianism under Franco (1939-1975). The memory shapes modern politics."},

{type:"mc",q:"¿Qué es la centralización?",opts:["Concentrar el poder en una autoridad central","Repartir el poder entre las regiones","Celebrar elecciones democráticas","Crear nuevas leyes"],ans:"Concentrar el poder en una autoridad central",hint:"Think about all decision-making being concentrated in one place, usually the capital."},

{type:"teach",trg:"el comunismo",src:"the communism",pos:"noun",gender:"m",
 note:"Masculine noun. Political ideology advocating collective ownership.",
 example:"A: El comunismo tuvo seguidores en toda Europa.\nB: En España, el PCE fue clave en la Transición.",
 exampleSrc:"A: Communism had followers across Europe.\nB: In Spain, the PCE was key in the Transition.",
 funFact:"Santiago Carrillo's legalization of the PCE in 1977 was a turning point for Spanish democracy."},

{type:"teach",trg:"la conformidad",src:"the conformity / agreement",pos:"noun",gender:"f",
 note:"Feminine noun. Acceptance of or compliance with rules or norms.",
 example:"A: Dio su conformidad al acuerdo sin objeciones.\nB: Firmó todos los documentos esa misma tarde.",
 exampleSrc:"A: He gave his agreement to the deal without objections.\nB: He signed all the documents that same afternoon.",
 funFact:"'De conformidad con' (in accordance with) is standard legalese in every Spanish contract."},

{type:"teach",trg:"la convivencia",src:"the coexistence / living together",pos:"noun",gender:"f",
 note:"Feminine noun. Peaceful cohabitation between different groups.",
 example:"A: La convivencia entre culturas diferentes es posible.\nB: Requiere respeto, diálogo y buena voluntad.",
 exampleSrc:"A: Coexistence between different cultures is possible.\nB: It requires respect, dialogue, and goodwill.",
 funFact:"'Convivencia' in medieval Spain referred to Christians, Muslims, and Jews living side by side."},

{type:"teach",trg:"cooperativo",src:"cooperative",pos:"adj",gender:null,
 note:"Adjective. Working together for a common goal.\nFeminine: cooperativa.",
 example:"A: El aprendizaje cooperativo mejora los resultados escolares.\nB: Los alumnos se ayudan entre sí.",
 exampleSrc:"A: Cooperative learning improves school results.\nB: Students help each other.",
 funFact:"'Cooperativa' as a noun means a cooperative business. Mondragón in the Basque Country is the world's largest."},

{type:"teach",trg:"la congregación",src:"the congregation / gathering",pos:"noun",gender:"f",
 note:"Feminine noun. A group of people assembled, especially for religious purposes.",
 example:"A: La congregación se reunió para la misa del domingo.\nB: La iglesia estaba llena.",
 exampleSrc:"A: The congregation gathered for Sunday mass.\nB: The church was full.",
 funFact:"In Spain, religious congregations also run many schools, known as 'colegios concertados'."},

{type:"fb",s:"La {1} sobre el reciclaje ha cambiado los hábitos de muchos españoles.",a:["concienciación"],opts:["concienciación","centralización","conformidad","congregación"],hint:"The process of raising people's awareness about an important issue.",sSrc:"The {1} about recycling has changed the habits of many Spaniards."},

{type:"teach",trg:"el contrapunto",src:"the counterpoint",pos:"noun",gender:"m",
 note:"Masculine noun. A contrasting element, or a musical technique.",
 example:"A: Su optimismo era el contrapunto perfecto al pesimismo general.\nB: Siempre veía el lado positivo.",
 exampleSrc:"A: His optimism was the perfect counterpoint to the general pessimism.\nB: He always saw the positive side.",
 funFact:"From music: two melodies playing against each other. The figurative use is very common in Spanish."},

{type:"teach",trg:"la cúpula",src:"the dome / leadership",pos:"noun",gender:"f",
 note:"Feminine noun. An architectural dome, or the top leadership of an organization.",
 example:"A: La cúpula del partido se reunió de urgencia.\nB: Tienen que decidir su estrategia electoral.",
 exampleSrc:"A: The party leadership met urgently.\nB: They need to decide their electoral strategy.",
 funFact:"Both meanings coexist: Brunelleschi's dome and political leadership. Context clarifies instantly."},

{type:"teach",trg:"el cónyuge",src:"the spouse",pos:"noun",gender:"m",
 note:"Common gender: el/la cónyuge.\nA married partner. Formal term.",
 example:"A: Ambos cónyuges deben firmar la escritura.\nB: Traigan sus documentos de identidad.",
 exampleSrc:"A: Both spouses must sign the deed.\nB: Bring your identity documents.",
 funFact:"From Latin coniugem. More formal than 'marido/mujer'. Used in legal and administrative Spanish."},

{type:"teach",trg:"la contraprestación",src:"the consideration / payment in return",pos:"noun",gender:"f",
 note:"Feminine noun. Something given in return for a service or agreement.",
 example:"A: ¿Cuál es la contraprestación por este servicio?\nB: El pago mensual que figura en el contrato.",
 exampleSrc:"A: What is the consideration for this service?\nB: The monthly payment stated in the contract.",
 funFact:"Strictly legal and business vocabulary. Rarely used in everyday conversation."},

{type:"mc",q:"¿Qué es la cúpula de un partido político?",opts:["Las leyes que proponen","Los líderes principales del partido","El edificio de la sede","Los votantes más fieles"],ans:"Los líderes principales del partido",hint:"Think about the top-level decision makers who run the party organization."},

{type:"teach",trg:"la consideración",src:"the consideration / regard",pos:"noun",gender:"f",
 note:"Feminine noun. Careful thought, or respect for others.",
 example:"A: Trata a todos con mucha consideración.\nB: Es una persona muy respetuosa y empática.",
 exampleSrc:"A: He treats everyone with great consideration.\nB: He is a very respectful and empathetic person.",
 funFact:"'Tener en consideración' is more formal than 'tener en cuenta' (to take into account)."},

{type:"teach",trg:"la confusión",src:"the confusion",pos:"noun",gender:"f",
 note:"Feminine noun. A state of disorder or misunderstanding.",
 example:"A: Hay mucha confusión sobre las nuevas normas.\nB: Deberían explicarlas con más claridad.",
 exampleSrc:"A: There is a lot of confusion about the new rules.\nB: They should explain them more clearly.",
 funFact:"'Confundir' (to confuse) is the verb. 'Confuso' (confused/confusing) is the adjective."},

{type:"teach",trg:"contundente",src:"forceful / decisive",pos:"adj",gender:null,
 note:"Adjective. Leaving no room for doubt, strong and clear. Same form m/f.",
 example:"A: La victoria fue contundente, tres a cero.\nB: No dejaron ninguna duda sobre su superioridad.",
 exampleSrc:"A: The victory was decisive, three to zero.\nB: They left no doubt about their superiority.",
 funFact:"In law, 'prueba contundente' is conclusive evidence. In sports, 'victoria contundente' is a blowout."},

{type:"teach",trg:"la correspondencia",src:"the correspondence / mail",pos:"noun",gender:"f",
 note:"Feminine noun. Exchange of letters, or a connection between things.",
 example:"A: La correspondencia oficial llega al buzón del ayuntamiento.\nB: Las cartas personales, a casa.",
 exampleSrc:"A: Official correspondence arrives at the town hall mailbox.\nB: Personal letters, at home.",
 funFact:"Also means transfer: 'correspondencia de metro' is where you change lines in the subway."},

{type:"fb",s:"La victoria del equipo fue {1}, cuatro a cero.",a:["contundente"],opts:["contundente","cooperativa","conformista","confusa"],hint:"An adjective meaning decisive and overwhelming, leaving no room for doubt.",sSrc:"The team's victory was {1}, four to zero."},

{type:"match",pairs:[{trg:"ciudadanía",src:"citizenship"},{trg:"autoritarismo",src:"authoritarianism"},{trg:"cúpula",src:"dome/leadership"},{trg:"cónyuge",src:"spouse"},{trg:"contrapunto",src:"counterpoint"}]}
]};

export default LESSON_13;
