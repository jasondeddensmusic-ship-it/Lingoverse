// B2 Gap Batch 4 Lesson 16 - Food & Household
const LESSON_16 = {id:"esv2_b2g4_l16",title:"Hogar y alimentación",icon:"🍲",xp:15,board:true,steps:[
{type:"intro",title:"Hogar y alimentación",desc:"Master advanced vocabulary for food preparation, household items, and daily domestic life.",goals:["Learn 18 food and household terms","Describe cooking and home activities","Use domestic vocabulary with confidence"]},

{type:"teach",trg:"el cucharón",src:"the ladle",pos:"noun",gender:"m",
 note:"Masculine noun. A large spoon for serving soup.\nAugmentative of cuchara (spoon).",
 example:"A: Pásame el cucharón para servir la sopa.\nB: Está en el cajón de la derecha.",
 exampleSrc:"A: Pass me the ladle to serve the soup.\nB: It is in the drawer on the right.",
 funFact:"The -ón suffix makes things bigger in Spanish: cuchara > cucharón, taza > tazón."},

{type:"teach",trg:"el bolillo",src:"the bread roll / bobbin",pos:"noun",gender:"m",
 note:"Masculine noun. A small bread roll (Mexico) or a sewing bobbin.\nRegional variation.",
 example:"A: En México, los bolillos son el pan más popular.\nB: Son muy buenos con mantequilla.",
 exampleSrc:"A: In Mexico, bolillos are the most popular bread.\nB: They are very good with butter.",
 funFact:"In Spain, this bread is called 'pistola' or 'barra'. 'Bolillo' is distinctly Mexican."},

{type:"teach",trg:"el brócoli",src:"the broccoli",pos:"noun",gender:"m",
 note:"Masculine noun. A green vegetable.\nAlso spelled: brécol (more traditional).",
 example:"A: El brócoli al vapor es muy nutritivo.\nB: A los niños les gusta más gratinado con queso.",
 exampleSrc:"A: Steamed broccoli is very nutritious.\nB: Children prefer it baked with cheese.",
 funFact:"Spain is one of Europe's top broccoli producers. Murcia grows most of the country's supply."},

{type:"teach",trg:"el cabrito",src:"the kid (young goat)",pos:"noun",gender:"m",
 note:"Masculine noun. A young goat, typically for cooking.\nDiminutive of cabra (goat).",
 example:"A: El cabrito asado es un plato típico del norte de España.\nB: Se cocina lentamente en horno de leña.",
 exampleSrc:"A: Roast kid goat is a typical dish from northern Spain.\nB: It is cooked slowly in a wood-fired oven.",
 funFact:"'Cabrito' is a delicacy in Castilla y León. In Mexico, Monterrey is famous for its 'cabrito al pastor'."},

{type:"teach",trg:"la caneca",src:"the trash can / bottle (regional)",pos:"noun",gender:"f",
 note:"Feminine noun. A container for waste (Colombia) or a bottle.\nRegional usage varies.",
 example:"A: Tira la basura en la caneca, por favor.\nB: ¿En cuál? ¿La de reciclaje o la normal?",
 exampleSrc:"A: Throw the trash in the bin, please.\nB: Which one? The recycling one or the regular one?",
 funFact:"In Colombia, 'caneca' is the standard word for trash can. In Spain, they say 'cubo de basura'."},

{type:"mc",q:"Un 'cucharón' se usa principalmente para:",opts:["Servir sopa o guiso","Cortar verduras","Batir huevos","Pelar patatas"],ans:"Servir sopa o guiso",hint:"Think about a large spoon designed for ladling liquid food from a pot."},

{type:"teach",trg:"la cajetilla",src:"the cigarette pack",pos:"noun",gender:"f",
 note:"Feminine noun. A small packet of cigarettes.\nDiminutive of cajeta (small box).",
 example:"A: Una cajetilla de tabaco cuesta más de seis euros en España.\nB: Los impuestos han subido mucho.",
 exampleSrc:"A: A cigarette pack costs more than six euros in Spain.\nB: Taxes have gone up a lot.",
 funFact:"Spain banned smoking indoors in 2011. Before that, every bar had ashtrays on every table."},

{type:"teach",trg:"el carbonato",src:"the carbonate",pos:"noun",gender:"m",
 note:"Masculine noun. A chemical compound containing CO3.\nCommon: carbonato de sodio (baking soda).",
 example:"A: El carbonato de sodio se usa para limpiar el hogar.\nB: Es un producto natural muy efectivo.",
 exampleSrc:"A: Sodium carbonate is used for cleaning the home.\nB: It is a very effective natural product.",
 funFact:"'Bicarbonato' (baking soda) is a staple in Spanish kitchens for both cooking and cleaning."},

{type:"teach",trg:"el amoníaco",src:"the ammonia",pos:"noun",gender:"m",
 note:"Masculine noun. A strong-smelling chemical used in cleaning.\nWritten with accent on the 'í'.",
 example:"A: El amoníaco es muy eficaz para limpiar cristales.\nB: Pero hay que usarlo con guantes y ventilación.",
 exampleSrc:"A: Ammonia is very effective for cleaning glass.\nB: But you must use it with gloves and ventilation.",
 funFact:"Named after the Egyptian god Amun. Salt deposits near his temple produced ammonium chloride."},

{type:"teach",trg:"la calza",src:"the stocking / wedge",pos:"noun",gender:"f",
 note:"Feminine noun. Historical: a type of hosiery. Modern: a wedge to stop movement.\nPlural: calzas.",
 example:"A: Las calzas eran una prenda típica del Renacimiento.\nB: Los nobles las llevaban con colores vivos.",
 exampleSrc:"A: Stockings were a typical garment of the Renaissance.\nB: Nobles wore them in bright colors.",
 funFact:"From Latin calceus (shoe). Modern 'calzar' (to put on shoes) comes from the same root."},

{type:"fb",s:"Pásame el {1} para servir el caldo.",a:["cucharón"],opts:["cucharón","carbonato","cabrito","bolillo"],hint:"The large spoon used to scoop liquid foods out of a big pot.",sSrc:"Pass me the {1} to serve the broth."},

{type:"teach",trg:"la bofetada",src:"the slap (in the face)",pos:"noun",gender:"f",
 note:"Feminine noun. A sharp blow with the open hand.\nSynonym: una torta, un cachete.",
 example:"A: Le dio una bofetada delante de todos.\nB: Fue un escándalo en la fiesta.",
 exampleSrc:"A: She slapped him in front of everyone.\nB: It was a scandal at the party.",
 funFact:"'Bofetada de realidad' is the Spanish equivalent of 'a reality check' or 'a wake-up call'."},

{type:"teach",trg:"el cadáver",src:"the corpse / dead body",pos:"noun",gender:"m",
 note:"Masculine noun. A dead human body.\nFormal. Colloquial: el muerto.",
 example:"A: La policía encontró el cadáver en las afueras de la ciudad.\nB: La investigación acaba de comenzar.",
 exampleSrc:"A: The police found the corpse on the outskirts of the city.\nB: The investigation has just begun.",
 funFact:"In forensic Spanish, 'cadáver' is always formal. The Latin phrase 'habeas corpus' shares the root."},

{type:"teach",trg:"el despertador",src:"the alarm clock",pos:"noun",gender:"m",
 note:"Masculine noun. A device that wakes you up.\nFrom despertar (to wake up).",
 example:"A: He puesto el despertador a las seis de la mañana.\nB: Yo prefiero usar el del móvil.",
 exampleSrc:"A: I have set the alarm clock for six in the morning.\nB: I prefer to use the one on my phone.",
 funFact:"Despite smartphones, many Spaniards still use the word 'despertador' for their phone alarm."},

{type:"teach",trg:"endulzar",src:"to sweeten",pos:"verb",gender:null,
 note:"Regular -ar verb (z>c before e). From dulce (sweet).\nFigurative: endulzar la vida.",
 example:"A: Prefiero endulzar el café con miel en vez de azúcar.\nB: La miel le da un sabor especial.",
 exampleSrc:"A: I prefer to sweeten my coffee with honey instead of sugar.\nB: Honey gives it a special flavor.",
 funFact:"'Endulzar la píldora' (to sugar the pill) means to make bad news easier to accept."},

{type:"mc",q:"El 'amoníaco' se usa comúnmente para:",opts:["Limpiar superficies del hogar","Cocinar pescado","Regar las plantas","Decorar paredes"],ans:"Limpiar superficies del hogar",hint:"Think about a strong chemical commonly found under kitchen sinks for cleaning."},

{type:"fb",s:"Prefiero {1} el té con miel en vez de azúcar.",a:["endulzar"],opts:["endulzar","enlosar","enmascarar","enmarcar"],hint:"To add sweetness to a drink or food.",sSrc:"I prefer to {1} the tea with honey instead of sugar."},

{type:"match",pairs:[{trg:"cucharón",src:"ladle"},{trg:"cabrito",src:"kid goat"},{trg:"cajetilla",src:"cigarette pack"},{trg:"despertador",src:"alarm clock"},{trg:"bofetada",src:"slap"}]}
]};

export default LESSON_16;
