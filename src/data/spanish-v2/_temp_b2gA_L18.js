// Lesson 18. Identidad y lengua
const LESSON_18 = {id:"esv2_b2gA_l18", title:"Identidad y lengua", icon:"🗣️", xp:15, board:true, steps:[
{type:"intro", title:"Identidad y lengua", desc:"Discuss language, identity, and cultural belonging with sophisticated B2 vocabulary.", goals:["Learn 15 language and identity terms","Discuss linguistic diversity","Express cultural identity concepts"]},

{type:"teach", trg:"la lengua indígena", src:"the indigenous language", pos:"noun", gender:"f",
 note:"A language native to a region before colonization.\nIndígena = native, indigenous.",
 example:"A: En Latinoamérica se hablan cientos de lenguas indígenas.\nB: Muchas están en peligro de extinción.",
 exampleSrc:"A: In Latin America, hundreds of indigenous languages are spoken.\nB: Many are in danger of extinction.",
 funFact:"Mexico alone has 68 recognized indigenous languages, including Nahuatl and Maya."},

{type:"teach", trg:"el anglófono", src:"the anglophone / English speaker", pos:"noun", gender:"m",
 note:"A person who speaks English as a native or primary language.\nAnglo- + fono (voice).",
 example:"A: Los países anglófonos incluyen Reino Unido, EE.UU. y Australia.\nB: El inglés es la lengua franca global.",
 exampleSrc:"A: Anglophone countries include the UK, USA, and Australia.\nB: English is the global lingua franca.",
 funFact:"Spanish uses -fono for language groups: francófono, lusófono, hispanófono."},

{type:"teach", trg:"el arabófono", src:"the arabophone / Arabic speaker", pos:"noun", gender:"m",
 note:"A person who speaks Arabic.\nÁrabe + fono (voice).",
 example:"A: Hay millones de arabófonos en el norte de África.\nB: El árabe es la quinta lengua más hablada del mundo.",
 exampleSrc:"A: There are millions of Arabic speakers in North Africa.\nB: Arabic is the fifth most spoken language in the world.",
 funFact:"Spain has a growing arabophone community, especially from Morocco."},

{type:"teach", trg:"a la moda", src:"fashionable / in style", pos:"adv", gender:null,
 note:"Following current trends. Always with 'a la'.\nModa = fashion.",
 example:"A: Siempre viste a la moda.\nB: Se gasta mucho dinero en ropa.",
 exampleSrc:"A: She always dresses fashionably.\nB: She spends a lot of money on clothes.",
 funFact:"Spain is a global fashion powerhouse: Zara, Mango, and Balenciaga are all Spanish."},

{type:"teach", trg:"a partir de", src:"from / starting from", pos:"prep", gender:null,
 note:"Marks a starting point in time or sequence.\nVery common in formal texts.",
 example:"A: A partir de mañana, el horario cambia.\nB: Abriremos una hora antes.",
 exampleSrc:"A: Starting from tomorrow, the schedule changes.\nB: We'll open one hour earlier.",
 funFact:"One of the most useful B2 prepositional phrases. Essential for DELE writing."},

{type:"mc", q:"¿Qué significa '-fono' en 'anglófono' y 'arabófono'?", opts:["Que habla esa lengua","Que escribe esa lengua","Que estudia esa lengua","Que traduce esa lengua"], ans:"Que habla esa lengua",
 hint:"Think of 'teléfono' (tele + phone). The suffix relates to voice/sound."},

{type:"fb", s:"El quechua es una {1} hablada por millones en Sudamérica.", a:["lengua indígena"], opts:["lengua indígena","anglófono","lengua oficial","idioma nórdico"],
 hint:"This type of language is native to a region before European colonization.",
 sSrc:"Quechua is an {1} spoken by millions in South America."},

{type:"teach", trg:"como que no", src:"of course! / you bet!", pos:"adv", gender:null,
 note:"Emphatic affirmation, often slightly indignant.\nVery colloquial Peninsular Spanish.",
 example:"A: ¿Vas a ir a la fiesta?\nB: ¡Como que no! No me la pierdo por nada.",
 exampleSrc:"A: Are you going to the party?\nB: Of course! I wouldn't miss it for anything.",
 funFact:"Typical of spoken Peninsular Spanish. Carries a tone of slight indignation."},

{type:"teach", trg:"justo a tiempo", src:"just in time", pos:"adv", gender:null,
 note:"Arriving or happening at the last possible moment.\nJusto = just/exactly.",
 example:"A: Llegamos justo a tiempo para el tren.\nB: Un minuto más y lo perdemos.",
 exampleSrc:"A: We arrived just in time for the train.\nB: One more minute and we'd have missed it.",
 funFact:"In manufacturing, 'justo a tiempo' is also the Spanish name for 'just-in-time' production."},

{type:"teach", trg:"en casa", src:"at home", pos:"adv", gender:null,
 note:"At one's home. No article needed.\nContrast: 'en la casa' (in the house, specific building).",
 example:"A: ¿Qué haces esta noche?\nB: Me quedo en casa viendo una película.",
 exampleSrc:"A: What are you doing tonight?\nB: I'm staying at home watching a movie.",
 funFact:"'En casa' without article means 'at home'. 'En la casa' refers to a specific building."},

{type:"mc", q:"¿Cuándo se usa 'a partir de'?", opts:["Para hablar del pasado","Para marcar un punto de inicio en el tiempo","Para expresar distancia física","Para indicar una cantidad exacta"], ans:"Para marcar un punto de inicio en el tiempo",
 hint:"This prepositional phrase sets the beginning point from which something starts."},

{type:"fb", s:"Llegaron {1} para la ceremonia de graduación.", a:["justo a tiempo"], opts:["justo a tiempo","a la moda","en casa","como que no"],
 hint:"This expression means arriving at the very last possible moment.",
 sSrc:"They arrived {1} for the graduation ceremony."},

{type:"teach", trg:"el acorazado", src:"the battleship", pos:"noun", gender:"m",
 note:"A heavily armored warship. Also adj: armored, hardened.\nFrom coraza (armor).",
 example:"A: El acorazado Potemkin es famoso por la película de Eisenstein.\nB: Los acorazados fueron reemplazados por portaaviones.",
 exampleSrc:"A: The battleship Potemkin is famous from Eisenstein's film.\nB: Battleships were replaced by aircraft carriers.",
 funFact:"From coraza (armor). An acorazado is literally 'an armored one'."},

{type:"teach", trg:"el agente", src:"the agent", pos:"noun", gender:"m",
 note:"A person who acts on behalf of another. Also: a police officer.\nFrom Latin agens.",
 example:"A: El agente inmobiliario nos enseñó tres pisos.\nB: El último nos gustó mucho.",
 exampleSrc:"A: The real estate agent showed us three apartments.\nB: We really liked the last one.",
 funFact:"'Agente de policía' is formal. Everyday Spanish says 'poli' (cop)."},

{type:"teach", trg:"la etcétera", src:"et cetera / and so on", pos:"noun", gender:"f",
 note:"Used to indicate that more items follow.\nOften abbreviated: etc. From Latin.",
 example:"A: Necesitas pasaporte, visado, seguro, etcétera.\nB: ¿Me puedes dar una lista completa?",
 exampleSrc:"A: You need a passport, visa, insurance, et cetera.\nB: Can you give me a complete list?",
 funFact:"In Spanish, 'etcétera' has an accent. Many speakers pronounce it 'ecétera' informally."},

{type:"match", pairs:[
 {trg:"la lengua indígena", src:"indigenous language"},
 {trg:"el anglófono", src:"English speaker"},
 {trg:"a la moda", src:"fashionable"},
 {trg:"a partir de", src:"starting from"},
 {trg:"justo a tiempo", src:"just in time"}
]},

{type:"fb", s:"Siempre viste {1}; le encanta la ropa de diseñador.", a:["a la moda"], opts:["a la moda","en casa","a partir de","justo a tiempo"],
 hint:"This expression means following current fashion trends.",
 sSrc:"She always dresses {1}; she loves designer clothes."},

{type:"mc", q:"¿Qué es un 'acorazado'?", opts:["Un soldado con armadura","Un coche blindado","Un buque de guerra con blindaje pesado","Un tipo de castillo medieval"], ans:"Un buque de guerra con blindaje pesado",
 hint:"From 'coraza' (armor). Apply heavy armor to a warship."},

{type:"drag_fill", s:"{1} septiembre, las clases empiezan {2} las ocho.", blanks:{"1":"A partir de","2":"a"}, pool:["A partir de","a","En","por"],
 hint:"From September onwards, classes begin at eight o'clock."},

{type:"fb", s:"Los países {1} tienen el inglés como lengua oficial.", a:["anglófonos"], opts:["anglófonos","arabófonos","indígenas","nórdicos"],
 hint:"These countries have English as their native or official language.",
 sSrc:"{1} countries have English as their official language."},

{type:"match", pairs:[
 {trg:"el arabófono", src:"Arabic speaker"},
 {trg:"como que no", src:"of course!"},
 {trg:"en casa", src:"at home"},
 {trg:"el acorazado", src:"battleship"},
 {trg:"el agente", src:"agent"}
]}
]};
export default LESSON_18;
