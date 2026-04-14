// B2 Gap Batch 5 Lesson 09 - Work & Professional Life
const LESSON_9 = {id:"esv2_b2g5_l9",title:"Vida profesional",icon:"👔",xp:15,board:true,steps:[
{type:"intro",title:"Vida profesional",desc:"Learn vocabulary for professional roles, workplace dynamics, and career development.",goals:["Learn 15 words about professional life","Discuss workplace roles and career paths","Use formal professional register"]},

{type:"teach",trg:"la directora ejecutiva",src:"the CEO / executive director (f)",pos:"noun",gender:"f",
 note:"Feminine noun phrase. The highest-ranking executive.\nMasculine: el director ejecutivo.",
 example:"A: La directora ejecutiva anunció la nueva estrategia.\nB: La empresa cambiará de rumbo el próximo año.",
 exampleSrc:"A: The CEO announced the new strategy.\nB: The company will change direction next year.",
 funFact:"Spain has been increasing female CEO representation, though it still lags behind Nordic countries."},

{type:"teach",trg:"la directora de ventas",src:"the sales director (f)",pos:"noun",gender:"f",
 note:"Feminine noun phrase. Head of the sales department.\nMasculine: el director de ventas.",
 example:"A: La directora de ventas superó los objetivos del trimestre.\nB: Su equipo es el más productivo.",
 exampleSrc:"A: The sales director exceeded the quarterly targets.\nB: Her team is the most productive.",
 funFact:"In Spain, 'director/a de ventas' and 'director/a comercial' are often interchangeable titles."},

{type:"teach",trg:"el director de producción",src:"the production director",pos:"noun",gender:"m",
 note:"Masculine noun phrase. Head of manufacturing or content production.",
 example:"A: El director de producción supervisa toda la cadena.\nB: Desde la materia prima hasta el producto final.",
 exampleSrc:"A: The production director supervises the entire chain.\nB: From raw materials to the finished product.",
 funFact:"In film, the 'director de producción' handles logistics and budget, not creative decisions."},

{type:"teach",trg:"el graduado",src:"the graduate",pos:"noun",gender:"m",
 note:"Masculine noun. Someone who has completed a degree.\nFeminine: la graduada.",
 example:"A: Los graduados en ingeniería tienen mucha demanda.\nB: Las empresas tecnológicas los buscan constantemente.",
 exampleSrc:"A: Engineering graduates are in high demand.\nB: Tech companies constantly seek them.",
 funFact:"Since the Bologna Process, Spain uses 'grado' (bachelor's) + 'máster' + 'doctorado' for university levels."},

{type:"teach",trg:"la especialización",src:"the specialization",pos:"noun",gender:"f",
 note:"Feminine noun. The process of becoming an expert in a field.\nFrom especializarse.",
 example:"A: ¿Cuál es tu especialización?\nB: Me especialicé en derecho internacional.",
 exampleSrc:"A: What is your specialization?\nB: I specialized in international law.",
 funFact:"Spanish doctors complete their specialization through the MIR exam, one of Spain's toughest tests."},

{type:"mc",q:"¿Qué hace la directora ejecutiva?",opts:["Dirige la empresa al más alto nivel","Vende productos directamente","Supervisa la cadena de producción","Realiza entrevistas de trabajo"],ans:"Dirige la empresa al más alto nivel",hint:"The highest-ranking person in a company, making the biggest strategic decisions."},

{type:"teach",trg:"el colegial",src:"the schoolchild",pos:"noun",gender:"m",
 note:"Masculine noun. A child attending school.\nFeminine: la colegial. From colegio.",
 example:"A: Los colegiales salen a las tres de la tarde.\nB: Siempre los veo jugando en el parque después.",
 exampleSrc:"A: The schoolchildren leave at three in the afternoon.\nB: I always see them playing in the park afterwards.",
 funFact:"In Spain, 'colegio' means primary school, while 'instituto' is secondary school (a common confusion)."},

{type:"teach",trg:"la educación física",src:"the physical education",pos:"noun",gender:"f",
 note:"Feminine noun phrase. School subject focused on sports and fitness.\nAbbreviated: EF.",
 example:"A: La educación física es obligatoria en todos los colegios.\nB: Los niños necesitan moverse más.",
 exampleSrc:"A: Physical education is compulsory in all schools.\nB: Children need to move more.",
 funFact:"Spain requires at least two hours of physical education per week in primary and secondary schools."},

{type:"teach",trg:"la definición",src:"the definition",pos:"noun",gender:"f",
 note:"Feminine noun. A clear explanation of meaning.\nAlso: image sharpness (alta definición).",
 example:"A: ¿Cuál es la definición exacta de esa palabra?\nB: Busca en el diccionario de la Real Academia.",
 exampleSrc:"A: What is the exact definition of that word?\nB: Look it up in the Royal Academy dictionary.",
 funFact:"The RAE (Real Academia Española) dictionary has been defining Spanish words since 1726."},

{type:"teach",trg:"la adecuación",src:"the suitability / adaptation",pos:"noun",gender:"f",
 note:"Feminine noun. The quality of being appropriate or well-adapted.\nFrom adecuar (to adapt).",
 example:"A: La adecuación del edificio a las normas llevó meses.\nB: Pero ahora cumple todos los requisitos.",
 exampleSrc:"A: Adapting the building to regulations took months.\nB: But now it meets all requirements.",
 funFact:"In linguistics, 'adecuación' means using the right register for the situation (formal vs. informal)."},

{type:"fb",s:"Los {1} en medicina tienen que hacer seis años de carrera.",a:["graduados"],opts:["graduados","colegiales","directores","conductores"],hint:"People who have completed a university degree program.",sSrc:"The {1} in medicine have to do six years of study."},

{type:"teach",trg:"el condicional",src:"the conditional (tense)",pos:"noun",gender:"m",
 note:"Masculine noun. The verb tense expressing hypothetical actions.\nExample: haría, comería.",
 example:"A: El condicional se usa para expresar deseos o hipótesis.\nB: Como 'me gustaría viajar a Japón'.",
 exampleSrc:"A: The conditional is used to express wishes or hypotheses.\nB: Like 'I would like to travel to Japan'.",
 funFact:"The Spanish conditional evolved from Latin infinitive + habere, literally 'to do I had' > 'I would do'."},

{type:"teach",trg:"la complementación",src:"the complementing / completion",pos:"noun",gender:"f",
 note:"Feminine noun. The act of completing or supplementing.\nFrom complementar (to complement).",
 example:"A: La complementación entre los dos equipos fue excelente.\nB: Cada uno aportó lo que al otro le faltaba.",
 exampleSrc:"A: The complementing between the two teams was excellent.\nB: Each contributed what the other lacked.",
 funFact:"In grammar, 'complementación' refers to how complements complete the meaning of a verb."},

{type:"teach",trg:"hacendoso",src:"hardworking / industrious (at home)",pos:"adj",gender:null,
 note:"Adjective. Diligent especially with household tasks.\nFeminine: hacendosa.",
 example:"A: Mi madre es muy hacendosa, siempre tiene la casa perfecta.\nB: Es admirable su energía.",
 exampleSrc:"A: My mother is very industrious, she always keeps the house perfect.\nB: Her energy is admirable.",
 funFact:"From hacienda (estate/household). Unlike 'trabajador' (general), 'hacendoso' specifically implies domestic diligence."},

{type:"teach",trg:"el estándar",src:"the standard",pos:"noun",gender:"m",
 note:"Masculine noun. An accepted level of quality or achievement.\nAlso adjective: estándar.",
 example:"A: Este producto no cumple los estándares de calidad.\nB: Hay que mejorar el proceso de fabricación.",
 exampleSrc:"A: This product does not meet the quality standards.\nB: The manufacturing process needs to be improved.",
 funFact:"From English 'standard'. The RAE accepted 'estándar' with the accent, adapting it to Spanish spelling rules."},

{type:"mc",q:"¿Qué es la especialización?",opts:["Convertirse en experto en un campo concreto","Cambiar de trabajo frecuentemente","Trabajar en varios departamentos","Dirigir una empresa grande"],ans:"Convertirse en experto en un campo concreto",hint:"The process of focusing deeply on one particular area of knowledge or skill."},

{type:"fb",s:"La {1} del espacio al nuevo uso requirió una reforma completa.",a:["adecuación"],opts:["adecuación","definición","complementación","especialización"],hint:"The process of making something suitable or appropriate for a purpose.",sSrc:"The {1} of the space to its new use required a complete renovation."},

{type:"match",pairs:[{trg:"graduado",src:"graduate"},{trg:"colegial",src:"schoolchild"},{trg:"estándar",src:"standard"},{trg:"condicional",src:"conditional tense"},{trg:"especialización",src:"specialization"}]},

{type:"fb",s:"Mi abuela era muy {1} y siempre tenía la casa impecable.",a:["hacendosa"],opts:["hacendosa","ejecutiva","fluctuante","glaciar"],hint:"An adjective meaning diligent and hardworking, especially with household tasks.",sSrc:"My grandmother was very {1} and always kept the house spotless."},

{type:"mc",q:"¿Qué es el condicional en español?",opts:["Un tiempo verbal para hipótesis y deseos","Un tipo de contrato laboral","Una especialización universitaria","Un estándar de calidad"],ans:"Un tiempo verbal para hipótesis y deseos",hint:"The verb tense you use with 'would' in English, like 'I would go' or 'I would like'."}
]};

export default LESSON_9;
