// L05: City & Architecture - Urban spaces, buildings, and infrastructure
const LESSON_5 = {
  id:"esv2_b1gap_l5", title:"La ciudad", icon:"\u{1F3D7}", xp:15, board:true,
  steps:[
    {type:"intro", title:"La ciudad",
     desc:"Navigate the city. Learn vocabulary for urban spaces, buildings, and city infrastructure.",
     goals:["Learn 20 city and architecture words","Describe urban features and locations","Talk about city life and navigation"]},

    {type:"teach", trg:"la acera", src:"the sidewalk", pos:"noun", gender:"f",
     note:"Feminine noun. Where pedestrians walk.\nCaminar por la acera = to walk on the sidewalk.",
     example:"A: Camina por la acera, no por la carretera.\nB: S\u00ed, es m\u00e1s seguro.",
     exampleSrc:"A: Walk on the sidewalk, not on the road.\nB: Yes, it is safer.",
     funFact:"From Arabic 'as-sa'ira' (the path). In Latin America, 'la vereda' or 'la banqueta' are used instead in some countries."},

    {type:"teach", trg:"la alcald\u00eda", src:"the city hall, mayor's office", pos:"noun", gender:"f",
     note:"Feminine noun. Where the alcalde (mayor) works.\nAlso: el ayuntamiento.",
     example:"A: \u00bfD\u00f3nde est\u00e1 la alcald\u00eda?\nB: En la plaza principal, al lado de la iglesia.",
     exampleSrc:"A: Where is the city hall?\nB: In the main square, next to the church.",
     funFact:"From Arabic 'al-qadi' (the judge). The alcalde was originally a judge, not a mayor. The shift happened over centuries of Spanish governance."},

    {type:"teach", trg:"el asfalto", src:"the asphalt", pos:"noun", gender:"m",
     note:"Masculine noun. The material covering roads.\nAsfaltar = to pave with asphalt.",
     example:"A: El asfalto est\u00e1 muy caliente en verano.\nB: S\u00ed, puedes fre\u00edr un huevo.",
     exampleSrc:"A: The asphalt is very hot in summer.\nB: Yes, you could fry an egg.",
     funFact:"From Greek 'asphaltos' (bitumen). The Dead Sea was once called 'Lake Asphaltites' because of the natural bitumen found there."},

    {type:"teach", trg:"la baldosa", src:"the floor tile", pos:"noun", gender:"f",
     note:"Feminine noun. Ceramic tile for floors.\nVery common in Spanish homes.",
     example:"A: Hay que cambiar las baldosas del ba\u00f1o.\nB: \u00bfDe qu\u00e9 color las quieres?",
     exampleSrc:"A: We need to change the bathroom tiles.\nB: What color do you want them?",
     funFact:"Possibly from Italian 'baldosa'. Spanish homes traditionally use ceramic tiles instead of carpet due to the warm climate."},

    {type:"teach", trg:"la barrera", src:"the barrier, fence", pos:"noun", gender:"f",
     note:"Feminine noun. Physical or figurative obstacle.\nBarrera del idioma = language barrier.",
     example:"A: La barrera del idioma es un problema.\nB: S\u00ed, pero se puede superar.",
     exampleSrc:"A: The language barrier is a problem.\nB: Yes, but it can be overcome.",
     funFact:"From 'barra' (bar, rod) + '-era'. In bullfighting, 'la barrera' is the wooden fence around the ring. First row seats are 'de barrera'."},

    {type:"mc",
     q:"\u00bfD\u00f3nde trabaja el alcalde de una ciudad?",
     opts:["en la alcald\u00eda","en la acera","en la baldosa","en la barrera"],
     ans:"en la alcald\u00eda",
     hint:"The building named after the mayor's title, located in the main square of most Spanish cities."},

    {type:"teach", trg:"el bulevar", src:"the boulevard", pos:"noun", gender:"m",
     note:"Masculine noun. A wide, tree-lined avenue.\nFrom French, used in many cities.",
     example:"A: Vamos a pasear por el bulevar.\nB: Buena idea, hay muchas tiendas.",
     exampleSrc:"A: Let's stroll along the boulevard.\nB: Good idea, there are many shops.",
     funFact:"From French 'boulevard', which came from Dutch 'bolwerk' (bulwark). Originally, boulevards were built where old city walls once stood."},

    {type:"teach", trg:"la bocacalle", src:"the side street entrance", pos:"noun", gender:"f",
     note:"Feminine noun. Boca (mouth) + calle (street).\nWhere a side street meets a main road.",
     example:"A: Gira a la derecha en la pr\u00f3xima bocacalle.\nB: \u00bfEsta o la siguiente?",
     exampleSrc:"A: Turn right at the next side street.\nB: This one or the next one?",
     funFact:"Literally 'mouth of the street'. Spanish uses 'boca' for many openings: boca del metro (subway entrance), boca del r\u00edo (river mouth)."},

    {type:"teach", trg:"el altavoz", src:"the loudspeaker", pos:"noun", gender:"m",
     note:"Masculine noun. Alta (high) + voz (voice).\nAlso: a smart speaker device.",
     example:"A: \u00bfPuedes subir el altavoz? No se oye.\nB: Claro, ahora mismo.",
     exampleSrc:"A: Can you turn up the loudspeaker? You cannot hear it.\nB: Sure, right now.",
     funFact:"A compound word: 'alta voz' (loud voice). The phrase 'en voz alta' means 'out loud'. Modern smart speakers are also called 'altavoces inteligentes'."},

    {type:"teach", trg:"el arrabal", src:"the outskirts, poor quarter", pos:"noun", gender:"m",
     note:"Masculine noun. The outer part of a city.\nOften implies a poorer area.",
     example:"A: Vive en los arrabales de la ciudad.\nB: Es una zona en desarrollo.",
     exampleSrc:"A: He lives on the outskirts of the city.\nB: It is an area under development.",
     funFact:"From Arabic 'ar-rabad' (the suburb). Like many Arabic-origin city words in Spanish, it reflects the urban planning of Al-Andalus."},

    {type:"fb",
     s:"Camina por la {1}, no por la carretera.",
     a:["acera"],
     opts:["acera","barrera","baldosa","bocacalle"],
     hint:"The paved path alongside a road where pedestrians walk safely.",
     sSrc:"Walk on the {1}, not on the road."},

    {type:"teach", trg:"el anexo", src:"the annex, attachment", pos:"noun", gender:"m",
     note:"Masculine noun. An added building or document.\nEl anexo del hotel = hotel annex.",
     example:"A: La reuni\u00f3n es en el anexo del edificio.\nB: \u00bfEl edificio nuevo de atr\u00e1s?",
     exampleSrc:"A: The meeting is in the annex of the building.\nB: The new building in the back?",
     funFact:"From Latin 'annexus' (joined to). In emails, 'ver anexo' means 'see attachment'. The word works for both physical and digital additions."},

    {type:"teach", trg:"la brecha", src:"the gap, breach", pos:"noun", gender:"f",
     note:"Feminine noun. Physical crack or social divide.\nBrecha salarial = wage gap.",
     example:"A: Hay una brecha entre ricos y pobres.\nB: Es un problema global.",
     exampleSrc:"A: There is a gap between rich and poor.\nB: It is a global problem.",
     funFact:"From Frankish 'breka' (break). Used in modern discourse: 'brecha digital' (digital divide), 'brecha generacional' (generation gap)."},

    {type:"teach", trg:"el bote", src:"the boat, can, jar", pos:"noun", gender:"m",
     note:"Masculine noun. Multiple meanings depending on context.\nUn bote de pintura = a can of paint.",
     example:"A: \u00bfTienes un bote vac\u00edo?\nB: S\u00ed, hay uno en la cocina.",
     exampleSrc:"A: Do you have an empty jar?\nB: Yes, there is one in the kitchen.",
     funFact:"Multiple origins: 'boat' from Old English 'bat'; 'can/jar' from French 'botte'. In bars, the 'bote' is the communal tip jar."},

    {type:"teach", trg:"la boutique", src:"the boutique", pos:"noun", gender:"f",
     note:"Feminine noun. A small, elegant shop.\nBorrowed from French.",
     example:"A: He encontrado una boutique preciosa.\nB: \u00bfQu\u00e9 venden?",
     exampleSrc:"A: I have found a lovely boutique.\nB: What do they sell?",
     funFact:"From French 'boutique', originally from Greek 'apotheke' (storehouse). Same root as 'botica' (pharmacy) and English 'apothecary'."},

    {type:"mc",
     q:"\u00bfQu\u00e9 es una bocacalle?",
     opts:["La entrada a una calle lateral","Un restaurante de comida r\u00e1pida","Un tipo de pan","Una parada de autob\u00fas"],
     ans:"La entrada a una calle lateral",
     hint:"A compound word: 'boca' (mouth) + 'c...' (street). Where one street opens into another."},

    {type:"teach", trg:"el cabo", src:"the cape, end, corporal", pos:"noun", gender:"m",
     note:"Masculine noun. Multiple meanings.\nAl cabo de = at the end of. Cabo de Gata = famous cape.",
     example:"A: Al cabo de una hora, lleg\u00f3 el autob\u00fas.\nB: \u00a1Qu\u00e9 espera tan larga!",
     exampleSrc:"A: At the end of an hour, the bus arrived.\nB: What a long wait!",
     funFact:"From Latin 'caput' (head). A geographic 'cabo' is the 'head' of land jutting into the sea. A military 'cabo' is a corporal (head of a small group)."},

    {type:"teach", trg:"el ajuste", src:"the adjustment", pos:"noun", gender:"m",
     note:"Masculine noun. From 'ajustar' (to adjust).\nAjuste de cuentas = settling of scores.",
     example:"A: Necesitamos un ajuste en el presupuesto.\nB: S\u00ed, hay que recortar gastos.",
     exampleSrc:"A: We need an adjustment in the budget.\nB: Yes, we need to cut expenses.",
     funFact:"From 'a-' + 'justo' (just, exact). Making something 'justo' (right). The expression 'ajuste de cuentas' has a menacing tone in crime contexts."},

    {type:"fb",
     s:"La {1} salarial entre hombres y mujeres sigue siendo un problema.",
     a:["brecha"],
     opts:["brecha","barrera","baldosa","boutique"],
     hint:"A noun meaning 'gap' or 'divide', often used in social and economic discussions.",
     sSrc:"The wage {1} between men and women remains a problem."},

    {type:"match", pairs:[
      {trg:"acera", src:"sidewalk"},
      {trg:"bulevar", src:"boulevard"},
      {trg:"arrabal", src:"outskirts"},
      {trg:"brecha", src:"gap"},
      {trg:"altavoz", src:"loudspeaker"}
    ]}
  ]
};
export default LESSON_5;
