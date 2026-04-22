// Spanish B2 Final Batch - Lesson 5: Health & Medicine
const LESSON_5 = {
  id:"esv2_b2fin_l5", title:"Salud y Medicina", icon:"🏥", xp:15, board:true,
  steps:[
    {type:"intro", title:"Salud y Medicina",
     desc:"Learn advanced medical and health vocabulary. Discuss diagnoses, treatments, epidemics, and public health issues with precision.",
     goals:["Describe medical conditions and treatments accurately","Discuss public health and epidemics","Express opinions about healthcare systems and policies"]},

    {type:"teach", trg:"el diagnóstico", src:"the diagnosis", pos:"noun", gender:"m",
     note:"The identification of a disease or condition from its symptoms.",
     example:"A: ¿Cuál fue el diagnóstico del médico?\nB: El diagnóstico fue una infección leve.",
     exampleSrc:"A: What was the doctor's diagnosis?\nB: The diagnosis was a mild infection.",
     funFact:"From Greek 'diagnosis' (discernment). 'Dia-' (through) + 'gnosis' (knowledge): knowing through examination."},

    {type:"teach", trg:"quirúrgico", src:"surgical", pos:"adj", gender:null,
     note:"Related to surgery. Used for procedures, instruments, and teams.",
     example:"A: La intervención quirúrgica duró tres horas.\nB: El equipo quirúrgico fue excelente.",
     exampleSrc:"A: The surgical procedure lasted three hours.\nB: The surgical team was excellent.",
     funFact:"From Greek 'cheirourgikos' (done by hand). 'Cheir' (hand) + 'ergon' (work): surgery is handwork."},

    {type:"teach", trg:"la epidemia", src:"the epidemic", pos:"noun", gender:"f",
     note:"A widespread outbreak of a disease in a community or region.",
     example:"A: La epidemia de gripe afectó a miles de personas.\nB: Las autoridades intentan controlar la epidemia.",
     exampleSrc:"A: The flu epidemic affected thousands of people.\nB: The authorities are trying to control the epidemic.",
     funFact:"From Greek 'epidemia' (upon the people). 'Epi-' (upon) + 'demos' (people). Pandemic adds 'pan-' (all)."},

    {type:"teach", trg:"la vacunación", src:"vaccination", pos:"noun", gender:"f",
     note:"The administration of a vaccine to stimulate immune protection.",
     example:"A: La campaña de vacunación empieza en octubre.\nB: La vacunación infantil es obligatoria en muchos países.",
     exampleSrc:"A: The vaccination campaign starts in October.\nB: Childhood vaccination is mandatory in many countries.",
     funFact:"From Latin 'vacca' (cow). Edward Jenner used cowpox to create the first vaccine in 1796."},

    {type:"teach", trg:"el tratamiento", src:"the treatment", pos:"noun", gender:"m",
     note:"A medical procedure or course of action to cure or manage a condition.",
     example:"A: ¿En qué consiste el tratamiento?\nB: El tratamiento incluye medicación y fisioterapia.",
     exampleSrc:"A: What does the treatment consist of?\nB: The treatment includes medication and physiotherapy.",
     funFact:"From 'tratar' (to treat), Latin 'tractare' (to handle). Same root as English 'treatment'."},

    {type:"teach", trg:"crónico", src:"chronic", pos:"adj", gender:null,
     note:"A condition that persists over a long time. Opposite of 'agudo' (acute).",
     example:"A: El dolor crónico de espalda le impide trabajar.\nB: Las enfermedades crónicas requieren tratamiento continuo.",
     exampleSrc:"A: Chronic back pain prevents him from working.\nB: Chronic diseases require ongoing treatment.",
     funFact:"From Greek 'chronikos' (of time). 'Chronos' means time. A chronic illness is one that lasts a long time."},

    {type:"teach", trg:"el paciente", src:"the patient", pos:"noun", gender:"m",
     note:"A person receiving medical care. Also the adjective meaning 'patient'.",
     example:"A: El paciente espera los resultados de la analítica.\nB: Hay que ser paciente con la recuperación.",
     exampleSrc:"A: The patient is waiting for the blood test results.\nB: You have to be patient with the recovery.",
     funFact:"From Latin 'patiens' (suffering). A patient is literally 'one who suffers' and waits for healing."},

    {type:"mc", q:"¿Qué significa 'quirúrgico'?",
     opts:["Relacionado con la cirugía","Relacionado con la nutrición","Relacionado con la psicología","Relacionado con la farmacia"],
     ans:"Relacionado con la cirugía",
     hint:"This adjective comes from Greek and literally means 'done by hand' in a medical context."},

    {type:"teach", trg:"la sanidad pública", src:"public healthcare", pos:"noun", gender:"f",
     note:"The government-funded healthcare system available to all citizens.",
     example:"A: La sanidad pública en España es de alta calidad.\nB: Millones de personas dependen de la sanidad pública.",
     exampleSrc:"A: Public healthcare in Spain is high quality.\nB: Millions of people depend on public healthcare.",
     funFact:"Spain's public health system (SNS) is ranked among the best in Europe for universal coverage."},

    {type:"teach", trg:"el síntoma", src:"the symptom", pos:"noun", gender:"m",
     note:"A physical or mental sign indicating a disease or condition.",
     example:"A: ¿Cuáles son los síntomas principales?\nB: Fiebre alta, tos y dolor muscular.",
     exampleSrc:"A: What are the main symptoms?\nB: High fever, cough, and muscle pain.",
     funFact:"From Greek 'symptoma' (occurrence). 'Syn-' (together) + 'ptoma' (fall): symptoms 'fall together' with disease."},

    {type:"teach", trg:"el especialista", src:"the specialist", pos:"noun", gender:"m",
     note:"A doctor with advanced training in a specific area of medicine.",
     example:"A: Mi médico me derivó a un especialista.\nB: El especialista en cardiología me atendió rápido.",
     exampleSrc:"A: My doctor referred me to a specialist.\nB: The cardiology specialist saw me quickly.",
     funFact:"From 'especial' (special), Latin 'specialis'. The Spanish system requires a GP referral to see one."},

    {type:"fb", s:"El {1} incluye medicación y sesiones de rehabilitación.", a:["tratamiento"],
     opts:["tratamiento","diagnóstico","síntoma","paciente"],
     hint:"This word refers to the medical plan used to cure or manage a health condition.",
     sSrc:"The {1} includes medication and rehabilitation sessions."},

    {type:"teach", trg:"la receta", src:"the prescription / recipe", pos:"noun", gender:"f",
     note:"A doctor's written order for medication. Also means cooking recipe.",
     example:"A: El médico me dio una receta para antibióticos.\nB: Necesito la receta para comprar este medicamento.",
     exampleSrc:"A: The doctor gave me a prescription for antibiotics.\nB: I need the prescription to buy this medication.",
     funFact:"From Latin 'recepta' (things received). Dual meaning: medical prescription and cooking recipe."},

    {type:"teach", trg:"contagioso", src:"contagious", pos:"adj", gender:null,
     note:"Capable of being transmitted from person to person.",
     example:"A: ¿Es contagiosa esta enfermedad?\nB: Sí, es muy contagiosa durante los primeros días.",
     exampleSrc:"A: Is this disease contagious?\nB: Yes, it's very contagious during the first few days.",
     funFact:"From Latin 'contagio' (touching together). Disease spreads through 'con-' (with) + 'tangere' (to touch)."},

    {type:"teach", trg:"la prevención", src:"prevention", pos:"noun", gender:"f",
     note:"Actions taken to stop disease before it occurs.",
     example:"A: La prevención es mejor que la cura.\nB: Las campañas de prevención salvan muchas vidas.",
     exampleSrc:"A: Prevention is better than cure.\nB: Prevention campaigns save many lives.",
     funFact:"From Latin 'praeventio' (anticipation). 'Prae-' (before) + 'venire' (to come): coming before the problem."},

    {type:"teach", trg:"el quirófano", src:"the operating room", pos:"noun", gender:"m",
     note:"The room in a hospital where surgeries are performed.",
     example:"A: El paciente entró en el quirófano a las ocho.\nB: Solo el equipo médico puede acceder al quirófano.",
     exampleSrc:"A: The patient entered the operating room at eight.\nB: Only the medical team can access the operating room.",
     funFact:"From Greek 'cheir' (hand) + 'phainein' (to show). The operating room 'shows the hand' of the surgeon."},

    {type:"mc", q:"¿Cuál es la diferencia entre una epidemia y una pandemia?",
     opts:["No hay diferencia","La pandemia afecta a más países","La epidemia es más grave","La pandemia solo afecta a animales"],
     ans:"La pandemia afecta a más países",
     hint:"The prefix 'pan-' in Greek means 'all', indicating a much wider geographical spread."},

    {type:"teach", trg:"la analítica", src:"the blood test / analysis", pos:"noun", gender:"f",
     note:"Medical tests, especially blood work. Essential diagnostic tool.",
     example:"A: Los resultados de la analítica son normales.\nB: Me hicieron una analítica completa.",
     exampleSrc:"A: The blood test results are normal.\nB: They did a complete blood analysis on me.",
     funFact:"From Greek 'analytikos' (able to analyze). 'Ana-' (up) + 'lyein' (to loosen): to break something apart."},

    {type:"teach", trg:"la dosis", src:"the dose", pos:"noun", gender:"f",
     note:"The measured amount of medicine prescribed to a patient.",
     example:"A: ¿Cuál es la dosis recomendada?\nB: Dos pastillas al día, una dosis por la mañana y otra por la noche.",
     exampleSrc:"A: What is the recommended dose?\nB: Two pills a day, one dose in the morning and one at night.",
     funFact:"From Greek 'dosis' (giving). A dose is literally the amount 'given' to the patient."},

    {type:"fb", s:"La {1} es mejor que la cura, dicen los médicos.", a:["prevención"],
     opts:["prevención","vacunación","receta","dosis"],
     hint:"This noun means taking action to stop diseases before they occur.",
     sSrc:"{1} is better than cure, doctors say."},

    {type:"match", pairs:[
      {trg:"el diagnóstico", src:"the diagnosis"},
      {trg:"el quirófano", src:"the operating room"},
      {trg:"contagioso", src:"contagious"},
      {trg:"la dosis", src:"the dose"}
    ]},

    {type:"mc", q:"¿Dónde se realizan las operaciones en un hospital?",
     opts:["En el laboratorio","En la farmacia","En el quirófano","En la consulta"],
     ans:"En el quirófano",
     hint:"This sterile room is specially equipped for the surgical team to perform operations."},

    {type:"fb", s:"El médico me dio una {1} para comprar los antibióticos.", a:["receta"],
     opts:["receta","dosis","analítica","prevención"],
     hint:"This written order from a doctor authorizes you to buy specific medication.",
     sSrc:"The doctor gave me a {1} to buy the antibiotics."},

    {type:"match", pairs:[
      {trg:"crónico", src:"chronic"},
      {trg:"la sanidad pública", src:"public healthcare"},
      {trg:"el síntoma", src:"the symptom"},
      {trg:"el especialista", src:"the specialist"}
    ]},

    {type:"mc", q:"¿Qué necesitas para comprar ciertos medicamentos en España?",
     opts:["Un diagnóstico escrito","Una analítica","Una tarjeta de crédito","Una receta médica"],
     ans:"Una receta médica",
     hint:"A doctor must write this document authorizing the pharmacy to dispense the medication."}
  ]
};
export default LESSON_5;
