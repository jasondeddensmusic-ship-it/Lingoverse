// Lesson 15. Bienestar y modo de vida
const LESSON_15 = {id:"esv2_b2gA_l15", title:"Bienestar y modo de vida", icon:"🧘", xp:15, board:true, steps:[
{type:"intro", title:"Bienestar y modo de vida", desc:"Discuss wellness, lifestyle choices, and personal care with nuanced B2 vocabulary.", goals:["Learn 15 wellness and lifestyle words","Discuss health and well-being topics","Express lifestyle preferences precisely"]},

{type:"teach", trg:"el adulto", src:"the adult", pos:"noun", gender:"m",
 note:"A fully grown person. Also adjective: contenido adulto.\nFrom Latin adultus (grown up).",
 example:"A: Los adultos necesitan al menos siete horas de sueño.\nB: Muchos no llegan ni a seis.",
 exampleSrc:"A: Adults need at least seven hours of sleep.\nB: Many don't even get six.",
 funFact:"Spain's average bedtime is midnight, the latest in Europe."},

{type:"teach", trg:"la mousse", src:"mousse", pos:"noun", gender:"f",
 note:"A light, airy dessert or hair product.\nFrom French mousse (foam).",
 example:"A: La mousse de chocolate está deliciosa.\nB: El secreto es usar chocolate negro de calidad.",
 exampleSrc:"A: The chocolate mousse is delicious.\nB: The secret is using quality dark chocolate.",
 funFact:"Borrowed directly from French. In Spain, 'mousse' is always feminine."},

{type:"teach", trg:"el mostacho", src:"the moustache (literary)", pos:"noun", gender:"m",
 note:"A more literary or humorous word for moustache.\nEvery-day: bigote.",
 example:"A: El capitán tenía un mostacho muy grande.\nB: Era su seña de identidad.",
 exampleSrc:"A: The captain had a very big moustache.\nB: It was his trademark.",
 funFact:"'Bigote' is the standard word. 'Mostacho' has a deliberately old-fashioned, literary feel."},

{type:"teach", trg:"el bolillo", src:"the bobbin / bread roll (Mexico)", pos:"noun", gender:"m",
 note:"A small wooden tool for lace-making. In Mexico: a type of bread roll.",
 example:"A: Mi abuela hacía encaje de bolillos con una paciencia increíble.\nB: Es un arte que requiere años de práctica.",
 exampleSrc:"A: My grandmother made bobbin lace with incredible patience.\nB: It's an art that requires years of practice.",
 funFact:"'Encaje de bolillos' also means something extremely complicated or difficult."},

{type:"teach", trg:"la cola de caballo", src:"the ponytail / horsetail plant", pos:"noun", gender:"f",
 note:"A hairstyle where hair is gathered at the back.\nAlso: an herbal plant.",
 example:"A: Se hizo una cola de caballo antes de salir a correr.\nB: Es el peinado más práctico para el deporte.",
 exampleSrc:"A: She put her hair in a ponytail before going for a run.\nB: It's the most practical hairstyle for sports.",
 funFact:"The horsetail plant (Equisetum) is sold in Spanish herbalists for urinary health."},

{type:"mc", q:"¿Qué significa 'encaje de bolillos' en sentido figurado?", opts:["Algo extremadamente complicado","Un tipo de pan","Un ejercicio físico","Una receta de cocina"], ans:"Algo extremadamente complicado",
 hint:"Bobbin lace requires incredible skill and patience, hence the figurative meaning."},

{type:"fb", s:"La {1} de chocolate es el postre favorito de los niños.", a:["mousse"], opts:["mousse","cola","base","línea"],
 hint:"This French loanword describes a light, airy dessert.",
 sSrc:"Chocolate {1} is children's favorite dessert."},

{type:"teach", trg:"el color de pelo", src:"hair color", pos:"noun", gender:"m",
 note:"The natural or dyed color of someone's hair.\nPelo = hair.",
 example:"A: ¿Cuál es tu color de pelo natural?\nB: Castaño oscuro, pero me lo tiño rubio.",
 exampleSrc:"A: What's your natural hair color?\nB: Dark brown, but I dye it blonde.",
 funFact:"In Spain, 'moreno' can mean dark-haired, tanned, or dark-skinned depending on context."},

{type:"teach", trg:"el color de piel", src:"skin color", pos:"noun", gender:"m",
 note:"The natural pigmentation of someone's skin.\nPiel = skin.",
 example:"A: La discriminación por color de piel es inaceptable.\nB: Todas las personas merecen el mismo respeto.",
 exampleSrc:"A: Discrimination based on skin color is unacceptable.\nB: All people deserve the same respect.",
 funFact:"Spain's Constitution (Article 14) prohibits discrimination by race, sex, or religion."},

{type:"teach", trg:"el burro", src:"the donkey", pos:"noun", gender:"m",
 note:"A domesticated equine. Figurative: a stubborn or hardworking person.\nAlso adj: stupid.",
 example:"A: En los pueblos todavía se ven burros en el campo.\nB: Son animales muy resistentes y trabajadores.",
 exampleSrc:"A: In villages you can still see donkeys in the countryside.\nB: They are very tough and hardworking animals.",
 funFact:"'Burro' as insult means stubborn or dim. But 'trabajar como un burro' is a compliment."},

{type:"mc", q:"¿Qué es una 'cola de caballo' como peinado?", opts:["El pelo suelto sobre los hombros","Pelo recogido y sujeto en la parte trasera de la cabeza","Una trenza lateral","Un recogido alto con horquillas"], ans:"Pelo recogido y sujeto en la parte trasera de la cabeza",
 hint:"Picture a horse's tail hanging from the back of the head."},

{type:"fb", s:"El {1} es un animal muy resistente y trabajador.", a:["burro"], opts:["burro","adulto","bolillo","mostacho"],
 hint:"This animal is known for being tough and hardworking in rural areas.",
 sSrc:"The {1} is a very tough and hardworking animal."},

{type:"teach", trg:"la cana", src:"the grey hair", pos:"noun", gender:"f",
 note:"A single grey or white hair.\nPlural: canas. 'Echar canas' = to go grey.",
 example:"A: Ya me están saliendo las primeras canas.\nB: A mí me aparecieron a los treinta.",
 exampleSrc:"A: I'm already getting my first grey hairs.\nB: Mine appeared when I was thirty.",
 funFact:"'Echar una cana al aire' means to have a fling or break from routine."},

{type:"teach", trg:"la calza", src:"the stocking / hose", pos:"noun", gender:"f",
 note:"Historical leg garment, usually tight-fitting.\nPlural: calzas. From Latin calceus (shoe).",
 example:"A: Los nobles del siglo XVI llevaban calzas de colores vivos.\nB: Era un símbolo de estatus social.",
 exampleSrc:"A: 16th-century nobles wore brightly colored hose.\nB: It was a symbol of social status.",
 funFact:"'Calzas' gave us 'calzado' (footwear) and 'calzoncillos' (underpants)."},

{type:"teach", trg:"la montera", src:"the bullfighter's hat", pos:"noun", gender:"f",
 note:"The distinctive two-cornered hat worn by bullfighters.\nAlso: a type of glass roof.",
 example:"A: El torero se puso la montera antes de entrar al ruedo.\nB: Es un gesto ritual muy simbólico.",
 exampleSrc:"A: The bullfighter put on his hat before entering the ring.\nB: It's a very symbolic ritual gesture.",
 funFact:"Bullfighters toss the montera into the ring for luck before the final act."},

{type:"match", pairs:[
 {trg:"la mousse", src:"mousse"},
 {trg:"el bolillo", src:"bobbin"},
 {trg:"la cola de caballo", src:"ponytail"},
 {trg:"la cana", src:"grey hair"},
 {trg:"la montera", src:"bullfighter's hat"}
]},

{type:"fb", s:"Ya me han salido muchas {1} en las sienes.", a:["canas"], opts:["canas","calzas","monteras","colas"],
 hint:"These are individual grey or white hairs that appear with age.",
 sSrc:"I've already got many {1} at my temples."},

{type:"mc", q:"¿Qué significa 'echar una cana al aire'?", opts:["Salir al aire libre","Peinarse de forma diferente","Darse un capricho o aventura ocasional","Teñirse el pelo"], ans:"Darse un capricho o aventura ocasional",
 hint:"The phrase uses a grey hair as a metaphor for a brief escape from routine."},

{type:"drag_fill", s:"Se recogió el pelo en una {1} y se puso la gorra de {2}.", blanks:{"1":"cola de caballo","2":"deporte"}, pool:["cola de caballo","deporte","montera","calza"],
 hint:"She tied her hair back and put on her sports cap."},

{type:"fb", s:"Los nobles del Renacimiento llevaban {1} de seda.", a:["calzas"], opts:["calzas","canas","monteras","colas"],
 hint:"These historical garments were tight-fitting leg coverings worn by nobility.",
 sSrc:"Renaissance nobles wore silk {1}."},

{type:"match", pairs:[
 {trg:"el adulto", src:"adult"},
 {trg:"el mostacho", src:"moustache (literary)"},
 {trg:"el color de pelo", src:"hair color"},
 {trg:"el color de piel", src:"skin color"},
 {trg:"la calza", src:"stocking / hose"}
]}
]};
export default LESSON_15;
