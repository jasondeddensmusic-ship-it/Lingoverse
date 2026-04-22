// B2 Gap Batch D Lesson 15 - Law, Government & Institutions
const LESSON_15 = {id:"esv2_b2gD_l15",title:"Ley y gobierno",icon:"\u2696\uFE0F",xp:15,board:true,steps:[
{type:"intro",title:"Ley y gobierno",desc:"Master vocabulary for legal institutions, government bodies, and civic structures essential for B2 comprehension.",goals:["Learn 10 law and government vocabulary items","Discuss institutional structures with precision","Use formal civic and legal terminology"]},

{type:"teach",trg:"la guardia civil",src:"the Civil Guard (Spanish police force)",pos:"noun",gender:"f",
 note:"Feminine compound noun. Spain's national gendarmerie.\nFounded in 1844. Military-style police force.",
 example:"A: La Guardia Civil patrulla las carreteras y las zonas rurales.\nB: También se encargan de la vigilancia costera.",
 exampleSrc:"A: The Civil Guard patrols the roads and rural areas.\nB: They also handle coastal surveillance.",
 funFact:"The Guardia Civil's distinctive tricorn hat (tricornio) is one of Spain's most recognizable symbols, though now mainly ceremonial."},

{type:"teach",trg:"la fiscalía",src:"the prosecutor's office",pos:"noun",gender:"f",
 note:"Feminine noun. The public prosecution service.\nFiscalía General del Estado: Attorney General's office.",
 example:"A: La fiscalía ha abierto una investigación sobre el caso de corrupción.\nB: Los documentos incautados serán clave.",
 exampleSrc:"A: The prosecutor's office has opened an investigation into the corruption case.\nB: The seized documents will be key.",
 funFact:"Spain's Fiscalía General del Estado is led by the Fiscal General, appointed by the King on the government's proposal."},

{type:"teach",trg:"el orden del día",src:"the agenda / order of the day",pos:"noun",gender:"m",
 note:"Masculine compound noun. The list of items to discuss in a meeting.\nFormal meeting terminology.",
 example:"A: El primer punto del orden del día es la aprobación del presupuesto.\nB: Esperemos que no haya mucha discusión.",
 exampleSrc:"A: The first item on the agenda is the budget approval.\nB: Let's hope there isn't too much discussion.",
 funFact:"In parliamentary Spanish, 'estar a la orden del día' means something is commonplace or happening frequently."},

{type:"teach",trg:"la asamblea nacional",src:"the national assembly",pos:"noun",gender:"f",
 note:"Feminine compound noun. A legislative body.\nUsed in many Spanish-speaking countries' parliaments.",
 example:"A: La asamblea nacional aprobó la nueva ley de educación.\nB: Fue un debate largo y muy polémico.",
 exampleSrc:"A: The national assembly approved the new education law.\nB: It was a long and very controversial debate.",
 funFact:"Venezuela and Ecuador have 'Asamblea Nacional' as their parliament's name. Spain uses 'Cortes Generales' instead."},

{type:"mc",q:"La Guardia Civil es...",opts:["Un cuerpo policial militar español","Un tribunal de justicia","Un partido político","Una asociación de abogados"],ans:"Un cuerpo policial militar español",hint:"Spain's national gendarmerie, founded in 1844, known for patrolling rural areas and roads."},

{type:"teach",trg:"la educación física",src:"the physical education",pos:"noun",gender:"f",
 note:"Feminine compound noun. School subject focused on sports and fitness.\nAbbreviated: E.F.",
 example:"A: La educación física debería tener más horas en el currículo escolar.\nB: Los niños necesitan moverse más durante el día.",
 exampleSrc:"A: Physical education should have more hours in the school curriculum.\nB: Children need to move more during the day.",
 funFact:"In Spain, educación física is mandatory from primary school through bachillerato. The teacher is a 'profesor de E.F.'"},

{type:"teach",trg:"dar de alta",src:"to register / to discharge (medical)",pos:"verb",gender:null,
 note:"Verb phrase. To officially register someone.\nMedical: to discharge a patient. Tax: to register a business.",
 example:"A: El médico me dio de alta después de tres días en el hospital.\nB: Me alegro, ya tenía ganas de volver a casa.",
 exampleSrc:"A: The doctor discharged me after three days in the hospital.\nB: I'm glad, I already wanted to go home.",
 funFact:"The opposite is 'dar de baja' (to deregister / sick leave). 'Estar de baja' means to be on sick leave."},

{type:"teach",trg:"el mercado común",src:"the common market",pos:"noun",gender:"m",
 note:"Masculine compound noun. An economic zone with free trade.\nHistorical name for the EU's predecessor.",
 example:"A: España entró en el Mercado Común Europeo en 1986.\nB: Fue un momento histórico para la economía del país.",
 exampleSrc:"A: Spain joined the European Common Market in 1986.\nB: It was a historic moment for the country's economy.",
 funFact:"Older Spaniards still say 'el Mercado Común' for the EU. Spain's entry transformed its economy from agricultural to service-based."},

{type:"fb",s:"La {1} ha abierto una investigación por fraude fiscal.",a:["fiscalía"],opts:["fiscalía","guardia civil","asamblea nacional","educación física"],hint:"The public prosecution office that investigates criminal cases.",sSrc:"The {1} has opened an investigation for tax fraud."},

{type:"teach",trg:"el empleo estatal",src:"the state employment / government job",pos:"noun",gender:"m",
 note:"Masculine compound noun. Work in the public sector.\nObtained through oposiciones (civil service exams).",
 example:"A: Muchos jóvenes españoles aspiran al empleo estatal por su estabilidad.\nB: Las oposiciones son muy competitivas.",
 exampleSrc:"A: Many young Spaniards aspire to state employment for its stability.\nB: The civil service exams are very competitive.",
 funFact:"Spain's oposiciones system means government jobs require passing rigorous exams. Studying for them is called 'opositar'."},

{type:"teach",trg:"el banco mundial",src:"the World Bank",pos:"noun",gender:"m",
 note:"Masculine compound noun. An international financial institution.\nProvides loans to developing countries.",
 example:"A: El Banco Mundial ha aprobado un préstamo para mejorar la infraestructura.\nB: El dinero se destinará a carreteras y hospitales.",
 exampleSrc:"A: The World Bank has approved a loan to improve infrastructure.\nB: The money will go to roads and hospitals.",
 funFact:"The World Bank was founded in 1944. In Spanish news, it's always 'el Banco Mundial', never abbreviated."},

{type:"match",pairs:[
 {trg:"guardia civil",src:"Civil Guard"},
 {trg:"fiscalía",src:"prosecutor's office"},
 {trg:"orden del día",src:"agenda"},
 {trg:"dar de alta",src:"to discharge / register"},
 {trg:"mercado común",src:"common market"}
]},

{type:"mc",q:"'Dar de alta' en un hospital significa...",opts:["Recetar medicamentos","Permitir que el paciente se vaya a casa","Ingresar al paciente","Operar al paciente"],ans:"Permitir que el paciente se vaya a casa",hint:"When a doctor decides a patient is well enough to leave the hospital."},

{type:"fb",s:"El primer punto del {1} es la aprobación del presupuesto anual.",a:["orden del día"],opts:["orden del día","empleo estatal","banco mundial","mercado común"],hint:"The formal list of topics to be discussed at a meeting.",sSrc:"The first item on the {1} is the approval of the annual budget."},

{type:"mc",q:"España entró en el Mercado Común Europeo en...",opts:["1992","2002","1986","1975"],ans:"1986",hint:"The year Spain joined the European economic community, over a decade after Franco's death."}
]};
export default LESSON_15;
