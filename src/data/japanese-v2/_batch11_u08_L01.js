// Batch 11 – Unit 08 (A1.3 Places & Location): Location Prepositions
const BATCH11_L1 = {
  id:"jav2_u08l_b11_1", title:"ばしょのことば", icon:"📌", xp:15, board:true,
  steps:[
    {type:"intro", title:"ばしょのことば",
     desc:"Master the essential location words for describing where things are. Japanese uses specific nouns for spatial relationships rather than prepositions.",
     goals:["Use all basic location nouns: うえ, した, なか, そと, よこ, となり","Combine location words with の and に","Describe where objects and places are"]},

    {type:"teach", trg:"なか", src:"inside", pos:"noun", gender:null,
     note:"X のなかに = inside X. Very common.\nはこのなか = inside the box.",
     example:"A: かぎはかばんのなかにあります。\nB: あ、ありました！ありがとう。",
     exampleSrc:"A: The key is inside the bag.\nB: Oh, I found it! Thank you.",
     funFact:"なか (中) is one of the most productive kanji in Japanese. It appears in ちゅうごく (China, literally 'middle country'), いちにちじゅう (all day long), and せかいじゅう (around the world). The concept of 'inside/middle' is fundamental to Japanese spatial thinking."},

    {type:"teach", trg:"そと", src:"outside", pos:"noun", gender:null,
     note:"X のそとに = outside X. Opposite of なか.\nそとにでる = to go outside.",
     example:"A: そとはさむいですか？\nB: はい、コートをきたほうがいいですよ。",
     exampleSrc:"A: Is it cold outside?\nB: Yes, you should wear a coat.",
     funFact:"そと (外) also appears in がいこく (foreign country, literally 'outside country'), がいこくじん (foreigner, 'outside-country person'), and そとがわ (exterior/outside). The inside/outside distinction is deeply embedded in Japanese social concepts like うち (in-group) vs そと (out-group)."},

    {type:"teach", trg:"よこ", src:"beside / next to", pos:"noun", gender:null,
     note:"X のよこに = beside X. Similar to となり but for non-similar items.\nよこにならぶ = line up side by side.",
     example:"A: ぎんこうのよこにコンビニがあります。\nB: べんりですね。",
     exampleSrc:"A: There is a convenience store beside the bank.\nB: That is convenient.",
     funFact:"よこ and となり both mean 'next to' but differ subtly. よこ is for physical side-by-side position (a vase beside a lamp). となり is for adjacent similar things (the next house, the next seat). In practice, they are often interchangeable in daily speech."},

    {type:"teach", trg:"となり", src:"next door / adjacent", pos:"noun", gender:null,
     note:"X のとなりに = next to X (for similar/adjacent things).\nとなりのひと = the person next to you.",
     example:"A: となりのへやはだれのですか？\nB: やまださんのへやです。",
     exampleSrc:"A: Whose room is the one next door?\nB: It is Yamada-san's room.",
     funFact:"となり is famous from the Studio Ghibli film となりのトトロ (My Neighbor Totoro). The word specifically suggests adjacency of similar things: neighboring houses, adjacent seats, or the next person in line. It carries a warmer, more familiar feeling than よこ."},

    {type:"teach", trg:"まわり", src:"around / surroundings", pos:"noun", gender:null,
     note:"X のまわりに = around X.\nまわりをみる = look around.",
     example:"A: こうえんのまわりにさくらがさいています。\nB: きれいですね。おはなみにいきましょう。",
     exampleSrc:"A: Cherry blossoms are blooming around the park.\nB: Beautiful. Let's go flower viewing.",
     funFact:"まわり (周り) conveys the idea of encirclement. まわりのひと means 'the people around you' (your social circle). Japanese culture emphasizes まわりをみる (looking at your surroundings), reading the atmosphere before acting, which connects to the concept of 空気を読む."},

    {type:"teach", trg:"ちかく", src:"near / nearby", pos:"noun", gender:null,
     note:"X のちかくに = near X. Adjective form: ちかい.\nちかくのコンビニ = nearby convenience store.",
     example:"A: ちかくにレストランはありますか？\nB: はい、えきのちかくにあります。",
     exampleSrc:"A: Is there a restaurant nearby?\nB: Yes, there is one near the station.",
     funFact:"ちかく works as both a noun (ちかくに = near) and has an adjective form ちかい (near/close). Japanese learners often confuse it with ちかてつ (subway, literally 'underground railway'). The same kanji 近 appears in きんじょ (neighborhood)."},

    {type:"teach", trg:"とおく", src:"far away", pos:"noun", gender:null,
     note:"とおくに = far away. Adjective form: とおい.\nOpposite of ちかく.",
     example:"A: がっこうはとおいですか？\nB: いいえ、あるいてじゅっぷんです。",
     exampleSrc:"A: Is the school far?\nB: No, it is ten minutes on foot.",
     funFact:"とおい/とおく has an emotional dimension too. とおいむかし means 'long ago' (far past). とおいめ (distant eyes) describes a wistful, faraway gaze. Japanese uses spatial distance metaphors for time and emotions just like English does."},

    {type:"teach", trg:"あいだ", src:"between (two things)", pos:"noun", gender:null,
     note:"A と B のあいだ = between A and B.\nSpatial and temporal use.",
     example:"A: ぎんこうとゆうびんきょくのあいだにカフェがあります。\nB: しっていますか？おいしいですよ。",
     exampleSrc:"A: There is a cafe between the bank and post office.\nB: Do you know it? It is delicious.",
     funFact:"あいだ (間) is one of the most important kanji in Japanese philosophy. ま (also read from 間) represents the concept of 'space between,' which is fundamental to Japanese aesthetics. In music, art, and conversation, the pause between notes, strokes, or words is as important as the sounds themselves."},

    {type:"teach", trg:"むかい", src:"across from / opposite", pos:"noun", gender:null,
     note:"X のむかいに = across from X.\nむかいがわ = the opposite side.",
     example:"A: ホテルのむかいにコンビニがあります。\nB: よかった、べんりですね。",
     exampleSrc:"A: There is a convenience store across from the hotel.\nB: Great, that is convenient.",
     funFact:"むかい comes from むかう (to face toward). Japanese spatial descriptions are more precise than English: むかい (facing opposite), ななめむかい (diagonally opposite), まむかい (directly opposite). Streets in Japan often lack names, so location descriptions using these words are essential."},

    {type:"teach", trg:"てまえ", src:"this side of / before reaching", pos:"noun", gender:null,
     note:"X のてまえ = this side of X (closer to speaker).\nUseful for giving directions.",
     example:"A: しんごうのてまえをみぎにまがってください。\nB: わかりました。",
     exampleSrc:"A: Turn right just before the traffic light.\nB: Understood.",
     funFact:"てまえ literally means 'before the hand' and indicates something on the speaker's side, not yet reaching the reference point. It is extremely useful in directions: えきのてまえ = just before the station (on your way there). The humble speech use てまえ (I, myself) is archaic but appears in period dramas."},

    {type:"teach", trg:"おく", src:"the back / interior / deep inside", pos:"noun", gender:null,
     note:"X のおくに = deep inside X, at the back.\nおくさま = wife (literally: the person in the back).",
     example:"A: おてあらいはどこですか？\nB: おくのひだりがわにあります。",
     exampleSrc:"A: Where is the restroom?\nB: It is on the left side in the back.",
     funFact:"おく (奥) carries the nuance of depth and hidden interior. おくさん (wife) literally means 'the person deep inside the house,' reflecting the traditional role. おくのほそみち is Basho's famous haiku travel journal, literally 'The Narrow Road to the Deep Interior.'"},

    // Quiz steps
    {type:"mc", q:"「よこ」と「となり」はどうちがいますか？",
     opts:["よこ is for any side position, となり is for adjacent similar things","They are exactly the same","よこ is polite, となり is casual","よこ is for people, となり is for places"],
     ans:"よこ is for any side position, となり is for adjacent similar things",
     hint:"Think about a vase beside a lamp (s... p...) vs the house next door (a... s... item)."},

    {type:"fb", s:"かぎはかばんの{1}にあります。",
     a:["なか"],
     opts:["なか","そと","うえ","よこ"],
     hint:"The key is inside the bag. Which location word means 'inside'?",
     sSrc:"The key is inside the bag."},

    {type:"match", pairs:[
      {trg:"なか", src:"inside"},
      {trg:"そと", src:"outside"},
      {trg:"ちかく", src:"nearby"},
      {trg:"とおく", src:"far away"}
    ]},

    {type:"mc", q:"「おく」のいみはなんですか？",
     opts:["The back / deep inside","The front","The side","The top"],
     ans:"The back / deep inside",
     hint:"This word describes the deepest interior part of a space. It also appears in the word for 'wife' (おくさん)."},

    {type:"fb", s:"しんごうの{1}をみぎにまがってください。",
     a:["てまえ"],
     opts:["てまえ","むかい","よこ","うえ"],
     hint:"Turn right BEFORE reaching the traffic light. This word means 'this side of' or 'just before.'",
     sSrc:"Turn right just before the traffic light."},

    {type:"mc", q:"A と B の「あいだ」はどういういみですか？",
     opts:["Between A and B","Next to A and B","Far from A and B","Behind A and B"],
     ans:"Between A and B",
     hint:"This word describes the space separating two things, positioned in the middle."}
  ]
};
export default BATCH11_L1;
