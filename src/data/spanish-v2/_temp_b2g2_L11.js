// B2 Gap2 Lesson 11 - Food & Cooking
const LESSON_11 = {id:"esv2_b2g2_l11",title:"Cocina y alimentos",icon:"🍳",xp:15,board:true,steps:[
{type:"intro",title:"Cocina y alimentos",desc:"Expand your culinary vocabulary with ingredients, cooking equipment, and food-related terms from Spanish kitchens.",goals:["Learn 20 food and cooking words","Describe ingredients and textures","Navigate food conversations with ease"]},

{type:"teach",trg:"el brécol",src:"the broccoli",pos:"noun",gender:"m",
 note:"Masculine noun. Broccoli. 'Brócoli' is the more common spelling.",
 example:"A: ¿Te gusta el brécol al vapor?\nB: Prefiero saltearlo con ajo y aceite de oliva.",
 exampleSrc:"A: Do you like steamed broccoli?\nB: I prefer to saute it with garlic and olive oil.",
 funFact:"Both 'brécol' and 'brócoli' are accepted by the RAE. Italy gave us the word from 'broccolo'."},

{type:"teach",trg:"la cebolleta",src:"the spring onion / chive",pos:"noun",gender:"f",
 note:"Feminine noun. A young, mild onion used as garnish.",
 example:"A: Añade cebolleta picada por encima de la tortilla.\nB: Le da un toque fresco y crujiente.",
 exampleSrc:"A: Add chopped spring onion on top of the tortilla.\nB: It gives it a fresh, crunchy touch.",
 funFact:"Diminutive of 'cebolla' (onion). Essential in Spanish 'ensaladilla rusa' and many tapas."},

{type:"teach",trg:"la bechamel",src:"the bechamel (sauce)",pos:"noun",gender:"f",
 note:"Feminine noun. A white sauce made from butter, flour, and milk.",
 example:"A: Las croquetas llevan una bechamel muy espesa.\nB: Ese es el secreto de unas buenas croquetas.",
 exampleSrc:"A: The croquettes have a very thick bechamel.\nB: That is the secret to good croquettes.",
 funFact:"Named after Louis de Béchameil. In Spain, 'croquetas de bechamel' are a beloved comfort food."},

{type:"teach",trg:"la costilla",src:"the rib / rib chop",pos:"noun",gender:"f",
 note:"Feminine noun. A bone of the rib cage, or a meat cut from that area.",
 example:"A: Las costillas a la barbacoa están deliciosas.\nB: Las he marinado toda la noche.",
 exampleSrc:"A: The barbecue ribs are delicious.\nB: I marinated them all night.",
 funFact:"In Spanish, Eve was made from Adam's 'costilla'. The joke 'mi costilla' means 'my wife'."},

{type:"teach",trg:"el cabrito",src:"the young goat / kid",pos:"noun",gender:"m",
 note:"Masculine noun. A baby goat, also a traditional roast dish.",
 example:"A: El cabrito asado es una especialidad de Castilla.\nB: Se cocina lentamente en horno de leña.",
 exampleSrc:"A: Roast kid goat is a specialty of Castile.\nB: It is cooked slowly in a wood-fired oven.",
 funFact:"In colloquial Spanish, 'cabrito' is also a mild insult meaning rascal or brat."},

{type:"mc",q:"¿Qué es la bechamel?",opts:["Una salsa blanca de mantequilla, harina y leche","Un tipo de queso francés","Una verdura verde","Un postre con chocolate"],ans:"Una salsa blanca de mantequilla, harina y leche",hint:"Think about the creamy white sauce that is the base for Spanish croquettes."},

{type:"teach",trg:"el chorro",src:"the stream / jet (of liquid)",pos:"noun",gender:"m",
 note:"Masculine noun. A strong flow of water or other liquid.",
 example:"A: Echa un buen chorro de aceite de oliva.\nB: En esta casa no escatimamos con el aceite.",
 exampleSrc:"A: Pour a good stream of olive oil.\nB: In this house we do not skimp on oil.",
 funFact:"'A chorros' means abundantly. 'Sudar a chorros' (to sweat buckets) is very colloquial."},

{type:"teach",trg:"el amasijo",src:"the dough / jumble",pos:"noun",gender:"m",
 note:"Masculine noun. A mixture of kneaded dough, or a messy jumble.",
 example:"A: El pan empieza como un amasijo de harina y agua.\nB: Luego la magia del horno hace el resto.",
 exampleSrc:"A: Bread starts as a dough of flour and water.\nB: Then the magic of the oven does the rest.",
 funFact:"From 'amasar' (to knead). Figuratively, 'un amasijo de cables' means a tangled mess of wires."},

{type:"teach",trg:"el azucarero",src:"the sugar bowl",pos:"noun",gender:"m",
 note:"Masculine noun. A container for sugar on the table.",
 example:"A: ¿Me pasas el azucarero, por favor?\nB: Toma, pero el médico dijo menos azúcar.",
 exampleSrc:"A: Can you pass me the sugar bowl, please?\nB: Here, but the doctor said less sugar.",
 funFact:"The suffix -ero often means container in Spanish: azucarero, salero (salt shaker), florero (vase)."},

{type:"teach",trg:"el acetato",src:"the acetate",pos:"noun",gender:"m",
 note:"Masculine noun. A synthetic material, or a chemical compound.",
 example:"A: Las láminas de acetato se usan para transparencias.\nB: También en la industria textil.",
 exampleSrc:"A: Acetate sheets are used for transparencies.\nB: Also in the textile industry.",
 funFact:"From Latin acetum (vinegar). Acetate is chemically derived from acetic acid, the acid in vinegar."},

{type:"teach",trg:"el carbonato",src:"the carbonate",pos:"noun",gender:"m",
 note:"Masculine noun. A chemical compound containing carbon and oxygen.",
 example:"A: El carbonato de sodio se usa para limpiar.\nB: Es un producto muy versátil en el hogar.",
 exampleSrc:"A: Sodium carbonate is used for cleaning.\nB: It is a very versatile household product.",
 funFact:"'Bicarbonato de sodio' (baking soda) is a Spanish kitchen staple, used for cooking and cleaning."},

{type:"fb",s:"Echa un buen {1} de aceite de oliva a la ensalada.",a:["chorro"],opts:["chorro","amasijo","carbonato","azucarero"],hint:"A word meaning a generous stream or jet of liquid poured from a bottle.",sSrc:"Pour a good {1} of olive oil on the salad."},

{type:"teach",trg:"el cuenco",src:"the bowl",pos:"noun",gender:"m",
 note:"Masculine noun. Already learned. Used here in a culinary context.",
 example:"A: Sirve el gazpacho en un cuenco frío.\nB: Así se mantiene fresco más tiempo.",
 exampleSrc:"A: Serve the gazpacho in a cold bowl.\nB: That way it stays fresh longer.",
 funFact:"Ceramic cuencos from Talavera are prized kitchen items in traditional Spanish homes."},

{type:"teach",trg:"el champiñón",src:"the mushroom",pos:"noun",gender:"m",
 note:"Masculine noun. Specifically the button mushroom (Agaricus bisporus).",
 example:"A: Pon champiñones laminados en la pizza.\nB: ¿Frescos o de lata?",
 exampleSrc:"A: Put sliced mushrooms on the pizza.\nB: Fresh or canned?",
 funFact:"From French 'champignon'. Spain grows millions of kilos of champiñones in La Rioja."},

{type:"teach",trg:"el bolillo",src:"the bread roll / bobbin",pos:"noun",gender:"m",
 note:"Masculine noun. A small, crusty bread roll.",
 example:"A: Compra unos bolillos para la cena.\nB: ¿Los quieres del día o los integrales?",
 exampleSrc:"A: Buy some bread rolls for dinner.\nB: Do you want today's or the whole wheat ones?",
 funFact:"In Mexico, 'bolillo' is the standard word for a bread roll. In Spain, 'bollo' is more common."},

{type:"teach",trg:"la chocolatería",src:"the chocolate shop / cafe",pos:"noun",gender:"f",
 note:"Feminine noun. A shop or cafe specializing in chocolate.",
 example:"A: Esta chocolatería lleva abierta desde 1895.\nB: Su chocolate con churros es legendario.",
 exampleSrc:"A: This chocolate shop has been open since 1895.\nB: Their hot chocolate with churros is legendary.",
 funFact:"San Ginés in Madrid is Spain's most famous chocolatería, open since 1894."},

{type:"mc",q:"¿Qué es un champiñón?",opts:["Un utensilio de cocina","Un tipo de seta comestible","Una especia aromática","Un trozo de pan"],ans:"Un tipo de seta comestible",hint:"Think about the common white button mushroom used on pizza and in many dishes."},

{type:"teach",trg:"el amoníaco",src:"the ammonia",pos:"noun",gender:"m",
 note:"Masculine noun. A pungent chemical used in cleaning products.",
 example:"A: El olor a amoníaco es muy fuerte en este producto.\nB: Abre las ventanas antes de usarlo.",
 exampleSrc:"A: The ammonia smell is very strong in this product.\nB: Open the windows before using it.",
 funFact:"Named after the Egyptian god Amun. Ancient Egyptians found ammonium salts near his temple."},

{type:"teach",trg:"la cuchillada",src:"the knife wound / slash",pos:"noun",gender:"f",
 note:"Feminine noun. A wound made by a knife.",
 example:"A: La víctima recibió varias cuchilladas.\nB: Afortunadamente, ninguna fue mortal.",
 exampleSrc:"A: The victim received several stab wounds.\nB: Fortunately, none was fatal.",
 funFact:"From 'cuchillo' (knife). In Golden Age literature, 'cuchilladas' were common in honor duels."},

{type:"teach",trg:"el bautismo",src:"the baptism",pos:"noun",gender:"m",
 note:"Masculine noun. A religious ceremony or a first experience.",
 example:"A: El bautismo del bebé será el domingo.\nB: Toda la familia va a la celebración.",
 exampleSrc:"A: The baby's baptism will be on Sunday.\nB: The whole family is going to the celebration.",
 funFact:"'Bautismo de fuego' (baptism of fire) means a first difficult experience. Used in many contexts."},

{type:"teach",trg:"la base",src:"the base / basis",pos:"noun",gender:"f",
 note:"Feminine noun. The foundation or starting point of something.",
 example:"A: La base de una buena salsa es un buen sofrito.\nB: Cebolla, tomate y ajo, eso es lo esencial.",
 exampleSrc:"A: The base of a good sauce is a good sofrito.\nB: Onion, tomato, and garlic, that is essential.",
 funFact:"'A base de' means 'based on'. 'A base de bien' is colloquial for 'a lot': 'comimos a base de bien'."},

{type:"fb",s:"Esta {1} lleva abierta desde el siglo diecinueve.",a:["chocolatería"],opts:["chocolatería","cebolleta","bechamel","costilla"],hint:"A shop or cafe that specializes in chocolate drinks and treats.",sSrc:"This {1} has been open since the nineteenth century."},

{type:"match",pairs:[{trg:"champiñón",src:"mushroom"},{trg:"cebolleta",src:"spring onion"},{trg:"bechamel",src:"bechamel sauce"},{trg:"costilla",src:"rib"},{trg:"chorro",src:"stream/jet"}]}
]};

export default LESSON_11;
