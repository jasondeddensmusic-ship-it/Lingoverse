// Unit 01 Expansion — Lesson 5: Social Situations
// Theme: Inviting, accepting, refusing, thanking in social contexts

const LESSON_5 = {
  id:"itv2_u1l5", title:"Situazioni sociali", icon:"\ud83c\udf89", xp:15, board:true,
  steps:[
    {type:"intro", title:"Situazioni sociali",
     desc:"Learn how to handle common social situations: inviting people, accepting or declining, and responding appropriately.",
     goals:["Invite someone to do something","Accept or decline an invitation","Use appropriate social responses"]},

    {type:"teach", trg:"invitare", src:"to invite", pos:"verb", gender:null,
     note:"Regular -are verb. 'Ti invito' = I invite you (informal).\nFrom Latin 'invitare' (to treat, to entertain).",
     example:"A: Ti invito a cena stasera.\nB: Che bella idea! Grazie!",
     exampleSrc:"A: I invite you to dinner tonight.\nB: What a lovely idea! Thanks!",
     funFact:"Italians love spontaneous invitations. 'Ti va di...' (do you feel like...) is an even more casual way to invite. Italian social life revolves around shared meals and coffee."},

    {type:"teach", trg:"accettare", src:"to accept", pos:"verb", gender:null,
     note:"Regular -are verb. 'Accetto con piacere' = I accept with pleasure.\nFrom Latin 'acceptare' (to receive willingly).",
     example:"A: Vuoi venire alla festa?\nB: Si, accetto con piacere!",
     exampleSrc:"A: Do you want to come to the party?\nB: Yes, I accept with pleasure!",
     funFact:"From Latin 'accipere' (to take, receive). English 'accept' and Italian 'accettare' are obvious cognates. The prefix 'ad-' (toward) + 'capere' (to take) = to take toward oneself."},

    {type:"teach", trg:"rifiutare", src:"to refuse / to decline", pos:"verb", gender:null,
     note:"Regular -are verb. Considered direct; Italians usually soften refusals.\n'Mi dispiace, ma...' is the polite way to decline.",
     example:"A: Vuoi un altro caffe?\nB: No grazie, devo rifiutare. Ho gia bevuto tre!",
     exampleSrc:"A: Do you want another coffee?\nB: No thanks, I must decline. I already had three!",
     funFact:"Italians rarely say a blunt 'no.' They soften refusals with phrases like 'mi dispiace ma non posso' (I'm sorry but I cannot) or 'magari un'altra volta' (maybe another time). Direct refusal feels rude."},

    {type:"teach", trg:"ringraziare", src:"to thank", pos:"verb", gender:null,
     note:"Regular -are verb. 'Ti ringrazio' = I thank you.\nFrom 'ri-' (again) + Latin 'gratiare' (to show grace).",
     example:"A: Ti ringrazio per il regalo!\nB: Figurati!",
     exampleSrc:"A: I thank you for the gift!\nB: Don't mention it!",
     funFact:"While 'grazie' is the quick thank-you, 'ringraziare' is the verb for formally thanking someone. 'La ringrazio' (I thank you, formal) is common in business and written correspondence."},

    {type:"teach", trg:"congratulazioni", src:"congratulations", pos:"noun", gender:"f",
     note:"Feminine plural. More formal than 'complimenti.'\nUsed for big achievements: graduation, wedding, promotion.",
     example:"A: Mi sono laureato!\nB: Congratulazioni! Che bello!",
     exampleSrc:"A: I graduated!\nB: Congratulations! How wonderful!",
     funFact:"'Congratulazioni' is used for major life events. 'Complimenti' works for everyday praise. At an Italian graduation, friends throw a laurel wreath on the graduate's head, a tradition from ancient Rome."},

    {type:"teach", trg:"benvenuto", src:"welcome (m.)", pos:"adj", gender:"m",
     note:"Masculine: benvenuto. Feminine: benvenuta. Plural: benvenuti/benvenute.\nLiterally: ben (well) + venuto (come).",
     example:"A: Benvenuto a Roma!\nB: Grazie! Sono felice di essere qui.",
     exampleSrc:"A: Welcome to Rome!\nB: Thanks! I am happy to be here.",
     funFact:"'Benvenuto' must agree with the person being welcomed: benvenuto (to a man), benvenuta (to a woman), benvenuti (to a mixed group), benvenute (to all women). Gender agreement even in greetings."},

    {type:"teach", trg:"a presto", src:"see you soon", pos:"adv", gender:null,
     note:"Common farewell. 'Presto' = soon, early.\nAlternatives: a dopo (see you later), a domani (see you tomorrow).",
     example:"A: Devo andare. A presto!\nB: A presto! Buona giornata!",
     exampleSrc:"A: I have to go. See you soon!\nB: See you soon! Have a nice day!",
     funFact:"Italian has specific farewells for different timeframes: a presto (soon), a dopo (later today), a domani (tomorrow), a lunedi (see you Monday), a mai piu (never again, used humorously)."},

    {type:"teach", trg:"buona giornata", src:"have a nice day", pos:"intj", gender:null,
     note:"Said when parting during daytime. Evening version: buona serata.\n'Giornata' emphasizes the whole day ahead.",
     example:"A: Arrivederci!\nB: Arrivederci, buona giornata!",
     exampleSrc:"A: Goodbye!\nB: Goodbye, have a nice day!",
     funFact:"'Giornata' vs 'giorno': 'giorno' is the calendar day, 'giornata' emphasizes the experience of the day. 'Buon giorno' (hello) vs 'buona giornata' (enjoy your day). This distinction exists for sera/serata and notte/nottata too."},

    {type:"teach", trg:"che bello", src:"how nice / how beautiful", pos:"intj", gender:null,
     note:"Exclamation of delight. Feminine: 'che bella!' Plural: 'che belli/belle!'\nOne of the most common Italian reactions.",
     example:"A: Domani andiamo al mare!\nB: Che bello! Non vedo l'ora!",
     exampleSrc:"A: Tomorrow we are going to the sea!\nB: How nice! I can't wait!",
     funFact:"Italians are expressive people and 'che bello!' is their go-to exclamation for anything positive. You will hear it dozens of times a day in Italy, from seeing a baby to tasting good food."},

    {type:"teach", trg:"davvero", src:"really / truly", pos:"adv", gender:null,
     note:"Used for emphasis or surprise. From 'da' (from) + 'vero' (true).\nSynonym: 'veramente.'",
     example:"A: Ho vinto un viaggio in Italia!\nB: Davvero? Che fortunato!",
     exampleSrc:"A: I won a trip to Italy!\nB: Really? How lucky!",
     funFact:"'Davvero' literally means 'from truth.' It can express genuine surprise ('Davvero?') or intensify a statement ('E davvero bello' = it is truly beautiful). Italians use it constantly in conversation."},

    {type:"teach", trg:"magari", src:"maybe / if only / I wish", pos:"adv", gender:null,
     note:"One of the most Italian words. Can mean 'maybe,' 'hopefully,' or 'I wish!'\nContext determines the exact meaning.",
     example:"A: Vuoi venire in Italia?\nB: Magari! Sarebbe bellissimo!",
     exampleSrc:"A: Do you want to come to Italy?\nB: I wish! That would be wonderful!",
     funFact:"'Magari' is famously untranslatable. As 'maybe' it is neutral, but as 'I wish!' it is deeply emotional. When an Italian says 'Magari!' with feeling, they mean 'If only that could happen!' From Greek 'makarios' (blessed)."},

    {type:"teach", trg:"che peccato", src:"what a pity / too bad", pos:"intj", gender:null,
     note:"Expression of disappointment. 'Peccato' literally means 'sin.'\nUsed for mild to moderate disappointment.",
     example:"A: Non posso venire alla festa.\nB: Che peccato! Sara per la prossima volta.",
     exampleSrc:"A: I cannot come to the party.\nB: What a pity! It will be next time.",
     funFact:"'Peccato' means both 'sin' (religious) and 'pity/shame' (everyday). 'Che peccato!' literally means 'what a sin!' but is used casually for any small disappointment. No religious connotation in daily use."},

    // Quiz steps
    {type:"mc", q:"How do Italians usually soften a refusal?",
     opts:["Mi dispiace, ma non posso","No","Rifiuto","Non voglio"],
     ans:"Mi dispiace, ma non posso",
     hint:"A direct 'no' feels rude in Italian culture. Adding an apology and reason makes the decline graceful."},

    {type:"fb", s:"Ti {1} a cena stasera.",
     a:["invito"],
     opts:["invito","accetto","ringrazio","rifiuto"],
     hint:"You are asking someone to come eat dinner with you. This is the first person of 'invitare.'",
     sSrc:"I {1} you to dinner tonight."},

    {type:"mc", q:"What does 'magari' mean when said with excitement?",
     opts:["I wish! / If only!","Maybe","Never","Of course"],
     ans:"I wish! / If only!",
     hint:"This famously untranslatable word changes meaning with emotion. Said with feeling, it expresses deep longing."},

    {type:"fb", s:"{1} a Roma!",
     a:["Benvenuto"],
     opts:["Benvenuto","Arrivederci","Buongiorno","Piacere"],
     hint:"You are welcoming a male visitor to the city. Literally: 'well come.'",
     sSrc:"{1} to Rome!"},

    {type:"match", pairs:[
      {trg:"invitare", src:"to invite"},
      {trg:"accettare", src:"to accept"},
      {trg:"rifiutare", src:"to refuse"},
      {trg:"ringraziare", src:"to thank"},
      {trg:"congratulazioni", src:"congratulations"}
    ]},

    {type:"mc", q:"What is the difference between 'giornata' and 'giorno'?",
     opts:["Giornata = the experience, giorno = calendar day","They are the same","Giornata is formal","Giorno is for evenings"],
     ans:"Giornata = the experience, giorno = calendar day",
     hint:"When wishing someone a good d... ahead, use the form that emphasizes the e... of the whole d...."},

    {type:"fb", s:"Non posso venire. Che {1}!",
     a:["peccato"],
     opts:["peccato","bello","bravo","buono"],
     hint:"This word literally means 'sin' but is used to express mild disappointment or pity.",
     sSrc:"I cannot come. What a {1}!"},

    {type:"mc", q:"How should 'benvenuto' change for a group of women?",
     opts:["Benvenute","Benvenuti","Benvenuta","Benvenuto"],
     ans:"Benvenute",
     hint:"Gender agreement applies even to greetings. All-female plural takes the -e ending."},

    {type:"fb", s:"Ho vinto un milione! {1}? Non ci credo!",
     a:["Davvero"],
     opts:["Davvero","Magari","Peccato","Bello"],
     hint:"You are asking if something is true. This word literally means 'from truth.'",
     sSrc:"I won a million! {1}? I can not believe it!"},

    {type:"mc", q:"What does 'a presto' mean?",
     opts:["See you soon","See you tomorrow","Goodbye forever","Good morning"],
     ans:"See you soon",
     hint:"'Presto' means 'early' or in the near future. Combined with 'a' (until), it becomes a farewell for the short term."}
  ]
};
export default LESSON_5;
