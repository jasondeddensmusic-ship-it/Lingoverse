// Batch 6 — Unit 05 extra lesson. A casa: Household Chores & Maintenance
const BATCH6_L1 = {id:"itv2_u05l_b6_1", title:"Le faccende domestiche", icon:"\u{1F9F9}", xp:15, board:true, steps:[
{type:"intro", title:"Le faccende domestiche",
 desc:"Learn vocabulary for household chores, cleaning, and basic home maintenance.",
 goals:["Name common household chores","Discuss cleaning and tidying up","Talk about home maintenance tasks"]},

{type:"teach", trg:"le faccende", src:"the chores / housework", pos:"noun", gender:"f",
 note:"Feminine plural noun. Singular: la faccenda.\n'Fare le faccende' = to do the housework.",
 example:"A: Chi fa le faccende a casa tua?\nB: Le facciamo tutti insieme.",
 exampleSrc:"A: Who does the chores at your house?\nB: We all do them together.",
 funFact:"'Faccenda' comes from Latin 'facienda' (things to be done). The expression 'una brutta faccenda' means a messy situation, not housework."},

{type:"teach", trg:"spazzare", src:"to sweep", pos:"verb", gender:null,
 note:"Regular -are verb. spazzo, spazzi, spazza.\nUsed with a broom on floors.",
 example:"A: Devo spazzare il pavimento.\nB: La scopa e nell'armadio.",
 exampleSrc:"A: I need to sweep the floor.\nB: The broom is in the closet.",
 funFact:"'Spazzare' shares its root with 'spazzatura' (garbage/rubbish) and 'spazzino' (street sweeper), an important figure in Italian cities."},

{type:"teach", trg:"la scopa", src:"the broom", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le scope.\nAlso the name of a popular Italian card game.",
 example:"A: Dove hai messo la scopa?\nB: E dietro la porta.",
 exampleSrc:"A: Where did you put the broom?\nB: It is behind the door.",
 funFact:"'Scopa' is also the name of Italy's most popular card game, played with a 40-card Italian deck. The name means 'sweep' because you sweep cards off the table."},

{type:"teach", trg:"lavare i piatti", src:"to wash the dishes", pos:"verb", gender:null,
 note:"Expression: lavare (to wash) + i piatti (the dishes).\nAlso 'fare i piatti.'",
 example:"A: Puoi lavare i piatti stasera?\nB: Va bene, tu asciughi?",
 exampleSrc:"A: Can you wash the dishes tonight?\nB: Alright, will you dry?",
 funFact:"Despite the widespread use of dishwashers, many Italian families still wash dishes by hand. 'Lavare a mano' is considered more thorough by traditionalists."},

{type:"teach", trg:"asciugare", src:"to dry", pos:"verb", gender:null,
 note:"Regular -are verb. asciugo, asciughi, asciuga.\nUsed for dishes, clothes, and hands.",
 example:"A: Puoi asciugare i bicchieri?\nB: Certo, passo lo strofinaccio.",
 exampleSrc:"A: Can you dry the glasses?\nB: Sure, I will use the dish towel.",
 funFact:"'Asciugare' comes from Latin 'exsucare' (to remove juice/moisture). The 'asciugatrice' (tumble dryer) is less common in Italy, where line-drying is preferred."},

{type:"teach", trg:"stirare", src:"to iron", pos:"verb", gender:null,
 note:"Regular -are verb. stiro, stiri, stira.\nUsed for clothes with an iron.",
 example:"A: Devo stirare queste camicie.\nB: Il ferro da stiro e in lavanderia.",
 exampleSrc:"A: I need to iron these shirts.\nB: The iron is in the laundry room.",
 funFact:"Italians take ironing seriously. Even casual clothes like jeans may be ironed. The 'ferro da stiro' (iron, literally 'ironing iron') is a household essential."},

{type:"teach", trg:"la lavatrice", src:"the washing machine", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le lavatrici.\nFrom 'lavare' (to wash) + suffix '-trice.'",
 example:"A: La lavatrice e rotta!\nB: Chiamiamo il tecnico.",
 exampleSrc:"A: The washing machine is broken!\nB: Let's call the technician.",
 funFact:"Italian washing machines are typically smaller than American ones and are loaded from the front. Most Italian homes do not have a separate dryer."},

{type:"teach", trg:"l'aspirapolvere", src:"the vacuum cleaner", pos:"noun", gender:"m",
 note:"Masculine noun. Compound: aspira (sucks) + polvere (dust).\nPlural: gli aspirapolvere.",
 example:"A: Passo l'aspirapolvere in salotto.\nB: Grazie, dopo faccio la camera.",
 exampleSrc:"A: I will vacuum the living room.\nB: Thanks, then I will do the bedroom.",
 funFact:"The word literally means 'dust sucker,' a wonderfully descriptive Italian compound. 'Passare l'aspirapolvere' (to pass the vacuum) is the standard expression."},

{type:"teach", trg:"buttare via", src:"to throw away", pos:"verb", gender:null,
 note:"Separable verb phrase. butto via, butti via, butta via.\n'Via' means 'away.'",
 example:"A: Posso buttare via questi giornali vecchi?\nB: Si, non servono piu.",
 exampleSrc:"A: Can I throw away these old newspapers?\nB: Yes, they are no longer needed.",
 funFact:"Italy has strict recycling rules. You cannot simply 'buttare via' everything in one bin. Cities have color-coded bags for different materials."},

{type:"teach", trg:"la polvere", src:"the dust", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le polveri.\nAlso means 'powder' (e.g., in cooking).",
 example:"A: C'e molta polvere sui mobili.\nB: Prendo un panno umido.",
 exampleSrc:"A: There is a lot of dust on the furniture.\nB: I will get a damp cloth.",
 funFact:"'Mordere la polvere' (to bite the dust) exists in Italian too. 'Polvere da sparo' is gunpowder, and 'zucchero a velo' is powdered sugar."},

{type:"teach", trg:"riordinare", src:"to tidy up / to put in order", pos:"verb", gender:null,
 note:"Regular -are verb. riordino, riordini, riordina.\nRi + ordinare (to order again).",
 example:"A: Devi riordinare la tua camera!\nB: Lo faccio dopo pranzo.",
 exampleSrc:"A: You need to tidy up your room!\nB: I will do it after lunch.",
 funFact:"Every Italian child has heard 'Riordina la tua camera!' The prefix 'ri-' (again) implies restoring order that has been lost."},

{type:"teach", trg:"il secchio", src:"the bucket", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i secchi.\nUsed for mopping and cleaning.",
 example:"A: Riempi il secchio con l'acqua calda.\nB: Aggiungo anche il detersivo?",
 exampleSrc:"A: Fill the bucket with hot water.\nB: Shall I add detergent too?",
 funFact:"'Piovere a secchiate' (to rain in bucketfuls) is the Italian equivalent of 'raining cats and dogs.'"},

{type:"teach", trg:"il detersivo", src:"the detergent / cleaning product", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i detersivi.\nFrom Latin 'detergere' (to wipe off).",
 example:"A: Che detersivo usi per i piatti?\nB: Uno ecologico, senza plastica.",
 exampleSrc:"A: What detergent do you use for dishes?\nB: An ecological one, without plastic.",
 funFact:"Italy has a strong tradition of homemade cleaning products. Many nonnas still swear by vinegar and bicarbonate as the best detersivi."},

{type:"teach", trg:"appendere", src:"to hang / to hang up", pos:"verb", gender:null,
 note:"Irregular -ere verb. appendo, appendi, appende.\nPast participle: appeso.",
 example:"A: Dove appendo i vestiti?\nB: Sullo stendino in balcone.",
 exampleSrc:"A: Where do I hang the clothes?\nB: On the drying rack on the balcony.",
 funFact:"Italian balconies are famously used for hanging laundry. The 'stendino' (drying rack) and the clothesline are more common than tumble dryers."},

{type:"mc", q:"Cosa usi per pulire il pavimento dalla polvere?",
 opts:["la scopa","il secchio","la lavatrice","il detersivo"],
 ans:"la scopa",
 hint:"A long tool with bristles at the bottom. Also the name of a card game."},

{type:"fb", s:"Devo {1} queste camicie per domani.", a:["stirare"],
 opts:["stirare","spazzare","asciugare","appendere"],
 hint:"To use a hot iron to remove wrinkles from clothing.",
 sSrc:"I need to {1} these shirts for tomorrow."},

{type:"match", pairs:[
 {trg:"spazzare", src:"to sweep"},
 {trg:"stirare", src:"to iron"},
 {trg:"asciugare", src:"to dry"},
 {trg:"appendere", src:"to hang"}
]},

{type:"mc", q:"Come si chiama la macchina che aspira la polvere?",
 opts:["l'aspirapolvere","la lavatrice","il detersivo","lo stendino"],
 ans:"l'aspirapolvere",
 hint:"A compound word: it sucks (aspira) dust (polvere)."},

{type:"fb", s:"Puoi {1} questi giornali vecchi? Non servono piu.", a:["buttare via"],
 opts:["buttare via","riordinare","appendere","lavare"],
 hint:"To dispose of something you no longer need. Two words.",
 sSrc:"Can you {1} these old newspapers? They are no longer needed."},

{type:"mc", q:"Cosa metti nell'acqua per lavare i piatti?",
 opts:["il detersivo","la polvere","il secchio","la scopa"],
 ans:"il detersivo",
 hint:"A cleaning product that removes grease and dirt from dishes."},

{type:"fb", s:"La {1} e rotta, devo lavare i vestiti a mano!", a:["lavatrice"],
 opts:["lavatrice","scopa","polvere","faccenda"],
 hint:"The machine that washes clothes automatically.",
 sSrc:"The {1} is broken, I have to wash the clothes by hand!"},

{type:"match", pairs:[
 {trg:"il secchio", src:"bucket"},
 {trg:"il detersivo", src:"detergent"},
 {trg:"la polvere", src:"dust"},
 {trg:"le faccende", src:"chores"}
]}
,{type:"match",pairs:[{trg:"lavare i piatti",src:"to wash the dishes"},{trg:"riordinare",src:"to tidy up / to put in order"}]}]};
export default BATCH6_L1;
