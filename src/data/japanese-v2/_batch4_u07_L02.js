// Batch 4 — Unit 07 Lesson 2: More Daily Actions
const BATCH4_L_2 = {
  id:"jav2_u07l_b4_2", title:"にちじょう", icon:"🌅", xp:15, board:true,
  steps:[
    {type:"intro", title:"にちじょうのこうどう",
     desc:"Expand your vocabulary for daily routine actions. These verbs describe what you do every day from waking up to going to bed.",
     goals:["Describe your morning routine","Talk about evening activities","Use time expressions with daily verbs"]},

    {type:"teach", trg:"おきる", src:"to wake up / get up", pos:"verb", gender:null,
     note:"Ichidan verb. Kanji: 起きる. Also means 'to occur' (an event).",
     example:"まいあさろくじにおきます。",
     exampleSrc:"I wake up at 6 o'clock every morning.",
     funFact:"Okiru has a double life: 'to wake up' and 'to happen.' 事件が起きた (jiken ga okita) means 'an incident occurred.' The connection is that both waking and events involve something becoming active."},

    {type:"teach", trg:"ねる", src:"to sleep / go to bed", pos:"verb", gender:null,
     note:"Ichidan verb. Kanji: 寝る. Covers both falling asleep and lying down.",
     example:"じゅういちじにねます。",
     exampleSrc:"I go to bed at 11 o'clock.",
     funFact:"Japanese napping culture (居眠り inemuri, sleeping while present) is socially acceptable at work because it shows you worked so hard you collapsed from exhaustion. Napping on trains is an art form."},

    {type:"teach", trg:"シャワーをあびる", src:"to take a shower", pos:"verb", gender:null,
     note:"あびる is an ichidan verb meaning 'to bathe in' (water, light, etc.).",
     example:"あさシャワーをあびます。",
     exampleSrc:"I take a shower in the morning.",
     funFact:"Most Japanese prefer evening baths over morning showers. The ofuro (お風呂) bath is a nightly ritual of soaking in hot water AFTER washing. The bath water is kept clean and shared by the whole family."},

    {type:"teach", trg:"はみがき", src:"brushing teeth", pos:"noun", gender:null,
     note:"Kanji: 歯磨き. Teeth + polishing. Suru verb: はみがきする.",
     example:"ごはんのあとではみがきをします。",
     exampleSrc:"I brush my teeth after meals.",
     funFact:"Japanese office workers commonly brush their teeth after lunch at the office restroom. Keeping a toothbrush set at work is standard. Japan has one of the lowest rates of dental cavities in the developed world."},

    {type:"teach", trg:"けしょうする", src:"to put on makeup", pos:"verb", gender:null,
     note:"Kanji: 化粧する. Transform + decorate. Suru verb.",
     example:"でかけるまえにけしょうをします。",
     exampleSrc:"I put on makeup before going out.",
     funFact:"Japan's cosmetics industry is massive. Japanese women's makeup tends toward a natural, dewy look rather than heavy coverage. Shiseido, founded in 1872, is one of the world's oldest cosmetics companies."},

    {type:"teach", trg:"でかける", src:"to go out / leave home", pos:"verb", gender:null,
     note:"Ichidan verb. Kanji: 出かける. Exit + hang. More specific than いく.",
     example:"しちじにいえをでかけます。",
     exampleSrc:"I leave home at 7 o'clock.",
     funFact:"Dekakeru specifically means leaving your home base to go somewhere. It implies you will return. This is different from iku (to go), which is just general movement. Dekakeru is paired with the greeting いってきます."},

    {type:"teach", trg:"かえる", src:"to return / go home", pos:"verb", gender:null,
     note:"Godan verb. Kanji: 帰る. Going back to your base (home, country).",
     example:"ごごろくじにかえります。",
     exampleSrc:"I go home at 6 PM.",
     funFact:"Kaeru specifically means returning to your 'base.' A Japanese person visiting their hometown says 帰る, not 行く. It is emotionally linked to the idea of belonging somewhere. The phrase ただいま is said upon kaeru."},

    {type:"teach", trg:"あらう", src:"to wash", pos:"verb", gender:null,
     note:"Godan verb. Kanji: 洗う. For hands, dishes, clothes, cars.",
     example:"ごはんのまえにてをあらいます。",
     exampleSrc:"I wash my hands before meals.",
     funFact:"Hand washing in Japan is deeply ingrained. After COVID, it became even more ritualistic. Japanese soap brands like Lion and Kao innovated foaming handwash that became popular worldwide during the pandemic."},

    {type:"teach", trg:"そうじする", src:"to clean / tidy up", pos:"verb", gender:null,
     note:"Kanji: 掃除する. Sweep + remove. For rooms and spaces.",
     example:"まいしゅうへやをそうじします。",
     exampleSrc:"I clean my room every week.",
     funFact:"The Japanese concept of souji (cleaning) is almost spiritual. In Zen Buddhism, cleaning is meditation. Japanese schools have no janitors because students clean their own classrooms daily, learning responsibility."},

    {type:"teach", trg:"せんたくする", src:"to do laundry", pos:"verb", gender:null,
     note:"Kanji: 洗濯する. Wash + rinse. The entire laundry process.",
     example:"にちようびにせんたくをします。",
     exampleSrc:"I do laundry on Sunday.",
     funFact:"Line-drying clothes on the balcony (ベランダ) is standard in Japan. The weather forecast always includes 洗濯指数 (sentaku shisuu, laundry index) rating how good the day is for drying clothes outside."},

    {type:"teach", trg:"りょうりする", src:"to cook", pos:"verb", gender:null,
     note:"Kanji: 料理する. Suru verb. Both cooking and the finished dish.",
     example:"ばんごはんをりょうりします。",
     exampleSrc:"I cook dinner.",
     funFact:"Bento-making (弁当作り) is a daily cooking ritual for many Japanese parents. Elaborate character bentos (キャラ弁 kyaraben) feature food shaped like anime characters. Some parents wake at 5 AM to prepare these edible artworks."},

    {type:"teach", trg:"さんぽする", src:"to take a walk", pos:"verb", gender:null,
     note:"Kanji: 散歩する. A leisurely walk, not exercise or commuting.",
     example:"ゆうがたにいぬとさんぽします。",
     exampleSrc:"I walk the dog in the evening.",
     funFact:"Evening dog walks are a social activity in Japanese neighborhoods. Dog owners know each other and chat during walks. Dog parks are less common, but every neighborhood has its walking routes and regular walkers."},

    {type:"teach", trg:"よやくする", src:"to make a reservation", pos:"verb", gender:null,
     note:"Kanji: 予約する. Pre + promise. For restaurants, hotels, doctors.",
     example:"レストランをよやくしました。",
     exampleSrc:"I made a restaurant reservation.",
     funFact:"Japan takes reservations very seriously. No-shows are considered extremely rude. Some high-end sushi restaurants require a Japanese person to make the reservation on your behalf because of past problems with tourist no-shows."},

    {type:"teach", trg:"やすむ", src:"to rest / take a day off", pos:"verb", gender:null,
     note:"Godan verb. Kanji: 休む. Rest + self. Both relaxing and absence.",
     example:"きょうはかいしゃをやすみます。",
     exampleSrc:"I am taking the day off work today.",
     funFact:"Despite having generous vacation days, many Japanese workers do not use them all. The concept of 有給休暇 (yuukyuu kyuuka, paid leave) has been encouraged by recent laws requiring employees to take at least 5 days off per year."},

    {type:"mc", q:"What does でかける mean?",
     opts:["to go out / leave home","to come back","to sleep","to wake up"], ans:"to go out / leave home",
     hint:"Leaving your h... base to go somewhere, with the expectation of returning."},

    {type:"fb", s:"まいあさろくじに{1}ます。", a:"おき",
     sSrc:"I wake up at 6 o'clock every morning.",
     opts:["おき","ね","かえり","でかけ"],
     hint:"The verb for becoming awake after sleeping."},

    {type:"match", pairs:[
      {trg:"あらう", src:"to wash"},
      {trg:"そうじする", src:"to clean"},
      {trg:"せんたくする", src:"to do laundry"},
      {trg:"りょうりする", src:"to cook"}
    ]},

    {type:"mc", q:"What is the 洗濯指数?",
     opts:["laundry drying index","washing machine rating","water quality score","clothing size chart"], ans:"laundry drying index",
     hint:"A weather forecast feature telling how good the day is for d... clothes."},

    {type:"fb", s:"レストランを{1}しました。", a:"よやく",
     sSrc:"I made a restaurant reservation.",
     opts:["よやく","ちゅうもん","そうじ","せんたく"],
     hint:"Securing a table or appointment in advance."},

    {type:"mc", q:"What does かえる specifically mean?",
     opts:["to return to home base","to go anywhere","to leave","to arrive"], ans:"to return to home base",
     hint:"Going back to your place of belonging, not just moving somewhere."},

    {type:"mc", q:"はみがき means:",
     opts:["brushing teeth","washing face","combing hair","taking a bath"], ans:"brushing teeth",
     hint:"Teeth + polishing, the hygiene act done after meals."}
  ]
};
export default BATCH4_L_2;
