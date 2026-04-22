// Unit 23 Batch 2 Lesson 1: 抽象(ちゅうしょう)名詞(めいし) (Abstract Noun Vocabulary)
const BATCH2_L_1 = {
  id:"jav2_u23l_b2_1", title:"抽象(ちゅうしょう)名詞(めいし)", icon:"💎", xp:15, board:true,
  steps:[
    {type:"intro", title:"抽象(ちゅうしょう)名詞(めいし)",
     desc:"B1 Japanese requires abstract nouns for discussing concepts, values, and qualities. Learn nouns like 'freedom,' 'responsibility,' 'possibility,' and 'effort.' These words elevate your ability to discuss ideas and express nuanced thoughts.",
     goals:["Learn abstract nouns for values and qualities","Use abstract nouns in opinion expressions","Combine abstract nouns with nominalization patterns"]},

    {type:"teach", trg:"自由(じゆう)", src:"freedom / liberty", pos:"noun", gender:null,
     note:"Kanji: 自由. じ (self) + ゆう (reason/cause).\n自由(じゆう)な = free (na-adjective form).",
     example:"A: 自由(じゆう)に意見(いけん)を言(い)ってください。\nB: では、遠慮(えんりょ)なく言(い)います。\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
     exampleSrc:"A: Please state your opinions freely.\nB: Then I will speak without reserve.\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
     funFact:"自由 literally means 'from oneself,' implying self-determination. The word was coined during the Meiji era to translate Western concepts of liberty. Japanese freedom balances individual rights with social harmony (和(わ), wa). 自由(じゆう)にする means 'to do as one pleases,' which carries a slightly different nuance than Western freedom."},

    {type:"teach", trg:"責任(せきにん)", src:"responsibility", pos:"noun", gender:null,
     note:"Kanji: 責任. せき (blame/duty) + にん (burden/duty).\n責任(せきにん)を取(と)る = to take responsibility.",
     example:"A: これは私(わたし)の責任(せきにん)です。\nB: 一緒(いっしょ)に解決(かいけつ)しましょう。\nA: 私(わたし)も興味(きょうみ)があります。\nB: じゃあ、今度(こんど)一緒(いっしょ)にどうですか？",
     exampleSrc:"A: This is my responsibility.\nB: Let us solve it together.\nA: I am also interested.\nB: Then, how about doing it together next time?",
     funFact:"責任 is heavy in Japanese culture. 責任(せきにん)を取(と)る (take responsibility) often means resignation from a position. Corporate scandals lead to presidents bowing deeply and accepting 責任(せきにん). The concept extends beyond blame: it includes duty, accountability, and the social weight of your role."},

    {type:"teach", trg:"可能性(かのうせい)", src:"possibility / likelihood", pos:"noun", gender:null,
     note:"Kanji: 可能性. 可能(かのう) (possible) + 性(せい) (nature/quality).\n可能性(かのうせい)が高(たか)い = high possibility.",
     example:"A: 合格(ごうかく)する可能性(かのうせい)はどのくらいですか？\nB: 頑張(がんば)れば可能性(かのうせい)は高(たか)いですよ。\nA: どんな感(かん)じでしたか？\nB: 想像(そうぞう)していたよりずっと良(よ)かったです。",
     exampleSrc:"A: What is the possibility of passing?\nB: If you try hard, the possibility is high.\nA: What was it like?\nB: It was much better than I imagined.",
     funFact:"可能性 is essential for hedging and probability. Japanese communication avoids absolutes, so 可能性(かのうせい)がある (there is a possibility) is preferred over definitive statements. News reports say 可能性(かのうせい)がある when reporting unconfirmed information, maintaining journalistic caution."},

    {type:"teach", trg:"努力(どりょく)", src:"effort / hard work / endeavor", pos:"noun", gender:null,
     note:"Kanji: 努力. ど (strive) + りょく (strength/power).\n努力(どりょく)する = to make an effort.",
     example:"A: 努力(どりょく)すれば必(かなら)ず成功(せいこう)します。\nB: そう信(しん)じて頑張(がんば)ります。\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
     exampleSrc:"A: If you make effort, you will surely succeed.\nB: I believe that and will do my best.\nA: What did you eat?\nB: I ate the local specialty.",
     funFact:"努力 is one of Japan's most valued concepts. Japanese culture emphasizes effort over innate talent: 努力(どりょく)する人(ひと) (a person who makes effort) is more admired than a natural genius. The phrase 努力(どりょく)は裏切(うらぎ)らない (doryoku wa uragiranai, effort does not betray) is a beloved motivational saying."},

    {type:"mc", q:"責任(せきにん)を取(と)る in Japanese corporate culture often means:", opts:["Taking responsibility, often by resigning","Avoiding blame","Starting a new project","Getting a promotion"], ans:"Taking responsibility, often by resigning",
     hint:"In Japanese business, accepting r... for failure o... requires leaving your position."},

    {type:"teach", trg:"経験(けいけん)", src:"experience", pos:"noun", gender:null,
     note:"Kanji: 経験. けい (pass through) + けん (test/verify).\n経験(けいけん)する = to experience.",
     example:"A: いい経験(けいけん)になりました。\nB: 次(つぎ)に生(い)かしてくださいね。\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
     exampleSrc:"A: It was a good experience.\nB: Please use it for next time.\nA: That is exciting.\nB: Yes, I am already excited.",
     funFact:"経験 literally means 'passing through and verifying,' capturing the idea that true knowledge comes from lived experience. いい経験(けいけん)になりました (it became a good experience) is a positive reframing used even after failures. Japanese culture values 経験(けいけん) as the teacher that textbooks cannot replace."},

    {type:"teach", trg:"目的(もくてき)", src:"purpose / goal / objective", pos:"noun", gender:null,
     note:"Kanji: 目的. もく (eye) + てき (target).\n目的(もくてき)を達成(たっせい)する = to achieve a goal.",
     example:"A: 旅行(りょこう)の目的(もくてき)は何(なん)ですか？\nB: 日本(にほん)の文化(ぶんか)を体験(たいけん)することです。\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
     exampleSrc:"A: What is the purpose of your trip?\nB: To experience Japanese culture.\nA: That is a nice memory.\nB: Yes, I will never forget it.",
     funFact:"目的 combines '目(め)' (eye) and '的(てき)' (target), suggesting aiming your gaze at a goal. It is more specific than 目標(もくひょう) (general goal/target). 目的(もくてき) refers to the ultimate purpose or reason: why are you doing this? Japanese immigration forms ask 入国(にゅうこく)の目的(もくてき) (purpose of entry), a question every traveler encounters."},

    {type:"teach", trg:"価値(かち)", src:"value / worth", pos:"noun", gender:null,
     note:"Kanji: 価値. か (price/value) + ち (value/worth).\n価値(かち)がある = to have value.",
     example:"A: この経験(けいけん)には価値(かち)があります。\nB: そうですね。お金(かね)で買(か)えないものです。\nA: どうでしたか？\nB: とても良(よ)かったです。",
     exampleSrc:"A: This experience has value.\nB: That is right. It is something money cannot buy.\nA: How was it?\nB: It was very good.",
     funFact:"価値 deals with both monetary and intrinsic worth. 価値観(かちかん) (values/worldview) is a crucial word for discussing different perspectives. Japanese society is experiencing a 価値観(かちかん)の変化(へんか) (change in values) as younger generations prioritize work-life balance over traditional corporate loyalty."},

    {type:"fb", s:"頑張(がんば)れば{1}は高(たか)いですよ。\n(If you try hard, the possibility is high.)", a:"可能性(かのうせい)", opts:["可能性(かのうせい)","責任(せきにん)","目的(もくてき)","努力(どりょく)"], sSrc:"If you try hard, the possibility is high.",
     hint:"The abstract noun for 'possibility' or 'likelihood,' using the suffix 性(せい) (nature/quality)."},

    {type:"teach", trg:"影響(えいきょう)", src:"influence / impact / effect", pos:"noun", gender:null,
     note:"Kanji: 影響. えい (shadow) + きょう (echo/resound).\n影響(えいきょう)を与(あた)える = to give influence.",
     example:"A: テクノロジーが生活(せいかつ)に影響(えいきょう)を与(あた)えています。\nB: いい影響(えいきょう)も悪(わる)い影響(えいきょう)もありますね。\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
     exampleSrc:"A: Technology is having an impact on daily life.\nB: There are both good and bad impacts.\nA: When was it?\nB: It was last summer.",
     funFact:"影響 beautifully combines 影(かげ) (shadow) and 響(ひびき) (echo), suggesting influence that spreads like shadows and echoes. It is one of the most-used nouns in news and academic Japanese. 影響(えいきょう)を受(う)ける (to receive influence) and 影響(えいきょう)を与(あた)える (to give influence) are essential collocations."},

    {type:"teach", trg:"達成(たっせい)する", src:"to achieve / to accomplish", pos:"verb", gender:null,
     note:"する-verb. 達成(たっせい) = achievement/accomplishment.\n目標(もくひょう)を達成(たっせい)する = achieve a goal.",
     example:"A: 目標(もくひょう)を達成(たっせい)しました！\nB: おめでとうございます！努力(どりょく)の結果(けっか)ですね。\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
     exampleSrc:"A: I achieved my goal!\nB: Congratulations! It is the result of effort.\nA: That is nice.\nB: Yes, it was very fun.",
     funFact:"達成 combines 達(たつ) (reach/achieve) and 成(なり) (complete/become). Goal achievement (目標達成(もくひょうたっせい)) is celebrated in Japanese organizations with ceremonies and recognition. The phrase 達成感(たっせいかん) (tasseikan, sense of achievement) describes the deeply satisfying feeling of completing something difficult."},

    {type:"mc", q:"目的(もくてき) means:", opts:["Method","Purpose/objective","Result","Problem"], ans:"Purpose/objective",
     hint:"This word combines '目(め)' (eye) and '的(てき)' (target), meaning what you are aiming at or why you are doing something."},

    {type:"tip", title:"Abstract Nouns for Discussion",
     text:"Values and qualities:\n自由(じゆう) = freedom\n責任(せきにん) = responsibility\n価値(かち) = value/worth\n\nAbilities and likelihood:\n可能性(かのうせい) = possibility\n努力(どりょく) = effort\n経験(けいけん) = experience\n\nGoals and impact:\n目的(もくてき) = purpose\n達成(たっせい)する = to achieve\n影響(えいきょう) = influence/impact\n\nThese nouns combine naturally with nominalization:\n努力(どりょく)することが大事(だいじ) = making effort is important.\n経験(けいけん)の価値(かち)がある = it has the value of experience.",
     deepDive:{title:"Abstract Thinking in Japanese",
      text:"B1 is where Japanese becomes truly expressive. Abstract nouns let you discuss:\n\n1. Values: 自由(じゆう)と責任(せきにん)のバランス (the balance of freedom and responsibility).\n2. Possibilities: 可能性(かのうせい)を広(ひろ)げる (to expand possibilities).\n3. Impact: 影響(えいきょう)を考(かんが)える (to consider the impact).\n\nThese nouns often form compound expressions:\n可能性(かのうせい)が高(たか)い/低(ひく)い (high/low possibility)\n責任(せきにん)が重(おも)い (heavy responsibility)\n努力(どりょく)が実(みの)る (effort bears fruit)\n\nMastering these abstract nouns is what separates intermediate learners from advanced ones."}},

    {type:"match", pairs:[{trg:"自由(じゆう)",src:"freedom"},{trg:"責任(せきにん)",src:"responsibility"},{trg:"可能性(かのうせい)",src:"possibility"},{trg:"努力(どりょく)",src:"effort"}]},

    {type:"fb", s:"目標(もくひょう)を{1}しました！\n(I achieved my goal!)", a:"達成(たっせい)", opts:["達成(たっせい)","解決(かいけつ)","経験(けいけん)","努力(どりょく)"], sSrc:"I achieved my goal!",
     hint:"The する-verb meaning to accomplish or achieve, combining '達(たつ)' (reach) + '成(なり)' (complete)."},

    {type:"match", pairs:[{trg:"経験(けいけん)",src:"experience"},{trg:"目的(もくてき)",src:"purpose"},{trg:"価値(かち)",src:"value/worth"},{trg:"影響(えいきょう)",src:"influence"}]},

    {type:"mc", q:"努力(どりょく)は裏切(うらぎ)らない is a popular saying meaning:", opts:["Only talent matters","Effort is useless","Effort does not betray (hard work always pays off)","Effort is betrayal"], ans:"Effort does not betray (hard work always pays off)",
     hint:"This beloved motivational phrase reflects Japan's cultural emphasis on e... over natural talent."},
  ]
};
export default BATCH2_L_1;
