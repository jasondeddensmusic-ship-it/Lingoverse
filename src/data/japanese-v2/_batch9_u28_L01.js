// Batch 9 – Unit 28 (B2): ぶんしょうたい
const BATCH9_L1 = {
  id:"jav2_u28l_b9_1", title:"ぶんしょうたい", icon:"✍️", xp:15, board:true,
  steps:[
    {type:"intro", title:"ぶんしょうたい",
     desc:"Writing styles and formal register vocabulary",
     goals:["Master key vocabulary for this topic","Use new words in context","Build reading comprehension"]},

    {type:"teach", trg:"である", src:"to be (written style)", pos:"aux", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: であるについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about to be (written style).\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"けだし", src:"surely", pos:"adv", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: けだしについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about surely.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"おそらく", src:"probably", pos:"adv", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: おそらくについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about probably.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"あるいは", src:"or perhaps", pos:"conj", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: あるいはについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about or perhaps.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"ないし", src:"or either", pos:"conj", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: ないしについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about or either.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"ゆえに", src:"therefore (classical)", pos:"conj", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: ゆえにについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about therefore (classical).\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"とはいえ", src:"that said", pos:"conj", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: とはいえについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about that said.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"いわゆる", src:"so-called", pos:"adv", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: いわゆるについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about so-called.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"mc", q:"What does である mean?", opts:["to be (written style)","surely","probably","or perhaps"], ans:"to be (written style)",
     hint:"This is a key term in this unit's topic area."},

    {type:"fb", s:"{1}はじゅうようです。\n(or either is important.)", a:"ないし", opts:["ないし","ゆえに","とはいえ","である"], sSrc:"or either is important.",
     hint:"Think about which word matches the English translation."},

    {type:"match", pairs:[{trg:"である",src:"to be (written style)"},{trg:"けだし",src:"surely"},{trg:"おそらく",src:"probably"},{trg:"あるいは",src:"or perhaps"}]},

    {type:"mc", q:"Which word means so-called?", opts:["いわゆる","ないし","けだし","ゆえに"], ans:"いわゆる",
     hint:"This term is essential vocabulary for this topic."}
  ]
};
export default BATCH9_L1;
