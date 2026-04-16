// Batch 8 – Unit 16 (A2.2 Plans): Life Goals & Aspirations
const BATCH8_L1 = {
  id:"jav2_u16l_b8_1", title:"しょうらいのゆめ", icon:"🌟", xp:15, board:true,
  steps:[
    {type:"intro", title:"しょうらいのゆめ",
     desc:"Learn vocabulary for expressing life goals, dreams, and future plans. These words let you talk about aspirations and long-term intentions meaningfully.",
     goals:["Express dreams and life goals","Discuss future plans with appropriate vocabulary","Use intention and aspiration phrases"]},

    {type:"teach", trg:"しょうらい", src:"future / in the future", pos:"noun", gender:null,
     note:"Kanji: 将来. しょうらいのゆめ = future dream.\nしょうらいてき = in the long run.",
     example:"A: しょうらいなにになりたいですか？\nB: いしゃになりたいです。",
     exampleSrc:"A: What do you want to be in the future?\nB: I want to become a doctor.",
     funFact:"しょうらいのゆめ (future dream) is one of the first essay topics Japanese children write about. Common answers: サッカーせんしゅ (soccer player), パティシエ (pastry chef), YouTuber. The question しょうらいなにになりたい is asked from kindergarten onward."},

    {type:"teach", trg:"もくひょう", src:"goal / objective / target", pos:"noun", gender:null,
     note:"Kanji: 目標. もくひょうをたてる = to set a goal.\nもくひょうたっせい = goal achievement.",
     example:"A: ことしのもくひょうはなんですか？\nB: にほんごのうりょくしけんにうかることです。",
     exampleSrc:"A: What is your goal for this year?\nB: To pass the Japanese Language Proficiency Test.",
     funFact:"もくひょう culture is embedded in Japanese education and business. Schools set がくしゅうもくひょう (learning goals) each term. Companies set えいぎょうもくひょう (sales targets). New Year's もくひょう (resolutions) are written on kakizome (first calligraphy of the year)."},

    {type:"teach", trg:"どりょく", src:"effort / hard work / endeavor", pos:"noun", gender:null,
     note:"Kanji: 努力. どりょくする = to make an effort.\nどりょくか = hard worker.",
     example:"A: まいにちどりょくしています。\nB: すばらしいですね。きっとうまくいきます。",
     exampleSrc:"A: I am making an effort every day.\nB: That is wonderful. It will surely work out.",
     funFact:"どりょく is one of the most valued virtues in Japanese culture. The phrase どりょくはうらぎらない (effort never betrays you) is deeply believed. School mottos often feature どりょく. Even when talent is lacking, Japanese culture says どりょく can overcome it. がんばる (to do your best) is the verb form of this spirit."},

    {type:"teach", trg:"かなえる", src:"to make (a dream) come true / to fulfill", pos:"verb", gender:null,
     note:"ゆめをかなえる = to make a dream come true.\nのぞみをかなえる = to fulfill a wish.",
     example:"A: ゆめをかなえるためにべんきょうしています。\nB: おうえんしています。",
     exampleSrc:"A: I am studying to make my dream come true.\nB: I am cheering you on.",
     funFact:"ゆめをかなえる is a powerful phrase in Japanese pop culture. The song ゆめをかなえてドラえもん is beloved by children. たなばた (Star Festival) involves writing wishes on たんざく (paper strips) hoping they will be かなえられる (fulfilled). The passive form ゆめがかなう means 'a dream comes true.'"},

    {type:"teach", trg:"あきらめる", src:"to give up / to abandon / to resign oneself", pos:"verb", gender:null,
     note:"あきらめないで = do not give up.\nFrom あきらか (clear/resigned acceptance).",
     example:"A: むずかしくてもあきらめません。\nB: そのきもちがだいじです。",
     exampleSrc:"A: Even if it is difficult, I will not give up.\nB: That attitude is important.",
     funFact:"あきらめるないで (do not give up) is perhaps the most common encouragement in Japanese sports, education, and entertainment. Anime heroes never あきらめる. Interestingly, the Buddhist origin of あきらめる is positive: to see things clearly and accept reality. Modern usage focuses on the negative 'quitting' meaning."},

    {type:"mc", q:"What does どりょく mean?", opts:["Effort / hard work","Dream / aspiration","Goal / target","Talent / gift"], ans:"Effort / hard work",
     hint:"Japanese culture considers this virtue more important than natural talent."},

    {type:"teach", trg:"ちょうせんする", src:"to challenge / to attempt / to take on", pos:"verb", gender:null,
     note:"Kanji: 挑戦. あたらしいことにちょうせんする = to try something new.\nちょうせんしゃ = challenger.",
     example:"A: マラソンにちょうせんします。\nB: すごいですね。がんばってください。",
     exampleSrc:"A: I will take on a marathon.\nB: Amazing. Please do your best.",
     funFact:"ちょうせん is always positive in Japanese. Unlike English 'challenge' which can be negative, ちょうせん implies courage and growth. Job ads say ちょうせんせいしんのあるかた (people with a challenging spirit). School slogans like ちょうせん、どりょく、せいちょう (challenge, effort, growth) are common."},

    {type:"teach", trg:"せいちょうする", src:"to grow / to develop / to mature", pos:"verb", gender:null,
     note:"Kanji: 成長. こどものせいちょう = child's growth.\nじんかくてきにせいちょうする = to grow as a person.",
     example:"A: いちねんかんでとてもせいちょうしましたね。\nB: ありがとうございます。",
     exampleSrc:"A: You have grown so much in one year.\nB: Thank you.",
     funFact:"せいちょう in Japanese covers both physical growth and personal development. Japanese schools emphasize こころのせいちょう (growth of the heart/character) alongside academic achievement. The phrase せいちょうするチャンス (chance to grow) frames difficulties positively."},

    {type:"teach", trg:"けいけんをつむ", src:"to accumulate experience", pos:"verb", gender:null,
     note:"けいけん (experience) + つむ (to pile up).\nじんせいけいけん = life experience.",
     example:"A: いろいろなけいけんをつみたいです。\nB: わかいうちにたくさんけいけんしましょう。",
     exampleSrc:"A: I want to accumulate various experiences.\nB: While young, let us gain many experiences.",
     funFact:"けいけんをつむ reflects the Japanese belief in learning through doing. The master-apprentice (ししょう-でし) tradition is built on つむ: piling up years of experience. Even in modern companies, OJT (on-the-job training) and じっせん (practical experience) are preferred over textbook learning."},

    {type:"teach", trg:"こうかいする", src:"to regret", pos:"verb", gender:null,
     note:"Kanji: 後悔. こうかいしないように = so that I will not regret.\nこうかいさきにたたず = regret comes too late.",
     example:"A: こうかいしないようにがんばります。\nB: そうですね。やらないこうかいがいちばんつらい。",
     exampleSrc:"A: I will work hard so I will not regret it.\nB: Right. The regret of not trying is the hardest.",
     funFact:"こうかいさきにたたず (regret does not stand before/ahead) is a famous proverb meaning you cannot regret before something happens, so act wisely now. Japanese culture emphasizes こうかいしない (no regrets) decision-making. やらないこうかい (regret of not doing) is considered worse than trying and failing."},

    {type:"teach", trg:"きっかけ", src:"trigger / opportunity / catalyst", pos:"noun", gender:null,
     note:"The thing that starts something. にほんごをはじめたきっかけ = what made you start Japanese.\nVery common in interviews.",
     example:"A: にほんにきょうみをもったきっかけはなんですか？\nB: アニメがきっかけです。",
     exampleSrc:"A: What sparked your interest in Japan?\nB: Anime was the trigger.",
     funFact:"きっかけ is one of the most-asked words in Japanese interviews and conversations. にほんごをはじめたきっかけ (what started you learning Japanese), いまのしごとのきっかけ (what led to your current job). For most foreign Japanese learners, the きっかけ is anime, manga, or Japanese food."},

    {type:"fb", s:"ゆめを{1}ためにべんきょうしています。\n(I am studying to make my dream come true.)", a:"かなえる", opts:["かなえる","あきらめる","こうかいする","つむ"], sSrc:"I am studying to make my dream come true.",
     hint:"This verb means to fulfill or realize a dream or wish."},

    {type:"teach", trg:"きめる", src:"to decide / to determine", pos:"verb", gender:null,
     note:"Kanji: 決める. きまる = to be decided (intransitive).\nきめた！= I have decided!",
     example:"A: しんろをきめましたか？\nB: はい、だいがくにいくことにきめました。",
     exampleSrc:"A: Have you decided your career path?\nB: Yes, I decided to go to university.",
     funFact:"きめる and きまる form a transitivity pair. きめる (I decide) is active, きまる (it is decided) is passive. Japanese often uses きまる to soften the directness: きまりました (it has been decided) sounds less forceful than きめました (I decided it). ルールがきまっている means the rule is established."},

    {type:"teach", trg:"おうえんする", src:"to support / to cheer on / to root for", pos:"verb", gender:null,
     note:"Kanji: 応援. おうえんしています = I am rooting for you.\nおうえんだん = cheering squad.",
     example:"A: しけんがんばってください。おうえんしています。\nB: ありがとう！ちからになります。",
     exampleSrc:"A: Do your best on the exam. I am cheering you on.\nB: Thank you! That gives me strength.",
     funFact:"おうえん culture is huge in Japan. High school baseball teams have おうえんだん (cheer squads) with brass bands. おうえんソング (cheer songs) and おうえんうちわ (fan signs) are essential at idol concerts. Saying おうえんしています (I support you) is one of the warmest things you can say."},

    {type:"match", pairs:[{trg:"しょうらい",src:"future"},{trg:"もくひょう",src:"goal"},{trg:"どりょく",src:"effort"},{trg:"ちょうせん",src:"challenge"},{trg:"せいちょう",src:"growth"}],
     hint:"Match each life goal word with its English meaning."},

    {type:"mc", q:"What does きっかけ mean?", opts:["The trigger or catalyst that starts something","A long-term goal","A feeling of regret","Hard work and effort"], ans:"The trigger or catalyst that starts something",
     hint:"This word answers the question 'what made you start?'"},

    {type:"fb", s:"むずかしくても{1}ません。\n(Even if it is difficult, I will not give up.)", a:"あきらめ", opts:["あきらめ","こうかいし","きめ","つづけ"], sSrc:"Even if it is difficult, I will not give up.",
     hint:"This verb means to abandon or quit an effort."},

    {type:"mc", q:"What does おうえんしています express?", opts:["I am cheering you on / rooting for you","I am watching you","I am competing with you","I am worried about you"], ans:"I am cheering you on / rooting for you",
     hint:"This is one of the warmest supportive phrases in Japanese."}
  ]
};
export default BATCH8_L1;
