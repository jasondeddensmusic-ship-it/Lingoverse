// B2 Gap Lesson 17 - Social Issues
const LESSON_17 = {id:"esv2_b2gap_l17",title:"Cuestiones sociales",icon:"📢",xp:15,board:true,steps:[
{type:"intro",title:"Cuestiones sociales",desc:"Tackle vocabulary for discussing social problems, awareness, and community participation.",goals:["Learn 20 social issue words","Discuss community and inequality","Express opinions on social topics"]},

{type:"teach",trg:"el cinismo",src:"the cynicism",pos:"noun",gender:"m",
 note:"Masculine noun. Distrustful attitude toward others' motives.",
 example:"A: Su cinismo le impide confiar en los demás.\nB: Siempre piensa que hay segundas intenciones.",
 exampleSrc:"A: His cynicism prevents him from trusting others.\nB: He always thinks there are hidden motives.",
 funFact:"From Greek kynikos (dog-like). The Cynic philosophers lived like dogs, rejecting social norms."},

{type:"teach",trg:"el cimiento",src:"the foundation / basis",pos:"noun",gender:"m",
 note:"Masculine noun. The base of a building, or figuratively of an idea.\nUsually plural: los cimientos.",
 example:"A: Los cimientos del edificio son de hormigón armado.\nB: Así resiste terremotos moderados.",
 exampleSrc:"A: The building's foundations are reinforced concrete.\nB: That way it withstands moderate earthquakes.",
 funFact:"From Latin caementum (rough stone). 'Cimiento' and English 'cement' share the same root."},

{type:"teach",trg:"el chorro",src:"the stream / jet",pos:"noun",gender:"m",
 note:"Masculine noun. A stream or gush of liquid.\nColloquial: 'a chorros' means in abundance.",
 example:"A: El agua salía a chorros de la fuente.\nB: Los niños jugaban encantados.",
 exampleSrc:"A: Water gushed out of the fountain.\nB: The children played delightedly.",
 funFact:"'Llover a chorros' means to pour down rain. 'Sudar a chorros' means to sweat profusely."},

{type:"teach",trg:"la borda",src:"the gunwale / ship's rail",pos:"noun",gender:"f",
 note:"Feminine noun. The upper edge of a ship's side.\n'Tirar por la borda' = to throw overboard.",
 example:"A: Tiró todas sus oportunidades por la borda.\nB: Una decisión que lamentará siempre.",
 exampleSrc:"A: He threw all his opportunities overboard.\nB: A decision he will always regret.",
 funFact:"'Motor fuera borda' (outboard motor). 'Tirar por la borda' is used figuratively for wasting chances."},

{type:"teach",trg:"comarcal",src:"regional / district-level",pos:"adj",gender:null,
 note:"Adjective. Related to a comarca (district). Invariable for gender.",
 example:"A: El hospital comarcal atiende a toda la zona rural.\nB: Es el más cercano para cinco pueblos.",
 exampleSrc:"A: The district hospital serves the entire rural area.\nB: It is the closest one for five villages.",
 funFact:"A 'comarca' is an administrative unit between a municipality and a province. Unique to Spain."},

{type:"mc",q:"'Tirar por la borda' significa:",opts:["Desperdiciar algo valioso","Navegar con cuidado","Construir un barco","Pescar en el mar"],ans:"Desperdiciar algo valioso",hint:"Figuratively throwing something valuable overboard, wasting it."},

{type:"teach",trg:"asistencial",src:"welfare / care-related",pos:"adj",gender:null,
 note:"Adjective. Related to social assistance or healthcare.",
 example:"A: Los servicios asistenciales del barrio son insuficientes.\nB: Necesitamos más centros de salud.",
 exampleSrc:"A: The welfare services in the neighborhood are insufficient.\nB: We need more health centers.",
 funFact:"'Centro asistencial' is a healthcare or social services center. Key in Spain's welfare state."},

{type:"teach",trg:"asociativo",src:"associative / community-based",pos:"adj",gender:null,
 note:"Adjective. Related to forming associations.\nFeminine: asociativa.",
 example:"A: El movimiento asociativo es muy fuerte en este barrio.\nB: Hay asociaciones para todo.",
 exampleSrc:"A: The community association movement is very strong in this neighborhood.\nB: There are associations for everything.",
 funFact:"Spain has a rich tradition of 'movimiento asociativo' (community organizing) since democracy."},

{type:"teach",trg:"la afluencia",src:"the influx / turnout",pos:"noun",gender:"f",
 note:"Feminine noun. A large flow of people or things arriving.",
 example:"A: La afluencia de turistas batió un récord este verano.\nB: Los hoteles estaban completos.",
 exampleSrc:"A: The influx of tourists broke a record this summer.\nB: Hotels were fully booked.",
 funFact:"From Latin affluentia (flowing toward). Spain had 85 million tourist arrivals in 2023."},

{type:"teach",trg:"el alumnado",src:"the student body",pos:"noun",gender:"m",
 note:"Masculine collective noun. All students as a group.",
 example:"A: El alumnado protestó contra los recortes en educación.\nB: Organizaron una manifestación pacífica.",
 exampleSrc:"A: The student body protested against education cuts.\nB: They organized a peaceful demonstration.",
 funFact:"Collective nouns with -ado are common: profesorado (teaching staff), alumnado (student body)."},

{type:"fb",s:"La {1} de visitantes al museo superó las expectativas.",a:["afluencia"],opts:["afluencia","borda","cinismo","coincidencia"],hint:"A large flow of people arriving at a place.",sSrc:"The {1} of visitors to the museum exceeded expectations."},

{type:"teach",trg:"competer",src:"to be the responsibility of",pos:"verb",gender:null,
 note:"Regular -er verb. To fall within someone's authority.\nDifferent from competir (to compete).",
 example:"A: Ese asunto no me compete a mí.\nB: Habla con el jefe de departamento.",
 exampleSrc:"A: That matter is not my responsibility.\nB: Talk to the department head.",
 funFact:"Not to be confused with 'competir' (to compete). 'Competer' means to be in one's jurisdiction."},

{type:"teach",trg:"complacer",src:"to please / to satisfy",pos:"verb",gender:null,
 note:"Irregular like conocer. Complazco, complaces...\nReflexive: complacerse en.",
 example:"A: Nos complace anunciar el ganador del premio.\nB: El público aplaudió con entusiasmo.",
 exampleSrc:"A: We are pleased to announce the prize winner.\nB: The audience applauded with enthusiasm.",
 funFact:"Very formal. 'Nos complace' is the standard opening for official announcements in Spanish."},

{type:"teach",trg:"comprobable",src:"verifiable / provable",pos:"adj",gender:null,
 note:"Adjective. Able to be checked or proven. Invariable for gender.",
 example:"A: Los datos deben ser comprobables.\nB: Sin evidencia, no podemos aceptar la teoría.",
 exampleSrc:"A: The data must be verifiable.\nB: Without evidence, we cannot accept the theory.",
 funFact:"From comprobar (to verify). The -able suffix adds possibility: comprobable = can be checked."},

{type:"teach",trg:"conminar",src:"to urge / to threaten with consequences",pos:"verb",gender:null,
 note:"Regular -ar verb. To order someone firmly, implying penalties.",
 example:"A: El juez le conminó a pagar la multa en diez días.\nB: Si no paga, le embargarán los bienes.",
 exampleSrc:"A: The judge ordered him to pay the fine in ten days.\nB: If he does not pay, his assets will be seized.",
 funFact:"From Latin comminari (to threaten). Very formal and legal. Not used in casual conversation."},

{type:"mc",q:"'Ese asunto no me compete' significa:",opts:["No me interesa","No es mi responsabilidad","No lo entiendo","No me gusta"],ans:"No es mi responsabilidad",hint:"It does not fall within your authority or jurisdiction."},

{type:"teach",trg:"el adefesio",src:"the eyesore / ridiculous outfit",pos:"noun",gender:"m",
 note:"Masculine noun. Something ugly or ridiculous, especially clothing.",
 example:"A: Va hecha un adefesio con esa combinación de colores.\nB: Cada uno tiene su propio estilo.",
 exampleSrc:"A: She looks ridiculous with that color combination.\nB: Everyone has their own style.",
 funFact:"Possibly from the ad Ephesios (to the Ephesians) letters read to a confused audience."},

{type:"teach",trg:"el accidentado",src:"the accident victim / injured person",pos:"noun",gender:"m",
 note:"Masculine noun. Someone involved in an accident.\nFeminine: la accidentada. Also adjective: eventful.",
 example:"A: Los accidentados fueron trasladados al hospital.\nB: La mayoría tenía heridas leves.",
 exampleSrc:"A: The accident victims were taken to the hospital.\nB: Most had minor injuries.",
 funFact:"As adjective, 'un viaje accidentado' means an eventful journey full of incidents."},

{type:"teach",trg:"la coincidencia",src:"the coincidence",pos:"noun",gender:"f",
 note:"Feminine noun. When things happen at the same time by chance.",
 example:"A: Es una coincidencia que los dos estemos aquí.\nB: Yo también vengo por primera vez.",
 exampleSrc:"A: It is a coincidence that we are both here.\nB: I am also coming for the first time.",
 funFact:"'Qué coincidencia' and 'casualidad' are interchangeable. Spain loves commenting on coincidences."},

{type:"teach",trg:"el colista",src:"the last-place team / bottom-dweller",pos:"noun",gender:"m",
 note:"Common gender noun. The team or person at the bottom of a ranking.",
 example:"A: El colista de la liga dio la sorpresa y ganó.\nB: Nadie esperaba ese resultado.",
 exampleSrc:"A: The bottom team in the league pulled off a surprise win.\nB: Nobody expected that result.",
 funFact:"From cola (tail/queue). The 'colista' is at the tail end of the table. Very common in sports."},

{type:"fb",s:"Los datos de la investigación deben ser {1} por otros expertos.",a:["comprobables"],opts:["comprobables","asistenciales","asociativos","comarcales"],hint:"Able to be verified or checked by other researchers.",sSrc:"The research data must be {1} by other experts."},

{type:"mc",q:"'Nos complace anunciar' es una frase:",opts:["Coloquial","Muy informal","Muy formal","De uso deportivo"],ans:"Muy formal",hint:"This is how official announcements begin in Spanish."},

{type:"match",pairs:[{trg:"cinismo",src:"cynicism"},{trg:"afluencia",src:"influx"},{trg:"alumnado",src:"student body"},{trg:"colista",src:"last-place team"},{trg:"adefesio",src:"eyesore"}]},

{type:"fb",s:"El {1} de la liga logró una victoria histórica.",a:["colista"],opts:["colista","colegiado","cinismo","alumnado"],hint:"The team at the very bottom of the league standings.",sSrc:"The {1} of the league achieved a historic victory."},

{type:"mc",q:"'Servicios asistenciales' se refieren a:",opts:["Restaurantes","Escuelas privadas","Tiendas de lujo","Servicios de atención social y sanitaria"],ans:"Servicios de atención social y sanitaria",hint:"Welfare and healthcare services for the community."}
]};

export default LESSON_17;
