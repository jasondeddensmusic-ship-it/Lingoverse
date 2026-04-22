// Spanish B2 Final Batch - Lesson 7: Education & Academia
const LESSON_7 = {
  id:"esv2_b2fin_l7", title:"Educación y Mundo Académico", icon:"🎓", xp:15, board:true,
  steps:[
    {type:"intro", title:"Educación y Mundo Académico",
     desc:"Master the vocabulary of higher education, research, and academic life. Discuss university systems, scholarships, and teaching methods.",
     goals:["Describe university and academic processes accurately","Discuss research, scholarships, and academic careers","Express opinions about education systems and reforms"]},

    {type:"teach", trg:"la matrícula", src:"enrollment / tuition", pos:"noun", gender:"f",
     note:"Both the act of enrolling at a university and the tuition fee paid.",
     example:"A: ¿Cuánto cuesta la matrícula este año?\nB: La matrícula ha subido un 5% respecto al año pasado.",
     exampleSrc:"A: How much does tuition cost this year?\nB: Tuition has gone up 5% compared to last year.",
     funFact:"From Latin 'matricula' (register). Originally the list of members in a guild or institution."},

    {type:"teach", trg:"la docencia", src:"teaching (profession)", pos:"noun", gender:"f",
     note:"The teaching profession or the act of teaching at an institution.",
     example:"A: Se dedica a la docencia universitaria desde hace veinte años.\nB: La docencia y la investigación van de la mano.",
     exampleSrc:"A: She has been in university teaching for twenty years.\nB: Teaching and research go hand in hand.",
     funFact:"From Latin 'docentia', from 'docere' (to teach). Same root as 'doctor' (learned person) and 'docente'."},

    {type:"teach", trg:"el investigador", src:"the researcher", pos:"noun", gender:"m",
     note:"A person who conducts academic or scientific research.",
     example:"A: Los investigadores publicaron un estudio importante.\nB: Quiero ser investigador en neurociencia.",
     exampleSrc:"A: The researchers published an important study.\nB: I want to be a researcher in neuroscience.",
     funFact:"From 'investigar' (to investigate), Latin 'investigare' (to track/trace). Researchers follow the trail of knowledge."},

    {type:"teach", trg:"el becario", src:"the scholarship holder / intern", pos:"noun", gender:"m",
     note:"A student with a scholarship, or an intern at a company.",
     example:"A: Soy becario de investigación en la universidad.\nB: Los becarios reciben una ayuda mensual.",
     exampleSrc:"A: I'm a research scholarship holder at the university.\nB: Scholarship holders receive a monthly stipend.",
     funFact:"From 'beca' (scholarship). In Spain, 'becario' is also widely used to mean 'intern' at companies."},

    {type:"teach", trg:"la tesis doctoral", src:"the doctoral thesis", pos:"noun", gender:"f",
     note:"The major research project required to earn a PhD.",
     example:"A: ¿Sobre qué es tu tesis doctoral?\nB: Mi tesis doctoral trata sobre lingüística computacional.",
     exampleSrc:"A: What is your doctoral thesis about?\nB: My doctoral thesis is about computational linguistics.",
     funFact:"From Greek 'thesis' (placing/proposition). A doctoral thesis 'places' new knowledge into the field."},

    {type:"teach", trg:"el plan de estudios", src:"the curriculum / syllabus", pos:"noun", gender:"m",
     note:"The structured program of courses and requirements for a degree.",
     example:"A: El plan de estudios incluye prácticas obligatorias.\nB: Revisaron el plan de estudios el año pasado.",
     exampleSrc:"A: The curriculum includes mandatory internships.\nB: They revised the curriculum last year.",
     funFact:"'Plan' from Latin 'planum' (flat surface/map). A curriculum maps out the academic journey."},

    {type:"teach", trg:"la asignatura", src:"the subject / course", pos:"noun", gender:"f",
     note:"A specific subject or course within a degree program.",
     example:"A: ¿Cuántas asignaturas tienes este semestre?\nB: Seis asignaturas, pero dos son optativas.",
     exampleSrc:"A: How many subjects do you have this semester?\nB: Six subjects, but two are electives.",
     funFact:"From Latin 'assignatura' (what is assigned). Each course is 'assigned' to students as part of their plan."},

    {type:"mc", q:"¿Qué significa 'la matrícula' en el contexto universitario?",
     opts:["La inscripción o el pago para estudiar","Una beca de investigación","Un título académico","Un examen final"],
     ans:"La inscripción o el pago para estudiar",
     hint:"This word covers both the enrollment process and the fees you pay to attend university."},

    {type:"teach", trg:"el catedrático", src:"the full professor", pos:"noun", gender:"m",
     note:"The highest academic rank at a Spanish university. Prestigious position.",
     example:"A: El catedrático de historia medieval es muy reconocido.\nB: Para ser catedrático hay que tener años de experiencia.",
     exampleSrc:"A: The full professor of medieval history is well known.\nB: To be a full professor you need years of experience.",
     funFact:"From Latin 'cathedraticus' (of the chair). 'Cathedra' (chair) gave us 'cathedral' and 'cátedra' (professorship)."},

    {type:"teach", trg:"la convocatoria", src:"the exam session / call", pos:"noun", gender:"f",
     note:"An official exam period. Spanish universities typically have two per year.",
     example:"A: ¿En qué convocatoria te presentas al examen?\nB: En la primera convocatoria, en junio.",
     exampleSrc:"A: Which exam session are you sitting the exam in?\nB: In the first session, in June.",
     funFact:"From 'convocar' (to summon/call). Students are 'summoned' to take their exams at set periods."},

    {type:"teach", trg:"aprobar", src:"to pass (an exam)", pos:"verb", gender:null,
     note:"To pass an exam or course. Opposite: 'suspender' (to fail).",
     example:"A: ¿Aprobaste el examen de derecho?\nB: Sí, aprobé con un notable.",
     exampleSrc:"A: Did you pass the law exam?\nB: Yes, I passed with a B.",
     funFact:"From Latin 'approbare' (to regard as good). To pass is to be 'approved' as having sufficient knowledge."},

    {type:"teach", trg:"la beca", src:"the scholarship / grant", pos:"noun", gender:"f",
     note:"Financial aid for students based on merit or need.",
     example:"A: Solicité una beca para estudiar en el extranjero.\nB: Me concedieron una beca completa.",
     exampleSrc:"A: I applied for a scholarship to study abroad.\nB: I was awarded a full scholarship.",
     funFact:"Possibly from Germanic 'bikka' (food allowance for students). In medieval times, scholars received food as aid."},

    {type:"fb", s:"Los {1} del laboratorio publicaron sus resultados en una revista científica.", a:["investigadores"],
     opts:["investigadores","becarios","catedráticos","asignaturas"],
     hint:"These academic professionals conduct studies and experiments in their field.",
     sSrc:"The {1} from the laboratory published their results in a scientific journal."},

    {type:"teach", trg:"la facultad", src:"the faculty / school (university)", pos:"noun", gender:"f",
     note:"A division of a university focused on a specific field. Not the same as 'colegio'.",
     example:"A: Estudio en la Facultad de Medicina.\nB: La facultad organiza conferencias todos los meses.",
     exampleSrc:"A: I study at the Faculty of Medicine.\nB: The faculty organizes conferences every month.",
     funFact:"From Latin 'facultas' (ability/power). Each faculty has the 'power' to grant degrees in its area."},

    {type:"teach", trg:"el expediente académico", src:"the academic transcript", pos:"noun", gender:"m",
     note:"The official record of a student's grades and courses.",
     example:"A: Necesito mi expediente académico para la solicitud.\nB: Puedes descargarlo desde la web de la universidad.",
     exampleSrc:"A: I need my academic transcript for the application.\nB: You can download it from the university website.",
     funFact:"'Expediente' from Latin 'expediens' (freeing). Your transcript 'frees' your record for official use."},

    {type:"teach", trg:"la oposición", src:"the competitive public exam", pos:"noun", gender:"f",
     note:"A competitive exam to enter the Spanish public sector, including teaching.",
     example:"A: ¿Te presentas a las oposiciones de profesor?\nB: Sí, llevo un año preparando las oposiciones.",
     exampleSrc:"A: Are you taking the public teaching exams?\nB: Yes, I've been preparing for the exams for a year.",
     funFact:"Unique to Spain and some Latin American countries. Thousands compete for limited public positions."},

    {type:"mc", q:"¿Qué es una 'oposición' en el sistema educativo español?",
     opts:["Un tipo de beca","Un examen competitivo para acceder a empleo público","Una asignatura universitaria","Un grado académico"],
     ans:"Un examen competitivo para acceder a empleo público",
     hint:"This competitive exam determines who gets permanent positions in Spain's public sector."},

    {type:"teach", trg:"el máster", src:"the master's degree", pos:"noun", gender:"m",
     note:"A postgraduate degree taken after completing a bachelor's.",
     example:"A: Estoy haciendo un máster en administración de empresas.\nB: El máster dura un año o dos, según el programa.",
     exampleSrc:"A: I'm doing a master's in business administration.\nB: The master's lasts one or two years, depending on the program.",
     funFact:"From Latin 'magister' (teacher/master). In Spain, the Bologna Process standardized the structure in 2010."},

    {type:"teach", trg:"el plagio", src:"plagiarism", pos:"noun", gender:"m",
     note:"Copying someone else's work and presenting it as your own.",
     example:"A: El profesor detectó un caso de plagio en el trabajo.\nB: El plagio puede ser muy malo para el estudiante.",
     exampleSrc:"A: The professor detected a case of plagiarism in the paper.\nB: Plagiarism can be very bad for the student.",
     funFact:"From Latin 'plagium' (kidnapping). Plagiarism 'kidnaps' another person's ideas and claims them as yours."},

    {type:"fb", s:"Me concedieron una {1} completa para estudiar en Madrid.", a:["beca"],
     opts:["beca","matrícula","asignatura","oposición"],
     hint:"This financial aid covers your education costs based on merit or need.",
     sSrc:"I was awarded a full {1} to study in Madrid."},

    {type:"match", pairs:[
      {trg:"la docencia", src:"teaching"},
      {trg:"el becario", src:"the scholarship holder"},
      {trg:"la asignatura", src:"the subject"},
      {trg:"aprobar", src:"to pass (an exam)"}
    ]},

    {type:"mc", q:"¿Cuál es el rango académico más alto en una universidad española?",
     opts:["Becario","Investigador","Catedrático","Profesor titular"],
     ans:"Catedrático",
     hint:"This prestigious title comes from Latin 'cathedra' (chair) and represents the top academic rank."},

    {type:"fb", s:"El {1} es un delito académico que puede causar la expulsión del estudiante.", a:["plagio"],
     opts:["plagio","expediente","máster","plan"],
     hint:"This offense involves copying someone else's work and claiming it as your own.",
     sSrc:"{1} is an academic offense that can cause the student's expulsion."},

    {type:"match", pairs:[
      {trg:"la tesis doctoral", src:"the doctoral thesis"},
      {trg:"la convocatoria", src:"the exam session"},
      {trg:"la facultad", src:"the faculty"},
      {trg:"el máster", src:"the master's degree"}
    ]},

    {type:"mc", q:"¿Qué es 'el expediente académico'?",
     opts:["Una beca de investigación","Un plan de estudios","Un examen final","El registro oficial de notas del estudiante"],
     ans:"El registro oficial de notas del estudiante",
     hint:"This official document contains your complete record of grades and courses taken."}
  ]
};
export default LESSON_7;
