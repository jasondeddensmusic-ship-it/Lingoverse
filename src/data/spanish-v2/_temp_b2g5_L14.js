// B2 Gap Batch 5 Lesson 14 - Agriculture & Rural Life
const LESSON_14 = {id:"esv2_b2g5_l14",title:"Agricultura y vida rural",icon:"🌾",xp:15,board:true,steps:[
{type:"intro",title:"Agricultura y vida rural",desc:"Learn vocabulary about farming, rural life, and the agricultural economy of Spain.",goals:["Learn 15 words about agriculture and rural life","Discuss farming practices and land use","Use vocabulary about the rural economy"]},

{type:"teach",trg:"la agronomía",src:"the agronomy",pos:"noun",gender:"f",
 note:"Feminine noun. The science of soil management and crop production.\nRelated: agrónomo.",
 example:"A: Estudió agronomía en la universidad de Córdoba.\nB: Ahora trabaja mejorando cultivos de olivos.",
 exampleSrc:"A: She studied agronomy at the University of Córdoba.\nB: Now she works improving olive crops.",
 funFact:"From Greek agros (field) + nomos (law). Spain's agricultural sector employs over 700,000 people."},

{type:"teach",trg:"la carreta",src:"the cart / wagon",pos:"noun",gender:"f",
 note:"Feminine noun. A two-wheeled vehicle pulled by animals.\nTraditional farm transport.",
 example:"A: Mi bisabuelo transportaba la cosecha en carreta.\nB: Ahora usamos tractores, claro.",
 exampleSrc:"A: My great-grandfather transported the harvest by cart.\nB: Now we use tractors, of course.",
 funFact:"Decorated carretas are still used in festivals like the Romería del Rocío in Andalusia."},

{type:"teach",trg:"el basurero",src:"the garbage collector / dump",pos:"noun",gender:"m",
 note:"Masculine noun. A person who collects waste, or a dump site.\nFeminine: la basurera.",
 example:"A: El basurero pasa a las seis de la mañana.\nB: Por eso hay que sacar la basura la noche antes.",
 exampleSrc:"A: The garbage collector comes at six in the morning.\nB: That's why you have to take the trash out the night before.",
 funFact:"In rural Spain, 'basurero' often means the dump itself. In cities, 'recogedor de basuras' is also used."},

{type:"teach",trg:"la hoz",src:"the sickle / gorge",pos:"noun",gender:"f",
 note:"Feminine noun. A curved blade for cutting crops.\nAlso: a narrow river gorge.",
 example:"A: Los segadores usaban la hoz para cortar el trigo.\nB: Era un trabajo muy duro bajo el sol.",
 exampleSrc:"A: The reapers used the sickle to cut the wheat.\nB: It was very hard work under the sun.",
 funFact:"The hoz y el martillo (hammer and sickle) was adopted from Russian. In geography, 'hoces' are river gorges."},

{type:"teach",trg:"el hacha",src:"the axe",pos:"noun",gender:"f",
 note:"Feminine noun with masculine article (el hacha, like el agua).\nUsed for chopping wood.",
 example:"A: Necesitamos el hacha para cortar la leña.\nB: Está en el cobertizo del jardín.",
 exampleSrc:"A: We need the axe to chop the firewood.\nB: It's in the garden shed.",
 funFact:"Like 'el hada' and 'el agua', 'el hacha' takes the masculine article because of the stressed initial 'a'."},

{type:"mc",q:"¿Qué es una hoz en agricultura?",opts:["Una herramienta curva para segar","Un tipo de tractor moderno","Una semilla de trigo","Un abono orgánico"],ans:"Una herramienta curva para segar",hint:"A curved blade tool used by hand to cut grain crops at harvest time."},

{type:"teach",trg:"la horquilla",src:"the pitchfork / hairpin / bracket",pos:"noun",gender:"f",
 note:"Feminine noun. A forked tool for hay.\nAlso: a hairpin, or a range/bracket of values.",
 example:"A: Los precios están en una horquilla de veinte a treinta euros.\nB: Depende de la temporada.",
 exampleSrc:"A: Prices are in a bracket of twenty to thirty euros.\nB: It depends on the season.",
 funFact:"From horca (fork). The three meanings (farm tool, hairpin, price range) all share the concept of forking."},

{type:"teach",trg:"el hollín",src:"the soot",pos:"noun",gender:"m",
 note:"Masculine noun. Black powder deposited by smoke.\nFrom chimneys and fires.",
 example:"A: La chimenea está llena de hollín.\nB: Hay que llamar al deshollinador antes del invierno.",
 exampleSrc:"A: The chimney is full of soot.\nB: We need to call the chimney sweep before winter.",
 funFact:"'Deshollinador' (chimney sweep) comes from des- + hollín. Traditional chimney sweeping is still practiced."},

{type:"teach",trg:"la crin",src:"the mane (of a horse)",pos:"noun",gender:"f",
 note:"Feminine noun. The long hair on a horse's neck.\nOften plural: las crines.",
 example:"A: El caballo tiene unas crines largas y brillantes.\nB: Lo cuidan muy bien en esa ganadería.",
 exampleSrc:"A: The horse has long, shiny manes.\nB: They take very good care of it at that ranch.",
 funFact:"In Spain, 'crines de caballo' were historically used to stuff mattresses and upholster furniture."},

{type:"teach",trg:"floreciente",src:"flourishing / thriving",pos:"adj",gender:null,
 note:"Adjective, same form m/f. Growing and developing successfully.\nFrom florecer (to flourish).",
 example:"A: La industria del vino es floreciente en La Rioja.\nB: Exportan a más de cien países.",
 exampleSrc:"A: The wine industry is flourishing in La Rioja.\nB: They export to more than a hundred countries.",
 funFact:"From flor (flower). A 'negocio floreciente' literally blooms like a flower."},

{type:"fb",s:"Los segadores cortaban el trigo con la {1} bajo el sol.",a:["hoz"],opts:["hoz","hacha","horquilla","crin"],hint:"A curved hand tool specifically designed for cutting grain crops.",sSrc:"The reapers cut the wheat with the {1} under the sun."},

{type:"teach",trg:"la alimaña",src:"the vermin / pest animal",pos:"noun",gender:"f",
 note:"Feminine noun. A harmful wild animal.\nAlso used as an insult for a despicable person.",
 example:"A: Las alimañas atacan a las gallinas por la noche.\nB: Hay que reforzar la cerca del corral.",
 exampleSrc:"A: Vermin attack the chickens at night.\nB: We need to reinforce the yard fence.",
 funFact:"Traditionally, 'alimaña' included foxes, weasels, and snakes. Now it's also a strong insult."},

{type:"teach",trg:"la alberca",src:"the water tank / swimming pool",pos:"noun",gender:"f",
 note:"Feminine noun. A reservoir or pool for irrigation.\nIn Mexico: swimming pool.",
 example:"A: La alberca almacena el agua de lluvia para el riego.\nB: Es un sistema que se usa desde los árabes.",
 exampleSrc:"A: The water tank stores rainwater for irrigation.\nB: It's a system that has been used since the Moors.",
 funFact:"From Arabic al-birka (the pool). Many Spanish agricultural terms come from Arabic due to Moorish influence."},

{type:"teach",trg:"el asta",src:"the flagpole / horn (of an animal) / shaft",pos:"noun",gender:"f",
 note:"Feminine noun with masculine article (el asta).\nThe horn of a bull, or a pole for flags.",
 example:"A: El toro embistió con las astas hacia delante.\nB: El torero esquivó el golpe por centímetros.",
 exampleSrc:"A: The bull charged with its horns forward.\nB: The bullfighter dodged the blow by centimeters.",
 funFact:"'A media asta' (at half-mast) is used when flags are lowered in mourning, a universal tradition."},

{type:"teach",trg:"la baba",src:"the drool / slime",pos:"noun",gender:"f",
 note:"Feminine noun. Saliva dripping from the mouth.\nAlso: slime from snails.",
 example:"A: Al bebé se le caía la baba con el juguete nuevo.\nB: Es normal cuando les están saliendo los dientes.",
 exampleSrc:"A: The baby was drooling over the new toy.\nB: It's normal when their teeth are coming in.",
 funFact:"'Se le cae la baba' (their drool is falling) means to be completely smitten or in awe of something."},

{type:"mc",q:"¿De qué idioma viene la palabra 'alberca'?",opts:["Del árabe","Del latín","Del francés","Del inglés"],ans:"Del árabe",hint:"Many Spanish words about water and agriculture came from the language spoken during the Moorish period."},

{type:"fb",s:"La industria del aceite de oliva es {1} en Jaén.",a:["floreciente"],opts:["floreciente","hotelero","hexagonal","feudal"],hint:"An adjective meaning thriving, growing successfully, like a blooming flower.",sSrc:"The olive oil industry is {1} in Jaén."},

{type:"match",pairs:[{trg:"carreta",src:"cart"},{trg:"hoz",src:"sickle"},{trg:"hacha",src:"axe"},{trg:"hollín",src:"soot"},{trg:"alimaña",src:"vermin"}]},

{type:"fb",s:"La {1} almacena el agua para regar los campos en verano.",a:["alberca"],opts:["alberca","carreta","horquilla","alimaña"],hint:"A water storage tank for irrigation, from the Arabic word for pool.",sSrc:"The {1} stores water to irrigate the fields in summer."},

{type:"mc",q:"¿Qué significa 'se le cae la baba'?",opts:["Estar encantado o admirado por algo","Estar muy enfadado","Tener mucha hambre","Sentirse triste"],ans:"Estar encantado o admirado por algo",hint:"Think about someone so impressed or in love that they literally drool."}
]};

export default LESSON_14;
