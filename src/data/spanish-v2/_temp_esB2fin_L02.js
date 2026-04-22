// Spanish B2 Final Batch - Lesson 2: Technology & Innovation
const LESSON_2 = {
  id:"esv2_b2fin_l2", title:"Tecnología e Innovación", icon:"💻", xp:15, board:true,
  steps:[
    {type:"intro", title:"Tecnología e Innovación",
     desc:"Master the vocabulary of technology, computing, and innovation. Discuss artificial intelligence, programming, and the digital transformation of society.",
     goals:["Describe technological concepts and innovations","Discuss artificial intelligence and its impact","Express opinions about digital transformation"]},

    {type:"teach", trg:"el algoritmo", src:"the algorithm", pos:"noun", gender:"m",
     note:"A set of instructions a computer follows to solve a problem.",
     example:"A: ¿Sabes cómo funciona el algoritmo de las redes sociales?\nB: El algoritmo decide qué contenido ves primero.",
     exampleSrc:"A: Do you know how the social media algorithm works?\nB: The algorithm decides what content you see first.",
     funFact:"Named after the Persian mathematician Al-Khwarizmi (9th century), whose name was Latinized."},

    {type:"teach", trg:"programar", src:"to program / to code", pos:"verb", gender:null,
     note:"To write code. Also means to schedule something.",
     example:"A: ¿Sabes programar en Python?\nB: Sí, aprendí a programar en la universidad.",
     exampleSrc:"A: Do you know how to program in Python?\nB: Yes, I learned to program at university.",
     funFact:"From Greek 'programma' (public notice). Now means writing instructions for machines."},

    {type:"teach", trg:"la inteligencia artificial", src:"artificial intelligence", pos:"noun", gender:"f",
     note:"Technology that simulates human reasoning and learning. Often abbreviated IA.",
     example:"A: La inteligencia artificial ya puede escribir textos.\nB: Sí, pero todavía comete errores.",
     exampleSrc:"A: Artificial intelligence can already write texts.\nB: Yes, but it still makes mistakes.",
     funFact:"In Spanish the abbreviation is IA (not AI). The field was named in 1956 at Dartmouth College."},

    {type:"teach", trg:"la base de datos", src:"the database", pos:"noun", gender:"f",
     note:"An organized collection of digital information.",
     example:"A: Toda la información está en la base de datos.\nB: ¿Es segura la base de datos?",
     exampleSrc:"A: All the information is in the database.\nB: Is the database secure?",
     funFact:"'Base' from Greek 'basis' (foundation). A database is the foundation of modern information systems."},

    {type:"teach", trg:"la red", src:"the network", pos:"noun", gender:"f",
     note:"A computer network or the internet. Also means net/web literally.",
     example:"A: La red de la oficina está muy lenta hoy.\nB: Puede ser un problema del servidor.",
     exampleSrc:"A: The office network is very slow today.\nB: It could be a server problem.",
     funFact:"From Latin 'rete' (net). 'Red social' (social network) is one of the most used compounds today."},

    {type:"teach", trg:"el dispositivo", src:"the device", pos:"noun", gender:"m",
     note:"Any electronic device: phone, tablet, laptop, etc.",
     example:"A: ¿Cuántos dispositivos tienes conectados?\nB: Tres: el móvil, la tableta y el portátil.",
     exampleSrc:"A: How many devices do you have connected?\nB: Three: my phone, tablet, and laptop.",
     funFact:"From Latin 'dispositus' (arranged). Devices are arranged circuits working together."},

    {type:"mc", q:"¿Qué es un algoritmo?",
     opts:["Un conjunto de instrucciones para resolver un problema","Una red social","Un dispositivo electrónico","Un tipo de virus informático"],
     ans:"Un conjunto de instrucciones para resolver un problema",
     hint:"Named after a Persian mathematician, it is a step-by-step procedure."},

    {type:"teach", trg:"la ciberseguridad", src:"cybersecurity", pos:"noun", gender:"f",
     note:"The practice of protecting digital systems and data from attacks.",
     example:"A: La ciberseguridad es esencial para las empresas.\nB: Cada año hay más ataques informáticos.",
     exampleSrc:"A: Cybersecurity is essential for businesses.\nB: Every year there are more cyber attacks.",
     funFact:"'Ciber' from Greek 'kybernetes' (helmsman/governor). Same root as 'cybernetics'."},

    {type:"teach", trg:"la aplicación", src:"the application / app", pos:"noun", gender:"f",
     note:"A software application. Often shortened to 'app' in casual speech.",
     example:"A: ¿Qué aplicación usas para aprender idiomas?\nB: Uso una aplicación que tiene lecciones diarias.",
     exampleSrc:"A: What application do you use to learn languages?\nB: I use an app that has daily lessons.",
     funFact:"From Latin 'applicatio' (attachment). Apps 'attach' functionality to your device."},

    {type:"teach", trg:"el servidor", src:"the server", pos:"noun", gender:"m",
     note:"A computer that provides data to other computers on a network.",
     example:"A: El servidor se cayó y perdimos acceso al correo.\nB: El técnico está trabajando en el servidor.",
     exampleSrc:"A: The server went down and we lost access to email.\nB: The technician is working on the server.",
     funFact:"From 'servir' (to serve). A server 'serves' data to client devices that request it."},

    {type:"fb", s:"La {1} protege los sistemas informáticos contra ataques.", a:["ciberseguridad"],
     opts:["ciberseguridad","aplicación","red","base"],
     hint:"This field of technology specifically defends digital systems from malicious threats.",
     sSrc:"{1} protects computer systems against attacks."},

    {type:"teach", trg:"actualizar", src:"to update", pos:"verb", gender:null,
     note:"To update software, data, or information to the latest version.",
     example:"A: ¿Has actualizado el sistema operativo?\nB: No, siempre me olvido de actualizar.",
     exampleSrc:"A: Have you updated the operating system?\nB: No, I always forget to update.",
     funFact:"From 'actual' (current). Unlike English 'actual', Spanish 'actual' means current/present."},

    {type:"teach", trg:"la nube", src:"the cloud", pos:"noun", gender:"f",
     note:"Cloud computing: storing data on remote servers accessed via the internet.",
     example:"A: Guardo todas mis fotos en la nube.\nB: Es más seguro que el disco duro local.",
     exampleSrc:"A: I store all my photos in the cloud.\nB: It's safer than the local hard drive.",
     funFact:"Called 'nube' because network diagrams traditionally drew the internet as a cloud shape."},

    {type:"teach", trg:"el enlace", src:"the link", pos:"noun", gender:"m",
     note:"A hyperlink on the internet. Also means connection or bond.",
     example:"A: Te envío el enlace por correo electrónico.\nB: Gracias, el enlace funciona perfectamente.",
     exampleSrc:"A: I'll send you the link by email.\nB: Thanks, the link works perfectly.",
     funFact:"From 'enlazar' (to link/connect). Same Latin root as English 'lace' via Old French."},

    {type:"teach", trg:"el emprendedor", src:"the entrepreneur", pos:"noun", gender:"m",
     note:"Someone who starts and runs innovative business ventures.",
     example:"A: Mi hermana es emprendedora en el sector tecnológico.\nB: Fundó una empresa de desarrollo de aplicaciones.",
     exampleSrc:"A: My sister is an entrepreneur in the tech sector.\nB: She founded an app development company.",
     funFact:"From 'emprender' (to undertake). French 'entrepreneur' shares the same Latin root 'inter-prehendere'."},

    {type:"mc", q:"¿Dónde se almacenan los datos en la computación en la nube?",
     opts:["En el dispositivo local","En servidores remotos por internet","En discos duros externos","En la memoria RAM"],
     ans:"En servidores remotos por internet",
     hint:"Cloud computing stores information on distant machines accessed over a global network."},

    {type:"teach", trg:"innovar", src:"to innovate", pos:"verb", gender:null,
     note:"To introduce new ideas, methods, or products.",
     example:"A: Las empresas necesitan innovar constantemente.\nB: Si no innovas, la competencia te supera.",
     exampleSrc:"A: Companies need to innovate constantly.\nB: If you don't innovate, the competition surpasses you.",
     funFact:"From Latin 'innovare' (to renew). 'Novus' (new) is also the root of 'novela' and 'novato'."},

    {type:"teach", trg:"el código fuente", src:"the source code", pos:"noun", gender:"m",
     note:"The human-readable instructions that make up a software program.",
     example:"A: ¿El código fuente de ese programa es abierto?\nB: Sí, cualquiera puede ver el código fuente.",
     exampleSrc:"A: Is the source code of that program open?\nB: Yes, anyone can see the source code.",
     funFact:"'Código' from Latin 'codex' (book of laws). 'Fuente' from Latin 'fons' (spring/source)."},

    {type:"teach", trg:"la brecha digital", src:"the digital divide", pos:"noun", gender:"f",
     note:"The gap between those with access to technology and those without.",
     example:"A: La brecha digital afecta a las zonas rurales.\nB: Sin internet, no pueden acceder a la educación en línea.",
     exampleSrc:"A: The digital divide affects rural areas.\nB: Without internet, they can't access online education.",
     funFact:"'Brecha' originally meant a gap in a wall made by artillery. Now used for any significant gap."},

    {type:"fb", s:"Necesitas {1} la aplicación a la última versión.", a:["actualizar"],
     opts:["actualizar","programar","innovar","difundir"],
     hint:"This verb means to bring software to its most current version.",
     sSrc:"You need to {1} the app to the latest version."},

    {type:"match", pairs:[
      {trg:"el algoritmo", src:"the algorithm"},
      {trg:"la nube", src:"the cloud"},
      {trg:"el enlace", src:"the link"},
      {trg:"la brecha digital", src:"the digital divide"}
    ]},

    {type:"mc", q:"¿Qué significa 'la brecha digital'?",
     opts:["Una red social nueva","Un virus informático","La diferencia de acceso a la tecnología","Un tipo de programa"],
     ans:"La diferencia de acceso a la tecnología",
     hint:"This gap separates those who have technology access from those who do not."},

    {type:"fb", s:"El {1} necesita reiniciarse para resolver el problema.", a:["servidor"],
     opts:["servidor","enlace","algoritmo","código"],
     hint:"This machine provides data and services to other computers on the network.",
     sSrc:"The {1} needs to be restarted to fix the problem."},

    {type:"match", pairs:[
      {trg:"programar", src:"to program"},
      {trg:"el emprendedor", src:"the entrepreneur"},
      {trg:"la ciberseguridad", src:"cybersecurity"},
      {trg:"el dispositivo", src:"the device"}
    ]},

    {type:"mc", q:"¿Cuál es el acrónimo en español para este campo tecnológico?",
     opts:["Int.Art.","I.A.R.","AI","IA"],
     ans:"IA",
     hint:"Spanish reverses the English word order: the noun comes before the adjective."},

    {type:"fb", s:"Mi hermano es {1} y acaba de fundar una empresa tecnológica.", a:["emprendedor"],
     opts:["emprendedor","servidor","algoritmo","dispositivo"],
     hint:"This person starts innovative business ventures, taking financial risks.",
     sSrc:"My brother is an {1} and just founded a tech company."}
  ]
};
export default LESSON_2;
