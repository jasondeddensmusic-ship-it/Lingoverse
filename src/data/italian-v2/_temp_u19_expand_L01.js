// Unit 19 Expansion — Lesson 4: Il vocabolario delle relazioni
const LESSON_4 = {
  id:"itv2_u19l4", title:"Il vocabolario delle relazioni", icon:"💞", xp:15, board:true,
  steps:[
    {type:"intro", title:"Il vocabolario delle relazioni",
     desc:"Deepen your relationship vocabulary. Learn words for family bonds, friendship dynamics, and the stages of romantic relationships that define Italian social life.",
     goals:["Describe stages of a romantic relationship","Talk about family bonds and loyalty","Express attachment and separation"]},

    {type:"teach", trg:"l'amicizia", src:"the friendship", pos:"noun", gender:"f",
     note:"Feminine. From 'amico' (friend) + -izia (abstract suffix).\n'Un'amicizia sincera' = a sincere friendship.",
     example:"A: La nostra amicizia dura da vent'anni.\nB: E vero, siamo cresciuti insieme.",
     exampleSrc:"A: Our friendship has lasted twenty years.\nB: It is true, we grew up together.",
     funFact:"'Amicizia' comes from 'amicus' (friend), itself from 'amare' (to love). In Italian culture, friendships are deep and lifelong. The distinction between 'amico' (true friend) and 'conoscente' (acquaintance) is sharper than in English. Calling someone 'amico mio' carries real weight."},

    {type:"teach", trg:"innamorarsi", src:"to fall in love", pos:"verb", gender:null,
     note:"Reflexive -are verb. 'Innamorarsi di' = to fall in love with.\nFrom 'in-' + 'amore' = into love.",
     example:"A: Mi sono innamorato di lei al primo sguardo.\nB: L'amore a prima vista esiste davvero!",
     exampleSrc:"A: I fell in love with her at first sight.\nB: Love at first sight truly exists!",
     funFact:"'Innamorarsi' literally means 'to put oneself into love.' The prefix 'in-' creates a sense of entering a state. Past participle 'innamorato/a' works as both 'in love' (adjective) and 'sweetheart' (noun). 'Innamorati' (lovers) is also a classic Commedia dell'Arte character type."},

    {type:"teach", trg:"il legame", src:"the bond / tie", pos:"noun", gender:"m",
     note:"Masculine. From 'legare' (to bind, to tie).\n'Un legame forte' = a strong bond.",
     example:"A: Il legame tra madre e figlio e unico.\nB: E il legame piu forte che esista.",
     exampleSrc:"A: The bond between mother and child is unique.\nB: It is the strongest bond that exists.",
     funFact:"'Legame' comes from 'legare' (to tie), from Latin 'ligare.' The same root gives English 'ligature' and 'league.' In Italian, 'legame familiare' (family bond) and 'legame affettivo' (emotional bond) describe the ties that hold Italian family life together."},

    {type:"teach", trg:"la convivenza", src:"the cohabitation / living together", pos:"noun", gender:"f",
     note:"Feminine. From 'con-' (with) + 'vivere' (to live).\n'Andare a convivere' = to move in together.",
     example:"A: Siamo in convivenza da un anno.\nB: Vi trovate bene insieme?",
     exampleSrc:"A: We have been living together for a year.\nB: Do you get along well together?",
     funFact:"'Convivenza' has grown hugely in Italian society. Until the 1980s, living together before marriage was socially unacceptable. Now Italy recognizes 'unioni civili' (civil unions) and 'convivenze di fatto' (de facto cohabitations) legally since 2016. The word reflects deep social change."},

    {type:"teach", trg:"la separazione", src:"the separation", pos:"noun", gender:"f",
     note:"Feminine. From 'separare' (to separate).\n'La separazione legale' = legal separation.",
     example:"A: La separazione e stata dolorosa.\nB: Mi dispiace. Come stai adesso?",
     exampleSrc:"A: The separation was painful.\nB: I am sorry. How are you now?",
     funFact:"In Italian law, 'separazione' (separation) and 'divorzio' (divorce) are two distinct steps. Couples must first legally separate, then wait before filing for divorce. Italy was one of the last European countries to legalize divorce, in 1970. The waiting period was reduced from three years to six months in 2015."},

    {type:"teach", trg:"affezionarsi", src:"to grow attached / to become fond of", pos:"verb", gender:null,
     note:"Reflexive -are verb. 'Affezionarsi a' = to grow fond of.\nFrom 'affezione' (affection).",
     example:"A: Mi sono affezionata al cane del vicino.\nB: E normale, e un cane adorabile.",
     exampleSrc:"A: I have grown attached to the neighbor's dog.\nB: It is normal, it is an adorable dog.",
     funFact:"'Affezionarsi' describes a gradual emotional attachment, not sudden love. It works for people, animals, places, and even objects. 'Mi ci sono affezionato' (I have grown attached to it) explains why Italians keep old furniture, cars, and traditions. Attachment runs deep in Italian culture."},

    {type:"teach", trg:"il tradimento", src:"the betrayal / cheating", pos:"noun", gender:"m",
     note:"Masculine. From 'tradire' (to betray).\n'Un tradimento imperdonabile' = an unforgivable betrayal.",
     example:"A: Non riesco a perdonare il tradimento.\nB: Capisco, la fiducia e tutto.",
     exampleSrc:"A: I cannot forgive the betrayal.\nB: I understand, trust is everything.",
     funFact:"'Tradire' comes from Latin 'tradere' (to hand over), the same root as English 'traitor' and 'tradition.' In Italian, 'tradimento' covers both romantic infidelity and general betrayal. Dante placed traitors in the deepest circle of Hell, reflecting how seriously Italian culture views betrayal."},

    {type:"teach", trg:"mancare", src:"to miss (someone/something)", pos:"verb", gender:null,
     note:"Regular -are verb. Structure reversed: 'Mi manchi' = I miss you.\nLiterally: 'You are missing to me.'",
     example:"A: Mi manchi tanto.\nB: Anche tu mi manchi. Torno presto.",
     exampleSrc:"A: I miss you so much.\nB: I miss you too. I will be back soon.",
     funFact:"'Mancare' works like 'piacere,' with reversed subjects. 'Mi manchi' literally means 'you are lacking to me.' This structure confuses English speakers: 'I miss you' = 'Mi manchi' (you-subject), not 'Ti manco' (which means 'you miss me'). Getting this backwards is a classic learner mistake."},

    {type:"teach", trg:"il rispetto", src:"the respect", pos:"noun", gender:"m",
     note:"Masculine. From Latin 'respectus' (regard).\n'Avere rispetto per' = to have respect for.",
     example:"A: Il rispetto reciproco e fondamentale.\nB: Senza rispetto non c'e amore.",
     exampleSrc:"A: Mutual respect is fundamental.\nB: Without respect there is no love.",
     funFact:"'Rispetto' is a cornerstone of Italian social values. 'Portare rispetto' (to show respect) to elders, parents, and teachers is deeply ingrained. 'Mancare di rispetto' (to disrespect) is a serious social offense. Even casual Italian conversations about relationships circle back to 'rispetto' as essential."},

    {type:"teach", trg:"la complicita", src:"the complicity / closeness", pos:"noun", gender:"f",
     note:"Feminine. Positive in relationships, negative in crime.\n'Una bella complicita' = a wonderful closeness.",
     example:"A: Tra di noi c'e una grande complicita.\nB: Si vede, vi capite senza parlare.",
     exampleSrc:"A: Between us there is great closeness.\nB: You can see it, you understand each other without speaking.",
     funFact:"In Italian, 'complicita' has a positive meaning in relationships that it lacks in English. 'Complice' (accomplice) is negative in law but warm in love. 'Essere complici' between partners means sharing secrets, finishing each other's sentences, and having private jokes. It describes the deepest intimacy."},

    {type:"tip", title:"'Mancare' and Reversed Subjects",
     text:"'Mancare' (to miss) works like 'piacere' with reversed grammar:\n\nI miss you = Mi manchi (you are missing to me)\nYou miss me = Ti manco (I am missing to you)\nWe miss Italy = Ci manca l'Italia (Italy is missing to us)\n\nThe person or thing being missed is the SUBJECT.\nThe person who feels the absence gets the indirect object pronoun.",
     deepDive:{title:"More Reversed Verbs",
      text:"Several Italian verbs work this way: servire (to need), bastare (to be enough), interessare (to interest), sembrare (to seem). 'Mi serve un libro' = I need a book (a book is needed to me). These reversed structures are among the trickiest aspects of Italian for English speakers."}},

    // Quiz steps
    {type:"mc", q:"How do you say 'I miss you' in Italian?",
     opts:["Ti manco","Mi manchi","Io manco te","Tu manchi me"],
     ans:"Mi manchi",
     hint:"The grammar is reversed: 'you are lacking to me.' The person missed is the subject, not the object."},

    {type:"fb", s:"Mi sono {1} di lei al primo sguardo.",
     a:["innamorato"],
     opts:["innamorato","affezionato","separato","tradito"],
     hint:"Love at first sight. This reflexive verb literally means 'to put oneself into love.' The prefix 'in-' signals entering a state.",
     sSrc:"I {1} with her at first sight."},

    {type:"match", pairs:[
      {trg:"l'amicizia", src:"friendship"},
      {trg:"il legame", src:"bond / tie"},
      {trg:"la convivenza", src:"cohabitation"},
      {trg:"il tradimento", src:"betrayal"},
      {trg:"la complicita", src:"closeness / complicity"}
    ]},

    {type:"mc", q:"What are the two legal steps to end a marriage in Italy?",
     opts:["Annulment then divorce","Separation then divorce","Divorce then separation","Only divorce is required"],
     ans:"Separation then divorce",
     hint:"Italy requires a waiting period between the two stages. The law changed in 2015 to reduce the wait from three years to six months."},

    {type:"fb", s:"Il {1} reciproco e fondamentale.",
     a:["rispetto"],
     opts:["rispetto","tradimento","legame","amore"],
     hint:"This value is a cornerstone of Italian social life. 'Portare' this to elders and teachers is deeply ingrained in Italian culture.",
     sSrc:"Mutual {1} is fundamental."},

    {type:"mc", q:"What does 'complicita' mean in a romantic relationship?",
     opts:["Criminal involvement together","Deep closeness and shared understanding","Competitive rivalry between partners","Formal business partnership"],
     ans:"Deep closeness and shared understanding",
     hint:"In Italian relationships, this word is warmly positive. It describes finishing each other's sentences and sharing private jokes."},

    {type:"fb", s:"Mi sono {1} al cane del vicino.",
     a:["affezionata"],
     opts:["affezionata","innamorata","arrabbiata","separata"],
     hint:"A gradual emotional attachment, not sudden love. This reflexive verb works for people, animals, places, and even objects.",
     sSrc:"I have grown {1} to the neighbor's dog."},

    {type:"mc", q:"Where does 'tradire' (to betray) come from?",
     opts:["Arabic 'tadrij' (deception)","Germanic 'tradi' (treachery)","Latin 'tradere' (to hand over)","Greek 'tradikos' (dishonest)"],
     ans:"Latin 'tradere' (to hand over)",
     hint:"The same root gives English 'traitor' and even 'tradition' (handing down customs). Dante placed traitors in the deepest circle."}
  ]
};
export default LESSON_4;
