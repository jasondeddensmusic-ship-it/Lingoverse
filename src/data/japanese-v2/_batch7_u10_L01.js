// Batch 7 – Unit 10 (A2.1 Weather & Seasons): Natural Phenomena & Seasonal Events
const BATCH7_L1 = {
  id:"jav2_u10l_b7_1", title:"しぜんとぎょうじ", icon:"🌊", xp:15, board:true,
  steps:[
    {type:"intro", title:"しぜんとぎょうじ",
     desc:"Learn vocabulary for natural phenomena and Japanese seasonal events. Japan's four distinct seasons deeply influence daily life, festivals, and conversation.",
     goals:["Describe natural phenomena like rain, wind, and snow","Name seasonal events and holidays","Discuss weather-related activities"]},

    {type:"teach", trg:"たいふう", src:"typhoon", pos:"noun", gender:null,
     note:"Kanji: 台風. たいふうがくる = a typhoon is coming.\nSeason: August to October.",
     example:"A: きょうはたいふうがちかづいています。\nB: そとにでないほうがいいですね。",
     exampleSrc:"A: A typhoon is approaching today.\nB: We should not go outside.",
     funFact:"Japan gets an average of 26 たいふう per year, with about 3 making landfall. The word comes from Chinese 大風 (big wind). Japanese typhoons are numbered, not named. When a たいふう comes, trains stop, schools close, and convenience stores stay open as essential services."},

    {type:"teach", trg:"じしん", src:"earthquake", pos:"noun", gender:null,
     note:"じ = ground, しん = shake.\nじしんがあった = there was an earthquake.",
     example:"A: きのうじしんがありましたね。\nB: はい、すこしゆれました。",
     exampleSrc:"A: There was an earthquake yesterday.\nB: Yes, it shook a little.",
     funFact:"Japan experiences about 1,500 earthquakes per year that people can feel. Every September 1st is 防災の日 (disaster preparedness day) with drills nationwide. Japanese buildings are engineered to flex rather than break. School children practice earthquake drills monthly with 'duck, cover, hold' routines."},

    {type:"teach", trg:"つゆ", src:"rainy season", pos:"noun", gender:null,
     note:"Also written 梅雨 (plum rain). Occurs June to mid-July.\nつゆにはいる = the rainy season has started.",
     example:"A: つゆのきせつですね。\nB: まいにちあめですね。かさがてばなせません。",
     exampleSrc:"A: It is rainy season.\nB: Rain every day. I cannot let go of my umbrella.",
     funFact:"つゆ (梅雨) is written with the kanji for 'plum rain' because it coincides with plum ripening season. The humidity causes mold (カビ), rusts metal, and makes laundry impossible to dry outdoors. つゆ officially starts and ends on dates announced by the Japan Meteorological Agency."},

    {type:"teach", trg:"こおり", src:"ice", pos:"noun", gender:null,
     note:"こおる = to freeze (verb). かきごおり = shaved ice.\nこおりみず = ice water.",
     example:"A: なつはかきごおりがたべたいですね。\nB: いちご味がすきです。",
     exampleSrc:"A: I want to eat shaved ice in summer.\nB: I like strawberry flavor.",
     funFact:"かきごおり (shaved ice) is Japan's iconic summer treat. Traditional shops display a red 氷 (ice) flag. Flavors range from simple syrup to green tea, condensed milk, and mango. Luxury かきごおり shops in Tokyo serve fluffy 'snow' ice with gourmet toppings for over 1,000 yen."},

    {type:"teach", trg:"かみなり", src:"thunder / lightning", pos:"noun", gender:null,
     note:"かみ = god, なり = sound. Lightning is actually called いなずま.\nかみなりがなる = thunder rolls.",
     example:"A: かみなりがなっています。\nB: こわいですね。まどをしめましょう。",
     exampleSrc:"A: It is thundering.\nB: Scary. Let us close the windows.",
     funFact:"かみなり literally means 'god's sound.' In Japanese mythology, the thunder god Raijin (雷神) beats drums to create thunder. Children are told おへそをかくして (hide your belly button) during かみなり because the thunder god likes to steal them. A playful scare tactic."},

    {type:"teach", trg:"にじ", src:"rainbow", pos:"noun", gender:null,
     note:"Kanji: 虹. にじがでた = a rainbow appeared.\nにじいろ = rainbow-colored.",
     example:"A: あめのあとににじがでましたよ！\nB: きれいですね！しゃしんをとりましょう。",
     exampleSrc:"A: A rainbow appeared after the rain!\nB: Beautiful! Let us take a photo.",
     funFact:"Japanese tradition says にじ has seven colors. The kanji 虹 contains the insect radical (虫) from ancient Chinese belief that rainbows were sky serpents. In Japan, seeing a にじ is considered very lucky. Double rainbows (ダブルレインボー) are posted excitedly on social media."},

    {type:"teach", trg:"はなみ", src:"cherry blossom viewing", pos:"noun", gender:null,
     note:"はな = flower, み = viewing.\nはなみにいく = to go cherry blossom viewing.",
     example:"A: こんどのどようびにはなみにいきませんか？\nB: いいですね！おべんとうをもっていきましょう。",
     exampleSrc:"A: Shall we go cherry blossom viewing this Saturday?\nB: Sounds great! Let us bring lunch boxes.",
     funFact:"はなみ is Japan's most beloved spring tradition. People picnic under cherry trees (さくら) with food, drinks, and company. Companies send junior employees hours early to reserve spots with blue tarps. The blooming forecast (さくらぜんせん) is tracked like a weather front on national news."},

    {type:"teach", trg:"おぼん", src:"Bon festival (Buddhist)", pos:"noun", gender:null,
     note:"Mid-August. Also: おぼんやすみ = Obon holiday.\nForebears' spirits return home.",
     example:"A: おぼんはくにへかえりますか？\nB: はい、いなかのおぼんまつりにいきます。",
     exampleSrc:"A: Are you going home for Obon?\nB: Yes, I am going to the countryside Obon festival.",
     funFact:"おぼん is when the spirits of ancestors are believed to return home. Families clean graves, light lanterns to guide spirits, and perform ぼんおどり (Bon dance). It is one of Japan's three major holiday periods (with New Year and Golden Week). The whole country travels home simultaneously."},

    {type:"teach", trg:"こうよう", src:"autumn foliage", pos:"noun", gender:null,
     note:"Also: もみじ (maple leaves specifically).\nこうようがきれいです = the autumn leaves are beautiful.",
     example:"A: きょうとのこうようはいつがいいですか？\nB: じゅういちがつがいちばんきれいです。",
     exampleSrc:"A: When is good for Kyoto autumn foliage?\nB: November is the most beautiful.",
     funFact:"こうよう (紅葉) is autumn's equivalent of cherry blossom viewing. Japanese people travel to see red and gold leaves, especially in Kyoto and Nikko. The もみじ forecast is tracked nationally. Night illuminations of autumn trees (ライトアップ) are spectacular. もみじ tempura (fried maple leaves) is a snack in Osaka."},

    {type:"teach", trg:"おしょうがつ", src:"New Year", pos:"noun", gender:null,
     note:"January 1-3. The most important holiday.\nおしょうがつりょうり = New Year food (おせち).",
     example:"A: おしょうがつはなにをしますか？\nB: はつもうでにいって、おせちをたべます。",
     exampleSrc:"A: What do you do for New Year?\nB: I go for the first shrine visit and eat osechi.",
     funFact:"おしょうがつ is Japan's biggest holiday. Everything closes for three days. Families eat おせちりょうり (special New Year dishes in stacked boxes), watch 紅白歌合戦 (NHK singing contest), and visit shrines. Children receive おとしだま (money gifts in envelopes) from relatives."},

    {type:"teach", trg:"まつり", src:"festival", pos:"noun", gender:null,
     note:"Also: おまつり (polite). Each town has its own まつり.\nなつまつり = summer festival.",
     example:"A: まつりにいきましょう！\nB: はい！ゆかたをきていきましょう。",
     exampleSrc:"A: Let us go to the festival!\nB: Yes! Let us wear yukata.",
     funFact:"Japan has an estimated 300,000 まつり annually. From tiny village festivals to massive events like Gion Matsuri (Kyoto) and Nebuta (Aomori). なつまつり features やたい (food stalls), はなび (fireworks), ゆかた (summer kimono), and ぼんおどり (Bon dances). Festivals define Japanese summers."},

    {type:"teach", trg:"はなび", src:"fireworks", pos:"noun", gender:null,
     note:"はな = flower, び = fire. Literally: fire flowers.\nはなびたいかい = fireworks festival.",
     example:"A: こんばんはなびたいかいがありますよ。\nB: いいですね！どこでみられますか？",
     exampleSrc:"A: There is a fireworks festival tonight.\nB: Great! Where can we watch?",
     funFact:"Japanese はなび (fireworks) are considered the world's finest. Summer festivals feature massive はなびたいかい with tens of thousands of shells. Sumida River (Tokyo) and Nagaoka (Niigata) are legendary shows. Spectators wear ゆかた and shout たまや (Tamaya!) and かぎや (Kagiya!) after beautiful bursts, honoring two historic firework makers."},

    {type:"teach", trg:"ゆかた", src:"summer kimono (casual)", pos:"noun", gender:null,
     note:"Worn at festivals, hot spring resorts, and summer events.\nゆかたをきる = to wear a yukata.",
     example:"A: ゆかたをきてみたいです。\nB: レンタルショップがありますよ。",
     exampleSrc:"A: I want to try wearing a yukata.\nB: There are rental shops.",
     funFact:"ゆかた (浴衣) means 'bathing garment.' Originally worn after bathing, it evolved into casual summer wear. Unlike formal きもの, ゆかた are cotton, simpler to put on, and affordable. Festivals without ゆかた would not feel right. Tourists can rent them in Kyoto and Asakusa."},

    // Quiz steps
    {type:"mc", q:"つゆ is named after:",
     opts:["Plum ripening season","Rain drops","Sadness","Clouds"],
     ans:"Plum ripening season",
     hint:"The kanji 梅雨 literally mean 'p... rain' because this rainy period coincides with p... fruit r...."},

    {type:"match", pairs:[
      {trg:"たいふう", src:"typhoon"},
      {trg:"じしん", src:"earthquake"},
      {trg:"かみなり", src:"thunder"},
      {trg:"こおり", src:"ice"},
      {trg:"つゆ", src:"rainy season"}
    ]},

    {type:"fb", s:"はるは{1}にいきましょう。さくらがきれいです。",
     a:["はなみ"],
     opts:["はなみ","おぼん","まつり","こうよう"],
     hint:"This spring activity involves picnicking under cherry blossom trees.",
     sSrc:"In spring, let us go {1}. The cherry blossoms are beautiful."},

    {type:"mc", q:"おしょうがつに children receive:",
     opts:["おとしだま (money in envelopes)","おせち (special food)","ゆかた (summer kimono)","はなび (fireworks)"],
     ans:"おとしだま (money in envelopes)",
     hint:"Relatives give children these special monetary gifts in decorated e... during New Year."},

    {type:"fb", s:"なつまつりには{1}をきていきましょう。",
     a:["ゆかた"],
     opts:["ゆかた","ようふく","コート","スーツ"],
     hint:"This casual cotton kimono is the traditional outfit for summer festivals.",
     sSrc:"Let us wear a {1} to the summer festival."},

    {type:"mc", q:"はなび literally means:",
     opts:["Fire flowers","Sky lights","Star bursts","Thunder booms"],
     ans:"Fire flowers",
     hint:"The kanji combine はな (flower) and び/ひ (f...). F... made of f...."},

    {type:"match", pairs:[
      {trg:"はなみ", src:"cherry blossom viewing"},
      {trg:"おぼん", src:"Bon festival"},
      {trg:"こうよう", src:"autumn foliage"},
      {trg:"まつり", src:"festival"},
      {trg:"はなび", src:"fireworks"}
    ]},

    {type:"fb", s:"きょうとの{1}はじゅういちがつがいちばんきれいです。",
     a:["こうよう"],
     opts:["こうよう","はなみ","はなび","まつり"],
     hint:"Autumn's version of cherry blossom viewing. Red and gold leaves are the attraction.",
     sSrc:"Kyoto's {1} is most beautiful in November."}
  ]
};
export default BATCH7_L1;
