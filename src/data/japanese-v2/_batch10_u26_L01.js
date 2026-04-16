// Batch 10 – Unit 26 (B2): じょうほうリテラシー
const BATCH10_L1 = {
  id:"jav2_u26l_b10_1", title:"じょうほうリテラシー", icon:"🔍", xp:15, board:true,
  steps:[
    {type:"intro", title:"じょうほうリテラシー",
     desc:"Information literacy and critical thinking vocabulary",
     goals:["Master key vocabulary for this topic","Use new words in context","Build reading comprehension"]},

    {type:"teach", trg:"デマ", src:"misinformation", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: デマについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about misinformation.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"ファクトチェック", src:"fact-checking", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: ファクトチェックについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about fact-checking.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"バイアス", src:"bias", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: バイアスについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about bias.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"しんぴょうせい", src:"credibility", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: しんぴょうせいについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about credibility.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"じょうほうげん", src:"information source", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: じょうほうげんについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about information source.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"かくさん", src:"spread", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: かくさんについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about spread.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"けんしょうする", src:"to verify", pos:"verb", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: けんしょうするについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about to verify.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"メディアリテラシー", src:"media literacy", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: メディアリテラシーについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about media literacy.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"mc", q:"What does デマ mean?", opts:["misinformation","fact-checking","bias","credibility"], ans:"misinformation",
     hint:"This is a key term in this unit's topic area."},

    {type:"fb", s:"{1}はじゅうようです。\n(information source is important.)", a:"じょうほうげん", opts:["じょうほうげん","かくさん","けんしょうする","デマ"], sSrc:"information source is important.",
     hint:"Think about which word matches the English translation."},

    {type:"match", pairs:[{trg:"デマ",src:"misinformation"},{trg:"ファクトチェック",src:"fact-checking"},{trg:"バイアス",src:"bias"},{trg:"しんぴょうせい",src:"credibility"}]},

    {type:"mc", q:"Which word means media literacy?", opts:["メディアリテラシー","じょうほうげん","ファクトチェック","かくさん"], ans:"メディアリテラシー",
     hint:"This term is essential vocabulary for this topic."}
  ]
};
export default BATCH10_L1;
