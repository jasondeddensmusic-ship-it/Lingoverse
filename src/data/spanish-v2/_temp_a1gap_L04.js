// L04: Food & Kitchen. Essential food vocabulary
const LESSON_4 = {
  id:"esv2_a1gap_l4", title:"En la cocina", icon:"\u{1F373}", xp:15, board:true,
  steps:[
    {type:"intro", title:"En la cocina",
     desc:"Learn essential food and kitchen vocabulary. From olive oil to rice, discover the staples of Spanish cuisine.",
     goals:["Learn 20 food and cooking words","Talk about Spanish foods","Use food vocabulary in simple sentences"]},

    {type:"teach", trg:"el aceite", src:"the oil", pos:"noun", gender:"m",
     note:"Masculine noun. Aceite de oliva = olive oil.\nSpain is the world's largest olive oil producer.",
     example:"A: \u00bfTienes aceite de oliva?\nB: Sí, está en la cocina.",
     exampleSrc:"A: Do you have olive oil?\nB: Yes, it is in the kitchen.",
     funFact:"From Arabic 'az-zayt' (the oil). Spain produces almost half of the world's olive oil."},

    {type:"teach", trg:"la aceituna", src:"the olive", pos:"noun", gender:"f",
     note:"Feminine noun. From the same Arabic root as aceite.\nTapas staple in Spain.",
     example:"A: \u00bfQuieres aceitunas?\nB: Sí, me encantan las aceitunas verdes.",
     exampleSrc:"A: Do you want olives?\nB: Yes, I love green olives.",
     funFact:"From Arabic 'az-zaytuna' (the olive). Spain has over 300 million olive trees, the most in the world."},

    {type:"teach", trg:"el ajo", src:"the garlic", pos:"noun", gender:"m",
     note:"Masculine noun. Diente de ajo = clove of garlic.\nEssential in Spanish cooking.",
     example:"A: Esta salsa lleva mucho ajo.\nB: A mí me gusta el ajo.",
     exampleSrc:"A: This sauce has a lot of garlic.\nB: I like garlic.",
     funFact:"From Latin 'alium'. Garlic is so central to Spanish cuisine that 'ajillo' (with garlic) is a whole cooking style: gambas al ajillo."},

    {type:"teach", trg:"el arroz", src:"the rice", pos:"noun", gender:"m",
     note:"Masculine noun. Arroz con leche = rice pudding.\nKey ingredient in paella.",
     example:"A: \u00bfComemos arroz?\nB: Sí, voy a hacer una paella.",
     exampleSrc:"A: Shall we eat rice?\nB: Yes, I am going to make a paella.",
     funFact:"From Arabic 'ar-ruzz'. Rice came to Spain via the Moors and became central to Valencia's famous paella."},

    {type:"teach", trg:"el atún", src:"the tuna", pos:"noun", gender:"m",
     note:"Masculine noun. Atún en lata = canned tuna.\nSpain is a major tuna fishing nation.",
     example:"A: Quiero un bocadillo de atún.\nB: Con tomate y aceite.",
     exampleSrc:"A: I want a tuna sandwich.\nB: With tomato and oil.",
     funFact:"From Arabic 'at-tun'. The bluefin tuna catch ('almadraba') off Cádiz is a centuries-old tradition."},

    {type:"teach", trg:"el azúcar", src:"the sugar", pos:"noun", gender:"m",
     note:"Masculine noun (sometimes feminine in some regions).\nAzúcar moreno = brown sugar.",
     example:"A: \u00bfCon azúcar?\nB: Sí, dos cucharadas, por favor.",
     exampleSrc:"A: With sugar?\nB: Yes, two spoonfuls, please.",
     funFact:"From Arabic 'as-sukkar', itself from Sanskrit 'sharkara'. The word traveled from India through Persia and Arabia to Spain."},

    {type:"mc",
     q:"\u00bfQué ingrediente es esencial en la paella?",
     opts:["el arroz","el azúcar","el atún","el ajo"],
     ans:"el arroz",
     hint:"This grain is the base of Spain's most famous dish from Valencia."},

    {type:"teach", trg:"el aguacate", src:"the avocado", pos:"noun", gender:"m",
     note:"Masculine noun. Guacamole is made from aguacate.\nOriginally a Mexican fruit.",
     example:"A: Me gusta el aguacate.\nB: Es muy sano.",
     exampleSrc:"A: I like avocado.\nB: It is very healthy.",
     funFact:"From Nahuatl 'ahuacatl'. The Aztec word entered Spanish during the conquest of Mexico in the 1500s."},

    {type:"teach", trg:"el bacalao", src:"the cod", pos:"noun", gender:"m",
     note:"Masculine noun. Bacalao en salazón = salted cod.\nTraditional in Spanish cuisine.",
     example:"A: Hoy comemos bacalao.\nB: \u00bfCon patatas?\nA: Sí, al horno.",
     exampleSrc:"A: Today we eat cod.\nB: With potatoes?\nA: Yes, baked.",
     funFact:"Salted cod was essential for Catholic Spain during Lent, when meat was forbidden. Still popular today."},

    {type:"teach", trg:"la bebida", src:"the drink, beverage", pos:"noun", gender:"f",
     note:"Feminine noun. From beber (to drink).\nBebida fría = cold drink.",
     example:"A: \u00bfQué bebida quieres?\nB: Un zumo de naranja, por favor.",
     exampleSrc:"A: What drink do you want?\nB: An orange juice, please.",
     funFact:"From 'beber' (to drink), from Latin 'bibere'. English 'beverage' comes from the same Latin root through French."},

    {type:"teach", trg:"el bocadillo", src:"the sandwich (on baguette)", pos:"noun", gender:"m",
     note:"Masculine noun. Made with bread roll, not sliced bread.\nBocata = informal word.",
     example:"A: \u00bfQuieres un bocadillo?\nB: Sí, de jamón y queso.",
     exampleSrc:"A: Do you want a sandwich?\nB: Yes, ham and cheese.",
     funFact:"From 'bocado' (mouthful), from 'boca' (mouth). A bocadillo is specifically made on crusty bread, not sandwich bread."},

    {type:"fb",
     s:"Quiero un {1} de jamón, por favor.",
     a:["bocadillo"],
     opts:["bocadillo","bacalao","aguacate","aceite"],
     hint:"This is the typical Spanish sandwich made on crusty bread, not sliced bread.",
     sSrc:"I want a ham {1}, please."},

    {type:"teach", trg:"la albóndiga", src:"the meatball", pos:"noun", gender:"f",
     note:"Feminine noun. Usually plural: las albóndigas.\nCommon tapa in Spain.",
     example:"A: Las albóndigas de mi abuela son las mejores.\nB: \u00bfMe das la receta?",
     exampleSrc:"A: My grandmother's meatballs are the best.\nB: Can you give me the recipe?",
     funFact:"From Arabic 'al-bunduqa' (the hazelnut/small ball). Yet another Arabic food word in Spanish cuisine."},

    {type:"teach", trg:"la almendra", src:"the almond", pos:"noun", gender:"f",
     note:"Feminine noun. Leche de almendras = almond milk.\nGrown widely in Spain.",
     example:"A: \u00bfQuieres almendras?\nB: Sí, me gustan tostadas.",
     exampleSrc:"A: Do you want almonds?\nB: Yes, I like them toasted.",
     funFact:"From Arabic 'al-lawza' via late Latin. Spain is one of the largest almond producers in the world."},

    {type:"teach", trg:"el almuerzo", src:"the lunch", pos:"noun", gender:"m",
     note:"Masculine noun. La hora del almuerzo = lunchtime.\nAlmorzar = to have lunch.",
     example:"A: \u00bfQué hay para el almuerzo?\nB: Ensalada y pollo.",
     exampleSrc:"A: What is for lunch?\nB: Salad and chicken.",
     funFact:"From Latin 'admorsus' (a bite). In Spain, lunch (la comida) is the main meal, typically around 2 PM."},

    {type:"teach", trg:"almorzar", src:"to have lunch", pos:"verb", gender:null,
     note:"Stem-changing verb: o > ue. Almuerzo, almuerzas, almuerza...\nUsed daily.",
     example:"A: \u00bfA qué hora almuerzas?\nB: Almuerzo a las dos.",
     exampleSrc:"A: What time do you have lunch?\nB: I have lunch at two.",
     funFact:"The o > ue stem change happens in stressed syllables. Compare: almuerzo (I lunch) vs almorzamos (we lunch)."},

    {type:"mc",
     q:"\u00bfA qué hora almuerzan normalmente en España?",
     opts:["A las ocho","A las dos","A las doce","A las seis"],
     ans:"A las dos",
     hint:"Spanish mealtimes are famously later than in most countries. Lunch is the big daily meal."},

    {type:"teach", trg:"el aperitivo", src:"the appetizer, aperitif", pos:"noun", gender:"m",
     note:"Masculine noun. Tomar el aperitivo = to have pre-meal drinks/snacks.\nImportant social ritual.",
     example:"A: \u00bfVamos a tomar el aperitivo?\nB: Sí, unas cañas y aceitunas.",
     exampleSrc:"A: Shall we go for an aperitif?\nB: Yes, some beers and olives.",
     funFact:"From Latin 'aperire' (to open). The aperitivo 'opens' your appetite before the main meal."},

    {type:"teach", trg:"asar", src:"to roast, to grill", pos:"verb", gender:null,
     note:"Regular -ar verb. Aso, asas, asa...\nCarne asada = grilled meat.",
     example:"A: Vamos a asar pollo.\nB: \u00bfEn el horno?\nA: No, en la barbacoa.",
     exampleSrc:"A: We are going to roast chicken.\nB: In the oven?\nA: No, on the barbecue.",
     funFact:"From Latin 'assare'. The word 'barbacoa' (barbecue) actually comes from a Taíno (Caribbean) word for a wooden grill frame."},

    {type:"teach", trg:"la barbacoa", src:"the barbecue", pos:"noun", gender:"f",
     note:"Feminine noun. Hacer una barbacoa = to have a barbecue.\nPopular social event.",
     example:"A: El domingo hacemos una barbacoa.\nB: \u00bfQué llevo?",
     exampleSrc:"A: On Sunday we are having a barbecue.\nB: What should I bring?",
     funFact:"One of the first words Spanish borrowed from the Americas. The Taíno people of the Caribbean used a raised wooden frame to smoke meat."},

    {type:"match", pairs:[
      {trg:"aceite", src:"oil"},
      {trg:"arroz", src:"rice"},
      {trg:"almuerzo", src:"lunch"},
      {trg:"bocadillo", src:"sandwich"},
      {trg:"bebida", src:"drink"}
    ]},

    {type:"fb",
     s:"España produce casi la mitad del {1} de oliva del mundo.",
     a:["aceite"],
     opts:["aceite","arroz","azúcar","atún"],
     hint:"This liquid is made from olives and Spain is the world's largest producer of it.",
     sSrc:"Spain produces almost half of the world's olive {1}."},
  ]
};
export default LESSON_4;
