// Batch 10 – Unit 10 (A2.1 Weather): Four Seasons Vocabulary
const BATCH10_L1 = {
  id:"jav2_u10l_b10_1", title:"四季(しき)のことば", icon:"🍂", xp:15, board:true,
  steps:[
    {type:"intro", title:"四季(しき)のことば",
     desc:"Explore the rich vocabulary Japanese has for its four distinct seasons. Seasonal awareness (季節感(きせつかん)) is deeply embedded in Japanese culture and language.",
     goals:["Describe seasonal activities and foods","Use season-specific vocabulary","Understand Japanese seasonal awareness"]},

    {type:"teach", trg:"花見(はなみ)", src:"cherry blossom viewing", pos:"noun", gender:null,
     note:"花(はな) = flower, 見(み) = viewing.\nA beloved spring tradition.",
     example:"A: 花見(はなみ)に行(い)きましょう。\nB: お弁当(べんとう)を作(つく)りますね。",
     exampleSrc:"A: Let's go cherry blossom viewing.\nB: I will make bento.",
     funFact:"花見(はなみ) dates back over 1,000 years. Friends and coworkers gather under 桜(さくら) (cherry trees) to eat, drink, and celebrate spring. Companies send junior employees hours early to save spots with ブルーシート (blue tarps). The 桜前線(さくらぜんせん) (cherry blossom front) moves north through Japan from March to May."},

    {type:"teach", trg:"梅雨(つゆ)", src:"rainy season", pos:"noun", gender:null,
     note:"Also read ばいう. 梅雨入(つゆい)り = start of rainy season.\nJune to mid-July in most of Japan.",
     example:"A: 梅雨(つゆ)に入(はい)りましたね。\nB: 毎日(まいにち)雨(あめ)ですね。",
     exampleSrc:"A: The rainy season has started.\nB: It rains every day.",
     funFact:"梅雨(つゆ) literally means 'plum rain' because it coincides with plum ripening. The 梅雨入(つゆい)り (start) and 梅雨明(つゆあ)け (end) are officially declared by the Meteorological Agency. Hokkaido largely escapes 梅雨(つゆ), making it a popular June destination. 紫陽花(あじさい) (hydrangeas) are the iconic 梅雨(つゆ) flower."},

    {type:"teach", trg:"夏祭(なつまつ)り", src:"summer festival", pos:"noun", gender:null,
     note:"夏(なつ) = summer, 祭(まつ)り = festival.\n浴衣(ゆかた) = light cotton kimono for festivals.",
     example:"A: 夏祭(なつまつ)りに行(い)きたいです。\nB: 浴衣(ゆかた)を着(き)ましょう。",
     exampleSrc:"A: I want to go to the summer festival.\nB: Let's wear yukata.",
     funFact:"夏祭(なつまつ)り features 屋台(やたい) (food stalls), 花火(はなび) (fireworks), 盆踊(ぼんおど)り (Bon dance), and 金魚(きんぎょ)すくい (goldfish scooping). People wear 浴衣(ゆかた) (light kimono) and wooden 下駄(げた) (clogs). Famous 祭(まつ)り include Gion (Kyoto), Nebuta (Aomori), and Awa Odori (Tokushima)."},

    {type:"teach", trg:"紅葉(こうよう)", src:"autumn foliage / fall colors", pos:"noun", gender:null,
     note:"紅葉(もみじ) = Japanese maple (the iconic red leaf).\n紅葉狩(こうようが)り = leaf-viewing trip.",
     example:"A: 紅葉(こうよう)がきれいですね。\nB: 日光(にっこう)に行(い)きませんか？",
     exampleSrc:"A: The autumn foliage is beautiful.\nB: Shall we go to Nikko?",
     funFact:"紅葉(こうよう) viewing is the autumn counterpart to spring 花見(はなみ). The 紅葉前線(こうようぜんせん) (foliage front) moves SOUTH from September to December, opposite to 桜(さくら). Kyoto's 清水寺(きよみずでら) and 日光(にっこう) are famous 紅葉(こうよう) spots. もみじ饅頭(まんじゅう) is a maple-leaf shaped cake from Hiroshima."},

    {type:"teach", trg:"雪(ゆき)", src:"snow", pos:"noun", gender:null,
     note:"雪(ゆき)が降(ふ)る = snow falls. 雪だるま = snowman.\n大雪(おおゆき) = heavy snow.",
     example:"A: 雪(ゆき)が降(ふ)っています！\nB: 雪(ゆき)だるまを作(つく)ろう！",
     exampleSrc:"A: It is snowing!\nB: Let's make a snowman!",
     funFact:"Japan's 雪国(ゆきぐに) (snow country) regions get enormous snowfall. Niigata and Hokkaido receive several meters of 雪(ゆき) annually. The 雪祭(ゆきまつ)り (Snow Festival) in Sapporo features massive snow sculptures. Japanese 温泉(おんせん) (hot springs) in snowy settings create the famous 雪見(ゆきみ)温泉(おんせん) experience."},

    {type:"teach", trg:"蝉(せみ)", src:"cicada", pos:"noun", gender:null,
     note:"The sound of Japanese summer.\n蝉(せみ)の声(こえ) = cicada chorus.",
     example:"A: 蝉(せみ)がうるさいですね。\nB: 夏(なつ)ですからね。",
     exampleSrc:"A: The cicadas are loud.\nB: Because it is summer.",
     funFact:"蝉(せみ) are the defining sound of Japanese summer. Their loud buzzing is used in every anime and movie to signal summer scenes. Japanese children catch 蝉(せみ) as a summer hobby (虫取(むしと)り). Different species emerge at different times: ミンミンゼミ, アブラゼミ, ツクツクボウシ each have distinct songs."},

    {type:"teach", trg:"こたつ", src:"heated table", pos:"noun", gender:null,
     note:"A low table with a heater underneath and a blanket.\nFuyu no hitsuju-hin = winter essential.",
     example:"A: 寒(さむ)いからこたつに入(はい)ろう。\nB: 出(で)られなくなるよ。",
     exampleSrc:"A: It is cold, let's get in the kotatsu.\nB: You won't be able to get out.",
     funFact:"こたつ is a low table with a built-in heater and a 布団(ふとん) (blanket) draped over it. You sit with your legs underneath for warmth. The expression こたつむり (kotatsu snail) describes someone who refuses to leave their こたつ. 蜜柑(みかん) (mandarin oranges) in a こたつ is peak Japanese winter comfort."},

    {type:"teach", trg:"季節(きせつ)", src:"season", pos:"noun", gender:null,
     note:"四季(しき) = four seasons. 季節感(きせつかん) = seasonal sense.\n日本(にほん)の四季(しき)は美(うつく)しい = Japan's four seasons are beautiful.",
     example:"A: 一番(いちばん)好(す)きな季節(きせつ)は何(なん)ですか？\nB: 秋(あき)が好(す)きです。",
     exampleSrc:"A: What is your favorite season?\nB: I like autumn.",
     funFact:"Japanese people take great pride in their 四季(しき) (four seasons) and the idea that Japan's 季節(きせつ) are uniquely distinct. 季節(きせつ)のあいさつ (seasonal greetings) begin letters and emails. 季節感(きせつかん) (seasonal awareness) influences food, fashion, and interior decoration. Each 季節(きせつ) has specific foods considered appropriate."},

    {type:"mc", q:"What is 紅葉(こうよう)?", opts:["Autumn foliage viewing","Cherry blossom viewing","Snow festival","Summer festival"], ans:"Autumn foliage viewing",
     hint:"This is the a... equivalent of 花見(はなみ), focused on red and gold leaves."},

    {type:"fb", s:"{1}に行(い)きましょう。お弁当(べんとう)を作(つく)りますね。\n(Let's go cherry blossom viewing. I will make bento.)", a:"花見(はなみ)", opts:["花見(はなみ)","夏祭(なつまつ)り","紅葉(こうよう)","雪祭(ゆきまつ)り"], sSrc:"Let's go cherry blossom viewing. I will make bento.",
     hint:"This spring tradition involves gathering under flowering trees to enjoy food and drink."},

    {type:"match", pairs:[
      {trg:"花見(はなみ)", src:"cherry blossom viewing"},
      {trg:"梅雨(つゆ)", src:"rainy season"},
      {trg:"紅葉(こうよう)", src:"autumn foliage"},
      {trg:"こたつ", src:"heated table"}
    ]},

    {type:"mc", q:"What insect is considered the sound of summer in Japan?", opts:["蝉(せみ) (cicada)","蝶々(ちょうちょう) (butterfly)","蛍(ほたる) (firefly)","蜻蛉(とんぼ) (dragonfly)"], ans:"蝉(せみ) (cicada)",
     hint:"This insect's loud buzzing is used in every anime and movie to signal the summer season."}
  ,{type:"match",pairs:[{trg:"夏祭(なつまつ)り",src:"summer festival"},{trg:"雪(ゆき)",src:"snow"},{trg:"季節(きせつ)",src:"season"}]}]
};
export default BATCH10_L1;
