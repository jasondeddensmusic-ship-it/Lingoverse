// Batch 9 – Unit 29 (B2): けいざいようご
const BATCH9_L1 = {
  id:"jav2_u29l_b9_1", title:"けいざいようご", icon:"💹", xp:15, board:true,
  steps:[
    {type:"intro", title:"けいざいようご",
     desc:"Economic terms and market vocabulary",
     goals:["Master key vocabulary for this topic","Use new words in context","Build reading comprehension"]},

    {type:"teach", trg:"インフレ", src:"inflation", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: インフレについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about inflation.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"デフレ", src:"deflation", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: デフレについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about deflation.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"えんだか", src:"strong yen", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: えんだかについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about strong yen.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"えんやす", src:"weak yen", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: えんやすについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about weak yen.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"けいきこうたい", src:"economic recovery", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: けいきこうたいについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about economic recovery.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"ふきょう", src:"recession", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: ふきょうについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about recession.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"GDP", src:"gross domestic product", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: GDPについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about gross domestic product.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"こようりつ", src:"employment rate", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: こようりつについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about employment rate.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"mc", q:"What does インフレ mean?", opts:["inflation","deflation","strong yen","weak yen"], ans:"inflation",
     hint:"This is a key term in this unit's topic area."},

    {type:"fb", s:"{1}はじゅうようです。\n(economic recovery is important.)", a:"けいきこうたい", opts:["けいきこうたい","ふきょう","GDP","インフレ"], sSrc:"economic recovery is important.",
     hint:"Think about which word matches the English translation."},

    {type:"match", pairs:[{trg:"インフレ",src:"inflation"},{trg:"デフレ",src:"deflation"},{trg:"えんだか",src:"strong yen"},{trg:"えんやす",src:"weak yen"}]},

    {type:"mc", q:"Which word means employment rate?", opts:["こようりつ","けいきこうたい","デフレ","ふきょう"], ans:"こようりつ",
     hint:"This term is essential vocabulary for this topic."}
  ]
};
export default BATCH9_L1;
