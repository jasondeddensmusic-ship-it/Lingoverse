// Batch 4 — Unit 01, Lesson 2: Polite Phrases & Social Niceties
const BATCH4_U01_L2 = {
  id:"itv2_u01l_b4_2", title:"Parole gentili", icon:"\uD83C\uDF38", xp:15, board:true,
  steps:[
    {type:"intro", title:"Parole gentili",
     desc:"Learn essential polite phrases that make your Italian sound natural and respectful in any social situation.",
     goals:["Use polite expressions in daily life","Apologize and excuse yourself","Express gratitude and agreement"]},

    {type:"teach", trg:"per favore", src:"please", pos:"adv", gender:null,
     note:"The essential polite word. Literally: for favor/kindness.\nCan go at the beginning or end of a request.",
     example:"A: Un caffe, per favore.\nB: Subito!",
     exampleSrc:"A: A coffee, please.\nB: Right away!",
     funFact:"'Per favore' is standard but Italians also say 'per cortesia' (by courtesy) or 'per piacere' (by pleasure). Each region tends to prefer one. 'Per piacere' is more common in the north."},

    {type:"teach", trg:"grazie mille", src:"thanks a lot / a thousand thanks", pos:"intj", gender:null,
     note:"Stronger than simple 'grazie.' Literally: a thousand thanks.\nVery warm and appreciative.",
     example:"A: Ecco il tuo libro.\nB: Grazie mille! Sei gentilissimo.",
     exampleSrc:"A: Here is your book.\nB: Thanks a lot! You are very kind.",
     funFact:"Italians also say 'grazie tante' (many thanks), 'grazie infinite' (infinite thanks), and even 'grazie di cuore' (thanks from the heart). Italian gratitude comes in many flavors."},

    {type:"teach", trg:"scusa", src:"sorry / excuse me (informal)", pos:"intj", gender:null,
     note:"Informal. From 'scusare' (to excuse). Use with friends and peers.\nFormal version: 'scusi.'",
     example:"A: Scusa, posso passare?\nB: Certo, prego!",
     exampleSrc:"A: Excuse me, can I pass?\nB: Of course, go ahead!",
     funFact:"'Scusa' is the tu form (informal) and 'scusi' is the Lei form (formal). Using the wrong one is a common learner mistake. In a shop, always use 'scusi.' With friends, always 'scusa.'"},

    {type:"teach", trg:"mi dispiace", src:"I am sorry", pos:"verb", gender:null,
     note:"Deeper apology than 'scusa.' Expresses genuine regret.\nLiterally: it displeases me.",
     example:"A: Mi dispiace per il ritardo.\nB: Non ti preoccupare!",
     exampleSrc:"A: I am sorry for the delay.\nB: Don't worry!",
     funFact:"'Mi dispiace' literally means 'it displeases me,' showing that Italian expresses sorrow as something that happens TO you, not something you actively do. A more passive, empathetic construction."},

    {type:"teach", trg:"niente", src:"nothing / it's nothing", pos:"pron", gender:null,
     note:"Used as 'you're welcome' after someone thanks you.\nAlso means 'nothing' in general.",
     example:"A: Grazie per l'aiuto!\nB: Di niente!",
     exampleSrc:"A: Thanks for the help!\nB: It's nothing!",
     funFact:"'Di niente' (of nothing) is one of many Italian responses to thanks. Others: 'prego' (please/go ahead), 'figurati' (don't mention it), 'non c'e di che' (there's nothing to thank for). Italians have at least six ways to say 'you're welcome.'"},

    {type:"teach", trg:"permesso", src:"may I? / excuse me (to pass)", pos:"intj", gender:null,
     note:"Said when entering a room or passing through a crowd.\nLiterally: permission.",
     example:"A: Permesso?\nB: Avanti, prego!",
     exampleSrc:"A: May I come in?\nB: Come in, please!",
     funFact:"Saying 'permesso' when entering someone's home is deeply ingrained in Italian culture. Even close friends say it. Not saying it when entering is considered quite rude. It shows you respect the owner's space."},

    {type:"teach", trg:"d'accordo", src:"agreed / okay / all right", pos:"adv", gender:null,
     note:"Express agreement. 'Accordo' = agreement.\nVery common in conversation.",
     example:"A: Ci vediamo alle otto?\nB: D'accordo! A dopo.",
     exampleSrc:"A: Shall we meet at eight?\nB: Agreed! See you later.",
     funFact:"From 'accordo' (agreement), which shares a root with 'accord' in English and French. Italians also say 'va bene' (it goes well) or just 'ok' for agreement. 'D'accordo' is slightly more formal."},

    {type:"teach", trg:"va bene", src:"okay / it's fine", pos:"verb", gender:null,
     note:"Universal expression of acceptance. Literally: it goes well.\nWorks in almost any situation.",
     example:"A: Il treno parte alle dieci.\nB: Va bene, allora ci vediamo alla stazione.",
     exampleSrc:"A: The train leaves at ten.\nB: Okay, then we'll meet at the station.",
     funFact:"'Va bene' is probably the most versatile Italian phrase. It means 'okay,' 'fine,' 'all right,' 'it works,' 'sounds good,' and more. If you learn only one phrase for agreement, this is the one."},

    {type:"teach", trg:"ecco", src:"here it is / there you go", pos:"adv", gender:null,
     note:"Used when presenting or showing something.\nFrom Latin 'ecce' (behold).",
     example:"A: Dov'e il mio caffe?\nB: Ecco il tuo caffe!",
     exampleSrc:"A: Where is my coffee?\nB: Here is your coffee!",
     funFact:"From Latin 'ecce' (behold), the same word Caesar used: 'ecce homo' (behold the man). In modern Italian, 'ecco' is casual and everyday but carries 2,000 years of linguistic history."},

    {type:"teach", trg:"auguri!", src:"best wishes! / happy birthday!", pos:"intj", gender:null,
     note:"Used for birthdays, holidays, and celebrations.\nPlural of 'augurio' (wish).",
     example:"A: Oggi e il mio compleanno!\nB: Auguri! Quanti anni compi?",
     exampleSrc:"A: Today is my birthday!\nB: Happy birthday! How old are you turning?",
     funFact:"'Auguri' is the universal Italian celebration word. Birthday? Auguri. Wedding? Auguri. New Year? Auguri. Christmas? Auguri. Italians even say 'in bocca al lupo' (in the wolf's mouth) for good luck, and you reply 'crepi il lupo' (may the wolf die)."},

    {type:"teach", trg:"in bocca al lupo!", src:"good luck! (break a leg!)", pos:"intj", gender:null,
     note:"Literally: in the mouth of the wolf. The reply is 'crepi!'\nUsed before exams, performances, challenges.",
     example:"A: Domani ho l'esame.\nB: In bocca al lupo!\nA: Crepi!",
     exampleSrc:"A: Tomorrow I have the exam.\nB: Good luck!\nA: Thanks!",
     funFact:"Never reply 'grazie' to this. The traditional reply is 'crepi!' (may it die) or 'crepi il lupo!' Saying 'grazie' is considered bad luck. This superstition is taken seriously, especially in theater and academia."},

    {type:"teach", trg:"cin cin!", src:"cheers! (when toasting)", pos:"intj", gender:null,
     note:"Said when clinking glasses. Onomatopoeic: imitates the glass sound.\nVery informal.",
     example:"A: Cin cin! Alla salute!\nB: Cin cin! Alla nostra!",
     exampleSrc:"A: Cheers! To health!\nB: Cheers! To us!",
     funFact:"'Cin cin' imitates the sound of glasses clinking. But be careful: in Japanese, 'chin chin' is a vulgar word. Italians abroad sometimes use 'salute!' (health!) instead to avoid embarrassment."},

    {type:"teach", trg:"complimenti!", src:"congratulations! / well done!", pos:"intj", gender:null,
     note:"Used to praise achievement. Plural of 'complimento.'\nAlso means 'don't be shy' (non fare complimenti).",
     example:"A: Ho passato l'esame!\nB: Complimenti! Bravissimo!",
     exampleSrc:"A: I passed the exam!\nB: Congratulations! Very well done!",
     funFact:"'Non fare complimenti!' means 'don't be shy, help yourself!' When an Italian host says this about food, they mean it. Refusing food too many times in Italy can be seen as rude or ungrateful."},

    {type:"teach", trg:"buona giornata!", src:"have a nice day!", pos:"intj", gender:null,
     note:"Said when parting during daytime. 'Giornata' = the whole day.\n'Buona serata' = have a nice evening.",
     example:"A: Arrivederci!\nB: Arrivederci, buona giornata!",
     exampleSrc:"A: Goodbye!\nB: Goodbye, have a nice day!",
     funFact:"Italian distinguishes 'giorno' (day as a unit) from 'giornata' (the experience of the day). 'Buon giorno' greets someone. 'Buona giornata' wishes them a pleasant day ahead. This nuance does not exist in English."},

    // Quiz steps
    {type:"mc", q:"Come rispondi quando qualcuno dice 'Grazie mille'?",
     opts:["Di niente!","Mi dispiace!","Auguri!","Cin cin!"],
     ans:"Di niente!",
     hint:"This reply literally means 'of nothing,' a way to say 'you're welcome.'"},

    {type:"fb", s:"{1}, posso entrare?",
     a:["Permesso"], opts:["Permesso","Scusa","Prego","Ecco"],
     hint:"This word asks for permission to enter a room or home.",
     sSrc:"{1}, may I come in?"},

    {type:"match", pairs:[
      {trg:"per favore", src:"please"},
      {trg:"mi dispiace", src:"I am sorry"},
      {trg:"d'accordo", src:"agreed"},
      {trg:"auguri", src:"best wishes"},
      {trg:"ecco", src:"here it is"}
    ]},

    {type:"mc", q:"Cosa dici a un amico prima di un esame importante?",
     opts:["In bocca al lupo!","Cin cin!","Buona giornata!","Complimenti!"],
     ans:"In bocca al lupo!",
     hint:"This Italian expression literally mentions a wolf and is for wishing luck."},

    {type:"fb", s:"A: Ci vediamo domani alle nove?\nB: {1}, a domani!",
     a:["Va bene"], opts:["Va bene","Mi dispiace","Auguri","Permesso"],
     hint:"The speaker is agreeing to the meeting. This common phrase means 'it's fine.'",
     sSrc:"A: Shall we meet tomorrow at nine?\nB: {1}, see you tomorrow!"},

    {type:"mc", q:"Quando alziamo i bicchieri, cosa diciamo?",
     opts:["Cin cin!","Auguri!","Complimenti!","Figurati!"],
     ans:"Cin cin!",
     hint:"This sound imitates glasses clinking together during a toast."},

    {type:"fb", s:"{1} per il ritardo, c'era traffico.",
     a:["Mi dispiace"], opts:["Mi dispiace","Va bene","Per favore","D'accordo"],
     hint:"You are expressing a genuine apology, deeper than a simple 'excuse me.'",
     sSrc:"{1} for the delay, there was traffic."},

    {type:"mc", q:"Qual e la differenza tra 'buongiorno' e 'buona giornata'?",
     opts:["Buongiorno greets; buona giornata wishes a nice day ahead","They mean the same thing","Buona giornata is informal; buongiorno is formal","Buongiorno is for morning; buona giornata is for evening"],
     ans:"Buongiorno greets; buona giornata wishes a nice day ahead",
     hint:"One is for arriving, the other is for parting. Think about giorno vs g...."}
  ]
};
export default BATCH4_U01_L2;
