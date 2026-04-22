// B2 Gap Lesson 19 - Actions & Change III
const LESSON_19 = {id:"esv2_b2gap_l19",title:"Acciones y cambio III",icon:"🔧",xp:15,board:true,steps:[
{type:"intro",title:"Acciones y cambio III",desc:"Complete your B2 verb toolkit with words about naming, creating, and moving.",goals:["Learn 20 more verbs and verbal nouns","Express creation and transformation","Use formal and technical verbs"]},

{type:"teach",trg:"apellidar",src:"to surname / to call by name",pos:"verb",gender:null,
 note:"Regular -ar verb. To give a surname.\nReflexive: apellidarse (to have the surname).",
 example:"A: ¿Cómo te apellidas?\nB: Me apellido García López.",
 exampleSrc:"A: What is your surname?\nB: My surname is García López.",
 funFact:"Spaniards have two surnames: father's first + mother's first. 'García' is the most common."},

{type:"teach",trg:"apoderar",src:"to empower / to authorize",pos:"verb",gender:null,
 note:"Regular -ar verb. To give legal power.\nReflexive: apoderarse de (to seize/take over).",
 example:"A: Se apoderó de los documentos sin permiso.\nB: Fue un acto completamente ilegal.",
 exampleSrc:"A: He seized the documents without permission.\nB: It was a completely illegal act.",
 funFact:"From poder (power). 'Apoderamiento' is a legal concept meaning empowerment or authorization."},

{type:"teach",trg:"autodefinir",src:"to self-define",pos:"verb",gender:null,
 note:"Regular -ir verb. To define one's own identity.\nReflexive: autodefinirse.",
 example:"A: Cada persona tiene derecho a autodefinirse.\nB: Nadie debería imponer etiquetas a otros.",
 exampleSrc:"A: Every person has the right to self-define.\nB: Nobody should impose labels on others.",
 funFact:"Auto- (self) + definir. Very current in Spanish social discourse about identity."},

{type:"teach",trg:"avocar",src:"to take jurisdiction / to claim authority",pos:"verb",gender:null,
 note:"Regular -ar verb. Legal term: to take over a case from a lower court.",
 example:"A: El tribunal superior avocó el caso por su complejidad.\nB: Los jueces locales no podían resolverlo.",
 exampleSrc:"A: The higher court claimed jurisdiction due to the case's complexity.\nB: Local judges could not resolve it.",
 funFact:"From Latin advocare (to call to). Very technical legal terminology."},

{type:"teach",trg:"azular",src:"to turn blue / to make blue",pos:"verb",gender:null,
 note:"Regular -ar verb. To color something blue or to become blue.",
 example:"A: El frío azuló sus labios.\nB: Necesitaba entrar en calor urgentemente.",
 exampleSrc:"A: The cold turned his lips blue.\nB: He needed to warm up urgently.",
 funFact:"From azul (blue), from Arabic lazaward. Vivid and poetic, though uncommon in daily speech."},

{type:"mc",q:"En España, cada persona tiene:",opts:["Dos apellidos","Tres apellidos","Ningún apellido","Un apellido"],ans:"Dos apellidos",hint:"The Spanish naming system uses both parents' surnames."},

{type:"teach",trg:"chutar",src:"to shoot (a ball) / to kick",pos:"verb",gender:null,
 note:"Regular -ar verb. To kick a ball toward the goal.\nAlso slang: to inject drugs.",
 example:"A: El delantero chutó desde fuera del área.\nB: El balón entró por la escuadra.",
 exampleSrc:"A: The striker shot from outside the box.\nB: The ball went into the top corner.",
 funFact:"From English 'shoot'. Very common in football commentary. 'Chut' is the noun for shot."},

{type:"teach",trg:"colindar",src:"to border / to be adjacent",pos:"verb",gender:null,
 note:"Regular -ar verb. To share a boundary with.\nColindante: bordering, adjacent.",
 example:"A: La parcela colinda con un parque natural.\nB: Es un lugar ideal para construir.",
 exampleSrc:"A: The plot borders a natural park.\nB: It is an ideal place to build.",
 funFact:"From con- + lindar (to border). Real estate ads often mention 'colindante con' to add value."},

{type:"teach",trg:"compenetrar",src:"to be in sync / to understand deeply",pos:"verb",gender:null,
 note:"Regular -ar verb. Usually reflexive: compenetrarse.\nTo achieve deep mutual understanding.",
 example:"A: Los músicos se compenetran a la perfección.\nB: Parece que se leen el pensamiento.",
 exampleSrc:"A: The musicians are perfectly in sync.\nB: It seems like they read each other's minds.",
 funFact:"Con- + penetrar (to penetrate). To penetrate each other's thoughts, achieving perfect harmony."},

{type:"teach",trg:"el accidentar",src:"to cause an accident (to)",pos:"verb",gender:null,
 note:"Regular -ar verb. To have an accident.\nReflexive: accidentarse.",
 example:"A: Se accidentó en la autopista por la lluvia.\nB: Por suerte, solo fue un golpe leve.",
 exampleSrc:"A: He had an accident on the highway because of the rain.\nB: Luckily, it was just a minor bump.",
 funFact:"From accidente. The reflexive 'accidentarse' is more common than the transitive form."},

{type:"fb",s:"¿Cómo te {1}? Necesito tu nombre completo para el formulario.",a:["apellidas"],opts:["apellidas","apoderas","autodefines","accidentas"],hint:"Asking for someone's family name or surname.",sSrc:"What is your {1}? I need your full name for the form."},

{type:"teach",trg:"el bocado",src:"the bite / morsel",pos:"noun",gender:"m",
 note:"Masculine noun. A mouthful of food.\nAlready taught in L10, recycled here.",
 example:"A: Dame un bocado de tu sandwich.\nB: Toma, pero solo uno.",
 exampleSrc:"A: Give me a bite of your sandwich.\nB: Here, but only one.",
 funFact:"'No dar ni un bocado' means not sharing at all. Generosity with food is valued in Spain."},

{type:"teach",trg:"la angélica",src:"the angelica (herb)",pos:"noun",gender:"f",
 note:"Feminine noun. An aromatic herb used in cooking and medicine.",
 example:"A: La angélica se usa en repostería tradicional.\nB: Da un sabor dulce y aromático.",
 exampleSrc:"A: Angelica is used in traditional pastry-making.\nB: It gives a sweet and aromatic flavor.",
 funFact:"Named after angels because of its supposed healing powers. Used in Spanish confectionery."},

{type:"teach",trg:"la biblia",src:"the bible",pos:"noun",gender:"f",
 note:"Feminine noun. The Christian holy book, or figuratively any essential reference.",
 example:"A: Este manual es la biblia de la cocina española.\nB: Todo chef debería tener un ejemplar.",
 exampleSrc:"A: This manual is the bible of Spanish cooking.\nB: Every chef should have a copy.",
 funFact:"Figuratively, 'es la biblia' means it is the definitive reference on a topic."},

{type:"teach",trg:"el bienaventurado",src:"the blessed / fortunate one",pos:"noun",gender:"m",
 note:"Masculine noun. A person considered blessed or very fortunate.\nFeminine: la bienaventurada.",
 example:"A: Los bienaventurados heredarán la tierra.\nB: Es una frase del Sermón de la Montaña.",
 exampleSrc:"A: The blessed shall inherit the earth.\nB: It is a phrase from the Sermon on the Mount.",
 funFact:"From bien (well) + aventurado (fortunate). The Beatitudes are 'las bienaventuranzas' in Spanish."},

{type:"mc",q:"'Se compenetran a la perfección' significa que:",opts:["Se pelean mucho","Se entienden perfectamente","Viven juntos","Trabajan por separado"],ans:"Se entienden perfectamente",hint:"Being so in sync that it seems like mind-reading."},

{type:"teach",trg:"la blogosfera",src:"the blogosphere",pos:"noun",gender:"f",
 note:"Feminine noun. The world of blogs and online writing.",
 example:"A: La blogosfera española es muy activa.\nB: Hay blogs de cocina, viajes y tecnología por miles.",
 exampleSrc:"A: The Spanish blogosphere is very active.\nB: There are thousands of cooking, travel, and tech blogs.",
 funFact:"Blog + -sfera (sphere). Spanish blogs boomed in the mid-2000s and many evolved into businesses."},

{type:"teach",trg:"la bolita",src:"the small ball / marble",pos:"noun",gender:"f",
 note:"Feminine noun. Diminutive of bola (ball).\nA small sphere or marble.",
 example:"A: Los niños jugaban a las bolitas en el patio.\nB: Es un juego de toda la vida.",
 exampleSrc:"A: The children played marbles in the yard.\nB: It is a timeless game.",
 funFact:"Diminutive of bola. 'Jugar a las bolitas/canicas' (marbles) is a classic childhood game."},

{type:"teach",trg:"el bolívar",src:"the bolivar (currency)",pos:"noun",gender:"m",
 note:"Masculine noun. The currency of Venezuela.",
 example:"A: El bolívar ha perdido mucho valor en las últimas décadas.\nB: La inflación ha sido devastadora.",
 exampleSrc:"A: The bolivar has lost a lot of value in recent decades.\nB: Inflation has been devastating.",
 funFact:"Named after Simón Bolívar, the liberator of South America. Venezuela's currency since 1879."},

{type:"teach",trg:"la bruja",src:"the witch",pos:"noun",gender:"f",
 note:"Feminine noun. A witch or sorceress.\nMasculine: el brujo.",
 example:"A: En el cuento, la bruja vivía en el bosque.\nB: Tenía una casa hecha de dulces.",
 exampleSrc:"A: In the story, the witch lived in the forest.\nB: She had a house made of candy.",
 funFact:"'Caza de brujas' (witch hunt) is used figuratively, as in English. Salem had its Spanish equivalents."},

{type:"fb",s:"La parcela {1} con un parque natural protegido.",a:["colinda"],opts:["colinda","compenetra","avocar","chutar"],hint:"To share a boundary or border with an adjacent area.",sSrc:"The plot {1} a protected natural park."},

{type:"mc",q:"La moneda de Venezuela se llama:",opts:["El sol","El peso","El bolívar","El euro"],ans:"El bolívar",hint:"Named after South America's famous liberator."},

{type:"match",pairs:[{trg:"apellidar",src:"to surname"},{trg:"chutar",src:"to shoot (ball)"},{trg:"colindar",src:"to border"},{trg:"bruja",src:"witch"},{trg:"blogosfera",src:"blogosphere"}]},

{type:"fb",s:"El delantero {1} con fuerza y marcó un golazo.",a:["chutó"],opts:["chutó","colindó","apostilló","avocó"],hint:"To kick the ball forcefully toward the goal.",sSrc:"The striker {1} powerfully and scored a great goal."},

{type:"mc",q:"'Apoderarse de algo' significa:",opts:["Comprarlo","Perderlo","Regalarlo","Tomarlo sin permiso"],ans:"Tomarlo sin permiso",hint:"To seize or take over something, often without authorization."}
]};

export default LESSON_19;
