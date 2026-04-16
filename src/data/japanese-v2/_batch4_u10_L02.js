// Batch 4 — Unit 10 Lesson 2: Outdoor Activities & Disasters
const BATCH4_L_2 = {
  id:"jav2_u10l_b4_2", title:"アウトドア", icon:"⛺", xp:15, board:true,
  steps:[
    {type:"intro", title:"アウトドアとさいがい",
     desc:"Learn vocabulary for outdoor activities and natural disasters. Japan's geography makes both outdoor recreation and disaster preparedness important.",
     goals:["Talk about outdoor hobbies","Understand weather warning vocabulary","Know basic disaster preparedness words"]},

    {type:"teach", trg:"キャンプ", src:"camping", pos:"noun", gender:null,
     note:"From English 'camp.' キャンプする = to go camping.",
     example:"やまでキャンプをしました。",
     exampleSrc:"I went camping in the mountains.",
     funFact:"Camping boomed in Japan after the manga/anime Yuru Camp (ゆるキャン). Japan's campgrounds are incredibly well-maintained with hot springs, cooking facilities, and mountain views. Solo camping (ソロキャンプ) is a growing trend."},

    {type:"teach", trg:"ハイキング", src:"hiking", pos:"noun", gender:null,
     note:"From English 'hiking.' Japan has thousands of hiking trails.",
     example:"しゅうまつにハイキングにいきます。",
     exampleSrc:"I go hiking on weekends.",
     funFact:"Japan's most famous hiking route is the Kumano Kodo pilgrimage trail, a UNESCO World Heritage site. Mount Takao near Tokyo is the world's most-climbed mountain with over 3 million hikers annually."},

    {type:"teach", trg:"つり", src:"fishing", pos:"noun", gender:null,
     note:"From the verb つる (to fish). One of Japan's most popular hobbies.",
     example:"かわでつりをしました。",
     exampleSrc:"I went fishing in the river.",
     funFact:"Japan has freshwater fishing (川釣り), sea fishing (海釣り), and managed fishing ponds (釣り堀). Some Tokyo buildings have rooftop fishing ponds. There are also fishing-themed arcades and video games."},

    {type:"teach", trg:"およぐ", src:"to swim", pos:"verb", gender:null,
     note:"Godan verb. Kanji: 泳ぐ. Te-form: およいで.",
     example:"プールでおよぎます。",
     exampleSrc:"I swim in the pool.",
     funFact:"Japanese schools require all students to learn to swim. Most schools have outdoor pools used during summer. Swimming classes are a standard part of physical education from elementary through high school."},

    {type:"teach", trg:"のぼる", src:"to climb", pos:"verb", gender:null,
     note:"Godan verb. Kanji: 登る. For mountains, stairs, trees.",
     example:"ふじさんにのぼりたいです。",
     exampleSrc:"I want to climb Mount Fuji.",
     funFact:"Climbing Mount Fuji is a rite of passage. The saying goes: 'A wise person climbs Fuji once. A fool climbs it twice.' About 300,000 people climb it each July-August during the official season."},

    {type:"teach", trg:"バーベキュー", src:"barbecue", pos:"noun", gender:null,
     note:"From English 'barbecue.' Often shortened to BBQ in writing.",
     example:"かわのちかくでバーベキューをしました。",
     exampleSrc:"We had a barbecue near the river.",
     funFact:"Japanese BBQ is a social event. Riverside BBQ spots and managed BBQ areas in parks are packed on weekends. There are even BBQ restaurants that provide all equipment. In Japan, BBQ is a group activity, rarely done alone."},

    {type:"teach", trg:"じしん", src:"earthquake", pos:"noun", gender:null,
     note:"Kanji: 地震. Earth + shake. Japan experiences thousands yearly.",
     example:"ゆうべじしんがありました。",
     exampleSrc:"There was an earthquake last night.",
     funFact:"Japan experiences about 1,500 earthquakes per year that can be felt. The 2011 Tohoku earthquake (M9.0) was the most powerful in Japan's recorded history. Earthquake preparedness is taught from elementary school."},

    {type:"teach", trg:"たいふう", src:"typhoon", pos:"noun", gender:null,
     note:"Kanji: 台風. Platform + wind. The Pacific equivalent of hurricanes.",
     example:"たいふうがきています。",
     exampleSrc:"A typhoon is coming.",
     funFact:"Japan faces about 30 typhoons per year, with 3-4 making landfall. Typhoon season runs from August to October. Schools and businesses close during strong typhoons. The weather agency names each typhoon with a number system."},

    {type:"teach", trg:"つなみ", src:"tsunami", pos:"noun", gender:null,
     note:"Kanji: 津波. Harbor + wave. A Japanese word used worldwide.",
     example:"つなみのけいほうがでました。",
     exampleSrc:"A tsunami warning was issued.",
     funFact:"Tsunami is one of the most famous Japanese loanwords in English. The word literally means 'harbor wave' because fishermen at sea would not notice the wave, but it would devastate their harbor when they returned."},

    {type:"teach", trg:"ひなん", src:"evacuation / taking refuge", pos:"noun", gender:null,
     note:"Kanji: 避難. Avoid + difficulty. Suru verb: ひなんする.",
     example:"ひなんじょはどこですか？",
     exampleSrc:"Where is the evacuation shelter?",
     funFact:"Every Japanese neighborhood has designated evacuation sites (避難所). Schools and community centers serve as shelters. Disaster drills happen annually on September 1st (Disaster Prevention Day), the anniversary of the 1923 Great Kanto Earthquake."},

    {type:"teach", trg:"ぼうさい", src:"disaster prevention", pos:"noun", gender:null,
     note:"Kanji: 防災. Prevent + disaster. A core Japanese cultural concept.",
     example:"ぼうさいグッズをじゅんびしましょう。",
     exampleSrc:"Let's prepare disaster prevention supplies.",
     funFact:"Japanese homes typically have a bousai bag (防災袋) with water, food, flashlight, radio, and first aid supplies. Convenience stores sell ready-made bousai kits. This preparedness culture has saved countless lives."},

    {type:"teach", trg:"けいほう", src:"warning / alert", pos:"noun", gender:null,
     note:"Kanji: 警報. Guard + report. Official warnings from authorities.",
     example:"おおあめけいほうがでています。",
     exampleSrc:"A heavy rain warning has been issued.",
     funFact:"Japan's J-Alert system sends earthquake and disaster warnings to every phone in affected areas. The distinctive alarm sound is designed to be heard even while sleeping. It provides seconds of warning before shaking starts."},

    {type:"teach", trg:"にじ", src:"rainbow", pos:"noun", gender:null,
     note:"Kanji: 虹. Insect + work (original meaning: a serpent-like arch in the sky).",
     example:"あめのあとににじがでました。",
     exampleSrc:"A rainbow appeared after the rain.",
     funFact:"The kanji 虹 contains the radical for 'insect/snake' because ancient Chinese saw the rainbow as a giant serpent or dragon arching across the sky. In Japanese folklore, rainbows are considered good omens."},

    {type:"mc", q:"What does じしん mean?",
     opts:["earthquake","typhoon","tsunami","flood"], ans:"earthquake",
     hint:"The ground shaking, caused by tectonic plate movement."},

    {type:"fb", s:"ふじさんに{1}たいです。", a:"のぼり",
     sSrc:"I want to climb Mount Fuji.",
     opts:["のぼり","およぎ","あるき","はしり"],
     hint:"The verb for going up a mountain or steep incline."},

    {type:"match", pairs:[
      {trg:"たいふう", src:"typhoon"},
      {trg:"つなみ", src:"tsunami"},
      {trg:"ひなん", src:"evacuation"},
      {trg:"ぼうさい", src:"disaster prevention"}
    ]},

    {type:"mc", q:"Which word is a Japanese loanword used worldwide?",
     opts:["つなみ","たいふう","じしん","けいほう"], ans:"つなみ",
     hint:"Literally 'harbor wave,' adopted into English and most world languages."},

    {type:"fb", s:"やまで{1}をしました。", a:"キャンプ",
     sSrc:"I went camping in the mountains.",
     opts:["キャンプ","つり","ハイキング","バーベキュー"],
     hint:"Sleeping outdoors in a tent, cooking over fire."},

    {type:"mc", q:"What is the J-Alert system?",
     opts:["earthquake/disaster warning to phones","weather forecast app","news broadcast","traffic information"], ans:"earthquake/disaster warning to phones",
     hint:"An official system that sends emergency alerts to every mobile phone."},

    {type:"mc", q:"にじ means:",
     opts:["rainbow","cloud","thunder","lightning"], ans:"rainbow",
     hint:"The colorful arc that appears in the sky after rain."}
  ]
};
export default BATCH4_L_2;
