// Batch 7. Unit 07 extra lesson. Al ristorante: Beverages & Table Manners
const BATCH7_L1 = {id:"itv2_u07l_b7_1", title:"Le bevande e il galateo", icon:"\u{1F377}", xp:15, board:true, steps:[
{type:"intro", title:"Le bevande e il galateo",
 desc:"Learn vocabulary for drinks, toasting customs, and Italian table etiquette.",
 goals:["Order various beverages at a restaurant","Understand Italian dining customs","Use polite table expressions"]},

{type:"teach", trg:"la caraffa", src:"the carafe / pitcher", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le caraffe.\n'Una caraffa d'acqua' = a carafe of water.",
 example:"A: Una caraffa d'acqua, per favore.\nB: Naturale o frizzante?",
 exampleSrc:"A: A carafe of water, please.\nB: Still or sparkling?",
 funFact:"In Italian restaurants, you can order a 'caraffa' of house wine (vino della casa), which is much cheaper than bottled wine and often just as good."},

{type:"teach", trg:"il digestivo", src:"the after-dinner drink", pos:"noun", gender:"m",
 note:"Masculine noun. A drink to aid digestion after a meal.\nCommon: amaro, grappa, limoncello.",
 example:"A: Vuole un digestivo?\nB: Si, un amaro, grazie.",
 exampleSrc:"A: Would you like a digestive?\nB: Yes, a bitter, thank you.",
 funFact:"The digestivo is a sacred Italian ritual after a big meal. 'Amaro' (bitter herbal liqueur) is the most traditional choice. Every region has its own recipe."},

{type:"teach", trg:"l'aperitivo", src:"the aperitif / pre-dinner drink", pos:"noun", gender:"m",
 note:"Masculine noun. A drink before dinner.\nOften comes with free snacks (stuzzichini).",
 example:"A: Prendiamo un aperitivo?\nB: Si, uno Spritz, per favore!",
 exampleSrc:"A: Shall we have an aperitif?\nB: Yes, a Spritz, please!",
 funFact:"The Italian 'aperitivo' tradition started in Turin in the 18th century. The Spritz, from Venice, and the Negroni, from Florence, are Italy's most famous aperitivo drinks."},

{type:"teach", trg:"il ghiaccio", src:"the ice", pos:"noun", gender:"m",
 note:"Masculine noun. 'Con ghiaccio' = with ice.\n'Senza ghiaccio' = without ice.",
 example:"A: Lo vuole con ghiaccio?\nB: Si, con tanto ghiaccio, per favore.",
 exampleSrc:"A: Would you like it with ice?\nB: Yes, with lots of ice, please.",
 funFact:"Italians traditionally drink less ice than Americans. Asking for 'tanto ghiaccio' (lots of ice) marks you as a foreigner. Many Italians believe cold drinks are bad for digestion."},

{type:"teach", trg:"la cannuccia", src:"the straw", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le cannucce.\nDiminutive of 'canna' (reed/cane).",
 example:"A: Vuole una cannuccia?\nB: No, grazie. Bevo dal bicchiere.",
 exampleSrc:"A: Would you like a straw?\nB: No, thank you. I drink from the glass.",
 funFact:"Italy banned single-use plastic straws in 2022. Restaurants now offer paper or biodegradable alternatives. 'Cannuccia' literally means 'little reed.'"},

{type:"teach", trg:"il tovagliolo", src:"the napkin", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i tovaglioli.\nFrom 'tavola' (table).",
 example:"A: Mi scusi, posso avere un altro tovagliolo?\nB: Certo, subito.",
 exampleSrc:"A: Excuse me, may I have another napkin?\nB: Of course, right away.",
 funFact:"In traditional Italian dining, the napkin goes on your lap, never tucked into your collar. 'Tovagliolo di stoffa' (cloth napkin) is used in finer restaurants."},

{type:"teach", trg:"il brindisi", src:"the toast (with drinks)", pos:"noun", gender:"m",
 note:"Masculine noun. 'Fare un brindisi' = to make a toast.\n'Brindare' = to toast.",
 example:"A: Facciamo un brindisi!\nB: Alla salute! Cin cin!",
 exampleSrc:"A: Let us make a toast!\nB: To health! Cheers!",
 funFact:"The word 'brindisi' may come from the German 'bring dir's' (I bring it to you). In Italy, you must maintain eye contact during a toast, or it brings bad luck."},

{type:"teach", trg:"il coltello", src:"the knife", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i coltelli.\n'Coltello da tavola' = table knife.",
 example:"A: Mi serve un coltello per la carne.\nB: Eccone uno affilato.",
 exampleSrc:"A: I need a knife for the meat.\nB: Here is a sharp one.",
 funFact:"In Italian table setting, the knife goes to the right of the plate with the blade facing inward. Using a knife to cut pasta is considered very bad form."},

{type:"teach", trg:"il cucchiaio", src:"the spoon", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i cucchiai.\nDiminutive: 'cucchiaino' = teaspoon.",
 example:"A: Posso avere un cucchiaio per la minestra?\nB: Eccolo.",
 exampleSrc:"A: May I have a spoon for the soup?\nB: Here it is.",
 funFact:"The 'cucchiaio' is used for soup and dessert, never for pasta. Italians twirl spaghetti with just a fork. Using a spoon to help is considered a tourist habit."},

{type:"teach", trg:"la forchetta", src:"the fork", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le forchette.\nFrom Latin 'furca' (pitchfork).",
 example:"A: Questa forchetta e sporca.\nB: Mi scusi, ne porto subito un'altra.",
 exampleSrc:"A: This fork is dirty.\nB: I apologize, I will bring another one right away.",
 funFact:"Italy is credited with popularizing the table fork in Europe. Catherine de' Medici brought forks to France in the 16th century. Before that, Europeans ate with their hands."},

{type:"teach", trg:"apparecchiare", src:"to set the table", pos:"verb", gender:null,
 note:"Regular -are verb. apparecchio, apparecchi, apparecchia.\n'Sparecchiare' = to clear the table.",
 example:"A: Puoi apparecchiare la tavola?\nB: Si, per quante persone?",
 exampleSrc:"A: Can you set the table?\nB: Yes, for how many people?",
 funFact:"Setting the table is an art in Italy. A full setting includes: piatto piano (flat plate), piatto fondo (soup plate), forchetta, coltello, cucchiaio, bicchiere, and tovagliolo."},

{type:"teach", trg:"il piattino", src:"the small plate / saucer", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i piattini.\nDiminutive of 'piatto' (plate).",
 example:"A: Metti il pane sul piattino.\nB: Non direttamente sulla tavola?",
 exampleSrc:"A: Put the bread on the small plate.\nB: Not directly on the table?",
 funFact:"The 'piattino' for bread is optional in Italy. Many Italians place bread directly on the tablecloth, a habit that surprises foreign visitors used to bread plates."},

{type:"teach", trg:"versare", src:"to pour", pos:"verb", gender:null,
 note:"Regular -are verb. verso, versi, versa.\n'Versare il vino' = to pour the wine.",
 example:"A: Ti verso un po' di vino?\nB: Si, ma solo mezzo bicchiere.",
 exampleSrc:"A: Shall I pour you some wine?\nB: Yes, but only half a glass.",
 funFact:"Italian wine etiquette: never fill a glass more than one-third full (for red) or halfway (for white). This lets the wine breathe and concentrates the aroma."},

{type:"mc", q:"Che cosa si beve DOPO cena in Italia?",
 opts:["il digestivo","l'aperitivo","il caffè","il succo"],
 ans:"il digestivo",
 hint:"An after-dinner drink meant to help your stomach. Often bitter or herbal."},

{type:"fb", s:"Facciamo un {1}! Alla salute!", a:["brindisi"],
 opts:["brindisi","aperitivo","digestivo","bicchiere"],
 hint:"The act of raising your glass and saying something before drinking together.",
 sSrc:"Let us make a {1}! To health!"},

{type:"match", pairs:[
 {trg:"il coltello", src:"knife"},
 {trg:"la forchetta", src:"fork"},
 {trg:"il cucchiaio", src:"spoon"},
 {trg:"il tovagliolo", src:"napkin"}
,{trg:"versare",src:"to pour"}]},

{type:"mc", q:"Con che cosa NON si mangiano gli spaghetti in Italia?",
 opts:["Con il piatto","Con il cucchiaio","Con la forchetta","Con le mani"],
 ans:"Con il cucchiaio",
 hint:"Italians only use one utensil for twirling pasta. Using a second one is for tourists."},

{type:"fb", s:"Ti {1} un po' di vino rosso?", a:["verso"],
 opts:["verso","bevo","mangio","porto"],
 hint:"To transfer liquid from a bottle into a glass.",
 sSrc:"Shall I {1} you some red wine?"},

{type:"mc", q:"Che cos'e l'aperitivo?",
 opts:["A dessert wine","A breakfast item","A pre-dinner drink with snacks","A type of pasta"],
 ans:"A pre-dinner drink with snacks",
 hint:"The d... you have before d..., often with free small bites (stuzzichini)."},

{type:"fb", s:"Puoi {1} la tavola? Arrivano gli ospiti.", a:["apparecchiare"],
 opts:["apparecchiare","cucinare","versare","ordinare"],
 hint:"To arrange plates, cutlery, and glasses on the dining table before a meal.",
 sSrc:"Can you {1} the table? The guests are arriving."},

{type:"match", pairs:[
 {trg:"la caraffa", src:"carafe"},
 {trg:"il piattino", src:"saucer"},
 {trg:"la cannuccia", src:"straw"},
 {trg:"il ghiaccio", src:"ice"}
]}
]};
export default BATCH7_L1;
