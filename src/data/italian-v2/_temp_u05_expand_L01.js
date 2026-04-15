// Unit 05 Expansion. Lesson 4: Household Activities
// Theme: Daily chores, household verbs, domestic life

const LESSON_4 = {
  id:"itv2_u5l4", title:"Le faccende domestiche", icon:"\ud83e\uddf9", xp:15, board:true,
  steps:[
    {type:"intro", title:"Le faccende domestiche",
     desc:"Learn Italian vocabulary for common household chores and activities around the home.",
     goals:["Name common household chores","Use key domestic verbs","Talk about what you do at home"]},

    {type:"teach", trg:"pulire", src:"to clean", pos:"verb", gender:null,
     note:"Regular -ire verb (ISC pattern: pulisco, pulisci, pulisce).\nFrom Latin 'polire' (to polish).",
     example:"A: Devo pulire la cucina.\nB: Ti aiuto io!",
     exampleSrc:"A: I need to clean the kitchen.\nB: I'll help you!",
     funFact:"'Pulire' follows the -isc- pattern: pulisco, pulisci, pulisce, puliamo, pulite, puliscono. Many -ire verbs add -isc- in the present tense. Latin 'polire' also gave English 'polish.'"},

    {type:"teach", trg:"cucinare", src:"to cook", pos:"verb", gender:null,
     note:"Regular -are verb. From 'cucina' (kitchen).\n'Cucinare' = to cook. 'Cuocere' = to cook (the food itself).",
     example:"A: Chi cucina stasera?\nB: Cucino io! Faccio la pasta.",
     exampleSrc:"A: Who cooks tonight?\nB: I'll cook! I'll make pasta.",
     funFact:"Italian has TWO verbs for cooking: 'cucinare' (the person cooks a meal) and 'cuocere' (the food cooks/bakes). 'La pasta cuoce' (the pasta is cooking) vs 'cucino la pasta' (I am cooking pasta)."},

    {type:"teach", trg:"lavare", src:"to wash", pos:"verb", gender:null,
     note:"Regular -are verb. 'Lavare i piatti' = to wash dishes.\nReflexive: lavarsi (to wash oneself).",
     example:"A: Hai lavato i piatti?\nB: Si, sono tutti puliti.",
     exampleSrc:"A: Did you wash the dishes?\nB: Yes, they are all clean.",
     funFact:"From Latin 'lavare' (to wash). English 'lavatory' and 'laundry' come from this root. In Italian homes, the 'lavanderia' is the laundry room and the 'lavastoviglie' is the dishwasher (literally 'dish-washer')."},

    {type:"teach", trg:"stirare", src:"to iron", pos:"verb", gender:null,
     note:"Regular -are verb. 'Stirare i vestiti' = to iron clothes.\nFrom Latin 'extirare' (to stretch out).",
     example:"A: Devo stirare le camicie.\nB: Odio stirare!",
     exampleSrc:"A: I need to iron the shirts.\nB: I hate ironing!",
     funFact:"The Latin root means 'to stretch out,' because ironing involves pressing fabric flat. 'Il ferro da stiro' is the iron (literally: iron for ironing). Most Italians iron nearly everything, including underwear and bed sheets."},

    {type:"teach", trg:"cuocere", src:"to cook (of food) / to bake", pos:"verb", gender:null,
     note:"Irregular -ere verb: cuocio, cuoci, cuoce.\nUsed when the food is the subject: 'la torta cuoce nel forno.'",
     example:"A: La torta cuoce nel forno.\nB: Quanto tempo ci vuole?\nA: Trenta minuti.",
     exampleSrc:"A: The cake is baking in the oven.\nB: How long does it take?\nA: Thirty minutes.",
     funFact:"'Cuocere' is for the physical process of heat transforming food. 'Cucinare' is for the human act of preparing a meal. A person 'cucina' while the food 'cuoce.' This distinction is important in Italian cooking talk."},

    {type:"teach", trg:"apparecchiare", src:"to set the table", pos:"verb", gender:null,
     note:"Regular -are verb. 'Apparecchiare la tavola' = to set the table.\nOpposite: 'sparecchiare' (to clear the table).",
     example:"A: Puoi apparecchiare la tavola?\nB: Quanti siamo stasera?",
     exampleSrc:"A: Can you set the table?\nB: How many are we tonight?",
     funFact:"Setting the table properly is taken seriously in Italy. Plates, glasses, proper cutlery placement, and a cloth napkin are standard even for weeknight dinners. Paper napkins are considered informal."},

    {type:"teach", trg:"spazzare", src:"to sweep", pos:"verb", gender:null,
     note:"Regular -are verb. 'Spazzare il pavimento' = to sweep the floor.\nFrom Germanic 'spazzon' (to sweep).",
     example:"A: Ho spazzato il pavimento.\nB: Bravo! Adesso e tutto pulito.",
     exampleSrc:"A: I swept the floor.\nB: Good job! Now everything is clean.",
     funFact:"'Spazzare' is specifically for sweeping with a broom. The broom itself is 'la scopa.' 'Scopare' also means 'to sweep' but has a vulgar double meaning in modern Italian, so 'spazzare' is the safe choice."},

    {type:"teach", trg:"il pavimento", src:"the floor", pos:"noun", gender:"m",
     note:"Masculine. From Latin 'pavimentum' (beaten floor).\nItalian floors are often tile (piastrelle) or marble.",
     example:"A: Il pavimento e bagnato, attento!\nB: Grazie per l'avviso!",
     exampleSrc:"A: The floor is wet, careful!\nB: Thanks for the warning!",
     funFact:"From Latin 'pavimentum' (a surface beaten flat). English 'pavement' comes from the same root but refers to outdoor surfaces. Italian homes typically have tile or stone floors, not carpet. 'Parquet' (wood flooring) is a French loanword used in Italian."},

    {type:"teach", trg:"i vestiti", src:"the clothes", pos:"noun", gender:"m",
     note:"Masculine plural. Singular: il vestito (also means 'dress/suit').\nFrom Latin 'vestitus' (clothing).",
     example:"A: Dove metto i vestiti?\nB: Nell'armadio, per favore.",
     exampleSrc:"A: Where do I put the clothes?\nB: In the wardrobe, please.",
     funFact:"'Il vestito' as singular means both 'a garment' and specifically 'a dress' or 'a suit' depending on context. 'I vestiti' (plural) means 'clothes' in general. From Latin 'vestire' (to clothe), which gave English 'vest.'"},

    {type:"teach", trg:"la lavatrice", src:"the washing machine", pos:"noun", gender:"f",
     note:"Feminine. Compound: lavare (to wash) + -trice (machine suffix).\n'Fare la lavatrice' = to do the laundry.",
     example:"A: Metto i vestiti nella lavatrice.\nB: Aggiungi anche le lenzuola!",
     exampleSrc:"A: I am putting the clothes in the washing machine.\nB: Add the bed sheets too!",
     funFact:"The -trice suffix creates feminine machine nouns from verbs: lavatrice (washer), asciugatrice (dryer), lavastoviglie (dishwasher). Many Italian apartments have small front-loading washers. Dryers are less common; line-drying is the norm."},

    {type:"teach", trg:"sporco", src:"dirty", pos:"adj", gender:"m",
     note:"Masculine: sporco. Feminine: sporca.\nOpposite of 'pulito' (clean). From Gothic 'spurkjan' (to spit).",
     example:"A: La cucina e sporca!\nB: La pulisco subito.",
     exampleSrc:"A: The kitchen is dirty!\nB: I'll clean it right away.",
     funFact:"The adjective pair 'sporco/pulito' (dirty/clean) is one of the first opposites learners encounter. 'Sporco' has a strong Germanic origin, while 'pulito' has Latin roots. Two languages merged into one vocabulary."},

    // Quiz steps
    {type:"mc", q:"What is the difference between 'cucinare' and 'cuocere'?",
     opts:["Cucinare = person cooks, cuocere = food cooks","They are identical","Cucinare is formal","Cuocere is for baking only"],
     ans:"Cucinare = person cooks, cuocere = food cooks",
     hint:"Italian has two cooking verbs. One is for the human activity, the other for the physical process of heat on f...."},

    {type:"fb", s:"Devo {1} la cucina.",
     a:["pulire"],
     opts:["pulire","cucinare","lavare","stirare"],
     hint:"The kitchen needs to be made clean. This -ire verb follows the -isc- pattern.",
     sSrc:"I need to {1} the kitchen."},

    {type:"mc", q:"What does the -trice suffix create?",
     opts:["Feminine machine nouns","Masculine nouns","Verb forms","Adjectives"],
     ans:"Feminine machine nouns",
     hint:"Lavare + -trice = lavatrice. This suffix attaches to a verb stem to name the device performing the action."},

    {type:"fb", s:"Puoi {1} la tavola?",
     a:["apparecchiare"],
     opts:["apparecchiare","pulire","spazzare","lavare"],
     hint:"You want someone to prepare the table with plates, glasses, and cutlery before dinner.",
     sSrc:"Can you {1} the table?"},

    {type:"match", pairs:[
      {trg:"pulire", src:"to clean"},
      {trg:"cucinare", src:"to cook"},
      {trg:"lavare", src:"to wash"},
      {trg:"stirare", src:"to iron"},
      {trg:"spazzare", src:"to sweep"}
    ]},

    {type:"mc", q:"What is 'il pavimento'?",
     opts:["The floor","The pavement","The wall","The ceiling"],
     ans:"The floor",
     hint:"From Latin 'pavimentum' (beaten surface). In Italian, this word applies to indoor surfaces, not outdoor pavement."},

    {type:"fb", s:"I vestiti sono nell'{1}.",
     a:["armadio"],
     opts:["armadio","cucina","bagno","giardino"],
     hint:"Clothes are stored in this tall piece of furniture in the bedroom.",
     sSrc:"The clothes are in the {1}."},

    {type:"mc", q:"What is the opposite of 'sporco'?",
     opts:["Pulito","Bello","Grande","Nuovo"],
     ans:"Pulito",
     hint:"One means dirty, the other means clean. The clean word comes from Latin 'polire' (to polish)."},

    {type:"fb", s:"La cucina e {1}!",
     a:["sporca"],
     opts:["sporca","sporco","sporchi","sporche"],
     hint:"'Cucina' is feminine singular. The adjective for dirty must match: feminine singular form.",
     sSrc:"The kitchen is {1}!"},

    {type:"mc", q:"Why is line-drying common in Italy?",
     opts:["Dryers are less common; line-drying is the cultural norm","Dryers are illegal","There is no electricity for dryers","Italians prefer wrinkled clothes"],
     ans:"Dryers are less common; line-drying is the cultural norm",
     hint:"Small apartments and good weather make outdoor clothes hanging practical. Many Italian buildings have shared terraces with racks."}
  ]
};
export default LESSON_4;
