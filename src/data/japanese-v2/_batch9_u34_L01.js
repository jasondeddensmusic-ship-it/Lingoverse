// Batch 9 – Unit 34 (B2): がいこう
const BATCH9_L1 = {
  id:"jav2_u34l_b9_1", title:"がいこう", icon:"🌐", xp:15, board:true,
  steps:[
    {type:"intro", title:"がいこう",
     desc:"Diplomacy and international affairs vocabulary",
     goals:["Master key vocabulary for this topic","Use new words in context","Build reading comprehension"]},

    {type:"teach", trg:"がいこうかん", src:"diplomat", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: がいこうかんについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about diplomat.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"じょうやく", src:"treaty", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: じょうやくについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about treaty.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"こくれん", src:"United Nations", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: こくれんについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about United Nations.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"たこくかん", src:"multilateral", pos:"adj", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: たこくかんについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about multilateral.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"きょうりょく", src:"cooperation", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: きょうりょくについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about cooperation.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"きんちょう", src:"tension", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: きんちょうについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about tension.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"せいさい", src:"sanctions", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: せいさいについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about sanctions.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"ふんそう", src:"conflict", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: ふんそうについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about conflict.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"mc", q:"What does がいこうかん mean?", opts:["diplomat","treaty","United Nations","multilateral"], ans:"diplomat",
     hint:"This is a key term in this unit's topic area."},

    {type:"fb", s:"{1}はじゅうようです。\n(cooperation is important.)", a:"きょうりょく", opts:["きょうりょく","きんちょう","せいさい","がいこうかん"], sSrc:"cooperation is important.",
     hint:"Think about which word matches the English translation."},

    {type:"match", pairs:[{trg:"がいこうかん",src:"diplomat"},{trg:"じょうやく",src:"treaty"},{trg:"こくれん",src:"United Nations"},{trg:"たこくかん",src:"multilateral"}]},

    {type:"mc", q:"Which word means conflict?", opts:["ふんそう","きょうりょく","じょうやく","きんちょう"], ans:"ふんそう",
     hint:"This term is essential vocabulary for this topic."}
  ]
};
export default BATCH9_L1;
