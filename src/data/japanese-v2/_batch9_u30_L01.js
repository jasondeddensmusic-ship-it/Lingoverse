// Batch 9 – Unit 30 (B2): しそう
const BATCH9_L1 = {
  id:"jav2_u30l_b9_1", title:"しそう", icon:"🤔", xp:15, board:true,
  steps:[
    {type:"intro", title:"しそう",
     desc:"Philosophical and abstract thought vocabulary",
     goals:["Master key vocabulary for this topic","Use new words in context","Build reading comprehension"]},

    {type:"teach", trg:"りんり", src:"ethics", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: りんりについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about ethics.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"どうとく", src:"morality", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: どうとくについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about morality.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"ぜんあく", src:"good and evil", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: ぜんあくについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about good and evil.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"しんり", src:"truth", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: しんりについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about truth.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"そんざい", src:"existence", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: そんざいについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about existence.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"ほんしつ", src:"essence", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: ほんしつについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about essence.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"かんねん", src:"concept", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: かんねんについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about concept.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"ちかく", src:"perception", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: ちかくについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about perception.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"mc", q:"What does りんり mean?", opts:["ethics","morality","good and evil","truth"], ans:"ethics",
     hint:"This is a key term in this unit's topic area."},

    {type:"fb", s:"{1}はじゅうようです。\n(existence is important.)", a:"そんざい", opts:["そんざい","ほんしつ","かんねん","りんり"], sSrc:"existence is important.",
     hint:"Think about which word matches the English translation."},

    {type:"match", pairs:[{trg:"りんり",src:"ethics"},{trg:"どうとく",src:"morality"},{trg:"ぜんあく",src:"good and evil"},{trg:"しんり",src:"truth"}]},

    {type:"mc", q:"Which word means perception?", opts:["ちかく","そんざい","どうとく","ほんしつ"], ans:"ちかく",
     hint:"This term is essential vocabulary for this topic."}
  ]
};
export default BATCH9_L1;
