// Batch 8 – Unit 13 (A2.1 Experience): Travel & Transportation Verbs
const BATCH8_L1 = {
  id:"jav2_u13l_b8_1", title:"いどうのどうし", icon:"🚃", xp:15, board:true,
  steps:[
    {type:"intro", title:"いどうのどうし",
     desc:"Learn compound and specialized movement verbs essential for travel. These verbs combine with other words to express detailed transportation and movement actions.",
     goals:["Use compound movement verbs naturally","Describe transfer and transit actions","Navigate Japanese transportation vocabulary"]},

    {type:"teach", trg:"のりかえる", src:"to transfer / to change (trains/buses)", pos:"verb", gender:null,
     note:"のる (to ride) + かえる (to change). のりかえ = transfer.\nのりかええき = transfer station.",
     example:"A: しぶやでのりかえてください。\nB: なんばんせんですか？\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
     exampleSrc:"A: Please transfer at Shibuya.\nB: Which platform?\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
     funFact:"のりかえ is a daily reality in Tokyo where the train system has dozens of lines by different companies. Transfer walks can be 10+ minutes underground. のりかえアプリ (transfer apps) are essential. The phrase のりかえなし (no transfers) is a selling point for train routes."},

    {type:"teach", trg:"のりおくれる", src:"to miss (a train/bus/flight)", pos:"verb", gender:null,
     note:"のる (to ride) + おくれる (to be late). Compound verb.\nでんしゃにのりおくれた = I missed the train.",
     example:"A: でんしゃにのりおくれました。\nB: つぎのでんしゃはごふんごです。\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
     exampleSrc:"A: I missed the train.\nB: The next train is in five minutes.\nA: Do you recommend it?\nB: Yes, please try it.",
     funFact:"のりおくれる is less stressful in Japan because trains come so frequently, often every 2 to 5 minutes on major lines. However, のりおくれる on the しんかんせん (bullet train) or the しゅうでん (last train) is serious. Missing the しゅうでん means sleeping in a カプセルホテル or a まんがきっさ."},

    {type:"teach", trg:"とおりすぎる", src:"to pass by / to go past", pos:"verb", gender:null,
     note:"とおる (to pass) + すぎる (to exceed). えきをとおりすぎる = to pass the station.\nAlso used metaphorically.",
     example:"A: えきをとおりすぎてしまいました。\nB: つぎのえきでおりてもどりましょう。\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
     exampleSrc:"A: I accidentally passed the station.\nB: Let us get off at the next station and go back.\nA: Shall we go together?\nB: That sounds good. Let's go.",
     funFact:"とおりすぎる on a train is called のりすごし (riding past your stop). It happens easily when you fall asleep on the train, a common Japanese phenomenon. Some railway companies announce のりすごしにごちゅうい (please be careful not to ride past your stop)."},

    {type:"teach", trg:"とびのる", src:"to jump on (a departing vehicle)", pos:"verb", gender:null,
     note:"とぶ (to jump) + のる (to ride). Implies barely making it.\nかけこみじょうしゃ = last-second boarding.",
     example:"A: でんしゃにとびのりました。\nB: あぶないですよ。きをつけてください。\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
     exampleSrc:"A: I jumped onto the train at the last second.\nB: That is dangerous. Please be careful.\nA: Where do you recommend?\nB: I recommend Kyoto.",
     funFact:"かけこみじょうしゃ (rushing to board) is officially discouraged on Japanese trains. Announcements say かけこみじょうしゃはおやめください (please refrain from rushing to board). Despite this, it is a daily occurrence. Station staff sometimes push passengers in during rush hour on the most crowded lines."},

    {type:"teach", trg:"つきあたる", src:"to reach the end / to come to a dead end", pos:"verb", gender:null,
     note:"つく (to arrive) + あたる (to hit). つきあたり = dead end/T-junction.\nUsed in directions: つきあたりをみぎ.",
     example:"A: このみちをまっすぐいくとつきあたります。\nB: つきあたりをひだりですか？\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
     exampleSrc:"A: If you go straight on this road, you will reach the end.\nB: Turn left at the end?\nA: What was the best part?\nB: The food was the most delicious.",
     funFact:"つきあたり is one of the most common direction words in Japanese. Unlike English 'dead end' which sounds negative, つきあたり is neutral and practical. It simply means the road hits something and you must turn. Japanese streets often lack names, so direction-giving relies on landmarks and つきあたり."},

    {type:"mc", q:"What does のりかえる mean?", opts:["To transfer between trains/buses","To miss a train","To ride past your stop","To jump on a departing train"], ans:"To transfer between trains/buses",
     hint:"This compound verb combines 'to ride' with 'to change' for switching b... vehicles."},

    {type:"teach", trg:"おりる", src:"to get off / to descend / to disembark", pos:"verb", gender:null,
     note:"でんしゃをおりる = to get off the train.\nつぎのえきでおります = I will get off at the next station.",
     example:"A: つぎのえきでおります。\nB: おさきにどうぞ。\nA: よく行(い)きますか？\nB: 月(つき)に一回(いっかい)ぐらい行(い)きます。",
     exampleSrc:"A: I will get off at the next station.\nB: After you.\nA: Do you go often?\nB: I go about once a month.",
     funFact:"The particle usage matters: でんしゃをおりる (get off the train) vs. やまをおりる (descend the mountain). In crowded Japanese trains, saying おります (I am getting off) signals people to make way. The past form おりまーす (extended 'ma') is the characteristic call."},

    {type:"teach", trg:"むかえにいく", src:"to go pick someone up", pos:"verb", gender:null,
     note:"むかえる (to welcome/meet) + にいく (to go to).\nくうこうにむかえにいく = to go pick up at the airport.",
     example:"A: くうこうにむかえにいきます。\nB: なんじにつきますか？\nA: 誰(だれ)と行(い)きましたか？\nB: 友達(ともだち)と一緒(いっしょ)に行(い)きました。",
     exampleSrc:"A: I will go pick you up at the airport.\nB: What time does it arrive?\nA: Who did you go with?\nB: I went with a friend.",
     funFact:"むかえにいく shows Japanese hospitality. Picking someone up (むかえ) and seeing them off (みおくり) are important social rituals. At airports, families wait at the arrival gate with signs. The おむかえ (picking up) side and the みおくり (seeing off) side of stations have different atmospheres."},

    {type:"teach", trg:"みおくる", src:"to see someone off / to say goodbye", pos:"verb", gender:null,
     note:"みる (to see) + おくる (to send). みおくり = seeing off.\nOpposite of むかえる.",
     example:"A: えきまでみおくりにいきます。\nB: ありがとう。さみしくなりますね。\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
     exampleSrc:"A: I will go to the station to see you off.\nB: Thank you. I will miss you.\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
     funFact:"みおくり culture is deep in Japan. When someone leaves on a long trip, family and friends go to the station or airport. On train platforms, people wave until the train disappears. In business, junior staff みおくり senior staff to elevators. Not doing so is considered rude."},

    {type:"teach", trg:"よりみちする", src:"to make a detour / to stop by somewhere", pos:"verb", gender:null,
     note:"より (stopping by) + みち (road). よりみちしないでかえってね = come straight home.\nCasual and common.",
     example:"A: かえりによりみちしていい？\nB: うん、でもはやくかえってきてね。\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
     exampleSrc:"A: Can I make a stop on the way home?\nB: Sure, but come home early.\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
     funFact:"よりみち is a beloved concept in Japanese culture. Parents tell children よりみちしないで (do not make detours), but adults love よりみち. Stopping at a コンビニ or いざかや on the way home is quintessential Japanese daily life. The word carries a sense of pleasant wandering."},

    {type:"teach", trg:"まよう", src:"to get lost / to be unable to decide", pos:"verb", gender:null,
     note:"みちにまよう = to get lost. まよう also means to hesitate.\nまよったらちずをみて = if lost, check the map.",
     example:"A: みちにまよってしまいました。\nB: スマホでちずをみましょう。\nA: 私(わたし)も興味(きょうみ)があります。\nB: じゃあ、今度(こんど)一緒(いっしょ)にどうですか？",
     exampleSrc:"A: I got lost.\nB: Let us check the map on a smartphone.\nA: I am also interested.\nB: Then, how about doing it together next time?",
     funFact:"まよう has two key meanings: physical (getting lost) and mental (being unable to decide). Both are common in daily Japanese. レストランのメニューでまよう (being unable to decide from a restaurant menu) is such a frequent experience that Japanese people often just order おすすめ (recommendation)."},

    {type:"fb", s:"でんしゃに{1}てしまいました。\n(I missed the train.)", a:"のりおくれ", opts:["のりおくれ","のりかえ","のりすごし","とびのり"], sSrc:"I missed the train.",
     hint:"This compound verb means being too late to board a departing vehicle."},

    {type:"teach", trg:"ちかみち", src:"shortcut", pos:"noun", gender:null,
     note:"ちかい (near) + みち (road). ちかみちをする = to take a shortcut.\nOpposite: とおまわり (detour).",
     example:"A: ちかみちをしりませんか？\nB: このこうえんをぬけるとはやいですよ。\nA: どんな感(かん)じでしたか？\nB: 想像(そうぞう)していたよりずっと良(よ)かったです。",
     exampleSrc:"A: Do you know a shortcut?\nB: It is faster to cut through this park.\nA: What was it like?\nB: It was much better than I imagined.",
     funFact:"ちかみち is used both literally and figuratively. せいこうへのちかみちはない (there is no shortcut to success) is a common expression. In video games, ちかみち (shortcuts) are highly valued. The concept reflects the Japanese appreciation for efficiency balanced with proper process."},

    {type:"teach", trg:"とおまわり", src:"detour / roundabout way", pos:"noun", gender:null,
     note:"とおい (far) + まわる (to go around). とおまわりする = to take a detour.\nOpposite: ちかみち.",
     example:"A: こうじちゅうなのでとおまわりします。\nB: じかんがかかりますね。\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
     exampleSrc:"A: There is construction so I will take a detour.\nB: It will take time.\nA: What did you eat?\nB: I ate the local specialty.",
     funFact:"とおまわり is also used metaphorically. じんせいのとおまわり (a detour in life) means taking a longer path, but Japanese culture often views this positively: experience gained on とおまわり makes you wiser. The proverb いそがばまわれ (if in a hurry, go around) endorses the safe route."},

    {type:"match", pairs:[{trg:"のりかえる",src:"to transfer"},{trg:"のりおくれる",src:"to miss (a vehicle)"},{trg:"おりる",src:"to get off"},{trg:"むかえにいく",src:"to go pick up"},{trg:"みおくる",src:"to see off"}],
     hint:"Match each travel verb with its English meaning."},

    {type:"mc", q:"What is the opposite of ちかみち (shortcut)?", opts:["とおまわり","よりみち","つきあたり","まよう"], ans:"とおまわり",
     hint:"This word combines 'far' with 'going around' for a longer alternative route."},

    {type:"fb", s:"くうこうに{1}にいきます。\n(I will go pick you up at the airport.)", a:"むかえ", opts:["むかえ","みおくり","よりみち","のりかえ"], sSrc:"I will go pick you up at the airport.",
     hint:"This word means to go welcome or meet someone arriving."},

    {type:"mc", q:"What does よりみちする mean?", opts:["To stop by somewhere on the way","To get lost","To take a shortcut","To walk straight"], ans:"To stop by somewhere on the way",
     hint:"Parents often tell children not to do this when they should come straight home."}
  ]
};
export default BATCH8_L1;
