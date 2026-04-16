// Batch 9 – Unit 25 (B2): ビジネスメール
const BATCH9_L1 = {
  id:"jav2_u25l_b9_1", title:"ビジネスメール", icon:"📧", xp:15, board:true,
  steps:[
    {type:"intro", title:"ビジネスメール",
     desc:"Business email and communication vocabulary",
     goals:["Master key vocabulary for this topic","Use new words in context","Build reading comprehension"]},

    {type:"teach", trg:"めいし", src:"business card", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: めいしについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about business card.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"こうしょう", src:"negotiation", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: こうしょうについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about negotiation.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"けいやく", src:"contract", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: けいやくについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about contract.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"とりひき", src:"transaction", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: とりひきについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about transaction.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"なっとくする", src:"to be convinced", pos:"verb", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: なっとくするについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about to be convinced.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"こうかんする", src:"to exchange", pos:"verb", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: こうかんするについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about to exchange.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"もうしこむ", src:"to apply for", pos:"verb", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: もうしこむについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about to apply for.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"しんらいかんけい", src:"trust relationship", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: しんらいかんけいについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about trust relationship.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"mc", q:"What does めいし mean?", opts:["business card","negotiation","contract","transaction"], ans:"business card",
     hint:"This is a key term in this unit's topic area."},

    {type:"fb", s:"{1}はじゅうようです。\n(to be convinced is important.)", a:"なっとくする", opts:["なっとくする","こうかんする","もうしこむ","めいし"], sSrc:"to be convinced is important.",
     hint:"Think about which word matches the English translation."},

    {type:"match", pairs:[{trg:"めいし",src:"business card"},{trg:"こうしょう",src:"negotiation"},{trg:"けいやく",src:"contract"},{trg:"とりひき",src:"transaction"}]},

    {type:"mc", q:"Which word means trust relationship?", opts:["しんらいかんけい","なっとくする","こうしょう","こうかんする"], ans:"しんらいかんけい",
     hint:"This term is essential vocabulary for this topic."}
  ]
};
export default BATCH9_L1;
