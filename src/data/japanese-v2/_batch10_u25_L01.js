// Batch 10 – Unit 25 (B2): かいぎじゅつ
const BATCH10_L1 = {
  id:"jav2_u25l_b10_1", title:"かいぎじゅつ", icon:"🗂️", xp:15, board:true,
  steps:[
    {type:"intro", title:"かいぎじゅつ",
     desc:"Meeting skills and business protocol vocabulary",
     goals:["Master key vocabulary for this topic","Use new words in context","Build reading comprehension"]},

    {type:"teach", trg:"ぎだい", src:"agenda item", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: ぎだいについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about agenda item.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"ぎじろく", src:"meeting minutes", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: ぎじろくについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about meeting minutes.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"けつろん", src:"conclusion", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: けつろんについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about conclusion.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"ごうい", src:"agreement", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: ごういについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about agreement.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"しかい", src:"moderator", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: しかいについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about moderator.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"はつげんする", src:"to speak up", pos:"verb", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: はつげんするについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about to speak up.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"ようやく", src:"summary", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: ようやくについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about summary.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"つうやく", src:"interpreter", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: つうやくについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about interpreter.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"mc", q:"What does ぎだい mean?", opts:["agenda item","meeting minutes","conclusion","agreement"], ans:"agenda item",
     hint:"This is a key term in this unit's topic area."},

    {type:"fb", s:"{1}はじゅうようです。\n(moderator is important.)", a:"しかい", opts:["しかい","はつげんする","ようやく","ぎだい"], sSrc:"moderator is important.",
     hint:"Think about which word matches the English translation."},

    {type:"match", pairs:[{trg:"ぎだい",src:"agenda item"},{trg:"ぎじろく",src:"meeting minutes"},{trg:"けつろん",src:"conclusion"},{trg:"ごうい",src:"agreement"}]},

    {type:"mc", q:"Which word means interpreter?", opts:["つうやく","しかい","ぎじろく","はつげんする"], ans:"つうやく",
     hint:"This term is essential vocabulary for this topic."}
  ]
};
export default BATCH10_L1;
