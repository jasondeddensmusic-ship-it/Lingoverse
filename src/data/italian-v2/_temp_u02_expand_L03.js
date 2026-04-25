// Unit 02 Expansion. Lesson 5: Daily Routine & Schedule
// Theme: Time expressions in context, daily activities, frequency

const LESSON_5 = {
  id:"itv2_u2l5", title:"La giornata tipo", icon:"\ud83d\udcc6", xp:15, board:true,
  steps:[
    {type:"intro", title:"La giornata tipo",
     desc:"Learn to describe your daily routine using time expressions, days, and common activities.",
     goals:["Describe your daily routine","Use frequency words (sempre, spesso, mai)","Combine time and activity vocabulary"]},

    {type:"teach", trg:"sempre", src:"always", pos:"adv", gender:null,
     note:"Placed before or after the verb: 'mangio sempre' or 'sempre mangio.'\nFrom Latin 'semper.'",
     example:"A: Prendi sempre il caffe la mattina?\nB: Si, sempre!",
     exampleSrc:"A: Do you always have coffee in the morning?\nB: Yes, always!",
     funFact:"Latin 'semper' passed directly into Italian as 'sempre.' English borrowed it for 'semper fidelis' (always faithful), the US Marines motto. The word has not changed in over 2,000 years."},

    {type:"teach", trg:"spesso", src:"often", pos:"adv", gender:null,
     note:"From Latin 'spissus' (thick, frequent).\nUsed like English 'often,' flexible position in the sentence.",
     example:"A: Vai spesso al cinema?\nB: Si, almeno due volte al mese.",
     exampleSrc:"A: Do you go to the cinema often?\nB: Yes, at least twice a month.",
     funFact:"The Latin root 'spissus' originally meant 'thick' or 'dense.' Something that happens often is 'thick' with occurrences. The same metaphor of density for frequency appears in several languages."},

    {type:"teach", trg:"qualche volta", src:"sometimes", pos:"adv", gender:null,
     note:"Literally: 'some time(s).' Alternative: 'a volte' (at times).\nBoth are equally common in daily speech.",
     example:"A: Cucini a casa?\nB: Qualche volta. Di solito mangio fuori.",
     exampleSrc:"A: Do you cook at home?\nB: Sometimes. Usually I eat out.",
     funFact:"Italian has multiple ways to say 'sometimes': qualche volta, a volte, talvolta, delle volte. 'Qualche' always takes a singular noun despite meaning 'some': 'qualche volta' (not 'qualche volte')."},

    {type:"teach", trg:"mai", src:"never / ever", pos:"adv", gender:null,
     note:"With 'non' before the verb: 'non mangio mai' (I never eat).\nWithout 'non,' it means 'ever': 'hai mai visto?' (have you ever seen?).",
     example:"A: Mangi mai la pizza a colazione?\nB: No, non mangio mai la pizza la mattina!",
     exampleSrc:"A: Do you ever eat pizza for breakfast?\nB: No, I never eat pizza in the morning!",
     funFact:"Italian uses double negatives as standard grammar: 'non mangio mai' (I not eat never). This is not an error. Unlike English, Italian requires BOTH 'non' and 'mai' to express 'never.'"},

    {type:"teach", trg:"di solito", src:"usually", pos:"adv", gender:null,
     note:"Literally: 'of habit/custom.' Very common time expression.\nAlternative: 'solitamente' (more formal).",
     example:"A: Di solito a che ora ti alzi?\nB: Di solito alle sette.",
     exampleSrc:"A: What time do you usually get up?\nB: Usually at seven.",
     funFact:"'Solito' comes from Latin 'solitus' (accustomed). 'Il solito' means 'the usual.' Saying 'il solito' at your regular bar means 'my usual order.' Baristas in Italy remember regulars' orders."},

    {type:"teach", trg:"la colazione", src:"the breakfast", pos:"noun", gender:"f",
     note:"Feminine. Italian breakfast is light: coffee + pastry.\n'Fare colazione' = to have breakfast.",
     example:"A: Cosa mangi a colazione?\nB: Un cappuccino e un cornetto.",
     exampleSrc:"A: What do you eat for breakfast?\nB: A cappuccino and a croissant.",
     funFact:"Italian breakfast is famously sweet and light: a cappuccino and a cornetto (croissant). Eggs, bacon, and toast are almost unheard of. Many Italians have breakfast standing at a bar in under five minutes."},

    {type:"teach", trg:"il pranzo", src:"the lunch", pos:"noun", gender:"m",
     note:"Masculine. The main meal of the day in Italian culture.\n'L'ora di pranzo' = lunchtime (usually 1-2 PM).",
     example:"A: A che ora e il pranzo?\nB: All'una, come sempre.",
     exampleSrc:"A: What time is lunch?\nB: At one, as always.",
     funFact:"Pranzo is traditionally the biggest meal in Italy: primo (pasta), secondo (meat/fish), contorno (side), and dolce (dessert). The two-hour lunch break is still sacred in many Italian workplaces."},

    {type:"teach", trg:"la cena", src:"the dinner", pos:"noun", gender:"f",
     note:"Feminine. Evening meal. Usually lighter than pranzo.\nTypical time: 8-9 PM, even later in the south.",
     example:"A: A che ora cenate?\nB: Verso le otto.",
     exampleSrc:"A: What time do you have dinner?\nB: Around eight.",
     funFact:"Italian dinner starts later than in northern Europe or America. In the south, eating before 8:30 PM is unusual. Restaurants often do not open for dinner service until 7:30 PM at the earliest."},

    {type:"teach", trg:"svegliarsi", src:"to wake up (reflexive)", pos:"verb", gender:null,
     note:"Reflexive verb: mi sveglio (I wake up), ti svegli (you wake up).\nThe 'si' at the end marks it as reflexive.",
     example:"A: A che ora ti svegli?\nB: Mi sveglio alle sette.",
     exampleSrc:"A: What time do you wake up?\nB: I wake up at seven.",
     funFact:"Many daily routine verbs in Italian are reflexive: svegliarsi (wake up), alzarsi (get up), lavarsi (wash), vestirsi (get dressed), addormentarsi (fall asleep). The reflexive pronoun changes with each person."},

    {type:"teach", trg:"andare a letto", src:"to go to bed", pos:"verb", gender:null,
     note:"Literally: 'to go to bed.' Not reflexive.\n'Vado a letto' = I go to bed. 'Vai a letto' = you go to bed.",
     example:"A: A che ora vai a letto?\nB: Di solito a mezzanotte.",
     exampleSrc:"A: What time do you go to bed?\nB: Usually at midnight.",
     funFact:"Italians tend to go to bed late compared to northern Europeans. Midnight is normal for adults. 'Andare a dormire' (to go to sleep) is used interchangeably with 'andare a letto.'"},

    {type:"teach", trg:"ogni giorno", src:"every day", pos:"adv", gender:null,
     note:"'Ogni' (every) + 'giorno' (day). 'Ogni' is invariable: never changes form.\n'Tutti i giorni' is a synonym.",
     example:"A: Studi italiano ogni giorno?\nB: Si, ogni giorno per un'ora.",
     exampleSrc:"A: Do you study Italian every day?\nB: Yes, every day for an hour.",
     funFact:"'Ogni' is always singular even though it means 'every/each': 'ogni giorno' (not 'ogni giorni'), 'ogni persona' (not 'ogni persone'). The synonym 'tutti i giorni' uses plural, but 'ogni' is always singular."},

    {type:"teach", trg:"il fine settimana", src:"the weekend", pos:"noun", gender:"m",
     note:"Masculine. Compound: fine (end) + settimana (week).\nAlso commonly: 'il weekend' (English loanword).",
     example:"A: Cosa fai il fine settimana?\nB: Vado al mare!",
     exampleSrc:"A: What are you doing this weekend?\nB: I'm going to the sea!",
     funFact:"Many Italians use the English word 'weekend' alongside the Italian 'fine settimana.' The English loanword is so common that the Accademia della Crusca (Italy's language authority) has given up fighting it."},

    // Quiz steps
    {type:"mc", q:"How does Italian express 'never'?",
     opts:["Non + verb + mai","Mai alone before the verb","Non alone before the verb","Sempre with non"],
     ans:"Non + verb + mai",
     hint:"Italian uses a sandwich construction with the negator preceding the conjugated form and the temporal adverb following it. Both pieces obligatory."},

    {type:"fb", s:"Di {1} mi sveglio alle sette.",
     a:["solito"],
     opts:["solito","sempre","mai","spesso"],
     hint:"This means 'usually' or 'as a habit.' Literally 'of custom.'",
     sSrc:"{1} I wake up at seven."},

    {type:"mc", q:"What is a typical Italian breakfast?",
     opts:["Bread and cheese","Cappuccino and a cornetto","Eggs and bacon","Cereal and fruit"],
     ans:"Cappuccino and a cornetto",
     hint:"Italian breakfast is sweet and quick. Coffee plus pastry, often consumed standing at a bar."},

    {type:"fb", s:"A che ora ti {1}?",
     a:["svegli"],
     opts:["svegli","mangi","vai","lavori"],
     hint:"This reflexive verb describes the act of opening your eyes in the morning. Informal 'tu' form.",
     sSrc:"What time do you {1}?"},

    {type:"match", pairs:[
      {trg:"sempre", src:"always"},
      {trg:"spesso", src:"often"},
      {trg:"qualche volta", src:"sometimes"},
      {trg:"mai", src:"never"},
      {trg:"di solito", src:"usually"}
    ]},

    {type:"mc", q:"Which meal is the biggest in traditional Italian culture?",
     opts:["La colazione (breakfast)","Lo spuntino (snack)","Il pranzo (lunch)","La cena (dinner)"],
     ans:"Il pranzo (lunch)",
     hint:"Traditionally, the midday meal includes multiple courses: primo, secondo, contorno, and dolce."},

    {type:"fb", s:"Studio italiano {1} giorno per un'ora.",
     a:["ogni"],
     opts:["ogni","tutti","un","il"],
     hint:"This word means 'every' and is always followed by a singular noun, despite its plural meaning.",
     sSrc:"I study Italian {1} day for an hour."},

    {type:"mc", q:"What time do Italians typically eat dinner?",
     opts:["Around 5-6 PM","At noon","Before 7 PM","Around 8-9 PM"],
     ans:"Around 8-9 PM",
     hint:"Italian dinner starts later than in most English-speaking countries. Even later in southern Italy."},

    {type:"fb", s:"Cosa fai il {1} settimana?",
     a:["fine"],
     opts:["fine","primo","buon","ogni"],
     hint:"The end of the week. This compound word combines 'end' + 'week.'",
     sSrc:"What are you doing this {1}?"},

    {type:"mc", q:"What does 'qualche volta' literally mean?",
     opts:["Some time(s)","Every time","No time","All times"],
     ans:"Some time(s)",
     hint:"'Qualche' means 'some' and 'volta' means 't....' Despite meaning some, 'qualche' always takes a singular noun."}
  ]
};
export default LESSON_5;
