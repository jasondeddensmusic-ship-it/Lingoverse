// Spanish B2 Final Batch - Lesson 6: Law & Justice
const LESSON_6 = {
  id:"esv2_b2fin_l6", title:"Derecho y Justicia", icon:"⚖️", xp:15, board:true,
  steps:[
    {type:"intro", title:"Derecho y Justicia",
     desc:"Learn the vocabulary of law, justice, and legal proceedings. Discuss legal concepts, rights, and the judicial system with confidence.",
     goals:["Describe legal concepts and court proceedings","Discuss rights, crimes, and punishments","Express opinions about justice and legal reforms"]},

    {type:"teach", trg:"jurídico", src:"legal / juridical", pos:"adj", gender:null,
     note:"Related to the law or legal system. More formal than 'legal'.",
     example:"A: Necesito asesoramiento jurídico antes de firmar.\nB: El departamento jurídico va a ver el contrato.",
     exampleSrc:"A: I need legal advice before signing.\nB: The legal department will look at the contract.",
     funFact:"From Latin 'iuridicus'. 'Ius' (law) + 'dicere' (to say). One who 'speaks the law'."},

    {type:"teach", trg:"la sentencia", src:"the sentence / verdict", pos:"noun", gender:"f",
     note:"The judge's official decision in a court case.",
     example:"A: ¿Cuál fue la sentencia del juez?\nB: La sentencia fue de cinco años de prisión.",
     exampleSrc:"A: What was the judge's sentence?\nB: The sentence was five years in prison.",
     funFact:"From Latin 'sententia' (opinion/judgment). A judge 'feels' (sentire) what the just outcome should be."},

    {type:"teach", trg:"la demanda", src:"the lawsuit / claim", pos:"noun", gender:"f",
     note:"A formal legal complaint filed against someone. Also means 'demand'.",
     example:"A: Presentaron una demanda contra la empresa.\nB: La demanda exige una compensación económica.",
     exampleSrc:"A: They filed a lawsuit against the company.\nB: The lawsuit demands financial compensation.",
     funFact:"From Latin 'demandare' (to entrust). Filing a lawsuit 'entrusts' the matter to the court."},

    {type:"teach", trg:"el delito", src:"the crime / offense", pos:"noun", gender:"m",
     note:"A criminal offense punishable by law. More formal than 'crimen'.",
     example:"A: El robo es un delito contra la propiedad.\nB: Cometió un delito grave y fue arrestado.",
     exampleSrc:"A: Theft is a crime against property.\nB: He committed a serious offense and was arrested.",
     funFact:"From Latin 'delictum' (fault/offense). Same root as English 'delinquent'."},

    {type:"teach", trg:"el abogado", src:"the lawyer", pos:"noun", gender:"m",
     note:"A legal professional who advises and represents clients.",
     example:"A: Mi abogado dice que tenemos un buen caso.\nB: Necesitas un abogado especializado en derecho laboral.",
     exampleSrc:"A: My lawyer says we have a good case.\nB: You need a lawyer specializing in labor law.",
     funFact:"From Latin 'advocatus' (one called to aid). Same root as English 'advocate'."},

    {type:"teach", trg:"el juicio", src:"the trial", pos:"noun", gender:"m",
     note:"A formal legal hearing in court. Also means judgment or opinion.",
     example:"A: El juicio comenzará el lunes próximo.\nB: Durante el juicio, ambas partes presentarán pruebas.",
     exampleSrc:"A: The trial will begin next Monday.\nB: During the trial, both sides will present evidence.",
     funFact:"From Latin 'iudicium' (judgment). 'Ius' (law) + 'dicere' (to say): to say what is lawful."},

    {type:"teach", trg:"el testigo", src:"the witness", pos:"noun", gender:"m",
     note:"A person who sees an event and can give evidence in court.",
     example:"A: El testigo declaró ante el juez.\nB: Necesitamos al menos dos testigos para el juicio.",
     exampleSrc:"A: The witness testified before the judge.\nB: We need at least two witnesses for the trial.",
     funFact:"From Latin 'testis' (witness). Romans needed three witnesses (testes) for valid legal transactions."},

    {type:"mc", q:"¿Quién dicta la sentencia en un juicio?",
     opts:["El juez","El acusado","El abogado","El testigo"],
     ans:"El juez",
     hint:"This official presides over the court and makes the final legal decision."},

    {type:"teach", trg:"la prueba", src:"the evidence / proof", pos:"noun", gender:"f",
     note:"Evidence presented in court to support or disprove a claim.",
     example:"A: No hay suficientes pruebas para condenarlo.\nB: La prueba más importante es el vídeo de seguridad.",
     exampleSrc:"A: There isn't enough evidence to convict him.\nB: The most important evidence is the security video.",
     funFact:"From Latin 'proba' (test). Same root as 'probar' (to prove/try) and English 'probe'."},

    {type:"teach", trg:"el acusado", src:"the accused / defendant", pos:"noun", gender:"m",
     note:"The person formally charged with a crime in court.",
     example:"A: El acusado se declaró inocente.\nB: El acusado tiene derecho a un abogado.",
     exampleSrc:"A: The accused pleaded not guilty.\nB: The defendant has the right to a lawyer.",
     funFact:"From 'acusar' (to accuse), Latin 'accusare'. 'Ad-' (to) + 'causa' (cause/case): to bring a case against."},

    {type:"teach", trg:"la condena", src:"the conviction / sentence", pos:"noun", gender:"f",
     note:"The punishment imposed on someone found guilty. Also the act of condemning.",
     example:"A: La condena fue de diez años de cárcel.\nB: El tribunal dictó una condena firme.",
     exampleSrc:"A: The sentence was ten years in prison.\nB: The court issued a firm conviction.",
     funFact:"From Latin 'condemnare' (to sentence). 'Con-' (intensive) + 'damnare' (to condemn/harm)."},

    {type:"fb", s:"Presentaron una {1} contra la empresa por daños y perjuicios.", a:["demanda"],
     opts:["demanda","sentencia","condena","prueba"],
     hint:"This is a formal legal complaint filed in court seeking compensation.",
     sSrc:"They filed a {1} against the company for damages."},

    {type:"teach", trg:"inocente", src:"innocent / not guilty", pos:"adj", gender:null,
     note:"Not guilty of a crime. Opposite of 'culpable' (guilty).",
     example:"A: El jurado lo declaró inocente.\nB: Siempre se presume inocente hasta que se demuestre lo contrario.",
     exampleSrc:"A: The jury declared him innocent.\nB: You are always presumed innocent until proven otherwise.",
     funFact:"From Latin 'innocens' (not harming). 'In-' (not) + 'nocere' (to harm). An innocent person causes no harm."},

    {type:"teach", trg:"el derecho", src:"the right / law (field)", pos:"noun", gender:"m",
     note:"Both a legal right and the field of law itself. Context determines meaning.",
     example:"A: Todos tienen derecho a un juicio justo.\nB: Estudié derecho en la Universidad de Salamanca.",
     exampleSrc:"A: Everyone has the right to a fair trial.\nB: I studied law at the University of Salamanca.",
     funFact:"From Latin 'directum' (straight/right). Law should be 'straight' and just, not crooked."},

    {type:"teach", trg:"el tribunal", src:"the court / tribunal", pos:"noun", gender:"m",
     note:"The court of law or the panel of judges hearing a case.",
     example:"A: El caso se presentó ante el tribunal supremo.\nB: El tribunal decidirá la semana que viene.",
     exampleSrc:"A: The case was brought before the supreme court.\nB: The tribunal will decide next week.",
     funFact:"From Latin 'tribunal' (judgment seat). Originally the raised platform where Roman magistrates sat."},

    {type:"teach", trg:"la denuncia", src:"the formal complaint / report", pos:"noun", gender:"f",
     note:"A formal report filed with police or authorities about a crime or offense.",
     example:"A: ¿Has puesto una denuncia en la policía?\nB: Sí, presenté una denuncia por robo ayer.",
     exampleSrc:"A: Have you filed a complaint with the police?\nB: Yes, I filed a theft report yesterday.",
     funFact:"From Latin 'denuntiare' (to announce). Filing a 'denuncia' is the first step in Spanish criminal proceedings."},

    {type:"mc", q:"¿Qué significa 'presunción de inocencia'?",
     opts:["Que el acusado es culpable","Que el acusado es inocente hasta que se pruebe lo contrario","Que no hay juicio","Que el juez decide sin pruebas"],
     ans:"Que el acusado es inocente hasta que se pruebe lo contrario",
     hint:"This legal principle protects the accused by placing the burden of proof on the prosecution."},

    {type:"teach", trg:"la pena", src:"the penalty / punishment", pos:"noun", gender:"f",
     note:"The punishment for a crime. Also means 'sorrow' in everyday language.",
     example:"A: La pena máxima por ese delito es de veinte años.\nB: ¿Crees que la pena es justa?",
     exampleSrc:"A: The maximum penalty for that crime is twenty years.\nB: Do you think the penalty is fair?",
     funFact:"From Latin 'poena' (punishment/penalty). Also means sorrow: 'Es una pena' (it's a shame)."},

    {type:"teach", trg:"absolver", src:"to acquit / to absolve", pos:"verb", gender:null,
     note:"To declare someone not guilty. Opposite of 'condenar' (to convict).",
     example:"A: El juez absolvió al acusado por falta de pruebas.\nB: Fue absuelto de todos los cargos.",
     exampleSrc:"A: The judge acquitted the defendant due to lack of evidence.\nB: He was acquitted of all charges.",
     funFact:"From Latin 'absolvere' (to set free). 'Ab-' (away) + 'solvere' (to loosen): to loosen someone from guilt."},

    {type:"teach", trg:"el recurso", src:"the appeal", pos:"noun", gender:"m",
     note:"A legal request to a higher court to review a decision.",
     example:"A: Vamos a presentar un recurso ante el tribunal superior.\nB: El recurso debe presentarse en un plazo de treinta días.",
     exampleSrc:"A: We are going to file an appeal with the higher court.\nB: The appeal must be filed within thirty days.",
     funFact:"From Latin 'recursus' (a running back). An appeal 'runs back' to a higher court for review."},

    {type:"fb", s:"El juez {1} al acusado por falta de pruebas.", a:["absolvió"],
     opts:["absolvió","condenó","demandó","denunció"],
     hint:"This verb means to declare someone not guilty and release them from charges.",
     sSrc:"The judge {1} the defendant due to lack of evidence."},

    {type:"match", pairs:[
      {trg:"el abogado", src:"the lawyer"},
      {trg:"el testigo", src:"the witness"},
      {trg:"la prueba", src:"the evidence"},
      {trg:"el tribunal", src:"the court"}
    ]},

    {type:"mc", q:"¿Qué es una 'denuncia'?",
     opts:["Un contrato legal","Una sentencia del juez","Un informe formal presentado a la policía","Un recurso ante el tribunal"],
     ans:"Un informe formal presentado a la policía",
     hint:"This is the official report you file with authorities when a crime has been committed."},

    {type:"fb", s:"El {1} tiene derecho a un abogado durante el juicio.", a:["acusado"],
     opts:["acusado","testigo","abogado","tribunal"],
     hint:"This person is formally charged with a crime and must defend themselves in court.",
     sSrc:"The {1} has the right to a lawyer during the trial."},

    {type:"match", pairs:[
      {trg:"la sentencia", src:"the verdict"},
      {trg:"el delito", src:"the crime"},
      {trg:"la pena", src:"the penalty"},
      {trg:"el recurso", src:"the appeal"}
    ]},

    {type:"mc", q:"¿Qué significa 'interponer un recurso'?",
     opts:["Declararse culpable","Contratar a un abogado","Denunciar un delito","Pedir a un tribunal superior que revise una decisión"],
     ans:"Pedir a un tribunal superior que revise una decisión",
     hint:"This legal action asks a higher court to reconsider a previous ruling."},

    {type:"fb", s:"El {1} declaró ante el juez lo que vio esa noche.", a:["testigo"],
     opts:["testigo","acusado","abogado","juez"],
     hint:"This person saw the event firsthand and provides their account to the court.",
     sSrc:"The {1} testified before the judge about what they saw that night."}
  ]
};
export default LESSON_6;
