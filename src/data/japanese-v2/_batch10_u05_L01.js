// Batch 10 – Unit 05 (A1.2 Food): Seasonings & Flavors
const BATCH10_L1 = {
  id:"jav2_u05l_b10_1", title:"調味料(ちょうみりょう)", icon:"🧂", xp:15, board:true,
  steps:[
    {type:"intro", title:"調味料(ちょうみりょう)",
     desc:"Learn the essential seasonings and flavor words of Japanese cuisine. Understanding さしすせそ (the five basic seasonings) is key to Japanese cooking.",
     goals:["Name the core Japanese seasonings","Describe tastes and flavors","Understand the さしすせそ seasoning order"]},

    {type:"teach", trg:"塩(しお)", src:"salt", pos:"noun", gender:null,
     note:"One of the most basic seasonings. 塩味(しおあじ) = salty flavor.\n塩辛(しおから)い = salty (taste).",
     example:"A: 塩(しお)を入(い)れすぎました。\nB: 水(みず)を足(た)しましょう。",
     exampleSrc:"A: I put in too much salt.\nB: Let's add water.",
     funFact:"塩(しお) is the second seasoning in the さしすせそ order. Japanese 塩(しお) comes from sea water evaporation. Different regions produce different 塩(しお) with unique mineral profiles. 塩(しお)むすび (salt rice ball) is the simplest and most beloved おにぎり flavor."},

    {type:"teach", trg:"砂糖(さとう)", src:"sugar", pos:"noun", gender:null,
     note:"First in the さしすせそ seasoning order.\n砂糖(さとう)を入(い)れる = to add sugar.",
     example:"A: 砂糖(さとう)はどこですか？\nB: 冷蔵庫(れいぞうこ)の横(よこ)にあります。",
     exampleSrc:"A: Where is the sugar?\nB: It is next to the refrigerator.",
     funFact:"砂糖(さとう) is always added FIRST in Japanese cooking because its large molecules penetrate food slowly. The famous さしすせそ cooking order is: 砂糖(さとう) (sugar), 塩(しお) (salt), 酢(す) (vinegar), 醤油(せうゆ) (soy sauce, old spelling), みそ (miso). This order produces the best flavors."},

    {type:"teach", trg:"醤油(しょうゆ)", src:"soy sauce", pos:"noun", gender:null,
     note:"The most iconic Japanese seasoning.\n醤油(しょうゆ)をかける = to pour soy sauce.",
     example:"A: 醤油(しょうゆ)を取(と)ってください。\nB: はい、どうぞ。",
     exampleSrc:"A: Please pass the soy sauce.\nB: Here you go.",
     funFact:"醤油(しょうゆ) is Japan's signature condiment, made from soybeans, wheat, salt, and koji mold. Kikkoman is the world's largest 醤油(しょうゆ) producer. Different regions prefer different types: 濃口(こいくち) (dark) in eastern Japan, 薄口(うすくち) (light) in western Japan."},

    {type:"teach", trg:"みそ", src:"miso (fermented soybean paste)", pos:"noun", gender:null,
     note:"みそ汁(しる) = miso soup. A breakfast staple.\n赤(あか)みそ = red miso, 白(しろ)みそ = white miso.",
     example:"A: 朝(あさ)ごはんにみそ汁(しる)を飲(の)みます。\nB: おいしいですよね。",
     exampleSrc:"A: I drink miso soup for breakfast.\nB: It is delicious, isn't it?",
     funFact:"みそ (味噌) has been a Japanese staple for over 1,300 years. Each region has its own みそ, and Japanese people are fiercely loyal to their hometown variety. The phrase 手前(てまえ)みそ (literally 'my own miso') means humble-bragging, because everyone thinks their みそ is best."},

    {type:"teach", trg:"酢(す)", src:"vinegar", pos:"noun", gender:null,
     note:"すし = vinegar + rice (the original meaning!).\n酢(す)のもの = vinegar-dressed dish.",
     example:"A: 酢(す)を少(すこ)し入(い)れてください。\nB: どのくらいですか？",
     exampleSrc:"A: Please add a little vinegar.\nB: How much?",
     funFact:"酢(す) is the third seasoning in さしすせそ. The word すし originally referred to vinegared rice, not raw fish. Rice vinegar is milder than Western vinegar. 酢(す)のもの (vinegar-dressed vegetables) is a common side dish that aids digestion."},

    {type:"teach", trg:"胡椒(こしょう)", src:"pepper", pos:"noun", gender:null,
     note:"塩胡椒(しおこしょう) = salt and pepper.\n胡椒(こしょう)を振(ふ)る = to sprinkle pepper.",
     example:"A: 胡椒(こしょう)はいりますか？\nB: 少(すこ)しお願(ねが)いします。",
     exampleSrc:"A: Do you need pepper?\nB: A little, please.",
     funFact:"胡椒(こしょう) came to Japan via China (胡 = foreign, 椒 = spice). While not part of traditional Japanese seasoning, 胡椒(こしょう) is essential in Western-influenced Japanese dishes like ハンバーグ (Hamburg steak) and ステーキ (steak). 七味唐辛子(しちみとうがらし) is the Japanese alternative."},

    {type:"teach", trg:"うまみ", src:"umami (savory taste)", pos:"noun", gender:null,
     note:"The fifth basic taste, discovered in Japan.\nだし = umami-rich stock.",
     example:"A: このスープはうまみが深(ふか)いですね。\nB: 昆布(こんぶ)でだしを取(と)りましたから。",
     exampleSrc:"A: This soup has deep umami.\nB: Because I made the stock with kelp.",
     funFact:"うまみ (旨味) was discovered by Japanese chemist 池田菊苗(いけだきくなえ) in 1908. He identified glutamate in 昆布(こんぶ) (kelp) as the source. It is now recognized internationally as the fifth taste alongside sweet, sour, salty, and bitter. Japan gave this word to the world."},

    {type:"teach", trg:"辛(から)い", src:"spicy / hot (taste)", pos:"adj", gender:null,
     note:"い-adjective. 辛(から)い食(た)べもの = spicy food.\n辛(から)さ = level of spiciness.",
     example:"A: このカレーは辛(から)いですか？\nB: 少(すこ)し辛(から)いです。",
     exampleSrc:"A: Is this curry spicy?\nB: It is a little spicy.",
     funFact:"辛(から)い can mean both 'spicy' and 'salty' in some dialects, which sometimes causes confusion. Japanese food is generally not very 辛(から)い compared to Korean or Thai cuisine. The word つらい (tough/painful) uses the same kanji but different reading."},

    {type:"mc", q:"What is the correct さしすせそ seasoning order?", opts:["Sugar, salt, vinegar, soy sauce, miso","Salt, sugar, miso, vinegar, soy sauce","Vinegar, salt, sugar, miso, soy sauce","Soy sauce, salt, sugar, vinegar, miso"], ans:"Sugar, salt, vinegar, soy sauce, miso",
     hint:"さ = 砂糖(さとう), し = 塩(しお), す = 酢(す), せ = 醤油(しょうゆ) (old: せうゆ), そ = みそ. S... goes first because its molecules are largest."},

    {type:"fb", s:"朝(あさ)ごはんに{1}汁(しる)を飲(の)みます。\n(I drink miso soup for breakfast.)", a:"みそ", opts:["みそ","塩(しお)","醤油(しょうゆ)","酢(す)"], sSrc:"I drink miso soup for breakfast.",
     hint:"This fermented soybean paste is a breakfast staple used to make a classic Japanese soup."},

    {type:"match", pairs:[
      {trg:"塩(しお)", src:"salt"},
      {trg:"砂糖(さとう)", src:"sugar"},
      {trg:"醤油(しょうゆ)", src:"soy sauce"},
      {trg:"うまみ", src:"savory taste"}
    ]},

    {type:"mc", q:"Who discovered umami?", opts:["Japanese chemist Ikeda Kikunae","French chef Auguste Escoffier","Chinese philosopher Confucius","Italian scientist Galileo"], ans:"Japanese chemist Ikeda Kikunae",
     hint:"This scientist identified the savory taste in kelp stock in 1908, giving the world a new taste word."}
  ]
};
export default BATCH10_L1;
