// Batch 7 – Unit 16 (B1.1 Plans & Intentions): Future Plans & Life Events
const BATCH7_L1 = {
  id:"jav2_u16l_b7_1", title:"じんせいのけいかく", icon:"📋", xp:15, board:true,
  steps:[
    {type:"intro", title:"じんせいのけいかく",
     desc:"Learn vocabulary for major life events and future plans. From education to marriage, these words describe the milestones and decisions that shape Japanese lives.",
     goals:["Discuss education and career plans","Describe major life events","Express future intentions and goals"]},

    {type:"teach", trg:"しんがく", src:"advancing to higher education", pos:"noun", gender:null,
     note:"しんがくする = to proceed to the next level of education.\nしんがくりつ = advancement rate.",
     example:"A: だいがくにしんがくしますか？\nB: はい、こうがくぶにはいりたいです。\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
     exampleSrc:"A: Will you advance to university?\nB: Yes, I want to enter the engineering department.\nA: That is exciting.\nB: Yes, I am already excited.",
     funFact:"Japan's university advancement rate (しんがくりつ) is about 55%. The entrance exam system (受験, じゅけん) dominates teenage life. Students attend cram schools (塾, じゅく) and study intensely for years. University entrance determines career trajectory in Japanese society."},

    {type:"teach", trg:"しゅうしょく", src:"getting a job / employment", pos:"noun", gender:null,
     note:"しゅうしょくする = to find employment.\nしゅうしょくかつどう (しゅうかつ) = job hunting.",
     example:"A: しゅうしょくかつどうはどうですか？\nB: まだないていがでません。\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
     exampleSrc:"A: How is your job hunting going?\nB: I have not received an offer yet.\nA: That is a nice memory.\nB: Yes, I will never forget it.",
     funFact:"しゅうかつ (job hunting) is a uniquely structured Japanese ritual. All students in the same graduation year hunt simultaneously. They wear identical black suits (リクルートスーツ). Companies hire en masse in April. This synchronized system is slowly changing but remains dominant."},

    {type:"teach", trg:"けっこん", src:"marriage", pos:"noun", gender:null,
     note:"けっこんする = to get married.\nけっこんしき = wedding ceremony.",
     example:"A: いつけっこんしましたか？\nB: さんねんまえにけっこんしました。\nA: どうでしたか？\nB: とても良(よ)かったです。",
     exampleSrc:"A: When did you get married?\nB: I got married three years ago.\nA: How was it?\nB: It was very good.",
     funFact:"Japan's marriage rate is declining sharply. Many young people choose 独身 (どくしん, single life). Japanese weddings can be Western-style (church, white dress) or Shinto-style (shrine, kimono), or both at the same ceremony. Average wedding cost: 3.5 million yen."},

    {type:"teach", trg:"しゅっさん", src:"childbirth / giving birth", pos:"noun", gender:null,
     note:"しゅっさんする = to give birth.\nしゅっさんよてい = expected due date.",
     example:"A: しゅっさんよていはいつですか？\nB: らいげつです。たのしみです。\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
     exampleSrc:"A: When is the due date?\nB: Next month. I am looking forward to it.\nA: When was it?\nB: It was last summer.",
     funFact:"Japan's birthrate (出生率, しゅっしょうりつ) is among the world's lowest at about 1.2 children per woman. The government offers しゅっさんいくじいちじきん (birth support money) and expanded parental leave. Despite this, structural issues like long work hours and childcare shortages persist."},

    {type:"teach", trg:"たいしょく", src:"retirement / resignation", pos:"noun", gender:null,
     note:"たいしょくする = to retire/resign.\nていねんたいしょく = mandatory retirement.",
     example:"A: おとうさんはたいしょくしましたか？\nB: はい、きょねんていねんたいしょくしました。\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
     exampleSrc:"A: Has your father retired?\nB: Yes, he had mandatory retirement last year.\nA: That is nice.\nB: Yes, it was very fun.",
     funFact:"Japan's mandatory retirement age (定年, ていねん) is typically 60-65. Many retirees continue working part-time (再雇用, さいこよう). With Japan's aging population, raising the retirement age is debated. Many Japanese define themselves by their work, making たいしょく an emotional life event."},

    {type:"teach", trg:"ひっこし", src:"moving (residence)", pos:"noun", gender:null,
     note:"ひっこしする = to move (homes).\nひっこしぎょうしゃ = moving company.",
     example:"A: らいげつひっこしします。\nB: あたらしいいえはどこですか？\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
     exampleSrc:"A: I am moving next month.\nB: Where is the new house?\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
     funFact:"Japanese moving (ひっこし) companies are renowned for their meticulous service. Movers wear white gloves, wrap everything in specialized materials, and reassemble furniture. The April moving season (people start new jobs) is extremely busy and expensive. Spring is ひっこしラッシュ (moving rush)."},

    {type:"teach", trg:"ゆめ", src:"dream / aspiration", pos:"noun", gender:null,
     note:"ゆめをかなえる = to fulfill a dream.\nしょうらいのゆめ = future dream/aspiration.",
     example:"A: しょうらいのゆめはなんですか？\nB: いしゃになることです。\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
     exampleSrc:"A: What is your future dream?\nB: To become a doctor.\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
     funFact:"しょうらいのゆめ (future dream) is one of the first essays Japanese children write in school. Common answers: プロやきゅうせんしゅ (pro baseball player), ケーキや (cake shop owner), ユーチューバー (YouTuber, recently #1 for boys). The question 'what is your dream?' is standard at school."},

    {type:"teach", trg:"もくひょう", src:"goal / target / objective", pos:"noun", gender:null,
     note:"もくひょうをたてる = to set a goal.\nもくひょうたっせい = achieving a goal.",
     example:"A: ことしのもくひょうはなんですか？\nB: にほんごのうりょくしけんN2にごうかくすることです。\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
     exampleSrc:"A: What is your goal for this year?\nB: To pass the JLPT N2.\nA: How long did it take?\nB: About two hours.",
     funFact:"もくひょう (目標) combines 目 (eye) and 標 (mark/sign). Your goal is what you set your eyes on. Japanese companies set もくひょう at every level: individual, team, and company. New Year もくひょう (New Year resolutions) are a popular January tradition."},

    {type:"teach", trg:"しっぱい", src:"failure", pos:"noun", gender:null,
     note:"しっぱいする = to fail.\nしっぱいからまなぶ = to learn from failure.",
     example:"A: しけんにしっぱいしました。\nB: だいじょうぶ。つぎはがんばりましょう。\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
     exampleSrc:"A: I failed the exam.\nB: It is okay. Let us do our best next time.\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
     funFact:"しっぱい (失敗) is treated differently in Japan. While failure is feared in academic/career contexts, the proverb 七転び八起き (fall seven times, rise eight) values resilience. Edison's quote about learning from 10,000 failures is often quoted. Modern startups are slowly changing Japan's risk-averse culture."},

    {type:"teach", trg:"せいこう", src:"success", pos:"noun", gender:null,
     note:"せいこうする = to succeed.\nせいこうのひけつ = secret to success.",
     example:"A: プロジェクトはせいこうしました。\nB: おめでとうございます！\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
     exampleSrc:"A: The project succeeded.\nB: Congratulations!\nA: Do you recommend it?\nB: Yes, please try it.",
     funFact:"せいこう (成功) combines 成 (achieve) and 功 (merit/achievement). Japanese success stories often emphasize 努力 (どりょく, effort) over talent. The idea that success comes from persistent hard work (がんばる) rather than natural ability is deeply embedded in Japanese educational philosophy."},

    {type:"teach", trg:"ちょうせん", src:"challenge / attempt", pos:"noun", gender:null,
     note:"ちょうせんする = to challenge/attempt.\nあたらしいことにちょうせんする = to try something new.",
     example:"A: マラソンにちょうせんしました。\nB: すごいですね！かんそうできましたか？\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
     exampleSrc:"A: I attempted a marathon.\nB: Amazing! Did you finish?\nA: Shall we go together?\nB: That sounds good. Let's go.",
     funFact:"ちょうせん (挑戦) has become a motivational buzzword. TV shows feature ちょうせん segments. Companies encourage 新しいことに挑戦 (trying new things). The word carries positive energy: attempting something difficult is admirable regardless of outcome. ちょうせんしゃ (challenger) is always a compliment."},

    {type:"teach", trg:"こうかい", src:"regret", pos:"noun", gender:null,
     note:"こうかいする = to regret.\nこうかいしていません = I have no regrets.",
     example:"A: にほんにきてこうかいしていますか？\nB: ぜんぜんこうかいしていません。\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
     exampleSrc:"A: Do you regret coming to Japan?\nB: I have no regrets at all.\nA: Where do you recommend?\nB: I recommend Kyoto.",
     funFact:"こうかい (後悔) combines 後 (after) and 悔 (regret/remorse). The proverb あとのまつり (after the festival) means 'too late to do anything,' similar to English 'crying over spilt milk.' Japanese career culture makes job changes risky, creating こうかい anxiety about life decisions."},

    {type:"teach", trg:"けいけん", src:"experience", pos:"noun", gender:null,
     note:"けいけんする = to experience.\nけいけんしゃ = experienced person.",
     example:"A: いいけいけんになりました。\nB: そうですね。けいけんはたからです。\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
     exampleSrc:"A: It was a good experience.\nB: Indeed. Experience is a treasure.\nA: What was the best part?\nB: The food was the most delicious.",
     funFact:"けいけん (経験) is valued above credentials in many Japanese contexts. The phrase いいけいけんになりました (it became a good experience) is used even for difficult situations, reframing hardship as growth. Job listings often say 経験者優遇 (experienced candidates preferred)."},

    // Quiz steps
    {type:"mc", q:"しゅうかつ describes:",
     opts:["The organized job hunting process for graduates","A type of martial art","A cooking technique","A cleaning ritual"],
     ans:"The organized job hunting process for graduates",
     hint:"All graduating students simultaneously wear black suits and interview with companies."},

    {type:"match", pairs:[
      {trg:"しんがく", src:"advancing to higher education"},
      {trg:"しゅうしょく", src:"getting a job"},
      {trg:"けっこん", src:"marriage"},
      {trg:"たいしょく", src:"retirement"},
      {trg:"ひっこし", src:"moving (residence)"}
    ]},

    {type:"fb", s:"しょうらいの{1}はいしゃになることです。",
     a:["ゆめ"],
     opts:["ゆめ","もくひょう","けいけん","ちょうせん"],
     hint:"This word means 'dream' or 'aspiration.' Children write about this in school essays.",
     sSrc:"My future {1} is to become a doctor."},

    {type:"mc", q:"七転び八起き means:",
     opts:["Fall seven times, rise eight (resilience)","Seven days of rest","Lucky number seven","Seven failures end success"],
     ans:"Fall seven times, rise eight (resilience)",
     hint:"This proverb values getting back up after しっぱい (failure), one more time than you fell."},

    {type:"fb", s:"プロジェクトは{1}しました。おめでとう！",
     a:["せいこう"],
     opts:["せいこう","しっぱい","こうかい","ちょうせん"],
     hint:"The project went well. This noun means 'success.'",
     sSrc:"The project {1}. Congratulations!"},

    {type:"mc", q:"Japan's birthrate is declining because of:",
     opts:["Long work hours and childcare shortages","Government restrictions","Preference for large families","Religious reasons"],
     ans:"Long work hours and childcare shortages",
     hint:"Structural issues in w... culture and social support systems contribute to low しゅっさん rates."},

    {type:"match", pairs:[
      {trg:"ゆめ", src:"dream"},
      {trg:"もくひょう", src:"goal"},
      {trg:"しっぱい", src:"failure"},
      {trg:"せいこう", src:"success"},
      {trg:"ちょうせん", src:"challenge"}
    ]},

    {type:"fb", s:"いいことも、わるいことも、すべて{1}です。",
     a:["けいけん"],
     opts:["けいけん","こうかい","しっぱい","もくひょう"],
     hint:"Good and bad events alike are all valuable. This noun means 'experience.'",
     sSrc:"Good things and bad things are all {1}."}
  ]
};
export default BATCH7_L1;
