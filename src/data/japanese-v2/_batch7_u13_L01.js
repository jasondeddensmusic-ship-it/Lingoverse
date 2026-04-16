// Batch 7 – Unit 13 (B1.1 Experience): Travel Experience Vocabulary
const BATCH7_L1 = {
  id:"jav2_u13l_b7_1", title:"たびのたいけん", icon:"✈️", xp:15, board:true,
  steps:[
    {type:"intro", title:"たびのたいけん",
     desc:"Build vocabulary for describing travel experiences. These words help you talk about trips, accommodations, and memorable moments, connecting naturally with the experience grammar of this unit.",
     goals:["Describe travel destinations and activities","Use accommodation and transportation vocabulary","Share travel memories and impressions"]},

    {type:"teach", trg:"もくてきち", src:"destination", pos:"noun", gender:null,
     note:"もくてき = purpose, ち = place.\nりょこうのもくてきち = travel destination.",
     example:"A: もくてきちはどこですか？\nB: きょうとです。おてらをみたいです。",
     exampleSrc:"A: What is your destination?\nB: Kyoto. I want to see temples.",
     funFact:"もくてきち (目的地) literally means 'purpose place.' Japanese travel culture values the journey (たび) as much as the もくてきち. The concept of 旅 (tabi) carries a poetic, almost spiritual meaning that 'travel' or 'trip' does not fully capture. Basho's haiku journeys embody this spirit."},

    {type:"teach", trg:"りょかん", src:"traditional Japanese inn", pos:"noun", gender:null,
     note:"Includes meals, onsen, and futon.\nりょかんにとまる = to stay at a ryokan.",
     example:"A: りょかんにとまったことがありますか？\nB: はい、おんせんりょかんにとまりました。",
     exampleSrc:"A: Have you stayed at a ryokan?\nB: Yes, I stayed at a hot spring ryokan.",
     funFact:"りょかん (旅館) are the traditional alternative to hotels. They include dinner (ゆうしょく) and breakfast (ちょうしょく), often featuring local specialties. Guests wear ゆかた, sleep on ふとん, and bathe in おんせん. The おもてなし (hospitality) at high-end りょかん is world-class."},

    {type:"teach", trg:"おみやげ", src:"souvenir", pos:"noun", gender:null,
     note:"おみやげをかう = to buy souvenirs.\nExpected to bring back for colleagues and family.",
     example:"A: おみやげはなにをかいましたか？\nB: もみじまんじゅうをかいました。",
     exampleSrc:"A: What souvenirs did you buy?\nB: I bought maple leaf cakes.",
     funFact:"おみやげ culture is a serious social obligation. You MUST bring back おみやげ for colleagues, family, and close friends after any trip. Each region has めいぶつ (famous local products). Airports and stations have enormous おみやげ sections. Forgetting おみやげ is a social error."},

    {type:"teach", trg:"けしき", src:"scenery / landscape", pos:"noun", gender:null,
     note:"けしきがきれい = the scenery is beautiful.\nけしきをたのしむ = to enjoy the scenery.",
     example:"A: ここのけしきはすばらしいですね。\nB: はい、にほんさんけいのひとつです。",
     exampleSrc:"A: The scenery here is wonderful.\nB: Yes, it is one of Japan's three most scenic views.",
     funFact:"にほんさんけい (Japan's Three Views) are Matsushima (pine islands), Amanohashidate (heaven's bridge), and Miyajima (shrine island). Ranking things in threes (さんだい) is a Japanese tradition. Every category has its top three: three castles, three gardens, three festivals."},

    {type:"teach", trg:"おんせん", src:"hot spring", pos:"noun", gender:null,
     note:"おんせんにはいる = to bathe in hot springs.\nろてんぶろ = outdoor bath.",
     example:"A: おんせんにはいりたいです。\nB: はこねのおんせんがおすすめですよ。",
     exampleSrc:"A: I want to bathe in hot springs.\nB: I recommend Hakone hot springs.",
     funFact:"Japan has 27,000 おんせん sources, more than any country. Each おんせん has different mineral properties. Tattoos are often banned (because of yakuza associations). The etiquette: wash thoroughly BEFORE entering, no swimsuits, no towels in the water. It is a deeply relaxing ritual."},

    {type:"teach", trg:"よやく", src:"reservation", pos:"noun", gender:null,
     note:"よやくする = to make a reservation.\nよやくばんごう = reservation number.",
     example:"A: レストランのよやくをしましたか？\nB: はい、しちじによやくしました。",
     exampleSrc:"A: Did you make a restaurant reservation?\nB: Yes, I reserved for 7 o'clock.",
     funFact:"よやく (予約) is essential in Japan. Popular restaurants, hotels, and activities require advance よやく. No-shows are considered extremely rude. Some restaurants charge cancellation fees. Online reservation systems (ネットよやく) have made booking easier, but phone よやく is still common."},

    {type:"teach", trg:"まよう", src:"to get lost / to be undecided", pos:"verb", gender:null,
     note:"Group 1 verb. みちにまよう = to get lost (on the road).\nまよっています = I am undecided.",
     example:"A: みちにまよいました。\nB: スマホのちずをみましょう。",
     exampleSrc:"A: I got lost.\nB: Let us look at the phone map.",
     funFact:"まよう (迷う) covers both physical getting lost and mental indecision. 迷子 (まいご, lost child) uses the same kanji. Japanese stations and malls are famously confusing, even for locals. Shinjuku Station (新宿駅) with its 200+ exits is nicknamed 'the dungeon' because everyone gets まよう."},

    {type:"teach", trg:"のりおくれる", src:"to miss (a train/bus)", pos:"verb", gender:null,
     note:"Group 2 verb. のり = ride, おくれる = to be late.\nでんしゃにのりおくれた = missed the train.",
     example:"A: でんしゃにのりおくれました！\nB: つぎは5ぷんごですよ。",
     exampleSrc:"A: I missed the train!\nB: The next one is in 5 minutes.",
     funFact:"Missing a train (のりおくれる) in Japan usually means waiting only a few minutes, thanks to incredibly punctual schedules. Tokyo trains run every 2-3 minutes during rush hour. The average delay is under 1 minute per year. When trains ARE late, passengers receive delay certificates (遅延証明書) for their employers."},

    {type:"teach", trg:"おもいで", src:"memory / fond recollection", pos:"noun", gender:null,
     note:"おもいで = memories (positive). おもいでになる = to become a memory.\nいいおもいで = a good memory.",
     example:"A: にほんでいちばんのおもいではなんですか？\nB: ふじさんにのぼったことです。",
     exampleSrc:"A: What is your best memory of Japan?\nB: Climbing Mt. Fuji.",
     funFact:"おもいで (思い出) is a deeply emotional word. The kanji combine 思 (think) and 出 (come out). Memories come out from the heart. Japanese people treasure おもいで intensely. Photo albums, journals, and おみやげ serve as physical anchors for おもいで. The phrase いいおもいでになりました is a heartfelt thank-you."},

    {type:"teach", trg:"きけん", src:"dangerous", pos:"adj", gender:null,
     note:"Na-adjective. きけんなばしょ = dangerous place.\nOpposite: あんぜん (safe).",
     example:"A: このみちはきけんですか？\nB: よるはきけんです。ひるまはだいじょうぶです。",
     exampleSrc:"A: Is this road dangerous?\nB: At night it is dangerous. Daytime is fine.",
     funFact:"Japan is one of the safest countries in the world, so きけん (危険) warnings are taken very seriously. Signs saying きけん appear near cliffs, railway crossings, and construction. Natural disasters (地震, 台風) are the primary きけん sources, not crime. Japan's murder rate is among the lowest globally."},

    {type:"teach", trg:"ちゅうい", src:"caution / warning", pos:"noun", gender:null,
     note:"ちゅういする = to pay attention / to warn.\nちゅういしてください = please be careful.",
     example:"A: あしもとにちゅういしてください。\nB: はい、きをつけます。",
     exampleSrc:"A: Please watch your step.\nB: Yes, I will be careful.",
     funFact:"ちゅうい (注意) signs are everywhere in Japan: trains, stations, escalators, sidewalks. Japanese society relies on gentle warnings rather than strict enforcement. The phrase ちゅうい is less alarming than きけん but still commands respect. Announcements on trains constantly remind passengers to ちゅうい."},

    {type:"teach", trg:"まんぞく", src:"satisfaction / satisfied", pos:"noun", gender:null,
     note:"Na-adjective/noun. まんぞくする = to be satisfied.\nまんぞくしています = I am satisfied.",
     example:"A: りょこうはまんぞくでしたか？\nB: はい、とてもまんぞくです。",
     exampleSrc:"A: Were you satisfied with the trip?\nB: Yes, very satisfied.",
     funFact:"まんぞく (満足) combines 満 (full) and 足 (foot/sufficient). Being satisfied means being 'fully sufficient.' Japanese customer satisfaction surveys use 大変満足 (very satisfied) to まったく不満足 (completely unsatisfied). Japanese service aims for まんぞく through obsessive attention to detail."},

    {type:"teach", trg:"ざんねん", src:"disappointing / regrettable", pos:"adj", gender:null,
     note:"Na-adjective. ざんねんです = that is a shame/too bad.\nざんねんながら = unfortunately.",
     example:"A: あしたはあめだそうです。\nB: ざんねんですね。はなみはむりですね。",
     exampleSrc:"A: It seems it will rain tomorrow.\nB: That is a shame. Cherry blossom viewing is not possible.",
     funFact:"ざんねん (残念) is used constantly in daily Japanese. It is softer than 'disappointing' and conveys shared regret. The book ざんねんないきもの (Disappointing Animals) became a bestseller, making ざんねん a trendy word. It describes animals with comically impractical features."},

    {type:"teach", trg:"かんどうする", src:"to be moved / to be impressed", pos:"verb", gender:null,
     note:"Suru verb. かんどうてき = impressive/moving.\nかんどうしました = I was deeply moved.",
     example:"A: このえいがにかんどうしました。\nB: わたしもです。なきました。",
     exampleSrc:"A: I was moved by this movie.\nB: Me too. I cried.",
     funFact:"かんどう (感動) is a powerful word expressing deep emotional impact. Japanese people value experiences that cause かんどう: beautiful scenery, kind gestures, impressive performances. Saying かんどうしました is high praise. Japanese TV shows often feature 'touching' (感動) stories that make the studio audience cry."},

    // Quiz steps
    {type:"mc", q:"おみやげ in Japan is:",
     opts:["A social obligation when returning from trips","Optional and rare","Only for family members","Only available at airports"],
     ans:"A social obligation when returning from trips",
     hint:"Forgetting to bring back souvenirs for colleagues and family is considered a s... error."},

    {type:"match", pairs:[
      {trg:"もくてきち", src:"destination"},
      {trg:"おみやげ", src:"souvenir"},
      {trg:"けしき", src:"scenery"},
      {trg:"おんせん", src:"hot spring"},
      {trg:"おもいで", src:"memory"}
    ]},

    {type:"fb", s:"でんしゃに{1}ました。つぎは5ぷんごです。",
     a:["のりおくれ"],
     opts:["のりおくれ","のりかえ","まよい","やすみ"],
     hint:"You missed the train. This compound verb means 'to miss a ride.'",
     sSrc:"I {1} the train. The next one is in 5 minutes."},

    {type:"mc", q:"おんせん etiquette requires:",
     opts:["Washing your body before entering the bath","Wearing a swimsuit in the water","Bringing a towel into the water","Entering with shoes on"],
     ans:"Washing your body before entering the bath",
     hint:"You must be completely clean b... e... the shared hot water. No swimsuits allowed."},

    {type:"fb", s:"あしたはあめです。{1}ですね。",
     a:["ざんねん"],
     opts:["ざんねん","まんぞく","きけん","あんぜん"],
     hint:"The rain ruins plans. This na-adjective expresses regret or disappointment.",
     sSrc:"It will rain tomorrow. That is {1}."},

    {type:"mc", q:"しんじゅくえき is nicknamed 'the dungeon' because:",
     opts:["People get lost due to 200+ exits","It is underground","It is dark","It is old"],
     ans:"People get lost due to 200+ exits",
     hint:"Even locals g... まよう in this enormous station with its confusing maze of passages and e...."},

    {type:"match", pairs:[
      {trg:"よやく", src:"reservation"},
      {trg:"まよう", src:"to get lost"},
      {trg:"きけん", src:"dangerous"},
      {trg:"ちゅうい", src:"caution"},
      {trg:"かんどうする", src:"to be moved"}
    ]},

    {type:"fb", s:"このえいがに{1}しました。なきました。",
     a:["かんどう"],
     opts:["かんどう","まんぞく","ざんねん","ちゅうい"],
     hint:"The movie deeply impressed and emotionally moved you. You even cried.",
     sSrc:"I was {1} by this movie. I cried."}
  ]
};
export default BATCH7_L1;
