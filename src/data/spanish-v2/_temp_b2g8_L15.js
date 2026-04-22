// B2 Gap Batch 8 Lesson 15 - Literature & Language
const LESSON_15 = {id:"esv2_b2g8_l15",title:"Literatura y lengua",icon:"📚",xp:15,board:true,steps:[
{type:"intro",title:"Literatura y lengua",desc:"Build vocabulary for discussing literature, writing, and the Spanish language itself.",goals:["Learn 14 literary and linguistic terms","Discuss books and writing traditions","Use literary register with confidence"]},

{type:"teach",trg:"el manuscrito",src:"the manuscript",pos:"noun",gender:"m",
 note:"Masculine noun. A handwritten or typed document, often unpublished.\nManu (hand) + scrito (written).",
 example:"A: El autor entregó el manuscrito a la editorial.\nB: Tardarán unos meses en revisarlo y publicarlo.",
 exampleSrc:"A: The author submitted the manuscript to the publisher.\nB: It will take them a few months to review and publish it.",
 funFact:"The Biblioteca Nacional de España holds manuscripts dating back to the 10th century."},

{type:"teach",trg:"la lengua indígena",src:"the indigenous language",pos:"noun",gender:"f",
 note:"Feminine noun. A native language of a region, predating colonization.\nIndígena = indigenous.",
 example:"A: En América Latina se hablan cientos de lenguas indígenas.\nB: Muchas están en peligro de desaparición.",
 exampleSrc:"A: Hundreds of indigenous languages are spoken in Latin America.\nB: Many are in danger of disappearing.",
 funFact:"Mexico alone has 68 indigenous languages. Spain's constitution recognizes co-official languages like Catalan and Basque."},

{type:"teach",trg:"el imperfecto",src:"the imperfect (tense)",pos:"noun",gender:"m",
 note:"Masculine noun. The past tense for habitual or ongoing actions.\nIm- (not) + perfecto (completed).",
 example:"A: El imperfecto se usa para describir acciones habituales en el pasado.\nB: Como 'Cuando era niño, jugaba en el parque.'",
 exampleSrc:"A: The imperfect is used to describe habitual actions in the past.\nB: Like 'When I was a child, I used to play in the park.'",
 funFact:"The imperfect is one of Spanish's most distinctive tenses. Many languages lack this precise distinction."},

{type:"teach",trg:"la mención",src:"the mention / special mention",pos:"noun",gender:"f",
 note:"Feminine noun. A reference to something, or an academic distinction.\nMención honorífica = honorable mention.",
 example:"A: Su novela recibió una mención especial del jurado.\nB: No ganó el premio, pero es un gran reconocimiento.",
 exampleSrc:"A: His novel received a special mention from the jury.\nB: He did not win the prize, but it is a great recognition.",
 funFact:"In Spanish universities, 'mención' also refers to a specialization within a degree program."},

{type:"mc",q:"¿Para qué se usa el imperfecto en español?",
 opts:["Para acciones habituales o continuas en el pasado","Para acciones futuras","Para dar órdenes","Para hablar de posibilidades"],
 ans:"Para acciones habituales o continuas en el pasado",
 hint:"A past tense for things that used to happen regularly or were ongoing. Not completed."},

{type:"teach",trg:"el etcétera",src:"the et cetera / and so on",pos:"noun",gender:"m",
 note:"Masculine noun. Used to indicate a list continues.\nAbbreviated: etc. From Latin et cetera.",
 example:"A: Necesitamos bolígrafos, cuadernos, carpetas, etcétera.\nB: Haré una lista completa para la tienda.",
 exampleSrc:"A: We need pens, notebooks, folders, et cetera.\nB: I will make a complete list for the store.",
 funFact:"The RAE advises using 'etc.' only once, never 'etc., etc.' or 'etc., etc., etc.' as many speakers do."},

{type:"teach",trg:"la cabeza",src:"the head (also: mind, leader)",pos:"noun",gender:"f",
 note:"Feminine noun. The head, but also the mind, or a leader.\nPerder la cabeza = to lose one's mind.",
 example:"A: Ese escritor tiene muy buena cabeza para los negocios.\nB: No es común que un artista sepa gestionar su carrera.",
 exampleSrc:"A: That writer has a very good head for business.\nB: It is not common for an artist to know how to manage their career.",
 funFact:"Spanish has dozens of 'cabeza' expressions: cabeza de familia, a la cabeza de, dolor de cabeza, cabeza abajo."},

{type:"teach",trg:"el apocalipsis",src:"the apocalypse",pos:"noun",gender:"m",
 note:"Masculine noun. A catastrophic event, or the biblical end times.\nFrom Greek apokalypsis (revelation).",
 example:"A: La novela describe un apocalipsis causado por un virus.\nB: Es ficción, pero resulta inquietantemente realista.",
 exampleSrc:"A: The novel describes an apocalypse caused by a virus.\nB: It is fiction, but it is disturbingly realistic.",
 funFact:"In Spanish, 'Apocalipsis' (capitalized) specifically means the Book of Revelation. Lowercase = any catastrophe."},

{type:"fb",s:"En América Latina se hablan cientos de {1} que existían antes de la colonización.",
 a:["lenguas indígenas"],opts:["lenguas indígenas","manuscritos","imperfectos","apocalipsis"],
 hint:"Native languages that were spoken before European colonizers arrived.",
 sSrc:"Hundreds of {1} that existed before colonization are spoken in Latin America."},

{type:"teach",trg:"la cítara",src:"the zither / cithara",pos:"noun",gender:"f",
 note:"Feminine noun. A stringed instrument played flat on a surface.\nFrom Greek kithara.",
 example:"A: La cítara es un instrumento típico de la música folclórica.\nB: Su sonido es muy dulce y melancólico.",
 exampleSrc:"A: The zither is a typical instrument of folk music.\nB: Its sound is very sweet and melancholic.",
 funFact:"The guitar's name comes from the same Greek root as cítara. Both are descendants of ancient string instruments."},

{type:"teach",trg:"el laúd",src:"the lute",pos:"noun",gender:"m",
 note:"Masculine noun. A pear-shaped stringed instrument from medieval times.\nFrom Arabic al-ud (the wood).",
 example:"A: El laúd fue el instrumento más popular del Renacimiento.\nB: En España se desarrolló una variante propia.",
 exampleSrc:"A: The lute was the most popular instrument of the Renaissance.\nB: In Spain a distinctive variant was developed.",
 funFact:"From Arabic 'al-ud', literally 'the wood'. The Arabic lute traveled to Europe through Al-Andalus."},

{type:"teach",trg:"la impronta",src:"the imprint / influence",pos:"noun",gender:"f",
 note:"Feminine noun. A lasting mark left by something.\nDejar impronta = to leave a mark.",
 example:"A: Cervantes dejó una impronta imborrable en la literatura mundial.\nB: Don Quijote es la primera novela moderna.",
 exampleSrc:"A: Cervantes left an indelible imprint on world literature.\nB: Don Quixote is the first modern novel.",
 funFact:"El Quijote has been translated into more languages than any other book except the Bible."},

{type:"mc",q:"¿De qué idioma viene la palabra 'laúd'?",
 opts:["Del francés","Del árabe","Del latín","Del griego"],
 ans:"Del árabe",
 hint:"This instrument came to Europe through Al-Andalus. Its name comes from 'al-ud' meaning 'the wood'."},

{type:"teach",trg:"el lector",src:"the reader",pos:"noun",gender:"m",
 note:"Masculine noun. A person who reads. Also: a university teaching assistant.\nFeminine: la lectora.",
 example:"A: Esta novela tiene millones de lectores en el mundo.\nB: Es muy buena. Me gusta mucho.",
 exampleSrc:"A: This novel has millions of readers in the world.\nB: It is very good. I like it a lot.",
 funFact:"In Spanish universities, a 'lector/a' is a native-speaker language assistant, different from a professor."},

{type:"teach",trg:"la literatura popular",src:"the folk literature",pos:"noun",gender:"f",
 note:"Feminine noun. Traditional stories and poems passed down through generations.\nPopular = of the people.",
 example:"A: La literatura popular incluye romances, coplas y cuentos.\nB: Es la base de toda la tradición literaria española.",
 exampleSrc:"A: Folk literature includes ballads, couplets, and tales.\nB: It is the foundation of the entire Spanish literary tradition.",
 funFact:"Spain's 'romancero' (ballad collection) is one of the richest oral traditions in any European language."},

{type:"fb",s:"Cervantes dejó una {1} imborrable en la literatura de todo el mundo.",
 a:["impronta"],opts:["impronta","cabeza","mención","cítara"],
 hint:"A lasting mark or influence that endures through time.",
 sSrc:"Cervantes left an indelible {1} on world literature."},

{type:"match",pairs:[
 {trg:"el manuscrito",src:"manuscript"},
 {trg:"el imperfecto",src:"imperfect (tense)"},
 {trg:"el laúd",src:"lute"},
 {trg:"el lector",src:"reader"},
 {trg:"el apocalipsis",src:"apocalypse"}
]}
]};
export default LESSON_15;
