// Batch 9 – Unit 27 (B2): エネルギー
const BATCH9_L1 = {
  id:"jav2_u27l_b9_1", title:"エネルギー", icon:"⚡", xp:15, board:true,
  steps:[
    {type:"intro", title:"エネルギー",
     desc:"Energy and sustainability vocabulary",
     goals:["Master key vocabulary for this topic","Use new words in context","Build reading comprehension"]},

    {type:"teach", trg:"さいせいかのう", src:"renewable", pos:"adj", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: さいせいかのうについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about renewable.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"たいようこう", src:"solar power", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: たいようこうについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about solar power.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"ふうりょく", src:"wind power", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: ふうりょくについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about wind power.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"げんしりょく", src:"nuclear power", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: げんしりょくについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about nuclear power.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"しょうエネ", src:"energy saving", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: しょうエネについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about energy saving.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"はいしゅつ", src:"emissions", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: はいしゅつについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about emissions.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"エコ", src:"eco-friendly", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: エコについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about eco-friendly.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"じぞくかのう", src:"sustainable", pos:"adj", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: じぞくかのうについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about sustainable.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"mc", q:"What does さいせいかのう mean?", opts:["renewable","solar power","wind power","nuclear power"], ans:"renewable",
     hint:"This is a key term in this unit's topic area."},

    {type:"fb", s:"{1}はじゅうようです。\n(energy saving is important.)", a:"しょうエネ", opts:["しょうエネ","はいしゅつ","エコ","さいせいかのう"], sSrc:"energy saving is important.",
     hint:"Think about which word matches the English translation."},

    {type:"match", pairs:[{trg:"さいせいかのう",src:"renewable"},{trg:"たいようこう",src:"solar power"},{trg:"ふうりょく",src:"wind power"},{trg:"げんしりょく",src:"nuclear power"}]},

    {type:"mc", q:"Which word means sustainable?", opts:["じぞくかのう","しょうエネ","たいようこう","はいしゅつ"], ans:"じぞくかのう",
     hint:"This term is essential vocabulary for this topic."}
  ]
};
export default BATCH9_L1;
