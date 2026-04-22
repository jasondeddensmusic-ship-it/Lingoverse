// B2 Gap Batch 4 Lesson 10 - Technology & Innovation
const LESSON_10 = {id:"esv2_b2g4_l10",title:"Tecnología e innovación",icon:"💻",xp:15,board:true,steps:[
{type:"intro",title:"Tecnología e innovación",desc:"Build vocabulary for discussing technology, digital processes, and modern innovation.",goals:["Learn 15 technology and innovation words","Discuss digital transformation","Express ideas about standardization"]},

{type:"teach",trg:"el etiquetado",src:"the labeling / tagging",pos:"noun",gender:"m",
 note:"Masculine noun. The practice of putting labels or tags.\nDigital: etiquetado de datos.",
 example:"A: El etiquetado digital facilita la búsqueda de archivos.\nB: Es fundamental para organizar grandes bases de datos.",
 exampleSrc:"A: Digital labeling makes file searching easier.\nB: It is fundamental for organizing large databases.",
 funFact:"In AI, 'etiquetado de datos' (data labeling) is a crucial step in training machine learning models."},

{type:"teach",trg:"etiquetar",src:"to label / to tag",pos:"verb",gender:null,
 note:"Regular -ar verb. To attach a label or categorize.\nDigital: etiquetar fotos, etiquetar amigos.",
 example:"A: ¿Puedes etiquetar estas fotos con la fecha?\nB: Claro, así será más fácil encontrarlas después.",
 exampleSrc:"A: Can you tag these photos with the date?\nB: Sure, that way it will be easier to find them later.",
 funFact:"Social media has popularized 'etiquetar' beyond physical labels to mean tagging people online."},

{type:"teach",trg:"la actualización",src:"the update",pos:"noun",gender:"f",
 note:"Feminine noun. Bringing something up to date.\nCommon: actualización de software.",
 example:"A: La actualización del sistema operativo incluye mejoras de seguridad.\nB: Es importante instalarla cuanto antes.",
 exampleSrc:"A: The operating system update includes security improvements.\nB: It is important to install it as soon as possible.",
 funFact:"'Actualizar la página' (refresh the page) is what Spanish speakers say instead of 'reload'."},

{type:"teach",trg:"el ensamblaje",src:"the assembly / integration",pos:"noun",gender:"m",
 note:"Masculine noun. Putting components together.\nAlso used for software integration.",
 example:"A: La línea de ensamblaje produce mil unidades al día.\nB: La automatización ha mejorado mucho la producción.",
 exampleSrc:"A: The assembly line produces a thousand units per day.\nB: Automation has greatly improved production.",
 funFact:"Henry Ford's assembly line concept is called 'cadena de ensamblaje' or 'cadena de montaje' in Spanish."},

{type:"teach",trg:"la esfera",src:"the sphere / domain",pos:"noun",gender:"f",
 note:"Feminine noun. A round shape or an area of activity.\nCommon: esfera digital, esfera pública.",
 example:"A: Las redes sociales han transformado la esfera pública.\nB: Ahora cualquiera puede expresar su opinión.",
 exampleSrc:"A: Social media has transformed the public sphere.\nB: Now anyone can express their opinion.",
 funFact:"'Esfera privada' vs 'esfera pública' is a key concept in Spanish political and social discourse."},

{type:"mc",q:"¿Qué es una 'actualización de software'?",opts:["Una mejora del programa informático","Un virus informático","Un tipo de hardware","Una red social nueva"],ans:"Una mejora del programa informático",hint:"Think about what happens when your phone installs improvements to its system."},

{type:"teach",trg:"estático",src:"static / motionless",pos:"adj",gender:null,
 note:"Adjective. Not moving or changing.\nFeminine: estática. Tech: página estática vs dinámica.",
 example:"A: Las páginas web estáticas no cambian sin intervención humana.\nB: Las dinámicas se actualizan automáticamente.",
 exampleSrc:"A: Static web pages do not change without human intervention.\nB: Dynamic ones update automatically.",
 funFact:"In web development, 'estático' means the page content is fixed, not generated on the fly."},

{type:"teach",trg:"expandir",src:"to expand / to spread",pos:"verb",gender:null,
 note:"Regular -ir verb. To make bigger or spread wider.\nReflexive: expandirse.",
 example:"A: La empresa quiere expandir su presencia digital.\nB: Van a lanzar una nueva aplicación móvil.",
 exampleSrc:"A: The company wants to expand its digital presence.\nB: They are going to launch a new mobile app.",
 funFact:"'Expandir' is preferred in tech contexts, while 'ampliar' is used for physical expansion."},

{type:"teach",trg:"esquemático",src:"schematic",pos:"adj",gender:null,
 note:"Adjective. Presented as a simplified diagram.\nNoun: el esquema (diagram, outline).",
 example:"A: Necesito un plano esquemático del circuito.\nB: Te lo preparo esta tarde en formato digital.",
 exampleSrc:"A: I need a schematic plan of the circuit.\nB: I will prepare it for you this afternoon in digital format.",
 funFact:"In engineering, 'diagrama esquemático' shows electrical circuits using standardized symbols."},

{type:"teach",trg:"la dispersión",src:"the dispersal / spread",pos:"noun",gender:"f",
 note:"Feminine noun. Spreading out in different directions.\nTech: dispersión de datos.",
 example:"A: La dispersión de las antenas garantiza buena cobertura.\nB: Por eso hay señal en toda la ciudad.",
 exampleSrc:"A: The dispersal of the antennas guarantees good coverage.\nB: That is why there is signal across the whole city.",
 funFact:"In optics, 'dispersión cromática' explains how light splits into colors through a prism."},

{type:"fb",s:"La empresa quiere {1} su negocio a nuevos mercados.",a:["expandir"],opts:["expandir","etiquetar","estrangular","evidenciar"],hint:"To make something bigger by reaching into new areas.",sSrc:"The company wants to {1} its business to new markets."},

{type:"teach",trg:"el exponente",src:"the exponent / representative",pos:"noun",gender:"m",
 note:"Masculine noun. A leading example or mathematical power.\nCommon: máximo exponente.",
 example:"A: Esta startup es un exponente de la innovación española.\nB: Ha revolucionado el sector logístico.",
 exampleSrc:"A: This startup is an exponent of Spanish innovation.\nB: It has revolutionized the logistics sector.",
 funFact:"Spain's tech hub is Barcelona, home to the Mobile World Congress since 2006."},

{type:"teach",trg:"factible",src:"feasible",pos:"adj",gender:null,
 note:"Adjective. Possible to achieve.\nSynonym: viable, realizable.",
 example:"A: ¿Es factible implementar esta tecnología en un mes?\nB: Sería muy ajustado, pero no imposible.",
 exampleSrc:"A: Is it feasible to implement this technology in a month?\nB: It would be very tight, but not impossible.",
 funFact:"In project management, 'estudio de factibilidad' (feasibility study) precedes every major project."},

{type:"mc",q:"Una página web 'estática' es aquella que:",opts:["No funciona correctamente","No cambia sin intervención humana","Se actualiza constantemente","Tiene muchas animaciones"],ans:"No cambia sin intervención humana",hint:"Think about a webpage whose content stays the same until someone manually edits it."},

{type:"teach",trg:"el enfoque",src:"the focus / approach",pos:"noun",gender:"m",
 note:"Masculine noun. A way of looking at or handling something.\nVerb: enfocar.",
 example:"A: El enfoque de esta aplicación es la privacidad del usuario.\nB: Eso es cada vez más importante.",
 exampleSrc:"A: The focus of this application is user privacy.\nB: That is increasingly important.",
 funFact:"'Cambiar de enfoque' is a very common expression meaning to change your approach or perspective."},

{type:"fb",s:"Necesitamos un plano {1} del sistema eléctrico.",a:["esquemático"],opts:["esquemático","explosivo","estático","expresionista"],hint:"A simplified diagram showing the layout of components.",sSrc:"We need a {1} plan of the electrical system."},

{type:"match",pairs:[{trg:"etiquetar",src:"to label / tag"},{trg:"expandir",src:"to expand"},{trg:"estático",src:"static"},{trg:"enfoque",src:"focus"},{trg:"factible",src:"feasible"}]},

{type:"mc",q:"'Etiquetar' en redes sociales significa:",opts:["Borrar un comentario","Publicar una foto","Marcar a alguien en una publicación","Bloquear a un usuario"],ans:"Marcar a alguien en una publicación",hint:"Think about the action of tagging a friend in a social media post."},

{type:"fb",s:"La {1} de los datos es esencial para entrenar la inteligencia artificial.",a:["etiquetado"],opts:["etiquetado","ensamblaje","exponente","dispersión"],hint:"The process of categorizing and tagging data with labels.",sSrc:"The {1} of data is essential for training artificial intelligence."}
]};

export default LESSON_10;
