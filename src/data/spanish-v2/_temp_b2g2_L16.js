// B2 Gap2 Lesson 16 - Geography & Descriptors
const LESSON_16 = {id:"esv2_b2g2_l16",title:"Geografía y descripción",icon:"🗺️",xp:15,board:true,steps:[
{type:"intro",title:"Geografía y descripción",desc:"Learn words for describing landscapes, physical properties, and geographical features of Spain and beyond.",goals:["Learn 20 geographical and descriptive words","Describe landscapes and shapes precisely","Discuss physical properties and regional features"]},

{type:"teach",trg:"el abismo",src:"the abyss / chasm",pos:"noun",gender:"m",
 note:"Masculine noun. A deep, seemingly bottomless gap.",
 example:"A: Miró al abismo desde el borde del acantilado.\nB: La caída era de más de cien metros.",
 exampleSrc:"A: He looked into the abyss from the edge of the cliff.\nB: The drop was more than one hundred meters.",
 funFact:"Also figurative: 'al borde del abismo' (on the brink of the abyss) is used for crises."},

{type:"teach",trg:"adyacente",src:"adjacent / next to",pos:"adj",gender:null,
 note:"Adjective. Situated next to or near something. Same form m/f.",
 example:"A: El parque es adyacente al centro comercial.\nB: Puedes aparcar allí y caminar.",
 exampleSrc:"A: The park is adjacent to the shopping center.\nB: You can park there and walk.",
 funFact:"From Latin adiacere (to lie near). Formal in tone. 'Al lado de' is the everyday equivalent."},

{type:"teach",trg:"cóncavo",src:"concave",pos:"adj",gender:null,
 note:"Adjective. Curved inward, like the inside of a bowl.\nFeminine: cóncava.",
 example:"A: Un espejo cóncavo concentra la luz en un punto.\nB: Se usa en telescopios y faros.",
 exampleSrc:"A: A concave mirror concentrates light at one point.\nB: It is used in telescopes and headlights.",
 funFact:"Opposite of 'convexo'. Spanish physics classes drill 'cóncavo y convexo' from early on."},

{type:"teach",trg:"cónico",src:"conical / cone-shaped",pos:"adj",gender:null,
 note:"Adjective. Having the shape of a cone.\nFeminine: cónica.",
 example:"A: La torre tiene un tejado cónico muy elegante.\nB: Es típico de la arquitectura medieval.",
 exampleSrc:"A: The tower has a very elegant conical roof.\nB: It is typical of medieval architecture.",
 funFact:"'Sección cónica' (conic section) is a key concept in mathematics: ellipses, parabolas, hyperbolas."},

{type:"teach",trg:"la curvatura",src:"the curvature",pos:"noun",gender:"f",
 note:"Feminine noun. The degree to which something is curved.",
 example:"A: La curvatura de la Tierra es visible desde la estratosfera.\nB: Es una vista impresionante.",
 exampleSrc:"A: The curvature of the Earth is visible from the stratosphere.\nB: It is an impressive sight.",
 funFact:"'Curvatura de la columna' (spinal curvature) is a common medical term in Spanish orthopedics."},

{type:"mc",q:"¿Qué forma tiene un objeto cónico?",opts:["De cono, ancho abajo y estrecho arriba","De cubo, con seis caras","De esfera, completamente redondo","De cilindro, como un tubo"],ans:"De cono, ancho abajo y estrecho arriba",hint:"Think about the shape of an ice cream cone or a party hat."},

{type:"teach",trg:"anglosajón",src:"Anglo-Saxon",pos:"adj",gender:null,
 note:"Adjective. Relating to English-speaking culture.\nFeminine: anglosajona.",
 example:"A: La cultura anglosajona está muy presente en España.\nB: Sobre todo en la música y el cine.",
 exampleSrc:"A: Anglo-Saxon culture is very present in Spain.\nB: Especially in music and cinema.",
 funFact:"Spaniards use 'anglosajón' broadly for anything from the English-speaking world."},

{type:"teach",trg:"arancelario",src:"tariff-related",pos:"adj",gender:null,
 note:"Adjective. Relating to import/export duties.\nFeminine: arancelaria.",
 example:"A: Las barreras arancelarias dificultan el comercio.\nB: La Unión Europea las ha reducido internamente.",
 exampleSrc:"A: Tariff barriers make trade difficult.\nB: The European Union has reduced them internally.",
 funFact:"From 'arancel' (tariff). Spain's EU membership eliminated arancelario barriers with other EU states."},

{type:"teach",trg:"comarcal",src:"regional / district-level",pos:"adj",gender:null,
 note:"Adjective. Relating to a comarca (district or region). Same form m/f.",
 example:"A: La carretera comarcal conecta los pueblos de la zona.\nB: Es más lenta pero más bonita que la autopista.",
 exampleSrc:"A: The regional road connects the villages in the area.\nB: It is slower but more beautiful than the highway.",
 funFact:"A 'comarca' is a traditional district smaller than a province. Spain has hundreds of them."},

{type:"teach",trg:"el brasileño",src:"the Brazilian",pos:"noun",gender:"m",
 note:"Masculine noun/adjective. Feminine: la brasileña.\nA person from Brazil.",
 example:"A: Los brasileños forman una comunidad grande en España.\nB: Sobre todo en Madrid y Barcelona.",
 exampleSrc:"A: Brazilians form a large community in Spain.\nB: Especially in Madrid and Barcelona.",
 funFact:"Brazil and Spain have strong cultural ties. Brazilian telenovelas are hugely popular in Spain."},

{type:"teach",trg:"el compatriota",src:"the compatriot",pos:"noun",gender:"m",
 note:"Common gender: el/la compatriota.\nA fellow citizen of your country.",
 example:"A: Encontrar a un compatriota en el extranjero siempre alegra.\nB: Enseguida sientes una conexión especial.",
 exampleSrc:"A: Meeting a compatriot abroad always brings joy.\nB: You immediately feel a special connection.",
 funFact:"Compound: con + patriota. The emotional bond between compatriotas abroad is a universal experience."},

{type:"fb",s:"Miró al {1} desde el borde del precipicio con vértigo.",a:["abismo"],opts:["abismo","arancel","comarca","brasileño"],hint:"A deep, seemingly bottomless gap or chasm that inspires fear.",sSrc:"He looked into the {1} from the edge of the cliff with vertigo."},

{type:"teach",trg:"el anglófono",src:"the English speaker",pos:"noun",gender:"m",
 note:"Masculine noun. Feminine: la anglófona.\nA person whose language is English.",
 example:"A: Los países anglófonos dominan la industria del cine.\nB: Hollywood marca las tendencias globales.",
 exampleSrc:"A: English-speaking countries dominate the film industry.\nB: Hollywood sets global trends.",
 funFact:"Modeled on 'francófono' (French-speaker). The -fono suffix comes from Greek phone (voice)."},

{type:"teach",trg:"críptico",src:"cryptic / mysterious",pos:"adj",gender:null,
 note:"Adjective. Having a hidden or obscure meaning.\nFeminine: críptica.",
 example:"A: Su mensaje era bastante críptico.\nB: No entendí nada de lo que quería decir.",
 exampleSrc:"A: His message was quite cryptic.\nB: I did not understand anything he was trying to say.",
 funFact:"From Greek kryptos (hidden). Same root as 'criptografía' (cryptography)."},

{type:"teach",trg:"el asta",src:"the flagpole / antler",pos:"noun",gender:"m",
 note:"Feminine noun, but 'el asta' (uses el before a- for phonetics).\nA pole for flags, or an animal horn.",
 example:"A: La bandera ondeaba en lo alto del asta.\nB: Se veía desde toda la plaza.",
 exampleSrc:"A: The flag waved at the top of the flagpole.\nB: It could be seen from the entire square.",
 funFact:"Like 'el agua' and 'el águila', 'el asta' uses 'el' despite being feminine. A classic Spanish rule."},

{type:"teach",trg:"el bagaje",src:"the baggage / background",pos:"noun",gender:"m",
 note:"Masculine noun. Accumulated experience or knowledge. Also: literal luggage.",
 example:"A: Tiene un bagaje cultural impresionante.\nB: Ha viajado y leído muchísimo.",
 exampleSrc:"A: He has an impressive cultural background.\nB: He has traveled and read extensively.",
 funFact:"The figurative sense (experience, knowledge) is far more common than the literal (luggage) in Spain."},

{type:"mc",q:"¿Qué significa críptico?",opts:["Escrito en otro idioma","Difícil de entender, con significado oculto","Muy fácil de leer","Largo y aburrido"],ans:"Difícil de entender, con significado oculto",hint:"Think about a message whose meaning is hidden or deliberately obscure."},

{type:"teach",trg:"la crin",src:"the mane (of a horse)",pos:"noun",gender:"f",
 note:"Feminine noun. The long hair on a horse's neck.",
 example:"A: La crin del caballo brillaba al sol.\nB: Lo habían cepillado antes de la exhibición.",
 exampleSrc:"A: The horse's mane shone in the sun.\nB: They had brushed it before the exhibition.",
 funFact:"'Crin vegetal' (vegetable horsehair) was traditionally used to stuff mattresses in Spain."},

{type:"teach",trg:"el chato",src:"the snub-nosed person / small glass",pos:"noun",gender:"m",
 note:"Masculine noun/adjective. Flat-nosed, or a small glass of wine.",
 example:"A: ¿Nos tomamos un chato de vino antes de cenar?\nB: Buena idea, en el bar de la esquina.",
 exampleSrc:"A: Shall we have a small glass of wine before dinner?\nB: Good idea, at the bar on the corner.",
 funFact:"A 'chato' is a short, wide glass. Ordering 'un chato' is very Spanish. Also a term of endearment."},

{type:"teach",trg:"el deje",src:"the accent / slight trace",pos:"noun",gender:"m",
 note:"Masculine noun. A subtle accent or lingering flavor.",
 example:"A: Tiene un deje andaluz cuando habla.\nB: Aunque lleva veinte años en Madrid, no lo ha perdido.",
 exampleSrc:"A: He has a slight Andalusian accent when he speaks.\nB: Although he has been in Madrid for twenty years, he has not lost it.",
 funFact:"More subtle than 'acento'. A 'deje' is barely noticeable. The word itself sounds delicate."},

{type:"fb",s:"Tiene un {1} cultural impresionante gracias a sus viajes.",a:["bagaje"],opts:["bagaje","abismo","asta","deje"],hint:"The noun for accumulated experience, knowledge, and cultural background.",sSrc:"He has an impressive cultural {1} thanks to his travels."},

{type:"match",pairs:[{trg:"abismo",src:"abyss"},{trg:"cóncavo",src:"concave"},{trg:"curvatura",src:"curvature"},{trg:"críptico",src:"cryptic"},{trg:"deje",src:"slight accent"}]}
]};

export default LESSON_16;
