// Batch 10 – Unit 36 (B2): そうかつ
const BATCH10_L1 = {
  id:"jav2_u36l_b10_1", title:"そうかつ", icon:"🎓", xp:15, board:true,
  steps:[
    {type:"intro", title:"そうかつ",
     desc:"Comprehensive review vocabulary",
     goals:["Master key vocabulary for this topic","Use new words in context","Build reading comprehension"]},

    {type:"teach", trg:"たっせいかん", src:"sense of achievement", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: たっせいかんについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about sense of achievement.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"ふりかえり", src:"reflection or review", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: ふりかえりについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about reflection or review.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"おうようする", src:"to apply", pos:"verb", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: おうようするについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about to apply.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"はってんする", src:"to develop", pos:"verb", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: はってんするについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about to develop.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"こうけんする", src:"to contribute", pos:"verb", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: こうけんするについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about to contribute.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"きたい", src:"expectation", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: きたいについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about expectation.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"かだい", src:"challenge or task", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: かだいについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about challenge or task.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"てんぼう", src:"outlook or prospect", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: てんぼうについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about outlook or prospect.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"mc", q:"What does たっせいかん mean?", opts:["sense of achievement","reflection or review","to apply","to develop"], ans:"sense of achievement",
     hint:"This is a key term in this unit's topic area."},

    {type:"fb", s:"{1}はじゅうようです。\n(to contribute is important.)", a:"こうけんする", opts:["こうけんする","きたい","かだい","たっせいかん"], sSrc:"to contribute is important.",
     hint:"Think about which word matches the English translation."},

    {type:"match", pairs:[{trg:"たっせいかん",src:"sense of achievement"},{trg:"ふりかえり",src:"reflection or review"},{trg:"おうようする",src:"to apply"},{trg:"はってんする",src:"to develop"}]},

    {type:"mc", q:"Which word means outlook or prospect?", opts:["てんぼう","こうけんする","ふりかえり","きたい"], ans:"てんぼう",
     hint:"This term is essential vocabulary for this topic."}
  ]
};
export default BATCH10_L1;
