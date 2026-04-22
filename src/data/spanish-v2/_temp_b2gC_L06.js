// B2 Gap Batch C Lesson 06 - Law & Public Order
const LESSON_6 = {id:"esv2_b2gC_l6",title:"Ley y orden público",icon:"⚖️",xp:15,board:true,steps:[
{type:"intro",title:"Ley y orden público",desc:"Learn vocabulary related to Spanish law enforcement, legal institutions, and public order.",goals:["Learn 12 words about law and public order","Discuss legal and security institutions","Use formal legal register"]},

{type:"teach",trg:"la guardia civil",src:"the Civil Guard",pos:"noun",gender:"f",
 note:"Feminine compound noun. Spain's oldest law enforcement agency.\nOperates in rural areas and borders.",
 example:"A: La guardia civil patrulla las carreteras nacionales.\nB: También se encargan del control de fronteras.",
 exampleSrc:"A: The Civil Guard patrols the national highways.\nB: They also handle border control.",
 funFact:"Founded in 1844, the Guardia Civil is a military police force. Their tricorn hats are iconic in Spain."},

{type:"teach",trg:"la incursión",src:"the incursion / raid",pos:"noun",gender:"f",
 note:"Feminine noun. A sudden attack or entry into an area.\nFrom Latin incurrere (to run into).",
 example:"A: La policía realizó una incursión en el almacén sospechoso.\nB: Encontraron mercancía de contrabando.",
 exampleSrc:"A: The police carried out a raid on the suspicious warehouse.\nB: They found contraband goods.",
 funFact:"Also used figuratively: 'hacer una incursión en la política' means to venture into politics."},

{type:"teach",trg:"la incompetencia",src:"the incompetence",pos:"noun",gender:"f",
 note:"Feminine noun. Lack of ability or skill.\nAlso a legal term: lack of jurisdiction.",
 example:"A: La incompetencia del responsable causó el problema.\nB: Deberían haber elegido a alguien con más experiencia.",
 exampleSrc:"A: The manager's incompetence caused the problem.\nB: They should have chosen someone with more experience.",
 funFact:"In Spanish law, 'incompetencia' can mean a court lacks jurisdiction, not just personal inability."},

{type:"teach",trg:"la invalidez",src:"the disability / invalidity",pos:"noun",gender:"f",
 note:"Feminine noun. The state of being unable to work.\nAlso: legal nullity of a document.",
 example:"A: Le han concedido la invalidez permanente.\nB: Ahora recibirá una pensión mensual.",
 exampleSrc:"A: He's been granted permanent disability.\nB: Now he'll receive a monthly pension.",
 funFact:"Spain distinguishes between invalidez parcial (partial) and total (total), each with different pension levels."},

{type:"mc",q:"¿Qué institución patrulla las carreteras y fronteras de España?",opts:["La guardia civil","La policía local","El ejército","Los bomberos"],ans:"La guardia civil",hint:"This is Spain's oldest law enforcement body, founded in 1844, known for its military structure."},

{type:"teach",trg:"la orden del día",src:"the agenda / order of the day",pos:"noun",gender:"f",
 note:"Feminine compound noun. The list of topics for a meeting.\nAlso used in military contexts.",
 example:"A: ¿Cuál es la orden del día de la reunión?\nB: Primero presupuestos, luego contrataciones.",
 exampleSrc:"A: What's the agenda for the meeting?\nB: First budgets, then hiring.",
 funFact:"In the Spanish military, the 'orden del día' is the daily operational directive issued by commanders."},

{type:"teach",trg:"la oratoria",src:"the oratory / public speaking",pos:"noun",gender:"f",
 note:"Feminine noun. The art of public speaking.\nFrom Latin orare (to speak).",
 example:"A: Su oratoria es brillante, convence a cualquiera.\nB: Debería dedicarse a la política.",
 exampleSrc:"A: Her oratory is brilliant, she convinces anyone.\nB: She should go into politics.",
 funFact:"Spain has a rich tradition of oratoria parlamentaria. Debates in the Cortes are famously passionate."},

{type:"teach",trg:"la paradoja",src:"the paradox",pos:"noun",gender:"f",
 note:"Feminine noun. A statement that contradicts itself.\nFrom Greek para (against) + doxa (opinion).",
 example:"A: Es una paradoja que cuanto más ahorramos, menos consumimos.\nB: Y si no consumimos, la economía se frena.",
 exampleSrc:"A: It's a paradox that the more we save, the less we consume.\nB: And if we don't consume, the economy slows down.",
 funFact:"The most famous Spanish paradox: Spain invented bureaucracy (arbitristas) yet is famous for inefficiency."},

{type:"fb",s:"La policía realizó una {1} en el edificio abandonado.",a:["incursión"],opts:["incursión","incompetencia","invalidez","oratoria"],hint:"A sudden entry or raid into a place, often by law enforcement.",sSrc:"The police carried out a {1} in the abandoned building."},

{type:"teach",trg:"la paridad",src:"the parity / equality",pos:"noun",gender:"f",
 note:"Feminine noun. The state of being equal.\nFrom Latin par (equal).",
 example:"A: La ley exige paridad en las listas electorales.\nB: Debe haber un mínimo del 40% de cada sexo.",
 exampleSrc:"A: The law demands parity on electoral lists.\nB: There must be a minimum of 40% of each sex.",
 funFact:"Spain's 2007 Equality Law was one of the first in Europe to mandate gender parity in politics."},

{type:"teach",trg:"la inconveniencia",src:"the inconvenience / inappropriateness",pos:"noun",gender:"f",
 note:"Feminine noun. Something unsuitable or an obstacle.\nFrom inconveniente (inconvenient).",
 example:"A: Lamentamos la inconveniencia que esto pueda causar.\nB: No se preocupe, lo entendemos perfectamente.",
 exampleSrc:"A: We apologize for the inconvenience this may cause.\nB: Don't worry, we understand perfectly.",
 funFact:"In formal Spanish, 'inconveniencia' is more about unsuitability than mere annoyance."},

{type:"teach",trg:"la perfidia",src:"the perfidy / treachery",pos:"noun",gender:"f",
 note:"Feminine noun. Deliberate betrayal of trust.\nFrom Latin perfidus (faithless).",
 example:"A: La perfidia de su socio le costó la empresa.\nB: Nunca debió confiar en alguien así.",
 exampleSrc:"A: His partner's perfidy cost him the company.\nB: He should never have trusted someone like that.",
 funFact:"The famous aria 'La donna e mobile' is about perfidia. In international law, perfidy is a war crime."},

{type:"mc",q:"¿Qué es la paridad en el contexto político?",opts:["El presupuesto del estado","La igualdad de representación entre hombres y mujeres","Un tipo de ley penal","La organización de un tribunal"],ans:"La igualdad de representación entre hombres y mujeres",hint:"This concept requires equal numbers of men and women in political lists."},

{type:"fb",s:"Su {1} es tan buena que convence a cualquier audiencia.",a:["oratoria"],opts:["oratoria","perfidia","paradoja","paridad"],hint:"The art and skill of delivering persuasive public speeches.",sSrc:"Her {1} is so good that she convinces any audience."},

{type:"match",pairs:[{trg:"guardia civil",src:"Civil Guard"},{trg:"incursión",src:"raid"},{trg:"paradoja",src:"paradox"},{trg:"paridad",src:"parity"},{trg:"perfidia",src:"treachery"}]},

{type:"fb",s:"Es una {1} que un país tan rico tenga tanta pobreza.",a:["paradoja"],opts:["paradoja","paridad","perfidia","incompetencia"],hint:"A seemingly contradictory situation where two truths appear to conflict.",sSrc:"It's a {1} that such a rich country has so much poverty."}
]};

export default LESSON_6;
