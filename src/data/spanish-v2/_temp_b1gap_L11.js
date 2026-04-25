// L11: Home & Cleaning - Household items, maintenance, and daily routines
const LESSON_11 = {
  id:"esv2_b1gap_l11", title:"El hogar", icon:"\u{1F3E0}", xp:15, board:true,
  steps:[
    {type:"intro", title:"El hogar",
     desc:"Take care of your home. Learn vocabulary for household items, cleaning, and home maintenance.",
     goals:["Learn 20 home and cleaning words","Describe household tasks","Talk about home maintenance"]},

    {type:"teach", trg:"el aspirador", src:"the vacuum cleaner", pos:"noun", gender:"m",
     note:"Masculine noun. From 'aspirar' (to aspirate, suck in).\nPasar el aspirador = to vacuum.",
     example:"A: \u00bfHas pasado el aspirador?\nB: S\u00ed, el sal\u00f3n est\u00e1 limpio.",
     exampleSrc:"A: Have you vacuumed?\nB: Yes, the living room is clean.",
     funFact:"From 'aspirar' (to breathe in, to suck). The machine 'breathes in' dust. In some countries, 'la aspiradora' (feminine) is more common."},

    {type:"teach", trg:"el blanqueador", src:"the bleach", pos:"noun", gender:"m",
     note:"Masculine noun. A cleaning product that whitens.\nAlso: lej\u00eda (more common in Spain).",
     example:"A: Usa blanqueador para las manchas.\nB: \u00bfNo es demasiado fuerte?",
     exampleSrc:"A: Use bleach for the stains.\nB: Is it not too strong?",
     funFact:"From 'blanquear' (to whiten), from 'blanco' (white). In Spain, 'lej\u00eda' is the everyday word; 'blanqueador' is more common in Latin America."},

    {type:"teach", trg:"blanquear", src:"to bleach, to whiten", pos:"verb", gender:null,
     note:"Regular -ar verb. To make white or clean.\nAlso slang: blanquear dinero = to launder money.",
     example:"A: Hay que blanquear las paredes.\nB: S\u00ed, est\u00e1n un poco amarillas.",
     exampleSrc:"A: We need to whiten the walls.\nB: Yes, they are a bit yellow.",
     funFact:"From 'blanco' (white). The money laundering meaning parallels English: dirty money is 'cleaned' or 'whitened' through legitimate businesses."},

    {type:"teach", trg:"la bombona", src:"the gas canister", pos:"noun", gender:"f",
     note:"Feminine noun. A butane or propane tank.\nBombona de butano = butane canister.",
     example:"A: Hay que cambiar la bombona de butano.\nB: Llama para que traigan una nueva.",
     exampleSrc:"A: We need to change the butane canister.\nB: Call so they bring a new one.",
     funFact:"Augmentative of 'bomba' (pump). Many older Spanish apartments still use butane bombonas for cooking and hot water. The orange tanks are iconic."},

    {type:"teach", trg:"el batidor", src:"the whisk, beater", pos:"noun", gender:"m",
     note:"Masculine noun. A kitchen tool for mixing.\nBatidor de mano = hand whisk.",
     example:"A: \u00bfD\u00f3nde est\u00e1 el batidor?\nB: En el caj\u00f3n, al lado de las cucharas.",
     exampleSrc:"A: Where is the whisk?\nB: In the drawer, next to the spoons.",
     funFact:"From 'batir' (to beat, whisk). The '-idor/-ador' suffix creates tool nouns: batir > batidor, asperjar > aspersor, aspirar > aspirador."},

    {type:"teach", trg:"el apoyabrazos", src:"the armrest", pos:"noun", gender:"m",
     note:"Masculine noun. Compound: apoya (support) + brazos (arms).\nPlural same form.",
     example:"A: Este sill\u00f3n tiene apoyabrazos muy c\u00f3modos.\nB: S\u00ed, es perfecto para leer.",
     exampleSrc:"A: This armchair has very comfortable armrests.\nB: Yes, it is perfect for reading.",
     funFact:"A compound noun: 'apoyar' (to support) + 'brazos' (arms). Like 'parabrisas' (windshield) and 'sacacorchos' (corkscrew), it does not change in plural."},

    {type:"mc",
     q:"\u00bfQu\u00e9 usas para limpiar la alfombra?",
     opts:["el aspirador","el batidor","el blanqueador","el apoyabrazos"],
     ans:"el aspirador",
     hint:"An electrical machine that sucks up dust and dirt from floors and carpets."},

    {type:"teach", trg:"ablandar", src:"to soften", pos:"verb", gender:null,
     note:"Regular -ar verb. To make soft.\nAblandar la carne = to tenderize meat.",
     example:"A: Hay que ablandar la carne antes de cocinarla.\nB: La pongo en adobo toda la noche.",
     exampleSrc:"A: You need to soften the meat before cooking it.\nB: I will marinate it overnight.",
     funFact:"From 'a-' + 'blando' (soft). Also used figuratively: 'ablandar el coraz\u00f3n' (to soften someone's heart). Opposite: 'endurecer' (to harden)."},

    {type:"teach", trg:"el borrador", src:"the eraser, draft", pos:"noun", gender:"m",
     note:"Masculine noun. Two meanings: an eraser or a rough draft.\nBorrador de un texto = draft.",
     example:"A: \u00bfTienes un borrador? Necesito corregir algo.\nB: S\u00ed, aqu\u00ed tienes.",
     exampleSrc:"A: Do you have an eraser? I need to correct something.\nB: Yes, here you go.",
     funFact:"From 'borrar' (to erase). Both meanings connect: a draft is something you will 'erase' and rewrite. An eraser is the tool to do it."},

    {type:"teach", trg:"la boina", src:"the beret", pos:"noun", gender:"f",
     note:"Feminine noun. A flat, round cap.\nTraditional in the Basque Country and Navarra.",
     example:"A: Mi abuelo siempre lleva boina.\nB: Es muy t\u00edpico en el norte de Espa\u00f1a.",
     exampleSrc:"A: My grandfather always wears a beret.\nB: It is very typical in northern Spain.",
     funFact:"From Basque 'boina'. The beret is deeply associated with Basque and Navarrese culture. Che Guevara's famous beret made it a global icon."},

    {type:"teach", trg:"la bufanda", src:"the scarf", pos:"noun", gender:"f",
     note:"Feminine noun. Worn around the neck for warmth.\nAlso: fan scarf at football matches.",
     example:"A: Ponte la bufanda, hace mucho fr\u00edo.\nB: Tienes raz\u00f3n, est\u00e1 helando.",
     exampleSrc:"A: Put on your scarf, it is very cold.\nB: You are right, it is freezing.",
     funFact:"Possibly from Italian 'buffare' (to puff). Football fans wear team bufandas to matches. 'Bufanda' is also slang for a team's fan identity."},

    {type:"fb",
     s:"Hay que {1} la carne con un poco de lim\u00f3n antes de asarla.",
     a:["ablandar"],
     opts:["ablandar","blanquear","aspirar","armar"],
     hint:"A verb meaning to make something soft or tender, especially food before cooking.",
     sSrc:"You need to {1} the meat with a bit of lemon before grilling it."},

    {type:"teach", trg:"el alumbrar", src:"to light up, to illuminate", pos:"noun", gender:null,
     note:"Regular -ar verb. To provide light.\nAlumbrado p\u00fablico = street lighting.",
     example:"A: Las velas alumbran toda la habitaci\u00f3n.\nB: Qu\u00e9 ambiente tan bonito.",
     exampleSrc:"A: The candles light up the whole room.\nB: What a beautiful atmosphere.",
     funFact:"From Latin 'illuminare' via 'lumbre' (fire, light). 'Alumbrado' (lighting) is used for Christmas lights: 'el alumbrado navide\u00f1o'."},

    {type:"teach", trg:"anudar", src:"to tie, to knot", pos:"verb", gender:null,
     note:"Regular -ar verb. From 'nudo' (knot).\nAnudar la corbata = to tie a necktie.",
     example:"A: \u00bfMe ayudas a anudar la corbata?\nB: Claro, es f\u00e1cil con pr\u00e1ctica.",
     exampleSrc:"A: Can you help me tie my necktie?\nB: Sure, it is easy with practice.",
     funFact:"From 'a-' + 'nudo' (knot). 'Nudo' comes from Latin 'nodus'. The opposite is 'desanudar' or 'desatar' (to untie)."},

    {type:"teach", trg:"archivar", src:"to file, to archive", pos:"verb", gender:null,
     note:"Regular -ar verb. To store documents in order.\nArchivar un caso = to shelve a case.",
     example:"A: Hay que archivar estos documentos.\nB: Los pongo en la carpeta azul.",
     exampleSrc:"A: We need to file these documents.\nB: I will put them in the blue folder.",
     funFact:"From 'archivo' (archive), from Latin 'archivum', from Greek 'arkheion' (government building). 'Archivar un caso' in law means to close it."},

    {type:"teach", trg:"el bocata", src:"the sandwich (colloquial)", pos:"noun", gender:"m",
     note:"Masculine noun. Informal word for 'bocadillo'.\nVery common in casual Spanish.",
     example:"A: \u00bfQuieres un bocata de jam\u00f3n?\nB: \u00a1S\u00ed, con tomate y aceite!",
     exampleSrc:"A: Do you want a ham sandwich?\nB: Yes, with tomato and olive oil!",
     funFact:"Slang shortening of 'bocadillo' (sandwich on a baguette). The '-ata' ending is productive in Spanish slang: 'cubata' (rum and coke), 'bocata'."},

    {type:"mc",
     q:"\u00bfQu\u00e9 haces con documentos que ya no necesitas en tu escritorio?",
     opts:["blanquearlos","archivarlos","anudarlos","ablandarlos"],
     ans:"archivarlos",
     hint:"The process of organizing and storing papers in a systematic filing system."},

    {type:"teach", trg:"alargar", src:"to lengthen, to extend", pos:"verb", gender:null,
     note:"Regular -ar verb. To make longer.\nAlargar la mano = to reach out one's hand.",
     example:"A: Hay que alargar un poco el vestido.\nB: S\u00ed, le queda corto.",
     exampleSrc:"A: We need to lengthen the dress a bit.\nB: Yes, it is too short for her.",
     funFact:"From 'a-' + 'largo' (long). The opposite is 'acortar' (to shorten). 'Alargarse' reflexively means an event running longer than expected."},

    {type:"teach", trg:"alterar", src:"to alter, to disturb", pos:"verb", gender:null,
     note:"Regular -ar verb. To change or upset.\nNo te alteres = do not get upset.",
     example:"A: No te alteres, todo tiene soluci\u00f3n.\nB: Tienes raz\u00f3n, voy a calmarme.",
     exampleSrc:"A: Do not get upset, everything has a solution.\nB: You are right, I will calm down.",
     funFact:"From Latin 'alterare' (to change). 'Alterarse' (reflexive) means to become agitated. 'Alterar el orden p\u00fablico' = to disturb the peace."},

    {type:"fb",
     s:"\u00bfMe ayudas a {1} la corbata? No s\u00e9 hacer el nudo.",
     a:["anudar"],
     opts:["anudar","alargar","alterar","archivar"],
     hint:"A verb meaning to tie a knot, derived from the noun 'nudo' (knot).",
     sSrc:"Can you help me {1} the necktie? I do not know how to make the knot."},

    {type:"match", pairs:[
      {trg:"aspirador", src:"vacuum cleaner"},
      {trg:"borrador", src:"eraser/draft"},
      {trg:"bufanda", src:"scarf"},
      {trg:"boina", src:"beret"},
      {trg:"bocata", src:"sandwich (slang)"}
    ]}
  ]
};
export default LESSON_11;
