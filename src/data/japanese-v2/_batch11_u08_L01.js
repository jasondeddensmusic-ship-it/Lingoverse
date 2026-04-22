// Batch 11 – Unit 08 (A1.3 Places & Location): Location Prepositions
const BATCH11_L1 = {
  id:"jav2_u08l_b11_1", title:"場所(ばしょ)のことば", icon:"📌", xp:15, board:true,
  steps:[
    {type:"intro", title:"場所(ばしょ)のことば",
     desc:"Master the essential location words for describing where things are. Japanese uses specific nouns for spatial relationships rather than prepositions.",
     goals:["Use all basic location nouns: 上(うえ), 下(した), 中(なか), 外(そと), 横(よこ), 隣(となり)","Combine location words with の and に","Describe where objects and places are"]},

    {type:"teach", trg:"中(なか)", src:"inside", pos:"noun", gender:null,
     note:"X の中(なか)に = inside X. Very common.\n箱(はこ)の中(なか) = inside the box.",
     example:"A: 鍵(かぎ)はかばんの中(なか)にあります。\nB: あ、ありました！ありがとう。",
     exampleSrc:"A: The key is inside the bag.\nB: Oh, I found it! Thank you.",
     funFact:"中(なか) (中) is one of the most productive kanji in Japanese. It appears in 中国(ちゅうごく) (China, literally 'middle country'), 一日中(いちにちじゅう) (all day long), and 世界中(せかいじゅう) (around the world). The concept of 'inside/middle' is fundamental to Japanese spatial thinking."},

    {type:"teach", trg:"外(そと)", src:"outside", pos:"noun", gender:null,
     note:"X の外(そと)に = outside X. Opposite of 中(なか).\n外(そと)に出(で)る = to go outside.",
     example:"A: 外(そと)は寒(さむ)いですか？\nB: はい、コートを着(き)たほうがいいですよ。",
     exampleSrc:"A: Is it cold outside?\nB: Yes, you should wear a coat.",
     funFact:"外(そと) (外) also appears in 外国(がいこく) (foreign country, literally 'outside country'), 外国人(がいこくじん) (foreigner, 'outside-country person'), and 外側(そとがわ) (exterior/outside). The inside/outside distinction is deeply embedded in Japanese social concepts like うち (in-group) vs 外(そと) (out-group)."},

    {type:"teach", trg:"横(よこ)", src:"beside / next to", pos:"noun", gender:null,
     note:"X の横(よこ)に = beside X. Similar to 隣(となり) but for non-similar items.\n横(よこ)に並(なら)ぶ = line up side by side.",
     example:"A: 銀行(ぎんこう)の横(よこ)にコンビニがあります。\nB: 便利(べんり)ですね。",
     exampleSrc:"A: There is a convenience store beside the bank.\nB: That is convenient.",
     funFact:"横(よこ) and 隣(となり) both mean 'next to' but differ subtly. 横(よこ) is for physical side-by-side position (a vase beside a lamp). 隣(となり) is for adjacent similar things (the next house, the next seat). In practice, they are often interchangeable in daily speech."},

    {type:"teach", trg:"隣(となり)", src:"next door / adjacent", pos:"noun", gender:null,
     note:"X の隣(となり)に = next to X (for similar/adjacent things).\n隣(となり)の人(ひと) = the person next to you.",
     example:"A: 隣(となり)の部屋(へや)はだれのですか？\nB: 山田(やまだ)さんの部屋(へや)です。",
     exampleSrc:"A: Whose room is the one next door?\nB: It is Yamada-san's room.",
     funFact:"隣(となり) is famous from the Studio Ghibli film 隣(となり)のトトロ (My Neighbor Totoro). The word specifically suggests adjacency of similar things: neighboring houses, adjacent seats, or the next person in line. It carries a warmer, more familiar feeling than 横(よこ)."},

    {type:"teach", trg:"周(まわ)り", src:"around / surroundings", pos:"noun", gender:null,
     note:"X の周(まわ)りに = around X.\n周(まわ)りを見(み)る = look around.",
     example:"A: 公園(こうえん)の周(まわ)りに桜(さくら)が咲(さ)いています。\nB: きれいですね。お花見(はなみ)に行(い)きましょう。",
     exampleSrc:"A: Cherry blossoms are blooming around the park.\nB: Beautiful. Let's go flower viewing.",
     funFact:"周(まわ)り (周り) conveys the idea of encirclement. 周(まわ)りの人(ひと) means 'the people around you' (your social circle). Japanese culture emphasizes 周(まわ)りを見(み)る (looking at your surroundings), reading the atmosphere before acting, which connects to the concept of 空気(くうき)を読(よ)む."},

    {type:"teach", trg:"近(ちか)く", src:"near / nearby", pos:"noun", gender:null,
     note:"X の近(ちか)くに = near X. Adjective form: 近(ちか)い.\n近(ちか)くのコンビニ = nearby convenience store.",
     example:"A: 近(ちか)くにレストランはありますか？\nB: はい、駅(えき)の近(ちか)くにあります。",
     exampleSrc:"A: Is there a restaurant nearby?\nB: Yes, there is one near the station.",
     funFact:"近(ちか)く works as both a noun (近(ちか)くに = near) and has an adjective form 近(ちか)い (near/close). Japanese learners often confuse it with 地下鉄(ちかてつ) (subway, literally 'underground railway'). The same kanji 近 appears in 近所(きんじょ) (neighborhood)."},

    {type:"teach", trg:"遠(とお)く", src:"far away", pos:"noun", gender:null,
     note:"遠(とお)くに = far away. Adjective form: 遠(とお)い.\nOpposite of 近(ちか)く.",
     example:"A: 学校(がっこう)は遠(とお)いですか？\nB: いいえ、歩(ある)いて十分(じゅっぷん)です。",
     exampleSrc:"A: Is the school far?\nB: No, it is ten minutes on foot.",
     funFact:"遠(とお)い/遠(とお)く has an emotional dimension too. 遠(とお)いむかし means 'long ago' (far past). 遠(とお)い目(め) (distant eyes) describes a wistful, faraway gaze. Japanese uses spatial distance metaphors for time and emotions just like English does."},

    {type:"teach", trg:"間(あいだ)", src:"between (two things)", pos:"noun", gender:null,
     note:"A と B の間(あいだ) = between A and B.\nSpatial and temporal use.",
     example:"A: 銀行(ぎんこう)と郵便局(ゆうびんきょく)の間(あいだ)にカフェがあります。\nB: 知(し)っていますか？おいしいですよ。",
     exampleSrc:"A: There is a cafe between the bank and post office.\nB: Do you know it? It is delicious.",
     funFact:"間(あいだ) (間) is one of the most important kanji in Japanese philosophy. ま (also read from 間) represents the concept of 'space between,' which is fundamental to Japanese aesthetics. In music, art, and conversation, the pause between notes, strokes, or words is as important as the sounds themselves."},

    {type:"teach", trg:"向(む)かい", src:"across from / opposite", pos:"noun", gender:null,
     note:"X の向(む)かいに = across from X.\n向(む)かい側(がわ) = the opposite side.",
     example:"A: ホテルの向(む)かいにコンビニがあります。\nB: よかった、便利(べんり)ですね。",
     exampleSrc:"A: There is a convenience store across from the hotel.\nB: Great, that is convenient.",
     funFact:"向(む)かい comes from 向(む)かう (to face toward). Japanese spatial descriptions are more precise than English: 向(む)かい (facing opposite), ななめ向(む)かい (diagonally opposite), ま向(む)かい (directly opposite). Streets in Japan often lack names, so location descriptions using these words are essential."},

    {type:"teach", trg:"手前(てまえ)", src:"this side of / before reaching", pos:"noun", gender:null,
     note:"X の手前(てまえ) = this side of X (closer to speaker).\nUseful for giving directions.",
     example:"A: 信号(しんごう)の手前(てまえ)を右(みぎ)に曲(ま)がってください。\nB: わかりました。",
     exampleSrc:"A: Turn right just before the traffic light.\nB: Understood.",
     funFact:"手前(てまえ) literally means 'before the hand' and indicates something on the speaker's side, not yet reaching the reference point. It is extremely useful in directions: 駅(えき)の手前(てまえ) = just before the station (on your way there). The humble speech use 手前(てまえ) (I, myself) is archaic but appears in period dramas."},

    {type:"teach", trg:"奥(おく)", src:"the back / interior / deep inside", pos:"noun", gender:null,
     note:"X の奥(おく)に = deep inside X, at the back.\n奥(おく)さま = wife (literally: the person in the back).",
     example:"A: お手洗(てあら)いはどこですか？\nB: 奥(おく)の左側(ひだりがわ)にあります。",
     exampleSrc:"A: Where is the restroom?\nB: It is on the left side in the back.",
     funFact:"奥(おく) (奥) carries the nuance of depth and hidden interior. 奥(おく)さん (wife) literally means 'the person deep inside the house,' reflecting the traditional role. 奥(おく)の細道(ほそみち) is Basho's famous haiku travel journal, literally 'The Narrow Road to the Deep Interior.'"},

    // Quiz steps
    {type:"mc", q:"「横(よこ)」と「隣(となり)」はどう違(ちが)いますか？",
     opts:["横(よこ) is for any side position, 隣(となり) is for adjacent similar things","They are exactly the same","横(よこ) is polite, 隣(となり) is casual","横(よこ) is for people, 隣(となり) is for places"],
     ans:"横(よこ) is for any side position, 隣(となり) is for adjacent similar things",
     hint:"横(よこ) works for any lateral closeness (a cup near a bowl). 隣(となり) requires the two items to be comparable (the seat next to yours, the store next to yours)."},

    {type:"fb", s:"鍵(かぎ)はかばんの{1}にあります。",
     a:["中(なか)"],
     opts:["中(なか)","外(そと)","上(うえ)","横(よこ)"],
     hint:"The key is inside the bag. Which location word means 'inside'?",
     sSrc:"The key is inside the bag."},

    {type:"match", pairs:[
      {trg:"中(なか)", src:"inside"},
      {trg:"外(そと)", src:"outside"},
      {trg:"近(ちか)く", src:"nearby"},
      {trg:"遠(とお)く", src:"far away"}
    ]},

    {type:"mc", q:"「奥(おく)」の意味(いみ)はなんですか？",
     opts:["The top","The back / deep inside","The front","The side"],
     ans:"The back / deep inside",
     hint:"This word describes the innermost, furthest-in part of a space. It also appears in 奥(おく)さん (another person's wife)."},

    {type:"fb", s:"信号(しんごう)の{1}を右(みぎ)に曲(ま)がってください。",
     a:["手前(てまえ)"],
     opts:["手前(てまえ)","向(む)かい","横(よこ)","上(うえ)"],
     hint:"Turn right BEFORE reaching the traffic light. This word means 'this side of' or 'just before.'",
     sSrc:"Turn right just before the traffic light."},

    {type:"mc", q:"A と B の「間(あいだ)」はどういう意味(いみ)ですか？",
     opts:["Far from A and B","Behind A and B","Between A and B","Next to A and B"],
     ans:"Between A and B",
     hint:"This word describes the space separating two things, positioned in the middle."}
  ,{type:"match",pairs:[{trg:"周(まわ)り",src:"around / surroundings"},{trg:"間(あいだ)",src:"between (two things)"},{trg:"向(む)かい",src:"across from / opposite"},{trg:"奥(おく)",src:"the back / interior / deep inside"}]}]
};
export default BATCH11_L1;
