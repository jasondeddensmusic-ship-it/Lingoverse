// B2 Gap Batch 8 Lesson 14 - Politics & Governance
const LESSON_14 = {id:"esv2_b2g8_l14",title:"Política y gobernanza",icon:"🏛️",xp:15,board:true,steps:[
{type:"intro",title:"Política y gobernanza",desc:"Learn vocabulary for discussing political systems, government bodies, and civic institutions in Spain.",goals:["Learn 14 political and governance terms","Discuss government structures","Use formal political register"]},

{type:"teach",trg:"la Guardia Civil",src:"the Civil Guard",pos:"noun",gender:"f",
 note:"Feminine noun. Spain's oldest national law enforcement agency.\nFounded in 1844.",
 example:"A: La Guardia Civil patrulla las carreteras y zonas rurales.\nB: En las ciudades grandes actúa más la Policía Nacional.",
 exampleSrc:"A: The Civil Guard patrols the highways and rural areas.\nB: In large cities the National Police acts more.",
 funFact:"The Guardia Civil's iconic tricorn hat (tricornio) was phased out in 1989 but remains a cultural symbol."},

{type:"teach",trg:"el líder",src:"the leader",pos:"noun",gender:"m",
 note:"Masculine noun. A person who leads a group or organization.\nFeminine: la líder or la lideresa.",
 example:"A: El líder del partido presentó su programa electoral.\nB: ¿Qué propone sobre educación y sanidad?",
 exampleSrc:"A: The party leader presented his electoral program.\nB: What does he propose about education and healthcare?",
 funFact:"Borrowed from English 'leader'. The RAE accepted it in 1970. 'Liderazgo' (leadership) followed naturally."},

{type:"teach",trg:"el jefe",src:"the boss / chief",pos:"noun",gender:"m",
 note:"Masculine noun. The person in charge.\nFeminine: la jefa. From French 'chef'.",
 example:"A: Mi jefe me ha dado dos días libres esta semana.\nB: ¡Qué suerte! El mío no da ni uno.",
 exampleSrc:"A: My boss has given me two days off this week.\nB: How lucky! Mine does not give even one.",
 funFact:"In Spanish politics, 'jefe del Estado' (head of state) refers to the King. 'Jefe del Gobierno' is the PM."},

{type:"teach",trg:"la detonación",src:"the detonation / explosion",pos:"noun",gender:"f",
 note:"Feminine noun. A violent explosion, or the trigger for one.\nVerb: detonar.",
 example:"A: La detonación se escuchó a varios kilómetros.\nB: Los artificiales confirmaron que fue controlada.",
 exampleSrc:"A: The detonation was heard several kilometers away.\nB: The bomb disposal team confirmed it was controlled.",
 funFact:"Figuratively, 'detonante' (trigger) is used in politics: 'el detonante de la crisis' (the trigger of the crisis)."},

{type:"mc",q:"¿Qué fuerza de seguridad patrulla las carreteras españolas?",
 opts:["La Guardia Civil","El Ejército","Los bomberos","La Policía Local"],
 ans:"La Guardia Civil",
 hint:"Spain's oldest national law enforcement body, famous for rural and highway patrol."},

{type:"teach",trg:"el indicador",src:"the indicator / index",pos:"noun",gender:"m",
 note:"Masculine noun. Something that shows or measures a condition.\nIndicador económico = economic indicator.",
 example:"A: Los indicadores económicos de este trimestre son positivos.\nB: El desempleo ha bajado dos puntos.",
 exampleSrc:"A: The economic indicators for this quarter are positive.\nB: Unemployment has dropped two points.",
 funFact:"Spain's INE (Instituto Nacional de Estadística) publishes monthly indicators that move markets and policy."},

{type:"teach",trg:"la contragolpe",src:"the counterattack / backlash",pos:"noun",gender:"m",
 note:"Masculine noun. A retaliatory strike, or an unexpected reversal.\nContra (against) + golpe (blow).",
 example:"A: El contragolpe político fue más fuerte de lo esperado.\nB: La oposición reaccionó con mucha agresividad.",
 exampleSrc:"A: The political counterattack was stronger than expected.\nB: The opposition reacted very aggressively.",
 funFact:"In football, 'contragolpe' is a fast counter-attack. The term crossed into political vocabulary."},

{type:"teach",trg:"la complementación",src:"the complementation / supplementation",pos:"noun",gender:"f",
 note:"Feminine noun. The act of completing or supplementing something.\nFrom complementar (to complement).",
 example:"A: La complementación de los servicios públicos y privados es necesaria.\nB: Juntos pueden cubrir más necesidades.",
 exampleSrc:"A: The complementation of public and private services is necessary.\nB: Together they can cover more needs.",
 funFact:"In Spanish grammar, 'complementación' refers to how verbs take their complements (objects)."},

{type:"fb",s:"Los {1} económicos muestran que la economía se está recuperando.",
 a:["indicadores"],opts:["indicadores","contragolpes","líderes","jefes"],
 hint:"Statistical measures that show the state of the economy. Think GDP, unemployment, inflation.",
 sSrc:"The economic {1} show that the economy is recovering."},

{type:"teach",trg:"distrital",src:"district-level (adj)",pos:"adj",gender:null,
 note:"Adjective. Related to a district or administrative division.\nDistrito + -al.",
 example:"A: Las elecciones distritales determinan la representación local.\nB: Cada distrito elige a sus propios concejales.",
 exampleSrc:"A: District elections determine local representation.\nB: Each district elects its own council members.",
 funFact:"Madrid is divided into 21 distritos, each with its own 'junta distrital' (district board)."},

{type:"teach",trg:"la congregación",src:"the congregation / gathering",pos:"noun",gender:"f",
 note:"Feminine noun. A formal assembly of people, often religious.\nVerb: congregar.",
 example:"A: La congregación de líderes regionales se celebra cada año.\nB: Es una oportunidad para coordinar políticas.",
 exampleSrc:"A: The gathering of regional leaders is held every year.\nB: It is an opportunity to coordinate policies.",
 funFact:"Spain's 17 autonomous communities each have significant self-governing power, unlike centralized France."},

{type:"teach",trg:"en cambio",src:"on the other hand / however",pos:"adv",gender:null,
 note:"Adverbial phrase. Used to introduce a contrast or alternative.\nEn = in, cambio = change.",
 example:"A: Madrid tiene mucho turismo. Barcelona, en cambio, tiene playa.\nB: Las dos ciudades son fantásticas por razones diferentes.",
 exampleSrc:"A: Madrid has a lot of tourism. Barcelona, on the other hand, has the beach.\nB: Both cities are fantastic for different reasons.",
 funFact:"'En cambio' is a key connector in formal Spanish writing and debate. It signals a contrast."},

{type:"mc",q:"¿Qué significa 'en cambio' en una frase?",
 opts:["Introduce un contraste con lo anterior","Indica acuerdo total","Señala el final del argumento","Pide un favor"],
 ans:"Introduce un contraste con lo anterior",
 hint:"A linking phrase that shows the opposite side of an argument. Think 'however'."},

{type:"teach",trg:"la mediocridad",src:"the mediocrity",pos:"noun",gender:"f",
 note:"Feminine noun. Lack of quality or excellence.\nUsed often in political criticism.",
 example:"A: La mediocridad de los debates políticos es frustrante.\nB: Los ciudadanos merecen propuestas serias.",
 exampleSrc:"A: The mediocrity of political debates is frustrating.\nB: Citizens deserve serious proposals.",
 funFact:"Spanish commentators often use 'mediocridad' to criticize politicians who avoid taking strong positions."},

{type:"teach",trg:"la imposibilidad",src:"the impossibility",pos:"noun",gender:"f",
 note:"Feminine noun. The state of something being impossible.\nAnte la imposibilidad de = given the impossibility of.",
 example:"A: Ante la imposibilidad de un acuerdo, convocaron nuevas elecciones.\nB: Es la tercera vez en dos años.",
 exampleSrc:"A: Given the impossibility of an agreement, they called new elections.\nB: It is the third time in two years.",
 funFact:"Spain held four general elections between 2015-2019 due to the 'imposibilidad' of forming stable governments."},

{type:"fb",s:"Madrid tiene un clima seco. Barcelona, {1}, tiene un clima más húmedo.",
 a:["en cambio"],opts:["en cambio","en total","en efecto","en resumen"],
 hint:"A linking phrase that introduces a contrast between two statements. 'However' or 'on the other hand'.",
 sSrc:"Madrid has a dry climate. Barcelona, {1}, has a more humid climate."},

{type:"match",pairs:[
 {trg:"la Guardia Civil",src:"the Civil Guard"},
 {trg:"el líder",src:"leader"},
 {trg:"el indicador",src:"indicator / index"},
 {trg:"distrital",src:"district-level"},
 {trg:"en cambio",src:"on the other hand"}
]}
]};
export default LESSON_14;
