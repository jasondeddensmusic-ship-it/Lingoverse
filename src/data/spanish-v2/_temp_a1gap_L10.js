// L10: Learning & Work — School, study, and professional life
const LESSON_10 = {
  id:"esv2_a1gap_l10", title:"Aprender y trabajar", icon:"\u{1F4DA}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Aprender y trabajar",
     desc:"Talk about school, studying, and work. Essential vocabulary for academic and professional life.",
     goals:["Learn 20 words about learning and work","Describe your studies or job","Use academic vocabulary in context"]},

    {type:"teach", trg:"la academia", src:"the academy", pos:"noun", gender:"f",
     note:"Feminine noun. Academia de idiomas = language school.\nAlso: academy (institution).",
     example:"A: Voy a una academia de inglés.\nB: \u00bfCuántas horas a la semana?",
     exampleSrc:"A: I go to an English language school.\nB: How many hours per week?",
     funFact:"From Greek 'Akademia', the grove near Athens where Plato taught. Every language school carries this ancient name."},

    {type:"teach", trg:"aprender", src:"to learn", pos:"verb", gender:null,
     note:"Regular -er verb. Aprendo, aprendes, aprende...\nAlready seen in L09, now in academic context.",
     example:"A: \u00bfQué aprendes en la academia?\nB: Aprendo francés y alemán.",
     exampleSrc:"A: What do you learn at the academy?\nB: I learn French and German.",
     funFact:"From Latin 'apprehendere' (to grasp). The related noun 'aprendizaje' (learning) is essential in academic Spanish."},

    {type:"teach", trg:"el aprendizaje", src:"the learning (process)", pos:"noun", gender:"m",
     note:"Masculine noun. El proceso de aprendizaje = the learning process.\nFrom aprender + -aje.",
     example:"A: El aprendizaje de idiomas es divertido.\nB: Sí, si tienes un buen profesor.",
     exampleSrc:"A: Language learning is fun.\nB: Yes, if you have a good teacher.",
     funFact:"The -aje suffix creates process/result nouns: aprendizaje (learning), viaje (travel), paisaje (landscape)."},

    {type:"teach", trg:"la actividad", src:"the activity", pos:"noun", gender:"f",
     note:"Feminine noun. Actividad física = physical activity.\nActividades extraescolares = extracurricular.",
     example:"A: \u00bfQué actividades haces?\nB: Natación y pintura.",
     exampleSrc:"A: What activities do you do?\nB: Swimming and painting.",
     funFact:"From Latin 'activitas'. The -idad suffix (like English -ity) creates abstract nouns: actividad, universidad, ciudad."},

    {type:"teach", trg:"actual", src:"current, present-day", pos:"adj", gender:null,
     note:"Adjective. FALSE FRIEND: does NOT mean 'actual' in English.\n'Actual' = current. 'Real' = actual.",
     example:"A: \u00bfCuál es tu trabajo actual?\nB: Soy profesora.",
     exampleSrc:"A: What is your current job?\nB: I am a teacher.",
     funFact:"Classic false friend. 'Actual' in Spanish means 'current/present-day', NOT 'actual/real'. 'En la actualidad' = nowadays."},

    {type:"teach", trg:"la actualidad", src:"the present time, nowadays", pos:"noun", gender:"f",
     note:"Feminine noun. En la actualidad = nowadays.\nAnother false friend: not 'actuality'.",
     example:"A: En la actualidad mucha gente trabaja desde casa.\nB: Sí, es muy común.",
     exampleSrc:"A: Nowadays many people work from home.\nB: Yes, it is very common.",
     funFact:"'En la actualidad' is one of the most useful phrases for discussing modern trends and current affairs."},

    {type:"mc",
     q:"\u00bfQué significa 'actual' en español?",
     opts:["current","actual","active","acting"],
     ans:"current",
     hint:"This is a famous false friend. It does NOT mean the same as the English word that looks identical."},

    {type:"teach", trg:"actuar", src:"to act, to perform", pos:"verb", gender:null,
     note:"Regular -ar verb (u gets accent: actúo). Actúo, actúas, actúa...\nUsed for theater and behavior.",
     example:"A: Actúa en el teatro municipal.\nB: \u00bfEn qué obra?",
     exampleSrc:"A: He/she acts at the municipal theater.\nB: In which play?",
     funFact:"From Latin 'actuare'. The accent on the u is required: actúo, not actuo. Without it, the pronunciation changes."},

    {type:"teach", trg:"la actuación", src:"the performance", pos:"noun", gender:"f",
     note:"Feminine noun. Buena actuación = good performance.\nCan mean acting or behavior.",
     example:"A: Su actuación fue brillante.\nB: Sí, merece un premio.",
     exampleSrc:"A: His/her performance was brilliant.\nB: Yes, he/she deserves an award.",
     funFact:"From 'actuar' + -ción. Can refer to a stage performance, an athlete's performance, or someone's behavior."},

    {type:"teach", trg:"analizar", src:"to analyze", pos:"verb", gender:null,
     note:"Regular -ar verb (z > c before e). Analizo, analizas...\nAnalizar datos = to analyze data.",
     example:"A: Tenemos que analizar los resultados.\nB: De acuerdo, empiezo ahora.",
     exampleSrc:"A: We need to analyze the results.\nB: Okay, I will start now.",
     funFact:"From Greek 'analyein' (to loosen, to undo). Analysis means breaking something apart to understand it."},

    {type:"teach", trg:"la aplicación", src:"the application, app", pos:"noun", gender:"f",
     note:"Feminine noun. App on a phone, or application for a job.\nBoth meanings common.",
     example:"A: Descarga esta aplicación.\nB: \u00bfPara qué sirve?",
     exampleSrc:"A: Download this app.\nB: What is it for?",
     funFact:"In modern Spanish, 'aplicación' or shortened 'app' is used daily for phone applications. Also means a job application."},

    {type:"fb",
     s:"En la {1} mucha gente trabaja desde casa.",
     a:["actualidad"],
     opts:["actualidad","academia","aplicación","actividad"],
     hint:"This noun means 'the present time' or 'nowadays'. It is NOT 'actuality' in English.",
     sSrc:"In the present day, many people work from home."},

    {type:"teach", trg:"el acuerdo", src:"the agreement", pos:"noun", gender:"m",
     note:"Masculine noun. De acuerdo = okay, agreed.\nLlegar a un acuerdo = to reach an agreement.",
     example:"A: \u00bfEstamos de acuerdo?\nB: Sí, de acuerdo.",
     exampleSrc:"A: Are we in agreement?\nB: Yes, agreed.",
     funFact:"'De acuerdo' (okay, agreed) is one of the most common Spanish expressions. You will hear it dozens of times daily."},

    {type:"teach", trg:"el acto", src:"the act, event", pos:"noun", gender:"m",
     note:"Masculine noun. Acto público = public event.\nEn el acto = on the spot.",
     example:"A: Hay un acto en la universidad.\nB: \u00bfA qué hora?",
     exampleSrc:"A: There is an event at the university.\nB: At what time?",
     funFact:"From Latin 'actus'. 'En el acto' (on the spot, immediately) is a useful everyday expression."},

    {type:"teach", trg:"adaptar", src:"to adapt", pos:"verb", gender:null,
     note:"Regular -ar verb. Reflexive: adaptarse = to adapt oneself.\nMe adapto rápido = I adapt quickly.",
     example:"A: \u00bfTe adaptas bien al nuevo trabajo?\nB: Sí, poco a poco.",
     exampleSrc:"A: Are you adapting well to the new job?\nB: Yes, little by little.",
     funFact:"From Latin 'adaptare' (to fit to). 'Poco a poco' (little by little) is a classic Spanish expression for gradual progress."},

    {type:"teach", trg:"además", src:"besides, moreover", pos:"adv", gender:null,
     note:"Adverb. Very common connector.\nAdemás de = in addition to.",
     example:"A: Habla español y además francés.\nB: \u00bfDe verdad? Qué impresionante.",
     exampleSrc:"A: He speaks Spanish and also French.\nB: Really? How impressive.",
     funFact:"From 'a' + 'demás' (the rest). Literally 'to the rest/moreover'. Essential linking word in both speech and writing."},

    {type:"teach", trg:"afirmar", src:"to affirm, to state", pos:"verb", gender:null,
     note:"Regular -ar verb. Afirmo, afirmas...\nFormal word for 'to say/claim'.",
     example:"A: El profesor afirma que el examen es fácil.\nB: Ojalá sea verdad.",
     exampleSrc:"A: The teacher states that the exam is easy.\nB: I hope that is true.",
     funFact:"From Latin 'affirmare' (to make firm). In academic and formal Spanish, 'afirmar' is preferred over 'decir' (to say)."},

    {type:"mc",
     q:"\u00bfQué expresión significa 'okay' o 'agreed'?",
     opts:["de acuerdo","de acto","de además","de actual"],
     ans:"de acuerdo",
     hint:"This two-word expression uses a noun meaning 'agreement'. You hear it constantly in conversation."},

    {type:"teach", trg:"la asistencia", src:"attendance, assistance", pos:"noun", gender:"f",
     note:"Feminine noun. FALSE FRIEND: usually means attendance, not assistance.\nAsistencia a clase = class attendance.",
     example:"A: La asistencia a clase es obligatoria.\nB: \u00bfQué pasa si faltas?",
     exampleSrc:"A: Class attendance is mandatory.\nB: What happens if you miss?",
     funFact:"Another false friend. 'Asistencia' primarily means attendance/presence, not help. 'Ayuda' is the common word for help."},

    {type:"teach", trg:"asistir", src:"to attend", pos:"verb", gender:null,
     note:"Regular -ir verb. Asisto, asistes, asiste...\nFALSE FRIEND: does NOT mean 'to assist'.",
     example:"A: \u00bfAsistes a clase todos los días?\nB: Sí, siempre asisto.",
     exampleSrc:"A: Do you attend class every day?\nB: Yes, I always attend.",
     funFact:"'Asistir a' = to attend (a class, event). NOT to assist/help. 'Ayudar' = to help. Classic trap for English speakers."},

    {type:"match", pairs:[
      {trg:"academia", src:"academy"},
      {trg:"aprendizaje", src:"learning"},
      {trg:"acuerdo", src:"agreement"},
      {trg:"además", src:"moreover"},
      {trg:"aplicación", src:"app"}
    ]},

    {type:"fb",
     s:"\u00bfPuedes {1} a la reunión mañana a las diez?",
     a:["asistir"],
     opts:["asistir","afirmar","analizar","adaptar"],
     hint:"This verb means 'to attend' or 'to be present at'. Not to be confused with English 'assist'.",
     sSrc:"Can you {1} the meeting tomorrow at ten?"},
  ]
};
export default LESSON_10;
