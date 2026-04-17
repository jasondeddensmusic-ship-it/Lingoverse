// Batch 4 — Unit 11 Lesson 2: Emotions & Feelings
const BATCH4_L_2 = {
  id:"jav2_u11l_b4_2", title:"気持(きも)ち", icon:"😊", xp:15, board:true,
  steps:[
    {type:"intro", title:"気持(きも)ちと感情(かんじょう)",
     desc:"Learn to express emotions and feelings in Japanese. Japanese has a rich vocabulary for emotional states, many with no direct English equivalent.",
     goals:["Express positive and negative emotions","Use emotion adjectives correctly","Understand Japanese emotional expressions"]},

    {type:"teach", trg:"気持(きも)ち", src:"feeling / mood", pos:"noun", gender:null,
     note:"Spirit + hold. How you are holding your spirit.",
     example:"気持(きも)ちがいいです。",
     exampleSrc:"I feel good.",
     funFact:"Kimochi is versatile: 気持(きも)ちいい (feels good physically), 気持(きも)ち悪(わる)い (feels gross/creepy). It combines 気 (spirit/energy) with 持(も)つ (to hold). Your feelings are literally how you hold your inner energy."},

    {type:"teach", trg:"嬉(うれ)しい", src:"happy / glad", pos:"adj", gender:null,
     note:"I-adjective. For personal joy about a specific thing.",
     example:"プレゼントをもらって嬉(うれ)しいです。",
     exampleSrc:"I am happy to receive a present.",
     funFact:"Ureshii is personal joy triggered by a specific event. It differs from 幸(しあわ)せ (shiawase, general happiness/contentment). 'I passed the exam' triggers ureshii. 'My life is good' triggers shiawase."},

    {type:"teach", trg:"悲(かな)しい", src:"sad", pos:"adj", gender:null,
     note:"I-adjective. Deep sadness and sorrow.",
     example:"そのニュースは悲(かな)しいです。",
     exampleSrc:"That news is sad.",
     funFact:"Kanashii originally meant 'dear/lovable' in Old Japanese (愛(いと)しい). Over centuries, the sense shifted from intense love to the sadness that accompanies deep emotional attachment. Love and sadness were seen as inseparable."},

    {type:"teach", trg:"寂(さび)しい", src:"lonely", pos:"adj", gender:null,
     note:"I-adjective. Also written 淋(さみ)しい. Both readings exist.",
     example:"友達(ともだち)がいなくて寂(さび)しいです。",
     exampleSrc:"I am lonely because I have no friends.",
     funFact:"Sabishii and samishii are both correct pronunciations. The feeling captures both physical solitude and emotional loneliness. Japanese literature and poetry are filled with sabishii as a core aesthetic emotion."},

    {type:"teach", trg:"悔(くや)しい", src:"frustrated / vexing / mortifying", pos:"adj", gender:null,
     note:"I-adjective. No perfect English equivalent.",
     example:"試合(しあい)に負(ま)けて悔(くや)しいです。",
     exampleSrc:"I lost the match and feel frustrated.",
     funFact:"Kuyashii is one of those untranslatable Japanese emotions. It combines frustration, regret, and determination. Athletes cry kuyashii tears after losing, vowing to come back stronger. It fuels the spirit of improvement."},

    {type:"teach", trg:"恥(はず)かしい", src:"embarrassed / ashamed", pos:"adj", gender:null,
     note:"I-adjective. A socially important emotion in Japan.",
     example:"みんなの前(まえ)で恥(はず)かしいです。",
     exampleSrc:"I am embarrassed in front of everyone.",
     funFact:"Japan is often called a 'shame culture' (恥(はじ)の文化(ぶんか)). Ruth Benedict's analysis noted that shame before others (rather than guilt before God) drives social behavior. Hazukashii is the emotional core of this cultural dynamic."},

    {type:"teach", trg:"怖(こわ)い", src:"scary / afraid", pos:"adj", gender:null,
     note:"I-adjective. Both 'this is scary' and 'I am scared.'",
     example:"お化(ば)けが怖(こわ)いです。",
     exampleSrc:"I am afraid of ghosts.",
     funFact:"Japanese horror (J-horror) is renowned for its psychological terror. Films like The Ring and Ju-On created a global genre. Japanese ghosts (幽霊(ゆうれい) yuurei) appear with long black hair and white clothing, a distinct visual tradition."},

    {type:"teach", trg:"懐(なつ)かしい", src:"nostalgic / fondly remembered", pos:"adj", gender:null,
     note:"I-adjective. No single English word captures it.",
     example:"この歌(うた)は懐(なつ)かしいですね。",
     exampleSrc:"This song brings back fond memories.",
     funFact:"Natsukashii is one of the most beloved untranslatable Japanese words. It is the warm, bittersweet feeling when something reminds you of happy past times. Japanese people say it when seeing old photos, tasting childhood food, or hearing old songs."},

    {type:"teach", trg:"心配(しんぱい)する", src:"to worry", pos:"verb", gender:null,
     note:"Heart + distribute. Spreading your heart thin.",
     example:"心配(しんぱい)しないでください。",
     exampleSrc:"Please don't worry.",
     funFact:"心配 literally means 'distributing your heart.' When you worry, your heart is scattered in many directions. The reassurance 心配(しんぱい)しないで (don't worry) is one of the most commonly heard phrases in Japanese daily life."},

    {type:"teach", trg:"安心(あんしん)する", src:"to feel relieved / at peace", pos:"verb", gender:null,
     note:"Peace + heart. The opposite of 心配(しんぱい).",
     example:"無事(ぶじ)に帰(かえ)ってきて安心(あんしん)しました。",
     exampleSrc:"I felt relieved that they returned safely.",
     funFact:"Anshin means 'peaceful heart.' It is the emotional resolution after worry. Japanese businesses use 安心(あんしん) and 安全(あんぜん) (safety) together as a promise: 'anshin, anzen' (peace of mind and physical safety)."},

    {type:"teach", trg:"がっかりする", src:"to be disappointed", pos:"verb", gender:null,
     note:"Onomatopoeic origin. The feeling of hopes falling flat.",
     example:"試験(しけん)に落(お)ちてがっかりしました。",
     exampleSrc:"I was disappointed to fail the exam.",
     funFact:"Gakkari is one of many Japanese emotional onomatopoeia. The 'ga' sound suggests something hitting the ground, like your spirits dropping. Japanese has hundreds of these emotional sound words (擬態語(ぎたいご) gitaigo)."},

    {type:"teach", trg:"わくわくする", src:"to be excited / thrilled", pos:"verb", gender:null,
     note:"Onomatopoeia for heart pounding with excitement.",
     example:"旅行(りょこう)の前(まえ)にわくわくしています。",
     exampleSrc:"I am excited before the trip.",
     funFact:"Wakuwaku is pure mimetic language (擬態語(ぎたいご)). The 'waku' sound mimics bubbling excitement. Japanese has a rich system of these: ドキドキ (heart pounding), ワクワク (excited), ソワソワ (restless), ハラハラ (anxious suspense)."},

    {type:"teach", trg:"ドキドキする", src:"heart pounding (nervousness/excitement)", pos:"verb", gender:null,
     note:"Onomatopoeia for heartbeat. Can be romantic or nervous.",
     example:"初(はつ)デートでドキドキしています。",
     exampleSrc:"My heart is pounding before the first date.",
     funFact:"Dokidoki mimics the sound of a rapid heartbeat. It works for both romantic excitement and nervous anticipation. In manga, ドキドキ appears as a sound effect near characters' chests to show emotional intensity."},

    {type:"teach", trg:"イライラする", src:"to be irritated / annoyed", pos:"verb", gender:null,
     note:"Onomatopoeia for a prickly, agitated feeling.",
     example:"渋滞(じゅうたい)でイライラしています。",
     exampleSrc:"I am irritated by the traffic jam.",
     funFact:"Iraira captures the bristling, spiky feeling of irritation. The sharp 'ira' sounds mimic the feeling of nerves on edge. Japanese emotional onomatopoeia are so precise that single words can replace entire English phrases."},

    {type:"mc", q:"What does 懐(なつ)かしい mean?",
     opts:["nostalgic / fondly remembered","sad","scary","angry"], ans:"nostalgic / fondly remembered",
     hint:"The warm feeling when something reminds you of happy past times."},

    {type:"fb", s:"{1}しないでください。", a:"心配(しんぱい)",
     sSrc:"Please don't worry.",
     opts:["心配(しんぱい)","安心(あんしん)","がっかり","ドキドキ"],
     hint:"The state of distributing your heart across many concerns."},

    {type:"match", pairs:[
      {trg:"わくわく", src:"excited/thrilled"},
      {trg:"ドキドキ", src:"heart pounding"},
      {trg:"イライラ", src:"irritated"},
      {trg:"がっかり", src:"disappointed"}
    ]},

    {type:"mc", q:"悔(くや)しい is best described as:",
     opts:["frustration mixed with determination","pure sadness","calm acceptance","wild joy"], ans:"frustration mixed with determination",
     hint:"The feeling athletes have after losing, vowing to come back stronger."},

    {type:"fb", s:"この歌(うた)は{1}ですね。", a:"懐(なつ)かしい",
     sSrc:"This song brings back fond memories.",
     opts:["懐(なつ)かしい","怖(こわ)い","悲(かな)しい","嬉(うれ)しい"],
     hint:"A warm, bittersweet connection to happy memories of the past."},

    {type:"mc", q:"What is the opposite of 心配(しんぱい)?",
     opts:["安心(あんしん)","がっかり","イライラ","ドキドキ"], ans:"安心(あんしん)",
     hint:"Peaceful heart, the feeling of relief after worry dissolves."},

    {type:"mc", q:"恥(はず)かしい means:",
     opts:["embarrassed/ashamed","proud","angry","confused"], ans:"embarrassed/ashamed",
     hint:"The emotion at the core of Japan's social behavior system."}
  ]
};
export default BATCH4_L_2;
