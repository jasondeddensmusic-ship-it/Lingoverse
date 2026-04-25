// Batch 4. Unit 05, Lesson 1: Furniture & Household Objects
const BATCH4_U05_L1 = {
  id:"itv2_u05l_b4_1", title:"Mobili e oggetti di casa", icon:"\uD83D\uDECB", xp:15, board:true,
  steps:[
    {type:"intro", title:"Mobili e oggetti di casa",
     desc:"Learn Italian names for furniture and common household objects found in every home.",
     goals:["Name furniture in different rooms","Describe your home setup","Use prepositions of location with furniture"]},

    {type:"teach", trg:"il divano", src:"the sofa / couch", pos:"noun", gender:"m",
     note:"Masculine. Plural: i divani. The centerpiece of the 'salotto.'\nFrom Arabic 'diwan' (council/bench).",
     example:"A: Il divano e comodo?\nB: Si, e molto comodo!",
     exampleSrc:"A: Is the sofa comfortable?\nB: Yes, it is very comfortable!",
     funFact:"From Arabic 'diwan' (a long bench in council rooms), which passed through Turkish into Italian. Italians take furniture seriously: an Italian living room without a proper divano is unthinkable."},

    {type:"teach", trg:"la sedia", src:"the chair", pos:"noun", gender:"f",
     note:"Feminine. Plural: le sedie. From Latin 'sedia' (seat).\nA basic, backrest chair without arms.",
     example:"A: Quante sedie ci sono in cucina?\nB: Ci sono quattro sedie.",
     exampleSrc:"A: How many chairs are in the kitchen?\nB: There are four chairs.",
     funFact:"Italian distinguishes types of seating: 'sedia' (basic chair), 'poltrona' (armchair), 'sgabello' (stool), 'panchina' (park bench). Each has its own word with no overlap."},

    {type:"teach", trg:"la poltrona", src:"the armchair", pos:"noun", gender:"f",
     note:"Feminine. Plural: le poltrone. A comfortable chair with arms.\n'Poltrona' also means a comfortable/lazy person (slang).",
     example:"A: Mi siedo nella poltrona.\nB: Attento, e la poltrona del nonno!",
     exampleSrc:"A: I am sitting in the armchair.\nB: Careful, that is grandpa's armchair!",
     funFact:"In Italian slang, 'poltrona' can describe a lazy person who loves sitting. 'Poltrone!' (couch potato!) is a playful insult. In theaters, 'le poltrone' are the premium seats in the stalls."},

    {type:"teach", trg:"il letto", src:"the bed", pos:"noun", gender:"m",
     note:"Masculine. 'Camera da letto' = bedroom. 'Andare a letto' = to go to bed.\nFrom Latin 'lectus.'",
     example:"A: Il letto e grande.\nB: Si, e un letto matrimoniale.",
     exampleSrc:"A: The bed is big.\nB: Yes, it is a double bed.",
     funFact:"Italian bed sizes: 'letto singolo' (single), 'letto matrimoniale' (double, literally 'marriage bed'), and the rare 'letto a una piazza e mezza' (one-and-a-half size). The 'matrimoniale' is the standard adult bed."},

    {type:"teach", trg:"il tavolo", src:"the table", pos:"noun", gender:"m",
     note:"Masculine. 'Il tavolo da pranzo' = dining table.\n'Tavola' (feminine) = table when set for a meal.",
     example:"A: Mettiamo tutto sul tavolo.\nB: Il tavolo e già pieno!",
     exampleSrc:"A: Let's put everything on the table.\nB: The table is already full!",
     funFact:"Italian has both 'tavolo' (the furniture piece) and 'tavola' (the table ready for a meal). 'A tavola!' (to the table!) is the call that lunch is ready. This distinction reflects how central meals are to Italian life."},

    {type:"teach", trg:"l'armadio", src:"the wardrobe / closet", pos:"noun", gender:"m",
     note:"Masculine. Plural: gli armadi. From Latin 'armarium' (storage for weapons).\nThe main clothing storage.",
     example:"A: Dov'e la mia camicia?\nB: Nell'armadio.",
     exampleSrc:"A: Where is my shirt?\nB: In the wardrobe.",
     funFact:"From Latin 'armarium,' originally a cabinet for weapons ('arma'). Over time, it became a clothes storage. Italian homes traditionally have large freestanding wardrobes rather than built-in closets."},

    {type:"teach", trg:"lo specchio", src:"the mirror", pos:"noun", gender:"m",
     note:"Masculine. Plural: gli specchi. From Latin 'speculum' (mirror).\nUses 'lo' before 'sp-'.",
     example:"A: Lo specchio in bagno e rotto.\nB: Dobbiamo comprarne uno nuovo.",
     exampleSrc:"A: The bathroom mirror is broken.\nB: We need to buy a new one.",
     funFact:"'Specchio' comes from 'speculum' (to look at), the same root as 'spectacle' and 'inspect.' Breaking a mirror (sette anni di sfortuna, seven years of bad luck) is a superstition Italians take seriously."},

    {type:"teach", trg:"il tappeto", src:"the carpet / rug", pos:"noun", gender:"m",
     note:"Masculine. Plural: i tappeti. From Arabic 'taffeta' (woven fabric).\n'Tappeto' also means a mat or rug.",
     example:"A: Il tappeto e nuovo?\nB: Si, l'ho comprato ieri.",
     exampleSrc:"A: Is the carpet new?\nB: Yes, I bought it yesterday.",
     funFact:"Most Italian homes have tile or marble floors with rugs, not wall-to-wall carpet. 'Tappeto' entered Italian from Arabic, a reminder of centuries of Mediterranean trade. 'Mettere qualcosa sotto il tappeto' means to sweep something under the rug."},

    {type:"teach", trg:"la lampada", src:"the lamp", pos:"noun", gender:"f",
     note:"Feminine. Plural: le lampade. From Greek 'lampas' (torch).\n'Lampada da tavolo' = table lamp.",
     example:"A: Accendi la lampada, per favore.\nB: Subito!",
     exampleSrc:"A: Turn on the lamp, please.\nB: Right away!",
     funFact:"Italian design is world-famous for lighting. Brands like Artemide and Flos are icons. 'La lampada di Aladino' (Aladdin's lamp) is a common cultural reference. Good lighting is taken seriously in Italian home design."},

    {type:"teach", trg:"il cuscino", src:"the pillow / cushion", pos:"noun", gender:"m",
     note:"Masculine. Plural: i cuscini. Both bed pillows and decorative cushions.\nFrom Latin 'coxinus.'",
     example:"A: Quanti cuscini hai sul letto?\nB: Troppi! Almeno sei.",
     exampleSrc:"A: How many pillows do you have on the bed?\nB: Too many! At least six.",
     funFact:"Italians distinguish 'cuscino' (general pillow/cushion) from 'guanciale' (specifically a bed pillow for your cheek). Confusingly, 'guanciale' is also the name of a pork cheek cured meat used in carbonara."},

    {type:"teach", trg:"la coperta", src:"the blanket", pos:"noun", gender:"f",
     note:"Feminine. Plural: le coperte. From 'coprire' (to cover).\n'Coperta' also means 'deck' on a ship.",
     example:"A: Hai freddo? Prendi una coperta.\nB: Grazie, questa è calda.",
     exampleSrc:"A: Are you cold? Take a blanket.\nB: Thanks, this one is warm.",
     funFact:"In Italian bedding tradition, the 'piumone' (duvet) has largely replaced multiple 'coperte' (blankets). However, many Italian grandmothers still insist on the proper layering system: lenzuola (sheets), then coperte, then copriletto (bedspread)."},

    {type:"teach", trg:"la mensola", src:"the shelf", pos:"noun", gender:"f",
     note:"Feminine. Plural: le mensole. A wall-mounted shelf.\n'Scaffale' = a freestanding bookshelf.",
     example:"A: Metti i libri sulla mensola.\nB: Non c'è più spazio!",
     exampleSrc:"A: Put the books on the shelf.\nB: There is no more space!",
     funFact:"Italian homes love 'mensole.' Open shelving in kitchens is a classic Italian design choice. The distinction between 'mensola' (wall shelf) and 'scaffale' (standing shelf/bookcase) is important in Italian."},

    {type:"teach", trg:"il cassetto", src:"the drawer", pos:"noun", gender:"m",
     note:"Masculine. Plural: i cassetti. From 'cassa' (box/chest).\n'Il cassettone' = a chest of drawers.",
     example:"A: Dov'e la chiave?\nB: Nel primo cassetto.",
     exampleSrc:"A: Where is the key?\nB: In the first drawer.",
     funFact:"'Cassetto' is a diminutive of 'cassa' (box). 'Avere qualcosa nel cassetto' (to have something in the drawer) means to keep a project or dream hidden away for the future."},

    {type:"teach", trg:"comodo", src:"comfortable / convenient", pos:"adj", gender:"m",
     note:"Masculine. Feminine: comoda. Opposite: scomodo.\nUsed for furniture, situations, and arrangements.",
     example:"A: Il nuovo divano e comodo?\nB: Comodissimo!",
     exampleSrc:"A: Is the new sofa comfortable?\nB: Very comfortable!",
     funFact:"'Comodo' means both physically comfortable (a comfy chair) and convenient (a handy arrangement). 'Fare comodo' means 'to be useful/handy.' The 'comodino' (nightstand, literally 'little comfortable thing') sits beside Italian beds."},

    {type:"teach", trg:"accendere", src:"to turn on / to light", pos:"verb", gender:null,
     note:"Irregular past participle: acceso. 'Accendi la luce' = turn on the light.\nOpposite: spegnere (to turn off).",
     example:"A: Puoi accendere la luce?\nB: Certo, dove e l'interruttore?",
     exampleSrc:"A: Can you turn on the light?\nB: Sure, where is the switch?",
     funFact:"'Accendere' works for lights, fire, TV, and engines. The opposite 'spegnere' (to turn off/extinguish) is equally versatile. Italian uses these two verbs where English might use different words for each context."},

    // Quiz steps
    {type:"mc", q:"Come si dice 'armchair' in italiano?",
     opts:["La poltrona","La sedia","Il divano","Il letto"],
     ans:"La poltrona",
     hint:"This is a comfortable chair with arms, not a basic chair or sofa."},

    {type:"fb", s:"Puoi {1} la lampada? E buio qui.",
     a:["accendere"], opts:["accendere","spegnere","comprare","mettere"],
     hint:"It is dark and you want the lamp turned on.",
     sSrc:"Can you {1} the lamp? It is dark here."},

    {type:"match", pairs:[
      {trg:"il divano", src:"sofa"},
      {trg:"la sedia", src:"chair"},
      {trg:"il letto", src:"bed"},
      {trg:"l'armadio", src:"wardrobe"},
      {trg:"il tavolo", src:"table"}
    ,{trg:"la coperta",src:"the blanket"}]},

    {type:"mc", q:"Qual e la differenza tra 'tavolo' e 'tavola'?",
     opts:["Tavola is bigger than tavolo","Tavolo is the furniture; tavola is the table set for a meal","They mean the same thing","Tavolo is formal; tavola is informal"],
     ans:"Tavolo is the furniture; tavola is the table set for a meal",
     hint:"One refers to the object itself, the other to the dining experience."},

    {type:"fb", s:"Le chiavi sono nel {1} della scrivania.",
     a:["cassetto"], opts:["cassetto","cuscino","tappeto","specchio"],
     hint:"This is the sliding compartment inside a desk where you store things.",
     sSrc:"The keys are in the {1} of the desk."},

    {type:"mc", q:"Cosa significa 'comodino' in italiano?",
     opts:["A comfortable pillow","A desk lamp","Nightstand / bedside table","A small sofa"],
     ans:"Nightstand / bedside table",
     hint:"The diminutive of 'comodo' (comfortable), it sits next to your bed."},

    {type:"fb", s:"Questo divano e molto {1}, mi addormento sempre qui.",
     a:["comodo"], opts:["comodo","caro","nuovo","grande"],
     hint:"The speaker keeps falling asleep on this sofa because of how it feels.",
     sSrc:"This sofa is very {1}, I always fall asleep here."},

    {type:"mc", q:"Da quale lingua viene la parola 'tappeto'?",
     opts:["Latin","Greek","German","Arabic"],
     ans:"Arabic",
     hint:"This word entered Italian through centuries of Mediterranean trade."}
  ]
};
export default BATCH4_U05_L1;
