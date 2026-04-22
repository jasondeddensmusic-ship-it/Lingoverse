// Unit 12 Expansion L4. Workplace & Language Abilities
// Potential form in professional and linguistic contexts.

const LESSON_4 = {id:"jav2_u12l4", title:"しごとのスキル", icon:"💼", xp:15, board:true, steps:[
  {type:"intro", title:"しごとのスキル",
   desc:"Apply potential forms to real-world skills: workplace abilities, language proficiency, and practical life skills. Learn to describe what you can and cannot do in professional and everyday contexts.",
   goals:["Describe workplace skills using potential forms","Talk about language abilities at different levels","Use できる with professional nouns"]},

  {type:"teach", trg:"うんてんできる", src:"can drive", pos:"verb", gender:null,
   note:"うんてん (driving) + できる = can drive.\nうんてんする = to drive. Kanji: 運転.",
   example:"A: くるまのうんてんができますか？\nB: はい、できます。でもにほんではまだうんてんしたことがありません。",
   exampleSrc:"A: Can you drive a car?\nB: Yes, I can. But I have not driven in Japan yet.",
   funFact:"Driving in Japan requires a Japanese license or an International Driving Permit. Japan drives on the left side (like the UK). Getting a Japanese driver's license from scratch can cost over 300,000 yen at a driving school. The test is famously strict."},

  {type:"teach", trg:"タイプできる", src:"can type", pos:"verb", gender:null,
   note:"タイプ (typing, from English) + できる = can type.\nA modern essential skill.",
   example:"A: にほんごでタイプできますか？\nB: はい、ローマじにゅうりょくでできます。",
   exampleSrc:"A: Can you type in Japanese?\nB: Yes, I can do it with romaji input.",
   funFact:"Japanese typing uses either romaji input (type Roman letters, convert to kana) or kana input (type kana directly). Most people use romaji input. The conversion process involves typing, selecting the correct kanji, and confirming. Skilled typists can type remarkably fast this way."},

  {type:"teach", trg:"りょうりができる", src:"can cook", pos:"verb", gender:null,
   note:"りょうり (cooking) + ができる = can cook.\nりょうりする = to cook. Kanji: 料理.",
   example:"A: どんなりょうりができますか？\nB: にほんりょうりがすこしできます。カレーがとくいです。",
   exampleSrc:"A: What kind of cooking can you do?\nB: I can do a little Japanese cooking. Curry is my specialty.",
   funFact:"Japanese curry (カレー) is not Indian-style but a uniquely Japanese comfort food. It is the most popular home-cooked dish in Japan, made with curry roux blocks. Asking どんなりょうりができますか is a common getting-to-know-you question in Japan."},

  {type:"mc", q:"うんてんができますか means:", opts:["Can you drive?","Do you like driving?","Did you drive?","Do you have a car?"], ans:"Can you drive?",
   hint:"うんてん (driving) + ができますか asks about the ability to d...."},

  {type:"teach", trg:"やくせる", src:"can translate", pos:"verb", gender:null,
   note:"やくす (to translate) Group 1: す becomes せる.\nやくす becomes やくせる. Kanji: 訳す.",
   example:"A: このぶんしょをにほんごにやくせますか？\nB: がんばってみます。",
   exampleSrc:"A: Can you translate this document into Japanese?\nB: I will try my best.",
   funFact:"やくす comes from 訳 (meaning/reason/translate). ほんやく (翻訳) is the formal word for translation. つうやく (通訳) is interpreting (spoken). Japan has a strong translation tradition: nearly all important foreign books, films, and games are translated into Japanese."},

  {type:"teach", trg:"つたえられる", src:"can convey / can communicate", pos:"verb", gender:null,
   note:"つたえる (to convey) is Group 2. Drop る, add られる.\nつたえる becomes つたえられる.",
   example:"A: にほんごでじぶんのきもちをつたえられますか？\nB: かんたんなことはつたえられます。",
   exampleSrc:"A: Can you convey your feelings in Japanese?\nB: I can convey simple things.",
   funFact:"つたえる means to convey, communicate, or pass along a message. きもちをつたえる (convey feelings) is a beautiful phrase used in love confessions, thank-you moments, and emotional conversations. The ability to つたえる in another language is the ultimate language learning goal."},

  {type:"teach", trg:"かいわ", src:"conversation", pos:"noun", gender:null,
   note:"にちじょうかいわ = daily conversation. えいかいわ = English conversation.\nKanji: 会話.",
   example:"A: にほんごでかんたんなかいわができます。\nB: すごいですね！どのくらいべんきょうしましたか？",
   exampleSrc:"A: I can have simple conversations in Japanese.\nB: Amazing! How long have you studied?",
   funFact:"会話 combines 会 (meet) and 話 (talk). えいかいわ (English conversation) schools are big business in Japan. にちじょうかいわ (daily conversation) is the most practical language skill. The JLPT does not test speaking, so many learners study かいわ separately."},

  {type:"fb", s:"にほんごでかんたんな{1}ができます。\n(I can have simple conversations in Japanese.)", a:"かいわ", opts:["かいわ","かんじ","ぶんぽう","さくぶん"], sSrc:"I can have simple conversations in Japanese.",
   hint:"The word for a back-and-forth exchange of words between people."},

  {type:"teach", trg:"なおせる", src:"can fix / can correct", pos:"verb", gender:null,
   note:"なおす (to fix/correct) is Group 1: す becomes せる.\nなおす becomes なおせる.",
   example:"A: パソコンがこわれました。なおせますか？\nB: みてみますが、なおせないかもしれません。",
   exampleSrc:"A: The computer broke. Can you fix it?\nB: I will take a look, but I might not be able to fix it.",
   funFact:"なおす has two meanings: to fix/repair (a machine) and to correct (a mistake). Both use the same kanji 直す. The ability to fix things (なおせる) is highly valued in Japan's monozukuri (manufacturing) culture. Even at home, trying to fix before replacing is the norm."},

  {type:"teach", trg:"はこべる", src:"can carry", pos:"verb", gender:null,
   note:"はこぶ (to carry) is Group 1: ぶ becomes べる.\nはこぶ becomes はこべる.",
   example:"A: このにもつをひとりではこべますか？\nB: ちょっとおもいですが、はこべます。",
   exampleSrc:"A: Can you carry this luggage alone?\nB: It is a bit heavy, but I can carry it.",
   funFact:"はこぶ uses the kanji 運ぶ, the same 運 in うんてん (driving) and うんどう (exercise/movement). It covers carrying, transporting, and moving things. Delivery services (たくはいびん) literally 'carry to your home' and are incredibly efficient in Japan."},

  {type:"mc", q:"パソコンがなおせますか means:", opts:["Can you buy a computer?","Can you fix the computer?","Do you have a computer?","Can you use the computer?"], ans:"Can you fix the computer?",
   hint:"なおせる is the potential form of なおす (to f.../repair)."},

  {type:"teach", trg:"ペラペラ", src:"fluent / fluently", pos:"adv", gender:null,
   note:"Onomatopoeia for smooth, fluent speech. にほんごがペラペラ = fluent in Japanese.\nVery casual, friendly word.",
   example:"A: にほんごがペラペラですね！\nB: いいえ、まだまだです。べんきょうちゅうです。",
   exampleSrc:"A: You are fluent in Japanese!\nB: No, not at all. I am still studying.",
   funFact:"ペラペラ is an onomatopoeia imitating the sound of pages flipping smoothly or speech flowing without stopping. It is always a compliment. Other language-related onomatopoeia: カタコト (broken/halting speech), ボソボソ (mumbling), ハキハキ (speaking clearly)."},

  {type:"fb", s:"にほんごが{1}ですね！\n(You are fluent in Japanese!)", a:"ペラペラ", opts:["ペラペラ","ペコペコ","パラパラ","ボロボロ"], sSrc:"You are fluent in Japanese!",
   hint:"The onomatopoeia for smooth, fluent language ability."},

  {type:"match", pairs:[{trg:"うんてんできる",src:"can drive"},{trg:"りょうりができる",src:"can cook"},{trg:"やくせる",src:"can translate"},{trg:"なおせる",src:"can fix"}]},

  {type:"match", pairs:[{trg:"つたえられる",src:"can convey"},{trg:"はこべる",src:"can carry"},{trg:"かいわ",src:"conversation"},{trg:"ペラペラ",src:"fluent"}]},

  {type:"mc", q:"つたえられる is the potential form of:", opts:["つたえない","つたわる","つたえる","つたう"], ans:"つたえる",
   hint:"Group 2 verbs form the potential by dropping る and adding られる."},

  {type:"fb", s:"このにもつをひとりで{1}ますか？\n(Can you carry this luggage alone?)", a:"はこべ", opts:["はこべ","はこび","はこんで","はこぶ"], sSrc:"Can you carry this luggage alone?",
   hint:"Potential of はこぶ. Change ぶ (u-row) to べ (e-row), add る."},

  {type:"tip", title:"Talking About Your Skills",
   text:"General ability (noun + ができる):\nうんてんができる (can drive)\nりょうりができる (can cook)\n\nSpecific ability (potential form):\nやくせる (can translate)\nなおせる (can fix)\n\nLevel descriptions:\nペラペラ (fluent)\nすこし (a little)\nぜんぜんできない (cannot at all)\n\nUseful phrases:\nまだべんきょうちゅうです (I am still studying)\nがんばっています (I am working hard at it)",
   deepDive:{title:"Describing your language level",
    text:"Common self-descriptions for language ability:\nペラペラです (I am fluent) -- rarely used for yourself\nにちじょうかいわができます (I can have daily conversations)\nかんたんなことばがわかります (I understand simple words)\nすこしはなせます (I can speak a little)\nべんきょうちゅうです (I am in the middle of studying)\nまだまだです (I have a long way to go)\n\nThe modest options (まだまだ, べんきょうちゅう) are used most often by Japanese speakers about their own abilities, even when they are quite skilled."}},
]};
export default LESSON_4;
