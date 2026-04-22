// L11: Shopping & Money. Buying, selling, and commerce
const LESSON_11 = {
  id:"esv2_a1gap_l11", title:"De compras", icon:"\u{1F6CD}\uFE0F", xp:15, board:true,
  steps:[
    {type:"intro", title:"De compras",
     desc:"Go shopping in Spanish. Learn to talk about stores, prices, bags, and everyday purchases.",
     goals:["Learn 20 shopping and money words","Ask about prices and products","Navigate shops and markets"]},

    {type:"teach", trg:"la bolsa", src:"the bag", pos:"noun", gender:"f",
     note:"Feminine noun. Bolsa de plástico = plastic bag.\nAlso: La Bolsa = the Stock Exchange.",
     example:"A: \u00bfNecesitas una bolsa?\nB: No, tengo la mía.",
     exampleSrc:"A: Do you need a bag?\nB: No, I have mine.",
     funFact:"From Latin 'bursa' (purse). 'La Bolsa' (Stock Exchange) got its name from the Bruges merchant family Van der Beurse."},

    {type:"teach", trg:"el bolsillo", src:"the pocket", pos:"noun", gender:"m",
     note:"Masculine noun. Diminutive of bolsa.\nDinero de bolsillo = pocket money.",
     example:"A: \u00bfDónde están las llaves?\nB: En mi bolsillo.",
     exampleSrc:"A: Where are the keys?\nB: In my pocket.",
     funFact:"Bolsa (bag) > bolsillo (little bag = pocket). The diminutive -illo/-illa is common: mesa > mesilla, libro > librillo."},

    {type:"teach", trg:"la barra", src:"the bar (counter), loaf", pos:"noun", gender:"f",
     note:"Feminine noun. Barra de pan = baguette/loaf.\nBarra del bar = bar counter.",
     example:"A: Compra una barra de pan.\nB: \u00bfNormal o integral?",
     exampleSrc:"A: Buy a loaf of bread.\nB: White or wholemeal?",
     funFact:"From pre-Roman 'barra'. In Spain, a 'barra de pan' is a long, thin bread loaf. 'Tomar algo en la barra' means to eat at the bar counter."},

    {type:"teach", trg:"el baratillo", src:"the flea market, bargain shop", pos:"noun", gender:"m",
     note:"Masculine noun. From barato (cheap).\nA place where things are sold cheaply.",
     example:"A: Encontré esto en un baratillo.\nB: \u00bfCuánto pagaste?\nA: Solo dos euros.",
     exampleSrc:"A: I found this at a flea market.\nB: How much did you pay?\nA: Only two euros.",
     funFact:"From 'barato' (cheap) + -illo (diminutive). Spain's 'rastros' (flea markets) are beloved weekend destinations."},

    {type:"teach", trg:"la bodega", src:"the wine cellar, winery", pos:"noun", gender:"f",
     note:"Feminine noun. Bodega = wine cellar, winery, or wine shop.\nAlso: corner shop (Latin America).",
     example:"A: Visitamos una bodega en La Rioja.\nB: \u00bfProbasteis vino?",
     exampleSrc:"A: We visited a winery in La Rioja.\nB: Did you try wine?",
     funFact:"From Greek 'apotheke' (storehouse). Same root as English 'apothecary'. Spain's wine regions have famous bodegas open for tours."},

    {type:"teach", trg:"la bollería", src:"the pastries, bakery goods", pos:"noun", gender:"f",
     note:"Feminine noun. Collective noun for pastries.\nBollería industrial = packaged pastries.",
     example:"A: Compra bollería para el desayuno.\nB: \u00bfCroissants?\nA: Sí, y napolitanas.",
     exampleSrc:"A: Buy pastries for breakfast.\nB: Croissants?\nA: Yes, and chocolate pastries.",
     funFact:"From 'bollo' (bun, pastry). Spanish bakeries distinguish between 'panadería' (bread) and 'bollería' (sweet pastries)."},

    {type:"mc",
     q:"\u00bfQué es una bodega?",
     opts:["A winery or wine cellar","A bookshop","A clothing store","A pharmacy"],
     ans:"A winery or wine cellar",
     hint:"This word is related to storing and making w.... La Rioja is famous for these establishments."},

    {type:"teach", trg:"el artículo", src:"the article, item", pos:"noun", gender:"m",
     note:"Masculine noun. Artículo = product item or newspaper article.\nAlso: grammar article (el, la).",
     example:"A: Este artículo está en oferta.\nB: \u00bfCuánto cuesta?",
     exampleSrc:"A: This item is on sale.\nB: How much does it cost?",
     funFact:"From Latin 'articulus' (small joint/section). The grammatical articles (el, la, los, las) are also called 'artículos'."},

    {type:"teach", trg:"la autorización", src:"the authorization", pos:"noun", gender:"f",
     note:"Feminine noun. Necesitar autorización = to need authorization.\nOfficial permission.",
     example:"A: Necesitas autorización para entrar.\nB: \u00bfDónde la consigo?",
     exampleSrc:"A: You need authorization to enter.\nB: Where do I get it?",
     funFact:"From Latin 'auctorizatio'. The -ción ending indicates a feminine abstract noun, like always in Spanish."},

    {type:"teach", trg:"autorizar", src:"to authorize", pos:"verb", gender:null,
     note:"Regular -ar verb (z > c before e). Autorizo, autorizas...\nTo give official permission.",
     example:"A: \u00bfQuién autoriza la compra?\nB: El director.",
     exampleSrc:"A: Who authorizes the purchase?\nB: The director.",
     funFact:"From Latin 'auctorizare'. In formal Spanish, many processes require 'autorización' from someone with authority."},

    {type:"teach", trg:"asegurar", src:"to ensure, to insure", pos:"verb", gender:null,
     note:"Regular -ar verb. Aseguro, aseguras...\nDouble meaning: to make sure, and to insure (insurance).",
     example:"A: Te aseguro que es verdad.\nB: De acuerdo, te creo.",
     exampleSrc:"A: I assure you it is true.\nB: Okay, I believe you.",
     funFact:"From 'seguro' (safe/sure). 'Asegurar' can mean to assure someone, to ensure something happens, or to take out insurance."},

    {type:"fb",
     s:"Llevo las llaves en el {1} del pantalón.",
     a:["bolsillo"],
     opts:["bolsillo","bolsa","baratillo","barra"],
     hint:"This is the small compartment sewn into your trousers where you keep small items.",
     sSrc:"I carry the keys in my trouser {1}."},

    {type:"teach", trg:"el aviso", src:"the notice, warning", pos:"noun", gender:"m",
     note:"Masculine noun. Sin previo aviso = without notice.\nAviso legal = legal notice.",
     example:"A: Hay un aviso en la puerta.\nB: \u00bfQué dice?",
     exampleSrc:"A: There is a notice on the door.\nB: What does it say?",
     funFact:"From 'avisar' (to notify). 'Ojo, aviso' means 'careful, warning'. Not to be confused with English 'advice' (= consejo)."},

    {type:"teach", trg:"anunciar", src:"to announce, to advertise", pos:"verb", gender:null,
     note:"Regular -ar verb. Anuncio, anuncias...\nAnunciar un producto = to advertise a product.",
     example:"A: Van a anunciar el ganador mañana.\nB: \u00bfA qué hora?",
     exampleSrc:"A: They are going to announce the winner tomorrow.\nB: At what time?",
     funFact:"From Latin 'annuntiare' (to report). Related to 'Anunciación', the biblical Annunciation. The commercial meaning came later."},

    {type:"teach", trg:"el anuncio", src:"the advertisement, announcement", pos:"noun", gender:"m",
     note:"Masculine noun. Anuncio de televisión = TV ad.\nPoner un anuncio = to place an ad.",
     example:"A: Vi tu anuncio en internet.\nB: \u00bfTe interesa el producto?",
     exampleSrc:"A: I saw your ad on the internet.\nB: Are you interested in the product?",
     funFact:"Can mean both an advertisement and an announcement. Context tells you which: 'anuncio de Coca-Cola' vs 'anuncio oficial'."},

    {type:"teach", trg:"aprovechar", src:"to take advantage of, to make the most of", pos:"verb", gender:null,
     note:"Regular -ar verb. Aprovecho, aprovechas...\nQue aproveche = enjoy your meal (said to others eating).",
     example:"A: Aprovecha la oferta.\nB: Tienes razón, voy a comprar dos.",
     exampleSrc:"A: Take advantage of the sale.\nB: You are right, I will buy two.",
     funFact:"'Que aproveche' is what you say when someone is eating, like French 'bon appétit'. One of the most social Spanish phrases."},

    {type:"mc",
     q:"\u00bfQué dices cuando ves a alguien comiendo?",
     opts:["Que asegure","Que aproveche","Que anuncie","Que avise"],
     ans:"Que aproveche",
     hint:"This is the Spanish equivalent of 'bon appétit', wishing someone a good meal."},

    {type:"teach", trg:"aumentar", src:"to increase", pos:"verb", gender:null,
     note:"Regular -ar verb. Aumento, aumentas...\nAumentar el precio = to raise the price.",
     example:"A: Van a aumentar los precios.\nB: \u00bfCuándo?\nA: El mes que viene.",
     exampleSrc:"A: They are going to increase the prices.\nB: When?\nA: Next month.",
     funFact:"From Latin 'augmentare'. The noun 'aumento' (increase) is used for pay raises: 'pedir un aumento' (to ask for a raise)."},

    {type:"teach", trg:"la alternativa", src:"the alternative", pos:"noun", gender:"f",
     note:"Feminine noun. No hay alternativa = there is no alternative.\nAlso used as adjective.",
     example:"A: No me gusta este restaurante.\nB: \u00bfCuál es la alternativa?",
     exampleSrc:"A: I don't like this restaurant.\nB: What is the alternative?",
     funFact:"From Latin 'alternativus'. As adjective: 'energía alternativa' (alternative energy). Nearly identical across European languages."},

    {type:"teach", trg:"el acceso", src:"access", pos:"noun", gender:"m",
     note:"Masculine noun. Acceso libre = free access.\nTener acceso a = to have access to.",
     example:"A: \u00bfHay acceso a internet?\nB: Sí, la contraseña está en la pared.",
     exampleSrc:"A: Is there internet access?\nB: Yes, the password is on the wall.",
     funFact:"From Latin 'accessus' (approach). One of the most universal modern words, used daily for wifi, buildings, and information."},

    {type:"match", pairs:[
      {trg:"bolsa", src:"bag"},
      {trg:"anuncio", src:"advertisement"},
      {trg:"bodega", src:"winery"},
      {trg:"aviso", src:"notice"},
      {trg:"acceso", src:"access"}
    ]},

    {type:"fb",
     s:"Van a {1} los precios de la gasolina el mes que viene.",
     a:["aumentar"],
     opts:["aumentar","anunciar","aprovechar","asegurar"],
     hint:"This verb means prices will go up, they will become higher than before.",
     sSrc:"They are going to {1} gasoline prices next month."},
  ]
};
export default LESSON_11;
