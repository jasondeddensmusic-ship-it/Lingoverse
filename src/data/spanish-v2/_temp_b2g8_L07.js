// B2 Gap Batch 8 Lesson 07 - Abstract Qualities & Character
const LESSON_7 = {id:"esv2_b2g8_l7",title:"Cualidades y carácter",icon:"💎",xp:15,board:true,steps:[
{type:"intro",title:"Cualidades y carácter",desc:"Master abstract nouns and adjectives for describing personality, character, and human qualities.",goals:["Learn 14 abstract quality terms","Describe personality traits precisely","Use the -eza and -dad suffix patterns"]},

{type:"teach",trg:"la maldad",src:"the evil / wickedness",pos:"noun",gender:"f",
 note:"Feminine noun. The quality of being evil or morally bad.\nFrom malo (bad) + -dad.",
 example:"A: No entiendo tanta maldad en el mundo.\nB: Ni yo, pero hay mucha más bondad de lo que parece.",
 exampleSrc:"A: I do not understand so much evil in the world.\nB: Neither do I, but there is much more goodness than it seems.",
 funFact:"The suffix -dad creates abstract nouns from adjectives: malo > maldad, bueno > bondad, cruel > crueldad."},

{type:"teach",trg:"la incompetencia",src:"the incompetence",pos:"noun",gender:"f",
 note:"Feminine noun. Lack of ability or skill.\nIn- (not) + competencia (competence).",
 example:"A: Su incompetencia causó el fracaso del proyecto.\nB: Deberían haberlo sustituido antes.",
 exampleSrc:"A: His incompetence caused the project's failure.\nB: They should have replaced him sooner.",
 funFact:"In Spanish law, 'incompetencia' also means lack of legal jurisdiction. A judge can be 'incompetente'."},

{type:"teach",trg:"incompetente",src:"incompetent",pos:"adj",gender:null,
 note:"Adjective. Lacking ability or qualifications.\nSame form for masculine and feminine.",
 example:"A: No quiero sonar duro, pero ese empleado es incompetente.\nB: Dale otra oportunidad. Quizá necesita formación.",
 exampleSrc:"A: I do not want to sound harsh, but that employee is incompetent.\nB: Give him another chance. Maybe he needs training.",
 funFact:"In formal complaints to Spanish authorities, 'incompetente' is a legally charged term, used carefully."},

{type:"teach",trg:"la impulsividad",src:"the impulsiveness",pos:"noun",gender:"f",
 note:"Feminine noun. The tendency to act without thinking.\nImpulsivo (impulsive) + -idad.",
 example:"A: Su impulsividad le ha causado muchos problemas.\nB: Necesita aprender a controlar sus reacciones.",
 exampleSrc:"A: His impulsiveness has caused him many problems.\nB: He needs to learn to control his reactions.",
 funFact:"In psychology, 'impulsividad' is a clinical term measured on standardized scales in Spain."},

{type:"mc",q:"Si alguien actúa sin pensar, ¿qué cualidad tiene?",
 opts:["Impulsividad","Incompetencia","Maldad","Imparcialidad"],
 ans:"Impulsividad",
 hint:"Acting on sudden urges without considering consequences. An im- word."},

{type:"teach",trg:"la infelicidad",src:"the unhappiness",pos:"noun",gender:"f",
 note:"Feminine noun. The state of not being happy.\nIn- (not) + felicidad (happiness).",
 example:"A: La infelicidad en el trabajo afecta a toda tu vida.\nB: Es verdad. Por eso cambié de empleo.",
 exampleSrc:"A: Unhappiness at work affects your entire life.\nB: That is true. That is why I changed jobs.",
 funFact:"Spain regularly scores in the top half of global happiness indices, despite economic challenges."},

{type:"teach",trg:"la indisciplina",src:"the indiscipline / unruliness",pos:"noun",gender:"f",
 note:"Feminine noun. Lack of discipline or order.\nIn- (not) + disciplina.",
 example:"A: La indisciplina en el aula preocupa a los profesores.\nB: Es un problema que necesita soluciones creativas.",
 exampleSrc:"A: Indiscipline in the classroom worries teachers.\nB: It is a problem that needs creative solutions.",
 funFact:"Spanish schools can issue 'partes de indisciplina' (discipline reports) that go on student records."},

{type:"teach",trg:"la individualidad",src:"the individuality",pos:"noun",gender:"f",
 note:"Feminine noun. The quality that makes someone unique.\nIndividual + -idad.",
 example:"A: Respetamos la individualidad de cada alumno.\nB: Así debería ser. No todos aprenden igual.",
 exampleSrc:"A: We respect the individuality of each student.\nB: That is how it should be. Not everyone learns the same way.",
 funFact:"Spanish culture balances strong individualism with equally strong family and community bonds."},

{type:"fb",s:"La {1} de ese político le ha llevado a tomar decisiones terribles.",
 a:["incompetencia"],opts:["incompetencia","individualidad","impulsividad","infelicidad"],
 hint:"The lack of ability and skill needed for the role. A professional failing.",
 sSrc:"The {1} of that politician has led him to make terrible decisions."},

{type:"teach",trg:"la extrañeza",src:"the strangeness / surprise",pos:"noun",gender:"f",
 note:"Feminine noun. A feeling of surprise, or the quality of being strange.\nFrom extraño + -eza.",
 example:"A: Me causó extrañeza su reacción.\nB: A mí también. No me lo esperaba en absoluto.",
 exampleSrc:"A: His reaction caused me surprise.\nB: Me too. I did not expect it at all.",
 funFact:"'Extrañeza' is more literary than 'sorpresa'. It implies puzzlement, not just surprise."},

{type:"teach",trg:"la fineza",src:"the fineness / delicacy / courtesy",pos:"noun",gender:"f",
 note:"Feminine noun. Refinement, or a kind, courteous gesture.\nFrom fino (fine) + -eza.",
 example:"A: Aprecio mucho tu fineza al invitarme.\nB: Es lo menos que podía hacer después de tu ayuda.",
 exampleSrc:"A: I greatly appreciate your courtesy in inviting me.\nB: It is the least I could do after your help.",
 funFact:"In old Spanish, 'fineza' meant a gallant act of love. The word survives in formal and literary use."},

{type:"teach",trg:"la llaneza",src:"the simplicity / frankness",pos:"noun",gender:"f",
 note:"Feminine noun. The quality of being straightforward and unpretentious.\nFrom llano (plain).",
 example:"A: Me gusta la llaneza con la que habla el director.\nB: Sí, es directo y nunca usa palabras rebuscadas.",
 exampleSrc:"A: I like the frankness with which the director speaks.\nB: Yes, he is direct and never uses fancy words.",
 funFact:"Don Quixote's famous advice: 'Llaneza, Sancho, que toda afectación es mala.' Simplicity is best."},

{type:"mc",q:"¿Qué significa 'llaneza' al describir a una persona?",
 opts:["Ser físicamente fuerte","Ser sencillo y directo al hablar","Ser muy inteligente","Tener mucho dinero"],
 ans:"Ser sencillo y directo al hablar",
 hint:"From 'llano' meaning plain or flat. Applied to speech, it means simple and unpretentious."},

{type:"teach",trg:"la heroicidad",src:"the heroism / heroic act",pos:"noun",gender:"f",
 note:"Feminine noun. A heroic deed, or the quality of being heroic.\nFrom heroico + -idad.",
 example:"A: Los bomberos demostraron una heroicidad increíble.\nB: Arriesgaron sus vidas para salvar a los vecinos.",
 exampleSrc:"A: The firefighters showed incredible heroism.\nB: They risked their lives to save the neighbors.",
 funFact:"Spain awards the 'Cruz de la Orden del Mérito Civil' for acts of civilian heroism."},

{type:"teach",trg:"la imposibilidad",src:"the impossibility",pos:"noun",gender:"f",
 note:"Feminine noun. The state of being impossible.\nIm- (not) + posibilidad.",
 example:"A: Ante la imposibilidad de llegar a un acuerdo, cancelaron la reunión.\nB: Es una pena. Llevaban meses negociando.",
 exampleSrc:"A: Faced with the impossibility of reaching an agreement, they canceled the meeting.\nB: It is a shame. They had been negotiating for months.",
 funFact:"In legal Spanish, 'imposibilidad sobrevenida' means an unforeseen impossibility that voids a contract."},

{type:"fb",s:"Me causó {1} que no viniera nadie a la fiesta de despedida.",
 a:["extrañeza"],opts:["extrañeza","fineza","llaneza","heroicidad"],
 hint:"A feeling of puzzled surprise when something unexpected happens.",
 sSrc:"It caused me {1} that nobody came to the farewell party."},

{type:"match",pairs:[
 {trg:"la maldad",src:"evil / wickedness"},
 {trg:"la impulsividad",src:"impulsiveness"},
 {trg:"la fineza",src:"courtesy / delicacy"},
 {trg:"la heroicidad",src:"heroism"},
 {trg:"la imposibilidad",src:"impossibility"}
]},

{type:"mc",q:"¿Qué sufijo español convierte adjetivos en sustantivos abstractos como maldad, bondad, crueldad?",
 opts:["-ción","-miento","-dad","-eza"],
 ans:"-dad",
 hint:"This three-letter suffix turns adjectives into abstract feminine nouns. Malo, cruel, bueno all use it."}
]};
export default LESSON_7;
