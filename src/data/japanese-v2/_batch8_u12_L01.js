// Batch 8 – Unit 12 (A2.1 Ability): School Subjects & Learning
const BATCH8_L1 = {
  id:"jav2_u12l_b8_1", title:"がっこうのかもく", icon:"📚", xp:15, board:true,
  steps:[
    {type:"intro", title:"がっこうのかもく",
     desc:"Learn vocabulary for school subjects, study activities, and academic life. These words combine naturally with potential form to express what you can and cannot do.",
     goals:["Name major school subjects in Japanese","Describe study activities and abilities","Talk about school life and academic interests"]},

    {type:"teach", trg:"かもく", src:"school subject / course", pos:"noun", gender:null,
     note:"Kanji: 科目. すきなかもく = favorite subject.\nひっしゅうかもく = required course.",
     example:"A: すきなかもくはなんですか？\nB: すうがくがすきです。",
     exampleSrc:"A: What is your favorite subject?\nB: I like math.",
     funFact:"Japanese schools cover standard かもく: こくご (Japanese), さんすう/すうがく (math), りか (science), しゃかい (social studies), えいご (English), and more. がくねんだより (school newsletters) list what each かもく will cover. The word itself combines 科 (section) and 目 (eye/item)."},

    {type:"teach", trg:"すうがく", src:"mathematics", pos:"noun", gender:null,
     note:"Kanji: 数学. Elementary: さんすう. Middle school+: すうがく.\nすうがくしゃ = mathematician.",
     example:"A: すうがくはむずかしいですか？\nB: すこしむずかしいですが、おもしろいです。",
     exampleSrc:"A: Is math difficult?\nB: It is a little difficult, but interesting.",
     funFact:"Japan consistently ranks in the top 5 globally in すうがく education. さんすう (arithmetic, elementary) becomes すうがく (mathematics, secondary) when algebra and geometry are introduced. Japanese そろばん (abacus) training gives students exceptional mental calculation abilities."},

    {type:"teach", trg:"りか", src:"science (general/elementary)", pos:"noun", gender:null,
     note:"Kanji: 理科. Elementary school science.\nMiddle school splits into ぶつり, かがく, せいぶつ.",
     example:"A: りかのじっけんがたのしいです。\nB: なにをつくりましたか？",
     exampleSrc:"A: Science experiments are fun.\nB: What did you make?",
     funFact:"りか is the umbrella term for elementary science. It splits into ぶつり (physics), かがく (chemistry), and せいぶつ (biology) in middle school. Japanese りか education emphasizes hands-on experiments. The じゆうけんきゅう (free research project) during summer break is a beloved/dreaded tradition."},

    {type:"teach", trg:"しゃかい", src:"social studies", pos:"noun", gender:null,
     note:"Kanji: 社会. Also means 'society.' しゃかいか = social studies department.\nCovers history, geography, civics.",
     example:"A: しゃかいのテストはいつですか？\nB: らいしゅうのすいようびです。",
     exampleSrc:"A: When is the social studies test?\nB: Next Wednesday.",
     funFact:"しゃかい covers history (れきし), geography (ちり), and civics (こうみん). Japanese history education is detailed about Japan but selective about modern wars, which remains controversial. Elementary students do まちたんけん (town exploration) as しゃかい fieldwork."},

    {type:"teach", trg:"たいいく", src:"physical education / PE", pos:"noun", gender:null,
     note:"Kanji: 体育. たいいくのじゅぎょう = PE class.\nたいいくかん = gymnasium.",
     example:"A: きょうはたいいくがあります。\nB: なにをしますか？サッカーですか？",
     exampleSrc:"A: We have PE today.\nB: What will you do? Soccer?",
     funFact:"Japanese たいいく is serious: students change into specific たいいくぎ (PE uniforms). Activities include swimming (every school has a pool), marathon running, and undoukai (sports festivals). ラジオたいそう (radio exercises) are a signature warm-up done throughout life."},

    {type:"mc", q:"What is りか?", opts:["Science (elementary level)","Mathematics","Social studies","Physical education"], ans:"Science (elementary level)",
     hint:"This subject splits into physics, chemistry, and biology in middle school."},

    {type:"teach", trg:"おんがく", src:"music", pos:"noun", gender:null,
     note:"Kanji: 音楽 (sound + joy/music). おんがくのじゅぎょう = music class.\nおんがくか = musician.",
     example:"A: おんがくのじゅぎょうでリコーダーをふきます。\nB: なんのきょくですか？",
     exampleSrc:"A: We play recorder in music class.\nB: What song?",
     funFact:"Every Japanese elementary student learns リコーダー (recorder) and ピアニカ (melodica). School music rooms have grand pianos. こうかしゅう (songbooks) contain classic Japanese and international songs. Many famous Japanese musicians credit school おんがく classes as their start."},

    {type:"teach", trg:"びじゅつ", src:"art / fine arts", pos:"noun", gender:null,
     note:"Kanji: 美術. びじゅつのじゅぎょう = art class.\nびじゅつかん = art museum.",
     example:"A: びじゅつでえをかきました。\nB: なにをかきましたか？",
     exampleSrc:"A: I drew a picture in art class.\nB: What did you draw?",
     funFact:"Japanese びじゅつ education includes painting, pottery, calligraphy, and woodblock printing. ずこう (arts and crafts) is the elementary term; びじゅつ is used from middle school. Japan's びじゅつかん (art museums) are world-class, with collections spanning ukiyo-e to contemporary art."},

    {type:"teach", trg:"かていか", src:"home economics", pos:"noun", gender:null,
     note:"Kanji: 家庭科. Covers cooking, sewing, household management.\nAll students take it regardless of gender.",
     example:"A: かていかでエプロンをつくりました。\nB: じょうずにできましたか？",
     exampleSrc:"A: I made an apron in home economics.\nB: Did it turn out well?",
     funFact:"Japanese かていか is mandatory for all genders since 1993. Students learn cooking basics (ごはんをたく, みそしるをつくる), sewing (ミシンをつかう), and home management. This subject teaches self-sufficiency. Making an エプロン (apron) or a ナップザック (knapsack) is a common project."},

    {type:"teach", trg:"どうとく", src:"moral education / ethics", pos:"noun", gender:null,
     note:"Kanji: 道徳. A unique Japanese school subject.\nいじめぼうし = bullying prevention.",
     example:"A: どうとくのじゅぎょうでなにをまなびましたか？\nB: ともだちをたいせつにすることです。",
     exampleSrc:"A: What did you learn in moral education?\nB: To cherish friends.",
     funFact:"どうとく (moral education) is a uniquely Japanese subject. It became an official graded subject in 2018. Lessons use stories and discussions about kindness, responsibility, and community. Topics include いじめ (bullying) prevention, life respect, and Japanese values like おもいやり (consideration for others)."},

    {type:"teach", trg:"じゅぎょう", src:"class / lesson (school)", pos:"noun", gender:null,
     note:"Kanji: 授業. じゅぎょうちゅう = during class.\nじゅぎょうさんかん = open class for parents.",
     example:"A: じゅぎょうはなんじにはじまりますか？\nB: はちじはんです。",
     exampleSrc:"A: What time does class start?\nB: 8:30.",
     funFact:"Japanese じゅぎょう typically last 45 to 50 minutes. Students stay in one classroom while teachers rotate. Before each じゅぎょう, the にっちょく (daily monitor) calls きりつ、れい (stand, bow) to greet the teacher. This ritual shows respect."},

    {type:"fb", s:"すきな{1}はなんですか？\n(What is your favorite subject?)", a:"かもく", opts:["かもく","じゅぎょう","がっこう","せんせい"], sSrc:"What is your favorite subject?",
     hint:"This word means a specific area of study within a school curriculum."},

    {type:"teach", trg:"しゅくだい", src:"homework", pos:"noun", gender:null,
     note:"Kanji: 宿題. しゅくだいをだす = to assign homework.\nしゅくだいをする = to do homework.",
     example:"A: しゅくだいはおわりましたか？\nB: まだです。あとすこしです。",
     exampleSrc:"A: Have you finished your homework?\nB: Not yet. A little more to go.",
     funFact:"Japanese しゅくだい is famously demanding. Summer break homework includes a detailed にっき (diary), a じゆうけんきゅう (free research project), どくしょかんそうぶん (book report), and regular drill work. The last day of summer often shows children frantically finishing しゅくだい. Parental help is common and expected."},

    {type:"teach", trg:"テスト", src:"test / exam", pos:"noun", gender:null,
     note:"Loanword. テストをうける = to take a test.\nちゅうかんテスト = midterm. きまつテスト = final exam.",
     example:"A: あしたテストがあります。\nB: がんばってください。",
     exampleSrc:"A: There is a test tomorrow.\nB: Do your best.",
     funFact:"Japanese school テスト culture is intense. ちゅうかんテスト (midterms) and きまつテスト (finals) determine grades. じゅけん (entrance exams) for high school and university are life-defining events. テストきかん (exam period) means even club activities pause. The phrase テストべんきょう (test studying) is a way of life."},

    {type:"match", pairs:[{trg:"すうがく",src:"mathematics"},{trg:"おんがく",src:"music"},{trg:"びじゅつ",src:"art"},{trg:"かていか",src:"home economics"},{trg:"どうとく",src:"moral education"}],
     hint:"Match each school subject with its English name."},

    {type:"mc", q:"What makes Japanese どうとく (moral education) unique?", opts:["It is a specific graded subject focused on ethics and values","It is optional for students","It only covers religion","It is taught only in high school"], ans:"It is a specific graded subject focused on ethics and values",
     hint:"This became an officially g... s... in 2018, teaching v... through stories and discussion."},

    {type:"fb", s:"{1}はおわりましたか？まだです。\n(Have you finished your homework? Not yet.)", a:"しゅくだい", opts:["しゅくだい","テスト","じゅぎょう","かもく"], sSrc:"Have you finished your homework? Not yet.",
     hint:"This work is assigned by teachers to be completed at home."},

    {type:"mc", q:"What is the Japanese term for entrance exams?", opts:["じゅけん","テスト","しゅくだい","じゅぎょう"], ans:"じゅけん",
     hint:"These life-defining exams determine which high school or university you can attend."}
  ]
};
export default BATCH8_L1;
