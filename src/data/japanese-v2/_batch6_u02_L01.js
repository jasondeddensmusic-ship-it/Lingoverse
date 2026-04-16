// Batch 6 – Unit 02 (A1.1 Self-Introduction): Jobs & Occupations
const BATCH6_L1 = {
  id:"jav2_u02l_b6_1", title:"しごと", icon:"👔", xp:15, board:true,
  steps:[
    {type:"intro", title:"しごと",
     desc:"Learn common job titles and how to talk about what you do for a living. Being able to state your occupation is essential for self-introductions in Japan.",
     goals:["Name common occupations in Japanese","Say what your job is using は...です","Ask others about their work"]},

    {type:"teach", trg:"しごと", src:"work / job", pos:"noun", gender:null,
     note:"Kanji: 仕事. しごとをする = to work.\nなんのしごと = what kind of work.",
     example:"A: おしごとはなんですか？\nB: きょうしです。",
     exampleSrc:"A: What is your job?\nB: I am a teacher.",
     funFact:"仕事 combines 仕 (serve) and 事 (matter). The お prefix in おしごと makes it polite. Asking about someone's job is one of the first things Japanese people do when meeting someone new, right after exchanging names."},

    {type:"teach", trg:"きょうし", src:"teacher (formal)", pos:"noun", gender:null,
     note:"Kanji: 教師. More formal than せんせい.\nUsed for the profession itself.",
     example:"A: ちちはこうこうのきょうしです。\nB: すごいですね。なにをおしえていますか？",
     exampleSrc:"A: My father is a high school teacher.\nB: That is impressive. What does he teach?",
     funFact:"せんせい is used when addressing a teacher directly, while きょうし is used when describing the profession. A doctor, lawyer, or politician can also be called せんせい, but きょうし specifically means educator."},

    {type:"teach", trg:"いしゃ", src:"doctor", pos:"noun", gender:null,
     note:"Kanji: 医者. おいしゃさん = doctor (polite).\nいしゃになる = to become a doctor.",
     example:"A: おとうさんのしごとはなんですか？\nB: いしゃです。びょういんではたらいています。",
     exampleSrc:"A: What does your father do?\nB: He is a doctor. He works at a hospital.",
     funFact:"In Japan, doctors are highly respected and addressed as せんせい. Medical school takes 6 years after high school. The polite form おいしゃさん adds both お and さん, showing extra respect for the profession."},

    {type:"teach", trg:"かいしゃいん", src:"company employee / office worker", pos:"noun", gender:null,
     note:"Kanji: 会社員. The most common job description in Japan.\nかいしゃ = company, いん = member.",
     example:"A: わたしはかいしゃいんです。\nB: どんなかいしゃではたらいていますか？",
     exampleSrc:"A: I am a company employee.\nB: What kind of company do you work at?",
     funFact:"かいしゃいん is the default answer many Japanese people give when asked their job. Japan's corporate culture is famous for lifetime employment (though this is changing). The 会社 (company) was traditionally a second family."},

    {type:"teach", trg:"がくせい", src:"student", pos:"noun", gender:null,
     note:"Kanji: 学生. だいがくせい = university student.\nちゅうがくせい = middle school student.",
     example:"A: がくせいですか？\nB: はい、だいがくせいです。けいざいがくをべんきょうしています。",
     exampleSrc:"A: Are you a student?\nB: Yes, I am a university student. I am studying economics.",
     funFact:"The kanji 学 (learn) and 生 (life/person) make 学生, a person who learns. Japanese distinguishes many student levels: しょうがくせい (elementary), ちゅうがくせい (middle), こうこうせい (high), だいがくせい (university), だいがくいんせい (graduate)."},

    {type:"mc", q:"How do you politely ask someone's job?", opts:["おしごとはなんですか","なまえはなんですか","どこですか","いくらですか"], ans:"おしごとはなんですか",
     hint:"The word しごと means work/job. The お prefix adds politeness."},

    {type:"teach", trg:"エンジニア", src:"engineer", pos:"noun", gender:null,
     note:"Katakana loanword from English. Also ぎじゅつしゃ (native word).\nIT エンジニア = IT engineer.",
     example:"A: エンジニアとしてはたらいています。\nB: ソフトウェアですか、ハードウェアですか？",
     exampleSrc:"A: I work as an engineer.\nB: Software or hardware?",
     funFact:"Japan uses many English loanwords for modern professions: エンジニア, デザイナー (designer), プログラマー (programmer). However, traditional professions keep Japanese names: きょうし, いしゃ, べんごし (lawyer)."},

    {type:"teach", trg:"かんごし", src:"nurse", pos:"noun", gender:null,
     note:"Kanji: 看護師. Gender-neutral term.\nかんごしになる = to become a nurse.",
     example:"A: あねはかんごしです。びょういんではたらいています。\nB: たいへんなしごとですね。",
     exampleSrc:"A: My older sister is a nurse. She works at a hospital.\nB: That is a demanding job.",
     funFact:"The old term かんごふ (看護婦) was feminine. Japan switched to the gender-neutral かんごし (看護師) in 2002. The 師 suffix means 'professional/master' and appears in many job titles: きょうし, いやくし (pharmacist), ちょうりし (chef)."},

    {type:"teach", trg:"みせ", src:"shop / store", pos:"noun", gender:null,
     note:"Kanji: 店. おみせ = shop (polite). みせをひらく = to open a shop.\nGeneral word for any retail business.",
     example:"A: このみせはなんじにあきますか？\nB: あさくじにあきます。",
     exampleSrc:"A: What time does this shop open?\nB: It opens at 9 AM.",
     funFact:"みせ uses the kanji 店 which also reads てん in compound words: しょてん (bookstore), ばいてん (stall). Adding や to a product gives you the shop: パンや (bakery), はなや (florist), にくや (butcher)."},

    {type:"teach", trg:"はたらく", src:"to work", pos:"verb", gender:null,
     note:"Group 1 verb. はたらいています = I am working (currently employed).\nKanji: 働く.",
     example:"A: どこではたらいていますか？\nB: とうきょうのぎんこうではたらいています。",
     exampleSrc:"A: Where do you work?\nB: I work at a bank in Tokyo.",
     funFact:"The kanji 働 is uniquely Japanese (not borrowed from Chinese). It combines 人 (person) and 動 (move), meaning 'a person in motion.' Japan is known for its work ethic, and はたらく is one of the most important verbs in daily life."},

    {type:"teach", trg:"やすみ", src:"day off / rest / break", pos:"noun", gender:null,
     note:"From やすむ (to rest). きゅうじつ = holiday.\nやすみのひ = day off.",
     example:"A: あしたはやすみですか？\nB: はい、ひさしぶりのやすみです。",
     exampleSrc:"A: Is tomorrow your day off?\nB: Yes, it is a day off after a long time.",
     funFact:"Japanese workers are famous for not taking all their vacation days. The word やすみ comes from やすむ (to rest), but taking rest is culturally complicated. In recent years, the government promotes プレミアムフライデー (Premium Friday) and ワークライフバランス (work-life balance)."},

    {type:"fb", s:"わたしはかいしゃ{1}です。\n(I am a company employee.)", a:"いん", opts:["いん","にん","じん","しゃ"], sSrc:"I am a company employee.",
     hint:"The suffix meaning 'member' that attaches to かいしゃ (company)."},

    {type:"mc", q:"What does はたらく mean?", opts:["To work","To study","To rest","To eat"], ans:"To work",
     hint:"This verb uses the kanji 働 which combines person and movement."},

    {type:"teach", trg:"しゅふ", src:"homemaker", pos:"noun", gender:null,
     note:"Kanji: 主婦/主夫. しゅふぎょう = homemaking.\nGender-neutral usage is increasing.",
     example:"A: おかあさんはしゅふですか？\nB: いいえ、パートではたらいています。",
     exampleSrc:"A: Is your mother a homemaker?\nB: No, she works part-time.",
     funFact:"Traditionally written 主婦 (with the feminine kanji), the gender-neutral 主夫 now exists for male homemakers. As more Japanese men take on household roles, the word is evolving. Part-time work (パート from 'part-timer') is very common alongside homemaking."},

    {type:"teach", trg:"けいさつかん", src:"police officer", pos:"noun", gender:null,
     note:"Kanji: 警察官. Also おまわりさん (friendly term).\nけいさつ = police, かん = officer.",
     example:"A: こうばんにけいさつかんがいます。\nB: みちをきいてみましょう。",
     exampleSrc:"A: There is a police officer at the police box.\nB: Let us ask for directions.",
     funFact:"Japan's こうばん (police box) system is admired worldwide. Small neighborhood stations are staffed by friendly officers who give directions, hold lost items, and patrol on bicycles. おまわりさん (Mr. Go-Around) is the affectionate name children use."},

    {type:"match", pairs:[
      {trg:"いしゃ", src:"doctor"},
      {trg:"かんごし", src:"nurse"},
      {trg:"かいしゃいん", src:"office worker"},
      {trg:"けいさつかん", src:"police officer"},
      {trg:"しゅふ", src:"homemaker"}
    ]},

    {type:"mc", q:"Which word means 'day off' or 'rest'?", opts:["やすみ","しごと","みせ","がくせい"], ans:"やすみ",
     hint:"This word comes from the verb やすむ meaning to rest."},

    {type:"fb", s:"おしごとは{1}ですか？\n(What is your job?)", a:"なん", opts:["なん","どこ","いくら","だれ"], sSrc:"What is your job?",
     hint:"The question word meaning 'what' that fits before ですか."}
  ]
};
export default BATCH6_L1;
