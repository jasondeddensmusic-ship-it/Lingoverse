// Batch 9 – Unit 33 (B2): こてんぶんがく
const BATCH9_L1 = {
  id:"jav2_u33l_b9_1", title:"こてんぶんがく", icon:"📖", xp:15, board:true,
  steps:[
    {type:"intro", title:"こてんぶんがく",
     desc:"Classical literature and poetry vocabulary",
     goals:["Master key vocabulary for this topic","Use new words in context","Build reading comprehension"]},

    {type:"teach", trg:"はいく", src:"haiku", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: はいくについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about haiku.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"たんか", src:"tanka", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: たんかについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about tanka.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"ものがたり", src:"tale or story", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: ものがたりについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about tale or story.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"さっか", src:"author", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: さっかについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about author.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"ひひょう", src:"criticism", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: ひひょうについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about criticism.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"ひゆ", src:"metaphor", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: ひゆについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about metaphor.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"ちょさくけん", src:"copyright", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: ちょさくけんについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about copyright.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"teach", trg:"ぶんたい", src:"literary style", pos:"noun", gender:null,
     note:"JLPT N2/N1 level vocabulary.\nUsed in formal and academic contexts.",
     example:"A: ぶんたいについてかんがえましょう。\nB: だいじなテーマですね。",
     exampleSrc:"A: Let us think about literary style.\nB: It is an important theme.",
     funFact:"This term appears frequently in Japanese news, academic texts, and professional settings. Mastering it deepens your engagement with complex Japanese topics."},

    {type:"mc", q:"What does はいく mean?", opts:["haiku","tanka","tale or story","author"], ans:"haiku",
     hint:"This is a key term in this unit's topic area."},

    {type:"fb", s:"{1}はじゅうようです。\n(criticism is important.)", a:"ひひょう", opts:["ひひょう","ひゆ","ちょさくけん","はいく"], sSrc:"criticism is important.",
     hint:"Think about which word matches the English translation."},

    {type:"match", pairs:[{trg:"はいく",src:"haiku"},{trg:"たんか",src:"tanka"},{trg:"ものがたり",src:"tale or story"},{trg:"さっか",src:"author"}]},

    {type:"mc", q:"Which word means literary style?", opts:["ぶんたい","ひひょう","たんか","ひゆ"], ans:"ぶんたい",
     hint:"This term is essential vocabulary for this topic."}
  ]
};
export default BATCH9_L1;
