// Batch 8 – Unit 12 (A2.1 Ability): School Subjects & Learning
const BATCH8_L1 = {
  id:"jav2_u12l_b8_1", title:"学校(がっこう)の科目(かもく)", icon:"📚", xp:15, board:true,
  steps:[
    {type:"intro", title:"学校(がっこう)の科目(かもく)",
     desc:"Learn vocabulary for school subjects, study activities, and academic life. These words combine naturally with potential form to express what you can and cannot do.",
     goals:["Name major school subjects in Japanese","Describe study activities and abilities","Talk about school life and academic interests"]},

    {type:"teach", trg:"科目(かもく)", src:"school subject / course", pos:"noun", gender:null,
     note:"Kanji: 科目. 好(す)きな科目(かもく) = favorite subject.\n必修(ひっしゅう)科目(かもく) = required course.",
     example:"A: 好(す)きな科目(かもく)はなんですか？\nB: 数学(すうがく)が好(す)きです。",
     exampleSrc:"A: What is your favorite subject?\nB: I like math.",
     funFact:"Japanese schools cover standard 科目(かもく): 国語(こくご) (Japanese), 算数(さんすう)/数学(すうがく) (math), 理科(りか) (science), 社会(しゃかい) (social studies), 英語(えいご) (English), and more. 学年便(がくねんだよ)り (school newsletters) list what each 科目(かもく) will cover. The word itself combines 科 (section) and 目 (eye/item)."},

    {type:"teach", trg:"数学(すうがく)", src:"mathematics", pos:"noun", gender:null,
     note:"Kanji: 数学. Elementary: 算数(さんすう). Middle school+: 数学(すうがく).\n数学者(すうがくしゃ) = mathematician.",
     example:"A: 数学(すうがく)は難(むずか)しいですか？\nB: 少(すこ)し難(むずか)しいですが、面白(おもしろ)いです。",
     exampleSrc:"A: Is math difficult?\nB: It is a little difficult, but interesting.",
     funFact:"Japan consistently ranks in the top 5 globally in 数学(すうがく) education. 算数(さんすう) (arithmetic, elementary) becomes 数学(すうがく) (mathematics, secondary) when algebra and geometry are introduced. Japanese 算盤(そろばん) (abacus) training gives students exceptional mental calculation abilities."},

    {type:"teach", trg:"理科(りか)", src:"science (general/elementary)", pos:"noun", gender:null,
     note:"Kanji: 理科. Elementary school science.\nMiddle school splits into 物理(ぶつり), 化学(かがく), 生物(せいぶつ).",
     example:"A: 理科(りか)の実験(じっけん)が楽(たの)しいです。\nB: 何(なに)を作(つく)りましたか？",
     exampleSrc:"A: Science experiments are fun.\nB: What did you make?",
     funFact:"理科(りか) is the umbrella term for elementary science. It splits into 物理(ぶつり) (physics), 化学(かがく) (chemistry), and 生物(せいぶつ) (biology) in middle school. Japanese 理科(りか) education emphasizes hands-on experiments. The 自由研究(じゆうけんきゅう) (free research project) during summer break is a beloved/dreaded tradition."},

    {type:"teach", trg:"社会(しゃかい)", src:"social studies", pos:"noun", gender:null,
     note:"Kanji: 社会. Also means 'society.' 社会科(しゃかいか) = social studies department.\nCovers history, geography, civics.",
     example:"A: 社会(しゃかい)のテストはいつですか？\nB: 来週(らいしゅう)の水曜日(すいようび)です。",
     exampleSrc:"A: When is the social studies test?\nB: Next Wednesday.",
     funFact:"社会(しゃかい) covers 歴史(れきし) (history), 地理(ちり) (geography), and 公民(こうみん) (civics). Japanese history education is detailed about Japan but selective about modern wars, which remains controversial. Elementary students do 町(まち)探検(たんけん) (town exploration) as 社会(しゃかい) fieldwork."},

    {type:"teach", trg:"体育(たいいく)", src:"physical education / PE", pos:"noun", gender:null,
     note:"Kanji: 体育. 体育(たいいく)の授業(じゅぎょう) = PE class.\n体育館(たいいくかん) = gymnasium.",
     example:"A: 今日(きょう)は体育(たいいく)があります。\nB: 何(なに)をしますか？サッカーですか？",
     exampleSrc:"A: We have PE today.\nB: What will you do? Soccer?",
     funFact:"Japanese 体育(たいいく) is serious: students change into specific 体育着(たいいくぎ) (PE uniforms). Activities include swimming (every school has a pool), marathon running, and 運動会(うんどうかい) (sports festivals). ラジオ体操(たいそう) (radio exercises) are a signature warm-up done throughout life."},

    {type:"mc", q:"What is 理科(りか)?", opts:["Science (elementary level)","Mathematics","Social studies","Physical education"], ans:"Science (elementary level)",
     hint:"This subject splits into physics, chemistry, and biology in middle school."},

    {type:"teach", trg:"音楽(おんがく)", src:"music", pos:"noun", gender:null,
     note:"Kanji: 音楽 (sound + joy/music). 音楽(おんがく)の授業(じゅぎょう) = music class.\n音楽家(おんがくか) = musician.",
     example:"A: 音楽(おんがく)の授業(じゅぎょう)でリコーダーを吹(ふ)きます。\nB: 何(なん)の曲(きょく)ですか？",
     exampleSrc:"A: We play recorder in music class.\nB: What song?",
     funFact:"Every Japanese elementary student learns リコーダー (recorder) and ピアニカ (melodica). School music rooms have grand pianos. 校歌集(こうかしゅう) (songbooks) contain classic Japanese and international songs. Many famous Japanese musicians credit school 音楽(おんがく) classes as their start."},

    {type:"teach", trg:"美術(びじゅつ)", src:"art / fine arts", pos:"noun", gender:null,
     note:"Kanji: 美術. 美術(びじゅつ)の授業(じゅぎょう) = art class.\n美術館(びじゅつかん) = art museum.",
     example:"A: 美術(びじゅつ)で絵(え)を描(か)きました。\nB: 何(なに)を描(か)きましたか？",
     exampleSrc:"A: I drew a picture in art class.\nB: What did you draw?",
     funFact:"Japanese 美術(びじゅつ) education includes painting, pottery, calligraphy, and woodblock printing. 図工(ずこう) (arts and crafts) is the elementary term; 美術(びじゅつ) is used from middle school. Japan's 美術館(びじゅつかん) (art museums) are world-class, with collections spanning ukiyo-e to contemporary art."},

    {type:"teach", trg:"家庭科(かていか)", src:"home economics", pos:"noun", gender:null,
     note:"Kanji: 家庭科. Covers cooking, sewing, household management.\nAll students take it regardless of gender.",
     example:"A: 家庭科(かていか)でエプロンを作(つく)りました。\nB: 上手(じょうず)にできましたか？",
     exampleSrc:"A: I made an apron in home economics.\nB: Did it turn out well?",
     funFact:"Japanese 家庭科(かていか) is mandatory for all genders since 1993. Students learn cooking basics (ご飯(はん)を炊(た)く、味噌汁(みそしる)を作(つく)る), sewing (ミシンを使(つか)う), and home management. This subject teaches self-sufficiency. Making an エプロン (apron) or a ナップザック (knapsack) is a common project."},

    {type:"teach", trg:"道徳(どうとく)", src:"moral education / ethics", pos:"noun", gender:null,
     note:"Kanji: 道徳. A unique Japanese school subject.\nいじめ防止(ぼうし) = bullying prevention.",
     example:"A: 道徳(どうとく)の授業(じゅぎょう)で何(なに)を学(まな)びましたか？\nB: 友達(ともだち)を大切(たいせつ)にすることです。",
     exampleSrc:"A: What did you learn in moral education?\nB: To cherish friends.",
     funFact:"道徳(どうとく) (moral education) is a uniquely Japanese subject. It became an official graded subject in 2018. Lessons use stories and discussions about kindness, responsibility, and community. Topics include いじめ (bullying) prevention, life respect, and Japanese values like 思(おも)いやり (consideration for others)."},

    {type:"teach", trg:"授業(じゅぎょう)", src:"class / lesson (school)", pos:"noun", gender:null,
     note:"Kanji: 授業. 授業(じゅぎょう)中(ちゅう) = during class.\n授業参観(じゅぎょうさんかん) = open class for parents.",
     example:"A: 授業(じゅぎょう)は何時(なんじ)に始(はじ)まりますか？\nB: 八時半(はちじはん)です。",
     exampleSrc:"A: What time does class start?\nB: 8:30.",
     funFact:"Japanese 授業(じゅぎょう) typically last 45 to 50 minutes. Students stay in one classroom while teachers rotate. Before each 授業(じゅぎょう), the 日直(にっちょく) (daily monitor) calls 起立(きりつ)、礼(れい) (stand, bow) to greet the teacher. This ritual shows respect."},

    {type:"fb", s:"好(す)きな{1}はなんですか？\n(What is your favorite subject?)", a:"科目(かもく)", opts:["科目(かもく)","授業(じゅぎょう)","学校(がっこう)","先生(せんせい)"], sSrc:"What is your favorite subject?",
     hint:"This word means a specific area of study within a school curriculum."},

    {type:"teach", trg:"宿題(しゅくだい)", src:"homework", pos:"noun", gender:null,
     note:"Kanji: 宿題. 宿題(しゅくだい)を出(だ)す = to assign homework.\n宿題(しゅくだい)をする = to do homework.",
     example:"A: 宿題(しゅくだい)は終(お)わりましたか？\nB: まだです。あと少(すこ)しです。",
     exampleSrc:"A: Have you finished your homework?\nB: Not yet. A little more to go.",
     funFact:"Japanese 宿題(しゅくだい) is famously demanding. Summer break homework includes a detailed 日記(にっき) (diary), a 自由研究(じゆうけんきゅう) (free research project), 読書感想文(どくしょかんそうぶん) (book report), and regular drill work. The last day of summer often shows children frantically finishing 宿題(しゅくだい). Parental help is common and expected."},

    {type:"teach", trg:"テスト", src:"test / exam", pos:"noun", gender:null,
     note:"Loanword. テストを受(う)ける = to take a test.\n中間(ちゅうかん)テスト = midterm. 期末(きまつ)テスト = final exam.",
     example:"A: 明日(あした)テストがあります。\nB: 頑張(がんば)ってください。",
     exampleSrc:"A: There is a test tomorrow.\nB: Do your best.",
     funFact:"Japanese school テスト culture is intense. 中間(ちゅうかん)テスト (midterms) and 期末(きまつ)テスト (finals) determine grades. 受験(じゅけん) (entrance exams) for high school and university are life-defining events. テスト期間(きかん) (exam period) means even club activities pause. The phrase テスト勉強(べんきょう) (test studying) is a way of life."},

    {type:"match", pairs:[{trg:"数学(すうがく)",src:"mathematics"},{trg:"音楽(おんがく)",src:"music"},{trg:"美術(びじゅつ)",src:"art"},{trg:"家庭科(かていか)",src:"home economics"},{trg:"道徳(どうとく)",src:"moral education"}],
     hint:"Match each school subject with its English name."},

    {type:"mc", q:"What makes Japanese 道徳(どうとく) (moral education) unique?", opts:["It is a specific graded subject focused on ethics and values","It is optional for students","It only covers religion","It is taught only in high school"], ans:"It is a specific graded subject focused on ethics and values",
     hint:"This became an officially g... s... in 2018, teaching v... through stories and discussion."},

    {type:"fb", s:"{1}は終(お)わりましたか？まだです。\n(Have you finished your homework? Not yet.)", a:"宿題(しゅくだい)", opts:["宿題(しゅくだい)","テスト","授業(じゅぎょう)","科目(かもく)"], sSrc:"Have you finished your homework? Not yet.",
     hint:"This work is assigned by teachers to be completed at home."},

    {type:"mc", q:"What is the Japanese term for entrance exams?", opts:["受験(じゅけん)","テスト","宿題(しゅくだい)","授業(じゅぎょう)"], ans:"受験(じゅけん)",
     hint:"These life-defining exams determine which high school or university you can attend."}
  ,{type:"match",pairs:[{trg:"理科(りか)",src:"science (general/elementary)"},{trg:"社会(しゃかい)",src:"social studies"},{trg:"体育(たいいく)",src:"physical education / PE"}]}]
};
export default BATCH8_L1;
