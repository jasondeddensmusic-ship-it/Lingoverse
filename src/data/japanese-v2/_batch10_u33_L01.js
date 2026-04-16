// Batch 10 – Unit 33 (B2): げいじゅつ
const BATCH10_L1 = {
  id:"jav2_u33l_b10_1", title:"げいじゅつ", icon:"🎭", xp:15, board:true,
  steps:[
    {type:"intro", title:"げいじゅつ",
     desc:"Fine arts and performing arts vocabulary",
     goals:["Master key vocabulary for this topic","Use new words in context","Build reading comprehension"]},

    {type:"teach", trg:"かぶき", src:"kabuki theater", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: かぶきについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about kabuki theater.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"のう", src:"noh theater", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: のうについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about noh theater.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"らくご", src:"comic storytelling", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: らくごについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about comic storytelling.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"しょどう", src:"calligraphy", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: しょどうについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about calligraphy.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"いけばな", src:"flower arrangement", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: いけばなについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about flower arrangement.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"さどう", src:"tea ceremony", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: さどうについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about tea ceremony.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"うきよえ", src:"ukiyo-e prints", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: うきよえについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about ukiyo-e prints.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"にんげんこくほう", src:"living national treasure", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: にんげんこくほうについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about living national treasure.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"mc", q:"What does かぶき mean?", opts:["kabuki theater","noh theater","comic storytelling","calligraphy"], ans:"kabuki theater",
     hint:"This is a key term in this unit's topic area."},

    {type:"fb", s:"{1}はじゅうようです。\n(flower arrangement is important.)", a:"いけばな", opts:["いけばな","さどう","うきよえ","かぶき"], sSrc:"flower arrangement is important.",
     hint:"Think about which word matches the English translation."},

    {type:"match", pairs:[{trg:"かぶき",src:"kabuki theater"},{trg:"のう",src:"noh theater"},{trg:"らくご",src:"comic storytelling"},{trg:"しょどう",src:"calligraphy"}]},

    {type:"mc", q:"Which word means living national treasure?", opts:["にんげんこくほう","いけばな","のう","さどう"], ans:"にんげんこくほう",
     hint:"This term is essential vocabulary for this topic."}
  ]
};
export default BATCH10_L1;
