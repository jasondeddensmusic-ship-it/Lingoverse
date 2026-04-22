// B2 Gap Batch 6 Lesson 06 - Education & Academia
const LESSON_6 = {id:"esv2_b2g6_l6",title:"Educación y academia",icon:"🎓",xp:15,board:true,steps:[
{type:"intro",title:"Educación y academia",desc:"Master vocabulary for discussing education, academic life, and intellectual pursuits.",goals:["Learn 15 education and academic terms","Discuss educational systems and processes","Use academic register confidently"]},

{type:"teach",trg:"el intelecto",src:"the intellect",pos:"noun",gender:"m",
 note:"Masculine noun. The capacity for rational thought.\nFrom Latin intellectus.",
 example:"A: Su intelecto es admirable.\nB: Sí, es una de las mentes más brillantes del país.",
 exampleSrc:"A: His intellect is admirable.\nB: Yes, he is one of the most brilliant minds in the country.",
 funFact:"From Latin intellegere (to understand). The prefix inter- (between) + legere (to choose/read)."},

{type:"teach",trg:"intelectual",src:"intellectual",pos:"adj",gender:null,
 note:"Adjective. Related to the intellect or thinking.\nAlso used as a noun: el/la intelectual.",
 example:"A: Es una persona muy intelectual.\nB: Le encanta la filosofía y la literatura.",
 exampleSrc:"A: He is a very intellectual person.\nB: He loves philosophy and literature.",
 funFact:"In Spain, 'los intelectuales' historically played a major political role, especially the Generation of '98."},

{type:"teach",trg:"la educación física",src:"physical education",pos:"noun",gender:"f",
 note:"Feminine noun phrase. School subject for sports\nand physical activity.",
 example:"A: ¿Te gustaba la educación física en el colegio?\nB: Sí, era mi asignatura favorita.",
 exampleSrc:"A: Did you like physical education at school?\nB: Yes, it was my favorite subject.",
 funFact:"In Spain, students say 'gimnasia' informally. The official name is 'educación física'."},

{type:"teach",trg:"el examinando",src:"the examinee / test-taker",pos:"noun",gender:"m",
 note:"Masculine noun. A person taking an exam.\nFeminine: la examinanda. From examinar.",
 example:"A: Los examinandos deben llegar treinta minutos antes.\nB: ¿Pueden llevar diccionario?",
 exampleSrc:"A: The examinees must arrive thirty minutes early.\nB: Can they bring a dictionary?",
 funFact:"A very formal word. In everyday Spanish, people say 'el alumno' or 'el estudiante' instead."},

{type:"mc",q:"¿Qué es un examinando?",opts:["Una persona que hace un examen","Un profesor que pone exámenes","Una asignatura obligatoria","Un libro de texto"],ans:"Una persona que hace un examen",hint:"The person who sits an exam, the one being examined."},

{type:"teach",trg:"la agronomía",src:"agronomy",pos:"noun",gender:"f",
 note:"Feminine noun. The science of soil and crop management.\nAgro (field) + nomos (law/management).",
 example:"A: Estudió agronomía en la universidad.\nB: Ahora trabaja mejorando cultivos en Andalucía.",
 exampleSrc:"A: She studied agronomy at university.\nB: Now she works improving crops in Andalusia.",
 funFact:"From Greek agros (field) + nomos (management). Spain's agricultural regions rely heavily on agronomists."},

{type:"teach",trg:"la complementación",src:"the complementation / supplementing",pos:"noun",gender:"f",
 note:"Feminine noun. The act of completing or supplementing.\nFrom complementar (to complement).",
 example:"A: La complementación teórica y práctica es esencial.\nB: No basta con estudiar solo los libros.",
 exampleSrc:"A: The complementation of theory and practice is essential.\nB: Studying only books is not enough.",
 funFact:"In linguistics, 'complementación' refers to how clauses complete a verb's meaning."},

{type:"teach",trg:"inculcar",src:"to instill / to inculcate",pos:"verb",gender:null,
 note:"Regular -ar verb. To teach values or ideas deeply.\nFrom Latin inculcare (to press in).",
 example:"A: Mis padres me inculcaron el valor del trabajo.\nB: Se nota, eres muy responsable.",
 exampleSrc:"A: My parents instilled the value of hard work in me.\nB: It shows, you are very responsible.",
 funFact:"Latin inculcare literally meant 'to tread upon'. You press values into someone's mind."},

{type:"fb",s:"La universidad ofrece la {1} de teoría con prácticas profesionales.",a:["complementación"],opts:["complementación","agronomía","educación física","examinando"],hint:"The process of supplementing one thing with another.",sSrc:"The university offers the {1} of theory with professional internships."},

{type:"teach",trg:"el acondicionamiento",src:"the conditioning / fitting out",pos:"noun",gender:"m",
 note:"Masculine noun. Preparing or adapting something.\nFrom acondicionar (to condition/prepare).",
 example:"A: El acondicionamiento del nuevo laboratorio costó mucho.\nB: Pero ahora tiene equipos de primera.",
 exampleSrc:"A: The fitting out of the new laboratory was expensive.\nB: But now it has top equipment.",
 funFact:"'Acondicionamiento físico' means physical conditioning. 'Aire acondicionado' is air conditioning."},

{type:"teach",trg:"la adecuación",src:"the adaptation / suitability",pos:"noun",gender:"f",
 note:"Feminine noun. The process of making something suitable.\nFrom adecuar (to adapt).",
 example:"A: La adecuación del plan de estudios es necesaria.\nB: Los contenidos estaban obsoletos.",
 exampleSrc:"A: The adaptation of the curriculum is necessary.\nB: The contents were outdated.",
 funFact:"From Latin adaequare (to make equal to). Making something fit its purpose."},

{type:"teach",trg:"la genialidad",src:"the genius / stroke of genius",pos:"noun",gender:"f",
 note:"Feminine noun. An act of genius or brilliance.\nFrom genial + -idad.",
 example:"A: Esa idea fue una genialidad.\nB: A veces las mejores ideas son las más simples.",
 exampleSrc:"A: That idea was a stroke of genius.\nB: Sometimes the best ideas are the simplest ones.",
 funFact:"'Genial' in Spanish means 'brilliant/great' in everyday speech, not just related to genius."},

{type:"mc",q:"¿Qué significa inculcar?",opts:["Acondicionar un espacio","Enseñar valores profundamente","Estudiar agronomía","Hacer un examen"],ans:"Enseñar valores profundamente",hint:"When parents press values deeply into their children's minds."},

{type:"match",pairs:[
  {trg:"intelecto",src:"intellect"},
  {trg:"agronomía",src:"agronomy"},
  {trg:"inculcar",src:"to instill"},
  {trg:"adecuación",src:"adaptation"},
  {trg:"genialidad",src:"stroke of genius"}
]},

{type:"fb",s:"Mis abuelos me {1} el respeto por la naturaleza.",a:["inculcaron"],opts:["inculcaron","examinaron","adecuaron","acondicionaron"],hint:"The verb for deeply teaching values to someone.",sSrc:"My grandparents {1} respect for nature in me."}
]};
export default LESSON_6;
