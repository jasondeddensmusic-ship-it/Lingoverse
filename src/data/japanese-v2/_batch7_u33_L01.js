// Batch 7 – Unit 33 (B2.2 Literature): Literary & Poetic Vocabulary
const BATCH7_L1 = {
  id:"jav2_u33l_b7_1", title:"ぶんがくてきひょうげん", icon:"📚", xp:15, board:true,
  steps:[
    {type:"intro", title:"ぶんがくてきひょうげん",
     desc:"Learn literary and poetic vocabulary for understanding Japanese literature, from classical references to modern expressions. These words connect you to Japan's rich written tradition.",
     goals:["Recognize literary and poetic terms","Discuss Japanese literary works and genres","Use elevated vocabulary for artistic expression"]},

    {type:"teach", trg:"ものがたり", src:"story / tale / narrative", pos:"noun", gender:null,
     note:"Kanji: 物語. ものがたるもの = something that tells a story.\nげんじものがたり = The Tale of Genji.",
     example:"A: げんじものがたりをよんだことがありますか？\nB: げんだいごやくでよみました。",
     exampleSrc:"A: Have you read The Tale of Genji?\nB: I read it in modern translation.",
     funFact:"ものがたり (物語) literally means 'thing-telling.' The Tale of Genji (源氏物語), written by Murasaki Shikibu around 1010, is considered the world's first novel. Japanese ものがたり tradition spans 1,000+ years from classical tales to modern manga and light novels. The storytelling impulse is central to Japanese culture."},

    {type:"teach", trg:"はいく", src:"haiku (17-syllable poem)", pos:"noun", gender:null,
     note:"5-7-5 syllable structure. きご = seasonal word.\nまつおばしょう = Matsuo Basho (master poet).",
     example:"A: はいくをつくってみませんか？\nB: ごーしちーごのリズムですね。",
     exampleSrc:"A: Would you like to try writing haiku?\nB: The 5-7-5 rhythm.",
     funFact:"はいく (俳句) is the world's shortest poetry form. Matsuo Basho's 'furuike ya / kawazu tobikomu / mizu no oto' (old pond / a frog jumps in / sound of water) is the most famous はいく ever written. Japan has amateur はいく clubs nationwide. Even newspapers run daily はいく columns. The form has spread globally."},

    {type:"teach", trg:"たんか", src:"tanka (31-syllable poem)", pos:"noun", gender:null,
     note:"5-7-5-7-7 syllable structure. Older than haiku.\nまんようしゅう = oldest anthology (759 AD).",
     example:"A: まんようしゅうにはよんせんしゅのたんかがあります。\nB: にほんさいこのかしゅうですね。",
     exampleSrc:"A: The Manyoshu contains 4,000 tanka poems.\nB: Japan's oldest poetry anthology.",
     funFact:"たんか (短歌) predates haiku by centuries. The 万葉集 (Manyoshu, 759 AD) is Japan's oldest poetry collection. Unlike haiku, たんか allows emotional expression in 31 syllables. Modern たんか poets write about love, loss, and daily life. 新春歌会始め (New Year Poetry Reading) is hosted annually by the Emperor."},

    {type:"teach", trg:"ひゆ", src:"metaphor / figurative expression", pos:"noun", gender:null,
     note:"ひゆてき = metaphorical.\nひゆをつかう = to use a metaphor.",
     example:"A: じんせいはたびだというひゆはゆうめいです。\nB: にほんぶんがくにおおいですね。",
     exampleSrc:"A: The metaphor 'life is a journey' is famous.\nB: It appears often in Japanese literature.",
     funFact:"ひゆ (比喩) is central to Japanese poetic tradition. Japanese poetry relies on implied meaning (暗示) rather than direct statement. Cherry blossoms as a ひゆ for life's fleeting beauty, autumn moon for loneliness, flowing water for time's passage. Understanding ひゆ is key to reading Japanese literature."},

    {type:"teach", trg:"もののあわれ", src:"the pathos of things / bittersweet beauty", pos:"noun", gender:null,
     note:"Core Japanese aesthetic concept.\nDefines classical Japanese literary sensibility.",
     example:"A: さくらはもののあわれをかんじさせます。\nB: うつくしいけれどはかないですね。",
     exampleSrc:"A: Cherry blossoms evoke mono no aware.\nB: Beautiful yet fleeting.",
     funFact:"もののあわれ (物の哀れ) is Japan's defining aesthetic: the bittersweet awareness of impermanence. Everything beautiful is fleeting, and that knowledge makes it more beautiful. Cherry blossoms falling, autumn leaves changing, seasons passing. This concept, articulated by scholar Motoori Norinaga, permeates all Japanese art."},

    {type:"teach", trg:"さっか", src:"author / novelist / writer", pos:"noun", gender:null,
     note:"しょうせつか = novelist specifically.\nさっかになる = to become a writer.",
     example:"A: すきなさっかはだれですか？\nB: むらかみはるきがすきです。",
     exampleSrc:"A: Who is your favorite author?\nB: I like Murakami Haruki.",
     funFact:"Japan has a rich さっか culture. Two Nobel Prize winners (Kawabata Yasunari, Oe Kenzaburo), plus Murakami Haruki as a perennial Nobel favorite. The 芥川賞 (Akutagawa Prize) and 直木賞 (Naoki Prize) are major literary awards. Japan publishes more books per capita than most countries."},

    {type:"teach", trg:"すいり", src:"mystery / deduction / reasoning", pos:"noun", gender:null,
     note:"すいりしょうせつ = mystery novel.\nめいたんてい = famous detective.",
     example:"A: にほんのすいりしょうせつはにんきがあります。\nB: ひがしのけいごがゆうめいですね。",
     exampleSrc:"A: Japanese mystery novels are popular.\nB: Higashino Keigo is famous.",
     funFact:"すいり (推理) fiction is Japan's most popular literary genre. Authors like Higashino Keigo, Miyabe Miyuki, and the classic Edogawa Ranpo (pen name from 'Edgar Allan Poe') are national treasures. Japan has the 本格ミステリ (honkaku mystery, puzzle mystery) tradition emphasizing fair-play clues for the reader."},

    {type:"teach", trg:"ことわざ", src:"proverb / saying", pos:"noun", gender:null,
     note:"にほんのことわざ = Japanese proverbs.\nことわざにあるように = as the proverb says.",
     example:"A: ことわざにあるように「いしのうえにもさんねん」です。\nB: がまんすればせいこうしますね。",
     exampleSrc:"A: As the proverb says, 'three years on a stone.'\nB: If you persevere, you will succeed.",
     funFact:"Japanese ことわざ (諺) number in the thousands. Many come from Chinese classics, Buddhist teachings, or farming wisdom. Famous ones: 七転び八起き (fall 7, rise 8), 猿も木から落ちる (even monkeys fall from trees), 口は災いの元 (the mouth is the source of disaster). ことわざ are regularly tested in school exams."},

    {type:"teach", trg:"よじじゅくご", src:"four-character idiom", pos:"noun", gender:null,
     note:"Chinese-origin set phrases.\nいちごいちえ = one meeting, one chance.",
     example:"A: すきなよじじゅくごはなんですか？\nB: 一期一会です。であいをたいせつにしたいです。",
     exampleSrc:"A: What is your favorite four-character idiom?\nB: 'Ichigo ichie.' I want to treasure every encounter.",
     funFact:"よじじゅくご (四字熟語) are Chinese-origin four-kanji compounds that express complex ideas concisely. 一期一会 (treasure every encounter), 十人十色 (ten people, ten colors = everyone is different), 七転八起 (fall seven times, rise eight). Students memorize hundreds. New Year calligraphy often features a personal よじじゅくご."},

    {type:"teach", trg:"ふうし", src:"satire / irony", pos:"noun", gender:null,
     note:"ふうしする = to satirize. ふうしてき = satirical.\nせいじふうし = political satire.",
     example:"A: このマンガはしゃかいへのふうしですね。\nB: わらいながらかんがえさせられます。",
     exampleSrc:"A: This manga is social satire.\nB: It makes you think while laughing.",
     funFact:"ふうし (風刺) has a long Japanese tradition from 狂歌 (kyoka, comic tanka) to modern political cartoons. Manga like Crayon Shin-chan contain subtle ふうし of Japanese society. Japanese ふうし tends to be gentle and indirect compared to Western satire, using humor and absurdity rather than harsh criticism."},

    {type:"teach", trg:"やまとことば", src:"native Japanese words (vs Chinese-origin)", pos:"noun", gender:null,
     note:"Also: わご = native Japanese words.\nOpposite: かんご = Chinese-origin words.",
     example:"A: やまとことばはやわらかいひびきがあります。\nB: かんごはかたいかんじですね。",
     exampleSrc:"A: Yamato words have a soft sound.\nB: Chinese-origin words feel more formal.",
     funFact:"やまとことば (大和言葉) are the original Japanese words before Chinese influence. They tend to be softer and more emotional: うつくしい vs 美麗, こころ vs 精神, いのち vs 生命. Mixing やまとことば and かんご creates Japanese register variety. Poetry prefers やまとことば for emotional resonance."},

    {type:"teach", trg:"よみがえる", src:"to revive / to come back to life", pos:"verb", gender:null,
     note:"Group 1 verb. Literary/poetic. きおくがよみがえる = memories revive.\nAlso: いきかえる.",
     example:"A: このうたをきくと、むかしのきおくがよみがえります。\nB: なつかしいですね。",
     exampleSrc:"A: When I hear this song, old memories revive.\nB: Nostalgic.",
     funFact:"よみがえる (蘇る) is a literary verb meaning 'to return from the underworld.' The kanji 蘇 appears in 蘇我氏 (Soga clan) and suggests renewal from death. In modern usage, it describes vivid recall of memories, revival of traditions, or comeback from failure. It has a more poetic weight than simply 'to recover.'"},

    // Quiz steps
    {type:"mc", q:"げんじものがたり is considered:",
     opts:["The world's first novel (written around 1010)","Japan's first haiku collection","A modern manga series","A historical textbook"],
     ans:"The world's first novel (written around 1010)",
     hint:"W... by Murasaki Shikibu over 1,000 years ago, this is the w...'s earliest full-length n...."},

    {type:"match", pairs:[
      {trg:"はいく", src:"17-syllable poem"},
      {trg:"たんか", src:"31-syllable poem"},
      {trg:"ひゆ", src:"metaphor"},
      {trg:"ことわざ", src:"proverb"},
      {trg:"ふうし", src:"satire"}
    ]},

    {type:"fb", s:"さくらは{1}をかんじさせます。うつくしいけれどはかない。",
     a:["もののあわれ"],
     opts:["もののあわれ","わびさび","いきがい","ことわざ"],
     hint:"The bittersweet awareness of impermanence. Cherry blossoms are the ultimate symbol of this concept.",
     sSrc:"Cherry blossoms evoke {1}. Beautiful yet fleeting."},

    {type:"mc", q:"よじじゅくご are:",
     opts:["Four-character Chinese-origin idioms","Four-line poems","Four-word sentences","Four-part stories"],
     ans:"Four-character Chinese-origin idioms",
     hint:"These compact expressions use exactly f... kanji to convey complex ideas."},

    {type:"fb", s:"すきな{1}はだれですか？むらかみはるきがすきです。",
     a:["さっか"],
     opts:["さっか","はいく","ことわざ","ものがたり"],
     hint:"Who is your favorite writer/author? This noun means 'novelist' or 'author.'",
     sSrc:"Who is your favorite {1}? I like Murakami Haruki."},

    {type:"mc", q:"やまとことば compared to かんご sound:",
     opts:["Softer and more emotional","Harder and more formal","Identical","Louder"],
     ans:"Softer and more emotional",
     hint:"Native Japanese words have a gentler resonance than Chinese-origin formal vocabulary."},

    {type:"match", pairs:[
      {trg:"ものがたり", src:"story/tale"},
      {trg:"もののあわれ", src:"pathos of things"},
      {trg:"さっか", src:"author"},
      {trg:"すいり", src:"mystery"},
      {trg:"よじじゅくご", src:"four-character idiom"}
    ]},

    {type:"fb", s:"このうたをきくと、むかしのきおくが{1}ます。",
     a:["よみがえり"],
     opts:["よみがえり","なつかしくなり","かんどうし","もどり"],
     hint:"Old memories come vividly back to life. This literary verb means 'to revive.'",
     sSrc:"When I hear this song, old memories {1}."}
  ]
};
export default BATCH7_L1;
