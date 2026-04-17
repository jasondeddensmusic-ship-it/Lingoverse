// Batch 4 — Unit 07 Lesson 2: More Daily Actions
const BATCH4_L_2 = {
  id:"jav2_u07l_b4_2", title:"日常(にちじょう)", icon:"🌅", xp:15, board:true,
  steps:[
    {type:"intro", title:"日常(にちじょう)の行動(こうどう)",
     desc:"Expand your vocabulary for daily routine actions. These verbs describe what you do every day from waking up to going to bed.",
     goals:["Describe your morning routine","Talk about evening activities","Use time expressions with daily verbs"]},

    {type:"teach", trg:"起(お)きる", src:"to wake up / get up", pos:"verb", gender:null,
     note:"Ichidan verb. Also means 'to occur' (an event).",
     example:"毎朝(まいあさ)六時(ろくじ)に起(お)きます。",
     exampleSrc:"I wake up at 6 o'clock every morning.",
     funFact:"Okiru has a double life: 'to wake up' and 'to happen.' 事件が起きた (jiken ga okita) means 'an incident occurred.' The connection is that both waking and events involve something becoming active."},

    {type:"teach", trg:"寝(ね)る", src:"to sleep / go to bed", pos:"verb", gender:null,
     note:"Ichidan verb. Covers both falling asleep and lying down.",
     example:"十一時(じゅういちじ)に寝(ね)ます。",
     exampleSrc:"I go to bed at 11 o'clock.",
     funFact:"Japanese napping culture (居眠り inemuri, sleeping while present) is socially acceptable at work because it shows you worked so hard you collapsed from exhaustion. Napping on trains is an art form."},

    {type:"teach", trg:"シャワーを浴(あ)びる", src:"to take a shower", pos:"verb", gender:null,
     note:"浴(あ)びる is an ichidan verb meaning 'to bathe in' (water, light, etc.).",
     example:"朝(あさ)シャワーを浴(あ)びます。",
     exampleSrc:"I take a shower in the morning.",
     funFact:"Most Japanese prefer evening baths over morning showers. The ofuro (お風呂) bath is a nightly ritual of soaking in hot water AFTER washing. The bath water is kept clean and shared by the whole family."},

    {type:"teach", trg:"歯磨(はみが)き", src:"brushing teeth", pos:"noun", gender:null,
     note:"Teeth + polishing. Suru verb: 歯磨(はみが)きする.",
     example:"ご飯(はん)の後(あと)で歯磨(はみが)きをします。",
     exampleSrc:"I brush my teeth after meals.",
     funFact:"Japanese office workers commonly brush their teeth after lunch at the office restroom. Keeping a toothbrush set at work is standard. Japan has one of the lowest rates of dental cavities in the developed world."},

    {type:"teach", trg:"化粧(けしょう)する", src:"to put on makeup", pos:"verb", gender:null,
     note:"Transform + decorate. Suru verb.",
     example:"出(で)かける前(まえ)に化粧(けしょう)をします。",
     exampleSrc:"I put on makeup before going out.",
     funFact:"Japan's cosmetics industry is massive. Japanese women's makeup tends toward a natural, dewy look rather than heavy coverage. Shiseido, founded in 1872, is one of the world's oldest cosmetics companies."},

    {type:"teach", trg:"出(で)かける", src:"to go out / leave home", pos:"verb", gender:null,
     note:"Ichidan verb. Exit + hang. More specific than いく.",
     example:"七時(しちじ)に家(いえ)を出(で)かけます。",
     exampleSrc:"I leave home at 7 o'clock.",
     funFact:"Dekakeru specifically means leaving your home base to go somewhere. It implies you will return. This is different from iku (to go), which is just general movement. Dekakeru is paired with the greeting いってきます."},

    {type:"teach", trg:"帰(かえ)る", src:"to return / go home", pos:"verb", gender:null,
     note:"Godan verb. Going back to your base (home, country).",
     example:"午後(ごご)六時(ろくじ)に帰(かえ)ります。",
     exampleSrc:"I go home at 6 PM.",
     funFact:"Kaeru specifically means returning to your 'base.' A Japanese person visiting their hometown says 帰る, not 行く. It is emotionally linked to the idea of belonging somewhere. The phrase ただいま is said upon kaeru."},

    {type:"teach", trg:"洗(あら)う", src:"to wash", pos:"verb", gender:null,
     note:"Godan verb. For hands, dishes, clothes, cars.",
     example:"ご飯(はん)の前(まえ)に手(て)を洗(あら)います。",
     exampleSrc:"I wash my hands before meals.",
     funFact:"Hand washing in Japan is deeply ingrained. After COVID, it became even more ritualistic. Japanese soap brands like Lion and Kao innovated foaming handwash that became popular worldwide during the pandemic."},

    {type:"teach", trg:"掃除(そうじ)する", src:"to clean / tidy up", pos:"verb", gender:null,
     note:"Sweep + remove. For rooms and spaces.",
     example:"毎週(まいしゅう)部屋(へや)を掃除(そうじ)します。",
     exampleSrc:"I clean my room every week.",
     funFact:"The Japanese concept of souji (cleaning) is almost spiritual. In Zen Buddhism, cleaning is meditation. Japanese schools have no janitors because students clean their own classrooms daily, learning responsibility."},

    {type:"teach", trg:"洗濯(せんたく)する", src:"to do laundry", pos:"verb", gender:null,
     note:"Wash + rinse. The entire laundry process.",
     example:"日曜日(にちようび)に洗濯(せんたく)をします。",
     exampleSrc:"I do laundry on Sunday.",
     funFact:"Line-drying clothes on the balcony (ベランダ) is standard in Japan. The weather forecast always includes 洗濯指数 (sentaku shisuu, laundry index) rating how good the day is for drying clothes outside."},

    {type:"teach", trg:"料理(りょうり)する", src:"to cook", pos:"verb", gender:null,
     note:"Suru verb. Both cooking and the finished dish.",
     example:"晩(ばん)ご飯(はん)を料理(りょうり)します。",
     exampleSrc:"I cook dinner.",
     funFact:"Bento-making (弁当作り) is a daily cooking ritual for many Japanese parents. Elaborate character bentos (キャラ弁 kyaraben) feature food shaped like anime characters. Some parents wake at 5 AM to prepare these edible artworks."},

    {type:"teach", trg:"散歩(さんぽ)する", src:"to take a walk", pos:"verb", gender:null,
     note:"A leisurely walk, not exercise or commuting.",
     example:"夕方(ゆうがた)に犬(いぬ)と散歩(さんぽ)します。",
     exampleSrc:"I walk the dog in the evening.",
     funFact:"Evening dog walks are a social activity in Japanese neighborhoods. Dog owners know each other and chat during walks. Dog parks are less common, but every neighborhood has its walking routes and regular walkers."},

    {type:"teach", trg:"予約(よやく)する", src:"to make a reservation", pos:"verb", gender:null,
     note:"Pre + promise. For restaurants, hotels, doctors.",
     example:"レストランを予約(よやく)しました。",
     exampleSrc:"I made a restaurant reservation.",
     funFact:"Japan takes reservations very seriously. No-shows are considered extremely rude. Some high-end sushi restaurants require a Japanese person to make the reservation on your behalf because of past problems with tourist no-shows."},

    {type:"teach", trg:"休(やす)む", src:"to rest / take a day off", pos:"verb", gender:null,
     note:"Godan verb. Rest + self. Both relaxing and absence.",
     example:"今日(きょう)は会社(かいしゃ)を休(やす)みます。",
     exampleSrc:"I am taking the day off work today.",
     funFact:"Despite having generous vacation days, many Japanese workers do not use them all. The concept of 有給休暇 (yuukyuu kyuuka, paid leave) has been encouraged by recent laws requiring employees to take at least 5 days off per year."},

    {type:"mc", q:"What does 出(で)かける mean?",
     opts:["to go out / leave home","to come back","to sleep","to wake up"], ans:"to go out / leave home",
     hint:"Leaving your h... base to go somewhere, with the expectation of returning."},

    {type:"fb", s:"毎朝(まいあさ)六時(ろくじ)に{1}ます。", a:"起(お)き",
     sSrc:"I wake up at 6 o'clock every morning.",
     opts:["起(お)き","寝(ね)","帰(かえ)り","出(で)かけ"],
     hint:"The verb for becoming awake after sleeping."},

    {type:"match", pairs:[
      {trg:"洗(あら)う", src:"to wash"},
      {trg:"掃除(そうじ)する", src:"to clean"},
      {trg:"洗濯(せんたく)する", src:"to do laundry"},
      {trg:"料理(りょうり)する", src:"to cook"}
    ]},

    {type:"mc", q:"What is the 洗濯指数?",
     opts:["laundry drying index","washing machine rating","water quality score","clothing size chart"], ans:"laundry drying index",
     hint:"A weather forecast feature telling how good the day is for d... clothes."},

    {type:"fb", s:"レストランを{1}しました。", a:"予約(よやく)",
     sSrc:"I made a restaurant reservation.",
     opts:["予約(よやく)","注文(ちゅうもん)","掃除(そうじ)","洗濯(せんたく)"],
     hint:"Securing a table or appointment in advance."},

    {type:"mc", q:"What does 帰(かえ)る specifically mean?",
     opts:["to return to home base","to go anywhere","to leave","to arrive"], ans:"to return to home base",
     hint:"Going back to your place of belonging, not just moving somewhere."},

    {type:"mc", q:"歯磨(はみが)き means:",
     opts:["brushing teeth","washing face","combing hair","taking a bath"], ans:"brushing teeth",
     hint:"T... + polishing, the hygiene act done after meals."}
  ]
};
export default BATCH4_L_2;
