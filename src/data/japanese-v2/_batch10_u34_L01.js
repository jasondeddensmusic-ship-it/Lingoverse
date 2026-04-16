// Batch 10 – Unit 34 (B2): こくさいきょうりょく
const BATCH10_L1 = {
  id:"jav2_u34l_b10_1", title:"こくさいきょうりょく", icon:"🤝", xp:15, board:true,
  steps:[
    {type:"intro", title:"こくさいきょうりょく",
     desc:"International cooperation and development vocabulary",
     goals:["Master key vocabulary for this topic","Use new words in context","Build reading comprehension"]},

    {type:"teach", trg:"えんじょ", src:"foreign aid", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: えんじょについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about foreign aid.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"かいはつ", src:"development", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: かいはつについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about development.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"ひんこん", src:"poverty", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: ひんこんについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about poverty.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"なんみん", src:"refugee", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: なんみんについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about refugee.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"きこうへんどう", src:"climate change", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: きこうへんどうについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about climate change.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"もんだいかいけつ", src:"problem resolution", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: もんだいかいけつについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about problem resolution.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"ぼうえききょうてい", src:"trade agreement", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: ぼうえききょうていについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about trade agreement.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"にほんがいこう", src:"Japanese diplomacy", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: にほんがいこうについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about Japanese diplomacy.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"mc", q:"What does えんじょ mean?", opts:["foreign aid","development","poverty","refugee"], ans:"foreign aid",
     hint:"This is a key term in this unit's topic area."},

    {type:"fb", s:"{1}はじゅうようです。\n(climate change is important.)", a:"きこうへんどう", opts:["きこうへんどう","もんだいかいけつ","ぼうえききょうてい","えんじょ"], sSrc:"climate change is important.",
     hint:"Think about which word matches the English translation."},

    {type:"match", pairs:[{trg:"えんじょ",src:"foreign aid"},{trg:"かいはつ",src:"development"},{trg:"ひんこん",src:"poverty"},{trg:"なんみん",src:"refugee"}]},

    {type:"mc", q:"Which word means Japanese diplomacy?", opts:["にほんがいこう","きこうへんどう","かいはつ","もんだいかいけつ"], ans:"にほんがいこう",
     hint:"This term is essential vocabulary for this topic."}
  ]
};
export default BATCH10_L1;
