// Batch 10 – Unit 10 (A2.1 Weather): Four Seasons Vocabulary
const BATCH10_L1 = {
  id:"jav2_u10l_b10_1", title:"しきのことば", icon:"🍂", xp:15, board:true,
  steps:[
    {type:"intro", title:"しきのことば",
     desc:"Explore the rich vocabulary Japanese has for its four distinct seasons. Seasonal awareness (きせつかん) is deeply embedded in Japanese culture and language.",
     goals:["Describe seasonal activities and foods","Use season-specific vocabulary","Understand Japanese seasonal awareness"]},

    {type:"teach", trg:"はなみ", src:"cherry blossom viewing", pos:"noun", gender:null,
     note:"はな = flower, み = viewing.\nA beloved spring tradition.",
     example:"A: はなみにいきましょう。\nB: おべんとうをつくりますね。",
     exampleSrc:"A: Let's go cherry blossom viewing.\nB: I will make bento.",
     funFact:"はなみ (花見) dates back over 1,000 years. Friends and coworkers gather under さくら (cherry trees) to eat, drink, and celebrate spring. Companies send junior employees hours early to save spots with ブルーシート (blue tarps). The さくらぜんせん (cherry blossom front) moves north through Japan from March to May."},

    {type:"teach", trg:"つゆ", src:"rainy season", pos:"noun", gender:null,
     note:"Also read ばいう. つゆいり = start of rainy season.\nJune to mid-July in most of Japan.",
     example:"A: つゆにはいりましたね。\nB: まいにちあめですね。",
     exampleSrc:"A: The rainy season has started.\nB: It rains every day.",
     funFact:"つゆ (梅雨) literally means 'plum rain' because it coincides with plum ripening. The つゆいり (start) and つゆあけ (end) are officially declared by the Meteorological Agency. Hokkaido largely escapes つゆ, making it a popular June destination. あじさい (hydrangeas) are the iconic つゆ flower."},

    {type:"teach", trg:"なつまつり", src:"summer festival", pos:"noun", gender:null,
     note:"なつ = summer, まつり = festival.\nゆかた = light cotton kimono for festivals.",
     example:"A: なつまつりにいきたいです。\nB: ゆかたをきましょう。",
     exampleSrc:"A: I want to go to the summer festival.\nB: Let's wear yukata.",
     funFact:"なつまつり (夏祭り) features やたい (food stalls), はなび (fireworks), ぼんおどり (Bon dance), and きんぎょすくい (goldfish scooping). People wear ゆかた (light kimono) and wooden げた (clogs). Famous まつり include Gion (Kyoto), Nebuta (Aomori), and Awa Odori (Tokushima)."},

    {type:"teach", trg:"こうよう", src:"autumn foliage / fall colors", pos:"noun", gender:null,
     note:"もみじ = Japanese maple (the iconic red leaf).\nこうようがり = leaf-viewing trip.",
     example:"A: こうようがきれいですね。\nB: にっこうにいきませんか？",
     exampleSrc:"A: The autumn foliage is beautiful.\nB: Shall we go to Nikko?",
     funFact:"こうよう (紅葉) viewing is the autumn counterpart to spring はなみ. The こうようぜんせん (foliage front) moves SOUTH from September to December, opposite to さくら. Kyoto's きよみずでら and にっこう are famous こうよう spots. The もみじまんじゅう is a maple-leaf shaped cake from Hiroshima."},

    {type:"teach", trg:"ゆき", src:"snow", pos:"noun", gender:null,
     note:"ゆきがふる = snow falls. ゆきだるま = snowman.\nおおゆき = heavy snow.",
     example:"A: ゆきがふっています！\nB: ゆきだるまをつくろう！",
     exampleSrc:"A: It is snowing!\nB: Let's make a snowman!",
     funFact:"Japan's ゆきぐに (snow country) regions get enormous snowfall. Niigata and Hokkaido receive several meters of ゆき annually. The ゆきまつり (Snow Festival) in Sapporo features massive snow sculptures. Japanese onsen (hot springs) in snowy settings create the famous ゆきみおんせん experience."},

    {type:"teach", trg:"せみ", src:"cicada", pos:"noun", gender:null,
     note:"The sound of Japanese summer.\nせみのこえ = cicada chorus.",
     example:"A: せみがうるさいですね。\nB: なつですからね。",
     exampleSrc:"A: The cicadas are loud.\nB: Because it is summer.",
     funFact:"せみ (蝉) are the defining sound of Japanese summer. Their loud buzzing is used in every anime and movie to signal summer scenes. Japanese children catch せみ as a summer hobby (むしとり). Different species emerge at different times: ミンミンゼミ, アブラゼミ, ツクツクボウシ each have distinct songs."},

    {type:"teach", trg:"こたつ", src:"heated table", pos:"noun", gender:null,
     note:"A low table with a heater underneath and a blanket.\nFuyu no hitsuju-hin = winter essential.",
     example:"A: さむいからこたつにはいろう。\nB: でられなくなるよ。",
     exampleSrc:"A: It is cold, let's get in the kotatsu.\nB: You won't be able to get out.",
     funFact:"こたつ is a low table with a built-in heater and a ふとん (blanket) draped over it. You sit with your legs underneath for warmth. The expression こたつむり (kotatsu snail) describes someone who refuses to leave their こたつ. Eating みかん (mandarin oranges) in a こたつ is peak Japanese winter comfort."},

    {type:"teach", trg:"きせつ", src:"season", pos:"noun", gender:null,
     note:"しき = four seasons. きせつかん = seasonal sense.\nにほんのしきはうつくしい = Japan's four seasons are beautiful.",
     example:"A: いちばんすきなきせつはなんですか？\nB: あきがすきです。",
     exampleSrc:"A: What is your favorite season?\nB: I like autumn.",
     funFact:"Japanese people take great pride in their しき (four seasons) and the idea that Japan's きせつ are uniquely distinct. きせつのあいさつ (seasonal greetings) begin letters and emails. きせつかん (seasonal awareness) influences food, fashion, and interior decoration. Each きせつ has specific foods considered appropriate."},

    {type:"mc", q:"What is こうよう?", opts:["Autumn foliage viewing","Cherry blossom viewing","Snow festival","Summer festival"], ans:"Autumn foliage viewing",
     hint:"This is the a... equivalent of はなみ, focused on red and gold leaves."},

    {type:"fb", s:"{1}にいきましょう。おべんとうをつくりますね。\n(Let's go cherry blossom viewing. I will make bento.)", a:"はなみ", opts:["はなみ","なつまつり","こうよう","ゆきまつり"], sSrc:"Let's go cherry blossom viewing. I will make bento.",
     hint:"This spring tradition involves gathering under flowering trees to enjoy food and drink."},

    {type:"match", pairs:[
      {trg:"はなみ", src:"cherry blossom viewing"},
      {trg:"つゆ", src:"rainy season"},
      {trg:"こうよう", src:"autumn foliage"},
      {trg:"こたつ", src:"heated table"}
    ]},

    {type:"mc", q:"What insect is considered the sound of summer in Japan?", opts:["せみ (cicada)","ちょうちょう (butterfly)","ほたる (firefly)","とんぼ (dragonfly)"], ans:"せみ (cicada)",
     hint:"This insect's loud buzzing is used in every anime and movie to signal the summer season."}
  ]
};
export default BATCH10_L1;
