// Batch 10 – Unit 35 (B2): テクノロジーりんり
const BATCH10_L1 = {
  id:"jav2_u35l_b10_1", title:"テクノロジーりんり", icon:"🤖", xp:15, board:true,
  steps:[
    {type:"intro", title:"テクノロジーりんり",
     desc:"Technology ethics and society vocabulary",
     goals:["Master key vocabulary for this topic","Use new words in context","Build reading comprehension"]},

    {type:"teach", trg:"プライバシーほご", src:"privacy protection", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: プライバシーほごについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about privacy protection.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"データほご", src:"data protection", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: データほごについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about data protection.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"かんし", src:"surveillance", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: かんしについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about surveillance.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"じこけっていけん", src:"self-determination", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: じこけっていけんについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about self-determination.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"デジタルデバイド", src:"digital divide", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: デジタルデバイドについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about digital divide.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"じょうほうかくさ", src:"information gap", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: じょうほうかくさについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about information gap.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"フェイクニュース", src:"fake news", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: フェイクニュースについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about fake news.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"コンプライアンス", src:"compliance", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: コンプライアンスについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about compliance.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"mc", q:"What does プライバシーほご mean?", opts:["privacy protection","data protection","surveillance","self-determination"], ans:"privacy protection",
     hint:"This is a key term in this unit's topic area."},

    {type:"fb", s:"{1}はじゅうようです。\n(digital divide is important.)", a:"デジタルデバイド", opts:["デジタルデバイド","じょうほうかくさ","フェイクニュース","プライバシーほご"], sSrc:"digital divide is important.",
     hint:"Think about which word matches the English translation."},

    {type:"match", pairs:[{trg:"プライバシーほご",src:"privacy protection"},{trg:"データほご",src:"data protection"},{trg:"かんし",src:"surveillance"},{trg:"じこけっていけん",src:"self-determination"}]},

    {type:"mc", q:"Which word means compliance?", opts:["コンプライアンス","デジタルデバイド","データほご","じょうほうかくさ"], ans:"コンプライアンス",
     hint:"This term is essential vocabulary for this topic."}
  ]
};
export default BATCH10_L1;
