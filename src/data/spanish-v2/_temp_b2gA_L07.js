// Lesson 7. Épocas históricas
const LESSON_7 = {id:"esv2_b2gA_l7", title:"Épocas históricas", icon:"🏛️", xp:15, board:true, steps:[
{type:"intro", title:"Épocas históricas", desc:"Learn vocabulary for discussing historical periods, ages, and archaeological discoveries.", goals:["Learn 15 history and archaeology terms","Discuss historical periods in Spanish","Use formal register for historical topics"]},

{type:"teach", trg:"la Edad de Piedra", src:"the Stone Age", pos:"noun", gender:"f",
 note:"Earliest period of human tool use.\nPiedra = stone. Edad = age/era.",
 example:"A: En la Edad de Piedra, los humanos vivían en cuevas.\nB: Altamira tiene pinturas de esa época.",
 exampleSrc:"A: In the Stone Age, humans lived in caves.\nB: Altamira has paintings from that era.",
 funFact:"The Altamira cave in Cantabria has Stone Age paintings over 35,000 years old."},

{type:"teach", trg:"la Edad de Bronce", src:"the Bronze Age", pos:"noun", gender:"f",
 note:"Period when bronze tools replaced stone.\nBronce = bronze.",
 example:"A: La Edad de Bronce trajo grandes avances tecnológicos.\nB: La metalurgia cambió la historia.",
 exampleSrc:"A: The Bronze Age brought great technological advances.\nB: Metallurgy changed history.",
 funFact:"The Iberian Peninsula was a major Bronze Age tin source for all of Europe."},

{type:"teach", trg:"la Edad de Hierro", src:"the Iron Age", pos:"noun", gender:"f",
 note:"Period when iron tools and weapons became dominant.\nHierro = iron.",
 example:"A: Durante la Edad de Hierro surgieron los pueblos celtas.\nB: En el norte de España hay muchos castros.",
 exampleSrc:"A: During the Iron Age, Celtic peoples emerged.\nB: In northern Spain there are many hillforts.",
 funFact:"Spain's 'castros' (hillforts) in Galicia are some of Europe's best-preserved Iron Age sites."},

{type:"teach", trg:"la Edad Antigua", src:"the Ancient Age / Classical Antiquity", pos:"noun", gender:"f",
 note:"From writing's invention to the fall of Rome.\nAntigua = ancient.",
 example:"A: La Edad Antigua incluye las civilizaciones griega y romana.\nB: España fue parte del Imperio Romano.",
 exampleSrc:"A: The Ancient Age includes Greek and Roman civilizations.\nB: Spain was part of the Roman Empire.",
 funFact:"Hispania was one of Rome's most important provinces, producing emperors Trajan and Hadrian."},

{type:"teach", trg:"la Edad Contemporánea", src:"the Contemporary Age / Modern Era", pos:"noun", gender:"f",
 note:"From the French Revolution to the present.\nContemporánea = contemporary.",
 example:"A: La Edad Contemporánea comienza con la Revolución Francesa.\nB: Es la era de los grandes cambios sociales.",
 exampleSrc:"A: The Contemporary Age begins with the French Revolution.\nB: It's the era of great social changes.",
 funFact:"In Spanish historiography, there are five ages: Piedra, Antigua, Media, Moderna, Contemporánea."},

{type:"mc", q:"¿Qué período va después de la Edad de Piedra?", opts:["La Edad de Bronce","La Edad Antigua","La Edad Media","La Edad Contemporánea"], ans:"La Edad de Bronce",
 hint:"After stone tools came metal tools. Which metal came first?"},

{type:"fb", s:"Las pinturas de Altamira datan de la {1}.", a:["Edad de Piedra"], opts:["Edad de Piedra","Edad de Bronce","Edad de Hierro","Edad Antigua"],
 hint:"These cave paintings are from humanity's earliest period using stone tools.",
 sSrc:"The Altamira paintings date from the {1}."},

{type:"teach", trg:"neolítico", src:"Neolithic", pos:"adj", gender:null,
 note:"The 'New Stone Age'. Period of farming and settled life.\nNeo- (new) + lithos (stone).",
 example:"A: Los poblados neolíticos muestran los primeros cultivos.\nB: Fue cuando los humanos dejaron de ser nómadas.",
 exampleSrc:"A: Neolithic settlements show the first crops.\nB: It was when humans stopped being nomadic.",
 funFact:"The Iberian Peninsula has Neolithic sites dating to 5500 BCE near Valencia."},

{type:"teach", trg:"el arcabuz", src:"the arquebus / early firearm", pos:"noun", gender:"m",
 note:"An early type of gun used in the 15th-17th centuries.\nFrom German Hakenbuchse.",
 example:"A: Los soldados españoles usaban el arcabuz en batalla.\nB: Fue el arma que cambió la guerra medieval.",
 exampleSrc:"A: Spanish soldiers used the arquebus in battle.\nB: It was the weapon that changed medieval warfare.",
 funFact:"The Spanish tercio formations with arcabuz dominated European battlefields for 150 years."},

{type:"teach", trg:"la hilera", src:"the row / line", pos:"noun", gender:"f",
 note:"A straight line of objects or people.\nFrom hilo (thread).",
 example:"A: Los soldados formaron una hilera perfecta.\nB: La disciplina militar exigía orden absoluto.",
 exampleSrc:"A: The soldiers formed a perfect row.\nB: Military discipline demanded absolute order.",
 funFact:"From hilo (thread). Picture items strung along a thread, one after another."},

{type:"mc", q:"¿Qué significa 'neolítico'?", opts:["Un material de construcción","Relativo a la Nueva Edad de Piedra","Un tipo de roca muy antigua","Una forma de arte prehistórico"], ans:"Relativo a la Nueva Edad de Piedra",
 hint:"The prefix 'neo-' means new, and '-lítico' relates to stone (Greek lithos)."},

{type:"fb", s:"Los pueblos {1} empezaron a cultivar la tierra y criar animales.", a:["neolíticos"], opts:["neolíticos","contemporáneos","antiguos","medievales"],
 hint:"This adjective describes the New Stone Age period of farming and settlement.",
 sSrc:"The {1} peoples began to farm the land and raise animals."},

{type:"teach", trg:"el asta", src:"the shaft / flagpole / antler", pos:"noun", gender:"m",
 note:"Uses 'el' despite being feminine (starts with stressed a-).\nMultiple meanings.",
 example:"A: La bandera ondeaba en lo alto del asta.\nB: A media asta significa duelo nacional.",
 exampleSrc:"A: The flag was waving at the top of the pole.\nB: At half-mast means national mourning.",
 funFact:"'A media asta' (half-mast) is used in Spain for official mourning declarations."},

{type:"teach", trg:"la nuca", src:"the nape of the neck", pos:"noun", gender:"f",
 note:"The back part of the neck.\nFrom Arabic nukha (spinal cord).",
 example:"A: Siento un dolor fuerte en la nuca.\nB: Puede ser por la mala postura frente al ordenador.",
 exampleSrc:"A: I feel a sharp pain in the nape of my neck.\nB: It could be from bad posture at the computer.",
 funFact:"One of many Spanish words from Arabic, reflecting 800 years of Moorish presence."},

{type:"teach", trg:"el mordisco", src:"the bite", pos:"noun", gender:"m",
 note:"A single act of biting. From morder (to bite).\nAlso: a bite mark.",
 example:"A: El perro le dio un mordisco en la mano.\nB: No fue grave, pero le asustó mucho.",
 exampleSrc:"A: The dog gave him a bite on the hand.\nB: It wasn't serious, but it scared him a lot.",
 funFact:"'Dar un mordisco' is the standard phrase. In slang, 'mordisco fiscal' means a tax bite."},

{type:"match", pairs:[
 {trg:"la Edad de Bronce", src:"Bronze Age"},
 {trg:"la Edad de Hierro", src:"Iron Age"},
 {trg:"neolítico", src:"Neolithic"},
 {trg:"el arcabuz", src:"arquebus"},
 {trg:"la hilera", src:"row / line"}
]},

{type:"fb", s:"La bandera estaba a media {1} en señal de duelo.", a:["asta"], opts:["asta","hilera","nuca","edad"],
 hint:"This noun means a flagpole. At half height, it signals mourning.",
 sSrc:"The flag was at half {1} as a sign of mourning."},

{type:"mc", q:"¿De qué idioma viene la palabra 'nuca'?", opts:["Del griego","Del francés","Del árabe","Del latín"], ans:"Del árabe",
 hint:"Many Spanish body-related words come from the language of the Moors."},

{type:"drag_fill", s:"En la {1} se usaban herramientas de {2}.", blanks:{"1":"Edad de Hierro","2":"metal"}, pool:["Edad de Hierro","metal","piedra","arcabuz"],
 hint:"During this historical period, iron tools and weapons became dominant."},

{type:"fb", s:"El niño le dio un {1} a la manzana y sonrió.", a:["mordisco"], opts:["mordisco","arcabuz","asta","hilera"],
 hint:"This noun describes the act of biting into something.",
 sSrc:"The child took a {1} of the apple and smiled."},

{type:"match", pairs:[
 {trg:"la Edad Antigua", src:"Classical Antiquity"},
 {trg:"la Edad Contemporánea", src:"Modern Era"},
 {trg:"el asta", src:"flagpole"},
 {trg:"la nuca", src:"nape of the neck"},
 {trg:"el mordisco", src:"bite"}
]}
]};
export default LESSON_7;
