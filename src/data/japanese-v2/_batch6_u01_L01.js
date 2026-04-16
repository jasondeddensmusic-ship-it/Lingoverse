// Batch 6 – Unit 01 (A1.1 Greetings): Everyday Polite Phrases
const BATCH6_L1 = {
  id:"jav2_u01l_b6_1", title:"ていねいなことば", icon:"🎀", xp:15, board:true,
  steps:[
    {type:"intro", title:"ていねいなことば",
     desc:"Expand your polite phrase toolkit beyond basic greetings. These expressions are used constantly in daily life: thanking, apologizing, asking for favors, and showing consideration.",
     goals:["Use polite request and apology phrases","Express gratitude in different ways","Handle daily social interactions smoothly"]},

    {type:"teach", trg:"おねがいします", src:"please (polite request)", pos:"intj", gender:null,
     note:"Used when making a request or asking for something.\nLiterally: I make a wish/request.",
     example:"A: コーヒーをおねがいします。\nB: はい、かしこまりました。",
     exampleSrc:"A: Coffee, please.\nB: Yes, certainly.",
     funFact:"おねがいします comes from ねがう (to wish). It is the single most useful polite phrase in Japan. You use it at restaurants, offices, stations, and shops. Adding どうぞ before it makes it even more polite."},

    {type:"teach", trg:"ごめんなさい", src:"I am sorry", pos:"intj", gender:null,
     note:"A direct apology. More emotional than すみません.\nCasual: ごめん or ごめんね.",
     example:"A: ごめんなさい、おくれました。\nB: だいじょうぶですよ。",
     exampleSrc:"A: I am sorry, I was late.\nB: It is okay.",
     funFact:"ごめんなさい literally means 'please forgive me.' The ごめん part comes from 御免 (pardon). Children learn this word early. Adults tend to use すみません in formal settings and ごめんなさい with friends and family."},

    {type:"teach", trg:"どうぞ", src:"please (offering) / go ahead", pos:"adv", gender:null,
     note:"Used when offering something or inviting someone to act.\nどうぞおかけください = please sit down.",
     example:"A: どうぞ、おちゃです。\nB: ありがとうございます。",
     exampleSrc:"A: Here you go, tea.\nB: Thank you.",
     funFact:"どうぞ is the polite way to offer anything. At elevators, doors, and restaurants, you hear どうぞ constantly. It pairs with おねがいします: the giver says どうぞ, the receiver says おねがいします."},

    {type:"teach", trg:"どういたしまして", src:"you are welcome", pos:"intj", gender:null,
     note:"The standard reply to ありがとう. Literally: what have I done (to deserve thanks)?\nSlightly formal.",
     example:"A: てつだってくれてありがとう。\nB: どういたしまして。",
     exampleSrc:"A: Thank you for helping me.\nB: You are welcome.",
     funFact:"In casual speech, Japanese people rarely say どういたしまして. They prefer いいえ (no, no), いえいえ (not at all), or ぜんぜん (not at all). Using どういたしまして sounds a bit textbook-like among friends."},

    {type:"teach", trg:"だいじょうぶ", src:"okay / all right / fine", pos:"adj", gender:null,
     note:"Na-adjective. だいじょうぶです = it is fine.\nAlso used to decline offers politely.",
     example:"A: だいじょうぶですか？\nB: はい、だいじょうぶです。",
     exampleSrc:"A: Are you okay?\nB: Yes, I am fine.",
     funFact:"だいじょうぶ (大丈夫) literally means 'great strong man.' The kanji combine 大 (big), 丈 (height), and 夫 (husband/man). Young Japanese people also use it to politely refuse: 'Coffee?' 'Daijoubu desu' (I am fine, meaning no thank you)."},

    {type:"mc", q:"What does おねがいします mean?", opts:["Please (making a request)","I am sorry","You are welcome","Good morning"], ans:"Please (making a request)",
     hint:"This phrase is used when you ask someone to do something or want to order something."},

    {type:"teach", trg:"おつかれさまです", src:"thank you for your hard work", pos:"intj", gender:null,
     note:"Said to colleagues after work or any shared effort.\nCasual: おつかれ.",
     example:"A: きょうもおつかれさまです。\nB: おつかれさまです。おさきにしつれいします。",
     exampleSrc:"A: Thank you for your work today.\nB: Thank you for yours. I will leave ahead of you.",
     funFact:"おつかれさま is the glue of Japanese workplaces. It is said when greeting colleagues, leaving work, ending meetings, and even answering the phone at the office. There is no English equivalent. It acknowledges shared effort and builds group harmony."},

    {type:"teach", trg:"おさきに", src:"excuse me for going first", pos:"adv", gender:null,
     note:"Short for おさきにしつれいします.\nSaid when leaving before others.",
     example:"A: おさきにしつれいします。\nB: おつかれさまでした。",
     exampleSrc:"A: Excuse me for leaving ahead of you.\nB: Thank you for your work today.",
     funFact:"おさきに reflects the Japanese value of group consideration. Leaving before your colleagues feels slightly rude, so you apologize for going first. The full phrase おさきにしつれいします literally means 'I am being rude by going ahead.'"},

    {type:"teach", trg:"おまたせしました", src:"sorry to have kept you waiting", pos:"intj", gender:null,
     note:"Used by staff, servers, and anyone who made someone wait.\nVery common in service situations.",
     example:"A: おまたせしました。こちらがごちゅうもんです。\nB: ありがとうございます。",
     exampleSrc:"A: Sorry to have kept you waiting. Here is your order.\nB: Thank you.",
     funFact:"おまたせしました is humble language. まつ means to wait. Even if you waited only 30 seconds, Japanese service staff will say this. In restaurants, you hear it every time food arrives. It shows respect for the customer's time."},

    {type:"teach", trg:"しつれいします", src:"excuse me (entering/leaving)", pos:"intj", gender:null,
     note:"Said when entering a room, leaving, or doing something slightly impolite.\nLiterally: I am being rude.",
     example:"A: しつれいします。やまださんはいらっしゃいますか？\nB: はい、しょうしょうおまちください。",
     exampleSrc:"A: Excuse me. Is Mr. Yamada here?\nB: Yes, please wait a moment.",
     funFact:"しつれいします (失礼します) is incredibly versatile. You say it when entering an office, leaving a meeting, hanging up the phone, reaching across someone, and even when asking a personal question. Past tense しつれいしました means 'I was rude' (said when leaving)."},

    {type:"teach", trg:"おじゃまします", src:"excuse me for intruding", pos:"intj", gender:null,
     note:"Said when entering someone's home.\nLiterally: I am causing a disturbance.",
     example:"A: どうぞ、おあがりください。\nB: おじゃまします。すてきなおうちですね。",
     exampleSrc:"A: Please come in.\nB: Excuse me for intruding. What a lovely home.",
     funFact:"おじゃまします (お邪魔します) calls yourself a 'disturbance.' When leaving, you say おじゃましました (I have disturbed you). This extreme humility when visiting homes shows how private space is respected in Japan."},

    {type:"fb", s:"コーヒーを{1}。\n(Coffee, please.)", a:"おねがいします", opts:["おねがいします","ごめんなさい","ありがとう","すみません"], sSrc:"Coffee, please.",
     hint:"This is the standard polite way to make a request or place an order."},

    {type:"mc", q:"When leaving work before your colleagues, you say:", opts:["おさきにしつれいします","おはようございます","いただきます","おやすみなさい"], ans:"おさきにしつれいします",
     hint:"This phrase apologizes for going ahead of the group."},

    {type:"teach", trg:"いってきます", src:"I am heading out (and will return)", pos:"intj", gender:null,
     note:"Said when leaving home. The person staying says いってらっしゃい.\nLiterally: I will go and come back.",
     example:"A: いってきます！\nB: いってらっしゃい。きをつけてね。",
     exampleSrc:"A: I am heading out!\nB: Have a good trip. Be careful.",
     funFact:"いってきます and いってらっしゃい are a paired set. Every Japanese morning, this exchange happens at the door. It creates a feeling of home as a safe base you always return to. Even astronauts say いってきます before launch."},

    {type:"teach", trg:"ただいま", src:"I am home", pos:"intj", gender:null,
     note:"Said when returning home. Reply: おかえりなさい.\nLiterally: just now (I have returned).",
     example:"A: ただいま！\nB: おかえりなさい。ごはんできてるよ。",
     exampleSrc:"A: I am home!\nB: Welcome back. Dinner is ready.",
     funFact:"ただいま (只今) literally means 'just now.' The full phrase was ただいまもどりました (I have just now returned). Japanese homes echo with these paired greetings. They reinforce the bond between those who leave and those who wait."},

    {type:"teach", trg:"いただきます", src:"I humbly receive (before eating)", pos:"intj", gender:null,
     note:"Said before meals. Shows gratitude for the food.\nLiterally: I humbly receive.",
     example:"A: ごはんですよ。\nB: いただきます！おいしそう！",
     exampleSrc:"A: Dinner is ready.\nB: Thank you for the food! It looks delicious!",
     funFact:"いただきます expresses gratitude to the cook, the farmers, and even the plants and animals that became the meal. It is not a religious prayer but a cultural expression of appreciation. After eating, you say ごちそうさまでした (it was a feast)."},

    {type:"mc", q:"What do you say when entering someone's home?", opts:["おじゃまします","いただきます","ただいま","おやすみなさい"], ans:"おじゃまします",
     hint:"This phrase humbly acknowledges that you are entering someone's private space."},

    {type:"fb", s:"{1}！おかえりなさい。\n(I am home! / Welcome back.)", a:"ただいま", opts:["ただいま","いってきます","おじゃまします","しつれいします"], sSrc:"I am home! / Welcome back.",
     hint:"This word is said by the person who has just arrived back at their house."},

    {type:"match", pairs:[
      {trg:"おねがいします", src:"please (request)"},
      {trg:"ごめんなさい", src:"I am sorry"},
      {trg:"おじゃまします", src:"excuse me for intruding"},
      {trg:"いただきます", src:"before eating"},
      {trg:"ただいま", src:"I am home"}
    ]},

    {type:"mc", q:"おまたせしました is typically said by:", opts:["A server bringing your order","A customer receiving food","A friend saying goodbye","A student greeting a teacher"], ans:"A server bringing your order",
     hint:"This humble phrase is used by the person who made someone wait."}
  ]
};
export default BATCH6_L1;
