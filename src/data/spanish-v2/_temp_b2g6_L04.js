// B2 Gap Batch 6 Lesson 04 - Law & Justice
const LESSON_4 = {id:"esv2_b2g6_l4",title:"Ley y justicia",icon:"⚖️",xp:15,board:true,steps:[
{type:"intro",title:"Ley y justicia",desc:"Build vocabulary for discussing legal matters, crime, and the justice system in Spain.",goals:["Learn 15 legal and justice terms","Discuss the Spanish legal system","Use formal legal register"]},

{type:"teach",trg:"el impostor",src:"the impostor",pos:"noun",gender:"m",
 note:"Masculine noun. Someone who pretends to be another.\nFeminine: la impostora.",
 example:"A: Descubrieron que el doctor era un impostor.\nB: No tenía ningún título universitario.",
 exampleSrc:"A: They discovered that the doctor was an impostor.\nB: He did not have any university degree.",
 funFact:"From Latin imponere (to impose). An impostor 'imposes' a false identity on others."},

{type:"teach",trg:"la imposición",src:"the imposition / enforcement",pos:"noun",gender:"f",
 note:"Feminine noun. The act of forcing something on others.\nAlso a banking term for deposits.",
 example:"A: La imposición de nuevas normas generó debate.\nB: Muchos ciudadanos las consideran excesivas.",
 exampleSrc:"A: The imposition of new rules generated debate.\nB: Many citizens consider them excessive.",
 funFact:"In banking, 'imposición a plazo fijo' means a fixed-term deposit."},

{type:"teach",trg:"el incumplimiento",src:"the breach / non-compliance",pos:"noun",gender:"m",
 note:"Masculine noun. Failure to fulfill an obligation.\nIn- (not) + cumplimiento (fulfillment).",
 example:"A: El incumplimiento del contrato tendrá consecuencias legales.\nB: Deberían haber consultado a un abogado.",
 exampleSrc:"A: The breach of contract will have legal consequences.\nB: They should have consulted a lawyer.",
 funFact:"'Incumplimiento contractual' is one of the most common reasons for lawsuits in Spain."},

{type:"teach",trg:"la estipulación",src:"the stipulation",pos:"noun",gender:"f",
 note:"Feminine noun. A condition or requirement in an\nagreement. From Latin stipulatio.",
 example:"A: Hay una estipulación en el contrato sobre los plazos.\nB: Sí, debemos entregar antes del uno de junio.",
 exampleSrc:"A: There is a stipulation in the contract about deadlines.\nB: Yes, we must deliver before June first.",
 funFact:"In Roman law, 'stipulatio' was a formal oral contract. The word survives in modern legal Spanish."},

{type:"mc",q:"¿Qué significa incumplimiento?",opts:["No respetar una obligación o acuerdo","Un tipo de impostor","Una estipulación legal","Un depósito bancario"],ans:"No respetar una obligación o acuerdo",hint:"When someone fails to fulfill what they promised or agreed to."},

{type:"teach",trg:"la fechoría",src:"the misdeed / wrongdoing",pos:"noun",gender:"f",
 note:"Feminine noun. A bad or criminal act.\nFrom hecho (deed) with pejorative suffix.",
 example:"A: Las fechorías del estafador afectaron a cientos de personas.\nB: Espero que la justicia actúe pronto.",
 exampleSrc:"A: The swindler's misdeeds affected hundreds of people.\nB: I hope justice acts soon.",
 funFact:"The suffix -oría gives it a negative tone. Compare 'hazaña' (heroic deed) vs 'fechoría' (misdeed)."},

{type:"teach",trg:"el indicio",src:"the clue / indication",pos:"noun",gender:"m",
 note:"Masculine noun. A sign suggesting something.\nFrom Latin indicium.",
 example:"A: La policía encontró indicios de fraude en las cuentas.\nB: Ahora necesitan pruebas más sólidas.",
 exampleSrc:"A: The police found indications of fraud in the accounts.\nB: Now they need more solid evidence.",
 funFact:"In legal Spanish, 'indicios' are weaker than 'pruebas' (proof). They suggest but do not prove."},

{type:"teach",trg:"la incursión",src:"the incursion / raid",pos:"noun",gender:"f",
 note:"Feminine noun. A sudden attack or entry.\nFrom Latin incursio.",
 example:"A: La policía realizó una incursión en el almacén.\nB: Encontraron muchas cosas muy malas allí.",
 exampleSrc:"A: The police carried out a raid on the warehouse.\nB: They found many very bad things there.",
 funFact:"Also used figuratively: 'hacer una incursión en la política' means venturing into politics."},

{type:"fb",s:"Los {1} del crimen apuntaban al empleado del banco.",a:["indicios"],opts:["indicios","impostores","incumplimientos","fechorías"],hint:"Clues or signs that suggest who committed the crime.",sSrc:"The {1} of the crime pointed to the bank employee."},

{type:"teach",trg:"interrogar",src:"to interrogate",pos:"verb",gender:null,
 note:"Regular -ar verb. To question formally.\nFrom Latin interrogare.",
 example:"A: La policía va a interrogar al sospechoso.\nB: Su abogado ya está presente.",
 exampleSrc:"A: The police are going to interrogate the suspect.\nB: His lawyer is already present.",
 funFact:"'Interrogatorio' (interrogation) and 'pregunta' (question) share the Latin root rogare (to ask)."},

{type:"teach",trg:"la invalidez",src:"the invalidity / disability",pos:"noun",gender:"f",
 note:"Feminine noun. Legal invalidity, or physical disability.\nIn- (not) + validez (validity).",
 example:"A: El juez declaró la invalidez del contrato.\nB: El contrato tenía muchos problemas legales.",
 exampleSrc:"A: The judge declared the invalidity of the contract.\nB: The contract had many legal problems.",
 funFact:"'Invalidez permanente' is also a disability category in the Spanish social security system."},

{type:"teach",trg:"el causante",src:"the person responsible / originator",pos:"noun",gender:"m",
 note:"Masculine noun. The one who causes something.\nFrom causar (to cause). Also f: la causante.",
 example:"A: ¿Encontraron al causante del incendio?\nB: Sí, fue un cortocircuito en el sótano.",
 exampleSrc:"A: Did they find what caused the fire?\nB: Yes, it was a short circuit in the basement.",
 funFact:"In inheritance law, 'el causante' refers to the deceased person whose estate is being distributed."},

{type:"teach",trg:"indagar",src:"to investigate / to inquire",pos:"verb",gender:null,
 note:"Regular -ar verb. To research or dig into something.\nMore literary than 'investigar'.",
 example:"A: El detective decidió indagar en el pasado del sospechoso.\nB: Descubrió varias irregularidades.",
 exampleSrc:"A: The detective decided to investigate the suspect's past.\nB: He discovered several irregularities.",
 funFact:"From Latin indagare (to track, to trace). Related to 'indagación' (inquiry)."},

{type:"mc",q:"¿Qué es una fechoría?",opts:["Un acto malo o delictivo","Un indicio policial","Un tipo de contrato","Una incursión militar"],ans:"Un acto malo o delictivo",hint:"A wrongdoing or misdeed. Think of something bad that someone has done."},

{type:"match",pairs:[
  {trg:"impostor",src:"impostor"},
  {trg:"incumplimiento",src:"breach"},
  {trg:"estipulación",src:"stipulation"},
  {trg:"interrogar",src:"to interrogate"},
  {trg:"indagar",src:"to investigate"}
]},

{type:"fb",s:"La policía realizó una {1} en el edificio sospechoso.",a:["incursión"],opts:["incursión","invalidez","imposición","estipulación"],hint:"A sudden entry or raid by authorities.",sSrc:"The police carried out a {1} in the suspicious building."}
]};
export default LESSON_4;
