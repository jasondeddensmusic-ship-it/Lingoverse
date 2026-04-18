// Batch 8 – Unit 01 (A1.1 Greetings): Situational Greetings
const BATCH8_L1 = {
  id:"jav2_u01l_b8_1", title:"ばめんべつあいさつ", icon:"🎌", xp:15, board:true,
  steps:[
    {type:"intro", title:"ばめんべつあいさつ",
     desc:"Learn greetings for specific situations: visiting someone, returning home, seasonal greetings, and phone manners. These set phrases are the social glue of daily Japanese life.",
     goals:["Use greetings for entering and leaving homes","Handle phone greetings","Express seasonal and occasional greetings"]},

    {type:"teach", trg:"もしもし", src:"hello (on the phone)", pos:"intj", gender:null,
     note:"Used exclusively for phone calls.\nNever used face to face.",
     example:"A: もしもし、たなかですが。\nB: あ、たなかさん、おひさしぶりです。",
     exampleSrc:"A: Hello, this is Tanaka.\nB: Oh, Tanaka, it has been a while.",
     funFact:"もしもし comes from もうす (to speak humbly). Saying it twice was a way to confirm the early telephone connection was working. Legend says ghosts and foxes cannot say もしもし twice, so it doubles as a test that you are human."},

    {type:"teach", trg:"ただいま", src:"I am home", pos:"intj", gender:null,
     note:"Said when arriving home. Short for ただいまかえりました.\nThe reply is おかえりなさい.",
     example:"A: ただいま！\nB: おかえりなさい。晩(ばん)ごはんができてるよ。",
     exampleSrc:"A: I am home!\nB: Welcome back. Dinner is ready.",
     funFact:"ただいま literally means 'just now,' short for 'I have returned just now.' Even adults living alone sometimes say ただいま to their pets or even to an empty room out of habit. It marks the transition from outside world to home."},

    {type:"teach", trg:"おかえりなさい", src:"welcome back / welcome home", pos:"intj", gender:null,
     note:"The reply to ただいま.\nCasual: おかえり.",
     example:"A: ただいま。つかれた。\nB: おかえりなさい。お風呂(ふろ)わいてるよ。",
     exampleSrc:"A: I am home. I am tired.\nB: Welcome back. The bath is ready.",
     funFact:"おかえりなさい literally means 'please return.' It is a command form expressing the wish that the person keeps coming home safely. In anime and manga, this exchange is one of the most emotionally loaded domestic scenes."},

    {type:"teach", trg:"おひさしぶりです", src:"it has been a long time", pos:"intj", gender:null,
     note:"Used when meeting someone after a while.\nCasual: ひさしぶり.",
     example:"A: おひさしぶりです。おげんきでしたか？\nB: はい、おかげさまで。",
     exampleSrc:"A: It has been a long time. Have you been well?\nB: Yes, thanks to you.",
     funFact:"ひさしぶり uses the kanji 久(ひさ)しぶり (long absence). There is no fixed rule for how long counts as ひさしぶり. Some people say it after two weeks, others after months. Adding お at the start makes it polite enough for business."},

    {type:"teach", trg:"おめでとうございます", src:"congratulations", pos:"intj", gender:null,
     note:"Used for birthdays, New Year, weddings, graduations.\nCasual: おめでとう.",
     example:"A: 誕生日(たんじょうび)おめでとうございます！\nB: ありがとうございます！",
     exampleSrc:"A: Happy birthday!\nB: Thank you!",
     funFact:"おめでとう comes from めでたい (auspicious/joyful). On New Year, everyone says あけましておめでとうございます. Japanese culture has many おめでとう occasions: 七五三(しちごさん) (ages 3, 5, 7), coming of age (20), and even passing exams."},

    {type:"mc", q:"What do you say when answering the phone in Japanese?", opts:["もしもし","ただいま","おかえり","こんにちは"], ans:"もしもし",
     hint:"This greeting is used exclusively for telephone conversations, never face to face."},

    {type:"teach", trg:"おげんきですか", src:"how are you?", pos:"intj", gender:null,
     note:"Polite health inquiry. Not used as casually as English 'How are you?'\nUsed after not seeing someone for a while.",
     example:"A: おげんきですか？\nB: はい、元気(げんき)です。あなたは？",
     exampleSrc:"A: How are you?\nB: Yes, I am well. And you?",
     funFact:"Unlike English, Japanese speakers do not ask おげんきですか every time they meet. It is reserved for people you have not seen recently. Asking it daily would sound strange. For daily greetings, a simple おはよう or こんにちは is enough."},

    {type:"teach", trg:"よろしくおねがいします", src:"pleased to meet you / please treat me well", pos:"intj", gender:null,
     note:"The single most versatile phrase in Japanese.\nUsed for introductions, requests, and starting relationships.",
     example:"A: はじめまして。たなかです。よろしくおねがいします。\nB: こちらこそ、よろしくおねがいします。",
     exampleSrc:"A: Nice to meet you. I am Tanaka. Please treat me well.\nB: Likewise, pleased to meet you.",
     funFact:"よろしくおねがいします has no direct English translation. It means 'please be favorable to me.' You say it when meeting someone, starting a project, asking a favor, or even in emails. こちらこそ (likewise) is the standard reply."},

    {type:"teach", trg:"おだいじに", src:"take care / get well soon", pos:"intj", gender:null,
     note:"Said to someone who is sick or going to the doctor.\nShort for おだいじにしてください.",
     example:"A: 風邪(かぜ)をひいてしまいました。\nB: おだいじに。早(はや)くよくなってください。",
     exampleSrc:"A: I caught a cold.\nB: Take care. Please get well soon.",
     funFact:"おだいじに literally means 'please treat yourself as important.' 医者(いしゃ) (doctors) and 薬剤師(やくざいし) (pharmacists) always say it to patients. It is also used when someone mentions feeling unwell, even casually. Adding なさってください makes it even more formal."},

    {type:"teach", trg:"おかげさまで", src:"thanks to you / fortunately", pos:"intj", gender:null,
     note:"A humble way to say things are going well.\nLiterally: thanks to your shadow (protection).",
     example:"A: おしごとはどうですか？\nB: おかげさまで、順調(じゅんちょう)です。",
     exampleSrc:"A: How is work?\nB: Thanks to you, it is going smoothly.",
     funFact:"おかげさまで credits your good fortune to the other person's benevolence, even if they had nothing to do with it. This reflects Japanese modesty. The 'shadow' refers to divine or parental protection. It is used in business and casual settings alike."},

    {type:"fb", s:"{1}。つかれた。\n(I am home. I am tired.)", a:"ただいま", opts:["ただいま","さようなら","おはよう","おやすみ"], sSrc:"I am home. I am tired.",
     hint:"This greeting announces your return to your own home."},

    {type:"teach", trg:"おせわになっております", src:"thank you for your continued support", pos:"intj", gender:null,
     note:"Business greeting used in emails and calls.\nLess formal: おせわになっています.",
     example:"A: いつもおせわになっております。\nB: こちらこそ、おせわになっております。",
     exampleSrc:"A: Thank you for your continued support.\nB: Likewise, thank you for yours.",
     funFact:"おせわになる literally means 'to receive care from someone.' In business Japanese, this is the standard opening line for emails and phone calls to existing contacts. It acknowledges the ongoing relationship. New contacts get はじめまして instead."},

    {type:"teach", trg:"ごぶさたしております", src:"I apologize for not being in touch", pos:"intj", gender:null,
     note:"Used when contacting someone after a long silence.\nMore formal than おひさしぶりです.",
     example:"A: ごぶさたしております。やまだです。\nB: やまださん、おひさしぶりですね。",
     exampleSrc:"A: I apologize for not being in touch. This is Yamada.\nB: Yamada, it has been a while.",
     funFact:"ごぶさた (御無沙汰(ごぶさた)) combines 無(む) (without) and 沙汰(さた) (communication). It places the blame on yourself for the gap in contact, which is a polite move. In business, using this shows awareness that maintaining relationships requires effort."},

    {type:"teach", trg:"おそれいります", src:"I appreciate it / I am sorry to trouble you", pos:"intj", gender:null,
     note:"Very polite expression of gratitude or apology.\nMore formal than すみません.",
     example:"A: こちらの資料(しりょう)をどうぞ。\nB: おそれいります。助(たす)かります。",
     exampleSrc:"A: Here are the documents.\nB: I appreciate it. That helps a lot.",
     funFact:"おそれいります literally means 'I am in awe.' It is the gold standard of polite business phrases, combining gratitude with humility. Service staff at high-end hotels and 百貨店(ひゃっかてん) (department stores) use it frequently to express deep appreciation."},

    {type:"match", pairs:[{trg:"ただいま",src:"I am home"},{trg:"おかえりなさい",src:"Welcome back"},{trg:"もしもし",src:"Hello (phone)"},{trg:"おだいじに",src:"Take care / Get well soon"},{trg:"おめでとう",src:"Congratulations"}],
     hint:"Match each Japanese greeting with its English meaning."},

    {type:"mc", q:"What is the polite reply when someone says ありがとう and you want to say 'thanks to you'?", opts:["おかげさまで","おだいじに","おめでとう","ただいま"], ans:"おかげさまで",
     hint:"This phrase humbly credits your good fortune to the other person's benevolence."},

    {type:"fb", s:"誕生日(たんじょうび){1}！\n(Happy birthday!)", a:"おめでとう", opts:["おめでとう","おだいじに","ありがとう","ごめんなさい"], sSrc:"Happy birthday!",
     hint:"This word means congratulations and is used for celebrations."},

    {type:"mc", q:"When would you say ごぶさたしております?", opts:["When contacting someone after a long silence","When answering the phone","When arriving at work","When leaving home"], ans:"When contacting someone after a long silence",
     hint:"This formal phrase apologizes for the gap in communication."}
  ,{type:"match",pairs:[{trg:"おひさしぶりです",src:"it has been a long time"},{trg:"おげんきですか",src:"how are you?"},{trg:"よろしくおねがいします",src:"pleased to meet you / please treat me well"},{trg:"おせわになっております",src:"thank you for your continued support"},{trg:"ごぶさたしております",src:"I apologize for not being in touch"},{trg:"おそれいります",src:"I appreciate it / I am sorry to trouble you"}]}]
};
export default BATCH8_L1;
