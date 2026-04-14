// B2 Gap Batch 5 Lesson 12 - Communication & Media
const LESSON_12 = {id:"esv2_b2g5_l12",title:"Comunicación y medios",icon:"📡",xp:15,board:true,steps:[
{type:"intro",title:"Comunicación y medios",desc:"Learn vocabulary about media, journalism, digital communication, and public discourse.",goals:["Learn 15 words about media and communication","Discuss journalism and digital media","Use formal media-related vocabulary"]},

{type:"teach",trg:"el diario digital",src:"the online newspaper",pos:"noun",gender:"m",
 note:"Masculine noun phrase. A newspaper published on the internet.\nSynonym: periódico digital.",
 example:"A: Leo el diario digital todas las mañanas.\nB: ¿Cuál prefieres?\nA: El País y elDiario.es.",
 exampleSrc:"A: I read the online newspaper every morning.\nB: Which one do you prefer?\nA: El País and elDiario.es.",
 funFact:"Spain's digital press has overtaken print. El País launched its website in 1996, among the first in Europe."},

{type:"teach",trg:"el gráfico",src:"the chart / graphic",pos:"noun",gender:"m",
 note:"Masculine noun. A visual representation of data.\nAlso adjective: diseño gráfico.",
 example:"A: Este gráfico muestra la evolución de las ventas.\nB: Se ve claramente el aumento en diciembre.",
 exampleSrc:"A: This chart shows the evolution of sales.\nB: The increase in December is clearly visible.",
 funFact:"'Novela gráfica' (graphic novel) is a growing genre in Spain, with major awards like the Premio Nacional."},

{type:"teach",trg:"el etiquetado",src:"the labeling / tagging",pos:"noun",gender:"m",
 note:"Masculine noun. The system of labels on products.\nFrom etiqueta (label).",
 example:"A: El etiquetado de los alimentos debe ser claro.\nB: El consumidor tiene derecho a saber qué compra.",
 exampleSrc:"A: Food labeling must be clear.\nB: The consumer has the right to know what they are buying.",
 funFact:"The EU's Nutri-Score labeling system was adopted by Spain in 2021 to simplify nutritional information."},

{type:"teach",trg:"la constatación",src:"the verification / confirmation",pos:"noun",gender:"f",
 note:"Feminine noun. The act of verifying or confirming a fact.\nFrom constatar (to verify).",
 example:"A: La constatación de los hechos llevó semanas de investigación.\nB: Pero al final se demostró la verdad.",
 exampleSrc:"A: The verification of the facts took weeks of investigation.\nB: But in the end the truth was demonstrated.",
 funFact:"'Constatar' comes from Latin constatare (to stand firm together). Very common in journalism and law."},

{type:"teach",trg:"la comunicación empresarial",src:"the corporate communication",pos:"noun",gender:"f",
 note:"Feminine noun phrase. How a company communicates internally and externally.",
 example:"A: La comunicación empresarial ha cambiado con las redes sociales.\nB: Ahora todo es más inmediato y directo.",
 exampleSrc:"A: Corporate communication has changed with social media.\nB: Now everything is more immediate and direct.",
 funFact:"Many Spanish universities now offer specific degrees in 'Comunicación Empresarial' or 'Dircom'."},

{type:"mc",q:"¿Qué es un diario digital?",opts:["Un periódico publicado en internet","Un cuaderno de notas electrónico","Una emisora de radio online","Un canal de televisión"],ans:"Un periódico publicado en internet",hint:"A traditional newspaper, but published and read on the web instead of paper."},

{type:"teach",trg:"el galicismo",src:"the Gallicism (French loanword)",pos:"noun",gender:"m",
 note:"Masculine noun. A word or expression borrowed from French.\nLinguistic term.",
 example:"A: 'Garaje' es un galicismo muy común en español.\nB: Viene del francés 'garage'.",
 exampleSrc:"A: 'Garaje' is a very common Gallicism in Spanish.\nB: It comes from the French 'garage'.",
 funFact:"Spanish absorbed many galicismos in the 18th-19th centuries when French was Europe's prestige language."},

{type:"teach",trg:"el americanismo",src:"the Americanism (Latin American word)",pos:"noun",gender:"m",
 note:"Masculine noun. A word or usage from Latin American Spanish.\nLinguistic term.",
 example:"A: 'Computadora' es un americanismo.\nB: En España decimos 'ordenador'.",
 exampleSrc:"A: 'Computadora' is an Americanism.\nB: In Spain we say 'ordenador'.",
 funFact:"The RAE dictionary includes thousands of americanismos, reflecting that 90% of Spanish speakers live in the Americas."},

{type:"teach",trg:"la dirección comercial",src:"the commercial management / business address",pos:"noun",gender:"f",
 note:"Feminine noun phrase. The department managing sales strategy.\nAlso: a business address.",
 example:"A: La dirección comercial ha diseñado una nueva campaña.\nB: Esperan aumentar las ventas un quince por ciento.",
 exampleSrc:"A: The commercial management has designed a new campaign.\nB: They expect to increase sales by fifteen percent.",
 funFact:"'Director/a comercial' is one of the most sought-after positions in Spanish companies."},

{type:"teach",trg:"la dinámica",src:"the dynamic / dynamics",pos:"noun",gender:"f",
 note:"Feminine noun. The pattern of change or interaction.\nAlso adjective: dinámico/a.",
 example:"A: La dinámica del grupo ha mejorado mucho.\nB: Desde que cambiaron al coordinador, todo fluye mejor.",
 exampleSrc:"A: The group dynamics have improved a lot.\nB: Since they changed the coordinator, everything flows better.",
 funFact:"From Greek dynamis (power). 'Dinámica de grupo' (group dynamics) is a key concept in Spanish HR."},

{type:"fb",s:"El {1} de los alimentos debe incluir los alérgenos.",a:["etiquetado"],opts:["etiquetado","gráfico","galicismo","americanismo"],hint:"The system of labels on food products showing ingredients and information.",sSrc:"Food {1} must include allergens."},

{type:"teach",trg:"la finalización",src:"the completion / ending",pos:"noun",gender:"f",
 note:"Feminine noun. The act of finishing or completing something.\nFrom finalizar (to finish).",
 example:"A: La finalización del proyecto está prevista para junio.\nB: Tenemos que acelerar el ritmo.",
 exampleSrc:"A: The completion of the project is planned for June.\nB: We need to speed up the pace.",
 funFact:"In football, 'finalización' means the act of shooting at goal, a crucial attacking skill."},

{type:"teach",trg:"la ideología",src:"the ideology",pos:"noun",gender:"f",
 note:"Feminine noun. A system of ideas and beliefs.\nRelated: ideológico (adjective).",
 example:"A: Su ideología política es muy conservadora.\nB: Pero respeta las opiniones de los demás.",
 exampleSrc:"A: His political ideology is very conservative.\nB: But he respects others' opinions.",
 funFact:"From Greek idea + logos. Spain's political spectrum includes several distinct ideological traditions."},

{type:"teach",trg:"ideológico",src:"ideological",pos:"adj",gender:null,
 note:"Adjective. Relating to ideology or belief systems.\nFeminine: ideológica.",
 example:"A: Las diferencias ideológicas no deberían impedir el diálogo.\nB: Es fundamental hablar con respeto.",
 exampleSrc:"A: Ideological differences should not prevent dialogue.\nB: It is fundamental to talk with respect.",
 funFact:"Spain's 1978 Constitution was achieved despite deep ideological divisions after the Franco era."},

{type:"teach",trg:"idear",src:"to devise / to come up with",pos:"verb",gender:null,
 note:"Regular -ar verb. To think up or create a plan.\nFrom idea.",
 example:"A: ¿Quién ideó esta campaña publicitaria?\nB: El equipo creativo de la agencia.",
 exampleSrc:"A: Who devised this advertising campaign?\nB: The agency's creative team.",
 funFact:"From Latin idea. 'Idear' implies more creativity than 'planificar' (to plan)."},

{type:"mc",q:"¿Qué es un galicismo?",opts:["Una palabra tomada del francés","Un dialecto de Galicia","Un gráfico de datos","Un tipo de medio digital"],ans:"Una palabra tomada del francés",hint:"A linguistic term for a word borrowed from a specific Romance language spoken in France."},

{type:"fb",s:"La {1} del proyecto está prevista para el mes de septiembre.",a:["finalización"],opts:["finalización","constatación","dinámica","ideología"],hint:"The act of completing or finishing something according to plan.",sSrc:"The {1} of the project is planned for September."},

{type:"match",pairs:[{trg:"gráfico",src:"chart"},{trg:"etiquetado",src:"labeling"},{trg:"galicismo",src:"Gallicism"},{trg:"americanismo",src:"Americanism"},{trg:"dinámica",src:"dynamic"}]},

{type:"fb",s:"El equipo creativo {1} una nueva estrategia de marketing.",a:["ideó"],opts:["ideó","etiquetó","constató","finalizó"],hint:"To think up or devise something creative, from the noun 'idea'.",sSrc:"The creative team {1} a new marketing strategy."},

{type:"mc",q:"¿Qué diferencia hay entre 'computadora' y 'ordenador'?",opts:["'Computadora' es un americanismo, 'ordenador' se usa en España","Son sinónimos exactos en toda España","'Ordenador' solo se usa en Cataluña","'Computadora' es más formal"],ans:"'Computadora' es un americanismo, 'ordenador' se usa en España",hint:"One word is the Latin American term, the other is preferred in Peninsular Spanish."}
]};

export default LESSON_12;
