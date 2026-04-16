// Batch 10 – Unit 30 (B2): ろんりてきしこう
const BATCH10_L1 = {
  id:"jav2_u30l_b10_1", title:"ろんりてきしこう", icon:"🧠", xp:15, board:true,
  steps:[
    {type:"intro", title:"ろんりてきしこう",
     desc:"Logical thinking and reasoning vocabulary",
     goals:["Master key vocabulary for this topic","Use new words in context","Build reading comprehension"]},

    {type:"teach", trg:"すいろん", src:"reasoning", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: すいろんについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about reasoning.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"かせつ", src:"hypothesis", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: かせつについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about hypothesis.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"しょうめい", src:"proof", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: しょうめいについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about proof.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"ぜんてい", src:"premise", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: ぜんていについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about premise.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"きのうする", src:"to function", pos:"verb", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: きのうするについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about to function.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"きゃっかんてき", src:"objective", pos:"adj", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: きゃっかんてきについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about objective.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"しゅかんてき", src:"subjective", pos:"adj", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: しゅかんてきについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about subjective.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"けいこう", src:"tendency", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: けいこうについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about tendency.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"mc", q:"What does すいろん mean?", opts:["reasoning","hypothesis","proof","premise"], ans:"reasoning",
     hint:"This is a key term in this unit's topic area."},

    {type:"fb", s:"{1}はじゅうようです。\n(to function is important.)", a:"きのうする", opts:["きのうする","きゃっかんてき","しゅかんてき","すいろん"], sSrc:"to function is important.",
     hint:"Think about which word matches the English translation."},

    {type:"match", pairs:[{trg:"すいろん",src:"reasoning"},{trg:"かせつ",src:"hypothesis"},{trg:"しょうめい",src:"proof"},{trg:"ぜんてい",src:"premise"}]},

    {type:"mc", q:"Which word means tendency?", opts:["けいこう","きのうする","かせつ","きゃっかんてき"], ans:"けいこう",
     hint:"This term is essential vocabulary for this topic."}
  ]
};
export default BATCH10_L1;
