// Batch 10 – Unit 32 (B2): せいしんけんこう
const BATCH10_L1 = {
  id:"jav2_u32l_b10_1", title:"せいしんけんこう", icon:"🧘", xp:15, board:true,
  steps:[
    {type:"intro", title:"せいしんけんこう",
     desc:"Mental health and wellbeing vocabulary",
     goals:["Master key vocabulary for this topic","Use new words in context","Build reading comprehension"]},

    {type:"teach", trg:"ストレス", src:"stress", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: ストレスについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about stress.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"うつびょう", src:"depression", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: うつびょうについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about depression.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"ふあんしょう", src:"anxiety disorder", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: ふあんしょうについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about anxiety disorder.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"カウンセリング", src:"counseling", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: カウンセリングについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about counseling.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"セルフケア", src:"self-care", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: セルフケアについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about self-care.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"マインドフルネス", src:"mindfulness", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: マインドフルネスについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about mindfulness.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"しんりし", src:"psychologist", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: しんりしについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about psychologist.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"ふくし", src:"welfare", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: ふくしについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about welfare.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"mc", q:"What does ストレス mean?", opts:["stress","depression","anxiety disorder","counseling"], ans:"stress",
     hint:"This is a key term in this unit's topic area."},

    {type:"fb", s:"{1}はじゅうようです。\n(self-care is important.)", a:"セルフケア", opts:["セルフケア","マインドフルネス","しんりし","ストレス"], sSrc:"self-care is important.",
     hint:"Think about which word matches the English translation."},

    {type:"match", pairs:[{trg:"ストレス",src:"stress"},{trg:"うつびょう",src:"depression"},{trg:"ふあんしょう",src:"anxiety disorder"},{trg:"カウンセリング",src:"counseling"}]},

    {type:"mc", q:"Which word means welfare?", opts:["ふくし","セルフケア","うつびょう","マインドフルネス"], ans:"ふくし",
     hint:"This term is essential vocabulary for this topic."}
  ]
};
export default BATCH10_L1;
