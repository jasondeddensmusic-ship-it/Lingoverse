// Batch 9 – Unit 16 (B1.1 Plans): Future Plans & Career
const BATCH9_L1 = {
  id:"jav2_u16l_b9_1", title:"しょうらい", icon:"🎯", xp:15, board:true,
  steps:[
    {type:"intro", title:"しょうらい",
     desc:"Learn vocabulary for discussing future plans, career goals, and aspirations. Essential for B1-level conversations about life direction.",
     goals:["Discuss career goals","Express future intentions","Talk about dreams and aspirations"]},

    {type:"teach", trg:"しょうらい", src:"future / in the future", pos:"noun", gender:null,
     note:"しょうらいのゆめ = future dream.\nしょうらいてき = in the long term.",
     example:"A: しょうらいなにになりたいですか？\nB: いしゃになりたいです。",
     exampleSrc:"A: What do you want to be in the future?\nB: I want to be a doctor.",
     funFact:"しょうらいのゆめ (future dream) is a classic essay topic from elementary school onward. Japanese children write about it every year. Popular answers include ケーキやさん, サッカーせんしゅ, and YouTuber (increasingly common). The question しょうらいなにになりたい is deeply personal in Japanese culture."},

    {type:"teach", trg:"もくひょう", src:"goal / target / objective", pos:"noun", gender:null,
     note:"もくひょうをたてる = to set a goal.\nもくひょうをたっせいする = to achieve a goal.",
     example:"A: ことしのもくひょうはなんですか？\nB: にほんごのN2にごうかくすることです。",
     exampleSrc:"A: What is your goal for this year?\nB: To pass JLPT N2.",
     funFact:"もくひょう (目標) culture is strong in Japanese education and business. New Year's Day, people set しんねんのもくひょう (New Year goals). Companies set quarterly もくひょう through MBO (Management by Objectives). Students write もくひょう on classroom displays for motivation."},

    {type:"teach", trg:"しゅうしょくする", src:"to get a job / to find employment", pos:"verb", gender:null,
     note:"しゅうしょくかつどう = job hunting (しゅうかつ for short).\nないてい = job offer.",
     example:"A: らいねんしゅうしょくします。\nB: しゅうかつ、がんばってね。",
     exampleSrc:"A: I will start working next year.\nB: Good luck with job hunting.",
     funFact:"Japanese しゅうかつ (就活, job hunting) is a unique system. University students in their third year simultaneously apply to multiple companies through a structured process. Everyone wears the same dark suit (リクルートスーツ). Companies make ないてい (informal offers) before graduation."},

    {type:"teach", trg:"てんしょくする", src:"to change jobs", pos:"verb", gender:null,
     note:"てんしょく = job change. てんしょくサイト = job search site.\nOnce taboo, now common.",
     example:"A: てんしょくをかんがえています。\nB: どんなしごとをさがしていますか？",
     exampleSrc:"A: I am considering changing jobs.\nB: What kind of work are you looking for?",
     funFact:"てんしょく (転職) was once stigmatized in Japan's しゅうしんこよう (lifetime employment) system. Workers were expected to stay at one company until retirement. Today, てんしょく is normalized, especially among younger generations. Sites like リクナビ and doda have made てんしょく easier."},

    {type:"teach", trg:"きぼう", src:"hope / wish / desire", pos:"noun", gender:null,
     note:"きぼうする = to hope/wish.\nきぼうにみちた = full of hope.",
     example:"A: ぼうえきのしごとがきぼうです。\nB: かいがいけいけんがやくにたちますね。",
     exampleSrc:"A: I hope for a job in international trade.\nB: Your overseas experience will be useful.",
     funFact:"きぼう (希望) combines 希 (rare/wish) and 望 (desire/look far). On job applications, きぼうしょく (desired position) and きぼうきんがく (desired salary) are standard fields. The word carries more weight than English 'hope,' closer to a sincere aspiration. きぼうのひかり means 'light of hope.'"},

    {type:"teach", trg:"けいけん", src:"experience", pos:"noun", gender:null,
     note:"けいけんをつむ = to accumulate experience.\nけいけんしゃ = experienced person.",
     example:"A: かいがいけいけんはありますか？\nB: にねんかんイギリスにいました。",
     exampleSrc:"A: Do you have overseas experience?\nB: I was in England for two years.",
     funFact:"けいけん (経験) is highly valued in Japanese hiring. りれきしょ (resume) and しょくむけいれきしょ (career history document) detail all けいけん. The phrase けいけんがものをいう means 'experience speaks for itself.' Japanese companies value けいけん over formal qualifications in many fields."},

    {type:"teach", trg:"かのうせい", src:"possibility / potential", pos:"noun", gender:null,
     note:"かのうせいがある = there is a possibility.\nかのうせいがたかい = highly likely.",
     example:"A: せいこうのかのうせいはありますか？\nB: じゅうぶんあるとおもいます。",
     exampleSrc:"A: Is there a possibility of success?\nB: I think there is plenty.",
     funFact:"かのうせい (可能性) is a key word in business and science. Japanese weather forecasts use こうすいかくりつ (precipitation probability) rather than かのうせい. In business meetings, かのうせいをさぐる (to explore possibilities) shows open-mindedness. こどものかのうせい (children's potential) is an education buzzword."},

    {type:"teach", trg:"チャレンジ", src:"challenge / attempt", pos:"noun", gender:null,
     note:"From English 'challenge.' Positive nuance in Japanese.\nチャレンジする = to take on a challenge.",
     example:"A: あたらしいことにチャレンジしたいです。\nB: すばらしいですね。",
     exampleSrc:"A: I want to challenge myself with something new.\nB: That is wonderful.",
     funFact:"チャレンジ in Japanese is almost always positive, meaning 'to attempt bravely.' Unlike English where 'challenge' can mean a problem, Japanese チャレンジ emphasizes courage and growth. The phrase チャレンジせいしん (spirit of challenge) is used in job interviews to show motivation."},

    {type:"mc", q:"What is しゅうかつ?", opts:["University job hunting season","A type of martial art","A cooking technique","A traditional ceremony"], ans:"University job hunting season",
     hint:"This abbreviation of しゅうしょくかつどう refers to the structured process by which Japanese students find their first career."},

    {type:"fb", s:"ことしの{1}はにほんごのN2にごうかくすることです。\n(My goal this year is to pass JLPT N2.)", a:"もくひょう", opts:["もくひょう","きぼう","かのうせい","ゆめ"], sSrc:"My goal this year is to pass JLPT N2.",
     hint:"This word means a specific target or objective you are working toward."},

    {type:"match", pairs:[
      {trg:"しょうらい", src:"future"},
      {trg:"もくひょう", src:"goal"},
      {trg:"けいけん", src:"experience"},
      {trg:"チャレンジ", src:"challenge"}
    ]},

    {type:"mc", q:"How has てんしょく (changing jobs) changed in Japan?", opts:["Once taboo under lifetime employment, now normalized","Always been common","Still considered shameful","Only for managers"], ans:"Once taboo under lifetime employment, now normalized",
     hint:"Japanese work culture is shifting from しゅうしんこよう (l... e...) to more career mobility."}
  ]
};
export default BATCH9_L1;
