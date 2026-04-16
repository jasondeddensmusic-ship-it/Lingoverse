// Batch 9 – Unit 35 (B2): デジタルしゃかい
const BATCH9_L1 = {
  id:"jav2_u35l_b9_1", title:"デジタルしゃかい", icon:"💻", xp:15, board:true,
  steps:[
    {type:"intro", title:"デジタルしゃかい",
     desc:"Digital society and technology vocabulary",
     goals:["Master key vocabulary for this topic","Use new words in context","Build reading comprehension"]},

    {type:"teach", trg:"じんこうちのう", src:"artificial intelligence", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: じんこうちのうについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about artificial intelligence.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"ビッグデータ", src:"big data", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: ビッグデータについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about big data.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"サイバーセキュリティ", src:"cybersecurity", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: サイバーセキュリティについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about cybersecurity.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"デジタルか", src:"digitalization", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: デジタルかについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about digitalization.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"じどうか", src:"automation", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: じどうかについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about automation.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"ロボティクス", src:"robotics", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: ロボティクスについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about robotics.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"クラウド", src:"cloud computing", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: クラウドについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about cloud computing.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"アルゴリズム", src:"algorithm", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: アルゴリズムについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about algorithm.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"mc", q:"What does じんこうちのう mean?", opts:["artificial intelligence","big data","cybersecurity","digitalization"], ans:"artificial intelligence",
     hint:"This is a key term in this unit's topic area."},

    {type:"fb", s:"{1}はじゅうようです。\n(automation is important.)", a:"じどうか", opts:["じどうか","ロボティクス","クラウド","じんこうちのう"], sSrc:"automation is important.",
     hint:"Think about which word matches the English translation."},

    {type:"match", pairs:[{trg:"じんこうちのう",src:"artificial intelligence"},{trg:"ビッグデータ",src:"big data"},{trg:"サイバーセキュリティ",src:"cybersecurity"},{trg:"デジタルか",src:"digitalization"}]},

    {type:"mc", q:"Which word means algorithm?", opts:["アルゴリズム","じどうか","ビッグデータ","ロボティクス"], ans:"アルゴリズム",
     hint:"This term is essential vocabulary for this topic."}
  ]
};
export default BATCH9_L1;
