// Batch 9 – Unit 36 (B2): にほんのみらい
const BATCH9_L1 = {
  id:"jav2_u36l_b9_1", title:"にほんのみらい", icon:"🔮", xp:15, board:true,
  steps:[
    {type:"intro", title:"にほんのみらい",
     desc:"Japan future challenges vocabulary",
     goals:["Master key vocabulary for this topic","Use new words in context","Build reading comprehension"]},

    {type:"teach", trg:"かくしん", src:"innovation", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: かくしんについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about innovation.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"スタートアップ", src:"startup", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: スタートアップについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about startup.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"ちほうそうせい", src:"regional creation", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: ちほうそうせいについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about regional creation.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"はたらきかたかいかく", src:"work style reform", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: はたらきかたかいかくについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about work style reform.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"こそだてしえん", src:"childcare support", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: こそだてしえんについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about childcare support.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"インバウンド", src:"inbound tourism", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: インバウンドについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about inbound tourism.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"ソサエティ", src:"Society 5.0", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: ソサエティについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about Society 5.0.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"みらいぞう", src:"vision of the future", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: みらいぞうについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about vision of the future.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"mc", q:"What does かくしん mean?", opts:["innovation","startup","regional creation","work style reform"], ans:"innovation",
     hint:"This is a key term in this unit's topic area."},

    {type:"fb", s:"{1}はじゅうようです。\n(childcare support is important.)", a:"こそだてしえん", opts:["こそだてしえん","インバウンド","ソサエティ","かくしん"], sSrc:"childcare support is important.",
     hint:"Think about which word matches the English translation."},

    {type:"match", pairs:[{trg:"かくしん",src:"innovation"},{trg:"スタートアップ",src:"startup"},{trg:"ちほうそうせい",src:"regional creation"},{trg:"はたらきかたかいかく",src:"work style reform"}]},

    {type:"mc", q:"Which word means vision of the future?", opts:["みらいぞう","こそだてしえん","スタートアップ","インバウンド"], ans:"みらいぞう",
     hint:"This term is essential vocabulary for this topic."}
  ]
};
export default BATCH9_L1;
