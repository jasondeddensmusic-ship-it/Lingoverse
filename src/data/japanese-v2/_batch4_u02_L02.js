// Batch 4 — Unit 02 Lesson 2: Hobbies & Interests
const BATCH4_L_2 = {
  id:"jav2_u02l_b4_2", title:"しゅみ", icon:"🎨", xp:15, board:true,
  steps:[
    {type:"intro", title:"しゅみ",
     desc:"Learn to talk about hobbies and interests. This is one of the most common self-introduction topics in Japan.",
     goals:["Name common hobbies","Use suki/kirai with activities","Ask about other people's interests"]},

    {type:"teach", trg:"しゅみ", src:"hobby / interest", pos:"noun", gender:null,
     note:"Kanji: 趣味. One of the first things asked in self-introductions.",
     example:"しゅみはなんですか？",
     exampleSrc:"What is your hobby?",
     funFact:"In Japan, listing your shumi is part of every self-introduction speech (jikoshoukai). Students, new employees, and even speed daters always mention their hobbies."},

    {type:"teach", trg:"どくしょ", src:"reading (books)", pos:"noun", gender:null,
     note:"Kanji: 読書. Read + book. More literary than 'hon wo yomu.'",
     example:"しゅみはどくしょです。",
     exampleSrc:"My hobby is reading.",
     funFact:"Japan has one of the highest literacy rates in the world (99%). Train commuters reading novels and manga is an iconic Tokyo scene. Japan publishes over 70,000 new books each year."},

    {type:"teach", trg:"りょこう", src:"travel / trip", pos:"noun", gender:null,
     note:"Kanji: 旅行. Journey + go. Can be a suru verb: りょこうする.",
     example:"らいげつりょこうにいきます。",
     exampleSrc:"I am going on a trip next month.",
     funFact:"Japanese tourists are known worldwide for their thoroughness. Guidebooks like Chikyu no Arukikata (How to Walk the Earth) cover every country. Japan is also a top destination, attracting over 30 million visitors yearly."},

    {type:"teach", trg:"うんどう", src:"exercise / sports", pos:"noun", gender:null,
     note:"Kanji: 運動. Move + motion. General term for physical activity.",
     example:"まいにちうんどうをしています。",
     exampleSrc:"I exercise every day.",
     funFact:"Japan's annual Sports Day (体育の日) is a national holiday in October. Many companies and schools hold undoukai (sports festivals) with relay races, tug-of-war, and dance performances."},

    {type:"teach", trg:"さんぽ", src:"a walk / stroll", pos:"noun", gender:null,
     note:"Kanji: 散歩. Scatter + step. Suru verb: さんぽする.",
     example:"こうえんでさんぽをしました。",
     exampleSrc:"I took a walk in the park.",
     funFact:"Sanpo is deeply embedded in Japanese wellness culture. Morning walks are recommended by doctors. The anime film My Neighbor Totoro features the famous 'Sanpo' theme song that every Japanese child knows."},

    {type:"teach", trg:"えいが", src:"movie / film", pos:"noun", gender:null,
     note:"Kanji: 映画. Reflect + picture. Used for both watching and the art form.",
     example:"しゅうまつにえいがをみました。",
     exampleSrc:"I watched a movie on the weekend.",
     funFact:"Japan's film industry is one of the oldest in the world. Studio Ghibli, directed by Miyazaki Hayao, is beloved globally. Japan also produces more anime films than any other country."},

    {type:"teach", trg:"りょうり", src:"cooking / cuisine", pos:"noun", gender:null,
     note:"Kanji: 料理. Measure + manage. Both the act and the result.",
     example:"りょうりがじょうずですね。",
     exampleSrc:"You are good at cooking.",
     funFact:"Japanese washoku (和食) was designated a UNESCO Intangible Cultural Heritage in 2013. The emphasis on seasonal ingredients, presentation, and balance makes it unique among world cuisines."},

    {type:"teach", trg:"おんがく", src:"music", pos:"noun", gender:null,
     note:"Kanji: 音楽. Sound + enjoyment.",
     example:"おんがくをきくのがすきです。",
     exampleSrc:"I like listening to music.",
     funFact:"Japan is the second-largest music market in the world after the US. Physical CDs still sell well because fans buy them for bonus content and to support their favorite artists at handshake events."},

    {type:"teach", trg:"ゲーム", src:"game / video game", pos:"noun", gender:null,
     note:"From English 'game.' In Japan, usually refers to video games specifically.",
     example:"あたらしいゲームをかいました。",
     exampleSrc:"I bought a new game.",
     funFact:"Japan is the birthplace of Nintendo, Sony PlayStation, and countless iconic games: Mario, Pokemon, Final Fantasy, Zelda. The Japanese game industry shaped global entertainment."},

    {type:"teach", trg:"カラオケ", src:"karaoke", pos:"noun", gender:null,
     note:"Japanese invention. Kara (empty) + oke (orchestra).",
     example:"カラオケにいきましょう！",
     exampleSrc:"Let's go to karaoke!",
     funFact:"Invented in Japan in 1971 by Daisuke Inoue. Unlike Western karaoke bars, Japanese karaoke uses private rooms where groups sing together. It is a standard after-work activity and a date option."},

    {type:"teach", trg:"つり", src:"fishing", pos:"noun", gender:null,
     note:"From the verb つる (to fish). A very popular hobby in Japan.",
     example:"ちちはつりがすきです。",
     exampleSrc:"My father likes fishing.",
     funFact:"Fishing is one of Japan's most popular hobbies. There are fishing ponds in Tokyo shopping malls, fishing video games, and fishing manga. Sea fishing from piers is a beloved weekend activity."},

    {type:"teach", trg:"しゃしん", src:"photograph / photo", pos:"noun", gender:null,
     note:"Kanji: 写真. Copy + truth. Photography captures truth.",
     example:"しゃしんをとってもいいですか？",
     exampleSrc:"May I take a photo?",
     funFact:"写真 literally means 'copy truth.' Canon and Nikon, two of the world's top camera makers, are Japanese. The culture of photography is so strong that 'shashin wo toru' is one of the first phrases tourists learn."},

    {type:"teach", trg:"じょうず", src:"skilled / good at", pos:"adj", gender:null,
     note:"Na-adjective. Kanji: 上手. Opposite: へた (unskilled).",
     example:"にほんごがじょうずですね。",
     exampleSrc:"Your Japanese is good!",
     funFact:"Saying 'nihongo ga jouzu desu ne' to a foreigner is so common it has become a meme. Even saying 'konnichiwa' can trigger this response. Japanese people use it to be encouraging."},

    {type:"teach", trg:"へた", src:"unskilled / bad at", pos:"adj", gender:null,
     note:"Na-adjective. Kanji: 下手. Opposite of じょうず.\nOften used about oneself as modesty.",
     example:"わたしはうたがへたです。",
     exampleSrc:"I am bad at singing.",
     funFact:"Japanese culture values modesty. Saying you are heta at something (even if you are good) is considered polite. If someone compliments your skill, the standard response is 'mada mada desu' (not yet, not yet)."},

    {type:"mc", q:"What does しゅみ mean?",
     opts:["hobby","job","name","age"], ans:"hobby",
     hint:"Asked in nearly every self-introduction in Japan."},

    {type:"fb", s:"しゅみは{1}です。", a:"どくしょ",
     sSrc:"My hobby is reading.",
     opts:["どくしょ","しゅみ","にほんご","しゅっしん"],
     hint:"The formal word for reading books as a pastime."},

    {type:"mc", q:"カラオケ is made from which two words?",
     opts:["empty + orchestra","song + room","voice + box","music + play"], ans:"empty + orchestra",
     hint:"Kara means e..., oke is short for o...."},

    {type:"match", pairs:[
      {trg:"りょうり", src:"cooking"},
      {trg:"さんぽ", src:"a walk"},
      {trg:"えいが", src:"movie"},
      {trg:"つり", src:"fishing"}
    ]},

    {type:"fb", s:"にほんごが{1}ですね。", a:"じょうず",
     sSrc:"Your Japanese is good!",
     opts:["じょうず","へた","すき","きらい"],
     hint:"A compliment meaning skilled or good at something."},

    {type:"mc", q:"What is the opposite of じょうず?",
     opts:["へた","すき","きらい","じょうぶ"], ans:"へた",
     hint:"Means unskilled, poor at something, the opposite of skilled."},

    {type:"mc", q:"しゃしん means:",
     opts:["photograph","painting","drawing","film"], ans:"photograph",
     hint:"Literally 'copy truth,' capturing reality in an image."}
  ]
};
export default BATCH4_L_2;
