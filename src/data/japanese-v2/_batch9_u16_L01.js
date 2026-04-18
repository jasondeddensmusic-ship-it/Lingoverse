// Batch 9 – Unit 16 (B1.1 Plans): Future Plans & Career
const BATCH9_L1 = {
  id:"jav2_u16l_b9_1", title:"将来(しょうらい)", icon:"🎯", xp:15, board:true,
  steps:[
    {type:"intro", title:"将来(しょうらい)",
     desc:"Learn vocabulary for discussing future plans, career goals, and aspirations. Essential for B1-level conversations about life direction.",
     goals:["Discuss career goals","Express future intentions","Talk about dreams and aspirations"]},

    {type:"teach", trg:"将来(しょうらい)", src:"future / in the future", pos:"noun", gender:null,
     note:"将来(しょうらい)の夢(ゆめ) = future dream.\n将来的(しょうらいてき) = in the long term.",
     example:"A: 将来(しょうらい)何(なに)になりたいですか？\nB: 医者(いしゃ)になりたいです。\nA: 私(わたし)も興味(きょうみ)があります。\nB: じゃあ、今度(こんど)一緒(いっしょ)にどうですか？",
     exampleSrc:"A: What do you want to be in the future?\nB: I want to be a doctor.\nA: I am also interested.\nB: Then, how about doing it together next time?",
     funFact:"将来(しょうらい)の夢(ゆめ) (future dream) is a classic essay topic from elementary school onward. Japanese children write about it every year. Popular answers include ケーキ屋(や)さん, サッカー選手(せんしゅ), and YouTuber (increasingly common). The question 将来(しょうらい)何(なに)になりたい is deeply personal in Japanese culture."},

    {type:"teach", trg:"目標(もくひょう)", src:"goal / target / objective", pos:"noun", gender:null,
     note:"目標(もくひょう)を立(た)てる = to set a goal.\n目標(もくひょう)を達成(たっせい)する = to achieve a goal.",
     example:"A: 今年(ことし)の目標(もくひょう)は何(なに)ですか？\nB: 日本語(にほんご)のN2に合格(ごうかく)することです。\nA: どんな感(かん)じでしたか？\nB: 想像(そうぞう)していたよりずっと良(よ)かったです。",
     exampleSrc:"A: What is your goal for this year?\nB: To pass JLPT N2.\nA: What was it like?\nB: It was much better than I imagined.",
     funFact:"目標(もくひょう) (目標) culture is strong in Japanese education and business. New Year's Day, people set 新年(しんねん)の目標(もくひょう) (New Year goals). Companies set quarterly 目標(もくひょう) through MBO (Management by Objectives). Students write 目標(もくひょう) on classroom displays for motivation."},

    {type:"teach", trg:"就職(しゅうしょく)する", src:"to get a job / to find employment", pos:"verb", gender:null,
     note:"就職(しゅうしょく)活動(かつどう) = job hunting (就活(しゅうかつ) for short).\n内定(ないてい) = job offer.",
     example:"A: 来年(らいねん)就職(しゅうしょく)します。\nB: 就活(しゅうかつ)、頑張(がんば)ってね。\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
     exampleSrc:"A: I will start working next year.\nB: Good luck with job hunting.\nA: What did you eat?\nB: I ate the local specialty.",
     funFact:"Japanese 就活(しゅうかつ) (就活, job hunting) is a unique system. University students in their third year simultaneously apply to multiple companies through a structured process. Everyone wears the same dark suit (リクルートスーツ). Companies make 内定(ないてい) (informal offers) before graduation."},

    {type:"teach", trg:"転職(てんしょく)する", src:"to change jobs", pos:"verb", gender:null,
     note:"転職(てんしょく) = job change. 転職(てんしょく)サイト = job search site.\nOnce taboo, now common.",
     example:"A: 転職(てんしょく)を考(かんが)えています。\nB: どんな仕事(しごと)を探(さが)していますか？\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
     exampleSrc:"A: I am considering changing jobs.\nB: What kind of work are you looking for?\nA: That is exciting.\nB: Yes, I am already excited.",
     funFact:"転職(てんしょく) (転職) was once stigmatized in Japan's 終身雇用(しゅうしんこよう) (lifetime employment) system. Workers were expected to stay at one company until retirement. Today, 転職(てんしょく) is normalized, especially among younger generations. Sites like リクナビ and doda have made 転職(てんしょく) easier."},

    {type:"teach", trg:"希望(きぼう)", src:"hope / wish / desire", pos:"noun", gender:null,
     note:"希望(きぼう)する = to hope/wish.\n希望(きぼう)に満(み)ちた = full of hope.",
     example:"A: 貿易(ぼうえき)の仕事(しごと)が希望(きぼう)です。\nB: 海外(かいがい)経験(けいけん)が役(やく)に立(た)ちますね。\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
     exampleSrc:"A: I hope for a job in international trade.\nB: Your overseas experience will be useful.\nA: That is a nice memory.\nB: Yes, I will never forget it.",
     funFact:"希望(きぼう) (希望) combines 希 (rare/wish) and 望 (desire/look far). On job applications, 希望職(きぼうしょく) (desired position) and 希望金額(きぼうきんがく) (desired salary) are standard fields. The word carries more weight than English 'hope,' closer to a sincere aspiration. 希望(きぼう)の光(ひかり) means 'light of hope.'"},

    {type:"teach", trg:"経験(けいけん)", src:"experience", pos:"noun", gender:null,
     note:"経験(けいけん)を積(つ)む = to accumulate experience.\n経験者(けいけんしゃ) = experienced person.",
     example:"A: 海外(かいがい)経験(けいけん)はありますか？\nB: 二年間(にねんかん)イギリスにいました。\nA: どうでしたか？\nB: とても良(よ)かったです。",
     exampleSrc:"A: Do you have overseas experience?\nB: I was in England for two years.\nA: How was it?\nB: It was very good.",
     funFact:"経験(けいけん) (経験) is highly valued in Japanese hiring. 履歴書(りれきしょ) (resume) and 職務経歴書(しょくむけいれきしょ) (career history document) detail all 経験(けいけん). The phrase 経験(けいけん)がものをいう means 'experience speaks for itself.' Japanese companies value 経験(けいけん) over formal qualifications in many fields."},

    {type:"teach", trg:"可能性(かのうせい)", src:"possibility / potential", pos:"noun", gender:null,
     note:"可能性(かのうせい)がある = there is a possibility.\n可能性(かのうせい)が高(たか)い = highly likely.",
     example:"A: 成功(せいこう)の可能性(かのうせい)はありますか？\nB: 十分(じゅうぶん)あると思(おも)います。\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
     exampleSrc:"A: Is there a possibility of success?\nB: I think there is plenty.\nA: When was it?\nB: It was last summer.",
     funFact:"可能性(かのうせい) (可能性) is a key word in business and science. Japanese weather forecasts use 降水確率(こうすいかくりつ) (precipitation probability) rather than 可能性(かのうせい). In business meetings, 可能性(かのうせい)を探(さぐ)る (to explore possibilities) shows open-mindedness. 子(こ)どもの可能性(かのうせい) (children's potential) is an education buzzword."},

    {type:"teach", trg:"チャレンジ", src:"challenge / attempt", pos:"noun", gender:null,
     note:"From English 'challenge.' Positive nuance in Japanese.\nチャレンジする = to take on a challenge.",
     example:"A: 新(あたら)しいことにチャレンジしたいです。\nB: すばらしいですね。\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
     exampleSrc:"A: I want to challenge myself with something new.\nB: That is wonderful.\nA: That is nice.\nB: Yes, it was very fun.",
     funFact:"チャレンジ in Japanese is almost always positive, meaning 'to attempt bravely.' Unlike English where 'challenge' can mean a problem, Japanese チャレンジ emphasizes courage and growth. The phrase チャレンジ精神(せいしん) (spirit of challenge) is used in job interviews to show motivation."},

    {type:"mc", q:"What is しゅうかつ?", opts:["University job hunting season","A type of martial art","A cooking technique","A traditional ceremony"], ans:"University job hunting season",
     hint:"This abbreviation of しゅうしょくかつどう refers to the structured process by which Japanese students find their first career."},

    {type:"fb", s:"今年(ことし)の{1}は日本語(にほんご)のN2に合格(ごうかく)することです。\n(My goal this year is to pass JLPT N2.)", a:"目標(もくひょう)", opts:["目標(もくひょう)","希望(きぼう)","可能性(かのうせい)","夢(ゆめ)"], sSrc:"My goal this year is to pass JLPT N2.",
     hint:"This word means a specific target or objective you are working toward."},

    {type:"match", pairs:[
      {trg:"将来(しょうらい)", src:"future"},
      {trg:"目標(もくひょう)", src:"goal"},
      {trg:"経験(けいけん)", src:"experience"},
      {trg:"チャレンジ", src:"challenge"}
    ]},

    {type:"mc", q:"How has てんしょく (changing jobs) changed in Japan?", opts:["Once taboo under lifetime employment, now normalized","Always been common","Still considered shameful","Only for managers"], ans:"Once taboo under lifetime employment, now normalized",
     hint:"Japanese work culture is shifting from しゅうしんこよう (l... e...) to more career mobility."}
  ,{type:"match",pairs:[{trg:"就職(しゅうしょく)する",src:"to get a job / to find employment"},{trg:"転職(てんしょく)する",src:"to change jobs"},{trg:"希望(きぼう)",src:"hope / wish / desire"},{trg:"可能性(かのうせい)",src:"possibility / potential"}]}]
};
export default BATCH9_L1;
