// Batch 8 – Unit 16 (A2.2 Plans): Life Goals & Aspirations
const BATCH8_L1 = {
  id:"jav2_u16l_b8_1", title:"将来(しょうらい)の夢(ゆめ)", icon:"🌟", xp:15, board:true,
  steps:[
    {type:"intro", title:"将来(しょうらい)の夢(ゆめ)",
     desc:"Learn vocabulary for expressing life goals, dreams, and future plans. These words let you talk about aspirations and long-term intentions meaningfully.",
     goals:["Express dreams and life goals","Discuss future plans with appropriate vocabulary","Use intention and aspiration phrases"]},

    {type:"teach", trg:"将来(しょうらい)", src:"future / in the future", pos:"noun", gender:null,
     note:"Kanji: 将来. 将来(しょうらい)の夢(ゆめ) = future dream.\n将来的(しょうらいてき) = in the long run.",
     example:"A: 将来(しょうらい)何(なに)になりたいですか？\nB: 医者(いしゃ)になりたいです。\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
     exampleSrc:"A: What do you want to be in the future?\nB: I want to become a doctor.\nA: That is nice.\nB: Yes, it was very fun.",
     funFact:"将来(しょうらい)の夢(ゆめ) (future dream) is one of the first essay topics Japanese children write about. Common answers: サッカー選手(せんしゅ) (soccer player), パティシエ (pastry chef), YouTuber. The question 将来(しょうらい)何(なに)になりたい is asked from kindergarten onward."},

    {type:"teach", trg:"目標(もくひょう)", src:"goal / objective / target", pos:"noun", gender:null,
     note:"Kanji: 目標. 目標(もくひょう)を立(た)てる = to set a goal.\n目標達成(もくひょうたっせい) = goal achievement.",
     example:"A: 今年(ことし)の目標(もくひょう)は何(なに)ですか？\nB: 日本語(にほんご)能力(のうりょく)試験(しけん)に受(う)かることです。\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
     exampleSrc:"A: What is your goal for this year?\nB: To pass the Japanese Language Proficiency Test.\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
     funFact:"目標(もくひょう) culture is embedded in Japanese education and business. Schools set 学習(がくしゅう)目標(もくひょう) (learning goals) each term. Companies set 営業(えいぎょう)目標(もくひょう) (sales targets). New Year's 目標(もくひょう) (resolutions) are written on かきぞめ (first calligraphy of the year)."},

    {type:"teach", trg:"努力(どりょく)", src:"effort / hard work / endeavor", pos:"noun", gender:null,
     note:"Kanji: 努力. 努力(どりょく)する = to make an effort.\n努力家(どりょくか) = hard worker.",
     example:"A: 毎日(まいにち)努力(どりょく)しています。\nB: 素晴(すば)らしいですね。きっとうまくいきます。\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
     exampleSrc:"A: I am making an effort every day.\nB: That is wonderful. It will surely work out.\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
     funFact:"努力(どりょく) is one of the most valued virtues in Japanese culture. The phrase 努力(どりょく)は裏切(うらぎ)らない (effort never betrays you) is deeply believed. School mottos often feature 努力(どりょく). Even when talent is lacking, Japanese culture says 努力(どりょく) can overcome it. がんばる (to do your best) is the verb form of this spirit."},

    {type:"teach", trg:"叶(かな)える", src:"to make (a dream) come true / to fulfill", pos:"verb", gender:null,
     note:"夢(ゆめ)を叶(かな)える = to make a dream come true.\n望(のぞ)みを叶(かな)える = to fulfill a wish.",
     example:"A: 夢(ゆめ)を叶(かな)えるために勉強(べんきょう)しています。\nB: 応援(おうえん)しています。\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
     exampleSrc:"A: I am studying to make my dream come true.\nB: I am cheering you on.\nA: How long did it take?\nB: About two hours.",
     funFact:"夢(ゆめ)を叶(かな)える is a powerful phrase in Japanese pop culture. The song 夢(ゆめ)を叶(かな)えてドラえもん is beloved by children. たなばた (Star Festival) involves writing wishes on たんざく (paper strips) hoping they will be 叶(かな)えられる (fulfilled). The passive form 夢(ゆめ)が叶(かな)う means 'a dream comes true.'"},

    {type:"teach", trg:"諦(あきら)める", src:"to give up / to abandon / to resign oneself", pos:"verb", gender:null,
     note:"諦(あきら)めないで = do not give up.\nFrom あきらか (clear/resigned acceptance).",
     example:"A: 難(むずか)しくても諦(あきら)めません。\nB: その気持(きも)ちが大事(だいじ)です。\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
     exampleSrc:"A: Even if it is difficult, I will not give up.\nB: That attitude is important.\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
     funFact:"諦(あきら)めないで (do not give up) is perhaps the most common encouragement in Japanese sports, education, and entertainment. Anime heroes never 諦(あきら)める. Interestingly, the Buddhist origin of 諦(あきら)める is positive: to see things clearly and accept reality. Modern usage focuses on the negative 'quitting' meaning."},

    {type:"mc", q:"What does 努力(どりょく) mean?", opts:["Effort / hard work","Dream / aspiration","Goal / target","Talent / gift"], ans:"Effort / hard work",
     hint:"Japanese culture considers this virtue more important than natural talent."},

    {type:"teach", trg:"挑戦(ちょうせん)する", src:"to challenge / to attempt / to take on", pos:"verb", gender:null,
     note:"Kanji: 挑戦. 新(あたら)しいことに挑戦(ちょうせん)する = to try something new.\n挑戦者(ちょうせんしゃ) = challenger.",
     example:"A: マラソンに挑戦(ちょうせん)します。\nB: すごいですね。頑張(がんば)ってください。\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
     exampleSrc:"A: I will take on a marathon.\nB: Amazing. Please do your best.\nA: Do you recommend it?\nB: Yes, please try it.",
     funFact:"挑戦(ちょうせん) is always positive in Japanese. Unlike English 'challenge' which can be negative, 挑戦(ちょうせん) implies courage and growth. Job ads say 挑戦(ちょうせん)精神(せいしん)のある方(かた) (people with a challenging spirit). School slogans like 挑戦(ちょうせん)、努力(どりょく)、成長(せいちょう) (challenge, effort, growth) are common."},

    {type:"teach", trg:"成長(せいちょう)する", src:"to grow / to develop / to mature", pos:"verb", gender:null,
     note:"Kanji: 成長. 子供(こども)の成長(せいちょう) = child's growth.\n人格的(じんかくてき)に成長(せいちょう)する = to grow as a person.",
     example:"A: 一年間(いちねんかん)でとても成長(せいちょう)しましたね。\nB: ありがとうございます。\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
     exampleSrc:"A: You have grown so much in one year.\nB: Thank you.\nA: Shall we go together?\nB: That sounds good. Let's go.",
     funFact:"成長(せいちょう) in Japanese covers both physical growth and personal development. Japanese schools emphasize 心(こころ)の成長(せいちょう) (growth of the heart/character) alongside academic achievement. The phrase 成長(せいちょう)するチャンス (chance to grow) frames difficulties positively."},

    {type:"teach", trg:"経験(けいけん)を積(つ)む", src:"to accumulate experience", pos:"verb", gender:null,
     note:"経験(けいけん) (experience) + 積(つ)む (to pile up).\n人生(じんせい)経験(けいけん) = life experience.",
     example:"A: いろいろな経験(けいけん)を積(つ)みたいです。\nB: 若(わか)いうちにたくさん経験(けいけん)しましょう。\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
     exampleSrc:"A: I want to accumulate various experiences.\nB: While young, let us gain many experiences.\nA: Where do you recommend?\nB: I recommend Kyoto.",
     funFact:"経験(けいけん)を積(つ)む reflects the Japanese belief in learning through doing. The master-apprentice (師匠(ししょう)-弟子(でし)) tradition is built on 積(つ)む: piling up years of experience. Even in modern companies, OJT (on-the-job training) and 実践(じっせん) (practical experience) are preferred over textbook learning."},

    {type:"teach", trg:"後悔(こうかい)する", src:"to regret", pos:"verb", gender:null,
     note:"Kanji: 後悔. 後悔(こうかい)しないように = so that I will not regret.\n後悔(こうかい)先(さき)に立(た)たず = regret comes too late.",
     example:"A: 後悔(こうかい)しないように頑張(がんば)ります。\nB: そうですね。やらない後悔(こうかい)が一番(いちばん)つらい。\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
     exampleSrc:"A: I will work hard so I will not regret it.\nB: Right. The regret of not trying is the hardest.\nA: What was the best part?\nB: The food was the most delicious.",
     funFact:"後悔(こうかい)先(さき)に立(た)たず (regret does not stand before/ahead) is a famous proverb meaning you cannot regret before something happens, so act wisely now. Japanese culture emphasizes 後悔(こうかい)しない (no regrets) decision-making. やらない後悔(こうかい) (regret of not doing) is considered worse than trying and failing."},

    {type:"teach", trg:"きっかけ", src:"trigger / opportunity / catalyst", pos:"noun", gender:null,
     note:"The thing that starts something. 日本語(にほんご)を始(はじ)めたきっかけ = what made you start Japanese.\nVery common in interviews.",
     example:"A: 日本(にほん)に興味(きょうみ)を持(も)ったきっかけは何(なに)ですか？\nB: アニメがきっかけです。\nA: よく行(い)きますか？\nB: 月(つき)に一回(いっかい)ぐらい行(い)きます。",
     exampleSrc:"A: What sparked your interest in Japan?\nB: Anime was the trigger.\nA: Do you go often?\nB: I go about once a month.",
     funFact:"きっかけ is one of the most-asked words in Japanese interviews and conversations. 日本語(にほんご)を始(はじ)めたきっかけ (what started you learning Japanese), 今(いま)の仕事(しごと)のきっかけ (what led to your current job). For most foreign Japanese learners, the きっかけ is anime, manga, or Japanese food."},

    {type:"fb", s:"夢(ゆめ)を{1}ために勉強(べんきょう)しています。\n(I am studying to make my dream come true.)", a:"叶(かな)える", opts:["叶(かな)える","諦(あきら)める","後悔(こうかい)する","積(つ)む"], sSrc:"I am studying to make my dream come true.",
     hint:"This verb means to fulfill or realize a dream or wish."},

    {type:"teach", trg:"決(き)める", src:"to decide / to determine", pos:"verb", gender:null,
     note:"Kanji: 決める. 決(き)まる = to be decided (intransitive).\n決(き)めた！= I have decided!",
     example:"A: 進路(しんろ)を決(き)めましたか？\nB: はい、大学(だいがく)に行(い)くことに決(き)めました。\nA: 誰(だれ)と行(い)きましたか？\nB: 友達(ともだち)と一緒(いっしょ)に行(い)きました。",
     exampleSrc:"A: Have you decided your career path?\nB: Yes, I decided to go to university.\nA: Who did you go with?\nB: I went with a friend.",
     funFact:"決(き)める and 決(き)まる form a transitivity pair. 決(き)める (I decide) is active, 決(き)まる (it is decided) is passive. Japanese often uses 決(き)まる to soften the directness: 決(き)まりました (it has been decided) sounds less forceful than 決(き)めました (I decided it). ルールが決(き)まっている means the rule is established."},

    {type:"teach", trg:"応援(おうえん)する", src:"to support / to cheer on / to root for", pos:"verb", gender:null,
     note:"Kanji: 応援. 応援(おうえん)しています = I am rooting for you.\n応援団(おうえんだん) = cheering squad.",
     example:"A: 試験(しけん)頑張(がんば)ってください。応援(おうえん)しています。\nB: ありがとう！力(ちから)になります。\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
     exampleSrc:"A: Do your best on the exam. I am cheering you on.\nB: Thank you! That gives me strength.\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
     funFact:"応援(おうえん) culture is huge in Japan. High school baseball teams have 応援団(おうえんだん) (cheer squads) with brass bands. 応援(おうえん)ソング (cheer songs) and 応援(おうえん)うちわ (fan signs) are essential at idol concerts. Saying 応援(おうえん)しています (I support you) is one of the warmest things you can say."},

    {type:"match", pairs:[{trg:"将来(しょうらい)",src:"future"},{trg:"目標(もくひょう)",src:"goal"},{trg:"努力(どりょく)",src:"effort"},{trg:"挑戦(ちょうせん)",src:"challenge"},{trg:"成長(せいちょう)",src:"growth"}],
     hint:"Match each life goal word with its English meaning."},

    {type:"mc", q:"What does きっかけ mean?", opts:["The trigger or catalyst that starts something","A long-term goal","A feeling of regret","Hard work and effort"], ans:"The trigger or catalyst that starts something",
     hint:"This word answers the question 'what made you start?'"},

    {type:"fb", s:"難(むずか)しくても{1}ません。\n(Even if it is difficult, I will not give up.)", a:"諦(あきら)め", opts:["諦(あきら)め","後悔(こうかい)し","決(き)め","続(つづ)け"], sSrc:"Even if it is difficult, I will not give up.",
     hint:"This verb means to abandon or quit an effort."},

    {type:"mc", q:"What does 応援(おうえん)しています express?", opts:["I am cheering you on / rooting for you","I am watching you","I am competing with you","I am worried about you"], ans:"I am cheering you on / rooting for you",
     hint:"This is one of the warmest supportive phrases in Japanese."}
  ,{type:"match",pairs:[{trg:"経験(けいけん)を積(つ)む",src:"to accumulate experience"},{trg:"後悔(こうかい)する",src:"to regret"},{trg:"きっかけ",src:"trigger / opportunity / catalyst"},{trg:"決(き)める",src:"to decide / to determine"},{trg:"応援(おうえん)する",src:"to support / to cheer on / to root for"}]}]
};
export default BATCH8_L1;
