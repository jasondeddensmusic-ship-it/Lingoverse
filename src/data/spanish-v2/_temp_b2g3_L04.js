// Spanish B2 Gap Batch 3 - Lesson 4: Social Issues
// 15 teach cards + quizzes, max 30 steps

const LESSON_4 = {id:"esv2_b2g3_l4", title:"Problemas sociales", icon:"⚖️", xp:15, board:true, steps:[
  {type:"intro", title:"Problemas sociales", desc:"Develop vocabulary for discussing social issues, injustice, and advocacy. Essential for B2-level debate and opinion expression.", goals:["Learn 15 social issue terms","Express opinions about injustice","Discuss advocacy and social change"]},

  {type:"teach", trg:"acosar", src:"to harass / to bully", pos:"verb", gender:null, note:"Strong word. Acoso escolar = school bullying.\nAcoso laboral = workplace harassment.", example:"A: Hay que denunciar a quien acosa a otros.\nB: Estoy de acuerdo, el silencio es complicidad.", exampleSrc:"A: You have to report those who harass others.\nB: I agree, silence is complicity.", funFact:"From the hunting term acoso (pursuit of prey). The word retains its aggressive connotation in modern usage."},

  {type:"teach", trg:"el agresor", src:"the aggressor / attacker", pos:"noun", gender:"m", note:"Male form. Female: la agresora.\nFrom agredir (to attack, to assault).", example:"A: ¿Identificaron al agresor?\nB: Sí, las cámaras de seguridad lo grabaron.", exampleSrc:"A: Did they identify the attacker?\nB: Yes, the security cameras recorded him.", funFact:"Agredir is one of the defective verbs in Spanish. It's only conjugated in forms where the ending starts with i."},

  {type:"teach", trg:"discriminar", src:"to discriminate", pos:"verb", gender:null, note:"Can be positive (distinguish) or negative (treat unfairly).\nDiscriminación = discrimination.", example:"A: No se puede discriminar a nadie por su origen.\nB: La ley es muy clara al respecto.", exampleSrc:"A: You cannot discriminate against anyone because of their origin.\nB: The law is very clear about that.", funFact:"From Latin discriminare (to separate). The negative meaning became dominant in the 20th century civil rights era."},

  {type:"teach", trg:"la discapacidad", src:"disability", pos:"noun", gender:"f", note:"Dis- (lack) + capacidad (ability).\nPreferred formal term over older alternatives.", example:"A: Las personas con discapacidad tienen derechos laborales específicos.\nB: Es importante garantizar la accesibilidad.", exampleSrc:"A: People with disabilities have specific labour rights.\nB: It's important to guarantee accessibility.", funFact:"Spain's ONCE foundation for people with visual disabilities runs the famous daily lottery that funds disability services."},

  {type:"teach", trg:"discapacitado", src:"disabled (person)", pos:"adj", gender:null, note:"Can be adjective or noun. Some prefer persona con discapacidad.\nUse respectfully in formal contexts.", example:"A: El edificio tiene acceso para discapacitados.\nB: Eso debería ser obligatorio en todos los edificios.", exampleSrc:"A: The building has access for disabled people.\nB: That should be mandatory in all buildings.", funFact:"Modern Spanish increasingly prefers persona con discapacidad (person-first language) over discapacitado."},

  {type:"teach", trg:"la denuncia", src:"the report / complaint (legal)", pos:"noun", gender:"f", note:"A formal report to police or authorities.\nFrom denunciar (to report, to denounce).", example:"A: ¿Has puesto la denuncia en la comisaría?\nB: Sí, esta mañana. Me dieron un número de referencia.", exampleSrc:"A: Did you file the report at the police station?\nB: Yes, this morning. They gave me a reference number.", funFact:"In Spain, poner una denuncia is the standard phrase. It's both a legal act and a civic duty for serious incidents."},

  {type:"mc", q:"¿Dónde se pone una denuncia?", opts:["En la comisaría de policía","En el supermercado","En la universidad","En el hospital"], ans:"En la comisaría de policía", hint:"A formal legal complaint is filed with law enforcement authorities."},

  {type:"teach", trg:"el desacuerdo", src:"the disagreement", pos:"noun", gender:"m", note:"Des- (negation) + acuerdo (agreement).\nThe opposite of reaching consensus.", example:"A: Hay un desacuerdo profundo entre los partidos.\nB: No logran ponerse de acuerdo en nada.", exampleSrc:"A: There is a deep disagreement between the parties.\nB: They can't agree on anything.", funFact:"The des- prefix is one of the most productive in Spanish, creating hundreds of opposites: acuerdo/desacuerdo, orden/desorden."},

  {type:"teach", trg:"el desprecio", src:"contempt / scorn", pos:"noun", gender:"m", note:"Des- (negation) + precio (price/value).\nLiterally: considering something worthless.", example:"A: Sentí su desprecio cuando me ignoró por completo.\nB: No le hagas caso, no merece tu atención.", exampleSrc:"A: I felt his contempt when he completely ignored me.\nB: Don't pay attention to him, he doesn't deserve yours.", funFact:"The etymology is revealing: despreciar literally means to un-value someone. Des- removes the precio (worth)."},

  {type:"teach", trg:"la accesibilidad", src:"accessibility", pos:"noun", gender:"f", note:"The quality of being accessible to all people.\nKey term in disability rights and urban planning.", example:"A: La accesibilidad del metro ha mejorado mucho.\nB: Sí, ahora casi todas las estaciones tienen ascensor.", exampleSrc:"A: The metro's accessibility has improved a lot.\nB: Yes, now almost all stations have a lift.", funFact:"Spain passed comprehensive accessibility laws in 2003, making it a leader in Europe for disability rights legislation."},

  {type:"fb", s:"No se puede {1} a ninguna persona por su género o religión.", a:["discriminar"], opts:["discriminar","acosar","denunciar","despreciar"], hint:"To treat someone unfairly based on characteristics like gender or religion.", sSrc:"You cannot {1} any person because of their gender or religion."},

  {type:"teach", trg:"la aprobación", src:"the approval", pos:"noun", gender:"f", note:"From aprobar (to approve). Official or social endorsement.\nAprobación de una ley = passing a law.", example:"A: La aprobación de la nueva ley fue por unanimidad.\nB: Es raro que todos los partidos estén de acuerdo.", exampleSrc:"A: The approval of the new law was unanimous.\nB: It's rare that all parties agree.", funFact:"Aprobar also means to pass an exam. Aprobar un examen = to pass a test. Two very different contexts, one verb."},

  {type:"teach", trg:"la conformidad", src:"conformity / agreement", pos:"noun", gender:"f", note:"From conforme (in agreement).\nDar conformidad = to give approval.", example:"A: ¿Tienes la conformidad del director?\nB: Sí, firmó el documento esta mañana.", exampleSrc:"A: Do you have the director's approval?\nB: Yes, he signed the document this morning.", funFact:"Conforme can mean both 'in agreement' and 'as' (conforme a la ley = according to the law). Context is key."},

  {type:"teach", trg:"la consideración", src:"consideration / regard", pos:"noun", gender:"f", note:"Respect or thoughtful attention.\nTener en consideración = to take into consideration.", example:"A: Debemos tener en consideración todas las opiniones.\nB: Por supuesto, cada punto de vista importa.", exampleSrc:"A: We must take all opinions into consideration.\nB: Of course, every point of view matters.", funFact:"The phrase 'de mi consideración' opens formal letters in Spanish, similar to 'Dear Sir/Madam' in English."},

  {type:"mc", q:"El desprecio es lo contrario de...", opts:["la consideración y el respeto","el desacuerdo y la disputa","la denuncia y la queja","la aprobación y la ley"], ans:"la consideración y el respeto", hint:"Contempt is the opposite of treating someone with value and respect."},

  {type:"match", pairs:[{trg:"acosar", src:"to harass"},{trg:"discriminar", src:"to discriminate"},{trg:"denuncia", src:"legal report"},{trg:"desprecio", src:"contempt"},{trg:"accesibilidad", src:"accessibility"}]},

  {type:"fb", s:"La {1} de esta nueva normativa protege los derechos de todos.", a:["aprobación"], opts:["aprobación","denuncia","discapacidad","conformidad"], hint:"When a law officially passes and is endorsed, this is the word for that act.", sSrc:"The {1} of this new regulation protects everyone's rights."},

  {type:"mc", q:"¿Qué significa 'acoso laboral'?", opts:["Hostigamiento en el trabajo","Accidente laboral","Contrato temporal","Ascenso profesional"], ans:"Hostigamiento en el trabajo", hint:"Acoso means harassment. When it happens at work, it's called laboral."},

  {type:"fb", s:"Hay un {1} entre los sindicatos y la empresa sobre los salarios.", a:["desacuerdo"], opts:["desacuerdo","desprecio","diagnóstico","desmayo"], hint:"When two sides cannot agree on something, there is a fundamental difference of opinion.", sSrc:"There is a {1} between the unions and the company about wages."}
]};

export default LESSON_4;
