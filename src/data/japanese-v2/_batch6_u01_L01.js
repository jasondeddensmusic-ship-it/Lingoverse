// Batch 6 – Unit 01 (A1.1 Greetings): Everyday Polite Phrases
const BATCH6_L1 = {
  id:"jav2_u01l_b6_1", title:"丁寧(ていねい)な言葉(ことば)", icon:"🎀", xp:15, board:true,
  steps:[
    {type:"intro", title:"丁寧(ていねい)な言葉(ことば)",
     desc:"Expand your polite phrase toolkit beyond basic greetings. These expressions are used constantly in daily life: thanking, apologizing, asking for favors, and showing consideration.",
     goals:["Use polite request and apology phrases","Express gratitude in different ways","Handle daily social interactions smoothly"]},

    {type:"teach", trg:"お願(ねが)いします", src:"please (polite request)", pos:"intj", gender:null,
     note:"Used when making a request or asking for something.\nLiterally: I make a wish/request.",
     example:"A: コーヒーをお願(ねが)いします。\nB: はい、かしこまりました。",
     exampleSrc:"A: Coffee, please.\nB: Yes, certainly.",
     funFact:"お願(ねが)いします comes from 願(ねが)う (to wish). It is the single most useful polite phrase in Japan. You use it at restaurants, offices, stations, and shops. Adding どうぞ before it makes it even more polite."},

    {type:"teach", trg:"ごめんなさい", src:"I am sorry", pos:"intj", gender:null,
     note:"A direct apology. More emotional than すみません.\nCasual: ごめん or ごめんね.",
     example:"A: ごめんなさい、遅(おく)れました。\nB: 大丈夫(だいじょうぶ)ですよ。",
     exampleSrc:"A: I am sorry, I was late.\nB: It is okay.",
     funFact:"ごめんなさい literally means 'please forgive me.' The ごめん part comes from 御免(ごめん) (pardon). Children learn this word early. Adults tend to use すみません in formal settings and ごめんなさい with friends and family."},

    {type:"teach", trg:"どうぞ", src:"please (offering) / go ahead", pos:"adv", gender:null,
     note:"Used when offering something or inviting someone to act.\nどうぞお掛(か)けください = please sit down.",
     example:"A: どうぞ、お茶(ちゃ)です。\nB: ありがとうございます。",
     exampleSrc:"A: Here you go, tea.\nB: Thank you.",
     funFact:"どうぞ is the polite way to offer anything. At elevators, doors, and restaurants, you hear どうぞ constantly. It pairs with お願(ねが)いします: the giver says どうぞ, the receiver says お願(ねが)いします."},

    {type:"teach", trg:"どういたしまして", src:"you are welcome", pos:"intj", gender:null,
     note:"The standard reply to ありがとう. Literally: what have I done (to deserve thanks)?\nSlightly formal.",
     example:"A: 手伝(てつだ)ってくれてありがとう。\nB: どういたしまして。",
     exampleSrc:"A: Thank you for helping me.\nB: You are welcome.",
     funFact:"In casual speech, Japanese people rarely say どういたしまして. They prefer いいえ (no, no), いえいえ (not at all), or 全然(ぜんぜん) (not at all). Using どういたしまして sounds a bit textbook-like among friends."},

    {type:"teach", trg:"大丈夫(だいじょうぶ)", src:"okay / all right / fine", pos:"adj", gender:null,
     note:"Na-adjective. 大丈夫(だいじょうぶ)です = it is fine.\nAlso used to decline offers politely.",
     example:"A: 大丈夫(だいじょうぶ)ですか？\nB: はい、大丈夫(だいじょうぶ)です。",
     exampleSrc:"A: Are you okay?\nB: Yes, I am fine.",
     funFact:"大丈夫(だいじょうぶ) literally means 'great strong man.' The kanji combine 大 (big), 丈 (height), and 夫 (husband/man). Young Japanese people also use it to politely refuse: 'Coffee?' '大丈夫(だいじょうぶ)です' (I am fine, meaning no thank you)."},

    {type:"mc", q:"What does お願(ねが)いします mean?", opts:["Please (making a request)","I am sorry","You are welcome","Good morning"], ans:"Please (making a request)",
     hint:"This phrase is used when you ask someone to do something or want to order something."},

    {type:"teach", trg:"お疲(つか)れさまです", src:"thank you for your hard work", pos:"intj", gender:null,
     note:"Said to colleagues after work or any shared effort.\nCasual: お疲(つか)れ.",
     example:"A: 今日(きょう)もお疲(つか)れさまです。\nB: お疲(つか)れさまです。お先(さき)に失礼(しつれい)します。",
     exampleSrc:"A: Thank you for your work today.\nB: Thank you for yours. I will leave ahead of you.",
     funFact:"お疲(つか)れさま is the glue of Japanese workplaces. It is said when greeting colleagues, leaving work, ending meetings, and even answering the phone at the office. There is no English equivalent. It acknowledges shared effort and builds group harmony."},

    {type:"teach", trg:"お先(さき)に", src:"excuse me for going first", pos:"adv", gender:null,
     note:"Short for お先(さき)に失礼(しつれい)します.\nSaid when leaving before others.",
     example:"A: お先(さき)に失礼(しつれい)します。\nB: お疲(つか)れさまでした。",
     exampleSrc:"A: Excuse me for leaving ahead of you.\nB: Thank you for your work today.",
     funFact:"お先(さき)に reflects the Japanese value of group consideration. Leaving before your colleagues feels slightly rude, so you apologize for going first. The full phrase お先(さき)に失礼(しつれい)します literally means 'I am being rude by going ahead.'"},

    {type:"teach", trg:"お待(ま)たせしました", src:"sorry to have kept you waiting", pos:"intj", gender:null,
     note:"Used by staff, servers, and anyone who made someone wait.\nVery common in service situations.",
     example:"A: お待(ま)たせしました。こちらがご注文(ちゅうもん)です。\nB: ありがとうございます。",
     exampleSrc:"A: Sorry to have kept you waiting. Here is your order.\nB: Thank you.",
     funFact:"お待(ま)たせしました is humble language. 待(ま)つ means to wait. Even if you waited only 30 seconds, Japanese service staff will say this. In restaurants, you hear it every time food arrives. It shows respect for the customer's time."},

    {type:"teach", trg:"失礼(しつれい)します", src:"excuse me (entering/leaving)", pos:"intj", gender:null,
     note:"Said when entering a room, leaving, or doing something slightly impolite.\nLiterally: I am being rude.",
     example:"A: 失礼(しつれい)します。山田(やまだ)さんはいらっしゃいますか？\nB: はい、少々(しょうしょう)お待(ま)ちください。",
     exampleSrc:"A: Excuse me. Is Mr. Yamada here?\nB: Yes, please wait a moment.",
     funFact:"失礼(しつれい)します is incredibly versatile. You say it when entering an office, leaving a meeting, hanging up the phone, reaching across someone, and even when asking a personal question. Past tense 失礼(しつれい)しました means 'I was rude' (said when leaving)."},

    {type:"teach", trg:"お邪魔(じゃま)します", src:"excuse me for intruding", pos:"intj", gender:null,
     note:"Said when entering someone's home.\nLiterally: I am causing a disturbance.",
     example:"A: どうぞ、お上(あ)がりください。\nB: お邪魔(じゃま)します。素敵(すてき)なお家(うち)ですね。",
     exampleSrc:"A: Please come in.\nB: Excuse me for intruding. What a lovely home.",
     funFact:"お邪魔(じゃま)します calls yourself a 'disturbance.' When leaving, you say お邪魔(じゃま)しました (I have disturbed you). This extreme humility when visiting homes shows how private space is respected in Japan."},

    {type:"fb", s:"コーヒーを{1}。\n(Coffee, please.)", a:"お願(ねが)いします", opts:["お願(ねが)いします","ごめんなさい","ありがとう","すみません"], sSrc:"Coffee, please.",
     hint:"This is the standard polite way to make a request or place an order."},

    {type:"mc", q:"When leaving work before your colleagues, you say:", opts:["おやすみなさい","お先(さき)に失礼(しつれい)します","おはようございます","いただきます"], ans:"お先(さき)に失礼(しつれい)します",
     hint:"This phrase apologizes for going ahead of the group."},

    {type:"teach", trg:"行(い)ってきます", src:"I am heading out (and will return)", pos:"intj", gender:null,
     note:"Said when leaving home. The person staying says 行(い)ってらっしゃい.\nLiterally: I will go and come back.",
     example:"A: 行(い)ってきます！\nB: 行(い)ってらっしゃい。気(き)をつけてね。",
     exampleSrc:"A: I am heading out!\nB: Have a good trip. Be careful.",
     funFact:"行(い)ってきます and 行(い)ってらっしゃい are a paired set. Every Japanese morning, this exchange happens at the door. It creates a feeling of home as a safe base you always return to. Even astronauts say 行(い)ってきます before launch."},

    {type:"teach", trg:"ただいま", src:"I am home", pos:"intj", gender:null,
     note:"Said when returning home. Reply: おかえりなさい.\nLiterally: just now (I have returned).",
     example:"A: ただいま！\nB: おかえりなさい。ご飯(はん)できてるよ。",
     exampleSrc:"A: I am home!\nB: Welcome back. Dinner is ready.",
     funFact:"ただいま(只今) literally means 'just now.' The full phrase was ただいま戻(もど)りました (I have just now returned). Japanese homes echo with these paired greetings. They reinforce the bond between those who leave and those who wait."},

    {type:"teach", trg:"いただきます", src:"I humbly receive (before eating)", pos:"intj", gender:null,
     note:"Said before meals. Shows gratitude for the food.\nLiterally: I humbly receive.",
     example:"A: ご飯(はん)ですよ。\nB: いただきます！美味(おい)しそう！",
     exampleSrc:"A: Dinner is ready.\nB: Thank you for the food! It looks delicious!",
     funFact:"いただきます expresses gratitude to the cook, the farmers, and even the plants and animals that became the meal. It is not a religious prayer but a cultural expression of appreciation. After eating, you say ごちそうさまでした (it was a feast)."},

    {type:"mc", q:"What do you say when entering someone's home?", opts:["ただいま","おやすみなさい","お邪魔(じゃま)します","いただきます"], ans:"お邪魔(じゃま)します",
     hint:"This phrase humbly acknowledges that you are entering someone's private space."},

    {type:"fb", s:"{1}！おかえりなさい。\n(I am home! / Welcome back.)", a:"ただいま", opts:["ただいま","行(い)ってきます","お邪魔(じゃま)します","失礼(しつれい)します"], sSrc:"I am home! / Welcome back.",
     hint:"This word is said by the person who has just arrived back at their house."},

    {type:"match", pairs:[
      {trg:"お願(ねが)いします", src:"please (request)"},
      {trg:"ごめんなさい", src:"I am sorry"},
      {trg:"お邪魔(じゃま)します", src:"excuse me for intruding"},
      {trg:"いただきます", src:"before eating"},
      {trg:"ただいま", src:"I am home"}
    ]},

    {type:"mc", q:"お待(ま)たせしました is typically said by:", opts:["A customer receiving food","A friend saying goodbye","A student greeting a teacher","A server bringing your order"], ans:"A server bringing your order",
     hint:"This humble phrase is used by the person who made someone wait."}
  ,{type:"match",pairs:[{trg:"どうぞ",src:"please (offering) / go ahead"},{trg:"どういたしまして",src:"you are welcome"},{trg:"大丈夫(だいじょうぶ)",src:"okay / all right / fine"},{trg:"お疲(つか)れさまです",src:"thank you for your hard work"},{trg:"お待(ま)たせしました",src:"sorry to have kept you waiting"},{trg:"行(い)ってきます",src:"I am heading out (and will return)"}]}]
};
export default BATCH6_L1;
