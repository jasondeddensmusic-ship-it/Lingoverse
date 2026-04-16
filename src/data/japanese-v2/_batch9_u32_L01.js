// Batch 9 – Unit 32 (B2): いりょう
const BATCH9_L1 = {
  id:"jav2_u32l_b9_1", title:"いりょう", icon:"🏥", xp:15, board:true,
  steps:[
    {type:"intro", title:"いりょう",
     desc:"Medical and healthcare vocabulary",
     goals:["Master key vocabulary for this topic","Use new words in context","Build reading comprehension"]},

    {type:"teach", trg:"しんさつ", src:"medical examination", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: しんさつについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about medical examination.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"しゅじゅつ", src:"surgery", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: しゅじゅつについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about surgery.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"しょほうせん", src:"prescription", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: しょほうせんについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about prescription.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"にゅういん", src:"hospitalization", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: にゅういんについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about hospitalization.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"たいいん", src:"hospital discharge", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: たいいんについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about hospital discharge.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"けんこうしんだん", src:"health checkup", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: けんこうしんだんについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about health checkup.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"よぼう", src:"prevention", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: よぼうについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about prevention.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"めんえき", src:"immunity", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: めんえきについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about immunity.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"mc", q:"What does しんさつ mean?", opts:["medical examination","surgery","prescription","hospitalization"], ans:"medical examination",
     hint:"This is a key term in this unit's topic area."},

    {type:"fb", s:"{1}はじゅうようです。\n(hospital discharge is important.)", a:"たいいん", opts:["たいいん","けんこうしんだん","よぼう","しんさつ"], sSrc:"hospital discharge is important.",
     hint:"Think about which word matches the English translation."},

    {type:"match", pairs:[{trg:"しんさつ",src:"medical examination"},{trg:"しゅじゅつ",src:"surgery"},{trg:"しょほうせん",src:"prescription"},{trg:"にゅういん",src:"hospitalization"}]},

    {type:"mc", q:"Which word means immunity?", opts:["めんえき","たいいん","しゅじゅつ","けんこうしんだん"], ans:"めんえき",
     hint:"This term is essential vocabulary for this topic."}
  ]
};
export default BATCH9_L1;
