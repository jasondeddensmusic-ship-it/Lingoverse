// Batch 8 – Unit 13 (A2.1 Experience): Travel & Transportation Verbs
const BATCH8_L1 = {
  id:"jav2_u13l_b8_1", title:"移動(いどう)の動詞(どうし)", icon:"🚃", xp:15, board:true,
  steps:[
    {type:"intro", title:"移動(いどう)の動詞(どうし)",
     desc:"Learn compound and specialized movement verbs essential for travel. These verbs combine with other words to express detailed transportation and movement actions.",
     goals:["Use compound movement verbs naturally","Describe transfer and transit actions","Navigate Japanese transportation vocabulary"]},

    {type:"teach", trg:"乗(の)り換(か)える", src:"to transfer / to change (trains/buses)", pos:"verb", gender:null,
     note:"乗(の)る (to ride) + 換(か)える (to change). 乗(の)り換(か)え = transfer.\n乗(の)り換(か)え駅(えき) = transfer station.",
     example:"A: 渋谷(しぶや)で乗(の)り換(か)えてください。\nB: 何番線(なんばんせん)ですか？\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
     exampleSrc:"A: Please transfer at Shibuya.\nB: Which platform?\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
     funFact:"乗(の)り換(か)え is a daily reality in Tokyo where the train system has dozens of lines by different companies. Transfer walks can be 10+ minutes underground. 乗(の)り換(か)えアプリ (transfer apps) are essential. The phrase 乗(の)り換(か)えなし (no transfers) is a selling point for train routes."},

    {type:"teach", trg:"乗(の)り遅(おく)れる", src:"to miss (a train/bus/flight)", pos:"verb", gender:null,
     note:"乗(の)る (to ride) + 遅(おく)れる (to be late). Compound verb.\n電車(でんしゃ)に乗(の)り遅(おく)れた = I missed the train.",
     example:"A: 電車(でんしゃ)に乗(の)り遅(おく)れました。\nB: 次(つぎ)の電車(でんしゃ)は五分後(ごふんご)です。\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
     exampleSrc:"A: I missed the train.\nB: The next train is in five minutes.\nA: Do you recommend it?\nB: Yes, please try it.",
     funFact:"乗(の)り遅(おく)れる is less stressful in Japan because trains come so frequently, often every 2 to 5 minutes on major lines. However、乗(の)り遅(おく)れる on the 新幹線(しんかんせん) (bullet train) or the 終電(しゅうでん) (last train) is serious. Missing the 終電(しゅうでん) means sleeping in a カプセルホテル or a 漫画(まんが)喫茶(きっさ)."},

    {type:"teach", trg:"通(とお)り過(す)ぎる", src:"to pass by / to go past", pos:"verb", gender:null,
     note:"通(とお)る (to pass) + 過(す)ぎる (to exceed). 駅(えき)を通(とお)り過(す)ぎる = to pass the station.\nAlso used metaphorically.",
     example:"A: 駅(えき)を通(とお)り過(す)ぎてしまいました。\nB: 次(つぎ)の駅(えき)で降(お)りて戻(もど)りましょう。\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
     exampleSrc:"A: I accidentally passed the station.\nB: Let us get off at the next station and go back.\nA: Shall we go together?\nB: That sounds good. Let's go.",
     funFact:"通(とお)り過(す)ぎる on a train is called 乗(の)り過(す)ごし (riding past your stop). It happens easily when you fall asleep on the train, a common Japanese phenomenon. Some railway companies announce 乗(の)り過(す)ごしにご注意(ちゅうい) (please be careful not to ride past your stop)."},

    {type:"teach", trg:"飛(と)び乗(の)る", src:"to jump on (a departing vehicle)", pos:"verb", gender:null,
     note:"飛(と)ぶ (to jump) + 乗(の)る (to ride). Implies barely making it.\n駆(か)け込(こ)み乗車(じょうしゃ) = last-second boarding.",
     example:"A: 電車(でんしゃ)に飛(と)び乗(の)りました。\nB: 危(あぶ)ないですよ。気(き)をつけてください。\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
     exampleSrc:"A: I jumped onto the train at the last second.\nB: That is dangerous. Please be careful.\nA: Where do you recommend?\nB: I recommend Kyoto.",
     funFact:"駆(か)け込(こ)み乗車(じょうしゃ) (rushing to board) is officially discouraged on Japanese trains. Announcements say 駆(か)け込(こ)み乗車(じょうしゃ)はおやめください (please refrain from rushing to board). Despite this, it is a daily occurrence. Station staff sometimes push passengers in during rush hour on the most crowded lines."},

    {type:"teach", trg:"突(つ)き当(あ)たる", src:"to reach the end / to come to a dead end", pos:"verb", gender:null,
     note:"突(つ)く (to arrive) + 当(あ)たる (to hit). 突(つ)き当(あ)たり = dead end/T-junction.\nUsed in directions: 突(つ)き当(あ)たりを右(みぎ).",
     example:"A: この道(みち)をまっすぐ行(い)くと突(つ)き当(あ)たります。\nB: 突(つ)き当(あ)たりを左(ひだり)ですか？\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
     exampleSrc:"A: If you go straight on this road, you will reach the end.\nB: Turn left at the end?\nA: What was the best part?\nB: The food was the most delicious.",
     funFact:"突(つ)き当(あ)たり is one of the most common direction words in Japanese. Unlike English 'dead end' which sounds negative, 突(つ)き当(あ)たり is neutral and practical. It simply means the road hits something and you must turn. Japanese streets often lack names, so direction-giving relies on landmarks and 突(つ)き当(あ)たり."},

    {type:"mc", q:"What does 乗(の)り換(か)える mean?", opts:["To transfer between trains/buses","To miss a train","To ride past your stop","To jump on a departing train"], ans:"To transfer between trains/buses",
     hint:"This compound verb combines 'to ride' with 'to change' for switching b... vehicles."},

    {type:"teach", trg:"降(お)りる", src:"to get off / to descend / to disembark", pos:"verb", gender:null,
     note:"電車(でんしゃ)を降(お)りる = to get off the train.\n次(つぎ)の駅(えき)で降(お)ります = I will get off at the next station.",
     example:"A: 次(つぎ)の駅(えき)で降(お)ります。\nB: お先(さき)にどうぞ。\nA: よく行(い)きますか？\nB: 月(つき)に一回(いっかい)ぐらい行(い)きます。",
     exampleSrc:"A: I will get off at the next station.\nB: After you.\nA: Do you go often?\nB: I go about once a month.",
     funFact:"The particle usage matters: 電車(でんしゃ)を降(お)りる (get off the train) vs. 山(やま)を降(お)りる (descend the mountain). In crowded Japanese trains, saying 降(お)ります (I am getting off) signals people to make way. The extended 降(お)りまーす (extended 'ma') is the characteristic call."},

    {type:"teach", trg:"迎(むか)えに行(い)く", src:"to go pick someone up", pos:"verb", gender:null,
     note:"迎(むか)える (to welcome/meet) + に行(い)く (to go to).\n空港(くうこう)に迎(むか)えに行(い)く = to go pick up at the airport.",
     example:"A: 空港(くうこう)に迎(むか)えに行(い)きます。\nB: 何時(なんじ)に着(つ)きますか？\nA: 誰(だれ)と行(い)きましたか？\nB: 友達(ともだち)と一緒(いっしょ)に行(い)きました。",
     exampleSrc:"A: I will go pick you up at the airport.\nB: What time does it arrive?\nA: Who did you go with?\nB: I went with a friend.",
     funFact:"迎(むか)えに行(い)く shows Japanese hospitality. Picking someone up (お迎(むか)え) and seeing them off (見送(みおく)り) are important social rituals. At airports, families wait at the arrival gate with signs. The お迎(むか)え (picking up) side and the 見送(みおく)り (seeing off) side of stations have different atmospheres."},

    {type:"teach", trg:"見送(みおく)る", src:"to see someone off / to say goodbye", pos:"verb", gender:null,
     note:"見(み)る (to see) + 送(おく)る (to send). 見送(みおく)り = seeing off.\nOpposite of 迎(むか)える.",
     example:"A: 駅(えき)まで見送(みおく)りに行(い)きます。\nB: ありがとう。寂(さみ)しくなりますね。\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
     exampleSrc:"A: I will go to the station to see you off.\nB: Thank you. I will miss you.\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
     funFact:"見送(みおく)り culture is deep in Japan. When someone leaves on a long trip, family and friends go to the station or airport. On train platforms, people wave until the train disappears. In business, junior staff 見送(みおく)り senior staff to elevators. Not doing so is considered rude."},

    {type:"teach", trg:"寄(よ)り道(みち)する", src:"to make a detour / to stop by somewhere", pos:"verb", gender:null,
     note:"寄(よ)り (stopping by) + 道(みち) (road). 寄(よ)り道(みち)しないで帰(かえ)ってね = come straight home.\nCasual and common.",
     example:"A: 帰(かえ)りに寄(よ)り道(みち)していい？\nB: うん、でも早(はや)く帰(かえ)ってきてね。\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
     exampleSrc:"A: Can I make a stop on the way home?\nB: Sure, but come home early.\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
     funFact:"寄(よ)り道(みち) is a beloved concept in Japanese culture. Parents tell children 寄(よ)り道(みち)しないで (do not make detours), but adults love 寄(よ)り道(みち). Stopping at a コンビニ or 居酒屋(いざかや) on the way home is quintessential Japanese daily life. The word carries a sense of pleasant wandering."},

    {type:"teach", trg:"迷(まよ)う", src:"to get lost / to be unable to decide", pos:"verb", gender:null,
     note:"道(みち)に迷(まよ)う = to get lost. 迷(まよ)う also means to hesitate.\n迷(まよ)ったら地図(ちず)を見(み)て = if lost, check the map.",
     example:"A: 道(みち)に迷(まよ)ってしまいました。\nB: スマホで地図(ちず)を見(み)ましょう。\nA: 私(わたし)も興味(きょうみ)があります。\nB: じゃあ、今度(こんど)一緒(いっしょ)にどうですか？",
     exampleSrc:"A: I got lost.\nB: Let us check the map on a smartphone.\nA: I am also interested.\nB: Then, how about doing it together next time?",
     funFact:"迷(まよ)う has two key meanings: physical (getting lost) and mental (being unable to decide). Both are common in daily Japanese. レストランのメニューで迷(まよ)う (being unable to decide from a restaurant menu) is such a frequent experience that Japanese people often just order おすすめ (recommendation)."},

    {type:"fb", s:"電車(でんしゃ)に{1}てしまいました。\n(I missed the train.)", a:"乗(の)り遅(おく)れ", opts:["乗(の)り遅(おく)れ","乗(の)り換(か)え","乗(の)り過(す)ごし","飛(と)び乗(の)り"], sSrc:"I missed the train.",
     hint:"This compound verb means being too late to board a departing vehicle."},

    {type:"teach", trg:"近道(ちかみち)", src:"shortcut", pos:"noun", gender:null,
     note:"近(ちか)い (near) + 道(みち) (road). 近道(ちかみち)をする = to take a shortcut.\nOpposite: 遠回(とおまわ)り (detour).",
     example:"A: 近道(ちかみち)を知(し)りませんか？\nB: この公園(こうえん)を抜(ぬ)けると早(はや)いですよ。\nA: どんな感(かん)じでしたか？\nB: 想像(そうぞう)していたよりずっと良(よ)かったです。",
     exampleSrc:"A: Do you know a shortcut?\nB: It is faster to cut through this park.\nA: What was it like?\nB: It was much better than I imagined.",
     funFact:"近道(ちかみち) is used both literally and figuratively. 成功(せいこう)への近道(ちかみち)はない (there is no shortcut to success) is a common expression. In video games, 近道(ちかみち) (shortcuts) are highly valued. The concept reflects the Japanese appreciation for efficiency balanced with proper process."},

    {type:"teach", trg:"遠回(とおまわ)り", src:"detour / roundabout way", pos:"noun", gender:null,
     note:"遠(とお)い (far) + 回(まわ)る (to go around). 遠回(とおまわ)りする = to take a detour.\nOpposite: 近道(ちかみち).",
     example:"A: 工事中(こうじちゅう)なので遠回(とおまわ)りします。\nB: 時間(じかん)がかかりますね。\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
     exampleSrc:"A: There is construction so I will take a detour.\nB: It will take time.\nA: What did you eat?\nB: I ate the local specialty.",
     funFact:"遠回(とおまわ)り is also used metaphorically. 人生(じんせい)の遠回(とおまわ)り (a detour in life) means taking a longer path, but Japanese culture often views this positively: experience gained on 遠回(とおまわ)り makes you wiser. The proverb 急(いそ)がば回(まわ)れ (if in a hurry, go around) endorses the safe route."},

    {type:"match", pairs:[{trg:"乗(の)り換(か)える",src:"to transfer"},{trg:"乗(の)り遅(おく)れる",src:"to miss (a vehicle)"},{trg:"降(お)りる",src:"to get off"},{trg:"迎(むか)えに行(い)く",src:"to go pick up"},{trg:"見送(みおく)る",src:"to see off"}],
     hint:"Match each travel verb with its English meaning."},

    {type:"mc", q:"What is the opposite of 近道(ちかみち) (shortcut)?", opts:["迷(まよ)う","遠回(とおまわ)り","寄(よ)り道(みち)","突(つ)き当(あ)たり"], ans:"遠回(とおまわ)り",
     hint:"This word combines 'far' with 'going around' for a longer alternative route."},

    {type:"fb", s:"空港(くうこう)に{1}に行(い)きます。\n(I will go pick you up at the airport.)", a:"迎(むか)え", opts:["迎(むか)え","見送(みおく)り","寄(よ)り道(みち)","乗(の)り換(か)え"], sSrc:"I will go pick you up at the airport.",
     hint:"This word means to go welcome or meet someone arriving."},

    {type:"mc", q:"What does 寄(よ)り道(みち)する mean?", opts:["To take a shortcut","To walk straight","To stop by somewhere on the way","To get lost"], ans:"To stop by somewhere on the way",
     hint:"Parents often tell children not to do this when they should come straight home."}
  ,{type:"fb", s:"次(つぎ)の駅(えき)で地下鉄(ちかてつ)を{1}てバスに乗(の)ります。",
     a:["降(お)りる"],
     opts:["降(お)りる","乗(の)る","乗(の)り換(か)える","飛(と)び乗(の)る"],
     hint:"At the next station you step off the subway and board a bus. This intransitive verb means 'to get off' or 'to disembark.'",
     sSrc:"I will get off the subway at the next station and take a bus."}
  ,{type:"fb", s:"初(はじ)めて来(き)た街(まち)で道(みち)に{1}てしまいました。",
     a:["迷(まよ)う"],
     opts:["迷(まよ)う","突(つ)き当(あ)たる","寄(よ)り道(みち)する","通(とお)り過(す)ぎる"],
     hint:"It was your first time in this town and you could not find your way. This verb means 'to get lost.'",
     sSrc:"I ended up {1} in a town I had never been to before."}
  ,{type:"match",pairs:[{trg:"通(とお)り過(す)ぎる",src:"to pass by / to go past"},{trg:"飛(と)び乗(の)る",src:"to jump on (a departing vehicle)"},{trg:"突(つ)き当(あ)たる",src:"to reach the end / to come to a dead end"},{trg:"近道(ちかみち)",src:"shortcut"}]}]
};
export default BATCH8_L1;
