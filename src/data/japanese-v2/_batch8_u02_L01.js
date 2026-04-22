// Batch 8 – Unit 02 (A1.1 Self-Introduction): Personal Details & Occupations
const BATCH8_L1 = {
  id:"jav2_u02l_b8_1", title:"職業(しょくぎょう)と趣味(しゅみ)", icon:"👔", xp:15, board:true,
  steps:[
    {type:"intro", title:"職業(しょくぎょう)と趣味(しゅみ)",
     desc:"Expand your self-introduction toolkit with occupation titles, hobbies, and personal details. Being able to describe yourself beyond your name and nationality is essential for making connections.",
     goals:["State your occupation using common job titles","Describe basic hobbies and interests","Ask and answer personal detail questions"]},

    {type:"teach", trg:"職業(しょくぎょう)", src:"occupation / profession", pos:"noun", gender:null,
     note:"Kanji: 職業. おしごとはなんですか is the polite way to ask.\n職業欄(しょくぎょうらん) = occupation field (on forms).",
     example:"A: 職業(しょくぎょう)はなんですか？\nB: 会社員(かいしゃいん)です。",
     exampleSrc:"A: What is your occupation?\nB: I am a company employee.",
     funFact:"Japanese business cards (名刺(めいし)) always include your company name and job title. Your 職業(しょくぎょう) often defines your social identity. When Japanese people meet, one of the first questions after names is おしごとは (what is your work)."},

    {type:"teach", trg:"会社員(かいしゃいん)", src:"company employee / office worker", pos:"noun", gender:null,
     note:"Kanji: 会社員. The most common occupation answer.\nサラリーマン is the casual loanword.",
     example:"A: おしごとはなんですか？\nB: IT の会社員(かいしゃいん)です。",
     exampleSrc:"A: What is your work?\nB: I am an IT company employee.",
     funFact:"会社員(かいしゃいん) is Japan's default occupation. About 60% of workers are 会社員(かいしゃいん). The term サラリーマン (salaryman) carries cultural weight: long hours, company loyalty, after-work drinking. The female equivalent was historically OL (office lady), but this term is now considered outdated."},

    {type:"teach", trg:"教師(きょうし)", src:"teacher / instructor", pos:"noun", gender:null,
     note:"Kanji: 教師. More formal than せんせい for referring to the profession.\n日本語教師(にほんごきょうし) = Japanese language teacher.",
     example:"A: 教師(きょうし)になりたいです。\nB: どの科目(かもく)を教(おし)えたいですか？",
     exampleSrc:"A: I want to become a teacher.\nB: What subject do you want to teach?",
     funFact:"In Japan, 教師(きょうし) are highly respected. 小学校(しょうがっこう)の教師(きょうし) (elementary school teachers) go through rigorous training and national exams. The word せんせい is used as a direct address for teachers, doctors, lawyers, and even politicians."},

    {type:"teach", trg:"エンジニア", src:"engineer", pos:"noun", gender:null,
     note:"Loanword from English. ソフトウェアエンジニア = software engineer.\n技術者(ぎじゅつしゃ) is the native Japanese term.",
     example:"A: 仕事(しごと)はなんですか？\nB: エンジニアです。アプリをつくっています。",
     exampleSrc:"A: What is your job?\nB: I am an engineer. I make apps.",
     funFact:"Japan uses both エンジニア (loanword) and 技術者(ぎじゅつしゃ) (native word). Tech companies prefer エンジニア, while manufacturing uses 技術者(ぎじゅつしゃ). Japan's ものづくり (craftsmanship) culture means engineers are deeply respected."},

    {type:"teach", trg:"主婦(しゅふ)", src:"homemaker / housewife", pos:"noun", gender:null,
     note:"Kanji: 主婦 (female) or 主夫 (male, same reading).\n専業主婦(せんぎょうしゅふ) = full-time homemaker.",
     example:"A: いまは主婦(しゅふ)をしています。\nB: お子(こ)さんはおいくつですか？",
     exampleSrc:"A: I am currently a homemaker.\nB: How old is your child?",
     funFact:"Traditionally, 主婦(しゅふ) meant housewife (主婦). The male version 主夫(しゅふ) uses a different kanji for 'husband' but sounds identical. The gender-neutral trend is growing, but the female form remains far more common. About 30% of married women in Japan are 専業主婦(せんぎょうしゅふ)."},

    {type:"mc", q:"What does 会社員(かいしゃいん) mean?", opts:["Company employee","Teacher","Doctor","Student"], ans:"Company employee",
     hint:"This is the most common answer when Japanese people describe their occupation."},

    {type:"teach", trg:"看護師(かんごし)", src:"nurse", pos:"noun", gender:null,
     note:"Kanji: 看護師. Gender-neutral term (replaced 看護婦(かんごふ)).\n看護師(かんごし)になる = to become a nurse.",
     example:"A: 看護師(かんごし)の仕事(しごと)はたいへんですか？\nB: たいへんですが、やりがいがあります。",
     exampleSrc:"A: Is nursing work hard?\nB: It is hard, but it is rewarding.",
     funFact:"Japan changed the official term from 看護婦(かんごふ) (nurse, female connotation) to 看護師(かんごし) (nurse, gender-neutral) in 2002. Male nurses are increasing but still only about 8% of the total. Japan faces a serious nursing shortage, making 看護師(かんごし) one of the most in-demand professions."},

    {type:"teach", trg:"公務員(こうむいん)", src:"civil servant / government worker", pos:"noun", gender:null,
     note:"Kanji: 公務員. 地方公務員(ちほうこうむいん) = local government worker.\nConsidered a very stable career.",
     example:"A: 将来(しょうらい)なにになりたいですか？\nB: 公務員(こうむいん)になりたいです。",
     exampleSrc:"A: What do you want to be in the future?\nB: I want to become a civil servant.",
     funFact:"公務員(こうむいん) is one of the most popular career choices in Japan because of job security and benefits. The 公務員試験(こうむいんしけん) (civil service exam) is extremely competitive. Parents often hope their children become 公務員(こうむいん) because it means lifetime employment."},

    {type:"teach", trg:"自営業(じえいぎょう)", src:"self-employed / freelance", pos:"noun", gender:null,
     note:"Kanji: 自営業. 自営業者(じえいぎょうしゃ) = self-employed person.\nフリーランス is also commonly used.",
     example:"A: 会社員(かいしゃいん)ですか？\nB: いいえ、自営業(じえいぎょう)です。カフェをやっています。",
     exampleSrc:"A: Are you a company employee?\nB: No, I am self-employed. I run a cafe.",
     funFact:"In Japan, being 自営業(じえいぎょう) was traditionally seen as less stable than being a 会社員(かいしゃいん). However, the gig economy and remote work have made フリーランス (freelance) increasingly popular, especially among younger generations who value 自由(じゆう) (freedom)."},

    {type:"teach", trg:"趣味(しゅみ)", src:"hobby / interest", pos:"noun", gender:null,
     note:"Kanji: 趣味. 趣味(しゅみ)はなんですか = What are your hobbies?\nA standard self-introduction question.",
     example:"A: 趣味(しゅみ)はなんですか？\nB: 趣味(しゅみ)は読書(どくしょ)と旅行(りょこう)です。",
     exampleSrc:"A: What are your hobbies?\nB: My hobbies are reading and travel.",
     funFact:"趣味(しゅみ)はなんですか is one of the most common questions in Japanese self-introductions. Popular answers include 読書(どくしょ) (reading), 旅行(りょこう) (travel), 映画(えいが) (movies), and 料理(りょうり) (cooking). In job interviews, this question tests your personality and communication skills."},

    {type:"teach", trg:"読書(どくしょ)", src:"reading (books)", pos:"noun", gender:null,
     note:"Kanji: 読書. 読書(どくしょ)する = to read (books).\nThe most common hobby answer in surveys.",
     example:"A: 趣味(しゅみ)は読書(どくしょ)です。\nB: どんな本(ほん)を読(よ)みますか？",
     exampleSrc:"A: My hobby is reading.\nB: What kind of books do you read?",
     funFact:"読書(どくしょ) consistently ranks as the number one hobby in Japanese surveys. Japan has one of the highest literacy rates in the world. Train commuters reading books or manga is an iconic Japanese scene. 読書(どくしょ)の秋(あき) (autumn of reading) is a cultural season promoting books."},

    {type:"fb", s:"趣味(しゅみ)は{1}です。\n(My hobby is reading.)", a:"読書(どくしょ)", opts:["読書(どくしょ)","職業(しょくぎょう)","会社員(かいしゃいん)","趣味(しゅみ)"], sSrc:"My hobby is reading.",
     hint:"This word specifically means reading books as a leisure activity."},

    {type:"teach", trg:"結婚(けっこん)している", src:"to be married", pos:"verb", gender:null,
     note:"結婚(けっこん) = marriage. 結婚(けっこん)していますか = Are you married?\n独身(どくしん) = single/unmarried.",
     example:"A: 結婚(けっこん)していますか？\nB: はい、結婚(けっこん)して5年(ねん)です。",
     exampleSrc:"A: Are you married?\nB: Yes, I have been married for 5 years.",
     funFact:"Asking 結婚(けっこん)していますか is common in casual conversation in Japan but can be sensitive in business settings. Japan's marriage rate has been declining steadily. The average marriage age is now about 31 for men and 29 for women. 未婚率(みこんりつ) (unmarried rate) is a frequent topic in Japanese news."},

    {type:"teach", trg:"住(す)んでいる", src:"to live (somewhere) / to reside", pos:"verb", gender:null,
     note:"From 住(す)む (to live). どこに住(す)んでいますか = Where do you live?\nThe ている form shows ongoing state.",
     example:"A: どこに住(す)んでいますか？\nB: 東京(とうきょう)に住(す)んでいます。",
     exampleSrc:"A: Where do you live?\nB: I live in Tokyo.",
     funFact:"どこに住(す)んでいますか is a natural follow-up in self-introductions. Japanese people often answer with their city or ward (区(く)). In Tokyo, your residential area (住(す)んでいるところ) carries social associations. 渋谷(しぶや) sounds trendy, 練馬(ねりま) sounds family-friendly."},

    {type:"match", pairs:[{trg:"会社員(かいしゃいん)",src:"company employee"},{trg:"教師(きょうし)",src:"teacher"},{trg:"看護師(かんごし)",src:"nurse"},{trg:"公務員(こうむいん)",src:"civil servant"},{trg:"自営業(じえいぎょう)",src:"self-employed"}],
     hint:"Match each occupation with its English translation."},

    {type:"mc", q:"Which phrase asks about someone's hobbies?", opts:["どこに住(す)んでいますか","趣味(しゅみ)はなんですか","職業(しょくぎょう)はなんですか","おなまえは"], ans:"趣味(しゅみ)はなんですか",
     hint:"趣味(しゅみ) is the Japanese word for hobby or interest."},

    {type:"fb", s:"どこに{1}か？\n(Where do you live?)", a:"住(す)んでいます", opts:["住(す)んでいます","結婚(けっこん)しています","しています","います"], sSrc:"Where do you live?",
     hint:"This phrase uses the verb 住(す)む (to live) in the ongoing-state form."},

    {type:"mc", q:"What is the gender-neutral term for nurse in Japanese?", opts:["会社員(かいしゃいん)","公務員(こうむいん)","看護師(かんごし)","教師(きょうし)"], ans:"看護師(かんごし)",
     hint:"Japan changed this term in 2002 to remove the female-specific connotation."}
  ,{type:"match",pairs:[{trg:"エンジニア",src:"engineer"},{trg:"主婦(しゅふ)",src:"homemaker / housewife"},{trg:"結婚(けっこん)している",src:"to be married"},{trg:"住(す)んでいる",src:"to live (somewhere) / to reside"}]}]
};
export default BATCH8_L1;
