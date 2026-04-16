// Batch 10 – Unit 12 (A2.2 Ability): Sports & Physical Activities
const BATCH10_L1 = {
  id:"jav2_u12l_b10_1", title:"スポーツ", icon:"⚽", xp:15, board:true,
  steps:[
    {type:"intro", title:"スポーツ",
     desc:"Learn vocabulary for popular sports and physical activities in Japan. Sports play a huge role in Japanese school life and culture.",
     goals:["Name popular sports in Japanese","Discuss sports activities and abilities","Understand the role of sports in Japanese culture"]},

    {type:"teach", trg:"やきゅう", src:"baseball", pos:"noun", gender:null,
     note:"Japan's most popular sport. やきゅうぶ = baseball club.\nプロやきゅう = professional baseball.",
     example:"A: やきゅうがすきですか？\nB: はい、よくみます。",
     exampleSrc:"A: Do you like baseball?\nB: Yes, I watch it often.",
     funFact:"やきゅう (野球) literally means 'field ball.' Baseball was introduced to Japan in 1872 and became the national sport. こうしえん (Koshien) high school baseball tournament captivates the nation every summer. NPB (Nippon Professional Baseball) has 12 teams. Players like Ohtani Shohei are national heroes."},

    {type:"teach", trg:"サッカー", src:"soccer / football", pos:"noun", gender:null,
     note:"From English 'soccer.' Jリーグ = J-League.\nサッカーをする = to play soccer.",
     example:"A: こどものころサッカーをしていました。\nB: ポジションはどこでしたか？",
     exampleSrc:"A: I played soccer as a child.\nB: What position did you play?",
     funFact:"サッカー surged in popularity after Japan co-hosted the 2002 ワールドカップ (World Cup). The Jリーグ started in 1993. Japanese サッカー emphasizes teamwork and technical skill. たくさんの Japanese players now compete in European leagues. Women's サッカー (なでしこジャパン) won the 2011 World Cup."},

    {type:"teach", trg:"じゅうどう", src:"judo", pos:"noun", gender:null,
     note:"Japanese martial art. じゅうどうか = judoka.\nFrom やわらかいみち (gentle way).",
     example:"A: じゅうどうをならっています。\nB: なんだんですか？",
     exampleSrc:"A: I am learning judo.\nB: What rank are you?",
     funFact:"じゅうどう (柔道) was created by かのうじごろう in 1882 and became an Olympic sport in 1964 (Tokyo Olympics). The name means 'gentle way.' Japan has won more Olympic じゅうどう gold medals than any other country. The black belt system (だん) originated in じゅうどう."},

    {type:"teach", trg:"すもう", src:"sumo wrestling", pos:"noun", gender:null,
     note:"Japan's national sport. りきし = sumo wrestler.\nほんばしょ = grand tournament.",
     example:"A: すもうをみたことがありますか？\nB: テレビでみました。",
     exampleSrc:"A: Have you seen sumo?\nB: I watched it on TV.",
     funFact:"すもう (相撲) has over 1,500 years of history and Shinto religious roots. Six ほんばしょ (grand tournaments) are held yearly. りきし (wrestlers) live in へや (stables) with strict rules. The yokozuna (grand champion) rank is the highest honor. ちゃんこなべ is the traditional sumo diet."},

    {type:"teach", trg:"マラソン", src:"marathon", pos:"noun", gender:null,
     note:"From English 'marathon.' Very popular in Japan.\nマラソンたいかい = marathon race.",
     example:"A: マラソンをはしったことがありますか？\nB: ハーフマラソンならあります。",
     exampleSrc:"A: Have you run a marathon?\nB: I have run a half marathon.",
     funFact:"Japanese マラソン culture is enormous. The Tokyo Marathon attracts 300,000+ applicants for 38,000 spots. New Year's えきでん (relay marathon) is broadcast nationally. Japanese runners like Kipchoge-rival Suzuki Kengo have achieved world-class times. Running is the most popular exercise in Japan."},

    {type:"teach", trg:"けんどう", src:"kendo (Japanese fencing)", pos:"noun", gender:null,
     note:"けん = sword, どう = way.\nしない = bamboo sword. ぼうぐ = protective gear.",
     example:"A: けんどうはきつそうですね。\nB: でもたのしいですよ。",
     exampleSrc:"A: Kendo looks tough.\nB: But it is fun.",
     funFact:"けんどう (剣道) means 'the way of the sword.' It is widely practiced in Japanese schools as a PE option alongside じゅうどう. Practitioners wear ぼうぐ (armor) and use しない (bamboo swords). The shout (きあい) 'メン! コテ! ドウ!' names the three target areas."},

    {type:"teach", trg:"たいそう", src:"gymnastics / exercise", pos:"noun", gender:null,
     note:"ラジオたいそう = radio calisthenics.\nたいそうをする = to do exercise.",
     example:"A: まいあさラジオたいそうをしています。\nB: けんこうにいいですね。",
     exampleSrc:"A: I do radio calisthenics every morning.\nB: That is good for health.",
     funFact:"ラジオたいそう (radio calisthenics) has been broadcast on NHK since 1928. Almost every Japanese person knows the routine. During なつやすみ, children gather at parks early morning for ラジオたいそう and get stamps on attendance cards. Companies also do it before work shifts."},

    {type:"teach", trg:"しあい", src:"match / game / competition", pos:"noun", gender:null,
     note:"しあいにかつ = to win a match.\nしあいにまける = to lose a match.",
     example:"A: きょうのしあいはかちましたか？\nB: ざんねんながら、まけました。",
     exampleSrc:"A: Did you win today's match?\nB: Unfortunately, we lost.",
     funFact:"しあい (試合) literally means 'test of matching.' Japanese sports culture emphasizes がんばる (persevering) over winning. After a しあい, both teams bow and the losing team often cries openly, which is seen as showing genuine effort and passion, not weakness."},

    {type:"mc", q:"What is Japan's most popular spectator sport?", opts:["やきゅう (baseball)","サッカー (soccer)","すもう (sumo)","じゅうどう (judo)"], ans:"やきゅう (baseball)",
     hint:"This sport was introduced to Japan in 1872 and has the highest viewership and participation."},

    {type:"fb", s:"{1}をならっています。なんだんですか？\n(I am learning judo. What rank are you?)", a:"じゅうどう", opts:["じゅうどう","けんどう","すもう","たいそう"], sSrc:"I am learning judo. What rank are you?",
     hint:"This Japanese martial art created in 1882 means 'gentle way' and uses a belt ranking system."},

    {type:"match", pairs:[
      {trg:"やきゅう", src:"baseball"},
      {trg:"すもう", src:"sumo wrestling"},
      {trg:"けんどう", src:"kendo"},
      {trg:"しあい", src:"match/game"}
    ]},

    {type:"mc", q:"What is ラジオたいそう?", opts:["Radio calisthenics broadcast since 1928","A radio show about sports","A type of martial art","A dance competition"], ans:"Radio calisthenics broadcast since 1928",
     hint:"This daily exercise routine has been b... on NHK for nearly a century and is known by almost all Japanese people."}
  ]
};
export default BATCH10_L1;
