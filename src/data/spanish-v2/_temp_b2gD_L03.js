// B2 Gap Batch D Lesson 3 - Science & Chemistry
const LESSON_3 = {id:"esv2_b2gD_l3",title:"Ciencia y naturaleza",icon:"\uD83E\uDDEA",xp:15,board:true,steps:[
{type:"intro",title:"Ciencia y naturaleza",desc:"Build your scientific vocabulary in Spanish. Essential terms for discussing environmental and health topics at B2 level.",goals:["Learn 10 science and nature vocabulary items","Discuss environmental issues with precision","Use scientific terminology in context"]},

{type:"teach",trg:"el nitrógeno",src:"the nitrogen",pos:"noun",gender:"m",
 note:"Masculine noun. Chemical element making up 78% of air.\nSymbol: N. Essential for plant growth.",
 example:"A: El nitrógeno es el elemento más abundante en la atmósfera.\nB: Sin embargo, las plantas no pueden absorberlo directamente del aire.",
 exampleSrc:"A: Nitrogen is the most abundant element in the atmosphere.\nB: However, plants cannot absorb it directly from the air.",
 funFact:"The word comes from Greek 'nitron' (saltpeter) + 'genes' (forming). Lavoisier named it 'azote' in French, meaning 'lifeless'."},

{type:"teach",trg:"el ozono",src:"the ozone",pos:"noun",gender:"m",
 note:"Masculine noun. A molecule of three oxygen atoms (O3).\nForms a protective layer in the stratosphere.",
 example:"A: La capa de ozono protege la Tierra de la radiación ultravioleta.\nB: Afortunadamente, el agujero se está reduciendo lentamente.",
 exampleSrc:"A: The ozone layer protects Earth from ultraviolet radiation.\nB: Fortunately, the hole is slowly shrinking.",
 funFact:"The word 'ozono' comes from Greek 'ozein' (to smell). Ozone has a distinctive sharp smell detectable after thunderstorms."},

{type:"teach",trg:"el nitrato",src:"the nitrate",pos:"noun",gender:"m",
 note:"Masculine noun. A chemical compound with nitrogen and oxygen.\nUsed in fertilizers and food preservation.",
 example:"A: Los nitratos en el agua de riego pueden contaminar los acuíferos.\nB: Por eso se regulan las cantidades permitidas en agricultura.",
 exampleSrc:"A: Nitrates in irrigation water can contaminate aquifers.\nB: That's why the permitted amounts in agriculture are regulated.",
 funFact:"Spain's intensive agriculture in Murcia and Almería has caused nitrate contamination in groundwater, a major EU concern."},

{type:"teach",trg:"la neumonía",src:"the pneumonia",pos:"noun",gender:"f",
 note:"Feminine noun. An infection that inflames the lungs.\nCan be caused by bacteria, viruses, or fungi.",
 example:"A: Mi abuela estuvo ingresada dos semanas por una neumonía.\nB: A su edad, estas infecciones pueden ser muy graves.",
 exampleSrc:"A: My grandmother was hospitalized for two weeks with pneumonia.\nB: At her age, these infections can be very serious.",
 funFact:"The initial 'p' in the Greek root 'pneumon' (lung) is silent in English but partially audible in Spanish 'neumonía'."},

{type:"mc",q:"El nitrógeno constituye aproximadamente el...",opts:["78% de la atmósfera","21% de la atmósfera","50% del agua","10% del suelo"],ans:"78% de la atmósfera",hint:"This element dominates our atmosphere by a wide margin, far more than oxygen."},

{type:"teach",trg:"la obesidad",src:"the obesity",pos:"noun",gender:"f",
 note:"Feminine noun. Excessive body fat that poses health risks.\nFrom Latin obesitas (fatness).",
 example:"A: La obesidad infantil es un problema creciente en España.\nB: Se necesitan más programas de alimentación saludable en los colegios.",
 exampleSrc:"A: Childhood obesity is a growing problem in Spain.\nB: More healthy eating programs are needed in schools.",
 funFact:"Spain has one of the highest childhood obesity rates in Europe, roughly 18%, prompting government campaigns for healthier school meals."},

{type:"teach",trg:"el mecanismo",src:"the mechanism",pos:"noun",gender:"m",
 note:"Masculine noun. A system of parts working together.\nAlso used figuratively: the mechanism of a process.",
 example:"A: Los científicos han descubierto el mecanismo que causa esa enfermedad.\nB: Este avance podría llevar a nuevos tratamientos.",
 exampleSrc:"A: Scientists have discovered the mechanism that causes that disease.\nB: This breakthrough could lead to new treatments.",
 funFact:"In political Spanish, 'mecanismo de control' (control mechanism) is used for oversight systems, blending technical and bureaucratic language."},

{type:"teach",trg:"la metodología",src:"the methodology",pos:"noun",gender:"f",
 note:"Feminine noun. A systematic approach to research or work.\nFrom método (method) + -logía (study of).",
 example:"A: La metodología de este estudio es muy rigurosa.\nB: Han utilizado una muestra de más de diez mil personas.",
 exampleSrc:"A: The methodology of this study is very rigorous.\nB: They used a sample of over ten thousand people.",
 funFact:"Academic Spanish heavily uses 'metodología' in research papers. Every Spanish university thesis must have a dedicated methodology chapter."},

{type:"fb",s:"La capa de {1} protege la Tierra de los rayos ultravioleta.",a:["ozono"],opts:["ozono","nitrógeno","nitrato","mecanismo"],hint:"A three-atom oxygen molecule forming a protective shield in Earth's upper atmosphere.",sSrc:"The {1} layer protects Earth from ultraviolet rays."},

{type:"teach",trg:"la aspiración",src:"the aspiration / ambition",pos:"noun",gender:"f",
 note:"Feminine noun. A strong desire or goal.\nAlso medical: the act of breathing in.",
 example:"A: Su mayor aspiración es dirigir su propia empresa.\nB: Con su talento y esfuerzo, seguro que lo consigue.",
 exampleSrc:"A: Her greatest aspiration is to run her own company.\nB: With her talent and effort, she'll surely achieve it.",
 funFact:"In phonetics, 'aspiración' refers to the puff of air in sounds like 'p' in English 'pin'. Spanish stops are generally unaspirated."},

{type:"teach",trg:"la consistencia",src:"the consistency / texture",pos:"noun",gender:"f",
 note:"Feminine noun. The firmness or density of a substance.\nAlso means steadiness or reliability.",
 example:"A: La salsa tiene que tener una consistencia cremosa.\nB: Añade un poco más de harina para espesarla.",
 exampleSrc:"A: The sauce needs to have a creamy consistency.\nB: Add a little more flour to thicken it.",
 funFact:"Unlike English, 'consistencia' primarily means physical texture. For behavioral consistency, Spanish prefers 'coherencia'."},

{type:"match",pairs:[
 {trg:"nitrógeno",src:"nitrogen"},
 {trg:"ozono",src:"ozone"},
 {trg:"neumonía",src:"pneumonia"},
 {trg:"metodología",src:"methodology"},
 {trg:"obesidad",src:"obesity"}
]},

{type:"mc",q:"Los nitratos se utilizan principalmente en...",opts:["Agricultura y fertilizantes","Construcción de edificios","Fabricación de ropa","Producción de energía solar"],ans:"Agricultura y fertilizantes",hint:"These compounds provide essential nitrogen for plant growth in farming."},

{type:"fb",s:"La {1} del estudio fue revisada por expertos independientes.",a:["metodología"],opts:["metodología","neumonía","aspiración","consistencia"],hint:"The systematic approach and procedures used to conduct scientific research.",sSrc:"The {1} of the study was reviewed by independent experts."},

{type:"mc",q:"La aspiración puede significar...",opts:["Un deseo fuerte o el acto de respirar","Un tipo de enfermedad pulmonar","Una reacción química","Un instrumento médico"],ans:"Un deseo fuerte o el acto de respirar",hint:"This word has both a motivational meaning (goal) and a physical one (inhaling)."}
]};
export default LESSON_3;
