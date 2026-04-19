// Batch 4 — Unit 01 Lesson 1: Classroom Japanese
const BATCH4_L_1 = {
  id:"jav2_u01l_b4_1", title:"教室(きょうしつ)", icon:"🏫", xp:15, board:true,
  steps:[
    {type:"intro", title:"教室(きょうしつ)のことば",
     desc:"Learn essential classroom vocabulary. These words will help you in a Japanese language class or school setting.",
     goals:["Name classroom objects","Use polite classroom phrases","Understand teacher instructions"]},

    {type:"teach", trg:"教室(きょうしつ)", src:"classroom", pos:"noun", gender:null,
     note:"Kanji: 教室. A compound of teach + room.",
     example:"教室(きょうしつ)に入(はい)ってください。",
     exampleSrc:"Please enter the classroom.",
     funFact:"Japanese classrooms have students stay in one room while teachers rotate between classes. The opposite of Western schools where students move."},

    {type:"teach", trg:"先生(せんせい)", src:"teacher", pos:"noun", gender:null,
     note:"Also used for doctors, lawyers, and politicians. A term of respect for experts.",
     example:"先生(せんせい)、質問(しつもん)があります。",
     exampleSrc:"Teacher, I have a question.",
     funFact:"Literally means 'born before' (先生). Used far beyond schools. Your doctor is sensei, your lawyer is sensei, even manga artists are called sensei by their editors."},

    {type:"teach", trg:"鉛筆(えんぴつ)", src:"pencil", pos:"noun", gender:null,
     note:"Kanji: 鉛筆. A compound of lead + brush.",
     example:"鉛筆(えんぴつ)を貸(か)してください。",
     exampleSrc:"Please lend me a pencil.",
     funFact:"Japan is home to Tombow and Mitsubishi pencils, two of the world's finest pencil makers. The Mitsubishi that makes pencils is the same group as the car company."},

    {type:"teach", trg:"消(け)しゴム", src:"eraser", pos:"noun", gender:null,
     note:"Compound: 消(け)し (erase) + ゴム (rubber, from Dutch 'gom').",
     example:"消(け)しゴムを使(つか)ってもいいですか？",
     exampleSrc:"May I use an eraser?",
     funFact:"ゴム comes from the Dutch word 'gom' (rubber). The Dutch had a major influence on Japanese during the Edo period when they were the only Europeans allowed to trade with Japan."},

    {type:"teach", trg:"ノート", src:"notebook", pos:"noun", gender:null,
     note:"From English 'note.' Used specifically for notebooks, not musical notes.",
     example:"ノートに書(か)いてください。",
     exampleSrc:"Please write it in your notebook.",
     funFact:"Campus notebooks by Kokuyo are so iconic in Japan that the word 'campus' almost means 'notebook' to Japanese students. They have been the standard since 1975."},

    {type:"teach", trg:"黒板(こくばん)", src:"blackboard", pos:"noun", gender:null,
     note:"Kanji: 黒板. Black + board. Still very common in Japanese schools.",
     example:"黒板(こくばん)を見(み)てください。",
     exampleSrc:"Please look at the blackboard.",
     funFact:"Japanese schools still prefer traditional blackboards and chalk over whiteboards. Teachers are known for their beautiful board art, sometimes creating elaborate illustrations during class."},

    {type:"teach", trg:"宿題(しゅくだい)", src:"homework", pos:"noun", gender:null,
     note:"Kanji: 宿題. Lodging + topic, meaning 'assigned topic to take home.'",
     example:"宿題(しゅくだい)を忘(わす)れました。",
     exampleSrc:"I forgot my homework.",
     funFact:"Japanese summer homework is legendary. Students get workbooks, research projects, art assignments, and a daily diary that covers the entire 6-week break."},

    {type:"teach", trg:"試験(しけん)", src:"exam / test", pos:"noun", gender:null,
     note:"Kanji: 試験. Try + verify. Used for all formal tests.",
     example:"明日(あした)試験(しけん)があります。",
     exampleSrc:"There is an exam tomorrow.",
     funFact:"Japan's entrance exams (受験(じゅけん)) are so intense they have their own season. February is exam season, and students visit shrines to pray for success. Hotels near exam sites sell out months in advance."},

    {type:"teach", trg:"勉強(べんきょう)する", src:"to study", pos:"verb", gender:null,
     note:"Kanji: 勉強する. Suru verb. Literally 'exert oneself.'",
     example:"毎日(まいにち)日本語(にほんご)を勉強(べんきょう)します。",
     exampleSrc:"I study Japanese every day.",
     funFact:"勉 means 'effort' and 強 means 'strong.' Studying in Japanese is literally 'making strong effort.' The word originally had a negative nuance of forced labor in Chinese."},

    {type:"teach", trg:"覚(おぼ)える", src:"to memorize / remember", pos:"verb", gender:null,
     note:"Ichidan (ru-verb). Te-form: 覚(おぼ)えて.",
     example:"新(あたら)しい漢字(かんじ)を覚(おぼ)えました。",
     exampleSrc:"I memorized the new kanji.",
     funFact:"Japanese students memorize kanji by writing each character dozens of times. This method is called 書(か)き取(と)り (kakitori). A single kanji might be written 50 times until it sticks."},

    {type:"teach", trg:"忘(わす)れる", src:"to forget", pos:"verb", gender:null,
     note:"Ichidan (ru-verb). Te-form: 忘(わす)れて. Opposite of 覚(おぼ)える.",
     example:"パスワードを忘(わす)れてしまいました。",
     exampleSrc:"I accidentally forgot my password.",
     funFact:"The kanji 忘 combines 亡 (death/loss) over 心 (heart). Forgetting is literally losing something from your heart. A beautifully poetic etymology."},

    {type:"teach", trg:"練習(れんしゅう)する", src:"to practice", pos:"verb", gender:null,
     note:"Kanji: 練習する. Suru verb. Refine + learn.",
     example:"ピアノを練習(れんしゅう)しています。",
     exampleSrc:"I am practicing piano.",
     funFact:"練 means 'to refine' (like kneading dough) and 習 means 'to learn.' Practice is the repeated refining of something you are learning. Very precise."},

    {type:"teach", trg:"質問(しつもん)", src:"question", pos:"noun", gender:null,
     note:"Kanji: 質問. Quality + ask. A formally phrased question.",
     example:"質問(しつもん)はありますか？",
     exampleSrc:"Do you have any questions?",
     funFact:"Japanese students rarely ask questions in class, not from lack of curiosity but from not wanting to slow others down. Many save questions for after class or ask privately."},

    {type:"teach", trg:"答(こた)え", src:"answer", pos:"noun", gender:null,
     note:"Can also be the verb stem of 答(こた)える (to answer).\nKanji: 答え.",
     example:"答(こた)えはBです。",
     exampleSrc:"The answer is B.",
     funFact:"The kanji 答 has bamboo (竹) on top and fit (合) below. Bamboo joints fit together precisely, like a correct answer perfectly matching a question."},

    {type:"mc", q:"Which word means 'homework'?",
     opts:["宿題(しゅくだい)","試験(しけん)","勉強(べんきょう)","練習(れんしゅう)"], ans:"宿題(しゅくだい)",
     hint:"Think of the assigned task you take home from school."},

    {type:"mc", q:"What does 覚(おぼ)える mean?",
     opts:["to forget","to memorize","to study","to practice"], ans:"to memorize",
     hint:"This is the opposite of forgetting something."},

    {type:"fb", s:"鉛筆(えんぴつ)を{1}ください。", a:"貸(か)して",
     sSrc:"Please lend me a pencil.",
     opts:["貸(か)して","見(み)て","聞(き)いて","教(おし)えて"],
     hint:"You want to borrow something from someone."},

    {type:"mc", q:"教室(きょうしつ) means:",
     opts:["classroom","library","gym","cafeteria"], ans:"classroom",
     hint:"A room where teaching takes place in school."},

    {type:"fb", s:"明日(あした)の{1}は難(むずか)しいです。", a:"試験(しけん)",
     sSrc:"Tomorrow's exam is difficult.",
     opts:["試験(しけん)","宿題(しゅくだい)","質問(しつもん)","答(こた)え"],
     hint:"This is a formal assessment at school."},

    {type:"match", pairs:[
      {trg:"先生(せんせい)", src:"teacher"},
      {trg:"消(け)しゴム", src:"eraser"},
      {trg:"ノート", src:"notebook"},
      {trg:"黒板(こくばん)", src:"blackboard"}
    ]},

    {type:"mc", q:"What does 忘(わす)れる mean?",
     opts:["to forget","to remember","to study","to teach"], ans:"to forget",
     hint:"The opposite of memorizing or keeping in mind."},

    {type:"fb", s:"毎日(まいにち)日本語(にほんご)を{1}します。", a:"勉強(べんきょう)",
     sSrc:"I study Japanese every day.",
     opts:["勉強(べんきょう)","練習(れんしゅう)","質問(しつもん)","宿題(しゅくだい)"],
     hint:"The general word for academic studying."}
  ,{type:"match",pairs:[{trg:"教室(きょうしつ)",src:"classroom"},{trg:"鉛筆(えんぴつ)",src:"pencil"},{trg:"覚(おぼ)える",src:"to memorize / remember"},{trg:"忘(わす)れる",src:"to forget"},{trg:"質問(しつもん)",src:"question"},{trg:"答(こた)え",src:"answer"}]},
  {type:"fb", s:"テストは{1}で書(か)いてください。", a:["鉛筆(えんぴつ)"], opts:["鉛筆(えんぴつ)","消(け)しゴム","ノート","教室(きょうしつ)"], hint:"The wooden writing instrument that can be erased, not a pen.", sSrc:"Please write the test with a {1}."}
]
};
export default BATCH4_L_1;
