// L02: Food & Kitchen - Ingredients, cooking, and dining
const LESSON_2 = {
  id:"esv2_b1gap_l2", title:"En la cocina", icon:"\u{1F373}", xp:15, board:true,
  steps:[
    {type:"intro", title:"En la cocina",
     desc:"Step into the kitchen. Learn vocabulary for ingredients, cooking tools, and traditional Spanish food.",
     goals:["Learn 20 food and kitchen words","Describe dishes and ingredients","Talk about cooking and eating"]},

    {type:"teach", trg:"el aceite de oliva", src:"the olive oil", pos:"noun", gender:"m",
     note:"Masculine noun (el aceite). Spain is the world's\nlargest producer of olive oil.",
     example:"A: \u00bfQu\u00e9 aceite usas para cocinar?\nB: Siempre uso aceite de oliva virgen extra.",
     exampleSrc:"A: What oil do you use for cooking?\nB: I always use extra virgin olive oil.",
     funFact:"'Aceite' comes from Arabic 'az-zayt' (the oil). Spain produces nearly half of the world's olive oil."},

    {type:"teach", trg:"la acelga", src:"the chard", pos:"noun", gender:"f",
     note:"Feminine noun. A leafy green vegetable.\nCommon in Mediterranean cooking.",
     example:"A: \u00bfQu\u00e9 verdura es esa?\nB: Son acelgas. Muy buenas con ajo.",
     exampleSrc:"A: What vegetable is that?\nB: They are chard. Very good with garlic.",
     funFact:"From Arabic 'as-silqa'. Many Spanish food words beginning with 'a' come from Arabic, reflecting 800 years of Moorish influence."},

    {type:"teach", trg:"la almeja", src:"the clam", pos:"noun", gender:"f",
     note:"Feminine noun. A popular shellfish in Spain.\nAlmejas a la marinera = classic dish.",
     example:"A: \u00bfTe gustan las almejas?\nB: S\u00ed, sobre todo a la marinera.",
     exampleSrc:"A: Do you like clams?\nB: Yes, especially sailor-style.",
     funFact:"Possibly from Arabic 'al-mahara' (the shell). Almejas a la marinera is a beloved Galician dish with white wine and garlic."},

    {type:"teach", trg:"el almid\u00f3n", src:"the starch", pos:"noun", gender:"m",
     note:"Masculine noun. Found in potatoes, rice, bread.\nAlso used for starching clothes.",
     example:"A: El arroz tiene mucho almid\u00f3n.\nB: Por eso hay que lavarlo antes de cocinar.",
     exampleSrc:"A: Rice has a lot of starch.\nB: That is why you need to wash it before cooking.",
     funFact:"From Arabic 'al-mida' (the starch paste). Another example of the Arabic 'al-' prefix becoming part of everyday Spanish vocabulary."},

    {type:"teach", trg:"el asado", src:"the roast, barbecue", pos:"noun", gender:"m",
     note:"Masculine noun. Also the past participle of 'asar'.\nHuge tradition in Argentina.",
     example:"A: \u00bfVienes al asado del domingo?\nB: \u00a1Claro! \u00bfQu\u00e9 llevo?",
     exampleSrc:"A: Are you coming to the Sunday barbecue?\nB: Of course! What should I bring?",
     funFact:"From Latin 'assare' (to roast). The Argentine asado is practically a national ritual, with specific cuts and cooking order."},

    {type:"mc",
     q:"\u00bfDe d\u00f3nde viene la palabra 'aceite'?",
     opts:["Del \u00e1rabe","Del lat\u00edn","Del griego","Del franc\u00e9s"],
     ans:"Del \u00e1rabe",
     hint:"Many Spanish food words starting with 'a' reflect 800 years of Moorish influence on the peninsula."},

    {type:"teach", trg:"la berenjena", src:"the eggplant", pos:"noun", gender:"f",
     note:"Feminine noun. Key ingredient in Mediterranean food.\nBerenjenas fritas = popular tapa.",
     example:"A: \u00bfC\u00f3mo preparas las berenjenas?\nB: Las corto en rodajas y las fr\u00edo.",
     exampleSrc:"A: How do you prepare the eggplants?\nB: I slice them and fry them.",
     funFact:"From Arabic 'badinyana', originally from Sanskrit 'vatimganah'. The word traveled from India through Persia to Al-Andalus."},

    {type:"teach", trg:"el bistec", src:"the steak", pos:"noun", gender:"m",
     note:"Masculine noun. Adapted from English 'beefsteak'.\nAlso spelled 'bist\u00e9'.",
     example:"A: \u00bfC\u00f3mo quieres el bistec?\nB: Poco hecho, por favor.",
     exampleSrc:"A: How do you want the steak?\nB: Rare, please.",
     funFact:"Borrowed from English 'beefsteak' in the 1800s. Spanish adapted the pronunciation and spelling to fit its sound system."},

    {type:"teach", trg:"el bacon", src:"the bacon", pos:"noun", gender:"m",
     note:"Masculine noun. Borrowed from English.\nAlso 'la panceta' or 'el tocino'.",
     example:"A: \u00bfQuieres bacon con los huevos?\nB: S\u00ed, bien crujiente.",
     exampleSrc:"A: Do you want bacon with the eggs?\nB: Yes, nice and crispy.",
     funFact:"English loanword that coexists with native 'panceta' and 'tocino'. The English word itself comes from Old French 'bacon' (back meat)."},

    {type:"teach", trg:"la cacerola", src:"the saucepan", pos:"noun", gender:"f",
     note:"Feminine noun. A medium cooking pot with handles.\nFor stews and sauces.",
     example:"A: \u00bfEn qu\u00e9 cocino la salsa?\nB: Usa la cacerola grande.",
     exampleSrc:"A: What do I cook the sauce in?\nB: Use the big saucepan.",
     funFact:"From French 'casserole', which came from Proven\u00e7al 'cassa' (ladle). The French word entered English too, but with a different meaning."},

    {type:"fb",
     s:"Las {1} a la marinera son un plato t\u00edpico de Galicia.",
     a:["almejas"],
     opts:["almejas","acelgas","berenjenas","avellanas"],
     hint:"A type of shellfish served in white wine sauce, popular in northwestern Spain.",
     sSrc:"The {1} sailor-style are a typical dish from Galicia."},

    {type:"teach", trg:"el buf\u00e9", src:"the buffet", pos:"noun", gender:"m",
     note:"Masculine noun. Adapted from French 'buffet'.\nBuf\u00e9 libre = all-you-can-eat.",
     example:"A: El hotel tiene buf\u00e9 para el desayuno.\nB: \u00a1Genial! Me encanta elegir.",
     exampleSrc:"A: The hotel has a buffet for breakfast.\nB: Great! I love choosing.",
     funFact:"From French 'buffet' (sideboard). 'Buf\u00e9 libre' is the standard Spanish term for all-you-can-eat restaurants."},

    {type:"teach", trg:"la batata", src:"the sweet potato", pos:"noun", gender:"f",
     note:"Feminine noun. Also called 'boniato' in some regions.\nVery popular in autumn.",
     example:"A: \u00bfHas probado la batata asada?\nB: S\u00ed, est\u00e1 muy buena.",
     exampleSrc:"A: Have you tried roasted sweet potato?\nB: Yes, it is very good.",
     funFact:"From Taino 'batata', a Caribbean indigenous language. Columbus brought the sweet potato to Spain in the late 1400s."},

    {type:"teach", trg:"el alm\u00edbar", src:"the syrup", pos:"noun", gender:"m",
     note:"Masculine noun. Sugar dissolved in water.\nFruta en alm\u00edbar = canned fruit.",
     example:"A: \u00bfQuieres melocot\u00f3n en alm\u00edbar?\nB: S\u00ed, de postre est\u00e1 muy bien.",
     exampleSrc:"A: Do you want peach in syrup?\nB: Yes, for dessert it is very nice.",
     funFact:"From Arabic 'al-maiba' (a sweet drink). Spain's long history with sugar production made alm\u00edbar a kitchen staple."},

    {type:"teach", trg:"la banana", src:"the banana", pos:"noun", gender:"f",
     note:"Feminine noun. In Spain, 'pl\u00e1tano' is more common.\n'Banana' used in Latin America.",
     example:"A: \u00bfQuieres una banana?\nB: Prefiero un pl\u00e1tano de Canarias.",
     exampleSrc:"A: Do you want a banana?\nB: I prefer a Canary Islands banana.",
     funFact:"Possibly from a West African language (Wolof). The Canary Islands grow their own variety, smaller and sweeter than the standard banana."},

    {type:"mc",
     q:"\u00bfCu\u00e1l de estos alimentos lleg\u00f3 de Am\u00e9rica?",
     opts:["la batata","la acelga","la almeja","la berenjena"],
     ans:"la batata",
     hint:"This root vegetable was brought from the Caribbean by Columbus in the late 1400s."},

    {type:"teach", trg:"el apio", src:"the celery", pos:"noun", gender:"m",
     note:"Masculine noun. Used in soups, stews, and salads.\nApio nabo = celeriac.",
     example:"A: Necesito apio para la sopa.\nB: Hay en la nevera, al fondo.",
     exampleSrc:"A: I need celery for the soup.\nB: There is some in the fridge, at the back.",
     funFact:"From Latin 'apium'. The Romans used celery medicinally before it became a food. Parsley is in the same family."},

    {type:"teach", trg:"la brasa", src:"the ember, hot coal", pos:"noun", gender:"f",
     note:"Feminine noun. A la brasa = grilled over coals.\nVery popular cooking method.",
     example:"A: \u00bfC\u00f3mo quieres las verduras?\nB: A la brasa, por favor.",
     exampleSrc:"A: How do you want the vegetables?\nB: Grilled over coals, please.",
     funFact:"Possibly from Germanic 'brasa'. 'A la brasa' cooking is deeply rooted in Spanish cuisine, from calc\u00e7ots to chulet\u00f3n."},

    {type:"fb",
     s:"El melocot\u00f3n en {1} es un postre cl\u00e1sico.",
     a:["alm\u00edbar"],
     opts:["alm\u00edbar","aceite","almid\u00f3n","asado"],
     hint:"A sweet liquid made from sugar and water, used to preserve fruit.",
     sSrc:"The peach in {1} is a classic dessert."},

    {type:"match", pairs:[
      {trg:"aceite de oliva", src:"olive oil"},
      {trg:"berenjena", src:"eggplant"},
      {trg:"cacerola", src:"saucepan"},
      {trg:"brasa", src:"ember"},
      {trg:"bistec", src:"steak"}
    ]},

    {type:"mc",
     q:"\u00bfQu\u00e9 necesitas para hacer una sopa?",
     opts:["una cacerola","un asado","un buf\u00e9","un bistec"],
     ans:"una cacerola",
     hint:"You need a cooking vessel with handles to heat liquid on the stove."}
  ]
};
export default LESSON_2;
