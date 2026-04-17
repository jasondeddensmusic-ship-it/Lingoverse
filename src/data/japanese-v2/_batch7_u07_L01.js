// Batch 7 – Unit 07 (A2.1 Time & Daily Routine): Daily Routine Verbs
const BATCH7_L1 = {
  id:"jav2_u07l_b7_1", title:"毎日(まいにち)の動(うご)き", icon:"🔄", xp:15, board:true,
  steps:[
    {type:"intro", title:"毎日(まいにち)の動(うご)き",
     desc:"Expand your daily routine vocabulary with verbs for getting ready, commuting, and winding down. These high-frequency actions describe a typical Japanese day from start to finish.",
     goals:["Describe morning preparation activities","Talk about commuting and work routines","Use evening and bedtime vocabulary"]},

    {type:"teach", trg:"起(お)きる", src:"to wake up / to get up", pos:"verb", gender:null,
     note:"Group 2 verb. 六時(ろくじ)に起(お)きる = to wake up at 6.\n早起(はやお)き = early rising.",
     example:"A: 毎朝(まいあさ)何時(なんじ)に起(お)きますか？\nB: 六時(ろくじ)に起(お)きます。",
     exampleSrc:"A: What time do you wake up every morning?\nB: I wake up at 6.",
     funFact:"早起(はやお)きは三文(さんもん)の得(とく) (early rising is worth three mon) is the Japanese version of 'the early bird catches the worm.' Mon was old currency. Japanese business culture values 早起(はやお)き, and many executives famously wake at 4 or 5 AM."},

    {type:"teach", trg:"顔(かお)を洗(あら)う", src:"to wash one's face", pos:"verb", gender:null,
     note:"顔(かお) = face, 洗(あら)う = to wash.\nThe first thing many Japanese people do after waking.",
     example:"A: 起(お)きたらまず顔(かお)を洗(あら)います。\nB: 水(みず)ですか？お湯(ゆ)ですか？",
     exampleSrc:"A: When I wake up, I first wash my face.\nB: With cold water? Or hot water?",
     funFact:"Washing your face (顔(かお)を洗(あら)う) with cold water is a traditional Japanese wake-up ritual. Many people believe cold water tightens pores and refreshes the mind. Japanese skincare (スキンケア) routines are elaborate, often involving multiple steps after face washing."},

    {type:"teach", trg:"歯(は)を磨(みが)く", src:"to brush one's teeth", pos:"verb", gender:null,
     note:"歯(は) = teeth, 磨(みが)く = to polish/brush.\n歯磨(はみが)き = toothpaste / tooth brushing.",
     example:"A: 歯(は)を磨(みが)きましたか？\nB: はい、もう磨(みが)きました。",
     exampleSrc:"A: Did you brush your teeth?\nB: Yes, I already brushed them.",
     funFact:"Japanese people brush their teeth after lunch too, not just morning and night. Many workers keep a toothbrush at the office. School children brush after school lunch (給食(きゅうしょく)). The verb 磨(みが)く means 'to polish,' reflecting how Japanese view dental care as polishing."},

    {type:"teach", trg:"着替(きが)える", src:"to change clothes", pos:"verb", gender:null,
     note:"Group 2 verb. 着替(きが)え = a change of clothes (noun).\n着(き) = wearing, 替(か)える = to change.",
     example:"A: 仕事(しごと)のあと着替(きが)えますか？\nB: はい、すぐに楽(らく)な服(ふく)に着替(きが)えます。",
     exampleSrc:"A: Do you change clothes after work?\nB: Yes, I immediately change into comfortable clothes.",
     funFact:"着替(きが)える is essential in Japanese culture because of frequent outfit changes. Students change into indoor shoes (上履(うわば)き) at school. Workers may change into uniforms. At traditional inns (旅館(りょかん)), guests change into 浴衣(ゆかた) upon arrival. Changing clothes marks transitions between social roles."},

    {type:"teach", trg:"出(で)かける", src:"to go out / to leave", pos:"verb", gender:null,
     note:"Group 2 verb. お出(で)かけ = going out (polite noun).\n出(で)かける前(まえ)に = before going out.",
     example:"A: 何時(なんじ)に出(で)かけますか？\nB: 八時(はちじ)に出(で)かけます。",
     exampleSrc:"A: What time do you leave?\nB: I leave at 8.",
     funFact:"お出(で)かけですか？ (Going out?) is a common greeting neighbors exchange. The response is ちょっとそこまで (just nearby), which is deliberately vague. This ritual exchange shows neighborly awareness without being nosy, a classic Japanese social balance."},

    {type:"teach", trg:"乗(の)り換(か)える", src:"to transfer (trains)", pos:"verb", gender:null,
     note:"Group 2 verb. 乗(の)り換(か)え = transfer (noun).\n渋谷(しぶや)で乗(の)り換(か)えます = I transfer at Shibuya.",
     example:"A: 新宿(しんじゅく)で乗(の)り換(か)えてください。\nB: 何線(なにせん)に乗(の)り換(か)えますか？",
     exampleSrc:"A: Please transfer at Shinjuku.\nB: Which line do I transfer to?",
     funFact:"乗(の)り換(か)え (transfer) is a survival word in Japan's complex train system. Tokyo alone has 882 stations on 100+ lines run by different companies. 乗(の)り換(か)えアプリ (transfer apps) are essential. Missing a 乗(の)り換(か)え can add 30 minutes to your commute."},

    {type:"teach", trg:"戻(もど)る", src:"to return / to go back", pos:"verb", gender:null,
     note:"Group 1 verb. Different from 帰(かえ)る (go home).\n元(もと)に戻(もど)る = to return to the original state.",
     example:"A: 三時(さんじ)に戻(もど)ります。\nB: わかりました。お待(ま)ちしています。",
     exampleSrc:"A: I will be back at 3.\nB: Understood. I will wait.",
     funFact:"戻(もど)る implies returning to a specific place (office, desk) while 帰(かえ)る means going home. An office worker says ちょっと出(で)てきます (I will step out briefly) and later 戻(もど)りました (I am back). The distinction matters: 戻(もど)る is temporary, 帰(かえ)る is final for the day."},

    {type:"teach", trg:"休(やす)む", src:"to rest / to take a day off", pos:"verb", gender:null,
     note:"Group 1 verb. 休(やす)み = rest/day off (noun).\n今日(きょう)は休(やす)みます = I am taking today off.",
     example:"A: 今日(きょう)は会社(かいしゃ)を休(やす)みます。\nB: 風邪(かぜ)ですか？お大事(だいじ)に。",
     exampleSrc:"A: I am taking off from work today.\nB: A cold? Take care.",
     funFact:"休(やす)む covers both resting and taking time off. Despite generous vacation allowances, Japanese workers notoriously do not use all their 休(やす)み. The term 有給休暇(ゆうきゅうきゅうか) (paid leave) exists, but social pressure to not burden colleagues (迷惑(めいわく)をかけない) keeps usage low."},

    {type:"teach", trg:"掃除(そうじ)する", src:"to clean", pos:"verb", gender:null,
     note:"Suru verb. 掃除機(そうじき) = vacuum cleaner.\n部屋(へや)を掃除(そうじ)する = to clean a room.",
     example:"A: 今日(きょう)は掃除(そうじ)しましょう。\nB: 私(わたし)は台所(だいどころ)を掃除(そうじ)します。",
     exampleSrc:"A: Let us clean today.\nB: I will clean the kitchen.",
     funFact:"掃除(そうじ) is a daily school activity in Japan. Students clean their own classrooms, hallways, and toilets. There are no janitors in most schools. This practice teaches responsibility and respect for shared spaces. Companies also have 掃除(そうじ)タイム before work."},

    {type:"teach", trg:"洗濯(せんたく)する", src:"to do laundry", pos:"verb", gender:null,
     note:"Suru verb. 洗濯機(せんたくき) = washing machine.\n洗濯物(せんたくもの)を干(ほ)す = to hang laundry to dry.",
     example:"A: 洗濯物(せんたくもの)がたまっていますね。\nB: 今日(きょう)洗濯(せんたく)しますよ。",
     exampleSrc:"A: The laundry has piled up.\nB: I will do laundry today.",
     funFact:"Most Japanese households hang laundry outside to dry rather than using dryers. Checking the weather forecast for 洗濯(せんたく)日和(びより) (good laundry weather) is a daily habit. Weather reports even include a 洗濯(せんたく)指数(しすう) (laundry index) telling you how well clothes will dry that day."},

    {type:"teach", trg:"片付(かたづ)ける", src:"to tidy up / to put away", pos:"verb", gender:null,
     note:"Group 2 verb. 片付(かたづ)けてください = please tidy up.\n片付(かたづ)け = tidying (noun).",
     example:"A: おもちゃを片付(かたづ)けなさい。\nB: はーい、今(いま)片付(かたづ)けます。",
     exampleSrc:"A: Put away your toys.\nB: Okaaay, I am tidying up now.",
     funFact:"近藤麻理恵(こんどうまりえ) (Marie Kondo) made 片付(かたづ)け world-famous with her 'KonMari method.' Her philosophy of keeping only things that 'spark joy' (ときめく) reflects deep Japanese values about orderly living. The verb 片付(かたづ)ける combines 片(かた) (form/shape) and 付(つ)ける (to attach), meaning to put things in their proper form."},

    {type:"teach", trg:"眠(ねむ)い", src:"sleepy", pos:"adj", gender:null,
     note:"I-adjective. 眠(ねむ)くない = not sleepy.\n眠(ねむ)い is different from 疲(つか)れた (tired).",
     example:"A: 眠(ねむ)いですか？\nB: はい、昨夜(ゆうべ)あまり寝(ね)ませんでした。",
     exampleSrc:"A: Are you sleepy?\nB: Yes, I did not sleep much last night.",
     funFact:"居眠(いねむ)り (sleeping while present) is socially acceptable in Japan, especially on trains and even in meetings. It is seen as a sign of working so hard that your body forces you to sleep. 眠(ねむ)い on a train is completely normal; no one will judge you."},

    {type:"teach", trg:"お風呂(ふろ)に入(はい)る", src:"to take a bath", pos:"verb", gender:null,
     note:"お風呂(ふろ) = bath. 入(はい)る = to enter.\nJapanese bathe in the evening, not the morning.",
     example:"A: お風呂(ふろ)に入(はい)りましたか？\nB: まだです。これから入(はい)ります。",
     exampleSrc:"A: Have you taken a bath?\nB: Not yet. I will take one now.",
     funFact:"The Japanese bath (お風呂(ふろ)) is for soaking and relaxation, not washing. You wash and rinse OUTSIDE the tub first, then soak in clean hot water. The whole family uses the same water, one after another. This tradition saves water and makes bath time a meditative ritual."},

    {type:"teach", trg:"寝(ね)る", src:"to sleep / to go to bed", pos:"verb", gender:null,
     note:"Group 2 verb. 眠(ねむ)る (to sleep) vs 寝(ね)る (to lie down/go to bed).\nもう寝(ね)ましょう = let us go to bed.",
     example:"A: いつも何時(なんじ)に寝(ね)ますか？\nB: 十一時(じゅういちじ)ごろ寝(ね)ます。",
     exampleSrc:"A: What time do you usually go to bed?\nB: I go to bed around 11.",
     funFact:"Japan is one of the most sleep-deprived nations. Average sleep is under 7 hours. The word 寝不足(ねぶそく) (sleep deficiency) describes a national condition. Despite this, 寝(ね)る前(まえ)に (before sleeping) rituals like reading, stretching, or drinking herbal tea are cherished by those who practice them."},

    // Quiz steps
    {type:"mc", q:"歯(は)を磨(みが)く means:",
     opts:["To brush teeth","To wash face","To comb hair","To change clothes"],
     ans:"To brush teeth",
     hint:"歯(は) means t..., and 磨(みが)く means to polish or b.... Japanese people do this after lunch too."},

    {type:"match", pairs:[
      {trg:"起(お)きる", src:"to wake up"},
      {trg:"出(で)かける", src:"to go out"},
      {trg:"戻(もど)る", src:"to return"},
      {trg:"休(やす)む", src:"to rest"},
      {trg:"寝(ね)る", src:"to go to bed"}
    ]},

    {type:"fb", s:"渋谷(しぶや)で{1}てください。山手線(やまのてせん)に乗(の)ります。",
     a:["乗(の)り換(か)え"],
     opts:["乗(の)り換(か)え","出(で)かけ","戻(もど)っ","休(やす)ん"],
     hint:"You need to change from one train line to another at Shibuya. This verb means 'to transfer.'",
     sSrc:"Please {1} at Shibuya. Take the Yamanote Line."},

    {type:"mc", q:"Japanese students clean their own schools because:",
     opts:["It teaches responsibility and respect for shared spaces","There are not enough janitors","It is a punishment","Parents requested it"],
     ans:"It teaches responsibility and respect for shared spaces",
     hint:"掃除(そうじ) in schools is a valued educational tradition, not a cost-saving measure."},

    {type:"fb", s:"お風呂(ふろ)に{1}前(まえ)に、体(からだ)を洗(あら)います。",
     a:["入(はい)る"],
     opts:["入(はい)る","寝(ね)る","出(で)かける","戻(もど)る"],
     hint:"Before entering the bathtub, you wash your body outside the tub first.",
     sSrc:"Before {1} the bath, I wash my body."},

    {type:"mc", q:"戻(もど)る vs 帰(かえ)る: which describes returning to the office after lunch?",
     opts:["戻(もど)る (temporary return to a place)","帰(かえ)る (going home for the day)","出(で)かける (going out)","乗(の)り換(か)える (transferring)"],
     ans:"戻(もど)る (temporary return to a place)",
     hint:"This verb means returning to a specific location temporarily, not going home."},

    {type:"match", pairs:[
      {trg:"掃除(そうじ)する", src:"to clean"},
      {trg:"洗濯(せんたく)する", src:"to do laundry"},
      {trg:"片付(かたづ)ける", src:"to tidy up"},
      {trg:"着替(きが)える", src:"to change clothes"},
      {trg:"顔(かお)を洗(あら)う", src:"to wash face"}
    ]},

    {type:"fb", s:"昨夜(ゆうべ)あまり寝(ね)なかったので、今日(きょう)は{1}です。",
     a:["眠(ねむ)い"],
     opts:["眠(ねむ)い","寒(さむ)い","暑(あつ)い","痛(いた)い"],
     hint:"You did not sleep much last night, so today you feel drowsy. This i-adjective means 'sleepy.'",
     sSrc:"I did not sleep much last night, so today I am {1}."}
  ]
};
export default BATCH7_L1;
