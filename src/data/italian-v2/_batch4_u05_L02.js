// Batch 4 — Unit 05, Lesson 2: Household Chores & Daily Tasks
const BATCH4_U05_L2 = {
  id:"itv2_u05l_b4_2", title:"Le faccende domestiche", icon:"\uD83E\uDDF9", xp:15, board:true,
  steps:[
    {type:"intro", title:"Le faccende domestiche",
     desc:"Learn vocabulary for household chores and daily tasks that keep an Italian home running smoothly.",
     goals:["Name common household chores","Describe what you do at home","Use dovere (must) with chore vocabulary"]},

    {type:"teach", trg:"pulire", src:"to clean", pos:"verb", gender:null,
     note:"Regular -ire verb (with -isc- pattern). 'Pulisco la casa' = I clean the house.\nFrom Latin 'polire' (to polish).",
     example:"A: Devi pulire la cucina.\nB: La pulisco subito!",
     exampleSrc:"A: You need to clean the kitchen.\nB: I'll clean it right away!",
     funFact:"'Pulire' conjugates with the -isc- pattern: pulisco, pulisci, pulisce. This pattern affects many -ire verbs. Italian homes are famously clean: 'pulizia' (cleanliness) is a point of pride for Italian homemakers."},

    {type:"teach", trg:"lavare", src:"to wash", pos:"verb", gender:null,
     note:"Regular -are verb. 'Lavare i piatti' = to wash dishes.\n'Lavarsi' = to wash oneself.",
     example:"A: Chi lava i piatti stasera?\nB: Li lavo io!",
     exampleSrc:"A: Who washes the dishes tonight?\nB: I'll wash them!",
     funFact:"'Lavare i piatti' (to wash dishes) is one of the most common household arguments in Italy. Dishwashers ('lavastoviglie,' literally 'dish-washer') are standard now, but many Italian grandmothers insist hand-washing is superior."},

    {type:"teach", trg:"cucinare", src:"to cook", pos:"verb", gender:null,
     note:"Regular -are verb. From 'cucina' (kitchen).\nCooking is a deeply respected skill in Italy.",
     example:"A: Sai cucinare?\nB: Si, cucino ogni giorno.",
     exampleSrc:"A: Can you cook?\nB: Yes, I cook every day.",
     funFact:"In Italian culture, knowing how to cook is almost a social requirement. 'Non sa cucinare' (he/she can't cook) is a serious judgment. Italian children often learn to cook from their grandmothers, not from recipes."},

    {type:"teach", trg:"stirare", src:"to iron", pos:"verb", gender:null,
     note:"Regular -are verb. 'Il ferro da stiro' = the iron (appliance).\nItalians iron almost everything, including bed sheets.",
     example:"A: Devo stirare le camicie.\nB: Ce ne sono molte!",
     exampleSrc:"A: I have to iron the shirts.\nB: There are many of them!",
     funFact:"Italians iron everything: shirts, pants, bed sheets, even underwear. This attention to wrinkle-free clothes is a cultural standard. Appearing 'stropicciato' (wrinkled) in public is frowned upon. It reflects on your family's reputation."},

    {type:"teach", trg:"spazzare", src:"to sweep", pos:"verb", gender:null,
     note:"Regular -are verb. 'Spazzare il pavimento' = to sweep the floor.\n'Scopa' = broom.",
     example:"A: Puoi spazzare il pavimento?\nB: Si, dove la scopa?",
     exampleSrc:"A: Can you sweep the floor?\nB: Yes, where is the broom?",
     funFact:"Italian tile and marble floors need sweeping rather than vacuuming. 'Scopa' (broom) is also the name of a classic Italian card game. Playing 'Scopa' after lunch is a family tradition, especially during holidays."},

    {type:"teach", trg:"il bucato", src:"the laundry", pos:"noun", gender:"m",
     note:"Masculine. 'Fare il bucato' = to do laundry.\nFrom 'buca' (hole) referring to old soaking method.",
     example:"A: Hai fatto il bucato?\nB: Si, e gia in lavatrice.",
     exampleSrc:"A: Have you done the laundry?\nB: Yes, it is already in the washing machine.",
     funFact:"Italians hang laundry to dry ('stendere il bucato') more than using dryers. Clotheslines stretched between buildings are an iconic image of Italian urban life, especially in Naples and southern cities."},

    {type:"teach", trg:"la lavatrice", src:"the washing machine", pos:"noun", gender:"f",
     note:"Feminine. Compound: lava (washes) + trice (agent suffix).\n'Mettere in lavatrice' = to put in the wash.",
     example:"A: La lavatrice e rotta!\nB: Dobbiamo chiamare il tecnico.",
     exampleSrc:"A: The washing machine is broken!\nB: We need to call the technician.",
     funFact:"European washing machines are typically front-loading and smaller than American ones. Italian laundry culture involves specific detergents, fabric softeners, and precise temperature settings. Getting it wrong is a household disaster."},

    {type:"teach", trg:"l'aspirapolvere", src:"the vacuum cleaner", pos:"noun", gender:"m",
     note:"Masculine. Compound: aspira (sucks) + polvere (dust).\n'Passare l'aspirapolvere' = to vacuum.",
     example:"A: Devo passare l'aspirapolvere.\nB: Il pavimento e molto sporco.",
     exampleSrc:"A: I need to vacuum.\nB: The floor is very dirty.",
     funFact:"Literally 'dust-sucker.' Italian compound nouns are wonderfully descriptive: 'aspirapolvere' (vacuum), 'lavastoviglie' (dishwasher), 'asciugatrice' (dryer). The verb + noun pattern reveals exactly what the machine does."},

    {type:"teach", trg:"sporco", src:"dirty", pos:"adj", gender:"m",
     note:"Masculine. Feminine: sporca. Opposite: pulito (clean).\n'Acqua sporca' = dirty water.",
     example:"A: Il bagno e sporco!\nB: Lo pulisco subito.",
     exampleSrc:"A: The bathroom is dirty!\nB: I'll clean it right away.",
     funFact:"In Italian culture, a dirty house is almost a moral failing. 'Sporco' can also be used figuratively: 'gioco sporco' (dirty play/foul play), 'parole sporche' (dirty words). Cleanliness and morality are linguistically linked."},

    {type:"teach", trg:"pulito", src:"clean", pos:"adj", gender:"m",
     note:"Masculine. Feminine: pulita. Past participle of 'pulire.'\nAlso means 'neat' or 'clear.'",
     example:"A: La casa e pulita e ordinata.\nB: Complimenti! Bella casa.",
     exampleSrc:"A: The house is clean and tidy.\nB: Congratulations! Beautiful house.",
     funFact:"'Pulito' also works figuratively: 'coscienza pulita' (clean conscience), 'gioco pulito' (fair play). The expression 'avere le mani pulite' (to have clean hands) means to be innocent. 'Mani Pulite' was the famous 1990s anti-corruption investigation."},

    {type:"teach", trg:"ordinato", src:"tidy / organized", pos:"adj", gender:"m",
     note:"Masculine. Feminine: ordinata. Opposite: disordinato.\nFrom 'ordine' (order).",
     example:"A: La tua scrivania e sempre ordinata.\nB: Mi piace l'ordine!",
     exampleSrc:"A: Your desk is always tidy.\nB: I like order!",
     funFact:"Italians value 'ordine' (order) in personal spaces and appearance. 'Fare ordine' (to tidy up) is a common daily activity. 'Disordinato' (messy/untidy) is a personality trait that Italians notice and comment on freely."},

    {type:"teach", trg:"buttare", src:"to throw away / to toss", pos:"verb", gender:null,
     note:"Regular -are verb. 'Buttare via' = to throw away/discard.\n'Non buttare niente!' = Don't throw anything away!",
     example:"A: Posso buttare via questi giornali?\nB: No, li voglio tenere!",
     exampleSrc:"A: Can I throw away these newspapers?\nB: No, I want to keep them!",
     funFact:"'Buttare via' (to throw away) conflicts with the Italian tendency to keep everything. Italian grandmothers are famous for never throwing things away: 'non si butta niente' (you don't throw anything away) is their motto."},

    {type:"teach", trg:"la spazzatura", src:"the garbage / trash", pos:"noun", gender:"f",
     note:"Feminine. 'Buttare la spazzatura' = to take out the trash.\nItaly has strict recycling rules.",
     example:"A: Hai buttato la spazzatura?\nB: Si, ho separato tutto per il riciclo.",
     exampleSrc:"A: Did you take out the trash?\nB: Yes, I separated everything for recycling.",
     funFact:"Italian 'raccolta differenziata' (sorted waste collection) is strict. Different bins for glass, plastic, paper, organic, and general waste. Each city has specific collection days. Getting it wrong can result in fines."},

    {type:"teach", trg:"sistemare", src:"to tidy up / to fix / to arrange", pos:"verb", gender:null,
     note:"Regular -are verb. Very versatile: organize, fix, or sort out.\n'Sistemo tutto io' = I'll take care of everything.",
     example:"A: Devi sistemare la tua camera.\nB: La sistemo dopo pranzo.",
     exampleSrc:"A: You need to tidy your room.\nB: I'll tidy it after lunch.",
     funFact:"'Sistemare' is incredibly versatile: tidy a room, fix a problem, find someone a job, or arrange a situation. 'Sistemare qualcuno' can even mean 'to set someone up' (romantically). Context determines the meaning."},

    {type:"teach", trg:"aiutare", src:"to help", pos:"verb", gender:null,
     note:"Regular -are verb. 'Mi puoi aiutare?' = Can you help me?\n'L'aiuto' (masculine noun) = the help.",
     example:"A: Mi puoi aiutare con le faccende?\nB: Certo, cosa devo fare?",
     exampleSrc:"A: Can you help me with the chores?\nB: Of course, what should I do?",
     funFact:"'Aiutare' comes from Latin 'adiutare.' The noun 'aiuto!' (help!) shouted in an emergency is one of those Italian words that sounds exactly like what it means: urgent, dramatic, unmistakable."},

    // Quiz steps
    {type:"mc", q:"Cosa significa 'fare il bucato'?",
     opts:["To do laundry","To wash dishes","To sweep the floor","To iron clothes"],
     ans:"To do laundry",
     hint:"'Bucato' refers specifically to the l... or washing of clothes."},

    {type:"fb", s:"Il pavimento e {1}, devo passare l'aspirapolvere.",
     a:["sporco"], opts:["sporco","pulito","ordinato","comodo"],
     hint:"The floor needs vacuuming because it is not clean.",
     sSrc:"The floor is {1}, I need to vacuum."},

    {type:"match", pairs:[
      {trg:"pulire", src:"to clean"},
      {trg:"lavare", src:"to wash"},
      {trg:"stirare", src:"to iron"},
      {trg:"spazzare", src:"to sweep"},
      {trg:"cucinare", src:"to cook"}
    ]},

    {type:"mc", q:"Cosa significa 'aspirapolvere' letteralmente?",
     opts:["Dust-sucker","Floor-cleaner","Air-pusher","Dirt-eater"],
     ans:"Dust-sucker",
     hint:"Break it into two parts: aspira (sucks) + polvere (d...)."},

    {type:"fb", s:"Non {1} via i giornali vecchi! Li voglio leggere.",
     a:["buttare"], opts:["buttare","pulire","lavare","sistemare"],
     hint:"You are asking someone not to throw away the old newspapers.",
     sSrc:"Don't {1} away the old newspapers! I want to read them."},

    {type:"mc", q:"Perche gli italiani stendono i vestiti fuori?",
     opts:["To dry laundry on clotheslines instead of using dryers","Because dryers are illegal","To show off their clothes","Because Italian fabric cannot be machine-dried"],
     ans:"To dry laundry on clotheslines instead of using dryers",
     hint:"Air-drying on lines between buildings is an iconic Italian urban sight."},

    {type:"fb", s:"Mi puoi {1} a pulire la cucina?",
     a:["aiutare"], opts:["aiutare","cucinare","stirare","buttare"],
     hint:"You are asking someone to give you a hand with kitchen cleaning.",
     sSrc:"Can you {1} me clean the kitchen?"},

    {type:"mc", q:"Cos'e la 'raccolta differenziata'?",
     opts:["Sorted waste collection / recycling system","A type of Italian cooking","A museum collection","A traditional card game"],
     ans:"Sorted waste collection / recycling system",
     hint:"Italian cities require separating trash into different bins for recycling."}
  ]
};
export default BATCH4_U05_L2;
