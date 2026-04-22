// Lesson 17. Asuntos globales
const LESSON_17 = {id:"esv2_b2gA_l17", title:"Asuntos globales", icon:"🌎", xp:15, board:true, steps:[
{type:"intro", title:"Asuntos globales", desc:"Discuss international affairs, geopolitics, and global issues with formal B2 vocabulary.", goals:["Learn 15 global affairs terms","Discuss international topics formally","Navigate diplomatic register"]},

{type:"teach", trg:"nórdico", src:"Nordic / Scandinavian", pos:"adj", gender:null,
 note:"Relating to the Nordic countries of northern Europe.\nFrom norte (north).",
 example:"A: Los países nórdicos tienen un alto nivel de bienestar.\nB: Su modelo social es admirado en todo el mundo.",
 exampleSrc:"A: The Nordic countries have a high level of welfare.\nB: Their social model is admired worldwide.",
 funFact:"Spanish readers love 'novela negra nórdica' (Nordic noir crime fiction)."},

{type:"teach", trg:"noruego", src:"Norwegian", pos:"adj", gender:null,
 note:"Relating to Norway. Also a noun: un noruego (a Norwegian person).",
 example:"A: El sistema educativo noruego es uno de los mejores del mundo.\nB: Invierten mucho en educación pública.",
 exampleSrc:"A: The Norwegian education system is one of the best in the world.\nB: They invest heavily in public education.",
 funFact:"Norwegian oil wealth funds Spain's largest foreign direct investment in renewable energy."},

{type:"teach", trg:"normando", src:"Norman", pos:"adj", gender:null,
 note:"Relating to Normandy or the Normans.\nFrom norte + man (north men).",
 example:"A: La conquista normanda de Inglaterra cambió la historia europea.\nB: Los normandos también llegaron a Sicilia.",
 exampleSrc:"A: The Norman conquest of England changed European history.\nB: The Normans also reached Sicily.",
 funFact:"The Normans were Viking descendants who settled in northern France."},

{type:"teach", trg:"nipón", src:"Japanese", pos:"adj", gender:null,
 note:"Literary word for Japanese. More formal than 'japonés'.\nFrom Nippon (Japan).",
 example:"A: La cultura nipona es muy interesante para muchos españoles.\nB: El manga y el anime son muy populares.",
 exampleSrc:"A: Japanese culture is very interesting for many Spaniards.\nB: Manga and anime are very popular.",
 funFact:"'Nipón' is used in journalism and literature for stylistic variety alongside 'japonés'."},

{type:"teach", trg:"islámico", src:"Islamic", pos:"adj", gender:null,
 note:"Relating to Islam as a religion or civilization.\nDistinguish from 'islamista' (Islamist).",
 example:"A: La arquitectura islámica dejó una huella profunda en España.\nB: La Alhambra es el ejemplo más famoso.",
 exampleSrc:"A: Islamic architecture left a deep mark on Spain.\nB: The Alhambra is the most famous example.",
 funFact:"Eight centuries of Islamic rule (711-1492) profoundly shaped Spanish language and culture."},

{type:"mc", q:"¿Cuál es la diferencia entre 'islámico' e 'islamista'?", opts:["Islámico = relativo al islam; islamista = relativo al islamismo político","Son sinónimos","Islámico es más moderno","Islamista es más respetuoso"], ans:"Islámico = relativo al islam; islamista = relativo al islamismo político",
 hint:"One refers to the religion and culture, the other to political ideology."},

{type:"fb", s:"La Alhambra es la joya de la arquitectura {1} en Europa.", a:["islámica"], opts:["islámica","nipona","normanda","nórdica"],
 hint:"This adjective relates to a religion and civilization that ruled Spain for 800 years.",
 sSrc:"The Alhambra is the jewel of {1} architecture in Europe."},

{type:"teach", trg:"germano", src:"Germanic", pos:"adj", gender:null,
 note:"Relating to the Germanic peoples or languages.\nFrom Latin Germanus.",
 example:"A: Las lenguas germanas incluyen el inglés, el alemán y el neerlandés.\nB: Comparten raíces comunes.",
 exampleSrc:"A: The Germanic languages include English, German, and Dutch.\nB: They share common roots.",
 funFact:"The Visigoths, a Germanic people, ruled Spain from the 5th to 8th centuries."},

{type:"teach", trg:"indoeuropeo", src:"Indo-European", pos:"adj", gender:null,
 note:"The language family including most European and South Asian languages.\nFrom India + Europa.",
 example:"A: El español es una lengua indoeuropea de la rama romance.\nB: Comparte familia con el hindi y el persa.",
 exampleSrc:"A: Spanish is an Indo-European language from the Romance branch.\nB: It shares a family with Hindi and Persian.",
 funFact:"The Basque language (euskera) is NOT Indo-European. Its origin remains a mystery."},

{type:"teach", trg:"el náufrago", src:"the shipwreck survivor / castaway", pos:"noun", gender:"m",
 note:"A person who survives a shipwreck.\nFrom Latin naufragus (ship + break).",
 example:"A: Los náufragos fueron rescatados por un barco pesquero.\nB: Habían pasado tres días a la deriva.",
 exampleSrc:"A: The castaways were rescued by a fishing boat.\nB: They had spent three days adrift.",
 funFact:"Gabriel García Márquez wrote 'Relato de un náufrago' based on a real 1955 incident."},

{type:"mc", q:"¿Qué lengua de España NO es indoeuropea?", opts:["El castellano","El euskera (vasco)","El catalán","El gallego"], ans:"El euskera (vasco)",
 hint:"Three of Spain's languages come from Latin. One has unknown, pre-Roman origins."},

{type:"fb", s:"Los pueblos {1} invadieron la Península Ibérica tras la caída de Roma.", a:["germanos"], opts:["germanos","nórdicos","islámicos","nipones"],
 hint:"These peoples from northern Europe (Visigoths, Suevi) came after Rome fell.",
 sSrc:"The {1} peoples invaded the Iberian Peninsula after the fall of Rome."},

{type:"teach", trg:"el brasileño", src:"the Brazilian", pos:"noun", gender:"m",
 note:"A person from Brazil. Also adjective.\nFeminine: la brasileña.",
 example:"A: La comunidad brasileña en España es una de las más grandes.\nB: Muchos brasileños viven en Madrid y Barcelona.",
 exampleSrc:"A: The Brazilian community in Spain is one of the largest.\nB: Many Brazilians live in Madrid and Barcelona.",
 funFact:"Over 120,000 Brazilians live in Spain, making it one of Europe's largest communities."},

{type:"teach", trg:"húngaro", src:"Hungarian", pos:"adj", gender:null,
 note:"Relating to Hungary. Also a noun: un húngaro.\nHungary in Spanish: Hungría.",
 example:"A: La cocina húngara es famosa por el goulash.\nB: Y su vino Tokaji es extraordinario.",
 exampleSrc:"A: Hungarian cuisine is famous for goulash.\nB: And their Tokaji wine is extraordinary.",
 funFact:"Hungarian is a Finno-Ugric language, completely unrelated to Spanish or its neighbors."},

{type:"teach", trg:"libanés", src:"Lebanese", pos:"adj", gender:null,
 note:"Relating to Lebanon. Also a noun: un libanés.\nFeminine: libanesa.",
 example:"A: La gastronomía libanesa es muy popular en España.\nB: El hummus y el falafel están en todos los restaurantes.",
 exampleSrc:"A: Lebanese cuisine is very popular in Spain.\nB: Hummus and falafel are in every restaurant.",
 funFact:"More people of Lebanese descent live in Latin America than in Lebanon itself."},

{type:"match", pairs:[
 {trg:"nórdico", src:"Nordic"},
 {trg:"nipón", src:"Japanese"},
 {trg:"islámico", src:"Islamic"},
 {trg:"germano", src:"Germanic"},
 {trg:"indoeuropeo", src:"Indo-European"}
]},

{type:"fb", s:"La comunidad {1} en España supera las ciento veinte mil personas.", a:["brasileña"], opts:["brasileña","húngara","libanesa","normanda"],
 hint:"This large South American community is one of Spain's biggest immigrant groups.",
 sSrc:"The {1} community in Spain exceeds one hundred and twenty thousand people."},

{type:"mc", q:"¿Qué eran los normandos originalmente?", opts:["Monjes celtas","Soldados árabes","Descendientes de vikingos asentados en Francia","Comerciantes romanos"], ans:"Descendientes de vikingos asentados en Francia",
 hint:"Their name means 'north men'. They settled in what became Normandy."},

{type:"drag_fill", s:"El español es una lengua {1} de la rama {2}.", blanks:{"1":"indoeuropea","2":"romance"}, pool:["indoeuropea","romance","germana","islámica"],
 hint:"Spanish belongs to the broad family from India to Europe, in the Latin-derived branch."},

{type:"fb", s:"La novela negra {1} es un género literario muy popular en España.", a:["nórdica"], opts:["nórdica","nipona","húngara","libanesa"],
 hint:"This adjective describes crime fiction from Scandinavia, hugely popular in Spain.",
 sSrc:"{1} crime fiction is a very popular literary genre in Spain."},

{type:"match", pairs:[
 {trg:"noruego", src:"Norwegian"},
 {trg:"normando", src:"Norman"},
 {trg:"el brasileño", src:"Brazilian"},
 {trg:"húngaro", src:"Hungarian"},
 {trg:"libanés", src:"Lebanese"}
]}
]};
export default LESSON_17;
