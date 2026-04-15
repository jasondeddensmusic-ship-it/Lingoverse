// Unit 01 Expansion L03 — Greeting Variations (seasonal, workplace, texting)
const LESSON_3 = {
  id:"jav2_u1l3", title:"いろいろなあいさつ", icon:"🌸", xp:15, board:true,
  steps:[
    {type:"intro", title:"いろいろなあいさつ",
     desc:"Expand your greeting toolkit with seasonal greetings, workplace phrases, and casual texting expressions. Japanese has far more greetings than just konnichiwa.",
     goals:["Use seasonal and situational greetings","Greet coworkers and bosses appropriately","Recognize casual texting-style greetings"]},

    {type:"teach", trg:"あけましておめでとうございます", src:"Happy New Year", pos:"intj", gender:null,
     note:"The most important seasonal greeting. Used from January 1 through mid-January.\nCasual: あけおめ (slang abbreviation).",
     example:"A: あけましておめでとうございます！\nB: ことしもよろしくおねがいします。",
     exampleSrc:"A: Happy New Year!\nB: Please treat me well again this year.",
     funFact:"Literally means 'the dawn has come, congratulations.' New Year (oshougatsu) is Japan's biggest holiday. Everyone sends New Year cards (nengajou) that must arrive on January 1st. Post offices hire extra staff."},

    {type:"teach", trg:"おひさしぶりです", src:"long time no see (polite)", pos:"intj", gender:null,
     note:"Used when you have not seen someone for a while. Casual: ひさしぶり.\nKanji: お久しぶり.",
     example:"A: おひさしぶりです！おげんきですか？\nB: はい、おかげさまで。",
     exampleSrc:"A: Long time no see! How are you?\nB: Yes, thanks to you (I'm well).",
     funFact:"Hisashiburi contains hisashii (long time). The o- prefix adds politeness. Among close friends, just 'hisashiburi!' is enough. Some young people shorten it further to 'hisabisa.'"},

    {type:"teach", trg:"おげんきですか", src:"how are you? (polite)", pos:"intj", gender:null,
     note:"Standard 'how are you' but used less casually than in English.\nKanji: お元気ですか.",
     example:"A: おげんきですか？\nB: はい、げんきです。",
     exampleSrc:"A: How are you?\nB: Yes, I am well.",
     funFact:"Genki means 'energy/health.' Unlike English, Japanese people do not ask ogenki desu ka every time they meet. It is reserved for people you have not seen in a while. Asking it daily would sound strange."},

    {type:"teach", trg:"おはよう", src:"good morning (casual)", pos:"intj", gender:null,
     note:"Casual version of ohayou gozaimasu. Used with friends, family, close coworkers.",
     example:"A: おはよう！きょうもがんばろう。\nB: おはよう！うん、がんばろう。",
     exampleSrc:"A: Morning! Let's do our best today.\nB: Morning! Yeah, let's do it.",
     funFact:"In the entertainment industry, everyone says ohayou gozaimasu regardless of time of day. A late-night TV crew arriving at 9 PM will greet each other with ohayou gozaimasu because it marks the start of their workday."},

    {type:"mc", q:"あけましておめでとうございます is used for:", opts:["New Year","birthdays","weddings","funerals"], ans:"New Year",
     hint:"This is Japan's most important seasonal celebration greeting, used in early January."},

    {type:"teach", trg:"おつかれさまです", src:"thank you for your hard work", pos:"intj", gender:null,
     note:"The most important workplace greeting. Used when greeting, leaving, or thanking coworkers.\nKanji: お疲れ様です.",
     example:"A: おつかれさまです。きょうもおそくまで？\nB: はい、もうすこしです。",
     exampleSrc:"A: Thanks for your hard work. Working late again?\nB: Yes, just a bit more.",
     funFact:"Otsukaresama literally means 'you are honorably tired.' It is the Swiss Army knife of Japanese workplace language: hello, goodbye, thank you, and acknowledgment all in one. You cannot survive a Japanese office without it."},

    {type:"teach", trg:"おさきにしつれいします", src:"excuse me for leaving before you", pos:"intj", gender:null,
     note:"Said when leaving the office before your coworkers. Very important workplace etiquette.\nKanji: お先に失礼します.",
     example:"A: おさきにしつれいします。\nB: おつかれさまでした。",
     exampleSrc:"A: Excuse me for leaving first.\nB: Thank you for your hard work (today).",
     funFact:"Osaki ni means 'ahead of you' and shitsurei shimasu means 'I will be rude.' You are apologizing for the rudeness of leaving before your colleagues. The response is always otsukaresama deshita (past tense: you were tired/worked hard)."},

    {type:"teach", trg:"いってきます", src:"I'm heading out (leaving home)", pos:"intj", gender:null,
     note:"Said when leaving home. Family responds with いってらっしゃい.\nKanji: 行ってきます.",
     example:"A: いってきます！\nB: いってらっしゃい！きをつけてね。",
     exampleSrc:"A: I'm heading out!\nB: Have a good trip! Be careful.",
     funFact:"Literally 'I will go and come back.' This daily ritual of ittekimasu/itterasshai is deeply embedded in Japanese family life. Even adults living alone sometimes say it to their empty apartment out of habit."},

    {type:"fb", s:"会社を出るとき、___と言います。",
     a:["おさきにしつれいします"],
     opts:["おさきにしつれいします","おはようございます","いってきます","おやすみなさい"],
     hint:"The phrase you say when leaving the office before your coworkers. It contains an apology for departing first.",
     sSrc:"When leaving the company, you say {1}."},

    {type:"teach", trg:"いってらっしゃい", src:"have a good trip / see you later", pos:"intj", gender:null,
     note:"Response to いってきます. Said by those staying behind.\nKanji: 行ってらっしゃい.",
     example:"A: いってきます。\nB: いってらっしゃい！",
     exampleSrc:"A: I'm heading out.\nB: Have a good trip!",
     funFact:"Literally 'please go and come back.' It is a blessing for a safe return. Store owners sometimes say it to departing customers too. The warmth of this exchange is one of the most beloved aspects of Japanese daily life."},

    {type:"teach", trg:"ただいま", src:"I'm home / I'm back", pos:"intj", gender:null,
     note:"Said when arriving home. Response: おかえりなさい or おかえり.\nKanji: ただ今.",
     example:"A: ただいま！\nB: おかえりなさい！ごはんできてるよ。",
     exampleSrc:"A: I'm home!\nB: Welcome back! Dinner is ready.",
     funFact:"Short for 'tadaima kaerimashita' (I have just now returned). The tadaima/okaeri exchange is so culturally important that anime and drama often use it as an emotional moment. Coming home to someone saying okaeri means you belong."},

    {type:"teach", trg:"おかえりなさい", src:"welcome home / welcome back", pos:"intj", gender:null,
     note:"Response to ただいま. Casual: おかえり.\nKanji: お帰りなさい.",
     example:"A: ただいま。\nB: おかえりなさい。つかれた？",
     exampleSrc:"A: I'm home.\nB: Welcome back. Are you tired?",
     funFact:"Literally 'please return' (as in, you have returned, as it should be). Some Japanese hotels greet returning guests with okaerinasai to make them feel at home. It creates instant warmth and belonging."},

    {type:"mc", q:"おつかれさまです is used in which setting?", opts:["Only at home","The workplace","Only in emails","Only with strangers"], ans:"The workplace",
     hint:"This phrase acknowledges hard work and is the essential office greeting."},

    {type:"teach", trg:"よお", src:"hey / yo (very casual)", pos:"intj", gender:null,
     note:"Very casual greeting between close male friends. Often written よー or よぉ in texts.",
     example:"A: よお、ひさしぶり！\nB: おお！げんき？",
     exampleSrc:"A: Hey, long time no see!\nB: Oh! How are you?",
     funFact:"Yoo is the most casual male greeting. Women rarely use it. In text messages, young Japanese people also use うぃっす (uissu, a slurred version of osu) or おっす (ossu) as super casual hellos."},

    {type:"teach", trg:"おす", src:"hey (casual, male)", pos:"intj", gender:null,
     note:"Very informal greeting, mostly used by young men. Originally from martial arts.\nAlso written おっす.",
     example:"A: おす！きょう、ひまか？\nB: おす。うん、ひまだよ。",
     exampleSrc:"A: Hey! Are you free today?\nB: Hey. Yeah, I'm free.",
     funFact:"Osu originated in martial arts as a shortened form of ohayou gozaimasu. Karate and judo practitioners shout it as a greeting and acknowledgment. From dojos it spread to casual male speech, especially among young men and athletes."},

    {type:"teach", trg:"もしもし", src:"hello (on the phone)", pos:"intj", gender:null,
     note:"Used exclusively for phone calls. Never used face-to-face.",
     example:"A: もしもし、田中ですが。\nB: ああ、田中さん。おはようございます。",
     exampleSrc:"A: Hello, this is Tanaka.\nB: Ah, Tanaka-san. Good morning.",
     funFact:"Moshi moshi comes from mousu (to say, humble). Saying it twice proves you are human, because Japanese folklore says ghosts and foxes cannot repeat words. It is literally a supernatural verification system from the early telephone era."},

    {type:"match", pairs:[
      {trg:"いってきます", src:"I'm heading out"},
      {trg:"いってらっしゃい", src:"Have a good trip"},
      {trg:"ただいま", src:"I'm home"},
      {trg:"おかえりなさい", src:"Welcome back"}
    ]},

    {type:"fb", s:"でんわに出るとき、___と言います。",
     a:["もしもし"],
     opts:["もしもし","こんにちは","おはよう","ただいま"],
     hint:"The special greeting used exclusively when answering the telephone.",
     sSrc:"When answering the phone, you say {1}."},

    {type:"match", pairs:[
      {trg:"おつかれさまです", src:"Thanks for your hard work"},
      {trg:"おひさしぶりです", src:"Long time no see"},
      {trg:"おげんきですか", src:"How are you?"},
      {trg:"もしもし", src:"Hello (phone)"}
    ]},

    {type:"mc", q:"ただいま means:", opts:["Goodbye","I'm leaving now","I'm home","Welcome back"], ans:"I'm home",
     hint:"Said when you arrive back at your house after being out."},

    {type:"mc", q:"What is the response to いってきます?", opts:["ただいま","おかえりなさい","いってらっしゃい","おやすみなさい"], ans:"いってらっしゃい",
     hint:"The phrase that wishes someone a safe departure and return."},

    {type:"mc", q:"もしもし is used:", opts:["Face-to-face","On the telephone","In emails","At the office"], ans:"On the telephone",
     hint:"This greeting has a supernatural origin story connected to early phone technology."},
  ]
};
export default LESSON_3;
