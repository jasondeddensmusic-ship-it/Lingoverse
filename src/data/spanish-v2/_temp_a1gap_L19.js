// L19: Cooking & Food Culture — Spanish culinary traditions
const LESSON_19 = {
  id:"esv2_a1gap_l19", title:"Cocina española", icon:"\u{1F372}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Cocina española",
     desc:"Dive deeper into Spanish food culture. From tapas to market shopping, cook up your vocabulary.",
     goals:["Learn 20 more food and cooking words","Talk about Spanish food traditions","Describe recipes and flavors"]},

    {type:"teach", trg:"la anchoa", src:"the anchovy", pos:"noun", gender:"f",
     note:"Feminine noun. Anchoas en aceite = anchovies in oil.\nPopular tapa in northern Spain.",
     example:"A: \u00bfQuieres anchoas?\nB: Sí, me encantan con pan.",
     exampleSrc:"A: Do you want anchovies?\nB: Yes, I love them with bread.",
     funFact:"From Greek 'aphye'. Cantabria in northern Spain is famous for its premium anchoas. They are a delicacy, not a pizza topping joke."},

    {type:"teach", trg:"la arepa", src:"the arepa (corn cake)", pos:"noun", gender:"f",
     note:"Feminine noun. Venezuelan/Colombian staple food.\nMade from ground maize dough.",
     example:"A: Las arepas venezolanas son deliciosas.\nB: \u00bfCon qué las rellenan?",
     exampleSrc:"A: Venezuelan arepas are delicious.\nB: What do they fill them with?",
     funFact:"From the Cumanagoto indigenous language. Arepas are as fundamental to Venezuela and Colombia as bread is to Spain."},

    {type:"teach", trg:"el aperitivo", src:"the appetizer, aperitif", pos:"noun", gender:"m",
     note:"Masculine noun. Tomar el aperitivo = to have pre-meal drinks.\nSocial ritual before lunch.",
     example:"A: \u00bfTomamos el aperitivo?\nB: Sí, unas aceitunas y una caña.",
     exampleSrc:"A: Shall we have an aperitif?\nB: Yes, some olives and a small beer.",
     funFact:"The aperitivo is sacred in Spain. Before Sunday lunch, families often go to a bar for olives, croquetas, and small beers."},

    {type:"teach", trg:"el ají", src:"the chili pepper", pos:"noun", gender:"m",
     note:"Masculine noun. Latin American word for chili.\nIn Spain: guindilla or pimiento picante.",
     example:"A: Este ají está muy picante.\nB: Ten cuidado.",
     exampleSrc:"A: This chili pepper is very spicy.\nB: Be careful.",
     funFact:"From Taíno 'ají'. One of the first American food words to enter Spanish. In South America, 'ají' is the standard word for chili."},

    {type:"teach", trg:"la baya", src:"the berry", pos:"noun", gender:"f",
     note:"Feminine noun. Bayas del bosque = forest berries.\nBotanical term.",
     example:"A: Recogimos bayas en el bosque.\nB: \u00bfFrambuesas?\nA: Sí, y moras.",
     exampleSrc:"A: We picked berries in the forest.\nB: Raspberries?\nA: Yes, and blackberries.",
     funFact:"From French 'baie'. In everyday Spanish, people usually name specific berries: fresa (strawberry), mora (blackberry), arándano (blueberry)."},

    {type:"teach", trg:"la batería", src:"the set of pots, battery", pos:"noun", gender:"f",
     note:"Feminine noun. Batería de cocina = set of cooking pots.\nAlso: battery, drums.",
     example:"A: Necesito una batería de cocina nueva.\nB: \u00bfDe acero inoxidable?",
     exampleSrc:"A: I need a new set of cooking pots.\nB: Stainless steel?",
     funFact:"Three meanings: drums (music), battery (electricity), and cookware set (kitchen). All from the French 'batterie' (collection of beating things)."},

    {type:"mc",
     q:"\u00bfQué es el aperitivo en España?",
     opts:["Pre-meal drinks and snacks","The main course","Dessert","Breakfast"],
     ans:"Pre-meal drinks and snacks",
     hint:"This is a social ritual, usually before Sunday lunch, involving small dishes and drinks at a bar."},

    {type:"teach", trg:"la alimentación", src:"diet, nutrition", pos:"noun", gender:"f",
     note:"Feminine noun. Alimentación equilibrada = balanced diet.\nAlso: grocery section.",
     example:"A: Es importante tener buena alimentación.\nB: Sí, frutas y verduras cada día.",
     exampleSrc:"A: It is important to have good nutrition.\nB: Yes, fruits and vegetables every day.",
     funFact:"In supermarkets, 'alimentación' is the grocery section. 'Tienda de alimentación' is the generic name for a grocery shop."},

    {type:"teach", trg:"la alubia", src:"the bean", pos:"noun", gender:"f",
     note:"Feminine noun. Alubias blancas = white beans.\nKey ingredient in Spanish stews.",
     example:"A: La fabada lleva alubias blancas.\nB: Y chorizo y morcilla.",
     exampleSrc:"A: Fabada has white beans.\nB: And chorizo and blood sausage.",
     funFact:"From Arabic 'al-lubiya'. Fabada asturiana, made with alubias, is one of Spain's most beloved winter dishes."},

    {type:"teach", trg:"el alimento", src:"food product, nutrient", pos:"noun", gender:"m",
     note:"Masculine noun. Alimentos frescos = fresh foods.\nFormal register.",
     example:"A: Los alimentos frescos son mejores.\nB: Sí, evito los procesados.",
     exampleSrc:"A: Fresh foods are better.\nB: Yes, I avoid processed ones.",
     funFact:"In nutrition labels, you see 'información alimentaria' (nutrition information). 'Alimento' is the technical food term."},

    {type:"teach", trg:"el aguacate", src:"the avocado", pos:"noun", gender:"m",
     note:"Masculine noun. Pan con aguacate = avocado toast.\nOriginally Mexican fruit.",
     example:"A: El aguacate está de moda.\nB: Sí, lo ponen en todo.",
     exampleSrc:"A: Avocado is trendy.\nB: Yes, they put it on everything.",
     funFact:"Spain is the only European country that grows avocados commercially, in Málaga and the Canary Islands."},

    {type:"fb",
     s:"La fabada asturiana se hace con {1} blancas, chorizo y morcilla.",
     a:["alubias"],
     opts:["alubias","anchoas","almendras","arepas"],
     hint:"These are the white legumes that form the base of this famous Asturian stew.",
     sSrc:"Asturian fabada is made with white {1}, chorizo, and blood sausage."},

    {type:"teach", trg:"apetecer", src:"to feel like, to fancy", pos:"verb", gender:null,
     note:"Irregular verb (c > zc). Me apetece = I feel like.\nVery common in Spain.",
     example:"A: \u00bfTe apetece un café?\nB: Sí, me apetece mucho.",
     exampleSrc:"A: Do you fancy a coffee?\nB: Yes, I would love one.",
     funFact:"'Me apetece' is quintessentially Spanish. In Latin America, 'me provoca' or 'se me antoja' are used instead."},

    {type:"teach", trg:"añadir", src:"to add (ingredient)", pos:"verb", gender:null,
     note:"Regular -ir verb. Añadir sal = add salt.\nAñadir a la mezcla = add to the mixture.",
     example:"A: Añade dos huevos a la mezcla.\nB: \u00bfBatidos?\nA: Sí.",
     exampleSrc:"A: Add two eggs to the mixture.\nB: Beaten?\nA: Yes.",
     funFact:"Essential cooking verb. Spanish recipes use 'añadir', 'agregar', or 'incorporar' for adding ingredients, each slightly different in nuance."},

    {type:"teach", trg:"el alcohol", src:"alcohol", pos:"noun", gender:"m",
     note:"Masculine noun. Bebida sin alcohol = non-alcoholic drink.\nFrom Arabic 'al-kuhl'.",
     example:"A: No bebo alcohol.\nB: \u00bfQuieres un zumo?",
     exampleSrc:"A: I don't drink alcohol.\nB: Do you want a juice?",
     funFact:"From Arabic 'al-kuhl' (fine metallic powder, then distilled substance). Another daily word with Arabic roots."},

    {type:"teach", trg:"el azahar", src:"orange blossom", pos:"noun", gender:"m",
     note:"Masculine noun. Agua de azahar = orange blossom water.\nUsed in pastries.",
     example:"A: Este dulce lleva agua de azahar.\nB: Por eso huele tan bien.",
     exampleSrc:"A: This sweet has orange blossom water.\nB: That's why it smells so good.",
     funFact:"From Arabic 'az-zahr' (flower). Seville's streets are lined with bitter orange trees whose azahar perfumes the spring air."},

    {type:"mc",
     q:"\u00bfQué significa '\u00bfTe apetece un café?'",
     opts:["Do you fancy a coffee?","Do you make coffee?","Do you have coffee?","Do you sell coffee?"],
     ans:"Do you fancy a coffee?",
     hint:"This verb expresses a desire or craving for something. Very common when offering food or drinks."},

    {type:"teach", trg:"el aceite de oliva", src:"olive oil", pos:"noun", gender:"m",
     note:"Masculine noun phrase. Aceite de oliva virgen extra = extra virgin olive oil.\nSpanish liquid gold.",
     example:"A: Siempre cocino con aceite de oliva.\nB: Es lo más sano.",
     exampleSrc:"A: I always cook with olive oil.\nB: It is the healthiest.",
     funFact:"Spain produces over 1.5 million tons of olive oil annually, almost half the world's total. It is the foundation of Spanish cooking."},

    {type:"teach", trg:"la bodega", src:"winery, wine shop", pos:"noun", gender:"f",
     note:"Feminine noun. Bodega familiar = family winery.\nVisitar bodegas = wine tourism.",
     example:"A: Vamos a visitar una bodega en La Rioja.\nB: Vamos a probar vino.",
     exampleSrc:"A: We are going to visit a winery in La Rioja.\nB: We are going to try wine.",
     funFact:"Spain has more land under vine cultivation than any other country. La Rioja, Ribera del Duero, and Priorat are world-famous wine regions."},

    {type:"match", pairs:[
      {trg:"anchoa", src:"anchovy"},
      {trg:"arepa", src:"corn cake"},
      {trg:"ají", src:"chili pepper"},
      {trg:"azahar", src:"orange blossom"},
      {trg:"alcohol", src:"alcohol"}
    ]},

    {type:"fb",
     s:"\u00bfTe {1} ir a tomar algo después del trabajo?",
     a:["apetece"],
     opts:["apetece","aperitivo","añade","alimenta"],
     hint:"This verb means 'to feel like' or 'to fancy'. Very common when suggesting activities in Spain.",
     sSrc:"Do you {1} going for a drink after work?"},
  ]
};
export default LESSON_19;
