// Unit 01 Expansion. Lesson 4: Polite Phrases
// Theme: Essential courtesy expressions for daily interactions

const LESSON_4 = {
  id:"itv2_u1l4", title:"Espressioni di cortesia", icon:"\ud83d\ude4f", xp:15, board:true,
  steps:[
    {type:"intro", title:"Espressioni di cortesia",
     desc:"Learn the polite phrases that make Italian conversations smooth and respectful.",
     goals:["Use common courtesy expressions","Apologize and ask permission","Express gratitude in different ways"]},

    {type:"teach", trg:"mi scusi", src:"excuse me (formal)", pos:"verb", gender:null,
     note:"Formal version of 'scusa.' Uses the Lei form.\nUsed to get attention or apologize to strangers.",
     example:"A: Mi scusi, a che ora apre il museo?\nB: Alle nove.",
     exampleSrc:"A: Excuse me, what time does the museum open?\nB: At nine.",
     funFact:"'Scusare' is reflexive here: 'mi scusi' literally means 'excuse me yourself.' The formal imperative uses the third person subjunctive, a grammar pattern unique to Italian politeness."},

    {type:"teach", trg:"permesso", src:"excuse me (passing through)", pos:"intj", gender:null,
     note:"Said when squeezing past someone or entering a room.\nLiterally: 'permission.' Very commonly used.",
     example:"A: Permesso!\nB: Prego, avanti!",
     exampleSrc:"A: Excuse me! (passing through)\nB: Please, go ahead!",
     funFact:"Italians say 'permesso' when entering someone's home, squeezing through a crowd, or passing someone on a bus. It is one of the first words you notice in Italy because it is said so frequently."},

    {type:"teach", trg:"mi dispiace", src:"I'm sorry", pos:"verb", gender:null,
     note:"Literally: 'it displeases me.' Used for genuine apologies.\nStronger than 'scusa' which is more casual.",
     example:"A: Mi dispiace per il ritardo.\nB: Non ti preoccupare!",
     exampleSrc:"A: I'm sorry for the delay.\nB: Don't worry!",
     funFact:"'Mi dispiace' expresses genuine regret or sympathy. Use 'scusa' for small things (bumping into someone) and 'mi dispiace' for real apologies or condolences. The verb 'dispiacere' means 'to displease.'"},

    {type:"teach", trg:"non ti preoccupare", src:"don't worry (informal)", pos:"verb", gender:null,
     note:"Informal reassurance. Formal: 'non si preoccupi.'\nFrom 'preoccupare' (to worry, to preoccupy).",
     example:"A: Scusa, sono in ritardo!\nB: Non ti preoccupare, va bene!",
     exampleSrc:"A: Sorry, I am late!\nB: Don't worry, it's fine!",
     funFact:"The reflexive 'preoccuparsi' comes from Latin 'prae' (before) + 'occupare' (to seize). To worry is literally 'to seize yourself beforehand.' English 'preoccupy' shares the same root."},

    {type:"teach", trg:"figurati", src:"don't mention it / no problem (informal)", pos:"verb", gender:null,
     note:"Casual way to say 'you're welcome' or dismiss thanks.\nFormal: 'si figuri.' Very Italian expression.",
     example:"A: Grazie mille per l'aiuto!\nB: Figurati, di niente!",
     exampleSrc:"A: Thanks so much for the help!\nB: Don't mention it, it's nothing!",
     funFact:"'Figurati' literally means 'imagine (yourself),' as in 'imagine that I would mind helping you.' It conveys warmth and generosity. One of the most characteristic Italian expressions."},

    {type:"teach", trg:"di niente", src:"it's nothing / you're welcome", pos:"adv", gender:null,
     note:"Casual response to thanks. Literally: 'of nothing.'\nAlternative: 'di nulla' (same meaning).",
     example:"A: Grazie per il caffe!\nB: Di niente!",
     exampleSrc:"A: Thanks for the coffee!\nB: It's nothing!",
     funFact:"Italians have many ways to say 'you're welcome': prego, di niente, figurati, non c'e di che, ma di che. Each carries a slightly different warmth. 'Di niente' is casual and friendly."},

    {type:"teach", trg:"non c'e di che", src:"don't mention it", pos:"adv", gender:null,
     note:"Literally: 'there is nothing for which (to thank me).'\nSlightly more elegant than 'di niente.'",
     example:"A: Grazie per l'informazione!\nB: Non c'e di che!",
     exampleSrc:"A: Thanks for the information!\nB: Don't mention it!",
     funFact:"This phrase is a shortened form of 'non c'e di che ringraziarmi' (there is nothing for which to thank me). It sounds modest and gracious, typical of Italian communication style."},

    {type:"teach", trg:"complimenti", src:"congratulations / compliments", pos:"noun", gender:"m",
     note:"Masculine plural. Used to congratulate or praise someone.\nSingular 'complimento' is rare in this usage.",
     example:"A: Ho superato l'esame!\nB: Complimenti! Bravissimo!",
     exampleSrc:"A: I passed the exam!\nB: Congratulations! Very well done!",
     funFact:"'Fare complimenti' means to be overly polite or to refuse offered food/drink out of politeness. 'Non fare complimenti!' means 'help yourself, don't be shy!' A very common Italian social dynamic."},

    {type:"teach", trg:"auguri", src:"best wishes / happy birthday", pos:"noun", gender:"m",
     note:"Masculine plural. Used for birthdays, holidays, and celebrations.\n'Tanti auguri' = many wishes (the birthday song).",
     example:"A: Oggi e il mio compleanno!\nB: Tanti auguri!",
     exampleSrc:"A: Today is my birthday!\nB: Happy birthday!",
     funFact:"'Tanti auguri a te' is the Italian birthday song, sung to the same melody as 'Happy Birthday.' 'Auguri' comes from Latin 'augurium' (divination), as Romans wished good omens on celebrations."},

    {type:"teach", trg:"in bocca al lupo", src:"good luck (idiom)", pos:"intj", gender:null,
     note:"Literally: 'in the mouth of the wolf.' The standard Italian good luck phrase.\nResponse: 'Crepi!' (May it die!).",
     example:"A: Domani ho l'esame.\nB: In bocca al lupo!\nA: Crepi!",
     exampleSrc:"A: Tomorrow I have the exam.\nB: Good luck!\nA: Thanks! (lit. May it die!)",
     funFact:"Never say 'buona fortuna' (good luck) in Italy. It is considered bad luck, like saying 'break a leg' in English. 'In bocca al lupo' with the response 'crepi' is the only accepted form."},

    {type:"teach", trg:"cin cin", src:"cheers (when toasting)", pos:"intj", gender:null,
     note:"Said when clinking glasses. Make eye contact during the toast.\nFrom Chinese 'qing qing' (please please).",
     example:"A: Cin cin! Alla salute!\nB: Cin cin!",
     exampleSrc:"A: Cheers! To health!\nB: Cheers!",
     funFact:"'Cin cin' entered Italian through Portuguese sailors who traded with China. The original Chinese 'qing qing' meant 'please, please.' In Italy, always maintain eye contact while toasting or risk seven years of bad luck."},

    {type:"teach", trg:"salute", src:"health / bless you", pos:"noun", gender:"f",
     note:"Feminine. Used when someone sneezes or as a toast ('alla salute').\nFrom Latin 'salus' (health, safety).",
     example:"A: Etciu!\nB: Salute!\nA: Grazie!",
     exampleSrc:"A: Achoo!\nB: Bless you!\nA: Thanks!",
     funFact:"'Salute' works both as a sneeze response and a drinking toast. 'Alla salute!' (to health!) is the most common Italian toast. The Latin root 'salus' also gave English 'salutation' and 'salvation.'"},

    // Quiz steps
    {type:"mc", q:"What do you say when squeezing past someone?",
     opts:["Permesso","Scusa","Mi dispiace","Prego"],
     ans:"Permesso",
     hint:"This word literally means 'permission.' You say it when physically moving through a space occupied by others."},

    {type:"fb", s:"Mi {1} per il ritardo.",
     a:["dispiace"],
     opts:["dispiace","scusi","scusa","permesso"],
     hint:"This is a genuine apology, stronger than a casual 'sorry.' It literally means 'it displeases me.'",
     sSrc:"I am {1} for the delay."},

    {type:"mc", q:"How should you respond to 'In bocca al lupo'?",
     opts:["Crepi!","Grazie!","Prego!","Salute!"],
     ans:"Crepi!",
     hint:"The traditional response literally means 'may it die.' Saying 'grazie' instead would be considered bad luck."},

    {type:"fb", s:"Grazie mille! {1}, di niente!",
     a:["Figurati"],
     opts:["Figurati","Permesso","Salute","Auguri"],
     hint:"This casual response to thanks literally means 'imagine.' It dismisses the need for gratitude warmly.",
     sSrc:"Thanks so much! {1}, it's nothing!"},

    {type:"match", pairs:[
      {trg:"mi scusi", src:"excuse me (formal)"},
      {trg:"permesso", src:"excuse me (passing)"},
      {trg:"mi dispiace", src:"I'm sorry"},
      {trg:"figurati", src:"don't mention it"},
      {trg:"complimenti", src:"congratulations"}
    ]},

    {type:"mc", q:"What does 'non c'e di che' literally mean?",
     opts:["There is nothing for which (to thank)","It is nothing","Do not worry","You are welcome"],
     ans:"There is nothing for which (to thank)",
     hint:"A three-part expression: negation + existence verb + a relative phrase. Together it makes a modest, gracious dismissal of gratitude."},

    {type:"fb", s:"Oggi e il mio compleanno! Tanti {1}!",
     a:["auguri"],
     opts:["auguri","complimenti","salute","grazie"],
     hint:"This is what Italians say for birthdays and celebrations. It means 'best wishes' or 'many wishes.'",
     sSrc:"Today is my birthday! Happy {1}!"},

    {type:"mc", q:"What do you say when someone sneezes in Italy?",
     opts:["Salute!","Auguri!","Cin cin!","Complimenti!"],
     ans:"Salute!",
     hint:"This word means 'health.' It works both as a sneeze response and as a drinking toast."},

    {type:"mc", q:"What is the Italian toasting expression (like 'cheers') said while clinking glasses?",
     opts:["Cin cin!","In in!","Buona buona!","Tanti tanti!"],
     ans:"Cin cin!",
     hint:"This expression entered Italian from Chinese traders via Portuguese sailors. Always maintain eye contact."},

    {type:"mc", q:"When is 'mi dispiace' used instead of 'scusa'?",
     opts:["For genuine apologies or sympathy","For small accidents","When passing someone","When ordering food"],
     ans:"For genuine apologies or sympathy",
     hint:"This phrase expresses deeper regret. 'Scusa' is casual; this one is for real sorrow or condolence."}
  ]
};
export default LESSON_4;
