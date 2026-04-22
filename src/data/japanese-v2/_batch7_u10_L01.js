// Batch 7 – Unit 10 (A2.1 Weather & Seasons): Natural Phenomena & Seasonal Events
const BATCH7_L1 = {
  id:"jav2_u10l_b7_1", title:"自然(しぜん)と行事(ぎょうじ)", icon:"🌊", xp:15, board:true,
  steps:[
    {type:"intro", title:"自然(しぜん)と行事(ぎょうじ)",
     desc:"Learn vocabulary for natural phenomena and Japanese seasonal events. Japan's four distinct seasons deeply influence daily life, festivals, and conversation.",
     goals:["Describe natural phenomena like rain, wind, and snow","Name seasonal events and holidays","Discuss weather-related activities"]},

    {type:"teach", trg:"台風(たいふう)", src:"typhoon", pos:"noun", gender:null,
     note:"台風(たいふう)がくる = a typhoon is coming.\nSeason: August to October.",
     example:"A: 今日(きょう)は台風(たいふう)が近(ちか)づいています。\nB: 外(そと)に出(で)ないほうがいいですね。",
     exampleSrc:"A: A typhoon is approaching today.\nB: We should not go outside.",
     funFact:"Japan gets an average of 26 台風(たいふう) per year, with about 3 making landfall. The word comes from Chinese 大風 (big wind). Japanese typhoons are numbered, not named. When a 台風(たいふう) comes, trains stop, schools close, and convenience stores stay open as essential services."},

    {type:"teach", trg:"地震(じしん)", src:"earthquake", pos:"noun", gender:null,
     note:"地(じ) = ground, 震(しん) = shake.\n地震(じしん)があった = there was an earthquake.",
     example:"A: 昨日(きのう)地震(じしん)がありましたね。\nB: はい、少(すこ)し揺(ゆ)れました。",
     exampleSrc:"A: There was an earthquake yesterday.\nB: Yes, it shook a little.",
     funFact:"Japan experiences about 1,500 earthquakes per year that people can feel. Every September 1st is 防災(ぼうさい)の日(ひ) (disaster preparedness day) with drills nationwide. Japanese buildings are engineered to flex rather than break. School children practice earthquake drills monthly with 'duck, cover, hold' routines."},

    {type:"teach", trg:"梅雨(つゆ)", src:"rainy season", pos:"noun", gender:null,
     note:"Also written 梅雨 (plum rain). Occurs June to mid-July.\n梅雨(つゆ)に入(はい)る = the rainy season has started.",
     example:"A: 梅雨(つゆ)の季節(きせつ)ですね。\nB: 毎日(まいにち)雨(あめ)ですね。傘(かさ)が手(て)放(はな)せません。",
     exampleSrc:"A: It is rainy season.\nB: Rain every day. I cannot let go of my umbrella.",
     funFact:"梅雨(つゆ) is written with the kanji for 'plum rain' because it coincides with plum ripening season. The humidity causes mold (カビ), rusts metal, and makes laundry impossible to dry outdoors. 梅雨(つゆ) officially starts and ends on dates announced by the Japan Meteorological Agency."},

    {type:"teach", trg:"氷(こおり)", src:"ice", pos:"noun", gender:null,
     note:"凍(こお)る = to freeze (verb). かき氷(こおり) = shaved ice.\n氷(こおり)水(みず) = ice water.",
     example:"A: 夏(なつ)はかき氷(こおり)が食(た)べたいですね。\nB: いちご味(あじ)が好(す)きです。",
     exampleSrc:"A: I want to eat shaved ice in summer.\nB: I like strawberry flavor.",
     funFact:"かき氷(こおり) (shaved ice) is Japan's iconic summer treat. Traditional shops display a red 氷 (ice) flag. Flavors range from simple syrup to green tea, condensed milk, and mango. Luxury かき氷(こおり) shops in Tokyo serve fluffy 'snow' ice with gourmet toppings for over 1,000 yen."},

    {type:"teach", trg:"雷(かみなり)", src:"thunder / lightning", pos:"noun", gender:null,
     note:"神(かみ) = god, 鳴(な)り = sound. Lightning is actually called 稲妻(いなずま).\n雷(かみなり)が鳴(な)る = thunder rolls.",
     example:"A: 雷(かみなり)が鳴(な)っています。\nB: 怖(こわ)いですね。窓(まど)を閉(し)めましょう。",
     exampleSrc:"A: It is thundering.\nB: Scary. Let us close the windows.",
     funFact:"雷(かみなり) literally means 'god's sound.' In Japanese mythology, the thunder god Raijin (雷神(らいじん)) beats drums to create thunder. Children are told おへそをかくして (hide your belly button) during 雷(かみなり) because the thunder god likes to steal them. A playful scare tactic."},

    {type:"teach", trg:"虹(にじ)", src:"rainbow", pos:"noun", gender:null,
     note:"虹(にじ)が出(で)た = a rainbow appeared.\n虹(にじ)色(いろ) = rainbow-colored.",
     example:"A: 雨(あめ)の後(あと)に虹(にじ)が出(で)ましたよ！\nB: きれいですね！写真(しゃしん)を撮(と)りましょう。",
     exampleSrc:"A: A rainbow appeared after the rain!\nB: Beautiful! Let us take a photo.",
     funFact:"Japanese tradition says 虹(にじ) has seven colors. The kanji 虹 contains the insect radical (虫) from ancient Chinese belief that rainbows were sky serpents. In Japan, seeing a 虹(にじ) is considered very lucky. Double rainbows (ダブルレインボー) are posted excitedly on social media."},

    {type:"teach", trg:"花見(はなみ)", src:"cherry blossom viewing", pos:"noun", gender:null,
     note:"花(はな) = flower, 見(み) = viewing.\n花見(はなみ)に行(い)く = to go cherry blossom viewing.",
     example:"A: 今度(こんど)の土曜日(どようび)に花見(はなみ)に行(い)きませんか？\nB: いいですね！お弁当(べんとう)を持(も)っていきましょう。",
     exampleSrc:"A: Shall we go cherry blossom viewing this Saturday?\nB: Sounds great! Let us bring lunch boxes.",
     funFact:"花見(はなみ) is Japan's most beloved spring tradition. People picnic under cherry trees (桜(さくら)) with food, drinks, and company. Companies send junior employees hours early to reserve spots with blue tarps. The blooming forecast (桜前線(さくらぜんせん)) is tracked like a weather front on national news."},

    {type:"teach", trg:"お盆(おぼん)", src:"Bon festival (Buddhist)", pos:"noun", gender:null,
     note:"Mid-August. Also: お盆(おぼん)休(やす)み = Obon holiday.\nForebears' spirits return home.",
     example:"A: お盆(おぼん)は国(くに)へ帰(かえ)りますか？\nB: はい、田舎(いなか)のお盆(おぼん)祭(まつ)りに行(い)きます。",
     exampleSrc:"A: Are you going home for Obon?\nB: Yes, I am going to the countryside Obon festival.",
     funFact:"お盆(おぼん) is when the spirits of ancestors are believed to return home. Families clean graves, light lanterns to guide spirits, and perform 盆踊(ぼんおど)り (Bon dance). It is one of Japan's three major holiday periods (with New Year and Golden Week). The whole country travels home simultaneously."},

    {type:"teach", trg:"紅葉(こうよう)", src:"autumn foliage", pos:"noun", gender:null,
     note:"Also: 紅葉(もみじ) (maple leaves specifically).\n紅葉(こうよう)がきれいです = the autumn leaves are beautiful.",
     example:"A: 京都(きょうと)の紅葉(こうよう)はいつがいいですか？\nB: 十一月(じゅういちがつ)が一番(いちばん)きれいです。",
     exampleSrc:"A: When is good for Kyoto autumn foliage?\nB: November is the most beautiful.",
     funFact:"紅葉(こうよう) is autumn's equivalent of cherry blossom viewing. Japanese people travel to see red and gold leaves, especially in Kyoto and Nikko. The 紅葉(もみじ) forecast is tracked nationally. Night illuminations of autumn trees (ライトアップ) are spectacular. 紅葉(もみじ) tempura (fried maple leaves) is a snack in Osaka."},

    {type:"teach", trg:"お正月(おしょうがつ)", src:"New Year", pos:"noun", gender:null,
     note:"January 1-3. The most important holiday.\nお正月(おしょうがつ)料理(りょうり) = New Year food (おせち).",
     example:"A: お正月(おしょうがつ)は何(なに)をしますか？\nB: 初詣(はつもうで)に行(い)って、おせちを食(た)べます。",
     exampleSrc:"A: What do you do for New Year?\nB: I go for the first shrine visit and eat osechi.",
     funFact:"お正月(おしょうがつ) is Japan's biggest holiday. Everything closes for three days. Families eat おせち料理(りょうり) (special New Year dishes in stacked boxes), watch 紅白歌合戦(こうはくうたがっせん) (NHK singing contest), and visit shrines. Children receive お年玉(おとしだま) (money gifts in envelopes) from relatives."},

    {type:"teach", trg:"祭(まつ)り", src:"festival", pos:"noun", gender:null,
     note:"Also: お祭(まつ)り (polite). Each town has its own 祭(まつ)り.\n夏祭(なつまつ)り = summer festival.",
     example:"A: 祭(まつ)りに行(い)きましょう！\nB: はい！浴衣(ゆかた)を着(き)ていきましょう。",
     exampleSrc:"A: Let us go to the festival!\nB: Yes! Let us wear yukata.",
     funFact:"Japan has an estimated 300,000 祭(まつ)り annually. From tiny village festivals to massive events like Gion Matsuri (Kyoto) and Nebuta (Aomori). 夏祭(なつまつ)り features 屋台(やたい) (food stalls), 花火(はなび) (fireworks), 浴衣(ゆかた) (summer kimono), and 盆踊(ぼんおど)り (Bon dances). Festivals define Japanese summers."},

    {type:"teach", trg:"花火(はなび)", src:"fireworks", pos:"noun", gender:null,
     note:"花(はな) = flower, 火(び) = fire. Literally: fire flowers.\n花火大会(はなびたいかい) = fireworks festival.",
     example:"A: 今晩(こんばん)花火大会(はなびたいかい)がありますよ。\nB: いいですね！どこで見(み)られますか？",
     exampleSrc:"A: There is a fireworks festival tonight.\nB: Great! Where can we watch?",
     funFact:"Japanese 花火(はなび) (fireworks) are considered the world's finest. Summer festivals feature massive 花火大会(はなびたいかい) with tens of thousands of shells. Sumida River (Tokyo) and Nagaoka (Niigata) are legendary shows. Spectators wear 浴衣(ゆかた) and shout たまや (Tamaya!) and かぎや (Kagiya!) after beautiful bursts, honoring two historic firework makers."},

    {type:"teach", trg:"浴衣(ゆかた)", src:"summer kimono (casual)", pos:"noun", gender:null,
     note:"Worn at festivals, hot spring resorts, and summer events.\n浴衣(ゆかた)を着(き)る = to wear a yukata.",
     example:"A: 浴衣(ゆかた)を着(き)てみたいです。\nB: レンタルショップがありますよ。",
     exampleSrc:"A: I want to try wearing a yukata.\nB: There are rental shops.",
     funFact:"浴衣(ゆかた) means 'bathing garment.' Originally worn after bathing, it evolved into casual summer wear. Unlike formal 着物(きもの), 浴衣(ゆかた) are cotton, simpler to put on, and affordable. Festivals without 浴衣(ゆかた) would not feel right. Tourists can rent them in Kyoto and Asakusa."},

    // Quiz steps
    {type:"mc", q:"梅雨(つゆ) is named after:",
     opts:["Plum ripening season","Rain drops","Sadness","Clouds"],
     ans:"Plum ripening season",
     hint:"The kanji 梅雨 literally mean 'p... rain' because this rainy period coincides with p... fruit r...."},

    {type:"match", pairs:[
      {trg:"台風(たいふう)", src:"typhoon"},
      {trg:"地震(じしん)", src:"earthquake"},
      {trg:"雷(かみなり)", src:"thunder"},
      {trg:"氷(こおり)", src:"ice"},
      {trg:"梅雨(つゆ)", src:"rainy season"}
    ]},

    {type:"fb", s:"春(はる)は{1}に行(い)きましょう。桜(さくら)がきれいです。",
     a:["花見(はなみ)"],
     opts:["花見(はなみ)","お盆(おぼん)","祭(まつ)り","紅葉(こうよう)"],
     hint:"This spring activity involves picnicking under cherry blossom trees.",
     sSrc:"In spring, let us go {1}. The cherry blossoms are beautiful."},

    {type:"mc", q:"お正月(おしょうがつ)に children receive:",
     opts:["花火(はなび) (fireworks)","お年玉(おとしだま) (money in envelopes)","おせち (special food)","浴衣(ゆかた) (summer kimono)"],
     ans:"お年玉(おとしだま) (money in envelopes)",
     hint:"Relatives give children these special monetary gifts in decorated e... during New Year."},

    {type:"fb", s:"夏祭(なつまつ)りには{1}を着(き)ていきましょう。",
     a:["浴衣(ゆかた)"],
     opts:["浴衣(ゆかた)","洋服(ようふく)","コート","スーツ"],
     hint:"This casual cotton kimono is the traditional outfit for summer festivals.",
     sSrc:"Let us wear a {1} to the summer festival."},

    {type:"mc", q:"花火(はなび) literally means:",
     opts:["Star bursts","Thunder booms","Fire flowers","Sky lights"],
     ans:"Fire flowers",
     hint:"The kanji combine 花(はな) (flower) and 火(び) (f...). F... made of f...."},

    {type:"match", pairs:[
      {trg:"花見(はなみ)", src:"cherry blossom viewing"},
      {trg:"お盆(おぼん)", src:"Bon festival"},
      {trg:"紅葉(こうよう)", src:"autumn foliage"},
      {trg:"祭(まつ)り", src:"festival"},
      {trg:"花火(はなび)", src:"fireworks"}
    ]},

    {type:"fb", s:"京都(きょうと)の{1}は十一月(じゅういちがつ)が一番(いちばん)きれいです。",
     a:["紅葉(こうよう)"],
     opts:["紅葉(こうよう)","花見(はなみ)","花火(はなび)","祭(まつ)り"],
     hint:"Autumn's version of cherry blossom viewing. Red and gold leaves are the attraction.",
     sSrc:"Kyoto's {1} is most beautiful in November."}
  ,{type:"match",pairs:[{trg:"虹(にじ)",src:"rainbow"},{trg:"お正月(おしょうがつ)",src:"New Year"}]}]
};
export default BATCH7_L1;
