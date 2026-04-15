// Unit 04 Expansion. Lesson 3: Italian Meals & Food Culture
// Theme: Meal structure, Italian food culture, tastes & preferences

const LESSON_3 = {
  id:"itv2_u4l3", title:"I pasti italiani", icon:"\ud83c\udf7d\ufe0f", xp:15, board:true,
  steps:[
    {type:"intro", title:"I pasti italiani",
     desc:"Learn about Italian meal structure, common dishes, and how to express food preferences.",
     goals:["Name the courses of an Italian meal","Express likes and dislikes with food","Use key food vocabulary beyond the bar"]},

    {type:"teach", trg:"il piatto", src:"the dish / plate", pos:"noun", gender:"m",
     note:"Masculine. Means both the physical plate and a dish/course.\n'Il primo piatto' = the first course (pasta).",
     example:"A: Qual e il piatto del giorno?\nB: Oggi abbiamo risotto ai funghi.",
     exampleSrc:"A: What is the dish of the day?\nB: Today we have mushroom risotto.",
     funFact:"Italian meals have a strict course order: antipasto (starter), primo (first course, usually pasta), secondo (second course, meat/fish), contorno (side dish), dolce (dessert). Each is a separate 'piatto.'"},

    {type:"teach", trg:"la pasta", src:"the pasta", pos:"noun", gender:"f",
     note:"Feminine. The national dish. Over 300 shapes exist.\nAlso means 'dough' or 'pastry' in other contexts.",
     example:"A: Che pasta vuoi?\nB: Spaghetti al pomodoro, per favore.",
     exampleSrc:"A: What pasta do you want?\nB: Spaghetti with tomato sauce, please.",
     funFact:"There are over 300 pasta shapes in Italy, each designed for a specific sauce. Long pasta holds smooth sauces; short ridged pasta catches chunky ones. Italians take pasta shape pairing very seriously."},

    {type:"teach", trg:"la carne", src:"the meat", pos:"noun", gender:"f",
     note:"Feminine. From Latin 'caro/carnis' (flesh).\nUsed in 'secondo di carne' (meat second course).",
     example:"A: Mangi la carne?\nB: Si, ma preferisco il pesce.",
     exampleSrc:"A: Do you eat meat?\nB: Yes, but I prefer fish.",
     funFact:"From Latin 'carnis' (flesh). English 'carnivore,' 'carnal,' and 'carnival' (literally 'farewell to meat' before Lent) all share this root. Italy is famous for cured meats: prosciutto, salame, bresaola."},

    {type:"teach", trg:"il pesce", src:"the fish", pos:"noun", gender:"m",
     note:"Masculine. From Latin 'piscis.'\nItaly's coastline makes seafood central to many regional cuisines.",
     example:"A: Ti piace il pesce?\nB: Si, adoro il pesce! Soprattutto il tonno.",
     exampleSrc:"A: Do you like fish?\nB: Yes, I love fish! Especially tuna.",
     funFact:"From Latin 'piscis.' English 'Pisces' (zodiac sign) shares this root. With 7,600 km of coastline, Italy has incredible seafood traditions. Coastal regions like Sicily and Liguria are especially renowned."},

    {type:"teach", trg:"la verdura", src:"the vegetables", pos:"noun", gender:"f",
     note:"Feminine. Usually used in singular for 'vegetables' as a category.\nFrom Latin 'viridis' (green).",
     example:"A: Mangi molta verdura?\nB: Si, adoro le verdure fresche!",
     exampleSrc:"A: Do you eat a lot of vegetables?\nB: Yes, I love fresh vegetables!",
     funFact:"'Verdura' comes from 'verde' (green), so vegetables are literally 'green things.' Italian markets ('mercati') are famous for their seasonal produce. Italians eat vegetables that are strictly in season."},

    {type:"teach", trg:"la frutta", src:"the fruit", pos:"noun", gender:"f",
     note:"Feminine. Collective noun (singular form for all fruit).\nSingle fruit item: 'un frutto.'",
     example:"A: Che frutta hai?\nB: Ho mele, pere e arance.",
     exampleSrc:"A: What fruit do you have?\nB: I have apples, pears, and oranges.",
     funFact:"'La frutta' (collective) vs 'il frutto' (single item). Italian dessert menus always end with 'frutta di stagione' (seasonal fruit). In Italy, fruit is considered a proper dessert, not just a snack."},

    {type:"teach", trg:"il formaggio", src:"the cheese", pos:"noun", gender:"m",
     note:"Masculine. Italy produces over 400 types of cheese.\nFrom Latin 'formaticus' (molded into a form).",
     example:"A: Vuoi del formaggio?\nB: Si, un po' di parmigiano.",
     exampleSrc:"A: Do you want some cheese?\nB: Yes, a bit of parmesan.",
     funFact:"Italy produces over 400 registered cheeses. Parmigiano Reggiano, mozzarella di bufala, gorgonzola, and pecorino are world-famous. 'Formaggio' literally means 'molded' (shaped in a form), from Latin 'forma.'"},

    {type:"teach", trg:"il pane", src:"the bread", pos:"noun", gender:"m",
     note:"Masculine. Essential at every Italian meal.\nEvery region has its own bread style.",
     example:"A: Vuoi del pane?\nB: Si, grazie. Il pane qui e buonissimo!",
     exampleSrc:"A: Do you want some bread?\nB: Yes, thanks. The bread here is excellent!",
     funFact:"From Latin 'panis.' English 'pantry' (bread storage) and 'companion' (one who shares bread: com + panis) come from this root. Tuscan bread is famously unsalted, a tradition dating back to a medieval salt tax."},

    {type:"teach", trg:"buono", src:"good / tasty", pos:"adj", gender:"m",
     note:"Masculine: buono. Feminine: buona. Before nouns: buon/buona.\n'Buonissimo!' = extremely good/delicious.",
     example:"A: Come e la pizza?\nB: Buonissima!",
     exampleSrc:"A: How is the pizza?\nB: Absolutely delicious!",
     funFact:"'Buono' behaves like an indefinite article before nouns: 'un buon vino' (a good wine), 'una buona pizza' (a good pizza). The superlative 'buonissimo' is one of the most-used Italian words for praising food."},

    {type:"teach", trg:"cattivo", src:"bad", pos:"adj", gender:"m",
     note:"Masculine: cattivo. Feminine: cattiva.\nFor food, 'non buono' is more common than 'cattivo.'",
     example:"A: Il caffe e cattivo?\nB: No, non e cattivo. E solo freddo.",
     exampleSrc:"A: Is the coffee bad?\nB: No, it is not bad. It is just cold.",
     funFact:"'Cattivo' comes from Latin 'captivus' (captive, wretched). For food, Italians prefer to say 'non e buono' (it is not good) rather than 'e cattivo' (it is bad). Calling food 'cattivo' is harsh criticism in Italy."},

    {type:"teach", trg:"mi piace", src:"I like (it)", pos:"verb", gender:null,
     note:"Literally: 'it pleases me.' The thing liked is the subject.\n'Mi piace la pizza' = pizza pleases me (I like pizza).",
     example:"A: Ti piace la pasta?\nB: Si, mi piace molto!",
     exampleSrc:"A: Do you like pasta?\nB: Yes, I like it a lot!",
     funFact:"Italian flips the English structure: the thing you like is the subject. 'Mi piace il gelato' literally means 'gelato pleases me.' For plurals, use 'mi piacciono': 'mi piacciono gli spaghetti' (spaghetti please me)."},

    // Quiz steps
    {type:"mc", q:"What is 'il primo piatto' in an Italian meal?",
     opts:["The first course (usually pasta)","The appetizer","The dessert","The main meat course"],
     ans:"The first course (usually pasta)",
     hint:"Italian meals have a strict order. This comes after antipasto and before the secondo (meat/fish)."},

    {type:"fb", s:"{1} piace la pizza.",
     a:["Mi"],
     opts:["Mi","Io","Tu","A"],
     hint:"In Italian, liking uses an indirect object pronoun. 'It pleases ME' uses the first person indirect form.",
     sSrc:"I like {1}."},

    {type:"mc", q:"How many pasta shapes exist in Italy?",
     opts:["Over 300","About 50","Exactly 100","Less than 20"],
     ans:"Over 300",
     hint:"Each shape is designed for a specific type of sauce. Italians take the pairing very seriously."},

    {type:"fb", s:"Vuoi del {1}? Un po' di parmigiano.",
     a:["formaggio"],
     opts:["formaggio","pane","pesce","vino"],
     hint:"Italy produces over 400 types of this dairy product. Parmigiano is the most famous variety.",
     sSrc:"Do you want some {1}? A bit of parmesan."},

    {type:"match", pairs:[
      {trg:"la pasta", src:"the pasta"},
      {trg:"la carne", src:"the meat"},
      {trg:"il pesce", src:"the fish"},
      {trg:"la verdura", src:"the vegetables"},
      {trg:"il formaggio", src:"the cheese"}
    ]},

    {type:"mc", q:"How do you say 'I like spaghetti' in Italian?",
     opts:["Mi piacciono gli spaghetti","Mi piace gli spaghetti","Io piaccio gli spaghetti","Mi piace lo spaghetti"],
     ans:"Mi piacciono gli spaghetti",
     hint:"S... is plural, so the verb must be plural too. The thing liked is the grammatical subject."},

    {type:"fb", s:"La pizza e {1}!",
     a:["buonissima"],
     opts:["buonissima","cattiva","buono","buoni"],
     hint:"Pizza is feminine singular. Use the superlative feminine form of 'buono' (good).",
     sSrc:"The pizza is {1}!"},

    {type:"mc", q:"Why do Italians avoid saying food is 'cattivo'?",
     opts:["It sounds too harsh; 'non buono' is gentler","Cattivo only describes people","It is grammatically wrong","It means poisonous"],
     ans:"It sounds too harsh; 'non buono' is gentler",
     hint:"Italian food culture is sensitive. Saying 'not good' is diplomatic; saying 'bad' is a strong insult."},

    {type:"fb", s:"Mangi la {1}? Preferisco il pesce.",
     a:["carne"],
     opts:["carne","pasta","frutta","verdura"],
     hint:"This is the protein from animals. The speaker prefers fish instead.",
     sSrc:"Do you eat {1}? I prefer fish."},

    {type:"mc", q:"What does 'la frutta' refer to?",
     opts:["Fruit as a collective category","A single fruit","A fruit salad","A dessert"],
     ans:"Fruit as a collective category",
     hint:"This feminine noun uses a singular form to describe a whole group. To refer to one individual piece, Italians switch to 'un frutto.'"}
  ]
};
export default LESSON_3;
