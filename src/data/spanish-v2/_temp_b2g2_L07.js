// B2 Gap2 Lesson 07 - Home & Everyday Objects
const LESSON_7 = {id:"esv2_b2g2_l7",title:"El hogar y los objetos",icon:"🏠",xp:15,board:true,steps:[
{type:"intro",title:"El hogar y los objetos",desc:"Learn vocabulary for household items, containers, and everyday objects you encounter at home.",goals:["Learn 20 words about home and objects","Describe household items precisely","Talk about domestic spaces and furnishings"]},

{type:"teach",trg:"el baúl",src:"the trunk / chest",pos:"noun",gender:"m",
 note:"Masculine noun. A large box for storage, often old-fashioned.",
 example:"A: Encontré fotos antiguas en el baúl del abuelo.\nB: ¡Qué tesoro! Algunas deben tener cincuenta años.",
 exampleSrc:"A: I found old photos in grandfather's trunk.\nB: What a treasure! Some must be fifty years old.",
 funFact:"In Latin America, 'baúl' also means car trunk (boot). In Spain, that is 'maletero'."},

{type:"teach",trg:"el cuenco",src:"the bowl",pos:"noun",gender:"m",
 note:"Masculine noun. A deep, rounded dish for food.",
 example:"A: Pon la sopa en un cuenco grande.\nB: ¿El de cerámica o el de madera?",
 exampleSrc:"A: Put the soup in a large bowl.\nB: The ceramic one or the wooden one?",
 funFact:"'Cuenco' is Peninsular Spanish. In Latin America, 'tazón' or 'bol' are more common."},

{type:"teach",trg:"el cucharón",src:"the ladle",pos:"noun",gender:"m",
 note:"Masculine noun. A large, deep spoon for serving soup or stew.",
 example:"A: Pásame el cucharón, por favor.\nB: Toma, ten cuidado que la sopa está muy caliente.",
 exampleSrc:"A: Pass me the ladle, please.\nB: Here, be careful because the soup is very hot.",
 funFact:"Augmentative of 'cuchara' (spoon). The -ón suffix makes things bigger in Spanish."},

{type:"teach",trg:"la cartulina",src:"the cardboard / card stock",pos:"noun",gender:"f",
 note:"Feminine noun. Thick, colored paper used for crafts.",
 example:"A: Necesito cartulina azul para el proyecto del colegio.\nB: Hay en la papelería de la esquina.",
 exampleSrc:"A: I need blue card stock for the school project.\nB: There is some at the stationery shop on the corner.",
 funFact:"Every Spanish schoolchild knows the 'papelería' (stationery shop) for cartulina supplies."},

{type:"teach",trg:"la cajetilla",src:"the pack (of cigarettes)",pos:"noun",gender:"f",
 note:"Feminine noun. A small pack, especially of cigarettes.",
 example:"A: Una cajetilla cuesta más de cinco euros ya.\nB: Otra razón más para dejar de fumar.",
 exampleSrc:"A: A pack costs more than five euros now.\nB: Another reason to quit smoking.",
 funFact:"Diminutive of 'cajeta' (small box). Spain's tobacco prices have risen steadily as a health measure."},

{type:"mc",q:"¿Para qué sirve un cucharón?",opts:["Para servir sopa o guiso","Para cortar pan","Para guardar ropa vieja","Para medir ingredientes"],ans:"Para servir sopa o guiso",hint:"Think about the large, deep spoon used to scoop liquid dishes from a pot."},

{type:"teach",trg:"el arcón",src:"the large chest / coffer",pos:"noun",gender:"m",
 note:"Masculine noun. A very large trunk or storage chest.",
 example:"A: El arcón del salón guarda las mantas de invierno.\nB: Es práctico y además queda decorativo.",
 exampleSrc:"A: The chest in the living room stores the winter blankets.\nB: It is practical and also looks decorative.",
 funFact:"Augmentative of 'arca' (ark/chest). Spanish homes traditionally had arcones for linen storage."},

{type:"teach",trg:"el bazar",src:"the bazaar / variety store",pos:"noun",gender:"m",
 note:"Masculine noun. A shop selling varied goods at low prices.",
 example:"A: Compré este jarrón en el bazar del barrio.\nB: Tienen de todo y a buen precio.",
 exampleSrc:"A: I bought this vase at the neighborhood variety store.\nB: They have everything at good prices.",
 funFact:"From Persian. In Spain, 'bazar chino' refers to Chinese-run variety stores found everywhere."},

{type:"teach",trg:"el chicle",src:"the chewing gum",pos:"noun",gender:"m",
 note:"Masculine noun. Gum for chewing.",
 example:"A: ¿Tienes un chicle? Necesito refrescar el aliento.\nB: Toma, es de menta.",
 exampleSrc:"A: Do you have a piece of gum? I need to freshen my breath.\nB: Here, it is mint.",
 funFact:"From Nahuatl 'tzictli'. The Aztecs chewed chicle from sapodilla trees centuries before Europeans."},

{type:"teach",trg:"la cabecera",src:"the headboard / bedside",pos:"noun",gender:"f",
 note:"Feminine noun. The head end of a bed, or the top of a table.",
 example:"A: Pon el libro en la mesita de la cabecera.\nB: ¿Al lado de la lámpara?",
 exampleSrc:"A: Put the book on the bedside table.\nB: Next to the lamp?",
 funFact:"'Médico de cabecera' (bedside doctor) is the Spanish term for your general practitioner."},

{type:"teach",trg:"la choza",src:"the hut / shack",pos:"noun",gender:"f",
 note:"Feminine noun. A small, simple dwelling made of basic materials.",
 example:"A: Los pastores dormían en una choza de piedra.\nB: Era pequeña pero los protegía del frío.",
 exampleSrc:"A: The shepherds slept in a stone hut.\nB: It was small but it protected them from the cold.",
 funFact:"Robinson Crusoe builds a 'choza' in the famous Spanish translation of the novel."},

{type:"fb",s:"Encontré cartas antiguas en el {1} del desván.",a:["baúl"],opts:["baúl","cuenco","arcón","bazar"],hint:"A large storage box, often old-fashioned, used for keeping personal items.",sSrc:"I found old letters in the {1} in the attic."},

{type:"teach",trg:"la alberca",src:"the water tank / pool",pos:"noun",gender:"f",
 note:"Feminine noun. An irrigation reservoir. In Mexico: swimming pool.",
 example:"A: La alberca del pueblo recoge agua de lluvia.\nB: Es un sistema de riego muy antiguo.",
 exampleSrc:"A: The village water tank collects rainwater.\nB: It is a very old irrigation system.",
 funFact:"From Arabic 'al-birka' (the pond). One of thousands of Arabic loanwords in Spanish."},

{type:"teach",trg:"la carpintería",src:"the carpentry / carpenter's workshop",pos:"noun",gender:"f",
 note:"Feminine noun. The craft of woodworking, or the workshop itself.",
 example:"A: Lleva la silla rota a la carpintería.\nB: Seguro que pueden arreglarla por poco dinero.",
 exampleSrc:"A: Take the broken chair to the carpenter's workshop.\nB: They can surely fix it for little money.",
 funFact:"Spain's carpintería tradition includes elaborate wooden altarpieces (retablos) in churches."},

{type:"teach",trg:"el carpintero",src:"the carpenter",pos:"noun",gender:"m",
 note:"Masculine noun. Feminine: la carpintera.\nA woodworker who builds and repairs things.",
 example:"A: El carpintero hizo las estanterías a medida.\nB: Encajan perfectamente en el hueco.",
 exampleSrc:"A: The carpenter made the shelves to measure.\nB: They fit perfectly in the space.",
 funFact:"'Pájaro carpintero' (woodpecker) literally means 'carpenter bird' in Spanish."},

{type:"teach",trg:"el casero",src:"the landlord",pos:"noun",gender:"m",
 note:"Masculine noun. Feminine: la casera.\nThe owner who rents out a property.",
 example:"A: El casero subió el alquiler un diez por ciento.\nB: Es una subida excesiva en un solo año.",
 exampleSrc:"A: The landlord raised the rent by ten percent.\nB: That is an excessive increase in a single year.",
 funFact:"Also an adjective: 'comida casera' (home cooking). Both meanings from 'casa' (house)."},

{type:"mc",q:"¿De qué idioma viene la palabra alberca?",opts:["Del árabe","Del latín","Del francés","Del náhuatl"],ans:"Del árabe",hint:"Think about the Arabic influence on Spanish vocabulary, especially water-related words."},

{type:"teach",trg:"el barrendero",src:"the street sweeper",pos:"noun",gender:"m",
 note:"Masculine noun. Feminine: la barrendera.\nPerson who sweeps and cleans streets.",
 example:"A: Los barrenderos empiezan a las seis de la mañana.\nB: Gracias a ellos las calles están limpias.",
 exampleSrc:"A: The street sweepers start at six in the morning.\nB: Thanks to them the streets are clean.",
 funFact:"From 'barrer' (to sweep). Madrid's barrenderos became iconic during the city's modernization."},

{type:"teach",trg:"el basurero",src:"the garbage collector / dump",pos:"noun",gender:"m",
 note:"Masculine noun. The person who collects trash, or the dump itself.",
 example:"A: El basurero pasa los martes y viernes.\nB: No olvides sacar los contenedores esta noche.",
 exampleSrc:"A: The garbage collector comes on Tuesdays and Fridays.\nB: Do not forget to put the bins out tonight.",
 funFact:"From 'basura' (garbage). Spain has a color-coded recycling system: yellow, green, blue, brown."},

{type:"teach",trg:"la bolita",src:"the small ball / marble",pos:"noun",gender:"f",
 note:"Feminine noun. Diminutive of bola. A small round object.",
 example:"A: Los niños jugaban a las bolitas en el patio.\nB: Es un juego que no pasa de moda.",
 exampleSrc:"A: The children were playing marbles in the yard.\nB: It is a game that never goes out of style.",
 funFact:"Diminutive of 'bola' (ball). 'Jugar a las bolitas/canicas' is a childhood classic across Spain."},

{type:"teach",trg:"el batiente",src:"the door frame / leaf (of a door)",pos:"noun",gender:"m",
 note:"Masculine noun. The part of a door frame that the door closes against.",
 example:"A: La puerta golpea contra el batiente con el viento.\nB: Habría que ajustar las bisagras.",
 exampleSrc:"A: The door bangs against the frame in the wind.\nB: The hinges should be adjusted.",
 funFact:"'De par en par' (wide open) describes when both leaves of a double door open past the batientes."},

{type:"fb",s:"El {1} subió el alquiler sin previo aviso.",a:["casero"],opts:["casero","carpintero","barrendero","basurero"],hint:"The person who owns the property you rent and collects the rent.",sSrc:"The {1} raised the rent without prior notice."},

{type:"match",pairs:[{trg:"baúl",src:"trunk"},{trg:"cuenco",src:"bowl"},{trg:"choza",src:"hut"},{trg:"bazar",src:"variety store"},{trg:"chicle",src:"chewing gum"}]},

{type:"mc",q:"¿Qué hace un barrendero?",opts:["Limpia y barre las calles","Construye muebles de madera","Recoge la basura de las casas","Repara las puertas rotas"],ans:"Limpia y barre las calles",hint:"Think about the person whose job is to sweep public streets clean."}
]};

export default LESSON_7;
