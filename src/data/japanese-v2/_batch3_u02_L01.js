// Unit 02 Batch3 L01. Hobbies, Family, & Describing Yourself
// New vocab: しゅみ, スポーツ, おんがく, どくしょ, りょこう, えいが,
// かぞく, ちち, はは, あに, あね, いもうと, おとうと — all absent from
// unit-02.js and _temp_u02 files (which cover more occupations / languages).
const BATCH3_L_1 = {
  id:"jav2_u2l_b3_1", title:"しゅみとかぞく", icon:"🎵", xp:15, board:true,
  steps:[
    {type:"intro", title:"しゅみとかぞく",
     desc:"Learn to talk about your hobbies and your family members. These topics come up in almost every self-introduction in Japanese and are essential for real conversation.",
     goals:["Name popular hobbies in Japanese","Introduce family members correctly","Use suki desu to express personal interests"]},

    {type:"teach", trg:"しゅみ", src:"hobby / interest", pos:"noun", gender:null,
     note:"The word you need when someone asks 'what do you do for fun?'\nKanji: 趣味.",
     example:"A: しゅみはなんですか？\nB: おんがくをきくことです。",
     exampleSrc:"A: What is your hobby?\nB: Listening to music.",
     funFact:"趣 (taste/preference) + 味 (flavor/taste). A hobby is literally something that has flavor for you, something you savor. The question 'shumi wa?' is the most common conversation starter in Japan after exchanging names."},

    {type:"teach", trg:"スポーツ", src:"sport(s)", pos:"noun", gender:null,
     note:"Loanword from English. Written in katakana. Popular in Japan.\nスポーツをする = to do sport.",
     example:"A: しゅみはスポーツですか？\nB: はい、やきゅうがすきです。",
     exampleSrc:"A: Is your hobby sport?\nB: Yes, I like baseball.",
     funFact:"Baseball (yakyu) and soccer (sakka) are the most popular sports in Japan. Japan's high school baseball tournament (Koshien) is a national obsession broadcast on live TV. Japanese baseball has passionate fans, beloved team songs, and a culture all its own."},

    {type:"teach", trg:"おんがく", src:"music", pos:"noun", gender:null,
     note:"General word for music. Listening to music: おんがくをきく.\nKanji: 音楽.",
     example:"A: どんなおんがくがすきですか？\nB: ジャズがすきです。",
     exampleSrc:"A: What kind of music do you like?\nB: I like jazz.",
     funFact:"音 (sound) + 楽 (enjoyment/comfort). Music is 'enjoyable sound.' Karaoke, invented in Japan in 1971, became a global phenomenon. J-Pop (Japanese pop) and city pop have found huge international audiences through streaming platforms."},

    {type:"teach", trg:"どくしょ", src:"reading (books)", pos:"noun", gender:null,
     note:"The hobby of reading. More specific than hon wo yomu (to read books).\nKanji: 読書.",
     example:"A: しゅみはどくしょです。\nB: どんなほんがすきですか？",
     exampleSrc:"A: My hobby is reading.\nB: What kind of books do you like?",
     funFact:"読 (read) + 書 (write/document). Japan consistently ranks among the world's top-reading nations. Manga (comics) are counted as literature. Japan's publishing industry is the third largest in the world. Light novels (raito noberu) for young adults are a uniquely Japanese genre."},

    {type:"mc", q:"しゅみはなんですか means:", opts:["How are you?","What is your job?","Where are you from?","What is your hobby?"],
     ans:"What is your hobby?",
     hint:"Shumi means h.../interest. The question asks what yours is."},

    {type:"teach", trg:"りょこう", src:"travel", pos:"noun", gender:null,
     note:"Traveling as a hobby. りょこうをする = to travel.\nKanji: 旅行.",
     example:"A: しゅみはりょこうです。\nB: どこへよくいきますか？",
     exampleSrc:"A: My hobby is travel.\nB: Where do you often go?",
     funFact:"旅 (journey) + 行 (go). Japanese people are famid for taking photos at tourist spots. They introduced the word 'itinerary culture': hyper-organized trips with every minute planned. Japan has about 5 UNESCO World Heritage sites including Kyoto, Nara, and Hiroshima."},

    {type:"teach", trg:"えいが", src:"movie / film", pos:"noun", gender:null,
     note:"Watching movies is one of the most common hobbies. えいがをみる = to watch a movie.\nKanji: 映画.",
     example:"A: えいががすきですか？\nB: はい、にほんえいががすきです。",
     exampleSrc:"A: Do you like movies?\nB: Yes, I like Japanese films.",
     funFact:"映 (reflect/project) + 画 (picture/draw). Japanese cinema is famous worldwide: Kurosawa Akira, Miyazaki Hayao, and Ghibli Studio. Spirited Away won the Academy Award for Best Animated Feature. The Japanese film industry produces about 600 films per year."},

    {type:"fb", s:"{1}がすきです。(I like music.)",
     a:"おんがく",
     opts:["おんがく","どくしょ","りょこう","えいが"],
     hint:"The noun meaning 'music,' literally 'enjoyable sound.'",
     sSrc:"I like music."},

    {type:"teach", trg:"かぞく", src:"family", pos:"noun", gender:null,
     note:"Your own family as a group. Polite/someone else's family: ごかぞく.\nKanji: 家族.",
     example:"A: かぞくはなんにんですか？\nB: よにんです。ちちとははとあにがいます。",
     exampleSrc:"A: How many people are in your family?\nB: Four. There is my father, mother, and older brother.",
     funFact:"Japanese has different words for family members depending on whether you mean your OWN family (humble) or SOMEONE ELSE'S (polite). Your father is chichi, but their father is otousan. Your mother is haha, but their mother is okaasan. This dual system reflects deep social awareness."},

    {type:"teach", trg:"ちち", src:"my father", pos:"noun", gender:null,
     note:"Humble word for your own father. Use when talking about him to others.\nPolite form for someone else's father: おとうさん.",
     example:"A: おとうさんはおしごとは？\nB: ちちはかいしゃいんです。",
     exampleSrc:"A: What does your father do?\nB: My father is an office worker.",
     funFact:"Japanese uses two vocabularies for family: humble (your own) and honorific (others'). Chichi (my father), haha (my mother), ani (my older brother). Otousan, okaasan, oniisan for others. Using the wrong one is a significant social error."},

    {type:"teach", trg:"はは", src:"my mother", pos:"noun", gender:null,
     note:"Humble word for your own mother. Someone else's mother: おかあさん.",
     example:"A: はははりょうりがじょうずです。\nB: いいですね。",
     exampleSrc:"A: My mother is good at cooking.\nB: That is nice.",
     funFact:"Haha is ancient Japanese for mother, connecting to the sound a baby makes when nursing. The same root gives ohaha (obsolete) and okaasan (modern polite form). This is one of the most universally cross-linguistic baby words."},

    {type:"mc", q:"How do you refer to YOUR father when talking to someone else?",
     opts:["おとうさん","おにいさん","ちち","あに"],
     ans:"ちち",
     hint:"The humble word for your own father, not the polite form you use for someone else's."},

    {type:"teach", trg:"あに", src:"my older brother", pos:"noun", gender:null,
     note:"Humble word for your own older brother. Someone else's: おにいさん.",
     example:"A: きょうだいはいますか？\nB: はい、あにがひとりいます。",
     exampleSrc:"A: Do you have siblings?\nB: Yes, I have one older brother.",
     funFact:"Japanese age hierarchy is built into family vocabulary. Ani (my older brother) vs otouto (my younger brother). The older sibling always has a different word from the younger. In traditional families, older siblings are addressed by title, never by name."},

    {type:"teach", trg:"あね", src:"my older sister", pos:"noun", gender:null,
     note:"Humble word for your own older sister. Someone else's: おねえさん.",
     example:"A: あねはとうきょうにすんでいます。\nB: そうですか。",
     exampleSrc:"A: My older sister lives in Tokyo.\nB: Is that so.",
     funFact:"Ane (older sister) and oneesan (polite 'older sister') are widely used. Young women are often called oneesan by shop staff as a friendly address even if they are not literally sisters. It conveys respect and warmth."},

    {type:"teach", trg:"おとうと", src:"my younger brother", pos:"noun", gender:null,
     note:"Word for your own younger brother. (No separate polite form for someone else's younger sibling: just use おとうとさん.)",
     example:"A: おとうとはがくせいですか？\nB: はい、こうこうせいです。",
     exampleSrc:"A: Is your younger brother a student?\nB: Yes, he is a high school student.",
     funFact:"Otouto comes from 'younger' (otto = husband in modern usage, but older meaning 'young man'). Younger siblings in Japan address older ones as oniisan or oneesan, never by given name alone. Age order shapes every family interaction."},

    {type:"teach", trg:"いもうと", src:"my younger sister", pos:"noun", gender:null,
     note:"Word for your own younger sister. Polite: いもうとさん.",
     example:"A: いもうとはなんさいですか？\nB: じゅうごさいです。",
     exampleSrc:"A: How old is your younger sister?\nB: She is fifteen.",
     funFact:"Imouto has become famous globally through anime. The word is so frequently used in Japanese media that many international fans learn it before other family words. In real life, younger sisters might call older siblings by title but are called by name themselves."},

    {type:"match", pairs:[
      {trg:"ちち", src:"my father"},
      {trg:"はは", src:"my mother"},
      {trg:"あに", src:"my older brother"},
      {trg:"あね", src:"my older sister"}
    ]},

    {type:"match", pairs:[
      {trg:"おとうと", src:"my younger brother"},
      {trg:"いもうと", src:"my younger sister"},
      {trg:"かぞく", src:"family"},
      {trg:"しゅみ", src:"hobby"}
    ]},

    {type:"fb", s:"わたしのしゅみは{1}です。(My hobby is travel.)",
     a:"りょこう",
     opts:["りょこう","おんがく","どくしょ","スポーツ"],
     hint:"The hobby noun meaning 'travel,' combining characters for 'journey' and 'go.'",
     sSrc:"My hobby is travel."},

    {type:"mc", q:"かぞくはなんにんですか means:", opts:["Do you have a family?","Who is your family?","Where does your family live?","How many people are in your family?"],
     ans:"How many people are in your family?",
     hint:"Nannin means 'how many people.' Kazoku is family."},
  ]
};
export default BATCH3_L_1;
