// Batch 11 – Unit 23 (B1.3 Nominalization): Abstract Concept Nouns
const BATCH11_L1 = {
  id:"jav2_u23l_b11_1", title:"抽象(ちゅうしょう)概念(がいねん)", icon:"🧠", xp:15, board:true,
  steps:[
    {type:"intro", title:"抽象(ちゅうしょう)概念(がいねん)",
     desc:"Learn abstract nouns essential for expressing complex ideas. These words move your Japanese from describing the physical world to discussing concepts, values, and principles.",
     goals:["Use abstract nouns for values and principles","Express complex ideas about society and culture","Build vocabulary for academic and intellectual discussion"]},

    {type:"teach", trg:"可能性(かのうせい)", src:"possibility / potential", pos:"noun", gender:null,
     note:"可能性(かのうせい)がある = there is a possibility.\n可能性(かのうせい)が高(たか)い = highly likely.",
     example:"A: 明日(あした)雨(あめ)が降(ふ)る可能性(かのうせい)はありますか？\nB: はい、六十(ろくじゅう)パーセントの可能性(かのうせい)です。\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
     exampleSrc:"A: Is there a possibility of rain tomorrow?\nB: Yes, 60% possibility.\nA: When was it?\nB: It was last summer.",
     funFact:"可能性(かのうせい) (可能性) is formed from 可能(かのう) (possible) + 性(せい) (nature/tendency). The suffix せい is incredibly productive for creating abstract nouns: 重要性(じゅうようせい) (importance), 安全性(あんぜんせい) (safety), 信頼性(しんらいせい) (reliability). Learning this suffix unlocks hundreds of abstract vocabulary words."},

    {type:"teach", trg:"原因(げんいん)", src:"cause / reason", pos:"noun", gender:null,
     note:"原因(げんいん)を調(しら)べる = investigate the cause.\n結果(けっか)と原因(げんいん) = cause and effect.",
     example:"A: 事故(じこ)の原因(げんいん)はなんでしたか？\nB: 運転手(うんてんしゅ)の不注意(ふちゅうい)が原因(げんいん)でした。\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
     exampleSrc:"A: What was the cause of the accident?\nB: The driver's inattention was the cause.\nA: That is nice.\nB: Yes, it was very fun.",
     funFact:"原因(げんいん) (原因) is more analytical than 理由(りゆう) (reason). 原因(げんいん) asks 'what caused this?' while 理由(りゆう) asks 'why did you do this?' In news reporting and academic papers, 原因(げんいん)と結果(けっか) (cause and effect) analysis is a standard framework. JLPT N3 frequently tests this distinction."},

    {type:"teach", trg:"結果(けっか)", src:"result / outcome", pos:"noun", gender:null,
     note:"その結果(けっか) = as a result.\n結果(けっか)が出(で)る = results come out.",
     example:"A: 調査(ちょうさ)の結果(けっか)はどうでしたか？\nB: 予想(よそう)と違(ちが)う結果(けっか)が出(で)ました。\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
     exampleSrc:"A: How were the survey results?\nB: Results different from expectations came out.\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
     funFact:"結果(けっか) (結果) literally means 'tied fruit' (結 = tie, 果 = fruit). The metaphor is beautiful: results are the fruit that grows from planted seeds (actions). その結果(けっか) (as a result) is a key connector in formal writing and is heavily tested on JLPT reading comprehension sections."},

    {type:"teach", trg:"影響(えいきょう)", src:"influence / effect", pos:"noun", gender:null,
     note:"影響(えいきょう)を与(あた)える = give influence/affect.\n影響(えいきょう)を受(う)ける = be influenced.",
     example:"A: 環境(かんきょう)問題(もんだい)は生活(せいかつ)に影響(えいきょう)を与(あた)えています。\nB: そうですね。私(わたし)たちもなにかしなければなりません。\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
     exampleSrc:"A: Environmental issues are affecting daily life.\nB: That's right. We must do something too.\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
     funFact:"影響(えいきょう) (影響) is essential for discussing cause-and-effect chains in society, science, and culture. Japanese news uses it constantly: 経済(けいざい)に影響(えいきょう) (affecting the economy), 健康(けんこう)に影響(えいきょう) (affecting health). The kanji 影 (shadow) + 響 (echo) poetically describes how effects spread like shadows and echoes."},

    {type:"teach", trg:"関係(かんけい)", src:"relationship / connection", pos:"noun", gender:null,
     note:"関係(かんけい)がある = be related/connected.\n人間(にんげん)関係(かんけい) = human relationships.",
     example:"A: この二(ふた)つの事件(じけん)に関係(かんけい)はありますか？\nB: 直接的(ちょくせつてき)な関係(かんけい)はありません。\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
     exampleSrc:"A: Is there a connection between these two incidents?\nB: There is no direct connection.\nA: How long did it take?\nB: About two hours.",
     funFact:"関係(かんけい) (関係) is crucial for Japanese social concepts. 人間(にんげん)関係(かんけい) (human relationships) is perhaps the most discussed topic in Japanese self-help books. いい関係(かんけい) (good relationship) is the goal of all social interaction. Even business is fundamentally about 関係(かんけい)づくり (relationship building)."},

    {type:"teach", trg:"事実(じじつ)", src:"fact / truth", pos:"noun", gender:null,
     note:"事実(じじつ)を認(みと)める = acknowledge the facts.\nContrary: 意見(いけん) (opinion).",
     example:"A: 事実(じじつ)として日本(にほん)の人口(じんこう)は減(へ)っています。\nB: 少子化(しょうしか)問題(もんだい)は深刻(しんこく)ですね。\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
     exampleSrc:"A: As a fact, Japan's population is decreasing.\nB: The declining birthrate is serious.\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
     funFact:"事実(じじつ) (事実) vs 意見(いけん) (opinion) is a fundamental distinction in Japanese media literacy education. News programs distinguish 事実報道(じじつほうどう) (factual reporting) from 解釈報道(かいしゃくほうどう) (interpretive reporting). In debates, 事実(じじつ)に基(もと)づいて (based on facts) is a phrase that adds credibility."},

    {type:"teach", trg:"目的(もくてき)", src:"purpose / objective", pos:"noun", gender:null,
     note:"目的(もくてき)を達成(たっせい)する = achieve an objective.\nなんの目的(もくてき)で = for what purpose.",
     example:"A: 日本(にほん)に行(い)く目的(もくてき)はなんですか？\nB: 日本語(にほんご)の勉強(べんきょう)が目的(もくてき)です。\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
     exampleSrc:"A: What is your purpose for going to Japan?\nB: Studying Japanese is my purpose.\nA: Do you recommend it?\nB: Yes, please try it.",
     funFact:"目的(もくてき) (目的) combines 目 (eye) and 的 (target): something you aim your eyes at. In business, 目的(もくてき)と手段(しゅだん) (purpose and means) analysis ensures activities serve their goals. Immigration officers ask 日本(にほん)に来(く)る目的(もくてき)は (what is your purpose for coming to Japan?)."},

    {type:"teach", trg:"方法(ほうほう)", src:"method / way", pos:"noun", gender:null,
     note:"方法(ほうほう)を考(かんが)える = think of a method.\n勉強方法(べんきょうほうほう) = study method.",
     example:"A: もっと効果的(こうかてき)な勉強方法(べんきょうほうほう)はありますか？\nB: フラッシュカードを使(つか)う方法(ほうほう)がおすすめです。\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
     exampleSrc:"A: Is there a more effective study method?\nB: I recommend the flashcard method.\nA: Shall we go together?\nB: That sounds good. Let's go.",
     funFact:"Japanese has many words for 'method': 方法(ほうほう) (method/technique), やり方(かた) (way of doing, casual), し方(かた) (manner), 手順(てじゅん) (procedure). 方法(ほうほう) is the most formal and academic. 方法論(ほうほうろん) (methodology) is a key academic concept. Japanese craftsmanship values developing precise 方法(ほうほう) for every task."},

    {type:"teach", trg:"状況(じょうきょう)", src:"situation / circumstances", pos:"noun", gender:null,
     note:"状況(じょうきょう)による = depends on the situation.\n現在(げんざい)の状況(じょうきょう) = current situation.",
     example:"A: 現在(げんざい)の状況(じょうきょう)を説明(せつめい)してください。\nB: 今(いま)は問題(もんだい)が三(みっ)つあります。\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
     exampleSrc:"A: Please explain the current situation.\nB: There are currently three problems.\nA: Where do you recommend?\nB: I recommend Kyoto.",
     funFact:"状況(じょうきょう) (状況) is the adult version of 様子(ようす) (state of things). Business reports always include a 状況報告(じょうきょうほうこく) (situation report). Japanese communication values understanding the 状況(じょうきょう) before acting. The famous 空気(くうき)を読(よ)む (reading the atmosphere) is essentially reading the social 状況(じょうきょう)."},

    {type:"teach", trg:"価値(かち)", src:"value / worth", pos:"noun", gender:null,
     note:"価値(かち)がある = has value/is worth it.\n価値観(かちかん) = values/value system.",
     example:"A: この経験(けいけん)には大(おお)きな価値(かち)があります。\nB: そうですね。お金(かね)では買(か)えない価値(かち)ですね。\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
     exampleSrc:"A: This experience has great value.\nB: That's right. A value money can't buy.\nA: What was the best part?\nB: The food was the most delicious.",
     funFact:"価値(かち) (価値) and 価値観(かちかん) (価値観, value system) are central to philosophical discussion in Japanese. お互(たが)いの価値観(かちかん)を尊重(そんちょう)する (respect each other's values) is a key phrase in multicultural dialogue. Japanese society is experiencing a 価値観(かちかん)の多様化(たようか) (diversification of values) as traditional norms evolve."},

    {type:"teach", trg:"傾向(けいこう)", src:"tendency / trend", pos:"noun", gender:null,
     note:"傾向(けいこう)がある = there is a tendency.\n最近(さいきん)の傾向(けいこう) = recent trends.",
     example:"A: 最近(さいきん)、若者(わかもの)はテレビを見(み)ない傾向(けいこう)があります。\nB: たしかに、YouTubeの方(ほう)が人気(にんき)ですね。\nA: よく行(い)きますか？\nB: 月(つき)に一回(いっかい)ぐらい行(い)きます。",
     exampleSrc:"A: Recently, young people tend not to watch TV.\nB: Indeed, YouTube is more popular.\nA: Do you go often?\nB: I go about once a month.",
     funFact:"傾向(けいこう) (傾向) is essential for discussing social trends and statistical patterns. News analysis uses 傾向(けいこう)と対策(たいさく) (trends and countermeasures) as a standard framework. 少子化(しょうしか)傾向(けいこう) (declining birthrate trend) and 高齢化(こうれいか)傾向(けいこう) (aging population trend) are Japan's most discussed 傾向(けいこう)."},

    // Quiz steps
    {type:"mc", q:"「原因(げんいん)」と「理由(りゆう)」はどう違(ちが)いますか？",
     opts:["原因(げんいん) is analytical cause, 理由(りゆう) is personal reason","They are exactly the same","原因(げんいん) is casual, 理由(りゆう) is formal","原因(げんいん) is for people, 理由(りゆう) is for events"],
     ans:"原因(げんいん) is analytical cause, 理由(りゆう) is personal reason",
     hint:"One analyzes what caused something, the other asks why someone chose to do something. Think scientific vs p...."},

    {type:"fb", s:"環境(かんきょう)問題(もんだい)は生活(せいかつ)に{1}を与(あた)えています。",
     a:["影響(えいきょう)"],
     opts:["影響(えいきょう)","関係(かんけい)","結果(けっか)","事実(じじつ)"],
     hint:"Environmental issues are having an effect on daily life. This word means 'influence' or 'impact.'",
     sSrc:"Environmental issues are affecting daily life."},

    {type:"match", pairs:[
      {trg:"可能性(かのうせい)", src:"possibility"},
      {trg:"原因(げんいん)", src:"cause"},
      {trg:"結果(けっか)", src:"result"},
      {trg:"目的(もくてき)", src:"purpose"}
    ]},

    {type:"mc", q:"「せい」の接尾辞(せつびじ)(suffix)でどんなことばが作(つく)れますか？",
     opts:["Abstract nouns like 重要性(じゅうようせい) (importance)","Verb forms","Adjective forms","Place names"],
     ans:"Abstract nouns like 重要性(じゅうようせい) (importance)",
     hint:"This productive suffix turns adjective stems and other words into a... concept n.... Think: possible + (nature) = possibility."},

    {type:"fb", s:"日本(にほん)に行(い)く{1}はなんですか？",
     a:["目的(もくてき)"],
     opts:["目的(もくてき)","方法(ほうほう)","状況(じょうきょう)","傾向(けいこう)"],
     hint:"Immigration asks this question. It means 'for what purpose' are you visiting.",
     sSrc:"What is your purpose for going to Japan?"},

    {type:"mc", q:"「空気(くうき)を読(よ)む」はなんのことですか？",
     opts:["Reading the social atmosphere/situation","Literally reading the air quality","A breathing exercise","A weather forecasting method"],
     ans:"Reading the social atmosphere/situation",
     hint:"This famous Japanese concept involves understanding unspoken social dynamics. It is essentially reading the 状況(じょうきょう)."}
  ]
};
export default BATCH11_L1;
