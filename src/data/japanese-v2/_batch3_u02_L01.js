// Unit 02 Batch3 L01. Hobbies, Family, & Describing Yourself
// New vocab: しゅみ, スポーツ, おんがく, どくしょ, りょこう, えいが,
// かぞく, ちち, はは, あに, あね, いもうと, おとうと — all absent from
// unit-02.js and _temp_u02 files (which cover more occupations / languages).
const BATCH3_L_1 = {
  id:"jav2_u2l_b3_1", title:"趣味(しゅみ)と家族(かぞく)", icon:"🎵", xp:15, board:true,
  steps:[
    {type:"intro", title:"趣味(しゅみ)と家族(かぞく)",
     desc:"Learn to talk about your hobbies and your family members. These topics come up in almost every self-introduction in Japanese and are essential for real conversation.",
     goals:["Name popular hobbies in Japanese","Introduce family members correctly","Use suki desu to express personal interests"]},

    {type:"teach", trg:"趣味(しゅみ)", src:"hobby / interest", pos:"noun", gender:null,
     note:"The word you need when someone asks 'what do you do for fun?'\nKanji: 趣味.",
     example:"A: 趣味(しゅみ)は何(なん)ですか？\nB: 音楽(おんがく)を聞(き)くことです。",
     exampleSrc:"A: What is your hobby?\nB: Listening to music.",
     funFact:"趣 (taste/preference) + 味 (flavor/taste). A hobby is literally something that has flavor for you, something you savor. The question 'shumi wa?' is the most common conversation starter in Japan after exchanging names."},

    {type:"teach", trg:"スポーツ", src:"sport(s)", pos:"noun", gender:null,
     note:"Loanword from English. Written in katakana. Popular in Japan.\nスポーツをする = to do sport.",
     example:"A: 趣味(しゅみ)はスポーツですか？\nB: はい、野球(やきゅう)が好(す)きです。",
     exampleSrc:"A: Is your hobby sport?\nB: Yes, I like baseball.",
     funFact:"Baseball (yakyu) and soccer (sakka) are the most popular sports in Japan. Japan's high school baseball tournament (Koshien) is a national obsession broadcast on live TV. Japanese baseball has passionate fans, beloved team songs, and a culture all its own."},

    {type:"teach", trg:"音楽(おんがく)", src:"music", pos:"noun", gender:null,
     note:"General word for music. Listening to music: 音楽(おんがく)を聞(き)く.\nKanji: 音楽.",
     example:"A: どんな音楽(おんがく)が好(す)きですか？\nB: ジャズが好(す)きです。",
     exampleSrc:"A: What kind of music do you like?\nB: I like jazz.",
     funFact:"音 (sound) + 楽 (enjoyment/comfort). Music is 'enjoyable sound.' Karaoke, invented in Japan in 1971, became a global phenomenon. J-Pop (Japanese pop) and city pop have found huge international audiences through streaming platforms."},

    {type:"teach", trg:"読書(どくしょ)", src:"reading (books)", pos:"noun", gender:null,
     note:"The hobby of reading. More specific than 本(ほん)を読(よ)む (to read books).\nKanji: 読書.",
     example:"A: 趣味(しゅみ)は読書(どくしょ)です。\nB: どんな本(ほん)が好(す)きですか？",
     exampleSrc:"A: My hobby is reading.\nB: What kind of books do you like?",
     funFact:"読 (read) + 書 (write/document). Japan consistently ranks among the world's top-reading nations. Manga (comics) are counted as literature. Japan's publishing industry is the third largest in the world. Light novels (raito noberu) for young adults are a uniquely Japanese genre."},

    {type:"mc", q:"趣味(しゅみ)は何(なん)ですか means:", opts:["How are you?","What is your job?","Where are you from?","What is your hobby?"],
     ans:"What is your hobby?",
     hint:"Shumi means h.../interest. The question asks what yours is."},

    {type:"teach", trg:"旅行(りょこう)", src:"travel", pos:"noun", gender:null,
     note:"Traveling as a hobby. 旅行(りょこう)をする = to travel.\nKanji: 旅行.",
     example:"A: 趣味(しゅみ)は旅行(りょこう)です。\nB: どこへよく行(い)きますか？",
     exampleSrc:"A: My hobby is travel.\nB: Where do you often go?",
     funFact:"旅 (journey) + 行 (go). Japanese people are famid for taking photos at tourist spots. They introduced the word 'itinerary culture': hyper-organized trips with every minute planned. Japan has about 5 UNESCO World Heritage sites including Kyoto, Nara, and Hiroshima."},

    {type:"teach", trg:"映画(えいが)", src:"movie / film", pos:"noun", gender:null,
     note:"Watching movies is one of the most common hobbies. 映画(えいが)を見(み)る = to watch a movie.\nKanji: 映画.",
     example:"A: 映画(えいが)が好(す)きですか？\nB: はい、日本(にほん)映画(えいが)が好(す)きです。",
     exampleSrc:"A: Do you like movies?\nB: Yes, I like Japanese films.",
     funFact:"映 (reflect/project) + 画 (picture/draw). Japanese cinema is famous worldwide: Kurosawa Akira, Miyazaki Hayao, and Ghibli Studio. Spirited Away won the Academy Award for Best Animated Feature. The Japanese film industry produces about 600 films per year."},

    {type:"fb", s:"{1}が好(す)きです。(I like music.)",
     a:"音楽(おんがく)",
     opts:["音楽(おんがく)","読書(どくしょ)","旅行(りょこう)","映画(えいが)"],
     hint:"The noun meaning 'music,' literally 'enjoyable sound.'",
     sSrc:"I like music."},

    {type:"teach", trg:"家族(かぞく)", src:"family", pos:"noun", gender:null,
     note:"Your own family as a group. Polite/someone else's family: ご家族(かぞく).\nKanji: 家族.",
     example:"A: 家族(かぞく)は何人(なんにん)ですか？\nB: 四人(よにん)です。父(ちち)と母(はは)と兄(あに)がいます。",
     exampleSrc:"A: How many people are in your family?\nB: Four. There is my father, mother, and older brother.",
     funFact:"Japanese has different words for family members depending on whether you mean your OWN family (humble) or SOMEONE ELSE'S (polite). Your father is chichi, but their father is otousan. Your mother is haha, but their mother is okaasan. This dual system reflects deep social awareness."},

    {type:"teach", trg:"父(ちち)", src:"my father", pos:"noun", gender:null,
     note:"Humble word for your own father. Use when talking about him to others.\nPolite form for someone else's father: お父(とう)さん.",
     example:"A: お父(とう)さんはお仕事(しごと)は？\nB: 父(ちち)は会社員(かいしゃいん)です。",
     exampleSrc:"A: What does your father do?\nB: My father is an office worker.",
     funFact:"Japanese uses two vocabularies for family: humble (your own) and honorific (others'). Chichi (my father), haha (my mother), ani (my older brother). Otousan, okaasan, oniisan for others. Using the wrong one is a significant social error."},

    {type:"teach", trg:"母(はは)", src:"my mother", pos:"noun", gender:null,
     note:"Humble word for your own mother. Someone else's mother: お母(かあ)さん.",
     example:"A: 母(はは)は料理(りょうり)が上手(じょうず)です。\nB: いいですね。",
     exampleSrc:"A: My mother is good at cooking.\nB: That is nice.",
     funFact:"Haha is ancient Japanese for mother, connecting to the sound a baby makes when nursing. The same root gives ohaha (obsolete) and okaasan (modern polite form). This is one of the most universally cross-linguistic baby words."},

    {type:"mc", q:"How do you refer to YOUR father when talking to someone else?",
     opts:["お父(とう)さん","お兄(にい)さん","父(ちち)","兄(あに)"],
     ans:"父(ちち)",
     hint:"The humble word for your own father, not the polite form you use for someone else's."},

    {type:"teach", trg:"兄(あに)", src:"my older brother", pos:"noun", gender:null,
     note:"Humble word for your own older brother. Someone else's: お兄(にい)さん.",
     example:"A: 兄弟(きょうだい)はいますか？\nB: はい、兄(あに)が一人(ひとり)います。",
     exampleSrc:"A: Do you have siblings?\nB: Yes, I have one older brother.",
     funFact:"Japanese age hierarchy is built into family vocabulary. Ani (my older brother) vs otouto (my younger brother). The older sibling always has a different word from the younger. In traditional families, older siblings are addressed by title, never by name."},

    {type:"teach", trg:"姉(あね)", src:"my older sister", pos:"noun", gender:null,
     note:"Humble word for your own older sister. Someone else's: お姉(ねえ)さん.",
     example:"A: 姉(あね)は東京(とうきょう)に住(す)んでいます。\nB: そうですか。",
     exampleSrc:"A: My older sister lives in Tokyo.\nB: Is that so.",
     funFact:"Ane (older sister) and oneesan (polite 'older sister') are widely used. Young women are often called oneesan by shop staff as a friendly address even if they are not literally sisters. It conveys respect and warmth."},

    {type:"teach", trg:"弟(おとうと)", src:"my younger brother", pos:"noun", gender:null,
     note:"Word for your own younger brother. (No separate polite form for someone else's younger sibling: just use 弟(おとうと)さん.)",
     example:"A: 弟(おとうと)は学生(がくせい)ですか？\nB: はい、高校生(こうこうせい)です。",
     exampleSrc:"A: Is your younger brother a student?\nB: Yes, he is a high school student.",
     funFact:"Otouto comes from 'younger' (otto = husband in modern usage, but older meaning 'young man'). Younger siblings in Japan address older ones as oniisan or oneesan, never by given name alone. Age order shapes every family interaction."},

    {type:"teach", trg:"妹(いもうと)", src:"my younger sister", pos:"noun", gender:null,
     note:"Word for your own younger sister. Polite: 妹(いもうと)さん.",
     example:"A: 妹(いもうと)は何歳(なんさい)ですか？\nB: 十五歳(じゅうごさい)です。",
     exampleSrc:"A: How old is your younger sister?\nB: She is fifteen.",
     funFact:"Imouto has become famous globally through anime. The word is so frequently used in Japanese media that many international fans learn it before other family words. In real life, younger sisters might call older siblings by title but are called by name themselves."},

    {type:"match", pairs:[
      {trg:"父(ちち)", src:"my father"},
      {trg:"母(はは)", src:"my mother"},
      {trg:"兄(あに)", src:"my older brother"},
      {trg:"姉(あね)", src:"my older sister"}
    ]},

    {type:"match", pairs:[
      {trg:"弟(おとうと)", src:"my younger brother"},
      {trg:"妹(いもうと)", src:"my younger sister"},
      {trg:"家族(かぞく)", src:"family"},
      {trg:"趣味(しゅみ)", src:"hobby"}
    ]},

    {type:"fb", s:"わたしの趣味(しゅみ)は{1}です。(My hobby is travel.)",
     a:"旅行(りょこう)",
     opts:["旅行(りょこう)","音楽(おんがく)","読書(どくしょ)","スポーツ"],
     hint:"The hobby noun meaning 'travel,' combining characters for 'journey' and 'go.'",
     sSrc:"My hobby is travel."},

    {type:"mc", q:"家族(かぞく)は何人(なんにん)ですか means:", opts:["Do you have a family?","Who is your family?","Where does your family live?","How many people are in your family?"],
     ans:"How many people are in your family?",
     hint:"Nannin means 'how many p....' Kazoku is f...."},
  ]
};
export default BATCH3_L_1;
