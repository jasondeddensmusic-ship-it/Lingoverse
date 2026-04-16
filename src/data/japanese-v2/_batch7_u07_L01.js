// Batch 7 – Unit 07 (A2.1 Time & Daily Routine): Daily Routine Verbs
const BATCH7_L1 = {
  id:"jav2_u07l_b7_1", title:"まいにちのうごき", icon:"🔄", xp:15, board:true,
  steps:[
    {type:"intro", title:"まいにちのうごき",
     desc:"Expand your daily routine vocabulary with verbs for getting ready, commuting, and winding down. These high-frequency actions describe a typical Japanese day from start to finish.",
     goals:["Describe morning preparation activities","Talk about commuting and work routines","Use evening and bedtime vocabulary"]},

    {type:"teach", trg:"おきる", src:"to wake up / to get up", pos:"verb", gender:null,
     note:"Group 2 verb. ろくじにおきる = to wake up at 6.\nはやおき = early rising.",
     example:"A: まいあさなんじにおきますか？\nB: ろくじにおきます。",
     exampleSrc:"A: What time do you wake up every morning?\nB: I wake up at 6.",
     funFact:"はやおきはさんもんのとく (early rising is worth three mon) is the Japanese version of 'the early bird catches the worm.' Mon was old currency. Japanese business culture values はやおき, and many executives famously wake at 4 or 5 AM."},

    {type:"teach", trg:"かおをあらう", src:"to wash one's face", pos:"verb", gender:null,
     note:"かお = face, あらう = to wash.\nThe first thing many Japanese people do after waking.",
     example:"A: おきたらまずかおをあらいます。\nB: みずですか？おゆですか？",
     exampleSrc:"A: When I wake up, I first wash my face.\nB: With cold water? Or hot water?",
     funFact:"Washing your face (かおをあらう) with cold water is a traditional Japanese wake-up ritual. Many people believe cold water tightens pores and refreshes the mind. Japanese skincare (スキンケア) routines are elaborate, often involving multiple steps after face washing."},

    {type:"teach", trg:"はをみがく", src:"to brush one's teeth", pos:"verb", gender:null,
     note:"は = teeth, みがく = to polish/brush.\nはみがき = toothpaste / tooth brushing.",
     example:"A: はをみがきましたか？\nB: はい、もうみがきました。",
     exampleSrc:"A: Did you brush your teeth?\nB: Yes, I already brushed them.",
     funFact:"Japanese people brush their teeth after lunch too, not just morning and night. Many workers keep a toothbrush at the office. School children brush after school lunch (きゅうしょく). The verb みがく means 'to polish,' reflecting how Japanese view dental care as polishing."},

    {type:"teach", trg:"きがえる", src:"to change clothes", pos:"verb", gender:null,
     note:"Group 2 verb. きがえ = a change of clothes (noun).\nき = wearing, かえる = to change.",
     example:"A: しごとのあときがえますか？\nB: はい、すぐにらくなふくにきがえます。",
     exampleSrc:"A: Do you change clothes after work?\nB: Yes, I immediately change into comfortable clothes.",
     funFact:"きがえる is essential in Japanese culture because of frequent outfit changes. Students change into indoor shoes (うわばき) at school. Workers may change into uniforms. At traditional inns (りょかん), guests change into yukata upon arrival. Changing clothes marks transitions between social roles."},

    {type:"teach", trg:"でかける", src:"to go out / to leave", pos:"verb", gender:null,
     note:"Group 2 verb. おでかけ = going out (polite noun).\nでかけるまえに = before going out.",
     example:"A: なんじにでかけますか？\nB: はちじにでかけます。",
     exampleSrc:"A: What time do you leave?\nB: I leave at 8.",
     funFact:"おでかけですか？ (Going out?) is a common greeting neighbors exchange. The response is ちょっとそこまで (just nearby), which is deliberately vague. This ritual exchange shows neighborly awareness without being nosy, a classic Japanese social balance."},

    {type:"teach", trg:"のりかえる", src:"to transfer (trains)", pos:"verb", gender:null,
     note:"Group 2 verb. のりかえ = transfer (noun).\nしぶやでのりかえます = I transfer at Shibuya.",
     example:"A: しんじゅくでのりかえてください。\nB: なにせんにのりかえますか？",
     exampleSrc:"A: Please transfer at Shinjuku.\nB: Which line do I transfer to?",
     funFact:"のりかえ (transfer) is a survival word in Japan's complex train system. Tokyo alone has 882 stations on 100+ lines run by different companies. のりかえアプリ (transfer apps) are essential. Missing a のりかえ can add 30 minutes to your commute."},

    {type:"teach", trg:"もどる", src:"to return / to go back", pos:"verb", gender:null,
     note:"Group 1 verb. Different from かえる (go home).\nもとにもどる = to return to the original state.",
     example:"A: さんじにもどります。\nB: わかりました。おまちしています。",
     exampleSrc:"A: I will be back at 3.\nB: Understood. I will wait.",
     funFact:"もどる implies returning to a specific place (office, desk) while かえる means going home. An office worker says ちょっとでてきます (I will step out briefly) and later もどりました (I am back). The distinction matters: もどる is temporary, かえる is final for the day."},

    {type:"teach", trg:"やすむ", src:"to rest / to take a day off", pos:"verb", gender:null,
     note:"Group 1 verb. やすみ = rest/day off (noun).\nきょうはやすみます = I am taking today off.",
     example:"A: きょうはかいしゃをやすみます。\nB: かぜですか？おだいじに。",
     exampleSrc:"A: I am taking off from work today.\nB: A cold? Take care.",
     funFact:"やすむ covers both resting and taking time off. Despite generous vacation allowances, Japanese workers notoriously do not use all their やすみ. The term 有給休暇 (ゆうきゅうきゅうか, paid leave) exists, but social pressure to not burden colleagues (迷惑をかけない) keeps usage low."},

    {type:"teach", trg:"そうじする", src:"to clean", pos:"verb", gender:null,
     note:"Suru verb. そうじき = vacuum cleaner.\nへやをそうじする = to clean a room.",
     example:"A: きょうはそうじしましょう。\nB: わたしはだいどころをそうじします。",
     exampleSrc:"A: Let us clean today.\nB: I will clean the kitchen.",
     funFact:"そうじ (掃除) is a daily school activity in Japan. Students clean their own classrooms, hallways, and toilets. There are no janitors in most schools. This practice teaches responsibility and respect for shared spaces. Companies also have そうじタイム before work."},

    {type:"teach", trg:"せんたくする", src:"to do laundry", pos:"verb", gender:null,
     note:"Suru verb. せんたくき = washing machine.\nせんたくものをほす = to hang laundry to dry.",
     example:"A: せんたくものがたまっていますね。\nB: きょうせんたくしますよ。",
     exampleSrc:"A: The laundry has piled up.\nB: I will do laundry today.",
     funFact:"Most Japanese households hang laundry outside to dry rather than using dryers. Checking the weather forecast for せんたくびより (good laundry weather) is a daily habit. Weather reports even include a せんたくindex telling you how well clothes will dry that day."},

    {type:"teach", trg:"かたづける", src:"to tidy up / to put away", pos:"verb", gender:null,
     note:"Group 2 verb. かたづけてください = please tidy up.\nかたづけ = tidying (noun).",
     example:"A: おもちゃをかたづけなさい。\nB: はーい、いまかたづけます。",
     exampleSrc:"A: Put away your toys.\nB: Okaaay, I am tidying up now.",
     funFact:"Marie Kondo (こんまり) made かたづけ world-famous with her 'KonMari method.' Her philosophy of keeping only things that 'spark joy' (ときめく) reflects deep Japanese values about orderly living. The verb かたづける combines かた (form/shape) and つける (to attach), meaning to put things in their proper form."},

    {type:"teach", trg:"ねむい", src:"sleepy", pos:"adj", gender:null,
     note:"I-adjective. ねむくない = not sleepy.\nねむい is different from つかれた (tired).",
     example:"A: ねむいですか？\nB: はい、ゆうべあまりねませんでした。",
     exampleSrc:"A: Are you sleepy?\nB: Yes, I did not sleep much last night.",
     funFact:"Inemuri (居眠り, sleeping while present) is socially acceptable in Japan, especially on trains and even in meetings. It is seen as a sign of working so hard that your body forces you to sleep. ねむい on a train is completely normal; no one will judge you."},

    {type:"teach", trg:"おふろにはいる", src:"to take a bath", pos:"verb", gender:null,
     note:"おふろ = bath. はいる = to enter.\nJapanese bathe in the evening, not the morning.",
     example:"A: おふろにはいりましたか？\nB: まだです。これからはいります。",
     exampleSrc:"A: Have you taken a bath?\nB: Not yet. I will take one now.",
     funFact:"The Japanese bath (おふろ) is for soaking and relaxation, not washing. You wash and rinse OUTSIDE the tub first, then soak in clean hot water. The whole family uses the same water, one after another. This tradition saves water and makes bath time a meditative ritual."},

    {type:"teach", trg:"ねる", src:"to sleep / to go to bed", pos:"verb", gender:null,
     note:"Group 2 verb. ねむる (to sleep) vs ねる (to lie down/go to bed).\nもうねましょう = let us go to bed.",
     example:"A: いつもなんじにねますか？\nB: じゅういちじごろねます。",
     exampleSrc:"A: What time do you usually go to bed?\nB: I go to bed around 11.",
     funFact:"Japan is one of the most sleep-deprived nations. Average sleep is under 7 hours. The word ねぶそく (sleep deficiency) describes a national condition. Despite this, ねるまえに (before sleeping) rituals like reading, stretching, or drinking herbal tea are cherished by those who practice them."},

    // Quiz steps
    {type:"mc", q:"はをみがく means:",
     opts:["To brush teeth","To wash face","To comb hair","To change clothes"],
     ans:"To brush teeth",
     hint:"は means t..., and みがく means to polish or b.... Japanese people do this after lunch too."},

    {type:"match", pairs:[
      {trg:"おきる", src:"to wake up"},
      {trg:"でかける", src:"to go out"},
      {trg:"もどる", src:"to return"},
      {trg:"やすむ", src:"to rest"},
      {trg:"ねる", src:"to go to bed"}
    ]},

    {type:"fb", s:"しぶやで{1}てください。やまのてせんにのります。",
     a:["のりかえ"],
     opts:["のりかえ","でかけ","もどっ","やすん"],
     hint:"You need to change from one train line to another at Shibuya. This verb means 'to transfer.'",
     sSrc:"Please {1} at Shibuya. Take the Yamanote Line."},

    {type:"mc", q:"Japanese students clean their own schools because:",
     opts:["It teaches responsibility and respect for shared spaces","There are not enough janitors","It is a punishment","Parents requested it"],
     ans:"It teaches responsibility and respect for shared spaces",
     hint:"そうじ in schools is a valued educational tradition, not a cost-saving measure."},

    {type:"fb", s:"おふろに{1}まえに、からだをあらいます。",
     a:["はいる"],
     opts:["はいる","ねる","でかける","もどる"],
     hint:"Before entering the bathtub, you wash your body outside the tub first.",
     sSrc:"Before {1} the bath, I wash my body."},

    {type:"mc", q:"もどる vs かえる: which describes returning to the office after lunch?",
     opts:["もどる (temporary return to a place)","かえる (going home for the day)","でかける (going out)","のりかえる (transferring)"],
     ans:"もどる (temporary return to a place)",
     hint:"This verb means returning to a specific location temporarily, not going home."},

    {type:"match", pairs:[
      {trg:"そうじする", src:"to clean"},
      {trg:"せんたくする", src:"to do laundry"},
      {trg:"かたづける", src:"to tidy up"},
      {trg:"きがえる", src:"to change clothes"},
      {trg:"かおをあらう", src:"to wash face"}
    ]},

    {type:"fb", s:"ゆうべあまりねなかったので、きょうは{1}です。",
     a:["ねむい"],
     opts:["ねむい","さむい","あつい","いたい"],
     hint:"You did not sleep much last night, so today you feel drowsy. This i-adjective means 'sleepy.'",
     sSrc:"I did not sleep much last night, so today I am {1}."}
  ]
};
export default BATCH7_L1;
