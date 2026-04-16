// Batch 9 – Unit 31 (B2): さいばん
const BATCH9_L1 = {
  id:"jav2_u31l_b9_1", title:"さいばん", icon:"⚖️", xp:15, board:true,
  steps:[
    {type:"intro", title:"さいばん",
     desc:"Legal system and court vocabulary",
     goals:["Master key vocabulary for this topic","Use new words in context","Build reading comprehension"]},

    {type:"teach", trg:"さいばんかん", src:"judge", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: さいばんかんについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about judge.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"べんごし", src:"lawyer", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: べんごしについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about lawyer.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"ひこくにん", src:"defendant", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: ひこくにんについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about defendant.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"はんけつ", src:"verdict", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: はんけつについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about verdict.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"しょうこ", src:"evidence", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: しょうこについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about evidence.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"むざい", src:"not guilty", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: むざいについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about not guilty.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"ゆうざい", src:"guilty", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: ゆうざいについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about guilty.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"けんぽう", src:"constitution", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: けんぽうについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about constitution.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"mc", q:"What does さいばんかん mean?", opts:["judge","lawyer","defendant","verdict"], ans:"judge",
     hint:"This is a key term in this unit's topic area."},

    {type:"fb", s:"{1}はじゅうようです。\n(evidence is important.)", a:"しょうこ", opts:["しょうこ","むざい","ゆうざい","さいばんかん"], sSrc:"evidence is important.",
     hint:"Think about which word matches the English translation."},

    {type:"match", pairs:[{trg:"さいばんかん",src:"judge"},{trg:"べんごし",src:"lawyer"},{trg:"ひこくにん",src:"defendant"},{trg:"はんけつ",src:"verdict"}]},

    {type:"mc", q:"Which word means constitution?", opts:["けんぽう","しょうこ","べんごし","むざい"], ans:"けんぽう",
     hint:"This term is essential vocabulary for this topic."}
  ]
};
export default BATCH9_L1;
