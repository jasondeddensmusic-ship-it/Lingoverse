// Batch 10 – Unit 27 (B2): しぜんほご
const BATCH10_L1 = {
  id:"jav2_u27l_b10_1", title:"しぜんほご", icon:"🌿", xp:15, board:true,
  steps:[
    {type:"intro", title:"しぜんほご",
     desc:"Nature conservation and ecology vocabulary",
     goals:["Master key vocabulary for this topic","Use new words in context","Build reading comprehension"]},

    {type:"teach", trg:"せいたいけい", src:"ecosystem", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: せいたいけいについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about ecosystem.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"ぜつめつきぐしゅ", src:"endangered species", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: ぜつめつきぐしゅについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about endangered species.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"しんりん", src:"forest", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: しんりんについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about forest.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"おせん", src:"pollution", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: おせんについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about pollution.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"リサイクル", src:"recycling", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: リサイクルについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about recycling.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"さばくか", src:"desertification", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: さばくかについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about desertification.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"ちきゅうおんだんか", src:"global warming", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: ちきゅうおんだんかについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about global warming.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"カーボン", src:"carbon", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: カーボンについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about carbon.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"mc", q:"What does せいたいけい mean?", opts:["ecosystem","endangered species","forest","pollution"], ans:"ecosystem",
     hint:"This is a key term in this unit's topic area."},

    {type:"fb", s:"{1}はじゅうようです。\n(recycling is important.)", a:"リサイクル", opts:["リサイクル","さばくか","ちきゅうおんだんか","せいたいけい"], sSrc:"recycling is important.",
     hint:"Think about which word matches the English translation."},

    {type:"match", pairs:[{trg:"せいたいけい",src:"ecosystem"},{trg:"ぜつめつきぐしゅ",src:"endangered species"},{trg:"しんりん",src:"forest"},{trg:"おせん",src:"pollution"}]},

    {type:"mc", q:"Which word means carbon?", opts:["カーボン","リサイクル","ぜつめつきぐしゅ","さばくか"], ans:"カーボン",
     hint:"This term is essential vocabulary for this topic."}
  ]
};
export default BATCH10_L1;
