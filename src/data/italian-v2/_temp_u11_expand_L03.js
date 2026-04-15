// Italian V2 Unit 11 Expansion — Lesson 6: Raccontare una storia (Telling a Story)
// Expands past tense unit with storytelling practice combining past tense + time expressions.

const LESSON_6 = {id:"itv2_u11l6", title:"Raccontare una storia", icon:"\uD83D\uDCD6", xp:15, board:true, steps:[
  {type:"intro", title:"Raccontare una storia",
   desc:"Put your past tense skills together to tell stories in Italian. Combine passato prossimo with time expressions and narrative connectors to share experiences naturally.",
   goals:["Tell a coherent story about a past event","Use time markers to order events","Combine regular and irregular past tenses"]},

  {type:"teach", trg:"raccontare", src:"to tell / to narrate", pos:"verb", gender:null,
   note:"Regular -are verb. Present: racconto, racconti, racconta.\n'Raccontami!' = Tell me! 'Raccontare una storia' = to tell a story.",
   example:"A: Raccontami del viaggio!\nB: E stato fantastico! Ti racconto tutto.",
   exampleSrc:"A: Tell me about the trip!\nB: It was fantastic! I will tell you everything.",
   funFact:"From 'ri-' (again) + 'contare' (to count), literally 'to recount.' Stories are events 'counted' one by one. English 'recount' has the same double meaning: to count again AND to tell a story. Italians love storytelling and often use hands for emphasis."},

  {type:"teach", trg:"e stato/a", src:"it was / he/she was", pos:"verb", gender:null,
   note:"Passato prossimo of 'essere.' Masculine: e stato. Feminine: e stata.\n'E stato bello' = it was beautiful.",
   example:"A: Com'e stato il concerto?\nB: E stato incredibile!",
   exampleSrc:"A: How was the concert?\nB: It was incredible!",
   funFact:"'E stato' is past tense of 'essere' (to be). Since 'essere' uses itself as its helper, you get: e (is/has) + stato (been). The agreement rule applies: 'la vacanza e stata bellissima' (feminine). This form appears in nearly every Italian story."},

  {type:"teach", trg:"divertente", src:"fun / entertaining", pos:"adj", gender:null,
   note:"Adj. Same form for masculine and feminine (-e ending).\nFrom 'divertire' (to amuse). 'Molto divertente' = very fun.",
   example:"A: La festa e stata divertente?\nB: Divertentissima! Abbiamo ballato tutta la notte.",
   exampleSrc:"A: Was the party fun?\nB: Very fun! We danced all night.",
   funFact:"From Latin 'divertere' (to turn away), because entertainment 'diverts' your attention from worries. English 'divert' and 'diversion' share this root. The superlative 'divertentissimo/a' (extremely fun) is very common in Italian enthusiasm."},

  {type:"teach", trg:"incredibile", src:"incredible / unbelievable", pos:"adj", gender:null,
   note:"Adj. Same form for masculine and feminine (-e ending).\nFrom 'in-' (not) + 'credibile' (believable).",
   example:"A: Il panorama era incredibile.\nB: Hai fatto delle foto?",
   exampleSrc:"A: The view was incredible.\nB: Did you take any photos?",
   funFact:"From Latin 'incredibilis' (not to be believed). Italians use 'incredibile' as a strong positive exclamation: 'Incredibile!' (Amazing!). Also used negatively: 'E incredibile che il treno sia in ritardo di nuovo' (It is unbelievable the train is late again)."},

  {type:"teach", trg:"ho conosciuto", src:"I met (for the first time)", pos:"verb", gender:null,
   note:"Passato prossimo of 'conoscere' (to know/meet).\nPast participle: conosciuto (regular). 'Conoscere' = to meet for the first time.",
   example:"A: Ieri ho conosciuto una persona interessante.\nB: Dove l'hai conosciuta?",
   exampleSrc:"A: Yesterday I met an interesting person.\nB: Where did you meet her?",
   funFact:"'Conoscere' in the past means 'to meet for the first time,' not just 'to know.' 'Ho conosciuto Marco a una festa' (I met Marco at a party). If you already know someone, use 'incontrare' (to run into, encounter). This distinction is important in Italian storytelling."},

  {type:"teach", trg:"fantastico", src:"fantastic / amazing", pos:"adj", gender:null,
   note:"Adj. Feminine: fantastica. From Greek 'phantastikos' (able to imagine).\nUsed as an exclamation: 'Fantastico!'",
   example:"A: Com'e andata la vacanza?\nB: Fantastica! Il tempo era perfetto.",
   exampleSrc:"A: How was the vacation?\nB: Fantastic! The weather was perfect.",
   funFact:"From Greek 'phantasia' (imagination). English 'fantastic,' 'fantasy,' and 'phantom' share this root. Italians love superlatives in storytelling: 'fantastico,' 'magnifico,' 'straordinario.' Using strong adjectives makes your stories more engaging and authentically Italian."},

  {type:"teach", trg:"purtroppo", src:"unfortunately", pos:"adv", gender:null,
   note:"One word. From 'pur' (even) + 'troppo' (too much).\nUsed to introduce bad news or disappointments in stories.",
   example:"A: Purtroppo il museo era chiuso.\nB: Che peccato! E tornato un altro giorno?",
   exampleSrc:"A: Unfortunately the museum was closed.\nB: What a shame! Did you go back another day?",
   funFact:"Literally 'even too much,' expressing that something negative is even more than expected. 'Purtroppo' is the standard way to soften bad news. 'Che peccato!' (What a pity!) is the common response. Both are essential for balanced storytelling."},

  {type:"teach", trg:"per fortuna", src:"luckily / fortunately", pos:"adv", gender:null,
   note:"Two words. 'Fortuna' = luck/fortune.\nOpposite of 'purtroppo.' 'Per fortuna!' = Luckily!",
   example:"A: Ha piovuto tutto il giorno.\nB: Per fortuna avevamo l'ombrello!",
   exampleSrc:"A: It rained all day.\nB: Luckily we had an umbrella!",
   funFact:"From Latin 'fortuna' (fate, luck). 'Per fortuna' introduces a lucky twist in a story. Italians love narrative contrast: 'Purtroppo ha piovuto, ma per fortuna abbiamo trovato un ristorante stupendo' (Unfortunately it rained, but luckily we found an amazing restaurant)."},

  {type:"teach", trg:"alla fine", src:"in the end / eventually", pos:"adv", gender:null,
   note:"'Fine' = end. 'Alla fine' = at the end, ultimately.\nUsed to wrap up a story or describe an outcome.",
   example:"A: Alla fine, com'e andata?\nB: Alla fine tutto e andato bene!",
   exampleSrc:"A: In the end, how did it go?\nB: In the end everything went well!",
   funFact:"'Alla fine' signals the conclusion of a narrative. Italian stories often build through complications ('purtroppo...') and lucky breaks ('per fortuna...') before reaching 'alla fine' (the resolution). This structure mirrors classic Italian storytelling from Boccaccio to modern cinema."},

  {type:"teach", trg:"indimenticabile", src:"unforgettable", pos:"adj", gender:null,
   note:"Adj. Same form for masculine and feminine (-e ending).\nFrom 'in-' (not) + 'dimenticabile' (forgettable).",
   example:"A: E stata un'esperienza indimenticabile.\nB: Ne sono sicuro. Si vede dalla tua faccia!",
   exampleSrc:"A: It was an unforgettable experience.\nB: I am sure. I can see it from your face!",
   funFact:"From 'dimenticare' (to forget) with the negative prefix 'in-.' 'Un viaggio indimenticabile' (an unforgettable trip) is the ultimate compliment for a travel experience. The word encapsulates the Italian love of meaningful, emotionally rich experiences."},

  // Quiz steps
  {type:"mc", q:"What does 'conoscere' mean in the past tense?",
   opts:["To meet someone for the first time","To know someone well","To recognize","To remember"],
   ans:"To meet someone for the first time",
   hint:"'Ho conosciuto Marco ieri' means you met him for the f... t.... For running into s... you already know, use 'incontrare.'"},

  {type:"fb", s:"Com'e {1} il concerto?",
   a:["stato"],
   opts:["stato","fatto","andato","successo"],
   hint:"You are asking how something was. This is the past participle of 'essere.' The concert is masculine.",
   sSrc:"How {1} the concert?"},

  {type:"match", pairs:[
    {trg:"raccontare", src:"to tell a story"},
    {trg:"divertente", src:"fun"},
    {trg:"incredibile", src:"incredible"},
    {trg:"purtroppo", src:"unfortunately"},
    {trg:"per fortuna", src:"luckily"}
  ]},

  {type:"mc", q:"How do Italians typically structure stories?",
   opts:["Build complications, add lucky turns, resolve at the end","Just list facts","Start with the conclusion","Avoid details"],
   ans:"Build complications, add lucky turns, resolve at the end",
   hint:"Purtroppo... per fortuna... alla fine... This dramatic structure makes stories engaging and is very Italian."},

  {type:"fb", s:"{1} il museo era chiuso.",
   a:["Purtroppo"],
   opts:["Purtroppo","Finalmente","Incredibilmente","Fortunatamente"],
   hint:"You are introducing disappointing news. This word softens bad news and means 'unfortunately.'",
   sSrc:"{1} the museum was closed."},

  {type:"mc", q:"What does 'alla fine' signal in a story?",
   opts:["The conclusion or outcome","The beginning","A sudden twist","A question"],
   ans:"The conclusion or outcome",
   hint:"'Alla fine tutto e andato bene.' This expression wraps up the narrative and tells you how things turned out."},

  {type:"fb", s:"La vacanza e stata {1}! Il tempo era perfetto.",
   a:["fantastica"],
   opts:["fantastica","incredibile","divertente","indimenticabile"],
   hint:"The vacation was amazing. This adjective (feminine to match 'vacanza') means fantastic.",
   sSrc:"The vacation was {1}! The weather was perfect."},

  {type:"mc", q:"What is the literal meaning of 'raccontare'?",
   opts:["To recount (count again)","To sing again","To read again","To remember"],
   ans:"To recount (count again)",
   hint:"'Ri-' is a prefix meaning repetition, combined with a verb meaning to enumerate. Stories were originally events tallied one by one."},

  {type:"fb", s:"E stata un'esperienza {1}.",
   a:["indimenticabile"],
   opts:["indimenticabile","impossibile","incredibile","insopportabile"],
   hint:"You will never forget this experience. 'In-' (not) + 'dimenticabile' (able to be forgotten).",
   sSrc:"It was an {1} experience."}
]};
export default LESSON_6;
