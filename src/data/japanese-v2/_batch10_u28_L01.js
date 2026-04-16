// Batch 10 – Unit 28 (B2): メールとてがみ
const BATCH10_L1 = {
  id:"jav2_u28l_b10_1", title:"メールとてがみ", icon:"✉️", xp:15, board:true,
  steps:[
    {type:"intro", title:"メールとてがみ",
     desc:"Email and letter writing conventions",
     goals:["Master key vocabulary for this topic","Use new words in context","Build reading comprehension"]},

    {type:"teach", trg:"けんめい", src:"subject line", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: けんめいについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about subject line.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"ほんぶん", src:"main text", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: ほんぶんについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about main text.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"しょめい", src:"signature", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: しょめいについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about signature.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"てんぷ", src:"attachment", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: てんぷについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about attachment.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"まえりゃく", src:"omitting greeting", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: まえりゃくについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about omitting greeting.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"そうしんする", src:"to send", pos:"verb", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: そうしんするについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about to send.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"きじゅつ", src:"description", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: きじゅつについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about description.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"ていせい", src:"correction", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: ていせいについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about correction.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"mc", q:"What does けんめい mean?", opts:["subject line","main text","signature","attachment"], ans:"subject line",
     hint:"This is a key term in this unit's topic area."},

    {type:"fb", s:"{1}はじゅうようです。\n(omitting greeting is important.)", a:"まえりゃく", opts:["まえりゃく","そうしんする","きじゅつ","けんめい"], sSrc:"omitting greeting is important.",
     hint:"Think about which word matches the English translation."},

    {type:"match", pairs:[{trg:"けんめい",src:"subject line"},{trg:"ほんぶん",src:"main text"},{trg:"しょめい",src:"signature"},{trg:"てんぷ",src:"attachment"}]},

    {type:"mc", q:"Which word means correction?", opts:["ていせい","まえりゃく","ほんぶん","そうしんする"], ans:"ていせい",
     hint:"This term is essential vocabulary for this topic."}
  ]
};
export default BATCH10_L1;
