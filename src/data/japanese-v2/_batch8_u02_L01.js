// Batch 8 – Unit 02 (A1.1 Self-Introduction): Personal Details & Occupations
const BATCH8_L1 = {
  id:"jav2_u02l_b8_1", title:"しょくぎょうとしゅみ", icon:"👔", xp:15, board:true,
  steps:[
    {type:"intro", title:"しょくぎょうとしゅみ",
     desc:"Expand your self-introduction toolkit with occupation titles, hobbies, and personal details. Being able to describe yourself beyond your name and nationality is essential for making connections.",
     goals:["State your occupation using common job titles","Describe basic hobbies and interests","Ask and answer personal detail questions"]},

    {type:"teach", trg:"しょくぎょう", src:"occupation / profession", pos:"noun", gender:null,
     note:"Kanji: 職業. おしごとはなんですか is the polite way to ask.\nしょくぎょうらん = occupation field (on forms).",
     example:"A: しょくぎょうはなんですか？\nB: かいしゃいんです。",
     exampleSrc:"A: What is your occupation?\nB: I am a company employee.",
     funFact:"Japanese business cards (めいし) always include your company name and job title. Your しょくぎょう often defines your social identity. When Japanese people meet, one of the first questions after names is おしごとは (what is your work)."},

    {type:"teach", trg:"かいしゃいん", src:"company employee / office worker", pos:"noun", gender:null,
     note:"Kanji: 会社員. The most common occupation answer.\nサラリーマン is the casual loanword.",
     example:"A: おしごとはなんですか？\nB: IT のかいしゃいんです。",
     exampleSrc:"A: What is your work?\nB: I am an IT company employee.",
     funFact:"かいしゃいん is Japan's default occupation. About 60% of workers are かいしゃいん. The term サラリーマン (salaryman) carries cultural weight: long hours, company loyalty, after-work drinking. The female equivalent was historically OL (office lady), but this term is now considered outdated."},

    {type:"teach", trg:"きょうし", src:"teacher / instructor", pos:"noun", gender:null,
     note:"Kanji: 教師. More formal than せんせい for referring to the profession.\nにほんごきょうし = Japanese language teacher.",
     example:"A: きょうしになりたいです。\nB: どのかもくをおしえたいですか？",
     exampleSrc:"A: I want to become a teacher.\nB: What subject do you want to teach?",
     funFact:"In Japan, きょうし are highly respected. Elementary school teachers (しょうがっこうのきょうし) go through rigorous training and national exams. The word せんせい is used as a direct address for teachers, doctors, lawyers, and even politicians."},

    {type:"teach", trg:"エンジニア", src:"engineer", pos:"noun", gender:null,
     note:"Loanword from English. ソフトウェアエンジニア = software engineer.\nぎじゅつしゃ is the native Japanese term.",
     example:"A: しごとはなんですか？\nB: エンジニアです。アプリをつくっています。",
     exampleSrc:"A: What is your job?\nB: I am an engineer. I make apps.",
     funFact:"Japan uses both エンジニア (loanword) and ぎじゅつしゃ (技術者, native word). Tech companies prefer エンジニア, while manufacturing uses ぎじゅつしゃ. Japan's ものづくり (craftsmanship) culture means engineers are deeply respected."},

    {type:"teach", trg:"しゅふ", src:"homemaker / housewife", pos:"noun", gender:null,
     note:"Kanji: 主婦 (female) or 主夫 (male, same reading).\nせんぎょうしゅふ = full-time homemaker.",
     example:"A: いまはしゅふをしています。\nB: おこさんはおいくつですか？",
     exampleSrc:"A: I am currently a homemaker.\nB: How old is your child?",
     funFact:"Traditionally, しゅふ meant housewife (主婦). The male version 主夫 uses a different kanji for 'husband' but sounds identical. The gender-neutral trend is growing, but the female form remains far more common. About 30% of married women in Japan are せんぎょうしゅふ."},

    {type:"mc", q:"What does かいしゃいん mean?", opts:["Company employee","Teacher","Doctor","Student"], ans:"Company employee",
     hint:"This is the most common answer when Japanese people describe their occupation."},

    {type:"teach", trg:"かんごし", src:"nurse", pos:"noun", gender:null,
     note:"Kanji: 看護師. Gender-neutral term (replaced かんごふ).\nかんごしになる = to become a nurse.",
     example:"A: かんごしのしごとはたいへんですか？\nB: たいへんですが、やりがいがあります。",
     exampleSrc:"A: Is nursing work hard?\nB: It is hard, but it is rewarding.",
     funFact:"Japan changed the official term from かんごふ (nurse, female connotation) to かんごし (nurse, gender-neutral) in 2002. Male nurses are increasing but still only about 8% of the total. Japan faces a serious nursing shortage, making かんごし one of the most in-demand professions."},

    {type:"teach", trg:"こうむいん", src:"civil servant / government worker", pos:"noun", gender:null,
     note:"Kanji: 公務員. ちほうこうむいん = local government worker.\nConsidered a very stable career.",
     example:"A: しょうらいなにになりたいですか？\nB: こうむいんになりたいです。",
     exampleSrc:"A: What do you want to be in the future?\nB: I want to become a civil servant.",
     funFact:"こうむいん is one of the most popular career choices in Japan because of job security and benefits. The こうむいんしけん (civil service exam) is extremely competitive. Parents often hope their children become こうむいん because it means lifetime employment."},

    {type:"teach", trg:"じえいぎょう", src:"self-employed / freelance", pos:"noun", gender:null,
     note:"Kanji: 自営業. じえいぎょうしゃ = self-employed person.\nフリーランス is also commonly used.",
     example:"A: かいしゃいんですか？\nB: いいえ、じえいぎょうです。カフェをやっています。",
     exampleSrc:"A: Are you a company employee?\nB: No, I am self-employed. I run a cafe.",
     funFact:"In Japan, being じえいぎょう was traditionally seen as less stable than being a かいしゃいん. However, the gig economy and remote work have made フリーランス (freelance) increasingly popular, especially among younger generations who value じゆう (freedom)."},

    {type:"teach", trg:"しゅみ", src:"hobby / interest", pos:"noun", gender:null,
     note:"Kanji: 趣味. しゅみはなんですか = What are your hobbies?\nA standard self-introduction question.",
     example:"A: しゅみはなんですか？\nB: しゅみはどくしょとりょこうです。",
     exampleSrc:"A: What are your hobbies?\nB: My hobbies are reading and travel.",
     funFact:"しゅみはなんですか is one of the most common questions in Japanese self-introductions. Popular answers include どくしょ (reading), りょこう (travel), えいが (movies), and りょうり (cooking). In job interviews, this question tests your personality and communication skills."},

    {type:"teach", trg:"どくしょ", src:"reading (books)", pos:"noun", gender:null,
     note:"Kanji: 読書. どくしょする = to read (books).\nThe most common hobby answer in surveys.",
     example:"A: しゅみはどくしょです。\nB: どんなほんをよみますか？",
     exampleSrc:"A: My hobby is reading.\nB: What kind of books do you read?",
     funFact:"どくしょ consistently ranks as the number one hobby in Japanese surveys. Japan has one of the highest literacy rates in the world. Train commuters reading books or manga is an iconic Japanese scene. どくしょのあき (autumn of reading) is a cultural season promoting books."},

    {type:"fb", s:"しゅみは{1}です。\n(My hobby is reading.)", a:"どくしょ", opts:["どくしょ","しょくぎょう","かいしゃいん","しゅみ"], sSrc:"My hobby is reading.",
     hint:"This word specifically means reading books as a leisure activity."},

    {type:"teach", trg:"けっこんしている", src:"to be married", pos:"verb", gender:null,
     note:"けっこん = marriage. けっこんしていますか = Are you married?\nどくしん = single/unmarried.",
     example:"A: けっこんしていますか？\nB: はい、けっこんして5ねんです。",
     exampleSrc:"A: Are you married?\nB: Yes, I have been married for 5 years.",
     funFact:"Asking けっこんしていますか is common in casual conversation in Japan but can be sensitive in business settings. Japan's marriage rate has been declining steadily. The average marriage age is now about 31 for men and 29 for women. みこんりつ (unmarried rate) is a frequent topic in Japanese news."},

    {type:"teach", trg:"すんでいる", src:"to live (somewhere) / to reside", pos:"verb", gender:null,
     note:"From すむ (to live). どこにすんでいますか = Where do you live?\nThe ている form shows ongoing state.",
     example:"A: どこにすんでいますか？\nB: とうきょうにすんでいます。",
     exampleSrc:"A: Where do you live?\nB: I live in Tokyo.",
     funFact:"どこにすんでいますか is a natural follow-up in self-introductions. Japanese people often answer with their city or ward (く). In Tokyo, your residential area (すんでいるところ) carries social associations. しぶや sounds trendy, ねりま sounds family-friendly."},

    {type:"match", pairs:[{trg:"かいしゃいん",src:"company employee"},{trg:"きょうし",src:"teacher"},{trg:"かんごし",src:"nurse"},{trg:"こうむいん",src:"civil servant"},{trg:"じえいぎょう",src:"self-employed"}],
     hint:"Match each occupation with its English translation."},

    {type:"mc", q:"Which phrase asks about someone's hobbies?", opts:["しゅみはなんですか","しょくぎょうはなんですか","おなまえは","どこにすんでいますか"], ans:"しゅみはなんですか",
     hint:"しゅみ is the Japanese word for hobby or interest."},

    {type:"fb", s:"どこに{1}か？\n(Where do you live?)", a:"すんでいます", opts:["すんでいます","けっこんしています","しています","います"], sSrc:"Where do you live?",
     hint:"This phrase uses the verb すむ (to live) in the ongoing-state form."},

    {type:"mc", q:"What is the gender-neutral term for nurse in Japanese?", opts:["かんごし","きょうし","かいしゃいん","こうむいん"], ans:"かんごし",
     hint:"Japan changed this term in 2002 to remove the female-specific connotation."}
  ]
};
export default BATCH8_L1;
