// Batch 9 – Unit 13 (B1.1 Experience): Travel Experiences
const BATCH9_L1 = {
  id:"jav2_u13l_b9_1", title:"旅行(りょこう)体験(たいけん)", icon:"✈️", xp:15, board:true,
  steps:[
    {type:"intro", title:"旅行(りょこう)体験(たいけん)",
     desc:"Learn vocabulary for sharing travel experiences and adventures. Talk about trips, accommodations, and memorable moments.",
     goals:["Describe travel experiences","Use experience-related grammar naturally","Discuss accommodations and destinations"]},

    {type:"teach", trg:"旅館(りょかん)", src:"traditional Japanese inn", pos:"noun", gender:null,
     note:"Features たたみ rooms, おんせん, and かいせきりょうり.\nおかみ = ryokan proprietress.",
     example:"A: 旅館(りょかん)に泊(と)まったことがありますか？\nB: はい、京都(きょうと)で泊(と)まりました。\nA: 誰(だれ)と行(い)きましたか？\nB: 友達(ともだち)と一緒(いっしょ)に行(い)きました。",
     exampleSrc:"A: Have you stayed at a ryokan?\nB: Yes, I stayed at one in Kyoto.\nA: Who did you go with?\nB: I went with a friend.",
     funFact:"旅館(りょかん) (旅館) offer an immersive Japanese experience: ゆかた (light kimono), おんせん (hot spring baths), and かいせきりょうり (multi-course dinner). The おかみ (proprietress) personally oversees guest care. Some 旅館(りょかん) have operated for centuries. Nishiyama Onsen Keiunkan has been open since 705 AD."},

    {type:"teach", trg:"民宿(みんしゅく)", src:"guesthouse / homestay lodging", pos:"noun", gender:null,
     note:"Cheaper than 旅館(りょかん). Run by families.\nみん = people, しゅく = lodging.",
     example:"A: 民宿(みんしゅく)は安(やす)くていいですよ。\nB: 予約(よやく)はどうしますか？\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
     exampleSrc:"A: Guesthouses are cheap and good.\nB: How do you make reservations?\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
     funFact:"民宿(みんしゅく) (民宿) are family-run lodgings, simpler and cheaper than 旅館(りょかん). They offer a more personal experience with home-cooked meals. In rural Japan and fishing villages, 民宿(みんしゅく) let you experience local life authentically. Recent years have seen a boom in Airbnb-style みんぱく (private lodging)."},

    {type:"teach", trg:"お土産(おみやげ)", src:"souvenir / gift from travels", pos:"noun", gender:null,
     note:"Buying お土産(おみやげ) for coworkers and friends is expected.\nお土産(おみやげ)屋(や)さん = souvenir shop.",
     example:"A: お土産(おみやげ)は何(なに)がいいですか？\nB: お菓子(おかし)が喜(よろこ)ばれますよ。\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
     exampleSrc:"A: What would be a good souvenir?\nB: Sweets are always appreciated.\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
     funFact:"お土産(おみやげ) (お土産) culture is deeply ingrained. Returning from a trip without お土産(おみやげ) for coworkers is a social faux pas. Each region has 名物(めいぶつ) (specialty products). Tokyo Banana, Kyoto yatsuhashi, and Hokkaido Shiroi Koibito are classic お土産(おみやげ). Airports and stations have huge お土産(おみやげ) sections."},

    {type:"teach", trg:"景色(けしき)", src:"scenery / landscape", pos:"noun", gender:null,
     note:"景色(けしき)がきれい = beautiful scenery.\n景色(けしき)を楽(たの)しむ = to enjoy the view.",
     example:"A: すばらしい景色(けしき)ですね。\nB: 写真(しゃしん)を撮(と)りましょう。\nA: 私(わたし)も興味(きょうみ)があります。\nB: じゃあ、今度(こんど)一緒(いっしょ)にどうですか？",
     exampleSrc:"A: What wonderful scenery.\nB: Let's take a photo.\nA: I am also interested.\nB: Then, how about doing it together next time?",
     funFact:"景色(けしき) (景色) appreciation is central to Japanese culture. にほんさんけい (Three Views of Japan) are officially designated scenic spots. Japanese gardens are designed to frame 景色(けしき). The concept of しき (borrowed scenery) uses distant mountains as part of garden design."},

    {type:"teach", trg:"名所(めいしょ)", src:"famous place / tourist spot", pos:"noun", gender:null,
     note:"観光(かんこう)名所(めいしょ) = tourist attraction.\nめい = famous, しょ = place.",
     example:"A: この町(まち)の名所(めいしょ)はどこですか？\nB: お城(おしろ)が有名(ゆうめい)です。\nA: どんな感(かん)じでしたか？\nB: 想像(そうぞう)していたよりずっと良(よ)かったです。",
     exampleSrc:"A: What are the famous places in this town?\nB: The castle is famous.\nA: What was it like?\nB: It was much better than I imagined.",
     funFact:"名所(めいしょ) (名所) culture has a long history in Japan. Ukiyo-e artists like Hiroshige painted 名所(めいしょ) series. Today, every region promotes its 名所(めいしょ) for tourism. The concept of パワースポット (power spots) adds a spiritual dimension to 名所(めいしょ) visiting."},

    {type:"teach", trg:"乗(の)り換(か)える", src:"to transfer (trains/buses)", pos:"verb", gender:null,
     note:"乗(の)り換(か)え = transfer. 乗(の)り換(か)え駅(えき) = transfer station.\n乗(の)り換(か)えなし = no transfer needed.",
     example:"A: 新宿(しんじゅく)で乗(の)り換(か)えてください。\nB: 何番線(なんばんせん)ですか？\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
     exampleSrc:"A: Please transfer at Shinjuku.\nB: Which platform?\nA: What did you eat?\nB: I ate the local specialty.",
     funFact:"乗(の)り換(か)え (乗り換え) is an essential travel skill in Japan's complex train network. Tokyo's station maps look like spider webs. Apps like Google Maps and NAVITIME are lifesavers. Japanese people navigate 乗(の)り換(か)え with remarkable efficiency. The record is Umeda Station in Osaka with connections to 8+ lines."},

    {type:"teach", trg:"予約(よやく)", src:"reservation / booking", pos:"noun", gender:null,
     note:"予約(よやく)する = to make a reservation.\n予約(よやく)制(せい) = reservation required.",
     example:"A: レストランを予約(よやく)しましたか？\nB: はい、七時(しちじ)で予約(よやく)しました。\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
     exampleSrc:"A: Did you reserve the restaurant?\nB: Yes, I reserved for seven o'clock.\nA: That is exciting.\nB: Yes, I am already excited.",
     funFact:"予約(よやく) (予約) is highly recommended in Japan, especially for popular restaurants and 旅館(りょかん). No-shows are considered extremely rude. Some top restaurants require 予約(よやく) months in advance. The phrase 予約(よやく)なしでもだいじょうぶですか means 'is it okay without a reservation?'"},

    {type:"teach", trg:"思(おも)い出(で)", src:"memory / memorable experience", pos:"noun", gender:null,
     note:"いい思(おも)い出(で) = good memory.\n思(おも)い出(で)を作(つく)る = to create memories.",
     example:"A: 日本(にほん)の一番(いちばん)の思(おも)い出(で)は何(なに)ですか？\nB: 富士山(ふじさん)に登(のぼ)ったことです。\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
     exampleSrc:"A: What is your best memory of Japan?\nB: Climbing Mount Fuji.\nA: That is a nice memory.\nB: Yes, I will never forget it.",
     funFact:"思(おも)い出(で) (思い出) literally means 'thought that comes out.' Japanese culture places great value on creating 思(おも)い出(で), especially through shared experiences. The phrase いちごいちえ (one meeting, one chance) from tea ceremony philosophy means every encounter is a unique 思(おも)い出(で) to be treasured."},

    {type:"mc", q:"What is considered a social faux pas after returning from a trip?", opts:["Not bringing おみやげ for coworkers","Not showing photos","Not posting on social media","Not writing a trip report"], ans:"Not bringing おみやげ for coworkers",
     hint:"Japanese workplace culture expects travelers to bring back regional specialty gifts."},

    {type:"fb", s:"新宿(しんじゅく)で{1}てください。\n(Please transfer at Shinjuku.)", a:"乗(の)り換(か)え", opts:["乗(の)り換(か)え","のり","おり","まち"], sSrc:"Please transfer at Shinjuku.",
     hint:"This verb means to change from one train or bus line to another."},

    {type:"match", pairs:[
      {trg:"旅館(りょかん)", src:"traditional inn"},
      {trg:"お土産(おみやげ)", src:"souvenir"},
      {trg:"景色(けしき)", src:"scenery"},
      {trg:"思(おも)い出(で)", src:"memory"}
    ]},

    {type:"mc", q:"What makes りょかん different from regular hotels?", opts:["Tatami rooms, onsen, and kaiseki cuisine","Cheaper prices","Western-style beds","24-hour room service"], ans:"Tatami rooms, onsen, and kaiseki cuisine",
     hint:"These traditional inns offer an immersive Japanese cultural experience with specific features."}
  ,{type:"match",pairs:[{trg:"民宿(みんしゅく)",src:"guesthouse / homestay lodging"},{trg:"名所(めいしょ)",src:"famous place / tourist spot"},{trg:"予約(よやく)",src:"reservation / booking"}]}]
};
export default BATCH9_L1;
