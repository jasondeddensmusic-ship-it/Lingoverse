// B2 Gap2 Lesson 01 - Law & Justice
const LESSON_1 = {id:"esv2_b2g2_l1",title:"Justicia y derecho",icon:"⚖️",xp:15,board:true,steps:[
{type:"intro",title:"Justicia y derecho",desc:"Explore the language of courts, legal proceedings, and justice in Spain.",goals:["Learn 20 words related to law and justice","Discuss legal processes in Spanish","Use formal legal vocabulary with confidence"]},

{type:"teach",trg:"absolver",src:"to acquit / to absolve",pos:"verb",gender:null,
 note:"Irregular: absuelvo, absuelves. Same pattern as resolver.",
 example:"A: ¿El juez absolvió a Juan?\nB: Sí, no había pruebas suficientes.",
 exampleSrc:"A: Did the judge acquit Juan?\nB: Yes, there was not enough evidence.",
 funFact:"From Latin absolvere (to set free). Shares the root with 'absoluto' in Spanish."},

{type:"teach",trg:"arrestar",src:"to arrest",pos:"verb",gender:null,
 note:"Regular -ar verb. Often used with the police as subject.",
 example:"A: ¿Arrestaron al sospechoso?\nB: Sí, lo detuvieron esta madrugada.",
 exampleSrc:"A: Did they arrest the suspect?\nB: Yes, they detained him early this morning.",
 funFact:"From Latin ad + restare (to stop). In Spain, 'detener' is more common in formal contexts."},

{type:"teach",trg:"el decreto",src:"the decree",pos:"noun",gender:"m",
 note:"Masculine noun. An official order from a government authority.",
 example:"A: ¿Cuándo entra en vigor el nuevo decreto?\nB: A partir del mes que viene.",
 exampleSrc:"A: When does the new decree take effect?\nB: Starting next month.",
 funFact:"A 'real decreto' is signed by the King of Spain, though the government drafts it."},

{type:"teach",trg:"censurar",src:"to censure / to censor",pos:"verb",gender:null,
 note:"Regular -ar verb. Two meanings: to criticize and to suppress.",
 example:"A: El parlamento censuró la conducta del ministro.\nB: Era inevitable tras el escándalo.",
 exampleSrc:"A: Parliament censured the minister's conduct.\nB: It was inevitable after the scandal.",
 funFact:"A 'moción de censura' is a vote of no confidence, used twice successfully in Spanish democracy."},

{type:"teach",trg:"demandar",src:"to sue / to demand",pos:"verb",gender:null,
 note:"Regular -ar verb. Legal: to file a lawsuit. General: to demand.",
 example:"A: ¿Van a demandar a la empresa?\nB: Sí, el abogado ya prepara los documentos.",
 exampleSrc:"A: Are they going to sue the company?\nB: Yes, the lawyer is already preparing the documents.",
 funFact:"'La demanda' means both 'the lawsuit' and 'the demand', depending on context."},

{type:"mc",q:"¿Qué significa absolver a un acusado?",opts:["Declararlo inocente","Condenarlo a prisión","Detenerlo en la calle","Censurar su conducta"],ans:"Declararlo inocente",hint:"Think about what happens when there is not enough evidence against someone."},

{type:"teach",trg:"la custodia",src:"the custody",pos:"noun",gender:"f",
 note:"Feminine noun. Legal guardianship or the holding of something.",
 example:"A: ¿Quién tiene la custodia de los niños?\nB: La comparten ambos padres.",
 exampleSrc:"A: Who has custody of the children?\nB: Both parents share it.",
 funFact:"'Custodia compartida' (shared custody) became the norm in Spain after 2005 legal reforms."},

{type:"teach",trg:"custodiar",src:"to guard / to keep in custody",pos:"verb",gender:null,
 note:"Regular -ar verb. To watch over or protect something valuable.",
 example:"A: ¿Quién custodia las obras del museo?\nB: Un equipo de seguridad las vigila día y noche.",
 exampleSrc:"A: Who guards the museum's works?\nB: A security team watches them day and night.",
 funFact:"The 'Guardia Civil' custodian role at airports is a common sight across Spain."},

{type:"teach",trg:"decomisar",src:"to confiscate / to seize",pos:"verb",gender:null,
 note:"Regular -ar verb. Used for official seizure of goods.",
 example:"A: La policía decomisó un cargamento de drogas.\nB: Fue una de las mayores incautaciones del año.",
 exampleSrc:"A: The police seized a shipment of drugs.\nB: It was one of the largest seizures of the year.",
 funFact:"'Incautar' is the more formal legal synonym. Both appear in Spanish news reports."},

{type:"teach",trg:"defraudar",src:"to defraud / to disappoint",pos:"verb",gender:null,
 note:"Regular -ar verb. Two meanings: financial fraud and emotional letdown.",
 example:"A: Dijeron que intentó defraudar a Hacienda.\nB: Dicen que no pagó impuestos durante años.",
 exampleSrc:"A: They said he tried to defraud the Treasury.\nB: They say he did not pay taxes for years.",
 funFact:"'Hacienda somos todos' (We are all the Treasury) is Spain's famous tax slogan."},

{type:"fb",s:"La policía {1} las mercancías ilegales en el puerto.",a:["decomisó"],opts:["decomisó","absolvió","censuró","custodió"],hint:"The verb meaning to officially seize illegal goods.",sSrc:"The police {1} the illegal goods at the port."},

{type:"teach",trg:"corromper",src:"to corrupt",pos:"verb",gender:null,
 note:"Regular -er verb. To morally degrade or to bribe.",
 example:"A: El poder puede corromper a cualquiera.\nB: Por eso necesitamos controles independientes.",
 exampleSrc:"A: Power can corrupt anyone.\nB: That is why we need independent oversight.",
 funFact:"Spain's major corruption cases like 'Gürtel' shaped public distrust of institutions."},

{type:"teach",trg:"el agresor",src:"the aggressor / attacker",pos:"noun",gender:"m",
 note:"Masculine noun. Feminine: la agresora.\nThe person who commits an assault.",
 example:"A: ¿Identificaron al agresor?\nB: Sí, lo reconoció la víctima.",
 exampleSrc:"A: Did they identify the attacker?\nB: Yes, the victim recognized him.",
 funFact:"In Spanish law, 'agresor' covers both physical and verbal assault under the penal code."},

{type:"teach",trg:"anular",src:"to annul / to cancel",pos:"verb",gender:null,
 note:"Regular -ar verb. To declare something legally void.",
 example:"A: El tribunal anuló el contrato por irregularidades.\nB: Ambas partes deberán negociar de nuevo.",
 exampleSrc:"A: The court annulled the contract due to irregularities.\nB: Both parties will need to negotiate again.",
 funFact:"'Matrimonio anulado' is distinct from divorce in Spanish law and Catholic tradition."},

{type:"teach",trg:"arbitrario",src:"arbitrary",pos:"adj",gender:null,
 note:"Adjective. Based on personal whim rather than reason or system.\nFeminine: arbitraria.",
 example:"A: La decisión parece completamente arbitraria.\nB: No se basan en ningún criterio objetivo.",
 exampleSrc:"A: The decision seems completely arbitrary.\nB: It is not based on any objective criteria.",
 funFact:"From Latin arbitrarius. An 'árbitro' (referee) makes decisions, hopefully not arbitrary ones."},

{type:"mc",q:"¿Qué hace un juez cuando absuelve a alguien?",opts:["Lo declara no culpable","Lo condena a prisión","Lo deporta del país","Le impone una multa"],ans:"Lo declara no culpable",hint:"This is the opposite of finding someone guilty in a trial."},

{type:"teach",trg:"defectuoso",src:"defective / faulty",pos:"adj",gender:null,
 note:"Adjective. Having a flaw or malfunction.\nFeminine: defectuosa.",
 example:"A: El producto llegó defectuoso.\nB: Puedes reclamarlo con la garantía.",
 exampleSrc:"A: The product arrived defective.\nB: You can claim it under the warranty.",
 funFact:"Spanish consumer law gives you 2 years to return defective products, one of the longest in Europe."},

{type:"teach",trg:"defensivo",src:"defensive",pos:"adj",gender:null,
 note:"Adjective. Intended to protect or defend.\nFeminine: defensiva.",
 example:"A: El equipo jugó de forma muy defensiva.\nB: Solo querían mantener el resultado.",
 exampleSrc:"A: The team played very defensively.\nB: They only wanted to maintain the result.",
 funFact:"'A la defensiva' means 'on the defensive' and is used both in sports and personal interactions."},

{type:"teach",trg:"la demagogia",src:"the demagoguery",pos:"noun",gender:"f",
 note:"Feminine noun. Political manipulation through emotional appeals.",
 example:"A: Eso es pura demagogia, no ofrece soluciones reales.\nB: Tienes razón, solo busca votos fáciles.",
 exampleSrc:"A: That is pure demagoguery, it offers no real solutions.\nB: You are right, it only seeks easy votes.",
 funFact:"From Greek demos (people) + agogos (leading). A demagogue 'leads the people' astray."},

{type:"teach",trg:"el demócrata",src:"the democrat",pos:"noun",gender:"m",
 note:"Common gender noun. Also adjective: un país demócrata.\nFeminine: la demócrata.",
 example:"A: Se considera un demócrata convencido.\nB: Siempre defiende la libertad de expresión.",
 exampleSrc:"A: He considers himself a convinced democrat.\nB: He always defends freedom of expression.",
 funFact:"Spain's transition to democracy (1975-1982) is studied worldwide as a model of peaceful change."},

{type:"teach",trg:"el denominador",src:"the denominator",pos:"noun",gender:"m",
 note:"Masculine noun. The bottom number in a fraction. Also: common factor.",
 example:"A: ¿Cuál es el denominador común de todos estos casos?\nB: La falta de transparencia.",
 exampleSrc:"A: What is the common denominator in all these cases?\nB: The lack of transparency.",
 funFact:"'Denominador común' is used figuratively far more often than mathematically in everyday Spanish."},

{type:"fb",s:"El tribunal {1} el contrato por cláusulas abusivas.",a:["anuló"],opts:["anuló","arrestó","censuró","decomisó"],hint:"The verb meaning to declare something legally void or invalid.",sSrc:"The court {1} the contract due to abusive clauses."},

{type:"match",pairs:[{trg:"absolver",src:"to acquit"},{trg:"censurar",src:"to censure"},{trg:"decomisar",src:"to confiscate"},{trg:"custodiar",src:"to guard"},{trg:"demandar",src:"to sue"}]},

{type:"mc",q:"¿Qué es la demagogia?",opts:["Manipulación política con apelaciones emocionales","Un tipo de gobierno democrático","Un sistema de justicia alternativo","Una forma de protesta pacífica"],ans:"Manipulación política con apelaciones emocionales",hint:"Think about politicians who use emotions instead of real solutions to get votes."},

{type:"fb",s:"Lo acusaron de {1} a Hacienda durante cinco años.",a:["defraudar"],opts:["defraudar","demandar","decomisar","corromper"],hint:"The verb for committing financial fraud, especially with taxes.",sSrc:"He was accused of {1} the Treasury for five years."}
]};

export default LESSON_1;
