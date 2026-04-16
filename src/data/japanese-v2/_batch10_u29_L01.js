// Batch 10 – Unit 29 (B2): しじょう
const BATCH10_L1 = {
  id:"jav2_u29l_b10_1", title:"しじょう", icon:"🏦", xp:15, board:true,
  steps:[
    {type:"intro", title:"しじょう",
     desc:"Financial markets and trade vocabulary",
     goals:["Master key vocabulary for this topic","Use new words in context","Build reading comprehension"]},

    {type:"teach", trg:"ゆしゅつ", src:"export", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: ゆしゅつについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about export.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"ゆにゅう", src:"import", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: ゆにゅうについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about import.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"ぼうえき", src:"trade", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: ぼうえきについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about trade.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"かんぜい", src:"tariff", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: かんぜいについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about tariff.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"きょうきゅう", src:"supply", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: きょうきゅうについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about supply.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"じゅよう", src:"demand", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: じゅようについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about demand.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"しじょうかかく", src:"market price", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: しじょうかかくについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about market price.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"ちょくせつとうし", src:"direct investment", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: ちょくせつとうしについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about direct investment.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"mc", q:"What does ゆしゅつ mean?", opts:["export","import","trade","tariff"], ans:"export",
     hint:"This is a key term in this unit's topic area."},

    {type:"fb", s:"{1}はじゅうようです。\n(supply is important.)", a:"きょうきゅう", opts:["きょうきゅう","じゅよう","しじょうかかく","ゆしゅつ"], sSrc:"supply is important.",
     hint:"Think about which word matches the English translation."},

    {type:"match", pairs:[{trg:"ゆしゅつ",src:"export"},{trg:"ゆにゅう",src:"import"},{trg:"ぼうえき",src:"trade"},{trg:"かんぜい",src:"tariff"}]},

    {type:"mc", q:"Which word means direct investment?", opts:["ちょくせつとうし","きょうきゅう","ゆにゅう","じゅよう"], ans:"ちょくせつとうし",
     hint:"This term is essential vocabulary for this topic."}
  ]
};
export default BATCH10_L1;
