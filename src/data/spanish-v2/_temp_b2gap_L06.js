// B2 Gap Lesson 06 - Nature & Animals
const LESSON_6 = {id:"esv2_b2gap_l6",title:"Naturaleza y animales",icon:"🦌",xp:15,board:true,steps:[
{type:"intro",title:"Naturaleza y animales",desc:"Discover vocabulary about wildlife, plants, and natural landscapes across Spain.",goals:["Learn 20 nature and animal words","Describe landscapes and ecosystems","Talk about wildlife with specificity"]},

{type:"teach",trg:"el bisonte",src:"the bison",pos:"noun",gender:"m",
 note:"Masculine noun. A large wild bovine.",
 example:"A: En la cueva de Altamira hay pinturas de bisontes.\nB: Tienen más de quince mil años.",
 exampleSrc:"A: In the cave of Altamira there are bison paintings.\nB: They are over fifteen thousand years old.",
 funFact:"European bison (wisent) were reintroduced to Spain in 2010 in the Basque Country."},

{type:"teach",trg:"la cigarra",src:"the cicada",pos:"noun",gender:"f",
 note:"Feminine noun. The buzzing insect of summer.",
 example:"A: Las cigarras cantan sin parar en verano.\nB: Es el sonido típico del Mediterráneo.",
 exampleSrc:"A: The cicadas sing non-stop in summer.\nB: It is the typical sound of the Mediterranean.",
 funFact:"Aesop's fable of the ant and the cicada (hormiga y cigarra) is used to teach about hard work."},

{type:"teach",trg:"la alimaña",src:"the vermin / pest",pos:"noun",gender:"f",
 note:"Feminine noun. A harmful animal, or figuratively a despicable person.",
 example:"A: Las alimañas atacaron al ganado por la noche.\nB: Hay que proteger mejor el corral.",
 exampleSrc:"A: The vermin attacked the livestock at night.\nB: We need to better protect the pen.",
 funFact:"From Arabic al-haima (the wild beast). One of many Spanish words with Arabic origins."},

{type:"teach",trg:"la cobra",src:"the cobra",pos:"noun",gender:"f",
 note:"Feminine noun. A venomous snake with a hood.",
 example:"A: La cobra real es la serpiente venenosa más larga.\nB: Puede medir hasta cinco metros.",
 exampleSrc:"A: The king cobra is the longest venomous snake.\nB: It can measure up to five meters.",
 funFact:"'Cobra' comes from Portuguese cobra de capelo (snake with a hood), from Latin colubra."},

{type:"teach",trg:"el ciervo",src:"the deer",pos:"noun",gender:"m",
 note:"Masculine noun. A deer, especially a red deer.\nFeminine: la cierva.",
 example:"A: Vimos un ciervo en el bosque al amanecer.\nB: Qué suerte, son muy tímidos.",
 exampleSrc:"A: We saw a deer in the forest at dawn.\nB: How lucky, they are very shy.",
 funFact:"Spain has Europe's largest population of red deer (ciervo rojo), hunted since prehistoric times."},

{type:"mc",q:"¿Qué animal canta en verano en el Mediterráneo?",opts:["El bisonte","La cigarra","El ciervo","La cobra"],ans:"La cigarra",hint:"This insect makes a constant buzzing sound in the heat."},

{type:"teach",trg:"el can",src:"the dog (formal/literary)",pos:"noun",gender:"m",
 note:"Masculine noun. Formal or literary word for dog.\nEveryday: el perro.",
 example:"A: Los canes del pastor vigilaban el rebaño.\nB: Llevaban toda la noche despiertos.",
 exampleSrc:"A: The shepherd's dogs guarded the flock.\nB: They had been awake all night.",
 funFact:"From Latin canis. 'Islas Canarias' (Canary Islands) means 'Dog Islands', not canary bird islands."},

{type:"teach",trg:"la camada",src:"the litter (of animals)",pos:"noun",gender:"f",
 note:"Feminine noun. A group of baby animals born together.",
 example:"A: La gata tuvo una camada de cinco gatitos.\nB: Son adorables, todos diferentes.",
 exampleSrc:"A: The cat had a litter of five kittens.\nB: They are adorable, all different.",
 funFact:"From cama (bed), because animal mothers make a bed for their babies to be born on."},

{type:"teach",trg:"el caparazón",src:"the shell (of an animal)",pos:"noun",gender:"m",
 note:"Masculine noun. The hard protective shell of a turtle or crab.",
 example:"A: El caparazón de la tortuga estaba dañado.\nB: La llevaron al centro de rescate.",
 exampleSrc:"A: The turtle's shell was damaged.\nB: They took it to the rescue center.",
 funFact:"From capa (cape/layer) + -razón (augmentative). A shell is a 'big cape' of protection."},

{type:"teach",trg:"la colmena",src:"the beehive",pos:"noun",gender:"f",
 note:"Feminine noun. A structure where bees live and make honey.",
 example:"A: Hay tres colmenas en el huerto del abuelo.\nB: Produce una miel buenísima.",
 exampleSrc:"A: There are three beehives in grandpa's orchard.\nB: He produces excellent honey.",
 funFact:"Spain is Europe's largest honey producer, with over 2.5 million beehives across the country."},

{type:"teach",trg:"el brócoli",src:"the broccoli",pos:"noun",gender:"m",
 note:"Masculine noun. The green vegetable.\nAlso spelled: el brécol.",
 example:"A: ¿Te gusta el brócoli?\nB: Solo si está bien cocinado con ajo.",
 exampleSrc:"A: Do you like broccoli?\nB: Only if it is well cooked with garlic.",
 funFact:"From Italian broccoli (little sprouts). Spain's Murcia region is a major European broccoli exporter."},

{type:"fb",s:"Vimos un {1} escondido entre los árboles del bosque.",a:["ciervo"],opts:["ciervo","bisonte","can","brócoli"],hint:"A shy forest animal with antlers.",sSrc:"We saw a {1} hidden among the trees of the forest."},

{type:"teach",trg:"el champiñón",src:"the mushroom (cultivated)",pos:"noun",gender:"m",
 note:"Masculine noun. The common white button mushroom.\nWild mushrooms: la seta.",
 example:"A: Pon champiñones en la tortilla, por favor.\nB: Los corto en láminas finas.",
 exampleSrc:"A: Put mushrooms in the omelette, please.\nB: I will slice them thinly.",
 funFact:"From French champignon. Spain distinguishes champiñón (cultivated) from seta (wild foraged)."},

{type:"teach",trg:"la cebolleta",src:"the spring onion / chive",pos:"noun",gender:"f",
 note:"Feminine noun. A small, mild onion used in salads.",
 example:"A: Añade cebolleta picada a la ensalada.\nB: Le da un toque fresco y crujiente.",
 exampleSrc:"A: Add chopped spring onion to the salad.\nB: It gives it a fresh, crunchy touch.",
 funFact:"Diminutive of cebolla (onion). In some regions, 'cebolleta' refers to chives instead."},

{type:"teach",trg:"la campiña",src:"the countryside / farmland",pos:"noun",gender:"f",
 note:"Feminine noun. Open rural landscape, especially fertile fields.",
 example:"A: La campiña andaluza es preciosa en primavera.\nB: Los campos de girasoles son espectaculares.",
 exampleSrc:"A: The Andalusian countryside is beautiful in spring.\nB: The sunflower fields are spectacular.",
 funFact:"From Latin campania (flat land). 'La Campiña' is a specific region in Córdoba and Jaén provinces."},

{type:"mc",q:"¿Dónde producen miel las abejas?",opts:["En una camada","En un caparazón","En una colmena","En una campiña"],ans:"En una colmena",hint:"A structure specifically built for bees to live and work in."},

{type:"teach",trg:"la barranca",src:"the ravine / gorge",pos:"noun",gender:"f",
 note:"Feminine noun. A deep, narrow valley or gully.",
 example:"A: Hay una barranca profunda al final del sendero.\nB: Ten cuidado, el camino es estrecho.",
 exampleSrc:"A: There is a deep ravine at the end of the trail.\nB: Be careful, the path is narrow.",
 funFact:"Pre-Roman origin, possibly Iberian. 'Barranco' (masculine) is more common in some regions."},

{type:"teach",trg:"el cañizal",src:"the reed bed",pos:"noun",gender:"m",
 note:"Masculine noun. An area covered with reeds.",
 example:"A: Los patos se esconden en el cañizal del lago.\nB: Es su refugio natural.",
 exampleSrc:"A: The ducks hide in the reed bed of the lake.\nB: It is their natural refuge.",
 funFact:"From caña (reed) + -izal (place of). Spain's wetlands like Doñana have extensive reed beds."},

{type:"teach",trg:"el boj",src:"the boxwood",pos:"noun",gender:"m",
 note:"Masculine noun. An evergreen shrub used in gardens.",
 example:"A: Los setos de boj dan forma al jardín.\nB: Hay que podarlos cada primavera.",
 exampleSrc:"A: The boxwood hedges shape the garden.\nB: They need to be pruned every spring.",
 funFact:"From Latin buxus. Boxwood is extremely hard and was used for chess pieces and combs."},

{type:"teach",trg:"la agronomía",src:"the agronomy",pos:"noun",gender:"f",
 note:"Feminine noun. The science of farming and soil management.",
 example:"A: Estudia agronomía en la universidad.\nB: Quiere modernizar la finca de su familia.",
 exampleSrc:"A: He studies agronomy at the university.\nB: He wants to modernize his family's farm.",
 funFact:"From Greek agros (field) + nomos (law). Spain has major agronomy schools in Córdoba and Valencia."},

{type:"teach",trg:"agrario",src:"agrarian / agricultural",pos:"adj",gender:null,
 note:"Adjective. Related to farming and land.\nFeminine: agraria.",
 example:"A: La reforma agraria cambió la propiedad de la tierra.\nB: Los campesinos recibieron parcelas.",
 exampleSrc:"A: The agrarian reform changed land ownership.\nB: The peasants received plots of land.",
 funFact:"Spain's 'reforma agraria' of the 1930s was a major cause of social tension before the Civil War."},

{type:"fb",s:"La {1} andaluza está llena de olivos y girasoles.",a:["campiña"],opts:["campiña","barranca","colmena","camada"],hint:"Open countryside with fertile fields and crops.",sSrc:"The Andalusian {1} is full of olive trees and sunflowers."},

{type:"mc",q:"¿Qué es un caparazón?",opts:["La cubierta protectora de una tortuga","Un nido de abejas","Una cría de animal","Un tipo de planta"],ans:"La cubierta protectora de una tortuga",hint:"A hard protective covering found on turtles and crabs."},

{type:"match",pairs:[{trg:"bisonte",src:"bison"},{trg:"ciervo",src:"deer"},{trg:"colmena",src:"beehive"},{trg:"campiña",src:"countryside"},{trg:"champiñón",src:"mushroom"}]},

{type:"fb",s:"La gata tuvo una {1} de seis gatitos preciosos.",a:["camada"],opts:["camada","colmena","campiña","barranca"],hint:"A group of baby animals born at the same time.",sSrc:"The cat had a {1} of six beautiful kittens."},

{type:"mc",q:"España es el mayor productor europeo de:",opts:["brócoli","champiñones","miel","cebolletas"],ans:"miel",hint:"Spain has over 2.5 million structures where bees produce this."}
]};

export default LESSON_6;
