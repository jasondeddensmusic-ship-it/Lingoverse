// Lesson 8 — Diversidad y sociedad
const LESSON_8 = {id:"esv2_b2gA_l8", title:"Diversidad y sociedad", icon:"🌐", xp:15, board:true, steps:[
{type:"intro", title:"Diversidad y sociedad", desc:"Discuss multiculturalism, linguistic diversity, and social coexistence in the modern world.", goals:["Learn 15 diversity and society terms","Discuss cultural and linguistic topics","Use inclusive vocabulary naturally"]},

{type:"teach", trg:"la multiculturalidad", src:"multiculturalism", pos:"noun", gender:"f",
 note:"The coexistence of multiple cultures in one society.\nMulti- (many) + cultural.",
 example:"A: La multiculturalidad enriquece nuestras ciudades.\nB: Madrid es un ejemplo perfecto de multiculturalidad.",
 exampleSrc:"A: Multiculturalism enriches our cities.\nB: Madrid is a perfect example of multiculturalism.",
 funFact:"Spain's foreign-born population grew from 2% in 2000 to 15% in 2025."},

{type:"teach", trg:"multilingue", src:"multilingual", pos:"adj", gender:null,
 note:"Speaking or using multiple languages.\nMulti- (many) + lingua (tongue).",
 example:"A: España es un país multilingue con cuatro lenguas oficiales.\nB: Castellano, catalán, gallego y euskera.",
 exampleSrc:"A: Spain is a multilingual country with four official languages.\nB: Castilian, Catalan, Galician, and Basque.",
 funFact:"Spain is one of Europe's most linguistically diverse countries."},

{type:"teach", trg:"multilateral", src:"multilateral", pos:"adj", gender:null,
 note:"Involving three or more parties or nations.\nMulti- (many) + lateral (sided).",
 example:"A: El acuerdo multilateral fue firmado por doce países.\nB: La cooperación multilateral es esencial para la paz.",
 exampleSrc:"A: The multilateral agreement was signed by twelve countries.\nB: Multilateral cooperation is essential for peace.",
 funFact:"Spain is a member of the EU, NATO, UN, and over 50 multilateral organizations."},

{type:"teach", trg:"el líder", src:"the leader", pos:"noun", gender:"m",
 note:"A person who guides or directs others.\nFeminine: la líder (same form).",
 example:"A: El líder del partido presentó su programa electoral.\nB: Necesitamos líderes con visión de futuro.",
 exampleSrc:"A: The party leader presented his electoral program.\nB: We need leaders with a vision for the future.",
 funFact:"Borrowed from English 'leader' in the 20th century. The RAE accepted it in 1992."},

{type:"teach", trg:"el lingüista", src:"the linguist", pos:"noun", gender:"m",
 note:"A specialist in language study.\nFeminine: la lingüista. From lengua (language).",
 example:"A: El lingüista analizó las diferencias dialectales.\nB: Su estudio comparó el español de cinco países.",
 exampleSrc:"A: The linguist analyzed the dialectal differences.\nB: His study compared the Spanish of five countries.",
 funFact:"Spain's Royal Academy (RAE) employs linguists to maintain the official dictionary."},

{type:"mc", q:"¿Cuántas lenguas oficiales tiene España?", opts:["Cuatro: castellano, catalán, gallego y euskera","Una: español","Dos: español y catalán","Tres: español, catalán y gallego"], ans:"Cuatro: castellano, catalán, gallego y euskera",
 hint:"Think about all the autonomous communities with their own co-official languages."},

{type:"fb", s:"La {1} de las grandes ciudades genera intercambio cultural constante.", a:["multiculturalidad"], opts:["multiculturalidad","multilateralidad","lingüística","diversidad"],
 hint:"This noun describes the coexistence of many cultures in one place.",
 sSrc:"The {1} of large cities generates constant cultural exchange."},

{type:"teach", trg:"el léxico", src:"the lexicon / vocabulary", pos:"noun", gender:"m",
 note:"The complete set of words in a language or a person's vocabulary.\nFrom Greek lexis.",
 example:"A: El léxico del español tiene muchas palabras de origen árabe.\nB: Más de cuatro mil, según los lingüistas.",
 exampleSrc:"A: The Spanish lexicon has many words of Arabic origin.\nB: More than four thousand, according to linguists.",
 funFact:"Arabic contributed more words to Spanish than any language except Latin."},

{type:"teach", trg:"neto", src:"net (as in net profit)", pos:"adj", gender:null,
 note:"After all deductions. Opposite of bruto (gross).\nFrom Italian netto (clean).",
 example:"A: ¿Cuál es tu salario neto mensual?\nB: Unos dos mil euros netos, después de impuestos.",
 exampleSrc:"A: What's your net monthly salary?\nB: About two thousand euros net, after taxes.",
 funFact:"From Italian netto (clean). The 'clean' amount after everything is taken away."},

{type:"teach", trg:"la nómina", src:"the payroll / payslip", pos:"noun", gender:"f",
 note:"The document showing salary details, or the total payroll.\nFrom Latin nomina (names).",
 example:"A: ¿Has recibido la nómina de este mes?\nB: Sí, pero hay un error en las horas extra.",
 exampleSrc:"A: Have you received this month's payslip?\nB: Yes, but there's an error in the overtime.",
 funFact:"From Latin nomina (list of names). Originally the list of people to be paid."},

{type:"mc", q:"¿Qué significa 'salario neto'?", opts:["El salario después de impuestos y deducciones","El salario antes de impuestos","El salario mínimo legal","El salario del jefe"], ans:"El salario después de impuestos y deducciones",
 hint:"Think about what remains 'clean' after all deductions are removed."},

{type:"fb", s:"El {1} del español incluye más de noventa mil palabras.", a:["léxico"], opts:["léxico","líder","lingüista","listado"],
 hint:"This noun means the complete set of words in a language.",
 sSrc:"The Spanish {1} includes more than ninety thousand words."},

{type:"teach", trg:"el mitin", src:"the political rally / meeting", pos:"noun", gender:"m",
 note:"A public political gathering with speeches.\nFrom English 'meeting'.",
 example:"A: El mitin del partido reunió a miles de personas.\nB: Los mítines son típicos de las campañas electorales.",
 exampleSrc:"A: The party rally gathered thousands of people.\nB: Rallies are typical of electoral campaigns.",
 funFact:"Borrowed from English 'meeting'. Spanish adapted it to 'mitin' in the 19th century."},

{type:"teach", trg:"la máxima", src:"the maxim / principle", pos:"noun", gender:"f",
 note:"A short statement expressing a general truth.\nAlso: maximum temperature.",
 example:"A: Su máxima es 'nunca dejes para mañana lo que puedas hacer hoy'.\nB: Es una máxima muy sabia.",
 exampleSrc:"A: His maxim is 'never leave for tomorrow what you can do today'.\nB: That's a very wise maxim.",
 funFact:"Cervantes filled Don Quijote with maxims. Many are still quoted daily in Spain."},

{type:"teach", trg:"el mundillo", src:"the circle / small world", pos:"noun", gender:"m",
 note:"A small, specialized community or scene.\nDiminutive of mundo (world).",
 example:"A: En el mundillo literario todos se conocen.\nB: Es un mundo muy pequeño.",
 exampleSrc:"A: In the literary circle, everyone knows each other.\nB: It's a very small world.",
 funFact:"Adding -illo creates a diminutive with a slightly ironic or affectionate tone."},

{type:"match", pairs:[
 {trg:"el líder", src:"leader"},
 {trg:"el lingüista", src:"linguist"},
 {trg:"el léxico", src:"lexicon"},
 {trg:"la nómina", src:"payslip"},
 {trg:"el mitin", src:"political rally"}
]},

{type:"fb", s:"En el {1} de la moda madrileña, todos se conocen.", a:["mundillo"], opts:["mundillo","mitin","léxico","líder"],
 hint:"This diminutive noun describes a small, specialized community or scene.",
 sSrc:"In the {1} of Madrid fashion, everyone knows each other."},

{type:"mc", q:"¿De qué idioma viene 'mitin'?", opts:["Del inglés (meeting)","Del francés","Del árabe","Del latín"], ans:"Del inglés (meeting)",
 hint:"This political term was adapted from a common English word for a gathering."},

{type:"drag_fill", s:"Un buen {1} debe promover la {2} en su equipo.", blanks:{"1":"líder","2":"multiculturalidad"}, pool:["líder","multiculturalidad","mitin","nómina"],
 hint:"A good person in charge should encourage cultural diversity in their team."},

{type:"fb", s:"La {1} de este mes refleja la subida salarial.", a:["nómina"], opts:["nómina","máxima","multiculturalidad","multilateral"],
 hint:"This document shows your salary details for the month.",
 sSrc:"This month's {1} reflects the salary increase."},

{type:"match", pairs:[
 {trg:"multilingue", src:"multilingual"},
 {trg:"multilateral", src:"multilateral"},
 {trg:"neto", src:"net"},
 {trg:"la máxima", src:"maxim"},
 {trg:"el mundillo", src:"small circle"}
]}
]};
export default LESSON_8;
