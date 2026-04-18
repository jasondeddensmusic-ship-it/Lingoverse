// Batch 7 – Unit 16 (B1.1 Plans & Intentions): Future Plans & Life Events
const BATCH7_L1 = {
  id:"jav2_u16l_b7_1", title:"人生(じんせい)の計画(けいかく)", icon:"📋", xp:15, board:true,
  steps:[
    {type:"intro", title:"人生(じんせい)の計画(けいかく)",
     desc:"Learn vocabulary for major life events and future plans. From education to marriage, these words describe the milestones and decisions that shape Japanese lives.",
     goals:["Discuss education and career plans","Describe major life events","Express future intentions and goals"]},

    {type:"teach", trg:"進学(しんがく)", src:"advancing to higher education", pos:"noun", gender:null,
     note:"進学(しんがく)する = to proceed to the next level of education.\n進学率(しんがくりつ) = advancement rate.",
     example:"A: 大学(だいがく)に進学(しんがく)しますか？\nB: はい、工学部(こうがくぶ)に入(はい)りたいです。\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
     exampleSrc:"A: Will you advance to university?\nB: Yes, I want to enter the engineering department.\nA: That is exciting.\nB: Yes, I am already excited.",
     funFact:"Japan's university advancement rate (進学率(しんがくりつ)) is about 55%. The entrance exam system (受験(じゅけん)) dominates teenage life. Students attend cram schools (塾(じゅく)) and study intensely for years. University entrance determines career trajectory in Japanese society."},

    {type:"teach", trg:"就職(しゅうしょく)", src:"getting a job / employment", pos:"noun", gender:null,
     note:"就職(しゅうしょく)する = to find employment.\n就職活動(しゅうしょくかつどう) (就活(しゅうかつ)) = job hunting.",
     example:"A: 就職活動(しゅうしょくかつどう)はどうですか？\nB: まだ内定(ないてい)が出(で)ません。\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
     exampleSrc:"A: How is your job hunting going?\nB: I have not received an offer yet.\nA: That is a nice memory.\nB: Yes, I will never forget it.",
     funFact:"就活(しゅうかつ) (job hunting) is a uniquely structured Japanese ritual. All students in the same graduation year hunt simultaneously. They wear identical black suits (リクルートスーツ). Companies hire en masse in April. This synchronized system is slowly changing but remains dominant."},

    {type:"teach", trg:"結婚(けっこん)", src:"marriage", pos:"noun", gender:null,
     note:"結婚(けっこん)する = to get married.\n結婚式(けっこんしき) = wedding ceremony.",
     example:"A: いつ結婚(けっこん)しましたか？\nB: 三年(さんねん)前(まえ)に結婚(けっこん)しました。\nA: どうでしたか？\nB: とても良(よ)かったです。",
     exampleSrc:"A: When did you get married?\nB: I got married three years ago.\nA: How was it?\nB: It was very good.",
     funFact:"Japan's marriage rate is declining sharply. Many young people choose 独身(どくしん) (single life). Japanese weddings can be Western-style (church, white dress) or Shinto-style (shrine, kimono), or both at the same ceremony. Average wedding cost: 3.5 million yen."},

    {type:"teach", trg:"出産(しゅっさん)", src:"childbirth / giving birth", pos:"noun", gender:null,
     note:"出産(しゅっさん)する = to give birth.\n出産予定(しゅっさんよてい) = expected due date.",
     example:"A: 出産予定(しゅっさんよてい)はいつですか？\nB: 来月(らいげつ)です。楽(たの)しみです。\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
     exampleSrc:"A: When is the due date?\nB: Next month. I am looking forward to it.\nA: When was it?\nB: It was last summer.",
     funFact:"Japan's birthrate (出生率(しゅっしょうりつ)) is among the world's lowest at about 1.2 children per woman. The government offers 出産(しゅっさん)育児(いくじ)一時金(いちじきん) (birth support money) and expanded parental leave. Despite this, structural issues like long work hours and childcare shortages persist."},

    {type:"teach", trg:"退職(たいしょく)", src:"retirement / resignation", pos:"noun", gender:null,
     note:"退職(たいしょく)する = to retire/resign.\n定年退職(ていねんたいしょく) = mandatory retirement.",
     example:"A: お父(とう)さんは退職(たいしょく)しましたか？\nB: はい、去年(きょねん)定年退職(ていねんたいしょく)しました。\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
     exampleSrc:"A: Has your father retired?\nB: Yes, he had mandatory retirement last year.\nA: That is nice.\nB: Yes, it was very fun.",
     funFact:"Japan's mandatory retirement age (定年(ていねん)) is typically 60-65. Many retirees continue working part-time (再雇用(さいこよう)). With Japan's aging population, raising the retirement age is debated. Many Japanese define themselves by their work, making 退職(たいしょく) an emotional life event."},

    {type:"teach", trg:"引(ひ)っ越(こ)し", src:"moving (residence)", pos:"noun", gender:null,
     note:"引(ひ)っ越(こ)しする = to move (homes).\n引(ひ)っ越(こ)し業者(ぎょうしゃ) = moving company.",
     example:"A: 来月(らいげつ)引(ひ)っ越(こ)しします。\nB: 新(あたら)しい家(いえ)はどこですか？\nA: そうですか。良(よ)かったですね。\nB: はい、いい経験(けいけん)でした。",
     exampleSrc:"A: I am moving next month.\nB: Where is the new house?\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
     funFact:"Japanese moving (引(ひ)っ越(こ)し) companies are renowned for their meticulous service. Movers wear white gloves, wrap everything in specialized materials, and reassemble furniture. The April moving season (people start new jobs) is extremely busy and expensive. Spring is 引(ひ)っ越(こ)しラッシュ (moving rush)."},

    {type:"teach", trg:"夢(ゆめ)", src:"dream / aspiration", pos:"noun", gender:null,
     note:"夢(ゆめ)をかなえる = to fulfill a dream.\n将来(しょうらい)の夢(ゆめ) = future dream/aspiration.",
     example:"A: 将来(しょうらい)の夢(ゆめ)は何(なに)ですか？\nB: 医者(いしゃ)になることです。\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
     exampleSrc:"A: What is your future dream?\nB: To become a doctor.\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
     funFact:"将来(しょうらい)の夢(ゆめ) (future dream) is one of the first essays Japanese children write in school. Common answers: プロ野球(やきゅう)選手(せんしゅ) (pro baseball player), ケーキ屋(や) (cake shop owner), ユーチューバー (YouTuber, recently #1 for boys). The question 'what is your dream?' is standard at school."},

    {type:"teach", trg:"目標(もくひょう)", src:"goal / target / objective", pos:"noun", gender:null,
     note:"目標(もくひょう)を立(た)てる = to set a goal.\n目標達成(もくひょうたっせい) = achieving a goal.",
     example:"A: 今年(ことし)の目標(もくひょう)は何(なに)ですか？\nB: 日本語能力試験(にほんごのうりょくしけん)N2に合格(ごうかく)することです。\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
     exampleSrc:"A: What is your goal for this year?\nB: To pass the JLPT N2.\nA: How long did it take?\nB: About two hours.",
     funFact:"目標(もくひょう) combines 目 (eye) and 標 (mark/sign). Your goal is what you set your eyes on. Japanese companies set 目標(もくひょう) at every level: individual, team, and company. New Year 目標(もくひょう) (New Year resolutions) are a popular January tradition."},

    {type:"teach", trg:"失敗(しっぱい)", src:"failure", pos:"noun", gender:null,
     note:"失敗(しっぱい)する = to fail.\n失敗(しっぱい)から学(まな)ぶ = to learn from failure.",
     example:"A: 試験(しけん)に失敗(しっぱい)しました。\nB: 大丈夫(だいじょうぶ)。次(つぎ)は頑張(がんば)りましょう。\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
     exampleSrc:"A: I failed the exam.\nB: It is okay. Let us do our best next time.\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
     funFact:"失敗(しっぱい) is treated differently in Japan. While failure is feared in academic/career contexts, the proverb 七転(ななころ)び八起(やお)き (fall seven times, rise eight) values resilience. Edison's quote about learning from 10,000 failures is often quoted. Modern startups are slowly changing Japan's risk-averse culture."},

    {type:"teach", trg:"成功(せいこう)", src:"success", pos:"noun", gender:null,
     note:"成功(せいこう)する = to succeed.\n成功(せいこう)のひけつ = secret to success.",
     example:"A: プロジェクトは成功(せいこう)しました。\nB: おめでとうございます！\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
     exampleSrc:"A: The project succeeded.\nB: Congratulations!\nA: Do you recommend it?\nB: Yes, please try it.",
     funFact:"成功(せいこう) combines 成 (achieve) and 功 (merit/achievement). Japanese success stories often emphasize 努力(どりょく) (effort) over talent. The idea that success comes from persistent hard work (頑張(がんば)る) rather than natural ability is deeply embedded in Japanese educational philosophy."},

    {type:"teach", trg:"挑戦(ちょうせん)", src:"challenge / attempt", pos:"noun", gender:null,
     note:"挑戦(ちょうせん)する = to challenge/attempt.\n新(あたら)しいことに挑戦(ちょうせん)する = to try something new.",
     example:"A: マラソンに挑戦(ちょうせん)しました。\nB: すごいですね！完走(かんそう)できましたか？\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
     exampleSrc:"A: I attempted a marathon.\nB: Amazing! Did you finish?\nA: Shall we go together?\nB: That sounds good. Let's go.",
     funFact:"挑戦(ちょうせん) has become a motivational buzzword. TV shows feature 挑戦(ちょうせん) segments. Companies encourage 新(あたら)しいことに挑戦(ちょうせん) (trying new things). The word carries positive energy: attempting something difficult is admirable regardless of outcome. 挑戦者(ちょうせんしゃ) (challenger) is always a compliment."},

    {type:"teach", trg:"後悔(こうかい)", src:"regret", pos:"noun", gender:null,
     note:"後悔(こうかい)する = to regret.\n後悔(こうかい)していません = I have no regrets.",
     example:"A: 日本(にほん)に来(き)て後悔(こうかい)していますか？\nB: 全然(ぜんぜん)後悔(こうかい)していません。\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
     exampleSrc:"A: Do you regret coming to Japan?\nB: I have no regrets at all.\nA: Where do you recommend?\nB: I recommend Kyoto.",
     funFact:"後悔(こうかい) combines 後 (after) and 悔 (regret/remorse). The proverb あとの祭(まつ)り (after the festival) means 'too late to do anything,' similar to English 'crying over spilt milk.' Japanese career culture makes job changes risky, creating 後悔(こうかい) anxiety about life decisions."},

    {type:"teach", trg:"経験(けいけん)", src:"experience", pos:"noun", gender:null,
     note:"経験(けいけん)する = to experience.\n経験者(けいけんしゃ) = experienced person.",
     example:"A: いい経験(けいけん)になりました。\nB: そうですね。経験(けいけん)は宝(たから)です。\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
     exampleSrc:"A: It was a good experience.\nB: Indeed. Experience is a treasure.\nA: What was the best part?\nB: The food was the most delicious.",
     funFact:"経験(けいけん) is valued above credentials in many Japanese contexts. The phrase いい経験(けいけん)になりました (it became a good experience) is used even for difficult situations, reframing hardship as growth. Job listings often say 経験者(けいけんしゃ)優遇(ゆうぐう) (experienced candidates preferred)."},

    // Quiz steps
    {type:"mc", q:"就活(しゅうかつ) describes:",
     opts:["The organized job hunting process for graduates","A type of martial art","A cooking technique","A cleaning ritual"],
     ans:"The organized job hunting process for graduates",
     hint:"All graduating students simultaneously wear black suits and interview with companies."},

    {type:"match", pairs:[
      {trg:"進学(しんがく)", src:"advancing to higher education"},
      {trg:"就職(しゅうしょく)", src:"getting a job"},
      {trg:"結婚(けっこん)", src:"marriage"},
      {trg:"退職(たいしょく)", src:"retirement"},
      {trg:"引(ひ)っ越(こ)し", src:"moving (residence)"}
    ]},

    {type:"fb", s:"将来(しょうらい)の{1}は医者(いしゃ)になることです。",
     a:["夢(ゆめ)"],
     opts:["夢(ゆめ)","目標(もくひょう)","経験(けいけん)","挑戦(ちょうせん)"],
     hint:"This word means 'dream' or 'aspiration.' Children write about this in school essays.",
     sSrc:"My future {1} is to become a doctor."},

    {type:"mc", q:"七転(ななころ)び八起(やお)き means:",
     opts:["Fall seven times, rise eight (resilience)","Seven days of rest","Lucky number seven","Seven failures end success"],
     ans:"Fall seven times, rise eight (resilience)",
     hint:"This proverb values getting back up after 失敗(しっぱい) (failure), one more time than you fell."},

    {type:"fb", s:"プロジェクトは{1}しました。おめでとう！",
     a:["成功(せいこう)"],
     opts:["成功(せいこう)","失敗(しっぱい)","後悔(こうかい)","挑戦(ちょうせん)"],
     hint:"The project went well. This noun means 'success.'",
     sSrc:"The project {1}. Congratulations!"},

    {type:"mc", q:"Japan's birthrate is declining because of:",
     opts:["Long work hours and childcare shortages","Government restrictions","Preference for large families","Religious reasons"],
     ans:"Long work hours and childcare shortages",
     hint:"Structural issues in w... culture and social support systems contribute to low 出産(しゅっさん) rates."},

    {type:"match", pairs:[
      {trg:"夢(ゆめ)", src:"dream"},
      {trg:"目標(もくひょう)", src:"goal"},
      {trg:"失敗(しっぱい)", src:"failure"},
      {trg:"成功(せいこう)", src:"success"},
      {trg:"挑戦(ちょうせん)", src:"challenge"}
    ]},

    {type:"fb", s:"いいことも、わるいことも、すべて{1}です。",
     a:["経験(けいけん)"],
     opts:["経験(けいけん)","後悔(こうかい)","失敗(しっぱい)","目標(もくひょう)"],
     hint:"Good and bad events alike are all valuable. This noun means 'experience.'",
     sSrc:"Good things and bad things are all {1}."}
  ,{type:"match",pairs:[{trg:"出産(しゅっさん)",src:"childbirth / giving birth"},{trg:"後悔(こうかい)",src:"regret"}]}]
};
export default BATCH7_L1;
