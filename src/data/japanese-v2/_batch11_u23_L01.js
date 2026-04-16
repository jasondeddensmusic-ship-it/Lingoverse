// Batch 11 – Unit 23 (B1.3 Nominalization): Abstract Concept Nouns
const BATCH11_L1 = {
  id:"jav2_u23l_b11_1", title:"ちゅうしょうがいねん", icon:"🧠", xp:15, board:true,
  steps:[
    {type:"intro", title:"ちゅうしょうがいねん",
     desc:"Learn abstract nouns essential for expressing complex ideas. These words move your Japanese from describing the physical world to discussing concepts, values, and principles.",
     goals:["Use abstract nouns for values and principles","Express complex ideas about society and culture","Build vocabulary for academic and intellectual discussion"]},

    {type:"teach", trg:"かのうせい", src:"possibility / potential", pos:"noun", gender:null,
     note:"かのうせいがある = there is a possibility.\nかのうせいがたかい = highly likely.",
     example:"A: あしたあめがふるかのうせいはありますか？\nB: はい、ろくじゅうパーセントのかのうせいです。",
     exampleSrc:"A: Is there a possibility of rain tomorrow?\nB: Yes, 60% possibility.",
     funFact:"かのうせい (可能性) is formed from 可能 (possible) + 性 (nature/tendency). The suffix せい is incredibly productive for creating abstract nouns: じゅうようせい (importance), あんぜんせい (safety), しんらいせい (reliability). Learning this suffix unlocks hundreds of abstract vocabulary words."},

    {type:"teach", trg:"げんいん", src:"cause / reason", pos:"noun", gender:null,
     note:"げんいんをしらべる = investigate the cause.\nけっかとげんいん = cause and effect.",
     example:"A: じこのげんいんはなんでしたか？\nB: うんてんしゅのふちゅういがげんいんでした。",
     exampleSrc:"A: What was the cause of the accident?\nB: The driver's inattention was the cause.",
     funFact:"げんいん (原因) is more analytical than りゆう (reason). げんいん asks 'what caused this?' while りゆう asks 'why did you do this?' In news reporting and academic papers, げんいんとけっか (cause and effect) analysis is a standard framework. JLPT N3 frequently tests this distinction."},

    {type:"teach", trg:"けっか", src:"result / outcome", pos:"noun", gender:null,
     note:"そのけっか = as a result.\nけっかがでる = results come out.",
     example:"A: ちょうさのけっかはどうでしたか？\nB: よそうとちがうけっかがでました。",
     exampleSrc:"A: How were the survey results?\nB: Results different from expectations came out.",
     funFact:"けっか (結果) literally means 'tied fruit' (結 = tie, 果 = fruit). The metaphor is beautiful: results are the fruit that grows from planted seeds (actions). そのけっか (as a result) is a key connector in formal writing and is heavily tested on JLPT reading comprehension sections."},

    {type:"teach", trg:"えいきょう", src:"influence / effect", pos:"noun", gender:null,
     note:"えいきょうをあたえる = give influence/affect.\nえいきょうをうける = be influenced.",
     example:"A: かんきょうもんだいはせいかつにえいきょうをあたえています。\nB: そうですね。わたしたちもなにかしなければなりません。",
     exampleSrc:"A: Environmental issues are affecting daily life.\nB: That's right. We must do something too.",
     funFact:"えいきょう (影響) is essential for discussing cause-and-effect chains in society, science, and culture. Japanese news uses it constantly: けいざいにえいきょう (affecting the economy), けんこうにえいきょう (affecting health). The kanji 影 (shadow) + 響 (echo) poetically describes how effects spread like shadows and echoes."},

    {type:"teach", trg:"かんけい", src:"relationship / connection", pos:"noun", gender:null,
     note:"かんけいがある = be related/connected.\nにんげんかんけい = human relationships.",
     example:"A: このふたつのじけんにかんけいはありますか？\nB: ちょくせつてきなかんけいはありません。",
     exampleSrc:"A: Is there a connection between these two incidents?\nB: There is no direct connection.",
     funFact:"かんけい (関係) is crucial for Japanese social concepts. にんげんかんけい (human relationships) is perhaps the most discussed topic in Japanese self-help books. いいかんけい (good relationship) is the goal of all social interaction. Even business is fundamentally about かんけいづくり (relationship building)."},

    {type:"teach", trg:"じじつ", src:"fact / truth", pos:"noun", gender:null,
     note:"じじつをみとめる = acknowledge the facts.\nContrary: いけん (opinion).",
     example:"A: じじつとしてにほんのじんこうはへっています。\nB: しょうしかもんだいはしんこくですね。",
     exampleSrc:"A: As a fact, Japan's population is decreasing.\nB: The declining birthrate is serious.",
     funFact:"じじつ (事実) vs いけん (opinion) is a fundamental distinction in Japanese media literacy education. News programs distinguish じじつほうどう (factual reporting) from かいしゃくほうどう (interpretive reporting). In debates, じじつにもとづいて (based on facts) is a phrase that adds credibility."},

    {type:"teach", trg:"もくてき", src:"purpose / objective", pos:"noun", gender:null,
     note:"もくてきをたっせいする = achieve an objective.\nなんのもくてきで = for what purpose.",
     example:"A: にほんにいくもくてきはなんですか？\nB: にほんごのべんきょうがもくてきです。",
     exampleSrc:"A: What is your purpose for going to Japan?\nB: Studying Japanese is my purpose.",
     funFact:"もくてき (目的) combines 目 (eye) and 的 (target): something you aim your eyes at. In business, もくてきとしゅだん (purpose and means) analysis ensures activities serve their goals. Immigration officers ask にほんにくるもくてきは (what is your purpose for coming to Japan?)."},

    {type:"teach", trg:"ほうほう", src:"method / way", pos:"noun", gender:null,
     note:"ほうほうをかんがえる = think of a method.\nべんきょうほうほう = study method.",
     example:"A: もっとこうかてきなべんきょうほうほうはありますか？\nB: フラッシュカードをつかうほうほうがおすすめです。",
     exampleSrc:"A: Is there a more effective study method?\nB: I recommend the flashcard method.",
     funFact:"Japanese has many words for 'method': ほうほう (method/technique), やりかた (way of doing, casual), しかた (manner), てじゅん (procedure). ほうほう is the most formal and academic. ほうほうろん (methodology) is a key academic concept. Japanese craftsmanship values developing precise ほうほう for every task."},

    {type:"teach", trg:"じょうきょう", src:"situation / circumstances", pos:"noun", gender:null,
     note:"じょうきょうによる = depends on the situation.\nげんざいのじょうきょう = current situation.",
     example:"A: げんざいのじょうきょうをせつめいしてください。\nB: いまはもんだいがみっつあります。",
     exampleSrc:"A: Please explain the current situation.\nB: There are currently three problems.",
     funFact:"じょうきょう (状況) is the adult version of ようす (state of things). Business reports always include a じょうきょうほうこく (situation report). Japanese communication values understanding the じょうきょう before acting. The famous 空気を読む (reading the atmosphere) is essentially reading the social じょうきょう."},

    {type:"teach", trg:"かち", src:"value / worth", pos:"noun", gender:null,
     note:"かちがある = has value/is worth it.\nかちかん = values/value system.",
     example:"A: このけいけんにはおおきなかちがあります。\nB: そうですね。おかねではかえないかちですね。",
     exampleSrc:"A: This experience has great value.\nB: That's right. A value money can't buy.",
     funFact:"かち (価値) and かちかん (価値観, value system) are central to philosophical discussion in Japanese. たがいのかちかんをそんちょうする (respect each other's values) is a key phrase in multicultural dialogue. Japanese society is experiencing a かちかんのたようか (diversification of values) as traditional norms evolve."},

    {type:"teach", trg:"けいこう", src:"tendency / trend", pos:"noun", gender:null,
     note:"けいこうがある = there is a tendency.\nさいきんのけいこう = recent trends.",
     example:"A: さいきん、わかものはテレビをみないけいこうがあります。\nB: たしかに、YouTubeのほうがにんきですね。",
     exampleSrc:"A: Recently, young people tend not to watch TV.\nB: Indeed, YouTube is more popular.",
     funFact:"けいこう (傾向) is essential for discussing social trends and statistical patterns. News analysis uses けいこうとたいさく (trends and countermeasures) as a standard framework. しょうしかけいこう (declining birthrate trend) and こうれいかけいこう (aging population trend) are Japan's most discussed けいこう."},

    // Quiz steps
    {type:"mc", q:"「げんいん」と「りゆう」はどうちがいますか？",
     opts:["げんいん is analytical cause, りゆう is personal reason","They are exactly the same","げんいん is casual, りゆう is formal","げんいん is for people, りゆう is for events"],
     ans:"げんいん is analytical cause, りゆう is personal reason",
     hint:"One analyzes what caused something, the other asks why someone chose to do something. Think scientific vs p...."},

    {type:"fb", s:"かんきょうもんだいはせいかつに{1}をあたえています。",
     a:["えいきょう"],
     opts:["えいきょう","かんけい","けっか","じじつ"],
     hint:"Environmental issues are having an effect on daily life. This word means 'influence' or 'impact.'",
     sSrc:"Environmental issues are affecting daily life."},

    {type:"match", pairs:[
      {trg:"かのうせい", src:"possibility"},
      {trg:"げんいん", src:"cause"},
      {trg:"けっか", src:"result"},
      {trg:"もくてき", src:"purpose"}
    ]},

    {type:"mc", q:"「せい」のせつびじ（suffix）でどんなことばがつくれますか？",
     opts:["Abstract nouns like じゅうようせい (importance)","Verb forms","Adjective forms","Place names"],
     ans:"Abstract nouns like じゅうようせい (importance)",
     hint:"This productive suffix turns adjective stems and other words into a... concept n.... Think: possible + (nature) = possibility."},

    {type:"fb", s:"にほんにいく{1}はなんですか？",
     a:["もくてき"],
     opts:["もくてき","ほうほう","じょうきょう","けいこう"],
     hint:"Immigration asks this question. It means 'for what purpose' are you visiting.",
     sSrc:"What is your purpose for going to Japan?"},

    {type:"mc", q:"「くうきをよむ」はなんのことですか？",
     opts:["Reading the social atmosphere/situation","Literally reading the air quality","A breathing exercise","A weather forecasting method"],
     ans:"Reading the social atmosphere/situation",
     hint:"This famous Japanese concept involves understanding unspoken social dynamics. It is essentially reading the じょうきょう."}
  ]
};
export default BATCH11_L1;
