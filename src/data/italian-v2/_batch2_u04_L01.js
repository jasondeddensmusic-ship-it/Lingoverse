// Unit 04 Batch 2. Lesson 1: More Food & Drink Vocabulary
const BATCH2_U04_L1 = {
  id:"itv2_u04l_b2_1", title:"Al bancone", icon:"\ud83e\udd50", xp:15, board:true,
  steps:[
    {type:"intro", title:"Al bancone",
     desc:"Learn more food and drink items you will encounter at Italian bars, bakeries, and street food stalls.",
     goals:["Name common bakery and snack items","Order more specifically at a bar","Expand your food vocabulary for daily situations"]},

    {type:"teach", trg:"il tramezzino", src:"the triangle sandwich", pos:"noun", gender:"m",
     note:"Masculine. A soft white bread sandwich cut diagonally.\nClassic Italian bar snack, served cold.",
     example:"A: Vorrei un tramezzino al tonno.\nB: Ecco, freschissimo!",
     exampleSrc:"A: I would like a tuna triangle sandwich.\nB: Here you go, very fresh!",
     funFact:"The tramezzino was invented in Turin in the 1920s. The name comes from 'tramezzo' (in between), because the filling is between two slices. Gabriele D'Annunzio, the famous poet, reportedly coined the name."},

    {type:"teach", trg:"il toast", src:"the toasted sandwich", pos:"noun", gender:"m",
     note:"Masculine. Borrowed from English. Usually ham and cheese, pressed hot.\nInvariable plural: i toast.",
     example:"A: Un toast, per favore.\nB: Con prosciutto e formaggio?",
     exampleSrc:"A: A toasted sandwich, please.\nB: With ham and cheese?",
     funFact:"In Italy, 'toast' does not mean toasted bread. It specifically means a hot pressed sandwich with ham and cheese, like a croque-monsieur. If you want actual toast, ask for 'pane tostato.'"},

    {type:"teach", trg:"la spremuta", src:"the fresh-squeezed juice", pos:"noun", gender:"f",
     note:"Feminine. From 'spremere' (to squeeze). Made fresh to order.\n'Spremuta d'arancia' = fresh orange juice.",
     example:"A: Una spremuta d'arancia, per favore.\nB: Subito! Con ghiaccio?",
     exampleSrc:"A: A fresh orange juice, please.\nB: Right away! With ice?",
     funFact:"Unlike 'succo' (packaged juice), a 'spremuta' is squeezed fresh in front of you. Italian bars have juicers behind the counter. Ordering a spremuta instead of a succo signals you want the real thing."},

    {type:"teach", trg:"la cioccolata calda", src:"the hot chocolate", pos:"noun", gender:"f",
     note:"Feminine. Thick and rich, almost like pudding.\n'Cioccolata' = chocolate (the drink). 'Cioccolato' = chocolate (the food).",
     example:"A: Una cioccolata calda, per favore.\nB: Con panna?",
     exampleSrc:"A: A hot chocolate, please.\nB: With cream?",
     funFact:"Italian hot chocolate is incredibly thick, almost like drinking melted chocolate. It is served with a spoon. 'Con panna' (with whipped cream) makes it even richer. A winter specialty in Italian bars."},

    {type:"teach", trg:"la panna", src:"the cream / whipped cream", pos:"noun", gender:"f",
     note:"Feminine. Both fresh cream and whipped cream.\nFrom Latin 'pannus' (cloth), for the cream layer on top of milk.",
     example:"A: Vuoi la panna sul caffè?\nB: Si, con la panna, grazie!",
     exampleSrc:"A: Do you want cream on the coffee?\nB: Yes, with cream, thanks!",
     funFact:"'Panna cotta' (cooked cream) is one of Italy's most famous desserts. 'Panna montata' is whipped cream. You can add it to coffee, hot chocolate, or gelato. Italians use real cream, never spray cans."},

    {type:"teach", trg:"il ghiaccio", src:"the ice", pos:"noun", gender:"m",
     note:"Masculine. From Latin 'glacies' (ice).\n'Con ghiaccio' = with ice. 'Senza ghiaccio' = without ice.",
     example:"A: Acqua con ghiaccio?\nB: Si, per favore. Fa caldo!",
     exampleSrc:"A: Water with ice?\nB: Yes, please. It is hot!",
     funFact:"Italians traditionally drink water without ice, or with very little. Asking for lots of ice marks you as a foreigner. Italians believe very cold drinks are bad for digestion. This is slowly changing with younger generations."},

    {type:"teach", trg:"la focaccia", src:"the focaccia (flat bread)", pos:"noun", gender:"f",
     note:"Feminine. A flat oven-baked bread, often with olive oil and salt.\nFrom Latin 'focus' (hearth).",
     example:"A: Vorrei una focaccia.\nB: Al rosmarino o alle olive?",
     exampleSrc:"A: I would like a focaccia.\nB: With rosemary or olives?",
     funFact:"Focaccia is ancient. Romans baked flat bread on the 'focus' (hearth). Liguria's focaccia (Genoa) is the most famous, paper-thin and soaked in olive oil. Every region has its own variation."},

    {type:"teach", trg:"il dolcetto", src:"the pastry / small sweet", pos:"noun", gender:"m",
     note:"Masculine. Diminutive of 'dolce' (sweet). Small pastries and cookies.\nPlural: i dolcetti.",
     example:"A: Prendi un dolcetto?\nB: Si, quel biscotto al cioccolato!",
     exampleSrc:"A: Are you having a pastry?\nB: Yes, that chocolate cookie!",
     funFact:"Italian bars display pastries under glass: cornetti, paste (cream puffs), biscotti (cookies), crostate (tarts). 'Dolcetto o scherzetto?' is the Italian 'trick or treat?' for Halloween, literally 'little sweet or little joke?'"},

    {type:"teach", trg:"l'insalata", src:"the salad", pos:"noun", gender:"f",
     note:"Feminine. From 'insalare' (to add salt). Uses l' before vowel.\n'Insalata mista' = mixed salad.",
     example:"A: Vorrei un'insalata mista.\nB: Con pomodori e mozzarella?",
     exampleSrc:"A: I would like a mixed salad.\nB: With tomatoes and mozzarella?",
     funFact:"'Insalata' literally means 'salted thing,' from the practice of salting vegetables to preserve them. Roman soldiers received a 'salarium' (salt money), which gave English 'salary.' Salt and salad share a root."},

    {type:"teach", trg:"la minestra", src:"the soup", pos:"noun", gender:"f",
     note:"Feminine. From Latin 'ministrare' (to serve). Traditional first course.\nAlso 'la zuppa' (thicker soup, with bread).",
     example:"A: Oggi c'è la minestra di verdure.\nB: Perfetto, fa freddo!",
     exampleSrc:"A: Today there is vegetable soup.\nB: Perfect, it is cold!",
     funFact:"'Minestra' comes from 'ministrare' (to serve, to administer). The same root gave English 'minister' and 'administer.' A minister originally served food, then served the state. Soup and government, connected."},

    {type:"teach", trg:"con", src:"with", pos:"prep", gender:null,
     note:"Combines with articles: con + il = col (rare), con + la = colla (rare).\nContractions are optional and increasingly rare.",
     example:"A: Caffe con latte o senza?\nB: Con latte, grazie.",
     exampleSrc:"A: Coffee with milk or without?\nB: With milk, thanks.",
     funFact:"'Con' contractions (col, colla, coi) exist but are becoming rare in modern Italian. Most people just say 'con il,' 'con la.' This is one area where Italian is actually simplifying over time."},

    {type:"teach", trg:"senza", src:"without", pos:"prep", gender:null,
     note:"Opposite of 'con.' From Latin 'absentia' (absence).\n'Caffe senza zucchero' = coffee without sugar.",
     example:"A: Senza glutine, per favore.\nB: Certo, abbiamo opzioni senza glutine.",
     exampleSrc:"A: Without gluten, please.\nB: Of course, we have gluten-free options.",
     funFact:"'Senza' is essential at Italian bars and restaurants: senza zucchero (no sugar), senza latte (no milk), senza glutine (gluten-free). Italy has one of the highest celiac disease awareness rates in Europe."},

    {type:"teach", trg:"altro", src:"other / anything else", pos:"adj", gender:"m",
     note:"Masculine: altro. Feminine: altra. Plural: altri/altre.\n'Altro?' or 'Basta così?' = Anything else? / Is that all?",
     example:"A: Un caffè. Altro?\nB: No grazie, basta così.",
     exampleSrc:"A: A coffee. Anything else?\nB: No thanks, that is all.",
     funFact:"At any Italian bar or market, the server will ask 'Altro?' (Anything else?). The response 'Basta così' (that is enough) or 'E tutto' (that is all) closes the transaction. Simple but essential interactions."},

    {type:"teach", trg:"basta", src:"enough / that's enough", pos:"verb", gender:null,
     note:"From 'bastare' (to be enough). 'Basta!' alone means 'Stop! Enough!'\n'Basta così' = that will do.",
     example:"A: Vuoi ancora pasta?\nB: No, basta così. Sono pieno!",
     exampleSrc:"A: Do you want more pasta?\nB: No, that's enough. I am full!",
     funFact:"'Basta!' is one of the most powerful Italian words. Said firmly, it means 'Stop! I have had enough!' It can end arguments, stop children misbehaving, or simply close a transaction at a bar politely."},

    // Quiz steps
    {type:"mc", q:"What is a 'tramezzino' in Italy?",
     opts:["A soft triangle sandwich","A type of pasta","A dessert","A hot drink"],
     ans:"A soft triangle sandwich",
     hint:"Invented in Turin in the 1920s. The name comes from 'tramezzo' (in between). Served cold at bars."},

    {type:"fb", s:"Una {1} d'arancia, per favore.",
     a:["spremuta"],
     opts:["spremuta","bottiglia","scatola","tazza"],
     hint:"This is juice squeezed fresh in front of you, not from a package. From 'spremere' (to squeeze).",
     sSrc:"A fresh {1} juice, please."},

    {type:"mc", q:"What does 'toast' mean in an Italian bar?",
     opts:["A drink","A hot pressed ham and cheese sandwich","Toasted bread","A type of salad"],
     ans:"A hot pressed ham and cheese sandwich",
     hint:"The English word was borrowed but given a specific Italian meaning. For actual toasted bread, ask for 'pane tostato.'"},

    {type:"fb", s:"Caffe {1} zucchero, grazie.",
     a:["senza"],
     opts:["senza","con","molto","poco"],
     hint:"You do not want sugar in your coffee. This preposition means 'without.'",
     sSrc:"Coffee {1} sugar, thanks."},

    {type:"match", pairs:[
      {trg:"la spremuta", src:"fresh-squeezed juice"},
      {trg:"la focaccia", src:"flat bread"},
      {trg:"la panna", src:"cream"},
      {trg:"il ghiaccio", src:"ice"},
      {trg:"l'insalata", src:"salad"}
    ]},

    {type:"mc", q:"Why do Italians traditionally avoid lots of ice in drinks?",
     opts:["They prefer hot drinks","Ice is not available","They believe very cold drinks are bad for digestion","Ice is expensive"],
     ans:"They believe very cold drinks are bad for digestion",
     hint:"A cultural belief about temperature and the stomach. Younger generations are changing this habit."},

    {type:"fb", s:"Vuoi ancora pasta? No, {1} così.",
     a:["basta"],
     opts:["basta","altro","con","ecco"],
     hint:"This word means 'enough.' It politely closes a food offer. It comes from a verb meaning 'to suffice.'",
     sSrc:"Do you want more pasta? No, that's {1}."},

    {type:"mc", q:"What does the barista mean by 'Altro?'",
     opts:["Hello?","Ready?","How are you?","Anything else?"],
     ans:"Anything else?",
     hint:"After taking your order, the server asks this one-word question to check if you need more items."}
  ,{type:"match",pairs:[{trg:"la minestra",src:"the soup"},{trg:"con",src:"with"}]}]
};
export default BATCH2_U04_L1;
