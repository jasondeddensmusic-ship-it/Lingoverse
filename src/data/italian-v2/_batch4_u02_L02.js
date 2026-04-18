// Batch 4 — Unit 02, Lesson 2: Time Expressions & Daily Routine
const BATCH4_U02_L2 = {
  id:"itv2_u02l_b4_2", title:"La routine quotidiana", icon:"\u23F0", xp:15, board:true,
  steps:[
    {type:"intro", title:"La routine quotidiana",
     desc:"Learn time expressions and daily routine vocabulary to describe when things happen throughout the day.",
     goals:["Use time expressions with prepositions","Describe your daily routine","Understand Italian time concepts"]},

    {type:"teach", trg:"la mattina", src:"the morning", pos:"noun", gender:"f",
     note:"Feminine. 'Di mattina' or 'la mattina' = in the morning.\nAlternative: 'il mattino' (masculine, more literary).",
     example:"A: Cosa fai la mattina?\nB: La mattina faccio colazione alle sette.",
     exampleSrc:"A: What do you do in the morning?\nB: In the morning I have breakfast at seven.",
     funFact:"Italian has both 'la mattina' (feminine, everyday) and 'il mattino' (masculine, poetic). 'Il mattino ha l'oro in bocca' (the morning has gold in its mouth) is a famous proverb meaning early risers are rewarded."},

    {type:"teach", trg:"il pomeriggio", src:"the afternoon", pos:"noun", gender:"m",
     note:"Masculine. From 'post' (after) + 'meriggio' (midday).\nRoughly 1 PM to 6 PM.",
     example:"A: Cosa fai il pomeriggio?\nB: Il pomeriggio studio.",
     exampleSrc:"A: What do you do in the afternoon?\nB: In the afternoon I study.",
     funFact:"The Italian afternoon includes 'la pennichella' or 'il pisolino' (the nap). Taking a short rest after lunch is still common, especially in central and southern Italy. Many shops close from 1 to 4 PM for this reason."},

    {type:"teach", trg:"la sera", src:"the evening", pos:"noun", gender:"f",
     note:"Feminine. 'Di sera' or 'la sera' = in the evening.\nRoughly 6 PM to bedtime.",
     example:"A: La sera guardiamo un film?\nB: Buona idea!",
     exampleSrc:"A: Shall we watch a movie in the evening?\nB: Good idea!",
     funFact:"Italian evenings start late. Dinner ('cena') is typically at 8 or 9 PM. Going out for the 'passeggiata' (evening stroll) before dinner is a beloved ritual in every Italian town and city."},

    {type:"teach", trg:"presto", src:"early / soon", pos:"adv", gender:null,
     note:"Dual meaning: 'early' (mi alzo presto) or 'soon' (a presto = see you soon).\nVery versatile word.",
     example:"A: Domani mi alzo presto.\nB: A che ora?\nA: Alle sei!",
     exampleSrc:"A: Tomorrow I get up early.\nB: At what time?\nA: At six!",
     funFact:"'A presto!' (see you soon!) is one of the most common Italian farewells. The word comes from Latin 'praestus' (ready, at hand). Something 'presto' is ready/near in time."},

    {type:"teach", trg:"tardi", src:"late", pos:"adv", gender:null,
     note:"Opposite of 'presto.' 'Fare tardi' = to be late/to stay out late.\n'E tardi!' = It's late!",
     example:"A: E tardi! Devo andare.\nB: Va bene, a domani!",
     exampleSrc:"A: It's late! I have to go.\nB: Okay, see you tomorrow!",
     funFact:"'Fare tardi' literally means 'to make late' and means both 'to be late' and 'to stay out late.' Italian nightlife starts very late. Going out at midnight is normal, especially in the south."},

    {type:"teach", trg:"adesso", src:"now / right now", pos:"adv", gender:null,
     note:"Synonym of 'ora' but slightly more emphatic.\nFrom Latin 'ad ipsum' (at this very moment).",
     example:"A: Quando partiamo?\nB: Adesso! Sbrigati!",
     exampleSrc:"A: When do we leave?\nB: Now! Hurry up!",
     funFact:"'Adesso' and 'ora' both mean 'now,' but 'adesso' has more urgency. 'Ora' is also used for time questions: 'che ora e?' (what time is it?). Both come from Latin but through different paths."},

    {type:"teach", trg:"sempre", src:"always", pos:"adv", gender:null,
     note:"One of the most common Italian adverbs.\nFrom Latin 'semper.' English 'semper' in 'Semper Fi.'",
     example:"A: Bevi sempre il caffe la mattina?\nB: Si, sempre!",
     exampleSrc:"A: Do you always drink coffee in the morning?\nB: Yes, always!",
     funFact:"Latin 'semper' survives unchanged in the US Marines motto 'Semper Fidelis' (always faithful). In Italian, it evolved to 'sempre.' The word has been in continuous use for over 2,500 years."},

    {type:"teach", trg:"mai", src:"never / ever", pos:"adv", gender:null,
     note:"'Non...mai' = never. Without 'non,' it means 'ever.'\n'Non mangio mai pesce' = I never eat fish.",
     example:"A: Vai mai al cinema?\nB: No, non vado mai al cinema.",
     exampleSrc:"A: Do you ever go to the movies?\nB: No, I never go to the movies.",
     funFact:"'Mai' has a double life: with 'non' it means 'never,' but alone in questions it means 'ever.' 'Hai mai visto Roma?' (Have you ever seen Rome?). This duality confuses learners but is completely natural."},

    {type:"teach", trg:"spesso", src:"often", pos:"adv", gender:null,
     note:"Frequency adverb. From Latin 'spissus' (thick, frequent).\nUsually placed after the verb.",
     example:"A: Cucini spesso?\nB: Si, cucino spesso la pasta.",
     exampleSrc:"A: Do you cook often?\nB: Yes, I often cook pasta.",
     funFact:"From Latin 'spissus' meaning 'thick' or 'dense.' The idea is that frequent events are 'densely packed' in time. Italian frequency adverbs from most to least: sempre, spesso, qualche volta, raramente, mai."},

    {type:"teach", trg:"qualche volta", src:"sometimes", pos:"adv", gender:null,
     note:"Two words. 'Qualche' = some, 'volta' = time/occasion.\nAlternative: 'a volte.'",
     example:"A: Mangi la pizza qualche volta?\nB: Si, qualche volta il venerdi.",
     exampleSrc:"A: Do you eat pizza sometimes?\nB: Yes, sometimes on Fridays.",
     funFact:"'Qualche volta' and 'a volte' are interchangeable. 'Volta' has many meanings: time/occasion, turn, vault (architecture). 'C'era una volta' (once upon a time) starts every Italian fairy tale."},

    {type:"teach", trg:"ogni giorno", src:"every day", pos:"adv", gender:null,
     note:"'Ogni' = every (invariable). 'Ogni giorno' = every day.\n'Ogni' never changes form.",
     example:"A: Studi italiano ogni giorno?\nB: Si, ogni giorno per un'ora.",
     exampleSrc:"A: Do you study Italian every day?\nB: Yes, every day for an hour.",
     funFact:"'Ogni' is invariable: ogni giorno, ogni settimana, ogni anno. It never takes an article and never becomes plural. 'Ognuno' (everyone) is the pronoun form. Simple, regular, and very useful."},

    {type:"teach", trg:"la sveglia", src:"the alarm clock", pos:"noun", gender:"f",
     note:"Feminine. From 'svegliare' (to wake up).\n'Mettere la sveglia' = to set the alarm.",
     example:"A: A che ora metti la sveglia?\nB: Alle sei e mezza.",
     exampleSrc:"A: What time do you set the alarm?\nB: At six thirty.",
     funFact:"'Sveglia!' is also used as an exclamation meaning 'Wake up!' or 'Pay attention!' A drill sergeant might shout 'Sveglia!' The related adjective 'sveglio' means 'awake' but also 'sharp, clever.'"},

    {type:"teach", trg:"la colazione", src:"breakfast", pos:"noun", gender:"f",
     note:"Feminine. 'Fare colazione' = to have breakfast.\nItalian breakfast is light: coffee and pastry.",
     example:"A: Hai fatto colazione?\nB: Si, un caffe e un cornetto.",
     exampleSrc:"A: Have you had breakfast?\nB: Yes, a coffee and a croissant.",
     funFact:"Italian breakfast is minimal compared to English or American breakfast. A 'cornetto e cappuccino' at the bar is the standard. Eating eggs, bacon, or cereal for breakfast is considered very strange by most Italians."},

    {type:"teach", trg:"il pranzo", src:"lunch", pos:"noun", gender:"m",
     note:"Masculine. The main meal of the day in Italian culture.\n'Pausa pranzo' = lunch break.",
     example:"A: A che ora e il pranzo?\nB: All'una, come sempre.",
     exampleSrc:"A: What time is lunch?\nB: At one, as always.",
     funFact:"Lunch is traditionally the biggest meal in Italy, not dinner. The 'pausa pranzo' (lunch break) can last 1-2 hours. Many Italians still go home for a proper multi-course lunch, though this is changing in big cities."},

    {type:"teach", trg:"la cena", src:"dinner / supper", pos:"noun", gender:"f",
     note:"Feminine. Evening meal. 'Cenare' = to have dinner.\nItalians eat dinner late, around 8-9 PM.",
     example:"A: Cosa c'e per cena?\nB: Stasera facciamo la pasta.",
     exampleSrc:"A: What is there for dinner?\nB: Tonight we are making pasta.",
     funFact:"From Latin 'cena,' which was the main meal of the day for Romans, eaten around 3 PM. Over centuries, it shifted to the evening. In ancient Rome, the cena could last for hours with multiple courses."},

    // Quiz steps
    {type:"mc", q:"Qual e il contrario di 'presto'?",
     opts:["Tardi","Adesso","Sempre","Mai"],
     ans:"Tardi",
     hint:"If 'presto' means early or soon, its opposite means late."},

    {type:"fb", s:"Non mangio {1} il pesce. Non mi piace.",
     a:["mai"], opts:["mai","sempre","spesso","adesso"],
     hint:"Combined with 'non,' this adverb means 'never.'",
     sSrc:"I {1} eat fish. I don't like it."},

    {type:"match", pairs:[
      {trg:"la colazione", src:"breakfast"},
      {trg:"il pranzo", src:"lunch"},
      {trg:"la cena", src:"dinner"},
      {trg:"la mattina", src:"the morning"},
      {trg:"la sera", src:"the evening"}
    ]},

    {type:"mc", q:"Cosa significa 'fare tardi'?",
     opts:["To be late or stay out late","To do something fast","To arrive early","To skip a meal"],
     ans:"To be late or stay out late",
     hint:"'Tardi' means l..., and 'fare' means to do or make."},

    {type:"fb", s:"Bevo il caffe {1}, non posso vivere senza!",
     a:["ogni giorno"], opts:["ogni giorno","mai","tardi","adesso"],
     hint:"The speaker drinks coffee daily, with no exceptions.",
     sSrc:"I drink coffee {1}, I can't live without it!"},

    {type:"mc", q:"Qual e il pasto principale nella tradizione italiana?",
     opts:["Il pranzo","La cena","La colazione","La merenda"],
     ans:"Il pranzo",
     hint:"Traditionally this midday meal, not the evening one, is the biggest."},

    {type:"fb", s:"Metto la {1} alle sei per andare a lavorare.",
     a:["sveglia"], opts:["sveglia","colazione","mattina","sera"],
     hint:"This is the device that wakes you up at a set time.",
     sSrc:"I set the {1} at six to go to work."},

    {type:"mc", q:"Cosa significa 'qualche volta'?",
     opts:["Sometimes","Never","Always","Every day"],
     ans:"Sometimes",
     hint:"It sits between 'spesso' (often) and 'raramente' (rarely) in frequency."}
  ,{type:"match",pairs:[{trg:"il pomeriggio",src:"the afternoon"},{trg:"presto",src:"early / soon"},{trg:"spesso",src:"often"},{trg:"qualche volta",src:"sometimes"}]}]
};
export default BATCH4_U02_L2;
