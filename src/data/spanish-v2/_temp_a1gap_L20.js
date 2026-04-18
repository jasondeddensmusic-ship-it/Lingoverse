// L20: Everyday Expressions — Useful words for real life
const LESSON_20 = {
  id:"esv2_a1gap_l20", title:"Palabras útiles", icon:"\u{1F4A1}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Palabras útiles",
     desc:"Round out your vocabulary with essential everyday words. Verbs, adjectives, and expressions you will use constantly.",
     goals:["Learn 20 high-frequency everyday words","Use common expressions naturally","Build confidence with practical vocabulary"]},

    {type:"teach", trg:"aparecer", src:"to appear, to show up", pos:"verb", gender:null,
     note:"Irregular verb (c > zc). Aparezco, apareces...\nDe repente apareció = suddenly appeared.",
     example:"A: \u00bfDónde aparecieron las llaves?\nB: Debajo del sofá.",
     exampleSrc:"A: Where did the keys appear?\nB: Under the sofa.",
     funFact:"From Latin 'apparere' (to become visible). 'Aparecer' vs 'parecer' (to seem): the 'a-' prefix adds the meaning of becoming visible."},

    {type:"teach", trg:"apartar", src:"to move aside, to separate", pos:"verb", gender:null,
     note:"Regular -ar verb. Aparto, apartas...\nApartarse = to step aside. Aparta! = move!",
     example:"A: Aparta esas cajas, por favor.\nB: Las pongo aquí.",
     exampleSrc:"A: Move those boxes aside, please.\nB: I will put them here.",
     funFact:"From 'a parte' (to the side). Related to 'apartamento' (apartment, a separated part) and 'aparte' (apart, separately)."},

    {type:"teach", trg:"apreciar", src:"to appreciate, to value", pos:"verb", gender:null,
     note:"Regular -ar verb. Aprecio, aprecias...\nAprecio mucho tu ayuda = I really appreciate your help.",
     example:"A: Aprecio mucho tu amistad.\nB: Yo también la tuya.",
     exampleSrc:"A: I really appreciate your friendship.\nB: I appreciate yours too.",
     funFact:"From Latin 'appretiare' (to set a price). The meaning evolved from valuing in money to valuing emotionally."},

    {type:"teach", trg:"apurar", src:"to hurry, to rush", pos:"verb", gender:null,
     note:"Regular -ar verb. Reflexive: apurarse = to hurry up.\nNo te apures = don't worry (Latin America).",
     example:"A: Apúrate, llegamos tarde.\nB: Ya voy, un momento.",
     exampleSrc:"A: Hurry up, we are late.\nB: I'm coming, one moment.",
     funFact:"In Spain, 'date prisa' is more common for 'hurry up'. In Latin America, 'apúrate' is the standard. Regional difference."},

    {type:"teach", trg:"aportar", src:"to contribute, to provide", pos:"verb", gender:null,
     note:"Regular -ar verb. Aporto, aportas...\nAportar ideas = to contribute ideas.",
     example:"A: Todos debemos aportar algo al proyecto.\nB: Yo puedo aportar ideas.",
     exampleSrc:"A: We all should contribute something to the project.\nB: I can contribute ideas.",
     funFact:"From Latin 'apportare' (to carry to). Each person 'carries something toward' the group effort."},

    {type:"teach", trg:"la aguja", src:"the needle", pos:"noun", gender:"f",
     note:"Feminine noun. Aguja de coser = sewing needle.\nAlso: clock hand, knitting needle.",
     example:"A: Necesito una aguja e hilo.\nB: Están en el cajón.",
     exampleSrc:"A: I need a needle and thread.\nB: They are in the drawer.",
     funFact:"From Latin 'acucula', diminutive of 'acus' (needle). 'Buscar una aguja en un pajar' = to look for a needle in a haystack."},

    {type:"mc",
     q:"\u00bfQué significa 'buscar una aguja en un pajar'?",
     opts:["To look for something nearly impossible to find","To sew in a barn","To buy needles at a farm","To find hay in a needle"],
     ans:"To look for something nearly impossible to find",
     hint:"Aguja = needle, pajar = haystack. What does hunting for a needle hidden in a pile of straw represent?"},

    {type:"teach", trg:"ahogar", src:"to drown, to suffocate", pos:"verb", gender:null,
     note:"Regular -ar verb (g > gu before e). Ahogo, ahogas...\nAhogarse = to drown (reflexive).",
     example:"A: No me gusta nadar donde no hago pie.\nB: Tranquilo, no te vas a ahogar.",
     exampleSrc:"A: I don't like swimming where I can't stand.\nB: Relax, you won't drown.",
     funFact:"'Ahogarse en un vaso de agua' (to drown in a glass of water) means to make a big deal out of a small problem."},

    {type:"teach", trg:"alabar", src:"to praise", pos:"verb", gender:null,
     note:"Regular -ar verb. Alabo, alabas...\nAlabar a Dios = to praise God.",
     example:"A: El profesor alabó su trabajo.\nB: Se lo merece, trabajó mucho.",
     exampleSrc:"A: The teacher praised his work.\nB: He deserves it, he worked hard.",
     funFact:"From Latin 'alapare'. Related to 'alabanza' (praise). Often used in religious contexts but also for general praise."},

    {type:"teach", trg:"el alambre", src:"the wire", pos:"noun", gender:"m",
     note:"Masculine noun. Alambre de púas = barbed wire.\nValla de alambre = wire fence.",
     example:"A: Cuidado con el alambre.\nB: Sí, tiene púas.",
     exampleSrc:"A: Be careful with the wire.\nB: Yes, it has barbs.",
     funFact:"From Arabic 'al-anbar' (amber), because amber produces static that attracts thin materials. The connection seems strange but is well documented."},

    {type:"teach", trg:"el alacrán", src:"the scorpion", pos:"noun", gender:"m",
     note:"Masculine noun. From Arabic 'al-aqrab'.\nFound in dry areas of Spain and Latin America.",
     example:"A: Vi un alacrán en el jardín.\nB: Ten cuidado, pueden picar.",
     exampleSrc:"A: I saw a scorpion in the garden.\nB: Be careful, they can sting.",
     funFact:"From Arabic 'al-aqrab'. In Spain, scorpions exist in the south but are not dangerous. In Mexico, some species are venomous."},

    {type:"fb",
     s:"{1} mucho tu ayuda con la mudanza. Gracias.",
     a:["Aprecio"],
     opts:["Aprecio","Apuro","Aparezco","Alabo"],
     hint:"This verb means to value or be grateful for something someone has done for you.",
     sSrc:"I really {1} your help with the move. Thanks."},

    {type:"teach", trg:"atraer", src:"to attract", pos:"verb", gender:null,
     note:"Irregular verb (like traer). Atraigo, atraes...\nAtraer turistas = to attract tourists.",
     example:"A: España atrae millones de turistas.\nB: El clima y la comida son perfectos.",
     exampleSrc:"A: Spain attracts millions of tourists.\nB: The climate and food are perfect.",
     funFact:"From Latin 'attrahere' (to draw toward). Spain is the second most visited country in the world after France."},

    {type:"teach", trg:"el artículo", src:"the article (grammar/text)", pos:"noun", gender:"m",
     note:"Masculine noun. Artículo definido = definite article (el, la).\nAlso: newspaper article.",
     example:"A: Leí un artículo interesante.\nB: \u00bfSobre qué?",
     exampleSrc:"A: I read an interesting article.\nB: About what?",
     funFact:"Spanish has four definite articles (el, la, los, las) and four indefinite ones (un, una, unos, unas). More than English."},

    {type:"teach", trg:"abandonar", src:"to abandon, to leave", pos:"verb", gender:null,
     note:"Regular -ar verb. Abandono, abandonas...\nAbandonar un lugar = to leave a place.",
     example:"A: Nunca abandones tus sueños.\nB: Tienes razón, hay que luchar.",
     exampleSrc:"A: Never abandon your dreams.\nB: You are right, you have to fight.",
     funFact:"From French 'abandonner'. 'Abandonar' can mean to leave a place, to give up on something, or to desert someone."},

    {type:"teach", trg:"el accesorio", src:"the accessory", pos:"noun", gender:"m",
     note:"Masculine noun. Accesorios de moda = fashion accessories.\nAlso: car accessories.",
     example:"A: Me encantan tus accesorios.\nB: Gracias, los compré en el mercado.",
     exampleSrc:"A: I love your accessories.\nB: Thanks, I bought them at the market.",
     funFact:"From Latin 'accessorius' (additional). In fashion, 'complementos' is the more common Spanish word for accessories."},

    {type:"mc",
     q:"\u00bfCuántos artículos definidos tiene el español?",
     opts:["Cuatro: el, la, los, las","Dos: el, la","Uno: el","Tres: el, la, lo"],
     ans:"Cuatro: el, la, los, las",
     hint:"Spanish has articles for masculine/feminine AND singular/plural, giving four combinations."},

    {type:"teach", trg:"el bienestar", src:"wellbeing, welfare", pos:"noun", gender:"m",
     note:"Masculine noun. Estado de bienestar = welfare state.\nBienestar social = social welfare.",
     example:"A: El bienestar de los ciudadanos es importante.\nB: Sí, hay que cuidar a todos.",
     exampleSrc:"A: The wellbeing of citizens is important.\nB: Yes, we must take care of everyone.",
     funFact:"'Estado de bienestar' (welfare state) is a key concept in Spanish politics. Spain's healthcare system is universal and highly rated."},

    {type:"teach", trg:"el bloqueo", src:"the blockade, mental block", pos:"noun", gender:"m",
     note:"Masculine noun. Bloqueo mental = mental block.\nFrom bloquear (to block).",
     example:"A: Tengo un bloqueo mental.\nB: Descansa un poco y vuelve.",
     exampleSrc:"A: I have a mental block.\nB: Rest a bit and come back.",
     funFact:"From French 'blocus'. Used for physical blockades, mental blocks, and even political deadlocks."},

    {type:"teach", trg:"la bola", src:"the ball, sphere", pos:"noun", gender:"f",
     note:"Feminine noun. Bola de cristal = crystal ball.\nAlso colloquial: lie (bola = fib).",
     example:"A: Necesito una bola de cristal para saber el futuro.\nB: Ojalá existieran.",
     exampleSrc:"A: I need a crystal ball to know the future.\nB: I wish they existed.",
     funFact:"In colloquial Spanish, 'meter bolas' means to tell lies. 'No me cuentes bolas' = don't tell me fibs."},

    {type:"match", pairs:[
      {trg:"aparecer", src:"to appear"},
      {trg:"apreciar", src:"to appreciate"},
      {trg:"atraer", src:"to attract"},
      {trg:"abandonar", src:"to abandon"},
      {trg:"aguja", src:"needle"}
    ]},

    {type:"fb",
     s:"España {1} a más de 80 millones de turistas cada año.",
     a:["atrae"],
     opts:["atrae","aparece","abandona","aporta"],
     hint:"This verb means to draw people toward a place. Tourism is about drawing visitors.",
     sSrc:"Spain {1} more than 80 million tourists every year."},
  ]
};
export default LESSON_20;
