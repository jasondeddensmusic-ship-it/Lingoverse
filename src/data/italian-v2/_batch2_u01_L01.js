// Unit 01 Batch 2 — Lesson 1: Time-of-Day Greetings & Farewell Variations
const BATCH2_U01_L1 = {
  id:"itv2_u01l_b2_1", title:"Saluti del giorno", icon:"\u2600\ufe0f", xp:15, board:true,
  steps:[
    {type:"intro", title:"Saluti del giorno",
     desc:"Learn how Italians greet each other at different times of day and more farewell expressions.",
     goals:["Use time-specific greetings","Learn farewell variations","Respond naturally to greetings"]},

    {type:"teach", trg:"buon pomeriggio", src:"good afternoon", pos:"intj", gender:null,
     note:"Used roughly from 1 PM to 5 PM. Less common than buongiorno/buonasera.\nLiterally: good + afternoon.",
     example:"A: Buon pomeriggio, signora!\nB: Buon pomeriggio! Come sta?",
     exampleSrc:"A: Good afternoon, ma'am!\nB: Good afternoon! How are you?",
     funFact:"Not all Italians use this greeting. Many skip from buongiorno straight to buonasera. It is more common in the south and in formal contexts."},

    {type:"teach", trg:"salve", src:"hello (neutral)", pos:"intj", gender:null,
     note:"Neither formal nor informal. Perfect when unsure which register to use.\nFrom Latin 'salve' (be well).",
     example:"A: Salve! E aperto il negozio?\nB: Si, prego, entri!",
     exampleSrc:"A: Hello! Is the shop open?\nB: Yes, please, come in!",
     funFact:"From the Latin greeting 'salve' (be well, be healthy). It has survived 2,000 years virtually unchanged. Romans greeted each other this exact way."},

    {type:"teach", trg:"come va?", src:"how is it going?", pos:"verb", gender:null,
     note:"Informal alternative to 'come stai.' Works with everyone.\n'Va' is from 'andare' (to go).",
     example:"A: Ehi, come va?\nB: Tutto bene, grazie! E tu?",
     exampleSrc:"A: Hey, how is it going?\nB: All good, thanks! And you?",
     funFact:"'Come va?' is slightly more casual than 'come stai?' and avoids the tu/Lei choice entirely. It literally asks 'how does it go?' and works in almost any situation."},

    {type:"teach", trg:"tutto bene", src:"all good / everything fine", pos:"adj", gender:null,
     note:"Very common response to 'come va?' or 'come stai?'\nCan also be a question with rising intonation.",
     example:"A: Come va?\nB: Tutto bene! Tu?\nA: Benissimo!",
     exampleSrc:"A: How is it going?\nB: All good! You?\nA: Great!",
     funFact:"Italians use 'tutto bene' both as a statement and a question. A waiter asking 'tutto bene?' means 'is everything okay with your meal?' The phrase has become universal."},

    {type:"teach", trg:"non c'e male", src:"not bad", pos:"adv", gender:null,
     note:"Literally: 'there is no bad.' A modest positive response.\nMore reserved than 'bene.'",
     example:"A: Come stai?\nB: Non c'e male, grazie.",
     exampleSrc:"A: How are you?\nB: Not bad, thanks.",
     funFact:"Italians sometimes downplay how they feel. 'Non c'e male' is neither negative nor enthusiastic. It signals 'things are fine but nothing to celebrate.' A classic understated Italian response."},

    {type:"teach", trg:"cosi cosi", src:"so-so", pos:"adv", gender:null,
     note:"Means things are mediocre. Often accompanied by a hand wave gesture.\nFrom 'cosi' (like this).",
     example:"A: Come va il lavoro?\nB: Cosi cosi. Non e il mio periodo migliore.",
     exampleSrc:"A: How is work going?\nB: So-so. Not my best period.",
     funFact:"The famous Italian hand wobble gesture (flat hand tilting side to side) often accompanies 'cosi cosi.' Body language and words go together in Italian communication."},

    {type:"teach", trg:"molto bene", src:"very well", pos:"adv", gender:null,
     note:"Standard positive response. Stronger than 'bene' alone.\n'Molto' = very, much.",
     example:"A: Come sta, signora?\nB: Molto bene, grazie! E Lei?",
     exampleSrc:"A: How are you, ma'am?\nB: Very well, thanks! And you?",
     funFact:"'Molto' is one of the most useful Italian intensifiers. It works with adjectives (molto bello), adverbs (molto bene), and even nouns (molto tempo). It never changes form."},

    {type:"teach", trg:"a dopo", src:"see you later", pos:"adv", gender:null,
     note:"Used when you expect to see someone later the same day.\nLiterally: 'to later.'",
     example:"A: Vado a pranzo. A dopo!\nB: A dopo! Buon appetito!",
     exampleSrc:"A: I am going to lunch. See you later!\nB: See you later! Enjoy your meal!",
     funFact:"Italian has specific farewells for different time gaps: a dopo (later today), a domani (tomorrow), a lunedi (Monday), a presto (soon, general). Each one sets a clear expectation."},

    {type:"teach", trg:"a domani", src:"see you tomorrow", pos:"adv", gender:null,
     note:"Used when you will see someone the next day.\nVery common among colleagues and classmates.",
     example:"A: E tardi, vado a casa.\nB: Va bene, a domani!",
     exampleSrc:"A: It is late, I am going home.\nB: All right, see you tomorrow!",
     funFact:"Italian combines the preposition 'a' (to/until) with a time word for farewells. You can say 'a sabato' (see you Saturday), 'a settembre' (see you in September), or any time reference."},

    {type:"teach", trg:"ci vediamo", src:"see you / we will see each other", pos:"verb", gender:null,
     note:"Reflexive: 'vedersi' (to see each other). Very natural farewell.\n'Ci' = each other/ourselves.",
     example:"A: Ci vediamo domani?\nB: Si, ci vediamo in piazza alle tre!",
     exampleSrc:"A: Shall we meet tomorrow?\nB: Yes, let's meet in the square at three!",
     funFact:"'Ci vediamo' is one of the most natural Italian farewells. It literally means 'we see each other' and implies the meeting will happen. It feels warmer than a formal goodbye."},

    {type:"teach", trg:"alla prossima", src:"until next time", pos:"adv", gender:null,
     note:"Short for 'alla prossima volta' (until the next time).\nCasual but warm farewell.",
     example:"A: Grazie per la serata!\nB: Alla prossima!",
     exampleSrc:"A: Thanks for the evening!\nB: Until next time!",
     funFact:"'Prossima' means 'next' (feminine, agreeing with the implied 'volta'). The full form 'alla prossima volta' is understood. Italians love these compressed phrases that drop the obvious word."},

    {type:"teach", trg:"buona serata", src:"have a nice evening", pos:"intj", gender:null,
     note:"Said when parting in the evening. 'Serata' emphasizes the evening experience.\nDifferent from 'buonasera' (a greeting).",
     example:"A: Arrivederci! Buona serata!\nB: Grazie, anche a Lei!",
     exampleSrc:"A: Goodbye! Have a nice evening!\nB: Thanks, you too!",
     funFact:"'Buonasera' is a greeting (hello in the evening). 'Buona serata' is a farewell wish (enjoy your evening). The difference mirrors buongiorno (hello) versus buona giornata (enjoy your day)."},

    {type:"teach", trg:"stammi bene", src:"take care (informal)", pos:"verb", gender:null,
     note:"Literally: 'stay well for me.' Warm, caring farewell.\nFormal version: 'stia bene.'",
     example:"A: Vado via. Stammi bene!\nB: Anche tu! Ci vediamo presto!",
     exampleSrc:"A: I am leaving. Take care!\nB: You too! See you soon!",
     funFact:"The 'mi' in 'stammi' is an ethical dative: 'stay well for my sake.' It adds an emotional layer. Italian farewells often carry more affection than their English equivalents."},

    {type:"teach", trg:"buon appetito", src:"enjoy your meal", pos:"intj", gender:null,
     note:"Said before eating. The standard response is 'grazie, altrettanto!' (thanks, likewise).\nLiterally: good appetite.",
     example:"A: Buon appetito!\nB: Grazie, altrettanto!",
     exampleSrc:"A: Enjoy your meal!\nB: Thanks, likewise!",
     funFact:"Saying 'buon appetito' before a meal is almost mandatory in Italy. Not saying it can feel rude. Some etiquette books say it is too informal for very elegant dinners, but in daily life, everyone says it."},

    // Quiz steps
    {type:"mc", q:"Come si risponde a 'come va?'",
     opts:["Tutto bene!","Buon appetito!","Alla prossima!","Ci vediamo!"],
     ans:"Tutto bene!",
     hint:"This phrase means 'all good.' It is the standard positive response when someone asks how things are going."},

    {type:"fb", s:"{1}! E aperto il negozio?",
     a:["Salve"],
     opts:["Salve","Ciao","Arrivederci","Prego"],
     hint:"This is the neutral greeting, neither formal nor informal. Perfect for addressing a shopkeeper.",
     sSrc:"{1}! Is the shop open?"},

    {type:"mc", q:"What is the difference between 'buonasera' and 'buona serata'?",
     opts:["Buonasera = greeting, buona serata = farewell","They are the same","Buonasera = farewell, buona serata = greeting","Buonasera is informal only"],
     ans:"Buonasera = greeting, buona serata = farewell",
     hint:"One is used when meeting someone in the evening, the other when parting. The longer form is a wish for the time ahead."},

    {type:"fb", s:"Come stai? {1}, grazie.",
     a:["Non c'e male"],
     opts:["Non c'e male","A dopo","Buon appetito","Alla prossima"],
     hint:"A modest, positive response meaning 'not bad.' Literally: 'there is no bad.'",
     sSrc:"How are you? {1}, thanks."},

    {type:"match", pairs:[
      {trg:"a dopo", src:"see you later"},
      {trg:"a domani", src:"see you tomorrow"},
      {trg:"ci vediamo", src:"see you (we'll meet)"},
      {trg:"alla prossima", src:"until next time"},
      {trg:"stammi bene", src:"take care"}
    ]},

    {type:"mc", q:"Cosa si dice prima di mangiare?",
     opts:["Buon appetito!","Buona serata!","A presto!","Salve!"],
     ans:"Buon appetito!",
     hint:"This expression is said before a meal. It wishes someone a good appetite. Almost mandatory in Italy."},

    {type:"fb", s:"Come va? {1}. Non e il mio periodo migliore.",
     a:["Cosi cosi"],
     opts:["Cosi cosi","Molto bene","Tutto bene","Benissimo"],
     hint:"Things are mediocre, neither good nor bad. Often accompanied by a hand-wobble gesture.",
     sSrc:"How is it going? {1}. Not my best period."},

    {type:"mc", q:"Which greeting works when you are unsure about formal or informal?",
     opts:["Salve","Ciao","Buonanotte","Arrivederci"],
     ans:"Salve",
     hint:"This 2,000-year-old Latin greeting sits perfectly between casual and formal. Use it with anyone."}
  ]
};
export default BATCH2_U01_L1;
