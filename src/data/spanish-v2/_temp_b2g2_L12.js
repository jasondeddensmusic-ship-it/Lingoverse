// B2 Gap2 Lesson 12 - Work & Careers
const LESSON_12 = {id:"esv2_b2g2_l12",title:"Trabajo y profesiones",icon:"👷",xp:15,board:true,steps:[
{type:"intro",title:"Trabajo y profesiones",desc:"Learn vocabulary for discussing careers, job roles, professional development, and the workplace.",goals:["Learn 20 words about work and careers","Discuss professional roles and hiring","Navigate workplace conversations fluently"]},

{type:"teach",trg:"el currículo",src:"the curriculum / CV",pos:"noun",gender:"m",
 note:"Masculine noun. A resume or course of study. Also: currículum.",
 example:"A: Envía tu currículo antes del viernes.\nB: Ya lo tengo actualizado con la nueva experiencia.",
 exampleSrc:"A: Send your CV before Friday.\nB: I already have it updated with the new experience.",
 funFact:"Both 'currículo' and 'currículum' are accepted. The Latin plural 'curricula' is rarely used in Spain."},

{type:"teach",trg:"la cualificación",src:"the qualification",pos:"noun",gender:"f",
 note:"Feminine noun. The skills, training, and knowledge for a job.",
 example:"A: Su cualificación es perfecta para este puesto.\nB: Tiene el título y la experiencia necesarios.",
 exampleSrc:"A: Her qualification is perfect for this position.\nB: She has the necessary degree and experience.",
 funFact:"Spain distinguishes 'cualificación profesional' (vocational) from 'titulación' (academic degree)."},

{type:"teach",trg:"el camionero",src:"the truck driver",pos:"noun",gender:"m",
 note:"Masculine noun. Feminine: la camionera.\nA person who drives trucks.",
 example:"A: Los camioneros hicieron una huelga por el precio del combustible.\nB: Las carreteras estaban vacías.",
 exampleSrc:"A: The truck drivers went on strike over fuel prices.\nB: The roads were empty.",
 funFact:"Spain's 2022 trucker strike paralyzed food supply chains for weeks. Camioneros are essential."},

{type:"teach",trg:"el conductor",src:"the driver / presenter",pos:"noun",gender:"m",
 note:"Masculine noun. Feminine: la conductora.\nA vehicle driver, or a TV show host.",
 example:"A: El conductor del autobús frenó justo a tiempo.\nB: Evitó un accidente con mucha habilidad.",
 exampleSrc:"A: The bus driver braked just in time.\nB: He avoided an accident with great skill.",
 funFact:"In Spain, 'conductor' means driver. In Latin America, it also commonly means TV host."},

{type:"teach",trg:"el cochero",src:"the coachman",pos:"noun",gender:"m",
 note:"Masculine noun. A person who drives a horse-drawn carriage.",
 example:"A: El cochero paseó a los turistas por el centro histórico.\nB: Es una de las atracciones de Sevilla.",
 exampleSrc:"A: The coachman took the tourists around the historic center.\nB: It is one of Seville's attractions.",
 funFact:"Horse carriages in Seville and Córdoba still use cocheros, a living tradition for tourism."},

{type:"mc",q:"¿Qué es un currículo?",opts:["Un documento con tu experiencia profesional","Un contrato de trabajo","Un tipo de examen","Un curso de formación"],ans:"Un documento con tu experiencia profesional",hint:"Think about the document you send to companies when applying for a job."},

{type:"teach",trg:"el aumento de sueldo",src:"the salary raise",pos:"noun",gender:"m",
 note:"Masculine compound noun. An increase in pay.",
 example:"A: Pedí un aumento de sueldo después de dos años.\nB: ¿Y te lo concedieron?",
 exampleSrc:"A: I asked for a salary raise after two years.\nB: And did they grant it?",
 funFact:"In Spain, 'convenios colectivos' often set automatic 'aumentos de sueldo' linked to inflation."},

{type:"teach",trg:"la acreditación",src:"the accreditation / credentials",pos:"noun",gender:"f",
 note:"Feminine noun. Official recognition of meeting quality standards.",
 example:"A: Necesitas la acreditación para entrar a la zona de prensa.\nB: Recógela en la oficina de información.",
 exampleSrc:"A: You need the accreditation to enter the press area.\nB: Pick it up at the information office.",
 funFact:"Universities seek 'acreditación ANECA' in Spain to validate their study programs."},

{type:"teach",trg:"el ajedrecista",src:"the chess player",pos:"noun",gender:"m",
 note:"Common gender: el/la ajedrecista.\nA person who plays chess competitively.",
 example:"A: Es el ajedrecista más joven del campeonato.\nB: Solo tiene catorce años y ya es maestro.",
 exampleSrc:"A: He is the youngest chess player in the championship.\nB: He is only fourteen and already a master.",
 funFact:"From 'ajedrez' (chess), which comes from Arabic 'ash-shatranj'. Spain has a strong chess tradition."},

{type:"teach",trg:"el agente",src:"the agent",pos:"noun",gender:"m",
 note:"Common gender: el/la agente.\nA representative who acts on behalf of others.",
 example:"A: Mi agente inmobiliario encontró el piso perfecto.\nB: ¿Cuánta comisión cobra?",
 exampleSrc:"A: My real estate agent found the perfect apartment.\nB: How much commission does he charge?",
 funFact:"'Agente de la ley' (law enforcement agent) is the formal term. Colloquially, just 'policía'."},

{type:"teach",trg:"el concursante",src:"the contestant",pos:"noun",gender:"m",
 note:"Common gender: el/la concursante.\nSomeone who competes in a contest or game show.",
 example:"A: El concursante acertó todas las preguntas.\nB: Se llevó el premio de diez mil euros.",
 exampleSrc:"A: The contestant got all the questions right.\nB: He won the ten thousand euro prize.",
 funFact:"Spanish TV is famous for game shows. 'Pasapalabra' contestants become national celebrities."},

{type:"fb",s:"Pedí un {1} después de tres años sin subida.",a:["aumento de sueldo"],opts:["aumento de sueldo","currículo","acreditación","cualificación"],hint:"A raise in your monthly pay that you request from your employer.",sSrc:"I asked for a {1} after three years without an increase."},

{type:"teach",trg:"el aspirante",src:"the applicant / candidate",pos:"noun",gender:"m",
 note:"Common gender: el/la aspirante.\nSomeone seeking a position or award.",
 example:"A: Hay veinte aspirantes para cinco plazas.\nB: La competencia va a ser muy dura.",
 exampleSrc:"A: There are twenty applicants for five positions.\nB: The competition is going to be very tough.",
 funFact:"From Latin aspirare (to breathe toward). The aspirant reaches toward their goal."},

{type:"teach",trg:"el causante",src:"the person responsible / cause",pos:"noun",gender:"m",
 note:"Common gender: el/la causante.\nThe person or thing that causes something.",
 example:"A: ¿Quién fue el causante del accidente?\nB: Un conductor que se saltó un semáforo en rojo.",
 exampleSrc:"A: Who was responsible for the accident?\nB: A driver who ran a red light.",
 funFact:"In legal Spanish, 'causante' also means the deceased person in an inheritance case."},

{type:"teach",trg:"el compatriota",src:"the compatriot",pos:"noun",gender:"m",
 note:"Common gender: el/la compatriota.\nA fellow citizen of the same country.",
 example:"A: Encontré a un compatriota español en Tokio.\nB: ¡Qué alegría hablar español tan lejos de casa!",
 exampleSrc:"A: I met a Spanish compatriot in Tokyo.\nB: What a joy to speak Spanish so far from home!",
 funFact:"Compound: con + patriota. Finding a compatriota abroad is a cherished experience for Spaniards."},

{type:"teach",trg:"el coplero",src:"the verse singer / folk poet",pos:"noun",gender:"m",
 note:"Masculine noun. Feminine: la coplera.\nA singer or writer of coplas (traditional songs).",
 example:"A: El coplero cantaba en la plaza del pueblo.\nB: La gente se detenía a escucharlo.",
 exampleSrc:"A: The verse singer was singing in the town square.\nB: People stopped to listen to him.",
 funFact:"From 'copla' (verse/song). The copla is a uniquely Spanish music genre, popularized in the 1940s."},

{type:"mc",q:"¿Qué hace un agente inmobiliario?",opts:["Canta coplas en la plaza","Ayuda a comprar o alquilar propiedades","Conduce un autobús público","Juega al ajedrez profesionalmente"],ans:"Ayuda a comprar o alquilar propiedades",hint:"Think about the professional who helps you find and buy or rent a house or apartment."},

{type:"teach",trg:"el barman",src:"the bartender",pos:"noun",gender:"m",
 note:"Masculine noun. Feminine: la barman.\nA person who serves drinks at a bar.",
 example:"A: El barman preparó unos cócteles espectaculares.\nB: Tiene una habilidad increíble con las mezclas.",
 exampleSrc:"A: The bartender prepared some spectacular cocktails.\nB: He has an incredible skill with mixes.",
 funFact:"English loanword used widely in Spain. 'Camarero' is the general term for a waiter/bartender."},

{type:"teach",trg:"el bañista",src:"the bather / swimmer",pos:"noun",gender:"m",
 note:"Common gender: el/la bañista.\nA person who bathes at a beach or pool.",
 example:"A: Los bañistas llenaron la playa desde primera hora.\nB: Con este calor, es muy normal.",
 exampleSrc:"A: The bathers filled the beach from early morning.\nB: With this heat, it is very normal.",
 funFact:"Spanish news loves 'bañista' in summer headlines: 'Rescatan a un bañista en la costa'."},

{type:"teach",trg:"el adulto",src:"the adult",pos:"noun",gender:"m",
 note:"Masculine noun. Feminine: la adulta.\nA person who is fully grown.",
 example:"A: Los adultos pagan entrada completa.\nB: ¿Y los niños menores de seis años?",
 exampleSrc:"A: Adults pay full admission.\nB: And children under six?",
 funFact:"'Edad adulta' begins at 18 in Spain. 'Contenido para adultos' has the same euphemistic meaning."},

{type:"fb",s:"Hay cincuenta {1} para solo diez plazas en la academia.",a:["aspirantes"],opts:["aspirantes","conductores","agentes","adultos"],hint:"People who are applying or competing for available positions.",sSrc:"There are fifty {1} for only ten positions at the academy."},

{type:"match",pairs:[{trg:"camionero",src:"truck driver"},{trg:"cochero",src:"coachman"},{trg:"barman",src:"bartender"},{trg:"bañista",src:"bather"},{trg:"coplero",src:"verse singer"}]}
]};

export default LESSON_12;
