// B2 Gap Batch C Lesson 16 - Food Industry & Markets
const LESSON_16 = {id:"esv2_b2gC_l16",title:"Industria alimentaria y mercados",icon:"🏪",xp:15,board:true,steps:[
{type:"intro",title:"Industria alimentaria y mercados",desc:"Learn vocabulary for the food industry, traditional markets, and food production in Spain.",goals:["Learn 12 words about food industry and markets","Discuss food production and traditional commerce","Use culinary and commercial vocabulary"]},

{type:"teach",trg:"la cola de caballo",src:"the ponytail / horsetail (plant)",pos:"noun",gender:"f",
 note:"Feminine compound noun. A hairstyle or a medicinal plant.\nLiterally: horse's tail.",
 example:"A: Se recogió el pelo en una cola de caballo para cocinar.\nB: Es lo más práctico cuando trabajas en la cocina.",
 exampleSrc:"A: She put her hair in a ponytail to cook.\nB: It's the most practical thing when you work in the kitchen.",
 funFact:"Cola de caballo tea is a popular herbal remedy in Spain, believed to strengthen nails and hair."},

{type:"teach",trg:"el bolillo",src:"the bobbin (for lace) / bread roll",pos:"noun",gender:"m",
 note:"Masculine noun. A wooden spool for making lace.\nIn Mexico, a type of crusty bread roll.",
 example:"A: El encaje de bolillos es una artesanía tradicional española.\nB: Requiere mucha paciencia y habilidad manual.",
 exampleSrc:"A: Bobbin lace is a traditional Spanish craft.\nB: It requires a lot of patience and manual skill.",
 funFact:"The expression 'esto no es encaje de bolillos' means something is not as difficult as it seems."},

{type:"teach",trg:"el chanquete",src:"the transparent goby (small fish)",pos:"noun",gender:"m",
 note:"Masculine noun. A tiny fish once popular in Andalusia.\nNow protected by law.",
 example:"A: Los chanquetes fritos eran un manjar en la costa andaluza.\nB: Ahora está prohibido pescarlos por la sobreexplotación.",
 exampleSrc:"A: Fried chanquetes were a delicacy on the Andalusian coast.\nB: Now it's forbidden to fish them due to overfishing.",
 funFact:"Chanquete is also the name of a beloved character in the classic Spanish TV series 'Verano Azul'."},

{type:"teach",trg:"la marqueta",src:"the block (of chocolate/ice) / bar",pos:"noun",gender:"f",
 note:"Feminine noun. A solid block of a substance.\nCommon for chocolate and ice.",
 example:"A: Compra una marqueta de chocolate para el bizcocho.\nB: ¿De chocolate negro o con leche?",
 exampleSrc:"A: Buy a block of chocolate for the cake.\nB: Dark chocolate or milk chocolate?",
 funFact:"In some Latin American countries, 'marqueta' also refers to a block of raw sugar or ice."},

{type:"mc",q:"¿Por qué está prohibido pescar chanquetes en España?",opts:["Por la sobreexplotación de la especie","Porque son venenosos","Porque son demasiado grandes","Porque viven en agua dulce"],ans:"Por la sobreexplotación de la especie",hint:"This tiny fish was caught in such large numbers that the species needed legal protection."},

{type:"teach",trg:"el langostino",src:"the king prawn / langoustine",pos:"noun",gender:"m",
 note:"Masculine noun. A large prawn popular in Spanish cuisine.\nAugmentative of langosta.",
 example:"A: Los langostinos a la plancha son mi plato favorito.\nB: Con un poco de ajo y perejil, están perfectos.",
 exampleSrc:"A: Grilled king prawns are my favorite dish.\nB: With a bit of garlic and parsley, they're perfect.",
 funFact:"Langostinos are essential in Spanish Christmas dinners. Prices can triple in December."},

{type:"teach",trg:"el paredón",src:"the thick wall / execution wall",pos:"noun",gender:"m",
 note:"Masculine noun. A large, thick wall.\nHistorically: the wall where prisoners were shot.",
 example:"A: El antiguo paredón del castillo tiene tres metros de grosor.\nB: Fue construido para resistir los ataques con catapultas.",
 exampleSrc:"A: The old castle wall is three meters thick.\nB: It was built to withstand catapult attacks.",
 funFact:"The phrase 'llevar al paredón' (to take to the wall) is a euphemism for execution by firing squad."},

{type:"teach",trg:"la palomera",src:"the popcorn seller / dovecote area",pos:"noun",gender:"f",
 note:"Feminine noun. A person who sells popcorn.\nAlso related to paloma (dove).",
 example:"A: La palomera del cine siempre tiene mucha cola.\nB: Es que las palomitas son lo mejor de ir al cine.",
 exampleSrc:"A: The popcorn stand at the cinema always has a long line.\nB: Popcorn is the best part of going to the movies.",
 funFact:"Spanish 'palomitas' (popcorn) literally means 'little doves' because popped kernels look like tiny white birds."},

{type:"fb",s:"Los {1} a la plancha son mi plato favorito en Navidad.",a:["langostinos"],opts:["langostinos","chanquetes","bolillos","paredones"],hint:"Large prawns that are a staple of Spanish Christmas dinners.",sSrc:"Grilled {1} are my favorite dish at Christmas."},

{type:"teach",trg:"el infierno",src:"the hell / inferno",pos:"noun",gender:"m",
 note:"Masculine noun. The underworld or a terrible situation.\nFrom Latin infernum (below).",
 example:"A: El tráfico de Madrid en hora punta es un infierno.\nB: Por eso prefiero usar el metro.",
 exampleSrc:"A: Madrid traffic during rush hour is hell.\nB: That's why I prefer to use the metro.",
 funFact:"Dante's 'Inferno' is 'El Infierno' in Spanish. The word is used constantly in everyday complaints."},

{type:"teach",trg:"el escaque",src:"the square (on a chessboard)",pos:"noun",gender:"m",
 note:"Masculine noun. One square of a chess or checkers board.\nAlso a heraldic pattern.",
 example:"A: El ajedrez tiene sesenta y cuatro escaques.\nB: La mitad son blancos y la mitad negros.",
 exampleSrc:"A: A chessboard has sixty-four squares.\nB: Half are white and half are black.",
 funFact:"From Arabic ash-shaq (a portion). 'Escaquearse' (to dodge responsibility) comes from the same root."},

{type:"teach",trg:"la cólera",src:"the cholera / rage",pos:"noun",gender:"f",
 note:"Feminine noun. A deadly disease or intense anger.\nMasculine 'el cólera' for the disease.",
 example:"A: El cólera fue una epidemia terrible en el siglo XIX.\nB: La falta de agua potable favorecía su propagación.",
 exampleSrc:"A: Cholera was a terrible epidemic in the 19th century.\nB: The lack of clean water favored its spread.",
 funFact:"Note the gender switch: 'el cólera' is the disease, 'la cólera' is fury. Same word, different meanings."},

{type:"mc",q:"¿Cuántos escaques tiene un tablero de ajedrez?",opts:["Sesenta y cuatro","Treinta y dos","Cuarenta y ocho","Ochenta y uno"],ans:"Sesenta y cuatro",hint:"The standard chess board has an 8 by 8 grid of alternating black and white squares."},

{type:"fb",s:"El tráfico de Madrid en hora punta es un {1}.",a:["infierno"],opts:["infierno","escaque","paredón","chanquete"],hint:"A word for the underworld, used figuratively for any terrible, unbearable situation.",sSrc:"Madrid traffic during rush hour is {1}."},

{type:"match",pairs:[{trg:"langostino",src:"king prawn"},{trg:"chanquete",src:"transparent goby"},{trg:"escaque",src:"chessboard square"},{trg:"infierno",src:"hell"},{trg:"paredón",src:"thick wall"}]},

{type:"fb",s:"El encaje de {1} es una artesanía tradicional muy valorada.",a:["bolillos"],opts:["bolillos","langostinos","escaques","marquetas"],hint:"Wooden spools used in the traditional craft of making lace by hand.",sSrc:"{1} lace is a highly valued traditional craft."}
]};

export default LESSON_16;
