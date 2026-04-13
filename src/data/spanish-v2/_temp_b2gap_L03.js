// B2 Gap Lesson 03 - Law & Conflict
const LESSON_3 = {id:"esv2_b2gap_l3",title:"Ley y conflicto",icon:"⚖️",xp:15,board:true,steps:[
{type:"intro",title:"Ley y conflicto",desc:"Discuss legal proceedings, accusations, and conflict situations with the right vocabulary.",goals:["Learn 20 words about law and conflict","Describe legal situations","Talk about aggression and justice"]},

{type:"teach",trg:"la acusación",src:"the accusation",pos:"noun",gender:"f",
 note:"Feminine noun. A formal charge of wrongdoing.",
 example:"A: La acusación fue presentada ante el juez.\nB: El acusado negó todos los cargos.",
 exampleSrc:"A: The accusation was presented before the judge.\nB: The accused denied all charges.",
 funFact:"In Spanish courts, the 'acusación particular' allows crime victims to actively prosecute."},

{type:"teach",trg:"el agresor",src:"the aggressor",pos:"noun",gender:"m",
 note:"Masculine noun. The person who attacks.\nFeminine: la agresora.",
 example:"A: ¿Identificaron al agresor?\nB: Sí, fue detenido pocas horas después.",
 exampleSrc:"A: Did they identify the aggressor?\nB: Yes, he was arrested a few hours later.",
 funFact:"From Latin aggressor. In Spanish law, the 'agresor' faces heavier penalties if the attack was planned."},

{type:"teach",trg:"el acoso",src:"the harassment",pos:"noun",gender:"m",
 note:"Masculine noun. Persistent unwanted attention or bullying.",
 example:"A: El acoso escolar es un problema grave.\nB: Los colegios necesitan mejores protocolos.",
 exampleSrc:"A: School bullying is a serious problem.\nB: Schools need better protocols.",
 funFact:"'Acoso laboral' (workplace harassment) and 'acoso escolar' (bullying) are common compounds."},

{type:"teach",trg:"asaltar",src:"to assault / to rob",pos:"verb",gender:null,
 note:"Regular -ar verb. Can mean physical assault or robbery.",
 example:"A: Asaltaron el banco a plena luz del día.\nB: Es increíble, había mucha gente alrededor.",
 exampleSrc:"A: They robbed the bank in broad daylight.\nB: Incredible, there were many people around.",
 funFact:"From Old French assaillir. 'Asaltar' covers both robbery and military assault in Spanish."},

{type:"teach",trg:"apuñalar",src:"to stab",pos:"verb",gender:null,
 note:"Regular -ar verb. From puñal (dagger).",
 example:"A: La víctima fue apuñalada en el brazo.\nB: Por suerte, la herida no fue profunda.",
 exampleSrc:"A: The victim was stabbed in the arm.\nB: Luckily, the wound was not deep.",
 funFact:"From puño (fist) via puñal (dagger). The fist holds the blade, giving us 'apuñalar'."},

{type:"mc",q:"Un ataque persistente contra una persona es:",opts:["una acusación","un acoso","un asalto","un consenso"],ans:"un acoso",hint:"This word describes ongoing, unwanted attention or bullying."},

{type:"teach",trg:"el apuñalamiento",src:"the stabbing",pos:"noun",gender:"m",
 note:"Masculine noun. The act of stabbing someone.",
 example:"A: Hubo un apuñalamiento en el centro anoche.\nB: ¿Detuvieron al responsable?",
 exampleSrc:"A: There was a stabbing downtown last night.\nB: Did they arrest the person responsible?",
 funFact:"The -miento suffix turns verbs into nouns: apuñalar becomes apuñalamiento (the act of stabbing)."},

{type:"teach",trg:"el cautivo",src:"the captive",pos:"noun",gender:"m",
 note:"Masculine noun. A person held prisoner.\nFeminine: la cautiva.",
 example:"A: Los cautivos fueron liberados tras las negociaciones.\nB: Llevaban meses retenidos.",
 exampleSrc:"A: The captives were freed after negotiations.\nB: They had been held for months.",
 funFact:"Cervantes was a captive in Algiers for five years, an experience reflected in Don Quixote."},

{type:"teach",trg:"la cláusula",src:"the clause",pos:"noun",gender:"f",
 note:"Feminine noun. A provision in a legal document.",
 example:"A: Hay una cláusula que prohíbe la reventa.\nB: Entonces no podemos vender las entradas.",
 exampleSrc:"A: There is a clause that prohibits resale.\nB: Then we cannot sell the tickets.",
 funFact:"From Latin clausula (a closing). Legal contracts in Spain can have dozens of 'cláusulas'."},

{type:"teach",trg:"comparecer",src:"to appear (in court)",pos:"verb",gender:null,
 note:"Irregular verb like parecer.\nComparezco, compareces, comparece...",
 example:"A: El acusado debe comparecer ante el tribunal.\nB: Su abogado ya está preparado.",
 exampleSrc:"A: The accused must appear before the court.\nB: His lawyer is already prepared.",
 funFact:"From Latin comparescere. In Spain, failing to appear in court can result in arrest."},

{type:"fb",s:"La {1} fue presentada por la fiscalía el lunes.",a:["acusación"],opts:["acusación","cláusula","colisión","confusión"],hint:"A formal charge brought by prosecutors against someone.",sSrc:"The {1} was filed by the prosecution on Monday."},

{type:"teach",trg:"la colisión",src:"the collision",pos:"noun",gender:"f",
 note:"Feminine noun. A crash or conflict between things or ideas.",
 example:"A: La colisión entre los dos coches fue terrible.\nB: Afortunadamente, nadie resultó herido.",
 exampleSrc:"A: The collision between the two cars was terrible.\nB: Fortunately, nobody was injured.",
 funFact:"Can be physical (cars) or abstract (ideas). 'Colisión de intereses' means conflict of interest."},

{type:"teach",trg:"el causante",src:"the person responsible / the cause",pos:"noun",gender:"m",
 note:"Masculine noun. The one who causes something.\nFeminine: la causante.",
 example:"A: ¿Quién fue el causante del incendio?\nB: Todavía están investigando.",
 exampleSrc:"A: Who was responsible for the fire?\nB: They are still investigating.",
 funFact:"From causar (to cause). In insurance, 'el causante' determines who pays the damages."},

{type:"teach",trg:"causal",src:"causal",pos:"adj",gender:null,
 note:"Adjective. Relating to cause and effect. Invariable for gender.",
 example:"A: ¿Hay una relación causal entre ambos hechos?\nB: Los expertos creen que sí.",
 exampleSrc:"A: Is there a causal relationship between both events?\nB: The experts believe so.",
 funFact:"In grammar, 'oración causal' is a clause that explains why, introduced by 'porque' or 'ya que'."},

{type:"teach",trg:"el cese",src:"the cessation / dismissal",pos:"noun",gender:"m",
 note:"Masculine noun. The stopping of something, or a firing from a job.",
 example:"A: El ministro anunció su cese inmediato.\nB: No esperaba nadie esa dimisión.",
 exampleSrc:"A: The minister announced his immediate dismissal.\nB: Nobody expected that resignation.",
 funFact:"'Cese' can mean both stopping an activity and being dismissed from a position."},

{type:"mc",q:"El acusado debe comparecer ante el:",opts:["hospital","restaurante","tribunal","estadio"],ans:"tribunal",hint:"This is where legal cases are heard and judged."},

{type:"teach",trg:"la cesión",src:"the cession / transfer",pos:"noun",gender:"f",
 note:"Feminine noun. The act of handing over rights or territory.",
 example:"A: La cesión de los derechos se formalizó ayer.\nB: Ya es oficial, el contrato está firmado.",
 exampleSrc:"A: The transfer of rights was formalized yesterday.\nB: It is now official, the contract is signed.",
 funFact:"From Latin cessio. Spain's history involves many 'cesiones' of territory through treaties."},

{type:"teach",trg:"la confusión",src:"the confusion",pos:"noun",gender:"f",
 note:"Feminine noun. A state of disorder or misunderstanding.",
 example:"A: Hubo mucha confusión con los horarios.\nB: Nadie sabía a qué hora empezaba.",
 exampleSrc:"A: There was a lot of confusion with the schedules.\nB: Nobody knew what time it started.",
 funFact:"From Latin confusio. In legal Spanish, 'confusión de derechos' merges two opposing legal rights."},

{type:"teach",trg:"el condicional",src:"the conditional (sentence)",pos:"noun",gender:"m",
 note:"Masculine noun. In law: a conditional sentence.\nAlso: the grammatical mood.",
 example:"A: Le impusieron un condicional de dos años.\nB: Debe cumplir ciertas condiciones.",
 exampleSrc:"A: He was given a two-year conditional sentence.\nB: He must meet certain conditions.",
 funFact:"In grammar, the 'condicional' mood expresses hypotheticals: 'Yo iría' (I would go)."},

{type:"teach",trg:"consecutivo",src:"consecutive",pos:"adj",gender:null,
 note:"Adjective. Following one after another.\nFeminine: consecutiva.",
 example:"A: Lleva tres victorias consecutivas.\nB: Es un récord impresionante.",
 exampleSrc:"A: He has three consecutive victories.\nB: It is an impressive record.",
 funFact:"From Latin consecutivus. 'Días consecutivos' means days in a row, without interruption."},

{type:"teach",trg:"concerniente",src:"concerning / relating to",pos:"adj",gender:null,
 note:"Adjective. Relating to or about something. Invariable for gender.\nUsed with 'a': concerniente a.",
 example:"A: Todo lo concerniente al caso está clasificado.\nB: Solo los abogados pueden acceder.",
 exampleSrc:"A: Everything concerning the case is classified.\nB: Only the lawyers can access it.",
 funFact:"From concernir (to concern). Very formal, used mainly in legal and bureaucratic language."},

{type:"fb",s:"El {1} del director sorprendió a todos en la empresa.",a:["cese"],opts:["cese","acoso","cautivo","causante"],hint:"The sudden stopping or dismissal from a position.",sSrc:"The {1} of the director surprised everyone in the company."},

{type:"mc",q:"¿Qué es una cláusula?",opts:["Una disposición en un documento legal","Un tipo de delito","Una sala del tribunal","Un agente de policía"],ans:"Una disposición en un documento legal",hint:"Think about the specific provisions written in contracts."},

{type:"match",pairs:[{trg:"acusación",src:"accusation"},{trg:"cautivo",src:"captive"},{trg:"cláusula",src:"clause"},{trg:"cesión",src:"cession / transfer"},{trg:"colisión",src:"collision"}]},

{type:"fb",s:"Los dos coches sufrieron una {1} en la autopista.",a:["colisión"],opts:["colisión","confusión","cesión","acusación"],hint:"A crash between two vehicles.",sSrc:"The two cars suffered a {1} on the highway."},

{type:"mc",q:"Tres victorias seguidas sin interrupción son victorias:",opts:["causales","consecutivas","condicionales","concernientes"],ans:"consecutivas",hint:"One after another, in an unbroken sequence."}
]};

export default LESSON_3;
