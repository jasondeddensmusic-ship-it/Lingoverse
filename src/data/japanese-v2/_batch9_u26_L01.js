// Batch 9 – Unit 26 (B2): ほうどうようご
const BATCH9_L1 = {
  id:"jav2_u26l_b9_1", title:"ほうどうようご", icon:"📰", xp:15, board:true,
  steps:[
    {type:"intro", title:"ほうどうようご",
     desc:"News and media reporting vocabulary",
     goals:["Master key vocabulary for this topic","Use new words in context","Build reading comprehension"]},

    {type:"teach", trg:"とくは", src:"scoop", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: とくはについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about scoop.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"しゃせつ", src:"editorial", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: しゃせつについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about editorial.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"コメンテーター", src:"commentator", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: コメンテーターについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about commentator.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"せろん", src:"public opinion", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: せろんについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about public opinion.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"アンケート", src:"survey", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: アンケートについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about survey.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"でんぱ", src:"broadcast", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: でんぱについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about broadcast.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"とくしゅう", src:"special feature", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: とくしゅうについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about special feature.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"みだし", src:"headline", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: みだしについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about headline.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"mc", q:"What does とくは mean?", opts:["scoop","editorial","commentator","public opinion"], ans:"scoop",
     hint:"This is a key term in this unit's topic area."},

    {type:"fb", s:"{1}はじゅうようです。\n(survey is important.)", a:"アンケート", opts:["アンケート","でんぱ","とくしゅう","とくは"], sSrc:"survey is important.",
     hint:"Think about which word matches the English translation."},

    {type:"match", pairs:[{trg:"とくは",src:"scoop"},{trg:"しゃせつ",src:"editorial"},{trg:"コメンテーター",src:"commentator"},{trg:"せろん",src:"public opinion"}]},

    {type:"mc", q:"Which word means headline?", opts:["みだし","アンケート","しゃせつ","でんぱ"], ans:"みだし",
     hint:"This term is essential vocabulary for this topic."}
  ]
};
export default BATCH9_L1;
