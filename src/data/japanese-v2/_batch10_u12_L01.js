// Batch 10 – Unit 12 (A2.2 Ability): Sports & Physical Activities
const BATCH10_L1 = {
  id:"jav2_u12l_b10_1", title:"スポーツ", icon:"⚽", xp:15, board:true,
  steps:[
    {type:"intro", title:"スポーツ",
     desc:"Learn vocabulary for popular sports and physical activities in Japan. Sports play a huge role in Japanese school life and culture.",
     goals:["Name popular sports in Japanese","Discuss sports activities and abilities","Understand the role of sports in Japanese culture"]},

    {type:"teach", trg:"野球(やきゅう)", src:"baseball", pos:"noun", gender:null,
     note:"Japan's most popular sport. 野球部(やきゅうぶ) = baseball club.\nプロ野球(やきゅう) = professional baseball.",
     example:"A: 野球(やきゅう)が好(す)きですか？\nB: はい、よく見(み)ます。",
     exampleSrc:"A: Do you like baseball?\nB: Yes, I watch it often.",
     funFact:"野球(やきゅう) literally means 'field ball.' Baseball was introduced to Japan in 1872 and became the national sport. 甲子園(こうしえん) (Koshien) high school baseball tournament captivates the nation every summer. NPB (Nippon Professional Baseball) has 12 teams. Players like Ohtani Shohei are national heroes."},

    {type:"teach", trg:"サッカー", src:"soccer / football", pos:"noun", gender:null,
     note:"From English 'soccer.' Jリーグ = J-League.\nサッカーをする = to play soccer.",
     example:"A: 子(こ)どものころサッカーをしていました。\nB: ポジションはどこでしたか？",
     exampleSrc:"A: I played soccer as a child.\nB: What position did you play?",
     funFact:"サッカー surged in popularity after Japan co-hosted the 2002 ワールドカップ (World Cup). The Jリーグ started in 1993. Japanese サッカー emphasizes teamwork and technical skill. たくさんの Japanese players now compete in European leagues. Women's サッカー (なでしこジャパン) won the 2011 World Cup."},

    {type:"teach", trg:"柔道(じゅうどう)", src:"judo", pos:"noun", gender:null,
     note:"Japanese martial art. 柔道家(じゅうどうか) = judoka.\nFrom 柔(やわ)らかい道(みち) (gentle way).",
     example:"A: 柔道(じゅうどう)を習(なら)っています。\nB: 何段(なんだん)ですか？",
     exampleSrc:"A: I am learning judo.\nB: What rank are you?",
     funFact:"柔道(じゅうどう) was created by 嘉納治五郎(かのうじごろう) in 1882 and became an Olympic sport in 1964 (Tokyo Olympics). The name means 'gentle way.' Japan has won more Olympic 柔道(じゅうどう) gold medals than any other country. The black belt system (段(だん)) originated in 柔道(じゅうどう)."},

    {type:"teach", trg:"相撲(すもう)", src:"sumo wrestling", pos:"noun", gender:null,
     note:"Japan's national sport. 力士(りきし) = sumo wrestler.\n本場所(ほんばしょ) = grand tournament.",
     example:"A: 相撲(すもう)を見(み)たことがありますか？\nB: テレビで見(み)ました。",
     exampleSrc:"A: Have you seen sumo?\nB: I watched it on TV.",
     funFact:"相撲(すもう) has over 1,500 years of history and Shinto religious roots. Six 本場所(ほんばしょ) (grand tournaments) are held yearly. 力士(りきし) (wrestlers) live in 部屋(へや) (stables) with strict rules. The yokozuna (grand champion) rank is the highest honor. ちゃんこ鍋(なべ) is the traditional sumo diet."},

    {type:"teach", trg:"マラソン", src:"marathon", pos:"noun", gender:null,
     note:"From English 'marathon.' Very popular in Japan.\nマラソン大会(たいかい) = marathon race.",
     example:"A: マラソンを走(はし)ったことがありますか？\nB: ハーフマラソンならあります。",
     exampleSrc:"A: Have you run a marathon?\nB: I have run a half marathon.",
     funFact:"Japanese マラソン culture is enormous. The Tokyo Marathon attracts 300,000+ applicants for 38,000 spots. New Year's 駅伝(えきでん) (relay marathon) is broadcast nationally. Japanese runners like Kipchoge-rival Suzuki Kengo have achieved world-class times. Running is the most popular exercise in Japan."},

    {type:"teach", trg:"剣道(けんどう)", src:"kendo (Japanese fencing)", pos:"noun", gender:null,
     note:"剣(けん) = sword, 道(どう) = way.\n竹刀(しない) = bamboo sword. 防具(ぼうぐ) = protective gear.",
     example:"A: 剣道(けんどう)はきつそうですね。\nB: でも楽(たの)しいですよ。",
     exampleSrc:"A: Kendo looks tough.\nB: But it is fun.",
     funFact:"剣道(けんどう) means 'the way of the sword.' It is widely practiced in Japanese schools as a PE option alongside 柔道(じゅうどう). Practitioners wear 防具(ぼうぐ) (armor) and use 竹刀(しない) (bamboo swords). The shout (気合(きあい)) 'メン! コテ! ドウ!' names the three target areas."},

    {type:"teach", trg:"体操(たいそう)", src:"gymnastics / exercise", pos:"noun", gender:null,
     note:"ラジオ体操(たいそう) = radio calisthenics.\n体操(たいそう)をする = to do exercise.",
     example:"A: 毎朝(まいあさ)ラジオ体操(たいそう)をしています。\nB: 健康(けんこう)にいいですね。",
     exampleSrc:"A: I do radio calisthenics every morning.\nB: That is good for health.",
     funFact:"ラジオ体操(たいそう) (radio calisthenics) has been broadcast on NHK since 1928. Almost every Japanese person knows the routine. During 夏休(なつやす)み, children gather at parks early morning for ラジオ体操(たいそう) and get stamps on attendance cards. Companies also do it before work shifts."},

    {type:"teach", trg:"試合(しあい)", src:"match / game / competition", pos:"noun", gender:null,
     note:"試合(しあい)に勝(か)つ = to win a match.\n試合(しあい)に負(ま)ける = to lose a match.",
     example:"A: 今日(きょう)の試合(しあい)は勝(か)ちましたか？\nB: 残念(ざんねん)ながら、負(ま)けました。",
     exampleSrc:"A: Did you win today's match?\nB: Unfortunately, we lost.",
     funFact:"試合(しあい) literally means 'test of matching.' Japanese sports culture emphasizes 頑張(がんば)る (persevering) over winning. After a 試合(しあい), both teams bow and the losing team often cries openly, which is seen as showing genuine effort and passion, not weakness."},

    {type:"mc", q:"What is Japan's most popular spectator sport?", opts:["野球(やきゅう) (baseball)","サッカー (soccer)","相撲(すもう) (sumo)","柔道(じゅうどう) (judo)"], ans:"野球(やきゅう) (baseball)",
     hint:"This sport was introduced to Japan in 1872 and has the highest viewership and participation."},

    {type:"fb", s:"{1}を習(なら)っています。何段(なんだん)ですか？\n(I am learning judo. What rank are you?)", a:"柔道(じゅうどう)", opts:["柔道(じゅうどう)","剣道(けんどう)","相撲(すもう)","体操(たいそう)"], sSrc:"I am learning judo. What rank are you?",
     hint:"This Japanese martial art created in 1882 means 'gentle way' and uses a belt ranking system."},

    {type:"match", pairs:[
      {trg:"野球(やきゅう)", src:"baseball"},
      {trg:"相撲(すもう)", src:"sumo wrestling"},
      {trg:"剣道(けんどう)", src:"kendo"},
      {trg:"試合(しあい)", src:"match/game"}
    ]},

    {type:"mc", q:"What is ラジオ体操(たいそう)?", opts:["Radio calisthenics broadcast since 1928","A radio show about sports","A type of martial art","A dance competition"], ans:"Radio calisthenics broadcast since 1928",
     hint:"This daily exercise routine has been b... on NHK for nearly a century and is known by almost all Japanese people."}
  ]
};
export default BATCH10_L1;
