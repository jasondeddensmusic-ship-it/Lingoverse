// B2 Gap Batch 4 Lesson 19 - Science & Measurement
const LESSON_19 = {id:"esv2_b2g4_l19",title:"Ciencia y medición",icon:"🔬",xp:15,board:true,steps:[
{type:"intro",title:"Ciencia y medición",desc:"Build vocabulary for discussing scientific concepts, measurements, and technical processes.",goals:["Learn 18 science and measurement terms","Discuss technical topics with precision","Use scientific Spanish confidently"]},

{type:"teach",trg:"el diámetro",src:"the diameter",pos:"noun",gender:"m",
 note:"Masculine noun. The distance across a circle through the center.\nFrom Greek dia (through) + metron (measure).",
 example:"A: El diámetro de esta tubería es de diez centímetros.\nB: Necesitamos una más grande para el caudal.",
 exampleSrc:"A: The diameter of this pipe is ten centimeters.\nB: We need a bigger one for the flow rate.",
 funFact:"In colloquial Spanish, 'diametralmente opuesto' means the exact opposite of something."},

{type:"teach",trg:"la diástole",src:"the diastole",pos:"noun",gender:"f",
 note:"Feminine noun. The phase when the heart relaxes.\nOpposite: sístole. Accent on the 'á'.",
 example:"A: Durante la diástole, el corazón se llena de sangre.\nB: Es la fase de relajación del músculo cardíaco.",
 exampleSrc:"A: During diastole, the heart fills with blood.\nB: It is the relaxation phase of the cardiac muscle.",
 funFact:"In poetry, 'diástole' also means moving a short syllable's stress, the opposite of 'sístole'."},

{type:"teach",trg:"la dinamita",src:"the dynamite",pos:"noun",gender:"f",
 note:"Feminine noun. An explosive material.\nInvented by Alfred Nobel. Also figurative: explosive news.",
 example:"A: Usaron dinamita para demoler el edificio viejo.\nB: La explosión controlada fue un éxito.",
 exampleSrc:"A: They used dynamite to demolish the old building.\nB: The controlled explosion was a success.",
 funFact:"Nobel invented dynamite in 1867. His guilt over its destructive use led him to create the Nobel Prizes."},

{type:"teach",trg:"la dermis",src:"the dermis",pos:"noun",gender:"f",
 note:"Feminine noun. The thick inner layer of skin.\nRelated: dermatología, dermatólogo.",
 example:"A: La dermis contiene los vasos sanguíneos y los nervios.\nB: Es la capa más profunda de la piel.",
 exampleSrc:"A: The dermis contains the blood vessels and nerves.\nB: It is the deepest layer of the skin.",
 funFact:"'Dermis' stays the same in singular and plural in Spanish: la dermis / las dermis."},

{type:"teach",trg:"el encendido",src:"the ignition",pos:"noun",gender:"m",
 note:"Masculine noun. The process of starting a motor.\nFrom encender (to turn on, to ignite).",
 example:"A: El sistema de encendido del coche no funciona.\nB: Puede ser un problema de la batería.",
 exampleSrc:"A: The car's ignition system is not working.\nB: It could be a battery problem.",
 funFact:"Modern cars use 'encendido electrónico' (electronic ignition), replacing the old 'llave de contacto'."},

{type:"mc",q:"La 'diástole' es la fase en la que el corazón:",opts:["Se relaja y se llena de sangre","Se contrae para bombear sangre","Deja de latir temporalmente","Late más rápido de lo normal"],ans:"Se relaja y se llena de sangre",hint:"Think about the resting phase of the heartbeat cycle, opposite of contraction."},

{type:"teach",trg:"descomprimir",src:"to decompress / to unzip",pos:"verb",gender:null,
 note:"Regular -ir verb. To release pressure or extract compressed files.\nNoun: la descompresión.",
 example:"A: Necesitas descomprimir el archivo antes de abrirlo.\nB: Usa un programa como WinRAR o 7-Zip.",
 exampleSrc:"A: You need to decompress the file before opening it.\nB: Use a program like WinRAR or 7-Zip.",
 funFact:"In diving, 'descompresión' is critical: rising too fast causes 'enfermedad descompresiva' (the bends)."},

{type:"teach",trg:"electromagnético",src:"electromagnetic",pos:"adj",gender:null,
 note:"Adjective. Related to electromagnetic forces.\nFeminine: electromagnética.",
 example:"A: Las ondas electromagnéticas incluyen la luz visible y las microondas.\nB: Están en todas partes a nuestro alrededor.",
 exampleSrc:"A: Electromagnetic waves include visible light and microwaves.\nB: They are everywhere around us.",
 funFact:"Spain's first electromagnetic telegraph line ran from Madrid to Irún in 1854."},

{type:"teach",trg:"el córner",src:"the corner kick",pos:"noun",gender:"m",
 note:"Masculine noun. A corner kick in football.\nAnglicism accepted by the RAE. Plural: córneres.",
 example:"A: El gol llegó después de un córner en el minuto noventa.\nB: Fue un cabezazo perfecto del delantero.",
 exampleSrc:"A: The goal came after a corner kick in the ninetieth minute.\nB: It was a perfect header by the striker.",
 funFact:"The RAE accepted 'córner' with an accent. The purist alternative 'saque de esquina' is rarely used."},

{type:"teach",trg:"el elevador",src:"the elevator / lift",pos:"noun",gender:"m",
 note:"Masculine noun. A device for moving people between floors.\nIn Spain: ascensor is more common.",
 example:"A: El elevador del hospital está fuera de servicio.\nB: Tendremos que usar las escaleras.",
 exampleSrc:"A: The hospital elevator is out of service.\nB: We will have to use the stairs.",
 funFact:"In Spain, 'ascensor' is standard. 'Elevador' is more common in Mexico and Central America."},

{type:"fb",s:"Necesitas {1} el archivo ZIP antes de poder abrirlo.",a:["descomprimir"],opts:["descomprimir","desolar","desperdigar","deshumanizar"],hint:"To extract or unzip a compressed digital file.",sSrc:"You need to {1} the ZIP file before you can open it."},

{type:"teach",trg:"erguir",src:"to straighten up / to stand erect",pos:"verb",gender:null,
 note:"Irregular verb: irgo/yergo.\nReflexive: erguirse (to stand tall). Very literary.",
 example:"A: El capitán se irguió ante sus tropas con orgullo.\nB: Su presencia inspiraba respeto.",
 exampleSrc:"A: The captain stood tall before his troops with pride.\nB: His presence inspired respect.",
 funFact:"One of Spanish's most irregular verbs. 'Erguirse' is almost exclusively literary or poetic."},

{type:"teach",trg:"la armónica",src:"the harmonica",pos:"noun",gender:"f",
 note:"Feminine noun. A small wind instrument played with the mouth.\nAlso: armónica de cristal.",
 example:"A: Aprendió a tocar la armónica de forma autodidacta.\nB: Ahora toca en un grupo de blues.",
 exampleSrc:"A: He learned to play the harmonica self-taught.\nB: Now he plays in a blues band.",
 funFact:"The harmonica is called 'armónica de boca' in some Latin American countries to distinguish it."},

{type:"teach",trg:"la cítara",src:"the zither",pos:"noun",gender:"f",
 note:"Feminine noun. A stringed instrument played flat on a table.\nFrom Greek kithara.",
 example:"A: El sonido de la cítara es muy relajante.\nB: Se usa mucho en la música tradicional alpina.",
 exampleSrc:"A: The sound of the zither is very relaxing.\nB: It is used a lot in traditional Alpine music.",
 funFact:"Greek 'kithara' gave us both 'cítara' and 'guitarra'. They share the same ancient ancestor."},

{type:"teach",trg:"desleír",src:"to dissolve / to dilute",pos:"verb",gender:null,
 note:"Irregular verb (e>i): deslío.\nTo dissolve a substance in liquid. Formal usage.",
 example:"A: Hay que desleír la maicena en agua fría antes de añadirla.\nB: Si no, se forman grumos.",
 exampleSrc:"A: You must dissolve the cornstarch in cold water before adding it.\nB: Otherwise, lumps form.",
 funFact:"'Desleír' is mostly used in cooking instructions. In chemistry, 'disolver' is preferred."},

{type:"mc",q:"Un 'elevador' es lo mismo que:",opts:["Un ascensor","Un tipo de grúa","Una escalera mecánica","Un vehículo de carga"],ans:"Un ascensor",hint:"Think about a device in buildings that carries people up and down between floors."},

{type:"fb",s:"El {1} de la tubería principal es de cincuenta centímetros.",a:["diámetro"],opts:["diámetro","elevador","córner","encendido"],hint:"The measurement of width across the center of a circular pipe.",sSrc:"The {1} of the main pipe is fifty centimeters."},

{type:"match",pairs:[{trg:"diástole",src:"diastole"},{trg:"dinamita",src:"dynamite"},{trg:"armónica",src:"harmonica"},{trg:"descomprimir",src:"to decompress"},{trg:"electromagnético",src:"electromagnetic"}]}
]};

export default LESSON_19;
