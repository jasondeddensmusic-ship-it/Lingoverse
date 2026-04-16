// Batch 10 – Unit 05 (A1.2 Food): Seasonings & Flavors
const BATCH10_L1 = {
  id:"jav2_u05l_b10_1", title:"ちょうみりょう", icon:"🧂", xp:15, board:true,
  steps:[
    {type:"intro", title:"ちょうみりょう",
     desc:"Learn the essential seasonings and flavor words of Japanese cuisine. Understanding さしすせそ (the five basic seasonings) is key to Japanese cooking.",
     goals:["Name the core Japanese seasonings","Describe tastes and flavors","Understand the さしすせそ seasoning order"]},

    {type:"teach", trg:"しお", src:"salt", pos:"noun", gender:null,
     note:"One of the most basic seasonings. しおあじ = salty flavor.\nしおからい = salty (taste).",
     example:"A: しおをいれすぎました。\nB: みずをたしましょう。",
     exampleSrc:"A: I put in too much salt.\nB: Let's add water.",
     funFact:"しお (塩) is the second seasoning in the さしすせそ order. Japanese しお comes from sea water evaporation. Different regions produce different しお with unique mineral profiles. しおむすび (salt rice ball) is the simplest and most beloved おにぎり flavor."},

    {type:"teach", trg:"さとう", src:"sugar", pos:"noun", gender:null,
     note:"First in the さしすせそ seasoning order.\nさとうをいれる = to add sugar.",
     example:"A: さとうはどこですか？\nB: れいぞうこのよこにあります。",
     exampleSrc:"A: Where is the sugar?\nB: It is next to the refrigerator.",
     funFact:"さとう (砂糖) is always added FIRST in Japanese cooking because its large molecules penetrate food slowly. The famous さしすせそ cooking order is: さとう (sugar), しお (salt), す (vinegar), せうゆ (soy sauce, old spelling), みそ (miso). This order produces the best flavors."},

    {type:"teach", trg:"しょうゆ", src:"soy sauce", pos:"noun", gender:null,
     note:"The most iconic Japanese seasoning.\nしょうゆをかける = to pour soy sauce.",
     example:"A: しょうゆをとってください。\nB: はい、どうぞ。",
     exampleSrc:"A: Please pass the soy sauce.\nB: Here you go.",
     funFact:"しょうゆ (醤油) is Japan's signature condiment, made from soybeans, wheat, salt, and koji mold. Kikkoman is the world's largest しょうゆ producer. Different regions prefer different types: こいくち (dark) in eastern Japan, うすくち (light) in western Japan."},

    {type:"teach", trg:"みそ", src:"miso (fermented soybean paste)", pos:"noun", gender:null,
     note:"みそしる = miso soup. A breakfast staple.\nあかみそ = red miso, しろみそ = white miso.",
     example:"A: あさごはんにみそしるをのみます。\nB: おいしいですよね。",
     exampleSrc:"A: I drink miso soup for breakfast.\nB: It is delicious, isn't it?",
     funFact:"みそ (味噌) has been a Japanese staple for over 1,300 years. Each region has its own みそ, and Japanese people are fiercely loyal to their hometown variety. The phrase てまえみそ (literally 'my own miso') means humble-bragging, because everyone thinks their みそ is best."},

    {type:"teach", trg:"す", src:"vinegar", pos:"noun", gender:null,
     note:"すし = vinegar + rice (the original meaning!).\nすのもの = vinegar-dressed dish.",
     example:"A: すをすこしいれてください。\nB: どのくらいですか？",
     exampleSrc:"A: Please add a little vinegar.\nB: How much?",
     funFact:"す (酢) is the third seasoning in さしすせそ. The word すし originally referred to vinegared rice, not raw fish. Rice vinegar is milder than Western vinegar. すのもの (vinegar-dressed vegetables) is a common side dish that aids digestion."},

    {type:"teach", trg:"こしょう", src:"pepper", pos:"noun", gender:null,
     note:"しおこしょう = salt and pepper.\nこしょうをふる = to sprinkle pepper.",
     example:"A: こしょうはいりますか？\nB: すこしおねがいします。",
     exampleSrc:"A: Do you need pepper?\nB: A little, please.",
     funFact:"こしょう (胡椒) came to Japan via China (胡 = foreign, 椒 = spice). While not part of traditional Japanese seasoning, こしょう is essential in Western-influenced Japanese dishes like ハンバーグ (Hamburg steak) and ステーキ (steak). しちみとうがらし is the Japanese alternative."},

    {type:"teach", trg:"うまみ", src:"umami (savory taste)", pos:"noun", gender:null,
     note:"The fifth basic taste, discovered in Japan.\nだし = umami-rich stock.",
     example:"A: このスープはうまみがふかいですね。\nB: こんぶでだしをとりましたから。",
     exampleSrc:"A: This soup has deep umami.\nB: Because I made the stock with kelp.",
     funFact:"うまみ (旨味) was discovered by Japanese chemist いけだきくなえ in 1908. He identified glutamate in こんぶ (kelp) as the source. It is now recognized internationally as the fifth taste alongside sweet, sour, salty, and bitter. Japan gave this word to the world."},

    {type:"teach", trg:"からい", src:"spicy / hot (taste)", pos:"adj", gender:null,
     note:"い-adjective. からいたべもの = spicy food.\nからさ = level of spiciness.",
     example:"A: このカレーはからいですか？\nB: すこしからいです。",
     exampleSrc:"A: Is this curry spicy?\nB: It is a little spicy.",
     funFact:"からい (辛い) can mean both 'spicy' and 'salty' in some dialects, which sometimes causes confusion. Japanese food is generally not very からい compared to Korean or Thai cuisine. The word つらい (tough/painful) uses the same kanji but different reading."},

    {type:"mc", q:"What is the correct さしすせそ seasoning order?", opts:["Sugar, salt, vinegar, soy sauce, miso","Salt, sugar, miso, vinegar, soy sauce","Vinegar, salt, sugar, miso, soy sauce","Soy sauce, salt, sugar, vinegar, miso"], ans:"Sugar, salt, vinegar, soy sauce, miso",
     hint:"さ = さとう, し = しお, す = す, せ = しょうゆ (old: せうゆ), そ = みそ. S... goes first because its molecules are largest."},

    {type:"fb", s:"あさごはんに{1}しるをのみます。\n(I drink miso soup for breakfast.)", a:"みそ", opts:["みそ","しお","しょうゆ","す"], sSrc:"I drink miso soup for breakfast.",
     hint:"This fermented soybean paste is a breakfast staple used to make a classic Japanese soup."},

    {type:"match", pairs:[
      {trg:"しお", src:"salt"},
      {trg:"さとう", src:"sugar"},
      {trg:"しょうゆ", src:"soy sauce"},
      {trg:"うまみ", src:"savory taste"}
    ]},

    {type:"mc", q:"Who discovered umami?", opts:["Japanese chemist Ikeda Kikunae","French chef Auguste Escoffier","Chinese philosopher Confucius","Italian scientist Galileo"], ans:"Japanese chemist Ikeda Kikunae",
     hint:"This scientist identified the savory taste in kelp stock in 1908, giving the world a new taste word."}
  ]
};
export default BATCH10_L1;
