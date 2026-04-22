// B2 Gap2 Lesson 04 - Health & the Body
const LESSON_4 = {id:"esv2_b2g2_l4",title:"Salud y bienestar",icon:"🏥",xp:15,board:true,steps:[
{type:"intro",title:"Salud y bienestar",desc:"Build vocabulary for discussing health, medical conditions, and physical wellbeing in Spanish.",goals:["Learn 20 words about health and the body","Describe symptoms and conditions","Navigate medical conversations confidently"]},

{type:"teach",trg:"asfixiar",src:"to suffocate / to asphyxiate",pos:"verb",gender:null,
 note:"Regular -ar verb. To deprive of air. Reflexive: asfixiarse.",
 example:"A: El humo puede asfixiar a las personas atrapadas.\nB: Por eso es vital tener detectores de humo.",
 exampleSrc:"A: Smoke can suffocate people who are trapped.\nB: That is why it is vital to have smoke detectors.",
 funFact:"From Greek asphyxia (stopping of the pulse). Spanish firefighters say 'asfixia por humo'."},

{type:"teach",trg:"la alucinación",src:"the hallucination",pos:"noun",gender:"f",
 note:"Feminine noun. Seeing or hearing things that are not real.",
 example:"A: Las altas fiebres le provocaron alucinaciones.\nB: Veía figuras que no existían.",
 exampleSrc:"A: The high fevers caused him hallucinations.\nB: He saw figures that did not exist.",
 funFact:"'Alucinar' in colloquial Spanish means 'to be amazed': 'Estoy alucinando' (I cannot believe it)."},

{type:"teach",trg:"adiposo",src:"adipose / fatty",pos:"adj",gender:null,
 note:"Adjective. Relating to body fat.\nFeminine: adiposa.",
 example:"A: El tejido adiposo cumple funciones protectoras.\nB: También almacena energía para el cuerpo.",
 exampleSrc:"A: Adipose tissue serves protective functions.\nB: It also stores energy for the body.",
 funFact:"Medical Spanish uses 'adiposo' while everyday language prefers 'graso' or 'gordo'."},

{type:"teach",trg:"capilar",src:"capillary / hair-related",pos:"adj",gender:null,
 note:"Adjective. Relating to hair or to tiny blood vessels. Same form for m/f.",
 example:"A: ¿Qué tratamiento capilar me recomiendas?\nB: Uno con biotina para fortalecer el pelo.",
 exampleSrc:"A: What hair treatment do you recommend?\nB: One with biotin to strengthen the hair.",
 funFact:"'Capilar' covers both meanings in Spanish: 'vasos capilares' (capillary vessels) and hair care."},

{type:"teach",trg:"el cutis",src:"the complexion / skin",pos:"noun",gender:"m",
 note:"Masculine noun. The skin of the face. Invariable: el/los cutis.",
 example:"A: Tienes un cutis muy bonito.\nB: Gracias, me cuido mucho la piel.",
 exampleSrc:"A: You have a very beautiful complexion.\nB: Thank you, I take great care of my skin.",
 funFact:"From Latin cutis (skin). In Spain, skincare culture has boomed, especially 'rutina del cutis'."},

{type:"mc",q:"¿Qué es una alucinación?",opts:["Ver o escuchar algo que no existe","Un dolor de cabeza fuerte","Una alergia estacional","Un tipo de medicamento"],ans:"Ver o escuchar algo que no existe",hint:"Think about perceiving things that are not really there."},

{type:"teach",trg:"crónico",src:"chronic",pos:"adj",gender:null,
 note:"Adjective. Long-lasting, persistent (of illness).\nFeminine: crónica.",
 example:"A: Sufre de dolor crónico de espalda.\nB: Lleva años con tratamiento de fisioterapia.",
 exampleSrc:"A: He suffers from chronic back pain.\nB: He has been in physiotherapy treatment for years.",
 funFact:"From Greek chronos (time). A 'crónica' is also a news report, sharing the 'time' root."},

{type:"teach",trg:"el cadáver",src:"the corpse / body",pos:"noun",gender:"m",
 note:"Masculine noun. A dead body. Formal and medical term.",
 example:"A: El forense examinó el cadáver durante tres horas.\nB: Determinó que la causa fue natural.",
 exampleSrc:"A: The forensic doctor examined the body for three hours.\nB: He determined that the cause was natural.",
 funFact:"The word is stressed on the second syllable: ca-DÁ-ver. From Latin cadere (to fall)."},

{type:"teach",trg:"el ambulatorio",src:"the outpatient clinic",pos:"noun",gender:"m",
 note:"Masculine noun. A local health center for non-emergency care.",
 example:"A: Tengo cita en el ambulatorio a las diez.\nB: ¿Es para el médico de cabecera?",
 exampleSrc:"A: I have an appointment at the clinic at ten.\nB: Is it with your general practitioner?",
 funFact:"Spain's public health system uses 'centros de salud' and 'ambulatorios' for primary care."},

{type:"teach",trg:"el agotamiento",src:"the exhaustion",pos:"noun",gender:"m",
 note:"Masculine noun. Extreme physical or mental tiredness.",
 example:"A: El agotamiento le impide concentrarse en el trabajo.\nB: Necesita tomarse unos días de descanso.",
 exampleSrc:"A: Exhaustion prevents him from concentrating at work.\nB: He needs to take a few days off.",
 funFact:"'Agotamiento nervioso' (nervous exhaustion) was a common diagnosis in Spain before 'burnout' arrived."},

{type:"teach",trg:"la absorción",src:"the absorption",pos:"noun",gender:"f",
 note:"Feminine noun. The process of absorbing nutrients, liquid, or information.",
 example:"A: La absorción de hierro mejora con vitamina C.\nB: Por eso conviene tomar zumo de naranja.",
 exampleSrc:"A: Iron absorption improves with vitamin C.\nB: That is why it is good to drink orange juice.",
 funFact:"Also used in business: 'absorción de una empresa' means a corporate takeover or merger."},

{type:"fb",s:"Sufre de dolor {1} de espalda desde hace años.",a:["crónico"],opts:["crónico","adiposo","capilar","agudo"],hint:"A medical adjective meaning long-lasting and persistent, not temporary.",sSrc:"He suffers from {1} back pain for years."},

{type:"teach",trg:"el alivio",src:"the relief",pos:"noun",gender:"m",
 note:"Masculine noun. A feeling of comfort after pain or worry ends.",
 example:"A: ¡Qué alivio saber que la operación salió bien!\nB: Sí, todos estábamos muy preocupados.",
 exampleSrc:"A: What a relief to know the operation went well!\nB: Yes, we were all very worried.",
 funFact:"'Suspiro de alivio' (sigh of relief) is one of the most common collocations in Spanish."},

{type:"teach",trg:"la cólera",src:"the cholera / rage",pos:"noun",gender:"f",
 note:"Feminine noun. The disease cholera, or intense anger.\nNote: el cólera (m) = disease only.",
 example:"A: El brote de cólera afectó a miles de personas.\nB: La falta de agua potable fue la causa principal.",
 exampleSrc:"A: The cholera outbreak affected thousands of people.\nB: The lack of clean water was the main cause.",
 funFact:"Gender matters: 'el cólera' is always the disease, but 'la cólera' can mean both disease and rage."},

{type:"teach",trg:"acústico",src:"acoustic",pos:"adj",gender:null,
 note:"Adjective. Relating to sound or hearing.\nFeminine: acústica.",
 example:"A: El aislamiento acústico de este piso es terrible.\nB: Se oye todo lo que hacen los vecinos.",
 exampleSrc:"A: The acoustic insulation of this flat is terrible.\nB: You can hear everything the neighbors do.",
 funFact:"'Guitarra acústica' versus 'guitarra eléctrica' is a debate as old as rock music in Spain."},

{type:"teach",trg:"cremoso",src:"creamy",pos:"adj",gender:null,
 note:"Adjective. Having a smooth, rich texture.\nFeminine: cremosa.",
 example:"A: Este yogur es muy cremoso.\nB: Es de los que llevan nata añadida.",
 exampleSrc:"A: This yogurt is very creamy.\nB: It is one of those with added cream.",
 funFact:"Spanish 'crema catalana' is the famously cremoso dessert that predates French creme brulee."},

{type:"mc",q:"¿Dónde vas si necesitas ver a tu médico de cabecera?",opts:["A la residencia","Al ambulatorio","A la farmacia","Al quirófano"],ans:"Al ambulatorio",hint:"The local health center where you see your regular doctor for non-emergencies."},

{type:"teach",trg:"cítrico",src:"citrus / citric",pos:"adj",gender:null,
 note:"Adjective. Relating to citrus fruits.\nFeminine: cítrica.",
 example:"A: Los frutos cítricos son ricos en vitamina C.\nB: Las naranjas de Valencia son las mejores.",
 exampleSrc:"A: Citrus fruits are rich in vitamin C.\nB: Valencia oranges are the best.",
 funFact:"Spain is Europe's largest citrus producer. Valencia alone exports millions of tons yearly."},

{type:"teach",trg:"cárnico",src:"meat-related",pos:"adj",gender:null,
 note:"Adjective. Relating to meat products.\nFeminine: cárnica.",
 example:"A: La industria cárnica española exporta mucho jamón.\nB: Es uno de los productos estrella del país.",
 exampleSrc:"A: The Spanish meat industry exports a lot of ham.\nB: It is one of the country's star products.",
 funFact:"Spain has more pigs than people. The 'industria cárnica' is a pillar of the rural economy."},

{type:"teach",trg:"el acupuntor",src:"the acupuncturist",pos:"noun",gender:"m",
 note:"Masculine noun. Feminine: la acupuntora.\nA practitioner of acupuncture.",
 example:"A: Mi acupuntor me ha ayudado mucho con el dolor.\nB: ¿De verdad funciona la acupuntura?",
 exampleSrc:"A: My acupuncturist has helped me a lot with the pain.\nB: Does acupuncture really work?",
 funFact:"Acupuncture gained popularity in Spain in the 1990s. Some public hospitals now offer it."},

{type:"teach",trg:"la conjuntivitis",src:"the conjunctivitis",pos:"noun",gender:"f",
 note:"Feminine noun. Eye infection causing redness and irritation. Invariable.",
 example:"A: El niño tiene conjuntivitis y no puede ir al colegio.\nB: Es muy contagiosa, mejor que se quede en casa.",
 exampleSrc:"A: The child has conjunctivitis and cannot go to school.\nB: It is very contagious, better that he stays home.",
 funFact:"Known colloquially as 'ojo rojo' in Spain. Very common in swimming pool season."},

{type:"fb",s:"¡Qué {1} saber que el resultado fue negativo!",a:["alivio"],opts:["alivio","agotamiento","cadáver","cutis"],hint:"The feeling of comfort when something worrying turns out to be fine.",sSrc:"What a {1} to know the result was negative!"},

{type:"match",pairs:[{trg:"agotamiento",src:"exhaustion"},{trg:"alucinación",src:"hallucination"},{trg:"ambulatorio",src:"outpatient clinic"},{trg:"crónico",src:"chronic"},{trg:"alivio",src:"relief"}]}
]};

export default LESSON_4;
