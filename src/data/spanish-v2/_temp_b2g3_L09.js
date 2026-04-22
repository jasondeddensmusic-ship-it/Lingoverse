// Spanish B2 Gap Batch 3 - Lesson 9: Education & Qualifications
// 15 teach cards + quizzes, max 30 steps

const LESSON_9 = {id:"esv2_b2g3_l9", title:"Educación y cualificaciones", icon:"🎓", xp:15, board:true, steps:[
  {type:"intro", title:"Educación y cualificaciones", desc:"Learn vocabulary for discussing education, qualifications, and professional development. Essential for job interviews and academic contexts.", goals:["Learn 15 education and training terms","Discuss qualifications and credentials","Talk about professional development"]},

  {type:"teach", trg:"la cualificación", src:"the qualification", pos:"noun", gender:"f", note:"Professional skills or credentials.\nAlta cualificación = high qualification.", example:"A: ¿Qué cualificación se necesita para este puesto?\nB: Un máster y cinco años de experiencia.", exampleSrc:"A: What qualification is needed for this position?\nB: A master's degree and five years of experience.", funFact:"Spain uses both cualificación (qualification) and calificación (grade/score). Be careful not to mix them up."},

  {type:"teach", trg:"cualificar", src:"to qualify", pos:"verb", gender:null, note:"To meet the requirements. Also: to give skills.\nTrabajadores cualificados = qualified workers.", example:"A: Este curso te cualifica para trabajar en el sector.\nB: Perfecto, es justo lo que necesito.", exampleSrc:"A: This course qualifies you to work in the sector.\nB: Perfect, it's just what I need.", funFact:"Cualificar vs calificar: cualificar = to meet requirements, calificar = to grade or rate. Different verbs, different meanings."},

  {type:"teach", trg:"el currículo", src:"the curriculum / CV", pos:"noun", gender:"m", note:"Can mean study programme or personal resume.\nAlternate form: currículum (also accepted).", example:"A: Envía tu currículo a la dirección de correo.\nB: ¿Es necesario incluir una carta de presentación?", exampleSrc:"A: Send your CV to the email address.\nB: Is it necessary to include a cover letter?", funFact:"Latin curriculum (course, racing chariot). In Spain, currículo often means CV, while plan de estudios is the study programme."},

  {type:"teach", trg:"la acreditación", src:"accreditation", pos:"noun", gender:"f", note:"Official recognition that standards are met.\nAcreditación universitaria = university accreditation.", example:"A: La universidad ha recibido la acreditación europea.\nB: Eso aumentará el valor de los títulos.", exampleSrc:"A: The university has received European accreditation.\nB: That will increase the value of the degrees.", funFact:"Spain's ANECA agency evaluates university quality. Without acreditación, professors cannot access tenure-track positions."},

  {type:"teach", trg:"la admisión", src:"admission", pos:"noun", gender:"f", note:"The process of being accepted into an institution.\nPrueba de admisión = entrance exam.", example:"A: El plazo de admisión termina el viernes.\nB: Tengo que darme prisa con la solicitud.", exampleSrc:"A: The admission deadline ends on Friday.\nB: I have to hurry with the application.", funFact:"Spain's university entrance exam is called EBAU (Evaluación del Bachillerato para el Acceso a la Universidad), replacing the old Selectividad."},

  {type:"teach", trg:"la asignación", src:"the allocation / assignment", pos:"noun", gender:"f", note:"Resources allocated or a task assigned.\nFrom asignar (to assign).", example:"A: La asignación de presupuesto para becas ha subido.\nB: Era necesario, muchos estudiantes lo necesitan.", exampleSrc:"A: The budget allocation for scholarships has increased.\nB: It was necessary, many students need it.", funFact:"In some Latin American countries, asignación also means a regular allowance or stipend paid to employees."},

  {type:"mc", q:"¿Cuál es la diferencia entre cualificación y calificación?", opts:["Cualificación es competencia profesional; calificación es una nota","Son sinónimos exactos","Cualificación es para niños; calificación para adultos","No hay diferencia"], ans:"Cualificación es competencia profesional; calificación es una nota", hint:"One is about meeting professional requirements, the other is about scores and grades."},

  {type:"teach", trg:"la actualización", src:"the update / refresher", pos:"noun", gender:"f", note:"From actualizar (to update).\nCurso de actualización = refresher course.", example:"A: Necesito una actualización de mis conocimientos informáticos.\nB: Hay un curso online muy bueno y gratuito.", exampleSrc:"A: I need an update of my computer skills.\nB: There's a very good free online course.", funFact:"Actualización is used for both software updates and professional skill updates. Same word for both digital and human upgrades."},

  {type:"teach", trg:"la adecuación", src:"the suitability / adaptation", pos:"noun", gender:"f", note:"From adecuar (to adapt, to make suitable).\nAdecuación al puesto = suitability for the position.", example:"A: Valoramos la adecuación del candidato al perfil.\nB: Su experiencia encaja perfectamente.", exampleSrc:"A: We assess the candidate's suitability for the profile.\nB: His experience fits perfectly.", funFact:"Adecuar has a tricky conjugation: adecuo or adecúo are both accepted by the RAE. Most speakers say adecúo."},

  {type:"teach", trg:"el colegial", src:"the schoolchild", pos:"noun", gender:"m", note:"Male form. Female: la colegial(a).\nFrom colegio (school, typically primary/secondary).", example:"A: Los colegiales salen a las tres de la tarde.\nB: Siempre hay mucho ruido a esa hora.", exampleSrc:"A: The schoolchildren get out at three in the afternoon.\nB: There's always a lot of noise at that time.", funFact:"Colegio in Spain means primary school, NOT university. Colegio mayor is a university residence. Confusing but important."},

  {type:"fb", s:"Este curso te {1} para trabajar como técnico especializado.", a:["cualifica"], opts:["cualifica","acredita","asigna","actualiza"], hint:"Gives you the professional requirements needed to work in this role.", sSrc:"This course {1} you to work as a specialized technician."},

  {type:"teach", trg:"la definición", src:"the definition", pos:"noun", gender:"f", note:"The precise meaning of a word or concept.\nAlso: image resolution (alta definición = high definition).", example:"A: ¿Cuál es la definición exacta de esta palabra?\nB: Busca en el diccionario de la RAE.", exampleSrc:"A: What is the exact definition of this word?\nB: Look it up in the RAE dictionary.", funFact:"The RAE (Real Academia Española) defines all Spanish words. Their dictionary is the ultimate authority on definitions."},

  {type:"teach", trg:"ejemplificar", src:"to exemplify / to illustrate", pos:"verb", gender:null, note:"To give examples to clarify a point.\nFrom ejemplo (example).", example:"A: ¿Puede ejemplificar lo que quiere decir?\nB: Por supuesto, le doy un caso concreto.", exampleSrc:"A: Can you exemplify what you mean?\nB: Of course, I'll give you a specific case.", funFact:"The -ificar suffix creates verbs from nouns: ejemplo > ejemplificar, simple > simplificar, clase > clasificar."},

  {type:"teach", trg:"la clasificación", src:"the classification / ranking", pos:"noun", gender:"f", note:"Sorting into categories or a league table.\nFrom clasificar (to classify).", example:"A: España está en buena posición en la clasificación mundial.\nB: Sí, ha subido tres puestos este año.", exampleSrc:"A: Spain is in a good position in the world ranking.\nB: Yes, it has moved up three places this year.", funFact:"In football, la clasificación means the league table. Clasificarse para el Mundial = to qualify for the World Cup."},

  {type:"mc", q:"¿Qué es un curso de actualización?", opts:["Un curso de cocina","Un curso para renovar conocimientos profesionales","Un curso para principiantes","Un curso de historia antigua"], ans:"Un curso para renovar conocimientos profesionales", hint:"A refresher course that brings your professional skills up to date."},

  {type:"match", pairs:[{trg:"cualificación", src:"qualification"},{trg:"acreditación", src:"accreditation"},{trg:"admisión", src:"admission"},{trg:"currículo", src:"CV / curriculum"},{trg:"clasificación", src:"ranking"}]},

  {type:"fb", s:"La {1} universitaria es un requisito para los profesores.", a:["acreditación"], opts:["acreditación","admisión","clasificación","definición"], hint:"Official recognition that someone or something meets established quality standards.", sSrc:"University {1} is a requirement for professors."},

  {type:"mc", q:"En España, 'colegio' normalmente significa...", opts:["Oficina","Hospital","Escuela primaria","Universidad"], ans:"Escuela primaria", hint:"Unlike 'college' in English, this word in Spain refers to where young children study."},

  {type:"fb", s:"El plazo de {1} para el máster termina en septiembre.", a:["admisión"], opts:["admisión","asignación","actualización","adecuación"], hint:"The process of being accepted into an academic programme.", sSrc:"The {1} deadline for the master's programme ends in September."}
]};

export default LESSON_9;
