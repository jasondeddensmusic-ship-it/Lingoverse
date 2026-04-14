// B2 Gap Batch 5 Lesson 07 - Government & Institutions
const LESSON_7 = {id:"esv2_b2g5_l7",title:"Gobierno e instituciones",icon:"🏛️",xp:15,board:true,steps:[
{type:"intro",title:"Gobierno e instituciones",desc:"Master vocabulary about government bodies, leadership roles, and institutional structures.",goals:["Learn 15 words about government and institutions","Discuss political roles and organizations","Use formal institutional vocabulary"]},

{type:"teach",trg:"el coordinador",src:"the coordinator",pos:"noun",gender:"m",
 note:"Masculine noun. A person who organizes activities.\nFeminine: la coordinadora.",
 example:"A: El coordinador del proyecto ha convocado una reunión.\nB: ¿A qué hora es?",
 exampleSrc:"A: The project coordinator has called a meeting.\nB: What time is it?",
 funFact:"In Spanish politics, 'coordinador general' is a common title for party leadership positions."},

{type:"teach",trg:"el conductor",src:"the driver / host / presenter",pos:"noun",gender:"m",
 note:"Masculine noun. Someone who drives, or a TV/radio host.\nFeminine: la conductora.",
 example:"A: El conductor del programa entrevista a políticos.\nB: Siempre hace preguntas muy directas.",
 exampleSrc:"A: The program host interviews politicians.\nB: He always asks very direct questions.",
 funFact:"In Latin America, 'conductor' for TV host is standard. In Spain, 'presentador' is more common."},

{type:"teach",trg:"la congregación",src:"the congregation / assembly",pos:"noun",gender:"f",
 note:"Feminine noun. A gathering of people, especially for religious purposes.\nAlso: a religious order.",
 example:"A: La congregación se reunió en la iglesia para la ceremonia.\nB: Había más de trescientas personas.",
 exampleSrc:"A: The congregation gathered in the church for the ceremony.\nB: There were more than three hundred people.",
 funFact:"In the Vatican, 'congregaciones' are the departments that govern the Catholic Church."},

{type:"teach",trg:"la descentralización",src:"the decentralization",pos:"noun",gender:"f",
 note:"Feminine noun. Distributing power away from a central authority.\nOpposite: centralización.",
 example:"A: La descentralización dio más poder a las comunidades autónomas.\nB: Cada región gestiona su propia educación.",
 exampleSrc:"A: Decentralization gave more power to the autonomous communities.\nB: Each region manages its own education.",
 funFact:"Spain is one of Europe's most decentralized states, with 17 autonomous communities."},

{type:"teach",trg:"la emperatriz",src:"the empress",pos:"noun",gender:"f",
 note:"Feminine noun. The wife of an emperor or a female ruler.\nMasculine: el emperador.",
 example:"A: La emperatriz gobernó con mano firme durante treinta años.\nB: Fue una época de estabilidad.",
 exampleSrc:"A: The empress ruled with a firm hand for thirty years.\nB: It was an era of stability.",
 funFact:"Isabel of Portugal, wife of Carlos V, served as regent of Spain while the emperor was abroad."},

{type:"mc",q:"¿Qué es la descentralización?",opts:["Distribuir el poder lejos de una autoridad central","Concentrar el poder en un solo lugar","Crear nuevas leyes nacionales","Disolver el parlamento"],ans:"Distribuir el poder lejos de una autoridad central",hint:"The opposite of bringing everything under one central authority."},

{type:"teach",trg:"el entrevistador",src:"the interviewer",pos:"noun",gender:"m",
 note:"Masculine noun. The person who conducts an interview.\nFeminine: la entrevistadora.",
 example:"A: El entrevistador le hizo preguntas muy comprometidas.\nB: El político intentó evitar responder.",
 exampleSrc:"A: The interviewer asked him very difficult questions.\nB: The politician tried to avoid answering.",
 funFact:"From entre (between) + vista (view). An interview is literally 'seeing between' two people."},

{type:"teach",trg:"el fundador",src:"the founder",pos:"noun",gender:"m",
 note:"Masculine noun. The person who establishes an organization.\nFeminine: la fundadora.",
 example:"A: El fundador de la empresa empezó desde cero.\nB: Ahora tiene más de mil empleados.",
 exampleSrc:"A: The company founder started from nothing.\nB: Now he has more than a thousand employees.",
 funFact:"'Padres fundadores' (founding fathers) is used for both Spain's 1978 Constitution authors and historical figures."},

{type:"teach",trg:"el gabinete",src:"the cabinet / office",pos:"noun",gender:"m",
 note:"Masculine noun. A group of ministers, or a professional office.\nAlso: gabinete de prensa.",
 example:"A: El presidente ha remodelado su gabinete de ministros.\nB: Hay cinco caras nuevas.",
 exampleSrc:"A: The president has reshuffled his cabinet of ministers.\nB: There are five new faces.",
 funFact:"From Italian gabinetto (small room). The 'gabinete de crisis' (crisis cabinet) meets during emergencies."},

{type:"teach",trg:"el guerrero",src:"the warrior",pos:"noun",gender:"m",
 note:"Masculine noun. A person who fights in battles.\nFeminine: la guerrera. Also adj.",
 example:"A: Los guerreros iberos eran temidos por los romanos.\nB: Luchaban con una fiereza increíble.",
 exampleSrc:"A: The Iberian warriors were feared by the Romans.\nB: They fought with incredible fierceness.",
 funFact:"The 'guerrero ibérico de Porcuna' sculptures are masterpieces of pre-Roman art found in Jaén."},

{type:"fb",s:"La {1} permitió que cada región tuviera su propio gobierno.",a:["descentralización"],opts:["descentralización","congregación","coordinación","centralización"],hint:"The process of distributing power from the center to local regions.",sSrc:"The {1} allowed each region to have its own government."},

{type:"teach",trg:"el agresor",src:"the aggressor / assailant",pos:"noun",gender:"m",
 note:"Masculine noun. Someone who attacks another.\nFeminine: la agresora. Legal term.",
 example:"A: La policía detuvo al agresor poco después del incidente.\nB: La víctima está fuera de peligro.",
 exampleSrc:"A: The police arrested the aggressor shortly after the incident.\nB: The victim is out of danger.",
 funFact:"In Spanish law, 'agresor' is the standard legal term used in court documents and police reports."},

{type:"teach",trg:"el causante",src:"the person responsible / cause",pos:"noun",gender:"m",
 note:"Masculine noun. The person or thing that causes something.\nAlso adjective: el factor causante.",
 example:"A: ¿Quién es el causante del accidente?\nB: El conductor que se saltó el semáforo.",
 exampleSrc:"A: Who is responsible for the accident?\nB: The driver who ran the red light.",
 funFact:"In legal Spanish, 'causante' also refers to the deceased person whose estate is being inherited."},

{type:"teach",trg:"la encomienda",src:"the commission / colonial land grant",pos:"noun",gender:"f",
 note:"Feminine noun. A task entrusted to someone.\nHistorical: a colonial system of forced labor.",
 example:"A: La encomienda fue un sistema colonial muy injusto.\nB: Los indígenas eran obligados a trabajar la tierra.",
 exampleSrc:"A: The encomienda was a very unjust colonial system.\nB: Indigenous people were forced to work the land.",
 funFact:"From encomendar (to entrust). The system was legally abolished in 1720 but persisted longer in practice."},

{type:"teach",trg:"el hacendado",src:"the landowner / estate owner",pos:"noun",gender:"m",
 note:"Masculine noun. Owner of a large rural estate.\nFrom hacienda (estate).",
 example:"A: Los hacendados controlaban enormes extensiones de tierra.\nB: Tenían mucho poder político y económico.",
 exampleSrc:"A: The landowners controlled enormous stretches of land.\nB: They had great political and economic power.",
 funFact:"In colonial Latin America, hacendados formed the ruling elite that shaped society for centuries."},

{type:"mc",q:"¿Qué es un gabinete de ministros?",opts:["El grupo de ministros del gobierno","Una oficina de correos","Un museo nacional","Una sala de reuniones"],ans:"El grupo de ministros del gobierno",hint:"The president or prime minister selects these people to lead government departments."},

{type:"fb",s:"El {1} de la organización estableció sus principios hace veinte años.",a:["fundador"],opts:["fundador","guerrero","agresor","conductor"],hint:"The person who originally created or established an organization.",sSrc:"The {1} of the organization established its principles twenty years ago."},

{type:"match",pairs:[{trg:"guerrero",src:"warrior"},{trg:"emperatriz",src:"empress"},{trg:"gabinete",src:"cabinet"},{trg:"agresor",src:"aggressor"},{trg:"encomienda",src:"colonial land grant"}]},

{type:"fb",s:"La policía identificó al {1} del delito gracias a las cámaras.",a:["causante"],opts:["causante","fundador","guerrero","entrevistador"],hint:"The person who caused or is responsible for something happening.",sSrc:"The police identified the {1} of the crime thanks to the cameras."},

{type:"mc",q:"¿Qué era un hacendado?",opts:["El dueño de una gran propiedad rural","Un guerrero medieval","Un sacerdote colonial","Un escribano del rey"],ans:"El dueño de una gran propiedad rural",hint:"Think about a wealthy person who owned a large farm or estate."}
]};

export default LESSON_7;
