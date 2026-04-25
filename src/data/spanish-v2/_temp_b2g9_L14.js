// Lesson 14. Objetos y materiales (Objects and Materials)
const LESSON_14 = {id:"esv2_b2g9_l14", title:"Objetos y materiales", icon:"\u{1F9F1}", xp:25, board:true, steps:[
  {type:"intro", title:"Objetos y materiales",
   desc:"Name everyday objects, tools, and materials with precision. From keychains to skateparks, build vocabulary for describing the physical world around you.",
   goals:["Learn 10 terms for objects and materials","Describe everyday items with accuracy","Recognise word-formation patterns for objects"]},

  {type:"teach", trg:"el llavero", src:"the keychain; key ring", pos:"noun", gender:"m",
   note:"From llave (key) + -ero (holder suffix).\nAn object that holds keys together.",
   example:"A: \u00bfD\u00f3nde est\u00e1 mi llavero?\nB: En la mesa de la entrada.\nA: Gracias. Siempre lo pierdo.\nB: Deber\u00edas comprar uno m\u00e1s grande y de color llamativo.",
   exampleSrc:"A: Where is my keychain?\nB: On the entrance table.\nA: Thanks. I always lose it.\nB: You should buy a bigger, brightly coloured one.",
   funFact:"The -ero suffix creates holder nouns: llave > llavero, moneda > monedero, cenicero (ash > ashtray)."},

  {type:"teach", trg:"el monopat\u00edn", src:"the skateboard", pos:"noun", gender:"m",
   note:"Mono- (single) + pat\u00edn (skate).\nA board with wheels for riding.",
   example:"A: Mi hijo quiere un monopat\u00edn para su cumplea\u00f1os.\nB: \u00bfCu\u00e1ntos a\u00f1os cumple?\nA: Doce. Es la edad perfecta para empezar.\nB: Hay una pista de monopat\u00edn nueva en el parque.",
   exampleSrc:"A: My son wants a skateboard for his birthday.\nB: How old is he turning?\nA: Twelve. It is the perfect age to start.\nB: There is a new skateboard ramp in the park.",
   funFact:"In Latin America, 'patineta' is more common than 'monopat\u00edn', while in Spain 'monopat\u00edn' is the standard word."},

  {type:"teach", trg:"el laurel", src:"the bay leaf; laurel", pos:"noun", gender:"m",
   note:"From Latin laurus.\nBoth the tree and the leaf used in cooking.",
   example:"A: A\u00f1ade una hoja de laurel al guiso.\nB: \u00bfCu\u00e1ntas hojas?\nA: Una es suficiente. Da mucho sabor.\nB: El laurel es esencial en la cocina mediterr\u00e1nea.",
   exampleSrc:"A: Add a bay leaf to the stew.\nB: How many leaves?\nA: One is enough. It gives a lot of flavour.\nB: Bay leaf is essential in Mediterranean cooking.",
   funFact:"In ancient Greece, laurel wreaths crowned victorious athletes and poets, giving us the word 'laureate'."},

  {type:"teach", trg:"el le\u00f1o", src:"the log; piece of firewood", pos:"noun", gender:"m",
   note:"From le\u00f1a (firewood).\nA single piece of wood for burning.",
   example:"A: Pon otro le\u00f1o en la chimenea.\nB: \u00bfEste es suficientemente seco?\nA: S\u00ed, est\u00e1 perfecto. Arder\u00e1 bien.\nB: Me encanta el calor de la chimenea.",
   exampleSrc:"A: Put another log on the fire.\nB: Is this one dry enough?\nA: Yes, it is perfect. It will burn well.\nB: I love the warmth of the fireplace.",
   funFact:"The expression 'dormir como un le\u00f1o' (to sleep like a log) exists in both Spanish and English with the same meaning."},

  {type:"teach", trg:"el asta", src:"the flagpole; antler; shaft", pos:"noun", gender:"m",
   note:"From Latin hasta (spear shaft).\nNote: feminine but uses 'el' in singular for phonetics.",
   example:"A: La bandera ondea en el asta del ayuntamiento.\nB: La cambiaron la semana pasada.\nA: S\u00ed, la anterior estaba muy desgastada.\nB: Es importante mantener los s\u00edmbolos en buen estado.",
   exampleSrc:"A: The flag waves on the flagpole of the town hall.\nB: They changed it last week.\nA: Yes, the previous one was very worn.\nB: It is important to maintain symbols in good condition.",
   funFact:"'Asta' uses 'el' (not 'la') before it because it starts with a stressed 'a', like 'el agua' and 'el \u00e1guila'. But it is feminine."},

  {type:"mc", q:"\u00bfQu\u00e9 es un llavero?",
   opts:["Un objeto para guardar las llaves juntas","Un cerrajero","Una cerradura","Una tienda de llaves"],
   ans:"Un objeto para guardar las llaves juntas",
   hint:"The -ero suffix here means 'holder': llave (key) + ero = key holder."},

  {type:"teach", trg:"la horquilla", src:"the hairpin; the fork (tool)", pos:"noun", gender:"f",
   note:"Diminutive of horca (fork/pitchfork).\nA small forked pin for hair or a bracket in data.",
   example:"A: Necesito una horquilla para sujetarme el pelo.\nB: Toma, tengo una de sobra.\nA: Gracias. Con este viento es imposible.\nB: Las horquillas son imprescindibles.",
   exampleSrc:"A: I need a hairpin to hold my hair.\nB: Here, I have a spare one.\nA: Thanks. With this wind it is impossible.\nB: Hairpins are essential.",
   funFact:"In economics, 'horquilla' means a range or bracket: 'la horquilla de precios' (the price range) between a minimum and maximum."},

  {type:"teach", trg:"la calza", src:"the wedge; the chock; (hist.) stocking", pos:"noun", gender:"f",
   note:"From Latin calceus (shoe).\nA wedge placed under wheels to prevent rolling.",
   example:"A: Pon una calza debajo de la rueda del cami\u00f3n.\nB: \u00bfPor qu\u00e9?\nA: Para que no se mueva en la pendiente.\nB: Buena idea. La seguridad es lo primero.",
   exampleSrc:"A: Put a wedge under the lorry wheel.\nB: Why?\nA: So it does not move on the slope.\nB: Good idea. Safety comes first.",
   funFact:"Historically, 'calzas' were the stockings or hose worn by men in medieval Spain. The modern word 'calzado' (footwear) shares the same root."},

  {type:"teach", trg:"la crin", src:"the mane (of a horse); horsehair", pos:"noun", gender:"f",
   note:"From Latin crinis (hair).\nThe long hair on a horse's neck.",
   example:"A: La crin del caballo brillaba al sol.\nB: Es un caballo precioso.\nA: Le cepillan la crin todos los d\u00edas.\nB: Se nota. Est\u00e1 muy bien cuidado.",
   exampleSrc:"A: The horse's mane shone in the sun.\nB: It is a beautiful horse.\nA: They brush its mane every day.\nB: You can tell. It is very well looked after.",
   funFact:"Horsehair (crin de caballo) was traditionally used to stuff mattresses, upholster furniture, and make violin bows."},

  {type:"fb", s:"Pon otro {1} en la chimenea. Hace mucho fr\u00edo.", a:["le\u00f1o"],
   opts:["le\u00f1o","laurel","llavero","monopat\u00edn"],
   hint:"A piece of wood meant for burning in a fireplace.",
   sSrc:"Put another {1} on the fire. It is very cold."},

  {type:"teach", trg:"la borda", src:"the gunwale; the side of a ship", pos:"noun", gender:"f",
   note:"From French bord (edge).\nThe upper edge of a ship's side.",
   example:"A: Se asomaron por la borda para ver los delfines.\nB: \u00a1Qu\u00e9 espect\u00e1culo!\nA: Estaban saltando junto al barco.\nB: Es un momento muy especial.",
   exampleSrc:"A: They leaned over the gunwale to see the dolphins.\nB: What a spectacle!\nA: They were jumping next to the boat.\nB: It is a very special moment.",
   funFact:"The expression 'tirar por la borda' (to throw overboard) means to waste or discard something valuable."},

  {type:"mc", q:"\u00bfPor qu\u00e9 decimos 'el asta' si es femenino?",
   opts:["Porque es una excepci\u00f3n irregular","Porque empieza con 'a' t\u00f3nica y se usa 'el' por fonef\u00edtica","Porque en realidad es masculino","Porque es un extranjerismo"],
   ans:"Porque empieza con 'a' t\u00f3nica y se usa 'el' por fonef\u00edtica",
   hint:"Like 'el agua' and 'el alma', feminine nouns starting with a stressed 'a' use the masculine article."},

  {type:"fb", s:"A\u00f1ade una hoja de {1} al guiso para darle sabor.", a:["laurel"],
   opts:["laurel","le\u00f1o","asta","crin"],
   hint:"An aromatic leaf used in Mediterranean cooking, from a tree sacred in ancient Greece.",
   sSrc:"Add a {1} leaf to the stew to give it flavour."},

  {type:"match", pairs:[
    {trg:"llavero", src:"keychain"},
    {trg:"monopat\u00edn", src:"skateboard"},
    {trg:"horquilla", src:"hairpin"},
    {trg:"crin", src:"mane; horsehair"},
    {trg:"borda", src:"gunwale; ship's side"}
  ]},

  {type:"mc", q:"\u00bfQu\u00e9 significa 'tirar por la borda'?",
   opts:["Navegar r\u00e1pidamente","Desperdiciar algo valioso","Pescar desde un barco","Reparar un barco"],
   ans:"Desperdiciar algo valioso",
   hint:"To throw something over the side of the ship means to waste it."},

  {type:"drag_fill", s:"Necesito una {1} para el pelo. El ni\u00f1o quiere un {2} nuevo.",
   blanks:{"1":"horquilla","2":"monopat\u00edn"},
   pool:["horquilla","monopat\u00edn","llavero","calza","crin"],
   hint:"A small pin for holding hair. A wheeled board for riding."}
]};
export default LESSON_14;
