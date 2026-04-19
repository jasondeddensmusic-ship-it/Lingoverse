// Unit 23 Batch 2 Lesson 4: 名詞化(めいしか)の応用(おうよう) (Applied Nominalization)
const BATCH2_L_4 = {
  id:"jav2_u23l_b2_4", title:"名詞化(めいしか)の応用(おうよう)", icon:"🔧", xp:15, board:true,
  steps:[
    {type:"intro", title:"名詞化(めいしか)の応用(おうよう)",
     desc:"Apply nominalization in complex expressions. Learn もの patterns for general truths, ため for purpose and cause, and おかげ/せい for attributing credit or blame. These patterns are essential for nuanced B1 expression and JLPT N3 success.",
     goals:["Use もの patterns for universal statements","Use ため for purpose and cause","Use おかげ and せい for attribution"]},

    {type:"teach", trg:"〜ものだ", src:"it is natural that ~ / used to ~", pos:"part", gender:null,
     note:"Expresses general truths or nostalgic past habits.\n子供(こども)のころはよく遊(あそ)んだものだ = I used to play a lot as a child.",
     example:"A: 人(ひと)は誰(だれ)でも間違(まちが)うものです。\nB: そうですね。完璧(かんぺき)な人(ひと)はいません。\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
     exampleSrc:"A: It is natural for anyone to make mistakes.\nB: That is right. No one is perfect.\nA: That is nice.\nB: Yes, it was very fun.",
     funFact:"もの as a formal noun has multiple uses. For general truths, ものだ states what is naturally so. For nostalgia, た + ものだ recalls habitual past actions with a warm, wistful feeling. This dual use shows how もの (thing) extends from concrete objects to abstract patterns in Japanese grammar."},

    {type:"teach", trg:"〜ものではない", src:"one should not ~ / it is not done", pos:"part", gender:null,
     note:"Expresses social norms or moral prohibitions.\n人(ひと)の悪口(わるぐち)を言(い)うものではない = one should not speak ill of others.",
     example:"A: 食事(しょくじ)中(ちゅう)にスマホを見(み)るものではありません。\nB: すみません、気(き)をつけます。\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
     exampleSrc:"A: One should not look at a phone during meals.\nB: Sorry, I will be careful.\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
     funFact:"ものではない is a softer prohibition than するな (direct command). It frames the rule as a social norm: 'it is not the kind of thing one does.' Parents and teachers use this pattern to teach manners and social expectations. It carries moral weight without being harshly authoritarian."},

    {type:"teach", trg:"〜ため（に）", src:"for the purpose of ~ / because of ~", pos:"part", gender:null,
     note:"Purpose (dictionary form) or cause (past/noun form).\n健康(けんこう)のため = for health. 雨(あめ)のために = because of rain.",
     example:"A: 試験(しけん)に受(う)かるために毎日(まいにち)勉強(べんきょう)しています。\nB: 努力(どりょく)は必(かなら)ず実(み)を結(むす)びます。\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
     exampleSrc:"A: I study every day in order to pass the exam.\nB: Effort always bears fruit.\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
     funFact:"ため is extremely versatile. With dictionary form verbs: purpose (in order to). With た-form or nouns: cause (because of). This double use is a common source of confusion. Context determines which: 行(い)くために (in order to go) vs. 行(い)ったために (because one went). Mastering this distinction is a B1 milestone."},

    {type:"mc", q:"人(ひと)は誰(だれ)でも間違(まちが)うものです means:", opts:["It is natural for anyone to make mistakes","People intentionally make mistakes","I used to make mistakes","Mistakes are unforgivable"], ans:"It is natural for anyone to make mistakes",
     hint:"ものだ with a present tense verb states a general truth about the way things naturally are."},

    {type:"teach", trg:"〜おかげで", src:"thanks to ~ / owing to ~", pos:"part", gender:null,
     note:"Positive attribution. Attributes a good result to a cause.\n先生(せんせい)のおかげで = thanks to the teacher.",
     example:"A: 皆(みな)さんのおかげで成功(せいこう)しました。\nB: いえいえ、あなたの努力(どりょく)の結果(けっか)です。\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
     exampleSrc:"A: I succeeded thanks to everyone.\nB: No no, it is the result of your effort.\nA: How long did it take?\nB: About two hours.",
     funFact:"おかげ uses the kanji 御蔭, combining an honorific prefix with 'shadow/shade.' The original meaning was divine protection: being in the 'shade' of a deity's blessing. Today it expresses gratitude for positive outcomes caused by others. おかげさまで (thanks to you) is one of the most polite gratitude expressions in Japanese."},

    {type:"teach", trg:"〜せいで", src:"because of ~ (negative cause)", pos:"part", gender:null,
     note:"Negative attribution. Blames a bad result on a cause.\n雨(あめ)のせいで = because of the rain (negatively).",
     example:"A: 寝不足(ねぶそく)のせいで頭(あたま)が痛(いた)い。\nB: 早(はや)く寝(ね)たほうがいいですよ。\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
     exampleSrc:"A: I have a headache because of lack of sleep.\nB: You should go to bed early.\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
     funFact:"せい means 'fault' or 'blame.' It always attributes a negative outcome: あの人(ひと)のせいだ (it is that person's fault). Using おかげ for negative things sounds sarcastic: あなたのおかげで遅刻(ちこく)した (thanks to you I was late, sarcastically). The おかげ/せい pair is one of the clearest positive/negative attribution systems in any language."},

    {type:"teach", trg:"寝不足(ねぶそく)", src:"lack of sleep / sleep deprivation", pos:"noun", gender:null,
     note:"寝(ね) (sleep) + 不足(ぶそく) (insufficient).\n慢性的(まんせいてき)な寝不足(ねぶそく) = chronic sleep deprivation.",
     example:"A: 最近(さいきん)寝不足(ねぶそく)が続(つづ)いています。\nB: 無理(むり)をしないでくださいね。\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
     exampleSrc:"A: I have been lacking sleep recently.\nB: Please do not push yourself too hard.\nA: Do you recommend it?\nB: Yes, please try it.",
     funFact:"寝不足 is a compound that Japanese people use constantly. Japan consistently ranks among the most sleep-deprived nations. The average Japanese adult sleeps only about 6.5 hours. The phenomenon of 居眠(いねむ)り (dozing in public) is socially accepted because it signals you have been working hard enough to be exhausted."},

    {type:"fb", s:"皆(みな)さんの{1}で成功(せいこう)しました。\n(I succeeded thanks to everyone.)", a:"おかげ", opts:["おかげ","せい","ため","もの"], sSrc:"I succeeded thanks to everyone.",
     hint:"The attribution word used for positive outcomes, expressing gratitude."},

    {type:"teach", trg:"〜かわりに", src:"instead of ~ / in exchange for ~", pos:"part", gender:null,
     note:"Noun/verb + かわりに. Substitution or compensation.\n肉(にく)のかわりに魚(さかな)を食(た)べた = ate fish instead of meat.",
     example:"A: 雨(あめ)の日(ひ)はジョギングのかわりにヨガをします。\nB: いい考(かんが)えですね。\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
     exampleSrc:"A: On rainy days I do yoga instead of jogging.\nB: That is a good idea.\nA: Shall we go together?\nB: That sounds good. Let's go.",
     funFact:"かわり (代わり) means 'substitute' or 'replacement.' As a formal noun, it connects alternatives. It can also express trade-offs: 手伝(てつだ)うかわりに、ご飯(はん)をおごってね (in exchange for helping, treat me to a meal). This give-and-take nuance reflects the Japanese value of reciprocity."},

    {type:"teach", trg:"〜うちに", src:"while ~ / before ~ changes", pos:"part", gender:null,
     note:"Suggests doing something before a window of opportunity closes.\n明(あか)るいうちに帰(かえ)ろう = let us go home while it is still light.",
     example:"A: 忘(わす)れないうちにメモしておきます。\nB: いい習慣(しゅうかん)ですね。\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
     exampleSrc:"A: I will write a memo before I forget.\nB: That is a good habit.\nA: Where do you recommend?\nB: I recommend Kyoto.",
     funFact:"うち means 'inside' or 'within.' As a formal noun, it marks a bounded time window. The nuance is urgency: do it before the situation changes. 若(わか)いうちに (while young), 元気(げんき)なうちに (while healthy), and 熱(あつ)いうちに (while hot, for food) all suggest seizing the moment."},

    {type:"teach", trg:"〜たびに", src:"every time ~ / whenever ~", pos:"part", gender:null,
     note:"Dictionary form + たびに = each time something happens.\n会(あ)うたびに = every time we meet.",
     example:"A: この曲(きょく)を聞(き)くたびに昔(むかし)を思(おも)い出(だ)します。\nB: 思(おも)い出(で)の曲(きょく)ですね。\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
     exampleSrc:"A: Every time I hear this song, I remember the past.\nB: It is a song full of memories.\nA: What was the best part?\nB: The food was the most delicious.",
     funFact:"たび (度) means 'time/occasion.' As a formal noun, it creates a recurring pattern: action X happens every time condition Y occurs. It is more literary than 毎回(まいかい) (every time) and often carries emotional weight. この町(まち)を訪(おとず)れるたびに (every time I visit this town) suggests a meaningful repeated connection."},

    {type:"mc", q:"寝不足(ねぶそく)のせいで頭(あたま)が痛(いた)い uses せい because:", opts:["The result is negative (headache caused by poor sleep)","The speaker is grateful for sleep","The result is positive","The speaker is uncertain about the cause"], ans:"The result is negative (headache caused by poor sleep)",
     hint:"せい attributes blame for bad outcomes, unlike おかげ which gives credit for good ones."},

    {type:"teach", trg:"思(おも)い出(で)", src:"memory / memories / recollection", pos:"noun", gender:null,
     note:"思(おも)い出(で)を作(つく)る = to make memories.\nいい思(おも)い出(で) = good memories.",
     example:"A: 学生(がくせい)時代(じだい)の思(おも)い出(で)は宝物(たからもの)です。\nB: 一生(いっしょう)の宝(たから)ですね。\nA: よく行(い)きますか？\nB: 月(つき)に一回(いっかい)ぐらい行(い)きます。",
     exampleSrc:"A: My memories of school days are treasures.\nB: They are lifelong treasures.\nA: Do you go often?\nB: I go about once a month.",
     funFact:"思い出 combines 思い (thought/feeling) and 出 (come out), meaning feelings that 'come out' from the past. 思(おも)い出(で)話(ばなし) (talking about memories) is a cherished social activity. The related verb 思(おも)い出(だ)す (to recall) literally means 'to put out thoughts,' as if memories are stored inside and brought forth."},

    {type:"teach", trg:"宝物(たからもの)", src:"treasure / prized possession", pos:"noun", gender:null,
     note:"宝(たから) (treasure) + 物(もの) (thing).\n家族(かぞく)は私(わたし)の宝物(たからもの)です = my family is my treasure.",
     example:"A: 子供(こども)のころの写真(しゃしん)は宝物(たからもの)です。\nB: デジタルでバックアップしておくといいですよ。\nA: 誰(だれ)と行(い)きましたか？\nB: 友達(ともだち)と一緒(いっしょ)に行(い)きました。",
     exampleSrc:"A: Photos from childhood are treasures.\nB: You should back them up digitally.\nA: Who did you go with?\nB: I went with a friend.",
     funFact:"宝物 uses 宝 (treasure) and 物 (thing). While it can refer to physical valuables, Japanese people commonly use it metaphorically for people and experiences: 子供(こども)は宝物(たからもの) (children are treasures). Japanese temples and shrines designate important artifacts as 国宝(こくほう) (national treasures)."},

    {type:"fb", s:"忘(わす)れない{1}にメモしておきます。\n(I will write a memo before I forget.)", a:"うち", opts:["うち","あいだ","まえ","とき"], sSrc:"I will write a memo before I forget.",
     hint:"The formal noun meaning 'within/while,' suggesting acting before a window closes."},

    {type:"match", pairs:[{trg:"ものだ",src:"it is natural that / used to"},{trg:"ため",src:"for the purpose of / because of"},{trg:"おかげで",src:"thanks to (positive)"},{trg:"せいで",src:"because of (negative)"}]},

    {type:"fb", s:"試験(しけん)に受(う)かる{1}に毎日(まいにち)勉強(べんきょう)しています。\n(I study every day in order to pass the exam.)", a:"ため", opts:["ため","おかげ","せい","うち"], sSrc:"I study every day in order to pass the exam.",
     hint:"The formal noun expressing purpose when combined with a dictionary form verb."},

    {type:"match", pairs:[{trg:"かわりに",src:"instead of"},{trg:"うちに",src:"while / before change"},{trg:"たびに",src:"every time"},{trg:"思(おも)い出(で)",src:"memories"}]},

    {type:"mc", q:"会(あ)うたびに means:", opts:["instead of meeting","before meeting","every time we meet","in order to meet"], ans:"every time we meet",
     hint:"たびに creates a recurring pattern: each t... the condition occurs, something happens."},
  {type:"match",pairs:[{trg:"〜ものではない",src:"one should not ~ / it is not done"},{trg:"寝不足(ねぶそく)",src:"lack of sleep / sleep deprivation"},{trg:"宝物(たからもの)",src:"treasure / prized possession"}]},
  {type:"fb", s:"成功(せいこう)するためには{1}から学(まな)ぶことが大切(たいせつ)です。", a:["失敗(しっぱい)"], opts:["失敗(しっぱい)","〜せいで","〜おかげで","〜ため（に）"], hint:"An unsuccessful outcome that can become a learning experience.", sSrc:"To succeed, it is important to learn from {1}."},
  {type:"fb", s:"旅行(りょこう)の{1}をアルバムにまとめました。", a:["思(おも)い出(で)"], opts:["思(おも)い出(で)","宝物(たからもの)","寝不足(ねぶそく)","〜せいで"], hint:"The noun for personal memories or recollections of past events.", sSrc:"I put the {1} from the trip together into an album."}
]
};
export default BATCH2_L_4;
