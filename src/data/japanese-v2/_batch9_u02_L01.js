// Batch 9 – Unit 02 (A1.1 Self-Intro): Personal Details
const BATCH9_L1 = {
  id:"jav2_u02l_b9_1", title:"自己紹介(じこしょうかい)", icon:"📝", xp:15, board:true,
  steps:[
    {type:"intro", title:"自己紹介(じこしょうかい)",
     desc:"Learn to share personal details like your nationality, job, and age. These are common topics in first conversations.",
     goals:["State your nationality and occupation","Ask about someone's background","Use basic counter words for age"]},

    {type:"teach", trg:"出身(しゅっしん)", src:"hometown / place of origin", pos:"noun", gender:null,
     note:"出身(しゅっしん)はどこですか = Where are you from?\nUsed for city, country, or region.",
     example:"A: 出身(しゅっしん)はどこですか？\nB: オランダのアムステルダムです。",
     exampleSrc:"A: Where are you from?\nB: I am from Amsterdam, the Netherlands.",
     funFact:"出身(しゅっしん) uses kanji meaning 'exit body,' suggesting where you emerged from. Japanese people strongly identify with their 出身(しゅっしん) and often bond over shared regional origins. Local dialects and foods are a source of pride."},

    {type:"teach", trg:"仕事(しごと)", src:"job / work", pos:"noun", gender:null,
     note:"お仕事(しごと)はなんですか = What is your job?\n仕事(しごと)をする = to work.",
     example:"A: お仕事(しごと)はなんですか？\nB: 英語(えいご)の先生(せんせい)です。",
     exampleSrc:"A: What is your job?\nB: I am an English teacher.",
     funFact:"仕事(しごと) literally means 'serving thing.' In Japan, your 仕事(しごと) is closely tied to identity. When introducing yourself, stating your company often comes before your role. The phrase お仕事(しごと) adds お for politeness."},

    {type:"teach", trg:"趣味(しゅみ)", src:"hobby", pos:"noun", gender:null,
     note:"趣味(しゅみ)はなんですか = What are your hobbies?\nA very common self-introduction topic.",
     example:"A: 趣味(しゅみ)はなんですか？\nB: 読書(どくしょ)と旅行(りょこう)です。",
     exampleSrc:"A: What are your hobbies?\nB: Reading and traveling.",
     funFact:"趣味(しゅみ) questions appear in almost every Japanese self-introduction. Common answers include 読書(どくしょ) (reading), 旅行(りょこう) (travel), and 映画鑑賞(えいがかんしょう) (watching movies). Having no 趣味(しゅみ) is considered a bit sad, so people always prepare an answer."},

    {type:"teach", trg:"会社員(かいしゃいん)", src:"office worker / company employee", pos:"noun", gender:null,
     note:"One of the most common occupations in Japan.\n会社(かいしゃ) = company, 員(いん) = member.",
     example:"A: お仕事(しごと)は？\nB: 会社員(かいしゃいん)です。IT会社(かいしゃ)で働(はたら)いています。",
     exampleSrc:"A: Your job?\nB: I am a company employee. I work at an IT company.",
     funFact:"会社員(かいしゃいん) is by far the most common answer to 'what do you do?' in Japan. The term covers everyone from entry-level to senior management. Japanese work culture emphasizes belonging to the 会社(かいしゃ) (company) as a community."},

    {type:"teach", trg:"大学生(だいがくせい)", src:"university student", pos:"noun", gender:null,
     note:"大学(だいがく) = university, 生(せい) = student.\n高校生(こうこうせい) = high school student.",
     example:"A: 学生(がくせい)ですか？\nB: はい、大学生(だいがくせい)です。二年生(にねんせい)です。",
     exampleSrc:"A: Are you a student?\nB: Yes, I am a university student. I am in my second year.",
     funFact:"大学生(だいがくせい) life in Japan is famously relaxed compared to the intense entrance exam period. Japanese 大学生(だいがくせい) often focus on club activities and part-time jobs. The phrase 大学(だいがく)デビュー means reinventing yourself when you start university."},

    {type:"teach", trg:"年齢(ねんれい)", src:"age", pos:"noun", gender:null,
     note:"おいくつですか = How old are you? (polite)\n何歳(なんさい)ですか = What age? (direct)",
     example:"A: おいくつですか？\nB: 二十五歳(にじゅうごさい)です。",
     exampleSrc:"A: How old are you?\nB: I am 25 years old.",
     funFact:"Asking 年齢(ねんれい) is more acceptable in Japan than in Western countries. Age determines social hierarchy and language formality. Japanese traditionally counted age differently with 数(かぞ)え年(どし), where everyone turns one year older on New Year's Day."},

    {type:"teach", trg:"国(くに)", src:"country", pos:"noun", gender:null,
     note:"お国(くに)はどちらですか = Which country are you from? (polite)\n国(くに) can also mean hometown region.",
     example:"A: お国(くに)はどちらですか？\nB: イギリスです。ロンドンから来(き)ました。",
     exampleSrc:"A: Which country are you from?\nB: England. I came from London.",
     funFact:"国(くに) can mean both 'country' and 'home region.' In historical Japanese, 国(くに) referred to the old provinces. Today, お国(くに) still sometimes means 'where in Japan are you from?' rather than nationality. Context tells you which meaning is intended."},

    {type:"teach", trg:"住(す)んでいます", src:"I live in / I am living in", pos:"verb", gender:null,
     note:"どこに住(す)んでいますか = Where do you live?\n住(す)む = to live, ている = ongoing state.",
     example:"A: 今(いま)どこに住(す)んでいますか？\nB: 東京(とうきょう)に住(す)んでいます。",
     exampleSrc:"A: Where do you live now?\nB: I live in Tokyo.",
     funFact:"住(す)んでいます uses the て-form + います pattern for ongoing states. While 住(す)む means 'to settle,' 住(す)んでいます expresses a current living situation. Japanese rental culture means many people move frequently, so this question comes up often in conversation."},

    {type:"mc", q:"How do you politely ask someone's age in Japanese?", opts:["おいくつですか","お名前(なまえ)は","お仕事(しごと)は","お国(くに)はどちらですか"], ans:"おいくつですか",
     hint:"This uses the polite prefix お with a word meaning 'how many,' asking about years of life."},

    {type:"fb", s:"お仕事(しごと)はなんですか？\n{1}です。\n(What is your job? I am a company employee.)", a:"会社員(かいしゃいん)", opts:["会社員(かいしゃいん)","大学生(だいがくせい)","先生(せんせい)","医者(いしゃ)"], sSrc:"What is your job?\nI am a company employee.",
     hint:"This is the most common occupation term in Japan, meaning someone who works at a company."},

    {type:"match", pairs:[
      {trg:"出身(しゅっしん)", src:"place of origin"},
      {trg:"趣味(しゅみ)", src:"hobby"},
      {trg:"年齢(ねんれい)", src:"age"},
      {trg:"国(くに)", src:"country"}
    ]},

    {type:"mc", q:"What does 趣味(しゅみ)はなんですか mean?", opts:["What are your hobbies?","What is your name?","Where do you work?","How old are you?"], ans:"What are your hobbies?",
     hint:"趣味(しゅみ) refers to activities done for pleasure in one's free time."}
  ,{type:"match",pairs:[{trg:"大学生(だいがくせい)",src:"university student"},{trg:"住(す)んでいます",src:"I live in / I am living in"}]}]
};
export default BATCH9_L1;
