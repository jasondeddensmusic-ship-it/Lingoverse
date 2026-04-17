// Batch 6 – Unit 02 (A1.1 Self-Introduction): Jobs & Occupations
const BATCH6_L1 = {
  id:"jav2_u02l_b6_1", title:"仕事(しごと)", icon:"👔", xp:15, board:true,
  steps:[
    {type:"intro", title:"仕事(しごと)",
     desc:"Learn common job titles and how to talk about what you do for a living. Being able to state your occupation is essential for self-introductions in Japan.",
     goals:["Name common occupations in Japanese","Say what your job is using は...です","Ask others about their work"]},

    {type:"teach", trg:"仕事(しごと)", src:"work / job", pos:"noun", gender:null,
     note:"Kanji: 仕事. 仕事(しごと)をする = to work.\nなんの仕事(しごと) = what kind of work.",
     example:"A: お仕事(しごと)はなんですか？\nB: 教師(きょうし)です。",
     exampleSrc:"A: What is your job?\nB: I am a teacher.",
     funFact:"仕事(しごと) combines 仕 (serve) and 事 (matter). The お prefix in お仕事(しごと) makes it polite. Asking about someone's job is one of the first things Japanese people do when meeting someone new, right after exchanging names."},

    {type:"teach", trg:"教師(きょうし)", src:"teacher (formal)", pos:"noun", gender:null,
     note:"Kanji: 教師. More formal than 先生(せんせい).\nUsed for the profession itself.",
     example:"A: 父(ちち)は高校(こうこう)の教師(きょうし)です。\nB: すごいですね。何(なに)を教(おし)えていますか？",
     exampleSrc:"A: My father is a high school teacher.\nB: That is impressive. What does he teach?",
     funFact:"先生(せんせい) is used when addressing a teacher directly, while 教師(きょうし) is used when describing the profession. A doctor, lawyer, or politician can also be called 先生(せんせい), but 教師(きょうし) specifically means educator."},

    {type:"teach", trg:"医者(いしゃ)", src:"doctor", pos:"noun", gender:null,
     note:"Kanji: 医者. お医者(いしゃ)さん = doctor (polite).\n医者(いしゃ)になる = to become a doctor.",
     example:"A: お父(とう)さんの仕事(しごと)はなんですか？\nB: 医者(いしゃ)です。病院(びょういん)で働(はたら)いています。",
     exampleSrc:"A: What does your father do?\nB: He is a doctor. He works at a hospital.",
     funFact:"In Japan, doctors are highly respected and addressed as 先生(せんせい). Medical school takes 6 years after high school. The polite form お医者(いしゃ)さん adds both お and さん, showing extra respect for the profession."},

    {type:"teach", trg:"会社員(かいしゃいん)", src:"company employee / office worker", pos:"noun", gender:null,
     note:"Kanji: 会社員. The most common job description in Japan.\n会社(かいしゃ) = company, 員(いん) = member.",
     example:"A: 私(わたし)は会社員(かいしゃいん)です。\nB: どんな会社(かいしゃ)で働(はたら)いていますか？",
     exampleSrc:"A: I am a company employee.\nB: What kind of company do you work at?",
     funFact:"会社員(かいしゃいん) is the default answer many Japanese people give when asked their job. Japan's corporate culture is famous for lifetime employment (though this is changing). The 会社(かいしゃ) (company) was traditionally a second family."},

    {type:"teach", trg:"学生(がくせい)", src:"student", pos:"noun", gender:null,
     note:"Kanji: 学生. 大学生(だいがくせい) = university student.\n中学生(ちゅうがくせい) = middle school student.",
     example:"A: 学生(がくせい)ですか？\nB: はい、大学生(だいがくせい)です。経済学(けいざいがく)を勉強(べんきょう)しています。",
     exampleSrc:"A: Are you a student?\nB: Yes, I am a university student. I am studying economics.",
     funFact:"The kanji 学 (learn) and 生 (life/person) make 学生(がくせい), a person who learns. Japanese distinguishes many student levels: 小学生(しょうがくせい) (elementary), 中学生(ちゅうがくせい) (middle), 高校生(こうこうせい) (high), 大学生(だいがくせい) (university), 大学院生(だいがくいんせい) (graduate)."},

    {type:"mc", q:"How do you politely ask someone's job?", opts:["お仕事(しごと)はなんですか","名前(なまえ)はなんですか","どこですか","いくらですか"], ans:"お仕事(しごと)はなんですか",
     hint:"The word 仕事(しごと) means work/job. The お prefix adds politeness."},

    {type:"teach", trg:"エンジニア", src:"engineer", pos:"noun", gender:null,
     note:"Katakana loanword from English. Also 技術者(ぎじゅつしゃ) (native word).\nITエンジニア = IT engineer.",
     example:"A: エンジニアとして働(はたら)いています。\nB: ソフトウェアですか、ハードウェアですか？",
     exampleSrc:"A: I work as an engineer.\nB: Software or hardware?",
     funFact:"Japan uses many English loanwords for modern professions: エンジニア, デザイナー (designer), プログラマー (programmer). However, traditional professions keep Japanese names: 教師(きょうし), 医者(いしゃ), 弁護士(べんごし) (lawyer)."},

    {type:"teach", trg:"看護師(かんごし)", src:"nurse", pos:"noun", gender:null,
     note:"Kanji: 看護師. Gender-neutral term.\n看護師(かんごし)になる = to become a nurse.",
     example:"A: 姉(あね)は看護師(かんごし)です。病院(びょういん)で働(はたら)いています。\nB: 大変(たいへん)な仕事(しごと)ですね。",
     exampleSrc:"A: My older sister is a nurse. She works at a hospital.\nB: That is a demanding job.",
     funFact:"The old term 看護婦(かんごふ) was feminine. Japan switched to the gender-neutral 看護師(かんごし) in 2002. The 師(し) suffix means 'professional/master' and appears in many job titles: 教師(きょうし), 薬剤師(いやくし) (pharmacist), 調理師(ちょうりし) (chef)."},

    {type:"teach", trg:"店(みせ)", src:"shop / store", pos:"noun", gender:null,
     note:"Kanji: 店. お店(みせ) = shop (polite). 店(みせ)を開(ひら)く = to open a shop.\nGeneral word for any retail business.",
     example:"A: この店(みせ)は何時(なんじ)に開(あ)きますか？\nB: 朝(あさ)9時(くじ)に開(あ)きます。",
     exampleSrc:"A: What time does this shop open?\nB: It opens at 9 AM.",
     funFact:"店(みせ) uses the kanji 店(てん) which also reads てん in compound words: 書店(しょてん) (bookstore), 売店(ばいてん) (stall). Adding や to a product gives you the shop: パン屋(や) (bakery), 花屋(はなや) (florist), 肉屋(にくや) (butcher)."},

    {type:"teach", trg:"働(はたら)く", src:"to work", pos:"verb", gender:null,
     note:"Group 1 verb. 働(はたら)いています = I am working (currently employed).\nKanji: 働く.",
     example:"A: どこで働(はたら)いていますか？\nB: 東京(とうきょう)の銀行(ぎんこう)で働(はたら)いています。",
     exampleSrc:"A: Where do you work?\nB: I work at a bank in Tokyo.",
     funFact:"The kanji 働(はたら)く is uniquely Japanese (not borrowed from Chinese). It combines 人 (person) and 動 (move), meaning 'a person in motion.' Japan is known for its work ethic, and 働(はたら)く is one of the most important verbs in daily life."},

    {type:"teach", trg:"休(やす)み", src:"day off / rest / break", pos:"noun", gender:null,
     note:"From 休(やす)む (to rest). 休日(きゅうじつ) = holiday.\n休(やす)みの日(ひ) = day off.",
     example:"A: 明日(あした)は休(やす)みですか？\nB: はい、久(ひさ)しぶりの休(やす)みです。",
     exampleSrc:"A: Is tomorrow your day off?\nB: Yes, it is a day off after a long time.",
     funFact:"Japanese workers are famous for not taking all their vacation days. The word 休(やす)み comes from 休(やす)む (to rest), but taking rest is culturally complicated. In recent years, the government promotes プレミアムフライデー (Premium Friday) and ワークライフバランス (work-life balance)."},

    {type:"fb", s:"私(わたし)は会社(かいしゃ){1}です。\n(I am a company employee.)", a:"員(いん)", opts:["員(いん)","人(にん)","人(じん)","者(しゃ)"], sSrc:"I am a company employee.",
     hint:"The suffix meaning 'member' that attaches to 会社(かいしゃ) (company)."},

    {type:"mc", q:"What does 働(はたら)く mean?", opts:["To work","To study","To rest","To eat"], ans:"To work",
     hint:"This verb uses the kanji 働 which combines person and movement."},

    {type:"teach", trg:"主婦(しゅふ)", src:"homemaker", pos:"noun", gender:null,
     note:"Kanji: 主婦/主夫. 主婦業(しゅふぎょう) = homemaking.\nGender-neutral usage is increasing.",
     example:"A: お母(かあ)さんは主婦(しゅふ)ですか？\nB: いいえ、パートで働(はたら)いています。",
     exampleSrc:"A: Is your mother a homemaker?\nB: No, she works part-time.",
     funFact:"Traditionally written 主婦(しゅふ) (with the feminine kanji), the gender-neutral 主夫(しゅふ) now exists for male homemakers. As more Japanese men take on household roles, the word is evolving. Part-time work (パート from 'part-timer') is very common alongside homemaking."},

    {type:"teach", trg:"警察官(けいさつかん)", src:"police officer", pos:"noun", gender:null,
     note:"Kanji: 警察官. Also お巡(まわ)りさん (friendly term).\n警察(けいさつ) = police, 官(かん) = officer.",
     example:"A: 交番(こうばん)に警察官(けいさつかん)がいます。\nB: 道(みち)を聞(き)いてみましょう。",
     exampleSrc:"A: There is a police officer at the police box.\nB: Let us ask for directions.",
     funFact:"Japan's 交番(こうばん) (police box) system is admired worldwide. Small neighborhood stations are staffed by friendly officers who give directions, hold lost items, and patrol on bicycles. お巡(まわ)りさん (Mr. Go-Around) is the affectionate name children use."},

    {type:"match", pairs:[
      {trg:"医者(いしゃ)", src:"doctor"},
      {trg:"看護師(かんごし)", src:"nurse"},
      {trg:"会社員(かいしゃいん)", src:"office worker"},
      {trg:"警察官(けいさつかん)", src:"police officer"},
      {trg:"主婦(しゅふ)", src:"homemaker"}
    ]},

    {type:"mc", q:"Which word means 'day off' or 'rest'?", opts:["休(やす)み","仕事(しごと)","店(みせ)","学生(がくせい)"], ans:"休(やす)み",
     hint:"This word comes from the verb 休(やす)む meaning to rest."},

    {type:"fb", s:"お仕事(しごと)は{1}ですか？\n(What is your job?)", a:"なん", opts:["なん","どこ","いくら","だれ"], sSrc:"What is your job?",
     hint:"The question word meaning 'what' that fits before ですか."}
  ]
};
export default BATCH6_L1;
