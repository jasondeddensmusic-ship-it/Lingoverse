// Batch 10 – Unit 31 (B2): けんり
const BATCH10_L1 = {
  id:"jav2_u31l_b10_1", title:"けんり", icon:"🏛️", xp:15, board:true,
  steps:[
    {type:"intro", title:"けんり",
     desc:"Rights laws and civic vocabulary",
     goals:["Master key vocabulary for this topic","Use new words in context","Build reading comprehension"]},

    {type:"teach", trg:"じんけん", src:"human rights", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: じんけんについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about human rights.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"しみんけん", src:"civil rights", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: しみんけんについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about civil rights.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"せんきょけん", src:"right to vote", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: せんきょけんについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about right to vote.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"げんろんのじゆう", src:"freedom of speech", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: げんろんのじゆうについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about freedom of speech.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"プライバシー", src:"privacy", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: プライバシーについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about privacy.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"びょうどう", src:"equality", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: びょうどうについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about equality.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"さべつ", src:"discrimination", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: さべつについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about discrimination.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"ほうりつ", src:"law", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: ほうりつについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about law.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"mc", q:"What does じんけん mean?", opts:["human rights","civil rights","right to vote","freedom of speech"], ans:"human rights",
     hint:"This is a key term in this unit's topic area."},

    {type:"fb", s:"{1}はじゅうようです。\n(privacy is important.)", a:"プライバシー", opts:["プライバシー","びょうどう","さべつ","じんけん"], sSrc:"privacy is important.",
     hint:"Think about which word matches the English translation."},

    {type:"match", pairs:[{trg:"じんけん",src:"human rights"},{trg:"しみんけん",src:"civil rights"},{trg:"せんきょけん",src:"right to vote"},{trg:"げんろんのじゆう",src:"freedom of speech"}]},

    {type:"mc", q:"Which word means law?", opts:["ほうりつ","プライバシー","しみんけん","びょうどう"], ans:"ほうりつ",
     hint:"This term is essential vocabulary for this topic."}
  ]
};
export default BATCH10_L1;
