// Batch 9 – Unit 02 (A1.1 Self-Intro): Personal Details
const BATCH9_L1 = {
  id:"jav2_u02l_b9_1", title:"じこしょうかい", icon:"📝", xp:15, board:true,
  steps:[
    {type:"intro", title:"じこしょうかい",
     desc:"Learn to share personal details like your nationality, job, and age. These are common topics in first conversations.",
     goals:["State your nationality and occupation","Ask about someone's background","Use basic counter words for age"]},

    {type:"teach", trg:"しゅっしん", src:"hometown / place of origin", pos:"noun", gender:null,
     note:"しゅっしんはどこですか = Where are you from?\nUsed for city, country, or region.",
     example:"A: しゅっしんはどこですか？\nB: オランダのアムステルダムです。",
     exampleSrc:"A: Where are you from?\nB: I am from Amsterdam, the Netherlands.",
     funFact:"しゅっしん (出身) uses kanji meaning 'exit body,' suggesting where you emerged from. Japanese people strongly identify with their しゅっしん and often bond over shared regional origins. Local dialects and foods are a source of pride."},

    {type:"teach", trg:"しごと", src:"job / work", pos:"noun", gender:null,
     note:"おしごとはなんですか = What is your job?\nしごとをする = to work.",
     example:"A: おしごとはなんですか？\nB: えいごのせんせいです。",
     exampleSrc:"A: What is your job?\nB: I am an English teacher.",
     funFact:"しごと (仕事) literally means 'serving thing.' In Japan, your しごと is closely tied to identity. When introducing yourself, stating your company often comes before your role. The phrase おしごと adds お for politeness."},

    {type:"teach", trg:"しゅみ", src:"hobby", pos:"noun", gender:null,
     note:"しゅみはなんですか = What are your hobbies?\nA very common self-introduction topic.",
     example:"A: しゅみはなんですか？\nB: どくしょとりょこうです。",
     exampleSrc:"A: What are your hobbies?\nB: Reading and traveling.",
     funFact:"しゅみ (趣味) questions appear in almost every Japanese self-introduction. Common answers include どくしょ (reading), りょこう (travel), and えいがかんしょう (watching movies). Having no しゅみ is considered a bit sad, so people always prepare an answer."},

    {type:"teach", trg:"かいしゃいん", src:"office worker / company employee", pos:"noun", gender:null,
     note:"One of the most common occupations in Japan.\nかいしゃ = company, いん = member.",
     example:"A: おしごとは？\nB: かいしゃいんです。ITかいしゃではたらいています。",
     exampleSrc:"A: Your job?\nB: I am a company employee. I work at an IT company.",
     funFact:"かいしゃいん (会社員) is by far the most common answer to 'what do you do?' in Japan. The term covers everyone from entry-level to senior management. Japanese work culture emphasizes belonging to the かいしゃ (company) as a community."},

    {type:"teach", trg:"だいがくせい", src:"university student", pos:"noun", gender:null,
     note:"だいがく = university, せい = student.\nこうこうせい = high school student.",
     example:"A: がくせいですか？\nB: はい、だいがくせいです。にねんせいです。",
     exampleSrc:"A: Are you a student?\nB: Yes, I am a university student. I am in my second year.",
     funFact:"だいがくせい (大学生) life in Japan is famously relaxed compared to the intense entrance exam period. Japanese だいがくせい often focus on club activities and part-time jobs. The phrase だいがくデビュー means reinventing yourself when you start university."},

    {type:"teach", trg:"ねんれい", src:"age", pos:"noun", gender:null,
     note:"おいくつですか = How old are you? (polite)\nなんさいですか = What age? (direct)",
     example:"A: おいくつですか？\nB: にじゅうごさいです。",
     exampleSrc:"A: How old are you?\nB: I am 25 years old.",
     funFact:"Asking ねんれい (年齢) is more acceptable in Japan than in Western countries. Age determines social hierarchy and language formality. Japanese traditionally counted age differently with かぞえどし, where everyone turns one year older on New Year's Day."},

    {type:"teach", trg:"くに", src:"country", pos:"noun", gender:null,
     note:"おくにはどちらですか = Which country are you from? (polite)\nくに can also mean hometown region.",
     example:"A: おくにはどちらですか？\nB: イギリスです。ロンドンからきました。",
     exampleSrc:"A: Which country are you from?\nB: England. I came from London.",
     funFact:"くに (国) can mean both 'country' and 'home region.' In historical Japanese, くに referred to the old provinces. Today, おくに still sometimes means 'where in Japan are you from?' rather than nationality. Context tells you which meaning is intended."},

    {type:"teach", trg:"すんでいます", src:"I live in / I am living in", pos:"verb", gender:null,
     note:"どこにすんでいますか = Where do you live?\nすむ = to live, ている = ongoing state.",
     example:"A: いまどこにすんでいますか？\nB: とうきょうにすんでいます。",
     exampleSrc:"A: Where do you live now?\nB: I live in Tokyo.",
     funFact:"すんでいます uses the て-form + います pattern for ongoing states. While すむ means 'to settle,' すんでいます expresses a current living situation. Japanese rental culture means many people move frequently, so this question comes up often in conversation."},

    {type:"mc", q:"How do you politely ask someone's age in Japanese?", opts:["おいくつですか","おなまえは","おしごとは","おくにはどちらですか"], ans:"おいくつですか",
     hint:"This uses the polite prefix お with a word meaning 'how many,' asking about years of life."},

    {type:"fb", s:"おしごとはなんですか？\n{1}です。\n(What is your job? I am a company employee.)", a:"かいしゃいん", opts:["かいしゃいん","だいがくせい","せんせい","いしゃ"], sSrc:"What is your job?\nI am a company employee.",
     hint:"This is the most common occupation term in Japan, meaning someone who works at a company."},

    {type:"match", pairs:[
      {trg:"しゅっしん", src:"place of origin"},
      {trg:"しゅみ", src:"hobby"},
      {trg:"ねんれい", src:"age"},
      {trg:"くに", src:"country"}
    ]},

    {type:"mc", q:"What does しゅみはなんですか mean?", opts:["What are your hobbies?","What is your name?","Where do you work?","How old are you?"], ans:"What are your hobbies?",
     hint:"しゅみ refers to activities done for pleasure in one's free time."}
  ]
};
export default BATCH9_L1;
